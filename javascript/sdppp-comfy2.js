var Ln = Object.defineProperty;
var $n = (o, x, t) => x in o ? Ln(o, x, { enumerable: !0, configurable: !0, writable: !0, value: t }) : o[x] = t;
var me = (o, x, t) => $n(o, typeof x != "symbol" ? x + "" : x, t);
const a = K;
(function(o, x) {
  const t = K, r = o();
  for (; ; )
    try {
      if (-parseInt(t(535)) / 1 + parseInt(t(1810)) / 2 + -parseInt(t(1798)) / 3 * (parseInt(t(1193)) / 4) + parseInt(t(657)) / 5 + parseInt(t(2677)) / 6 + -parseInt(t(1966)) / 7 + parseInt(t(2995)) / 8 === x) break;
      r.push(r.shift());
    } catch {
      r.push(r.shift());
    }
})(yx, 988054);
const Te = window[a(1608)][a(2012)][a(2012)];
window.comfyAPI.ui.$el;
const R0 = window[a(1608)][a(706)][a(706)];
var as;
class Un {
  constructor(x) {
    me(this, as);
    const t = a;
    this[t(1686)] = x;
    const r = this[t(3181)]();
    if (!r[t(1122)]) throw new Error(t(2225) + r[t(2800)][t(1592)](", "));
  }
  [(as = a(1686), a(3181))]() {
    const x = a, t = [];
    (!this[x(1686)].nodes || Object[x(2123)](this[x(1686)][x(669)])[x(2710)] === 0) && t[x(3062)](x(2937));
    for (const [e, s] of this[x(1686)].edges)
      !this[x(1686)][x(669)][e] && t[x(3062)]("Edge references unknown source node: " + e), !this.definition[x(669)][s] && t[x(3062)](x(1423) + s);
    const r = this[x(2200)]();
    return !r[x(1122)] && t[x(3062)](...r[x(2800)]), { valid: t.length === 0, errors: t };
  }
  [a(2822)]() {
    const x = a, t = /* @__PURE__ */ new Map();
    for (const r of Object[x(2123)](this[x(1686)].nodes))
      t.set(r, []);
    for (const [r, e] of this[x(1686)][x(2273)]) {
      const s = t[x(674)](r) || [];
      s[x(3062)](e), t[x(780)](r, s);
    }
    return t;
  }
  [a(2200)]() {
    const x = a, t = [], r = /* @__PURE__ */ new Set(), e = /* @__PURE__ */ new Set(), s = this[x(2822)](), n = (i, c) => {
      const u = x;
      if (e[u(2348)](i)) {
        const l = c.indexOf(i), d = c[u(1387)](l)[u(2700)](i);
        return t[u(3062)]("Cycle detected: " + d[u(1592)](u(3055))), !0;
      }
      if (r.has(i)) return !1;
      r[u(1580)](i), e[u(1580)](i);
      const f = s[u(674)](i) || [];
      for (const l of f)
        if (n(l, [...c, i])) return !0;
      return e[u(875)](i), !1;
    };
    for (const i of Object[x(2123)](this[x(1686)][x(669)]))
      !r[x(2348)](i) && n(i, []);
    return { valid: t.length === 0, errors: t };
  }
  [a(1804)]() {
    const x = a, t = /* @__PURE__ */ new Map();
    for (const r of Object[x(2123)](this[x(1686)][x(669)]))
      t[x(780)](r, []);
    for (const [r, e] of this[x(1686)][x(2273)]) {
      const s = t.get(r) || [];
      s[x(3062)](e), t[x(780)](r, s);
      const n = t[x(674)](e) || [];
      n[x(3062)](r), t[x(780)](e, n);
    }
    return t;
  }
  [a(710)](x) {
    const t = a;
    return this.buildAdjacencyList()[t(674)](x) || [];
  }
  [a(1316)](x) {
    const t = a;
    return this.definition[t(669)][x];
  }
  [a(681)]() {
    const x = a;
    return Object[x(2123)](this.definition[x(669)]);
  }
  [a(1070)](x, t) {
    const r = a;
    return this.definition.edges[r(2172)](([e, s]) => e === x && s === t || e === t && s === x);
  }
  [a(1395)](x, t) {
    const r = a;
    if (x === t) return [x];
    const e = this[r(1804)](), s = [{ nodeId: x, path: [x] }], n = /* @__PURE__ */ new Set();
    for (; s[r(2710)] > 0; ) {
      const { nodeId: i, path: c } = s[r(1263)]();
      if (n[r(2348)](i)) continue;
      if (n[r(1580)](i), i === t) return c;
      const u = e[r(674)](i) || [];
      for (const f of u)
        !n[r(2348)](f) && s[r(3062)]({ nodeId: f, path: [...c, f] });
    }
    return null;
  }
  hasPath(x, t) {
    return this[a(1395)](x, t) !== null;
  }
  [a(1857)]() {
    return { ...this.definition };
  }
}
const Ca = (o) => {
  let x;
  const t = /* @__PURE__ */ new Set(), r = (u, f) => {
    const l = K, d = typeof u === l(1936) ? u(x) : u;
    if (!Object.is(d, x)) {
      const g = x;
      x = f ?? (typeof d !== l(1304) || d === null) ? d : Object[l(661)]({}, x, d), t[l(2617)]((h) => h(x, g));
    }
  }, e = () => x, s = () => c, n = (u) => {
    const f = K;
    return t.add(u), () => t[f(875)](u);
  }, i = { setState: r, getState: e, getInitialState: s, subscribe: n }, c = x = o(r, e, i);
  return i;
}, zn = (o) => o ? Ca(o) : Ca;
var Ne;
(function(o) {
  const x = a;
  o[x(1133)] = (s) => {
  };
  function t(s) {
  }
  o[x(1809)] = t;
  function r(s) {
    throw new Error();
  }
  o[x(1034)] = r, o[x(692)] = (s) => {
    const n = {};
    for (const i of s)
      n[i] = i;
    return n;
  }, o[x(1256)] = (s) => {
    const n = x, i = o[n(2493)](s)[n(2581)]((u) => typeof s[s[u]] !== n(2665)), c = {};
    for (const u of i)
      c[u] = s[u];
    return o.objectValues(c);
  }, o.objectValues = (s) => {
    const n = x;
    return o[n(2493)](s)[n(1930)](function(i) {
      return s[i];
    });
  }, o[x(2493)] = typeof Object[x(2123)] === x(1936) ? (s) => Object[x(2123)](s) : (s) => {
    const n = x, i = [];
    for (const c in s)
      Object.prototype[n(1315)][n(1522)](s, c) && i.push(c);
    return i;
  }, o[x(3146)] = (s, n) => {
    for (const i of s)
      if (n(i)) return i;
  }, o[x(2534)] = typeof Number[x(2534)] === x(1936) ? (s) => Number.isInteger(s) : (s) => typeof s === x(2665) && Number.isFinite(s) && Math.floor(s) === s;
  function e(s, n = x(1512)) {
    const i = x;
    return s[i(1930)]((c) => typeof c === i(1361) ? "'" + c + "'" : c).join(n);
  }
  o[x(2768)] = e, o.jsonStringifyReplacer = (s, n) => {
    const i = x;
    return typeof n === i(3242) ? n[i(2732)]() : n;
  };
})(Ne || (Ne = {}));
var _a;
(function(o) {
  const x = a;
  o[x(2969)] = (t, r) => ({ ...t, ...r });
})(_a || (_a = {}));
const ae = Ne.arrayToEnum([a(1361), a(1220), a(2665), a(766), a(2863), a(3106), a(1591), a(3242), a(1698), a(1936), "undefined", a(1959), a(529), a(1304), "unknown", a(810), a(1123), "never", a(1930), "set"]), E0 = (o) => {
  const x = a;
  switch (typeof o) {
    case x(993):
      return ae.undefined;
    case x(1361):
      return ae[x(1361)];
    case x(2665):
      return Number.isNaN(o) ? ae[x(1220)] : ae[x(2665)];
    case x(3106):
      return ae[x(3106)];
    case x(1936):
      return ae[x(1936)];
    case x(3242):
      return ae[x(3242)];
    case "symbol":
      return ae[x(1698)];
    case "object":
      return Array[x(3255)](o) ? ae[x(529)] : o === null ? ae[x(1959)] : o[x(2517)] && typeof o[x(2517)] === x(1936) && o[x(742)] && typeof o[x(742)] === x(1936) ? ae[x(810)] : typeof Map !== x(993) && o instanceof Map ? ae[x(1930)] : typeof Set < "u" && o instanceof Set ? ae[x(780)] : typeof Date !== x(993) && o instanceof Date ? ae.date : ae[x(1304)];
    default:
      return ae[x(1440)];
  }
}, Z = Ne[a(692)]([a(2421), a(1703), "custom", a(1572), "invalid_union_discriminator", "invalid_enum_value", a(1825), "invalid_arguments", a(765), a(1869), "invalid_string", "too_small", a(1305), a(1998), "not_multiple_of", a(2546)]);
class P0 extends Error {
  get [a(2800)]() {
    return this[a(908)];
  }
  constructor(x) {
    const t = a;
    super(), this.issues = [], this.addIssue = (e) => {
      const s = K;
      this[s(908)] = [...this[s(908)], e];
    }, this[t(2258)] = (e = []) => {
      const s = t;
      this.issues = [...this[s(908)], ...e];
    };
    const r = new.target.prototype;
    Object[t(2109)] ? Object[t(2109)](this, r) : this.__proto__ = r, this[t(2641)] = t(3054), this[t(908)] = x;
  }
  [a(802)](x) {
    const t = x || function(s) {
      return s[K(1044)];
    }, r = { _errors: [] }, e = (s) => {
      const n = K;
      for (const i of s.issues)
        if (i[n(2427)] === n(1572)) i.unionErrors[n(1930)](e);
        else if (i[n(2427)] === "invalid_return_type") e(i[n(517)]);
        else if (i[n(2427)] === n(2252)) e(i[n(1375)]);
        else if (i[n(2474)][n(2710)] === 0) r[n(1613)][n(3062)](t(i));
        else {
          let c = r, u = 0;
          for (; u < i.path[n(2710)]; ) {
            const f = i[n(2474)][u];
            u === i[n(2474)][n(2710)] - 1 ? (c[f] = c[f] || { _errors: [] }, c[f][n(1613)][n(3062)](t(i))) : c[f] = c[f] || { _errors: [] }, c = c[f], u++;
          }
        }
    };
    return e(this), r;
  }
  static [a(2746)](x) {
    const t = a;
    if (!(x instanceof P0)) throw new Error(t(1702) + x);
  }
  [a(2732)]() {
    return this.message;
  }
  get [a(1044)]() {
    const x = a;
    return JSON[x(1031)](this[x(908)], Ne[x(2161)], 2);
  }
  get [a(509)]() {
    const x = a;
    return this[x(908)][x(2710)] === 0;
  }
  [a(2343)](x = (t) => t[a(1044)]) {
    const t = a, r = {}, e = [];
    for (const s of this[t(908)])
      if (s[t(2474)][t(2710)] > 0) {
        const n = s.path[0];
        r[n] = r[n] || [], r[n].push(x(s));
      } else e[t(3062)](x(s));
    return { formErrors: e, fieldErrors: r };
  }
  get formErrors() {
    return this[a(2343)]();
  }
}
P0.create = (o) => new P0(o);
const Ut = (o, x) => {
  const t = a;
  let r;
  switch (o[t(2427)]) {
    case Z[t(2421)]:
      o[t(1412)] === ae[t(993)] ? r = t(3230) : r = t(1633) + o[t(1598)] + t(762) + o[t(1412)];
      break;
    case Z.invalid_literal:
      r = t(758) + JSON.stringify(o[t(1598)], Ne[t(2161)]);
      break;
    case Z.unrecognized_keys:
      r = t(1802) + Ne.joinValues(o.keys, ", ");
      break;
    case Z.invalid_union:
      r = t(2380);
      break;
    case Z.invalid_union_discriminator:
      r = t(2972) + Ne[t(2768)](o.options);
      break;
    case Z[t(1065)]:
      r = t(978) + Ne[t(2768)](o[t(2876)]) + t(1884) + o[t(1412)] + "'";
      break;
    case Z[t(2252)]:
      r = t(2360);
      break;
    case Z[t(765)]:
      r = t(1658);
      break;
    case Z[t(1869)]:
      r = t(2243);
      break;
    case Z[t(893)]:
      typeof o.validation == "object" ? t(2978) in o.validation ? (r = t(2333) + o[t(2183)].includes + '"', typeof o.validation[t(1293)] === t(2665) && (r = r + t(1812) + o[t(2183)][t(1293)])) : t(760) in o[t(2183)] ? r = t(1029) + o.validation[t(760)] + '"' : t(1826) in o[t(2183)] ? r = 'Invalid input: must end with "' + o[t(2183)][t(1826)] + '"' : Ne.assertNever(o[t(2183)]) : o[t(2183)] !== t(2338) ? r = t(2767) + o[t(2183)] : r = t(2283);
      break;
    case Z[t(2724)]:
      o[t(2076)] === t(529) ? r = t(3128) + (o.exact ? "exactly" : o[t(2068)] ? t(1526) : "more than") + " " + o[t(2226)] + t(1568) : o[t(2076)] === t(1361) ? r = t(1625) + (o[t(2579)] ? "exactly" : o[t(2068)] ? t(1526) : "over") + " " + o.minimum + " character(s)" : o[t(2076)] === t(2665) ? r = "Number must be " + (o[t(2579)] ? t(1956) : o[t(2068)] ? t(2197) : t(923)) + o[t(2226)] : o[t(2076)] === t(3242) ? r = t(2852) + (o[t(2579)] ? t(1956) : o[t(2068)] ? t(2197) : "greater than ") + o[t(2226)] : o[t(2076)] === t(1591) ? r = t(2626) + (o[t(2579)] ? t(1956) : o[t(2068)] ? t(2197) : t(923)) + new Date(Number(o[t(2226)])) : r = t(2380);
      break;
    case Z.too_big:
      o.type === t(529) ? r = t(3128) + (o[t(2579)] ? t(1192) : o[t(2068)] ? "at most" : t(721)) + " " + o.maximum + t(1568) : o[t(2076)] === t(1361) ? r = "String must contain " + (o.exact ? t(1192) : o[t(2068)] ? t(2912) : "under") + " " + o.maximum + " character(s)" : o[t(2076)] === "number" ? r = "Number must be " + (o[t(2579)] ? t(1192) : o[t(2068)] ? "less than or equal to" : "less than") + " " + o[t(631)] : o[t(2076)] === t(3242) ? r = "BigInt must be " + (o.exact ? t(1192) : o[t(2068)] ? t(3249) : "less than") + " " + o[t(631)] : o[t(2076)] === t(1591) ? r = t(2626) + (o[t(2579)] ? t(1192) : o.inclusive ? t(3017) : "smaller than") + " " + new Date(Number(o[t(631)])) : r = "Invalid input";
      break;
    case Z[t(1618)]:
      r = t(2380);
      break;
    case Z.invalid_intersection_types:
      r = "Intersection results could not be merged";
      break;
    case Z[t(2267)]:
      r = t(1168) + o[t(2798)];
      break;
    case Z[t(2546)]:
      r = t(2379);
      break;
    default:
      r = x[t(2272)], Ne[t(1034)](o);
  }
  return { message: r };
};
let Hn = Ut;
function Vn() {
  return Hn;
}
const Bn = (o) => {
  const x = a, { data: t, path: r, errorMaps: e, issueData: s } = o, n = [...r, ...s[x(2474)] || []], i = { ...s, path: n };
  if (s.message !== void 0) return { ...s, path: n, message: s[x(1044)] };
  let c = "";
  const u = e.filter((f) => !!f)[x(1387)]()[x(2462)]();
  for (const f of u)
    c = f(i, { data: t, defaultError: c }).message;
  return { ...s, path: n, message: c };
};
function ee(o, x) {
  const t = a, r = Vn(), e = Bn({ issueData: x, data: o[t(2663)], path: o[t(2474)], errorMaps: [o[t(1281)][t(2896)], o[t(2208)], r, r === Ut ? void 0 : Ut][t(2581)]((s) => !!s) });
  o[t(1281)][t(908)][t(3062)](e);
}
class e0 {
  constructor() {
    this.value = "valid";
  }
  [a(2329)]() {
    const x = a;
    this[x(2446)] === x(1122) && (this.value = "dirty");
  }
  [a(1158)]() {
    const x = a;
    this[x(2446)] !== "aborted" && (this[x(2446)] = x(896));
  }
  static [a(1141)](x, t) {
    const r = a, e = [];
    for (const s of t) {
      if (s.status === r(896)) return he;
      s.status === r(2329) && x.dirty(), e[r(3062)](s[r(2446)]);
    }
    return { status: x[r(2446)], value: e };
  }
  static async [a(3003)](x, t) {
    const r = a, e = [];
    for (const s of t) {
      const n = await s[r(480)], i = await s.value;
      e[r(3062)]({ key: n, value: i });
    }
    return e0.mergeObjectSync(x, e);
  }
  static [a(3048)](x, t) {
    const r = a, e = {};
    for (const s of t) {
      const { key: n, value: i } = s;
      if (n.status === "aborted" || i[r(1227)] === "aborted") return he;
      n.status === "dirty" && x[r(2329)](), i[r(1227)] === r(2329) && x.dirty(), n[r(2446)] !== r(1134) && (typeof i[r(2446)] !== r(993) || s[r(2643)]) && (e[n.value] = i.value);
    }
    return { status: x[r(2446)], value: e };
  }
}
const he = Object.freeze({ status: "aborted" }), X0 = (o) => ({ status: a(2329), value: o }), a0 = (o) => ({ status: a(1122), value: o }), Fa = (o) => o.status === a(896), Ta = (o) => o[a(1227)] === a(2329), V0 = (o) => o[a(1227)] === a(1122), gx = (o) => typeof Promise !== a(993) && o instanceof Promise;
var ne;
(function(o) {
  const x = a;
  o[x(1892)] = (t) => typeof t == "string" ? { message: t } : t || {}, o[x(2732)] = (t) => typeof t === x(1361) ? t : t == null ? void 0 : t.message;
})(ne || (ne = {}));
class p0 {
  constructor(x, t, r, e) {
    const s = a;
    this._cachedPath = [], this[s(2366)] = x, this.data = t, this[s(2953)] = r, this._key = e;
  }
  get path() {
    const x = a;
    return !this._cachedPath[x(2710)] && (Array[x(3255)](this[x(1084)]) ? this[x(1571)][x(3062)](...this[x(2953)], ...this[x(1084)]) : this[x(1571)][x(3062)](...this[x(2953)], this[x(1084)])), this[x(1571)];
  }
}
const Na = (o, x) => {
  const t = a;
  if (V0(x)) return { success: !0, data: x[t(2446)] };
  if (!o[t(1281)][t(908)][t(2710)]) throw new Error(t(1092));
  return { success: !1, get error() {
    const r = t;
    if (this[r(2697)]) return this._error;
    const e = new P0(o[r(1281)][r(908)]);
    return this._error = e, this._error;
  } };
};
function ve(o) {
  const x = a;
  if (!o) return {};
  const { errorMap: t, invalid_type_error: r, required_error: e, description: s } = o;
  if (t && (r || e)) throw new Error(x(806));
  return t ? { errorMap: t, description: s } : { errorMap: (i, c) => {
    const u = x, { message: f } = o;
    return i[u(2427)] === u(1065) ? { message: f ?? c[u(2272)] } : typeof c.data === u(993) ? { message: f ?? e ?? c[u(2272)] } : i.code !== "invalid_type" ? { message: c.defaultError } : { message: f ?? r ?? c.defaultError };
  }, description: s };
}
class Ce {
  get [a(541)]() {
    return this[a(1575)].description;
  }
  _getType(x) {
    return E0(x[a(2663)]);
  }
  [a(3148)](x, t) {
    const r = a;
    return t || { common: x[r(2366)].common, data: x.data, parsedType: E0(x[r(2663)]), schemaErrorMap: this._def[r(717)], path: x[r(2474)], parent: x.parent };
  }
  [a(861)](x) {
    const t = a;
    return { status: new e0(), ctx: { common: x[t(2366)][t(1281)], data: x[t(2663)], parsedType: E0(x.data), schemaErrorMap: this[t(1575)][t(717)], path: x[t(2474)], parent: x[t(2366)] } };
  }
  [a(2308)](x) {
    const t = a, r = this[t(1585)](x);
    if (gx(r)) throw new Error(t(1822));
    return r;
  }
  [a(2909)](x) {
    const t = a, r = this[t(1585)](x);
    return Promise[t(2457)](r);
  }
  [a(2774)](x, t) {
    const r = a, e = this.safeParse(x, t);
    if (e.success) return e[r(2663)];
    throw e[r(490)];
  }
  [a(3098)](x, t) {
    const r = a, e = { common: { issues: [], async: (t == null ? void 0 : t[r(2416)]) ?? !1, contextualErrorMap: t == null ? void 0 : t.errorMap }, path: (t == null ? void 0 : t[r(2474)]) || [], schemaErrorMap: this[r(1575)].errorMap, parent: null, data: x, parsedType: E0(x) }, s = this._parseSync({ data: x, path: e[r(2474)], parent: e });
    return Na(e, s);
  }
  [a(877)](x) {
    var e, s;
    const t = a, r = { common: { issues: [], async: !!this[t(859)][t(2416)] }, path: [], schemaErrorMap: this[t(1575)][t(717)], parent: null, data: x, parsedType: E0(x) };
    if (!this[t(859)].async) try {
      const n = this[t(2308)]({ data: x, path: [], parent: r });
      return V0(n) ? { value: n[t(2446)] } : { issues: r[t(1281)].issues };
    } catch (n) {
      (s = (e = n == null ? void 0 : n[t(1044)]) == null ? void 0 : e.toLowerCase()) != null && s[t(2978)](t(628)) && (this[t(859)].async = !0), r.common = { issues: [], async: !0 };
    }
    return this[t(2909)]({ data: x, path: [], parent: r }).then((n) => V0(n) ? { value: n[t(2446)] } : { issues: r[t(1281)].issues });
  }
  async [a(2237)](x, t) {
    const r = a, e = await this[r(755)](x, t);
    if (e[r(3031)]) return e[r(2663)];
    throw e[r(490)];
  }
  async [a(755)](x, t) {
    const r = a, e = { common: { issues: [], contextualErrorMap: t == null ? void 0 : t[r(717)], async: !0 }, path: (t == null ? void 0 : t.path) || [], schemaErrorMap: this[r(1575)][r(717)], parent: null, data: x, parsedType: E0(x) }, s = this[r(1585)]({ data: x, path: e[r(2474)], parent: e }), n = await (gx(s) ? s : Promise[r(2457)](s));
    return Na(e, n);
  }
  refine(x, t) {
    const r = a, e = (s) => {
      const n = K;
      return typeof t === n(1361) || typeof t === n(993) ? { message: t } : typeof t === n(1936) ? t(s) : t;
    };
    return this[r(3129)]((s, n) => {
      const i = r, c = x(s), u = () => n[i(1910)]({ code: Z.custom, ...e(s) });
      return typeof Promise !== i(993) && c instanceof Promise ? c[i(2517)]((f) => f ? !0 : (u(), !1)) : c ? !0 : (u(), !1);
    });
  }
  refinement(x, t) {
    return this._refinement((r, e) => {
      const s = K;
      return x(r) ? !0 : (e[s(1910)](typeof t === s(1936) ? t(r, e) : t), !1);
    });
  }
  [a(3129)](x) {
    const t = a;
    return new N0({ schema: this, typeName: pe[t(1621)], effect: { type: t(2100), refinement: x } });
  }
  [a(957)](x) {
    return this._refinement(x);
  }
  constructor(x) {
    const t = a;
    this[t(812)] = this.safeParseAsync, this[t(1575)] = x, this.parse = this[t(2774)][t(1386)](this), this[t(3098)] = this.safeParse.bind(this), this[t(2237)] = this.parseAsync[t(1386)](this), this[t(755)] = this[t(755)].bind(this), this[t(812)] = this[t(812)][t(1386)](this), this[t(570)] = this[t(570)].bind(this), this.refinement = this[t(2100)][t(1386)](this), this[t(957)] = this.superRefine[t(1386)](this), this[t(2478)] = this[t(2478)][t(1386)](this), this[t(2644)] = this.nullable[t(1386)](this), this[t(1987)] = this[t(1987)][t(1386)](this), this[t(529)] = this[t(529)][t(1386)](this), this.promise = this[t(810)][t(1386)](this), this.or = this.or[t(1386)](this), this.and = this[t(1638)].bind(this), this[t(2450)] = this[t(2450)][t(1386)](this), this[t(2823)] = this[t(2823)][t(1386)](this), this.default = this[t(2485)][t(1386)](this), this[t(742)] = this[t(742)][t(1386)](this), this[t(3065)] = this[t(3065)][t(1386)](this), this[t(1514)] = this.pipe[t(1386)](this), this[t(1558)] = this[t(1558)][t(1386)](this), this[t(1015)] = this[t(1015)][t(1386)](this), this.isOptional = this[t(2275)].bind(this), this["~standard"] = { version: 1, vendor: t(1639), validate: (r) => this[t(877)](r) };
  }
  [a(2478)]() {
    return S0[a(1602)](this, this._def);
  }
  [a(2644)]() {
    const x = a;
    return D0[x(1602)](this, this[x(1575)]);
  }
  nullish() {
    const x = a;
    return this[x(2644)]()[x(2478)]();
  }
  [a(529)]() {
    return h0[a(1602)](this);
  }
  [a(810)]() {
    const x = a;
    return Ix[x(1602)](this, this[x(1575)]);
  }
  or(x) {
    const t = a;
    return wx[t(1602)]([this, x], this[t(1575)]);
  }
  and(x) {
    const t = a;
    return Sx[t(1602)](this, x, this[t(1575)]);
  }
  [a(2450)](x) {
    const t = a;
    return new N0({ ...ve(this[t(1575)]), schema: this, typeName: pe[t(1621)], effect: { type: t(2450), transform: x } });
  }
  [a(2485)](x) {
    const t = a, r = typeof x === t(1936) ? x : () => x;
    return new Ex({ ...ve(this[t(1575)]), innerType: this, defaultValue: r, typeName: pe[t(3051)] });
  }
  [a(2823)]() {
    const x = a;
    return new Hs({ typeName: pe[x(1020)], type: this, ...ve(this[x(1575)]) });
  }
  [a(742)](x) {
    const t = a, r = typeof x === t(1936) ? x : () => x;
    return new Rx({ ...ve(this[t(1575)]), innerType: this, catchValue: r, typeName: pe[t(2521)] });
  }
  [a(3065)](x) {
    const t = a, r = this[t(2038)];
    return new r({ ...this._def, description: x });
  }
  [a(1514)](x) {
    return oa.create(this, x);
  }
  [a(1558)]() {
    return Cx.create(this);
  }
  [a(2275)]() {
    const x = a;
    return this[x(3098)](void 0)[x(3031)];
  }
  [a(1015)]() {
    const x = a;
    return this[x(3098)](null)[x(3031)];
  }
}
const Wn = /^c[^\s-]{8,}$/i, Zn = /^[0-9a-z]+$/, Kn = /^[0-9A-HJKMNP-TV-Z]{26}$/i, Gn = /^[0-9a-fA-F]{8}\b-[0-9a-fA-F]{4}\b-[0-9a-fA-F]{4}\b-[0-9a-fA-F]{4}\b-[0-9a-fA-F]{12}$/i, Jn = /^[a-z0-9_-]{21}$/i, Qn = /^[A-Za-z0-9-_]+\.[A-Za-z0-9-_]+\.[A-Za-z0-9-_]*$/, Xn = /^[-+]?P(?!$)(?:(?:[-+]?\d+Y)|(?:[-+]?\d+[.,]\d+Y$))?(?:(?:[-+]?\d+M)|(?:[-+]?\d+[.,]\d+M$))?(?:(?:[-+]?\d+W)|(?:[-+]?\d+[.,]\d+W$))?(?:(?:[-+]?\d+D)|(?:[-+]?\d+[.,]\d+D$))?(?:T(?=[\d+-])(?:(?:[-+]?\d+H)|(?:[-+]?\d+[.,]\d+H$))?(?:(?:[-+]?\d+M)|(?:[-+]?\d+[.,]\d+M$))?(?:[-+]?\d+(?:[.,]\d+)?S)?)??$/, Yn = /^(?!\.)(?!.*\.\.)([A-Z0-9_'+\-\.]*)[A-Z0-9_+-]@([A-Z0-9][A-Z0-9\-]*\.)+[A-Z]{2,}$/i, eo = "^(\\p{Extended_Pictographic}|\\p{Emoji_Component})+$";
let Ux;
const xo = /^(?:(?:25[0-5]|2[0-4][0-9]|1[0-9][0-9]|[1-9][0-9]|[0-9])\.){3}(?:25[0-5]|2[0-4][0-9]|1[0-9][0-9]|[1-9][0-9]|[0-9])$/, to = /^(?:(?:25[0-5]|2[0-4][0-9]|1[0-9][0-9]|[1-9][0-9]|[0-9])\.){3}(?:25[0-5]|2[0-4][0-9]|1[0-9][0-9]|[1-9][0-9]|[0-9])\/(3[0-2]|[12]?[0-9])$/, ao = /^(([0-9a-fA-F]{1,4}:){7,7}[0-9a-fA-F]{1,4}|([0-9a-fA-F]{1,4}:){1,7}:|([0-9a-fA-F]{1,4}:){1,6}:[0-9a-fA-F]{1,4}|([0-9a-fA-F]{1,4}:){1,5}(:[0-9a-fA-F]{1,4}){1,2}|([0-9a-fA-F]{1,4}:){1,4}(:[0-9a-fA-F]{1,4}){1,3}|([0-9a-fA-F]{1,4}:){1,3}(:[0-9a-fA-F]{1,4}){1,4}|([0-9a-fA-F]{1,4}:){1,2}(:[0-9a-fA-F]{1,4}){1,5}|[0-9a-fA-F]{1,4}:((:[0-9a-fA-F]{1,4}){1,6})|:((:[0-9a-fA-F]{1,4}){1,7}|:)|fe80:(:[0-9a-fA-F]{0,4}){0,4}%[0-9a-zA-Z]{1,}|::(ffff(:0{1,4}){0,1}:){0,1}((25[0-5]|(2[0-4]|1{0,1}[0-9]){0,1}[0-9])\.){3,3}(25[0-5]|(2[0-4]|1{0,1}[0-9]){0,1}[0-9])|([0-9a-fA-F]{1,4}:){1,4}:((25[0-5]|(2[0-4]|1{0,1}[0-9]){0,1}[0-9])\.){3,3}(25[0-5]|(2[0-4]|1{0,1}[0-9]){0,1}[0-9]))$/, ro = /^(([0-9a-fA-F]{1,4}:){7,7}[0-9a-fA-F]{1,4}|([0-9a-fA-F]{1,4}:){1,7}:|([0-9a-fA-F]{1,4}:){1,6}:[0-9a-fA-F]{1,4}|([0-9a-fA-F]{1,4}:){1,5}(:[0-9a-fA-F]{1,4}){1,2}|([0-9a-fA-F]{1,4}:){1,4}(:[0-9a-fA-F]{1,4}){1,3}|([0-9a-fA-F]{1,4}:){1,3}(:[0-9a-fA-F]{1,4}){1,4}|([0-9a-fA-F]{1,4}:){1,2}(:[0-9a-fA-F]{1,4}){1,5}|[0-9a-fA-F]{1,4}:((:[0-9a-fA-F]{1,4}){1,6})|:((:[0-9a-fA-F]{1,4}){1,7}|:)|fe80:(:[0-9a-fA-F]{0,4}){0,4}%[0-9a-zA-Z]{1,}|::(ffff(:0{1,4}){0,1}:){0,1}((25[0-5]|(2[0-4]|1{0,1}[0-9]){0,1}[0-9])\.){3,3}(25[0-5]|(2[0-4]|1{0,1}[0-9]){0,1}[0-9])|([0-9a-fA-F]{1,4}:){1,4}:((25[0-5]|(2[0-4]|1{0,1}[0-9]){0,1}[0-9])\.){3,3}(25[0-5]|(2[0-4]|1{0,1}[0-9]){0,1}[0-9]))\/(12[0-8]|1[01][0-9]|[1-9]?[0-9])$/, so = /^([0-9a-zA-Z+/]{4})*(([0-9a-zA-Z+/]{2}==)|([0-9a-zA-Z+/]{3}=))?$/, no = /^([0-9a-zA-Z-_]{4})*(([0-9a-zA-Z-_]{2}(==)?)|([0-9a-zA-Z-_]{3}(=)?))?$/, $s = a(1303), oo = new RegExp("^" + $s + "$");
function Us(o) {
  const x = a;
  let t = "[0-5]\\d";
  o.precision ? t = t + x(2051) + o[x(2394)] + "}" : o[x(2394)] == null && (t = t + x(2162));
  const r = o[x(2394)] ? "+" : "?";
  return x(2899) + t + ")" + r;
}
function io(o) {
  return new RegExp("^" + Us(o) + "$");
}
function co(o) {
  const x = a;
  let t = $s + "T" + Us(o);
  const r = [];
  return r[x(3062)](o[x(655)] ? "Z?" : "Z"), o.offset && r.push("([+-]\\d{2}:?\\d{2})"), t = t + "(" + r.join("|") + ")", new RegExp("^" + t + "$");
}
function uo(o, x) {
  const t = a;
  return !!((x === "v4" || !x) && xo[t(2346)](o) || (x === "v6" || !x) && ao[t(2346)](o));
}
function fo(o, x) {
  const t = a;
  if (!Qn[t(2346)](o)) return !1;
  try {
    const [r] = o.split(".");
    if (!r) return !1;
    const e = r[t(1521)](/-/g, "+").replace(/_/g, "/").padEnd(r.length + (4 - r[t(2710)] % 4) % 4, "="), s = JSON.parse(atob(e));
    return !(typeof s !== t(1304) || s === null || t(2990) in s && (s == null ? void 0 : s[t(2990)]) !== t(843) || !s[t(627)] || x && s[t(627)] !== x);
  } catch {
    return !1;
  }
}
function lo(o, x) {
  const t = a;
  return !!((x === "v4" || !x) && to[t(2346)](o) || (x === "v6" || !x) && ro[t(2346)](o));
}
class w0 extends Ce {
  [a(1585)](x) {
    const t = a;
    if (this._def[t(1077)] && (x[t(2663)] = String(x[t(2663)])), this._getType(x) !== ae.string) {
      const n = this[t(3148)](x);
      return ee(n, { code: Z[t(2421)], expected: ae.string, received: n[t(3156)] }), he;
    }
    const e = new e0();
    let s;
    for (const n of this[t(1575)].checks)
      if (n[t(1859)] === t(521)) x[t(2663)][t(2710)] < n.value && (s = this[t(3148)](x, s), ee(s, { code: Z[t(2724)], minimum: n[t(2446)], type: t(1361), inclusive: !0, exact: !1, message: n[t(1044)] }), e[t(2329)]());
      else if (n[t(1859)] === "max") x.data[t(2710)] > n[t(2446)] && (s = this[t(3148)](x, s), ee(s, { code: Z[t(1305)], maximum: n.value, type: t(1361), inclusive: !0, exact: !1, message: n.message }), e[t(2329)]());
      else if (n.kind === t(2710)) {
        const i = x[t(2663)][t(2710)] > n[t(2446)], c = x[t(2663)][t(2710)] < n[t(2446)];
        (i || c) && (s = this[t(3148)](x, s), i ? ee(s, { code: Z[t(1305)], maximum: n[t(2446)], type: t(1361), inclusive: !0, exact: !0, message: n[t(1044)] }) : c && ee(s, { code: Z[t(2724)], minimum: n[t(2446)], type: t(1361), inclusive: !0, exact: !0, message: n[t(1044)] }), e[t(2329)]());
      } else if (n.kind === t(2255)) !Yn[t(2346)](x[t(2663)]) && (s = this[t(3148)](x, s), ee(s, { validation: t(2255), code: Z[t(893)], message: n[t(1044)] }), e.dirty());
      else if (n[t(1859)] === t(2738)) !Ux && (Ux = new RegExp(eo, "u")), !Ux[t(2346)](x[t(2663)]) && (s = this[t(3148)](x, s), ee(s, { validation: "emoji", code: Z.invalid_string, message: n[t(1044)] }), e.dirty());
      else if (n[t(1859)] === "uuid") !Gn.test(x[t(2663)]) && (s = this[t(3148)](x, s), ee(s, { validation: "uuid", code: Z[t(893)], message: n[t(1044)] }), e.dirty());
      else if (n[t(1859)] === t(2031)) !Jn.test(x[t(2663)]) && (s = this[t(3148)](x, s), ee(s, { validation: t(2031), code: Z[t(893)], message: n[t(1044)] }), e[t(2329)]());
      else if (n[t(1859)] === t(1025)) !Wn[t(2346)](x[t(2663)]) && (s = this[t(3148)](x, s), ee(s, { validation: t(1025), code: Z[t(893)], message: n[t(1044)] }), e[t(2329)]());
      else if (n[t(1859)] === "cuid2") !Zn.test(x[t(2663)]) && (s = this._getOrReturnCtx(x, s), ee(s, { validation: t(1130), code: Z[t(893)], message: n[t(1044)] }), e[t(2329)]());
      else if (n[t(1859)] === t(2035)) !Kn[t(2346)](x.data) && (s = this[t(3148)](x, s), ee(s, { validation: "ulid", code: Z[t(893)], message: n.message }), e[t(2329)]());
      else if (n[t(1859)] === "url") try {
        new URL(x.data);
      } catch {
        s = this[t(3148)](x, s), ee(s, { validation: t(2120), code: Z[t(893)], message: n[t(1044)] }), e[t(2329)]();
      }
      else
        n.kind === "regex" ? (n[t(2338)].lastIndex = 0, !n[t(2338)].test(x.data) && (s = this[t(3148)](x, s), ee(s, { validation: t(2338), code: Z[t(893)], message: n[t(1044)] }), e[t(2329)]())) : n[t(1859)] === t(2337) ? x.data = x.data[t(2337)]() : n[t(1859)] === "includes" ? !x[t(2663)][t(2978)](n[t(2446)], n[t(1293)]) && (s = this._getOrReturnCtx(x, s), ee(s, { code: Z[t(893)], validation: { includes: n[t(2446)], position: n[t(1293)] }, message: n[t(1044)] }), e[t(2329)]()) : n[t(1859)] === t(1945) ? x[t(2663)] = x[t(2663)][t(1945)]() : n[t(1859)] === "toUpperCase" ? x[t(2663)] = x.data[t(3013)]() : n[t(1859)] === "startsWith" ? !x[t(2663)][t(760)](n[t(2446)]) && (s = this[t(3148)](x, s), ee(s, { code: Z[t(893)], validation: { startsWith: n[t(2446)] }, message: n.message }), e[t(2329)]()) : n[t(1859)] === t(1826) ? !x[t(2663)][t(1826)](n.value) && (s = this[t(3148)](x, s), ee(s, { code: Z[t(893)], validation: { endsWith: n.value }, message: n.message }), e[t(2329)]()) : n[t(1859)] === t(2638) ? !co(n).test(x.data) && (s = this[t(3148)](x, s), ee(s, { code: Z[t(893)], validation: t(2638), message: n[t(1044)] }), e[t(2329)]()) : n[t(1859)] === t(1591) ? !oo[t(2346)](x[t(2663)]) && (s = this[t(3148)](x, s), ee(s, { code: Z[t(893)], validation: t(1591), message: n[t(1044)] }), e[t(2329)]()) : n[t(1859)] === t(2193) ? !io(n).test(x[t(2663)]) && (s = this[t(3148)](x, s), ee(s, { code: Z[t(893)], validation: t(2193), message: n[t(1044)] }), e.dirty()) : n[t(1859)] === t(2523) ? !Xn[t(2346)](x[t(2663)]) && (s = this[t(3148)](x, s), ee(s, { validation: t(2523), code: Z.invalid_string, message: n[t(1044)] }), e[t(2329)]()) : n[t(1859)] === "ip" ? !uo(x[t(2663)], n.version) && (s = this[t(3148)](x, s), ee(s, { validation: "ip", code: Z[t(893)], message: n[t(1044)] }), e[t(2329)]()) : n.kind === t(1749) ? !fo(x[t(2663)], n[t(627)]) && (s = this._getOrReturnCtx(x, s), ee(s, { validation: t(1749), code: Z[t(893)], message: n[t(1044)] }), e[t(2329)]()) : n[t(1859)] === t(2559) ? !lo(x[t(2663)], n[t(2739)]) && (s = this[t(3148)](x, s), ee(s, { validation: t(2559), code: Z[t(893)], message: n.message }), e[t(2329)]()) : n[t(1859)] === t(3046) ? !so[t(2346)](x[t(2663)]) && (s = this[t(3148)](x, s), ee(s, { validation: t(3046), code: Z[t(893)], message: n[t(1044)] }), e[t(2329)]()) : n[t(1859)] === "base64url" ? !no[t(2346)](x.data) && (s = this[t(3148)](x, s), ee(s, { validation: "base64url", code: Z.invalid_string, message: n.message }), e.dirty()) : Ne[t(1034)](n);
    return { status: e[t(2446)], value: x[t(2663)] };
  }
  [a(1341)](x, t, r) {
    const e = a;
    return this[e(2100)]((s) => x[e(2346)](s), { validation: t, code: Z[e(893)], ...ne[e(1892)](r) });
  }
  [a(1095)](x) {
    const t = a;
    return new w0({ ...this[t(1575)], checks: [...this._def[t(1773)], x] });
  }
  [a(2255)](x) {
    const t = a;
    return this[t(1095)]({ kind: t(2255), ...ne[t(1892)](x) });
  }
  [a(2120)](x) {
    const t = a;
    return this[t(1095)]({ kind: t(2120), ...ne.errToObj(x) });
  }
  [a(2738)](x) {
    const t = a;
    return this[t(1095)]({ kind: t(2738), ...ne[t(1892)](x) });
  }
  [a(1551)](x) {
    const t = a;
    return this[t(1095)]({ kind: t(1551), ...ne[t(1892)](x) });
  }
  [a(2031)](x) {
    const t = a;
    return this[t(1095)]({ kind: t(2031), ...ne[t(1892)](x) });
  }
  [a(1025)](x) {
    return this._addCheck({ kind: "cuid", ...ne.errToObj(x) });
  }
  cuid2(x) {
    const t = a;
    return this[t(1095)]({ kind: t(1130), ...ne[t(1892)](x) });
  }
  ulid(x) {
    return this[a(1095)]({ kind: "ulid", ...ne.errToObj(x) });
  }
  [a(3046)](x) {
    const t = a;
    return this[t(1095)]({ kind: t(3046), ...ne.errToObj(x) });
  }
  [a(1136)](x) {
    const t = a;
    return this[t(1095)]({ kind: t(1136), ...ne[t(1892)](x) });
  }
  [a(1749)](x) {
    const t = a;
    return this._addCheck({ kind: t(1749), ...ne[t(1892)](x) });
  }
  ip(x) {
    return this._addCheck({ kind: "ip", ...ne.errToObj(x) });
  }
  [a(2559)](x) {
    const t = a;
    return this._addCheck({ kind: t(2559), ...ne[t(1892)](x) });
  }
  [a(2638)](x) {
    const t = a;
    return typeof x == "string" ? this._addCheck({ kind: "datetime", precision: null, offset: !1, local: !1, message: x }) : this[t(1095)]({ kind: "datetime", precision: typeof (x == null ? void 0 : x[t(2394)]) === t(993) ? null : x == null ? void 0 : x[t(2394)], offset: (x == null ? void 0 : x[t(2887)]) ?? !1, local: (x == null ? void 0 : x[t(655)]) ?? !1, ...ne.errToObj(x == null ? void 0 : x[t(1044)]) });
  }
  [a(1591)](x) {
    const t = a;
    return this[t(1095)]({ kind: t(1591), message: x });
  }
  [a(2193)](x) {
    const t = a;
    return typeof x === t(1361) ? this[t(1095)]({ kind: "time", precision: null, message: x }) : this[t(1095)]({ kind: "time", precision: typeof (x == null ? void 0 : x[t(2394)]) === t(993) ? null : x == null ? void 0 : x[t(2394)], ...ne.errToObj(x == null ? void 0 : x[t(1044)]) });
  }
  [a(2523)](x) {
    const t = a;
    return this._addCheck({ kind: t(2523), ...ne[t(1892)](x) });
  }
  [a(2338)](x, t) {
    const r = a;
    return this[r(1095)]({ kind: r(2338), regex: x, ...ne.errToObj(t) });
  }
  [a(2978)](x, t) {
    const r = a;
    return this[r(1095)]({ kind: r(2978), value: x, position: t == null ? void 0 : t[r(1293)], ...ne.errToObj(t == null ? void 0 : t[r(1044)]) });
  }
  [a(760)](x, t) {
    const r = a;
    return this[r(1095)]({ kind: "startsWith", value: x, ...ne[r(1892)](t) });
  }
  [a(1826)](x, t) {
    const r = a;
    return this._addCheck({ kind: r(1826), value: x, ...ne[r(1892)](t) });
  }
  [a(521)](x, t) {
    const r = a;
    return this[r(1095)]({ kind: r(521), value: x, ...ne[r(1892)](t) });
  }
  [a(753)](x, t) {
    const r = a;
    return this[r(1095)]({ kind: r(753), value: x, ...ne[r(1892)](t) });
  }
  [a(2710)](x, t) {
    const r = a;
    return this[r(1095)]({ kind: r(2710), value: x, ...ne[r(1892)](t) });
  }
  nonempty(x) {
    return this.min(1, ne.errToObj(x));
  }
  [a(2337)]() {
    const x = a;
    return new w0({ ...this[x(1575)], checks: [...this[x(1575)][x(1773)], { kind: x(2337) }] });
  }
  [a(1945)]() {
    const x = a;
    return new w0({ ...this[x(1575)], checks: [...this[x(1575)][x(1773)], { kind: x(1945) }] });
  }
  [a(3013)]() {
    const x = a;
    return new w0({ ...this[x(1575)], checks: [...this[x(1575)][x(1773)], { kind: x(3013) }] });
  }
  get isDatetime() {
    const x = a;
    return !!this[x(1575)].checks[x(3146)]((t) => t[x(1859)] === x(2638));
  }
  get isDate() {
    const x = a;
    return !!this[x(1575)][x(1773)][x(3146)]((t) => t.kind === x(1591));
  }
  get [a(3191)]() {
    const x = a;
    return !!this[x(1575)][x(1773)][x(3146)]((t) => t[x(1859)] === x(2193));
  }
  get [a(904)]() {
    const x = a;
    return !!this._def[x(1773)].find((t) => t[x(1859)] === x(2523));
  }
  get [a(575)]() {
    const x = a;
    return !!this[x(1575)].checks.find((t) => t.kind === x(2255));
  }
  get isURL() {
    const x = a;
    return !!this[x(1575)][x(1773)].find((t) => t[x(1859)] === "url");
  }
  get [a(1016)]() {
    const x = a;
    return !!this[x(1575)][x(1773)][x(3146)]((t) => t.kind === x(2738));
  }
  get isUUID() {
    const x = a;
    return !!this[x(1575)][x(1773)][x(3146)]((t) => t[x(1859)] === x(1551));
  }
  get [a(1007)]() {
    const x = a;
    return !!this[x(1575)][x(1773)][x(3146)]((t) => t[x(1859)] === "nanoid");
  }
  get [a(3280)]() {
    const x = a;
    return !!this._def[x(1773)][x(3146)]((t) => t[x(1859)] === x(1025));
  }
  get [a(2496)]() {
    const x = a;
    return !!this[x(1575)].checks[x(3146)]((t) => t[x(1859)] === "cuid2");
  }
  get [a(1978)]() {
    const x = a;
    return !!this[x(1575)].checks[x(3146)]((t) => t.kind === x(2035));
  }
  get isIP() {
    const x = a;
    return !!this[x(1575)][x(1773)].find((t) => t[x(1859)] === "ip");
  }
  get [a(2389)]() {
    const x = a;
    return !!this[x(1575)][x(1773)][x(3146)]((t) => t[x(1859)] === x(2559));
  }
  get [a(1314)]() {
    const x = a;
    return !!this[x(1575)][x(1773)][x(3146)]((t) => t[x(1859)] === x(3046));
  }
  get [a(981)]() {
    const x = a;
    return !!this._def[x(1773)][x(3146)]((t) => t.kind === "base64url");
  }
  get minLength() {
    const x = a;
    let t = null;
    for (const r of this[x(1575)][x(1773)])
      r[x(1859)] === x(521) && (t === null || r[x(2446)] > t) && (t = r[x(2446)]);
    return t;
  }
  get [a(649)]() {
    const x = a;
    let t = null;
    for (const r of this[x(1575)][x(1773)])
      r[x(1859)] === x(753) && (t === null || r.value < t) && (t = r[x(2446)]);
    return t;
  }
}
w0[a(1602)] = (o) => {
  const x = a;
  return new w0({ checks: [], typeName: pe[x(1451)], coerce: (o == null ? void 0 : o.coerce) ?? !1, ...ve(o) });
};
function yx() {
  const o = ["Graph must have at least one node", "getRegisteredActions", "Invalid forward path for proxy action", "errs_", "lngs", "simplifyPluralSuffix", "当前任务路由暂不支持上传控件", "Cloud:", "You must pass an array of schemas to z.tuple([ ... ])", "setProperty", ".test(", "getResourceBundle", " = new RegExp(", "#00CCCC", "interpolationkey", " === undefined || ", "_path", "Please login to use the plugin", "Please provide prompt content.", "_exclusiveLimit", " = formats[", "escapeValue", "Set text to layer", "joinArrays", "交集或缩放目标为空", "formData", "response", "partialBundledLanguages", "使用整个画布", "ZodNativeEnum", "channel", "combo", "mergeShapes", "fragment", "ydd", "Invalid discriminator value. Expected ", "notificationHandlers", "scheme", "Disk", "graphInstance", "full", "includes", "_loadingSchemas", "colors", "_getType", "sendPromptListChanged", "mountTo", "timeoutId", "__nwjs", "favorites", "Empty", "resource", "         , parentSchema: validate.schema", "typ", " , message: 'should be ", "postProcessor", "getConnectionToNodeInternal", "Boundary", "23364256xDpQma", "RULES", "任务失败：{{status}}", "inlineRefs", "setDefaultNamespace", "找不到文档: {{0}}", "no plural rule found for: ", "lowerCaseLng", "mergeObjectAsync", "removeMiddleware", "properties", "Failed to reboot ComfyUI", "createAsyncIterator", " , message: 'should match exactly one schema in oneOf' ", "allErrors", "getNodes API failed - {{reason}}", "如何获取APIKey", "not-basic", "toUpperCase", "logging/setLevel", "/then", "Invalid JSON-pointer: ", "smaller than or equal to", "minDate", "race", "正向裁剪", "执行成功", "curlayer", "\\:\\:", "requestsHandled", "Invalid boundary: left must be less than right, top must be less than bottom", '" is used in schema at path "', "Manage reusable prompt snippets for Comfy Simple workflows.", "isRequest", "isInitialized", "当前无法应用模板。", "success", "getNodes API 调用失败 - HTTP 错误，状态: {{status}}", ") && (missing", "hbo", "Refresh workflow list", "_formats", " , params: { allowedValues: schema", "async ", "getProperty", "dataVar", "ComfyUI server reconnecting", "#FF0066", "serialize", ` + '" schema' `, "enabled", "base64", " ) {   ", "mergeObjectSync", "openWorkflowJSON", "Not implemented (501)", "ZodDefault", "Client does not support listing roots (required for ", "loadGraphData", "ZodError", " -> ", "{0,1}", "Prompts", "Select Banana app...", "setupStreamRequestHandler", "cache", " && ", "push", "yih", "Request handler failed: ", "describe", "Get pixel of {{0}} failed", "valueSchema", "hasLanguageSomeTranslations", " } else if ( ", "__cycle__", "_onprogress", "Layer mask", "Google Gemini 图像生成器", "Source", "自动同步中…", "模板已删除。", "getPath", "examples", " == null) ", "Template name", "fullPath", "resourceStore", "saveMissing", "pctEncChar", ".hasOwnProperty(", "weeks", "Failed to fetch account status", "请选择要获取的图像", "{0,4}", "language", "aeb", "removeRequestHandler", "sdpppX2", "loopRequired", "Remove slot", "#FF00CC", "ordinal", "safeParse", "Set as Current Selection", "输入设置", "getFixedT", "formatParams", "查看日志", "initialize", "cardinal", "boolean", "No images", "Current Selection", ".then", "[A-Za-z0-9\\!\\$\\%\\'\\*\\+\\-\\^\\_\\`\\{\\|\\}\\~]", "NOT_SCHEME", "ayh", "keyword schema is invalid: ", "languageDetector", "#CC33FF", "Auto send disabled", "pick", "var missing", "=== Options ===", "MethodNotFound", " if (schema", "state", "_resetTimeout", "_errorDataPathProperty", "week", "inlineRef", "[i], ", "Array must contain ", "_refinement", "ZodNaN", "模板名称", "Run Photoshop Action", "normalizeId", "_oninitialize", " , ", "Delete current", "removeAdditional", "./api/userdata/workflows%2F.index.json", "registerStreamRequestorHandler", "Exclude selection", "handleDirectProxyForward", "Fetch current layer with primary boundary", "2024-10-07", " , message: 'should NOT be ", "sdppp/streamResponse", "find", "ZodTuple", "_getOrReturnCtx", "获取表单数据失败", "performWorkflowReset: ", "coerced", "outputs API 调用失败 - {{reason}}", "#FFCC00", "$id", "formats", "parsedType", "_limitItems", "debug", "ucs2length", "Invalid proxy forwarding: current node ", "abortRequest", "findIndex", "ZodMap", "lng", "[\\!\\$\\&\\'\\(\\)\\*\\+\\,\\;\\=]", "结果获取已中止", "Selection bounds only", " , message: 'should NOT have more than ", "queues", "content", "Upload from disk", "setupStreamResponseHandler", "executeHandlerAsync", "Uploading...", "No store found for node ", "activeWorkflow", "status API failed - {{reason}}", "abortAllRequests", "notifications/progress", "Invalid name: {{0}}", "validate", "i18next:", "sdppp/broadcast", "More actions", "#FF0000", "  } ", "Sending image...", "Supabase anon key", "Task Details", "适配至选区", "isTime", "getNodes API failed - HTTP error! status: {{status}}", "hasDefaultValue", "openWorkflow: ", "No default templates available.", "云端推荐：", "failed parsing options string in nesting for key ", "createStreamState", "run API 调用失败 - {{reason}}", "缺少遮罩资源", "(typeof ", "InvalidRequest", "Comfy侧SDPPP版本({{comfyVersion}})与插件({{pluginVersion}})不匹配，运行可能有问题", "requestId", "{0,3}", "#6600CC", "#/definitions/simpleTypes", "以画布边界获取当前图层", "disconnect", "loaded namespace ", "模板已应用。", "sourceType", "http", " else {   ", "Server does not support tools (required for ", "isNotification", "notifications/initialized", "humanize", "hrs", "actionManager", "invalid_union_discriminator", "images", "#0066FF", "Enter a quality percentage", "queueLoad", "peo", "_setupTimeout", "inline", "Canvas bounds", "Required", "propsKeywords", "parseMissingKeyHandler", "作为新文档导入", "processors", "fromNode", "workflows", "values", "formatType", " break; ", "\\xA0-\\u200D\\u2010-\\u2029\\u202F-\\uD7FF\\uF900-\\uFDCF\\uFDF0-\\uFFEF", "node_errors", "bigint", "]; ", " = true; else if (!Array.isArray(schema", "_requestHandlers", "fromCodePoint", "Task failed: {{status}}", ".length , ", "less than or equal to", "#FF3366", "Clear all", " characters' ", "callback", "hasLoadedNamespace", "isArray", "Prompt Templates", "sdppp/abort", ") {", "minSize", "; else vErrors = vErrors.concat(", " {} ", "messageHandlers", "split", "contentMediaType", "每批图像数", "activeState", " ? await ", "Send to PS", "Store not found for current node ", "Use entire canvas", "跳转到最后一个", ` , message: 'should pass "`, "请求超时 (408)", "[^\\%\\[\\]\\:]", "now", "Error in broadcast handler for ", ") == -1 ", " = null; ", "posterIdentifier", "isCUID", "ZodSet", "exclusiveMaximum", "getAccountStatus API failed - {{reason}}", "key", "_getCached", "[\\@]", "userinfo", "broadcastManager", "#9900FF", "initializeConsumer", "nonpositive", "cancel", "maxDate", "error", "sd-ppp-static/sdppp_images/", "清空所有", " = errors;  ", "request", "equal", "addMetaSchema", "_refs", " && Object.prototype.hasOwnProperty.call(", "Loading...", "Task execution failed", "; }", "#CC0033", "2.1.0", "minutes", "jsonrpc", "/type", "addResource", "sdppp-heartbeat", "isEmpty", "SDPPP may not be installed or version mismatch (404)", "从文件打开图像", "overflow", "ASCII", "pending", "#CC0099", "transport", "returnTypeError", "uri-reference", "选择应用...", "sessionId", "min", "任务详情", " if (true) { ", "适配至当前图层", "usedParams", "pattern", "usedKey", "missingSchema", "array", "Layer not found {{0}}", "Fetch canvas with current-layer boundary", "访客登录成功", "pickLocalFile", " (async", "786655TtrUxU", "重启ComfyUI失败", "partial", "workflow", "_responseHandlers", "删除模板", "description", "lte", "未返回图片", "executed", " == '", "outputs API 调用失败 - HTTP 错误，状态: {{status}}", "initializedStoreOnce", "DateTimeFormat", "iri", "Forbidden (403)", "Select Source", "网关超时 (504)", "生成失败", "sqr", "图层 {{0}} 不是一个组", " === 'true' || ", "assertCapabilityForMethod", "WebkitAppearance", "createErrors", "UploadPassProvider is not fully compatible with TaskRouter upload mechanism. Please use the uploadResource prop instead.", "RH币:", " === undefined ", "outputs API failed - {{reason}}", "工作流打开中", `Get image &
Limit image boundary`, "获取图层 {{0}} 的内容", "Positive Prompt", "$data", "errSchemaPath", "refine", "Invalid boundary type: {{type}}", "Aborted", "Host's domain name can not be converted to ASCII via punycode: ", " == ", "isEmail", "every", "ZodNull", "exclusiveMinimum", "Please provide a template name.", "#FF9900", "Generating", "withTimeout", "asyncIterator", "A discriminator value for key `", "loadNamespaces", "originalQueuePrompt", "无法从文件创建文档", "refs", "Failed to create document from file", "No history tasks", "#33CC33", " } else {  for (var ", "executing", "getLanguagePartFromCode", "Notification interceptor failed for ", ".validate; var ", "notifications/roots/list_changed", "; else vErrors = null; }", "=0; ", "'].definition; var ", "批次数量", "Values", "actionHandlers", "customErrors", "setupAbortHandler", "timestamp", "addResourceBundle", "__connection_established", "++) { ", "localRefs", "Get selection", "var ", "++) { if (", "exclType", " = 'then'; ", "ckb", " var errors = 0;     ", "syncStoresToNewConnection", "No active layer available", "Resize document for preview", "toFixed", "setWidgetValue", "schemaId", ") : ", "useColors", "Show Preview ({{count}} images)", "alg", "encountered", "Bounds", "Desire bounds is null", "maximum", "prefix", "URI is not a ", "等待 ComfyUI 连接完成…", "notificationsHandled", "{2})", "schema id ignored", "languageChanged", "Module", " && ( ", "Modify", " is not a valid identifier", "isFinite", "Rectangle coordinates required for create action", "seconds", "msecs", " % 1)", "property", "maxLength", "varReplace", "_serverInfo", " !== undefined && ( typeof ", "限制图片尺寸", "safe", "local", "Save all", "3065650IVplXZ", "Current Tasks:", " = false; if (e instanceof ValidationError) ", "prompt_ids: ", "assign", "dataPathArr", "; } catch (e) { ", " == 'boolean' || ", "registerDirectRequestHandlerGeneric", "node_id", "removeNamespaces", "###", "nodes", "运行中...", " ) || ", "substring", "saveMissingPlurals", "get", "Scan", "result", "Sponsor", "assistant", ") { var op", "./sdppp_upload2", "getNodeIds", "使用教程", " = errors;", "domainHost", "选区边界", "#FF33CC", " ); if (isAdditional", "contains", "resource_link", "_onresponse", "Layer {{0}} is not a group", "arrayToEnum", "graphChanged", "NOT_PATH_NOSCHEME", " is already defined", "ZodNumber", "isTransportReady", "missed to pass in variable ", "zero", "acx", "getScriptPartFromCode", "]; return false; ", "_unknown", "allOf", "image", "api", "zh-CN", "Failed", "toHash", "getNeighbors", "execution_error", "Result fetch aborted", "暂无历史任务", "获取 Supabase 会话失败: {{error}}", "__proxy_forward", "click to restore", "errorMap", "Invalid attempt to destructure non-iterable instance", "getConnectedNodeIds", "从磁盘上传", "less than", "选择图像来源", "setResolvedLanguage", "获取任务状态失败", "exec_info", "markConnected", "true", "wss", "comfy_api_key", "MissingRefError", "addEventListener", "exports", "无法将文件作为文档打开: {{path}}", "Your powerful node-based workflow engine", "IPV6ADDRESS", "新增槽位", "保存提示词模板失败。", "setState", "ActionSet {{0}} 未找到", "env", "oninitialized", "catch", "there was no format function for ", "suffix", "abh", "host", "_any", "#CC00FF", "maxValue", "root.refVal[0]", "getAccountStatus API 调用失败 - {{reason}}", "提示信息", "max", ".type", "safeParseAsync", "Intersect or scaledDesire is null", "statusText", "Invalid literal value, expected ", "changeLanguage", "startsWith", " } else { ", ", received ", "getKeyword", "[^\\%\\/\\@]", "invalid_return_type", "integer", "newlayer_selection", "is an invalid additional property", " = true; if (", "react", "Refresh", "initImmediate", "Press Enter to open app: {{appName}}", " ) { ", "createInstance", "uri", "SCHEMES", "Task incomplete, current status: {{status}}", "Select layer", "set", "+Alt reversed mask", "ready", "Batch Count", "保存并立即执行", " (division", "ComfyUI - {{workflowName}}", "missed to resolve ", "detail", "promptIds", "getDataByLanguage", " - no connection available", " division", "scanned", " == errors) { ", "加载中...", "尚未配置 ComfyUI 连接，请先设置地址。", "Auto sync is off", "getAllReachableNodes", "missingKey", "right", 'unknown format "', "format", "nss", "ZodEnum", "baseId", `Can't use "invalid_type_error" or "required_error" in conjunction with custom error map.`, "isHeartbeatEnabled", "listRoots", "options.loadSchema should be a function", "promise", "_cache", "spa", "initializeProducer", "table", "Input not instance of ", "onprogress", "compiling", `((?:[^()"']+|"[^"]*"|'[^']*'|\\((?:[^()]|"[^"]*"|'[^']*')*\\))*?)`, " } if (errors === ", "管理 Comfy Simple 工作流的提示词片段。", " == 'number' || ", "getHandlerTypes", "toNode", "getResource", "]] === undefined ", "从 选区 获取遮罩", "extractFromKey", "longer", 'key "', "Layer", "aec", " = equal(", "disconnected", " outer: for (;i--;) { for (j = i; j--;) { if (equal(", "ZodPromise", " if ( ", "initialState", "反向裁剪", "stopSequence", "http://json-schema.org/draft-07/schema#", "sort", "prevValid", "JWT", "Masked", "获取账户信息失败", "size", "ZodNullable", "#3300FF", "authInfo", " var itemIndices = {}, item; for (;i--;) { var item = ", "选择 AI 服务提供商", "modules", "删除当前", "#FF33FF", "removeResourceBundle", "status API 调用失败 - {{reason}}", "can't resolve reference ", "var default", "~standard", " var errs_", "_processInputParams", "documentElement", "获取选区失败", "Google Gemini - Image Generation", "画布变更后自动运行工作流", "currentNodeId", "manuallyExtractDefaults", "strictKeywords", "No crop", " } } ", "' } ", "store", "isClone", "Sync current content", "delete", "logger must implement log, warn and error methods", "~validate", "Import from disk", " = true;", "rtl", "未知错误（{{code}}）", "prepend", " , message: 'should NOT have duplicate items (items ## ' + j + ' and ' + i + ' are identical)' ", "UUID is not valid.", "$ref", "comfy", "Current Layer", "setupGeneralBroadcastHandler", "#FF3399", "未能解析租户信息", "#/definitions/nonNegativeIntegerDefault0", "ParseError", "invalid_string", "No videos yet", "Node definition not found for current node ", "aborted", "ComfyUI 未就绪", "\\$&", "[\\uE000-\\uF8FF]", "Comfy.userId", "charCodeAt", "fail", " throw new ValidationError(vErrors); ", "isDuration", " = errors; var ", "创建文档失败", "Options", "issues", "设置图层的文本", "openWorkflows", "i18nFormat", "Outpaint (positive crop)", "{0,6}", "Confirm", "保存所有", "rejectImage", "当前图层边界", "maxTokens", "extend", "HeartbeatTimeoutError", "save", "自动填入画布开启", "greater than ", "Input Setting", "localeCompare", "ListFormat", "hasPath", "hasRequestHandler", ") {  ", "更多设置", "prompt_id", "&amp;", "Please click Login in the top-right corner.", "onerror", "years", " return data; ", "_metaOpts", "silent", "Unknown message type: ", "skipOnVariables", " not found in graph definition", "mcp-mesh-router", "registerProxyForwardHandler", "Inpaint (reverse crop)", "outgoingRequestInterceptors", "Missing upload resource", "Template removed.", "生成中...", "+Alt 反转遮罩", "Image imported to canvas", "ownProperties", "resources/read", "read", "Workflow stopped by user", "Upload controls are not supported for TaskRouter", " === null) ", "superRefine", "validateKeyword", "Save", "getTransportToNode", "hasLoadedNamespace: i18n.languages were undefined or empty", "apd", "&#39;", "men", "setNodeTitle", " == 'string' && ", "尺寸限制 (px)", "connectedNodes", "Upload aborted", "运行了 {{duration}} 秒，{{message}}", "aao", "留空表示不限", "timeout", "Connection closed", "Layer {0} not found", "New Layer", " , message: 'should be equal to constant' ", "Invalid enum value. Expected ", "regexp", "critical", "isBase64url", "Running", "上传中，如果图片过大，可能会卡顿...", "returnObjects", "+Alt 按选区裁剪", "sourceCode", "addMessageEventListener", "Failed to send cancellation: ", "notifications/message", "isNaN", " = false; else {", "responseSchema", "undefined", "mask", "accept", "Set as Current Layer", "清除参考线框架", " for language ", "#66CC00", "Failed to update the {{part}} prompt: no matching widget binding.", "init: i18next is already initialized. You should call init just once!", "revoke", "ZodReadonly", "Delete Template", "subject", "非法的名称: {{0}}", "isNANOID", "reloadResources", ";  if (vErrors === null) vErrors = [err]; else vErrors.push(err); errors++; } } ", "catchall", "Action {{0}} was not found", "This means something IS WRONG in your setup. You access the t function before i18next.init / i18next.loadNamespace / i18next.changeLanguage was done. Wait for the callback or Promise to resolve before accessing it!!!", "Overflow: input needs wider integers to process", "{3}", "isNullable", "isEmoji", "$$$$", "Importing history image...", "nodeStores", "ZodBranded", " validate.errors = vErrors; return false; ", "logging", "setupTransportHandlers", "Output to", "cuid", "_compile", "未找到文档 {0}", "absolute", 'Invalid input: must start with "', "Email address's domain name can not be converted to ", "stringify", "workflows/", "Document {{0}} not found", "assertNever", "idx", "externalListenMessageCallback", "getRunningRequestsCount", "source", "Failed to request initial state for ", " console.log(", ".length == 1) { ", ") ) {   ", "toUnicode", "message", "listWorkflows", "ZodDiscriminatedUnion", "文件未找到: {{path}}", "Cannot register capabilities after connecting to transport", "resolvedLanguage", "resolveComponents", "newlayer_canvas", `Log saved to file: {{path}}


`, "当前图层范围", "xn--", "Back", "languages", "fullFilename", "Boundary preview", "Current layer", "点击恢复默认遮罩", " == 'function' ? ", " } if (", "validate.schema", "' + ", "invalid_enum_value", "messagePoster", "assertCanSetRequestHandler", "_opts", "Rescoped", "hasEdge", "Email address's domain name can not be converted to ASCII via punycode: ", "Waiting for ComfyUI to finish connecting…", "keyPrefix", "ComfyManager not found, cannot reboot", "isValidLookup", "Clear selection", "coerce", "Failed to request initial states after connecting to ", "getState", "#FF00FF", "continueOnInterceptorError", "level", "property ", "_key", "Server error (500)", " , message: 'property name \\'", "default is ignored for: ", "detect", "新增模板", "WARNING DEPRECATED: ", "checkState", "Validation failed but no issues detected.", "pre", ".replace(/~/g, '~0').replace(/\\//g, '~1')", "_addCheck", "all", "reconnecting", "_limitLength", "延迟上传失败: {{error}}", "freeze", "$async", " if (!", " var startErrs", "#0066CC", "getNodes API 调用失败 - {{reason}}", "getRule", " if (true) {", " { keyword: '", "varOccurences", "dependencies", "nodeErrors", "Connecting to ComfyUI...", "Duration", "warn", "return", "strict", "useDefault", ", exclusive: ", "setupStreamProtocolHandlers", 'schema with key or id "', "output", "valid", "void", "handleIncomingRequest", "preload", "querySelector", "Retry", "Email: {{email}}", "Gemini 2.5 Flash 图像", "cuid2", "ZodRecord", "regExpMap", "assertEqual", "__proto__", '" as the namespace "', "base64url", "file", " , params: { i: i, j: j } ", "Click to restore default mask", "emergency", "mergeArray", "put", "prompts/get", " === undefined) ", "Internal ZodObject error: invalid unknownKeys value.", ";  if (vErrors === null) vErrors = [err]; else vErrors.push(err); errors++; } else if (", "Click to get RunningHub APIKey", "Select Image Source", "isSupportedCode", "Auto sync in progress…", "isObject", "shorter", "setter", '" ignored in schema at path "', "kPanelBrightnessMediumGray", " = errors;var ", " = ''; ", "abort", "macro", "resourceName", " after ", "unshift", ") { for (var ", "elicitInput", "filename", "meta", ", '", "Number must be a multiple of ", "handleIncomingNotification", "选择文件失败，请重试", " : ", "Prompt", "appendNamespaceToCIMode", "#33CCFF", "3rdParty", "OpenAI API 错误", "getter", "验证表单中...", "', depsCount: ", "上传失败，请重试", "context", "运行失败 - 未获取到 nodeInfoList，请先执行 getNodes()。", "仅当前图层范围", "Current layer boundary", "无法打开图像文件: {{error}}", "getData", "setupGraphStoreSync", "defaultMeta", "prepareLoading", "namespace", ` , message: 'should match "' + `, "exactly", "3692rjRfYn", "fallbackRequestHandler", " return errors === 0;       ", "currentOnly", " === 'false' || ", "自动填入画布关闭", "getCurrentNodeId", "keySeparator", "#/definitions/stringArray", "不裁剪", "hasResourceBundle", "userDefinedKeySeparator", "revocable", "elicitation/create", "json", "Idle", "getPrototypeOf", "App ID:", "请输入您的 Google API Key", "创建参考线框架", "Clear", "nonempty", "resolveRef", "Click to send (Shift-click creates new document)", "Unknown error", "Server does not support resources (required for ", "setRequestHandler", "nan", "; if (!", "Failed to create file resource", "-{{value}} points", " = vErrors[", "locale", "removed", "status", "Uncaught error in notification handler: ", "Failed to save prompt templates.", "origin", "backend", "调整预览文档尺寸", "notificationQueue", "Uploader not set", "Fit to current layer", "dataType", "Sending all images...", "abv", "任务执行失败: {{error}}", "NumberFormat", "info", " when property ", "[0-9A-Fa-f]", "Full Canvas", "warning", "closeWorkflow", "ConnectionClosed", " if (!(await ", "setLimit", " } }", "SDPPPX 服务不可用", "getBestMatchFromCodes", "https://raw.githubusercontent.com/ajv-validator/ajv/master/lib/refs/data.json#", "] = ", "connectionManager", "getValidEnumValues", "INTERCEPTOR_ERROR", "无效边界: 左边必须小于右边，上边必须小于下边", ") || ", "isPersisted", "Action handler ", "schemaPath", "shift", "loadResources", "escapeQuotes", `" keyword validation' `, "query", "getTransportInternal", "refVal", "sendResourceUpdated", "safeValue", "maxSize", "getConnectionInfo", "cacheUserLanguage", "HTTP URIs must have a host.", "如何获取APIKey和API Secret", "sendToolListChanged", "#00CCFF", "processCode", '" already exists', "common", "executeOutgoingRequestInterceptor", "更多操作", "finally", "{0,5}", "[BroadcastManager] Error forwarding ", "cancelled", "addRule", " failed", "File upload failed", "resolvedOptions", "currency", "position", "validateHandlerType", "Server does not support logging (required for ", "Points Spent", "__DEFAULT__", "); if (!", "%25", ")) { if (vErrors === null) vErrors = ", "正在发送图像...", "[GraphStoreSynchronizer] Error broadcasting state update for ", "((\\d\\d[2468][048]|\\d\\d[13579][26]|\\d\\d0[48]|[02468][048]00|[13579][26]00)-02-29|\\d{4}-((0[13578]|1[02])-(0[1-9]|[12]\\d|3[01])|(0[469]|11)-(0[1-9]|[12]\\d|30)|(02)-(0[1-9]|1\\d|2[0-8])))", "object", "too_big", "[GraphStoreSynchronizer] Error processing store update for ", "passthrough", "]; } else { ", "uploadImage API failed - HTTP error! status: {{status}}", "firebug", " var schema", "minLength", "date-time", "isBase64", "hasOwnProperty", "getNode", "[\\.]", "preprocess", "510", "Model with affordable price, abundant community applications", "请选择AI服务", "Crop by selection", " = false , ", "milliseconds", "点击发送（Shift-点击新建文档）", "unescapeComponent", "cleanCode", "Internal error", "async keyword in sync schema", " ( ( ", "&#x2F;", "day", " than ", "initializeResponseQueue", "maxItems", "New Template", "Reset", "fallbackLng", "prp", "Send all", "_regex", "Adjust input settings", "exception", `获取图像 &
裁剪选区遮罩`, ")) ", " , schema: validate.schema", "Base URL", "startTime", "pst", "Failed to write log file:", "status API failed - HTTP error! status: {{status}}", "Advanced selection", "uiLocale", "userDefinedNsSeparator", "proxy", "iterator", ".schema = ", "step", "/required", ") break; } ", "string", "pctDecChars", "toJSON", "Fetch current layer with canvas boundary", "nest", "schema id must be string", "hijacked", "custom keyword definition is invalid: ", " Math.abs(Math.round(division", "readOnly", "reason", "画布边界", "Fetch canvas with primary boundary", "./api/manager/reboot", "argumentsError", "以主图边界获取画布", "getImage", "No handler for streamRequestor: ", "allServers", " , message: 'boolean schema is false' ", "  var err =   ", "realTransport", "finite", "管理可复用的提示词模板", " == 'boolean') ", "bind", "slice", "本地视频", "addFormat", 'did not save key "', "isLanguageChangingTo", "start", "Selection", "outputType", "findPath", "prompts/list", "nonExplicitSupportedLngs", " not implemented for node ", "_fragments", "color", "Edit Template", "addCached", "{2}", "Preparing...", " reference.", "' && !(typeof ", "pes", " else if (", "请输入大于 0 的像素值", "getAccountStatus API 调用失败 - HTTP 错误，状态: {{status}}", " } ", "received", "__internal_requestInitialState_", "getNodeStore", " = undefined; ", "Auto", "Unsupported upload type: {{type}}", ") break; ", "buffer", "]] !== undefined ", "上传图片中...", "仅选区范围", "Edge references unknown target node: ", "registerHandler", "schema", "prev", "); for (var ", "Get selection failed", "load", "ajv", "Set as Canvas", "新建文档", "click", "Validation", "validateStreamRequestorRequest", "Layer {{layerName}}", "点击移除本地文件", " , message: 'should have ", "Processing {{processed}}/{{total}}", "unknown", "Maximum total timeout exceeded", "(?:", "'else'", "-latn", "_notificationHandlers", "Service unavailable (503)", "我的模板", "_transport", "整个画布", "[\\+\\-\\.]", "ZodString", "false schema", "Cloud-based model service platform", "Upload failed: ", "X10", "joinAs", "forwarded", "重新加载", "Canvas boundary", "Shortcut selection feature requires login", "addSchema", "Input Image", "done", "req_", "assertRequestHandlerCapability", "智能对象图层", " = false; else if (", "ComfyUI not ready", "skipCopy", "创建文档", "[\\:\\@\\/\\?]", " if (Array.isArray(", "SDPPP sponsor exclusive API", "implementInternalAction", "给发送的图片创建文档", "languageUtils", "loadLanguages", "Outgoing message:", "2025-06-18", "prd", "ComfyUI加载中...", "notificationsIntercepted", " = true , j; if (i > 1) { ", "PS shortcuts may be blocked by plugin...", "useRawValueToEscape", "parentDataProperty", "RH Coins:", " var missing", "close", "defaultVariables", "Quick", "Exclude current layer", "compileAsync", "forward", "ZodPipeline", "自定义AI工作流引擎", "Error validating elicitation response: ", "dataLevel", " throw new ValidationError([", " = false; ", "ComfyUI loading...", "completion/complete", "Action {{0}} 未找到", "decline", "skipKeywords", "Content", "after app.queuePrompt errors: ", "{6}", "_clientCapabilities", "xmn", "#9933CC", " | ", '"number"', "pipe", "forkResourceStore", "Google Gemini Image Generator", " == +", "Cannot access data ", "', missingProperty: '", "Generating...", "replace", "call", "connecting", "Manage reusable prompt templates", "获取图片", "at least", "/additionalProperties", "遮罩应用后未得到资源", "setNotificationHandler", "skips", " , message: '", "Enter Google API Key", "_timeoutInfo", "changeTracker", "getSchema", "Negative Crop", "))) { ", "getTransport", "加载历史任务...", "hasOutgoingRequestInterceptor", "dev", "setItem", "translate", "opts", "registerCapabilities", " var i = ", "shape", "控件 {0} 转换失败：", "Local file", "handleAsObject", "uuid", "api/view?type=", "同步当前内容", ".errors", "fallbackNS", "_requestMessageId", "languageOnly", "readonly", "IPV4ADDRESS", " , message: 'should be equal to one of the allowed values' ", "widgetable", "reference", "subfolder", " = true; else if (typeof ", "strictNumbers", "init: you are still using the legacy format function, please use the new approach: https://www.i18next.com/translation-function/formatting", "[^0-9]", " element(s)", "auz", "reboot", "_cachedPath", "invalid_union", "defaults", "sdppp_assets", "_def", "storage", "backendConnector", " || ! Object.prototype.hasOwnProperty.call(", "maxRetries", "add", "headers", "PluralRules", "))))) {", "Success", "_parse", "sdpppHandshake", "How to get APIKey and API Secret", " = await ", "defaultNS", " must be number or boolean", "date", "join", "清空选择", "requestInitialStateForNode", "准备中...", "Run", "当前任务数:", "expected", "nonstrict", "notifications/tools/list_changed", "protocol", "create", "const", "My Templates", "__esModule", "; if (vErrors !== null) { if (", "Current layer bounds only", "comfyAPI", " = true; if ( ", "omit", "[UnexpectedJSONParseError]: ", "unknownFormats", "_errors", "isInitializing", ".dataPath === undefined) ", " , params: { type: '", "Logout", "custom", "Select Workflow", ".length > ", "ZodEffects", " via punycode: ", "exactLength", " = true; break; }", "String must contain ", "创建时间", "pong", "URI can not be parsed.", "notifications/resources/list_changed", "reduce", " ucs2length(", "当前图层", "Expected ", "getCapabilities", "log", "formatters", "relativetime", "and", "zod", "waitingReads", ") > 1e-", "提示词", "metaSchema", "  )  ", "connect", "reload", "interpolation", "_options", "long", "translation", "maxProperties", "removeDotSegments", "ESCAPE", "addNamespaces", "No images to preview", "params", "ZodNever", "Invalid function return type", "Tutorial", "fromCharCode", "Connect", " < ", " , schema: false , parentSchema: validate.schema", "Username: {{username}}", "获取结果失败: {{error}}", "Heartbeat timeout for poster ", "Only the latest 10 items are available in this version", "absolutePath", "Add Template", "streamRequestorHandlers", "range", ".dataPath = (dataPath || '') + ", "resources", "Asynchronous transform encountered during synchronous parse operation. Use .parseAsync instead.", "escapeFragment", " , params: {} ", "stats", "反向裁剪(Inpaint)", "NOT_FRAGMENT", "separator", "Auto send enabled", "image/png", "Auto-run workflow after changes...", "uniqueItems", "MIN_SAFE_INTEGER", "definition", " , message: 'should NOT have ", "patternProperties", "质量{{percent}}%", "{4}", "; var ", "disable", "substr", "PS图片", "ZodUnion", "messages", "Result fetch failed", "symbol", " = validate.schema", "extendTranslation", "选择模型", "Not a ZodError: ", "invalid_literal", "comfy-entry", "No errors", "Cannot reboot because ComfyManager is missing", "nsSeparator", "second", "lazycreate", "lastPongReceived", " = errors , ", " != 'number') || ", "获取结果失败", "停止自动运行", " = typeof ", "createWithPreprocess", "; }   var err =   ", "extract", "initAsync", "已选择", "[BroadcastManager] Error forwarding broadcast:", "网关错误 (502)", ".length <= ", "资源标识符无效", "Max size (px)", "选择文件", "Supabase URL", "use", "missingKeyNoValueFallbackToKey", "ZodUnknown", "ref/resource", "暂无视频", "schemaHasRules", "external", "nestingOptionsSeparator", "创建文件资源失败", "（会员专属）", "removeSchema", "callValidate", "objectValues", "); errors = vErrors.length;  for (var ", "mode", "处理进度 {{processed}}/{{total}}", "order", "Shift 点击或右键可切换自动发送", "Mask apply returned empty resource", "user", "Outgoing request interceptor failed: ", "jwt", "sdppp/directRequest", "resolveImage", " = null; try { ", "UNRESERVED", " if (", "Document {0} not found", "OpenAI/Google 格式API", "runningRequests", "count", "File not found: {{path}}", " in ", "Uploading, if the image too large, may be lag...", "typeof ", "jpr", "mailto", "uploadImage API failed - {{reason}}", "returnDetails", "toQuotedString", "#FF3300", "[object RegExp]", "loaded", "选择边界", " self._opts.$comment(", "checks", "default is ignored in the schema root", "init", "_getId", "heartbeatInterval", "if (!", "merge", "ComfyUI服务器重连中", "translator", "OpenAI/Google format API", "Generate", "选择素材来源", "Request interceptor failed for ", "schemaHasRulesExcept", "Comfy Manager未安装，无法重启", "获取 API Key", "waiting for queue prompt", "mcpMesh", "services", "$schema must be a string", ") {   ", "toASCII", "postProcessPassResolved", "requestHandlers", "extensionManager", "5604mBcUKY", "发送图片失败 {{index}}: {{error}}", "empty", "#CC33CC", "Unrecognized key(s) in object: ", "onmessage", "buildAdjacencyList", "errorDataPath", "无效操作: {{action}}", "streamRequest", "checkDataTypes", "assertIs", "1240282MfDGBR", "请登陆后使用插件", " at one or more positions greater than or equal to ", " = defaults[", " === 1) ", " = +", "widgets", "Template saved.", "token", "快捷键选图功能仅在插件窗口聚焦时可用", "#CC6600", "./sdppp-custom.js", "Synchronous parse encountered promise.", "broadcastCurrentState", "Not current document", "unrecognized_keys", "endsWith", "executeOutgoingNotificationInterceptor", "[object Function]", "broadcast", "缺少主图资源", "_requestHandlerAbortControllers", "urn", "TaskRouter 服务地址", "ary", "compile", "getDefaultValueFromField", "_compilations", "send", "Auto fetching…", "fcName", "负面提示词", "exists", "graph", " , data: ", " , params: { allowedValue: schema", "newdoc_canvas", "#33CCCC", " !== parseInt(division", "Using local file", "Please select an app first", "keySchema", "relatedRequestId", ")) {  var err =   ", "ZodFunction", "lastIndex", ") { if (vErrors === null) vErrors = ", "getDefinition", "More Settings", "kind", "async schema in sync schema", "protocolVersion", "Cannot access property/index ", " === 0 || ", " != 'boolean' && ", "unescapePrefix", " if (rootData === undefined) rootData = data; ", " try { await ", "0?[1-9]", "invalid_date", "errs__", "当前选项：图层 {{layerName}}", "additionalProperties", "getFallbackCodes", "customRule", "请输入您的Replicate API Key", "prs", "RunningHub - {{webappId}}", "requestInfo", "curr", "connected", "{1,4}", " , params: { additionalProperty: '", "  for (var ", ", received '", "diff", "自动同步: 开启", " || ", "Outputs", '[\\"\\\\]', "画布范围", "nodeId", "errToObj", "action", "maxParallelReads", "TaskRouter client is not initialized", "interpolator", "_onnotification", "findPathInternal", "[^\\%]", "pluralCategories", "暂无预览内容", "Guest login successful", "getStats", "请填写模板名称。", "请输入您的RunningHub API Key", "正在连接 ComfyUI...", "历史记录", "No workflow selected", "sendStreamRequestorRequest", "addIssue", " , params: { multipleOf: ", "customRules", "Smart Object Layer", "Mask resource is missing", "Array.isArray(", "sdppp/streamRequest", "[\\:]", "escapeComponent", "minItems", "Task ID", "++) { var ", "[A-Za-z]", "设为选区", "notifications/cancelled", "deprecate", " + ']'", "No task template selected", "enforceStrictCapabilities", "canvas", "map", "_onerror", "if ( ", "readingCalls", "formatter", "errorPath", "function", "未授权 (401)", "uploadImage API 调用失败 - HTTP 错误，状态: {{status}}", ") {  var err =   ", "Failed to update the {{part}} prompt: ComfyUI connection is not ready.", "Applying templates is unavailable right now.", "key '", "} else {  errors = ", "Unable to reboot ComfyUI", "toLowerCase", "body", "checkDataType", "Incoming message:", " !== undefined ", "#3366CC", ")) {  ", "subscribe", " && !(", "ZodOptional", "#FF0033", "exactly equal to ", "xaa", "#FF6633", "null", "Note", " else { ", "payload", "请选择要发送图像的位置", "nodeTransports", "async schema referenced by sync schema", "11068155tILZfg", "Output to:", "点我恢复", "failedLoading", "uiWeight", "请填写提示词内容。", "ayn", " / ", "2[0-4]", "util", " must be number", "Stop", "isULID", "Leave empty for no limit", "ayp", "以画布边界获取画布", "[^\\%\\:]", "[\\-\\.\\_\\~]", "UploadPassProvider 与 TaskRouter 上传机制不兼容，请改用 uploadResource。", "ZodAny", "#0033FF", "nullish", "Defaults using", "<errors; ", "Please enter a model name", "setupNodeBindings", "#3333CC", "目标边界为空", "NOT_HOST", "ValidationError", "cmp", "keywords", "invalid_intersection_types", "; else vErrors = null; } ", "run API failed - nodeInfoList unavailable. Please call getNodes() first.", '" (see option extendRefs)', "resources/list", "MissingRef", "Please select the mask to get", "contextSeparator", "hasLoadedNamespace: i18next was not initialized", "self", ".length ", "tried", "ZodDate", "A request handler for ", "app", "roots", "notifications/resources/updated", ", rootData)  ", "#CC3333", "拖拽图片到此处松开完成上传", "running", "addLookupKeys", " , schema: ", "ZodSymbol", "refVal[", "TaskRouter service URL", "Request timeout (408)", "Status check aborted", "Failed to open file as document: {{path}}", "valueType", "#3366FF", "Your Workflows", "#3300CC", "nanoid", "Canvas", "getSuffixes", "ZodLiteral", "ulid", "createGlobalDispatcherForType", "#33CC99", "constructor", "没有链接图层: {{0}}", "hostVersion", "pluralResolver", "Images", "[MCPMiddleware]", "SDPPP赞助者专用API", "按选区裁剪", ".schemaPath === undefined) { ", "from", " in key: ", "getNodeTitle", "masks", "\\.\\d{", "var refVal", "提示词内容", "%[EFef]", "getSuffix", "normalizeDuration", "应用模板失败。", "var division", "  errors = ", "#0033CC", " %c", "uxp", "getTextInfo", "minute", "退出登录", "rootId", ` if (typeof item == 'string') item = '"' + item; `, "inclusive", "ignore", "yds", " !== undefined) ; ", "parentData", "Range 1-100", "defaultValue", "No preview content yet", "type", "Already connected to node ", "text", "Server does not support sampling (required for ", "mountedEndpoints", "Task creation aborted", "高级选图", "未配置上传器", "ZodBoolean", "parseInt", "_progressHandlers", "Stop all", "useDefaults", "roots/list", "clearItems", "Paste your model name", "parent schema must have all required keywords: ", " != 'boolean') ", "(Queue:{{queueSize}}) {{progress}}% {{executingNodeTitle}}...", "needsPlural", "非当前文档", "请选择一个历史任务", "[ ]*{", "Click to use current selection", "refinement", "stack", "正面提示词", "millisecond", "Current", "'[' + ", "Client does not support elicitation (required for ", "/patternProperties/", "Failed to send response: ", "setPrototypeOf", "创建操作需要矩形坐标", "signal", "No active layer", "[A-Za-z0-9\\-\\.\\_\\~", "Copy", "setInterval", "originalError", `" won't get resolved as namespace "`, "画布变动后自动运行", "returnEmptyString", "url", "unsetNotificationHandler", "anyOf", "keys", "nid", "exec", "getPathExpr", "resolved promise for", "unicodeSupport", "MCP error ", ") ) ", "Auto Sync: off", "主图边界", "escape", "negative", "_pendingDebouncedNotifications", "ctx", "Error compiling schema, function code:", " && !", "从磁盘获取", "run API failed - {{reason}}", "title", "schemaExcl", "Import as Smart Object", "$schema", "__origin", ", limit: ", "obj", "使用当前图层", ").length ", "del", " = errors === errs_", " instanceof RegExp) && ", "正在运行", ")) { ", "#6633FF", "floor", "parentElement", "Plugin window focused required to use keyboard shortcut", "supportedLngs", "RequestTimeout", "jsonStringifyReplacer", "(\\.\\d+)?", " }; return validate; ", "interceptorTimeout", "; else if (", ")' returned an object instead of string.", "pathname", "Not connected", "function(data, dataPath, parentData, parentDataProperty, rootData) { 'use strict'; ", "#CC0000", " = false;for (var ", "some", "Workflow not found", " = 0; ", "Error handling incoming message:", "_instructions", "Queued", "graphToPrompt", "resetRegExp", "sampling/createMessage", "initializeNodeStores", "async format in sync schema", "validation", "debouncedNotificationMethods", " not found on node ", "Merge group failed", " === null || ", "audio", " == 'object' && Array.isArray(", "正在上传...", '$ref: validation keywords used in schema at path "', "运行中", "time", " === false) ", "Selected", "ZodArray", "greater than or equal to ", "unknown keyword: ", "Waiting for image upload...", "detectCycles", "queue_remaining", "任务未完成，当前状态: {{status}}", "Gemini 2.5 Flash Image", " }  ", "ruleErr", "postProcess", "http://json-schema.org/schema", "schemaErrorMap", "]; }  ", "已完成", "run API 调用失败 - HTTP 错误，状态: {{status}}", "root", " validate.errors = [", "/additionalItems", "getItem", "sdppp 运行 Photoshop Action", " = !(false ", "enum", "/%2F", "catchValue", " has duplicate value ", "   var err =   ", "closeHandlers", "Create guide frame", "Invalid graph definition: ", "minimum", " from id ", "Get mask from Selection", "刷新余额", "index", " validate.errors = null; return true; ", " != 'string') || ", "#00CC00", "removeEventListener", "onclose", " if (false) { ", "parseAsync", "propertyNames", "Task cancelled", ") {   var err =   ", ".async; ", "扣除积分", "Invalid date", ` , message: 'should match pattern "`, "Waiting in queue", "secure", "Enter your Replicate API Key", ") continue; ", "openWorkflow", "_onclose", " not found for node ", "invalid_arguments", "|0?0?", "utils", "email", "emit", "exclusive", "addIssues", "TaskRouter 客户端未初始化", "en-US", "Cannot forward to node ", "[vV]", "Select a history task", "去赞助", "_schemas", "invalid-input", "not_multiple_of", "ZodBigInt", "transports", ".validate", "#9933FF", "defaultError", "edges", "Current selection: Canvas", "isOptional", "resources/unsubscribe", "should NOT have additional properties", " , schemaPath: ", "observers", "heartbeatTimeoutTimer", "saveMissingTo", "usedLng", "Invalid", "queue", "还没有自定义模板。", "items", "需要提供图像和提示词", "当前选项：画布", "append", " if (! ", "pbu", "names", "rules", "Save current", "newdoc", "创建预览文档", "Invalid action: {{action}}", '.schemaPath = "', "sam", "]); ", "outgoingNotificationInterceptors", "Unauthorized (401)", "logger", "_getInvalidInput", "任务取消失败: {{error}}", "` could not be extracted from all schema options", "Error in direct request ", "_parseSync", "resetTimeoutOnProgress", "finished", "已取消", "completed", "Are you sure you want to delete this template?", "match", "if (", "maxReplaces", "暂无可用工作流。", "; if (", "1.0.0", "; else vErrors = null; }  ", "Seems the loaded translations were in flat JSON format instead of nested. Either set keySeparator: false on init or make sure your translations are published in nested format.", "rejecting language code not found in supportedLngs: ", "?\\:\\:", "isConnected", "keywordValidate", "ajp", " to ", "out", "dirty", "loadSchema", "Discriminator property ", "This node defaults to current layer + mask", 'Invalid input: must include "', "addUsedSchema", "dir", "ads", "trim", "regex", "Stop and cancel all", "missingKeyHandler", "removeDefault", "year", "flatten", "retryTimeout", "cloneInstance", "test", "lastIndexOf", "has", "addPostProcessor", "#CC3399", "Channel connecting...", "#0099FF", "AbortSignal is already aborted", "Unsupported image input type", "Open images from file", "No connection available for node ", "#33CC00", "ignoreJSONStructure", "style", "Invalid function arguments", "#CC9900", "AI 生成任务", "selection", "ltr", "tools", "parent", "statements", " ) ", "getHandler", "#3399CC", "minProperties", "fatal", " }; return validate;", "点击使用当前选区", "http://json-schema.org/draft-07/schema", "clear", " if (errors === ", "未选择任务模板", "Number must be finite", "Invalid input", " levels up, current level is ", "acy", "process", "strip", "How to get APIKey", "Method not found", "' , dataPath: (dataPath || '') + ", "找不到图层: {{0}}", "isCIDR", " , validate.schema", "curlayer_curlayer", "Generation failed", "listenMessageCallback", "precision", "capabilities", "#6600FF", "cleanup", "sampling", "usePattern", "status API 调用失败 - HTTP 错误，状态: {{status}}", "'/' + ", "图层 {{layerName}}", " == 'number' ? ( (", 'Only layer kind "TEXT" is supported, invalid layer: {{0}}', "(队列:{{queueSize}}) {{progress}}% {{executingNodeTitle}}...", "actions:util", "should have required property \\'", " , parentSchema: validate.schema", "All", "additionalItems", " = true; ", "hasAction", " = refVal[", "more", "mesh", "async", "notice", "Failed to load workflows.", "AUTO", "other", "invalid_type", "sdk", "method", "Unicode", "formatArgs", "formatSeparator", "code", "Deferred upload failed: {{error}}", "ref/prompt", "extendRefs", "Select a model", "meta-schema not available", "console", "Login Successful", "Failed to apply template.", "indexOf", "urn:uuid", "required", " !== undefined && typeof ", "选区遮罩为空", "Send to Selection", "keyword", "direction", "userAgent", " ms", "value", "Execute", " == errors) {", "ZodIntersection", "transform", "definitions", " not in path ", "formatLanguageCode", " (Members only)", "没有活动文档", ", validate.root.schema);", "resolve", "uxpHost", "任务执行失败", "[\\xA0-\\u200D\\u2010-\\u2029\\u202F-\\uD7FF\\uF900-\\uFDCF\\uFDF0-\\uFFEF]", "Core schema meta-schema", "reverse", "Fit to canvas", "_clientVersion", " && self._opts.unknownFormats.indexOf(", ".additionalProperties", "AI Generation Task", "debugDisableHeartbeatResponse", "acq", "namespaces", "Reverse", "clone", "missing", "path", "res", "toLoad", "unknownKeys", "optional", "unescapeSuffix", "node", "secs", "Enter a pixel value greater than 0", ", deps: '", "SDPPPX services are not available", "default", " = ", "notification", " is present' ", "appendNamespaceToMissingKey", "_cached", "verbose", "无法写入{{part}}提示词，请稍后重试。", "objectKeys", "已限定范围", "resetStats", "isCUID2", "No images yet", " = [", "Save and run immediately", "ars", "optionsMap", "sdppp_widgetable_title", "Stop auto run", "Node not found", "本地图片包", "正在创建任务...", "next", "Failed to pick file. Please try again.", "ping", "arrayKeywords", "addMiddleware", "interceptor_error", "]; if (", "+Shift 调整更多选项；Ctrl 单次获取。", " !== undefined) { ", "sdppp", "then", "days", " + '", '[\\"]', "ZodCatch", "nodeIndexes", "duration", "unwrap", "_onrequest", "comfy side transport.onerror", "Get Image", ` , message: 'should match format "`, "broadcastHandlers", "waiters", "instructions", "removeMessageEventListener", "[i]; ", "isInteger", "not", " delete ", " for interpolating ", "regexpUnescape", "Action ", " , params: { keyword: '", "dataProperties", "workflowManager", "PCT_ENCODED", "No workflows available.", "clearHeartbeatTimers", "not_finite", "oneOf", "Importing image {{index}}/{{total}}...", " , params: { missingProperty: '", "Local image pack", "MAX_SAFE_INTEGER", "图像质量 (%)", "sec", '"; } ', "getUsedParamsDetails", "overloadTranslationOptionHandler", "InvalidParams", "Create document failed", "cidr", "progress", "设为当前图层", "正在导入图片 {{index}}/{{total}}...", ") vErrors.length = ", "startHeartbeat", "run", ".validate;", "#/definitions/schemaArray", "#FF9933", "setKey", "accessing an object - but returnObjects options is not enabled!", "Async refinement encountered during synchronous parse operation. Use .parseAsync instead.", "adf", "errorHandlers", "#/definitions/nonNegativeInteger", "fallback", "Drag images here and release to upload", 'id "', ") { errors = ", "exact", "convert widget {0} failed:", "filter", "remove", " , (dataPath || '')", "workflow-run", "ZodObject", "graph update cost ", "prototype", " , params: { property: '", "$dataMetaSchema", "def", "OpenAI - Image Edit", "abs", " if (typeof itemIndices[item] == 'number') { ", "[\\:\\@]", "heartbeatTimeout", "ZodLazy", "coerceTypes", "[\\:\\/\\?\\#\\[\\]\\@]", "++) { vErrors[", " = false; j = itemIndices[item]; break; } itemIndices[item] = i; } ", "点此获取RunningHub APIKey", "   ", "setOutgoingRequestInterceptor", "writeOnly", "validateSchema", "作为智能对象导入", "round", "overwrite", "keyType", " , params: { failingKeyword: ", "resources/subscribe", "compositeRule", "以当前图层边界获取当前图层", "valueOf", "copy", "nestingSuffix", "forEach", "same-document", "Task cancel failed: {{error}}", '";  ', "#CC3300", "#66CC33", "邮箱: {{email}}", "item", "新建模板", "Date must be ", "auto", "Show sent images", "else", "await ", "app.queuePrompt caught", "NOT_USERINFO", "Refreshing preview...", "entries", "enable", " var err = ", "No backend was added via i18next.use. Will not load resources.", "datetime", "_validateKeyword", "allKeys", "name", "No custom templates yet.", "alwaysSet", "nullable", "Node definition not found for ", "[object Number]", " &&   Object.prototype.hasOwnProperty.call(", " }   ", "prompts", "Get mask from Current Layer", "=startErrs", "正在发送所有图片...", ";  if (vErrors === null) vErrors = [err]; else vErrors.push(err); errors++; ", "暂无可预览图像", "handle", "cacheKey", "false", "Running...", "#3333FF", "获取图层信息", "Timeout", "rest", "data", "queuePrompt", "number", "fast", "Instance method `debug.destroy()` is deprecated and no longer does anything. It will be removed in the next major version of `debug`.", "hour", "_addSchema", "assertNotificationCapability", "element", "updateMissing", "implements", "strictDefaults", " var ", "Failed to connect to ComfyUI (HTTP {{code}})", "5557410DmMIox", " == 'object' && !(", "returnedObjectHandler", " , message: 'should be multiple of ", ".call(this, ", " for (var ", "initialized", "_cleanupTimeout", "选区遮罩", "heartbeatTimer", "发送至选区", "]; var ", "augment", "minValue", "broadcastReceived", "apply", " + ", ".errors; else vErrors = vErrors.concat(", " else ", "负面提示词内容", "_error", "passContext", "（为空）", "concat", "Notification handler failed for ", "[j])) { ", "port", "unsetRequestHandler", "No limit", " validate.errors = vErrors; ", "ids", "MiddlewareError", "maxTotalTimeout", "length", "Locale", "#FF0099", "Get layer info", "unicode", " items' ", "getDefaultValuesFromSchema", "hasError", "charAt", "写入日志文件失败:", "ZodUndefined", "yhd", "getTime", "Delete", "too_small", "按住 Shift 键以新文档方式导入", ".data = ", "notifications/prompts/list_changed", "停止并取消全部", "messageQueue", '" resolves to more than one schema', "left", "toString", "https://github.com/ajv-validator/ajv/blob/master/lib/definition_schema.js", "You are passing a wrong module! Please check the object you are passing to i18next.use()", "25[0-5]", "模型物美价廉，海量社区应用", "video", "emoji", "version", "SDPPP可能未安装或和插件版本不匹配 (404)", "ComfyUI connection not configured yet. Please set the address first.", "Validating form...", "markDisconnected", "tools/list", "任务创建已中止", "assert", "get_layer_info: 需要 layer_identify", "暂无图片", "AbortError", "avl", "sendLoggingMessage", "exactUsedKey", "Task execution failed: {{error}}", "segment", "int", "tDescription", "编辑模板", "isRoot", "nestingRegexp", "Entire Canvas", "jsonPointers", "+Alt crop by selection", "^\\[?(", "以主图边界获取当前图层", "Received host version from UXP:", "errorsText", "Invalid ", "joinValues", "tools/call", "unescapeFragment", " !== undefined)", "capacity", `"' `, "parse", "setComfyOrgAPIKey", "#9900CC", 'no schema with key or ref "', "Crop", "store:update:", "elicitation", " !== ", "pluralRulesCache", " , rootData )  ", ";  if (vErrors === null) vErrors = [err]; else vErrors.push(err); errors++; } ", "mountedTransports", "$comment", "$el", "Get API Key", "cimode", "Selection mask", "get_layer_info requires layer_identify", "/properties", "Received a progress notification for an unknown token: ", "postMessage", "types", "defineProperty", "positive", "multipleOf", "curlayer_canvas", "errors", "resolveRunImages", "任务已取消", "#CC3366", "2.0", "Images Per Batch", "precheck", "properties ", "multipleOfPrecision", " = undefined;", "(.+?)", "cleanupConnection", "applyPostProcessor", "innerType", "run API failed - HTTP error! status: {{status}}", "当前选项：图层", "getCanonicalLocales", "[^]", "__internal_", "Import as New Document", "destroy", " var validate = ", "buildDirectedAdjacencyList", "brand", "{0,2}", "toResolveHierarchy", "服务不可用 (503)", " , schema:  ", "Failed to check workflow state changes:", "newlayer_curlayer", "discriminator", "Failed to resolve tenant information", "requestIdSeq", "none", ") { ", "Auto Sync: on", "one", "reset", ".length; ", "loadOne", "NOT_QUERY", "https", "ZodVoid", "Empty selection mask", "shared", ") - division", "gte", "resources/templates/list", "actions", "schemas", "pluralSeparator", "missingRefs", "Number must be ", "stateUpdate", "off", "])) { ", ") ? ", "); if (", "Main Image", "; } ", " */", "regExpQueue", "发送到PS", "float", "nestingPrefix", " || Object.keys(", "' : '", "Schema ", " cannot be resolved", "DEBUG", " } catch (e) { if (!(e instanceof ValidationError)) throw e; if (vErrors === null) vErrors = e.errors; else vErrors = vErrors.concat(e.errors); errors = vErrors.length; ", "rootData", "登录成功", "%[89A-Fa-f]", "validation failed", "Area AI reads from; controls max image size", "options", "[\\!\\$\\%\\'\\(\\)\\*\\+\\,\\-\\.0-9\\<\\>A-Z\\x5E-\\x7E]", "'[\\'' + ", "Limit image size", "No image returned", "splice", "  }  ", "missingRef", ";  ", "Opening workflow", "&quot;", "offset", "registerDirectRequestHandler", "val is not a non-empty string or a valid number. val=", "自动同步未打开", "请输入质量百分比", "is a required property", "AI使用的区域与最大尺寸控制", "]) ", " var schemaExcl", "contextualErrorMap", "Created At", "InternalError", "([01]\\d|2[0-3]):[0-5]\\d(:", "pop", "') ", "color: inherit", "addKeyword", "handleIncomingMessage", "Keyword ", "Negative prompt content", "getRegExp", "useCustomRule", "_parseAsync", "expired", "_capabilities", "at most", " = null;", "自动获取中…", "SDPPP 2.0 不再需要此节点", " already exists, which would be overridden", "isOpen", "isTop", "  if (!", "requestedSchema", "No first related layer in {{0}}", "implementAction", "mins", "flags", "interpolate", "排队等待", " , message: 'should NOT be valid' ", "isSafeInteger", " , params: { limit: ", "默认模板", "(new RegExp(", "stream", " is loaded but ", "当前没有活动图层", "Server does not support notifying of prompt list changes (required for ", "nodeProxies"];
  return yx = function() {
    return o;
  }, yx();
}
function ho(o, x) {
  const t = a, r = (o.toString()[t(3263)](".")[1] || "")[t(2710)], e = (x.toString()[t(3263)](".")[1] || "").length, s = r > e ? r : e, n = Number[t(2085)](o[t(621)](s)[t(1521)](".", "")), i = Number[t(2085)](x[t(621)](s)[t(1521)](".", ""));
  return n % i / 10 ** s;
}
class B0 extends Ce {
  constructor() {
    const x = a;
    super(...arguments), this[x(521)] = this.gte, this[x(753)] = this[x(542)], this[x(1358)] = this[x(2798)];
  }
  [a(1585)](x) {
    const t = a;
    if (this[t(1575)][t(1077)] && (x[t(2663)] = Number(x.data)), this[t(2981)](x) !== ae[t(2665)]) {
      const n = this[t(3148)](x);
      return ee(n, { code: Z[t(2421)], expected: ae[t(2665)], received: n[t(3156)] }), he;
    }
    let e;
    const s = new e0();
    for (const n of this[t(1575)][t(1773)])
      n.kind === t(2755) ? !Ne.isInteger(x[t(2663)]) && (e = this[t(3148)](x, e), ee(e, { code: Z.invalid_type, expected: t(766), received: "float", message: n[t(1044)] }), s[t(2329)]()) : n[t(1859)] === t(521) ? (n[t(2068)] ? x[t(2663)] < n.value : x[t(2663)] <= n[t(2446)]) && (e = this[t(3148)](x, e), ee(e, { code: Z[t(2724)], minimum: n[t(2446)], type: t(2665), inclusive: n[t(2068)], exact: !1, message: n[t(1044)] }), s[t(2329)]()) : n[t(1859)] === t(753) ? (n.inclusive ? x.data > n[t(2446)] : x[t(2663)] >= n[t(2446)]) && (e = this[t(3148)](x, e), ee(e, { code: Z[t(1305)], maximum: n[t(2446)], type: "number", inclusive: n[t(2068)], exact: !1, message: n[t(1044)] }), s[t(2329)]()) : n[t(1859)] === t(2798) ? ho(x.data, n[t(2446)]) !== 0 && (e = this._getOrReturnCtx(x, e), ee(e, { code: Z[t(2267)], multipleOf: n.value, message: n[t(1044)] }), s[t(2329)]()) : n[t(1859)] === t(1383) ? !Number[t(643)](x[t(2663)]) && (e = this[t(3148)](x, e), ee(e, { code: Z[t(2546)], message: n[t(1044)] }), s[t(2329)]()) : Ne[t(1034)](n);
    return { status: s.value, value: x.data };
  }
  [a(2846)](x, t) {
    const r = a;
    return this.setLimit("min", x, !0, ne[r(2732)](t));
  }
  gt(x, t) {
    const r = a;
    return this[r(1249)](r(521), x, !1, ne[r(2732)](t));
  }
  lte(x, t) {
    const r = a;
    return this[r(1249)](r(753), x, !0, ne[r(2732)](t));
  }
  lt(x, t) {
    const r = a;
    return this.setLimit(r(753), x, !1, ne[r(2732)](t));
  }
  [a(1249)](x, t, r, e) {
    const s = a;
    return new B0({ ...this._def, checks: [...this[s(1575)].checks, { kind: x, value: t, inclusive: r, message: ne[s(2732)](e) }] });
  }
  [a(1095)](x) {
    const t = a;
    return new B0({ ...this[t(1575)], checks: [...this[t(1575)].checks, x] });
  }
  [a(2755)](x) {
    const t = a;
    return this[t(1095)]({ kind: t(2755), message: ne[t(2732)](x) });
  }
  [a(2797)](x) {
    const t = a;
    return this[t(1095)]({ kind: "min", value: 0, inclusive: !1, message: ne[t(2732)](x) });
  }
  negative(x) {
    const t = a;
    return this[t(1095)]({ kind: t(753), value: 0, inclusive: !1, message: ne[t(2732)](x) });
  }
  [a(487)](x) {
    const t = a;
    return this[t(1095)]({ kind: t(753), value: 0, inclusive: !0, message: ne[t(2732)](x) });
  }
  nonnegative(x) {
    const t = a;
    return this[t(1095)]({ kind: "min", value: 0, inclusive: !0, message: ne[t(2732)](x) });
  }
  multipleOf(x, t) {
    const r = a;
    return this[r(1095)]({ kind: r(2798), value: x, message: ne.toString(t) });
  }
  finite(x) {
    const t = a;
    return this._addCheck({ kind: t(1383), message: ne[t(2732)](x) });
  }
  [a(654)](x) {
    const t = a;
    return this[t(1095)]({ kind: t(521), inclusive: !0, value: Number[t(1685)], message: ne[t(2732)](x) })._addCheck({ kind: t(753), inclusive: !0, value: Number[t(2551)], message: ne[t(2732)](x) });
  }
  get [a(2690)]() {
    const x = a;
    let t = null;
    for (const r of this[x(1575)].checks)
      r[x(1859)] === "min" && (t === null || r.value > t) && (t = r[x(2446)]);
    return t;
  }
  get [a(749)]() {
    const x = a;
    let t = null;
    for (const r of this[x(1575)][x(1773)])
      r[x(1859)] === x(753) && (t === null || r.value < t) && (t = r.value);
    return t;
  }
  get isInt() {
    const x = a;
    return !!this[x(1575)][x(1773)][x(3146)]((t) => t[x(1859)] === "int" || t[x(1859)] === x(2798) && Ne[x(2534)](t.value));
  }
  get [a(643)]() {
    const x = a;
    let t = null, r = null;
    for (const e of this[x(1575)][x(1773)]) {
      if (e[x(1859)] === x(1383) || e.kind === x(2755) || e[x(1859)] === "multipleOf") return !0;
      e[x(1859)] === x(521) ? (r === null || e[x(2446)] > r) && (r = e[x(2446)]) : e[x(1859)] === x(753) && (t === null || e[x(2446)] < t) && (t = e[x(2446)]);
    }
    return Number[x(643)](r) && Number[x(643)](t);
  }
}
B0.create = (o) => {
  const x = a;
  return new B0({ checks: [], typeName: pe.ZodNumber, coerce: (o == null ? void 0 : o[x(1077)]) || !1, ...ve(o) });
};
class ax extends Ce {
  constructor() {
    const x = a;
    super(...arguments), this.min = this.gte, this[x(753)] = this[x(542)];
  }
  [a(1585)](x) {
    const t = a;
    if (this[t(1575)][t(1077)]) try {
      x[t(2663)] = BigInt(x[t(2663)]);
    } catch {
      return this._getInvalidInput(x);
    }
    if (this[t(2981)](x) !== ae[t(3242)]) return this[t(2304)](x);
    let e;
    const s = new e0();
    for (const n of this._def[t(1773)])
      n[t(1859)] === t(521) ? (n.inclusive ? x[t(2663)] < n[t(2446)] : x[t(2663)] <= n[t(2446)]) && (e = this[t(3148)](x, e), ee(e, { code: Z[t(2724)], type: t(3242), minimum: n.value, inclusive: n.inclusive, message: n[t(1044)] }), s[t(2329)]()) : n[t(1859)] === t(753) ? (n[t(2068)] ? x[t(2663)] > n.value : x[t(2663)] >= n[t(2446)]) && (e = this[t(3148)](x, e), ee(e, { code: Z[t(1305)], type: t(3242), maximum: n[t(2446)], inclusive: n[t(2068)], message: n[t(1044)] }), s[t(2329)]()) : n[t(1859)] === "multipleOf" ? x.data % n.value !== BigInt(0) && (e = this[t(3148)](x, e), ee(e, { code: Z[t(2267)], multipleOf: n.value, message: n[t(1044)] }), s[t(2329)]()) : Ne[t(1034)](n);
    return { status: s[t(2446)], value: x[t(2663)] };
  }
  [a(2304)](x) {
    const t = a, r = this[t(3148)](x);
    return ee(r, { code: Z[t(2421)], expected: ae.bigint, received: r[t(3156)] }), he;
  }
  [a(2846)](x, t) {
    const r = a;
    return this[r(1249)](r(521), x, !0, ne.toString(t));
  }
  gt(x, t) {
    const r = a;
    return this[r(1249)](r(521), x, !1, ne[r(2732)](t));
  }
  lte(x, t) {
    const r = a;
    return this[r(1249)](r(753), x, !0, ne[r(2732)](t));
  }
  lt(x, t) {
    const r = a;
    return this[r(1249)](r(753), x, !1, ne[r(2732)](t));
  }
  [a(1249)](x, t, r, e) {
    const s = a;
    return new ax({ ...this[s(1575)], checks: [...this[s(1575)][s(1773)], { kind: x, value: t, inclusive: r, message: ne[s(2732)](e) }] });
  }
  [a(1095)](x) {
    const t = a;
    return new ax({ ...this._def, checks: [...this[t(1575)].checks, x] });
  }
  [a(2797)](x) {
    const t = a;
    return this[t(1095)]({ kind: "min", value: BigInt(0), inclusive: !1, message: ne[t(2732)](x) });
  }
  [a(2134)](x) {
    const t = a;
    return this._addCheck({ kind: t(753), value: BigInt(0), inclusive: !1, message: ne.toString(x) });
  }
  nonpositive(x) {
    const t = a;
    return this[t(1095)]({ kind: t(753), value: BigInt(0), inclusive: !0, message: ne[t(2732)](x) });
  }
  nonnegative(x) {
    const t = a;
    return this[t(1095)]({ kind: t(521), value: BigInt(0), inclusive: !0, message: ne[t(2732)](x) });
  }
  [a(2798)](x, t) {
    const r = a;
    return this[r(1095)]({ kind: r(2798), value: x, message: ne[r(2732)](t) });
  }
  get [a(2690)]() {
    const x = a;
    let t = null;
    for (const r of this[x(1575)][x(1773)])
      r[x(1859)] === x(521) && (t === null || r[x(2446)] > t) && (t = r[x(2446)]);
    return t;
  }
  get maxValue() {
    const x = a;
    let t = null;
    for (const r of this._def.checks)
      r[x(1859)] === "max" && (t === null || r.value < t) && (t = r[x(2446)]);
    return t;
  }
}
ax[a(1602)] = (o) => {
  const x = a;
  return new ax({ checks: [], typeName: pe[x(2268)], coerce: (o == null ? void 0 : o[x(1077)]) ?? !1, ...ve(o) });
};
class zt extends Ce {
  [a(1585)](x) {
    const t = a;
    if (this[t(1575)][t(1077)] && (x[t(2663)] = !!x[t(2663)]), this[t(2981)](x) !== ae.boolean) {
      const e = this._getOrReturnCtx(x);
      return ee(e, { code: Z[t(2421)], expected: ae[t(3106)], received: e.parsedType }), he;
    }
    return a0(x[t(2663)]);
  }
}
zt[a(1602)] = (o) => {
  const x = a;
  return new zt({ typeName: pe[x(2084)], coerce: (o == null ? void 0 : o.coerce) || !1, ...ve(o) });
};
class vx extends Ce {
  _parse(x) {
    const t = a;
    if (this[t(1575)].coerce && (x[t(2663)] = new Date(x[t(2663)])), this[t(2981)](x) !== ae[t(1591)]) {
      const n = this[t(3148)](x);
      return ee(n, { code: Z.invalid_type, expected: ae[t(1591)], received: n[t(3156)] }), he;
    }
    if (Number[t(990)](x[t(2663)].getTime())) {
      const n = this[t(3148)](x);
      return ee(n, { code: Z.invalid_date }), he;
    }
    const e = new e0();
    let s;
    for (const n of this[t(1575)][t(1773)])
      n[t(1859)] === t(521) ? x[t(2663)].getTime() < n[t(2446)] && (s = this[t(3148)](x, s), ee(s, { code: Z[t(2724)], message: n[t(1044)], inclusive: !0, exact: !1, minimum: n[t(2446)], type: t(1591) }), e[t(2329)]()) : n[t(1859)] === t(753) ? x[t(2663)][t(2722)]() > n[t(2446)] && (s = this[t(3148)](x, s), ee(s, { code: Z[t(1305)], message: n[t(1044)], inclusive: !0, exact: !1, maximum: n[t(2446)], type: t(1591) }), e[t(2329)]()) : Ne[t(1034)](n);
    return { status: e[t(2446)], value: new Date(x[t(2663)][t(2722)]()) };
  }
  [a(1095)](x) {
    const t = a;
    return new vx({ ...this._def, checks: [...this[t(1575)].checks, x] });
  }
  min(x, t) {
    const r = a;
    return this[r(1095)]({ kind: r(521), value: x.getTime(), message: ne[r(2732)](t) });
  }
  [a(753)](x, t) {
    const r = a;
    return this[r(1095)]({ kind: r(753), value: x[r(2722)](), message: ne[r(2732)](t) });
  }
  get [a(3018)]() {
    const x = a;
    let t = null;
    for (const r of this[x(1575)][x(1773)])
      r[x(1859)] === "min" && (t === null || r[x(2446)] > t) && (t = r.value);
    return t != null ? new Date(t) : null;
  }
  get [a(489)]() {
    const x = a;
    let t = null;
    for (const r of this[x(1575)][x(1773)])
      r[x(1859)] === "max" && (t === null || r[x(2446)] < t) && (t = r[x(2446)]);
    return t != null ? new Date(t) : null;
  }
}
vx[a(1602)] = (o) => {
  const x = a;
  return new vx({ checks: [], coerce: (o == null ? void 0 : o[x(1077)]) || !1, typeName: pe.ZodDate, ...ve(o) });
};
class qa extends Ce {
  [a(1585)](x) {
    const t = a;
    if (this[t(2981)](x) !== ae[t(1698)]) {
      const e = this._getOrReturnCtx(x);
      return ee(e, { code: Z.invalid_type, expected: ae[t(1698)], received: e[t(3156)] }), he;
    }
    return a0(x[t(2663)]);
  }
}
qa[a(1602)] = (o) => {
  const x = a;
  return new qa({ typeName: pe[x(2021)], ...ve(o) });
};
class Ht extends Ce {
  [a(1585)](x) {
    const t = a;
    if (this[t(2981)](x) !== ae[t(993)]) {
      const e = this._getOrReturnCtx(x);
      return ee(e, { code: Z[t(2421)], expected: ae.undefined, received: e.parsedType }), he;
    }
    return a0(x[t(2663)]);
  }
}
Ht[a(1602)] = (o) => {
  const x = a;
  return new Ht({ typeName: pe[x(2720)], ...ve(o) });
};
class Vt extends Ce {
  [a(1585)](x) {
    const t = a;
    if (this[t(2981)](x) !== ae.null) {
      const e = this[t(3148)](x);
      return ee(e, { code: Z.invalid_type, expected: ae[t(1959)], received: e[t(3156)] }), he;
    }
    return a0(x[t(2663)]);
  }
}
Vt[a(1602)] = (o) => {
  const x = a;
  return new Vt({ typeName: pe[x(577)], ...ve(o) });
};
class rx extends Ce {
  constructor() {
    const x = a;
    super(...arguments), this[x(747)] = !0;
  }
  [a(1585)](x) {
    return a0(x[a(2663)]);
  }
}
rx[a(1602)] = (o) => {
  const x = a;
  return new rx({ typeName: pe[x(1985)], ...ve(o) });
};
class Bt extends Ce {
  constructor() {
    const x = a;
    super(...arguments), this[x(703)] = !0;
  }
  [a(1585)](x) {
    return a0(x[a(2663)]);
  }
}
Bt[a(1602)] = (o) => {
  const x = a;
  return new Bt({ typeName: pe[x(1730)], ...ve(o) });
};
class C0 extends Ce {
  _parse(x) {
    const t = a, r = this[t(3148)](x);
    return ee(r, { code: Z[t(2421)], expected: ae.never, received: r[t(3156)] }), he;
  }
}
C0[a(1602)] = (o) => new C0({ typeName: pe.ZodNever, ...ve(o) });
class Wt extends Ce {
  [a(1585)](x) {
    const t = a;
    if (this[t(2981)](x) !== ae[t(993)]) {
      const e = this._getOrReturnCtx(x);
      return ee(e, { code: Z[t(2421)], expected: ae[t(1123)], received: e.parsedType }), he;
    }
    return a0(x.data);
  }
}
Wt[a(1602)] = (o) => {
  const x = a;
  return new Wt({ typeName: pe[x(2842)], ...ve(o) });
};
class h0 extends Ce {
  _parse(x) {
    const t = a, { ctx: r, status: e } = this[t(861)](x), s = this._def;
    if (r[t(3156)] !== ae[t(529)]) return ee(r, { code: Z[t(2421)], expected: ae[t(529)], received: r[t(3156)] }), he;
    if (s.exactLength !== null) {
      const i = r[t(2663)][t(2710)] > s.exactLength[t(2446)], c = r[t(2663)][t(2710)] < s[t(1623)][t(2446)];
      (i || c) && (ee(r, { code: i ? Z[t(1305)] : Z[t(2724)], minimum: c ? s[t(1623)][t(2446)] : void 0, maximum: i ? s[t(1623)][t(2446)] : void 0, type: "array", inclusive: !0, exact: !0, message: s[t(1623)][t(1044)] }), e[t(2329)]());
    }
    if (s[t(1312)] !== null && r[t(2663)][t(2710)] < s[t(1312)].value && (ee(r, { code: Z[t(2724)], minimum: s[t(1312)].value, type: "array", inclusive: !0, exact: !1, message: s[t(1312)][t(1044)] }), e.dirty()), s[t(649)] !== null && r[t(2663)][t(2710)] > s[t(649)][t(2446)] && (ee(r, { code: Z.too_big, maximum: s[t(649)][t(2446)], type: t(529), inclusive: !0, exact: !1, message: s[t(649)][t(1044)] }), e.dirty()), r.common[t(2416)]) return Promise[t(1096)]([...r.data][t(1930)]((i, c) => {
      const u = t;
      return s[u(2076)][u(2909)](new p0(r, i, r[u(2474)], c));
    }))[t(2517)]((i) => e0[t(1141)](e, i));
    const n = [...r[t(2663)]][t(1930)]((i, c) => {
      const u = t;
      return s[u(2076)][u(2308)](new p0(r, i, r[u(2474)], c));
    });
    return e0[t(1141)](e, n);
  }
  get [a(2671)]() {
    const x = a;
    return this[x(1575)][x(2076)];
  }
  [a(521)](x, t) {
    const r = a;
    return new h0({ ...this[r(1575)], minLength: { value: x, message: ne[r(2732)](t) } });
  }
  max(x, t) {
    const r = a;
    return new h0({ ...this[r(1575)], maxLength: { value: x, message: ne.toString(t) } });
  }
  [a(2710)](x, t) {
    const r = a;
    return new h0({ ...this[r(1575)], exactLength: { value: x, message: ne[r(2732)](t) } });
  }
  [a(1214)](x) {
    return this[a(521)](1, x);
  }
}
h0.create = (o, x) => {
  const t = a;
  return new h0({ type: o, minLength: null, maxLength: null, exactLength: null, typeName: pe[t(2196)], ...ve(x) });
};
function z0(o) {
  const x = a;
  if (o instanceof Ke) {
    const t = {};
    for (const r in o[x(1547)]) {
      const e = o[x(1547)][r];
      t[r] = S0[x(1602)](z0(e));
    }
    return new Ke({ ...o._def, shape: () => t });
  } else
    return o instanceof h0 ? new h0({ ...o._def, type: z0(o[x(2671)]) }) : o instanceof S0 ? S0[x(1602)](z0(o[x(2524)]())) : o instanceof D0 ? D0[x(1602)](z0(o.unwrap())) : o instanceof A0 ? A0[x(1602)](o[x(2286)][x(1930)]((t) => z0(t))) : o;
}
class Ke extends Ce {
  constructor() {
    const x = a;
    super(...arguments), this[x(2490)] = null, this[x(1599)] = this.passthrough, this[x(2689)] = this[x(919)];
  }
  [a(481)]() {
    const x = a;
    if (this[x(2490)] !== null) return this[x(2490)];
    const t = this[x(1575)][x(1547)](), r = Ne[x(2493)](t);
    return this[x(2490)] = { shape: t, keys: r }, this[x(2490)];
  }
  _parse(x) {
    const t = a;
    if (this[t(2981)](x) !== ae[t(1304)]) {
      const f = this._getOrReturnCtx(x);
      return ee(f, { code: Z.invalid_type, expected: ae[t(1304)], received: f.parsedType }), he;
    }
    const { status: e, ctx: s } = this._processInputParams(x), { shape: n, keys: i } = this._getCached(), c = [];
    if (!(this._def[t(1010)] instanceof C0 && this._def[t(2477)] === t(2384))) for (const f in s.data)
      !i[t(2978)](f) && c.push(f);
    const u = [];
    for (const f of i) {
      const l = n[f], d = s[t(2663)][f];
      u[t(3062)]({ key: { status: t(1122), value: f }, value: l[t(1585)](new p0(s, d, s[t(2474)], f)), alwaysSet: f in s[t(2663)] });
    }
    if (this[t(1575)][t(1010)] instanceof C0) {
      const f = this[t(1575)][t(2477)];
      if (f === t(1307)) for (const l of c)
        u[t(3062)]({ key: { status: t(1122), value: l }, value: { status: t(1122), value: s[t(2663)][l] } });
      else if (f === "strict") c.length > 0 && (ee(s, { code: Z[t(1825)], keys: c }), e[t(2329)]());
      else if (f !== t(2384)) throw new Error(t(1145));
    } else {
      const f = this._def[t(1010)];
      for (const l of c) {
        const d = s[t(2663)][l];
        u[t(3062)]({ key: { status: "valid", value: l }, value: f[t(1585)](new p0(s, d, s[t(2474)], l)), alwaysSet: l in s.data });
      }
    }
    return s.common[t(2416)] ? Promise[t(2457)]()[t(2517)](async () => {
      const f = t, l = [];
      for (const d of u) {
        const g = await d[f(480)], h = await d[f(2446)];
        l.push({ key: g, value: h, alwaysSet: d[f(2643)] });
      }
      return l;
    })[t(2517)]((f) => e0[t(3048)](e, f)) : e0[t(3048)](e, u);
  }
  get [a(1547)]() {
    return this._def.shape();
  }
  [a(1116)](x) {
    const t = a;
    return ne.errToObj, new Ke({ ...this[t(1575)], unknownKeys: t(1116), ...x !== void 0 ? { errorMap: (r, e) => {
      var i, c;
      const s = t, n = ((c = (i = this[s(1575)])[s(717)]) == null ? void 0 : c.call(i, r, e)[s(1044)]) ?? e[s(2272)];
      return r.code === "unrecognized_keys" ? { message: ne.errToObj(x)[s(1044)] ?? n } : { message: n };
    } } : {} });
  }
  [a(2384)]() {
    const x = a;
    return new Ke({ ...this[x(1575)], unknownKeys: x(2384) });
  }
  [a(1307)]() {
    const x = a;
    return new Ke({ ...this[x(1575)], unknownKeys: x(1307) });
  }
  [a(919)](x) {
    const t = a;
    return new Ke({ ...this[t(1575)], shape: () => ({ ...this[t(1575)].shape(), ...x }) });
  }
  [a(1779)](x) {
    const t = a;
    return new Ke({ unknownKeys: x[t(1575)][t(2477)], catchall: x[t(1575)][t(1010)], shape: () => ({ ...this._def[t(1547)](), ...x[t(1575)].shape() }), typeName: pe[t(2585)] });
  }
  [a(2569)](x, t) {
    return this[a(2689)]({ [x]: t });
  }
  [a(1010)](x) {
    const t = a;
    return new Ke({ ...this[t(1575)], catchall: x });
  }
  pick(x) {
    const t = a, r = {};
    for (const e of Ne.objectKeys(x))
      x[e] && this[t(1547)][e] && (r[e] = this[t(1547)][e]);
    return new Ke({ ...this[t(1575)], shape: () => r });
  }
  [a(1610)](x) {
    const t = a, r = {};
    for (const e of Ne[t(2493)](this[t(1547)]))
      !x[e] && (r[e] = this.shape[e]);
    return new Ke({ ...this._def, shape: () => r });
  }
  deepPartial() {
    return z0(this);
  }
  [a(537)](x) {
    const t = a, r = {};
    for (const e of Ne[t(2493)](this[t(1547)])) {
      const s = this[t(1547)][e];
      x && !x[e] ? r[e] = s : r[e] = s[t(2478)]();
    }
    return new Ke({ ...this[t(1575)], shape: () => r });
  }
  [a(2438)](x) {
    const t = a, r = {};
    for (const e of Ne[t(2493)](this[t(1547)]))
      if (x && !x[e]) r[e] = this[t(1547)][e];
      else {
        let n = this.shape[e];
        for (; n instanceof S0; )
          n = n._def[t(2813)];
        r[e] = n;
      }
    return new Ke({ ...this[t(1575)], shape: () => r });
  }
  keyof() {
    const x = a;
    return zs(Ne[x(2493)](this[x(1547)]));
  }
}
Ke[a(1602)] = (o, x) => {
  const t = a;
  return new Ke({ shape: () => o, unknownKeys: "strip", catchall: C0[t(1602)](), typeName: pe[t(2585)], ...ve(x) });
}, Ke.strictCreate = (o, x) => {
  const t = a;
  return new Ke({ shape: () => o, unknownKeys: "strict", catchall: C0[t(1602)](), typeName: pe.ZodObject, ...ve(x) });
}, Ke[a(1709)] = (o, x) => {
  const t = a;
  return new Ke({ shape: o, unknownKeys: t(2384), catchall: C0[t(1602)](), typeName: pe[t(2585)], ...ve(x) });
};
class wx extends Ce {
  [a(1585)](x) {
    const t = a, { ctx: r } = this[t(861)](x), e = this[t(1575)][t(2876)];
    function s(n) {
      const i = t;
      for (const u of n)
        if (u[i(676)][i(1227)] === "valid") return u[i(676)];
      for (const u of n)
        if (u[i(676)][i(1227)] === i(2329)) return r[i(1281)][i(908)][i(3062)](...u[i(2136)][i(1281)][i(908)]), u[i(676)];
      const c = n[i(1930)]((u) => new P0(u[i(2136)][i(1281)].issues));
      return ee(r, { code: Z.invalid_union, unionErrors: c }), he;
    }
    if (r[t(1281)][t(2416)]) return Promise.all(e[t(1930)](async (n) => {
      const i = t, c = { ...r, common: { ...r.common, issues: [] }, parent: null };
      return { result: await n[i(2909)]({ data: r[i(2663)], path: r[i(2474)], parent: c }), ctx: c };
    }))[t(2517)](s);
    {
      let n;
      const i = [];
      for (const u of e) {
        const f = { ...r, common: { ...r.common, issues: [] }, parent: null }, l = u[t(2308)]({ data: r[t(2663)], path: r.path, parent: f });
        if (l[t(1227)] === t(1122)) return l;
        l[t(1227)] === "dirty" && !n && (n = { result: l, ctx: f }), f[t(1281)][t(908)][t(2710)] && i[t(3062)](f[t(1281)][t(908)]);
      }
      if (n) return r[t(1281)][t(908)][t(3062)](...n[t(2136)][t(1281)][t(908)]), n[t(676)];
      const c = i[t(1930)]((u) => new P0(u));
      return ee(r, { code: Z.invalid_union, unionErrors: c }), he;
    }
  }
  get [a(2876)]() {
    const x = a;
    return this[x(1575)][x(2876)];
  }
}
wx[a(1602)] = (o, x) => {
  const t = a;
  return new wx({ options: o, typeName: pe[t(1695)], ...ve(x) });
};
const y0 = (o) => {
  const x = a;
  return o instanceof Kt ? y0(o[x(1425)]) : o instanceof N0 ? y0(o[x(2813)]()) : o instanceof Px ? [o[x(2446)]] : o instanceof O0 ? o[x(2876)] : o instanceof Gt ? Ne[x(1740)](o.enum) : o instanceof Ex ? y0(o[x(1575)][x(2813)]) : o instanceof Ht ? [void 0] : o instanceof Vt ? [null] : o instanceof S0 ? [void 0, ...y0(o[x(2524)]())] : o instanceof D0 ? [null, ...y0(o[x(2524)]())] : o instanceof Hs || o instanceof Cx ? y0(o[x(2524)]()) : o instanceof Rx ? y0(o[x(1575)].innerType) : [];
};
class na extends Ce {
  [a(1585)](x) {
    const t = a, { ctx: r } = this[t(861)](x);
    if (r.parsedType !== ae[t(1304)]) return ee(r, { code: Z[t(2421)], expected: ae[t(1304)], received: r[t(3156)] }), he;
    const e = this[t(2830)], s = r[t(2663)][e], n = this[t(2501)].get(s);
    return n ? r[t(1281)].async ? n[t(2909)]({ data: r[t(2663)], path: r[t(2474)], parent: r }) : n[t(2308)]({ data: r[t(2663)], path: r[t(2474)], parent: r }) : (ee(r, { code: Z[t(3221)], options: Array[t(2047)](this[t(2501)][t(2123)]()), path: [e] }), he);
  }
  get discriminator() {
    const x = a;
    return this[x(1575)][x(2830)];
  }
  get [a(2876)]() {
    const x = a;
    return this[x(1575)][x(2876)];
  }
  get [a(2501)]() {
    const x = a;
    return this._def[x(2501)];
  }
  static [a(1602)](x, t, r) {
    const e = a, s = /* @__PURE__ */ new Map();
    for (const n of t) {
      const i = y0(n[e(1547)][x]);
      if (!i[e(2710)]) throw new Error(e(584) + x + e(2306));
      for (const c of i) {
        if (s[e(2348)](c)) throw new Error(e(2331) + String(x) + e(2221) + String(c));
        s[e(780)](c, n);
      }
    }
    return new na({ typeName: pe[e(1046)], discriminator: x, options: t, optionsMap: s, ...ve(r) });
  }
}
function Zt(o, x) {
  const t = a, r = E0(o), e = E0(x);
  if (o === x) return { valid: !0, data: o };
  if (r === ae[t(1304)] && e === ae[t(1304)]) {
    const s = Ne.objectKeys(x), n = Ne[t(2493)](o)[t(2581)]((c) => s[t(2436)](c) !== -1), i = { ...o, ...x };
    for (const c of n) {
      const u = Zt(o[c], x[c]);
      if (!u.valid) return { valid: !1 };
      i[c] = u[t(2663)];
    }
    return { valid: !0, data: i };
  } else if (r === ae[t(529)] && e === ae[t(529)]) {
    if (o.length !== x[t(2710)]) return { valid: !1 };
    const s = [];
    for (let n = 0; n < o[t(2710)]; n++) {
      const i = o[n], c = x[n], u = Zt(i, c);
      if (!u[t(1122)]) return { valid: !1 };
      s[t(3062)](u.data);
    }
    return { valid: !0, data: s };
  } else return r === ae[t(1591)] && e === ae[t(1591)] && +o == +x ? { valid: !0, data: o } : { valid: !1 };
}
class Sx extends Ce {
  [a(1585)](x) {
    const t = a, { status: r, ctx: e } = this[t(861)](x), s = (n, i) => {
      const c = t;
      if (Fa(n) || Fa(i)) return he;
      const u = Zt(n[c(2446)], i[c(2446)]);
      return u.valid ? ((Ta(n) || Ta(i)) && r[c(2329)](), { status: r.value, value: u[c(2663)] }) : (ee(e, { code: Z[c(1998)] }), he);
    };
    return e[t(1281)][t(2416)] ? Promise[t(1096)]([this[t(1575)][t(2731)][t(2909)]({ data: e[t(2663)], path: e[t(2474)], parent: e }), this._def[t(800)]._parseAsync({ data: e.data, path: e[t(2474)], parent: e })])[t(2517)](([n, i]) => s(n, i)) : s(this[t(1575)][t(2731)]._parseSync({ data: e[t(2663)], path: e.path, parent: e }), this[t(1575)][t(800)][t(2308)]({ data: e[t(2663)], path: e.path, parent: e }));
  }
}
Sx[a(1602)] = (o, x, t) => {
  const r = a;
  return new Sx({ left: o, right: x, typeName: pe[r(2449)], ...ve(t) });
};
class A0 extends Ce {
  [a(1585)](x) {
    const t = a, { status: r, ctx: e } = this[t(861)](x);
    if (e[t(3156)] !== ae[t(529)]) return ee(e, { code: Z[t(2421)], expected: ae[t(529)], received: e[t(3156)] }), he;
    if (e[t(2663)].length < this._def.items[t(2710)]) return ee(e, { code: Z.too_small, minimum: this._def[t(2286)].length, inclusive: !0, exact: !1, type: "array" }), he;
    !this[t(1575)][t(2662)] && e[t(2663)].length > this[t(1575)][t(2286)].length && (ee(e, { code: Z.too_big, maximum: this[t(1575)][t(2286)].length, inclusive: !0, exact: !1, type: t(529) }), r[t(2329)]());
    const n = [...e[t(2663)]][t(1930)]((i, c) => {
      const u = t, f = this[u(1575)][u(2286)][c] || this[u(1575)][u(2662)];
      return f ? f._parse(new p0(e, i, e.path, c)) : null;
    })[t(2581)]((i) => !!i);
    return e[t(1281)][t(2416)] ? Promise[t(1096)](n)[t(2517)]((i) => e0[t(1141)](r, i)) : e0[t(1141)](r, n);
  }
  get [a(2286)]() {
    const x = a;
    return this[x(1575)][x(2286)];
  }
  rest(x) {
    const t = a;
    return new A0({ ...this[t(1575)], rest: x });
  }
}
A0.create = (o, x) => {
  const t = a;
  if (!Array[t(3255)](o)) throw new Error(t(2945));
  return new A0({ items: o, typeName: pe[t(3147)], rest: null, ...ve(x) });
};
class kx extends Ce {
  get keySchema() {
    return this[a(1575)].keyType;
  }
  get [a(3067)]() {
    const x = a;
    return this._def[x(2027)];
  }
  [a(1585)](x) {
    const t = a, { status: r, ctx: e } = this._processInputParams(x);
    if (e.parsedType !== ae.object) return ee(e, { code: Z[t(2421)], expected: ae.object, received: e.parsedType }), he;
    const s = [], n = this[t(1575)][t(2609)], i = this[t(1575)][t(2027)];
    for (const c in e[t(2663)])
      s.push({ key: n[t(1585)](new p0(e, c, e[t(2474)], c)), value: i[t(1585)](new p0(e, e[t(2663)][c], e.path, c)), alwaysSet: c in e[t(2663)] });
    return e.common[t(2416)] ? e0[t(3003)](r, s) : e0.mergeObjectSync(r, s);
  }
  get [a(2671)]() {
    const x = a;
    return this[x(1575)][x(2027)];
  }
  static [a(1602)](x, t, r) {
    const e = a;
    return t instanceof Ce ? new kx({ keyType: x, valueType: t, typeName: pe[e(1131)], ...ve(r) }) : new kx({ keyType: w0[e(1602)](), valueType: x, typeName: pe[e(1131)], ...ve(t) });
  }
}
class Aa extends Ce {
  get [a(1851)]() {
    const x = a;
    return this[x(1575)][x(2609)];
  }
  get [a(3067)]() {
    const x = a;
    return this[x(1575)][x(2027)];
  }
  _parse(x) {
    const t = a, { status: r, ctx: e } = this[t(861)](x);
    if (e[t(3156)] !== ae.map) return ee(e, { code: Z[t(2421)], expected: ae[t(1930)], received: e[t(3156)] }), he;
    const s = this[t(1575)][t(2609)], n = this[t(1575)][t(2027)], i = [...e[t(2663)][t(2634)]()][t(1930)](([c, u], f) => {
      const l = t;
      return { key: s._parse(new p0(e, c, e[l(2474)], [f, l(480)])), value: n[l(1585)](new p0(e, u, e[l(2474)], [f, "value"])) };
    });
    if (e[t(1281)].async) {
      const c = /* @__PURE__ */ new Map();
      return Promise[t(2457)]()[t(2517)](async () => {
        const u = t;
        for (const f of i) {
          const l = await f.key, d = await f[u(2446)];
          if (l[u(1227)] === u(896) || d[u(1227)] === u(896)) return he;
          (l.status === u(2329) || d[u(1227)] === u(2329)) && r[u(2329)](), c[u(780)](l.value, d.value);
        }
        return { status: r[u(2446)], value: c };
      });
    } else {
      const c = /* @__PURE__ */ new Map();
      for (const u of i) {
        const f = u[t(480)], l = u[t(2446)];
        if (f[t(1227)] === t(896) || l.status === "aborted") return he;
        (f[t(1227)] === "dirty" || l[t(1227)] === t(2329)) && r[t(2329)](), c[t(780)](f[t(2446)], l[t(2446)]);
      }
      return { status: r[t(2446)], value: c };
    }
  }
}
Aa.create = (o, x, t) => {
  const r = a;
  return new Aa({ valueType: x, keyType: o, typeName: pe[r(3163)], ...ve(t) });
};
class sx extends Ce {
  [a(1585)](x) {
    const t = a, { status: r, ctx: e } = this[t(861)](x);
    if (e[t(3156)] !== ae[t(780)]) return ee(e, { code: Z.invalid_type, expected: ae[t(780)], received: e[t(3156)] }), he;
    const s = this[t(1575)];
    s[t(3259)] !== null && e[t(2663)].size < s[t(3259)][t(2446)] && (ee(e, { code: Z[t(2724)], minimum: s[t(3259)][t(2446)], type: t(780), inclusive: !0, exact: !1, message: s[t(3259)][t(1044)] }), r[t(2329)]()), s[t(1272)] !== null && e[t(2663)].size > s[t(1272)][t(2446)] && (ee(e, { code: Z[t(1305)], maximum: s.maxSize[t(2446)], type: t(780), inclusive: !0, exact: !1, message: s[t(1272)].message }), r[t(2329)]());
    const n = this._def.valueType;
    function i(u) {
      const f = t, l = /* @__PURE__ */ new Set();
      for (const d of u) {
        if (d.status === f(896)) return he;
        d[f(1227)] === f(2329) && r[f(2329)](), l.add(d[f(2446)]);
      }
      return { status: r[f(2446)], value: l };
    }
    const c = [...e.data[t(3237)]()][t(1930)]((u, f) => n._parse(new p0(e, u, e[t(2474)], f)));
    return e[t(1281)].async ? Promise[t(1096)](c)[t(2517)]((u) => i(u)) : i(c);
  }
  min(x, t) {
    const r = a;
    return new sx({ ...this._def, minSize: { value: x, message: ne[r(2732)](t) } });
  }
  [a(753)](x, t) {
    const r = a;
    return new sx({ ...this._def, maxSize: { value: x, message: ne[r(2732)](t) } });
  }
  [a(846)](x, t) {
    const r = a;
    return this[r(521)](x, t)[r(753)](x, t);
  }
  [a(1214)](x) {
    return this[a(521)](1, x);
  }
}
sx[a(1602)] = (o, x) => {
  const t = a;
  return new sx({ valueType: o, minSize: null, maxSize: null, typeName: pe[t(3281)], ...ve(x) });
};
class Kt extends Ce {
  get [a(1425)]() {
    const x = a;
    return this[x(1575)][x(1177)]();
  }
  [a(1585)](x) {
    const t = a, { ctx: r } = this._processInputParams(x);
    return this[t(1575)][t(1177)]()[t(1585)]({ data: r.data, path: r[t(2474)], parent: r });
  }
}
Kt[a(1602)] = (o, x) => {
  const t = a;
  return new Kt({ getter: o, typeName: pe[t(2596)], ...ve(x) });
};
class Px extends Ce {
  [a(1585)](x) {
    const t = a;
    if (x[t(2663)] !== this._def[t(2446)]) {
      const r = this._getOrReturnCtx(x);
      return ee(r, { received: r.data, code: Z.invalid_literal, expected: this[t(1575)][t(2446)] }), he;
    }
    return { status: t(1122), value: x[t(2663)] };
  }
  get [a(2446)]() {
    const x = a;
    return this[x(1575)][x(2446)];
  }
}
Px[a(1602)] = (o, x) => {
  const t = a;
  return new Px({ value: o, typeName: pe[t(2034)], ...ve(x) });
};
function zs(o, x) {
  const t = a;
  return new O0({ values: o, typeName: pe[t(804)], ...ve(x) });
}
class O0 extends Ce {
  [a(1585)](x) {
    const t = a;
    if (typeof x[t(2663)] !== t(1361)) {
      const r = this[t(3148)](x), e = this[t(1575)].values;
      return ee(r, { expected: Ne.joinValues(e), received: r[t(3156)], code: Z[t(2421)] }), he;
    }
    if (!this._cache && (this[t(811)] = new Set(this[t(1575)][t(3237)])), !this._cache[t(2348)](x.data)) {
      const r = this[t(3148)](x), e = this[t(1575)].values;
      return ee(r, { received: r[t(2663)], code: Z[t(1065)], options: e }), he;
    }
    return a0(x[t(2663)]);
  }
  get [a(2876)]() {
    const x = a;
    return this[x(1575)][x(3237)];
  }
  get [a(2218)]() {
    const x = a, t = {};
    for (const r of this[x(1575)][x(3237)])
      t[r] = r;
    return t;
  }
  get [a(602)]() {
    const x = a, t = {};
    for (const r of this[x(1575)].values)
      t[r] = r;
    return t;
  }
  get Enum() {
    const x = a, t = {};
    for (const r of this[x(1575)][x(3237)])
      t[r] = r;
    return t;
  }
  [a(1718)](x, t = this[a(1575)]) {
    return O0.create(x, { ...this._def, ...t });
  }
  exclude(x, t = this._def) {
    const r = a;
    return O0.create(this[r(2876)][r(2581)]((e) => !x[r(2978)](e)), { ...this[r(1575)], ...t });
  }
}
O0[a(1602)] = zs;
class Gt extends Ce {
  _parse(x) {
    const t = a, r = Ne[t(1256)](this[t(1575)][t(3237)]), e = this[t(3148)](x);
    if (e[t(3156)] !== ae[t(1361)] && e[t(3156)] !== ae[t(2665)]) {
      const s = Ne[t(1740)](r);
      return ee(e, { expected: Ne.joinValues(s), received: e[t(3156)], code: Z[t(2421)] }), he;
    }
    if (!this._cache && (this[t(811)] = new Set(Ne.getValidEnumValues(this[t(1575)].values))), !this[t(811)][t(2348)](x.data)) {
      const s = Ne[t(1740)](r);
      return ee(e, { received: e[t(2663)], code: Z[t(1065)], options: s }), he;
    }
    return a0(x[t(2663)]);
  }
  get [a(2218)]() {
    const x = a;
    return this[x(1575)][x(3237)];
  }
}
Gt.create = (o, x) => {
  const t = a;
  return new Gt({ values: o, typeName: pe[t(2966)], ...ve(x) });
};
class Ix extends Ce {
  [a(2524)]() {
    const x = a;
    return this[x(1575)][x(2076)];
  }
  [a(1585)](x) {
    const t = a, { ctx: r } = this[t(861)](x);
    if (r.parsedType !== ae[t(810)] && r[t(1281)][t(2416)] === !1) return ee(r, { code: Z[t(2421)], expected: ae[t(810)], received: r.parsedType }), he;
    const e = r[t(3156)] === ae.promise ? r[t(2663)] : Promise[t(2457)](r[t(2663)]);
    return a0(e[t(2517)]((s) => {
      const n = t;
      return this[n(1575)].type[n(2237)](s, { path: r[n(2474)], errorMap: r[n(1281)][n(2896)] });
    }));
  }
}
Ix[a(1602)] = (o, x) => {
  const t = a;
  return new Ix({ type: o, typeName: pe[t(835)], ...ve(x) });
};
class N0 extends Ce {
  [a(2813)]() {
    const x = a;
    return this[x(1575)][x(1425)];
  }
  [a(3212)]() {
    const x = a;
    return this._def[x(1425)][x(1575)].typeName === pe[x(1621)] ? this[x(1575)][x(1425)].sourceType() : this[x(1575)][x(1425)];
  }
  _parse(x) {
    const t = a, { status: r, ctx: e } = this[t(861)](x), s = this[t(1575)].effect || null, n = { addIssue: (i) => {
      const c = t;
      ee(e, i), i[c(2372)] ? r.abort() : r[c(2329)]();
    }, get path() {
      return e[t(2474)];
    } };
    if (n[t(1910)] = n[t(1910)].bind(n), s[t(2076)] === "preprocess") {
      const i = s[t(2450)](e[t(2663)], n);
      if (e[t(1281)][t(2416)]) return Promise[t(2457)](i).then(async (c) => {
        const u = t;
        if (r.value === u(896)) return he;
        const f = await this[u(1575)][u(1425)][u(2909)]({ data: c, path: e[u(2474)], parent: e });
        return f[u(1227)] === u(896) ? he : f.status === u(2329) ? X0(f[u(2446)]) : r[u(2446)] === u(2329) ? X0(f.value) : f;
      });
      {
        if (r[t(2446)] === "aborted") return he;
        const c = this[t(1575)].schema[t(2308)]({ data: i, path: e[t(2474)], parent: e });
        return c.status === t(896) ? he : c[t(1227)] === "dirty" ? X0(c[t(2446)]) : r[t(2446)] === "dirty" ? X0(c.value) : c;
      }
    }
    if (s[t(2076)] === t(2100)) {
      const i = (c) => {
        const u = t, f = s.refinement(c, n);
        if (e[u(1281)][u(2416)]) return Promise[u(2457)](f);
        if (f instanceof Promise) throw new Error(u(2571));
        return c;
      };
      if (e.common.async === !1) {
        const c = this._def[t(1425)][t(2308)]({ data: e[t(2663)], path: e[t(2474)], parent: e });
        return c.status === "aborted" ? he : (c[t(1227)] === "dirty" && r[t(2329)](), i(c.value), { status: r[t(2446)], value: c[t(2446)] });
      } else return this[t(1575)].schema[t(2909)]({ data: e[t(2663)], path: e[t(2474)], parent: e })[t(2517)]((c) => {
        const u = t;
        return c.status === u(896) ? he : (c[u(1227)] === "dirty" && r[u(2329)](), i(c.value)[u(2517)](() => {
          const f = u;
          return { status: r[f(2446)], value: c[f(2446)] };
        }));
      });
    }
    if (s[t(2076)] === t(2450))
      if (e[t(1281)][t(2416)] === !1) {
        const i = this[t(1575)][t(1425)]._parseSync({ data: e[t(2663)], path: e[t(2474)], parent: e });
        if (!V0(i)) return he;
        const c = s[t(2450)](i[t(2446)], n);
        if (c instanceof Promise) throw new Error(t(1674));
        return { status: r[t(2446)], value: c };
      } else return this[t(1575)][t(1425)][t(2909)]({ data: e[t(2663)], path: e.path, parent: e })[t(2517)]((i) => {
        const c = t;
        return V0(i) ? Promise[c(2457)](s[c(2450)](i[c(2446)], n))[c(2517)]((u) => ({ status: r[c(2446)], value: u })) : he;
      });
    Ne[t(1034)](s);
  }
}
N0[a(1602)] = (o, x, t) => {
  const r = a;
  return new N0({ schema: o, typeName: pe[r(1621)], effect: x, ...ve(t) });
}, N0[a(1716)] = (o, x, t) => {
  const r = a;
  return new N0({ schema: x, effect: { type: r(1318), transform: o }, typeName: pe[r(1621)], ...ve(t) });
};
class S0 extends Ce {
  [a(1585)](x) {
    const t = a;
    return this[t(2981)](x) === ae[t(993)] ? a0(void 0) : this[t(1575)].innerType[t(1585)](x);
  }
  [a(2524)]() {
    const x = a;
    return this[x(1575)][x(2813)];
  }
}
S0[a(1602)] = (o, x) => {
  const t = a;
  return new S0({ innerType: o, typeName: pe[t(1954)], ...ve(x) });
};
class D0 extends Ce {
  [a(1585)](x) {
    const t = a;
    return this[t(2981)](x) === ae[t(1959)] ? a0(null) : this[t(1575)][t(2813)][t(1585)](x);
  }
  [a(2524)]() {
    const x = a;
    return this[x(1575)][x(2813)];
  }
}
D0[a(1602)] = (o, x) => {
  const t = a;
  return new D0({ innerType: o, typeName: pe[t(847)], ...ve(x) });
};
class Ex extends Ce {
  [a(1585)](x) {
    const t = a, { ctx: r } = this._processInputParams(x);
    let e = r.data;
    return r.parsedType === ae[t(993)] && (e = this[t(1575)][t(2074)]()), this[t(1575)][t(2813)][t(1585)]({ data: e, path: r.path, parent: r });
  }
  [a(2341)]() {
    return this[a(1575)].innerType;
  }
}
Ex[a(1602)] = (o, x) => {
  const t = a;
  return new Ex({ innerType: o, typeName: pe[t(3051)], defaultValue: typeof x[t(2485)] === t(1936) ? x[t(2485)] : () => x[t(2485)], ...ve(x) });
};
class Rx extends Ce {
  [a(1585)](x) {
    const t = a, { ctx: r } = this[t(861)](x), e = { ...r, common: { ...r.common, issues: [] } }, s = this._def[t(2813)][t(1585)]({ data: e[t(2663)], path: e[t(2474)], parent: { ...e } });
    return gx(s) ? s.then((n) => {
      const i = t;
      return { status: i(1122), value: n[i(1227)] === i(1122) ? n[i(2446)] : this[i(1575)][i(2220)]({ get error() {
        const c = i;
        return new P0(e[c(1281)][c(908)]);
      }, input: e[i(2663)] }) };
    }) : { status: t(1122), value: s[t(1227)] === "valid" ? s.value : this[t(1575)][t(2220)]({ get error() {
      const n = t;
      return new P0(e.common[n(908)]);
    }, input: e[t(2663)] }) };
  }
  removeCatch() {
    const x = a;
    return this[x(1575)][x(2813)];
  }
}
Rx[a(1602)] = (o, x) => {
  const t = a;
  return new Rx({ innerType: o, typeName: pe[t(2521)], catchValue: typeof x.catch === t(1936) ? x.catch : () => x[t(742)], ...ve(x) });
};
class Oa extends Ce {
  [a(1585)](x) {
    const t = a;
    if (this._getType(x) !== ae[t(1220)]) {
      const e = this[t(3148)](x);
      return ee(e, { code: Z[t(2421)], expected: ae[t(1220)], received: e[t(3156)] }), he;
    }
    return { status: t(1122), value: x[t(2663)] };
  }
}
Oa.create = (o) => {
  const x = a;
  return new Oa({ typeName: pe[x(3130)], ...ve(o) });
};
class Hs extends Ce {
  [a(1585)](x) {
    const t = a, { ctx: r } = this[t(861)](x), e = r[t(2663)];
    return this[t(1575)][t(2076)][t(1585)]({ data: e, path: r[t(2474)], parent: r });
  }
  [a(2524)]() {
    const x = a;
    return this[x(1575)][x(2076)];
  }
}
class oa extends Ce {
  [a(1585)](x) {
    const t = a, { status: r, ctx: e } = this[t(861)](x);
    if (e[t(1281)][t(2416)])
      return (async () => {
        const n = t, i = await this[n(1575)].in[n(2909)]({ data: e.data, path: e[n(2474)], parent: e });
        return i[n(1227)] === "aborted" ? he : i[n(1227)] === n(2329) ? (r[n(2329)](), X0(i[n(2446)])) : this[n(1575)][n(2328)][n(2909)]({ data: i[n(2446)], path: e[n(2474)], parent: e });
      })();
    {
      const s = this[t(1575)].in[t(2308)]({ data: e.data, path: e[t(2474)], parent: e });
      return s[t(1227)] === t(896) ? he : s[t(1227)] === "dirty" ? (r.dirty(), { status: t(2329), value: s[t(2446)] }) : this[t(1575)][t(2328)]._parseSync({ data: s[t(2446)], path: e[t(2474)], parent: e });
    }
  }
  static create(x, t) {
    return new oa({ in: x, out: t, typeName: pe.ZodPipeline });
  }
}
class Cx extends Ce {
  [a(1585)](x) {
    const t = a, r = this[t(1575)][t(2813)][t(1585)](x), e = (s) => {
      const n = t;
      return V0(s) && (s[n(2446)] = Object[n(1100)](s[n(2446)])), s;
    };
    return gx(r) ? r[t(2517)]((s) => e(s)) : e(r);
  }
  unwrap() {
    return this[a(1575)].innerType;
  }
}
Cx[a(1602)] = (o, x) => {
  const t = a;
  return new Cx({ innerType: o, typeName: pe[t(1003)], ...ve(x) });
};
function Da(o, x) {
  const t = a, r = typeof o === t(1936) ? o(x) : typeof o == "string" ? { message: o } : o;
  return typeof r === t(1361) ? { message: r } : r;
}
function po(o, x = {}, t) {
  const r = a;
  return o ? rx.create()[r(957)]((e, s) => {
    const n = r, i = o(e);
    if (i instanceof Promise) return i[n(2517)]((c) => {
      const u = n;
      if (!c) {
        const f = Da(x, e), l = f.fatal ?? t ?? !0;
        s.addIssue({ code: u(1618), ...f, fatal: l });
      }
    });
    if (!i) {
      const c = Da(x, e), u = c[n(2372)] ?? t ?? !0;
      s[n(1910)]({ code: "custom", ...c, fatal: u });
    }
  }) : rx.create();
}
var pe;
(function(o) {
  const x = a;
  o[x(1451)] = x(1451), o[x(696)] = "ZodNumber", o.ZodNaN = x(3130), o[x(2268)] = "ZodBigInt", o[x(2084)] = x(2084), o[x(2010)] = x(2010), o[x(2021)] = x(2021), o[x(2720)] = x(2720), o[x(577)] = x(577), o[x(1985)] = x(1985), o.ZodUnknown = x(1730), o[x(1657)] = x(1657), o[x(2842)] = "ZodVoid", o[x(2196)] = "ZodArray", o[x(2585)] = "ZodObject", o[x(1695)] = x(1695), o[x(1046)] = x(1046), o[x(2449)] = x(2449), o[x(3147)] = x(3147), o.ZodRecord = x(1131), o[x(3163)] = "ZodMap", o.ZodSet = "ZodSet", o[x(1854)] = x(1854), o[x(2596)] = x(2596), o.ZodLiteral = "ZodLiteral", o[x(804)] = "ZodEnum", o[x(1621)] = x(1621), o.ZodNativeEnum = x(2966), o[x(1954)] = x(1954), o[x(847)] = x(847), o[x(3051)] = x(3051), o[x(2521)] = x(2521), o.ZodPromise = x(835), o[x(1020)] = x(1020), o[x(1495)] = x(1495), o.ZodReadonly = x(1003);
})(pe || (pe = {}));
const zx = (o, x = { message: a(815) + o.name }) => po((t) => t instanceof o, x), b = w0.create, W = B0[a(1602)], Q = zt.create, ye = rx[a(1602)], k0 = Bt[a(1602)];
C0[a(1602)];
const J0 = Wt[a(1602)], we = h0[a(1602)], S = Ke.create, Ve = wx.create, Vs = na[a(1602)];
Sx[a(1602)], A0[a(1602)];
const qe = kx[a(1602)], xe = Px[a(1602)], Pe = O0[a(1602)];
Ix.create;
const B = S0[a(1602)];
D0[a(1602)];
var rs, ss;
class mo {
  constructor(x, t) {
    me(this, ss);
    me(this, rs);
    const r = a;
    this[r(2976)] = x, this[r(1891)] = t;
  }
  get [(ss = a(2976), rs = a(1891), a(872))]() {
    const x = a, t = this[x(2976)][x(1414)](this[x(1891)]);
    if (!t) throw new Error(x(3175) + this.nodeId);
    return t;
  }
  get [a(2848)]() {
    const x = a, t = this[x(2976)][x(1857)]().getNode(this.nodeId);
    if (!t) throw new Error(x(2645) + this.nodeId);
    return new Proxy({}, { get: (e, s) => {
      const n = x;
      if (typeof s != "string") return;
      const i = t[n(2848)][s], c = s[n(760)](n(2818));
      if (!i && !c) throw new Error("Action " + s + n(2251) + this.nodeId);
      return async (u, f) => {
        const l = n, d = this.getConnectionInfo();
        if (!d) throw new Error(l(2356) + this[l(1891)]);
        const { transport: g, path: h } = d, m = this[l(2976)][l(1199)]();
        if (!(i != null && i[l(2932)])) {
          const k = ye();
          let P;
          if (h[l(2710)] === 2) P = await g[l(494)]({ method: l(1750), params: { action: s, data: u, sourceNodeId: m } }, k);
          else try {
            P = await g.request({ method: l(1750), params: { action: l(715), data: { targetNodeId: this[l(1891)], targetAction: s, targetData: u, forwardPath: h[l(1387)](1) }, sourceNodeId: m } }, k);
          } catch (T) {
            throw console[l(490)](l(2307) + s + ":", T), console.error({ targetNodeId: this[l(1891)], targetAction: s, targetData: u, forwardPath: h.slice(1) }), T;
          }
          return P;
        }
        let v;
        return h[l(2710)] === 2 ? v = g.streamRequest({ action: s, data: u, sourceNodeId: m }, i.responseSchema, f) : v = g[l(1807)]({ action: l(715), data: { targetNodeId: this[l(1891)], targetAction: s, targetData: u, forwardPath: h[l(1387)](1) }, sourceNodeId: m }, i[l(992)], f), v;
      };
    } });
  }
  [a(1273)]() {
    return this[a(2976)].getTransportToNode(this.nodeId);
  }
}
var ns, os, is;
class Bs {
  constructor(x) {
    me(this, is);
    me(this, os);
    me(this, ns);
    const t = a;
    this[t(2976)] = x, this[t(3220)] = x[t(3220)], this[t(484)] = x[t(484)];
  }
  [(is = a(2976), os = a(3220), ns = a(484), a(486))]({ store: x, storeName: t, onStateUpdate: r, requestInitialState: e }) {
    const s = a;
    this[s(484)][s(1424)]("store:update:" + t, (n) => {
      const i = s;
      try {
        n.sourceNodeId !== this[i(2976)].getCurrentNodeId() && r(n[i(2853)]);
      } catch (c) {
        console[i(490)](i(1306) + t + ":", c);
      }
    });
  }
  [a(813)]({ store: x, storeName: t, sendStateUpdate: r, onInitialStateRequested: e }) {
    const s = a, n = this[s(2976)][s(1199)](), i = async (f, l = !1) => {
      const d = s;
      if (this[d(697)]()) try {
        await this.broadcastManager.broadcast(d(2779) + t, { storeName: t, sourceNodeId: n, stateUpdate: f, isInitialState: l });
      } catch (h) {
        console[d(490)](d(1302) + t + ":", h);
      }
    }, c = x[s(1952)]((f) => {
      i(f, !1);
    });
    e(() => {
      i(x[s(1079)](), !0);
    });
    const u = s(1413) + t;
    return this.actionManager[s(1474)](u, async () => {
      const f = x.getState();
      return await i(f, !0), { success: !0 };
    }), this.broadcastManager[s(1424)](s(608), async (f) => {
      const l = s;
      try {
        (f[l(823)] === n || f[l(3235)] === n) && await i(x.getState(), !0);
      } catch {
      }
    }), () => {
      var l;
      const f = s;
      c(), (l = this.actionManager[f(603)]) == null || l.delete(u);
    };
  }
  isTransportReady() {
    var t;
    const x = a;
    try {
      const r = this[x(2976)][x(1255)], e = r && r.getConnectionCount() > 0, s = ((t = this.broadcastManager[x(2080)]) == null ? void 0 : t[x(846)]) > 0;
      return e || s;
    } catch {
      return !!this.broadcastManager;
    }
  }
  async [a(1823)](x, t) {
    const r = a, e = this.graphInstance[r(1199)]();
    if (this[r(697)]()) try {
      await this[r(484)][r(1829)](r(2779) + t, { storeName: t, sourceNodeId: e, stateUpdate: x[r(1079)](), isInitialState: !0 });
    } catch {
    }
  }
}
function bo({ graphInstance: o, store: x, name: t }) {
  const r = a, e = new Bs(o), s = (i) => {
    const c = K, u = x[c(1079)](), f = { ...u, ...i };
    x[c(738)](f);
  }, n = async () => {
    const i = K, c = i(1413) + t;
    try {
      const u = o.getNode(t);
      u && u[i(2848)] && u[i(2848)][c] && await u[i(2848)][c]();
    } catch (u) {
      console.warn(i(1039) + t + ":", u);
    }
  };
  e[r(486)]({ store: x, storeName: t, onStateUpdate: s, requestInitialState: n });
}
function go({ graphInstance: o, store: x, name: t }) {
  const r = a, e = new Bs(o), s = async (i) => {
  }, n = (i) => {
  };
  return e[r(813)]({ store: x, storeName: t, sendStateUpdate: s, onInitialStateRequested: n });
}
var cs, us, fs;
class yo {
  constructor(x) {
    me(this, "broadcastHandlers", /* @__PURE__ */ new Map());
    me(this, fs, /* @__PURE__ */ new Map());
    me(this, us, /* @__PURE__ */ new Set());
    me(this, cs);
    const t = a;
    this[t(866)] = x;
  }
  [(fs = a(2269), us = a(2785), cs = a(866), a(2036))](x) {
    return (t) => {
      const r = K;
      if (t && t[r(2145)] === this.currentNodeId) return;
      const e = this[r(2529)][r(674)](x);
      if (e) {
        const { __origin: s, forwarded: n, ...i } = t || {};
        for (const c of e)
          try {
            c(i);
          } catch (u) {
            console.error(r(3276) + x + ":", u);
          }
      }
      !t[r(1457)] && this.forwardBroadcast(x, t);
    };
  }
  async forwardBroadcast(x, t) {
    const r = a;
    try {
      const e = { ...t, forwarded: !0 }, s = [...Array[r(2047)](this[r(2269)][r(3237)]()), ...Array.from(this[r(2785)])], n = s[r(1930)]((i) => {
        const c = r;
        return i[c(2487)]({ method: c(3183), params: { messageType: x, message: e } })[c(742)]((u) => {
          console.error(c(1286) + x + ":", u);
        });
      });
      await Promise[r(1096)](n);
    } catch (e) {
      console[r(490)](r(1721), e);
    }
  }
  [a(1424)](x, t) {
    const r = a;
    !this.broadcastHandlers[r(2348)](x) && this[r(2529)][r(780)](x, /* @__PURE__ */ new Set()), this[r(2529)][r(674)](x).add(t);
  }
  setupTransportHandlers(x) {
    this[a(888)](x);
  }
  [a(888)](x) {
    const t = a, r = S({ method: xe(t(3183)), params: S({ messageType: b(), message: ye() }) });
    x[t(1529)](r, async (e) => {
      const s = t, n = e[s(1656)].messageType;
      this.createGlobalDispatcherForType(n)(e[s(1656)][s(1044)]);
    });
  }
  [a(2511)](x, t) {
    const r = a;
    this.transports.set(x, t), this[r(1023)](t);
  }
  [a(3004)](x) {
    const t = a;
    this.transports[t(875)](x);
  }
  async [a(1829)](x, t) {
    const r = a, e = [...Array[r(2047)](this[r(2269)][r(3237)]()), ...Array.from(this[r(2785)])], s = e[r(1930)]((n) => {
      const i = r;
      return n.notification({ method: i(3183), params: { messageType: x, message: t } });
    });
    await Promise[r(1096)](s);
  }
  mountTo(x) {
    const t = a;
    this[t(2785)][t(1580)](x), this[t(1023)](x);
  }
  [a(822)]() {
    const x = a;
    return Array.from(this[x(2529)][x(2123)]());
  }
  [a(2376)]() {
    const x = a;
    this[x(2529)][x(2376)](), this[x(2269)].clear(), this.mountedTransports.clear();
  }
}
var ls, ds, hs, ps;
class vo {
  constructor(x, t, r) {
    me(this, ps, /* @__PURE__ */ new Map());
    me(this, hs);
    me(this, ds);
    me(this, ls);
    const e = a;
    this[e(1686)] = x, this[e(866)] = t, this[e(1538)] = r;
  }
  [(ps = a(603), hs = a(1686), ds = a(866), ls = a(1538), a(2922))](x, t) {
    const r = a, e = this[r(1686)][r(1316)](this[r(866)]);
    if (!e) throw new Error(r(2645) + this.currentNodeId);
    const s = e[r(2848)][x];
    if (!s) throw new Error(r(2539) + String(x) + " not found for node " + this[r(866)]);
    this[r(1294)](x, t, s), this.actionHandlers[r(780)](x, t);
  }
  [a(1294)](x, t, r) {
    r.stream;
  }
  [a(1474)](x, t) {
    this[a(603)].set(x, t);
  }
  [a(2983)](x) {
    const t = a;
    for (const [r, e] of this[t(603)]) {
      const s = this[t(1686)][t(1316)](this[t(866)]), n = s == null ? void 0 : s.actions[r];
      if (r[t(760)](t(2818)) ? !1 : (n == null ? void 0 : n[t(2932)]) === !0) {
        const u = S({ action: xe(r) });
        x[t(3139)](u, async function* (f, l, d) {
          const g = t, h = f[g(2663)] || f, m = e(h, l, d);
          if (m && typeof m === g(1304) && Symbol[g(583)] in m) for await (const v of m)
            yield v === void 0 ? {} : v;
          else {
            const v = await m;
            yield v === void 0 ? {} : v;
          }
        });
      }
    }
    this[t(943)](x), this[t(665)](x);
  }
  registerProxyForwardHandler(x) {
    const t = a, r = S({ action: xe("__proxy_forward") }), e = this;
    x[t(3139)](r, async function* (s, n, i) {
      const c = t, u = s[c(2663)] || s, { targetNodeId: f, targetAction: l, targetData: d, forwardPath: g } = u;
      if (!g || g[c(2710)] === 0) throw new Error(c(2939));
      const h = g[0], m = g[c(1387)](1);
      if (m[c(2710)] === 0 && h === e[c(866)]) {
        const v = e[c(603)][c(674)](l);
        if (!v) throw new Error(c(2539) + l + c(2185) + e[c(866)]);
        const k = v(d, n, i);
        if (k && typeof k === c(1304) && Symbol[c(583)] in k) for await (const P of k)
          yield P === void 0 ? {} : P;
        else {
          const P = await k;
          yield P === void 0 ? {} : P;
        }
        return;
      }
      if (h === e.currentNodeId && m.length > 0) {
        const v = m[0], k = e[c(1538)](v);
        if (k) {
          const P = await k[c(1807)]({ action: c(715), data: { targetNodeId: f, targetAction: l, targetData: d, forwardPath: m } }, S({}), i);
          for await (const T of P)
            yield T === void 0 ? {} : T;
          return;
        }
        throw new Error(c(2261) + v + c(791));
      }
      throw new Error(c(3160) + e[c(866)] + c(2452) + g);
    });
  }
  [a(2938)]() {
    const x = a;
    return Array[x(2047)](this[x(603)][x(2123)]());
  }
  [a(2412)](x) {
    const t = a;
    return this[t(603)][t(2348)](x);
  }
  getHandler(x) {
    return this[a(603)].get(x);
  }
  [a(2376)]() {
    const x = a;
    this[x(603)][x(2376)]();
  }
  [a(2888)](x, t, r) {
  }
  [a(665)](x) {
    const t = a, r = S({ method: xe(t(1750)), params: S({ action: b(), data: ye()[t(2478)]() }) }), e = this;
    x[t(1219)](r, async (s, n) => {
      const i = t, { action: c, data: u } = s[i(1656)];
      if (c === "__proxy_forward") return await e.handleDirectProxyForward(u, n);
      const f = e[i(603)][i(674)](c);
      if (!f) throw new Error(i(2539) + c + " not found on node " + e[i(866)]);
      const l = f(u, n), d = await l;
      return d === void 0 ? {} : d;
    });
  }
  async [a(3141)](x, t) {
    const r = a, { targetNodeId: e, targetAction: s, targetData: n, forwardPath: i } = x;
    if (!i || i[r(2710)] === 0) throw new Error(r(2939));
    const c = i[0], u = i.slice(1);
    if (u[r(2710)] === 0 && c === this[r(866)]) {
      const f = this[r(603)][r(674)](s);
      if (!f) throw new Error(r(2539) + s + r(2185) + this[r(866)]);
      const l = f(n, t), d = await l;
      return d === void 0 ? {} : d;
    }
    if (c === this[r(866)] && u[r(2710)] > 0) {
      const f = u[0], l = this[r(1538)](f);
      if (l) return await l[r(494)]({ method: r(1750), params: { action: r(715), data: { targetNodeId: e, targetAction: s, targetData: n, forwardPath: u } } }, ye());
      throw new Error(r(2261) + f + r(791));
    }
    throw new Error(r(3160) + this[r(866)] + " not in path " + i);
  }
}
var ms;
class wo {
  constructor(x, t) {
    me(this, "definition");
    me(this, "currentNodeId");
    me(this, ms, /* @__PURE__ */ new Set());
    const r = a;
    this[r(1686)] = x, this[r(866)] = t;
  }
  markConnected(x) {
    this[a(968)].add(x);
  }
  [(ms = a(968), a(2743))](x) {
    this[a(968)].delete(x);
  }
  [a(2324)](x) {
    const t = a;
    return this[t(968)][t(2348)](x);
  }
  findPath(x, t) {
    const r = a;
    if (x === t) return [x];
    const e = /* @__PURE__ */ new Set(), s = [{ nodeId: x, path: [x] }];
    for (; s.length > 0; ) {
      const { nodeId: n, path: i } = s.shift();
      if (e[r(2348)](n)) continue;
      e[r(1580)](n);
      const c = this[r(1686)][r(710)](n);
      for (const u of c) {
        if (u === t) return [...i, u];
        !e[r(2348)](u) && s[r(3062)]({ nodeId: u, path: [...i, u] });
      }
    }
  }
  [a(719)]() {
    const x = a;
    return Array[x(2047)](this[x(968)]);
  }
  getConnectionCount() {
    return this[a(968)].size;
  }
  [a(798)]() {
    const x = a, t = /* @__PURE__ */ new Set(), r = /* @__PURE__ */ new Set(), e = [this[x(866)]];
    for (r.add(this[x(866)]); e[x(2710)] > 0; ) {
      const s = e[x(1263)](), n = this[x(1686)].getNeighbors(s);
      for (const i of n)
        !r[x(2348)](i) && (r[x(1580)](i), (this[x(968)][x(2348)](i) || this.canReachThroughConnectedNodes(i, r)) && (t[x(1580)](i), e[x(3062)](i)));
    }
    return Array[x(2047)](t);
  }
  canReachThroughConnectedNodes(x, t) {
    const r = a, e = this[r(1395)](this[r(866)], x);
    if (!e || e[r(2710)] <= 1) return !1;
    for (let s = 1; s < e.length - 1; s++)
      if (!this[r(968)][r(2348)](e[s])) return !1;
    return !0;
  }
  [a(2376)]() {
    const x = a;
    this.connectedNodes[x(2376)]();
  }
}
var bs, gs, ys, vs, ws, Ss, ks;
class So {
  constructor(x, t) {
    me(this, ks);
    me(this, Ss);
    me(this, ws, /* @__PURE__ */ new Map());
    me(this, vs, /* @__PURE__ */ new Map());
    me(this, ys);
    me(this, gs);
    me(this, "connectionManager");
    me(this, bs, /* @__PURE__ */ new Map());
    const r = a;
    this[r(1686)] = x, this[r(866)] = t, this[r(2181)](), this.broadcastManager = new yo(t), this[r(3220)] = new vo(x, t, (e) => this[r(1268)](e)), this[r(1255)] = new wo(x, t), this[r(1187)]();
  }
  initializeNodeStores() {
    const x = a;
    for (const t of this[x(1686)][x(681)]()) {
      const r = this[x(1686)].getNode(t);
      if (r && r[x(872)]) {
        const e = this[x(2716)](r.store), s = zn(() => e);
        this[x(1019)][x(780)](t, s);
      }
    }
  }
  [(ks = a(1686), Ss = a(866), ws = a(1019), vs = a(2936), ys = a(484), gs = a(3220), bs = a(1964), a(2716))](x) {
    const t = a;
    if (!x) return {};
    try {
      return x[t(2774)]({});
    } catch {
      return this[t(867)](x);
    }
  }
  [a(867)](x) {
    const t = a;
    if (!x || !x[t(2590)]) return {};
    if (x[t(2590)].type === t(2485)) {
      const r = x[t(2590)][t(2074)];
      return typeof r === t(1936) ? r() : r;
    }
    if (x[t(2590)][t(2076)] === "object") {
      const r = {};
      let e;
      try {
        e = x[t(2590)][t(1547)];
      } catch {
        return {};
      }
      if (e) for (const [s, n] of Object[t(2634)](e)) {
        const i = this[t(1836)](n);
        i !== void 0 && (r[s] = i);
      }
      return r;
    }
    return {};
  }
  [a(1836)](x) {
    const t = a;
    if (x)
      try {
        return x.parse(void 0);
      } catch {
        return this[t(867)](x);
      }
  }
  async [a(1645)](x, t) {
    const r = a;
    if (!this[r(1686)][r(1070)](this[r(866)], x)) throw new Error("No edge defined from " + this[r(866)] + r(2327) + x);
    if (this[r(1964)][r(2348)](x)) throw new Error(r(2077) + x);
    try {
      this[r(1964)][r(780)](x, t), this.connectionManager[r(726)](x), this[r(1991)](x, t), await this.syncStoresToNewConnection(x), await this[r(1594)](x);
    } catch (e) {
      throw this.cleanupConnection(x), e;
    }
  }
  [a(3209)](x) {
    this[a(2811)](x);
  }
  async [a(618)](x) {
    const t = a;
    await new Promise((r) => setTimeout(r, 100));
    for (const [r, e] of this[t(1019)])
      if (r === this[t(866)]) try {
        await this[t(484)][t(1829)](t(2779) + r, { storeName: r, sourceNodeId: this[t(866)], stateUpdate: e[t(1079)](), isInitialState: !0 });
      } catch {
      }
    try {
      await this[t(484)][t(1829)](t(608), { fromNode: this[t(866)], toNode: x });
    } catch {
    }
  }
  async [a(1594)](x) {
    const t = a;
    try {
      const r = this[t(1255)].getAllReachableNodes();
      for (const e of r)
        try {
          const s = "__internal_requestInitialState_" + e, n = this[t(1316)](e);
          if (n && n.actions && n[t(2848)][s]) {
            const i = n[t(2848)][s]({});
            await Promise[t(3019)]([i, new Promise((c) => setTimeout(c, 300))]);
          }
        } catch (s) {
          console[t(1635)](t(1039) + e + ":", s);
        }
    } catch (r) {
      console[t(1635)](t(1078) + x + ":", r);
    }
  }
  [a(2811)](x) {
    const t = a, r = this.nodeTransports.get(x);
    this[t(1964)][t(875)](x), this[t(1255)].markDisconnected(x), this[t(484)].removeMiddleware(x), r && r[t(2397)]();
  }
  [a(1991)](x, t) {
    const r = a;
    if (!this[r(1019)][r(674)](this.currentNodeId)) throw new Error("Store not found for " + this[r(866)]);
    this[r(3220)].mountTo(t), this[r(484)][r(2511)](x, t);
  }
  [a(1187)]() {
    const x = a;
    for (const [t, r] of this[x(1019)])
      t === this[x(866)] ? go({ graphInstance: this, store: r, name: t }) : bo({ graphInstance: this, store: r, name: t });
  }
  [a(1316)](x) {
    const t = a;
    if (!this[t(2936)][t(2348)](x)) {
      const r = new mo(this, x);
      this[t(2936)][t(780)](x, r);
    }
    return this.nodeProxies[t(674)](x);
  }
  [a(1268)](x) {
    const t = a;
    return this[t(1964)][t(674)](x);
  }
  [a(960)](x) {
    const t = a, r = this.nodeTransports[t(674)](x);
    if (r) return { transport: r, path: [this[t(866)], x] };
    const e = this[t(1898)](this[t(866)], x);
    if (e && e[t(2710)] > 1) {
      const s = e[1], n = this[t(1964)][t(674)](s);
      if (n) return { transport: n, path: e };
    }
  }
  getNodeStore(x) {
    const t = a;
    return this[t(1019)][t(674)](x);
  }
  get [a(872)]() {
    const x = a, t = this[x(1019)][x(674)](this[x(866)]);
    if (!t) throw new Error(x(3269) + this[x(866)]);
    return t;
  }
  get [a(2848)]() {
    const x = a, t = this.definition.getNode(this.currentNodeId);
    if (!t) throw new Error(x(895) + this[x(866)]);
    return new Proxy({}, { get: (e, s) => {
      const n = x;
      if (typeof s != "string") return;
      const i = t.actions[s];
      if (!i) throw new Error(n(2539) + s + " not found for current node " + this[n(866)]);
      return (c, u) => {
        const f = n, l = this[f(3220)][f(2369)](s);
        if (!l) throw new Error(f(1261) + s + f(1398) + this[f(866)]);
        const d = { nodeId: this[f(866)] };
        if (i[f(2932)] === !0) {
          const g = l(c, d, u);
          return g && typeof g == "object" && Symbol[f(583)] in g ? (async function* () {
            for await (const h of g)
              yield h === void 0 ? {} : h;
          })() : (async function* () {
            const h = await g;
            yield h === void 0 ? {} : h;
          })();
        } else return (async () => {
          const g = f, h = l(c, d, u);
          if (h && typeof h === g(1304) && Symbol[g(583)] in h) {
            const m = h[Symbol.asyncIterator](), v = await m[g(2507)]();
            return v[g(2446)] === void 0 ? {} : v[g(2446)];
          } else {
            const m = await h;
            return m === void 0 ? {} : m;
          }
        })();
      };
    } });
  }
  [a(1857)]() {
    return this.definition;
  }
  [a(1199)]() {
    return this[a(866)];
  }
  [a(2993)](x) {
    return this.getTransportToNode(x);
  }
  [a(2922)](x, t) {
    const r = a;
    this[r(3220)][r(2922)](x, t);
  }
  destroy() {
    const x = a, t = Array[x(2047)](this.nodeTransports[x(2123)]());
    for (const r of t)
      this.cleanupConnection(r);
    this[x(484)][x(2376)](), this.actionManager[x(2376)](), this[x(1255)][x(2376)]();
  }
  findPathInternal(x, t) {
    return this.connectionManager.findPath(x, t);
  }
  findPath(x, t) {
    return this.findPathInternal(x, t);
  }
  async [a(1829)](x, t) {
    const r = a, e = { ...t, __origin: this[r(866)] };
    return this[r(484)][r(1829)](x, e);
  }
  [a(2691)](x, t) {
    const r = a;
    this.broadcastManager[r(1424)](x, t);
  }
}
function ko(o) {
  const x = new Un(o);
  return { joinAs(t) {
    const r = K;
    if (!x.getNode(t)) throw new Error("Node " + String(t) + r(941));
    return new So(x, t);
  }, getDefinition() {
    return o;
  }, getNodeIds() {
    return x.getNodeIds();
  }, getNeighbors(t) {
    return x.getNeighbors(t);
  }, hasEdge(t, r) {
    return x[K(1070)](t, r);
  }, hasPath(t, r) {
    return x[K(927)](t, r);
  }, findPath(t, r) {
    return x[K(1395)](t, r);
  } };
}
const ja = { INTERCEPTOR_ERROR: a(2512) };
var Ps, Is, Es, Rs;
class Ma extends (Rs = Error, Es = a(2076), Is = a(2423), Ps = a(2116), Rs) {
  constructor(t, r, e, s) {
    const n = a;
    super(e);
    me(this, Es);
    me(this, Is);
    me(this, Ps);
    this.name = n(2708), this.type = t, this[n(2423)] = r, this.originalError = s;
  }
}
var Cs, _s, Fs, Ts, Ns, qs, As, Os;
class Po {
  constructor(x, t = {}) {
    me(this, "protocol");
    me(this, "realTransport", null);
    me(this, Os);
    me(this, As, /* @__PURE__ */ new Map());
    me(this, "notificationHandlers", /* @__PURE__ */ new Map());
    me(this, qs, /* @__PURE__ */ new Map());
    me(this, Ns, /* @__PURE__ */ new Map());
    me(this, Ts, []);
    me(this, Fs, []);
    me(this, _s, []);
    me(this, Cs, { requestsHandled: 0, notificationsHandled: 0, requestsIntercepted: 0, notificationsIntercepted: 0, errors: 0 });
    const r = a;
    this[r(1601)] = x, this[r(2876)] = { debug: !1, interceptorTimeout: 5e3, continueOnInterceptorError: !0, ...t };
  }
  async [(Os = a(2876), As = a(1796), qs = a(945), Ns = a(2301), Ts = a(3262), Fs = a(2223), _s = a(2573), Cs = a(1677), a(1645))](x) {
    const t = a;
    this.realTransport = x, x.onmessage = (r) => {
      this[K(2904)](r);
    }, x[t(2235)] = () => {
      const r = t;
      this[r(2223)][r(2617)]((e) => e());
    }, x.onerror = (r) => {
      const e = t;
      this[e(2573)][e(2617)]((s) => s(r));
    }, await this[t(1601)][t(1645)](this);
  }
  async [a(2904)](x) {
    const t = a;
    this.log(t(3158), t(1948), x);
    try {
      if (this[t(3028)](x) && await this.handleIncomingRequest(x) || this[t(3216)](x) && await this[t(1169)](x))
        return;
      this[t(3262)][t(2617)]((r) => r(x));
    } catch (r) {
      this[t(1677)][t(2800)]++, this.log("error", t(2175), r), this[t(3262)][t(2617)]((e) => e(x));
    }
  }
  async [a(1124)](x) {
    const t = a, r = this[t(1796)][t(674)](x[t(2423)]);
    if (!r) return !1;
    try {
      this[t(1677)][t(3024)]++;
      const e = await r(x, {});
      return this[t(1382)] && "id" in x && await this.realTransport[t(1838)]({ jsonrpc: t(2804), id: x.id, result: e }), !0;
    } catch (e) {
      return this[t(1677)][t(2800)]++, this[t(1382)] && "id" in x && await this[t(1382)].send({ jsonrpc: t(2804), id: x.id, error: { code: -32603, message: t(3064) + JSON.stringify(x[t(1656)]) + " " + e[t(1044)] } }), !0;
    }
  }
  async [a(1169)](x) {
    const t = a, r = this[t(2973)][t(674)](x.method);
    if (!r) return !1;
    try {
      return this.stats[t(635)]++, await r(x), !0;
    } catch (e) {
      return this[t(1677)][t(2800)]++, this.log("error", t(2701) + x[t(2423)] + ":", e), !0;
    }
  }
  async send(x) {
    const t = a;
    this[t(1635)](t(3158), t(1478), x);
    try {
      if (this[t(3028)](x)) {
        const r = await this[t(1282)](x);
        if (r[t(3031)]) {
          if (r[t(676)] === null) return;
          r[t(676)] && (x = { ...r[t(676)], jsonrpc: "2.0" }, this[t(1677)].requestsIntercepted++);
        } else if (this[t(2876)][t(1081)]) this[t(1635)](t(1114), t(1785) + x[t(2423)] + ":", r[t(490)]);
        else throw r[t(490)];
      }
      if (this[t(3216)](x)) {
        const r = await this[t(1827)](x);
        if (r.success) {
          if (r.result === null) return;
          r[t(676)] && (x = { ...r[t(676)], jsonrpc: "2.0" }, this[t(1677)][t(1482)]++);
        } else if (this[t(2876)].continueOnInterceptorError) this.log("warn", t(595) + x[t(2423)] + ":", r[t(490)]);
        else throw r.error;
      }
      this.realTransport && await this[t(1382)][t(1838)](x);
    } catch (r) {
      throw this[t(1677)][t(2800)]++, r;
    }
  }
  async start() {
    const x = a;
    this[x(1382)] && await this[x(1382)][x(1392)]();
  }
  async [a(1489)]() {
    const x = a;
    this[x(1382)] && await this[x(1382)][x(1489)]();
  }
  set onmessage(x) {
    const t = a;
    this[t(3262)] = [x];
  }
  set [a(2235)](x) {
    const t = a;
    this[t(2223)] = [x];
  }
  set [a(934)](x) {
    this.errorHandlers = [x];
  }
  async [a(1282)](x) {
    const t = a, r = this.outgoingRequestInterceptors.get(x.method);
    if (!r) return { success: !0, result: x };
    try {
      return { success: !0, result: await this[t(582)](r(x), this.options[t(2164)]) };
    } catch (e) {
      return this[t(1677)].errors++, { success: !1, error: new Ma(ja[t(1257)], x[t(2423)], t(1748) + e[t(1044)], e) };
    }
  }
  async executeOutgoingNotificationInterceptor(x) {
    const t = a, r = this.outgoingNotificationInterceptors[t(674)](x.method);
    if (!r) return { success: !0, result: x };
    try {
      return { success: !0, result: await this[t(582)](r(x), this[t(2876)][t(2164)]) };
    } catch (e) {
      return this[t(1677)][t(2800)]++, { success: !1, error: new Ma(ja[t(1257)], x[t(2423)], "Outgoing notification interceptor failed: " + e.message, e) };
    }
  }
  async [a(494)](x, t) {
    const r = a;
    return await this[r(1601)][r(494)](x, t, { timeout: 36e5 });
  }
  async [a(2487)](x) {
    return await this[a(1601)].notification(x);
  }
  [a(1219)](x, t) {
    const r = a, e = x[r(1547)][r(2423)][r(2446)];
    this[r(1796)][r(780)](e, t);
  }
  [a(1529)](x, t) {
    const r = a, e = x[r(1547)][r(2423)][r(2446)];
    this[r(2973)][r(780)](e, t);
  }
  [a(2603)](x, t) {
    const r = a, e = x[r(1547)][r(2423)][r(2446)];
    this[r(945)][r(780)](e, t);
  }
  setOutgoingNotificationInterceptor(x, t) {
    const r = a, e = x[r(1547)].method[r(2446)];
    this[r(2301)][r(780)](e, t);
  }
  [a(2704)](x) {
    const t = a;
    this[t(1796)][t(875)](x);
  }
  [a(2121)](x) {
    const t = a;
    this.notificationHandlers[t(875)](x);
  }
  unsetOutgoingRequestInterceptor(x) {
    const t = a;
    this[t(945)][t(875)](x);
  }
  unsetOutgoingNotificationInterceptor(x) {
    const t = a;
    this.outgoingNotificationInterceptors[t(875)](x);
  }
  [a(928)](x) {
    const t = a;
    return this[t(1796)][t(2348)](x);
  }
  hasNotificationHandler(x) {
    const t = a;
    return this[t(2973)][t(2348)](x);
  }
  [a(1540)](x) {
    const t = a;
    return this.outgoingRequestInterceptors[t(2348)](x);
  }
  hasOutgoingNotificationInterceptor(x) {
    const t = a;
    return this[t(2301)][t(2348)](x);
  }
  [a(1903)]() {
    return { ...this[a(1677)] };
  }
  [a(2495)]() {
    this.stats = { requestsHandled: 0, notificationsHandled: 0, requestsIntercepted: 0, notificationsIntercepted: 0, errors: 0 };
  }
  getProtocol() {
    return this[a(1601)];
  }
  cleanup() {
    const x = a;
    this[x(1796)][x(2376)](), this[x(2973)][x(2376)](), this.outgoingRequestInterceptors[x(2376)](), this[x(2301)][x(2376)]();
  }
  [a(3028)](x) {
    const t = a;
    return x[t(505)] === "2.0" && t(2423) in x && "id" in x;
  }
  isNotification(x) {
    const t = a;
    return x[t(505)] === t(2804) && t(2423) in x && !("id" in x);
  }
  async withTimeout(x, t) {
    const r = a, e = new Promise((s, n) => {
      const i = K;
      setTimeout(() => n(new Error(i(2661))), t);
    });
    return await Promise[r(3019)]([x, e]);
  }
  [a(1635)](x, t, ...r) {
    const e = a;
    if (!this[e(2876)].debug && x === e(3158)) return;
    const s = e(2043);
    switch (x) {
      case "debug":
        console[e(3158)](s, t, ...r);
        break;
      case e(1241):
        console[e(1241)](s, t, ...r);
        break;
      case "warn":
        console[e(1114)](s, t, ...r);
        break;
      case e(490):
        console[e(490)](s, t, ...r);
        break;
    }
  }
}
S({ method: xe(a(3145)), params: S({ requestId: b(), data: ye(), error: b()[a(2644)](), finished: Q() }) }), S({ method: xe(a(1916)), params: S({ action: b(), data: ye() }) }), S({ method: xe(a(3257)), params: S({ requestId: b() }) });
const Io = S({ method: xe("sdppp/streamResponse"), params: S({ requestId: b(), data: ye(), error: b()[a(2644)](), finished: Q() }) }), Eo = S({ method: xe(a(1916)), params: S({ action: b(), data: ye() }) }), Ro = S({ method: xe(a(3257)), params: S({ requestId: b() }) });
var Ds, js;
class Co {
  constructor() {
    me(this, js, /* @__PURE__ */ new Map());
    me(this, Ds, /* @__PURE__ */ new Map());
  }
  [(js = a(3169), Ds = a(2530), a(3062))](x) {
    const t = a, { requestId: r } = x[t(1656)], e = this[t(3169)].get(r) || [], s = this.waiters.get(r) || [];
    s[t(2710)] > 0 ? s[t(1263)]()(x[t(1656)]) : (e[t(3062)](x.params), this[t(3169)][t(780)](r, e));
  }
  async [a(2900)](x) {
    const t = a, r = this[t(3169)].get(x) || [];
    return r[t(2710)] > 0 ? r[t(1263)]() : new Promise((e) => {
      const s = t, n = this[s(2530)][s(674)](x) || [];
      n.push(e), this[s(2530)][s(780)](x, n);
    });
  }
  cleanup(x) {
    const t = a;
    this.queues[t(875)](x), this[t(2530)][t(875)](x);
  }
}
var Ms, Ls;
class _o extends Po {
  constructor(t, r = {}) {
    const e = a;
    super(t, r);
    me(this, Ls, /* @__PURE__ */ new Map());
    me(this, "requestIdSeq", 1);
    me(this, Ms, /* @__PURE__ */ new Map());
    me(this, "notificationQueue", new Co());
    this[e(1119)]();
  }
  [(Ls = a(1670), Ms = a(1757), a(1119))]() {
    const t = a;
    this[t(3172)](), this[t(605)](), this[t(3059)]();
  }
  [a(3172)]() {
    const t = a;
    this[t(1529)](Io, async (r) => {
      const e = t;
      this[e(1233)][e(3062)](r);
    });
  }
  [a(605)]() {
    const t = a;
    this[t(1219)](Ro, async (r, e) => {
      const s = t, { requestId: n } = r[s(1656)], i = this.runningRequests[s(674)](n);
      return i && (i[s(1158)](), this[s(1757)][s(875)](n)), { success: !0 };
    });
  }
  setupStreamRequestHandler() {
    const t = a;
    this[t(1219)](Eo, async (r, e) => {
      const s = t, n = s(1464) + this[s(2832)]++, i = this[s(1670)][s(674)](r.params[s(1893)]);
      if (!i) throw new Error(s(1378) + r[s(1656)].action);
      const c = new AbortController();
      return this[s(1757)][s(780)](n, c), this.executeHandlerAsync(n, i, r[s(1656)], e, c), { requestId: n };
    });
  }
  async [a(3173)](t, r, e, s, n) {
    const i = a;
    try {
      const c = r(e, s, n[i(2111)]);
      for await (const u of c) {
        if (n[i(2111)][i(896)]) break;
        await this[i(2487)]({ method: "sdppp/streamResponse", params: { requestId: t, data: u, error: null, finished: !1 } });
      }
      !n.signal[i(896)] && await this.notification({ method: i(3145), params: { requestId: t, data: null, error: null, finished: !0 } });
    } catch (c) {
      !n[i(2111)][i(896)] && await this[i(2487)]({ method: i(3145), params: { requestId: t, data: null, error: c.message, finished: !0 } });
    } finally {
      this[i(1757)][i(875)](t);
    }
  }
  [a(3139)](t, r) {
    const e = a;
    this.streamRequestorHandlers[e(780)](t.shape[e(1893)].value, r);
  }
  async streamRequest(t, r, e) {
    const s = a;
    this[s(1435)](e);
    const n = await this[s(1909)](t), i = this[s(1334)](n), c = this[s(3198)]();
    return this[s(3007)](i, c, n, e);
  }
  [a(1435)](t) {
    const r = a;
    if (t && t.aborted) throw new Error(r(2353));
  }
  async sendStreamRequestorRequest(t) {
    const r = a;
    return (await this.request({ method: r(1916), params: { action: t[r(1893)], data: t[r(2663)] } }, S({ requestId: b() }))).requestId;
  }
  [a(1334)](t) {
    return this[a(1233)];
  }
  createStreamState() {
    return { finished: !1, error: null };
  }
  [a(3007)](t, r, e, s) {
    const n = this;
    return { async *[Symbol.asyncIterator]() {
      const i = K;
      try {
        for (; !r[i(2310)] && !r[i(490)]; ) {
          if (s && s[i(896)])
            throw await n.request({ method: i(3257), params: { requestId: e } }, S({ success: Q() })), new Error(i(572));
          const c = await t[i(2900)](e);
          if (c[i(490)])
            throw r[i(490)] = c.error, new Error(c[i(490)]);
          if (c[i(2310)]) {
            r.finished = !0;
            break;
          }
          c[i(2663)] !== null && (yield c.data);
        }
      } finally {
        t[i(2397)](e);
      }
    } };
  }
  [a(1037)]() {
    return this.runningRequests.size;
  }
  async [a(3161)](t) {
    const r = a, e = this[r(1757)].get(t);
    return e ? (e[r(1158)](), this[r(1757)].delete(t), !0) : !1;
  }
  [a(3178)]() {
    const t = a;
    for (const [r, e] of this.runningRequests)
      e[t(1158)]();
    this[t(1757)].clear();
  }
  [a(2397)]() {
    const t = a;
    super[t(2397)](), this[t(3178)](), this[t(1670)][t(2376)]();
  }
}
S({ id: b(), method: b(), params: ye()[a(2478)](), traceId: b()[a(2478)]() }), S({ id: b(), result: ye()[a(2478)](), error: S({ code: W(), message: b(), data: ye().optional() })[a(2478)]() }), S({ method: b(), params: ye()[a(2478)]() }), S({ method: xe(a(1916)), params: S({ action: b(), data: ye() }) }), S({ method: xe(a(3145)), params: S({ requestId: b(), data: ye()[a(2478)](), error: b().nullable().optional(), finished: Q()[a(2485)](!1) }) }), S({ method: xe("sdppp/abort"), params: S({ requestId: b() }) }), S({ method: xe("sdppp/broadcast"), params: S({ messageType: b(), message: ye() }) });
function Ws(o) {
  const x = a;
  return o && o.__esModule && Object[x(2587)][x(1315)][x(1522)](o, x(2485)) ? o[x(2485)] : o;
}
const H0 = S({ leftDistance: W(), topDistance: W(), rightDistance: W(), bottomDistance: W(), width: W(), height: W() }), F0 = { name: b(), uiWeight: W() }, Fo = S({ ...F0, outputType: xe(a(3222)), options: S({ required: Q(), maxCount: W()[a(2478)](), maskMode: Q()[a(2478)]() }) }), To = S({ ...F0, outputType: xe(a(2050)), options: S({ required: Q() }) }), No = S({ ...F0, outputType: xe(a(1361)), options: S({ required: Q() }) }), qo = S({ ...F0, outputType: xe("boolean"), options: S({ required: Q() }) }), Ao = S({ ...F0, outputType: xe(a(2665)), options: S({ required: Q(), min: W().optional(), max: W().optional(), step: W().optional(), random: Q()[a(2478)](), slider: Q()[a(2478)]() }) }), Oo = S({ ...F0, outputType: xe(a(2968)), options: S({ required: Q(), values: we(b()), labels: we(b())[a(2478)]() }) }), Do = S({ ...F0, outputType: xe(a(2754)), options: S({ required: Q(), values: we(b()) }) }), jo = S({ ...F0, outputType: xe(a(2737)), options: S({ required: Q() }) }), Mo = Vs(a(1394), [Fo, To, No, qo, Ao, Oo, Do, jo]), Lo = S({ id: b(), title: b(), widgets: we(Mo), uiWeightSum: W() }), $o = S({ widgetableID: b(), widgetablePath: b(), nodes: qe(b(), Lo), nodeIndexes: we(b()), note: b()[a(2478)](), options: qe(b(), ye()) }), Uo = S({ widgetableStructure: $o[a(2485)]({ widgetableID: "", widgetablePath: "", nodes: {}, note: "", options: {}, nodeIndexes: [] }), widgetableValues: qe(b(), we(ye()))[a(2485)]({}), widgetableErrors: qe(b(), b())[a(2485)]({}), queueSize: W()[a(2485)](0), lastError: b()[a(2485)](""), progress: W()[a(2485)](0), executingNodeTitle: b()[a(2485)](""), executingNodeID: b().default(""), graphProgress: W()[a(2485)](0), comfyUserToken: b()[a(2485)](""), comfyOrgLoggedIn: Q()[a(2485)](!1), comfyOrgAPIKey: b().default(""), comfyWSState: Pe([a(1880), a(1097)])[a(2485)](a(1880)), lastRunTime: W().default(0) }), zo = S({ bannerData: ye().optional(), refreshable: Q()[a(2485)](!1), backwardable: Q()[a(2485)](!1), loginable: Q()[a(2485)](!1), runnable: Q().default(!1), workBoundaries: qe(W(), H0)[a(2485)]({}), workBoundaryMaxSizes: qe(W(), W())[a(2485)]({}), isLogin: Q().default(!1), isGuest: Q()[a(2485)](!1), token: b()[a(2485)](""), refreshToken: b().default(""), userInfo: qe(b(), ye())[a(2485)]({}), loginMessage: b()[a(2485)](""), balance: W()[a(2644)]().default(null) }), Ho = S({ uname: b().default(""), activeDocumentID: W()[a(2485)](0), layers: we(S({ id: W(), name: b(), identify: b() }))[a(2485)]([]), actions: we(b())[a(2485)]([]), theme: b()[a(2485)](a(1155)), sdpppX: qe(b(), ye())[a(2485)]({}), locale: Pe([a(707), "en-US"])[a(2485)](a(2260)), comfyWebviewConnectStatus: Pe([a(1523), a(1880), a(833)])[a(2485)]("disconnected"), comfyWebviewLoadError: b()[a(2485)](""), comfyWebviewLoading: Q()[a(2485)](!1), comfyWebviewVersion: b()[a(2485)](""), comfyHTTPCode: W()[a(2485)](200), comfyURL: b().default(""), sdkWebviewFocusing: Q()[a(2485)](!1), sdkWebviewConnectStatus: Pe([a(1523), a(1880), "disconnected"])[a(2485)](a(833)), requestingLogin: Q()[a(2485)](!1), balance: W()[a(2644)]()[a(2485)](null), taskLastRun: W()[a(2485)](0), canvasStateID: W()[a(2478)](), selectionStateID: b().optional(), selectionBoundary: H0.nullable()[a(2478)]() }), Vo = { setNodeTitle: { requestSchema: S({ node_id: b(), title: b() }), responseSchema: S({ success: Q() }) }, reboot: { requestSchema: S({}), responseSchema: S({ success: Q(), error: b().optional() }) }, setComfyOrgAPIKey: { requestSchema: S({ api_key: b() }), responseSchema: S({ success: Q() }) }, logout: { requestSchema: S({}), responseSchema: S({ success: Q() }) }, uploadComfyImageFromUXP: { requestSchema: S({ fileName: b(), overwrite: Q()[a(2478)](), mimeType: b()[a(2478)](), dataBase64: b() }), responseSchema: S({ name: b() }) }, sdpppHandshake: { requestSchema: S({ hostVersion: b()[a(2478)]() }), responseSchema: S({ comfyVersion: b(), hostVersion: b()[a(2478)]() }) } }, Bo = S({ workflows: we(b()), error: b()[a(2478)]() }), Wo = S({ success: Q(), nodeErrors: qe(b())[a(2478)](), prompt_ids: we(b())[a(2478)](), images: we(S({ url: b(), thumbnail: b() }))[a(2478)]() }), Zo = { setWidgetValue: { requestSchema: S({ values: we(S({ nodeID: b(), widgetIndex: W(), value: qe(b(), ye()).or(b()).or(W()).or(Q()).or(we(ye())) })) }), responseSchema: S({ success: Q() }) }, openWorkflow: { requestSchema: S({ workflow_path: b(), reset: Q()[a(2485)](!1) }), responseSchema: S({ success: Q() }) }, openWorkflowJSON: { requestSchema: S({ workflow_content: qe(ye()), workflow_path: b() }), responseSchema: S({ success: Q() }) }, listWorkflows: { requestSchema: S({ listMode: b()[a(2478)](), sdpppID: b()[a(2478)](), sdpppToken: b().optional() }), responseSchema: Bo }, saveWorkflow: { requestSchema: S({ workflow_path: b(), from_sid: b()[a(2478)]() }), responseSchema: S({ success: Q() }) }, run: { requestSchema: S({ size: W(), mode: Pe([a(2012), a(706)])[a(2485)](a(2012)).optional() }), responseSchema: Wo, stream: !0 }, stopAll: { requestSchema: S({}), responseSchema: S({ success: Q() }) } }, Ko = S({ passwordPayload: S({ username: b(), password: b() }).or(S({ email: b(), password: b() })).or(S({ phone: b(), password: b() })).or(S({ identifier: b(), password: b() })) }).or(S({ passcodePayload: S({ phone: b(), code: b() }).or(S({ email: b(), code: b() })) })), Go = S({ passwordPayload: S({ username: b(), password: b() }).or(S({ email: b(), password: b() })).or(S({ phone: b(), password: b() })).or(S({ identifier: b(), password: b() })) }).or(S({ passcodePayload: S({ phone: b(), code: b() }).or(S({ email: b(), code: b() })) })), Jo = { backward: { requestSchema: J0(), responseSchema: S({ success: Q() }) }, refresh: { requestSchema: J0(), responseSchema: S({ success: Q() }) }, run: { requestSchema: J0(), responseSchema: S({ success: Q() }) }, authLogin: { requestSchema: Ko, responseSchema: S({ token: b(), refreshToken: b()[a(2478)](), userInfo: ye()[a(2478)]() }) }, authRegister: { requestSchema: Go, responseSchema: S({ success: Q() }) }, authSendPassCode: { requestSchema: S({ phone: b()[a(2478)](), email: b()[a(2478)]() }), responseSchema: S({ success: Q() }) }, authGetUserProfile: { requestSchema: S({ token: b() }), responseSchema: S({ userInfo: ye() }) }, authLogout: { requestSchema: J0(), responseSchema: S({ success: Q() }) }, authLoginByQRCode: { requestSchema: S({ sessionId: b().optional() }), responseSchema: S({ sessionId: b(), qrcodeURL: b(), status: Pe([a(782), a(793), a(3031), a(488), a(2910), a(490)]), token: b()[a(2478)](), refreshToken: b().optional(), userInfo: ye()[a(2478)]() }) }, fetchBalance: { requestSchema: J0(), responseSchema: S({ balance: W().nullable() }) } };
S({ resource: b().optional(), thumbnail: b().optional(), width: W()[a(2478)](), height: W()[a(2478)](), mimeType: b().optional(), source: b()[a(2478)](), error: b()[a(2478)]() }), S({ boundary: Pe([a(1929), "curlayer", a(2363)]), content: Pe([a(1929), a(3022), a(2363)]).or(b()), imageSize: W(), imageQuality: W(), cropBySelection: Pe(["no", "positive", "negative"]), layer_identify: b().nullable()[a(2478)]() }), S({ content: Pe([a(1929), a(3022), "selection"]), reverse: Q(), imageSize: W(), layer_identify: b()[a(2644)]()[a(2478)]() }), S({ selection: Pe([a(1846), a(1051), a(2829), a(767), a(2799), a(2391), "curlayer_selection", a(1846)]), url: b(), source: b(), cropBySelection: Pe(["no", a(2797), a(2134)]) });
const Qo = { downloadImage: { requestSchema: S({ url: b() }), responseSchema: S({ thumbnail: b()[a(2478)](), resource: b()[a(2478)](), width: W()[a(2478)](), height: W()[a(2478)](), error: b()[a(2478)]() }) }, getThumbnail: { requestSchema: S({ resource: b(), maxSize: W()[a(2478)]() }), responseSchema: S({ thumbnail: b()[a(2478)](), width: W()[a(2478)](), height: W().optional(), error: b()[a(2478)]() }) } }, Xo = { pptaskRun: { requestSchema: S({ locator: b(), payload: qe(b(), ye()).optional(), platformConfig: qe(b(), ye()).optional(), context: qe(b(), ye()).optional(), schema: qe(b(), ye())[a(2478)]() }), responseSchema: Ve([S({ ok: xe(!0), taskId: b(), result: ye() }), S({ ok: xe(!1), taskId: b()[a(2478)](), error: S({ message: b(), code: Ve([b(), W()])[a(2478)](), payload: ye()[a(2478)]() }) })]) }, pptaskCancel: { requestSchema: S({ taskId: b() }), responseSchema: S({ cancelled: Q(), error: b()[a(2478)]() }) } }, Yo = { manageGuides: { requestSchema: S({ action: Pe([a(1602), a(2376)]), rect: H0[a(2478)]() }), responseSchema: S({ success: Q() }) }, getBoundary: { requestSchema: S({ type: Pe([a(3022), a(2363)]) }), responseSchema: H0 }, getImage: { requestSchema: S({ boundary: Ve([Pe([a(1929), a(3022), "selection"]), H0]), content: Ve([Pe([a(1929), "curlayer"]), b()]), imageSize: W(), imageQuality: W(), cropBySelection: Pe(["no", a(2797), a(2134)]), SkipNonNormalLayer: Q(), layer_identify: b()[a(2644)]().optional() }), responseSchema: S({ resource: b().optional(), thumbnail: b().optional(), width: W()[a(2478)](), height: W()[a(2478)](), mimeType: b()[a(2478)](), source: b()[a(2478)](), error: b().optional() }) }, getMask: { requestSchema: S({ boundary: Ve([Pe([a(1929), a(3022), a(2363)]), H0]), content: Pe([a(1929), a(3022), a(2363)]), reverse: Q(), imageSize: W(), layer_identify: b()[a(2644)]()[a(2478)]() }), responseSchema: S({ resource: b()[a(2478)](), thumbnail: b().optional(), width: W().optional(), height: W()[a(2478)](), mimeType: b()[a(2478)](), source: b()[a(2478)](), error: b()[a(2478)]() }) }, getCurrentLayerIdentify: { requestSchema: S({}), responseSchema: S({ layer_identify: b().nullable() }) }, importImage: { requestSchema: S({ resource: b(), boundaryUri: b()[a(2644)]().optional(), type: Pe([a(1929), a(3022), a(2295), "smartobject"]), sourceWidth: W()[a(2478)](), sourceHeight: W()[a(2478)](), maskUri: b()[a(2644)]()[a(2478)]() }), responseSchema: S({ success: Q(), layers: we(S({ identify: b() }))[a(2478)](), message: b()[a(2478)](), error: b()[a(2478)]() }) }, selectFromMaskUri: { requestSchema: S({ maskUri: b(), documentId: W().optional() }), responseSchema: S({ success: Q() }) }, selectFromBoundaryUri: { requestSchema: S({ boundaryUri: b(), documentId: W()[a(2478)]() }), responseSchema: S({ success: Q(), error: b()[a(2478)]() }) }, applyMaskToImage: { requestSchema: S({ imageResource: b(), maskResource: b(), invertMask: Q().optional() }), responseSchema: S({ resource: b(), thumbnail: b()[a(2478)](), width: W(), height: W(), mimeType: b() }) }, showBoundarySelectionDialog: { requestSchema: S({ additionalData: qe(ye())[a(2478)]() }), responseSchema: S({ boundary: Pe([a(1929), a(3022), a(2363)])[a(2478)](), cancelled: Q()[a(2478)]() }) }, selectImageSource: { requestSchema: S({ additionalData: qe(ye())[a(2478)]() }), responseSchema: S({ action: Pe([a(1377), a(533)])[a(2478)](), params: ye()[a(2478)](), cancelled: Q()[a(2478)]() }) }, selectContentSource: { requestSchema: S({ additionalData: qe(ye())[a(2478)]() }).optional(), responseSchema: S({ resource: b().optional(), fileName: b()[a(2478)](), mimeType: b()[a(2478)](), size: W()[a(2478)](), layerIdentify: b()[a(2478)](), cancelled: Q()[a(2478)]() }) } }, Hx = S({ taskId: b(), taskName: b(), status: Pe([a(2018), a(2312), "failed", a(1287)]), currentStep: W()[a(2478)](), totalSteps: W()[a(2478)](), stepDescription: b()[a(2478)](), progressPercentage: W()[a(521)](0).max(100)[a(2478)](), startTime: b(), endTime: b()[a(2478)](), error: b()[a(2478)](), errorCode: b()[a(2478)](), result: ye()[a(2478)](), metadata: qe(ye())[a(2478)]() }), Vx = S({ success: Q(), error: b()[a(2478)]() }), ei = { taskAdd: { requestSchema: Hx, responseSchema: Vx }, taskUpdate: { requestSchema: Hx[a(537)]()[a(2438)]({ taskId: !0 }), responseSchema: Vx }, taskRemove: { requestSchema: Hx[a(3117)]({ taskId: !0 }), responseSchema: Vx } }, xi = { log: { requestSchema: S({ level: Pe([a(1635), a(1241), "warn", a(490)]), messages: we(b()) }), responseSchema: S({}) }, openExternalLink: { requestSchema: S({ url: b() }), responseSchema: S({ error: b().optional() }) }, getStorage: { requestSchema: S({ key: b() }), responseSchema: S({ value: b(), error: b()[a(2478)]() }) }, setStorage: { requestSchema: S({ key: b(), value: b() }), responseSchema: S({ error: b().optional() }) }, removeStorage: { requestSchema: S({ key: b() }), responseSchema: S({ error: b()[a(2478)]() }) }, keyboardAction: { requestSchema: S({ keycode: b() }), responseSchema: S({}) }, setComfyWebviewURL: { requestSchema: S({ url: b() }), responseSchema: S({}) }, getImageBase64: { requestSchema: S({ token: b() }), responseSchema: S({ base64: b()[a(2478)](), mimeType: b()[a(2478)](), error: b()[a(2478)]() }) }, uploadComfyImage: { requestSchema: S({ uploadInput: S({ type: Ve([xe(a(1419)), xe(a(1818)), xe(a(2988))]), resource: ye(), fileName: b(), mimeType: b()[a(2478)](), resourceId: b().optional() }), overwrite: Q().optional()[a(2485)](!0) }), responseSchema: S({ name: b() }) }, pickLocalFile: { requestSchema: S({ acceptExtensions: we(b()).optional(), kind: Pe([a(705), a(1137)])[a(2478)]() })[a(2478)](), responseSchema: S({ cancelled: Q()[a(2478)](), resource: b()[a(2478)](), fileName: b()[a(2478)](), mimeType: b()[a(2478)](), size: W()[a(2478)](), error: b()[a(2478)]() }) }, proxiedFetch: { requestSchema: S({ url: b(), method: b()[a(2478)](), headers: qe(b())[a(2478)](), body: ye()[a(2478)](), bodyType: Pe([a(1207), a(2962), a(2078)])[a(2478)]() }), responseSchema: S({ success: Q(), status: W().optional(), statusText: b().optional(), headers: qe(b())[a(2478)](), data: ye()[a(2478)](), error: b().optional() }) }, openaiImageEdit: { requestSchema: S({ apiKey: b(), baseURL: b(), imageToken: b(), prompt: b(), model: b() }), responseSchema: S({ success: Q(), imageUrl: b()[a(2478)](), apiTime: W().optional(), error: b().optional() }) }, geminiImageGenerate: { requestSchema: S({ apiKey: b(), baseURL: b()[a(2478)](), imageInputs: we(b())[a(2478)](), imageInput: b().optional(), imageInputType: Pe([a(1818), "base64"]), prompt: b() }), responseSchema: S({ success: Q(), imageUrl: b()[a(2478)](), apiTime: W()[a(2478)](), error: b()[a(2478)]() }) } }, ti = Ve([b(), zx(Uint8Array), zx(ArrayBuffer), zx(DataView)]), ai = S({ buffer: ti, name: b()[a(2644)]()[a(2478)](), mime: b()[a(2644)]().optional(), width: W().nullable()[a(2478)](), height: W()[a(2644)]()[a(2478)](), thumbnail: b()[a(2644)]()[a(2478)](), meta: qe(k0())[a(2478)]() }), ri = { "fileResource.createFromExternal": { requestSchema: S({ url: b(), fileName: b()[a(2478)]() }), responseSchema: S({ resource: b()[a(2478)](), thumbnail: b()[a(2478)](), width: W()[a(2478)](), height: W()[a(2478)](), mime: b()[a(2478)](), mimeType: b()[a(2478)](), error: b()[a(2478)]() }) }, "fileResource.createFromLocal": { requestSchema: S({ types: we(S({ description: b()[a(2478)](), extensions: we(b()).optional() }))[a(2478)]() }), responseSchema: S({ resource: b()[a(2478)](), thumbnail: b()[a(2478)](), width: W()[a(2478)](), height: W()[a(2478)](), mime: b()[a(2478)](), error: b()[a(2478)]() }) }, "fileResource.createFromBuffer": { requestSchema: S({ files: we(ai).min(1) }), responseSchema: S({ resource: b()[a(2478)](), thumbnail: b()[a(2478)](), width: W().optional(), height: W()[a(2478)](), mime: b()[a(2478)](), error: b().optional() }) }, "fileResource.createByContent": { requestSchema: S({ contentUri: b(), boundaryUri: b()[a(2478)](), options: qe(k0())[a(2478)]() }), responseSchema: S({ resource: b().optional(), thumbnail: b()[a(2478)](), width: W()[a(2478)](), height: W().optional(), mime: b()[a(2478)](), error: b()[a(2478)]() }) }, "fileResource.createByMask": { requestSchema: S({ maskUri: b(), boundaryUri: b()[a(2478)](), options: qe(k0())[a(2478)]() }), responseSchema: S({ resource: b()[a(2478)](), thumbnail: b()[a(2478)](), width: W()[a(2478)](), height: W()[a(2478)](), mime: b()[a(2478)](), error: b()[a(2478)]() }) }, "fileResource.combineByCBM": { requestSchema: S({ contentUri: b(), boundaryUri: b(), maskUri: b()[a(2644)]()[a(2478)](), options: qe(k0()).optional(), thumbnail: Q()[a(2478)]() }), responseSchema: S({ resource: b()[a(2478)](), thumbnail: b()[a(2478)](), width: W()[a(2478)](), height: W()[a(2478)](), mime: b()[a(2478)](), error: b()[a(2478)]() }) }, "fileResource.delete": { requestSchema: S({ resources: we(b()) }), responseSchema: S({ error: b()[a(2478)]() }) }, "fileResource.thumbnail": { requestSchema: S({ resource: b(), maxSize: W()[a(2478)]() }), responseSchema: S({ thumbnail: b()[a(2478)](), width: W()[a(2478)](), height: W()[a(2478)](), error: b()[a(2478)]() }) }, "fileResource.saveAs": { requestSchema: S({ resources: we(b()) }), responseSchema: S({ error: b()[a(2478)]() }) }, "boundary.normalize": { requestSchema: S({ boundary: b() }), responseSchema: S({ boundary: b().optional(), error: b()[a(2478)]() }) }, "layer.resolve": { requestSchema: S({ uri: b(), type: Pe([a(3170), a(994)]) }), responseSchema: S({ uri: b()[a(2478)](), error: b()[a(2478)]() }) } }, si = ko({ nodes: { sdk: { store: zo, actions: { ...Jo } }, uxp: { store: Ho, actions: { ...Qo, ...ri, ...Xo, ...xi, ...ei, ...Yo } }, comfy: { store: Uo, actions: { ...Zo, ...Vo } } }, edges: [[a(2422), a(2062)], ["comfy", a(2062)]] }), Ie = si[a(1456)]("comfy");
globalThis[a(1790)] = Ie;
var hx = { exports: {} }, Bx, La;
function ni() {
  if (La) return Bx;
  La = 1;
  var o = 1e3, x = o * 60, t = x * 60, r = t * 24, e = r * 7, s = r * 365.25;
  Bx = function(f, l) {
    const d = K;
    l = l || {};
    var g = typeof f;
    if (g === "string" && f.length > 0) return n(f);
    if (g === d(2665) && isFinite(f)) return l[d(1649)] ? c(f) : i(f);
    throw new Error(d(2889) + JSON.stringify(f));
  };
  function n(f) {
    const l = K;
    if (f = String(f), !(f[l(2710)] > 100)) {
      var d = /^(-?(?:\d+)?\.?\d+) *(milliseconds?|msecs?|ms|seconds?|secs?|s|minutes?|mins?|m|hours?|hrs?|h|days?|d|weeks?|w|years?|yrs?|y)?$/i.exec(f);
      if (d) {
        var g = parseFloat(d[1]), h = (d[2] || "ms")[l(1945)]();
        switch (h) {
          case l(935):
          case l(2342):
          case "yrs":
          case "yr":
          case "y":
            return g * s;
          case l(3086):
          case l(3125):
          case "w":
            return g * e;
          case l(2518):
          case l(1332):
          case "d":
            return g * r;
          case "hours":
          case l(2668):
          case l(3219):
          case "hr":
          case "h":
            return g * t;
          case l(504):
          case l(2064):
          case l(2923):
          case "min":
          case "m":
            return g * x;
          case l(645):
          case l(1708):
          case l(2481):
          case l(2553):
          case "s":
            return g * o;
          case l(1324):
          case l(2103):
          case l(646):
          case "msec":
          case "ms":
            return g;
          default:
            return;
        }
      }
    }
  }
  function i(f) {
    const l = K;
    var d = Math.abs(f);
    return d >= r ? Math.round(f / r) + "d" : d >= t ? Math[l(2607)](f / t) + "h" : d >= x ? Math[l(2607)](f / x) + "m" : d >= o ? Math[l(2607)](f / o) + "s" : f + "ms";
  }
  function c(f) {
    const l = K;
    var d = Math[l(2592)](f);
    return d >= r ? u(f, d, r, l(1332)) : d >= t ? u(f, d, t, l(2668)) : d >= x ? u(f, d, x, l(2064)) : d >= o ? u(f, d, o, l(1708)) : f + l(2445);
  }
  function u(f, l, d, g) {
    const h = K;
    var m = l >= d * 1.5;
    return Math[h(2607)](f / d) + " " + g + (m ? "s" : "");
  }
  return Bx;
}
var Wx, $a;
function oi() {
  if ($a) return Wx;
  $a = 1;
  function o(x) {
    const t = K;
    e.debug = e, e[t(2485)] = e, e[t(1077)] = f, e[t(1692)] = c, e[t(2635)] = n, e[t(3045)] = u, e[t(3218)] = ni(), e[t(2820)] = l, Object[t(2123)](x)[t(2617)]((d) => {
      e[d] = x[d];
    }), e.names = [], e[t(1530)] = [], e[t(1636)] = {};
    function r(d) {
      const g = t;
      let h = 0;
      for (let m = 0; m < d.length; m++)
        h = (h << 5) - h + d[g(901)](m), h |= 0;
      return e[g(2980)][Math[g(2592)](h) % e[g(2980)].length];
    }
    e.selectColor = r;
    function e(d) {
      const g = t;
      let h, m = null, v, k;
      function P(...T) {
        const q = K;
        if (!P.enabled) return;
        const R = P, E = Number(/* @__PURE__ */ new Date()), C = E - (h || E);
        R[q(1885)] = C, R[q(1426)] = h, R[q(1879)] = E, h = E, T[0] = e[q(1077)](T[0]), typeof T[0] !== q(1361) && T[q(1162)]("%O");
        let A = 0;
        T[0] = T[0][q(1521)](/%([a-zA-Z%])/g, (M, _) => {
          const N = q;
          if (M === "%%") return "%";
          A++;
          const z = e.formatters[_];
          if (typeof z == "function") {
            const U = T[A];
            M = z[N(1522)](R, U), T.splice(A, 1), A--;
          }
          return M;
        }), e[q(2425)][q(1522)](R, T), (R[q(1635)] || e[q(1635)])[q(2692)](R, T);
      }
      return P.namespace = d, P[g(625)] = e[g(625)](), P[g(1400)] = e.selectColor(d), P[g(919)] = s, P[g(2820)] = e[g(2820)], Object[g(2796)](P, g(3045), { enumerable: !0, configurable: !1, get: () => {
        const T = g;
        return m !== null ? m : (v !== e[T(2470)] && (v = e[T(2470)], k = e.enabled(d)), k);
      }, set: (T) => {
        m = T;
      } }), typeof e[g(1775)] === g(1936) && e[g(1775)](P), P;
    }
    function s(d, g) {
      const h = t, m = e(this.namespace + (typeof g === h(993) ? ":" : g) + d);
      return m[h(1635)] = this[h(1635)], m;
    }
    function n(d) {
      const g = t;
      e[g(921)](d), e[g(2470)] = d, e.names = [], e[g(1530)] = [];
      const h = (typeof d == "string" ? d : "")[g(2337)]().replace(/\s+/g, ",").split(",").filter(Boolean);
      for (const m of h)
        m[0] === "-" ? e[g(1530)][g(3062)](m[g(1387)](1)) : e[g(2292)].push(m);
    }
    function i(d, g) {
      const h = t;
      let m = 0, v = 0, k = -1, P = 0;
      for (; m < d[h(2710)]; )
        if (v < g.length && (g[v] === d[m] || g[v] === "*")) g[v] === "*" ? (k = v, P = m, v++) : (m++, v++);
        else if (k !== -1) v = k + 1, P++, m = P;
        else return !1;
      for (; v < g.length && g[v] === "*"; )
        v++;
      return v === g.length;
    }
    function c() {
      const d = t, g = [...e[d(2292)], ...e[d(1530)][d(1930)]((h) => "-" + h)].join(",");
      return e.enable(""), g;
    }
    function u(d) {
      const g = t;
      for (const h of e[g(1530)])
        if (i(d, h)) return !1;
      for (const h of e[g(2292)])
        if (i(d, h)) return !0;
      return !1;
    }
    function f(d) {
      const g = t;
      return d instanceof Error ? d[g(2101)] || d[g(1044)] : d;
    }
    function l() {
      const d = t;
      console[d(1114)](d(2667));
    }
    return e[t(2635)](e[t(1429)]()), e;
  }
  return Wx = o, Wx;
}
var Ua;
function ii() {
  const o = a;
  return Ua ? hx.exports : (Ua = 1, (function(x, t) {
    const r = K;
    t[r(2425)] = s, t[r(921)] = n, t[r(1429)] = i, t[r(625)] = e, t[r(1576)] = c(), t.destroy = /* @__PURE__ */ (() => {
      let f = !1;
      return () => {
        const l = K;
        !f && (f = !0, console[l(1114)](l(2667)));
      };
    })(), t[r(2980)] = ["#0000CC", "#0000FF", r(2060), r(1986), r(1104), r(3223), "#0099CC", r(2352), r(2233), "#00CC33", "#00CC66", "#00CC99", r(2950), r(1278), r(2030), r(848), r(1992), r(2659), r(1950), r(2028), r(2370), "#3399FF", r(2357), r(591), "#33CC66", r(2037), r(1847), r(1174), r(3206), r(2396), "#6633CC", r(2155), r(999), r(2622), r(2776), r(485), r(1511), r(2271), "#99CC00", "#99CC33", r(2170), r(502), "#CC0066", r(515), "#CC00CC", r(748), r(2621), r(2016), r(2803), r(2350), r(1801), r(3115), r(1820), "#CC6633", r(2361), "#CC9933", "#CCCC00", "#CCCC33", r(3185), r(1955), r(3042), r(2712), r(3096), r(1080), r(1768), "#FF3333", r(3250), r(889), r(686), r(854), "#FF6600", r(1958), r(580), r(2568), r(3153), "#FFCC33"];
    function e() {
      const f = r;
      if (typeof window !== f(993) && window[f(2383)] && (window[f(2383)][f(2076)] === "renderer" || window[f(2383)][f(2985)])) return !0;
      if (typeof navigator !== f(993) && navigator.userAgent && navigator[f(2444)][f(1945)]()[f(2314)](/(edge|trident)\/(\d+)/)) return !1;
      let l;
      return typeof document !== f(993) && document[f(862)] && document[f(862)][f(2359)] && document[f(862)].style[f(558)] || typeof window !== f(993) && window[f(2433)] && (window.console[f(1310)] || window.console[f(1343)] && window[f(2433)][f(814)]) || typeof navigator !== f(993) && navigator.userAgent && (l = navigator[f(2444)][f(1945)]()[f(2314)](/firefox\/(\d+)/)) && parseInt(l[1], 10) >= 31 || typeof navigator !== f(993) && navigator.userAgent && navigator[f(2444)][f(1945)]()[f(2314)](/applewebkit\/(\d+)/);
    }
    function s(f) {
      const l = r;
      if (f[0] = (this.useColors ? "%c" : "") + this[l(1190)] + (this[l(625)] ? l(2061) : " ") + f[0] + (this[l(625)] ? "%c " : " ") + "+" + x.exports[l(3218)](this[l(1885)]), !this.useColors) return;
      const d = "color: " + this[l(1400)];
      f[l(2881)](1, 0, d, l(2902));
      let g = 0, h = 0;
      f[0][l(1521)](/%[a-zA-Z%]/g, (m) => {
        m !== "%%" && (g++, m === "%c" && (h = g));
      }), f.splice(h, 0, d);
    }
    t[r(1635)] = console.debug || console[r(1635)] || (() => {
    });
    function n(f) {
      const l = r;
      try {
        f ? t[l(1576)][l(1542)](l(3158), f) : t[l(1576)].removeItem(l(3158));
      } catch {
      }
    }
    function i() {
      const f = r;
      let l;
      try {
        l = t[f(1576)][f(2215)](f(3158)) || t[f(1576)][f(2215)](f(2869));
      } catch {
      }
      return !l && typeof process !== f(993) && f(740) in process && (l = process[f(740)][f(2869)]), l;
    }
    function c() {
      try {
        return localStorage;
      } catch {
      }
    }
    x[r(732)] = oi()(t);
    const { formatters: u } = x.exports;
    u.j = function(f) {
      const l = r;
      try {
        return JSON[l(1031)](f);
      } catch (d) {
        return l(1611) + d.message;
      }
    };
  })(hx, hx[o(732)]), hx[o(732)]);
}
var ci = ii();
const Zs = Ws(ci);
Zs[a(2635)]("*");
function ui(o, x) {
  const t = a, r = Zs(o), e = (s, n) => async function(...i) {
    try {
      await x({ level: s, messages: i });
    } catch {
    }
  };
  return r[t(1635)] = e(t(1635)), r;
}
const ix = ui("mesh:comfy", async ({ level: o, messages: x }) => {
  const t = a, { mcpMesh: r } = await Promise.resolve()[t(2517)](() => ru);
  await r[t(1316)](t(2062))[t(2848)][t(1635)]({ level: o, messages: x });
}), fi = { "preview.show": "显示预览框 ({{count}}张图片)", "gateway.select_ai_service": a(1321), "provider.select.title": a(851), "provider.comfyui.description": a(1496), "provider.replicate.description": "海量模型，稳定服务", "provider.runninghub.description": a(2736), "provider.google.description": a(1756), "provider.sdppp_sponsor.description": a(2044), "task.waiting_upload": "正在等待图片上传...", "task.creating_task": a(2506), "task.running_duration": a(970), "task.cancelled": a(2802), "task.cancel_failed": a(2305), "task.default_name": a(2362), "comfy.connect": "连接", "comfy.load_failed": "ComfyUI加载失败，HTTP状态码：{{code}}", "comfy.loading": a(1481), "comfy.channel_connecting": "通道连接中...", "comfy.server_reconnecting": a(1780), "comfy.version_mismatch": a(3203), "comfy.cloud_recommend": a(3196), "comfy.your_workflows": "你的工作流", "comfy.refresh_workflows": "刷新工作流列表", "comfy.queue_progress": a(2405), "comfy.save": "保存", "comfy.refresh": "刷新", "comfy.stop_cancel_all": a(2728), "comfy.stop_auto_run": a(1714), "comfy.start_auto_run": a(2118), "comfy.auto_run_status": a(865), "comfy.run": "运行", "comfy.back": "返回", "comfy.uploading": a(2190), "comfy_simple.refreshing_preview": "刷新图片中", "comfy.select_workflow": "选择工作流", "comfy.task.name": a(786), "comfy.error.task_cancelled": a(2802), "comfy.task.processing_progress": a(1743), "comfy.help_tooltip": a(682), "comfy.no_workflow_selected": "未选择工作流", "comfy_simple.missing_url": a(796), "comfy_simple.loading_webview": a(1906), "comfy_simple.http_error": "连接 ComfyUI 失败（HTTP {{code}}）", "comfy_simple.wait_connect": a(634), "comfy_simple.loading": a(564), "comfy_simple.connection_required": a(897), "comfy_simple.preview_empty": a(1901), "comfy_simple.progress.idle": "空闲", "comfy_simple.auto_run": "自动", "comfy_simple.workflow_quick": "快捷", "comfy_simple.multiplier.X1": "X1", "comfy_simple.multiplier.X2": "X2", "comfy_simple.multiplier.X4": "X4", "comfy_simple.multiplier.X10": a(1455), "comfy_simple.prompt_templates.manage_tooltip": a(1384), "comfy_simple.prompt_templates.button": a(1642), "comfy_simple.prompt_templates.save_error": a(737), "comfy_simple.prompt_templates.missing_key": a(1904), "comfy_simple.prompt_templates.missing_value": a(1971), "comfy_simple.prompt_templates.duplicate_key": "模板名称已存在。", "comfy_simple.prompt_templates.save_success": "模板已保存。", "comfy_simple.prompt_templates.delete_confirm_title": a(540), "comfy_simple.prompt_templates.delete_confirm_content": "确定要删除此模板吗？", "comfy_simple.prompt_templates.delete_success": a(3076), "comfy_simple.prompt_templates.add_title": a(1089), "comfy_simple.prompt_templates.edit_title": a(2757), "comfy_simple.prompt_templates.modal_title": "提示词模板", "comfy_simple.prompt_templates.description": a(820), "comfy_simple.prompt_templates.add_button": a(2625), "comfy_simple.prompt_templates.name_placeholder": a(3131), "comfy_simple.prompt_templates.value_placeholder": a(2053), "comfy_simple.fallback.title": a(930), "comfy_simple.fallback.button": a(930), "comfy_simple.prompt_templates.positive_label": a(2102), "comfy_simple.prompt_templates.negative_label": a(1841), "comfy_simple.prompt_templates.negative_placeholder": a(2696), "comfy_simple.prompt_templates.negative_empty": a(2699), "comfy_simple.prompt_templates.default_section": a(2930), "comfy_simple.prompt_templates.default_empty": "暂无默认模板。", "comfy_simple.prompt_templates.default_tag": "默认", "comfy_simple.prompt_templates.custom_section": a(1447), "comfy_simple.prompt_templates.custom_empty": a(2285), "comfy_simple.prompt_templates.applied_success": a(3211), "comfy_simple.prompt_templates.applied_failed": a(2057), "comfy_simple.prompt_templates.apply_unavailable": a(3030), "comfy_simple.prompt_templates.apply_failed_missing_binding": "无法写入{{part}}提示词：未找到对应控件。", "comfy_simple.prompt_templates.apply_failed_caller_unavailable": "无法写入{{part}}提示词：ComfyUI 尚未就绪。", "comfy_simple.prompt_templates.apply_failed_set_error": a(2492), "common.delete": "删除", "comfy_simple.preview_click_to_send": a(1325), "comfy_simple.workflow_select.empty": a(2317), "comfy_simple.workflow_select.select": "选择", "comfy_simple.workflow_select.selected": a(1720), "comfy_simple.workflow_select.current": "当前", "comfy_simple.workflow_select.load_failed": "获取工作流列表失败。", "comfy_simple.workflow_select.members_only": a(1737), "boundary.title": a(3100), "boundary.tooltip": a(2893), "boundary.current_canvas": "整个画布", "boundary.current_layer": "当前图层", "boundary.current_selection": "当前选区", "boundary.set_as_canvas": "设为画布", "boundary.set_as_layer": a(2561), "boundary.set_as_selection": "设为当前选区", "http.404": a(2740), "http.401": a(1937), "http.403": "禁止访问 (403)", "http.408": a(3273), "http.500": "服务器错误 (500)", "http.501": "未实现 (501)", "http.502": a(1722), "http.503": a(2826), "http.504": a(552), "http.unknown": a(881), "runninghub.get_apikey": a(2601), "runninghub.apikey_placeholder": a(1905), "runninghub.app_id": "应用ID:", "runninghub.webapp_id_placeholder": "此处粘贴 WebApp ID", "runninghub.open_app": "按回车打开应用： {{appName}}", "runninghub.execute": "执行", "runninghub.running": "运行中...", "runninghub.rh_coins": a(561), "runninghub.current_tasks": a(1597), "runninghub.help_tooltip": "使用教程", "runninghub.stop_all": "停止全部", "runninghub.status.waiting": a(2926), "runninghub.status.running": a(2153), "runninghub.status.failed": "执行失败", "runninghub.status.success": a(3021), "image.auto_refetch": "自动从PS重新获取", "local_resource.selection.images": "图片", "runninghub.error.get_result_failed": a(1665), "runninghub.error.task_failed": a(1239), "runninghub.error.task_incomplete": a(2202), "runninghub.error.account_status_http": a(1410), "runninghub.error.account_status_reason_unknown": a(845), "runninghub.error.account_status_failed": a(751), "runninghub.error.form_data_http": a(3032), "runninghub.error.form_data_reason_unknown": a(3149), "runninghub.error.form_data_failed": a(1105), "runninghub.error.node_info_missing": a(1182), "runninghub.error.run_http": a(2211), "runninghub.error.run_reason_default": a(2459), "runninghub.error.run_failed": a(3199), "runninghub.error.status_http": a(2400), "runninghub.error.status_reason_unknown": a(724), "runninghub.error.status_failed": a(856), "runninghub.error.outputs_http": a(546), "runninghub.error.outputs_failed": a(3152), "runninghub.task.title": a(1877), "runninghub.error.upload_http": a(1938), "runninghub.error.upload_reason_unknown": "文件上传失败", "runninghub.error.upload_failed": "uploadImage API 调用失败 - {{reason}}", "runninghub.error.services_unavailable": a(1251), "customapi.error.no_image_returned": a(543), "customapi.error.openai_api": a(1176), "customapi.error.input_required": a(2287), "customapi.error.generation_failed": a(553), "customapi.error.model_required": "请输入模型名称", "customapi.task.name.google": "Google Gemini - 图片生成", "customapi.task.name.openai": "OpenAI - 图片编辑", "customapi.error.unsupported_image_input": "不支持的图像输入类型", "replicate.get_apikey": a(3011), "replicate.apikey_placeholder": a(1875), "replicate.execute": "执行", "replicate.model_placeholder": "粘贴你的模型名称", "replicate.help_tooltip": a(682), "replicate.loading": a(795), "replicate.running": a(670), "replicate.stop": "停止", "replicate.error.result_fetch_failed": a(1713), "liblib.get_apikey": a(1276), "liblib.execute": "执行", "common.close": "关闭", "common.save": "保存", "common.save_and_run": a(784), "common.loading": a(795), "common.list_separator": "、", "common.error": "错误", "common.error.unknown": "未知错误", "common.error.task_creation_aborted": a(2745), "common.error.status_check_aborted": "状态检查已中止", "common.error.result_fetch_aborted": a(3166), "common.error.upload_aborted": "上传已中止", "common.success": "成功", "common.failed": "失败", "common.generating": a(948), "common.cancel": "取消", "common.confirm": "确认", "common.options": "选项", "common.options_separator": "=== 选项 ===", "upload_pass.error.unsupported_type": "不支持的上传类型：{{type}}", "upload_pass.error.uploader_missing": a(2083), webviewInForeground: "插件可能正在拦截 PS 快捷键... ", webviewInForeground2: a(1968), "auth.login_success": a(2872), "auth.username_label": "用户名: {{username}}", "auth.email_label": a(2623), "auth.logout": a(2065), "auth.login_required": a(1811), "image.send.select_position": a(1963), "image.send.sending": a(1301), "image.layer.new": "新图层", "image.layer.current": a(1632), "image.layer.fit_to_current": a(524), "image.layer.fit_to_selection": a(3190), "image.layer.fit_to_canvas": "适配至画布", "image.shortcut_auth_required": "快捷键选图功能仅登陆后可用", "image.shortcut_focus_required": a(1819), "image.get.select_image": a(3088), "image.get.entire_canvas": a(1449), "image.get.canvas": "画布", "image.get.current_layer": a(1632), "image.get.current_layer_bounds": a(1183), "image.get.selection_bounds": a(1422), "image.get.canvas_bounds": a(1890), "image.crop_by_selection": a(2045), "image.limit_size": a(653), "image.crop.none": a(1202), "image.crop.inpaint": a(1678), "image.crop.outpaint": "正向裁剪(Outpaint)", "image.send_all": "发送所有", "image.save_all": a(915), "image.save_current": "保存当前", "image.delete_current": a(853), "image.more_actions": a(1283), "image.jump_to_last": a(3271), "image.clear_all": a(492), "image.send_to_ps": a(2862), "image.download": "下载", "image.copy": "复制", "image.sending": "正在发送...", "image.sending_all": a(2652), "mask.get.select_mask": "请选择要获取的遮罩", "mask.selection": "选区", "mask.current_layer_bounds": a(1053), "mask.all": "全部", "mask.selection_exclude": "选区除外", "mask.current_layer_exclude": "当前图层除外", "mask.empty": "空", "widgetable.photoshop.deprecated_node": a(2915), "work_boundary.error.empty_selection_mask": a(2440), "work_boundary.error.primary_resource_missing": a(1830), "work_boundary.error.mask_resource_missing": a(3200), "work_boundary.error.mask_apply_empty": a(1528), "document {{0}} not found": a(3e3), "create document for preview": a(2296), "resize document for preview": a(1232), "create document for sent images": a(1475), "show sent images": "显示发送的图片", "create layer failed": "创建图层失败", "layer not found {{0}}": a(2388), "layer not found: {{0}}": "找不到图层: {{0}}", "layer {{0}} is not a group": a(555), "no linked layer for {{0}}": a(2039), "no first related layer in {{0}}": "组 {{0}} 中没有第一个相关图层", "merge group failed": "合并组失败", "get content of layer {{0}}": a(566), "get layer info": a(2660), "get_layer_info: layer_identify required": a(2747), "get pixel of {{0}} failed": "获取像素失败: {{0}}", "get selection failed": a(863), "invalid name: {{0}}": a(1006), "desire bounds is null": a(1993), "intersect or scaledDesire is null": a(2961), 'only layer kind "TEXT" is supported, invalid layer: {{0}}': "不支持非文本图层: {{0}}", "select layer": "sdppp 选中图层", "run Photoshop Action": a(2216), "Action {{0}} not found": a(1503), "Action set {{0}} not found": a(739), "set text to layer": a(909), "ComfyManager not found, cannot reboot": a(1787), "Failed to reboot ComfyUI": a(536), "image.upload.from_canvas": "画布", "image.upload.from_curlayer": a(1632), "image.upload.from_selection": "选区", "image.upload.from_harddisk": "磁盘", "image.upload.clear": "清空", "image.upload.uploading": a(983), "image.upload.syncing": "素材同步中", "image.upload.no_images": a(2748), "image.upload.error": a(1180), "image.upload.tooltip.more_options_hint": a(2514), "image.upload.tooltip.alt.crop": a(985), "image.upload.tooltip.alt.reverse": a(949), "image.upload.tooltip.image.canvas": "从 画布 获取图像", "image.upload.tooltip.image.curlayer": "从 当前图层 获取图像", "image.upload.tooltip.mask.curlayer": "从 当前图层 获取遮罩", "image.upload.tooltip.mask.selection": a(826), "image.upload.tooltip.mask.canvas": "从 画布 获取遮罩", "image.upload.tooltip.cut_action": a(1344), "image.upload.tooltip.scan_action": `获取图像 &
限制图像范围`, "image.upload.tooltip.autosync.on": a(1886), "image.upload.tooltip.autosync.off": "自动同步: 关闭", "image.upload.tooltip.sync_action": a(1553), "image.upload.autosync.fetching": a(2914), "image.upload.autosync.status.enabled": a(3075), "image.upload.autosync.status.disabled": a(2890), "image.upload.tooltip.current.canvas": a(2288), "image.upload.tooltip.current.layer": a(2815), "image.upload.tooltip.current.layer_named": a(1871), "image.upload.tooltip.current.file": "当前选项：文件", "image.upload.retry": "重试", "image.pack.local.button": a(2505), "image.pack.local.empty": a(2748), "image.auto_send_enabled": a(922), "image.auto_send_disabled": a(1198), "image.upload.primary.auto": "自动取图中…", "image.upload.primary.manual": a(1525), "image.upload.primary.hint": "该节点默认继承当前图层与遮罩", "image.upload.primary.cut": "裁剪", "image.upload.primary.scan": "扫描", "image.upload.primary.hint.line1": "本节点默认继承:", "image.upload.primary.hint.line2": "主图", "workflow.output.destination.title": "输出至：", "workflow.output.destination.canvas": "全图", "image.upload.primary.advanced": a(2082), "image.upload.primary.advanced.modify": "修改", "image.upload.primary.advanced.reset": "重置", "image.upload.primary.advanced.local_file": a(2139), "image.upload.primary.advanced.content.canvas": "画布", "image.upload.primary.advanced.content.curlayer": a(1632), "image.upload.primary.advanced.content.selection": "选区", "image.upload.primary.advanced.boundary.canvas": a(1372), "image.upload.primary.advanced.boundary.curlayer": a(917), "image.upload.primary.advanced.boundary.selection": a(685), "image.upload.primary.advanced.boundary.primary": a(2132), "image.upload.source.file.tooltip": a(720), "image.upload.mode.file.label": "文件", "image.upload.mode.layer.label": "图层", "image.upload.mode.canvas.label": "画布", "image.upload.source.layer.tooltip": a(2148), "image.upload.source.canvas.tooltip": a(2965), "image.upload.dropHint": a(2017), "image.upload.tooltip.clear_action": a(1593), "image.upload.status.layer.short_named": a(2402), "image.upload.status.layer.short": "图层", "image.upload.status.file.short": "本地文件", "image.upload.status.canvas.short": "画布", "image.upload.status.file.active": "正在使用本地文件", "image.upload.status.file.resetHint": a(1437), "image.upload.status.mask.resetHint": a(1060), "image.upload.status.mask.modified": "已添加遮罩", "image.upload.status.boundary.resetHint": "点击恢复默认边界", "image.upload.status.boundary.modified": a(2494), "image.upload.status.boundary.docMismatch": a(2096), "image.upload.mask.button": a(2685), "image.upload.mask.selection": a(2685), "image.upload.mask.layer": "图层遮罩", "image.upload.remove_slot": "移除槽位", "image.upload.add_slot": a(736), "video.local.button": a(1388), "video.local.empty": a(1732), "video.local.remove": "清除视频", "source.source": "来源", "source.content": "内容", "source.boundary": "范围", "source.mask": "遮罩", "source.disk": "磁盘", "source.remote": "远端", "source.unknown": "未知", "source.ps_image": a(1694), "source.ps_mask": "PS遮罩", "source.canvas": "整个画布", "source.current_layer": a(1632), "source.selection": "选区", "source.quality_percent": a(1689), "source.crop.positive": a(3020), "source.crop.negative": a(838), "source.reverse": "反转", "send_images.create_document": a(1470), "send_images.create_document_failed": a(906), "photoshop.no_active_document": a(2455), "photoshop.rectangle_coordinates_required": a(2110), "photoshop.create_guide_frame": a(1212), "photoshop.clear_guide_frame": a(997), "photoshop.invalid_action": a(1806), "photoshop.file_not_found": a(1047), "photoshop.failed_to_open_file_as_document": a(733), "photoshop.invalid_boundary": a(1258), "photoshop.failed_to_open_image_file": a(1185), "photoshop.open_images_from_file": a(511), "photoshop.failed_to_create_document_from_file": a(587), "google.field.image_input": "输入图像", "google.field.prompt": a(1642), "google.field.batch_count": a(601), "google.field.images_per_batch": a(3265), "google.status.success": "成功", "google.status.failed": "失败", "google.status.generating": "生成中", "google.apikey_placeholder": a(1211), "google.baseurl_placeholder": "基础 URL", "google.get_apikey": a(1788), "google.help_tooltip": a(3073), "google.model_name": a(1129), "google.model_label": "模型", "google.model_placeholder": a(1701), "google.stop": "停止", "google.loading": a(795), "google.generating": a(948), "google.generate": "生成", "image.auto_toggle": "自动", "image.import_as_smartobject": a(2606), "image.import_as_newdoc": a(3233), "image.boundary": "边界", "image.import_tip": a(2725), "image.import_selection_button": a(2687), "image.import_auto_hint": a(1745), "image.import_selection_hint": "使用当前选区边界", "auth.guest_login_success": a(532), "boundary.canvas": "画布", "boundary.select_boundary": a(1771), "boundary.selection": "选区", "boundary.max_size": a(967), "boundary.max_size_error": a(1409), "boundary.max_size_hint": "留空表示不限", "boundary.max_size_placeholder": a(972), "boundary.no_limit": "不限", "boundary.image_quality": a(2552), "boundary.image_quality_required": a(2891), "boundary.image_quality_range": "范围 1-100", "boundary.preview_main_image": "输出区域", "boundary.preview_select": a(1923), "boundary.preview_alt": "边界预览", "boundary.preview_placeholder": a(2374), "boundary.settings": "调整输入设置", "convert widget {0} failed:": a(1548), "document {0} not found": a(1027), "image.document.new": a(1432), "image.layer.smart_object": a(1466), "layer not found {0}": "未找到图层 {0}", "photoshop.invalid_boundary_type": "无效的边界类型: {{type}}", "photoshop.no_active_layer": a(2934), "auth.login_hint": "请点击右上角登录后使用。", "task.running": a(670), "task.execute": "运行", "task.stop": "停止", "task.importing_image": a(2562), "task.error.send_image_failed": a(1799), "task.error.failed_status": a(2997), "taskrouter.template_placeholder": a(519), "taskrouter.balance": "赞助分", "taskrouter.recharge": a(2264), "taskrouter.refresh_balance": a(2229), "taskrouter.no_schema": "请先选择应用", "taskrouter.config.base_url": a(1833), "taskrouter.config.supabase_url": "Supabase URL", "taskrouter.config.supabase_anon_key": "Supabase 匿名密钥", "taskrouter.error.remote_config_missing": "缺少 TaskRouter 远端配置：{{missing}}。请检查远端配置后重试。", "taskrouter.error.client_missing": "TaskRouter 客户端未初始化", "taskrouter.error.template_missing": a(2378), "taskrouter.error.upload_provider_incompatible": a(1984), "taskrouter.error.deferred_upload_failed": a(1099), "taskrouter.error.upload_control_unsupported": a(2943), "taskrouter.error.upload_resource_missing": "缺少可上传的资源", "taskrouter.error.tenant_unresolved": a(890), "taskrouter.error.supabase_session_failed": a(714), "taskrouter.status.preparing": a(1595), "taskrouter.status.uploading": a(1421), "taskrouter.status.validating": a(1178), "taskrouter.status.creating": a(2506), "taskrouter.tab.editor": "运行", "taskrouter.tab.history": a(1907), "taskrouter.history.importing": "正在导入历史图片...", "taskrouter.history.send_failed_resource": a(1736), "taskrouter.history.send_failed_identifier": a(1724), "taskrouter.history.send_success": "图片已导入到画布", "taskrouter.history.select_prompt": a(2097), "taskrouter.history.duration_prefix": "耗时", "taskrouter.history.duration_unit": "秒", "taskrouter.history.createdAt": a(1626), "taskrouter.history.charge": a(2242), "taskrouter.history.charge_value": "-{{value}}积分", "taskrouter.history.images": "输出预览", "taskrouter.history.retry": a(1458), "taskrouter.history.id": "任务 ID", "taskrouter.history.message": a(752), "taskrouter.history.no_images": a(2654), "taskrouter.history.client_missing": a(2259), "taskrouter.history.limit_notice": "当前版本限制获取最近10条", "taskrouter.history.refresh": "刷新", "taskrouter.history.detail_title": a(522), "taskrouter.history.loading": a(1539), "taskrouter.history.empty": a(713), "taskrouter.history.started_at_label": "开始时间", "taskrouter.history.status.pending": "排队中", "taskrouter.history.status.running": a(2192), "taskrouter.history.status.completed": a(2210), "taskrouter.history.status.failed": "失败", "taskrouter.history.status.cancelled": a(2311), "plugin.menu.view_logs": a(3103), "plugin.log.saved": `日志已保存到文件: {{path}}


`, "plugin.log.save_failed": a(2719), "dialog.image_source.title": a(722), "dialog.image_source.primary_canvas": a(1376), "dialog.image_source.primary_curlayer": a(2764), "dialog.image_source.canvas_canvas": a(1981), "dialog.image_source.canvas_curlayer": a(3208), "dialog.image_source.curlayer_canvas": "以当前图层边界获取画布", "dialog.image_source.curlayer_curlayer": a(2613), "dialog.image_source.local_file": a(2139), "dialog.simple_source.title": a(1784), "dialog.simple_source.canvas": "画布", "dialog.simple_source.current_layer": a(1632), "dialog.simple_source.local_file": a(1726), "dialog.simple_source.no_active_layer": "当前没有可用图层", "dialog.simple_source.pick_error": a(1170) }, li = { "preview.show": a(626), "gateway.select_ai_service": "Please select AI service", "provider.select.title": "Select AI Service Provider", "provider.comfyui.description": a(734), "provider.replicate.description": a(1453), "provider.runninghub.description": a(1320), "provider.google.description": a(1782), "provider.sdppp_sponsor.description": a(1473), "task.waiting_upload": a(2199), "task.creating_task": "Creating task...", "task.running_duration": "Running for {{duration}} secs, {{message}}", "task.cancelled": a(2239), "task.cancel_failed": a(2619), "task.default_name": a(2467), "comfy.connect": a(1661), "comfy.load_failed": "ComfyUI failed to load, HTTP status code: {{code}}", "comfy.loading": a(1501), "comfy.channel_connecting": a(2351), "comfy.server_reconnecting": a(3041), "comfy.version_mismatch": "Comfy SDPPP version ({{comfyVersion}}) does not match plugin ({{pluginVersion}}), may cause issues", "comfy.cloud_recommend": a(2944), "comfy.your_workflows": a(2029), "comfy.refresh_workflows": a(3035), "comfy.queue_progress": a(2094), "comfy.save": "Save", "comfy.refresh": a(771), "comfy.stop_cancel_all": a(2339), "comfy.stop_auto_run": a(2503), "comfy.start_auto_run": "Auto run after canvas change", "comfy.auto_run_status": a(1683), "comfy.run": "Run", "comfy.back": a(1055), "comfy.uploading": a(3174), "comfy_simple.refreshing_preview": a(2633), "comfy.select_workflow": a(1619), "comfy.task.name": a(786), "comfy.error.task_cancelled": a(2239), "comfy.task.processing_progress": a(1439), "comfy.help_tooltip": a(1659), "comfy.no_workflow_selected": a(1908), "comfy_simple.missing_url": a(2741), "comfy_simple.loading_webview": a(1112), "comfy_simple.http_error": a(2676), "comfy_simple.wait_connect": a(1072), "comfy_simple.loading": a(2885), "comfy_simple.connection_required": a(1468), "comfy_simple.preview_empty": a(2075), "comfy_simple.progress.idle": a(1208), "comfy_simple.auto_run": a(1416), "comfy_simple.workflow_quick": a(1491), "comfy_simple.multiplier.X1": "X1", "comfy_simple.multiplier.X2": "X2", "comfy_simple.multiplier.X4": "X4", "comfy_simple.multiplier.X10": a(1455), "comfy_simple.prompt_templates.manage_tooltip": a(1524), "comfy_simple.prompt_templates.button": a(3057), "comfy_simple.prompt_templates.save_error": a(1229), "comfy_simple.prompt_templates.missing_key": a(579), "comfy_simple.prompt_templates.missing_value": a(2955), "comfy_simple.prompt_templates.duplicate_key": "Template name already exists.", "comfy_simple.prompt_templates.save_success": a(1817), "comfy_simple.prompt_templates.delete_confirm_title": a(1004), "comfy_simple.prompt_templates.delete_confirm_content": a(2313), "comfy_simple.prompt_templates.delete_success": a(947), "comfy_simple.prompt_templates.add_title": a(1669), "comfy_simple.prompt_templates.edit_title": a(1401), "comfy_simple.prompt_templates.modal_title": a(3256), "comfy_simple.prompt_templates.description": a(3027), "comfy_simple.prompt_templates.add_button": a(1336), "comfy_simple.prompt_templates.name_placeholder": a(3080), "comfy_simple.prompt_templates.value_placeholder": "Prompt content", "comfy_simple.fallback.title": a(1858), "comfy_simple.fallback.button": "More Settings", "comfy_simple.prompt_templates.positive_label": a(567), "comfy_simple.prompt_templates.negative_label": "Negative Prompt", "comfy_simple.prompt_templates.negative_placeholder": a(2906), "comfy_simple.prompt_templates.negative_empty": a(2987), "comfy_simple.prompt_templates.default_section": "Default Templates", "comfy_simple.prompt_templates.default_empty": a(3195), "comfy_simple.prompt_templates.default_tag": "Default", "comfy_simple.prompt_templates.custom_section": a(1604), "comfy_simple.prompt_templates.custom_empty": a(2642), "comfy_simple.prompt_templates.applied_success": "Template applied.", "comfy_simple.prompt_templates.applied_failed": a(2435), "comfy_simple.prompt_templates.apply_unavailable": a(1941), "comfy_simple.prompt_templates.apply_failed_missing_binding": a(1e3), "comfy_simple.prompt_templates.apply_failed_caller_unavailable": a(1940), "comfy_simple.prompt_templates.apply_failed_set_error": "Failed to update the {{part}} prompt. Please try again.", "common.delete": a(2723), "comfy_simple.preview_click_to_send": a(1216), "comfy_simple.workflow_select.empty": a(2544), "comfy_simple.workflow_select.select": "Select", "comfy_simple.workflow_select.selected": a(2195), "comfy_simple.workflow_select.current": a(2104), "comfy_simple.workflow_select.load_failed": a(2418), "comfy_simple.workflow_select.members_only": a(2454), "boundary.title": a(924), "boundary.tooltip": a(2875), "boundary.current_canvas": "Entire Canvas", "boundary.current_layer": a(887), "boundary.current_selection": a(3108), "boundary.set_as_canvas": a(1431), "boundary.set_as_layer": a(996), "boundary.set_as_selection": a(3099), "http.404": a(510), "http.401": a(2302), "http.403": a(550), "http.408": a(2024), "http.500": a(1085), "http.501": a(3050), "http.502": "Gateway error (502)", "http.503": a(1446), "http.504": "Gateway timeout (504)", "http.unknown": "Unknown error ({{code}})", "runninghub.get_apikey": a(1147), "runninghub.apikey_placeholder": "Enter your RunningHub API Key", "runninghub.app_id": a(1210), "runninghub.webapp_id_placeholder": "Paste WebApp ID here", "runninghub.open_app": a(773), "runninghub.execute": "Execute", "runninghub.running": a(2658), "runninghub.rh_coins": a(1487), "runninghub.current_tasks": a(658), "runninghub.help_tooltip": a(1659), "runninghub.stop_all": a(2087), "runninghub.status.waiting": a(2245), "runninghub.status.running": a(982), "runninghub.status.failed": "Failed", "runninghub.status.success": a(1584), "image.auto_refetch": "Auto repick from PS", "local_resource.selection.images": a(2042), "runninghub.error.get_result_failed": "Failed to get result: {{error}}", "runninghub.error.task_failed": a(2753), "runninghub.error.task_incomplete": a(778), "runninghub.error.account_status_http": "getAccountStatus API failed - HTTP error! status: {{status}}", "runninghub.error.account_status_reason_unknown": a(3087), "runninghub.error.account_status_failed": a(3283), "runninghub.error.form_data_http": a(3192), "runninghub.error.form_data_reason_unknown": "Failed to fetch form data", "runninghub.error.form_data_failed": a(3010), "runninghub.error.node_info_missing": a(2e3), "runninghub.error.run_http": a(2814), "runninghub.error.run_reason_default": a(500), "runninghub.error.run_failed": a(2140), "runninghub.error.status_http": a(1351), "runninghub.error.status_reason_unknown": "Failed to get task status", "runninghub.error.status_failed": a(3177), "runninghub.error.outputs_http": "outputs API failed - HTTP error! status: {{status}}", "runninghub.error.outputs_failed": a(563), "runninghub.task.title": a(1877), "runninghub.error.upload_http": a(1309), "runninghub.error.upload_reason_unknown": a(1290), "runninghub.error.upload_failed": a(1765), "runninghub.error.services_unavailable": a(2484), "customapi.error.no_image_returned": a(2880), "customapi.error.openai_api": "OpenAI API error", "customapi.error.input_required": "Image input and prompt are required", "customapi.error.generation_failed": a(2392), "customapi.error.model_required": a(1990), "customapi.task.name.google": a(864), "customapi.task.name.openai": a(2591), "customapi.error.unsupported_image_input": a(2354), "replicate.get_apikey": a(2385), "replicate.apikey_placeholder": a(2247), "replicate.execute": a(2447), "replicate.model_placeholder": a(2091), "replicate.help_tooltip": a(1659), "replicate.loading": a(499), "replicate.running": "Running...", "replicate.stop": a(1977), "replicate.error.result_fetch_failed": a(1697), "liblib.get_apikey": a(1587), "liblib.execute": a(2447), "common.close": "Close", "common.save": a(959), "common.save_and_run": a(2499), "common.loading": a(499), "common.list_separator": ", ", "common.error": "Error", "common.error.unknown": a(1217), "common.error.task_creation_aborted": a(2081), "common.error.status_check_aborted": a(2025), "common.error.result_fetch_aborted": a(712), "common.error.upload_aborted": a(969), "common.success": a(1584), "common.failed": a(708), "common.generating": a(1520), "common.cancel": "Cancel", "common.confirm": a(914), "common.options": a(907), "common.options_separator": a(3119), "upload_pass.error.unsupported_type": a(1417), "upload_pass.error.uploader_missing": a(1234), webviewInForeground: a(1484), webviewInForeground2: a(716), "auth.login_success": a(2434), "auth.username_label": a(1664), "auth.email_label": a(1128), "auth.logout": a(1617), "auth.login_required": a(2954), "image.send.select_position": "Please select the position to send image", "image.send.sending": a(3187), "image.layer.new": a(976), "image.layer.current": a(887), "image.layer.fit_to_current": a(1235), "image.layer.fit_to_selection": "Fit to selection", "image.layer.fit_to_canvas": a(2463), "image.shortcut_auth_required": a(1460), "image.shortcut_focus_required": a(2158), "image.get.select_image": "Please select the image to get", "image.get.entire_canvas": a(2760), "image.get.canvas": a(2032), "image.get.current_layer": a(887), "image.get.current_layer_bounds": a(1607), "image.get.selection_bounds": a(3167), "image.get.canvas_bounds": a(3229), "image.crop_by_selection": a(1322), "image.limit_size": a(2879), "image.crop.none": a(869), "image.crop.inpaint": a(944), "image.crop.outpaint": a(912), "image.send_all": a(1340), "image.save_all": a(656), "image.save_current": a(2294), "image.delete_current": a(3136), "image.more_actions": a(3184), "image.jump_to_last": "Jump to last", "image.clear_all": a(3251), "image.send_to_ps": a(3268), "image.download": "Download", "image.copy": a(2114), "image.sending": "Sending...", "image.sending_all": a(1237), "mask.get.select_mask": a(2004), "mask.selection": a(1393), "mask.current_layer_bounds": "Current layer bounds", "mask.all": a(2409), "mask.selection_exclude": a(3140), "mask.current_layer_exclude": a(1492), "mask.empty": a(2987), "widgetable.photoshop.deprecated_node": "SDPPP 2.0 no longer needs this node", "work_boundary.error.empty_selection_mask": a(2843), "work_boundary.error.primary_resource_missing": "Primary image resource is missing", "work_boundary.error.mask_resource_missing": a(1914), "work_boundary.error.mask_apply_empty": a(1746), "document {{0}} not found": a(1033), "create document for preview": "Create document for preview", "resize document for preview": a(620), "create document for sent images": "Create document for sent images", "show sent images": a(2628), "create layer failed": "Create layer failed", "layer not found {{0}}": a(530), "layer not found: {{0}}": "Layer not found: {{0}}", "layer {{0}} is not a group": a(691), "no linked layer for {{0}}": "No linked layer for {{0}}", "no first related layer in {{0}}": a(2921), "merge group failed": a(2186), "get content of layer {{0}}": "Get content of layer {{0}}", "get layer info": a(2713), "get_layer_info: layer_identify required": a(2791), "get pixel of {{0}} failed": a(3066), "get selection failed": a(1428), "invalid name: {{0}}": a(3180), "desire bounds is null": a(630), "intersect or scaledDesire is null": a(756), 'only layer kind "TEXT" is supported, invalid layer: {{0}}': a(2404), "select layer": a(779), "run Photoshop Action": a(3132), "Action {{0}} not found": a(1011), "Action set {{0}} not found": "Action set {{0}} was not found", "set text to layer": a(2959), "ComfyManager not found, cannot reboot": a(1706), "Failed to reboot ComfyUI": a(1944), "image.upload.from_canvas": a(2032), "image.upload.from_curlayer": a(887), "image.upload.from_selection": a(1393), "image.upload.from_harddisk": "Disk", "image.upload.clear": a(1213), "image.upload.uploading": a(1761), "image.upload.syncing": "Syncing assets", "image.upload.no_images": a(3107), "image.upload.error": "Upload failed, please try again", "image.upload.tooltip.alt.crop": a(2762), "image.upload.tooltip.alt.reverse": a(781), "image.upload.tooltip.image.canvas": "Get image from Canvas", "image.upload.tooltip.image.curlayer": "Get image from Current Layer", "image.upload.tooltip.mask.canvas": "Get mask from Canvas", "image.upload.tooltip.mask.curlayer": a(2650), "image.upload.tooltip.mask.selection": a(2228), "image.upload.tooltip.cut_action": `Get image &
Crop selection mask`, "image.upload.tooltip.scan_action": a(565), "image.upload.tooltip.autosync.on": a(2835), "image.upload.tooltip.autosync.off": a(2131), "image.upload.tooltip.sync_action": a(874), "image.upload.tooltip.more_options_hint": "Hold Shift for more options; Ctrl for single fetch", "image.upload.tooltip.current.canvas": a(2274), "image.upload.tooltip.current.layer": "Current selection: Layer", "image.upload.tooltip.current.layer_named": "Current selection: Layer {{layerName}}", "image.upload.tooltip.current.file": "Current option: File", "image.upload.autosync.fetching": a(1839), "image.upload.autosync.status.enabled": a(1150), "image.upload.autosync.status.disabled": a(797), "image.upload.retry": "Retry", "image.pack.local.button": a(2550), "image.pack.local.empty": a(2497), "image.auto_send_enabled": a(1681), "image.auto_send_disabled": a(3116), "image.upload.primary.auto": a(1839), "image.upload.primary.manual": a(2527), "image.upload.primary.cut": a(2778), "image.upload.primary.scan": a(675), "image.upload.primary.hint": a(2332), "image.upload.primary.hint.line1": a(1988), "image.upload.primary.hint.line2": a(2858), "workflow.output.destination.title": a(1967), "workflow.output.destination.canvas": a(1244), "image.upload.primary.advanced": a(1352), "image.upload.primary.advanced.modify": a(641), "image.upload.primary.advanced.reset": a(1337), "image.upload.primary.advanced.local_file": a(1549), "image.upload.primary.advanced.content.canvas": a(2032), "image.upload.primary.advanced.content.curlayer": a(1059), "image.upload.primary.advanced.content.selection": a(1393), "image.upload.primary.advanced.boundary.canvas": a(1459), "image.upload.primary.advanced.boundary.curlayer": a(1184), "image.upload.primary.advanced.boundary.selection": "Selection boundary", "image.upload.primary.advanced.boundary.primary": "Primary boundary", "image.upload.mode.file.label": "File", "image.upload.mode.layer.label": a(830), "image.upload.mode.canvas.label": a(2032), "image.upload.source.file.tooltip": a(3171), "image.upload.source.layer.tooltip": "Use current layer", "image.upload.source.canvas.tooltip": a(3270), "image.upload.dropHint": a(2576), "image.upload.tooltip.clear_action": a(1076), "image.upload.status.layer.short_named": a(1436), "image.upload.status.layer.short": a(830), "image.upload.status.file.short": a(1549), "image.upload.status.canvas.short": a(2032), "image.upload.status.file.active": a(1849), "image.upload.status.file.resetHint": "Click to remove local file", "image.upload.status.mask.resetHint": a(1139), "image.upload.status.mask.modified": a(844), "image.upload.status.boundary.resetHint": "Click to restore default boundary", "image.upload.status.boundary.modified": a(1069), "image.upload.status.boundary.docMismatch": a(1824), "image.upload.mask.button": a(2790), "image.upload.mask.selection": a(2790), "image.upload.mask.layer": a(3072), "image.upload.remove_slot": a(3095), "image.upload.add_slot": "Add slot", "video.local.button": "Local video", "video.local.empty": a(894), "video.local.remove": "Remove video", "source.source": a(3074), "source.content": a(1506), "source.boundary": a(629), "source.mask": "Mask", "source.disk": a(2975), "source.remote": "Remote", "source.unknown": "Unknown", "source.ps_image": "PS", "source.ps_mask": "PS", "source.canvas": a(2032), "source.current_layer": "CurLayer", "source.selection": a(1393), "source.quality_percent": "Quality {{percent}}%", "source.crop.positive": "Positive Crop", "source.crop.negative": a(1536), "source.reverse": a(2471), "send_images.create_document": "Create document", "send_images.create_document_failed": a(2558), "photoshop.no_active_document": "No active document", "photoshop.rectangle_coordinates_required": a(644), "photoshop.create_guide_frame": a(2224), "photoshop.clear_guide_frame": "Clear guide frame", "photoshop.invalid_action": a(2297), "photoshop.file_not_found": a(1759), "photoshop.failed_to_open_file_as_document": a(2026), "photoshop.invalid_boundary": a(3025), "photoshop.failed_to_open_image_file": "Failed to open image file: {{error}}", "photoshop.open_images_from_file": a(2355), "photoshop.failed_to_create_document_from_file": a(589), "google.field.image_input": a(1462), "google.field.prompt": a(1172), "google.field.batch_count": a(783), "google.field.images_per_batch": a(2805), "google.status.success": a(1584), "google.status.failed": a(708), "google.status.generating": a(581), "google.apikey_placeholder": a(1532), "google.get_apikey": a(2788), "google.baseurl_placeholder": a(1347), "google.help_tooltip": a(1516), "google.model_name": a(2203), "google.model_label": "Model", "google.model_placeholder": a(2431), "google.stop": "Stop", "google.loading": "Loading...", "google.generating": "Generating...", "google.generate": a(1783), "image.auto_toggle": a(2419), "image.import_as_smartobject": a(2143), "image.import_as_newdoc": a(2819), "image.boundary": a(2994), "image.import_tip": "Hold Shift key to import as new document", "image.import_selection_button": a(2441), "image.import_auto_hint": "Shift-click or right-click to toggle auto send", "image.import_selection_hint": "Use current selection boundary", "auth.guest_login_success": a(1902), "boundary.canvas": a(2032), "boundary.select_boundary": "Select boundary", "boundary.selection": a(1393), "boundary.max_size": a(1725), "boundary.max_size_error": a(2482), "boundary.max_size_hint": a(1979), "boundary.max_size_placeholder": a(1979), "boundary.no_limit": a(2705), "boundary.image_quality": "Image quality (%)", "boundary.image_quality_required": a(3224), "boundary.image_quality_range": a(2073), "boundary.preview_main_image": a(1024), "boundary.preview_select": a(611), "boundary.preview_alt": a(1058), "boundary.preview_placeholder": a(2099), "boundary.settings": a(1342), "convert widget {0} failed:": "Failed to convert widget {0}:", "document {0} not found": a(1755), "image.document.new": "New Document", "image.layer.smart_object": a(1913), "layer not found {0}": a(975), "photoshop.invalid_boundary_type": a(571), "photoshop.no_active_layer": a(2112), "auth.login_hint": a(933), "task.running": a(2658), "task.execute": a(1596), "task.stop": a(1977), "task.importing_image": a(2548), "task.error.send_image_failed": "Failed to send image {{index}}: {{error}}", "task.error.failed_status": a(3247), "taskrouter.template_placeholder": a(3058), "taskrouter.balance": "Sponsor Points", "taskrouter.recharge": a(677), "taskrouter.refresh_balance": "Refresh balance", "taskrouter.no_schema": a(1850), "taskrouter.config.base_url": a(2023), "taskrouter.config.supabase_url": a(1727), "taskrouter.config.supabase_anon_key": a(3188), "taskrouter.error.remote_config_missing": "Missing TaskRouter remote config: {{missing}}. Please check the remote config and try again.", "taskrouter.error.client_missing": "TaskRouter client is not initialized", "taskrouter.error.template_missing": a(1927), "taskrouter.error.upload_provider_incompatible": a(560), "taskrouter.error.deferred_upload_failed": a(2428), "taskrouter.error.upload_control_unsupported": a(955), "taskrouter.error.upload_resource_missing": a(946), "taskrouter.error.tenant_unresolved": a(2831), "taskrouter.error.supabase_session_failed": "Failed to get Supabase session: {{error}}", "taskrouter.status.preparing": a(1404), "taskrouter.status.uploading": "Uploading images...", "taskrouter.status.validating": a(2742), "taskrouter.status.creating": "Creating task...", "taskrouter.tab.editor": "Run", "taskrouter.tab.history": "History", "taskrouter.history.importing": a(1018), "taskrouter.history.send_failed_resource": a(1222), "taskrouter.history.send_failed_identifier": "Invalid resource identifier", "taskrouter.history.send_success": a(950), "taskrouter.history.select_prompt": a(2263), "taskrouter.history.duration_prefix": a(1113), "taskrouter.history.duration_unit": a(2553), "taskrouter.history.createdAt": a(2897), "taskrouter.history.charge": a(1296), "taskrouter.history.charge_value": a(1223), "taskrouter.history.images": a(1888), "taskrouter.history.retry": a(1127), "taskrouter.history.id": a(1920), "taskrouter.history.message": "Message", "taskrouter.history.no_images": a(1655), "taskrouter.history.client_missing": a(1895), "taskrouter.history.limit_notice": a(1667), "taskrouter.history.refresh": "Refresh", "taskrouter.history.detail_title": a(3189), "taskrouter.history.loading": "Loading history tasks...", "taskrouter.history.empty": a(590), "taskrouter.history.started_at_label": "Started At", "taskrouter.history.status.pending": a(2177), "taskrouter.history.status.running": a(982), "taskrouter.history.status.completed": "Completed", "taskrouter.history.status.failed": "Failed", "taskrouter.history.status.cancelled": "Cancelled", "plugin.menu.view_logs": "View Logs", "plugin.log.saved": a(1052), "plugin.log.save_failed": a(1350), "dialog.image_source.title": a(1148), "dialog.image_source.primary_canvas": a(1373), "dialog.image_source.primary_curlayer": a(3142), "dialog.image_source.canvas_canvas": "Fetch canvas with canvas boundary", "dialog.image_source.canvas_curlayer": a(1364), "dialog.image_source.curlayer_canvas": a(531), "dialog.image_source.curlayer_curlayer": "Fetch current layer with current-layer boundary", "dialog.image_source.local_file": a(878), "dialog.simple_source.title": a(551), "dialog.simple_source.canvas": a(2032), "dialog.simple_source.current_layer": "Current Layer", "dialog.simple_source.local_file": "Choose File", "dialog.simple_source.no_active_layer": a(619), "dialog.simple_source.pick_error": a(2508) }, be = (o) => typeof o === a(1361), Q0 = () => {
  const o = a;
  let x, t;
  const r = new Promise((e, s) => {
    x = e, t = s;
  });
  return r[o(2457)] = x, r.reject = t, r;
}, za = (o) => o == null ? "" : "" + o, di = (o, x, t) => {
  o.forEach((r) => {
    x[r] && (t[r] = x[r]);
  });
}, hi = /###/g, Ha = (o) => o && o.indexOf(a(668)) > -1 ? o[a(1521)](hi, ".") : o, Va = (o) => !o || be(o), ex = (o, x, t) => {
  const r = a, e = be(x) ? x[r(3263)](".") : x;
  let s = 0;
  for (; s < e[r(2710)] - 1; ) {
    if (Va(o)) return {};
    const n = Ha(e[s]);
    !o[n] && t && (o[n] = new t()), Object[r(2587)][r(1315)][r(1522)](o, n) ? o = o[n] : o = {}, ++s;
  }
  return Va(o) ? {} : { obj: o, k: Ha(e[s]) };
}, Ba = (o, x, t) => {
  const r = a, { obj: e, k: s } = ex(o, x, Object);
  if (e !== void 0 || x[r(2710)] === 1) {
    e[s] = t;
    return;
  }
  let n = x[x[r(2710)] - 1], i = x[r(1387)](0, x[r(2710)] - 1), c = ex(o, i, Object);
  for (; c[r(2147)] === void 0 && i.length; )
    n = i[i[r(2710)] - 1] + "." + n, i = i[r(1387)](0, i[r(2710)] - 1), c = ex(o, i, Object), c != null && c[r(2147)] && typeof c[r(2147)][c.k + "." + n] < "u" && (c[r(2147)] = void 0);
  c.obj[c.k + "." + n] = t;
}, pi = (o, x, t, r) => {
  const e = a, { obj: s, k: n } = ex(o, x, Object);
  s[n] = s[n] || [], s[n][e(3062)](t);
}, _x = (o, x) => {
  const t = a, { obj: r, k: e } = ex(o, x);
  if (r && Object[t(2587)][t(1315)].call(r, e))
    return r[e];
}, mi = (o, x, t) => {
  const r = _x(o, t);
  return r !== void 0 ? r : _x(x, t);
}, Ks = (o, x, t) => {
  for (const r in x)
    r !== "__proto__" && r !== "constructor" && (r in o ? be(o[r]) || o[r] instanceof String || be(x[r]) || x[r] instanceof String ? t && (o[r] = x[r]) : Ks(o[r], x[r], t) : o[r] = x[r]);
  return o;
}, U0 = (o) => o[a(1521)](/[\-\[\]\/\{\}\(\)\*\+\?\.\\\^\$\|]/g, "\\$&");
var bi = { "&": a(932), "<": "&lt;", ">": "&gt;", '"': a(2886), "'": a(963), "/": a(1331) };
const gi = (o) => be(o) ? o.replace(/[&<>"'\/]/g, (x) => bi[x]) : o;
class yi {
  constructor(x) {
    const t = a;
    this[t(2772)] = x, this[t(1132)] = /* @__PURE__ */ new Map(), this[t(2861)] = [];
  }
  getRegExp(x) {
    const t = a, r = this.regExpMap[t(674)](x);
    if (r !== void 0) return r;
    const e = new RegExp(x);
    return this[t(2861)][t(2710)] === this.capacity && this.regExpMap.delete(this[t(2861)][t(1263)]()), this.regExpMap[t(780)](x, e), this[t(2861)][t(3062)](x), e;
  }
}
const vi = [" ", ",", "?", "!", ";"], wi = new yi(20), Si = (o, x, t) => {
  const r = a;
  x = x || "", t = t || "";
  const e = vi[r(2581)]((i) => x[r(2436)](i) < 0 && t.indexOf(i) < 0);
  if (e.length === 0) return !0;
  const s = wi[r(2907)]("(" + e[r(1930)]((i) => i === "?" ? "\\?" : i)[r(1592)]("|") + ")");
  let n = !s[r(2346)](o);
  if (!n) {
    const i = o.indexOf(t);
    i > 0 && !s[r(2346)](o[r(672)](0, i)) && (n = !0);
  }
  return n;
}, Jt = (o, x, t = ".") => {
  const r = a;
  if (!o) return;
  if (o[x])
    return Object[r(2587)][r(1315)][r(1522)](o, x) ? o[x] : void 0;
  const e = x.split(t);
  let s = o;
  for (let n = 0; n < e[r(2710)]; ) {
    if (!s || typeof s !== r(1304)) return;
    let i, c = "";
    for (let u = n; u < e[r(2710)]; ++u)
      if (u !== n && (c += t), c += e[u], i = s[c], i !== void 0) {
        if (["string", "number", r(3106)].indexOf(typeof i) > -1 && u < e[r(2710)] - 1) continue;
        n += u - n + 1;
        break;
      }
    s = i;
  }
  return s;
}, nx = (o) => o == null ? void 0 : o[a(1521)]("_", "-"), ki = { type: a(2303), log(o) {
  const x = a;
  this[x(1121)](x(1635), o);
}, warn(o) {
  const x = a;
  this[x(1121)](x(1114), o);
}, error(o) {
  this.output("error", o);
}, output(o, x) {
  var t, r;
  (r = (t = console == null ? void 0 : console[o]) == null ? void 0 : t.apply) == null || r.call(t, console, x);
} };
class Fx {
  constructor(x, t = {}) {
    this[a(1775)](x, t);
  }
  [a(1775)](x, t = {}) {
    const r = a;
    this.prefix = t[r(632)] || r(3182), this.logger = x || ki, this[r(2876)] = t, this.debug = t[r(3158)];
  }
  [a(1635)](...x) {
    const t = a;
    return this.forward(x, t(1635), "", !0);
  }
  [a(1114)](...x) {
    const t = a;
    return this[t(1494)](x, t(1114), "", !0);
  }
  [a(490)](...x) {
    return this[a(1494)](x, "error", "");
  }
  [a(1925)](...x) {
    const t = a;
    return this.forward(x, t(1114), t(1090), !0);
  }
  [a(1494)](x, t, r, e) {
    const s = a;
    return e && !this[s(3158)] ? null : (be(x[0]) && (x[0] = "" + r + this[s(632)] + " " + x[0]), this[s(2303)][t](x));
  }
  [a(1602)](x) {
    const t = a;
    return new Fx(this[t(2303)], { prefix: this[t(632)] + ":" + x + ":", ...this[t(2876)] });
  }
  [a(2472)](x) {
    const t = a;
    return x = x || this.options, x[t(632)] = x[t(632)] || this[t(632)], new Fx(this[t(2303)], x);
  }
}
var d0 = new Fx();
class Ax {
  constructor() {
    const x = a;
    this[x(2279)] = {};
  }
  on(x, t) {
    const r = a;
    return x.split(" ")[r(2617)]((e) => {
      const s = r;
      this.observers[e] || (this[s(2279)][e] = /* @__PURE__ */ new Map());
      const n = this[s(2279)][e].get(t) || 0;
      this[s(2279)][e][s(780)](t, n + 1);
    }), this;
  }
  [a(2854)](x, t) {
    const r = a;
    if (this[r(2279)][x]) {
      if (!t) {
        delete this[r(2279)][x];
        return;
      }
      this[r(2279)][x][r(875)](t);
    }
  }
  [a(2256)](x, ...t) {
    const r = a;
    this[r(2279)][x] && Array[r(2047)](this[r(2279)][x].entries())[r(2617)](([s, n]) => {
      for (let i = 0; i < n; i++)
        s(...t);
    }), this[r(2279)]["*"] && Array[r(2047)](this[r(2279)]["*"][r(2634)]())[r(2617)](([s, n]) => {
      for (let i = 0; i < n; i++)
        s.apply(s, [x, ...t]);
    });
  }
}
class Wa extends Ax {
  constructor(x, t = { ns: [a(1650)], defaultNS: a(1650) }) {
    const r = a;
    super(), this[r(2663)] = x || {}, this[r(2876)] = t, this[r(2876)][r(1200)] === void 0 && (this[r(2876)][r(1200)] = "."), this.options.ignoreJSONStructure === void 0 && (this[r(2876)][r(2358)] = !0);
  }
  [a(1654)](x) {
    const t = a;
    this[t(2876)].ns.indexOf(x) < 0 && this[t(2876)].ns[t(3062)](x);
  }
  [a(667)](x) {
    const t = a, r = this[t(2876)].ns[t(2436)](x);
    r > -1 && this[t(2876)].ns.splice(r, 1);
  }
  [a(824)](x, t, r, e = {}) {
    var f, l;
    const s = a, n = e[s(1200)] !== void 0 ? e[s(1200)] : this[s(2876)][s(1200)], i = e[s(2358)] !== void 0 ? e.ignoreJSONStructure : this[s(2876)].ignoreJSONStructure;
    let c;
    x.indexOf(".") > -1 ? c = x.split(".") : (c = [x, t], r && (Array[s(3255)](r) ? c[s(3062)](...r) : be(r) && n ? c.push(...r[s(3263)](n)) : c[s(3062)](r)));
    const u = _x(this[s(2663)], c);
    return !u && !t && !r && x.indexOf(".") > -1 && (x = c[0], t = c[1], r = c[s(1387)](2)[s(1592)](".")), u || !i || !be(r) ? u : Jt((l = (f = this[s(2663)]) == null ? void 0 : f[x]) == null ? void 0 : l[t], r, n);
  }
  [a(507)](x, t, r, e, s = { silent: !1 }) {
    const n = a, i = s[n(1200)] !== void 0 ? s[n(1200)] : this.options.keySeparator;
    let c = [x, t];
    r && (c = c[n(2700)](i ? r[n(3263)](i) : r)), x[n(2436)](".") > -1 && (c = x[n(3263)]("."), e = t, t = c[1]), this[n(1654)](t), Ba(this[n(2663)], c, e), s[n(938)] || this[n(2256)]("added", x, t, r, e);
  }
  addResources(x, t, r, e = { silent: !1 }) {
    const s = a;
    for (const n in r)
      (be(r[n]) || Array[s(3255)](r[n])) && this[s(507)](x, t, n, r[n], { silent: !0 });
    e[s(938)] || this.emit("added", x, t, r);
  }
  [a(607)](x, t, r, e, s, n = { silent: !1, skipCopy: !1 }) {
    const i = a;
    let c = [x, t];
    x[i(2436)](".") > -1 && (c = x.split("."), e = r, r = t, t = c[1]), this[i(1654)](t);
    let u = _x(this[i(2663)], c) || {};
    n[i(1469)] || (r = JSON[i(2774)](JSON.stringify(r))), e ? Ks(u, r, s) : u = { ...u, ...r }, Ba(this[i(2663)], c, u), n[i(938)] || this[i(2256)]("added", x, t, r);
  }
  [a(855)](x, t) {
    const r = a;
    this[r(1203)](x, t) && delete this[r(2663)][x][t], this.removeNamespaces(t), this[r(2256)](r(1226), x, t);
  }
  hasResourceBundle(x, t) {
    return this[a(824)](x, t) !== void 0;
  }
  [a(2948)](x, t) {
    const r = a;
    return t || (t = this[r(2876)][r(1589)]), this.getResource(x, t);
  }
  [a(790)](x) {
    return this[a(2663)][x];
  }
  [a(3068)](x) {
    const t = a, r = this[t(790)](x);
    return !!(r && Object[t(2123)](r) || []).find((s) => r[s] && Object[t(2123)](r[s])[t(2710)] > 0);
  }
  [a(1363)]() {
    return this[a(2663)];
  }
}
var Gs = { processors: {}, addPostProcessor(o) {
  const x = a;
  this[x(3234)][o[x(2641)]] = o;
}, handle(o, x, t, r, e) {
  const s = a;
  return o[s(2617)]((n) => {
    var c;
    const i = s;
    x = ((c = this[i(3234)][n]) == null ? void 0 : c[i(2383)](x, t, r, e)) ?? x;
  }), x;
} };
const Js = Symbol("i18next/PATH_KEY");
function Pi() {
  const o = a, x = [], t = Object[o(1602)](null);
  let r;
  return t[o(674)] = (e, s) => {
    var i;
    const n = o;
    return (i = r == null ? void 0 : r[n(1002)]) == null || i.call(r), s === Js ? x : (x.push(s), r = Proxy[n(1205)](e, t), r[n(1355)]);
  }, Proxy[o(1205)](Object[o(1602)](null), t)[o(1355)];
}
function Qt(o, x) {
  const t = a, { [Js]: r } = o(Pi());
  return r[t(1592)]((x == null ? void 0 : x[t(1200)]) ?? ".");
}
const Za = {}, Zx = (o) => !be(o) && typeof o !== a(3106) && typeof o !== a(2665);
class Tx extends Ax {
  constructor(x, t = {}) {
    const r = a;
    super(), di([r(3082), r(1476), "pluralResolver", r(1896), r(1577), r(911), r(2254)], x, this), this.options = t, this.options[r(1200)] === void 0 && (this[r(2876)][r(1200)] = "."), this.logger = d0[r(1602)](r(1781));
  }
  [a(759)](x) {
    x && (this.language = x);
  }
  exists(x, t = { interpolation: {} }) {
    const r = a, e = { ...t };
    if (x == null) return !1;
    const s = this[r(2457)](x, e);
    if ((s == null ? void 0 : s[r(2475)]) === void 0) return !1;
    const n = Zx(s.res);
    return !(e[r(984)] === !1 && n);
  }
  [a(827)](x, t) {
    const r = a;
    let e = t.nsSeparator !== void 0 ? t.nsSeparator : this[r(2876)][r(1707)];
    e === void 0 && (e = ":");
    const s = t[r(1200)] !== void 0 ? t[r(1200)] : this.options[r(1200)];
    let n = t.ns || this.options[r(1589)] || [];
    const i = e && x[r(2436)](e) > -1, c = !this.options[r(1204)] && !t[r(1200)] && !this.options[r(1354)] && !t[r(1707)] && !Si(x, e, s);
    if (i && !c) {
      const u = x[r(2314)](this[r(1896)].nestingRegexp);
      if (u && u[r(2710)] > 0) return { key: x, namespaces: be(n) ? [n] : n };
      const f = x[r(3263)](e);
      (e !== s || e === s && this[r(2876)].ns[r(2436)](f[0]) > -1) && (n = f[r(1263)]()), x = f[r(1592)](s);
    }
    return { key: x, namespaces: be(n) ? [n] : n };
  }
  [a(1543)](x, t, r) {
    const e = a;
    let s = typeof t === e(1304) ? { ...t } : t;
    if (typeof s !== e(1304) && this[e(2876)].overloadTranslationOptionHandler && (s = this[e(2876)][e(2556)](arguments)), typeof s === e(1304) && (s = { ...s }), s || (s = {}), x == null) return "";
    typeof x == "function" && (x = Qt(x, { ...this[e(2876)], ...s })), Array[e(3255)](x) || (x = [String(x)]);
    const n = s[e(1766)] !== void 0 ? s[e(1766)] : this[e(2876)].returnDetails, i = s[e(1200)] !== void 0 ? s.keySeparator : this[e(2876)][e(1200)], { key: c, namespaces: u } = this[e(827)](x[x[e(2710)] - 1], s), f = u[u.length - 1];
    let l = s[e(1707)] !== void 0 ? s.nsSeparator : this[e(2876)].nsSeparator;
    l === void 0 && (l = ":");
    const d = s[e(3164)] || this[e(3090)], g = s[e(1173)] || this.options[e(1173)];
    if ((d == null ? void 0 : d[e(1945)]()) === "cimode")
      return g ? n ? { res: "" + f + l + c, usedKey: c, exactUsedKey: c, usedLng: d, usedNS: f, usedParams: this[e(2555)](s) } : "" + f + l + c : n ? { res: c, usedKey: c, exactUsedKey: c, usedLng: d, usedNS: f, usedParams: this.getUsedParamsDetails(s) } : c;
    const h = this.resolve(x, s);
    let m = h == null ? void 0 : h[e(2475)];
    const v = (h == null ? void 0 : h[e(527)]) || c, k = (h == null ? void 0 : h[e(2752)]) || c, P = [e(2646), e(1828), e(1769)], T = s.joinArrays !== void 0 ? s[e(2960)] : this[e(2876)][e(2960)], q = !this[e(911)] || this[e(911)][e(1550)], R = s[e(1758)] !== void 0 && !be(s[e(1758)]), E = Tx[e(3193)](s), C = R ? this[e(2041)].getSuffix(d, s[e(1758)], s) : "", A = s[e(3097)] && R ? this[e(2041)].getSuffix(d, s[e(1758)], { ordinal: !1 }) : "", O = R && !s[e(3097)] && s[e(1758)] === 0, M = O && s[e(2074) + this[e(2876)][e(2850)] + e(699)] || s[e(2074) + C] || s[e(2074) + A] || s.defaultValue;
    let _ = m;
    q && !m && E && (_ = M);
    const N = Zx(_), z = Object[e(2587)][e(2732)].apply(_);
    if (q && _ && N && P[e(2436)](z) < 0 && !(be(T) && Array[e(3255)](_))) {
      if (!s[e(984)] && !this[e(2876)][e(984)]) {
        !this[e(2876)][e(2679)] && this[e(2303)][e(1114)](e(2570));
        const U = this[e(2876)][e(2679)] ? this[e(2876)][e(2679)](v, _, { ...s, ns: u }) : e(1942) + c + " (" + this[e(3090)] + e(2166);
        return n ? (h.res = U, h[e(525)] = this.getUsedParamsDetails(s), h) : U;
      }
      if (i) {
        const U = Array[e(3255)](_), H = U ? [] : {}, G = U ? k : v;
        for (const re in _)
          if (Object[e(2587)][e(1315)].call(_, re)) {
            const se = "" + G + i + re;
            E && !m ? H[re] = this[e(1543)](se, { ...s, defaultValue: Zx(M) ? M[re] : void 0, joinArrays: !1, ns: u }) : H[re] = this.translate(se, { ...s, joinArrays: !1, ns: u }), H[re] === se && (H[re] = _[re]);
          }
        m = H;
      }
    } else if (q && be(T) && Array.isArray(m))
      m = m[e(1592)](T), m && (m = this[e(1700)](m, x, s, r));
    else {
      let U = !1, H = !1;
      !this[e(1075)](m) && E && (U = !0, m = M), !this[e(1075)](m) && (H = !0, m = c);
      const G = s[e(1729)] || this[e(2876)][e(1729)], re = G && H ? void 0 : m, se = E && M !== m && this[e(2876)][e(2672)];
      if (H || U || se) {
        if (this.logger.log(se ? "updateKey" : e(799), d, f, c, se ? M : m), i) {
          const Se = this[e(2457)](c, { ...s, keySeparator: !1 });
          Se && Se[e(2475)] && this.logger[e(1114)](e(2321));
        }
        let fe = [];
        const de = this[e(1476)].getFallbackCodes(this.options[e(1338)], s.lng || this[e(3090)]);
        if (this[e(2876)][e(2281)] === e(2575) && de && de[0]) for (let Se = 0; Se < de[e(2710)]; Se++)
          fe.push(de[Se]);
        else this[e(2876)].saveMissingTo === "all" ? fe = this[e(1476)][e(2825)](s.lng || this[e(3090)]) : fe.push(s.lng || this[e(3090)]);
        const le = (Se, _e, Me) => {
          var D;
          const Fe = e, Je = E && Me !== m ? Me : re;
          this[Fe(2876)][Fe(2340)] ? this[Fe(2876)][Fe(2340)](Se, f, _e, Je, se, s) : (D = this[Fe(1577)]) != null && D[Fe(3083)] && this.backendConnector[Fe(3083)](Se, f, _e, Je, se, s), this[Fe(2256)]("missingKey", Se, f, _e, m);
        };
        this[e(2876)][e(3083)] && (this[e(2876)][e(673)] && R ? fe[e(2617)]((Se) => {
          const _e = e, Me = this[_e(2041)][_e(2033)](Se, s);
          O && s[_e(2074) + this[_e(2876)][_e(2850)] + _e(699)] && Me.indexOf(this[_e(2876)].pluralSeparator + _e(699)) < 0 && Me[_e(3062)](this[_e(2876)].pluralSeparator + _e(699)), Me.forEach((Fe) => {
            const Je = _e;
            le([Se], c + Fe, s[Je(2074) + Fe] || M);
          });
        }) : le(fe, c, M));
      }
      m = this[e(1700)](m, x, s, h, r), H && m === c && this[e(2876)][e(2489)] && (m = "" + f + l + c), (H || U) && this[e(2876)][e(3232)] && (m = this[e(2876)].parseMissingKeyHandler(this.options.appendNamespaceToMissingKey ? "" + f + l + c : c, U ? m : void 0, s));
    }
    return n ? (h[e(2475)] = m, h[e(525)] = this.getUsedParamsDetails(s), h) : m;
  }
  [a(1700)](x, t, r, e, s) {
    var u, f;
    const n = a;
    if ((u = this[n(911)]) != null && u.parse) x = this[n(911)].parse(x, { ...this[n(2876)].interpolation[n(1490)], ...r }, r[n(3164)] || this[n(3090)] || e[n(2282)], e.usedNS, e[n(527)], { resolved: e });
    else if (!r.skipInterpolation) {
      r[n(1647)] && this.interpolator.init({ ...r, interpolation: { ...this.options.interpolation, ...r[n(1647)] } });
      const l = be(x) && (((f = r == null ? void 0 : r[n(1647)]) == null ? void 0 : f[n(940)]) !== void 0 ? r[n(1647)][n(940)] : this.options.interpolation[n(940)]);
      let d;
      if (l) {
        const h = x[n(2314)](this[n(1896)][n(2759)]);
        d = h && h[n(2710)];
      }
      let g = r[n(1521)] && !be(r[n(1521)]) ? r[n(1521)] : r;
      if (this[n(2876)].interpolation[n(1490)] && (g = { ...this[n(2876)][n(1647)].defaultVariables, ...g }), x = this[n(1896)][n(2925)](x, g, r[n(3164)] || this[n(3090)] || e.usedLng, r), l) {
        const h = x[n(2314)](this[n(1896)][n(2759)]), m = h && h.length;
        d < m && (r.nest = !1);
      }
      !r.lng && e && e.res && (r[n(3164)] = this[n(3090)] || e[n(2282)]), r[n(1365)] !== !1 && (x = this[n(1896)].nest(x, (...h) => {
        const m = n;
        return (s == null ? void 0 : s[0]) === h[0] && !r[m(1181)] ? (this.logger.warn("It seems you are nesting recursively key: " + h[0] + m(2048) + t[0]), null) : this[m(1543)](...h, t);
      }, r)), r[n(1647)] && this[n(1896)][n(2837)]();
    }
    const i = r[n(2206)] || this[n(2876)][n(2206)], c = be(i) ? [i] : i;
    return x != null && (c != null && c[n(2710)]) && r[n(2812)] !== !1 && (x = Gs[n(2655)](c, x, t, this[n(2876)] && this[n(2876)][n(1795)] ? { i18nResolved: { ...e, usedParams: this[n(2555)](r) }, ...r } : r, this)), x;
  }
  [a(2457)](x, t = {}) {
    const r = a;
    let e, s, n, i, c;
    return be(x) && (x = [x]), x[r(2617)]((u) => {
      const f = r;
      if (this.isValidLookup(e)) return;
      const l = this.extractFromKey(u, t), d = l[f(480)];
      s = d;
      let g = l[f(2470)];
      this[f(2876)][f(1555)] && (g = g.concat(this.options.fallbackNS));
      const h = t[f(1758)] !== void 0 && !be(t.count), m = h && !t[f(3097)] && t[f(1758)] === 0, v = t.context !== void 0 && (be(t[f(1181)]) || typeof t[f(1181)] === f(2665)) && t[f(1181)] !== "", k = t[f(2941)] ? t[f(2941)] : this[f(1476)][f(2825)](t.lng || this[f(3090)], t[f(1338)]);
      g[f(2617)]((P) => {
        var q, R;
        const T = f;
        this[T(1075)](e) || (c = P, !Za[k[0] + "-" + P] && ((q = this.utils) != null && q[T(3254)]) && !((R = this[T(2254)]) != null && R[T(3254)](c)) && (Za[k[0] + "-" + P] = !0, this[T(2303)][T(1114)](T(829) + s + '" for languages "' + k.join(", ") + T(2117) + c + '" was not yet loaded', T(1012))), k[T(2617)]((E) => {
          var M;
          const C = T;
          if (this[C(1075)](e)) return;
          i = E;
          const A = [d];
          if ((M = this[C(911)]) != null && M[C(2019)]) this[C(911)][C(2019)](A, d, E, P, t);
          else {
            let _;
            h && (_ = this[C(2041)].getSuffix(E, t[C(1758)], t));
            const N = this[C(2876)].pluralSeparator + C(699), z = this[C(2876)].pluralSeparator + C(3097) + this[C(2876)][C(2850)];
            if (h && (t.ordinal && _[C(2436)](z) === 0 && A[C(3062)](d + _[C(1521)](z, this.options.pluralSeparator)), A.push(d + _), m && A[C(3062)](d + N)), v) {
              const U = "" + d + (this.options[C(2005)] || "_") + t[C(1181)];
              A.push(U), h && (t[C(3097)] && _[C(2436)](z) === 0 && A.push(U + _[C(1521)](z, this[C(2876)].pluralSeparator)), A[C(3062)](U + _), m && A.push(U + N));
            }
          }
          let O;
          for (; O = A[C(2900)](); )
            !this[C(1075)](e) && (n = O, e = this[C(824)](E, P, O, t));
        }));
      });
    }), { res: e, usedKey: s, exactUsedKey: n, usedLng: i, usedNS: c };
  }
  isValidLookup(x) {
    const t = a;
    return x !== void 0 && !(!this.options.returnNull && x === null) && !(!this.options[t(2119)] && x === "");
  }
  [a(824)](x, t, r, e = {}) {
    var n;
    const s = a;
    return (n = this[s(911)]) != null && n[s(824)] ? this[s(911)][s(824)](x, t, r, e) : this[s(3082)][s(824)](x, t, r, e);
  }
  [a(2555)](x = {}) {
    const t = a, r = [t(2074), t(3097), t(1181), t(1521), t(3164), t(2941), t(1338), "ns", t(1200), t(1707), t(984), t(1766), t(2960), t(2206), "interpolation"], e = x.replace && !be(x[t(1521)]);
    let s = e ? x[t(1521)] : x;
    if (e && typeof x[t(1758)] !== t(993) && (s[t(1758)] = x[t(1758)]), this.options[t(1647)].defaultVariables && (s = { ...this[t(2876)][t(1647)][t(1490)], ...s }), !e) {
      s = { ...s };
      for (const n of r)
        delete s[n];
    }
    return s;
  }
  static [a(3193)](x) {
    const t = a, r = t(2074);
    for (const e in x)
      if (Object[t(2587)][t(1315)][t(1522)](x, e) && r === e.substring(0, r[t(2710)]) && x[e] !== void 0) return !0;
    return !1;
  }
}
function K(o, x) {
  return o = o - 480, yx()[o];
}
class Ka {
  constructor(x) {
    const t = a;
    this.options = x, this.supportedLngs = this.options.supportedLngs || !1, this[t(2303)] = d0[t(1602)](t(1476));
  }
  [a(701)](x) {
    const t = a;
    if (x = nx(x), !x || x[t(2436)]("-") < 0) return null;
    const r = x[t(3263)]("-");
    return r[t(2710)] === 2 || (r[t(2900)](), r[r[t(2710)] - 1][t(1945)]() === "x") ? null : this.formatLanguageCode(r[t(1592)]("-"));
  }
  [a(594)](x) {
    const t = a;
    if (x = nx(x), !x || x[t(2436)]("-") < 0) return x;
    const r = x[t(3263)]("-");
    return this[t(2453)](r[0]);
  }
  formatLanguageCode(x) {
    const t = a;
    if (be(x) && x[t(2436)]("-") > -1) {
      let r;
      try {
        r = Intl[t(2816)](x)[0];
      } catch {
      }
      return r && this[t(2876)].lowerCaseLng && (r = r[t(1945)]()), r || (this[t(2876)][t(3002)] ? x.toLowerCase() : x);
    }
    return this.options[t(1327)] || this[t(2876)][t(3002)] ? x[t(1945)]() : x;
  }
  [a(1149)](x) {
    const t = a;
    return (this[t(2876)][t(1429)] === "languageOnly" || this.options[t(1397)]) && (x = this.getLanguagePartFromCode(x)), !this[t(2159)] || !this[t(2159)][t(2710)] || this[t(2159)][t(2436)](x) > -1;
  }
  [a(1252)](x) {
    const t = a;
    if (!x) return null;
    let r;
    return x[t(2617)]((e) => {
      const s = t;
      if (r) return;
      const n = this[s(2453)](e);
      (!this[s(2876)][s(2159)] || this[s(1149)](n)) && (r = n);
    }), !r && this[t(2876)][t(2159)] && x[t(2617)]((e) => {
      const s = t;
      if (r) return;
      const n = this[s(701)](e);
      if (this[s(1149)](n)) return r = n;
      const i = this[s(594)](e);
      if (this[s(1149)](i)) return r = i;
      r = this.options[s(2159)][s(3146)]((c) => {
        const u = s;
        if (c === i) return c;
        if (!(c[u(2436)]("-") < 0 && i.indexOf("-") < 0) && (c[u(2436)]("-") > 0 && i[u(2436)]("-") < 0 && c[u(672)](0, c[u(2436)]("-")) === i || c[u(2436)](i) === 0 && i[u(2710)] > 1))
          return c;
      });
    }), r || (r = this.getFallbackCodes(this[t(2876)][t(1338)])[0]), r;
  }
  [a(1873)](x, t) {
    const r = a;
    if (!x) return [];
    if (typeof x === r(1936) && (x = x(t)), be(x) && (x = [x]), Array.isArray(x)) return x;
    if (!t) return x.default || [];
    let e = x[t];
    return e || (e = x[this[r(701)](t)]), e || (e = x[this[r(2453)](t)]), e || (e = x[this[r(594)](t)]), e || (e = x[r(2485)]), e || [];
  }
  [a(2825)](x, t) {
    const r = a, e = this[r(1873)]((t === !1 ? [] : t) || this[r(2876)][r(1338)] || [], x), s = [], n = (i) => {
      const c = r;
      i && (this.isSupportedCode(i) ? s[c(3062)](i) : this[c(2303)][c(1114)](c(2322) + i));
    };
    return be(x) && (x.indexOf("-") > -1 || x[r(2436)]("_") > -1) ? (this.options[r(1429)] !== r(1557) && n(this[r(2453)](x)), this[r(2876)][r(1429)] !== r(1557) && this[r(2876)][r(1429)] !== r(1196) && n(this[r(701)](x)), this[r(2876)][r(1429)] !== r(1196) && n(this[r(594)](x))) : be(x) && n(this[r(2453)](x)), e[r(2617)]((i) => {
      const c = r;
      s.indexOf(i) < 0 && n(this[c(2453)](i));
    }), s;
  }
}
const Ga = { zero: 0, one: 1, two: 2, few: 3, many: 4, other: 5 }, Ja = { select: (o) => a(o === 1 ? 2836 : 2420), resolvedOptions: () => ({ pluralCategories: [a(2836), "other"] }) };
class Ii {
  constructor(x, t = {}) {
    const r = a;
    this[r(1476)] = x, this[r(2876)] = t, this[r(2303)] = d0[r(1602)](r(2041)), this.pluralRulesCache = {};
  }
  [a(1288)](x, t) {
    const r = a;
    this[r(2293)][x] = t;
  }
  clearCache() {
    const x = a;
    this[x(2782)] = {};
  }
  [a(1106)](x, t = {}) {
    const r = a, e = nx(x === "dev" ? "en" : x), s = t[r(3097)] ? "ordinal" : r(3105), n = JSON[r(1031)]({ cleanedCode: e, type: s });
    if (n in this[r(2782)]) return this[r(2782)][n];
    let i;
    try {
      i = new Intl[r(1582)](e, { type: s });
    } catch {
      if (!Intl) return this.logger[r(490)]("No Intl support, please use an Intl polyfill!"), Ja;
      if (!x[r(2314)](/-|_/)) return Ja;
      const u = this[r(1476)].getLanguagePartFromCode(x);
      i = this.getRule(u, t);
    }
    return this[r(2782)][n] = i, i;
  }
  [a(2095)](x, t = {}) {
    const r = a;
    let e = this.getRule(x, t);
    return e || (e = this.getRule(r(1541), t)), (e == null ? void 0 : e[r(1291)]()[r(1900)].length) > 1;
  }
  getPluralFormsOfKey(x, t, r = {}) {
    return this[a(2033)](x, r).map((s) => "" + t + s);
  }
  [a(2033)](x, t = {}) {
    const r = a;
    let e = this[r(1106)](x, t);
    return e || (e = this.getRule(r(1541), t)), e ? e[r(1291)]()[r(1900)][r(841)]((s, n) => Ga[s] - Ga[n]).map((s) => "" + this.options[r(882)] + (t[r(3097)] ? r(3097) + this[r(2876)][r(882)] : "") + s) : [];
  }
  [a(2055)](x, t, r = {}) {
    const e = a, s = this[e(1106)](x, r);
    return s ? "" + this[e(2876)][e(882)] + (r[e(3097)] ? e(3097) + this[e(2876)][e(882)] : "") + s.select(t) : (this[e(2303)][e(1114)](e(3001) + x), this.getSuffix(e(1541), t, r));
  }
}
const Qa = (o, x, t, r = ".", e = !0) => {
  let s = mi(o, x, t);
  return !s && e && be(t) && (s = Jt(o, t, r), s === void 0 && (s = Jt(x, t, r))), s;
}, Kx = (o) => o[a(1521)](/\$/g, a(1017));
class Xa {
  constructor(x = {}) {
    var r;
    const t = a;
    this[t(2303)] = d0[t(1602)]("interpolator"), this[t(2876)] = x, this[t(802)] = ((r = x == null ? void 0 : x.interpolation) == null ? void 0 : r[t(802)]) || ((e) => e), this[t(1775)](x);
  }
  [a(1775)](x = {}) {
    const t = a;
    x[t(1647)] || (x[t(1647)] = { escapeValue: !0 });
    const { escape: r, escapeValue: e, useRawValueToEscape: s, prefix: n, prefixEscaped: i, suffix: c, suffixEscaped: u, formatSeparator: f, unescapeSuffix: l, unescapePrefix: d, nestingPrefix: g, nestingPrefixEscaped: h, nestingSuffix: m, nestingSuffixEscaped: v, nestingOptionsSeparator: k, maxReplaces: P, alwaysFormat: T } = x[t(1647)];
    this[t(2133)] = r !== void 0 ? r : gi, this[t(2958)] = e !== void 0 ? e : !0, this[t(1485)] = s !== void 0 ? s : !1, this.prefix = n ? U0(n) : i || "{{", this.suffix = c ? U0(c) : u || "}}", this[t(2426)] = f || ",", this[t(1865)] = l ? "" : d || "-", this[t(2479)] = this[t(1865)] ? "" : l || "", this.nestingPrefix = g ? U0(g) : h || U0("$t("), this[t(2616)] = m ? U0(m) : v || U0(")"), this[t(1735)] = k || ",", this[t(2316)] = P || 1e3, this.alwaysFormat = T !== void 0 ? T : !1, this[t(2179)]();
  }
  [a(2837)]() {
    const x = a;
    this[x(2876)] && this.init(this[x(2876)]);
  }
  resetRegExp() {
    const x = a, t = (r, e) => {
      const s = K;
      return (r == null ? void 0 : r.source) === e ? (r[s(1855)] = 0, r) : new RegExp(e, "g");
    };
    this.regexp = t(this.regexp, this[x(632)] + x(2810) + this[x(744)]), this[x(2538)] = t(this.regexpUnescape, "" + this.prefix + this[x(1865)] + x(2810) + this.unescapeSuffix + this[x(744)]), this.nestingRegexp = t(this.nestingRegexp, this[x(2864)] + x(818) + this.nestingSuffix);
  }
  interpolate(x, t, r, e) {
    var h;
    const s = a;
    let n, i, c;
    const u = this.options && this[s(2876)].interpolation && this.options[s(1647)][s(1490)] || {}, f = (m) => {
      const v = s;
      if (m.indexOf(this[v(2426)]) < 0) {
        const q = Qa(t, u, m, this[v(2876)][v(1200)], this.options[v(2358)]);
        return this.alwaysFormat ? this[v(802)](q, void 0, r, { ...e, ...t, interpolationkey: m }) : q;
      }
      const k = m[v(3263)](this[v(2426)]), P = k.shift().trim(), T = k[v(1592)](this[v(2426)])[v(2337)]();
      return this.format(Qa(t, u, P, this[v(2876)][v(1200)], this[v(2876)].ignoreJSONStructure), T, r, { ...e, ...t, interpolationkey: P });
    };
    this[s(2179)]();
    const l = (e == null ? void 0 : e.missingInterpolationHandler) || this.options.missingInterpolationHandler, d = ((h = e == null ? void 0 : e[s(1647)]) == null ? void 0 : h[s(940)]) !== void 0 ? e.interpolation.skipOnVariables : this[s(2876)][s(1647)][s(940)];
    return [{ regex: this[s(2538)], safeValue: (m) => Kx(m) }, { regex: this.regexp, safeValue: (m) => this[s(2958)] ? Kx(this.escape(m)) : Kx(m) }][s(2617)]((m) => {
      const v = s;
      for (c = 0; n = m[v(2338)].exec(x); ) {
        const k = n[1].trim();
        if (i = f(k), i === void 0)
          if (typeof l === v(1936)) {
            const T = l(x, n, e);
            i = be(T) ? T : "";
          } else if (e && Object.prototype[v(1315)].call(e, k)) i = "";
          else if (d) {
            i = n[0];
            continue;
          } else this.logger[v(1114)](v(698) + k + v(2537) + x), i = "";
        else !be(i) && !this[v(1485)] && (i = za(i));
        const P = m[v(1271)](i);
        if (x = x.replace(n[0], P), d ? (m[v(2338)][v(1855)] += i[v(2710)], m.regex[v(1855)] -= n[0][v(2710)]) : m.regex[v(1855)] = 0, c++, c >= this.maxReplaces) break;
      }
    }), x;
  }
  [a(1365)](x, t, r = {}) {
    const e = a;
    let s, n, i;
    const c = (u, f) => {
      const l = K, d = this.nestingOptionsSeparator;
      if (u.indexOf(d) < 0) return u;
      const g = u[l(3263)](new RegExp(d + l(2098)));
      let h = "{" + g[1];
      u = g[0], h = this.interpolate(h, i);
      const m = h[l(2314)](/'/g), v = h.match(/"/g);
      (((m == null ? void 0 : m[l(2710)]) ?? 0) % 2 === 0 && !v || v[l(2710)] % 2 !== 0) && (h = h[l(1521)](/'/g, '"'));
      try {
        i = JSON[l(2774)](h), f && (i = { ...f, ...i });
      } catch (k) {
        return this[l(2303)].warn(l(3197) + u, k), "" + u + d + h;
      }
      return i[l(2074)] && i[l(2074)][l(2436)](this[l(632)]) > -1 && delete i.defaultValue, u;
    };
    for (; s = this[e(2759)][e(2125)](x); ) {
      let u = [];
      i = { ...r }, i = i[e(1521)] && !be(i[e(1521)]) ? i[e(1521)] : i, i[e(2812)] = !1, delete i.defaultValue;
      const f = /{.*}/[e(2346)](s[1]) ? s[1][e(2347)]("}") + 1 : s[1][e(2436)](this[e(2426)]);
      if (f !== -1 && (u = s[1][e(1387)](f)[e(3263)](this.formatSeparator).map((l) => l[e(2337)]()).filter(Boolean), s[1] = s[1][e(1387)](0, f)), n = t(c[e(1522)](this, s[1][e(2337)](), i), i), n && s[0] === x && !be(n)) return n;
      be(n) || (n = za(n)), !n && (this.logger[e(1114)](e(787) + s[1] + " for nesting " + x), n = ""), u[e(2710)] && (n = u.reduce((l, d) => this[e(802)](l, d, r[e(3164)], { ...r, interpolationkey: s[1][e(2337)]() }), n[e(2337)]())), x = x[e(1521)](s[0], n), this[e(979)].lastIndex = 0;
    }
    return x;
  }
}
const Ei = (o) => {
  const x = a;
  let t = o[x(1945)]()[x(2337)]();
  const r = {};
  if (o[x(2436)]("(") > -1) {
    const e = o.split("(");
    t = e[0].toLowerCase()[x(2337)]();
    const s = e[1][x(672)](0, e[1][x(2710)] - 1);
    t === x(1292) && s[x(2436)](":") < 0 ? r[x(1292)] || (r[x(1292)] = s.trim()) : t === x(1637) && s[x(2436)](":") < 0 ? r[x(1671)] || (r.range = s.trim()) : s[x(3263)](";")[x(2617)]((i) => {
      const c = x;
      if (i) {
        const [u, ...f] = i.split(":"), l = f[c(1592)](":").trim().replace(/^'+|'+$/g, ""), d = u.trim();
        r[d] || (r[d] = l), l === c(2657) && (r[d] = !1), l === "true" && (r[d] = !0), isNaN(l) || (r[d] = parseInt(l, 10));
      }
    });
  }
  return { formatName: t, formatOptions: r };
}, Ya = (o) => {
  const x = {};
  return (t, r, e) => {
    const s = K;
    let n = e;
    e && e[s(2951)] && e[s(3102)] && e[s(3102)][e.interpolationkey] && e[e[s(2951)]] && (n = { ...n, [e[s(2951)]]: void 0 });
    const i = r + JSON[s(1031)](n);
    let c = x[i];
    return !c && (c = o(nx(r), e), x[i] = c), c(t);
  };
}, Ri = (o) => (x, t, r) => o(nx(t), r)(x);
class Ci {
  constructor(x = {}) {
    const t = a;
    this.logger = d0[t(1602)](t(1934)), this[t(2876)] = x, this[t(1775)](x);
  }
  [a(1775)](x, t = { interpolation: {} }) {
    const r = a;
    this.formatSeparator = t[r(1647)][r(2426)] || ",";
    const e = t.cacheInBuiltFormats ? Ya : Ri;
    this[r(3155)] = { number: e((s, n) => {
      const i = r, c = new Intl[i(1240)](s, { ...n });
      return (u) => c.format(u);
    }), currency: e((s, n) => {
      const i = r, c = new Intl[i(1240)](s, { ...n, style: "currency" });
      return (u) => c[i(802)](u);
    }), datetime: e((s, n) => {
      const i = r, c = new Intl[i(548)](s, { ...n });
      return (u) => c[i(802)](u);
    }), relativetime: e((s, n) => {
      const i = r, c = new Intl.RelativeTimeFormat(s, { ...n });
      return (u) => c[i(802)](u, n[i(1671)] || "day");
    }), list: e((s, n) => {
      const i = r, c = new Intl[i(926)](s, { ...n });
      return (u) => c[i(802)](u);
    }) };
  }
  [a(1580)](x, t) {
    const r = a;
    this[r(3155)][x[r(1945)]()[r(2337)]()] = t;
  }
  [a(1402)](x, t) {
    const r = a;
    this[r(3155)][x[r(1945)]()[r(2337)]()] = Ya(t);
  }
  [a(802)](x, t, r, e = {}) {
    const s = a, n = t[s(3263)](this[s(2426)]);
    if (n[s(2710)] > 1 && n[0][s(2436)]("(") > 1 && n[0][s(2436)](")") < 0 && n.find((c) => c[s(2436)](")") > -1)) {
      const c = n[s(3162)]((u) => u.indexOf(")") > -1);
      n[0] = [n[0], ...n[s(2881)](1, c)][s(1592)](this[s(2426)]);
    }
    return n[s(1630)]((c, u) => {
      var g;
      const f = s, { formatName: l, formatOptions: d } = Ei(u);
      if (this[f(3155)][l]) {
        let h = c;
        try {
          const m = ((g = e == null ? void 0 : e[f(3102)]) == null ? void 0 : g[e[f(2951)]]) || {}, v = m[f(1225)] || m[f(3164)] || e[f(1225)] || e[f(3164)] || r;
          h = this.formats[l](c, v, { ...d, ...e, ...m });
        } catch (m) {
          this[f(2303)][f(1114)](m);
        }
        return h;
      } else this[f(2303)].warn(f(743) + l);
      return c;
    }, x);
  }
}
const _i = (o, x) => {
  const t = a;
  o.pending[x] !== void 0 && (delete o[t(514)][x], o.pendingCount--);
};
class Fi extends Ax {
  constructor(x, t, r, e = {}) {
    var n, i;
    const s = a;
    super(), this[s(1231)] = x, this[s(872)] = t, this[s(1791)] = r, this.languageUtils = r.languageUtils, this[s(2876)] = e, this.logger = d0.create("backendConnector"), this[s(1640)] = [], this[s(1894)] = e[s(1894)] || 10, this[s(1933)] = 0, this[s(1579)] = e[s(1579)] >= 0 ? e[s(1579)] : 5, this[s(2344)] = e[s(2344)] >= 1 ? e[s(2344)] : 350, this[s(3122)] = {}, this.queue = [], (i = (n = this[s(1231)]) == null ? void 0 : n[s(1775)]) == null || i.call(n, r, e[s(1231)], e);
  }
  [a(3225)](x, t, r, e) {
    const s = a, n = {}, i = {}, c = {}, u = {};
    return x.forEach((f) => {
      let l = !0;
      t.forEach((d) => {
        const g = K, h = f + "|" + d;
        !r[g(1646)] && this[g(872)][g(1203)](f, d) ? this[g(3122)][h] = 2 : this.state[h] < 0 || (this[g(3122)][h] === 1 ? i[h] === void 0 && (i[h] = !0) : (this.state[h] = 1, l = !1, i[h] === void 0 && (i[h] = !0), n[h] === void 0 && (n[h] = !0), u[d] === void 0 && (u[d] = !0)));
      }), l || (c[f] = !0);
    }), (Object[s(2123)](n).length || Object.keys(i)[s(2710)]) && this[s(2284)][s(3062)]({ pending: i, pendingCount: Object[s(2123)](i)[s(2710)], loaded: {}, errors: [], callback: e }), { toLoad: Object[s(2123)](n), pending: Object[s(2123)](i), toLoadLanguages: Object[s(2123)](c), toLoadNamespaces: Object[s(2123)](u) };
  }
  [a(1770)](x, t, r) {
    const e = a, s = x[e(3263)]("|"), n = s[0], i = s[1];
    t && this[e(2256)](e(1969), n, i, t), !t && r && this[e(872)].addResourceBundle(n, i, r, void 0, void 0, { skipCopy: !0 }), this.state[x] = t ? -1 : 2, t && r && (this[e(3122)][x] = 0);
    const c = {};
    this[e(2284)][e(2617)]((u) => {
      const f = e;
      pi(u[f(1770)], [n], i), _i(u, x), t && u[f(2800)][f(3062)](t), u.pendingCount === 0 && !u.done && (Object[f(2123)](u[f(1770)])[f(2617)]((l) => {
        const d = f;
        c[l] || (c[l] = {});
        const g = u[d(1770)][l];
        g[d(2710)] && g[d(2617)]((h) => {
          c[l][h] === void 0 && (c[l][h] = !0);
        });
      }), u[f(1463)] = !0, u[f(2800)][f(2710)] ? u[f(3253)](u[f(2800)]) : u[f(3253)]());
    }), this[e(2256)](e(1770), c), this[e(2284)] = this[e(2284)][e(2581)]((u) => !u.done);
  }
  [a(953)](x, t, r, e = 0, s = this[a(2344)], n) {
    const i = a;
    if (!x[i(2710)]) return n(null, {});
    if (this.readingCalls >= this[i(1894)]) {
      this.waitingReads[i(3062)]({ lng: x, ns: t, fcName: r, tried: e, wait: s, callback: n });
      return;
    }
    this[i(1933)]++;
    const c = (f, l) => {
      const d = i;
      if (this.readingCalls--, this[d(1640)][d(2710)] > 0) {
        const g = this[d(1640)][d(1263)]();
        this[d(953)](g[d(3164)], g.ns, g[d(1840)], g[d(2009)], g.wait, g[d(3253)]);
      }
      if (f && l && e < this[d(1579)]) {
        setTimeout(() => {
          this[d(953)].call(this, x, t, r, e + 1, s * 2, n);
        }, s);
        return;
      }
      n(f, l);
    }, u = this.backend[r][i(1386)](this[i(1231)]);
    if (u[i(2710)] === 2) {
      try {
        const f = u(x, t);
        f && typeof f[i(2517)] == "function" ? f[i(2517)]((l) => c(null, l))[i(742)](c) : c(null, f);
      } catch (f) {
        c(f);
      }
      return;
    }
    return u(x, t, c);
  }
  [a(1189)](x, t, r = {}, e) {
    const s = a;
    if (!this.backend) return this[s(2303)].warn(s(2637)), e && e();
    be(x) && (x = this.languageUtils.toResolveHierarchy(x)), be(t) && (t = [t]);
    const n = this[s(3225)](x, t, r, e);
    if (!n[s(2476)][s(2710)])
      return n[s(514)].length || e(), null;
    n[s(2476)][s(2617)]((i) => {
      this[s(2839)](i);
    });
  }
  [a(1429)](x, t, r) {
    this[a(1189)](x, t, {}, r);
  }
  [a(1646)](x, t, r) {
    this[a(1189)](x, t, { reload: !0 }, r);
  }
  [a(2839)](x, t = "") {
    const r = a, e = x[r(3263)]("|"), s = e[0], n = e[1];
    this[r(953)](s, n, r(953), void 0, void 0, (i, c) => {
      const u = r;
      i && this[u(2303)][u(1114)](t + "loading namespace " + n + u(998) + s + u(1289), i), !i && c && this.logger[u(1635)](t + u(3210) + n + u(998) + s, c), this[u(1770)](x, i, c);
    });
  }
  [a(3083)](x, t, r, e, s, n = {}, i = () => {
  }) {
    var u, f, l, d, g;
    const c = a;
    if ((f = (u = this.services) == null ? void 0 : u[c(2254)]) != null && f[c(3254)] && !((d = (l = this[c(1791)]) == null ? void 0 : l.utils) != null && d[c(3254)](t))) {
      this[c(2303)][c(1114)](c(1390) + r + c(1135) + t + '" was not yet loaded', c(1012));
      return;
    }
    if (!(r == null || r === "")) {
      if ((g = this[c(1231)]) != null && g.create) {
        const h = { ...n, isUpdate: s }, m = this[c(1231)].create[c(1386)](this[c(1231)]);
        if (m[c(2710)] < 6) try {
          let v;
          m[c(2710)] === 5 ? v = m(x, t, r, e, h) : v = m(x, t, r, e), v && typeof v[c(2517)] === c(1936) ? v.then((k) => i(null, k))[c(742)](i) : i(null, v);
        } catch (v) {
          i(v);
        }
        else m(x, t, r, e, i, h);
      }
      !x || !x[0] || this[c(872)][c(507)](x[0], t, r, e);
    }
  }
}
const er = () => ({ debug: !1, initAsync: !0, ns: [a(1650)], defaultNS: ["translation"], fallbackLng: ["dev"], fallbackNS: !1, supportedLngs: !1, nonExplicitSupportedLngs: !1, load: a(1096), preload: !1, simplifyPluralSuffix: !0, keySeparator: ".", nsSeparator: ":", pluralSeparator: "_", contextSeparator: "_", partialBundledLanguages: !1, saveMissing: !1, updateMissing: !1, saveMissingTo: "fallback", saveMissingPlurals: !0, missingKeyHandler: !1, missingInterpolationHandler: !1, postProcess: !1, postProcessPassResolved: !1, returnNull: !1, returnEmptyString: !0, returnObjects: !1, joinArrays: !1, returnedObjectHandler: !1, parseMissingKeyHandler: !1, appendNamespaceToMissingKey: !1, appendNamespaceToCIMode: !1, overloadTranslationOptionHandler: (o) => {
  const x = a;
  let t = {};
  if (typeof o[1] == "object" && (t = o[1]), be(o[1]) && (t[x(2074)] = o[1]), be(o[2]) && (t[x(2756)] = o[2]), typeof o[2] === x(1304) || typeof o[3] === x(1304)) {
    const r = o[3] || o[2];
    Object[x(2123)](r).forEach((e) => {
      t[e] = r[e];
    });
  }
  return t;
}, interpolation: { escapeValue: !0, format: (o) => o, prefix: "{{", suffix: "}}", formatSeparator: ",", unescapePrefix: "-", nestingPrefix: "$t(", nestingSuffix: ")", nestingOptionsSeparator: ",", maxReplaces: 1e3, skipOnVariables: !0 }, cacheInBuiltFormats: !0 }), xr = (o) => {
  var t, r;
  const x = a;
  return be(o.ns) && (o.ns = [o.ns]), be(o[x(1338)]) && (o[x(1338)] = [o.fallbackLng]), be(o[x(1555)]) && (o[x(1555)] = [o[x(1555)]]), ((r = (t = o[x(2159)]) == null ? void 0 : t.indexOf) == null ? void 0 : r.call(t, x(2789))) < 0 && (o.supportedLngs = o[x(2159)][x(2700)]([x(2789)])), typeof o[x(772)] === x(3106) && (o.initAsync = o[x(772)]), o;
}, px = () => {
}, Ti = (o) => {
  const x = a;
  Object.getOwnPropertyNames(Object[x(1209)](o))[x(2617)]((r) => {
    const e = x;
    typeof o[r] === e(1936) && (o[r] = o[r][e(1386)](o));
  });
};
class xx extends Ax {
  constructor(x = {}, t) {
    const r = a;
    if (super(), this.options = xr(x), this[r(1791)] = {}, this[r(2303)] = d0, this[r(852)] = { external: [] }, Ti(this), t && !this[r(3029)] && !x[r(873)]) {
      if (!this[r(2876)][r(1719)]) return this.init(x, t), this;
      setTimeout(() => {
        this[r(1775)](x, t);
      }, 0);
    }
  }
  [a(1775)](x = {}, t) {
    const r = a;
    this[r(1614)] = !0, typeof x == "function" && (t = x, x = {}), x[r(1589)] == null && x.ns && (be(x.ns) ? x[r(1589)] = x.ns : x.ns[r(2436)](r(1650)) < 0 && (x[r(1589)] = x.ns[0]));
    const e = er();
    this[r(2876)] = { ...e, ...this[r(2876)], ...xr(x) }, this[r(2876)][r(1647)] = { ...e[r(1647)], ...this[r(2876)].interpolation }, x[r(1200)] !== void 0 && (this.options[r(1204)] = x[r(1200)]), x.nsSeparator !== void 0 && (this.options.userDefinedNsSeparator = x[r(1707)]);
    const s = (f) => {
      const l = r;
      return f ? typeof f === l(1936) ? new f() : f : null;
    };
    if (!this[r(2876)][r(873)]) {
      this[r(852)].logger ? d0.init(s(this[r(852)][r(2303)]), this[r(2876)]) : d0.init(null, this.options);
      let f;
      this[r(852)].formatter ? f = this[r(852)][r(1934)] : f = Ci;
      const l = new Ka(this[r(2876)]);
      this[r(872)] = new Wa(this[r(2876)].resources, this[r(2876)]);
      const d = this[r(1791)];
      d[r(2303)] = d0, d[r(3082)] = this[r(872)], d[r(1476)] = l, d[r(2041)] = new Ii(l, { prepend: this[r(2876)][r(2850)], simplifyPluralSuffix: this.options[r(2942)] }), this[r(2876)][r(1647)][r(802)] && this[r(2876)][r(1647)].format !== e[r(1647)][r(802)] && this.logger[r(1925)](r(1566)), f && (!this.options[r(1647)][r(802)] || this[r(2876)][r(1647)][r(802)] === e.interpolation[r(802)]) && (d.formatter = s(f), d.formatter[r(1775)] && d[r(1934)][r(1775)](d, this[r(2876)]), this.options.interpolation[r(802)] = d.formatter.format.bind(d[r(1934)])), d[r(1896)] = new Xa(this[r(2876)]), d[r(2254)] = { hasLoadedNamespace: this.hasLoadedNamespace.bind(this) }, d.backendConnector = new Fi(s(this.modules[r(1231)]), d[r(3082)], d, this[r(2876)]), d.backendConnector.on("*", (h, ...m) => {
        this[r(2256)](h, ...m);
      }), this[r(852)][r(3114)] && (d[r(3114)] = s(this.modules[r(3114)]), d[r(3114)][r(1775)] && d.languageDetector[r(1775)](d, this[r(2876)].detection, this[r(2876)])), this[r(852)][r(911)] && (d.i18nFormat = s(this[r(852)].i18nFormat), d[r(911)][r(1775)] && d[r(911)].init(this)), this.translator = new Tx(this[r(1791)], this[r(2876)]), this[r(1781)].on("*", (h, ...m) => {
        this[r(2256)](h, ...m);
      }), this[r(852)][r(1734)][r(2617)]((h) => {
        const m = r;
        h[m(1775)] && h[m(1775)](this);
      });
    }
    if (this.format = this[r(2876)][r(1647)][r(802)], t || (t = px), this[r(2876)].fallbackLng && !this[r(1791)][r(3114)] && !this[r(2876)].lng) {
      const f = this[r(1791)].languageUtils[r(1873)](this[r(2876)].fallbackLng);
      f[r(2710)] > 0 && f[0] !== r(1541) && (this[r(2876)].lng = f[0]);
    }
    !this.services[r(3114)] && !this[r(2876)][r(3164)] && this[r(2303)][r(1114)]("init: no languageDetector is used and no lng is defined"), [r(824), "hasResourceBundle", r(2948), "getDataByLanguage"][r(2617)]((f) => {
      const l = r;
      this[f] = (...d) => this[l(872)][f](...d);
    }), ["addResource", "addResources", r(607), r(855)][r(2617)]((f) => {
      this[f] = (...l) => (this[K(872)][f](...l), this);
    });
    const c = Q0(), u = () => {
      const f = r, l = (d, g) => {
        const h = K;
        this[h(1614)] = !1, this[h(3029)] && !this[h(547)] && this.logger[h(1114)](h(1001)), this.isInitialized = !0, this[h(2876)].isClone || this[h(2303)][h(1635)](h(2683), this.options), this[h(2256)](h(2683), this[h(2876)]), c[h(2457)](g), t(d, g);
      };
      if (this.languages && !this.isInitialized) return l(null, this.t[f(1386)](this));
      this[f(759)](this[f(2876)][f(3164)], l);
    };
    return this[r(2876)][r(1673)] || !this[r(2876)].initAsync ? u() : setTimeout(u, 0), c;
  }
  [a(1264)](x, t = px) {
    var n, i;
    const r = a;
    let e = t;
    const s = be(x) ? x : this[r(3090)];
    if (typeof x === r(1936) && (e = x), !this[r(2876)][r(1673)] || this[r(2876)][r(2964)]) {
      if ((s == null ? void 0 : s[r(1945)]()) === r(2789) && (!this[r(2876)][r(1125)] || this.options[r(1125)][r(2710)] === 0)) return e();
      const c = [], u = (f) => {
        const l = r;
        if (!f || f === l(2789)) return;
        this[l(1791)][l(1476)][l(2825)](f)[l(2617)]((g) => {
          const h = l;
          g !== "cimode" && c.indexOf(g) < 0 && c[h(3062)](g);
        });
      };
      s ? u(s) : this[r(1791)][r(1476)][r(1873)](this[r(2876)].fallbackLng)[r(2617)]((l) => u(l)), (i = (n = this.options[r(1125)]) == null ? void 0 : n[r(2617)]) == null || i.call(n, (f) => u(f)), this.services[r(1577)][r(1429)](c, this.options.ns, (f) => {
        const l = r;
        !f && !this[l(1049)] && this[l(3090)] && this[l(723)](this[l(3090)]), e(f);
      });
    } else e(null);
  }
  [a(1008)](x, t, r) {
    const e = a, s = Q0();
    return typeof x == "function" && (r = x, x = void 0), typeof t === e(1936) && (r = t, t = void 0), x || (x = this[e(1056)]), t || (t = this.options.ns), r || (r = px), this[e(1791)][e(1577)].reload(x, t, (n) => {
      s[e(2457)](), r(n);
    }), s;
  }
  [a(1728)](x) {
    const t = a;
    if (!x) throw new Error("You are passing an undefined module! Please check the object you are passing to i18next.use()");
    if (!x[t(2076)]) throw new Error(t(2734));
    return x[t(2076)] === "backend" && (this[t(852)][t(1231)] = x), (x.type === t(2303) || x[t(1635)] && x[t(1114)] && x[t(490)]) && (this.modules[t(2303)] = x), x[t(2076)] === t(3114) && (this[t(852)][t(3114)] = x), x.type === t(911) && (this[t(852)].i18nFormat = x), x[t(2076)] === t(2992) && Gs[t(2349)](x), x[t(2076)] === t(1934) && (this[t(852)][t(1934)] = x), x.type === t(1175) && this[t(852)].external[t(3062)](x), this;
  }
  [a(723)](x) {
    const t = a;
    if (!(!x || !this.languages) && !([t(2789), "dev"][t(2436)](x) > -1)) {
      for (let r = 0; r < this[t(1056)][t(2710)]; r++) {
        const e = this[t(1056)][r];
        if (!([t(2789), t(1541)].indexOf(e) > -1) && this[t(872)].hasLanguageSomeTranslations(e)) {
          this[t(1049)] = e;
          break;
        }
      }
      !this[t(1049)] && this.languages[t(2436)](x) < 0 && this.store[t(3068)](x) && (this[t(1049)] = x, this[t(1056)][t(1162)](x));
    }
  }
  changeLanguage(x, t) {
    const r = a;
    this.isLanguageChangingTo = x;
    const e = Q0();
    this[r(2256)]("languageChanging", x);
    const s = (c) => {
      const u = r;
      this.language = c, this.languages = this[u(1791)][u(1476)][u(2825)](c), this[u(1049)] = void 0, this[u(723)](c);
    }, n = (c, u) => {
      const f = r;
      u ? this.isLanguageChangingTo === x && (s(u), this[f(1781)][f(759)](u), this[f(1391)] = void 0, this.emit("languageChanged", u), this[f(2303)][f(1635)](f(638), u)) : this[f(1391)] = void 0, e[f(2457)]((...l) => this.t(...l)), t && t(c, (...l) => this.t(...l));
    }, i = (c) => {
      var d, g;
      const u = r;
      !x && !c && this[u(1791)][u(3114)] && (c = []);
      const f = be(c) ? c : c && c[0], l = this[u(872)][u(3068)](f) ? f : this.services.languageUtils[u(1252)](be(c) ? [c] : c);
      l && (!this[u(3090)] && s(l), this.translator[u(3090)] || this[u(1781)][u(759)](l), (g = (d = this[u(1791)][u(3114)]) == null ? void 0 : d[u(1274)]) == null || g.call(d, l)), this[u(1264)](l, (h) => {
        n(h, l);
      });
    };
    return !x && this[r(1791)][r(3114)] && !this.services[r(3114)].async ? i(this[r(1791)][r(3114)][r(1088)]()) : !x && this[r(1791)][r(3114)] && this.services[r(3114)][r(2416)] ? this.services[r(3114)][r(1088)][r(2710)] === 0 ? this[r(1791)][r(3114)][r(1088)]()[r(2517)](i) : this[r(1791)].languageDetector[r(1088)](i) : i(x), e;
  }
  [a(3101)](x, t, r) {
    const e = a, s = (n, i, ...c) => {
      const u = K;
      let f;
      typeof i !== u(1304) ? f = this.options[u(2556)]([n, i][u(2700)](c)) : f = { ...i }, f[u(3164)] = f[u(3164)] || s[u(3164)], f[u(2941)] = f[u(2941)] || s[u(2941)], f.ns = f.ns || s.ns, f[u(1073)] !== "" && (f[u(1073)] = f[u(1073)] || r || s[u(1073)]);
      const l = this[u(2876)].keySeparator || ".";
      let d;
      return f[u(1073)] && Array[u(3255)](n) ? d = n[u(1930)]((g) => {
        const h = u;
        return typeof g === h(1936) && (g = Qt(g, { ...this.options, ...i })), "" + f[h(1073)] + l + g;
      }) : (typeof n === u(1936) && (n = Qt(n, { ...this[u(2876)], ...i })), d = f[u(1073)] ? "" + f[u(1073)] + l + n : n), this.t(d, f);
    };
    return be(x) ? s[e(3164)] = x : s[e(2941)] = x, s.ns = t, s[e(1073)] = r, s;
  }
  t(...x) {
    var r;
    const t = a;
    return (r = this[t(1781)]) == null ? void 0 : r[t(1543)](...x);
  }
  [a(1842)](...x) {
    var r;
    return (r = this[a(1781)]) == null ? void 0 : r.exists(...x);
  }
  [a(2999)](x) {
    const t = a;
    this[t(2876)][t(1589)] = x;
  }
  [a(3254)](x, t = {}) {
    const r = a;
    if (!this[r(3029)]) return this[r(2303)][r(1114)](r(2006), this[r(1056)]), !1;
    if (!this[r(1056)] || !this[r(1056)][r(2710)]) return this[r(2303)][r(1114)](r(961), this[r(1056)]), !1;
    const e = t[r(3164)] || this[r(1049)] || this[r(1056)][0], s = this[r(2876)] ? this[r(2876)].fallbackLng : !1, n = this[r(1056)][this.languages.length - 1];
    if (e.toLowerCase() === "cimode") return !0;
    const i = (c, u) => {
      const f = r, l = this[f(1791)][f(1577)].state[c + "|" + u];
      return l === -1 || l === 0 || l === 2;
    };
    if (t[r(2806)]) {
      const c = t.precheck(this, i);
      if (c !== void 0) return c;
    }
    return !!(this.hasResourceBundle(e, x) || !this[r(1791)].backendConnector[r(1231)] || this.options[r(1673)] && !this[r(2876)].partialBundledLanguages || i(e, x) && (!s || i(n, x)));
  }
  [a(585)](x, t) {
    const r = a, e = Q0();
    return this.options.ns ? (be(x) && (x = [x]), x[r(2617)]((s) => {
      const n = r;
      this[n(2876)].ns.indexOf(s) < 0 && this[n(2876)].ns[n(3062)](s);
    }), this[r(1264)]((s) => {
      e.resolve(), t && t(s);
    }), e) : (t && t(), Promise.resolve());
  }
  [a(1477)](x, t) {
    const r = a, e = Q0();
    be(x) && (x = [x]);
    const s = this[r(2876)].preload || [], n = x[r(2581)]((i) => s[r(2436)](i) < 0 && this[r(1791)][r(1476)][r(1149)](i));
    return n[r(2710)] ? (this[r(2876)][r(1125)] = s[r(2700)](n), this[r(1264)]((i) => {
      e.resolve(), t && t(i);
    }), e) : (t && t(), Promise.resolve());
  }
  [a(2335)](x) {
    var s, n;
    const t = a;
    if (x || (x = this.resolvedLanguage || (((s = this[t(1056)]) == null ? void 0 : s[t(2710)]) > 0 ? this[t(1056)][0] : this[t(3090)])), !x) return t(880);
    try {
      const i = new Intl[t(2711)](x);
      if (i && i[t(2063)]) {
        const c = i[t(2063)]();
        if (c && c[t(2443)]) return c[t(2443)];
      }
    } catch {
    }
    const r = ["ar", "shu", t(554), "ssh", t(1957), t(2721), "yud", t(971), t(745), t(1238), "acm", t(2469), "acw", t(700), t(2382), t(2572), t(2336), t(3091), t(831), "afb", t(2326), "apc", t(962), "arb", "arq", t(2500), t(1834), "arz", t(1569), t(2750), t(3112), "ayl", t(1972), t(1980), "bbz", "pga", "he", "iw", "ps", "pbt", t(2291), t(1349), t(1339), t(1480), "ug", "ur", t(2971), t(2070), t(3063), "ji", "yi", t(3034), t(964), t(1510), "fa", t(1763), t(3226), t(1407), t(1876), "dv", t(2299), t(616)], e = ((n = this[t(1791)]) == null ? void 0 : n.languageUtils) || new Ka(er());
    return x[t(1945)]()[t(2436)](t(1444)) > 1 ? t(2364) : r[t(2436)](e[t(594)](x)) > -1 || x[t(1945)]()[t(2436)]("-arab") > 1 ? t(880) : "ltr";
  }
  static [a(775)](x = {}, t) {
    const r = a, e = new xx(x, t);
    return e[r(775)] = xx.createInstance, e;
  }
  [a(2345)](x = {}, t = px) {
    const r = a, e = x[r(1515)];
    e && delete x[r(1515)];
    const s = { ...this[r(2876)], ...x, isClone: !0 }, n = new xx(s);
    if ((x[r(3158)] !== void 0 || x[r(632)] !== void 0) && (n.logger = n.logger[r(2472)](x)), ["store", r(1791), r(3090)][r(2617)]((c) => {
      n[c] = this[c];
    }), n.services = { ...this[r(1791)] }, n[r(1791)][r(2254)] = { hasLoadedNamespace: n.hasLoadedNamespace[r(1386)](n) }, e) {
      const c = Object.keys(this[r(872)][r(2663)])[r(1630)]((u, f) => {
        const l = r;
        return u[f] = { ...this[l(872)][l(2663)][f] }, u[f] = Object[l(2123)](u[f])[l(1630)]((d, g) => (d[g] = { ...u[f][g] }, d), u[f]), u;
      }, {});
      n[r(872)] = new Wa(c, s), n[r(1791)].resourceStore = n[r(872)];
    }
    return x.interpolation && (n[r(1791)][r(1896)] = new Xa(s)), n.translator = new Tx(n[r(1791)], s), n[r(1781)].on("*", (c, ...u) => {
      n[r(2256)](c, ...u);
    }), n[r(1775)](s, t), n[r(1781)][r(2876)] = s, n[r(1781)][r(1577)][r(1791)][r(2254)] = { hasLoadedNamespace: n.hasLoadedNamespace[r(1386)](n) }, n;
  }
  [a(1363)]() {
    const x = a;
    return { options: this[x(2876)], store: this[x(872)], language: this[x(3090)], languages: this.languages, resolvedLanguage: this.resolvedLanguage };
  }
}
const Xe = xx.createInstance();
Xe[a(775)], Xe.dir, Xe[a(1775)], Xe[a(1264)], Xe.reloadResources, Xe[a(1728)], Xe.changeLanguage, Xe[a(3101)], Xe.t, Xe.exists, Xe[a(2999)], Xe.hasLoadedNamespace, Xe.loadNamespaces, Xe[a(1477)];
function Ni() {
  const o = a;
  if (typeof navigator !== o(993) && navigator[o(3090)]) return navigator[o(3090)] === o(707) ? "zh-CN" : o(2260);
  try {
    const x = typeof require < "u" ? require : void 0;
    if (x)
      return x(o(2062))[o(746)][o(1353)][o(760)]("zh") ? o(707) : o(2260);
  } catch {
  }
  return "en-US";
}
let Qs = Ni();
const qi = { "zh-CN": {}, "en-US": {} };
function Xt(o) {
  const x = o === "zh-CN" ? fi : li, t = qi[o];
  return { ...x, ...t };
}
function Ai() {
  return Qs;
}
function Yt(o, x = {}) {
  const t = a;
  let e = Xt(Qs)[o];
  return e ? typeof e === t(1361) ? e[t(1521)](/\{\{(\w+)\}\}/g, (s, n) => x[n] !== void 0 ? String(x[n]) : s) : e : o;
}
const Oi = /&(?:amp|#38|lt|#60|gt|#62|apos|#39|quot|#34|nbsp|#160|copy|#169|reg|#174|hellip|#8230|#x2F|#47);/g, Di = { "&amp;": "&", "&#38;": "&", "&lt;": "<", "&#60;": "<", "&gt;": ">", "&#62;": ">", "&apos;": "'", "&#39;": "'", "&quot;": '"', "&#34;": '"', "&nbsp;": " ", "&#160;": " ", "&copy;": "©", "&#169;": "©", "&reg;": "®", "&#174;": "®", "&hellip;": "…", "&#8230;": "…", "&#x2F;": "/", "&#47;": "/" }, ji = (o) => Di[o], Mi = (o) => o[a(1521)](Oi, ji);
let tr = { bindI18n: a(638), bindI18nStore: "", transEmptyNodeValue: "", transSupportBasicHtmlNodes: !0, transWrapTextNodes: "", transKeepBasicHtmlNodesFor: ["br", "strong", "i", "p"], useSuspense: !0, unescape: Mi };
const Li = (o = {}) => {
  tr = { ...tr, ...o };
}, $i = { type: a(1175), init(o) {
  const x = a;
  Li(o[x(2876)][x(770)]);
} };
!Xe.isInitialized && Xe[a(1728)]($i).init({ resources: { "zh-CN": { translation: Xt(a(707)) }, "en-US": { translation: Xt(a(2260)) } }, lng: Ai(), fallbackLng: a(2260), interpolation: { escapeValue: !1 } });
globalThis[a(3093)] = globalThis[a(3093)] || {};
const tx = globalThis[a(3093)], _0 = [];
tx[a(1561)] = tx[a(1561)] || {}, tx[a(1561)].add = function(o, x) {
  const t = a;
  typeof x == "function" ? _0[t(3062)]([o, { formatter: x, setter: null }]) : _0[t(3062)]([o, x]);
};
function Ui(o, x, t) {
  var c;
  const r = a, e = _0.find(([u]) => u == K(1297)), s = _0[r(3146)](([u]) => ia(u, o[r(2076)])) || e;
  let n = !1;
  if (s) {
    const u = s[1][r(1153)];
    u && (n = !!u(o, x, t));
  }
  !n && (o[r(1816)][x][r(2446)] = t), (c = (Te[r(2542)] || Te[r(1797)].workflow)[r(3176)]) == null || c[r(1534)][r(1091)]();
}
function Nx(o) {
  const x = a, t = {}, r = _0[x(3146)](([e]) => e == "__DEFAULT__");
  return o.nodes.forEach((e) => {
    const s = x;
    if (!e[s(1816)] || e[s(1816)].length == 0) return;
    const n = _0[s(3146)](([i]) => ia(i, e[s(2076)])) || r;
    if (n) try {
      const i = n[1][s(1934)](e);
      i && (t[e.id] = i[s(1816)][s(1930)]((c) => c[s(2446)]));
    } catch {
      t[e.id] = [];
    }
  }), t;
}
function ea(o, x) {
  var s, n, i;
  const t = a;
  if (!o) return { widgetableID: "", widgetablePath: "", nodes: {}, nodeIndexes: [], options: {}, note: "" };
  const r = o[t(669)][t(1930)]((c) => {
    const u = t;
    if (c[u(1742)] != 0) return;
    const f = bx(c);
    if (!f || f[u(760)](".") || !c.widgets || c[u(1816)][u(2710)] == 0) return;
    let l = _0[u(3146)](([m]) => ia(m, c[u(2076)]));
    if (l) try {
      const m = l[1][u(1934)](c);
      if (m) return m.id = c.id, m.uiWeightSum = m[u(1816)].reduce((v, k) => v + (k[u(1970)] || 12), 0), m;
    } catch (m) {
      return { id: c.id, title: f, uiWeightSum: 12, widgets: [{ outputType: u(490), value: Yt(u(2580), l[0]) + (m[u(1044)] || m || ""), name: "", options: {} }] };
    }
    if (!f.startsWith("#")) return null;
    let d = c[u(1816)];
    const g = _0[u(3146)](([m]) => m == "__DEFAULT__");
    if (g) {
      const m = g[1][u(1934)](c);
      if (m) return Object.assign(m, { uiWeightSum: m.widgets[u(1630)]((v, k) => v + (k.uiWeight || 12), 0) });
    }
    const h = { id: c.id, title: f, widgets: d[u(1930)]((m) => ({ name: m.label || m[u(2641)], outputType: m[u(2076)] || "string", value: m[u(2446)], options: m[u(2876)] })) };
    return Object.assign(h, { uiWeightSum: h[u(1816)][u(1630)]((m, v) => m + (v[u(1970)] || 12), 0) });
  })[t(2581)](Boolean)[t(841)]((c, u) => {
    const f = t;
    let l = bx(c), d = bx(u);
    return l = l[f(760)]("#") ? l[f(1387)](1)[f(2337)]() : l.trim(), d = d[f(760)]("#") ? d[f(1387)](1)[f(2337)]() : d[f(2337)](), l.localeCompare(d);
  }), e = ((n = (s = o.nodes.find((c) => c.type == t(1960) && c.title.match(/SD-?PPP/i))) == null ? void 0 : s[t(1816)][0]) == null ? void 0 : n[t(2446)]) || "";
  return { widgetablePath: ((i = x[t(3266)].extra) == null ? void 0 : i.sdppp_workflow_alias) || x[t(2474)], widgetableID: x.activeState.id, nodes: r.reduce((c, u) => (c[u.id] = u, c), {}), note: e, nodeIndexes: r.map((c) => c.id), options: {} };
}
function ia(o, x) {
  const t = a, r = o.replace(/[.+^${}()|[\]\\]/g, t(898)).replace(/\*/g, ".*").replace(/\?/g, ".");
  return new RegExp("^" + r + "$")[t(2346)](x);
}
function bx(o, x = "") {
  var e;
  const t = a;
  let r = x || o[t(2141)] || "";
  return o.setProperty && (r[t(760)]("#") || r.startsWith(".")) ? o.setProperty(t(2502), r) : r = ((e = o[t(3005)]) == null ? void 0 : e[t(2502)]) || r, r;
}
tx[a(2049)] = bx;
const xa = ix[a(919)]("mesh:workflow"), ar = /* @__PURE__ */ new Set();
Ie.implementAction(a(622), async (o) => {
  const x = a;
  return requestAnimationFrame(Pn), o[x(3237)][x(2617)](({ nodeID: t, widgetIndex: r, value: e }) => {
    const s = x, n = Te[s(1843)][s(669)].find((i) => i.id == t);
    Ui(n, r, e);
  }), { success: !0 };
}), Ie.implementAction("openWorkflow", async (o) => {
  const x = a, { workflow_path: t } = o, r = !ar[x(2348)](t), e = o[x(2837)] || r;
  ar.add(t);
  const s = Te.extensionManager[x(538)] || Te[x(2542)], n = s[x(3236)][x(3146)]((c) => c[x(1057)] === t || c[x(2474)] === t || c.path === x(1032) + t);
  if (!e) {
    const c = await zi(s, n);
    if (xa("reset=false but needsReset: " + c), c) await Gx(s, n);
    else try {
      await i(s, n);
    } catch {
      await Gx(s, n);
    }
    return { success: !0 };
  }
  return await Gx(s, n), { success: !0 };
  async function i(c, u) {
    const f = x;
    xa(f(3194) + u.path, u[f(837)]), Te.workflowManager == c ? await u[f(1429)]() : (await c[f(2249)](u), await Te[f(3053)](JSON[f(2774)](JSON.stringify(u[f(837)])), !0, !0, u, {}));
  }
}), Ie.implementAction(a(3049), async function(o) {
  const x = a;
  let { workflow_content: t, workflow_path: r } = o;
  return t.extra = { ...t.extra || {}, sdppp_workflow_alias: r }, await Te[x(3053)](t), { success: !0 };
}), Ie.implementAction(a(1045), async (o) => {
  var s;
  const x = a, t = Te[x(2542)] || Te[x(1797)].workflow;
  (s = t.syncWorkflows) == null || s.call(t), await new Promise((n) => requestAnimationFrame(n));
  let e = t[x(3236)][x(1930)]((n) => n[x(2474)][x(1521)](x(1032), ""));
  try {
    const n = new Headers(), i = localStorage[x(2215)](x(900));
    i && n[x(780)]("comfy-user", i);
    const c = await fetch(x(3138), { headers: n });
    let u = [];
    c.ok && (u = (await c[x(1207)]())[x(2986)][x(1930)]((l) => l.replace(x(1032), ""))), e.sort((f, l) => {
      const d = x, g = u.includes(f), h = u[d(2978)](l);
      return g && !h ? -1 : !g && h ? 1 : f[d(925)](l);
    });
  } catch {
  }
  return { workflows: e, error: "" };
}), Ie[a(2922)]("saveWorkflow", async (o) => {
  var n;
  const x = a, { workflow_path: t, from_sid: r } = o, e = Te.workflowManager || Te[x(1797)][x(538)], s = e[x(3236)][x(3146)]((i) => i[x(1057)] === t || i[x(2474)] === t || i.path === x(1032) + t);
  if (!s) throw new Error(x(2173));
  return ((n = e[x(3176)]) == null ? void 0 : n.id) != s.id && await Te[x(2249)](t, r, !1), s[x(1534)][x(1091)](), await e.saveWorkflow(s), { success: !0 };
});
async function zi(o, x) {
  var e, s, n;
  const t = a;
  if (!x || !(((e = o[t(3176)]) == null ? void 0 : e.id) === x.id)) return !1;
  if ((s = x.changeTracker) != null && s[t(1091)]) try {
    x.changeTracker[t(1091)]();
  } catch (i) {
    console[t(1114)]("Failed to check workflow changeTracker state:", i);
  }
  try {
    const i = (n = Te.graph) == null ? void 0 : n[t(3043)](), c = x[t(3266)];
    if (!i || !c) return !1;
    const u = JSON[t(1031)](i), f = JSON.stringify(c);
    return u !== f;
  } catch (i) {
    return console[t(1114)](t(2828), i), !1;
  }
}
async function Gx(o, x) {
  var e;
  const t = a;
  xa(t(3150) + x[t(2474)]);
  async function r(s, n) {
    const i = t;
    Te.workflowManager == s ? await n[i(1429)]() : (await s[i(2249)](n), await Te.loadGraphData(JSON[i(2774)](JSON.stringify(n[i(3266)])), !0, !0, n, {}));
  }
  if ((x[t(2917)] || (e = o[t(2917)]) != null && e.call(o, x)) && o.openWorkflows[t(2710)] === 1) {
    const s = o.createTemporary();
    o[t(2249)](s);
  } else await r(o, o[t(910)][0] == x ? o.openWorkflows[1] : o[t(910)][0]);
  await o[t(1246)](x, !1), await new Promise((s) => requestAnimationFrame(s)), await r(o, x);
}
const ox = ix[a(919)](a(2584)), j0 = /* @__PURE__ */ new Map();
let qx = [];
const Jx = { hijacked: !1, originalQueuePrompt: null };
function Hi(o, x) {
  const t = a, r = j0[t(674)](o);
  ox(t(2801), o, x, r, j0), r && r[t(1751)](x);
}
Ie[a(2922)]("stopAll", async () => {
  const o = a;
  await Te.api[o(2090)](o(2284)), await Te[o(706)].interrupt();
  const x = Array[o(2047)](j0.values());
  j0.clear();
  for (const t of x)
    try {
      t[o(916)](new Error(o(954)));
    } catch {
    }
  return { success: !0 };
}), Ie.implementAction(a(2565), async function* (o) {
  const x = a;
  Vi(), qx = [];
  const t = o[x(846)];
  Ie[x(872)].setState({ lastError: "", widgetableErrors: {} });
  const r = await Zi(t, o.mode);
  ox(x(1507), r[x(2717)], r[x(1111)], x(660), r.promptIds), Gi(r), yield* Ji(r[x(789)]);
});
function Vi() {
  const o = a;
  if (Jx.hijacked) return;
  const x = R0[o(2664)];
  Jx[o(586)] = x, R0[o(2664)] = async (...t) => {
    const r = o;
    try {
      const e = await x[r(1522)](R0, ...t), s = e == null ? void 0 : e.prompt_id;
      return s && Ki(s), qx[r(3062)]({ error: null, result: e, prompt_id: e[r(931)] }), e;
    } catch (e) {
      throw qx[r(3062)]({ error: e, result: null, prompt_id: "" }), e;
    }
  }, Jx[o(1367)] = !0;
}
async function Bi(o) {
  await Te.queuePrompt(1, o);
}
async function Wi(o) {
  const x = a, t = await Te[x(2178)](Te[x(1843)]);
  for (let r = 0; r < o; r++)
    await R0[x(2664)](1, t);
}
async function Zi(o, x = a(2012)) {
  var e, s;
  const t = a, r = { promptIds: [], hasError: !1, generalError: "", nodeErrors: {} };
  try {
    x === t(706) ? await Wi(o) : await Bi(o);
    for (const n of qx)
      if (n[t(490)]) r[t(2717)] = !0, r[t(1111)] = n[t(490)][t(2963)] ? Qi(n[t(490)][t(2963)][t(3241)]) : {}, Object[t(661)](r[t(1111)], { "-1": ((s = (e = n[t(490)][t(2963)]) == null ? void 0 : e.error) == null ? void 0 : s[t(1044)]) || n[t(490)][t(1044)] });
      else {
        const i = n[t(676)][t(931)];
        r[t(789)][t(3062)](i);
      }
  } catch (n) {
    ox(t(2631), n.stack), r[t(2717)] = !0, r[t(1111)] = { "-1": n[t(1044)] || n[t(2732)]() };
  }
  return r;
}
function Ki(o) {
  const x = a;
  let t, r;
  const e = new Promise((s, n) => {
    t = s, r = n;
  });
  j0[x(780)](o, { promise: e, resolveImage: t, rejectImage: r });
}
function Gi({ hasError: o, generalError: x, nodeErrors: t }) {
  const r = a;
  o && (x ? Ie.store[r(738)]({ lastError: x }) : Ie[r(872)][r(738)]({ widgetableErrors: t }));
}
async function* Ji(o) {
  const x = a, t = /* @__PURE__ */ new Map();
  for (const r of o) {
    const e = j0[x(674)](r);
    e && t[x(780)](r, e[x(810)]);
  }
  if (t.size !== 0)
    for (ox(x(1789)); t[x(846)] > 0; ) {
      const r = Array[x(2047)](t.entries()), e = r[x(1930)](([i, c]) => c[x(2517)]((u) => ({ prompt_id: i, images: u }))), { prompt_id: s, images: n } = await Promise.race(e);
      ox(x(2127), s), t.delete(s), j0[x(875)](s), yield { success: !0, prompt_ids: [s], images: n };
    }
}
function Qi(o) {
  const x = a, t = {};
  return Object[x(2123)](o)[x(2617)]((r) => {
    const e = x, s = r[e(3263)](":")[0], n = Te[e(1843)].nodes[e(3146)]((i) => i.id == s);
    t[s] = "[" + ((n == null ? void 0 : n[e(2141)]) || s) + "]" + o[r][e(2800)][e(1930)](JSON[e(1031)])[e(1592)](`
`);
  }), t;
}
const Xi = ix[a(919)](a(2406));
Ie[a(2922)](a(1586), async (o) => {
  const x = a;
  return o != null && o[x(2040)] && Xi(x(2765), o[x(2040)]), { comfyVersion: x(1319), hostVersion: (o == null ? void 0 : o.hostVersion) ?? "" };
}), Ie[a(2922)](a(965), async (o) => {
  const x = a, { node_id: t, title: r } = o, e = Te[x(1843)][x(669)][x(3146)]((s) => s.id == t);
  if (!e) throw new Error(x(2504));
  return e[x(2141)] = r, e[x(2946)](x(2502), r), { success: !0 };
}), Ie[a(2922)](a(1570), async () => {
  const o = a, x = await fetch(o(1374));
  return x[o(1227)] == 404 ? { error: Yt(o(1074)), success: !1 } : x[o(1227)] == 200 ? { success: !0 } : { error: Yt(o(3006)) + x[o(757)], success: !1 };
}), Ie[a(2922)](a(2775), async (o) => {
  const x = a, { api_key: t } = o;
  return localStorage.setItem(x(729), t), location[x(1646)](), { success: !0 };
}), Ie[a(2922)]("logout", async () => {
  const o = a;
  return document[o(1126)](".pi-sign-out")[o(2157)][o(1433)](), { success: !0 };
});
function Yi(o) {
  const x = a, t = atob(o), r = t.length, e = new Uint8Array(r);
  for (let s = 0; s < r; s++)
    e[s] = t[x(901)](s);
  return e;
}
Ie[a(2922)]("uploadComfyImageFromUXP", async (o, x, t) => {
  const r = a, { fileName: e, overwrite: s = !0, mimeType: n = r(1682), dataBase64: i } = o;
  if (t != null && t[r(896)]) throw new DOMException(r(969), r(2749));
  const c = Yi(i), u = new Blob([c], { type: n }), f = new FormData();
  f.append(r(705), u), f.append("filename", e), f[r(2289)](r(2608), r(s ? 727 : 2657));
  const l = await fetch(r(680), { method: "POST", body: f, signal: t });
  if (!l.ok) throw new Error(r(1454) + l[r(757)]);
  const d = await l.json();
  return { name: d[r(1563)] + "/" + d[r(2641)] };
});
const Xs = a(1479), ec = [Xs, "2025-03-26", "2024-11-05", a(3143)], Ox = a(2804), Ys = Ve([b(), W()[a(2755)]()]), en = b(), xc = S({ progressToken: B(Ys) })[a(1307)](), r0 = S({ _meta: B(xc) }).passthrough(), x0 = S({ method: b(), params: B(r0) }), cx = S({ _meta: B(S({})[a(1307)]()) })[a(1307)](), m0 = S({ method: b(), params: B(cx) }), s0 = S({ _meta: B(S({})[a(1307)]()) })[a(1307)](), Dx = Ve([b(), W().int()]), xn = S({ jsonrpc: xe(Ox), id: Dx }).merge(x0)[a(1116)](), tc = (o) => xn[a(3098)](o)[a(3031)], tn = S({ jsonrpc: xe(Ox) })[a(1779)](m0).strict(), ac = (o) => tn.safeParse(o)[a(3031)], an = S({ jsonrpc: xe(Ox), id: Dx, result: s0 })[a(1116)](), rr = (o) => an[a(3098)](o).success;
var v0;
(function(o) {
  const x = a;
  o[o[x(1247)] = -32e3] = x(1247), o[o.RequestTimeout = -32001] = "RequestTimeout", o[o[x(892)] = -32700] = "ParseError", o[o.InvalidRequest = -32600] = x(3202), o[o[x(3120)] = -32601] = "MethodNotFound", o[o[x(2557)] = -32602] = x(2557), o[o[x(2898)] = -32603] = "InternalError";
})(v0 || (v0 = {}));
const rn = S({ jsonrpc: xe(Ox), id: Dx, error: S({ code: W()[a(2755)](), message: b(), data: B(k0()) }) })[a(1116)](), rc = (o) => rn[a(3098)](o)[a(3031)];
Ve([xn, tn, an, rn]);
const ta = s0[a(1116)](), aa = m0[a(919)]({ method: xe(a(1924)), params: cx[a(919)]({ requestId: Dx, reason: b().optional() }) }), ux = S({ name: b(), title: B(b()) })[a(1307)](), sn = ux[a(919)]({ version: b() }), sc = S({ experimental: B(S({}).passthrough()), sampling: B(S({})[a(1307)]()), elicitation: B(S({})[a(1307)]()), roots: B(S({ listChanged: B(Q()) }).passthrough()) }).passthrough(), nn = x0.extend({ method: xe(a(3104)), params: r0[a(919)]({ protocolVersion: b(), capabilities: sc, clientInfo: sn }) }), nc = S({ experimental: B(S({})[a(1307)]()), logging: B(S({})[a(1307)]()), completions: B(S({}).passthrough()), prompts: B(S({ listChanged: B(Q()) })[a(1307)]()), resources: B(S({ subscribe: B(Q()), listChanged: B(Q()) })[a(1307)]()), tools: B(S({ listChanged: B(Q()) })[a(1307)]()) })[a(1307)](), oc = s0[a(919)]({ protocolVersion: b(), capabilities: nc, serverInfo: sn, instructions: B(b()) }), on = m0.extend({ method: xe(a(3217)) }), ra = x0[a(919)]({ method: xe(a(2509)) }), ic = S({ progress: W(), total: B(W()), message: B(b()) })[a(1307)](), sa = m0[a(919)]({ method: xe(a(3179)), params: cx[a(1779)](ic)[a(919)]({ progressToken: Ys }) }), jx = x0[a(919)]({ params: r0[a(919)]({ cursor: B(en) })[a(2478)]() }), Mx = s0[a(919)]({ nextCursor: B(en) }), cn = S({ uri: b(), mimeType: B(b()), _meta: B(S({}).passthrough()) })[a(1307)](), un = cn[a(919)]({ text: b() }), fn = cn[a(919)]({ blob: b()[a(3046)]() }), ln = ux[a(919)]({ uri: b(), description: B(b()), mimeType: B(b()), _meta: B(S({})[a(1307)]()) }), cc = ux[a(919)]({ uriTemplate: b(), description: B(b()), mimeType: B(b()), _meta: B(S({}).passthrough()) }), uc = jx[a(919)]({ method: xe("resources/list") }), fc = Mx[a(919)]({ resources: we(ln) }), lc = jx[a(919)]({ method: xe(a(2847)) }), dc = Mx[a(919)]({ resourceTemplates: we(cc) }), hc = x0[a(919)]({ method: xe(a(952)), params: r0[a(919)]({ uri: b() }) }), pc = s0.extend({ contents: we(Ve([un, fn])) }), mc = m0.extend({ method: xe(a(1629)) }), bc = x0[a(919)]({ method: xe(a(2611)), params: r0.extend({ uri: b() }) }), gc = x0[a(919)]({ method: xe(a(2276)), params: r0[a(919)]({ uri: b() }) }), yc = m0[a(919)]({ method: xe("notifications/resources/updated"), params: cx[a(919)]({ uri: b() }) }), vc = S({ name: b(), description: B(b()), required: B(Q()) })[a(1307)](), wc = ux[a(919)]({ description: B(b()), arguments: B(we(vc)), _meta: B(S({})[a(1307)]()) }), Sc = jx[a(919)]({ method: xe(a(1396)) }), kc = Mx[a(919)]({ prompts: we(wc) }), Pc = x0[a(919)]({ method: xe(a(1143)), params: r0[a(919)]({ name: b(), arguments: B(qe(b())) }) }), ca = S({ type: xe("text"), text: b(), _meta: B(S({})[a(1307)]()) }).passthrough(), ua = S({ type: xe(a(705)), data: b()[a(3046)](), mimeType: b(), _meta: B(S({}).passthrough()) })[a(1307)](), fa = S({ type: xe(a(2188)), data: b().base64(), mimeType: b(), _meta: B(S({})[a(1307)]()) }).passthrough(), Ic = S({ type: xe(a(2988)), resource: Ve([un, fn]), _meta: B(S({})[a(1307)]()) })[a(1307)](), Ec = ln[a(919)]({ type: xe(a(689)) }), dn = Ve([ca, ua, fa, Ec, Ic]), Rc = S({ role: Pe(["user", a(678)]), content: dn })[a(1307)](), Cc = s0[a(919)]({ description: B(b()), messages: we(Rc) }), _c = m0.extend({ method: xe("notifications/prompts/list_changed") }), Fc = S({ title: B(b()), readOnlyHint: B(Q()), destructiveHint: B(Q()), idempotentHint: B(Q()), openWorldHint: B(Q()) })[a(1307)](), Tc = ux[a(919)]({ description: B(b()), inputSchema: S({ type: xe(a(1304)), properties: B(S({})[a(1307)]()), required: B(we(b())) })[a(1307)](), outputSchema: B(S({ type: xe("object"), properties: B(S({}).passthrough()), required: B(we(b())) })[a(1307)]()), annotations: B(Fc), _meta: B(S({})[a(1307)]()) }), Nc = jx.extend({ method: xe(a(2744)) }), qc = Mx[a(919)]({ tools: we(Tc) }), hn = s0[a(919)]({ content: we(dn)[a(2485)]([]), structuredContent: S({})[a(1307)]()[a(2478)](), isError: B(Q()) });
hn.or(s0.extend({ toolResult: k0() }));
const Ac = x0[a(919)]({ method: xe(a(2769)), params: r0[a(919)]({ name: b(), arguments: B(qe(k0())) }) }), Oc = m0[a(919)]({ method: xe(a(1600)) }), pn = Pe([a(3158), a(1241), a(2417), a(1245), a(490), a(980), "alert", a(1140)]), Dc = x0[a(919)]({ method: xe(a(3014)), params: r0.extend({ level: pn }) }), jc = m0.extend({ method: xe(a(989)), params: cx[a(919)]({ level: pn, logger: B(b()), data: k0() }) }), Mc = S({ name: b()[a(2478)]() })[a(1307)](), Lc = S({ hints: B(we(Mc)), costPriority: B(W()[a(521)](0)[a(753)](1)), speedPriority: B(W()[a(521)](0)[a(753)](1)), intelligencePriority: B(W()[a(521)](0)[a(753)](1)) })[a(1307)](), $c = S({ role: Pe([a(1747), "assistant"]), content: Ve([ca, ua, fa]) }).passthrough(), Uc = x0[a(919)]({ method: xe(a(2180)), params: r0[a(919)]({ messages: we($c), systemPrompt: B(b()), includeContext: B(Pe([a(2833), "thisServer", a(1379)])), temperature: B(W()), maxTokens: W()[a(2755)](), stopSequences: B(we(b())), metadata: B(S({})[a(1307)]()), modelPreferences: B(Lc) }) }), mn = s0[a(919)]({ model: b(), stopReason: B(Pe(["endTurn", a(839), a(918)]).or(b())), role: Pe(["user", a(678)]), content: Vs("type", [ca, ua, fa]) }), zc = S({ type: xe(a(3106)), title: B(b()), description: B(b()), default: B(Q()) })[a(1307)](), Hc = S({ type: xe(a(1361)), title: B(b()), description: B(b()), minLength: B(W()), maxLength: B(W()), format: B(Pe([a(2255), a(776), a(1591), a(1313)])) })[a(1307)](), Vc = S({ type: Pe([a(2665), "integer"]), title: B(b()), description: B(b()), minimum: B(W()), maximum: B(W()) })[a(1307)](), Bc = S({ type: xe("string"), title: B(b()), description: B(b()), enum: we(b()), enumNames: B(we(b())) })[a(1307)](), Wc = Ve([zc, Hc, Vc, Bc]), Zc = x0[a(919)]({ method: xe(a(1206)), params: r0[a(919)]({ message: b(), requestedSchema: S({ type: xe(a(1304)), properties: qe(b(), Wc), required: B(we(b())) })[a(1307)]() }) }), bn = s0.extend({ action: Pe([a(995), a(1504), "cancel"]), content: B(qe(b(), k0())) }), Kc = S({ type: xe(a(1731)), uri: b() })[a(1307)](), Gc = S({ type: xe(a(2429)), name: b() })[a(1307)](), Jc = x0[a(919)]({ method: xe(a(1502)), params: r0[a(919)]({ ref: Ve([Gc, Kc]), argument: S({ name: b(), value: b() })[a(1307)](), context: B(S({ arguments: B(qe(b(), b())) })) }) }), Qc = s0.extend({ completion: S({ values: we(b())[a(753)](100), total: B(W()[a(2755)]()), hasMore: B(Q()) })[a(1307)]() }), Xc = S({ uri: b()[a(760)]("file://"), name: B(b()), _meta: B(S({}).passthrough()) }).passthrough(), Yc = x0[a(919)]({ method: xe(a(2089)) }), gn = s0[a(919)]({ roots: we(Xc) }), e2 = m0[a(919)]({ method: xe(a(597)) });
Ve([ra, nn, Jc, Dc, Pc, Sc, uc, lc, hc, bc, gc, Ac, Nc]), Ve([aa, sa, on, e2]), Ve([ta, mn, bn, gn]), Ve([ra, Uc, Zc, Yc]), Ve([aa, sa, jc, yc, mc, Oc, _c]), Ve([ta, oc, Qc, Cc, kc, fc, dc, pc, hn, qc]);
class q0 extends Error {
  constructor(x, t, r) {
    const e = a;
    super(e(2129) + x + ": " + t), this.code = x, this[e(2663)] = r, this[e(2641)] = "McpError";
  }
}
const x2 = 6e4;
class t2 {
  constructor(x) {
    const t = a;
    this[t(1648)] = x, this[t(1556)] = 0, this._requestHandlers = /* @__PURE__ */ new Map(), this._requestHandlerAbortControllers = /* @__PURE__ */ new Map(), this[t(1445)] = /* @__PURE__ */ new Map(), this[t(539)] = /* @__PURE__ */ new Map(), this[t(2086)] = /* @__PURE__ */ new Map(), this._timeoutInfo = /* @__PURE__ */ new Map(), this[t(2135)] = /* @__PURE__ */ new Set(), this[t(1529)](aa, (r) => {
      const e = t, s = this[e(1831)].get(r[e(1656)][e(3204)]);
      s == null || s[e(1158)](r[e(1656)][e(1371)]);
    }), this[t(1529)](sa, (r) => {
      this[t(3071)](r);
    }), this[t(1219)](ra, (r) => ({}));
  }
  [a(3227)](x, t, r, e, s = !1) {
    const n = a;
    this[n(1533)].set(x, { timeoutId: setTimeout(e, t), startTime: Date[n(3275)](), timeout: t, maxTotalTimeout: r, resetTimeoutOnProgress: s, onTimeout: e });
  }
  [a(3123)](x) {
    const t = a, r = this._timeoutInfo[t(674)](x);
    if (!r) return !1;
    const e = Date.now() - r[t(1348)];
    if (r[t(2709)] && e >= r[t(2709)])
      throw this[t(1533)][t(875)](x), new q0(v0[t(2160)], t(1441), { maxTotalTimeout: r[t(2709)], totalElapsed: e });
    return clearTimeout(r.timeoutId), r[t(2984)] = setTimeout(r.onTimeout, r[t(973)]), !0;
  }
  _cleanupTimeout(x) {
    const t = a, r = this[t(1533)][t(674)](x);
    r && (clearTimeout(r[t(2984)]), this[t(1533)][t(875)](x));
  }
  async [a(1645)](x) {
    const t = a;
    var r, e, s;
    this[t(1448)] = x;
    const n = (r = this.transport) === null || r === void 0 ? void 0 : r[t(2235)];
    this._transport[t(2235)] = () => {
      const u = t;
      n == null || n(), this[u(2250)]();
    };
    const i = (e = this[t(516)]) === null || e === void 0 ? void 0 : e[t(934)];
    this._transport[t(934)] = (u) => {
      i == null || i(u), this._onerror(u);
    };
    const c = (s = this._transport) === null || s === void 0 ? void 0 : s[t(1803)];
    this._transport[t(1803)] = (u, f) => {
      const l = t;
      c == null || c(u, f), rr(u) || rc(u) ? this._onresponse(u) : tc(u) ? this[l(2525)](u, f) : ac(u) ? this[l(1897)](u) : this[l(1931)](new Error(l(939) + JSON[l(1031)](u)));
    }, await this[t(1448)][t(1392)]();
  }
  [a(2250)]() {
    const x = a;
    var t;
    const r = this[x(539)];
    this[x(539)] = /* @__PURE__ */ new Map(), this[x(2086)][x(2376)](), this[x(2135)].clear(), this[x(1448)] = void 0, (t = this[x(2235)]) === null || t === void 0 || t[x(1522)](this);
    const e = new q0(v0[x(1247)], x(974));
    for (const s of r[x(3237)]())
      s(e);
  }
  [a(1931)](x) {
    const t = a;
    var r;
    (r = this.onerror) === null || r === void 0 || r[t(1522)](this, x);
  }
  [a(1897)](x) {
    const t = a;
    var r;
    const e = (r = this._notificationHandlers.get(x[t(2423)])) !== null && r !== void 0 ? r : this.fallbackNotificationHandler;
    e !== void 0 && Promise[t(2457)]().then(() => e(x))[t(742)]((s) => this[t(1931)](new Error(t(1228) + s)));
  }
  [a(2525)](x, t) {
    const r = a;
    var e, s, n, i;
    const c = (e = this[r(3245)][r(674)](x.method)) !== null && e !== void 0 ? e : this[r(1194)];
    if (c === void 0) {
      (s = this[r(1448)]) === null || s === void 0 || s[r(1838)]({ jsonrpc: r(2804), id: x.id, error: { code: v0[r(3120)], message: r(2386) } })[r(742)]((l) => this._onerror(new Error("Failed to send an error response: " + l)));
      return;
    }
    const u = new AbortController();
    this[r(1831)][r(780)](x.id, u);
    const f = { signal: u[r(2111)], sessionId: (n = this[r(1448)]) === null || n === void 0 ? void 0 : n[r(520)], _meta: (i = x.params) === null || i === void 0 ? void 0 : i._meta, sendNotification: (l) => this[r(2487)](l, { relatedRequestId: x.id }), sendRequest: (l, d, g) => this.request(l, d, { ...g, relatedRequestId: x.id }), authInfo: t == null ? void 0 : t[r(849)], requestId: x.id, requestInfo: t == null ? void 0 : t[r(1878)] };
    Promise.resolve()[r(2517)](() => c(x, f))[r(2517)]((l) => {
      const d = r;
      var g;
      if (!u[d(2111)][d(896)])
        return (g = this[d(1448)]) === null || g === void 0 ? void 0 : g.send({ result: l, jsonrpc: d(2804), id: x.id });
    }, (l) => {
      const d = r;
      var g, h;
      if (!u.signal[d(896)])
        return (g = this[d(1448)]) === null || g === void 0 ? void 0 : g[d(1838)]({ jsonrpc: d(2804), id: x.id, error: { code: Number[d(2928)](l[d(2427)]) ? l[d(2427)] : v0[d(2898)], message: (h = l[d(1044)]) !== null && h !== void 0 ? h : d(1328) } });
    })[r(742)]((l) => this[r(1931)](new Error(r(2108) + l)))[r(1284)](() => {
      const l = r;
      this[l(1831)][l(875)](x.id);
    });
  }
  _onprogress(x) {
    const t = a, { progressToken: r, ...e } = x[t(1656)], s = Number(r), n = this[t(2086)][t(674)](s);
    if (!n) {
      this[t(1931)](new Error(t(2793) + JSON[t(1031)](x)));
      return;
    }
    const i = this[t(539)][t(674)](s), c = this[t(1533)][t(674)](s);
    if (c && i && c[t(2309)]) try {
      this[t(3123)](s);
    } catch (u) {
      i(u);
      return;
    }
    n(e);
  }
  [a(690)](x) {
    const t = a, r = Number(x.id), e = this[t(539)][t(674)](r);
    if (e === void 0) {
      this[t(1931)](new Error("Received a response for an unknown message ID: " + JSON[t(1031)](x)));
      return;
    }
    if (this._responseHandlers[t(875)](r), this[t(2086)][t(875)](r), this[t(2684)](r), rr(x)) e(x);
    else {
      const s = new q0(x.error[t(2427)], x[t(490)][t(1044)], x[t(490)].data);
      e(s);
    }
  }
  get [a(516)]() {
    return this[a(1448)];
  }
  async close() {
    const x = a;
    var t;
    await ((t = this[x(1448)]) === null || t === void 0 ? void 0 : t.close());
  }
  [a(494)](x, t, r) {
    const { relatedRequestId: e, resumptionToken: s, onresumptiontoken: n } = r ?? {};
    return new Promise((i, c) => {
      const u = K;
      var f, l, d, g, h, m;
      if (!this[u(1448)]) {
        c(new Error(u(2168)));
        return;
      }
      ((f = this[u(1648)]) === null || f === void 0 ? void 0 : f[u(1928)]) === !0 && this[u(557)](x[u(2423)]), (l = r == null ? void 0 : r.signal) === null || l === void 0 || l.throwIfAborted();
      const v = this[u(1556)]++, k = { ...x, jsonrpc: u(2804), id: v };
      r != null && r.onprogress && (this[u(2086)].set(v, r[u(816)]), k[u(1656)] = { ...x[u(1656)], _meta: { ...((d = x[u(1656)]) === null || d === void 0 ? void 0 : d._meta) || {}, progressToken: v } });
      const P = (R) => {
        const E = u;
        var C;
        this[E(539)][E(875)](v), this[E(2086)].delete(v), this[E(2684)](v), (C = this[E(1448)]) === null || C === void 0 || C[E(1838)]({ jsonrpc: E(2804), method: E(1924), params: { requestId: v, reason: String(R) } }, { relatedRequestId: e, resumptionToken: s, onresumptiontoken: n })[E(742)]((A) => this._onerror(new Error(E(988) + A))), c(R);
      };
      this[u(539)][u(780)](v, (R) => {
        const E = u;
        var C;
        if (!(!((C = r == null ? void 0 : r[E(2111)]) === null || C === void 0) && C[E(896)])) {
          if (R instanceof Error) return c(R);
          try {
            const A = t.parse(R[E(676)]);
            i(A);
          } catch (A) {
            c(A);
          }
        }
      }), (g = r == null ? void 0 : r[u(2111)]) === null || g === void 0 || g[u(731)](u(1158), () => {
        const R = u;
        var E;
        P((E = r == null ? void 0 : r[R(2111)]) === null || E === void 0 ? void 0 : E.reason);
      });
      const T = (h = r == null ? void 0 : r[u(973)]) !== null && h !== void 0 ? h : x2, q = () => P(new q0(v0.RequestTimeout, "Request timed out", { timeout: T }));
      this._setupTimeout(v, T, r == null ? void 0 : r[u(2709)], q, (m = r == null ? void 0 : r[u(2309)]) !== null && m !== void 0 ? m : !1), this._transport[u(1838)](k, { relatedRequestId: e, resumptionToken: s, onresumptiontoken: n })[u(742)]((R) => {
        this._cleanupTimeout(v), c(R);
      });
    });
  }
  async [a(2487)](x, t) {
    const r = a;
    var e, s;
    if (!this._transport) throw new Error(r(2168));
    if (this[r(2670)](x[r(2423)]), ((s = (e = this[r(1648)]) === null || e === void 0 ? void 0 : e[r(2184)]) !== null && s !== void 0 ? s : []).includes(x[r(2423)]) && !x.params && !(t != null && t[r(1852)])) {
      if (this[r(2135)][r(2348)](x[r(2423)])) return;
      this._pendingDebouncedNotifications[r(1580)](x[r(2423)]), Promise[r(2457)]()[r(2517)](() => {
        const u = r;
        var f;
        if (this[u(2135)][u(875)](x[u(2423)]), !this[u(1448)]) return;
        const l = { ...x, jsonrpc: u(2804) };
        (f = this._transport) === null || f === void 0 || f[u(1838)](l, t)[u(742)]((d) => this[u(1931)](d));
      });
      return;
    }
    const c = { ...x, jsonrpc: r(2804) };
    await this[r(1448)][r(1838)](c, t);
  }
  [a(1219)](x, t) {
    const r = a, e = x[r(1547)][r(2423)][r(2446)];
    this[r(1465)](e), this._requestHandlers[r(780)](e, (s, n) => {
      const i = r;
      return Promise[i(2457)](t(x[i(2774)](s), n));
    });
  }
  [a(3092)](x) {
    const t = a;
    this._requestHandlers[t(875)](x);
  }
  [a(1067)](x) {
    const t = a;
    if (this[t(3245)][t(2348)](x)) throw new Error(t(2011) + x + t(2916));
  }
  [a(1529)](x, t) {
    const r = a;
    this[r(1445)][r(780)](x[r(1547)][r(2423)][r(2446)], (e) => Promise.resolve(t(x[r(2774)](e))));
  }
  removeNotificationHandler(x) {
    const t = a;
    this[t(1445)][t(875)](x);
  }
}
function a2(o, x) {
  const t = a;
  return Object[t(2634)](x)[t(1630)]((r, [e, s]) => (s && typeof s == "object" ? r[e] = r[e] ? { ...r[e], ...s } : s : r[e] = s, r), { ...o });
}
var Y0 = { exports: {} }, r2 = Y0.exports, sr;
function s2() {
  const o = a;
  return sr || (sr = 1, (function(x, t) {
    (function(r, e) {
      e(t);
    })(r2, function(r) {
      const e = K;
      function s() {
        const I = K;
        for (var p = arguments[I(2710)], y = Array(p), w = 0; w < p; w++)
          y[w] = arguments[w];
        if (y.length > 1) {
          y[0] = y[0][I(1387)](0, -1);
          for (var L = y[I(2710)] - 1, $ = 1; $ < L; ++$)
            y[$] = y[$][I(1387)](1, -1);
          return y[L] = y[L].slice(1), y[I(1592)]("");
        } else return y[0];
      }
      function n(I) {
        return K(1442) + I + ")";
      }
      function i(I) {
        const p = K;
        return I === void 0 ? p(993) : I === null ? p(1959) : Object[p(2587)][p(2732)].call(I).split(" ")[p(2900)]()[p(3263)]("]")[p(1263)]().toLowerCase();
      }
      function c(I) {
        return I[K(3013)]();
      }
      function u(I) {
        const p = K;
        return I != null ? I instanceof Array ? I : typeof I[p(2710)] != "number" || I.split || I[p(2115)] || I[p(1522)] ? [I] : Array[p(2587)][p(1387)].call(I) : [];
      }
      function f(I, p) {
        var y = I;
        if (p) for (var w in p)
          y[w] = p[w];
        return y;
      }
      function l(I) {
        const p = K;
        var y = p(1922), w = "[0-9]", L = s(w, "[A-Fa-f]"), $ = n(n(p(2054) + L + "%" + L + L + "%" + L + L) + "|" + n(p(2873) + L + "%" + L + L) + "|" + n("%" + L + L)), ie = p(2598), ue = p(3165), Ee = s(ie, ue), je = I ? p(2460) : "[]", Be = I ? p(899) : "[]", Re = s(y, w, p(1983), je);
        n(y + s(y, w, p(1450)) + "*"), n(n($ + "|" + s(Re, ue, p(1917))) + "*");
        var De = n(n(p(2735)) + "|" + n(p(1974) + w) + "|" + n("1" + w + w) + "|" + n(p(1868) + w) + p(2253) + w), We = n(De + "\\." + De + "\\." + De + "\\." + De), ge = n(L + p(1881)), $e = n(n(ge + "\\:" + ge) + "|" + We), Ze = n(n(ge + "\\:") + p(1508) + $e), Ue = n(p(3023) + n(ge + "\\:") + "{5}" + $e), I0 = n(n(ge) + p(2323) + n(ge + "\\:") + p(1690) + $e), i0 = n(n(n(ge + "\\:") + p(3056) + ge) + p(2323) + n(ge + "\\:") + p(1014) + $e), c0 = n(n(n(ge + "\\:") + p(2824) + ge) + p(2323) + n(ge + "\\:") + p(1403) + $e), $0 = n(n(n(ge + "\\:") + p(3205) + ge) + p(2323) + ge + "\\:" + $e), T0 = n(n(n(ge + "\\:") + p(3089) + ge) + "?\\:\\:" + $e), t0 = n(n(n(ge + "\\:") + p(1285) + ge) + "?\\:\\:" + ge), u0 = n(n(n(ge + "\\:") + p(913) + ge) + "?\\:\\:"), f0 = n([Ze, Ue, I0, i0, c0, $0, T0, t0, u0][p(1592)]("|")), g0 = n(n(Re + "|" + $) + "+");
        n(p(2262) + L + "+\\." + s(Re, ue, p(1917)) + "+"), n(n($ + "|" + s(Re, ue)) + "*");
        var l0 = n($ + "|" + s(Re, ue, p(2594)));
        return n(n($ + "|" + s(Re, ue, p(482))) + "+"), n(n(l0 + "|" + s("[\\/\\?]", Be)) + "*"), { NOT_SCHEME: new RegExp(s(p(2817), y, w, p(1450)), "g"), NOT_USERINFO: new RegExp(s(p(1982), Re, ue), "g"), NOT_HOST: new RegExp(s(p(3274), Re, ue), "g"), NOT_PATH: new RegExp(s("[^\\%\\/\\:\\@]", Re, ue), "g"), NOT_PATH_NOSCHEME: new RegExp(s(p(764), Re, ue), "g"), NOT_QUERY: new RegExp(s(p(1899), Re, ue, p(1471), Be), "g"), NOT_FRAGMENT: new RegExp(s(p(1899), Re, ue, "[\\:\\@\\/\\?]"), "g"), ESCAPE: new RegExp(s("[^]", Re, ue), "g"), UNRESERVED: new RegExp(Re, "g"), OTHER_CHARS: new RegExp(s(p(1899), Re, Ee), "g"), PCT_ENCODED: new RegExp($, "g"), IPV4ADDRESS: new RegExp("^(" + We + ")$"), IPV6ADDRESS: new RegExp(p(2763) + f0 + ")" + n(n("\\%25|\\%(?!" + L + p(636)) + "(" + g0 + ")") + "?\\]?$") };
      }
      var d = l(!1), g = l(!0), h = /* @__PURE__ */ (function() {
        function I(p, y) {
          const w = K;
          var L = [], $ = !0, ie = !1, ue = void 0;
          try {
            for (var Ee = p[Symbol[w(1356)]](), je; !($ = (je = Ee.next())[w(1463)]) && (L[w(3062)](je.value), !(y && L[w(2710)] === y)); $ = !0)
              ;
          } catch (Be) {
            ie = !0, ue = Be;
          } finally {
            try {
              !$ && Ee.return && Ee[w(1115)]();
            } finally {
              if (ie) throw ue;
            }
          }
          return L;
        }
        return function(p, y) {
          const w = K;
          if (Array[w(3255)](p)) return p;
          if (Symbol.iterator in Object(p)) return I(p, y);
          throw new TypeError(w(718));
        };
      })(), m = function(I) {
        const p = K;
        if (Array.isArray(I)) {
          for (var y = 0, w = Array(I[p(2710)]); y < I[p(2710)]; y++) w[y] = I[y];
          return w;
        } else return Array[p(2047)](I);
      }, v = 2147483647, k = 36, P = 1, T = 26, q = 38, R = 700, E = 72, C = 128, A = "-", O = /^xn--/, M = /[^\0-\x7E]/, _ = /[\x2E\u3002\uFF0E\uFF61]/g, N = { overflow: e(1013), "not-basic": "Illegal input >= 0x80 (not a basic code point)", "invalid-input": e(2380) }, z = k - P, U = Math[e(2156)], H = String.fromCharCode;
      function G(I) {
        throw new RangeError(N[I]);
      }
      function re(I, p) {
        const y = e;
        for (var w = [], L = I[y(2710)]; L--; )
          w[L] = p(I[L]);
        return w;
      }
      function se(I, p) {
        const y = e;
        var w = I[y(3263)]("@"), L = "";
        w[y(2710)] > 1 && (L = w[0] + "@", I = w[1]), I = I.replace(_, ".");
        var $ = I[y(3263)]("."), ie = re($, p)[y(1592)](".");
        return L + ie;
      }
      function fe(I) {
        const p = e;
        for (var y = [], w = 0, L = I[p(2710)]; w < L; ) {
          var $ = I.charCodeAt(w++);
          if ($ >= 55296 && $ <= 56319 && w < L) {
            var ie = I.charCodeAt(w++);
            (ie & 64512) == 56320 ? y[p(3062)]((($ & 1023) << 10) + (ie & 1023) + 65536) : (y[p(3062)]($), w--);
          } else y[p(3062)]($);
        }
        return y;
      }
      var de = function(p) {
        const y = e;
        return String[y(3246)][y(2692)](String, m(p));
      }, le = function(p) {
        return p - 48 < 10 ? p - 22 : p - 65 < 26 ? p - 65 : p - 97 < 26 ? p - 97 : k;
      }, Se = function(p, y) {
        return p + 22 + 75 * (p < 26) - ((y != 0) << 5);
      }, _e = function(p, y, w) {
        var L = 0;
        for (p = w ? U(p / R) : p >> 1, p += U(p / y); p > z * T >> 1; L += k)
          p = U(p / z);
        return U(L + (z + 1) * p / (p + q));
      }, Me = function(p) {
        const y = e;
        var w = [], L = p[y(2710)], $ = 0, ie = C, ue = E, Ee = p[y(2347)](A);
        Ee < 0 && (Ee = 0);
        for (var je = 0; je < Ee; ++je)
          p[y(901)](je) >= 128 && G(y(3012)), w[y(3062)](p[y(901)](je));
        for (var Be = Ee > 0 ? Ee + 1 : 0; Be < L; ) {
          for (var Re = $, De = 1, We = k; ; We += k) {
            Be >= L && G(y(2266));
            var ge = le(p[y(901)](Be++));
            (ge >= k || ge > U((v - $) / De)) && G(y(512)), $ += ge * De;
            var $e = We <= ue ? P : We >= ue + T ? T : We - ue;
            if (ge < $e) break;
            var Ze = k - $e;
            De > U(v / Ze) && G(y(512)), De *= Ze;
          }
          var Ue = w[y(2710)] + 1;
          ue = _e($ - Re, Ue, Re == 0), U($ / Ue) > v - ie && G(y(512)), ie += U($ / Ue), $ %= Ue, w[y(2881)]($++, 0, ie);
        }
        return String.fromCodePoint.apply(String, w);
      }, Fe = function(p) {
        const y = e;
        var w = [];
        p = fe(p);
        var L = p.length, $ = C, ie = 0, ue = E, Ee = !0, je = !1, Be = void 0;
        try {
          for (var Re = p[Symbol[y(1356)]](), De; !(Ee = (De = Re.next())[y(1463)]); Ee = !0) {
            var We = De[y(2446)];
            We < 128 && w[y(3062)](H(We));
          }
        } catch (G0) {
          je = !0, Be = G0;
        } finally {
          try {
            !Ee && Re[y(1115)] && Re[y(1115)]();
          } finally {
            if (je) throw Be;
          }
        }
        var ge = w.length, $e = ge;
        for (ge && w.push(A); $e < L; ) {
          var Ze = v, Ue = !0, I0 = !1, i0 = void 0;
          try {
            for (var c0 = p[Symbol[y(1356)]](), $0; !(Ue = ($0 = c0.next()).done); Ue = !0) {
              var T0 = $0[y(2446)];
              T0 >= $ && T0 < Ze && (Ze = T0);
            }
          } catch (G0) {
            I0 = !0, i0 = G0;
          } finally {
            try {
              !Ue && c0.return && c0[y(1115)]();
            } finally {
              if (I0) throw i0;
            }
          }
          var t0 = $e + 1;
          Ze - $ > U((v - ie) / t0) && G(y(512)), ie += (Ze - $) * t0, $ = Ze;
          var u0 = !0, f0 = !1, g0 = void 0;
          try {
            for (var l0 = p[Symbol[y(1356)]](), Pa; !(u0 = (Pa = l0[y(2507)]())[y(1463)]); u0 = !0) {
              var Ia = Pa[y(2446)];
              if (Ia < $ && ++ie > v && G("overflow"), Ia == $) {
                for (var fx = ie, lx = k; ; lx += k) {
                  var dx = lx <= ue ? P : lx >= ue + T ? T : lx - ue;
                  if (fx < dx) break;
                  var Ea = fx - dx, Ra = k - dx;
                  w.push(H(Se(dx + Ea % Ra, 0))), fx = U(Ea / Ra);
                }
                w.push(H(Se(fx, 0))), ue = _e(ie, t0, $e == ge), ie = 0, ++$e;
              }
            }
          } catch (G0) {
            f0 = !0, g0 = G0;
          } finally {
            try {
              !u0 && l0.return && l0[y(1115)]();
            } finally {
              if (f0) throw g0;
            }
          }
          ++ie, ++$;
        }
        return w[y(1592)]("");
      }, Je = function(p) {
        return se(p, function(y) {
          const w = K;
          return O[w(2346)](y) ? Me(y[w(1387)](4)[w(1945)]()) : y;
        });
      }, D = function(p) {
        return se(p, function(y) {
          const w = K;
          return M.test(y) ? w(1054) + Fe(y) : y;
        });
      }, F = { version: e(503), ucs2: { decode: fe, encode: de }, decode: Me, encode: Fe, toASCII: D, toUnicode: Je }, j = {};
      function J(I) {
        const p = e;
        var y = I.charCodeAt(0), w = void 0;
        return y < 16 ? w = "%0" + y[p(2732)](16)[p(3013)]() : y < 128 ? w = "%" + y.toString(16).toUpperCase() : y < 2048 ? w = "%" + (y >> 6 | 192)[p(2732)](16)[p(3013)]() + "%" + (y & 63 | 128).toString(16).toUpperCase() : w = "%" + (y >> 12 | 224)[p(2732)](16).toUpperCase() + "%" + (y >> 6 & 63 | 128)[p(2732)](16)[p(3013)]() + "%" + (y & 63 | 128)[p(2732)](16)[p(3013)](), w;
      }
      function X(I) {
        const p = e;
        for (var y = "", w = 0, L = I[p(2710)]; w < L; ) {
          var $ = parseInt(I[p(1693)](w + 1, 2), 16);
          if ($ < 128) y += String[p(1660)]($), w += 3;
          else if ($ >= 194 && $ < 224) {
            if (L - w >= 6) {
              var ie = parseInt(I.substr(w + 4, 2), 16);
              y += String.fromCharCode(($ & 31) << 6 | ie & 63);
            } else y += I[p(1693)](w, 6);
            w += 6;
          } else if ($ >= 224) {
            if (L - w >= 9) {
              var ue = parseInt(I[p(1693)](w + 4, 2), 16), Ee = parseInt(I[p(1693)](w + 7, 2), 16);
              y += String.fromCharCode(($ & 15) << 12 | (ue & 63) << 6 | Ee & 63);
            } else y += I[p(1693)](w, 9);
            w += 9;
          } else y += I.substr(w, 3), w += 3;
        }
        return y;
      }
      function V(I, p) {
        const y = e;
        function w(L) {
          const $ = K;
          var ie = X(L);
          return ie.match(p[$(1753)]) ? ie : L;
        }
        return I[y(2974)] && (I[y(2974)] = String(I[y(2974)])[y(1521)](p[y(2543)], w)[y(1945)]()[y(1521)](p[y(3111)], "")), I[y(483)] !== void 0 && (I[y(483)] = String(I[y(483)])[y(1521)](p[y(2543)], w).replace(p[y(2632)], J)[y(1521)](p.PCT_ENCODED, c)), I[y(746)] !== void 0 && (I.host = String(I[y(746)])[y(1521)](p[y(2543)], w)[y(1945)]()[y(1521)](p[y(1994)], J)[y(1521)](p[y(2543)], c)), I[y(2474)] !== void 0 && (I[y(2474)] = String(I.path).replace(p[y(2543)], w).replace(I[y(2974)] ? p.NOT_PATH : p[y(694)], J)[y(1521)](p[y(2543)], c)), I[y(1267)] !== void 0 && (I.query = String(I.query)[y(1521)](p[y(2543)], w)[y(1521)](p[y(2840)], J)[y(1521)](p[y(2543)], c)), I[y(2970)] !== void 0 && (I.fragment = String(I[y(2970)]).replace(p[y(2543)], w).replace(p[y(1679)], J)[y(1521)](p[y(2543)], c)), I;
      }
      function Y(I) {
        return I[e(1521)](/^0*(.*)/, "$1") || "0";
      }
      function ce(I, p) {
        const y = e;
        var w = I.match(p[y(1559)]) || [], L = h(w, 2), $ = L[1];
        return $ ? $[y(3263)](".")[y(1930)](Y)[y(1592)](".") : I;
      }
      function oe(I, p) {
        const y = e;
        var w = I.match(p[y(735)]) || [], L = h(w, 3), $ = L[1], ie = L[2];
        if ($) {
          for (var ue = $.toLowerCase()[y(3263)]("::")[y(2462)](), Ee = h(ue, 2), je = Ee[0], Be = Ee[1], Re = Be ? Be[y(3263)](":")[y(1930)](Y) : [], De = je.split(":")[y(1930)](Y), We = p[y(1559)][y(2346)](De[De[y(2710)] - 1]), ge = We ? 7 : 8, $e = De[y(2710)] - ge, Ze = Array(ge), Ue = 0; Ue < ge; ++Ue)
            Ze[Ue] = Re[Ue] || De[$e + Ue] || "";
          We && (Ze[ge - 1] = ce(Ze[ge - 1], p));
          var I0 = Ze[y(1630)](function(t0, u0, f0) {
            const g0 = y;
            if (!u0 || u0 === "0") {
              var l0 = t0[t0[g0(2710)] - 1];
              l0 && l0[g0(2230)] + l0[g0(2710)] === f0 ? l0.length++ : t0[g0(3062)]({ index: f0, length: 1 });
            }
            return t0;
          }, []), i0 = I0[y(841)](function(t0, u0) {
            const f0 = y;
            return u0[f0(2710)] - t0[f0(2710)];
          })[0], c0 = void 0;
          if (i0 && i0[y(2710)] > 1) {
            var $0 = Ze.slice(0, i0.index), T0 = Ze[y(1387)](i0[y(2230)] + i0[y(2710)]);
            c0 = $0[y(1592)](":") + "::" + T0[y(1592)](":");
          } else c0 = Ze[y(1592)](":");
          return ie && (c0 += "%" + ie), c0;
        } else return I;
      }
      var te = /^(?:([^:\/?#]+):)?(?:\/\/((?:([^\/?#@]*)@)?(\[[^\/?#\]]+\]|[^\/?#:]*)(?:\:(\d*))?))?([^?#]*)(?:\?([^#]*))?(?:#((?:.|\n|\r)*))?/i, Le = ""[e(2314)](/(){0}/)[1] === void 0;
      function Ae(I) {
        const p = e;
        var y = arguments[p(2710)] > 1 && arguments[1] !== void 0 ? arguments[1] : {}, w = {}, L = y[p(549)] !== !1 ? g : d;
        y[p(1562)] === p(744) && (I = (y[p(2974)] ? y[p(2974)] + ":" : "") + "//" + I);
        var $ = I.match(te);
        if ($) {
          Le ? (w[p(2974)] = $[1], w[p(483)] = $[3], w.host = $[4], w[p(2703)] = parseInt($[5], 10), w[p(2474)] = $[6] || "", w[p(1267)] = $[7], w[p(2970)] = $[8], isNaN(w.port) && (w.port = $[5])) : (w[p(2974)] = $[1] || void 0, w[p(483)] = I.indexOf("@") !== -1 ? $[3] : void 0, w[p(746)] = I[p(2436)]("//") !== -1 ? $[4] : void 0, w[p(2703)] = parseInt($[5], 10), w[p(2474)] = $[6] || "", w[p(1267)] = I[p(2436)]("?") !== -1 ? $[7] : void 0, w[p(2970)] = I[p(2436)]("#") !== -1 ? $[8] : void 0, isNaN(w[p(2703)]) && (w.port = I[p(2314)](/\/\/(?:.|\n)*\:(?:\/|\?|\#|$)/) ? $[4] : void 0)), w[p(746)] && (w[p(746)] = oe(ce(w.host, L), L)), w.scheme === void 0 && w[p(483)] === void 0 && w[p(746)] === void 0 && w[p(2703)] === void 0 && !w.path && w[p(1267)] === void 0 ? w[p(1562)] = p(2618) : w[p(2974)] === void 0 ? w[p(1562)] = "relative" : w[p(2970)] === void 0 ? w.reference = p(1028) : w[p(1562)] = p(776), y[p(1562)] && y[p(1562)] !== "suffix" && y[p(1562)] !== w.reference && (w[p(490)] = w[p(490)] || p(633) + y.reference + p(1405));
          var ie = j[(y.scheme || w.scheme || "")[p(1945)]()];
          if (!y[p(2128)] && (!ie || !ie.unicodeSupport)) {
            if (w[p(746)] && (y[p(684)] || ie && ie[p(684)])) try {
              w[p(746)] = F.toASCII(w.host.replace(L[p(2543)], X)[p(1945)]());
            } catch (ue) {
              w.error = w[p(490)] || p(573) + ue;
            }
            V(w, d);
          } else V(w, L);
          ie && ie[p(2774)] && ie[p(2774)](w, y);
        } else w[p(490)] = w[p(490)] || p(1628);
        return w;
      }
      function ze(I, p) {
        const y = e;
        var w = p[y(549)] !== !1 ? g : d, L = [];
        return I[y(483)] !== void 0 && (L[y(3062)](I[y(483)]), L.push("@")), I[y(746)] !== void 0 && L[y(3062)](oe(ce(String(I.host), w), w)[y(1521)](w.IPV6ADDRESS, function($, ie, ue) {
          const Ee = y;
          return "[" + ie + (ue ? Ee(1299) + ue : "") + "]";
        })), (typeof I.port === y(2665) || typeof I[y(2703)] === y(1361)) && (L[y(3062)](":"), L.push(String(I[y(2703)]))), L[y(2710)] ? L.join("") : void 0;
      }
      var ke = /^\.\.?\//, Ge = /^\/\.(\/|$)/, n0 = /^\/\.\.(\/|$)/, Qe = /^\/?(?:.|\n)*?(?=\/|$)/;
      function Oe(I) {
        const p = e;
        for (var y = []; I[p(2710)]; )
          if (I[p(2314)](ke)) I = I.replace(ke, "");
          else if (I[p(2314)](Ge)) I = I[p(1521)](Ge, "/");
          else if (I[p(2314)](n0)) I = I.replace(n0, "/"), y.pop();
          else if (I === "." || I === "..") I = "";
          else {
            var w = I.match(Qe);
            if (w) {
              var L = w[0];
              I = I.slice(L.length), y.push(L);
            } else throw new Error("Unexpected dot segment condition");
          }
        return y[p(1592)]("");
      }
      function He(I) {
        const p = e;
        var y = arguments[p(2710)] > 1 && arguments[1] !== void 0 ? arguments[1] : {}, w = y[p(549)] ? g : d, L = [], $ = j[(y.scheme || I.scheme || "").toLowerCase()];
        if ($ && $[p(3043)] && $[p(3043)](I, y), I.host && !w.IPV6ADDRESS[p(2346)](I.host)) {
          if (y[p(684)] || $ && $[p(684)]) try {
            I[p(746)] = y.iri ? F[p(1043)](I.host) : F.toASCII(I[p(746)][p(1521)](w[p(2543)], X)[p(1945)]());
          } catch (Ee) {
            I[p(490)] = I[p(490)] || "Host's domain name can not be converted to " + (y.iri ? p(2424) : p(513)) + p(1622) + Ee;
          }
        }
        V(I, w), y[p(1562)] !== "suffix" && I.scheme && (L[p(3062)](I[p(2974)]), L[p(3062)](":"));
        var ie = ze(I, y);
        if (ie !== void 0 && (y[p(1562)] !== p(744) && L.push("//"), L.push(ie), I.path && I[p(2474)][p(2718)](0) !== "/" && L[p(3062)]("/")), I[p(2474)] !== void 0) {
          var ue = I[p(2474)];
          !y[p(1668)] && (!$ || !$[p(1668)]) && (ue = Oe(ue)), ie === void 0 && (ue = ue[p(1521)](/^\/\//, p(2219))), L[p(3062)](ue);
        }
        return I[p(1267)] !== void 0 && (L[p(3062)]("?"), L[p(3062)](I[p(1267)])), I.fragment !== void 0 && (L[p(3062)]("#"), L[p(3062)](I[p(2970)])), L[p(1592)]("");
      }
      function Ye(I, p) {
        const y = e;
        var w = arguments[y(2710)] > 2 && arguments[2] !== void 0 ? arguments[2] : {}, L = arguments[3], $ = {};
        return !L && (I = Ae(He(I, w), w), p = Ae(He(p, w), w)), w = w || {}, !w.tolerant && p[y(2974)] ? ($[y(2974)] = p.scheme, $.userinfo = p.userinfo, $.host = p.host, $[y(2703)] = p[y(2703)], $[y(2474)] = Oe(p.path || ""), $.query = p[y(1267)]) : (p[y(483)] !== void 0 || p.host !== void 0 || p[y(2703)] !== void 0 ? ($[y(483)] = p[y(483)], $[y(746)] = p[y(746)], $.port = p.port, $[y(2474)] = Oe(p[y(2474)] || ""), $[y(1267)] = p[y(1267)]) : (p[y(2474)] ? (p[y(2474)][y(2718)](0) === "/" ? $[y(2474)] = Oe(p[y(2474)]) : ((I[y(483)] !== void 0 || I[y(746)] !== void 0 || I.port !== void 0) && !I[y(2474)] ? $[y(2474)] = "/" + p[y(2474)] : I[y(2474)] ? $.path = I.path[y(1387)](0, I[y(2474)][y(2347)]("/") + 1) + p[y(2474)] : $[y(2474)] = p[y(2474)], $[y(2474)] = Oe($.path)), $[y(1267)] = p[y(1267)]) : ($[y(2474)] = I[y(2474)], p[y(1267)] !== void 0 ? $[y(1267)] = p[y(1267)] : $[y(1267)] = I.query), $[y(483)] = I[y(483)], $[y(746)] = I[y(746)], $.port = I[y(2703)]), $[y(2974)] = I[y(2974)]), $[y(2970)] = p.fragment, $;
      }
      function M0(I, p, y) {
        var L = f({ scheme: e(1959) }, y);
        return He(Ye(Ae(I, L), Ae(p, L), L, !0), L);
      }
      function Lx(I, p) {
        return typeof I === e(1361) ? I = He(Ae(I, p), p) : i(I) === "object" && (I = Ae(He(I, p), p)), I;
      }
      function pa(I, p, y) {
        const w = e;
        return typeof I === w(1361) ? I = He(Ae(I, y), y) : i(I) === w(1304) && (I = He(I, y)), typeof p === w(1361) ? p = He(Ae(p, y), y) : i(p) === "object" && (p = He(p, y)), I === p;
      }
      function Rn(I, p) {
        const y = e;
        return I && I[y(2732)]()[y(1521)](!p || !p[y(549)] ? d[y(1653)] : g.ESCAPE, J);
      }
      function b0(I, p) {
        const y = e;
        return I && I.toString()[y(1521)](!p || !p[y(549)] ? d[y(2543)] : g.PCT_ENCODED, X);
      }
      var Z0 = { scheme: e(3213), domainHost: !0, parse: function(p, y) {
        const w = e;
        return !p[w(746)] && (p[w(490)] = p[w(490)] || w(1275)), p;
      }, serialize: function(p, y) {
        const w = e;
        var L = String(p[w(2974)]).toLowerCase() === w(2841);
        return (p[w(2703)] === (L ? 443 : 80) || p.port === "") && (p[w(2703)] = void 0), !p[w(2474)] && (p.path = "/"), p;
      } }, ma = { scheme: e(2841), domainHost: Z0[e(684)], parse: Z0[e(2774)], serialize: Z0[e(3043)] };
      function ba(I) {
        const p = e;
        return typeof I[p(2246)] === p(3106) ? I[p(2246)] : String(I[p(2974)])[p(1945)]() === "wss";
      }
      var K0 = { scheme: "ws", domainHost: !0, parse: function(p, y) {
        const w = e;
        var L = p;
        return L[w(2246)] = ba(L), L[w(1160)] = (L.path || "/") + (L[w(1267)] ? "?" + L[w(1267)] : ""), L[w(2474)] = void 0, L[w(1267)] = void 0, L;
      }, serialize: function(p, y) {
        const w = e;
        if ((p[w(2703)] === (ba(p) ? 443 : 80) || p.port === "") && (p.port = void 0), typeof p[w(2246)] === w(3106) && (p[w(2974)] = p[w(2246)] ? w(728) : "ws", p[w(2246)] = void 0), p.resourceName) {
          var L = p[w(1160)][w(3263)]("?"), $ = h(L, 2), ie = $[0], ue = $[1];
          p.path = ie && ie !== "/" ? ie : void 0, p[w(1267)] = ue, p[w(1160)] = void 0;
        }
        return p[w(2970)] = void 0, p;
      } }, ga = { scheme: "wss", domainHost: K0[e(684)], parse: K0[e(2774)], serialize: K0[e(3043)] }, Cn = {}, ya = e(2113) + e(3240) + "]", o0 = e(1243), _n = n(n("%[EFef]" + o0 + "%" + o0 + o0 + "%" + o0 + o0) + "|" + n("%[89A-Fa-f]" + o0 + "%" + o0 + o0) + "|" + n("%" + o0 + o0)), Fn = e(3110), Tn = e(2877), Nn = s(Tn, e(1889)), qn = "[\\!\\$\\'\\(\\)\\*\\+\\,\\;\\:\\@]", An = new RegExp(ya, "g"), L0 = new RegExp(_n, "g"), On = new RegExp(s(e(2817), Fn, e(1317), e(2520), Nn), "g"), va = new RegExp(s("[^]", ya, qn), "g"), Dn = va;
      function $x(I) {
        const p = e;
        var y = X(I);
        return y[p(2314)](An) ? y : I;
      }
      var wa = { scheme: e(1764), parse: function(p, y) {
        const w = e;
        var L = p, $ = L.to = L.path ? L[w(2474)][w(3263)](",") : [];
        if (L[w(2474)] = void 0, L.query) {
          for (var ie = !1, ue = {}, Ee = L[w(1267)][w(3263)]("&"), je = 0, Be = Ee[w(2710)]; je < Be; ++je) {
            var Re = Ee[je].split("=");
            switch (Re[0]) {
              case "to":
                for (var De = Re[1][w(3263)](","), We = 0, ge = De[w(2710)]; We < ge; ++We)
                  $.push(De[We]);
                break;
              case w(1005):
                L[w(1005)] = b0(Re[1], y);
                break;
              case w(1946):
                L.body = b0(Re[1], y);
                break;
              default:
                ie = !0, ue[b0(Re[0], y)] = b0(Re[1], y);
                break;
            }
          }
          ie && (L.headers = ue);
        }
        L[w(1267)] = void 0;
        for (var $e = 0, Ze = $[w(2710)]; $e < Ze; ++$e) {
          var Ue = $[$e][w(3263)]("@");
          if (Ue[0] = b0(Ue[0]), y[w(2128)]) Ue[1] = b0(Ue[1], y)[w(1945)]();
          else try {
            Ue[1] = F.toASCII(b0(Ue[1], y)[w(1945)]());
          } catch (I0) {
            L[w(490)] = L[w(490)] || w(1071) + I0;
          }
          $[$e] = Ue[w(1592)]("@");
        }
        return L;
      }, serialize: function(p, y) {
        const w = e;
        var L = p, $ = u(p.to);
        if ($) {
          for (var ie = 0, ue = $[w(2710)]; ie < ue; ++ie) {
            var Ee = String($[ie]), je = Ee.lastIndexOf("@"), Be = Ee[w(1387)](0, je)[w(1521)](L0, $x)[w(1521)](L0, c)[w(1521)](On, J), Re = Ee[w(1387)](je + 1);
            try {
              Re = y.iri ? F[w(1043)](Re) : F[w(1794)](b0(Re, y)[w(1945)]());
            } catch ($e) {
              L[w(490)] = L[w(490)] || w(1030) + (y[w(549)] ? w(2424) : w(513)) + w(1622) + $e;
            }
            $[ie] = Be + "@" + Re;
          }
          L[w(2474)] = $[w(1592)](",");
        }
        var De = p[w(1581)] = p[w(1581)] || {};
        p[w(1005)] && (De.subject = p.subject), p.body && (De[w(1946)] = p[w(1946)]);
        var We = [];
        for (var ge in De)
          De[ge] !== Cn[ge] && We[w(3062)](ge.replace(L0, $x)[w(1521)](L0, c)[w(1521)](va, J) + "=" + De[ge][w(1521)](L0, $x)[w(1521)](L0, c)[w(1521)](Dn, J));
        return We[w(2710)] && (L.query = We.join("&")), L;
      } }, jn = /^([^\:]+)\:(.*)/, Sa = { scheme: e(1832), parse: function(p, y) {
        const w = e;
        var L = p.path && p[w(2474)][w(2314)](jn), $ = p;
        if (L) {
          var ie = y[w(2974)] || $[w(2974)] || w(1832), ue = L[1][w(1945)](), Ee = L[2], je = ie + ":" + (y[w(2124)] || ue), Be = j[je];
          $[w(2124)] = ue, $[w(803)] = Ee, $.path = void 0, Be && ($ = Be[w(2774)]($, y));
        } else $[w(490)] = $[w(490)] || "URN can not be parsed.";
        return $;
      }, serialize: function(p, y) {
        const w = e;
        var L = y[w(2974)] || p[w(2974)] || w(1832), $ = p[w(2124)], ie = L + ":" + (y.nid || $), ue = j[ie];
        ue && (p = ue[w(3043)](p, y));
        var Ee = p, je = p[w(803)];
        return Ee[w(2474)] = ($ || y[w(2124)]) + ":" + je, Ee;
      } }, Mn = /^[0-9A-Fa-f]{8}(?:\-[0-9A-Fa-f]{4}){3}\-[0-9A-Fa-f]{12}$/, ka = { scheme: e(2437), parse: function(p, y) {
        const w = e;
        var L = p;
        return L[w(1551)] = L[w(803)], L[w(803)] = void 0, !y.tolerant && (!L.uuid || !L.uuid[w(2314)](Mn)) && (L[w(490)] = L[w(490)] || w(884)), L;
      }, serialize: function(p, y) {
        const w = e;
        var L = p;
        return L.nss = (p[w(1551)] || "")[w(1945)](), L;
      } };
      j[Z0[e(2974)]] = Z0, j[ma.scheme] = ma, j[K0[e(2974)]] = K0, j[ga.scheme] = ga, j[wa[e(2974)]] = wa, j[Sa.scheme] = Sa, j[ka[e(2974)]] = ka, r[e(777)] = j, r[e(3084)] = J, r[e(1362)] = X, r.parse = Ae, r[e(1652)] = Oe, r.serialize = He, r[e(1050)] = Ye, r[e(2457)] = M0, r.normalize = Lx, r[e(495)] = pa, r[e(1918)] = Rn, r[e(1326)] = b0, Object[e(2796)](r, e(1605), { value: !0 });
    });
  })(Y0, Y0[o(732)])), Y0[o(732)];
}
var Qx, nr;
function la() {
  return nr || (nr = 1, Qx = function o(x, t) {
    const r = K;
    if (x === t) return !0;
    if (x && t && typeof x == r(1304) && typeof t == "object") {
      if (x[r(2038)] !== t[r(2038)]) return !1;
      var e, s, n;
      if (Array[r(3255)](x)) {
        if (e = x.length, e != t[r(2710)]) return !1;
        for (s = e; s-- !== 0; ) if (!o(x[s], t[s])) return !1;
        return !0;
      }
      if (x.constructor === RegExp) return x[r(1038)] === t.source && x.flags === t[r(2924)];
      if (x.valueOf !== Object[r(2587)].valueOf) return x[r(2614)]() === t.valueOf();
      if (x.toString !== Object[r(2587)][r(2732)]) return x[r(2732)]() === t[r(2732)]();
      if (n = Object[r(2123)](x), e = n[r(2710)], e !== Object[r(2123)](t).length) return !1;
      for (s = e; s-- !== 0; ) if (!Object[r(2587)][r(1315)].call(t, n[s])) return !1;
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
function n2() {
  return or || (or = 1, Xx = function(x) {
    const t = K;
    for (var r = 0, e = x.length, s = 0, n; s < e; )
      r++, n = x[t(901)](s++), n >= 55296 && n <= 56319 && s < e && (n = x.charCodeAt(s), (n & 64512) == 56320 && s++);
    return r;
  }), Xx;
}
var Yx, ir;
function W0() {
  const o = a;
  if (ir) return Yx;
  ir = 1, Yx = { copy: x, checkDataType: t, checkDataTypes: r, coerceToTypes: s, toHash: n, getProperty: u, escapeQuotes: f, equal: la(), ucs2length: n2(), varOccurences: l, varReplace: d, schemaHasRules: g, schemaHasRulesExcept: h, schemaUnknownRules: m, toQuotedString: v, getPathExpr: k, getPath: P, getData: R, unescapeFragment: C, unescapeJsonPointer: M, escapeFragment: A, escapeJsonPointer: O };
  function x(_, N) {
    N = N || {};
    for (var z in _) N[z] = _[z];
    return N;
  }
  function t(_, N, z, U) {
    const H = K;
    var G = U ? H(2781) : " === ", re = U ? " || " : H(3061), se = U ? "!" : "", fe = U ? "" : "!";
    switch (_) {
      case H(1959):
        return N + G + H(1959);
      case H(529):
        return se + H(1915) + N + ")";
      case "object":
        return "(" + se + N + re + H(1762) + N + G + '"object"' + re + fe + H(1915) + N + "))";
      case H(766):
        return "(typeof " + N + G + H(1513) + re + fe + "(" + N + H(647) + re + N + G + N + (z ? re + se + "isFinite(" + N + ")" : "") + ")";
      case H(2665):
        return H(3201) + N + G + '"' + _ + '"' + (z ? re + se + "isFinite(" + N + ")" : "") + ")";
      default:
        return "typeof " + N + G + '"' + _ + '"';
    }
  }
  function r(_, N, z) {
    const U = K;
    switch (_.length) {
      case 1:
        return t(_[0], N, z, !0);
      default:
        var H = "", G = n(_);
        G[U(529)] && G[U(1304)] && (H = G[U(1959)] ? "(" : "(!" + N + " || ", H += U(1762) + N + ' !== "object")', delete G.null, delete G[U(529)], delete G[U(1304)]), G.number && delete G[U(766)];
        for (var re in G) H += (H ? U(3061) : "") + t(re, N, z, !0);
        return H;
    }
  }
  var e = n([o(1361), o(2665), o(766), o(3106), o(1959)]);
  function s(_, N) {
    const z = o;
    if (Array[z(3255)](N)) {
      for (var U = [], H = 0; H < N[z(2710)]; H++) {
        var G = N[H];
        e[G] ? U[U.length] = G : _ === "array" && G === "array" && (U[U[z(2710)]] = G);
      }
      if (U[z(2710)]) return U;
    } else {
      if (e[N]) return [N];
      if (_ === "array" && N === z(529)) return ["array"];
    }
  }
  function n(_) {
    for (var N = {}, z = 0; z < _.length; z++) N[_[z]] = !0;
    return N;
  }
  var i = /^[a-z$_][a-z$_0-9]*$/i, c = /'|\\/g;
  function u(_) {
    return typeof _ == "number" ? "[" + _ + "]" : i[o(2346)](_) ? "." + _ : "['" + f(_) + "']";
  }
  function f(_) {
    const N = o;
    return _[N(1521)](c, N(898))[N(1521)](/\n/g, "\\n")[N(1521)](/\r/g, "\\r")[N(1521)](/\f/g, "\\f")[N(1521)](/\t/g, "\\t");
  }
  function l(_, N) {
    const z = o;
    N += z(1567);
    var U = _[z(2314)](new RegExp(N, "g"));
    return U ? U.length : 0;
  }
  function d(_, N, z) {
    const U = o;
    return N += "([^0-9])", z = z[U(1521)](/\$/g, U(1017)), _[U(1521)](new RegExp(N, "g"), z + "$1");
  }
  function g(_, N) {
    if (typeof _ == "boolean") return !_;
    for (var z in _) if (N[z]) return !0;
  }
  function h(_, N, z) {
    if (typeof _ == o(3106)) return !_ && z != "not";
    for (var H in _) if (H != z && N[H]) return !0;
  }
  function m(_, N) {
    if (typeof _ != o(3106)) {
      for (var U in _) if (!N[U]) return U;
    }
  }
  function v(_) {
    return "'" + f(_) + "'";
  }
  function k(_, N, z, U) {
    const H = o;
    var G = z ? H(2401) + N + (U ? "" : H(1094)) : U ? H(2105) + N + H(1926) : H(2878) + N + " + '\\']'";
    return E(_, G);
  }
  function P(_, N, z) {
    var U = v(z ? "/" + O(N) : u(N));
    return E(_, U);
  }
  var T = /^\/(?:[^~]|~0|~1)*$/, q = /^([0-9]+)(#|\/(?:[^~]|~0|~1)*)?$/;
  function R(_, N, z) {
    const U = o;
    var H, G, re, se;
    if (_ === "") return U(2871);
    if (_[0] == "/") {
      if (!T.test(_)) throw new Error(U(3016) + _);
      G = _, re = "rootData";
    } else {
      if (se = _.match(q), !se) throw new Error(U(3016) + _);
      if (H = +se[1], G = se[2], G == "#") {
        if (H >= N) throw new Error(U(1862) + H + U(2381) + N);
        return z[N - H];
      }
      if (H > N) throw new Error(U(1518) + H + " levels up, current level is " + N);
      if (re = "data" + (N - H || ""), !G) return re;
    }
    for (var fe = re, de = G[U(3263)]("/"), le = 0; le < de[U(2710)]; le++) {
      var Se = de[le];
      Se && (re += u(M(Se)), fe += U(3061) + re);
    }
    return fe;
  }
  function E(_, N) {
    const z = o;
    return _ == '""' ? N : (_ + " + " + N)[z(1521)](/([^\\])' \+ '/g, "$1");
  }
  function C(_) {
    return M(decodeURIComponent(_));
  }
  function A(_) {
    return encodeURIComponent(O(_));
  }
  function O(_) {
    return _[o(1521)](/~/g, "~0").replace(/\//g, "~1");
  }
  function M(_) {
    const N = o;
    return _[N(1521)](/~1/g, "/")[N(1521)](/~0/g, "~");
  }
  return Yx;
}
var et, cr;
function yn() {
  if (cr) return et;
  cr = 1;
  var o = W0();
  et = x;
  function x(t) {
    o[K(2615)](t, this);
  }
  return et;
}
var xt = { exports: {} }, ur;
function o2() {
  const o = a;
  if (ur) return xt[o(732)];
  ur = 1;
  var x = xt[o(732)] = function(e, s, n) {
    const i = o;
    typeof s == "function" && (n = s, s = {}), n = s.cb || n;
    var c = typeof n == i(1936) ? n : n[i(1093)] || function() {
    }, u = n.post || function() {
    };
    t(s, c, u, e, "", e);
  };
  x[o(1997)] = { additionalItems: !0, items: !0, contains: !0, additionalProperties: !0, propertyNames: !0, not: !0 }, x[o(2510)] = { items: !0, allOf: !0, anyOf: !0, oneOf: !0 }, x[o(3231)] = { definitions: !0, properties: !0, patternProperties: !0, dependencies: !0 }, x[o(1505)] = { default: !0, enum: !0, const: !0, required: !0, maximum: !0, minimum: !0, exclusiveMaximum: !0, exclusiveMinimum: !0, multipleOf: !0, maxLength: !0, minLength: !0, pattern: !0, format: !0, maxItems: !0, minItems: !0, uniqueItems: !0, maxProperties: !0, minProperties: !0 };
  function t(e, s, n, i, c, u, f, l, d, g) {
    const h = o;
    if (i && typeof i == h(1304) && !Array[h(3255)](i)) {
      s(i, c, u, f, l, d, g);
      for (var m in i) {
        var v = i[m];
        if (Array[h(3255)](v)) {
          if (m in x[h(2510)])
            for (var k = 0; k < v.length; k++) t(e, s, n, v[k], c + "/" + m + "/" + k, u, c, m, i, k);
        } else if (m in x[h(3231)]) {
          if (v && typeof v == h(1304))
            for (var P in v) t(e, s, n, v[P], c + "/" + m + "/" + r(P), u, c, m, i, P);
        } else (m in x[h(1997)] || e[h(2640)] && !(m in x[h(1505)])) && t(e, s, n, v, c + "/" + m, u, c, m, i);
      }
      n(i, c, u, f, l, d, g);
    }
  }
  function r(e) {
    const s = o;
    return e.replace(/~/g, "~0")[s(1521)](/\//g, "~1");
  }
  return xt[o(732)];
}
var tt, fr;
function da() {
  const o = a;
  if (fr) return tt;
  fr = 1;
  var x = s2(), t = la(), r = W0(), e = yn(), s = o2();
  tt = n, n.normalizeId = P, n[o(3081)] = m, n.url = T, n[o(2707)] = q, n[o(3126)] = d, n[o(1425)] = i;
  function n(R, E, C) {
    const A = o;
    var O = this[A(497)][C];
    if (typeof O == A(1361))
      if (this._refs[O]) O = this[A(497)][O];
      else return n[A(1522)](this, R, E, O);
    if (O = O || this[A(2265)][C], O instanceof e) return d(O[A(1425)], this[A(1068)].inlineRefs) ? O[A(1425)] : O[A(3181)] || this._compile(O);
    var M = i[A(1522)](this, E, C), _, N, z;
    return M && (_ = M[A(1425)], E = M[A(2212)], z = M.baseId), _ instanceof e ? N = _[A(3181)] || R[A(1522)](this, _[A(1425)], E, void 0, z) : _ !== void 0 && (N = d(_, this[A(1068)][A(2998)]) ? _ : R[A(1522)](this, _, E, void 0, z)), N;
  }
  function i(R, E) {
    const C = o;
    var A = x[C(2774)](E), O = v(A), M = m(this._getId(R[C(1425)]));
    if (Object[C(2123)](R.schema)[C(2710)] === 0 || O !== M) {
      var _ = P(O), N = this[C(497)][_];
      if (typeof N == C(1361)) return c[C(1522)](this, R, N, A);
      if (N instanceof e)
        N[C(3181)] || this[C(1026)](N), R = N;
      else if (N = this[C(2265)][_], N instanceof e) {
        if (N.validate || this[C(1026)](N), _ == P(E)) return { schema: N, root: R, baseId: M };
        R = N;
      } else return;
      if (!R[C(1425)]) return;
      M = m(this[C(1776)](R[C(1425)]));
    }
    return f[C(1522)](this, A, M, R.schema, R);
  }
  function c(R, E, C) {
    const A = o;
    var O = i[A(1522)](this, R, E);
    if (O) {
      var M = O.schema, _ = O[A(805)];
      R = O[A(2212)];
      var N = this[A(1776)](M);
      return N && (_ = T(_, N)), f[A(1522)](this, C, _, M, R);
    }
  }
  var u = r[o(709)]([o(3005), "patternProperties", o(2218), o(1110), o(2451)]);
  function f(R, E, C, A) {
    const O = o;
    if (R[O(2970)] = R[O(2970)] || "", R.fragment.slice(0, 1) == "/") {
      for (var M = R[O(2970)].split("/"), _ = 1; _ < M[O(2710)]; _++) {
        var N = M[_];
        if (N) {
          if (N = r[O(2770)](N), C = C[N], C === void 0) break;
          var z;
          if (!u[N] && (z = this[O(1776)](C), z && (E = T(E, z)), C[O(885)])) {
            var U = T(E, C.$ref), H = i[O(1522)](this, A, U);
            H && (C = H[O(1425)], A = H[O(2212)], E = H[O(805)]);
          }
        }
      }
      if (C !== void 0 && C !== A[O(1425)]) return { schema: C, root: A, baseId: E };
    }
  }
  var l = r[o(709)]([o(2076), o(802), "pattern", o(649), o(1312), o(1651), o(2371), o(1335), o(1919), o(631), o(2226), o(1684), o(2798), o(2438), o(2218)]);
  function d(R, E) {
    if (E === !1) return !1;
    if (E === void 0 || E === !0) return g(R);
    if (E) return h(R) <= E;
  }
  function g(R) {
    const E = o;
    var C;
    if (Array[E(3255)](R)) {
      for (var A = 0; A < R.length; A++)
        if (C = R[A], typeof C == "object" && !g(C)) return !1;
    } else for (var O in R)
      if (O == "$ref" || (C = R[O], typeof C == E(1304) && !g(C))) return !1;
    return !0;
  }
  function h(R) {
    const E = o;
    var C = 0, A;
    if (Array[E(3255)](R)) {
      for (var O = 0; O < R[E(2710)]; O++)
        if (A = R[O], typeof A == "object" && (C += h(A)), C == 1 / 0) return 1 / 0;
    } else for (var M in R) {
      if (M == "$ref") return 1 / 0;
      if (l[M]) C++;
      else if (A = R[M], typeof A == E(1304) && (C += h(A) + 1), C == 1 / 0) return 1 / 0;
    }
    return C;
  }
  function m(R, E) {
    const C = o;
    E !== !1 && (R = P(R));
    var A = x[C(2774)](R);
    return v(A);
  }
  function v(R) {
    return x.serialize(R).split("#")[0] + "#";
  }
  var k = /#\/?$/;
  function P(R) {
    return R ? R[o(1521)](k, "") : "";
  }
  function T(R, E) {
    const C = o;
    return E = P(E), x[C(2457)](R, E);
  }
  function q(R) {
    var E = P(this._getId(R)), C = { "": E }, A = { "": m(E, !1) }, O = {}, M = this;
    return s(R, { allKeys: !0 }, function(_, N, z, U, H, G, re) {
      const se = K;
      if (N !== "") {
        var fe = M._getId(_), de = C[U], le = A[U] + "/" + H;
        if (re !== void 0 && (le += "/" + (typeof re == se(2665) ? re : r[se(1675)](re))), typeof fe == se(1361)) {
          fe = de = P(de ? x[se(2457)](de, fe) : fe);
          var Se = M._refs[fe];
          if (typeof Se == se(1361) && (Se = M._refs[Se]), Se && Se[se(1425)]) {
            if (!t(_, Se[se(1425)])) throw new Error(se(2577) + fe + se(2730));
          } else if (fe != P(le))
            if (fe[0] == "#") {
              if (O[fe] && !t(_, O[fe])) throw new Error(se(2577) + fe + '" resolves to more than one schema');
              O[fe] = _;
            } else M._refs[fe] = le;
        }
        C[N] = de, A[N] = le;
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
  var x = da();
  at = { Validation: e(t), MissingRef: e(r) };
  function t(s) {
    const n = K;
    this[n(1044)] = n(2874), this[n(2800)] = s, this[n(1430)] = this[n(2183)] = !0;
  }
  r[o(1044)] = function(s, n) {
    const i = o;
    return i(857) + n + i(2227) + s;
  };
  function r(s, n, i) {
    const c = o;
    this.message = i || r.message(s, n), this.missingRef = x.url(s, n), this[c(528)] = x[c(3133)](x[c(3081)](this.missingRef));
  }
  function e(s) {
    const n = o;
    return s[n(2587)] = Object.create(Error[n(2587)]), s.prototype.constructor = s, s;
  }
  return at;
}
var rt, dr;
function vn() {
  return dr || (dr = 1, rt = function(o, x) {
    const t = K;
    x || (x = {}), typeof x == "function" && (x = { cmp: x });
    var r = typeof x.cycles === t(3106) ? x.cycles : !1, e = x[t(1996)] && /* @__PURE__ */ (function(n) {
      return function(i) {
        return function(c, u) {
          var f = { key: c, value: i[c] }, l = { key: u, value: i[u] };
          return n(f, l);
        };
      };
    })(x[t(1996)]), s = [];
    return (function n(i) {
      const c = t;
      if (i && i[c(1363)] && typeof i[c(1363)] === c(1936) && (i = i[c(1363)]()), i !== void 0) {
        if (typeof i == c(2665)) return isFinite(i) ? "" + i : c(1959);
        if (typeof i != "object") return JSON.stringify(i);
        var u, f;
        if (Array[c(3255)](i)) {
          for (f = "[", u = 0; u < i[c(2710)]; u++)
            u && (f += ","), f += n(i[u]) || c(1959);
          return f + "]";
        }
        if (i === null) return c(1959);
        if (s[c(2436)](i) !== -1) {
          if (r) return JSON.stringify(c(3070));
          throw new TypeError("Converting circular structure to JSON");
        }
        var l = s.push(i) - 1, d = Object[c(2123)](i)[c(841)](e && e(i));
        for (f = "", u = 0; u < d[c(2710)]; u++) {
          var g = d[u], h = n(i[g]);
          h && (f && (f += ","), f += JSON.stringify(g) + ":" + h);
        }
        return s[c(2881)](l, 1), "{" + f + "}";
      }
    })(o);
  }), rt;
}
var st, hr;
function wn() {
  return hr || (hr = 1, st = function(x, t, r) {
    const e = K;
    var s = "", n = x[e(1425)][e(1101)] === !0, i = x[e(1975)][e(1786)](x[e(1425)], x.RULES[e(1096)], e(885)), c = x.self[e(1776)](x.schema);
    if (x[e(1544)][e(868)]) {
      var u = x.util.schemaUnknownRules(x[e(1425)], x[e(2996)][e(1997)]);
      if (u) {
        var f = e(2198) + u;
        if (x[e(1544)][e(868)] === e(1635)) x[e(2303)].warn(f);
        else throw new Error(f);
      }
    }
    if (x[e(2918)] && (s += e(2821), n && (x[e(2416)] = !0, s += e(3038)), s += e(2169), c && (x.opts[e(986)] || x[e(1544)][e(1279)]) && (s += " " + ("/*# sourceURL=" + c + e(2860)) + " ")), typeof x[e(1425)] == e(3106) || !(i || x[e(1425)][e(885)])) {
      var t = e(1452), l = x[e(1082)], d = x[e(1498)], g = x[e(1425)][t], h = x.schemaPath + x[e(1975)][e(3039)](t), m = x.errSchemaPath + "/" + t, E = !x[e(1544)][e(3009)], O, v = e(2663) + (d || ""), R = e(1122) + l;
      if (x.schema === !1) {
        x[e(2918)] ? E = !0 : s += e(2675) + R + e(1500);
        var k = k || [];
        k.push(s), s = "", x[e(559)] !== !1 ? (s += " { keyword: '" + (O || e(1452)) + e(2387) + x.errorPath + " , schemaPath: " + x.util[e(1767)](m) + e(1676), x[e(1544)].messages !== !1 && (s += e(1380)), x.opts[e(2491)] && (s += e(1663) + x[e(1262)] + e(1844) + v + " "), s += " } ") : s += " {} ";
        var P = s;
        s = k[e(2900)](), !x[e(2612)] && E ? x[e(2416)] ? s += " throw new ValidationError([" + P + e(2300) : s += e(2213) + P + e(702) : s += e(2636) + P + e(2653);
      } else x.isTop ? n ? s += e(936) : s += e(2231) : s += " var " + R + e(2411);
      return x.isTop && (s += e(2163)), s;
    }
    if (x.isTop) {
      var T = x[e(2918)], l = x[e(1082)] = 0, d = x[e(1498)] = 0, v = "data";
      if (x[e(2066)] = x.resolve[e(3081)](x[e(2007)][e(1776)](x[e(2212)][e(1425)])), x[e(805)] = x[e(805)] || x.rootId, delete x[e(2918)], x[e(662)] = [""], x[e(1425)][e(2485)] !== void 0 && x.opts[e(2088)] && x.opts[e(2674)]) {
        var q = e(1774);
        if (x[e(1544)][e(2674)] === e(1635)) x[e(2303)][e(1114)](q);
        else throw new Error(q);
      }
      s += " var vErrors = null; ", s += e(617), s += e(1866);
    } else {
      var l = x[e(1082)], d = x.dataLevel, v = e(2663) + (d || "");
      if (c && (x[e(805)] = x[e(2457)][e(2120)](x.baseId, c)), n && !x[e(2416)]) throw new Error(e(1860));
      s += e(860) + l + e(683);
    }
    var R = "valid" + l, E = !x[e(1544)][e(3009)], C = "", A = "", O, M = x[e(1425)][e(2076)], _ = Array[e(3255)](M);
    if (M && x[e(1544)][e(2644)] && x[e(1425)][e(2644)] === !0 && (_ ? M[e(2436)](e(1959)) == -1 && (M = M.concat(e(1959))) : M != e(1959) && (M = [M, "null"], _ = !0)), _ && M.length == 1 && (M = M[0], _ = !1), x[e(1425)][e(885)] && i) {
      if (x[e(1544)][e(2430)] == e(902)) throw new Error(e(2191) + x[e(569)] + e(2001));
      x[e(1544)][e(2430)] !== !0 && (i = !1, x.logger[e(1114)]('$ref: keywords ignored in schema at path "' + x[e(569)] + '"'));
    }
    if (x[e(1425)].$comment && x[e(1544)][e(2786)] && (s += " " + x[e(2996)][e(1096)][e(2786)][e(2427)](x, e(2786))), M) {
      if (x[e(1544)].coerceTypes) var N = x[e(1975)].coerceToTypes(x[e(1544)][e(2597)], M);
      var z = x[e(2996)][e(2795)][M];
      if (N || _ || z === !0 || z && !ke(z)) {
        var h = x[e(1262)] + e(754), m = x[e(569)] + "/type", h = x[e(1262)] + e(754), m = x[e(569)] + "/type", U = _ ? e(1808) : "checkDataType";
        if (s += " if (" + x.util[U](M, v, x[e(1544)].strictNumbers, !0) + ") { ", N) {
          var H = e(1236) + l, G = e(3151) + l;
          s += e(2675) + H + e(1715) + v + e(1691) + G + " = undefined; ", x[e(1544)].coerceTypes == "array" && (s += e(1754) + H + e(2189) + v + ") && " + v + e(1041) + v + e(2486) + v + "[0]; " + H + e(1715) + v + e(2318) + x[e(1975)][e(1947)](x.schema[e(2076)], v, x.opts[e(1565)]) + ") " + G + e(2486) + v + e(2859)), s += e(1754) + G + e(2071);
          var re = N;
          if (re)
            for (var se, fe = -1, de = re.length - 1; fe < de; )
              se = re[fe += 1], se == e(1361) ? s += e(1408) + H + e(821) + H + e(1385) + G + " = '' + " + v + e(2165) + v + e(956) + G + e(1157) : se == e(2665) || se == e(766) ? (s += " else if (" + H + e(664) + v + " === null || (" + H + e(966) + v + e(3061) + v + e(1517) + v + " ", se == e(766) && (s += e(1953) + v + e(647)), s += ")) " + G + e(1815) + v + "; ") : se == e(3106) ? s += " else if (" + v + e(1197) + v + e(1863) + v + " === null) " + G + e(1467) + v + e(556) + v + e(1814) + G + " = true; " : se == e(1959) ? s += e(1408) + v + " === '' || " + v + " === 0 || " + v + e(2194) + G + e(3278) : x[e(1544)][e(2597)] == "array" && se == e(529) && (s += e(1408) + H + " == 'string' || " + H + e(821) + H + e(664) + v + e(3079) + G + e(2498) + v + e(3243));
          s += e(3214);
          var k = k || [];
          k.push(s), s = "", x[e(559)] !== !1 ? (s += e(1108) + (O || e(2076)) + e(2387) + x[e(1935)] + e(2278) + x[e(1975)][e(1767)](m) + " , params: { type: '", _ ? s += "" + M[e(1592)](",") : s += "" + M, s += "' } ", x[e(1544)][e(1696)] !== !1 && (s += " , message: 'should be ", _ ? s += "" + M[e(1592)](",") : s += "" + M, s += "' "), x[e(1544)][e(2491)] && (s += e(1346) + h + e(2408) + x[e(1262)] + e(1844) + v + " "), s += e(1411)) : s += e(3261);
          var P = s;
          s = k[e(2900)](), !x[e(2612)] && E ? x[e(2416)] ? s += e(1499) + P + "]); " : s += e(2213) + P + e(702) : s += e(2636) + P + e(2653), s += e(1062) + G + " !== undefined) {  ";
          var le = d ? e(2663) + (d - 1 || "") : e(2072), Se = d ? x[e(662)][d] : e(1486);
          s += " " + v + e(2486) + G + "; ", !d && (s += e(2315) + le + e(2771)), s += " " + le + "[" + Se + e(1254) + G + e(2859);
        } else {
          var k = k || [];
          k[e(3062)](s), s = "", x.createErrors !== !1 ? (s += e(1108) + (O || e(2076)) + e(2387) + x[e(1935)] + " , schemaPath: " + x[e(1975)][e(1767)](m) + e(1616), _ ? s += "" + M[e(1592)](",") : s += "" + M, s += e(871), x[e(1544)][e(1696)] !== !1 && (s += " , message: 'should be ", _ ? s += "" + M[e(1592)](",") : s += "" + M, s += "' "), x[e(1544)][e(2491)] && (s += e(1346) + h + e(2408) + x.schemaPath + e(1844) + v + " "), s += " } ") : s += e(3261);
          var P = s;
          s = k.pop(), !x[e(2612)] && E ? x[e(2416)] ? s += e(1499) + P + e(2300) : s += e(2213) + P + "]; return false; " : s += e(2636) + P + e(2653);
        }
        s += e(1411);
      }
    }
    if (x.schema[e(885)] && !i) s += " " + x[e(2996)].all[e(885)][e(2427)](x, e(885)) + " ", E && (s += e(819), T ? s += "0" : s += e(2940) + l, s += e(2834), A += "}");
    else {
      var _e = x[e(2996)];
      if (_e) {
        for (var z, Me = -1, Fe = _e[e(2710)] - 1; Me < Fe; )
          if (z = _e[Me += 1], ke(z)) {
            if (z.type && (s += e(1754) + x[e(1975)][e(1947)](z[e(2076)], v, x[e(1544)][e(1565)]) + e(2834)), x[e(1544)][e(2088)]) {
              if (z[e(2076)] == e(1304) && x[e(1425)][e(3005)]) {
                var g = x[e(1425)][e(3005)], Je = Object[e(2123)](g), D = Je;
                if (D)
                  for (var F, j = -1, J = D[e(2710)] - 1; j < J; ) {
                    F = D[j += 1];
                    var X = g[F];
                    if (X[e(2485)] !== void 0) {
                      var V = v + x[e(1975)][e(3039)](F);
                      if (x[e(2612)]) {
                        if (x[e(1544)].strictDefaults) {
                          var q = e(1087) + V;
                          if (x[e(1544)][e(2674)] === e(1635)) x[e(2303)][e(1114)](q);
                          else throw new Error(q);
                        }
                      } else s += e(1754) + V + e(562), x[e(1544)][e(2088)] == e(1800) && (s += e(1887) + V + " === null || " + V + " === '' "), s += e(2368) + V + e(2486), x[e(1544)][e(2088)] == "shared" ? s += " " + x.useDefault(X[e(2485)]) + " " : s += " " + JSON[e(1031)](X[e(2485)]) + " ", s += "; ";
                    }
                  }
              } else if (z[e(2076)] == e(529) && Array[e(3255)](x[e(1425)].items)) {
                var Y = x.schema.items;
                if (Y) {
                  for (var X, fe = -1, ce = Y[e(2710)] - 1; fe < ce; )
                    if (X = Y[fe += 1], X.default !== void 0) {
                      var V = v + "[" + fe + "]";
                      if (x[e(2612)]) {
                        if (x[e(1544)][e(2674)]) {
                          var q = e(1087) + V;
                          if (x[e(1544)][e(2674)] === e(1635)) x[e(2303)].warn(q);
                          else throw new Error(q);
                        }
                      } else s += e(1754) + V + e(562), x[e(1544)][e(2088)] == e(1800) && (s += e(1887) + V + e(2187) + V + " === '' "), s += e(2368) + V + e(2486), x[e(1544)][e(2088)] == e(2844) ? s += " " + x[e(1117)](X[e(2485)]) + " " : s += " " + JSON[e(1031)](X[e(2485)]) + " ", s += "; ";
                    }
                }
              }
            }
            var oe = z[e(2293)];
            if (oe) {
              for (var te, Le = -1, Ae = oe[e(2710)] - 1; Le < Ae; )
                if (te = oe[Le += 1], Ge(te)) {
                  var ze = te[e(2427)](x, te[e(2442)], z[e(2076)]);
                  ze && (s += " " + ze + " ", E && (C += "}"));
                }
            }
            if (E && (s += " " + C + " ", C = ""), z[e(2076)] && (s += e(1411), M && M === z[e(2076)] && !N)) {
              s += " else { ";
              var h = x[e(1262)] + e(754), m = x[e(569)] + e(506), k = k || [];
              k[e(3062)](s), s = "", x[e(559)] !== !1 ? (s += " { keyword: '" + (O || "type") + "' , dataPath: (dataPath || '') + " + x[e(1935)] + e(2278) + x[e(1975)][e(1767)](m) + e(1616), _ ? s += "" + M.join(",") : s += "" + M, s += e(871), x[e(1544)].messages !== !1 && (s += e(2991), _ ? s += "" + M[e(1592)](",") : s += "" + M, s += "' "), x[e(1544)][e(2491)] && (s += e(1346) + h + e(2408) + x[e(1262)] + e(1844) + v + " "), s += e(1411)) : s += e(3261);
              var P = s;
              s = k[e(2900)](), !x[e(2612)] && E ? x[e(2416)] ? s += e(1499) + P + e(2300) : s += " validate.errors = [" + P + e(702) : s += e(2636) + P + ";  if (vErrors === null) vErrors = [err]; else vErrors.push(err); errors++; ", s += e(1411);
            }
            E && (s += e(2377), T ? s += "0" : s += e(2940) + l, s += e(2834), A += "}");
          }
      }
    }
    E && (s += " " + A + " "), T ? (n ? (s += " if (errors === 0) return data;           ", s += " else throw new ValidationError(vErrors); ") : (s += e(2706), s += e(1195)), s += e(2373)) : s += e(2675) + R + e(2151) + l + ";";
    function ke(Qe) {
      const Oe = e;
      for (var He = Qe[Oe(2293)], Ye = 0; Ye < He[Oe(2710)]; Ye++) if (Ge(He[Ye])) return !0;
    }
    function Ge(Qe) {
      return x[e(1425)][Qe.keyword] !== void 0 || Qe.implements && n0(Qe);
    }
    function n0(Qe) {
      const Oe = e;
      for (var He = Qe[Oe(2673)], Ye = 0; Ye < He[Oe(2710)]; Ye++) if (x[Oe(1425)][He[Ye]] !== void 0) return !0;
    }
    return s;
  }), st;
}
var nt, pr;
function i2() {
  const o = a;
  if (pr) return nt;
  pr = 1;
  var x = da(), t = W0(), r = ha(), e = vn(), s = wn(), n = t[o(3159)], i = la(), c = r[o(1434)];
  nt = u;
  function u(P, T, q, R) {
    const E = o;
    var C = this, A = this._opts, O = [void 0], M = {}, _ = [], N = {}, z = [], U = {}, H = [];
    T = T || { schema: P, refVal: O, refs: M };
    var G = f[E(1522)](this, P, T, R), re = this[E(1837)][G[E(2230)]];
    if (G[E(817)]) return re[E(1739)] = Se;
    var se = this._formats, fe = this.RULES;
    try {
      var de = _e(P, T, q, R);
      re[E(3181)] = de;
      var le = re[E(1739)];
      return le && (le[E(1425)] = de.schema, le[E(2800)] = null, le.refs = de[E(588)], le[E(1269)] = de.refVal, le.root = de.root, le[E(1101)] = de[E(1101)], A[E(986)] && (le.source = de.source)), de;
    } finally {
      l[E(1522)](this, P, T, R);
    }
    function Se() {
      const V = E;
      var Y = re.validate, ce = Y[V(2692)](this, arguments);
      return Se[V(2800)] = Y[V(2800)], ce;
    }
    function _e(V, Y, ce, oe) {
      const te = E;
      var Le = !Y || Y && Y[te(1425)] == V;
      if (Y.schema != T[te(1425)]) return u[te(1522)](C, V, Y, ce, oe);
      var Ae = V[te(1101)] === !0, ze = s({ isTop: !0, schema: V, isRoot: Le, baseId: oe, root: Y, schemaPath: "", errSchemaPath: "#", errorPath: '""', MissingRefError: r[te(2003)], RULES: fe, validate: s, util: t, resolve: x, resolveRef: Me, usePattern: j, useDefault: J, useCustomRule: X, opts: A, formats: se, logger: C[te(2303)], self: C });
      ze = k(O, m) + k(_, g) + k(z, h) + k(H, v) + ze, A[te(1279)] && (ze = A[te(1279)](ze, V));
      var ke;
      try {
        var Ge = new Function(te(2007), "RULES", te(3155), te(2212), "refVal", te(1573), te(1912), te(495), te(3159), te(1995), ze);
        ke = Ge(C, fe, se, T, O, z, H, i, n, c), O[0] = ke;
      } catch (n0) {
        throw C[te(2303)].error(te(2137), ze), n0;
      }
      return ke.schema = V, ke[te(2800)] = null, ke[te(588)] = M, ke[te(1269)] = O, ke.root = Le ? ke : Y, Ae && (ke.$async = !0), A[te(986)] === !0 && (ke[te(1038)] = { code: ze, patterns: _, defaults: z }), ke;
    }
    function Me(V, Y, ce) {
      const oe = E;
      Y = x[oe(2120)](V, Y);
      var te = M[Y], Le, Ae;
      if (te !== void 0) return Le = O[te], Ae = oe(2022) + te + "]", F(Le, Ae);
      if (!ce && T[oe(588)]) {
        var ze = T[oe(588)][Y];
        if (ze !== void 0) return Le = T.refVal[ze], Ae = Fe(Y, Le), F(Le, Ae);
      }
      Ae = Fe(Y);
      var ke = x[oe(1522)](C, _e, T, Y);
      if (ke === void 0) {
        var Ge = q && q[Y];
        Ge && (ke = x[oe(3126)](Ge, A[oe(2998)]) ? Ge : u[oe(1522)](C, Ge, T, q, V));
      }
      if (ke === void 0) Je(Y);
      else return D(Y, ke), F(ke, Ae);
    }
    function Fe(V, Y) {
      const ce = E;
      var oe = O[ce(2710)];
      return O[oe] = Y, M[V] = oe, ce(1269) + oe;
    }
    function Je(V) {
      delete M[V];
    }
    function D(V, Y) {
      var ce = M[V];
      O[ce] = Y;
    }
    function F(V, Y) {
      return typeof V == "object" || typeof V == "boolean" ? { code: Y, schema: V, inline: !0 } : { code: Y, $async: V && !!V[E(1101)] };
    }
    function j(V) {
      const Y = E;
      var ce = N[V];
      return ce === void 0 && (ce = N[V] = _.length, _[ce] = V), Y(526) + ce;
    }
    function J(V) {
      const Y = E;
      switch (typeof V) {
        case Y(3106):
        case Y(2665):
          return "" + V;
        case Y(1361):
          return t.toQuotedString(V);
        case Y(1304):
          if (V === null) return Y(1959);
          var ce = e(V), oe = U[ce];
          return oe === void 0 && (oe = U[ce] = z[Y(2710)], z[oe] = V), "default" + oe;
      }
    }
    function X(V, Y, ce, oe) {
      const te = E;
      if (C[te(1068)].validateSchema !== !1) {
        var Le = V[te(1686)][te(1110)];
        if (Le && !Le.every(function(Ye) {
          const M0 = te;
          return Object[M0(2587)][M0(1315)].call(ce, Ye);
        })) throw new Error(te(2092) + Le[te(1592)](","));
        var Ae = V[te(1686)][te(2605)];
        if (Ae) {
          var ze = Ae(Y);
          if (!ze) {
            var ke = te(3113) + C[te(2766)](Ae.errors);
            if (C[te(1068)][te(2605)] == te(1635)) C[te(2303)][te(490)](ke);
            else throw new Error(ke);
          }
        }
      }
      var Ge = V[te(1686)][te(1835)], n0 = V[te(1686)].inline, Qe = V[te(1686)].macro, Oe;
      if (Ge) Oe = Ge.call(C, Y, ce, oe);
      else if (Qe)
        Oe = Qe[te(1522)](C, Y, ce, oe), A[te(2605)] !== !1 && C[te(2605)](Oe, !0);
      else if (n0) Oe = n0.call(C, oe, V[te(2442)], Y, ce);
      else if (Oe = V[te(1686)][te(3181)], !Oe) return;
      if (Oe === void 0) throw new Error('custom keyword "' + V[te(2442)] + '"failed to compile');
      var He = H[te(2710)];
      return H[He] = Oe, { code: te(1874) + He, validate: Oe };
    }
  }
  function f(P, T, q) {
    const R = o;
    var E = d[R(1522)](this, P, T, q);
    return E >= 0 ? { index: E, compiling: !0 } : (E = this[R(1837)][R(2710)], this[R(1837)][E] = { schema: P, root: T, baseId: q }, { index: E, compiling: !1 });
  }
  function l(P, T, q) {
    const R = o;
    var E = d[R(1522)](this, P, T, q);
    E >= 0 && this._compilations[R(2881)](E, 1);
  }
  function d(P, T, q) {
    const R = o;
    for (var E = 0; E < this[R(1837)][R(2710)]; E++) {
      var C = this[R(1837)][E];
      if (C[R(1425)] == P && C.root == T && C.baseId == q) return E;
    }
    return -1;
  }
  function g(P, T) {
    const q = o;
    return "var pattern" + P + q(2949) + t[q(1767)](T[P]) + ");";
  }
  function h(P) {
    const T = o;
    return T(858) + P + T(1813) + P + "];";
  }
  function m(P, T) {
    const q = o;
    return T[P] === void 0 ? "" : q(2052) + P + q(2413) + P + "];";
  }
  function v(P) {
    return "var customRule" + P + " = customRules[" + P + "];";
  }
  function k(P, T) {
    const q = o;
    if (!P.length) return "";
    for (var R = "", E = 0; E < P[q(2710)]; E++) R += T(E, P);
    return R;
  }
  return nt;
}
var ot = { exports: {} }, mr;
function c2() {
  const o = a;
  if (mr) return ot[o(732)];
  mr = 1;
  var x = ot[o(732)] = function() {
    const r = o;
    this[r(811)] = {};
  };
  return x.prototype[o(1142)] = function(r, e) {
    const s = o;
    this[s(811)][r] = e;
  }, x[o(2587)][o(674)] = function(r) {
    return this._cache[r];
  }, x[o(2587)].del = function(r) {
    const e = o;
    delete this[e(811)][r];
  }, x[o(2587)].clear = function() {
    const r = o;
    this[r(811)] = {};
  }, ot[o(732)];
}
var it, br;
function u2() {
  const o = a;
  if (br) return it;
  br = 1;
  var x = W0(), t = /^(\d\d\d\d)-(\d\d)-(\d\d)$/, r = [0, 31, 28, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31], e = /^(\d\d):(\d\d):(\d\d)(\.\d+)?(z|[+-]\d\d(?::?\d\d)?)?$/i, s = /^(?=.{1,253}\.?$)[a-z0-9](?:[a-z0-9-]{0,61}[a-z0-9])?(?:\.[a-z0-9](?:[-0-9a-z]{0,61}[0-9a-z])?)*\.?$/i, n = /^(?:[a-z][a-z0-9+\-.]*:)(?:\/?\/(?:(?:[a-z0-9\-._~!$&'()*+,;=:]|%[0-9a-f]{2})*@)?(?:\[(?:(?:(?:(?:[0-9a-f]{1,4}:){6}|::(?:[0-9a-f]{1,4}:){5}|(?:[0-9a-f]{1,4})?::(?:[0-9a-f]{1,4}:){4}|(?:(?:[0-9a-f]{1,4}:){0,1}[0-9a-f]{1,4})?::(?:[0-9a-f]{1,4}:){3}|(?:(?:[0-9a-f]{1,4}:){0,2}[0-9a-f]{1,4})?::(?:[0-9a-f]{1,4}:){2}|(?:(?:[0-9a-f]{1,4}:){0,3}[0-9a-f]{1,4})?::[0-9a-f]{1,4}:|(?:(?:[0-9a-f]{1,4}:){0,4}[0-9a-f]{1,4})?::)(?:[0-9a-f]{1,4}:[0-9a-f]{1,4}|(?:(?:25[0-5]|2[0-4]\d|[01]?\d\d?)\.){3}(?:25[0-5]|2[0-4]\d|[01]?\d\d?))|(?:(?:[0-9a-f]{1,4}:){0,5}[0-9a-f]{1,4})?::[0-9a-f]{1,4}|(?:(?:[0-9a-f]{1,4}:){0,6}[0-9a-f]{1,4})?::)|[Vv][0-9a-f]+\.[a-z0-9\-._~!$&'()*+,;=:]+)\]|(?:(?:25[0-5]|2[0-4]\d|[01]?\d\d?)\.){3}(?:25[0-5]|2[0-4]\d|[01]?\d\d?)|(?:[a-z0-9\-._~!$&'()*+,;=]|%[0-9a-f]{2})*)(?::\d*)?(?:\/(?:[a-z0-9\-._~!$&'()*+,;=:@]|%[0-9a-f]{2})*)*|\/(?:(?:[a-z0-9\-._~!$&'()*+,;=:@]|%[0-9a-f]{2})+(?:\/(?:[a-z0-9\-._~!$&'()*+,;=:@]|%[0-9a-f]{2})*)*)?|(?:[a-z0-9\-._~!$&'()*+,;=:@]|%[0-9a-f]{2})+(?:\/(?:[a-z0-9\-._~!$&'()*+,;=:@]|%[0-9a-f]{2})*)*)(?:\?(?:[a-z0-9\-._~!$&'()*+,;=:@/?]|%[0-9a-f]{2})*)?(?:#(?:[a-z0-9\-._~!$&'()*+,;=:@/?]|%[0-9a-f]{2})*)?$/i, i = /^(?:[a-z][a-z0-9+\-.]*:)?(?:\/?\/(?:(?:[a-z0-9\-._~!$&'()*+,;=:]|%[0-9a-f]{2})*@)?(?:\[(?:(?:(?:(?:[0-9a-f]{1,4}:){6}|::(?:[0-9a-f]{1,4}:){5}|(?:[0-9a-f]{1,4})?::(?:[0-9a-f]{1,4}:){4}|(?:(?:[0-9a-f]{1,4}:){0,1}[0-9a-f]{1,4})?::(?:[0-9a-f]{1,4}:){3}|(?:(?:[0-9a-f]{1,4}:){0,2}[0-9a-f]{1,4})?::(?:[0-9a-f]{1,4}:){2}|(?:(?:[0-9a-f]{1,4}:){0,3}[0-9a-f]{1,4})?::[0-9a-f]{1,4}:|(?:(?:[0-9a-f]{1,4}:){0,4}[0-9a-f]{1,4})?::)(?:[0-9a-f]{1,4}:[0-9a-f]{1,4}|(?:(?:25[0-5]|2[0-4]\d|[01]?\d\d?)\.){3}(?:25[0-5]|2[0-4]\d|[01]?\d\d?))|(?:(?:[0-9a-f]{1,4}:){0,5}[0-9a-f]{1,4})?::[0-9a-f]{1,4}|(?:(?:[0-9a-f]{1,4}:){0,6}[0-9a-f]{1,4})?::)|[Vv][0-9a-f]+\.[a-z0-9\-._~!$&'()*+,;=:]+)\]|(?:(?:25[0-5]|2[0-4]\d|[01]?\d\d?)\.){3}(?:25[0-5]|2[0-4]\d|[01]?\d\d?)|(?:[a-z0-9\-._~!$&'"()*+,;=]|%[0-9a-f]{2})*)(?::\d*)?(?:\/(?:[a-z0-9\-._~!$&'"()*+,;=:@]|%[0-9a-f]{2})*)*|\/(?:(?:[a-z0-9\-._~!$&'"()*+,;=:@]|%[0-9a-f]{2})+(?:\/(?:[a-z0-9\-._~!$&'"()*+,;=:@]|%[0-9a-f]{2})*)*)?|(?:[a-z0-9\-._~!$&'"()*+,;=:@]|%[0-9a-f]{2})+(?:\/(?:[a-z0-9\-._~!$&'"()*+,;=:@]|%[0-9a-f]{2})*)*)?(?:\?(?:[a-z0-9\-._~!$&'"()*+,;=:@/?]|%[0-9a-f]{2})*)?(?:#(?:[a-z0-9\-._~!$&'"()*+,;=:@/?]|%[0-9a-f]{2})*)?$/i, c = /^(?:(?:[^\x00-\x20"'<>%\\^`{|}]|%[0-9a-f]{2})|\{[+#./;?&=,!@|]?(?:[a-z0-9_]|%[0-9a-f]{2})+(?::[1-9][0-9]{0,3}|\*)?(?:,(?:[a-z0-9_]|%[0-9a-f]{2})+(?::[1-9][0-9]{0,3}|\*)?)*\})*$/i, u = /^(?:(?:http[s\u017F]?|ftp):\/\/)(?:(?:[\0-\x08\x0E-\x1F!-\x9F\xA1-\u167F\u1681-\u1FFF\u200B-\u2027\u202A-\u202E\u2030-\u205E\u2060-\u2FFF\u3001-\uD7FF\uE000-\uFEFE\uFF00-\uFFFF]|[\uD800-\uDBFF][\uDC00-\uDFFF]|[\uD800-\uDBFF](?![\uDC00-\uDFFF])|(?:[^\uD800-\uDBFF]|^)[\uDC00-\uDFFF])+(?::(?:[\0-\x08\x0E-\x1F!-\x9F\xA1-\u167F\u1681-\u1FFF\u200B-\u2027\u202A-\u202E\u2030-\u205E\u2060-\u2FFF\u3001-\uD7FF\uE000-\uFEFE\uFF00-\uFFFF]|[\uD800-\uDBFF][\uDC00-\uDFFF]|[\uD800-\uDBFF](?![\uDC00-\uDFFF])|(?:[^\uD800-\uDBFF]|^)[\uDC00-\uDFFF])*)?@)?(?:(?!10(?:\.[0-9]{1,3}){3})(?!127(?:\.[0-9]{1,3}){3})(?!169\.254(?:\.[0-9]{1,3}){2})(?!192\.168(?:\.[0-9]{1,3}){2})(?!172\.(?:1[6-9]|2[0-9]|3[01])(?:\.[0-9]{1,3}){2})(?:[1-9][0-9]?|1[0-9][0-9]|2[01][0-9]|22[0-3])(?:\.(?:1?[0-9]{1,2}|2[0-4][0-9]|25[0-5])){2}(?:\.(?:[1-9][0-9]?|1[0-9][0-9]|2[0-4][0-9]|25[0-4]))|(?:(?:(?:[0-9a-z\xA1-\uD7FF\uE000-\uFFFF]|[\uD800-\uDBFF](?![\uDC00-\uDFFF])|(?:[^\uD800-\uDBFF]|^)[\uDC00-\uDFFF])+-)*(?:[0-9a-z\xA1-\uD7FF\uE000-\uFFFF]|[\uD800-\uDBFF](?![\uDC00-\uDFFF])|(?:[^\uD800-\uDBFF]|^)[\uDC00-\uDFFF])+)(?:\.(?:(?:[0-9a-z\xA1-\uD7FF\uE000-\uFFFF]|[\uD800-\uDBFF](?![\uDC00-\uDFFF])|(?:[^\uD800-\uDBFF]|^)[\uDC00-\uDFFF])+-)*(?:[0-9a-z\xA1-\uD7FF\uE000-\uFFFF]|[\uD800-\uDBFF](?![\uDC00-\uDFFF])|(?:[^\uD800-\uDBFF]|^)[\uDC00-\uDFFF])+)*(?:\.(?:(?:[a-z\xA1-\uD7FF\uE000-\uFFFF]|[\uD800-\uDBFF](?![\uDC00-\uDFFF])|(?:[^\uD800-\uDBFF]|^)[\uDC00-\uDFFF]){2,})))(?::[0-9]{2,5})?(?:\/(?:[\0-\x08\x0E-\x1F!-\x9F\xA1-\u167F\u1681-\u1FFF\u200B-\u2027\u202A-\u202E\u2030-\u205E\u2060-\u2FFF\u3001-\uD7FF\uE000-\uFEFE\uFF00-\uFFFF]|[\uD800-\uDBFF][\uDC00-\uDFFF]|[\uD800-\uDBFF](?![\uDC00-\uDFFF])|(?:[^\uD800-\uDBFF]|^)[\uDC00-\uDFFF])*)?$/i, f = /^(?:urn:uuid:)?[0-9a-f]{8}-(?:[0-9a-f]{4}-){3}[0-9a-f]{12}$/i, l = /^(?:\/(?:[^~/]|~0|~1)*)*$/, d = /^#(?:\/(?:[a-z0-9_\-.!$&'()*+,;:=@]|%[0-9a-f]{2}|~0|~1)*)*$/i, g = /^(?:0|[1-9][0-9]*)(?:#|(?:\/(?:[^~/]|~0|~1)*)*)$/;
  it = h;
  function h(A) {
    const O = K;
    return A = A == O(2977) ? "full" : O(2666), x[O(2615)](h[A]);
  }
  h[o(2666)] = { date: /^\d\d\d\d-[0-1]\d-[0-3]\d$/, time: /^(?:[0-2]\d:[0-5]\d:[0-5]\d|23:59:60)(?:\.\d+)?(?:z|[+-]\d\d(?::?\d\d)?)?$/i, "date-time": /^\d\d\d\d-[0-1]\d-[0-3]\d[t\s](?:[0-2]\d:[0-5]\d:[0-5]\d|23:59:60)(?:\.\d+)?(?:z|[+-]\d\d(?::?\d\d)?)$/i, uri: /^(?:[a-z][a-z0-9+\-.]*:)(?:\/?\/)?[^\s]*$/i, "uri-reference": /^(?:(?:[a-z][a-z0-9+\-.]*:)?\/?\/)?(?:[^\\\s#][^\s#]*)?(?:#[^\\\s]*)?$/i, "uri-template": c, url: u, email: /^[a-z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-z0-9](?:[a-z0-9-]{0,61}[a-z0-9])?(?:\.[a-z0-9](?:[a-z0-9-]{0,61}[a-z0-9])?)*$/i, hostname: s, ipv4: /^(?:(?:25[0-5]|2[0-4]\d|[01]?\d\d?)\.){3}(?:25[0-5]|2[0-4]\d|[01]?\d\d?)$/, ipv6: /^\s*(?:(?:(?:[0-9a-f]{1,4}:){7}(?:[0-9a-f]{1,4}|:))|(?:(?:[0-9a-f]{1,4}:){6}(?::[0-9a-f]{1,4}|(?:(?:25[0-5]|2[0-4]\d|1\d\d|[1-9]?\d)(?:\.(?:25[0-5]|2[0-4]\d|1\d\d|[1-9]?\d)){3})|:))|(?:(?:[0-9a-f]{1,4}:){5}(?:(?:(?::[0-9a-f]{1,4}){1,2})|:(?:(?:25[0-5]|2[0-4]\d|1\d\d|[1-9]?\d)(?:\.(?:25[0-5]|2[0-4]\d|1\d\d|[1-9]?\d)){3})|:))|(?:(?:[0-9a-f]{1,4}:){4}(?:(?:(?::[0-9a-f]{1,4}){1,3})|(?:(?::[0-9a-f]{1,4})?:(?:(?:25[0-5]|2[0-4]\d|1\d\d|[1-9]?\d)(?:\.(?:25[0-5]|2[0-4]\d|1\d\d|[1-9]?\d)){3}))|:))|(?:(?:[0-9a-f]{1,4}:){3}(?:(?:(?::[0-9a-f]{1,4}){1,4})|(?:(?::[0-9a-f]{1,4}){0,2}:(?:(?:25[0-5]|2[0-4]\d|1\d\d|[1-9]?\d)(?:\.(?:25[0-5]|2[0-4]\d|1\d\d|[1-9]?\d)){3}))|:))|(?:(?:[0-9a-f]{1,4}:){2}(?:(?:(?::[0-9a-f]{1,4}){1,5})|(?:(?::[0-9a-f]{1,4}){0,3}:(?:(?:25[0-5]|2[0-4]\d|1\d\d|[1-9]?\d)(?:\.(?:25[0-5]|2[0-4]\d|1\d\d|[1-9]?\d)){3}))|:))|(?:(?:[0-9a-f]{1,4}:){1}(?:(?:(?::[0-9a-f]{1,4}){1,6})|(?:(?::[0-9a-f]{1,4}){0,4}:(?:(?:25[0-5]|2[0-4]\d|1\d\d|[1-9]?\d)(?:\.(?:25[0-5]|2[0-4]\d|1\d\d|[1-9]?\d)){3}))|:))|(?::(?:(?:(?::[0-9a-f]{1,4}){1,7})|(?:(?::[0-9a-f]{1,4}){0,5}:(?:(?:25[0-5]|2[0-4]\d|1\d\d|[1-9]?\d)(?:\.(?:25[0-5]|2[0-4]\d|1\d\d|[1-9]?\d)){3}))|:)))(?:%.+)?\s*$/i, regex: C, uuid: f, "json-pointer": l, "json-pointer-uri-fragment": d, "relative-json-pointer": g }, h[o(2977)] = { date: v, time: k, "date-time": T, uri: R, "uri-reference": i, "uri-template": c, url: u, email: /^[a-z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[a-z0-9!#$%&'*+/=?^_`{|}~-]+)*@(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?$/i, hostname: s, ipv4: /^(?:(?:25[0-5]|2[0-4]\d|[01]?\d\d?)\.){3}(?:25[0-5]|2[0-4]\d|[01]?\d\d?)$/, ipv6: /^\s*(?:(?:(?:[0-9a-f]{1,4}:){7}(?:[0-9a-f]{1,4}|:))|(?:(?:[0-9a-f]{1,4}:){6}(?::[0-9a-f]{1,4}|(?:(?:25[0-5]|2[0-4]\d|1\d\d|[1-9]?\d)(?:\.(?:25[0-5]|2[0-4]\d|1\d\d|[1-9]?\d)){3})|:))|(?:(?:[0-9a-f]{1,4}:){5}(?:(?:(?::[0-9a-f]{1,4}){1,2})|:(?:(?:25[0-5]|2[0-4]\d|1\d\d|[1-9]?\d)(?:\.(?:25[0-5]|2[0-4]\d|1\d\d|[1-9]?\d)){3})|:))|(?:(?:[0-9a-f]{1,4}:){4}(?:(?:(?::[0-9a-f]{1,4}){1,3})|(?:(?::[0-9a-f]{1,4})?:(?:(?:25[0-5]|2[0-4]\d|1\d\d|[1-9]?\d)(?:\.(?:25[0-5]|2[0-4]\d|1\d\d|[1-9]?\d)){3}))|:))|(?:(?:[0-9a-f]{1,4}:){3}(?:(?:(?::[0-9a-f]{1,4}){1,4})|(?:(?::[0-9a-f]{1,4}){0,2}:(?:(?:25[0-5]|2[0-4]\d|1\d\d|[1-9]?\d)(?:\.(?:25[0-5]|2[0-4]\d|1\d\d|[1-9]?\d)){3}))|:))|(?:(?:[0-9a-f]{1,4}:){2}(?:(?:(?::[0-9a-f]{1,4}){1,5})|(?:(?::[0-9a-f]{1,4}){0,3}:(?:(?:25[0-5]|2[0-4]\d|1\d\d|[1-9]?\d)(?:\.(?:25[0-5]|2[0-4]\d|1\d\d|[1-9]?\d)){3}))|:))|(?:(?:[0-9a-f]{1,4}:){1}(?:(?:(?::[0-9a-f]{1,4}){1,6})|(?:(?::[0-9a-f]{1,4}){0,4}:(?:(?:25[0-5]|2[0-4]\d|1\d\d|[1-9]?\d)(?:\.(?:25[0-5]|2[0-4]\d|1\d\d|[1-9]?\d)){3}))|:))|(?::(?:(?:(?::[0-9a-f]{1,4}){1,7})|(?:(?::[0-9a-f]{1,4}){0,5}:(?:(?:25[0-5]|2[0-4]\d|1\d\d|[1-9]?\d)(?:\.(?:25[0-5]|2[0-4]\d|1\d\d|[1-9]?\d)){3}))|:)))(?:%.+)?\s*$/i, regex: C, uuid: f, "json-pointer": l, "json-pointer-uri-fragment": d, "relative-json-pointer": g };
  function m(A) {
    return A % 4 === 0 && (A % 100 !== 0 || A % 400 === 0);
  }
  function v(A) {
    var O = A.match(t);
    if (!O) return !1;
    var M = +O[1], _ = +O[2], N = +O[3];
    return _ >= 1 && _ <= 12 && N >= 1 && N <= (_ == 2 && m(M) ? 29 : r[_]);
  }
  function k(A, O) {
    var _ = A[o(2314)](e);
    if (!_) return !1;
    var N = _[1], z = _[2], U = _[3], H = _[5];
    return (N <= 23 && z <= 59 && U <= 59 || N == 23 && z == 59 && U == 60) && (!O || H);
  }
  var P = /t|\s/i;
  function T(A) {
    const O = o;
    var M = A[O(3263)](P);
    return M[O(2710)] == 2 && v(M[0]) && k(M[1], !0);
  }
  var q = /\/|:/;
  function R(A) {
    const O = o;
    return q.test(A) && n[O(2346)](A);
  }
  var E = /[^\\]\\Z/;
  function C(A) {
    if (E[o(2346)](A)) return !1;
    try {
      return new RegExp(A), !0;
    } catch {
      return !1;
    }
  }
  return it;
}
var ct, gr;
function f2() {
  return gr || (gr = 1, ct = function(x, t, r) {
    const e = K;
    var s = " ", n = x[e(1082)], i = x[e(1498)], c = x[e(1425)][t], u = x[e(569)] + "/" + t, f = !x[e(1544)][e(3009)], l = e(2663) + (i || ""), d = e(1122) + n, g, h;
    if (c == "#" || c == "#/") x[e(2758)] ? (g = x.async, h = e(3181)) : (g = x[e(2212)].schema[e(1101)] === !0, h = e(750));
    else {
      var m = x[e(1215)](x[e(805)], c, x.isRoot);
      if (m === void 0) {
        var v = x[e(730)][e(1044)](x.baseId, c);
        if (x.opts.missingRefs == e(902)) {
          x.logger[e(490)](v);
          var k = k || [];
          k[e(3062)](s), s = "", x.createErrors !== !1 ? (s += e(1108) + "$ref" + e(2387) + x[e(1935)] + e(2278) + x[e(1975)][e(1767)](u) + " , params: { ref: '" + x.util[e(1265)](c) + e(871), x[e(1544)].messages !== !1 && (s += " , message: 'can\\'t resolve reference " + x[e(1975)][e(1265)](c) + "' "), x[e(1544)][e(2491)] && (s += e(2020) + x[e(1975)][e(1767)](c) + e(2408) + x[e(1262)] + e(1844) + l + " "), s += e(1411)) : s += e(3261);
          var P = s;
          s = k[e(2900)](), !x[e(2612)] && f ? x[e(2416)] ? s += e(1499) + P + "]); " : s += e(2213) + P + e(702) : s += e(2636) + P + ";  if (vErrors === null) vErrors = [err]; else vErrors.push(err); errors++; ", f && (s += e(2236));
        } else if (x[e(1544)][e(2851)] == e(2069)) x[e(2303)].warn(v), f && (s += e(523));
        else throw new x[e(730)](x[e(805)], c, v);
      } else if (m.inline) {
        var T = x[e(1975)].copy(x);
        T.level++;
        var q = e(1122) + T[e(1082)];
        T[e(1425)] = m[e(1425)], T[e(1262)] = "", T.errSchemaPath = c;
        var R = x[e(3181)](T)[e(1521)](/validate\.schema/g, m[e(2427)]);
        s += " " + R + " ", f && (s += " if (" + q + e(2834));
      } else g = m.$async === !0 || x.async && m[e(1101)] !== !1, h = m[e(2427)];
    }
    if (h) {
      var k = k || [];
      k.push(s), s = "", x.opts[e(2698)] ? s += " " + h + e(2681) : s += " " + h + "( ", s += " " + l + ", (dataPath || '')", x.errorPath != '""' && (s += e(2693) + x.errorPath);
      var E = i ? "data" + (i - 1 || "") : "parentData", C = i ? x[e(662)][i] : e(1486);
      s += e(3135) + E + e(3135) + C + e(2015);
      var A = s;
      if (s = k.pop(), g) {
        if (!x[e(2416)]) throw new Error(e(1965));
        f && (s += " var " + d + "; "), s += e(1867) + A + "; ", f && (s += " " + d + e(2411)), s += e(2870), f && (s += " " + d + " = false; "), s += e(1411), f && (s += " if (" + d + ") { ");
      } else s += " if (!" + A + e(1856) + h + e(2694) + h + ".errors); errors = vErrors.length; } ", f && (s += e(1961));
    }
    return s;
  }), ct;
}
var ut, yr;
function l2() {
  return yr || (yr = 1, ut = function(x, t, r) {
    const e = K;
    var s = " ", n = x.schema[t], i = x.schemaPath + x.util[e(3039)](t), c = x[e(569)] + "/" + t, u = !x.opts[e(3009)], f = x[e(1975)].copy(x), l = "";
    f[e(1082)]++;
    var d = "valid" + f[e(1082)], g = f.baseId, h = !0, m = n;
    if (m)
      for (var v, k = -1, P = m[e(2710)] - 1; k < P; )
        v = m[k += 1], (x.opts.strictKeywords ? typeof v == e(1304) && Object[e(2123)](v)[e(2710)] > 0 || v === !1 : x[e(1975)][e(1733)](v, x[e(2996)][e(1096)])) && (h = !1, f.schema = v, f[e(1262)] = i + "[" + k + "]", f.errSchemaPath = c + "/" + k, s += "  " + x[e(3181)](f) + " ", f[e(805)] = g, u && (s += e(1754) + d + ") { ", l += "}"));
    return u && (h ? s += " if (true) { " : s += " " + l[e(1387)](0, -1) + " "), s;
  }), ut;
}
var ft, vr;
function d2() {
  return vr || (vr = 1, ft = function(x, t, r) {
    const e = K;
    var s = " ", n = x.level, i = x[e(1498)], c = x[e(1425)][t], u = x[e(1262)] + x[e(1975)][e(3039)](t), f = x[e(569)] + "/" + t, l = !x[e(1544)][e(3009)], d = "data" + (i || ""), g = e(1122) + n, h = e(1870) + n, m = x[e(1975)][e(2615)](x), v = "";
    m.level++;
    var k = e(1122) + m[e(1082)], P = c[e(576)](function(O) {
      const M = e;
      return x.opts[M(868)] ? typeof O == M(1304) && Object[M(2123)](O)[M(2710)] > 0 || O === !1 : x[M(1975)].schemaHasRules(O, x[M(2996)][M(1096)]);
    });
    if (P) {
      var T = m[e(805)];
      s += " var " + h + e(905) + g + " = false;  ";
      var q = x[e(2612)];
      x.compositeRule = m[e(2612)] = !0;
      var R = c;
      if (R)
        for (var E, C = -1, A = R[e(2710)] - 1; C < A; )
          E = R[C += 1], m[e(1425)] = E, m[e(1262)] = u + "[" + C + "]", m[e(569)] = f + "/" + C, s += "  " + x[e(3181)](m) + " ", m[e(805)] = T, s += " " + g + e(2486) + g + e(1887) + k + "; if (!" + g + e(2834), v += "}";
      x[e(2612)] = m[e(2612)] = q, s += " " + v + e(1102) + g + e(2240), x[e(559)] !== !1 ? (s += " { keyword: '" + e(2122) + e(2387) + x[e(1935)] + " , schemaPath: " + x[e(1975)][e(1767)](f) + e(1676), x[e(1544)].messages !== !1 && (s += " , message: 'should match some schema in anyOf' "), x.opts[e(2491)] && (s += " , schema: validate.schema" + u + " , parentSchema: validate.schema" + x[e(1262)] + " , data: " + d + " "), s += e(1411)) : s += e(3261), s += ";  if (vErrors === null) vErrors = [err]; else vErrors.push(err); errors++; ", !x[e(2612)] && l && (x[e(2416)] ? s += e(903) : s += e(1021)), s += " } else {  errors = " + h + e(1606) + h + ") vErrors.length = " + h + "; else vErrors = null; } ", x.opts[e(3009)] && (s += e(1411));
    } else l && (s += e(523));
    return s;
  }), ft;
}
var lt, wr;
function h2() {
  return wr || (wr = 1, lt = function(x, t, r) {
    const e = K;
    var s = " ", n = x[e(1425)][t], i = x.errSchemaPath + "/" + t;
    x[e(1544)][e(3009)];
    var c = x.util[e(1767)](n);
    return x[e(1544)].$comment === !0 ? s += e(1040) + c + ");" : typeof x[e(1544)][e(2786)] == e(1936) && (s += e(1772) + c + ", " + x[e(1975)][e(1767)](i) + e(2456)), s;
  }), lt;
}
var dt, Sr;
function p2() {
  return Sr || (Sr = 1, dt = function(x, t, r) {
    const e = K;
    var s = " ", n = x.level, i = x.dataLevel, c = x[e(1425)][t], u = x.schemaPath + x.util[e(3039)](t), f = x[e(569)] + "/" + t, l = !x[e(1544)][e(3009)], d = "data" + (i || ""), g = e(1122) + n, h = x.opts[e(568)] && c && c.$data;
    h && (s += " var schema" + n + " = " + x.util[e(1186)](c[e(568)], i, x.dataPathArr) + "; "), !h && (s += e(1311) + n + " = validate.schema" + u + ";"), s += e(612) + g + e(832) + d + ", schema" + n + e(1298) + g + e(1793);
    var m = m || [];
    m[e(3062)](s), s = "", x[e(559)] !== !1 ? (s += e(1108) + e(1603) + e(2387) + x[e(1935)] + e(2278) + x.util[e(1767)](f) + e(1845) + n + " } ", x.opts[e(1696)] !== !1 && (s += e(977)), x[e(1544)][e(2491)] && (s += " , schema: validate.schema" + u + " , parentSchema: validate.schema" + x[e(1262)] + e(1844) + d + " "), s += e(1411)) : s += e(3261);
    var v = s;
    return s = m.pop(), !x[e(2612)] && l ? x[e(2416)] ? s += e(1499) + v + "]); " : s += e(2213) + v + "]; return false; " : s += " var err = " + v + e(2653), s += " }", l && (s += e(1961)), s;
  }), dt;
}
var ht, kr;
function m2() {
  return kr || (kr = 1, ht = function(x, t, r) {
    const e = K;
    var s = " ", n = x[e(1082)], i = x[e(1498)], c = x[e(1425)][t], u = x[e(1262)] + x[e(1975)].getProperty(t), f = x[e(569)] + "/" + t, l = !x[e(1544)][e(3009)], d = e(2663) + (i || ""), g = e(1122) + n, h = e(1870) + n, m = x[e(1975)][e(2615)](x), v = "";
    m.level++;
    var k = "valid" + m.level, P = "i" + n, T = m.dataLevel = x[e(1498)] + 1, q = e(2663) + T, R = x[e(805)], E = x[e(1544)][e(868)] ? typeof c == e(1304) && Object[e(2123)](c)[e(2710)] > 0 || c === !1 : x[e(1975)][e(1733)](c, x[e(2996)].all);
    if (s += e(612) + h + e(1156) + g + ";", E) {
      var C = x[e(2612)];
      x[e(2612)] = m.compositeRule = !0, m[e(1425)] = c, m[e(1262)] = u, m[e(569)] = f, s += " var " + k + " = false; for (var " + P + " = 0; " + P + e(1662) + d + e(2838) + P + "++) { ", m[e(1935)] = x.util[e(2126)](x[e(1935)], P, x.opts[e(2761)], !0);
      var A = d + "[" + P + "]";
      m[e(662)][T] = P;
      var O = x[e(3181)](m);
      m[e(805)] = R, x.util.varOccurences(O, q) < 2 ? s += " " + x[e(1975)][e(650)](O, q, A) + " " : s += " var " + q + " = " + A + "; " + O + " ", s += e(1754) + k + ") break; }  ", x[e(2612)] = m.compositeRule = C, s += " " + v + e(1102) + k + e(3258);
    } else s += e(1754) + d + ".length == 0) {";
    var M = M || [];
    M.push(s), s = "", x[e(559)] !== !1 ? (s += e(1108) + e(688) + e(2387) + x[e(1935)] + " , schemaPath: " + x[e(1975)][e(1767)](f) + e(1676), x.opts[e(1696)] !== !1 && (s += " , message: 'should contain a valid item' "), x[e(1544)][e(2491)] && (s += e(1346) + u + e(2408) + x[e(1262)] + " , data: " + d + " "), s += e(1411)) : s += e(3261);
    var _ = s;
    return s = M[e(2900)](), !x[e(2612)] && l ? x[e(2416)] ? s += e(1499) + _ + e(2300) : s += " validate.errors = [" + _ + "]; return false; " : s += " var err = " + _ + e(2653), s += " } else { ", E && (s += e(2059) + h + e(1606) + h + e(2563) + h + "; else vErrors = null; } "), x.opts[e(3009)] && (s += e(1411)), s;
  }), ht;
}
var pt, Pr;
function b2() {
  return Pr || (Pr = 1, pt = function(x, t, r) {
    const e = K;
    var s = " ", n = x[e(1082)], i = x[e(1498)], c = x.schema[t], u = x[e(1262)] + x[e(1975)][e(3039)](t), f = x[e(569)] + "/" + t, l = !x.opts[e(3009)], d = e(2663) + (i || ""), g = e(1870) + n, h = x.util[e(2615)](x), m = "";
    h.level++;
    var v = e(1122) + h[e(1082)], k = {}, P = {}, T = x[e(1544)][e(951)];
    for (C in c)
      if (C != e(1134)) {
        var q = c[C], R = Array[e(3255)](q) ? P : k;
        R[C] = q;
      }
    s += e(612) + g + e(683);
    var E = x[e(1935)];
    s += e(3118) + n + ";";
    for (var C in P)
      if (R = P[C], R.length) {
        if (s += e(836) + d + x[e(1975)][e(3039)](C) + e(1949), T && (s += " && Object.prototype.hasOwnProperty.call(" + d + e(1167) + x[e(1975)][e(1265)](C) + e(2901)), l) {
          s += e(640);
          var A = R;
          if (A)
            for (var O, M = -1, _ = A[e(2710)] - 1; M < _; ) {
              O = A[M += 1], M && (s += e(1887));
              var N = x[e(1975)][e(3039)](O), z = d + N;
              s += e(1330) + z + e(562), T && (s += " || ! Object.prototype.hasOwnProperty.call(" + d + e(1167) + x[e(1975)][e(1265)](O) + e(2901)), s += ") && (missing" + n + e(2486) + x[e(1975)][e(1767)](x[e(1544)][e(2761)] ? O : N) + e(2130);
            }
          s += e(1951);
          var U = e(2473) + n, H = e(1064) + U + e(2519);
          x[e(1544)]._errorDataPathProperty && (x[e(1935)] = x[e(1544)][e(2761)] ? x[e(1975)][e(2126)](E, U, !0) : E + " + " + U);
          var G = G || [];
          G[e(3062)](s), s = "", x[e(559)] !== !1 ? (s += e(1108) + e(1110) + e(2387) + x.errorPath + " , schemaPath: " + x.util[e(1767)](f) + e(2588) + x[e(1975)][e(1265)](C) + e(1519) + H + "', depsCount: " + R[e(2710)] + e(2483) + x[e(1975)][e(1265)](R[e(2710)] == 1 ? R[0] : R[e(1592)](", ")) + e(871), x[e(1544)][e(1696)] !== !1 && (s += e(1438), R.length == 1 ? s += "property " + x.util[e(1265)](R[0]) : s += e(2807) + x.util.escapeQuotes(R[e(1592)](", ")), s += e(1242) + x.util[e(1265)](C) + e(2488)), x[e(1544)][e(2491)] && (s += e(1346) + u + " , parentSchema: validate.schema" + x[e(1262)] + " , data: " + d + " "), s += " } ") : s += e(3261);
          var re = s;
          s = G[e(2900)](), !x[e(2612)] && l ? x[e(2416)] ? s += e(1499) + re + e(2300) : s += e(2213) + re + "]; return false; " : s += e(2636) + re + e(2653);
        } else {
          s += e(774);
          var se = R;
          if (se)
            for (var O, fe = -1, de = se[e(2710)] - 1; fe < de; ) {
              O = se[fe += 1];
              var N = x[e(1975)][e(3039)](O), H = x[e(1975)][e(1265)](O), z = d + N;
              x[e(1544)][e(3124)] && (x[e(1935)] = x.util.getPath(E, O, x[e(1544)][e(2761)])), s += " if ( " + z + e(562), T && (s += e(1578) + d + e(1167) + x[e(1975)][e(1265)](O) + e(2901)), s += e(1939), x[e(559)] !== !1 ? (s += e(1108) + e(1110) + e(2387) + x[e(1935)] + e(2278) + x.util[e(1767)](f) + e(2588) + x[e(1975)][e(1265)](C) + e(1519) + H + e(1179) + R[e(2710)] + e(2483) + x[e(1975)][e(1265)](R.length == 1 ? R[0] : R[e(1592)](", ")) + e(871), x[e(1544)][e(1696)] !== !1 && (s += e(1438), R[e(2710)] == 1 ? s += e(1083) + x[e(1975)][e(1265)](R[0]) : s += e(2807) + x[e(1975)].escapeQuotes(R[e(1592)](", ")), s += e(1242) + x[e(1975)][e(1265)](C) + e(2488)), x[e(1544)].verbose && (s += e(1346) + u + e(2408) + x[e(1262)] + " , data: " + d + " "), s += e(1411)) : s += e(3261), s += e(2784);
            }
        }
        s += e(2648), l && (m += "}", s += e(1961));
      }
    x.errorPath = E;
    var le = h[e(805)];
    for (var C in k) {
      var q = k[C];
      (x.opts[e(868)] ? typeof q == e(1304) && Object.keys(q)[e(2710)] > 0 || q === !1 : x[e(1975)][e(1733)](q, x[e(2996)][e(1096)])) && (s += " " + v + e(1609) + d + x[e(1975)][e(3039)](C) + " !== undefined ", T && (s += e(498) + d + e(1167) + x[e(1975)][e(1265)](C) + e(2901)), s += e(2834), h[e(1425)] = q, h.schemaPath = u + x[e(1975)][e(3039)](C), h[e(569)] = f + "/" + x[e(1975)][e(1675)](C), s += "  " + x[e(3181)](h) + " ", h[e(805)] = le, s += e(2204), l && (s += e(1754) + v + ") { ", m += "}"));
    }
    return l && (s += e(2602) + m + e(1754) + g + " == errors) {"), s;
  }), pt;
}
var mt, Ir;
function g2() {
  return Ir || (Ir = 1, mt = function(x, t, r) {
    const e = K;
    var s = " ", n = x[e(1082)], i = x[e(1498)], c = x[e(1425)][t], u = x[e(1262)] + x[e(1975)].getProperty(t), f = x.errSchemaPath + "/" + t, l = !x.opts.allErrors, d = e(2663) + (i || ""), g = e(1122) + n, h = x.opts.$data && c && c[e(568)];
    h && (s += e(1311) + n + " = " + x[e(1975)].getData(c[e(568)], i, x.dataPathArr) + "; ");
    var m = "i" + n, v = e(1425) + n;
    !h && (s += e(2675) + v + e(1699) + u + ";"), s += e(612) + g + ";", h && (s += e(3121) + n + e(1144) + g + " = true; else if (!Array.isArray(schema" + n + e(1345) + g + e(991)), s += "" + g + e(2171) + m + e(599) + m + "<" + v + e(2838) + m + "++) if (equal(" + d + ", " + v + "[" + m + e(2855) + g + e(1624), h && (s += "  }  "), s += e(1102) + g + e(1793);
    var k = k || [];
    k[e(3062)](s), s = "", x.createErrors !== !1 ? (s += e(1108) + e(2218) + e(2387) + x.errorPath + " , schemaPath: " + x.util.toQuotedString(f) + e(3037) + n + " } ", x[e(1544)].messages !== !1 && (s += e(1560)), x.opts[e(2491)] && (s += e(1346) + u + e(2408) + x[e(1262)] + e(1844) + d + " "), s += e(1411)) : s += e(3261);
    var P = s;
    return s = k[e(2900)](), !x[e(2612)] && l ? x[e(2416)] ? s += e(1499) + P + e(2300) : s += " validate.errors = [" + P + e(702) : s += e(2636) + P + e(2653), s += " }", l && (s += e(1961)), s;
  }), mt;
}
var bt, Er;
function y2() {
  return Er || (Er = 1, bt = function(x, t, r) {
    const e = K;
    var s = " ", n = x[e(1082)], i = x[e(1498)], c = x.schema[t], u = x[e(1262)] + x.util.getProperty(t), f = x[e(569)] + "/" + t, l = !x.opts[e(3009)], d = "data" + (i || "");
    if (x[e(1544)][e(802)] === !1) return l && (s += " if (true) { "), s;
    var g = x[e(1544)][e(568)] && c && c.$data, h;
    g ? (s += e(1311) + n + " = " + x[e(1975)][e(1186)](c.$data, i, x.dataPathArr) + "; ", h = "schema" + n) : h = c;
    var m = x[e(1544)][e(1612)], v = Array[e(3255)](m);
    if (g) {
      var k = "format" + n, P = e(1151) + n, T = e(3238) + n;
      s += " var " + k + e(2957) + h + e(2688) + P + e(1715) + k + e(2678) + k + e(2152) + k + e(596) + T + " = " + P + e(3061) + k + ".type || 'string'; if (" + P + e(2834), x[e(2416)] && (s += " var async" + n + " = " + k + e(2241)), s += " " + k + e(2486) + k + ".validate; } if (  ", g && (s += " (" + h + e(2439) + h + " != 'string') || "), s += " (", m != "ignore" && (s += " (" + h + e(2138) + k + " ", v && (s += e(2465) + h + e(3277)), s += e(1259)), s += " (" + k + " && " + T + e(545) + r + e(1406) + k + e(1061), x[e(2416)] ? s += e(534) + n + e(3267) + k + "(" + d + e(624) + k + "(" + d + e(1345) : s += " " + k + "(" + d + ") ", s += e(1171) + k + e(2947) + d + e(1583);
    } else {
      var k = x[e(3155)][c];
      if (!k) {
        if (m == e(2069)) return x[e(2303)].warn(e(801) + c + e(1154) + x.errSchemaPath + '"'), l && (s += e(523)), s;
        if (v && m[e(2436)](c) >= 0) return l && (s += e(523)), s;
        throw new Error(e(801) + c + e(3026) + x.errSchemaPath + '"');
      }
      var P = typeof k == e(1304) && !(k instanceof RegExp) && k.validate, T = P && k[e(2076)] || e(1361);
      if (P) {
        var q = k[e(2416)] === !0;
        k = k[e(3181)];
      }
      if (T != r) return l && (s += " if (true) { "), s;
      if (q) {
        if (!x.async) throw new Error(e(2182));
        var R = e(3155) + x[e(1975)][e(3039)](c) + e(2270);
        s += e(1248) + R + "(" + d + e(1537);
      } else {
        s += e(2290);
        var R = e(3155) + x[e(1975)][e(3039)](c);
        P && (R += e(2270)), typeof k == "function" ? s += " " + R + "(" + d + ") " : s += " " + R + e(2947) + d + ") ", s += e(2834);
      }
    }
    var E = E || [];
    E.push(s), s = "", x[e(559)] !== !1 ? (s += " { keyword: 'format" + e(2387) + x[e(1935)] + e(2278) + x[e(1975)][e(1767)](f) + " , params: { format:  ", g ? s += "" + h : s += "" + x.util[e(1767)](c), s += e(3186), x[e(1544)][e(1696)] !== !1 && (s += e(2528), g ? s += e(1064) + h + e(2519) : s += "" + x[e(1975)][e(1265)](c), s += e(2773)), x.opts[e(2491)] && (s += e(2827), g ? s += "validate.schema" + u : s += "" + x[e(1975)][e(1767)](c), s += e(2989) + x[e(1262)] + " , data: " + d + " "), s += e(1411)) : s += e(3261);
    var C = s;
    return s = E[e(2900)](), !x.compositeRule && l ? x.async ? s += e(1499) + C + "]); " : s += e(2213) + C + "]; return false; " : s += e(2636) + C + e(2653), s += e(1411), l && (s += e(1961)), s;
  }), bt;
}
var gt, Rr;
function v2() {
  return Rr || (Rr = 1, gt = function(x, t, r) {
    const e = K;
    var s = " ", n = x[e(1082)], i = x[e(1498)], c = x.schema[t], u = x[e(1262)] + x[e(1975)].getProperty(t), f = x.errSchemaPath + "/" + t, l = !x[e(1544)].allErrors, d = e(2663) + (i || ""), g = e(1122) + n, h = "errs__" + n, m = x[e(1975)][e(2615)](x);
    m[e(1082)]++;
    var v = e(1122) + m[e(1082)], k = x[e(1425)].then, P = x[e(1425)][e(2629)], T = k !== void 0 && (x[e(1544)].strictKeywords ? typeof k == e(1304) && Object.keys(k).length > 0 || k === !1 : x[e(1975)][e(1733)](k, x[e(2996)][e(1096)])), q = P !== void 0 && (x.opts[e(868)] ? typeof P == "object" && Object[e(2123)](P)[e(2710)] > 0 || P === !1 : x[e(1975)][e(1733)](P, x[e(2996)][e(1096)])), R = m[e(805)];
    if (T || q) {
      var E;
      m[e(559)] = !1, m[e(1425)] = c, m[e(1262)] = u, m[e(569)] = f, s += e(2675) + h + e(905) + g + " = true;  ";
      var C = x[e(2612)];
      x[e(2612)] = m[e(2612)] = !0, s += "  " + x[e(3181)](m) + " ", m[e(805)] = R, m.createErrors = !0, s += "  errors = " + h + "; if (vErrors !== null) { if (" + h + e(2563) + h + e(2320), x[e(2612)] = m[e(2612)] = C, T ? (s += e(1754) + v + e(929), m[e(1425)] = x[e(1425)][e(2517)], m.schemaPath = x[e(1262)] + e(3109), m[e(569)] = x.errSchemaPath + e(3015), s += "  " + x[e(3181)](m) + " ", m[e(805)] = R, s += " " + g + e(2486) + v + "; ", T && q ? (E = "ifClause" + n, s += e(2675) + E + e(615)) : E = "'then'", s += e(1411), q && (s += e(1961))) : s += e(1102) + v + ") { ", q && (m[e(1425)] = x[e(1425)][e(2629)], m.schemaPath = x[e(1262)] + ".else", m[e(569)] = x[e(569)] + "/else", s += "  " + x[e(3181)](m) + " ", m[e(805)] = R, s += " " + g + e(2486) + v + "; ", T && q ? (E = "ifClause" + n, s += e(2675) + E + " = 'else'; ") : E = e(1443), s += " } "), s += e(1102) + g + e(2240), x[e(559)] !== !1 ? (s += e(1108) + "if" + e(2387) + x[e(1935)] + " , schemaPath: " + x[e(1975)][e(1767)](f) + e(2610) + E + e(1411), x[e(1544)][e(1696)] !== !1 && (s += e(1191) + E + e(3044)), x[e(1544)][e(2491)] && (s += e(1346) + u + " , parentSchema: validate.schema" + x.schemaPath + " , data: " + d + " "), s += e(1411)) : s += e(3261), s += e(2653), !x[e(2612)] && l && (x[e(2416)] ? s += e(903) : s += " validate.errors = vErrors; return false; "), s += e(2648), l && (s += " else { ");
    } else l && (s += " if (true) { ");
    return s;
  }), gt;
}
var yt, Cr;
function w2() {
  return Cr || (Cr = 1, yt = function(x, t, r) {
    const e = K;
    var s = " ", n = x[e(1082)], i = x.dataLevel, c = x[e(1425)][t], u = x[e(1262)] + x[e(1975)][e(3039)](t), f = x.errSchemaPath + "/" + t, l = !x[e(1544)][e(3009)], d = e(2663) + (i || ""), g = e(1122) + n, h = e(1870) + n, m = x[e(1975)][e(2615)](x), v = "";
    m.level++;
    var k = e(1122) + m[e(1082)], P = "i" + n, T = m[e(1498)] = x[e(1498)] + 1, q = e(2663) + T, R = x[e(805)];
    if (s += "var " + h + e(1156) + g + ";", Array.isArray(c)) {
      var E = x[e(1425)][e(2410)];
      if (E === !1) {
        s += " " + g + e(2486) + d + e(1723) + c[e(2710)] + "; ";
        var C = f;
        f = x[e(569)] + e(2214), s += e(2919) + g + e(1793);
        var A = A || [];
        A[e(3062)](s), s = "", x[e(559)] !== !1 ? (s += e(1108) + e(2410) + e(2387) + x[e(1935)] + " , schemaPath: " + x[e(1975)][e(1767)](f) + e(2929) + c.length + e(1411), x[e(1544)][e(1696)] !== !1 && (s += e(3168) + c[e(2710)] + " items' "), x.opts.verbose && (s += " , schema: false , parentSchema: validate.schema" + x[e(1262)] + e(1844) + d + " "), s += e(1411)) : s += e(3261);
        var O = s;
        s = A[e(2900)](), !x.compositeRule && l ? x[e(2416)] ? s += e(1499) + O + e(2300) : s += e(2213) + O + e(702) : s += " var err = " + O + ";  if (vErrors === null) vErrors = [err]; else vErrors.push(err); errors++; ", s += e(1411), f = C, l && (v += "}", s += " else { ");
      }
      var M = c;
      if (M) {
        for (var _, N = -1, z = M[e(2710)] - 1; N < z; )
          if (_ = M[N += 1], x.opts[e(868)] ? typeof _ == e(1304) && Object.keys(_).length > 0 || _ === !1 : x[e(1975)].schemaHasRules(_, x[e(2996)][e(1096)])) {
            s += " " + k + " = true; if (" + d + ".length > " + N + e(2834);
            var U = d + "[" + N + "]";
            m[e(1425)] = _, m[e(1262)] = u + "[" + N + "]", m.errSchemaPath = f + "/" + N, m[e(1935)] = x[e(1975)][e(2126)](x.errorPath, N, x[e(1544)][e(2761)], !0), m.dataPathArr[T] = N;
            var H = x[e(3181)](m);
            m[e(805)] = R, x.util[e(1109)](H, q) < 2 ? s += " " + x.util[e(650)](H, q, U) + " " : s += e(2675) + q + e(2486) + U + "; " + H + " ", s += e(2204), l && (s += " if (" + k + ") { ", v += "}");
          }
      }
      if (typeof E == "object" && (x[e(1544)][e(868)] ? typeof E == e(1304) && Object.keys(E)[e(2710)] > 0 || E === !1 : x[e(1975)][e(1733)](E, x[e(2996)][e(1096)]))) {
        m.schema = E, m[e(1262)] = x[e(1262)] + ".additionalItems", m[e(569)] = x[e(569)] + e(2214), s += " " + k + e(769) + d + e(1620) + c[e(2710)] + ") {  for (var " + P + e(2486) + c[e(2710)] + "; " + P + e(1662) + d + e(2838) + P + e(609), m[e(1935)] = x.util.getPathExpr(x[e(1935)], P, x[e(1544)].jsonPointers, !0);
        var U = d + "[" + P + "]";
        m[e(662)][T] = P;
        var H = x[e(3181)](m);
        m[e(805)] = R, x[e(1975)][e(1109)](H, q) < 2 ? s += " " + x.util[e(650)](H, q, U) + " " : s += e(2675) + q + " = " + U + "; " + H + " ", l && (s += e(1102) + k + e(1418)), s += " } }  ", l && (s += e(1754) + k + e(2834), v += "}");
      }
    } else if (x[e(1544)][e(868)] ? typeof c == e(1304) && Object[e(2123)](c)[e(2710)] > 0 || c === !1 : x[e(1975)][e(1733)](c, x[e(2996)][e(1096)])) {
      m[e(1425)] = c, m[e(1262)] = u, m[e(569)] = f, s += e(1883) + P + e(2486) + 0 + "; " + P + e(1662) + d + e(2838) + P + e(609), m.errorPath = x.util[e(2126)](x[e(1935)], P, x.opts[e(2761)], !0);
      var U = d + "[" + P + "]";
      m.dataPathArr[T] = P;
      var H = x.validate(m);
      m.baseId = R, x.util[e(1109)](H, q) < 2 ? s += " " + x.util.varReplace(H, q, U) + " " : s += e(2675) + q + e(2486) + U + "; " + H + " ", l && (s += e(1102) + k + e(1418)), s += " }";
    }
    return l && (s += " " + v + " if (" + h + " == errors) {"), s;
  }), yt;
}
var vt, _r;
function Fr() {
  return _r || (_r = 1, vt = function(x, t, r) {
    const e = K;
    var s = " ", n = x[e(1082)], i = x[e(1498)], c = x[e(1425)][t], u = x[e(1262)] + x[e(1975)][e(3039)](t), f = x[e(569)] + "/" + t, l = !x[e(1544)].allErrors, R, d = e(2663) + (i || ""), g = x[e(1544)][e(568)] && c && c[e(568)], h;
    g ? (s += e(1311) + n + e(2486) + x.util[e(1186)](c[e(568)], i, x.dataPathArr) + "; ", h = "schema" + n) : h = c;
    var m = t == "maximum", v = e(m ? 3282 : 578), k = x[e(1425)][v], P = x[e(1544)][e(568)] && k && k[e(568)], T = m ? "<" : ">", q = m ? ">" : "<", R = void 0;
    if (!(g || typeof c == e(2665) || c === void 0)) throw new Error(t + " must be number");
    if (!(P || k === void 0 || typeof k == e(2665) || typeof k == "boolean")) throw new Error(v + e(1590));
    if (P) {
      var E = x[e(1975)].getData(k[e(568)], i, x[e(662)]), C = e(2257) + n, A = e(614) + n, O = "exclIsNumber" + n, M = "op" + n, _ = e(1064) + M + " + '";
      s += e(2895) + n + e(2486) + E + "; ", E = e(2142) + n, s += e(2675) + C + e(1691) + A + e(1715) + E + e(2318) + A + e(1864) + A + " != 'undefined' && " + A + " != 'number') { ";
      var R = v, N = N || [];
      N.push(s), s = "", x[e(559)] !== !1 ? (s += e(1108) + (R || e(2956)) + e(2387) + x.errorPath + e(2278) + x[e(1975)][e(1767)](f) + e(1676), x.opts[e(1696)] !== !1 && (s += e(1531) + v + " should be boolean' "), x[e(1544)].verbose && (s += e(1346) + u + e(2408) + x[e(1262)] + e(1844) + d + " "), s += e(1411)) : s += e(3261);
      var z = s;
      s = N.pop(), !x[e(2612)] && l ? x.async ? s += e(1499) + z + "]); " : s += e(2213) + z + e(702) : s += e(2636) + z + e(2653), s += e(3069), g && (s += " (" + h + e(2439) + h + e(1712)), s += " " + A + e(2403) + C + " = " + h + e(2952) + E + " " + T + "= " + h + e(2856) + d + " " + q + "= " + E + e(1171) + d + " " + q + " " + h + " ) : ( (" + C + e(2486) + E + " === true) ? " + d + " " + q + "= " + h + e(1171) + d + " " + q + " " + h + e(671) + d + e(2781) + d + e(679) + n + e(2486) + C + " ? '" + T + e(2866) + T + "='; ", c === void 0 && (R = v, f = x[e(569)] + "/" + v, h = E, g = P);
    } else {
      var O = typeof k == e(2665), _ = T;
      if (O && g) {
        var M = "'" + _ + "'";
        s += e(836), g && (s += " (" + h + e(2439) + h + e(1712)), s += " ( " + h + e(2952) + k + " " + T + "= " + h + " ? " + d + " " + q + "= " + k + e(1171) + d + " " + q + " " + h + " ) || " + d + " !== " + d + e(2834);
      } else {
        O && c === void 0 ? (C = !0, R = v, f = x[e(569)] + "/" + v, h = k, q += "=") : (O && (h = Math[e(m ? 521 : 753)](k, c)), k === (O ? h : !0) ? (C = !0, R = v, f = x[e(569)] + "/" + v, q += "=") : (C = !1, _ += "="));
        var M = "'" + _ + "'";
        s += e(836), g && (s += " (" + h + e(2439) + h + e(1712)), s += " " + d + " " + q + " " + h + e(1887) + d + e(2781) + d + e(2834);
      }
    }
    R = R || t;
    var N = N || [];
    N[e(3062)](s), s = "", x.createErrors !== !1 ? (s += e(1108) + (R || "_limit") + e(2387) + x.errorPath + e(2278) + x.util[e(1767)](f) + " , params: { comparison: " + M + e(2146) + h + e(1118) + C + e(1411), x.opts.messages !== !1 && (s += " , message: 'should be " + _ + " ", g ? s += e(1064) + h : s += "" + h + "'"), x[e(1544)][e(2491)] && (s += e(2827), g ? s += e(1063) + u : s += "" + c, s += e(2989) + x[e(1262)] + " , data: " + d + " "), s += " } ") : s += e(3261);
    var z = s;
    return s = N[e(2900)](), !x[e(2612)] && l ? x[e(2416)] ? s += " throw new ValidationError([" + z + "]); " : s += e(2213) + z + e(702) : s += e(2636) + z + e(2653), s += " } ", l && (s += e(1961)), s;
  }), vt;
}
var wt, Tr;
function Nr() {
  return Tr || (Tr = 1, wt = function(x, t, r) {
    const e = K;
    var s = " ", n = x[e(1082)], i = x[e(1498)], c = x.schema[t], u = x.schemaPath + x[e(1975)].getProperty(t), f = x[e(569)] + "/" + t, l = !x[e(1544)].allErrors, v, d = e(2663) + (i || ""), g = x[e(1544)][e(568)] && c && c[e(568)], h;
    if (g ? (s += e(1311) + n + e(2486) + x[e(1975)][e(1186)](c[e(568)], i, x.dataPathArr) + "; ", h = "schema" + n) : h = c, !(g || typeof c == e(2665))) throw new Error(t + e(1976));
    var m = t == "maxItems" ? ">" : "<";
    s += e(1932), g && (s += " (" + h + e(2439) + h + e(1712)), s += " " + d + e(2008) + m + " " + h + e(2834);
    var v = t, k = k || [];
    k.push(s), s = "", x[e(559)] !== !1 ? (s += e(1108) + (v || e(3157)) + e(2387) + x[e(1935)] + e(2278) + x[e(1975)][e(1767)](f) + " , params: { limit: " + h + e(1411), x[e(1544)][e(1696)] !== !1 && (s += " , message: 'should NOT have ", t == "maxItems" ? s += e(2414) : s += "fewer", s += e(1333), g ? s += e(1064) + h + e(2519) : s += "" + c, s += e(2715)), x[e(1544)][e(2491)] && (s += e(2827), g ? s += e(1063) + u : s += "" + c, s += e(2989) + x[e(1262)] + e(1844) + d + " "), s += e(1411)) : s += e(3261);
    var P = s;
    return s = k.pop(), !x[e(2612)] && l ? x[e(2416)] ? s += e(1499) + P + "]); " : s += e(2213) + P + "]; return false; " : s += e(2636) + P + ";  if (vErrors === null) vErrors = [err]; else vErrors.push(err); errors++; ", s += "} ", l && (s += e(1961)), s;
  }), wt;
}
var St, qr;
function Ar() {
  return qr || (qr = 1, St = function(x, t, r) {
    const e = K;
    var s = " ", n = x[e(1082)], i = x[e(1498)], c = x[e(1425)][t], u = x[e(1262)] + x[e(1975)][e(3039)](t), f = x[e(569)] + "/" + t, l = !x[e(1544)].allErrors, v, d = e(2663) + (i || ""), g = x.opts[e(568)] && c && c.$data, h;
    if (g ? (s += " var schema" + n + e(2486) + x[e(1975)][e(1186)](c[e(568)], i, x.dataPathArr) + "; ", h = "schema" + n) : h = c, !(g || typeof c == e(2665))) throw new Error(t + e(1976));
    var m = t == "maxLength" ? ">" : "<";
    s += e(1932), g && (s += " (" + h + e(2439) + h + e(1712)), x.opts[e(2714)] === !1 ? s += " " + d + e(2008) : s += e(1631) + d + ") ", s += " " + m + " " + h + e(2834);
    var v = t, k = k || [];
    k[e(3062)](s), s = "", x.createErrors !== !1 ? (s += e(1108) + (v || e(1098)) + "' , dataPath: (dataPath || '') + " + x[e(1935)] + e(2278) + x[e(1975)][e(1767)](f) + " , params: { limit: " + h + e(1411), x[e(1544)][e(1696)] !== !1 && (s += e(3144), t == e(649) ? s += e(828) : s += e(1152), s += e(1333), g ? s += e(1064) + h + e(2519) : s += "" + c, s += e(3252)), x[e(1544)][e(2491)] && (s += e(2827), g ? s += e(1063) + u : s += "" + c, s += "         , parentSchema: validate.schema" + x[e(1262)] + e(1844) + d + " "), s += e(1411)) : s += " {} ";
    var P = s;
    return s = k[e(2900)](), !x[e(2612)] && l ? x.async ? s += e(1499) + P + e(2300) : s += " validate.errors = [" + P + e(702) : s += e(2636) + P + e(2653), s += "} ", l && (s += " else { "), s;
  }), St;
}
var kt, Or;
function Dr() {
  return Or || (Or = 1, kt = function(x, t, r) {
    const e = K;
    var s = " ", n = x.level, i = x.dataLevel, c = x[e(1425)][t], u = x.schemaPath + x[e(1975)][e(3039)](t), f = x[e(569)] + "/" + t, l = !x[e(1544)][e(3009)], v, d = e(2663) + (i || ""), g = x[e(1544)][e(568)] && c && c[e(568)], h;
    if (g ? (s += " var schema" + n + " = " + x[e(1975)][e(1186)](c[e(568)], i, x[e(662)]) + "; ", h = e(1425) + n) : h = c, !(g || typeof c == "number")) throw new Error(t + e(1976));
    var m = t == e(1651) ? ">" : "<";
    s += e(1932), g && (s += " (" + h + e(2439) + h + " != 'number') || "), s += " Object.keys(" + d + e(2149) + m + " " + h + e(2834);
    var v = t, k = k || [];
    k[e(3062)](s), s = "", x[e(559)] !== !1 ? (s += e(1108) + (v || "_limitProperties") + e(2387) + x[e(1935)] + e(2278) + x.util[e(1767)](f) + e(2929) + h + e(1411), x[e(1544)][e(1696)] !== !1 && (s += e(1687), t == "maxProperties" ? s += e(2414) : s += "fewer", s += " than ", g ? s += e(1064) + h + e(2519) : s += "" + c, s += " properties' "), x[e(1544)][e(2491)] && (s += e(2827), g ? s += e(1063) + u : s += "" + c, s += e(2989) + x[e(1262)] + e(1844) + d + " "), s += e(1411)) : s += e(3261);
    var P = s;
    return s = k[e(2900)](), !x[e(2612)] && l ? x[e(2416)] ? s += " throw new ValidationError([" + P + e(2300) : s += e(2213) + P + e(702) : s += e(2636) + P + e(2653), s += "} ", l && (s += e(1961)), s;
  }), kt;
}
var Pt, jr;
function S2() {
  return jr || (jr = 1, Pt = function(x, t, r) {
    const e = K;
    var s = " ", n = x[e(1082)], i = x[e(1498)], c = x[e(1425)][t], u = x[e(1262)] + x[e(1975)][e(3039)](t), f = x[e(569)] + "/" + t, l = !x[e(1544)][e(3009)], d = e(2663) + (i || ""), g = x.opts[e(568)] && c && c[e(568)], h;
    if (g ? (s += e(1311) + n + " = " + x[e(1975)][e(1186)](c.$data, i, x[e(662)]) + "; ", h = "schema" + n) : h = c, !(g || typeof c == e(2665))) throw new Error(t + " must be number");
    s += e(2058) + n + ";if (", g && (s += " " + h + e(652) + h + " != 'number' || "), s += e(785) + n + e(2486) + d + e(1973) + h + ", ", x[e(1544)][e(2808)] ? s += e(1369) + n + e(2845) + n + e(1641) + x[e(1544)].multipleOfPrecision + " " : s += e(792) + n + e(1848) + n + ") ", s += e(2368), g && (s += e(1644)), s += e(3047);
    var m = m || [];
    m[e(3062)](s), s = "", x.createErrors !== !1 ? (s += e(1108) + "multipleOf" + e(2387) + x[e(1935)] + e(2278) + x[e(1975)][e(1767)](f) + e(1911) + h + e(1411), x[e(1544)].messages !== !1 && (s += e(2680), g ? s += e(1064) + h : s += "" + h + "'"), x.opts.verbose && (s += e(2827), g ? s += e(1063) + u : s += "" + c, s += e(2989) + x[e(1262)] + e(1844) + d + " "), s += e(1411)) : s += e(3261);
    var v = s;
    return s = m[e(2900)](), !x.compositeRule && l ? x[e(2416)] ? s += e(1499) + v + e(2300) : s += " validate.errors = [" + v + e(702) : s += e(2636) + v + e(2653), s += "} ", l && (s += " else { "), s;
  }), Pt;
}
var It, Mr;
function k2() {
  return Mr || (Mr = 1, It = function(x, t, r) {
    const e = K;
    var s = " ", n = x.level, i = x[e(1498)], c = x[e(1425)][t], u = x[e(1262)] + x[e(1975)].getProperty(t), f = x[e(569)] + "/" + t, l = !x[e(1544)][e(3009)], d = e(2663) + (i || ""), g = e(1870) + n, h = x[e(1975)][e(2615)](x);
    h[e(1082)]++;
    var m = e(1122) + h[e(1082)];
    if (x[e(1544)][e(868)] ? typeof c == e(1304) && Object[e(2123)](c).length > 0 || c === !1 : x[e(1975)][e(1733)](c, x[e(2996)][e(1096)])) {
      h[e(1425)] = c, h.schemaPath = u, h.errSchemaPath = f, s += e(2675) + g + " = errors;  ";
      var v = x[e(2612)];
      x[e(2612)] = h[e(2612)] = !0, h[e(559)] = !1;
      var k;
      h.opts[e(3009)] && (k = h[e(1544)][e(3009)], h[e(1544)].allErrors = !1), s += " " + x[e(3181)](h) + " ", h[e(559)] = !0, k && (h.opts.allErrors = k), x[e(2612)] = h[e(2612)] = v, s += e(1754) + m + e(1793);
      var P = P || [];
      P[e(3062)](s), s = "", x[e(559)] !== !1 ? (s += e(1108) + "not' , dataPath: (dataPath || '') + " + x[e(1935)] + " , schemaPath: " + x[e(1975)][e(1767)](f) + e(1676), x[e(1544)].messages !== !1 && (s += " , message: 'should NOT be valid' "), x[e(1544)][e(2491)] && (s += e(1346) + u + " , parentSchema: validate.schema" + x.schemaPath + " , data: " + d + " "), s += e(1411)) : s += e(3261);
      var T = s;
      s = P[e(2900)](), !x[e(2612)] && l ? x[e(2416)] ? s += e(1499) + T + e(2300) : s += e(2213) + T + e(702) : s += e(2636) + T + e(2653), s += " } else {  errors = " + g + e(1606) + g + ") vErrors.length = " + g + e(1999), x[e(1544)].allErrors && (s += e(1411));
    } else s += e(1381), x[e(559)] !== !1 ? (s += e(1108) + e(2535) + "' , dataPath: (dataPath || '') + " + x[e(1935)] + e(2278) + x.util[e(1767)](f) + e(1676), x.opts.messages !== !1 && (s += e(2927)), x[e(1544)][e(2491)] && (s += e(1346) + u + e(2408) + x[e(1262)] + e(1844) + d + " "), s += e(1411)) : s += e(3261), s += e(2653), l && (s += e(2236));
    return s;
  }), It;
}
var Et, Lr;
function P2() {
  return Lr || (Lr = 1, Et = function(x, t, r) {
    const e = K;
    var s = " ", n = x[e(1082)], i = x[e(1498)], c = x[e(1425)][t], u = x[e(1262)] + x[e(1975)][e(3039)](t), f = x[e(569)] + "/" + t, l = !x[e(1544)][e(3009)], d = e(2663) + (i || ""), g = e(1122) + n, h = "errs__" + n, m = x[e(1975)][e(2615)](x), v = "";
    m[e(1082)]++;
    var k = e(1122) + m[e(1082)], P = m[e(805)], T = e(842) + n, q = "passingSchemas" + n;
    s += e(612) + h + e(1711) + T + e(1323) + g + e(1323) + q + e(3278);
    var R = x[e(2612)];
    x.compositeRule = m.compositeRule = !0;
    var E = c;
    if (E)
      for (var C, A = -1, O = E[e(2710)] - 1; A < O; )
        C = E[A += 1], (x.opts[e(868)] ? typeof C == e(1304) && Object[e(2123)](C).length > 0 || C === !1 : x[e(1975)][e(1733)](C, x.RULES[e(1096)])) ? (m[e(1425)] = C, m.schemaPath = u + "[" + A + "]", m.errSchemaPath = f + "/" + A, s += "  " + x.validate(m) + " ", m.baseId = P) : s += e(2675) + k + e(2411), A && (s += e(1754) + k + " && " + T + e(2834) + g + e(1500) + q + e(2498) + q + ", " + A + e(1308), v += "}"), s += e(1754) + k + ") { " + g + " = " + T + e(2411) + q + " = " + A + e(501);
    return x.compositeRule = m.compositeRule = R, s += "" + v + e(1778) + g + ") {   var err =   ", x[e(559)] !== !1 ? (s += e(1108) + e(2547) + e(2387) + x[e(1935)] + e(2278) + x.util.toQuotedString(f) + " , params: { passingSchemas: " + q + " } ", x[e(1544)][e(1696)] !== !1 && (s += e(3008)), x[e(1544)][e(2491)] && (s += e(1346) + u + e(2408) + x[e(1262)] + " , data: " + d + " "), s += e(1411)) : s += e(3261), s += e(2653), !x[e(2612)] && l && (x[e(2416)] ? s += e(903) : s += e(1021)), s += e(1943) + h + e(1606) + h + e(2563) + h + e(598), x[e(1544)][e(3009)] && (s += e(1411)), s;
  }), Et;
}
var Rt, $r;
function I2() {
  return $r || ($r = 1, Rt = function(x, t, r) {
    const e = K;
    var s = " ", n = x[e(1082)], i = x.dataLevel, c = x[e(1425)][t], u = x[e(1262)] + x[e(1975)].getProperty(t), f = x[e(569)] + "/" + t, l = !x[e(1544)].allErrors, d = e(2663) + (i || ""), g = x[e(1544)].$data && c && c[e(568)], h;
    g ? (s += " var schema" + n + e(2486) + x[e(1975)][e(1186)](c[e(568)], i, x.dataPathArr) + "; ", h = e(1425) + n) : h = c;
    var m = g ? e(2931) + h + "))" : x[e(2399)](c);
    s += "if ( ", g && (s += " (" + h + e(2439) + h + e(2232)), s += " !" + m + e(2947) + d + e(1042);
    var v = v || [];
    v[e(3062)](s), s = "", x[e(559)] !== !1 ? (s += e(1108) + e(526) + e(2387) + x.errorPath + e(2278) + x[e(1975)][e(1767)](f) + " , params: { pattern:  ", g ? s += "" + h : s += "" + x[e(1975)][e(1767)](c), s += e(3186), x[e(1544)][e(1696)] !== !1 && (s += e(2244), g ? s += e(1064) + h + e(2519) : s += "" + x.util.escapeQuotes(c), s += `"' `), x[e(1544)][e(2491)] && (s += e(2827), g ? s += e(1063) + u : s += "" + x[e(1975)][e(1767)](c), s += e(2989) + x[e(1262)] + e(1844) + d + " "), s += e(1411)) : s += e(3261);
    var k = s;
    return s = v[e(2900)](), !x[e(2612)] && l ? x[e(2416)] ? s += " throw new ValidationError([" + k + "]); " : s += e(2213) + k + e(702) : s += e(2636) + k + ";  if (vErrors === null) vErrors = [err]; else vErrors.push(err); errors++; ", s += "} ", l && (s += " else { "), s;
  }), Rt;
}
var Ct, Ur;
function E2() {
  return Ur || (Ur = 1, Ct = function(x, t, r) {
    const e = K;
    var s = " ", n = x[e(1082)], i = x[e(1498)], c = x[e(1425)][t], u = x[e(1262)] + x[e(1975)].getProperty(t), f = x[e(569)] + "/" + t, l = !x[e(1544)][e(3009)], d = e(2663) + (i || ""), g = "errs__" + n, h = x[e(1975)][e(2615)](x), m = "";
    h[e(1082)]++;
    var v = e(1122) + h.level, k = e(480) + n, P = "idx" + n, T = h[e(1498)] = x[e(1498)] + 1, q = e(2663) + T, R = e(2541) + n, E = Object[e(2123)](c || {})[e(2581)](fe), C = x[e(1425)][e(1688)] || {}, A = Object.keys(C).filter(fe), O = x[e(1425)][e(1872)], M = E[e(2710)] || A[e(2710)], _ = O === !1, N = typeof O == e(1304) && Object.keys(O).length, z = x[e(1544)][e(3137)], U = _ || N || z, H = x[e(1544)][e(951)], G = x.baseId, re = x[e(1425)].required;
    if (re && !(x.opts[e(568)] && re[e(568)]) && re[e(2710)] < x[e(1544)].loopRequired) var se = x[e(1975)][e(709)](re);
    function fe(Lx) {
      return Lx !== e(1134);
    }
    if (s += "var " + g + e(1156) + v + e(879), H && (s += " var " + R + e(2809)), U) {
      if (H ? s += " " + R + " = " + R + e(2865) + d + e(1427) + P + e(599) + P + "<" + R + e(2838) + P + "++) { var " + k + e(2486) + R + "[" + P + e(3243) : s += e(2682) + k + e(1760) + d + e(2834), M) {
        if (s += " var isAdditional" + n + e(2217), E[e(2710)])
          if (E[e(2710)] > 8) s += " || validate.schema" + u + e(3085) + k + ") ";
          else {
            var de = E;
            if (de)
              for (var le, Se = -1, _e = de[e(2710)] - 1; Se < _e; )
                le = de[Se += 1], s += " || " + k + e(574) + x.util[e(1767)](le) + " ";
          }
        if (A[e(2710)]) {
          var Me = A;
          if (Me)
            for (var Fe, Je = -1, D = Me[e(2710)] - 1; Je < D; )
              Fe = Me[Je += 1], s += e(1887) + x[e(2399)](Fe) + e(2947) + k + ") ";
        }
        s += e(687) + n + ") { ";
      }
      if (z == e(1096)) s += " delete " + d + "[" + k + e(3243);
      else {
        var F = x[e(1935)], j = e(1064) + k + e(2519);
        if (x[e(1544)][e(3124)] && (x[e(1935)] = x.util.getPathExpr(x[e(1935)], k, x.opts[e(2761)])), _)
          if (z) s += e(2536) + d + "[" + k + e(3243);
          else {
            s += " " + v + " = false; ";
            var J = f;
            f = x[e(569)] + e(1527);
            var X = X || [];
            X[e(3062)](s), s = "", x[e(559)] !== !1 ? (s += e(1108) + e(1872) + e(2387) + x.errorPath + e(2278) + x.util.toQuotedString(f) + e(1882) + j + e(871), x[e(1544)][e(1696)] !== !1 && (s += e(1531), x[e(1544)]._errorDataPathProperty ? s += e(768) : s += e(2277), s += "' "), x[e(1544)][e(2491)] && (s += " , schema: false , parentSchema: validate.schema" + x[e(1262)] + e(1844) + d + " "), s += e(1411)) : s += " {} ";
            var V = s;
            s = X[e(2900)](), !x[e(2612)] && l ? x[e(2416)] ? s += e(1499) + V + e(2300) : s += e(2213) + V + "]; return false; " : s += e(2636) + V + e(2653), f = J, l && (s += e(3239));
          }
        else if (N)
          if (z == "failing") {
            s += e(2675) + g + e(493);
            var Y = x[e(2612)];
            x[e(2612)] = h.compositeRule = !0, h[e(1425)] = O, h[e(1262)] = x[e(1262)] + e(2466), h[e(569)] = x[e(569)] + e(1527), h[e(1935)] = x[e(1544)][e(3124)] ? x[e(1935)] : x[e(1975)][e(2126)](x[e(1935)], k, x[e(1544)].jsonPointers);
            var ce = d + "[" + k + "]";
            h[e(662)][T] = k;
            var oe = x.validate(h);
            h[e(805)] = G, x[e(1975)][e(1109)](oe, q) < 2 ? s += " " + x.util[e(650)](oe, q, ce) + " " : s += e(2675) + q + e(2486) + ce + "; " + oe + " ", s += e(1102) + v + e(2578) + g + "; if (validate.errors !== null) { if (errors) validate.errors.length = errors; else validate.errors = null; } delete " + d + "[" + k + e(2209), x.compositeRule = h[e(2612)] = Y;
          } else {
            h[e(1425)] = O, h.schemaPath = x[e(1262)] + e(2466), h[e(569)] = x.errSchemaPath + e(1527), h[e(1935)] = x.opts[e(3124)] ? x[e(1935)] : x[e(1975)][e(2126)](x[e(1935)], k, x[e(1544)][e(2761)]);
            var ce = d + "[" + k + "]";
            h[e(662)][T] = k;
            var oe = x[e(3181)](h);
            h[e(805)] = G, x[e(1975)].varOccurences(oe, q) < 2 ? s += " " + x[e(1975)][e(650)](oe, q, ce) + " " : s += e(2675) + q + e(2486) + ce + "; " + oe + " ", l && (s += e(1102) + v + e(1418));
          }
        x[e(1935)] = F;
      }
      M && (s += e(1411)), s += e(2204), l && (s += " if (" + v + ") { ", m += "}");
    }
    var te = x[e(1544)][e(2088)] && !x[e(2612)];
    if (E[e(2710)]) {
      var Le = E;
      if (Le)
        for (var le, Ae = -1, ze = Le[e(2710)] - 1; Ae < ze; ) {
          le = Le[Ae += 1];
          var ke = c[le];
          if (x[e(1544)][e(868)] ? typeof ke == e(1304) && Object.keys(ke).length > 0 || ke === !1 : x[e(1975)].schemaHasRules(ke, x[e(2996)].all)) {
            var Ge = x[e(1975)].getProperty(le), ce = d + Ge, n0 = te && ke[e(2485)] !== void 0;
            h.schema = ke, h.schemaPath = u + Ge, h[e(569)] = f + "/" + x.util.escapeFragment(le), h[e(1935)] = x[e(1975)][e(3077)](x[e(1935)], le, x[e(1544)][e(2761)]), h.dataPathArr[T] = x.util[e(1767)](le);
            var oe = x[e(3181)](h);
            if (h[e(805)] = G, x.util.varOccurences(oe, q) < 2) {
              oe = x[e(1975)][e(650)](oe, q, ce);
              var Qe = ce;
            } else {
              var Qe = q;
              s += e(2675) + q + e(2486) + ce + "; ";
            }
            if (n0) s += " " + oe + " ";
            else {
              if (se && se[le]) {
                s += e(836) + Qe + " === undefined ", H && (s += e(1578) + d + e(1167) + x[e(1975)].escapeQuotes(le) + e(2901)), s += ") { " + v + e(1500);
                var F = x[e(1935)], J = f, Oe = x[e(1975)].escapeQuotes(le);
                x[e(1544)][e(3124)] && (x[e(1935)] = x[e(1975)][e(3077)](F, le, x[e(1544)][e(2761)])), f = x.errSchemaPath + e(1359);
                var X = X || [];
                X[e(3062)](s), s = "", x[e(559)] !== !1 ? (s += e(1108) + e(2438) + e(2387) + x[e(1935)] + e(2278) + x[e(1975)].toQuotedString(f) + e(2549) + Oe + e(871), x[e(1544)][e(1696)] !== !1 && (s += e(1531), x[e(1544)][e(3124)] ? s += "is a required property" : s += "should have required property \\'" + Oe + "\\'", s += "' "), x[e(1544)][e(2491)] && (s += e(1346) + u + e(2408) + x[e(1262)] + e(1844) + d + " "), s += " } ") : s += e(3261);
                var V = s;
                s = X[e(2900)](), !x.compositeRule && l ? x[e(2416)] ? s += " throw new ValidationError([" + V + "]); " : s += e(2213) + V + "]; return false; " : s += " var err = " + V + e(2653), f = J, x[e(1935)] = F, s += e(761);
              } else l ? (s += e(836) + Qe + e(562), H && (s += " || ! Object.prototype.hasOwnProperty.call(" + d + e(1167) + x.util[e(1265)](le) + e(2901)), s += ") { " + v + " = true; } else { ") : (s += e(1754) + Qe + e(1949), H && (s += " &&   Object.prototype.hasOwnProperty.call(" + d + e(1167) + x[e(1975)][e(1265)](le) + e(2901)), s += e(774));
              s += " " + oe + e(1411);
            }
          }
          l && (s += " if (" + v + e(2834), m += "}");
        }
    }
    if (A.length) {
      var He = A;
      if (He)
        for (var Fe, Ye = -1, M0 = He[e(2710)] - 1; Ye < M0; ) {
          Fe = He[Ye += 1];
          var ke = C[Fe];
          if (x[e(1544)][e(868)] ? typeof ke == e(1304) && Object.keys(ke)[e(2710)] > 0 || ke === !1 : x[e(1975)][e(1733)](ke, x[e(2996)][e(1096)])) {
            h[e(1425)] = ke, h[e(1262)] = x[e(1262)] + ".patternProperties" + x[e(1975)][e(3039)](Fe), h[e(569)] = x.errSchemaPath + e(2107) + x[e(1975)][e(1675)](Fe), H ? s += " " + R + e(2486) + R + e(2865) + d + e(1427) + P + "=0; " + P + "<" + R + e(2838) + P + "++) { var " + k + e(2486) + R + "[" + P + "]; " : s += e(2682) + k + e(1760) + d + e(2834), s += " if (" + x[e(2399)](Fe) + e(2947) + k + e(2154), h[e(1935)] = x.util.getPathExpr(x[e(1935)], k, x[e(1544)][e(2761)]);
            var ce = d + "[" + k + "]";
            h[e(662)][T] = k;
            var oe = x[e(3181)](h);
            h[e(805)] = G, x[e(1975)].varOccurences(oe, q) < 2 ? s += " " + x[e(1975)][e(650)](oe, q, ce) + " " : s += e(2675) + q + e(2486) + ce + "; " + oe + " ", l && (s += e(1102) + v + ") break; "), s += e(1411), l && (s += e(2695) + v + e(2411)), s += e(2204), l && (s += e(1754) + v + e(2834), m += "}");
          }
        }
    }
    return l && (s += " " + m + e(1754) + g + e(2448)), s;
  }), Ct;
}
var _t, zr;
function R2() {
  return zr || (zr = 1, _t = function(x, t, r) {
    const e = K;
    var s = " ", n = x[e(1082)], i = x.dataLevel, c = x[e(1425)][t], u = x[e(1262)] + x[e(1975)].getProperty(t), f = x[e(569)] + "/" + t, l = !x[e(1544)].allErrors, d = e(2663) + (i || ""), g = "errs__" + n, h = x[e(1975)].copy(x), m = "";
    h[e(1082)]++;
    var v = e(1122) + h.level;
    if (s += e(612) + g + " = errors;", x[e(1544)].strictKeywords ? typeof c == e(1304) && Object[e(2123)](c).length > 0 || c === !1 : x[e(1975)][e(1733)](c, x.RULES[e(1096)])) {
      h[e(1425)] = c, h.schemaPath = u, h.errSchemaPath = f;
      var k = e(480) + n, P = e(1035) + n, T = "i" + n, q = e(1064) + k + e(2519), R = h[e(1498)] = x[e(1498)] + 1, E = "data" + R, C = e(2541) + n, A = x[e(1544)][e(951)], O = x[e(805)];
      A && (s += e(2675) + C + e(1415)), A ? s += " " + C + e(2486) + C + e(2865) + d + e(1427) + P + e(599) + P + "<" + C + e(2838) + P + e(1921) + k + " = " + C + "[" + P + e(3243) : s += e(2682) + k + e(1760) + d + e(2834), s += e(1103) + n + " = errors; ";
      var M = k, _ = x[e(2612)];
      x[e(2612)] = h[e(2612)] = !0;
      var N = x.validate(h);
      h.baseId = O, x.util[e(1109)](N, E) < 2 ? s += " " + x.util[e(650)](N, E, M) + " " : s += " var " + E + " = " + M + "; " + N + " ", x[e(2612)] = h[e(2612)] = _, s += " if (!" + v + e(1163) + T + e(2651) + n + "; " + T + e(1989) + T + e(2599) + T + "].propertyName = " + k + e(1717), x[e(559)] !== !1 ? (s += e(1108) + "propertyNames" + e(2387) + x.errorPath + e(2278) + x[e(1975)][e(1767)](f) + " , params: { propertyName: '" + q + e(871), x.opts[e(1696)] !== !1 && (s += e(1086) + q + "\\' is invalid' "), x[e(1544)][e(2491)] && (s += e(1346) + u + " , parentSchema: validate.schema" + x.schemaPath + " , data: " + d + " "), s += " } ") : s += e(3261), s += e(2653), !x[e(2612)] && l && (x[e(2416)] ? s += e(903) : s += e(1021)), l && (s += e(3239)), s += e(1250);
    }
    return l && (s += " " + m + " if (" + g + e(2448)), s;
  }), _t;
}
var Ft, Hr;
function C2() {
  return Hr || (Hr = 1, Ft = function(x, t, r) {
    const e = K;
    var s = " ", n = x[e(1082)], i = x.dataLevel, c = x.schema[t], u = x[e(1262)] + x[e(1975)][e(3039)](t), f = x[e(569)] + "/" + t, l = !x.opts.allErrors, d = "data" + (i || ""), g = e(1122) + n, h = x[e(1544)][e(568)] && c && c[e(568)];
    h && (s += e(1311) + n + " = " + x[e(1975)].getData(c[e(568)], i, x[e(662)]) + "; ");
    var m = e(1425) + n;
    if (!h)
      if (c[e(2710)] < x[e(1544)][e(3094)] && x[e(1425)][e(3005)] && Object[e(2123)](x[e(1425)][e(3005)]).length) {
        var R = [], v = c;
        if (v)
          for (var k, P = -1, T = v[e(2710)] - 1; P < T; ) {
            k = v[P += 1];
            var q = x[e(1425)][e(3005)][k];
            !(q && (x.opts.strictKeywords ? typeof q == e(1304) && Object[e(2123)](q)[e(2710)] > 0 || q === !1 : x[e(1975)][e(1733)](q, x[e(2996)][e(1096)]))) && (R[R[e(2710)]] = k);
          }
      } else var R = c;
    if (h || R[e(2710)]) {
      var E = x[e(1935)], C = h || R.length >= x.opts[e(3094)], A = x.opts[e(951)];
      if (l)
        if (s += e(1488) + n + "; ", C) {
          !h && (s += e(2675) + m + e(1699) + u + "; ");
          var O = "i" + n, M = "schema" + n + "[" + O + "]", _ = e(1064) + M + e(2519);
          x[e(1544)][e(3124)] && (x[e(1935)] = x[e(1975)][e(2126)](E, M, x[e(1544)][e(2761)])), s += e(2675) + g + e(2411), h && (s += e(3121) + n + e(1144) + g + e(3244) + n + e(1345) + g + e(991)), s += e(2682) + O + e(2174) + O + " < " + m + ".length; " + O + e(609) + g + e(2486) + d + "[" + m + "[" + O + e(1420), A && (s += e(2647) + d + ", " + m + "[" + O + e(2894)), s += e(1221) + g + e(1360), h && (s += e(2882)), s += e(2919) + g + e(1793);
          var N = N || [];
          N[e(3062)](s), s = "", x[e(559)] !== !1 ? (s += e(1108) + e(2438) + e(2387) + x[e(1935)] + " , schemaPath: " + x[e(1975)][e(1767)](f) + e(2549) + _ + "' } ", x[e(1544)][e(1696)] !== !1 && (s += e(1531), x[e(1544)][e(3124)] ? s += e(2892) : s += e(2407) + _ + "\\'", s += "' "), x[e(1544)].verbose && (s += e(1346) + u + e(2408) + x.schemaPath + e(1844) + d + " "), s += " } ") : s += " {} ";
          var z = s;
          s = N[e(2900)](), !x.compositeRule && l ? x[e(2416)] ? s += e(1499) + z + e(2300) : s += e(2213) + z + e(702) : s += e(2636) + z + ";  if (vErrors === null) vErrors = [err]; else vErrors.push(err); errors++; ", s += " } else { ";
        } else {
          s += " if ( ";
          var U = R;
          if (U)
            for (var H, O = -1, G = U.length - 1; O < G; ) {
              H = U[O += 1], O && (s += e(1887));
              var re = x.util[e(3039)](H), se = d + re;
              s += e(1330) + se + e(562), A && (s += e(1578) + d + e(1167) + x[e(1975)][e(1265)](H) + "') "), s += e(3033) + n + e(2486) + x[e(1975)].toQuotedString(x.opts.jsonPointers ? H : re) + e(2130);
            }
          s += e(929);
          var M = "missing" + n, _ = e(1064) + M + e(2519);
          x.opts[e(3124)] && (x.errorPath = x[e(1544)].jsonPointers ? x[e(1975)][e(2126)](E, M, !0) : E + " + " + M);
          var N = N || [];
          N[e(3062)](s), s = "", x[e(559)] !== !1 ? (s += e(1108) + e(2438) + e(2387) + x.errorPath + " , schemaPath: " + x[e(1975)][e(1767)](f) + " , params: { missingProperty: '" + _ + e(871), x[e(1544)][e(1696)] !== !1 && (s += e(1531), x[e(1544)][e(3124)] ? s += e(2892) : s += e(2407) + _ + "\\'", s += "' "), x[e(1544)][e(2491)] && (s += e(1346) + u + " , parentSchema: validate.schema" + x[e(1262)] + e(1844) + d + " "), s += e(1411)) : s += e(3261);
          var z = s;
          s = N[e(2900)](), !x[e(2612)] && l ? x[e(2416)] ? s += " throw new ValidationError([" + z + e(2300) : s += " validate.errors = [" + z + e(702) : s += e(2636) + z + e(2653), s += e(761);
        }
      else if (C) {
        !h && (s += " var " + m + " = validate.schema" + u + "; ");
        var O = "i" + n, M = e(1425) + n + "[" + O + "]", _ = "' + " + M + e(2519);
        x[e(1544)]._errorDataPathProperty && (x[e(1935)] = x[e(1975)][e(2126)](E, M, x[e(1544)][e(2761)])), h && (s += e(1754) + m + " && !Array.isArray(" + m + e(1853), x.createErrors !== !1 ? (s += e(1108) + e(2438) + e(2387) + x[e(1935)] + e(2278) + x[e(1975)][e(1767)](f) + e(2549) + _ + "' } ", x[e(1544)][e(1696)] !== !1 && (s += e(1531), x.opts[e(3124)] ? s += "is a required property" : s += e(2407) + _ + "\\'", s += "' "), x[e(1544)][e(2491)] && (s += e(1346) + u + e(2408) + x[e(1262)] + e(1844) + d + " "), s += e(1411)) : s += e(3261), s += e(1146) + m + e(2515)), s += " for (var " + O + " = 0; " + O + " < " + m + e(2838) + O + e(613) + d + "[" + m + "[" + O + e(825), A && (s += e(1578) + d + ", " + m + "[" + O + e(2894)), s += e(1939), x.createErrors !== !1 ? (s += e(1108) + e(2438) + e(2387) + x.errorPath + e(2278) + x.util[e(1767)](f) + e(2549) + _ + e(871), x[e(1544)][e(1696)] !== !1 && (s += e(1531), x.opts[e(3124)] ? s += "is a required property" : s += "should have required property \\'" + _ + "\\'", s += "' "), x[e(1544)][e(2491)] && (s += " , schema: validate.schema" + u + e(2408) + x[e(1262)] + e(1844) + d + " "), s += " } ") : s += e(3261), s += e(1009), h && (s += e(2882));
      } else {
        var fe = R;
        if (fe)
          for (var H, de = -1, le = fe[e(2710)] - 1; de < le; ) {
            H = fe[de += 1];
            var re = x[e(1975)][e(3039)](H), _ = x.util.escapeQuotes(H), se = d + re;
            x[e(1544)][e(3124)] && (x.errorPath = x[e(1975)].getPath(E, H, x.opts[e(2761)])), s += " if ( " + se + e(562), A && (s += " || ! Object.prototype.hasOwnProperty.call(" + d + e(1167) + x[e(1975)][e(1265)](H) + e(2901)), s += e(1939), x[e(559)] !== !1 ? (s += e(1108) + e(2438) + e(2387) + x[e(1935)] + " , schemaPath: " + x[e(1975)][e(1767)](f) + " , params: { missingProperty: '" + _ + "' } ", x[e(1544)][e(1696)] !== !1 && (s += e(1531), x[e(1544)][e(3124)] ? s += e(2892) : s += "should have required property \\'" + _ + "\\'", s += "' "), x[e(1544)][e(2491)] && (s += e(1346) + u + " , parentSchema: validate.schema" + x[e(1262)] + e(1844) + d + " "), s += e(1411)) : s += " {} ", s += e(2784);
          }
      }
      x[e(1935)] = E;
    } else l && (s += e(1107));
    return s;
  }), Ft;
}
var Tt, Vr;
function _2() {
  return Vr || (Vr = 1, Tt = function(x, t, r) {
    const e = K;
    var s = " ", n = x[e(1082)], i = x.dataLevel, c = x[e(1425)][t], u = x[e(1262)] + x[e(1975)][e(3039)](t), f = x.errSchemaPath + "/" + t, l = !x[e(1544)][e(3009)], d = e(2663) + (i || ""), g = e(1122) + n, h = x.opts[e(568)] && c && c[e(568)], m;
    if (h ? (s += " var schema" + n + e(2486) + x[e(1975)].getData(c.$data, i, x[e(662)]) + "; ", m = "schema" + n) : m = c, (c || h) && x[e(1544)][e(1684)] !== !1) {
      h && (s += " var " + g + "; if (" + m + " === false || " + m + " === undefined) " + g + e(1564) + m + e(2093) + g + " = false; else { "), s += e(1546) + d + e(3248) + g + e(1483);
      var v = x.schema[e(2286)] && x.schema[e(2286)][e(2076)], k = Array[e(3255)](v);
      if (!v || v == e(1304) || v == e(529) || k && (v.indexOf(e(1304)) >= 0 || v[e(2436)](e(529)) >= 0)) s += e(834) + d + e(3127) + d + e(2702) + g + " = false; break outer; } } } ";
      else {
        s += e(850) + d + e(2533);
        var P = e(1947) + (k ? "s" : "");
        s += e(1754) + x[e(1975)][P](v, e(2624), x[e(1544)][e(1565)], !0) + e(2248), k && (s += e(2067)), s += e(2593) + g + e(2600);
      }
      s += e(1411), h && (s += "  }  "), s += e(1102) + g + e(1793);
      var T = T || [];
      T.push(s), s = "", x.createErrors !== !1 ? (s += e(1108) + e(1684) + e(2387) + x[e(1935)] + e(2278) + x[e(1975)][e(1767)](f) + e(1138), x[e(1544)][e(1696)] !== !1 && (s += e(883)), x[e(1544)].verbose && (s += e(2827), h ? s += e(1063) + u : s += "" + c, s += e(2989) + x[e(1262)] + e(1844) + d + " "), s += e(1411)) : s += e(3261);
      var q = s;
      s = T[e(2900)](), !x[e(2612)] && l ? x[e(2416)] ? s += " throw new ValidationError([" + q + e(2300) : s += e(2213) + q + e(702) : s += " var err = " + q + e(2653), s += " } ", l && (s += " else { ");
    } else l && (s += " if (true) { ");
    return s;
  }), Tt;
}
var Nt, Br;
function F2() {
  return Br || (Br = 1, Nt = { $ref: f2(), allOf: l2(), anyOf: d2(), $comment: h2(), const: p2(), contains: m2(), dependencies: b2(), enum: g2(), format: y2(), if: v2(), items: w2(), maximum: Fr(), minimum: Fr(), maxItems: Nr(), minItems: Nr(), maxLength: Ar(), minLength: Ar(), maxProperties: Dr(), minProperties: Dr(), multipleOf: S2(), not: k2(), oneOf: P2(), pattern: I2(), properties: E2(), propertyNames: R2(), required: C2(), uniqueItems: _2(), validate: wn() }), Nt;
}
var qt, Wr;
function T2() {
  if (Wr) return qt;
  Wr = 1;
  var o = F2(), x = W0().toHash;
  return qt = function() {
    const r = K;
    var e = [{ type: r(2665), rules: [{ maximum: [r(3282)] }, { minimum: [r(578)] }, r(2798), "format"] }, { type: r(1361), rules: ["maxLength", r(1312), r(526), r(802)] }, { type: r(529), rules: [r(1335), r(1919), r(2286), r(688), "uniqueItems"] }, { type: "object", rules: [r(1651), r(2371), r(2438), r(1110), r(2238), { properties: [r(1872), r(1688)] }] }, { rules: [r(885), r(1603), r(2218), r(2535), r(2122), r(2547), r(704), "if"] }], s = [r(2076), "$comment"], n = ["$schema", r(3154), "id", r(568), "$async", r(2141), r(541), r(2485), r(2451), r(3078), r(1370), r(2604), r(3264), "contentEncoding", r(2410), r(2517), "else"], i = ["number", r(766), r(1361), r(529), r(1304), r(3106), "null"];
    return e[r(1096)] = x(s), e[r(2795)] = x(i), e[r(2617)](function(c) {
      const u = r;
      c[u(2293)] = c[u(2293)].map(function(f) {
        const l = u;
        var d;
        if (typeof f == l(1304)) {
          var g = Object[l(2123)](f)[0];
          d = f[g], f = g, d[l(2617)](function(m) {
            const v = l;
            s[v(3062)](m), e[v(1096)][m] = !0;
          });
        }
        s[l(3062)](f);
        var h = e[l(1096)][f] = { keyword: f, code: o[f], implements: d };
        return h;
      }), e[u(1096)][u(2786)] = { keyword: u(2786), code: o[u(2786)] }, c[u(2076)] && (e[u(2795)][c[u(2076)]] = c);
    }), e[r(1997)] = x(s[r(2700)](n)), e[r(1618)] = {}, e;
  }, qt;
}
var At, Zr;
function N2() {
  const o = a;
  if (Zr) return At;
  Zr = 1;
  var x = [o(2798), "maximum", o(3282), o(2226), o(578), o(649), o(1312), o(526), "additionalItems", o(1335), "minItems", o(1684), o(1651), "minProperties", "required", o(1872), o(2218), o(802), o(1603)];
  return At = function(t, r) {
    const e = o;
    for (var s = 0; s < r[e(2710)]; s++) {
      t = JSON[e(2774)](JSON[e(1031)](t));
      var n = r[s][e(3263)]("/"), i = t, c;
      for (c = 1; c < n[e(2710)]; c++) i = i[n[c]];
      for (c = 0; c < x.length; c++) {
        var u = x[c], f = i[u];
        f && (i[u] = { anyOf: [f, { $ref: e(1253) }] });
      }
    }
    return t;
  }, At;
}
var Ot, Kr;
function q2() {
  const o = a;
  if (Kr) return Ot;
  Kr = 1;
  var x = ha()[o(2003)];
  Ot = t;
  function t(r, e, s) {
    const n = o;
    var i = this;
    if (typeof this[n(1068)][n(2330)] != n(1936)) throw new Error(n(809));
    typeof e == n(1936) && (s = e, e = void 0);
    var c = u(r)[n(2517)](function() {
      const l = n;
      var d = i[l(2669)](r, void 0, e);
      return d[l(3181)] || f(d);
    });
    return s && c.then(function(l) {
      s(null, l);
    }, s), c;
    function u(l) {
      const d = n;
      var g = l[d(2144)];
      return g && !i[d(1535)](g) ? t[d(1522)](i, { $ref: g }, !0) : Promise[d(2457)]();
    }
    function f(l) {
      const d = n;
      try {
        return i[d(1026)](l);
      } catch (h) {
        if (h instanceof x) return g(h);
        throw h;
      }
      function g(h) {
        const m = d;
        var v = h.missingSchema;
        if (T(v)) throw new Error(m(2867) + v + m(2933) + h[m(2883)] + m(2868));
        var k = i._loadingSchemas[v];
        return !k && (k = i[m(2979)][v] = i._opts[m(2330)](v), k[m(2517)](P, P)), k[m(2517)](function(q) {
          if (!T(v)) return u(q).then(function() {
            const R = K;
            T(v) || i[R(1461)](q, v, void 0, e);
          });
        })[m(2517)](function() {
          return f(l);
        });
        function P() {
          const q = m;
          delete i[q(2979)][v];
        }
        function T(q) {
          const R = m;
          return i[R(497)][q] || i[R(2265)][q];
        }
      }
    }
  }
  return Ot;
}
var Dt, Gr;
function A2() {
  return Gr || (Gr = 1, Dt = function(x, t, r) {
    const e = K;
    var s = " ", n = x[e(1082)], i = x[e(1498)], c = x[e(1425)][t], u = x[e(1262)] + x[e(1975)][e(3039)](t), f = x[e(569)] + "/" + t, l = !x.opts[e(3009)], d, g = "data" + (i || ""), h = e(1122) + n, m = e(1870) + n, v = x.opts[e(568)] && c && c.$data, k;
    v ? (s += " var schema" + n + e(2486) + x.util[e(1186)](c[e(568)], i, x.dataPathArr) + "; ", k = e(1425) + n) : k = c;
    var P = this, T = e(1686) + n, q = P.definition, R = "", E, C, A, O, M;
    if (v && q.$data) {
      M = e(2325) + n;
      var _ = q[e(2605)];
      s += e(2675) + T + " = RULES.custom['" + t + e(600) + M + e(2486) + T + e(2566);
    } else {
      if (O = x[e(2908)](P, c, x[e(1425)], x), !O) return;
      k = e(1063) + u, M = O[e(2427)], E = q.compile, C = q[e(3228)], A = q.macro;
    }
    var N = M + e(1554), z = "i" + n, U = e(2205) + n, H = q[e(2416)];
    if (H && !x[e(2416)]) throw new Error(e(1329));
    if (!(C || A) && (s += "" + N + e(2913)), s += "var " + m + e(1156) + h + ";", v && q[e(568)] && (R += "}", s += e(1754) + k + " === undefined) { " + h + " = true; } else { ", _ && (R += "}", s += " " + h + " = " + T + ".validateSchema(" + k + e(2857) + h + e(2834))), C) q[e(2367)] ? s += " " + O[e(3181)] + " " : s += " " + h + " = " + O[e(3181)] + "; ";
    else if (A) {
      var G = x[e(1975)][e(2615)](x), R = "";
      G[e(1082)]++;
      var re = "valid" + G[e(1082)];
      G[e(1425)] = O.validate, G[e(1262)] = "";
      var se = x[e(2612)];
      x[e(2612)] = G[e(2612)] = !0;
      var fe = x[e(3181)](G)[e(1521)](/validate\.schema/g, M);
      x[e(2612)] = G.compositeRule = se, s += " " + fe;
    } else {
      var de = de || [];
      de[e(3062)](s), s = "", s += "  " + M + ".call( ", x[e(1544)][e(2698)] ? s += "this" : s += e(2007), E || q[e(1425)] === !1 ? s += e(3135) + g + " " : s += e(3135) + k + e(3135) + g + e(2390) + x.schemaPath + " ", s += e(2583), x[e(1935)] != '""' && (s += e(2693) + x[e(1935)]);
      var le = i ? e(2663) + (i - 1 || "") : "parentData", Se = i ? x[e(662)][i] : "parentDataProperty";
      s += e(3135) + le + " , " + Se + e(2783);
      var _e = s;
      s = de[e(2900)](), q.errors === !1 ? (s += " " + h + e(2486), H && (s += e(2630)), s += "" + _e + "; ") : H ? (N = e(604) + n, s += e(2675) + N + e(1752) + h + e(1588) + _e + e(663) + h + e(659) + N + " = e.errors; else throw e; } ") : s += " " + N + e(3278) + h + e(2486) + _e + "; ";
    }
    if (q.modifying && (s += " if (" + le + ") " + g + " = " + le + "[" + Se + "];"), s += "" + R, q[e(1122)]) l && (s += e(523));
    else {
      s += e(836), q[e(1122)] === void 0 ? (s += " !", A ? s += "" + re : s += "" + h) : s += " " + !q[e(1122)] + " ", s += e(2834), d = P[e(2442)];
      var de = de || [];
      de[e(3062)](s), s = "";
      var de = de || [];
      de[e(3062)](s), s = "", x[e(559)] !== !1 ? (s += " { keyword: '" + (d || e(1618)) + "' , dataPath: (dataPath || '') + " + x[e(1935)] + e(2278) + x[e(1975)][e(1767)](f) + e(2540) + P[e(2442)] + e(871), x[e(1544)][e(1696)] !== !1 && (s += e(3272) + P[e(2442)] + e(1266)), x.opts[e(2491)] && (s += e(1346) + u + " , parentSchema: validate.schema" + x[e(1262)] + e(1844) + g + " "), s += e(1411)) : s += e(3261);
      var Me = s;
      s = de.pop(), !x[e(2612)] && l ? x[e(2416)] ? s += e(1499) + Me + e(2300) : s += e(2213) + Me + "]; return false; " : s += e(2636) + Me + ";  if (vErrors === null) vErrors = [err]; else vErrors.push(err); errors++; ";
      var Fe = s;
      s = de[e(2900)](), C ? q[e(2800)] ? q[e(2800)] != e(2977) && (s += e(1883) + z + "=" + m + "; " + z + e(1989) + z + e(1921) + U + " = vErrors[" + z + e(2513) + U + e(1615) + U + e(1672) + x[e(1935)] + e(2318) + U + e(2046) + U + e(2298) + f + e(2554), x[e(1544)].verbose && (s += " " + U + e(1357) + k + "; " + U + e(2726) + g + "; "), s += e(1411)) : q.errors === !1 ? s += " " + Fe + " " : (s += e(1754) + m + e(794) + Fe + e(592) + z + "=" + m + "; " + z + e(1989) + z + e(1921) + U + e(1224) + z + e(2513) + U + e(1615) + U + e(1672) + x[e(1935)] + e(2318) + U + ".schemaPath === undefined) { " + U + e(2298) + f + e(2554), x[e(1544)][e(2491)] && (s += " " + U + ".schema = " + k + "; " + U + ".data = " + g + "; "), s += e(870)) : A ? (s += e(2222), x[e(559)] !== !1 ? (s += " { keyword: '" + (d || e(1618)) + e(2387) + x.errorPath + e(2278) + x.util.toQuotedString(f) + e(2540) + P.keyword + e(871), x[e(1544)][e(1696)] !== !1 && (s += e(3272) + P[e(2442)] + e(1266)), x[e(1544)][e(2491)] && (s += e(1346) + u + e(2408) + x[e(1262)] + " , data: " + g + " "), s += e(1411)) : s += " {} ", s += ";  if (vErrors === null) vErrors = [err]; else vErrors.push(err); errors++; ", !x[e(2612)] && l && (x.async ? s += e(903) : s += " validate.errors = vErrors; return false; ")) : q[e(2800)] === !1 ? s += " " + Fe + " " : (s += e(1472) + N + e(1300) + N + e(3260) + N + e(1741) + z + "=" + m + "; " + z + e(1989) + z + e(1921) + U + e(1224) + z + e(2513) + U + e(1615) + U + ".dataPath = (dataPath || '') + " + x[e(1935)] + e(2884) + U + e(2298) + f + e(2620), x[e(1544)].verbose && (s += " " + U + e(1357) + k + "; " + U + e(2726) + g + "; "), s += " } } else { " + Fe + e(1411)), s += e(1411), l && (s += e(1961));
    }
    return s;
  }), Dt;
}
const O2 = a(840), D2 = a(840), j2 = a(2461), M2 = { schemaArray: { type: a(529), minItems: 1, items: { $ref: "#" } }, nonNegativeInteger: { type: a(766), minimum: 0 }, nonNegativeIntegerDefault0: { allOf: [{ $ref: a(2574) }, { default: 0 }] }, simpleTypes: { enum: [a(529), a(3106), a(766), a(1959), a(2665), "object", a(1361)] }, stringArray: { type: "array", items: { type: a(1361) }, uniqueItems: !0, default: [] } }, L2 = [a(1304), a(3106)], $2 = { $id: { type: a(1361), format: a(518) }, $schema: { type: "string", format: "uri" }, $ref: { type: a(1361), format: "uri-reference" }, $comment: { type: "string" }, title: { type: "string" }, description: { type: "string" }, default: !0, readOnly: { type: "boolean", default: !1 }, examples: { type: a(529), items: !0 }, multipleOf: { type: "number", exclusiveMinimum: 0 }, maximum: { type: a(2665) }, exclusiveMaximum: { type: a(2665) }, minimum: { type: a(2665) }, exclusiveMinimum: { type: a(2665) }, maxLength: { $ref: a(2574) }, minLength: { $ref: a(891) }, pattern: { type: a(1361), format: "regex" }, additionalItems: { $ref: "#" }, items: { anyOf: [{ $ref: "#" }, { $ref: a(2567) }], default: !0 }, maxItems: { $ref: "#/definitions/nonNegativeInteger" }, minItems: { $ref: a(891) }, uniqueItems: { type: "boolean", default: !1 }, contains: { $ref: "#" }, maxProperties: { $ref: a(2574) }, minProperties: { $ref: "#/definitions/nonNegativeIntegerDefault0" }, required: { $ref: a(1201) }, additionalProperties: { $ref: "#" }, definitions: { type: a(1304), additionalProperties: { $ref: "#" }, default: {} }, properties: { type: a(1304), additionalProperties: { $ref: "#" }, default: {} }, patternProperties: { type: a(1304), additionalProperties: { $ref: "#" }, propertyNames: { format: a(2338) }, default: {} }, dependencies: { type: a(1304), additionalProperties: { anyOf: [{ $ref: "#" }, { $ref: a(1201) }] } }, propertyNames: { $ref: "#" }, const: !0, enum: { type: a(529), items: !0, minItems: 1, uniqueItems: !0 }, type: { anyOf: [{ $ref: a(3207) }, { type: "array", items: { $ref: a(3207) }, minItems: 1, uniqueItems: !0 }] }, format: { type: a(1361) }, contentMediaType: { type: a(1361) }, contentEncoding: { type: a(1361) }, if: { $ref: "#" }, then: { $ref: "#" }, else: { $ref: "#" }, allOf: { $ref: a(2567) }, anyOf: { $ref: "#/definitions/schemaArray" }, oneOf: { $ref: "#/definitions/schemaArray" }, not: { $ref: "#" } }, Sn = { $schema: O2, $id: D2, title: j2, definitions: M2, type: L2, properties: $2, default: !0 };
var jt, Jr;
function U2() {
  const o = a;
  if (Jr) return jt;
  Jr = 1;
  var x = Sn;
  return jt = { $id: o(2733), definitions: { simpleTypes: x[o(2451)].simpleTypes }, type: o(1304), dependencies: { schema: [o(3181)], $data: [o(3181)], statements: ["inline"], valid: { not: { required: [o(1159)] } } }, properties: { type: x[o(3005)][o(2076)], schema: { type: o(3106) }, statements: { type: o(3106) }, dependencies: { type: "array", items: { type: o(1361) } }, metaSchema: { type: o(1304) }, modifying: { type: o(3106) }, valid: { type: o(3106) }, $data: { type: o(3106) }, async: { type: o(3106) }, errors: { anyOf: [{ type: o(3106) }, { const: o(2977) }] } } }, jt;
}
var Mt, Qr;
function z2() {
  if (Qr) return Mt;
  Qr = 1;
  var o = /^[a-z_$][a-z0-9_$-]*$/i, x = A2(), t = U2();
  Mt = { add: r, get: e, remove: s, validate: n };
  function r(i, c) {
    const u = K;
    var f = this[u(2996)];
    if (f[u(1997)][i]) throw new Error("Keyword " + i + u(695));
    if (!o.test(i)) throw new Error(u(2905) + i + u(642));
    if (c) {
      this[u(958)](c, !0);
      var l = c[u(2076)];
      if (Array[u(3255)](l))
        for (var d = 0; d < l[u(2710)]; d++) h(i, l[d], c);
      else h(i, l, c);
      var g = c[u(1643)];
      g && (c[u(568)] && this[u(1068)].$data && (g = { anyOf: [g, { $ref: u(1253) }] }), c[u(2605)] = this[u(1835)](g, !0));
    }
    f[u(1997)][i] = f[u(1096)][i] = !0;
    function h(m, v, k) {
      const P = u;
      for (var T, q = 0; q < f.length; q++) {
        var R = f[q];
        if (R[P(2076)] == v) {
          T = R;
          break;
        }
      }
      !T && (T = { type: v, rules: [] }, f[P(3062)](T));
      var E = { keyword: m, definition: k, custom: !0, code: x, implements: k.implements };
      T[P(2293)][P(3062)](E), f[P(1618)][m] = E;
    }
    return this;
  }
  function e(i) {
    const c = K;
    var u = this.RULES[c(1618)][i];
    return u ? u.definition : this[c(2996)][c(1997)][i] || !1;
  }
  function s(i) {
    const c = K;
    var u = this[c(2996)];
    delete u[c(1997)][i], delete u[c(1096)][i], delete u[c(1618)][i];
    for (var f = 0; f < u[c(2710)]; f++)
      for (var l = u[f].rules, d = 0; d < l.length; d++)
        if (l[d].keyword == i) {
          l[c(2881)](d, 1);
          break;
        }
    return this;
  }
  function n(i, c) {
    const u = K;
    n[u(2800)] = null;
    var f = this[u(2639)] = this._validateKeyword || this[u(1835)](t, !0);
    if (f(i)) return !0;
    if (n.errors = f[u(2800)], c) throw new Error(u(1368) + this[u(2766)](f[u(2800)]));
    return !1;
  }
  return Mt;
}
const H2 = a(840), V2 = a(1253), B2 = "Meta-schema for $data reference (JSON Schema extension proposal)", W2 = a(1304), Z2 = [a(568)], K2 = { $data: { type: a(1361), anyOf: [{ format: "relative-json-pointer" }, { format: "json-pointer" }] } }, G2 = !1, J2 = { $schema: H2, $id: V2, description: B2, type: W2, required: Z2, properties: K2, additionalProperties: G2 };
var Lt, Xr;
function Q2() {
  const o = a;
  if (Xr) return Lt;
  Xr = 1;
  var x = i2(), t = da(), r = c2(), e = yn(), s = vn(), n = u2(), i = T2(), c = N2(), u = W0();
  Lt = m, m[o(2587)].validate = v, m.prototype.compile = k, m.prototype[o(1461)] = P, m[o(2587)][o(496)] = T, m[o(2587)][o(2605)] = q, m.prototype[o(1535)] = E, m.prototype[o(1738)] = O, m[o(2587)][o(1389)] = se, m[o(2587)].errorsText = re, m.prototype[o(2669)] = _, m.prototype[o(1026)] = N, m.prototype[o(1493)] = q2();
  var f = z2();
  m[o(2587)].addKeyword = f.add, m[o(2587)][o(763)] = f[o(674)], m.prototype.removeKeyword = f[o(2582)], m.prototype[o(958)] = f[o(3181)];
  var l = ha();
  m[o(1995)] = l[o(1434)], m[o(730)] = l[o(2003)], m[o(2589)] = c;
  var d = o(2375), g = [o(3137), o(2088), o(2597), o(2674)], h = [o(2792)];
  function m(D) {
    const F = o;
    if (!(this instanceof m)) return new m(D);
    D = this[F(1068)] = u[F(2615)](D) || {}, Fe(this), this[F(2265)] = {}, this._refs = {}, this[F(1399)] = {}, this[F(3036)] = n(D[F(802)]), this[F(811)] = D[F(3060)] || new r(), this[F(2979)] = {}, this[F(1837)] = [], this.RULES = i(), this[F(1776)] = z(D), D[F(3094)] = D[F(3094)] || 1 / 0, D[F(1805)] == F(648) && (D[F(3124)] = !0), D[F(3043)] === void 0 && (D[F(3043)] = s), this[F(937)] = Me(this), D[F(3155)] && le(this), D[F(1997)] && Se(this), fe(this), typeof D.meta == F(1304) && this[F(496)](D.meta), D[F(2644)] && this[F(2903)](F(2644), { metaSchema: { type: F(3106) } }), de(this);
  }
  function v(D, F) {
    const j = o;
    var J;
    if (typeof D == j(1361)) {
      if (J = this.getSchema(D), !J) throw new Error(j(2777) + D + '"');
    } else {
      var X = this[j(2669)](D);
      J = X[j(3181)] || this[j(1026)](X);
    }
    var V = J(F);
    return J.$async !== !0 && (this[j(2800)] = J.errors), V;
  }
  function k(D, F) {
    const j = o;
    var J = this[j(2669)](D, void 0, F);
    return J.validate || this[j(1026)](J);
  }
  function P(D, F, j, J) {
    const X = o;
    if (Array[X(3255)](D)) {
      for (var V = 0; V < D[X(2710)]; V++) this.addSchema(D[V], void 0, j, J);
      return this;
    }
    var Y = this[X(1776)](D);
    if (Y !== void 0 && typeof Y != "string") throw new Error(X(1366));
    return F = t[X(3133)](F || Y), _e(this, F), this._schemas[F] = this[X(2669)](D, j, J, !0), this;
  }
  function T(D, F, j) {
    return this[o(1461)](D, F, j, !0), this;
  }
  function q(D, F) {
    const j = o;
    var J = D[j(2144)];
    if (J !== void 0 && typeof J != j(1361)) throw new Error(j(1792));
    if (J = J || this[j(1068)][j(1188)] || R(this), !J) return this[j(2303)].warn(j(2432)), this[j(2800)] = null, !0;
    var X = this[j(3181)](J, D);
    if (!X && F) {
      var V = "schema is invalid: " + this.errorsText();
      if (this[j(1068)][j(2605)] == j(1635)) this[j(2303)][j(490)](V);
      else throw new Error(V);
    }
    return X;
  }
  function R(D) {
    const F = o;
    var j = D[F(1068)].meta;
    return D[F(1068)][F(1188)] = typeof j == F(1304) ? D._getId(j) || j : D[F(1535)](d) ? d : void 0, D[F(1068)][F(1188)];
  }
  function E(D) {
    const F = o;
    var j = A(this, D);
    switch (typeof j) {
      case F(1304):
        return j.validate || this[F(1026)](j);
      case F(1361):
        return this[F(1535)](j);
      case F(993):
        return C(this, D);
    }
  }
  function C(D, F) {
    const j = o;
    var J = t[j(1425)][j(1522)](D, { schema: {} }, F);
    if (J) {
      var X = J[j(1425)], V = J[j(2212)], Y = J.baseId, ce = x[j(1522)](D, X, V, void 0, Y);
      return D[j(1399)][F] = new e({ ref: F, fragment: !0, schema: X, root: V, baseId: Y, validate: ce }), ce;
    }
  }
  function A(D, F) {
    const j = o;
    return F = t[j(3133)](F), D[j(2265)][F] || D[j(497)][F] || D[j(1399)][F];
  }
  function O(D) {
    const F = o;
    if (D instanceof RegExp) return M(this, this._schemas, D), M(this, this[F(497)], D), this;
    switch (typeof D) {
      case "undefined":
        return M(this, this[F(2265)]), M(this, this[F(497)]), this[F(811)].clear(), this;
      case F(1361):
        var j = A(this, D);
        return j && this[F(811)][F(2150)](j[F(2656)]), delete this._schemas[D], delete this[F(497)][D], this;
      case F(1304):
        var J = this[F(1068)][F(3043)], X = J ? J(D) : D;
        this._cache[F(2150)](X);
        var V = this[F(1776)](D);
        V && (V = t[F(3133)](V), delete this[F(2265)][V], delete this[F(497)][V]);
    }
    return this;
  }
  function M(D, F, j) {
    const J = o;
    for (var X in F) {
      var V = F[X];
      !V[J(1166)] && (!j || j[J(2346)](X)) && (D._cache[J(2150)](V[J(2656)]), delete F[X]);
    }
  }
  function _(D, F, j, J) {
    const X = o;
    if (typeof D != "object" && typeof D != X(3106)) throw new Error("schema should be object or boolean");
    var V = this[X(1068)][X(3043)], Y = V ? V(D) : D, ce = this[X(811)][X(674)](Y);
    if (ce) return ce;
    J = J || this[X(1068)][X(2334)] !== !1;
    var oe = t[X(3133)](this[X(1776)](D));
    oe && J && _e(this, oe);
    var te = this[X(1068)].validateSchema !== !1 && !F, Le;
    te && !(Le = oe && oe == t[X(3133)](D[X(2144)])) && this[X(2605)](D, !0);
    var Ae = t[X(2707)][X(1522)](this, D), ze = new e({ id: oe, schema: D, localRefs: Ae, cacheKey: Y, meta: j });
    return oe[0] != "#" && J && (this[X(497)][oe] = ze), this[X(811)][X(1142)](Y, ze), te && Le && this.validateSchema(D, !0), ze;
  }
  function N(D, F) {
    const j = o;
    if (D[j(817)])
      return D.validate = V, V[j(1425)] = D[j(1425)], V[j(2800)] = null, V[j(2212)] = F || V, D[j(1425)][j(1101)] === !0 && (V[j(1101)] = !0), V;
    D[j(817)] = !0;
    var J;
    D[j(1166)] && (J = this[j(1068)], this[j(1068)] = this[j(937)]);
    var X;
    try {
      X = x.call(this, D[j(1425)], F, D[j(610)]);
    } catch (Y) {
      throw delete D.validate, Y;
    } finally {
      D[j(817)] = !1, D[j(1166)] && (this[j(1068)] = J);
    }
    return D[j(3181)] = X, D[j(588)] = X[j(588)], D[j(1269)] = X.refVal, D[j(2212)] = X.root, X;
    function V() {
      const Y = j;
      var ce = D[Y(3181)], oe = ce[Y(2692)](this, arguments);
      return V[Y(2800)] = ce.errors, oe;
    }
  }
  function z(D) {
    const F = o;
    switch (D[F(623)]) {
      case F(2627):
        return G;
      case "id":
        return U;
      default:
        return H;
    }
  }
  function U(D) {
    const F = o;
    return D[F(3154)] && this[F(2303)][F(1114)]("schema $id ignored", D[F(3154)]), D.id;
  }
  function H(D) {
    const F = o;
    return D.id && this[F(2303)][F(1114)](F(637), D.id), D.$id;
  }
  function G(D) {
    const F = o;
    if (D[F(3154)] && D.id && D[F(3154)] != D.id) throw new Error("schema $id is different from id");
    return D[F(3154)] || D.id;
  }
  function re(D, F) {
    const j = o;
    if (D = D || this[j(2800)], !D) return j(1705);
    F = F || {};
    for (var J = F[j(1680)] === void 0 ? ", " : F[j(1680)], X = F[j(3040)] === void 0 ? j(2663) : F[j(3040)], V = "", Y = 0; Y < D[j(2710)]; Y++) {
      var ce = D[Y];
      ce && (V += X + ce.dataPath + " " + ce[j(1044)] + J);
    }
    return V.slice(0, -J[j(2710)]);
  }
  function se(D, F) {
    return typeof F == o(1361) && (F = new RegExp(F)), this._formats[D] = F, this;
  }
  function fe(D) {
    const F = o;
    var j;
    if (D[F(1068)][F(568)] && (j = J2, D.addMetaSchema(j, j[F(3154)], !0)), D[F(1068)][F(1166)] !== !1) {
      var J = Sn;
      D._opts[F(568)] && (J = c(J, h)), D.addMetaSchema(J, d, !0), D[F(497)][F(2207)] = d;
    }
  }
  function de(D) {
    const F = o;
    var j = D._opts[F(2849)];
    if (j)
      if (Array[F(3255)](j)) D[F(1461)](j);
      else
        for (var J in j) D.addSchema(j[J], J);
  }
  function le(D) {
    const F = o;
    for (var j in D[F(1068)][F(3155)]) {
      var J = D[F(1068)][F(3155)][j];
      D[F(1389)](j, J);
    }
  }
  function Se(D) {
    const F = o;
    for (var j in D[F(1068)][F(1997)]) {
      var J = D[F(1068)][F(1997)][j];
      D.addKeyword(j, J);
    }
  }
  function _e(D, F) {
    const j = o;
    if (D[j(2265)][F] || D[j(497)][F]) throw new Error(j(1120) + F + j(1280));
  }
  function Me(D) {
    const F = o;
    for (var j = u[F(2615)](D[F(1068)]), J = 0; J < g[F(2710)]; J++) delete j[g[J]];
    return j;
  }
  function Fe(D) {
    const F = o;
    var j = D[F(1068)].logger;
    if (j === !1) D.logger = { log: Je, warn: Je, error: Je };
    else {
      if (j === void 0 && (j = console), !(typeof j == "object" && j[F(1635)] && j[F(1114)] && j[F(490)])) throw new Error(F(876));
      D.logger = j;
    }
  }
  function Je() {
  }
  return Lt;
}
var X2 = Q2();
const Y2 = Ws(X2);
class eu extends t2 {
  constructor(x, t) {
    const r = a;
    var e;
    super(t), this[r(651)] = x, this._capabilities = (e = t == null ? void 0 : t[r(2395)]) !== null && e !== void 0 ? e : {}, this[r(2176)] = t == null ? void 0 : t[r(2531)], this[r(1219)](nn, (s) => this[r(3134)](s)), this.setNotificationHandler(on, () => {
      const s = r;
      var n;
      return (n = this[s(741)]) === null || n === void 0 ? void 0 : n.call(this);
    });
  }
  [a(1545)](x) {
    const t = a;
    if (this[t(516)]) throw new Error(t(1048));
    this._capabilities = a2(this[t(2911)], x);
  }
  [a(557)](x) {
    const t = a;
    var r, e, s;
    switch (x) {
      case t(2180):
        if (!(!((r = this[t(1509)]) === null || r === void 0) && r[t(2398)])) throw new Error("Client does not support sampling (required for " + x + ")");
        break;
      case t(1206):
        if (!(!((e = this._clientCapabilities) === null || e === void 0) && e[t(2780)])) throw new Error(t(2106) + x + ")");
        break;
      case t(2089):
        if (!(!((s = this[t(1509)]) === null || s === void 0) && s[t(2013)])) throw new Error(t(3052) + x + ")");
        break;
    }
  }
  [a(2670)](x) {
    const t = a;
    switch (x) {
      case t(989):
        if (!this[t(2911)][t(1022)]) throw new Error(t(1295) + x + ")");
        break;
      case t(2014):
      case t(1629):
        if (!this[t(2911)].resources) throw new Error("Server does not support notifying about resources (required for " + x + ")");
        break;
      case "notifications/tools/list_changed":
        if (!this[t(2911)].tools) throw new Error("Server does not support notifying of tool list changes (required for " + x + ")");
        break;
      case t(2727):
        if (!this._capabilities.prompts) throw new Error(t(2935) + x + ")");
        break;
    }
  }
  [a(1465)](x) {
    const t = a;
    switch (x) {
      case t(2180):
        if (!this[t(2911)][t(2398)]) throw new Error(t(2079) + x + ")");
        break;
      case "logging/setLevel":
        if (!this[t(2911)][t(1022)]) throw new Error(t(1295) + x + ")");
        break;
      case t(1143):
      case "prompts/list":
        if (!this[t(2911)][t(2649)]) throw new Error("Server does not support prompts (required for " + x + ")");
        break;
      case t(2002):
      case t(2847):
      case "resources/read":
        if (!this[t(2911)][t(1673)]) throw new Error(t(1218) + x + ")");
        break;
      case "tools/call":
      case t(2744):
        if (!this[t(2911)][t(2365)]) throw new Error(t(3215) + x + ")");
        break;
    }
  }
  async [a(3134)](x) {
    const t = a, r = x[t(1656)][t(1861)];
    return this[t(1509)] = x[t(1656)][t(2395)], this[t(2464)] = x[t(1656)].clientInfo, { protocolVersion: ec[t(2978)](r) ? r : Xs, capabilities: this[t(1634)](), serverInfo: this._serverInfo, ...this[t(2176)] && { instructions: this[t(2176)] } };
  }
  getClientCapabilities() {
    return this._clientCapabilities;
  }
  getClientVersion() {
    return this[a(2464)];
  }
  [a(1634)]() {
    return this[a(2911)];
  }
  async [a(2509)]() {
    return this[a(494)]({ method: "ping" }, ta);
  }
  async createMessage(x, t) {
    const r = a;
    return this.request({ method: r(2180), params: x }, mn, t);
  }
  async [a(1164)](x, t) {
    const r = a, e = await this.request({ method: r(1206), params: x }, bn, t);
    if (e.action === r(995) && e[r(3170)]) try {
      const s = new Y2(), n = s[r(1835)](x[r(2920)]);
      if (!n(e[r(3170)])) throw new q0(v0.InvalidParams, "Elicitation response content does not match requested schema: " + s[r(2766)](n.errors));
    } catch (s) {
      throw s instanceof q0 ? s : new q0(v0[r(2898)], r(1497) + s);
    }
    return e;
  }
  async [a(808)](x, t) {
    const r = a;
    return this.request({ method: r(2089), params: x }, gn, t);
  }
  async [a(2751)](x) {
    const t = a;
    return this[t(2487)]({ method: t(989), params: x });
  }
  async [a(1270)](x) {
    const t = a;
    return this.notification({ method: t(2014), params: x });
  }
  async sendResourceListChanged() {
    const x = a;
    return this[x(2487)]({ method: x(1629) });
  }
  async [a(1277)]() {
    const x = a;
    return this.notification({ method: x(1600) });
  }
  async [a(2982)]() {
    const x = a;
    return this.notification({ method: x(2727) });
  }
}
class xu extends Error {
  constructor(x, t) {
    const r = a;
    super(r(1666) + x + r(1161) + t + "ms"), this.name = r(920);
  }
}
const mx = /* @__PURE__ */ new Map();
class tu {
  constructor(x) {
    const t = a;
    if (this[t(2729)] = [], this[t(1710)] = Date[t(3275)](), mx[t(2348)](x.posterIdentifier)) {
      const i = mx[t(674)](x.posterIdentifier);
      i && i[t(1489)]();
    }
    this[t(3279)] = x[t(3279)], this[t(1066)] = x.messagePoster, this[t(987)] = x.addMessageEventListener, this[t(2532)] = x[t(2532)];
    const r = x.heartbeatInterval ?? x[t(2595)], e = x[t(2595)] ?? x.heartbeatInterval, s = this[t(2056)](r), n = this.normalizeDuration(e);
    s && n && (this[t(1777)] = s, this[t(2595)] = n), this[t(2468)] = x[t(2468)] ?? !1, mx[t(780)](this[t(3279)], this), this[t(2393)] = this.listenMessageCallback[t(1386)](this), this[t(1036)] = this[t(987)](this.listenMessageCallback);
  }
  [a(2056)](x) {
    const t = a;
    if (typeof x == "number" && !(!Number[t(643)](x) || x <= 0))
      return x;
  }
  isHeartbeatEnabled() {
    const x = a;
    return typeof this[x(1777)] === x(2665) && typeof this[x(2595)] == "number";
  }
  [a(2393)](x) {
    const t = a;
    if (x.posterIdentifier === this[t(3279)]) {
      if (x[t(2967)] === t(508)) {
        x[t(2076)] === t(2509) && !this[t(2468)] ? this.messagePoster({ channel: t(508), posterIdentifier: this[t(3279)], type: "pong", timestamp: x[t(606)] }) : x[t(2076)] === t(1627) && (this[t(1710)] = Date[t(3275)](), this.heartbeatTimeoutTimer && (clearTimeout(this.heartbeatTimeoutTimer), this.heartbeatTimeoutTimer = void 0));
        return;
      }
      x.channel === t(2516) && (this[t(1803)] && "payload" in x ? this.onmessage(x[t(1962)]) : t(1962) in x && this[t(2729)][t(3062)](x[t(1962)]));
    }
  }
  async [a(1392)]() {
    const x = a;
    for (; this[x(2729)][x(2710)] > 0; ) {
      const t = this.messageQueue[x(1263)]();
      t && this[x(1803)] && this[x(1803)](t);
    }
    this[x(807)]() && this[x(2564)]();
  }
  startHeartbeat() {
    const x = a;
    if (!this[x(807)]()) return;
    const t = this[x(1777)], r = this[x(2595)];
    this[x(2545)](), this.heartbeatTimer = setInterval(() => {
      const e = x, s = Date.now();
      this[e(1066)]({ channel: "sdppp-heartbeat", posterIdentifier: this.posterIdentifier, type: e(2509), timestamp: s }), this[e(2280)] = setTimeout(() => {
        const n = e, i = new xu(this[n(3279)], r);
        this[n(934)] && this[n(934)](i);
      }, r);
    }, t);
  }
  [a(2545)]() {
    const x = a;
    this[x(2686)] && (clearInterval(this[x(2686)]), this.heartbeatTimer = void 0), this[x(2280)] && (clearTimeout(this[x(2280)]), this[x(2280)] = void 0);
  }
  async [a(1838)](x, t) {
    const r = a;
    this[r(1066)]({ channel: r(2516), posterIdentifier: this[r(3279)], payload: x });
  }
  async [a(1489)]() {
    const x = a;
    this.clearHeartbeatTimers(), mx[x(875)](this[x(3279)]), this[x(2532)](this[x(1036)]);
  }
}
const au = ix[a(919)](a(2415));
async function kn() {
  const o = a;
  if (!window[o(2458)]) return;
  const x = new tu({ posterIdentifier: "comfy-uxp", messagePoster: (e) => {
    const s = o;
    window[s(2458)][s(2794)](e, "*");
  }, addMessageEventListener: (e) => {
    const s = o, n = (i) => {
      e(i.data);
    };
    return window[s(731)](s(1044), n), n;
  }, removeMessageEventListener: (e) => {
    const s = o;
    window[s(2234)](s(1044), e);
  } });
  x[o(934)] = (e) => {
    au(o(2526), e);
  };
  const t = new eu({ name: "comfy-uxp", version: o(2319) }, {}), r = new _o(t);
  return await r[o(1645)](x), window.uxpHost[o(2794)]({ channel: o(942), meshName: o(886), action: o(1645), version: o(1319) }, "*"), await Ie[o(1645)]("uxp", r);
}
const ru = Object[a(1100)](Object[a(2796)]({ __proto__: null, connectUXP: kn, mcpMesh: Ie }, Symbol.toStringTag, { value: a(639) }));
function Pn(o) {
  const x = a, t = Te[x(2542)] || Te.extensionManager.workflow, r = t[x(3176)];
  if (o && o[x(788)] && o.detail.id !== r[x(3266)].id) return;
  const e = Ie[x(872)][x(1079)]().widgetableStructure, s = ea(Te.graph, r);
  En(s, e) && Ie[x(872)][x(738)]({ widgetableStructure: s }), Ie[x(872)][x(738)]({ widgetableValues: Nx(Te[x(1843)]) });
}
R0[a(731)](a(693), Pn), R0.addEventListener(a(544), () => {
  const o = a;
  Ie.store[o(738)]({ widgetableValues: Nx(Te[o(1843)]) });
});
let Yr = 0, es = !0, xs = "";
function In() {
  const o = a;
  requestAnimationFrame(In);
  const x = Te[o(2542)] || Te[o(1797)][o(538)], t = x[o(3176)], r = (t == null ? void 0 : t.id) || 0, e = (t == null ? void 0 : t[o(2474)]) || "", s = (t == null ? void 0 : t[o(1260)]) || !0;
  if (r === Yr && e === xs && s === es) return;
  const n = Date.now();
  Yr = r, xs = e, es = s;
  const i = ea(Te[o(1843)], t), c = Nx(Te[o(1843)]);
  Ie.store[o(738)]({ widgetableStructure: i, widgetableValues: c }), console[o(1635)](o(2586) + (Date.now() - n) + "ms"), setTimeout(() => {
    const u = o;
    if (t !== x[u(3176)]) return;
    const f = ea(Te[u(1843)], t), l = Nx(Te.graph);
    En(f, i) && Ie[u(872)][u(738)]({ widgetableStructure: f }), Ie[u(872)][u(738)]({ widgetableValues: l });
  }, 800);
}
requestAnimationFrame(In);
function En(o, x) {
  const t = a;
  return o[t(2522)].length !== x[t(2522)][t(2710)] || JSON.stringify(o[t(2522)]) !== JSON[t(1031)](x[t(2522)]) || JSON[t(1031)](o.nodes) !== JSON.stringify(x[t(669)]);
}
let ts = !1;
async function su() {
  const o = a;
  if (ts) return Promise[o(2457)]();
  R0[o(1747)] && Ie[o(872)][o(738)]({ comfyUserToken: R0[o(1747)] }), ts = !0;
}
ix[a(919)](a(1704));
async function nu(o, x, t) {
  const r = a;
  x.addEventListener(r(2560), ({ detail: n }) => {
    const i = r;
    if (!n) return;
    let c = 0, u = 0;
    !isNaN(n[i(2446)] / n.max) && (c = Math.round(n[i(2446)] / n[i(753)] * 100));
    const f = n[i(2480)], l = graph[i(669)][i(3146)]((d) => d.id == f);
    if (l && l[i(1744)]) {
      const d = 100 / graph[i(669)][i(2710)];
      u = Math.round(l[i(1744)] * d) + (c ? c / 100 * d : 0);
    }
    Ie[i(872)][i(738)]({ progress: c, graphProgress: u });
  }), x[r(731)](r(1227), (n) => {
    var c;
    const i = r;
    (c = n.detail) != null && c[i(725)] && Ie[i(872)][i(738)]({ queueSize: n.detail[i(725)][i(2201)] });
  }), x[r(731)](r(711), ({ detail: n }) => {
    const i = r;
    if (Ie[i(872)][i(738)]({ executingNodeTitle: "", executingNodeID: "", lastError: n.exception_message }), n[i(666)]) {
      const c = o.graph[i(669)][i(3146)]((u) => u.id == n.node_id);
      Ie[i(872)][i(738)]({ widgetableErrors: { [n[i(666)]]: "[" + ((c == null ? void 0 : c.title) || n[i(666)]) + "]" + n.exception_message } });
    }
  }), x[r(731)](r(593), (n) => {
    const i = r, c = n[i(788)], u = graph[i(669)].find((f) => f.id == c);
    if (u) {
      const f = 100 / graph[i(669)][i(2710)];
      Ie[i(872)].setState({ executingNodeTitle: u[i(2141)], executingNodeID: u.id, graphProgress: Math.round(u[i(1744)] * f) });
    }
  }), x[r(731)]("execution_interrupted", () => {
    const n = r;
    Ie.store[n(738)]({ progress: 0, executingNodeTitle: "", executingNodeID: "" });
  }), x[r(731)]("execution_start", ({ detail: n }) => {
    const i = r;
    Ie[i(872)].setState({ lastError: "", widgetableErrors: {}, progress: 0, executingNodeTitle: "", executingNodeID: "", lastRunTime: Date[i(3275)]() });
  });
  const e = /* @__PURE__ */ new Map();
  x[r(731)]("execution_success", (n) => {
    const i = r;
    Ie[i(872)][i(738)]({ progress: 0, executingNodeTitle: "", executingNodeID: "" });
    const c = (e[i(674)](n[i(788)].prompt_id) || [])[i(1930)]((u) => ({ url: u, thumbnail: u }));
    Hi(n[i(788)][i(931)], c), e[i(875)](n[i(788)].prompt_id);
  }), x.addEventListener(r(544), (n) => {
    const i = r, c = e.get(n[i(788)][i(931)]) || [];
    n.detail[i(1121)] && Array.isArray(n[i(788)].output[i(3222)]) && n[i(788)][i(1121)].images[i(2710)] > 0 && c[i(3062)](...n[i(788)][i(1121)][i(3222)].filter((u) => u[i(2076)] == i(1121)).map((u) => {
      const f = i;
      return location[f(1230)] + location[f(2167)] + f(1552) + u[f(2076)] + "&filename=" + encodeURIComponent(u[f(1165)]) + (u[f(1563)] ? "&subfolder=" + encodeURIComponent(u[f(1563)]) : "");
    })), n[i(788)][i(1121)] && Array.isArray(n[i(788)].output[i(1574)]) && n[i(788)].output[i(1574)][i(2710)] > 0 && c[i(3062)](...n[i(788)][i(1121)][i(1574)].map((u) => {
      const f = i;
      return location[f(1230)] + location.pathname + f(491) + encodeURIComponent(u);
    })), e.set(n[i(788)][i(931)], c);
  });
  let s = null;
  x[r(731)]("reconnecting", (n) => {
    s = setTimeout(() => {
      const i = K;
      Ie.store[i(738)]({ comfyWSState: i(1097) });
    }, 1e3);
  }), x[r(731)]("reconnected", (n) => {
    const i = r;
    Ie[i(872)][i(738)]({ comfyWSState: i(1880) }), clearTimeout(s);
  });
}
let $t = [];
(async function() {
  var x, t, r, e, s, n;
  const o = a;
  if (typeof gradioApp == o(993)) {
    try {
      const i = (t = (x = window[o(1608)]) == null ? void 0 : x.app) == null ? void 0 : t[o(2012)], c = (e = (r = window[o(1608)]) == null ? void 0 : r.ui) == null ? void 0 : e[o(2787)], u = (n = (s = window[o(1608)]) == null ? void 0 : s[o(706)]) == null ? void 0 : n.api;
      if (!i || !u || !c) throw new Error("comfyAPI is not initialized, maybe comfyUI is too old");
      await su(), await kn(), await nu(i, u, c), import(o(1821))[o(2517)]((f) => {
        f[o(2485)](tx, 2);
      });
    } catch (i) {
      $t[o(3062)](i[o(2101)] || i[o(1044)] || i);
    }
    await new Promise((i) => setTimeout(i, 2e3)), $t[o(2710)] && console[o(490)]($t[0]);
  }
})();
