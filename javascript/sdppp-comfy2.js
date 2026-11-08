var An = Object.defineProperty;
var On = (o, x, t) => x in o ? An(o, x, { enumerable: !0, configurable: !0, writable: !0, value: t }) : o[x] = t;
var me = (o, x, t) => On(o, typeof x != "symbol" ? x + "" : x, t);
const r = K;
(function(o, x) {
  const t = K, a = o();
  for (; ; )
    try {
      if (-parseInt(t(2008)) / 1 * (-parseInt(t(2083)) / 2) + -parseInt(t(636)) / 3 + parseInt(t(2016)) / 4 * (-parseInt(t(2295)) / 5) + -parseInt(t(693)) / 6 * (-parseInt(t(2640)) / 7) + parseInt(t(1373)) / 8 * (parseInt(t(1198)) / 9) + -parseInt(t(656)) / 10 + parseInt(t(1285)) / 11 * (parseInt(t(1170)) / 12) === x) break;
      a.push(a.shift());
    } catch {
      a.push(a.shift());
    }
})(Nx, 638903);
const Fe = window.comfyAPI[r(1661)][r(1661)];
window[r(909)].ui.$el;
const C0 = window.comfyAPI[r(834)].api;
class Dn {
  constructor(x) {
    me(this, "definition");
    const t = r;
    this.definition = x;
    const a = this.validate();
    if (!a.valid) throw new Error(t(2768) + a[t(2887)][t(2130)](", "));
  }
  validate() {
    const x = r, t = [];
    (!this.definition[x(178)] || Object[x(460)](this[x(1139)][x(178)]).length === 0) && t[x(1449)](x(2570));
    for (const [e, s] of this[x(1139)][x(1457)])
      !this.definition[x(178)][e] && t[x(1449)](x(1863) + e), !this.definition[x(178)][s] && t.push(x(560) + s);
    const a = this[x(365)]();
    return !a.valid && t.push(...a.errors), { valid: t[x(2236)] === 0, errors: t };
  }
  [r(900)]() {
    const x = r, t = /* @__PURE__ */ new Map();
    for (const a of Object[x(460)](this[x(1139)][x(178)]))
      t.set(a, []);
    for (const [a, e] of this[x(1139)][x(1457)]) {
      const s = t[x(2157)](a) || [];
      s[x(1449)](e), t.set(a, s);
    }
    return t;
  }
  [r(365)]() {
    const x = r, t = [], a = /* @__PURE__ */ new Set(), e = /* @__PURE__ */ new Set(), s = this[x(900)](), n = (i, c) => {
      const u = x;
      if (e[u(2302)](i)) {
        const l = c[u(1686)](i), f = c[u(771)](l)[u(1331)](i);
        return t.push(u(2531) + f.join(u(526))), !0;
      }
      if (a[u(2302)](i)) return !1;
      a[u(2140)](i), e[u(2140)](i);
      const d = s[u(2157)](i) || [];
      for (const l of d)
        if (n(l, [...c, i])) return !0;
      return e.delete(i), !1;
    };
    for (const i of Object.keys(this.definition[x(178)]))
      !a[x(2302)](i) && n(i, []);
    return { valid: t.length === 0, errors: t };
  }
  [r(2791)]() {
    const x = r, t = /* @__PURE__ */ new Map();
    for (const a of Object[x(460)](this[x(1139)][x(178)]))
      t[x(2104)](a, []);
    for (const [a, e] of this[x(1139)][x(1457)]) {
      const s = t[x(2157)](a) || [];
      s[x(1449)](e), t[x(2104)](a, s);
      const n = t[x(2157)](e) || [];
      n[x(1449)](a), t[x(2104)](e, n);
    }
    return t;
  }
  [r(2026)](x) {
    return this.buildAdjacencyList().get(x) || [];
  }
  getNode(x) {
    return this[r(1139)].nodes[x];
  }
  [r(2656)]() {
    const x = r;
    return Object[x(460)](this[x(1139)].nodes);
  }
  hasEdge(x, t) {
    const a = r;
    return this.definition[a(1457)][a(1031)](([e, s]) => e === x && s === t || e === t && s === x);
  }
  [r(2260)](x, t) {
    const a = r;
    if (x === t) return [x];
    const e = this[a(2791)](), s = [{ nodeId: x, path: [x] }], n = /* @__PURE__ */ new Set();
    for (; s.length > 0; ) {
      const { nodeId: i, path: c } = s[a(2447)]();
      if (n[a(2302)](i)) continue;
      if (n[a(2140)](i), i === t) return c;
      const u = e[a(2157)](i) || [];
      for (const d of u)
        !n[a(2302)](d) && s[a(1449)]({ nodeId: d, path: [...c, d] });
    }
    return null;
  }
  [r(2099)](x, t) {
    return this[r(2260)](x, t) !== null;
  }
  [r(672)]() {
    return { ...this[r(1139)] };
  }
}
const Rr = (o) => {
  let x;
  const t = /* @__PURE__ */ new Set(), a = (u, d) => {
    const l = K, f = typeof u === l(2279) ? u(x) : u;
    if (!Object.is(f, x)) {
      const g = x;
      x = d ?? (typeof f !== l(1606) || f === null) ? f : Object.assign({}, x, f), t.forEach((h) => h(x, g));
    }
  }, e = () => x, s = () => c, n = (u) => (t.add(u), () => t.delete(u)), i = { setState: a, getState: e, getInitialState: s, subscribe: n }, c = x = o(a, e, i);
  return i;
}, jn = (o) => o ? Rr(o) : Rr;
var Ne;
(function(o) {
  const x = r;
  o[x(2914)] = (s) => {
  };
  function t(s) {
  }
  o.assertIs = t;
  function a(s) {
    throw new Error();
  }
  o[x(513)] = a, o[x(1634)] = (s) => {
    const n = {};
    for (const i of s)
      n[i] = i;
    return n;
  }, o[x(237)] = (s) => {
    const n = x, i = o[n(1417)](s).filter((u) => typeof s[s[u]] !== n(1142)), c = {};
    for (const u of i)
      c[u] = s[u];
    return o[n(2262)](c);
  }, o[x(2262)] = (s) => {
    const n = x;
    return o.objectKeys(s)[n(1622)](function(i) {
      return s[i];
    });
  }, o.objectKeys = typeof Object[x(460)] === x(2279) ? (s) => Object[x(460)](s) : (s) => {
    const n = x, i = [];
    for (const c in s)
      Object.prototype[n(1250)][n(1666)](s, c) && i[n(1449)](c);
    return i;
  }, o[x(1359)] = (s, n) => {
    for (const i of s)
      if (n(i)) return i;
  }, o[x(986)] = typeof Number[x(986)] === x(2279) ? (s) => Number[x(986)](s) : (s) => typeof s === x(1142) && Number[x(2524)](s) && Math[x(1578)](s) === s;
  function e(s, n = x(1231)) {
    const i = x;
    return s[i(1622)]((c) => typeof c === i(1736) ? "'" + c + "'" : c).join(n);
  }
  o[x(1685)] = e, o.jsonStringifyReplacer = (s, n) => typeof n === x(562) ? n.toString() : n;
})(Ne || (Ne = {}));
var _r;
(function(o) {
  const x = r;
  o[x(738)] = (t, a) => ({ ...t, ...a });
})(_r || (_r = {}));
const re = Ne.arrayToEnum([r(1736), "nan", r(1142), r(1649), r(1068), r(2727), r(1846), r(562), "symbol", r(2279), r(233), r(2450), r(2762), "object", "unknown", r(1424), r(2029), r(874), r(1622), r(2104)]), E0 = (o) => {
  const x = r;
  switch (typeof o) {
    case "undefined":
      return re.undefined;
    case "string":
      return re[x(1736)];
    case x(1142):
      return Number.isNaN(o) ? re[x(2663)] : re.number;
    case x(2727):
      return re[x(2727)];
    case x(2279):
      return re[x(2279)];
    case x(562):
      return re[x(562)];
    case x(855):
      return re[x(855)];
    case x(1606):
      return Array[x(2224)](o) ? re[x(2762)] : o === null ? re[x(2450)] : o[x(667)] && typeof o[x(667)] == "function" && o.catch && typeof o[x(1095)] === x(2279) ? re[x(1424)] : typeof Map !== x(233) && o instanceof Map ? re[x(1622)] : typeof Set !== x(233) && o instanceof Set ? re[x(2104)] : typeof Date !== x(233) && o instanceof Date ? re[x(1846)] : re[x(1606)];
    default:
      return re.unknown;
  }
}, W = Ne[r(1634)]([r(465), r(1743), r(2662), "invalid_union", r(2032), r(806), r(2783), "invalid_arguments", r(1981), r(1597), r(1792), r(2449), r(2204), r(2414), "not_multiple_of", r(582)]);
class P0 extends Error {
  get [r(2887)]() {
    return this[r(2145)];
  }
  constructor(x) {
    const t = r;
    super(), this[t(2145)] = [], this[t(862)] = (e) => {
      const s = t;
      this.issues = [...this[s(2145)], e];
    }, this[t(499)] = (e = []) => {
      const s = t;
      this[s(2145)] = [...this.issues, ...e];
    };
    const a = new.target.prototype;
    Object.setPrototypeOf ? Object.setPrototypeOf(this, a) : this[t(1934)] = a, this[t(492)] = "ZodError", this[t(2145)] = x;
  }
  [r(1763)](x) {
    const t = x || function(s) {
      return s.message;
    }, a = { _errors: [] }, e = (s) => {
      const n = K;
      for (const i of s[n(2145)])
        if (i[n(2152)] === n(1672)) i[n(2592)][n(1622)](e);
        else if (i.code === "invalid_return_type") e(i[n(2631)]);
        else if (i[n(2152)] === "invalid_arguments") e(i[n(2410)]);
        else if (i[n(632)][n(2236)] === 0) a[n(683)].push(t(i));
        else {
          let c = a, u = 0;
          for (; u < i[n(632)][n(2236)]; ) {
            const d = i[n(632)][u];
            u === i[n(632)][n(2236)] - 1 ? (c[d] = c[d] || { _errors: [] }, c[d][n(683)][n(1449)](t(i))) : c[d] = c[d] || { _errors: [] }, c = c[d], u++;
          }
        }
    };
    return e(this), a;
  }
  static assert(x) {
    const t = r;
    if (!(x instanceof P0)) throw new Error(t(272) + x);
  }
  toString() {
    return this[r(1354)];
  }
  get [r(1354)]() {
    const x = r;
    return JSON[x(1410)](this[x(2145)], Ne[x(1874)], 2);
  }
  get [r(2661)]() {
    return this[r(2145)].length === 0;
  }
  [r(1817)](x = (t) => t[r(1354)]) {
    const t = r, a = {}, e = [];
    for (const s of this[t(2145)])
      if (s[t(632)][t(2236)] > 0) {
        const n = s[t(632)][0];
        a[n] = a[n] || [], a[n].push(x(s));
      } else e[t(1449)](x(s));
    return { formErrors: e, fieldErrors: a };
  }
  get formErrors() {
    return this[r(1817)]();
  }
}
P0[r(186)] = (o) => new P0(o);
const Ut = (o, x) => {
  const t = r;
  let a;
  switch (o[t(2152)]) {
    case W[t(465)]:
      o[t(412)] === re[t(233)] ? a = t(219) : a = t(2437) + o[t(1324)] + t(2371) + o[t(412)];
      break;
    case W[t(1743)]:
      a = t(2391) + JSON[t(1410)](o.expected, Ne[t(1874)]);
      break;
    case W[t(2783)]:
      a = t(376) + Ne.joinValues(o[t(460)], ", ");
      break;
    case W[t(1672)]:
      a = t(1963);
      break;
    case W[t(2032)]:
      a = t(2330) + Ne[t(1685)](o[t(278)]);
      break;
    case W[t(806)]:
      a = t(2370) + Ne[t(1685)](o[t(278)]) + t(1155) + o[t(412)] + "'";
      break;
    case W[t(2461)]:
      a = t(2913);
      break;
    case W.invalid_return_type:
      a = t(1682);
      break;
    case W[t(1597)]:
      a = "Invalid date";
      break;
    case W[t(1792)]:
      typeof o.validation === t(1606) ? t(408) in o[t(2650)] ? (a = t(937) + o[t(2650)][t(408)] + '"', typeof o[t(2650)][t(1219)] === t(1142) && (a = a + " at one or more positions greater than or equal to " + o[t(2650)].position)) : t(2821) in o[t(2650)] ? a = 'Invalid input: must start with "' + o[t(2650)][t(2821)] + '"' : t(1542) in o[t(2650)] ? a = t(2875) + o[t(2650)].endsWith + '"' : Ne.assertNever(o[t(2650)]) : o[t(2650)] !== t(1560) ? a = t(196) + o[t(2650)] : a = t(2216);
      break;
    case W[t(2449)]:
      o[t(2390)] === t(2762) ? a = t(960) + (o[t(1291)] ? "exactly" : o[t(1184)] ? t(666) : "more than") + " " + o[t(1744)] + " element(s)" : o[t(2390)] === t(1736) ? a = "String must contain " + (o.exact ? t(1480) : o[t(1184)] ? "at least" : t(184)) + " " + o[t(1744)] + t(944) : o[t(2390)] === t(1142) ? a = t(1210) + (o[t(1291)] ? t(1488) : o[t(1184)] ? "greater than or equal to " : "greater than ") + o[t(1744)] : o.type === "bigint" ? a = "Number must be " + (o[t(1291)] ? t(1488) : o.inclusive ? t(580) : t(1919)) + o[t(1744)] : o[t(2390)] === t(1846) ? a = t(521) + (o.exact ? t(1488) : o[t(1184)] ? "greater than or equal to " : t(1919)) + new Date(Number(o[t(1744)])) : a = t(1963);
      break;
    case W[t(2204)]:
      o[t(2390)] === t(2762) ? a = t(960) + (o.exact ? t(1480) : o[t(1184)] ? t(2864) : "less than") + " " + o[t(1647)] + " element(s)" : o[t(2390)] === t(1736) ? a = t(952) + (o[t(1291)] ? t(1480) : o[t(1184)] ? t(2864) : t(212)) + " " + o[t(1647)] + t(944) : o.type === "number" ? a = t(1210) + (o[t(1291)] ? t(1480) : o.inclusive ? "less than or equal to" : t(404)) + " " + o.maximum : o[t(2390)] === t(562) ? a = t(2314) + (o[t(1291)] ? "exactly" : o[t(1184)] ? t(1272) : t(404)) + " " + o[t(1647)] : o[t(2390)] === "date" ? a = t(521) + (o[t(1291)] ? t(1480) : o.inclusive ? "smaller than or equal to" : "smaller than") + " " + new Date(Number(o.maximum)) : a = t(1963);
      break;
    case W[t(2662)]:
      a = t(1963);
      break;
    case W.invalid_intersection_types:
      a = "Intersection results could not be merged";
      break;
    case W[t(1875)]:
      a = "Number must be a multiple of " + o[t(948)];
      break;
    case W[t(582)]:
      a = t(2805);
      break;
    default:
      a = x.defaultError, Ne[t(513)](o);
  }
  return { message: a };
};
let Mn = Ut;
function Ln() {
  return Mn;
}
const $n = (o) => {
  const x = r, { data: t, path: a, errorMaps: e, issueData: s } = o, n = [...a, ...s[x(632)] || []], i = { ...s, path: n };
  if (s[x(1354)] !== void 0) return { ...s, path: n, message: s[x(1354)] };
  let c = "";
  const u = e[x(1665)]((d) => !!d)[x(771)]()[x(2184)]();
  for (const d of u)
    c = d(i, { data: t, defaultError: c })[x(1354)];
  return { ...s, path: n, message: c };
};
function ee(o, x) {
  const t = r, a = Ln(), e = $n({ issueData: x, data: o[t(2516)], path: o.path, errorMaps: [o[t(1929)][t(1499)], o[t(755)], a, a === Ut ? void 0 : Ut][t(1665)]((s) => !!s) });
  o[t(1929)][t(2145)].push(e);
}
class e0 {
  constructor() {
    const x = r;
    this.value = x(996);
  }
  dirty() {
    const x = r;
    this.value === "valid" && (this[x(194)] = x(2600));
  }
  abort() {
    const x = r;
    this[x(194)] !== "aborted" && (this[x(194)] = x(2294));
  }
  static mergeArray(x, t) {
    const a = r, e = [];
    for (const s of t) {
      if (s.status === a(2294)) return fe;
      s[a(1474)] === a(2600) && x[a(2600)](), e[a(1449)](s[a(194)]);
    }
    return { status: x.value, value: e };
  }
  static async [r(1058)](x, t) {
    const a = r, e = [];
    for (const s of t) {
      const n = await s[a(1411)], i = await s[a(194)];
      e[a(1449)]({ key: n, value: i });
    }
    return e0[a(1684)](x, e);
  }
  static mergeObjectSync(x, t) {
    const a = r, e = {};
    for (const s of t) {
      const { key: n, value: i } = s;
      if (n[a(1474)] === a(2294) || i[a(1474)] === a(2294)) return fe;
      n[a(1474)] === "dirty" && x[a(2600)](), i.status === a(2600) && x.dirty(), n[a(194)] !== "__proto__" && (typeof i[a(194)] < "u" || s[a(2462)]) && (e[n.value] = i[a(194)]);
    }
    return { status: x[a(194)], value: e };
  }
}
const fe = Object[r(889)]({ status: r(2294) }), X0 = (o) => ({ status: r(2600), value: o }), r0 = (o) => ({ status: "valid", value: o }), Fr = (o) => o[r(1474)] === r(2294), Nr = (o) => o[r(1474)] === r(2600), V0 = (o) => o[r(1474)] === r(996), gx = (o) => typeof Promise < "u" && o instanceof Promise;
var ae;
(function(o) {
  const x = r;
  o[x(2430)] = (t) => typeof t == "string" ? { message: t } : t || {}, o[x(1525)] = (t) => typeof t === x(1736) ? t : t == null ? void 0 : t.message;
})(ae || (ae = {}));
class p0 {
  constructor(x, t, a, e) {
    const s = r;
    this[s(2651)] = [], this.parent = x, this[s(2516)] = t, this[s(276)] = a, this._key = e;
  }
  get [r(632)]() {
    const x = r;
    return !this[x(2651)].length && (Array[x(2224)](this[x(337)]) ? this[x(2651)].push(...this[x(276)], ...this._key) : this._cachedPath[x(1449)](...this[x(276)], this._key)), this._cachedPath;
  }
}
const Tr = (o, x) => {
  const t = r;
  if (V0(x)) return { success: !0, data: x.value };
  if (!o[t(1929)][t(2145)][t(2236)]) throw new Error(t(370));
  return { success: !1, get error() {
    const a = t;
    if (this[a(1796)]) return this[a(1796)];
    const e = new P0(o[a(1929)][a(2145)]);
    return this[a(1796)] = e, this[a(1796)];
  } };
};
function we(o) {
  const x = r;
  if (!o) return {};
  const { errorMap: t, invalid_type_error: a, required_error: e, description: s } = o;
  if (t && (a || e)) throw new Error(x(640));
  return t ? { errorMap: t, description: s } : { errorMap: (i, c) => {
    const u = x, { message: d } = o;
    return i.code === "invalid_enum_value" ? { message: d ?? c.defaultError } : typeof c[u(2516)] === u(233) ? { message: d ?? e ?? c.defaultError } : i[u(2152)] !== u(465) ? { message: c.defaultError } : { message: d ?? a ?? c[u(216)] };
  }, description: s };
}
class _e {
  get [r(2578)]() {
    const x = r;
    return this[x(2289)][x(2578)];
  }
  [r(2331)](x) {
    return E0(x[r(2516)]);
  }
  [r(1375)](x, t) {
    const a = r;
    return t || { common: x.parent[a(1929)], data: x[a(2516)], parsedType: E0(x.data), schemaErrorMap: this._def[a(770)], path: x[a(632)], parent: x[a(1771)] };
  }
  [r(2859)](x) {
    const t = r;
    return { status: new e0(), ctx: { common: x[t(1771)].common, data: x[t(2516)], parsedType: E0(x[t(2516)]), schemaErrorMap: this[t(2289)].errorMap, path: x.path, parent: x.parent } };
  }
  [r(984)](x) {
    const t = r, a = this._parse(x);
    if (gx(a)) throw new Error(t(1983));
    return a;
  }
  _parseAsync(x) {
    const t = r, a = this[t(979)](x);
    return Promise.resolve(a);
  }
  [r(330)](x, t) {
    const a = r, e = this[a(1487)](x, t);
    if (e[a(614)]) return e[a(2516)];
    throw e[a(2484)];
  }
  [r(1487)](x, t) {
    const a = r, e = { common: { issues: [], async: (t == null ? void 0 : t.async) ?? !1, contextualErrorMap: t == null ? void 0 : t.errorMap }, path: (t == null ? void 0 : t[a(632)]) || [], schemaErrorMap: this._def.errorMap, parent: null, data: x, parsedType: E0(x) }, s = this[a(984)]({ data: x, path: e[a(632)], parent: e });
    return Tr(e, s);
  }
  "~validate"(x) {
    var e, s;
    const t = r, a = { common: { issues: [], async: !!this["~standard"].async }, path: [], schemaErrorMap: this[t(2289)][t(770)], parent: null, data: x, parsedType: E0(x) };
    if (!this[t(2481)][t(1180)]) try {
      const n = this[t(984)]({ data: x, path: [], parent: a });
      return V0(n) ? { value: n[t(194)] } : { issues: a[t(1929)].issues };
    } catch (n) {
      (s = (e = n == null ? void 0 : n.message) == null ? void 0 : e[t(2182)]()) != null && s[t(408)](t(344)) && (this[t(2481)][t(1180)] = !0), a[t(1929)] = { issues: [], async: !0 };
    }
    return this[t(1700)]({ data: x, path: [], parent: a })[t(667)]((n) => V0(n) ? { value: n[t(194)] } : { issues: a[t(1929)][t(2145)] });
  }
  async [r(1397)](x, t) {
    const a = r, e = await this[a(2636)](x, t);
    if (e[a(614)]) return e[a(2516)];
    throw e[a(2484)];
  }
  async [r(2636)](x, t) {
    const a = r, e = { common: { issues: [], contextualErrorMap: t == null ? void 0 : t[a(770)], async: !0 }, path: (t == null ? void 0 : t.path) || [], schemaErrorMap: this._def[a(770)], parent: null, data: x, parsedType: E0(x) }, s = this[a(979)]({ data: x, path: e.path, parent: e }), n = await (gx(s) ? s : Promise[a(753)](s));
    return Tr(e, n);
  }
  [r(772)](x, t) {
    const a = r, e = (s) => typeof t == "string" || typeof t === K(233) ? { message: t } : typeof t == "function" ? t(s) : t;
    return this[a(1088)]((s, n) => {
      const i = a, c = x(s), u = () => n[i(862)]({ code: W[i(2662)], ...e(s) });
      return typeof Promise !== i(233) && c instanceof Promise ? c[i(667)]((d) => d ? !0 : (u(), !1)) : c ? !0 : (u(), !1);
    });
  }
  refinement(x, t) {
    const a = r;
    return this[a(1088)]((e, s) => {
      const n = a;
      return x(e) ? !0 : (s.addIssue(typeof t === n(2279) ? t(e, s) : t), !1);
    });
  }
  _refinement(x) {
    const t = r;
    return new q0({ schema: this, typeName: he[t(992)], effect: { type: t(2594), refinement: x } });
  }
  [r(508)](x) {
    return this[r(1088)](x);
  }
  constructor(x) {
    const t = r;
    this[t(1825)] = this[t(2636)], this[t(2289)] = x, this[t(330)] = this[t(330)][t(584)](this), this[t(1487)] = this[t(1487)][t(584)](this), this[t(1397)] = this.parseAsync[t(584)](this), this[t(2636)] = this[t(2636)].bind(this), this[t(1825)] = this[t(1825)][t(584)](this), this[t(772)] = this[t(772)][t(584)](this), this.refinement = this[t(2594)][t(584)](this), this[t(508)] = this.superRefine.bind(this), this[t(613)] = this[t(613)].bind(this), this[t(260)] = this[t(260)][t(584)](this), this[t(2652)] = this.nullish[t(584)](this), this.array = this[t(2762)].bind(this), this.promise = this[t(1424)][t(584)](this), this.or = this.or[t(584)](this), this[t(462)] = this[t(462)][t(584)](this), this[t(847)] = this[t(847)][t(584)](this), this[t(157)] = this[t(157)][t(584)](this), this[t(1770)] = this[t(1770)][t(584)](this), this.catch = this.catch.bind(this), this.describe = this[t(2689)][t(584)](this), this.pipe = this[t(1564)][t(584)](this), this.readonly = this[t(2192)][t(584)](this), this[t(1224)] = this[t(1224)][t(584)](this), this[t(299)] = this.isOptional[t(584)](this), this["~standard"] = { version: 1, vendor: t(2850), validate: (a) => this[t(1020)](a) };
  }
  [r(613)]() {
    const x = r;
    return S0[x(186)](this, this[x(2289)]);
  }
  [r(260)]() {
    const x = r;
    return j0[x(186)](this, this[x(2289)]);
  }
  [r(2652)]() {
    const x = r;
    return this[x(260)]()[x(613)]();
  }
  [r(2762)]() {
    return h0[r(186)](this);
  }
  [r(1424)]() {
    const x = r;
    return Px[x(186)](this, this[x(2289)]);
  }
  or(x) {
    const t = r;
    return vx[t(186)]([this, x], this[t(2289)]);
  }
  [r(462)](x) {
    const t = r;
    return wx.create(this, x, this[t(2289)]);
  }
  [r(847)](x) {
    const t = r;
    return new q0({ ...we(this[t(2289)]), schema: this, typeName: he.ZodEffects, effect: { type: t(847), transform: x } });
  }
  [r(1770)](x) {
    const t = r, a = typeof x === t(2279) ? x : () => x;
    return new Ix({ ...we(this[t(2289)]), innerType: this, defaultValue: a, typeName: he[t(1327)] });
  }
  [r(157)]() {
    const x = r;
    return new Ms({ typeName: he[x(2905)], type: this, ...we(this._def) });
  }
  [r(1095)](x) {
    const t = r, a = typeof x == "function" ? x : () => x;
    return new Ex({ ...we(this[t(2289)]), innerType: this, catchValue: a, typeName: he[t(723)] });
  }
  [r(2689)](x) {
    const t = r, a = this[t(1939)];
    return new a({ ...this[t(2289)], description: x });
  }
  [r(1564)](x) {
    return or[r(186)](this, x);
  }
  [r(2192)]() {
    return Cx.create(this);
  }
  [r(299)]() {
    const x = r;
    return this[x(1487)](void 0)[x(614)];
  }
  [r(1224)]() {
    const x = r;
    return this[x(1487)](null)[x(614)];
  }
}
const Un = /^c[^\s-]{8,}$/i, zn = /^[0-9a-z]+$/, Hn = /^[0-9A-HJKMNP-TV-Z]{26}$/i, Vn = /^[0-9a-fA-F]{8}\b-[0-9a-fA-F]{4}\b-[0-9a-fA-F]{4}\b-[0-9a-fA-F]{4}\b-[0-9a-fA-F]{12}$/i, Bn = /^[a-z0-9_-]{21}$/i, Zn = /^[A-Za-z0-9-_]+\.[A-Za-z0-9-_]+\.[A-Za-z0-9-_]*$/, Wn = /^[-+]?P(?!$)(?:(?:[-+]?\d+Y)|(?:[-+]?\d+[.,]\d+Y$))?(?:(?:[-+]?\d+M)|(?:[-+]?\d+[.,]\d+M$))?(?:(?:[-+]?\d+W)|(?:[-+]?\d+[.,]\d+W$))?(?:(?:[-+]?\d+D)|(?:[-+]?\d+[.,]\d+D$))?(?:T(?=[\d+-])(?:(?:[-+]?\d+H)|(?:[-+]?\d+[.,]\d+H$))?(?:(?:[-+]?\d+M)|(?:[-+]?\d+[.,]\d+M$))?(?:[-+]?\d+(?:[.,]\d+)?S)?)??$/, Kn = /^(?!\.)(?!.*\.\.)([A-Z0-9_'+\-\.]*)[A-Z0-9_+-]@([A-Z0-9][A-Z0-9\-]*\.)+[A-Z]{2,}$/i, Gn = r(2185);
let Ux;
const Jn = /^(?:(?:25[0-5]|2[0-4][0-9]|1[0-9][0-9]|[1-9][0-9]|[0-9])\.){3}(?:25[0-5]|2[0-4][0-9]|1[0-9][0-9]|[1-9][0-9]|[0-9])$/, Qn = /^(?:(?:25[0-5]|2[0-4][0-9]|1[0-9][0-9]|[1-9][0-9]|[0-9])\.){3}(?:25[0-5]|2[0-4][0-9]|1[0-9][0-9]|[1-9][0-9]|[0-9])\/(3[0-2]|[12]?[0-9])$/, Xn = /^(([0-9a-fA-F]{1,4}:){7,7}[0-9a-fA-F]{1,4}|([0-9a-fA-F]{1,4}:){1,7}:|([0-9a-fA-F]{1,4}:){1,6}:[0-9a-fA-F]{1,4}|([0-9a-fA-F]{1,4}:){1,5}(:[0-9a-fA-F]{1,4}){1,2}|([0-9a-fA-F]{1,4}:){1,4}(:[0-9a-fA-F]{1,4}){1,3}|([0-9a-fA-F]{1,4}:){1,3}(:[0-9a-fA-F]{1,4}){1,4}|([0-9a-fA-F]{1,4}:){1,2}(:[0-9a-fA-F]{1,4}){1,5}|[0-9a-fA-F]{1,4}:((:[0-9a-fA-F]{1,4}){1,6})|:((:[0-9a-fA-F]{1,4}){1,7}|:)|fe80:(:[0-9a-fA-F]{0,4}){0,4}%[0-9a-zA-Z]{1,}|::(ffff(:0{1,4}){0,1}:){0,1}((25[0-5]|(2[0-4]|1{0,1}[0-9]){0,1}[0-9])\.){3,3}(25[0-5]|(2[0-4]|1{0,1}[0-9]){0,1}[0-9])|([0-9a-fA-F]{1,4}:){1,4}:((25[0-5]|(2[0-4]|1{0,1}[0-9]){0,1}[0-9])\.){3,3}(25[0-5]|(2[0-4]|1{0,1}[0-9]){0,1}[0-9]))$/, Yn = /^(([0-9a-fA-F]{1,4}:){7,7}[0-9a-fA-F]{1,4}|([0-9a-fA-F]{1,4}:){1,7}:|([0-9a-fA-F]{1,4}:){1,6}:[0-9a-fA-F]{1,4}|([0-9a-fA-F]{1,4}:){1,5}(:[0-9a-fA-F]{1,4}){1,2}|([0-9a-fA-F]{1,4}:){1,4}(:[0-9a-fA-F]{1,4}){1,3}|([0-9a-fA-F]{1,4}:){1,3}(:[0-9a-fA-F]{1,4}){1,4}|([0-9a-fA-F]{1,4}:){1,2}(:[0-9a-fA-F]{1,4}){1,5}|[0-9a-fA-F]{1,4}:((:[0-9a-fA-F]{1,4}){1,6})|:((:[0-9a-fA-F]{1,4}){1,7}|:)|fe80:(:[0-9a-fA-F]{0,4}){0,4}%[0-9a-zA-Z]{1,}|::(ffff(:0{1,4}){0,1}:){0,1}((25[0-5]|(2[0-4]|1{0,1}[0-9]){0,1}[0-9])\.){3,3}(25[0-5]|(2[0-4]|1{0,1}[0-9]){0,1}[0-9])|([0-9a-fA-F]{1,4}:){1,4}:((25[0-5]|(2[0-4]|1{0,1}[0-9]){0,1}[0-9])\.){3,3}(25[0-5]|(2[0-4]|1{0,1}[0-9]){0,1}[0-9]))\/(12[0-8]|1[01][0-9]|[1-9]?[0-9])$/, eo = /^([0-9a-zA-Z+/]{4})*(([0-9a-zA-Z+/]{2}==)|([0-9a-zA-Z+/]{3}=))?$/, xo = /^([0-9a-zA-Z-_]{4})*(([0-9a-zA-Z-_]{2}(==)?)|([0-9a-zA-Z-_]{3}(=)?))?$/, Os = r(2047), to = new RegExp("^" + Os + "$");
function Ds(o) {
  const x = r;
  let t = x(2030);
  o.precision ? t = t + x(2817) + o[x(2847)] + "}" : o[x(2847)] == null && (t = t + x(2077));
  const a = o.precision ? "+" : "?";
  return x(2910) + t + ")" + a;
}
function ro(o) {
  return new RegExp("^" + Ds(o) + "$");
}
function ao(o) {
  const x = r;
  let t = Os + "T" + Ds(o);
  const a = [];
  return a[x(1449)](o[x(359)] ? "Z?" : "Z"), o[x(226)] && a[x(1449)](x(886)), t = t + "(" + a[x(2130)]("|") + ")", new RegExp("^" + t + "$");
}
function so(o, x) {
  return !!((x === "v4" || !x) && Jn[r(1069)](o) || (x === "v6" || !x) && Xn.test(o));
}
function no(o, x) {
  const t = r;
  if (!Zn[t(1069)](o)) return !1;
  try {
    const [a] = o.split(".");
    if (!a) return !1;
    const e = a[t(1809)](/-/g, "+")[t(1809)](/_/g, "/")[t(2658)](a.length + (4 - a[t(2236)] % 4) % 4, "="), s = JSON[t(330)](atob(e));
    return !(typeof s !== t(1606) || s === null || "typ" in s && (s == null ? void 0 : s[t(2490)]) !== t(1994) || !s[t(1326)] || x && s[t(1326)] !== x);
  } catch {
    return !1;
  }
}
function oo(o, x) {
  const t = r;
  return !!((x === "v4" || !x) && Qn.test(o) || (x === "v6" || !x) && Yn[t(1069)](o));
}
class w0 extends _e {
  [r(979)](x) {
    const t = r;
    if (this[t(2289)].coerce && (x[t(2516)] = String(x[t(2516)])), this._getType(x) !== re[t(1736)]) {
      const n = this[t(1375)](x);
      return ee(n, { code: W[t(465)], expected: re[t(1736)], received: n.parsedType }), fe;
    }
    const e = new e0();
    let s;
    for (const n of this[t(2289)][t(1605)])
      if (n.kind === t(2191)) x.data[t(2236)] < n[t(194)] && (s = this[t(1375)](x, s), ee(s, { code: W[t(2449)], minimum: n[t(194)], type: "string", inclusive: !0, exact: !1, message: n.message }), e[t(2600)]());
      else if (n[t(1352)] === t(2499)) x[t(2516)][t(2236)] > n[t(194)] && (s = this[t(1375)](x, s), ee(s, { code: W[t(2204)], maximum: n[t(194)], type: t(1736), inclusive: !0, exact: !1, message: n[t(1354)] }), e[t(2600)]());
      else if (n[t(1352)] === t(2236)) {
        const i = x[t(2516)][t(2236)] > n.value, c = x[t(2516)].length < n[t(194)];
        (i || c) && (s = this[t(1375)](x, s), i ? ee(s, { code: W[t(2204)], maximum: n[t(194)], type: t(1736), inclusive: !0, exact: !0, message: n[t(1354)] }) : c && ee(s, { code: W[t(2449)], minimum: n[t(194)], type: t(1736), inclusive: !0, exact: !0, message: n[t(1354)] }), e.dirty());
      } else if (n.kind === t(1693)) !Kn[t(1069)](x[t(2516)]) && (s = this._getOrReturnCtx(x, s), ee(s, { validation: t(1693), code: W[t(1792)], message: n[t(1354)] }), e.dirty());
      else if (n[t(1352)] === t(2842)) !Ux && (Ux = new RegExp(Gn, "u")), !Ux.test(x[t(2516)]) && (s = this[t(1375)](x, s), ee(s, { validation: t(2842), code: W.invalid_string, message: n[t(1354)] }), e.dirty());
      else if (n[t(1352)] === t(1084)) !Vn.test(x[t(2516)]) && (s = this[t(1375)](x, s), ee(s, { validation: t(1084), code: W.invalid_string, message: n.message }), e[t(2600)]());
      else if (n[t(1352)] === t(2758)) !Bn.test(x[t(2516)]) && (s = this._getOrReturnCtx(x, s), ee(s, { validation: t(2758), code: W[t(1792)], message: n.message }), e.dirty());
      else if (n[t(1352)] === t(2326)) !Un[t(1069)](x.data) && (s = this._getOrReturnCtx(x, s), ee(s, { validation: t(2326), code: W[t(1792)], message: n.message }), e[t(2600)]());
      else if (n[t(1352)] === t(718)) !zn[t(1069)](x[t(2516)]) && (s = this[t(1375)](x, s), ee(s, { validation: t(718), code: W[t(1792)], message: n[t(1354)] }), e[t(2600)]());
      else if (n.kind === "ulid") !Hn[t(1069)](x[t(2516)]) && (s = this[t(1375)](x, s), ee(s, { validation: t(2542), code: W[t(1792)], message: n.message }), e[t(2600)]());
      else if (n[t(1352)] === t(2123)) try {
        new URL(x[t(2516)]);
      } catch {
        s = this[t(1375)](x, s), ee(s, { validation: "url", code: W[t(1792)], message: n[t(1354)] }), e[t(2600)]();
      }
      else
        n.kind === t(1560) ? (n[t(1560)].lastIndex = 0, !n.regex.test(x.data) && (s = this[t(1375)](x, s), ee(s, { validation: t(1560), code: W[t(1792)], message: n.message }), e[t(2600)]())) : n[t(1352)] === t(183) ? x[t(2516)] = x[t(2516)][t(183)]() : n.kind === t(408) ? !x[t(2516)].includes(n[t(194)], n[t(1219)]) && (s = this._getOrReturnCtx(x, s), ee(s, { code: W.invalid_string, validation: { includes: n[t(194)], position: n[t(1219)] }, message: n[t(1354)] }), e[t(2600)]()) : n[t(1352)] === t(2182) ? x[t(2516)] = x[t(2516)][t(2182)]() : n[t(1352)] === t(1157) ? x[t(2516)] = x[t(2516)][t(1157)]() : n[t(1352)] === t(2821) ? !x[t(2516)][t(2821)](n[t(194)]) && (s = this[t(1375)](x, s), ee(s, { code: W.invalid_string, validation: { startsWith: n[t(194)] }, message: n[t(1354)] }), e[t(2600)]()) : n[t(1352)] === t(1542) ? !x[t(2516)][t(1542)](n[t(194)]) && (s = this[t(1375)](x, s), ee(s, { code: W.invalid_string, validation: { endsWith: n[t(194)] }, message: n[t(1354)] }), e[t(2600)]()) : n[t(1352)] === t(1947) ? !ao(n)[t(1069)](x[t(2516)]) && (s = this[t(1375)](x, s), ee(s, { code: W[t(1792)], validation: t(1947), message: n[t(1354)] }), e[t(2600)]()) : n.kind === t(1846) ? !to.test(x.data) && (s = this._getOrReturnCtx(x, s), ee(s, { code: W.invalid_string, validation: t(1846), message: n.message }), e[t(2600)]()) : n[t(1352)] === t(574) ? !ro(n)[t(1069)](x[t(2516)]) && (s = this[t(1375)](x, s), ee(s, { code: W[t(1792)], validation: t(574), message: n[t(1354)] }), e[t(2600)]()) : n.kind === t(1393) ? !Wn.test(x.data) && (s = this[t(1375)](x, s), ee(s, { validation: t(1393), code: W[t(1792)], message: n[t(1354)] }), e[t(2600)]()) : n.kind === "ip" ? !so(x[t(2516)], n.version) && (s = this._getOrReturnCtx(x, s), ee(s, { validation: "ip", code: W[t(1792)], message: n[t(1354)] }), e[t(2600)]()) : n[t(1352)] === "jwt" ? !no(x[t(2516)], n[t(1326)]) && (s = this[t(1375)](x, s), ee(s, { validation: "jwt", code: W[t(1792)], message: n[t(1354)] }), e[t(2600)]()) : n[t(1352)] === t(2395) ? !oo(x.data, n.version) && (s = this[t(1375)](x, s), ee(s, { validation: t(2395), code: W.invalid_string, message: n.message }), e[t(2600)]()) : n.kind === t(1495) ? !eo[t(1069)](x.data) && (s = this[t(1375)](x, s), ee(s, { validation: t(1495), code: W[t(1792)], message: n[t(1354)] }), e[t(2600)]()) : n.kind === "base64url" ? !xo[t(1069)](x.data) && (s = this._getOrReturnCtx(x, s), ee(s, { validation: t(1246), code: W[t(1792)], message: n[t(1354)] }), e[t(2600)]()) : Ne[t(513)](n);
    return { status: e[t(194)], value: x.data };
  }
  [r(384)](x, t, a) {
    const e = r;
    return this[e(2594)]((s) => x[e(1069)](s), { validation: t, code: W.invalid_string, ...ae.errToObj(a) });
  }
  [r(2834)](x) {
    const t = r;
    return new w0({ ...this[t(2289)], checks: [...this._def[t(1605)], x] });
  }
  [r(1693)](x) {
    const t = r;
    return this._addCheck({ kind: t(1693), ...ae[t(2430)](x) });
  }
  [r(2123)](x) {
    const t = r;
    return this[t(2834)]({ kind: t(2123), ...ae[t(2430)](x) });
  }
  [r(2842)](x) {
    const t = r;
    return this[t(2834)]({ kind: t(2842), ...ae[t(2430)](x) });
  }
  uuid(x) {
    const t = r;
    return this[t(2834)]({ kind: t(1084), ...ae[t(2430)](x) });
  }
  nanoid(x) {
    const t = r;
    return this[t(2834)]({ kind: t(2758), ...ae.errToObj(x) });
  }
  [r(2326)](x) {
    const t = r;
    return this._addCheck({ kind: t(2326), ...ae[t(2430)](x) });
  }
  [r(718)](x) {
    const t = r;
    return this[t(2834)]({ kind: t(718), ...ae[t(2430)](x) });
  }
  ulid(x) {
    const t = r;
    return this[t(2834)]({ kind: t(2542), ...ae[t(2430)](x) });
  }
  [r(1495)](x) {
    const t = r;
    return this[t(2834)]({ kind: t(1495), ...ae[t(2430)](x) });
  }
  [r(1246)](x) {
    const t = r;
    return this[t(2834)]({ kind: t(1246), ...ae[t(2430)](x) });
  }
  [r(1420)](x) {
    const t = r;
    return this[t(2834)]({ kind: t(1420), ...ae[t(2430)](x) });
  }
  ip(x) {
    const t = r;
    return this._addCheck({ kind: "ip", ...ae[t(2430)](x) });
  }
  [r(2395)](x) {
    const t = r;
    return this[t(2834)]({ kind: t(2395), ...ae[t(2430)](x) });
  }
  [r(1947)](x) {
    const t = r;
    return typeof x === t(1736) ? this[t(2834)]({ kind: t(1947), precision: null, offset: !1, local: !1, message: x }) : this[t(2834)]({ kind: t(1947), precision: typeof (x == null ? void 0 : x[t(2847)]) === t(233) ? null : x == null ? void 0 : x[t(2847)], offset: (x == null ? void 0 : x[t(226)]) ?? !1, local: (x == null ? void 0 : x[t(359)]) ?? !1, ...ae[t(2430)](x == null ? void 0 : x[t(1354)]) });
  }
  date(x) {
    const t = r;
    return this._addCheck({ kind: t(1846), message: x });
  }
  [r(574)](x) {
    const t = r;
    return typeof x === t(1736) ? this[t(2834)]({ kind: t(574), precision: null, message: x }) : this[t(2834)]({ kind: "time", precision: typeof (x == null ? void 0 : x[t(2847)]) === t(233) ? null : x == null ? void 0 : x[t(2847)], ...ae[t(2430)](x == null ? void 0 : x[t(1354)]) });
  }
  [r(1393)](x) {
    const t = r;
    return this._addCheck({ kind: t(1393), ...ae[t(2430)](x) });
  }
  [r(1560)](x, t) {
    return this._addCheck({ kind: "regex", regex: x, ...ae.errToObj(t) });
  }
  includes(x, t) {
    const a = r;
    return this[a(2834)]({ kind: a(408), value: x, position: t == null ? void 0 : t[a(1219)], ...ae[a(2430)](t == null ? void 0 : t[a(1354)]) });
  }
  [r(2821)](x, t) {
    const a = r;
    return this[a(2834)]({ kind: a(2821), value: x, ...ae[a(2430)](t) });
  }
  [r(1542)](x, t) {
    const a = r;
    return this[a(2834)]({ kind: a(1542), value: x, ...ae.errToObj(t) });
  }
  [r(2191)](x, t) {
    const a = r;
    return this._addCheck({ kind: a(2191), value: x, ...ae[a(2430)](t) });
  }
  [r(2499)](x, t) {
    const a = r;
    return this._addCheck({ kind: a(2499), value: x, ...ae[a(2430)](t) });
  }
  [r(2236)](x, t) {
    const a = r;
    return this._addCheck({ kind: a(2236), value: x, ...ae[a(2430)](t) });
  }
  [r(2109)](x) {
    const t = r;
    return this[t(2191)](1, ae[t(2430)](x));
  }
  [r(183)]() {
    const x = r;
    return new w0({ ...this[x(2289)], checks: [...this[x(2289)].checks, { kind: "trim" }] });
  }
  [r(2182)]() {
    const x = r;
    return new w0({ ...this[x(2289)], checks: [...this[x(2289)].checks, { kind: "toLowerCase" }] });
  }
  toUpperCase() {
    const x = r;
    return new w0({ ...this[x(2289)], checks: [...this[x(2289)][x(1605)], { kind: "toUpperCase" }] });
  }
  get [r(1341)]() {
    const x = r;
    return !!this[x(2289)][x(1605)][x(1359)]((t) => t[x(1352)] === "datetime");
  }
  get isDate() {
    const x = r;
    return !!this[x(2289)].checks[x(1359)]((t) => t.kind === "date");
  }
  get [r(1714)]() {
    const x = r;
    return !!this[x(2289)].checks[x(1359)]((t) => t[x(1352)] === x(574));
  }
  get [r(2733)]() {
    const x = r;
    return !!this[x(2289)][x(1605)][x(1359)]((t) => t[x(1352)] === x(1393));
  }
  get [r(2408)]() {
    const x = r;
    return !!this._def.checks[x(1359)]((t) => t[x(1352)] === x(1693));
  }
  get isURL() {
    const x = r;
    return !!this[x(2289)][x(1605)].find((t) => t.kind === "url");
  }
  get [r(1266)]() {
    const x = r;
    return !!this[x(2289)][x(1605)][x(1359)]((t) => t[x(1352)] === "emoji");
  }
  get [r(2055)]() {
    const x = r;
    return !!this[x(2289)][x(1605)][x(1359)]((t) => t[x(1352)] === x(1084));
  }
  get [r(267)]() {
    const x = r;
    return !!this._def[x(1605)][x(1359)]((t) => t[x(1352)] === x(2758));
  }
  get isCUID() {
    const x = r;
    return !!this[x(2289)].checks[x(1359)]((t) => t[x(1352)] === "cuid");
  }
  get [r(2745)]() {
    const x = r;
    return !!this[x(2289)][x(1605)][x(1359)]((t) => t[x(1352)] === x(718));
  }
  get [r(662)]() {
    const x = r;
    return !!this[x(2289)][x(1605)][x(1359)]((t) => t.kind === x(2542));
  }
  get [r(2384)]() {
    const x = r;
    return !!this[x(2289)][x(1605)][x(1359)]((t) => t.kind === "ip");
  }
  get [r(478)]() {
    const x = r;
    return !!this._def[x(1605)].find((t) => t[x(1352)] === x(2395));
  }
  get [r(1412)]() {
    const x = r;
    return !!this[x(2289)][x(1605)][x(1359)]((t) => t[x(1352)] === x(1495));
  }
  get [r(1160)]() {
    const x = r;
    return !!this[x(2289)].checks[x(1359)]((t) => t.kind === "base64url");
  }
  get minLength() {
    const x = r;
    let t = null;
    for (const a of this._def[x(1605)])
      a.kind === "min" && (t === null || a[x(194)] > t) && (t = a[x(194)]);
    return t;
  }
  get maxLength() {
    const x = r;
    let t = null;
    for (const a of this[x(2289)][x(1605)])
      a[x(1352)] === "max" && (t === null || a.value < t) && (t = a[x(194)]);
    return t;
  }
}
w0[r(186)] = (o) => {
  const x = r;
  return new w0({ checks: [], typeName: he[x(1697)], coerce: (o == null ? void 0 : o[x(1900)]) ?? !1, ...we(o) });
};
function io(o, x) {
  const t = r, a = (o.toString().split(".")[1] || "")[t(2236)], e = (x[t(1525)]()[t(2831)](".")[1] || "")[t(2236)], s = a > e ? a : e, n = Number[t(608)](o[t(2460)](s).replace(".", "")), i = Number[t(608)](x[t(2460)](s)[t(1809)](".", ""));
  return n % i / 10 ** s;
}
class B0 extends _e {
  constructor() {
    const x = r;
    super(...arguments), this[x(2191)] = this.gte, this[x(2499)] = this.lte, this[x(883)] = this[x(948)];
  }
  [r(979)](x) {
    const t = r;
    if (this._def[t(1900)] && (x.data = Number(x[t(2516)])), this[t(2331)](x) !== re.number) {
      const n = this[t(1375)](x);
      return ee(n, { code: W[t(465)], expected: re.number, received: n[t(311)] }), fe;
    }
    let e;
    const s = new e0();
    for (const n of this[t(2289)][t(1605)])
      n.kind === t(294) ? !Ne.isInteger(x[t(2516)]) && (e = this[t(1375)](x, e), ee(e, { code: W[t(465)], expected: t(1649), received: t(1068), message: n[t(1354)] }), s[t(2600)]()) : n[t(1352)] === t(2191) ? (n[t(1184)] ? x[t(2516)] < n.value : x[t(2516)] <= n[t(194)]) && (e = this[t(1375)](x, e), ee(e, { code: W.too_small, minimum: n.value, type: t(1142), inclusive: n[t(1184)], exact: !1, message: n[t(1354)] }), s[t(2600)]()) : n[t(1352)] === t(2499) ? (n[t(1184)] ? x[t(2516)] > n.value : x[t(2516)] >= n[t(194)]) && (e = this[t(1375)](x, e), ee(e, { code: W[t(2204)], maximum: n[t(194)], type: t(1142), inclusive: n[t(1184)], exact: !1, message: n[t(1354)] }), s[t(2600)]()) : n[t(1352)] === t(948) ? io(x[t(2516)], n[t(194)]) !== 0 && (e = this[t(1375)](x, e), ee(e, { code: W.not_multiple_of, multipleOf: n[t(194)], message: n[t(1354)] }), s[t(2600)]()) : n[t(1352)] === t(418) ? !Number.isFinite(x[t(2516)]) && (e = this[t(1375)](x, e), ee(e, { code: W[t(582)], message: n[t(1354)] }), s.dirty()) : Ne[t(513)](n);
    return { status: s[t(194)], value: x[t(2516)] };
  }
  [r(1325)](x, t) {
    const a = r;
    return this[a(325)](a(2191), x, !0, ae.toString(t));
  }
  gt(x, t) {
    const a = r;
    return this[a(325)](a(2191), x, !1, ae[a(1525)](t));
  }
  [r(751)](x, t) {
    const a = r;
    return this[a(325)]("max", x, !0, ae[a(1525)](t));
  }
  lt(x, t) {
    const a = r;
    return this[a(325)](a(2499), x, !1, ae[a(1525)](t));
  }
  [r(325)](x, t, a, e) {
    const s = r;
    return new B0({ ...this[s(2289)], checks: [...this[s(2289)][s(1605)], { kind: x, value: t, inclusive: a, message: ae[s(1525)](e) }] });
  }
  [r(2834)](x) {
    const t = r;
    return new B0({ ...this[t(2289)], checks: [...this[t(2289)][t(1605)], x] });
  }
  int(x) {
    const t = r;
    return this[t(2834)]({ kind: "int", message: ae[t(1525)](x) });
  }
  [r(2228)](x) {
    const t = r;
    return this[t(2834)]({ kind: t(2191), value: 0, inclusive: !1, message: ae.toString(x) });
  }
  [r(1978)](x) {
    const t = r;
    return this[t(2834)]({ kind: t(2499), value: 0, inclusive: !1, message: ae[t(1525)](x) });
  }
  [r(1836)](x) {
    return this._addCheck({ kind: "max", value: 0, inclusive: !0, message: ae.toString(x) });
  }
  [r(2802)](x) {
    const t = r;
    return this[t(2834)]({ kind: t(2191), value: 0, inclusive: !0, message: ae[t(1525)](x) });
  }
  [r(948)](x, t) {
    const a = r;
    return this[a(2834)]({ kind: "multipleOf", value: x, message: ae[a(1525)](t) });
  }
  finite(x) {
    const t = r;
    return this._addCheck({ kind: t(418), message: ae[t(1525)](x) });
  }
  [r(180)](x) {
    const t = r;
    return this[t(2834)]({ kind: t(2191), inclusive: !0, value: Number[t(687)], message: ae.toString(x) })[t(2834)]({ kind: t(2499), inclusive: !0, value: Number.MAX_SAFE_INTEGER, message: ae[t(1525)](x) });
  }
  get [r(228)]() {
    const x = r;
    let t = null;
    for (const a of this[x(2289)][x(1605)])
      a[x(1352)] === x(2191) && (t === null || a[x(194)] > t) && (t = a[x(194)]);
    return t;
  }
  get maxValue() {
    const x = r;
    let t = null;
    for (const a of this._def[x(1605)])
      a.kind === "max" && (t === null || a[x(194)] < t) && (t = a.value);
    return t;
  }
  get [r(1027)]() {
    const x = r;
    return !!this[x(2289)][x(1605)][x(1359)]((t) => t[x(1352)] === x(294) || t[x(1352)] === "multipleOf" && Ne[x(986)](t[x(194)]));
  }
  get [r(2524)]() {
    const x = r;
    let t = null, a = null;
    for (const e of this[x(2289)][x(1605)]) {
      if (e[x(1352)] === x(418) || e[x(1352)] === x(294) || e[x(1352)] === "multipleOf") return !0;
      e.kind === x(2191) ? (a === null || e.value > a) && (a = e[x(194)]) : e[x(1352)] === x(2499) && (t === null || e[x(194)] < t) && (t = e[x(194)]);
    }
    return Number[x(2524)](a) && Number[x(2524)](t);
  }
}
B0.create = (o) => {
  const x = r;
  return new B0({ checks: [], typeName: he.ZodNumber, coerce: (o == null ? void 0 : o[x(1900)]) || !1, ...we(o) });
};
class rx extends _e {
  constructor() {
    const x = r;
    super(...arguments), this[x(2191)] = this.gte, this[x(2499)] = this[x(751)];
  }
  _parse(x) {
    const t = r;
    if (this[t(2289)][t(1900)]) try {
      x[t(2516)] = BigInt(x[t(2516)]);
    } catch {
      return this[t(1899)](x);
    }
    if (this[t(2331)](x) !== re[t(562)]) return this._getInvalidInput(x);
    let e;
    const s = new e0();
    for (const n of this[t(2289)][t(1605)])
      n.kind === "min" ? (n.inclusive ? x[t(2516)] < n[t(194)] : x[t(2516)] <= n[t(194)]) && (e = this[t(1375)](x, e), ee(e, { code: W[t(2449)], type: "bigint", minimum: n[t(194)], inclusive: n[t(1184)], message: n[t(1354)] }), s[t(2600)]()) : n[t(1352)] === t(2499) ? (n[t(1184)] ? x[t(2516)] > n[t(194)] : x[t(2516)] >= n[t(194)]) && (e = this[t(1375)](x, e), ee(e, { code: W[t(2204)], type: "bigint", maximum: n[t(194)], inclusive: n[t(1184)], message: n[t(1354)] }), s.dirty()) : n[t(1352)] === t(948) ? x[t(2516)] % n[t(194)] !== BigInt(0) && (e = this[t(1375)](x, e), ee(e, { code: W[t(1875)], multipleOf: n[t(194)], message: n[t(1354)] }), s[t(2600)]()) : Ne.assertNever(n);
    return { status: s[t(194)], value: x.data };
  }
  [r(1899)](x) {
    const t = r, a = this[t(1375)](x);
    return ee(a, { code: W[t(465)], expected: re[t(562)], received: a[t(311)] }), fe;
  }
  [r(1325)](x, t) {
    const a = r;
    return this[a(325)](a(2191), x, !0, ae[a(1525)](t));
  }
  gt(x, t) {
    const a = r;
    return this.setLimit(a(2191), x, !1, ae[a(1525)](t));
  }
  lte(x, t) {
    const a = r;
    return this.setLimit(a(2499), x, !0, ae.toString(t));
  }
  lt(x, t) {
    const a = r;
    return this[a(325)](a(2499), x, !1, ae.toString(t));
  }
  [r(325)](x, t, a, e) {
    const s = r;
    return new rx({ ...this._def, checks: [...this[s(2289)][s(1605)], { kind: x, value: t, inclusive: a, message: ae.toString(e) }] });
  }
  [r(2834)](x) {
    const t = r;
    return new rx({ ...this[t(2289)], checks: [...this[t(2289)][t(1605)], x] });
  }
  [r(2228)](x) {
    const t = r;
    return this[t(2834)]({ kind: t(2191), value: BigInt(0), inclusive: !1, message: ae[t(1525)](x) });
  }
  [r(1978)](x) {
    const t = r;
    return this._addCheck({ kind: t(2499), value: BigInt(0), inclusive: !1, message: ae[t(1525)](x) });
  }
  [r(1836)](x) {
    const t = r;
    return this[t(2834)]({ kind: t(2499), value: BigInt(0), inclusive: !0, message: ae.toString(x) });
  }
  [r(2802)](x) {
    const t = r;
    return this._addCheck({ kind: t(2191), value: BigInt(0), inclusive: !0, message: ae[t(1525)](x) });
  }
  multipleOf(x, t) {
    const a = r;
    return this._addCheck({ kind: a(948), value: x, message: ae[a(1525)](t) });
  }
  get [r(228)]() {
    const x = r;
    let t = null;
    for (const a of this[x(2289)][x(1605)])
      a[x(1352)] === "min" && (t === null || a[x(194)] > t) && (t = a[x(194)]);
    return t;
  }
  get [r(2879)]() {
    const x = r;
    let t = null;
    for (const a of this[x(2289)][x(1605)])
      a[x(1352)] === x(2499) && (t === null || a[x(194)] < t) && (t = a[x(194)]);
    return t;
  }
}
rx[r(186)] = (o) => {
  const x = r;
  return new rx({ checks: [], typeName: he[x(2453)], coerce: (o == null ? void 0 : o[x(1900)]) ?? !1, ...we(o) });
};
class zt extends _e {
  [r(979)](x) {
    const t = r;
    if (this[t(2289)][t(1900)] && (x[t(2516)] = !!x[t(2516)]), this._getType(x) !== re[t(2727)]) {
      const e = this[t(1375)](x);
      return ee(e, { code: W.invalid_type, expected: re.boolean, received: e.parsedType }), fe;
    }
    return r0(x[t(2516)]);
  }
}
zt[r(186)] = (o) => {
  const x = r;
  return new zt({ typeName: he[x(879)], coerce: (o == null ? void 0 : o[x(1900)]) || !1, ...we(o) });
};
class yx extends _e {
  _parse(x) {
    const t = r;
    if (this._def[t(1900)] && (x[t(2516)] = new Date(x[t(2516)])), this[t(2331)](x) !== re[t(1846)]) {
      const n = this[t(1375)](x);
      return ee(n, { code: W[t(465)], expected: re[t(1846)], received: n.parsedType }), fe;
    }
    if (Number[t(579)](x.data[t(1941)]())) {
      const n = this._getOrReturnCtx(x);
      return ee(n, { code: W[t(1597)] }), fe;
    }
    const e = new e0();
    let s;
    for (const n of this[t(2289)][t(1605)])
      n.kind === t(2191) ? x[t(2516)][t(1941)]() < n[t(194)] && (s = this[t(1375)](x, s), ee(s, { code: W[t(2449)], message: n.message, inclusive: !0, exact: !1, minimum: n[t(194)], type: t(1846) }), e[t(2600)]()) : n.kind === t(2499) ? x[t(2516)][t(1941)]() > n.value && (s = this._getOrReturnCtx(x, s), ee(s, { code: W.too_big, message: n[t(1354)], inclusive: !0, exact: !1, maximum: n.value, type: t(1846) }), e[t(2600)]()) : Ne.assertNever(n);
    return { status: e[t(194)], value: new Date(x[t(2516)].getTime()) };
  }
  [r(2834)](x) {
    const t = r;
    return new yx({ ...this[t(2289)], checks: [...this[t(2289)][t(1605)], x] });
  }
  [r(2191)](x, t) {
    const a = r;
    return this[a(2834)]({ kind: a(2191), value: x[a(1941)](), message: ae[a(1525)](t) });
  }
  [r(2499)](x, t) {
    const a = r;
    return this[a(2834)]({ kind: "max", value: x[a(1941)](), message: ae[a(1525)](t) });
  }
  get [r(1797)]() {
    const x = r;
    let t = null;
    for (const a of this[x(2289)][x(1605)])
      a.kind === "min" && (t === null || a[x(194)] > t) && (t = a[x(194)]);
    return t != null ? new Date(t) : null;
  }
  get maxDate() {
    const x = r;
    let t = null;
    for (const a of this._def[x(1605)])
      a[x(1352)] === x(2499) && (t === null || a.value < t) && (t = a.value);
    return t != null ? new Date(t) : null;
  }
}
yx.create = (o) => {
  const x = r;
  return new yx({ checks: [], coerce: (o == null ? void 0 : o[x(1900)]) || !1, typeName: he.ZodDate, ...we(o) });
};
class qr extends _e {
  _parse(x) {
    const t = r;
    if (this._getType(x) !== re.symbol) {
      const e = this[t(1375)](x);
      return ee(e, { code: W[t(465)], expected: re[t(855)], received: e[t(311)] }), fe;
    }
    return r0(x[t(2516)]);
  }
}
qr[r(186)] = (o) => {
  const x = r;
  return new qr({ typeName: he[x(2872)], ...we(o) });
};
class Ht extends _e {
  _parse(x) {
    const t = r;
    if (this._getType(x) !== re[t(233)]) {
      const e = this._getOrReturnCtx(x);
      return ee(e, { code: W.invalid_type, expected: re[t(233)], received: e[t(311)] }), fe;
    }
    return r0(x[t(2516)]);
  }
}
Ht[r(186)] = (o) => new Ht({ typeName: he.ZodUndefined, ...we(o) });
class Vt extends _e {
  [r(979)](x) {
    const t = r;
    if (this[t(2331)](x) !== re[t(2450)]) {
      const e = this[t(1375)](x);
      return ee(e, { code: W[t(465)], expected: re[t(2450)], received: e[t(311)] }), fe;
    }
    return r0(x[t(2516)]);
  }
}
Vt[r(186)] = (o) => {
  const x = r;
  return new Vt({ typeName: he[x(2269)], ...we(o) });
};
class ax extends _e {
  constructor() {
    const x = r;
    super(...arguments), this[x(1573)] = !0;
  }
  _parse(x) {
    return r0(x[r(2516)]);
  }
}
ax.create = (o) => new ax({ typeName: he.ZodAny, ...we(o) });
class Bt extends _e {
  constructor() {
    const x = r;
    super(...arguments), this[x(168)] = !0;
  }
  [r(979)](x) {
    return r0(x[r(2516)]);
  }
}
Bt.create = (o) => {
  const x = r;
  return new Bt({ typeName: he[x(2337)], ...we(o) });
};
class R0 extends _e {
  _parse(x) {
    const t = r, a = this[t(1375)](x);
    return ee(a, { code: W[t(465)], expected: re[t(874)], received: a.parsedType }), fe;
  }
}
R0.create = (o) => new R0({ typeName: he.ZodNever, ...we(o) });
class Zt extends _e {
  _parse(x) {
    const t = r;
    if (this[t(2331)](x) !== re[t(233)]) {
      const e = this[t(1375)](x);
      return ee(e, { code: W[t(465)], expected: re.void, received: e[t(311)] }), fe;
    }
    return r0(x[t(2516)]);
  }
}
Zt.create = (o) => {
  const x = r;
  return new Zt({ typeName: he[x(1559)], ...we(o) });
};
class h0 extends _e {
  [r(979)](x) {
    const t = r, { ctx: a, status: e } = this[t(2859)](x), s = this[t(2289)];
    if (a[t(311)] !== re[t(2762)]) return ee(a, { code: W[t(465)], expected: re[t(2762)], received: a[t(311)] }), fe;
    if (s[t(2402)] !== null) {
      const i = a[t(2516)].length > s[t(2402)][t(194)], c = a[t(2516)][t(2236)] < s[t(2402)][t(194)];
      (i || c) && (ee(a, { code: i ? W[t(2204)] : W.too_small, minimum: c ? s[t(2402)].value : void 0, maximum: i ? s[t(2402)][t(194)] : void 0, type: t(2762), inclusive: !0, exact: !0, message: s[t(2402)][t(1354)] }), e[t(2600)]());
    }
    if (s[t(2772)] !== null && a.data[t(2236)] < s.minLength[t(194)] && (ee(a, { code: W[t(2449)], minimum: s[t(2772)].value, type: t(2762), inclusive: !0, exact: !1, message: s[t(2772)][t(1354)] }), e[t(2600)]()), s[t(696)] !== null && a[t(2516)].length > s[t(696)][t(194)] && (ee(a, { code: W.too_big, maximum: s[t(696)][t(194)], type: t(2762), inclusive: !0, exact: !1, message: s[t(696)][t(1354)] }), e[t(2600)]()), a[t(1929)][t(1180)]) return Promise.all([...a[t(2516)]].map((i, c) => {
      const u = t;
      return s[u(2390)][u(1700)](new p0(a, i, a[u(632)], c));
    }))[t(667)]((i) => e0[t(283)](e, i));
    const n = [...a.data][t(1622)]((i, c) => {
      const u = t;
      return s[u(2390)][u(984)](new p0(a, i, a[u(632)], c));
    });
    return e0[t(283)](e, n);
  }
  get element() {
    const x = r;
    return this._def[x(2390)];
  }
  [r(2191)](x, t) {
    const a = r;
    return new h0({ ...this._def, minLength: { value: x, message: ae[a(1525)](t) } });
  }
  [r(2499)](x, t) {
    const a = r;
    return new h0({ ...this[a(2289)], maxLength: { value: x, message: ae[a(1525)](t) } });
  }
  length(x, t) {
    const a = r;
    return new h0({ ...this._def, exactLength: { value: x, message: ae[a(1525)](t) } });
  }
  [r(2109)](x) {
    return this.min(1, x);
  }
}
h0.create = (o, x) => {
  const t = r;
  return new h0({ type: o, minLength: null, maxLength: null, exactLength: null, typeName: he[t(2519)], ...we(x) });
};
function z0(o) {
  const x = r;
  if (o instanceof Ke) {
    const t = {};
    for (const a in o[x(1913)]) {
      const e = o[x(1913)][a];
      t[a] = S0[x(186)](z0(e));
    }
    return new Ke({ ...o._def, shape: () => t });
  } else
    return o instanceof h0 ? new h0({ ...o._def, type: z0(o.element) }) : o instanceof S0 ? S0[x(186)](z0(o[x(1891)]())) : o instanceof j0 ? j0[x(186)](z0(o[x(1891)]())) : o instanceof O0 ? O0[x(186)](o[x(2230)][x(1622)]((t) => z0(t))) : o;
}
class Ke extends _e {
  constructor() {
    const x = r;
    super(...arguments), this[x(2869)] = null, this[x(2180)] = this.passthrough, this[x(2593)] = this[x(2417)];
  }
  [r(2316)]() {
    const x = r;
    if (this[x(2869)] !== null) return this[x(2869)];
    const t = this[x(2289)][x(1913)](), a = Ne[x(1417)](t);
    return this[x(2869)] = { shape: t, keys: a }, this[x(2869)];
  }
  [r(979)](x) {
    const t = r;
    if (this[t(2331)](x) !== re[t(1606)]) {
      const d = this[t(1375)](x);
      return ee(d, { code: W[t(465)], expected: re[t(1606)], received: d[t(311)] }), fe;
    }
    const { status: e, ctx: s } = this[t(2859)](x), { shape: n, keys: i } = this[t(2316)](), c = [];
    if (!(this[t(2289)][t(904)] instanceof R0 && this[t(2289)][t(158)] === t(1199))) for (const d in s.data)
      !i[t(408)](d) && c[t(1449)](d);
    const u = [];
    for (const d of i) {
      const l = n[d], f = s.data[d];
      u[t(1449)]({ key: { status: t(996), value: d }, value: l[t(979)](new p0(s, f, s.path, d)), alwaysSet: d in s[t(2516)] });
    }
    if (this[t(2289)][t(904)] instanceof R0) {
      const d = this[t(2289)].unknownKeys;
      if (d === t(172)) for (const l of c)
        u[t(1449)]({ key: { status: t(996), value: l }, value: { status: t(996), value: s[t(2516)][l] } });
      else if (d === t(1371)) c.length > 0 && (ee(s, { code: W.unrecognized_keys, keys: c }), e[t(2600)]());
      else if (d !== t(1199)) throw new Error("Internal ZodObject error: invalid unknownKeys value.");
    } else {
      const d = this[t(2289)][t(904)];
      for (const l of c) {
        const f = s.data[l];
        u[t(1449)]({ key: { status: t(996), value: l }, value: d[t(979)](new p0(s, f, s[t(632)], l)), alwaysSet: l in s[t(2516)] });
      }
    }
    return s[t(1929)][t(1180)] ? Promise[t(753)]()[t(667)](async () => {
      const d = t, l = [];
      for (const f of u) {
        const g = await f[d(1411)], h = await f[d(194)];
        l[d(1449)]({ key: g, value: h, alwaysSet: f.alwaysSet });
      }
      return l;
    })[t(667)]((d) => e0[t(1684)](e, d)) : e0[t(1684)](e, u);
  }
  get [r(1913)]() {
    const x = r;
    return this._def[x(1913)]();
  }
  [r(1371)](x) {
    const t = r;
    return ae[t(2430)], new Ke({ ...this[t(2289)], unknownKeys: t(1371), ...x !== void 0 ? { errorMap: (a, e) => {
      var i, c;
      const s = t, n = ((c = (i = this._def)[s(770)]) == null ? void 0 : c.call(i, a, e).message) ?? e[s(216)];
      return a[s(2152)] === s(2783) ? { message: ae[s(2430)](x).message ?? n } : { message: n };
    } } : {} });
  }
  [r(1199)]() {
    const x = r;
    return new Ke({ ...this._def, unknownKeys: x(1199) });
  }
  passthrough() {
    const x = r;
    return new Ke({ ...this[x(2289)], unknownKeys: x(172) });
  }
  [r(2417)](x) {
    const t = r;
    return new Ke({ ...this._def, shape: () => ({ ...this[t(2289)][t(1913)](), ...x }) });
  }
  merge(x) {
    const t = r;
    return new Ke({ unknownKeys: x[t(2289)][t(158)], catchall: x[t(2289)][t(904)], shape: () => ({ ...this[t(2289)][t(1913)](), ...x[t(2289)].shape() }), typeName: he[t(2507)] });
  }
  setKey(x, t) {
    return this.augment({ [x]: t });
  }
  [r(904)](x) {
    const t = r;
    return new Ke({ ...this[t(2289)], catchall: x });
  }
  [r(2760)](x) {
    const t = r, a = {};
    for (const e of Ne.objectKeys(x))
      x[e] && this[t(1913)][e] && (a[e] = this[t(1913)][e]);
    return new Ke({ ...this[t(2289)], shape: () => a });
  }
  omit(x) {
    const t = r, a = {};
    for (const e of Ne[t(1417)](this.shape))
      !x[e] && (a[e] = this.shape[e]);
    return new Ke({ ...this[t(2289)], shape: () => a });
  }
  [r(1146)]() {
    return z0(this);
  }
  [r(1456)](x) {
    const t = r, a = {};
    for (const e of Ne[t(1417)](this[t(1913)])) {
      const s = this[t(1913)][e];
      x && !x[e] ? a[e] = s : a[e] = s[t(613)]();
    }
    return new Ke({ ...this[t(2289)], shape: () => a });
  }
  required(x) {
    const t = r, a = {};
    for (const e of Ne[t(1417)](this[t(1913)]))
      if (x && !x[e]) a[e] = this[t(1913)][e];
      else {
        let n = this.shape[e];
        for (; n instanceof S0; )
          n = n[t(2289)][t(1722)];
        a[e] = n;
      }
    return new Ke({ ...this[t(2289)], shape: () => a });
  }
  keyof() {
    const x = r;
    return js(Ne[x(1417)](this[x(1913)]));
  }
}
Ke[r(186)] = (o, x) => {
  const t = r;
  return new Ke({ shape: () => o, unknownKeys: "strip", catchall: R0.create(), typeName: he[t(2507)], ...we(x) });
}, Ke[r(1107)] = (o, x) => {
  const t = r;
  return new Ke({ shape: () => o, unknownKeys: t(1371), catchall: R0[t(186)](), typeName: he[t(2507)], ...we(x) });
}, Ke[r(1036)] = (o, x) => {
  const t = r;
  return new Ke({ shape: o, unknownKeys: t(1199), catchall: R0[t(186)](), typeName: he.ZodObject, ...we(x) });
};
class vx extends _e {
  _parse(x) {
    const t = r, { ctx: a } = this[t(2859)](x), e = this[t(2289)][t(278)];
    function s(n) {
      const i = t;
      for (const u of n)
        if (u[i(2074)][i(1474)] === i(996)) return u.result;
      for (const u of n)
        if (u[i(2074)][i(1474)] === i(2600)) return a[i(1929)][i(2145)].push(...u.ctx[i(1929)][i(2145)]), u[i(2074)];
      const c = n.map((u) => new P0(u[i(2562)][i(1929)][i(2145)]));
      return ee(a, { code: W[i(1672)], unionErrors: c }), fe;
    }
    if (a[t(1929)][t(1180)]) return Promise[t(1087)](e[t(1622)](async (n) => {
      const i = t, c = { ...a, common: { ...a.common, issues: [] }, parent: null };
      return { result: await n[i(1700)]({ data: a[i(2516)], path: a.path, parent: c }), ctx: c };
    }))[t(667)](s);
    {
      let n;
      const i = [];
      for (const u of e) {
        const d = { ...a, common: { ...a[t(1929)], issues: [] }, parent: null }, l = u[t(984)]({ data: a[t(2516)], path: a[t(632)], parent: d });
        if (l[t(1474)] === t(996)) return l;
        l[t(1474)] === t(2600) && !n && (n = { result: l, ctx: d }), d[t(1929)].issues[t(2236)] && i[t(1449)](d.common[t(2145)]);
      }
      if (n) return a.common.issues.push(...n[t(2562)][t(1929)][t(2145)]), n[t(2074)];
      const c = i[t(1622)]((u) => new P0(u));
      return ee(a, { code: W[t(1672)], unionErrors: c }), fe;
    }
  }
  get [r(278)]() {
    return this[r(2289)].options;
  }
}
vx[r(186)] = (o, x) => {
  const t = r;
  return new vx({ options: o, typeName: he[t(2702)], ...we(x) });
};
const y0 = (o) => {
  const x = r;
  return o instanceof Kt ? y0(o[x(2427)]) : o instanceof q0 ? y0(o[x(1722)]()) : o instanceof kx ? [o.value] : o instanceof D0 ? o[x(278)] : o instanceof Gt ? Ne.objectValues(o[x(1346)]) : o instanceof Ix ? y0(o[x(2289)][x(1722)]) : o instanceof Ht ? [void 0] : o instanceof Vt ? [null] : o instanceof S0 ? [void 0, ...y0(o[x(1891)]())] : o instanceof j0 ? [null, ...y0(o[x(1891)]())] : o instanceof Ms || o instanceof Cx ? y0(o[x(1891)]()) : o instanceof Ex ? y0(o._def[x(1722)]) : [];
};
class nr extends _e {
  [r(979)](x) {
    const t = r, { ctx: a } = this[t(2859)](x);
    if (a[t(311)] !== re[t(1606)]) return ee(a, { code: W[t(465)], expected: re.object, received: a[t(311)] }), fe;
    const e = this.discriminator, s = a[t(2516)][e], n = this[t(2306)][t(2157)](s);
    return n ? a[t(1929)].async ? n._parseAsync({ data: a.data, path: a[t(632)], parent: a }) : n[t(984)]({ data: a[t(2516)], path: a[t(632)], parent: a }) : (ee(a, { code: W[t(2032)], options: Array[t(2852)](this.optionsMap[t(460)]()), path: [e] }), fe);
  }
  get discriminator() {
    const x = r;
    return this[x(2289)][x(2397)];
  }
  get options() {
    const x = r;
    return this._def[x(278)];
  }
  get [r(2306)]() {
    return this[r(2289)].optionsMap;
  }
  static create(x, t, a) {
    const e = r, s = /* @__PURE__ */ new Map();
    for (const n of t) {
      const i = y0(n[e(1913)][x]);
      if (!i[e(2236)]) throw new Error("A discriminator value for key `" + x + e(471));
      for (const c of i) {
        if (s[e(2302)](c)) throw new Error(e(336) + String(x) + " has duplicate value " + String(c));
        s[e(2104)](c, n);
      }
    }
    return new nr({ typeName: he.ZodDiscriminatedUnion, discriminator: x, options: t, optionsMap: s, ...we(a) });
  }
}
function Wt(o, x) {
  const t = r, a = E0(o), e = E0(x);
  if (o === x) return { valid: !0, data: o };
  if (a === re[t(1606)] && e === re.object) {
    const s = Ne.objectKeys(x), n = Ne[t(1417)](o)[t(1665)]((c) => s[t(1686)](c) !== -1), i = { ...o, ...x };
    for (const c of n) {
      const u = Wt(o[c], x[c]);
      if (!u[t(996)]) return { valid: !1 };
      i[c] = u.data;
    }
    return { valid: !0, data: i };
  } else if (a === re[t(2762)] && e === re[t(2762)]) {
    if (o[t(2236)] !== x.length) return { valid: !1 };
    const s = [];
    for (let n = 0; n < o.length; n++) {
      const i = o[n], c = x[n], u = Wt(i, c);
      if (!u.valid) return { valid: !1 };
      s.push(u.data);
    }
    return { valid: !0, data: s };
  } else return a === re[t(1846)] && e === re.date && +o == +x ? { valid: !0, data: o } : { valid: !1 };
}
class wx extends _e {
  [r(979)](x) {
    const t = r, { status: a, ctx: e } = this[t(2859)](x), s = (n, i) => {
      const c = t;
      if (Fr(n) || Fr(i)) return fe;
      const u = Wt(n.value, i[c(194)]);
      return u[c(996)] ? ((Nr(n) || Nr(i)) && a[c(2600)](), { status: a.value, value: u[c(2516)] }) : (ee(e, { code: W[c(2414)] }), fe);
    };
    return e.common[t(1180)] ? Promise.all([this[t(2289)][t(1183)][t(1700)]({ data: e[t(2516)], path: e[t(632)], parent: e }), this[t(2289)][t(1526)][t(1700)]({ data: e[t(2516)], path: e[t(632)], parent: e })])[t(667)](([n, i]) => s(n, i)) : s(this[t(2289)].left[t(984)]({ data: e.data, path: e[t(632)], parent: e }), this[t(2289)][t(1526)]._parseSync({ data: e[t(2516)], path: e[t(632)], parent: e }));
  }
}
wx[r(186)] = (o, x, t) => {
  const a = r;
  return new wx({ left: o, right: x, typeName: he[a(2087)], ...we(t) });
};
class O0 extends _e {
  [r(979)](x) {
    const t = r, { status: a, ctx: e } = this[t(2859)](x);
    if (e[t(311)] !== re[t(2762)]) return ee(e, { code: W[t(465)], expected: re[t(2762)], received: e.parsedType }), fe;
    if (e.data[t(2236)] < this._def[t(2230)][t(2236)]) return ee(e, { code: W[t(2449)], minimum: this[t(2289)][t(2230)][t(2236)], inclusive: !0, exact: !1, type: t(2762) }), fe;
    !this[t(2289)].rest && e.data[t(2236)] > this[t(2289)][t(2230)][t(2236)] && (ee(e, { code: W[t(2204)], maximum: this[t(2289)][t(2230)][t(2236)], inclusive: !0, exact: !1, type: "array" }), a[t(2600)]());
    const n = [...e[t(2516)]][t(1622)]((i, c) => {
      const u = t, d = this[u(2289)][u(2230)][c] || this._def.rest;
      return d ? d[u(979)](new p0(e, i, e.path, c)) : null;
    }).filter((i) => !!i);
    return e[t(1929)][t(1180)] ? Promise[t(1087)](n)[t(667)]((i) => e0.mergeArray(a, i)) : e0[t(283)](a, n);
  }
  get [r(2230)]() {
    const x = r;
    return this._def[x(2230)];
  }
  rest(x) {
    const t = r;
    return new O0({ ...this[t(2289)], rest: x });
  }
}
O0[r(186)] = (o, x) => {
  const t = r;
  if (!Array[t(2224)](o)) throw new Error(t(1351));
  return new O0({ items: o, typeName: he.ZodTuple, rest: null, ...we(x) });
};
class Sx extends _e {
  get keySchema() {
    return this._def.keyType;
  }
  get [r(2229)]() {
    const x = r;
    return this[x(2289)][x(200)];
  }
  [r(979)](x) {
    const t = r, { status: a, ctx: e } = this[t(2859)](x);
    if (e[t(311)] !== re.object) return ee(e, { code: W.invalid_type, expected: re.object, received: e[t(311)] }), fe;
    const s = [], n = this[t(2289)].keyType, i = this._def.valueType;
    for (const c in e[t(2516)])
      s[t(1449)]({ key: n._parse(new p0(e, c, e.path, c)), value: i[t(979)](new p0(e, e[t(2516)][c], e[t(632)], c)), alwaysSet: c in e[t(2516)] });
    return e.common.async ? e0[t(1058)](a, s) : e0[t(1684)](a, s);
  }
  get element() {
    const x = r;
    return this._def[x(200)];
  }
  static [r(186)](x, t, a) {
    const e = r;
    return t instanceof _e ? new Sx({ keyType: x, valueType: t, typeName: he.ZodRecord, ...we(a) }) : new Sx({ keyType: w0[e(186)](), valueType: x, typeName: he[e(1162)], ...we(t) });
  }
}
class Ar extends _e {
  get [r(2290)]() {
    return this[r(2289)].keyType;
  }
  get [r(2229)]() {
    return this[r(2289)].valueType;
  }
  [r(979)](x) {
    const t = r, { status: a, ctx: e } = this[t(2859)](x);
    if (e.parsedType !== re[t(1622)]) return ee(e, { code: W[t(465)], expected: re[t(1622)], received: e[t(311)] }), fe;
    const s = this[t(2289)][t(2691)], n = this[t(2289)][t(200)], i = [...e[t(2516)][t(2813)]()][t(1622)](([c, u], d) => {
      const l = t;
      return { key: s[l(979)](new p0(e, c, e[l(632)], [d, l(1411)])), value: n[l(979)](new p0(e, u, e.path, [d, l(194)])) };
    });
    if (e[t(1929)][t(1180)]) {
      const c = /* @__PURE__ */ new Map();
      return Promise.resolve()[t(667)](async () => {
        const u = t;
        for (const d of i) {
          const l = await d[u(1411)], f = await d[u(194)];
          if (l.status === u(2294) || f[u(1474)] === u(2294)) return fe;
          (l[u(1474)] === u(2600) || f.status === u(2600)) && a[u(2600)](), c[u(2104)](l.value, f[u(194)]);
        }
        return { status: a[u(194)], value: c };
      });
    } else {
      const c = /* @__PURE__ */ new Map();
      for (const u of i) {
        const d = u[t(1411)], l = u[t(194)];
        if (d[t(1474)] === t(2294) || l.status === t(2294)) return fe;
        (d[t(1474)] === "dirty" || l.status === t(2600)) && a[t(2600)](), c[t(2104)](d[t(194)], l[t(194)]);
      }
      return { status: a.value, value: c };
    }
  }
}
Ar[r(186)] = (o, x, t) => new Ar({ valueType: x, keyType: o, typeName: he.ZodMap, ...we(t) });
class sx extends _e {
  [r(979)](x) {
    const t = r, { status: a, ctx: e } = this[t(2859)](x);
    if (e.parsedType !== re[t(2104)]) return ee(e, { code: W[t(465)], expected: re[t(2104)], received: e[t(311)] }), fe;
    const s = this._def;
    s.minSize !== null && e[t(2516)][t(2270)] < s[t(568)][t(194)] && (ee(e, { code: W[t(2449)], minimum: s[t(568)][t(194)], type: t(2104), inclusive: !0, exact: !1, message: s.minSize[t(1354)] }), a[t(2600)]()), s[t(2364)] !== null && e[t(2516)][t(2270)] > s.maxSize.value && (ee(e, { code: W[t(2204)], maximum: s[t(2364)].value, type: t(2104), inclusive: !0, exact: !1, message: s[t(2364)][t(1354)] }), a[t(2600)]());
    const n = this[t(2289)][t(200)];
    function i(u) {
      const d = t, l = /* @__PURE__ */ new Set();
      for (const f of u) {
        if (f[d(1474)] === d(2294)) return fe;
        f.status === "dirty" && a[d(2600)](), l[d(2140)](f.value);
      }
      return { status: a[d(194)], value: l };
    }
    const c = [...e[t(2516)][t(2529)]()][t(1622)]((u, d) => n._parse(new p0(e, u, e[t(632)], d)));
    return e[t(1929)][t(1180)] ? Promise.all(c)[t(667)]((u) => i(u)) : i(c);
  }
  [r(2191)](x, t) {
    const a = r;
    return new sx({ ...this[a(2289)], minSize: { value: x, message: ae[a(1525)](t) } });
  }
  [r(2499)](x, t) {
    const a = r;
    return new sx({ ...this[a(2289)], maxSize: { value: x, message: ae[a(1525)](t) } });
  }
  size(x, t) {
    const a = r;
    return this[a(2191)](x, t)[a(2499)](x, t);
  }
  nonempty(x) {
    return this[r(2191)](1, x);
  }
}
sx[r(186)] = (o, x) => {
  const t = r;
  return new sx({ valueType: o, minSize: null, maxSize: null, typeName: he[t(2139)], ...we(x) });
};
class Kt extends _e {
  get schema() {
    const x = r;
    return this[x(2289)][x(348)]();
  }
  [r(979)](x) {
    const t = r, { ctx: a } = this[t(2859)](x);
    return this[t(2289)][t(348)]()[t(979)]({ data: a[t(2516)], path: a[t(632)], parent: a });
  }
}
Kt[r(186)] = (o, x) => new Kt({ getter: o, typeName: he.ZodLazy, ...we(x) });
class kx extends _e {
  [r(979)](x) {
    const t = r;
    if (x.data !== this[t(2289)][t(194)]) {
      const a = this[t(1375)](x);
      return ee(a, { received: a[t(2516)], code: W[t(1743)], expected: this[t(2289)].value }), fe;
    }
    return { status: t(996), value: x.data };
  }
  get value() {
    const x = r;
    return this[x(2289)][x(194)];
  }
}
kx.create = (o, x) => {
  const t = r;
  return new kx({ value: o, typeName: he[t(502)], ...we(x) });
};
function js(o, x) {
  return new D0({ values: o, typeName: he.ZodEnum, ...we(x) });
}
class D0 extends _e {
  _parse(x) {
    const t = r;
    if (typeof x[t(2516)] !== t(1736)) {
      const a = this[t(1375)](x), e = this._def[t(2529)];
      return ee(a, { expected: Ne[t(1685)](e), received: a[t(311)], code: W[t(465)] }), fe;
    }
    if (!this[t(541)] && (this[t(541)] = new Set(this[t(2289)][t(2529)])), !this[t(541)][t(2302)](x[t(2516)])) {
      const a = this[t(1375)](x), e = this[t(2289)][t(2529)];
      return ee(a, { received: a[t(2516)], code: W[t(806)], options: e }), fe;
    }
    return r0(x[t(2516)]);
  }
  get options() {
    const x = r;
    return this[x(2289)][x(2529)];
  }
  get [r(1346)]() {
    const x = r, t = {};
    for (const a of this[x(2289)][x(2529)])
      t[a] = a;
    return t;
  }
  get [r(2335)]() {
    const x = r, t = {};
    for (const a of this[x(2289)][x(2529)])
      t[a] = a;
    return t;
  }
  get Enum() {
    const x = r, t = {};
    for (const a of this[x(2289)][x(2529)])
      t[a] = a;
    return t;
  }
  [r(2863)](x, t = this[r(2289)]) {
    const a = r;
    return D0.create(x, { ...this[a(2289)], ...t });
  }
  [r(2642)](x, t = this[r(2289)]) {
    const a = r;
    return D0[a(186)](this.options.filter((e) => !x[a(408)](e)), { ...this[a(2289)], ...t });
  }
}
D0.create = js;
class Gt extends _e {
  [r(979)](x) {
    const t = r, a = Ne[t(237)](this[t(2289)][t(2529)]), e = this[t(1375)](x);
    if (e[t(311)] !== re.string && e[t(311)] !== re.number) {
      const s = Ne[t(2262)](a);
      return ee(e, { expected: Ne[t(1685)](s), received: e[t(311)], code: W[t(465)] }), fe;
    }
    if (!this._cache && (this[t(541)] = new Set(Ne[t(237)](this[t(2289)][t(2529)]))), !this._cache.has(x[t(2516)])) {
      const s = Ne.objectValues(a);
      return ee(e, { received: e[t(2516)], code: W[t(806)], options: s }), fe;
    }
    return r0(x[t(2516)]);
  }
  get [r(1346)]() {
    return this[r(2289)].values;
  }
}
Gt.create = (o, x) => new Gt({ values: o, typeName: he.ZodNativeEnum, ...we(x) });
class Px extends _e {
  [r(1891)]() {
    const x = r;
    return this._def[x(2390)];
  }
  [r(979)](x) {
    const t = r, { ctx: a } = this[t(2859)](x);
    if (a[t(311)] !== re[t(1424)] && a[t(1929)].async === !1) return ee(a, { code: W[t(465)], expected: re[t(1424)], received: a[t(311)] }), fe;
    const e = a.parsedType === re[t(1424)] ? a[t(2516)] : Promise[t(753)](a[t(2516)]);
    return r0(e[t(667)]((s) => {
      const n = t;
      return this[n(2289)][n(2390)].parseAsync(s, { path: a[n(632)], errorMap: a[n(1929)][n(1499)] });
    }));
  }
}
Px[r(186)] = (o, x) => {
  const t = r;
  return new Px({ type: o, typeName: he[t(619)], ...we(x) });
};
class q0 extends _e {
  [r(1722)]() {
    const x = r;
    return this[x(2289)][x(2427)];
  }
  [r(2334)]() {
    const x = r;
    return this[x(2289)][x(2427)]._def[x(2063)] === he.ZodEffects ? this[x(2289)].schema[x(2334)]() : this[x(2289)][x(2427)];
  }
  _parse(x) {
    const t = r, { status: a, ctx: e } = this[t(2859)](x), s = this[t(2289)][t(2692)] || null, n = { addIssue: (i) => {
      const c = t;
      ee(e, i), i[c(2711)] ? a[c(1145)]() : a[c(2600)]();
    }, get path() {
      return e[t(632)];
    } };
    if (n[t(862)] = n[t(862)].bind(n), s.type === t(2916)) {
      const i = s[t(847)](e[t(2516)], n);
      if (e[t(1929)][t(1180)]) return Promise[t(753)](i)[t(667)](async (c) => {
        const u = t;
        if (a[u(194)] === u(2294)) return fe;
        const d = await this._def[u(2427)][u(1700)]({ data: c, path: e[u(632)], parent: e });
        return d[u(1474)] === u(2294) ? fe : d[u(1474)] === u(2600) || a[u(194)] === u(2600) ? X0(d[u(194)]) : d;
      });
      {
        if (a[t(194)] === t(2294)) return fe;
        const c = this[t(2289)].schema[t(984)]({ data: i, path: e[t(632)], parent: e });
        return c.status === t(2294) ? fe : c[t(1474)] === t(2600) || a[t(194)] === "dirty" ? X0(c[t(194)]) : c;
      }
    }
    if (s[t(2390)] === t(2594)) {
      const i = (c) => {
        const u = t, d = s[u(2594)](c, n);
        if (e[u(1929)].async) return Promise.resolve(d);
        if (d instanceof Promise) throw new Error("Async refinement encountered during synchronous parse operation. Use .parseAsync instead.");
        return c;
      };
      if (e[t(1929)][t(1180)] === !1) {
        const c = this[t(2289)][t(2427)][t(984)]({ data: e[t(2516)], path: e.path, parent: e });
        return c[t(1474)] === t(2294) ? fe : (c[t(1474)] === t(2600) && a[t(2600)](), i(c[t(194)]), { status: a[t(194)], value: c.value });
      } else return this[t(2289)][t(2427)][t(1700)]({ data: e[t(2516)], path: e[t(632)], parent: e })[t(667)]((c) => {
        const u = t;
        return c.status === "aborted" ? fe : (c[u(1474)] === u(2600) && a[u(2600)](), i(c[u(194)])[u(667)](() => {
          const d = u;
          return { status: a[d(194)], value: c[d(194)] };
        }));
      });
    }
    if (s[t(2390)] === t(847))
      if (e[t(1929)][t(1180)] === !1) {
        const i = this._def[t(2427)][t(984)]({ data: e[t(2516)], path: e[t(632)], parent: e });
        if (!V0(i)) return fe;
        const c = s[t(847)](i[t(194)], n);
        if (c instanceof Promise) throw new Error(t(2618));
        return { status: a[t(194)], value: c };
      } else return this[t(2289)].schema[t(1700)]({ data: e[t(2516)], path: e[t(632)], parent: e })[t(667)]((i) => {
        const c = t;
        return V0(i) ? Promise.resolve(s.transform(i[c(194)], n))[c(667)]((u) => ({ status: a[c(194)], value: u })) : fe;
      });
    Ne[t(513)](s);
  }
}
q0.create = (o, x, t) => {
  const a = r;
  return new q0({ schema: o, typeName: he[a(992)], effect: x, ...we(t) });
}, q0[r(2448)] = (o, x, t) => {
  const a = r;
  return new q0({ schema: x, effect: { type: "preprocess", transform: o }, typeName: he[a(992)], ...we(t) });
};
class S0 extends _e {
  [r(979)](x) {
    const t = r;
    return this._getType(x) === re[t(233)] ? r0(void 0) : this._def.innerType[t(979)](x);
  }
  [r(1891)]() {
    return this[r(2289)].innerType;
  }
}
S0[r(186)] = (o, x) => {
  const t = r;
  return new S0({ innerType: o, typeName: he[t(2358)], ...we(x) });
};
class j0 extends _e {
  [r(979)](x) {
    const t = r;
    return this[t(2331)](x) === re[t(2450)] ? r0(null) : this[t(2289)][t(1722)]._parse(x);
  }
  unwrap() {
    const x = r;
    return this[x(2289)][x(1722)];
  }
}
j0.create = (o, x) => {
  const t = r;
  return new j0({ innerType: o, typeName: he[t(290)], ...we(x) });
};
class Ix extends _e {
  [r(979)](x) {
    const t = r, { ctx: a } = this._processInputParams(x);
    let e = a[t(2516)];
    return a[t(311)] === re[t(233)] && (e = this[t(2289)][t(1793)]()), this[t(2289)][t(1722)][t(979)]({ data: e, path: a.path, parent: a });
  }
  removeDefault() {
    return this[r(2289)].innerType;
  }
}
Ix.create = (o, x) => {
  const t = r;
  return new Ix({ innerType: o, typeName: he[t(1327)], defaultValue: typeof x[t(1770)] === t(2279) ? x.default : () => x[t(1770)], ...we(x) });
};
class Ex extends _e {
  [r(979)](x) {
    const t = r, { ctx: a } = this[t(2859)](x), e = { ...a, common: { ...a[t(1929)], issues: [] } }, s = this._def[t(1722)][t(979)]({ data: e[t(2516)], path: e[t(632)], parent: { ...e } });
    return gx(s) ? s[t(667)]((n) => {
      const i = t;
      return { status: i(996), value: n[i(1474)] === i(996) ? n[i(194)] : this[i(2289)][i(1818)]({ get error() {
        const c = i;
        return new P0(e[c(1929)][c(2145)]);
      }, input: e[i(2516)] }) };
    }) : { status: t(996), value: s.status === t(996) ? s.value : this[t(2289)][t(1818)]({ get error() {
      const n = t;
      return new P0(e[n(1929)][n(2145)]);
    }, input: e.data }) };
  }
  removeCatch() {
    const x = r;
    return this[x(2289)][x(1722)];
  }
}
Ex[r(186)] = (o, x) => {
  const t = r;
  return new Ex({ innerType: o, typeName: he[t(723)], catchValue: typeof x[t(1095)] === t(2279) ? x[t(1095)] : () => x[t(1095)], ...we(x) });
};
class Or extends _e {
  _parse(x) {
    const t = r;
    if (this[t(2331)](x) !== re[t(2663)]) {
      const e = this[t(1375)](x);
      return ee(e, { code: W[t(465)], expected: re[t(2663)], received: e[t(311)] }), fe;
    }
    return { status: t(996), value: x[t(2516)] };
  }
}
Or.create = (o) => new Or({ typeName: he.ZodNaN, ...we(o) });
class Ms extends _e {
  [r(979)](x) {
    const t = r, { ctx: a } = this[t(2859)](x), e = a[t(2516)];
    return this[t(2289)][t(2390)][t(979)]({ data: e, path: a[t(632)], parent: a });
  }
  [r(1891)]() {
    return this._def.type;
  }
}
class or extends _e {
  [r(979)](x) {
    const t = r, { status: a, ctx: e } = this[t(2859)](x);
    if (e[t(1929)][t(1180)])
      return (async () => {
        const n = t, i = await this[n(2289)].in._parseAsync({ data: e[n(2516)], path: e[n(632)], parent: e });
        return i[n(1474)] === n(2294) ? fe : i.status === n(2600) ? (a[n(2600)](), X0(i[n(194)])) : this[n(2289)][n(1321)][n(1700)]({ data: i.value, path: e[n(632)], parent: e });
      })();
    {
      const s = this._def.in._parseSync({ data: e[t(2516)], path: e[t(632)], parent: e });
      return s[t(1474)] === t(2294) ? fe : s[t(1474)] === t(2600) ? (a.dirty(), { status: t(2600), value: s[t(194)] }) : this[t(2289)][t(1321)][t(984)]({ data: s[t(194)], path: e[t(632)], parent: e });
    }
  }
  static [r(186)](x, t) {
    const a = r;
    return new or({ in: x, out: t, typeName: he[a(941)] });
  }
}
class Cx extends _e {
  _parse(x) {
    const t = r, a = this[t(2289)].innerType[t(979)](x), e = (s) => {
      const n = t;
      return V0(s) && (s.value = Object[n(889)](s[n(194)])), s;
    };
    return gx(a) ? a[t(667)]((s) => e(s)) : e(a);
  }
  [r(1891)]() {
    return this[r(2289)].innerType;
  }
}
Cx.create = (o, x) => {
  const t = r;
  return new Cx({ innerType: o, typeName: he[t(1357)], ...we(x) });
};
function Dr(o, x) {
  const t = r, a = typeof o === t(2279) ? o(x) : typeof o === t(1736) ? { message: o } : o;
  return typeof a === t(1736) ? { message: a } : a;
}
function co(o, x = {}, t) {
  const a = r;
  return o ? ax.create().superRefine((e, s) => {
    const n = K, i = o(e);
    if (i instanceof Promise) return i[n(667)]((c) => {
      const u = n;
      if (!c) {
        const d = Dr(x, e), l = d[u(2711)] ?? t ?? !0;
        s.addIssue({ code: u(2662), ...d, fatal: l });
      }
    });
    if (!i) {
      const c = Dr(x, e), u = c[n(2711)] ?? t ?? !0;
      s.addIssue({ code: "custom", ...c, fatal: u });
    }
  }) : ax[a(186)]();
}
var he;
(function(o) {
  const x = r;
  o.ZodString = x(1697), o[x(291)] = "ZodNumber", o[x(1964)] = x(1964), o[x(2453)] = x(2453), o[x(879)] = x(879), o[x(1132)] = x(1132), o[x(2872)] = x(2872), o.ZodUndefined = x(925), o[x(2269)] = x(2269), o[x(2468)] = x(2468), o.ZodUnknown = x(2337), o.ZodNever = x(494), o[x(1559)] = x(1559), o[x(2519)] = x(2519), o[x(2507)] = "ZodObject", o.ZodUnion = x(2702), o[x(761)] = x(761), o.ZodIntersection = "ZodIntersection", o.ZodTuple = x(202), o[x(1162)] = x(1162), o[x(2042)] = x(2042), o[x(2139)] = x(2139), o[x(819)] = x(819), o[x(585)] = x(585), o[x(502)] = "ZodLiteral", o[x(1182)] = x(1182), o[x(992)] = x(992), o[x(1386)] = x(1386), o[x(2358)] = "ZodOptional", o.ZodNullable = x(290), o.ZodDefault = x(1327), o.ZodCatch = x(723), o.ZodPromise = x(619), o[x(2905)] = "ZodBranded", o[x(941)] = "ZodPipeline", o[x(1357)] = x(1357);
})(he || (he = {}));
const zx = (o, x = { message: r(2251) + o[r(492)] }) => co((t) => t instanceof o, x), b = w0.create, Z = B0[r(186)], Q = zt[r(186)], ve = ax[r(186)], k0 = Bt[r(186)];
R0[r(186)];
const J0 = Zt.create, Se = h0[r(186)], S = Ke.create, Ve = vx[r(186)], Ls = nr[r(186)];
wx[r(186)], O0[r(186)];
const qe = Sx.create, xe = kx.create, Ie = D0[r(186)];
Px[r(186)];
const B = S0[r(186)];
j0[r(186)];
var rs;
class uo {
  constructor(x, t) {
    me(this, rs);
    me(this, "nodeId");
    const a = r;
    this.graphInstance = x, this[a(767)] = t;
  }
  get [(rs = r(389), r(2705))]() {
    const x = r, t = this[x(389)][x(1419)](this[x(767)]);
    if (!t) throw new Error(x(1804) + this[x(767)]);
    return t;
  }
  get [r(1999)]() {
    const x = r, t = this.graphInstance.getDefinition()[x(1103)](this[x(767)]);
    if (!t) throw new Error(x(945) + this.nodeId);
    return new Proxy({}, { get: (e, s) => {
      const n = x;
      if (typeof s != "string") return;
      const i = t[n(1999)][s], c = s.startsWith(n(654));
      if (!i && !c) throw new Error("Action " + s + " not found for node " + this[n(767)]);
      return async (u, d) => {
        const l = n, f = this[l(1152)]();
        if (!f) throw new Error("No connection available for node " + this[l(767)]);
        const { transport: g, path: h } = f, m = this[l(389)][l(250)]();
        if (!(i != null && i[l(243)])) {
          const k = ve();
          let P;
          if (h[l(2236)] === 2) P = await g[l(1190)]({ method: l(1637), params: { action: s, data: u, sourceNodeId: m } }, k);
          else try {
            P = await g.request({ method: l(1637), params: { action: l(1933), data: { targetNodeId: this.nodeId, targetAction: s, targetData: u, forwardPath: h[l(771)](1) }, sourceNodeId: m } }, k);
          } catch (N) {
            throw console[l(2484)](l(1658) + s + ":", N), console[l(2484)]({ targetNodeId: this.nodeId, targetAction: s, targetData: u, forwardPath: h[l(771)](1) }), N;
          }
          return P;
        }
        let v;
        return h.length === 2 ? v = g[l(1120)]({ action: s, data: u, sourceNodeId: m }, i[l(1476)], d) : v = g.streamRequest({ action: l(1933), data: { targetNodeId: this[l(767)], targetAction: s, targetData: u, forwardPath: h[l(771)](1) }, sourceNodeId: m }, i.responseSchema, d), v;
      };
    } });
  }
  [r(1152)]() {
    const x = r;
    return this[x(389)][x(1125)](this.nodeId);
  }
}
var as, ss;
class $s {
  constructor(x) {
    me(this, "graphInstance");
    me(this, ss);
    me(this, as);
    const t = r;
    this[t(389)] = x, this[t(2770)] = x[t(2770)], this.broadcastManager = x[t(2690)];
  }
  [(ss = r(2770), as = r(2690), r(2006))]({ store: x, storeName: t, onStateUpdate: a, requestInitialState: e }) {
    const s = r;
    this.broadcastManager[s(2394)](s(1508) + t, (n) => {
      const i = s;
      try {
        n.sourceNodeId !== this.graphInstance.getCurrentNodeId() && a(n.stateUpdate);
      } catch (c) {
        console.error(i(1004) + t + ":", c);
      }
    });
  }
  [r(1633)]({ store: x, storeName: t, sendStateUpdate: a, onInitialStateRequested: e }) {
    const s = r, n = this[s(389)][s(250)](), i = async (d, l = !1) => {
      const f = s;
      if (this.isTransportReady()) try {
        await this.broadcastManager[f(381)]("store:update:" + t, { storeName: t, sourceNodeId: n, stateUpdate: d, isInitialState: l });
      } catch (h) {
        console[f(2484)](f(927) + t + ":", h);
      }
    }, c = x[s(1041)]((d) => {
      i(d, !1);
    });
    e(() => {
      i(x[s(2412)](), !0);
    });
    const u = s(2059) + t;
    return this[s(2770)].implementInternalAction(u, async () => {
      const d = s, l = x[d(2412)]();
      return await i(l, !0), { success: !0 };
    }), this.broadcastManager[s(2394)]("__connection_established", async (d) => {
      const l = s;
      try {
        (d.toNode === n || d[l(302)] === n) && await i(x[l(2412)](), !0);
      } catch {
      }
    }), () => {
      var l;
      const d = s;
      c(), (l = this.actionManager[d(2313)]) == null || l[d(1344)](u);
    };
  }
  [r(2838)]() {
    var t;
    const x = r;
    try {
      const a = this[x(389)][x(2880)], e = a && a[x(2881)]() > 0, s = ((t = this[x(2690)][x(451)]) == null ? void 0 : t[x(2270)]) > 0;
      return e || s;
    } catch {
      return !!this[x(2690)];
    }
  }
  async broadcastCurrentState(x, t) {
    const a = r, e = this[a(389)].getCurrentNodeId();
    if (this[a(2838)]()) try {
      await this[a(2690)][a(381)]("store:update:" + t, { storeName: t, sourceNodeId: e, stateUpdate: x[a(2412)](), isInitialState: !0 });
    } catch {
    }
  }
}
function lo({ graphInstance: o, store: x, name: t }) {
  const a = new $s(o), e = (n) => {
    const i = K, c = x.getState(), u = { ...c, ...n };
    x[i(968)](u);
  }, s = async () => {
    const n = K, i = n(2059) + t;
    try {
      const c = o[n(1103)](t);
      c && c.actions && c[n(1999)][i] && await c.actions[i]();
    } catch (c) {
      console[n(816)](n(1443) + t + ":", c);
    }
  };
  a.initializeConsumer({ store: x, storeName: t, onStateUpdate: e, requestInitialState: s });
}
function fo({ graphInstance: o, store: x, name: t }) {
  const a = r, e = new $s(o), s = async (i) => {
  }, n = (i) => {
  };
  return e[a(1633)]({ store: x, storeName: t, sendStateUpdate: s, onInitialStateRequested: n });
}
var ns, os;
class ho {
  constructor(x) {
    me(this, os, /* @__PURE__ */ new Map());
    me(this, ns, /* @__PURE__ */ new Map());
    me(this, "mountedTransports", /* @__PURE__ */ new Set());
    me(this, "currentNodeId");
    const t = r;
    this[t(351)] = x;
  }
  createGlobalDispatcherForType(x) {
    return (t) => {
      const a = K;
      if (t && t[a(2808)] === this[a(351)]) return;
      const e = this[a(2774)][a(2157)](x);
      if (e) {
        const { __origin: s, forwarded: n, ...i } = t || {};
        for (const c of e)
          try {
            c(i);
          } catch (u) {
            console[a(2484)](a(594) + x + ":", u);
          }
      }
      !t.forwarded && this[a(1609)](x, t);
    };
  }
  async [(os = r(2774), ns = r(728), r(1609))](x, t) {
    const a = r;
    try {
      const e = { ...t, forwarded: !0 }, s = [...Array.from(this[a(728)][a(2529)]()), ...Array[a(2852)](this[a(326)])], n = s[a(1622)]((i) => {
        const c = a;
        return i.notification({ method: "sdppp/broadcast", params: { messageType: x, message: e } })[c(1095)]((u) => {
          const d = c;
          console[d(2484)](d(2523) + x + ":", u);
        });
      });
      await Promise[a(1087)](n);
    } catch (e) {
      console[a(2484)](a(633), e);
    }
  }
  [r(2394)](x, t) {
    const a = r;
    !this.broadcastHandlers.has(x) && this[a(2774)][a(2104)](x, /* @__PURE__ */ new Set()), this[a(2774)].get(x)[a(2140)](t);
  }
  [r(2199)](x) {
    this[r(675)](x);
  }
  [r(675)](x) {
    const t = r, a = S({ method: xe(t(1629)), params: S({ messageType: b(), message: ve() }) });
    x.setNotificationHandler(a, async (e) => {
      const s = t, n = e.params.messageType;
      this.createGlobalDispatcherForType(n)(e[s(974)][s(1354)]);
    });
  }
  [r(2195)](x, t) {
    const a = r;
    this[a(728)][a(2104)](x, t), this[a(2199)](t);
  }
  removeMiddleware(x) {
    this[r(728)].delete(x);
  }
  async [r(381)](x, t) {
    const a = r, e = [...Array[a(2852)](this[a(728)][a(2529)]()), ...Array[a(2852)](this[a(326)])], s = e.map((n) => {
      const i = a;
      return n.notification({ method: i(1629), params: { messageType: x, message: t } });
    });
    await Promise[a(1087)](s);
  }
  [r(1256)](x) {
    const t = r;
    this[t(326)][t(2140)](x), this[t(2199)](x);
  }
  getHandlerTypes() {
    const x = r;
    return Array[x(2852)](this[x(2774)][x(460)]());
  }
  [r(327)]() {
    const x = r;
    this[x(2774)].clear(), this.transports[x(327)](), this[x(326)].clear();
  }
}
var is, cs;
class po {
  constructor(x, t, a) {
    me(this, "actionHandlers", /* @__PURE__ */ new Map());
    me(this, cs);
    me(this, "currentNodeId");
    me(this, is);
    const e = r;
    this.definition = x, this[e(351)] = t, this[e(1099)] = a;
  }
  [(cs = r(1139), is = r(1099), r(2550))](x, t) {
    const a = r, e = this[a(1139)][a(1103)](this[a(351)]);
    if (!e) throw new Error(a(945) + this.currentNodeId);
    const s = e[a(1999)][x];
    if (!s) throw new Error(a(175) + String(x) + " not found for node " + this[a(351)]);
    this[a(2317)](x, t, s), this[a(2313)].set(x, t);
  }
  validateHandlerType(x, t, a) {
    a.stream;
  }
  [r(2327)](x, t) {
    const a = r;
    this[a(2313)][a(2104)](x, t);
  }
  mountTo(x) {
    const t = r;
    for (const [a, e] of this[t(2313)]) {
      const s = this[t(1139)].getNode(this[t(351)]), n = s == null ? void 0 : s[t(1999)][a];
      if (a[t(2821)](t(654)) ? !1 : (n == null ? void 0 : n[t(243)]) === !0) {
        const u = S({ action: xe(a) });
        x[t(2154)](u, async function* (d, l, f) {
          const g = t, h = d[g(2516)] || d, m = e(h, l, f);
          if (m && typeof m === g(1606) && Symbol.asyncIterator in m) for await (const v of m)
            yield v === void 0 ? {} : v;
          else {
            const v = await m;
            yield v === void 0 ? {} : v;
          }
        });
      }
    }
    this[t(1207)](x), this[t(702)](x);
  }
  [r(1207)](x) {
    const t = S({ action: xe("__proxy_forward") }), a = this;
    x.registerStreamRequestorHandler(t, async function* (e, s, n) {
      const i = K, c = e.data || e, { targetNodeId: u, targetAction: d, targetData: l, forwardPath: f } = c;
      if (!f || f[i(2236)] === 0) throw new Error(i(2124));
      const g = f[0], h = f[i(771)](1);
      if (h[i(2236)] === 0 && g === a.currentNodeId) {
        const m = a[i(2313)][i(2157)](d);
        if (!m) throw new Error("Action " + d + i(983) + a[i(351)]);
        const v = m(l, s, n);
        if (v && typeof v === i(1606) && Symbol[i(1805)] in v) for await (const k of v)
          yield k === void 0 ? {} : k;
        else {
          const k = await v;
          yield k === void 0 ? {} : k;
        }
        return;
      }
      if (g === a.currentNodeId && h[i(2236)] > 0) {
        const m = h[0], v = a[i(1099)](m);
        if (v) {
          const k = await v.streamRequest({ action: i(1933), data: { targetNodeId: u, targetAction: d, targetData: l, forwardPath: h } }, S({}), n);
          for await (const P of k)
            yield P === void 0 ? {} : P;
          return;
        }
        throw new Error(i(2020) + m + i(1518));
      }
      throw new Error(i(818) + a[i(351)] + i(2782) + f);
    });
  }
  [r(2129)]() {
    const x = r;
    return Array[x(2852)](this[x(2313)][x(460)]());
  }
  hasAction(x) {
    const t = r;
    return this[t(2313)][t(2302)](x);
  }
  [r(208)](x) {
    const t = r;
    return this[t(2313)][t(2157)](x);
  }
  [r(327)]() {
    const x = r;
    this[x(2313)][x(327)]();
  }
  registerDirectRequestHandler(x, t, a) {
  }
  registerDirectRequestHandlerGeneric(x) {
    const t = r, a = S({ method: xe(t(1637)), params: S({ action: b(), data: ve()[t(613)]() }) }), e = this;
    x[t(2476)](a, async (s, n) => {
      const i = t, { action: c, data: u } = s[i(974)];
      if (c === i(1933)) return await e.handleDirectProxyForward(u, n);
      const d = e[i(2313)][i(2157)](c);
      if (!d) throw new Error(i(175) + c + i(983) + e.currentNodeId);
      const l = d(u, n), f = await l;
      return f === void 0 ? {} : f;
    });
  }
  async [r(189)](x, t) {
    const a = r, { targetNodeId: e, targetAction: s, targetData: n, forwardPath: i } = x;
    if (!i || i[a(2236)] === 0) throw new Error(a(2124));
    const c = i[0], u = i[a(771)](1);
    if (u[a(2236)] === 0 && c === this.currentNodeId) {
      const d = this[a(2313)].get(s);
      if (!d) throw new Error(a(175) + s + " not found on node " + this[a(351)]);
      const l = d(n, t), f = await l;
      return f === void 0 ? {} : f;
    }
    if (c === this[a(351)] && u.length > 0) {
      const d = u[0], l = this[a(1099)](d);
      if (l) return await l.request({ method: a(1637), params: { action: a(1933), data: { targetNodeId: e, targetAction: s, targetData: n, forwardPath: u } } }, ve());
      throw new Error(a(2020) + d + a(1518));
    }
    throw new Error("Invalid proxy forwarding: current node " + this[a(351)] + " not in path " + i);
  }
}
var us, ds;
class mo {
  constructor(x, t) {
    me(this, ds);
    me(this, us);
    me(this, "connectedNodes", /* @__PURE__ */ new Set());
    const a = r;
    this[a(1139)] = x, this[a(351)] = t;
  }
  [(ds = r(1139), us = r(351), r(1833))](x) {
    const t = r;
    this[t(1962)][t(2140)](x);
  }
  [r(1631)](x) {
    const t = r;
    this.connectedNodes[t(1344)](x);
  }
  [r(1467)](x) {
    return this[r(1962)].has(x);
  }
  [r(2260)](x, t) {
    const a = r;
    if (x === t) return [x];
    const e = /* @__PURE__ */ new Set(), s = [{ nodeId: x, path: [x] }];
    for (; s[a(2236)] > 0; ) {
      const { nodeId: n, path: i } = s[a(2447)]();
      if (e[a(2302)](n)) continue;
      e[a(2140)](n);
      const c = this[a(1139)][a(2026)](n);
      for (const u of c) {
        if (u === t) return [...i, u];
        !e[a(2302)](u) && s[a(1449)]({ nodeId: u, path: [...i, u] });
      }
    }
  }
  [r(1032)]() {
    const x = r;
    return Array[x(2852)](this[x(1962)]);
  }
  [r(2881)]() {
    const x = r;
    return this.connectedNodes[x(2270)];
  }
  [r(1504)]() {
    const x = r, t = /* @__PURE__ */ new Set(), a = /* @__PURE__ */ new Set(), e = [this[x(351)]];
    for (a[x(2140)](this[x(351)]); e.length > 0; ) {
      const s = e[x(2447)](), n = this.definition[x(2026)](s);
      for (const i of n)
        !a[x(2302)](i) && (a.add(i), (this[x(1962)][x(2302)](i) || this[x(1089)](i, a)) && (t[x(2140)](i), e[x(1449)](i)));
    }
    return Array.from(t);
  }
  canReachThroughConnectedNodes(x, t) {
    const a = r, e = this[a(2260)](this[a(351)], x);
    if (!e || e[a(2236)] <= 1) return !1;
    for (let s = 1; s < e[a(2236)] - 1; s++)
      if (!this[a(1962)][a(2302)](e[s])) return !1;
    return !0;
  }
  [r(327)]() {
    const x = r;
    this[x(1962)][x(327)]();
  }
}
var ls, fs, hs, ps, ms, bs;
class bo {
  constructor(x, t) {
    me(this, bs);
    me(this, ms);
    me(this, "nodeStores", /* @__PURE__ */ new Map());
    me(this, ps, /* @__PURE__ */ new Map());
    me(this, "broadcastManager");
    me(this, hs);
    me(this, fs);
    me(this, ls, /* @__PURE__ */ new Map());
    const a = r;
    this[a(1139)] = x, this.currentNodeId = t, this[a(2517)](), this[a(2690)] = new ho(t), this[a(2770)] = new po(x, t, (e) => this.getTransportInternal(e)), this[a(2880)] = new mo(x, t), this.setupGraphStoreSync();
  }
  [(bs = r(1139), ms = r(351), ps = r(2830), hs = r(2770), fs = r(2880), ls = r(1593), r(2517))]() {
    const x = r;
    for (const t of this[x(1139)][x(2656)]()) {
      const a = this.definition[x(1103)](t);
      if (a && a[x(2705)]) {
        const e = this[x(466)](a[x(2705)]), s = jn(() => e);
        this[x(815)][x(2104)](t, s);
      }
    }
  }
  getDefaultValuesFromSchema(x) {
    const t = r;
    if (!x) return {};
    try {
      return x[t(330)]({});
    } catch {
      return this[t(2005)](x);
    }
  }
  [r(2005)](x) {
    const t = r;
    if (!x || !x[t(232)]) return {};
    if (x[t(232)].type === t(1770)) {
      const a = x[t(232)][t(1793)];
      return typeof a === t(2279) ? a() : a;
    }
    if (x[t(232)][t(2390)] === t(1606)) {
      const a = {};
      let e;
      try {
        e = x.def.shape;
      } catch {
        return {};
      }
      if (e) for (const [s, n] of Object[t(2813)](e)) {
        const i = this[t(951)](n);
        i !== void 0 && (a[s] = i);
      }
      return a;
    }
    return {};
  }
  [r(951)](x) {
    const t = r;
    if (x)
      try {
        return x[t(330)](void 0);
      } catch {
        return this[t(2005)](x);
      }
  }
  async connect(x, t) {
    const a = r;
    if (!this.definition[a(2280)](this.currentNodeId, x)) throw new Error(a(734) + this.currentNodeId + " to " + x);
    if (this.nodeTransports.has(x)) throw new Error(a(136) + x);
    try {
      this.nodeTransports[a(2104)](x, t), this.connectionManager[a(1833)](x), this[a(856)](x, t), await this.syncStoresToNewConnection(x), await this.requestInitialStateForNode(x);
    } catch (e) {
      throw this[a(716)](x), e;
    }
  }
  disconnect(x) {
    this[r(716)](x);
  }
  async [r(2235)](x) {
    const t = r;
    await new Promise((a) => setTimeout(a, 100));
    for (const [a, e] of this[t(815)])
      if (a === this[t(351)]) try {
        await this[t(2690)][t(381)]("store:update:" + a, { storeName: a, sourceNodeId: this[t(351)], stateUpdate: e[t(2412)](), isInitialState: !0 });
      } catch {
      }
    try {
      await this[t(2690)][t(381)]("__connection_established", { fromNode: this.currentNodeId, toNode: x });
    } catch {
    }
  }
  async [r(2547)](x) {
    const t = r;
    try {
      const a = this[t(2880)][t(1504)]();
      for (const e of a)
        try {
          const s = "__internal_requestInitialState_" + e, n = this.getNode(e);
          if (n && n[t(1999)] && n[t(1999)][s]) {
            const i = n.actions[s]({});
            await Promise[t(2545)]([i, new Promise((c) => setTimeout(c, 300))]);
          }
        } catch (s) {
          console[t(2482)](t(1443) + e + ":", s);
        }
    } catch (a) {
      console[t(2482)](t(146) + x + ":", a);
    }
  }
  cleanupConnection(x) {
    const t = r, a = this.nodeTransports[t(2157)](x);
    this[t(1593)][t(1344)](x), this[t(2880)].markDisconnected(x), this[t(2690)][t(1747)](x), a && a[t(1399)]();
  }
  [r(856)](x, t) {
    const a = r;
    if (!this[a(815)].get(this[a(351)])) throw new Error(a(257) + this[a(351)]);
    this[a(2770)][a(1256)](t), this[a(2690)].addMiddleware(x, t);
  }
  [r(1556)]() {
    const x = r;
    for (const [t, a] of this[x(815)])
      t === this[x(351)] ? fo({ graphInstance: this, store: a, name: t }) : lo({ graphInstance: this, store: a, name: t });
  }
  [r(1103)](x) {
    const t = r;
    if (!this[t(2830)][t(2302)](x)) {
      const a = new uo(this, x);
      this[t(2830)][t(2104)](x, a);
    }
    return this[t(2830)].get(x);
  }
  [r(199)](x) {
    const t = r;
    return this[t(1593)][t(2157)](x);
  }
  [r(1125)](x) {
    const t = r, a = this[t(1593)][t(2157)](x);
    if (a) return { transport: a, path: [this[t(351)], x] };
    const e = this[t(2749)](this[t(351)], x);
    if (e && e.length > 1) {
      const s = e[1], n = this[t(1593)][t(2157)](s);
      if (n) return { transport: n, path: e };
    }
  }
  [r(1419)](x) {
    const t = r;
    return this[t(815)][t(2157)](x);
  }
  get [r(2705)]() {
    const x = r, t = this[x(815)].get(this[x(351)]);
    if (!t) throw new Error(x(495) + this[x(351)]);
    return t;
  }
  get [r(1999)]() {
    const x = r, t = this[x(1139)].getNode(this[x(351)]);
    if (!t) throw new Error(x(1370) + this.currentNodeId);
    return new Proxy({}, { get: (e, s) => {
      const n = x;
      if (typeof s !== n(1736)) return;
      const i = t[n(1999)][s];
      if (!i) throw new Error(n(175) + s + n(1115) + this.currentNodeId);
      return (c, u) => {
        const d = n, l = this[d(2770)][d(208)](s);
        if (!l) throw new Error(d(2115) + s + d(1265) + this[d(351)]);
        const f = { nodeId: this[d(351)] };
        if (i[d(243)] === !0) {
          const g = l(c, f, u);
          return g && typeof g === d(1606) && Symbol.asyncIterator in g ? (async function* () {
            for await (const h of g)
              yield h === void 0 ? {} : h;
          })() : (async function* () {
            const h = await g;
            yield h === void 0 ? {} : h;
          })();
        } else return (async () => {
          const g = d, h = l(c, f, u);
          if (h && typeof h === g(1606) && Symbol[g(1805)] in h) {
            const m = h[Symbol.asyncIterator](), v = await m.next();
            return v[g(194)] === void 0 ? {} : v[g(194)];
          } else {
            const m = await h;
            return m === void 0 ? {} : m;
          }
        })();
      };
    } });
  }
  [r(672)]() {
    return this[r(1139)];
  }
  getCurrentNodeId() {
    return this.currentNodeId;
  }
  [r(1016)](x) {
    return this[r(1125)](x);
  }
  [r(2550)](x, t) {
    const a = r;
    this[a(2770)][a(2550)](x, t);
  }
  [r(1877)]() {
    const x = r, t = Array[x(2852)](this[x(1593)].keys());
    for (const a of t)
      this[x(716)](a);
    this[x(2690)][x(327)](), this[x(2770)].clear(), this.connectionManager.clear();
  }
  [r(2749)](x, t) {
    return this[r(2880)].findPath(x, t);
  }
  [r(2260)](x, t) {
    return this[r(2749)](x, t);
  }
  async [r(381)](x, t) {
    const a = r, e = { ...t, __origin: this[a(351)] };
    return this[a(2690)][a(381)](x, e);
  }
  [r(1220)](x, t) {
    this[r(2690)].registerHandler(x, t);
  }
}
function go(o) {
  const x = new Dn(o);
  return { joinAs(t) {
    const a = K;
    if (!x[a(1103)](t)) throw new Error(a(871) + String(t) + a(2164));
    return new bo(x, t);
  }, getDefinition() {
    return o;
  }, getNodeIds() {
    return x[K(2656)]();
  }, getNeighbors(t) {
    return x.getNeighbors(t);
  }, hasEdge(t, a) {
    return x[K(2280)](t, a);
  }, hasPath(t, a) {
    return x.hasPath(t, a);
  }, findPath(t, a) {
    return x[K(2260)](t, a);
  } };
}
const jr = { INTERCEPTOR_ERROR: r(673) };
var gs, ys, vs, ws;
class Mr extends (ws = Error, vs = r(2390), ys = r(1737), gs = r(544), ws) {
  constructor(t, a, e, s) {
    const n = r;
    super(e);
    me(this, vs);
    me(this, ys);
    me(this, gs);
    this[n(492)] = n(2839), this[n(2390)] = t, this.method = a, this[n(544)] = s;
  }
}
var Ss, ks, Ps, Is, Es, Cs, Rs, _s, Fs;
class yo {
  constructor(x, t = {}) {
    me(this, Fs);
    me(this, "realTransport", null);
    me(this, _s);
    me(this, Rs, /* @__PURE__ */ new Map());
    me(this, Cs, /* @__PURE__ */ new Map());
    me(this, Es, /* @__PURE__ */ new Map());
    me(this, Is, /* @__PURE__ */ new Map());
    me(this, Ps, []);
    me(this, ks, []);
    me(this, "errorHandlers", []);
    me(this, Ss, { requestsHandled: 0, notificationsHandled: 0, requestsIntercepted: 0, notificationsIntercepted: 0, errors: 0 });
    const a = r;
    this[a(1339)] = x, this.options = { debug: !1, interceptorTimeout: 5e3, continueOnInterceptorError: !0, ...t };
  }
  async [(Fs = r(1339), _s = r(278), Rs = r(2555), Cs = r(2724), Es = r(776), Is = r(1943), Ps = r(884), ks = r(798), Ss = r(2625), r(649))](x) {
    const t = r;
    this[t(1515)] = x, x[t(413)] = (a) => {
      this.handleIncomingMessage(a);
    }, x[t(390)] = () => {
      const a = t;
      this[a(798)][a(1022)]((e) => e());
    }, x.onerror = (a) => {
      const e = t;
      this[e(2574)][e(1022)]((s) => s(a));
    }, await this[t(1339)][t(649)](this);
  }
  async [r(2829)](x) {
    const t = r;
    this[t(2482)](t(222), t(1902), x);
    try {
      if (this.isRequest(x) && await this.handleIncomingRequest(x) || this[t(1600)](x) && await this[t(515)](x))
        return;
      this[t(884)][t(1022)]((a) => a(x));
    } catch (a) {
      this[t(2625)].errors++, this[t(2482)]("error", t(1940), a), this[t(884)][t(1022)]((e) => e(x));
    }
  }
  async handleIncomingRequest(x) {
    const t = r, a = this[t(2555)][t(2157)](x[t(1737)]);
    if (!a) return !1;
    try {
      this[t(2625)][t(433)]++;
      const e = await a(x, {});
      return this.realTransport && "id" in x && await this[t(1515)].send({ jsonrpc: t(316), id: x.id, result: e }), !0;
    } catch (e) {
      return this[t(2625)].errors++, this[t(1515)] && "id" in x && await this[t(1515)][t(1165)]({ jsonrpc: t(316), id: x.id, error: { code: -32603, message: t(1368) + JSON[t(1410)](x[t(974)]) + " " + e.message } }), !0;
    }
  }
  async [r(515)](x) {
    const t = r, a = this[t(2724)][t(2157)](x[t(1737)]);
    if (!a) return !1;
    try {
      return this[t(2625)][t(2876)]++, await a(x), !0;
    } catch (e) {
      return this[t(2625)][t(2887)]++, this[t(2482)](t(2484), t(1017) + x.method + ":", e), !0;
    }
  }
  async [r(1165)](x) {
    const t = r;
    this.log("debug", t(2176), x);
    try {
      if (this[t(2344)](x)) {
        const a = await this.executeOutgoingRequestInterceptor(x);
        if (a[t(614)]) {
          if (a[t(2074)] === null) return;
          a[t(2074)] && (x = { ...a[t(2074)], jsonrpc: t(316) }, this[t(2625)].requestsIntercepted++);
        } else if (this.options.continueOnInterceptorError) this[t(2482)](t(816), t(2255) + x[t(1737)] + ":", a[t(2484)]);
        else throw a.error;
      }
      if (this[t(1600)](x)) {
        const a = await this[t(1453)](x);
        if (a.success) {
          if (a[t(2074)] === null) return;
          a[t(2074)] && (x = { ...a.result, jsonrpc: t(316) }, this[t(2625)][t(845)]++);
        } else if (this[t(278)].continueOnInterceptorError) this[t(2482)](t(816), t(531) + x[t(1737)] + ":", a[t(2484)]);
        else throw a[t(2484)];
      }
      this[t(1515)] && await this.realTransport[t(1165)](x);
    } catch (a) {
      throw this[t(2625)].errors++, a;
    }
  }
  async [r(2037)]() {
    const x = r;
    this.realTransport && await this[x(1515)][x(2037)]();
  }
  async close() {
    const x = r;
    this[x(1515)] && await this[x(1515)][x(1749)]();
  }
  set [r(413)](x) {
    const t = r;
    this[t(884)] = [x];
  }
  set [r(390)](x) {
    this.closeHandlers = [x];
  }
  set onerror(x) {
    const t = r;
    this[t(2574)] = [x];
  }
  async executeOutgoingRequestInterceptor(x) {
    const t = r, a = this[t(776)].get(x.method);
    if (!a) return { success: !0, result: x };
    try {
      return { success: !0, result: await this[t(1334)](a(x), this[t(278)][t(440)]) };
    } catch (e) {
      return this.stats[t(2887)]++, { success: !1, error: new Mr(jr[t(1898)], x[t(1737)], t(259) + e[t(1354)], e) };
    }
  }
  async [r(1453)](x) {
    const t = r, a = this[t(1943)][t(2157)](x[t(1737)]);
    if (!a) return { success: !0, result: x };
    try {
      return { success: !0, result: await this[t(1334)](a(x), this[t(278)][t(440)]) };
    } catch (e) {
      return this[t(2625)].errors++, { success: !1, error: new Mr(jr[t(1898)], x[t(1737)], t(333) + e[t(1354)], e) };
    }
  }
  async [r(1190)](x, t) {
    const a = r;
    return await this.protocol[a(1190)](x, t, { timeout: 36e5 });
  }
  async [r(282)](x) {
    const t = r;
    return await this[t(1339)][t(282)](x);
  }
  [r(2476)](x, t) {
    const a = r, e = x[a(1913)][a(1737)][a(194)];
    this[a(2555)][a(2104)](e, t);
  }
  setNotificationHandler(x, t) {
    const a = r, e = x[a(1913)][a(1737)][a(194)];
    this[a(2724)].set(e, t);
  }
  [r(435)](x, t) {
    const a = r, e = x.shape[a(1737)][a(194)];
    this.outgoingRequestInterceptors[a(2104)](e, t);
  }
  setOutgoingNotificationInterceptor(x, t) {
    const a = r, e = x[a(1913)].method[a(194)];
    this[a(1943)][a(2104)](e, t);
  }
  [r(2263)](x) {
    this[r(2555)].delete(x);
  }
  [r(410)](x) {
    const t = r;
    this.notificationHandlers[t(1344)](x);
  }
  [r(2630)](x) {
    this.outgoingRequestInterceptors.delete(x);
  }
  [r(2257)](x) {
    const t = r;
    this.outgoingNotificationInterceptors[t(1344)](x);
  }
  [r(2895)](x) {
    const t = r;
    return this[t(2555)][t(2302)](x);
  }
  hasNotificationHandler(x) {
    const t = r;
    return this[t(2724)][t(2302)](x);
  }
  [r(1469)](x) {
    const t = r;
    return this[t(776)][t(2302)](x);
  }
  [r(147)](x) {
    const t = r;
    return this[t(1943)][t(2302)](x);
  }
  [r(1751)]() {
    return { ...this[r(2625)] };
  }
  [r(777)]() {
    const x = r;
    this[x(2625)] = { requestsHandled: 0, notificationsHandled: 0, requestsIntercepted: 0, notificationsIntercepted: 0, errors: 0 };
  }
  [r(438)]() {
    return this[r(1339)];
  }
  [r(1399)]() {
    const x = r;
    this[x(2555)][x(327)](), this.notificationHandlers[x(327)](), this[x(776)][x(327)](), this[x(1943)][x(327)]();
  }
  isRequest(x) {
    const t = r;
    return x.jsonrpc === t(316) && t(1737) in x && "id" in x;
  }
  [r(1600)](x) {
    const t = r;
    return x[t(367)] === t(316) && t(1737) in x && !("id" in x);
  }
  async [r(1334)](x, t) {
    const a = new Promise((e, s) => {
      const n = K;
      setTimeout(() => s(new Error(n(1446))), t);
    });
    return await Promise.race([x, a]);
  }
  [r(2482)](x, t, ...a) {
    const e = r;
    if (!this[e(278)][e(222)] && x === e(222)) return;
    const s = e(660);
    switch (x) {
      case e(222):
        console[e(222)](s, t, ...a);
        break;
      case e(2039):
        console[e(2039)](s, t, ...a);
        break;
      case e(816):
        console.warn(s, t, ...a);
        break;
      case e(2484):
        console.error(s, t, ...a);
        break;
    }
  }
}
S({ method: xe(r(2082)), params: S({ requestId: b(), data: ve(), error: b().nullable(), finished: Q() }) }), S({ method: xe("sdppp/streamRequest"), params: S({ action: b(), data: ve() }) }), S({ method: xe("sdppp/abort"), params: S({ requestId: b() }) });
const vo = S({ method: xe(r(2082)), params: S({ requestId: b(), data: ve(), error: b().nullable(), finished: Q() }) }), wo = S({ method: xe(r(2487)), params: S({ action: b(), data: ve() }) }), So = S({ method: xe(r(1826)), params: S({ requestId: b() }) });
var Ns;
class ko {
  constructor() {
    me(this, "queues", /* @__PURE__ */ new Map());
    me(this, Ns, /* @__PURE__ */ new Map());
  }
  push(x) {
    const t = r, { requestId: a } = x[t(974)], e = this[t(193)].get(a) || [], s = this[t(2520)][t(2157)](a) || [];
    s[t(2236)] > 0 ? s.shift()(x[t(974)]) : (e[t(1449)](x[t(974)]), this[t(193)].set(a, e));
  }
  async [(Ns = r(2520), r(1702))](x) {
    const t = r, a = this[t(193)][t(2157)](x) || [];
    return a[t(2236)] > 0 ? a.shift() : new Promise((e) => {
      const s = t, n = this[s(2520)][s(2157)](x) || [];
      n[s(1449)](e), this.waiters[s(2104)](x, n);
    });
  }
  [r(1399)](x) {
    const t = r;
    this[t(193)][t(1344)](x), this[t(2520)].delete(x);
  }
}
var Ts, qs, As;
class Po extends yo {
  constructor(t, a = {}) {
    const e = r;
    super(t, a);
    me(this, As, /* @__PURE__ */ new Map());
    me(this, "requestIdSeq", 1);
    me(this, qs, /* @__PURE__ */ new Map());
    me(this, Ts, new ko());
    this[e(961)]();
  }
  setupStreamProtocolHandlers() {
    const t = r;
    this[t(174)](), this[t(395)](), this[t(991)]();
  }
  [(As = r(548), qs = r(2886), Ts = r(1892), r(174))]() {
    const t = r;
    this[t(1888)](vo, async (a) => {
      const e = t;
      this[e(1892)][e(1449)](a);
    });
  }
  [r(395)]() {
    this.setRequestHandler(So, async (t, a) => {
      const e = K, { requestId: s } = t[e(974)], n = this[e(2886)].get(s);
      return n && (n.abort(), this.runningRequests[e(1344)](s)), { success: !0 };
    });
  }
  setupStreamRequestHandler() {
    const t = r;
    this[t(2476)](wo, async (a, e) => {
      const s = t, n = s(1477) + this[s(1329)]++, i = this.streamRequestorHandlers[s(2157)](a[s(974)][s(714)]);
      if (!i) throw new Error(s(655) + a.params[s(714)]);
      const c = new AbortController();
      return this[s(2886)][s(2104)](n, c), this[s(1958)](n, i, a[s(974)], e, c), { requestId: n };
    });
  }
  async [r(1958)](t, a, e, s, n) {
    const i = r;
    try {
      const c = a(e, s, n.signal);
      for await (const u of c) {
        if (n.signal[i(2294)]) break;
        await this[i(282)]({ method: i(2082), params: { requestId: t, data: u, error: null, finished: !1 } });
      }
      !n[i(1673)][i(2294)] && await this.notification({ method: i(2082), params: { requestId: t, data: null, error: null, finished: !0 } });
    } catch (c) {
      !n.signal.aborted && await this[i(282)]({ method: i(2082), params: { requestId: t, data: null, error: c.message, finished: !0 } });
    } finally {
      this[i(2886)][i(1344)](t);
    }
  }
  [r(2154)](t, a) {
    const e = r;
    this.streamRequestorHandlers[e(2104)](t[e(1913)][e(714)][e(194)], a);
  }
  async [r(1120)](t, a, e) {
    const s = r;
    this[s(2704)](e);
    const n = await this.sendStreamRequestorRequest(t), i = this[s(2283)](n), c = this[s(468)]();
    return this[s(1834)](i, c, n, e);
  }
  validateStreamRequestorRequest(t) {
    const a = r;
    if (t && t[a(2294)]) throw new Error(a(2815));
  }
  async [r(2360)](t) {
    const a = r;
    return (await this[a(1190)]({ method: a(2487), params: { action: t[a(714)], data: t[a(2516)] } }, S({ requestId: b() })))[a(383)];
  }
  initializeResponseQueue(t) {
    return this[r(1892)];
  }
  [r(468)]() {
    return { finished: !1, error: null };
  }
  createAsyncIterator(t, a, e, s) {
    const n = r, i = this;
    return { async *[Symbol[n(1805)]]() {
      const c = n;
      try {
        for (; !a[c(2556)] && !a[c(2484)]; ) {
          if (s && s[c(2294)])
            throw await i[c(1190)]({ method: c(1826), params: { requestId: e } }, S({ success: Q() })), new Error("Aborted");
          const u = await t[c(1702)](e);
          if (u[c(2484)])
            throw a[c(2484)] = u.error, new Error(u[c(2484)]);
          if (u[c(2556)]) {
            a[c(2556)] = !0;
            break;
          }
          u[c(2516)] !== null && (yield u.data);
        }
      } finally {
        t.cleanup(e);
      }
    } };
  }
  [r(743)]() {
    return this[r(2886)].size;
  }
  async [r(236)](t) {
    const a = r, e = this[a(2886)][a(2157)](t);
    return e ? (e[a(1145)](), this[a(2886)][a(1344)](t), !0) : !1;
  }
  [r(1565)]() {
    const t = r;
    for (const [a, e] of this[t(2886)])
      e.abort();
    this[t(2886)].clear();
  }
  cleanup() {
    const t = r;
    super.cleanup(), this[t(1565)](), this[t(548)][t(327)]();
  }
}
S({ id: b(), method: b(), params: ve().optional(), traceId: b().optional() }), S({ id: b(), result: ve().optional(), error: S({ code: Z(), message: b(), data: ve()[r(613)]() })[r(613)]() }), S({ method: b(), params: ve()[r(613)]() }), S({ method: xe(r(2487)), params: S({ action: b(), data: ve() }) }), S({ method: xe("sdppp/streamResponse"), params: S({ requestId: b(), data: ve()[r(613)](), error: b()[r(260)]()[r(613)](), finished: Q().default(!1) }) }), S({ method: xe(r(1826)), params: S({ requestId: b() }) }), S({ method: xe(r(1629)), params: S({ messageType: b(), message: ve() }) });
function Us(o) {
  const x = r;
  return o && o.__esModule && Object.prototype[x(1250)][x(1666)](o, x(1770)) ? o[x(1770)] : o;
}
const H0 = S({ leftDistance: Z(), topDistance: Z(), rightDistance: Z(), bottomDistance: Z(), width: Z(), height: Z() }), F0 = { name: b(), uiWeight: Z() }, Io = S({ ...F0, outputType: xe(r(1838)), options: S({ required: Q(), maxCount: Z().optional(), maskMode: Q()[r(613)]() }) }), Eo = S({ ...F0, outputType: xe(r(936)), options: S({ required: Q() }) }), Co = S({ ...F0, outputType: xe(r(1736)), options: S({ required: Q() }) }), Ro = S({ ...F0, outputType: xe(r(2727)), options: S({ required: Q() }) }), _o = S({ ...F0, outputType: xe(r(1142)), options: S({ required: Q(), min: Z()[r(613)](), max: Z()[r(613)](), step: Z()[r(613)](), random: Q().optional(), slider: Q()[r(613)]() }) }), Fo = S({ ...F0, outputType: xe("combo"), options: S({ required: Q(), values: Se(b()), labels: Se(b())[r(613)]() }) }), No = S({ ...F0, outputType: xe("segment"), options: S({ required: Q(), values: Se(b()) }) }), To = S({ ...F0, outputType: xe("video"), options: S({ required: Q() }) }), qo = Ls("outputType", [Io, Eo, Co, Ro, _o, Fo, No, To]), Ao = S({ id: b(), title: b(), widgets: Se(qo), uiWeightSum: Z() }), Oo = S({ widgetableID: b(), widgetablePath: b(), nodes: qe(b(), Ao), nodeIndexes: Se(b()), note: b().optional(), options: qe(b(), ve()) }), Do = S({ widgetableStructure: Oo.default({ widgetableID: "", widgetablePath: "", nodes: {}, note: "", options: {}, nodeIndexes: [] }), widgetableValues: qe(b(), Se(ve()))[r(1770)]({}), widgetableErrors: qe(b(), b()).default({}), queueSize: Z()[r(1770)](0), lastError: b()[r(1770)](""), progress: Z()[r(1770)](0), executingNodeTitle: b()[r(1770)](""), executingNodeID: b()[r(1770)](""), graphProgress: Z().default(0), comfyUserToken: b()[r(1770)](""), comfyOrgLoggedIn: Q().default(!1), comfyOrgAPIKey: b()[r(1770)](""), comfyWSState: Ie([r(220), r(1808)])[r(1770)]("connected"), lastRunTime: Z()[r(1770)](0) }), jo = S({ bannerData: ve()[r(613)](), refreshable: Q()[r(1770)](!1), backwardable: Q()[r(1770)](!1), loginable: Q().default(!1), runnable: Q().default(!1), workBoundaries: qe(Z(), H0)[r(1770)]({}), workBoundaryMaxSizes: qe(Z(), Z())[r(1770)]({}), isLogin: Q()[r(1770)](!1), isGuest: Q()[r(1770)](!1), token: b().default(""), refreshToken: b()[r(1770)](""), userInfo: qe(b(), ve()).default({}), loginMessage: b()[r(1770)](""), balance: Z()[r(260)]()[r(1770)](null) }), Mo = S({ uname: b().default(""), activeDocumentID: Z()[r(1770)](0), layers: Se(S({ id: Z(), name: b(), identify: b() })).default([]), actions: Se(b())[r(1770)]([]), theme: b()[r(1770)](r(1827)), sdpppX: qe(b(), ve()).default({}), locale: Ie([r(920), r(2380)])[r(1770)]("en-US"), comfyWebviewConnectStatus: Ie(["connecting", r(220), "disconnected"])[r(1770)]("disconnected"), comfyWebviewLoadError: b().default(""), comfyWebviewLoading: Q().default(!1), comfyWebviewVersion: b().default(""), comfyHTTPCode: Z()[r(1770)](200), comfyURL: b()[r(1770)](""), sdkWebviewFocusing: Q()[r(1770)](!1), sdkWebviewConnectStatus: Ie([r(2818), r(220), r(2868)])[r(1770)](r(2868)), requestingLogin: Q()[r(1770)](!1), balance: Z()[r(260)]()[r(1770)](null), taskLastRun: Z()[r(1770)](0), canvasStateID: Z()[r(613)](), selectionStateID: b().optional(), selectionBoundary: H0[r(260)]()[r(613)]() }), Lo = { setNodeTitle: { requestSchema: S({ node_id: b(), title: b() }), responseSchema: S({ success: Q() }) }, reboot: { requestSchema: S({}), responseSchema: S({ success: Q(), error: b()[r(613)]() }) }, setComfyOrgAPIKey: { requestSchema: S({ api_key: b() }), responseSchema: S({ success: Q() }) }, logout: { requestSchema: S({}), responseSchema: S({ success: Q() }) }, uploadComfyImageFromUXP: { requestSchema: S({ fileName: b(), overwrite: Q()[r(613)](), mimeType: b()[r(613)](), dataBase64: b() }), responseSchema: S({ name: b() }) }, sdpppHandshake: { requestSchema: S({ hostVersion: b()[r(613)]() }), responseSchema: S({ comfyVersion: b(), hostVersion: b()[r(613)]() }) } }, $o = S({ workflows: Se(b()), error: b()[r(613)]() }), Uo = S({ success: Q(), nodeErrors: qe(b())[r(613)](), prompt_ids: Se(b())[r(613)](), images: Se(S({ url: b(), thumbnail: b() })).optional() }), zo = { setWidgetValue: { requestSchema: S({ values: Se(S({ nodeID: b(), widgetIndex: Z(), value: qe(b(), ve()).or(b()).or(Z()).or(Q()).or(Se(ve())) })) }), responseSchema: S({ success: Q() }) }, openWorkflow: { requestSchema: S({ workflow_path: b(), reset: Q()[r(1770)](!1) }), responseSchema: S({ success: Q() }) }, openWorkflowJSON: { requestSchema: S({ workflow_content: qe(ve()), workflow_path: b() }), responseSchema: S({ success: Q() }) }, listWorkflows: { requestSchema: S({ listMode: b()[r(613)](), sdpppID: b()[r(613)](), sdpppToken: b()[r(613)]() }), responseSchema: $o }, saveWorkflow: { requestSchema: S({ workflow_path: b(), from_sid: b()[r(613)]() }), responseSchema: S({ success: Q() }) }, run: { requestSchema: S({ size: Z(), mode: Ie(["app", r(834)])[r(1770)](r(1661)).optional() }), responseSchema: Uo, stream: !0 }, stopAll: { requestSchema: S({}), responseSchema: S({ success: Q() }) } }, Ho = S({ passwordPayload: S({ username: b(), password: b() }).or(S({ email: b(), password: b() })).or(S({ phone: b(), password: b() })).or(S({ identifier: b(), password: b() })) }).or(S({ passcodePayload: S({ phone: b(), code: b() }).or(S({ email: b(), code: b() })) })), Vo = S({ passwordPayload: S({ username: b(), password: b() }).or(S({ email: b(), password: b() })).or(S({ phone: b(), password: b() })).or(S({ identifier: b(), password: b() })) }).or(S({ passcodePayload: S({ phone: b(), code: b() }).or(S({ email: b(), code: b() })) })), Bo = { backward: { requestSchema: J0(), responseSchema: S({ success: Q() }) }, refresh: { requestSchema: J0(), responseSchema: S({ success: Q() }) }, run: { requestSchema: J0(), responseSchema: S({ success: Q() }) }, authLogin: { requestSchema: Ho, responseSchema: S({ token: b(), refreshToken: b()[r(613)](), userInfo: ve()[r(613)]() }) }, authRegister: { requestSchema: Vo, responseSchema: S({ success: Q() }) }, authSendPassCode: { requestSchema: S({ phone: b()[r(613)](), email: b()[r(613)]() }), responseSchema: S({ success: Q() }) }, authGetUserProfile: { requestSchema: S({ token: b() }), responseSchema: S({ userInfo: ve() }) }, authLogout: { requestSchema: J0(), responseSchema: S({ success: Q() }) }, authLoginByQRCode: { requestSchema: S({ sessionId: b()[r(613)]() }), responseSchema: S({ sessionId: b(), qrcodeURL: b(), status: Ie(["ready", r(748), "success", r(461), r(2851), r(2484)]), token: b()[r(613)](), refreshToken: b()[r(613)](), userInfo: ve()[r(613)]() }) }, fetchBalance: { requestSchema: J0(), responseSchema: S({ balance: Z()[r(260)]() }) } };
S({ resource: b()[r(613)](), thumbnail: b()[r(613)](), width: Z()[r(613)](), height: Z()[r(613)](), mimeType: b()[r(613)](), source: b()[r(613)](), error: b()[r(613)]() }), S({ boundary: Ie(["canvas", r(1193), r(2339)]), content: Ie([r(1630), "curlayer", "selection"]).or(b()), imageSize: Z(), imageQuality: Z(), cropBySelection: Ie(["no", r(2228), "negative"]), layer_identify: b()[r(260)]().optional() }), S({ content: Ie(["canvas", r(1193), r(2339)]), reverse: Q(), imageSize: Z(), layer_identify: b().nullable()[r(613)]() }), S({ selection: Ie([r(1240), r(1514), r(538), r(388), r(801), r(1513), r(1255), r(1240)]), url: b(), source: b(), cropBySelection: Ie(["no", r(2228), r(1978)]) });
const Zo = { downloadImage: { requestSchema: S({ url: b() }), responseSchema: S({ thumbnail: b()[r(613)](), resource: b()[r(613)](), width: Z()[r(613)](), height: Z().optional(), error: b().optional() }) }, getThumbnail: { requestSchema: S({ resource: b(), maxSize: Z().optional() }), responseSchema: S({ thumbnail: b()[r(613)](), width: Z()[r(613)](), height: Z()[r(613)](), error: b()[r(613)]() }) } }, Wo = { pptaskRun: { requestSchema: S({ locator: b(), payload: qe(b(), ve())[r(613)](), platformConfig: qe(b(), ve())[r(613)](), context: qe(b(), ve())[r(613)](), schema: qe(b(), ve())[r(613)]() }), responseSchema: Ve([S({ ok: xe(!0), taskId: b(), result: ve() }), S({ ok: xe(!1), taskId: b()[r(613)](), error: S({ message: b(), code: Ve([b(), Z()])[r(613)](), payload: ve()[r(613)]() }) })]) }, pptaskCancel: { requestSchema: S({ taskId: b() }), responseSchema: S({ cancelled: Q(), error: b()[r(613)]() }) } }, Ko = { manageGuides: { requestSchema: S({ action: Ie([r(186), r(327)]), rect: H0[r(613)]() }), responseSchema: S({ success: Q() }) }, getBoundary: { requestSchema: S({ type: Ie([r(1193), r(2339)]) }), responseSchema: H0 }, getImage: { requestSchema: S({ boundary: Ve([Ie([r(1630), "curlayer", r(2339)]), H0]), content: Ve([Ie([r(1630), r(1193)]), b()]), imageSize: Z(), imageQuality: Z(), cropBySelection: Ie(["no", "positive", "negative"]), SkipNonNormalLayer: Q(), layer_identify: b()[r(260)]().optional() }), responseSchema: S({ resource: b()[r(613)](), thumbnail: b()[r(613)](), width: Z().optional(), height: Z()[r(613)](), mimeType: b()[r(613)](), source: b()[r(613)](), error: b()[r(613)]() }) }, getMask: { requestSchema: S({ boundary: Ve([Ie(["canvas", r(1193), r(2339)]), H0]), content: Ie(["canvas", r(1193), r(2339)]), reverse: Q(), imageSize: Z(), layer_identify: b().nullable()[r(613)]() }), responseSchema: S({ resource: b()[r(613)](), thumbnail: b().optional(), width: Z()[r(613)](), height: Z().optional(), mimeType: b().optional(), source: b()[r(613)](), error: b()[r(613)]() }) }, getCurrentLayerIdentify: { requestSchema: S({}), responseSchema: S({ layer_identify: b()[r(260)]() }) }, importImage: { requestSchema: S({ resource: b(), boundaryUri: b()[r(260)]()[r(613)](), type: Ie(["canvas", r(1193), "newdoc", "smartobject"]), sourceWidth: Z()[r(613)](), sourceHeight: Z().optional(), maskUri: b()[r(260)]()[r(613)]() }), responseSchema: S({ success: Q(), layers: Se(S({ identify: b() })).optional(), message: b()[r(613)](), error: b().optional() }) }, selectFromMaskUri: { requestSchema: S({ maskUri: b(), documentId: Z()[r(613)]() }), responseSchema: S({ success: Q() }) }, selectFromBoundaryUri: { requestSchema: S({ boundaryUri: b(), documentId: Z()[r(613)]() }), responseSchema: S({ success: Q(), error: b()[r(613)]() }) }, applyMaskToImage: { requestSchema: S({ imageResource: b(), maskResource: b(), invertMask: Q()[r(613)]() }), responseSchema: S({ resource: b(), thumbnail: b().optional(), width: Z(), height: Z(), mimeType: b() }) }, showBoundarySelectionDialog: { requestSchema: S({ additionalData: qe(ve())[r(613)]() }), responseSchema: S({ boundary: Ie(["canvas", r(1193), r(2339)])[r(613)](), cancelled: Q().optional() }) }, selectImageSource: { requestSchema: S({ additionalData: qe(ve()).optional() }), responseSchema: S({ action: Ie([r(1401), r(732)])[r(613)](), params: ve()[r(613)](), cancelled: Q()[r(613)]() }) }, selectContentSource: { requestSchema: S({ additionalData: qe(ve())[r(613)]() })[r(613)](), responseSchema: S({ resource: b()[r(613)](), fileName: b().optional(), mimeType: b()[r(613)](), size: Z()[r(613)](), layerIdentify: b().optional(), cancelled: Q()[r(613)]() }) } }, Hx = S({ taskId: b(), taskName: b(), status: Ie([r(2146), r(434), r(657), r(2781)]), currentStep: Z()[r(613)](), totalSteps: Z()[r(613)](), stepDescription: b()[r(613)](), progressPercentage: Z()[r(2191)](0)[r(2499)](100)[r(613)](), startTime: b(), endTime: b()[r(613)](), error: b()[r(613)](), errorCode: b()[r(613)](), result: ve().optional(), metadata: qe(ve())[r(613)]() }), Vx = S({ success: Q(), error: b()[r(613)]() }), Go = { taskAdd: { requestSchema: Hx, responseSchema: Vx }, taskUpdate: { requestSchema: Hx[r(1456)]()[r(483)]({ taskId: !0 }), responseSchema: Vx }, taskRemove: { requestSchema: Hx[r(2760)]({ taskId: !0 }), responseSchema: Vx } }, Jo = { log: { requestSchema: S({ level: Ie([r(2482), r(2039), "warn", "error"]), messages: Se(b()) }), responseSchema: S({}) }, openExternalLink: { requestSchema: S({ url: b() }), responseSchema: S({ error: b()[r(613)]() }) }, getStorage: { requestSchema: S({ key: b() }), responseSchema: S({ value: b(), error: b().optional() }) }, setStorage: { requestSchema: S({ key: b(), value: b() }), responseSchema: S({ error: b().optional() }) }, removeStorage: { requestSchema: S({ key: b() }), responseSchema: S({ error: b()[r(613)]() }) }, keyboardAction: { requestSchema: S({ keycode: b() }), responseSchema: S({}) }, setComfyWebviewURL: { requestSchema: S({ url: b() }), responseSchema: S({}) }, getImageBase64: { requestSchema: S({ token: b() }), responseSchema: S({ base64: b()[r(613)](), mimeType: b().optional(), error: b()[r(613)]() }) }, uploadComfyImage: { requestSchema: S({ uploadInput: S({ type: Ve([xe(r(335)), xe(r(273)), xe(r(1997))]), resource: ve(), fileName: b(), mimeType: b()[r(613)](), resourceId: b()[r(613)]() }), overwrite: Q()[r(613)]()[r(1770)](!0) }), responseSchema: S({ name: b() }) }, pickLocalFile: { requestSchema: S({ acceptExtensions: Se(b()).optional(), kind: Ie([r(2062), r(2178)])[r(613)]() })[r(613)](), responseSchema: S({ cancelled: Q().optional(), resource: b()[r(613)](), fileName: b().optional(), mimeType: b().optional(), size: Z()[r(613)](), error: b()[r(613)]() }) }, proxiedFetch: { requestSchema: S({ url: b(), method: b().optional(), headers: qe(b()).optional(), body: ve()[r(613)](), bodyType: Ie([r(1687), r(1305), r(1416)]).optional() }), responseSchema: S({ success: Q(), status: Z()[r(613)](), statusText: b()[r(613)](), headers: qe(b())[r(613)](), data: ve()[r(613)](), error: b().optional() }) }, openaiImageEdit: { requestSchema: S({ apiKey: b(), baseURL: b(), imageToken: b(), prompt: b(), model: b() }), responseSchema: S({ success: Q(), imageUrl: b().optional(), apiTime: Z()[r(613)](), error: b().optional() }) }, geminiImageGenerate: { requestSchema: S({ apiKey: b(), baseURL: b()[r(613)](), imageInputs: Se(b())[r(613)](), imageInput: b().optional(), imageInputType: Ie([r(273), r(1495)]), prompt: b() }), responseSchema: S({ success: Q(), imageUrl: b()[r(613)](), apiTime: Z().optional(), error: b()[r(613)]() }) } }, Qo = Ve([b(), zx(Uint8Array), zx(ArrayBuffer), zx(DataView)]), Xo = S({ buffer: Qo, name: b().nullable().optional(), mime: b()[r(260)]()[r(613)](), width: Z().nullable()[r(613)](), height: Z()[r(260)]().optional(), thumbnail: b()[r(260)]()[r(613)](), meta: qe(k0())[r(613)]() }), Yo = { "fileResource.createFromExternal": { requestSchema: S({ url: b(), fileName: b().optional() }), responseSchema: S({ resource: b()[r(613)](), thumbnail: b()[r(613)](), width: Z().optional(), height: Z()[r(613)](), mime: b()[r(613)](), mimeType: b().optional(), error: b()[r(613)]() }) }, "fileResource.createFromLocal": { requestSchema: S({ types: Se(S({ description: b()[r(613)](), extensions: Se(b())[r(613)]() }))[r(613)]() }), responseSchema: S({ resource: b()[r(613)](), thumbnail: b().optional(), width: Z()[r(613)](), height: Z()[r(613)](), mime: b()[r(613)](), error: b()[r(613)]() }) }, "fileResource.createFromBuffer": { requestSchema: S({ files: Se(Xo)[r(2191)](1) }), responseSchema: S({ resource: b()[r(613)](), thumbnail: b()[r(613)](), width: Z()[r(613)](), height: Z()[r(613)](), mime: b()[r(613)](), error: b()[r(613)]() }) }, "fileResource.createByContent": { requestSchema: S({ contentUri: b(), boundaryUri: b().optional(), options: qe(k0())[r(613)]() }), responseSchema: S({ resource: b()[r(613)](), thumbnail: b()[r(613)](), width: Z().optional(), height: Z().optional(), mime: b()[r(613)](), error: b()[r(613)]() }) }, "fileResource.createByMask": { requestSchema: S({ maskUri: b(), boundaryUri: b().optional(), options: qe(k0()).optional() }), responseSchema: S({ resource: b()[r(613)](), thumbnail: b()[r(613)](), width: Z()[r(613)](), height: Z()[r(613)](), mime: b().optional(), error: b()[r(613)]() }) }, "fileResource.combineByCBM": { requestSchema: S({ contentUri: b(), boundaryUri: b(), maskUri: b().nullable()[r(613)](), options: qe(k0())[r(613)](), thumbnail: Q()[r(613)]() }), responseSchema: S({ resource: b()[r(613)](), thumbnail: b()[r(613)](), width: Z()[r(613)](), height: Z()[r(613)](), mime: b()[r(613)](), error: b()[r(613)]() }) }, "fileResource.delete": { requestSchema: S({ resources: Se(b()) }), responseSchema: S({ error: b()[r(613)]() }) }, "fileResource.thumbnail": { requestSchema: S({ resource: b(), maxSize: Z()[r(613)]() }), responseSchema: S({ thumbnail: b()[r(613)](), width: Z()[r(613)](), height: Z()[r(613)](), error: b()[r(613)]() }) }, "fileResource.saveAs": { requestSchema: S({ resources: Se(b()) }), responseSchema: S({ error: b().optional() }) }, "boundary.normalize": { requestSchema: S({ boundary: b() }), responseSchema: S({ boundary: b()[r(613)](), error: b().optional() }) }, "layer.resolve": { requestSchema: S({ uri: b(), type: Ie([r(1840), "mask"]) }), responseSchema: S({ uri: b().optional(), error: b()[r(613)]() }) } }, ei = go({ nodes: { sdk: { store: jo, actions: { ...Bo } }, uxp: { store: Mo, actions: { ...Zo, ...Yo, ...Wo, ...Jo, ...Go, ...Ko } }, comfy: { store: Do, actions: { ...zo, ...Lo } } }, edges: [[r(1034), "uxp"], [r(2076), "uxp"]] }), Ee = ei[r(176)](r(2076));
globalThis[r(1073)] = Ee;
var hx = { exports: {} }, Bx, Lr;
function xi() {
  if (Lr) return Bx;
  Lr = 1;
  var o = 1e3, x = o * 60, t = x * 60, a = t * 24, e = a * 7, s = a * 365.25;
  Bx = function(d, l) {
    const f = K;
    l = l || {};
    var g = typeof d;
    if (g === f(1736) && d[f(2236)] > 0) return n(d);
    if (g === "number" && isFinite(d)) return l[f(2425)] ? c(d) : i(d);
    throw new Error(f(2611) + JSON[f(1410)](d));
  };
  function n(d) {
    const l = K;
    if (d = String(d), !(d[l(2236)] > 100)) {
      var f = /^(-?(?:\d+)?\.?\d+) *(milliseconds?|msecs?|ms|seconds?|secs?|s|minutes?|mins?|m|hours?|hrs?|h|days?|d|weeks?|w|years?|yrs?|y)?$/i[l(731)](d);
      if (f) {
        var g = parseFloat(f[1]), h = (f[2] || "ms")[l(2182)]();
        switch (h) {
          case l(2644):
          case l(1587):
          case l(1363):
          case "yr":
          case "y":
            return g * s;
          case "weeks":
          case l(2034):
          case "w":
            return g * e;
          case l(1679):
          case l(1534):
          case "d":
            return g * a;
          case l(1783):
          case l(1989):
          case l(2649):
          case "hr":
          case "h":
            return g * t;
          case l(2633):
          case l(1322):
          case l(2637):
          case l(2191):
          case "m":
            return g * x;
          case "seconds":
          case "second":
          case "secs":
          case l(2546):
          case "s":
            return g * o;
          case l(2144):
          case l(324):
          case l(1249):
          case l(2401):
          case "ms":
            return g;
          default:
            return;
        }
      }
    }
  }
  function i(d) {
    const l = K;
    var f = Math[l(2682)](d);
    return f >= a ? Math[l(2225)](d / a) + "d" : f >= t ? Math[l(2225)](d / t) + "h" : f >= x ? Math[l(2225)](d / x) + "m" : f >= o ? Math[l(2225)](d / o) + "s" : d + "ms";
  }
  function c(d) {
    const l = K;
    var f = Math.abs(d);
    return f >= a ? u(d, f, a, l(1534)) : f >= t ? u(d, f, t, "hour") : f >= x ? u(d, f, x, "minute") : f >= o ? u(d, f, o, l(1248)) : d + " ms";
  }
  function u(d, l, f, g) {
    const h = K;
    var m = l >= f * 1.5;
    return Math[h(2225)](d / f) + " " + g + (m ? "s" : "");
  }
  return Bx;
}
var Zx, $r;
function ti() {
  if ($r) return Zx;
  $r = 1;
  function o(x) {
    const t = K;
    e[t(222)] = e, e[t(1770)] = e, e[t(1900)] = d, e[t(2643)] = c, e[t(843)] = n, e[t(1062)] = u, e[t(700)] = xi(), e[t(1877)] = l, Object[t(460)](x)[t(1022)]((f) => {
      e[f] = x[f];
    }), e[t(2634)] = [], e[t(207)] = [], e.formatters = {};
    function a(f) {
      const g = t;
      let h = 0;
      for (let m = 0; m < f[g(2236)]; m++)
        h = (h << 5) - h + f[g(2638)](m), h |= 0;
      return e[g(2701)][Math.abs(h) % e[g(2701)][g(2236)]];
    }
    e.selectColor = a;
    function e(f) {
      const g = t;
      let h, m = null, v, k;
      function P(...N) {
        const q = K;
        if (!P[q(1062)]) return;
        const R = P, E = Number(/* @__PURE__ */ new Date()), C = E - (h || E);
        R[q(1572)] = C, R[q(1483)] = h, R.curr = E, h = E, N[0] = e[q(1900)](N[0]), typeof N[0] !== q(1736) && N[q(1043)]("%O");
        let A = 0;
        N[0] = N[0][q(1809)](/%([a-zA-Z%])/g, (M, _) => {
          const F = q;
          if (M === "%%") return "%";
          A++;
          const z = e.formatters[_];
          if (typeof z === F(2279)) {
            const $ = N[A];
            M = z.call(R, $), N.splice(A, 1), A--;
          }
          return M;
        }), e[q(1914)][q(1666)](R, N), (R[q(2482)] || e[q(2482)])[q(1880)](R, N);
      }
      return P[g(270)] = f, P.useColors = e[g(805)](), P[g(1009)] = e[g(1928)](f), P[g(2417)] = s, P.destroy = e[g(1877)], Object[g(281)](P, g(1062), { enumerable: !0, configurable: !1, get: () => {
        const N = g;
        return m !== null ? m : (v !== e[N(2840)] && (v = e[N(2840)], k = e.enabled(f)), k);
      }, set: (N) => {
        m = N;
      } }), typeof e[g(419)] == "function" && e[g(419)](P), P;
    }
    function s(f, g) {
      const h = t, m = e(this[h(270)] + (typeof g === h(233) ? ":" : g) + f);
      return m[h(2482)] = this[h(2482)], m;
    }
    function n(f) {
      const g = t;
      e[g(2675)](f), e[g(2840)] = f, e.names = [], e.skips = [];
      const h = (typeof f === g(1736) ? f : "").trim().replace(/\s+/g, ",").split(",").filter(Boolean);
      for (const m of h)
        m[0] === "-" ? e[g(207)][g(1449)](m[g(771)](1)) : e[g(2634)][g(1449)](m);
    }
    function i(f, g) {
      const h = t;
      let m = 0, v = 0, k = -1, P = 0;
      for (; m < f[h(2236)]; )
        if (v < g[h(2236)] && (g[v] === f[m] || g[v] === "*")) g[v] === "*" ? (k = v, P = m, v++) : (m++, v++);
        else if (k !== -1) v = k + 1, P++, m = P;
        else return !1;
      for (; v < g[h(2236)] && g[v] === "*"; )
        v++;
      return v === g[h(2236)];
    }
    function c() {
      const f = t, g = [...e.names, ...e[f(207)].map((h) => "-" + h)][f(2130)](",");
      return e[f(843)](""), g;
    }
    function u(f) {
      const g = t;
      for (const h of e[g(207)])
        if (i(f, h)) return !1;
      for (const h of e.names)
        if (i(f, h)) return !0;
      return !1;
    }
    function d(f) {
      const g = t;
      return f instanceof Error ? f[g(2527)] || f.message : f;
    }
    function l() {
      const f = t;
      console[f(816)](f(1648));
    }
    return e[t(843)](e[t(366)]()), e;
  }
  return Zx = o, Zx;
}
var Ur;
function ri() {
  const o = r;
  return Ur ? hx.exports : (Ur = 1, (function(x, t) {
    const a = K;
    t.formatArgs = s, t[a(2675)] = n, t[a(366)] = i, t[a(805)] = e, t.storage = c(), t[a(1877)] = /* @__PURE__ */ (() => {
      let d = !1;
      return () => {
        const l = K;
        !d && (d = !0, console.warn(l(1648)));
      };
    })(), t[a(2701)] = [a(507), "#0000FF", a(911), a(2807), "#0066CC", a(2367), a(2286), a(1271), a(2291), "#00CC33", "#00CC66", "#00CC99", a(997), "#00CCFF", a(1852), a(2172), a(2445), a(1007), "#3366CC", a(1916), a(527), "#3399FF", "#33CC00", "#33CC33", a(2319), a(1317), a(1126), a(2432), a(345), a(2238), a(1641), a(1104), "#66CC00", a(650), a(1135), a(1847), a(807), a(2273), a(2035), a(646), "#CC0000", a(775), a(1945), a(2429), a(1085), a(2406), a(2511), "#CC3333", a(2767), a(2814), "#CC33CC", "#CC33FF", "#CC6600", a(813), a(2844), a(779), "#CCCC00", a(1202), a(1543), a(2068), "#FF0066", a(2226), a(2246), a(699), a(149), "#FF3333", a(600), a(2234), a(1985), a(2338), "#FF6600", a(2509), a(1977), "#FF9933", a(179), "#FFCC33"];
    function e() {
      const d = a;
      if (typeof window !== d(233) && window.process && (window[d(1336)].type === d(1470) || window[d(1336)].__nwjs)) return !0;
      if (typeof navigator !== d(233) && navigator[d(2271)] && navigator[d(2271)][d(2182)]().match(/(edge|trident)\/(\d+)/)) return !1;
      let l;
      return typeof document !== d(233) && document[d(780)] && document[d(780)][d(2133)] && document[d(780)].style[d(1580)] || typeof window !== d(233) && window[d(2177)] && (window[d(2177)][d(2106)] || window[d(2177)][d(1380)] && window.console[d(598)]) || typeof navigator < "u" && navigator[d(2271)] && (l = navigator.userAgent[d(2182)]()[d(1778)](/firefox\/(\d+)/)) && parseInt(l[1], 10) >= 31 || typeof navigator < "u" && navigator.userAgent && navigator[d(2271)].toLowerCase().match(/applewebkit\/(\d+)/);
    }
    function s(d) {
      const l = a;
      if (d[0] = (this[l(805)] ? "%c" : "") + this[l(270)] + (this.useColors ? l(1450) : " ") + d[0] + (this[l(805)] ? l(369) : " ") + "+" + x.exports.humanize(this[l(1572)]), !this[l(805)]) return;
      const f = l(1996) + this[l(1009)];
      d[l(1585)](1, 0, f, l(703));
      let g = 0, h = 0;
      d[0][l(1809)](/%[a-zA-Z%]/g, (m) => {
        m !== "%%" && (g++, m === "%c" && (h = g));
      }), d[l(1585)](h, 0, f);
    }
    t[a(2482)] = console.debug || console.log || (() => {
    });
    function n(d) {
      const l = a;
      try {
        d ? t[l(2300)][l(1141)](l(222), d) : t[l(2300)][l(1117)]("debug");
      } catch {
      }
    }
    function i() {
      const d = a;
      let l;
      try {
        l = t[d(2300)].getItem(d(222)) || t[d(2300)][d(2608)]("DEBUG");
      } catch {
      }
      return !l && typeof process !== d(233) && d(1441) in process && (l = process[d(1441)].DEBUG), l;
    }
    function c() {
      try {
        return localStorage;
      } catch {
      }
    }
    x[a(763)] = ti()(t);
    const { formatters: u } = x.exports;
    u.j = function(d) {
      const l = a;
      try {
        return JSON[l(1410)](d);
      } catch (f) {
        return l(697) + f[l(1354)];
      }
    };
  })(hx, hx[o(763)]), hx[o(763)]);
}
var ai = ri();
const zs = Us(ai);
zs.enable("*");
function si(o, x) {
  const t = r, a = zs(o), e = (s, n) => async function(...i) {
    try {
      await x({ level: s, messages: i });
    } catch {
    }
  };
  return a[t(2482)] = e("log"), a;
}
const ix = si(r(792), async ({ level: o, messages: x }) => {
  const t = r, { mcpMesh: a } = await Promise[t(753)]()[t(667)](() => Y2);
  await a.getNode(t(2882))[t(1999)][t(2482)]({ level: o, messages: x });
}), ni = { "preview.show": r(2743), "gateway.select_ai_service": "请选择AI服务", "provider.select.title": r(354), "provider.comfyui.description": r(1757), "provider.replicate.description": r(691), "provider.runninghub.description": "模型物美价廉，海量社区应用", "provider.google.description": r(966), "provider.sdppp_sponsor.description": r(2081), "task.waiting_upload": "正在等待图片上传...", "task.creating_task": r(1353), "task.running_duration": r(473), "task.cancelled": "任务已取消", "task.cancel_failed": "任务取消失败: {{error}}", "task.default_name": r(1893), "comfy.connect": "连接", "comfy.load_failed": r(993), "comfy.loading": r(1642), "comfy.channel_connecting": "通道连接中...", "comfy.server_reconnecting": r(2456), "comfy.version_mismatch": r(1422), "comfy.cloud_recommend": r(1973), "comfy.your_workflows": r(1906), "comfy.refresh_workflows": r(137), "comfy.queue_progress": "(队列:{{queueSize}}) {{progress}}% {{executingNodeTitle}}...", "comfy.save": "保存", "comfy.refresh": "刷新", "comfy.stop_cancel_all": r(1048), "comfy.stop_auto_run": r(2400), "comfy.start_auto_run": r(1759), "comfy.auto_run_status": r(1002), "comfy.run": "运行", "comfy.back": "返回", "comfy.uploading": r(2439), "comfy_simple.refreshing_preview": r(1382), "comfy.select_workflow": r(1884), "comfy.task.name": r(603), "comfy.error.task_cancelled": r(1167), "comfy.task.processing_progress": r(2534), "comfy.help_tooltip": r(2803), "comfy.no_workflow_selected": r(2202), "comfy_simple.missing_url": r(1063), "comfy_simple.loading_webview": r(2596), "comfy_simple.http_error": r(1318), "comfy_simple.wait_connect": r(2407), "comfy_simple.loading": r(1131), "comfy_simple.connection_required": "ComfyUI 未就绪", "comfy_simple.preview_empty": r(1861), "comfy_simple.progress.idle": "空闲", "comfy_simple.auto_run": "自动", "comfy_simple.workflow_quick": "快捷", "comfy_simple.multiplier.X1": "X1", "comfy_simple.multiplier.X2": "X2", "comfy_simple.multiplier.X4": "X4", "comfy_simple.multiplier.X10": r(2405), "comfy_simple.prompt_templates.manage_tooltip": r(1992), "comfy_simple.prompt_templates.button": r(2459), "comfy_simple.prompt_templates.save_error": r(213), "comfy_simple.prompt_templates.missing_key": r(873), "comfy_simple.prompt_templates.missing_value": "请填写提示词内容。", "comfy_simple.prompt_templates.duplicate_key": "模板名称已存在。", "comfy_simple.prompt_templates.save_success": r(695), "comfy_simple.prompt_templates.delete_confirm_title": "删除模板", "comfy_simple.prompt_templates.delete_confirm_content": r(2309), "comfy_simple.prompt_templates.delete_success": r(1776), "comfy_simple.prompt_templates.add_title": "新增模板", "comfy_simple.prompt_templates.edit_title": r(2111), "comfy_simple.prompt_templates.modal_title": "提示词模板", "comfy_simple.prompt_templates.description": r(2002), "comfy_simple.prompt_templates.add_button": r(2134), "comfy_simple.prompt_templates.name_placeholder": "模板名称", "comfy_simple.prompt_templates.value_placeholder": r(2530), "comfy_simple.fallback.title": r(1544), "comfy_simple.fallback.button": r(1544), "comfy_simple.prompt_templates.positive_label": r(1466), "comfy_simple.prompt_templates.negative_label": r(981), "comfy_simple.prompt_templates.negative_placeholder": r(787), "comfy_simple.prompt_templates.negative_empty": r(1301), "comfy_simple.prompt_templates.default_section": r(155), "comfy_simple.prompt_templates.default_empty": r(170), "comfy_simple.prompt_templates.default_tag": "默认", "comfy_simple.prompt_templates.custom_section": "我的模板", "comfy_simple.prompt_templates.custom_empty": "还没有自定义模板。", "comfy_simple.prompt_templates.applied_success": r(2232), "comfy_simple.prompt_templates.applied_failed": r(858), "comfy_simple.prompt_templates.apply_unavailable": "当前无法应用模板。", "comfy_simple.prompt_templates.apply_failed_missing_binding": "无法写入{{part}}提示词：未找到对应控件。", "comfy_simple.prompt_templates.apply_failed_caller_unavailable": r(1188), "comfy_simple.prompt_templates.apply_failed_set_error": "无法写入{{part}}提示词，请稍后重试。", "common.delete": "删除", "comfy_simple.preview_click_to_send": r(303), "comfy_simple.workflow_select.empty": r(1732), "comfy_simple.workflow_select.select": "选择", "comfy_simple.workflow_select.selected": "已选择", "comfy_simple.workflow_select.current": "当前", "comfy_simple.workflow_select.load_failed": "获取工作流列表失败。", "comfy_simple.workflow_select.members_only": r(1788), "boundary.title": "输入设置", "boundary.tooltip": r(2114), "boundary.current_canvas": r(959), "boundary.current_layer": r(2764), "boundary.current_selection": r(2454), "boundary.set_as_canvas": r(522), "boundary.set_as_layer": r(2186), "boundary.set_as_selection": "设为当前选区", "http.404": r(469), "http.401": r(148), "http.403": r(1907), "http.408": "请求超时 (408)", "http.500": r(837), "http.501": r(1723), "http.502": r(2700), "http.503": r(1816), "http.504": "网关超时 (504)", "http.unknown": r(1908), "runninghub.get_apikey": r(1133), "runninghub.apikey_placeholder": r(1019), "runninghub.app_id": r(2281), "runninghub.webapp_id_placeholder": r(361), "runninghub.open_app": r(2759), "runninghub.execute": "执行", "runninghub.running": r(1972), "runninghub.rh_coins": r(1121), "runninghub.current_tasks": r(735), "runninghub.help_tooltip": r(2803), "runninghub.stop_all": "停止全部", "runninghub.status.waiting": r(1200), "runninghub.status.running": r(300), "runninghub.status.failed": "执行失败", "runninghub.status.success": "执行成功", "image.auto_refetch": r(2128), "local_resource.selection.images": "图片", "runninghub.error.get_result_failed": r(2328), "runninghub.error.task_failed": "任务执行失败: {{error}}", "runninghub.error.task_incomplete": r(159), "runninghub.error.account_status_http": "getAccountStatus API 调用失败 - HTTP 错误，状态: {{status}}", "runninghub.error.account_status_reason_unknown": r(1774), "runninghub.error.account_status_failed": r(1128), "runninghub.error.form_data_http": "getNodes API 调用失败 - HTTP 错误，状态: {{status}}", "runninghub.error.form_data_reason_unknown": r(403), "runninghub.error.form_data_failed": r(1459), "runninghub.error.node_info_missing": r(197), "runninghub.error.run_http": r(417), "runninghub.error.run_reason_default": "任务执行失败", "runninghub.error.run_failed": r(2292), "runninghub.error.status_http": r(1660), "runninghub.error.status_reason_unknown": "获取任务状态失败", "runninghub.error.status_failed": r(2125), "runninghub.error.outputs_http": "outputs API 调用失败 - HTTP 错误，状态: {{status}}", "runninghub.error.outputs_failed": r(1531), "runninghub.task.title": r(405), "runninghub.error.upload_http": r(1546), "runninghub.error.upload_reason_unknown": r(2220), "runninghub.error.upload_failed": "uploadImage API 调用失败 - {{reason}}", "runninghub.error.services_unavailable": r(224), "customapi.error.no_image_returned": r(769), "customapi.error.openai_api": r(726), "customapi.error.input_required": "需要提供图像和提示词", "customapi.error.generation_failed": r(454), "customapi.error.model_required": r(442), "customapi.task.name.google": "Google Gemini - 图片生成", "customapi.task.name.openai": r(245), "customapi.error.unsupported_image_input": r(1554), "replicate.get_apikey": r(2496), "replicate.apikey_placeholder": r(2678), "replicate.execute": "执行", "replicate.model_placeholder": r(2585), "replicate.help_tooltip": r(2803), "replicate.loading": "加载中...", "replicate.running": r(1972), "replicate.stop": "停止", "replicate.error.result_fetch_failed": r(907), "liblib.get_apikey": r(2824), "liblib.execute": "执行", "common.close": "关闭", "common.save": "保存", "common.save_and_run": r(668), "common.loading": r(919), "common.list_separator": "、", "common.error": "错误", "common.error.unknown": r(296), "common.error.task_creation_aborted": "任务创建已中止", "common.error.status_check_aborted": "状态检查已中止", "common.error.result_fetch_aborted": r(1507), "common.error.upload_aborted": r(2515), "common.success": "成功", "common.failed": "失败", "common.generating": r(2535), "common.cancel": "取消", "common.confirm": "确认", "common.options": "选项", "common.options_separator": "=== 选项 ===", "upload_pass.error.unsupported_type": r(628), "upload_pass.error.uploader_missing": "未配置上传器", webviewInForeground: "插件可能正在拦截 PS 快捷键... ", webviewInForeground2: r(1909), "auth.login_success": r(1300), "auth.username_label": r(796), "auth.email_label": "邮箱: {{email}}", "auth.logout": r(2036), "auth.login_required": r(849), "image.send.select_position": r(1815), "image.send.sending": r(151), "image.layer.new": r(1194), "image.layer.current": r(2764), "image.layer.fit_to_current": r(942), "image.layer.fit_to_selection": "适配至选区", "image.layer.fit_to_canvas": r(1890), "image.shortcut_auth_required": "快捷键选图功能仅登陆后可用", "image.shortcut_focus_required": r(1003), "image.get.select_image": r(2267), "image.get.entire_canvas": r(959), "image.get.canvas": "画布", "image.get.current_layer": r(2764), "image.get.current_layer_bounds": r(1358), "image.get.selection_bounds": r(490), "image.get.canvas_bounds": r(975), "image.crop_by_selection": r(841), "image.limit_size": r(231), "image.crop.none": r(1045), "image.crop.inpaint": "反向裁剪(Inpaint)", "image.crop.outpaint": r(1284), "image.send_all": "发送所有", "image.save_all": r(563), "image.save_current": r(265), "image.delete_current": r(1151), "image.more_actions": r(2126), "image.jump_to_last": "跳转到最后一个", "image.clear_all": r(615), "image.send_to_ps": r(271), "image.download": "下载", "image.copy": "复制", "image.sending": r(2452), "image.sending_all": r(481), "mask.get.select_mask": "请选择要获取的遮罩", "mask.selection": "选区", "mask.current_layer_bounds": r(2488), "mask.all": "全部", "mask.selection_exclude": r(248), "mask.current_layer_exclude": r(943), "mask.empty": "空", "widgetable.photoshop.deprecated_node": "SDPPP 2.0 不再需要此节点", "work_boundary.error.empty_selection_mask": r(1706), "work_boundary.error.primary_resource_missing": r(1990), "work_boundary.error.mask_resource_missing": r(458), "work_boundary.error.mask_apply_empty": r(1761), "document {{0}} not found": r(641), "create document for preview": r(799), "resize document for preview": r(1552), "create document for sent images": r(1754), "show sent images": r(1011), "create layer failed": "创建图层失败", "layer not found {{0}}": r(1405), "layer not found: {{0}}": "找不到图层: {{0}}", "layer {{0}} is not a group": r(2058), "no linked layer for {{0}}": r(905), "no first related layer in {{0}}": r(2388), "merge group failed": r(135), "get content of layer {{0}}": r(2860), "get layer info": "获取图层信息", "get_layer_info: layer_identify required": r(947), "get pixel of {{0}} failed": r(2079), "get selection failed": "获取选区失败", "invalid name: {{0}}": r(2027), "desire bounds is null": "目标边界为空", "intersect or scaledDesire is null": r(2621), 'only layer kind "TEXT" is supported, invalid layer: {{0}}': r(1481), "select layer": r(721), "run Photoshop Action": "sdppp 运行 Photoshop Action", "Action {{0}} not found": "Action {{0}} 未找到", "Action set {{0}} not found": "ActionSet {{0}} 未找到", "set text to layer": "设置图层的文本", "ComfyManager not found, cannot reboot": r(1123), "Failed to reboot ComfyUI": "重启ComfyUI失败", "image.upload.from_canvas": "画布", "image.upload.from_curlayer": r(2764), "image.upload.from_selection": "选区", "image.upload.from_harddisk": "磁盘", "image.upload.clear": "清空", "image.upload.uploading": r(1931), "image.upload.syncing": r(1315), "image.upload.no_images": r(1332), "image.upload.error": "上传失败，请重试", "image.upload.tooltip.more_options_hint": r(1163), "image.upload.tooltip.alt.crop": r(814), "image.upload.tooltip.alt.reverse": r(2799), "image.upload.tooltip.image.canvas": "从 画布 获取图像", "image.upload.tooltip.image.curlayer": r(602), "image.upload.tooltip.mask.curlayer": r(1143), "image.upload.tooltip.mask.selection": r(1064), "image.upload.tooltip.mask.canvas": "从 画布 获取遮罩", "image.upload.tooltip.cut_action": `获取图像 &
裁剪选区遮罩`, "image.upload.tooltip.scan_action": r(1676), "image.upload.tooltip.autosync.on": r(2810), "image.upload.tooltip.autosync.off": r(1433), "image.upload.tooltip.sync_action": r(715), "image.upload.autosync.fetching": r(627), "image.upload.autosync.status.enabled": r(2788), "image.upload.autosync.status.disabled": r(1553), "image.upload.tooltip.current.canvas": r(2858), "image.upload.tooltip.current.layer": "当前选项：图层", "image.upload.tooltip.current.layer_named": r(2119), "image.upload.tooltip.current.file": r(647), "image.upload.retry": "重试", "image.pack.local.button": "本地图片包", "image.pack.local.empty": r(1332), "image.auto_send_enabled": r(1054), "image.auto_send_disabled": "自动填入画布关闭", "image.upload.primary.auto": r(453), "image.upload.primary.manual": r(2455), "image.upload.primary.hint": "该节点默认继承当前图层与遮罩", "image.upload.primary.cut": "裁剪", "image.upload.primary.scan": "扫描", "image.upload.primary.hint.line1": r(2066), "image.upload.primary.hint.line2": "主图", "workflow.output.destination.title": r(2190), "workflow.output.destination.canvas": "全图", "image.upload.primary.advanced": r(1105), "image.upload.primary.advanced.modify": "修改", "image.upload.primary.advanced.reset": "重置", "image.upload.primary.advanced.local_file": r(2866), "image.upload.primary.advanced.content.canvas": "画布", "image.upload.primary.advanced.content.curlayer": r(2764), "image.upload.primary.advanced.content.selection": "选区", "image.upload.primary.advanced.boundary.canvas": r(1074), "image.upload.primary.advanced.boundary.curlayer": r(825), "image.upload.primary.advanced.boundary.selection": r(195), "image.upload.primary.advanced.boundary.primary": r(1671), "image.upload.source.file.tooltip": r(1040), "image.upload.mode.file.label": "文件", "image.upload.mode.layer.label": "图层", "image.upload.mode.canvas.label": "画布", "image.upload.source.layer.tooltip": r(790), "image.upload.source.canvas.tooltip": r(1304), "image.upload.dropHint": "拖拽图片到此处松开完成上传", "image.upload.tooltip.clear_action": r(479), "image.upload.status.layer.short_named": r(2194), "image.upload.status.layer.short": "图层", "image.upload.status.file.short": "本地文件", "image.upload.status.canvas.short": "画布", "image.upload.status.file.active": r(2233), "image.upload.status.file.resetHint": r(2865), "image.upload.status.mask.resetHint": "点击恢复默认遮罩", "image.upload.status.mask.modified": "已添加遮罩", "image.upload.status.boundary.resetHint": "点击恢复默认边界", "image.upload.status.boundary.modified": r(156), "image.upload.status.boundary.docMismatch": r(204), "image.upload.mask.button": "选区遮罩", "image.upload.mask.selection": r(1134), "image.upload.mask.layer": "图层遮罩", "image.upload.remove_slot": r(1144), "image.upload.add_slot": r(2467), "video.local.button": r(2603), "video.local.empty": "暂无视频", "video.local.remove": r(2706), "source.source": "来源", "source.content": "内容", "source.boundary": "范围", "source.mask": "遮罩", "source.disk": "磁盘", "source.remote": "远端", "source.unknown": "未知", "source.ps_image": r(2409), "source.ps_mask": r(778), "source.canvas": "整个画布", "source.current_layer": r(2764), "source.selection": "选区", "source.quality_percent": r(794), "source.crop.positive": r(2352), "source.crop.negative": r(525), "source.reverse": "反转", "send_images.create_document": r(782), "send_images.create_document_failed": r(1242), "photoshop.no_active_document": r(1946), "photoshop.rectangle_coordinates_required": r(1179), "photoshop.create_guide_frame": "创建参考线框架", "photoshop.clear_guide_frame": r(1528), "photoshop.invalid_action": r(399), "photoshop.file_not_found": "文件未找到: {{path}}", "photoshop.failed_to_open_file_as_document": "无法将文件作为文档打开: {{path}}", "photoshop.invalid_boundary": "无效边界: 左边必须小于右边，上边必须小于下边", "photoshop.failed_to_open_image_file": "无法打开图像文件: {{error}}", "photoshop.open_images_from_file": r(1881), "photoshop.failed_to_create_document_from_file": r(1746), "google.field.image_input": "输入图像", "google.field.prompt": r(2459), "google.field.batch_count": r(1717), "google.field.images_per_batch": r(2582), "google.status.success": "成功", "google.status.failed": "失败", "google.status.generating": r(2614), "google.apikey_placeholder": "请输入您的 Google API Key", "google.baseurl_placeholder": r(1379), "google.get_apikey": r(2572), "google.help_tooltip": r(1576), "google.model_name": r(999), "google.model_label": "模型", "google.model_placeholder": r(729), "google.stop": "停止", "google.loading": "加载中...", "google.generating": "生成中...", "google.generate": "生成", "image.auto_toggle": "自动", "image.import_as_smartobject": r(1468), "image.import_as_newdoc": r(1632), "image.boundary": "边界", "image.import_tip": "按住 Shift 键以新文档方式导入", "image.import_selection_button": r(2666), "image.import_auto_hint": r(474), "image.import_selection_hint": "使用当前选区边界", "auth.guest_login_success": r(1704), "boundary.canvas": "画布", "boundary.select_boundary": "选择边界", "boundary.selection": "选区", "boundary.max_size": "尺寸限制 (px)", "boundary.max_size_error": r(443), "boundary.max_size_hint": r(2143), "boundary.max_size_placeholder": r(2143), "boundary.no_limit": "不限", "boundary.image_quality": r(624), "boundary.image_quality_required": r(1950), "boundary.image_quality_range": r(669), "boundary.preview_main_image": r(205), "boundary.preview_select": r(1024), "boundary.preview_alt": r(916), "boundary.preview_placeholder": "点击使用当前选区", "boundary.settings": r(177), "convert widget {0} failed:": r(2833), "document {0} not found": r(601), "image.document.new": r(1521), "image.layer.smart_object": r(1811), "layer not found {0}": r(644), "photoshop.invalid_boundary_type": r(1876), "photoshop.no_active_layer": r(1026), "auth.login_hint": r(2896), "task.running": r(1972), "task.execute": "运行", "task.stop": "停止", "task.importing_image": "正在导入图片 {{index}}/{{total}}...", "task.error.send_image_failed": r(2780), "task.error.failed_status": r(1264), "taskrouter.template_placeholder": r(373), "taskrouter.balance": r(1057), "taskrouter.recharge": r(2120), "taskrouter.refresh_balance": r(1232), "taskrouter.no_schema": r(622), "taskrouter.config.base_url": r(2444), "taskrouter.config.supabase_url": r(2565), "taskrouter.config.supabase_anon_key": "Supabase 匿名密钥", "taskrouter.error.remote_config_missing": "缺少 TaskRouter 远端配置：{{missing}}。请检查远端配置后重试。", "taskrouter.error.client_missing": "TaskRouter 客户端未初始化", "taskrouter.error.template_missing": r(1262), "taskrouter.error.upload_provider_incompatible": r(1227), "taskrouter.error.deferred_upload_failed": "延迟上传失败: {{error}}", "taskrouter.error.upload_control_unsupported": r(2639), "taskrouter.error.upload_resource_missing": r(2564), "taskrouter.error.tenant_unresolved": r(2641), "taskrouter.error.supabase_session_failed": "获取 Supabase 会话失败: {{error}}", "taskrouter.status.preparing": r(2340), "taskrouter.status.uploading": r(1830), "taskrouter.status.validating": r(1569), "taskrouter.status.creating": r(1353), "taskrouter.tab.editor": "运行", "taskrouter.tab.history": r(456), "taskrouter.history.importing": "正在导入历史图片...", "taskrouter.history.send_failed_resource": r(2597), "taskrouter.history.send_failed_identifier": r(1615), "taskrouter.history.send_success": r(223), "taskrouter.history.select_prompt": "请选择一个历史任务", "taskrouter.history.duration_prefix": "耗时", "taskrouter.history.duration_unit": "秒", "taskrouter.history.createdAt": r(372), "taskrouter.history.charge": r(2588), "taskrouter.history.charge_value": r(1241), "taskrouter.history.images": r(985), "taskrouter.history.retry": r(320), "taskrouter.history.id": r(523), "taskrouter.history.message": r(1237), "taskrouter.history.no_images": r(1447), "taskrouter.history.client_missing": r(1343), "taskrouter.history.limit_notice": "当前版本限制获取最近10条", "taskrouter.history.refresh": "刷新", "taskrouter.history.detail_title": r(808), "taskrouter.history.loading": r(377), "taskrouter.history.empty": r(2742), "taskrouter.history.started_at_label": r(1001), "taskrouter.history.status.pending": r(2219), "taskrouter.history.status.running": "运行中", "taskrouter.history.status.completed": "已完成", "taskrouter.history.status.failed": "失败", "taskrouter.history.status.cancelled": r(838), "plugin.menu.view_logs": r(2583), "plugin.log.saved": r(432), "plugin.log.save_failed": r(1614), "dialog.image_source.title": r(1966), "dialog.image_source.primary_canvas": r(1944), "dialog.image_source.primary_curlayer": r(2617), "dialog.image_source.canvas_canvas": r(491), "dialog.image_source.canvas_curlayer": "以画布边界获取当前图层", "dialog.image_source.curlayer_canvas": r(1619), "dialog.image_source.curlayer_curlayer": r(2526), "dialog.image_source.local_file": r(2866), "dialog.simple_source.title": r(2051), "dialog.simple_source.canvas": "画布", "dialog.simple_source.current_layer": r(2764), "dialog.simple_source.local_file": "选择文件", "dialog.simple_source.no_active_layer": r(1263), "dialog.simple_source.pick_error": r(906) }, oi = { "preview.show": r(1927), "gateway.select_ai_service": "Please select AI service", "provider.select.title": r(1245), "provider.comfyui.description": r(902), "provider.replicate.description": "Cloud-based model service platform", "provider.runninghub.description": r(2800), "provider.google.description": "OpenAI/Google format API", "provider.sdppp_sponsor.description": r(2393), "task.waiting_upload": r(528), "task.creating_task": r(2389), "task.running_duration": r(1831), "task.cancelled": r(2746), "task.cancel_failed": r(2548), "task.default_name": r(2741), "comfy.connect": r(2374), "comfy.load_failed": r(1149), "comfy.loading": "ComfyUI loading...", "comfy.channel_connecting": r(1960), "comfy.server_reconnecting": r(1930), "comfy.version_mismatch": r(1486), "comfy.cloud_recommend": r(1971), "comfy.your_workflows": "Your Workflows", "comfy.refresh_workflows": r(557), "comfy.queue_progress": r(1917), "comfy.save": r(2431), "comfy.refresh": r(1158), "comfy.stop_cancel_all": r(2324), "comfy.stop_auto_run": r(2096), "comfy.start_auto_run": "Auto run after canvas change", "comfy.auto_run_status": "Auto-run workflow after changes...", "comfy.run": r(1046), "comfy.back": "Back", "comfy.uploading": "Uploading...", "comfy_simple.refreshing_preview": r(783), "comfy.select_workflow": "Select Workflow", "comfy.task.name": r(603), "comfy.error.task_cancelled": r(2746), "comfy.task.processing_progress": r(2359), "comfy.help_tooltip": r(400), "comfy.no_workflow_selected": r(1012), "comfy_simple.missing_url": r(1517), "comfy_simple.loading_webview": "Connecting to ComfyUI...", "comfy_simple.http_error": r(1856), "comfy_simple.wait_connect": r(185), "comfy_simple.loading": r(429), "comfy_simple.connection_required": r(2609), "comfy_simple.preview_empty": r(2794), "comfy_simple.progress.idle": r(2571), "comfy_simple.auto_run": "Auto", "comfy_simple.workflow_quick": r(317), "comfy_simple.multiplier.X1": "X1", "comfy_simple.multiplier.X2": "X2", "comfy_simple.multiplier.X4": "X4", "comfy_simple.multiplier.X10": r(2405), "comfy_simple.prompt_templates.manage_tooltip": r(2287), "comfy_simple.prompt_templates.button": "Prompts", "comfy_simple.prompt_templates.save_error": r(2305), "comfy_simple.prompt_templates.missing_key": r(1712), "comfy_simple.prompt_templates.missing_value": r(917), "comfy_simple.prompt_templates.duplicate_key": "Template name already exists.", "comfy_simple.prompt_templates.save_success": r(617), "comfy_simple.prompt_templates.delete_confirm_title": r(2877), "comfy_simple.prompt_templates.delete_confirm_content": r(1426), "comfy_simple.prompt_templates.delete_success": r(736), "comfy_simple.prompt_templates.add_title": r(894), "comfy_simple.prompt_templates.edit_title": "Edit Template", "comfy_simple.prompt_templates.modal_title": r(2013), "comfy_simple.prompt_templates.description": r(2117), "comfy_simple.prompt_templates.add_button": "New Template", "comfy_simple.prompt_templates.name_placeholder": r(2899), "comfy_simple.prompt_templates.value_placeholder": "Prompt content", "comfy_simple.fallback.title": r(2366), "comfy_simple.fallback.button": "More Settings", "comfy_simple.prompt_templates.positive_label": r(2778), "comfy_simple.prompt_templates.negative_label": r(705), "comfy_simple.prompt_templates.negative_placeholder": r(802), "comfy_simple.prompt_templates.negative_empty": r(2604), "comfy_simple.prompt_templates.default_section": r(1427), "comfy_simple.prompt_templates.default_empty": r(2586), "comfy_simple.prompt_templates.default_tag": r(2045), "comfy_simple.prompt_templates.custom_section": "My Templates", "comfy_simple.prompt_templates.custom_empty": r(247), "comfy_simple.prompt_templates.applied_success": r(1490), "comfy_simple.prompt_templates.applied_failed": r(1555), "comfy_simple.prompt_templates.apply_unavailable": r(2212), "comfy_simple.prompt_templates.apply_failed_missing_binding": r(1681), "comfy_simple.prompt_templates.apply_failed_caller_unavailable": r(1583), "comfy_simple.prompt_templates.apply_failed_set_error": r(1112), "common.delete": r(397), "comfy_simple.preview_click_to_send": r(1006), "comfy_simple.workflow_select.empty": "No workflows available.", "comfy_simple.workflow_select.select": r(1455), "comfy_simple.workflow_select.selected": "Selected", "comfy_simple.workflow_select.current": r(2793), "comfy_simple.workflow_select.load_failed": r(1729), "comfy_simple.workflow_select.members_only": " (Members only)", "boundary.title": "Input Setting", "boundary.tooltip": r(932), "boundary.current_canvas": r(2311), "boundary.current_layer": r(2889), "boundary.current_selection": r(2708), "boundary.set_as_canvas": r(1669), "boundary.set_as_layer": r(2626), "boundary.set_as_selection": r(781), "http.404": r(406), "http.401": r(2242), "http.403": r(2655), "http.408": r(1541), "http.500": r(2248), "http.501": r(2513), "http.502": "Gateway error (502)", "http.503": r(2071), "http.504": "Gateway timeout (504)", "http.unknown": r(793), "runninghub.get_apikey": r(1680), "runninghub.apikey_placeholder": r(449), "runninghub.app_id": "App ID:", "runninghub.webapp_id_placeholder": r(2007), "runninghub.open_app": "Press Enter to open app: {{appName}}", "runninghub.execute": r(764), "runninghub.running": "Running...", "runninghub.rh_coins": r(609), "runninghub.current_tasks": r(2050), "runninghub.help_tooltip": "Tutorial", "runninghub.stop_all": "Stop all", "runninghub.status.waiting": r(2116), "runninghub.status.running": r(1175), "runninghub.status.failed": r(1894), "runninghub.status.success": r(1178), "image.auto_refetch": r(2100), "local_resource.selection.images": "Images", "runninghub.error.get_result_failed": r(1314), "runninghub.error.task_failed": r(1562), "runninghub.error.task_incomplete": r(1228), "runninghub.error.account_status_http": r(2734), "runninghub.error.account_status_reason_unknown": r(2019), "runninghub.error.account_status_failed": "getAccountStatus API failed - {{reason}}", "runninghub.error.form_data_http": "getNodes API failed - HTTP error! status: {{status}}", "runninghub.error.form_data_reason_unknown": r(1289), "runninghub.error.form_data_failed": r(2820), "runninghub.error.node_info_missing": "run API failed - nodeInfoList unavailable. Please call getNodes() first.", "runninghub.error.run_http": "run API failed - HTTP error! status: {{status}}", "runninghub.error.run_reason_default": r(2763), "runninghub.error.run_failed": "run API failed - {{reason}}", "runninghub.error.status_http": r(821), "runninghub.error.status_reason_unknown": "Failed to get task status", "runninghub.error.status_failed": r(2624), "runninghub.error.outputs_http": r(1829), "runninghub.error.outputs_failed": r(191), "runninghub.task.title": "RunningHub - {{webappId}}", "runninghub.error.upload_http": r(2681), "runninghub.error.upload_reason_unknown": r(1195), "runninghub.error.upload_failed": r(1018), "runninghub.error.services_unavailable": "SDPPPX services are not available", "customapi.error.no_image_returned": r(2475), "customapi.error.openai_api": r(1185), "customapi.error.input_required": "Image input and prompt are required", "customapi.error.generation_failed": r(926), "customapi.error.model_required": "Please enter a model name", "customapi.task.name.google": "Google Gemini - Image Generation", "customapi.task.name.openai": r(742), "customapi.error.unsupported_image_input": "Unsupported image input type", "replicate.get_apikey": r(2282), "replicate.apikey_placeholder": r(1767), "replicate.execute": r(764), "replicate.model_placeholder": r(1694), "replicate.help_tooltip": r(400), "replicate.loading": r(2276), "replicate.running": r(2080), "replicate.stop": "Stop", "replicate.error.result_fetch_failed": r(415), "liblib.get_apikey": r(217), "liblib.execute": r(764), "common.close": r(1938), "common.save": r(2431), "common.save_and_run": r(1294), "common.loading": r(2276), "common.list_separator": ", ", "common.error": r(2353), "common.error.unknown": "Unknown error", "common.error.task_creation_aborted": "Task creation aborted", "common.error.status_check_aborted": r(2493), "common.error.result_fetch_aborted": r(355), "common.error.upload_aborted": r(447), "common.success": r(1178), "common.failed": r(1894), "common.generating": r(553), "common.cancel": r(946), "common.confirm": r(1860), "common.options": r(1398), "common.options_separator": "=== Options ===", "upload_pass.error.unsupported_type": r(2837), "upload_pass.error.uploader_missing": r(2017), webviewInForeground: "PS shortcuts may be blocked by plugin...", webviewInForeground2: r(1886), "auth.login_success": r(2272), "auth.username_label": r(1883), "auth.email_label": "Email: {{email}}", "auth.logout": r(854), "auth.login_required": "Please login to use the plugin", "image.send.select_position": "Please select the position to send image", "image.send.sending": r(2217), "image.layer.new": r(214), "image.layer.current": r(2889), "image.layer.fit_to_current": "Fit to current layer", "image.layer.fit_to_selection": r(1982), "image.layer.fit_to_canvas": r(922), "image.shortcut_auth_required": r(1395), "image.shortcut_focus_required": "Plugin window focused required to use keyboard shortcut", "image.get.select_image": r(286), "image.get.entire_canvas": r(2311), "image.get.canvas": r(1604), "image.get.current_layer": "Current Layer", "image.get.current_layer_bounds": "Current layer bounds only", "image.get.selection_bounds": r(1800), "image.get.canvas_bounds": "Canvas bounds", "image.crop_by_selection": "Crop by selection", "image.limit_size": "Limit image size", "image.crop.none": r(2369), "image.crop.inpaint": r(1922), "image.crop.outpaint": r(1683), "image.send_all": "Send all", "image.save_all": r(1209), "image.save_current": r(1376), "image.delete_current": r(506), "image.more_actions": r(896), "image.jump_to_last": r(2677), "image.clear_all": "Clear all", "image.send_to_ps": r(1561), "image.download": r(2670), "image.copy": r(1378), "image.sending": "Sending...", "image.sending_all": "Sending all images...", "mask.get.select_mask": "Please select the mask to get", "mask.selection": r(2105), "mask.current_layer_bounds": r(2253), "mask.all": r(1533), "mask.selection_exclude": r(2361), "mask.current_layer_exclude": r(1582), "mask.empty": r(2604), "widgetable.photoshop.deprecated_node": r(1505), "work_boundary.error.empty_selection_mask": r(1511), "work_boundary.error.primary_resource_missing": "Primary image resource is missing", "work_boundary.error.mask_resource_missing": r(681), "work_boundary.error.mask_apply_empty": r(913), "document {{0}} not found": "Document {{0}} not found", "create document for preview": "Create document for preview", "resize document for preview": "Resize document for preview", "create document for sent images": "Create document for sent images", "show sent images": r(704), "create layer failed": "Create layer failed", "layer not found {{0}}": r(988), "layer not found: {{0}}": r(698), "layer {{0}} is not a group": r(253), "no linked layer for {{0}}": r(1839), "no first related layer in {{0}}": r(1659), "merge group failed": r(2064), "get content of layer {{0}}": "Get content of layer {{0}}", "get layer info": r(139), "get_layer_info: layer_identify required": "get_layer_info requires layer_identify", "get pixel of {{0}} failed": r(488), "get selection failed": r(2888), "invalid name: {{0}}": r(2307), "desire bounds is null": r(2629), "intersect or scaledDesire is null": "Intersect or scaledDesire is null", 'only layer kind "TEXT" is supported, invalid layer: {{0}}': r(2775), "select layer": r(192), "run Photoshop Action": r(1442), "Action {{0}} not found": r(2277), "Action set {{0}} not found": r(1820), "set text to layer": r(2479), "ComfyManager not found, cannot reboot": r(998), "Failed to reboot ComfyUI": r(1251), "image.upload.from_canvas": r(1604), "image.upload.from_curlayer": "Current Layer", "image.upload.from_selection": r(2105), "image.upload.from_harddisk": r(550), "image.upload.clear": r(760), "image.upload.uploading": r(274), "image.upload.syncing": "Syncing assets", "image.upload.no_images": r(1868), "image.upload.error": "Upload failed, please try again", "image.upload.tooltip.alt.crop": r(1229), "image.upload.tooltip.alt.reverse": r(1748), "image.upload.tooltip.image.canvas": r(2699), "image.upload.tooltip.image.curlayer": r(190), "image.upload.tooltip.mask.canvas": r(1e3), "image.upload.tooltip.mask.curlayer": "Get mask from Current Layer", "image.upload.tooltip.mask.selection": r(1864), "image.upload.tooltip.cut_action": r(621), "image.upload.tooltip.scan_action": `Get image &
Limit image boundary`, "image.upload.tooltip.autosync.on": "Auto Sync: on", "image.upload.tooltip.autosync.off": r(2239), "image.upload.tooltip.sync_action": "Sync current content", "image.upload.tooltip.more_options_hint": r(1644), "image.upload.tooltip.current.canvas": r(2622), "image.upload.tooltip.current.layer": r(2343), "image.upload.tooltip.current.layer_named": r(1509), "image.upload.tooltip.current.file": r(1779), "image.upload.autosync.fetching": r(1762), "image.upload.autosync.status.enabled": r(711), "image.upload.autosync.status.disabled": r(1610), "image.upload.retry": "Retry", "image.pack.local.button": r(298), "image.pack.local.empty": r(1328), "image.auto_send_enabled": r(1086), "image.auto_send_disabled": r(391), "image.upload.primary.auto": r(1762), "image.upload.primary.manual": r(2816), "image.upload.primary.cut": r(1563), "image.upload.primary.scan": r(1430), "image.upload.primary.hint": r(2001), "image.upload.primary.hint.line1": r(230), "image.upload.primary.hint.line2": r(571), "workflow.output.destination.title": r(888), "workflow.output.destination.canvas": r(341), "image.upload.primary.advanced": r(1254), "image.upload.primary.advanced.modify": r(607), "image.upload.primary.advanced.reset": r(1311), "image.upload.primary.advanced.local_file": r(2773), "image.upload.primary.advanced.content.canvas": "Canvas", "image.upload.primary.advanced.content.curlayer": r(1015), "image.upload.primary.advanced.content.selection": "Selection", "image.upload.primary.advanced.boundary.canvas": r(2285), "image.upload.primary.advanced.boundary.curlayer": r(2315), "image.upload.primary.advanced.boundary.selection": "Selection boundary", "image.upload.primary.advanced.boundary.primary": r(2446), "image.upload.mode.file.label": r(2318), "image.upload.mode.layer.label": "Layer", "image.upload.mode.canvas.label": r(1604), "image.upload.source.file.tooltip": r(1781), "image.upload.source.layer.tooltip": r(1083), "image.upload.source.canvas.tooltip": r(1428), "image.upload.dropHint": r(1335), "image.upload.tooltip.clear_action": r(1655), "image.upload.status.layer.short_named": r(2046), "image.upload.status.layer.short": "Layer", "image.upload.status.file.short": r(2773), "image.upload.status.canvas.short": r(1604), "image.upload.status.file.active": "Using local file", "image.upload.status.file.resetHint": r(2541), "image.upload.status.mask.resetHint": "Click to restore default mask", "image.upload.status.mask.modified": r(1277), "image.upload.status.boundary.resetHint": r(832), "image.upload.status.boundary.modified": r(2664), "image.upload.status.boundary.docMismatch": r(169), "image.upload.mask.button": "Selection mask", "image.upload.mask.selection": "Selection mask", "image.upload.mask.layer": r(1221), "image.upload.remove_slot": r(842), "image.upload.add_slot": r(929), "video.local.button": r(2266), "video.local.empty": r(1953), "video.local.remove": "Remove video", "source.source": "Source", "source.content": r(1936), "source.boundary": "Bounds", "source.mask": r(2465), "source.disk": "Disk", "source.remote": r(1258), "source.unknown": r(935), "source.ps_image": "PS", "source.ps_mask": "PS", "source.canvas": r(1604), "source.current_layer": "CurLayer", "source.selection": r(2105), "source.quality_percent": "Quality {{percent}}%", "source.crop.positive": "Positive Crop", "source.crop.negative": r(1308), "source.reverse": r(1924), "send_images.create_document": "Create document", "send_images.create_document_failed": "Create document failed", "photoshop.no_active_document": r(1979), "photoshop.rectangle_coordinates_required": r(511), "photoshop.create_guide_frame": r(2615), "photoshop.clear_guide_frame": r(1911), "photoshop.invalid_action": r(1400), "photoshop.file_not_found": r(321), "photoshop.failed_to_open_file_as_document": r(1201), "photoshop.invalid_boundary": r(2223), "photoshop.failed_to_open_image_file": r(1512), "photoshop.open_images_from_file": r(2717), "photoshop.failed_to_create_document_from_file": r(1639), "google.field.image_input": r(956), "google.field.prompt": "Prompt", "google.field.batch_count": r(1646), "google.field.images_per_batch": "Images Per Batch", "google.status.success": "Success", "google.status.failed": r(1894), "google.status.generating": "Generating", "google.apikey_placeholder": "Enter Google API Key", "google.get_apikey": r(2061), "google.baseurl_placeholder": r(1290), "google.help_tooltip": r(2676), "google.model_name": r(2680), "google.model_label": r(2756), "google.model_placeholder": r(1252), "google.stop": r(2569), "google.loading": r(2276), "google.generating": r(553), "google.generate": r(2795), "image.auto_toggle": r(463), "image.import_as_smartobject": r(2716), "image.import_as_newdoc": r(1654), "image.boundary": "Boundary", "image.import_tip": r(1342), "image.import_selection_button": r(411), "image.import_auto_hint": r(872), "image.import_selection_hint": r(1253), "auth.guest_login_success": r(1794), "boundary.canvas": r(1604), "boundary.select_boundary": r(2218), "boundary.selection": r(2105), "boundary.max_size": r(1306), "boundary.max_size_error": r(1991), "boundary.max_size_hint": r(591), "boundary.max_size_placeholder": r(591), "boundary.no_limit": r(262), "boundary.image_quality": r(2196), "boundary.image_quality_required": r(2801), "boundary.image_quality_range": "Range 1-100", "boundary.preview_main_image": "Output to", "boundary.preview_select": r(875), "boundary.preview_alt": r(371), "boundary.preview_placeholder": "Click to use current selection", "boundary.settings": r(380), "convert widget {0} failed:": "Failed to convert widget {0}:", "document {0} not found": r(1621), "image.document.new": r(234), "image.layer.smart_object": r(1501), "layer not found {0}": "Layer {0} not found", "photoshop.invalid_boundary_type": "Invalid boundary type: {{type}}", "photoshop.no_active_layer": r(970), "auth.login_hint": r(2779), "task.running": "Running...", "task.execute": r(1046), "task.stop": r(2569), "task.importing_image": r(242), "task.error.send_image_failed": "Failed to send image {{index}}: {{error}}", "task.error.failed_status": r(476), "taskrouter.template_placeholder": r(1719), "taskrouter.balance": r(852), "taskrouter.recharge": r(1750), "taskrouter.refresh_balance": r(1980), "taskrouter.no_schema": r(1602), "taskrouter.config.base_url": r(2423), "taskrouter.config.supabase_url": "Supabase URL", "taskrouter.config.supabase_anon_key": r(1540), "taskrouter.error.remote_config_missing": r(2097), "taskrouter.error.client_missing": "TaskRouter client is not initialized", "taskrouter.error.template_missing": r(2521), "taskrouter.error.upload_provider_incompatible": r(2853), "taskrouter.error.deferred_upload_failed": r(1862), "taskrouter.error.upload_control_unsupported": r(2345), "taskrouter.error.upload_resource_missing": r(1295), "taskrouter.error.tenant_unresolved": "Failed to resolve tenant information", "taskrouter.error.supabase_session_failed": "Failed to get Supabase session: {{error}}", "taskrouter.status.preparing": r(307), "taskrouter.status.uploading": "Uploading images...", "taskrouter.status.validating": r(2672), "taskrouter.status.creating": r(2389), "taskrouter.tab.editor": r(1046), "taskrouter.tab.history": r(517), "taskrouter.history.importing": r(470), "taskrouter.history.send_failed_resource": "Failed to create file resource", "taskrouter.history.send_failed_identifier": r(2709), "taskrouter.history.send_success": r(2599), "taskrouter.history.select_prompt": "Select a history task", "taskrouter.history.duration_prefix": "Duration", "taskrouter.history.duration_unit": "sec", "taskrouter.history.createdAt": r(2421), "taskrouter.history.charge": "Points Spent", "taskrouter.history.charge_value": r(2901), "taskrouter.history.images": "Outputs", "taskrouter.history.retry": "Retry", "taskrouter.history.id": r(2668), "taskrouter.history.message": r(1440), "taskrouter.history.no_images": r(2264), "taskrouter.history.client_missing": "TaskRouter client is not initialized", "taskrouter.history.limit_notice": "Only the latest 10 items are available in this version", "taskrouter.history.refresh": r(1158), "taskrouter.history.detail_title": r(362), "taskrouter.history.loading": r(2792), "taskrouter.history.empty": r(2141), "taskrouter.history.started_at_label": r(1238), "taskrouter.history.status.pending": r(1243), "taskrouter.history.status.running": r(1175), "taskrouter.history.status.completed": "Completed", "taskrouter.history.status.failed": "Failed", "taskrouter.history.status.cancelled": r(2378), "plugin.menu.view_logs": r(1920), "plugin.log.saved": `Log saved to file: {{path}}


`, "plugin.log.save_failed": r(2784), "dialog.image_source.title": r(2356), "dialog.image_source.primary_canvas": r(1075), "dialog.image_source.primary_curlayer": r(2187), "dialog.image_source.canvas_canvas": r(244), "dialog.image_source.canvas_curlayer": "Fetch current layer with canvas boundary", "dialog.image_source.curlayer_canvas": r(810), "dialog.image_source.curlayer_curlayer": r(428), "dialog.image_source.local_file": "Import from disk", "dialog.simple_source.title": r(1586), "dialog.simple_source.canvas": r(1604), "dialog.simple_source.current_layer": "Current Layer", "dialog.simple_source.local_file": r(2426), "dialog.simple_source.no_active_layer": r(2174), "dialog.simple_source.pick_error": r(1498) }, be = (o) => typeof o === r(1736), Q0 = () => {
  const o = r;
  let x, t;
  const a = new Promise((e, s) => {
    x = e, t = s;
  });
  return a[o(753)] = x, a.reject = t, a;
}, zr = (o) => o == null ? "" : "" + o, ii = (o, x, t) => {
  o[r(1022)]((e) => {
    x[e] && (t[e] = x[e]);
  });
}, ci = /###/g, Hr = (o) => o && o[r(1686)](r(493)) > -1 ? o.replace(ci, ".") : o, Vr = (o) => !o || be(o), ex = (o, x, t) => {
  const a = r, e = be(x) ? x.split(".") : x;
  let s = 0;
  for (; s < e.length - 1; ) {
    if (Vr(o)) return {};
    const n = Hr(e[s]);
    !o[n] && t && (o[n] = new t()), Object[a(2598)][a(1250)][a(1666)](o, n) ? o = o[n] : o = {}, ++s;
  }
  return Vr(o) ? {} : { obj: o, k: Hr(e[s]) };
}, Br = (o, x, t) => {
  const a = r, { obj: e, k: s } = ex(o, x, Object);
  if (e !== void 0 || x[a(2236)] === 1) {
    e[s] = t;
    return;
  }
  let n = x[x.length - 1], i = x[a(771)](0, x[a(2236)] - 1), c = ex(o, i, Object);
  for (; c[a(754)] === void 0 && i.length; )
    n = i[i.length - 1] + "." + n, i = i.slice(0, i[a(2236)] - 1), c = ex(o, i, Object), c != null && c[a(754)] && typeof c[a(754)][c.k + "." + n] !== a(233) && (c[a(754)] = void 0);
  c.obj[c.k + "." + n] = t;
}, ui = (o, x, t, a) => {
  const { obj: e, k: s } = ex(o, x, Object);
  e[s] = e[s] || [], e[s].push(t);
}, Rx = (o, x) => {
  const t = r, { obj: a, k: e } = ex(o, x);
  if (a && Object[t(2598)][t(1250)][t(1666)](a, e))
    return a[e];
}, di = (o, x, t) => {
  const a = Rx(o, t);
  return a !== void 0 ? a : Rx(x, t);
}, Hs = (o, x, t) => {
  const a = r;
  for (const e in x)
    e !== a(1934) && e !== a(1939) && (e in o ? be(o[e]) || o[e] instanceof String || be(x[e]) || x[e] instanceof String ? t && (o[e] = x[e]) : Hs(o[e], x[e], t) : o[e] = x[e]);
  return o;
}, U0 = (o) => o[r(1809)](/[\-\[\]\/\{\}\(\)\*\+\?\.\\\^\$\|]/g, "\\$&");
var li = { "&": r(536), "<": r(931), ">": "&gt;", '"': r(707), "'": r(2601), "/": r(352) };
const fi = (o) => {
  const x = r;
  return be(o) ? o[x(1809)](/[&<>"'\/]/g, (t) => li[t]) : o;
};
class hi {
  constructor(x) {
    const t = r;
    this[t(1172)] = x, this[t(1038)] = /* @__PURE__ */ new Map(), this.regExpQueue = [];
  }
  [r(1102)](x) {
    const t = r, a = this[t(1038)][t(2157)](x);
    if (a !== void 0) return a;
    const e = new RegExp(x);
    return this[t(503)].length === this[t(1172)] && this[t(1038)].delete(this[t(503)][t(2447)]()), this[t(1038)][t(2104)](x, e), this.regExpQueue[t(1449)](x), e;
  }
}
const pi = [" ", ",", "?", "!", ";"], mi = new hi(20), bi = (o, x, t) => {
  const a = r;
  x = x || "", t = t || "";
  const e = pi[a(1665)]((i) => x[a(1686)](i) < 0 && t[a(1686)](i) < 0);
  if (e[a(2236)] === 0) return !0;
  const s = mi[a(1102)]("(" + e[a(1622)]((i) => i === "?" ? "\\?" : i)[a(2130)]("|") + ")");
  let n = !s[a(1069)](o);
  if (!n) {
    const i = o[a(1686)](t);
    i > 0 && !s[a(1069)](o[a(2396)](0, i)) && (n = !0);
  }
  return n;
}, Jt = (o, x, t = ".") => {
  const a = r;
  if (!o) return;
  if (o[x])
    return Object[a(2598)][a(1250)][a(1666)](o, x) ? o[x] : void 0;
  const e = x[a(2831)](t);
  let s = o;
  for (let n = 0; n < e[a(2236)]; ) {
    if (!s || typeof s !== a(1606)) return;
    let i, c = "";
    for (let u = n; u < e[a(2236)]; ++u)
      if (u !== n && (c += t), c += e[u], i = s[c], i !== void 0) {
        if ([a(1736), a(1142), a(2727)].indexOf(typeof i) > -1 && u < e.length - 1) continue;
        n += u - n + 1;
        break;
      }
    s = i;
  }
  return s;
}, nx = (o) => o == null ? void 0 : o[r(1809)]("_", "-"), gi = { type: r(2789), log(o) {
  this[r(1651)]("log", o);
}, warn(o) {
  const x = r;
  this[x(1651)](x(816), o);
}, error(o) {
  const x = r;
  this[x(1651)](x(2484), o);
}, output(o, x) {
  var a, e;
  const t = r;
  (e = (a = console == null ? void 0 : console[o]) == null ? void 0 : a[t(1880)]) == null || e.call(a, console, x);
} };
class _x {
  constructor(x, t = {}) {
    this[r(419)](x, t);
  }
  [r(419)](x, t = {}) {
    const a = r;
    this[a(1276)] = t[a(1276)] || a(2188), this[a(2789)] = x || gi, this[a(278)] = t, this[a(222)] = t[a(222)];
  }
  log(...x) {
    return this.forward(x, "log", "", !0);
  }
  [r(816)](...x) {
    return this[r(552)](x, "warn", "", !0);
  }
  error(...x) {
    const t = r;
    return this[t(552)](x, t(2484), "");
  }
  [r(2584)](...x) {
    const t = r;
    return this[t(552)](x, t(816), t(2363), !0);
  }
  [r(552)](x, t, a, e) {
    const s = r;
    return e && !this[s(222)] ? null : (be(x[0]) && (x[0] = "" + a + this[s(1276)] + " " + x[0]), this[s(2789)][t](x));
  }
  [r(186)](x) {
    const t = r;
    return new _x(this[t(2789)], { prefix: this[t(1276)] + ":" + x + ":", ...this[t(278)] });
  }
  [r(551)](x) {
    const t = r;
    return x = x || this[t(278)], x[t(1276)] = x[t(1276)] || this[t(1276)], new _x(this.logger, x);
  }
}
var f0 = new _x();
class Ax {
  constructor() {
    const x = r;
    this[x(831)] = {};
  }
  on(x, t) {
    const a = r;
    return x.split(" ")[a(1022)]((e) => {
      const s = a;
      this[s(831)][e] || (this[s(831)][e] = /* @__PURE__ */ new Map());
      const n = this[s(831)][e][s(2157)](t) || 0;
      this[s(831)][e].set(t, n + 1);
    }), this;
  }
  off(x, t) {
    const a = r;
    if (this[a(831)][x]) {
      if (!t) {
        delete this[a(831)][x];
        return;
      }
      this.observers[x].delete(t);
    }
  }
  [r(863)](x, ...t) {
    const a = r;
    this[a(831)][x] && Array.from(this[a(831)][x][a(2813)]()).forEach(([s, n]) => {
      for (let i = 0; i < n; i++)
        s(...t);
    }), this[a(831)]["*"] && Array[a(2852)](this.observers["*"][a(2813)]())[a(1022)](([s, n]) => {
      const i = a;
      for (let c = 0; c < n; c++)
        s[i(1880)](s, [x, ...t]);
    });
  }
}
class Zr extends Ax {
  constructor(x, t = { ns: [r(331)], defaultNS: r(331) }) {
    const a = r;
    super(), this.data = x || {}, this[a(278)] = t, this[a(278)][a(181)] === void 0 && (this[a(278)][a(181)] = "."), this[a(278)][a(1323)] === void 0 && (this.options[a(1323)] = !0);
  }
  addNamespaces(x) {
    const t = r;
    this[t(278)].ns[t(1686)](x) < 0 && this[t(278)].ns[t(1449)](x);
  }
  removeNamespaces(x) {
    const t = r, a = this[t(278)].ns[t(1686)](x);
    a > -1 && this.options.ns.splice(a, 1);
  }
  [r(2197)](x, t, a, e = {}) {
    var d, l;
    const s = r, n = e.keySeparator !== void 0 ? e.keySeparator : this[s(278)].keySeparator, i = e[s(1323)] !== void 0 ? e[s(1323)] : this[s(278)][s(1323)];
    let c;
    x[s(1686)](".") > -1 ? c = x[s(2831)](".") : (c = [x, t], a && (Array[s(2224)](a) ? c[s(1449)](...a) : be(a) && n ? c.push(...a[s(2831)](n)) : c[s(1449)](a)));
    const u = Rx(this.data, c);
    return !u && !t && !a && x.indexOf(".") > -1 && (x = c[0], t = c[1], a = c[s(771)](2).join(".")), u || !i || !be(a) ? u : Jt((l = (d = this[s(2516)]) == null ? void 0 : d[x]) == null ? void 0 : l[t], a, n);
  }
  [r(2200)](x, t, a, e, s = { silent: !1 }) {
    const n = r, i = s[n(181)] !== void 0 ? s[n(181)] : this.options[n(181)];
    let c = [x, t];
    a && (c = c[n(1331)](i ? a.split(i) : a)), x[n(1686)](".") > -1 && (c = x[n(2831)]("."), e = t, t = c[1]), this[n(1080)](t), Br(this[n(2516)], c, e), s[n(2214)] || this.emit("added", x, t, a, e);
  }
  [r(2349)](x, t, a, e = { silent: !1 }) {
    const s = r;
    for (const n in a)
      (be(a[n]) || Array[s(2224)](a[n])) && this.addResource(x, t, n, a[n], { silent: !0 });
    e[s(2214)] || this[s(863)](s(543), x, t, a);
  }
  [r(1225)](x, t, a, e, s, n = { silent: !1, skipCopy: !1 }) {
    const i = r;
    let c = [x, t];
    x.indexOf(".") > -1 && (c = x[i(2831)]("."), e = a, a = t, t = c[1]), this[i(1080)](t);
    let u = Rx(this[i(2516)], c) || {};
    n[i(2169)] || (a = JSON[i(330)](JSON[i(1410)](a))), e ? Hs(u, a, s) : u = { ...u, ...a }, Br(this[i(2516)], c, u), n[i(2214)] || this[i(863)](i(543), x, t, a);
  }
  removeResourceBundle(x, t) {
    const a = r;
    this.hasResourceBundle(x, t) && delete this[a(2516)][x][t], this[a(720)](t), this[a(863)]("removed", x, t);
  }
  [r(1283)](x, t) {
    return this[r(2197)](x, t) !== void 0;
  }
  [r(306)](x, t) {
    const a = r;
    return t || (t = this[a(278)][a(1156)]), this[a(2197)](x, t);
  }
  [r(1269)](x) {
    return this[r(2516)][x];
  }
  [r(1887)](x) {
    const t = r, a = this[t(1269)](x);
    return !!(a && Object[t(460)](a) || [])[t(1359)]((s) => a[s] && Object[t(460)](a[s])[t(2236)] > 0);
  }
  toJSON() {
    return this[r(2516)];
  }
}
var Vs = { processors: {}, addPostProcessor(o) {
  const x = r;
  this[x(334)][o.name] = o;
}, handle(o, x, t, a, e) {
  return o.forEach((s) => {
    var i;
    const n = K;
    x = ((i = this[n(334)][s]) == null ? void 0 : i[n(1336)](x, t, a, e)) ?? x;
  }), x;
} };
const Bs = Symbol("i18next/PATH_KEY");
function yi() {
  const o = r, x = [], t = Object[o(186)](null);
  let a;
  return t.get = (e, s) => {
    var i;
    const n = o;
    return (i = a == null ? void 0 : a[n(1535)]) == null || i.call(a), s === Bs ? x : (x[n(1449)](s), a = Proxy.revocable(e, t), a[n(2351)]);
  }, Proxy[o(1061)](Object[o(186)](null), t).proxy;
}
function Qt(o, x) {
  const t = r, { [Bs]: a } = o(yi());
  return a[t(2130)]((x == null ? void 0 : x[t(181)]) ?? ".");
}
const Wr = {}, Wx = (o) => !be(o) && typeof o !== r(2727) && typeof o !== r(1142);
class Fx extends Ax {
  constructor(x, t = {}) {
    const a = r;
    super(), ii(["resourceStore", a(2244), "pluralResolver", "interpolator", "backendConnector", a(671), a(1993)], x, this), this[a(278)] = t, this.options.keySeparator === void 0 && (this[a(278)][a(181)] = "."), this[a(2789)] = f0[a(186)](a(353));
  }
  changeLanguage(x) {
    const t = r;
    x && (this[t(1503)] = x);
  }
  [r(1590)](x, t = { interpolation: {} }) {
    const a = r, e = { ...t };
    if (x == null) return !1;
    const s = this.resolve(x, e);
    if ((s == null ? void 0 : s[a(1995)]) === void 0) return !1;
    const n = Wx(s[a(1995)]);
    return !(e.returnObjects === !1 && n);
  }
  [r(1731)](x, t) {
    const a = r;
    let e = t[a(520)] !== void 0 ? t[a(520)] : this.options[a(520)];
    e === void 0 && (e = ":");
    const s = t[a(181)] !== void 0 ? t[a(181)] : this[a(278)].keySeparator;
    let n = t.ns || this[a(278)][a(1156)] || [];
    const i = e && x[a(1686)](e) > -1, c = !this[a(278)].userDefinedKeySeparator && !t[a(181)] && !this[a(278)].userDefinedNsSeparator && !t[a(520)] && !bi(x, e, s);
    if (i && !c) {
      const u = x[a(1778)](this.interpolator[a(2365)]);
      if (u && u.length > 0) return { key: x, namespaces: be(n) ? [n] : n };
      const d = x[a(2831)](e);
      (e !== s || e === s && this.options.ns[a(1686)](d[0]) > -1) && (n = d[a(2447)]()), x = d[a(2130)](s);
    }
    return { key: x, namespaces: be(n) ? [n] : n };
  }
  translate(x, t, a) {
    const e = r;
    let s = typeof t == "object" ? { ...t } : t;
    if (typeof s !== e(1606) && this.options[e(670)] && (s = this[e(278)][e(670)](arguments)), typeof s === e(1606) && (s = { ...s }), s || (s = {}), x == null) return "";
    typeof x === e(2279) && (x = Qt(x, { ...this[e(278)], ...s })), Array.isArray(x) || (x = [String(x)]);
    const n = s[e(472)] !== void 0 ? s[e(472)] : this[e(278)][e(472)], i = s[e(181)] !== void 0 ? s[e(181)] : this[e(278)][e(181)], { key: c, namespaces: u } = this[e(1731)](x[x[e(2236)] - 1], s), d = u[u[e(2236)] - 1];
    let l = s.nsSeparator !== void 0 ? s[e(520)] : this[e(278)][e(520)];
    l === void 0 && (l = ":");
    const f = s[e(890)] || this.language, g = s[e(258)] || this.options[e(258)];
    if ((f == null ? void 0 : f[e(2182)]()) === e(2549))
      return g ? n ? { res: "" + d + l + c, usedKey: c, exactUsedKey: c, usedLng: f, usedNS: d, usedParams: this[e(1093)](s) } : "" + d + l + c : n ? { res: c, usedKey: c, exactUsedKey: c, usedLng: f, usedNS: d, usedParams: this[e(1093)](s) } : c;
    const h = this.resolve(x, s);
    let m = h == null ? void 0 : h[e(1995)];
    const v = (h == null ? void 0 : h[e(618)]) || c, k = (h == null ? void 0 : h[e(2022)]) || c, P = ["[object Number]", e(1485), e(1408)], N = s.joinArrays !== void 0 ? s.joinArrays : this[e(278)].joinArrays, q = !this[e(671)] || this[e(671)][e(1787)], R = s.count !== void 0 && !be(s.count), E = Fx.hasDefaultValue(s), C = R ? this.pluralResolver[e(2728)](f, s[e(1895)], s) : "", A = s[e(206)] && R ? this[e(685)][e(2728)](f, s[e(1895)], { ordinal: !1 }) : "", D = R && !s.ordinal && s[e(1895)] === 0, M = D && s[e(1793) + this.options.pluralSeparator + e(2392)] || s[e(1793) + C] || s[e(1793) + A] || s[e(1793)];
    let _ = m;
    q && !m && E && (_ = M);
    const F = Wx(_), z = Object.prototype.toString[e(1880)](_);
    if (q && _ && F && P[e(1686)](z) < 0 && !(be(N) && Array[e(2224)](_))) {
      if (!s[e(1724)] && !this[e(278)][e(1724)]) {
        !this[e(278)][e(1029)] && this[e(2789)][e(816)]("accessing an object - but returnObjects options is not enabled!");
        const $ = this.options[e(1029)] ? this.options.returnedObjectHandler(v, _, { ...s, ns: u }) : "key '" + c + " (" + this[e(1503)] + e(215);
        return n ? (h[e(1995)] = $, h.usedParams = this.getUsedParamsDetails(s), h) : $;
      }
      if (i) {
        const $ = Array.isArray(_), H = $ ? [] : {}, G = $ ? k : v;
        for (const ce in _)
          if (Object[e(2598)][e(1250)][e(1666)](_, ce)) {
            const ue = "" + G + i + ce;
            E && !m ? H[ce] = this[e(830)](ue, { ...s, defaultValue: Wx(M) ? M[ce] : void 0, joinArrays: !1, ns: u }) : H[ce] = this[e(830)](ue, { ...s, joinArrays: !1, ns: u }), H[ce] === ue && (H[ce] = _[ce]);
          }
        m = H;
      }
    } else if (q && be(N) && Array[e(2224)](m))
      m = m.join(N), m && (m = this[e(464)](m, x, s, a));
    else {
      let $ = !1, H = !1;
      !this.isValidLookup(m) && E && ($ = !0, m = M), !this[e(1550)](m) && (H = !0, m = c);
      const G = s[e(2822)] || this.options[e(2822)], ce = G && H ? void 0 : m, ue = E && M !== m && this[e(278)][e(2679)];
      if (H || $ || ue) {
        if (this[e(2789)][e(2482)](e(ue ? 2010 : 1854), f, d, c, ue ? M : m), i) {
          const Pe = this[e(753)](c, { ...s, keySeparator: !1 });
          Pe && Pe[e(1995)] && this[e(2789)][e(816)]("Seems the loaded translations were in flat JSON format instead of nested. Either set keySeparator: false on init or make sure your translations are published in nested format.");
        }
        let pe = [];
        const ie = this[e(2244)][e(1701)](this[e(278)][e(1677)], s[e(890)] || this[e(1503)]);
        if (this[e(278)][e(1372)] === e(2458) && ie && ie[0]) for (let Pe = 0; Pe < ie[e(2236)]; Pe++)
          pe[e(1449)](ie[Pe]);
        else this[e(278)][e(1372)] === e(1087) ? pe = this[e(2244)][e(2823)](s[e(890)] || this[e(1503)]) : pe.push(s[e(890)] || this[e(1503)]);
        const le = (Pe, ye, Me) => {
          var O;
          const Te = e, Xe = E && Me !== m ? Me : ce;
          this.options.missingKeyHandler ? this[Te(278)][Te(2245)](Pe, d, ye, Xe, ue, s) : (O = this[Te(339)]) != null && O.saveMissing && this.backendConnector[Te(1223)](Pe, d, ye, Xe, ue, s), this[Te(863)]("missingKey", Pe, d, ye, m);
        };
        this[e(278)][e(1223)] && (this[e(278)].saveMissingPlurals && R ? pe.forEach((Pe) => {
          const ye = e, Me = this.pluralResolver[ye(2721)](Pe, s);
          D && s[ye(1793) + this.options[ye(498)] + ye(2392)] && Me[ye(1686)](this[ye(278)][ye(498)] + "zero") < 0 && Me[ye(1449)](this.options[ye(498)] + ye(2392)), Me[ye(1022)]((Te) => {
            le([Pe], c + Te, s["defaultValue" + Te] || M);
          });
        }) : le(pe, c, M));
      }
      m = this[e(464)](m, x, s, h, a), H && m === c && this[e(278)][e(2557)] && (m = "" + d + l + c), (H || $) && this[e(278)][e(423)] && (m = this[e(278)][e(423)](this[e(278)].appendNamespaceToMissingKey ? "" + d + l + c : c, $ ? m : void 0, s));
    }
    return n ? (h[e(1995)] = m, h[e(249)] = this[e(1093)](s), h) : m;
  }
  [r(464)](x, t, a, e, s) {
    var u, d;
    const n = r;
    if ((u = this.i18nFormat) != null && u[n(330)]) x = this[n(671)][n(330)](x, { ...this[n(278)][n(2532)].defaultVariables, ...a }, a[n(890)] || this[n(1503)] || e[n(2843)], e.usedNS, e[n(618)], { resolved: e });
    else if (!a.skipInterpolation) {
      a.interpolation && this[n(2189)].init({ ...a, interpolation: { ...this[n(278)][n(2532)], ...a[n(2532)] } });
      const l = be(x) && (((d = a == null ? void 0 : a[n(2532)]) == null ? void 0 : d[n(2466)]) !== void 0 ? a[n(2532)][n(2466)] : this[n(278)][n(2532)].skipOnVariables);
      let f;
      if (l) {
        const h = x[n(1778)](this[n(2189)][n(2365)]);
        f = h && h.length;
      }
      let g = a[n(1809)] && !be(a[n(1809)]) ? a[n(1809)] : a;
      if (this[n(278)][n(2532)][n(1196)] && (g = { ...this[n(278)].interpolation[n(1196)], ...g }), x = this.interpolator.interpolate(x, g, a[n(890)] || this[n(1503)] || e[n(2843)], a), l) {
        const h = x.match(this[n(2189)].nestingRegexp), m = h && h[n(2236)];
        f < m && (a.nest = !1);
      }
      !a.lng && e && e.res && (a.lng = this[n(1503)] || e.usedLng), a.nest !== !1 && (x = this[n(2189)].nest(x, (...h) => {
        const m = n;
        return (s == null ? void 0 : s[0]) === h[0] && !a[m(1951)] ? (this[m(2789)].warn(m(2525) + h[0] + m(2697) + t[0]), null) : this[m(830)](...h, t);
      }, a)), a[n(2532)] && this[n(2189)][n(1549)]();
    }
    const i = a[n(2463)] || this[n(278)][n(2463)], c = be(i) ? [i] : i;
    return x != null && (c != null && c[n(2236)]) && a[n(2201)] !== !1 && (x = Vs[n(2101)](c, x, t, this[n(278)] && this[n(278)][n(639)] ? { i18nResolved: { ...e, usedParams: this.getUsedParamsDetails(a) }, ...a } : a, this)), x;
  }
  [r(753)](x, t = {}) {
    const a = r;
    let e, s, n, i, c;
    return be(x) && (x = [x]), x[a(1022)]((u) => {
      const d = a;
      if (this[d(1550)](e)) return;
      const l = this[d(1731)](u, t), f = l.key;
      s = f;
      let g = l[d(2840)];
      this[d(278)][d(1608)] && (g = g.concat(this[d(278)][d(1608)]));
      const h = t[d(1895)] !== void 0 && !be(t[d(1895)]), m = h && !t[d(206)] && t.count === 0, v = t[d(1951)] !== void 0 && (be(t.context) || typeof t[d(1951)] === d(1142)) && t[d(1951)] !== "", k = t[d(431)] ? t[d(431)] : this.languageUtils.toResolveHierarchy(t.lng || this[d(1503)], t.fallbackLng);
      g[d(1022)]((P) => {
        var q, R;
        const N = d;
        this.isValidLookup(e) || (c = P, !Wr[k[0] + "-" + P] && ((q = this[N(1993)]) != null && q.hasLoadedNamespace) && !((R = this[N(1993)]) != null && R[N(2296)](c)) && (Wr[k[0] + "-" + P] = !0, this.logger[N(816)](N(2155) + s + '" for languages "' + k[N(2130)](", ") + N(1718) + c + N(2732), N(1574))), k[N(1022)]((E) => {
          var M;
          const C = N;
          if (this[C(1550)](e)) return;
          i = E;
          const A = [f];
          if ((M = this[C(671)]) != null && M[C(2533)]) this[C(671)][C(2533)](A, f, E, P, t);
          else {
            let _;
            h && (_ = this[C(685)][C(2728)](E, t[C(1895)], t));
            const F = this.options[C(498)] + C(2392), z = this[C(278)][C(498)] + C(206) + this.options[C(498)];
            if (h && (t[C(206)] && _[C(1686)](z) === 0 && A[C(1449)](f + _[C(1809)](z, this[C(278)].pluralSeparator)), A.push(f + _), m && A[C(1449)](f + F)), v) {
              const $ = "" + f + (this.options[C(1186)] || "_") + t[C(1951)];
              A[C(1449)]($), h && (t[C(206)] && _[C(1686)](z) === 0 && A[C(1449)]($ + _[C(1809)](z, this[C(278)].pluralSeparator)), A[C(1449)]($ + _), m && A.push($ + F));
            }
          }
          let D;
          for (; D = A[C(1702)](); )
            !this[C(1550)](e) && (n = D, e = this.getResource(E, P, D, t));
        }));
      });
    }), { res: e, usedKey: s, exactUsedKey: n, usedLng: i, usedNS: c };
  }
  [r(1550)](x) {
    const t = r;
    return x !== void 0 && !(!this[t(278)][t(1527)] && x === null) && !(!this[t(278)].returnEmptyString && x === "");
  }
  [r(2197)](x, t, a, e = {}) {
    var n;
    const s = r;
    return (n = this.i18nFormat) != null && n[s(2197)] ? this[s(671)].getResource(x, t, a, e) : this[s(689)][s(2197)](x, t, a, e);
  }
  [r(1093)](x = {}) {
    const t = r, a = ["defaultValue", t(206), t(1951), t(1809), t(890), t(431), t(1677), "ns", "keySeparator", t(520), "returnObjects", t(472), "joinArrays", "postProcess", t(2532)], e = x[t(1809)] && !be(x.replace);
    let s = e ? x.replace : x;
    if (e && typeof x[t(1895)] !== t(233) && (s[t(1895)] = x[t(1895)]), this.options.interpolation.defaultVariables && (s = { ...this[t(278)].interpolation[t(1196)], ...s }), !e) {
      s = { ...s };
      for (const n of a)
        delete s[n];
    }
    return s;
  }
  static hasDefaultValue(x) {
    const t = r, a = "defaultValue";
    for (const e in x)
      if (Object[t(2598)][t(1250)][t(1666)](x, e) && a === e.substring(0, a[t(2236)]) && x[e] !== void 0) return !0;
    return !1;
  }
}
class Kr {
  constructor(x) {
    const t = r;
    this[t(278)] = x, this.supportedLngs = this[t(278)][t(1617)] || !1, this[t(2789)] = f0[t(186)](t(2244));
  }
  getScriptPartFromCode(x) {
    const t = r;
    if (x = nx(x), !x || x.indexOf("-") < 0) return null;
    const a = x[t(2831)]("-");
    return a[t(2236)] === 2 || (a.pop(), a[a.length - 1][t(2182)]() === "x") ? null : this[t(2341)](a.join("-"));
  }
  [r(2310)](x) {
    const t = r;
    if (x = nx(x), !x || x[t(1686)]("-") < 0) return x;
    const a = x.split("-");
    return this[t(2341)](a[0]);
  }
  formatLanguageCode(x) {
    const t = r;
    if (be(x) && x[t(1686)]("-") > -1) {
      let a;
      try {
        a = Intl[t(2014)](x)[0];
      } catch {
      }
      return a && this[t(278)][t(733)] && (a = a[t(2182)]()), a || (this[t(278)].lowerCaseLng ? x[t(2182)]() : x);
    }
    return this.options[t(2362)] || this[t(278)][t(733)] ? x[t(2182)]() : x;
  }
  [r(870)](x) {
    const t = r;
    return (this[t(278)][t(366)] === t(1090) || this[t(278)].nonExplicitSupportedLngs) && (x = this[t(2310)](x)), !this.supportedLngs || !this[t(1617)][t(2236)] || this[t(1617)][t(1686)](x) > -1;
  }
  [r(2722)](x) {
    const t = r;
    if (!x) return null;
    let a;
    return x[t(1022)]((e) => {
      const s = t;
      if (a) return;
      const n = this[s(2341)](e);
      (!this[s(278)][s(1617)] || this[s(870)](n)) && (a = n);
    }), !a && this[t(278)][t(1617)] && x[t(1022)]((e) => {
      const s = t;
      if (a) return;
      const n = this[s(2776)](e);
      if (this[s(870)](n)) return a = n;
      const i = this[s(2310)](e);
      if (this[s(870)](i)) return a = i;
      a = this[s(278)][s(1617)][s(1359)]((c) => {
        const u = s;
        if (c === i) return c;
        if (!(c[u(1686)]("-") < 0 && i.indexOf("-") < 0) && (c.indexOf("-") > 0 && i[u(1686)]("-") < 0 && c[u(2396)](0, c[u(1686)]("-")) === i || c[u(1686)](i) === 0 && i[u(2236)] > 1))
          return c;
      });
    }), a || (a = this[t(1701)](this[t(278)][t(1677)])[0]), a;
  }
  [r(1701)](x, t) {
    const a = r;
    if (!x) return [];
    if (typeof x == "function" && (x = x(t)), be(x) && (x = [x]), Array.isArray(x)) return x;
    if (!t) return x.default || [];
    let e = x[t];
    return e || (e = x[this.getScriptPartFromCode(t)]), e || (e = x[this[a(2341)](t)]), e || (e = x[this.getLanguagePartFromCode(t)]), e || (e = x[a(1770)]), e || [];
  }
  [r(2823)](x, t) {
    const a = r, e = this.getFallbackCodes((t === !1 ? [] : t) || this[a(278)][a(1677)] || [], x), s = [], n = (i) => {
      const c = a;
      i && (this[c(870)](i) ? s[c(1449)](i) : this[c(2789)][c(816)](c(2687) + i));
    };
    return be(x) && (x[a(1686)]("-") > -1 || x[a(1686)]("_") > -1) ? (this[a(278)].load !== a(1090) && n(this[a(2341)](x)), this[a(278)].load !== a(1090) && this.options.load !== a(642) && n(this[a(2776)](x)), this[a(278)].load !== a(642) && n(this[a(2310)](x))) : be(x) && n(this[a(2341)](x)), e[a(1022)]((i) => {
      s[a(1686)](i) < 0 && n(this.formatLanguageCode(i));
    }), s;
  }
}
const Gr = { zero: 0, one: 1, two: 2, few: 3, many: 4, other: 5 }, Jr = { select: (o) => o === 1 ? "one" : r(2265), resolvedOptions: () => ({ pluralCategories: [r(576), r(2265)] }) };
class vi {
  constructor(x, t = {}) {
    const a = r;
    this.languageUtils = x, this[a(278)] = t, this[a(2789)] = f0[a(186)](a(685)), this[a(1969)] = {};
  }
  [r(452)](x, t) {
    const a = r;
    this[a(1961)][x] = t;
  }
  [r(1463)]() {
    const x = r;
    this[x(1969)] = {};
  }
  [r(1858)](x, t = {}) {
    const a = r, e = nx(x === a(2420) ? "en" : x), s = t[a(206)] ? a(206) : a(2766), n = JSON[a(1410)]({ cleanedCode: e, type: s });
    if (n in this[a(1969)]) return this[a(1969)][n];
    let i;
    try {
      i = new Intl[a(2832)](e, { type: s });
    } catch {
      if (!Intl) return this[a(2789)].error(a(2856)), Jr;
      if (!x[a(1778)](/-|_/)) return Jr;
      const u = this[a(2244)].getLanguagePartFromCode(x);
      i = this[a(1858)](u, t);
    }
    return this[a(1969)][n] = i, i;
  }
  needsPlural(x, t = {}) {
    const a = r;
    let e = this[a(1858)](x, t);
    return e || (e = this[a(1858)](a(2420), t)), (e == null ? void 0 : e.resolvedOptions()[a(467)][a(2236)]) > 1;
  }
  [r(2015)](x, t, a = {}) {
    const e = r;
    return this.getSuffixes(x, a)[e(1622)]((s) => "" + t + s);
  }
  getSuffixes(x, t = {}) {
    const a = r;
    let e = this.getRule(x, t);
    return e || (e = this[a(1858)](a(2420), t)), e ? e[a(2011)]().pluralCategories[a(1168)]((s, n) => Gr[s] - Gr[n])[a(1622)]((s) => "" + this[a(278)].prepend + (t[a(206)] ? a(206) + this[a(278)][a(2382)] : "") + s) : [];
  }
  [r(2728)](x, t, a = {}) {
    const e = r, s = this.getRule(x, a);
    return s ? "" + this[e(278)][e(2382)] + (a[e(206)] ? e(206) + this[e(278)][e(2382)] : "") + s[e(982)](t) : (this.logger.warn(e(1798) + x), this.getSuffix(e(2420), t, a));
  }
}
const Qr = (o, x, t, a = ".", e = !0) => {
  let s = di(o, x, t);
  return !s && e && be(t) && (s = Jt(o, t, a), s === void 0 && (s = Jt(x, t, a))), s;
}, Kx = (o) => o.replace(/\$/g, r(2387));
class Xr {
  constructor(x = {}) {
    var a;
    const t = r;
    this[t(2789)] = f0[t(186)](t(2189)), this[t(278)] = x, this[t(1763)] = ((a = x == null ? void 0 : x[t(2532)]) == null ? void 0 : a[t(1763)]) || ((e) => e), this[t(419)](x);
  }
  init(x = {}) {
    const t = r;
    x[t(2532)] || (x.interpolation = { escapeValue: !0 });
    const { escape: a, escapeValue: e, useRawValueToEscape: s, prefix: n, prefixEscaped: i, suffix: c, suffixEscaped: u, formatSeparator: d, unescapeSuffix: l, unescapePrefix: f, nestingPrefix: g, nestingPrefixEscaped: h, nestingSuffix: m, nestingSuffixEscaped: v, nestingOptionsSeparator: k, maxReplaces: P, alwaysFormat: N } = x.interpolation;
    this[t(1910)] = a !== void 0 ? a : fi, this[t(774)] = e !== void 0 ? e : !0, this.useRawValueToEscape = s !== void 0 ? s : !1, this[t(1276)] = n ? U0(n) : i || "{{", this[t(1448)] = c ? U0(c) : u || "}}", this[t(1275)] = d || ",", this[t(2873)] = l ? "" : f || "-", this[t(2710)] = this.unescapePrefix ? "" : l || "", this[t(1033)] = g ? U0(g) : h || U0(t(949)), this.nestingSuffix = m ? U0(m) : v || U0(")"), this[t(820)] = k || ",", this[t(1599)] = P || 1e3, this[t(2168)] = N !== void 0 ? N : !1, this[t(2274)]();
  }
  [r(1549)]() {
    const x = r;
    this[x(278)] && this[x(419)](this[x(278)]);
  }
  [r(2274)]() {
    const x = r, t = (a, e) => {
      const s = K;
      return (a == null ? void 0 : a[s(2870)]) === e ? (a[s(1298)] = 0, a) : new RegExp(e, "g");
    };
    this[x(869)] = t(this[x(869)], this[x(1276)] + x(1733) + this[x(1448)]), this[x(1873)] = t(this[x(1873)], "" + this.prefix + this.unescapePrefix + x(1733) + this[x(2710)] + this[x(1448)]), this[x(2365)] = t(this[x(2365)], this.nestingPrefix + `((?:[^()"']+|"[^"]*"|'[^']*'|\\((?:[^()]|"[^"]*"|'[^']*')*\\))*?)` + this[x(1070)]);
  }
  [r(2812)](x, t, a, e) {
    var h;
    const s = r;
    let n, i, c;
    const u = this[s(278)] && this.options.interpolation && this[s(278)].interpolation[s(1196)] || {}, d = (m) => {
      const v = s;
      if (m[v(1686)](this[v(1275)]) < 0) {
        const q = Qr(t, u, m, this[v(278)][v(181)], this[v(278)][v(1323)]);
        return this.alwaysFormat ? this[v(1763)](q, void 0, a, { ...e, ...t, interpolationkey: m }) : q;
      }
      const k = m[v(2831)](this[v(1275)]), P = k[v(2447)]().trim(), N = k[v(2130)](this[v(1275)])[v(183)]();
      return this.format(Qr(t, u, P, this[v(278)][v(181)], this[v(278)][v(1323)]), N, a, { ...e, ...t, interpolationkey: P });
    };
    this[s(2274)]();
    const l = (e == null ? void 0 : e[s(1650)]) || this.options[s(1650)], f = ((h = e == null ? void 0 : e.interpolation) == null ? void 0 : h[s(2466)]) !== void 0 ? e[s(2532)][s(2466)] : this[s(278)][s(2532)][s(2466)];
    return [{ regex: this.regexpUnescape, safeValue: (m) => Kx(m) }, { regex: this[s(869)], safeValue: (m) => this.escapeValue ? Kx(this[s(1910)](m)) : Kx(m) }][s(1022)]((m) => {
      const v = s;
      for (c = 0; n = m[v(1560)][v(731)](x); ) {
        const k = n[1].trim();
        if (i = d(k), i === void 0)
          if (typeof l === v(2279)) {
            const N = l(x, n, e);
            i = be(N) ? N : "";
          } else if (e && Object[v(2598)][v(1250)][v(1666)](e, k)) i = "";
          else if (f) {
            i = n[0];
            continue;
          } else this.logger.warn(v(322) + k + v(1211) + x), i = "";
        else !be(i) && !this[v(1844)] && (i = zr(i));
        const P = m.safeValue(i);
        if (x = x[v(1809)](n[0], P), f ? (m[v(1560)][v(1298)] += i[v(2236)], m[v(1560)][v(1298)] -= n[0][v(2236)]) : m.regex[v(1298)] = 0, c++, c >= this[v(1599)]) break;
      }
    }), x;
  }
  nest(x, t, a = {}) {
    const e = r;
    let s, n, i;
    const c = (u, d) => {
      const l = K, f = this[l(820)];
      if (u[l(1686)](f) < 0) return u;
      const g = u[l(2831)](new RegExp(f + l(1656)));
      let h = "{" + g[1];
      u = g[0], h = this[l(2812)](h, i);
      const m = h.match(/'/g), v = h[l(1778)](/"/g);
      (((m == null ? void 0 : m[l(2236)]) ?? 0) % 2 === 0 && !v || v.length % 2 !== 0) && (h = h[l(1809)](/'/g, '"'));
      try {
        i = JSON[l(330)](h), d && (i = { ...d, ...i });
      } catch (k) {
        return this[l(2789)][l(816)]("failed parsing options string in nesting for key " + u, k), "" + u + f + h;
      }
      return i[l(1793)] && i[l(1793)].indexOf(this[l(1276)]) > -1 && delete i[l(1793)], u;
    };
    for (; s = this[e(2365)][e(731)](x); ) {
      let u = [];
      i = { ...a }, i = i[e(1809)] && !be(i[e(1809)]) ? i[e(1809)] : i, i[e(2201)] = !1, delete i[e(1793)];
      const d = /{.*}/[e(1069)](s[1]) ? s[1][e(788)]("}") + 1 : s[1][e(1686)](this[e(1275)]);
      if (d !== -1 && (u = s[1][e(771)](d)[e(2831)](this[e(1275)])[e(1622)]((l) => l[e(183)]())[e(1665)](Boolean), s[1] = s[1][e(771)](0, d)), n = t(c[e(1666)](this, s[1][e(183)](), i), i), n && s[0] === x && !be(n)) return n;
      be(n) || (n = zr(n)), !n && (this.logger.warn(e(2167) + s[1] + e(1905) + x), n = ""), u[e(2236)] && (n = u[e(661)]((l, f) => this[e(1763)](l, f, a[e(890)], { ...a, interpolationkey: s[1][e(183)]() }), n[e(183)]())), x = x[e(1809)](s[0], n), this[e(869)][e(1298)] = 0;
    }
    return x;
  }
}
const wi = (o) => {
  const x = r;
  let t = o.toLowerCase()[x(183)]();
  const a = {};
  if (o[x(1686)]("(") > -1) {
    const e = o[x(2831)]("(");
    t = e[0][x(2182)]()[x(183)]();
    const s = e[1].substring(0, e[1][x(2236)] - 1);
    t === x(439) && s[x(1686)](":") < 0 ? a[x(439)] || (a[x(439)] = s.trim()) : t === x(293) && s.indexOf(":") < 0 ? a[x(635)] || (a.range = s[x(183)]()) : s.split(";")[x(1022)]((i) => {
      const c = x;
      if (i) {
        const [u, ...d] = i[c(2831)](":"), l = d[c(2130)](":").trim()[c(1809)](/^'+|'+$/g, ""), f = u[c(183)]();
        a[f] || (a[f] = l), l === "false" && (a[f] = !1), l === c(426) && (a[f] = !0), isNaN(l) || (a[f] = parseInt(l, 10));
      }
    });
  }
  return { formatName: t, formatOptions: a };
}, Yr = (o) => {
  const x = {};
  return (t, a, e) => {
    const s = K;
    let n = e;
    e && e[s(1383)] && e[s(2486)] && e.formatParams[e.interpolationkey] && e[e[s(1383)]] && (n = { ...n, [e.interpolationkey]: void 0 });
    const i = a + JSON.stringify(n);
    let c = x[i];
    return !c && (c = o(nx(a), e), x[i] = c), c(t);
  };
}, Si = (o) => (x, t, a) => o(nx(t), a)(x);
class ki {
  constructor(x = {}) {
    const t = r;
    this[t(2789)] = f0.create(t(379)), this.options = x, this.init(x);
  }
  [r(419)](x, t = { interpolation: {} }) {
    const a = r;
    this.formatSeparator = t[a(2532)].formatSeparator || ",";
    const e = t[a(2003)] ? Yr : Si;
    this[a(1148)] = { number: e((s, n) => {
      const i = a, c = new Intl[i(1257)](s, { ...n });
      return (u) => c[i(1763)](u);
    }), currency: e((s, n) => {
      const i = a, c = new Intl[i(1257)](s, { ...n, style: i(439) });
      return (u) => c[i(1763)](u);
    }), datetime: e((s, n) => {
      const i = a, c = new Intl.DateTimeFormat(s, { ...n });
      return (u) => c[i(1763)](u);
    }), relativetime: e((s, n) => {
      const i = a, c = new Intl[i(2179)](s, { ...n });
      return (u) => c[i(1763)](u, n.range || i(1534));
    }), list: e((s, n) => {
      const i = a, c = new Intl[i(1281)](s, { ...n });
      return (u) => c.format(u);
    }) };
  }
  [r(2140)](x, t) {
    const a = r;
    this[a(1148)][x.toLowerCase()[a(183)]()] = t;
  }
  addCached(x, t) {
    const a = r;
    this[a(1148)][x[a(2182)]()[a(183)]()] = Yr(t);
  }
  [r(1763)](x, t, a, e = {}) {
    const s = r, n = t.split(this[s(1275)]);
    if (n.length > 1 && n[0].indexOf("(") > 1 && n[0][s(1686)](")") < 0 && n.find((c) => c.indexOf(")") > -1)) {
      const c = n[s(1319)]((u) => u[s(1686)](")") > -1);
      n[0] = [n[0], ...n[s(1585)](1, c)][s(2130)](this.formatSeparator);
    }
    return n[s(661)]((c, u) => {
      var g;
      const d = s, { formatName: l, formatOptions: f } = wi(u);
      if (this[d(1148)][l]) {
        let h = c;
        try {
          const m = ((g = e == null ? void 0 : e.formatParams) == null ? void 0 : g[e[d(1383)]]) || {}, v = m[d(2544)] || m[d(890)] || e[d(2544)] || e[d(890)] || a;
          h = this[d(1148)][l](c, v, { ...f, ...e, ...m });
        } catch (m) {
          this[d(2789)][d(816)](m);
        }
        return h;
      } else this[d(2789)][d(816)](d(1316) + l);
      return c;
    }, x);
  }
}
const Pi = (o, x) => {
  const t = r;
  o[t(2918)][x] !== void 0 && (delete o.pending[x], o[t(957)]--);
};
class Ii extends Ax {
  constructor(x, t, a, e = {}) {
    var n, i;
    const s = r;
    super(), this[s(1769)] = x, this.store = t, this[s(211)] = a, this[s(2244)] = a[s(2244)], this[s(278)] = e, this[s(2789)] = f0[s(186)]("backendConnector"), this[s(898)] = [], this[s(2826)] = e[s(2826)] || 10, this[s(2804)] = 0, this[s(2323)] = e.maxRetries >= 0 ? e.maxRetries : 5, this[s(2878)] = e[s(2878)] >= 1 ? e.retryTimeout : 350, this.state = {}, this[s(588)] = [], (i = (n = this.backend) == null ? void 0 : n.init) == null || i.call(n, a, e[s(1769)], e);
  }
  [r(1496)](x, t, a, e) {
    const s = r, n = {}, i = {}, c = {}, u = {};
    return x[s(1022)]((d) => {
      const l = s;
      let f = !0;
      t[l(1022)]((g) => {
        const h = l, m = d + "|" + g;
        !a[h(340)] && this[h(2705)][h(1283)](d, g) ? this[h(2497)][m] = 2 : this[h(2497)][m] < 0 || (this[h(2497)][m] === 1 ? i[m] === void 0 && (i[m] = !0) : (this[h(2497)][m] = 1, f = !1, i[m] === void 0 && (i[m] = !0), n[m] === void 0 && (n[m] = !0), u[g] === void 0 && (u[g] = !0)));
      }), f || (c[d] = !0);
    }), (Object[s(460)](n)[s(2236)] || Object[s(460)](i).length) && this.queue[s(1449)]({ pending: i, pendingCount: Object[s(460)](i)[s(2236)], loaded: {}, errors: [], callback: e }), { toLoad: Object[s(460)](n), pending: Object.keys(i), toLoadLanguages: Object[s(460)](c), toLoadNamespaces: Object[s(460)](u) };
  }
  loaded(x, t, a) {
    const e = r, s = x.split("|"), n = s[0], i = s[1];
    t && this[e(863)](e(2149), n, i, t), !t && a && this[e(2705)][e(1225)](n, i, a, void 0, void 0, { skipCopy: !0 }), this[e(2497)][x] = t ? -1 : 2, t && a && (this[e(2497)][x] = 0);
    const c = {};
    this[e(588)][e(1022)]((u) => {
      const d = e;
      ui(u[d(329)], [n], i), Pi(u, x), t && u[d(2887)][d(1449)](t), u[d(957)] === 0 && !u.done && (Object[d(460)](u[d(329)])[d(1022)]((l) => {
        const f = d;
        c[l] || (c[l] = {});
        const g = u[f(329)][l];
        g[f(2236)] && g.forEach((h) => {
          c[l][h] === void 0 && (c[l][h] = !0);
        });
      }), u.done = !0, u[d(2887)][d(2236)] ? u[d(1458)](u[d(2887)]) : u[d(1458)]());
    }), this[e(863)](e(329), c), this[e(588)] = this[e(588)][e(1665)]((u) => !u[e(2237)]);
  }
  read(x, t, a, e = 0, s = this[r(2878)], n) {
    const i = r;
    if (!x[i(2236)]) return n(null, {});
    if (this.readingCalls >= this[i(2826)]) {
      this.waitingReads.push({ lng: x, ns: t, fcName: a, tried: e, wait: s, callback: n });
      return;
    }
    this[i(2804)]++;
    const c = (d, l) => {
      const f = i;
      if (this[f(2804)]--, this.waitingReads[f(2236)] > 0) {
        const g = this[f(898)].shift();
        this[f(1140)](g[f(890)], g.ns, g[f(990)], g[f(2419)], g[f(356)], g[f(1458)]);
      }
      if (d && l && e < this.maxRetries) {
        setTimeout(() => {
          this[f(1140)].call(this, x, t, a, e + 1, s * 2, n);
        }, s);
        return;
      }
      n(d, l);
    }, u = this[i(1769)][a].bind(this[i(1769)]);
    if (u[i(2236)] === 2) {
      try {
        const d = u(x, t);
        d && typeof d[i(667)] === i(2279) ? d.then((l) => c(null, l))[i(1095)](c) : c(null, d);
      } catch (d) {
        c(d);
      }
      return;
    }
    return u(x, t, c);
  }
  [r(2031)](x, t, a = {}, e) {
    const s = r;
    if (!this[s(1769)]) return this[s(2789)].warn("No backend was added via i18next.use. Will not load resources."), e && e();
    be(x) && (x = this[s(2244)][s(2823)](x)), be(t) && (t = [t]);
    const n = this[s(1496)](x, t, a, e);
    if (!n.toLoad[s(2236)])
      return n[s(2918)][s(2236)] || e(), null;
    n[s(1299)][s(1022)]((i) => {
      this[s(2536)](i);
    });
  }
  load(x, t, a) {
    this.prepareLoading(x, t, {}, a);
  }
  [r(340)](x, t, a) {
    this[r(2031)](x, t, { reload: !0 }, a);
  }
  [r(2536)](x, t = "") {
    const a = r, e = x[a(2831)]("|"), s = e[0], n = e[1];
    this[a(1140)](s, n, "read", void 0, void 0, (i, c) => {
      const u = a;
      i && this[u(2789)][u(816)](t + u(1482) + n + " for language " + s + u(1436), i), !i && c && this[u(2789)].log(t + u(995) + n + u(1598) + s, c), this.loaded(x, i, c);
    });
  }
  [r(1223)](x, t, a, e, s, n = {}, i = () => {
  }) {
    var u, d, l, f, g;
    const c = r;
    if ((d = (u = this[c(211)]) == null ? void 0 : u[c(1993)]) != null && d[c(2296)] && !((f = (l = this[c(211)]) == null ? void 0 : l[c(1993)]) != null && f[c(2296)](t))) {
      this[c(2789)][c(816)]('did not save key "' + a + c(448) + t + '" was not yet loaded', c(1574));
      return;
    }
    if (!(a == null || a === "")) {
      if ((g = this[c(1769)]) != null && g[c(186)]) {
        const h = { ...n, isUpdate: s }, m = this[c(1769)][c(186)][c(584)](this[c(1769)]);
        if (m[c(2236)] < 6) try {
          let v;
          m[c(2236)] === 5 ? v = m(x, t, a, e, h) : v = m(x, t, a, e), v && typeof v[c(667)] === c(2279) ? v.then((k) => i(null, k))[c(1095)](i) : i(null, v);
        } catch (v) {
          i(v);
        }
        else m(x, t, a, e, i, h);
      }
      !x || !x[0] || this[c(2705)].addResource(x[0], t, a, e);
    }
  }
}
const ea = () => ({ debug: !1, initAsync: !0, ns: [r(331)], defaultNS: ["translation"], fallbackLng: ["dev"], fallbackNS: !1, supportedLngs: !1, nonExplicitSupportedLngs: !1, load: r(1087), preload: !1, simplifyPluralSuffix: !0, keySeparator: ".", nsSeparator: ":", pluralSeparator: "_", contextSeparator: "_", partialBundledLanguages: !1, saveMissing: !1, updateMissing: !1, saveMissingTo: r(2458), saveMissingPlurals: !0, missingKeyHandler: !1, missingInterpolationHandler: !1, postProcess: !1, postProcessPassResolved: !1, returnNull: !1, returnEmptyString: !0, returnObjects: !1, joinArrays: !1, returnedObjectHandler: !1, parseMissingKeyHandler: !1, appendNamespaceToMissingKey: !1, appendNamespaceToCIMode: !1, overloadTranslationOptionHandler: (o) => {
  const x = r;
  let t = {};
  if (typeof o[1] === x(1606) && (t = o[1]), be(o[1]) && (t[x(1793)] = o[1]), be(o[2]) && (t.tDescription = o[2]), typeof o[2] == "object" || typeof o[3] === x(1606)) {
    const a = o[3] || o[2];
    Object[x(460)](a)[x(1022)]((e) => {
      t[e] = a[e];
    });
  }
  return t;
}, interpolation: { escapeValue: !0, format: (o) => o, prefix: "{{", suffix: "}}", formatSeparator: ",", unescapePrefix: "-", nestingPrefix: r(949), nestingSuffix: ")", nestingOptionsSeparator: ",", maxReplaces: 1e3, skipOnVariables: !0 }, cacheInBuiltFormats: !0 }), xa = (o) => {
  var t, a;
  const x = r;
  return be(o.ns) && (o.ns = [o.ns]), be(o.fallbackLng) && (o.fallbackLng = [o[x(1677)]]), be(o.fallbackNS) && (o[x(1608)] = [o[x(1608)]]), ((a = (t = o[x(1617)]) == null ? void 0 : t[x(1686)]) == null ? void 0 : a.call(t, x(2549))) < 0 && (o[x(1617)] = o.supportedLngs.concat([x(2549)])), typeof o[x(2054)] == "boolean" && (o[x(163)] = o[x(2054)]), o;
}, px = () => {
}, Ei = (o) => {
  const x = r;
  Object[x(2819)](Object.getPrototypeOf(o))[x(1022)]((a) => {
    typeof o[a] == "function" && (o[a] = o[a].bind(o));
  });
};
class xx extends Ax {
  constructor(x = {}, t) {
    const a = r;
    if (super(), this[a(278)] = xa(x), this[a(211)] = {}, this[a(2789)] = f0, this[a(784)] = { external: [] }, Ei(this), t && !this[a(529)] && !x[a(2906)]) {
      if (!this[a(278)].initAsync) return this[a(419)](x, t), this;
      setTimeout(() => {
        this[a(419)](x, t);
      }, 0);
    }
  }
  [r(419)](x = {}, t) {
    const a = r;
    this[a(561)] = !0, typeof x === a(2279) && (t = x, x = {}), x[a(1156)] == null && x.ns && (be(x.ns) ? x.defaultNS = x.ns : x.ns.indexOf("translation") < 0 && (x[a(1156)] = x.ns[0]));
    const e = ea();
    this[a(278)] = { ...e, ...this[a(278)], ...xa(x) }, this[a(278)][a(2532)] = { ...e[a(2532)], ...this.options[a(2532)] }, x[a(181)] !== void 0 && (this[a(278)].userDefinedKeySeparator = x[a(181)]), x[a(520)] !== void 0 && (this[a(278)][a(188)] = x[a(520)]);
    const s = (d) => {
      const l = a;
      return d ? typeof d === l(2279) ? new d() : d : null;
    };
    if (!this[a(278)][a(2906)]) {
      this[a(784)][a(2789)] ? f0.init(s(this[a(784)][a(2789)]), this[a(278)]) : f0[a(419)](null, this[a(278)]);
      let d;
      this.modules.formatter ? d = this[a(784)][a(379)] : d = ki;
      const l = new Kr(this[a(278)]);
      this[a(2705)] = new Zr(this[a(278)][a(509)], this[a(278)]);
      const f = this[a(211)];
      f.logger = f0, f.resourceStore = this[a(2705)], f.languageUtils = l, f[a(685)] = new vi(l, { prepend: this.options[a(498)], simplifyPluralSuffix: this[a(278)][a(1968)] }), this[a(278)].interpolation[a(1763)] && this[a(278)][a(2532)].format !== e[a(2532)][a(1763)] && this[a(2789)][a(2584)](a(2917)), d && (!this.options[a(2532)][a(1763)] || this[a(278)].interpolation[a(1763)] === e.interpolation[a(1763)]) && (f.formatter = s(d), f[a(379)][a(419)] && f[a(379)][a(419)](f, this[a(278)]), this[a(278)][a(2532)][a(1763)] = f.formatter[a(1763)].bind(f[a(379)])), f[a(2189)] = new Xr(this.options), f[a(1993)] = { hasLoadedNamespace: this[a(2296)].bind(this) }, f.backendConnector = new Ii(s(this[a(784)][a(1769)]), f[a(689)], f, this[a(278)]), f[a(339)].on("*", (h, ...m) => {
        this[a(863)](h, ...m);
      }), this[a(784)][a(1782)] && (f[a(1782)] = s(this[a(784)][a(1782)]), f[a(1782)][a(419)] && f[a(1782)].init(f, this[a(278)][a(1377)], this[a(278)])), this[a(784)][a(671)] && (f.i18nFormat = s(this.modules[a(671)]), f[a(671)][a(419)] && f.i18nFormat[a(419)](this)), this[a(353)] = new Fx(this[a(211)], this[a(278)]), this[a(353)].on("*", (h, ...m) => {
        this[a(863)](h, ...m);
      }), this.modules[a(2698)][a(1022)]((h) => {
        const m = a;
        h.init && h[m(419)](this);
      });
    }
    if (this[a(1763)] = this[a(278)][a(2532)].format, t || (t = px), this.options.fallbackLng && !this[a(211)][a(1782)] && !this[a(278)].lng) {
      const d = this.services[a(2244)][a(1701)](this.options.fallbackLng);
      d.length > 0 && d[0] !== a(2420) && (this[a(278)][a(890)] = d[0]);
    }
    !this[a(211)][a(1782)] && !this[a(278)][a(890)] && this.logger[a(816)]("init: no languageDetector is used and no lng is defined"), [a(2197), a(1283), a(306), a(1269)].forEach((d) => {
      const l = a;
      this[d] = (...f) => this[l(2705)][d](...f);
    }), [a(2200), a(2349), a(1225), a(2053)].forEach((d) => {
      this[d] = (...l) => (this[K(2705)][d](...l), this);
    });
    const c = Q0(), u = () => {
      const d = a, l = (f, g) => {
        const h = K;
        this[h(561)] = !1, this[h(529)] && !this[h(826)] && this.logger[h(816)](h(1867)), this[h(529)] = !0, this.options.isClone || this.logger.log(h(2738), this[h(278)]), this[h(863)]("initialized", this[h(278)]), c.resolve(g), t(f, g);
      };
      if (this[d(2018)] && !this[d(529)]) return l(null, this.t.bind(this));
      this[d(930)](this.options[d(890)], l);
    };
    return this[a(278)][a(509)] || !this[a(278)][a(163)] ? u() : setTimeout(u, 0), c;
  }
  loadResources(x, t = px) {
    var n, i;
    const a = r;
    let e = t;
    const s = be(x) ? x : this[a(1503)];
    if (typeof x === a(2279) && (e = x), !this.options.resources || this[a(278)][a(2796)]) {
      if ((s == null ? void 0 : s[a(2182)]()) === a(2549) && (!this[a(278)][a(910)] || this.options.preload[a(2236)] === 0)) return e();
      const c = [], u = (d) => {
        const l = a;
        if (!d || d === l(2549)) return;
        this[l(211)][l(2244)][l(2823)](d)[l(1022)]((g) => {
          const h = l;
          g !== "cimode" && c[h(1686)](g) < 0 && c.push(g);
        });
      };
      s ? u(s) : this.services.languageUtils.getFallbackCodes(this[a(278)][a(1677)])[a(1022)]((l) => u(l)), (i = (n = this.options[a(910)]) == null ? void 0 : n[a(1022)]) == null || i.call(n, (d) => u(d)), this.services[a(339)][a(366)](c, this.options.ns, (d) => {
        const l = a;
        !d && !this[l(1385)] && this[l(1503)] && this[l(989)](this.language), e(d);
      });
    } else e(null);
  }
  reloadResources(x, t, a) {
    const e = r, s = Q0();
    return typeof x === e(2279) && (a = x, x = void 0), typeof t === e(2279) && (a = t, t = void 0), x || (x = this.languages), t || (t = this[e(278)].ns), a || (a = px), this[e(211)].backendConnector[e(340)](x, t, (n) => {
      s[e(753)](), a(n);
    }), s;
  }
  [r(2827)](x) {
    const t = r;
    if (!x) throw new Error(t(2846));
    if (!x[t(2390)]) throw new Error(t(312));
    return x.type === t(1769) && (this[t(784)][t(1769)] = x), (x[t(2390)] === t(2789) || x[t(2482)] && x[t(816)] && x[t(2484)]) && (this[t(784)][t(2789)] = x), x[t(2390)] === t(1782) && (this.modules[t(1782)] = x), x[t(2390)] === t(671) && (this.modules[t(671)] = x), x[t(2390)] === t(2342) && Vs[t(1823)](x), x[t(2390)] === t(379) && (this[t(784)][t(379)] = x), x.type === "3rdParty" && this.modules[t(2698)][t(1449)](x), this;
  }
  setResolvedLanguage(x) {
    const t = r;
    if (!(!x || !this.languages) && !(["cimode", t(2420)][t(1686)](x) > -1)) {
      for (let a = 0; a < this[t(2018)][t(2236)]; a++) {
        const e = this[t(2018)][a];
        if (!([t(2549), t(2420)][t(1686)](e) > -1) && this.store[t(1887)](e)) {
          this[t(1385)] = e;
          break;
        }
      }
      !this[t(1385)] && this[t(2018)][t(1686)](x) < 0 && this[t(2705)][t(1887)](x) && (this[t(1385)] = x, this[t(2018)][t(1043)](x));
    }
  }
  [r(930)](x, t) {
    const a = r;
    this.isLanguageChangingTo = x;
    const e = Q0();
    this.emit("languageChanging", x);
    const s = (c) => {
      const u = K;
      this[u(1503)] = c, this[u(2018)] = this[u(211)][u(2244)][u(2823)](c), this.resolvedLanguage = void 0, this[u(989)](c);
    }, n = (c, u) => {
      const d = K;
      u ? this.isLanguageChangingTo === x && (s(u), this[d(353)][d(930)](u), this[d(1274)] = void 0, this[d(863)](d(645), u), this[d(2789)][d(2482)](d(645), u)) : this[d(1274)] = void 0, e[d(753)]((...l) => this.t(...l)), t && t(c, (...l) => this.t(...l));
    }, i = (c) => {
      var f, g;
      const u = K;
      !x && !c && this[u(211)].languageDetector && (c = []);
      const d = be(c) ? c : c && c[0], l = this[u(2705)][u(1887)](d) ? d : this[u(211)].languageUtils[u(2722)](be(c) ? [c] : c);
      l && (!this.language && s(l), this[u(353)][u(1503)] || this[u(353)][u(930)](l), (g = (f = this[u(211)][u(1782)]) == null ? void 0 : f[u(2433)]) == null || g.call(f, l)), this[u(203)](l, (h) => {
        n(h, l);
      });
    };
    return !x && this[a(211)][a(1782)] && !this[a(211)][a(1782)][a(1180)] ? i(this[a(211)][a(1782)][a(427)]()) : !x && this[a(211)].languageDetector && this[a(211)][a(1782)].async ? this[a(211)].languageDetector[a(427)].length === 0 ? this[a(211)][a(1782)][a(427)]().then(i) : this[a(211)][a(1782)][a(427)](i) : i(x), e;
  }
  [r(1116)](x, t, a) {
    const e = r, s = (n, i, ...c) => {
      const u = K;
      let d;
      typeof i != "object" ? d = this[u(278)][u(670)]([n, i][u(1331)](c)) : d = { ...i }, d.lng = d[u(890)] || s[u(890)], d[u(431)] = d[u(431)] || s[u(431)], d.ns = d.ns || s.ns, d.keyPrefix !== "" && (d[u(238)] = d.keyPrefix || a || s[u(238)]);
      const l = this[u(278)].keySeparator || ".";
      let f;
      return d[u(238)] && Array[u(2224)](n) ? f = n[u(1622)]((g) => {
        const h = u;
        return typeof g === h(2279) && (g = Qt(g, { ...this[h(278)], ...i })), "" + d[h(238)] + l + g;
      }) : (typeof n === u(2279) && (n = Qt(n, { ...this.options, ...i })), f = d.keyPrefix ? "" + d[u(238)] + l + n : n), this.t(f, d);
    };
    return be(x) ? s[e(890)] = x : s.lngs = x, s.ns = t, s[e(238)] = a, s;
  }
  t(...x) {
    var a;
    return (a = this[r(353)]) == null ? void 0 : a.translate(...x);
  }
  exists(...x) {
    var a;
    const t = r;
    return (a = this[t(353)]) == null ? void 0 : a[t(1590)](...x);
  }
  setDefaultNamespace(x) {
    const t = r;
    this.options[t(1156)] = x;
  }
  [r(2296)](x, t = {}) {
    const a = r;
    if (!this[a(529)]) return this.logger.warn(a(750), this[a(2018)]), !1;
    if (!this[a(2018)] || !this.languages[a(2236)]) return this[a(2789)][a(816)]("hasLoadedNamespace: i18n.languages were undefined or empty", this[a(2018)]), !1;
    const e = t[a(890)] || this.resolvedLanguage || this[a(2018)][0], s = this[a(278)] ? this.options[a(1677)] : !1, n = this.languages[this[a(2018)][a(2236)] - 1];
    if (e[a(2182)]() === a(2549)) return !0;
    const i = (c, u) => {
      const d = a, l = this.services[d(339)][d(2497)][c + "|" + u];
      return l === -1 || l === 0 || l === 2;
    };
    if (t[a(1745)]) {
      const c = t[a(1745)](this, i);
      if (c !== void 0) return c;
    }
    return !!(this[a(1283)](e, x) || !this[a(211)].backendConnector.backend || this[a(278)].resources && !this[a(278)][a(2796)] || i(e, x) && (!s || i(n, x)));
  }
  [r(938)](x, t) {
    const a = r, e = Q0();
    return this.options.ns ? (be(x) && (x = [x]), x[a(1022)]((s) => {
      const n = a;
      this.options.ns[n(1686)](s) < 0 && this.options.ns[n(1449)](s);
    }), this[a(203)]((s) => {
      e[a(753)](), t && t(s);
    }), e) : (t && t(), Promise[a(753)]());
  }
  [r(2561)](x, t) {
    const a = r, e = Q0();
    be(x) && (x = [x]);
    const s = this[a(278)][a(910)] || [], n = x[a(1665)]((i) => s[a(1686)](i) < 0 && this[a(211)][a(2244)][a(870)](i));
    return n[a(2236)] ? (this[a(278)][a(910)] = s[a(1331)](n), this[a(203)]((i) => {
      e[a(753)](), t && t(i);
    }), e) : (t && t(), Promise.resolve());
  }
  [r(828)](x) {
    var s, n;
    const t = r;
    if (x || (x = this[t(1385)] || (((s = this[t(2018)]) == null ? void 0 : s[t(2236)]) > 0 ? this.languages[0] : this[t(1503)])), !x) return "rtl";
    try {
      const i = new Intl[t(1942)](x);
      if (i && i[t(1042)]) {
        const c = i[t(1042)]();
        if (c && c.direction) return c.direction;
      }
    } catch {
    }
    const a = ["ar", t(1362), "sqr", t(739), "xaa", t(1161), "yud", t(2568), t(1988), t(2755), t(1356), t(2539), t(2347), "acx", t(1628), t(1094), "ads", t(2893), t(1349), t(1191), "ajp", t(2695), t(1575), "arb", t(2862), t(1208), t(2320), t(2472), t(665), t(1741), "ayh", t(382), "ayn", t(533), t(1013), "pga", "he", "iw", "ps", t(2871), t(1551), t(2648), t(1340), "prd", "ug", "ur", t(1772), t(836), t(2113), "ji", "yi", t(2510), "men", "xmn", "fa", t(2438), t(581), t(1406), "prs", "dv", t(2543), t(812)], e = ((n = this[t(211)]) == null ? void 0 : n[t(2244)]) || new Kr(ea());
    return x.toLowerCase().indexOf(t(2911)) > 1 ? t(2573) : a[t(1686)](e[t(2310)](x)) > -1 || x.toLowerCase()[t(1686)](t(2222)) > 1 ? t(1348) : t(2573);
  }
  static [r(2587)](x = {}, t) {
    const a = r, e = new xx(x, t);
    return e.createInstance = xx[a(2587)], e;
  }
  [r(2498)](x = {}, t = px) {
    const a = r, e = x[a(2090)];
    e && delete x[a(2090)];
    const s = { ...this.options, ...x, isClone: !0 }, n = new xx(s);
    if ((x[a(222)] !== void 0 || x[a(1276)] !== void 0) && (n[a(2789)] = n[a(2789)].clone(x)), ["store", a(211), a(1503)].forEach((c) => {
      n[c] = this[c];
    }), n[a(211)] = { ...this[a(211)] }, n[a(211)][a(1993)] = { hasLoadedNamespace: n[a(2296)][a(584)](n) }, e) {
      const c = Object.keys(this[a(2705)][a(2516)])[a(661)]((u, d) => {
        const l = a;
        return u[d] = { ...this[l(2705)][l(2516)][d] }, u[d] = Object.keys(u[d])[l(661)]((f, g) => (f[g] = { ...u[d][g] }, f), u[d]), u;
      }, {});
      n[a(2705)] = new Zr(c, s), n[a(211)][a(689)] = n[a(2705)];
    }
    return x[a(2532)] && (n[a(211)][a(2189)] = new Xr(s)), n[a(353)] = new Fx(n.services, s), n[a(353)].on("*", (c, ...u) => {
      n[a(863)](c, ...u);
    }), n[a(419)](s, t), n[a(353)].options = s, n[a(353)][a(339)][a(211)][a(1993)] = { hasLoadedNamespace: n[a(2296)][a(584)](n) }, n;
  }
  [r(1047)]() {
    const x = r;
    return { options: this[x(278)], store: this[x(2705)], language: this[x(1503)], languages: this.languages, resolvedLanguage: this[x(1385)] };
  }
}
const Qe = xx[r(2587)]();
Qe[r(2587)], Qe[r(828)], Qe.init, Qe[r(203)], Qe[r(1987)], Qe[r(2827)], Qe[r(930)], Qe[r(1116)], Qe.t, Qe[r(1590)], Qe[r(677)], Qe[r(2296)], Qe[r(938)], Qe[r(2561)];
function Ci() {
  const o = r;
  if (typeof navigator !== o(233) && navigator[o(1503)]) return navigator.language === "zh-CN" ? "zh-CN" : o(2380);
  try {
    const x = typeof require < "u" ? require : void 0;
    if (x)
      return x(o(2882)).host.uiLocale.startsWith("zh") ? "zh-CN" : "en-US";
  } catch {
  }
  return o(2380);
}
function Nx() {
  const o = [" , message: 'should match exactly one schema in oneOf' ", "TaskRouter 服务地址", "#3333CC", "Primary boundary", "shift", "createWithPreprocess", "too_small", "null", '" ignored in schema at path "', "正在发送...", "ZodBigInt", "当前选区", "获取图片", "ComfyUI服务器重连中", "_requestMessageId", "fallback", "提示词", "toFixed", "invalid_arguments", "alwaysSet", "postProcess", "errs__", "Mask", "skipOnVariables", "新增槽位", "ZodAny", "setProperty", "changeTracker", "_onrequest", "arz", "multipleOfPrecision", "_onnotification", "No image returned", "setRequestHandler", " = '' + ", "overflow", "Set text to layer", "Unknown message type: ", "~standard", "log", " == errors) {", "error", "execution_interrupted", "formatParams", "sdppp/streamRequest", "当前图层范围", "messagePoster", "typ", "onerror", "readOnly", "Status check aborted", "inline", " , message: 'should NOT be valid' ", "如何获取APIKey", "state", "cloneInstance", "max", "(typeof ", "mode", "sdppp-heartbeat", "allServers", "#/definitions/nonNegativeIntegerDefault0", "async schema in sync schema", ".hasOwnProperty(", "ZodObject", "removeKeyword", "#FF6633", "hbo", "#CC3300", "IPV6ADDRESS", "Not implemented (501)", "async format in sync schema", "上传已中止", "data", "initializeNodeStores", "var missing", "ZodArray", "waiters", "No task template selected", " + '", "[BroadcastManager] Error forwarding ", "isFinite", "It seems you are nesting recursively key: ", "以当前图层边界获取当前图层", "stack", " !== undefined) {  ", "values", "提示词内容", "Cycle detected: ", "interpolation", "addLookupKeys", "处理进度 {{processed}}/{{total}}", "生成中...", "loadOne", ".patternProperties", ") vErrors.length = ", "acq", " var itemIndices = {}, item; for (;i--;) { var item = ", "Click to remove local file", "ulid", "sam", "locale", "race", "sec", "requestInitialStateForNode", "Task cancel failed: {{error}}", "cimode", "implementAction", " = true; ", "', depsCount: ", "getCapabilities", " = errors , ", "requestHandlers", "finished", "appendNamespaceToMissingKey", "invalid-input", " if (rootData === undefined) rootData = data; ", ") { ", "loadLanguages", "ctx", ";  if (vErrors === null) vErrors = [err]; else vErrors.push(err); errors++; } } ", "缺少可上传的资源", "Supabase URL", "fullFilename", "index", "aao", "Stop", "Graph must have at least one node", "Idle", "获取 API Key", "ltr", "errorHandlers", '";  ', "Validation", "extra", "description", "_loadingSchemas", "{5}", "schemaHasRulesExcept", "每批图像数", "查看日志", "deprecate", "粘贴你的模型名称", "No default templates available.", "createInstance", "扣除积分", "defaultMeta", "https", " == 'number' ? ( (", "unionErrors", "augment", "refinement", " }  ", "正在连接 ComfyUI...", "创建文件资源失败", "prototype", "Image imported to canvas", "dirty", "&#39;", "Server does not support logging (required for ", "本地视频", "Empty", "; else vErrors = null; }  ", "equal", "[0-9]", "getItem", "ComfyUI not ready", " if (errors === ", "val is not a non-empty string or a valid number. val=", " var schema", "inlineRefs", "生成中", "Create guide frame", 'no schema with key or ref "', "以主图边界获取当前图层", "Asynchronous transform encountered during synchronous parse operation. Use .parseAsync instead.", "default is ignored in the schema root", "elicitInput", "交集或缩放目标为空", "Current selection: Canvas", "sd-ppp-static/sdppp_images/", "status API failed - {{reason}}", "stats", "Set as Current Layer", "schemaHasRules", "actions:util", "Desire bounds is null", "unsetOutgoingRequestInterceptor", "returnTypeError", ";  if (vErrors === null) vErrors = [err]; else vErrors.push(err); errors++; ", "minutes", "names", " != 'number') { ", "safeParseAsync", "mins", "charCodeAt", "当前任务路由暂不支持上传控件", "28acGZFV", "未能解析租户信息", "exclude", "disable", "years", " , message: 'should NOT be ", ".pi-sign-out", "self", "pst", "hrs", "validation", "_cachedPath", "nullish", "extendRefs", "useCustomRule", "Forbidden (403)", "getNodeIds", "logging/setLevel", "padEnd", "#/definitions/stringArray", "[vV]", "isEmpty", "custom", "nan", "Rescoped", " , params: { pattern:  ", "发送至选区", "workflows", "Task ID", "Cannot access data ", "Download", "openWorkflow: ", "Validating form...", " if (", "secure", "save", "Google Gemini Image Generator", "Jump to last", "请输入您的Replicate API Key", "updateMissing", "Gemini 2.5 Flash Image", "uploadImage API failed - HTTP error! status: {{status}}", "abs", "origin", "overwrite", "addMetaSchema", "dataPathArr", "rejecting language code not found in supportedLngs: ", "[\\/\\?]", "describe", "broadcastManager", "keyType", "effect", "$schema", " !== undefined && ( typeof ", "apc", " = true , j; if (i > 1) { ", " in key: ", "external", "Get image from Canvas", "网关错误 (502)", "colors", "ZodUnion", " = defaults[", "validateStreamRequestorRequest", "store", "清除视频", "1.0.0", "Current Selection", "Invalid resource identifier", "unescapeSuffix", "fatal", "additionalItems", " via punycode: ", "([^0-9])", "toHash", "Import as Smart Object", "Open images from file", "ComfyManager not found, cannot reboot", " than ", "toUnicode", "getSuffixes", "getBestMatchFromCodes", " === undefined) { ", "notificationHandlers", "defaults", "is a required property", "boolean", "getSuffix", "openWorkflow", "addKeyword", "Workflow stopped by user", '" was not yet loaded', "isDuration", "getAccountStatus API failed - HTTP error! status: {{status}}", ") ) ", " = equal(", "append", "initialized", " === undefined) ", " } ", "AI Generation Task", "暂无历史任务", "显示预览框 ({{count}}张图片)", "]; if (", "isCUID2", "Task cancelled", "workflowManager", "NOT_PATH", "findPathInternal", "comfy_api_key", "{2})", "debouncedNotificationMethods", "Cannot register capabilities after connecting to transport", "resources/subscribe", "abv", "Model", "execution_start", "nanoid", "按回车打开应用： {{appName}}", "pick", "loopRequired", "array", "Task execution failed", "当前图层", "customRules", "cardinal", "#CC3366", "Invalid graph definition: ", "iterator", "actionManager", "); for (var ", "minLength", "Local file", "broadcastHandlers", 'Only layer kind "TEXT" is supported, invalid layer: {{0}}', "getScriptPartFromCode", " == +", "Positive Prompt", "Please click Login in the top-right corner.", "发送图片失败 {{index}}: {{error}}", "cancelled", " not in path ", "unrecognized_keys", "Failed to write log file:", " = undefined;", "strictNumbers", " ) : ( (", "自动同步中…", "logger", "heartbeatTimer", "buildAdjacencyList", "Loading history tasks...", "Current", "No preview content yet", "Generate", "partialBundledLanguages", "?\\]?$", "   var err =   ", "+Alt 反转遮罩", "Model with affordable price, abundant community applications", "Enter a quality percentage", "nonnegative", "使用教程", "readingCalls", "Number must be finite", "posterIdentifier", "#0033FF", "__origin", "/properties", "自动同步: 开启", "var default", "interpolate", "entries", "#CC3399", "AbortSignal is already aborted", "Get Image", "\\.\\d{", "connecting", "getOwnPropertyNames", "getNodes API failed - {{reason}}", "startsWith", "missingKeyNoValueFallbackToKey", "toResolveHierarchy", "如何获取APIKey和API Secret", "inlineRef", "maxParallelReads", "use", "notifications/resources/list_changed", "handleIncomingMessage", "nodeProxies", "split", "PluralRules", "控件 {0} 转换失败：", "_addCheck", "strictDefaults", "exception_message", "Unsupported upload type: {{type}}", "isTransportReady", "MiddlewareError", "namespaces", "jsonPointers", "emoji", "usedLng", "#CC9900", "nodeIndexes", "You are passing an undefined module! Please check the object you are passing to i18next.use()", "precision", "false", "errorsText", "zod", "expired", "from", "UploadPassProvider is not fully compatible with TaskRouter upload mechanism. Please use the uploadResource prop instead.", " = true; if ( ", "' : '", "No Intl support, please use an Intl polyfill!", ") { var op", "当前选项：画布", "_processInputParams", "获取图层 {{0}} 的内容", "_requestHandlerAbortControllers", "arq", "extract", "at most", "点击移除本地文件", "从磁盘获取", " , params: { failingKeyword: ", "disconnected", "_cached", "source", "pbt", "ZodSymbol", "unescapePrefix", "const", 'Invalid input: must end with "', "notificationsHandled", "Delete Template", "retryTimeout", "maxValue", "connectionManager", "getConnectionCount", "uxp", "$ref", "resolveRef", ".type", "runningRequests", "errors", "Get selection failed", "Current Layer", "fallbackNotificationHandler", "checkDataType", "heartbeatTimeoutTimer", "aeb", " = RULES.custom['", "hasRequestHandler", "请点击右上角登录后使用。", "var division", "execution_success", "Template name", "remove", "-{{value}} points", "getClientCapabilities", " in ", " !== parseInt(division", "ZodBranded", "isClone", "_schemas", " == 'boolean') ", "MethodNotFound", "([01]\\d|2[0-3]):[0-5]\\d(:", "-latn", "notifications/progress", "Invalid function arguments", "assertEqual", "Email address's domain name can not be converted to ", "preprocess", "init: you are still using the legacy format function, please use the new approach: https://www.i18next.com/translation-function/formatting", "pending", "_onclose", ") && (missing", "合并组失败", "Already connected to node ", "刷新工作流列表", "_responseHandlers", "Get layer info", "idx", "parentDataProperty", " && ", "flags", " ) {   ", "wss", "Failed to request initial states after connecting to ", "hasOutgoingNotificationInterceptor", "未授权 (401)", "#FF3300", "createMessage", "正在发送图像...", "sdpppX2", "Failed to reboot ComfyUI", "prompts", "默认模板", "已限定范围", "brand", "unknownKeys", "任务未完成，当前状态: {{status}}", " , schema: false , parentSchema: validate.schema", "sendPromptListChanged", "missingSchema", "initAsync", "failing", "_serverInfo", "unescapeComponent", " else { ", "_unknown", "Not current document", "暂无默认模板。", "compileAsync", "passthrough", "dataPath", "setupStreamResponseHandler", "Action ", "joinAs", "调整输入设置", "nodes", "#FFCC00", "safe", "keySeparator", "dataLevel", "trim", "over", "Waiting for ComfyUI to finish connecting…", "create", "mesh:workflow", "userDefinedNsSeparator", "handleDirectProxyForward", "Get image from Current Layer", "outputs API failed - {{reason}}", "Select layer", "queues", "value", "选区边界", "Invalid ", "运行失败 - 未获取到 nodeInfoList，请先执行 getNodes()。", "2025-06-18", "getTransportInternal", "valueType", "$dataMetaSchema", "ZodTuple", "loadResources", "非当前文档", "输出区域", "ordinal", "skips", "getHandler", "missingRef", "fail", "services", "under", "保存提示词模板失败。", "New Layer", ")' returned an object instead of string.", "defaultError", "How to get APIKey and API Secret", "filename", "Required", "connected", ", '", "debug", "图片已导入到画布", "SDPPPX 服务不可用", "(?:", "offset", "InvalidParams", "minValue", "_formats", "Defaults using", "限制图片尺寸", "def", "undefined", "New Document", "maxTokens", "abortRequest", "getValidEnumValues", "keyPrefix", '[\\"]', "custom keyword definition is invalid: ", ".validate;", "Importing image {{index}}/{{total}}...", "stream", "Fetch canvas with canvas boundary", "OpenAI - 图片编辑", " if (errors === 0) return data;           ", "No custom templates yet.", "选区除外", "usedParams", "getCurrentNodeId", "]; ", " = errors; var ", "Layer {{0}} is not a group", "&subfolder=", '" (see option extendRefs)', "addFormat", "Store not found for ", "appendNamespaceToCIMode", "Outgoing request interceptor failed: ", "nullable", "ConnectionClosed", "No limit", " should be boolean' ", "title", "保存当前", "schema id ignored", "isNANOID", "getPath", "rootData", "namespace", "发送到PS", "Not a ZodError: ", "token", "Uploading, if the image too large, may be lag...", "widgetableStructure", "_path", " if (false) { ", "options", "getNodeTitle", '" resolves to more than one schema', "defineProperty", "notification", "mergeArray", "_oninitialize", "relative-json-pointer", "Please select the image to get", "should NOT have additional properties", " levels up, current level is ", "[^0-9]", "ZodNullable", "ZodNumber", "stopSequence", "relativetime", "int", "setInterval", "未知错误", "]); ", "Local image pack", "isOptional", "正在运行", ")) {  ", "fromNode", "点击发送（Shift-点击新建文档）", " != 'number') || ", "; else vErrors = vErrors.concat(", "getResourceBundle", "Preparing...", " } else {  for (var ", ", (dataPath || '')", ".type || 'string'; if (", "parsedType", "You are passing a wrong module! Please check the object you are passing to i18next.use()", "uxpHost", " delete ", "requestedSchema", "2.0", "Quick", "comfyAPI is not initialized, maybe comfyUI is too old", "file://", "重新加载", "File not found: {{path}}", "missed to pass in variable ", "arrayKeywords", "millisecond", "setLimit", "mountedTransports", "clear", " , message: 'should contain a valid item' ", "loaded", "parse", "translation", " === undefined ", "Outgoing notification interceptor failed: ", "processors", "buffer", "Discriminator property ", "_key", "removeSchema", "backendConnector", "reload", "Full Canvas", " characters' ", "timeoutId", "encountered", "#6600CC", "sdppp_widgetable_title", "IPV4ADDRESS", "getter", "[^\\%\\:]", " = [", "currentNodeId", "&#x2F;", "translator", "选择 AI 服务提供商", "Result fetch aborted", "wait", "_limitItems", "async ", "local", "nss", "此处粘贴 WebApp ID", "Task Details", " = true; break; }", "none", "detectCycles", "load", "jsonrpc", `" keyword validation' `, "%c ", "Validation failed but no issues detected.", "Boundary preview", "创建时间", "选择应用...", " = formats[", "\\:\\:", "Unrecognized key(s) in object: ", "加载历史任务...", " ? await ", "formatter", "Adjust input settings", "broadcast", "ayl", "requestId", "_regex", " === undefined || ", " } else { ", " = true; else if (typeof ", "newlayer_selection", "graphInstance", "onclose", "Auto send disabled", "errorPath", " validate.errors = vErrors; return false; ", "%25", "setupAbortHandler", "rejectImage", "Delete", "[\\+\\-\\.]", "无效操作: {{action}}", "Tutorial", "initialState", "uiWeightSum", "获取表单数据失败", "less than", "RunningHub - {{webappId}}", "SDPPP may not be installed or version mismatch (404)", "PCT_ENCODED", "includes", '" is used in schema at path "', "unsetNotificationHandler", "Send to Selection", "received", "onmessage", "http", "Result fetch failed", " = new RegExp(", "run API 调用失败 - HTTP 错误，状态: {{status}}", "finite", "init", " , parentSchema: validate.schema", "{6}", ") {   var err =   ", "parseMissingKeyHandler", "MissingRefError", "parentData", "true", "detect", "Fetch current layer with current-layer boundary", "Opening workflow", "{0,6}", "lngs", `日志已保存到文件: {{path}}


`, "requestsHandled", "completed", "setOutgoingRequestInterceptor", "$data", "exec_info", "getProtocol", "currency", "interceptorTimeout", "instructions", "请输入模型名称", "请输入大于 0 的像素值", "dataVar", "; else vErrors = null; } ", ";if (", "Upload aborted", '" as the namespace "', "Enter your RunningHub API Key", ".dataPath === undefined) ", "mountedEndpoints", "addRule", "自动取图中…", "生成失败", " == errors) { ", "历史记录", " % 1)", "缺少遮罩资源", "subject", "keys", "cancel", "and", "AUTO", "extendTranslation", "invalid_type", "getDefaultValuesFromSchema", "pluralCategories", "createStreamState", "SDPPP可能未安装或和插件版本不匹配 (404)", "Importing history image...", "` could not be extracted from all schema options", "returnDetails", "运行了 {{duration}} 秒，{{message}}", "Shift 点击或右键可切换自动发送", "ifClause", "Task failed: {{status}}", "toASCII", "isCIDR", "清空选择", " , message: 'property name \\'", "正在发送所有图片...", "notifications/prompts/list_changed", "required", "propertyNames", " , params: { format:  ", "; if (validate.errors !== null) { if (errors) validate.errors.length = errors; else validate.errors = null; } delete ", "NOT_SCHEME", "Get pixel of {{0}} failed", " = false; else if (", "仅选区范围", "以画布边界获取画布", "name", "###", "ZodNever", "Store not found for current node ", " , params: { passingSchemas: ", "metaSchema", "pluralSeparator", "addIssues", "shared", " === false) ", "ZodLiteral", "regExpQueue", " if ( ", " try { await ", "Delete current", "#0000CC", "superRefine", "resources", "McpError", "Rectangle coordinates required for create action", " = true; } else { ", "assertNever", "contains", "handleIncomingNotification", " var errs_", "History", "reference", " , message: 'should match some schema in anyOf' ", "nsSeparator", "Date must be ", "设为画布", "任务 ID", '"; } ', "反向裁剪", " -> ", "#3399CC", "Waiting for image upload...", "isInitialized", ")) { if (vErrors === null) vErrors = ", "Notification interceptor failed for ", "; var ", "ayp", ";  if (vErrors === null) vErrors = [err]; else vErrors.push(err); errors++; } else if (", "; } ", "&amp;", "sampling/createMessage", "newlayer_curlayer", "NOT_PATH_NOSCHEME", "async schema referenced by sync schema", "_cache", "exclusiveMinimum", "added", "originalError", "definitions", " &&   Object.prototype.hasOwnProperty.call(", ` + '" schema' `, "streamRequestorHandlers", `"' `, "Disk", "clone", "forward", "Generating...", "[\\xA0-\\u200D\\u2010-\\u2029\\u202F-\\uD7FF\\uF900-\\uFDCF\\uFDF0-\\uFFEF]", "allOf", " , params: {} ", "Refresh workflow list", " throw new ValidationError(vErrors); ", "critical", "Edge references unknown target node: ", "isInitializing", "bigint", "保存所有", "'[' + ", " var isAdditional", " || validate.schema", " = ", "minSize", " === null || ", "_capabilities", "Main Image", "keywordValidate", "if (!", "time", "uniqueItems", "one", ` , message: 'should match format "`, "_fragments", "isNaN", "greater than or equal to ", "peo", "not_finite", "ucs2length", "bind", "ZodLazy", "getData", "sdppp", "queue", " = false; break outer; } } } ", "unicodeSupport", "Leave empty for no limit", "notifications/initialized", "copy", "Error in broadcast handler for ", " , validate.schema", "queuePrompt", "removeEventListener", "table", "examples", "#FF3366", "未找到文档 {0}", "从 当前图层 获取图像", "ComfyUI - {{workflowName}}", "relative", " === false || ", ".additionalProperties", "Modify", "parseInt", "RH Coins:", "{0,5}", "modifying", ") break; } ", "optional", "success", "清空所有", "/else", "Template saved.", "usedKey", "ZodPromise", " , message: 'should be multiple of ", `Get image &
Crop selection mask`, "请先选择应用", "passContext", "图像质量 (%)", ") { if (vErrors === null) vErrors = ", " , params: { missingProperty: '", "自动获取中…", "不支持的上传类型：{{type}}", "properties", "finally", "assertNotificationCapability", "path", "[BroadcastManager] Error forwarding broadcast:", " if (!", "range", "959511wWsewp", "nodeErrors", "favorites", "postProcessPassResolved", `Can't use "invalid_type_error" or "required_error" in conjunction with custom error map.`, "找不到文档: {{0}}", "currentOnly", " != 'undefined' && ", "未找到图层 {0}", "languageChanged", "#99CC33", "当前选项：文件", "closeWorkflow", "connect", "#66CC33", "ping", "ignore", "onTimeout", "__internal_", "No handler for streamRequestor: ", "9496370BmEMoL", "failed", ") || ", " = false;for (var ", "[MCPMiddleware]", "reduce", "isULID", "sdppp_workflow_alias", "refs", "auz", "at least", "then", "保存并立即执行", "范围 1-100", "overloadTranslationOptionHandler", "i18nFormat", "getDefinition", "interceptor_error", "compositeRule", "setupGeneralBroadcastHandler", "baseId", "setDefaultNamespace", "query", " , schemaPath: ", "function(data, dataPath, parentData, parentDataProperty, rootData) { 'use strict'; ", "Mask resource is missing", " !== undefined ", "_errors", "anyOf", "pluralResolver", "InternalError", "MIN_SAFE_INTEGER", "fast", "resourceStore", "[^\\%\\[\\]\\:]", "海量模型，稳定服务", "ValidationError", "1020012OJPhXn", " && self._opts.unknownFormats.indexOf(", "模板已保存。", "maxLength", "[UnexpectedJSONParseError]: ", "Layer not found: {{0}}", "#FF00FF", "humanize", "elicitation/create", "registerDirectRequestHandlerGeneric", "color: inherit", "Show sent images", "Negative Prompt", "schemaExcl", "&quot;", "  } ", ") == -1 ", "\\%25|\\%(?!", "Auto sync in progress…", "%[EFef]", "].propertyName = ", "action", "同步当前内容", "cleanupConnection", " if (schema", "cuid2", "resources/read", "removeNamespaces", "sdppp 选中图层", " var err = ", "ZodCatch", "_opts", " must be number", "OpenAI API 错误", " } }", "transports", "选择模型", " ucs2length(", "exec", "pickLocalFile", "lowerCaseLng", "No edge defined from ", "当前任务数:", "Template removed.", "propsKeywords", "mergeShapes", "ssh", " == ", "prompts/list", "OpenAI - Image Edit", "getRunningRequestsCount", "meta", "} else {  errors = ", "./api/userdata/workflows%2F.index.json", "activeState", "scanned", "addUsedSchema", "hasLoadedNamespace: i18next was not initialized", "lte", "isFinite(", "resolve", "obj", "schemaErrorMap", "pathname", " || Object.keys(", "oneOf", "uri", "Clear", "ZodDiscriminatedUnion", "/additionalItems", "exports", "Execute", ".length; ", "validate", "nodeId", "); errors = vErrors.length;  for (var ", "未返回图片", "errorMap", "slice", "refine", "_setupTimeout", "escapeValue", "#CC0033", "outgoingRequestInterceptors", "resetStats", "PS遮罩", "#CC9933", "documentElement", "Set as Current Selection", "创建文档", "Refreshing preview...", "modules", ", schema", "maxItems", "负面提示词内容", "lastIndexOf", "<errors; ", "使用当前图层", ") {  for (var ", "mesh:comfy", "Unknown error ({{code}})", "质量{{percent}}%", "absolute", "用户名: {{username}}", " outer: for (;i--;) { for (j = i; j--;) { if (equal(", "closeHandlers", "创建预览文档", "tools/call", "curlayer_canvas", "Negative prompt content", "Server does not support notifying about resources (required for ", '"number"', "useColors", "invalid_enum_value", "#9933CC", "任务详情", "{0,4}", "Fetch canvas with current-layer boundary", "skipKeywords", "ckb", "#CC6633", "+Alt 按选区裁剪", "nodeStores", "warn", "setter", "Invalid proxy forwarding: current node ", "ZodFunction", "nestingOptionsSeparator", "status API failed - HTTP error! status: {{status}}", "/type", " != 'boolean' && ", "_clientCapabilities", "当前图层边界", "initializedStoreOnce", "createTemporary", "dir", "after app.queuePrompt errors: ", "translate", "observers", "Click to restore default boundary", " else if (", "api", "tools", "yds", "服务器错误 (500)", "已取消", "workflow", " = 0; ", "按选区裁剪", "Remove slot", "enable", "RULES", "notificationsIntercepted", "++) { var ", "transform", "useDefault", "请登陆后使用插件", "customRule", "dataProperties", "Sponsor Points", "resolved promise for", "Logout", "symbol", "setupNodeBindings", "openWorkflows", "应用模板失败。", "coerceTypes", "clearItems", "Not connected", "addIssue", "emit", " = false , ", " = null; try { ", "notifications/message", ") ? ", " = errors;var ", "regexp", "isSupportedCode", "Node ", "Shift-click or right-click to toggle auto send", "请填写模板名称。", "never", "Get selection", " }; return validate; ", "Keyword ", "charAt", "ZodBoolean", "]) ", "_onresponse", "saveWorkflow", "step", "messageHandlers", "queue_remaining", "([+-]\\d{2}:?\\d{2})", " , ", "Output to:", "freeze", "lng", "nid", "prompt_id", "Error validating elicitation response: ", "Add Template", ".data = ", "More actions", "escapeFragment", "waitingReads", "[\\@]", "buildDirectedAdjacencyList", "URI is not a ", "Your powerful node-based workflow engine", "2025-03-26", "catchall", "没有链接图层: {{0}}", "选择文件失败，请重试", "获取结果失败", 'schema with key or id "', "comfyAPI", "preload", "#0033CC", "maxTotalTimeout", "Mask apply returned empty resource", " = 'else'; ", "schema $id is different from id", "边界预览", "Please provide prompt content.", " else {   ", "加载中...", "zh-CN", "notifications/cancelled", "Fit to canvas", "startTime", "querySelector", "ZodUndefined", "Generation failed", "[GraphStoreSynchronizer] Error broadcasting state update for ", 'custom keyword "', "Add slot", "changeLanguage", "&lt;", "Area AI reads from; controls max image size", "=0; ", "clearHeartbeatTimers", "Unknown", "masks", 'Invalid input: must include "', "loadNamespaces", "heartbeatTimeout", "warning", "ZodPipeline", "适配至当前图层", "当前图层除外", " character(s)", "Node definition not found for ", "Cancel", "get_layer_info: 需要 layer_identify", "multipleOf", "$t(", " must be number or boolean", "getDefaultValueFromField", "String must contain ", " after ", "_onprogress", "NOT_QUERY", "Input Image", "pendingCount", "__cycle__", "整个画布", "Array must contain ", "setupStreamProtocolHandlers", "\\$&", "normalizeDuration", "listenMessageCallback", "sessionId", "OpenAI/Google 格式API", "$async", "setState", "comfy-uxp", "No active layer", "Comfy.userId", "level", "if ( ", "params", "画布范围", "assertRequestHandlerCapability", " = errors;", "performWorkflowReset: ", "_parse", "Overflow: input needs wider integers to process", "负面提示词", "select", " not found on node ", "_parseSync", "输出预览", "isInteger", "response", "Layer not found {{0}}", "setResolvedLanguage", "fcName", "setupStreamRequestHandler", "ZodEffects", "ComfyUI加载失败，HTTP状态码：{{code}}", " , params: { allowedValues: schema", "loaded namespace ", "valid", "#00CCCC", "Cannot reboot because ComfyManager is missing", "Gemini 2.5 Flash 图像", "Get mask from Canvas", "开始时间", "画布变更后自动运行工作流", "快捷键选图功能仅在插件窗口聚焦时可用", "[GraphStoreSynchronizer] Error processing store update for ", " = ''; ", "Click to send (Shift-click creates new document)", "#3333FF", "++) { vErrors[", "color", "_metaOpts", "显示发送的图片", "No workflow selected", "bbz", " === 0 || ", "Current layer", "getConnectionToNodeInternal", "Notification handler failed for ", "uploadImage API failed - {{reason}}", "请输入您的RunningHub API Key", "~validate", ") {  ", "forEach", "Core schema meta-schema", "设为选区", "isObject", "当前没有活动图层", "isInt", "Elicitation response content does not match requested schema: ", "returnedObjectHandler", "setNodeTitle", "some", "getConnectedNodeIds", "nestingPrefix", "sdk", " == 'boolean' || ", "lazycreate", "property ", "regExpMap", "varReplace", "从磁盘上传", "subscribe", "getTextInfo", "unshift", "])) { ", "不裁剪", "Run", "toJSON", "停止并取消全部", "stopAll", "urn:uuid", " is present' ", "accept", " if (Array.isArray(", "自动填入画布开启", "full", ", validate.root.schema);", "赞助分", "mergeObjectAsync", " , (dataPath || '')", "heartbeatInterval", "revocable", "enabled", "尚未配置 ComfyUI 连接，请先设置地址。", "从 选区 获取遮罩", " when property ", ".length <= ", "#/definitions/schemaArray", "float", "test", "nestingSuffix", " reference.", "Meta-schema for $data reference (JSON Schema extension proposal)", "mcpMesh", "画布边界", "Fetch canvas with primary boundary", "interrupt", "protocolVersion", "keywords", " ? ", "addNamespaces", "         , parentSchema: validate.schema", "xn--", "Use current layer", "uuid", "#CC00CC", "Auto send enabled", "all", "_refinement", "canReachThroughConnectedNodes", "languageOnly", ".length == 0) {", "longer", "getUsedParamsDetails", "adf", "catch", " , params: { additionalProperty: '", "_meta", "getClientVersion", "getTransport", "implements", "[\\uE000-\\uF8FF]", "getRegExp", "getNode", "#6633FF", "高级选图", " validate.errors = [", "strictCreate", "iri", "Internal error", "localeCompare", ")) {  var err =   ", "Failed to update the {{part}} prompt. Please try again.", "notifications/resources/updated", "2024-11-05", " not found for current node ", "getFixedT", "removeItem", "   ", "; } catch (e) { ", "streamRequest", "RH币:", "assertCapabilityForMethod", "Comfy Manager未安装，无法重启", "hasError", "getTransportToNode", "#33CCCC", "refVal[", "getAccountStatus API 调用失败 - {{reason}}", "%[89A-Fa-f]", "http://json-schema.org/schema", "工作流打开中", "ZodDate", "点此获取RunningHub APIKey", "选区遮罩", "#9900CC", "_getId", "strictKeywords", "shorter", "definition", "read", "setItem", "number", "从 当前图层 获取遮罩", "移除槽位", "abort", "deepPartial", "'else'", "formats", "ComfyUI failed to load, HTTP status code: {{code}}", "Workflow not found", "删除当前", "getConnectionInfo", "))))) {", "Request timed out", ", received '", "defaultNS", "toUpperCase", "Refresh", "_notificationHandlers", "isBase64url", "yhd", "ZodRecord", "+Shift 调整更多选项；Ctrl 单次获取。", "messageQueue", "send", "mesh", "任务已取消", "sort", " + ", "12eSBhnO", "throwIfAborted", "capacity", "body", " : ", "Running", ".validate; } if (  ", "NOT_HOST", "Success", "创建操作需要矩形坐标", "async", " = typeof ", "ZodEnum", "left", "inclusive", "OpenAI API error", "contextSeparator", " === 'false' || ", "无法写入{{part}}提示词：ComfyUI 尚未就绪。", " , schema: validate.schema", "request", "afb", "escapeQuotes", "curlayer", "新图层", "File upload failed", "defaultVariables", "/required", "9ibQtTm", "strip", "排队等待", "Failed to open file as document: {{path}}", "#CCCC33", "toStringTag", "Heartbeat timeout for poster ", "^\\[?(", "removeAdditional", "registerProxyForwardHandler", "ars", "Save all", "Number must be ", " for interpolating ", " division", "graphToPrompt", "dataType", "[^\\%]", "pattern", "same-document", "onprogress", "position", "broadcastReceived", "Layer mask", " } if (errors === ", "saveMissing", "isNullable", "addResourceBundle", "escapeComponent", "UploadPassProvider 与 TaskRouter 上传机制不兼容，请改用 uploadResource。", "Task incomplete, current status: {{status}}", "+Alt crop by selection", " ); if (isAdditional", " | ", "刷新余额", "SCHEMES", "Server does not support notifying of prompt list changes (required for ", "graph", "3rdParty", "提示信息", "Started At", "ruleErr", "newdoc_canvas", "-{{value}}积分", "创建文档失败", "Queued", "meta-schema not available", "Select AI Service Provider", "base64url", ".validate; var ", "second", "msecs", "hasOwnProperty", "Unable to reboot ComfyUI", "Select a model", "Use current selection boundary", "Advanced selection", "curlayer_selection", "mountTo", "NumberFormat", "Remote", ", rootData)  ", "varOccurences", "=startErrs", "未选择任务模板", "当前没有可用图层", "任务失败：{{status}}", " not implemented for node ", "isEmoji", "_transport", "exclusiveMaximum", "getDataByLanguage", "keyword", "#0099FF", "less than or equal to", "comfy-user", "isLanguageChangingTo", "formatSeparator", "prefix", "Masked", "schema is invalid: ", " , schema:  ", "hijacked", "ListFormat", "refVal", "hasResourceBundle", "正向裁剪(Outpaint)", "6910486XPcqhf", "prevValid", "del", " var schemaExcl", "Failed to fetch form data", "Base URL", "exact", "_options", "compiling", "Save and run immediately", "Missing upload resource", "sdppp_assets", "ref/prompt", "lastIndex", "toLoad", "登录成功", "（为空）", "substr", " } else {  errors = ", "使用整个画布", "formData", "Max size (px)", "_resetTimeout", "Negative Crop", "can't resolve reference ", "|0?0?", "Reset", "openWorkflowJSON", "addEventListener", "Failed to get result: {{error}}", "素材同步中", "there was no format function for ", "#33CC99", "连接 ComfyUI 失败（HTTP {{code}}）", "findIndex", "order", "out", "minute", "ignoreJSONStructure", "expected", "gte", "alg", "ZodDefault", "No images yet", "requestIdSeq", "[\\!\\$\\&\\'\\(\\)\\*\\+\\,\\;\\=]", "concat", "暂无图片", "[j])) { ", "withTimeout", "Drag images here and release to upload", "process", "absolutePath", "app.queuePrompt caught", "protocol", "prp", "isDatetime", "Hold Shift key to import as new document", "TaskRouter 客户端未初始化", "delete", "') ", "enum", "allErrors", "rtl", "aec", "checkDataTypes", "You must pass an array of schemas to z.tuple([ ... ])", "kind", "正在创建任务...", "message", "[i]; ", "acm", "ZodReadonly", "仅当前图层范围", "find", "capabilities", "sampling", "shu", "yrs", "]; return false; ", "_limit", "$id", "loadGraphData", "Request handler failed: ", "_limitProperties", "Node definition not found for current node ", "strict", "saveMissingTo", "7546936SMvHiz", "hostVersion", "_getOrReturnCtx", "Save current", "detection", "Copy", "基础 URL", "exception", "errorDataPath", "刷新图片中", "interpolationkey", "registerCapabilities", "resolvedLanguage", "ZodNativeEnum", "sendResourceListChanged", " validate.errors = null; return true; ", " !== ", "rootId", "validate.schema", "fromCharCode", "duration", "debugDisableHeartbeatResponse", "Shortcut selection feature requires login", " from id ", "parseAsync", "Options", "cleanup", "Invalid action: {{action}}", "getImage", " items' ", " break; ", "callValidate", "找不到图层: {{0}}", "pes", " === '' ", "[object RegExp]", "[\\:]", "stringify", "key", "isBase64", "exclIsNumber", "allKeys", "ownProperties", "text", "objectKeys", "schemaUnknownRules", "getNodeStore", "jwt", " , message: '", "Comfy侧SDPPP版本({{comfyVersion}})与插件({{pluginVersion}})不匹配，运行可能有问题", "typeof ", "promise", " { keyword: '", "Are you sure you want to delete this template?", "Default Templates", "Use entire canvas", " if (! ", "Scan", ") { errors = ", "verbose", "自动同步: 关闭", "{1,4}", "_cleanupTimeout", " failed", 'id "', "http://json-schema.org/draft-07/schema#", "resources/unsubscribe", "Message", "env", "Run Photoshop Action", "Failed to request initial state for ", ".validate", "NOT_FRAGMENT", "Timeout", "暂无可预览图像", "suffix", "push", " %c", "Server does not support notifying of tool list changes (required for ", "fragment", "executeOutgoingNotificationInterceptor", "react", "Select", "partial", "edges", "callback", "getNodes API 调用失败 - {{reason}}", " ( ( ", " } } ", "' , dataPath: (dataPath || '') + ", "clearCache", '"object"', "headers", "正面提示词", "isConnected", "作为智能对象导入", "hasOutgoingRequestInterceptor", "renderer", "uiWeight", "addSchema", "domainHost", "status", "prompts/get", "responseSchema", "req_", "syncWorkflows", "Note", "exactly", "不支持非文本图层: {{0}}", "loading namespace ", "prev", " = validate.schema", "[object Function]", "Comfy SDPPP version ({{comfyVersion}}) does not match plugin ({{pluginVersion}}), may cause issues", "safeParse", "exactly equal to ", " , message: 'should NOT have duplicate items (items ## ' + j + ' and ' + i + ' are identical)' ", "Template applied.", " < ", "getPathExpr", "host", "{2}", "base64", "queueLoad", "property", "Failed to pick file. Please try again.", "contextualErrorMap", '$ref: validation keywords used in schema at path "', "Smart Object Layer", "[^\\%\\/\\@]", "language", "getAllReachableNodes", "SDPPP 2.0 no longer needs this node", ") break; }  ", "结果获取已中止", "store:update:", "Current selection: Layer {{layerName}}", "$comment", "Empty selection mask", "Failed to open image file: {{error}}", "curlayer_curlayer", "newlayer_canvas", "realTransport", " && !", "ComfyUI connection not configured yet. Please set the address first.", " - no connection available", " , data: ", " === null) ", "新建文档", "statusText", "payload", "isOpen", "toString", "right", "returnNull", "清除参考线框架", "missingRefs", "Failed to check workflow state changes:", "outputs API 调用失败 - {{reason}}", "#/definitions/nonNegativeInteger", "All", "day", "revoke", "user", " = errors;  ", "createErrors", "; if (", "Supabase anon key", "Request timeout (408)", "endsWith", "#FF0000", "更多设置", "passingSchemas", "uploadImage API 调用失败 - HTTP 错误，状态: {{status}}", "patternProperties", "[^\\%\\/\\:\\@]", "reset", "isValidLookup", "pbu", "调整预览文档尺寸", "自动同步未打开", "不支持的图像输入类型", "Failed to apply template.", "setupGraphStoreSync", ".length ", ") {", "ZodVoid", "regex", "Send to PS", "Task execution failed: {{error}}", "Crop", "pipe", "abortAllRequests", ".errors); errors = vErrors.length; } ", "channel", "options.loadSchema should be a function", "验证表单中...", "externalListenMessageCallback", "var pattern", "diff", "_any", "This means something IS WRONG in your setup. You access the t function before i18next.init / i18next.loadNamespace / i18next.changeLanguage was done. Wait for the callback or Promise to resolve before accessing it!!!", "apd", "Google Gemini 图像生成器", "run", "floor", "resources/templates/list", "WebkitAppearance", "usePattern", "Exclude current layer", "Failed to update the {{part}} prompt: ComfyUI connection is not ready.", "2024-10-07", "splice", "Select Source", "year", "fullPath", "]] !== undefined ", "exists", ".then", " = true; if (", "nodeTransports", " ) { ", "URN can not be parsed.", " = +", "invalid_date", " for language ", "maxReplaces", "isNotification", "cmp", "Please select an app first", " || ", "Canvas", "checks", "object", "_exclusiveLimit", "fallbackNS", "forwardBroadcast", "Auto sync is off", "https://github.com/ajv-validator/ajv/blob/master/lib/definition_schema.js", "schemaPath", "2.1.0", "写入日志文件失败:", "资源标识符无效", "schema should be object or boolean", "supportedLngs", "__esModule", "以当前图层边界获取画布", "should have required property \\'", "Document {0} not found", "map", " , message: 'can\\'t resolve reference ", " var missing", "schema $id ignored", "  var err =   ", "var ", "acy", "sdppp/broadcast", "canvas", "markDisconnected", "作为新文档导入", "initializeProducer", "arrayToEnum", "UNRESERVED", "writeOnly", "sdppp/directRequest", "fewer", "Failed to create document from file", "alert", "#6633CC", "ComfyUI加载中...", "Array.isArray(", "Hold Shift for more options; Ctrl for single fetch", "unicode", "Batch Count", "maximum", "Instance method `debug.destroy()` is deprecated and no longer does anything. It will be removed in the next major version of `debug`.", "integer", "missingInterpolationHandler", "output", "notifications/roots/list_changed", " && !Array.isArray(", "Import as New Document", "Clear selection", "[ ]*{", " !== undefined && typeof ", "Error in direct request ", "No first related layer in {{0}}", "status API 调用失败 - HTTP 错误，状态: {{status}}", "app", "contentMediaType", ".call( ", "_requestHandlers", "filter", "call", "roots", "ParseError", "Set as Canvas", ".validateSchema(", "主图边界", "invalid_union", "signal", "validation failed", "toQuotedString", `获取图像 &
限制图像范围`, "fallbackLng", "roots/list", "days", "Click to get RunningHub APIKey", "Failed to update the {{part}} prompt: no matching widget binding.", "Invalid function return type", "Outpaint (positive crop)", "mergeObjectSync", "joinValues", "indexOf", "json", " , message: 'should have ", "separator", "removeMessageEventListener", " var ", "convert widget {0} failed:", "email", "Paste your model name", " if (true) {", ";  ", "ZodString", "relatedRequestId", "[\\:\\/\\?\\#\\[\\]\\@]", "_parseAsync", "getFallbackCodes", "pop", " }   ", "访客登录成功", " var i = ", "选区遮罩为空", ".length , ", "A request handler for ", "schema id must be string", " cannot be resolved", "$el", "Please provide a template name.", ") : ", "isTime", "getKeyword", " === 'true' || ", "批次数量", `" won't get resolved as namespace "`, "Select Banana app...", "[\\-\\.\\_\\~]", "node", "innerType", "未实现 (501)", "returnObjects", "Failed to send an error response: ", "  errors = ", "notifications/tools/list_changed", ") {   ", "Failed to load workflows.", "ASCII", "extractFromKey", "暂无可用工作流。", "(.+?)", "node_errors", " validate.errors = vErrors; ", "string", "method", "activeWorkflow", "RequestTimeout", ` , message: 'should match pattern "`, "avl", "now", "invalid_literal", "minimum", "precheck", "无法从文件创建文档", "removeMiddleware", "+Alt reversed mask", "close", "Sponsor", "getStats", "click", ") {  var err =   ", "给发送的图片创建文档", "assign", "workflows/", "自定义AI工作流引擎", "formatType", "画布变动后自动运行", "urn", "遮罩应用后未得到资源", "Auto fetching…", "format", " == 'object' && Array.isArray(", "normalizeId", "_onerror", "Enter your Replicate API Key", "[i], ", "backend", "default", "parent", "ydd", "ESCAPE", "获取账户信息失败", "validateSchema", "模板已删除。", "default is ignored for: ", "match", "Current option: File", "POST", "Upload from disk", "languageDetector", "hours", " || ! Object.prototype.hasOwnProperty.call(", "Email address's domain name can not be converted to ASCII via punycode: ", "errSchemaPath", "handleAsObject", "（会员专属）", "$schema must be a string", "coerced", "assertCanSetRequestHandler", "invalid_string", "defaultValue", "Guest login successful", ".dataPath = (dataPath || '') + ", "_error", "minDate", "no plural rule found for: ", '.schemaPath = "', "Selection bounds only", "contentEncoding", "item", "exclusive", "No store found for node ", "asyncIterator", 'unknown format "', ", deps: '", "reconnecting", "replace", "/*# sourceURL=", "智能对象图层", "maxProperties", "_limitLength", "Server does not support sampling (required for ", "请选择要发送图像的位置", "服务不可用 (503)", "flatten", "catchValue", " var startErrs", "Action set {{0}} was not found", " === true) ? ", "put", "addPostProcessor", "minProperties", "spa", "sdppp/abort", "kPanelBrightnessMediumGray", ".schemaPath === undefined) { ", "outputs API failed - HTTP error! status: {{status}}", "上传图片中...", "Running for {{duration}} secs, {{message}}", " && Object.prototype.hasOwnProperty.call(", "markConnected", "createAsyncIterator", "' } ", "nonpositive", " / ", "images", "No linked layer for {{0}}", "content", "; if (vErrors !== null) { if (", " , params: { comparison: ", "; }", "useRawValueToEscape", ";  if (vErrors === null) vErrors = [err]; else vErrors.push(err); errors++; } ", "date", "#9900FF", " , params: { type: '", " = customRules[", ") break; ", "resetTimeoutOnProgress", "#3300CC", "thisServer", "missingKey", "messages", "Failed to connect to ComfyUI (HTTP {{code}})", "widgets", "getRule", " } else if ( ", "Confirm", "暂无预览内容", "Deferred upload failed: {{error}}", "Edge references unknown source node: ", "Get mask from Selection", "sourceCode", "executed", "init: i18next is already initialized. You should call init just once!", "No images", "_refs", " == 'number' || ", "unescapeFragment", "URI can not be parsed.", "regexpUnescape", "jsonStringifyReplacer", "not_multiple_of", "无效的边界类型: {{type}}", "destroy", "originalQueuePrompt", "assistant", "apply", "从文件打开图像", "{3}", "Username: {{username}}", "选择工作流", "unknownFormats", "click to restore", "hasLanguageSomeTranslations", "setNotificationHandler", "strong", "适配至画布", "unwrap", "notificationQueue", "AI 生成任务", "Failed", "count", ".call(this, ", "useDefaults", "INTERCEPTOR_ERROR", "_getInvalidInput", "coerce", "reboot", "Incoming message:", "&filename=", "return", " for nesting ", "你的工作流", "禁止访问 (403)", "未知错误（{{code}}）", "点我恢复", "escape", "Clear guide frame", "timeout", "shape", "formatArgs", "[\\.]", "#3366FF", "(Queue:{{queueSize}}) {{progress}}% {{executingNodeTitle}}...", ".test(", "greater than ", "View Logs", "[\\:\\@]", "Inpaint (reverse crop)", "additionalProperties", "Reverse", " === null || (", "userinfo", "Show Preview ({{count}} images)", "selectColor", "common", "ComfyUI server reconnecting", "上传中，如果图片过大，可能会卡顿...", "getProperty", "__proxy_forward", "__proto__", " == 'function' ? ", "Content", "_timeoutInfo", "Close", "constructor", "Error handling incoming message:", "getTime", "Locale", "outgoingNotificationInterceptors", "以主图边界获取画布", "#CC0066", "没有活动文档", "datetime", " console.log(", " + ']'", "请输入质量百分比", "context", "types", "No videos yet", " Object.keys(", " = null; ", " is not a valid identifier", "detail", "executeHandlerAsync", ") - division", "Channel connecting...", "rules", "connectedNodes", "Invalid input", "ZodNaN", "elicitation", "选择图像来源", " {} ", "simplifyPluralSuffix", "pluralRulesCache", "_progressHandlers", "Cloud:", "运行中...", "云端推荐：", "No errors", "_addSchema", "is an invalid additional property", "#FF9900", "negative", "No active document", "Refresh balance", "invalid_return_type", "Fit to selection", "Synchronous parse encountered promise.", ")) ", "#FF33CC", "[\\:\\@\\/\\?]", "reloadResources", "abh", "hour", "缺少主图资源", "Enter a pixel value greater than 0", "管理可复用的提示词模板", "utils", "JWT", "res", "color: ", "resource", "resolveComponents", "actions", "execution_error", "This node defaults to current layer + mask", "管理 Comfy Simple 工作流的提示词片段。", "cacheInBuiltFormats", "root", "manuallyExtractDefaults", "initializeConsumer", "Paste WebApp ID here", "1353kDzPpI", "util", "updateKey", "resolvedOptions", "Client does not support sampling (required for ", "Prompt Templates", "getCanonicalLocales", "getPluralFormsOfKey", "11964fpHKrt", "Uploader not set", "languages", "Failed to fetch account status", "Cannot forward to node ", " , message: 'should be ", "exactUsedKey", "' + ", ".errors; else vErrors = vErrors.concat(", "var refVal", "getNeighbors", "非法的名称: {{0}}", " for (var ", "void", "[0-5]\\d", "prepareLoading", "invalid_union_discriminator", "unknown keyword: ", "week", "#99CC00", "退出登录", "start", "_errorDataPathProperty", "info", "]; } else { ", "); if (!", "ZodMap", "else", " } }  ", "Default", "Layer {{layerName}}", "((\\d\\d[2468][048]|\\d\\d[13579][26]|\\d\\d0[48]|[02468][048]00|[13579][26]00)-02-29|\\d{4}-((0[13578]|1[02])-(0[1-9]|[12]\\d|3[01])|(0[469]|11)-(0[1-9]|[12]\\d|30)|(02)-(0[1-9]|1\\d|2[0-8])))", "cacheKey", "HTTP URIs must have a host.", "Current Tasks:", "选择素材来源", "http://json-schema.org/draft-07/schema", "removeResourceBundle", "initImmediate", "isUUID", "++) { if (", "Invalid JSON-pointer: ", "图层 {{0}} 不是一个组", "__internal_requestInitialState_", "label", "Get API Key", "image", "typeName", "Merge group failed", "image/png", "本节点默认继承:", " = false; if (e instanceof ValidationError) ", "#FF0033", "promptIds", "pong", "Service unavailable (503)", "addMessageEventListener", " , rootData )  ", "result", "_pendingDebouncedNotifications", "comfy", "(\\.\\d+)?", " = false; else {", "获取像素失败: {{0}}", "Running...", "SDPPP赞助者专用API", "sdppp/streamResponse", "1186YpSJKB", "Received a response for an unknown message ID: ", "Received host version from UXP:", "isRoot", "ZodIntersection", "/additionalProperties", " if (!(await ", "forkResourceStore", "widgetable", "opts", " ) || ", "fromCodePoint", " = 'then'; ", "Stop auto run", "Missing TaskRouter remote config: {{missing}}. Please check the remote config and try again.", " return data; ", "hasPath", "Auto repick from PS", "handle", "Connection closed", " = false; ", "set", "Selection", "firebug", "localRefs", "))) { ", "nonempty", "(new RegExp(", "编辑模板", "Error compiling schema, function code:", "yih", "AI使用的区域与最大尺寸控制", "Action handler ", "Waiting in queue", "Manage reusable prompt snippets for Comfy Simple workflows.", "transport", "当前选项：图层 {{layerName}}", "去赞助", "reason", "valueOf", "url", "Invalid forward path for proxy action", "status API 调用失败 - {{reason}}", "更多操作", "[^]", "自动从PS重新获取", "getRegisteredActions", "join", " , params: { limit: ", " throw new ValidationError([", "style", "新建模板", "cycles", "not", "sendResourceUpdated", "/then", "ZodSet", "add", "No history tasks", "++) { ", "留空表示不限", "milliseconds", "issues", "running", "logging", ` , message: 'should pass "`, "failedLoading", " = false;  ", "next", "code", " != 'number' || ", "registerStreamRequestorHandler", 'key "', ".errors", "get", "clientInfo", "date-time", "[0]; ", "#/definitions/simpleTypes", " self._opts.$comment(", '[\\"\\\\]', " not found in graph definition", ".else", " != 'boolean') ", "missed to resolve ", "alwaysFormat", "skipCopy", " , params: { multipleOf: ", "removeDotSegments", "#3300FF", " var async", "No active layer available", "checkState", "Outgoing message:", "console", "file", "RelativeTimeFormat", "nonstrict", "__DEFAULT__", "toLowerCase", "tools/list", "reverse", "^(\\p{Extended_Pictographic}|\\p{Emoji_Component})+$", "设为当前图层", "Fetch current layer with primary boundary", "i18next:", "interpolator", "输出至：", "min", "readonly", "mailto", "图层 {{layerName}}", "addMiddleware", "Image quality (%)", "getResource", "graphChanged", "setupTransportHandlers", "addResource", "applyPostProcessor", "未选择工作流", "_compilations", "too_big", " , message: 'should be equal to constant' ", "normalize", "Unicode", " var vErrors = null; ", " = vErrors[", "='; ", "simpleTypes", "Applying templates is unavailable right now.", "?\\:\\:", "silent", "keyword schema is invalid: ", "Invalid", "Sending image...", "Select boundary", "排队中", "文件上传失败", "lastPongReceived", "-arab", "Invalid boundary: left must be less than right, top must be less than bottom", "isArray", "round", "#FF0099", "serialize", "positive", "valueSchema", "items", " } if (", "模板已应用。", "正在使用本地文件", "#FF3399", "syncStoresToNewConnection", "length", "done", "#6600FF", "Auto Sync: off", "port", "  }  ", "Unauthorized (401)", "coerceToTypes", "languageUtils", "missingKeyHandler", "#FF00CC", "listWorkflows", "Server error (500)", "node_id", "isHeartbeatEnabled", "Input not instance of ", "uri-reference", "Current layer bounds", " ) ", "Request interceptor failed for ", "isTop", "unsetOutgoingNotificationInterceptor", " = false; j = itemIndices[item]; break; } itemIndices[item] = i; } ", "graph update cost ", "findPath", " != 'string') || ", "objectValues", "unsetRequestHandler", "No images to preview", "other", "Local video", "请选择要获取的图像", "compile", "ZodNull", "size", "userAgent", "Login Successful", "#9933FF", "resetRegExp", "[A-Za-z]", "Loading...", "Action {{0}} was not found", " } catch (e) { if (!(e instanceof ValidationError)) throw e; if (vErrors === null) vErrors = e.errors; else vErrors = vErrors.concat(e.errors); errors = vErrors.length; ", "function", "hasEdge", "应用ID:", "How to get APIKey", "initializeResponseQueue", "_compile", "Canvas boundary", "#0099CC", "Manage reusable prompt templates", "[A-Fa-f]", "_def", "keySchema", "#00CC00", "run API 调用失败 - {{reason}}", "pctEncChar", "aborted", "1915AWXLQH", "hasLoadedNamespace", " already exists, which would be overridden", " } } else { ", "./api/manager/reboot", "storage", " , params: { propertyName: '", "has", "processCode", "resolveRunImages", "Failed to save prompt templates.", "optionsMap", "Invalid name: {{0}}", "empty", "确定要删除此模板吗？", "getLanguagePartFromCode", "Entire Canvas", "]; var ", "actionHandlers", "BigInt must be ", "Current layer boundary", "_getCached", "validateHandlerType", "File", "#33CC66", "ary", "extensionManager", "ids", "maxRetries", "Stop and cancel all", "validateKeyword", "cuid", "implementInternalAction", "获取结果失败: {{error}}", " , params: { keyword: '", "Invalid discriminator value. Expected ", "_getType", "resourceName", " if (typeof itemIndices[item] == 'number') { ", "sourceType", "Values", "comfy side transport.onerror", "ZodUnknown", "#FF33FF", "selection", "准备中...", "formatLanguageCode", "postProcessor", "Current selection: Layer", "isRequest", "Upload controls are not supported for TaskRouter", " = undefined; ", "acw", ".schema = ", "addResources", "_instructions", "proxy", "正向裁剪", "Error", "more", "scheme", "Select Image Source", " == 'string' || ", "ZodOptional", "Processing {{processed}}/{{total}}", "sendStreamRequestorRequest", "Exclude selection", "cleanCode", "WARNING DEPRECATED: ", "maxSize", "nestingRegexp", "More Settings", "#0066FF", "macro", "No crop", "Invalid enum value. Expected ", ", received ", " Math.abs(Math.round(division", " var errors = 0;     ", "Connect", "ajv", ` if (typeof item == 'string') item = '"' + item; `, "[A-Za-z0-9\\!\\$\\%\\'\\*\\+\\-\\^\\_\\`\\{\\|\\}\\~]", "Cancelled", "_validateKeyword", "en-US", "missing", "prepend", "Cannot access property/index ", "isIP", "_clientVersion", " && ( ", "$$$$", "组 {{0}} 中没有第一个相关图层", "Creating task...", "type", "Invalid literal value, expected ", "zero", "SDPPP sponsor exclusive API", "registerHandler", "cidr", "substring", "discriminator", "auto", "', missingProperty: '", "停止自动运行", "msec", "exactLength", "resources/list", "listRoots", "X10", "#CC00FF", "等待 ComfyUI 连接完成…", "isEmail", "PS图片", "argumentsError", "MissingRef", "getState", "Uncaught error in notification handler: ", "invalid_intersection_types", "tolerant", "subfolder", "extend", ".replace(/~/g, '~0').replace(/\\//g, '~1')", "tried", "dev", "Created At", "\\' is invalid' ", "TaskRouter service URL", " if (true) { ", "long", "Choose File", "schema", "properties ", "#CC0099", "errToObj", "Save", "#33CCFF", "cacheUserLanguage", "getSchema", " !== undefined)", "dependencies", "Expected ", "jpr", "正在上传...", ` , message: 'should match "' + `, "false schema", " , params: { property: '"];
  return Nx = function() {
    return o;
  }, Nx();
}
let Zs = Ci();
const Ri = { "zh-CN": {}, "en-US": {} };
function Xt(o) {
  const x = r, t = o === x(920) ? ni : oi, a = Ri[o];
  return { ...t, ...a };
}
function _i() {
  return Zs;
}
function Yt(o, x = {}) {
  const t = r;
  let e = Xt(Zs)[o];
  return e ? typeof e === t(1736) ? e.replace(/\{\{(\w+)\}\}/g, (s, n) => x[n] !== void 0 ? String(x[n]) : s) : e : o;
}
const Fi = /&(?:amp|#38|lt|#60|gt|#62|apos|#39|quot|#34|nbsp|#160|copy|#169|reg|#174|hellip|#8230|#x2F|#47);/g, Ni = { "&amp;": "&", "&#38;": "&", "&lt;": "<", "&#60;": "<", "&gt;": ">", "&#62;": ">", "&apos;": "'", "&#39;": "'", "&quot;": '"', "&#34;": '"', "&nbsp;": " ", "&#160;": " ", "&copy;": "©", "&#169;": "©", "&reg;": "®", "&#174;": "®", "&hellip;": "…", "&#8230;": "…", "&#x2F;": "/", "&#47;": "/" }, Ti = (o) => Ni[o], qi = (o) => o[r(1809)](Fi, Ti);
let ta = { bindI18n: r(645), bindI18nStore: "", transEmptyNodeValue: "", transSupportBasicHtmlNodes: !0, transWrapTextNodes: "", transKeepBasicHtmlNodesFor: ["br", r(1889), "i", "p"], useSuspense: !0, unescape: qi };
const Ai = (o = {}) => {
  ta = { ...ta, ...o };
}, Oi = { type: r(1236), init(o) {
  const x = r;
  Ai(o[x(278)][x(1454)]);
} };
!Qe.isInitialized && Qe[r(2827)](Oi)[r(419)]({ resources: { "zh-CN": { translation: Xt(r(920)) }, "en-US": { translation: Xt(r(2380)) } }, lng: _i(), fallbackLng: r(2380), interpolation: { escapeValue: !1 } });
globalThis[r(152)] = globalThis[r(152)] || {};
const tx = globalThis[r(152)], _0 = [];
tx.widgetable = tx[r(2091)] || {}, tx.widgetable.add = function(o, x) {
  typeof x == "function" ? _0.push([o, { formatter: x, setter: null }]) : _0[r(1449)]([o, x]);
};
function Di(o, x, t) {
  var c;
  const a = r, e = _0[a(1359)](([u]) => u == a(2181)), s = _0[a(1359)](([u]) => ir(u, o.type)) || e;
  let n = !1;
  if (s) {
    const u = s[1][a(817)];
    u && (n = !!u(o, x, t));
  }
  !n && (o[a(1857)][x][a(194)] = t), (c = (Fe[a(2747)] || Fe.extensionManager[a(839)])[a(1738)]) == null || c[a(2470)][a(2175)]();
}
function Tx(o) {
  const x = r, t = {}, a = _0[x(1359)](([e]) => e == x(2181));
  return o[x(178)][x(1022)]((e) => {
    const s = x;
    if (!e[s(1857)] || e[s(1857)].length == 0) return;
    const n = _0[s(1359)](([i]) => ir(i, e[s(2390)])) || a;
    if (n) try {
      const i = n[1].formatter(e);
      i && (t[e.id] = i[s(1857)][s(1622)]((c) => c.value));
    } catch {
      t[e.id] = [];
    }
  }), t;
}
function er(o, x) {
  var s, n, i;
  const t = r;
  if (!o) return { widgetableID: "", widgetablePath: "", nodes: {}, nodeIndexes: [], options: {}, note: "" };
  const a = o[t(178)][t(1622)]((c) => {
    const u = t;
    if (c.mode != 0) return;
    const d = bx(c);
    if (!d || d[u(2821)](".") || !c.widgets || c.widgets.length == 0) return;
    let l = _0[u(1359)](([m]) => ir(m, c.type));
    if (l) try {
      const m = l[1][u(379)](c);
      if (m) return m.id = c.id, m[u(402)] = m.widgets[u(661)]((v, k) => v + (k[u(1471)] || 12), 0), m;
    } catch (m) {
      return { id: c.id, title: d, uiWeightSum: 12, widgets: [{ outputType: "error", value: Yt(u(1692), l[0]) + (m[u(1354)] || m || ""), name: "", options: {} }] };
    }
    if (!d.startsWith("#")) return null;
    let f = c.widgets;
    const g = _0[u(1359)](([m]) => m == u(2181));
    if (g) {
      const m = g[1][u(379)](c);
      if (m) return Object[u(1755)](m, { uiWeightSum: m[u(1857)][u(661)]((v, k) => v + (k[u(1471)] || 12), 0) });
    }
    const h = { id: c.id, title: d, widgets: f.map((m) => ({ name: m[u(2060)] || m[u(492)], outputType: m[u(2390)] || u(1736), value: m[u(194)], options: m[u(278)] })) };
    return Object.assign(h, { uiWeightSum: h[u(1857)][u(661)]((m, v) => m + (v[u(1471)] || 12), 0) });
  }).filter(Boolean)[t(1168)]((c, u) => {
    const d = t;
    let l = bx(c), f = bx(u);
    return l = l[d(2821)]("#") ? l[d(771)](1)[d(183)]() : l.trim(), f = f.startsWith("#") ? f[d(771)](1)[d(183)]() : f[d(183)](), l[d(1110)](f);
  }), e = ((n = (s = o[t(178)][t(1359)]((c) => c[t(2390)] == t(1479) && c[t(264)].match(/SD-?PPP/i))) == null ? void 0 : s.widgets[0]) == null ? void 0 : n[t(194)]) || "";
  return { widgetablePath: ((i = x[t(747)][t(2577)]) == null ? void 0 : i[t(663)]) || x[t(632)], widgetableID: x[t(747)].id, nodes: a[t(661)]((c, u) => (c[u.id] = u, c), {}), note: e, nodeIndexes: a[t(1622)]((c) => c.id), options: {} };
}
function ir(o, x) {
  const t = r, a = o[t(1809)](/[.+^${}()|[\]\\]/g, t(962)).replace(/\*/g, ".*").replace(/\?/g, ".");
  return new RegExp("^" + a + "$").test(x);
}
function bx(o, x = "") {
  var e;
  const t = r;
  let a = x || o[t(264)] || "";
  return o[t(2469)] && (a[t(2821)]("#") || a.startsWith(".")) ? o.setProperty("sdppp_widgetable_title", a) : a = ((e = o[t(629)]) == null ? void 0 : e[t(346)]) || a, a;
}
tx[r(279)] = bx;
const xr = ix[r(2417)](r(187)), ra = /* @__PURE__ */ new Set();
Ee.implementAction("setWidgetValue", async (o) => {
  const x = r;
  return requestAnimationFrame(yn), o[x(2529)][x(1022)](({ nodeID: t, widgetIndex: a, value: e }) => {
    const s = x, n = Fe[s(1235)][s(178)][s(1359)]((i) => i.id == t);
    Di(n, a, e);
  }), { success: !0 };
}), Ee.implementAction(r(2729), async (o) => {
  const x = r, { workflow_path: t } = o, a = !ra[x(2302)](t), e = o.reset || a;
  ra[x(2140)](t);
  const s = Fe[x(2321)][x(839)] || Fe.workflowManager, n = s.workflows[x(1359)]((c) => c[x(2566)] === t || c[x(632)] === t || c[x(632)] === x(1756) + t);
  if (!e) {
    const c = await ji(s, n);
    if (xr("reset=false but needsReset: " + c), c) await Gx(s, n);
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
    xr(d(2671) + u[d(632)], u[d(401)]), Fe[d(2747)] == c ? await u[d(366)]() : (await c[d(2729)](u), await Fe[d(1367)](JSON[d(330)](JSON[d(1410)](u[d(401)])), !0, !0, u, {}));
  }
}), Ee[r(2550)](r(1312), async function(o) {
  const x = r;
  let { workflow_content: t, workflow_path: a } = o;
  return t[x(2577)] = { ...t[x(2577)] || {}, sdppp_workflow_alias: a }, await Fe.loadGraphData(t), { success: !0 };
}), Ee[r(2550)](r(2247), async (o) => {
  var s;
  const x = r, t = Fe.workflowManager || Fe[x(2321)][x(839)];
  (s = t[x(1478)]) == null || s.call(t), await new Promise((n) => requestAnimationFrame(n));
  let e = t[x(2667)][x(1622)]((n) => n[x(632)].replace(x(1756), ""));
  try {
    const n = new Headers(), i = localStorage[x(2608)](x(971));
    i && n.set(x(1273), i);
    const c = await fetch(x(746), { headers: n });
    let u = [];
    c.ok && (u = (await c[x(1687)]())[x(638)][x(1622)]((l) => l.replace(x(1756), ""))), e[x(1168)]((d, l) => {
      const f = x, g = u[f(408)](d), h = u[f(408)](l);
      return g && !h ? -1 : !g && h ? 1 : d[f(1110)](l);
    });
  } catch {
  }
  return { workflows: e, error: "" };
}), Ee[r(2550)](r(882), async (o) => {
  var n;
  const x = r, { workflow_path: t, from_sid: a } = o, e = Fe[x(2747)] || Fe[x(2321)][x(839)], s = e.workflows[x(1359)]((i) => i[x(2566)] === t || i.path === t || i[x(632)] === x(1756) + t);
  if (!s) throw new Error(x(1150));
  return ((n = e[x(1738)]) == null ? void 0 : n.id) != s.id && await Fe.openWorkflow(t, a, !1), s[x(2470)][x(2175)](), await e[x(882)](s), { success: !0 };
});
async function ji(o, x) {
  var e, s, n;
  const t = r;
  if (!x || !(((e = o[t(1738)]) == null ? void 0 : e.id) === x.id)) return !1;
  if ((s = x[t(2470)]) != null && s[t(2175)]) try {
    x[t(2470)][t(2175)]();
  } catch (i) {
    console[t(816)]("Failed to check workflow changeTracker state:", i);
  }
  try {
    const i = (n = Fe[t(1235)]) == null ? void 0 : n.serialize(), c = x[t(747)];
    if (!i || !c) return !1;
    const u = JSON.stringify(i), d = JSON.stringify(c);
    return u !== d;
  } catch (i) {
    return console.warn(t(1530), i), !1;
  }
}
async function Gx(o, x) {
  var e;
  const t = r;
  xr(t(978) + x[t(632)]);
  async function a(s, n) {
    const i = t;
    Fe[i(2747)] == s ? await n.load() : (await s.openWorkflow(n), await Fe.loadGraphData(JSON[i(330)](JSON[i(1410)](n[i(747)])), !0, !0, n, {}));
  }
  if ((x[t(1524)] || (e = o[t(1524)]) != null && e.call(o, x)) && o[t(857)][t(2236)] === 1) {
    const s = o[t(827)]();
    o.openWorkflow(s);
  } else await a(o, o[t(857)][0] == x ? o[t(857)][1] : o[t(857)][0]);
  await o[t(648)](x, !1), await new Promise((s) => requestAnimationFrame(s)), await a(o, x);
}
const ox = ix[r(2417)]("workflow-run"), M0 = /* @__PURE__ */ new Map();
let qx = [];
const Jx = { hijacked: !1, originalQueuePrompt: null };
function Mi(o, x) {
  const t = r, a = M0[t(2157)](o);
  ox(t(2304), o, x, a, M0), a && a.resolveImage(x);
}
Ee[r(2550)](r(1049), async () => {
  const o = r;
  await Fe[o(834)][o(860)](o(588)), await Fe.api[o(1076)]();
  const x = Array[o(2852)](M0[o(2529)]());
  M0[o(327)]();
  for (const t of x)
    try {
      t[o(396)](new Error(o(2731)));
    } catch {
    }
  return { success: !0 };
}), Ee[r(2550)](r(1577), async function* (o) {
  const x = r;
  Li(), qx = [];
  const t = o.size;
  Ee[x(2705)][x(968)]({ lastError: "", widgetableErrors: {} });
  const a = await zi(t, o[x(2501)]);
  ox(x(829), a.hasError, a[x(637)], "prompt_ids: ", a[x(2069)]), Vi(a), yield* Bi(a[x(2069)]);
});
function Li() {
  const o = r;
  if (Jx[o(1280)]) return;
  const x = C0.queuePrompt;
  Jx[o(1878)] = x, C0.queuePrompt = async (...t) => {
    const a = o;
    try {
      const e = await x.call(C0, ...t), s = e == null ? void 0 : e[a(892)];
      return s && Hi(s), qx[a(1449)]({ error: null, result: e, prompt_id: e[a(892)] }), e;
    } catch (e) {
      throw qx[a(1449)]({ error: e, result: null, prompt_id: "" }), e;
    }
  }, Jx.hijacked = !0;
}
async function $i(o) {
  await Fe.queuePrompt(1, o);
}
async function Ui(o) {
  const x = r, t = await Fe[x(1213)](Fe.graph);
  for (let a = 0; a < o; a++)
    await C0[x(596)](1, t);
}
async function zi(o, x = r(1661)) {
  var e, s;
  const t = r, a = { promptIds: [], hasError: !1, generalError: "", nodeErrors: {} };
  try {
    x === t(834) ? await Ui(o) : await $i(o);
    for (const n of qx)
      if (n.error) a[t(1124)] = !0, a[t(637)] = n[t(2484)][t(987)] ? Zi(n[t(2484)][t(987)][t(1734)]) : {}, Object[t(1755)](a[t(637)], { "-1": ((s = (e = n[t(2484)][t(987)]) == null ? void 0 : e[t(2484)]) == null ? void 0 : s.message) || n[t(2484)].message });
      else {
        const i = n[t(2074)].prompt_id;
        a[t(2069)].push(i);
      }
  } catch (n) {
    ox(t(1338), n[t(2527)]), a.hasError = !0, a[t(637)] = { "-1": n[t(1354)] || n[t(1525)]() };
  }
  return a;
}
function Hi(o) {
  const x = r;
  let t, a;
  const e = new Promise((s, n) => {
    t = s, a = n;
  });
  M0[x(2104)](o, { promise: e, resolveImage: t, rejectImage: a });
}
function Vi({ hasError: o, generalError: x, nodeErrors: t }) {
  const a = r;
  o && (x ? Ee[a(2705)][a(968)]({ lastError: x }) : Ee[a(2705)][a(968)]({ widgetableErrors: t }));
}
async function* Bi(o) {
  const x = r, t = /* @__PURE__ */ new Map();
  for (const a of o) {
    const e = M0[x(2157)](a);
    e && t[x(2104)](a, e.promise);
  }
  if (t[x(2270)] !== 0)
    for (ox("waiting for queue prompt"); t[x(2270)] > 0; ) {
      const a = Array[x(2852)](t.entries()), e = a[x(1622)](([i, c]) => c[x(667)]((u) => ({ prompt_id: i, images: u }))), { prompt_id: s, images: n } = await Promise.race(e);
      ox(x(853), s), t[x(1344)](s), M0[x(1344)](s), yield { success: !0, prompt_ids: [s], images: n };
    }
}
function Zi(o) {
  const x = r, t = {};
  return Object[x(460)](o).forEach((a) => {
    const e = x, s = a[e(2831)](":")[0], n = Fe.graph.nodes[e(1359)]((i) => i.id == s);
    t[s] = "[" + ((n == null ? void 0 : n[e(264)]) || s) + "]" + o[a].errors[e(1622)](JSON[e(1410)]).join(`
`);
  }), t;
}
const Wi = ix[r(2417)](r(2628));
Ee.implementAction("sdpppHandshake", async (o) => {
  const x = r;
  return o != null && o[x(1374)] && Wi(x(2085), o[x(1374)]), { comfyVersion: "510", hostVersion: (o == null ? void 0 : o.hostVersion) ?? "" };
}), Ee.implementAction(r(1030), async (o) => {
  const x = r, { node_id: t, title: a } = o, e = Fe[x(1235)][x(178)][x(1359)]((s) => s.id == t);
  if (!e) throw new Error("Node not found");
  return e[x(264)] = a, e[x(2469)](x(346), a), { success: !0 };
}), Ee[r(2550)](r(1901), async () => {
  const o = r, x = await fetch(o(2299));
  return x.status == 404 ? { error: Yt(o(2718)), success: !1 } : x[o(1474)] == 200 ? { success: !0 } : { error: Yt(o(153)) + x.statusText, success: !1 };
}), Ee[r(2550)]("setComfyOrgAPIKey", async (o) => {
  const x = r, { api_key: t } = o;
  return localStorage[x(1141)](x(2750), t), location[x(340)](), { success: !0 };
}), Ee[r(2550)]("logout", async () => {
  const o = r;
  return document[o(924)](o(2646)).parentElement[o(1752)](), { success: !0 };
});
function Ki(o) {
  const x = r, t = atob(o), a = t[x(2236)], e = new Uint8Array(a);
  for (let s = 0; s < a; s++)
    e[s] = t.charCodeAt(s);
  return e;
}
Ee[r(2550)]("uploadComfyImageFromUXP", async (o, x, t) => {
  const a = r, { fileName: e, overwrite: s = !0, mimeType: n = a(2065), dataBase64: i } = o;
  if (t != null && t[a(2294)]) throw new DOMException(a(447), "AbortError");
  const c = Ki(i), u = new Blob([c], { type: n }), d = new FormData();
  d[a(2737)](a(2062), u), d[a(2737)](a(218), e), d[a(2737)](a(2684), a(s ? 426 : 2848));
  const l = await fetch("./sdppp_upload2", { method: a(1780), body: d, signal: t });
  if (!l.ok) throw new Error("Upload failed: " + l[a(1522)]);
  const f = await l.json();
  return { name: f[a(2416)] + "/" + f[a(492)] };
});
const Ws = r(198), Gi = [Ws, r(903), r(1114), r(1584)], Ox = r(316), Ks = Ve([b(), Z()[r(294)]()]), Gs = b(), Ji = S({ progressToken: B(Ks) })[r(172)](), a0 = S({ _meta: B(Ji) })[r(172)](), x0 = S({ method: b(), params: B(a0) }), cx = S({ _meta: B(S({}).passthrough()) }).passthrough(), m0 = S({ method: b(), params: B(cx) }), s0 = S({ _meta: B(S({})[r(172)]()) })[r(172)](), Dx = Ve([b(), Z()[r(294)]()]), Js = S({ jsonrpc: xe(Ox), id: Dx }).merge(x0)[r(1371)](), Qi = (o) => Js[r(1487)](o).success, Qs = S({ jsonrpc: xe(Ox) }).merge(m0)[r(1371)](), Xi = (o) => Qs[r(1487)](o)[r(614)], Xs = S({ jsonrpc: xe(Ox), id: Dx, result: s0 })[r(1371)](), aa = (o) => Xs.safeParse(o)[r(614)];
var v0;
(function(o) {
  const x = r;
  o[o[x(261)] = -32e3] = "ConnectionClosed", o[o[x(1739)] = -32001] = x(1739), o[o[x(1668)] = -32700] = x(1668), o[o.InvalidRequest = -32600] = "InvalidRequest", o[o[x(2909)] = -32601] = x(2909), o[o.InvalidParams = -32602] = x(227), o[o[x(686)] = -32603] = x(686);
})(v0 || (v0 = {}));
const Ys = S({ jsonrpc: xe(Ox), id: Dx, error: S({ code: Z()[r(294)](), message: b(), data: B(k0()) }) })[r(1371)](), Yi = (o) => Ys[r(1487)](o)[r(614)];
Ve([Js, Qs, Xs, Ys]);
const tr = s0.strict(), rr = m0[r(2417)]({ method: xe(r(921)), params: cx[r(2417)]({ requestId: Dx, reason: b().optional() }) }), ux = S({ name: b(), title: B(b()) }).passthrough(), en = ux.extend({ version: b() }), ec = S({ experimental: B(S({}).passthrough()), sampling: B(S({})[r(172)]()), elicitation: B(S({})[r(172)]()), roots: B(S({ listChanged: B(Q()) }).passthrough()) })[r(172)](), xn = x0[r(2417)]({ method: xe("initialize"), params: a0[r(2417)]({ protocolVersion: b(), capabilities: ec, clientInfo: en }) }), xc = S({ experimental: B(S({}).passthrough()), logging: B(S({})[r(172)]()), completions: B(S({}).passthrough()), prompts: B(S({ listChanged: B(Q()) })[r(172)]()), resources: B(S({ subscribe: B(Q()), listChanged: B(Q()) })[r(172)]()), tools: B(S({ listChanged: B(Q()) })[r(172)]()) }).passthrough(), tc = s0[r(2417)]({ protocolVersion: b(), capabilities: xc, serverInfo: en, instructions: B(b()) }), tn = m0[r(2417)]({ method: xe(r(592)) }), ar = x0.extend({ method: xe(r(651)) }), rc = S({ progress: Z(), total: B(Z()), message: B(b()) })[r(172)](), sr = m0[r(2417)]({ method: xe(r(2912)), params: cx.merge(rc)[r(2417)]({ progressToken: Ks }) }), jx = x0[r(2417)]({ params: a0.extend({ cursor: B(Gs) })[r(613)]() }), Mx = s0[r(2417)]({ nextCursor: B(Gs) }), rn = S({ uri: b(), mimeType: B(b()), _meta: B(S({})[r(172)]()) }).passthrough(), an = rn[r(2417)]({ text: b() }), sn = rn[r(2417)]({ blob: b()[r(1495)]() }), nn = ux.extend({ uri: b(), description: B(b()), mimeType: B(b()), _meta: B(S({})[r(172)]()) }), ac = ux[r(2417)]({ uriTemplate: b(), description: B(b()), mimeType: B(b()), _meta: B(S({})[r(172)]()) }), sc = jx[r(2417)]({ method: xe(r(2403)) }), nc = Mx[r(2417)]({ resources: Se(nn) }), oc = jx[r(2417)]({ method: xe("resources/templates/list") }), ic = Mx[r(2417)]({ resourceTemplates: Se(ac) }), cc = x0[r(2417)]({ method: xe(r(719)), params: a0.extend({ uri: b() }) }), uc = s0.extend({ contents: Se(Ve([an, sn])) }), dc = m0[r(2417)]({ method: xe(r(2828)) }), lc = x0[r(2417)]({ method: xe(r(2754)), params: a0[r(2417)]({ uri: b() }) }), fc = x0.extend({ method: xe(r(1439)), params: a0[r(2417)]({ uri: b() }) }), hc = m0[r(2417)]({ method: xe(r(1113)), params: cx[r(2417)]({ uri: b() }) }), pc = S({ name: b(), description: B(b()), required: B(Q()) })[r(172)](), mc = ux.extend({ description: B(b()), arguments: B(Se(pc)), _meta: B(S({})[r(172)]()) }), bc = jx.extend({ method: xe(r(741)) }), gc = Mx[r(2417)]({ prompts: Se(mc) }), yc = x0.extend({ method: xe(r(1475)), params: a0[r(2417)]({ name: b(), arguments: B(qe(b())) }) }), cr = S({ type: xe("text"), text: b(), _meta: B(S({}).passthrough()) })[r(172)](), ur = S({ type: xe(r(2062)), data: b()[r(1495)](), mimeType: b(), _meta: B(S({}).passthrough()) })[r(172)](), dr = S({ type: xe("audio"), data: b()[r(1495)](), mimeType: b(), _meta: B(S({})[r(172)]()) })[r(172)](), vc = S({ type: xe(r(1997)), resource: Ve([an, sn]), _meta: B(S({}).passthrough()) })[r(172)](), wc = nn[r(2417)]({ type: xe("resource_link") }), on = Ve([cr, ur, dr, wc, vc]), Sc = S({ role: Ie([r(1536), r(1879)]), content: on })[r(172)](), kc = s0.extend({ description: B(b()), messages: Se(Sc) }), Pc = m0[r(2417)]({ method: xe("notifications/prompts/list_changed") }), Ic = S({ title: B(b()), readOnlyHint: B(Q()), destructiveHint: B(Q()), idempotentHint: B(Q()), openWorldHint: B(Q()) }).passthrough(), Ec = ux[r(2417)]({ description: B(b()), inputSchema: S({ type: xe(r(1606)), properties: B(S({})[r(172)]()), required: B(Se(b())) })[r(172)](), outputSchema: B(S({ type: xe("object"), properties: B(S({})[r(172)]()), required: B(Se(b())) })[r(172)]()), annotations: B(Ic), _meta: B(S({}).passthrough()) }), Cc = jx[r(2417)]({ method: xe("tools/list") }), Rc = Mx[r(2417)]({ tools: Se(Ec) }), cn = s0.extend({ content: Se(on).default([]), structuredContent: S({}).passthrough()[r(613)](), isError: B(Q()) });
cn.or(s0[r(2417)]({ toolResult: k0() }));
const _c = x0[r(2417)]({ method: xe(r(800)), params: a0[r(2417)]({ name: b(), arguments: B(qe(k0())) }) }), Fc = m0[r(2417)]({ method: xe(r(1727)) }), un = Ie([r(222), "info", "notice", r(940), r(2484), r(559), r(1640), "emergency"]), Nc = x0.extend({ method: xe(r(2657)), params: a0[r(2417)]({ level: un }) }), Tc = m0.extend({ method: xe(r(866)), params: cx[r(2417)]({ level: un, logger: B(b()), data: k0() }) }), qc = S({ name: b()[r(613)]() })[r(172)](), Ac = S({ hints: B(Se(qc)), costPriority: B(Z()[r(2191)](0).max(1)), speedPriority: B(Z()[r(2191)](0).max(1)), intelligencePriority: B(Z()[r(2191)](0)[r(2499)](1)) })[r(172)](), Oc = S({ role: Ie([r(1536), "assistant"]), content: Ve([cr, ur, dr]) })[r(172)](), Dc = x0[r(2417)]({ method: xe(r(537)), params: a0[r(2417)]({ messages: Se(Oc), systemPrompt: B(b()), includeContext: B(Ie([r(364), r(1853), r(2503)])), temperature: B(Z()), maxTokens: Z()[r(294)](), stopSequences: B(Se(b())), metadata: B(S({})[r(172)]()), modelPreferences: B(Ac) }) }), dn = s0[r(2417)]({ model: b(), stopReason: B(Ie(["endTurn", r(292), r(235)]).or(b())), role: Ie([r(1536), r(1879)]), content: Ls(r(2390), [cr, ur, dr]) }), jc = S({ type: xe(r(2727)), title: B(b()), description: B(b()), default: B(Q()) }).passthrough(), Mc = S({ type: xe("string"), title: B(b()), description: B(b()), minLength: B(Z()), maxLength: B(Z()), format: B(Ie([r(1693), r(759), r(1846), r(2159)])) }).passthrough(), Lc = S({ type: Ie(["number", "integer"]), title: B(b()), description: B(b()), minimum: B(Z()), maximum: B(Z()) })[r(172)](), $c = S({ type: xe("string"), title: B(b()), description: B(b()), enum: Se(b()), enumNames: B(Se(b())) }).passthrough(), Uc = Ve([jc, Mc, Lc, $c]), zc = x0.extend({ method: xe(r(701)), params: a0[r(2417)]({ message: b(), requestedSchema: S({ type: xe(r(1606)), properties: qe(b(), Uc), required: B(Se(b())) })[r(172)]() }) }), ln = s0[r(2417)]({ action: Ie(["accept", "decline", "cancel"]), content: B(qe(b(), k0())) }), Hc = S({ type: xe("ref/resource"), uri: b() })[r(172)](), Vc = S({ type: xe(r(1297)), name: b() })[r(172)](), Bc = x0[r(2417)]({ method: xe("completion/complete"), params: a0.extend({ ref: Ve([Vc, Hc]), argument: S({ name: b(), value: b() })[r(172)](), context: B(S({ arguments: B(qe(b(), b())) })) }) }), Zc = s0[r(2417)]({ completion: S({ values: Se(b()).max(100), total: B(Z().int()), hasMore: B(Q()) })[r(172)]() }), Wc = S({ uri: b()[r(2821)](r(319)), name: B(b()), _meta: B(S({})[r(172)]()) })[r(172)](), Kc = x0[r(2417)]({ method: xe(r(1678)) }), fn = s0[r(2417)]({ roots: Se(Wc) }), Gc = m0[r(2417)]({ method: xe(r(1652)) });
Ve([ar, xn, Bc, Nc, yc, bc, sc, oc, cc, lc, fc, _c, Cc]), Ve([rr, sr, tn, Gc]), Ve([tr, dn, ln, fn]), Ve([ar, Dc, zc, Kc]), Ve([rr, sr, Tc, hc, dc, Fc, Pc]), Ve([tr, tc, Zc, kc, gc, nc, ic, uc, cn, Rc]);
class A0 extends Error {
  constructor(x, t, a) {
    const e = r;
    super("MCP error " + x + ": " + t), this[e(2152)] = x, this[e(2516)] = a, this[e(492)] = e(510);
  }
}
const Jc = 6e4;
class Qc {
  constructor(x) {
    const t = r;
    this[t(1292)] = x, this[t(2457)] = 0, this._requestHandlers = /* @__PURE__ */ new Map(), this._requestHandlerAbortControllers = /* @__PURE__ */ new Map(), this._notificationHandlers = /* @__PURE__ */ new Map(), this._responseHandlers = /* @__PURE__ */ new Map(), this[t(1970)] = /* @__PURE__ */ new Map(), this._timeoutInfo = /* @__PURE__ */ new Map(), this[t(2075)] = /* @__PURE__ */ new Set(), this[t(1888)](rr, (a) => {
      const e = t, s = this._requestHandlerAbortControllers[e(2157)](a[e(974)][e(383)]);
      s == null || s[e(1145)](a[e(974)].reason);
    }), this[t(1888)](sr, (a) => {
      this[t(954)](a);
    }), this[t(2476)](ar, (a) => ({}));
  }
  _setupTimeout(x, t, a, e, s = !1) {
    const n = r;
    this[n(1937)][n(2104)](x, { timeoutId: setTimeout(e, t), startTime: Date[n(1742)](), timeout: t, maxTotalTimeout: a, resetTimeoutOnProgress: s, onTimeout: e });
  }
  [r(1307)](x) {
    const t = r, a = this[t(1937)][t(2157)](x);
    if (!a) return !1;
    const e = Date[t(1742)]() - a[t(923)];
    if (a[t(912)] && e >= a.maxTotalTimeout)
      throw this[t(1937)][t(1344)](x), new A0(v0[t(1739)], "Maximum total timeout exceeded", { maxTotalTimeout: a.maxTotalTimeout, totalElapsed: e });
    return clearTimeout(a[t(343)]), a[t(343)] = setTimeout(a[t(653)], a.timeout), !0;
  }
  [r(1435)](x) {
    const t = r, a = this[t(1937)][t(2157)](x);
    a && (clearTimeout(a[t(343)]), this[t(1937)][t(1344)](x));
  }
  async [r(649)](x) {
    const t = r;
    var a, e, s;
    this[t(1267)] = x;
    const n = (a = this[t(2118)]) === null || a === void 0 ? void 0 : a.onclose;
    this[t(1267)].onclose = () => {
      const u = t;
      n == null || n(), this[u(2919)]();
    };
    const i = (e = this[t(2118)]) === null || e === void 0 ? void 0 : e.onerror;
    this[t(1267)].onerror = (u) => {
      const d = t;
      i == null || i(u), this[d(1766)](u);
    };
    const c = (s = this[t(1267)]) === null || s === void 0 ? void 0 : s.onmessage;
    this[t(1267)].onmessage = (u, d) => {
      const l = t;
      c == null || c(u, d), aa(u) || Yi(u) ? this._onresponse(u) : Qi(u) ? this[l(2471)](u, d) : Xi(u) ? this[l(2474)](u) : this[l(1766)](new Error(l(2480) + JSON[l(1410)](u)));
    }, await this[t(1267)].start();
  }
  _onclose() {
    const x = r;
    var t;
    const a = this[x(138)];
    this[x(138)] = /* @__PURE__ */ new Map(), this._progressHandlers[x(327)](), this[x(2075)][x(327)](), this[x(1267)] = void 0, (t = this[x(390)]) === null || t === void 0 || t.call(this);
    const e = new A0(v0[x(261)], x(2102));
    for (const s of a[x(2529)]())
      s(e);
  }
  [r(1766)](x) {
    const t = r;
    var a;
    (a = this[t(2491)]) === null || a === void 0 || a[t(1666)](this, x);
  }
  _onnotification(x) {
    const t = r;
    var a;
    const e = (a = this[t(1159)][t(2157)](x[t(1737)])) !== null && a !== void 0 ? a : this[t(2890)];
    e !== void 0 && Promise.resolve()[t(667)](() => e(x))[t(1095)]((s) => this[t(1766)](new Error(t(2413) + s)));
  }
  [r(2471)](x, t) {
    const a = r;
    var e, s, n, i;
    const c = (e = this[a(1664)][a(2157)](x.method)) !== null && e !== void 0 ? e : this.fallbackRequestHandler;
    if (c === void 0) {
      (s = this[a(1267)]) === null || s === void 0 || s.send({ jsonrpc: a(316), id: x.id, error: { code: v0[a(2909)], message: "Method not found" } }).catch((l) => this[a(1766)](new Error(a(1725) + l)));
      return;
    }
    const u = new AbortController();
    this[a(2861)][a(2104)](x.id, u);
    const d = { signal: u.signal, sessionId: (n = this._transport) === null || n === void 0 ? void 0 : n[a(965)], _meta: (i = x[a(974)]) === null || i === void 0 ? void 0 : i._meta, sendNotification: (l) => this.notification(l, { relatedRequestId: x.id }), sendRequest: (l, f, g) => this.request(l, f, { ...g, relatedRequestId: x.id }), authInfo: t == null ? void 0 : t.authInfo, requestId: x.id, requestInfo: t == null ? void 0 : t.requestInfo };
    Promise[a(753)]()[a(667)](() => c(x, d))[a(667)]((l) => {
      const f = a;
      var g;
      if (!u.signal.aborted)
        return (g = this[f(1267)]) === null || g === void 0 ? void 0 : g.send({ result: l, jsonrpc: "2.0", id: x.id });
    }, (l) => {
      const f = a;
      var g, h;
      if (!u[f(1673)][f(2294)])
        return (g = this[f(1267)]) === null || g === void 0 ? void 0 : g[f(1165)]({ jsonrpc: f(316), id: x.id, error: { code: Number.isSafeInteger(l[f(2152)]) ? l[f(2152)] : v0[f(686)], message: (h = l[f(1354)]) !== null && h !== void 0 ? h : f(1109) } });
    })[a(1095)]((l) => this._onerror(new Error("Failed to send response: " + l)))[a(630)](() => {
      this._requestHandlerAbortControllers.delete(x.id);
    });
  }
  [r(954)](x) {
    const t = r, { progressToken: a, ...e } = x[t(974)], s = Number(a), n = this._progressHandlers[t(2157)](s);
    if (!n) {
      this._onerror(new Error("Received a progress notification for an unknown token: " + JSON[t(1410)](x)));
      return;
    }
    const i = this[t(138)][t(2157)](s), c = this[t(1937)][t(2157)](s);
    if (c && i && c.resetTimeoutOnProgress) try {
      this._resetTimeout(s);
    } catch (u) {
      i(u);
      return;
    }
    n(e);
  }
  [r(881)](x) {
    const t = r, a = Number(x.id), e = this[t(138)][t(2157)](a);
    if (e === void 0) {
      this[t(1766)](new Error(t(2084) + JSON.stringify(x)));
      return;
    }
    if (this[t(138)][t(1344)](a), this[t(1970)][t(1344)](a), this._cleanupTimeout(a), aa(x)) e(x);
    else {
      const s = new A0(x[t(2484)][t(2152)], x[t(2484)][t(1354)], x[t(2484)][t(2516)]);
      e(s);
    }
  }
  get [r(2118)]() {
    return this[r(1267)];
  }
  async [r(1749)]() {
    const x = r;
    var t;
    await ((t = this[x(1267)]) === null || t === void 0 ? void 0 : t.close());
  }
  [r(1190)](x, t, a) {
    const { relatedRequestId: e, resumptionToken: s, onresumptiontoken: n } = a ?? {};
    return new Promise((i, c) => {
      const u = K;
      var d, l, f, g, h, m;
      if (!this[u(1267)]) {
        c(new Error(u(861)));
        return;
      }
      ((d = this[u(1292)]) === null || d === void 0 ? void 0 : d.enforceStrictCapabilities) === !0 && this[u(1122)](x[u(1737)]), (l = a == null ? void 0 : a[u(1673)]) === null || l === void 0 || l[u(1171)]();
      const v = this._requestMessageId++, k = { ...x, jsonrpc: u(316), id: v };
      a != null && a.onprogress && (this[u(1970)][u(2104)](v, a[u(1218)]), k[u(974)] = { ...x[u(974)], _meta: { ...((f = x[u(974)]) === null || f === void 0 ? void 0 : f[u(1097)]) || {}, progressToken: v } });
      const P = (R) => {
        const E = u;
        var C;
        this[E(138)].delete(v), this[E(1970)].delete(v), this._cleanupTimeout(v), (C = this[E(1267)]) === null || C === void 0 || C[E(1165)]({ jsonrpc: E(316), method: E(921), params: { requestId: v, reason: String(R) } }, { relatedRequestId: e, resumptionToken: s, onresumptiontoken: n })[E(1095)]((A) => this[E(1766)](new Error("Failed to send cancellation: " + A))), c(R);
      };
      this[u(138)][u(2104)](v, (R) => {
        const E = u;
        var C;
        if (!(!((C = a == null ? void 0 : a[E(1673)]) === null || C === void 0) && C.aborted)) {
          if (R instanceof Error) return c(R);
          try {
            const A = t[E(330)](R[E(2074)]);
            i(A);
          } catch (A) {
            c(A);
          }
        }
      }), (g = a == null ? void 0 : a[u(1673)]) === null || g === void 0 || g[u(1313)](u(1145), () => {
        const R = u;
        var E;
        P((E = a == null ? void 0 : a[R(1673)]) === null || E === void 0 ? void 0 : E[R(2121)]);
      });
      const N = (h = a == null ? void 0 : a[u(1912)]) !== null && h !== void 0 ? h : Jc, q = () => P(new A0(v0[u(1739)], u(1154), { timeout: N }));
      this[u(773)](v, N, a == null ? void 0 : a[u(912)], q, (m = a == null ? void 0 : a[u(1851)]) !== null && m !== void 0 ? m : !1), this[u(1267)][u(1165)](k, { relatedRequestId: e, resumptionToken: s, onresumptiontoken: n })[u(1095)]((R) => {
        this._cleanupTimeout(v), c(R);
      });
    });
  }
  async notification(x, t) {
    const a = r;
    var e, s;
    if (!this[a(1267)]) throw new Error(a(861));
    if (this[a(631)](x[a(1737)]), ((s = (e = this[a(1292)]) === null || e === void 0 ? void 0 : e[a(2752)]) !== null && s !== void 0 ? s : []).includes(x[a(1737)]) && !x[a(974)] && !(t != null && t[a(1698)])) {
      if (this._pendingDebouncedNotifications[a(2302)](x.method)) return;
      this[a(2075)][a(2140)](x[a(1737)]), Promise.resolve().then(() => {
        const u = a;
        var d;
        if (this._pendingDebouncedNotifications[u(1344)](x.method), !this[u(1267)]) return;
        const l = { ...x, jsonrpc: u(316) };
        (d = this[u(1267)]) === null || d === void 0 || d.send(l, t)[u(1095)]((f) => this[u(1766)](f));
      });
      return;
    }
    const c = { ...x, jsonrpc: a(316) };
    await this._transport[a(1165)](c, t);
  }
  [r(2476)](x, t) {
    const a = r, e = x[a(1913)].method.value;
    this[a(976)](e), this._requestHandlers[a(2104)](e, (s, n) => {
      const i = a;
      return Promise[i(753)](t(x[i(330)](s), n));
    });
  }
  removeRequestHandler(x) {
    const t = r;
    this[t(1664)][t(1344)](x);
  }
  [r(1791)](x) {
    const t = r;
    if (this._requestHandlers[t(2302)](x)) throw new Error(t(1708) + x + t(2297));
  }
  setNotificationHandler(x, t) {
    const a = r;
    this[a(1159)].set(x.shape[a(1737)][a(194)], (e) => Promise[a(753)](t(x[a(330)](e))));
  }
  removeNotificationHandler(x) {
    const t = r;
    this[t(1159)][t(1344)](x);
  }
}
function Xc(o, x) {
  const t = r;
  return Object[t(2813)](x)[t(661)]((a, [e, s]) => (s && typeof s == "object" ? a[e] = a[e] ? { ...a[e], ...s } : s : a[e] = s, a), { ...o });
}
var Y0 = { exports: {} }, Yc = Y0[r(763)], sa;
function e2() {
  const o = r;
  return sa || (sa = 1, (function(x, t) {
    (function(a, e) {
      e(t);
    })(Yc, function(a) {
      const e = K;
      function s() {
        const I = K;
        for (var p = arguments[I(2236)], y = Array(p), w = 0; w < p; w++)
          y[w] = arguments[w];
        if (y[I(2236)] > 1) {
          y[0] = y[0][I(771)](0, -1);
          for (var U = y[I(2236)] - 1, L = 1; L < U; ++L)
            y[L] = y[L][I(771)](1, -1);
          return y[U] = y[U][I(771)](1), y[I(2130)]("");
        } else return y[0];
      }
      function n(I) {
        return K(225) + I + ")";
      }
      function i(I) {
        const p = K;
        return I === void 0 ? p(233) : I === null ? p(2450) : Object[p(2598)][p(1525)].call(I)[p(2831)](" ")[p(1702)]()[p(2831)]("]").shift()[p(2182)]();
      }
      function c(I) {
        return I.toUpperCase();
      }
      function u(I) {
        const p = K;
        return I != null ? I instanceof Array ? I : typeof I[p(2236)] !== p(1142) || I[p(2831)] || I[p(295)] || I.call ? [I] : Array.prototype[p(771)].call(I) : [];
      }
      function d(I, p) {
        var y = I;
        if (p) for (var w in p)
          y[w] = p[w];
        return y;
      }
      function l(I) {
        const p = K;
        var y = p(2275), w = p(2607), U = s(w, p(2288)), L = n(n(p(712) + U + "%" + U + U + "%" + U + U) + "|" + n(p(1129) + U + "%" + U + U) + "|" + n("%" + U + U)), ne = p(1699), de = p(1330), Ce = s(ne, de), je = I ? p(554) : "[]", Be = I ? p(1101) : "[]", Re = s(y, w, p(1720), je);
        n(y + s(y, w, p(398)) + "*"), n(n(L + "|" + s(Re, de, p(1409))) + "*");
        var De = n(n("25[0-5]") + "|" + n("2[0-4]" + w) + "|" + n("1" + w + w) + "|" + n("0?[1-9]" + w) + p(1310) + w), Ze = n(De + "\\." + De + "\\." + De + "\\." + De), ge = n(U + p(1434)), $e = n(n(ge + "\\:" + ge) + "|" + Ze), We = n(n(ge + "\\:") + p(421) + $e), Ue = n(p(375) + n(ge + "\\:") + p(2580) + $e), I0 = n(n(ge) + p(2213) + n(ge + "\\:") + "{4}" + $e), i0 = n(n(n(ge + "\\:") + "{0,1}" + ge) + p(2213) + n(ge + "\\:") + p(1882) + $e), c0 = n(n(n(ge + "\\:") + "{0,2}" + ge) + p(2213) + n(ge + "\\:") + p(1494) + $e), $0 = n(n(n(ge + "\\:") + "{0,3}" + ge) + p(2213) + ge + "\\:" + $e), T0 = n(n(n(ge + "\\:") + p(809) + ge) + p(2213) + $e), t0 = n(n(n(ge + "\\:") + p(610) + ge) + p(2213) + ge), u0 = n(n(n(ge + "\\:") + p(430) + ge) + p(2213)), d0 = n([We, Ue, I0, i0, c0, $0, T0, t0, u0][p(2130)]("|")), g0 = n(n(Re + "|" + L) + "+");
        n(p(2660) + U + "+\\." + s(Re, de, p(1409)) + "+"), n(n(L + "|" + s(Re, de)) + "*");
        var l0 = n(L + "|" + s(Re, de, p(1921)));
        return n(n(L + "|" + s(Re, de, p(899))) + "+"), n(n(l0 + "|" + s(p(2688), Be)) + "*"), { NOT_SCHEME: new RegExp(s(p(2127), y, w, p(398)), "g"), NOT_USERINFO: new RegExp(s(p(349), Re, de), "g"), NOT_HOST: new RegExp(s(p(690), Re, de), "g"), NOT_PATH: new RegExp(s(p(1548), Re, de), "g"), NOT_PATH_NOSCHEME: new RegExp(s(p(1502), Re, de), "g"), NOT_QUERY: new RegExp(s("[^\\%]", Re, de, "[\\:\\@\\/\\?]", Be), "g"), NOT_FRAGMENT: new RegExp(s(p(1215), Re, de, p(1986)), "g"), ESCAPE: new RegExp(s(p(2127), Re, de), "g"), UNRESERVED: new RegExp(Re, "g"), OTHER_CHARS: new RegExp(s(p(1215), Re, Ce), "g"), PCT_ENCODED: new RegExp(L, "g"), IPV4ADDRESS: new RegExp("^(" + Ze + ")$"), IPV6ADDRESS: new RegExp(p(1205) + d0 + ")" + n(n(p(710) + U + p(2751)) + "(" + g0 + ")") + p(2797)) };
      }
      var f = l(!1), g = l(!0), h = /* @__PURE__ */ (function() {
        function I(p, y) {
          const w = K;
          var U = [], L = !0, ne = !1, de = void 0;
          try {
            for (var Ce = p[Symbol[w(2769)]](), je; !(L = (je = Ce[w(2151)]())[w(2237)]) && (U[w(1449)](je[w(194)]), !(y && U[w(2236)] === y)); L = !0)
              ;
          } catch (Be) {
            ne = !0, de = Be;
          } finally {
            try {
              !L && Ce[w(1904)] && Ce.return();
            } finally {
              if (ne) throw de;
            }
          }
          return U;
        }
        return function(p, y) {
          const w = K;
          if (Array[w(2224)](p)) return p;
          if (Symbol[w(2769)] in Object(p)) return I(p, y);
          throw new TypeError("Invalid attempt to destructure non-iterable instance");
        };
      })(), m = function(I) {
        const p = K;
        if (Array.isArray(I)) {
          for (var y = 0, w = Array(I[p(2236)]); y < I[p(2236)]; y++) w[y] = I[y];
          return w;
        } else return Array.from(I);
      }, v = 2147483647, k = 36, P = 1, N = 26, q = 38, R = 700, E = 72, C = 128, A = "-", D = /^xn--/, M = /[^\0-\x7E]/, _ = /[\x2E\u3002\uFF0E\uFF61]/g, F = { overflow: e(980), "not-basic": "Illegal input >= 0x80 (not a basic code point)", "invalid-input": e(1963) }, z = k - P, $ = Math.floor, H = String[e(1392)];
      function G(I) {
        throw new RangeError(F[I]);
      }
      function ce(I, p) {
        const y = e;
        for (var w = [], U = I[y(2236)]; U--; )
          w[U] = p(I[U]);
        return w;
      }
      function ue(I, p) {
        const y = e;
        var w = I.split("@"), U = "";
        w.length > 1 && (U = w[0] + "@", I = w[1]), I = I[y(1809)](_, ".");
        var L = I[y(2831)]("."), ne = ce(L, p)[y(2130)](".");
        return U + ne;
      }
      function pe(I) {
        const p = e;
        for (var y = [], w = 0, U = I[p(2236)]; w < U; ) {
          var L = I[p(2638)](w++);
          if (L >= 55296 && L <= 56319 && w < U) {
            var ne = I[p(2638)](w++);
            (ne & 64512) == 56320 ? y[p(1449)](((L & 1023) << 10) + (ne & 1023) + 65536) : (y.push(L), w--);
          } else y[p(1449)](L);
        }
        return y;
      }
      var ie = function(p) {
        const y = e;
        return String.fromCodePoint[y(1880)](String, m(p));
      }, le = function(p) {
        return p - 48 < 10 ? p - 22 : p - 65 < 26 ? p - 65 : p - 97 < 26 ? p - 97 : k;
      }, Pe = function(p, y) {
        return p + 22 + 75 * (p < 26) - ((y != 0) << 5);
      }, ye = function(p, y, w) {
        var U = 0;
        for (p = w ? $(p / R) : p >> 1, p += $(p / y); p > z * N >> 1; U += k)
          p = $(p / z);
        return $(U + (z + 1) * p / (p + q));
      }, Me = function(p) {
        const y = e;
        var w = [], U = p[y(2236)], L = 0, ne = C, de = E, Ce = p[y(788)](A);
        Ce < 0 && (Ce = 0);
        for (var je = 0; je < Ce; ++je)
          p.charCodeAt(je) >= 128 && G("not-basic"), w[y(1449)](p[y(2638)](je));
        for (var Be = Ce > 0 ? Ce + 1 : 0; Be < U; ) {
          for (var Re = L, De = 1, Ze = k; ; Ze += k) {
            Be >= U && G(y(2558));
            var ge = le(p.charCodeAt(Be++));
            (ge >= k || ge > $((v - L) / De)) && G(y(2478)), L += ge * De;
            var $e = Ze <= de ? P : Ze >= de + N ? N : Ze - de;
            if (ge < $e) break;
            var We = k - $e;
            De > $(v / We) && G(y(2478)), De *= We;
          }
          var Ue = w[y(2236)] + 1;
          de = ye(L - Re, Ue, Re == 0), $(L / Ue) > v - ne && G(y(2478)), ne += $(L / Ue), L %= Ue, w[y(1585)](L++, 0, ne);
        }
        return String[y(2094)][y(1880)](String, w);
      }, Te = function(p) {
        const y = e;
        var w = [];
        p = pe(p);
        var U = p[y(2236)], L = C, ne = 0, de = E, Ce = !0, je = !1, Be = void 0;
        try {
          for (var Re = p[Symbol.iterator](), De; !(Ce = (De = Re[y(2151)]())[y(2237)]); Ce = !0) {
            var Ze = De[y(194)];
            Ze < 128 && w.push(H(Ze));
          }
        } catch (G0) {
          je = !0, Be = G0;
        } finally {
          try {
            !Ce && Re[y(1904)] && Re[y(1904)]();
          } finally {
            if (je) throw Be;
          }
        }
        var ge = w[y(2236)], $e = ge;
        for (ge && w[y(1449)](A); $e < U; ) {
          var We = v, Ue = !0, I0 = !1, i0 = void 0;
          try {
            for (var c0 = p[Symbol[y(2769)]](), $0; !(Ue = ($0 = c0[y(2151)]())[y(2237)]); Ue = !0) {
              var T0 = $0[y(194)];
              T0 >= L && T0 < We && (We = T0);
            }
          } catch (G0) {
            I0 = !0, i0 = G0;
          } finally {
            try {
              !Ue && c0[y(1904)] && c0[y(1904)]();
            } finally {
              if (I0) throw i0;
            }
          }
          var t0 = $e + 1;
          We - L > $((v - ne) / t0) && G("overflow"), ne += (We - L) * t0, L = We;
          var u0 = !0, d0 = !1, g0 = void 0;
          try {
            for (var l0 = p[Symbol[y(2769)]](), Pr; !(u0 = (Pr = l0[y(2151)]())[y(2237)]); u0 = !0) {
              var Ir = Pr[y(194)];
              if (Ir < L && ++ne > v && G(y(2478)), Ir == L) {
                for (var dx = ne, lx = k; ; lx += k) {
                  var fx = lx <= de ? P : lx >= de + N ? N : lx - de;
                  if (dx < fx) break;
                  var Er = dx - fx, Cr = k - fx;
                  w[y(1449)](H(Pe(fx + Er % Cr, 0))), dx = $(Er / Cr);
                }
                w[y(1449)](H(Pe(dx, 0))), de = ye(ne, t0, $e == ge), ne = 0, ++$e;
              }
            }
          } catch (G0) {
            d0 = !0, g0 = G0;
          } finally {
            try {
              !u0 && l0.return && l0.return();
            } finally {
              if (d0) throw g0;
            }
          }
          ++ne, ++L;
        }
        return w[y(2130)]("");
      }, Xe = function(p) {
        return ue(p, function(y) {
          const w = K;
          return D.test(y) ? Me(y[w(771)](4)[w(2182)]()) : y;
        });
      }, O = function(p) {
        return ue(p, function(y) {
          const w = K;
          return M[w(1069)](y) ? w(1082) + Te(y) : y;
        });
      }, T = { version: e(1613), ucs2: { decode: pe, encode: ie }, decode: Me, encode: Te, toASCII: O, toUnicode: Xe }, j = {};
      function J(I) {
        const p = e;
        var y = I[p(2638)](0), w = void 0;
        return y < 16 ? w = "%0" + y[p(1525)](16)[p(1157)]() : y < 128 ? w = "%" + y[p(1525)](16)[p(1157)]() : y < 2048 ? w = "%" + (y >> 6 | 192)[p(1525)](16).toUpperCase() + "%" + (y & 63 | 128)[p(1525)](16)[p(1157)]() : w = "%" + (y >> 12 | 224).toString(16).toUpperCase() + "%" + (y >> 6 & 63 | 128).toString(16)[p(1157)]() + "%" + (y & 63 | 128).toString(16)[p(1157)](), w;
      }
      function Y(I) {
        const p = e;
        for (var y = "", w = 0, U = I[p(2236)]; w < U; ) {
          var L = parseInt(I[p(1302)](w + 1, 2), 16);
          if (L < 128) y += String[p(1392)](L), w += 3;
          else if (L >= 194 && L < 224) {
            if (U - w >= 6) {
              var ne = parseInt(I[p(1302)](w + 4, 2), 16);
              y += String.fromCharCode((L & 31) << 6 | ne & 63);
            } else y += I[p(1302)](w, 6);
            w += 6;
          } else if (L >= 224) {
            if (U - w >= 9) {
              var de = parseInt(I[p(1302)](w + 4, 2), 16), Ce = parseInt(I.substr(w + 7, 2), 16);
              y += String[p(1392)]((L & 15) << 12 | (de & 63) << 6 | Ce & 63);
            } else y += I[p(1302)](w, 9);
            w += 9;
          } else y += I[p(1302)](w, 3), w += 3;
        }
        return y;
      }
      function V(I, p) {
        const y = e;
        function w(U) {
          const L = K;
          var ne = Y(U);
          return ne[L(1778)](p[L(1635)]) ? ne : U;
        }
        return I[y(2355)] && (I[y(2355)] = String(I[y(2355)])[y(1809)](p[y(407)], w)[y(2182)]()[y(1809)](p[y(487)], "")), I[y(1926)] !== void 0 && (I[y(1926)] = String(I.userinfo)[y(1809)](p[y(407)], w)[y(1809)](p.NOT_USERINFO, J)[y(1809)](p[y(407)], c)), I.host !== void 0 && (I.host = String(I.host).replace(p[y(407)], w)[y(2182)]()[y(1809)](p[y(1177)], J).replace(p[y(407)], c)), I[y(632)] !== void 0 && (I[y(632)] = String(I[y(632)]).replace(p[y(407)], w)[y(1809)](I[y(2355)] ? p[y(2748)] : p[y(539)], J)[y(1809)](p[y(407)], c)), I[y(678)] !== void 0 && (I[y(678)] = String(I[y(678)])[y(1809)](p[y(407)], w)[y(1809)](p[y(955)], J)[y(1809)](p.PCT_ENCODED, c)), I[y(1452)] !== void 0 && (I[y(1452)] = String(I[y(1452)])[y(1809)](p[y(407)], w)[y(1809)](p[y(1445)], J)[y(1809)](p[y(407)], c)), I;
      }
      function X(I) {
        return I[e(1809)](/^0*(.*)/, "$1") || "0";
      }
      function oe(I, p) {
        const y = e;
        var w = I.match(p.IPV4ADDRESS) || [], U = h(w, 2), L = U[1];
        return L ? L[y(2831)](".")[y(1622)](X)[y(2130)](".") : I;
      }
      function se(I, p) {
        const y = e;
        var w = I[y(1778)](p.IPV6ADDRESS) || [], U = h(w, 3), L = U[1], ne = U[2];
        if (L) {
          for (var de = L[y(2182)]()[y(2831)]("::")[y(2184)](), Ce = h(de, 2), je = Ce[0], Be = Ce[1], Re = Be ? Be[y(2831)](":")[y(1622)](X) : [], De = je.split(":")[y(1622)](X), Ze = p[y(347)][y(1069)](De[De[y(2236)] - 1]), ge = Ze ? 7 : 8, $e = De[y(2236)] - ge, We = Array(ge), Ue = 0; Ue < ge; ++Ue)
            We[Ue] = Re[Ue] || De[$e + Ue] || "";
          Ze && (We[ge - 1] = oe(We[ge - 1], p));
          var I0 = We[y(661)](function(t0, u0, d0) {
            const g0 = y;
            if (!u0 || u0 === "0") {
              var l0 = t0[t0.length - 1];
              l0 && l0[g0(2567)] + l0[g0(2236)] === d0 ? l0[g0(2236)]++ : t0[g0(1449)]({ index: d0, length: 1 });
            }
            return t0;
          }, []), i0 = I0[y(1168)](function(t0, u0) {
            const d0 = y;
            return u0[d0(2236)] - t0[d0(2236)];
          })[0], c0 = void 0;
          if (i0 && i0[y(2236)] > 1) {
            var $0 = We.slice(0, i0[y(2567)]), T0 = We[y(771)](i0[y(2567)] + i0[y(2236)]);
            c0 = $0[y(2130)](":") + "::" + T0[y(2130)](":");
          } else c0 = We[y(2130)](":");
          return ne && (c0 += "%" + ne), c0;
        } else return I;
      }
      var te = /^(?:([^:\/?#]+):)?(?:\/\/((?:([^\/?#@]*)@)?(\[[^\/?#\]]+\]|[^\/?#:]*)(?:\:(\d*))?))?([^?#]*)(?:\?([^#]*))?(?:#((?:.|\n|\r)*))?/i, Le = ""[e(1778)](/(){0}/)[1] === void 0;
      function Ae(I) {
        const p = e;
        var y = arguments[p(2236)] > 1 && arguments[1] !== void 0 ? arguments[1] : {}, w = {}, U = y[p(1108)] !== !1 ? g : f;
        y[p(518)] === p(1448) && (I = (y[p(2355)] ? y[p(2355)] + ":" : "") + "//" + I);
        var L = I[p(1778)](te);
        if (L) {
          Le ? (w[p(2355)] = L[1], w[p(1926)] = L[3], w[p(1493)] = L[4], w[p(2240)] = parseInt(L[5], 10), w[p(632)] = L[6] || "", w.query = L[7], w.fragment = L[8], isNaN(w.port) && (w[p(2240)] = L[5])) : (w[p(2355)] = L[1] || void 0, w[p(1926)] = I[p(1686)]("@") !== -1 ? L[3] : void 0, w.host = I[p(1686)]("//") !== -1 ? L[4] : void 0, w.port = parseInt(L[5], 10), w[p(632)] = L[6] || "", w[p(678)] = I[p(1686)]("?") !== -1 ? L[7] : void 0, w.fragment = I.indexOf("#") !== -1 ? L[8] : void 0, isNaN(w[p(2240)]) && (w[p(2240)] = I[p(1778)](/\/\/(?:.|\n)*\:(?:\/|\?|\#|$)/) ? L[4] : void 0)), w[p(1493)] && (w.host = se(oe(w[p(1493)], U), U)), w[p(2355)] === void 0 && w.userinfo === void 0 && w[p(1493)] === void 0 && w.port === void 0 && !w.path && w.query === void 0 ? w[p(518)] = p(1217) : w[p(2355)] === void 0 ? w[p(518)] = p(604) : w[p(1452)] === void 0 ? w[p(518)] = p(795) : w[p(518)] = p(759), y[p(518)] && y[p(518)] !== p(1448) && y.reference !== w[p(518)] && (w[p(2484)] = w[p(2484)] || p(901) + y.reference + p(1071));
          var ne = j[(y[p(2355)] || w[p(2355)] || "")[p(2182)]()];
          if (!y.unicodeSupport && (!ne || !ne[p(590)])) {
            if (w[p(1493)] && (y[p(1473)] || ne && ne[p(1473)])) try {
              w[p(1493)] = T[p(477)](w[p(1493)][p(1809)](U[p(407)], Y)[p(2182)]());
            } catch (de) {
              w[p(2484)] = w[p(2484)] || "Host's domain name can not be converted to ASCII via punycode: " + de;
            }
            V(w, f);
          } else V(w, U);
          ne && ne.parse && ne[p(330)](w, y);
        } else w[p(2484)] = w[p(2484)] || p(1872);
        return w;
      }
      function ze(I, p) {
        const y = e;
        var w = p[y(1108)] !== !1 ? g : f, U = [];
        return I.userinfo !== void 0 && (U[y(1449)](I[y(1926)]), U[y(1449)]("@")), I[y(1493)] !== void 0 && U[y(1449)](se(oe(String(I[y(1493)]), w), w).replace(w[y(2512)], function(L, ne, de) {
          const Ce = y;
          return "[" + ne + (de ? Ce(394) + de : "") + "]";
        })), (typeof I[y(2240)] === y(1142) || typeof I[y(2240)] == "string") && (U[y(1449)](":"), U[y(1449)](String(I[y(2240)]))), U[y(2236)] ? U[y(2130)]("") : void 0;
      }
      var ke = /^\.\.?\//, Ge = /^\/\.(\/|$)/, n0 = /^\/\.\.(\/|$)/, Je = /^\/?(?:.|\n)*?(?=\/|$)/;
      function Oe(I) {
        const p = e;
        for (var y = []; I[p(2236)]; )
          if (I[p(1778)](ke)) I = I[p(1809)](ke, "");
          else if (I.match(Ge)) I = I[p(1809)](Ge, "/");
          else if (I[p(1778)](n0)) I = I[p(1809)](n0, "/"), y.pop();
          else if (I === "." || I === "..") I = "";
          else {
            var w = I[p(1778)](Je);
            if (w) {
              var U = w[0];
              I = I[p(771)](U[p(2236)]), y[p(1449)](U);
            } else throw new Error("Unexpected dot segment condition");
          }
        return y[p(2130)]("");
      }
      function He(I) {
        const p = e;
        var y = arguments[p(2236)] > 1 && arguments[1] !== void 0 ? arguments[1] : {}, w = y[p(1108)] ? g : f, U = [], L = j[(y[p(2355)] || I[p(2355)] || "")[p(2182)]()];
        if (L && L.serialize && L[p(2227)](I, y), I[p(1493)] && !w[p(2512)][p(1069)](I.host)) {
          if (y.domainHost || L && L.domainHost) try {
            I[p(1493)] = y[p(1108)] ? T[p(2720)](I.host) : T.toASCII(I.host.replace(w[p(407)], Y)[p(2182)]());
          } catch (Ce) {
            I[p(2484)] = I[p(2484)] || "Host's domain name can not be converted to " + (y[p(1108)] ? p(2207) : p(1730)) + " via punycode: " + Ce;
          }
        }
        V(I, w), y[p(518)] !== p(1448) && I[p(2355)] && (U[p(1449)](I[p(2355)]), U[p(1449)](":"));
        var ne = ze(I, y);
        if (ne !== void 0 && (y[p(518)] !== p(1448) && U[p(1449)]("//"), U[p(1449)](ne), I[p(632)] && I.path[p(878)](0) !== "/" && U[p(1449)]("/")), I[p(632)] !== void 0) {
          var de = I[p(632)];
          !y[p(1337)] && (!L || !L.absolutePath) && (de = Oe(de)), ne === void 0 && (de = de[p(1809)](/^\/\//, "/%2F")), U.push(de);
        }
        return I[p(678)] !== void 0 && (U[p(1449)]("?"), U[p(1449)](I.query)), I[p(1452)] !== void 0 && (U[p(1449)]("#"), U[p(1449)](I.fragment)), U[p(2130)]("");
      }
      function Ye(I, p) {
        const y = e;
        var w = arguments[y(2236)] > 2 && arguments[2] !== void 0 ? arguments[2] : {}, U = arguments[3], L = {};
        return !U && (I = Ae(He(I, w), w), p = Ae(He(p, w), w)), w = w || {}, !w[y(2415)] && p.scheme ? (L[y(2355)] = p[y(2355)], L.userinfo = p[y(1926)], L[y(1493)] = p[y(1493)], L.port = p[y(2240)], L[y(632)] = Oe(p[y(632)] || ""), L[y(678)] = p.query) : (p[y(1926)] !== void 0 || p[y(1493)] !== void 0 || p[y(2240)] !== void 0 ? (L[y(1926)] = p[y(1926)], L[y(1493)] = p[y(1493)], L[y(2240)] = p.port, L.path = Oe(p[y(632)] || ""), L[y(678)] = p.query) : (p.path ? (p.path[y(878)](0) === "/" ? L[y(632)] = Oe(p[y(632)]) : ((I[y(1926)] !== void 0 || I[y(1493)] !== void 0 || I[y(2240)] !== void 0) && !I[y(632)] ? L.path = "/" + p.path : I[y(632)] ? L[y(632)] = I[y(632)][y(771)](0, I.path[y(788)]("/") + 1) + p[y(632)] : L[y(632)] = p[y(632)], L[y(632)] = Oe(L[y(632)])), L[y(678)] = p.query) : (L[y(632)] = I.path, p.query !== void 0 ? L.query = p[y(678)] : L[y(678)] = I[y(678)]), L[y(1926)] = I[y(1926)], L.host = I.host, L[y(2240)] = I.port), L[y(2355)] = I.scheme), L[y(1452)] = p[y(1452)], L;
      }
      function N0(I, p, y) {
        var U = d({ scheme: e(2450) }, y);
        return He(Ye(Ae(I, U), Ae(p, U), U, !0), U);
      }
      function Lx(I, p) {
        const y = e;
        return typeof I === y(1736) ? I = He(Ae(I, p), p) : i(I) === y(1606) && (I = Ae(He(I, p), p)), I;
      }
      function pr(I, p, y) {
        const w = e;
        return typeof I === w(1736) ? I = He(Ae(I, y), y) : i(I) === w(1606) && (I = He(I, y)), typeof p == "string" ? p = He(Ae(p, y), y) : i(p) === w(1606) && (p = He(p, y)), I === p;
      }
      function Sn(I, p) {
        const y = e;
        return I && I.toString().replace(!p || !p.iri ? f[y(1773)] : g.ESCAPE, J);
      }
      function b0(I, p) {
        const y = e;
        return I && I[y(1525)]()[y(1809)](!p || !p[y(1108)] ? f.PCT_ENCODED : g.PCT_ENCODED, Y);
      }
      var W0 = { scheme: e(414), domainHost: !0, parse: function(p, y) {
        const w = e;
        return !p[w(1493)] && (p[w(2484)] = p[w(2484)] || w(2049)), p;
      }, serialize: function(p, y) {
        const w = e;
        var U = String(p.scheme).toLowerCase() === w(2590);
        return (p[w(2240)] === (U ? 443 : 80) || p.port === "") && (p[w(2240)] = void 0), !p[w(632)] && (p[w(632)] = "/"), p;
      } }, mr = { scheme: e(2590), domainHost: W0[e(1473)], parse: W0.parse, serialize: W0.serialize };
      function br(I) {
        const p = e;
        return typeof I.secure === p(2727) ? I[p(2674)] : String(I[p(2355)])[p(2182)]() === p(145);
      }
      var K0 = { scheme: "ws", domainHost: !0, parse: function(p, y) {
        const w = e;
        var U = p;
        return U.secure = br(U), U[w(2332)] = (U[w(632)] || "/") + (U[w(678)] ? "?" + U[w(678)] : ""), U[w(632)] = void 0, U[w(678)] = void 0, U;
      }, serialize: function(p, y) {
        const w = e;
        if ((p[w(2240)] === (br(p) ? 443 : 80) || p[w(2240)] === "") && (p[w(2240)] = void 0), typeof p[w(2674)] === w(2727) && (p[w(2355)] = p[w(2674)] ? w(145) : "ws", p[w(2674)] = void 0), p[w(2332)]) {
          var U = p[w(2332)].split("?"), L = h(U, 2), ne = L[0], de = L[1];
          p[w(632)] = ne && ne !== "/" ? ne : void 0, p.query = de, p[w(2332)] = void 0;
        }
        return p.fragment = void 0, p;
      } }, gr = { scheme: e(145), domainHost: K0.domainHost, parse: K0[e(330)], serialize: K0[e(2227)] }, kn = {}, yr = "[A-Za-z0-9\\-\\.\\_\\~\\xA0-\\u200D\\u2010-\\u2029\\u202F-\\uD7FF\\uF900-\\uFDCF\\uFDF0-\\uFFEF]", o0 = "[0-9A-Fa-f]", Pn = n(n(e(712) + o0 + "%" + o0 + o0 + "%" + o0 + o0) + "|" + n(e(1129) + o0 + "%" + o0 + o0) + "|" + n("%" + o0 + o0)), In = e(2377), En = "[\\!\\$\\%\\'\\(\\)\\*\\+\\,\\-\\.0-9\\<\\>A-Z\\x5E-\\x7E]", Cn = s(En, e(2163)), Rn = "[\\!\\$\\'\\(\\)\\*\\+\\,\\;\\:\\@]", _n = new RegExp(yr, "g"), L0 = new RegExp(Pn, "g"), Fn = new RegExp(s(e(2127), In, e(1915), e(239), Cn), "g"), vr = new RegExp(s(e(2127), yr, Rn), "g"), Nn = vr;
      function $x(I) {
        var p = Y(I);
        return p.match(_n) ? p : I;
      }
      var wr = { scheme: e(2193), parse: function(p, y) {
        const w = e;
        var U = p, L = U.to = U[w(632)] ? U[w(632)][w(2831)](",") : [];
        if (U[w(632)] = void 0, U[w(678)]) {
          for (var ne = !1, de = {}, Ce = U[w(678)][w(2831)]("&"), je = 0, Be = Ce[w(2236)]; je < Be; ++je) {
            var Re = Ce[je].split("=");
            switch (Re[0]) {
              case "to":
                for (var De = Re[1][w(2831)](","), Ze = 0, ge = De[w(2236)]; Ze < ge; ++Ze)
                  L[w(1449)](De[Ze]);
                break;
              case w(459):
                U[w(459)] = b0(Re[1], y);
                break;
              case w(1173):
                U[w(1173)] = b0(Re[1], y);
                break;
              default:
                ne = !0, de[b0(Re[0], y)] = b0(Re[1], y);
                break;
            }
          }
          ne && (U[w(1465)] = de);
        }
        U.query = void 0;
        for (var $e = 0, We = L[w(2236)]; $e < We; ++$e) {
          var Ue = L[$e][w(2831)]("@");
          if (Ue[0] = b0(Ue[0]), y[w(590)]) Ue[1] = b0(Ue[1], y)[w(2182)]();
          else try {
            Ue[1] = T[w(477)](b0(Ue[1], y)[w(2182)]());
          } catch (I0) {
            U.error = U[w(2484)] || w(1785) + I0;
          }
          L[$e] = Ue[w(2130)]("@");
        }
        return U;
      }, serialize: function(p, y) {
        const w = e;
        var U = p, L = u(p.to);
        if (L) {
          for (var ne = 0, de = L[w(2236)]; ne < de; ++ne) {
            var Ce = String(L[ne]), je = Ce[w(788)]("@"), Be = Ce[w(771)](0, je)[w(1809)](L0, $x)[w(1809)](L0, c)[w(1809)](Fn, J), Re = Ce[w(771)](je + 1);
            try {
              Re = y[w(1108)] ? T[w(2720)](Re) : T[w(477)](b0(Re, y)[w(2182)]());
            } catch ($e) {
              U[w(2484)] = U[w(2484)] || w(2915) + (y[w(1108)] ? w(2207) : w(1730)) + w(2713) + $e;
            }
            L[ne] = Be + "@" + Re;
          }
          U[w(632)] = L.join(",");
        }
        var De = p[w(1465)] = p.headers || {};
        p[w(459)] && (De[w(459)] = p[w(459)]), p[w(1173)] && (De[w(1173)] = p[w(1173)]);
        var Ze = [];
        for (var ge in De)
          De[ge] !== kn[ge] && Ze[w(1449)](ge[w(1809)](L0, $x)[w(1809)](L0, c)[w(1809)](vr, J) + "=" + De[ge][w(1809)](L0, $x)[w(1809)](L0, c).replace(Nn, J));
        return Ze[w(2236)] && (U[w(678)] = Ze.join("&")), U;
      } }, Tn = /^([^\:]+)\:(.*)/, Sr = { scheme: e(1760), parse: function(p, y) {
        const w = e;
        var U = p[w(632)] && p[w(632)][w(1778)](Tn), L = p;
        if (U) {
          var ne = y[w(2355)] || L[w(2355)] || "urn", de = U[1].toLowerCase(), Ce = U[2], je = ne + ":" + (y[w(891)] || de), Be = j[je];
          L[w(891)] = de, L.nss = Ce, L[w(632)] = void 0, Be && (L = Be[w(330)](L, y));
        } else L[w(2484)] = L.error || w(1595);
        return L;
      }, serialize: function(p, y) {
        const w = e;
        var U = y.scheme || p.scheme || w(1760), L = p[w(891)], ne = U + ":" + (y[w(891)] || L), de = j[ne];
        de && (p = de.serialize(p, y));
        var Ce = p, je = p[w(360)];
        return Ce[w(632)] = (L || y[w(891)]) + ":" + je, Ce;
      } }, qn = /^[0-9A-Fa-f]{8}(?:\-[0-9A-Fa-f]{4}){3}\-[0-9A-Fa-f]{12}$/, kr = { scheme: e(1050), parse: function(p, y) {
        const w = e;
        var U = p;
        return U[w(1084)] = U[w(360)], U[w(360)] = void 0, !y[w(2415)] && (!U[w(1084)] || !U.uuid[w(1778)](qn)) && (U[w(2484)] = U[w(2484)] || "UUID is not valid."), U;
      }, serialize: function(p, y) {
        const w = e;
        var U = p;
        return U[w(360)] = (p[w(1084)] || "").toLowerCase(), U;
      } };
      j[W0[e(2355)]] = W0, j[mr.scheme] = mr, j[K0[e(2355)]] = K0, j[gr.scheme] = gr, j[wr[e(2355)]] = wr, j[Sr.scheme] = Sr, j[kr[e(2355)]] = kr, a[e(1233)] = j, a[e(2293)] = J, a.pctDecChars = Y, a[e(330)] = Ae, a[e(2171)] = Oe, a[e(2227)] = He, a[e(1998)] = Ye, a[e(753)] = N0, a[e(2206)] = Lx, a[e(2606)] = pr, a[e(1226)] = Sn, a[e(166)] = b0, Object[e(281)](a, e(1618), { value: !0 });
    });
  })(Y0, Y0[o(763)])), Y0[o(763)];
}
var Qx, na;
function lr() {
  return na || (na = 1, Qx = function o(x, t) {
    const a = K;
    if (x === t) return !0;
    if (x && t && typeof x == "object" && typeof t == a(1606)) {
      if (x.constructor !== t[a(1939)]) return !1;
      var e, s, n;
      if (Array[a(2224)](x)) {
        if (e = x[a(2236)], e != t.length) return !1;
        for (s = e; s-- !== 0; ) if (!o(x[s], t[s])) return !1;
        return !0;
      }
      if (x[a(1939)] === RegExp) return x[a(2870)] === t[a(2870)] && x.flags === t[a(143)];
      if (x[a(2122)] !== Object.prototype[a(2122)]) return x[a(2122)]() === t.valueOf();
      if (x[a(1525)] !== Object.prototype.toString) return x.toString() === t[a(1525)]();
      if (n = Object[a(460)](x), e = n.length, e !== Object.keys(t).length) return !1;
      for (s = e; s-- !== 0; ) if (!Object[a(2598)][a(1250)][a(1666)](t, n[s])) return !1;
      for (s = e; s-- !== 0; ) {
        var i = n[s];
        if (!o(x[i], t[i])) return !1;
      }
      return !0;
    }
    return x !== x && t !== t;
  }), Qx;
}
var Xx, oa;
function x2() {
  return oa || (oa = 1, Xx = function(x) {
    const t = K;
    for (var a = 0, e = x[t(2236)], s = 0, n; s < e; )
      a++, n = x.charCodeAt(s++), n >= 55296 && n <= 56319 && s < e && (n = x[t(2638)](s), (n & 64512) == 56320 && s++);
    return a;
  }), Xx;
}
var Yx, ia;
function Z0() {
  const o = r;
  if (ia) return Yx;
  ia = 1, Yx = { copy: x, checkDataType: t, checkDataTypes: a, coerceToTypes: s, toHash: n, getProperty: u, escapeQuotes: d, equal: lr(), ucs2length: x2(), varOccurences: l, varReplace: f, schemaHasRules: g, schemaHasRulesExcept: h, schemaUnknownRules: m, toQuotedString: v, getPathExpr: k, getPath: P, getData: R, unescapeFragment: C, unescapeJsonPointer: M, escapeFragment: A, escapeJsonPointer: D };
  function x(_, F) {
    F = F || {};
    for (var z in _) F[z] = _[z];
    return F;
  }
  function t(_, F, z, $) {
    const H = K;
    var G = $ ? H(1389) : " === ", ce = $ ? H(1603) : " && ", ue = $ ? "!" : "", pe = $ ? "" : "!";
    switch (_) {
      case "null":
        return F + G + H(2450);
      case H(2762):
        return ue + H(1643) + F + ")";
      case "object":
        return "(" + ue + F + ce + "typeof " + F + G + H(1464) + ce + pe + H(1643) + F + "))";
      case "integer":
        return H(2500) + F + G + H(804) + ce + pe + "(" + F + " % 1)" + ce + F + G + F + (z ? ce + ue + H(752) + F + ")" : "") + ")";
      case H(1142):
        return H(2500) + F + G + '"' + _ + '"' + (z ? ce + ue + H(752) + F + ")" : "") + ")";
      default:
        return H(1423) + F + G + '"' + _ + '"';
    }
  }
  function a(_, F, z) {
    const $ = K;
    switch (_[$(2236)]) {
      case 1:
        return t(_[0], F, z, !0);
      default:
        var H = "", G = n(_);
        G[$(2762)] && G[$(1606)] && (H = G[$(2450)] ? "(" : "(!" + F + $(1603), H += $(1423) + F + ' !== "object")', delete G[$(2450)], delete G[$(2762)], delete G[$(1606)]), G[$(1142)] && delete G.integer;
        for (var ce in G) H += (H ? $(142) : "") + t(ce, F, z, !0);
        return H;
    }
  }
  var e = n([o(1736), o(1142), o(1649), o(2727), o(2450)]);
  function s(_, F) {
    const z = o;
    if (Array[z(2224)](F)) {
      for (var $ = [], H = 0; H < F[z(2236)]; H++) {
        var G = F[H];
        e[G] ? $[$.length] = G : _ === z(2762) && G === "array" && ($[$[z(2236)]] = G);
      }
      if ($.length) return $;
    } else {
      if (e[F]) return [F];
      if (_ === "array" && F === z(2762)) return [z(2762)];
    }
  }
  function n(_) {
    for (var F = {}, z = 0; z < _.length; z++) F[_[z]] = !0;
    return F;
  }
  var i = /^[a-z$_][a-z$_0-9]*$/i, c = /'|\\/g;
  function u(_) {
    const F = o;
    return typeof _ == F(1142) ? "[" + _ + "]" : i[F(1069)](_) ? "." + _ : "['" + d(_) + "']";
  }
  function d(_) {
    const F = o;
    return _[F(1809)](c, F(962))[F(1809)](/\n/g, "\\n")[F(1809)](/\r/g, "\\r").replace(/\f/g, "\\f")[F(1809)](/\t/g, "\\t");
  }
  function l(_, F) {
    const z = o;
    F += z(289);
    var $ = _[z(1778)](new RegExp(F, "g"));
    return $ ? $[z(2236)] : 0;
  }
  function f(_, F, z) {
    const $ = o;
    return F += $(2714), z = z[$(1809)](/\$/g, $(2387)), _[$(1809)](new RegExp(F, "g"), z + "$1");
  }
  function g(_, F) {
    if (typeof _ == o(2727)) return !_;
    for (var $ in _) if (F[$]) return !0;
  }
  function h(_, F, z) {
    if (typeof _ == o(2727)) return !_ && z != "not";
    for (var H in _) if (H != z && F[H]) return !0;
  }
  function m(_, F) {
    if (typeof _ != o(2727)) {
      for (var $ in _) if (!F[$]) return $;
    }
  }
  function v(_) {
    return "'" + d(_) + "'";
  }
  function k(_, F, z, $) {
    const H = o;
    var G = z ? "'/' + " + F + ($ ? "" : H(2418)) : $ ? H(564) + F + H(1949) : "'[\\'' + " + F + " + '\\']'";
    return E(_, G);
  }
  function P(_, F, z) {
    var $ = v(z ? "/" + D(F) : u(F));
    return E(_, $);
  }
  var N = /^\/(?:[^~]|~0|~1)*$/, q = /^([0-9]+)(#|\/(?:[^~]|~0|~1)*)?$/;
  function R(_, F, z) {
    const $ = o;
    var H, G, ce, ue;
    if (_ === "") return $(269);
    if (_[0] == "/") {
      if (!N[$(1069)](_)) throw new Error($(2057) + _);
      G = _, ce = $(269);
    } else {
      if (ue = _[$(1778)](q), !ue) throw new Error($(2057) + _);
      if (H = +ue[1], G = ue[2], G == "#") {
        if (H >= F) throw new Error($(2383) + H + $(288) + F);
        return z[F - H];
      }
      if (H > F) throw new Error($(2669) + H + $(288) + F);
      if (ce = $(2516) + (F - H || ""), !G) return ce;
    }
    for (var pe = ce, ie = G.split("/"), le = 0; le < ie[$(2236)]; le++) {
      var Pe = ie[le];
      Pe && (ce += u(M(Pe)), pe += $(142) + ce);
    }
    return pe;
  }
  function E(_, F) {
    const z = o;
    return _ == '""' ? F : (_ + z(1169) + F)[z(1809)](/([^\\])' \+ '/g, "$1");
  }
  function C(_) {
    return M(decodeURIComponent(_));
  }
  function A(_) {
    return encodeURIComponent(D(_));
  }
  function D(_) {
    const F = o;
    return _[F(1809)](/~/g, "~0")[F(1809)](/\//g, "~1");
  }
  function M(_) {
    const F = o;
    return _[F(1809)](/~1/g, "/")[F(1809)](/~0/g, "~");
  }
  return Yx;
}
var et, ca;
function hn() {
  if (ca) return et;
  ca = 1;
  var o = Z0();
  et = x;
  function x(t) {
    o[K(593)](t, this);
  }
  return et;
}
var xt = { exports: {} }, ua;
function t2() {
  const o = r;
  if (ua) return xt[o(763)];
  ua = 1;
  var x = xt[o(763)] = function(e, s, n) {
    const i = o;
    typeof s == i(2279) && (n = s, s = {}), n = s.cb || n;
    var c = typeof n == i(2279) ? n : n.pre || function() {
    }, u = n.post || function() {
    };
    t(s, c, u, e, "", e);
  };
  x[o(1078)] = { additionalItems: !0, items: !0, contains: !0, additionalProperties: !0, propertyNames: !0, not: !0 }, x[o(323)] = { items: !0, allOf: !0, anyOf: !0, oneOf: !0 }, x[o(737)] = { definitions: !0, properties: !0, patternProperties: !0, dependencies: !0 }, x[o(811)] = { default: !0, enum: !0, const: !0, required: !0, maximum: !0, minimum: !0, exclusiveMaximum: !0, exclusiveMinimum: !0, multipleOf: !0, maxLength: !0, minLength: !0, pattern: !0, format: !0, maxItems: !0, minItems: !0, uniqueItems: !0, maxProperties: !0, minProperties: !0 };
  function t(e, s, n, i, c, u, d, l, f, g) {
    const h = o;
    if (i && typeof i == h(1606) && !Array[h(2224)](i)) {
      s(i, c, u, d, l, f, g);
      for (var m in i) {
        var v = i[m];
        if (Array.isArray(v)) {
          if (m in x.arrayKeywords)
            for (var k = 0; k < v[h(2236)]; k++) t(e, s, n, v[k], c + "/" + m + "/" + k, u, c, m, i, k);
        } else if (m in x[h(737)]) {
          if (v && typeof v == h(1606))
            for (var P in v) t(e, s, n, v[P], c + "/" + m + "/" + a(P), u, c, m, i, P);
        } else (m in x[h(1078)] || e[h(1414)] && !(m in x[h(811)])) && t(e, s, n, v, c + "/" + m, u, c, m, i);
      }
      n(i, c, u, d, l, f, g);
    }
  }
  function a(e) {
    const s = o;
    return e[s(1809)](/~/g, "~0")[s(1809)](/\//g, "~1");
  }
  return xt[o(763)];
}
var tt, da;
function fr() {
  const o = r;
  if (da) return tt;
  da = 1;
  var x = e2(), t = lr(), a = Z0(), e = hn(), s = t2();
  tt = n, n[o(1765)] = P, n[o(1588)] = m, n[o(2123)] = N, n[o(2322)] = q, n[o(2825)] = f, n[o(2427)] = i;
  function n(R, E, C) {
    const A = o;
    var D = this._refs[C];
    if (typeof D == A(1736))
      if (this[A(1869)][D]) D = this[A(1869)][D];
      else return n[A(1666)](this, R, E, D);
    if (D = D || this[A(2907)][C], D instanceof e) return f(D[A(2427)], this._opts[A(2613)]) ? D.schema : D[A(766)] || this._compile(D);
    var M = i[A(1666)](this, E, C), _, F, z;
    return M && (_ = M.schema, E = M[A(2004)], z = M.baseId), _ instanceof e ? F = _[A(766)] || R[A(1666)](this, _[A(2427)], E, void 0, z) : _ !== void 0 && (F = f(_, this[A(724)][A(2613)]) ? _ : R[A(1666)](this, _, E, void 0, z)), F;
  }
  function i(R, E) {
    const C = o;
    var A = x[C(330)](E), D = v(A), M = m(this[C(1136)](R[C(2427)]));
    if (Object.keys(R[C(2427)]).length === 0 || D !== M) {
      var _ = P(D), F = this[C(1869)][_];
      if (typeof F == "string") return c[C(1666)](this, R, F, A);
      if (F instanceof e)
        F[C(766)] || this[C(2284)](F), R = F;
      else if (F = this[C(2907)][_], F instanceof e) {
        if (F[C(766)] || this[C(2284)](F), _ == P(E)) return { schema: F, root: R, baseId: M };
        R = F;
      } else return;
      if (!R[C(2427)]) return;
      M = m(this[C(1136)](R[C(2427)]));
    }
    return d.call(this, A, M, R[C(2427)], R);
  }
  function c(R, E, C) {
    const A = o;
    var D = i[A(1666)](this, R, E);
    if (D) {
      var M = D[A(2427)], _ = D.baseId;
      R = D[A(2004)];
      var F = this[A(1136)](M);
      return F && (_ = N(_, F)), d[A(1666)](this, C, _, M, R);
    }
  }
  var u = a.toHash([o(629), o(1547), o(1346), o(2436), o(545)]);
  function d(R, E, C, A) {
    const D = o;
    if (R[D(1452)] = R.fragment || "", R[D(1452)][D(771)](0, 1) == "/") {
      for (var M = R[D(1452)][D(2831)]("/"), _ = 1; _ < M.length; _++) {
        var F = M[_];
        if (F) {
          if (F = a[D(1871)](F), C = C[F], C === void 0) break;
          var z;
          if (!u[F] && (z = this._getId(C), z && (E = N(E, z)), C[D(2883)])) {
            var $ = N(E, C.$ref), H = i.call(this, A, $);
            H && (C = H.schema, A = H[D(2004)], E = H[D(676)]);
          }
        }
      }
      if (C !== void 0 && C !== A.schema) return { schema: C, root: A, baseId: E };
    }
  }
  var l = a[o(2715)]([o(2390), o(1763), o(1216), o(696), o(2772), o(1812), o(1824), o(786), "minItems", o(1647), o(1744), o(575), o(948), o(483), o(1346)]);
  function f(R, E) {
    if (E === !1) return !1;
    if (E === void 0 || E === !0) return g(R);
    if (E) return h(R) <= E;
  }
  function g(R) {
    const E = o;
    var C;
    if (Array[E(2224)](R)) {
      for (var A = 0; A < R.length; A++)
        if (C = R[A], typeof C == "object" && !g(C)) return !1;
    } else for (var D in R)
      if (D == E(2883) || (C = R[D], typeof C == E(1606) && !g(C))) return !1;
    return !0;
  }
  function h(R) {
    const E = o;
    var C = 0, A;
    if (Array.isArray(R)) {
      for (var D = 0; D < R[E(2236)]; D++)
        if (A = R[D], typeof A == E(1606) && (C += h(A)), C == 1 / 0) return 1 / 0;
    } else for (var M in R) {
      if (M == "$ref") return 1 / 0;
      if (l[M]) C++;
      else if (A = R[M], typeof A == "object" && (C += h(A) + 1), C == 1 / 0) return 1 / 0;
    }
    return C;
  }
  function m(R, E) {
    const C = o;
    E !== !1 && (R = P(R));
    var A = x[C(330)](R);
    return v(A);
  }
  function v(R) {
    return x[o(2227)](R).split("#")[0] + "#";
  }
  var k = /#\/?$/;
  function P(R) {
    return R ? R.replace(k, "") : "";
  }
  function N(R, E) {
    const C = o;
    return E = P(E), x[C(753)](R, E);
  }
  function q(R) {
    const E = o;
    var C = P(this[E(1136)](R)), A = { "": C }, D = { "": m(C, !1) }, M = {}, _ = this;
    return s(R, { allKeys: !0 }, function(F, z, $, H, G, ce, ue) {
      const pe = E;
      if (z !== "") {
        var ie = _._getId(F), le = A[H], Pe = D[H] + "/" + G;
        if (ue !== void 0 && (Pe += "/" + (typeof ue == "number" ? ue : a.escapeFragment(ue))), typeof ie == "string") {
          ie = le = P(le ? x[pe(753)](le, ie) : ie);
          var ye = _[pe(1869)][ie];
          if (typeof ye == pe(1736) && (ye = _[pe(1869)][ye]), ye && ye.schema) {
            if (!t(F, ye.schema)) throw new Error(pe(1437) + ie + pe(280));
          } else if (ie != P(Pe))
            if (ie[0] == "#") {
              if (M[ie] && !t(F, M[ie])) throw new Error('id "' + ie + pe(280));
              M[ie] = F;
            } else _._refs[ie] = Pe;
        }
        A[z] = le, D[z] = Pe;
      }
    }), M;
  }
  return tt;
}
var rt, la;
function hr() {
  const o = r;
  if (la) return rt;
  la = 1;
  var x = fr();
  rt = { Validation: e(t), MissingRef: e(a) };
  function t(s) {
    const n = K;
    this[n(1354)] = n(1674), this.errors = s, this[n(2375)] = this[n(2650)] = !0;
  }
  a[o(1354)] = function(s, n) {
    const i = o;
    return i(1309) + n + i(1396) + s;
  };
  function a(s, n, i) {
    const c = o;
    this[c(1354)] = i || a.message(s, n), this[c(209)] = x.url(s, n), this[c(162)] = x[c(1765)](x.fullPath(this.missingRef));
  }
  function e(s) {
    const n = o;
    return s[n(2598)] = Object[n(186)](Error.prototype), s[n(2598)][n(1939)] = s, s;
  }
  return rt;
}
var at, fa;
function pn() {
  return fa || (fa = 1, at = function(o, x) {
    const t = K;
    x || (x = {}), typeof x === t(2279) && (x = { cmp: x });
    var a = typeof x[t(2135)] === t(2727) ? x[t(2135)] : !1, e = x[t(1601)] && /* @__PURE__ */ (function(n) {
      return function(i) {
        return function(c, u) {
          var d = { key: c, value: i[c] }, l = { key: u, value: i[u] };
          return n(d, l);
        };
      };
    })(x.cmp), s = [];
    return (function n(i) {
      const c = t;
      if (i && i[c(1047)] && typeof i[c(1047)] === c(2279) && (i = i[c(1047)]()), i !== void 0) {
        if (typeof i == c(1142)) return isFinite(i) ? "" + i : c(2450);
        if (typeof i !== c(1606)) return JSON.stringify(i);
        var u, d;
        if (Array[c(2224)](i)) {
          for (d = "[", u = 0; u < i[c(2236)]; u++)
            u && (d += ","), d += n(i[u]) || c(2450);
          return d + "]";
        }
        if (i === null) return c(2450);
        if (s[c(1686)](i) !== -1) {
          if (a) return JSON[c(1410)](c(958));
          throw new TypeError("Converting circular structure to JSON");
        }
        var l = s.push(i) - 1, f = Object[c(460)](i).sort(e && e(i));
        for (d = "", u = 0; u < f[c(2236)]; u++) {
          var g = f[u], h = n(i[g]);
          h && (d && (d += ","), d += JSON[c(1410)](g) + ":" + h);
        }
        return s[c(1585)](l, 1), "{" + d + "}";
      }
    })(o);
  }), at;
}
var st, ha;
function mn() {
  return ha || (ha = 1, st = function(x, t, a) {
    const e = K;
    var s = "", n = x[e(2427)][e(967)] === !0, i = x[e(2009)][e(2581)](x[e(2427)], x[e(844)].all, e(2883)), c = x[e(2647)][e(1136)](x[e(2427)]);
    if (x[e(2092)][e(1137)]) {
      var u = x[e(2009)][e(1418)](x.schema, x[e(844)][e(1078)]);
      if (u) {
        var d = e(2033) + u;
        if (x.opts.strictKeywords === e(2482)) x[e(2789)][e(816)](d);
        else throw new Error(d);
      }
    }
    if (x.isTop && (s += " var validate = ", n && (x[e(1180)] = !0, s += e(358)), s += e(680), c && (x[e(2092)][e(1865)] || x.opts.processCode) && (s += " " + (e(1810) + c + " */") + " ")), typeof x.schema == "boolean" || !(i || x.schema[e(2883)])) {
      var t = e(2441), l = x.level, f = x.dataLevel, g = x[e(2427)][t], h = x[e(1612)] + x.util[e(1932)](t), m = x.errSchemaPath + "/" + t, E = !x.opts[e(1347)], D, v = "data" + (f || ""), R = e(996) + l;
      if (x[e(2427)] === !1) {
        x[e(2256)] ? E = !0 : s += e(1691) + R + e(2103);
        var k = k || [];
        k[e(1449)](s), s = "", x[e(1538)] !== !1 ? (s += e(1425) + (D || e(2441)) + e(1462) + x[e(392)] + e(679) + x[e(2009)].toQuotedString(m) + e(556), x[e(2092)][e(1855)] !== !1 && (s += " , message: 'boolean schema is false' "), x[e(2092)].verbose && (s += e(160) + x.schemaPath + e(1519) + v + " "), s += " } ") : s += e(1967);
        var P = s;
        s = k[e(1702)](), !x[e(674)] && E ? x[e(1180)] ? s += " throw new ValidationError([" + P + e(297) : s += e(1106) + P + "]; return false; " : s += " var err = " + P + e(2632);
      } else x[e(2256)] ? n ? s += e(2098) : s += e(1388) : s += e(1691) + R + e(2551);
      return x[e(2256)] && (s += e(876)), s;
    }
    if (x[e(2256)]) {
      var N = x[e(2256)], l = x[e(972)] = 0, f = x[e(182)] = 0, v = e(2516);
      if (x[e(1390)] = x[e(753)].fullPath(x[e(2647)][e(1136)](x[e(2004)][e(2427)])), x.baseId = x[e(676)] || x[e(1390)], delete x.isTop, x[e(2686)] = [""], x[e(2427)][e(1770)] !== void 0 && x[e(2092)][e(1897)] && x[e(2092)][e(2835)]) {
        var q = e(2619);
        if (x[e(2092)][e(2835)] === e(2482)) x[e(2789)][e(816)](q);
        else throw new Error(q);
      }
      s += e(2208), s += e(2373), s += e(2559);
    } else {
      var l = x[e(972)], f = x[e(182)], v = e(2516) + (f || "");
      if (c && (x[e(676)] = x[e(753)][e(2123)](x.baseId, c)), n && !x.async) throw new Error(e(2505));
      s += e(516) + l + " = errors;";
    }
    var R = e(996) + l, E = !x[e(2092)][e(1347)], C = "", A = "", D, M = x[e(2427)][e(2390)], _ = Array[e(2224)](M);
    if (M && x[e(2092)][e(260)] && x[e(2427)][e(260)] === !0 && (_ ? M[e(1686)](e(2450)) == -1 && (M = M.concat(e(2450))) : M != e(2450) && (M = [M, e(2450)], _ = !0)), _ && M[e(2236)] == 1 && (M = M[0], _ = !1), x[e(2427)][e(2883)] && i) {
      if (x[e(2092)][e(2653)] == e(210)) throw new Error(e(1500) + x[e(1786)] + e(255));
      x[e(2092)][e(2653)] !== !0 && (i = !1, x[e(2789)][e(816)]('$ref: keywords ignored in schema at path "' + x[e(1786)] + '"'));
    }
    if (x.schema[e(1510)] && x[e(2092)][e(1510)] && (s += " " + x[e(844)].all[e(1510)][e(2152)](x, "$comment")), M) {
      if (x.opts[e(859)]) var F = x[e(2009)][e(2243)](x[e(2092)][e(859)], M);
      var z = x.RULES[e(1952)][M];
      if (F || _ || z === !0 || z && !ke(z)) {
        var h = x[e(1612)] + e(2885), m = x[e(1786)] + e(822), h = x[e(1612)] + e(2885), m = x[e(1786)] + e(822), $ = _ ? e(1350) : "checkDataType";
        if (s += e(2673) + x.util[$](M, v, x.opts.strictNumbers, !0) + e(2560), F) {
          var H = e(1214) + l, G = e(1790) + l;
          s += e(1691) + H + e(1181) + v + e(532) + G + " = undefined; ", x[e(2092)].coerceTypes == "array" && (s += e(2673) + H + e(1764) + v + ") && " + v + ".length == 1) { " + v + e(567) + v + e(2160) + H + e(1181) + v + e(1539) + x[e(2009)][e(2891)](x[e(2427)][e(2390)], v, x[e(2092)][e(2786)]) + ") " + G + e(567) + v + "; } "), s += e(2673) + G + " !== undefined) ; ";
          var ce = F;
          if (ce)
            for (var ue, pe = -1, ie = ce[e(2236)] - 1; pe < ie; )
              ue = ce[pe += 1], ue == e(1736) ? s += e(833) + H + e(1870) + H + e(2908) + G + e(2477) + v + "; else if (" + v + e(1520) + G + e(1005) : ue == e(1142) || ue == e(1649) ? (s += e(833) + H + " == 'boolean' || " + v + e(1925) + H + " == 'string' && " + v + " && " + v + e(2777) + v + " ", ue == e(1649) && (s += " && !(" + v + e(457)), s += ")) " + G + e(1596) + v + "; ") : ue == e(2727) ? s += " else if (" + v + e(1187) + v + e(1014) + v + " === null) " + G + e(489) + v + e(1716) + v + " === 1) " + G + " = true; " : ue == e(2450) ? s += e(833) + v + " === '' || " + v + e(1014) + v + e(501) + G + e(1955) : x.opts[e(859)] == e(2762) && ue == "array" && (s += e(833) + H + e(2357) + H + e(1870) + H + e(1035) + v + " == null) " + G + e(350) + v + e(251));
          s += e(918);
          var k = k || [];
          k.push(s), s = "", x.createErrors !== !1 ? (s += e(1425) + (D || e(2390)) + "' , dataPath: (dataPath || '') + " + x.errorPath + " , schemaPath: " + x[e(2009)][e(1675)](m) + e(1848), _ ? s += "" + M.join(",") : s += "" + M, s += e(1835), x[e(2092)][e(1855)] !== !1 && (s += e(2021), _ ? s += "" + M[e(2130)](",") : s += "" + M, s += "' "), x[e(2092)].verbose && (s += e(1189) + h + e(420) + x[e(1612)] + e(1519) + v + " "), s += e(2740)) : s += " {} ";
          var P = s;
          s = k[e(1702)](), !x[e(674)] && E ? x[e(1180)] ? s += " throw new ValidationError([" + P + e(297) : s += " validate.errors = [" + P + e(1364) : s += " var err = " + P + e(2632), s += e(2231) + G + e(2528);
          var le = f ? "data" + (f - 1 || "") : e(425), Pe = f ? x[e(2686)][f] : e(141);
          s += " " + v + e(567) + G + "; ", !f && (s += "if (" + le + e(2435)), s += " " + le + "[" + Pe + "] = " + G + e(535);
        } else {
          var k = k || [];
          k.push(s), s = "", x[e(1538)] !== !1 ? (s += e(1425) + (D || e(2390)) + "' , dataPath: (dataPath || '') + " + x[e(392)] + e(679) + x[e(2009)][e(1675)](m) + " , params: { type: '", _ ? s += "" + M.join(",") : s += "" + M, s += e(1835), x[e(2092)][e(1855)] !== !1 && (s += e(2021), _ ? s += "" + M[e(2130)](",") : s += "" + M, s += "' "), x[e(2092)][e(1432)] && (s += e(1189) + h + " , parentSchema: validate.schema" + x.schemaPath + e(1519) + v + " "), s += e(2740)) : s += " {} ";
          var P = s;
          s = k[e(1702)](), !x[e(674)] && E ? x[e(1180)] ? s += e(2132) + P + e(297) : s += " validate.errors = [" + P + e(1364) : s += " var err = " + P + ";  if (vErrors === null) vErrors = [err]; else vErrors.push(err); errors++; ";
        }
        s += e(2740);
      }
    }
    if (x[e(2427)][e(2883)] && !i) s += " " + x[e(844)][e(1087)][e(2883)][e(2152)](x, "$ref") + " ", E && (s += e(1222), N ? s += "0" : s += "errs_" + l, s += e(2560), A += "}");
    else {
      var ye = x.RULES;
      if (ye) {
        for (var z, Me = -1, Te = ye[e(2236)] - 1; Me < Te; )
          if (z = ye[Me += 1], ke(z)) {
            if (z[e(2390)] && (s += " if (" + x[e(2009)].checkDataType(z.type, v, x[e(2092)].strictNumbers) + e(2560)), x[e(2092)][e(1897)]) {
              if (z[e(2390)] == "object" && x[e(2427)][e(629)]) {
                var g = x.schema[e(629)], Xe = Object[e(460)](g), O = Xe;
                if (O)
                  for (var T, j = -1, J = O[e(2236)] - 1; j < J; ) {
                    T = O[j += 1];
                    var Y = g[T];
                    if (Y[e(1770)] !== void 0) {
                      var V = v + x[e(2009)].getProperty(T);
                      if (x[e(674)]) {
                        if (x.opts[e(2835)]) {
                          var q = e(1777) + V;
                          if (x.opts[e(2835)] === "log") x.logger[e(816)](q);
                          else throw new Error(q);
                        }
                      } else s += e(2673) + V + e(332), x.opts[e(1897)] == e(2308) && (s += " || " + V + e(569) + V + e(1407)), s += " ) " + V + e(567), x.opts[e(1897)] == e(500) ? s += " " + x.useDefault(Y[e(1770)]) + " " : s += " " + JSON[e(1410)](Y.default) + " ", s += "; ";
                    }
                  }
              } else if (z[e(2390)] == e(2762) && Array[e(2224)](x[e(2427)][e(2230)])) {
                var X = x[e(2427)][e(2230)];
                if (X) {
                  for (var Y, pe = -1, oe = X.length - 1; pe < oe; )
                    if (Y = X[pe += 1], Y[e(1770)] !== void 0) {
                      var V = v + "[" + pe + "]";
                      if (x.compositeRule) {
                        if (x[e(2092)].strictDefaults) {
                          var q = e(1777) + V;
                          if (x[e(2092)].strictDefaults === e(2482)) x[e(2789)][e(816)](q);
                          else throw new Error(q);
                        }
                      } else s += e(2673) + V + e(332), x.opts[e(1897)] == "empty" && (s += " || " + V + e(569) + V + e(1407)), s += e(2254) + V + e(567), x[e(2092)][e(1897)] == e(500) ? s += " " + x[e(848)](Y[e(1770)]) + " " : s += " " + JSON[e(1410)](Y[e(1770)]) + " ", s += "; ";
                    }
                }
              }
            }
            var se = z[e(1961)];
            if (se) {
              for (var te, Le = -1, Ae = se[e(2236)] - 1; Le < Ae; )
                if (te = se[Le += 1], Ge(te)) {
                  var ze = te.code(x, te[e(1270)], z[e(2390)]);
                  ze && (s += " " + ze + " ", E && (C += "}"));
                }
            }
            if (E && (s += " " + C + " ", C = ""), z[e(2390)] && (s += e(2740), M && M === z[e(2390)] && !F)) {
              s += " else { ";
              var h = x[e(1612)] + e(2885), m = x[e(1786)] + e(822), k = k || [];
              k[e(1449)](s), s = "", x.createErrors !== !1 ? (s += e(1425) + (D || e(2390)) + e(1462) + x[e(392)] + e(679) + x[e(2009)].toQuotedString(m) + e(1848), _ ? s += "" + M.join(",") : s += "" + M, s += "' } ", x[e(2092)].messages !== !1 && (s += " , message: 'should be ", _ ? s += "" + M.join(",") : s += "" + M, s += "' "), x[e(2092)][e(1432)] && (s += e(1189) + h + e(420) + x[e(1612)] + e(1519) + v + " "), s += e(2740)) : s += e(1967);
              var P = s;
              s = k[e(1702)](), !x.compositeRule && E ? x[e(1180)] ? s += e(2132) + P + e(297) : s += e(1106) + P + e(1364) : s += e(722) + P + e(2632), s += e(2740);
            }
            E && (s += e(2610), N ? s += "0" : s += "errs_" + l, s += e(2560), A += "}");
          }
      }
    }
    E && (s += " " + A + " "), N ? (n ? (s += e(246), s += " else throw new ValidationError(vErrors); ") : (s += e(1735), s += " return errors === 0;       "), s += " }; return validate;") : s += e(1691) + R + " = errors === errs_" + l + ";";
    function ke(Je) {
      for (var He = Je[e(1961)], Ye = 0; Ye < He.length; Ye++) if (Ge(He[Ye])) return !0;
    }
    function Ge(Je) {
      const Oe = e;
      return x[Oe(2427)][Je.keyword] !== void 0 || Je[Oe(1100)] && n0(Je);
    }
    function n0(Je) {
      const Oe = e;
      for (var He = Je[Oe(1100)], Ye = 0; Ye < He[Oe(2236)]; Ye++) if (x[Oe(2427)][He[Ye]] !== void 0) return !0;
    }
    return s;
  }), st;
}
var nt, pa;
function r2() {
  const o = r;
  if (pa) return nt;
  pa = 1;
  var x = fr(), t = Z0(), a = hr(), e = pn(), s = mn(), n = t[o(583)], i = lr(), c = a[o(2576)];
  nt = u;
  function u(P, N, q, R) {
    const E = o;
    var C = this, A = this._opts, D = [void 0], M = {}, _ = [], F = {}, z = [], $ = {}, H = [];
    N = N || { schema: P, refVal: D, refs: M };
    var G = d[E(1666)](this, P, N, R), ce = this[E(2203)][G.index];
    if (G[E(1293)]) return ce[E(1404)] = Pe;
    var ue = this[E(229)], pe = this[E(844)];
    try {
      var ie = ye(P, N, q, R);
      ce[E(766)] = ie;
      var le = ce[E(1404)];
      return le && (le[E(2427)] = ie[E(2427)], le.errors = null, le[E(664)] = ie[E(664)], le.refVal = ie[E(1282)], le[E(2004)] = ie.root, le[E(967)] = ie[E(967)], A.sourceCode && (le.source = ie[E(2870)])), ie;
    } finally {
      l.call(this, P, N, R);
    }
    function Pe() {
      const V = E;
      var X = ce[V(766)], oe = X[V(1880)](this, arguments);
      return Pe[V(2887)] = X[V(2887)], oe;
    }
    function ye(V, X, oe, se) {
      const te = E;
      var Le = !X || X && X[te(2427)] == V;
      if (X.schema != N.schema) return u[te(1666)](C, V, X, oe, se);
      var Ae = V[te(967)] === !0, ze = s({ isTop: !0, schema: V, isRoot: Le, baseId: se, root: X, schemaPath: "", errSchemaPath: "#", errorPath: '""', MissingRefError: a.MissingRef, RULES: pe, validate: s, util: t, resolve: x, resolveRef: Me, usePattern: j, useDefault: J, useCustomRule: Y, opts: A, formats: ue, logger: C.logger, self: C });
      ze = k(D, m) + k(_, g) + k(z, h) + k(H, v) + ze, A[te(2303)] && (ze = A.processCode(ze, V));
      var ke;
      try {
        var Ge = new Function(te(2647), te(844), te(1148), "root", te(1282), te(2725), te(2765), te(2606), te(583), te(692), ze);
        ke = Ge(C, pe, ue, N, D, z, H, i, n, c), D[0] = ke;
      } catch (n0) {
        throw C[te(2789)][te(2484)](te(2112), ze), n0;
      }
      return ke.schema = V, ke[te(2887)] = null, ke[te(664)] = M, ke.refVal = D, ke[te(2004)] = Le ? ke : X, Ae && (ke.$async = !0), A[te(1865)] === !0 && (ke[te(2870)] = { code: ze, patterns: _, defaults: z }), ke;
    }
    function Me(V, X, oe) {
      const se = E;
      X = x[se(2123)](V, X);
      var te = M[X], Le, Ae;
      if (te !== void 0) return Le = D[te], Ae = se(1127) + te + "]", T(Le, Ae);
      if (!oe && N.refs) {
        var ze = N[se(664)][X];
        if (ze !== void 0) return Le = N[se(1282)][ze], Ae = Te(X, Le), T(Le, Ae);
      }
      Ae = Te(X);
      var ke = x[se(1666)](C, ye, N, X);
      if (ke === void 0) {
        var Ge = q && q[X];
        Ge && (ke = x[se(2825)](Ge, A[se(2613)]) ? Ge : u[se(1666)](C, Ge, N, q, V));
      }
      if (ke === void 0) Xe(X);
      else return O(X, ke), T(ke, Ae);
    }
    function Te(V, X) {
      const oe = E;
      var se = D[oe(2236)];
      return D[se] = X, M[V] = se, oe(1282) + se;
    }
    function Xe(V) {
      delete M[V];
    }
    function O(V, X) {
      var oe = M[V];
      D[oe] = X;
    }
    function T(V, X) {
      const oe = E;
      return typeof V == oe(1606) || typeof V == oe(2727) ? { code: X, schema: V, inline: !0 } : { code: X, $async: V && !!V.$async };
    }
    function j(V) {
      const X = E;
      var oe = F[V];
      return oe === void 0 && (oe = F[V] = _[X(2236)], _[oe] = V), X(1216) + oe;
    }
    function J(V) {
      const X = E;
      switch (typeof V) {
        case X(2727):
        case X(1142):
          return "" + V;
        case X(1736):
          return t[X(1675)](V);
        case "object":
          if (V === null) return X(2450);
          var oe = e(V), se = $[oe];
          return se === void 0 && (se = $[oe] = z[X(2236)], z[se] = V), X(1770) + se;
      }
    }
    function Y(V, X, oe, se) {
      const te = E;
      if (C[te(724)][te(1775)] !== !1) {
        var Le = V[te(1139)][te(2436)];
        if (Le && !Le.every(function(Ye) {
          const N0 = te;
          return Object[N0(2598)][N0(1250)][N0(1666)](oe, Ye);
        })) throw new Error("parent schema must have all required keywords: " + Le[te(2130)](","));
        var Ae = V[te(1139)].validateSchema;
        if (Ae) {
          var ze = Ae(X);
          if (!ze) {
            var ke = te(2215) + C.errorsText(Ae[te(2887)]);
            if (C[te(724)][te(1775)] == te(2482)) C[te(2789)][te(2484)](ke);
            else throw new Error(ke);
          }
        }
      }
      var Ge = V[te(1139)][te(2268)], n0 = V[te(1139)][te(2494)], Je = V[te(1139)].macro, Oe;
      if (Ge) Oe = Ge[te(1666)](C, X, oe, se);
      else if (Je)
        Oe = Je[te(1666)](C, X, oe, se), A[te(1775)] !== !1 && C[te(1775)](Oe, !0);
      else if (n0) Oe = n0[te(1666)](C, se, V[te(1270)], X, oe);
      else if (Oe = V.definition.validate, !Oe) return;
      if (Oe === void 0) throw new Error(te(928) + V[te(1270)] + '"failed to compile');
      var He = H.length;
      return H[He] = Oe, { code: te(850) + He, validate: Oe };
    }
  }
  function d(P, N, q) {
    const R = o;
    var E = f[R(1666)](this, P, N, q);
    return E >= 0 ? { index: E, compiling: !0 } : (E = this[R(2203)].length, this[R(2203)][E] = { schema: P, root: N, baseId: q }, { index: E, compiling: !1 });
  }
  function l(P, N, q) {
    const R = o;
    var E = f[R(1666)](this, P, N, q);
    E >= 0 && this[R(2203)][R(1585)](E, 1);
  }
  function f(P, N, q) {
    const R = o;
    for (var E = 0; E < this._compilations[R(2236)]; E++) {
      var C = this[R(2203)][E];
      if (C[R(2427)] == P && C[R(2004)] == N && C.baseId == q) return E;
    }
    return -1;
  }
  function g(P, N) {
    const q = o;
    return q(1571) + P + q(416) + t.toQuotedString(N[P]) + ");";
  }
  function h(P) {
    const N = o;
    return N(2811) + P + N(2703) + P + "];";
  }
  function m(P, N) {
    const q = o;
    return N[P] === void 0 ? "" : q(2025) + P + " = refVal[" + P + "];";
  }
  function v(P) {
    const N = o;
    return "var customRule" + P + N(1849) + P + "];";
  }
  function k(P, N) {
    const q = o;
    if (!P[q(2236)]) return "";
    for (var R = "", E = 0; E < P[q(2236)]; E++) R += N(E, P);
    return R;
  }
  return nt;
}
var ot = { exports: {} }, ma;
function a2() {
  const o = r;
  if (ma) return ot[o(763)];
  ma = 1;
  var x = ot[o(763)] = function() {
    const a = o;
    this[a(541)] = {};
  };
  return x[o(2598)][o(1822)] = function(a, e) {
    this._cache[a] = e;
  }, x[o(2598)][o(2157)] = function(a) {
    return this[o(541)][a];
  }, x.prototype[o(1287)] = function(a) {
    delete this._cache[a];
  }, x[o(2598)][o(327)] = function() {
    const a = o;
    this[a(541)] = {};
  }, ot[o(763)];
}
var it, ba;
function s2() {
  const o = r;
  if (ba) return it;
  ba = 1;
  var x = Z0(), t = /^(\d\d\d\d)-(\d\d)-(\d\d)$/, a = [0, 31, 28, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31], e = /^(\d\d):(\d\d):(\d\d)(\.\d+)?(z|[+-]\d\d(?::?\d\d)?)?$/i, s = /^(?=.{1,253}\.?$)[a-z0-9](?:[a-z0-9-]{0,61}[a-z0-9])?(?:\.[a-z0-9](?:[-0-9a-z]{0,61}[0-9a-z])?)*\.?$/i, n = /^(?:[a-z][a-z0-9+\-.]*:)(?:\/?\/(?:(?:[a-z0-9\-._~!$&'()*+,;=:]|%[0-9a-f]{2})*@)?(?:\[(?:(?:(?:(?:[0-9a-f]{1,4}:){6}|::(?:[0-9a-f]{1,4}:){5}|(?:[0-9a-f]{1,4})?::(?:[0-9a-f]{1,4}:){4}|(?:(?:[0-9a-f]{1,4}:){0,1}[0-9a-f]{1,4})?::(?:[0-9a-f]{1,4}:){3}|(?:(?:[0-9a-f]{1,4}:){0,2}[0-9a-f]{1,4})?::(?:[0-9a-f]{1,4}:){2}|(?:(?:[0-9a-f]{1,4}:){0,3}[0-9a-f]{1,4})?::[0-9a-f]{1,4}:|(?:(?:[0-9a-f]{1,4}:){0,4}[0-9a-f]{1,4})?::)(?:[0-9a-f]{1,4}:[0-9a-f]{1,4}|(?:(?:25[0-5]|2[0-4]\d|[01]?\d\d?)\.){3}(?:25[0-5]|2[0-4]\d|[01]?\d\d?))|(?:(?:[0-9a-f]{1,4}:){0,5}[0-9a-f]{1,4})?::[0-9a-f]{1,4}|(?:(?:[0-9a-f]{1,4}:){0,6}[0-9a-f]{1,4})?::)|[Vv][0-9a-f]+\.[a-z0-9\-._~!$&'()*+,;=:]+)\]|(?:(?:25[0-5]|2[0-4]\d|[01]?\d\d?)\.){3}(?:25[0-5]|2[0-4]\d|[01]?\d\d?)|(?:[a-z0-9\-._~!$&'()*+,;=]|%[0-9a-f]{2})*)(?::\d*)?(?:\/(?:[a-z0-9\-._~!$&'()*+,;=:@]|%[0-9a-f]{2})*)*|\/(?:(?:[a-z0-9\-._~!$&'()*+,;=:@]|%[0-9a-f]{2})+(?:\/(?:[a-z0-9\-._~!$&'()*+,;=:@]|%[0-9a-f]{2})*)*)?|(?:[a-z0-9\-._~!$&'()*+,;=:@]|%[0-9a-f]{2})+(?:\/(?:[a-z0-9\-._~!$&'()*+,;=:@]|%[0-9a-f]{2})*)*)(?:\?(?:[a-z0-9\-._~!$&'()*+,;=:@/?]|%[0-9a-f]{2})*)?(?:#(?:[a-z0-9\-._~!$&'()*+,;=:@/?]|%[0-9a-f]{2})*)?$/i, i = /^(?:[a-z][a-z0-9+\-.]*:)?(?:\/?\/(?:(?:[a-z0-9\-._~!$&'()*+,;=:]|%[0-9a-f]{2})*@)?(?:\[(?:(?:(?:(?:[0-9a-f]{1,4}:){6}|::(?:[0-9a-f]{1,4}:){5}|(?:[0-9a-f]{1,4})?::(?:[0-9a-f]{1,4}:){4}|(?:(?:[0-9a-f]{1,4}:){0,1}[0-9a-f]{1,4})?::(?:[0-9a-f]{1,4}:){3}|(?:(?:[0-9a-f]{1,4}:){0,2}[0-9a-f]{1,4})?::(?:[0-9a-f]{1,4}:){2}|(?:(?:[0-9a-f]{1,4}:){0,3}[0-9a-f]{1,4})?::[0-9a-f]{1,4}:|(?:(?:[0-9a-f]{1,4}:){0,4}[0-9a-f]{1,4})?::)(?:[0-9a-f]{1,4}:[0-9a-f]{1,4}|(?:(?:25[0-5]|2[0-4]\d|[01]?\d\d?)\.){3}(?:25[0-5]|2[0-4]\d|[01]?\d\d?))|(?:(?:[0-9a-f]{1,4}:){0,5}[0-9a-f]{1,4})?::[0-9a-f]{1,4}|(?:(?:[0-9a-f]{1,4}:){0,6}[0-9a-f]{1,4})?::)|[Vv][0-9a-f]+\.[a-z0-9\-._~!$&'()*+,;=:]+)\]|(?:(?:25[0-5]|2[0-4]\d|[01]?\d\d?)\.){3}(?:25[0-5]|2[0-4]\d|[01]?\d\d?)|(?:[a-z0-9\-._~!$&'"()*+,;=]|%[0-9a-f]{2})*)(?::\d*)?(?:\/(?:[a-z0-9\-._~!$&'"()*+,;=:@]|%[0-9a-f]{2})*)*|\/(?:(?:[a-z0-9\-._~!$&'"()*+,;=:@]|%[0-9a-f]{2})+(?:\/(?:[a-z0-9\-._~!$&'"()*+,;=:@]|%[0-9a-f]{2})*)*)?|(?:[a-z0-9\-._~!$&'"()*+,;=:@]|%[0-9a-f]{2})+(?:\/(?:[a-z0-9\-._~!$&'"()*+,;=:@]|%[0-9a-f]{2})*)*)?(?:\?(?:[a-z0-9\-._~!$&'"()*+,;=:@/?]|%[0-9a-f]{2})*)?(?:#(?:[a-z0-9\-._~!$&'"()*+,;=:@/?]|%[0-9a-f]{2})*)?$/i, c = /^(?:(?:[^\x00-\x20"'<>%\\^`{|}]|%[0-9a-f]{2})|\{[+#./;?&=,!@|]?(?:[a-z0-9_]|%[0-9a-f]{2})+(?::[1-9][0-9]{0,3}|\*)?(?:,(?:[a-z0-9_]|%[0-9a-f]{2})+(?::[1-9][0-9]{0,3}|\*)?)*\})*$/i, u = /^(?:(?:http[s\u017F]?|ftp):\/\/)(?:(?:[\0-\x08\x0E-\x1F!-\x9F\xA1-\u167F\u1681-\u1FFF\u200B-\u2027\u202A-\u202E\u2030-\u205E\u2060-\u2FFF\u3001-\uD7FF\uE000-\uFEFE\uFF00-\uFFFF]|[\uD800-\uDBFF][\uDC00-\uDFFF]|[\uD800-\uDBFF](?![\uDC00-\uDFFF])|(?:[^\uD800-\uDBFF]|^)[\uDC00-\uDFFF])+(?::(?:[\0-\x08\x0E-\x1F!-\x9F\xA1-\u167F\u1681-\u1FFF\u200B-\u2027\u202A-\u202E\u2030-\u205E\u2060-\u2FFF\u3001-\uD7FF\uE000-\uFEFE\uFF00-\uFFFF]|[\uD800-\uDBFF][\uDC00-\uDFFF]|[\uD800-\uDBFF](?![\uDC00-\uDFFF])|(?:[^\uD800-\uDBFF]|^)[\uDC00-\uDFFF])*)?@)?(?:(?!10(?:\.[0-9]{1,3}){3})(?!127(?:\.[0-9]{1,3}){3})(?!169\.254(?:\.[0-9]{1,3}){2})(?!192\.168(?:\.[0-9]{1,3}){2})(?!172\.(?:1[6-9]|2[0-9]|3[01])(?:\.[0-9]{1,3}){2})(?:[1-9][0-9]?|1[0-9][0-9]|2[01][0-9]|22[0-3])(?:\.(?:1?[0-9]{1,2}|2[0-4][0-9]|25[0-5])){2}(?:\.(?:[1-9][0-9]?|1[0-9][0-9]|2[0-4][0-9]|25[0-4]))|(?:(?:(?:[0-9a-z\xA1-\uD7FF\uE000-\uFFFF]|[\uD800-\uDBFF](?![\uDC00-\uDFFF])|(?:[^\uD800-\uDBFF]|^)[\uDC00-\uDFFF])+-)*(?:[0-9a-z\xA1-\uD7FF\uE000-\uFFFF]|[\uD800-\uDBFF](?![\uDC00-\uDFFF])|(?:[^\uD800-\uDBFF]|^)[\uDC00-\uDFFF])+)(?:\.(?:(?:[0-9a-z\xA1-\uD7FF\uE000-\uFFFF]|[\uD800-\uDBFF](?![\uDC00-\uDFFF])|(?:[^\uD800-\uDBFF]|^)[\uDC00-\uDFFF])+-)*(?:[0-9a-z\xA1-\uD7FF\uE000-\uFFFF]|[\uD800-\uDBFF](?![\uDC00-\uDFFF])|(?:[^\uD800-\uDBFF]|^)[\uDC00-\uDFFF])+)*(?:\.(?:(?:[a-z\xA1-\uD7FF\uE000-\uFFFF]|[\uD800-\uDBFF](?![\uDC00-\uDFFF])|(?:[^\uD800-\uDBFF]|^)[\uDC00-\uDFFF]){2,})))(?::[0-9]{2,5})?(?:\/(?:[\0-\x08\x0E-\x1F!-\x9F\xA1-\u167F\u1681-\u1FFF\u200B-\u2027\u202A-\u202E\u2030-\u205E\u2060-\u2FFF\u3001-\uD7FF\uE000-\uFEFE\uFF00-\uFFFF]|[\uD800-\uDBFF][\uDC00-\uDFFF]|[\uD800-\uDBFF](?![\uDC00-\uDFFF])|(?:[^\uD800-\uDBFF]|^)[\uDC00-\uDFFF])*)?$/i, d = /^(?:urn:uuid:)?[0-9a-f]{8}-(?:[0-9a-f]{4}-){3}[0-9a-f]{12}$/i, l = /^(?:\/(?:[^~/]|~0|~1)*)*$/, f = /^#(?:\/(?:[a-z0-9_\-.!$&'()*+,;:=@]|%[0-9a-f]{2}|~0|~1)*)*$/i, g = /^(?:0|[1-9][0-9]*)(?:#|(?:\/(?:[^~/]|~0|~1)*)*)$/;
  it = h;
  function h(A) {
    const D = K;
    return A = A == "full" ? "full" : "fast", x[D(593)](h[A]);
  }
  h[o(688)] = { date: /^\d\d\d\d-[0-1]\d-[0-3]\d$/, time: /^(?:[0-2]\d:[0-5]\d:[0-5]\d|23:59:60)(?:\.\d+)?(?:z|[+-]\d\d(?::?\d\d)?)?$/i, "date-time": /^\d\d\d\d-[0-1]\d-[0-3]\d[t\s](?:[0-2]\d:[0-5]\d:[0-5]\d|23:59:60)(?:\.\d+)?(?:z|[+-]\d\d(?::?\d\d)?)$/i, uri: /^(?:[a-z][a-z0-9+\-.]*:)(?:\/?\/)?[^\s]*$/i, "uri-reference": /^(?:(?:[a-z][a-z0-9+\-.]*:)?\/?\/)?(?:[^\\\s#][^\s#]*)?(?:#[^\\\s]*)?$/i, "uri-template": c, url: u, email: /^[a-z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-z0-9](?:[a-z0-9-]{0,61}[a-z0-9])?(?:\.[a-z0-9](?:[a-z0-9-]{0,61}[a-z0-9])?)*$/i, hostname: s, ipv4: /^(?:(?:25[0-5]|2[0-4]\d|[01]?\d\d?)\.){3}(?:25[0-5]|2[0-4]\d|[01]?\d\d?)$/, ipv6: /^\s*(?:(?:(?:[0-9a-f]{1,4}:){7}(?:[0-9a-f]{1,4}|:))|(?:(?:[0-9a-f]{1,4}:){6}(?::[0-9a-f]{1,4}|(?:(?:25[0-5]|2[0-4]\d|1\d\d|[1-9]?\d)(?:\.(?:25[0-5]|2[0-4]\d|1\d\d|[1-9]?\d)){3})|:))|(?:(?:[0-9a-f]{1,4}:){5}(?:(?:(?::[0-9a-f]{1,4}){1,2})|:(?:(?:25[0-5]|2[0-4]\d|1\d\d|[1-9]?\d)(?:\.(?:25[0-5]|2[0-4]\d|1\d\d|[1-9]?\d)){3})|:))|(?:(?:[0-9a-f]{1,4}:){4}(?:(?:(?::[0-9a-f]{1,4}){1,3})|(?:(?::[0-9a-f]{1,4})?:(?:(?:25[0-5]|2[0-4]\d|1\d\d|[1-9]?\d)(?:\.(?:25[0-5]|2[0-4]\d|1\d\d|[1-9]?\d)){3}))|:))|(?:(?:[0-9a-f]{1,4}:){3}(?:(?:(?::[0-9a-f]{1,4}){1,4})|(?:(?::[0-9a-f]{1,4}){0,2}:(?:(?:25[0-5]|2[0-4]\d|1\d\d|[1-9]?\d)(?:\.(?:25[0-5]|2[0-4]\d|1\d\d|[1-9]?\d)){3}))|:))|(?:(?:[0-9a-f]{1,4}:){2}(?:(?:(?::[0-9a-f]{1,4}){1,5})|(?:(?::[0-9a-f]{1,4}){0,3}:(?:(?:25[0-5]|2[0-4]\d|1\d\d|[1-9]?\d)(?:\.(?:25[0-5]|2[0-4]\d|1\d\d|[1-9]?\d)){3}))|:))|(?:(?:[0-9a-f]{1,4}:){1}(?:(?:(?::[0-9a-f]{1,4}){1,6})|(?:(?::[0-9a-f]{1,4}){0,4}:(?:(?:25[0-5]|2[0-4]\d|1\d\d|[1-9]?\d)(?:\.(?:25[0-5]|2[0-4]\d|1\d\d|[1-9]?\d)){3}))|:))|(?::(?:(?:(?::[0-9a-f]{1,4}){1,7})|(?:(?::[0-9a-f]{1,4}){0,5}:(?:(?:25[0-5]|2[0-4]\d|1\d\d|[1-9]?\d)(?:\.(?:25[0-5]|2[0-4]\d|1\d\d|[1-9]?\d)){3}))|:)))(?:%.+)?\s*$/i, regex: C, uuid: d, "json-pointer": l, "json-pointer-uri-fragment": f, "relative-json-pointer": g }, h[o(1055)] = { date: v, time: k, "date-time": N, uri: R, "uri-reference": i, "uri-template": c, url: u, email: /^[a-z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[a-z0-9!#$%&'*+/=?^_`{|}~-]+)*@(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?$/i, hostname: s, ipv4: /^(?:(?:25[0-5]|2[0-4]\d|[01]?\d\d?)\.){3}(?:25[0-5]|2[0-4]\d|[01]?\d\d?)$/, ipv6: /^\s*(?:(?:(?:[0-9a-f]{1,4}:){7}(?:[0-9a-f]{1,4}|:))|(?:(?:[0-9a-f]{1,4}:){6}(?::[0-9a-f]{1,4}|(?:(?:25[0-5]|2[0-4]\d|1\d\d|[1-9]?\d)(?:\.(?:25[0-5]|2[0-4]\d|1\d\d|[1-9]?\d)){3})|:))|(?:(?:[0-9a-f]{1,4}:){5}(?:(?:(?::[0-9a-f]{1,4}){1,2})|:(?:(?:25[0-5]|2[0-4]\d|1\d\d|[1-9]?\d)(?:\.(?:25[0-5]|2[0-4]\d|1\d\d|[1-9]?\d)){3})|:))|(?:(?:[0-9a-f]{1,4}:){4}(?:(?:(?::[0-9a-f]{1,4}){1,3})|(?:(?::[0-9a-f]{1,4})?:(?:(?:25[0-5]|2[0-4]\d|1\d\d|[1-9]?\d)(?:\.(?:25[0-5]|2[0-4]\d|1\d\d|[1-9]?\d)){3}))|:))|(?:(?:[0-9a-f]{1,4}:){3}(?:(?:(?::[0-9a-f]{1,4}){1,4})|(?:(?::[0-9a-f]{1,4}){0,2}:(?:(?:25[0-5]|2[0-4]\d|1\d\d|[1-9]?\d)(?:\.(?:25[0-5]|2[0-4]\d|1\d\d|[1-9]?\d)){3}))|:))|(?:(?:[0-9a-f]{1,4}:){2}(?:(?:(?::[0-9a-f]{1,4}){1,5})|(?:(?::[0-9a-f]{1,4}){0,3}:(?:(?:25[0-5]|2[0-4]\d|1\d\d|[1-9]?\d)(?:\.(?:25[0-5]|2[0-4]\d|1\d\d|[1-9]?\d)){3}))|:))|(?:(?:[0-9a-f]{1,4}:){1}(?:(?:(?::[0-9a-f]{1,4}){1,6})|(?:(?::[0-9a-f]{1,4}){0,4}:(?:(?:25[0-5]|2[0-4]\d|1\d\d|[1-9]?\d)(?:\.(?:25[0-5]|2[0-4]\d|1\d\d|[1-9]?\d)){3}))|:))|(?::(?:(?:(?::[0-9a-f]{1,4}){1,7})|(?:(?::[0-9a-f]{1,4}){0,5}:(?:(?:25[0-5]|2[0-4]\d|1\d\d|[1-9]?\d)(?:\.(?:25[0-5]|2[0-4]\d|1\d\d|[1-9]?\d)){3}))|:)))(?:%.+)?\s*$/i, regex: C, uuid: d, "json-pointer": l, "json-pointer-uri-fragment": f, "relative-json-pointer": g };
  function m(A) {
    return A % 4 === 0 && (A % 100 !== 0 || A % 400 === 0);
  }
  function v(A) {
    var D = A.match(t);
    if (!D) return !1;
    var M = +D[1], _ = +D[2], F = +D[3];
    return _ >= 1 && _ <= 12 && F >= 1 && F <= (_ == 2 && m(M) ? 29 : a[_]);
  }
  function k(A, D) {
    var _ = A[o(1778)](e);
    if (!_) return !1;
    var F = _[1], z = _[2], $ = _[3], H = _[5];
    return (F <= 23 && z <= 59 && $ <= 59 || F == 23 && z == 59 && $ == 60) && (!D || H);
  }
  var P = /t|\s/i;
  function N(A) {
    var M = A[o(2831)](P);
    return M.length == 2 && v(M[0]) && k(M[1], !0);
  }
  var q = /\/|:/;
  function R(A) {
    const D = o;
    return q[D(1069)](A) && n[D(1069)](A);
  }
  var E = /[^\\]\\Z/;
  function C(A) {
    if (E[o(1069)](A)) return !1;
    try {
      return new RegExp(A), !0;
    } catch {
      return !1;
    }
  }
  return it;
}
var ct, ga;
function n2() {
  return ga || (ga = 1, ct = function(x, t, a) {
    const e = K;
    var s = " ", n = x[e(972)], i = x.dataLevel, c = x[e(2427)][t], u = x[e(1786)] + "/" + t, d = !x[e(2092)][e(1347)], l = e(2516) + (i || ""), f = e(996) + n, g, h;
    if (c == "#" || c == "#/") x.isRoot ? (g = x[e(1180)], h = "validate") : (g = x[e(2004)][e(2427)][e(967)] === !0, h = "root.refVal[0]");
    else {
      var m = x[e(2884)](x[e(676)], c, x[e(2086)]);
      if (m === void 0) {
        var v = x[e(424)][e(1354)](x.baseId, c);
        if (x[e(2092)][e(1529)] == e(210)) {
          x[e(2789)][e(2484)](v);
          var k = k || [];
          k[e(1449)](s), s = "", x.createErrors !== !1 ? (s += e(1425) + e(2883) + e(1462) + x.errorPath + e(679) + x[e(2009)][e(1675)](u) + " , params: { ref: '" + x[e(2009)][e(1192)](c) + e(1835), x[e(2092)][e(1855)] !== !1 && (s += e(1623) + x[e(2009)].escapeQuotes(c) + "' "), x.opts[e(1432)] && (s += " , schema: " + x.util[e(1675)](c) + e(420) + x[e(1612)] + " , data: " + l + " "), s += e(2740)) : s += " {} ";
          var P = s;
          s = k[e(1702)](), !x[e(674)] && d ? x[e(1180)] ? s += e(2132) + P + "]); " : s += e(1106) + P + e(1364) : s += e(722) + P + e(2632), d && (s += e(277));
        } else if (x[e(2092)][e(1529)] == e(652)) x.logger[e(816)](v), d && (s += e(2424));
        else throw new x[e(424)](x.baseId, c, v);
      } else if (m[e(2494)]) {
        var N = x[e(2009)][e(593)](x);
        N[e(972)]++;
        var q = "valid" + N[e(972)];
        N[e(2427)] = m[e(2427)], N.schemaPath = "", N[e(1786)] = c;
        var R = x[e(766)](N)[e(1809)](/validate\.schema/g, m[e(2152)]);
        s += " " + R + " ", d && (s += e(2673) + q + e(2560));
      } else g = m[e(967)] === !0 || x[e(1180)] && m[e(967)] !== !1, h = m[e(2152)];
    }
    if (h) {
      var k = k || [];
      k[e(1449)](s), s = "", x.opts[e(623)] ? s += " " + h + e(1896) : s += " " + h + "( ", s += " " + l + e(309), x[e(392)] != '""' && (s += " + " + x[e(392)]);
      var E = i ? e(2516) + (i - 1 || "") : e(425), C = i ? x.dataPathArr[i] : e(141);
      s += e(887) + E + e(887) + C + e(1259);
      var A = s;
      if (s = k[e(1702)](), g) {
        if (!x[e(1180)]) throw new Error(e(540));
        d && (s += e(1691) + f + "; "), s += e(505) + A + "; ", d && (s += " " + f + e(2551)), s += e(2278), d && (s += " " + f + e(2103)), s += e(2740), d && (s += " if (" + f + e(2560));
      } else s += e(634) + A + e(625) + h + e(2024) + h + e(1566), d && (s += e(167));
    }
    return s;
  }), ct;
}
var ut, ya;
function o2() {
  return ya || (ya = 1, ut = function(x, t, a) {
    const e = K;
    var s = " ", n = x[e(2427)][t], i = x[e(1612)] + x.util[e(1932)](t), c = x.errSchemaPath + "/" + t, u = !x[e(2092)][e(1347)], d = x.util[e(593)](x), l = "";
    d[e(972)]++;
    var f = e(996) + d[e(972)], g = d[e(676)], h = !0, m = n;
    if (m)
      for (var v, k = -1, P = m[e(2236)] - 1; k < P; )
        v = m[k += 1], (x[e(2092)][e(1137)] ? typeof v == e(1606) && Object[e(460)](v)[e(2236)] > 0 || v === !1 : x[e(2009)][e(2627)](v, x[e(844)][e(1087)])) && (h = !1, d[e(2427)] = v, d.schemaPath = i + "[" + k + "]", d[e(1786)] = c + "/" + k, s += "  " + x[e(766)](d) + " ", d.baseId = g, u && (s += e(2673) + f + e(2560), l += "}"));
    return u && (h ? s += e(2424) : s += " " + l[e(771)](0, -1) + " "), s;
  }), ut;
}
var dt, va;
function i2() {
  return va || (va = 1, dt = function(x, t, a) {
    const e = K;
    var s = " ", n = x.level, i = x[e(182)], c = x.schema[t], u = x[e(1612)] + x[e(2009)].getProperty(t), d = x[e(1786)] + "/" + t, l = !x[e(2092)][e(1347)], f = e(2516) + (i || ""), g = e(996) + n, h = e(2464) + n, m = x.util[e(593)](x), v = "";
    m.level++;
    var k = e(996) + m[e(972)], P = c.every(function(D) {
      const M = e;
      return x[M(2092)][M(1137)] ? typeof D == "object" && Object[M(460)](D)[M(2236)] > 0 || D === !1 : x.util[M(2627)](D, x.RULES.all);
    });
    if (P) {
      var N = m[e(676)];
      s += e(1691) + h + e(252) + g + e(2150);
      var q = x[e(674)];
      x.compositeRule = m[e(674)] = !0;
      var R = c;
      if (R)
        for (var E, C = -1, A = R[e(2236)] - 1; C < A; )
          E = R[C += 1], m.schema = E, m[e(1612)] = u + "[" + C + "]", m[e(1786)] = d + "/" + C, s += "  " + x[e(766)](m) + " ", m[e(676)] = N, s += " " + g + " = " + g + e(1603) + k + "; if (!" + g + e(2560), v += "}";
      x[e(674)] = m.compositeRule = q, s += " " + v + e(634) + g + e(422), x.createErrors !== !1 ? (s += e(1425) + e(684) + "' , dataPath: (dataPath || '') + " + x[e(392)] + " , schemaPath: " + x[e(2009)].toQuotedString(d) + e(556), x[e(2092)][e(1855)] !== !1 && (s += e(519)), x[e(2092)][e(1432)] && (s += e(1189) + u + " , parentSchema: validate.schema" + x[e(1612)] + " , data: " + f + " "), s += e(2740)) : s += e(1967), s += ";  if (vErrors === null) vErrors = [err]; else vErrors.push(err); errors++; ", !x.compositeRule && l && (x[e(1180)] ? s += e(558) : s += " validate.errors = vErrors; return false; "), s += e(1303) + h + e(1841) + h + e(2538) + h + e(445), x[e(2092)].allErrors && (s += " } ");
    } else l && (s += " if (true) { ");
    return s;
  }), dt;
}
var lt, wa;
function c2() {
  return wa || (wa = 1, lt = function(x, t, a) {
    const e = K;
    var s = " ", n = x[e(2427)][t], i = x.errSchemaPath + "/" + t;
    x.opts[e(1347)];
    var c = x[e(2009)].toQuotedString(n);
    return x[e(2092)][e(1510)] === !0 ? s += e(1948) + c + ");" : typeof x[e(2092)][e(1510)] == e(2279) && (s += e(2162) + c + ", " + x[e(2009)][e(1675)](i) + e(1056)), s;
  }), lt;
}
var ft, Sa;
function u2() {
  return Sa || (Sa = 1, ft = function(x, t, a) {
    const e = K;
    var s = " ", n = x[e(972)], i = x[e(182)], c = x[e(2427)][t], u = x[e(1612)] + x[e(2009)][e(1932)](t), d = x[e(1786)] + "/" + t, l = !x[e(2092)].allErrors, f = e(2516) + (i || ""), g = e(996) + n, h = x[e(2092)][e(436)] && c && c[e(436)];
    h && (s += e(2612) + n + e(567) + x.util[e(586)](c.$data, i, x.dataPathArr) + "; "), !h && (s += e(2612) + n + e(1484) + u + ";"), s += e(1627) + g + e(2736) + f + e(785) + n + e(2041) + g + e(1728);
    var m = m || [];
    m.push(s), s = "", x.createErrors !== !1 ? (s += " { keyword: '" + e(2874) + e(1462) + x[e(392)] + " , schemaPath: " + x[e(2009)][e(1675)](d) + " , params: { allowedValue: schema" + n + e(2740), x[e(2092)][e(1855)] !== !1 && (s += e(2205)), x[e(2092)][e(1432)] && (s += e(1189) + u + e(420) + x[e(1612)] + e(1519) + f + " "), s += " } ") : s += " {} ";
    var v = s;
    return s = m[e(1702)](), !x[e(674)] && l ? x[e(1180)] ? s += e(2132) + v + e(297) : s += e(1106) + v + e(1364) : s += " var err = " + v + e(2632), s += " }", l && (s += e(167)), s;
  }), ft;
}
var ht, ka;
function d2() {
  return ka || (ka = 1, ht = function(x, t, a) {
    const e = K;
    var s = " ", n = x.level, i = x[e(182)], c = x[e(2427)][t], u = x[e(1612)] + x[e(2009)].getProperty(t), d = x[e(1786)] + "/" + t, l = !x.opts.allErrors, f = e(2516) + (i || ""), g = e(996) + n, h = "errs__" + n, m = x[e(2009)][e(593)](x), v = "";
    m[e(972)]++;
    var k = e(996) + m[e(972)], P = "i" + n, N = m.dataLevel = x[e(182)] + 1, q = e(2516) + N, R = x.baseId, E = x.opts.strictKeywords ? typeof c == e(1606) && Object.keys(c)[e(2236)] > 0 || c === !1 : x.util[e(2627)](c, x[e(844)].all);
    if (s += e(1627) + h + e(868) + g + ";", E) {
      var C = x[e(674)];
      x[e(674)] = m[e(674)] = !0, m[e(2427)] = c, m[e(1612)] = u, m[e(1786)] = d, s += e(1691) + k + " = false; for (var " + P + e(840) + P + " < " + f + e(765) + P + e(2142), m[e(392)] = x[e(2009)].getPathExpr(x[e(392)], P, x.opts[e(2841)], !0);
      var A = f + "[" + P + "]";
      m[e(2686)][N] = P;
      var D = x[e(766)](m);
      m[e(676)] = R, x[e(2009)].varOccurences(D, q) < 2 ? s += " " + x[e(2009)][e(1039)](D, q, A) + " " : s += " var " + q + e(567) + A + "; " + D + " ", s += " if (" + k + e(1506), x.compositeRule = m[e(674)] = C, s += " " + v + e(634) + k + e(1558);
    } else s += e(2673) + f + e(1091);
    var M = M || [];
    M.push(s), s = "", x[e(1538)] !== !1 ? (s += e(1425) + e(514) + e(1462) + x.errorPath + " , schemaPath: " + x[e(2009)][e(1675)](d) + " , params: {} ", x.opts.messages !== !1 && (s += e(328)), x[e(2092)][e(1432)] && (s += e(1189) + u + e(420) + x.schemaPath + e(1519) + f + " "), s += e(2740)) : s += " {} ";
    var _ = s;
    return s = M[e(1702)](), !x[e(674)] && l ? x[e(1180)] ? s += e(2132) + _ + e(297) : s += " validate.errors = [" + _ + e(1364) : s += e(722) + _ + e(2632), s += e(386), E && (s += e(1726) + h + e(1841) + h + e(2538) + h + "; else vErrors = null; } "), x[e(2092)][e(1347)] && (s += " } "), s;
  }), ht;
}
var pt, Pa;
function l2() {
  return Pa || (Pa = 1, pt = function(x, t, a) {
    const e = K;
    var s = " ", n = x[e(972)], i = x[e(182)], c = x.schema[t], u = x[e(1612)] + x[e(2009)][e(1932)](t), d = x.errSchemaPath + "/" + t, l = !x.opts[e(1347)], f = "data" + (i || ""), g = e(2464) + n, h = x.util.copy(x), m = "";
    h.level++;
    var v = e(996) + h[e(972)], k = {}, P = {}, N = x[e(2092)].ownProperties;
    for (C in c)
      if (C != e(1934)) {
        var q = c[C], R = Array[e(2224)](q) ? P : k;
        R[C] = q;
      }
    s += e(1627) + g + e(977);
    var E = x[e(392)];
    s += e(2518) + n + ";";
    for (var C in P)
      if (R = P[C], R[e(2236)]) {
        if (s += e(504) + f + x[e(2009)].getProperty(C) + " !== undefined ", N && (s += e(1832) + f + e(221) + x[e(2009)][e(1192)](C) + e(1345)), l) {
          s += e(2386);
          var A = R;
          if (A)
            for (var D, M = -1, _ = A.length - 1; M < _; ) {
              D = A[M += 1], M && (s += " || ");
              var F = x[e(2009)].getProperty(D), z = f + F;
              s += e(1460) + z + " === undefined ", N && (s += e(1784) + f + e(221) + x[e(2009)][e(1192)](D) + "') "), s += ") && (missing" + n + e(567) + x[e(2009)][e(1675)](x.opts[e(2841)] ? D : F) + e(2735);
            }
          s += e(301);
          var $ = "missing" + n, H = e(2023) + $ + " + '";
          x.opts[e(2038)] && (x[e(392)] = x.opts.jsonPointers ? x.util[e(1492)](E, $, !0) : E + e(1169) + $);
          var G = G || [];
          G.push(s), s = "", x[e(1538)] !== !1 ? (s += e(1425) + e(2436) + "' , dataPath: (dataPath || '') + " + x[e(392)] + e(679) + x[e(2009)][e(1675)](d) + e(2442) + x[e(2009)].escapeQuotes(C) + e(2399) + H + e(2552) + R[e(2236)] + e(1807) + x.util[e(1192)](R[e(2236)] == 1 ? R[0] : R.join(", ")) + e(1835), x[e(2092)][e(1855)] !== !1 && (s += e(1688), R[e(2236)] == 1 ? s += e(1037) + x.util[e(1192)](R[0]) : s += e(2428) + x.util[e(1192)](R[e(2130)](", ")), s += e(1065) + x[e(2009)][e(1192)](C) + e(1051)), x[e(2092)].verbose && (s += e(1189) + u + " , parentSchema: validate.schema" + x[e(1612)] + e(1519) + f + " "), s += e(2740)) : s += e(1967);
          var ce = s;
          s = G.pop(), !x.compositeRule && l ? x[e(1180)] ? s += " throw new ValidationError([" + ce + e(297) : s += e(1106) + ce + e(1364) : s += e(722) + ce + e(2632);
        } else {
          s += e(1594);
          var ue = R;
          if (ue)
            for (var D, pe = -1, ie = ue[e(2236)] - 1; pe < ie; ) {
              D = ue[pe += 1];
              var F = x[e(2009)][e(1932)](D), H = x[e(2009)][e(1192)](D), z = f + F;
              x[e(2092)][e(2038)] && (x.errorPath = x[e(2009)].getPath(E, D, x.opts[e(2841)])), s += e(504) + z + " === undefined ", N && (s += e(1784) + f + ", '" + x[e(2009)][e(1192)](D) + e(1345)), s += e(1753), x.createErrors !== !1 ? (s += e(1425) + e(2436) + e(1462) + x[e(392)] + e(679) + x[e(2009)][e(1675)](d) + e(2442) + x.util[e(1192)](C) + "', missingProperty: '" + H + "', depsCount: " + R[e(2236)] + e(1807) + x.util[e(1192)](R.length == 1 ? R[0] : R.join(", ")) + e(1835), x[e(2092)].messages !== !1 && (s += e(1688), R[e(2236)] == 1 ? s += e(1037) + x[e(2009)][e(1192)](R[0]) : s += "properties " + x[e(2009)][e(1192)](R.join(", ")), s += " when property " + x[e(2009)].escapeQuotes(C) + e(1051)), x[e(2092)][e(1432)] && (s += e(1189) + u + " , parentSchema: validate.schema" + x[e(1612)] + e(1519) + f + " "), s += e(2740)) : s += e(1967), s += e(1845);
            }
        }
        s += e(1703), l && (m += "}", s += e(167));
      }
    x[e(392)] = E;
    var le = h.baseId;
    for (var C in k) {
      var q = k[C];
      (x[e(2092)].strictKeywords ? typeof q == e(1606) && Object.keys(q)[e(2236)] > 0 || q === !1 : x[e(2009)][e(2627)](q, x[e(844)][e(1087)])) && (s += " " + v + e(2854) + f + x[e(2009)][e(1932)](C) + " !== undefined ", N && (s += e(1832) + f + ", '" + x[e(2009)].escapeQuotes(C) + e(1345)), s += e(2560), h[e(2427)] = q, h.schemaPath = u + x[e(2009)][e(1932)](C), h.errSchemaPath = d + "/" + x[e(2009)].escapeFragment(C), s += "  " + x[e(766)](h) + " ", h[e(676)] = le, s += e(2595), l && (s += " if (" + v + e(2560), m += "}"));
    }
    return l && (s += e(1118) + m + e(2673) + g + e(2483)), s;
  }), pt;
}
var mt, Ia;
function f2() {
  return Ia || (Ia = 1, mt = function(x, t, a) {
    const e = K;
    var s = " ", n = x.level, i = x[e(182)], c = x.schema[t], u = x[e(1612)] + x.util[e(1932)](t), d = x.errSchemaPath + "/" + t, l = !x[e(2092)][e(1347)], f = e(2516) + (i || ""), g = e(996) + n, h = x.opts.$data && c && c[e(436)];
    h && (s += " var schema" + n + e(567) + x[e(2009)][e(586)](c.$data, i, x[e(2686)]) + "; ");
    var m = "i" + n, v = e(2427) + n;
    !h && (s += " var " + v + e(1484) + u + ";"), s += e(1627) + g + ";", h && (s += e(717) + n + " === undefined) " + g + " = true; else if (!Array.isArray(schema" + n + e(1984) + g + " = false; else {"), s += "" + g + e(659) + m + e(933) + m + "<" + v + e(765) + m + "++) if (equal(" + f + ", " + v + "[" + m + e(1044) + g + e(363), h && (s += "  }  "), s += e(634) + g + e(1728);
    var k = k || [];
    k[e(1449)](s), s = "", x[e(1538)] !== !1 ? (s += e(1425) + "enum" + e(1462) + x.errorPath + e(679) + x[e(2009)][e(1675)](d) + e(994) + n + e(2740), x.opts.messages !== !1 && (s += " , message: 'should be equal to one of the allowed values' "), x.opts.verbose && (s += e(1189) + u + e(420) + x[e(1612)] + " , data: " + f + " "), s += e(2740)) : s += e(1967);
    var P = s;
    return s = k[e(1702)](), !x[e(674)] && l ? x[e(1180)] ? s += " throw new ValidationError([" + P + e(297) : s += e(1106) + P + e(1364) : s += e(722) + P + ";  if (vErrors === null) vErrors = [err]; else vErrors.push(err); errors++; ", s += " }", l && (s += e(167)), s;
  }), mt;
}
var bt, Ea;
function h2() {
  return Ea || (Ea = 1, bt = function(x, t, a) {
    const e = K;
    var s = " ", n = x[e(972)], i = x[e(182)], c = x[e(2427)][t], u = x[e(1612)] + x[e(2009)][e(1932)](t), d = x.errSchemaPath + "/" + t, l = !x.opts[e(1347)], f = "data" + (i || "");
    if (x.opts[e(1763)] === !1) return l && (s += e(2424)), s;
    var g = x[e(2092)][e(436)] && c && c[e(436)], h;
    g ? (s += " var schema" + n + " = " + x[e(2009)][e(586)](c[e(436)], i, x.dataPathArr) + "; ", h = e(2427) + n) : h = c;
    var m = x[e(2092)][e(1885)], v = Array[e(2224)](m);
    if (g) {
      var k = e(1763) + n, P = e(1025) + n, N = e(1758) + n;
      s += e(1691) + k + e(374) + h + e(2312) + P + e(1181) + k + " == 'object' && !(" + k + " instanceof RegExp) && " + k + e(1247) + N + e(567) + P + e(142) + k + e(310) + P + e(2560), x[e(1180)] && (s += e(2173) + n + e(567) + k + ".async; "), s += " " + k + e(567) + k + e(1176), g && (s += " (" + h + e(1657) + h + e(2261)), s += " (", m != e(652) && (s += " (" + h + e(1516) + k + " ", v && (s += e(694) + h + e(709)), s += e(658)), s += " (" + k + e(142) + N + " == '" + a + "' && !(typeof " + k + e(1935), x.async ? s += " (async" + n + e(378) + k + "(" + f + e(1713) + k + "(" + f + e(1984) : s += " " + k + "(" + f + ") ", s += e(1174) + k + e(1918) + f + e(1153);
    } else {
      var k = x[e(1148)][c];
      if (!k) {
        if (m == "ignore") return x.logger[e(816)](e(1806) + c + e(2451) + x[e(1786)] + '"'), l && (s += e(2424)), s;
        if (v && m[e(1686)](c) >= 0) return l && (s += e(2424)), s;
        throw new Error(e(1806) + c + e(409) + x[e(1786)] + '"');
      }
      var P = typeof k == e(1606) && !(k instanceof RegExp) && k[e(766)], N = P && k[e(2390)] || "string";
      if (P) {
        var q = k.async === !0;
        k = k.validate;
      }
      if (N != a) return l && (s += e(2424)), s;
      if (q) {
        if (!x[e(1180)]) throw new Error(e(2514));
        var R = e(1148) + x.util[e(1932)](c) + e(1444);
        s += e(2089) + R + "(" + f + e(2108);
      } else {
        s += e(1429);
        var R = "formats" + x[e(2009)].getProperty(c);
        P && (R += e(1444)), typeof k == e(2279) ? s += " " + R + "(" + f + ") " : s += " " + R + ".test(" + f + ") ", s += e(2560);
      }
    }
    var E = E || [];
    E.push(s), s = "", x[e(1538)] !== !1 ? (s += e(1425) + "format" + e(1462) + x[e(392)] + e(679) + x[e(2009)][e(1675)](d) + e(485), g ? s += "" + h : s += "" + x[e(2009)][e(1675)](c), s += e(708), x[e(2092)][e(1855)] !== !1 && (s += e(577), g ? s += e(2023) + h + e(2522) : s += "" + x[e(2009)].escapeQuotes(c), s += e(549)), x[e(2092)][e(1432)] && (s += e(1279), g ? s += e(1391) + u : s += "" + x[e(2009)][e(1675)](c), s += e(1081) + x[e(1612)] + " , data: " + f + " "), s += " } ") : s += " {} ";
    var C = s;
    return s = E[e(1702)](), !x.compositeRule && l ? x[e(1180)] ? s += e(2132) + C + e(297) : s += " validate.errors = [" + C + "]; return false; " : s += e(722) + C + e(2632), s += e(2740), l && (s += e(167)), s;
  }), bt;
}
var gt, Ca;
function K(o, x) {
  return o = o - 134, Nx()[o];
}
function p2() {
  return Ca || (Ca = 1, gt = function(x, t, a) {
    const e = K;
    var s = " ", n = x[e(972)], i = x[e(182)], c = x[e(2427)][t], u = x[e(1612)] + x.util[e(1932)](t), d = x[e(1786)] + "/" + t, l = !x[e(2092)][e(1347)], f = e(2516) + (i || ""), g = "valid" + n, h = e(2464) + n, m = x[e(2009)][e(593)](x);
    m.level++;
    var v = e(996) + m.level, k = x[e(2427)].then, P = x.schema[e(2043)], N = k !== void 0 && (x[e(2092)][e(1137)] ? typeof k == e(1606) && Object[e(460)](k)[e(2236)] > 0 || k === !1 : x[e(2009)][e(2627)](k, x[e(844)][e(1087)])), q = P !== void 0 && (x[e(2092)][e(1137)] ? typeof P == e(1606) && Object[e(460)](P)[e(2236)] > 0 || P === !1 : x[e(2009)][e(2627)](P, x[e(844)].all)), R = m[e(676)];
    if (N || q) {
      var E;
      m[e(1538)] = !1, m[e(2427)] = c, m[e(1612)] = u, m[e(1786)] = d, s += e(1691) + h + e(252) + g + " = true;  ";
      var C = x[e(674)];
      x[e(674)] = m[e(674)] = !0, s += "  " + x[e(766)](m) + " ", m[e(676)] = R, m[e(1538)] = !0, s += "  errors = " + h + "; if (vErrors !== null) { if (" + h + e(2538) + h + e(2605), x[e(674)] = m[e(674)] = C, N ? (s += e(2673) + v + e(1021), m[e(2427)] = x[e(2427)][e(667)], m[e(1612)] = x[e(1612)] + e(1591), m[e(1786)] = x[e(1786)] + e(2138), s += "  " + x.validate(m) + " ", m.baseId = R, s += " " + g + e(567) + v + "; ", N && q ? (E = e(475) + n, s += e(1691) + E + e(2095)) : E = "'then'", s += e(2740), q && (s += " else { ")) : s += e(634) + v + e(2560), q && (m.schema = x[e(2427)][e(2043)], m[e(1612)] = x[e(1612)] + e(2165), m[e(1786)] = x[e(1786)] + e(616), s += "  " + x.validate(m) + " ", m[e(676)] = R, s += " " + g + e(567) + v + "; ", N && q ? (E = e(475) + n, s += e(1691) + E + e(914)) : E = e(1147), s += e(2740)), s += " if (!" + g + ") {   var err =   ", x[e(1538)] !== !1 ? (s += " { keyword: 'if" + e(1462) + x[e(392)] + e(679) + x.util[e(1675)](d) + e(2867) + E + e(2740), x[e(2092)][e(1855)] !== !1 && (s += e(2440) + E + e(547)), x[e(2092)][e(1432)] && (s += e(1189) + u + e(420) + x[e(1612)] + e(1519) + f + " "), s += e(2740)) : s += e(1967), s += e(2632), !x[e(674)] && l && (x[e(1180)] ? s += e(558) : s += e(393)), s += e(1703), l && (s += e(167));
    } else l && (s += e(2424));
    return s;
  }), gt;
}
var yt, Ra;
function m2() {
  return Ra || (Ra = 1, yt = function(x, t, a) {
    const e = K;
    var s = " ", n = x[e(972)], i = x.dataLevel, c = x.schema[t], u = x[e(1612)] + x[e(2009)][e(1932)](t), d = x[e(1786)] + "/" + t, l = !x[e(2092)].allErrors, f = e(2516) + (i || ""), g = e(996) + n, h = e(2464) + n, m = x[e(2009)].copy(x), v = "";
    m[e(972)]++;
    var k = "valid" + m[e(972)], P = "i" + n, N = m[e(182)] = x.dataLevel + 1, q = e(2516) + N, R = x[e(676)];
    if (s += e(1627) + h + e(868) + g + ";", Array[e(2224)](c)) {
      var E = x[e(2427)].additionalItems;
      if (E === !1) {
        s += " " + g + " = " + f + e(1066) + c[e(2236)] + "; ";
        var C = d;
        d = x.errSchemaPath + "/additionalItems", s += "  if (!" + g + ") {   ";
        var A = A || [];
        A.push(s), s = "", x[e(1538)] !== !1 ? (s += " { keyword: '" + e(2712) + e(1462) + x[e(392)] + " , schemaPath: " + x[e(2009)][e(1675)](d) + e(2131) + c[e(2236)] + " } ", x[e(2092)][e(1855)] !== !1 && (s += " , message: 'should NOT have more than " + c[e(2236)] + e(1402)), x.opts.verbose && (s += e(160) + x[e(1612)] + e(1519) + f + " "), s += e(2740)) : s += e(1967);
        var D = s;
        s = A[e(1702)](), !x[e(674)] && l ? x[e(1180)] ? s += e(2132) + D + e(297) : s += " validate.errors = [" + D + "]; return false; " : s += e(722) + D + e(2632), s += e(2740), d = C, l && (v += "}", s += " else { ");
      }
      var M = c;
      if (M) {
        for (var _, F = -1, z = M[e(2236)] - 1; F < z; )
          if (_ = M[F += 1], x[e(2092)][e(1137)] ? typeof _ == e(1606) && Object[e(460)](_)[e(2236)] > 0 || _ === !1 : x.util[e(2627)](_, x[e(844)][e(1087)])) {
            s += " " + k + e(1592) + f + ".length > " + F + ") { ";
            var $ = f + "[" + F + "]";
            m.schema = _, m.schemaPath = u + "[" + F + "]", m.errSchemaPath = d + "/" + F, m[e(392)] = x[e(2009)][e(1492)](x.errorPath, F, x.opts[e(2841)], !0), m[e(2686)][N] = F;
            var H = x[e(766)](m);
            m[e(676)] = R, x[e(2009)].varOccurences(H, q) < 2 ? s += " " + x[e(2009)][e(1039)](H, q, $) + " " : s += e(1691) + q + " = " + $ + "; " + H + " ", s += e(2595), l && (s += e(2673) + k + e(2560), v += "}");
          }
      }
      if (typeof E == e(1606) && (x[e(2092)][e(1137)] ? typeof E == e(1606) && Object[e(460)](E)[e(2236)] > 0 || E === !1 : x[e(2009)][e(2627)](E, x.RULES[e(1087)]))) {
        m[e(2427)] = E, m[e(1612)] = x[e(1612)] + ".additionalItems", m[e(1786)] = x.errSchemaPath + e(762), s += " " + k + " = true; if (" + f + ".length > " + c[e(2236)] + e(791) + P + e(567) + c[e(2236)] + "; " + P + e(1491) + f + ".length; " + P + e(2142), m[e(392)] = x[e(2009)][e(1492)](x[e(392)], P, x[e(2092)][e(2841)], !0);
        var $ = f + "[" + P + "]";
        m[e(2686)][N] = P;
        var H = x[e(766)](m);
        m[e(676)] = R, x[e(2009)][e(1260)](H, q) < 2 ? s += " " + x[e(2009)][e(1039)](H, q, $) + " " : s += e(1691) + q + e(567) + $ + "; " + H + " ", l && (s += e(634) + k + e(1850)), s += e(2044), l && (s += " if (" + k + ") { ", v += "}");
      }
    } else if (x[e(2092)][e(1137)] ? typeof c == e(1606) && Object[e(460)](c).length > 0 || c === !1 : x[e(2009)][e(2627)](c, x[e(844)].all)) {
      m[e(2427)] = c, m[e(1612)] = u, m[e(1786)] = d, s += "  for (var " + P + " = 0; " + P + e(1491) + f + ".length; " + P + "++) { ", m[e(392)] = x.util.getPathExpr(x.errorPath, P, x[e(2092)][e(2841)], !0);
      var $ = f + "[" + P + "]";
      m[e(2686)][N] = P;
      var H = x[e(766)](m);
      m[e(676)] = R, x.util.varOccurences(H, q) < 2 ? s += " " + x[e(2009)][e(1039)](H, q, $) + " " : s += e(1691) + q + e(567) + $ + "; " + H + " ", l && (s += " if (!" + k + e(1850)), s += " }";
    }
    return l && (s += " " + v + " if (" + h + " == errors) {"), s;
  }), yt;
}
var vt, _a;
function Fa() {
  return _a || (_a = 1, vt = function(x, t, a) {
    const e = K;
    var s = " ", n = x[e(972)], i = x[e(182)], c = x[e(2427)][t], u = x[e(1612)] + x.util[e(1932)](t), d = x.errSchemaPath + "/" + t, l = !x[e(2092)][e(1347)], R, f = e(2516) + (i || ""), g = x[e(2092)][e(436)] && c && c[e(436)], h;
    g ? (s += e(2612) + n + e(567) + x.util[e(586)](c[e(436)], i, x[e(2686)]) + "; ", h = e(2427) + n) : h = c;
    var m = t == "maximum", v = e(m ? 1268 : 542), k = x.schema[v], P = x[e(2092)][e(436)] && k && k[e(436)], N = m ? "<" : ">", q = m ? ">" : "<", R = void 0;
    if (!(g || typeof c == e(1142) || c === void 0)) throw new Error(t + e(725));
    if (!(P || k === void 0 || typeof k == e(1142) || typeof k == e(2727))) throw new Error(v + e(950));
    if (P) {
      var E = x[e(2009)].getData(k.$data, i, x[e(2686)]), C = e(1803) + n, A = "exclType" + n, D = e(1413) + n, M = "op" + n, _ = e(2023) + M + " + '";
      s += e(1288) + n + e(567) + E + "; ", E = e(706) + n, s += e(1691) + C + "; var " + A + e(1181) + E + "; if (" + A + e(823) + A + e(643) + A + e(2635);
      var R = v, F = F || [];
      F[e(1449)](s), s = "", x[e(1538)] !== !1 ? (s += e(1425) + (R || e(1607)) + e(1462) + x[e(392)] + e(679) + x[e(2009)][e(1675)](d) + e(556), x[e(2092)].messages !== !1 && (s += e(1421) + v + e(263)), x[e(2092)][e(1432)] && (s += " , schema: validate.schema" + u + e(420) + x[e(1612)] + e(1519) + f + " "), s += e(2740)) : s += e(1967);
      var z = s;
      s = F[e(1702)](), !x[e(674)] && l ? x[e(1180)] ? s += " throw new ValidationError([" + z + "]); " : s += e(1106) + z + e(1364) : s += " var err = " + z + e(2632), s += e(1859), g && (s += " (" + h + e(1657) + h + e(304)), s += " " + A + e(2591) + C + e(567) + h + " === undefined || " + E + " " + N + "= " + h + e(867) + f + " " + q + "= " + E + e(1174) + f + " " + q + " " + h + e(2787) + C + " = " + E + e(1821) + f + " " + q + "= " + h + e(1174) + f + " " + q + " " + h + e(2093) + f + e(1389) + f + e(2857) + n + " = " + C + " ? '" + N + e(2855) + N + e(2210), c === void 0 && (R = v, d = x[e(1786)] + "/" + v, h = E, g = P);
    } else {
      var D = typeof k == e(1142), _ = N;
      if (D && g) {
        var M = "'" + _ + "'";
        s += e(504), g && (s += " (" + h + e(1657) + h + e(304)), s += " ( " + h + e(385) + k + " " + N + "= " + h + e(1079) + f + " " + q + "= " + k + e(1174) + f + " " + q + " " + h + e(2093) + f + e(1389) + f + e(2560);
      } else {
        D && c === void 0 ? (C = !0, R = v, d = x[e(1786)] + "/" + v, h = k, q += "=") : (D && (h = Math[m ? e(2191) : "max"](k, c)), k === (D ? h : !0) ? (C = !0, R = v, d = x[e(1786)] + "/" + v, q += "=") : (C = !1, _ += "="));
        var M = "'" + _ + "'";
        s += e(504), g && (s += " (" + h + e(1657) + h + e(304)), s += " " + f + " " + q + " " + h + e(1603) + f + e(1389) + f + e(2560);
      }
    }
    R = R || t;
    var F = F || [];
    F[e(1449)](s), s = "", x.createErrors !== !1 ? (s += e(1425) + (R || e(1365)) + e(1462) + x[e(392)] + e(679) + x[e(2009)][e(1675)](d) + e(1842) + M + ", limit: " + h + ", exclusive: " + C + e(2740), x[e(2092)][e(1855)] !== !1 && (s += " , message: 'should be " + _ + " ", g ? s += "' + " + h : s += "" + h + "'"), x[e(2092)].verbose && (s += e(1279), g ? s += e(1391) + u : s += "" + c, s += e(1081) + x[e(1612)] + e(1519) + f + " "), s += e(2740)) : s += " {} ";
    var z = s;
    return s = F[e(1702)](), !x.compositeRule && l ? x[e(1180)] ? s += " throw new ValidationError([" + z + e(297) : s += e(1106) + z + e(1364) : s += e(722) + z + e(2632), s += e(2740), l && (s += e(167)), s;
  }), vt;
}
var wt, Na;
function Ta() {
  return Na || (Na = 1, wt = function(x, t, a) {
    const e = K;
    var s = " ", n = x[e(972)], i = x[e(182)], c = x[e(2427)][t], u = x[e(1612)] + x[e(2009)][e(1932)](t), d = x.errSchemaPath + "/" + t, l = !x[e(2092)][e(1347)], v, f = "data" + (i || ""), g = x.opts.$data && c && c.$data, h;
    if (g ? (s += e(2612) + n + e(567) + x[e(2009)][e(586)](c[e(436)], i, x[e(2686)]) + "; ", h = e(2427) + n) : h = c, !(g || typeof c == e(1142))) throw new Error(t + e(725));
    var m = t == e(786) ? ">" : "<";
    s += e(973), g && (s += " (" + h + e(1657) + h + e(304)), s += " " + f + e(1557) + m + " " + h + e(2560);
    var v = t, k = k || [];
    k[e(1449)](s), s = "", x[e(1538)] !== !1 ? (s += e(1425) + (v || e(357)) + e(1462) + x[e(392)] + " , schemaPath: " + x[e(2009)][e(1675)](d) + e(2131) + h + e(2740), x[e(2092)][e(1855)] !== !1 && (s += " , message: 'should NOT have ", t == e(786) ? s += e(2354) : s += "fewer", s += e(2719), g ? s += e(2023) + h + e(2522) : s += "" + c, s += " items' "), x.opts.verbose && (s += e(1279), g ? s += "validate.schema" + u : s += "" + c, s += e(1081) + x.schemaPath + " , data: " + f + " "), s += e(2740)) : s += " {} ";
    var P = s;
    return s = k[e(1702)](), !x[e(674)] && l ? x[e(1180)] ? s += e(2132) + P + e(297) : s += " validate.errors = [" + P + "]; return false; " : s += " var err = " + P + e(2632), s += "} ", l && (s += e(167)), s;
  }), wt;
}
var St, qa;
function Aa() {
  return qa || (qa = 1, St = function(x, t, a) {
    const e = K;
    var s = " ", n = x[e(972)], i = x[e(182)], c = x[e(2427)][t], u = x[e(1612)] + x[e(2009)].getProperty(t), d = x.errSchemaPath + "/" + t, l = !x[e(2092)][e(1347)], v, f = e(2516) + (i || ""), g = x[e(2092)].$data && c && c[e(436)], h;
    if (g ? (s += e(2612) + n + " = " + x[e(2009)][e(586)](c[e(436)], i, x[e(2686)]) + "; ", h = e(2427) + n) : h = c, !(g || typeof c == e(1142))) throw new Error(t + " must be number");
    var m = t == e(696) ? ">" : "<";
    s += e(973), g && (s += " (" + h + e(1657) + h + e(304)), x[e(2092)][e(1645)] === !1 ? s += " " + f + ".length " : s += e(730) + f + ") ", s += " " + m + " " + h + e(2560);
    var v = t, k = k || [];
    k[e(1449)](s), s = "", x[e(1538)] !== !1 ? (s += e(1425) + (v || e(1813)) + "' , dataPath: (dataPath || '') + " + x[e(392)] + " , schemaPath: " + x[e(2009)][e(1675)](d) + e(2131) + h + " } ", x[e(2092)][e(1855)] !== !1 && (s += e(2645), t == e(696) ? s += e(1092) : s += e(1138), s += e(2719), g ? s += e(2023) + h + e(2522) : s += "" + c, s += e(342)), x.opts[e(1432)] && (s += e(1279), g ? s += e(1391) + u : s += "" + c, s += e(1081) + x[e(1612)] + e(1519) + f + " "), s += e(2740)) : s += " {} ";
    var P = s;
    return s = k[e(1702)](), !x[e(674)] && l ? x[e(1180)] ? s += e(2132) + P + "]); " : s += e(1106) + P + "]; return false; " : s += e(722) + P + e(2632), s += "} ", l && (s += e(167)), s;
  }), St;
}
var kt, Oa;
function Da() {
  return Oa || (Oa = 1, kt = function(x, t, a) {
    const e = K;
    var s = " ", n = x[e(972)], i = x.dataLevel, c = x[e(2427)][t], u = x[e(1612)] + x[e(2009)].getProperty(t), d = x[e(1786)] + "/" + t, l = !x[e(2092)][e(1347)], v, f = e(2516) + (i || ""), g = x[e(2092)][e(436)] && c && c[e(436)], h;
    if (g ? (s += " var schema" + n + " = " + x[e(2009)].getData(c[e(436)], i, x[e(2686)]) + "; ", h = e(2427) + n) : h = c, !(g || typeof c == "number")) throw new Error(t + e(725));
    var m = t == e(1812) ? ">" : "<";
    s += e(973), g && (s += " (" + h + e(1657) + h + e(304)), s += e(1954) + f + ").length " + m + " " + h + e(2560);
    var v = t, k = k || [];
    k.push(s), s = "", x[e(1538)] !== !1 ? (s += " { keyword: '" + (v || e(1369)) + e(1462) + x[e(392)] + e(679) + x[e(2009)].toQuotedString(d) + " , params: { limit: " + h + " } ", x[e(2092)][e(1855)] !== !1 && (s += " , message: 'should NOT have ", t == e(1812) ? s += e(2354) : s += e(1638), s += e(2719), g ? s += "' + " + h + " + '" : s += "" + c, s += " properties' "), x[e(2092)][e(1432)] && (s += e(1279), g ? s += e(1391) + u : s += "" + c, s += e(1081) + x[e(1612)] + " , data: " + f + " "), s += e(2740)) : s += e(1967);
    var P = s;
    return s = k[e(1702)](), !x[e(674)] && l ? x.async ? s += e(2132) + P + "]); " : s += e(1106) + P + e(1364) : s += e(722) + P + e(2632), s += "} ", l && (s += e(167)), s;
  }), kt;
}
var Pt, ja;
function b2() {
  return ja || (ja = 1, Pt = function(x, t, a) {
    const e = K;
    var s = " ", n = x[e(972)], i = x[e(182)], c = x[e(2427)][t], u = x[e(1612)] + x.util[e(1932)](t), d = x[e(1786)] + "/" + t, l = !x[e(2092)].allErrors, f = e(2516) + (i || ""), g = x[e(2092)].$data && c && c[e(436)], h;
    if (g ? (s += e(2612) + n + " = " + x.util.getData(c.$data, i, x[e(2686)]) + "; ", h = e(2427) + n) : h = c, !(g || typeof c == "number")) throw new Error(t + e(725));
    s += e(2897) + n + e(446), g && (s += " " + h + e(2694) + h + e(2153)), s += " (division" + n + e(567) + f + e(1837) + h + ", ", x[e(2092)][e(2473)] ? s += e(2372) + n + e(1959) + n + ") > 1e-" + x.opts.multipleOfPrecision + " " : s += e(1212) + n + e(2904) + n + ") ", s += e(2254), g && (s += "  )  "), s += e(144);
    var m = m || [];
    m.push(s), s = "", x[e(1538)] !== !1 ? (s += e(1425) + e(948) + e(1462) + x.errorPath + e(679) + x.util.toQuotedString(d) + e(2170) + h + e(2740), x[e(2092)].messages !== !1 && (s += e(620), g ? s += e(2023) + h : s += "" + h + "'"), x[e(2092)][e(1432)] && (s += " , schema:  ", g ? s += e(1391) + u : s += "" + c, s += e(1081) + x[e(1612)] + e(1519) + f + " "), s += e(2740)) : s += " {} ";
    var v = s;
    return s = m[e(1702)](), !x[e(674)] && l ? x.async ? s += e(2132) + v + e(297) : s += " validate.errors = [" + v + "]; return false; " : s += e(722) + v + e(2632), s += "} ", l && (s += " else { "), s;
  }), Pt;
}
var It, Ma;
function g2() {
  return Ma || (Ma = 1, It = function(x, t, a) {
    const e = K;
    var s = " ", n = x[e(972)], i = x.dataLevel, c = x[e(2427)][t], u = x[e(1612)] + x.util[e(1932)](t), d = x.errSchemaPath + "/" + t, l = !x.opts[e(1347)], f = e(2516) + (i || ""), g = "errs__" + n, h = x[e(2009)][e(593)](x);
    h[e(972)]++;
    var m = e(996) + h.level;
    if (x[e(2092)][e(1137)] ? typeof c == e(1606) && Object[e(460)](c)[e(2236)] > 0 || c === !1 : x[e(2009)][e(2627)](c, x[e(844)][e(1087)])) {
      h.schema = c, h[e(1612)] = u, h[e(1786)] = d, s += e(1691) + g + e(1537);
      var v = x.compositeRule;
      x[e(674)] = h[e(674)] = !0, h[e(1538)] = !1;
      var k;
      h.opts[e(1347)] && (k = h[e(2092)].allErrors, h[e(2092)][e(1347)] = !1), s += " " + x[e(766)](h) + " ", h.createErrors = !0, k && (h[e(2092)][e(1347)] = k), x[e(674)] = h[e(674)] = v, s += e(2673) + m + ") {   ";
      var P = P || [];
      P[e(1449)](s), s = "", x.createErrors !== !1 ? (s += " { keyword: '" + e(2136) + e(1462) + x[e(392)] + e(679) + x.util[e(1675)](d) + " , params: {} ", x.opts[e(1855)] !== !1 && (s += e(2495)), x[e(2092)][e(1432)] && (s += e(1189) + u + " , parentSchema: validate.schema" + x[e(1612)] + " , data: " + f + " "), s += e(2740)) : s += e(1967);
      var N = s;
      s = P[e(1702)](), !x[e(674)] && l ? x[e(1180)] ? s += e(2132) + N + "]); " : s += e(1106) + N + e(1364) : s += e(722) + N + ";  if (vErrors === null) vErrors = [err]; else vErrors.push(err); errors++; ", s += e(1303) + g + e(1841) + g + e(2538) + g + "; else vErrors = null; } ", x[e(2092)][e(1347)] && (s += e(2740));
    } else s += e(1626), x.createErrors !== !1 ? (s += " { keyword: '" + e(2136) + e(1462) + x[e(392)] + e(679) + x[e(2009)].toQuotedString(d) + e(556), x.opts[e(1855)] !== !1 && (s += e(2495)), x[e(2092)][e(1432)] && (s += e(1189) + u + " , parentSchema: validate.schema" + x[e(1612)] + e(1519) + f + " "), s += e(2740)) : s += " {} ", s += ";  if (vErrors === null) vErrors = [err]; else vErrors.push(err); errors++; ", l && (s += " if (false) { ");
    return s;
  }), It;
}
var Et, La;
function y2() {
  return La || (La = 1, Et = function(x, t, a) {
    const e = K;
    var s = " ", n = x.level, i = x[e(182)], c = x[e(2427)][t], u = x[e(1612)] + x.util[e(1932)](t), d = x[e(1786)] + "/" + t, l = !x[e(2092)][e(1347)], f = e(2516) + (i || ""), g = e(996) + n, h = e(2464) + n, m = x[e(2009)].copy(x), v = "";
    m[e(972)]++;
    var k = e(996) + m.level, P = m[e(676)], N = e(1286) + n, q = e(1545) + n;
    s += e(1627) + h + e(2554) + N + " = false , " + g + e(864) + q + e(1955);
    var R = x[e(674)];
    x[e(674)] = m[e(674)] = !0;
    var E = c;
    if (E)
      for (var C, A = -1, D = E[e(2236)] - 1; A < D; )
        C = E[A += 1], (x.opts[e(1137)] ? typeof C == e(1606) && Object[e(460)](C)[e(2236)] > 0 || C === !1 : x[e(2009)][e(2627)](C, x[e(844)][e(1087)])) ? (m.schema = C, m[e(1612)] = u + "[" + A + "]", m[e(1786)] = d + "/" + A, s += "  " + x[e(766)](m) + " ", m[e(676)] = P) : s += " var " + k + e(2551), A && (s += e(2673) + k + e(142) + N + e(2560) + g + e(2103) + q + e(350) + q + ", " + A + e(2040), v += "}"), s += e(2673) + k + e(2560) + g + e(567) + N + " = true; " + q + " = " + A + e(1843);
    return x[e(674)] = m[e(674)] = R, s += "" + v + e(573) + g + e(422), x[e(1538)] !== !1 ? (s += e(1425) + "oneOf" + e(1462) + x.errorPath + e(679) + x.util[e(1675)](d) + e(496) + q + e(2740), x[e(2092)].messages !== !1 && (s += e(2443)), x[e(2092)][e(1432)] && (s += e(1189) + u + e(420) + x.schemaPath + e(1519) + f + " "), s += e(2740)) : s += " {} ", s += ";  if (vErrors === null) vErrors = [err]; else vErrors.push(err); errors++; ", !x[e(674)] && l && (x[e(1180)] ? s += e(558) : s += e(393)), s += e(745) + h + "; if (vErrors !== null) { if (" + h + e(2538) + h + "; else vErrors = null; }", x[e(2092)].allErrors && (s += " } "), s;
  }), Et;
}
var Ct, $a;
function v2() {
  return $a || ($a = 1, Ct = function(x, t, a) {
    const e = K;
    var s = " ", n = x[e(972)], i = x[e(182)], c = x[e(2427)][t], u = x[e(1612)] + x[e(2009)].getProperty(t), d = x[e(1786)] + "/" + t, l = !x[e(2092)][e(1347)], f = e(2516) + (i || ""), g = x[e(2092)][e(436)] && c && c[e(436)], h;
    g ? (s += " var schema" + n + e(567) + x[e(2009)][e(586)](c.$data, i, x[e(2686)]) + "; ", h = e(2427) + n) : h = c;
    var m = g ? e(2110) + h + "))" : x.usePattern(c);
    s += "if ( ", g && (s += " (" + h + e(1657) + h + e(2261)), s += " !" + m + ".test(" + f + ") ) {   ";
    var v = v || [];
    v.push(s), s = "", x[e(1538)] !== !1 ? (s += " { keyword: '" + e(1216) + "' , dataPath: (dataPath || '') + " + x[e(392)] + " , schemaPath: " + x.util[e(1675)](d) + e(2665), g ? s += "" + h : s += "" + x[e(2009)][e(1675)](c), s += e(708), x.opts[e(1855)] !== !1 && (s += e(1740), g ? s += e(2023) + h + e(2522) : s += "" + x[e(2009)][e(1192)](c), s += `"' `), x[e(2092)][e(1432)] && (s += " , schema:  ", g ? s += e(1391) + u : s += "" + x[e(2009)][e(1675)](c), s += e(1081) + x[e(1612)] + e(1519) + f + " "), s += e(2740)) : s += e(1967);
    var k = s;
    return s = v.pop(), !x[e(674)] && l ? x[e(1180)] ? s += e(2132) + k + e(297) : s += " validate.errors = [" + k + "]; return false; " : s += e(722) + k + e(2632), s += "} ", l && (s += " else { "), s;
  }), Ct;
}
var Rt, Ua;
function w2() {
  return Ua || (Ua = 1, Rt = function(x, t, a) {
    const e = K;
    var s = " ", n = x[e(972)], i = x[e(182)], c = x[e(2427)][t], u = x[e(1612)] + x[e(2009)][e(1932)](t), d = x[e(1786)] + "/" + t, l = !x[e(2092)][e(1347)], f = "data" + (i || ""), g = e(2464) + n, h = x[e(2009)][e(593)](x), m = "";
    h.level++;
    var v = e(996) + h[e(972)], k = "key" + n, P = "idx" + n, N = h[e(182)] = x.dataLevel + 1, q = "data" + N, R = e(851) + n, E = Object.keys(c || {})[e(1665)](pe), C = x[e(2427)][e(1547)] || {}, A = Object[e(460)](C)[e(1665)](pe), D = x[e(2427)][e(1923)], M = E[e(2236)] || A[e(2236)], _ = D === !1, F = typeof D == "object" && Object.keys(D).length, z = x[e(2092)].removeAdditional, $ = _ || F || z, H = x[e(2092)][e(1415)], G = x[e(676)], ce = x[e(2427)][e(483)];
    if (ce && !(x[e(2092)][e(436)] && ce[e(436)]) && ce[e(2236)] < x[e(2092)][e(2761)]) var ue = x[e(2009)][e(2715)](ce);
    function pe(Lx) {
      return Lx !== e(1934);
    }
    if (s += e(1627) + g + " = errors;var " + v + " = true;", H && (s += e(1691) + R + e(2785)), $) {
      if (H ? s += " " + R + e(567) + R + e(757) + f + e(2771) + P + e(933) + P + "<" + R + e(765) + P + e(846) + k + " = " + R + "[" + P + "]; " : s += e(2028) + k + e(2903) + f + e(2560), M) {
        if (s += e(565) + n + " = !(false ", E[e(2236)])
          if (E.length > 8) s += e(566) + u + e(2506) + k + ") ";
          else {
            var ie = E;
            if (ie)
              for (var le, Pe = -1, ye = ie[e(2236)] - 1; Pe < ye; )
                le = ie[Pe += 1], s += e(1603) + k + e(740) + x[e(2009)][e(1675)](le) + " ";
          }
        if (A[e(2236)]) {
          var Me = A;
          if (Me)
            for (var Te, Xe = -1, O = Me[e(2236)] - 1; Xe < O; )
              Te = Me[Xe += 1], s += e(1603) + x[e(1581)](Te) + ".test(" + k + ") ";
        }
        s += e(1230) + n + e(2560);
      }
      if (z == e(1087)) s += e(314) + f + "[" + k + e(251);
      else {
        var T = x[e(392)], j = e(2023) + k + e(2522);
        if (x[e(2092)]._errorDataPathProperty && (x[e(392)] = x.util[e(1492)](x[e(392)], k, x.opts[e(2841)])), _)
          if (z) s += e(314) + f + "[" + k + "]; ";
          else {
            s += " " + v + e(2103);
            var J = d;
            d = x.errSchemaPath + e(2088);
            var Y = Y || [];
            Y[e(1449)](s), s = "", x[e(1538)] !== !1 ? (s += e(1425) + e(1923) + e(1462) + x[e(392)] + e(679) + x.util[e(1675)](d) + e(1096) + j + e(1835), x[e(2092)][e(1855)] !== !1 && (s += e(1421), x[e(2092)]._errorDataPathProperty ? s += e(1976) : s += e(287), s += "' "), x[e(2092)][e(1432)] && (s += e(160) + x[e(1612)] + e(1519) + f + " "), s += e(2740)) : s += e(1967);
            var V = s;
            s = Y[e(1702)](), !x[e(674)] && l ? x.async ? s += e(2132) + V + e(297) : s += e(1106) + V + e(1364) : s += e(722) + V + e(2632), d = J, l && (s += e(1403));
          }
        else if (F)
          if (z == e(164)) {
            s += e(1691) + g + e(1537);
            var X = x[e(674)];
            x[e(674)] = h[e(674)] = !0, h.schema = D, h[e(1612)] = x[e(1612)] + e(606), h[e(1786)] = x[e(1786)] + e(2088), h[e(392)] = x[e(2092)]._errorDataPathProperty ? x.errorPath : x[e(2009)].getPathExpr(x[e(392)], k, x.opts[e(2841)]);
            var oe = f + "[" + k + "]";
            h[e(2686)][N] = k;
            var se = x[e(766)](h);
            h[e(676)] = G, x[e(2009)][e(1260)](se, q) < 2 ? s += " " + x[e(2009)][e(1039)](se, q, oe) + " " : s += e(1691) + q + e(567) + oe + "; " + se + " ", s += e(634) + v + e(1431) + g + e(486) + f + "[" + k + "]; }  ", x[e(674)] = h[e(674)] = X;
          } else {
            h[e(2427)] = D, h[e(1612)] = x[e(1612)] + ".additionalProperties", h[e(1786)] = x[e(1786)] + e(2088), h.errorPath = x[e(2092)][e(2038)] ? x[e(392)] : x.util.getPathExpr(x.errorPath, k, x[e(2092)][e(2841)]);
            var oe = f + "[" + k + "]";
            h[e(2686)][N] = k;
            var se = x[e(766)](h);
            h[e(676)] = G, x[e(2009)].varOccurences(se, q) < 2 ? s += " " + x[e(2009)][e(1039)](se, q, oe) + " " : s += e(1691) + q + e(567) + oe + "; " + se + " ", l && (s += " if (!" + v + ") break; ");
          }
        x.errorPath = T;
      }
      M && (s += e(2740)), s += e(2595), l && (s += e(2673) + v + ") { ", m += "}");
    }
    var te = x[e(2092)][e(1897)] && !x[e(674)];
    if (E[e(2236)]) {
      var Le = E;
      if (Le)
        for (var le, Ae = -1, ze = Le[e(2236)] - 1; Ae < ze; ) {
          le = Le[Ae += 1];
          var ke = c[le];
          if (x.opts[e(1137)] ? typeof ke == e(1606) && Object[e(460)](ke).length > 0 || ke === !1 : x.util.schemaHasRules(ke, x.RULES.all)) {
            var Ge = x.util[e(1932)](le), oe = f + Ge, n0 = te && ke[e(1770)] !== void 0;
            h[e(2427)] = ke, h[e(1612)] = u + Ge, h.errSchemaPath = d + "/" + x[e(2009)][e(897)](le), h[e(392)] = x[e(2009)][e(268)](x[e(392)], le, x[e(2092)][e(2841)]), h.dataPathArr[N] = x[e(2009)][e(1675)](le);
            var se = x[e(766)](h);
            if (h[e(676)] = G, x[e(2009)][e(1260)](se, q) < 2) {
              se = x[e(2009)][e(1039)](se, q, oe);
              var Je = oe;
            } else {
              var Je = q;
              s += e(1691) + q + e(567) + oe + "; ";
            }
            if (n0) s += " " + se + " ";
            else {
              if (ue && ue[le]) {
                s += e(504) + Je + e(332), H && (s += e(1784) + f + e(221) + x[e(2009)][e(1192)](le) + "') "), s += e(2560) + v + e(2103);
                var T = x[e(392)], J = d, Oe = x.util[e(1192)](le);
                x[e(2092)][e(2038)] && (x[e(392)] = x[e(2009)][e(268)](T, le, x[e(2092)][e(2841)])), d = x[e(1786)] + e(1197);
                var Y = Y || [];
                Y[e(1449)](s), s = "", x[e(1538)] !== !1 ? (s += " { keyword: 'required" + e(1462) + x.errorPath + e(679) + x[e(2009)].toQuotedString(d) + e(626) + Oe + e(1835), x[e(2092)][e(1855)] !== !1 && (s += e(1421), x.opts[e(2038)] ? s += "is a required property" : s += "should have required property \\'" + Oe + "\\'", s += "' "), x[e(2092)][e(1432)] && (s += " , schema: validate.schema" + u + e(420) + x[e(1612)] + e(1519) + f + " "), s += e(2740)) : s += e(1967);
                var V = s;
                s = Y[e(1702)](), !x[e(674)] && l ? x[e(1180)] ? s += e(2132) + V + e(297) : s += e(1106) + V + e(1364) : s += e(722) + V + e(2632), d = J, x[e(392)] = T, s += e(386);
              } else l ? (s += e(504) + Je + e(332), H && (s += e(1784) + f + e(221) + x[e(2009)][e(1192)](le) + "') "), s += e(2560) + v + e(512)) : (s += e(2673) + Je + e(682), H && (s += " &&   Object.prototype.hasOwnProperty.call(" + f + ", '" + x[e(2009)][e(1192)](le) + e(1345)), s += " ) { ");
              s += " " + se + " } ";
            }
          }
          l && (s += " if (" + v + e(2560), m += "}");
        }
    }
    if (A[e(2236)]) {
      var He = A;
      if (He)
        for (var Te, Ye = -1, N0 = He[e(2236)] - 1; Ye < N0; ) {
          Te = He[Ye += 1];
          var ke = C[Te];
          if (x[e(2092)][e(1137)] ? typeof ke == e(1606) && Object[e(460)](ke)[e(2236)] > 0 || ke === !1 : x[e(2009)][e(2627)](ke, x[e(844)][e(1087)])) {
            h.schema = ke, h.schemaPath = x[e(1612)] + e(2537) + x[e(2009)][e(1932)](Te), h[e(1786)] = x[e(1786)] + "/patternProperties/" + x.util[e(897)](Te), H ? s += " " + R + " = " + R + e(757) + f + e(2771) + P + e(933) + P + "<" + R + e(765) + P + e(846) + k + e(567) + R + "[" + P + e(251) : s += e(2028) + k + e(2903) + f + e(2560), s += e(2673) + x.usePattern(Te) + e(1918) + k + ")) { ", h[e(392)] = x[e(2009)][e(1492)](x[e(392)], k, x[e(2092)].jsonPointers);
            var oe = f + "[" + k + "]";
            h[e(2686)][N] = k;
            var se = x.validate(h);
            h[e(676)] = G, x[e(2009)].varOccurences(se, q) < 2 ? s += " " + x[e(2009)][e(1039)](se, q, oe) + " " : s += e(1691) + q + e(567) + oe + "; " + se + " ", l && (s += " if (!" + v + e(1850)), s += e(2740), l && (s += " else " + v + e(2551)), s += e(2595), l && (s += e(2673) + v + e(2560), m += "}");
          }
        }
    }
    return l && (s += " " + m + e(2673) + g + e(2483)), s;
  }), Rt;
}
var _t, za;
function S2() {
  return za || (za = 1, _t = function(x, t, a) {
    const e = K;
    var s = " ", n = x[e(972)], i = x[e(182)], c = x[e(2427)][t], u = x.schemaPath + x[e(2009)][e(1932)](t), d = x[e(1786)] + "/" + t, l = !x[e(2092)].allErrors, f = e(2516) + (i || ""), g = e(2464) + n, h = x[e(2009)].copy(x), m = "";
    h[e(972)]++;
    var v = "valid" + h[e(972)];
    if (s += e(1627) + g + e(977), x[e(2092)][e(1137)] ? typeof c == e(1606) && Object[e(460)](c)[e(2236)] > 0 || c === !1 : x[e(2009)][e(2627)](c, x[e(844)][e(1087)])) {
      h[e(2427)] = c, h.schemaPath = u, h.errSchemaPath = d;
      var k = e(1411) + n, P = e(140) + n, N = "i" + n, q = e(2023) + k + " + '", R = h[e(182)] = x[e(182)] + 1, E = "data" + R, C = e(851) + n, A = x[e(2092)].ownProperties, D = x[e(676)];
      A && (s += " var " + C + e(2346)), A ? s += " " + C + " = " + C + e(757) + f + e(2771) + P + e(933) + P + "<" + C + e(765) + P + e(846) + k + e(567) + C + "[" + P + e(251) : s += e(2028) + k + e(2903) + f + e(2560), s += e(1819) + n + " = errors; ";
      var M = k, _ = x[e(674)];
      x.compositeRule = h.compositeRule = !0;
      var F = x[e(766)](h);
      h[e(676)] = D, x[e(2009)][e(1260)](F, E) < 2 ? s += " " + x[e(2009)][e(1039)](F, E, M) + " " : s += " var " + E + " = " + M + "; " + F + " ", x[e(674)] = h[e(674)] = _, s += e(634) + v + ") { for (var " + N + e(1261) + n + "; " + N + "<errors; " + N + e(1008) + N + e(713) + k + "; }   var err =   ", x[e(1538)] !== !1 ? (s += " { keyword: '" + e(484) + e(1462) + x[e(392)] + " , schemaPath: " + x[e(2009)][e(1675)](d) + e(2301) + q + e(1835), x[e(2092)][e(1855)] !== !1 && (s += e(480) + q + e(2422)), x.opts[e(1432)] && (s += " , schema: validate.schema" + u + e(420) + x[e(1612)] + e(1519) + f + " "), s += e(2740)) : s += " {} ", s += e(2632), !x[e(674)] && l && (x[e(1180)] ? s += e(558) : s += " validate.errors = vErrors; return false; "), l && (s += e(1403)), s += e(727);
    }
    return l && (s += " " + m + e(2673) + g + e(2483)), s;
  }), _t;
}
var Ft, Ha;
function k2() {
  return Ha || (Ha = 1, Ft = function(x, t, a) {
    const e = K;
    var s = " ", n = x[e(972)], i = x[e(182)], c = x[e(2427)][t], u = x[e(1612)] + x.util[e(1932)](t), d = x[e(1786)] + "/" + t, l = !x[e(2092)][e(1347)], f = e(2516) + (i || ""), g = e(996) + n, h = x[e(2092)][e(436)] && c && c[e(436)];
    h && (s += e(2612) + n + e(567) + x[e(2009)][e(586)](c[e(436)], i, x[e(2686)]) + "; ");
    var m = e(2427) + n;
    if (!h)
      if (c[e(2236)] < x[e(2092)][e(2761)] && x[e(2427)][e(629)] && Object[e(460)](x[e(2427)][e(629)])[e(2236)]) {
        var R = [], v = c;
        if (v)
          for (var k, P = -1, N = v[e(2236)] - 1; P < N; ) {
            k = v[P += 1];
            var q = x[e(2427)][e(629)][k];
            !(q && (x.opts.strictKeywords ? typeof q == "object" && Object.keys(q).length > 0 || q === !1 : x[e(2009)][e(2627)](q, x[e(844)][e(1087)]))) && (R[R.length] = k);
          }
      } else var R = c;
    if (h || R[e(2236)]) {
      var E = x[e(392)], C = h || R[e(2236)] >= x[e(2092)][e(2761)], A = x[e(2092)][e(1415)];
      if (l)
        if (s += e(1624) + n + "; ", C) {
          !h && (s += e(1691) + m + e(1484) + u + "; ");
          var D = "i" + n, M = e(2427) + n + "[" + D + "]", _ = e(2023) + M + e(2522);
          x[e(2092)][e(2038)] && (x.errorPath = x[e(2009)][e(1492)](E, M, x[e(2092)][e(2841)])), s += e(1691) + g + " = true; ", h && (s += " if (schema" + n + e(2739) + g + " = true; else if (!Array.isArray(schema" + n + e(1984) + g + e(2078)), s += e(2028) + D + e(840) + D + e(1491) + m + e(765) + D + "++) { " + g + e(567) + f + "[" + m + "[" + D + e(1589), A && (s += e(546) + f + ", " + m + "[" + D + "]) "), s += "; if (!" + g + e(612), h && (s += e(2241)), s += "  if (!" + g + ") {   ";
          var F = F || [];
          F[e(1449)](s), s = "", x.createErrors !== !1 ? (s += " { keyword: 'required" + e(1462) + x[e(392)] + e(679) + x[e(2009)][e(1675)](d) + e(626) + _ + e(1835), x[e(2092)][e(1855)] !== !1 && (s += e(1421), x[e(2092)][e(2038)] ? s += e(2726) : s += e(1620) + _ + "\\'", s += "' "), x[e(2092)][e(1432)] && (s += e(1189) + u + e(420) + x.schemaPath + " , data: " + f + " "), s += " } ") : s += " {} ";
          var z = s;
          s = F.pop(), !x[e(674)] && l ? x[e(1180)] ? s += e(2132) + z + e(297) : s += e(1106) + z + e(1364) : s += e(722) + z + e(2632), s += e(386);
        } else {
          s += e(504);
          var $ = R;
          if ($)
            for (var H, D = -1, G = $.length - 1; D < G; ) {
              H = $[D += 1], D && (s += e(1603));
              var ce = x[e(2009)][e(1932)](H), ue = f + ce;
              s += e(1460) + ue + e(332), A && (s += e(1784) + f + e(221) + x[e(2009)][e(1192)](H) + e(1345)), s += e(134) + n + e(567) + x.util[e(1675)](x[e(2092)].jsonPointers ? H : ce) + e(2735);
            }
          s += ") {  ";
          var M = e(2381) + n, _ = "' + " + M + e(2522);
          x[e(2092)]._errorDataPathProperty && (x.errorPath = x[e(2092)][e(2841)] ? x.util.getPathExpr(E, M, !0) : E + e(1169) + M);
          var F = F || [];
          F[e(1449)](s), s = "", x[e(1538)] !== !1 ? (s += e(1425) + "required' , dataPath: (dataPath || '') + " + x.errorPath + e(679) + x[e(2009)][e(1675)](d) + " , params: { missingProperty: '" + _ + e(1835), x[e(2092)][e(1855)] !== !1 && (s += e(1421), x[e(2092)][e(2038)] ? s += e(2726) : s += e(1620) + _ + "\\'", s += "' "), x[e(2092)][e(1432)] && (s += e(1189) + u + " , parentSchema: validate.schema" + x[e(1612)] + e(1519) + f + " "), s += e(2740)) : s += e(1967);
          var z = s;
          s = F[e(1702)](), !x[e(674)] && l ? x.async ? s += e(2132) + z + e(297) : s += " validate.errors = [" + z + e(1364) : s += e(722) + z + e(2632), s += e(386);
        }
      else if (C) {
        !h && (s += " var " + m + " = validate.schema" + u + "; ");
        var D = "i" + n, M = e(2427) + n + "[" + D + "]", _ = "' + " + M + e(2522);
        x[e(2092)][e(2038)] && (x[e(392)] = x[e(2009)][e(1492)](E, M, x[e(2092)].jsonPointers)), h && (s += e(2673) + m + e(1653) + m + e(1111), x[e(1538)] !== !1 ? (s += e(1425) + "required" + e(1462) + x[e(392)] + " , schemaPath: " + x[e(2009)].toQuotedString(d) + e(626) + _ + "' } ", x.opts[e(1855)] !== !1 && (s += e(1421), x[e(2092)]._errorDataPathProperty ? s += "is a required property" : s += e(1620) + _ + "\\'", s += "' "), x[e(2092)][e(1432)] && (s += e(1189) + u + e(420) + x[e(1612)] + e(1519) + f + " "), s += " } ") : s += e(1967), s += e(534) + m + " !== undefined) { "), s += e(2028) + D + " = 0; " + D + e(1491) + m + e(765) + D + e(2056) + f + "[" + m + "[" + D + "]] === undefined ", A && (s += e(1784) + f + ", " + m + "[" + D + e(880)), s += e(1753), x[e(1538)] !== !1 ? (s += " { keyword: '" + e(483) + "' , dataPath: (dataPath || '') + " + x[e(392)] + " , schemaPath: " + x[e(2009)][e(1675)](d) + " , params: { missingProperty: '" + _ + "' } ", x[e(2092)][e(1855)] !== !1 && (s += " , message: '", x[e(2092)][e(2038)] ? s += e(2726) : s += e(1620) + _ + "\\'", s += "' "), x[e(2092)][e(1432)] && (s += e(1189) + u + e(420) + x[e(1612)] + e(1519) + f + " "), s += e(2740)) : s += e(1967), s += e(2563), h && (s += e(2241));
      } else {
        var pe = R;
        if (pe)
          for (var H, ie = -1, le = pe[e(2236)] - 1; ie < le; ) {
            H = pe[ie += 1];
            var ce = x[e(2009)][e(1932)](H), _ = x[e(2009)].escapeQuotes(H), ue = f + ce;
            x[e(2092)]._errorDataPathProperty && (x[e(392)] = x[e(2009)][e(268)](E, H, x[e(2092)][e(2841)])), s += e(504) + ue + e(332), A && (s += e(1784) + f + e(221) + x.util[e(1192)](H) + "') "), s += e(1753), x.createErrors !== !1 ? (s += e(1425) + e(483) + e(1462) + x[e(392)] + e(679) + x.util[e(1675)](d) + " , params: { missingProperty: '" + _ + e(1835), x[e(2092)][e(1855)] !== !1 && (s += e(1421), x.opts._errorDataPathProperty ? s += "is a required property" : s += e(1620) + _ + "\\'", s += "' "), x[e(2092)][e(1432)] && (s += " , schema: validate.schema" + u + e(420) + x[e(1612)] + e(1519) + f + " "), s += " } ") : s += e(1967), s += ";  if (vErrors === null) vErrors = [err]; else vErrors.push(err); errors++; } ";
          }
      }
      x[e(392)] = E;
    } else l && (s += e(1695));
    return s;
  }), Ft;
}
var Nt, Va;
function P2() {
  return Va || (Va = 1, Nt = function(x, t, a) {
    const e = K;
    var s = " ", n = x.level, i = x[e(182)], c = x.schema[t], u = x[e(1612)] + x[e(2009)][e(1932)](t), d = x.errSchemaPath + "/" + t, l = !x[e(2092)][e(1347)], f = e(2516) + (i || ""), g = e(996) + n, h = x.opts[e(436)] && c && c[e(436)], m;
    if (h ? (s += e(2612) + n + e(567) + x[e(2009)][e(586)](c.$data, i, x[e(2686)]) + "; ", m = e(2427) + n) : m = c, (c || h) && x[e(2092)].uniqueItems !== !1) {
      h && (s += e(1691) + g + "; if (" + m + e(605) + m + e(2739) + g + e(387) + m + e(2166) + g + " = false; else { "), s += e(1705) + f + e(1707) + g + e(2696);
      var v = x[e(2427)][e(2230)] && x[e(2427)][e(2230)].type, k = Array[e(2224)](v);
      if (!v || v == e(1606) || v == e(2762) || k && (v.indexOf(e(1606)) >= 0 || v[e(1686)](e(2762)) >= 0)) s += e(797) + f + e(1768) + f + e(1333) + g + e(589);
      else {
        s += e(2540) + f + e(1355);
        var P = "checkDataType" + (k ? "s" : "");
        s += " if (" + x[e(2009)][P](v, e(1802), x.opts.strictNumbers, !0) + ") continue; ", k && (s += e(2376)), s += e(2333) + g + e(2258);
      }
      s += e(2740), h && (s += e(2241)), s += " if (!" + g + e(1728);
      var N = N || [];
      N[e(1449)](s), s = "", x[e(1538)] !== !1 ? (s += e(1425) + e(575) + e(1462) + x[e(392)] + e(679) + x[e(2009)][e(1675)](d) + " , params: { i: i, j: j } ", x[e(2092)][e(1855)] !== !1 && (s += e(1489)), x[e(2092)].verbose && (s += e(1279), h ? s += "validate.schema" + u : s += "" + c, s += "         , parentSchema: validate.schema" + x[e(1612)] + e(1519) + f + " "), s += e(2740)) : s += " {} ";
      var q = s;
      s = N[e(1702)](), !x[e(674)] && l ? x[e(1180)] ? s += e(2132) + q + e(297) : s += e(1106) + q + "]; return false; " : s += e(722) + q + e(2632), s += e(2740), l && (s += " else { ");
    } else l && (s += e(2424));
    return s;
  }), Nt;
}
var Tt, Ba;
function I2() {
  return Ba || (Ba = 1, Tt = { $ref: n2(), allOf: o2(), anyOf: i2(), $comment: c2(), const: u2(), contains: d2(), dependencies: l2(), enum: f2(), format: h2(), if: p2(), items: m2(), maximum: Fa(), minimum: Fa(), maxItems: Ta(), minItems: Ta(), maxLength: Aa(), minLength: Aa(), maxProperties: Da(), minProperties: Da(), multipleOf: b2(), not: g2(), oneOf: y2(), pattern: v2(), properties: w2(), propertyNames: S2(), required: k2(), uniqueItems: P2(), validate: mn() }), Tt;
}
var qt, Za;
function E2() {
  const o = r;
  if (Za) return qt;
  Za = 1;
  var x = I2(), t = Z0()[o(2715)];
  return qt = function() {
    const e = o;
    var s = [{ type: e(1142), rules: [{ maximum: [e(1268)] }, { minimum: [e(542)] }, e(948), "format"] }, { type: e(1736), rules: [e(696), e(2772), e(1216), e(1763)] }, { type: "array", rules: [e(786), "minItems", e(2230), e(514), e(575)] }, { type: e(1606), rules: [e(1812), "minProperties", e(483), e(2436), "propertyNames", { properties: ["additionalProperties", e(1547)] }] }, { rules: [e(2883), e(2874), e(1346), "not", e(684), e(758), e(555), "if"] }], n = [e(2390), e(1510)], i = [e(2693), "$id", "id", e(436), e(967), e(264), e(2578), e(1770), e(545), e(599), e(2492), e(1636), e(1662), e(1801), e(2712), "then", e(2043)], c = [e(1142), "integer", e(1736), e(2762), e(1606), e(2727), e(2450)];
    return s[e(1087)] = t(n), s.types = t(c), s[e(1022)](function(u) {
      const d = e;
      u[d(1961)] = u.rules[d(1622)](function(l) {
        const f = d;
        var g;
        if (typeof l == f(1606)) {
          var h = Object.keys(l)[0];
          g = l[h], l = h, g[f(1022)](function(v) {
            const k = f;
            n[k(1449)](v), s[k(1087)][v] = !0;
          });
        }
        n.push(l);
        var m = s[f(1087)][l] = { keyword: l, code: x[l], implements: g };
        return m;
      }), s[d(1087)][d(1510)] = { keyword: d(1510), code: x[d(1510)] }, u[d(2390)] && (s[d(1952)][u[d(2390)]] = u);
    }), s.keywords = t(n[e(1331)](i)), s[e(2662)] = {}, s;
  }, qt;
}
var At, Wa;
function C2() {
  const o = r;
  if (Wa) return At;
  Wa = 1;
  var x = [o(948), o(1647), o(1268), o(1744), o(542), o(696), o(2772), o(1216), o(2712), o(786), "minItems", o(575), o(1812), "minProperties", o(483), "additionalProperties", o(1346), o(1763), o(2874)];
  return At = function(t, a) {
    const e = o;
    for (var s = 0; s < a[e(2236)]; s++) {
      t = JSON[e(330)](JSON[e(1410)](t));
      var n = a[s][e(2831)]("/"), i = t, c;
      for (c = 1; c < n[e(2236)]; c++) i = i[n[c]];
      for (c = 0; c < x[e(2236)]; c++) {
        var u = x[c], d = i[u];
        d && (i[u] = { anyOf: [d, { $ref: "https://raw.githubusercontent.com/ajv-validator/ajv/master/lib/refs/data.json#" }] });
      }
    }
    return t;
  }, At;
}
var Ot, Ka;
function R2() {
  const o = r;
  if (Ka) return Ot;
  Ka = 1;
  var x = hr()[o(2411)];
  Ot = t;
  function t(a, e, s) {
    const n = o;
    var i = this;
    if (typeof this._opts.loadSchema != "function") throw new Error(n(1568));
    typeof e == n(2279) && (s = e, e = void 0);
    var c = u(a)[n(667)](function() {
      var f = i[n(1975)](a, void 0, e);
      return f.validate || d(f);
    });
    return s && c[n(667)](function(l) {
      s(null, l);
    }, s), c;
    function u(l) {
      const f = n;
      var g = l[f(2693)];
      return g && !i.getSchema(g) ? t[f(1666)](i, { $ref: g }, !0) : Promise[f(753)]();
    }
    function d(l) {
      const f = n;
      try {
        return i[f(2284)](l);
      } catch (h) {
        if (h instanceof x) return g(h);
        throw h;
      }
      function g(h) {
        const m = f;
        var v = h[m(162)];
        if (N(v)) throw new Error("Schema " + v + " is loaded but " + h[m(209)] + m(1710));
        var k = i[m(2579)][v];
        return !k && (k = i[m(2579)][v] = i[m(724)].loadSchema(v), k.then(P, P)), k[m(667)](function(q) {
          const R = m;
          if (!N(v)) return u(q)[R(667)](function() {
            N(v) || i.addSchema(q, v, void 0, e);
          });
        })[m(667)](function() {
          return d(l);
        });
        function P() {
          const q = m;
          delete i[q(2579)][v];
        }
        function N(q) {
          return i[m(1869)][q] || i._schemas[q];
        }
      }
    }
  }
  return Ot;
}
var Dt, Ga;
function _2() {
  return Ga || (Ga = 1, Dt = function(x, t, a) {
    const e = K;
    var s = " ", n = x.level, i = x[e(182)], c = x.schema[t], u = x[e(1612)] + x[e(2009)][e(1932)](t), d = x[e(1786)] + "/" + t, l = !x[e(2092)].allErrors, f, g = e(2516) + (i || ""), h = e(996) + n, m = e(2464) + n, v = x[e(2092)][e(436)] && c && c[e(436)], k;
    v ? (s += e(2612) + n + e(567) + x[e(2009)][e(586)](c[e(436)], i, x.dataPathArr) + "; ", k = e(2427) + n) : k = c;
    var P = this, N = e(1139) + n, q = P[e(1139)], R = "", E, C, A, D, M;
    if (v && q[e(436)]) {
      M = e(572) + n;
      var _ = q.validateSchema;
      s += e(1691) + N + e(2894) + t + "'].definition; var " + M + e(567) + N + e(241);
    } else {
      if (D = x[e(2654)](P, c, x[e(2427)], x), !D) return;
      k = e(1391) + u, M = D[e(2152)], E = q.compile, C = q.inline, A = q.macro;
    }
    var F = M + e(2156), z = "i" + n, $ = e(1239) + n, H = q[e(1180)];
    if (H && !x.async) throw new Error("async keyword in sync schema");
    if (!(C || A) && (s += "" + F + " = null;"), s += e(1627) + m + e(868) + h + ";", v && q[e(436)] && (R += "}", s += e(2673) + k + e(2723) + h + e(512), _ && (R += "}", s += " " + h + e(567) + N + e(1670) + k + "); if (" + h + e(2560))), C) q.statements ? s += " " + D[e(766)] + " " : s += " " + h + e(567) + D[e(766)] + "; ";
    else if (A) {
      var G = x.util[e(593)](x), R = "";
      G[e(972)]++;
      var ce = e(996) + G.level;
      G[e(2427)] = D[e(766)], G[e(1612)] = "";
      var ue = x[e(674)];
      x[e(674)] = G[e(674)] = !0;
      var pe = x.validate(G).replace(/validate\.schema/g, M);
      x[e(674)] = G[e(674)] = ue, s += " " + pe;
    } else {
      var ie = ie || [];
      ie[e(1449)](s), s = "", s += "  " + M + e(1663), x.opts[e(623)] ? s += "this" : s += e(2647), E || q[e(2427)] === !1 ? s += e(887) + g + " " : s += " , " + k + " , " + g + e(595) + x[e(1612)] + " ", s += e(1059), x.errorPath != '""' && (s += " + " + x[e(392)]);
      var le = i ? "data" + (i - 1 || "") : e(425), Pe = i ? x[e(2686)][i] : e(141);
      s += e(887) + le + " , " + Pe + e(2073);
      var ye = s;
      s = ie[e(1702)](), q[e(2887)] === !1 ? (s += " " + h + e(567), H && (s += "await "), s += "" + ye + "; ") : H ? (F = "customErrors" + n, s += e(1691) + F + e(865) + h + " = await " + ye + e(1119) + h + e(2067) + F + " = e.errors; else throw e; } ") : s += " " + F + e(1955) + h + e(567) + ye + "; ";
    }
    if (q[e(611)] && (s += e(2673) + le + ") " + g + " = " + le + "[" + Pe + "];"), s += "" + R, q.valid) l && (s += " if (true) { ");
    else {
      s += e(504), q[e(996)] === void 0 ? (s += " !", A ? s += "" + ce : s += "" + h) : s += " " + !q.valid + " ", s += e(2560), f = P.keyword;
      var ie = ie || [];
      ie.push(s), s = "";
      var ie = ie || [];
      ie[e(1449)](s), s = "", x[e(1538)] !== !1 ? (s += e(1425) + (f || "custom") + e(1462) + x.errorPath + e(679) + x.util[e(1675)](d) + " , params: { keyword: '" + P[e(1270)] + "' } ", x.opts.messages !== !1 && (s += ` , message: 'should pass "` + P[e(1270)] + e(368)), x.opts.verbose && (s += " , schema: validate.schema" + u + " , parentSchema: validate.schema" + x[e(1612)] + e(1519) + g + " "), s += e(2740)) : s += e(1967);
      var Me = s;
      s = ie[e(1702)](), !x[e(674)] && l ? x[e(1180)] ? s += e(2132) + Me + e(297) : s += e(1106) + Me + "]; return false; " : s += e(722) + Me + e(2632);
      var Te = s;
      s = ie[e(1702)](), C ? q.errors ? q[e(2887)] != e(1055) && (s += "  for (var " + z + "=" + m + "; " + z + e(789) + z + e(846) + $ + e(2209) + z + "]; if (" + $ + e(450) + $ + ".dataPath = (dataPath || '') + " + x[e(392)] + e(1539) + $ + e(1828) + $ + e(1799) + d + e(524), x[e(2092)].verbose && (s += " " + $ + e(2348) + k + "; " + $ + e(895) + g + "; "), s += " } ") : q[e(2887)] === !1 ? s += " " + Te + " " : (s += e(2673) + m + e(455) + Te + e(308) + z + "=" + m + "; " + z + "<errors; " + z + "++) { var " + $ + " = vErrors[" + z + e(2744) + $ + e(450) + $ + e(1795) + x[e(392)] + e(1539) + $ + e(1828) + $ + e(1799) + d + '"; } ', x.opts[e(1432)] && (s += " " + $ + e(2348) + k + "; " + $ + e(895) + g + "; "), s += e(1461)) : A ? (s += e(2798), x.createErrors !== !1 ? (s += e(1425) + (f || e(2662)) + e(1462) + x[e(392)] + e(679) + x[e(2009)][e(1675)](d) + e(2329) + P[e(1270)] + e(1835), x[e(2092)].messages !== !1 && (s += e(2148) + P.keyword + e(368)), x[e(2092)][e(1432)] && (s += " , schema: validate.schema" + u + e(420) + x[e(1612)] + e(1519) + g + " "), s += e(2740)) : s += e(1967), s += e(2632), !x.compositeRule && l && (x[e(1180)] ? s += " throw new ValidationError(vErrors); " : s += e(393))) : q[e(2887)] === !1 ? s += " " + Te + " " : (s += e(1053) + F + e(530) + F + e(305) + F + e(768) + z + "=" + m + "; " + z + e(789) + z + "++) { var " + $ + " = vErrors[" + z + e(2744) + $ + e(450) + $ + ".dataPath = (dataPath || '') + " + x.errorPath + e(1696) + $ + '.schemaPath = "' + d + e(2575), x.opts.verbose && (s += " " + $ + ".schema = " + k + "; " + $ + e(895) + g + "; "), s += e(2298) + Te + e(2740)), s += e(2740), l && (s += e(167));
    }
    return s;
  }), Dt;
}
const F2 = r(1438), N2 = r(1438), T2 = r(1023), q2 = { schemaArray: { type: r(2762), minItems: 1, items: { $ref: "#" } }, nonNegativeInteger: { type: "integer", minimum: 0 }, nonNegativeIntegerDefault0: { allOf: [{ $ref: r(1532) }, { default: 0 }] }, simpleTypes: { enum: [r(2762), "boolean", r(1649), r(2450), r(1142), r(1606), r(1736)] }, stringArray: { type: r(2762), items: { type: r(1736) }, uniqueItems: !0, default: [] } }, A2 = [r(1606), "boolean"], O2 = { $id: { type: r(1736), format: r(2252) }, $schema: { type: r(1736), format: r(759) }, $ref: { type: r(1736), format: r(2252) }, $comment: { type: r(1736) }, title: { type: r(1736) }, description: { type: r(1736) }, default: !0, readOnly: { type: r(2727), default: !1 }, examples: { type: r(2762), items: !0 }, multipleOf: { type: r(1142), exclusiveMinimum: 0 }, maximum: { type: "number" }, exclusiveMaximum: { type: r(1142) }, minimum: { type: r(1142) }, exclusiveMinimum: { type: r(1142) }, maxLength: { $ref: "#/definitions/nonNegativeInteger" }, minLength: { $ref: "#/definitions/nonNegativeIntegerDefault0" }, pattern: { type: r(1736), format: r(1560) }, additionalItems: { $ref: "#" }, items: { anyOf: [{ $ref: "#" }, { $ref: "#/definitions/schemaArray" }], default: !0 }, maxItems: { $ref: r(1532) }, minItems: { $ref: r(2504) }, uniqueItems: { type: r(2727), default: !1 }, contains: { $ref: "#" }, maxProperties: { $ref: r(1532) }, minProperties: { $ref: r(2504) }, required: { $ref: r(2659) }, additionalProperties: { $ref: "#" }, definitions: { type: "object", additionalProperties: { $ref: "#" }, default: {} }, properties: { type: "object", additionalProperties: { $ref: "#" }, default: {} }, patternProperties: { type: "object", additionalProperties: { $ref: "#" }, propertyNames: { format: r(1560) }, default: {} }, dependencies: { type: r(1606), additionalProperties: { anyOf: [{ $ref: "#" }, { $ref: r(2659) }] } }, propertyNames: { $ref: "#" }, const: !0, enum: { type: r(2762), items: !0, minItems: 1, uniqueItems: !0 }, type: { anyOf: [{ $ref: r(2161) }, { type: r(2762), items: { $ref: r(2161) }, minItems: 1, uniqueItems: !0 }] }, format: { type: "string" }, contentMediaType: { type: r(1736) }, contentEncoding: { type: "string" }, if: { $ref: "#" }, then: { $ref: "#" }, else: { $ref: "#" }, allOf: { $ref: "#/definitions/schemaArray" }, anyOf: { $ref: r(1067) }, oneOf: { $ref: r(1067) }, not: { $ref: "#" } }, bn = { $schema: F2, $id: N2, title: T2, definitions: q2, type: A2, properties: O2, default: !0 };
var jt, Ja;
function D2() {
  const o = r;
  if (Ja) return jt;
  Ja = 1;
  var x = bn;
  return jt = { $id: o(1611), definitions: { simpleTypes: x[o(545)][o(2211)] }, type: o(1606), dependencies: { schema: [o(766)], $data: [o(766)], statements: [o(2494)], valid: { not: { required: [o(2368)] } } }, properties: { type: x[o(629)][o(2390)], schema: { type: "boolean" }, statements: { type: "boolean" }, dependencies: { type: o(2762), items: { type: "string" } }, metaSchema: { type: o(1606) }, modifying: { type: o(2727) }, valid: { type: o(2727) }, $data: { type: o(2727) }, async: { type: o(2727) }, errors: { anyOf: [{ type: o(2727) }, { const: o(1055) }] } } }, jt;
}
var Mt, Qa;
function j2() {
  if (Qa) return Mt;
  Qa = 1;
  var o = /^[a-z_$][a-z0-9_$-]*$/i, x = _2(), t = D2();
  Mt = { add: a, get: e, remove: s, validate: n };
  function a(i, c) {
    const u = K;
    var d = this[u(844)];
    if (d[u(1078)][i]) throw new Error("Keyword " + i + " is already defined");
    if (!o[u(1069)](i)) throw new Error(u(877) + i + u(1956));
    if (c) {
      this[u(2325)](c, !0);
      var l = c[u(2390)];
      if (Array[u(2224)](l))
        for (var f = 0; f < l[u(2236)]; f++) h(i, l[f], c);
      else h(i, l, c);
      var g = c[u(497)];
      g && (c[u(436)] && this[u(724)][u(436)] && (g = { anyOf: [g, { $ref: "https://raw.githubusercontent.com/ajv-validator/ajv/master/lib/refs/data.json#" }] }), c[u(1775)] = this.compile(g, !0));
    }
    d[u(1078)][i] = d.all[i] = !0;
    function h(m, v, k) {
      const P = u;
      for (var N, q = 0; q < d[P(2236)]; q++) {
        var R = d[q];
        if (R[P(2390)] == v) {
          N = R;
          break;
        }
      }
      !N && (N = { type: v, rules: [] }, d[P(1449)](N));
      var E = { keyword: m, definition: k, custom: !0, code: x, implements: k.implements };
      N[P(1961)][P(1449)](E), d.custom[m] = E;
    }
    return this;
  }
  function e(i) {
    const c = K;
    var u = this[c(844)].custom[i];
    return u ? u[c(1139)] : this[c(844)][c(1078)][i] || !1;
  }
  function s(i) {
    const c = K;
    var u = this.RULES;
    delete u[c(1078)][i], delete u[c(1087)][i], delete u.custom[i];
    for (var d = 0; d < u[c(2236)]; d++)
      for (var l = u[d][c(1961)], f = 0; f < l[c(2236)]; f++)
        if (l[f][c(1270)] == i) {
          l.splice(f, 1);
          break;
        }
    return this;
  }
  function n(i, c) {
    const u = K;
    n[u(2887)] = null;
    var d = this._validateKeyword = this[u(2379)] || this[u(2268)](t, !0);
    if (d(i)) return !0;
    if (n.errors = d.errors, c) throw new Error(u(240) + this[u(2849)](d[u(2887)]));
    return !1;
  }
  return Mt;
}
const M2 = r(1438), L2 = "https://raw.githubusercontent.com/ajv-validator/ajv/master/lib/refs/data.json#", $2 = r(1072), U2 = r(1606), z2 = [r(436)], H2 = { $data: { type: "string", anyOf: [{ format: r(285) }, { format: "json-pointer" }] } }, V2 = !1, B2 = { $schema: M2, $id: L2, description: $2, type: U2, required: z2, properties: H2, additionalProperties: V2 };
var Lt, Xa;
function Z2() {
  const o = r;
  if (Xa) return Lt;
  Xa = 1;
  var x = r2(), t = fr(), a = a2(), e = hn(), s = pn(), n = s2(), i = E2(), c = C2(), u = Z0();
  Lt = m, m[o(2598)][o(766)] = v, m[o(2598)].compile = k, m[o(2598)][o(1472)] = P, m.prototype[o(2685)] = N, m.prototype[o(1775)] = q, m[o(2598)][o(2434)] = E, m[o(2598)][o(338)] = D, m.prototype[o(256)] = ue, m[o(2598)][o(2849)] = ce, m[o(2598)]._addSchema = _, m.prototype._compile = F, m[o(2598)][o(171)] = R2();
  var d = j2();
  m[o(2598)][o(2730)] = d[o(2140)], m.prototype[o(1715)] = d.get, m[o(2598)][o(2508)] = d[o(2900)], m[o(2598)][o(2325)] = d[o(766)];
  var l = hr();
  m[o(692)] = l.Validation, m[o(424)] = l.MissingRef, m[o(201)] = c;
  var f = o(2052), g = [o(1206), o(1897), "coerceTypes", o(2835)], h = [o(2809)];
  function m(O) {
    const T = o;
    if (!(this instanceof m)) return new m(O);
    O = this._opts = u.copy(O) || {}, Te(this), this[T(2907)] = {}, this[T(1869)] = {}, this[T(578)] = {}, this[T(229)] = n(O[T(1763)]), this._cache = O.cache || new a(), this[T(2579)] = {}, this[T(2203)] = [], this[T(844)] = i(), this[T(1136)] = z(O), O[T(2761)] = O[T(2761)] || 1 / 0, O[T(1381)] == T(1497) && (O._errorDataPathProperty = !0), O[T(2227)] === void 0 && (O[T(2227)] = s), this[T(1010)] = Me(this), O[T(1148)] && le(this), O[T(1078)] && Pe(this), pe(this), typeof O[T(744)] == T(1606) && this[T(2685)](O[T(744)]), O[T(260)] && this[T(2730)]("nullable", { metaSchema: { type: T(2727) } }), ie(this);
  }
  function v(O, T) {
    const j = o;
    var J;
    if (typeof O == j(1736)) {
      if (J = this[j(2434)](O), !J) throw new Error(j(2616) + O + '"');
    } else {
      var Y = this[j(1975)](O);
      J = Y.validate || this[j(2284)](Y);
    }
    var V = J(T);
    return J[j(967)] !== !0 && (this[j(2887)] = J[j(2887)]), V;
  }
  function k(O, T) {
    const j = o;
    var J = this[j(1975)](O, void 0, T);
    return J.validate || this[j(2284)](J);
  }
  function P(O, T, j, J) {
    const Y = o;
    if (Array[Y(2224)](O)) {
      for (var V = 0; V < O[Y(2236)]; V++) this[Y(1472)](O[V], void 0, j, J);
      return this;
    }
    var X = this._getId(O);
    if (X !== void 0 && typeof X != Y(1736)) throw new Error(Y(1709));
    return T = t.normalizeId(T || X), ye(this, T), this[Y(2907)][T] = this[Y(1975)](O, j, J, !0), this;
  }
  function N(O, T, j) {
    return this.addSchema(O, T, j, !0), this;
  }
  function q(O, T) {
    const j = o;
    var J = O[j(2693)];
    if (J !== void 0 && typeof J != "string") throw new Error(j(1789));
    if (J = J || this[j(724)][j(2589)] || R(this), !J) return this.logger.warn(j(1244)), this[j(2887)] = null, !0;
    var Y = this[j(766)](J, O);
    if (!Y && T) {
      var V = j(1278) + this[j(2849)]();
      if (this[j(724)][j(1775)] == j(2482)) this[j(2789)][j(2484)](V);
      else throw new Error(V);
    }
    return Y;
  }
  function R(O) {
    const T = o;
    var j = O[T(724)][T(744)];
    return O[T(724)][T(2589)] = typeof j == T(1606) ? O[T(1136)](j) || j : O[T(2434)](f) ? f : void 0, O._opts[T(2589)];
  }
  function E(O) {
    const T = o;
    var j = A(this, O);
    switch (typeof j) {
      case T(1606):
        return j.validate || this[T(2284)](j);
      case T(1736):
        return this[T(2434)](j);
      case T(233):
        return C(this, O);
    }
  }
  function C(O, T) {
    const j = o;
    var J = t[j(2427)][j(1666)](O, { schema: {} }, T);
    if (J) {
      var Y = J[j(2427)], V = J[j(2004)], X = J.baseId, oe = x[j(1666)](O, Y, V, void 0, X);
      return O[j(578)][T] = new e({ ref: T, fragment: !0, schema: Y, root: V, baseId: X, validate: oe }), oe;
    }
  }
  function A(O, T) {
    const j = o;
    return T = t.normalizeId(T), O[j(2907)][T] || O[j(1869)][T] || O._fragments[T];
  }
  function D(O) {
    const T = o;
    if (O instanceof RegExp) return M(this, this._schemas, O), M(this, this[T(1869)], O), this;
    switch (typeof O) {
      case T(233):
        return M(this, this._schemas), M(this, this[T(1869)]), this[T(541)][T(327)](), this;
      case T(1736):
        var j = A(this, O);
        return j && this[T(541)][T(1287)](j[T(2048)]), delete this[T(2907)][O], delete this._refs[O], this;
      case T(1606):
        var J = this._opts.serialize, Y = J ? J(O) : O;
        this[T(541)][T(1287)](Y);
        var V = this._getId(O);
        V && (V = t[T(1765)](V), delete this._schemas[V], delete this[T(1869)][V]);
    }
    return this;
  }
  function M(O, T, j) {
    const J = o;
    for (var Y in T) {
      var V = T[Y];
      !V[J(744)] && (!j || j[J(1069)](Y)) && (O[J(541)][J(1287)](V[J(2048)]), delete T[Y]);
    }
  }
  function _(O, T, j, J) {
    const Y = o;
    if (typeof O != Y(1606) && typeof O != Y(2727)) throw new Error(Y(1616));
    var V = this[Y(724)][Y(2227)], X = V ? V(O) : O, oe = this[Y(541)].get(X);
    if (oe) return oe;
    J = J || this[Y(724)][Y(749)] !== !1;
    var se = t[Y(1765)](this._getId(O));
    se && J && ye(this, se);
    var te = this[Y(724)].validateSchema !== !1 && !T, Le;
    te && !(Le = se && se == t.normalizeId(O[Y(2693)])) && this[Y(1775)](O, !0);
    var Ae = t.ids[Y(1666)](this, O), ze = new e({ id: se, schema: O, localRefs: Ae, cacheKey: X, meta: j });
    return se[0] != "#" && J && (this[Y(1869)][se] = ze), this._cache.put(X, ze), te && Le && this[Y(1775)](O, !0), ze;
  }
  function F(O, T) {
    const j = o;
    if (O[j(1293)])
      return O[j(766)] = V, V[j(2427)] = O.schema, V[j(2887)] = null, V[j(2004)] = T || V, O[j(2427)][j(967)] === !0 && (V[j(967)] = !0), V;
    O[j(1293)] = !0;
    var J;
    O.meta && (J = this._opts, this._opts = this[j(1010)]);
    var Y;
    try {
      Y = x[j(1666)](this, O[j(2427)], T, O[j(2107)]);
    } catch (X) {
      throw delete O[j(766)], X;
    } finally {
      O[j(1293)] = !1, O[j(744)] && (this[j(724)] = J);
    }
    return O[j(766)] = Y, O[j(664)] = Y[j(664)], O.refVal = Y[j(1282)], O[j(2004)] = Y[j(2004)], Y;
    function V() {
      const X = j;
      var oe = O.validate, se = oe[X(1880)](this, arguments);
      return V[X(2887)] = oe.errors, se;
    }
  }
  function z(O) {
    const T = o;
    switch (O.schemaId) {
      case T(2398):
        return G;
      case "id":
        return $;
      default:
        return H;
    }
  }
  function $(O) {
    const T = o;
    return O.$id && this.logger[T(816)](T(1625), O[T(1366)]), O.id;
  }
  function H(O) {
    const T = o;
    return O.id && this[T(2789)][T(816)](T(266), O.id), O[T(1366)];
  }
  function G(O) {
    const T = o;
    if (O.$id && O.id && O.$id != O.id) throw new Error(T(915));
    return O[T(1366)] || O.id;
  }
  function ce(O, T) {
    const j = o;
    if (O = O || this[j(2887)], !O) return j(1974);
    T = T || {};
    for (var J = T[j(1689)] === void 0 ? ", " : T[j(1689)], Y = T[j(444)] === void 0 ? j(2516) : T[j(444)], V = "", X = 0; X < O.length; X++) {
      var oe = O[X];
      oe && (V += Y + oe[j(173)] + " " + oe.message + J);
    }
    return V.slice(0, -J[j(2236)]);
  }
  function ue(O, T) {
    const j = o;
    return typeof T == "string" && (T = new RegExp(T)), this[j(229)][O] = T, this;
  }
  function pe(O) {
    const T = o;
    var j;
    if (O._opts[T(436)] && (j = B2, O[T(2685)](j, j[T(1366)], !0)), O[T(724)].meta !== !1) {
      var J = bn;
      O[T(724)][T(436)] && (J = c(J, h)), O[T(2685)](J, f, !0), O[T(1869)][T(1130)] = f;
    }
  }
  function ie(O) {
    const T = o;
    var j = O[T(724)].schemas;
    if (j)
      if (Array[T(2224)](j)) O[T(1472)](j);
      else
        for (var J in j) O[T(1472)](j[J], J);
  }
  function le(O) {
    const T = o;
    for (var j in O[T(724)][T(1148)]) {
      var J = O[T(724)].formats[j];
      O[T(256)](j, J);
    }
  }
  function Pe(O) {
    const T = o;
    for (var j in O._opts[T(1078)]) {
      var J = O._opts[T(1078)][j];
      O[T(2730)](j, J);
    }
  }
  function ye(O, T) {
    const j = o;
    if (O[j(2907)][T] || O[j(1869)][T]) throw new Error(j(908) + T + '" already exists');
  }
  function Me(O) {
    const T = o;
    for (var j = u[T(593)](O._opts), J = 0; J < g[T(2236)]; J++) delete j[g[J]];
    return j;
  }
  function Te(O) {
    const T = o;
    var j = O[T(724)][T(2789)];
    if (j === !1) O[T(2789)] = { log: Xe, warn: Xe, error: Xe };
    else {
      if (j === void 0 && (j = console), !(typeof j == T(1606) && j.log && j[T(816)] && j[T(2484)])) throw new Error("logger must implement log, warn and error methods");
      O[T(2789)] = j;
    }
  }
  function Xe() {
  }
  return Lt;
}
var W2 = Z2();
const K2 = Us(W2);
class G2 extends Qc {
  constructor(x, t) {
    const a = r;
    var e;
    super(t), this._serverInfo = x, this[a(570)] = (e = t == null ? void 0 : t.capabilities) !== null && e !== void 0 ? e : {}, this[a(2350)] = t == null ? void 0 : t[a(441)], this.setRequestHandler(xn, (s) => this[a(284)](s)), this[a(1888)](tn, () => {
      var s;
      return (s = this.oninitialized) === null || s === void 0 ? void 0 : s.call(this);
    });
  }
  [r(1384)](x) {
    const t = r;
    if (this[t(2118)]) throw new Error(t(2753));
    this[t(570)] = Xc(this[t(570)], x);
  }
  [r(1122)](x) {
    const t = r;
    var a, e, s;
    switch (x) {
      case t(537):
        if (!(!((a = this[t(824)]) === null || a === void 0) && a[t(1361)])) throw new Error(t(2012) + x + ")");
        break;
      case t(701):
        if (!(!((e = this._clientCapabilities) === null || e === void 0) && e[t(1965)])) throw new Error("Client does not support elicitation (required for " + x + ")");
        break;
      case "roots/list":
        if (!(!((s = this[t(824)]) === null || s === void 0) && s[t(1667)])) throw new Error("Client does not support listing roots (required for " + x + ")");
        break;
    }
  }
  [r(631)](x) {
    const t = r;
    switch (x) {
      case t(866):
        if (!this[t(570)][t(2147)]) throw new Error(t(2602) + x + ")");
        break;
      case t(1113):
      case "notifications/resources/list_changed":
        if (!this._capabilities[t(509)]) throw new Error(t(803) + x + ")");
        break;
      case t(1727):
        if (!this[t(570)][t(835)]) throw new Error(t(1451) + x + ")");
        break;
      case t(482):
        if (!this[t(570)].prompts) throw new Error(t(1234) + x + ")");
        break;
    }
  }
  [r(976)](x) {
    const t = r;
    switch (x) {
      case t(537):
        if (!this[t(570)][t(1361)]) throw new Error(t(1814) + x + ")");
        break;
      case "logging/setLevel":
        if (!this[t(570)][t(2147)]) throw new Error(t(2602) + x + ")");
        break;
      case t(1475):
      case t(741):
        if (!this._capabilities[t(154)]) throw new Error("Server does not support prompts (required for " + x + ")");
        break;
      case t(2403):
      case t(1579):
      case t(719):
        if (!this[t(570)].resources) throw new Error("Server does not support resources (required for " + x + ")");
        break;
      case "tools/call":
      case t(2183):
        if (!this[t(570)].tools) throw new Error("Server does not support tools (required for " + x + ")");
        break;
    }
  }
  async [r(284)](x) {
    const t = r, a = x[t(974)][t(1077)];
    return this[t(824)] = x[t(974)][t(1360)], this._clientVersion = x[t(974)][t(2158)], { protocolVersion: Gi[t(408)](a) ? a : Ws, capabilities: this[t(2553)](), serverInfo: this[t(165)], ...this._instructions && { instructions: this[t(2350)] } };
  }
  [r(2902)]() {
    return this[r(824)];
  }
  [r(1098)]() {
    return this[r(2385)];
  }
  [r(2553)]() {
    return this[r(570)];
  }
  async [r(651)]() {
    return this[r(1190)]({ method: "ping" }, tr);
  }
  async [r(150)](x, t) {
    const a = r;
    return this[a(1190)]({ method: a(537), params: x }, dn, t);
  }
  async [r(2620)](x, t) {
    const a = r, e = await this[a(1190)]({ method: "elicitation/create", params: x }, ln, t);
    if (e[a(714)] === a(1052) && e.content) try {
      const s = new K2(), n = s[a(2268)](x[a(315)]);
      if (!n(e.content)) throw new A0(v0[a(227)], a(1028) + s[a(2849)](n[a(2887)]));
    } catch (s) {
      throw s instanceof A0 ? s : new A0(v0.InternalError, a(893) + s);
    }
    return e;
  }
  async [r(2404)](x, t) {
    const a = r;
    return this[a(1190)]({ method: a(1678), params: x }, fn, t);
  }
  async sendLoggingMessage(x) {
    const t = r;
    return this[t(282)]({ method: t(866), params: x });
  }
  async [r(2137)](x) {
    const t = r;
    return this[t(282)]({ method: t(1113), params: x });
  }
  async [r(1387)]() {
    const x = r;
    return this[x(282)]({ method: x(2828) });
  }
  async sendToolListChanged() {
    const x = r;
    return this[x(282)]({ method: x(1727) });
  }
  async [r(161)]() {
    const x = r;
    return this[x(282)]({ method: x(482) });
  }
}
class J2 extends Error {
  constructor(x, t) {
    const a = r;
    super(a(1204) + x + a(953) + t + "ms"), this[a(492)] = "HeartbeatTimeoutError";
  }
}
const mx = /* @__PURE__ */ new Map();
class Q2 {
  constructor(x) {
    const t = r;
    if (this[t(1164)] = [], this[t(2221)] = Date[t(1742)](), mx[t(2302)](x[t(2806)])) {
      const i = mx[t(2157)](x[t(2806)]);
      i && i[t(1749)]();
    }
    this[t(2806)] = x[t(2806)], this[t(2489)] = x.messagePoster, this[t(2072)] = x[t(2072)], this[t(1690)] = x[t(1690)];
    const a = x[t(1060)] ?? x.heartbeatTimeout, e = x.heartbeatTimeout ?? x[t(1060)], s = this[t(963)](a), n = this[t(963)](e);
    s && n && (this.heartbeatInterval = s, this[t(939)] = n), this.debugDisableHeartbeatResponse = x[t(1394)] ?? !1, mx[t(2104)](this[t(2806)], this), this[t(964)] = this[t(964)].bind(this), this[t(1570)] = this[t(2072)](this.listenMessageCallback);
  }
  normalizeDuration(x) {
    const t = r;
    if (typeof x === t(1142) && !(!Number[t(2524)](x) || x <= 0))
      return x;
  }
  [r(2250)]() {
    const x = r;
    return typeof this.heartbeatInterval == "number" && typeof this[x(939)] === x(1142);
  }
  listenMessageCallback(x) {
    const t = r;
    if (x.posterIdentifier === this[t(2806)]) {
      if (x[t(1567)] === t(2502)) {
        x[t(2390)] === "ping" && !this[t(1394)] ? this[t(2489)]({ channel: "sdppp-heartbeat", posterIdentifier: this[t(2806)], type: t(2070), timestamp: x.timestamp }) : x.type === t(2070) && (this[t(2221)] = Date[t(1742)](), this[t(2892)] && (clearTimeout(this[t(2892)]), this[t(2892)] = void 0));
        return;
      }
      x[t(1567)] === t(587) && (this[t(413)] && "payload" in x ? this[t(413)](x[t(1523)]) : "payload" in x && this[t(1164)].push(x[t(1523)]));
    }
  }
  async start() {
    const x = r;
    for (; this[x(1164)][x(2236)] > 0; ) {
      const t = this[x(1164)][x(2447)]();
      t && this.onmessage && this[x(413)](t);
    }
    this[x(2250)]() && this.startHeartbeat();
  }
  startHeartbeat() {
    const x = r;
    if (!this.isHeartbeatEnabled()) return;
    const t = this[x(1060)], a = this[x(939)];
    this[x(934)](), this.heartbeatTimer = setInterval(() => {
      const e = x, s = Date[e(1742)]();
      this[e(2489)]({ channel: e(2502), posterIdentifier: this[e(2806)], type: "ping", timestamp: s }), this[e(2892)] = setTimeout(() => {
        const n = e, i = new J2(this.posterIdentifier, a);
        this[n(2491)] && this.onerror(i);
      }, a);
    }, t);
  }
  clearHeartbeatTimers() {
    const x = r;
    this[x(2790)] && (clearInterval(this.heartbeatTimer), this[x(2790)] = void 0), this.heartbeatTimeoutTimer && (clearTimeout(this[x(2892)]), this[x(2892)] = void 0);
  }
  async [r(1165)](x, t) {
    const a = r;
    this[a(2489)]({ channel: a(587), posterIdentifier: this[a(2806)], payload: x });
  }
  async [r(1749)]() {
    const x = r;
    this[x(934)](), mx[x(1344)](this.posterIdentifier), this.removeMessageEventListener(this.externalListenMessageCallback);
  }
}
const X2 = ix[r(2417)](r(1166));
async function gn() {
  const o = r;
  if (!window[o(313)]) return;
  const x = new Q2({ posterIdentifier: "comfy-uxp", messagePoster: (e) => {
    window[o(313)].postMessage(e, "*");
  }, addMessageEventListener: (e) => {
    const s = o, n = (i) => {
      e(i[K(2516)]);
    };
    return window[s(1313)]("message", n), n;
  }, removeMessageEventListener: (e) => {
    const s = o;
    window[s(597)](s(1354), e);
  } });
  x.onerror = (e) => {
    X2(o(2336), e);
  };
  const t = new G2({ name: o(969), version: o(2707) }, {}), a = new Po(t);
  return await a[o(649)](x), window.uxpHost.postMessage({ channel: "mcp-mesh-router", meshName: o(2076), action: "connect", version: "510" }, "*"), await Ee.connect(o(2882), a);
}
const Y2 = Object[r(889)](Object[r(281)]({ __proto__: null, connectUXP: gn, mcpMesh: Ee }, Symbol[r(1203)], { value: "Module" }));
function yn(o) {
  const x = r, t = Fe[x(2747)] || Fe[x(2321)][x(839)], a = t[x(1738)];
  if (o && o[x(1957)] && o.detail.id !== a[x(747)].id) return;
  const e = Ee[x(2705)].getState()[x(275)], s = er(Fe[x(1235)], a);
  wn(s, e) && Ee[x(2705)][x(968)]({ widgetableStructure: s }), Ee[x(2705)][x(968)]({ widgetableValues: Tx(Fe.graph) });
}
C0[r(1313)](r(2198), yn), C0.addEventListener(r(1866), () => {
  const o = r;
  Ee[o(2705)][o(968)]({ widgetableValues: Tx(Fe[o(1235)]) });
});
let Ya = 0, es = !0, xs = "";
function vn() {
  const o = r;
  requestAnimationFrame(vn);
  const x = Fe[o(2747)] || Fe[o(2321)][o(839)], t = x[o(1738)], a = (t == null ? void 0 : t.id) || 0, e = (t == null ? void 0 : t[o(632)]) || "", s = (t == null ? void 0 : t.isPersisted) || !0;
  if (a === Ya && e === xs && s === es) return;
  const n = Date[o(1742)]();
  Ya = a, xs = e, es = s;
  const i = er(Fe[o(1235)], t), c = Tx(Fe.graph);
  Ee[o(2705)][o(968)]({ widgetableStructure: i, widgetableValues: c }), console[o(2482)](o(2259) + (Date[o(1742)]() - n) + "ms"), setTimeout(() => {
    const u = o;
    if (t !== x[u(1738)]) return;
    const d = er(Fe[u(1235)], t), l = Tx(Fe[u(1235)]);
    wn(d, i) && Ee[u(2705)][u(968)]({ widgetableStructure: d }), Ee[u(2705)].setState({ widgetableValues: l });
  }, 800);
}
requestAnimationFrame(vn);
function wn(o, x) {
  const t = r;
  return o.nodeIndexes[t(2236)] !== x.nodeIndexes[t(2236)] || JSON.stringify(o[t(2845)]) !== JSON[t(1410)](x.nodeIndexes) || JSON.stringify(o.nodes) !== JSON[t(1410)](x[t(178)]);
}
let ts = !1;
async function eu() {
  const o = r;
  if (ts) return Promise[o(753)]();
  C0[o(1536)] && Ee.store[o(968)]({ comfyUserToken: C0[o(1536)] }), ts = !0;
}
ix[r(2417)]("comfy-entry");
async function xu(o, x, t) {
  const a = r;
  x[a(1313)]("progress", ({ detail: n }) => {
    const i = a;
    if (!n) return;
    let c = 0, u = 0;
    !isNaN(n.value / n[i(2499)]) && (c = Math[i(2225)](n.value / n[i(2499)] * 100));
    const d = n[i(1721)], l = graph[i(178)].find((f) => f.id == d);
    if (l && l[i(1320)]) {
      const f = 100 / graph[i(178)][i(2236)];
      u = Math.round(l[i(1320)] * f) + (c ? c / 100 * f : 0);
    }
    Ee[i(2705)][i(968)]({ progress: c, graphProgress: u });
  }), x[a(1313)]("status", (n) => {
    var c;
    const i = a;
    (c = n[i(1957)]) != null && c[i(437)] && Ee.store[i(968)]({ queueSize: n.detail[i(437)][i(885)] });
  }), x[a(1313)](a(2e3), ({ detail: n }) => {
    const i = a;
    if (Ee.store[i(968)]({ executingNodeTitle: "", executingNodeID: "", lastError: n.exception_message }), n[i(2249)]) {
      const c = o[i(1235)][i(178)].find((u) => u.id == n[i(2249)]);
      Ee[i(2705)].setState({ widgetableErrors: { [n[i(2249)]]: "[" + ((c == null ? void 0 : c[i(264)]) || n[i(2249)]) + "]" + n[i(2836)] } });
    }
  }), x.addEventListener("executing", (n) => {
    const i = a, c = n[i(1957)], u = graph[i(178)][i(1359)]((d) => d.id == c);
    if (u) {
      const d = 100 / graph[i(178)][i(2236)];
      Ee[i(2705)][i(968)]({ executingNodeTitle: u[i(264)], executingNodeID: u.id, graphProgress: Math[i(2225)](u[i(1320)] * d) });
    }
  }), x[a(1313)](a(2485), () => {
    const n = a;
    Ee[n(2705)][n(968)]({ progress: 0, executingNodeTitle: "", executingNodeID: "" });
  }), x[a(1313)](a(2757), ({ detail: n }) => {
    const i = a;
    Ee.store[i(968)]({ lastError: "", widgetableErrors: {}, progress: 0, executingNodeTitle: "", executingNodeID: "", lastRunTime: Date[i(1742)]() });
  });
  const e = /* @__PURE__ */ new Map();
  x.addEventListener(a(2898), (n) => {
    const i = a;
    Ee.store[i(968)]({ progress: 0, executingNodeTitle: "", executingNodeID: "" });
    const c = (e[i(2157)](n[i(1957)][i(892)]) || [])[i(1622)]((u) => ({ url: u, thumbnail: u }));
    Mi(n[i(1957)][i(892)], c), e[i(1344)](n[i(1957)].prompt_id);
  }), x[a(1313)](a(1866), (n) => {
    const i = a, c = e[i(2157)](n[i(1957)][i(892)]) || [];
    n[i(1957)].output && Array[i(2224)](n.detail[i(1651)][i(1838)]) && n.detail.output[i(1838)][i(2236)] > 0 && c[i(1449)](...n[i(1957)][i(1651)][i(1838)].filter((u) => u[i(2390)] == i(1651)).map((u) => {
      const d = i;
      return location[d(2683)] + location[d(756)] + "api/view?type=" + u[d(2390)] + d(1903) + encodeURIComponent(u[d(218)]) + (u[d(2416)] ? d(254) + encodeURIComponent(u.subfolder) : "");
    })), n.detail.output && Array.isArray(n[i(1957)][i(1651)].sdppp_assets) && n[i(1957)][i(1651)][i(1296)][i(2236)] > 0 && c[i(1449)](...n[i(1957)].output[i(1296)][i(1622)]((u) => {
      const d = i;
      return location[d(2683)] + location.pathname + d(2623) + encodeURIComponent(u);
    })), e[i(2104)](n[i(1957)][i(892)], c);
  });
  let s = null;
  x[a(1313)](a(1808), (n) => {
    s = setTimeout(() => {
      const i = K;
      Ee.store[i(968)]({ comfyWSState: i(1808) });
    }, 1e3);
  }), x[a(1313)]("reconnected", (n) => {
    const i = a;
    Ee.store[i(968)]({ comfyWSState: "connected" }), clearTimeout(s);
  });
}
let $t = [];
(async function() {
  var x, t, a, e, s, n;
  const o = r;
  if (typeof gradioApp == o(233)) {
    try {
      const i = (t = (x = window[o(909)]) == null ? void 0 : x.app) == null ? void 0 : t.app, c = (e = (a = window[o(909)]) == null ? void 0 : a.ui) == null ? void 0 : e[o(1711)], u = (n = (s = window[o(909)]) == null ? void 0 : s[o(834)]) == null ? void 0 : n[o(834)];
      if (!i || !u || !c) throw new Error(o(318));
      await eu(), await gn(), await xu(i, u, c), import("./sdppp-custom.js")[o(667)]((d) => {
        d.default(tx, 2);
      });
    } catch (i) {
      $t[o(1449)](i[o(2527)] || i[o(1354)] || i);
    }
    await new Promise((i) => setTimeout(i, 2e3)), $t.length && console[o(2484)]($t[0]);
  }
})();
