var Na = Object.defineProperty;
var qa = (i, e, t) => e in i ? Na(i, e, { enumerable: !0, configurable: !0, writable: !0, value: t }) : i[e] = t;
var c0 = (i, e, t) => qa(i, typeof e != "symbol" ? e + "" : e, t);
const n = B;
(function(i, e) {
  const t = B, s = i();
  for (; ; )
    try {
      if (-parseInt(t(2527)) / 1 * (-parseInt(t(1553)) / 2) + parseInt(t(2376)) / 3 * (-parseInt(t(1353)) / 4) + parseInt(t(2107)) / 5 + parseInt(t(1955)) / 6 + -parseInt(t(780)) / 7 * (-parseInt(t(306)) / 8) + parseInt(t(1029)) / 9 + -parseInt(t(2161)) / 10 === e) break;
      s.push(s.shift());
    } catch {
      s.push(s.shift());
    }
})(Ne, 821287);
const I0 = window[n(444)][n(1384)].app;
window[n(444)].ui[n(1026)];
const Tx = window.comfyAPI[n(1190)][n(1190)];
var Qs;
class Oa {
  constructor(e) {
    c0(this, Qs);
    const t = n;
    this[t(2326)] = e;
    const s = this[t(1017)]();
    if (!s[t(1100)]) throw new Error(t(2014) + s[t(709)][t(2373)](", "));
  }
  [(Qs = n(2326), n(1017))]() {
    const e = n, t = [];
    (!this[e(2326)][e(1860)] || Object.keys(this[e(2326)][e(1860)]).length === 0) && t.push(e(1685));
    for (const [x, r] of this.definition[e(508)])
      !this[e(2326)][e(1860)][x] && t.push(e(325) + x), !this[e(2326)].nodes[r] && t[e(1251)]("Edge references unknown target node: " + r);
    const s = this[e(1137)]();
    return !s[e(1100)] && t[e(1251)](...s.errors), { valid: t[e(1586)] === 0, errors: t };
  }
  [n(1229)]() {
    const e = n, t = /* @__PURE__ */ new Map();
    for (const s of Object.keys(this.definition[e(1860)]))
      t[e(1396)](s, []);
    for (const [s, x] of this[e(2326)][e(508)]) {
      const r = t[e(2086)](s) || [];
      r[e(1251)](x), t[e(1396)](s, r);
    }
    return t;
  }
  [n(1137)]() {
    const e = n, t = [], s = /* @__PURE__ */ new Set(), x = /* @__PURE__ */ new Set(), r = this.buildDirectedAdjacencyList(), a = (o, c) => {
      const u = B;
      if (x.has(o)) {
        const d = c.indexOf(o), l = c[u(2284)](d)[u(576)](o);
        return t[u(1251)](u(1897) + l[u(2373)](" -> ")), !0;
      }
      if (s[u(1220)](o)) return !1;
      s[u(1732)](o), x[u(1732)](o);
      const f = r[u(2086)](o) || [];
      for (const d of f)
        if (a(d, [...c, o])) return !0;
      return x[u(1574)](o), !1;
    };
    for (const o of Object.keys(this[e(2326)].nodes))
      !s[e(1220)](o) && a(o, []);
    return { valid: t.length === 0, errors: t };
  }
  [n(2082)]() {
    const e = n, t = /* @__PURE__ */ new Map();
    for (const s of Object.keys(this[e(2326)][e(1860)]))
      t.set(s, []);
    for (const [s, x] of this[e(2326)].edges) {
      const r = t[e(2086)](s) || [];
      r[e(1251)](x), t[e(1396)](s, r);
      const a = t[e(2086)](x) || [];
      a[e(1251)](s), t[e(1396)](x, a);
    }
    return t;
  }
  [n(447)](e) {
    const t = n;
    return this[t(2082)]()[t(2086)](e) || [];
  }
  [n(1476)](e) {
    return this[n(2326)].nodes[e];
  }
  [n(779)]() {
    return Object[n(1001)](this.definition.nodes);
  }
  hasEdge(e, t) {
    const s = n;
    return this[s(2326)][s(508)][s(2250)](([x, r]) => x === e && r === t || x === t && r === e);
  }
  [n(2012)](e, t) {
    const s = n;
    if (e === t) return [e];
    const x = this[s(2082)](), r = [{ nodeId: e, path: [e] }], a = /* @__PURE__ */ new Set();
    for (; r[s(1586)] > 0; ) {
      const { nodeId: o, path: c } = r[s(1002)]();
      if (a[s(1220)](o)) continue;
      if (a[s(1732)](o), o === t) return c;
      const u = x.get(o) || [];
      for (const f of u)
        !a[s(1220)](f) && r[s(1251)]({ nodeId: f, path: [...c, f] });
    }
    return null;
  }
  [n(1517)](e, t) {
    return this[n(2012)](e, t) !== null;
  }
  [n(303)]() {
    return { ...this.definition };
  }
}
const br = (i) => {
  let e;
  const t = /* @__PURE__ */ new Set(), s = (u, f) => {
    const d = B, l = typeof u === d(730) ? u(e) : u;
    if (!Object.is(l, e)) {
      const g = e;
      e = f ?? (typeof l != "object" || l === null) ? l : Object.assign({}, e, l), t[d(1562)]((h) => h(e, g));
    }
  }, x = () => e, r = () => c, a = (u) => {
    const f = B;
    return t[f(1732)](u), () => t[f(1574)](u);
  }, o = { setState: s, getState: x, getInitialState: r, subscribe: a }, c = e = i(s, x, o);
  return o;
}, Aa = (i) => i ? br(i) : br;
var R0;
(function(i) {
  const e = n;
  i[e(978)] = (r) => {
  };
  function t(r) {
  }
  i[e(1941)] = t;
  function s(r) {
    throw new Error();
  }
  i[e(1285)] = s, i[e(1731)] = (r) => {
    const a = {};
    for (const o of r)
      a[o] = o;
    return a;
  }, i[e(411)] = (r) => {
    const a = e, o = i[a(1776)](r)[a(275)]((u) => typeof r[r[u]] !== a(369)), c = {};
    for (const u of o)
      c[u] = r[u];
    return i[a(735)](c);
  }, i.objectValues = (r) => i[e(1776)](r).map(function(o) {
    return r[o];
  }), i[e(1776)] = typeof Object[e(1001)] === e(730) ? (r) => Object[e(1001)](r) : (r) => {
    const a = e, o = [];
    for (const c in r)
      Object[a(2173)].hasOwnProperty[a(896)](r, c) && o.push(c);
    return o;
  }, i[e(1703)] = (r, a) => {
    for (const o of r)
      if (a(o)) return o;
  }, i[e(1894)] = typeof Number.isInteger === e(730) ? (r) => Number[e(1894)](r) : (r) => typeof r == "number" && Number[e(1232)](r) && Math[e(900)](r) === r;
  function x(r, a = e(1658)) {
    const o = e;
    return r[o(1889)]((c) => typeof c === o(342) ? "'" + c + "'" : c)[o(2373)](a);
  }
  i[e(1490)] = x, i[e(1188)] = (r, a) => typeof a === e(2149) ? a.toString() : a;
})(R0 || (R0 = {}));
var wr;
(function(i) {
  const e = n;
  i[e(1022)] = (t, s) => ({ ...t, ...s });
})(wr || (wr = {}));
const x0 = R0.arrayToEnum([n(342), n(953), n(369), n(586), n(1752), n(320), n(1566), "bigint", n(2355), n(730), n(1319), n(1817), n(1634), "object", n(1407), "promise", n(2297), n(1358), n(1889), n(1396)]), Px = (i) => {
  const e = n;
  switch (typeof i) {
    case e(1319):
      return x0[e(1319)];
    case "string":
      return x0[e(342)];
    case e(369):
      return Number[e(693)](i) ? x0[e(953)] : x0[e(369)];
    case e(320):
      return x0[e(320)];
    case e(730):
      return x0[e(730)];
    case "bigint":
      return x0[e(2149)];
    case e(2355):
      return x0.symbol;
    case e(1395):
      return Array[e(752)](i) ? x0[e(1634)] : i === null ? x0[e(1817)] : i[e(2055)] && typeof i[e(2055)] == "function" && i[e(989)] && typeof i[e(989)] == "function" ? x0[e(1579)] : typeof Map < "u" && i instanceof Map ? x0[e(1889)] : typeof Set !== e(1319) && i instanceof Set ? x0.set : typeof Date < "u" && i instanceof Date ? x0[e(1566)] : x0[e(1395)];
    default:
      return x0[e(1407)];
  }
}, K = R0.arrayToEnum([n(2428), n(2434), "custom", n(2349), n(2176), "invalid_enum_value", n(755), "invalid_arguments", n(1877), n(872), n(1796), n(1120), n(1643), "invalid_intersection_types", n(2264), "not_finite"]);
class wx extends Error {
  get [n(709)]() {
    return this.issues;
  }
  constructor(e) {
    const t = n;
    super(), this.issues = [], this[t(501)] = (x) => {
      const r = t;
      this.issues = [...this[r(2031)], x];
    }, this[t(610)] = (x = []) => {
      const r = t;
      this[r(2031)] = [...this[r(2031)], ...x];
    };
    const s = new.target[t(2173)];
    Object.setPrototypeOf ? Object[t(1267)](this, s) : this[t(2451)] = s, this.name = "ZodError", this[t(2031)] = e;
  }
  [n(1156)](e) {
    const t = e || function(r) {
      return r[B(2028)];
    }, s = { _errors: [] }, x = (r) => {
      const a = B;
      for (const o of r.issues)
        if (o.code === a(2349)) o[a(756)][a(1889)](x);
        else if (o.code === a(1877)) x(o[a(1047)]);
        else if (o[a(1256)] === a(1099)) x(o[a(1111)]);
        else if (o[a(2501)][a(1586)] === 0) s[a(757)].push(t(o));
        else {
          let c = s, u = 0;
          for (; u < o[a(2501)][a(1586)]; ) {
            const f = o.path[u];
            u === o[a(2501)][a(1586)] - 1 ? (c[f] = c[f] || { _errors: [] }, c[f]._errors[a(1251)](t(o))) : c[f] = c[f] || { _errors: [] }, c = c[f], u++;
          }
        }
    };
    return x(this), s;
  }
  static [n(667)](e) {
    if (!(e instanceof wx)) throw new Error("Not a ZodError: " + e);
  }
  [n(616)]() {
    return this[n(2028)];
  }
  get [n(2028)]() {
    const e = n;
    return JSON[e(2325)](this[e(2031)], R0[e(1188)], 2);
  }
  get [n(314)]() {
    const e = n;
    return this[e(2031)][e(1586)] === 0;
  }
  flatten(e = (t) => t.message) {
    const t = n, s = {}, x = [];
    for (const r of this[t(2031)])
      if (r.path.length > 0) {
        const a = r[t(2501)][0];
        s[a] = s[a] || [], s[a].push(e(r));
      } else x[t(1251)](e(r));
    return { formErrors: x, fieldErrors: s };
  }
  get [n(1924)]() {
    return this[n(595)]();
  }
}
wx[n(2519)] = (i) => new wx(i);
const Tt = (i, e) => {
  const t = n;
  let s;
  switch (i[t(1256)]) {
    case K[t(2428)]:
      i[t(1448)] === x0[t(1319)] ? s = t(1259) : s = "Expected " + i[t(1410)] + t(1095) + i[t(1448)];
      break;
    case K.invalid_literal:
      s = t(2020) + JSON[t(2325)](i[t(1410)], R0[t(1188)]);
      break;
    case K[t(755)]:
      s = t(733) + R0.joinValues(i.keys, ", ");
      break;
    case K.invalid_union:
      s = t(2386);
      break;
    case K[t(2176)]:
      s = t(1506) + R0.joinValues(i[t(1149)]);
      break;
    case K[t(1198)]:
      s = "Invalid enum value. Expected " + R0.joinValues(i[t(1149)]) + t(1226) + i[t(1448)] + "'";
      break;
    case K[t(1099)]:
      s = t(2294);
      break;
    case K.invalid_return_type:
      s = t(1721);
      break;
    case K[t(872)]:
      s = "Invalid date";
      break;
    case K.invalid_string:
      typeof i[t(1201)] == "object" ? t(1101) in i[t(1201)] ? (s = t(1499) + i.validation[t(1101)] + '"', typeof i[t(1201)][t(1501)] === t(369) && (s = s + t(1442) + i[t(1201)][t(1501)])) : t(1710) in i[t(1201)] ? s = t(736) + i.validation[t(1710)] + '"' : t(2402) in i[t(1201)] ? s = t(1957) + i[t(1201)][t(2402)] + '"' : R0[t(1285)](i[t(1201)]) : i[t(1201)] !== t(1367) ? s = t(1914) + i[t(1201)] : s = t(1763);
      break;
    case K[t(1120)]:
      i[t(1594)] === "array" ? s = t(2423) + (i[t(290)] ? t(1830) : i.inclusive ? t(2158) : t(1740)) + " " + i.minimum + t(621) : i.type === t(342) ? s = t(1945) + (i.exact ? t(1830) : i[t(1589)] ? t(2158) : t(888)) + " " + i[t(1677)] + " character(s)" : i[t(1594)] === "number" ? s = "Number must be " + (i.exact ? t(279) : i[t(1589)] ? "greater than or equal to " : "greater than ") + i[t(1677)] : i[t(1594)] === t(2149) ? s = t(2246) + (i[t(290)] ? t(279) : i[t(1589)] ? t(1829) : t(344)) + i[t(1677)] : i[t(1594)] === t(1566) ? s = t(389) + (i[t(290)] ? t(279) : i[t(1589)] ? t(1829) : t(344)) + new Date(Number(i[t(1677)])) : s = t(2386);
      break;
    case K[t(1643)]:
      i[t(1594)] === t(1634) ? s = t(2423) + (i[t(290)] ? t(1830) : i[t(1589)] ? t(304) : t(1162)) + " " + i.maximum + t(621) : i[t(1594)] === t(342) ? s = t(1945) + (i[t(290)] ? t(1830) : i[t(1589)] ? "at most" : t(1412)) + " " + i[t(1869)] + " character(s)" : i[t(1594)] === "number" ? s = "Number must be " + (i.exact ? t(1830) : i[t(1589)] ? "less than or equal to" : "less than") + " " + i[t(1869)] : i[t(1594)] === "bigint" ? s = t(833) + (i.exact ? t(1830) : i.inclusive ? "less than or equal to" : t(1162)) + " " + i[t(1869)] : i[t(1594)] === t(1566) ? s = "Date must be " + (i[t(290)] ? t(1830) : i.inclusive ? t(1043) : t(2407)) + " " + new Date(Number(i[t(1869)])) : s = t(2386);
      break;
    case K[t(674)]:
      s = t(2386);
      break;
    case K[t(1862)]:
      s = t(1273);
      break;
    case K[t(2264)]:
      s = t(1702) + i[t(2387)];
      break;
    case K[t(727)]:
      s = t(1535);
      break;
    default:
      s = e[t(1330)], R0[t(1285)](i);
  }
  return { message: s };
};
let Ta = Tt;
function Da() {
  return Ta;
}
const ja = (i) => {
  const e = n, { data: t, path: s, errorMaps: x, issueData: r } = i, a = [...s, ...r[e(2501)] || []], o = { ...r, path: a };
  if (r[e(2028)] !== void 0) return { ...r, path: a, message: r[e(2028)] };
  let c = "";
  const u = x.filter((f) => !!f)[e(2284)]()[e(1142)]();
  for (const f of u)
    c = f(o, { data: t, defaultError: c })[e(2028)];
  return { ...r, path: a, message: c };
};
function Y(i, e) {
  const t = n, s = Da(), x = ja({ issueData: e, data: i[t(1024)], path: i.path, errorMaps: [i[t(639)].contextualErrorMap, i[t(931)], s, s === Tt ? void 0 : Tt][t(275)]((r) => !!r) });
  i[t(639)].issues[t(1251)](x);
}
class xx {
  constructor() {
    const e = n;
    this.value = e(1100);
  }
  [n(2305)]() {
    const e = n;
    this.value === "valid" && (this[e(778)] = e(2305));
  }
  [n(846)]() {
    const e = n;
    this.value !== e(2507) && (this[e(778)] = e(2507));
  }
  static [n(764)](e, t) {
    const s = n, x = [];
    for (const r of t) {
      if (r[s(801)] === s(2507)) return h0;
      r.status === "dirty" && e[s(2305)](), x[s(1251)](r[s(778)]);
    }
    return { status: e[s(778)], value: x };
  }
  static async [n(302)](e, t) {
    const s = n, x = [];
    for (const r of t) {
      const a = await r[s(635)], o = await r.value;
      x.push({ key: a, value: o });
    }
    return xx[s(1006)](e, x);
  }
  static [n(1006)](e, t) {
    const s = n, x = {};
    for (const r of t) {
      const { key: a, value: o } = r;
      if (a[s(801)] === s(2507) || o.status === s(2507)) return h0;
      a.status === "dirty" && e.dirty(), o.status === s(2305) && e[s(2305)](), a.value !== s(2451) && (typeof o[s(778)] !== s(1319) || r[s(2536)]) && (x[a[s(778)]] = o.value);
    }
    return { status: e[s(778)], value: x };
  }
}
const h0 = Object[n(1138)]({ status: n(2507) }), Xx = (i) => ({ status: n(2305), value: i }), rx = (i) => ({ status: n(1100), value: i }), Sr = (i) => i[n(801)] === n(2507), Er = (i) => i.status === n(2305), Wx = (i) => i[n(801)] === n(1100), ge = (i) => typeof Promise !== n(1319) && i instanceof Promise;
var r0;
(function(i) {
  const e = n;
  i[e(427)] = (t) => typeof t == "string" ? { message: t } : t || {}, i.toString = (t) => typeof t === e(342) ? t : t == null ? void 0 : t[e(2028)];
})(r0 || (r0 = {}));
class hx {
  constructor(e, t, s, x) {
    const r = n;
    this[r(1351)] = [], this[r(2300)] = e, this[r(1024)] = t, this[r(1631)] = s, this[r(454)] = x;
  }
  get [n(2501)]() {
    const e = n;
    return !this[e(1351)].length && (Array[e(752)](this[e(454)]) ? this[e(1351)][e(1251)](...this[e(1631)], ...this[e(454)]) : this[e(1351)].push(...this[e(1631)], this[e(454)])), this._cachedPath;
  }
}
const kr = (i, e) => {
  const t = n;
  if (Wx(e)) return { success: !0, data: e[t(778)] };
  if (!i[t(639)][t(2031)].length) throw new Error(t(1316));
  return { success: !1, get error() {
    const s = t;
    if (this[s(761)]) return this[s(761)];
    const x = new wx(i.common[s(2031)]);
    return this[s(761)] = x, this[s(761)];
  } };
};
function v0(i) {
  const e = n;
  if (!i) return {};
  const { errorMap: t, invalid_type_error: s, required_error: x, description: r } = i;
  if (t && (s || x)) throw new Error(e(1785));
  return t ? { errorMap: t, description: r } : { errorMap: (o, c) => {
    const u = e, { message: f } = i;
    return o[u(1256)] === u(1198) ? { message: f ?? c[u(1330)] } : typeof c[u(1024)] === u(1319) ? { message: f ?? x ?? c[u(1330)] } : o[u(1256)] !== u(2428) ? { message: c.defaultError } : { message: f ?? s ?? c[u(1330)] };
  }, description: r };
}
class E0 {
  get [n(1053)]() {
    const e = n;
    return this._def[e(1053)];
  }
  [n(884)](e) {
    return Px(e[n(1024)]);
  }
  [n(1080)](e, t) {
    const s = n;
    return t || { common: e[s(2300)][s(639)], data: e[s(1024)], parsedType: Px(e.data), schemaErrorMap: this._def.errorMap, path: e[s(2501)], parent: e[s(2300)] };
  }
  _processInputParams(e) {
    const t = n;
    return { status: new xx(), ctx: { common: e.parent[t(639)], data: e.data, parsedType: Px(e[t(1024)]), schemaErrorMap: this[t(2035)][t(1510)], path: e[t(2501)], parent: e[t(2300)] } };
  }
  [n(1833)](e) {
    const t = this._parse(e);
    if (ge(t)) throw new Error("Synchronous parse encountered promise.");
    return t;
  }
  [n(1604)](e) {
    const t = n, s = this[t(510)](e);
    return Promise[t(1666)](s);
  }
  parse(e, t) {
    const s = n, x = this[s(527)](e, t);
    if (x[s(2462)]) return x[s(1024)];
    throw x.error;
  }
  [n(527)](e, t) {
    const s = n, x = { common: { issues: [], async: (t == null ? void 0 : t[s(646)]) ?? !1, contextualErrorMap: t == null ? void 0 : t[s(1510)] }, path: (t == null ? void 0 : t.path) || [], schemaErrorMap: this[s(2035)].errorMap, parent: null, data: e, parsedType: Px(e) }, r = this[s(1833)]({ data: e, path: x.path, parent: x });
    return kr(x, r);
  }
  [n(2027)](e) {
    var x, r;
    const t = n, s = { common: { issues: [], async: !!this["~standard"][t(646)] }, path: [], schemaErrorMap: this[t(2035)][t(1510)], parent: null, data: e, parsedType: Px(e) };
    if (!this[t(1546)][t(646)]) try {
      const a = this[t(1833)]({ data: e, path: [], parent: s });
      return Wx(a) ? { value: a[t(778)] } : { issues: s[t(639)][t(2031)] };
    } catch (a) {
      (r = (x = a == null ? void 0 : a[t(2028)]) == null ? void 0 : x[t(383)]()) != null && r.includes(t(1409)) && (this[t(1546)][t(646)] = !0), s.common = { issues: [], async: !0 };
    }
    return this[t(1604)]({ data: e, path: [], parent: s })[t(2055)]((a) => Wx(a) ? { value: a[t(778)] } : { issues: s.common[t(2031)] });
  }
  async [n(2301)](e, t) {
    const s = n, x = await this.safeParseAsync(e, t);
    if (x.success) return x[s(1024)];
    throw x[s(549)];
  }
  async [n(1405)](e, t) {
    const s = n, x = { common: { issues: [], contextualErrorMap: t == null ? void 0 : t[s(1510)], async: !0 }, path: (t == null ? void 0 : t.path) || [], schemaErrorMap: this[s(2035)][s(1510)], parent: null, data: e, parsedType: Px(e) }, r = this[s(510)]({ data: e, path: x.path, parent: x }), a = await (ge(r) ? r : Promise[s(1666)](r));
    return kr(x, a);
  }
  [n(2397)](e, t) {
    const s = (x) => {
      const r = B;
      return typeof t == "string" || typeof t > "u" ? { message: t } : typeof t === r(730) ? t(x) : t;
    };
    return this._refinement((x, r) => {
      const a = B, o = e(x), c = () => r[a(501)]({ code: K.custom, ...s(x) });
      return typeof Promise !== a(1319) && o instanceof Promise ? o[a(2055)]((u) => u ? !0 : (c(), !1)) : o ? !0 : (c(), !1);
    });
  }
  [n(1464)](e, t) {
    const s = n;
    return this[s(986)]((x, r) => {
      const a = s;
      return e(x) ? !0 : (r.addIssue(typeof t === a(730) ? t(x, r) : t), !1);
    });
  }
  _refinement(e) {
    const t = n;
    return new Ox({ schema: this, typeName: p0.ZodEffects, effect: { type: t(1464), refinement: e } });
  }
  [n(1458)](e) {
    return this[n(986)](e);
  }
  constructor(e) {
    const t = n;
    this[t(2558)] = this[t(1405)], this._def = e, this[t(1938)] = this[t(1938)][t(1722)](this), this[t(527)] = this[t(527)][t(1722)](this), this.parseAsync = this[t(2301)].bind(this), this.safeParseAsync = this.safeParseAsync[t(1722)](this), this[t(2558)] = this[t(2558)][t(1722)](this), this[t(2397)] = this.refine[t(1722)](this), this[t(1464)] = this[t(1464)][t(1722)](this), this.superRefine = this[t(1458)].bind(this), this[t(2338)] = this[t(2338)].bind(this), this[t(2411)] = this[t(2411)].bind(this), this[t(1555)] = this.nullish[t(1722)](this), this[t(1634)] = this[t(1634)][t(1722)](this), this[t(1579)] = this.promise[t(1722)](this), this.or = this.or.bind(this), this[t(2102)] = this[t(2102)][t(1722)](this), this[t(916)] = this[t(916)][t(1722)](this), this[t(1534)] = this[t(1534)][t(1722)](this), this[t(664)] = this[t(664)][t(1722)](this), this[t(989)] = this.catch.bind(this), this[t(1982)] = this[t(1982)][t(1722)](this), this[t(363)] = this[t(363)].bind(this), this[t(633)] = this[t(633)][t(1722)](this), this.isNullable = this[t(1783)][t(1722)](this), this[t(1925)] = this[t(1925)].bind(this), this["~standard"] = { version: 1, vendor: t(2208), validate: (s) => this[t(2027)](s) };
  }
  optional() {
    const e = n;
    return bx[e(2519)](this, this[e(2035)]);
  }
  [n(2411)]() {
    const e = n;
    return Mx[e(2519)](this, this[e(2035)]);
  }
  nullish() {
    const e = n;
    return this[e(2411)]()[e(2338)]();
  }
  [n(1634)]() {
    return lx[n(2519)](this);
  }
  [n(1579)]() {
    const e = n;
    return Ee.create(this, this[e(2035)]);
  }
  or(e) {
    const t = n;
    return ye[t(2519)]([this, e], this[t(2035)]);
  }
  [n(2102)](e) {
    const t = n;
    return be[t(2519)](this, e, this[t(2035)]);
  }
  transform(e) {
    const t = n;
    return new Ox({ ...v0(this[t(2035)]), schema: this, typeName: p0[t(1587)], effect: { type: "transform", transform: e } });
  }
  default(e) {
    const t = n, s = typeof e === t(730) ? e : () => e;
    return new ke({ ...v0(this._def), innerType: this, defaultValue: s, typeName: p0[t(1744)] });
  }
  brand() {
    const e = n;
    return new Dn({ typeName: p0[e(933)], type: this, ...v0(this[e(2035)]) });
  }
  [n(989)](e) {
    const t = n, s = typeof e == "function" ? e : () => e;
    return new Pe({ ...v0(this[t(2035)]), innerType: this, catchValue: s, typeName: p0.ZodCatch });
  }
  [n(1982)](e) {
    const t = this.constructor;
    return new t({ ...this._def, description: e });
  }
  pipe(e) {
    return _t[n(2519)](this, e);
  }
  [n(633)]() {
    return Ce.create(this);
  }
  [n(1925)]() {
    const e = n;
    return this[e(527)](void 0)[e(2462)];
  }
  isNullable() {
    const e = n;
    return this[e(527)](null)[e(2462)];
  }
}
const Ma = /^c[^\s-]{8,}$/i, La = /^[0-9a-z]+$/, $a = /^[0-9A-HJKMNP-TV-Z]{26}$/i, za = /^[0-9a-fA-F]{8}\b-[0-9a-fA-F]{4}\b-[0-9a-fA-F]{4}\b-[0-9a-fA-F]{4}\b-[0-9a-fA-F]{12}$/i, Ha = /^[a-z0-9_-]{21}$/i, Ua = /^[A-Za-z0-9-_]+\.[A-Za-z0-9-_]+\.[A-Za-z0-9-_]*$/, Va = /^[-+]?P(?!$)(?:(?:[-+]?\d+Y)|(?:[-+]?\d+[.,]\d+Y$))?(?:(?:[-+]?\d+M)|(?:[-+]?\d+[.,]\d+M$))?(?:(?:[-+]?\d+W)|(?:[-+]?\d+[.,]\d+W$))?(?:(?:[-+]?\d+D)|(?:[-+]?\d+[.,]\d+D$))?(?:T(?=[\d+-])(?:(?:[-+]?\d+H)|(?:[-+]?\d+[.,]\d+H$))?(?:(?:[-+]?\d+M)|(?:[-+]?\d+[.,]\d+M$))?(?:[-+]?\d+(?:[.,]\d+)?S)?)??$/, Wa = /^(?!\.)(?!.*\.\.)([A-Z0-9_'+\-\.]*)[A-Z0-9_+-]@([A-Z0-9][A-Z0-9\-]*\.)+[A-Z]{2,}$/i, Ba = "^(\\p{Extended_Pictographic}|\\p{Emoji_Component})+$";
let ze;
const Za = /^(?:(?:25[0-5]|2[0-4][0-9]|1[0-9][0-9]|[1-9][0-9]|[0-9])\.){3}(?:25[0-5]|2[0-4][0-9]|1[0-9][0-9]|[1-9][0-9]|[0-9])$/, Ka = /^(?:(?:25[0-5]|2[0-4][0-9]|1[0-9][0-9]|[1-9][0-9]|[0-9])\.){3}(?:25[0-5]|2[0-4][0-9]|1[0-9][0-9]|[1-9][0-9]|[0-9])\/(3[0-2]|[12]?[0-9])$/, Ja = /^(([0-9a-fA-F]{1,4}:){7,7}[0-9a-fA-F]{1,4}|([0-9a-fA-F]{1,4}:){1,7}:|([0-9a-fA-F]{1,4}:){1,6}:[0-9a-fA-F]{1,4}|([0-9a-fA-F]{1,4}:){1,5}(:[0-9a-fA-F]{1,4}){1,2}|([0-9a-fA-F]{1,4}:){1,4}(:[0-9a-fA-F]{1,4}){1,3}|([0-9a-fA-F]{1,4}:){1,3}(:[0-9a-fA-F]{1,4}){1,4}|([0-9a-fA-F]{1,4}:){1,2}(:[0-9a-fA-F]{1,4}){1,5}|[0-9a-fA-F]{1,4}:((:[0-9a-fA-F]{1,4}){1,6})|:((:[0-9a-fA-F]{1,4}){1,7}|:)|fe80:(:[0-9a-fA-F]{0,4}){0,4}%[0-9a-zA-Z]{1,}|::(ffff(:0{1,4}){0,1}:){0,1}((25[0-5]|(2[0-4]|1{0,1}[0-9]){0,1}[0-9])\.){3,3}(25[0-5]|(2[0-4]|1{0,1}[0-9]){0,1}[0-9])|([0-9a-fA-F]{1,4}:){1,4}:((25[0-5]|(2[0-4]|1{0,1}[0-9]){0,1}[0-9])\.){3,3}(25[0-5]|(2[0-4]|1{0,1}[0-9]){0,1}[0-9]))$/, Qa = /^(([0-9a-fA-F]{1,4}:){7,7}[0-9a-fA-F]{1,4}|([0-9a-fA-F]{1,4}:){1,7}:|([0-9a-fA-F]{1,4}:){1,6}:[0-9a-fA-F]{1,4}|([0-9a-fA-F]{1,4}:){1,5}(:[0-9a-fA-F]{1,4}){1,2}|([0-9a-fA-F]{1,4}:){1,4}(:[0-9a-fA-F]{1,4}){1,3}|([0-9a-fA-F]{1,4}:){1,3}(:[0-9a-fA-F]{1,4}){1,4}|([0-9a-fA-F]{1,4}:){1,2}(:[0-9a-fA-F]{1,4}){1,5}|[0-9a-fA-F]{1,4}:((:[0-9a-fA-F]{1,4}){1,6})|:((:[0-9a-fA-F]{1,4}){1,7}|:)|fe80:(:[0-9a-fA-F]{0,4}){0,4}%[0-9a-zA-Z]{1,}|::(ffff(:0{1,4}){0,1}:){0,1}((25[0-5]|(2[0-4]|1{0,1}[0-9]){0,1}[0-9])\.){3,3}(25[0-5]|(2[0-4]|1{0,1}[0-9]){0,1}[0-9])|([0-9a-fA-F]{1,4}:){1,4}:((25[0-5]|(2[0-4]|1{0,1}[0-9]){0,1}[0-9])\.){3,3}(25[0-5]|(2[0-4]|1{0,1}[0-9]){0,1}[0-9]))\/(12[0-8]|1[01][0-9]|[1-9]?[0-9])$/, Ga = /^([0-9a-zA-Z+/]{4})*(([0-9a-zA-Z+/]{2}==)|([0-9a-zA-Z+/]{3}=))?$/, Xa = /^([0-9a-zA-Z-_]{4})*(([0-9a-zA-Z-_]{2}(==)?)|([0-9a-zA-Z-_]{3}(=)?))?$/, On = n(2148), Ya = new RegExp("^" + On + "$");
function An(i) {
  const e = n;
  let t = "[0-5]\\d";
  i.precision ? t = t + e(568) + i[e(767)] + "}" : i[e(767)] == null && (t = t + e(2479));
  const s = i[e(767)] ? "+" : "?";
  return e(1640) + t + ")" + s;
}
function _a(i) {
  return new RegExp("^" + An(i) + "$");
}
function xi(i) {
  const e = n;
  let t = On + "T" + An(i);
  const s = [];
  return s.push(i.local ? "Z?" : "Z"), i.offset && s.push("([+-]\\d{2}:?\\d{2})"), t = t + "(" + s[e(2373)]("|") + ")", new RegExp("^" + t + "$");
}
function ei(i, e) {
  const t = n;
  return !!((e === "v4" || !e) && Za[t(2500)](i) || (e === "v6" || !e) && Ja[t(2500)](i));
}
function ti(i, e) {
  const t = n;
  if (!Ua[t(2500)](i)) return !1;
  try {
    const [s] = i[t(458)](".");
    if (!s) return !1;
    const x = s[t(969)](/-/g, "+")[t(969)](/_/g, "/")[t(828)](s[t(1586)] + (4 - s[t(1586)] % 4) % 4, "="), r = JSON[t(1938)](atob(x));
    return !(typeof r !== t(1395) || r === null || t(893) in r && (r == null ? void 0 : r[t(893)]) !== t(1495) || !r[t(545)] || e && r[t(545)] !== e);
  } catch {
    return !1;
  }
}
function ri(i, e) {
  const t = n;
  return !!((e === "v4" || !e) && Ka.test(i) || (e === "v6" || !e) && Qa[t(2500)](i));
}
class yx extends E0 {
  _parse(e) {
    const t = n;
    if (this[t(2035)][t(1147)] && (e[t(1024)] = String(e[t(1024)])), this[t(884)](e) !== x0.string) {
      const a = this[t(1080)](e);
      return Y(a, { code: K.invalid_type, expected: x0[t(342)], received: a[t(2493)] }), h0;
    }
    const x = new xx();
    let r;
    for (const a of this[t(2035)][t(1057)])
      if (a[t(1599)] === t(644)) e[t(1024)][t(1586)] < a[t(778)] && (r = this[t(1080)](e, r), Y(r, { code: K[t(1120)], minimum: a[t(778)], type: t(342), inclusive: !0, exact: !1, message: a[t(2028)] }), x.dirty());
      else if (a.kind === "max") e[t(1024)][t(1586)] > a.value && (r = this._getOrReturnCtx(e, r), Y(r, { code: K[t(1643)], maximum: a[t(778)], type: t(342), inclusive: !0, exact: !1, message: a.message }), x[t(2305)]());
      else if (a[t(1599)] === t(1586)) {
        const o = e[t(1024)][t(1586)] > a.value, c = e[t(1024)][t(1586)] < a[t(778)];
        (o || c) && (r = this._getOrReturnCtx(e, r), o ? Y(r, { code: K.too_big, maximum: a[t(778)], type: t(342), inclusive: !0, exact: !0, message: a[t(2028)] }) : c && Y(r, { code: K.too_small, minimum: a[t(778)], type: t(342), inclusive: !0, exact: !0, message: a.message }), x[t(2305)]());
      } else if (a.kind === t(1215)) !Wa[t(2500)](e.data) && (r = this[t(1080)](e, r), Y(r, { validation: t(1215), code: K[t(1796)], message: a[t(2028)] }), x[t(2305)]());
      else if (a[t(1599)] === "emoji") !ze && (ze = new RegExp(Ba, "u")), !ze[t(2500)](e[t(1024)]) && (r = this[t(1080)](e, r), Y(r, { validation: t(2213), code: K[t(1796)], message: a[t(2028)] }), x.dirty());
      else if (a[t(1599)] === t(509)) !za.test(e.data) && (r = this[t(1080)](e, r), Y(r, { validation: t(509), code: K[t(1796)], message: a[t(2028)] }), x[t(2305)]());
      else if (a[t(1599)] === t(1109)) !Ha.test(e[t(1024)]) && (r = this[t(1080)](e, r), Y(r, { validation: t(1109), code: K[t(1796)], message: a[t(2028)] }), x[t(2305)]());
      else if (a[t(1599)] === "cuid") !Ma[t(2500)](e[t(1024)]) && (r = this[t(1080)](e, r), Y(r, { validation: "cuid", code: K[t(1796)], message: a.message }), x[t(2305)]());
      else if (a[t(1599)] === t(2522)) !La[t(2500)](e[t(1024)]) && (r = this._getOrReturnCtx(e, r), Y(r, { validation: t(2522), code: K[t(1796)], message: a[t(2028)] }), x[t(2305)]());
      else if (a.kind === t(351)) !$a[t(2500)](e[t(1024)]) && (r = this[t(1080)](e, r), Y(r, { validation: t(351), code: K[t(1796)], message: a[t(2028)] }), x[t(2305)]());
      else if (a[t(1599)] === t(356)) try {
        new URL(e.data);
      } catch {
        r = this[t(1080)](e, r), Y(r, { validation: t(356), code: K[t(1796)], message: a.message }), x[t(2305)]();
      }
      else
        a[t(1599)] === t(1367) ? (a[t(1367)].lastIndex = 0, !a[t(1367)][t(2500)](e[t(1024)]) && (r = this._getOrReturnCtx(e, r), Y(r, { validation: t(1367), code: K[t(1796)], message: a[t(2028)] }), x.dirty())) : a[t(1599)] === t(1420) ? e[t(1024)] = e[t(1024)][t(1420)]() : a[t(1599)] === "includes" ? !e.data.includes(a[t(778)], a[t(1501)]) && (r = this._getOrReturnCtx(e, r), Y(r, { code: K[t(1796)], validation: { includes: a[t(778)], position: a[t(1501)] }, message: a.message }), x.dirty()) : a[t(1599)] === t(383) ? e[t(1024)] = e[t(1024)][t(383)]() : a[t(1599)] === t(592) ? e[t(1024)] = e[t(1024)][t(592)]() : a[t(1599)] === t(1710) ? !e[t(1024)][t(1710)](a[t(778)]) && (r = this[t(1080)](e, r), Y(r, { code: K.invalid_string, validation: { startsWith: a[t(778)] }, message: a[t(2028)] }), x[t(2305)]()) : a[t(1599)] === t(2402) ? !e.data[t(2402)](a.value) && (r = this[t(1080)](e, r), Y(r, { code: K[t(1796)], validation: { endsWith: a.value }, message: a[t(2028)] }), x[t(2305)]()) : a.kind === t(706) ? !xi(a)[t(2500)](e[t(1024)]) && (r = this._getOrReturnCtx(e, r), Y(r, { code: K.invalid_string, validation: "datetime", message: a.message }), x[t(2305)]()) : a[t(1599)] === "date" ? !Ya[t(2500)](e[t(1024)]) && (r = this._getOrReturnCtx(e, r), Y(r, { code: K[t(1796)], validation: t(1566), message: a[t(2028)] }), x.dirty()) : a[t(1599)] === t(1339) ? !_a(a).test(e[t(1024)]) && (r = this[t(1080)](e, r), Y(r, { code: K[t(1796)], validation: t(1339), message: a[t(2028)] }), x.dirty()) : a[t(1599)] === "duration" ? !Va[t(2500)](e[t(1024)]) && (r = this[t(1080)](e, r), Y(r, { validation: t(1435), code: K[t(1796)], message: a[t(2028)] }), x.dirty()) : a[t(1599)] === "ip" ? !ei(e.data, a[t(1767)]) && (r = this[t(1080)](e, r), Y(r, { validation: "ip", code: K[t(1796)], message: a[t(2028)] }), x[t(2305)]()) : a[t(1599)] === t(1279) ? !ti(e[t(1024)], a.alg) && (r = this._getOrReturnCtx(e, r), Y(r, { validation: "jwt", code: K[t(1796)], message: a[t(2028)] }), x.dirty()) : a.kind === "cidr" ? !ri(e[t(1024)], a[t(1767)]) && (r = this[t(1080)](e, r), Y(r, { validation: "cidr", code: K[t(1796)], message: a.message }), x[t(2305)]()) : a[t(1599)] === t(1768) ? !Ga[t(2500)](e.data) && (r = this[t(1080)](e, r), Y(r, { validation: t(1768), code: K.invalid_string, message: a[t(2028)] }), x[t(2305)]()) : a[t(1599)] === "base64url" ? !Xa[t(2500)](e.data) && (r = this[t(1080)](e, r), Y(r, { validation: t(2396), code: K[t(1796)], message: a[t(2028)] }), x[t(2305)]()) : R0[t(1285)](a);
    return { status: x[t(778)], value: e[t(1024)] };
  }
  [n(1302)](e, t, s) {
    const x = n;
    return this.refinement((r) => e[x(2500)](r), { validation: t, code: K[x(1796)], ...r0[x(427)](s) });
  }
  [n(830)](e) {
    return new yx({ ...this._def, checks: [...this._def.checks, e] });
  }
  [n(1215)](e) {
    const t = n;
    return this[t(830)]({ kind: t(1215), ...r0.errToObj(e) });
  }
  url(e) {
    const t = n;
    return this[t(830)]({ kind: t(356), ...r0[t(427)](e) });
  }
  [n(2213)](e) {
    const t = n;
    return this[t(830)]({ kind: t(2213), ...r0[t(427)](e) });
  }
  [n(509)](e) {
    const t = n;
    return this[t(830)]({ kind: t(509), ...r0[t(427)](e) });
  }
  [n(1109)](e) {
    const t = n;
    return this._addCheck({ kind: t(1109), ...r0[t(427)](e) });
  }
  [n(1011)](e) {
    const t = n;
    return this._addCheck({ kind: "cuid", ...r0[t(427)](e) });
  }
  [n(2522)](e) {
    const t = n;
    return this[t(830)]({ kind: "cuid2", ...r0[t(427)](e) });
  }
  ulid(e) {
    const t = n;
    return this[t(830)]({ kind: t(351), ...r0[t(427)](e) });
  }
  [n(1768)](e) {
    const t = n;
    return this._addCheck({ kind: t(1768), ...r0[t(427)](e) });
  }
  base64url(e) {
    const t = n;
    return this[t(830)]({ kind: t(2396), ...r0.errToObj(e) });
  }
  [n(1279)](e) {
    return this[n(830)]({ kind: "jwt", ...r0.errToObj(e) });
  }
  ip(e) {
    const t = n;
    return this[t(830)]({ kind: "ip", ...r0[t(427)](e) });
  }
  [n(958)](e) {
    const t = n;
    return this._addCheck({ kind: t(958), ...r0.errToObj(e) });
  }
  [n(706)](e) {
    const t = n;
    return typeof e == "string" ? this[t(830)]({ kind: t(706), precision: null, offset: !1, local: !1, message: e }) : this[t(830)]({ kind: t(706), precision: typeof (e == null ? void 0 : e.precision) === t(1319) ? null : e == null ? void 0 : e[t(767)], offset: (e == null ? void 0 : e[t(397)]) ?? !1, local: (e == null ? void 0 : e.local) ?? !1, ...r0[t(427)](e == null ? void 0 : e[t(2028)]) });
  }
  [n(1566)](e) {
    const t = n;
    return this[t(830)]({ kind: t(1566), message: e });
  }
  [n(1339)](e) {
    const t = n;
    return typeof e == "string" ? this[t(830)]({ kind: t(1339), precision: null, message: e }) : this[t(830)]({ kind: t(1339), precision: typeof (e == null ? void 0 : e[t(767)]) > "u" ? null : e == null ? void 0 : e[t(767)], ...r0[t(427)](e == null ? void 0 : e[t(2028)]) });
  }
  [n(1435)](e) {
    const t = n;
    return this._addCheck({ kind: "duration", ...r0[t(427)](e) });
  }
  regex(e, t) {
    const s = n;
    return this[s(830)]({ kind: s(1367), regex: e, ...r0[s(427)](t) });
  }
  [n(1101)](e, t) {
    const s = n;
    return this[s(830)]({ kind: "includes", value: e, position: t == null ? void 0 : t[s(1501)], ...r0[s(427)](t == null ? void 0 : t[s(2028)]) });
  }
  [n(1710)](e, t) {
    const s = n;
    return this[s(830)]({ kind: s(1710), value: e, ...r0[s(427)](t) });
  }
  [n(2402)](e, t) {
    const s = n;
    return this[s(830)]({ kind: s(2402), value: e, ...r0.errToObj(t) });
  }
  [n(644)](e, t) {
    const s = n;
    return this[s(830)]({ kind: s(644), value: e, ...r0[s(427)](t) });
  }
  [n(2328)](e, t) {
    const s = n;
    return this[s(830)]({ kind: s(2328), value: e, ...r0.errToObj(t) });
  }
  length(e, t) {
    const s = n;
    return this[s(830)]({ kind: s(1586), value: e, ...r0[s(427)](t) });
  }
  [n(751)](e) {
    const t = n;
    return this[t(644)](1, r0[t(427)](e));
  }
  [n(1420)]() {
    const e = n;
    return new yx({ ...this[e(2035)], checks: [...this[e(2035)][e(1057)], { kind: e(1420) }] });
  }
  [n(383)]() {
    const e = n;
    return new yx({ ...this._def, checks: [...this._def[e(1057)], { kind: e(383) }] });
  }
  [n(592)]() {
    const e = n;
    return new yx({ ...this._def, checks: [...this[e(2035)][e(1057)], { kind: e(592) }] });
  }
  get [n(1674)]() {
    const e = n;
    return !!this[e(2035)].checks.find((t) => t[e(1599)] === e(706));
  }
  get [n(1209)]() {
    const e = n;
    return !!this[e(2035)][e(1057)].find((t) => t[e(1599)] === e(1566));
  }
  get [n(365)]() {
    const e = n;
    return !!this[e(2035)][e(1057)][e(1703)]((t) => t[e(1599)] === e(1339));
  }
  get [n(697)]() {
    const e = n;
    return !!this[e(2035)][e(1057)][e(1703)]((t) => t[e(1599)] === e(1435));
  }
  get [n(2073)]() {
    const e = n;
    return !!this._def[e(1057)][e(1703)]((t) => t[e(1599)] === "email");
  }
  get [n(1187)]() {
    const e = n;
    return !!this[e(2035)].checks[e(1703)]((t) => t[e(1599)] === e(356));
  }
  get [n(1753)]() {
    const e = n;
    return !!this._def.checks.find((t) => t[e(1599)] === "emoji");
  }
  get isUUID() {
    const e = n;
    return !!this[e(2035)][e(1057)][e(1703)]((t) => t[e(1599)] === e(509));
  }
  get isNANOID() {
    const e = n;
    return !!this[e(2035)][e(1057)][e(1703)]((t) => t[e(1599)] === e(1109));
  }
  get [n(1496)]() {
    const e = n;
    return !!this[e(2035)].checks[e(1703)]((t) => t[e(1599)] === e(1011));
  }
  get [n(734)]() {
    const e = n;
    return !!this._def[e(1057)].find((t) => t.kind === "cuid2");
  }
  get [n(999)]() {
    const e = n;
    return !!this[e(2035)][e(1057)][e(1703)]((t) => t[e(1599)] === "ulid");
  }
  get [n(391)]() {
    const e = n;
    return !!this[e(2035)][e(1057)][e(1703)]((t) => t[e(1599)] === "ip");
  }
  get [n(2269)]() {
    const e = n;
    return !!this[e(2035)][e(1057)][e(1703)]((t) => t[e(1599)] === "cidr");
  }
  get [n(797)]() {
    const e = n;
    return !!this[e(2035)][e(1057)][e(1703)]((t) => t.kind === "base64");
  }
  get [n(1072)]() {
    const e = n;
    return !!this._def[e(1057)].find((t) => t.kind === e(2396));
  }
  get minLength() {
    const e = n;
    let t = null;
    for (const s of this[e(2035)][e(1057)])
      s.kind === e(644) && (t === null || s[e(778)] > t) && (t = s[e(778)]);
    return t;
  }
  get [n(502)]() {
    const e = n;
    let t = null;
    for (const s of this._def[e(1057)])
      s[e(1599)] === e(2328) && (t === null || s.value < t) && (t = s.value);
    return t;
  }
}
yx[n(2519)] = (i) => {
  const e = n;
  return new yx({ checks: [], typeName: p0[e(1221)], coerce: (i == null ? void 0 : i.coerce) ?? !1, ...v0(i) });
};
function si(i, e) {
  const t = n, s = (i[t(616)]().split(".")[1] || "")[t(1586)], x = (e.toString()[t(458)](".")[1] || "")[t(1586)], r = s > x ? s : x, a = Number.parseInt(i[t(2117)](r).replace(".", "")), o = Number.parseInt(e[t(2117)](r)[t(969)](".", ""));
  return a % o / 10 ** r;
}
class Bx extends E0 {
  constructor() {
    const e = n;
    super(...arguments), this.min = this[e(1391)], this[e(2328)] = this[e(948)], this[e(1995)] = this[e(2387)];
  }
  [n(510)](e) {
    const t = n;
    if (this[t(2035)].coerce && (e[t(1024)] = Number(e[t(1024)])), this[t(884)](e) !== x0[t(369)]) {
      const a = this[t(1080)](e);
      return Y(a, { code: K.invalid_type, expected: x0.number, received: a[t(2493)] }), h0;
    }
    let x;
    const r = new xx();
    for (const a of this[t(2035)][t(1057)])
      a.kind === t(1699) ? !R0[t(1894)](e[t(1024)]) && (x = this._getOrReturnCtx(e, x), Y(x, { code: K[t(2428)], expected: "integer", received: t(1752), message: a.message }), r[t(2305)]()) : a[t(1599)] === t(644) ? (a[t(1589)] ? e[t(1024)] < a[t(778)] : e.data <= a[t(778)]) && (x = this._getOrReturnCtx(e, x), Y(x, { code: K.too_small, minimum: a[t(778)], type: t(369), inclusive: a[t(1589)], exact: !1, message: a[t(2028)] }), r[t(2305)]()) : a[t(1599)] === t(2328) ? (a[t(1589)] ? e[t(1024)] > a[t(778)] : e[t(1024)] >= a[t(778)]) && (x = this[t(1080)](e, x), Y(x, { code: K[t(1643)], maximum: a[t(778)], type: t(369), inclusive: a[t(1589)], exact: !1, message: a[t(2028)] }), r[t(2305)]()) : a.kind === t(2387) ? si(e[t(1024)], a[t(778)]) !== 0 && (x = this[t(1080)](e, x), Y(x, { code: K[t(2264)], multipleOf: a.value, message: a[t(2028)] }), r[t(2305)]()) : a[t(1599)] === "finite" ? !Number[t(1232)](e[t(1024)]) && (x = this[t(1080)](e, x), Y(x, { code: K[t(727)], message: a.message }), r[t(2305)]()) : R0[t(1285)](a);
    return { status: r[t(778)], value: e.data };
  }
  gte(e, t) {
    const s = n;
    return this[s(1551)](s(644), e, !0, r0[s(616)](t));
  }
  gt(e, t) {
    const s = n;
    return this[s(1551)](s(644), e, !1, r0[s(616)](t));
  }
  [n(948)](e, t) {
    const s = n;
    return this.setLimit(s(2328), e, !0, r0[s(616)](t));
  }
  lt(e, t) {
    const s = n;
    return this[s(1551)](s(2328), e, !1, r0.toString(t));
  }
  [n(1551)](e, t, s, x) {
    const r = n;
    return new Bx({ ...this[r(2035)], checks: [...this[r(2035)][r(1057)], { kind: e, value: t, inclusive: s, message: r0.toString(x) }] });
  }
  [n(830)](e) {
    const t = n;
    return new Bx({ ...this[t(2035)], checks: [...this[t(2035)][t(1057)], e] });
  }
  [n(1699)](e) {
    const t = n;
    return this._addCheck({ kind: t(1699), message: r0.toString(e) });
  }
  [n(1573)](e) {
    const t = n;
    return this[t(830)]({ kind: t(644), value: 0, inclusive: !1, message: r0.toString(e) });
  }
  [n(1681)](e) {
    return this[n(830)]({ kind: "max", value: 0, inclusive: !1, message: r0.toString(e) });
  }
  [n(1121)](e) {
    return this[n(830)]({ kind: "max", value: 0, inclusive: !0, message: r0.toString(e) });
  }
  nonnegative(e) {
    const t = n;
    return this._addCheck({ kind: t(644), value: 0, inclusive: !0, message: r0[t(616)](e) });
  }
  [n(2387)](e, t) {
    const s = n;
    return this._addCheck({ kind: "multipleOf", value: e, message: r0[s(616)](t) });
  }
  [n(860)](e) {
    return this[n(830)]({ kind: "finite", message: r0.toString(e) });
  }
  [n(2026)](e) {
    const t = n;
    return this._addCheck({ kind: "min", inclusive: !0, value: Number[t(390)], message: r0[t(616)](e) })[t(830)]({ kind: t(2328), inclusive: !0, value: Number.MAX_SAFE_INTEGER, message: r0[t(616)](e) });
  }
  get [n(596)]() {
    const e = n;
    let t = null;
    for (const s of this[e(2035)][e(1057)])
      s[e(1599)] === e(644) && (t === null || s.value > t) && (t = s.value);
    return t;
  }
  get [n(2163)]() {
    const e = n;
    let t = null;
    for (const s of this[e(2035)][e(1057)])
      s[e(1599)] === e(2328) && (t === null || s.value < t) && (t = s[e(778)]);
    return t;
  }
  get [n(2477)]() {
    const e = n;
    return !!this._def.checks[e(1703)]((t) => t[e(1599)] === "int" || t.kind === e(2387) && R0.isInteger(t[e(778)]));
  }
  get isFinite() {
    const e = n;
    let t = null, s = null;
    for (const x of this[e(2035)].checks) {
      if (x[e(1599)] === e(860) || x[e(1599)] === e(1699) || x[e(1599)] === e(2387)) return !0;
      x.kind === e(644) ? (s === null || x[e(778)] > s) && (s = x[e(778)]) : x[e(1599)] === e(2328) && (t === null || x.value < t) && (t = x[e(778)]);
    }
    return Number[e(1232)](s) && Number[e(1232)](t);
  }
}
Bx[n(2519)] = (i) => {
  const e = n;
  return new Bx({ checks: [], typeName: p0[e(1985)], coerce: (i == null ? void 0 : i[e(1147)]) || !1, ...v0(i) });
};
class te extends E0 {
  constructor() {
    const e = n;
    super(...arguments), this[e(644)] = this[e(1391)], this[e(2328)] = this[e(948)];
  }
  [n(510)](e) {
    const t = n;
    if (this._def[t(1147)]) try {
      e[t(1024)] = BigInt(e[t(1024)]);
    } catch {
      return this[t(992)](e);
    }
    if (this[t(884)](e) !== x0[t(2149)]) return this[t(992)](e);
    let x;
    const r = new xx();
    for (const a of this[t(2035)].checks)
      a[t(1599)] === t(644) ? (a[t(1589)] ? e[t(1024)] < a[t(778)] : e[t(1024)] <= a[t(778)]) && (x = this[t(1080)](e, x), Y(x, { code: K[t(1120)], type: t(2149), minimum: a.value, inclusive: a[t(1589)], message: a[t(2028)] }), r.dirty()) : a[t(1599)] === t(2328) ? (a[t(1589)] ? e.data > a[t(778)] : e.data >= a[t(778)]) && (x = this[t(1080)](e, x), Y(x, { code: K[t(1643)], type: t(2149), maximum: a[t(778)], inclusive: a.inclusive, message: a[t(2028)] }), r[t(2305)]()) : a[t(1599)] === t(2387) ? e[t(1024)] % a.value !== BigInt(0) && (x = this[t(1080)](e, x), Y(x, { code: K[t(2264)], multipleOf: a[t(778)], message: a[t(2028)] }), r.dirty()) : R0[t(1285)](a);
    return { status: r[t(778)], value: e[t(1024)] };
  }
  [n(992)](e) {
    const t = n, s = this._getOrReturnCtx(e);
    return Y(s, { code: K[t(2428)], expected: x0[t(2149)], received: s[t(2493)] }), h0;
  }
  gte(e, t) {
    const s = n;
    return this.setLimit(s(644), e, !0, r0[s(616)](t));
  }
  gt(e, t) {
    const s = n;
    return this[s(1551)](s(644), e, !1, r0[s(616)](t));
  }
  [n(948)](e, t) {
    const s = n;
    return this.setLimit("max", e, !0, r0[s(616)](t));
  }
  lt(e, t) {
    const s = n;
    return this[s(1551)](s(2328), e, !1, r0.toString(t));
  }
  [n(1551)](e, t, s, x) {
    const r = n;
    return new te({ ...this._def, checks: [...this[r(2035)].checks, { kind: e, value: t, inclusive: s, message: r0[r(616)](x) }] });
  }
  _addCheck(e) {
    const t = n;
    return new te({ ...this[t(2035)], checks: [...this[t(2035)][t(1057)], e] });
  }
  positive(e) {
    const t = n;
    return this[t(830)]({ kind: t(644), value: BigInt(0), inclusive: !1, message: r0[t(616)](e) });
  }
  [n(1681)](e) {
    const t = n;
    return this[t(830)]({ kind: t(2328), value: BigInt(0), inclusive: !1, message: r0[t(616)](e) });
  }
  nonpositive(e) {
    const t = n;
    return this[t(830)]({ kind: t(2328), value: BigInt(0), inclusive: !0, message: r0[t(616)](e) });
  }
  [n(1344)](e) {
    const t = n;
    return this._addCheck({ kind: "min", value: BigInt(0), inclusive: !0, message: r0[t(616)](e) });
  }
  [n(2387)](e, t) {
    const s = n;
    return this[s(830)]({ kind: s(2387), value: e, message: r0.toString(t) });
  }
  get minValue() {
    const e = n;
    let t = null;
    for (const s of this[e(2035)].checks)
      s[e(1599)] === e(644) && (t === null || s[e(778)] > t) && (t = s[e(778)]);
    return t;
  }
  get [n(2163)]() {
    const e = n;
    let t = null;
    for (const s of this[e(2035)][e(1057)])
      s.kind === e(2328) && (t === null || s[e(778)] < t) && (t = s.value);
    return t;
  }
}
te.create = (i) => {
  const e = n;
  return new te({ checks: [], typeName: p0[e(387)], coerce: (i == null ? void 0 : i.coerce) ?? !1, ...v0(i) });
};
class Dt extends E0 {
  [n(510)](e) {
    const t = n;
    if (this._def[t(1147)] && (e[t(1024)] = !!e[t(1024)]), this[t(884)](e) !== x0[t(320)]) {
      const x = this[t(1080)](e);
      return Y(x, { code: K[t(2428)], expected: x0[t(320)], received: x.parsedType }), h0;
    }
    return rx(e[t(1024)]);
  }
}
Dt[n(2519)] = (i) => {
  const e = n;
  return new Dt({ typeName: p0[e(2249)], coerce: (i == null ? void 0 : i[e(1147)]) || !1, ...v0(i) });
};
class ve extends E0 {
  [n(510)](e) {
    const t = n;
    if (this[t(2035)][t(1147)] && (e.data = new Date(e.data)), this[t(884)](e) !== x0[t(1566)]) {
      const a = this[t(1080)](e);
      return Y(a, { code: K[t(2428)], expected: x0[t(1566)], received: a[t(2493)] }), h0;
    }
    if (Number[t(693)](e.data[t(1637)]())) {
      const a = this._getOrReturnCtx(e);
      return Y(a, { code: K.invalid_date }), h0;
    }
    const x = new xx();
    let r;
    for (const a of this[t(2035)][t(1057)])
      a.kind === t(644) ? e[t(1024)][t(1637)]() < a[t(778)] && (r = this._getOrReturnCtx(e, r), Y(r, { code: K[t(1120)], message: a.message, inclusive: !0, exact: !1, minimum: a[t(778)], type: "date" }), x[t(2305)]()) : a.kind === "max" ? e.data[t(1637)]() > a.value && (r = this[t(1080)](e, r), Y(r, { code: K[t(1643)], message: a[t(2028)], inclusive: !0, exact: !1, maximum: a[t(778)], type: t(1566) }), x[t(2305)]()) : R0[t(1285)](a);
    return { status: x[t(778)], value: new Date(e.data.getTime()) };
  }
  [n(830)](e) {
    const t = n;
    return new ve({ ...this._def, checks: [...this[t(2035)][t(1057)], e] });
  }
  [n(644)](e, t) {
    const s = n;
    return this[s(830)]({ kind: s(644), value: e.getTime(), message: r0.toString(t) });
  }
  [n(2328)](e, t) {
    const s = n;
    return this[s(830)]({ kind: "max", value: e[s(1637)](), message: r0[s(616)](t) });
  }
  get [n(1552)]() {
    const e = n;
    let t = null;
    for (const s of this._def[e(1057)])
      s.kind === e(644) && (t === null || s.value > t) && (t = s.value);
    return t != null ? new Date(t) : null;
  }
  get maxDate() {
    const e = n;
    let t = null;
    for (const s of this[e(2035)][e(1057)])
      s[e(1599)] === e(2328) && (t === null || s[e(778)] < t) && (t = s.value);
    return t != null ? new Date(t) : null;
  }
}
ve.create = (i) => {
  const e = n;
  return new ve({ checks: [], coerce: (i == null ? void 0 : i[e(1147)]) || !1, typeName: p0.ZodDate, ...v0(i) });
};
class Pr extends E0 {
  [n(510)](e) {
    const t = n;
    if (this[t(884)](e) !== x0[t(2355)]) {
      const x = this[t(1080)](e);
      return Y(x, { code: K[t(2428)], expected: x0[t(2355)], received: x[t(2493)] }), h0;
    }
    return rx(e.data);
  }
}
Pr.create = (i) => {
  const e = n;
  return new Pr({ typeName: p0[e(529)], ...v0(i) });
};
class jt extends E0 {
  [n(510)](e) {
    const t = n;
    if (this._getType(e) !== x0.undefined) {
      const x = this._getOrReturnCtx(e);
      return Y(x, { code: K[t(2428)], expected: x0[t(1319)], received: x[t(2493)] }), h0;
    }
    return rx(e[t(1024)]);
  }
}
jt[n(2519)] = (i) => new jt({ typeName: p0.ZodUndefined, ...v0(i) });
class Mt extends E0 {
  [n(510)](e) {
    const t = n;
    if (this[t(884)](e) !== x0[t(1817)]) {
      const x = this._getOrReturnCtx(e);
      return Y(x, { code: K[t(2428)], expected: x0[t(1817)], received: x[t(2493)] }), h0;
    }
    return rx(e[t(1024)]);
  }
}
Mt[n(2519)] = (i) => {
  const e = n;
  return new Mt({ typeName: p0[e(560)], ...v0(i) });
};
class Lt extends E0 {
  constructor() {
    const e = n;
    super(...arguments), this[e(1585)] = !0;
  }
  [n(510)](e) {
    return rx(e[n(1024)]);
  }
}
Lt.create = (i) => new Lt({ typeName: p0.ZodAny, ...v0(i) });
class $t extends E0 {
  constructor() {
    super(...arguments), this._unknown = !0;
  }
  [n(510)](e) {
    return rx(e[n(1024)]);
  }
}
$t[n(2519)] = (i) => {
  const e = n;
  return new $t({ typeName: p0[e(718)], ...v0(i) });
};
class Cx extends E0 {
  [n(510)](e) {
    const t = n, s = this._getOrReturnCtx(e);
    return Y(s, { code: K[t(2428)], expected: x0.never, received: s[t(2493)] }), h0;
  }
}
Cx[n(2519)] = (i) => {
  const e = n;
  return new Cx({ typeName: p0[e(2436)], ...v0(i) });
};
class Cr extends E0 {
  [n(510)](e) {
    const t = n;
    if (this[t(884)](e) !== x0[t(1319)]) {
      const x = this._getOrReturnCtx(e);
      return Y(x, { code: K[t(2428)], expected: x0[t(2297)], received: x.parsedType }), h0;
    }
    return rx(e.data);
  }
}
Cr[n(2519)] = (i) => {
  const e = n;
  return new Cr({ typeName: p0[e(424)], ...v0(i) });
};
class lx extends E0 {
  [n(510)](e) {
    const t = n, { ctx: s, status: x } = this[t(632)](e), r = this._def;
    if (s[t(2493)] !== x0[t(1634)]) return Y(s, { code: K[t(2428)], expected: x0[t(1634)], received: s[t(2493)] }), h0;
    if (r[t(1276)] !== null) {
      const o = s[t(1024)].length > r[t(1276)].value, c = s[t(1024)][t(1586)] < r[t(1276)].value;
      (o || c) && (Y(s, { code: o ? K[t(1643)] : K.too_small, minimum: c ? r[t(1276)].value : void 0, maximum: o ? r[t(1276)].value : void 0, type: "array", inclusive: !0, exact: !0, message: r[t(1276)].message }), x[t(2305)]());
    }
    if (r[t(1844)] !== null && s[t(1024)][t(1586)] < r[t(1844)].value && (Y(s, { code: K[t(1120)], minimum: r[t(1844)].value, type: t(1634), inclusive: !0, exact: !1, message: r[t(1844)][t(2028)] }), x[t(2305)]()), r[t(502)] !== null && s[t(1024)][t(1586)] > r.maxLength[t(778)] && (Y(s, { code: K.too_big, maximum: r[t(502)].value, type: "array", inclusive: !0, exact: !1, message: r.maxLength[t(2028)] }), x.dirty()), s[t(639)][t(646)]) return Promise.all([...s[t(1024)]][t(1889)]((o, c) => {
      const u = t;
      return r[u(1594)][u(1604)](new hx(s, o, s[u(2501)], c));
    }))[t(2055)]((o) => xx[t(764)](x, o));
    const a = [...s[t(1024)]][t(1889)]((o, c) => {
      const u = t;
      return r[u(1594)][u(1833)](new hx(s, o, s.path, c));
    });
    return xx.mergeArray(x, a);
  }
  get [n(1468)]() {
    const e = n;
    return this[e(2035)][e(1594)];
  }
  [n(644)](e, t) {
    const s = n;
    return new lx({ ...this._def, minLength: { value: e, message: r0[s(616)](t) } });
  }
  [n(2328)](e, t) {
    const s = n;
    return new lx({ ...this[s(2035)], maxLength: { value: e, message: r0.toString(t) } });
  }
  length(e, t) {
    const s = n;
    return new lx({ ...this._def, exactLength: { value: e, message: r0[s(616)](t) } });
  }
  nonempty(e) {
    return this.min(1, e);
  }
}
lx[n(2519)] = (i, e) => {
  const t = n;
  return new lx({ type: i, minLength: null, maxLength: null, exactLength: null, typeName: p0[t(1876)], ...v0(e) });
};
function Vx(i) {
  const e = n;
  if (i instanceof B0) {
    const t = {};
    for (const s in i[e(1431)]) {
      const x = i.shape[s];
      t[s] = bx[e(2519)](Vx(x));
    }
    return new B0({ ...i[e(2035)], shape: () => t });
  } else
    return i instanceof lx ? new lx({ ...i._def, type: Vx(i[e(1468)]) }) : i instanceof bx ? bx[e(2519)](Vx(i.unwrap())) : i instanceof Mx ? Mx[e(2519)](Vx(i[e(661)]())) : i instanceof Dx ? Dx[e(2519)](i[e(300)][e(1889)]((t) => Vx(t))) : i;
}
class B0 extends E0 {
  constructor() {
    const e = n;
    super(...arguments), this[e(647)] = null, this[e(1386)] = this.passthrough, this[e(2175)] = this[e(2085)];
  }
  _getCached() {
    const e = n;
    if (this._cached !== null) return this._cached;
    const t = this[e(2035)].shape(), s = R0[e(1776)](t);
    return this._cached = { shape: t, keys: s }, this[e(647)];
  }
  [n(510)](e) {
    const t = n;
    if (this._getType(e) !== x0[t(1395)]) {
      const f = this._getOrReturnCtx(e);
      return Y(f, { code: K[t(2428)], expected: x0[t(1395)], received: f[t(2493)] }), h0;
    }
    const { status: x, ctx: r } = this[t(632)](e), { shape: a, keys: o } = this._getCached(), c = [];
    if (!(this._def.catchall instanceof Cx && this[t(2035)].unknownKeys === t(486))) for (const f in r[t(1024)])
      !o[t(1101)](f) && c.push(f);
    const u = [];
    for (const f of o) {
      const d = a[f], l = r[t(1024)][f];
      u[t(1251)]({ key: { status: t(1100), value: f }, value: d[t(510)](new hx(r, l, r.path, f)), alwaysSet: f in r[t(1024)] });
    }
    if (this[t(2035)][t(2408)] instanceof Cx) {
      const f = this[t(2035)][t(1827)];
      if (f === "passthrough") for (const d of c)
        u[t(1251)]({ key: { status: t(1100), value: d }, value: { status: t(1100), value: r.data[d] } });
      else if (f === "strict") c[t(1586)] > 0 && (Y(r, { code: K.unrecognized_keys, keys: c }), x[t(2305)]());
      else if (f !== "strip") throw new Error(t(588));
    } else {
      const f = this._def.catchall;
      for (const d of c) {
        const l = r[t(1024)][d];
        u[t(1251)]({ key: { status: t(1100), value: d }, value: f._parse(new hx(r, l, r[t(2501)], d)), alwaysSet: d in r[t(1024)] });
      }
    }
    return r[t(639)][t(646)] ? Promise[t(1666)]()[t(2055)](async () => {
      const f = t, d = [];
      for (const l of u) {
        const g = await l[f(635)], h = await l[f(778)];
        d[f(1251)]({ key: g, value: h, alwaysSet: l.alwaysSet });
      }
      return d;
    })[t(2055)]((f) => xx.mergeObjectSync(x, f)) : xx[t(1006)](x, u);
  }
  get shape() {
    return this._def.shape();
  }
  [n(799)](e) {
    const t = n;
    return r0.errToObj, new B0({ ...this[t(2035)], unknownKeys: t(799), ...e !== void 0 ? { errorMap: (s, x) => {
      var o, c;
      const r = t, a = ((c = (o = this[r(2035)])[r(1510)]) == null ? void 0 : c.call(o, s, x)[r(2028)]) ?? x[r(1330)];
      return s.code === r(755) ? { message: r0[r(427)](e)[r(2028)] ?? a } : { message: a };
    } } : {} });
  }
  strip() {
    const e = n;
    return new B0({ ...this[e(2035)], unknownKeys: e(486) });
  }
  [n(1626)]() {
    const e = n;
    return new B0({ ...this[e(2035)], unknownKeys: e(1626) });
  }
  extend(e) {
    const t = n;
    return new B0({ ...this[t(2035)], shape: () => ({ ...this._def[t(1431)](), ...e }) });
  }
  [n(2375)](e) {
    const t = n;
    return new B0({ unknownKeys: e[t(2035)][t(1827)], catchall: e[t(2035)][t(2408)], shape: () => ({ ...this[t(2035)][t(1431)](), ...e[t(2035)][t(1431)]() }), typeName: p0[t(1070)] });
  }
  [n(1805)](e, t) {
    return this[n(2175)]({ [e]: t });
  }
  [n(2408)](e) {
    const t = n;
    return new B0({ ...this[t(2035)], catchall: e });
  }
  [n(1422)](e) {
    const t = n, s = {};
    for (const x of R0[t(1776)](e))
      e[x] && this.shape[x] && (s[x] = this[t(1431)][x]);
    return new B0({ ...this[t(2035)], shape: () => s });
  }
  omit(e) {
    const t = n, s = {};
    for (const x of R0[t(1776)](this[t(1431)]))
      !e[x] && (s[x] = this[t(1431)][x]);
    return new B0({ ...this[t(2035)], shape: () => s });
  }
  [n(1700)]() {
    return Vx(this);
  }
  [n(2228)](e) {
    const t = n, s = {};
    for (const x of R0[t(1776)](this[t(1431)])) {
      const r = this[t(1431)][x];
      e && !e[x] ? s[x] = r : s[x] = r.optional();
    }
    return new B0({ ...this[t(2035)], shape: () => s });
  }
  required(e) {
    const t = n, s = {};
    for (const x of R0[t(1776)](this[t(1431)]))
      if (e && !e[x]) s[x] = this.shape[x];
      else {
        let a = this.shape[x];
        for (; a instanceof bx; )
          a = a[t(2035)][t(401)];
        s[x] = a;
      }
    return new B0({ ...this[t(2035)], shape: () => s });
  }
  [n(1296)]() {
    const e = n;
    return Tn(R0[e(1776)](this[e(1431)]));
  }
}
B0[n(2519)] = (i, e) => {
  const t = n;
  return new B0({ shape: () => i, unknownKeys: t(486), catchall: Cx.create(), typeName: p0[t(1070)], ...v0(e) });
}, B0[n(741)] = (i, e) => {
  const t = n;
  return new B0({ shape: () => i, unknownKeys: "strict", catchall: Cx[t(2519)](), typeName: p0[t(1070)], ...v0(e) });
}, B0[n(2545)] = (i, e) => {
  const t = n;
  return new B0({ shape: i, unknownKeys: t(486), catchall: Cx[t(2519)](), typeName: p0[t(1070)], ...v0(e) });
};
class ye extends E0 {
  [n(510)](e) {
    const t = n, { ctx: s } = this[t(632)](e), x = this[t(2035)].options;
    function r(a) {
      const o = t;
      for (const u of a)
        if (u[o(1152)][o(801)] === "valid") return u.result;
      for (const u of a)
        if (u.result[o(801)] === o(2305)) return s[o(639)].issues.push(...u[o(877)][o(639)][o(2031)]), u[o(1152)];
      const c = a[o(1889)]((u) => new wx(u[o(877)][o(639)][o(2031)]));
      return Y(s, { code: K[o(2349)], unionErrors: c }), h0;
    }
    if (s[t(639)][t(646)]) return Promise.all(x.map(async (a) => {
      const o = t, c = { ...s, common: { ...s.common, issues: [] }, parent: null };
      return { result: await a[o(1604)]({ data: s[o(1024)], path: s[o(2501)], parent: c }), ctx: c };
    }))[t(2055)](r);
    {
      let a;
      const o = [];
      for (const u of x) {
        const f = { ...s, common: { ...s[t(639)], issues: [] }, parent: null }, d = u[t(1833)]({ data: s.data, path: s[t(2501)], parent: f });
        if (d[t(801)] === "valid") return d;
        d[t(801)] === t(2305) && !a && (a = { result: d, ctx: f }), f[t(639)][t(2031)][t(1586)] && o.push(f[t(639)].issues);
      }
      if (a) return s[t(639)][t(2031)].push(...a[t(877)].common[t(2031)]), a[t(1152)];
      const c = o[t(1889)]((u) => new wx(u));
      return Y(s, { code: K.invalid_union, unionErrors: c }), h0;
    }
  }
  get [n(1149)]() {
    const e = n;
    return this[e(2035)][e(1149)];
  }
}
ye[n(2519)] = (i, e) => {
  const t = n;
  return new ye({ options: i, typeName: p0[t(1908)], ...v0(e) });
};
const gx = (i) => {
  const e = n;
  return i instanceof Ht ? gx(i.schema) : i instanceof Ox ? gx(i[e(401)]()) : i instanceof Se ? [i[e(778)]] : i instanceof jx ? i.options : i instanceof Ut ? R0.objectValues(i.enum) : i instanceof ke ? gx(i[e(2035)][e(401)]) : i instanceof jt ? [void 0] : i instanceof Mt ? [null] : i instanceof bx ? [void 0, ...gx(i[e(661)]())] : i instanceof Mx ? [null, ...gx(i.unwrap())] : i instanceof Dn ? gx(i.unwrap()) : i instanceof Ce ? gx(i[e(661)]()) : i instanceof Pe ? gx(i[e(2035)][e(401)]) : [];
};
class Yt extends E0 {
  [n(510)](e) {
    const t = n, { ctx: s } = this[t(632)](e);
    if (s[t(2493)] !== x0[t(1395)]) return Y(s, { code: K.invalid_type, expected: x0[t(1395)], received: s.parsedType }), h0;
    const x = this[t(829)], r = s.data[x], a = this[t(2214)][t(2086)](r);
    return a ? s[t(639)][t(646)] ? a[t(1604)]({ data: s.data, path: s[t(2501)], parent: s }) : a[t(1833)]({ data: s[t(1024)], path: s[t(2501)], parent: s }) : (Y(s, { code: K[t(2176)], options: Array[t(1671)](this[t(2214)][t(1001)]()), path: [x] }), h0);
  }
  get [n(829)]() {
    return this[n(2035)].discriminator;
  }
  get options() {
    const e = n;
    return this[e(2035)][e(1149)];
  }
  get [n(2214)]() {
    const e = n;
    return this[e(2035)][e(2214)];
  }
  static [n(2519)](e, t, s) {
    const x = n, r = /* @__PURE__ */ new Map();
    for (const a of t) {
      const o = gx(a[x(1431)][e]);
      if (!o[x(1586)]) throw new Error(x(1471) + e + "` could not be extracted from all schema options");
      for (const c of o) {
        if (r[x(1220)](c)) throw new Error("Discriminator property " + String(e) + " has duplicate value " + String(c));
        r[x(1396)](c, a);
      }
    }
    return new Yt({ typeName: p0[x(908)], discriminator: e, options: t, optionsMap: r, ...v0(s) });
  }
}
function zt(i, e) {
  const t = n, s = Px(i), x = Px(e);
  if (i === e) return { valid: !0, data: i };
  if (s === x0[t(1395)] && x === x0[t(1395)]) {
    const r = R0[t(1776)](e), a = R0.objectKeys(i).filter((c) => r.indexOf(c) !== -1), o = { ...i, ...e };
    for (const c of a) {
      const u = zt(i[c], e[c]);
      if (!u[t(1100)]) return { valid: !1 };
      o[c] = u[t(1024)];
    }
    return { valid: !0, data: o };
  } else if (s === x0[t(1634)] && x === x0[t(1634)]) {
    if (i.length !== e.length) return { valid: !1 };
    const r = [];
    for (let a = 0; a < i[t(1586)]; a++) {
      const o = i[a], c = e[a], u = zt(o, c);
      if (!u[t(1100)]) return { valid: !1 };
      r[t(1251)](u.data);
    }
    return { valid: !0, data: r };
  } else return s === x0[t(1566)] && x === x0[t(1566)] && +i == +e ? { valid: !0, data: i } : { valid: !1 };
}
class be extends E0 {
  _parse(e) {
    const t = n, { status: s, ctx: x } = this[t(632)](e), r = (a, o) => {
      const c = t;
      if (Sr(a) || Sr(o)) return h0;
      const u = zt(a[c(778)], o.value);
      return u[c(1100)] ? ((Er(a) || Er(o)) && s[c(2305)](), { status: s[c(778)], value: u[c(1024)] }) : (Y(x, { code: K[c(1862)] }), h0);
    };
    return x[t(639)][t(646)] ? Promise[t(1576)]([this[t(2035)][t(331)][t(1604)]({ data: x[t(1024)], path: x[t(2501)], parent: x }), this._def[t(1620)]._parseAsync({ data: x[t(1024)], path: x[t(2501)], parent: x })]).then(([a, o]) => r(a, o)) : r(this[t(2035)][t(331)][t(1833)]({ data: x[t(1024)], path: x[t(2501)], parent: x }), this[t(2035)][t(1620)]._parseSync({ data: x[t(1024)], path: x[t(2501)], parent: x }));
  }
}
be[n(2519)] = (i, e, t) => {
  const s = n;
  return new be({ left: i, right: e, typeName: p0[s(2220)], ...v0(t) });
};
class Dx extends E0 {
  [n(510)](e) {
    const t = n, { status: s, ctx: x } = this[t(632)](e);
    if (x[t(2493)] !== x0.array) return Y(x, { code: K.invalid_type, expected: x0[t(1634)], received: x[t(2493)] }), h0;
    if (x[t(1024)][t(1586)] < this[t(2035)][t(300)][t(1586)]) return Y(x, { code: K[t(1120)], minimum: this[t(2035)].items[t(1586)], inclusive: !0, exact: !1, type: t(1634) }), h0;
    !this[t(2035)][t(408)] && x[t(1024)].length > this._def.items.length && (Y(x, { code: K[t(1643)], maximum: this[t(2035)][t(300)].length, inclusive: !0, exact: !1, type: t(1634) }), s[t(2305)]());
    const a = [...x[t(1024)]][t(1889)]((o, c) => {
      const u = t, f = this._def[u(300)][c] || this[u(2035)][u(408)];
      return f ? f[u(510)](new hx(x, o, x[u(2501)], c)) : null;
    }).filter((o) => !!o);
    return x[t(639)][t(646)] ? Promise[t(1576)](a)[t(2055)]((o) => xx[t(764)](s, o)) : xx[t(764)](s, a);
  }
  get [n(300)]() {
    return this._def.items;
  }
  [n(408)](e) {
    const t = n;
    return new Dx({ ...this[t(2035)], rest: e });
  }
}
Dx[n(2519)] = (i, e) => {
  const t = n;
  if (!Array[t(752)](i)) throw new Error(t(770));
  return new Dx({ items: i, typeName: p0[t(601)], rest: null, ...v0(e) });
};
class we extends E0 {
  get [n(2230)]() {
    const e = n;
    return this[e(2035)][e(1044)];
  }
  get [n(1321)]() {
    const e = n;
    return this[e(2035)][e(1173)];
  }
  _parse(e) {
    const t = n, { status: s, ctx: x } = this[t(632)](e);
    if (x.parsedType !== x0[t(1395)]) return Y(x, { code: K.invalid_type, expected: x0[t(1395)], received: x[t(2493)] }), h0;
    const r = [], a = this[t(2035)][t(1044)], o = this._def[t(1173)];
    for (const c in x.data)
      r[t(1251)]({ key: a[t(510)](new hx(x, c, x[t(2501)], c)), value: o[t(510)](new hx(x, x.data[c], x[t(2501)], c)), alwaysSet: c in x.data });
    return x[t(639)][t(646)] ? xx[t(302)](s, r) : xx[t(1006)](s, r);
  }
  get [n(1468)]() {
    const e = n;
    return this[e(2035)][e(1173)];
  }
  static create(e, t, s) {
    const x = n;
    return t instanceof E0 ? new we({ keyType: e, valueType: t, typeName: p0[x(2052)], ...v0(s) }) : new we({ keyType: yx[x(2519)](), valueType: e, typeName: p0[x(2052)], ...v0(t) });
  }
}
class Ir extends E0 {
  get [n(2230)]() {
    const e = n;
    return this._def[e(1044)];
  }
  get [n(1321)]() {
    const e = n;
    return this[e(2035)][e(1173)];
  }
  [n(510)](e) {
    const t = n, { status: s, ctx: x } = this[t(632)](e);
    if (x[t(2493)] !== x0[t(1889)]) return Y(x, { code: K[t(2428)], expected: x0[t(1889)], received: x[t(2493)] }), h0;
    const r = this._def[t(1044)], a = this[t(2035)][t(1173)], o = [...x.data.entries()][t(1889)](([c, u], f) => {
      const d = t;
      return { key: r[d(510)](new hx(x, c, x[d(2501)], [f, "key"])), value: a[d(510)](new hx(x, u, x[d(2501)], [f, d(778)])) };
    });
    if (x[t(639)][t(646)]) {
      const c = /* @__PURE__ */ new Map();
      return Promise[t(1666)]()[t(2055)](async () => {
        const u = t;
        for (const f of o) {
          const d = await f.key, l = await f.value;
          if (d[u(801)] === u(2507) || l[u(801)] === u(2507)) return h0;
          (d[u(801)] === u(2305) || l[u(801)] === u(2305)) && s[u(2305)](), c[u(1396)](d[u(778)], l.value);
        }
        return { status: s[u(778)], value: c };
      });
    } else {
      const c = /* @__PURE__ */ new Map();
      for (const u of o) {
        const f = u[t(635)], d = u[t(778)];
        if (f[t(801)] === t(2507) || d[t(801)] === t(2507)) return h0;
        (f.status === t(2305) || d[t(801)] === t(2305)) && s[t(2305)](), c[t(1396)](f.value, d[t(778)]);
      }
      return { status: s[t(778)], value: c };
    }
  }
}
Ir[n(2519)] = (i, e, t) => {
  const s = n;
  return new Ir({ valueType: e, keyType: i, typeName: p0[s(599)], ...v0(t) });
};
class re extends E0 {
  [n(510)](e) {
    const t = n, { status: s, ctx: x } = this._processInputParams(e);
    if (x.parsedType !== x0[t(1396)]) return Y(x, { code: K[t(2428)], expected: x0[t(1396)], received: x[t(2493)] }), h0;
    const r = this[t(2035)];
    r[t(1588)] !== null && x[t(1024)][t(2537)] < r[t(1588)].value && (Y(x, { code: K[t(1120)], minimum: r[t(1588)][t(778)], type: t(1396), inclusive: !0, exact: !1, message: r[t(1588)][t(2028)] }), s.dirty()), r[t(1180)] !== null && x[t(1024)][t(2537)] > r[t(1180)][t(778)] && (Y(x, { code: K.too_big, maximum: r[t(1180)][t(778)], type: "set", inclusive: !0, exact: !1, message: r.maxSize.message }), s.dirty());
    const a = this[t(2035)][t(1173)];
    function o(u) {
      const f = t, d = /* @__PURE__ */ new Set();
      for (const l of u) {
        if (l.status === f(2507)) return h0;
        l[f(801)] === f(2305) && s.dirty(), d[f(1732)](l[f(778)]);
      }
      return { status: s.value, value: d };
    }
    const c = [...x[t(1024)][t(906)]()][t(1889)]((u, f) => a[t(510)](new hx(x, u, x[t(2501)], f)));
    return x[t(639)].async ? Promise.all(c).then((u) => o(u)) : o(c);
  }
  [n(644)](e, t) {
    const s = n;
    return new re({ ...this._def, minSize: { value: e, message: r0[s(616)](t) } });
  }
  [n(2328)](e, t) {
    const s = n;
    return new re({ ...this[s(2035)], maxSize: { value: e, message: r0[s(616)](t) } });
  }
  [n(2537)](e, t) {
    return this[n(644)](e, t).max(e, t);
  }
  [n(751)](e) {
    return this[n(644)](1, e);
  }
}
re[n(2519)] = (i, e) => {
  const t = n;
  return new re({ valueType: i, minSize: null, maxSize: null, typeName: p0[t(1961)], ...v0(e) });
};
class Ht extends E0 {
  get [n(970)]() {
    const e = n;
    return this._def[e(1103)]();
  }
  [n(510)](e) {
    const t = n, { ctx: s } = this._processInputParams(e);
    return this[t(2035)][t(1103)]()[t(510)]({ data: s[t(1024)], path: s[t(2501)], parent: s });
  }
}
Ht[n(2519)] = (i, e) => {
  const t = n;
  return new Ht({ getter: i, typeName: p0[t(851)], ...v0(e) });
};
class Se extends E0 {
  [n(510)](e) {
    const t = n;
    if (e[t(1024)] !== this[t(2035)][t(778)]) {
      const s = this[t(1080)](e);
      return Y(s, { received: s[t(1024)], code: K[t(2434)], expected: this[t(2035)].value }), h0;
    }
    return { status: t(1100), value: e[t(1024)] };
  }
  get [n(778)]() {
    const e = n;
    return this._def[e(778)];
  }
}
Se.create = (i, e) => {
  const t = n;
  return new Se({ value: i, typeName: p0[t(1323)], ...v0(e) });
};
function Tn(i, e) {
  return new jx({ values: i, typeName: p0.ZodEnum, ...v0(e) });
}
class jx extends E0 {
  [n(510)](e) {
    const t = n;
    if (typeof e[t(1024)] !== t(342)) {
      const s = this[t(1080)](e), x = this[t(2035)].values;
      return Y(s, { expected: R0.joinValues(x), received: s[t(2493)], code: K[t(2428)] }), h0;
    }
    if (!this[t(1601)] && (this[t(1601)] = new Set(this[t(2035)][t(906)])), !this[t(1601)][t(1220)](e[t(1024)])) {
      const s = this[t(1080)](e), x = this[t(2035)][t(906)];
      return Y(s, { received: s[t(1024)], code: K[t(1198)], options: x }), h0;
    }
    return rx(e[t(1024)]);
  }
  get options() {
    return this._def.values;
  }
  get [n(511)]() {
    const e = n, t = {};
    for (const s of this[e(2035)][e(906)])
      t[s] = s;
    return t;
  }
  get [n(2410)]() {
    const e = n, t = {};
    for (const s of this._def[e(906)])
      t[s] = s;
    return t;
  }
  get [n(2281)]() {
    const e = n, t = {};
    for (const s of this[e(2035)][e(906)])
      t[s] = s;
    return t;
  }
  [n(1781)](e, t = this[n(2035)]) {
    const s = n;
    return jx[s(2519)](e, { ...this[s(2035)], ...t });
  }
  [n(1989)](e, t = this._def) {
    const s = n;
    return jx.create(this[s(1149)].filter((x) => !e[s(1101)](x)), { ...this[s(2035)], ...t });
  }
}
jx[n(2519)] = Tn;
class Ut extends E0 {
  _parse(e) {
    const t = n, s = R0[t(411)](this._def[t(906)]), x = this[t(1080)](e);
    if (x[t(2493)] !== x0[t(342)] && x.parsedType !== x0[t(369)]) {
      const r = R0[t(735)](s);
      return Y(x, { expected: R0[t(1490)](r), received: x[t(2493)], code: K.invalid_type }), h0;
    }
    if (!this[t(1601)] && (this._cache = new Set(R0[t(411)](this._def[t(906)]))), !this[t(1601)][t(1220)](e[t(1024)])) {
      const r = R0[t(735)](s);
      return Y(x, { received: x[t(1024)], code: K[t(1198)], options: r }), h0;
    }
    return rx(e[t(1024)]);
  }
  get [n(511)]() {
    const e = n;
    return this[e(2035)][e(906)];
  }
}
Ut[n(2519)] = (i, e) => new Ut({ values: i, typeName: p0.ZodNativeEnum, ...v0(e) });
class Ee extends E0 {
  [n(661)]() {
    const e = n;
    return this._def[e(1594)];
  }
  [n(510)](e) {
    const t = n, { ctx: s } = this[t(632)](e);
    if (s[t(2493)] !== x0[t(1579)] && s[t(639)][t(646)] === !1) return Y(s, { code: K[t(2428)], expected: x0[t(1579)], received: s[t(2493)] }), h0;
    const x = s[t(2493)] === x0.promise ? s[t(1024)] : Promise.resolve(s[t(1024)]);
    return rx(x[t(2055)]((r) => {
      const a = t;
      return this[a(2035)][a(1594)][a(2301)](r, { path: s.path, errorMap: s.common[a(1930)] });
    }));
  }
}
Ee[n(2519)] = (i, e) => {
  const t = n;
  return new Ee({ type: i, typeName: p0[t(787)], ...v0(e) });
};
class Ox extends E0 {
  [n(401)]() {
    const e = n;
    return this._def[e(970)];
  }
  [n(1429)]() {
    const e = n;
    return this[e(2035)][e(970)][e(2035)][e(2332)] === p0.ZodEffects ? this[e(2035)][e(970)][e(1429)]() : this[e(2035)].schema;
  }
  _parse(e) {
    const t = n, { status: s, ctx: x } = this[t(632)](e), r = this._def.effect || null, a = { addIssue: (o) => {
      const c = t;
      Y(x, o), o[c(1325)] ? s.abort() : s[c(2305)]();
    }, get path() {
      return x.path;
    } };
    if (a[t(501)] = a.addIssue.bind(a), r.type === t(404)) {
      const o = r[t(916)](x[t(1024)], a);
      if (x[t(639)][t(646)]) return Promise[t(1666)](o)[t(2055)](async (c) => {
        const u = t;
        if (s[u(778)] === u(2507)) return h0;
        const f = await this[u(2035)][u(970)][u(1604)]({ data: c, path: x[u(2501)], parent: x });
        return f.status === u(2507) ? h0 : f[u(801)] === u(2305) || s[u(778)] === u(2305) ? Xx(f[u(778)]) : f;
      });
      {
        if (s.value === "aborted") return h0;
        const c = this[t(2035)].schema[t(1833)]({ data: o, path: x[t(2501)], parent: x });
        return c[t(801)] === "aborted" ? h0 : c.status === t(2305) || s[t(778)] === t(2305) ? Xx(c[t(778)]) : c;
      }
    }
    if (r.type === "refinement") {
      const o = (c) => {
        const u = t, f = r[u(1464)](c, a);
        if (x[u(639)][u(646)]) return Promise[u(1666)](f);
        if (f instanceof Promise) throw new Error(u(1513));
        return c;
      };
      if (x[t(639)][t(646)] === !1) {
        const c = this[t(2035)][t(970)]._parseSync({ data: x[t(1024)], path: x[t(2501)], parent: x });
        return c[t(801)] === t(2507) ? h0 : (c[t(801)] === t(2305) && s[t(2305)](), o(c.value), { status: s[t(778)], value: c[t(778)] });
      } else return this._def[t(970)][t(1604)]({ data: x[t(1024)], path: x[t(2501)], parent: x })[t(2055)]((c) => {
        const u = t;
        return c[u(801)] === u(2507) ? h0 : (c[u(801)] === "dirty" && s.dirty(), o(c.value)[u(2055)](() => ({ status: s[u(778)], value: c.value })));
      });
    }
    if (r.type === t(916))
      if (x[t(639)][t(646)] === !1) {
        const o = this[t(2035)][t(970)][t(1833)]({ data: x[t(1024)], path: x[t(2501)], parent: x });
        if (!Wx(o)) return h0;
        const c = r.transform(o[t(778)], a);
        if (c instanceof Promise) throw new Error(t(654));
        return { status: s[t(778)], value: c };
      } else return this[t(2035)][t(970)][t(1604)]({ data: x[t(1024)], path: x[t(2501)], parent: x }).then((o) => {
        const c = t;
        return Wx(o) ? Promise[c(1666)](r.transform(o[c(778)], a))[c(2055)]((u) => ({ status: s[c(778)], value: u })) : h0;
      });
    R0.assertNever(r);
  }
}
Ox[n(2519)] = (i, e, t) => {
  const s = n;
  return new Ox({ schema: i, typeName: p0[s(1587)], effect: e, ...v0(t) });
}, Ox[n(1605)] = (i, e, t) => {
  const s = n;
  return new Ox({ schema: e, effect: { type: s(404), transform: i }, typeName: p0[s(1587)], ...v0(t) });
};
class bx extends E0 {
  _parse(e) {
    const t = n;
    return this[t(884)](e) === x0.undefined ? rx(void 0) : this[t(2035)][t(401)][t(510)](e);
  }
  [n(661)]() {
    const e = n;
    return this._def[e(401)];
  }
}
bx[n(2519)] = (i, e) => {
  const t = n;
  return new bx({ innerType: i, typeName: p0[t(1929)], ...v0(e) });
};
class Mx extends E0 {
  [n(510)](e) {
    const t = n;
    return this[t(884)](e) === x0[t(1817)] ? rx(null) : this[t(2035)][t(401)][t(510)](e);
  }
  [n(661)]() {
    return this[n(2035)].innerType;
  }
}
Mx[n(2519)] = (i, e) => {
  const t = n;
  return new Mx({ innerType: i, typeName: p0[t(1309)], ...v0(e) });
};
class ke extends E0 {
  [n(510)](e) {
    const t = n, { ctx: s } = this[t(632)](e);
    let x = s[t(1024)];
    return s[t(2493)] === x0.undefined && (x = this[t(2035)][t(687)]()), this[t(2035)].innerType[t(510)]({ data: x, path: s[t(2501)], parent: s });
  }
  removeDefault() {
    const e = n;
    return this._def[e(401)];
  }
}
ke[n(2519)] = (i, e) => {
  const t = n;
  return new ke({ innerType: i, typeName: p0[t(1744)], defaultValue: typeof e[t(664)] === t(730) ? e[t(664)] : () => e[t(664)], ...v0(e) });
};
class Pe extends E0 {
  [n(510)](e) {
    const t = n, { ctx: s } = this[t(632)](e), x = { ...s, common: { ...s.common, issues: [] } }, r = this[t(2035)][t(401)][t(510)]({ data: x[t(1024)], path: x[t(2501)], parent: { ...x } });
    return ge(r) ? r.then((a) => {
      const o = t;
      return { status: o(1100), value: a[o(801)] === o(1100) ? a[o(778)] : this[o(2035)][o(1704)]({ get error() {
        const c = o;
        return new wx(x[c(639)].issues);
      }, input: x.data }) };
    }) : { status: t(1100), value: r[t(801)] === t(1100) ? r[t(778)] : this[t(2035)].catchValue({ get error() {
      const a = t;
      return new wx(x[a(639)][a(2031)]);
    }, input: x[t(1024)] }) };
  }
  [n(574)]() {
    const e = n;
    return this[e(2035)][e(401)];
  }
}
Pe[n(2519)] = (i, e) => {
  const t = n;
  return new Pe({ innerType: i, typeName: p0.ZodCatch, catchValue: typeof e.catch === t(730) ? e[t(989)] : () => e.catch, ...v0(e) });
};
class Rr extends E0 {
  [n(510)](e) {
    const t = n;
    if (this._getType(e) !== x0[t(953)]) {
      const x = this[t(1080)](e);
      return Y(x, { code: K[t(2428)], expected: x0[t(953)], received: x[t(2493)] }), h0;
    }
    return { status: t(1100), value: e.data };
  }
}
Rr.create = (i) => {
  const e = n;
  return new Rr({ typeName: p0[e(1456)], ...v0(i) });
};
class Dn extends E0 {
  [n(510)](e) {
    const t = n, { ctx: s } = this._processInputParams(e), x = s[t(1024)];
    return this[t(2035)].type[t(510)]({ data: x, path: s.path, parent: s });
  }
  [n(661)]() {
    return this[n(2035)].type;
  }
}
class _t extends E0 {
  [n(510)](e) {
    const t = n, { status: s, ctx: x } = this[t(632)](e);
    if (x.common[t(646)])
      return (async () => {
        const a = t, o = await this[a(2035)].in[a(1604)]({ data: x[a(1024)], path: x[a(2501)], parent: x });
        return o[a(801)] === a(2507) ? h0 : o.status === a(2305) ? (s[a(2305)](), Xx(o[a(778)])) : this[a(2035)][a(1515)][a(1604)]({ data: o[a(778)], path: x[a(2501)], parent: x });
      })();
    {
      const r = this[t(2035)].in._parseSync({ data: x.data, path: x[t(2501)], parent: x });
      return r[t(801)] === t(2507) ? h0 : r[t(801)] === "dirty" ? (s[t(2305)](), { status: "dirty", value: r.value }) : this[t(2035)][t(1515)][t(1833)]({ data: r.value, path: x[t(2501)], parent: x });
    }
  }
  static [n(2519)](e, t) {
    const s = n;
    return new _t({ in: e, out: t, typeName: p0[s(1592)] });
  }
}
class Ce extends E0 {
  [n(510)](e) {
    const t = n, s = this[t(2035)][t(401)][t(510)](e), x = (r) => {
      const a = t;
      return Wx(r) && (r[a(778)] = Object[a(1138)](r[a(778)])), r;
    };
    return ge(s) ? s[t(2055)]((r) => x(r)) : x(s);
  }
  unwrap() {
    const e = n;
    return this[e(2035)][e(401)];
  }
}
Ce[n(2519)] = (i, e) => {
  const t = n;
  return new Ce({ innerType: i, typeName: p0[t(392)], ...v0(e) });
};
var p0;
(function(i) {
  const e = n;
  i[e(1221)] = "ZodString", i.ZodNumber = e(1985), i[e(1456)] = e(1456), i[e(387)] = "ZodBigInt", i[e(2249)] = e(2249), i[e(713)] = e(713), i[e(529)] = e(529), i.ZodUndefined = e(1018), i[e(560)] = "ZodNull", i[e(1112)] = e(1112), i[e(718)] = e(718), i[e(2436)] = e(2436), i.ZodVoid = e(424), i[e(1876)] = e(1876), i[e(1070)] = e(1070), i[e(1908)] = "ZodUnion", i[e(908)] = e(908), i[e(2220)] = e(2220), i[e(601)] = e(601), i[e(2052)] = e(2052), i[e(599)] = e(599), i[e(1961)] = e(1961), i[e(2168)] = e(2168), i[e(851)] = e(851), i[e(1323)] = e(1323), i[e(2504)] = "ZodEnum", i[e(1587)] = e(1587), i[e(2116)] = e(2116), i[e(1929)] = e(1929), i[e(1309)] = e(1309), i[e(1744)] = e(1744), i[e(1665)] = e(1665), i[e(787)] = e(787), i[e(933)] = e(933), i[e(1592)] = e(1592), i[e(392)] = e(392);
})(p0 || (p0 = {}));
const C = yx.create, C0 = Bx[n(2519)], d0 = Dt[n(2519)], Z0 = Lt[n(2519)], ae = $t.create;
Cx[n(2519)];
const N0 = lx[n(2519)], F = B0.create, _0 = ye.create, jn = Yt[n(2519)];
be.create, Dx[n(2519)];
const X0 = we.create, a0 = Se[n(2519)], V0 = jx[n(2519)];
Ee[n(2519)];
const Z = bx[n(2519)];
Mx[n(2519)];
var Gs, Xs;
class ni {
  constructor(e, t) {
    c0(this, Xs);
    c0(this, Gs);
    const s = n;
    this[s(262)] = e, this[s(658)] = t;
  }
  get [(Xs = n(262), Gs = n(658), n(2399))]() {
    const e = n, t = this[e(262)][e(2181)](this[e(658)]);
    if (!t) throw new Error(e(1842) + this[e(658)]);
    return this[e(658)] !== this[e(262)][e(2076)]() && this[e(262)][e(1973)](this[e(658)]), t;
  }
  get [n(1779)]() {
    const e = n, t = this.graphInstance[e(303)]().getNode(this[e(658)]);
    if (!t) throw new Error("Node definition not found for " + this[e(658)]);
    return new Proxy({}, { get: (x, r) => {
      const a = e;
      if (typeof r !== a(342)) return;
      const o = t.actions[r];
      if (!o) throw new Error(a(490) + r + a(2155) + this.nodeId);
      return async (c, u) => {
        const f = a, d = this[f(1144)]();
        if (!d) throw new Error(f(809) + this[f(658)]);
        const { connection: l, path: g } = d, h = this[f(262)].getCurrentNodeId();
        if (!o[f(1641)]) {
          const y = Z0();
          let w;
          if (g.length === 2) w = await l.request("sdppp/directRequest", { action: r, data: c, sourceNodeId: h }, y);
          else try {
            w = await l[f(1478)](f(536), { action: "__proxy_forward", data: { targetNodeId: this[f(658)], targetAction: r, targetData: c, forwardPath: g[f(2284)](1) }, sourceNodeId: h }, y);
          } catch (E) {
            throw console.error(f(871), E), console[f(549)]({ targetNodeId: this.nodeId, targetAction: r, targetData: c, forwardPath: g[f(2284)](1) }), E;
          }
          return w;
        }
        let m;
        return g[f(1586)] === 2 ? m = l[f(2282)]({ action: r, data: c, sourceNodeId: h }, o[f(1746)], u) : m = l[f(2282)]({ action: "__proxy_forward", data: { targetNodeId: this[f(658)], targetAction: r, targetData: c, forwardPath: g[f(2284)](1) }, sourceNodeId: h }, o[f(1746)], u), m;
      };
    } });
  }
  [n(1144)]() {
    const e = n;
    return this.graphInstance[e(1140)](this[e(658)]);
  }
}
const Hx = /* @__PURE__ */ new Map(), Nx = /* @__PURE__ */ new Map();
class Mn {
  constructor(e) {
    c0(this, "endpoint");
    const t = n;
    this[t(924)] = e;
  }
  initializeConsumer({ store: e, storeName: t, onStateUpdate: s, requestInitialState: x }) {
    const r = n;
    this.endpoint.setNotificationHandler(F({ method: a0(r(2279) + t), params: Z0() }), (o) => {
      const c = r;
      try {
        s(o[c(708)]);
      } catch (u) {
        console[c(549)](c(287) + t + ":", u);
      }
    });
    const a = async (o = 0, c = 5, u = 100) => {
      const f = r;
      try {
        await x();
      } catch {
        if (o < c) {
          const l = u * Math.pow(2, o) + Math[f(299)]() * 100;
          setTimeout(() => {
            a(o + 1, c, u);
          }, l);
        } else console.warn(f(1965) + t + f(2424) + c + f(1549));
      }
    };
    setTimeout(() => a(), 50);
  }
  initializeProducer({ store: e, storeName: t, sendStateUpdate: s, onInitialStateRequested: x }) {
    const r = n, a = t + "_" + Date.now() + "_" + Math[r(299)](), o = async (u, f = !1) => {
      const d = r;
      if (this[d(1948)]()) try {
        await s(u), Hx[d(1220)](a) && Hx[d(1574)](a);
      } catch (l) {
        const g = l instanceof Error ? l[d(2028)] : String(l);
        !g[d(1101)](d(2464)) && !g.includes(d(489)) && console[d(549)]("Error sending store update for " + t + ":", l), (g[d(1101)](d(2464)) || g[d(1101)](d(489))) && Hx.set(a, u);
      }
      else {
        Hx.set(a, u), !Nx[d(1220)](a) && Nx[d(1396)](a, /* @__PURE__ */ new Set());
        const l = Nx[d(2086)](a), g = () => {
          const m = d, y = Hx[m(2086)](a);
          y && o(y, !0);
        };
        l[d(1732)](g);
        const h = () => {
          const m = d;
          this.isTransportReady() ? (l[m(1562)]((y) => y()), l.clear(), Nx[m(1574)](a)) : setTimeout(h, 100);
        };
        setTimeout(h, 50);
      }
    }, c = e[r(2525)]((u) => {
      o(u, !1);
    });
    return x(() => {
      o(e.getState(), !0);
    }), o(e[r(330)](), !0), () => {
      const u = r;
      c(), Hx.delete(a), Nx.has(a) && (Nx.get(a).clear(), Nx[u(1574)](a));
    };
  }
  isTransportReady() {
    const e = n;
    try {
      const t = this[e(924)][e(489)] || this[e(924)]._transport || this.endpoint[e(2304)];
      return t === void 0 && typeof this[e(924)][e(504)] == "function" ? !0 : !!t;
    } catch {
      return typeof this.endpoint.notification == "function";
    }
  }
}
var Ys;
class Ln {
  constructor(e) {
    c0(this, Ys);
    c0(this, "actionManager");
    c0(this, "broadcastManager");
    const t = n;
    this.graphInstance = e, this[t(1345)] = e[t(1345)], this.broadcastManager = e[t(1849)];
  }
  [(Ys = n(262), n(2480))]({ store: e, storeName: t, onStateUpdate: s, requestInitialState: x }) {
    const r = n;
    this.broadcastManager[r(605)](r(376) + t, (o) => {
      const c = r;
      try {
        o[c(1635)] !== this[c(262)][c(2076)]() && s(o[c(705)]);
      } catch {
      }
    });
    const a = async (o = 0, c = 5, u = 100) => {
      const f = r;
      try {
        await x();
      } catch {
        if (o < c) {
          const l = u * Math[f(631)](2, o) + Math[f(299)]() * 100;
          setTimeout(() => {
            a(o + 1, c, u);
          }, l);
        }
      }
    };
    setTimeout(() => a(), 50);
  }
  [n(1271)]({ store: e, storeName: t, sendStateUpdate: s, onInitialStateRequested: x }) {
    const r = n, a = this[r(262)][r(2076)](), o = async (f, d = !1) => {
      const l = r;
      if (this[l(1948)]()) try {
        await this[l(1849)][l(1286)]("store:update:" + t, { storeName: t, sourceNodeId: a, stateUpdate: f, isInitialState: d }), await s(f);
      } catch {
      }
    }, c = e.subscribe((f) => {
      o(f, !1);
    });
    x(() => {
      o(e[r(330)](), !0);
    });
    const u = r(2e3) + t;
    return this[r(1345)][r(346)](u, async () => {
      const f = r, d = e[f(330)]();
      return await o(d, !0), { success: !0 };
    }), o(e.getState(), !0), () => {
      var d;
      const f = r;
      c(), (d = this[f(1345)][f(2476)]) == null || d[f(1574)](u);
    };
  }
  [n(1948)]() {
    var t;
    const e = n;
    try {
      const s = this[e(262)][e(2080)], x = s && s[e(975)]() > 0, r = ((t = this.broadcastManager[e(423)]) == null ? void 0 : t.size) > 0;
      return x || r;
    } catch {
      return !!this[e(1849)];
    }
  }
}
function ai({ endpoint: i, store: e, name: t }) {
  const s = n, x = new Mn(i), r = (o) => {
    const c = B, u = e[c(330)](), f = { ...u, ...o };
    e[c(1030)](f);
  }, a = async () => {
    const o = B;
    await i.notification({ method: o(1714) + t, params: {} });
  };
  x[s(2480)]({ store: e, storeName: t, onStateUpdate: r, requestInitialState: a });
}
function $n({ endpoint: i, store: e, name: t }) {
  const s = n, x = new Mn(i), r = async (o) => {
    await i[B(504)]({ method: "sdppp/updateStore/" + t, params: o });
  }, a = (o) => {
    const c = B;
    i[c(2353)](F({ method: a0(c(1714) + t), params: Z0() }), () => {
      o();
    });
  };
  return x[s(1271)]({ store: e, storeName: t, sendStateUpdate: r, onInitialStateRequested: a });
}
function Fr({ graphInstance: i, store: e, name: t }) {
  const s = new Ln(i), x = (a) => {
    const o = B, c = e[o(330)](), u = { ...c, ...a };
    e[o(1030)](u);
  }, r = async () => {
    const a = B, o = "__internal_requestInitialState_" + t;
    try {
      const c = i[a(303)]()[a(447)](i[a(2076)]());
      for (const u of c)
        try {
          const f = i[a(1476)](u);
          if (f && f.actions && f.actions[o]) {
            await f[a(1779)][o]();
            break;
          }
        } catch {
          continue;
        }
    } catch (c) {
      console.warn(a(1965) + t + ":", c);
    }
  };
  s.initializeConsumer({ store: e, storeName: t, onStateUpdate: x, requestInitialState: r });
}
function ii({ graphInstance: i, store: e, name: t }) {
  const s = new Ln(i), x = async (a) => {
  }, r = (a) => {
  };
  return s.initializeProducer({ store: e, storeName: t, sendStateUpdate: x, onInitialStateRequested: r });
}
var _s;
class oi {
  constructor() {
    c0(this, _s, /* @__PURE__ */ new Map());
  }
  [(_s = n(1770), n(1426))]({ endpoint: e, store: t, nodeId: s }) {
    const x = n;
    this[x(2253)](s), ai({ endpoint: e, store: t, name: s }), this[x(1770)][x(1396)](s, { nodeId: s, isProducer: !1 });
  }
  [n(2193)]({ endpoint: e, store: t, nodeId: s }) {
    const x = n;
    this.unbind(s);
    const r = $n({ endpoint: e, store: t, name: s });
    this[x(1770)][x(1396)](s, { nodeId: s, isProducer: !0, cleanup: r });
  }
  unbind(e) {
    const t = n, s = this[t(1770)].get(e);
    s && (s.cleanup && s[t(964)](), this[t(1770)].delete(e));
  }
  [n(1986)](e) {
    const t = n;
    return this.bindings[t(2086)](e);
  }
  [n(2384)]() {
    const e = n;
    return Array[e(1671)](this[e(1770)][e(906)]());
  }
  [n(673)](e) {
    const t = n, s = this.bindings[t(2086)](e);
    return s ? !s[t(2222)] : !1;
  }
  [n(1472)](e) {
    const t = n;
    this[t(1770)][t(1396)](e, { nodeId: e, isProducer: !1 });
  }
  [n(964)]() {
    const e = n;
    for (const t of this[e(1770)][e(906)]())
      t.cleanup && t.cleanup();
    this[e(1770)][e(463)]();
  }
}
var xn, en, tn, rn, sn;
class ci {
  constructor(e, t = {}) {
    c0(this, sn);
    c0(this, rn);
    c0(this, tn, /* @__PURE__ */ new Map());
    c0(this, en);
    c0(this, xn);
    const s = n;
    this.graphInstance = e, this[s(2326)] = e[s(2326)], this.currentNodeId = e[s(319)], this[s(1149)] = { pingInterval: t.pingInterval || 3e4, maxRetries: t.maxRetries || 3, retryDelay: t[s(1446)] || 5e3, dfsInterval: t.dfsInterval || 3e4 };
  }
  startMonitoring(e) {
    const t = n;
    if (this[t(2033)].has(e)) return;
    const s = setInterval(() => {
      this[t(281)](e);
    }, this[t(1149)].pingInterval);
    this.monitoringIntervals[t(1396)](e, s);
  }
  stopMonitoring(e) {
    const t = n, s = this[t(2033)].get(e);
    s && (clearInterval(s), this[t(2033)].delete(e));
  }
  async [(sn = n(262), rn = n(1149), tn = n(2033), en = n(2326), xn = n(319), n(281))](e) {
    const t = n;
    try {
      await this[t(445)](e);
    } catch (s) {
      console[t(455)](t(1310) + e + " appears unhealthy:", s);
    }
  }
  async pingConnection(e) {
    const t = n, s = this.graphInstance[t(285)](e);
    if (!s) throw new Error(t(1550));
    if (s[t(2454)] && typeof s[t(2454)] == "function" && s[t(2454)]()) return Promise[t(1666)]();
    throw new Error(t(1301));
  }
  destroy() {
    const e = n;
    for (const t of this[e(2033)].values())
      clearInterval(t);
    this[e(2033)][e(463)]();
  }
}
var nn;
class ui {
  constructor() {
    c0(this, "broadcastHandlers", /* @__PURE__ */ new Map());
    c0(this, "connections", /* @__PURE__ */ new Map());
    c0(this, nn, /* @__PURE__ */ new Set());
  }
  [(nn = n(423), n(277))](e) {
    return (t) => {
      const s = B, x = this[s(1679)].get(e);
      if (x) for (const r of x)
        try {
          r(t);
        } catch (a) {
          console[s(549)]("Error in broadcast handler for " + e + ":", a);
        }
      (e[s(1710)]("store:update:") || e === s(2280)) && !t[s(375)] && this.forwardBroadcast(e, t);
    };
  }
  async [n(1968)](e, t) {
    const s = n;
    try {
      const x = { ...t, forwarded: !0 }, r = Array.from(this[s(1027)][s(906)]()), a = [...r];
      let o = 0;
      for (const u of this.mountedEndpoints)
        r.includes(u) || (a[s(1251)](u), o++);
      this.mountedEndpoints.size;
      const c = a.map((u, f) => {
        const d = s, l = r[d(1101)](u) ? "outgoing" : d(1654);
        return u[d(1286)](e, x)[d(989)]((g) => {
          throw g;
        });
      });
      await Promise[s(1576)](c);
    } catch (x) {
      console[s(549)](s(852), x);
    }
  }
  [n(605)](e, t) {
    const s = n;
    !this[s(1679)][s(1220)](e) && this.broadcastHandlers[s(1396)](e, /* @__PURE__ */ new Set()), this[s(1679)][s(2086)](e)[s(1732)](t);
    const x = this[s(277)](e);
    for (const r of this[s(1027)][s(906)]())
      r[s(847)](e, x);
    for (const r of this[s(423)])
      r[s(847)](e, x);
  }
  [n(2077)](e) {
    const t = n;
    for (const s of this[t(1679)][t(1001)]()) {
      const x = this[t(277)](s);
      e[t(847)](s, x);
    }
  }
  addConnection(e, t) {
    const s = n;
    this[s(1027)][s(1396)](e, t), this[s(2077)](t);
  }
  removeConnection(e) {
    this[n(1027)].delete(e);
  }
  async broadcast(e, t) {
    const s = n, x = Array[s(1671)](this.connections.values()), r = [...x];
    for (const o of this[s(423)])
      !x[s(1101)](o) && r.push(o);
    const a = r[s(1889)]((o) => o.broadcast(e, t));
    await Promise[s(1576)](a);
  }
  [n(857)](e) {
    const t = n;
    this[t(423)][t(1732)](e);
    for (const s of this[t(1679)][t(1001)]()) {
      const x = this[t(277)](s);
      e[t(847)](s, x);
    }
  }
  getHandlerTypes() {
    const e = n;
    return Array[e(1671)](this[e(1679)].keys());
  }
  [n(463)]() {
    const e = n;
    this.broadcastHandlers.clear(), this[e(1027)][e(463)](), this.mountedEndpoints[e(463)]();
  }
}
var an, on, cn, un;
class fi {
  constructor(e, t, s) {
    c0(this, un, /* @__PURE__ */ new Map());
    c0(this, cn);
    c0(this, on);
    c0(this, an);
    const x = n;
    this.definition = e, this.currentNodeId = t, this[x(1813)] = s;
  }
  [(un = n(2476), cn = n(2326), on = n(319), an = n(1813), n(2093))](e, t) {
    const s = n, x = this[s(2326)][s(1476)](this[s(319)]);
    if (!x) throw new Error(s(451) + this[s(319)]);
    const r = x[s(1779)][e];
    if (!r) throw new Error(s(490) + String(e) + s(2155) + this.currentNodeId);
    this[s(925)](e, t, r), this[s(2476)].set(e, t);
  }
  [n(925)](e, t, s) {
    s[n(1641)];
  }
  [n(346)](e, t) {
    const s = n;
    this.actionHandlers[s(1396)](e, t);
  }
  [n(857)](e) {
    const t = n;
    for (const [s, x] of this[t(2476)]) {
      const r = this[t(2326)].getNode(this.currentNodeId), a = r == null ? void 0 : r[t(1779)][s];
      !((a == null ? void 0 : a[t(1641)]) === !0) && this[t(710)](e, s, x);
      const c = { shape: { action: { value: s } } }, u = async function* (f, d, l) {
        const g = t, h = f.data || f, m = x(h, d, l);
        if (m && typeof m == "object" && Symbol[g(1223)] in m && typeof m[Symbol[g(1223)]] === g(730)) for await (const y of m)
          yield y === void 0 ? {} : y;
        else {
          const y = await m;
          if (y && typeof y[Symbol[g(1223)]] === g(730)) for await (const w of y)
            yield w === void 0 ? {} : w;
          else yield y === void 0 ? {} : y;
        }
      };
      e[t(1799)](c, u);
    }
    this[t(1727)](e), this[t(1759)](e);
  }
  [n(1727)](e) {
    const t = n, s = { shape: { action: { value: "__proxy_forward" } } }, x = this, r = async function* (a, o, c) {
      const u = B, f = a[u(1024)] || a, { targetNodeId: d, targetAction: l, targetData: g, forwardPath: h } = f;
      if (!h || h[u(1586)] === 0) throw new Error("Invalid forward path for proxy action");
      const m = h[0], y = h[u(2284)](1);
      if (y[u(1586)] === 0 && m === x[u(319)]) {
        const w = x.actionHandlers[u(2086)](l);
        if (!w) throw new Error("Action " + l + u(1701) + x[u(319)]);
        const E = w(g, o, c);
        if (E && typeof E == "object" && Symbol[u(1223)] in E && typeof E[Symbol.asyncIterator] === u(730)) for await (const q of E)
          yield q === void 0 ? {} : q;
        else {
          const q = await E;
          yield q === void 0 ? {} : q;
        }
        return;
      }
      if (m === x[u(319)] && y[u(1586)] > 0) {
        const w = y[0], E = x[u(1813)](w);
        if (E) {
          const q = await E[u(2282)]({ action: u(1129), data: { targetNodeId: d, targetAction: l, targetData: g, forwardPath: y } }, {}, c);
          for await (const O of q)
            yield O === void 0 ? {} : O;
          return;
        }
        throw new Error(u(429) + w + " - no connection available");
      }
      throw new Error(u(2195) + x.currentNodeId + u(1424) + h);
    };
    e[t(1799)](s, r);
  }
  getRegisteredActions() {
    const e = n;
    return Array[e(1671)](this.actionHandlers[e(1001)]());
  }
  hasAction(e) {
    return this[n(2476)].has(e);
  }
  [n(1008)](e) {
    return this[n(2476)].get(e);
  }
  [n(463)]() {
    const e = n;
    this[e(2476)][e(463)]();
  }
  [n(710)](e, t, s) {
  }
  [n(1759)](e) {
    const t = n, s = F({ method: a0(t(536)), params: F({ action: C(), data: Z0().optional() }) }), x = this;
    e[t(518)](s, async (r, a) => {
      const o = t, { action: c, data: u } = r[o(708)];
      if (c === o(1129)) return await x[o(479)](u, a);
      const f = x[o(2476)].get(c);
      if (!f) throw new Error("Action " + c + o(1701) + x.currentNodeId);
      const d = f(u, a), l = await d;
      return l === void 0 ? {} : l;
    });
  }
  async [n(479)](e, t) {
    const s = n, { targetNodeId: x, targetAction: r, targetData: a, forwardPath: o } = e;
    if (!o || o.length === 0) throw new Error("Invalid forward path for proxy action");
    const c = o[0], u = o.slice(1);
    if (u[s(1586)] === 0 && c === this[s(319)]) {
      const f = this[s(2476)].get(r);
      if (!f) throw new Error(s(490) + r + s(1701) + this[s(319)]);
      const d = f(a, t), l = await d;
      return l === void 0 ? {} : l;
    }
    if (c === this[s(319)] && u[s(1586)] > 0) {
      const f = u[0], d = this.getConnection(f);
      if (d) return await d[s(1478)](s(536), { action: "__proxy_forward", data: { targetNodeId: x, targetAction: r, targetData: a, forwardPath: u } }, Z0());
      throw new Error(s(429) + f + s(1465));
    }
    throw new Error(s(2195) + this[s(319)] + s(1424) + o);
  }
}
var fn, dn, ln, hn;
class di {
  constructor(e, t, s, x, r) {
    c0(this, hn);
    c0(this, ln);
    c0(this, dn, /* @__PURE__ */ new Map());
    c0(this, "broadcastManager");
    c0(this, fn);
    c0(this, "setupStoreBinding");
    const a = n;
    this[a(2326)] = e, this[a(319)] = t, this[a(1849)] = s, this[a(1345)] = x, this[a(941)] = r;
  }
  async connect(e, t) {
    const s = n;
    if (!this[s(2326)][s(869)](this[s(319)], e)) throw new Error(s(624) + this.currentNodeId + s(2174) + e);
    if (this.connections[s(1220)](e)) throw new Error(s(1452) + e);
    try {
      const x = await t();
      this[s(1027)][s(1396)](e, x), this[s(941)](e, x), this[s(1849)][s(2095)](e, x), this[s(2383)](e, x);
    } catch (x) {
      throw x;
    }
  }
  [(hn = n(2326), ln = n(319), dn = n(1027), fn = n(1345), n(1813))](e) {
    const t = n;
    return this[t(1027)][t(2086)](e);
  }
  getConnectionToNode(e) {
    const t = n, s = this[t(1027)][t(2086)](e);
    if (s) return { connection: s, path: [this[t(319)], e] };
    const x = this[t(2012)](this[t(319)], e);
    if (x && x[t(1586)] > 1) {
      const r = x[1], a = this[t(1027)][t(2086)](r);
      if (a) return { connection: a, path: x };
    }
  }
  findPath(e, t) {
    const s = n;
    if (e === t) return [e];
    const x = /* @__PURE__ */ new Set(), r = [{ nodeId: e, path: [e] }];
    for (; r[s(1586)] > 0; ) {
      const { nodeId: a, path: o } = r[s(1002)]();
      if (x[s(1220)](a)) continue;
      x[s(1732)](a);
      const c = this[s(2326)].getNeighbors(a);
      for (const u of c) {
        if (u === t) return [...o, u];
        !x.has(u) && r[s(1251)]({ nodeId: u, path: [...o, u] });
      }
    }
  }
  [n(2302)]() {
    const e = n;
    return Array[e(1671)](this.connections[e(1001)]());
  }
  [n(1403)](e) {
    const t = n;
    return this.connections[t(1220)](e);
  }
  [n(975)]() {
    const e = n;
    return this[e(1027)][e(2537)];
  }
  [n(2456)](e, t = !1) {
    const s = n, x = this[s(1027)][s(2086)](e);
    x && (t && "close" in x && typeof x.close === s(730) && x[s(2400)]()[s(989)]((r) => {
      console.warn(s(1942) + e + ":", r);
    }), this[s(1027)][s(1574)](e), this[s(1849)].removeConnection(e));
  }
  [n(2383)](e, t) {
    const s = () => {
      const x = B, r = t.client, a = t[x(1379)];
      if (r && r.onclose !== void 0) {
        const c = r.onclose;
        r[x(1954)] = (u) => {
          const f = x;
          this[f(1651)](e, u), c && typeof c === f(730) && c(u);
        };
      }
      if (a && a[x(1954)] !== void 0) {
        const c = a.onclose;
        a[x(1954)] = (u) => {
          const f = x;
          this.handleConnectionClose(e, u), c && typeof c === f(730) && c(u);
        };
      }
      t && typeof t[x(543)] === x(730) && t.onClose(() => {
        this.handleConnectionClose(e);
      });
      const o = t.transport;
      if (o && o[x(1954)] !== void 0) {
        const c = o.onclose;
        o[x(1954)] = (u) => {
          const f = x;
          this[f(1651)](e, u), c && typeof c === f(730) && c(u);
        };
      }
    };
    try {
      s();
    } catch {
    }
  }
  [n(1651)](e, t) {
    const s = n;
    this[s(1027)][s(1220)](e) && (this.connections.delete(e), this[s(1849)][s(1401)](e));
  }
  [n(463)]() {
    const e = n;
    for (const t of this[e(1027)][e(1001)]())
      this.disconnect(t);
  }
}
var pn, mn, gn, vn, yn, bn, wn;
class li {
  constructor(e, t, s) {
    c0(this, wn);
    c0(this, bn);
    c0(this, yn, /* @__PURE__ */ new Map());
    c0(this, vn, /* @__PURE__ */ new Map());
    c0(this, gn);
    c0(this, mn, new oi());
    c0(this, "broadcastManager");
    c0(this, "actionManager");
    c0(this, pn);
    const x = n;
    this.definition = e, this[x(319)] = t, this[x(1269)](), this[x(1849)] = new ui(), this.actionManager = new fi(e, t, (r) => this[x(285)](r)), this[x(2080)] = new di(e, t, this.broadcastManager, this[x(1345)], (r, a) => this[x(941)](r, a)), this[x(585)] = new ci(this, s), this.setupGraphStoreSync();
  }
  [(wn = n(2326), bn = n(319), yn = n(1502), vn = n(1334), gn = n(585), mn = n(700), pn = n(2080), n(1269))]() {
    const e = n;
    for (const t of this.definition[e(779)]()) {
      const s = this[e(2326)].getNode(t);
      if (s && s[e(2399)]) {
        const x = this[e(1664)](s[e(2399)]), r = Aa(() => x);
        this[e(1502)][e(1396)](t, r);
      }
    }
  }
  getDefaultValuesFromSchema(e) {
    const t = n;
    if (!e) return {};
    try {
      return e[t(1938)]({});
    } catch {
      return this[t(267)](e);
    }
  }
  manuallyExtractDefaults(e) {
    const t = n;
    if (!e || !e[t(885)]) return {};
    if (e[t(885)][t(1594)] === t(664)) {
      const s = e[t(885)][t(687)];
      return typeof s === t(730) ? s() : s;
    }
    if (e[t(885)][t(1594)] === t(1395)) {
      const s = {};
      let x;
      try {
        x = e[t(885)][t(1431)];
      } catch {
        return {};
      }
      if (x) for (const [r, a] of Object[t(772)](x)) {
        const o = this[t(1168)](a);
        o !== void 0 && (s[r] = o);
      }
      return s;
    }
    return {};
  }
  getDefaultValueFromField(e) {
    const t = n;
    if (e)
      try {
        return e[t(1938)](void 0);
      } catch {
        return this[t(267)](e);
      }
  }
  async connect(e, t) {
    const s = n;
    return this[s(2080)][s(1135)](e, t);
  }
  [n(2456)](e, t = !1) {
    const s = n;
    return this[s(2080)][s(2456)](e, t);
  }
  setupStoreBinding(e, t) {
    const s = n, x = this.nodeStores[s(2086)](e);
    if (!x) return;
    const r = t[s(1379)] || t[s(514)];
    r && (t[s(514)] ? this[s(700)][s(1426)]({ endpoint: r, store: x, nodeId: e }) : this.storeManager[s(2193)]({ endpoint: r, store: x, nodeId: e }));
  }
  [n(598)]() {
    const e = n;
    for (const [t, s] of this[e(1502)])
      t === this[e(319)] ? ii({ graphInstance: this, store: s, name: t }) : Fr({ graphInstance: this, store: s, name: t });
  }
  getNode(e) {
    const t = n;
    if (!this[t(1334)][t(1220)](e)) {
      const s = new ni(this, e);
      this[t(1334)][t(1396)](e, s);
    }
    return this[t(1334)].get(e);
  }
  [n(285)](e) {
    const t = n;
    return this[t(2080)][t(1813)](e);
  }
  [n(1813)](e) {
    return this.getConnectionInternal(e);
  }
  [n(2181)](e) {
    const t = n;
    return this.nodeStores[t(2086)](e);
  }
  get [n(2399)]() {
    const e = n, t = this.nodeStores.get(this[e(319)]);
    if (!t) throw new Error(e(1797) + this.currentNodeId);
    return t;
  }
  get [n(1779)]() {
    const e = n, t = this[e(2326)][e(1476)](this[e(319)]);
    if (!t) throw new Error("Node definition not found for current node " + this[e(319)]);
    return new Proxy({}, { get: (x, r) => {
      const a = e;
      if (typeof r !== a(342)) return;
      const o = t[a(1779)][r];
      if (!o) throw new Error("Action " + r + a(471) + this[a(319)]);
      return (c, u) => {
        const f = a, d = this[f(1345)][f(1008)](r);
        if (!d) throw new Error(f(744) + r + f(1132) + this[f(319)]);
        const l = { nodeId: this[f(319)] };
        if (o[f(1641)] === !0) {
          const g = d(c, l, u);
          return g && typeof g === f(1395) && Symbol[f(1223)] in g ? async function* () {
            for await (const h of g)
              yield h === void 0 ? {} : h;
          }() : async function* () {
            const h = await g;
            yield h === void 0 ? {} : h;
          }();
        } else return (async () => {
          const g = f, h = d(c, l, u);
          if (h && typeof h === g(1395) && Symbol[g(1223)] in h) {
            const m = h[Symbol[g(1223)]](), y = await m[g(322)]();
            return y[g(778)] === void 0 ? {} : y[g(778)];
          } else {
            const m = await h;
            return m === void 0 ? {} : m;
          }
        })();
      };
    } });
  }
  [n(303)]() {
    return this[n(2326)];
  }
  [n(2076)]() {
    return this[n(319)];
  }
  [n(1973)](e) {
    const t = n;
    if (e === this[t(319)] || this[t(700)].hasConsumerBinding(e)) return;
    const s = this[t(1502)][t(2086)](e);
    if (s)
      try {
        Fr({ graphInstance: this, store: s, name: e }), this[t(700)][t(1472)](e);
      } catch {
      }
  }
  getConnectionToNodeInternal(e) {
    const t = n;
    return this[t(2080)][t(1164)](e);
  }
  [n(1164)](e) {
    return this[n(1140)](e);
  }
  [n(857)](e) {
    const t = n, s = this[t(1502)][t(2086)](this[t(319)]);
    if (!s) throw new Error(t(1821) + this[t(319)]);
    const x = e[t(1379)] || e[t(514)];
    $n({ endpoint: x, store: s, name: this.currentNodeId }), this[t(1345)][t(857)](e), this[t(1849)].mountTo(e);
  }
  implementAction(e, t) {
    this[n(1345)].implementAction(e, t);
  }
  destroy() {
    const e = n;
    this[e(585)][e(2002)](), this[e(700)][e(964)](), this.broadcastManager[e(463)](), this.actionManager.clear(), this[e(2080)][e(463)]();
  }
  [n(1920)](e, t) {
    const s = n;
    return this[s(2080)][s(2012)](e, t);
  }
  [n(2012)](e, t) {
    return this[n(1920)](e, t);
  }
  async [n(1286)](e, t) {
    return this[n(1849)].broadcast(e, t);
  }
  [n(1602)](e, t) {
    const s = n;
    this[s(1849)][s(605)](e, t);
  }
}
const zn = n(2543), hi = [zn, "2025-03-26", n(478), n(2025)], Oe = n(1720), Hn = _0([C(), C0()[n(1699)]()]), Un = C(), pi = F({ progressToken: Z(Hn) })[n(1626)](), sx = F({ _meta: Z(pi) })[n(1626)](), ex = F({ method: C(), params: Z(sx) }), ie = F({ _meta: Z(F({})[n(1626)]()) }).passthrough(), px = F({ method: C(), params: Z(ie) }), nx = F({ _meta: Z(F({})[n(1626)]()) })[n(1626)](), Ae = _0([C(), C0().int()]), Vn = F({ jsonrpc: a0(Oe), id: Ae })[n(2375)](ex).strict(), mi = (i) => Vn[n(527)](i).success, Wn = F({ jsonrpc: a0(Oe) })[n(2375)](px)[n(799)](), gi = (i) => Wn[n(527)](i)[n(2462)], Bn = F({ jsonrpc: a0(Oe), id: Ae, result: nx })[n(799)](), Nr = (i) => Bn[n(527)](i)[n(2462)];
var vx;
(function(i) {
  const e = n;
  i[i[e(814)] = -32e3] = "ConnectionClosed", i[i[e(466)] = -32001] = "RequestTimeout", i[i[e(937)] = -32700] = e(937), i[i.InvalidRequest = -32600] = e(1216), i[i.MethodNotFound = -32601] = e(2109), i[i.InvalidParams = -32602] = e(2392), i[i.InternalError = -32603] = e(1063);
})(vx || (vx = {}));
const Zn = F({ jsonrpc: a0(Oe), id: Ae, error: F({ code: C0()[n(1699)](), message: C(), data: Z(ae()) }) })[n(799)](), vi = (i) => Zn[n(527)](i)[n(2462)];
_0([Vn, Wn, Bn, Zn]);
const Vt = nx[n(799)](), Wt = px[n(2085)]({ method: a0(n(901)), params: ie[n(2085)]({ requestId: Ae, reason: C()[n(2338)]() }) }), oe = F({ name: C(), title: Z(C()) }).passthrough(), Kn = oe[n(2085)]({ version: C() }), yi = F({ experimental: Z(F({}).passthrough()), sampling: Z(F({})[n(1626)]()), elicitation: Z(F({})[n(1626)]()), roots: Z(F({ listChanged: Z(d0()) })[n(1626)]()) })[n(1626)](), Jn = ex[n(2085)]({ method: a0(n(491)), params: sx[n(2085)]({ protocolVersion: C(), capabilities: yi, clientInfo: Kn }) }), bi = F({ experimental: Z(F({})[n(1626)]()), logging: Z(F({})[n(1626)]()), completions: Z(F({}).passthrough()), prompts: Z(F({ listChanged: Z(d0()) })[n(1626)]()), resources: Z(F({ subscribe: Z(d0()), listChanged: Z(d0()) })[n(1626)]()), tools: Z(F({ listChanged: Z(d0()) }).passthrough()) })[n(1626)](), wi = nx[n(2085)]({ protocolVersion: C(), capabilities: bi, serverInfo: Kn, instructions: Z(C()) }), Qn = px[n(2085)]({ method: a0(n(1336)) }), Bt = ex[n(2085)]({ method: a0(n(443)) }), Si = F({ progress: C0(), total: Z(C0()), message: Z(C()) }).passthrough(), Zt = px[n(2085)]({ method: a0(n(1056)), params: ie.merge(Si).extend({ progressToken: Hn }) }), Te = ex[n(2085)]({ params: sx[n(2085)]({ cursor: Z(Un) })[n(2338)]() }), De = nx.extend({ nextCursor: Z(Un) }), Gn = F({ uri: C(), mimeType: Z(C()), _meta: Z(F({})[n(1626)]()) })[n(1626)](), Xn = Gn[n(2085)]({ text: C() }), Yn = Gn[n(2085)]({ blob: C().base64() }), _n = oe[n(2085)]({ uri: C(), description: Z(C()), mimeType: Z(C()), _meta: Z(F({})[n(1626)]()) }), Ei = oe.extend({ uriTemplate: C(), description: Z(C()), mimeType: Z(C()), _meta: Z(F({})[n(1626)]()) }), ki = Te[n(2085)]({ method: a0(n(1493)) }), Pi = De[n(2085)]({ resources: N0(_n) }), Ci = Te[n(2085)]({ method: a0(n(1461)) }), Ii = De[n(2085)]({ resourceTemplates: N0(Ei) }), Ri = ex.extend({ method: a0("resources/read"), params: sx.extend({ uri: C() }) }), Fi = nx[n(2085)]({ contents: N0(_0([Xn, Yn])) }), Ni = px[n(2085)]({ method: a0(n(2398)) }), qi = ex.extend({ method: a0(n(1850)), params: sx[n(2085)]({ uri: C() }) }), Oi = ex[n(2085)]({ method: a0(n(874)), params: sx[n(2085)]({ uri: C() }) }), Ai = px.extend({ method: a0(n(1003)), params: ie[n(2085)]({ uri: C() }) }), Ti = F({ name: C(), description: Z(C()), required: Z(d0()) })[n(1626)](), Di = oe[n(2085)]({ description: Z(C()), arguments: Z(N0(Ti)), _meta: Z(F({}).passthrough()) }), ji = Te[n(2085)]({ method: a0(n(702)) }), Mi = De.extend({ prompts: N0(Di) }), Li = ex.extend({ method: a0(n(1712)), params: sx[n(2085)]({ name: C(), arguments: Z(X0(C())) }) }), xr = F({ type: a0(n(348)), text: C(), _meta: Z(F({}).passthrough()) })[n(1626)](), er = F({ type: a0(n(1698)), data: C().base64(), mimeType: C(), _meta: Z(F({})[n(1626)]()) })[n(1626)](), tr = F({ type: a0(n(2240)), data: C()[n(1768)](), mimeType: C(), _meta: Z(F({})[n(1626)]()) }).passthrough(), $i = F({ type: a0(n(642)), resource: _0([Xn, Yn]), _meta: Z(F({}).passthrough()) })[n(1626)](), zi = _n[n(2085)]({ type: a0("resource_link") }), xa = _0([xr, er, tr, zi, $i]), Hi = F({ role: V0([n(2236), "assistant"]), content: xa })[n(1626)](), Ui = nx.extend({ description: Z(C()), messages: N0(Hi) }), Vi = px[n(2085)]({ method: a0(n(638)) }), Wi = F({ title: Z(C()), readOnlyHint: Z(d0()), destructiveHint: Z(d0()), idempotentHint: Z(d0()), openWorldHint: Z(d0()) })[n(1626)](), Bi = oe.extend({ description: Z(C()), inputSchema: F({ type: a0(n(1395)), properties: Z(F({})[n(1626)]()), required: Z(N0(C())) })[n(1626)](), outputSchema: Z(F({ type: a0("object"), properties: Z(F({})[n(1626)]()), required: Z(N0(C())) })[n(1626)]()), annotations: Z(Wi), _meta: Z(F({})[n(1626)]()) }), Zi = Te[n(2085)]({ method: a0(n(1590)) }), Ki = De[n(2085)]({ tools: N0(Bi) }), ea = nx[n(2085)]({ content: N0(xa)[n(664)]([]), structuredContent: F({}).passthrough()[n(2338)](), isError: Z(d0()) });
ea.or(nx[n(2085)]({ toolResult: ae() }));
const Ji = ex[n(2085)]({ method: a0(n(1705)), params: sx[n(2085)]({ name: C(), arguments: Z(X0(ae())) }) }), Qi = px.extend({ method: a0(n(1039)) }), ta = V0([n(1335), n(1633), n(1943), n(2520), n(549), n(540), n(563), n(359)]), Gi = ex[n(2085)]({ method: a0(n(349)), params: sx[n(2085)]({ level: ta }) }), Xi = px[n(2085)]({ method: a0(n(2038)), params: ie.extend({ level: ta, logger: Z(C()), data: ae() }) }), Yi = F({ name: C().optional() })[n(1626)](), _i = F({ hints: Z(N0(Yi)), costPriority: Z(C0().min(0)[n(2328)](1)), speedPriority: Z(C0()[n(644)](0).max(1)), intelligencePriority: Z(C0().min(0)[n(2328)](1)) })[n(1626)](), xo = F({ role: V0([n(2236), n(2369)]), content: _0([xr, er, tr]) })[n(1626)](), eo = ex[n(2085)]({ method: a0("sampling/createMessage"), params: sx[n(2085)]({ messages: N0(xo), systemPrompt: Z(C()), includeContext: Z(V0([n(1013), n(1155), n(1933)])), temperature: Z(C0()), maxTokens: C0()[n(1699)](), stopSequences: Z(N0(C())), metadata: Z(F({})[n(1626)]()), modelPreferences: Z(_i) }) }), ra = nx.extend({ model: C(), stopReason: Z(V0(["endTurn", n(482), "maxTokens"]).or(C())), role: V0(["user", n(2369)]), content: jn(n(1594), [xr, er, tr]) }), to = F({ type: a0(n(320)), title: Z(C()), description: Z(C()), default: Z(d0()) })[n(1626)](), ro = F({ type: a0(n(342)), title: Z(C()), description: Z(C()), minLength: Z(C0()), maxLength: Z(C0()), format: Z(V0(["email", n(1193), n(1566), n(2472)])) })[n(1626)](), so = F({ type: V0([n(369), n(586)]), title: Z(C()), description: Z(C()), minimum: Z(C0()), maximum: Z(C0()) })[n(1626)](), no = F({ type: a0(n(342)), title: Z(C()), description: Z(C()), enum: N0(C()), enumNames: Z(N0(C())) })[n(1626)](), ao = _0([to, ro, so, no]), io = ex[n(2085)]({ method: a0(n(2309)), params: sx.extend({ message: C(), requestedSchema: F({ type: a0("object"), properties: X0(C(), ao), required: Z(N0(C())) })[n(1626)]() }) }), sa = nx.extend({ action: V0(["accept", n(1798), n(1692)]), content: Z(X0(C(), ae())) }), oo = F({ type: a0(n(556)), uri: C() })[n(1626)](), co = F({ type: a0("ref/prompt"), name: C() }).passthrough(), uo = ex[n(2085)]({ method: a0("completion/complete"), params: sx.extend({ ref: _0([co, oo]), argument: F({ name: C(), value: C() })[n(1626)](), context: Z(F({ arguments: Z(X0(C(), C())) })) }) }), fo = nx[n(2085)]({ completion: F({ values: N0(C())[n(2328)](100), total: Z(C0().int()), hasMore: Z(d0()) }).passthrough() }), lo = F({ uri: C().startsWith(n(758)), name: Z(C()), _meta: Z(F({})[n(1626)]()) }).passthrough(), ho = ex[n(2085)]({ method: a0(n(2114)) }), na = nx.extend({ roots: N0(lo) }), po = px.extend({ method: a0(n(2354)) });
_0([Bt, Jn, uo, Gi, Li, ji, ki, Ci, Ri, qi, Oi, Ji, Zi]), _0([Wt, Zt, Qn, po]), _0([Vt, ra, sa, na]), _0([Bt, eo, io, ho]), _0([Wt, Zt, Xi, Ai, Ni, Qi, Vi]), _0([Vt, wi, fo, Ui, Mi, Pi, Ii, Fi, ea, Ki]);
class Ax extends Error {
  constructor(e, t, s) {
    const x = n;
    super("MCP error " + e + ": " + t), this[x(1256)] = e, this.data = s, this[x(2132)] = "McpError";
  }
}
const mo = 6e4;
class go {
  constructor(e) {
    const t = n;
    this[t(745)] = e, this[t(2337)] = 0, this._requestHandlers = /* @__PURE__ */ new Map(), this[t(2374)] = /* @__PURE__ */ new Map(), this._notificationHandlers = /* @__PURE__ */ new Map(), this[t(558)] = /* @__PURE__ */ new Map(), this[t(1803)] = /* @__PURE__ */ new Map(), this._timeoutInfo = /* @__PURE__ */ new Map(), this[t(1244)] = /* @__PURE__ */ new Set(), this[t(2353)](Wt, (s) => {
      const x = t, r = this._requestHandlerAbortControllers[x(2086)](s[x(708)][x(2485)]);
      r == null || r[x(846)](s[x(708)][x(1570)]);
    }), this[t(2353)](Zt, (s) => {
      this[t(507)](s);
    }), this[t(804)](Bt, (s) => ({}));
  }
  [n(1014)](e, t, s, x, r = !1) {
    const a = n;
    this._timeoutInfo[a(1396)](e, { timeoutId: setTimeout(x, t), startTime: Date[a(2544)](), timeout: t, maxTotalTimeout: s, resetTimeoutOnProgress: r, onTimeout: x });
  }
  [n(1068)](e) {
    const t = n, s = this._timeoutInfo[t(2086)](e);
    if (!s) return !1;
    const x = Date.now() - s.startTime;
    if (s[t(2368)] && x >= s[t(2368)])
      throw this[t(2482)][t(1574)](e), new Ax(vx.RequestTimeout, t(1078), { maxTotalTimeout: s[t(2368)], totalElapsed: x });
    return clearTimeout(s.timeoutId), s[t(1801)] = setTimeout(s[t(1117)], s.timeout), !0;
  }
  [n(662)](e) {
    const t = n, s = this[t(2482)][t(2086)](e);
    s && (clearTimeout(s.timeoutId), this[t(2482)][t(1574)](e));
  }
  async [n(1135)](e) {
    const t = n;
    var s, x, r;
    this[t(1125)] = e;
    const a = (s = this[t(489)]) === null || s === void 0 ? void 0 : s[t(1954)];
    this._transport[t(1954)] = () => {
      const u = t;
      a == null || a(), this[u(2154)]();
    };
    const o = (x = this[t(489)]) === null || x === void 0 ? void 0 : x[t(2203)];
    this[t(1125)][t(2203)] = (u) => {
      o == null || o(u), this._onerror(u);
    };
    const c = (r = this[t(1125)]) === null || r === void 0 ? void 0 : r[t(345)];
    this[t(1125)][t(345)] = (u, f) => {
      const d = t;
      c == null || c(u, f), Nr(u) || vi(u) ? this[d(559)](u) : mi(u) ? this[d(604)](u, f) : gi(u) ? this[d(1738)](u) : this[d(2298)](new Error(d(1851) + JSON[d(2325)](u)));
    }, await this._transport.start();
  }
  [n(2154)]() {
    const e = n;
    var t;
    const s = this[e(558)];
    this[e(558)] = /* @__PURE__ */ new Map(), this[e(1803)].clear(), this[e(1244)][e(463)](), this[e(1125)] = void 0, (t = this.onclose) === null || t === void 0 || t[e(896)](this);
    const x = new Ax(vx[e(814)], e(672));
    for (const r of s[e(906)]())
      r(x);
  }
  [n(2298)](e) {
    const t = n;
    var s;
    (s = this[t(2203)]) === null || s === void 0 || s[t(896)](this, e);
  }
  [n(1738)](e) {
    const t = n;
    var s;
    const x = (s = this[t(863)].get(e[t(2152)])) !== null && s !== void 0 ? s : this[t(841)];
    x !== void 0 && Promise[t(1666)]()[t(2055)](() => x(e))[t(989)]((r) => this[t(2298)](new Error(t(435) + r)));
  }
  _onrequest(e, t) {
    const s = n;
    var x, r, a, o;
    const c = (x = this[s(1082)][s(2086)](e.method)) !== null && x !== void 0 ? x : this[s(1136)];
    if (c === void 0) {
      (r = this[s(1125)]) === null || r === void 0 || r[s(1415)]({ jsonrpc: s(1720), id: e.id, error: { code: vx[s(2109)], message: s(2166) } })[s(989)]((d) => this[s(2298)](new Error(s(1371) + d)));
      return;
    }
    const u = new AbortController();
    this[s(2374)][s(1396)](e.id, u);
    const f = { signal: u[s(1355)], sessionId: (a = this[s(1125)]) === null || a === void 0 ? void 0 : a[s(1755)], _meta: (o = e[s(708)]) === null || o === void 0 ? void 0 : o[s(945)], sendNotification: (d) => this[s(504)](d, { relatedRequestId: e.id }), sendRequest: (d, l, g) => this.request(d, l, { ...g, relatedRequestId: e.id }), authInfo: t == null ? void 0 : t[s(557)], requestId: e.id, requestInfo: t == null ? void 0 : t[s(2100)] };
    Promise[s(1666)]()[s(2055)](() => c(e, f))[s(2055)]((d) => {
      const l = s;
      var g;
      if (!u[l(1355)][l(2507)])
        return (g = this[l(1125)]) === null || g === void 0 ? void 0 : g[l(1415)]({ result: d, jsonrpc: "2.0", id: e.id });
    }, (d) => {
      const l = s;
      var g, h;
      if (!u[l(1355)].aborted)
        return (g = this[l(1125)]) === null || g === void 0 ? void 0 : g[l(1415)]({ jsonrpc: l(1720), id: e.id, error: { code: Number[l(859)](d.code) ? d[l(1256)] : vx.InternalError, message: (h = d[l(2028)]) !== null && h !== void 0 ? h : l(1648) } });
    }).catch((d) => this[s(2298)](new Error(s(1593) + d)))[s(2495)](() => {
      this[s(2374)].delete(e.id);
    });
  }
  _onprogress(e) {
    const t = n, { progressToken: s, ...x } = e[t(708)], r = Number(s), a = this._progressHandlers.get(r);
    if (!a) {
      this[t(2298)](new Error("Received a progress notification for an unknown token: " + JSON[t(2325)](e)));
      return;
    }
    const o = this[t(558)][t(2086)](r), c = this[t(2482)][t(2086)](r);
    if (c && o && c[t(1373)]) try {
      this[t(1068)](r);
    } catch (u) {
      o(u);
      return;
    }
    a(x);
  }
  [n(559)](e) {
    const t = n, s = Number(e.id), x = this[t(558)].get(s);
    if (x === void 0) {
      this[t(2298)](new Error(t(517) + JSON[t(2325)](e)));
      return;
    }
    if (this._responseHandlers.delete(s), this[t(1803)][t(1574)](s), this[t(662)](s), Nr(e)) x(e);
    else {
      const r = new Ax(e[t(549)][t(1256)], e[t(549)].message, e[t(549)][t(1024)]);
      x(r);
    }
  }
  get [n(489)]() {
    return this[n(1125)];
  }
  async [n(2400)]() {
    const e = n;
    var t;
    await ((t = this[e(1125)]) === null || t === void 0 ? void 0 : t[e(2400)]());
  }
  [n(1478)](e, t, s) {
    const { relatedRequestId: x, resumptionToken: r, onresumptiontoken: a } = s ?? {};
    return new Promise((o, c) => {
      const u = B;
      var f, d, l, g, h, m;
      if (!this[u(1125)]) {
        c(new Error("Not connected"));
        return;
      }
      ((f = this[u(745)]) === null || f === void 0 ? void 0 : f[u(1940)]) === !0 && this.assertCapabilityForMethod(e[u(2152)]), (d = s == null ? void 0 : s[u(1355)]) === null || d === void 0 || d[u(1612)]();
      const y = this[u(2337)]++, w = { ...e, jsonrpc: u(1720), id: y };
      s != null && s[u(749)] && (this[u(1803)].set(y, s.onprogress), w.params = { ...e[u(708)], _meta: { ...((l = e[u(708)]) === null || l === void 0 ? void 0 : l[u(945)]) || {}, progressToken: y } });
      const E = (P) => {
        const S = u;
        var R;
        this[S(558)][S(1574)](y), this[S(1803)][S(1574)](y), this[S(662)](y), (R = this[S(1125)]) === null || R === void 0 || R[S(1415)]({ jsonrpc: S(1720), method: S(901), params: { requestId: y, reason: String(P) } }, { relatedRequestId: x, resumptionToken: r, onresumptiontoken: a })[S(989)]((j) => this._onerror(new Error(S(2468) + j))), c(P);
      };
      this[u(558)][u(1396)](y, (P) => {
        const S = u;
        var R;
        if (!(!((R = s == null ? void 0 : s[S(1355)]) === null || R === void 0) && R[S(2507)])) {
          if (P instanceof Error) return c(P);
          try {
            const j = t[S(1938)](P[S(1152)]);
            o(j);
          } catch (j) {
            c(j);
          }
        }
      }), (g = s == null ? void 0 : s.signal) === null || g === void 0 || g.addEventListener(u(846), () => {
        const P = u;
        var S;
        E((S = s == null ? void 0 : s[P(1355)]) === null || S === void 0 ? void 0 : S.reason);
      });
      const q = (h = s == null ? void 0 : s[u(1380)]) !== null && h !== void 0 ? h : mo, O = () => E(new Ax(vx[u(466)], u(422), { timeout: q }));
      this[u(1014)](y, q, s == null ? void 0 : s[u(2368)], O, (m = s == null ? void 0 : s[u(1373)]) !== null && m !== void 0 ? m : !1), this[u(1125)][u(1415)](w, { relatedRequestId: x, resumptionToken: r, onresumptiontoken: a })[u(989)]((P) => {
        this[u(662)](y), c(P);
      });
    });
  }
  async [n(504)](e, t) {
    const s = n;
    var x, r;
    if (!this._transport) throw new Error("Not connected");
    if (this[s(309)](e[s(2152)]), ((r = (x = this[s(745)]) === null || x === void 0 ? void 0 : x.debouncedNotificationMethods) !== null && r !== void 0 ? r : [])[s(1101)](e.method) && !e[s(708)] && !(t != null && t.relatedRequestId)) {
      if (this._pendingDebouncedNotifications[s(1220)](e[s(2152)])) return;
      this[s(1244)][s(1732)](e[s(2152)]), Promise[s(1666)]()[s(2055)](() => {
        const u = s;
        var f;
        if (this[u(1244)][u(1574)](e[u(2152)]), !this._transport) return;
        const d = { ...e, jsonrpc: u(1720) };
        (f = this[u(1125)]) === null || f === void 0 || f.send(d, t)[u(989)]((l) => this[u(2298)](l));
      });
      return;
    }
    const c = { ...e, jsonrpc: s(1720) };
    await this[s(1125)][s(1415)](c, t);
  }
  [n(804)](e, t) {
    const s = n, x = e[s(1431)].method[s(778)];
    this.assertRequestHandlerCapability(x), this[s(1082)][s(1396)](x, (r, a) => Promise[s(1666)](t(e.parse(r), a)));
  }
  removeRequestHandler(e) {
    const t = n;
    this[t(1082)][t(1574)](e);
  }
  [n(1437)](e) {
    const t = n;
    if (this._requestHandlers.has(e)) throw new Error(t(785) + e + t(1231));
  }
  [n(2353)](e, t) {
    const s = n;
    this[s(863)][s(1396)](e.shape[s(2152)][s(778)], (x) => Promise[s(1666)](t(e[s(1938)](x))));
  }
  [n(2210)](e) {
    this._notificationHandlers.delete(e);
  }
}
function vo(i, e) {
  const t = n;
  return Object[t(772)](e).reduce((s, [x, r]) => (r && typeof r === t(1395) ? s[x] = s[x] ? { ...s[x], ...r } : r : s[x] = r, s), { ...i });
}
function aa(i) {
  const e = n;
  return i && i[e(842)] && Object[e(2173)].hasOwnProperty[e(896)](i, e(664)) ? i[e(664)] : i;
}
var Yx = { exports: {} }, yo = Yx[n(1406)], qr;
function bo() {
  const i = n;
  return qr || (qr = 1, function(e, t) {
    (function(s, x) {
      x(t);
    })(yo, function(s) {
      const x = B;
      function r() {
        const k = B;
        for (var p = arguments.length, v = Array(p), b = 0; b < p; b++)
          v[b] = arguments[b];
        if (v.length > 1) {
          v[0] = v[0][k(2284)](0, -1);
          for (var $ = v.length - 1, z = 1; z < $; ++z)
            v[z] = v[z].slice(1, -1);
          return v[$] = v[$][k(2284)](1), v[k(2373)]("");
        } else return v[0];
      }
      function a(k) {
        return B(619) + k + ")";
      }
      function o(k) {
        const p = B;
        return k === void 0 ? p(1319) : k === null ? p(1817) : Object[p(2173)][p(616)][p(896)](k)[p(458)](" ").pop()[p(458)]("]")[p(1002)]()[p(383)]();
      }
      function c(k) {
        return k[B(592)]();
      }
      function u(k) {
        const p = B;
        return k != null ? k instanceof Array ? k : typeof k[p(1586)] !== p(369) || k[p(458)] || k[p(1864)] || k[p(896)] ? [k] : Array.prototype[p(2284)][p(896)](k) : [];
      }
      function f(k, p) {
        var v = k;
        if (p) for (var b in p)
          v[b] = p[b];
        return v;
      }
      function d(k) {
        const p = B;
        var v = p(2370), b = p(1281), $ = r(b, p(795)), z = a(a(p(895) + $ + "%" + $ + $ + "%" + $ + $) + "|" + a(p(260) + $ + "%" + $ + $) + "|" + a("%" + $ + $)), n0 = p(1893), o0 = "[\\!\\$\\&\\'\\(\\)\\*\\+\\,\\;\\=]", w0 = r(n0, o0), T0 = k ? "[\\xA0-\\u200D\\u2010-\\u2029\\u202F-\\uD7FF\\uF900-\\uFDCF\\uFDF0-\\uFFEF]" : "[]", H0 = k ? p(2506) : "[]", S0 = r(v, b, p(472), T0);
        a(v + r(v, b, "[\\+\\-\\.]") + "*"), a(a(z + "|" + r(S0, o0, p(1170))) + "*");
        var A0 = a(a("25[0-5]") + "|" + a(p(1668) + b) + "|" + a("1" + b + b) + "|" + a(p(1547) + b) + p(2084) + b), U0 = a(A0 + "\\." + A0 + "\\." + A0 + "\\." + A0), g0 = a($ + "{1,4}"), M0 = a(a(g0 + "\\:" + g0) + "|" + U0), W0 = a(a(g0 + "\\:") + "{6}" + M0), L0 = a(p(1419) + a(g0 + "\\:") + p(1766) + M0), Sx = a(a(g0) + p(1606) + a(g0 + "\\:") + p(334) + M0), ox = a(a(a(g0 + "\\:") + p(722) + g0) + p(1606) + a(g0 + "\\:") + p(2491) + M0), cx = a(a(a(g0 + "\\:") + "{0,2}" + g0) + p(1606) + a(g0 + "\\:") + p(2068) + M0), zx = a(a(a(g0 + "\\:") + "{0,3}" + g0) + p(1606) + g0 + "\\:" + M0), Fx = a(a(a(g0 + "\\:") + "{0,4}" + g0) + "?\\:\\:" + M0), tx = a(a(a(g0 + "\\:") + p(467) + g0) + p(1606) + g0), ux = a(a(a(g0 + "\\:") + p(1253) + g0) + p(1606)), Ex = a([W0, L0, Sx, ox, cx, zx, Fx, tx, ux][p(2373)]("|")), kx = a(a(S0 + "|" + z) + "+");
        a(p(648) + $ + p(1888) + r(S0, o0, "[\\:]") + "+"), a(a(z + "|" + r(S0, o0)) + "*");
        var fx = a(z + "|" + r(S0, o0, p(1364)));
        return a(a(z + "|" + r(S0, o0, p(539))) + "+"), a(a(fx + "|" + r(p(1655), H0)) + "*"), { NOT_SCHEME: new RegExp(r("[^]", v, b, p(395)), "g"), NOT_USERINFO: new RegExp(r(p(2346), S0, o0), "g"), NOT_HOST: new RegExp(r(p(1872), S0, o0), "g"), NOT_PATH: new RegExp(r(p(2118), S0, o0), "g"), NOT_PATH_NOSCHEME: new RegExp(r(p(2242), S0, o0), "g"), NOT_QUERY: new RegExp(r(p(2559), S0, o0, p(1611), H0), "g"), NOT_FRAGMENT: new RegExp(r(p(2559), S0, o0, "[\\:\\@\\/\\?]"), "g"), ESCAPE: new RegExp(r(p(2531), S0, o0), "g"), UNRESERVED: new RegExp(S0, "g"), OTHER_CHARS: new RegExp(r("[^\\%]", S0, w0), "g"), PCT_ENCODED: new RegExp(z, "g"), IPV4ADDRESS: new RegExp("^(" + U0 + ")$"), IPV6ADDRESS: new RegExp(p(1532) + Ex + ")" + a(a(p(1274) + $ + "{2})") + "(" + kx + ")") + p(2431)) };
      }
      var l = d(!1), g = d(!0), h = /* @__PURE__ */ function() {
        function k(p, v) {
          const b = B;
          var $ = [], z = !0, n0 = !1, o0 = void 0;
          try {
            for (var w0 = p[Symbol[b(2363)]](), T0; !(z = (T0 = w0[b(322)]()).done) && ($[b(1251)](T0[b(778)]), !(v && $[b(1586)] === v)); z = !0)
              ;
          } catch (H0) {
            n0 = !0, o0 = H0;
          } finally {
            try {
              !z && w0[b(800)] && w0[b(800)]();
            } finally {
              if (n0) throw o0;
            }
          }
          return $;
        }
        return function(p, v) {
          const b = B;
          if (Array[b(752)](p)) return p;
          if (Symbol[b(2363)] in Object(p)) return k(p, v);
          throw new TypeError(b(651));
        };
      }(), m = function(k) {
        const p = B;
        if (Array[p(752)](k)) {
          for (var v = 0, b = Array(k.length); v < k[p(1586)]; v++) b[v] = k[v];
          return b;
        } else return Array[p(1671)](k);
      }, y = 2147483647, w = 36, E = 1, q = 26, O = 38, P = 700, S = 72, R = 128, j = "-", D = /^xn--/, M = /[^\0-\x7E]/, N = /[\x2E\u3002\uFF0E\uFF61]/g, I = { overflow: "Overflow: input needs wider integers to process", "not-basic": "Illegal input >= 0x80 (not a basic code point)", "invalid-input": x(2386) }, U = w - E, H = Math.floor, V = String[x(747)];
      function J(k) {
        throw new RangeError(I[k]);
      }
      function t0(k, p) {
        const v = x;
        for (var b = [], $ = k[v(1586)]; $--; )
          b[$] = p(k[$]);
        return b;
      }
      function e0(k, p) {
        const v = x;
        var b = k[v(458)]("@"), $ = "";
        b.length > 1 && ($ = b[0] + "@", k = b[1]), k = k[v(969)](N, ".");
        var z = k[v(458)]("."), n0 = t0(z, p)[v(2373)](".");
        return $ + n0;
      }
      function u0(k) {
        const p = x;
        for (var v = [], b = 0, $ = k[p(1586)]; b < $; ) {
          var z = k.charCodeAt(b++);
          if (z >= 55296 && z <= 56319 && b < $) {
            var n0 = k[p(2088)](b++);
            (n0 & 64512) == 56320 ? v[p(1251)](((z & 1023) << 10) + (n0 & 1023) + 65536) : (v[p(1251)](z), b--);
          } else v.push(z);
        }
        return v;
      }
      var l0 = function(p) {
        const v = x;
        return String.fromCodePoint[v(813)](String, m(p));
      }, f0 = function(p) {
        return p - 48 < 10 ? p - 22 : p - 65 < 26 ? p - 65 : p - 97 < 26 ? p - 97 : w;
      }, y0 = function(p, v) {
        return p + 22 + 75 * (p < 26) - ((v != 0) << 5);
      }, F0 = function(p, v, b) {
        var $ = 0;
        for (p = b ? H(p / P) : p >> 1, p += H(p / v); p > U * q >> 1; $ += w)
          p = H(p / U);
        return H($ + (U + 1) * p / (p + O));
      }, D0 = function(p) {
        const v = x;
        var b = [], $ = p[v(1586)], z = 0, n0 = R, o0 = S, w0 = p[v(2258)](j);
        w0 < 0 && (w0 = 0);
        for (var T0 = 0; T0 < w0; ++T0)
          p.charCodeAt(T0) >= 128 && J("not-basic"), b.push(p[v(2088)](T0));
        for (var H0 = w0 > 0 ? w0 + 1 : 0; H0 < $; ) {
          for (var S0 = z, A0 = 1, U0 = w; ; U0 += w) {
            H0 >= $ && J(v(2359));
            var g0 = f0(p[v(2088)](H0++));
            (g0 >= w || g0 > H((y - z) / A0)) && J(v(995)), z += g0 * A0;
            var M0 = U0 <= o0 ? E : U0 >= o0 + q ? q : U0 - o0;
            if (g0 < M0) break;
            var W0 = w - M0;
            A0 > H(y / W0) && J(v(995)), A0 *= W0;
          }
          var L0 = b[v(1586)] + 1;
          o0 = F0(z - S0, L0, S0 == 0), H(z / L0) > y - n0 && J(v(995)), n0 += H(z / L0), z %= L0, b[v(748)](z++, 0, n0);
        }
        return String.fromCodePoint[v(813)](String, b);
      }, k0 = function(p) {
        const v = x;
        var b = [];
        p = u0(p);
        var $ = p[v(1586)], z = R, n0 = 0, o0 = S, w0 = !0, T0 = !1, H0 = void 0;
        try {
          for (var S0 = p[Symbol[v(2363)]](), A0; !(w0 = (A0 = S0.next())[v(1591)]); w0 = !0) {
            var U0 = A0[v(778)];
            U0 < 128 && b.push(V(U0));
          }
        } catch (Qx) {
          T0 = !0, H0 = Qx;
        } finally {
          try {
            !w0 && S0[v(800)] && S0[v(800)]();
          } finally {
            if (T0) throw H0;
          }
        }
        var g0 = b[v(1586)], M0 = g0;
        for (g0 && b.push(j); M0 < $; ) {
          var W0 = y, L0 = !0, Sx = !1, ox = void 0;
          try {
            for (var cx = p[Symbol[v(2363)]](), zx; !(L0 = (zx = cx[v(322)]()).done); L0 = !0) {
              var Fx = zx.value;
              Fx >= z && Fx < W0 && (W0 = Fx);
            }
          } catch (Qx) {
            Sx = !0, ox = Qx;
          } finally {
            try {
              !L0 && cx[v(800)] && cx[v(800)]();
            } finally {
              if (Sx) throw ox;
            }
          }
          var tx = M0 + 1;
          W0 - z > H((y - n0) / tx) && J(v(995)), n0 += (W0 - z) * tx, z = W0;
          var ux = !0, Ex = !1, kx = void 0;
          try {
            for (var fx = p[Symbol[v(2363)]](), mr; !(ux = (mr = fx[v(322)]())[v(1591)]); ux = !0) {
              var gr = mr[v(778)];
              if (gr < z && ++n0 > y && J(v(995)), gr == z) {
                for (var ce = n0, ue = w; ; ue += w) {
                  var fe = ue <= o0 ? E : ue >= o0 + q ? q : ue - o0;
                  if (ce < fe) break;
                  var vr = ce - fe, yr = w - fe;
                  b.push(V(y0(fe + vr % yr, 0))), ce = H(vr / yr);
                }
                b[v(1251)](V(y0(ce, 0))), o0 = F0(n0, tx, M0 == g0), n0 = 0, ++M0;
              }
            }
          } catch (Qx) {
            Ex = !0, kx = Qx;
          } finally {
            try {
              !ux && fx[v(800)] && fx[v(800)]();
            } finally {
              if (Ex) throw kx;
            }
          }
          ++n0, ++z;
        }
        return b[v(2373)]("");
      }, J0 = function(p) {
        return e0(p, function(v) {
          const b = B;
          return D.test(v) ? D0(v.slice(4)[b(383)]()) : v;
        });
      }, T = function(p) {
        return e0(p, function(v) {
          const b = B;
          return M[b(2500)](v) ? b(1278) + k0(v) : v;
        });
      }, A = { version: x(1598), ucs2: { decode: u0, encode: l0 }, decode: D0, encode: k0, toASCII: T, toUnicode: J0 }, L = {};
      function Q(k) {
        const p = x;
        var v = k.charCodeAt(0), b = void 0;
        return v < 16 ? b = "%0" + v.toString(16).toUpperCase() : v < 128 ? b = "%" + v[p(616)](16).toUpperCase() : v < 2048 ? b = "%" + (v >> 6 | 192)[p(616)](16).toUpperCase() + "%" + (v & 63 | 128)[p(616)](16).toUpperCase() : b = "%" + (v >> 12 | 224)[p(616)](16)[p(592)]() + "%" + (v >> 6 & 63 | 128).toString(16)[p(592)]() + "%" + (v & 63 | 128)[p(616)](16)[p(592)](), b;
      }
      function X(k) {
        const p = x;
        for (var v = "", b = 0, $ = k[p(1586)]; b < $; ) {
          var z = parseInt(k.substr(b + 1, 2), 16);
          if (z < 128) v += String.fromCharCode(z), b += 3;
          else if (z >= 194 && z < 224) {
            if ($ - b >= 6) {
              var n0 = parseInt(k[p(914)](b + 4, 2), 16);
              v += String[p(747)]((z & 31) << 6 | n0 & 63);
            } else v += k.substr(b, 6);
            b += 6;
          } else if (z >= 224) {
            if ($ - b >= 9) {
              var o0 = parseInt(k.substr(b + 4, 2), 16), w0 = parseInt(k[p(914)](b + 7, 2), 16);
              v += String[p(747)]((z & 15) << 12 | (o0 & 63) << 6 | w0 & 63);
            } else v += k[p(914)](b, 9);
            b += 9;
          } else v += k[p(914)](b, 3), b += 3;
        }
        return v;
      }
      function W(k, p) {
        const v = x;
        function b($) {
          const z = B;
          var n0 = X($);
          return n0[z(415)](p.UNRESERVED) ? n0 : $;
        }
        return k[v(612)] && (k[v(612)] = String(k.scheme)[v(969)](p[v(1102)], b)[v(383)]().replace(p[v(1715)], "")), k.userinfo !== void 0 && (k.userinfo = String(k[v(1115)])[v(969)](p.PCT_ENCODED, b)[v(969)](p[v(2516)], Q)[v(969)](p[v(1102)], c)), k[v(2542)] !== void 0 && (k.host = String(k[v(2542)])[v(969)](p[v(1102)], b)[v(383)]()[v(969)](p.NOT_HOST, Q)[v(969)](p[v(1102)], c)), k[v(2501)] !== void 0 && (k.path = String(k[v(2501)])[v(969)](p[v(1102)], b)[v(969)](k[v(612)] ? p[v(845)] : p[v(2267)], Q)[v(969)](p[v(1102)], c)), k[v(1195)] !== void 0 && (k[v(1195)] = String(k[v(1195)])[v(969)](p[v(1102)], b)[v(969)](p[v(1556)], Q).replace(p[v(1102)], c)), k[v(1548)] !== void 0 && (k.fragment = String(k.fragment)[v(969)](p[v(1102)], b)[v(969)](p[v(1843)], Q)[v(969)](p[v(1102)], c)), k;
      }
      function G(k) {
        return k[x(969)](/^0*(.*)/, "$1") || "0";
      }
      function i0(k, p) {
        const v = x;
        var b = k[v(415)](p[v(1646)]) || [], $ = h(b, 2), z = $[1];
        return z ? z[v(458)](".")[v(1889)](G).join(".") : k;
      }
      function s0(k, p) {
        const v = x;
        var b = k[v(415)](p[v(1154)]) || [], $ = h(b, 3), z = $[1], n0 = $[2];
        if (z) {
          for (var o0 = z[v(383)]()[v(458)]("::")[v(1142)](), w0 = h(o0, 2), T0 = w0[0], H0 = w0[1], S0 = H0 ? H0[v(458)](":")[v(1889)](G) : [], A0 = T0.split(":")[v(1889)](G), U0 = p.IPV4ADDRESS.test(A0[A0[v(1586)] - 1]), g0 = U0 ? 7 : 8, M0 = A0[v(1586)] - g0, W0 = Array(g0), L0 = 0; L0 < g0; ++L0)
            W0[L0] = S0[L0] || A0[M0 + L0] || "";
          U0 && (W0[g0 - 1] = i0(W0[g0 - 1], p));
          var Sx = W0[v(407)](function(tx, ux, Ex) {
            const kx = v;
            if (!ux || ux === "0") {
              var fx = tx[tx.length - 1];
              fx && fx.index + fx[kx(1586)] === Ex ? fx[kx(1586)]++ : tx[kx(1251)]({ index: Ex, length: 1 });
            }
            return tx;
          }, []), ox = Sx[v(1962)](function(tx, ux) {
            return ux[v(1586)] - tx.length;
          })[0], cx = void 0;
          if (ox && ox.length > 1) {
            var zx = W0[v(2284)](0, ox[v(1184)]), Fx = W0[v(2284)](ox[v(1184)] + ox[v(1586)]);
            cx = zx[v(2373)](":") + "::" + Fx[v(2373)](":");
          } else cx = W0[v(2373)](":");
          return n0 && (cx += "%" + n0), cx;
        } else return k;
      }
      var _ = /^(?:([^:\/?#]+):)?(?:\/\/((?:([^\/?#@]*)@)?(\[[^\/?#\]]+\]|[^\/?#:]*)(?:\:(\d*))?))?([^?#]*)(?:\?([^#]*))?(?:#((?:.|\n|\r)*))?/i, j0 = ""[x(415)](/(){0}/)[1] === void 0;
      function q0(k) {
        const p = x;
        var v = arguments[p(1586)] > 1 && arguments[1] !== void 0 ? arguments[1] : {}, b = {}, $ = v[p(337)] !== !1 ? g : l;
        v[p(1828)] === "suffix" && (k = (v[p(612)] ? v[p(612)] + ":" : "") + "//" + k);
        var z = k[p(415)](_);
        if (z) {
          j0 ? (b.scheme = z[1], b[p(1115)] = z[3], b[p(2542)] = z[4], b[p(2430)] = parseInt(z[5], 10), b[p(2501)] = z[6] || "", b[p(1195)] = z[7], b[p(1548)] = z[8], isNaN(b[p(2430)]) && (b[p(2430)] = z[5])) : (b[p(612)] = z[1] || void 0, b[p(1115)] = k[p(1563)]("@") !== -1 ? z[3] : void 0, b[p(2542)] = k.indexOf("//") !== -1 ? z[4] : void 0, b[p(2430)] = parseInt(z[5], 10), b.path = z[6] || "", b.query = k[p(1563)]("?") !== -1 ? z[7] : void 0, b[p(1548)] = k[p(1563)]("#") !== -1 ? z[8] : void 0, isNaN(b[p(2430)]) && (b[p(2430)] = k[p(415)](/\/\/(?:.|\n)*\:(?:\/|\?|\#|$)/) ? z[4] : void 0)), b.host && (b.host = s0(i0(b[p(2542)], $), $)), b.scheme === void 0 && b[p(1115)] === void 0 && b.host === void 0 && b[p(2430)] === void 0 && !b.path && b.query === void 0 ? b.reference = "same-document" : b[p(612)] === void 0 ? b.reference = "relative" : b[p(1548)] === void 0 ? b[p(1828)] = p(2053) : b[p(1828)] = p(1193), v.reference && v[p(1828)] !== p(550) && v[p(1828)] !== b[p(1828)] && (b[p(549)] = b.error || p(1417) + v[p(1828)] + p(493));
          var n0 = L[(v[p(612)] || b[p(612)] || "")[p(383)]()];
          if (!v[p(1031)] && (!n0 || !n0[p(1031)])) {
            if (b.host && (v[p(1504)] || n0 && n0.domainHost)) try {
              b[p(2542)] = A[p(2333)](b[p(2542)][p(969)]($[p(1102)], X).toLowerCase());
            } catch (o0) {
              b[p(549)] = b[p(549)] || p(2381) + o0;
            }
            W(b, l);
          } else W(b, $);
          n0 && n0[p(1938)] && n0.parse(b, v);
        } else b[p(549)] = b[p(549)] || p(1854);
        return b;
      }
      function $0(k, p) {
        const v = x;
        var b = p[v(337)] !== !1 ? g : l, $ = [];
        return k[v(1115)] !== void 0 && ($[v(1251)](k[v(1115)]), $[v(1251)]("@")), k[v(2542)] !== void 0 && $[v(1251)](s0(i0(String(k[v(2542)]), b), b)[v(969)](b[v(1154)], function(z, n0, o0) {
          const w0 = v;
          return "[" + n0 + (o0 ? w0(378) + o0 : "") + "]";
        })), (typeof k[v(2430)] === v(369) || typeof k[v(2430)] === v(342)) && ($[v(1251)](":"), $[v(1251)](String(k[v(2430)]))), $[v(1586)] ? $.join("") : void 0;
      }
      var b0 = /^\.\.?\//, K0 = /^\/\.(\/|$)/, ax = /^\/\.\.(\/|$)/, Q0 = /^\/?(?:.|\n)*?(?=\/|$)/;
      function O0(k) {
        const p = x;
        for (var v = []; k[p(1586)]; )
          if (k[p(415)](b0)) k = k[p(969)](b0, "");
          else if (k.match(K0)) k = k.replace(K0, "/");
          else if (k.match(ax)) k = k[p(969)](ax, "/"), v.pop();
          else if (k === "." || k === "..") k = "";
          else {
            var b = k[p(415)](Q0);
            if (b) {
              var $ = b[0];
              k = k.slice($[p(1586)]), v[p(1251)]($);
            } else throw new Error(p(1105));
          }
        return v[p(2373)]("");
      }
      function z0(k) {
        const p = x;
        var v = arguments[p(1586)] > 1 && arguments[1] !== void 0 ? arguments[1] : {}, b = v[p(337)] ? g : l, $ = [], z = L[(v[p(612)] || k[p(612)] || "")[p(383)]()];
        if (z && z[p(1338)] && z.serialize(k, v), k[p(2542)] && !b[p(1154)][p(2500)](k[p(2542)])) {
          if (v[p(1504)] || z && z[p(1504)]) try {
            k[p(2542)] = v.iri ? A[p(1261)](k[p(2542)]) : A[p(2333)](k.host[p(969)](b[p(1102)], X)[p(383)]());
          } catch (w0) {
            k[p(549)] = k[p(549)] || p(2290) + (v[p(337)] ? p(682) : p(1636)) + p(891) + w0;
          }
        }
        W(k, b), v[p(1828)] !== p(550) && k[p(612)] && ($.push(k[p(612)]), $[p(1251)](":"));
        var n0 = $0(k, v);
        if (n0 !== void 0 && (v[p(1828)] !== p(550) && $[p(1251)]("//"), $[p(1251)](n0), k[p(2501)] && k[p(2501)][p(2334)](0) !== "/" && $[p(1251)]("/")), k[p(2501)] !== void 0) {
          var o0 = k[p(2501)];
          !v[p(1040)] && (!z || !z[p(1040)]) && (o0 = O0(o0)), n0 === void 0 && (o0 = o0[p(969)](/^\/\//, p(1791))), $[p(1251)](o0);
        }
        return k.query !== void 0 && ($[p(1251)]("?"), $[p(1251)](k[p(1195)])), k[p(1548)] !== void 0 && ($.push("#"), $[p(1251)](k[p(1548)])), $.join("");
      }
      function Y0(k, p) {
        const v = x;
        var b = arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : {}, $ = arguments[3], z = {};
        return !$ && (k = q0(z0(k, b), b), p = q0(z0(p, b), b)), b = b || {}, !b[v(1150)] && p[v(612)] ? (z[v(612)] = p[v(612)], z[v(1115)] = p[v(1115)], z.host = p[v(2542)], z[v(2430)] = p[v(2430)], z[v(2501)] = O0(p[v(2501)] || ""), z.query = p[v(1195)]) : (p[v(1115)] !== void 0 || p[v(2542)] !== void 0 || p.port !== void 0 ? (z[v(1115)] = p[v(1115)], z[v(2542)] = p[v(2542)], z[v(2430)] = p[v(2430)], z.path = O0(p[v(2501)] || ""), z.query = p.query) : (p[v(2501)] ? (p.path[v(2334)](0) === "/" ? z[v(2501)] = O0(p[v(2501)]) : ((k[v(1115)] !== void 0 || k.host !== void 0 || k.port !== void 0) && !k[v(2501)] ? z[v(2501)] = "/" + p.path : k[v(2501)] ? z[v(2501)] = k[v(2501)][v(2284)](0, k[v(2501)][v(2258)]("/") + 1) + p[v(2501)] : z[v(2501)] = p.path, z[v(2501)] = O0(z[v(2501)])), z[v(1195)] = p[v(1195)]) : (z[v(2501)] = k[v(2501)], p[v(1195)] !== void 0 ? z.query = p[v(1195)] : z[v(1195)] = k[v(1195)]), z[v(1115)] = k[v(1115)], z[v(2542)] = k[v(2542)], z[v(2430)] = k[v(2430)]), z.scheme = k.scheme), z[v(1548)] = p[v(1548)], z;
      }
      function Rx(k, p, v) {
        var $ = f({ scheme: x(1817) }, v);
        return z0(Y0(q0(k, $), q0(p, $), $, !0), $);
      }
      function Le(k, p) {
        const v = x;
        return typeof k == "string" ? k = z0(q0(k, p), p) : o(k) === v(1395) && (k = q0(z0(k, p), p)), k;
      }
      function ir(k, p, v) {
        const b = x;
        return typeof k === b(342) ? k = z0(q0(k, v), v) : o(k) === b(1395) && (k = z0(k, v)), typeof p == "string" ? p = z0(q0(p, v), v) : o(p) === b(1395) && (p = z0(p, v)), k === p;
      }
      function va(k, p) {
        const v = x;
        return k && k[v(616)]().replace(!p || !p[v(337)] ? l.ESCAPE : g[v(1257)], Q);
      }
      function mx(k, p) {
        const v = x;
        return k && k[v(616)]()[v(969)](!p || !p[v(337)] ? l.PCT_ENCODED : g.PCT_ENCODED, X);
      }
      var Kx = { scheme: x(775), domainHost: !0, parse: function(p, v) {
        const b = x;
        return !p[b(2542)] && (p[b(549)] = p.error || b(2321)), p;
      }, serialize: function(p, v) {
        const b = x;
        var $ = String(p[b(612)])[b(383)]() === b(840);
        return (p[b(2430)] === ($ ? 443 : 80) || p[b(2430)] === "") && (p[b(2430)] = void 0), !p.path && (p[b(2501)] = "/"), p;
      } }, or = { scheme: x(840), domainHost: Kx[x(1504)], parse: Kx[x(1938)], serialize: Kx[x(1338)] };
      function cr(k) {
        const p = x;
        return typeof k[p(2371)] === p(320) ? k[p(2371)] : String(k[p(612)])[p(383)]() === "wss";
      }
      var Jx = { scheme: "ws", domainHost: !0, parse: function(p, v) {
        const b = x;
        var $ = p;
        return $[b(2371)] = cr($), $[b(1572)] = ($[b(2501)] || "/") + ($.query ? "?" + $[b(1195)] : ""), $[b(2501)] = void 0, $[b(1195)] = void 0, $;
      }, serialize: function(p, v) {
        const b = x;
        if ((p[b(2430)] === (cr(p) ? 443 : 80) || p[b(2430)] === "") && (p[b(2430)] = void 0), typeof p[b(2371)] === b(320) && (p[b(612)] = p.secure ? "wss" : "ws", p.secure = void 0), p[b(1572)]) {
          var $ = p[b(1572)].split("?"), z = h($, 2), n0 = z[0], o0 = z[1];
          p[b(2501)] = n0 && n0 !== "/" ? n0 : void 0, p[b(1195)] = o0, p[b(1572)] = void 0;
        }
        return p[b(1548)] = void 0, p;
      } }, ur = { scheme: x(1049), domainHost: Jx[x(1504)], parse: Jx[x(1938)], serialize: Jx[x(1338)] }, ya = {}, fr = "[A-Za-z0-9\\-\\.\\_\\~" + x(2023) + "]", ix = x(1861), ba = a(a("%[EFef]" + ix + "%" + ix + ix + "%" + ix + ix) + "|" + a(x(260) + ix + "%" + ix + ix) + "|" + a("%" + ix + ix)), wa = x(613), Sa = "[\\!\\$\\%\\'\\(\\)\\*\\+\\,\\-\\.0-9\\<\\>A-Z\\x5E-\\x7E]", Ea = r(Sa, '[\\"\\\\]'), ka = "[\\!\\$\\'\\(\\)\\*\\+\\,\\;\\:\\@]", Pa = new RegExp(fr, "g"), $x = new RegExp(ba, "g"), Ca = new RegExp(r(x(2531), wa, x(2018), x(793), Ea), "g"), dr = new RegExp(r(x(2531), fr, ka), "g"), Ia = dr;
      function $e(k) {
        const p = x;
        var v = X(k);
        return v[p(415)](Pa) ? v : k;
      }
      var lr = { scheme: x(620), parse: function(p, v) {
        const b = x;
        var $ = p, z = $.to = $[b(2501)] ? $[b(2501)][b(458)](",") : [];
        if ($[b(2501)] = void 0, $[b(1195)]) {
          for (var n0 = !1, o0 = {}, w0 = $.query[b(458)]("&"), T0 = 0, H0 = w0[b(1586)]; T0 < H0; ++T0) {
            var S0 = w0[T0][b(458)]("=");
            switch (S0[0]) {
              case "to":
                for (var A0 = S0[1][b(458)](","), U0 = 0, g0 = A0[b(1586)]; U0 < g0; ++U0)
                  z[b(1251)](A0[U0]);
                break;
              case b(2151):
                $[b(2151)] = mx(S0[1], v);
                break;
              case b(1800):
                $[b(1800)] = mx(S0[1], v);
                break;
              default:
                n0 = !0, o0[mx(S0[0], v)] = mx(S0[1], v);
                break;
            }
          }
          n0 && ($[b(1238)] = o0);
        }
        $.query = void 0;
        for (var M0 = 0, W0 = z[b(1586)]; M0 < W0; ++M0) {
          var L0 = z[M0][b(458)]("@");
          if (L0[0] = mx(L0[0]), v[b(1031)]) L0[1] = mx(L0[1], v)[b(383)]();
          else try {
            L0[1] = A[b(2333)](mx(L0[1], v)[b(383)]());
          } catch (Sx) {
            $[b(549)] = $[b(549)] || b(1106) + Sx;
          }
          z[M0] = L0[b(2373)]("@");
        }
        return $;
      }, serialize: function(p, v) {
        const b = x;
        var $ = p, z = u(p.to);
        if (z) {
          for (var n0 = 0, o0 = z[b(1586)]; n0 < o0; ++n0) {
            var w0 = String(z[n0]), T0 = w0.lastIndexOf("@"), H0 = w0[b(2284)](0, T0)[b(969)]($x, $e)[b(969)]($x, c).replace(Ca, Q), S0 = w0.slice(T0 + 1);
            try {
              S0 = v[b(337)] ? A[b(1261)](S0) : A[b(2333)](mx(S0, v).toLowerCase());
            } catch (M0) {
              $[b(549)] = $[b(549)] || b(343) + (v[b(337)] ? b(682) : b(1636)) + b(891) + M0;
            }
            z[n0] = H0 + "@" + S0;
          }
          $.path = z[b(2373)](",");
        }
        var A0 = p[b(1238)] = p[b(1238)] || {};
        p[b(2151)] && (A0[b(2151)] = p[b(2151)]), p[b(1800)] && (A0[b(1800)] = p[b(1800)]);
        var U0 = [];
        for (var g0 in A0)
          A0[g0] !== ya[g0] && U0[b(1251)](g0[b(969)]($x, $e)[b(969)]($x, c)[b(969)](dr, Q) + "=" + A0[g0][b(969)]($x, $e).replace($x, c)[b(969)](Ia, Q));
        return U0[b(1586)] && ($[b(1195)] = U0.join("&")), $;
      } }, Ra = /^([^\:]+)\:(.*)/, hr = { scheme: x(1473), parse: function(p, v) {
        const b = x;
        var $ = p[b(2501)] && p.path.match(Ra), z = p;
        if ($) {
          var n0 = v[b(612)] || z.scheme || b(1473), o0 = $[1][b(383)](), w0 = $[2], T0 = n0 + ":" + (v[b(2499)] || o0), H0 = L[T0];
          z[b(2499)] = o0, z.nss = w0, z.path = void 0, H0 && (z = H0[b(1938)](z, v));
        } else z[b(549)] = z.error || "URN can not be parsed.";
        return z;
      }, serialize: function(p, v) {
        const b = x;
        var $ = v[b(612)] || p[b(612)] || b(1473), z = p[b(2499)], n0 = $ + ":" + (v[b(2499)] || z), o0 = L[n0];
        o0 && (p = o0[b(1338)](p, v));
        var w0 = p, T0 = p.nss;
        return w0[b(2501)] = (z || v.nid) + ":" + T0, w0;
      } }, Fa = /^[0-9A-Fa-f]{8}(?:\-[0-9A-Fa-f]{4}){3}\-[0-9A-Fa-f]{12}$/, pr = { scheme: "urn:uuid", parse: function(p, v) {
        const b = x;
        var $ = p;
        return $[b(509)] = $.nss, $[b(291)] = void 0, !v[b(1150)] && (!$[b(509)] || !$[b(509)][b(415)](Fa)) && ($[b(549)] = $.error || b(1987)), $;
      }, serialize: function(p, v) {
        const b = x;
        var $ = p;
        return $.nss = (p[b(509)] || "")[b(383)](), $;
      } };
      L[Kx[x(612)]] = Kx, L[or[x(612)]] = or, L[Jx.scheme] = Jx, L[ur.scheme] = ur, L[lr.scheme] = lr, L[hr[x(612)]] = hr, L[pr.scheme] = pr, s[x(2517)] = L, s[x(2340)] = Q, s[x(1277)] = X, s.parse = q0, s[x(2215)] = O0, s[x(1338)] = z0, s[x(293)] = Y0, s[x(1666)] = Rx, s.normalize = Le, s[x(2225)] = ir, s[x(2101)] = va, s[x(1793)] = mx, Object.defineProperty(s, x(842), { value: !0 });
    });
  }(Yx, Yx[i(1406)])), Yx[i(1406)];
}
var He, Or;
function rr() {
  return Or || (Or = 1, He = function i(e, t) {
    const s = B;
    if (e === t) return !0;
    if (e && t && typeof e == s(1395) && typeof t == "object") {
      if (e[s(436)] !== t[s(436)]) return !1;
      var x, r, a;
      if (Array[s(752)](e)) {
        if (x = e[s(1586)], x != t.length) return !1;
        for (r = x; r-- !== 0; ) if (!i(e[r], t[r])) return !1;
        return !0;
      }
      if (e[s(436)] === RegExp) return e[s(1826)] === t[s(1826)] && e[s(2285)] === t[s(2285)];
      if (e[s(1243)] !== Object[s(2173)][s(1243)]) return e.valueOf() === t[s(1243)]();
      if (e.toString !== Object[s(2173)][s(616)]) return e[s(616)]() === t[s(616)]();
      if (a = Object.keys(e), x = a[s(1586)], x !== Object[s(1001)](t)[s(1586)]) return !1;
      for (r = x; r-- !== 0; ) if (!Object[s(2173)][s(724)][s(896)](t, a[r])) return !1;
      for (r = x; r-- !== 0; ) {
        var o = a[r];
        if (!i(e[o], t[o])) return !1;
      }
      return !0;
    }
    return e !== e && t !== t;
  }), He;
}
var Ue, Ar;
function wo() {
  return Ar || (Ar = 1, Ue = function(e) {
    const t = B;
    for (var s = 0, x = e.length, r = 0, a; r < x; )
      s++, a = e.charCodeAt(r++), a >= 55296 && a <= 56319 && r < x && (a = e[t(2088)](r), (a & 64512) == 56320 && r++);
    return s;
  }), Ue;
}
var Ve, Tr;
function B(i, e) {
  const t = Ne();
  return B = function(s, x) {
    return s = s - 260, t[s];
  }, B(i, e);
}
function Zx() {
  const i = n;
  if (Tr) return Ve;
  Tr = 1, Ve = { copy: e, checkDataType: t, checkDataTypes: s, coerceToTypes: r, toHash: a, getProperty: u, escapeQuotes: f, equal: rr(), ucs2length: wo(), varOccurences: d, varReplace: l, schemaHasRules: g, schemaHasRulesExcept: h, schemaUnknownRules: m, toQuotedString: y, getPathExpr: w, getPath: E, getData: P, unescapeFragment: R, unescapeJsonPointer: M, escapeFragment: j, escapeJsonPointer: D };
  function e(N, I) {
    I = I || {};
    for (var U in N) I[U] = N[U];
    return I;
  }
  function t(N, I, U, H) {
    const V = B;
    var J = V(H ? 1020 : 294), t0 = H ? " || " : V(712), e0 = H ? "!" : "", u0 = H ? "" : "!";
    switch (N) {
      case "null":
        return I + J + V(1817);
      case V(1634):
        return e0 + "Array.isArray(" + I + ")";
      case V(1395):
        return "(" + e0 + I + t0 + V(1855) + I + J + V(2426) + t0 + u0 + V(1810) + I + "))";
      case "integer":
        return V(2048) + I + J + '"number"' + t0 + u0 + "(" + I + V(609) + t0 + I + J + I + (U ? t0 + e0 + V(484) + I + ")" : "") + ")";
      case V(369):
        return V(2048) + I + J + '"' + N + '"' + (U ? t0 + e0 + V(484) + I + ")" : "") + ")";
      default:
        return "typeof " + I + J + '"' + N + '"';
    }
  }
  function s(N, I, U) {
    const H = B;
    switch (N[H(1586)]) {
      case 1:
        return t(N[0], I, U, !0);
      default:
        var V = "", J = a(N);
        J[H(1634)] && J.object && (V = J.null ? "(" : "(!" + I + H(946), V += H(1855) + I + H(1625), delete J[H(1817)], delete J[H(1634)], delete J[H(1395)]), J[H(369)] && delete J.integer;
        for (var t0 in J) V += (V ? " && " : "") + t(t0, I, U, !0);
        return V;
    }
  }
  var x = a([i(342), i(369), i(586), i(320), "null"]);
  function r(N, I) {
    const U = i;
    if (Array[U(752)](I)) {
      for (var H = [], V = 0; V < I[U(1586)]; V++) {
        var J = I[V];
        x[J] ? H[H[U(1586)]] = J : N === U(1634) && J === U(1634) && (H[H.length] = J);
      }
      if (H[U(1586)]) return H;
    } else {
      if (x[I]) return [I];
      if (N === "array" && I === "array") return ["array"];
    }
  }
  function a(N) {
    const I = i;
    for (var U = {}, H = 0; H < N[I(1586)]; H++) U[N[H]] = !0;
    return U;
  }
  var o = /^[a-z$_][a-z$_0-9]*$/i, c = /'|\\/g;
  function u(N) {
    const I = i;
    return typeof N == I(369) ? "[" + N + "]" : o[I(2500)](N) ? "." + N : "['" + f(N) + "']";
  }
  function f(N) {
    const I = i;
    return N[I(969)](c, I(2532))[I(969)](/\n/g, "\\n").replace(/\r/g, "\\r")[I(969)](/\f/g, "\\f")[I(969)](/\t/g, "\\t");
  }
  function d(N, I) {
    const U = i;
    I += "[^0-9]";
    var H = N[U(415)](new RegExp(I, "g"));
    return H ? H.length : 0;
  }
  function l(N, I, U) {
    const H = i;
    return I += H(760), U = U.replace(/\$/g, H(581)), N.replace(new RegExp(I, "g"), U + "$1");
  }
  function g(N, I) {
    if (typeof N == "boolean") return !N;
    for (var U in N) if (I[U]) return !0;
  }
  function h(N, I, U) {
    if (typeof N == "boolean") return !N && U != "not";
    for (var H in N) if (H != U && I[H]) return !0;
  }
  function m(N, I) {
    if (typeof N != i(320)) {
      for (var H in N) if (!I[H]) return H;
    }
  }
  function y(N) {
    return "'" + f(N) + "'";
  }
  function w(N, I, U, H) {
    const V = i;
    var J = U ? V(473) + I + (H ? "" : V(530)) : H ? V(1467) + I + V(714) : V(1107) + I + " + '\\']'";
    return S(N, J);
  }
  function E(N, I, U) {
    var H = y(U ? "/" + D(I) : u(I));
    return S(N, H);
  }
  var q = /^\/(?:[^~]|~0|~1)*$/, O = /^([0-9]+)(#|\/(?:[^~]|~0|~1)*)?$/;
  function P(N, I, U) {
    const H = i;
    var V, J, t0, e0;
    if (N === "") return H(1128);
    if (N[0] == "/") {
      if (!q.test(N)) throw new Error("Invalid JSON-pointer: " + N);
      J = N, t0 = H(1128);
    } else {
      if (e0 = N[H(415)](O), !e0) throw new Error("Invalid JSON-pointer: " + N);
      if (V = +e0[1], J = e0[2], J == "#") {
        if (V >= I) throw new Error(H(1809) + V + " levels up, current level is " + I);
        return U[I - V];
      }
      if (V > I) throw new Error(H(2427) + V + H(1433) + I);
      if (t0 = H(1024) + (I - V || ""), !J) return t0;
    }
    for (var u0 = t0, l0 = J[H(458)]("/"), f0 = 0; f0 < l0[H(1586)]; f0++) {
      var y0 = l0[f0];
      y0 && (t0 += u(M(y0)), u0 += H(712) + t0);
    }
    return u0;
  }
  function S(N, I) {
    const U = i;
    return N == '""' ? I : (N + U(2339) + I)[U(969)](/([^\\])' \+ '/g, "$1");
  }
  function R(N) {
    return M(decodeURIComponent(N));
  }
  function j(N) {
    return encodeURIComponent(D(N));
  }
  function D(N) {
    const I = i;
    return N[I(969)](/~/g, "~0")[I(969)](/\//g, "~1");
  }
  function M(N) {
    const I = i;
    return N[I(969)](/~1/g, "/")[I(969)](/~0/g, "~");
  }
  return Ve;
}
var We, Dr;
function ia() {
  if (Dr) return We;
  Dr = 1;
  var i = Zx();
  We = e;
  function e(t) {
    i[B(526)](t, this);
  }
  return We;
}
var Be = { exports: {} }, jr;
function So() {
  const i = n;
  if (jr) return Be[i(1406)];
  jr = 1;
  var e = Be[i(1406)] = function(x, r, a) {
    const o = i;
    typeof r == o(730) && (a = r, r = {}), a = r.cb || a;
    var c = typeof a == o(730) ? a : a[o(358)] || function() {
    }, u = a[o(1728)] || function() {
    };
    t(r, c, u, x, "", x);
  };
  e.keywords = { additionalItems: !0, items: !0, contains: !0, additionalProperties: !0, propertyNames: !0, not: !0 }, e.arrayKeywords = { items: !0, allOf: !0, anyOf: !0, oneOf: !0 }, e[i(1503)] = { definitions: !0, properties: !0, patternProperties: !0, dependencies: !0 }, e.skipKeywords = { default: !0, enum: !0, const: !0, required: !0, maximum: !0, minimum: !0, exclusiveMaximum: !0, exclusiveMinimum: !0, multipleOf: !0, maxLength: !0, minLength: !0, pattern: !0, format: !0, maxItems: !0, minItems: !0, uniqueItems: !0, maxProperties: !0, minProperties: !0 };
  function t(x, r, a, o, c, u, f, d, l, g) {
    const h = i;
    if (o && typeof o == h(1395) && !Array[h(752)](o)) {
      r(o, c, u, f, d, l, g);
      for (var m in o) {
        var y = o[m];
        if (Array[h(752)](y)) {
          if (m in e[h(2016)])
            for (var w = 0; w < y[h(1586)]; w++) t(x, r, a, y[w], c + "/" + m + "/" + w, u, c, m, o, w);
        } else if (m in e[h(1503)]) {
          if (y && typeof y == "object")
            for (var E in y) t(x, r, a, y[E], c + "/" + m + "/" + s(E), u, c, m, o, E);
        } else (m in e[h(333)] || x.allKeys && !(m in e.skipKeywords)) && t(x, r, a, y, c + "/" + m, u, c, m, o);
      }
      a(o, c, u, f, d, l, g);
    }
  }
  function s(x) {
    const r = i;
    return x.replace(/~/g, "~0")[r(969)](/\//g, "~1");
  }
  return Be[i(1406)];
}
var Ze, Mr;
function sr() {
  const i = n;
  if (Mr) return Ze;
  Mr = 1;
  var e = bo(), t = rr(), s = Zx(), x = ia(), r = So();
  Ze = a, a[i(406)] = E, a[i(987)] = m, a[i(356)] = q, a[i(659)] = O, a.inlineRef = l, a[i(970)] = o;
  function a(P, S, R) {
    const j = i;
    var D = this._refs[R];
    if (typeof D == j(342))
      if (this[j(2540)][D]) D = this[j(2540)][D];
      else return a.call(this, P, S, D);
    if (D = D || this._schemas[R], D instanceof x) return l(D.schema, this._opts[j(2046)]) ? D[j(970)] : D[j(1017)] || this[j(1918)](D);
    var M = o.call(this, S, R), N, I, U;
    return M && (N = M.schema, S = M[j(707)], U = M.baseId), N instanceof x ? I = N[j(1017)] || P.call(this, N[j(970)], S, void 0, U) : N !== void 0 && (I = l(N, this._opts[j(2046)]) ? N : P[j(896)](this, N, S, void 0, U)), I;
  }
  function o(P, S) {
    const R = i;
    var j = e[R(1938)](S), D = y(j), M = m(this[R(2037)](P[R(970)]));
    if (Object.keys(P[R(970)])[R(1586)] === 0 || D !== M) {
      var N = E(D), I = this[R(2540)][N];
      if (typeof I == R(342)) return c[R(896)](this, P, I, j);
      if (I instanceof x)
        I[R(1017)] || this[R(1918)](I), P = I;
      else if (I = this[R(2524)][N], I instanceof x) {
        if (I[R(1017)] || this[R(1918)](I), N == E(S)) return { schema: I, root: P, baseId: M };
        P = I;
      } else return;
      if (!P[R(970)]) return;
      M = m(this[R(2037)](P[R(970)]));
    }
    return f[R(896)](this, j, M, P.schema, P);
  }
  function c(P, S, R) {
    const j = i;
    var D = o[j(896)](this, P, S);
    if (D) {
      var M = D[j(970)], N = D[j(1479)];
      P = D[j(707)];
      var I = this[j(2037)](M);
      return I && (N = q(N, I)), f.call(this, R, N, M, P);
    }
  }
  var u = s[i(973)]([i(2467), i(1404), "enum", "dependencies", "definitions"]);
  function f(P, S, R, j) {
    const D = i;
    if (P[D(1548)] = P[D(1548)] || "", P[D(1548)][D(2284)](0, 1) == "/") {
      for (var M = P[D(1548)][D(458)]("/"), N = 1; N < M.length; N++) {
        var I = M[N];
        if (I) {
          if (I = s[D(2169)](I), R = R[I], R === void 0) break;
          var U;
          if (!u[I] && (U = this[D(2037)](R), U && (S = q(S, U)), R[D(1607)])) {
            var H = q(S, R[D(1607)]), V = o[D(896)](this, j, H);
            V && (R = V.schema, j = V.root, S = V[D(1479)]);
          }
        }
      }
      if (R !== void 0 && R !== j.schema) return { schema: R, root: j, baseId: S };
    }
  }
  var d = s[i(973)]([i(1594), i(1156), "pattern", i(502), i(1844), "maxProperties", i(2232), "maxItems", i(1838), "maximum", "minimum", i(551), i(2387), i(2276), "enum"]);
  function l(P, S) {
    if (S === !1) return !1;
    if (S === void 0 || S === !0) return g(P);
    if (S) return h(P) <= S;
  }
  function g(P) {
    const S = i;
    var R;
    if (Array[S(752)](P)) {
      for (var j = 0; j < P[S(1586)]; j++)
        if (R = P[j], typeof R == S(1395) && !g(R)) return !1;
    } else for (var D in P)
      if (D == S(1607) || (R = P[D], typeof R == S(1395) && !g(R))) return !1;
    return !0;
  }
  function h(P) {
    const S = i;
    var R = 0, j;
    if (Array[S(752)](P)) {
      for (var D = 0; D < P[S(1586)]; D++)
        if (j = P[D], typeof j == S(1395) && (R += h(j)), R == 1 / 0) return 1 / 0;
    } else for (var M in P) {
      if (M == S(1607)) return 1 / 0;
      if (d[M]) R++;
      else if (j = P[M], typeof j == S(1395) && (R += h(j) + 1), R == 1 / 0) return 1 / 0;
    }
    return R;
  }
  function m(P, S) {
    const R = i;
    S !== !1 && (P = E(P));
    var j = e[R(1938)](P);
    return y(j);
  }
  function y(P) {
    const S = i;
    return e[S(1338)](P)[S(458)]("#")[0] + "#";
  }
  var w = /#\/?$/;
  function E(P) {
    return P ? P.replace(w, "") : "";
  }
  function q(P, S) {
    const R = i;
    return S = E(S), e[R(1666)](P, S);
  }
  function O(P) {
    var S = E(this._getId(P)), R = { "": S }, j = { "": m(S, !1) }, D = {}, M = this;
    return r(P, { allKeys: !0 }, function(N, I, U, H, V, J, t0) {
      const e0 = B;
      if (I !== "") {
        var u0 = M[e0(2037)](N), l0 = R[H], f0 = j[H] + "/" + V;
        if (t0 !== void 0 && (f0 += "/" + (typeof t0 == e0(369) ? t0 : s[e0(690)](t0))), typeof u0 == e0(342)) {
          u0 = l0 = E(l0 ? e[e0(1666)](l0, u0) : u0);
          var y0 = M[e0(2540)][u0];
          if (typeof y0 == e0(342) && (y0 = M[e0(2540)][y0]), y0 && y0[e0(970)]) {
            if (!t(N, y0.schema)) throw new Error(e0(817) + u0 + '" resolves to more than one schema');
          } else if (u0 != E(f0))
            if (u0[0] == "#") {
              if (D[u0] && !t(N, D[u0])) throw new Error(e0(817) + u0 + e0(1342));
              D[u0] = N;
            } else M._refs[u0] = f0;
        }
        R[I] = l0, j[I] = f0;
      }
    }), D;
  }
  return Ze;
}
var Ke, Lr;
function nr() {
  const i = n;
  if (Lr) return Ke;
  Lr = 1;
  var e = sr();
  Ke = { Validation: x(t), MissingRef: x(s) };
  function t(r) {
    const a = B;
    this[a(2028)] = a(2254), this[a(709)] = r, this.ajv = this[a(1201)] = !0;
  }
  s[i(2028)] = function(r, a) {
    const o = i;
    return o(955) + a + o(261) + r;
  };
  function s(r, a, o) {
    const c = i;
    this.message = o || s.message(r, a), this[c(2231)] = e.url(r, a), this[c(1197)] = e[c(406)](e.fullPath(this[c(2231)]));
  }
  function x(r) {
    const a = i;
    return r.prototype = Object.create(Error[a(2173)]), r[a(2173)][a(436)] = r, r;
  }
  return Ke;
}
var Je, $r;
function oa() {
  return $r || ($r = 1, Je = function(i, e) {
    const t = B;
    e || (e = {}), typeof e == "function" && (e = { cmp: e });
    var s = typeof e[t(670)] === t(320) ? e[t(670)] : !1, x = e[t(2121)] && /* @__PURE__ */ function(a) {
      return function(o) {
        return function(c, u) {
          var f = { key: c, value: o[c] }, d = { key: u, value: o[u] };
          return a(f, d);
        };
      };
    }(e.cmp), r = [];
    return function a(o) {
      const c = t;
      if (o && o.toJSON && typeof o[c(2508)] === c(730) && (o = o[c(2508)]()), o !== void 0) {
        if (typeof o == c(369)) return isFinite(o) ? "" + o : c(1817);
        if (typeof o !== c(1395)) return JSON.stringify(o);
        var u, f;
        if (Array.isArray(o)) {
          for (f = "[", u = 0; u < o[c(1586)]; u++)
            u && (f += ","), f += a(o[u]) || c(1817);
          return f + "]";
        }
        if (o === null) return c(1817);
        if (r[c(1563)](o) !== -1) {
          if (s) return JSON[c(2325)](c(1428));
          throw new TypeError("Converting circular structure to JSON");
        }
        var d = r[c(1251)](o) - 1, l = Object[c(1001)](o)[c(1962)](x && x(o));
        for (f = "", u = 0; u < l[c(1586)]; u++) {
          var g = l[u], h = a(o[g]);
          h && (f && (f += ","), f += JSON[c(2325)](g) + ":" + h);
        }
        return r.splice(d, 1), "{" + f + "}";
      }
    }(i);
  }), Je;
}
var Qe, zr;
function ca() {
  return zr || (zr = 1, Qe = function(e, t, s) {
    const x = B;
    var r = "", a = e[x(970)].$async === !0, o = e[x(497)][x(2528)](e[x(970)], e[x(1944)].all, x(1607)), c = e[x(1511)][x(2037)](e[x(970)]);
    if (e[x(2245)][x(1444)]) {
      var u = e[x(497)].schemaUnknownRules(e[x(970)], e[x(1944)][x(333)]);
      if (u) {
        var f = x(2066) + u;
        if (e[x(2245)][x(1444)] === x(1919)) e[x(1475)][x(455)](f);
        else throw new Error(f);
      }
    }
    if (e[x(1856)] && (r += x(1996), a && (e[x(646)] = !0, r += x(2039)), r += x(1616), c && (e[x(2245)][x(867)] || e[x(2245)].processCode) && (r += " " + (x(2503) + c + " */") + " ")), typeof e[x(970)] == x(320) || !(o || e[x(970)][x(1607)])) {
      var t = "false schema", d = e[x(1065)], l = e.dataLevel, g = e[x(970)][t], h = e[x(1992)] + e[x(497)][x(332)](t), m = e.errSchemaPath + "/" + t, S = !e[x(2245)][x(464)], D, y = "data" + (l || ""), P = x(1100) + d;
      if (e[x(970)] === !1) {
        e[x(1856)] ? S = !0 : r += x(1224) + P + x(1494);
        var w = w || [];
        w[x(1251)](r), r = "", e.createErrors !== !1 ? (r += x(1260) + (D || x(2335)) + x(1990) + e.errorPath + x(1524) + e.util[x(591)](m) + x(1915), e[x(2245)][x(2275)] !== !1 && (r += x(284)), e[x(2245)][x(2262)] && (r += x(2513) + e.schemaPath + x(2263) + y + " "), r += x(316)) : r += x(1603);
        var E = r;
        r = w[x(1088)](), !e.compositeRule && S ? e[x(646)] ? r += x(2156) + E + "]); " : r += " validate.errors = [" + E + x(1012) : r += x(2047) + E + x(1005);
      } else e[x(1856)] ? a ? r += " return data; " : r += x(1217) : r += x(1224) + P + x(338);
      return e[x(1856)] && (r += x(875)), r;
    }
    if (e.isTop) {
      var q = e.isTop, d = e[x(1065)] = 0, l = e[x(934)] = 0, y = x(1024);
      if (e[x(864)] = e[x(1666)].fullPath(e[x(1511)][x(2037)](e.root[x(970)])), e[x(1479)] = e.baseId || e[x(864)], delete e[x(1856)], e.dataPathArr = [""], e.schema[x(664)] !== void 0 && e.opts[x(521)] && e[x(2245)].strictDefaults) {
        var O = x(1263);
        if (e[x(2245)][x(1177)] === x(1919)) e[x(1475)].warn(O);
        else throw new Error(O);
      }
      r += " var vErrors = null; ", r += x(666), r += x(671);
    } else {
      var d = e[x(1065)], l = e[x(934)], y = x(1024) + (l || "");
      if (c && (e[x(1479)] = e[x(1666)][x(356)](e[x(1479)], c)), a && !e[x(646)]) throw new Error(x(582));
      r += x(2115) + d + x(683);
    }
    var P = x(1100) + d, S = !e[x(2245)][x(464)], R = "", j = "", D, M = e.schema.type, N = Array[x(752)](M);
    if (M && e[x(2245)][x(2411)] && e[x(970)].nullable === !0 && (N ? M.indexOf(x(1817)) == -1 && (M = M[x(576)](x(1817))) : M != x(1817) && (M = [M, x(1817)], N = !0)), N && M[x(1586)] == 1 && (M = M[0], N = !1), e[x(970)][x(1607)] && o) {
      if (e.opts.extendRefs == x(1896)) throw new Error(x(1739) + e[x(1414)] + x(1887));
      e.opts[x(1354)] !== !0 && (o = !1, e.logger[x(455)](x(777) + e[x(1414)] + '"'));
    }
    if (e[x(970)][x(2241)] && e[x(2245)][x(2241)] && (r += " " + e[x(1944)][x(1576)][x(2241)][x(1256)](e, x(2241))), M) {
      if (e[x(2245)].coerceTypes) var I = e.util[x(1581)](e[x(2245)][x(2317)], M);
      var U = e[x(1944)][x(1716)][M];
      if (I || N || U === !0 || U && !b0(U)) {
        var h = e.schemaPath + x(930), m = e[x(1414)] + x(1046), h = e.schemaPath + ".type", m = e[x(1414)] + x(1046), H = x(N ? 1175 : 2199);
        if (r += x(943) + e[x(497)][H](M, y, e[x(2245)][x(2226)], !0) + x(1577), I) {
          var V = x(2130) + d, J = "coerced" + d;
          r += " var " + V + " = typeof " + y + "; var " + J + x(553), e[x(2245)][x(2317)] == x(1634) && (r += x(943) + V + x(1774) + y + ") && " + y + ".length == 1) { " + y + x(1052) + y + "[0]; " + V + " = typeof " + y + x(1113) + e[x(497)][x(2199)](e[x(970)].type, y, e[x(2245)][x(2226)]) + ") " + J + x(1052) + y + "; } "), r += x(943) + J + x(431);
          var t0 = I;
          if (t0)
            for (var e0, u0 = -1, l0 = t0[x(1586)] - 1; u0 < l0; )
              e0 = t0[u0 += 1], e0 == "string" ? r += x(1545) + V + x(1808) + V + " == 'boolean') " + J + " = '' + " + y + x(1841) + y + x(2120) + J + x(2227) : e0 == x(369) || e0 == x(586) ? (r += x(1545) + V + " == 'boolean' || " + y + " === null || (" + V + x(1041) + y + x(712) + y + x(1091) + y + " ", e0 == "integer" && (r += x(2056) + y + x(609)), r += ")) " + J + x(2418) + y + "; ") : e0 == "boolean" ? r += x(1545) + y + x(2274) + y + " === 0 || " + y + x(2120) + J + " = false; else if (" + y + " === 'true' || " + y + x(1967) + J + x(338) : e0 == x(1817) ? r += " else if (" + y + x(2122) + y + x(2259) + y + x(812) + J + " = null; " : e[x(2245)][x(2317)] == x(1634) && e0 == x(1634) && (r += x(1545) + V + x(421) + V + x(1808) + V + x(1381) + y + x(522) + J + x(762) + y + x(1202));
          r += " else {   ";
          var w = w || [];
          w[x(1251)](r), r = "", e.createErrors !== !1 ? (r += " { keyword: '" + (D || x(1594)) + x(1990) + e[x(1617)] + x(1524) + e[x(497)].toQuotedString(m) + x(439), N ? r += "" + M.join(",") : r += "" + M, r += x(1619), e.opts.messages !== !1 && (r += " , message: 'should be ", N ? r += "" + M[x(2373)](",") : r += "" + M, r += "' "), e[x(2245)][x(2262)] && (r += x(923) + h + x(2449) + e[x(1992)] + x(2263) + y + " "), r += x(316)) : r += x(1603);
          var E = r;
          r = w[x(1088)](), !e.compositeRule && S ? e.async ? r += x(2156) + E + "]); " : r += x(1614) + E + x(1012) : r += " var err = " + E + x(1005), r += " } if (" + J + x(728);
          var f0 = l ? "data" + (l - 1 || "") : x(2075), y0 = l ? e[x(2530)][l] : x(731);
          r += " " + y + x(1052) + J + "; ", !l && (r += x(1009) + f0 + " !== undefined)"), r += " " + f0 + "[" + y0 + "] = " + J + x(905);
        } else {
          var w = w || [];
          w[x(1251)](r), r = "", e.createErrors !== !1 ? (r += " { keyword: '" + (D || "type") + x(1990) + e[x(1617)] + x(1524) + e[x(497)][x(591)](m) + x(439), N ? r += "" + M[x(2373)](",") : r += "" + M, r += x(1619), e.opts.messages !== !1 && (r += x(531), N ? r += "" + M[x(2373)](",") : r += "" + M, r += "' "), e[x(2245)].verbose && (r += x(923) + h + " , parentSchema: validate.schema" + e[x(1992)] + x(2263) + y + " "), r += x(316)) : r += " {} ";
          var E = r;
          r = w[x(1088)](), !e[x(1956)] && S ? e[x(646)] ? r += " throw new ValidationError([" + E + x(1694) : r += " validate.errors = [" + E + x(1012) : r += x(2047) + E + ";  if (vErrors === null) vErrors = [err]; else vErrors.push(err); errors++; ";
        }
        r += x(316);
      }
    }
    if (e.schema[x(1607)] && !o) r += " " + e[x(1944)][x(1576)].$ref.code(e, "$ref") + " ", S && (r += x(907), q ? r += "0" : r += "errs_" + d, r += ") { ", j += "}");
    else {
      var F0 = e[x(1944)];
      if (F0) {
        for (var U, D0 = -1, k0 = F0[x(1586)] - 1; D0 < k0; )
          if (U = F0[D0 += 1], b0(U)) {
            if (U[x(1594)] && (r += x(943) + e[x(497)][x(2199)](U[x(1594)], y, e[x(2245)][x(2226)]) + x(1577)), e[x(2245)].useDefaults) {
              if (U[x(1594)] == x(1395) && e[x(970)][x(2467)]) {
                var g = e[x(970)][x(2467)], J0 = Object[x(1001)](g), T = J0;
                if (T)
                  for (var A, L = -1, Q = T[x(1586)] - 1; L < Q; ) {
                    A = T[L += 1];
                    var X = g[A];
                    if (X.default !== void 0) {
                      var W = y + e[x(497)][x(332)](A);
                      if (e.compositeRule) {
                        if (e[x(2245)][x(1177)]) {
                          var O = x(2412) + W;
                          if (e[x(2245)][x(1177)] === "log") e.logger.warn(O);
                          else throw new Error(O);
                        }
                      } else r += x(943) + W + x(1427), e[x(2245)][x(521)] == x(912) && (r += x(946) + W + " === null || " + W + " === '' "), r += x(1482) + W + x(1052), e[x(2245)][x(521)] == x(2344) ? r += " " + e[x(1402)](X[x(664)]) + " " : r += " " + JSON[x(2325)](X[x(664)]) + " ", r += "; ";
                    }
                  }
              } else if (U[x(1594)] == x(1634) && Array[x(752)](e[x(970)][x(300)])) {
                var G = e[x(970)][x(300)];
                if (G) {
                  for (var X, u0 = -1, i0 = G[x(1586)] - 1; u0 < i0; )
                    if (X = G[u0 += 1], X[x(664)] !== void 0) {
                      var W = y + "[" + u0 + "]";
                      if (e[x(1956)]) {
                        if (e[x(2245)].strictDefaults) {
                          var O = "default is ignored for: " + W;
                          if (e[x(2245)].strictDefaults === "log") e[x(1475)][x(455)](O);
                          else throw new Error(O);
                        }
                      } else r += x(943) + W + " === undefined ", e[x(2245)][x(521)] == x(912) && (r += x(946) + W + x(566) + W + x(773)), r += " ) " + W + x(1052), e[x(2245)][x(521)] == x(2344) ? r += " " + e[x(1402)](X[x(664)]) + " " : r += " " + JSON[x(2325)](X.default) + " ", r += "; ";
                    }
                }
              }
            }
            var s0 = U[x(1157)];
            if (s0) {
              for (var _, j0 = -1, q0 = s0[x(1586)] - 1; j0 < q0; )
                if (_ = s0[j0 += 1], K0(_)) {
                  var $0 = _[x(1256)](e, _[x(850)], U[x(1594)]);
                  $0 && (r += " " + $0 + " ", S && (R += "}"));
                }
            }
            if (S && (r += " " + R + " ", R = ""), U[x(1594)] && (r += " } ", M && M === U[x(1594)] && !I)) {
              r += " else { ";
              var h = e[x(1992)] + ".type", m = e[x(1414)] + x(1046), w = w || [];
              w[x(1251)](r), r = "", e[x(432)] !== !1 ? (r += x(1260) + (D || x(1594)) + x(1990) + e[x(1617)] + x(1524) + e.util[x(591)](m) + " , params: { type: '", N ? r += "" + M[x(2373)](",") : r += "" + M, r += "' } ", e.opts.messages !== !1 && (r += " , message: 'should be ", N ? r += "" + M[x(2373)](",") : r += "" + M, r += "' "), e.opts[x(2262)] && (r += " , schema: validate.schema" + h + " , parentSchema: validate.schema" + e[x(1992)] + " , data: " + y + " "), r += x(316)) : r += " {} ";
              var E = r;
              r = w[x(1088)](), !e[x(1956)] && S ? e[x(646)] ? r += x(2156) + E + x(1694) : r += x(1614) + E + x(1012) : r += " var err = " + E + x(1005), r += x(316);
            }
            S && (r += " if (errors === ", q ? r += "0" : r += x(2268) + d, r += ") { ", j += "}");
          }
      }
    }
    S && (r += " " + j + " "), q ? (a ? (r += " if (errors === 0) return data;           ", r += " else throw new ValidationError(vErrors); ") : (r += x(2247), r += " return errors === 0;       "), r += x(998)) : r += x(1224) + P + x(2202) + d + ";";
    function b0(Q0) {
      const O0 = x;
      for (var z0 = Q0.rules, Y0 = 0; Y0 < z0[O0(1586)]; Y0++) if (K0(z0[Y0])) return !0;
    }
    function K0(Q0) {
      const O0 = x;
      return e.schema[Q0[O0(850)]] !== void 0 || Q0[O0(1519)] && ax(Q0);
    }
    function ax(Q0) {
      const O0 = x;
      for (var z0 = Q0[O0(1519)], Y0 = 0; Y0 < z0[O0(1586)]; Y0++) if (e[O0(970)][z0[Y0]] !== void 0) return !0;
    }
    return r;
  }), Qe;
}
var Ge, Hr;
function Eo() {
  const i = n;
  if (Hr) return Ge;
  Hr = 1;
  var e = sr(), t = Zx(), s = nr(), x = oa(), r = ca(), a = t[i(2490)], o = rr(), c = s.Validation;
  Ge = u;
  function u(E, q, O, P) {
    const S = i;
    var R = this, j = this[S(1252)], D = [void 0], M = {}, N = [], I = {}, U = [], H = {}, V = [];
    q = q || { schema: E, refVal: D, refs: M };
    var J = f.call(this, E, q, P), t0 = this[S(685)][J[S(1184)]];
    if (J[S(1037)]) return t0[S(676)] = y0;
    var e0 = this._formats, u0 = this[S(1944)];
    try {
      var l0 = F0(E, q, O, P);
      t0[S(1017)] = l0;
      var f0 = t0[S(676)];
      return f0 && (f0[S(970)] = l0[S(970)], f0.errors = null, f0[S(887)] = l0.refs, f0[S(2105)] = l0[S(2105)], f0[S(707)] = l0.root, f0[S(1363)] = l0[S(1363)], j[S(867)] && (f0[S(1826)] = l0[S(1826)])), l0;
    } finally {
      d.call(this, E, q, P);
    }
    function y0() {
      const W = S;
      var G = t0[W(1017)], i0 = G.apply(this, arguments);
      return y0[W(709)] = G[W(709)], i0;
    }
    function F0(W, G, i0, s0) {
      const _ = S;
      var j0 = !G || G && G[_(970)] == W;
      if (G[_(970)] != q[_(970)]) return u[_(896)](R, W, G, i0, s0);
      var q0 = W[_(1363)] === !0, $0 = r({ isTop: !0, schema: W, isRoot: j0, baseId: s0, root: G, schemaPath: "", errSchemaPath: "#", errorPath: '""', MissingRefError: s.MissingRef, RULES: u0, validate: r, util: t, resolve: e, resolveRef: D0, usePattern: L, useDefault: Q, useCustomRule: X, opts: j, formats: e0, logger: R.logger, self: R });
      $0 = w(D, m) + w(N, g) + w(U, h) + w(V, y) + $0, j.processCode && ($0 = j[_(2433)]($0, W));
      var b0;
      try {
        var K0 = new Function("self", _(1944), _(1356), _(707), _(2105), _(1110), _(2071), "equal", "ucs2length", _(1615), $0);
        b0 = K0(R, u0, e0, q, D, U, V, o, a, c), D[0] = b0;
      } catch (ax) {
        throw R[_(1475)].error(_(1693), $0), ax;
      }
      return b0.schema = W, b0[_(709)] = null, b0[_(887)] = M, b0[_(2105)] = D, b0[_(707)] = j0 ? b0 : G, q0 && (b0.$async = !0), j[_(867)] === !0 && (b0[_(1826)] = { code: $0, patterns: N, defaults: U }), b0;
    }
    function D0(W, G, i0) {
      const s0 = S;
      G = e.url(W, G);
      var _ = M[G], j0, q0;
      if (_ !== void 0) return j0 = D[_], q0 = s0(555) + _ + "]", A(j0, q0);
      if (!i0 && q[s0(887)]) {
        var $0 = q[s0(887)][G];
        if ($0 !== void 0) return j0 = q[s0(2105)][$0], q0 = k0(G, j0), A(j0, q0);
      }
      q0 = k0(G);
      var b0 = e[s0(896)](R, F0, q, G);
      if (b0 === void 0) {
        var K0 = O && O[G];
        K0 && (b0 = e[s0(282)](K0, j[s0(2046)]) ? K0 : u[s0(896)](R, K0, q, O, W));
      }
      if (b0 === void 0) J0(G);
      else return T(G, b0), A(b0, q0);
    }
    function k0(W, G) {
      const i0 = S;
      var s0 = D[i0(1586)];
      return D[s0] = G, M[W] = s0, i0(2105) + s0;
    }
    function J0(W) {
      delete M[W];
    }
    function T(W, G) {
      var i0 = M[W];
      D[i0] = G;
    }
    function A(W, G) {
      return typeof W == "object" || typeof W == S(320) ? { code: G, schema: W, inline: !0 } : { code: G, $async: W && !!W.$async };
    }
    function L(W) {
      const G = S;
      var i0 = I[W];
      return i0 === void 0 && (i0 = I[W] = N[G(1586)], N[i0] = W), G(399) + i0;
    }
    function Q(W) {
      const G = S;
      switch (typeof W) {
        case G(320):
        case G(369):
          return "" + W;
        case G(342):
          return t[G(591)](W);
        case G(1395):
          if (W === null) return G(1817);
          var i0 = x(W), s0 = H[i0];
          return s0 === void 0 && (s0 = H[i0] = U[G(1586)], U[s0] = W), G(664) + s0;
      }
    }
    function X(W, G, i0, s0) {
      const _ = S;
      if (R._opts.validateSchema !== !1) {
        var j0 = W[_(2326)].dependencies;
        if (j0 && !j0.every(function(Y0) {
          const Rx = _;
          return Object[Rx(2173)][Rx(724)][Rx(896)](i0, Y0);
        })) throw new Error(_(1352) + j0[_(2373)](","));
        var q0 = W.definition[_(2475)];
        if (q0) {
          var $0 = q0(G);
          if (!$0) {
            var b0 = "keyword schema is invalid: " + R.errorsText(q0[_(709)]);
            if (R[_(1252)][_(2475)] == _(1919)) R[_(1475)][_(549)](b0);
            else throw new Error(b0);
          }
        }
      }
      var K0 = W[_(2326)][_(1623)], ax = W[_(2326)][_(1978)], Q0 = W[_(2326)].macro, O0;
      if (K0) O0 = K0[_(896)](R, G, i0, s0);
      else if (Q0)
        O0 = Q0[_(896)](R, G, i0, s0), j[_(2475)] !== !1 && R[_(2475)](O0, !0);
      else if (ax) O0 = ax[_(896)](R, s0, W[_(850)], G, i0);
      else if (O0 = W[_(2326)][_(1017)], !O0) return;
      if (O0 === void 0) throw new Error(_(1825) + W[_(850)] + _(942));
      var z0 = V[_(1586)];
      return V[z0] = O0, { code: "customRule" + z0, validate: O0 };
    }
  }
  function f(E, q, O) {
    const P = i;
    var S = l[P(896)](this, E, q, O);
    return S >= 0 ? { index: S, compiling: !0 } : (S = this._compilations[P(1586)], this[P(685)][S] = { schema: E, root: q, baseId: O }, { index: S, compiling: !1 });
  }
  function d(E, q, O) {
    const P = i;
    var S = l[P(896)](this, E, q, O);
    S >= 0 && this[P(685)].splice(S, 1);
  }
  function l(E, q, O) {
    const P = i;
    for (var S = 0; S < this[P(685)][P(1586)]; S++) {
      var R = this._compilations[S];
      if (R[P(970)] == E && R[P(707)] == q && R[P(1479)] == O) return S;
    }
    return -1;
  }
  function g(E, q) {
    const O = i;
    return "var pattern" + E + O(1820) + t[O(591)](q[E]) + ");";
  }
  function h(E) {
    return "var default" + E + " = defaults[" + E + "];";
  }
  function m(E, q) {
    const O = i;
    return q[E] === void 0 ? "" : O(2533) + E + O(715) + E + "];";
  }
  function y(E) {
    return "var customRule" + E + " = customRules[" + E + "];";
  }
  function w(E, q) {
    const O = i;
    if (!E[O(1586)]) return "";
    for (var P = "", S = 0; S < E[O(1586)]; S++) P += q(S, E);
    return P;
  }
  return Ge;
}
var Xe = { exports: {} }, Ur;
function ko() {
  const i = n;
  if (Ur) return Xe[i(1406)];
  Ur = 1;
  var e = Xe[i(1406)] = function() {
    const s = i;
    this[s(1601)] = {};
  };
  return e.prototype.put = function(s, x) {
    this._cache[s] = x;
  }, e[i(2173)][i(2086)] = function(s) {
    return this._cache[s];
  }, e.prototype[i(296)] = function(s) {
    delete this._cache[s];
  }, e[i(2173)][i(463)] = function() {
    this._cache = {};
  }, Xe[i(1406)];
}
var Ye, Vr;
function Po() {
  const i = n;
  if (Vr) return Ye;
  Vr = 1;
  var e = Zx(), t = /^(\d\d\d\d)-(\d\d)-(\d\d)$/, s = [0, 31, 28, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31], x = /^(\d\d):(\d\d):(\d\d)(\.\d+)?(z|[+-]\d\d(?::?\d\d)?)?$/i, r = /^(?=.{1,253}\.?$)[a-z0-9](?:[a-z0-9-]{0,61}[a-z0-9])?(?:\.[a-z0-9](?:[-0-9a-z]{0,61}[0-9a-z])?)*\.?$/i, a = /^(?:[a-z][a-z0-9+\-.]*:)(?:\/?\/(?:(?:[a-z0-9\-._~!$&'()*+,;=:]|%[0-9a-f]{2})*@)?(?:\[(?:(?:(?:(?:[0-9a-f]{1,4}:){6}|::(?:[0-9a-f]{1,4}:){5}|(?:[0-9a-f]{1,4})?::(?:[0-9a-f]{1,4}:){4}|(?:(?:[0-9a-f]{1,4}:){0,1}[0-9a-f]{1,4})?::(?:[0-9a-f]{1,4}:){3}|(?:(?:[0-9a-f]{1,4}:){0,2}[0-9a-f]{1,4})?::(?:[0-9a-f]{1,4}:){2}|(?:(?:[0-9a-f]{1,4}:){0,3}[0-9a-f]{1,4})?::[0-9a-f]{1,4}:|(?:(?:[0-9a-f]{1,4}:){0,4}[0-9a-f]{1,4})?::)(?:[0-9a-f]{1,4}:[0-9a-f]{1,4}|(?:(?:25[0-5]|2[0-4]\d|[01]?\d\d?)\.){3}(?:25[0-5]|2[0-4]\d|[01]?\d\d?))|(?:(?:[0-9a-f]{1,4}:){0,5}[0-9a-f]{1,4})?::[0-9a-f]{1,4}|(?:(?:[0-9a-f]{1,4}:){0,6}[0-9a-f]{1,4})?::)|[Vv][0-9a-f]+\.[a-z0-9\-._~!$&'()*+,;=:]+)\]|(?:(?:25[0-5]|2[0-4]\d|[01]?\d\d?)\.){3}(?:25[0-5]|2[0-4]\d|[01]?\d\d?)|(?:[a-z0-9\-._~!$&'()*+,;=]|%[0-9a-f]{2})*)(?::\d*)?(?:\/(?:[a-z0-9\-._~!$&'()*+,;=:@]|%[0-9a-f]{2})*)*|\/(?:(?:[a-z0-9\-._~!$&'()*+,;=:@]|%[0-9a-f]{2})+(?:\/(?:[a-z0-9\-._~!$&'()*+,;=:@]|%[0-9a-f]{2})*)*)?|(?:[a-z0-9\-._~!$&'()*+,;=:@]|%[0-9a-f]{2})+(?:\/(?:[a-z0-9\-._~!$&'()*+,;=:@]|%[0-9a-f]{2})*)*)(?:\?(?:[a-z0-9\-._~!$&'()*+,;=:@/?]|%[0-9a-f]{2})*)?(?:#(?:[a-z0-9\-._~!$&'()*+,;=:@/?]|%[0-9a-f]{2})*)?$/i, o = /^(?:[a-z][a-z0-9+\-.]*:)?(?:\/?\/(?:(?:[a-z0-9\-._~!$&'()*+,;=:]|%[0-9a-f]{2})*@)?(?:\[(?:(?:(?:(?:[0-9a-f]{1,4}:){6}|::(?:[0-9a-f]{1,4}:){5}|(?:[0-9a-f]{1,4})?::(?:[0-9a-f]{1,4}:){4}|(?:(?:[0-9a-f]{1,4}:){0,1}[0-9a-f]{1,4})?::(?:[0-9a-f]{1,4}:){3}|(?:(?:[0-9a-f]{1,4}:){0,2}[0-9a-f]{1,4})?::(?:[0-9a-f]{1,4}:){2}|(?:(?:[0-9a-f]{1,4}:){0,3}[0-9a-f]{1,4})?::[0-9a-f]{1,4}:|(?:(?:[0-9a-f]{1,4}:){0,4}[0-9a-f]{1,4})?::)(?:[0-9a-f]{1,4}:[0-9a-f]{1,4}|(?:(?:25[0-5]|2[0-4]\d|[01]?\d\d?)\.){3}(?:25[0-5]|2[0-4]\d|[01]?\d\d?))|(?:(?:[0-9a-f]{1,4}:){0,5}[0-9a-f]{1,4})?::[0-9a-f]{1,4}|(?:(?:[0-9a-f]{1,4}:){0,6}[0-9a-f]{1,4})?::)|[Vv][0-9a-f]+\.[a-z0-9\-._~!$&'()*+,;=:]+)\]|(?:(?:25[0-5]|2[0-4]\d|[01]?\d\d?)\.){3}(?:25[0-5]|2[0-4]\d|[01]?\d\d?)|(?:[a-z0-9\-._~!$&'"()*+,;=]|%[0-9a-f]{2})*)(?::\d*)?(?:\/(?:[a-z0-9\-._~!$&'"()*+,;=:@]|%[0-9a-f]{2})*)*|\/(?:(?:[a-z0-9\-._~!$&'"()*+,;=:@]|%[0-9a-f]{2})+(?:\/(?:[a-z0-9\-._~!$&'"()*+,;=:@]|%[0-9a-f]{2})*)*)?|(?:[a-z0-9\-._~!$&'"()*+,;=:@]|%[0-9a-f]{2})+(?:\/(?:[a-z0-9\-._~!$&'"()*+,;=:@]|%[0-9a-f]{2})*)*)?(?:\?(?:[a-z0-9\-._~!$&'"()*+,;=:@/?]|%[0-9a-f]{2})*)?(?:#(?:[a-z0-9\-._~!$&'"()*+,;=:@/?]|%[0-9a-f]{2})*)?$/i, c = /^(?:(?:[^\x00-\x20"'<>%\\^`{|}]|%[0-9a-f]{2})|\{[+#./;?&=,!@|]?(?:[a-z0-9_]|%[0-9a-f]{2})+(?::[1-9][0-9]{0,3}|\*)?(?:,(?:[a-z0-9_]|%[0-9a-f]{2})+(?::[1-9][0-9]{0,3}|\*)?)*\})*$/i, u = /^(?:(?:http[s\u017F]?|ftp):\/\/)(?:(?:[\0-\x08\x0E-\x1F!-\x9F\xA1-\u167F\u1681-\u1FFF\u200B-\u2027\u202A-\u202E\u2030-\u205E\u2060-\u2FFF\u3001-\uD7FF\uE000-\uFEFE\uFF00-\uFFFF]|[\uD800-\uDBFF][\uDC00-\uDFFF]|[\uD800-\uDBFF](?![\uDC00-\uDFFF])|(?:[^\uD800-\uDBFF]|^)[\uDC00-\uDFFF])+(?::(?:[\0-\x08\x0E-\x1F!-\x9F\xA1-\u167F\u1681-\u1FFF\u200B-\u2027\u202A-\u202E\u2030-\u205E\u2060-\u2FFF\u3001-\uD7FF\uE000-\uFEFE\uFF00-\uFFFF]|[\uD800-\uDBFF][\uDC00-\uDFFF]|[\uD800-\uDBFF](?![\uDC00-\uDFFF])|(?:[^\uD800-\uDBFF]|^)[\uDC00-\uDFFF])*)?@)?(?:(?!10(?:\.[0-9]{1,3}){3})(?!127(?:\.[0-9]{1,3}){3})(?!169\.254(?:\.[0-9]{1,3}){2})(?!192\.168(?:\.[0-9]{1,3}){2})(?!172\.(?:1[6-9]|2[0-9]|3[01])(?:\.[0-9]{1,3}){2})(?:[1-9][0-9]?|1[0-9][0-9]|2[01][0-9]|22[0-3])(?:\.(?:1?[0-9]{1,2}|2[0-4][0-9]|25[0-5])){2}(?:\.(?:[1-9][0-9]?|1[0-9][0-9]|2[0-4][0-9]|25[0-4]))|(?:(?:(?:[0-9a-z\xA1-\uD7FF\uE000-\uFFFF]|[\uD800-\uDBFF](?![\uDC00-\uDFFF])|(?:[^\uD800-\uDBFF]|^)[\uDC00-\uDFFF])+-)*(?:[0-9a-z\xA1-\uD7FF\uE000-\uFFFF]|[\uD800-\uDBFF](?![\uDC00-\uDFFF])|(?:[^\uD800-\uDBFF]|^)[\uDC00-\uDFFF])+)(?:\.(?:(?:[0-9a-z\xA1-\uD7FF\uE000-\uFFFF]|[\uD800-\uDBFF](?![\uDC00-\uDFFF])|(?:[^\uD800-\uDBFF]|^)[\uDC00-\uDFFF])+-)*(?:[0-9a-z\xA1-\uD7FF\uE000-\uFFFF]|[\uD800-\uDBFF](?![\uDC00-\uDFFF])|(?:[^\uD800-\uDBFF]|^)[\uDC00-\uDFFF])+)*(?:\.(?:(?:[a-z\xA1-\uD7FF\uE000-\uFFFF]|[\uD800-\uDBFF](?![\uDC00-\uDFFF])|(?:[^\uD800-\uDBFF]|^)[\uDC00-\uDFFF]){2,})))(?::[0-9]{2,5})?(?:\/(?:[\0-\x08\x0E-\x1F!-\x9F\xA1-\u167F\u1681-\u1FFF\u200B-\u2027\u202A-\u202E\u2030-\u205E\u2060-\u2FFF\u3001-\uD7FF\uE000-\uFEFE\uFF00-\uFFFF]|[\uD800-\uDBFF][\uDC00-\uDFFF]|[\uD800-\uDBFF](?![\uDC00-\uDFFF])|(?:[^\uD800-\uDBFF]|^)[\uDC00-\uDFFF])*)?$/i, f = /^(?:urn:uuid:)?[0-9a-f]{8}-(?:[0-9a-f]{4}-){3}[0-9a-f]{12}$/i, d = /^(?:\/(?:[^~/]|~0|~1)*)*$/, l = /^#(?:\/(?:[a-z0-9_\-.!$&'()*+,;:=@]|%[0-9a-f]{2}|~0|~1)*)*$/i, g = /^(?:0|[1-9][0-9]*)(?:#|(?:\/(?:[^~/]|~0|~1)*)*)$/;
  Ye = h;
  function h(j) {
    const D = B;
    return j = j == D(1299) ? D(1299) : D(1385), e[D(526)](h[j]);
  }
  h[i(1385)] = { date: /^\d\d\d\d-[0-1]\d-[0-3]\d$/, time: /^(?:[0-2]\d:[0-5]\d:[0-5]\d|23:59:60)(?:\.\d+)?(?:z|[+-]\d\d(?::?\d\d)?)?$/i, "date-time": /^\d\d\d\d-[0-1]\d-[0-3]\d[t\s](?:[0-2]\d:[0-5]\d:[0-5]\d|23:59:60)(?:\.\d+)?(?:z|[+-]\d\d(?::?\d\d)?)$/i, uri: /^(?:[a-z][a-z0-9+\-.]*:)(?:\/?\/)?[^\s]*$/i, "uri-reference": /^(?:(?:[a-z][a-z0-9+\-.]*:)?\/?\/)?(?:[^\\\s#][^\s#]*)?(?:#[^\\\s]*)?$/i, "uri-template": c, url: u, email: /^[a-z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-z0-9](?:[a-z0-9-]{0,61}[a-z0-9])?(?:\.[a-z0-9](?:[a-z0-9-]{0,61}[a-z0-9])?)*$/i, hostname: r, ipv4: /^(?:(?:25[0-5]|2[0-4]\d|[01]?\d\d?)\.){3}(?:25[0-5]|2[0-4]\d|[01]?\d\d?)$/, ipv6: /^\s*(?:(?:(?:[0-9a-f]{1,4}:){7}(?:[0-9a-f]{1,4}|:))|(?:(?:[0-9a-f]{1,4}:){6}(?::[0-9a-f]{1,4}|(?:(?:25[0-5]|2[0-4]\d|1\d\d|[1-9]?\d)(?:\.(?:25[0-5]|2[0-4]\d|1\d\d|[1-9]?\d)){3})|:))|(?:(?:[0-9a-f]{1,4}:){5}(?:(?:(?::[0-9a-f]{1,4}){1,2})|:(?:(?:25[0-5]|2[0-4]\d|1\d\d|[1-9]?\d)(?:\.(?:25[0-5]|2[0-4]\d|1\d\d|[1-9]?\d)){3})|:))|(?:(?:[0-9a-f]{1,4}:){4}(?:(?:(?::[0-9a-f]{1,4}){1,3})|(?:(?::[0-9a-f]{1,4})?:(?:(?:25[0-5]|2[0-4]\d|1\d\d|[1-9]?\d)(?:\.(?:25[0-5]|2[0-4]\d|1\d\d|[1-9]?\d)){3}))|:))|(?:(?:[0-9a-f]{1,4}:){3}(?:(?:(?::[0-9a-f]{1,4}){1,4})|(?:(?::[0-9a-f]{1,4}){0,2}:(?:(?:25[0-5]|2[0-4]\d|1\d\d|[1-9]?\d)(?:\.(?:25[0-5]|2[0-4]\d|1\d\d|[1-9]?\d)){3}))|:))|(?:(?:[0-9a-f]{1,4}:){2}(?:(?:(?::[0-9a-f]{1,4}){1,5})|(?:(?::[0-9a-f]{1,4}){0,3}:(?:(?:25[0-5]|2[0-4]\d|1\d\d|[1-9]?\d)(?:\.(?:25[0-5]|2[0-4]\d|1\d\d|[1-9]?\d)){3}))|:))|(?:(?:[0-9a-f]{1,4}:){1}(?:(?:(?::[0-9a-f]{1,4}){1,6})|(?:(?::[0-9a-f]{1,4}){0,4}:(?:(?:25[0-5]|2[0-4]\d|1\d\d|[1-9]?\d)(?:\.(?:25[0-5]|2[0-4]\d|1\d\d|[1-9]?\d)){3}))|:))|(?::(?:(?:(?::[0-9a-f]{1,4}){1,7})|(?:(?::[0-9a-f]{1,4}){0,5}:(?:(?:25[0-5]|2[0-4]\d|1\d\d|[1-9]?\d)(?:\.(?:25[0-5]|2[0-4]\d|1\d\d|[1-9]?\d)){3}))|:)))(?:%.+)?\s*$/i, regex: R, uuid: f, "json-pointer": d, "json-pointer-uri-fragment": l, "relative-json-pointer": g }, h.full = { date: y, time: w, "date-time": q, uri: P, "uri-reference": o, "uri-template": c, url: u, email: /^[a-z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[a-z0-9!#$%&'*+/=?^_`{|}~-]+)*@(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?$/i, hostname: r, ipv4: /^(?:(?:25[0-5]|2[0-4]\d|[01]?\d\d?)\.){3}(?:25[0-5]|2[0-4]\d|[01]?\d\d?)$/, ipv6: /^\s*(?:(?:(?:[0-9a-f]{1,4}:){7}(?:[0-9a-f]{1,4}|:))|(?:(?:[0-9a-f]{1,4}:){6}(?::[0-9a-f]{1,4}|(?:(?:25[0-5]|2[0-4]\d|1\d\d|[1-9]?\d)(?:\.(?:25[0-5]|2[0-4]\d|1\d\d|[1-9]?\d)){3})|:))|(?:(?:[0-9a-f]{1,4}:){5}(?:(?:(?::[0-9a-f]{1,4}){1,2})|:(?:(?:25[0-5]|2[0-4]\d|1\d\d|[1-9]?\d)(?:\.(?:25[0-5]|2[0-4]\d|1\d\d|[1-9]?\d)){3})|:))|(?:(?:[0-9a-f]{1,4}:){4}(?:(?:(?::[0-9a-f]{1,4}){1,3})|(?:(?::[0-9a-f]{1,4})?:(?:(?:25[0-5]|2[0-4]\d|1\d\d|[1-9]?\d)(?:\.(?:25[0-5]|2[0-4]\d|1\d\d|[1-9]?\d)){3}))|:))|(?:(?:[0-9a-f]{1,4}:){3}(?:(?:(?::[0-9a-f]{1,4}){1,4})|(?:(?::[0-9a-f]{1,4}){0,2}:(?:(?:25[0-5]|2[0-4]\d|1\d\d|[1-9]?\d)(?:\.(?:25[0-5]|2[0-4]\d|1\d\d|[1-9]?\d)){3}))|:))|(?:(?:[0-9a-f]{1,4}:){2}(?:(?:(?::[0-9a-f]{1,4}){1,5})|(?:(?::[0-9a-f]{1,4}){0,3}:(?:(?:25[0-5]|2[0-4]\d|1\d\d|[1-9]?\d)(?:\.(?:25[0-5]|2[0-4]\d|1\d\d|[1-9]?\d)){3}))|:))|(?:(?:[0-9a-f]{1,4}:){1}(?:(?:(?::[0-9a-f]{1,4}){1,6})|(?:(?::[0-9a-f]{1,4}){0,4}:(?:(?:25[0-5]|2[0-4]\d|1\d\d|[1-9]?\d)(?:\.(?:25[0-5]|2[0-4]\d|1\d\d|[1-9]?\d)){3}))|:))|(?::(?:(?:(?::[0-9a-f]{1,4}){1,7})|(?:(?::[0-9a-f]{1,4}){0,5}:(?:(?:25[0-5]|2[0-4]\d|1\d\d|[1-9]?\d)(?:\.(?:25[0-5]|2[0-4]\d|1\d\d|[1-9]?\d)){3}))|:)))(?:%.+)?\s*$/i, regex: R, uuid: f, "json-pointer": d, "json-pointer-uri-fragment": l, "relative-json-pointer": g };
  function m(j) {
    return j % 4 === 0 && (j % 100 !== 0 || j % 400 === 0);
  }
  function y(j) {
    var M = j[i(415)](t);
    if (!M) return !1;
    var N = +M[1], I = +M[2], U = +M[3];
    return I >= 1 && I <= 12 && U >= 1 && U <= (I == 2 && m(N) ? 29 : s[I]);
  }
  function w(j, D) {
    var N = j[i(415)](x);
    if (!N) return !1;
    var I = N[1], U = N[2], H = N[3], V = N[5];
    return (I <= 23 && U <= 59 && H <= 59 || I == 23 && U == 59 && H == 60) && (!D || V);
  }
  var E = /t|\s/i;
  function q(j) {
    var D = j.split(E);
    return D.length == 2 && y(D[0]) && w(D[1], !0);
  }
  var O = /\/|:/;
  function P(j) {
    const D = i;
    return O[D(2500)](j) && a[D(2500)](j);
  }
  var S = /[^\\]\\Z/;
  function R(j) {
    if (S[i(2500)](j)) return !1;
    try {
      return new RegExp(j), !0;
    } catch {
      return !1;
    }
  }
  return Ye;
}
var _e, Wr;
function Co() {
  return Wr || (Wr = 1, _e = function(e, t, s) {
    const x = B;
    var r = " ", a = e[x(1065)], o = e[x(934)], c = e[x(970)][t], u = e[x(1414)] + "/" + t, f = !e[x(2245)].allErrors, d = x(1024) + (o || ""), l = x(1100) + a, g, h;
    if (c == "#" || c == "#/") e.isRoot ? (g = e[x(646)], h = x(1017)) : (g = e[x(707)][x(970)][x(1363)] === !0, h = x(1971));
    else {
      var m = e[x(1205)](e[x(1479)], c, e[x(1696)]);
      if (m === void 0) {
        var y = e[x(696)][x(2028)](e[x(1479)], c);
        if (e[x(2245)][x(2291)] == x(1896)) {
          e[x(1475)].error(y);
          var w = w || [];
          w[x(1251)](r), r = "", e[x(432)] !== !1 ? (r += x(1260) + x(1607) + x(1990) + e[x(1617)] + x(1524) + e[x(497)][x(591)](u) + " , params: { ref: '" + e[x(497)][x(1265)](c) + x(1619), e.opts.messages !== !1 && (r += " , message: 'can\\'t resolve reference " + e[x(497)][x(1265)](c) + "' "), e[x(2245)][x(2262)] && (r += x(1788) + e[x(497)][x(591)](c) + x(2449) + e[x(1992)] + x(2263) + d + " "), r += " } ") : r += x(1603);
          var E = r;
          r = w[x(1088)](), !e[x(1956)] && f ? e.async ? r += x(2156) + E + x(1694) : r += x(1614) + E + x(1012) : r += " var err = " + E + ";  if (vErrors === null) vErrors = [err]; else vErrors.push(err); errors++; ", f && (r += x(1445));
        } else if (e[x(2245)][x(2291)] == x(881)) e.logger.warn(y), f && (r += x(2124));
        else throw new e[x(696)](e[x(1479)], c, y);
      } else if (m[x(1978)]) {
        var q = e[x(497)][x(526)](e);
        q.level++;
        var O = x(1100) + q[x(1065)];
        q[x(970)] = m.schema, q.schemaPath = "", q.errSchemaPath = c;
        var P = e[x(1017)](q)[x(969)](/validate\.schema/g, m[x(1256)]);
        r += " " + P + " ", f && (r += x(943) + O + x(1577));
      } else g = m[x(1363)] === !0 || e.async && m[x(1363)] !== !1, h = m.code;
    }
    if (h) {
      var w = w || [];
      w.push(r), r = "", e[x(2245)][x(1016)] ? r += " " + h + x(622) : r += " " + h + "( ", r += " " + d + x(839), e[x(1617)] != '""' && (r += x(2339) + e[x(1617)]);
      var S = o ? "data" + (o - 1 || "") : x(2075), R = o ? e.dataPathArr[o] : "parentDataProperty";
      r += " , " + S + x(1724) + R + x(1165);
      var j = r;
      if (r = w[x(1088)](), g) {
        if (!e.async) throw new Error(x(1230));
        f && (r += " var " + l + "; "), r += x(1527) + j + "; ", f && (r += " " + l + x(338)), r += " } catch (e) { if (!(e instanceof ValidationError)) throw e; if (vErrors === null) vErrors = e.errors; else vErrors = vErrors.concat(e.errors); errors = vErrors.length; ", f && (r += " " + l + " = false; "), r += x(316), f && (r += x(943) + l + x(1577));
      } else r += " if (!" + j + x(298) + h + ".errors; else vErrors = vErrors.concat(" + h + x(1760), f && (r += x(738));
    }
    return r;
  }), _e;
}
var xt, Br;
function Io() {
  return Br || (Br = 1, xt = function(e, t, s) {
    const x = B;
    var r = " ", a = e[x(970)][t], o = e[x(1992)] + e.util[x(332)](t), c = e.errSchemaPath + "/" + t, u = !e[x(2245)].allErrors, f = e[x(497)][x(526)](e), d = "";
    f.level++;
    var l = x(1100) + f.level, g = f[x(1479)], h = !0, m = a;
    if (m)
      for (var y, w = -1, E = m[x(1586)] - 1; w < E; )
        y = m[w += 1], (e.opts.strictKeywords ? typeof y == "object" && Object[x(1001)](y).length > 0 || y === !1 : e[x(497)][x(1485)](y, e.RULES[x(1576)])) && (h = !1, f[x(970)] = y, f.schemaPath = o + "[" + w + "]", f.errSchemaPath = c + "/" + w, r += "  " + e[x(1017)](f) + " ", f[x(1479)] = g, u && (r += " if (" + l + ") { ", d += "}"));
    return u && (h ? r += x(2124) : r += " " + d[x(2284)](0, -1) + " "), r;
  }), xt;
}
var et, Zr;
function Ro() {
  return Zr || (Zr = 1, et = function(e, t, s) {
    const x = B;
    var r = " ", a = e[x(1065)], o = e[x(934)], c = e[x(970)][t], u = e.schemaPath + e.util[x(332)](t), f = e[x(1414)] + "/" + t, d = !e.opts.allErrors, l = "data" + (o || ""), g = x(1100) + a, h = "errs__" + a, m = e[x(497)][x(526)](e), y = "";
    m[x(1065)]++;
    var w = x(1100) + m.level, E = c[x(1972)](function(D) {
      const M = x;
      return e.opts[M(1444)] ? typeof D == "object" && Object[M(1001)](D)[M(1586)] > 0 || D === !1 : e[M(497)][M(1485)](D, e[M(1944)][M(1576)]);
    });
    if (E) {
      var q = m[x(1479)];
      r += x(1224) + h + " = errors; var " + g + " = false;  ";
      var O = e[x(1956)];
      e[x(1956)] = m[x(1956)] = !0;
      var P = c;
      if (P)
        for (var S, R = -1, j = P[x(1586)] - 1; R < j; )
          S = P[R += 1], m[x(970)] = S, m[x(1992)] = u + "[" + R + "]", m.errSchemaPath = f + "/" + R, r += "  " + e[x(1017)](m) + " ", m[x(1479)] = q, r += " " + g + " = " + g + x(946) + w + "; if (!" + g + ") { ", y += "}";
      e[x(1956)] = m[x(1956)] = O, r += " " + y + x(2272) + g + x(456), e.createErrors !== !1 ? (r += x(1260) + x(437) + x(1990) + e.errorPath + " , schemaPath: " + e.util.toQuotedString(f) + " , params: {} ", e.opts[x(2275)] !== !1 && (r += x(2336)), e[x(2245)][x(2262)] && (r += " , schema: validate.schema" + u + x(2449) + e[x(1992)] + x(2263) + l + " "), r += x(316)) : r += x(1603), r += x(1005), !e[x(1956)] && d && (e.async ? r += x(1558) : r += x(1706)), r += " } else {  errors = " + h + x(1477) + h + x(270) + h + x(2201), e[x(2245)].allErrors && (r += x(316));
    } else d && (r += x(2124));
    return r;
  }), et;
}
var tt, Kr;
function Fo() {
  return Kr || (Kr = 1, tt = function(e, t, s) {
    const x = B;
    var r = " ", a = e[x(970)][t], o = e[x(1414)] + "/" + t;
    e.opts[x(464)];
    var c = e[x(497)][x(591)](a);
    return e[x(2245)].$comment === !0 ? r += x(1688) + c + ");" : typeof e.opts.$comment == x(730) && (r += x(1280) + c + ", " + e.util[x(591)](o) + x(1729)), r;
  }), tt;
}
var rt, Jr;
function No() {
  return Jr || (Jr = 1, rt = function(e, t, s) {
    const x = B;
    var r = " ", a = e[x(1065)], o = e[x(934)], c = e.schema[t], u = e[x(1992)] + e.util[x(332)](t), f = e[x(1414)] + "/" + t, d = !e[x(2245)].allErrors, l = x(1024) + (o || ""), g = "valid" + a, h = e[x(2245)].$data && c && c[x(1343)];
    h && (r += x(1538) + a + x(1052) + e.util.getData(c[x(1343)], o, e[x(2530)]) + "; "), !h && (r += " var schema" + a + x(2129) + u + ";"), r += "var " + g + " = equal(" + l + x(1794) + a + x(858) + g + x(1516);
    var m = m || [];
    m[x(1251)](r), r = "", e[x(432)] !== !1 ? (r += " { keyword: '" + x(1423) + x(1990) + e.errorPath + x(1524) + e[x(497)][x(591)](f) + " , params: { allowedValue: schema" + a + " } ", e[x(2245)][x(2275)] !== !1 && (r += " , message: 'should be equal to constant' "), e[x(2245)].verbose && (r += x(923) + u + x(2449) + e[x(1992)] + " , data: " + l + " "), r += x(316)) : r += " {} ";
    var y = r;
    return r = m.pop(), !e[x(1956)] && d ? e[x(646)] ? r += x(2156) + y + x(1694) : r += x(1614) + y + x(1012) : r += x(2047) + y + x(1005), r += " }", d && (r += x(738)), r;
  }), rt;
}
var st, Qr;
function qo() {
  return Qr || (Qr = 1, st = function(e, t, s) {
    const x = B;
    var r = " ", a = e[x(1065)], o = e[x(934)], c = e[x(970)][t], u = e[x(1992)] + e.util[x(332)](t), f = e[x(1414)] + "/" + t, d = !e.opts[x(464)], l = x(1024) + (o || ""), g = x(1100) + a, h = x(561) + a, m = e[x(497)].copy(e), y = "";
    m.level++;
    var w = x(1100) + m[x(1065)], E = "i" + a, q = m[x(934)] = e[x(934)] + 1, O = x(1024) + q, P = e[x(1479)], S = e[x(2245)][x(1444)] ? typeof c == x(1395) && Object.keys(c)[x(1586)] > 0 || c === !1 : e.util.schemaHasRules(c, e.RULES[x(1576)]);
    if (r += x(2438) + h + x(2040) + g + ";", S) {
      var R = e[x(1956)];
      e[x(1956)] = m[x(1956)] = !0, m[x(970)] = c, m.schemaPath = u, m.errSchemaPath = f, r += x(1224) + w + " = false; for (var " + E + x(2377) + E + x(2555) + l + x(1608) + E + x(1530), m[x(1617)] = e[x(497)].getPathExpr(e[x(1617)], E, e[x(2245)][x(1093)], !0);
      var j = l + "[" + E + "]";
      m[x(2530)][q] = E;
      var D = e[x(1017)](m);
      m[x(1479)] = P, e.util[x(1130)](D, O) < 2 ? r += " " + e[x(497)][x(1087)](D, O, j) + " " : r += x(1224) + O + x(1052) + j + "; " + D + " ", r += x(943) + w + ") break; }  ", e[x(1956)] = m[x(1956)] = R, r += " " + y + x(2272) + w + x(1400);
    } else r += " if (" + l + x(826);
    var M = M || [];
    M[x(1251)](r), r = "", e[x(432)] !== !1 ? (r += " { keyword: 'contains" + x(1990) + e[x(1617)] + x(1524) + e[x(497)][x(591)](f) + x(1915), e[x(2245)][x(2275)] !== !1 && (r += x(2445)), e[x(2245)][x(2262)] && (r += x(923) + u + " , parentSchema: validate.schema" + e[x(1992)] + x(2263) + l + " "), r += " } ") : r += x(1603);
    var N = r;
    return r = M.pop(), !e[x(1956)] && d ? e[x(646)] ? r += x(2156) + N + x(1694) : r += x(1614) + N + x(1012) : r += x(2047) + N + x(1005), r += " } else { ", S && (r += x(868) + h + x(1477) + h + x(270) + h + "; else vErrors = null; } "), e[x(2245)][x(464)] && (r += " } "), r;
  }), st;
}
var nt, Gr;
function Oo() {
  return Gr || (Gr = 1, nt = function(e, t, s) {
    const x = B;
    var r = " ", a = e[x(1065)], o = e[x(934)], c = e[x(970)][t], u = e[x(1992)] + e[x(497)][x(332)](t), f = e[x(1414)] + "/" + t, d = !e[x(2245)][x(464)], l = x(1024) + (o || ""), g = "errs__" + a, h = e[x(497)][x(526)](e), m = "";
    h[x(1065)]++;
    var y = x(1100) + h[x(1065)], w = {}, E = {}, q = e[x(2245)][x(448)];
    for (R in c)
      if (R != x(2451)) {
        var O = c[R], P = Array[x(752)](O) ? E : w;
        P[R] = O;
      }
    r += x(2438) + g + x(683);
    var S = e[x(1617)];
    r += "var missing" + a + ";";
    for (var R in E)
      if (P = E[R], P[x(1586)]) {
        if (r += x(1749) + l + e[x(497)][x(332)](R) + x(416), q && (r += x(991) + l + x(449) + e[x(497)][x(1265)](R) + x(1812)), d) {
          r += x(2187);
          var j = P;
          if (j)
            for (var D, M = -1, N = j.length - 1; M < N; ) {
              D = j[M += 1], M && (r += " || ");
              var I = e[x(497)][x(332)](D), U = l + I;
              r += x(1453) + U + " === undefined ", q && (r += x(944) + l + x(449) + e[x(497)][x(1265)](D) + x(1812)), r += x(1241) + a + x(1052) + e.util.toQuotedString(e[x(2245)][x(1093)] ? D : I) + ") ) ";
            }
          r += x(1163);
          var H = "missing" + a, V = x(2059) + H + x(2526);
          e[x(2245)]._errorDataPathProperty && (e[x(1617)] = e.opts[x(1093)] ? e.util[x(602)](S, H, !0) : S + x(2339) + H);
          var J = J || [];
          J[x(1251)](r), r = "", e.createErrors !== !1 ? (r += x(1260) + x(1413) + x(1990) + e[x(1617)] + x(1524) + e[x(497)][x(591)](f) + x(994) + e[x(497)].escapeQuotes(R) + "', missingProperty: '" + V + "', depsCount: " + P[x(1586)] + x(2256) + e[x(497)].escapeQuotes(P[x(1586)] == 1 ? P[0] : P.join(", ")) + x(1619), e[x(2245)].messages !== !1 && (r += x(2466), P.length == 1 ? r += x(1055) + e[x(497)].escapeQuotes(P[0]) : r += x(1795) + e[x(497)][x(1265)](P[x(2373)](", ")), r += " when property " + e[x(497)][x(1265)](R) + " is present' "), e[x(2245)][x(2262)] && (r += x(923) + u + " , parentSchema: validate.schema" + e[x(1992)] + x(2263) + l + " "), r += x(316)) : r += x(1603);
          var t0 = r;
          r = J[x(1088)](), !e[x(1956)] && d ? e.async ? r += x(2156) + t0 + x(1694) : r += x(1614) + t0 + "]; return false; " : r += x(2047) + t0 + ";  if (vErrors === null) vErrors = [err]; else vErrors.push(err); errors++; ";
        } else {
          r += x(461);
          var e0 = P;
          if (e0)
            for (var D, u0 = -1, l0 = e0[x(1586)] - 1; u0 < l0; ) {
              D = e0[u0 += 1];
              var I = e[x(497)].getProperty(D), V = e[x(497)][x(1265)](D), U = l + I;
              e[x(2245)][x(2133)] && (e[x(1617)] = e[x(497)][x(2164)](S, D, e.opts[x(1093)])), r += x(1749) + U + x(1427), q && (r += x(944) + l + x(449) + e[x(497)][x(1265)](D) + x(1812)), r += ") {  var err =   ", e[x(432)] !== !1 ? (r += x(1260) + x(1413) + "' , dataPath: (dataPath || '') + " + e.errorPath + x(1524) + e[x(497)].toQuotedString(f) + x(994) + e[x(497)][x(1265)](R) + x(976) + V + "', depsCount: " + P[x(1586)] + x(2256) + e[x(497)][x(1265)](P.length == 1 ? P[0] : P[x(2373)](", ")) + x(1619), e[x(2245)].messages !== !1 && (r += x(2466), P[x(1586)] == 1 ? r += x(1055) + e[x(497)][x(1265)](P[0]) : r += x(1795) + e[x(497)].escapeQuotes(P.join(", ")), r += " when property " + e.util[x(1265)](R) + x(485)), e[x(2245)][x(2262)] && (r += x(923) + u + " , parentSchema: validate.schema" + e[x(1992)] + x(2263) + l + " "), r += " } ") : r += x(1603), r += x(347);
            }
        }
        r += " }   ", d && (m += "}", r += " else { ");
      }
    e.errorPath = S;
    var f0 = h.baseId;
    for (var R in w) {
      var O = w[R];
      (e.opts[x(1444)] ? typeof O == x(1395) && Object[x(1001)](O)[x(1586)] > 0 || O === !1 : e[x(497)].schemaHasRules(O, e.RULES[x(1576)])) && (r += " " + y + x(918) + l + e[x(497)][x(332)](R) + " !== undefined ", q && (r += x(991) + l + ", '" + e[x(497)][x(1265)](R) + x(1812)), r += x(1577), h[x(970)] = O, h[x(1992)] = u + e.util[x(332)](R), h[x(1414)] = f + "/" + e.util.escapeFragment(R), r += "  " + e[x(1017)](h) + " ", h[x(1479)] = f0, r += x(1293), d && (r += x(943) + y + ") { ", m += "}"));
    }
    return d && (r += "   " + m + " if (" + g + x(1239)), r;
  }), nt;
}
var at, Xr;
function Ao() {
  return Xr || (Xr = 1, at = function(e, t, s) {
    const x = B;
    var r = " ", a = e[x(1065)], o = e[x(934)], c = e[x(970)][t], u = e[x(1992)] + e[x(497)][x(332)](t), f = e[x(1414)] + "/" + t, d = !e[x(2245)][x(464)], l = x(1024) + (o || ""), g = x(1100) + a, h = e[x(2245)].$data && c && c[x(1343)];
    h && (r += " var schema" + a + x(1052) + e[x(497)][x(2067)](c[x(1343)], o, e[x(2530)]) + "; ");
    var m = "i" + a, y = "schema" + a;
    !h && (r += " var " + y + " = validate.schema" + u + ";"), r += x(2438) + g + ";", h && (r += x(1025) + a + x(790) + g + x(910) + a + x(1980) + g + " = false; else {"), r += "" + g + x(327) + m + x(2489) + m + "<" + y + x(1608) + m + x(603) + l + ", " + y + "[" + m + x(781) + g + x(921), h && (r += x(1035)), r += " if (!" + g + ") {   ";
    var w = w || [];
    w[x(1251)](r), r = "", e[x(432)] !== !1 ? (r += x(1260) + x(511) + x(1990) + e[x(1617)] + x(1524) + e[x(497)][x(591)](f) + " , params: { allowedValues: schema" + a + " } ", e[x(2245)].messages !== !1 && (r += x(1912)), e[x(2245)].verbose && (r += x(923) + u + x(2449) + e[x(1992)] + x(2263) + l + " "), r += x(316)) : r += x(1603);
    var E = r;
    return r = w[x(1088)](), !e[x(1956)] && d ? e[x(646)] ? r += x(2156) + E + "]); " : r += x(1614) + E + "]; return false; " : r += x(2047) + E + ";  if (vErrors === null) vErrors = [err]; else vErrors.push(err); errors++; ", r += " }", d && (r += " else { "), r;
  }), at;
}
var it, Yr;
function To() {
  return Yr || (Yr = 1, it = function(e, t, s) {
    const x = B;
    var r = " ", a = e[x(1065)], o = e.dataLevel, c = e[x(970)][t], u = e.schemaPath + e[x(497)][x(332)](t), f = e[x(1414)] + "/" + t, d = !e.opts[x(464)], l = x(1024) + (o || "");
    if (e.opts[x(1156)] === !1) return d && (r += x(2124)), r;
    var g = e.opts.$data && c && c[x(1343)], h;
    g ? (r += x(1538) + a + " = " + e[x(497)][x(2067)](c[x(1343)], o, e.dataPathArr) + "; ", h = x(970) + a) : h = c;
    var m = e[x(2245)].unknownFormats, y = Array[x(752)](m);
    if (g) {
      var w = x(1156) + a, E = "isObject" + a, q = "formatType" + a;
      r += x(1224) + w + " = formats[" + h + x(1398) + E + x(1454) + w + x(1521) + w + x(474) + w + x(1575) + q + " = " + E + x(712) + w + x(1436) + E + x(1577), e[x(646)] && (r += x(2478) + a + x(1052) + w + x(2554)), r += " " + w + " = " + w + ".validate; } if (  ", g && (r += " (" + h + x(743) + h + " != 'string') || "), r += " (", m != x(881) && (r += " (" + h + x(2192) + w + " ", y && (r += x(1060) + h + x(1983)), r += ") || "), r += " (" + w + x(712) + q + x(1840) + s + x(1543) + w + x(1949), e.async ? r += x(1484) + a + " ? await " + w + "(" + l + x(643) + w + "(" + l + ")) " : r += " " + w + "(" + l + ") ", r += x(2126) + w + ".test(" + l + x(2415);
    } else {
      var w = e.formats[c];
      if (!w) {
        if (m == "ignore") return e.logger.warn(x(2209) + c + x(774) + e[x(1414)] + '"'), d && (r += x(2124)), r;
        if (y && m[x(1563)](c) >= 0) return d && (r += " if (true) { "), r;
        throw new Error(x(2209) + c + x(1852) + e[x(1414)] + '"');
      }
      var E = typeof w == "object" && !(w instanceof RegExp) && w[x(1017)], q = E && w[x(1594)] || x(342);
      if (E) {
        var O = w[x(646)] === !0;
        w = w[x(1017)];
      }
      if (q != s) return d && (r += x(2124)), r;
      if (O) {
        if (!e.async) throw new Error("async format in sync schema");
        var P = "formats" + e.util[x(332)](c) + x(1441);
        r += " if (!(await " + P + "(" + l + x(681);
      } else {
        r += x(292);
        var P = x(1356) + e[x(497)][x(332)](c);
        E && (P += ".validate"), typeof w == x(730) ? r += " " + P + "(" + l + ") " : r += " " + P + ".test(" + l + ") ", r += x(1577);
      }
    }
    var S = S || [];
    S[x(1251)](r), r = "", e[x(432)] !== !1 ? (r += x(1260) + x(1156) + x(1990) + e[x(1617)] + " , schemaPath: " + e[x(497)][x(591)](f) + x(1185), g ? r += "" + h : r += "" + e[x(497)][x(591)](c), r += "  } ", e.opts[x(2275)] !== !1 && (r += x(2044), g ? r += x(2059) + h + x(2526) : r += "" + e[x(497)].escapeQuotes(c), r += `"' `), e[x(2245)][x(2262)] && (r += " , schema:  ", g ? r += x(2551) + u : r += "" + e[x(497)].toQuotedString(c), r += x(1868) + e[x(1992)] + x(2263) + l + " "), r += " } ") : r += " {} ";
    var R = r;
    return r = S[x(1088)](), !e[x(1956)] && d ? e[x(646)] ? r += x(2156) + R + x(1694) : r += x(1614) + R + "]; return false; " : r += x(2047) + R + ";  if (vErrors === null) vErrors = [err]; else vErrors.push(err); errors++; ", r += x(316), d && (r += x(738)), r;
  }), it;
}
var ot, _r;
function Do() {
  return _r || (_r = 1, ot = function(e, t, s) {
    const x = B;
    var r = " ", a = e[x(1065)], o = e[x(934)], c = e[x(970)][t], u = e[x(1992)] + e[x(497)][x(332)](t), f = e[x(1414)] + "/" + t, d = !e[x(2245)][x(464)], l = x(1024) + (o || ""), g = x(1100) + a, h = "errs__" + a, m = e[x(497)][x(526)](e);
    m.level++;
    var y = x(1100) + m.level, w = e[x(970)][x(2055)], E = e.schema[x(653)], q = w !== void 0 && (e.opts[x(1444)] ? typeof w == x(1395) && Object.keys(w)[x(1586)] > 0 || w === !1 : e.util[x(1485)](w, e.RULES.all)), O = E !== void 0 && (e[x(2245)][x(1444)] ? typeof E == "object" && Object.keys(E)[x(1586)] > 0 || E === !1 : e[x(497)][x(1485)](E, e.RULES[x(1576)])), P = m.baseId;
    if (q || O) {
      var S;
      m.createErrors = !1, m[x(970)] = c, m.schemaPath = u, m.errSchemaPath = f, r += x(1224) + h + " = errors; var " + g + " = true;  ";
      var R = e[x(1956)];
      e[x(1956)] = m[x(1956)] = !0, r += "  " + e[x(1017)](m) + " ", m[x(1479)] = P, m[x(432)] = !0, r += x(868) + h + x(1477) + h + x(270) + h + x(2452), e[x(1956)] = m[x(1956)] = R, q ? (r += x(943) + y + x(265), m.schema = e.schema[x(2055)], m[x(1992)] = e[x(1992)] + x(1312), m[x(1414)] = e[x(1414)] + x(541), r += "  " + e[x(1017)](m) + " ", m[x(1479)] = P, r += " " + g + x(1052) + y + "; ", q && O ? (S = x(2494) + a, r += x(1224) + S + " = 'then'; ") : S = x(1200), r += x(316), O && (r += x(738))) : r += x(2272) + y + x(1577), O && (m.schema = e.schema[x(653)], m.schemaPath = e[x(1992)] + x(1554), m.errSchemaPath = e.errSchemaPath + x(739), r += "  " + e[x(1017)](m) + " ", m.baseId = P, r += " " + g + x(1052) + y + "; ", q && O ? (S = "ifClause" + a, r += x(1224) + S + x(2523)) : S = x(1926), r += " } "), r += x(2272) + g + x(456), e.createErrors !== !1 ? (r += " { keyword: 'if" + x(1990) + e[x(1617)] + " , schemaPath: " + e[x(497)][x(591)](f) + x(1790) + S + " } ", e[x(2245)][x(2275)] !== !1 && (r += x(2358) + S + x(341)), e.opts[x(2262)] && (r += x(923) + u + x(2449) + e[x(1992)] + x(2263) + l + " "), r += " } ") : r += " {} ", r += x(1005), !e[x(1956)] && d && (e.async ? r += " throw new ValidationError(vErrors); " : r += x(1706)), r += " }   ", d && (r += x(738));
    } else d && (r += x(2124));
    return r;
  }), ot;
}
var ct, xs;
function jo() {
  return xs || (xs = 1, ct = function(e, t, s) {
    const x = B;
    var r = " ", a = e[x(1065)], o = e[x(934)], c = e[x(970)][t], u = e[x(1992)] + e[x(497)][x(332)](t), f = e[x(1414)] + "/" + t, d = !e[x(2245)][x(464)], l = x(1024) + (o || ""), g = x(1100) + a, h = x(561) + a, m = e[x(497)][x(526)](e), y = "";
    m[x(1065)]++;
    var w = "valid" + m[x(1065)], E = "i" + a, q = m[x(934)] = e[x(934)] + 1, O = x(1024) + q, P = e[x(1479)];
    if (r += x(2438) + h + " = errors;var " + g + ";", Array[x(752)](c)) {
      var S = e[x(970)][x(836)];
      if (S === !1) {
        r += " " + g + x(1052) + l + x(1782) + c.length + "; ";
        var R = f;
        f = e[x(1414)] + x(1064), r += x(1210) + g + ") {   ";
        var j = j || [];
        j[x(1251)](r), r = "", e[x(432)] !== !1 ? (r += x(1260) + x(836) + x(1990) + e[x(1617)] + " , schemaPath: " + e[x(497)][x(591)](f) + x(637) + c.length + x(316), e[x(2245)][x(2275)] !== !1 && (r += x(1007) + c[x(1586)] + x(2235)), e.opts[x(2262)] && (r += x(2513) + e.schemaPath + x(2263) + l + " "), r += " } ") : r += x(1603);
        var D = r;
        r = j[x(1088)](), !e[x(1956)] && d ? e[x(646)] ? r += " throw new ValidationError([" + D + x(1694) : r += x(1614) + D + "]; return false; " : r += x(2047) + D + x(1005), r += x(316), f = R, d && (y += "}", r += " else { ");
      }
      var M = c;
      if (M) {
        for (var N, I = -1, U = M[x(1586)] - 1; I < U; )
          if (N = M[I += 1], e[x(2245)][x(1444)] ? typeof N == x(1395) && Object[x(1001)](N)[x(1586)] > 0 || N === !1 : e[x(497)].schemaHasRules(N, e.RULES.all)) {
            r += " " + w + x(1360) + l + x(2008) + I + x(1577);
            var H = l + "[" + I + "]";
            m[x(970)] = N, m[x(1992)] = u + "[" + I + "]", m.errSchemaPath = f + "/" + I, m[x(1617)] = e[x(497)].getPathExpr(e[x(1617)], I, e[x(2245)][x(1093)], !0), m[x(2530)][q] = I;
            var V = e[x(1017)](m);
            m[x(1479)] = P, e[x(497)][x(1130)](V, O) < 2 ? r += " " + e.util[x(1087)](V, O, H) + " " : r += x(1224) + O + x(1052) + H + "; " + V + " ", r += x(1293), d && (r += x(943) + w + x(1577), y += "}");
          }
      }
      if (typeof S == "object" && (e[x(2245)].strictKeywords ? typeof S == "object" && Object[x(1001)](S).length > 0 || S === !1 : e[x(497)].schemaHasRules(S, e[x(1944)].all))) {
        m[x(970)] = S, m[x(1992)] = e.schemaPath + x(827), m[x(1414)] = e.errSchemaPath + x(1064), r += " " + w + x(1360) + l + x(2008) + c[x(1586)] + x(669) + E + x(1052) + c[x(1586)] + "; " + E + x(2555) + l + x(1608) + E + x(1530), m[x(1617)] = e[x(497)][x(602)](e[x(1617)], E, e.opts.jsonPointers, !0);
        var H = l + "[" + E + "]";
        m.dataPathArr[q] = E;
        var V = e[x(1017)](m);
        m[x(1479)] = P, e[x(497)][x(1130)](V, O) < 2 ? r += " " + e[x(497)][x(1087)](V, O, H) + " " : r += " var " + O + x(1052) + H + "; " + V + " ", d && (r += x(2272) + w + ") break; "), r += x(1881), d && (r += x(943) + w + x(1577), y += "}");
      }
    } else if (e[x(2245)][x(1444)] ? typeof c == "object" && Object[x(1001)](c)[x(1586)] > 0 || c === !1 : e[x(497)][x(1485)](c, e[x(1944)][x(1576)])) {
      m[x(970)] = c, m[x(1992)] = u, m[x(1414)] = f, r += "  for (var " + E + x(1052) + 0 + "; " + E + x(2555) + l + x(1608) + E + x(1530), m[x(1617)] = e[x(497)][x(602)](e[x(1617)], E, e.opts[x(1093)], !0);
      var H = l + "[" + E + "]";
      m[x(2530)][q] = E;
      var V = e[x(1017)](m);
      m[x(1479)] = P, e[x(497)][x(1130)](V, O) < 2 ? r += " " + e[x(497)][x(1087)](V, O, H) + " " : r += x(1224) + O + x(1052) + H + "; " + V + " ", d && (r += " if (!" + w + ") break; "), r += " }";
    }
    return d && (r += " " + y + x(943) + h + x(1239)), r;
  }), ct;
}
var ut, es;
function ts() {
  return es || (es = 1, ut = function(e, t, s) {
    const x = B;
    var r = " ", a = e[x(1065)], o = e[x(934)], c = e[x(970)][t], u = e[x(1992)] + e[x(497)].getProperty(t), f = e[x(1414)] + "/" + t, d = !e.opts[x(464)], P, l = x(1024) + (o || ""), g = e[x(2245)][x(1343)] && c && c[x(1343)], h;
    g ? (r += " var schema" + a + x(1052) + e[x(497)][x(2067)](c.$data, o, e.dataPathArr) + "; ", h = x(970) + a) : h = c;
    var m = t == "maximum", y = x(m ? 1878 : 544), w = e[x(970)][y], E = e.opts[x(1343)] && w && w[x(1343)], q = m ? "<" : ">", O = m ? ">" : "<", P = void 0;
    if (!(g || typeof c == "number" || c === void 0)) throw new Error(t + x(289));
    if (!(E || w === void 0 || typeof w == x(369) || typeof w == x(320))) throw new Error(y + x(608));
    if (E) {
      var S = e[x(497)][x(2067)](w[x(1343)], o, e[x(2530)]), R = x(889) + a, j = x(1489) + a, D = x(2139) + a, M = "op" + a, N = x(2059) + M + " + '";
      r += x(1789) + a + x(1052) + S + "; ", S = x(1544) + a, r += x(1224) + R + x(1561) + j + x(1454) + S + x(1113) + j + x(1167) + j + " != 'undefined' && " + j + x(977);
      var P = y, I = I || [];
      I[x(1251)](r), r = "", e[x(432)] !== !1 ? (r += x(1260) + (P || x(2186)) + x(1990) + e[x(1617)] + x(1524) + e[x(497)].toQuotedString(f) + x(1915), e.opts[x(2275)] !== !1 && (r += " , message: '" + y + " should be boolean' "), e[x(2245)][x(2262)] && (r += x(923) + u + " , parentSchema: validate.schema" + e.schemaPath + x(2263) + l + " "), r += x(316)) : r += x(1603);
      var U = r;
      r = I[x(1088)](), !e[x(1956)] && d ? e[x(646)] ? r += " throw new ValidationError([" + U + x(1694) : r += x(1614) + U + x(1012) : r += x(2047) + U + x(1005), r += " } else if ( ", g && (r += " (" + h + x(743) + h + x(1723)), r += " " + j + " == 'number' ? ( (" + R + x(1052) + h + x(396) + S + " " + q + "= " + h + x(936) + l + " " + O + "= " + S + " : " + l + " " + O + " " + h + x(926) + R + x(1052) + S + " === true) ? " + l + " " + O + "= " + h + x(2126) + l + " " + O + " " + h + " ) || " + l + x(1020) + l + x(1756) + a + " = " + R + x(2510) + q + x(1486) + q + "='; ", c === void 0 && (P = y, f = e.errSchemaPath + "/" + y, h = S, g = E);
    } else {
      var D = typeof w == "number", N = q;
      if (D && g) {
        var M = "'" + N + "'";
        r += x(1749), g && (r += " (" + h + " !== undefined && typeof " + h + x(1723)), r += " ( " + h + x(396) + w + " " + q + "= " + h + x(405) + l + " " + O + "= " + w + x(2126) + l + " " + O + " " + h + x(2288) + l + " !== " + l + x(1577);
      } else {
        D && c === void 0 ? (R = !0, P = y, f = e.errSchemaPath + "/" + y, h = w, O += "=") : (D && (h = Math[x(m ? 644 : 2328)](w, c)), w === (D ? h : !0) ? (R = !0, P = y, f = e[x(1414)] + "/" + y, O += "=") : (R = !1, N += "="));
        var M = "'" + N + "'";
        r += x(1749), g && (r += " (" + h + x(743) + h + " != 'number') || "), r += " " + l + " " + O + " " + h + x(946) + l + x(1020) + l + x(1577);
      }
    }
    P = P || t;
    var I = I || [];
    I[x(1251)](r), r = "", e[x(432)] !== !1 ? (r += x(1260) + (P || "_limit") + x(1990) + e[x(1617)] + x(1524) + e[x(497)][x(591)](f) + x(2299) + M + x(1873) + h + x(2261) + R + x(316), e[x(2245)].messages !== !1 && (r += x(531) + N + " ", g ? r += "' + " + h : r += "" + h + "'"), e[x(2245)][x(2262)] && (r += x(2128), g ? r += x(2551) + u : r += "" + c, r += x(1868) + e[x(1992)] + x(2263) + l + " "), r += x(316)) : r += x(1603);
    var U = r;
    return r = I[x(1088)](), !e.compositeRule && d ? e[x(646)] ? r += x(2156) + U + x(1694) : r += x(1614) + U + "]; return false; " : r += " var err = " + U + ";  if (vErrors === null) vErrors = [err]; else vErrors.push(err); errors++; ", r += x(316), d && (r += " else { "), r;
  }), ut;
}
var ft, rs;
function ss() {
  return rs || (rs = 1, ft = function(e, t, s) {
    const x = B;
    var r = " ", a = e[x(1065)], o = e[x(934)], c = e[x(970)][t], u = e[x(1992)] + e[x(497)][x(332)](t), f = e[x(1414)] + "/" + t, d = !e[x(2245)][x(464)], y, l = x(1024) + (o || ""), g = e.opts[x(1343)] && c && c[x(1343)], h;
    if (g ? (r += x(1538) + a + x(1052) + e[x(497)][x(2067)](c[x(1343)], o, e[x(2530)]) + "; ", h = x(970) + a) : h = c, !(g || typeof c == x(369))) throw new Error(t + x(289));
    var m = t == "maxItems" ? ">" : "<";
    r += x(2160), g && (r += " (" + h + x(743) + h + x(1723)), r += " " + l + x(880) + m + " " + h + x(1577);
    var y = t, w = w || [];
    w[x(1251)](r), r = "", e[x(432)] !== !1 ? (r += x(1260) + (y || x(1819)) + x(1990) + e[x(1617)] + x(1524) + e.util[x(591)](f) + x(637) + h + x(316), e[x(2245)][x(2275)] !== !1 && (r += " , message: 'should NOT have ", t == x(537) ? r += x(1023) : r += x(2260), r += x(385), g ? r += "' + " + h + x(2526) : r += "" + c, r += x(2235)), e[x(2245)][x(2262)] && (r += " , schema:  ", g ? r += "validate.schema" + u : r += "" + c, r += x(1868) + e[x(1992)] + x(2263) + l + " "), r += " } ") : r += x(1603);
    var E = r;
    return r = w[x(1088)](), !e[x(1956)] && d ? e[x(646)] ? r += x(2156) + E + "]); " : r += x(1614) + E + x(1012) : r += " var err = " + E + ";  if (vErrors === null) vErrors = [err]; else vErrors.push(err); errors++; ", r += "} ", d && (r += x(738)), r;
  }), ft;
}
var dt, ns;
function as() {
  return ns || (ns = 1, dt = function(e, t, s) {
    const x = B;
    var r = " ", a = e[x(1065)], o = e[x(934)], c = e[x(970)][t], u = e[x(1992)] + e[x(497)][x(332)](t), f = e[x(1414)] + "/" + t, d = !e[x(2245)].allErrors, y, l = x(1024) + (o || ""), g = e[x(2245)][x(1343)] && c && c[x(1343)], h;
    if (g ? (r += x(1538) + a + x(1052) + e[x(497)][x(2067)](c.$data, o, e[x(2530)]) + "; ", h = x(970) + a) : h = c, !(g || typeof c == x(369))) throw new Error(t + " must be number");
    var m = t == x(502) ? ">" : "<";
    r += x(2160), g && (r += " (" + h + x(743) + h + x(1723)), e[x(2245)][x(1347)] === !1 ? r += " " + l + x(880) : r += " ucs2length(" + l + ") ", r += " " + m + " " + h + x(1577);
    var y = t, w = w || [];
    w.push(r), r = "", e.createErrors !== !1 ? (r += x(1260) + (y || x(763)) + x(1990) + e.errorPath + x(1524) + e[x(497)].toQuotedString(f) + x(637) + h + x(316), e[x(2245)][x(2275)] !== !1 && (r += x(1505), t == x(502) ? r += "longer" : r += x(2017), r += " than ", g ? r += "' + " + h + " + '" : r += "" + c, r += " characters' "), e[x(2245)][x(2262)] && (r += x(2128), g ? r += x(2551) + u : r += "" + c, r += x(1868) + e[x(1992)] + x(2263) + l + " "), r += " } ") : r += x(1603);
    var E = r;
    return r = w.pop(), !e[x(1956)] && d ? e[x(646)] ? r += x(2156) + E + x(1694) : r += x(1614) + E + x(1012) : r += x(2047) + E + x(1005), r += "} ", d && (r += x(738)), r;
  }), dt;
}
var lt, is;
function os() {
  return is || (is = 1, lt = function(e, t, s) {
    const x = B;
    var r = " ", a = e.level, o = e.dataLevel, c = e[x(970)][t], u = e[x(1992)] + e.util.getProperty(t), f = e[x(1414)] + "/" + t, d = !e[x(2245)][x(464)], y, l = "data" + (o || ""), g = e[x(2245)][x(1343)] && c && c[x(1343)], h;
    if (g ? (r += x(1538) + a + x(1052) + e[x(497)].getData(c[x(1343)], o, e.dataPathArr) + "; ", h = x(970) + a) : h = c, !(g || typeof c == "number")) throw new Error(t + " must be number");
    var m = t == x(1735) ? ">" : "<";
    r += x(2160), g && (r += " (" + h + x(743) + h + " != 'number') || "), r += x(263) + l + x(2311) + m + " " + h + x(1577);
    var y = t, w = w || [];
    w.push(r), r = "", e[x(432)] !== !1 ? (r += " { keyword: '" + (y || x(1512)) + "' , dataPath: (dataPath || '') + " + e[x(1617)] + " , schemaPath: " + e.util.toQuotedString(f) + x(637) + h + x(316), e.opts[x(2275)] !== !1 && (r += " , message: 'should NOT have ", t == x(1735) ? r += x(1023) : r += "fewer", r += " than ", g ? r += x(2059) + h + x(2526) : r += "" + c, r += x(2448)), e.opts[x(2262)] && (r += x(2128), g ? r += x(2551) + u : r += "" + c, r += x(1868) + e[x(1992)] + x(2263) + l + " "), r += x(316)) : r += x(1603);
    var E = r;
    return r = w[x(1088)](), !e[x(1956)] && d ? e.async ? r += x(2156) + E + x(1694) : r += x(1614) + E + x(1012) : r += " var err = " + E + x(1005), r += "} ", d && (r += " else { "), r;
  }), lt;
}
var ht, cs;
function Mo() {
  return cs || (cs = 1, ht = function(e, t, s) {
    const x = B;
    var r = " ", a = e.level, o = e[x(934)], c = e[x(970)][t], u = e.schemaPath + e[x(497)].getProperty(t), f = e[x(1414)] + "/" + t, d = !e.opts.allErrors, l = "data" + (o || ""), g = e[x(2245)][x(1343)] && c && c[x(1343)], h;
    if (g ? (r += x(1538) + a + x(1052) + e[x(497)][x(2067)](c[x(1343)], o, e[x(2530)]) + "; ", h = x(970) + a) : h = c, !(g || typeof c == x(369))) throw new Error(t + " must be number");
    r += x(2496) + a + ";if (", g && (r += " " + h + " !== undefined && ( typeof " + h + x(1836)), r += x(1883) + a + x(1052) + l + x(361) + h + ", ", e[x(2245)][x(2244)] ? r += x(2147) + a + x(1730) + a + ") > 1e-" + e[x(2245)][x(2244)] + " " : r += " division" + a + x(2306) + a + ") ", r += x(1482), g && (r += x(1540)), r += x(1038);
    var m = m || [];
    m[x(1251)](r), r = "", e.createErrors !== !1 ? (r += x(1260) + x(2387) + x(1990) + e[x(1617)] + " , schemaPath: " + e[x(497)][x(591)](f) + x(1500) + h + x(316), e[x(2245)][x(2275)] !== !1 && (r += x(2364), g ? r += x(2059) + h : r += "" + h + "'"), e[x(2245)][x(2262)] && (r += x(2128), g ? r += "validate.schema" + u : r += "" + c, r += x(1868) + e.schemaPath + x(2263) + l + " "), r += x(316)) : r += x(1603);
    var y = r;
    return r = m.pop(), !e[x(1956)] && d ? e[x(646)] ? r += x(2156) + y + x(1694) : r += x(1614) + y + "]; return false; " : r += " var err = " + y + x(1005), r += "} ", d && (r += x(738)), r;
  }), ht;
}
var pt, us;
function Lo() {
  return us || (us = 1, pt = function(e, t, s) {
    const x = B;
    var r = " ", a = e[x(1065)], o = e[x(934)], c = e[x(970)][t], u = e[x(1992)] + e[x(497)].getProperty(t), f = e[x(1414)] + "/" + t, d = !e[x(2245)][x(464)], l = x(1024) + (o || ""), g = x(561) + a, h = e[x(497)][x(526)](e);
    h[x(1065)]++;
    var m = x(1100) + h.level;
    if (e[x(2245)][x(1444)] ? typeof c == x(1395) && Object[x(1001)](c)[x(1586)] > 0 || c === !1 : e[x(497)].schemaHasRules(c, e.RULES[x(1576)])) {
      h[x(970)] = c, h.schemaPath = u, h[x(1414)] = f, r += x(1224) + g + x(2497);
      var y = e[x(1956)];
      e[x(1956)] = h[x(1956)] = !0, h[x(432)] = !1;
      var w;
      h[x(2245)][x(464)] && (w = h[x(2245)][x(464)], h.opts[x(464)] = !1), r += " " + e.validate(h) + " ", h.createErrors = !0, w && (h.opts[x(464)] = w), e.compositeRule = h[x(1956)] = y, r += x(943) + m + x(1516);
      var E = E || [];
      E[x(1251)](r), r = "", e[x(432)] !== !1 ? (r += x(1260) + x(1747) + "' , dataPath: (dataPath || '') + " + e[x(1617)] + x(1524) + e[x(497)][x(591)](f) + x(1915), e[x(2245)][x(2275)] !== !1 && (r += x(587)), e[x(2245)][x(2262)] && (r += x(923) + u + x(2449) + e.schemaPath + x(2263) + l + " "), r += x(316)) : r += x(1603);
      var q = r;
      r = E[x(1088)](), !e[x(1956)] && d ? e.async ? r += " throw new ValidationError([" + q + "]); " : r += x(1614) + q + x(1012) : r += x(2047) + q + x(1005), r += x(929) + g + x(1477) + g + x(270) + g + x(2201), e[x(2245)].allErrors && (r += x(316));
    } else r += "  var err =   ", e.createErrors !== !1 ? (r += x(1260) + "not" + x(1990) + e.errorPath + x(1524) + e[x(497)].toQuotedString(f) + x(1915), e[x(2245)][x(2275)] !== !1 && (r += " , message: 'should NOT be valid' "), e[x(2245)][x(2262)] && (r += x(923) + u + x(2449) + e[x(1992)] + x(2263) + l + " "), r += x(316)) : r += " {} ", r += x(1005), d && (r += x(1445));
    return r;
  }), pt;
}
var mt, fs;
function $o() {
  return fs || (fs = 1, mt = function(e, t, s) {
    const x = B;
    var r = " ", a = e[x(1065)], o = e[x(934)], c = e.schema[t], u = e[x(1992)] + e[x(497)][x(332)](t), f = e[x(1414)] + "/" + t, d = !e[x(2245)][x(464)], l = x(1024) + (o || ""), g = x(1100) + a, h = x(561) + a, m = e[x(497)][x(526)](e), y = "";
    m[x(1065)]++;
    var w = x(1100) + m[x(1065)], E = m.baseId, q = x(457) + a, O = x(2006) + a;
    r += x(2438) + h + x(935) + q + x(1021) + g + x(1021) + O + " = null; ";
    var P = e[x(1956)];
    e.compositeRule = m[x(1956)] = !0;
    var S = c;
    if (S)
      for (var R, j = -1, D = S[x(1586)] - 1; j < D; )
        R = S[j += 1], (e[x(2245)][x(1444)] ? typeof R == x(1395) && Object.keys(R)[x(1586)] > 0 || R === !1 : e[x(497)].schemaHasRules(R, e[x(1944)].all)) ? (m[x(970)] = R, m.schemaPath = u + "[" + j + "]", m[x(1414)] = f + "/" + j, r += "  " + e[x(1017)](m) + " ", m[x(1479)] = E) : r += x(1224) + w + x(338), j && (r += x(943) + w + x(712) + q + x(1577) + g + x(1494) + O + x(762) + O + ", " + j + x(548), y += "}"), r += x(943) + w + x(1577) + g + x(1052) + q + " = true; " + O + " = " + j + x(2190);
    return e[x(1956)] = m.compositeRule = P, r += "" + y + "if (!" + g + x(456), e[x(432)] !== !1 ? (r += " { keyword: '" + x(2481) + x(1990) + e.errorPath + x(1524) + e[x(497)][x(591)](f) + x(1610) + O + x(316), e.opts.messages !== !1 && (r += x(938)), e[x(2245)][x(2262)] && (r += x(923) + u + x(2449) + e[x(1992)] + " , data: " + l + " "), r += x(316)) : r += " {} ", r += x(1005), !e[x(1956)] && d && (e.async ? r += " throw new ValidationError(vErrors); " : r += " validate.errors = vErrors; return false; "), r += "} else {  errors = " + h + "; if (vErrors !== null) { if (" + h + x(270) + h + x(783), e[x(2245)][x(464)] && (r += x(316)), r;
  }), mt;
}
var gt, ds;
function zo() {
  return ds || (ds = 1, gt = function(e, t, s) {
    const x = B;
    var r = " ", a = e[x(1065)], o = e[x(934)], c = e.schema[t], u = e.schemaPath + e[x(497)].getProperty(t), f = e[x(1414)] + "/" + t, d = !e.opts[x(464)], l = x(1024) + (o || ""), g = e[x(2245)][x(1343)] && c && c[x(1343)], h;
    g ? (r += " var schema" + a + x(1052) + e[x(497)][x(2067)](c.$data, o, e[x(2530)]) + "; ", h = x(970) + a) : h = c;
    var m = g ? x(434) + h + "))" : e[x(628)](c);
    r += x(2160), g && (r += " (" + h + x(743) + h + " != 'string') || "), r += " !" + m + x(732) + l + x(350);
    var y = y || [];
    y[x(1251)](r), r = "", e[x(432)] !== !1 ? (r += x(1260) + "pattern" + x(1990) + e[x(1617)] + x(1524) + e[x(497)][x(591)](f) + x(1750), g ? r += "" + h : r += "" + e[x(497)][x(591)](c), r += x(488), e[x(2245)][x(2275)] !== !1 && (r += x(997), g ? r += x(2059) + h + " + '" : r += "" + e[x(497)][x(1265)](c), r += x(1372)), e.opts.verbose && (r += x(2128), g ? r += x(2551) + u : r += "" + e[x(497)][x(591)](c), r += x(1868) + e[x(1992)] + x(2263) + l + " "), r += x(316)) : r += x(1603);
    var w = r;
    return r = y[x(1088)](), !e[x(1956)] && d ? e[x(646)] ? r += " throw new ValidationError([" + w + x(1694) : r += x(1614) + w + x(1012) : r += x(2047) + w + x(1005), r += "} ", d && (r += " else { "), r;
  }), gt;
}
var vt, ls;
function Ho() {
  return ls || (ls = 1, vt = function(e, t, s) {
    const x = B;
    var r = " ", a = e[x(1065)], o = e.dataLevel, c = e[x(970)][t], u = e.schemaPath + e[x(497)][x(332)](t), f = e[x(1414)] + "/" + t, d = !e[x(2245)][x(464)], l = x(1024) + (o || ""), g = x(561) + a, h = e[x(497)][x(526)](e), m = "";
    h.level++;
    var y = "valid" + h[x(1065)], w = x(635) + a, E = x(1678) + a, q = h.dataLevel = e[x(934)] + 1, O = x(1024) + q, P = x(1859) + a, S = Object[x(1001)](c || {}).filter(u0), R = e.schema[x(1404)] || {}, j = Object[x(1001)](R).filter(u0), D = e[x(970)][x(393)], M = S.length || j[x(1586)], N = D === !1, I = typeof D == x(1395) && Object[x(1001)](D)[x(1586)], U = e[x(2245)][x(1361)], H = N || I || U, V = e[x(2245)][x(448)], J = e.baseId, t0 = e[x(970)].required;
    if (t0 && !(e[x(2245)][x(1343)] && t0[x(1343)]) && t0.length < e[x(2245)][x(879)]) var e0 = e[x(497)].toHash(t0);
    function u0(Le) {
      return Le !== x(2451);
    }
    if (r += x(2438) + g + x(2040) + y + x(1399), V && (r += " var " + P + " = undefined;"), H) {
      if (V ? r += " " + P + x(1052) + P + x(689) + l + x(476) + E + x(2489) + E + "<" + P + ".length; " + E + "++) { var " + w + x(1052) + P + "[" + E + "]; " : r += x(2382) + w + x(2146) + l + x(1577), M) {
        if (r += x(1393) + a + x(615), S[x(1586)])
          if (S[x(1586)] > 8) r += x(1733) + u + x(2189) + w + ") ";
          else {
            var l0 = S;
            if (l0)
              for (var f0, y0 = -1, F0 = l0.length - 1; y0 < F0; )
                f0 = l0[y0 += 1], r += x(946) + w + x(1186) + e[x(497)].toQuotedString(f0) + " ";
          }
        if (j[x(1586)]) {
          var D0 = j;
          if (D0)
            for (var k0, J0 = -1, T = D0.length - 1; J0 < T; )
              k0 = D0[J0 += 1], r += " || " + e[x(628)](k0) + x(732) + w + ") ";
        }
        r += x(2342) + a + x(1577);
      }
      if (U == "all") r += " delete " + l + "[" + w + x(1202);
      else {
        var A = e[x(1617)], L = "' + " + w + x(2526);
        if (e[x(2245)][x(2133)] && (e.errorPath = e[x(497)][x(602)](e.errorPath, w, e[x(2245)][x(1093)])), N)
          if (U) r += x(1748) + l + "[" + w + x(1202);
          else {
            r += " " + y + x(1494);
            var Q = f;
            f = e.errSchemaPath + x(983);
            var X = X || [];
            X[x(1251)](r), r = "", e[x(432)] !== !1 ? (r += x(1260) + "additionalProperties" + x(1990) + e.errorPath + x(1524) + e.util[x(591)](f) + x(1324) + L + x(1619), e[x(2245)][x(2275)] !== !1 && (r += x(917), e[x(2245)]._errorDataPathProperty ? r += x(1247) : r += x(2515), r += "' "), e.opts[x(2262)] && (r += " , schema: false , parentSchema: validate.schema" + e[x(1992)] + x(2263) + l + " "), r += " } ") : r += " {} ";
            var W = r;
            r = X.pop(), !e[x(1956)] && d ? e[x(646)] ? r += x(2156) + W + x(1694) : r += x(1614) + W + x(1012) : r += x(2047) + W + x(1005), f = Q, d && (r += x(2137));
          }
        else if (I)
          if (U == "failing") {
            r += " var " + g + " = errors;  ";
            var G = e[x(1956)];
            e[x(1956)] = h[x(1956)] = !0, h[x(970)] = D, h.schemaPath = e.schemaPath + x(1784), h[x(1414)] = e[x(1414)] + x(983), h[x(1617)] = e[x(2245)][x(2133)] ? e[x(1617)] : e[x(497)][x(602)](e[x(1617)], w, e.opts.jsonPointers);
            var i0 = l + "[" + w + "]";
            h.dataPathArr[q] = w;
            var s0 = e[x(1017)](h);
            h[x(1479)] = J, e[x(497)][x(1130)](s0, O) < 2 ? r += " " + e.util[x(1087)](s0, O, i0) + " " : r += x(1224) + O + " = " + i0 + "; " + s0 + " ", r += " if (!" + y + ") { errors = " + g + x(1050) + l + "[" + w + x(2097), e.compositeRule = h[x(1956)] = G;
          } else {
            h[x(970)] = D, h.schemaPath = e.schemaPath + x(1784), h.errSchemaPath = e[x(1414)] + x(983), h.errorPath = e.opts._errorDataPathProperty ? e[x(1617)] : e[x(497)][x(602)](e[x(1617)], w, e[x(2245)].jsonPointers);
            var i0 = l + "[" + w + "]";
            h[x(2530)][q] = w;
            var s0 = e[x(1017)](h);
            h.baseId = J, e.util[x(1130)](s0, O) < 2 ? r += " " + e[x(497)][x(1087)](s0, O, i0) + " " : r += x(1224) + O + x(1052) + i0 + "; " + s0 + " ", d && (r += x(2272) + y + x(1449));
          }
        e.errorPath = A;
      }
      M && (r += " } "), r += x(1293), d && (r += x(943) + y + x(1577), m += "}");
    }
    var _ = e.opts.useDefaults && !e[x(1956)];
    if (S[x(1586)]) {
      var j0 = S;
      if (j0)
        for (var f0, q0 = -1, $0 = j0.length - 1; q0 < $0; ) {
          f0 = j0[q0 += 1];
          var b0 = c[f0];
          if (e[x(2245)][x(1444)] ? typeof b0 == "object" && Object[x(1001)](b0)[x(1586)] > 0 || b0 === !1 : e.util[x(1485)](b0, e.RULES.all)) {
            var K0 = e[x(497)][x(332)](f0), i0 = l + K0, ax = _ && b0[x(664)] !== void 0;
            h[x(970)] = b0, h[x(1992)] = u + K0, h[x(1414)] = f + "/" + e.util[x(690)](f0), h[x(1617)] = e[x(497)][x(2164)](e[x(1617)], f0, e[x(2245)][x(1093)]), h[x(2530)][q] = e[x(497)].toQuotedString(f0);
            var s0 = e[x(1017)](h);
            if (h[x(1479)] = J, e[x(497)].varOccurences(s0, O) < 2) {
              s0 = e[x(497)][x(1087)](s0, O, i0);
              var Q0 = i0;
            } else {
              var Q0 = O;
              r += x(1224) + O + x(1052) + i0 + "; ";
            }
            if (ax) r += " " + s0 + " ";
            else {
              if (e0 && e0[f0]) {
                r += " if ( " + Q0 + x(1427), V && (r += x(944) + l + x(449) + e[x(497)][x(1265)](f0) + x(1812)), r += x(1577) + y + x(1494);
                var A = e[x(1617)], Q = f, O0 = e.util[x(1265)](f0);
                e[x(2245)][x(2133)] && (e[x(1617)] = e.util.getPath(A, f0, e.opts[x(1093)])), f = e.errSchemaPath + "/required";
                var X = X || [];
                X[x(1251)](r), r = "", e[x(432)] !== !1 ? (r += " { keyword: '" + x(2276) + x(1990) + e.errorPath + " , schemaPath: " + e.util[x(591)](f) + " , params: { missingProperty: '" + O0 + x(1619), e.opts[x(2275)] !== !1 && (r += x(917), e[x(2245)][x(2133)] ? r += "is a required property" : r += x(2005) + O0 + "\\'", r += "' "), e[x(2245)].verbose && (r += x(923) + u + x(2449) + e[x(1992)] + x(2263) + l + " "), r += x(316)) : r += x(1603);
                var W = r;
                r = X[x(1088)](), !e[x(1956)] && d ? e.async ? r += x(2156) + W + x(1694) : r += x(1614) + W + x(1012) : r += x(2047) + W + x(1005), f = Q, e[x(1617)] = A, r += x(1975);
              } else d ? (r += x(1749) + Q0 + x(1427), V && (r += x(944) + l + x(449) + e[x(497)][x(1265)](f0) + x(1812)), r += x(1577) + y + x(2004)) : (r += x(943) + Q0 + " !== undefined ", V && (r += x(1653) + l + x(449) + e[x(497)][x(1265)](f0) + x(1812)), r += x(461));
              r += " " + s0 + x(316);
            }
          }
          d && (r += x(943) + y + x(1577), m += "}");
        }
    }
    if (j.length) {
      var z0 = j;
      if (z0)
        for (var k0, Y0 = -1, Rx = z0[x(1586)] - 1; Y0 < Rx; ) {
          k0 = z0[Y0 += 1];
          var b0 = R[k0];
          if (e[x(2245)][x(1444)] ? typeof b0 == x(1395) && Object[x(1001)](b0).length > 0 || b0 === !1 : e.util[x(1485)](b0, e.RULES.all)) {
            h[x(970)] = b0, h.schemaPath = e[x(1992)] + x(2003) + e[x(497)].getProperty(k0), h[x(1414)] = e[x(1414)] + "/patternProperties/" + e[x(497)].escapeFragment(k0), V ? r += " " + P + x(1052) + P + " || Object.keys(" + l + "); for (var " + E + x(2489) + E + "<" + P + ".length; " + E + x(2157) + w + x(1052) + P + "[" + E + x(1202) : r += x(2382) + w + x(2146) + l + x(1577), r += x(943) + e[x(628)](k0) + x(732) + w + x(532), h[x(1617)] = e[x(497)][x(602)](e[x(1617)], w, e[x(2245)][x(1093)]);
            var i0 = l + "[" + w + "]";
            h[x(2530)][q] = w;
            var s0 = e.validate(h);
            h[x(1479)] = J, e[x(497)][x(1130)](s0, O) < 2 ? r += " " + e[x(497)].varReplace(s0, O, i0) + " " : r += x(1224) + O + " = " + i0 + "; " + s0 + " ", d && (r += x(2272) + y + x(1449)), r += " } ", d && (r += " else " + y + x(338)), r += " }  ", d && (r += x(943) + y + ") { ", m += "}");
          }
        }
    }
    return d && (r += " " + m + x(943) + g + x(1239)), r;
  }), vt;
}
var yt, hs;
function Uo() {
  return hs || (hs = 1, yt = function(e, t, s) {
    const x = B;
    var r = " ", a = e[x(1065)], o = e[x(934)], c = e.schema[t], u = e[x(1992)] + e[x(497)][x(332)](t), f = e[x(1414)] + "/" + t, d = !e[x(2245)].allErrors, l = x(1024) + (o || ""), g = "errs__" + a, h = e[x(497)][x(526)](e), m = "";
    h[x(1065)]++;
    var y = x(1100) + h[x(1065)];
    if (r += x(2438) + g + x(683), e[x(2245)][x(1444)] ? typeof c == "object" && Object.keys(c)[x(1586)] > 0 || c === !1 : e[x(497)][x(1485)](c, e[x(1944)].all)) {
      h.schema = c, h.schemaPath = u, h[x(1414)] = f;
      var w = x(635) + a, E = x(1678) + a, q = "i" + a, O = x(2059) + w + " + '", P = h.dataLevel = e[x(934)] + 1, S = x(1024) + P, R = x(1859) + a, j = e[x(2245)][x(448)], D = e[x(1479)];
      j && (r += " var " + R + x(553)), j ? r += " " + R + x(1052) + R + x(689) + l + "); for (var " + E + "=0; " + E + "<" + R + ".length; " + E + x(2157) + w + x(1052) + R + "[" + E + "]; " : r += x(2382) + w + x(2146) + l + x(1577), r += " var startErrs" + a + x(1328);
      var M = w, N = e[x(1956)];
      e[x(1956)] = h[x(1956)] = !0;
      var I = e[x(1017)](h);
      h[x(1479)] = D, e[x(497)][x(1130)](I, S) < 2 ? r += " " + e.util.varReplace(I, S, M) + " " : r += x(1224) + S + x(1052) + M + "; " + I + " ", e.compositeRule = h[x(1956)] = N, r += x(2272) + y + x(324) + q + x(1837) + a + "; " + q + x(453) + q + "++) { vErrors[" + q + x(765) + w + x(1161), e[x(432)] !== !1 ? (r += x(1260) + x(1084) + x(1990) + e.errorPath + x(1524) + e.util[x(591)](f) + " , params: { propertyName: '" + O + x(1619), e[x(2245)][x(2275)] !== !1 && (r += x(1131) + O + x(1778)), e.opts[x(2262)] && (r += x(923) + u + " , parentSchema: validate.schema" + e[x(1992)] + " , data: " + l + " "), r += x(316)) : r += x(1603), r += x(1005), !e[x(1956)] && d && (e[x(646)] ? r += x(1558) : r += x(1706)), d && (r += x(2137)), r += " } }";
    }
    return d && (r += " " + m + " if (" + g + x(1239)), r;
  }), yt;
}
var bt, ps;
function Vo() {
  return ps || (ps = 1, bt = function(e, t, s) {
    const x = B;
    var r = " ", a = e[x(1065)], o = e.dataLevel, c = e[x(970)][t], u = e.schemaPath + e[x(497)].getProperty(t), f = e[x(1414)] + "/" + t, d = !e[x(2245)][x(464)], l = "data" + (o || ""), g = "valid" + a, h = e.opts[x(1343)] && c && c.$data;
    h && (r += x(1538) + a + x(1052) + e[x(497)][x(2067)](c.$data, o, e[x(2530)]) + "; ");
    var m = x(970) + a;
    if (!h)
      if (c[x(1586)] < e[x(2245)][x(879)] && e[x(970)][x(2467)] && Object[x(1001)](e[x(970)].properties).length) {
        var P = [], y = c;
        if (y)
          for (var w, E = -1, q = y[x(1586)] - 1; E < q; ) {
            w = y[E += 1];
            var O = e[x(970)][x(2467)][w];
            !(O && (e[x(2245)][x(1444)] ? typeof O == "object" && Object.keys(O)[x(1586)] > 0 || O === !1 : e.util[x(1485)](O, e[x(1944)][x(1576)]))) && (P[P.length] = w);
          }
      } else var P = c;
    if (h || P[x(1586)]) {
      var S = e[x(1617)], R = h || P.length >= e.opts[x(879)], j = e[x(2245)][x(448)];
      if (d)
        if (r += x(2255) + a + "; ", R) {
          !h && (r += x(1224) + m + " = validate.schema" + u + "; ");
          var D = "i" + a, M = x(970) + a + "[" + D + "]", N = x(2059) + M + " + '";
          e[x(2245)][x(2133)] && (e.errorPath = e.util[x(602)](S, M, e.opts.jsonPointers)), r += " var " + g + x(338), h && (r += x(1025) + a + x(790) + g + x(910) + a + x(1980) + g + x(898)), r += " for (var " + D + " = 0; " + D + x(2555) + m + x(1608) + D + x(1530) + g + x(1052) + l + "[" + m + "[" + D + x(2043), j && (r += x(1653) + l + ", " + m + "[" + D + "]) "), r += x(354) + g + x(1895), h && (r += x(1035)), r += x(1210) + g + x(1516);
          var I = I || [];
          I[x(1251)](r), r = "", e[x(432)] !== !1 ? (r += x(1260) + x(2276) + "' , dataPath: (dataPath || '') + " + e[x(1617)] + x(1524) + e[x(497)].toQuotedString(f) + x(634) + N + x(1619), e[x(2245)][x(2275)] !== !1 && (r += x(917), e[x(2245)][x(2133)] ? r += "is a required property" : r += x(2005) + N + "\\'", r += "' "), e.opts[x(2262)] && (r += x(923) + u + " , parentSchema: validate.schema" + e[x(1992)] + x(2263) + l + " "), r += x(316)) : r += " {} ";
          var U = r;
          r = I.pop(), !e[x(1956)] && d ? e[x(646)] ? r += x(2156) + U + x(1694) : r += x(1614) + U + x(1012) : r += x(2047) + U + x(1005), r += x(1975);
        } else {
          r += x(1749);
          var H = P;
          if (H)
            for (var V, D = -1, J = H[x(1586)] - 1; D < J; ) {
              V = H[D += 1], D && (r += " || ");
              var t0 = e.util.getProperty(V), e0 = l + t0;
              r += x(1453) + e0 + " === undefined ", j && (r += " || ! Object.prototype.hasOwnProperty.call(" + l + x(449) + e.util[x(1265)](V) + x(1812)), r += x(1241) + a + " = " + e[x(497)][x(591)](e[x(2245)][x(1093)] ? V : t0) + x(2329);
            }
          r += ") {  ";
          var M = "missing" + a, N = x(2059) + M + x(2526);
          e.opts[x(2133)] && (e.errorPath = e[x(2245)][x(1093)] ? e.util[x(602)](S, M, !0) : S + x(2339) + M);
          var I = I || [];
          I[x(1251)](r), r = "", e[x(432)] !== !1 ? (r += " { keyword: '" + x(2276) + x(1990) + e[x(1617)] + x(1524) + e[x(497)][x(591)](f) + x(634) + N + x(1619), e[x(2245)][x(2275)] !== !1 && (r += x(917), e.opts._errorDataPathProperty ? r += x(1835) : r += x(2005) + N + "\\'", r += "' "), e.opts[x(2262)] && (r += x(923) + u + x(2449) + e[x(1992)] + x(2263) + l + " "), r += " } ") : r += x(1603);
          var U = r;
          r = I.pop(), !e[x(1956)] && d ? e[x(646)] ? r += x(2156) + U + "]); " : r += " validate.errors = [" + U + x(1012) : r += " var err = " + U + ";  if (vErrors === null) vErrors = [err]; else vErrors.push(err); errors++; ", r += x(1975);
        }
      else if (R) {
        !h && (r += x(1224) + m + x(2129) + u + "; ");
        var D = "i" + a, M = "schema" + a + "[" + D + "]", N = x(2059) + M + x(2526);
        e[x(2245)][x(2133)] && (e[x(1617)] = e[x(497)][x(602)](S, M, e.opts[x(1093)])), h && (r += x(943) + m + x(1236) + m + x(2206), e[x(432)] !== !1 ? (r += x(1260) + "required" + x(1990) + e[x(1617)] + x(1524) + e[x(497)].toQuotedString(f) + x(634) + N + x(1619), e[x(2245)].messages !== !1 && (r += x(917), e[x(2245)][x(2133)] ? r += x(1835) : r += x(2005) + N + "\\'", r += "' "), e[x(2245)][x(2262)] && (r += x(923) + u + x(2449) + e[x(1992)] + x(2263) + l + " "), r += x(316)) : r += " {} ", r += x(2394) + m + " !== undefined) { "), r += x(2382) + D + x(2377) + D + x(2555) + m + x(1608) + D + x(899) + l + "[" + m + "[" + D + "]] === undefined ", j && (r += x(944) + l + ", " + m + "[" + D + "]) "), r += x(1194), e[x(432)] !== !1 ? (r += x(1260) + "required' , dataPath: (dataPath || '') + " + e[x(1617)] + x(1524) + e.util[x(591)](f) + x(634) + N + x(1619), e.opts[x(2275)] !== !1 && (r += x(917), e[x(2245)][x(2133)] ? r += x(1835) : r += "should have required property \\'" + N + "\\'", r += "' "), e[x(2245)][x(2262)] && (r += " , schema: validate.schema" + u + x(2449) + e[x(1992)] + " , data: " + l + " "), r += x(316)) : r += x(1603), r += x(1258), h && (r += x(1035));
      } else {
        var u0 = P;
        if (u0)
          for (var V, l0 = -1, f0 = u0[x(1586)] - 1; l0 < f0; ) {
            V = u0[l0 += 1];
            var t0 = e[x(497)][x(332)](V), N = e[x(497)].escapeQuotes(V), e0 = l + t0;
            e[x(2245)][x(2133)] && (e[x(1617)] = e[x(497)][x(2164)](S, V, e[x(2245)][x(1093)])), r += " if ( " + e0 + " === undefined ", j && (r += " || ! Object.prototype.hasOwnProperty.call(" + l + ", '" + e[x(497)].escapeQuotes(V) + x(1812)), r += ") {  var err =   ", e[x(432)] !== !1 ? (r += x(1260) + x(2276) + "' , dataPath: (dataPath || '') + " + e[x(1617)] + x(1524) + e.util.toQuotedString(f) + x(634) + N + x(1619), e[x(2245)][x(2275)] !== !1 && (r += " , message: '", e[x(2245)][x(2133)] ? r += x(1835) : r += x(2005) + N + "\\'", r += "' "), e[x(2245)][x(2262)] && (r += x(923) + u + x(2449) + e[x(1992)] + x(2263) + l + " "), r += x(316)) : r += x(1603), r += ";  if (vErrors === null) vErrors = [err]; else vErrors.push(err); errors++; } ";
          }
      }
      e.errorPath = S;
    } else d && (r += x(985));
    return r;
  }), bt;
}
var wt, ms;
function Wo() {
  return ms || (ms = 1, wt = function(e, t, s) {
    const x = B;
    var r = " ", a = e[x(1065)], o = e[x(934)], c = e[x(970)][t], u = e[x(1992)] + e[x(497)][x(332)](t), f = e[x(1414)] + "/" + t, d = !e[x(2245)][x(464)], l = x(1024) + (o || ""), g = "valid" + a, h = e.opts[x(1343)] && c && c.$data, m;
    if (h ? (r += x(1538) + a + " = " + e.util[x(2067)](c[x(1343)], o, e[x(2530)]) + "; ", m = "schema" + a) : m = c, (c || h) && e.opts[x(551)] !== !1) {
      h && (r += " var " + g + x(1113) + m + x(297) + m + x(790) + g + " = true; else if (typeof " + m + x(1314) + g + x(835)), r += x(2361) + l + ".length , " + g + " = true , j; if (i > 1) { ";
      var y = e[x(970)].items && e[x(970)][x(300)].type, w = Array.isArray(y);
      if (!y || y == x(1395) || y == "array" || w && (y[x(1563)](x(1395)) >= 0 || y.indexOf("array") >= 0)) r += x(1254) + l + "[i], " + l + x(1569) + g + x(698);
      else {
        r += x(1227) + l + x(1460);
        var E = "checkDataType" + (w ? "s" : "");
        r += x(943) + e[x(497)][E](y, x(711), e[x(2245)][x(2226)], !0) + x(1133), w && (r += x(2341)), r += x(433) + g + x(740);
      }
      r += x(316), h && (r += x(1035)), r += x(2272) + g + x(1516);
      var q = q || [];
      q[x(1251)](r), r = "", e[x(432)] !== !1 ? (r += " { keyword: 'uniqueItems' , dataPath: (dataPath || '') + " + e[x(1617)] + " , schemaPath: " + e[x(497)][x(591)](f) + x(2104), e[x(2245)][x(2275)] !== !1 && (r += " , message: 'should NOT have duplicate items (items ## ' + j + ' and ' + i + ' are identical)' "), e[x(2245)][x(2262)] && (r += x(2128), h ? r += x(2551) + u : r += "" + c, r += x(1868) + e[x(1992)] + x(2263) + l + " "), r += " } ") : r += " {} ";
      var O = r;
      r = q.pop(), !e[x(1956)] && d ? e[x(646)] ? r += x(2156) + O + "]); " : r += " validate.errors = [" + O + "]; return false; " : r += x(2047) + O + x(1005), r += x(316), d && (r += x(738));
    } else d && (r += x(2124));
    return r;
  }), wt;
}
var St, gs;
function Bo() {
  return gs || (gs = 1, St = { $ref: Co(), allOf: Io(), anyOf: Ro(), $comment: Fo(), const: No(), contains: qo(), dependencies: Oo(), enum: Ao(), format: To(), if: Do(), items: jo(), maximum: ts(), minimum: ts(), maxItems: ss(), minItems: ss(), maxLength: as(), minLength: as(), maxProperties: os(), minProperties: os(), multipleOf: Mo(), not: Lo(), oneOf: $o(), pattern: zo(), properties: Ho(), propertyNames: Uo(), required: Vo(), uniqueItems: Wo(), validate: ca() }), St;
}
var Et, vs;
function Zo() {
  const i = n;
  if (vs) return Et;
  vs = 1;
  var e = Bo(), t = Zx()[i(973)];
  return Et = function() {
    const x = i;
    var r = [{ type: x(369), rules: [{ maximum: ["exclusiveMaximum"] }, { minimum: [x(544)] }, "multipleOf", x(1156)] }, { type: x(342), rules: ["maxLength", x(1844), x(399), x(1156)] }, { type: "array", rules: ["maxItems", x(1838), x(300), x(528), x(551)] }, { type: "object", rules: ["maxProperties", "minProperties", x(2276), x(1413), x(1084), { properties: [x(393), x(1404)] }] }, { rules: ["$ref", x(1423), x(511), x(1747), x(437), x(2481), x(1905), "if"] }], a = ["type", x(2241)], o = [x(679), "$id", "id", x(1343), x(1363), x(2081), "description", x(664), x(2323), "examples", x(2486), x(981), x(819), "contentEncoding", x(836), x(2055), x(653)], c = [x(369), x(586), "string", x(1634), "object", x(320), "null"];
    return r[x(1576)] = t(a), r.types = t(c), r[x(1562)](function(u) {
      const f = x;
      u[f(1157)] = u[f(1157)].map(function(d) {
        const l = f;
        var g;
        if (typeof d == l(1395)) {
          var h = Object[l(1001)](d)[0];
          g = d[h], d = h, g.forEach(function(y) {
            const w = l;
            a.push(y), r[w(1576)][y] = !0;
          });
        }
        a[l(1251)](d);
        var m = r[l(1576)][d] = { keyword: d, code: e[d], implements: g };
        return m;
      }), r[f(1576)][f(2241)] = { keyword: "$comment", code: e.$comment }, u[f(1594)] && (r[f(1716)][u.type] = u);
    }), r[x(333)] = t(a[x(576)](o)), r[x(674)] = {}, r;
  }, Et;
}
var kt, ys;
function Ko() {
  const i = n;
  if (ys) return kt;
  ys = 1;
  var e = [i(2387), "maximum", "exclusiveMaximum", "minimum", "exclusiveMinimum", i(502), i(1844), i(399), i(836), i(537), i(1838), i(551), i(1735), i(2232), i(2276), i(393), i(511), i(1156), i(1423)];
  return kt = function(t, s) {
    const x = i;
    for (var r = 0; r < s[x(1586)]; r++) {
      t = JSON[x(1938)](JSON[x(2325)](t));
      var a = s[r].split("/"), o = t, c;
      for (c = 1; c < a[x(1586)]; c++) o = o[a[c]];
      for (c = 0; c < e[x(1586)]; c++) {
        var u = e[c], f = o[u];
        f && (o[u] = { anyOf: [f, { $ref: x(2009) }] });
      }
    }
    return t;
  }, kt;
}
var Pt, bs;
function Jo() {
  const i = n;
  if (bs) return Pt;
  bs = 1;
  var e = nr()[i(1377)];
  Pt = t;
  function t(s, x, r) {
    const a = i;
    var o = this;
    if (typeof this[a(1252)][a(794)] != a(730)) throw new Error("options.loadSchema should be a function");
    typeof x == a(730) && (r = x, x = void 0);
    var c = u(s)[a(2055)](function() {
      var l = o[a(1884)](s, void 0, x);
      return l.validate || f(l);
    });
    return r && c[a(2055)](function(d) {
      r(null, d);
    }, r), c;
    function u(d) {
      const l = a;
      var g = d[l(679)];
      return g && !o[l(1207)](g) ? t.call(o, { $ref: g }, !0) : Promise[l(1666)]();
    }
    function f(d) {
      try {
        return o._compile(d);
      } catch (g) {
        if (g instanceof e) return l(g);
        throw g;
      }
      function l(g) {
        const h = B;
        var m = g[h(1197)];
        if (E(m)) throw new Error(h(1365) + m + " is loaded but " + g.missingRef + " cannot be resolved");
        var y = o[h(1950)][m];
        return !y && (y = o[h(1950)][m] = o[h(1252)].loadSchema(m), y[h(2055)](w, w)), y[h(2055)](function(q) {
          const O = h;
          if (!E(m)) return u(q)[O(2055)](function() {
            E(m) || o.addSchema(q, m, void 0, x);
          });
        })[h(2055)](function() {
          return f(d);
        });
        function w() {
          const q = h;
          delete o[q(1950)][m];
        }
        function E(q) {
          const O = h;
          return o[O(2540)][q] || o[O(2524)][q];
        }
      }
    }
  }
  return Pt;
}
var Ct, ws;
function Qo() {
  return ws || (ws = 1, Ct = function(e, t, s) {
    const x = B;
    var r = " ", a = e.level, o = e[x(934)], c = e[x(970)][t], u = e[x(1992)] + e[x(497)].getProperty(t), f = e.errSchemaPath + "/" + t, d = !e[x(2245)][x(464)], l, g = "data" + (o || ""), h = x(1100) + a, m = x(561) + a, y = e.opts[x(1343)] && c && c.$data, w;
    y ? (r += x(1538) + a + x(1052) + e[x(497)][x(2067)](c.$data, o, e[x(2530)]) + "; ", w = x(970) + a) : w = c;
    var E = this, q = x(2326) + a, O = E[x(2326)], P = "", S, R, j, D, M;
    if (y && O[x(1343)]) {
      M = x(684) + a;
      var N = O[x(2475)];
      r += " var " + q + " = RULES.custom['" + t + x(853) + M + x(1052) + q + x(866);
    } else {
      if (D = e[x(2266)](E, c, e[x(970)], e), !D) return;
      w = x(2551) + u, M = D[x(1256)], S = O[x(1623)], R = O[x(1978)], j = O[x(336)];
    }
    var I = M + x(2518), U = "i" + a, H = x(972) + a, V = O[x(646)];
    if (V && !e[x(646)]) throw new Error(x(1326));
    if (!(R || j) && (r += "" + I + x(974)), r += "var " + m + x(2040) + h + ";", y && O[x(1343)] && (P += "}", r += x(943) + w + x(1318) + h + " = true; } else { ", N && (P += "}", r += " " + h + x(1052) + q + x(1737) + w + x(641) + h + x(1577))), R) O.statements ? r += " " + D[x(1017)] + " " : r += " " + h + x(1052) + D[x(1017)] + "; ";
    else if (j) {
      var J = e.util[x(526)](e), P = "";
      J[x(1065)]++;
      var t0 = x(1100) + J[x(1065)];
      J[x(970)] = D.validate, J.schemaPath = "";
      var e0 = e[x(1956)];
      e[x(1956)] = J[x(1956)] = !0;
      var u0 = e[x(1017)](J)[x(969)](/validate\.schema/g, M);
      e[x(1956)] = J[x(1956)] = e0, r += " " + u0;
    } else {
      var l0 = l0 || [];
      l0[x(1251)](r), r = "", r += "  " + M + x(838), e.opts.passContext ? r += x(1713) : r += "self", S || O[x(970)] === !1 ? r += x(1724) + g + " " : r += x(1724) + w + " , " + g + " , validate.schema" + e[x(1992)] + " ", r += x(381), e.errorPath != '""' && (r += x(2339) + e[x(1617)]);
      var f0 = o ? "data" + (o - 1 || "") : x(2075), y0 = o ? e[x(2530)][o] : "parentDataProperty";
      r += x(1724) + f0 + x(1724) + y0 + x(1618);
      var F0 = r;
      r = l0[x(1088)](), O.errors === !1 ? (r += " " + h + x(1052), V && (r += x(465)), r += "" + F0 + "; ") : V ? (I = "customErrors" + a, r += x(1224) + I + x(2295) + h + x(2142) + F0 + x(660) + h + x(1275) + I + x(1627)) : r += " " + I + " = null; " + h + x(1052) + F0 + "; ";
    }
    if (O[x(1077)] && (r += x(943) + f0 + ") " + g + x(1052) + f0 + "[" + y0 + "];"), r += "" + P, O[x(1100)]) d && (r += x(2124));
    else {
      r += " if ( ", O[x(1100)] === void 0 ? (r += " !", j ? r += "" + t0 : r += "" + h) : r += " " + !O.valid + " ", r += x(1577), l = E[x(850)];
      var l0 = l0 || [];
      l0[x(1251)](r), r = "";
      var l0 = l0 || [];
      l0[x(1251)](r), r = "", e[x(432)] !== !1 ? (r += " { keyword: '" + (l || x(674)) + x(1990) + e[x(1617)] + " , schemaPath: " + e[x(497)][x(591)](f) + x(922) + E.keyword + x(1619), e[x(2245)].messages !== !1 && (r += x(428) + E[x(850)] + `" keyword validation' `), e.opts.verbose && (r += x(923) + u + x(2449) + e[x(1992)] + " , data: " + g + " "), r += " } ") : r += x(1603);
      var D0 = r;
      r = l0[x(1088)](), !e.compositeRule && d ? e[x(646)] ? r += x(2156) + D0 + x(1694) : r += " validate.errors = [" + D0 + x(1012) : r += x(2047) + D0 + x(1005);
      var k0 = r;
      r = l0[x(1088)](), R ? O[x(709)] ? O[x(709)] != x(1299) && (r += "  for (var " + U + "=" + m + "; " + U + x(453) + U + "++) { var " + H + " = vErrors[" + U + "]; if (" + H + ".dataPath === undefined) " + H + ".dataPath = (dataPath || '') + " + e[x(1617)] + x(1113) + H + x(1397) + H + x(1523) + f + '"; } ', e[x(2245)][x(2262)] && (r += " " + H + x(1642) + w + "; " + H + x(2257) + g + "; "), r += " } ") : O.errors === !1 ? r += " " + k0 + " " : (r += x(943) + m + x(1875) + k0 + x(1757) + U + "=" + m + "; " + U + x(453) + U + x(2157) + H + x(2099) + U + x(2293) + H + x(318) + H + ".dataPath = (dataPath || '') + " + e[x(1617)] + x(1113) + H + x(1397) + H + '.schemaPath = "' + f + '"; } ', e[x(2245)][x(2262)] && (r += " " + H + x(1642) + w + "; " + H + ".data = " + g + "; "), r += x(1297)) : j ? (r += x(1262), e.createErrors !== !1 ? (r += x(1260) + (l || x(674)) + x(1990) + e[x(1617)] + x(1524) + e[x(497)].toQuotedString(f) + " , params: { keyword: '" + E[x(850)] + x(1619), e[x(2245)][x(2275)] !== !1 && (r += x(428) + E[x(850)] + x(1597)), e[x(2245)][x(2262)] && (r += x(923) + u + " , parentSchema: validate.schema" + e[x(1992)] + x(2263) + g + " "), r += x(316)) : r += x(1603), r += ";  if (vErrors === null) vErrors = [err]; else vErrors.push(err); errors++; ", !e[x(1956)] && d && (e[x(646)] ? r += x(1558) : r += x(1706))) : O[x(709)] === !1 ? r += " " + k0 + " " : (r += " if (Array.isArray(" + I + ")) { if (vErrors === null) vErrors = " + I + x(1557) + I + "); errors = vErrors.length;  for (var " + U + "=" + m + "; " + U + x(453) + U + "++) { var " + H + " = vErrors[" + U + x(2293) + H + ".dataPath === undefined) " + H + x(2171) + e[x(1617)] + x(1434) + H + x(1523) + f + x(950), e.opts[x(2262)] && (r += " " + H + ".schema = " + w + "; " + H + ".data = " + g + "; "), r += " } } else { " + k0 + " } "), r += x(316), d && (r += x(738));
    }
    return r;
  }), Ct;
}
const Go = n(1773), Xo = n(1773), Yo = "Core schema meta-schema", _o = { schemaArray: { type: n(1634), minItems: 1, items: { $ref: "#" } }, nonNegativeInteger: { type: n(586), minimum: 0 }, nonNegativeIntegerDefault0: { allOf: [{ $ref: n(2216) }, { default: 0 }] }, simpleTypes: { enum: [n(1634), n(320), n(586), n(1817), n(369), n(1395), "string"] }, stringArray: { type: n(1634), items: { type: n(342) }, uniqueItems: !0, default: [] } }, xc = [n(1395), n(320)], ec = { $id: { type: n(342), format: "uri-reference" }, $schema: { type: "string", format: n(1193) }, $ref: { type: n(342), format: n(1751) }, $comment: { type: n(342) }, title: { type: n(342) }, description: { type: n(342) }, default: !0, readOnly: { type: n(320), default: !1 }, examples: { type: n(1634), items: !0 }, multipleOf: { type: n(369), exclusiveMinimum: 0 }, maximum: { type: n(369) }, exclusiveMaximum: { type: n(369) }, minimum: { type: "number" }, exclusiveMinimum: { type: n(369) }, maxLength: { $ref: "#/definitions/nonNegativeInteger" }, minLength: { $ref: n(1531) }, pattern: { type: "string", format: n(1367) }, additionalItems: { $ref: "#" }, items: { anyOf: [{ $ref: "#" }, { $ref: n(546) }], default: !0 }, maxItems: { $ref: "#/definitions/nonNegativeInteger" }, minItems: { $ref: "#/definitions/nonNegativeIntegerDefault0" }, uniqueItems: { type: n(320), default: !1 }, contains: { $ref: "#" }, maxProperties: { $ref: "#/definitions/nonNegativeInteger" }, minProperties: { $ref: n(1531) }, required: { $ref: n(1947) }, additionalProperties: { $ref: "#" }, definitions: { type: n(1395), additionalProperties: { $ref: "#" }, default: {} }, properties: { type: n(1395), additionalProperties: { $ref: "#" }, default: {} }, patternProperties: { type: n(1395), additionalProperties: { $ref: "#" }, propertyNames: { format: n(1367) }, default: {} }, dependencies: { type: n(1395), additionalProperties: { anyOf: [{ $ref: "#" }, { $ref: "#/definitions/stringArray" }] } }, propertyNames: { $ref: "#" }, const: !0, enum: { type: n(1634), items: !0, minItems: 1, uniqueItems: !0 }, type: { anyOf: [{ $ref: n(675) }, { type: n(1634), items: { $ref: n(675) }, minItems: 1, uniqueItems: !0 }] }, format: { type: n(342) }, contentMediaType: { type: n(342) }, contentEncoding: { type: n(342) }, if: { $ref: "#" }, then: { $ref: "#" }, else: { $ref: "#" }, allOf: { $ref: n(546) }, anyOf: { $ref: n(546) }, oneOf: { $ref: n(546) }, not: { $ref: "#" } }, ua = { $schema: Go, $id: Xo, title: Yo, definitions: _o, type: xc, properties: ec, default: !0 };
var It, Ss;
function tc() {
  const i = n;
  if (Ss) return It;
  Ss = 1;
  var e = ua;
  return It = { $id: i(1816), definitions: { simpleTypes: e.definitions[i(2177)] }, type: "object", dependencies: { schema: [i(1017)], $data: [i(1017)], statements: ["inline"], valid: { not: { required: [i(336)] } } }, properties: { type: e[i(2467)][i(1594)], schema: { type: i(320) }, statements: { type: "boolean" }, dependencies: { type: i(1634), items: { type: i(342) } }, metaSchema: { type: i(1395) }, modifying: { type: i(320) }, valid: { type: "boolean" }, $data: { type: i(320) }, async: { type: i(320) }, errors: { anyOf: [{ type: i(320) }, { const: i(1299) }] } } }, It;
}
var Rt, Es;
function rc() {
  if (Es) return Rt;
  Es = 1;
  var i = /^[a-z_$][a-z0-9_$-]*$/i, e = Qo(), t = tc();
  Rt = { add: s, get: x, remove: r, validate: a };
  function s(o, c) {
    const u = B;
    var f = this[u(1944)];
    if (f[u(333)][o]) throw new Error(u(2357) + o + u(1497));
    if (!i[u(2500)](o)) throw new Error(u(2357) + o + " is not a valid identifier");
    if (c) {
      this.validateKeyword(c, !0);
      var d = c.type;
      if (Array.isArray(d))
        for (var l = 0; l < d[u(1586)]; l++) h(o, d[l], c);
      else h(o, d, c);
      var g = c[u(446)];
      g && (c[u(1343)] && this[u(1252)][u(1343)] && (g = { anyOf: [g, { $ref: u(2009) }] }), c[u(2475)] = this.compile(g, !0));
    }
    f[u(333)][o] = f[u(1576)][o] = !0;
    function h(m, y, w) {
      const E = u;
      for (var q, O = 0; O < f[E(1586)]; O++) {
        var P = f[O];
        if (P.type == y) {
          q = P;
          break;
        }
      }
      !q && (q = { type: y, rules: [] }, f[E(1251)](q));
      var S = { keyword: m, definition: w, custom: !0, code: e, implements: w[E(1519)] };
      q[E(1157)].push(S), f[E(674)][m] = S;
    }
    return this;
  }
  function x(o) {
    const c = B;
    var u = this.RULES[c(674)][o];
    return u ? u[c(2326)] : this[c(1944)][c(333)][o] || !1;
  }
  function r(o) {
    const c = B;
    var u = this[c(1944)];
    delete u[c(333)][o], delete u[c(1576)][o], delete u[c(674)][o];
    for (var f = 0; f < u[c(1586)]; f++)
      for (var d = u[f][c(1157)], l = 0; l < d[c(1586)]; l++)
        if (d[l][c(850)] == o) {
          d[c(748)](l, 1);
          break;
        }
    return this;
  }
  function a(o, c) {
    const u = B;
    a[u(709)] = null;
    var f = this[u(606)] = this[u(606)] || this.compile(t, !0);
    if (f(o)) return !0;
    if (a.errors = f[u(709)], c) throw new Error(u(2021) + this[u(1568)](f[u(709)]));
    return !1;
  }
  return Rt;
}
const sc = n(1773), nc = "https://raw.githubusercontent.com/ajv-validator/ajv/master/lib/refs/data.json#", ac = n(1451), ic = n(1395), oc = [n(1343)], cc = { $data: { type: n(342), anyOf: [{ format: n(1331) }, { format: "json-pointer" }] } }, uc = !1, fc = { $schema: sc, $id: nc, description: ac, type: ic, required: oc, properties: cc, additionalProperties: uc };
var Ft, ks;
function dc() {
  const i = n;
  if (ks) return Ft;
  ks = 1;
  var e = Eo(), t = sr(), s = ko(), x = ia(), r = oa(), a = Po(), o = Zo(), c = Ko(), u = Zx();
  Ft = m, m[i(2173)][i(1017)] = y, m.prototype[i(1623)] = w, m[i(2173)][i(865)] = E, m[i(2173)][i(402)] = q, m[i(2173)][i(2475)] = O, m[i(2173)][i(1207)] = S, m[i(2173)][i(1304)] = D, m[i(2173)][i(2183)] = e0, m[i(2173)].errorsText = t0, m.prototype[i(1884)] = N, m[i(2173)][i(1918)] = I, m.prototype[i(1094)] = Jo();
  var f = rc();
  m[i(2173)][i(1387)] = f[i(1732)], m[i(2173)][i(1765)] = f.get, m[i(2173)][i(1308)] = f[i(1952)], m[i(2173)][i(1913)] = f[i(1017)];
  var d = nr();
  m[i(1615)] = d.Validation, m.MissingRefError = d.MissingRef, m[i(1067)] = c;
  var l = i(1667), g = [i(1361), "useDefaults", "coerceTypes", i(1177)], h = [i(1219)];
  function m(T) {
    const A = i;
    if (!(this instanceof m)) return new m(T);
    T = this[A(1252)] = u[A(526)](T) || {}, k0(this), this._schemas = {}, this[A(2540)] = {}, this._fragments = {}, this._formats = a(T[A(1156)]), this._cache = T[A(1359)] || new s(), this[A(1950)] = {}, this[A(685)] = [], this[A(1944)] = o(), this[A(2037)] = U(T), T.loopRequired = T[A(879)] || 1 / 0, T[A(2391)] == "property" && (T[A(2133)] = !0), T[A(1338)] === void 0 && (T[A(1338)] = r), this[A(2366)] = D0(this), T[A(1356)] && f0(this), T[A(333)] && y0(this), u0(this), typeof T[A(725)] == "object" && this[A(402)](T.meta), T[A(2411)] && this[A(1387)](A(2411), { metaSchema: { type: A(320) } }), l0(this);
  }
  function y(T, A) {
    const L = i;
    var Q;
    if (typeof T == L(342)) {
      if (Q = this.getSchema(T), !Q) throw new Error(L(1086) + T + '"');
    } else {
      var X = this[L(1884)](T);
      Q = X[L(1017)] || this._compile(X);
    }
    var W = Q(A);
    return Q[L(1363)] !== !0 && (this[L(709)] = Q[L(709)]), W;
  }
  function w(T, A) {
    const L = i;
    var Q = this._addSchema(T, void 0, A);
    return Q[L(1017)] || this[L(1918)](Q);
  }
  function E(T, A, L, Q) {
    const X = i;
    if (Array.isArray(T)) {
      for (var W = 0; W < T.length; W++) this[X(865)](T[W], void 0, L, Q);
      return this;
    }
    var G = this[X(2037)](T);
    if (G !== void 0 && typeof G != X(342)) throw new Error(X(1629));
    return A = t[X(406)](A || G), F0(this, A), this[X(2524)][A] = this[X(1884)](T, L, Q, !0), this;
  }
  function q(T, A, L) {
    return this[i(865)](T, A, L, !0), this;
  }
  function O(T, A) {
    const L = i;
    var Q = T[L(679)];
    if (Q !== void 0 && typeof Q != "string") throw new Error(L(692));
    if (Q = Q || this._opts[L(1349)] || P(this), !Q) return this[L(1475)][L(455)](L(2145)), this[L(709)] = null, !0;
    var X = this[L(1017)](Q, T);
    if (!X && A) {
      var W = L(2365) + this[L(1568)]();
      if (this[L(1252)][L(2475)] == L(1919)) this[L(1475)][L(549)](W);
      else throw new Error(W);
    }
    return X;
  }
  function P(T) {
    const A = i;
    var L = T._opts[A(725)];
    return T[A(1252)][A(1349)] = typeof L == A(1395) ? T._getId(L) || L : T.getSchema(l) ? l : void 0, T._opts.defaultMeta;
  }
  function S(T) {
    const A = i;
    var L = j(this, T);
    switch (typeof L) {
      case A(1395):
        return L[A(1017)] || this[A(1918)](L);
      case A(342):
        return this.getSchema(L);
      case A(1319):
        return R(this, T);
    }
  }
  function R(T, A) {
    const L = i;
    var Q = t.schema.call(T, { schema: {} }, A);
    if (Q) {
      var X = Q[L(970)], W = Q[L(707)], G = Q[L(1479)], i0 = e[L(896)](T, X, W, void 0, G);
      return T[L(1178)][A] = new x({ ref: A, fragment: !0, schema: X, root: W, baseId: G, validate: i0 }), i0;
    }
  }
  function j(T, A) {
    const L = i;
    return A = t[L(406)](A), T[L(2524)][A] || T[L(2540)][A] || T[L(1178)][A];
  }
  function D(T) {
    const A = i;
    if (T instanceof RegExp) return M(this, this[A(2524)], T), M(this, this._refs, T), this;
    switch (typeof T) {
      case A(1319):
        return M(this, this._schemas), M(this, this[A(2540)]), this._cache[A(463)](), this;
      case A(342):
        var L = j(this, T);
        return L && this[A(1601)][A(296)](L.cacheKey), delete this[A(2524)][T], delete this[A(2540)][T], this;
      case A(1395):
        var Q = this[A(1252)][A(1338)], X = Q ? Q(T) : T;
        this._cache[A(296)](X);
        var W = this[A(2037)](T);
        W && (W = t[A(406)](W), delete this[A(2524)][W], delete this[A(2540)][W]);
    }
    return this;
  }
  function M(T, A, L) {
    const Q = i;
    for (var X in A) {
      var W = A[X];
      !W[Q(725)] && (!L || L.test(X)) && (T[Q(1601)][Q(296)](W[Q(1332)]), delete A[X]);
    }
  }
  function N(T, A, L, Q) {
    const X = i;
    if (typeof T != "object" && typeof T != X(320)) throw new Error("schema should be object or boolean");
    var W = this[X(1252)][X(1338)], G = W ? W(T) : T, i0 = this._cache[X(2086)](G);
    if (i0) return i0;
    Q = Q || this[X(1252)].addUsedSchema !== !1;
    var s0 = t[X(406)](this[X(2037)](T));
    s0 && Q && F0(this, s0);
    var _ = this[X(1252)][X(2475)] !== !1 && !A, j0;
    _ && !(j0 = s0 && s0 == t[X(406)](T[X(679)])) && this[X(2475)](T, !0);
    var q0 = t[X(659)].call(this, T), $0 = new x({ id: s0, schema: T, localRefs: q0, cacheKey: G, meta: L });
    return s0[0] != "#" && Q && (this[X(2540)][s0] = $0), this[X(1601)].put(G, $0), _ && j0 && this[X(2475)](T, !0), $0;
  }
  function I(T, A) {
    const L = i;
    if (T[L(1037)])
      return T[L(1017)] = W, W[L(970)] = T[L(970)], W[L(709)] = null, W.root = A || W, T[L(970)][L(1363)] === !0 && (W[L(1363)] = !0), W;
    T[L(1037)] = !0;
    var Q;
    T[L(725)] && (Q = this[L(1252)], this[L(1252)] = this[L(2366)]);
    var X;
    try {
      X = e[L(896)](this, T[L(970)], A, T.localRefs);
    } catch (G) {
      throw delete T[L(1017)], G;
    } finally {
      T.compiling = !1, T.meta && (this[L(1252)] = Q);
    }
    return T[L(1017)] = X, T[L(887)] = X[L(887)], T.refVal = X[L(2105)], T[L(707)] = X[L(707)], X;
    function W() {
      const G = L;
      var i0 = T.validate, s0 = i0[G(813)](this, arguments);
      return W[G(709)] = i0[G(709)], s0;
    }
  }
  function U(T) {
    switch (T[i(1290)]) {
      case "auto":
        return J;
      case "id":
        return H;
      default:
        return V;
    }
  }
  function H(T) {
    const A = i;
    return T.$id && this[A(1475)][A(455)](A(499), T[A(1283)]), T.id;
  }
  function V(T) {
    const A = i;
    return T.id && this[A(1475)][A(455)](A(1148), T.id), T[A(1283)];
  }
  function J(T) {
    const A = i;
    if (T.$id && T.id && T[A(1283)] != T.id) throw new Error(A(1010));
    return T[A(1283)] || T.id;
  }
  function t0(T, A) {
    const L = i;
    if (T = T || this[L(709)], !T) return "No errors";
    A = A || {};
    for (var Q = A[L(2483)] === void 0 ? ", " : A[L(2483)], X = A.dataVar === void 0 ? "data" : A.dataVar, W = "", G = 0; G < T[L(1586)]; G++) {
      var i0 = T[G];
      i0 && (W += X + i0[L(909)] + " " + i0[L(2028)] + Q);
    }
    return W[L(2284)](0, -Q[L(1586)]);
  }
  function e0(T, A) {
    const L = i;
    return typeof A == L(342) && (A = new RegExp(A)), this[L(688)][T] = A, this;
  }
  function u0(T) {
    const A = i;
    var L;
    if (T[A(1252)][A(1343)] && (L = fc, T[A(402)](L, L.$id, !0)), T[A(1252)].meta !== !1) {
      var Q = ua;
      T[A(1252)][A(1343)] && (Q = c(Q, h)), T[A(402)](Q, l, !0), T[A(2540)]["http://json-schema.org/schema"] = l;
    }
  }
  function l0(T) {
    const A = i;
    var L = T._opts[A(2063)];
    if (L)
      if (Array[A(752)](L)) T[A(865)](L);
      else
        for (var Q in L) T[A(865)](L[Q], Q);
  }
  function f0(T) {
    const A = i;
    for (var L in T[A(1252)][A(1356)]) {
      var Q = T._opts.formats[L];
      T[A(2183)](L, Q);
    }
  }
  function y0(T) {
    const A = i;
    for (var L in T[A(1252)][A(333)]) {
      var Q = T[A(1252)][A(333)][L];
      T[A(1387)](L, Q);
    }
  }
  function F0(T, A) {
    const L = i;
    if (T[L(2524)][A] || T._refs[A]) throw new Error(L(1079) + A + L(650));
  }
  function D0(T) {
    const A = i;
    for (var L = u[A(526)](T[A(1252)]), Q = 0; Q < g[A(1586)]; Q++) delete L[g[Q]];
    return L;
  }
  function k0(T) {
    const A = i;
    var L = T[A(1252)][A(1475)];
    if (L === !1) T.logger = { log: J0, warn: J0, error: J0 };
    else {
      if (L === void 0 && (L = console), !(typeof L == A(1395) && L[A(1919)] && L.warn && L[A(549)])) throw new Error(A(311));
      T.logger = L;
    }
  }
  function J0() {
  }
  return Ft;
}
var lc = dc();
const hc = aa(lc);
class pc extends go {
  constructor(e, t) {
    const s = n;
    var x;
    super(t), this[s(547)] = e, this._capabilities = (x = t == null ? void 0 : t[s(2541)]) !== null && x !== void 0 ? x : {}, this._instructions = t == null ? void 0 : t[s(1443)], this[s(804)](Jn, (r) => this[s(2024)](r)), this[s(2353)](Qn, () => {
      const r = s;
      var a;
      return (a = this[r(2441)]) === null || a === void 0 ? void 0 : a[r(896)](this);
    });
  }
  [n(1682)](e) {
    const t = n;
    if (this[t(489)]) throw new Error(t(1628));
    this[t(438)] = vo(this[t(438)], e);
  }
  assertCapabilityForMethod(e) {
    const t = n;
    var s, x, r;
    switch (e) {
      case t(1233):
        if (!(!((s = this[t(1054)]) === null || s === void 0) && s[t(400)])) throw new Error(t(2343) + e + ")");
        break;
      case t(2309):
        if (!(!((x = this._clientCapabilities) === null || x === void 0) && x.elicitation)) throw new Error("Client does not support elicitation (required for " + e + ")");
        break;
      case "roots/list":
        if (!(!((r = this._clientCapabilities) === null || r === void 0) && r[t(2404)])) throw new Error("Client does not support listing roots (required for " + e + ")");
        break;
    }
  }
  assertNotificationCapability(e) {
    const t = n;
    switch (e) {
      case t(2038):
        if (!this[t(438)][t(373)]) throw new Error(t(1462) + e + ")");
        break;
      case t(1003):
      case t(2398):
        if (!this[t(438)][t(1865)]) throw new Error(t(1498) + e + ")");
        break;
      case t(1039):
        if (!this[t(438)][t(2119)]) throw new Error(t(1488) + e + ")");
        break;
      case t(638):
        if (!this[t(438)][t(721)]) throw new Error(t(834) + e + ")");
        break;
    }
  }
  [n(1559)](e) {
    const t = n;
    switch (e) {
      case "sampling/createMessage":
        if (!this[t(438)][t(400)]) throw new Error(t(2421) + e + ")");
        break;
      case t(349):
        if (!this[t(438)][t(373)]) throw new Error(t(1462) + e + ")");
        break;
      case t(1712):
      case t(702):
        if (!this[t(438)][t(721)]) throw new Error(t(1690) + e + ")");
        break;
      case t(1493):
      case t(1461):
      case t(2162):
        if (!this[t(438)].resources) throw new Error(t(1904) + e + ")");
        break;
      case t(1705):
      case t(1590):
        if (!this[t(438)][t(2119)]) throw new Error("Server does not support tools (required for " + e + ")");
        break;
    }
  }
  async [n(2024)](e) {
    const t = n, s = e[t(708)][t(1483)];
    return this[t(1054)] = e[t(708)][t(2541)], this._clientVersion = e[t(708)].clientInfo, { protocolVersion: hi[t(1101)](s) ? s : zn, capabilities: this[t(2144)](), serverInfo: this[t(547)], ...this[t(1089)] && { instructions: this._instructions } };
  }
  [n(2440)]() {
    return this._clientCapabilities;
  }
  [n(420)]() {
    return this[n(535)];
  }
  [n(2144)]() {
    return this._capabilities;
  }
  async [n(443)]() {
    const e = n;
    return this.request({ method: e(443) }, Vt);
  }
  async [n(629)](e, t) {
    const s = n;
    return this[s(1478)]({ method: s(1233), params: e }, ra, t);
  }
  async elicitInput(e, t) {
    const s = n, x = await this[s(1478)]({ method: s(2309), params: e }, sa, t);
    if (x[s(2282)] === s(1357) && x[s(2219)]) try {
      const r = new hc(), a = r[s(1623)](e[s(815)]);
      if (!a(x[s(2219)])) throw new Ax(vx[s(2392)], s(617) + r[s(1568)](a.errors));
    } catch (r) {
      throw r instanceof Ax ? r : new Ax(vx[s(1063)], s(1051) + r);
    }
    return x;
  }
  async [n(2296)](e, t) {
    const s = n;
    return this.request({ method: s(2114), params: e }, na, t);
  }
  async [n(1822)](e) {
    const t = n;
    return this[t(504)]({ method: t(2038), params: e });
  }
  async [n(947)](e) {
    return this[n(504)]({ method: "notifications/resources/updated", params: e });
  }
  async [n(729)]() {
    return this[n(504)]({ method: "notifications/resources/list_changed" });
  }
  async sendToolListChanged() {
    return this[n(504)]({ method: "notifications/tools/list_changed" });
  }
  async sendPromptListChanged() {
    const e = n;
    return this[e(504)]({ method: e(638) });
  }
}
var Sn;
class mc {
  constructor() {
    c0(this, "queue", []);
    c0(this, Sn, []);
  }
  push(e) {
    const t = n;
    this[t(1450)][t(1251)](e), this.listeners[t(1562)]((s) => s(e));
  }
  [(Sn = n(2150), n(2212))](e) {
    const t = n;
    return this.queue[t(275)]((s) => s.params[t(2485)] === e);
  }
  [n(2058)](e) {
    const t = n;
    this[t(1450)] = this.queue[t(275)]((s) => s[t(708)][t(2485)] !== e);
  }
  [n(1203)](e) {
    const t = n;
    this[t(2150)][t(1251)](e);
  }
  [n(1124)](e) {
    const t = n, s = this[t(2150)][t(1563)](e);
    s !== -1 && this.listeners.splice(s, 1);
  }
}
class gc {
  constructor(e) {
    c0(this, "protocol");
    const t = n;
    this[t(2091)] = e;
  }
  sendStreamData(e, t) {
    const s = n;
    this.protocol[s(504)]({ method: s(1834), params: { requestId: e, data: t, error: null, finished: !1 } });
  }
  [n(996)](e) {
    const t = n;
    this[t(2091)][t(504)]({ method: t(1834), params: { requestId: e, data: null, error: null, finished: !0 } });
  }
  [n(384)](e) {
    const t = n;
    this.protocol[t(504)]({ method: "sdppp/streamResponse", params: { requestId: e, data: null, error: t(2054), finished: !0 } });
  }
  [n(1650)](e, t) {
    const s = n;
    this[s(2091)].notification({ method: s(1834), params: { requestId: e, data: null, error: t, finished: !0 } });
  }
}
var En;
class vc {
  constructor(e, t) {
    c0(this, En);
    c0(this, "runningRequests");
    const s = n;
    this[s(870)] = e, this.runningRequests = t;
  }
  async [(En = n(870), n(2512))](e, t, s, x, r) {
    const a = n;
    try {
      await this.processHandlerStream(e, t, s, x, r);
    } catch (o) {
      this[a(870)][a(1650)](e, (o == null ? void 0 : o[a(2028)]) || String(o));
    } finally {
      this[a(2090)][a(1574)](e);
    }
  }
  async [n(2380)](e, t, s, x, r) {
    const a = n;
    for await (const o of t(s, x, r.signal)) {
      if (r.signal[a(2507)]) {
        this[a(870)].sendAbortedResponse(e);
        return;
      }
      this[a(870)][a(2098)](e, o);
    }
    r[a(1355)][a(2507)] ? this[a(870)][a(384)](e) : this[a(870)][a(996)](e);
  }
}
var kn, Pn;
class yc {
  constructor(e, t) {
    c0(this, Pn);
    c0(this, kn);
    const s = n;
    this.protocol = e, this[s(1660)] = t;
  }
  validateActionRequest(e) {
    const t = n;
    if (e != null && e[t(2507)]) throw new Error(t(2054));
  }
  async [(Pn = n(2091), kn = n(1660), n(542))](e) {
    const t = n;
    return (await this[t(2091)][t(1478)]({ method: t(894), params: { action: e[t(2282)], data: e.data } }, F({ requestId: C() })))[t(2485)];
  }
  [n(1764)](e) {
    const t = n, s = this[t(1660)][t(2212)](e).map((x) => ({ data: x.params.data, error: x.params[t(549)], finished: x[t(708)][t(572)] }));
    return this.notificationQueue[t(2058)](e), s;
  }
  [n(355)]() {
    return { resolve: null, finished: !1, aborted: !1 };
  }
  [n(2271)](e, t, s, x) {
    const r = n, a = this[r(417)](e, t, s), o = this[r(1492)](e, s);
    return this.notificationQueue[r(1203)](a), x == null || x[r(886)](r(846), o), { onNotification: a, onAbort: o };
  }
  [n(417)](e, t, s) {
    const x = n, r = F({ method: a0("sdppp/streamResponse"), params: F({ requestId: C(), data: Z0(), error: C()[x(2411)](), finished: d0() }) });
    return (a) => {
      const o = x, c = r[o(527)](a);
      if (!c[o(2462)] || c[o(1024)].params[o(2485)] !== e) return;
      const { data: u, error: f, finished: d } = c[o(1024)][o(708)];
      t[o(1251)]({ data: u, error: f, finished: d }), s[o(1666)] && (s[o(1666)](), s[o(1666)] = null);
    };
  }
  createAbortHandler(e, t) {
    return async () => {
      const s = B;
      if (!t[s(2507)]) {
        t[s(2507)] = !0;
        try {
          await this[s(2091)][s(1478)]({ method: s(2022), params: { requestId: e } }, F({ success: d0() }));
        } catch {
        }
        t[s(572)] = !0, t[s(1666)] && (t[s(1666)](), t.resolve = null);
      }
    };
  }
  createAsyncIterator(e, t, s, x) {
    const r = n, a = this;
    return { async *[Symbol[r(1223)]]() {
      const o = r, c = a[o(2271)](s, e, t, x);
      try {
        yield* a[o(1647)](e, t, x);
      } finally {
        a.cleanupStreamHandlers(s, c, x);
      }
    } };
  }
  async *[n(1647)](e, t, s) {
    const x = n;
    for (; !t[x(572)] && !t.aborted; ) {
      if (s != null && s.aborted && !t.aborted) {
        t[x(2507)] = !0;
        break;
      }
      if (e[x(1586)] === 0) {
        await new Promise((r) => {
          const a = x;
          t[a(1666)] = r;
        });
        continue;
      }
      yield* this.processQueueItems(e, t);
    }
    if (t[x(2507)]) throw new Error(x(2054));
  }
  *[n(1565)](e, t) {
    const s = n;
    for (; e[s(1586)] > 0; ) {
      const x = e[s(1002)]();
      if (!x) continue;
      const { data: r, error: a, finished: o } = x;
      if (a) throw new Error(a);
      if (o) {
        t[s(572)] = !0;
        break;
      }
      yield r;
    }
  }
  [n(2062)](e, t, s) {
    const x = n;
    this.notificationQueue[x(1124)](t[x(1736)]), s == null || s[x(2502)](x(846), t[x(1953)]), this[x(1660)].removeByRequestId(e);
  }
}
var Cn, In, Rn, Fn, Nn;
class bc {
  constructor(e) {
    c0(this, Nn, /* @__PURE__ */ new Map());
    c0(this, "broadcastHandlers", /* @__PURE__ */ new Map());
    c0(this, "requestIdSeq", 1);
    c0(this, "runningRequests", /* @__PURE__ */ new Map());
    c0(this, Fn);
    c0(this, Rn, new mc());
    c0(this, In);
    c0(this, "actionExecutor");
    c0(this, Cn);
    const t = n;
    this[t(2091)] = e, this[t(870)] = new gc(e), this[t(2458)] = new vc(this[t(870)], this[t(2090)]), this[t(1182)] = new yc(e, this[t(1660)]), this[t(1076)](), this[t(1366)](), this.setupStreamRequestHandler(), this[t(600)]();
  }
  [(Nn = n(2476), Fn = n(2091), Rn = n(1660), In = n(870), Cn = n(1182), n(1076))]() {
    const e = n, t = F({ method: a0(e(1834)), params: F({ requestId: C(), data: Z0(), error: C()[e(2411)](), finished: d0() }) });
    this.protocol[e(2353)](t, (s) => this[e(1660)][e(1251)](s));
  }
  [n(1366)]() {
    const e = n, t = F({ method: a0(e(2022)), params: F({ requestId: C() }) });
    this[e(2091)][e(804)](t, async (s, x) => {
      const r = e, { requestId: a } = s[r(708)], o = this[r(2090)].get(a);
      return o && (o[r(846)](), this[r(2090)][r(1574)](a)), { success: !0 };
    });
  }
  [n(584)]() {
    const e = n, t = F({ method: a0(e(894)), params: F({ action: C(), data: Z0() }) });
    this.protocol[e(804)](t, async (s, x) => {
      const r = e, a = r(825) + this[r(940)]++, o = this.actionHandlers[r(2086)](s.params[r(2282)]);
      if (!o) throw new Error("No handler for action: " + s[r(708)][r(2282)]);
      const c = new AbortController();
      return this[r(2090)][r(1396)](a, c), this[r(2458)].executeHandlerAsync(a, o, s.params, x, c), { requestId: a };
    });
  }
  [n(1799)](e, t) {
    const s = n;
    this.actionHandlers[s(1396)](e.shape[s(2282)][s(778)], t);
  }
  async [n(2282)](e, t, s) {
    const x = n;
    this[x(1182)].validateActionRequest(s);
    const r = await this[x(1182)].sendActionRequest(e), a = this[x(1182)].initializeResponseQueue(r), o = this[x(1182)].createStreamState();
    return this[x(1182)][x(1122)](a, o, r, s);
  }
  [n(600)]() {
    const e = F({ method: a0("sdppp/broadcast"), params: F({ messageType: C(), message: Z0() }) });
    this.protocol.setNotificationHandler(e, (t) => {
      const s = B, { messageType: x, message: r } = t[s(708)], a = this[s(1679)][s(2086)](x);
      a && a(r);
    });
  }
  registerBroadcastHandler(e, t) {
    const s = n;
    this[s(1679)][s(1396)](e, t);
  }
  async [n(1286)](e, t) {
    const s = n;
    await this.protocol[s(504)]({ method: s(2442), params: { messageType: e, message: t } });
  }
  async [n(1478)](e, t, s, x) {
    const r = n;
    return x || (x = {}), x[r(1380)] = x.timeout || 7 * 24 * 60 * 60 * 1e3, await this.protocol[r(1478)]({ method: e, params: t }, s, x);
  }
  registerRequestHandler(e, t) {
    const s = n;
    this[s(2091)][s(804)](e, t);
  }
}
var qn;
class wc extends bc {
  constructor(t, s) {
    const x = n, r = new pc(t, s);
    r[x(2203)] = (a) => {
      const o = x;
      console[o(549)](o(1213), a);
    };
    super(r);
    c0(this, qn);
    this[x(1379)] = r;
  }
  async [(qn = n(1379), n(1135))](t) {
    const s = n;
    return await this[s(1379)][s(1135)](t);
  }
  async close() {
    const t = n;
    await this.server[t(2400)]();
  }
  [n(2454)]() {
    const t = n;
    return this[t(1379)][t(489)] !== void 0;
  }
}
function Sc(i) {
  const e = new Oa(i);
  return { joinAs(t, s) {
    const x = B;
    if (!e[x(1476)](t)) throw new Error("Node " + String(t) + x(1183));
    return new li(e, t, s);
  }, getDefinition() {
    return i;
  }, getNodeIds() {
    return e[B(779)]();
  }, getNeighbors(t) {
    return e[B(447)](t);
  }, hasEdge(t, s) {
    return e[B(869)](t, s);
  }, hasPath(t, s) {
    return e.hasPath(t, s);
  }, findPath(t, s) {
    return e[B(2012)](t, s);
  } };
}
const Ec = F({}), kc = F({ uname: C()[n(664)](""), activeDocumentID: C0().default(0), layers: N0(F({ id: C0(), name: C(), identify: C() })).default([]), actions: N0(C()).default([]), theme: C()[n(664)](n(1622)), sdpppX: X0(C(), Z0())[n(664)]({}), locale: V0([n(1069), n(1675)]).default(n(1675)), comfyWebviewConnectStatus: V0([n(2419), n(1871), n(1425)])[n(664)](n(1425)), comfyWebviewLoadError: C().default(""), comfyWebviewLoading: d0()[n(664)](!1), comfyWebviewVersion: C()[n(664)](""), comfyAutoRunning: d0()[n(664)](!1), comfyHTTPCode: C0()[n(664)](200), comfyURL: C()[n(664)](""), sdkWebviewFocusing: d0()[n(664)](!1), sdkWebviewConnectStatus: V0([n(2419), n(1871), n(1425)])[n(664)](n(1425)), isLogin: d0().default(!1), isGuest: d0().default(!1), requestingLogin: d0()[n(664)](!1), loginMessage: C()[n(664)](""), token: C()[n(664)](""), userInfo: X0(C(), Z0()).default({}) }), Lx = { name: C(), uiWeight: C0() }, Pc = F({ ...Lx, outputType: a0(n(2312)), options: F({ required: d0(), maxCount: C0()[n(2338)](), maskMode: d0().optional() }) }), Cc = F({ ...Lx, outputType: a0("masks"), options: F({ required: d0() }) }), Ic = F({ ...Lx, outputType: a0(n(342)), options: F({ required: d0() }) }), Rc = F({ ...Lx, outputType: a0("boolean"), options: F({ required: d0() }) }), Fc = F({ ...Lx, outputType: a0(n(369)), options: F({ required: d0(), min: C0()[n(2338)](), max: C0()[n(2338)](), step: C0().optional(), random: d0()[n(2338)](), slider: d0()[n(2338)]() }) }), Nc = F({ ...Lx, outputType: a0(n(2030)), options: F({ required: d0(), values: N0(C()), labels: N0(C())[n(2338)]() }) }), qc = F({ ...Lx, outputType: a0("segment"), options: F({ required: d0(), values: N0(C()) }) }), Oc = jn(n(2221), [Pc, Cc, Ic, Rc, Fc, Nc, qc]), Ac = F({ id: C(), title: C(), widgets: N0(Oc), uiWeightSum: C0() }), Tc = F({ widgetableID: C(), widgetablePath: C(), nodes: X0(C(), Ac), nodeIndexes: N0(C()), note: C().optional(), options: X0(C(), Z0()) }), Dc = F({ widgetableStructure: Tc[n(664)]({ widgetableID: "", widgetablePath: "", nodes: {}, note: "", options: {}, nodeIndexes: [] }), widgetableValues: X0(C(), N0(Z0()))[n(664)]({}), widgetableErrors: X0(C(), C())[n(664)]({}), queueSize: C0().default(0), lastError: C()[n(664)](""), progress: C0()[n(664)](0), executingNodeTitle: C().default(""), graphProgress: C0().default(0), comfyUserToken: C().default(""), comfyOrgLoggedIn: d0()[n(664)](!1), comfyOrgAPIKey: C().default(""), comfyWSState: V0([n(1871), n(1346)])[n(664)](n(1871)), lastRunTime: C0().default(0) }), jc = { log: { requestSchema: F({ level: V0(["log", n(1633), n(455), "error"]), messages: N0(C()) }), responseSchema: F({}) }, openExternalLink: { requestSchema: F({ url: C() }), responseSchema: F({ error: C()[n(2338)]() }) }, getStorage: { requestSchema: F({ key: C() }), responseSchema: F({ value: C(), error: C()[n(2338)]() }) }, setStorage: { requestSchema: F({ key: C(), value: C() }), responseSchema: F({ error: C()[n(2338)]() }) }, removeStorage: { requestSchema: F({ key: C() }), responseSchema: F({ error: C()[n(2338)]() }) }, keyboardAction: { requestSchema: F({ keycode: C() }), responseSchema: F({}) }, setComfyWebviewURL: { requestSchema: F({ url: C() }), responseSchema: F({}) }, uploadComfyImage: { requestSchema: F({ uploadInput: F({ type: a0(n(792)).or(a0(n(278))), tokenOrBuffer: Z0(), fileName: C() }), overwrite: d0()[n(2338)]()[n(664)](!0) }), responseSchema: F({ name: C() }) }, proxiedFetch: { requestSchema: F({ url: C(), method: C()[n(2338)](), headers: X0(C()).optional(), body: Z0()[n(2338)](), bodyType: V0([n(614), n(1657), n(348)])[n(2338)]() }), responseSchema: F({ success: d0(), status: C0()[n(2338)](), statusText: C()[n(2338)](), headers: X0(C())[n(2338)](), data: Z0()[n(2338)](), error: C()[n(2338)]() }) } }, de = F({ thumbnail_url: C()[n(2338)](), file_token: C().optional(), source: C()[n(2338)](), error: C()[n(2338)]() }), Mc = { doGetImage: { requestSchema: F({ boundary: V0([n(1246), n(323), n(2463)]), content: V0([n(1246), n(323), "selection"]).or(C()), imageSize: C0(), imageQuality: C0(), cropBySelection: V0(["no", n(1573), n(1681)]) }), responseSchema: de }, doGetMask: { requestSchema: F({ content: V0([n(1246), n(323), n(2463)]), reverse: d0(), imageSize: C0() }), responseSchema: de }, doSendImage: { requestSchema: F({ selection: V0([n(2125), n(308), n(1870), n(2172), "curlayer_canvas", n(1272), "curlayer_selection", n(2125)]), url: C(), source: C(), cropBySelection: V0(["no", n(1573), n(1681)]).default("no") }), responseSchema: F({ error: C()[n(2338)]() }) }, requestImageGet: { requestSchema: F({}), responseSchema: de }, requestImageSend: { requestSchema: F({ url: C(), source: C() }), responseSchema: F({ error: C()[n(2338)]() }) }, requestMaskGet: { requestSchema: F({ isMask: d0()[n(664)](!1) }), responseSchema: de } }, Lc = F({ passwordPayload: F({ username: C(), password: C() }).or(F({ email: C(), password: C() })).or(F({ phone: C(), password: C() })).or(F({ identifier: C(), password: C() })) }).or(F({ passcodePayload: F({ phone: C(), code: C() }).or(F({ email: C(), code: C() })) })), $c = F({ passwordPayload: F({ username: C(), password: C() }).or(F({ email: C(), password: C() })).or(F({ phone: C(), password: C() })).or(F({ identifier: C(), password: C() })) }).or(F({ passcodePayload: F({ phone: C(), code: C() }).or(F({ email: C(), code: C() })) })), zc = { register: { requestSchema: Lc, responseSchema: F({}) }, login: { requestSchema: $c, responseSchema: F({}) }, sendPassCode: { requestSchema: F({ phone: C().optional(), email: C()[n(2338)]() }), responseSchema: F({}) }, logout: { requestSchema: F({}), responseSchema: F({}) }, guestLogin: { requestSchema: F({}), responseSchema: F({}) } }, Hc = F({ workflows: N0(C()), error: C()[n(2338)]() }), Uc = F({ success: d0(), nodeErrors: X0(C())[n(2338)](), prompt_ids: N0(C())[n(2338)](), images: N0(F({ url: C(), thumbnail: C() }))[n(2338)]() }), Vc = { setWidgetValue: { requestSchema: F({ values: N0(F({ nodeID: C(), widgetIndex: C0(), value: X0(C(), Z0()).or(C()).or(C0()).or(d0()).or(N0(Z0())) })) }), responseSchema: F({ success: d0() }) }, openWorkflow: { requestSchema: F({ workflow_path: C(), reset: d0()[n(664)](!1) }), responseSchema: F({ success: d0() }) }, openWorkflowJSON: { requestSchema: F({ workflow_content: X0(Z0()), workflow_path: C() }), responseSchema: F({ success: d0() }) }, listWorkflows: { requestSchema: F({ listMode: C()[n(2338)](), sdpppID: C().optional(), sdpppToken: C()[n(2338)]() }), responseSchema: Hc }, saveWorkflow: { requestSchema: F({ workflow_path: C(), from_sid: C()[n(2338)]() }), responseSchema: F({ success: d0() }) }, run: { requestSchema: F({ size: C0() }), responseSchema: Uc, stream: !0 }, stopAll: { requestSchema: F({}), responseSchema: F({ success: d0() }) } }, Wc = { setNodeTitle: { requestSchema: F({ node_id: C(), title: C() }), responseSchema: F({ success: d0() }) }, reboot: { requestSchema: F({}), responseSchema: F({ success: d0(), error: C()[n(2338)]() }) }, setComfyOrgAPIKey: { requestSchema: F({ api_key: C() }), responseSchema: F({ success: d0() }) }, logout: { requestSchema: F({}), responseSchema: F({ success: d0() }) } }, Bc = Sc({ nodes: { sdk: { store: Ec, actions: {} }, uxp: { store: kc, actions: { ...Mc, ...jc, ...zc } }, comfy: { store: Dc, actions: { ...Vc, ...Wc } } }, edges: [[n(410), "uxp"], ["comfy", n(1191)]] }), P0 = Bc[n(371)](n(1951));
globalThis.mcpMesh = P0, globalThis.sdpppX2 = globalThis[n(2470)] || {};
const xe = globalThis[n(2470)], Zc = { "preview.show": n(1662), "gateway.select_ai_service": n(1378), "image.jump_to_last": n(339), "image.clear_all": n(2352), "image.send_to_ps": "发送到PS", "image.download": "下载", "image.copy": "复制", "task.waiting_upload": n(1466), "task.creating_task": n(2286), "task.running_duration": "运行了 {{duration}} 秒，{{message}}", "comfy.connect": "连接", "comfy.load_failed": n(1758), "comfy.loading": n(513), "comfy.channel_connecting": n(1542), "comfy.server_reconnecting": n(2001), "comfy.version_mismatch": n(2435), "comfy.cloud_recommend": "云端推荐：", "comfy.your_workflows": n(1322), "comfy.refresh_workflows": n(957), "comfy.queue_progress": n(2065), "comfy.save": "保存", "comfy.refresh": "刷新", "comfy.stop_cancel_all": "停止并取消全部", "comfy.stop_auto_run": n(1811), "comfy.start_auto_run": n(956), "comfy.run": "运行", "comfy.back": "返回", "comfy.uploading": n(388), "http.404": n(2083), "http.401": "未授权 (401)", "http.403": n(374), "http.408": "请求超时 (408)", "http.500": n(2015), "http.501": n(965), "http.502": n(552), "http.503": n(2505), "http.504": "网关超时 (504)", "http.unknown": n(2217), "runninghub.get_apikey": n(694), "runninghub.apikey_placeholder": "请输入您的RunningHub API Key", "runninghub.app_id": n(321), "runninghub.webapp_id_placeholder": n(2488), "runninghub.open_app": n(1959), "runninghub.execute": "执行", "runninghub.rh_coins": n(2096), "runninghub.current_tasks": n(726), "runninghub.status.waiting": n(525), "runninghub.status.running": n(1600), "runninghub.status.failed": n(1085), "runninghub.status.success": n(982), "image.auto_refetch": n(494), "runninghub.error.get_result_failed": "获取结果失败: {{error}}", "runninghub.error.task_failed": n(1761), "runninghub.error.task_incomplete": n(2234), "replicate.get_apikey": n(564), "replicate.apikey_placeholder": n(430), "replicate.execute": "执行", "replicate.model_placeholder": "粘贴你的模型名称", "liblib.get_apikey": n(460), "liblib.execute": "执行", "common.close": "关闭", "common.save_and_run": n(1708), "common.loading": n(2534), "common.error": "错误", "common.success": "成功", "common.cancel": "取消", "common.confirm": "确认", "common.options": "选项", "common.options_separator": n(419), webviewInForeground: "插件可能正在拦截 PS 快捷键... ", webviewInForeground2: n(1114), "auth.login_success": n(1928), "auth.username_label": "用户名: {{username}}", "auth.email_label": n(1315), "auth.logout": n(2389), "auth.login_required": n(2560), "image.send.select_position": n(2165), "image.send.sending": n(993), "image.layer.new": "新图层", "image.layer.current": n(2351), "image.layer.fit_to_current": n(897), "image.layer.fit_to_selection": n(1218), "image.layer.fit_to_canvas": "适配至画布", "image.shortcut_auth_required": n(656), "image.shortcut_focus_required": n(1307), "image.get.select_image": n(2289), "image.get.entire_canvas": n(2111), "image.get.canvas": "画布", "image.get.current_layer": n(2351), "image.get.current_layer_bounds": n(370), "image.get.selection_bounds": n(2112), "image.get.canvas_bounds": n(807), "image.crop_by_selection": n(737), "image.limit_size": n(2072), "image.crop.none": n(326), "image.crop.inpaint": n(1672), "image.crop.outpaint": "正向裁剪(Outpaint)", "mask.get.select_mask": n(2487), "mask.selection": "选区", "mask.current_layer_bounds": "当前图层范围", "mask.all": "全部", "mask.selection_exclude": "选区除外", "mask.current_layer_exclude": n(2492), "mask.empty": "空", "document {{0}} not found": n(2405), "create document for preview": n(1092), "resize document for preview": n(2089), "create document for sent images": n(1866), "show sent images": n(2113), "create layer failed": n(2385), "layer not found {{0}}": n(2379), "layer not found: {{0}}": "找不到图层: {{0}}", "layer {{0}} is not a group": n(2549), "no linked layer for {{0}}": n(1613), "no first related layer in {{0}}": n(823), "merge group failed": n(791), "get content of layer {{0}}": n(1564), "get layer info": n(506), "get_layer_info: layer_identify required": n(403), "get pixel of {{0}} failed": "获取像素失败: {{0}}", "get selection failed": n(2178), "invalid name: {{0}}": "非法的名称: {{0}}", "desire bounds is null": n(1333), "intersect or scaledDesire is null": "交集或缩放目标为空", 'only layer kind "TEXT" is supported, invalid layer: {{0}}': n(1159), "select layer": n(1900), "run Photoshop Action": n(640), "Action {{0}} not found": n(1199), "Action set {{0}} not found": n(352), "set text to layer": n(2283), "ComfyManager not found, cannot reboot": n(1931), "Failed to reboot ComfyUI": n(2324), "image.upload.from_ps": "从PS", "image.upload.from_disk": n(1661), "image.upload.clear": "清空", "image.upload.uploading": "上传中，如果图片过大，可能会卡顿...", "image.upload.no_images": n(2010), "source.source": "来源", "source.content": "内容", "source.boundary": "范围", "source.mask": "遮罩", "source.disk": "磁盘", "source.remote": "远端", "source.unknown": "未知", "source.ps_image": n(1981), "source.ps_mask": n(1305), "source.canvas": n(2111), "source.current_layer": n(2351), "source.selection": "选区", "source.quality_percent": n(1886), "source.crop.positive": n(1408), "source.crop.negative": n(1390), "source.reverse": "反转" }, Kc = { "preview.show": "Show Preview ({{count}} images)", "gateway.select_ai_service": "Please select AI service", "image.jump_to_last": n(2318), "image.clear_all": n(280), "image.send_to_ps": n(1127), "image.download": n(2170), "image.copy": n(1663), "task.waiting_upload": n(1596), "task.creating_task": n(1300), "task.running_duration": n(2050), "comfy.connect": n(1255), "comfy.load_failed": n(954), "comfy.loading": "ComfyUI loading...", "comfy.channel_connecting": n(1340), "comfy.server_reconnecting": n(1288), "comfy.version_mismatch": "Comfy SDPPP version ({{comfyVersion}}) does not match plugin ({{pluginVersion}}), may cause issues", "comfy.cloud_recommend": "Cloud:", "comfy.your_workflows": n(2450), "comfy.refresh_workflows": n(1430), "comfy.queue_progress": n(854), "comfy.save": n(967), "comfy.refresh": "Refresh", "comfy.stop_cancel_all": n(2123), "comfy.stop_auto_run": n(1058), "comfy.start_auto_run": n(487), "comfy.run": n(1119), "comfy.back": n(1846), "comfy.uploading": n(1937), "http.404": "SDPPP may not be installed or version mismatch (404)", "http.401": n(1222), "http.403": "Forbidden (403)", "http.408": n(1676), "http.500": n(567), "http.501": "Not implemented (501)", "http.502": n(959), "http.503": n(1786), "http.504": n(2406), "http.unknown": n(426), "runninghub.get_apikey": n(2205), "runninghub.apikey_placeholder": n(2134), "runninghub.app_id": n(818), "runninghub.webapp_id_placeholder": n(768), "runninghub.open_app": n(1621), "runninghub.execute": "Execute", "runninghub.rh_coins": n(1902), "runninghub.current_tasks": n(480), "runninghub.status.waiting": n(1392), "runninghub.status.running": n(2446), "runninghub.status.failed": "Failed", "runninghub.status.success": n(1845), "image.auto_refetch": n(932), "runninghub.error.get_result_failed": n(425), "runninghub.error.task_failed": n(1691), "runninghub.error.task_incomplete": n(1311), "replicate.get_apikey": n(960), "replicate.apikey_placeholder": "Enter your Replicate API Key", "replicate.execute": "Execute", "replicate.model_placeholder": "Paste your model name", "liblib.get_apikey": n(1832), "liblib.execute": n(776), "common.close": "Close", "common.save_and_run": "Save and run immediately", "common.loading": "Loading...", "common.error": n(1709), "common.success": n(1845), "common.cancel": n(1059), "common.confirm": n(2330), "common.options": "Options", "common.options_separator": n(1369), webviewInForeground: n(372), webviewInForeground2: n(966), "auth.login_success": "Login Successful", "auth.username_label": n(704), "auth.email_label": n(1192), "auth.logout": n(1999), "auth.login_required": n(2277), "image.send.select_position": n(1073), "image.send.sending": n(414), "image.layer.new": n(1240), "image.layer.current": n(2270), "image.layer.fit_to_current": "Fit to current layer", "image.layer.fit_to_selection": n(335), "image.layer.fit_to_canvas": "Fit to canvas", "image.shortcut_auth_required": n(2313), "image.shortcut_focus_required": n(939), "image.get.select_image": n(1474), "image.get.entire_canvas": n(273), "image.get.canvas": n(1266), "image.get.current_layer": n(2270), "image.get.current_layer_bounds": n(691), "image.get.selection_bounds": n(1787), "image.get.canvas_bounds": n(1683), "image.crop_by_selection": n(1966), "image.limit_size": n(1932), "image.crop.none": n(2108), "image.crop.inpaint": n(678), "image.crop.outpaint": n(1771), "mask.get.select_mask": n(1874), "mask.selection": n(1762), "mask.current_layer_bounds": n(1958), "mask.all": n(1508), "mask.selection_exclude": "Exclude selection", "mask.current_layer_exclude": n(824), "mask.empty": n(1394), "document {{0}} not found": n(2127), "create document for preview": n(862), "resize document for preview": n(1295), "create document for sent images": n(2509), "show sent images": n(2556), "create layer failed": n(2469), "layer not found {{0}}": n(328), "layer not found: {{0}}": n(1514), "layer {{0}} is not a group": "Layer {{0}} is not a group", "no linked layer for {{0}}": n(2417), "no first related layer in {{0}}": "No first related layer in {{0}}", "merge group failed": "Merge group failed", "get content of layer {{0}}": n(469), "get layer info": "Get layer info", "get_layer_info: layer_identify required": n(2106), "get pixel of {{0}} failed": n(789), "get selection failed": n(1578), "invalid name: {{0}}": n(2307), "desire bounds is null": "Desire bounds is null", "intersect or scaledDesire is null": n(573), 'only layer kind "TEXT" is supported, invalid layer: {{0}}': n(2223), "select layer": n(2331), "run Photoshop Action": n(305), "Action {{0}} not found": n(816), "Action set {{0}} not found": n(315), "set text to layer": n(1382), "ComfyManager not found, cannot reboot": n(2538), "Failed to reboot ComfyUI": n(968), "image.upload.from_ps": n(876), "image.upload.from_disk": "From Disk", "image.upload.clear": n(562), "image.upload.uploading": n(1206), "image.upload.no_images": "No images", "source.source": n(802), "source.content": n(1571), "source.boundary": n(360), "source.mask": n(1742), "source.disk": n(1228), "source.remote": n(1899), "source.unknown": n(1772), "source.ps_image": "PS", "source.ps_mask": "PS", "source.canvas": "Canvas", "source.current_layer": "CurLayer", "source.selection": n(1762), "source.quality_percent": "Quality {{percent}}%", "source.crop.positive": n(1507), "source.crop.negative": n(2182), "source.reverse": n(1906) }, m0 = (i) => typeof i === n(342), Gx = () => {
  const i = n;
  let e, t;
  const s = new Promise((x, r) => {
    e = x, t = r;
  });
  return s[i(1666)] = e, s[i(1892)] = t, s;
}, Ps = (i) => i == null ? "" : "" + i, Jc = (i, e, t) => {
  i[n(1562)]((x) => {
    e[x] && (t[x] = e[x]);
  });
}, Qc = /###/g, Cs = (i) => i && i.indexOf(n(1717)) > -1 ? i[n(969)](Qc, ".") : i, Is = (i) => !i || m0(i), ee = (i, e, t) => {
  const s = n, x = m0(e) ? e[s(458)](".") : e;
  let r = 0;
  for (; r < x[s(1586)] - 1; ) {
    if (Is(i)) return {};
    const a = Cs(x[r]);
    !i[a] && t && (i[a] = new t()), Object.prototype[s(724)][s(896)](i, a) ? i = i[a] : i = {}, ++r;
  }
  return Is(i) ? {} : { obj: i, k: Cs(x[r]) };
}, Rs = (i, e, t) => {
  const s = n, { obj: x, k: r } = ee(i, e, Object);
  if (x !== void 0 || e[s(1586)] === 1) {
    x[r] = t;
    return;
  }
  let a = e[e.length - 1], o = e[s(2284)](0, e.length - 1), c = ee(i, o, Object);
  for (; c[s(2194)] === void 0 && o[s(1586)]; )
    a = o[o[s(1586)] - 1] + "." + a, o = o[s(2284)](0, o.length - 1), c = ee(i, o, Object), c != null && c[s(2194)] && typeof c[s(2194)][c.k + "." + a] !== s(1319) && (c[s(2194)] = void 0);
  c[s(2194)][c.k + "." + a] = t;
}, Gc = (i, e, t, s) => {
  const x = n, { obj: r, k: a } = ee(i, e, Object);
  r[a] = r[a] || [], r[a][x(1251)](t);
}, Ie = (i, e) => {
  const t = n, { obj: s, k: x } = ee(i, e);
  if (s && Object.prototype[t(724)][t(896)](s, x))
    return s[x];
}, Xc = (i, e, t) => {
  const s = Ie(i, t);
  return s !== void 0 ? s : Ie(e, t);
}, fa = (i, e, t) => {
  const s = n;
  for (const x in e)
    x !== s(2451) && x !== "constructor" && (x in i ? m0(i[x]) || i[x] instanceof String || m0(e[x]) || e[x] instanceof String ? t && (i[x] = e[x]) : fa(i[x], e[x], t) : i[x] = e[x]);
  return i;
}, Ux = (i) => i[n(969)](/[\-\[\]\/\{\}\(\)\*\+\?\.\\\^\$\|]/g, n(2532));
var Yc = { "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': n(1804), "'": n(1815), "/": "&#x2F;" };
const _c = (i) => {
  const e = n;
  return m0(i) ? i[e(969)](/[&<>"'\/]/g, (t) => Yc[t]) : i;
};
class x2 {
  constructor(e) {
    const t = n;
    this.capacity = e, this[t(686)] = /* @__PURE__ */ new Map(), this[t(803)] = [];
  }
  [n(716)](e) {
    const t = n, s = this[t(686)].get(e);
    if (s !== void 0) return s;
    const x = new RegExp(e);
    return this[t(803)][t(1586)] === this[t(2060)] && this[t(686)][t(1574)](this.regExpQueue[t(1002)]()), this[t(686)].set(e, x), this[t(803)][t(1251)](e), x;
  }
}
const e2 = [" ", ",", "?", "!", ";"], t2 = new x2(20), r2 = (i, e, t) => {
  const s = n;
  e = e || "", t = t || "";
  const x = e2[s(275)]((o) => e[s(1563)](o) < 0 && t[s(1563)](o) < 0);
  if (x.length === 0) return !0;
  const r = t2[s(716)]("(" + x[s(1889)]((o) => o === "?" ? "\\?" : o)[s(2373)]("|") + ")");
  let a = !r.test(i);
  if (!a) {
    const o = i[s(1563)](t);
    o > 0 && !r.test(i.substring(0, o)) && (a = !0);
  }
  return a;
}, Kt = (i, e, t = ".") => {
  const s = n;
  if (!i) return;
  if (i[e])
    return Object[s(2173)][s(724)][s(896)](i, e) ? i[e] : void 0;
  const x = e[s(458)](t);
  let r = i;
  for (let a = 0; a < x[s(1586)]; ) {
    if (!r || typeof r != "object") return;
    let o, c = "";
    for (let u = a; u < x[s(1586)]; ++u)
      if (u !== a && (c += t), c += x[u], o = r[c], o !== void 0) {
        if ([s(342), s(369), "boolean"].indexOf(typeof o) > -1 && u < x[s(1586)] - 1) continue;
        a += u - a + 1;
        break;
      }
    r = o;
  }
  return r;
}, se = (i) => i == null ? void 0 : i[n(969)]("_", "-"), s2 = { type: n(1475), log(i) {
  this[n(1695)]("log", i);
}, warn(i) {
  const e = n;
  this[e(1695)](e(455), i);
}, error(i) {
  const e = n;
  this.output(e(549), i);
}, output(i, e) {
  var s, x;
  const t = n;
  (x = (s = console == null ? void 0 : console[i]) == null ? void 0 : s[t(813)]) == null || x.call(s, console, e);
} };
class Re {
  constructor(e, t = {}) {
    this[n(1726)](e, t);
  }
  [n(1726)](e, t = {}) {
    const s = n;
    this[s(577)] = t[s(577)] || s(703), this[s(1475)] = e || s2, this[s(1149)] = t, this[s(1335)] = t[s(1335)];
  }
  log(...e) {
    const t = n;
    return this[t(2036)](e, t(1919), "", !0);
  }
  [n(455)](...e) {
    const t = n;
    return this[t(2036)](e, t(455), "", !0);
  }
  [n(549)](...e) {
    const t = n;
    return this.forward(e, t(549), "");
  }
  [n(1853)](...e) {
    const t = n;
    return this[t(2036)](e, t(455), "WARNING DEPRECATED: ", !0);
  }
  [n(2036)](e, t, s, x) {
    const r = n;
    return x && !this[r(1335)] ? null : (m0(e[0]) && (e[0] = "" + s + this[r(577)] + " " + e[0]), this.logger[t](e));
  }
  [n(2519)](e) {
    const t = n;
    return new Re(this.logger, { prefix: this[t(577)] + ":" + e + ":", ...this.options });
  }
  [n(1306)](e) {
    const t = n;
    return e = e || this[t(1149)], e.prefix = e[t(577)] || this.prefix, new Re(this[t(1475)], e);
  }
}
var dx = new Re();
class je {
  constructor() {
    const e = n;
    this[e(625)] = {};
  }
  on(e, t) {
    const s = n;
    return e.split(" ")[s(1562)]((x) => {
      const r = s;
      this.observers[x] || (this[r(625)][x] = /* @__PURE__ */ new Map());
      const a = this[r(625)][x][r(2086)](t) || 0;
      this[r(625)][x][r(1396)](t, a + 1);
    }), this;
  }
  [n(1922)](e, t) {
    const s = n;
    if (this[s(625)][e]) {
      if (!t) {
        delete this[s(625)][e];
        return;
      }
      this[s(625)][e].delete(t);
    }
  }
  [n(1977)](e, ...t) {
    const s = n;
    this[s(625)][e] && Array[s(1671)](this.observers[e].entries()).forEach(([r, a]) => {
      for (let o = 0; o < a; o++)
        r(...t);
    }), this[s(625)]["*"] && Array[s(1671)](this[s(625)]["*"][s(772)]())[s(1562)](([r, a]) => {
      const o = s;
      for (let c = 0; c < a; c++)
        r[o(813)](r, [e, ...t]);
    });
  }
}
class Fs extends je {
  constructor(e, t = { ns: ["translation"], defaultNS: "translation" }) {
    const s = n;
    super(), this[s(1024)] = e || {}, this[s(1149)] = t, this[s(1149)][s(2327)] === void 0 && (this[s(1149)][s(2327)] = "."), this.options.ignoreJSONStructure === void 0 && (this[s(1149)][s(1993)] = !0);
  }
  [n(720)](e) {
    const t = n;
    this[t(1149)].ns[t(1563)](e) < 0 && this[t(1149)].ns[t(1251)](e);
  }
  [n(1337)](e) {
    const t = n, s = this[t(1149)].ns.indexOf(e);
    s > -1 && this[t(1149)].ns[t(748)](s, 1);
  }
  [n(2308)](e, t, s, x = {}) {
    var f, d;
    const r = n, a = x.keySeparator !== void 0 ? x[r(2327)] : this[r(1149)][r(2327)], o = x[r(1993)] !== void 0 ? x[r(1993)] : this[r(1149)][r(1993)];
    let c;
    e[r(1563)](".") > -1 ? c = e[r(458)](".") : (c = [e, t], s && (Array[r(752)](s) ? c.push(...s) : m0(s) && a ? c[r(1251)](...s[r(458)](a)) : c.push(s)));
    const u = Ie(this[r(1024)], c);
    return !u && !t && !s && e[r(1563)](".") > -1 && (e = c[0], t = c[1], s = c[r(2284)](2).join(".")), u || !o || !m0(s) ? u : Kt((d = (f = this.data) == null ? void 0 : f[e]) == null ? void 0 : d[t], s, a);
  }
  [n(538)](e, t, s, x, r = { silent: !1 }) {
    const a = n, o = r[a(2327)] !== void 0 ? r[a(2327)] : this.options[a(2327)];
    let c = [e, t];
    s && (c = c[a(576)](o ? s[a(458)](o) : s)), e.indexOf(".") > -1 && (c = e.split("."), x = t, t = c[1]), this[a(720)](t), Rs(this[a(1024)], c, x), r[a(1329)] || this.emit(a(2239), e, t, s, x);
  }
  [n(2393)](e, t, s, x = { silent: !1 }) {
    const r = n;
    for (const a in s)
      (m0(s[a]) || Array[r(752)](s[a])) && this[r(538)](e, t, a, s[a], { silent: !0 });
    x.silent || this.emit(r(2239), e, t, s);
  }
  [n(844)](e, t, s, x, r, a = { silent: !1, skipCopy: !1 }) {
    const o = n;
    let c = [e, t];
    e[o(1563)](".") > -1 && (c = e[o(458)]("."), x = s, s = t, t = c[1]), this[o(720)](t);
    let u = Ie(this[o(1024)], c) || {};
    a[o(1376)] || (s = JSON[o(1938)](JSON[o(2325)](s))), x ? fa(u, s, r) : u = { ...u, ...s }, Rs(this[o(1024)], c, u), a[o(1329)] || this[o(1977)](o(2239), e, t, s);
  }
  [n(636)](e, t) {
    const s = n;
    this[s(2069)](e, t) && delete this[s(1024)][e][t], this.removeNamespaces(t), this[s(1977)]("removed", e, t);
  }
  [n(2069)](e, t) {
    return this.getResource(e, t) !== void 0;
  }
  [n(483)](e, t) {
    const s = n;
    return t || (t = this[s(1149)][s(1045)]), this[s(2308)](e, t);
  }
  [n(928)](e) {
    return this[n(1024)][e];
  }
  hasLanguageSomeTranslations(e) {
    const t = n, s = this[t(928)](e);
    return !!(s && Object.keys(s) || [])[t(1703)]((r) => s[r] && Object[t(1001)](s[r])[t(1586)] > 0);
  }
  [n(2508)]() {
    return this[n(1024)];
  }
}
var da = { processors: {}, addPostProcessor(i) {
  const e = n;
  this.processors[i[e(2132)]] = i;
}, handle(i, e, t, s, x) {
  const r = n;
  return i[r(1562)]((a) => {
    var c;
    const o = r;
    e = ((c = this[o(2198)][a]) == null ? void 0 : c[o(2550)](e, t, s, x)) ?? e;
  }), e;
} };
const Ns = {}, qs = (i) => !m0(i) && typeof i !== n(320) && typeof i !== n(369);
class Fe extends je {
  constructor(e, t = {}) {
    const s = n;
    super(), Jc([s(810), "languageUtils", s(645), s(903), "backendConnector", "i18nFormat", "utils"], e, this), this[s(1149)] = t, this[s(1149)][s(2327)] === void 0 && (this[s(1149)].keySeparator = "."), this[s(1475)] = dx.create(s(2457));
  }
  [n(1991)](e) {
    const t = n;
    e && (this[t(652)] = e);
  }
  [n(2196)](e, t = { interpolation: {} }) {
    const s = n, x = { ...t };
    if (e == null) return !1;
    const r = this[s(1666)](e, x);
    return (r == null ? void 0 : r.res) !== void 0;
  }
  [n(1160)](e, t) {
    const s = n;
    let x = t[s(268)] !== void 0 ? t[s(268)] : this.options[s(268)];
    x === void 0 && (x = ":");
    const r = t[s(2327)] !== void 0 ? t[s(2327)] : this[s(1149)][s(2327)];
    let a = t.ns || this[s(1149)][s(1045)] || [];
    const o = x && e[s(1563)](x) > -1, c = !this.options[s(452)] && !t[s(2327)] && !this[s(1149)].userDefinedNsSeparator && !t[s(268)] && !r2(e, x, r);
    if (o && !c) {
      const u = e.match(this[s(903)][s(1745)]);
      if (u && u[s(1586)] > 0) return { key: e, namespaces: m0(a) ? [a] : a };
      const f = e.split(x);
      (x !== r || x === r && this[s(1149)].ns[s(1563)](f[0]) > -1) && (a = f[s(1002)]()), e = f[s(2373)](r);
    }
    return { key: e, namespaces: m0(a) ? [a] : a };
  }
  [n(1630)](e, t, s) {
    const x = n;
    let r = typeof t == "object" ? { ...t } : t;
    if (typeof r !== x(1395) && this.options.overloadTranslationOptionHandler && (r = this[x(1149)][x(571)](arguments)), typeof options == "object" && (r = { ...r }), r || (r = {}), e == null) return "";
    Array[x(752)](e) || (e = [String(e)]);
    const a = r.returnDetails !== void 0 ? r[x(2315)] : this[x(1149)][x(2315)], o = r.keySeparator !== void 0 ? r.keySeparator : this[x(1149)][x(2327)], { key: c, namespaces: u } = this.extractFromKey(e[e[x(1586)] - 1], r), f = u[u[x(1586)] - 1];
    let d = r[x(268)] !== void 0 ? r[x(268)] : this[x(1149)].nsSeparator;
    d === void 0 && (d = ":");
    const l = r[x(1090)] || this.language, g = r.appendNamespaceToCIMode || this[x(1149)][x(806)];
    if ((l == null ? void 0 : l.toLowerCase()) === "cimode")
      return g ? a ? { res: "" + f + d + c, usedKey: c, exactUsedKey: c, usedLng: l, usedNS: f, usedParams: this.getUsedParamsDetails(r) } : "" + f + d + c : a ? { res: c, usedKey: c, exactUsedKey: c, usedLng: l, usedNS: f, usedParams: this[x(2460)](r) } : c;
    const h = this[x(1666)](e, r);
    let m = h == null ? void 0 : h[x(796)];
    const y = (h == null ? void 0 : h[x(1341)]) || c, w = (h == null ? void 0 : h[x(1997)]) || c, E = [x(784), x(663), x(1074)], q = r.joinArrays !== void 0 ? r[x(890)] : this[x(1149)].joinArrays, O = !this.i18nFormat || this[x(2092)][x(1533)], P = r.count !== void 0 && !m0(r[x(2474)]), S = Fe.hasDefaultValue(r), R = P ? this.pluralResolver[x(317)](l, r[x(2474)], r) : "", j = r[x(1831)] && P ? this.pluralResolver[x(317)](l, r[x(2474)], { ordinal: !1 }) : "", D = P && !r.ordinal && r[x(2474)] === 0, M = D && r[x(687) + this[x(1149)][x(2248)] + x(1303)] || r[x(687) + R] || r[x(687) + j] || r[x(687)];
    let N = m;
    O && !m && S && (N = M);
    const I = qs(N), U = Object[x(2173)][x(616)][x(813)](N);
    if (O && N && I && E[x(1563)](U) < 0 && !(m0(q) && Array[x(752)](N))) {
      if (!r[x(2191)] && !this[x(1149)].returnObjects) {
        !this.options[x(2420)] && this[x(1475)][x(455)](x(1327));
        const H = this[x(1149)][x(2420)] ? this[x(1149)][x(2420)](y, N, { ...r, ns: u }) : x(1181) + c + " (" + this.language + x(980);
        return a ? (h[x(796)] = H, h[x(269)] = this[x(2460)](r), h) : H;
      }
      if (o) {
        const H = Array[x(752)](N), V = H ? [] : {}, J = H ? w : y;
        for (const t0 in N)
          if (Object.prototype[x(724)][x(896)](N, t0)) {
            const e0 = "" + J + o + t0;
            S && !m ? V[t0] = this[x(1630)](e0, { ...r, defaultValue: qs(M) ? M[t0] : void 0, joinArrays: !1, ns: u }) : V[t0] = this.translate(e0, { ...r, joinArrays: !1, ns: u }), V[t0] === e0 && (V[t0] = N[t0]);
          }
        m = V;
      }
    } else if (O && m0(q) && Array[x(752)](m))
      m = m[x(2373)](q), m && (m = this[x(409)](m, e, r, s));
    else {
      let H = !1, V = !1;
      !this[x(1686)](m) && S && (H = !0, m = M), !this.isValidLookup(m) && (V = !0, m = c);
      const J = r[x(307)] || this.options.missingKeyNoValueFallbackToKey, t0 = J && V ? void 0 : m, e0 = S && M !== m && this[x(1149)].updateMissing;
      if (V || H || e0) {
        if (this.logger.log(e0 ? x(902) : "missingKey", l, f, c, e0 ? M : m), o) {
          const y0 = this[x(1666)](c, { ...r, keySeparator: !1 });
          y0 && y0.res && this[x(1475)][x(455)]("Seems the loaded translations were in flat JSON format instead of nested. Either set keySeparator: false on init or make sure your translations are published in nested format.");
        }
        let u0 = [];
        const l0 = this[x(699)][x(1818)](this[x(1149)][x(512)], r[x(1090)] || this[x(652)]);
        if (this[x(1149)][x(2135)] === "fallback" && l0 && l0[0]) for (let y0 = 0; y0 < l0[x(1586)]; y0++)
          u0[x(1251)](l0[y0]);
        else this.options[x(2135)] === x(1576) ? u0 = this[x(699)][x(2057)](r[x(1090)] || this.language) : u0.push(r.lng || this.language);
        const f0 = (y0, F0, D0) => {
          var T;
          const k0 = x, J0 = S && D0 !== m ? D0 : t0;
          this[k0(1149)].missingKeyHandler ? this[k0(1149)][k0(927)](y0, f, F0, J0, e0, r) : (T = this[k0(2188)]) != null && T[k0(272)] && this.backendConnector[k0(272)](y0, f, F0, J0, e0, r), this[k0(1977)](k0(2237), y0, f, F0, m);
        };
        this[x(1149)][x(272)] && (this[x(1149)].saveMissingPlurals && P ? u0[x(1562)]((y0) => {
          const F0 = x, D0 = this[F0(645)][F0(2461)](y0, r);
          D && r[F0(687) + this.options[F0(2248)] + "zero"] && D0[F0(1563)](this.options.pluralSeparator + "zero") < 0 && D0[F0(1251)](this.options[F0(2248)] + F0(1303)), D0.forEach((k0) => {
            const J0 = F0;
            f0([y0], c + k0, r[J0(687) + k0] || M);
          });
        }) : f0(u0, c, M));
      }
      m = this[x(409)](m, e, r, h, s), V && m === c && this[x(1149)].appendNamespaceToMissingKey && (m = "" + f + d + c), (V || H) && this[x(1149)].parseMissingKeyHandler && (m = this[x(1149)].parseMissingKeyHandler(this[x(1149)].appendNamespaceToMissingKey ? "" + f + d + c : c, H ? m : void 0, r));
    }
    return a ? (h[x(796)] = m, h[x(269)] = this[x(2460)](r), h) : m;
  }
  extendTranslation(e, t, s, x, r) {
    var u, f;
    const a = n;
    if ((u = this[a(2092)]) != null && u[a(1938)]) e = this[a(2092)][a(1938)](e, { ...this[a(1149)].interpolation.defaultVariables, ...s }, s[a(1090)] || this.language || x[a(2064)], x[a(719)], x.usedKey, { resolved: x });
    else if (!s.skipInterpolation) {
      s[a(2229)] && this[a(903)].init({ ...s, interpolation: { ...this[a(1149)].interpolation, ...s[a(2229)] } });
      const d = m0(e) && (((f = s == null ? void 0 : s[a(2229)]) == null ? void 0 : f[a(340)]) !== void 0 ? s[a(2229)][a(340)] : this[a(1149)][a(2229)].skipOnVariables);
      let l;
      if (d) {
        const h = e.match(this.interpolator[a(1745)]);
        l = h && h[a(1586)];
      }
      let g = s.replace && !m0(s[a(969)]) ? s[a(969)] : s;
      if (this[a(1149)][a(2229)][a(1320)] && (g = { ...this[a(1149)].interpolation[a(1320)], ...g }), e = this[a(903)][a(1166)](e, g, s[a(1090)] || this[a(652)] || x[a(2064)], s), d) {
        const h = e[a(415)](this[a(903)][a(1745)]), m = h && h[a(1586)];
        l < m && (s[a(2345)] = !1);
      }
      !s[a(1090)] && x && x[a(796)] && (s.lng = this.language || x[a(2064)]), s[a(2345)] !== !1 && (e = this[a(903)][a(2345)](e, (...h) => {
        const m = a;
        return (r == null ? void 0 : r[0]) === h[0] && !s.context ? (this[m(1475)][m(455)](m(1350) + h[0] + m(1526) + t[0]), null) : this[m(1630)](...h, t);
      }, s)), s.interpolation && this[a(903)][a(961)]();
    }
    const o = s[a(2310)] || this[a(1149)][a(2310)], c = m0(o) ? [o] : o;
    return e != null && (c != null && c.length) && s.applyPostProcessor !== !1 && (e = da.handle(c, e, t, this.options && this.options[a(1910)] ? { i18nResolved: { ...x, usedParams: this[a(2460)](s) }, ...s } : s, this)), e;
  }
  [n(1666)](e, t = {}) {
    let s, x, r, a, o;
    return m0(e) && (e = [e]), e.forEach((c) => {
      const u = B;
      if (this[u(1686)](s)) return;
      const f = this[u(1160)](c, t), d = f[u(635)];
      x = d;
      let l = f[u(2197)];
      this[u(1149)][u(368)] && (l = l[u(576)](this[u(1149)][u(368)]));
      const g = t[u(2474)] !== void 0 && !m0(t.count), h = g && !t[u(1831)] && t.count === 0, m = t.context !== void 0 && (m0(t.context) || typeof t.context === u(369)) && t[u(597)] !== "", y = t[u(1539)] ? t.lngs : this[u(699)][u(2057)](t[u(1090)] || this[u(652)], t[u(512)]);
      l[u(1562)]((w) => {
        var q, O;
        const E = u;
        this[E(1686)](s) || (o = w, !Ns[y[0] + "-" + w] && ((q = this.utils) != null && q.hasLoadedNamespace) && !((O = this[E(2422)]) != null && O.hasLoadedNamespace(o)) && (Ns[y[0] + "-" + w] = !0, this[E(1475)][E(455)](E(873) + x + E(2136) + y[E(2373)](", ") + E(990) + o + E(746), E(1857))), y[E(1562)]((P) => {
          var D;
          const S = E;
          if (this[S(1686)](s)) return;
          a = P;
          const R = [d];
          if ((D = this[S(2092)]) != null && D[S(380)]) this[S(2092)].addLookupKeys(R, d, P, w, t);
          else {
            let M;
            g && (M = this[S(645)][S(317)](P, t[S(2474)], t));
            const N = this[S(1149)][S(2248)] + S(1303), I = this[S(1149)][S(2248)] + S(1831) + this.options.pluralSeparator;
            if (g && (R.push(d + M), t[S(1831)] && M[S(1563)](I) === 0 && R[S(1251)](d + M[S(969)](I, this.options[S(2248)])), h && R[S(1251)](d + N)), m) {
              const U = "" + d + this[S(1149)][S(1032)] + t[S(597)];
              R[S(1251)](U), g && (R[S(1251)](U + M), t.ordinal && M.indexOf(I) === 0 && R[S(1251)](U + M[S(969)](I, this[S(1149)].pluralSeparator)), h && R[S(1251)](U + N));
            }
          }
          let j;
          for (; j = R.pop(); )
            !this.isValidLookup(s) && (r = j, s = this[S(2308)](P, w, j, t));
        }));
      });
    }), { res: s, usedKey: x, exactUsedKey: r, usedLng: a, usedNS: o };
  }
  [n(1686)](e) {
    const t = n;
    return e !== void 0 && !(!this[t(1149)][t(1741)] && e === null) && !(!this[t(1149)][t(919)] && e === "");
  }
  [n(2308)](e, t, s, x = {}) {
    var a;
    const r = n;
    return (a = this[r(2092)]) != null && a[r(2308)] ? this[r(2092)].getResource(e, t, s, x) : this[r(810)][r(2308)](e, t, s, x);
  }
  [n(2460)](e = {}) {
    const t = n, s = [t(687), t(1831), "context", "replace", t(1090), t(1539), t(512), "ns", t(2327), t(268), t(2191), t(2315), "joinArrays", t(2310), "interpolation"], x = e[t(969)] && !m0(e[t(969)]);
    let r = x ? e.replace : e;
    if (x && typeof e.count < "u" && (r[t(2474)] = e[t(2474)]), this.options[t(2229)].defaultVariables && (r = { ...this[t(1149)][t(2229)][t(1320)], ...r }), !x) {
      r = { ...r };
      for (const a of s)
        delete r[a];
    }
    return r;
  }
  static [n(1189)](e) {
    const t = n, s = "defaultValue";
    for (const x in e)
      if (Object.prototype[t(724)][t(896)](e, x) && s === x[t(1455)](0, s[t(1586)]) && e[x] !== void 0) return !0;
    return !1;
  }
}
class Os {
  constructor(e) {
    const t = n;
    this[t(1149)] = e, this[t(618)] = this[t(1149)].supportedLngs || !1, this[t(1475)] = dx[t(2519)](t(699));
  }
  getScriptPartFromCode(e) {
    const t = n;
    if (e = se(e), !e || e[t(1563)]("-") < 0) return null;
    const s = e.split("-");
    return s[t(1586)] === 2 || (s.pop(), s[s.length - 1][t(383)]() === "x") ? null : this.formatLanguageCode(s[t(2373)]("-"));
  }
  [n(1248)](e) {
    if (e = se(e), !e || e.indexOf("-") < 0) return e;
    const t = e.split("-");
    return this.formatLanguageCode(t[0]);
  }
  [n(1927)](e) {
    const t = n;
    if (m0(e) && e[t(1563)]("-") > -1) {
      let s;
      try {
        s = Intl[t(2141)](e)[0];
      } catch {
      }
      return s && this[t(1149)].lowerCaseLng && (s = s.toLowerCase()), s || (this.options[t(680)] ? e.toLowerCase() : e);
    }
    return this.options[t(2184)] || this[t(1149)][t(680)] ? e[t(383)]() : e;
  }
  [n(861)](e) {
    const t = n;
    return (this[t(1149)][t(1208)] === t(1019) || this[t(1149)][t(2041)]) && (e = this[t(1248)](e)), !this[t(618)] || !this[t(618)][t(1586)] || this.supportedLngs[t(1563)](e) > -1;
  }
  [n(1470)](e) {
    const t = n;
    if (!e) return null;
    let s;
    return e.forEach((x) => {
      const r = B;
      if (s) return;
      const a = this[r(1927)](x);
      (!this[r(1149)][r(618)] || this[r(861)](a)) && (s = a);
    }), !s && this[t(1149)][t(618)] && e[t(1562)]((x) => {
      const r = t;
      if (s) return;
      const a = this.getScriptPartFromCode(x);
      if (this[r(861)](a)) return s = a;
      const o = this[r(1248)](x);
      if (this[r(861)](o)) return s = o;
      s = this.options[r(618)][r(1703)]((c) => {
        const u = r;
        if (c === o) return c;
        if (!(c[u(1563)]("-") < 0 && o[u(1563)]("-") < 0) && (c[u(1563)]("-") > 0 && o.indexOf("-") < 0 && c[u(1455)](0, c[u(1563)]("-")) === o || c[u(1563)](o) === 0 && o[u(1586)] > 1))
          return c;
      });
    }), s || (s = this[t(1818)](this[t(1149)][t(512)])[0]), s;
  }
  [n(1818)](e, t) {
    const s = n;
    if (!e) return [];
    if (typeof e === s(730) && (e = e(t)), m0(e) && (e = [e]), Array[s(752)](e)) return e;
    if (!t) return e[s(664)] || [];
    let x = e[t];
    return x || (x = e[this[s(441)](t)]), x || (x = e[this[s(1927)](t)]), x || (x = e[this[s(1248)](t)]), x || (x = e.default), x || [];
  }
  [n(2057)](e, t) {
    const s = n, x = this[s(1818)]((t === !1 ? [] : t) || this[s(1149)][s(512)] || [], e), r = [], a = (o) => {
      const c = s;
      o && (this[c(861)](o) ? r.push(o) : this[c(1475)][c(455)](c(565) + o));
    };
    return m0(e) && (e[s(1563)]("-") > -1 || e[s(1563)]("_") > -1) ? (this[s(1149)][s(1208)] !== s(1019) && a(this[s(1927)](e)), this.options[s(1208)] !== s(1019) && this[s(1149)][s(1208)] !== "currentOnly" && a(this[s(441)](e)), this[s(1149)].load !== "currentOnly" && a(this[s(1248)](e))) : m0(e) && a(this.formatLanguageCode(e)), x[s(1562)]((o) => {
      const c = s;
      r[c(1563)](o) < 0 && a(this[c(1927)](o));
    }), r;
  }
}
const As = { zero: 0, one: 1, two: 2, few: 3, many: 4, other: 5 }, Ts = { select: (i) => n(i === 1 ? 1669 : 963), resolvedOptions: () => ({ pluralCategories: [n(1669), n(963)] }) };
class n2 {
  constructor(e, t = {}) {
    const s = n;
    this[s(699)] = e, this.options = t, this[s(1475)] = dx.create(s(645)), this[s(742)] = {};
  }
  [n(1823)](e, t) {
    const s = n;
    this[s(1157)][e] = t;
  }
  [n(1416)]() {
    const e = n;
    this[e(742)] = {};
  }
  [n(2159)](e, t = {}) {
    const s = n, x = se(e === "dev" ? "en" : e), r = t[s(1831)] ? s(1831) : "cardinal", a = JSON.stringify({ cleanedCode: x, type: r });
    if (a in this[s(742)]) return this[s(742)][a];
    let o;
    try {
      o = new Intl[s(570)](x, { type: r });
    } catch {
      if (!Intl) return this[s(1475)][s(549)](s(1880)), Ts;
      if (!e.match(/-|_/)) return Ts;
      const u = this[s(699)][s(1248)](e);
      o = this[s(2159)](u, t);
    }
    return this.pluralRulesCache[a] = o, o;
  }
  [n(1891)](e, t = {}) {
    const s = n;
    let x = this.getRule(e, t);
    return x || (x = this[s(2159)](s(1560), t)), (x == null ? void 0 : x[s(450)]()[s(1104)][s(1586)]) > 1;
  }
  getPluralFormsOfKey(e, t, s = {}) {
    const x = n;
    return this[x(2461)](e, s)[x(1889)]((r) => "" + t + r);
  }
  getSuffixes(e, t = {}) {
    const s = n;
    let x = this.getRule(e, t);
    return x || (x = this.getRule(s(1560), t)), x ? x[s(450)]().pluralCategories[s(1962)]((r, a) => As[r] - As[a])[s(1889)]((r) => "" + this[s(1149)].prepend + (t[s(1831)] ? s(1831) + this[s(1149)][s(2314)] : "") + r) : [];
  }
  [n(317)](e, t, s = {}) {
    const x = n, r = this[x(2159)](e, s);
    return r ? "" + this[x(1149)][x(2314)] + (s.ordinal ? "ordinal" + this[x(1149)][x(2314)] : "") + r[x(1969)](t) : (this.logger[x(455)](x(623) + e), this.getSuffix("dev", t, s));
  }
}
const Ds = (i, e, t, s = ".", x = !0) => {
  let r = Xc(i, e, t);
  return !r && x && m0(t) && (r = Kt(i, t, s), r === void 0 && (r = Kt(e, t, s))), r;
}, Nt = (i) => i[n(969)](/\$/g, n(581));
class a2 {
  constructor(e = {}) {
    var s;
    const t = n;
    this[t(1475)] = dx[t(2519)]("interpolator"), this.options = e, this[t(1156)] = ((s = e == null ? void 0 : e.interpolation) == null ? void 0 : s[t(1156)]) || ((x) => x), this.init(e);
  }
  [n(1726)](e = {}) {
    const t = n;
    e[t(2229)] || (e[t(2229)] = { escapeValue: !0 });
    const { escape: s, escapeValue: x, useRawValueToEscape: r, prefix: a, prefixEscaped: o, suffix: c, suffixEscaped: u, formatSeparator: f, unescapeSuffix: d, unescapePrefix: l, nestingPrefix: g, nestingPrefixEscaped: h, nestingSuffix: m, nestingSuffixEscaped: y, nestingOptionsSeparator: w, maxReplaces: E, alwaysFormat: q } = e[t(2229)];
    this[t(1719)] = s !== void 0 ? s : _c, this[t(1529)] = x !== void 0 ? x : !0, this.useRawValueToEscape = r !== void 0 ? r : !1, this[t(577)] = a ? Ux(a) : o || "{{", this[t(550)] = c ? Ux(c) : u || "}}", this[t(805)] = f || ",", this[t(2425)] = d ? "" : l || "-", this[t(1034)] = this[t(2425)] ? "" : d || "", this[t(788)] = g ? Ux(g) : h || Ux(t(357)), this[t(412)] = m ? Ux(m) : y || Ux(")"), this.nestingOptionsSeparator = w || ",", this[t(2224)] = E || 1e3, this[t(1487)] = q !== void 0 ? q : !1, this[t(878)]();
  }
  [n(961)]() {
    const e = n;
    this[e(1149)] && this[e(1726)](this[e(1149)]);
  }
  [n(878)]() {
    const e = n, t = (s, x) => {
      const r = B;
      return (s == null ? void 0 : s[r(1826)]) === x ? (s[r(2051)] = 0, s) : new RegExp(x, "g");
    };
    this[e(2074)] = t(this[e(2074)], this[e(577)] + e(1632) + this[e(550)]), this[e(1890)] = t(this[e(1890)], "" + this.prefix + this.unescapePrefix + e(1632) + this[e(1034)] + this[e(550)]), this[e(1745)] = t(this[e(1745)], this[e(788)] + e(1632) + this[e(412)]);
  }
  interpolate(e, t, s, x) {
    var h;
    const r = n;
    let a, o, c;
    const u = this[r(1149)] && this[r(1149)][r(2229)] && this[r(1149)].interpolation[r(1320)] || {}, f = (m) => {
      const y = r;
      if (m.indexOf(this[y(805)]) < 0) {
        const O = Ds(t, u, m, this[y(1149)][y(2327)], this[y(1149)][y(1993)]);
        return this[y(1487)] ? this[y(1156)](O, void 0, s, { ...x, ...t, interpolationkey: m }) : O;
      }
      const w = m[y(458)](this[y(805)]), E = w[y(1002)]()[y(1420)](), q = w[y(2373)](this[y(805)])[y(1420)]();
      return this.format(Ds(t, u, E, this[y(1149)][y(2327)], this[y(1149)].ignoreJSONStructure), q, s, { ...x, ...t, interpolationkey: E });
    };
    this.resetRegExp();
    const d = (x == null ? void 0 : x[r(649)]) || this[r(1149)][r(649)], l = ((h = x == null ? void 0 : x[r(2229)]) == null ? void 0 : h[r(340)]) !== void 0 ? x.interpolation[r(340)] : this.options[r(2229)][r(340)];
    return [{ regex: this[r(1890)], safeValue: (m) => Nt(m) }, { regex: this.regexp, safeValue: (m) => this.escapeValue ? Nt(this[r(1719)](m)) : Nt(m) }].forEach((m) => {
      const y = r;
      for (c = 0; a = m.regex.exec(e); ) {
        const w = a[1][y(1420)]();
        if (o = f(w), o === void 0)
          if (typeof d === y(730)) {
            const q = d(e, a, x);
            o = m0(q) ? q : "";
          } else if (x && Object[y(2173)][y(724)][y(896)](x, w)) o = "";
          else if (l) {
            o = a[0];
            continue;
          } else this[y(1475)][y(455)](y(1268) + w + " for interpolating " + e), o = "";
        else !m0(o) && !this[y(1235)] && (o = Ps(o));
        const E = m[y(2273)](o);
        if (e = e[y(969)](a[0], E), l ? (m[y(1367)][y(2051)] += o[y(1586)], m[y(1367)][y(2051)] -= a[0].length) : m[y(1367)][y(2051)] = 0, c++, c >= this[y(2224)]) break;
      }
    }), e;
  }
  [n(2345)](e, t, s = {}) {
    const x = n;
    let r, a, o;
    const c = (u, f) => {
      const d = B, l = this[d(2557)];
      if (u[d(1563)](l) < 0) return u;
      const g = u[d(458)](new RegExp(l + d(579)));
      let h = "{" + g[1];
      u = g[0], h = this[d(1166)](h, o);
      const m = h[d(415)](/'/g), y = h.match(/"/g);
      (((m == null ? void 0 : m[d(1586)]) ?? 0) % 2 === 0 && !y || y[d(1586)] % 2 !== 0) && (h = h[d(969)](/'/g, '"'));
      try {
        o = JSON[d(1938)](h), f && (o = { ...f, ...o });
      } catch (w) {
        return this.logger[d(455)](d(1964) + u, w), "" + u + l + h;
      }
      return o.defaultValue && o.defaultValue.indexOf(this[d(577)]) > -1 && delete o[d(687)], u;
    };
    for (; r = this[x(1745)][x(837)](e); ) {
      let u = [];
      o = { ...s }, o = o[x(969)] && !m0(o.replace) ? o[x(969)] : o, o[x(1916)] = !1, delete o.defaultValue;
      let f = !1;
      if (r[0][x(1563)](this[x(805)]) !== -1 && !/{.*}/[x(2500)](r[1])) {
        const d = r[1][x(458)](this[x(805)])[x(1889)]((l) => l.trim());
        r[1] = d.shift(), u = d, f = !0;
      }
      if (a = t(c[x(896)](this, r[1][x(1420)](), o), o), a && r[0] === e && !m0(a)) return a;
      m0(a) || (a = Ps(a)), !a && (this[x(1475)][x(455)](x(1033) + r[1] + x(1901) + e), a = ""), f && (a = u[x(407)]((d, l) => this.format(d, l, s[x(1090)], { ...s, interpolationkey: r[1][x(1420)]() }), a[x(1420)]())), e = e[x(969)](r[0], a), this[x(2074)][x(2051)] = 0;
    }
    return e;
  }
}
const i2 = (i) => {
  const e = n;
  let t = i[e(383)]()[e(1420)]();
  const s = {};
  if (i[e(1563)]("(") > -1) {
    const x = i[e(458)]("(");
    t = x[0][e(383)]()[e(1420)]();
    const r = x[1][e(1455)](0, x[1][e(1586)] - 1);
    t === e(1522) && r[e(1563)](":") < 0 ? s[e(1522)] || (s[e(1522)] = r[e(1420)]()) : t === "relativetime" && r[e(1563)](":") < 0 ? s[e(2287)] || (s[e(2287)] = r.trim()) : r[e(458)](";")[e(1562)]((o) => {
      const c = e;
      if (o) {
        const [u, ...f] = o[c(458)](":"), d = f[c(2373)](":").trim().replace(/^'+|'+$/g, ""), l = u[c(1420)]();
        s[l] || (s[l] = d), d === "false" && (s[l] = !1), d === c(1863) && (s[l] = !0), isNaN(d) || (s[l] = parseInt(d, 10));
      }
    });
  }
  return { formatName: t, formatOptions: s };
}, js = (i) => {
  const e = {};
  return (t, s, x) => {
    const r = B;
    let a = x;
    x && x[r(1684)] && x[r(2395)] && x[r(2395)][x[r(1684)]] && x[x[r(1684)]] && (a = { ...a, [x[r(1684)]]: void 0 });
    const o = s + JSON.stringify(a);
    let c = e[o];
    return !c && (c = i(se(s), x), e[o] = c), c(t);
  };
}, o2 = (i) => (e, t, s) => i(se(t), s)(e);
class c2 {
  constructor(e = {}) {
    const t = n;
    this[t(1475)] = dx[t(2519)]("formatter"), this[t(1149)] = e, this[t(1726)](e);
  }
  [n(1726)](e, t = { interpolation: {} }) {
    const s = n;
    this[s(805)] = t[s(2229)][s(805)] || ",";
    const x = t[s(2413)] ? js : o2;
    this.formats = { number: x((r, a) => {
      const o = s, c = new Intl[o(2103)](r, { ...a });
      return (u) => c[o(1156)](u);
    }), currency: x((r, a) => {
      const o = s, c = new Intl[o(2103)](r, { ...a, style: "currency" });
      return (u) => c.format(u);
    }), datetime: x((r, a) => {
      const o = s, c = new Intl[o(1062)](r, { ...a });
      return (u) => c[o(1156)](u);
    }), relativetime: x((r, a) => {
      const o = s, c = new Intl[o(1806)](r, { ...a });
      return (u) => c[o(1156)](u, a[o(2287)] || o(1976));
    }), list: x((r, a) => {
      const o = s, c = new Intl[o(1179)](r, { ...a });
      return (u) => c[o(1156)](u);
    }) };
  }
  add(e, t) {
    const s = n;
    this[s(1356)][e[s(383)]()[s(1420)]()] = t;
  }
  addCached(e, t) {
    const s = n;
    this.formats[e[s(383)]()[s(1420)]()] = js(t);
  }
  [n(1156)](e, t, s, x = {}) {
    const r = n, a = t[r(458)](this.formatSeparator);
    if (a[r(1586)] > 1 && a[0][r(1563)]("(") > 1 && a[0][r(1563)](")") < 0 && a[r(1703)]((c) => c[r(1563)](")") > -1)) {
      const c = a[r(1645)]((u) => u.indexOf(")") > -1);
      a[0] = [a[0], ...a[r(748)](1, c)][r(2373)](this[r(805)]);
    }
    return a[r(407)]((c, u) => {
      var g;
      const f = r, { formatName: d, formatOptions: l } = i2(u);
      if (this.formats[d]) {
        let h = c;
        try {
          const m = ((g = x == null ? void 0 : x[f(2395)]) == null ? void 0 : g[x[f(1684)]]) || {}, y = m[f(627)] || m[f(1090)] || x[f(627)] || x.lng || s;
          h = this[f(1356)][d](c, y, { ...l, ...x, ...m });
        } catch (m) {
          this[f(1475)].warn(m);
        }
        return h;
      } else this[f(1475)].warn(f(1432) + d);
      return c;
    }, e);
  }
}
const u2 = (i, e) => {
  const t = n;
  i[t(2388)][e] !== void 0 && (delete i[t(2388)][e], i[t(2011)]--);
};
class f2 extends je {
  constructor(e, t, s, x = {}) {
    var a, o;
    const r = n;
    super(), this[r(2362)] = e, this[r(2399)] = t, this[r(911)] = s, this[r(699)] = s[r(699)], this[r(1149)] = x, this[r(1475)] = dx[r(2519)](r(2188)), this[r(1536)] = [], this.maxParallelReads = x[r(1214)] || 10, this[r(2539)] = 0, this.maxRetries = x[r(2078)] >= 0 ? x[r(2078)] : 5, this[r(286)] = x[r(286)] >= 1 ? x[r(286)] : 350, this[r(1960)] = {}, this[r(1450)] = [], (o = (a = this[r(2362)]) == null ? void 0 : a[r(1726)]) == null || o.call(a, s, x[r(2362)], x);
  }
  [n(1824)](e, t, s, x) {
    const r = n, a = {}, o = {}, c = {}, u = {};
    return e.forEach((f) => {
      const d = B;
      let l = !0;
      t[d(1562)]((g) => {
        const h = d, m = f + "|" + g;
        !s[h(2414)] && this.store[h(2069)](f, g) ? this[h(1960)][m] = 2 : this[h(1960)][m] < 0 || (this[h(1960)][m] === 1 ? o[m] === void 0 && (o[m] = !0) : (this.state[m] = 1, l = !1, o[m] === void 0 && (o[m] = !0), a[m] === void 0 && (a[m] = !0), u[g] === void 0 && (u[g] = !0)));
      }), l || (c[f] = !0);
    }), (Object[r(1001)](a)[r(1586)] || Object[r(1001)](o)[r(1586)]) && this[r(1450)][r(1251)]({ pending: o, pendingCount: Object[r(1001)](o)[r(1586)], loaded: {}, errors: [], callback: x }), { toLoad: Object.keys(a), pending: Object.keys(o), toLoadLanguages: Object[r(1001)](c), toLoadNamespaces: Object[r(1001)](u) };
  }
  [n(2303)](e, t, s) {
    const x = n, r = e[x(458)]("|"), a = r[0], o = r[1];
    t && this.emit(x(1108), a, o, t), !t && s && this[x(2399)][x(844)](a, o, s, void 0, void 0, { skipCopy: !0 }), this[x(1960)][e] = t ? -1 : 2, t && s && (this[x(1960)][e] = 0);
    const c = {};
    this[x(1450)].forEach((u) => {
      const f = x;
      Gc(u[f(2303)], [a], o), u2(u, e), t && u[f(709)].push(t), u[f(2011)] === 0 && !u[f(1591)] && (Object[f(1001)](u[f(2303)]).forEach((d) => {
        c[d] || (c[d] = {});
        const l = u.loaded[d];
        l.length && l.forEach((g) => {
          c[d][g] === void 0 && (c[d][g] = !0);
        });
      }), u[f(1591)] = !0, u[f(709)][f(1586)] ? u[f(1042)](u[f(709)]) : u[f(1042)]());
    }), this[x(1977)](x(2303), c), this.queue = this[x(1450)].filter((u) => !u[x(1591)]);
  }
  [n(2552)](e, t, s, x = 0, r = this[n(286)], a) {
    const o = n;
    if (!e[o(1586)]) return a(null, {});
    if (this.readingCalls >= this[o(1214)]) {
      this[o(1536)][o(1251)]({ lng: e, ns: t, fcName: s, tried: x, wait: r, callback: a });
      return;
    }
    this.readingCalls++;
    const c = (f, d) => {
      const l = o;
      if (this[l(2539)]--, this[l(1536)].length > 0) {
        const g = this[l(1536)][l(1002)]();
        this[l(2552)](g.lng, g.ns, g[l(1867)], g.tried, g[l(2042)], g[l(1042)]);
      }
      if (f && d && x < this[l(2078)]) {
        setTimeout(() => {
          const g = l;
          this[g(2552)][g(896)](this, e, t, s, x + 1, r * 2, a);
        }, r);
        return;
      }
      a(f, d);
    }, u = this[o(2362)][s][o(1722)](this[o(2362)]);
    if (u[o(1586)] === 2) {
      try {
        const f = u(e, t);
        f && typeof f.then === o(730) ? f.then((d) => c(null, d)).catch(c) : c(null, f);
      } catch (f) {
        c(f);
      }
      return;
    }
    return u(e, t, c);
  }
  [n(1689)](e, t, s = {}, x) {
    const r = n;
    if (!this[r(2362)]) return this[r(1475)][r(455)](r(1697)), x && x();
    m0(e) && (e = this[r(699)].toResolveHierarchy(e)), m0(t) && (t = [t]);
    const a = this[r(1824)](e, t, s, x);
    if (!a.toLoad[r(1586)])
      return a.pending[r(1586)] || x(), null;
    a[r(1440)][r(1562)]((o) => {
      this[r(1814)](o);
    });
  }
  [n(1208)](e, t, s) {
    this[n(1689)](e, t, {}, s);
  }
  [n(2414)](e, t, s) {
    this[n(1689)](e, t, { reload: !0 }, s);
  }
  loadOne(e, t = "") {
    const s = n, x = e[s(458)]("|"), r = x[0], a = x[1];
    this[s(2552)](r, a, s(2552), void 0, void 0, (o, c) => {
      const u = s;
      o && this[u(1475)].warn(t + u(1061) + a + u(1734) + r + u(533), o), !o && c && this[u(1475)][u(1919)](t + u(1652) + a + " for language " + r, c), this[u(2303)](e, o, c);
    });
  }
  [n(272)](e, t, s, x, r, a = {}, o = () => {
  }) {
    var u, f, d, l, g;
    const c = n;
    if ((f = (u = this.services) == null ? void 0 : u[c(2422)]) != null && f[c(1882)] && !((l = (d = this[c(911)]) == null ? void 0 : d[c(2422)]) != null && l.hasLoadedNamespace(t))) {
      this[c(1475)][c(455)](c(771) + s + c(2034) + t + c(746), "This means something IS WRONG in your setup. You access the t function before i18next.init / i18next.loadNamespace / i18next.changeLanguage was done. Wait for the callback or Promise to resolve before accessing it!!!");
      return;
    }
    if (!(s == null || s === "")) {
      if ((g = this[c(2362)]) != null && g[c(2519)]) {
        const h = { ...a, isUpdate: r }, m = this[c(2362)][c(2519)].bind(this[c(2362)]);
        if (m[c(1586)] < 6) try {
          let y;
          m[c(1586)] === 5 ? y = m(e, t, s, x, h) : y = m(e, t, s, x), y && typeof y[c(2055)] === c(730) ? y[c(2055)]((w) => o(null, w))[c(989)](o) : o(null, y);
        } catch (y) {
          o(y);
        }
        else m(e, t, s, x, o, h);
      }
      !e || !e[0] || this[c(2399)][c(538)](e[0], t, s, x);
    }
  }
}
const Ms = () => ({ debug: !1, initAsync: !0, ns: [n(1518)], defaultNS: [n(1518)], fallbackLng: ["dev"], fallbackNS: !1, supportedLngs: !1, nonExplicitSupportedLngs: !1, load: n(1576), preload: !1, simplifyPluralSuffix: !0, keySeparator: ".", nsSeparator: ":", pluralSeparator: "_", contextSeparator: "_", partialBundledLanguages: !1, saveMissing: !1, updateMissing: !1, saveMissingTo: n(769), saveMissingPlurals: !0, missingKeyHandler: !1, missingInterpolationHandler: !1, postProcess: !1, postProcessPassResolved: !1, returnNull: !1, returnEmptyString: !0, returnObjects: !1, joinArrays: !1, returnedObjectHandler: !1, parseMissingKeyHandler: !1, appendNamespaceToMissingKey: !1, appendNamespaceToCIMode: !1, overloadTranslationOptionHandler: (i) => {
  const e = n;
  let t = {};
  if (typeof i[1] == "object" && (t = i[1]), m0(i[1]) && (t[e(687)] = i[1]), m0(i[2]) && (t[e(949)] = i[2]), typeof i[2] === e(1395) || typeof i[3] === e(1395)) {
    const s = i[3] || i[2];
    Object[e(1001)](s)[e(1562)]((x) => {
      t[x] = s[x];
    });
  }
  return t;
}, interpolation: { escapeValue: !0, format: (i) => i, prefix: "{{", suffix: "}}", formatSeparator: ",", unescapePrefix: "-", nestingPrefix: n(357), nestingSuffix: ")", nestingOptionsSeparator: ",", maxReplaces: 1e3, skipOnVariables: !0 }, cacheInBuiltFormats: !0 }), Ls = (i) => {
  var t, s;
  const e = n;
  return m0(i.ns) && (i.ns = [i.ns]), m0(i.fallbackLng) && (i[e(512)] = [i[e(512)]]), m0(i[e(368)]) && (i[e(368)] = [i[e(368)]]), ((s = (t = i[e(618)]) == null ? void 0 : t[e(1563)]) == null ? void 0 : s.call(t, e(1903))) < 0 && (i.supportedLngs = i.supportedLngs[e(576)](["cimode"])), typeof i[e(759)] === e(320) && (i[e(1028)] = i[e(759)]), i;
}, le = () => {
}, d2 = (i) => {
  Object.getOwnPropertyNames(Object.getPrototypeOf(i)).forEach((t) => {
    const s = B;
    typeof i[t] === s(730) && (i[t] = i[t].bind(i));
  });
};
class ne extends je {
  constructor(e = {}, t) {
    const s = n;
    if (super(), this[s(1149)] = Ls(e), this[s(911)] = {}, this.logger = dx, this[s(2453)] = { external: [] }, d2(this), t && !this[s(1153)] && !e[s(1e3)]) {
      if (!this[s(1149)][s(1028)]) return this[s(1726)](e, t), this;
      setTimeout(() => {
        this[s(1726)](e, t);
      }, 0);
    }
  }
  [n(1726)](e = {}, t) {
    const s = n;
    this[s(2547)] = !0, typeof e === s(730) && (t = e, e = {}), e[s(1045)] == null && e.ns && (m0(e.ns) ? e.defaultNS = e.ns : e.ns[s(1563)](s(1518)) < 0 && (e[s(1045)] = e.ns[0]));
    const x = Ms();
    this[s(1149)] = { ...x, ...this[s(1149)], ...Ls(e) }, this[s(1149)][s(2229)] = { ...x[s(2229)], ...this[s(1149)].interpolation }, e[s(2327)] !== void 0 && (this.options.userDefinedKeySeparator = e.keySeparator), e[s(268)] !== void 0 && (this[s(1149)][s(1066)] = e[s(268)]);
    const r = (f) => {
      const d = s;
      return f ? typeof f === d(730) ? new f() : f : null;
    };
    if (!this[s(1149)][s(1e3)]) {
      this.modules.logger ? dx.init(r(this[s(2453)].logger), this[s(1149)]) : dx[s(1726)](null, this[s(1149)]);
      let f;
      this[s(2453)].formatter ? f = this.modules[s(1370)] : f = c2;
      const d = new Os(this[s(1149)]);
      this[s(2399)] = new Fs(this[s(1149)].resources, this[s(1149)]);
      const l = this[s(911)];
      l[s(1475)] = dx, l.resourceStore = this[s(2399)], l[s(699)] = d, l.pluralResolver = new n2(d, { prepend: this.options.pluralSeparator, simplifyPluralSuffix: this[s(1149)][s(2110)] }), f && (!this[s(1149)].interpolation.format || this[s(1149)].interpolation[s(1156)] === x[s(2229)].format) && (l.formatter = r(f), l[s(1370)].init(l, this[s(1149)]), this[s(1149)].interpolation[s(1156)] = l.formatter[s(1156)][s(1722)](l.formatter)), l[s(903)] = new a2(this[s(1149)]), l[s(2422)] = { hasLoadedNamespace: this.hasLoadedNamespace[s(1722)](this) }, l[s(2188)] = new f2(r(this[s(2453)][s(2362)]), l.resourceStore, l, this[s(1149)]), l[s(2188)].on("*", (g, ...h) => {
        this[s(1977)](g, ...h);
      }), this[s(2453)][s(951)] && (l[s(951)] = r(this.modules.languageDetector), l[s(951)].init && l[s(951)][s(1726)](l, this.options[s(2416)], this[s(1149)])), this.modules.i18nFormat && (l[s(2092)] = r(this.modules.i18nFormat), l.i18nFormat.init && l[s(2092)][s(1726)](this)), this[s(2457)] = new Fe(this[s(911)], this[s(1149)]), this[s(2457)].on("*", (g, ...h) => {
        this[s(1977)](g, ...h);
      }), this[s(2453)].external[s(1562)]((g) => {
        const h = s;
        g[h(1726)] && g[h(1726)](this);
      });
    }
    if (this[s(1156)] = this[s(1149)].interpolation[s(1156)], t || (t = le), this[s(1149)].fallbackLng && !this[s(911)][s(951)] && !this.options[s(1090)]) {
      const f = this[s(911)][s(699)][s(1818)](this[s(1149)][s(512)]);
      f.length > 0 && f[0] !== s(1560) && (this[s(1149)][s(1090)] = f[0]);
    }
    !this[s(911)][s(951)] && !this[s(1149)][s(1090)] && this[s(1475)][s(455)](s(849)), [s(2308), s(2069), s(483), s(928)][s(1562)]((f) => {
      const d = s;
      this[f] = (...l) => this[d(2399)][f](...l);
    }), [s(538), s(2393), "addResourceBundle", "removeResourceBundle"][s(1562)]((f) => {
      this[f] = (...d) => (this[B(2399)][f](...d), this);
    });
    const c = Gx(), u = () => {
      const f = s, d = (l, g) => {
        const h = B;
        this[h(2547)] = !1, this[h(1153)] && !this[h(1141)] && this[h(1475)][h(455)](h(2498)), this.isInitialized = !0, this.options[h(1e3)] || this[h(1475)][h(1919)](h(2356), this[h(1149)]), this[h(1977)](h(2356), this[h(1149)]), c.resolve(g), t(l, g);
      };
      if (this.languages && !this[f(1153)]) return d(null, this.t[f(1722)](this));
      this.changeLanguage(this[f(1149)][f(1090)], d);
    };
    return this[s(1149)][s(1865)] || !this.options[s(1028)] ? u() : setTimeout(u, 0), c;
  }
  [n(2529)](e, t = le) {
    var a, o;
    const s = n;
    let x = t;
    const r = m0(e) ? e : this[s(652)];
    if (typeof e == "function" && (x = e), !this[s(1149)][s(1865)] || this[s(1149)][s(2473)]) {
      if ((r == null ? void 0 : r.toLowerCase()) === s(1903) && (!this[s(1149)][s(2079)] || this[s(1149)].preload[s(1586)] === 0)) return x();
      const c = [], u = (f) => {
        const d = s;
        if (!f || f === d(1903)) return;
        this[d(911)][d(699)][d(2057)](f)[d(1562)]((g) => {
          const h = d;
          g !== "cimode" && c[h(1563)](g) < 0 && c[h(1251)](g);
        });
      };
      r ? u(r) : this.services[s(699)][s(1818)](this[s(1149)][s(512)])[s(1562)]((d) => u(d)), (o = (a = this[s(1149)][s(2079)]) == null ? void 0 : a[s(1562)]) == null || o.call(a, (f) => u(f)), this.services[s(2188)][s(1208)](c, this[s(1149)].ns, (f) => {
        const d = s;
        !f && !this.resolvedLanguage && this[d(652)] && this[d(1659)](this[d(652)]), x(f);
      });
    } else x(null);
  }
  [n(1939)](e, t, s) {
    const x = n, r = Gx();
    return typeof e == "function" && (s = e, e = void 0), typeof t === x(730) && (s = t, t = void 0), e || (e = this.languages), t || (t = this[x(1149)].ns), s || (s = le), this.services[x(2188)][x(2414)](e, t, (a) => {
      r[x(1666)](), s(a);
    }), r;
  }
  [n(2320)](e) {
    const t = n;
    if (!e) throw new Error(t(1015));
    if (!e[t(1594)]) throw new Error(t(1807));
    return e.type === t(2362) && (this.modules[t(2362)] = e), (e[t(1594)] === t(1475) || e[t(1919)] && e[t(455)] && e[t(549)]) && (this[t(2453)].logger = e), e.type === t(951) && (this.modules[t(951)] = e), e[t(1594)] === t(2092) && (this[t(2453)][t(2092)] = e), e.type === t(2350) && da[t(1858)](e), e[t(1594)] === t(1370) && (this[t(2453)][t(1370)] = e), e[t(1594)] === "3rdParty" && this.modules[t(843)][t(1251)](e), this;
  }
  [n(1659)](e) {
    const t = n;
    if (!(!e || !this[t(1769)]) && !([t(1903), t(1560)][t(1563)](e) > -1)) {
      for (let s = 0; s < this[t(1769)][t(1586)]; s++) {
        const x = this[t(1769)][s];
        if (!(["cimode", t(1560)][t(1563)](x) > -1) && this[t(2399)][t(1123)](x)) {
          this[t(1234)] = x;
          break;
        }
      }
      !this.resolvedLanguage && this[t(1769)][t(1563)](e) < 0 && this.store[t(1123)](e) && (this[t(1234)] = e, this[t(1769)][t(2553)](e));
    }
  }
  [n(1991)](e, t) {
    const s = n;
    this[s(1639)] = e;
    const x = Gx();
    this.emit(s(1936), e);
    const r = (c) => {
      const u = s;
      this[u(652)] = c, this[u(1769)] = this.services.languageUtils[u(2057)](c), this.resolvedLanguage = void 0, this[u(1659)](c);
    }, a = (c, u) => {
      const f = s;
      u ? this.isLanguageChangingTo === e && (r(u), this[f(2457)][f(1991)](u), this[f(1639)] = void 0, this[f(1977)]("languageChanged", u), this.logger[f(1919)](f(1609), u)) : this[f(1639)] = void 0, x[f(1666)]((...d) => this.t(...d)), t && t(c, (...d) => this.t(...d));
    }, o = (c) => {
      var l, g;
      const u = s;
      !e && !c && this[u(911)][u(951)] && (c = []);
      const f = m0(c) ? c : c && c[0], d = this[u(2399)][u(1123)](f) ? f : this[u(911)].languageUtils.getBestMatchFromCodes(m0(c) ? [c] : c);
      d && (!this.language && r(d), this[u(2457)][u(652)] || this.translator[u(1991)](d), (g = (l = this.services.languageDetector) == null ? void 0 : l[u(1282)]) == null || g.call(l, d)), this[u(2529)](d, (h) => {
        a(h, d);
      });
    };
    return !e && this[s(911)][s(951)] && !this[s(911)][s(951)][s(646)] ? o(this[s(911)][s(951)].detect()) : !e && this[s(911)].languageDetector && this[s(911)][s(951)][s(646)] ? this[s(911)][s(951)][s(1211)][s(1586)] === 0 ? this[s(911)][s(951)][s(1211)]()[s(2055)](o) : this[s(911)][s(951)][s(1211)](o) : o(e), x;
  }
  getFixedT(e, t, s) {
    const x = n, r = (a, o, ...c) => {
      const u = B;
      let f;
      typeof o != "object" ? f = this[u(1149)].overloadTranslationOptionHandler([a, o][u(576)](c)) : f = { ...o }, f[u(1090)] = f[u(1090)] || r[u(1090)], f[u(1539)] = f[u(1539)] || r.lngs, f.ns = f.ns || r.ns, f[u(1374)] !== "" && (f[u(1374)] = f[u(1374)] || s || r.keyPrefix);
      const d = this[u(1149)][u(2327)] || ".";
      let l;
      return f[u(1374)] && Array[u(752)](a) ? l = a[u(1889)]((g) => "" + f[u(1374)] + d + g) : l = f[u(1374)] ? "" + f[u(1374)] + d + a : a, this.t(l, f);
    };
    return m0(e) ? r[x(1090)] = e : r[x(1539)] = e, r.ns = t, r.keyPrefix = s, r;
  }
  t(...e) {
    var s;
    const t = n;
    return (s = this[t(2457)]) == null ? void 0 : s[t(1630)](...e);
  }
  [n(2196)](...e) {
    var s;
    const t = n;
    return (s = this[t(2457)]) == null ? void 0 : s[t(2196)](...e);
  }
  [n(701)](e) {
    const t = n;
    this[t(1149)][t(1045)] = e;
  }
  [n(1882)](e, t = {}) {
    const s = n;
    if (!this[s(1153)]) return this.logger[s(455)](s(2032), this[s(1769)]), !1;
    if (!this[s(1769)] || !this.languages[s(1586)]) return this.logger[s(455)](s(1525), this[s(1769)]), !1;
    const x = t[s(1090)] || this.resolvedLanguage || this[s(1769)][0], r = this[s(1149)] ? this[s(1149)][s(512)] : !1, a = this.languages[this[s(1769)][s(1586)] - 1];
    if (x.toLowerCase() === s(1903)) return !0;
    const o = (c, u) => {
      const f = s, d = this.services[f(2188)][f(1960)][c + "|" + u];
      return d === -1 || d === 0 || d === 2;
    };
    if (t[s(1998)]) {
      const c = t.precheck(this, o);
      if (c !== void 0) return c;
    }
    return !!(this[s(2069)](x, e) || !this[s(911)].backendConnector.backend || this.options[s(1865)] && !this.options[s(2473)] || o(x, e) && (!r || o(a, e)));
  }
  [n(1879)](e, t) {
    const s = n, x = Gx();
    return this.options.ns ? (m0(e) && (e = [e]), e[s(1562)]((r) => {
      const a = s;
      this[a(1149)].ns[a(1563)](r) < 0 && this.options.ns[a(1251)](r);
    }), this[s(2529)]((r) => {
      x[s(1666)](), t && t(r);
    }), x) : (t && t(), Promise[s(1666)]());
  }
  [n(534)](e, t) {
    const s = n, x = Gx();
    m0(e) && (e = [e]);
    const r = this[s(1149)][s(2079)] || [], a = e.filter((o) => r.indexOf(o) < 0 && this[s(911)][s(699)][s(861)](o));
    return a[s(1586)] ? (this.options[s(2079)] = r[s(576)](a), this[s(2529)]((o) => {
      x[s(1666)](), t && t(o);
    }), x) : (t && t(), Promise.resolve());
  }
  [n(2521)](e) {
    var r, a;
    const t = n;
    if (e || (e = this[t(1234)] || (((r = this[t(1769)]) == null ? void 0 : r[t(1586)]) > 0 ? this[t(1769)][0] : this[t(652)])), !e) return "rtl";
    const s = ["ar", t(2548), t(2061), "ssh", t(1984), t(920), t(1196), t(971), "abh", "abv", t(312), t(594), t(1287), t(2319), t(353), t(1176), t(1097), "aeb", t(569), t(988), t(271), t(2013), "apd", t(2278), t(1264), t(1687), t(695), t(962), t(276), t(394), "ayh", "ayl", t(1656), "ayp", t(1718), t(1934), "he", "iw", "ps", t(1624), t(1292), t(1172), t(1481), t(832), "ug", "ur", "ydd", "yds", t(1289), "ji", "yi", t(883), t(1004), "xmn", "fa", "jpr", t(2465), t(274), t(1389), "dv", t(2131), t(364)], x = ((a = this[t(911)]) == null ? void 0 : a.languageUtils) || new Os(Ms());
    return s[t(1563)](x.getLanguagePartFromCode(e)) > -1 || e[t(383)]()[t(1563)](t(1520)) > 1 ? "rtl" : t(1212);
  }
  static createInstance(e = {}, t) {
    return new ne(e, t);
  }
  [n(821)](e = {}, t = le) {
    const s = n, x = e[s(1348)];
    x && delete e.forkResourceStore;
    const r = { ...this[s(1149)], ...e, isClone: !0 }, a = new ne(r);
    if ((e[s(1335)] !== void 0 || e[s(577)] !== void 0) && (a[s(1475)] = a[s(1475)].clone(e)), [s(2399), s(911), s(652)].forEach((c) => {
      a[c] = this[c];
    }), a.services = { ...this[s(911)] }, a.services[s(2422)] = { hasLoadedNamespace: a.hasLoadedNamespace[s(1722)](a) }, x) {
      const c = Object[s(1001)](this.store[s(1024)])[s(407)]((u, f) => {
        const d = s;
        return u[f] = { ...this.store[d(1024)][f] }, u[f] = Object.keys(u[f])[d(407)]((l, g) => (l[g] = { ...u[f][g] }, l), u[f]), u;
      }, {});
      a.store = new Fs(c, r), a[s(911)][s(810)] = a.store;
    }
    return a.translator = new Fe(a[s(911)], r), a[s(2457)].on("*", (c, ...u) => {
      a[s(1977)](c, ...u);
    }), a[s(1726)](r, t), a[s(2457)][s(1149)] = r, a.translator[s(2188)].services.utils = { hasLoadedNamespace: a[s(1882)].bind(a) }, a;
  }
  [n(2508)]() {
    const e = n;
    return { options: this[e(1149)], store: this[e(2399)], language: this.language, languages: this.languages, resolvedLanguage: this[e(1234)] };
  }
}
const G0 = ne[n(1270)]();
G0.createInstance = ne[n(1270)], G0.createInstance, G0[n(2521)], G0.init, G0[n(2529)], G0[n(1939)], G0[n(2320)], G0.changeLanguage, G0[n(516)], G0.t, G0[n(2196)], G0[n(701)], G0[n(1882)], G0[n(1879)], G0[n(534)];
function l2() {
  const i = n;
  if (typeof navigator !== i(1319) && navigator[i(652)]) return navigator[i(652)] === i(1069) ? i(1069) : i(1675);
  try {
    const e = typeof require < "u" ? require : void 0;
    if (e)
      return e(i(1191)).host[i(626)][i(1710)]("zh") ? i(1069) : i(1675);
  } catch {
  }
  return i(1675);
}
let la = l2();
const h2 = { "zh-CN": {}, "en-US": {} };
function Ne() {
  const i = [" throw new ValidationError([", "++) { var ", "at least", "getRule", "if ( ", "44018850msQhfc", "resources/read", "maxValue", "getPath", "请选择要发送图像的位置", "Method not found", "progress", "ZodFunction", "unescapeFragment", "Download", ".dataPath = (dataPath || '') + ", "newlayer_selection", "prototype", " to ", "augment", "invalid_union_discriminator", "simpleTypes", "获取选区失败", "#FF0099", "executed", "getNodeStore", "Negative Crop", "addFormat", "cleanCode", "#6633CC", "_exclusiveLimit", " && ( ", "backendConnector", ".hasOwnProperty(", "; }", "returnObjects", " && !", "bindProducer", "obj", "Invalid proxy forwarding: current node ", "exists", "namespaces", "processors", "checkDataType", "workflow-run", "; else vErrors = null; } ", " = errors === errs_", "onerror", "pong", "Click to get RunningHub APIKey", ")) {  var err =   ", "sdppp", "zod", 'unknown format "', "removeNotificationHandler", "app.queuePrompt caught", "filterByRequestId", "emoji", "optionsMap", "removeDotSegments", "#/definitions/nonNegativeInteger", "未知错误（{{code}}）", "useColors", "content", "ZodIntersection", "outputType", "isProducer", 'Only layer kind "TEXT" is supported, invalid layer: {{0}}', "maxReplaces", "equal", "strictNumbers", " = ''; ", "partial", "interpolation", "keySchema", "missingRef", "minProperties", "#6600FF", "任务未完成，当前状态: {{status}}", " items' ", "user", "missingKey", "heartbeatInterval", "added", "audio", "$comment", "[^\\%\\/\\@]", "listWorkflows", "multipleOfPrecision", "opts", "Number must be ", " validate.errors = vErrors; ", "pluralSeparator", "ZodBoolean", "some", "./api/userdata/workflows%2F.index.json", "saveWorkflow", "unbind", "validation failed", " var missing", ", deps: '", ".data = ", "lastIndexOf", " === 0 || ", "fewer", ", exclusive: ", "verbose", " , data: ", "not_multiple_of", "race", "useCustomRule", "NOT_PATH_NOSCHEME", "errs_", "isCIDR", "Current Layer", "setupStreamHandlers", " if (!", "safeValue", " === 'false' || ", "messages", "required", "Please login to use the plugin", "arb", "sdppp/updateStore/", "mesh:state:update", "Enum", "action", "设置图层的文本", "slice", "flags", "正在创建任务...", "range", " ) || ", "请选择要获取的图像", "Host's domain name can not be converted to ", "missingRefs", "localeCompare", "]; if (", "Invalid function arguments", " = null; try { ", "listRoots", "void", "_onerror", " , params: { comparison: ", "parent", "parseAsync", "getConnectedNodeIds", "loaded", "connection", "dirty", " !== parseInt(division", "Invalid name: {{0}}", "getResource", "elicitation/create", "postProcess", ").length ", "images", "Shortcut selection feature requires login", "prepend", "returnDetails", "sdppp-heartbeat", "coerceTypes", "Jump to last", "acx", "use", "HTTP URIs must have a host.", "#CC00CC", "definitions", "重启ComfyUI失败", "stringify", "definition", "keySeparator", "max", ") ) ", "Confirm", "Select layer", "typeName", "toASCII", "charAt", "false schema", " , message: 'should match some schema in anyOf' ", "_requestMessageId", "optional", " + ", "pctEncChar", ` if (typeof item == 'string') item = '"' + item; `, " ); if (isAdditional", "Client does not support sampling (required for ", "shared", "nest", "[^\\%\\:]", "#CC3300", "style", "invalid_union", "postProcessor", "当前图层", "清空所有图片", "setNotificationHandler", "notifications/roots/list_changed", "symbol", "initialized", "Keyword ", ` , message: 'should match "' + `, "invalid-input", "hours", " var i = ", "backend", "iterator", " , message: 'should be multiple of ", "schema is invalid: ", "_metaOpts", "checkState", "maxTotalTimeout", "assistant", "[A-Za-z]", "secure", "#FF33FF", "join", "_requestHandlerAbortControllers", "merge", "57237KoMlNp", " = 0; ", "widgetableStructure", "找不到图层: {{0}}", "processHandlerStream", "Host's domain name can not be converted to ASCII via punycode: ", " for (var ", "setupConnectionCloseHandler", "getAllBindings", "创建图层失败", "Invalid input", "multipleOf", "pending", "退出登录", "addMessageEventListener", "errorDataPath", "InvalidParams", "addResources", ";  if (vErrors === null) vErrors = [err]; else vErrors.push(err); errors++; } else if (", "formatParams", "base64url", "refine", "notifications/resources/list_changed", "store", "close", "workflowManager", "endsWith", "subfolder", "roots", "找不到文档: {{0}}", "Gateway timeout (504)", "smaller than", "catchall", "sdppp_assets", "Values", "nullable", "default is ignored for: ", "cacheInBuiltFormats", "reload", "))))) {", "detection", "No linked layer for {{0}}", " = +", "connecting", "returnedObjectHandler", "Server does not support sampling (required for ", "utils", "Array must contain ", " after ", "unescapePrefix", '"object"', "Cannot access data ", "invalid_type", "activeWorkflow", "port", "?\\]?$", "run", "processCode", "invalid_literal", "Comfy侧SDPPP版本({{comfyVersion}})与插件({{pluginVersion}})不匹配，运行可能有问题", "ZodNever", "#9933CC", "var ", "startHeartbeat", "getClientCapabilities", "oninitialized", "sdppp/broadcast", "Node not found", "setComfyOrgAPIKey", " , message: 'should contain a valid item' ", "Running", "#3300FF", " properties' ", " , parentSchema: validate.schema", "Your Workflows", "__proto__", "; else vErrors = null; }  ", "modules", "isConnected", "enabled", "disconnect", "translator", "actionExecutor", "defineProperty", "getUsedParamsDetails", "getSuffixes", "success", "selection", "Transport", "peo", " , message: 'should have ", "properties", "Failed to send cancellation: ", "Create layer failed", "sdpppX2", "execution_error", "date-time", "partialBundledLanguages", "count", "validateSchema", "actionHandlers", "isInt", " var async", "(\\.\\d+)?", "initializeConsumer", "oneOf", "_timeoutInfo", "separator", "#33CCCC", "requestId", "readOnly", "请选择要获取的遮罩", "此处粘贴 WebApp ID", "=0; ", "ucs2length", "{3}", "当前图层除外", "parsedType", "ifClause", "finally", "var division", " = errors;  ", "init: i18next is already initialized. You should call init just once!", "nid", "test", "path", "removeEventListener", "/*# sourceURL=", "ZodEnum", "服务不可用 (503)", "[\\uE000-\\uF8FF]", "aborted", "toJSON", "Create document for sent images", " ? '", "#FF0066", "executeHandlerAsync", " , schema: false , parentSchema: validate.schema", "#33CC33", "should NOT have additional properties", "NOT_USERINFO", "SCHEMES", ".errors", "create", "warning", "dir", "cuid2", " = 'else'; ", "_schemas", "subscribe", " + '", "1181NFxrET", "schemaHasRulesExcept", "loadResources", "dataPathArr", "[^]", "\\$&", "var refVal", "加载中...", "#00CC00", "alwaysSet", "size", "ComfyManager not found, cannot reboot", "readingCalls", "_refs", "capabilities", "host", "2025-06-18", "now", "lazycreate", "/sd-ppp-static/sdppp-workflows/", "isInitializing", "shu", "图层 {{0}} 不是一个组", "process", "validate.schema", "read", "unshift", ".async; ", " < ", "Show sent images", "nestingOptionsSeparator", "spa", "[^\\%]", "请登陆后使用插件", "%[89A-Fa-f]", " from id ", "graphInstance", " Object.keys(", "openWorkflow: ", ") {  ", "prompt_ids: ", "manuallyExtractDefaults", "nsSeparator", "usedParams", ") vErrors.length = ", "ajp", "saveMissing", "Entire Canvas", "pes", "filter", "auz", "createGlobalDispatcherForType", "token", "exactly equal to ", "Clear all images", "checkConnection", "inlineRef", "heartbeatTimer", " , message: 'boolean schema is false' ", "getConnectionInternal", "retryTimeout", "Error updating store ", "#66CC00", " must be number", "exact", "nss", " if (! ", "resolveComponents", " === ", "Instance method `debug.destroy()` is deprecated and no longer does anything. It will be removed in the next major version of `debug`.", "del", " === false || ", ") { if (vErrors === null) vErrors = ", "random", "items", "removeMessageEventListener", "mergeObjectAsync", "getDefinition", "at most", "Run Photoshop Action", "61448WzKMfB", "missingKeyNoValueFallbackToKey", "newlayer_canvas", "assertNotificationCapability", "setter", "logger must implement log, warn and error methods", "acm", "extra", "isEmpty", "Action set {{0}} not found", " } ", "getSuffix", ".dataPath === undefined) ", "currentNodeId", "boolean", "应用ID:", "next", "curlayer", ") { for (var ", "Edge references unknown source node: ", "不裁剪", " = false;for (var ", "Layer not found {{0}}", "externalListenMessageCallback", "getState", "left", "getProperty", "keywords", "{4}", "Fit to selection", "macro", "iri", " = true; ", "跳转到最后一个", "skipOnVariables", ` + '" schema' `, "string", "Email address's domain name can not be converted to ", "greater than ", "onmessage", "implementInternalAction", ";  if (vErrors === null) vErrors = [err]; else vErrors.push(err); errors++; } ", "text", "logging/setLevel", ") ) {   ", "ulid", "ActionSet {{0}} 未找到", "acy", "; if (!", "createStreamState", "url", "$t(", "pre", "emergency", "Bounds", " / ", "long", "pipe", "ckb", "isTime", "#0033CC", "__DEFAULT__", "fallbackNS", "number", "仅当前图层范围", "joinAs", "PS shortcuts may be blocked by plugin...", "logging", "禁止访问 (403)", "forwarded", "store:update:", "getItem", "%25", "#CC33CC", "addLookupKeys", " , (dataPath || '')", "#99CC00", "toLowerCase", "sendAbortedResponse", " than ", "minutes", "ZodBigInt", "正在上传...", "Date must be ", "MIN_SAFE_INTEGER", "isIP", "ZodReadonly", "additionalProperties", "avl", "[\\+\\-\\.]", " === undefined || ", "offset", "second", "pattern", "sampling", "innerType", "addMetaSchema", "get_layer_info: 需要 layer_identify", "preprocess", " ? ", "normalizeId", "reduce", "rest", "extendTranslation", "sdk", "getValidEnumValues", "nestingSuffix", "yrs", "Sending image...", "match", " !== undefined ", "createNotificationHandler", "seconds", "=== 选项 ===", "getClientVersion", " == 'string' || ", "Request timed out", "mountedEndpoints", "ZodVoid", "Failed to get result: {{error}}", "Unknown error ({{code}})", "errToObj", ` , message: 'should pass "`, "Cannot forward to node ", "请输入您的Replicate API Key", " !== undefined) ; ", "createErrors", " if (typeof itemIndices[item] == 'number') { ", "(new RegExp(", "Uncaught error in notification handler: ", "constructor", "anyOf", "_capabilities", " , params: { type: '", "openWorkflows", "getScriptPartFromCode", "sdppp://", "ping", "comfyAPI", "pingConnection", "metaSchema", "getNeighbors", "ownProperties", ", '", "resolvedOptions", "Node definition not found for ", "userDefinedKeySeparator", "<errors; ", "_key", "warn", ") {   var err =   ", "prevValid", "split", "stopAll", "如何获取APIKey和API Secret", " ) { ", "workflows/", "clear", "allErrors", "await ", "RequestTimeout", "{0,5}", "userAgent", "Get content of layer {{0}}", "secs", " not found for current node ", "[\\-\\.\\_\\~]", "'/' + ", " instanceof RegExp) && ", "table", "); for (var ", "reconnected", "2024-11-05", "handleDirectProxyForward", "Current Tasks:", "abs", "stopSequence", "getResourceBundle", "isFinite(", " is present' ", "strip", "Start auto run", "  } ", "transport", "Action ", "initialize", "#CC0033", " reference.", "自动从PS重新获取", "#FF9933", "exec_info", "util", "color: inherit", "schema $id ignored", "#00CCCC", "addIssue", "maxLength", "channel", "notification", "%c ", "获取图层信息", "_onprogress", "edges", "uuid", "_parse", "enum", "fallbackLng", "ComfyUI加载中...", "client", "hrs", "getFixedT", "Received a response for an unknown message ID: ", "registerRequestHandler", "colors", "week", "useDefaults", " == null) ", "reboot", "parentElement", "排队等待", "copy", "safeParse", "contains", "ZodSymbol", ".replace(/~/g, '~0').replace(/\\//g, '~1')", " , message: 'should be ", ")) { ", " failed", "loadLanguages", "_clientVersion", "sdppp/directRequest", "maxItems", "addResource", "[\\@]", "critical", "/then", "sendActionRequest", "onClose", "exclusiveMinimum", "alg", "#/definitions/schemaArray", "_serverInfo", "]; } else { ", "error", "suffix", "uniqueItems", "网关错误 (502)", " = undefined; ", "execution_interrupted", "refVal[", "ref/resource", "authInfo", "_responseHandlers", "_onresponse", "ZodNull", "errs__", "Clear", "alert", "如何获取APIKey", "rejecting language code not found in supportedLngs: ", " === null || ", "Server error (500)", "\\.\\d{", "aec", "PluralRules", "overloadTranslationOptionHandler", "finished", "Intersect or scaledDesire is null", "removeCatch", "after app.queuePrompt errors: ", "concat", "prefix", "debugDisableHeartbeatResponse", "[ ]*{", "sdppp_widgetable_title", "$$$$", "async schema in sync schema", "mode", "setupStreamRequestHandler", "connectionMonitor", "integer", " , message: 'should NOT be valid' ", "Internal ZodObject error: invalid unknownKeys value.", "#9900CC", "workflow", "toQuotedString", "toUpperCase", "color: ", "acq", "flatten", "minValue", "context", "setupGraphStoreSync", "ZodMap", "setupBroadcastHandler", "ZodTuple", "getPathExpr", "++) if (equal(", "_onrequest", "registerHandler", "_validateKeyword", "fullFilename", " must be number or boolean", " % 1)", "addIssues", "&subfolder=", "scheme", "[A-Za-z0-9\\!\\$\\%\\'\\*\\+\\-\\^\\_\\`\\{\\|\\}\\~]", "json", " = !(false ", "toString", "Elicitation response content does not match requested schema: ", "supportedLngs", "(?:", "mailto", " element(s)", ".call(this, ", "no plural rule found for: ", "No edge defined from ", "observers", "uiLocale", "locale", "usePattern", "createMessage", "execution_start", "pow", "_processInputParams", "readonly", " , params: { missingProperty: '", "key", "removeResourceBundle", " , params: { limit: ", "notifications/prompts/list_changed", "common", "sdppp 运行 Photoshop Action", "); if (", "resource", ") : ", "min", "pluralResolver", "async", "_cached", "[vV]", "missingInterpolationHandler", '" already exists', "Invalid attempt to destructure non-iterable instance", "language", "else", "Asynchronous transform encountered during synchronous parse operation. Use .parseAsync instead.", "click", "快捷键选图功能仅登陆后可用", "#0033FF", "nodeId", "ids", "; } catch (e) { ", "unwrap", "_cleanupTimeout", "[object Function]", "default", "rejectImage", " var errors = 0;     ", "assert", "#CC0066", ") {  for (var ", "cycles", " if (rootData === undefined) rootData = data; ", "Connection closed", "hasConsumerBinding", "custom", "#/definitions/simpleTypes", "callValidate", "comfy-uxp", "Inpaint (reverse crop)", "$schema", "lowerCaseLng", "))) { ", "Unicode", " = errors;", "keywordValidate", "_compilations", "regExpMap", "defaultValue", "_formats", " || Object.keys(", "escapeFragment", "Current layer bounds only", "$schema must be a string", "isNaN", "点此获取RunningHub APIKey", "ary", "MissingRefError", "isDuration", " = false; break outer; } } } ", "languageUtils", "storeManager", "setDefaultNamespace", "prompts/list", "i18next:", "Username: {{username}}", "stateUpdate", "datetime", "root", "params", "errors", "registerDirectRequestHandler", "item", " && ", "ZodDate", " + ']'", " = refVal[", "getRegExp", "assign", "ZodUnknown", "usedNS", "addNamespaces", "prompts", "{0,1}", "#FF9900", "hasOwnProperty", "meta", "当前任务数:", "not_finite", " !== undefined) {  ", "sendResourceListChanged", "function", "parentDataProperty", ".test(", "Unrecognized key(s) in object: ", "isCUID2", "objectValues", 'Invalid input: must start with "', "按选区裁剪", " else { ", "/else", " = false; j = itemIndices[item]; break; } itemIndices[item] = i; } ", "strictCreate", "pluralRulesCache", " !== undefined && typeof ", "Action handler ", "_options", '" was not yet loaded', "fromCharCode", "splice", "onprogress", "Workflow stopped by user", "nonempty", "isArray", "HeartbeatTimeoutError", "days", "unrecognized_keys", "unionErrors", "_errors", "file://", "initImmediate", "([^0-9])", "_error", " = [", "_limitLength", "mergeArray", "].propertyName = ", "color", "precision", "Paste WebApp ID here", "fallback", "You must pass an array of schemas to z.tuple([ ... ])", 'did not save key "', "entries", " === '' ", '" ignored in schema at path "', "http", "Execute", '$ref: keywords ignored in schema at path "', "value", "getNodeIds", "1442MdkyAU", "])) { ", "enable", "; else vErrors = null; }", "[object Number]", "A request handler for ", "__nwjs", "ZodPromise", "nestingPrefix", "Get pixel of {{0}} failed", " === undefined) ", "合并组失败", "buffer", '[\\"]', "loadSchema", "[A-Fa-f]", "res", "isBase64", ".pi-sign-out", "strict", "return", "status", "Source", "regExpQueue", "setRequestHandler", "formatSeparator", "appendNamespaceToCIMode", "画布范围", "postMessage", "No connection available for node ", "resourceStore", "logout", " === false) ", "apply", "ConnectionClosed", "requestedSchema", "Action {{0}} not found", 'id "', "App ID:", "contentMediaType", "#CC3366", "cloneInstance", "disable", "组 {{0}} 中没有第一个相关图层", "Exclude current layer", "req_", ".length == 0) {", ".additionalItems", "padEnd", "discriminator", "_addCheck", "node", "prd", "BigInt must be ", "Server does not support notifying of prompt list changes (required for ", " = false; else { ", "additionalItems", "exec", ".call( ", ", (dataPath || '')", "https", "fallbackNotificationHandler", "__esModule", "external", "addResourceBundle", "NOT_PATH", "abort", "registerBroadcastHandler", "nodeIndexes", "init: no languageDetector is used and no lng is defined", "keyword", "ZodLazy", "[BroadcastManager] Error forwarding broadcast:", "'].definition; var ", "(Queue:{{queueSize}}) {{progress}}% {{executingNodeTitle}}...", "heartbeatTimeout", "setProperty", "mountTo", "); if (!", "isSafeInteger", "finite", "isSupportedCode", "Create document for preview", "_notificationHandlers", "rootId", "addSchema", ".validate;", "sourceCode", "  errors = ", "hasEdge", "streamManager", "Error in direct request:", "invalid_date", 'key "', "resources/unsubscribe", " }; return validate; ", "From PS", "ctx", "resetRegExp", "loopRequired", ".length ", "ignore", "#FF3399", "hbo", "_getType", "def", "addEventListener", "refs", "over", "exclusive", "joinArrays", " via punycode: ", "node_errors", "typ", "sdppp/streamRequest", "%[EFef]", "call", "适配至当前图层", " = false; else {", "++) { if (", "floor", "notifications/cancelled", "updateKey", "interpolator", "./sdppp-custom.js", "; } ", "values", " } if (errors === ", "ZodDiscriminatedUnion", "dataPath", " = true; else if (!Array.isArray(schema", "services", "empty", "setNodeTitle", "substr", "strong", "transform", " , message: '", " = true; if ( ", "returnEmptyString", "yhd", " = true; break; }", " , params: { keyword: '", " , schema: validate.schema", "endpoint", "validateHandlerType", " ) : ( (", "missingKeyHandler", "getDataByLanguage", " } else {  errors = ", ".type", "schemaErrorMap", "Auto repick from PS", "ZodBranded", "dataLevel", " = errors , ", ") ? ", "ParseError", " , message: 'should match exactly one schema in oneOf' ", "Plugin window focused required to use keyboard shortcut", "requestIdSeq", "setupStoreBinding", '"failed to compile', " if (", " || ! Object.prototype.hasOwnProperty.call(", "_meta", " || ", "sendResourceUpdated", "lte", "tDescription", '";  ', "languageDetector", "widgetable", "nan", "ComfyUI failed to load, HTTP status code: {{code}}", "can't resolve reference ", "开启自动运行", "刷新工作流列表", "cidr", "Gateway error (502)", "How to get APIKey", "reset", "arz", "other", "cleanup", "未实现 (501)", "click to restore", "Save", "Failed to reboot ComfyUI", "replace", "schema", "aao", "ruleErr", "toHash", " = null;", "getConnectionCount", "', missingProperty: '", " != 'number') { ", "assertEqual", "react", ")' returned an object instead of string.", "writeOnly", "执行成功", "/additionalProperties", "response", " if (true) {", "_refinement", "fullPath", "afb", "catch", `" won't get resolved as namespace "`, " && Object.prototype.hasOwnProperty.call(", "_getInvalidInput", "正在发送图像...", " , params: { property: '", "overflow", "sendFinishedResponse", ` , message: 'should match pattern "`, " }; return validate;", "isULID", "isClone", "keys", "shift", "notifications/resources/updated", "men", ";  if (vErrors === null) vErrors = [err]; else vErrors.push(err); errors++; ", "mergeObjectSync", " , message: 'should NOT have more than ", "getHandler", "if (", "schema $id is different from id", "cuid", "]; return false; ", "none", "_setupTimeout", "You are passing an undefined module! Please check the object you are passing to i18next.use()", "passContext", "validate", "ZodUndefined", "languageOnly", " !== ", " = false , ", "mergeShapes", "more", "data", " if (schema", "$el", "connections", "initAsync", "11731878POAJit", "setState", "unicodeSupport", "contextSeparator", "missed to resolve ", "unescapeSuffix", "  }  ", "#66CC33", "compiling", " ) {   ", "notifications/tools/list_changed", "absolutePath", " == 'string' && ", "callback", "smaller than or equal to", "keyType", "defaultNS", "/type", "returnTypeError", "openWorkflowJSON", "wss", "; if (validate.errors !== null) { if (errors) validate.errors.length = errors; else validate.errors = null; } delete ", "Error validating elicitation response: ", " = ", "description", "_clientCapabilities", "property ", "notifications/progress", "checks", "Stop auto run", "Cancel", " && self._opts.unknownFormats.indexOf(", "loading namespace ", "DateTimeFormat", "InternalError", "/additionalItems", "level", "userDefinedNsSeparator", "$dataMetaSchema", "_resetTimeout", "zh-CN", "ZodObject", "uiWeightSum", "isBase64url", "Please select the position to send image", "[object RegExp]", "skips", "setupNotificationHandler", "modifying", "Maximum total timeout exceeded", 'schema with key or id "', "_getOrReturnCtx", "stack", "_requestHandlers", "removeItem", "propertyNames", "执行失败", 'no schema with key or ref "', "varReplace", "pop", "_instructions", "lng", " == +", "创建预览文档", "jsonPointers", "compileAsync", ", received ", "names", "ads", "uiWeight", "invalid_arguments", "valid", "includes", "PCT_ENCODED", "getter", "pluralCategories", "Unexpected dot segment condition", "Email address's domain name can not be converted to ASCII via punycode: ", "'[\\'' + ", "failedLoading", "nanoid", "defaults", "argumentsError", "ZodAny", "; if (", "点我恢复", "userinfo", "#0099CC", "onTimeout", "val is not a non-empty string or a valid number. val=", "Run", "too_small", "nonpositive", "createAsyncIterator", "hasLanguageSomeTranslations", "removeListener", "_transport", "setWidgetValue", "Send to PS", "rootData", "__proxy_forward", "varOccurences", " , message: 'property name \\'", " not implemented for node ", ") continue; ", "Failed to check workflow state changes:", "connect", "fallbackRequestHandler", "detectCycles", "freeze", "#3333CC", "getConnectionToNodeInternal", "initializedStoreOnce", "reverse", "widgets", "getConnectionInfo", "closeWorkflow", "minute", "coerce", "schema id ignored", "options", "tolerant", "formatters", "result", "isInitialized", "IPV6ADDRESS", "thisServer", "format", "rules", "humanize", "不支持非文本图层: {{0}}", "extractFromKey", "; }   var err =   ", "less than", ")) {  ", "getConnectionToNode", ", rootData)  ", "interpolate", " != 'boolean' && ", "getDefaultValueFromField", "resolveImage", "[\\:]", "isPersisted", "pst", "valueType", "origin", "checkDataTypes", "adf", "strictDefaults", "_fragments", "ListFormat", "maxSize", "key '", "streamIterator", " not found in graph definition", "index", " , params: { format:  ", " == ", "isURL", "jsonStringifyReplacer", "hasDefaultValue", "api", "uxp", "Email: {{email}}", "uri", ") {  var err =   ", "query", "yud", "missingSchema", "invalid_enum_value", "Action {{0}} 未找到", "'then'", "validation", "]; ", "addListener", "label", "resolveRef", "Uploading, if the image too large, may be stuck...", "getSchema", "load", "isDate", "  if (!", "detect", "ltr", "MCP Server Error:", "maxParallelReads", "email", "InvalidRequest", " validate.errors = null; return true; ", "适配至选区", "/properties", "has", "ZodString", "Unauthorized (401)", "asyncIterator", " var ", "#33CC66", ", received '", " var itemIndices = {}, item; for (;i--;) { var item = ", "Disk", "buildDirectedAdjacencyList", "async schema referenced by sync schema", " already exists, which would be overridden", "isFinite", "sampling/createMessage", "resolvedLanguage", "useRawValueToEscape", " && !Array.isArray(", "#33CCFF", "headers", " == errors) {", "New Layer", ") && (missing", "#CC9933", "valueOf", "_pendingDebouncedNotifications", "selectColor", "canvas", "is an invalid additional property", "getLanguagePartFromCode", "round", "uxpHost", "push", "_opts", "{0,6}", " outer: for (;i--;) { for (j = i; j--;) { if (equal(", "Connect", "code", "ESCAPE", ";  if (vErrors === null) vErrors = [err]; else vErrors.push(err); errors++; } } ", "Required", " { keyword: '", "toUnicode", "   var err =   ", "default is ignored in the schema root", "arq", "escapeQuotes", "Canvas", "setPrototypeOf", "missed to pass in variable ", "initializeNodeStores", "createInstance", "initializeProducer", "curlayer_curlayer", "Intersection results could not be merged", "\\%25|\\%(?!", " = false; if (e instanceof ValidationError) ", "exactLength", "pctDecChars", "xn--", "jwt", " self._opts.$comment(", "[0-9]", "cacheUserLanguage", "$id", "comfy side transport.onerror", "assertNever", "broadcast", "acw", "ComfyUI server reconnecting", "yih", "schemaId", "workflows", "pbu", " }  ", "messagePoster", "Resize document for preview", "keyof", " } } ", "mesh", "full", "Creating task...", "Connection appears to be disconnected", "_regex", "zero", "removeSchema", "PS遮罩", "clone", "快捷键选图功能仅在插件窗口聚焦时可用", "removeKeyword", "ZodNullable", "Connection to ", "Task incomplete, current status: {{status}}", ".then", "messageQueue", " != 'boolean') ", "邮箱: {{email}}", "Validation failed but no issues detected.", "start", " === undefined) { ", "undefined", "defaultVariables", "valueSchema", "你的工作流", "ZodLiteral", " , params: { additionalProperty: '", "fatal", "async keyword in sync schema", "accessing an object - but returnObjects options is not enabled!", " = errors; ", "silent", "defaultError", "relative-json-pointer", "cacheKey", "目标边界为空", "nodeProxies", "debug", "notifications/initialized", "removeNamespaces", "serialize", "time", "Channel connecting...", "usedKey", '" resolves to more than one schema', "$data", "nonnegative", "actionManager", "reconnecting", "unicode", "forkResourceStore", "defaultMeta", "It seems you are nesting recursively key: ", "_cachedPath", "parent schema must have all required keywords: ", "48pEUZKM", "extendRefs", "signal", "formats", "accept", "never", "cache", " = true; if (", "removeAdditional", "graphChanged", "$async", "[\\:\\@]", "Schema ", "setupAbortHandler", "regex", "detail", "=== Options ===", "formatter", "Failed to send an error response: ", `"' `, "resetTimeoutOnProgress", "keyPrefix", "namespace", "skipCopy", "MissingRef", "请选择AI服务", "server", "timeout", " == 'boolean' || ", "Set text to layer", "activeState", "app", "fast", "nonstrict", "addKeyword", "#3366FF", "prs", "反向裁剪", "gte", "Waiting in queue", " var isAdditional", "Empty", "object", "set", ".schemaPath === undefined) { ", "]; var ", " = true;", ") {", "removeConnection", "useDefault", "isConnectedTo", "patternProperties", "safeParseAsync", "exports", "unknown", "正向裁剪", "encountered", "expected", "performWorkflowReset: ", "under", "dependencies", "errSchemaPath", "send", "clearCache", "URI is not a ", "#CC6633", "\\:\\:", "trim", "#FF3366", "pick", "const", " not in path ", "disconnected", "bindConsumer", " === undefined ", "__cycle__", "sourceType", "Refresh workflow list", "shape", "there was no format function for ", " levels up, current level is ", ";  ", "duration", ".type || 'string'; if (", "assertCanSetRequestHandler", "console", "#9900FF", "toLoad", ".validate", " at one or more positions greater than or equal to ", "instructions", "strictKeywords", " if (false) { ", "retryDelay", "executing", "received", ") break; ", "queue", "Meta-schema for $data reference (JSON Schema extension proposal)", "Already connected to node ", " ( ( ", " = typeof ", "substring", "ZodNaN", "year", "superRefine", "convert widget {0} failed:", "[i]; ", "resources/templates/list", "Server does not support logging (required for ", "firebug", "refinement", " - no connection available", "正在等待图片上传...", "'[' + ", "element", "openWorkflow", "getBestMatchFromCodes", "A discriminator value for key `", "markConsumerBinding", "urn", "Please select the image to get", "logger", "getNode", "; if (vErrors !== null) { if (", "request", "baseId", "documentElement", "prp", " ) ", "protocolVersion", " (async", "schemaHasRules", "' : '", "alwaysFormat", "Server does not support notifying of tool list changes (required for ", "exclType", "joinValues", "#0066CC", "createAbortHandler", "resources/list", " = false; ", "JWT", "isCUID", " is already defined", "Server does not support notifying about resources (required for ", 'Invalid input: must include "', " , params: { multipleOf: ", "position", "nodeStores", "propsKeywords", "domainHost", " , message: 'should NOT be ", "Invalid discriminator value. Expected ", "Positive Crop", "All", "comfy-user", "errorMap", "self", "_limitProperties", "Async refinement encountered during synchronous parse operation. Use .parseAsync instead.", "Layer not found: {{0}}", "out", ") {   ", "hasPath", "translation", "implements", "-arab", " == 'object' && !(", "currency", '.schemaPath = "', " , schemaPath: ", "hasLoadedNamespace: i18n.languages were undefined or empty", " in key: ", " try { await ", "hour", "escapeValue", "++) { ", "#/definitions/nonNegativeIntegerDefault0", "^\\[?(", "handleAsObject", "brand", "Number must be finite", "waitingReads", "#CC0000", " var schema", "lngs", "  )  ", "graph", "通道连接中...", "' && !(typeof ", "schemaExcl", " else if (", "~standard", "0?[1-9]", "fragment", " retries", "No connection available", "setLimit", "minDate", "1926AJBttg", ".else", "nullish", "NOT_QUERY", "; else vErrors = vErrors.concat(", " throw new ValidationError(vErrors); ", "assertRequestHandlerCapability", "dev", "; var ", "forEach", "indexOf", "获取图层 {{0}} 的内容", "processQueueItems", "date", "mins", "errorsText", "[j])) { ", "reason", "Content", "resourceName", "positive", "delete", ".validate; var ", "all", ") { ", "Get selection failed", "promise", "pathname", "coerceToTypes", "interrupt", "storage", "resolved promise for", "_any", "length", "ZodEffects", "minSize", "inclusive", "tools/list", "done", "ZodPipeline", "Failed to send response: ", "type", "save", "Waiting for image upload...", `" keyword validation' `, "2.1.0", "kind", "正在运行", "_cache", "broadcastReceived", " {} ", "_parseAsync", "createWithPreprocess", "?\\:\\:", "$ref", ".length; ", "languageChanged", " , params: { passingSchemas: ", "[\\:\\@\\/\\?]", "throwIfAborted", "没有链接图层: {{0}}", " validate.errors = [", "ValidationError", "function(data, dataPath, parentData, parentDataProperty, rootData) { 'use strict'; ", "errorPath", " , rootData )  ", "' } ", "right", "Press Enter to open app: {{appName}}", "kPanelBrightnessMediumGray", "compile", "pbt", ' !== "object")', "passthrough", " = e.errors; else throw e; } ", "Cannot register capabilities after connecting to transport", "schema id must be string", "translate", "_path", "(.+?)", "info", "array", "sourceNodeId", "ASCII", "getTime", "prompt_id", "isLanguageChangingTo", "([01]\\d|2[0-3]):[0-5]\\d(:", "stream", ".schema = ", "too_big", "#0099FF", "findIndex", "IPV4ADDRESS", "processStreamQueue", "Internal error", "order", "sendErrorResponse", "handleConnectionClose", "loaded namespace ", " &&   Object.prototype.hasOwnProperty.call(", "mounted", "[\\/\\?]", "ayn", "formData", " | ", "setResolvedLanguage", "notificationQueue", "从磁盘", "显示预览框 ({{count}}张图片)", "Copy", "getDefaultValuesFromSchema", "ZodCatch", "resolve", "http://json-schema.org/draft-07/schema", "2[0-4]", "one", "toStringTag", "from", "反向裁剪(Inpaint)", "1.0.0", "isDatetime", "en-US", "Request timeout (408)", "minimum", "idx", "broadcastHandlers", "#FF6633", "negative", "registerCapabilities", "Canvas bounds", "interpolationkey", "Graph must have at least one node", "isValidLookup", "ars", " console.log(", "prepareLoading", "Server does not support prompts (required for ", "Task execution failed: {{error}}", "cancel", "Error compiling schema, function code:", "]); ", "output", "isRoot", "No backend was added via i18next.use. Will not load resources.", "image", "int", "deepPartial", " not found on node ", "Number must be a multiple of ", "find", "catchValue", "tools/call", " validate.errors = vErrors; return false; ", "reset=false but needsReset: ", "保存并立即执行", "Error", "startsWith", "Heartbeat timeout for poster ", "prompts/get", "this", "sdppp/requestInitialState/", "NOT_SCHEME", "types", "###", "bbz", "escape", "2.0", "Invalid function return type", "bind", " != 'number') || ", " , ", "payload", "init", "registerProxyForwardHandler", "post", ", validate.root.schema);", ") - division", "arrayToEnum", "add", " || validate.schema", " for language ", "maxProperties", "onNotification", ".validateSchema(", "_onnotification", '$ref: validation keywords used in schema at path "', "more than", "returnNull", "Mask", "loadGraphData", "ZodDefault", "nestingRegexp", "responseSchema", "not", " delete ", " if ( ", " , params: { pattern:  ", "uri-reference", "float", "isEmoji", "execution_success", "sessionId", ") { var op", " } else {  for (var ", "ComfyUI加载失败，HTTP状态码：{{code}}", "registerDirectRequestHandlerGeneric", ".errors); errors = vErrors.length; } ", "任务执行失败: {{error}}", "Selection", "Invalid", "initializeResponseQueue", "getKeyword", "{5}", "version", "base64", "languages", "bindings", "Outpaint (positive crop)", "Unknown", "http://json-schema.org/draft-07/schema#", " == 'object' && Array.isArray(", "sd-ppp-static/sdppp_images/", "objectKeys", "#99CC33", "\\' is invalid' ", "actions", "setItem", "extract", ".length <= ", "isNullable", ".additionalProperties", `Can't use "invalid_type_error" or "required_error" in conjunction with custom error map.`, "Service unavailable (503)", "Selection bounds only", " , schema: ", " var schemaExcl", " , params: { failingKeyword: ", "/%2F", "lastPongReceived", "unescapeComponent", ", schema", "properties ", "invalid_string", "Store not found for current node ", "decline", "registerActionHandler", "body", "timeoutId", "#00CC33", "_progressHandlers", "&quot;", "setKey", "RelativeTimeFormat", "You are passing a wrong module! Please check the object you are passing to i18next.use()", " == 'number' || ", "Cannot access property/index ", "Array.isArray(", "停止自动运行", "') ", "getConnection", "loadOne", "&#39;", "https://github.com/ajv-validator/ajv/blob/master/lib/definition_schema.js", "null", "getFallbackCodes", "_limitItems", " = new RegExp(", "Store not found for ", "sendLoggingMessage", "addRule", "queueLoad", 'custom keyword "', "source", "unknownKeys", "reference", "greater than or equal to ", "exactly", "ordinal", "How to get APIKey and API Secret", "_parseSync", "sdppp/streamResponse", "is a required property", " != 'number' || ", "=startErrs", "minItems", "exception_message", " == '", "; else if (", "No store found for node ", "NOT_FRAGMENT", "minLength", "Success", "Back", "waiting for queue prompt", "querySelector", "broadcastManager", "resources/subscribe", "Unknown message type: ", '" is used in schema at path "', "deprecate", "URI can not be parsed.", "typeof ", "isTop", "This means something IS WRONG in your setup. You access the t function before i18next.init / i18next.loadNamespace / i18next.changeLanguage was done. Wait for the callback or Promise to resolve before accessing it!!!", "addPostProcessor", "dataProperties", "nodes", "[0-9A-Fa-f]", "invalid_intersection_types", "true", "setInterval", "resources", "给发送的图片创建文档", "fcName", "         , parentSchema: validate.schema", "maximum", "newlayer_curlayer", "connected", "[^\\%\\[\\]\\:]", ", limit: ", "Please select the mask to get", " == errors) { ", "ZodArray", "invalid_return_type", "exclusiveMaximum", "loadNamespaces", "No Intl support, please use an Intl polyfill!", " } }  ", "hasLoadedNamespace", " (division", "_addSchema", "#00CC99", "质量{{percent}}%", '" (see option extendRefs)', "+\\.", "map", "regexpUnescape", "needsPlural", "reject", "[\\:\\/\\?\\#\\[\\]\\@]", "isInteger", ") break; } ", "fail", "Cycle detected: ", "Comfy.userId", "Remote", "sdppp 选中图层", " for nesting ", "RH Coins:", "cimode", "Server does not support resources (required for ", "allOf", "Reverse", "Failed to check workflow changeTracker state:", "ZodUnion", "extensionManager", "postProcessPassResolved", "isOpen", " , message: 'should be equal to one of the allowed values' ", "validateKeyword", "Invalid ", " , params: {} ", "applyPostProcessor", "#33CC00", "_compile", "log", "findPathInternal", "heartbeatTimeoutTimer", "off", "comfy-entry", "formErrors", "isOptional", "'else'", "formatLanguageCode", "登录成功", "ZodOptional", "contextualErrorMap", "Comfy Manager未安装，无法重启", "Limit image size", "allServers", "pga", "#3300CC", "languageChanging", "Uploading...", "parse", "reloadResources", "enforceStrictCapabilities", "assertIs", "Error closing connection to ", "notice", "RULES", "String must contain ", "formatArgs", "#/definitions/stringArray", "isTransportReady", " == 'function' ? ", "_loadingSchemas", "comfy", "remove", "onAbort", "onclose", "7660800nyvleU", "compositeRule", 'Invalid input: must end with "', "Current layer bounds", "按回车打开应用： {{appName}}", "state", "ZodSet", "sort", "#3399CC", "failed parsing options string in nesting for key ", "Failed to request initial state for ", "Crop by selection", " === 1) ", "forwardBroadcast", "select", "listenMessageCallback", "root.refVal[0]", "every", "ensureStoreConsumerBinding", "#CCCC33", " } else { ", "day", "emit", "inline", "env", ")) ", "PS图片", "describe", ") == -1 ", "xaa", "ZodNumber", "getBinding", "UUID is not valid.", "posterIdentifier", "exclude", "' , dataPath: (dataPath || '') + ", "changeLanguage", "schemaPath", "ignoreJSONStructure", "initialState", "step", " var validate = ", "exactUsedKey", "precheck", "Logout", "__internal_requestInitialState_", "ComfyUI服务器重连中", "destroy", ".patternProperties", " = true; } else { ", "should have required property \\'", "passingSchemas", "node_id", ".length > ", "https://raw.githubusercontent.com/ajv-validator/ajv/master/lib/refs/data.json#", "暂无图片", "pendingCount", "findPath", "apc", "Invalid graph definition: ", "服务器错误 (500)", "arrayKeywords", "shorter", "[\\.]", " ms", "Invalid literal value, expected ", "custom keyword definition is invalid: ", "sdppp/abort", "\\xA0-\\u200D\\u2010-\\u2029\\u202F-\\uD7FF\\uF900-\\uFDCF\\uFDF0-\\uFFEF", "_oninitialize", "2024-10-07", "safe", "~validate", "message", "queuePrompt", "combo", "issues", "hasLoadedNamespace: i18next was not initialized", "monitoringIntervals", '" as the namespace "', "_def", "forward", "_getId", "notifications/message", "async ", " = errors;var ", "nonExplicitSupportedLngs", "wait", "]] !== undefined ", ` , message: 'should match format "`, "#6633FF", "inlineRefs", " var err = ", "(typeof ", "sdppp_workflow_alias", "Running for {{duration}} seconds, {{message}}", "lastIndex", "ZodRecord", "absolute", "Operation was aborted", "then", " && !(", "toResolveHierarchy", "removeByRequestId", "' + ", "capacity", "sqr", "cleanupStreamHandlers", "schemas", "usedLng", "(队列:{{queueSize}}) {{progress}}% {{executingNodeTitle}}...", "unknown keyword: ", "getData", "{2}", "hasResourceBundle", "weeks", "customRules", "限制图片尺寸", "isEmail", "regexp", "parentData", "getCurrentNodeId", "setupConnectionHandlers", "maxRetries", "preload", "connectionManager", "title", "buildAdjacencyList", "SDPPP可能未安装或和插件版本不匹配 (404)", "|0?0?", "extend", "get", "diff", "charCodeAt", "调整预览文档尺寸", "runningRequests", "protocol", "i18nFormat", "implementAction", "DEBUG", "addConnection", "RH币:", "]; }  ", "sendStreamData", " = vErrors[", "requestInfo", "escapeComponent", "and", "NumberFormat", " , params: { i: i, j: j } ", "refVal", "get_layer_info: layer_identify required", "760945OBFfJa", "No crop", "MethodNotFound", "simplifyPluralSuffix", "整个画布", "仅选区范围", "显示发送的图片", "roots/list", " var errs_", "ZodNativeEnum", "toFixed", "[^\\%\\/\\:\\@]", "tools", " === null) ", "cmp", " === '' || ", "Stop and cancel all", " if (true) { ", "newdoc_canvas", " : ", "Document {{0}} not found", " , schema:  ", " = validate.schema", "dataType", "sam", "name", "_errorDataPathProperty", "Enter your RunningHub API Key", "saveMissingTo", '" for languages "', " break; ", "#3399FF", "exclIsNumber", "sec", "getCanonicalLocales", " = await ", "favorites", "getCapabilities", "meta-schema not available", " in ", " Math.abs(Math.round(division", "((\\d\\d[2468][048]|\\d\\d[13579][26]|\\d\\d0[48]|[02468][048]00|[13579][26]00)-02-29|\\d{4}-((0[13578]|1[02])-(0[1-9]|[12]\\d|3[01])|(0[469]|11)-(0[1-9]|[12]\\d|30)|(02)-(0[1-9]|1\\d|2[0-8])))", "bigint", "listeners", "subject", "method", "#6600CC", "_onclose", " not found for node "];
  return Ne = function() {
    return i;
  }, Ne();
}
function Jt(i) {
  const e = n, t = i === e(1069) ? Zc : Kc, s = h2[i];
  return { ...t, ...s };
}
function p2() {
  return la;
}
function Qt(i, e = {}) {
  const t = n;
  let x = Jt(la)[i];
  return x ? typeof x === t(342) ? x[t(969)](/\{\{(\w+)\}\}/g, (r, a) => e[a] !== void 0 ? String(e[a]) : r) : x : i;
}
const m2 = /&(?:amp|#38|lt|#60|gt|#62|apos|#39|quot|#34|nbsp|#160|copy|#169|reg|#174|hellip|#8230|#x2F|#47);/g, g2 = { "&amp;": "&", "&#38;": "&", "&lt;": "<", "&#60;": "<", "&gt;": ">", "&#62;": ">", "&apos;": "'", "&#39;": "'", "&quot;": '"', "&#34;": '"', "&nbsp;": " ", "&#160;": " ", "&copy;": "©", "&#169;": "©", "&reg;": "®", "&#174;": "®", "&hellip;": "…", "&#8230;": "…", "&#x2F;": "/", "&#47;": "/" }, v2 = (i) => g2[i], y2 = (i) => i[n(969)](m2, v2);
let $s = { bindI18n: n(1609), bindI18nStore: "", transEmptyNodeValue: "", transSupportBasicHtmlNodes: !0, transWrapTextNodes: "", transKeepBasicHtmlNodesFor: ["br", n(915), "i", "p"], useSuspense: !0, unescape: y2 };
const b2 = (i = {}) => {
  $s = { ...$s, ...i };
}, w2 = { type: "3rdParty", init(i) {
  const e = n;
  b2(i[e(1149)][e(979)]);
} };
!G0[n(1153)] && G0.use(w2)[n(1726)]({ resources: { "zh-CN": { translation: Jt("zh-CN") }, "en-US": { translation: Jt(n(1675)) } }, lng: p2(), fallbackLng: n(1675), interpolation: { escapeValue: !1 } });
const Ix = [];
xe[n(952)] = xe[n(952)] || {}, xe[n(952)][n(1732)] = function(i, e) {
  const t = n;
  typeof e === t(730) ? Ix[t(1251)]([i, { formatter: e, setter: null }]) : Ix.push([i, e]);
};
function S2(i, e, t) {
  var c, u, f;
  const s = n, x = Ix.find(([d]) => d == B(367)), r = Ix[s(1703)](([d]) => ar(d, i[s(1594)])) || x;
  let a = !1;
  if (r) {
    const d = r[1][s(310)];
    d && (a = !!d(i, e, t));
  }
  !a && (i[s(1143)][e].value = t, (u = (c = i.widgets[e])[s(1042)]) == null || u.call(c, t)), (f = (I0[s(2401)] || I0.extensionManager[s(590)])[s(2429)]) == null || f.changeTracker.checkState();
}
function qe(i) {
  const e = n, t = {}, s = Ix[e(1703)](([x]) => x == e(367));
  return i[e(1860)][e(1562)]((x) => {
    const r = e;
    if (!x[r(1143)] || x.widgets[r(1586)] == 0) return;
    const a = Ix[r(1703)](([o]) => ar(o, x[r(1594)])) || s;
    if (a) try {
      const o = a[1][r(1370)](x);
      o && (t[x.id] = o[r(1143)][r(1889)]((c) => c[r(778)]));
    } catch {
      t[x.id] = [];
    }
  }), t;
}
function Gt(i, e) {
  var r, a, o;
  const t = n;
  if (!i) return { widgetableID: "", widgetablePath: "", nodes: {}, nodeIndexes: [], options: {}, note: "" };
  const s = i[t(1860)].map((c) => {
    const u = t;
    if (c[u(583)] != 0) return;
    const f = me(c);
    if (!f || f[u(1710)](".") || !c.widgets || c[u(1143)][u(1586)] == 0) return;
    let d = Ix[u(1703)](([m]) => ar(m, c.type));
    if (d) try {
      const m = d[1][u(1370)](c);
      if (m) return m.id = c.id, m[u(1071)] = m[u(1143)].reduce((y, w) => y + (w[u(1098)] || 12), 0), m;
    } catch (m) {
      return { id: c.id, title: f, uiWeightSum: 12, widgets: [{ outputType: u(549), value: Qt(u(1459), d[0]) + (m[u(2028)] || m || ""), name: "", options: {} }] };
    }
    if (!f[u(1710)]("#")) return null;
    let l = c[u(1143)];
    const g = Ix[u(1703)](([m]) => m == u(367));
    if (g) {
      const m = g[1].formatter(c);
      if (m) return Object.assign(m, { uiWeightSum: m.widgets[u(407)]((y, w) => y + (w[u(1098)] || 12), 0) });
    }
    const h = { id: c.id, title: f, widgets: l[u(1889)]((m) => ({ name: m[u(1204)] || m[u(2132)], outputType: m[u(1594)] || u(342), value: m[u(778)], options: m[u(1149)] })) };
    return Object[u(717)](h, { uiWeightSum: h[u(1143)][u(407)]((m, y) => m + (y[u(1098)] || 12), 0) });
  })[t(275)](Boolean)[t(1962)]((c, u) => {
    const f = t;
    let d = me(c), l = me(u);
    return d = d[f(1710)]("#") ? d[f(2284)](1)[f(1420)]() : d.trim(), l = l[f(1710)]("#") ? l[f(2284)](1)[f(1420)]() : l[f(1420)](), d[f(2292)](l);
  }), x = ((a = (r = i.nodes.find((c) => c[t(1594)] == "Note" && c[t(2081)][t(415)](/SD-?PPP/i))) == null ? void 0 : r[t(1143)][0]) == null ? void 0 : a.value) || "";
  return { widgetablePath: ((o = e.activeState[t(313)]) == null ? void 0 : o[t(2049)]) || e.path, widgetableID: e[t(1383)].id, nodes: s[t(407)]((c, u) => (c[u.id] = u, c), {}), note: x, nodeIndexes: s.map((c) => c.id), options: {} };
}
function ar(i, e) {
  const t = n, s = i[t(969)](/[.+^${}()|[\]\\]/g, "\\$&")[t(969)](/\*/g, ".*").replace(/\?/g, ".");
  return new RegExp("^" + s + "$")[t(2500)](e);
}
function me(i, e = "") {
  var x;
  const t = n;
  let s = e || i[t(2081)] || "";
  return i[t(856)] && (s.startsWith("#") || s.startsWith(".")) ? i.setProperty(t(580), s) : s = ((x = i[t(2467)]) == null ? void 0 : x[t(580)]) || s, s;
}
xe.getNodeTitle = me;
var he = { exports: {} }, qt, zs;
function E2() {
  if (zs) return qt;
  zs = 1;
  var i = 1e3, e = i * 60, t = e * 60, s = t * 24, x = s * 7, r = s * 365.25;
  qt = function(f, d) {
    const l = B;
    d = d || {};
    var g = typeof f;
    if (g === l(342) && f.length > 0) return a(f);
    if (g === "number" && isFinite(f)) return d[l(362)] ? c(f) : o(f);
    throw new Error(l(1118) + JSON[l(2325)](f));
  };
  function a(f) {
    const d = B;
    if (f = String(f), !(f[d(1586)] > 100)) {
      var l = /^(-?(?:\d+)?\.?\d+) *(milliseconds?|msecs?|ms|seconds?|secs?|s|minutes?|mins?|m|hours?|hrs?|h|days?|d|weeks?|w|years?|yrs?|y)?$/i.exec(f);
      if (l) {
        var g = parseFloat(l[1]), h = (l[2] || "ms").toLowerCase();
        switch (h) {
          case "years":
          case d(1457):
          case d(413):
          case "yr":
          case "y":
            return g * r;
          case d(2070):
          case d(520):
          case "w":
            return g * x;
          case d(754):
          case d(1976):
          case "d":
            return g * s;
          case d(2360):
          case d(1528):
          case d(515):
          case "hr":
          case "h":
            return g * t;
          case d(386):
          case d(1146):
          case d(1567):
          case d(644):
          case "m":
            return g * e;
          case d(418):
          case d(398):
          case d(470):
          case d(2140):
          case "s":
            return g * i;
          case "milliseconds":
          case "millisecond":
          case "msecs":
          case "msec":
          case "ms":
            return g;
          default:
            return;
        }
      }
    }
  }
  function o(f) {
    const d = B;
    var l = Math.abs(f);
    return l >= s ? Math[d(1249)](f / s) + "d" : l >= t ? Math.round(f / t) + "h" : l >= e ? Math[d(1249)](f / e) + "m" : l >= i ? Math[d(1249)](f / i) + "s" : f + "ms";
  }
  function c(f) {
    const d = B;
    var l = Math[d(481)](f);
    return l >= s ? u(f, l, s, "day") : l >= t ? u(f, l, t, "hour") : l >= e ? u(f, l, e, "minute") : l >= i ? u(f, l, i, "second") : f + d(2019);
  }
  function u(f, d, l, g) {
    const h = B;
    var m = d >= l * 1.5;
    return Math[h(1249)](f / l) + " " + g + (m ? "s" : "");
  }
  return qt;
}
var Ot, Hs;
function k2() {
  if (Hs) return Ot;
  Hs = 1;
  function i(e) {
    const t = B;
    x.debug = x, x[t(664)] = x, x[t(1147)] = f, x[t(822)] = c, x[t(782)] = a, x[t(2455)] = u, x.humanize = E2(), x[t(2002)] = d, Object[t(1001)](e)[t(1562)]((l) => {
      x[l] = e[l];
    }), x[t(1096)] = [], x[t(1075)] = [], x[t(1151)] = {};
    function s(l) {
      const g = t;
      let h = 0;
      for (let m = 0; m < l[g(1586)]; m++)
        h = (h << 5) - h + l[g(2088)](m), h |= 0;
      return x.colors[Math[g(481)](h) % x[g(519)][g(1586)]];
    }
    x[t(1245)] = s;
    function x(l) {
      const g = t;
      let h, m = null, y, w;
      function E(...q) {
        const O = B;
        if (!E[O(2455)]) return;
        const P = E, S = Number(/* @__PURE__ */ new Date()), R = S - (h || S);
        P.diff = R, P.prev = h, P.curr = S, h = S, q[0] = x.coerce(q[0]), typeof q[0] !== O(342) && q[O(2553)]("%O");
        let j = 0;
        q[0] = q[0][O(969)](/%([a-zA-Z%])/g, (M, N) => {
          const I = O;
          if (M === "%%") return "%";
          j++;
          const U = x[I(1151)][N];
          if (typeof U === I(730)) {
            const H = q[j];
            M = U[I(896)](P, H), q[I(748)](j, 1), j--;
          }
          return M;
        }), x[O(1946)][O(896)](P, q), (P.log || x[O(1919)])[O(813)](P, q);
      }
      return E[g(1375)] = l, E[g(2218)] = x[g(2218)](), E.color = x[g(1245)](l), E.extend = r, E[g(2002)] = x[g(2002)], Object.defineProperty(E, g(2455), { enumerable: !0, configurable: !1, get: () => {
        const q = g;
        return m !== null ? m : (y !== x.namespaces && (y = x[q(2197)], w = x[q(2455)](l)), w);
      }, set: (q) => {
        m = q;
      } }), typeof x[g(1726)] == "function" && x[g(1726)](E), E;
    }
    function r(l, g) {
      const h = t, m = x(this[h(1375)] + (typeof g > "u" ? ":" : g) + l);
      return m[h(1919)] = this[h(1919)], m;
    }
    function a(l) {
      const g = t;
      x[g(1595)](l), x[g(2197)] = l, x.names = [], x[g(1075)] = [];
      const h = (typeof l === g(342) ? l : "")[g(1420)]()[g(969)](/\s+/g, ",")[g(458)](",")[g(275)](Boolean);
      for (const m of h)
        m[0] === "-" ? x[g(1075)].push(m[g(2284)](1)) : x.names[g(1251)](m);
    }
    function o(l, g) {
      const h = t;
      let m = 0, y = 0, w = -1, E = 0;
      for (; m < l.length; )
        if (y < g[h(1586)] && (g[y] === l[m] || g[y] === "*")) g[y] === "*" ? (w = y, E = m, y++) : (m++, y++);
        else if (w !== -1) y = w + 1, E++, m = E;
        else return !1;
      for (; y < g[h(1586)] && g[y] === "*"; )
        y++;
      return y === g[h(1586)];
    }
    function c() {
      const l = t, g = [...x[l(1096)], ...x.skips.map((h) => "-" + h)][l(2373)](",");
      return x[l(782)](""), g;
    }
    function u(l) {
      const g = t;
      for (const h of x[g(1075)])
        if (o(l, h)) return !1;
      for (const h of x[g(1096)])
        if (o(l, h)) return !0;
      return !1;
    }
    function f(l) {
      const g = t;
      return l instanceof Error ? l[g(1081)] || l[g(2028)] : l;
    }
    function d() {
      const l = t;
      console[l(455)](l(295));
    }
    return x.enable(x.load()), x;
  }
  return Ot = i, Ot;
}
var Us;
function P2() {
  const i = n;
  return Us ? he[i(1406)] : (Us = 1, function(e, t) {
    const s = i;
    t[s(1946)] = r, t.save = a, t[s(1208)] = o, t[s(2218)] = x, t[s(1583)] = c(), t[s(2002)] = /* @__PURE__ */ (() => {
      let f = !1;
      return () => {
        const d = B;
        !f && (f = !0, console[d(455)](d(295)));
      };
    })(), t[s(519)] = ["#0000CC", "#0000FF", s(366), s(657), s(1491), "#0066FF", s(1116), s(1644), s(2535), s(1802), "#00CC66", s(1885), s(500), "#00CCFF", s(1935), s(2447), s(1139), "#3333FF", "#3366CC", s(1388), s(1963), s(2138), s(1917), s(2514), s(1225), "#33CC99", s(2484), s(1237), s(2153), s(2233), s(2185), s(2045), s(288), s(1036), s(589), s(1439), s(2437), "#9933FF", s(382), s(1777), s(1537), s(492), s(668), "#CC0099", s(2322), "#CC00FF", s(2347), "#CC3333", s(820), "#CC3399", s(379), "#CC33FF", "#CC6600", s(1418), "#CC9900", s(1242), "#CCCC00", s(1974), "#FF0000", "#FF0033", s(2511), s(2179), "#FF00CC", "#FF00FF", "#FF3300", "#FF3333", s(1421), s(882), "#FF33CC", s(2372), "#FF6600", s(1680), s(723), s(495), "#FFCC00", "#FFCC33"];
    function x() {
      const f = s;
      if (typeof window !== f(1319) && window[f(2550)] && (window.process[f(1594)] === "renderer" || window[f(2550)][f(786)])) return !0;
      if (typeof navigator !== f(1319) && navigator[f(468)] && navigator[f(468)][f(383)]()[f(415)](/(edge|trident)\/(\d+)/)) return !1;
      let d;
      return typeof document !== f(1319) && document[f(1480)] && document[f(1480)][f(2348)] && document[f(1480)][f(2348)].WebkitAppearance || typeof window !== f(1319) && window.console && (window[f(1438)][f(1463)] || window[f(1438)].exception && window[f(1438)][f(475)]) || typeof navigator !== f(1319) && navigator[f(468)] && (d = navigator[f(468)][f(383)]()[f(415)](/firefox\/(\d+)/)) && parseInt(d[1], 10) >= 31 || typeof navigator !== f(1319) && navigator.userAgent && navigator[f(468)][f(383)]().match(/applewebkit\/(\d+)/);
    }
    function r(f) {
      const d = s;
      if (f[0] = (this[d(2218)] ? "%c" : "") + this.namespace + (this.useColors ? " %c" : " ") + f[0] + (this[d(2218)] ? d(505) : " ") + "+" + e[d(1406)][d(1158)](this[d(2087)]), !this[d(2218)]) return;
      const l = d(593) + this[d(766)];
      f[d(748)](1, 0, l, d(498));
      let g = 0, h = 0;
      f[0][d(969)](/%[a-zA-Z%]/g, (m) => {
        m !== "%%" && (g++, m === "%c" && (h = g));
      }), f.splice(h, 0, l);
    }
    t.log = console[s(1335)] || console[s(1919)] || (() => {
    });
    function a(f) {
      const d = s;
      try {
        f ? t[d(1583)][d(1780)](d(1335), f) : t[d(1583)][d(1083)](d(1335));
      } catch {
      }
    }
    function o() {
      const f = s;
      let d;
      try {
        d = t[f(1583)][f(377)]("debug") || t[f(1583)][f(377)](f(2094));
      } catch {
      }
      return !d && typeof process < "u" && "env" in process && (d = process[f(1979)][f(2094)]), d;
    }
    function c() {
      try {
        return localStorage;
      } catch {
      }
    }
    e.exports = k2()(t);
    const { formatters: u } = e[s(1406)];
    u.j = function(f) {
      const d = s;
      try {
        return JSON[d(2325)](f);
      } catch (l) {
        return "[UnexpectedJSONParseError]: " + l[d(2028)];
      }
    };
  }(he, he[i(1406)]), he.exports);
}
var C2 = P2();
const ha = aa(C2);
ha[n(782)]("*");
function I2(i, e) {
  const t = n, s = ha(i), x = (r, a) => async function(...o) {
    try {
      await e({ level: r, messages: o });
    } catch {
    }
  };
  return s[t(1919)] = x(t(1919)), s;
}
const Me = I2("mesh:comfy", async ({ level: i, messages: e }) => {
  const t = n, { mcpMesh: s } = await Promise[t(1666)]()[t(2055)](() => A2);
  await s[t(1476)]("uxp")[t(1779)].log({ level: i, messages: e });
}), Xt = Me[n(2085)]("mesh:workflow"), Vs = /* @__PURE__ */ new Set();
P0[n(2093)](n(1126), async (i) => {
  const e = n;
  return i[e(906)][e(1562)](({ nodeID: t, widgetIndex: s, value: x }) => {
    const r = e, a = I0[r(1541)][r(1860)][r(1703)]((o) => o.id == t);
    !a || x == a[r(1143)][s][r(778)] || S2(a, s, x);
  }), { success: !0 };
}), P0[n(2093)](n(1469), async (i) => {
  const e = n, { workflow_path: t } = i, s = !Vs[e(1220)](t), x = i[e(961)] || s;
  if (Vs.add(t), t[e(1710)]("sdppp://")) return await c(t);
  const r = I0[e(1909)].workflow || I0[e(2401)], a = r[e(1291)].find((u) => u[e(607)] === t || u.path === t || u.path === e(462) + t);
  if (!x) {
    const u = await R2(r, a);
    return Xt(e(1707) + u), u ? await Ws(r, a) : await o(r, a), { success: !0 };
  }
  return await Ws(r, a), { success: !0 };
  async function o(u, f) {
    const d = e;
    Xt(d(264) + f[d(2501)], f.initialState), I0[d(2401)] == u ? await f[d(1208)]() : (await u[d(1469)](f), await I0[d(1743)](JSON[d(1938)](JSON[d(2325)](f[d(1994)])), !0, !0, f, {}));
  }
  async function c(u) {
    const f = e, d = u[f(969)](f(442), ""), l = await fetch(f(2546) + d).then((g) => g[f(614)]());
    return l.extra.sdppp_workflow_alias = u, await I0[f(1743)](l), { success: !0 };
  }
}), P0[n(2093)](n(1048), async function(i) {
  const e = n;
  let { workflow_content: t, workflow_path: s } = i;
  return t[e(313)] = { ...t[e(313)] || {}, sdppp_workflow_alias: s }, await I0[e(1743)](t), { success: !0 };
}), P0[n(2093)](n(2243), async (i) => {
  var r;
  const e = n, t = I0.workflowManager || I0[e(1909)][e(590)];
  (r = t.syncWorkflows) == null || r.call(t), await new Promise((a) => requestAnimationFrame(a));
  let x = t[e(1291)][e(1889)]((a) => a[e(2501)].replace("workflows/", ""));
  try {
    const a = new Headers(), o = localStorage[e(377)](e(1898));
    o && a[e(1396)](e(1509), o);
    const c = await fetch(e(2251), { headers: a });
    let u = [];
    c.ok && (u = (await c.json())[e(2143)].map((d) => d.replace(e(462), ""))), x[e(1962)]((f, d) => {
      const l = e, g = u[l(1101)](f), h = u[l(1101)](d);
      return g && !h ? -1 : !g && h ? 1 : f[l(2292)](d);
    });
  } catch {
  }
  return { workflows: x, error: "" };
}), P0[n(2093)](n(2252), async (i) => {
  var a;
  const e = n, { workflow_path: t, from_sid: s } = i, x = I0[e(2401)] || I0.extensionManager[e(590)], r = x.workflows[e(1703)]((o) => o[e(607)] === t || o[e(2501)] === t || o[e(2501)] === e(462) + t);
  if (!r) throw new Error("Workflow not found");
  return ((a = x[e(2429)]) == null ? void 0 : a.id) != r.id && await I0.openWorkflow(t, s, !1), r.changeTracker.checkState(), await x[e(2252)](r), { success: !0 };
});
async function R2(i, e) {
  var x, r, a;
  const t = n;
  if (!e || !(((x = i[t(2429)]) == null ? void 0 : x.id) === e.id)) return !1;
  if ((r = e.changeTracker) != null && r[t(2367)]) try {
    e.changeTracker[t(2367)]();
  } catch (o) {
    console[t(455)](t(1907), o);
  }
  try {
    const o = (a = I0[t(1541)]) == null ? void 0 : a[t(1338)](), c = e[t(1383)];
    if (!o || !c) return !1;
    const u = JSON[t(2325)](o), f = JSON[t(2325)](c);
    return u !== f;
  } catch (o) {
    return console[t(455)](t(1134), o), !1;
  }
}
async function Ws(i, e) {
  var r;
  const t = n;
  Xt(t(1411) + e[t(2501)]);
  const s = { last_node_id: 0, last_link_id: 0, nodes: [], links: [], groups: [], config: {}, extra: {}, version: 0.4 };
  async function x(a, o) {
    const c = t;
    I0.workflowManager == a ? await o[c(1208)]() : (await a[c(1469)](o), await I0[c(1743)](JSON.parse(JSON[c(2325)](o[c(1383)])), !0, !0, o, {}));
  }
  (e[t(1911)] || (r = i[t(1911)]) != null && r.call(i, e)) && i.openWorkflows[t(1586)] === 1 ? await I0.loadGraphData(s) : await x(i, i[t(440)][0] == e ? i.openWorkflows[1] : i.openWorkflows[0]), await i[t(1145)](e, !1), await new Promise((a) => requestAnimationFrame(a)), await x(i, e);
}
const _x = Me[n(2085)](n(2200)), qx = /* @__PURE__ */ new Map();
function F2(i, e) {
  const t = n, s = qx.get(i);
  _x("resolveRunImages", i, e, s, qx), s && s[t(1169)](e);
}
P0.implementAction(n(2432), async function* (i) {
  const e = n;
  let t = !1, s = [];
  function x() {
    const l = B;
    if (t) return;
    const g = Tx[l(2029)];
    Tx.queuePrompt = async (...h) => {
      const m = l;
      try {
        const y = await g.call(Tx, ...h);
        return s[m(1251)]({ error: null, result: y, prompt_id: y[m(1638)] }), y;
      } catch (y) {
        throw s[m(1251)]({ error: y, result: null, prompt_id: "" }), y;
      }
    }, t = !0;
  }
  t || x();
  const r = i[e(2537)];
  let a = !1, o = {}, c = [];
  P0.store[e(1030)]({ lastError: "", widgetableErrors: {} });
  try {
    s = [], await I0[e(2029)](1, r), s.forEach((l) => {
      var h, m;
      const g = e;
      if (l.error) a = !0, o = l[g(549)].response ? d(l[g(549)].response[g(892)]) : {}, Object[g(717)](o, { "-1": ((m = (h = l[g(549)][g(984)]) == null ? void 0 : h[g(549)]) == null ? void 0 : m.message) || l[g(549)][g(2028)] });
      else {
        const y = l[g(1152)][g(1638)];
        c[g(1251)](y);
        let w, E;
        const q = new Promise((P, S) => {
          w = P, E = S;
        }), O = { promise: q, resolveImage: w, rejectImage: E };
        qx[g(1396)](y, O);
      }
    });
  } catch (l) {
    _x(e(2211), l.stack), a = !0, o = { "-1": l[e(2028)] || l[e(616)]() };
  }
  _x(e(575), a, o, e(266), c), a && P0[e(2399)][e(1030)]({ widgetableErrors: o });
  let u = [];
  const f = /* @__PURE__ */ new Map();
  for (const l of c) {
    const g = qx[e(2086)](l);
    g && f.set(l, g[e(1579)]);
  }
  for (_x(e(1847)); f[e(2537)] > 0; ) {
    const l = Array[e(1671)](f[e(772)]()), g = l.map(([y, w]) => w[e(2055)]((E) => ({ prompt_id: y, images: E }))), { prompt_id: h, images: m } = await Promise[e(2265)](g);
    _x(e(1584), h), u.push(...m), f[e(1574)](h), qx[e(1574)](h), yield { success: !0, prompt_ids: [h], images: m };
  }
  function d(l) {
    const g = e, h = {};
    return Object[g(1001)](l).forEach((m) => {
      const y = g, w = m[y(458)](":")[0], E = I0[y(1541)].nodes[y(1703)]((q) => q.id == w);
      h[w] = "[" + ((E == null ? void 0 : E[y(2081)]) || w) + "]" + l[m].errors[y(1889)](JSON[y(2325)])[y(2373)](`
`);
    }), h;
  }
}), P0.implementAction(n(459), async () => {
  const i = n;
  await I0[i(1190)].clearItems(i(1450)), await I0[i(1190)][i(1582)]();
  const e = Array.from(qx[i(906)]());
  qx[i(463)]();
  for (const t of e)
    try {
      t[i(665)](new Error(i(750)));
    } catch {
    }
  return { success: !0 };
}), P0[n(2093)](n(913), async (i) => {
  const e = n, { node_id: t, title: s } = i, x = I0.graph[e(1860)][e(1703)]((r) => r.id == t);
  if (!x) throw new Error(e(2443));
  return x.title = s, x[e(856)](e(580), s), { success: !0 };
}), P0[n(2093)](n(523), async () => {
  const i = n, e = await fetch("./api/manager/reboot");
  return e[i(801)] == 404 ? { error: Qt(i(2538)), success: !1 } : e.status == 200 ? { success: !0 } : { error: Qt(i(968)) + e.statusText, success: !1 };
}), P0[n(2093)](n(2444), async (i) => {
  const { api_key: e } = i;
  return localStorage.setItem("comfy_api_key", e), location.reload(), { success: !0 };
}), P0[n(2093)](n(811), async () => {
  const i = n;
  return document[i(1848)](i(798))[i(524)][i(655)](), { success: !0 };
});
class N2 extends Error {
  constructor(e, t) {
    const s = n;
    super(s(1711) + e + s(2424) + t + "ms"), this[s(2132)] = "HeartbeatTimeoutError";
  }
}
const pe = /* @__PURE__ */ new Map();
class q2 {
  constructor(e) {
    const t = n;
    if (this[t(1313)] = [], this[t(1792)] = Date.now(), pe[t(1220)](e[t(1988)])) {
      const s = pe[t(2086)](e[t(1988)]);
      s && s[t(2400)]();
    }
    this.posterIdentifier = e.posterIdentifier, this[t(1294)] = e[t(1294)], this[t(2390)] = e[t(2390)], this[t(301)] = e[t(301)], this.heartbeatInterval = e[t(2238)] ?? 12e4, this[t(855)] = e[t(855)] ?? 3e4, this.debugDisableHeartbeatResponse = e[t(578)] ?? !1, pe[t(1396)](this[t(1988)], this), this[t(1970)] = this.listenMessageCallback[t(1722)](this), this[t(329)] = this[t(2390)](this.listenMessageCallback);
  }
  [n(1970)](e) {
    const t = n;
    if (e[t(1988)] === this.posterIdentifier) {
      if (e[t(503)] === t(2316)) {
        e[t(1594)] === "ping" && !this[t(578)] ? this.messagePoster({ channel: t(2316), posterIdentifier: this[t(1988)], type: "pong", timestamp: e.timestamp }) : e[t(1594)] === t(2204) && (this[t(1792)] = Date[t(2544)](), this.heartbeatTimeoutTimer && (clearTimeout(this.heartbeatTimeoutTimer), this[t(1921)] = void 0));
        return;
      }
      e[t(503)] === t(2207) && (this[t(345)] && "payload" in e ? this.onmessage(e.payload) : t(1725) in e && this[t(1313)].push(e[t(1725)]));
    }
  }
  async [n(1317)]() {
    const e = n;
    for (; this[e(1313)][e(1586)] > 0; ) {
      const t = this.messageQueue[e(1002)]();
      t && this[e(345)] && this[e(345)](t);
    }
    this[e(2439)]();
  }
  startHeartbeat() {
    const e = n;
    this[e(283)] = setInterval(() => {
      const t = e, s = Date[t(2544)]();
      this[t(1294)]({ channel: t(2316), posterIdentifier: this[t(1988)], type: t(443), timestamp: s }), this.heartbeatTimeoutTimer = setTimeout(() => {
        const x = t, r = new N2(this[x(1988)], this[x(855)]);
        this[x(2203)] && this[x(2203)](r);
      }, this.heartbeatTimeout);
    }, this.heartbeatInterval);
  }
  async [n(1415)](e, t) {
    const s = n;
    this[s(1294)]({ channel: s(2207), posterIdentifier: this.posterIdentifier, payload: e });
  }
  async [n(2400)]() {
    const e = n;
    this[e(283)] && (clearInterval(this[e(283)]), this.heartbeatTimer = void 0), this[e(1921)] && (clearTimeout(this[e(1921)]), this[e(1921)] = void 0), pe[e(1574)](this[e(1988)]), this.removeMessageEventListener(this.externalListenMessageCallback);
  }
}
const O2 = Me.extend(n(1298));
async function pa() {
  const i = n;
  if (window[i(1250)])
    return await P0.connect(i(1191), async function() {
      const e = i, t = new q2({ posterIdentifier: e(677), messagePoster: (x) => {
        const r = e;
        window[r(1250)][r(808)](x, "*");
      }, addMessageEventListener: (x) => {
        const r = e, a = (o) => {
          x(o[B(1024)]);
        };
        return window[r(886)]("message", a), a;
      }, removeMessageEventListener: (x) => {
        window.removeEventListener("message", x);
      } });
      t[e(2203)] = (x) => {
        const r = e;
        x.name === r(753) && (O2(r(1284), x), t[r(2400)](), location.reload());
      };
      const s = new wc({ name: e(677), version: e(1673) });
      return s[e(1135)](t), P0[e(857)](s), window[e(1250)].postMessage({ channel: "mcp-mesh-router", meshName: "comfy", action: e(1135) }, "*"), await new Promise((x) => {
        const r = e;
        s[r(1379)][r(2441)] = () => {
          s.server.oninitialized = void 0, x(!0);
        };
      }), s;
    });
}
const A2 = Object[n(1138)](Object[n(2459)]({ __proto__: null, connectUXP: pa, mcpMesh: P0 }, Symbol[n(1670)], { value: "Module" }));
Tx.addEventListener(n(1362), (i) => {
  const e = n, t = I0[e(2401)] || I0[e(1909)][e(590)], s = t[e(2429)];
  if (i.detail.id !== s.activeState.id) return;
  const x = P0[e(2399)][e(330)]()[e(2378)], r = Gt(I0[e(1541)], s);
  ga(r, x) && P0[e(2399)][e(1030)]({ widgetableStructure: r }), P0.store[e(1030)]({ widgetableValues: qe(I0[e(1541)]) });
}), Tx[n(886)](n(2180), () => {
  const i = n;
  P0[i(2399)].setState({ widgetableValues: qe(I0[i(1541)]) });
});
let Bs = 0, Zs = !0, Ks = "";
function ma() {
  const i = n;
  requestAnimationFrame(ma);
  const e = I0[i(2401)] || I0[i(1909)][i(590)], t = e[i(2429)], s = (t == null ? void 0 : t.id) || 0, x = (t == null ? void 0 : t.path) || "", r = (t == null ? void 0 : t[i(1171)]) || !0;
  if (s === Bs && x === Ks && r === Zs) return;
  Bs = s, Ks = x, Zs = r;
  const a = Gt(I0[i(1541)], t), o = qe(I0[i(1541)]);
  P0[i(2399)].setState({ widgetableStructure: a, widgetableValues: o }), setTimeout(() => {
    const c = i;
    if (t !== e[c(2429)]) return;
    const u = Gt(I0.graph, t), f = qe(I0[c(1541)]);
    ga(u, a) && P0.store[c(1030)]({ widgetableStructure: u }), P0.store.setState({ widgetableValues: f });
  }, 800);
}
requestAnimationFrame(ma);
function ga(i, e) {
  const t = n;
  return i[t(848)][t(1586)] !== e[t(848)][t(1586)] || JSON[t(2325)](i[t(848)]) !== JSON[t(2325)](e[t(848)]) || JSON[t(2325)](i[t(1860)]) !== JSON[t(2325)](e[t(1860)]);
}
let Js = !1;
async function T2() {
  const i = n;
  if (Js) return Promise.resolve();
  Tx.user && P0.store[i(1030)]({ comfyUserToken: Tx[i(2236)] }), Js = !0;
}
Me[n(2085)](n(1923));
async function D2(i, e, t) {
  const s = n;
  e[s(886)](s(2167), ({ detail: a }) => {
    const o = s;
    if (!a) return;
    let c = 0, u = 0;
    !isNaN(a[o(778)] / a[o(2328)]) && (c = Math.round(a[o(778)] / a[o(2328)] * 100));
    const f = a[o(831)], d = graph[o(1860)][o(1703)]((l) => l.id == f);
    if (d && d[o(1649)]) {
      const l = 100 / graph[o(1860)][o(1586)];
      u = Math[o(1249)](d[o(1649)] * l) + (c ? c / 100 * l : 0);
    }
    P0.store.setState({ progress: c, graphProgress: u });
  }), e.addEventListener(s(801), (a) => {
    var c;
    const o = s;
    (c = a.detail) != null && c.exec_info && P0[o(2399)][o(1030)]({ queueSize: a[o(1368)][o(496)].queue_remaining });
  }), e[s(886)](s(2471), ({ detail: a }) => {
    const o = s;
    if (P0.store[o(1030)]({ executingNodeTitle: "", lastError: a[o(1839)] }), a[o(2007)]) {
      const c = i[o(1541)].nodes.find((u) => u.id == a[o(2007)]);
      P0[o(2399)][o(1030)]({ widgetableErrors: { [a.node_id]: "[" + ((c == null ? void 0 : c[o(2081)]) || a[o(2007)]) + "]" + a[o(1839)] } });
    }
  }), e[s(886)](s(1447), (a) => {
    const o = s, c = a[o(1368)], u = graph[o(1860)].find((f) => f.id == c);
    if (u) {
      const f = 100 / graph[o(1860)][o(1586)];
      P0[o(2399)][o(1030)]({ executingNodeTitle: u[o(2081)], graphProgress: Math[o(1249)](u[o(1649)] * f) });
    }
  }), e.addEventListener(s(554), () => {
    const a = s;
    P0[a(2399)][a(1030)]({ progress: 0, executingNodeTitle: "" });
  }), e.addEventListener(s(630), ({ detail: a }) => {
    const o = s;
    P0.store[o(1030)]({ lastError: "", widgetableErrors: {}, progress: 0, executingNodeTitle: "", lastRunTime: Date[o(2544)]() });
  });
  const x = /* @__PURE__ */ new Map();
  e[s(886)](s(1754), (a) => {
    const o = s;
    P0[o(2399)][o(1030)]({ progress: 0, executingNodeTitle: "" });
    const c = (x[o(2086)](a[o(1368)].prompt_id) || [])[o(1889)]((u) => ({ url: u, thumbnail: u }));
    F2(a[o(1368)].prompt_id, c), x.delete(a[o(1368)][o(1638)]);
  }), e.addEventListener(s(2180), (a) => {
    const o = s, c = x[o(2086)](a.detail.prompt_id) || [];
    a.detail.output && Array[o(752)](a[o(1368)][o(1695)][o(2312)]) && a[o(1368)][o(1695)][o(2312)][o(1586)] > 0 && c[o(1251)](...a[o(1368)].output[o(2312)][o(275)]((u) => u.type == o(1695)).map((u) => {
      const f = o;
      return location[f(1174)] + location[f(1580)] + "api/view?type=" + u[f(1594)] + "&filename=" + encodeURIComponent(u.filename) + (u[f(2403)] ? f(611) + encodeURIComponent(u[f(2403)]) : "");
    })), a[o(1368)][o(1695)] && Array.isArray(a[o(1368)][o(1695)][o(2409)]) && a.detail[o(1695)][o(2409)][o(1586)] > 0 && c[o(1251)](...a[o(1368)].output.sdppp_assets[o(1889)]((u) => {
      const f = o;
      return location[f(1174)] + location[f(1580)] + f(1775) + encodeURIComponent(u);
    })), x.set(a[o(1368)][o(1638)], c);
  });
  let r = null;
  e[s(886)](s(1346), (a) => {
    r = setTimeout(() => {
      const o = B;
      P0[o(2399)].setState({ comfyWSState: o(1346) });
    }, 1e3);
  }), e[s(886)](s(477), (a) => {
    const o = s;
    P0[o(2399)].setState({ comfyWSState: o(1871) }), clearTimeout(r);
  });
}
let At = [];
(async function() {
  var e, t, s, x, r, a;
  const i = n;
  if (typeof gradioApp == i(1319)) {
    try {
      const o = (t = (e = window[i(444)]) == null ? void 0 : e[i(1384)]) == null ? void 0 : t[i(1384)], c = (x = (s = window[i(444)]) == null ? void 0 : s.ui) == null ? void 0 : x[i(1026)], u = (a = (r = window.comfyAPI) == null ? void 0 : r[i(1190)]) == null ? void 0 : a[i(1190)];
      if (!o || !u || !c) throw new Error("comfyAPI is not initialized, maybe comfyUI is too old");
      await T2(), await pa(), await D2(o, u, c), import(i(904))[i(2055)]((f) => {
        f[i(664)](xe, 2);
      });
    } catch (o) {
      At[i(1251)](o.stack || o[i(2028)] || o);
    }
    await new Promise((o) => setTimeout(o, 2e3)), At[i(1586)] && console[i(549)](At[0]);
  }
})();
