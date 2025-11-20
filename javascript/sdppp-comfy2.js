var Ls = Object.defineProperty;
var Ms = (o, x, t) => x in o ? Ls(o, x, { enumerable: !0, configurable: !0, writable: !0, value: t }) : o[x] = t;
var m0 = (o, x, t) => Ms(o, typeof x != "symbol" ? x + "" : x, t);
const a = B;
(function(o, x) {
  const t = B, n = o();
  for (; ; )
    try {
      if (parseInt(t(846)) / 1 * (-parseInt(t(2548)) / 2) + parseInt(t(714)) / 3 + parseInt(t(2161)) / 4 + parseInt(t(2446)) / 5 + parseInt(t(2459)) / 6 + parseInt(t(1138)) / 7 + -parseInt(t(1405)) / 8 === x) break;
      n.push(n.shift());
    } catch {
      n.push(n.shift());
    }
})(Fx, 850613);
const q0 = window.comfyAPI[a(2621)][a(2621)];
window[a(1912)].ui.$el;
const Oe = window.comfyAPI[a(1212)][a(1212)];
class $s {
  constructor(x) {
    m0(this, "definition");
    const t = a;
    this[t(1620)] = x;
    const n = this[t(498)]();
    if (!n[t(707)]) throw new Error("Invalid graph definition: " + n[t(622)].join(", "));
  }
  validate() {
    const x = a, t = [];
    (!this[x(1620)].nodes || Object.keys(this[x(1620)].nodes)[x(2463)] === 0) && t[x(1851)](x(1025));
    for (const [e, r] of this[x(1620)][x(748)])
      !this[x(1620)][x(1339)][e] && t[x(1851)](x(623) + e), !this[x(1620)][x(1339)][r] && t[x(1851)](x(965) + r);
    const n = this[x(1053)]();
    return !n[x(707)] && t[x(1851)](...n[x(622)]), { valid: t.length === 0, errors: t };
  }
  buildDirectedAdjacencyList() {
    const x = a, t = /* @__PURE__ */ new Map();
    for (const n of Object[x(1448)](this[x(1620)][x(1339)]))
      t[x(1527)](n, []);
    for (const [n, e] of this.definition[x(748)]) {
      const r = t[x(635)](n) || [];
      r[x(1851)](e), t.set(n, r);
    }
    return t;
  }
  [a(1053)]() {
    const x = a, t = [], n = /* @__PURE__ */ new Set(), e = /* @__PURE__ */ new Set(), r = this[x(1231)](), s = (i, c) => {
      const u = x;
      if (e[u(1541)](i)) {
        const l = c[u(1817)](i), f = c[u(600)](l)[u(329)](i);
        return t[u(1851)](u(354) + f[u(1483)](u(827))), !0;
      }
      if (n[u(1541)](i)) return !1;
      n[u(2736)](i), e[u(2736)](i);
      const d = r[u(635)](i) || [];
      for (const l of d)
        if (s(l, [...c, i])) return !0;
      return e[u(1707)](i), !1;
    };
    for (const i of Object[x(1448)](this.definition[x(1339)]))
      !n.has(i) && s(i, []);
    return { valid: t[x(2463)] === 0, errors: t };
  }
  [a(1684)]() {
    const x = a, t = /* @__PURE__ */ new Map();
    for (const n of Object[x(1448)](this[x(1620)][x(1339)]))
      t.set(n, []);
    for (const [n, e] of this.definition[x(748)]) {
      const r = t[x(635)](n) || [];
      r[x(1851)](e), t[x(1527)](n, r);
      const s = t.get(e) || [];
      s[x(1851)](n), t[x(1527)](e, s);
    }
    return t;
  }
  [a(2058)](x) {
    const t = a;
    return this.buildAdjacencyList()[t(635)](x) || [];
  }
  [a(1328)](x) {
    return this[a(1620)].nodes[x];
  }
  [a(1626)]() {
    const x = a;
    return Object[x(1448)](this[x(1620)].nodes);
  }
  [a(2803)](x, t) {
    const n = a;
    return this[n(1620)][n(748)][n(2107)](([e, r]) => e === x && r === t || e === t && r === x);
  }
  [a(1989)](x, t) {
    const n = a;
    if (x === t) return [x];
    const e = this[n(1684)](), r = [{ nodeId: x, path: [x] }], s = /* @__PURE__ */ new Set();
    for (; r.length > 0; ) {
      const { nodeId: i, path: c } = r[n(2325)]();
      if (s[n(1541)](i)) continue;
      if (s[n(2736)](i), i === t) return c;
      const u = e[n(635)](i) || [];
      for (const d of u)
        !s[n(1541)](d) && r[n(1851)]({ nodeId: d, path: [...c, d] });
    }
    return null;
  }
  [a(260)](x, t) {
    return this[a(1989)](x, t) !== null;
  }
  [a(1020)]() {
    return { ...this[a(1620)] };
  }
}
const ka = (o) => {
  let x;
  const t = /* @__PURE__ */ new Set(), n = (u, d) => {
    const l = B, f = typeof u == "function" ? u(x) : u;
    if (!Object.is(f, x)) {
      const g = x;
      x = d ?? (typeof f != "object" || f === null) ? f : Object[l(1953)]({}, x, f), t[l(641)]((h) => h(x, g));
    }
  }, e = () => x, r = () => c, s = (u) => (t[B(2736)](u), () => t.delete(u)), i = { setState: n, getState: e, getInitialState: r, subscribe: s }, c = x = o(n, e, i);
  return i;
}, zs = (o) => o ? ka(o) : ka;
var N0;
(function(o) {
  const x = a;
  o[x(1524)] = (r) => {
  };
  function t(r) {
  }
  o.assertIs = t;
  function n(r) {
    throw new Error();
  }
  o[x(1703)] = n, o.arrayToEnum = (r) => {
    const s = {};
    for (const i of r)
      s[i] = i;
    return s;
  }, o[x(2634)] = (r) => {
    const s = x, i = o[s(1219)](r)[s(558)]((u) => typeof r[r[u]] !== s(2601)), c = {};
    for (const u of i)
      c[u] = r[u];
    return o.objectValues(c);
  }, o[x(312)] = (r) => {
    const s = x;
    return o[s(1219)](r)[s(698)](function(i) {
      return r[i];
    });
  }, o[x(1219)] = typeof Object.keys === x(2176) ? (r) => Object[x(1448)](r) : (r) => {
    const s = x, i = [];
    for (const c in r)
      Object[s(1060)][s(1995)][s(1850)](r, c) && i.push(c);
    return i;
  }, o[x(2450)] = (r, s) => {
    for (const i of r)
      if (s(i)) return i;
  }, o[x(1320)] = typeof Number[x(1320)] === x(2176) ? (r) => Number[x(1320)](r) : (r) => typeof r === x(2601) && Number[x(2384)](r) && Math.floor(r) === r;
  function e(r, s = " | ") {
    const i = x;
    return r.map((c) => typeof c == "string" ? "'" + c + "'" : c)[i(1483)](s);
  }
  o.joinValues = e, o[x(2732)] = (r, s) => typeof s == "bigint" ? s.toString() : s;
})(N0 || (N0 = {}));
var Pa;
(function(o) {
  const x = a;
  o[x(2319)] = (t, n) => ({ ...t, ...n });
})(Pa || (Pa = {}));
const t0 = N0.arrayToEnum([a(1516), "nan", a(2601), a(2403), "float", a(598), a(2001), a(913), a(1589), a(2176), a(455), a(2645), a(1061), a(1985), a(1073), a(2182), "void", a(983), a(698), a(1527)]), Ee = (o) => {
  const x = a;
  switch (typeof o) {
    case "undefined":
      return t0.undefined;
    case x(1516):
      return t0[x(1516)];
    case "number":
      return Number[x(1635)](o) ? t0[x(509)] : t0.number;
    case x(598):
      return t0[x(598)];
    case "function":
      return t0.function;
    case x(913):
      return t0[x(913)];
    case x(1589):
      return t0[x(1589)];
    case "object":
      return Array[x(1155)](o) ? t0[x(1061)] : o === null ? t0[x(2645)] : o[x(2278)] && typeof o.then === x(2176) && o.catch && typeof o[x(580)] == "function" ? t0.promise : typeof Map !== x(455) && o instanceof Map ? t0[x(698)] : typeof Set !== x(455) && o instanceof Set ? t0[x(1527)] : typeof Date !== x(455) && o instanceof Date ? t0[x(2001)] : t0[x(1985)];
    default:
      return t0[x(1073)];
  }
}, Z = N0[a(442)]([a(802), a(1764), a(1656), a(249), a(565), "invalid_enum_value", a(1876), a(872), a(586), a(1277), "invalid_string", "too_small", "too_big", a(1640), "not_multiple_of", a(1364)]);
class Se extends Error {
  get [a(622)]() {
    return this.issues;
  }
  constructor(x) {
    const t = a;
    super(), this[t(2289)] = [], this[t(2553)] = (e) => {
      const r = t;
      this[r(2289)] = [...this[r(2289)], e];
    }, this[t(2299)] = (e = []) => {
      const r = t;
      this[r(2289)] = [...this[r(2289)], ...e];
    };
    const n = new.target[t(1060)];
    Object[t(617)] ? Object[t(617)](this, n) : this[t(1248)] = n, this.name = "ZodError", this[t(2289)] = x;
  }
  [a(1671)](x) {
    const t = x || function(r) {
      return r[B(2354)];
    }, n = { _errors: [] }, e = (r) => {
      const s = B;
      for (const i of r[s(2289)])
        if (i.code === "invalid_union") i.unionErrors[s(698)](e);
        else if (i.code === "invalid_return_type") e(i[s(1273)]);
        else if (i[s(1469)] === "invalid_arguments") e(i.argumentsError);
        else if (i.path.length === 0) n[s(554)][s(1851)](t(i));
        else {
          let c = n, u = 0;
          for (; u < i[s(2501)][s(2463)]; ) {
            const d = i[s(2501)][u];
            u === i.path[s(2463)] - 1 ? (c[d] = c[d] || { _errors: [] }, c[d][s(554)][s(1851)](t(i))) : c[d] = c[d] || { _errors: [] }, c = c[d], u++;
          }
        }
    };
    return e(this), n;
  }
  static [a(2633)](x) {
    if (!(x instanceof Se)) throw new Error("Not a ZodError: " + x);
  }
  [a(830)]() {
    return this.message;
  }
  get message() {
    const x = a;
    return JSON[x(555)](this.issues, N0[x(2732)], 2);
  }
  get [a(2692)]() {
    const x = a;
    return this[x(2289)][x(2463)] === 0;
  }
  [a(2115)](x = (t) => t[a(2354)]) {
    const t = a, n = {}, e = [];
    for (const r of this[t(2289)])
      if (r[t(2501)][t(2463)] > 0) {
        const s = r[t(2501)][0];
        n[s] = n[s] || [], n[s][t(1851)](x(r));
      } else e[t(1851)](x(r));
    return { formErrors: e, fieldErrors: n };
  }
  get formErrors() {
    return this.flatten();
  }
}
Se.create = (o) => new Se(o);
const Mt = (o, x) => {
  const t = a;
  let n;
  switch (o[t(1469)]) {
    case Z[t(802)]:
      o[t(1188)] === t0[t(455)] ? n = t(1649) : n = t(2615) + o[t(2323)] + ", received " + o[t(1188)];
      break;
    case Z.invalid_literal:
      n = t(610) + JSON[t(555)](o.expected, N0[t(2732)]);
      break;
    case Z[t(1876)]:
      n = t(924) + N0.joinValues(o[t(1448)], ", ");
      break;
    case Z[t(249)]:
      n = t(404);
      break;
    case Z[t(565)]:
      n = t(1329) + N0.joinValues(o.options);
      break;
    case Z[t(2043)]:
      n = t(2200) + N0[t(816)](o[t(1882)]) + t(1505) + o[t(1188)] + "'";
      break;
    case Z[t(872)]:
      n = "Invalid function arguments";
      break;
    case Z.invalid_return_type:
      n = t(888);
      break;
    case Z[t(1277)]:
      n = t(1911);
      break;
    case Z[t(660)]:
      typeof o.validation === t(1985) ? t(932) in o[t(1900)] ? (n = t(391) + o[t(1900)].includes + '"', typeof o[t(1900)].position === t(2601) && (n = n + " at one or more positions greater than or equal to " + o[t(1900)].position)) : t(2353) in o[t(1900)] ? n = 'Invalid input: must start with "' + o[t(1900)][t(2353)] + '"' : t(1286) in o.validation ? n = t(2351) + o[t(1900)][t(1286)] + '"' : N0.assertNever(o[t(1900)]) : o[t(1900)] !== t(809) ? n = "Invalid " + o[t(1900)] : n = t(473);
      break;
    case Z[t(1245)]:
      o[t(2197)] === t(1061) ? n = t(1367) + (o[t(1222)] ? t(962) : o[t(2345)] ? t(1974) : t(390)) + " " + o[t(829)] + t(943) : o[t(2197)] === t(1516) ? n = t(311) + (o.exact ? t(962) : o[t(2345)] ? t(1974) : "over") + " " + o.minimum + " character(s)" : o.type === t(2601) || o[t(2197)] === t(913) ? n = "Number must be " + (o[t(1222)] ? t(1344) : o[t(2345)] ? t(2167) : t(894)) + o[t(829)] : o[t(2197)] === "date" ? n = t(392) + (o.exact ? "exactly equal to " : o.inclusive ? t(2167) : t(894)) + new Date(Number(o[t(829)])) : n = t(404);
      break;
    case Z[t(2393)]:
      o.type === t(1061) ? n = "Array must contain " + (o[t(1222)] ? t(962) : o.inclusive ? "at most" : t(955)) + " " + o[t(789)] + " element(s)" : o[t(2197)] === t(1516) ? n = t(311) + (o[t(1222)] ? t(962) : o[t(2345)] ? t(2198) : t(1555)) + " " + o.maximum + t(767) : o[t(2197)] === t(2601) ? n = "Number must be " + (o[t(1222)] ? "exactly" : o[t(2345)] ? "less than or equal to" : t(955)) + " " + o.maximum : o.type === t(913) ? n = t(462) + (o[t(1222)] ? t(962) : o[t(2345)] ? t(2038) : t(955)) + " " + o[t(789)] : o[t(2197)] === t(2001) ? n = "Date must be " + (o[t(1222)] ? t(962) : o[t(2345)] ? t(2414) : t(388)) + " " + new Date(Number(o[t(789)])) : n = t(404);
      break;
    case Z[t(1656)]:
      n = t(404);
      break;
    case Z[t(1640)]:
      n = t(993);
      break;
    case Z.not_multiple_of:
      n = t(1130) + o[t(2401)];
      break;
    case Z[t(1364)]:
      n = t(1428);
      break;
    default:
      n = x[t(2018)], N0[t(1703)](o);
  }
  return { message: n };
};
let Us = Mt;
function Hs() {
  return Us;
}
const Vs = (o) => {
  const x = a, { data: t, path: n, errorMaps: e, issueData: r } = o, s = [...n, ...r.path || []], i = { ...r, path: s };
  if (r.message !== void 0) return { ...r, path: s, message: r[x(2354)] };
  let c = "";
  const u = e[x(558)]((d) => !!d).slice()[x(2455)]();
  for (const d of u)
    c = d(i, { data: t, defaultError: c })[x(2354)];
  return { ...r, path: s, message: c };
};
function Q(o, x) {
  const t = a, n = Hs(), e = Vs({ issueData: x, data: o[t(2743)], path: o[t(2501)], errorMaps: [o[t(1533)][t(1830)], o[t(1522)], n, n === Mt ? void 0 : Mt][t(558)]((r) => !!r) });
  o.common[t(2289)][t(1851)](e);
}
class ee {
  constructor() {
    const x = a;
    this.value = x(707);
  }
  [a(367)]() {
    const x = a;
    this[x(1732)] === x(707) && (this[x(1732)] = x(367));
  }
  abort() {
    const x = a;
    this.value !== x(1272) && (this.value = x(1272));
  }
  static [a(1668)](x, t) {
    const n = a, e = [];
    for (const r of t) {
      if (r.status === n(1272)) return h0;
      r.status === n(367) && x[n(367)](), e[n(1851)](r[n(1732)]);
    }
    return { status: x[n(1732)], value: e };
  }
  static async [a(528)](x, t) {
    const n = a, e = [];
    for (const r of t) {
      const s = await r[n(1176)], i = await r[n(1732)];
      e.push({ key: s, value: i });
    }
    return ee.mergeObjectSync(x, e);
  }
  static [a(1311)](x, t) {
    const n = a, e = {};
    for (const r of t) {
      const { key: s, value: i } = r;
      if (s.status === n(1272) || i[n(2799)] === n(1272)) return h0;
      s[n(2799)] === n(367) && x[n(367)](), i[n(2799)] === n(367) && x.dirty(), s[n(1732)] !== "__proto__" && (typeof i.value !== n(455) || r.alwaysSet) && (e[s.value] = i[n(1732)]);
    }
    return { status: x[n(1732)], value: e };
  }
}
const h0 = Object.freeze({ status: a(1272) }), Qe = (o) => ({ status: a(367), value: o }), ae = (o) => ({ status: a(707), value: o }), Ea = (o) => o[a(2799)] === "aborted", Ia = (o) => o.status === a(367), _e = (o) => o[a(2799)] === "valid", gx = (o) => typeof Promise < "u" && o instanceof Promise;
var r0;
(function(o) {
  const x = a;
  o[x(2661)] = (t) => typeof t === x(1516) ? { message: t } : t || {}, o[x(830)] = (t) => typeof t == "string" ? t : t == null ? void 0 : t[x(2354)];
})(r0 || (r0 = {}));
class pe {
  constructor(x, t, n, e) {
    const r = a;
    this[r(2598)] = [], this[r(1379)] = x, this[r(2743)] = t, this._path = n, this[r(2797)] = e;
  }
  get [a(2501)]() {
    const x = a;
    return !this[x(2598)][x(2463)] && (Array[x(1155)](this[x(2797)]) ? this[x(2598)].push(...this[x(2655)], ...this[x(2797)]) : this[x(2598)][x(1851)](...this[x(2655)], this[x(2797)])), this._cachedPath;
  }
}
const Ra = (o, x) => {
  const t = a;
  if (_e(x)) return { success: !0, data: x[t(1732)] };
  if (!o[t(1533)][t(2289)][t(2463)]) throw new Error(t(786));
  return { success: !1, get error() {
    const n = t;
    if (this._error) return this[n(1573)];
    const e = new Se(o[n(1533)][n(2289)]);
    return this[n(1573)] = e, this[n(1573)];
  } };
};
function v0(o) {
  if (!o) return {};
  const { errorMap: x, invalid_type_error: t, required_error: n, description: e } = o;
  if (x && (t || n)) throw new Error(`Can't use "invalid_type_error" or "required_error" in conjunction with custom error map.`);
  return x ? { errorMap: x, description: e } : { errorMap: (s, i) => {
    const c = B, { message: u } = o;
    return s[c(1469)] === c(2043) ? { message: u ?? i[c(2018)] } : typeof i[c(2743)] === c(455) ? { message: u ?? n ?? i[c(2018)] } : s.code !== c(802) ? { message: i.defaultError } : { message: u ?? t ?? i[c(2018)] };
  }, description: e };
}
class R0 {
  get description() {
    const x = a;
    return this[x(2036)][x(559)];
  }
  [a(643)](x) {
    return Ee(x[a(2743)]);
  }
  [a(1511)](x, t) {
    const n = a;
    return t || { common: x[n(1379)].common, data: x[n(2743)], parsedType: Ee(x[n(2743)]), schemaErrorMap: this[n(2036)].errorMap, path: x.path, parent: x.parent };
  }
  [a(1468)](x) {
    const t = a;
    return { status: new ee(), ctx: { common: x[t(1379)].common, data: x.data, parsedType: Ee(x.data), schemaErrorMap: this[t(2036)][t(946)], path: x[t(2501)], parent: x[t(1379)] } };
  }
  [a(1027)](x) {
    const t = a, n = this[t(1901)](x);
    if (gx(n)) throw new Error(t(1948));
    return n;
  }
  _parseAsync(x) {
    const t = a, n = this._parse(x);
    return Promise[t(2251)](n);
  }
  [a(1383)](x, t) {
    const n = a, e = this[n(488)](x, t);
    if (e[n(532)]) return e[n(2743)];
    throw e[n(443)];
  }
  safeParse(x, t) {
    const n = a, e = { common: { issues: [], async: (t == null ? void 0 : t[n(523)]) ?? !1, contextualErrorMap: t == null ? void 0 : t[n(946)] }, path: (t == null ? void 0 : t[n(2501)]) || [], schemaErrorMap: this[n(2036)][n(946)], parent: null, data: x, parsedType: Ee(x) }, r = this._parseSync({ data: x, path: e[n(2501)], parent: e });
    return Ra(e, r);
  }
  "~validate"(x) {
    var e, r;
    const t = a, n = { common: { issues: [], async: !!this[t(300)].async }, path: [], schemaErrorMap: this[t(2036)].errorMap, parent: null, data: x, parsedType: Ee(x) };
    if (!this["~standard"].async) try {
      const s = this._parseSync({ data: x, path: [], parent: n });
      return _e(s) ? { value: s[t(1732)] } : { issues: n[t(1533)].issues };
    } catch (s) {
      (r = (e = s == null ? void 0 : s[t(2354)]) == null ? void 0 : e[t(2321)]()) != null && r.includes(t(980)) && (this["~standard"].async = !0), n[t(1533)] = { issues: [], async: !0 };
    }
    return this._parseAsync({ data: x, path: [], parent: n })[t(2278)]((s) => _e(s) ? { value: s[t(1732)] } : { issues: n[t(1533)].issues });
  }
  async [a(1372)](x, t) {
    const n = a, e = await this[n(450)](x, t);
    if (e[n(532)]) return e[n(2743)];
    throw e[n(443)];
  }
  async [a(450)](x, t) {
    const n = a, e = { common: { issues: [], contextualErrorMap: t == null ? void 0 : t.errorMap, async: !0 }, path: (t == null ? void 0 : t[n(2501)]) || [], schemaErrorMap: this[n(2036)][n(946)], parent: null, data: x, parsedType: Ee(x) }, r = this._parse({ data: x, path: e[n(2501)], parent: e }), s = await (gx(r) ? r : Promise[n(2251)](r));
    return Ra(e, s);
  }
  [a(2568)](x, t) {
    const n = (e) => {
      const r = B;
      return typeof t === r(1516) || typeof t === r(455) ? { message: t } : typeof t === r(2176) ? t(e) : t;
    };
    return this._refinement((e, r) => {
      const s = B, i = x(e), c = () => r.addIssue({ code: Z.custom, ...n(e) });
      return typeof Promise !== s(455) && i instanceof Promise ? i[s(2278)]((u) => u ? !0 : (c(), !1)) : i ? !0 : (c(), !1);
    });
  }
  refinement(x, t) {
    const n = a;
    return this[n(1898)]((e, r) => {
      const s = n;
      return x(e) ? !0 : (r[s(2553)](typeof t === s(2176) ? t(e, r) : t), !1);
    });
  }
  [a(1898)](x) {
    return new Te({ schema: this, typeName: p0.ZodEffects, effect: { type: "refinement", refinement: x } });
  }
  superRefine(x) {
    return this[a(1898)](x);
  }
  constructor(x) {
    const t = a;
    this.spa = this[t(450)], this[t(2036)] = x, this.parse = this[t(1383)][t(1926)](this), this.safeParse = this.safeParse[t(1926)](this), this[t(1372)] = this[t(1372)][t(1926)](this), this[t(450)] = this[t(450)][t(1926)](this), this[t(2624)] = this[t(2624)][t(1926)](this), this.refine = this[t(2568)][t(1926)](this), this.refinement = this[t(434)][t(1926)](this), this.superRefine = this.superRefine[t(1926)](this), this[t(1833)] = this[t(1833)][t(1926)](this), this[t(917)] = this.nullable[t(1926)](this), this[t(940)] = this[t(940)].bind(this), this.array = this[t(1061)][t(1926)](this), this[t(2182)] = this[t(2182)].bind(this), this.or = this.or[t(1926)](this), this[t(2509)] = this[t(2509)][t(1926)](this), this[t(365)] = this[t(365)].bind(this), this[t(2258)] = this.brand[t(1926)](this), this[t(779)] = this[t(779)].bind(this), this[t(580)] = this[t(580)][t(1926)](this), this[t(1724)] = this[t(1724)][t(1926)](this), this[t(905)] = this[t(905)][t(1926)](this), this[t(1993)] = this[t(1993)][t(1926)](this), this[t(939)] = this[t(939)][t(1926)](this), this[t(1886)] = this[t(1886)].bind(this), this[t(300)] = { version: 1, vendor: t(1910), validate: (n) => this[t(2082)](n) };
  }
  optional() {
    const x = a;
    return we[x(1510)](this, this[x(2036)]);
  }
  [a(917)]() {
    const x = a;
    return Le.create(this, this[x(2036)]);
  }
  [a(940)]() {
    return this[a(917)]().optional();
  }
  [a(1061)]() {
    return he[a(1510)](this);
  }
  promise() {
    const x = a;
    return kx.create(this, this[x(2036)]);
  }
  or(x) {
    const t = a;
    return yx[t(1510)]([this, x], this[t(2036)]);
  }
  and(x) {
    const t = a;
    return vx[t(1510)](this, x, this[t(2036)]);
  }
  transform(x) {
    const t = a;
    return new Te({ ...v0(this[t(2036)]), schema: this, typeName: p0[t(2286)], effect: { type: t(365), transform: x } });
  }
  [a(779)](x) {
    const t = a, n = typeof x == "function" ? x : () => x;
    return new Px({ ...v0(this[t(2036)]), innerType: this, defaultValue: n, typeName: p0[t(1085)] });
  }
  [a(2258)]() {
    const x = a;
    return new Hn({ typeName: p0[x(2531)], type: this, ...v0(this[x(2036)]) });
  }
  [a(580)](x) {
    const t = a, n = typeof x === t(2176) ? x : () => x;
    return new Ex({ ...v0(this[t(2036)]), innerType: this, catchValue: n, typeName: p0[t(1574)] });
  }
  describe(x) {
    const t = a, n = this.constructor;
    return new n({ ...this[t(2036)], description: x });
  }
  [a(905)](x) {
    return aa[a(1510)](this, x);
  }
  [a(1993)]() {
    return Ix[a(1510)](this);
  }
  [a(1886)]() {
    const x = a;
    return this[x(488)](void 0)[x(532)];
  }
  isNullable() {
    const x = a;
    return this[x(488)](null)[x(532)];
  }
}
const _s = /^c[^\s-]{8,}$/i, Ws = /^[0-9a-z]+$/, Bs = /^[0-9A-HJKMNP-TV-Z]{26}$/i, Zs = /^[0-9a-fA-F]{8}\b-[0-9a-fA-F]{4}\b-[0-9a-fA-F]{4}\b-[0-9a-fA-F]{4}\b-[0-9a-fA-F]{12}$/i, Ks = /^[a-z0-9_-]{21}$/i, Gs = /^[A-Za-z0-9-_]+\.[A-Za-z0-9-_]+\.[A-Za-z0-9-_]*$/, Js = /^[-+]?P(?!$)(?:(?:[-+]?\d+Y)|(?:[-+]?\d+[.,]\d+Y$))?(?:(?:[-+]?\d+M)|(?:[-+]?\d+[.,]\d+M$))?(?:(?:[-+]?\d+W)|(?:[-+]?\d+[.,]\d+W$))?(?:(?:[-+]?\d+D)|(?:[-+]?\d+[.,]\d+D$))?(?:T(?=[\d+-])(?:(?:[-+]?\d+H)|(?:[-+]?\d+[.,]\d+H$))?(?:(?:[-+]?\d+M)|(?:[-+]?\d+[.,]\d+M$))?(?:[-+]?\d+(?:[.,]\d+)?S)?)??$/, Qs = /^(?!\.)(?!.*\.\.)([A-Z0-9_'+\-\.]*)[A-Z0-9_+-]@([A-Z0-9][A-Z0-9\-]*\.)+[A-Z]{2,}$/i, Xs = a(1959);
let $x;
const Ys = /^(?:(?:25[0-5]|2[0-4][0-9]|1[0-9][0-9]|[1-9][0-9]|[0-9])\.){3}(?:25[0-5]|2[0-4][0-9]|1[0-9][0-9]|[1-9][0-9]|[0-9])$/, eo = /^(?:(?:25[0-5]|2[0-4][0-9]|1[0-9][0-9]|[1-9][0-9]|[0-9])\.){3}(?:25[0-5]|2[0-4][0-9]|1[0-9][0-9]|[1-9][0-9]|[0-9])\/(3[0-2]|[12]?[0-9])$/, xo = /^(([0-9a-fA-F]{1,4}:){7,7}[0-9a-fA-F]{1,4}|([0-9a-fA-F]{1,4}:){1,7}:|([0-9a-fA-F]{1,4}:){1,6}:[0-9a-fA-F]{1,4}|([0-9a-fA-F]{1,4}:){1,5}(:[0-9a-fA-F]{1,4}){1,2}|([0-9a-fA-F]{1,4}:){1,4}(:[0-9a-fA-F]{1,4}){1,3}|([0-9a-fA-F]{1,4}:){1,3}(:[0-9a-fA-F]{1,4}){1,4}|([0-9a-fA-F]{1,4}:){1,2}(:[0-9a-fA-F]{1,4}){1,5}|[0-9a-fA-F]{1,4}:((:[0-9a-fA-F]{1,4}){1,6})|:((:[0-9a-fA-F]{1,4}){1,7}|:)|fe80:(:[0-9a-fA-F]{0,4}){0,4}%[0-9a-zA-Z]{1,}|::(ffff(:0{1,4}){0,1}:){0,1}((25[0-5]|(2[0-4]|1{0,1}[0-9]){0,1}[0-9])\.){3,3}(25[0-5]|(2[0-4]|1{0,1}[0-9]){0,1}[0-9])|([0-9a-fA-F]{1,4}:){1,4}:((25[0-5]|(2[0-4]|1{0,1}[0-9]){0,1}[0-9])\.){3,3}(25[0-5]|(2[0-4]|1{0,1}[0-9]){0,1}[0-9]))$/, to = /^(([0-9a-fA-F]{1,4}:){7,7}[0-9a-fA-F]{1,4}|([0-9a-fA-F]{1,4}:){1,7}:|([0-9a-fA-F]{1,4}:){1,6}:[0-9a-fA-F]{1,4}|([0-9a-fA-F]{1,4}:){1,5}(:[0-9a-fA-F]{1,4}){1,2}|([0-9a-fA-F]{1,4}:){1,4}(:[0-9a-fA-F]{1,4}){1,3}|([0-9a-fA-F]{1,4}:){1,3}(:[0-9a-fA-F]{1,4}){1,4}|([0-9a-fA-F]{1,4}:){1,2}(:[0-9a-fA-F]{1,4}){1,5}|[0-9a-fA-F]{1,4}:((:[0-9a-fA-F]{1,4}){1,6})|:((:[0-9a-fA-F]{1,4}){1,7}|:)|fe80:(:[0-9a-fA-F]{0,4}){0,4}%[0-9a-zA-Z]{1,}|::(ffff(:0{1,4}){0,1}:){0,1}((25[0-5]|(2[0-4]|1{0,1}[0-9]){0,1}[0-9])\.){3,3}(25[0-5]|(2[0-4]|1{0,1}[0-9]){0,1}[0-9])|([0-9a-fA-F]{1,4}:){1,4}:((25[0-5]|(2[0-4]|1{0,1}[0-9]){0,1}[0-9])\.){3,3}(25[0-5]|(2[0-4]|1{0,1}[0-9]){0,1}[0-9]))\/(12[0-8]|1[01][0-9]|[1-9]?[0-9])$/, ao = /^([0-9a-zA-Z+/]{4})*(([0-9a-zA-Z+/]{2}==)|([0-9a-zA-Z+/]{3}=))?$/, ro = /^([0-9a-zA-Z-_]{4})*(([0-9a-zA-Z-_]{2}(==)?)|([0-9a-zA-Z-_]{3}(=)?))?$/, $n = a(2637), no = new RegExp("^" + $n + "$");
function zn(o) {
  const x = a;
  let t = "[0-5]\\d";
  o[x(1189)] ? t = t + "\\.\\d{" + o[x(1189)] + "}" : o.precision == null && (t = t + "(\\.\\d+)?");
  const n = o[x(1189)] ? "+" : "?";
  return "([01]\\d|2[0-3]):[0-5]\\d(:" + t + ")" + n;
}
function so(o) {
  return new RegExp("^" + zn(o) + "$");
}
function oo(o) {
  const x = a;
  let t = $n + "T" + zn(o);
  const n = [];
  return n.push(o[x(1244)] ? "Z?" : "Z"), o[x(2220)] && n[x(1851)](x(2148)), t = t + "(" + n[x(1483)]("|") + ")", new RegExp("^" + t + "$");
}
function io(o, x) {
  return !!((x === "v4" || !x) && Ys[a(2734)](o) || (x === "v6" || !x) && xo.test(o));
}
function co(o, x) {
  const t = a;
  if (!Gs[t(2734)](o)) return !1;
  try {
    const [n] = o[t(2352)](".");
    if (!n) return !1;
    const e = n[t(1936)](/-/g, "+").replace(/_/g, "/")[t(974)](n[t(2463)] + (4 - n.length % 4) % 4, "="), r = JSON[t(1383)](atob(e));
    return !(typeof r != "object" || r === null || t(921) in r && (r == null ? void 0 : r[t(921)]) !== "JWT" || !r[t(343)] || x && r[t(343)] !== x);
  } catch {
    return !1;
  }
}
function uo(o, x) {
  const t = a;
  return !!((x === "v4" || !x) && eo[t(2734)](o) || (x === "v6" || !x) && to[t(2734)](o));
}
class ve extends R0 {
  [a(1901)](x) {
    const t = a;
    if (this._def.coerce && (x.data = String(x[t(2743)])), this._getType(x) !== t0.string) {
      const s = this[t(1511)](x);
      return Q(s, { code: Z.invalid_type, expected: t0[t(1516)], received: s[t(1846)] }), h0;
    }
    const e = new ee();
    let r;
    for (const s of this[t(2036)].checks)
      if (s.kind === "min") x[t(2743)].length < s[t(1732)] && (r = this[t(1511)](x, r), Q(r, { code: Z.too_small, minimum: s[t(1732)], type: t(1516), inclusive: !0, exact: !1, message: s[t(2354)] }), e[t(367)]());
      else if (s[t(2740)] === t(264)) x[t(2743)][t(2463)] > s[t(1732)] && (r = this[t(1511)](x, r), Q(r, { code: Z[t(2393)], maximum: s[t(1732)], type: t(1516), inclusive: !0, exact: !1, message: s[t(2354)] }), e[t(367)]());
      else if (s.kind === t(2463)) {
        const i = x[t(2743)][t(2463)] > s.value, c = x[t(2743)][t(2463)] < s[t(1732)];
        (i || c) && (r = this[t(1511)](x, r), i ? Q(r, { code: Z[t(2393)], maximum: s[t(1732)], type: t(1516), inclusive: !0, exact: !0, message: s[t(2354)] }) : c && Q(r, { code: Z[t(1245)], minimum: s.value, type: t(1516), inclusive: !0, exact: !0, message: s[t(2354)] }), e[t(367)]());
      } else if (s[t(2740)] === t(1663)) !Qs[t(2734)](x[t(2743)]) && (r = this[t(1511)](x, r), Q(r, { validation: t(1663), code: Z.invalid_string, message: s[t(2354)] }), e[t(367)]());
      else if (s.kind === t(2175)) !$x && ($x = new RegExp(Xs, "u")), !$x[t(2734)](x.data) && (r = this[t(1511)](x, r), Q(r, { validation: t(2175), code: Z[t(660)], message: s[t(2354)] }), e[t(367)]());
      else if (s[t(2740)] === t(1729)) !Zs.test(x[t(2743)]) && (r = this[t(1511)](x, r), Q(r, { validation: t(1729), code: Z[t(660)], message: s[t(2354)] }), e[t(367)]());
      else if (s[t(2740)] === t(1481)) !Ks[t(2734)](x[t(2743)]) && (r = this[t(1511)](x, r), Q(r, { validation: t(1481), code: Z[t(660)], message: s[t(2354)] }), e[t(367)]());
      else if (s.kind === "cuid") !_s[t(2734)](x[t(2743)]) && (r = this._getOrReturnCtx(x, r), Q(r, { validation: t(2647), code: Z[t(660)], message: s.message }), e.dirty());
      else if (s[t(2740)] === t(901)) !Ws[t(2734)](x[t(2743)]) && (r = this[t(1511)](x, r), Q(r, { validation: t(901), code: Z.invalid_string, message: s[t(2354)] }), e[t(367)]());
      else if (s[t(2740)] === t(2704)) !Bs[t(2734)](x[t(2743)]) && (r = this[t(1511)](x, r), Q(r, { validation: "ulid", code: Z[t(660)], message: s[t(2354)] }), e.dirty());
      else if (s[t(2740)] === t(745)) try {
        new URL(x[t(2743)]);
      } catch {
        r = this[t(1511)](x, r), Q(r, { validation: t(745), code: Z[t(660)], message: s[t(2354)] }), e[t(367)]();
      }
      else
        s[t(2740)] === t(809) ? (s[t(809)][t(2104)] = 0, !s.regex[t(2734)](x[t(2743)]) && (r = this[t(1511)](x, r), Q(r, { validation: "regex", code: Z[t(660)], message: s[t(2354)] }), e[t(367)]())) : s.kind === t(549) ? x.data = x[t(2743)].trim() : s.kind === "includes" ? !x[t(2743)][t(932)](s[t(1732)], s[t(1269)]) && (r = this[t(1511)](x, r), Q(r, { code: Z[t(660)], validation: { includes: s[t(1732)], position: s[t(1269)] }, message: s[t(2354)] }), e.dirty()) : s[t(2740)] === t(2321) ? x[t(2743)] = x[t(2743)][t(2321)]() : s[t(2740)] === t(1731) ? x.data = x[t(2743)][t(1731)]() : s[t(2740)] === "startsWith" ? !x.data.startsWith(s[t(1732)]) && (r = this[t(1511)](x, r), Q(r, { code: Z[t(660)], validation: { startsWith: s[t(1732)] }, message: s.message }), e[t(367)]()) : s[t(2740)] === t(1286) ? !x[t(2743)][t(1286)](s.value) && (r = this[t(1511)](x, r), Q(r, { code: Z.invalid_string, validation: { endsWith: s[t(1732)] }, message: s[t(2354)] }), e[t(367)]()) : s[t(2740)] === t(1306) ? !oo(s)[t(2734)](x.data) && (r = this[t(1511)](x, r), Q(r, { code: Z[t(660)], validation: t(1306), message: s[t(2354)] }), e[t(367)]()) : s[t(2740)] === t(2001) ? !no[t(2734)](x[t(2743)]) && (r = this[t(1511)](x, r), Q(r, { code: Z[t(660)], validation: "date", message: s[t(2354)] }), e[t(367)]()) : s[t(2740)] === t(1147) ? !so(s)[t(2734)](x[t(2743)]) && (r = this[t(1511)](x, r), Q(r, { code: Z[t(660)], validation: "time", message: s[t(2354)] }), e[t(367)]()) : s.kind === t(371) ? !Js.test(x[t(2743)]) && (r = this[t(1511)](x, r), Q(r, { validation: t(371), code: Z[t(660)], message: s[t(2354)] }), e[t(367)]()) : s[t(2740)] === "ip" ? !io(x.data, s[t(567)]) && (r = this[t(1511)](x, r), Q(r, { validation: "ip", code: Z.invalid_string, message: s.message }), e[t(367)]()) : s.kind === t(313) ? !co(x[t(2743)], s.alg) && (r = this[t(1511)](x, r), Q(r, { validation: t(313), code: Z[t(660)], message: s.message }), e[t(367)]()) : s[t(2740)] === "cidr" ? !uo(x[t(2743)], s.version) && (r = this[t(1511)](x, r), Q(r, { validation: t(1399), code: Z.invalid_string, message: s[t(2354)] }), e[t(367)]()) : s.kind === t(699) ? !ao[t(2734)](x[t(2743)]) && (r = this[t(1511)](x, r), Q(r, { validation: t(699), code: Z[t(660)], message: s[t(2354)] }), e.dirty()) : s[t(2740)] === t(302) ? !ro[t(2734)](x[t(2743)]) && (r = this._getOrReturnCtx(x, r), Q(r, { validation: t(302), code: Z[t(660)], message: s[t(2354)] }), e[t(367)]()) : N0[t(1703)](s);
    return { status: e[t(1732)], value: x[t(2743)] };
  }
  [a(283)](x, t, n) {
    const e = a;
    return this[e(434)]((r) => x[e(2734)](r), { validation: t, code: Z[e(660)], ...r0.errToObj(n) });
  }
  [a(1691)](x) {
    const t = a;
    return new ve({ ...this[t(2036)], checks: [...this[t(2036)][t(2668)], x] });
  }
  [a(1663)](x) {
    const t = a;
    return this._addCheck({ kind: "email", ...r0[t(2661)](x) });
  }
  url(x) {
    const t = a;
    return this[t(1691)]({ kind: t(745), ...r0[t(2661)](x) });
  }
  [a(2175)](x) {
    const t = a;
    return this[t(1691)]({ kind: "emoji", ...r0[t(2661)](x) });
  }
  [a(1729)](x) {
    const t = a;
    return this._addCheck({ kind: t(1729), ...r0.errToObj(x) });
  }
  [a(1481)](x) {
    const t = a;
    return this[t(1691)]({ kind: t(1481), ...r0[t(2661)](x) });
  }
  [a(2647)](x) {
    return this[a(1691)]({ kind: "cuid", ...r0.errToObj(x) });
  }
  cuid2(x) {
    const t = a;
    return this[t(1691)]({ kind: t(901), ...r0[t(2661)](x) });
  }
  [a(2704)](x) {
    const t = a;
    return this[t(1691)]({ kind: "ulid", ...r0[t(2661)](x) });
  }
  base64(x) {
    const t = a;
    return this[t(1691)]({ kind: t(699), ...r0[t(2661)](x) });
  }
  [a(302)](x) {
    const t = a;
    return this._addCheck({ kind: t(302), ...r0[t(2661)](x) });
  }
  [a(313)](x) {
    const t = a;
    return this[t(1691)]({ kind: "jwt", ...r0[t(2661)](x) });
  }
  ip(x) {
    const t = a;
    return this[t(1691)]({ kind: "ip", ...r0[t(2661)](x) });
  }
  [a(1399)](x) {
    const t = a;
    return this[t(1691)]({ kind: "cidr", ...r0[t(2661)](x) });
  }
  [a(1306)](x) {
    const t = a;
    return typeof x == "string" ? this._addCheck({ kind: t(1306), precision: null, offset: !1, local: !1, message: x }) : this._addCheck({ kind: t(1306), precision: typeof (x == null ? void 0 : x[t(1189)]) === t(455) ? null : x == null ? void 0 : x.precision, offset: (x == null ? void 0 : x.offset) ?? !1, local: (x == null ? void 0 : x.local) ?? !1, ...r0[t(2661)](x == null ? void 0 : x[t(2354)]) });
  }
  [a(2001)](x) {
    return this[a(1691)]({ kind: "date", message: x });
  }
  [a(1147)](x) {
    const t = a;
    return typeof x === t(1516) ? this[t(1691)]({ kind: t(1147), precision: null, message: x }) : this[t(1691)]({ kind: "time", precision: typeof (x == null ? void 0 : x[t(1189)]) > "u" ? null : x == null ? void 0 : x[t(1189)], ...r0[t(2661)](x == null ? void 0 : x.message) });
  }
  [a(371)](x) {
    const t = a;
    return this[t(1691)]({ kind: "duration", ...r0[t(2661)](x) });
  }
  [a(809)](x, t) {
    const n = a;
    return this._addCheck({ kind: n(809), regex: x, ...r0[n(2661)](t) });
  }
  [a(932)](x, t) {
    const n = a;
    return this._addCheck({ kind: n(932), value: x, position: t == null ? void 0 : t[n(1269)], ...r0[n(2661)](t == null ? void 0 : t.message) });
  }
  [a(2353)](x, t) {
    const n = a;
    return this._addCheck({ kind: n(2353), value: x, ...r0.errToObj(t) });
  }
  [a(1286)](x, t) {
    const n = a;
    return this[n(1691)]({ kind: n(1286), value: x, ...r0[n(2661)](t) });
  }
  [a(458)](x, t) {
    const n = a;
    return this[n(1691)]({ kind: n(458), value: x, ...r0[n(2661)](t) });
  }
  [a(264)](x, t) {
    return this[a(1691)]({ kind: "max", value: x, ...r0.errToObj(t) });
  }
  [a(2463)](x, t) {
    const n = a;
    return this[n(1691)]({ kind: n(2463), value: x, ...r0.errToObj(t) });
  }
  [a(1849)](x) {
    return this[a(458)](1, r0.errToObj(x));
  }
  trim() {
    const x = a;
    return new ve({ ...this[x(2036)], checks: [...this[x(2036)][x(2668)], { kind: x(549) }] });
  }
  [a(2321)]() {
    const x = a;
    return new ve({ ...this[x(2036)], checks: [...this[x(2036)][x(2668)], { kind: x(2321) }] });
  }
  toUpperCase() {
    const x = a;
    return new ve({ ...this[x(2036)], checks: [...this[x(2036)].checks, { kind: x(1731) }] });
  }
  get [a(1642)]() {
    const x = a;
    return !!this._def[x(2668)][x(2450)]((t) => t[x(2740)] === x(1306));
  }
  get isDate() {
    const x = a;
    return !!this[x(2036)].checks[x(2450)]((t) => t[x(2740)] === x(2001));
  }
  get [a(1398)]() {
    const x = a;
    return !!this[x(2036)][x(2668)][x(2450)]((t) => t[x(2740)] === x(1147));
  }
  get [a(1470)]() {
    const x = a;
    return !!this[x(2036)][x(2668)][x(2450)]((t) => t[x(2740)] === x(371));
  }
  get [a(1375)]() {
    const x = a;
    return !!this[x(2036)].checks.find((t) => t[x(2740)] === x(1663));
  }
  get [a(2613)]() {
    const x = a;
    return !!this[x(2036)][x(2668)].find((t) => t[x(2740)] === "url");
  }
  get isEmoji() {
    const x = a;
    return !!this._def.checks[x(2450)]((t) => t.kind === x(2175));
  }
  get isUUID() {
    const x = a;
    return !!this._def[x(2668)].find((t) => t[x(2740)] === x(1729));
  }
  get [a(1544)]() {
    const x = a;
    return !!this._def[x(2668)].find((t) => t.kind === "nanoid");
  }
  get [a(900)]() {
    const x = a;
    return !!this._def[x(2668)][x(2450)]((t) => t[x(2740)] === "cuid");
  }
  get isCUID2() {
    const x = a;
    return !!this[x(2036)][x(2668)].find((t) => t.kind === x(901));
  }
  get [a(614)]() {
    const x = a;
    return !!this[x(2036)][x(2668)][x(2450)]((t) => t[x(2740)] === "ulid");
  }
  get isIP() {
    const x = a;
    return !!this[x(2036)][x(2668)][x(2450)]((t) => t.kind === "ip");
  }
  get [a(1532)]() {
    const x = a;
    return !!this[x(2036)][x(2668)][x(2450)]((t) => t[x(2740)] === "cidr");
  }
  get [a(2097)]() {
    const x = a;
    return !!this[x(2036)][x(2668)][x(2450)]((t) => t[x(2740)] === x(699));
  }
  get [a(2127)]() {
    const x = a;
    return !!this[x(2036)][x(2668)][x(2450)]((t) => t[x(2740)] === x(302));
  }
  get [a(1788)]() {
    const x = a;
    let t = null;
    for (const n of this[x(2036)][x(2668)])
      n[x(2740)] === x(458) && (t === null || n[x(1732)] > t) && (t = n[x(1732)]);
    return t;
  }
  get [a(512)]() {
    const x = a;
    let t = null;
    for (const n of this[x(2036)].checks)
      n[x(2740)] === x(264) && (t === null || n[x(1732)] < t) && (t = n.value);
    return t;
  }
}
ve.create = (o) => {
  const x = a;
  return new ve({ checks: [], typeName: p0[x(2433)], coerce: (o == null ? void 0 : o.coerce) ?? !1, ...v0(o) });
};
function lo(o, x) {
  const t = a, n = (o[t(830)]()[t(2352)](".")[1] || "").length, e = (x.toString()[t(2352)](".")[1] || "")[t(2463)], r = n > e ? n : e, s = Number[t(397)](o[t(2772)](r)[t(1936)](".", "")), i = Number.parseInt(x[t(2772)](r)[t(1936)](".", ""));
  return s % i / 10 ** r;
}
class We extends R0 {
  constructor() {
    const x = a;
    super(...arguments), this[x(458)] = this[x(2567)], this.max = this[x(1458)], this[x(466)] = this[x(2401)];
  }
  [a(1901)](x) {
    const t = a;
    if (this._def[t(461)] && (x[t(2743)] = Number(x[t(2743)])), this[t(643)](x) !== t0[t(2601)]) {
      const s = this[t(1511)](x);
      return Q(s, { code: Z[t(802)], expected: t0[t(2601)], received: s[t(1846)] }), h0;
    }
    let e;
    const r = new ee();
    for (const s of this._def.checks)
      s[t(2740)] === t(1186) ? !N0[t(1320)](x[t(2743)]) && (e = this[t(1511)](x, e), Q(e, { code: Z[t(802)], expected: t(2403), received: t(899), message: s[t(2354)] }), r[t(367)]()) : s[t(2740)] === t(458) ? (s[t(2345)] ? x[t(2743)] < s.value : x[t(2743)] <= s[t(1732)]) && (e = this[t(1511)](x, e), Q(e, { code: Z[t(1245)], minimum: s[t(1732)], type: t(2601), inclusive: s[t(2345)], exact: !1, message: s[t(2354)] }), r[t(367)]()) : s[t(2740)] === "max" ? (s[t(2345)] ? x.data > s[t(1732)] : x[t(2743)] >= s[t(1732)]) && (e = this[t(1511)](x, e), Q(e, { code: Z[t(2393)], maximum: s[t(1732)], type: t(2601), inclusive: s.inclusive, exact: !1, message: s[t(2354)] }), r[t(367)]()) : s[t(2740)] === t(2401) ? lo(x[t(2743)], s[t(1732)]) !== 0 && (e = this[t(1511)](x, e), Q(e, { code: Z[t(1401)], multipleOf: s[t(1732)], message: s.message }), r[t(367)]()) : s[t(2740)] === t(2181) ? !Number[t(2384)](x[t(2743)]) && (e = this[t(1511)](x, e), Q(e, { code: Z[t(1364)], message: s[t(2354)] }), r.dirty()) : N0[t(1703)](s);
    return { status: r[t(1732)], value: x.data };
  }
  [a(2567)](x, t) {
    return this[a(2155)]("min", x, !0, r0.toString(t));
  }
  gt(x, t) {
    const n = a;
    return this[n(2155)]("min", x, !1, r0[n(830)](t));
  }
  lte(x, t) {
    const n = a;
    return this.setLimit(n(264), x, !0, r0[n(830)](t));
  }
  lt(x, t) {
    const n = a;
    return this[n(2155)](n(264), x, !1, r0.toString(t));
  }
  [a(2155)](x, t, n, e) {
    const r = a;
    return new We({ ...this[r(2036)], checks: [...this[r(2036)][r(2668)], { kind: x, value: t, inclusive: n, message: r0.toString(e) }] });
  }
  [a(1691)](x) {
    const t = a;
    return new We({ ...this[t(2036)], checks: [...this._def.checks, x] });
  }
  int(x) {
    const t = a;
    return this[t(1691)]({ kind: t(1186), message: r0[t(830)](x) });
  }
  [a(499)](x) {
    return this[a(1691)]({ kind: "min", value: 0, inclusive: !1, message: r0.toString(x) });
  }
  [a(1260)](x) {
    const t = a;
    return this._addCheck({ kind: t(264), value: 0, inclusive: !1, message: r0[t(830)](x) });
  }
  [a(723)](x) {
    const t = a;
    return this[t(1691)]({ kind: "max", value: 0, inclusive: !0, message: r0[t(830)](x) });
  }
  [a(1858)](x) {
    const t = a;
    return this[t(1691)]({ kind: t(458), value: 0, inclusive: !0, message: r0[t(830)](x) });
  }
  [a(2401)](x, t) {
    const n = a;
    return this[n(1691)]({ kind: n(2401), value: x, message: r0[n(830)](t) });
  }
  finite(x) {
    const t = a;
    return this[t(1691)]({ kind: "finite", message: r0[t(830)](x) });
  }
  [a(2372)](x) {
    const t = a;
    return this[t(1691)]({ kind: t(458), inclusive: !0, value: Number[t(2140)], message: r0[t(830)](x) })[t(1691)]({ kind: "max", inclusive: !0, value: Number[t(2775)], message: r0[t(830)](x) });
  }
  get [a(298)]() {
    const x = a;
    let t = null;
    for (const n of this[x(2036)][x(2668)])
      n.kind === x(458) && (t === null || n[x(1732)] > t) && (t = n[x(1732)]);
    return t;
  }
  get [a(1700)]() {
    const x = a;
    let t = null;
    for (const n of this[x(2036)][x(2668)])
      n[x(2740)] === x(264) && (t === null || n.value < t) && (t = n.value);
    return t;
  }
  get [a(2757)]() {
    const x = a;
    return !!this[x(2036)][x(2668)][x(2450)]((t) => t[x(2740)] === x(1186) || t[x(2740)] === x(2401) && N0[x(1320)](t.value));
  }
  get [a(2384)]() {
    const x = a;
    let t = null, n = null;
    for (const e of this[x(2036)][x(2668)]) {
      if (e[x(2740)] === x(2181) || e.kind === "int" || e[x(2740)] === x(2401)) return !0;
      e[x(2740)] === x(458) ? (n === null || e[x(1732)] > n) && (n = e[x(1732)]) : e[x(2740)] === x(264) && (t === null || e.value < t) && (t = e[x(1732)]);
    }
    return Number[x(2384)](n) && Number.isFinite(t);
  }
}
We.create = (o) => {
  const x = a;
  return new We({ checks: [], typeName: p0.ZodNumber, coerce: (o == null ? void 0 : o[x(461)]) || !1, ...v0(o) });
};
class tx extends R0 {
  constructor() {
    const x = a;
    super(...arguments), this[x(458)] = this[x(2567)], this.max = this.lte;
  }
  [a(1901)](x) {
    const t = a;
    if (this._def[t(461)]) try {
      x.data = BigInt(x[t(2743)]);
    } catch {
      return this[t(629)](x);
    }
    if (this[t(643)](x) !== t0[t(913)]) return this._getInvalidInput(x);
    let e;
    const r = new ee();
    for (const s of this[t(2036)].checks)
      s[t(2740)] === "min" ? (s[t(2345)] ? x[t(2743)] < s[t(1732)] : x[t(2743)] <= s[t(1732)]) && (e = this[t(1511)](x, e), Q(e, { code: Z[t(1245)], type: "bigint", minimum: s[t(1732)], inclusive: s[t(2345)], message: s.message }), r[t(367)]()) : s[t(2740)] === t(264) ? (s[t(2345)] ? x.data > s[t(1732)] : x[t(2743)] >= s[t(1732)]) && (e = this[t(1511)](x, e), Q(e, { code: Z[t(2393)], type: t(913), maximum: s[t(1732)], inclusive: s[t(2345)], message: s[t(2354)] }), r[t(367)]()) : s.kind === t(2401) ? x[t(2743)] % s[t(1732)] !== BigInt(0) && (e = this[t(1511)](x, e), Q(e, { code: Z[t(1401)], multipleOf: s[t(1732)], message: s[t(2354)] }), r[t(367)]()) : N0[t(1703)](s);
    return { status: r[t(1732)], value: x[t(2743)] };
  }
  [a(629)](x) {
    const t = a, n = this._getOrReturnCtx(x);
    return Q(n, { code: Z[t(802)], expected: t0[t(913)], received: n[t(1846)] }), h0;
  }
  [a(2567)](x, t) {
    const n = a;
    return this[n(2155)](n(458), x, !0, r0.toString(t));
  }
  gt(x, t) {
    const n = a;
    return this.setLimit(n(458), x, !1, r0[n(830)](t));
  }
  lte(x, t) {
    const n = a;
    return this.setLimit(n(264), x, !0, r0.toString(t));
  }
  lt(x, t) {
    return this[a(2155)]("max", x, !1, r0.toString(t));
  }
  setLimit(x, t, n, e) {
    const r = a;
    return new tx({ ...this[r(2036)], checks: [...this._def[r(2668)], { kind: x, value: t, inclusive: n, message: r0[r(830)](e) }] });
  }
  [a(1691)](x) {
    const t = a;
    return new tx({ ...this[t(2036)], checks: [...this._def[t(2668)], x] });
  }
  [a(499)](x) {
    const t = a;
    return this[t(1691)]({ kind: t(458), value: BigInt(0), inclusive: !1, message: r0.toString(x) });
  }
  [a(1260)](x) {
    const t = a;
    return this[t(1691)]({ kind: "max", value: BigInt(0), inclusive: !1, message: r0[t(830)](x) });
  }
  [a(723)](x) {
    const t = a;
    return this[t(1691)]({ kind: t(264), value: BigInt(0), inclusive: !0, message: r0[t(830)](x) });
  }
  [a(1858)](x) {
    const t = a;
    return this[t(1691)]({ kind: "min", value: BigInt(0), inclusive: !0, message: r0[t(830)](x) });
  }
  [a(2401)](x, t) {
    const n = a;
    return this[n(1691)]({ kind: n(2401), value: x, message: r0[n(830)](t) });
  }
  get minValue() {
    const x = a;
    let t = null;
    for (const n of this[x(2036)].checks)
      n[x(2740)] === x(458) && (t === null || n.value > t) && (t = n.value);
    return t;
  }
  get [a(1700)]() {
    const x = a;
    let t = null;
    for (const n of this[x(2036)][x(2668)])
      n[x(2740)] === x(264) && (t === null || n[x(1732)] < t) && (t = n[x(1732)]);
    return t;
  }
}
tx[a(1510)] = (o) => {
  const x = a;
  return new tx({ checks: [], typeName: p0.ZodBigInt, coerce: (o == null ? void 0 : o[x(461)]) ?? !1, ...v0(o) });
};
class $t extends R0 {
  [a(1901)](x) {
    const t = a;
    if (this._def[t(461)] && (x.data = !!x[t(2743)]), this[t(643)](x) !== t0[t(598)]) {
      const e = this[t(1511)](x);
      return Q(e, { code: Z[t(802)], expected: t0.boolean, received: e[t(1846)] }), h0;
    }
    return ae(x[t(2743)]);
  }
}
$t[a(1510)] = (o) => new $t({ typeName: p0.ZodBoolean, coerce: (o == null ? void 0 : o.coerce) || !1, ...v0(o) });
class bx extends R0 {
  [a(1901)](x) {
    const t = a;
    if (this._def[t(461)] && (x[t(2743)] = new Date(x[t(2743)])), this[t(643)](x) !== t0[t(2001)]) {
      const s = this[t(1511)](x);
      return Q(s, { code: Z.invalid_type, expected: t0.date, received: s[t(1846)] }), h0;
    }
    if (Number[t(1635)](x[t(2743)][t(1682)]())) {
      const s = this[t(1511)](x);
      return Q(s, { code: Z[t(1277)] }), h0;
    }
    const e = new ee();
    let r;
    for (const s of this[t(2036)].checks)
      s[t(2740)] === t(458) ? x[t(2743)][t(1682)]() < s[t(1732)] && (r = this[t(1511)](x, r), Q(r, { code: Z.too_small, message: s[t(2354)], inclusive: !0, exact: !1, minimum: s[t(1732)], type: t(2001) }), e[t(367)]()) : s[t(2740)] === t(264) ? x[t(2743)][t(1682)]() > s[t(1732)] && (r = this[t(1511)](x, r), Q(r, { code: Z.too_big, message: s[t(2354)], inclusive: !0, exact: !1, maximum: s[t(1732)], type: "date" }), e[t(367)]()) : N0.assertNever(s);
    return { status: e.value, value: new Date(x.data[t(1682)]()) };
  }
  _addCheck(x) {
    const t = a;
    return new bx({ ...this._def, checks: [...this[t(2036)][t(2668)], x] });
  }
  [a(458)](x, t) {
    const n = a;
    return this._addCheck({ kind: n(458), value: x[n(1682)](), message: r0[n(830)](t) });
  }
  max(x, t) {
    const n = a;
    return this[n(1691)]({ kind: n(264), value: x.getTime(), message: r0.toString(t) });
  }
  get minDate() {
    const x = a;
    let t = null;
    for (const n of this[x(2036)][x(2668)])
      n.kind === x(458) && (t === null || n.value > t) && (t = n.value);
    return t != null ? new Date(t) : null;
  }
  get [a(1906)]() {
    const x = a;
    let t = null;
    for (const n of this[x(2036)][x(2668)])
      n[x(2740)] === x(264) && (t === null || n[x(1732)] < t) && (t = n[x(1732)]);
    return t != null ? new Date(t) : null;
  }
}
bx[a(1510)] = (o) => {
  const x = a;
  return new bx({ checks: [], coerce: (o == null ? void 0 : o.coerce) || !1, typeName: p0[x(737)], ...v0(o) });
};
class Ca extends R0 {
  [a(1901)](x) {
    const t = a;
    if (this[t(643)](x) !== t0[t(1589)]) {
      const e = this[t(1511)](x);
      return Q(e, { code: Z[t(802)], expected: t0[t(1589)], received: e[t(1846)] }), h0;
    }
    return ae(x.data);
  }
}
Ca.create = (o) => {
  const x = a;
  return new Ca({ typeName: p0[x(381)], ...v0(o) });
};
class zt extends R0 {
  [a(1901)](x) {
    const t = a;
    if (this[t(643)](x) !== t0.undefined) {
      const e = this[t(1511)](x);
      return Q(e, { code: Z.invalid_type, expected: t0[t(455)], received: e.parsedType }), h0;
    }
    return ae(x[t(2743)]);
  }
}
zt[a(1510)] = (o) => {
  const x = a;
  return new zt({ typeName: p0[x(2735)], ...v0(o) });
};
class Ut extends R0 {
  [a(1901)](x) {
    const t = a;
    if (this._getType(x) !== t0[t(2645)]) {
      const e = this[t(1511)](x);
      return Q(e, { code: Z[t(802)], expected: t0.null, received: e.parsedType }), h0;
    }
    return ae(x[t(2743)]);
  }
}
Ut[a(1510)] = (o) => {
  const x = a;
  return new Ut({ typeName: p0[x(1482)], ...v0(o) });
};
class ax extends R0 {
  constructor() {
    const x = a;
    super(...arguments), this[x(378)] = !0;
  }
  [a(1901)](x) {
    return ae(x[a(2743)]);
  }
}
ax.create = (o) => {
  const x = a;
  return new ax({ typeName: p0[x(740)], ...v0(o) });
};
class Ht extends R0 {
  constructor() {
    const x = a;
    super(...arguments), this[x(342)] = !0;
  }
  [a(1901)](x) {
    return ae(x.data);
  }
}
function B(o, x) {
  const t = Fx();
  return B = function(n, e) {
    return n = n - 226, t[n];
  }, B(o, x);
}
Ht[a(1510)] = (o) => new Ht({ typeName: p0.ZodUnknown, ...v0(o) });
class Ie extends R0 {
  [a(1901)](x) {
    const t = a, n = this._getOrReturnCtx(x);
    return Q(n, { code: Z[t(802)], expected: t0[t(983)], received: n[t(1846)] }), h0;
  }
}
Ie.create = (o) => {
  const x = a;
  return new Ie({ typeName: p0[x(2204)], ...v0(o) });
};
class Vt extends R0 {
  [a(1901)](x) {
    const t = a;
    if (this[t(643)](x) !== t0.undefined) {
      const e = this[t(1511)](x);
      return Q(e, { code: Z[t(802)], expected: t0[t(1034)], received: e[t(1846)] }), h0;
    }
    return ae(x[t(2743)]);
  }
}
Vt.create = (o) => {
  const x = a;
  return new Vt({ typeName: p0[x(2700)], ...v0(o) });
};
class he extends R0 {
  [a(1901)](x) {
    const t = a, { ctx: n, status: e } = this._processInputParams(x), r = this._def;
    if (n.parsedType !== t0[t(1061)]) return Q(n, { code: Z[t(802)], expected: t0[t(1061)], received: n.parsedType }), h0;
    if (r[t(2435)] !== null) {
      const i = n[t(2743)].length > r[t(2435)][t(1732)], c = n[t(2743)][t(2463)] < r.exactLength[t(1732)];
      (i || c) && (Q(n, { code: i ? Z[t(2393)] : Z[t(1245)], minimum: c ? r.exactLength.value : void 0, maximum: i ? r[t(2435)][t(1732)] : void 0, type: "array", inclusive: !0, exact: !0, message: r[t(2435)][t(2354)] }), e[t(367)]());
    }
    if (r[t(1788)] !== null && n.data[t(2463)] < r[t(1788)][t(1732)] && (Q(n, { code: Z.too_small, minimum: r[t(1788)][t(1732)], type: t(1061), inclusive: !0, exact: !1, message: r[t(1788)][t(2354)] }), e[t(367)]()), r[t(512)] !== null && n[t(2743)].length > r[t(512)][t(1732)] && (Q(n, { code: Z[t(2393)], maximum: r.maxLength[t(1732)], type: "array", inclusive: !0, exact: !1, message: r[t(512)].message }), e[t(367)]()), n[t(1533)][t(523)]) return Promise.all([...n[t(2743)]][t(698)]((i, c) => {
      const u = t;
      return r[u(2197)][u(2679)](new pe(n, i, n[u(2501)], c));
    }))[t(2278)]((i) => ee[t(1668)](e, i));
    const s = [...n[t(2743)]][t(698)]((i, c) => {
      const u = t;
      return r.type[u(1027)](new pe(n, i, n[u(2501)], c));
    });
    return ee[t(1668)](e, s);
  }
  get [a(1348)]() {
    const x = a;
    return this._def[x(2197)];
  }
  min(x, t) {
    const n = a;
    return new he({ ...this[n(2036)], minLength: { value: x, message: r0.toString(t) } });
  }
  [a(264)](x, t) {
    return new he({ ...this._def, maxLength: { value: x, message: r0.toString(t) } });
  }
  [a(2463)](x, t) {
    const n = a;
    return new he({ ...this[n(2036)], exactLength: { value: x, message: r0[n(830)](t) } });
  }
  [a(1849)](x) {
    return this[a(458)](1, x);
  }
}
he[a(1510)] = (o, x) => {
  const t = a;
  return new he({ type: o, minLength: null, maxLength: null, exactLength: null, typeName: p0[t(2574)], ...v0(x) });
};
function Ve(o) {
  const x = a;
  if (o instanceof K0) {
    const t = {};
    for (const n in o[x(2002)]) {
      const e = o[x(2002)][n];
      t[n] = we.create(Ve(e));
    }
    return new K0({ ...o[x(2036)], shape: () => t });
  } else
    return o instanceof he ? new he({ ...o[x(2036)], type: Ve(o[x(1348)]) }) : o instanceof we ? we[x(1510)](Ve(o.unwrap())) : o instanceof Le ? Le[x(1510)](Ve(o[x(1636)]())) : o instanceof De ? De[x(1510)](o[x(1407)][x(698)]((t) => Ve(t))) : o;
}
class K0 extends R0 {
  constructor() {
    const x = a;
    super(...arguments), this[x(668)] = null, this[x(1369)] = this[x(2394)], this[x(2686)] = this[x(2417)];
  }
  [a(1067)]() {
    const x = a;
    if (this[x(668)] !== null) return this[x(668)];
    const t = this._def[x(2002)](), n = N0[x(1219)](t);
    return this[x(668)] = { shape: t, keys: n }, this[x(668)];
  }
  [a(1901)](x) {
    const t = a;
    if (this[t(643)](x) !== t0.object) {
      const d = this._getOrReturnCtx(x);
      return Q(d, { code: Z[t(802)], expected: t0.object, received: d[t(1846)] }), h0;
    }
    const { status: e, ctx: r } = this[t(1468)](x), { shape: s, keys: i } = this[t(1067)](), c = [];
    if (!(this._def[t(385)] instanceof Ie && this[t(2036)][t(609)] === t(552))) for (const d in r[t(2743)])
      !i[t(932)](d) && c.push(d);
    const u = [];
    for (const d of i) {
      const l = s[d], f = r[t(2743)][d];
      u[t(1851)]({ key: { status: t(707), value: d }, value: l[t(1901)](new pe(r, f, r.path, d)), alwaysSet: d in r[t(2743)] });
    }
    if (this[t(2036)][t(385)] instanceof Ie) {
      const d = this[t(2036)][t(609)];
      if (d === t(2394)) for (const l of c)
        u[t(1851)]({ key: { status: "valid", value: l }, value: { status: t(707), value: r[t(2743)][l] } });
      else if (d === t(355)) c[t(2463)] > 0 && (Q(r, { code: Z[t(1876)], keys: c }), e.dirty());
      else if (d !== t(552)) throw new Error(t(1111));
    } else {
      const d = this._def[t(385)];
      for (const l of c) {
        const f = r[t(2743)][l];
        u[t(1851)]({ key: { status: t(707), value: l }, value: d._parse(new pe(r, f, r[t(2501)], l)), alwaysSet: l in r.data });
      }
    }
    return r.common[t(523)] ? Promise[t(2251)]()[t(2278)](async () => {
      const d = t, l = [];
      for (const f of u) {
        const g = await f[d(1176)], h = await f[d(1732)];
        l[d(1851)]({ key: g, value: h, alwaysSet: f[d(1422)] });
      }
      return l;
    }).then((d) => ee[t(1311)](e, d)) : ee[t(1311)](e, u);
  }
  get [a(2002)]() {
    const x = a;
    return this[x(2036)][x(2002)]();
  }
  strict(x) {
    const t = a;
    return r0.errToObj, new K0({ ...this[t(2036)], unknownKeys: "strict", ...x !== void 0 ? { errorMap: (n, e) => {
      var i, c;
      const r = t, s = ((c = (i = this._def).errorMap) == null ? void 0 : c.call(i, n, e).message) ?? e.defaultError;
      return n[r(1469)] === r(1876) ? { message: r0.errToObj(x)[r(2354)] ?? s } : { message: s };
    } } : {} });
  }
  [a(552)]() {
    const x = a;
    return new K0({ ...this[x(2036)], unknownKeys: x(552) });
  }
  [a(2394)]() {
    const x = a;
    return new K0({ ...this[x(2036)], unknownKeys: "passthrough" });
  }
  extend(x) {
    const t = a;
    return new K0({ ...this._def, shape: () => ({ ...this[t(2036)][t(2002)](), ...x }) });
  }
  [a(2290)](x) {
    const t = a;
    return new K0({ unknownKeys: x[t(2036)][t(609)], catchall: x[t(2036)][t(385)], shape: () => ({ ...this[t(2036)][t(2002)](), ...x[t(2036)].shape() }), typeName: p0.ZodObject });
  }
  [a(1628)](x, t) {
    return this[a(2686)]({ [x]: t });
  }
  catchall(x) {
    const t = a;
    return new K0({ ...this[t(2036)], catchall: x });
  }
  pick(x) {
    const t = a, n = {};
    for (const e of N0[t(1219)](x))
      x[e] && this[t(2002)][e] && (n[e] = this[t(2002)][e]);
    return new K0({ ...this[t(2036)], shape: () => n });
  }
  omit(x) {
    const t = a, n = {};
    for (const e of N0[t(1219)](this[t(2002)]))
      !x[e] && (n[e] = this.shape[e]);
    return new K0({ ...this[t(2036)], shape: () => n });
  }
  [a(492)]() {
    return Ve(this);
  }
  [a(957)](x) {
    const t = a, n = {};
    for (const e of N0[t(1219)](this.shape)) {
      const r = this[t(2002)][e];
      x && !x[e] ? n[e] = r : n[e] = r[t(1833)]();
    }
    return new K0({ ...this[t(2036)], shape: () => n });
  }
  [a(1994)](x) {
    const t = a, n = {};
    for (const e of N0[t(1219)](this[t(2002)]))
      if (x && !x[e]) n[e] = this[t(2002)][e];
      else {
        let s = this.shape[e];
        for (; s instanceof we; )
          s = s[t(2036)][t(290)];
        n[e] = s;
      }
    return new K0({ ...this[t(2036)], shape: () => n });
  }
  keyof() {
    const x = a;
    return Un(N0[x(1219)](this[x(2002)]));
  }
}
K0[a(1510)] = (o, x) => {
  const t = a;
  return new K0({ shape: () => o, unknownKeys: t(552), catchall: Ie[t(1510)](), typeName: p0.ZodObject, ...v0(x) });
}, K0[a(518)] = (o, x) => {
  const t = a;
  return new K0({ shape: () => o, unknownKeys: t(355), catchall: Ie.create(), typeName: p0.ZodObject, ...v0(x) });
}, K0[a(2340)] = (o, x) => {
  const t = a;
  return new K0({ shape: o, unknownKeys: "strip", catchall: Ie[t(1510)](), typeName: p0.ZodObject, ...v0(x) });
};
class yx extends R0 {
  [a(1901)](x) {
    const t = a, { ctx: n } = this[t(1468)](x), e = this[t(2036)][t(1882)];
    function r(s) {
      const i = t;
      for (const u of s)
        if (u[i(2723)].status === "valid") return u[i(2723)];
      for (const u of s)
        if (u[i(2723)][i(2799)] === i(367)) return n.common[i(2289)][i(1851)](...u[i(2196)].common[i(2289)]), u[i(2723)];
      const c = s.map((u) => new Se(u[i(2196)][i(1533)].issues));
      return Q(n, { code: Z[i(249)], unionErrors: c }), h0;
    }
    if (n[t(1533)][t(523)]) return Promise.all(e[t(698)](async (s) => {
      const i = t, c = { ...n, common: { ...n[i(1533)], issues: [] }, parent: null };
      return { result: await s[i(2679)]({ data: n[i(2743)], path: n[i(2501)], parent: c }), ctx: c };
    }))[t(2278)](r);
    {
      let s;
      const i = [];
      for (const u of e) {
        const d = { ...n, common: { ...n[t(1533)], issues: [] }, parent: null }, l = u[t(1027)]({ data: n[t(2743)], path: n[t(2501)], parent: d });
        if (l[t(2799)] === t(707)) return l;
        l[t(2799)] === "dirty" && !s && (s = { result: l, ctx: d }), d[t(1533)][t(2289)][t(2463)] && i.push(d.common.issues);
      }
      if (s) return n[t(1533)][t(2289)][t(1851)](...s[t(2196)].common[t(2289)]), s[t(2723)];
      const c = i[t(698)]((u) => new Se(u));
      return Q(n, { code: Z[t(249)], unionErrors: c }), h0;
    }
  }
  get [a(1882)]() {
    return this[a(2036)].options;
  }
}
yx[a(1510)] = (o, x) => {
  const t = a;
  return new yx({ options: o, typeName: p0[t(1750)], ...v0(x) });
};
const be = (o) => {
  const x = a;
  return o instanceof Wt ? be(o[x(2782)]) : o instanceof Te ? be(o[x(290)]()) : o instanceof Sx ? [o[x(1732)]] : o instanceof je ? o[x(1882)] : o instanceof Bt ? N0[x(312)](o.enum) : o instanceof Px ? be(o[x(2036)][x(290)]) : o instanceof zt ? [void 0] : o instanceof Ut ? [null] : o instanceof we ? [void 0, ...be(o[x(1636)]())] : o instanceof Le ? [null, ...be(o[x(1636)]())] : o instanceof Hn || o instanceof Ix ? be(o[x(1636)]()) : o instanceof Ex ? be(o[x(2036)].innerType) : [];
};
class ta extends R0 {
  [a(1901)](x) {
    const t = a, { ctx: n } = this[t(1468)](x);
    if (n[t(1846)] !== t0[t(1985)]) return Q(n, { code: Z.invalid_type, expected: t0[t(1985)], received: n[t(1846)] }), h0;
    const e = this[t(2514)], r = n[t(2743)][e], s = this.optionsMap[t(635)](r);
    return s ? n[t(1533)].async ? s[t(2679)]({ data: n.data, path: n.path, parent: n }) : s[t(1027)]({ data: n.data, path: n[t(2501)], parent: n }) : (Q(n, { code: Z[t(565)], options: Array[t(1038)](this[t(1604)].keys()), path: [e] }), h0);
  }
  get discriminator() {
    const x = a;
    return this[x(2036)][x(2514)];
  }
  get options() {
    const x = a;
    return this[x(2036)][x(1882)];
  }
  get [a(1604)]() {
    const x = a;
    return this[x(2036)][x(1604)];
  }
  static [a(1510)](x, t, n) {
    const e = a, r = /* @__PURE__ */ new Map();
    for (const s of t) {
      const i = be(s[e(2002)][x]);
      if (!i[e(2463)]) throw new Error(e(2539) + x + "` could not be extracted from all schema options");
      for (const c of i) {
        if (r[e(1541)](c)) throw new Error(e(1410) + String(x) + e(2729) + String(c));
        r[e(1527)](c, s);
      }
    }
    return new ta({ typeName: p0[e(1549)], discriminator: x, options: t, optionsMap: r, ...v0(n) });
  }
}
function _t(o, x) {
  const t = a, n = Ee(o), e = Ee(x);
  if (o === x) return { valid: !0, data: o };
  if (n === t0[t(1985)] && e === t0[t(1985)]) {
    const r = N0[t(1219)](x), s = N0[t(1219)](o)[t(558)]((c) => r[t(1817)](c) !== -1), i = { ...o, ...x };
    for (const c of s) {
      const u = _t(o[c], x[c]);
      if (!u.valid) return { valid: !1 };
      i[c] = u[t(2743)];
    }
    return { valid: !0, data: i };
  } else if (n === t0[t(1061)] && e === t0[t(1061)]) {
    if (o[t(2463)] !== x[t(2463)]) return { valid: !1 };
    const r = [];
    for (let s = 0; s < o.length; s++) {
      const i = o[s], c = x[s], u = _t(i, c);
      if (!u[t(707)]) return { valid: !1 };
      r[t(1851)](u[t(2743)]);
    }
    return { valid: !0, data: r };
  } else return n === t0[t(2001)] && e === t0[t(2001)] && +o == +x ? { valid: !0, data: o } : { valid: !1 };
}
class vx extends R0 {
  [a(1901)](x) {
    const t = a, { status: n, ctx: e } = this._processInputParams(x), r = (s, i) => {
      const c = B;
      if (Ea(s) || Ea(i)) return h0;
      const u = _t(s.value, i[c(1732)]);
      return u[c(707)] ? ((Ia(s) || Ia(i)) && n[c(367)](), { status: n[c(1732)], value: u.data }) : (Q(e, { code: Z[c(1640)] }), h0);
    };
    return e.common[t(523)] ? Promise[t(912)]([this[t(2036)][t(471)][t(2679)]({ data: e[t(2743)], path: e[t(2501)], parent: e }), this[t(2036)][t(2709)]._parseAsync({ data: e[t(2743)], path: e[t(2501)], parent: e })]).then(([s, i]) => r(s, i)) : r(this._def[t(471)]._parseSync({ data: e[t(2743)], path: e[t(2501)], parent: e }), this[t(2036)].right[t(1027)]({ data: e[t(2743)], path: e.path, parent: e }));
  }
}
vx[a(1510)] = (o, x, t) => {
  const n = a;
  return new vx({ left: o, right: x, typeName: p0[n(2273)], ...v0(t) });
};
class De extends R0 {
  [a(1901)](x) {
    const t = a, { status: n, ctx: e } = this[t(1468)](x);
    if (e[t(1846)] !== t0[t(1061)]) return Q(e, { code: Z.invalid_type, expected: t0.array, received: e.parsedType }), h0;
    if (e[t(2743)][t(2463)] < this[t(2036)][t(1407)].length) return Q(e, { code: Z[t(1245)], minimum: this._def[t(1407)][t(2463)], inclusive: !0, exact: !1, type: t(1061) }), h0;
    !this._def[t(1158)] && e.data[t(2463)] > this._def.items.length && (Q(e, { code: Z[t(2393)], maximum: this[t(2036)].items[t(2463)], inclusive: !0, exact: !1, type: "array" }), n[t(367)]());
    const s = [...e[t(2743)]][t(698)]((i, c) => {
      const u = t, d = this._def[u(1407)][c] || this[u(2036)][u(1158)];
      return d ? d[u(1901)](new pe(e, i, e[u(2501)], c)) : null;
    })[t(558)]((i) => !!i);
    return e[t(1533)][t(523)] ? Promise.all(s)[t(2278)]((i) => ee.mergeArray(n, i)) : ee[t(1668)](n, s);
  }
  get items() {
    const x = a;
    return this[x(2036)][x(1407)];
  }
  [a(1158)](x) {
    const t = a;
    return new De({ ...this[t(2036)], rest: x });
  }
}
De[a(1510)] = (o, x) => {
  const t = a;
  if (!Array.isArray(o)) throw new Error("You must pass an array of schemas to z.tuple([ ... ])");
  return new De({ items: o, typeName: p0[t(2699)], rest: null, ...v0(x) });
};
class wx extends R0 {
  get [a(1594)]() {
    const x = a;
    return this[x(2036)][x(431)];
  }
  get [a(2596)]() {
    return this[a(2036)].valueType;
  }
  [a(1901)](x) {
    const t = a, { status: n, ctx: e } = this[t(1468)](x);
    if (e[t(1846)] !== t0.object) return Q(e, { code: Z[t(802)], expected: t0[t(1985)], received: e[t(1846)] }), h0;
    const r = [], s = this[t(2036)][t(431)], i = this[t(2036)][t(2701)];
    for (const c in e[t(2743)])
      r[t(1851)]({ key: s[t(1901)](new pe(e, c, e[t(2501)], c)), value: i[t(1901)](new pe(e, e[t(2743)][c], e[t(2501)], c)), alwaysSet: c in e[t(2743)] });
    return e.common.async ? ee.mergeObjectAsync(n, r) : ee.mergeObjectSync(n, r);
  }
  get [a(1348)]() {
    const x = a;
    return this[x(2036)][x(2701)];
  }
  static [a(1510)](x, t, n) {
    const e = a;
    return t instanceof R0 ? new wx({ keyType: x, valueType: t, typeName: p0.ZodRecord, ...v0(n) }) : new wx({ keyType: ve[e(1510)](), valueType: x, typeName: p0[e(2381)], ...v0(t) });
  }
}
class Fa extends R0 {
  get keySchema() {
    const x = a;
    return this[x(2036)][x(431)];
  }
  get [a(2596)]() {
    const x = a;
    return this[x(2036)][x(2701)];
  }
  _parse(x) {
    const t = a, { status: n, ctx: e } = this[t(1468)](x);
    if (e[t(1846)] !== t0[t(698)]) return Q(e, { code: Z[t(802)], expected: t0[t(698)], received: e[t(1846)] }), h0;
    const r = this[t(2036)].keyType, s = this[t(2036)][t(2701)], i = [...e.data[t(1144)]()][t(698)](([c, u], d) => {
      const l = t;
      return { key: r[l(1901)](new pe(e, c, e[l(2501)], [d, "key"])), value: s[l(1901)](new pe(e, u, e[l(2501)], [d, l(1732)])) };
    });
    if (e.common[t(523)]) {
      const c = /* @__PURE__ */ new Map();
      return Promise[t(2251)]().then(async () => {
        const u = t;
        for (const d of i) {
          const l = await d[u(1176)], f = await d.value;
          if (l[u(2799)] === u(1272) || f[u(2799)] === u(1272)) return h0;
          (l.status === u(367) || f[u(2799)] === u(367)) && n[u(367)](), c.set(l[u(1732)], f[u(1732)]);
        }
        return { status: n.value, value: c };
      });
    } else {
      const c = /* @__PURE__ */ new Map();
      for (const u of i) {
        const d = u[t(1176)], l = u.value;
        if (d[t(2799)] === t(1272) || l[t(2799)] === t(1272)) return h0;
        (d[t(2799)] === "dirty" || l.status === t(367)) && n[t(367)](), c[t(1527)](d.value, l[t(1732)]);
      }
      return { status: n[t(1732)], value: c };
    }
  }
}
Fa.create = (o, x, t) => {
  const n = a;
  return new Fa({ valueType: x, keyType: o, typeName: p0[n(335)], ...v0(t) });
};
class rx extends R0 {
  [a(1901)](x) {
    const t = a, { status: n, ctx: e } = this._processInputParams(x);
    if (e[t(1846)] !== t0[t(1527)]) return Q(e, { code: Z[t(802)], expected: t0.set, received: e[t(1846)] }), h0;
    const r = this[t(2036)];
    r[t(1196)] !== null && e[t(2743)][t(2428)] < r[t(1196)][t(1732)] && (Q(e, { code: Z[t(1245)], minimum: r[t(1196)][t(1732)], type: t(1527), inclusive: !0, exact: !1, message: r.minSize[t(2354)] }), n.dirty()), r[t(744)] !== null && e[t(2743)][t(2428)] > r[t(744)][t(1732)] && (Q(e, { code: Z.too_big, maximum: r[t(744)][t(1732)], type: t(1527), inclusive: !0, exact: !1, message: r.maxSize.message }), n[t(367)]());
    const s = this._def[t(2701)];
    function i(u) {
      const d = t, l = /* @__PURE__ */ new Set();
      for (const f of u) {
        if (f[d(2799)] === "aborted") return h0;
        f[d(2799)] === d(367) && n[d(367)](), l[d(2736)](f.value);
      }
      return { status: n.value, value: l };
    }
    const c = [...e[t(2743)].values()][t(698)]((u, d) => s[t(1901)](new pe(e, u, e[t(2501)], d)));
    return e.common.async ? Promise[t(912)](c).then((u) => i(u)) : i(c);
  }
  [a(458)](x, t) {
    const n = a;
    return new rx({ ...this[n(2036)], minSize: { value: x, message: r0.toString(t) } });
  }
  [a(264)](x, t) {
    const n = a;
    return new rx({ ...this[n(2036)], maxSize: { value: x, message: r0[n(830)](t) } });
  }
  [a(2428)](x, t) {
    return this[a(458)](x, t).max(x, t);
  }
  [a(1849)](x) {
    return this.min(1, x);
  }
}
rx[a(1510)] = (o, x) => {
  const t = a;
  return new rx({ valueType: o, minSize: null, maxSize: null, typeName: p0[t(2516)], ...v0(x) });
};
class Wt extends R0 {
  get [a(2782)]() {
    const x = a;
    return this._def[x(2511)]();
  }
  _parse(x) {
    const t = a, { ctx: n } = this[t(1468)](x);
    return this._def[t(2511)]()[t(1901)]({ data: n[t(2743)], path: n[t(2501)], parent: n });
  }
}
Wt[a(1510)] = (o, x) => {
  const t = a;
  return new Wt({ getter: o, typeName: p0[t(1464)], ...v0(x) });
};
class Sx extends R0 {
  [a(1901)](x) {
    const t = a;
    if (x[t(2743)] !== this[t(2036)][t(1732)]) {
      const n = this[t(1511)](x);
      return Q(n, { received: n.data, code: Z[t(1764)], expected: this[t(2036)][t(1732)] }), h0;
    }
    return { status: t(707), value: x[t(2743)] };
  }
  get [a(1732)]() {
    return this[a(2036)].value;
  }
}
Sx.create = (o, x) => {
  const t = a;
  return new Sx({ value: o, typeName: p0[t(1377)], ...v0(x) });
};
function Un(o, x) {
  const t = a;
  return new je({ values: o, typeName: p0[t(2186)], ...v0(x) });
}
class je extends R0 {
  [a(1901)](x) {
    const t = a;
    if (typeof x[t(2743)] !== t(1516)) {
      const n = this[t(1511)](x), e = this[t(2036)][t(2010)];
      return Q(n, { expected: N0[t(816)](e), received: n.parsedType, code: Z[t(802)] }), h0;
    }
    if (!this[t(1916)] && (this._cache = new Set(this[t(2036)].values)), !this._cache.has(x.data)) {
      const n = this[t(1511)](x), e = this[t(2036)][t(2010)];
      return Q(n, { received: n.data, code: Z[t(2043)], options: e }), h0;
    }
    return ae(x[t(2743)]);
  }
  get [a(1882)]() {
    const x = a;
    return this._def[x(2010)];
  }
  get enum() {
    const x = a, t = {};
    for (const n of this[x(2036)][x(2010)])
      t[n] = n;
    return t;
  }
  get [a(2529)]() {
    const x = a, t = {};
    for (const n of this[x(2036)][x(2010)])
      t[n] = n;
    return t;
  }
  get [a(2752)]() {
    const x = a, t = {};
    for (const n of this[x(2036)][x(2010)])
      t[n] = n;
    return t;
  }
  [a(970)](x, t = this._def) {
    const n = a;
    return je[n(1510)](x, { ...this[n(2036)], ...t });
  }
  [a(448)](x, t = this._def) {
    const n = a;
    return je[n(1510)](this[n(1882)][n(558)]((e) => !x.includes(e)), { ...this[n(2036)], ...t });
  }
}
je[a(1510)] = Un;
class Bt extends R0 {
  [a(1901)](x) {
    const t = a, n = N0.getValidEnumValues(this._def[t(2010)]), e = this._getOrReturnCtx(x);
    if (e[t(1846)] !== t0[t(1516)] && e[t(1846)] !== t0.number) {
      const r = N0[t(312)](n);
      return Q(e, { expected: N0[t(816)](r), received: e.parsedType, code: Z.invalid_type }), h0;
    }
    if (!this[t(1916)] && (this[t(1916)] = new Set(N0[t(2634)](this[t(2036)].values))), !this[t(1916)].has(x[t(2743)])) {
      const r = N0[t(312)](n);
      return Q(e, { received: e[t(2743)], code: Z[t(2043)], options: r }), h0;
    }
    return ae(x[t(2743)]);
  }
  get [a(2579)]() {
    const x = a;
    return this._def[x(2010)];
  }
}
Bt[a(1510)] = (o, x) => {
  const t = a;
  return new Bt({ values: o, typeName: p0[t(2467)], ...v0(x) });
};
class kx extends R0 {
  unwrap() {
    const x = a;
    return this._def[x(2197)];
  }
  [a(1901)](x) {
    const t = a, { ctx: n } = this[t(1468)](x);
    if (n[t(1846)] !== t0[t(2182)] && n[t(1533)].async === !1) return Q(n, { code: Z[t(802)], expected: t0[t(2182)], received: n.parsedType }), h0;
    const e = n[t(1846)] === t0.promise ? n.data : Promise[t(2251)](n.data);
    return ae(e[t(2278)]((r) => {
      const s = t;
      return this[s(2036)][s(2197)][s(1372)](r, { path: n[s(2501)], errorMap: n[s(1533)].contextualErrorMap });
    }));
  }
}
kx[a(1510)] = (o, x) => {
  const t = a;
  return new kx({ type: o, typeName: p0[t(1864)], ...v0(x) });
};
class Te extends R0 {
  [a(290)]() {
    return this[a(2036)].schema;
  }
  [a(2416)]() {
    const x = a;
    return this[x(2036)][x(2782)][x(2036)][x(2789)] === p0[x(2286)] ? this[x(2036)][x(2782)].sourceType() : this._def[x(2782)];
  }
  [a(1901)](x) {
    const t = a, { status: n, ctx: e } = this[t(1468)](x), r = this[t(2036)].effect || null, s = { addIssue: (i) => {
      const c = t;
      Q(e, i), i.fatal ? n.abort() : n[c(367)]();
    }, get path() {
      return e.path;
    } };
    if (s[t(2553)] = s[t(2553)][t(1926)](s), r.type === t(526)) {
      const i = r.transform(e[t(2743)], s);
      if (e[t(1533)][t(523)]) return Promise[t(2251)](i)[t(2278)](async (c) => {
        const u = t;
        if (n[u(1732)] === u(1272)) return h0;
        const d = await this._def[u(2782)][u(2679)]({ data: c, path: e[u(2501)], parent: e });
        return d[u(2799)] === u(1272) ? h0 : d[u(2799)] === "dirty" || n.value === u(367) ? Qe(d[u(1732)]) : d;
      });
      {
        if (n[t(1732)] === t(1272)) return h0;
        const c = this[t(2036)].schema[t(1027)]({ data: i, path: e[t(2501)], parent: e });
        return c[t(2799)] === t(1272) ? h0 : c[t(2799)] === t(367) ? Qe(c.value) : n[t(1732)] === t(367) ? Qe(c[t(1732)]) : c;
      }
    }
    if (r[t(2197)] === t(434)) {
      const i = (c) => {
        const u = t, d = r[u(434)](c, s);
        if (e[u(1533)].async) return Promise[u(2251)](d);
        if (d instanceof Promise) throw new Error(u(1564));
        return c;
      };
      if (e.common[t(523)] === !1) {
        const c = this._def.schema._parseSync({ data: e[t(2743)], path: e[t(2501)], parent: e });
        return c[t(2799)] === t(1272) ? h0 : (c[t(2799)] === t(367) && n[t(367)](), i(c.value), { status: n[t(1732)], value: c[t(1732)] });
      } else return this._def[t(2782)][t(2679)]({ data: e[t(2743)], path: e[t(2501)], parent: e })[t(2278)]((c) => {
        const u = t;
        return c.status === u(1272) ? h0 : (c[u(2799)] === u(367) && n[u(367)](), i(c.value)[u(2278)](() => {
          const d = u;
          return { status: n[d(1732)], value: c[d(1732)] };
        }));
      });
    }
    if (r.type === t(365))
      if (e[t(1533)][t(523)] === !1) {
        const i = this._def.schema[t(1027)]({ data: e[t(2743)], path: e[t(2501)], parent: e });
        if (!_e(i)) return h0;
        const c = r[t(365)](i[t(1732)], s);
        if (c instanceof Promise) throw new Error(t(1514));
        return { status: n[t(1732)], value: c };
      } else return this[t(2036)][t(2782)][t(2679)]({ data: e[t(2743)], path: e.path, parent: e })[t(2278)]((i) => {
        const c = t;
        return _e(i) ? Promise[c(2251)](r.transform(i.value, s))[c(2278)]((u) => ({ status: n[c(1732)], value: u })) : h0;
      });
    N0.assertNever(r);
  }
}
Te[a(1510)] = (o, x, t) => {
  const n = a;
  return new Te({ schema: o, typeName: p0[n(2286)], effect: x, ...v0(t) });
}, Te[a(1627)] = (o, x, t) => {
  const n = a;
  return new Te({ schema: x, effect: { type: n(526), transform: o }, typeName: p0[n(2286)], ...v0(t) });
};
class we extends R0 {
  _parse(x) {
    const t = a;
    return this[t(643)](x) === t0[t(455)] ? ae(void 0) : this[t(2036)].innerType[t(1901)](x);
  }
  [a(1636)]() {
    const x = a;
    return this[x(2036)][x(290)];
  }
}
we[a(1510)] = (o, x) => {
  const t = a;
  return new we({ innerType: o, typeName: p0[t(2771)], ...v0(x) });
};
class Le extends R0 {
  [a(1901)](x) {
    const t = a;
    return this[t(643)](x) === t0[t(2645)] ? ae(null) : this[t(2036)][t(290)][t(1901)](x);
  }
  unwrap() {
    const x = a;
    return this[x(2036)][x(290)];
  }
}
Le.create = (o, x) => {
  const t = a;
  return new Le({ innerType: o, typeName: p0[t(2260)], ...v0(x) });
};
class Px extends R0 {
  [a(1901)](x) {
    const t = a, { ctx: n } = this[t(1468)](x);
    let e = n[t(2743)];
    return n.parsedType === t0[t(455)] && (e = this._def[t(1261)]()), this._def[t(290)][t(1901)]({ data: e, path: n[t(2501)], parent: n });
  }
  removeDefault() {
    return this[a(2036)].innerType;
  }
}
Px[a(1510)] = (o, x) => {
  const t = a;
  return new Px({ innerType: o, typeName: p0[t(1085)], defaultValue: typeof x.default == "function" ? x.default : () => x[t(779)], ...v0(x) });
};
class Ex extends R0 {
  [a(1901)](x) {
    const t = a, { ctx: n } = this[t(1468)](x), e = { ...n, common: { ...n[t(1533)], issues: [] } }, r = this[t(2036)].innerType[t(1901)]({ data: e.data, path: e[t(2501)], parent: { ...e } });
    return gx(r) ? r[t(2278)]((s) => {
      const i = t;
      return { status: "valid", value: s[i(2799)] === i(707) ? s.value : this[i(2036)][i(1380)]({ get error() {
        const c = i;
        return new Se(e[c(1533)].issues);
      }, input: e.data }) };
    }) : { status: t(707), value: r.status === t(707) ? r[t(1732)] : this[t(2036)][t(1380)]({ get error() {
      const s = t;
      return new Se(e[s(1533)][s(2289)]);
    }, input: e[t(2743)] }) };
  }
  [a(478)]() {
    const x = a;
    return this[x(2036)][x(290)];
  }
}
Ex[a(1510)] = (o, x) => {
  const t = a;
  return new Ex({ innerType: o, typeName: p0[t(1574)], catchValue: typeof x.catch === t(2176) ? x[t(580)] : () => x[t(580)], ...v0(x) });
};
class Na extends R0 {
  [a(1901)](x) {
    const t = a;
    if (this[t(643)](x) !== t0[t(509)]) {
      const e = this[t(1511)](x);
      return Q(e, { code: Z[t(802)], expected: t0[t(509)], received: e.parsedType }), h0;
    }
    return { status: t(707), value: x[t(2743)] };
  }
}
Na.create = (o) => new Na({ typeName: p0.ZodNaN, ...v0(o) });
class Hn extends R0 {
  _parse(x) {
    const t = a, { ctx: n } = this[t(1468)](x), e = n[t(2743)];
    return this[t(2036)][t(2197)][t(1901)]({ data: e, path: n.path, parent: n });
  }
  unwrap() {
    const x = a;
    return this[x(2036)][x(2197)];
  }
}
class aa extends R0 {
  [a(1901)](x) {
    const t = a, { status: n, ctx: e } = this[t(1468)](x);
    if (e.common[t(523)])
      return (async () => {
        const s = t, i = await this[s(2036)].in._parseAsync({ data: e[s(2743)], path: e.path, parent: e });
        return i[s(2799)] === s(1272) ? h0 : i[s(2799)] === s(367) ? (n.dirty(), Qe(i[s(1732)])) : this[s(2036)].out[s(2679)]({ data: i[s(1732)], path: e[s(2501)], parent: e });
      })();
    {
      const r = this._def.in[t(1027)]({ data: e.data, path: e[t(2501)], parent: e });
      return r[t(2799)] === t(1272) ? h0 : r[t(2799)] === "dirty" ? (n[t(367)](), { status: "dirty", value: r[t(1732)] }) : this._def[t(2678)]._parseSync({ data: r[t(1732)], path: e[t(2501)], parent: e });
    }
  }
  static [a(1510)](x, t) {
    const n = a;
    return new aa({ in: x, out: t, typeName: p0[n(911)] });
  }
}
class Ix extends R0 {
  _parse(x) {
    const t = a, n = this._def.innerType[t(1901)](x), e = (r) => {
      const s = t;
      return _e(r) && (r.value = Object[s(2536)](r.value)), r;
    };
    return gx(n) ? n[t(2278)]((r) => e(r)) : e(n);
  }
  unwrap() {
    const x = a;
    return this[x(2036)][x(290)];
  }
}
Ix[a(1510)] = (o, x) => {
  const t = a;
  return new Ix({ innerType: o, typeName: p0[t(867)], ...v0(x) });
};
function qa(o, x) {
  const t = a, n = typeof o === t(2176) ? o(x) : typeof o === t(1516) ? { message: o } : o;
  return typeof n == "string" ? { message: n } : n;
}
function fo(o, x = {}, t) {
  const n = a;
  return o ? ax.create()[n(1124)]((e, r) => {
    const s = n, i = o(e);
    if (i instanceof Promise) return i[s(2278)]((c) => {
      const u = s;
      if (!c) {
        const d = qa(x, e), l = d[u(1970)] ?? t ?? !0;
        r[u(2553)]({ code: u(1656), ...d, fatal: l });
      }
    });
    if (!i) {
      const c = qa(x, e), u = c[s(1970)] ?? t ?? !0;
      r[s(2553)]({ code: s(1656), ...c, fatal: u });
    }
  }) : ax.create();
}
var p0;
(function(o) {
  const x = a;
  o[x(2433)] = x(2433), o[x(2581)] = "ZodNumber", o[x(692)] = x(692), o[x(666)] = x(666), o[x(2016)] = x(2016), o.ZodDate = x(737), o[x(381)] = x(381), o.ZodUndefined = "ZodUndefined", o[x(1482)] = x(1482), o.ZodAny = x(740), o[x(345)] = "ZodUnknown", o[x(2204)] = "ZodNever", o[x(2700)] = x(2700), o[x(2574)] = x(2574), o[x(929)] = x(929), o.ZodUnion = x(1750), o[x(1549)] = x(1549), o.ZodIntersection = x(2273), o[x(2699)] = x(2699), o[x(2381)] = x(2381), o[x(335)] = x(335), o.ZodSet = x(2516), o[x(1614)] = x(1614), o[x(1464)] = x(1464), o[x(1377)] = x(1377), o.ZodEnum = "ZodEnum", o.ZodEffects = x(2286), o[x(2467)] = "ZodNativeEnum", o.ZodOptional = x(2771), o.ZodNullable = x(2260), o[x(1085)] = x(1085), o[x(1574)] = "ZodCatch", o[x(1864)] = x(1864), o[x(2531)] = x(2531), o[x(911)] = x(911), o[x(867)] = x(867);
})(p0 || (p0 = {}));
const zx = (o, x = { message: a(1206) + o[a(2796)] }) => fo((t) => t instanceof o, x), y = ve.create, K = We.create, e0 = $t[a(1510)], T0 = ax[a(1510)], Me = Ht[a(1510)];
Ie[a(1510)];
const Ux = Vt[a(1510)], y0 = he.create, k = K0[a(1510)], B0 = yx[a(1510)], Vn = ta[a(1510)];
vx[a(1510)], De[a(1510)];
const z0 = wx[a(1510)], x0 = Sx[a(1510)], E0 = je[a(1510)];
kx.create;
const W = we[a(1510)];
Le[a(1510)];
var Xr;
class ho {
  constructor(x, t) {
    m0(this, Xr);
    m0(this, "nodeId");
    const n = a;
    this[n(1908)] = x, this[n(1478)] = t;
  }
  get [(Xr = a(1908), a(1766))]() {
    const x = a, t = this[x(1908)][x(2131)](this[x(1478)]);
    if (!t) throw new Error("No store found for node " + this[x(1478)]);
    return t;
  }
  get [a(944)]() {
    const x = a, t = this[x(1908)].getDefinition()[x(1328)](this.nodeId);
    if (!t) throw new Error(x(2470) + this.nodeId);
    return new Proxy({}, { get: (e, r) => {
      const s = x;
      if (typeof r !== s(1516)) return;
      const i = t[s(944)][r], c = r[s(2353)](s(2269));
      if (!i && !c) throw new Error(s(2684) + r + " not found for node " + this[s(1478)]);
      return async (u, d) => {
        const l = s, f = this[l(2625)]();
        if (!f) throw new Error("No connection available for node " + this[l(1478)]);
        const { transport: g, path: h } = f, m = this[l(1908)][l(2317)]();
        if (!(i != null && i[l(1513)])) {
          const S = T0();
          let E;
          if (h[l(2463)] === 2) E = await g[l(276)]({ method: "sdppp/directRequest", params: { action: r, data: u, sourceNodeId: m } }, S);
          else try {
            E = await g[l(276)]({ method: "sdppp/directRequest", params: { action: l(662), data: { targetNodeId: this[l(1478)], targetAction: r, targetData: u, forwardPath: h[l(600)](1) }, sourceNodeId: m } }, S);
          } catch (A) {
            throw console.error("Error in direct request " + r + ":", A), console[l(443)]({ targetNodeId: this[l(1478)], targetAction: r, targetData: u, forwardPath: h[l(600)](1) }), A;
          }
          return E;
        }
        let v;
        return h[l(2463)] === 2 ? v = g[l(950)]({ action: r, data: u, sourceNodeId: m }, i[l(271)], d) : v = g[l(950)]({ action: l(662), data: { targetNodeId: this[l(1478)], targetAction: r, targetData: u, forwardPath: h[l(600)](1) }, sourceNodeId: m }, i.responseSchema, d), v;
      };
    } });
  }
  [a(2625)]() {
    const x = a;
    return this[x(1908)][x(632)](this[x(1478)]);
  }
}
var Yr, en;
class _n {
  constructor(x) {
    m0(this, en);
    m0(this, "actionManager");
    m0(this, Yr);
    const t = a;
    this.graphInstance = x, this[t(472)] = x.actionManager, this[t(2095)] = x[t(2095)];
  }
  [(en = a(1908), Yr = a(2095), a(1547))]({ store: x, storeName: t, onStateUpdate: n, requestInitialState: e }) {
    const r = a;
    this[r(2095)][r(2133)](r(550) + t, (s) => {
      const i = r;
      try {
        s.sourceNodeId !== this.graphInstance[i(2317)]() && n(s.stateUpdate);
      } catch (c) {
        console[i(443)](i(494) + t + ":", c);
      }
    });
  }
  [a(2359)]({ store: x, storeName: t, sendStateUpdate: n, onInitialStateRequested: e }) {
    const r = a, s = this[r(1908)][r(2317)](), i = async (d, l = !1) => {
      const f = r;
      if (this.isTransportReady()) try {
        await this[f(2095)].broadcast("store:update:" + t, { storeName: t, sourceNodeId: s, stateUpdate: d, isInitialState: l });
      } catch (h) {
        console.error(f(706) + t + ":", h);
      }
    }, c = x[r(2379)]((d) => {
      i(d, !1);
    });
    e(() => {
      i(x[r(1313)](), !0);
    });
    const u = r(1591) + t;
    return this[r(472)].implementInternalAction(u, async () => {
      const d = r, l = x[d(1313)]();
      return await i(l, !0), { success: !0 };
    }), this.broadcastManager.registerHandler("__connection_established", async (d) => {
      const l = r;
      try {
        (d[l(556)] === s || d.fromNode === s) && await i(x[l(1313)](), !0);
      } catch {
      }
    }), () => {
      var l;
      const d = r;
      c(), (l = this[d(472)].actionHandlers) == null || l[d(1707)](u);
    };
  }
  isTransportReady() {
    var t;
    const x = a;
    try {
      const n = this[x(1908)][x(799)], e = n && n[x(1195)]() > 0, r = ((t = this[x(2095)].mountedEndpoints) == null ? void 0 : t[x(2428)]) > 0;
      return e || r;
    } catch {
      return !!this[x(2095)];
    }
  }
  async [a(1109)](x, t) {
    const n = a, e = this[n(1908)].getCurrentNodeId();
    if (this[n(868)]()) try {
      await this.broadcastManager[n(2666)](n(550) + t, { storeName: t, sourceNodeId: e, stateUpdate: x[n(1313)](), isInitialState: !0 });
    } catch {
    }
  }
}
function po({ graphInstance: o, store: x, name: t }) {
  const n = new _n(o), e = (s) => {
    const i = B, c = x[i(1313)](), u = { ...c, ...s };
    x[i(2490)](u);
  }, r = async () => {
    const s = B, i = s(1591) + t;
    try {
      const c = o[s(1328)](t);
      c && c.actions && c.actions[i] && await c.actions[i]();
    } catch (c) {
      console.warn(s(669) + t + ":", c);
    }
  };
  n.initializeConsumer({ store: x, storeName: t, onStateUpdate: e, requestInitialState: r });
}
function mo({ graphInstance: o, store: x, name: t }) {
  const n = a, e = new _n(o), r = async (i) => {
  }, s = (i) => {
  };
  return e[n(2359)]({ store: x, storeName: t, sendStateUpdate: r, onInitialStateRequested: s });
}
var xn, tn, an;
class go {
  constructor(x) {
    m0(this, an, /* @__PURE__ */ new Map());
    m0(this, tn, /* @__PURE__ */ new Map());
    m0(this, xn, /* @__PURE__ */ new Set());
    m0(this, "currentNodeId");
    const t = a;
    this[t(1359)] = x;
  }
  [(an = a(2151), tn = a(736), xn = a(2582), a(1621))](x) {
    return (t) => {
      const n = B;
      if (t && t[n(713)] === this[n(1359)]) return;
      const e = this[n(2151)].get(x);
      if (e) {
        const { __origin: r, forwarded: s, ...i } = t || {};
        for (const c of e)
          try {
            c(i);
          } catch (u) {
            console[n(443)](n(1865) + x + ":", u);
          }
      }
      !t.forwarded && this[n(2303)](x, t);
    };
  }
  async forwardBroadcast(x, t) {
    const n = a;
    try {
      const e = { ...t, forwarded: !0 }, r = [...Array[n(1038)](this.transports.values()), ...Array.from(this.mountedTransports)], s = r[n(698)]((i) => {
        const c = n;
        return i[c(1006)]({ method: c(2064), params: { messageType: x, message: e } })[c(580)]((u) => {
          console[c(443)]("[BroadcastManager] Error forwarding " + x + ":", u);
        });
      });
      await Promise[n(912)](s);
    } catch (e) {
      console[n(443)]("[BroadcastManager] Error forwarding broadcast:", e);
    }
  }
  [a(2133)](x, t) {
    const n = a;
    !this.broadcastHandlers[n(1541)](x) && this[n(2151)].set(x, /* @__PURE__ */ new Set()), this.broadcastHandlers[n(635)](x).add(t);
  }
  [a(2222)](x) {
    this[a(1475)](x);
  }
  setupGeneralBroadcastHandler(x) {
    const t = a, n = k({ method: x0("sdppp/broadcast"), params: k({ messageType: y(), message: T0() }) });
    x[t(2169)](n, async (e) => {
      const r = t, s = e[r(1537)][r(1897)];
      this.createGlobalDispatcherForType(s)(e[r(1537)][r(2354)]);
    });
  }
  addMiddleware(x, t) {
    const n = a;
    this[n(736)][n(1527)](x, t), this[n(2222)](t);
  }
  [a(671)](x) {
    const t = a;
    this[t(736)][t(1707)](x);
  }
  async [a(2666)](x, t) {
    const n = a, e = [...Array[n(1038)](this[n(736)][n(2010)]()), ...Array[n(1038)](this[n(2582)])], r = e.map((s) => s[n(1006)]({ method: "sdppp/broadcast", params: { messageType: x, message: t } }));
    await Promise[n(912)](r);
  }
  [a(2206)](x) {
    const t = a;
    this[t(2582)][t(2736)](x), this[t(2222)](x);
  }
  getHandlerTypes() {
    const x = a;
    return Array[x(1038)](this.broadcastHandlers[x(1448)]());
  }
  [a(1017)]() {
    const x = a;
    this[x(2151)][x(1017)](), this[x(736)].clear(), this[x(2582)][x(1017)]();
  }
}
var rn, nn, sn, on;
class bo {
  constructor(x, t, n) {
    m0(this, on, /* @__PURE__ */ new Map());
    m0(this, sn);
    m0(this, nn);
    m0(this, rn);
    const e = a;
    this.definition = x, this[e(1359)] = t, this[e(1702)] = n;
  }
  [(on = a(2693), sn = a(1620), nn = a(1359), rn = a(1702), a(1870))](x, t) {
    const n = a, e = this[n(1620)][n(1328)](this[n(1359)]);
    if (!e) throw new Error("Node definition not found for " + this[n(1359)]);
    const r = e.actions[x];
    if (!r) throw new Error("Action " + String(x) + n(2187) + this[n(1359)]);
    this[n(2292)](x, t, r), this[n(2693)][n(1527)](x, t);
  }
  [a(2292)](x, t, n) {
    n[a(1513)];
  }
  [a(835)](x, t) {
    this.actionHandlers.set(x, t);
  }
  mountTo(x) {
    const t = a;
    for (const [n, e] of this.actionHandlers) {
      const r = this[t(1620)][t(1328)](this[t(1359)]), s = r == null ? void 0 : r[t(944)][n];
      if (n[t(2353)]("__internal_") ? !1 : (s == null ? void 0 : s[t(1513)]) === !0) {
        const u = k({ action: x0(n) });
        x[t(1714)](u, async function* (d, l, f) {
          const g = t, h = d.data || d, m = e(h, l, f);
          if (m && typeof m == "object" && Symbol[g(451)] in m) for await (const v of m)
            yield v === void 0 ? {} : v;
          else {
            const v = await m;
            yield v === void 0 ? {} : v;
          }
        });
      }
    }
    this.registerProxyForwardHandler(x), this.registerDirectRequestHandlerGeneric(x);
  }
  [a(1972)](x) {
    const t = a, n = k({ action: x0(t(662)) }), e = this;
    x[t(1714)](n, async function* (r, s, i) {
      const c = t, u = r[c(2743)] || r, { targetNodeId: d, targetAction: l, targetData: f, forwardPath: g } = u;
      if (!g || g[c(2463)] === 0) throw new Error(c(576));
      const h = g[0], m = g.slice(1);
      if (m[c(2463)] === 0 && h === e[c(1359)]) {
        const v = e[c(2693)][c(635)](l);
        if (!v) throw new Error(c(2684) + l + c(2432) + e[c(1359)]);
        const S = v(f, s, i);
        if (S && typeof S === c(1985) && Symbol[c(451)] in S) for await (const E of S)
          yield E === void 0 ? {} : E;
        else {
          const E = await S;
          yield E === void 0 ? {} : E;
        }
        return;
      }
      if (h === e[c(1359)] && m[c(2463)] > 0) {
        const v = m[0], S = e[c(1702)](v);
        if (S) {
          const E = await S[c(950)]({ action: c(662), data: { targetNodeId: d, targetAction: l, targetData: f, forwardPath: m } }, k({}), i);
          for await (const A of E)
            yield A === void 0 ? {} : A;
          return;
        }
        throw new Error(c(873) + v + " - no connection available");
      }
      throw new Error(c(1429) + e.currentNodeId + c(1187) + g);
    });
  }
  [a(330)]() {
    const x = a;
    return Array[x(1038)](this[x(2693)].keys());
  }
  [a(2233)](x) {
    const t = a;
    return this[t(2693)][t(1541)](x);
  }
  getHandler(x) {
    const t = a;
    return this[t(2693)][t(635)](x);
  }
  [a(1017)]() {
    const x = a;
    this[x(2693)][x(1017)]();
  }
  [a(1426)](x, t, n) {
  }
  [a(2305)](x) {
    const t = a, n = k({ method: x0("sdppp/directRequest"), params: k({ action: y(), data: T0().optional() }) }), e = this;
    x[t(2756)](n, async (r, s) => {
      const i = t, { action: c, data: u } = r[i(1537)];
      if (c === i(662)) return await e[i(2788)](u, s);
      const d = e[i(2693)].get(c);
      if (!d) throw new Error(i(2684) + c + i(2432) + e[i(1359)]);
      const l = d(u, s), f = await l;
      return f === void 0 ? {} : f;
    });
  }
  async handleDirectProxyForward(x, t) {
    const n = a, { targetNodeId: e, targetAction: r, targetData: s, forwardPath: i } = x;
    if (!i || i[n(2463)] === 0) throw new Error(n(576));
    const c = i[0], u = i.slice(1);
    if (u[n(2463)] === 0 && c === this[n(1359)]) {
      const d = this[n(2693)].get(r);
      if (!d) throw new Error(n(2684) + r + n(2432) + this.currentNodeId);
      const l = d(s, t), f = await l;
      return f === void 0 ? {} : f;
    }
    if (c === this.currentNodeId && u.length > 0) {
      const d = u[0], l = this.getTransport(d);
      if (l) return await l.request({ method: n(1036), params: { action: n(662), data: { targetNodeId: e, targetAction: r, targetData: s, forwardPath: u } } }, T0());
      throw new Error(n(873) + d + n(1450));
    }
    throw new Error(n(1429) + this.currentNodeId + n(1187) + i);
  }
}
var cn, un, dn;
class yo {
  constructor(x, t) {
    m0(this, dn);
    m0(this, un);
    m0(this, cn, /* @__PURE__ */ new Set());
    const n = a;
    this[n(1620)] = x, this[n(1359)] = t;
  }
  [(dn = a(1620), un = a(1359), cn = a(2497), a(1806))](x) {
    this[a(2497)].add(x);
  }
  [a(985)](x) {
    const t = a;
    this[t(2497)][t(1707)](x);
  }
  [a(2500)](x) {
    const t = a;
    return this.connectedNodes[t(1541)](x);
  }
  [a(1989)](x, t) {
    const n = a;
    if (x === t) return [x];
    const e = /* @__PURE__ */ new Set(), r = [{ nodeId: x, path: [x] }];
    for (; r[n(2463)] > 0; ) {
      const { nodeId: s, path: i } = r[n(2325)]();
      if (e[n(1541)](s)) continue;
      e[n(2736)](s);
      const c = this[n(1620)][n(2058)](s);
      for (const u of c) {
        if (u === t) return [...i, u];
        !e[n(1541)](u) && r[n(1851)]({ nodeId: u, path: [...i, u] });
      }
    }
  }
  [a(1382)]() {
    const x = a;
    return Array[x(1038)](this[x(2497)]);
  }
  [a(1195)]() {
    const x = a;
    return this.connectedNodes[x(2428)];
  }
  [a(700)]() {
    const x = a, t = /* @__PURE__ */ new Set(), n = /* @__PURE__ */ new Set(), e = [this[x(1359)]];
    for (n[x(2736)](this[x(1359)]); e.length > 0; ) {
      const r = e[x(2325)](), s = this[x(1620)].getNeighbors(r);
      for (const i of s)
        !n[x(1541)](i) && (n.add(i), (this[x(2497)][x(1541)](i) || this[x(1946)](i, n)) && (t.add(i), e[x(1851)](i)));
    }
    return Array.from(t);
  }
  canReachThroughConnectedNodes(x, t) {
    const n = a, e = this.findPath(this[n(1359)], x);
    if (!e || e[n(2463)] <= 1) return !1;
    for (let r = 1; r < e.length - 1; r++)
      if (!this[n(2497)].has(e[r])) return !1;
    return !0;
  }
  clear() {
    this.connectedNodes.clear();
  }
}
var ln, fn, hn, pn, mn, gn;
class vo {
  constructor(x, t) {
    m0(this, gn);
    m0(this, mn);
    m0(this, pn, /* @__PURE__ */ new Map());
    m0(this, hn, /* @__PURE__ */ new Map());
    m0(this, fn);
    m0(this, "actionManager");
    m0(this, "connectionManager");
    m0(this, ln, /* @__PURE__ */ new Map());
    const n = a;
    this.definition = x, this[n(1359)] = t, this[n(1770)](), this.broadcastManager = new go(t), this.actionManager = new bo(x, t, (e) => this[n(1220)](e)), this[n(799)] = new yo(x, t), this[n(810)]();
  }
  [(gn = a(1620), mn = a(1359), pn = a(1534), hn = a(2105), fn = a(2095), ln = a(1075), a(1770))]() {
    const x = a;
    for (const t of this[x(1620)][x(1626)]()) {
      const n = this[x(1620)][x(1328)](t);
      if (n && n.store) {
        const e = this.getDefaultValuesFromSchema(n[x(1766)]), r = zs(() => e);
        this[x(1534)].set(t, r);
      }
    }
  }
  [a(1089)](x) {
    const t = a;
    if (!x) return {};
    try {
      return x[t(1383)]({});
    } catch {
      return this[t(315)](x);
    }
  }
  [a(315)](x) {
    const t = a;
    if (!x || !x[t(339)]) return {};
    if (x[t(339)][t(2197)] === "default") {
      const n = x[t(339)][t(1261)];
      return typeof n === t(2176) ? n() : n;
    }
    if (x[t(339)][t(2197)] === t(1985)) {
      const n = {};
      let e;
      try {
        e = x[t(339)][t(2002)];
      } catch {
        return {};
      }
      if (e) for (const [r, s] of Object[t(1144)](e)) {
        const i = this[t(1629)](s);
        i !== void 0 && (n[r] = i);
      }
      return n;
    }
    return {};
  }
  [a(1629)](x) {
    if (x)
      try {
        return x.parse(void 0);
      } catch {
        return this.manuallyExtractDefaults(x);
      }
  }
  async [a(2074)](x, t) {
    const n = a;
    if (!this[n(1620)][n(2803)](this.currentNodeId, x)) throw new Error("No edge defined from " + this[n(1359)] + n(1637) + x);
    if (this[n(1075)].has(x)) throw new Error(n(464) + x);
    try {
      this[n(1075)].set(x, t), this[n(799)][n(1806)](x), this[n(1570)](x, t), await this[n(2410)](x), await this[n(2784)](x);
    } catch (e) {
      throw this[n(920)](x), e;
    }
  }
  disconnect(x) {
    this[a(920)](x);
  }
  async [a(2410)](x) {
    const t = a;
    await new Promise((n) => setTimeout(n, 100));
    for (const [n, e] of this[t(1534)])
      if (n === this[t(1359)]) try {
        await this.broadcastManager[t(2666)](t(550) + n, { storeName: n, sourceNodeId: this.currentNodeId, stateUpdate: e[t(1313)](), isInitialState: !0 });
      } catch {
      }
    try {
      await this.broadcastManager[t(2666)](t(823), { fromNode: this[t(1359)], toNode: x });
    } catch {
    }
  }
  async requestInitialStateForNode(x) {
    const t = a;
    try {
      const n = this.connectionManager[t(700)]();
      for (const e of n)
        try {
          const r = "__internal_requestInitialState_" + e, s = this[t(1328)](e);
          if (s && s[t(944)] && s.actions[r]) {
            const i = s[t(944)][r]({});
            await Promise[t(2488)]([i, new Promise((c) => setTimeout(c, 300))]);
          }
        } catch (r) {
          console[t(1799)](t(669) + e + ":", r);
        }
    } catch (n) {
      console[t(1799)](t(475) + x + ":", n);
    }
  }
  cleanupConnection(x) {
    const t = a, n = this.nodeTransports[t(635)](x);
    this[t(1075)][t(1707)](x), this[t(799)].markDisconnected(x), this.broadcastManager[t(671)](x), n && n[t(1494)]();
  }
  setupNodeBindings(x, t) {
    const n = a;
    if (!this.nodeStores[n(635)](this[n(1359)])) throw new Error("Store not found for " + this.currentNodeId);
    this[n(472)][n(2206)](t), this[n(2095)][n(1489)](x, t);
  }
  [a(810)]() {
    const x = a;
    for (const [t, n] of this[x(1534)])
      t === this.currentNodeId ? mo({ graphInstance: this, store: n, name: t }) : po({ graphInstance: this, store: n, name: t });
  }
  [a(1328)](x) {
    const t = a;
    if (!this[t(2105)][t(1541)](x)) {
      const n = new ho(this, x);
      this[t(2105)].set(x, n);
    }
    return this[t(2105)][t(635)](x);
  }
  [a(1220)](x) {
    const t = a;
    return this[t(1075)][t(635)](x);
  }
  getTransportToNode(x) {
    const t = a, n = this[t(1075)][t(635)](x);
    if (n) return { transport: n, path: [this.currentNodeId, x] };
    const e = this[t(1083)](this[t(1359)], x);
    if (e && e[t(2463)] > 1) {
      const r = e[1], s = this[t(1075)][t(635)](r);
      if (s) return { transport: s, path: e };
    }
  }
  [a(2131)](x) {
    const t = a;
    return this[t(1534)][t(635)](x);
  }
  get [a(1766)]() {
    const x = a, t = this[x(1534)][x(635)](this[x(1359)]);
    if (!t) throw new Error(x(1717) + this.currentNodeId);
    return t;
  }
  get actions() {
    const x = a, t = this[x(1620)][x(1328)](this[x(1359)]);
    if (!t) throw new Error(x(417) + this[x(1359)]);
    return new Proxy({}, { get: (e, r) => {
      const s = x;
      if (typeof r !== s(1516)) return;
      const i = t.actions[r];
      if (!i) throw new Error("Action " + r + s(1150) + this[s(1359)]);
      return (c, u) => {
        const d = s, l = this.actionManager[d(1056)](r);
        if (!l) throw new Error(d(2246) + r + d(2012) + this[d(1359)]);
        const f = { nodeId: this[d(1359)] };
        if (i[d(1513)] === !0) {
          const g = l(c, f, u);
          return g && typeof g === d(1985) && Symbol[d(451)] in g ? async function* () {
            for await (const h of g)
              yield h === void 0 ? {} : h;
          }() : async function* () {
            const h = await g;
            yield h === void 0 ? {} : h;
          }();
        } else return (async () => {
          const g = d, h = l(c, f, u);
          if (h && typeof h === g(1985) && Symbol.asyncIterator in h) {
            const m = h[Symbol[g(451)]](), v = await m[g(1122)]();
            return v[g(1732)] === void 0 ? {} : v[g(1732)];
          } else {
            const m = await h;
            return m === void 0 ? {} : m;
          }
        })();
      };
    } });
  }
  getDefinition() {
    return this[a(1620)];
  }
  [a(2317)]() {
    return this.currentNodeId;
  }
  [a(1759)](x) {
    return this[a(632)](x);
  }
  [a(1870)](x, t) {
    const n = a;
    this.actionManager[n(1870)](x, t);
  }
  [a(415)]() {
    const x = a, t = Array[x(1038)](this[x(1075)][x(1448)]());
    for (const n of t)
      this.cleanupConnection(n);
    this[x(2095)][x(1017)](), this[x(472)].clear(), this[x(799)][x(1017)]();
  }
  [a(1083)](x, t) {
    const n = a;
    return this.connectionManager[n(1989)](x, t);
  }
  [a(1989)](x, t) {
    return this[a(1083)](x, t);
  }
  async [a(2666)](x, t) {
    const n = a, e = { ...t, __origin: this.currentNodeId };
    return this.broadcastManager[n(2666)](x, e);
  }
  [a(702)](x, t) {
    const n = a;
    this[n(2095)][n(2133)](x, t);
  }
}
function wo(o) {
  const x = new $s(o);
  return { joinAs(t) {
    const n = B;
    if (!x.getNode(t)) throw new Error(n(2030) + String(t) + n(597));
    return new vo(x, t);
  }, getDefinition() {
    return o;
  }, getNodeIds() {
    return x[B(1626)]();
  }, getNeighbors(t) {
    return x[B(2058)](t);
  }, hasEdge(t, n) {
    return x[B(2803)](t, n);
  }, hasPath(t, n) {
    return x[B(260)](t, n);
  }, findPath(t, n) {
    return x.findPath(t, n);
  } };
}
const Ta = { INTERCEPTOR_ERROR: a(2667) };
var bn, yn, vn, wn;
class Aa extends (wn = Error, vn = a(2197), yn = a(2272), bn = a(548), wn) {
  constructor(t, n, e, r) {
    const s = a;
    super(e);
    m0(this, vn);
    m0(this, yn);
    m0(this, bn);
    this[s(2796)] = s(2090), this[s(2197)] = t, this[s(2272)] = n, this[s(548)] = r;
  }
}
var Sn, kn, Pn, En, In, Rn, Cn, Fn, Nn, qn, Tn;
class So {
  constructor(x, t = {}) {
    m0(this, Tn);
    m0(this, qn, null);
    m0(this, Nn);
    m0(this, Fn, /* @__PURE__ */ new Map());
    m0(this, Cn, /* @__PURE__ */ new Map());
    m0(this, Rn, /* @__PURE__ */ new Map());
    m0(this, In, /* @__PURE__ */ new Map());
    m0(this, En, []);
    m0(this, Pn, []);
    m0(this, kn, []);
    m0(this, Sn, { requestsHandled: 0, notificationsHandled: 0, requestsIntercepted: 0, notificationsIntercepted: 0, errors: 0 });
    const n = a;
    this[n(2280)] = x, this[n(1882)] = { debug: !1, interceptorTimeout: 5e3, continueOnInterceptorError: !0, ...t };
  }
  async [(Tn = a(2280), qn = a(259), Nn = a(1882), Fn = a(2203), Cn = a(1709), Rn = a(865), In = a(292), En = a(757), Pn = a(683), kn = a(1453), Sn = a(1390), a(2074))](x) {
    const t = a;
    this.realTransport = x, x[t(1932)] = (n) => {
      this.handleIncomingMessage(n);
    }, x[t(1491)] = () => {
      const n = t;
      this[n(683)][n(641)]((e) => e());
    }, x[t(1955)] = (n) => {
      const e = t;
      this[e(1453)][e(641)]((r) => r(n));
    }, await this[t(2280)][t(2074)](this);
  }
  async handleIncomingMessage(x) {
    const t = a;
    this[t(1799)](t(1829), "Incoming message:", x);
    try {
      if (this[t(2170)](x) && await this[t(843)](x) || this[t(2592)](x) && await this[t(341)](x))
        return;
      this[t(757)][t(641)]((n) => n(x));
    } catch (n) {
      this[t(1390)].errors++, this.log(t(443), "Error handling incoming message:", n), this[t(757)].forEach((e) => e(x));
    }
  }
  async [a(843)](x) {
    const t = a, n = this[t(2203)][t(635)](x[t(2272)]);
    if (!n) return !1;
    try {
      this[t(1390)][t(1171)]++;
      const e = await n(x, {});
      return this[t(259)] && "id" in x && await this[t(259)][t(2171)]({ jsonrpc: t(869), id: x.id, result: e }), !0;
    } catch (e) {
      return this.stats[t(622)]++, this[t(259)] && "id" in x && await this[t(259)][t(2171)]({ jsonrpc: t(869), id: x.id, error: { code: -32603, message: t(2283) + JSON.stringify(x[t(1537)]) + " " + e.message } }), !0;
    }
  }
  async [a(341)](x) {
    const t = a, n = this[t(1709)][t(635)](x[t(2272)]);
    if (!n) return !1;
    try {
      return this[t(1390)][t(2339)]++, await n(x), !0;
    } catch (e) {
      return this[t(1390)][t(622)]++, this[t(1799)](t(443), "Notification handler failed for " + x.method + ":", e), !0;
    }
  }
  async send(x) {
    const t = a;
    this[t(1799)](t(1829), t(2054), x);
    try {
      if (this[t(2170)](x)) {
        const n = await this[t(1238)](x);
        if (n.success) {
          if (n[t(2723)] === null) return;
          n[t(2723)] && (x = { ...n[t(2723)], jsonrpc: t(869) }, this[t(1390)][t(272)]++);
        } else if (this[t(1882)][t(2129)]) this.log("warn", t(1358) + x[t(2272)] + ":", n[t(443)]);
        else throw n[t(443)];
      }
      if (this[t(2592)](x)) {
        const n = await this.executeOutgoingNotificationInterceptor(x);
        if (n.success) {
          if (n.result === null) return;
          n[t(2723)] && (x = { ...n[t(2723)], jsonrpc: t(869) }, this[t(1390)].notificationsIntercepted++);
        } else if (this[t(1882)][t(2129)]) this[t(1799)](t(515), "Notification interceptor failed for " + x[t(2272)] + ":", n.error);
        else throw n[t(443)];
      }
      this[t(259)] && await this[t(259)][t(2171)](x);
    } catch (n) {
      throw this[t(1390)][t(622)]++, n;
    }
  }
  async [a(854)]() {
    const x = a;
    this[x(259)] && await this.realTransport[x(854)]();
  }
  async close() {
    const x = a;
    this[x(259)] && await this.realTransport[x(1746)]();
  }
  set [a(1932)](x) {
    this.messageHandlers = [x];
  }
  set [a(1491)](x) {
    const t = a;
    this[t(683)] = [x];
  }
  set [a(1955)](x) {
    const t = a;
    this[t(1453)] = [x];
  }
  async [a(1238)](x) {
    const t = a, n = this[t(865)].get(x.method);
    if (!n) return { success: !0, result: x };
    try {
      return { success: !0, result: await this[t(255)](n(x), this[t(1882)][t(686)]) };
    } catch (e) {
      return this.stats[t(622)]++, { success: !1, error: new Aa(Ta.INTERCEPTOR_ERROR, x.method, t(1417) + e.message, e) };
    }
  }
  async [a(2445)](x) {
    const t = a, n = this[t(292)][t(635)](x[t(2272)]);
    if (!n) return { success: !0, result: x };
    try {
      return { success: !0, result: await this[t(255)](n(x), this[t(1882)][t(686)]) };
    } catch (e) {
      return this.stats[t(622)]++, { success: !1, error: new Aa(Ta.INTERCEPTOR_ERROR, x[t(2272)], t(2515) + e[t(2354)], e) };
    }
  }
  async [a(276)](x, t) {
    const n = a;
    return await this[n(2280)][n(276)](x, t, { timeout: 36e5 });
  }
  async [a(1006)](x) {
    const t = a;
    return await this[t(2280)][t(1006)](x);
  }
  [a(2756)](x, t) {
    const n = a, e = x.shape[n(2272)][n(1732)];
    this[n(2203)].set(e, t);
  }
  [a(2169)](x, t) {
    const n = a, e = x[n(2002)].method.value;
    this[n(1709)][n(1527)](e, t);
  }
  [a(2769)](x, t) {
    const n = a, e = x[n(2002)].method[n(1732)];
    this[n(865)][n(1527)](e, t);
  }
  [a(2061)](x, t) {
    const n = a, e = x[n(2002)][n(2272)][n(1732)];
    this[n(292)][n(1527)](e, t);
  }
  [a(1351)](x) {
    this.requestHandlers.delete(x);
  }
  [a(2199)](x) {
    const t = a;
    this.notificationHandlers[t(1707)](x);
  }
  [a(2347)](x) {
    const t = a;
    this[t(865)][t(1707)](x);
  }
  [a(278)](x) {
    const t = a;
    this[t(292)][t(1707)](x);
  }
  [a(1871)](x) {
    return this[a(2203)].has(x);
  }
  [a(1140)](x) {
    const t = a;
    return this.notificationHandlers[t(1541)](x);
  }
  hasOutgoingRequestInterceptor(x) {
    const t = a;
    return this[t(865)][t(1541)](x);
  }
  [a(596)](x) {
    const t = a;
    return this.outgoingNotificationInterceptors[t(1541)](x);
  }
  [a(1119)]() {
    return { ...this[a(1390)] };
  }
  resetStats() {
    const x = a;
    this[x(1390)] = { requestsHandled: 0, notificationsHandled: 0, requestsIntercepted: 0, notificationsIntercepted: 0, errors: 0 };
  }
  [a(990)]() {
    return this[a(2280)];
  }
  [a(1494)]() {
    const x = a;
    this[x(2203)][x(1017)](), this[x(1709)][x(1017)](), this[x(865)][x(1017)](), this[x(292)].clear();
  }
  [a(2170)](x) {
    const t = a;
    return x.jsonrpc === t(869) && t(2272) in x && "id" in x;
  }
  [a(2592)](x) {
    const t = a;
    return x[t(2279)] === t(869) && t(2272) in x && !("id" in x);
  }
  async [a(255)](x, t) {
    const n = a, e = new Promise((r, s) => {
      const i = B;
      setTimeout(() => s(new Error(i(1568))), t);
    });
    return await Promise[n(2488)]([x, e]);
  }
  [a(1799)](x, t, ...n) {
    const e = a;
    if (!this[e(1882)].debug && x === e(1829)) return;
    const r = e(270);
    switch (x) {
      case e(1829):
        console[e(1829)](r, t, ...n);
        break;
      case e(2773):
        console.info(r, t, ...n);
        break;
      case e(515):
        console[e(515)](r, t, ...n);
        break;
      case e(443):
        console[e(443)](r, t, ...n);
        break;
    }
  }
}
k({ method: x0(a(447)), params: k({ requestId: y(), data: T0(), error: y().nullable(), finished: e0() }) }), k({ method: x0(a(2415)), params: k({ action: y(), data: T0() }) }), k({ method: x0(a(2247)), params: k({ requestId: y() }) });
const ko = k({ method: x0(a(447)), params: k({ requestId: y(), data: T0(), error: y().nullable(), finished: e0() }) }), Po = k({ method: x0(a(2415)), params: k({ action: y(), data: T0() }) }), Eo = k({ method: x0(a(2247)), params: k({ requestId: y() }) });
var An, On;
class Io {
  constructor() {
    m0(this, On, /* @__PURE__ */ new Map());
    m0(this, An, /* @__PURE__ */ new Map());
  }
  [(On = a(1526), An = a(2067), a(1851))](x) {
    const t = a, { requestId: n } = x[t(1537)], e = this.queues[t(635)](n) || [], r = this.waiters[t(635)](n) || [];
    r[t(2463)] > 0 ? r.shift()(x.params) : (e[t(1851)](x[t(1537)]), this.queues[t(1527)](n, e));
  }
  async [a(2566)](x) {
    const t = a, n = this[t(1526)][t(635)](x) || [];
    return n[t(2463)] > 0 ? n.shift() : new Promise((e) => {
      const r = t, s = this[r(2067)][r(635)](x) || [];
      s[r(1851)](e), this[r(2067)][r(1527)](x, s);
    });
  }
  [a(1494)](x) {
    const t = a;
    this[t(1526)].delete(x), this[t(2067)].delete(x);
  }
}
var Dn, jn, Ln, Mn;
class Ro extends So {
  constructor(t, n = {}) {
    const e = a;
    super(t, n);
    m0(this, Mn, /* @__PURE__ */ new Map());
    m0(this, Ln, 1);
    m0(this, jn, /* @__PURE__ */ new Map());
    m0(this, Dn, new Io());
    this[e(1454)]();
  }
  [(Mn = a(1315), Ln = a(1287), jn = a(2561), Dn = a(977), a(1454))]() {
    const t = a;
    this[t(1423)](), this.setupAbortHandler(), this[t(1058)]();
  }
  setupStreamResponseHandler() {
    const t = a;
    this[t(2169)](ko, async (n) => {
      const e = t;
      this.notificationQueue[e(1851)](n);
    });
  }
  [a(627)]() {
    const t = a;
    this[t(2756)](Eo, async (n, e) => {
      const r = t, { requestId: s } = n[r(1537)], i = this[r(2561)].get(s);
      return i && (i.abort(), this.runningRequests[r(1707)](s)), { success: !0 };
    });
  }
  [a(1058)]() {
    this.setRequestHandler(Po, async (t, n) => {
      const e = B, r = e(321) + this[e(1287)]++, s = this[e(1315)][e(635)](t[e(1537)][e(305)]);
      if (!s) throw new Error(e(2557) + t.params[e(305)]);
      const i = new AbortController();
      return this.runningRequests[e(1527)](r, i), this[e(1129)](r, s, t[e(1537)], n, i), { requestId: r };
    });
  }
  async [a(1129)](t, n, e, r, s) {
    const i = a;
    try {
      const c = n(e, r, s[i(1572)]);
      for await (const u of c) {
        if (s.signal[i(1272)]) break;
        await this[i(1006)]({ method: "sdppp/streamResponse", params: { requestId: t, data: u, error: null, finished: !1 } });
      }
      !s[i(1572)].aborted && await this.notification({ method: i(447), params: { requestId: t, data: null, error: null, finished: !0 } });
    } catch (c) {
      !s[i(1572)][i(1272)] && await this[i(1006)]({ method: "sdppp/streamResponse", params: { requestId: t, data: null, error: c[i(2354)], finished: !0 } });
    } finally {
      this[i(2561)][i(1707)](t);
    }
  }
  [a(1714)](t, n) {
    const e = a;
    this[e(1315)][e(1527)](t.shape[e(305)][e(1732)], n);
  }
  async streamRequest(t, n, e) {
    const r = a;
    this[r(486)](e);
    const s = await this.sendStreamRequestorRequest(t), i = this.initializeResponseQueue(s), c = this[r(2451)]();
    return this.createAsyncIterator(i, c, s, e);
  }
  [a(486)](t) {
    const n = a;
    if (t && t[n(1272)]) throw new Error(n(768));
  }
  async [a(653)](t) {
    const n = a;
    return (await this.request({ method: "sdppp/streamRequest", params: { action: t.action, data: t[n(2743)] } }, k({ requestId: y() })))[n(1037)];
  }
  initializeResponseQueue(t) {
    return this.notificationQueue;
  }
  [a(2451)]() {
    return { finished: !1, error: null };
  }
  [a(2720)](t, n, e, r) {
    const s = a, i = this;
    return { async *[Symbol[s(451)]]() {
      const c = s;
      try {
        for (; !n[c(711)] && !n[c(443)]; ) {
          if (r && r.aborted)
            throw await i.request({ method: c(2247), params: { requestId: e } }, k({ success: e0() })), new Error(c(2654));
          const u = await t[c(2566)](e);
          if (u[c(443)])
            throw n[c(443)] = u[c(443)], new Error(u[c(443)]);
          if (u.finished) {
            n.finished = !0;
            break;
          }
          u[c(2743)] !== null && (yield u[c(2743)]);
        }
      } finally {
        t[c(1494)](e);
      }
    } };
  }
  getRunningRequestsCount() {
    const t = a;
    return this[t(2561)][t(2428)];
  }
  async [a(605)](t) {
    const n = a, e = this.runningRequests.get(t);
    return e ? (e.abort(), this.runningRequests[n(1707)](t), !0) : !1;
  }
  [a(2588)]() {
    const t = a;
    for (const [n, e] of this[t(2561)])
      e.abort();
    this[t(2561)][t(1017)]();
  }
  [a(1494)]() {
    const t = a;
    super[t(1494)](), this.abortAllRequests(), this[t(1315)].clear();
  }
}
k({ id: y(), method: y(), params: T0()[a(1833)](), traceId: y().optional() }), k({ id: y(), result: T0()[a(1833)](), error: k({ code: K(), message: y(), data: T0()[a(1833)]() })[a(1833)]() }), k({ method: y(), params: T0()[a(1833)]() }), k({ method: x0(a(2415)), params: k({ action: y(), data: T0() }) }), k({ method: x0(a(447)), params: k({ requestId: y(), data: T0()[a(1833)](), error: y()[a(917)]().optional(), finished: e0().default(!1) }) }), k({ method: x0("sdppp/abort"), params: k({ requestId: y() }) }), k({ method: x0(a(2064)), params: k({ messageType: y(), message: T0() }) });
function Wn(o) {
  const x = a;
  return o && o[x(770)] && Object[x(1060)][x(1995)][x(1850)](o, "default") ? o.default : o;
}
const Ne = k({ leftDistance: K(), topDistance: K(), rightDistance: K(), bottomDistance: K(), width: K(), height: K() }), Ce = { name: y(), uiWeight: K() }, Co = k({ ...Ce, outputType: x0(a(1346)), options: k({ required: e0(), maxCount: K().optional(), maskMode: e0().optional() }) }), Fo = k({ ...Ce, outputType: x0("masks"), options: k({ required: e0() }) }), No = k({ ...Ce, outputType: x0(a(1516)), options: k({ required: e0() }) }), qo = k({ ...Ce, outputType: x0(a(598)), options: k({ required: e0() }) }), To = k({ ...Ce, outputType: x0(a(2601)), options: k({ required: e0(), min: K()[a(1833)](), max: K()[a(1833)](), step: K().optional(), random: e0()[a(1833)](), slider: e0()[a(1833)]() }) }), Ao = k({ ...Ce, outputType: x0(a(2088)), options: k({ required: e0(), values: y0(y()), labels: y0(y())[a(1833)]() }) }), Oo = k({ ...Ce, outputType: x0("segment"), options: k({ required: e0(), values: y0(y()) }) }), Do = k({ ...Ce, outputType: x0(a(2587)), options: k({ required: e0() }) }), jo = Vn("outputType", [Co, Fo, No, qo, To, Ao, Oo, Do]), Lo = k({ id: y(), title: y(), widgets: y0(jo), uiWeightSum: K() }), Mo = k({ widgetableID: y(), widgetablePath: y(), nodes: z0(y(), Lo), nodeIndexes: y0(y()), note: y()[a(1833)](), options: z0(y(), T0()) }), $o = k({ widgetableStructure: Mo[a(779)]({ widgetableID: "", widgetablePath: "", nodes: {}, note: "", options: {}, nodeIndexes: [] }), widgetableValues: z0(y(), y0(T0())).default({}), widgetableErrors: z0(y(), y())[a(779)]({}), queueSize: K()[a(779)](0), lastError: y().default(""), progress: K()[a(779)](0), executingNodeTitle: y().default(""), executingNodeID: y().default(""), graphProgress: K().default(0), comfyUserToken: y()[a(779)](""), comfyOrgLoggedIn: e0().default(!1), comfyOrgAPIKey: y()[a(779)](""), comfyWSState: E0([a(1495), a(2302)])[a(779)](a(1495)), lastRunTime: K()[a(779)](0) }), zo = k({ bannerData: T0()[a(1833)](), refreshable: e0()[a(779)](!1), backwardable: e0().default(!1), loginable: e0()[a(779)](!1), runnable: e0().default(!1), workBoundaries: z0(K(), Ne)[a(779)]({}), workBoundaryMaxSizes: z0(K(), K())[a(779)]({}) }), Uo = k({ uname: y()[a(779)](""), activeDocumentID: K().default(0), layers: y0(k({ id: K(), name: y(), identify: y() }))[a(779)]([]), actions: y0(y()).default([]), theme: y()[a(779)](a(877)), sdpppX: z0(y(), T0())[a(779)]({}), locale: E0([a(2448), "en-US"])[a(779)](a(979)), comfyWebviewConnectStatus: E0(["connecting", a(1495), a(444)]).default(a(444)), comfyWebviewLoadError: y()[a(779)](""), comfyWebviewLoading: e0()[a(779)](!1), comfyWebviewVersion: y()[a(779)](""), comfyHTTPCode: K()[a(779)](200), comfyURL: y()[a(779)](""), sdkWebviewFocusing: e0()[a(779)](!1), sdkWebviewConnectStatus: E0([a(1920), a(1495), "disconnected"])[a(779)](a(444)), isLogin: e0()[a(779)](!1), isGuest: e0()[a(779)](!1), requestingLogin: e0()[a(779)](!1), loginMessage: y().default(""), token: y().default(""), userInfo: z0(y(), T0()).default({}), taskLastRun: K()[a(779)](0), canvasStateID: K()[a(1833)](), selectionStateID: y().optional(), selectionBoundary: Ne[a(917)]()[a(1833)](), canvasThumbnail: y()[a(779)](""), curlayerThumbnail: y()[a(779)]("") }), Ho = { setNodeTitle: { requestSchema: k({ node_id: y(), title: y() }), responseSchema: k({ success: e0() }) }, reboot: { requestSchema: k({}), responseSchema: k({ success: e0(), error: y()[a(1833)]() }) }, setComfyOrgAPIKey: { requestSchema: k({ api_key: y() }), responseSchema: k({ success: e0() }) }, logout: { requestSchema: k({}), responseSchema: k({ success: e0() }) }, uploadComfyImageFromUXP: { requestSchema: k({ fileName: y(), overwrite: e0()[a(1833)](), mimeType: y()[a(1833)](), dataBase64: y() }), responseSchema: k({ name: y() }) }, sdpppHandshake: { requestSchema: k({ hostVersion: y().optional() }), responseSchema: k({ comfyVersion: y(), hostVersion: y().optional() }) } }, Vo = k({ workflows: y0(y()), error: y()[a(1833)]() }), _o = k({ success: e0(), nodeErrors: z0(y())[a(1833)](), prompt_ids: y0(y())[a(1833)](), images: y0(k({ url: y(), thumbnail: y() }))[a(1833)]() }), Wo = { setWidgetValue: { requestSchema: k({ values: y0(k({ nodeID: y(), widgetIndex: K(), value: z0(y(), T0()).or(y()).or(K()).or(e0()).or(y0(T0())) })) }), responseSchema: k({ success: e0() }) }, openWorkflow: { requestSchema: k({ workflow_path: y(), reset: e0().default(!1) }), responseSchema: k({ success: e0() }) }, openWorkflowJSON: { requestSchema: k({ workflow_content: z0(T0()), workflow_path: y() }), responseSchema: k({ success: e0() }) }, listWorkflows: { requestSchema: k({ listMode: y()[a(1833)](), sdpppID: y()[a(1833)](), sdpppToken: y().optional() }), responseSchema: Vo }, saveWorkflow: { requestSchema: k({ workflow_path: y(), from_sid: y().optional() }), responseSchema: k({ success: e0() }) }, run: { requestSchema: k({ size: K() }), responseSchema: _o, stream: !0 }, stopAll: { requestSchema: k({}), responseSchema: k({ success: e0() }) } }, Bo = { backward: { requestSchema: Ux(), responseSchema: k({ success: e0() }) }, refresh: { requestSchema: Ux(), responseSchema: k({ success: e0() }) }, run: { requestSchema: Ux(), responseSchema: k({ success: e0() }) } }, Zo = k({ passwordPayload: k({ username: y(), password: y() }).or(k({ email: y(), password: y() })).or(k({ phone: y(), password: y() })).or(k({ identifier: y(), password: y() })) }).or(k({ passcodePayload: k({ phone: y(), code: y() }).or(k({ email: y(), code: y() })) })), Ko = k({ passwordPayload: k({ username: y(), password: y() }).or(k({ email: y(), password: y() })).or(k({ phone: y(), password: y() })).or(k({ identifier: y(), password: y() })) }).or(k({ passcodePayload: k({ phone: y(), code: y() }).or(k({ email: y(), code: y() })) })), Go = { register: { requestSchema: Zo, responseSchema: k({}) }, login: { requestSchema: Ko, responseSchema: k({}) }, sendPassCode: { requestSchema: k({ phone: y().optional(), email: y()[a(1833)]() }), responseSchema: k({}) }, logout: { requestSchema: k({}), responseSchema: k({}) }, guestLogin: { requestSchema: k({}), responseSchema: k({}) } };
k({ resource: y()[a(1833)](), thumbnail: y().optional(), width: K().optional(), height: K().optional(), mimeType: y()[a(1833)](), source: y()[a(1833)](), error: y()[a(1833)]() }), k({ boundary: E0([a(1008), a(1121), a(2498)]), content: E0([a(1008), "curlayer", "selection"]).or(y()), imageSize: K(), imageQuality: K(), cropBySelection: E0(["no", a(499), a(1260)]), layer_identify: y()[a(917)]()[a(1833)]() }), k({ content: E0(["canvas", a(1121), "selection"]), reverse: e0(), imageSize: K(), layer_identify: y().nullable()[a(1833)]() }), k({ selection: E0([a(2300), "newlayer_canvas", a(2110), a(2154), a(1047), "curlayer_curlayer", a(1504), a(2300)]), url: y(), source: y(), cropBySelection: E0(["no", "positive", a(1260)]) });
const Jo = { downloadImage: { requestSchema: k({ url: y() }), responseSchema: k({ thumbnail: y()[a(1833)](), resource: y().optional(), width: K()[a(1833)](), height: K().optional(), error: y()[a(1833)]() }) }, getThumbnail: { requestSchema: k({ resource: y(), maxSize: K()[a(1833)]() }), responseSchema: k({ thumbnail: y()[a(1833)](), width: K()[a(1833)](), height: K().optional(), error: y().optional() }) }, deleteDownloadedImage: { requestSchema: k({ resources: y0(y()) }), responseSchema: k({ error: y()[a(1833)]() }) }, requestAndDoSaveImage: { requestSchema: k({ resources: y0(y()) }), responseSchema: k({ error: y().optional() }) } }, Qo = { manageGuides: { requestSchema: k({ action: E0([a(1510), a(1017)]), rect: Ne[a(1833)]() }), responseSchema: k({ success: e0() }) }, getBoundary: { requestSchema: k({ type: E0([a(1121), a(2498)]) }), responseSchema: Ne }, getImage: { requestSchema: k({ boundary: B0([E0([a(1008), a(1121), a(2498)]), Ne]), content: B0([E0([a(1008), a(1121)]), y()]), imageSize: K(), imageQuality: K(), cropBySelection: E0(["no", "positive", a(1260)]), SkipNonNormalLayer: e0(), layer_identify: y().nullable()[a(1833)]() }), responseSchema: k({ resource: y()[a(1833)](), thumbnail: y()[a(1833)](), width: K()[a(1833)](), height: K().optional(), mimeType: y()[a(1833)](), source: y()[a(1833)](), error: y()[a(1833)]() }) }, getMask: { requestSchema: k({ boundary: B0([E0([a(1008), "curlayer", a(2498)]), Ne]), content: E0([a(1008), a(1121), a(2498)]), reverse: e0(), imageSize: K(), layer_identify: y()[a(917)]()[a(1833)]() }), responseSchema: k({ resource: y()[a(1833)](), thumbnail: y()[a(1833)](), width: K()[a(1833)](), height: K()[a(1833)](), mimeType: y()[a(1833)](), source: y()[a(1833)](), error: y()[a(1833)]() }) }, getCurrentLayerIdentify: { requestSchema: k({}), responseSchema: k({ layer_identify: y().nullable() }) }, importImage: { requestSchema: k({ resource: y(), boundary: B0([E0(["canvas", "curlayer", a(2498)]), Ne])[a(1833)](), type: E0([a(1008), a(1121), a(1500), a(1942)]), sourceWidth: K().optional(), sourceHeight: K()[a(1833)]() }), responseSchema: k({ success: e0(), layers: y0(k({ identify: y() }))[a(1833)](), message: y().optional(), error: y()[a(1833)]() }) }, applyMaskToImage: { requestSchema: k({ imageResource: y(), maskResource: y(), invertMask: e0().optional() }), responseSchema: k({ resource: y(), thumbnail: y()[a(1833)](), width: K(), height: K(), mimeType: y() }) }, showBoundarySelectionDialog: { requestSchema: k({ additionalData: z0(T0())[a(1833)]() }), responseSchema: k({ boundary: E0(["canvas", "curlayer", a(2498)])[a(1833)](), cancelled: e0()[a(1833)]() }) }, selectImageSource: { requestSchema: k({ additionalData: z0(T0())[a(1833)]() }), responseSchema: k({ action: E0([a(1142), a(229)])[a(1833)](), params: T0()[a(1833)](), cancelled: e0().optional() }) }, selectContentSource: { requestSchema: k({ additionalData: z0(T0()).optional() })[a(1833)](), responseSchema: k({ resource: y()[a(1833)](), fileName: y()[a(1833)](), mimeType: y().optional(), size: K()[a(1833)](), layerIdentify: y()[a(1833)](), cancelled: e0()[a(1833)]() }) } }, Hx = k({ taskId: y(), taskName: y(), status: E0([a(1354), a(1924), "failed", a(694)]), currentStep: K()[a(1833)](), totalSteps: K()[a(1833)](), stepDescription: y().optional(), progressPercentage: K().min(0).max(100).optional(), startTime: y(), endTime: y().optional(), error: y().optional(), errorCode: y()[a(1833)](), result: T0()[a(1833)](), metadata: z0(T0()).optional() }), Vx = k({ success: e0(), error: y()[a(1833)]() }), Xo = { taskAdd: { requestSchema: Hx, responseSchema: Vx }, taskUpdate: { requestSchema: Hx[a(957)]()[a(1994)]({ taskId: !0 }), responseSchema: Vx }, taskRemove: { requestSchema: Hx[a(1601)]({ taskId: !0 }), responseSchema: Vx } }, Yo = { log: { requestSchema: k({ level: E0([a(1799), a(2773), a(515), a(443)]), messages: y0(y()) }), responseSchema: k({}) }, openExternalLink: { requestSchema: k({ url: y() }), responseSchema: k({ error: y()[a(1833)]() }) }, getStorage: { requestSchema: k({ key: y() }), responseSchema: k({ value: y(), error: y()[a(1833)]() }) }, setStorage: { requestSchema: k({ key: y(), value: y() }), responseSchema: k({ error: y()[a(1833)]() }) }, removeStorage: { requestSchema: k({ key: y() }), responseSchema: k({ error: y()[a(1833)]() }) }, keyboardAction: { requestSchema: k({ keycode: y() }), responseSchema: k({}) }, setComfyWebviewURL: { requestSchema: k({ url: y() }), responseSchema: k({}) }, getImageBase64: { requestSchema: k({ token: y() }), responseSchema: k({ base64: y()[a(1833)](), mimeType: y().optional(), error: y().optional() }) }, uploadComfyImage: { requestSchema: k({ uploadInput: k({ type: B0([x0(a(1340)), x0("token"), x0(a(884))]), resource: T0(), fileName: y(), mimeType: y()[a(1833)](), resourceId: y()[a(1833)]() }), overwrite: e0()[a(1833)]().default(!0) }), responseSchema: k({ name: y() }) }, pickLocalFile: { requestSchema: k({ acceptExtensions: y0(y())[a(1833)](), kind: E0([a(1177), a(1794)])[a(1833)]() })[a(1833)](), responseSchema: k({ cancelled: e0()[a(1833)](), resource: y()[a(1833)](), fileName: y()[a(1833)](), mimeType: y()[a(1833)](), size: K().optional(), error: y()[a(1833)]() }) }, proxiedFetch: { requestSchema: k({ url: y(), method: y()[a(1833)](), headers: z0(y())[a(1833)](), body: T0()[a(1833)](), bodyType: E0([a(1780), a(1608), "text"]).optional() }), responseSchema: k({ success: e0(), status: K()[a(1833)](), statusText: y().optional(), headers: z0(y()).optional(), data: T0()[a(1833)](), error: y().optional() }) }, openaiImageEdit: { requestSchema: k({ apiKey: y(), baseURL: y(), imageToken: y(), prompt: y(), model: y() }), responseSchema: k({ success: e0(), imageUrl: y()[a(1833)](), apiTime: K()[a(1833)](), error: y().optional() }) }, geminiImageGenerate: { requestSchema: k({ apiKey: y(), baseURL: y()[a(1833)](), imageInputs: y0(y())[a(1833)](), imageInput: y()[a(1833)](), imageInputType: E0([a(2674), a(699)]), prompt: y() }), responseSchema: k({ success: e0(), imageUrl: y().optional(), apiTime: K().optional(), error: y()[a(1833)]() }) } }, ei = B0([y(), zx(Uint8Array), zx(ArrayBuffer), zx(DataView)]), xi = k({ buffer: ei, name: y()[a(917)]()[a(1833)](), mime: y()[a(917)]().optional(), width: K()[a(917)]().optional(), height: K().nullable()[a(1833)](), thumbnail: y()[a(917)]()[a(1833)](), meta: z0(Me())[a(1833)]() }), ti = { "fileResource.createFromExternal": { requestSchema: k({ url: y() }), responseSchema: k({ resource: y().optional(), thumbnail: y().optional(), width: K()[a(1833)](), height: K().optional(), mime: y()[a(1833)](), mimeType: y().optional(), error: y()[a(1833)]() }) }, "fileResource.createFromLocal": { requestSchema: k({ types: y0(k({ description: y()[a(1833)](), extensions: y0(y())[a(1833)]() }))[a(1833)]() }), responseSchema: k({ resource: y()[a(1833)](), thumbnail: y().optional(), width: K()[a(1833)](), height: K()[a(1833)](), mime: y().optional(), error: y().optional() }) }, "fileResource.createFromBuffer": { requestSchema: k({ files: y0(xi)[a(458)](1) }), responseSchema: k({ resource: y()[a(1833)](), thumbnail: y()[a(1833)](), width: K()[a(1833)](), height: K()[a(1833)](), mime: y()[a(1833)](), error: y().optional() }) }, "fileResource.createFromCBM": { requestSchema: k({ contentUri: y()[a(1833)](), boundaryUri: y().optional(), maskUri: y()[a(1833)](), options: z0(Me()).optional() }), responseSchema: k({ resource: y()[a(1833)](), thumbnail: y()[a(1833)](), width: K()[a(1833)](), height: K()[a(1833)](), mime: y()[a(1833)](), error: y()[a(1833)]() }) }, "fileResource.delete": { requestSchema: k({ resources: y0(y()) }), responseSchema: k({ error: y().optional() }) }, "fileResource.thumbnail": { requestSchema: k({ resource: y(), maxSize: K()[a(1833)]() }), responseSchema: k({ thumbnail: y()[a(1833)](), width: K()[a(1833)](), height: K()[a(1833)](), error: y().optional() }) }, "fileResource.saveAs": { requestSchema: k({ resources: y0(y()) }), responseSchema: k({ error: y().optional() }) }, "boundary.normalize": { requestSchema: k({ boundary: y() }), responseSchema: k({ boundary: y()[a(1833)](), error: y()[a(1833)]() }) }, "layer.resolve": { requestSchema: k({ uri: y(), type: E0([a(1903), a(316)]) }), responseSchema: k({ uri: y()[a(1833)](), error: y()[a(1833)]() }) } }, ai = wo({ nodes: { sdk: { store: zo, actions: { ...Bo } }, uxp: { store: Uo, actions: { ...Jo, ...ti, ...Yo, ...Go, ...Xo, ...Qo } }, comfy: { store: $o, actions: { ...Wo, ...Ho } } }, edges: [[a(2658), a(898)], [a(1643), a(898)]] }), I0 = ai[a(2675)](a(1643));
globalThis[a(1824)] = I0;
var fx = { exports: {} }, _x, Oa;
function ri() {
  if (Oa) return _x;
  Oa = 1;
  var o = 1e3, x = o * 60, t = x * 60, n = t * 24, e = n * 7, r = n * 365.25;
  _x = function(d, l) {
    const f = B;
    l = l || {};
    var g = typeof d;
    if (g === f(1516) && d[f(2463)] > 0) return s(d);
    if (g === f(2601) && isFinite(d)) return l[f(1561)] ? c(d) : i(d);
    throw new Error(f(832) + JSON.stringify(d));
  };
  function s(d) {
    const l = B;
    if (d = String(d), !(d.length > 100)) {
      var f = /^(-?(?:\d+)?\.?\d+) *(milliseconds?|msecs?|ms|seconds?|secs?|s|minutes?|mins?|m|hours?|hrs?|h|days?|d|weeks?|w|years?|yrs?|y)?$/i[l(1719)](d);
      if (f) {
        var g = parseFloat(f[1]), h = (f[2] || "ms")[l(2321)]();
        switch (h) {
          case "years":
          case l(1598):
          case l(1891):
          case "yr":
          case "y":
            return g * r;
          case l(427):
          case "week":
          case "w":
            return g * e;
          case l(963):
          case l(2453):
          case "d":
            return g * n;
          case l(564):
          case "hour":
          case l(1885):
          case "hr":
          case "h":
            return g * t;
          case l(800):
          case l(1421):
          case l(1069):
          case l(458):
          case "m":
            return g * x;
          case l(1545):
          case l(1783):
          case l(485):
          case l(1835):
          case "s":
            return g * o;
          case "milliseconds":
          case l(687):
          case l(1745):
          case l(2569):
          case "ms":
            return g;
          default:
            return;
        }
      }
    }
  }
  function i(d) {
    const l = B;
    var f = Math[l(251)](d);
    return f >= n ? Math[l(1256)](d / n) + "d" : f >= t ? Math.round(d / t) + "h" : f >= x ? Math[l(1256)](d / x) + "m" : f >= o ? Math[l(1256)](d / o) + "s" : d + "ms";
  }
  function c(d) {
    const l = B;
    var f = Math[l(251)](d);
    return f >= n ? u(d, f, n, "day") : f >= t ? u(d, f, t, l(982)) : f >= x ? u(d, f, x, l(1421)) : f >= o ? u(d, f, o, "second") : d + l(2162);
  }
  function u(d, l, f, g) {
    var h = l >= f * 1.5;
    return Math.round(d / f) + " " + g + (h ? "s" : "");
  }
  return _x;
}
var Wx, Da;
function ni() {
  if (Da) return Wx;
  Da = 1;
  function o(x) {
    const t = B;
    e[t(1829)] = e, e[t(779)] = e, e[t(461)] = d, e[t(2650)] = c, e[t(2304)] = s, e[t(2639)] = u, e[t(1427)] = ri(), e[t(415)] = l, Object[t(1448)](x)[t(641)]((f) => {
      e[f] = x[f];
    }), e[t(2098)] = [], e[t(2491)] = [], e[t(762)] = {};
    function n(f) {
      const g = t;
      let h = 0;
      for (let m = 0; m < f[g(2463)]; m++)
        h = (h << 5) - h + f.charCodeAt(m), h |= 0;
      return e.colors[Math[g(251)](h) % e[g(2604)][g(2463)]];
    }
    e[t(244)] = n;
    function e(f) {
      const g = t;
      let h, m = null, v, S;
      function E(...A) {
        const T = B;
        if (!E[T(2639)]) return;
        const R = E, P = Number(/* @__PURE__ */ new Date()), F = P - (h || P);
        R.diff = F, R[T(2664)] = h, R[T(2759)] = P, h = P, A[0] = e[T(461)](A[0]), typeof A[0] !== T(1516) && A[T(1638)]("%O");
        let j = 0;
        A[0] = A[0].replace(/%([a-zA-Z%])/g, (L, C) => {
          const N = T;
          if (L === "%%") return "%";
          j++;
          const z = e.formatters[C];
          if (typeof z === N(2176)) {
            const U = A[j];
            L = z[N(1850)](R, U), A.splice(j, 1), j--;
          }
          return L;
        }), e[T(958)][T(1850)](R, A), (R[T(1799)] || e[T(1799)])[T(2135)](R, A);
      }
      return E[g(931)] = f, E[g(1749)] = e[g(1749)](), E[g(546)] = e.selectColor(f), E[g(2417)] = r, E[g(415)] = e[g(415)], Object[g(1609)](E, g(2639), { enumerable: !0, configurable: !1, get: () => {
        const A = g;
        return m !== null ? m : (v !== e[A(1042)] && (v = e.namespaces, S = e[A(2639)](f)), S);
      }, set: (A) => {
        m = A;
      } }), typeof e[g(2226)] === g(2176) && e[g(2226)](E), E;
    }
    function r(f, g) {
      const h = t, m = e(this.namespace + (typeof g > "u" ? ":" : g) + f);
      return m[h(1799)] = this[h(1799)], m;
    }
    function s(f) {
      const g = t;
      e[g(2021)](f), e[g(1042)] = f, e[g(2098)] = [], e[g(2491)] = [];
      const h = (typeof f === g(1516) ? f : "").trim()[g(1936)](/\s+/g, ",").split(",")[g(558)](Boolean);
      for (const m of h)
        m[0] === "-" ? e[g(2491)][g(1851)](m[g(600)](1)) : e[g(2098)][g(1851)](m);
    }
    function i(f, g) {
      const h = t;
      let m = 0, v = 0, S = -1, E = 0;
      for (; m < f.length; )
        if (v < g.length && (g[v] === f[m] || g[v] === "*")) g[v] === "*" ? (S = v, E = m, v++) : (m++, v++);
        else if (S !== -1) v = S + 1, E++, m = E;
        else return !1;
      for (; v < g[h(2463)] && g[v] === "*"; )
        v++;
      return v === g.length;
    }
    function c() {
      const f = t, g = [...e[f(2098)], ...e.skips[f(698)]((h) => "-" + h)].join(",");
      return e[f(2304)](""), g;
    }
    function u(f) {
      for (const g of e.skips)
        if (i(f, g)) return !1;
      for (const g of e.names)
        if (i(f, g)) return !0;
      return !1;
    }
    function d(f) {
      const g = t;
      return f instanceof Error ? f[g(2383)] || f[g(2354)] : f;
    }
    function l() {
      console.warn(t(1267));
    }
    return e[t(2304)](e[t(1215)]()), e;
  }
  return Wx = o, Wx;
}
var ja;
function si() {
  const o = a;
  return ja || (ja = 1, function(x, t) {
    const n = o;
    t.formatArgs = r, t[n(2021)] = s, t[n(1215)] = i, t[n(1749)] = e, t[n(368)] = c(), t[n(415)] = /* @__PURE__ */ (() => {
      let d = !1;
      return () => {
        const l = B;
        !d && (d = !0, console[l(515)](l(1267)));
      };
    })(), t[n(2604)] = [n(1842), n(948), n(2585), "#0033FF", n(739), "#0066FF", n(721), n(1271), n(505), n(1169), n(1559), n(1772), n(890), n(2442), n(2671), "#3300FF", "#3333CC", "#3333FF", n(1411), "#3366FF", "#3399CC", n(1194), "#33CC00", n(968), "#33CC66", n(2481), "#33CCCC", n(619), n(2754), "#6600FF", n(651), n(1968), n(1624), n(349), "#9900CC", n(308), n(293), n(2804), n(524), n(741), n(1575), "#CC0033", n(2576), n(241), n(1321), n(2263), n(2444), "#CC3333", n(1930), n(1728), "#CC33CC", n(2370), n(1853), n(1923), n(838), n(1302), "#CCCC00", n(2660), n(1531), n(356), "#FF0066", "#FF0099", n(1613), n(664), "#FF3300", n(746), n(337), n(1838), n(1945), n(1774), n(1639), n(2597), n(440), n(1349), "#FFCC00", n(2527)];
    function e() {
      const d = n;
      if (typeof window !== d(455) && window[d(1019)] && (window[d(1019)][d(2197)] === d(1673) || window[d(1019)][d(964)])) return !0;
      if (typeof navigator !== d(455) && navigator[d(1449)] && navigator.userAgent.toLowerCase()[d(2457)](/(edge|trident)\/(\d+)/)) return !1;
      let l;
      return typeof document !== d(455) && document[d(579)] && document[d(579)][d(2652)] && document[d(579)][d(2652)][d(1451)] || typeof window < "u" && window[d(2535)] && (window[d(2535)][d(1115)] || window.console[d(907)] && window[d(2535)][d(372)]) || typeof navigator !== d(455) && navigator[d(1449)] && (l = navigator.userAgent[d(2321)]()[d(2457)](/firefox\/(\d+)/)) && parseInt(l[1], 10) >= 31 || typeof navigator !== d(455) && navigator[d(1449)] && navigator[d(1449)][d(2321)]()[d(2457)](/applewebkit\/(\d+)/);
    }
    function r(d) {
      const l = n;
      if (d[0] = (this[l(1749)] ? "%c" : "") + this[l(931)] + (this[l(1749)] ? l(2747) : " ") + d[0] + (this[l(1749)] ? l(2023) : " ") + "+" + x[l(1535)][l(1427)](this[l(1554)]), !this[l(1749)]) return;
      const f = "color: " + this[l(546)];
      d[l(295)](1, 0, f, l(953));
      let g = 0, h = 0;
      d[0][l(1936)](/%[a-zA-Z%]/g, (m) => {
        m !== "%%" && (g++, m === "%c" && (h = g));
      }), d[l(295)](h, 0, f);
    }
    t.log = console[n(1829)] || console[n(1799)] || (() => {
    });
    function s(d) {
      const l = n;
      try {
        d ? t[l(368)][l(973)](l(1829), d) : t[l(368)].removeItem(l(1829));
      } catch {
      }
    }
    function i() {
      const d = n;
      let l;
      try {
        l = t[d(368)][d(1059)]("debug") || t[d(368)][d(1059)]("DEBUG");
      } catch {
      }
      return !l && typeof process !== d(455) && d(2727) in process && (l = process[d(2727)][d(2232)]), l;
    }
    function c() {
      try {
        return localStorage;
      } catch {
      }
    }
    x[n(1535)] = ni()(t);
    const { formatters: u } = x[n(1535)];
    u.j = function(d) {
      const l = n;
      try {
        return JSON[l(555)](d);
      } catch (f) {
        return "[UnexpectedJSONParseError]: " + f[l(2354)];
      }
    };
  }(fx, fx[o(1535)])), fx[o(1535)];
}
var oi = si();
const Bn = Wn(oi);
Bn.enable("*");
function ii(o, x) {
  const t = a, n = Bn(o), e = (r, s) => async function(...i) {
    try {
      await x({ level: r, messages: i });
    } catch {
    }
  };
  return n[t(1799)] = e(t(1799)), n;
}
const ox = ii(a(1202), async ({ level: o, messages: x }) => {
  const t = a, { mcpMesh: n } = await Promise[t(2251)]()[t(2278)](() => Kc);
  await n[t(1328)]("uxp")[t(944)][t(1799)]({ level: o, messages: x });
});
globalThis.sdpppX2 = globalThis[a(2767)] || {};
const ex = globalThis[a(2767)], ci = { "preview.show": "显示预览框 ({{count}}张图片)", "gateway.select_ai_service": a(837), "provider.select.title": a(2099), "provider.comfyui.description": "自定义AI工作流引擎", "provider.replicate.description": "海量模型，稳定服务", "provider.runninghub.description": a(1497), "provider.google.description": a(976), "task.waiting_upload": a(975), "task.creating_task": a(2032), "task.running_duration": a(2586), "task.cancelled": a(1363), "task.cancel_failed": a(2142), "task.default_name": a(704), "comfy.connect": "连接", "comfy.load_failed": a(804), "comfy.loading": a(1567), "comfy.channel_connecting": a(1996), "comfy.server_reconnecting": a(1647), "comfy.version_mismatch": "Comfy侧SDPPP版本({{comfyVersion}})与插件({{pluginVersion}})不匹配，运行可能有问题", "comfy.cloud_recommend": a(2291), "comfy.your_workflows": a(245), "comfy.refresh_workflows": a(572), "comfy.queue_progress": a(1263), "comfy.save": "保存", "comfy.refresh": "刷新", "comfy.stop_cancel_all": a(1312), "comfy.stop_auto_run": a(2019), "comfy.start_auto_run": "画布变动后自动运行", "comfy.auto_run_status": a(2307), "comfy.run": "运行", "comfy.back": "返回", "comfy.uploading": a(941), "comfy.task.name": a(1893), "comfy.error.task_cancelled": a(1363), "comfy.task.processing_progress": a(919), "comfy.help_tooltip": a(490), "comfy.no_workflow_selected": a(2572), "boundary.title": "输入设置", "boundary.tooltip": a(1463), "boundary.current_canvas": a(1172), "boundary.current_layer": a(2308), "boundary.current_selection": a(1092), "boundary.set_as_canvas": a(2333), "boundary.set_as_layer": a(1756), "boundary.set_as_selection": "设为当前选区", "http.404": "SDPPP可能未安装或和插件版本不匹配 (404)", "http.401": a(1800), "http.403": "禁止访问 (403)", "http.408": "请求超时 (408)", "http.500": a(1862), "http.501": a(2717), "http.502": "网关错误 (502)", "http.503": "服务不可用 (503)", "http.504": a(647), "http.unknown": a(578), "runninghub.get_apikey": a(2080), "runninghub.apikey_placeholder": "请输入您的RunningHub API Key", "runninghub.app_id": a(2606), "runninghub.webapp_id_placeholder": a(362), "runninghub.open_app": a(2048), "runninghub.execute": "执行", "runninghub.running": a(808), "runninghub.rh_coins": a(2525), "runninghub.current_tasks": a(1391), "runninghub.help_tooltip": a(490), "runninghub.stop_all": a(328), "runninghub.status.waiting": a(1107), "runninghub.status.running": "正在运行", "runninghub.status.failed": a(656), "runninghub.status.success": a(1695), "image.auto_refetch": "自动从PS重新获取", "local_resource.selection.images": "图片", "runninghub.error.get_result_failed": a(719), "runninghub.error.task_failed": a(874), "runninghub.error.task_incomplete": a(441), "runninghub.error.account_status_http": "getAccountStatus API 调用失败 - HTTP 错误，状态: {{status}}", "runninghub.error.account_status_reason_unknown": a(2149), "runninghub.error.account_status_failed": a(2617), "runninghub.error.form_data_http": a(967), "runninghub.error.form_data_reason_unknown": a(1888), "runninghub.error.form_data_failed": "getNodes API 调用失败 - {{reason}}", "runninghub.error.node_info_missing": a(1230), "runninghub.error.run_http": a(2612), "runninghub.error.run_reason_default": a(1763), "runninghub.error.run_failed": "run API 调用失败 - {{reason}}", "runninghub.error.status_http": a(358), "runninghub.error.status_reason_unknown": "获取任务状态失败", "runninghub.error.status_failed": a(2329), "runninghub.error.outputs_http": a(2053), "runninghub.error.outputs_failed": a(1190), "runninghub.task.title": a(2550), "runninghub.error.upload_http": a(2512), "runninghub.error.upload_reason_unknown": a(1338), "runninghub.error.upload_failed": "uploadImage API 调用失败 - {{reason}}", "customapi.error.no_image_returned": a(2619), "customapi.error.openai_api": "OpenAI API 错误", "customapi.error.input_required": a(2482), "customapi.error.generation_failed": "生成失败", "customapi.task.name.google": a(2011), "customapi.task.name.openai": "OpenAI - 图片编辑", "customapi.error.unsupported_image_input": a(336), "replicate.get_apikey": a(1687), "replicate.apikey_placeholder": a(402), "replicate.execute": "执行", "replicate.model_placeholder": "粘贴你的模型名称", "replicate.help_tooltip": a(490), "replicate.loading": "加载中...", "replicate.running": a(808), "replicate.stop": "停止", "liblib.get_apikey": "如何获取APIKey和API Secret", "liblib.execute": "执行", "common.close": "关闭", "common.save": "保存", "common.save_and_run": "保存并立即执行", "common.loading": a(2751), "common.error": "错误", "common.error.unknown": a(2114), "common.error.task_creation_aborted": a(751), "common.error.status_check_aborted": a(1031), "common.error.result_fetch_aborted": a(2357), "common.error.upload_aborted": "上传已中止", "common.success": "成功", "common.failed": "失败", "common.generating": a(2499), "common.cancel": "取消", "common.confirm": "确认", "common.options": "选项", "common.options_separator": a(357), "upload_pass.error.unsupported_type": a(359), "upload_pass.error.uploader_missing": a(419), webviewInForeground: a(1413), webviewInForeground2: a(2778), "auth.login_success": "登录成功", "auth.username_label": a(387), "auth.email_label": "邮箱: {{email}}", "auth.logout": "退出登录", "auth.login_required": "请登陆后使用插件", "image.send.select_position": a(864), "image.send.sending": a(2373), "image.layer.new": a(2670), "image.layer.current": a(2308), "image.layer.fit_to_current": a(1404), "image.layer.fit_to_selection": a(1877), "image.layer.fit_to_canvas": a(2117), "image.shortcut_auth_required": a(2438), "image.shortcut_focus_required": "快捷键选图功能仅在插件窗口聚焦时可用", "image.get.select_image": a(682), "image.get.entire_canvas": "整个画布", "image.get.canvas": "画布", "image.get.current_layer": a(2308), "image.get.current_layer_bounds": a(1170), "image.get.selection_bounds": a(1397), "image.get.canvas_bounds": "画布范围", "image.crop_by_selection": "按选区裁剪", "image.limit_size": "限制图片尺寸", "image.crop.none": "不裁剪", "image.crop.inpaint": "反向裁剪(Inpaint)", "image.crop.outpaint": "正向裁剪(Outpaint)", "image.send_all": a(1116), "image.save_all": a(2343), "image.save_current": a(2594), "image.delete_current": a(1179), "image.more_actions": a(481), "image.jump_to_last": a(1210), "image.clear_all": a(2755), "image.send_to_ps": a(551), "image.download": "下载", "image.copy": "复制", "image.sending": a(384), "image.sending_all": a(353), "mask.get.select_mask": a(1217), "mask.selection": "选区", "mask.current_layer_bounds": "当前图层范围", "mask.all": "全部", "mask.selection_exclude": a(562), "mask.current_layer_exclude": a(2408), "mask.empty": "空", "widgetable.photoshop.deprecated_node": a(405), "work_boundary.error.empty_selection_mask": "选区遮罩为空", "work_boundary.error.primary_resource_missing": a(2564), "work_boundary.error.mask_resource_missing": a(2358), "work_boundary.error.mask_apply_empty": a(1366), "document {{0}} not found": a(1474), "create document for preview": "创建预览文档", "resize document for preview": a(2026), "create document for sent images": "给发送的图片创建文档", "show sent images": a(1112), "create layer failed": a(783), "layer not found {{0}}": "找不到图层: {{0}}", "layer not found: {{0}}": a(2425), "layer {{0}} is not a group": a(1905), "no linked layer for {{0}}": a(618), "no first related layer in {{0}}": a(1246), "merge group failed": "合并组失败", "get content of layer {{0}}": a(1692), "get layer info": a(754), "get_layer_info: layer_identify required": a(1739), "get pixel of {{0}} failed": a(599), "get selection failed": a(2791), "invalid name: {{0}}": a(2400), "desire bounds is null": a(730), "intersect or scaledDesire is null": a(399), 'only layer kind "TEXT" is supported, invalid layer: {{0}}': a(590), "select layer": "sdppp 选中图层", "run Photoshop Action": a(1050), "Action {{0}} not found": a(2593), "Action set {{0}} not found": a(1253), "set text to layer": a(1625), "ComfyManager not found, cannot reboot": "Comfy Manager未安装，无法重启", "Failed to reboot ComfyUI": "重启ComfyUI失败", "image.upload.from_canvas": "画布", "image.upload.from_curlayer": a(2308), "image.upload.from_selection": "选区", "image.upload.from_harddisk": "磁盘", "image.upload.clear": "清空", "image.upload.uploading": "上传中，如果图片过大，可能会卡顿...", "image.upload.no_images": a(1586), "image.upload.error": a(1462), "image.upload.tooltip.more_options_hint": "+Shift 调整更多选项；Ctrl 单次获取。", "image.upload.tooltip.alt.crop": a(631), "image.upload.tooltip.alt.reverse": a(1192), "image.upload.tooltip.image.canvas": a(2385), "image.upload.tooltip.image.curlayer": a(1645), "image.upload.tooltip.mask.curlayer": a(2017), "image.upload.tooltip.mask.selection": "从 选区 获取遮罩", "image.upload.tooltip.mask.canvas": "从 画布 获取遮罩", "image.upload.tooltip.cut_action": `获取图像 &
裁剪选区遮罩`, "image.upload.tooltip.scan_action": a(376), "image.upload.tooltip.autosync.on": a(2075), "image.upload.tooltip.autosync.off": "自动同步: 关闭", "image.upload.autosync.fetching": a(1569), "image.upload.tooltip.current.canvas": "当前选项：画布", "image.upload.tooltip.current.layer": a(1467), "image.upload.tooltip.current.layer_named": a(2748), "image.upload.tooltip.current.file": "当前选项：文件", "image.upload.retry": "重试", "image.pack.local.button": a(726), "image.pack.local.empty": a(1586), "image.auto_send_enabled": a(1779), "image.auto_send_disabled": a(2554), "image.upload.primary.auto": a(1456), "image.upload.primary.manual": a(2669), "image.upload.primary.hint": "该节点默认继承当前图层与遮罩", "image.upload.primary.cut": "裁剪", "image.upload.primary.scan": "扫描", "image.upload.primary.hint.line1": "本节点默认继承:", "image.upload.primary.hint.line2": "主图", "workflow.output.destination.title": a(1546), "workflow.output.destination.canvas": "全图", "image.upload.primary.advanced": a(1064), "image.upload.primary.advanced.modify": "修改", "image.upload.primary.advanced.reset": "重置", "image.upload.primary.advanced.local_file": a(1473), "image.upload.primary.advanced.content.canvas": "画布", "image.upload.primary.advanced.content.curlayer": a(2308), "image.upload.primary.advanced.content.selection": "选区", "image.upload.primary.advanced.boundary.canvas": a(2211), "image.upload.primary.advanced.boundary.curlayer": a(1343), "image.upload.primary.advanced.boundary.selection": a(588), "image.upload.primary.advanced.boundary.primary": a(1844), "image.upload.source.file.tooltip": a(2443), "image.upload.source.layer.tooltip": "使用当前图层", "image.upload.source.canvas.tooltip": a(2068), "image.upload.dropHint": a(2391), "image.upload.status.layer.short_named": "图层 {{layerName}}", "image.upload.status.layer.short": "图层", "image.upload.status.file.short": a(1063), "image.upload.status.canvas.short": "画布", "image.upload.mask.button": a(708), "image.upload.mask.selection": a(708), "image.upload.mask.layer": "图层遮罩", "image.upload.remove_slot": a(1010), "image.upload.add_slot": "新增槽位", "video.local.button": a(582), "video.local.empty": a(1880), "video.local.remove": a(1540), "source.source": "来源", "source.content": "内容", "source.boundary": "范围", "source.mask": "遮罩", "source.disk": "磁盘", "source.remote": "远端", "source.unknown": "未知", "source.ps_image": a(1655), "source.ps_mask": "PS遮罩", "source.canvas": "整个画布", "source.current_layer": "当前图层", "source.selection": "选区", "source.quality_percent": a(1623), "source.crop.positive": a(1204), "source.crop.negative": a(790), "source.reverse": "反转", "send_images.create_document": a(688), "send_images.create_document_failed": "创建文档失败", "photoshop.no_active_document": a(1044), "photoshop.rectangle_coordinates_required": a(1599), "photoshop.create_guide_frame": "创建参考线框架", "photoshop.clear_guide_frame": a(1247), "photoshop.invalid_action": "无效操作: {{action}}", "photoshop.file_not_found": a(1992), "photoshop.failed_to_open_file_as_document": "无法将文件作为文档打开: {{path}}", "photoshop.invalid_boundary": a(1102), "photoshop.failed_to_open_image_file": "无法打开图像文件: {{error}}", "photoshop.open_images_from_file": "从文件打开图像", "photoshop.failed_to_create_document_from_file": a(731), "google.field.image_input": a(2089), "google.field.prompt": a(374), "google.field.batch_count": a(1290), "google.field.images_per_batch": a(1266), "google.status.success": "成功", "google.status.failed": "失败", "google.status.generating": "生成中", "google.apikey_placeholder": "请输入您的 Google API Key", "google.baseurl_placeholder": "基础 URL", "google.get_apikey": a(1279), "google.help_tooltip": a(1164), "google.model_name": a(243), "google.model_label": "模型", "google.model_placeholder": "选择模型", "google.stop": "停止", "google.loading": a(2751), "google.generating": a(2499), "google.generate": "生成", "image.auto_toggle": "自动", "image.import_as_smartobject": "作为智能对象导入", "image.import_as_newdoc": a(2183), "image.boundary": "边界", "image.import_tip": a(1904), "auth.guest_login_success": "访客登录成功", "boundary.canvas": "画布", "boundary.select_boundary": "选择边界", "boundary.selection": "选区", "boundary.max_size": a(1915), "boundary.max_size_error": "请输入大于 0 的像素值", "boundary.max_size_hint": "留空表示不限", "boundary.max_size_placeholder": "留空表示不限", "boundary.no_limit": "不限", "boundary.image_quality": a(2431), "boundary.image_quality_required": a(2528), "boundary.image_quality_range": "范围 1-100", "boundary.preview_main_image": a(1517), "boundary.preview_select": a(2159), "boundary.preview_alt": a(904), "boundary.preview_placeholder": a(2441), "boundary.settings": a(2123), "convert widget {0} failed:": a(2636), "document {0} not found": a(2689), "image.document.new": "新建文档", "image.layer.smart_object": a(2136), "layer not found {0}": a(1981), "photoshop.invalid_boundary_type": a(774), "photoshop.no_active_layer": a(2341), "dialog.image_source.title": a(1580), "dialog.image_source.primary_canvas": a(1768), "dialog.image_source.primary_curlayer": a(1325), "dialog.image_source.canvas_canvas": a(672), "dialog.image_source.canvas_curlayer": a(646), "dialog.image_source.curlayer_canvas": a(690), "dialog.image_source.curlayer_curlayer": "以当前图层边界获取当前图层", "dialog.image_source.local_file": a(1473), "dialog.simple_source.title": a(2595), "dialog.simple_source.canvas": "画布", "dialog.simple_source.current_layer": a(2308), "dialog.simple_source.local_file": a(709), "dialog.simple_source.no_active_layer": a(297), "dialog.simple_source.pick_error": a(1114) }, ui = { "preview.show": a(1585), "gateway.select_ai_service": "Please select AI service", "provider.select.title": a(2361), "provider.comfyui.description": a(521), "provider.replicate.description": a(743), "provider.runninghub.description": "Model with affordable price, abundant community applications", "provider.google.description": a(1813), "task.waiting_upload": "Waiting for image upload...", "task.creating_task": "Creating task...", "task.running_duration": "Running for {{duration}} secs, {{message}}", "task.cancelled": a(1472), "task.cancel_failed": "Task cancel failed: {{error}}", "task.default_name": a(433), "comfy.connect": a(1715), "comfy.load_failed": a(1836), "comfy.loading": a(231), "comfy.channel_connecting": a(1963), "comfy.server_reconnecting": a(1003), "comfy.version_mismatch": a(1012), "comfy.cloud_recommend": "Cloud:", "comfy.your_workflows": "Your Workflows", "comfy.refresh_workflows": a(2047), "comfy.queue_progress": "(Queue:{{queueSize}}) {{progress}}% {{executingNodeTitle}}...", "comfy.save": "Save", "comfy.refresh": "Refresh", "comfy.stop_cancel_all": a(1775), "comfy.stop_auto_run": a(863), "comfy.start_auto_run": a(482), "comfy.auto_run_status": "Auto-run workflow after changes...", "comfy.run": "Run", "comfy.back": "Back", "comfy.uploading": "Uploading...", "comfy.task.name": a(1893), "comfy.error.task_cancelled": a(1472), "comfy.task.processing_progress": "Processing {{processed}}/{{total}}", "comfy.help_tooltip": a(2157), "comfy.no_workflow_selected": a(2465), "boundary.title": a(1214), "boundary.tooltip": a(2513), "boundary.current_canvas": a(2632), "boundary.current_layer": "Current Layer", "boundary.current_selection": a(1021), "boundary.set_as_canvas": "Set as Canvas", "boundary.set_as_layer": a(1345), "boundary.set_as_selection": a(989), "http.404": "SDPPP may not be installed or version mismatch (404)", "http.401": a(396), "http.403": "Forbidden (403)", "http.408": "Request timeout (408)", "http.500": a(1674), "http.501": a(2728), "http.502": a(1324), "http.503": "Service unavailable (503)", "http.504": a(1090), "http.unknown": a(1487), "runninghub.get_apikey": a(2213), "runninghub.apikey_placeholder": "Enter your RunningHub API Key", "runninghub.app_id": a(650), "runninghub.webapp_id_placeholder": a(1648), "runninghub.open_app": a(2270), "runninghub.execute": "Execute", "runninghub.running": a(446), "runninghub.rh_coins": a(1337), "runninghub.current_tasks": a(1630), "runninghub.help_tooltip": a(2157), "runninghub.stop_all": a(1199), "runninghub.status.waiting": a(1949), "runninghub.status.running": a(1149), "runninghub.status.failed": a(966), "runninghub.status.success": a(2296), "image.auto_refetch": a(2188), "local_resource.selection.images": a(1792), "runninghub.error.get_result_failed": "Failed to get result: {{error}}", "runninghub.error.task_failed": "Task execution failed: {{error}}", "runninghub.error.task_incomplete": a(1543), "runninghub.error.account_status_http": a(2522), "runninghub.error.account_status_reason_unknown": "Failed to fetch account status", "runninghub.error.account_status_failed": "getAccountStatus API failed - {{reason}}", "runninghub.error.form_data_http": "getNodes API failed - HTTP error! status: {{status}}", "runninghub.error.form_data_reason_unknown": "Failed to fetch form data", "runninghub.error.form_data_failed": a(817), "runninghub.error.node_info_missing": a(319), "runninghub.error.run_http": a(423), "runninghub.error.run_reason_default": a(252), "runninghub.error.run_failed": a(1488), "runninghub.error.status_http": a(2766), "runninghub.error.status_reason_unknown": "Failed to get task status", "runninghub.error.status_failed": a(994), "runninghub.error.outputs_http": a(603), "runninghub.error.outputs_failed": a(1734), "runninghub.task.title": a(2550), "runninghub.error.upload_http": a(604), "runninghub.error.upload_reason_unknown": a(1884), "runninghub.error.upload_failed": "uploadImage API failed - {{reason}}", "customapi.error.no_image_returned": a(2685), "customapi.error.openai_api": a(1205), "customapi.error.input_required": a(1316), "customapi.error.generation_failed": a(2366), "customapi.task.name.google": a(2464), "customapi.task.name.openai": a(1378), "customapi.error.unsupported_image_input": a(2583), "replicate.get_apikey": "How to get APIKey", "replicate.apikey_placeholder": a(227), "replicate.execute": a(2790), "replicate.model_placeholder": a(755), "replicate.help_tooltip": a(2157), "replicate.loading": a(237), "replicate.running": a(446), "replicate.stop": a(234), "liblib.get_apikey": a(934), "liblib.execute": a(2790), "common.close": a(1438), "common.save": a(822), "common.save_and_run": a(2805), "common.loading": a(237), "common.error": "Error", "common.error.unknown": "Unknown error", "common.error.task_creation_aborted": a(2056), "common.error.status_check_aborted": "Status check aborted", "common.error.result_fetch_aborted": a(775), "common.error.upload_aborted": a(1834), "common.success": a(2296), "common.failed": "Failed", "common.generating": "Generating...", "common.cancel": a(2460), "common.confirm": a(1183), "common.options": a(1334), "common.options_separator": "=== Options ===", "upload_pass.error.unsupported_type": a(1420), "upload_pass.error.uploader_missing": "Uploader not set", webviewInForeground: a(1493), webviewInForeground2: "click to restore", "auth.login_success": a(2676), "auth.username_label": a(1288), "auth.email_label": a(2144), "auth.logout": a(638), "auth.login_required": "Please login to use the plugin", "image.send.select_position": "Please select the position to send image", "image.send.sending": a(1082), "image.layer.new": a(1538), "image.layer.current": a(1095), "image.layer.fit_to_current": a(2077), "image.layer.fit_to_selection": a(1934), "image.layer.fit_to_canvas": a(2673), "image.shortcut_auth_required": a(1571), "image.shortcut_focus_required": "Plugin window focused required to use keyboard shortcut", "image.get.select_image": "Please select the image to get", "image.get.entire_canvas": a(2632), "image.get.canvas": a(1403), "image.get.current_layer": a(1095), "image.get.current_layer_bounds": "Current layer bounds only", "image.get.selection_bounds": a(373), "image.get.canvas_bounds": a(1917), "image.crop_by_selection": a(1913), "image.limit_size": a(253), "image.crop.none": a(2575), "image.crop.inpaint": a(2622), "image.crop.outpaint": a(1771), "image.send_all": a(2691), "image.save_all": a(2719), "image.save_current": a(839), "image.delete_current": a(2335), "image.more_actions": a(1384), "image.jump_to_last": "Jump to last", "image.clear_all": "Clear all", "image.send_to_ps": a(2163), "image.download": a(1738), "image.copy": "Copy", "image.sending": "Sending...", "image.sending_all": a(2558), "mask.get.select_mask": "Please select the mask to get", "mask.selection": a(536), "mask.current_layer_bounds": a(1938), "mask.all": a(1252), "mask.selection_exclude": a(1416), "mask.current_layer_exclude": a(892), "mask.empty": "Empty", "widgetable.photoshop.deprecated_node": a(296), "work_boundary.error.empty_selection_mask": "Empty selection mask", "work_boundary.error.primary_resource_missing": a(895), "work_boundary.error.mask_resource_missing": a(1274), "work_boundary.error.mask_apply_empty": "Mask apply returned empty resource", "document {{0}} not found": a(925), "create document for preview": a(501), "resize document for preview": a(2160), "create document for sent images": "Create document for sent images", "show sent images": a(2388), "create layer failed": a(1821), "layer not found {{0}}": a(794), "layer not found: {{0}}": a(2764), "layer {{0}} is not a group": a(1293), "no linked layer for {{0}}": a(1007), "no first related layer in {{0}}": a(1727), "merge group failed": a(1444), "get content of layer {{0}}": a(2731), "get layer info": "Get layer info", "get_layer_info: layer_identify required": a(1303), "get pixel of {{0}} failed": "Get pixel of {{0}} failed", "get selection failed": a(571), "invalid name: {{0}}": a(1308), "desire bounds is null": a(640), "intersect or scaledDesire is null": "Intersect or scaledDesire is null", 'only layer kind "TEXT" is supported, invalid layer: {{0}}': a(1255), "select layer": a(1388), "run Photoshop Action": "Run Photoshop Action", "Action {{0}} not found": a(2360), "Action set {{0}} not found": "Action set {{0}} was not found", "set text to layer": "Set text to layer", "ComfyManager not found, cannot reboot": a(1299), "Failed to reboot ComfyUI": a(820), "image.upload.from_canvas": a(1403), "image.upload.from_curlayer": a(1095), "image.upload.from_selection": "Selection", "image.upload.from_harddisk": "Disk", "image.upload.clear": a(1978), "image.upload.uploading": a(2253), "image.upload.no_images": a(508), "image.upload.error": a(1578), "image.upload.tooltip.alt.crop": a(1227), "image.upload.tooltip.alt.reverse": "+Alt reversed mask", "image.upload.tooltip.image.canvas": a(1769), "image.upload.tooltip.image.curlayer": "Get image from Current Layer", "image.upload.tooltip.mask.canvas": a(987), "image.upload.tooltip.mask.curlayer": "Get mask from Current Layer", "image.upload.tooltip.mask.selection": a(369), "image.upload.tooltip.cut_action": `Get image &
Crop selection mask`, "image.upload.tooltip.scan_action": a(607), "image.upload.tooltip.autosync.on": a(1415), "image.upload.tooltip.autosync.off": a(1163), "image.upload.tooltip.more_options_hint": a(1352), "image.upload.tooltip.current.canvas": a(792), "image.upload.tooltip.current.layer": "Current selection: Layer", "image.upload.tooltip.current.layer_named": a(630), "image.upload.tooltip.current.file": a(1519), "image.upload.autosync.fetching": a(1502), "image.upload.retry": a(1424), "image.pack.local.button": a(2177), "image.pack.local.empty": a(1032), "image.auto_send_enabled": a(633), "image.auto_send_disabled": "Auto send disabled", "image.upload.primary.auto": a(1502), "image.upload.primary.manual": a(340), "image.upload.primary.cut": a(430), "image.upload.primary.scan": a(2646), "image.upload.primary.hint": "This node defaults to current layer + mask", "image.upload.primary.hint.line1": "Defaults using", "image.upload.primary.hint.line2": "Main Image", "workflow.output.destination.title": a(1101), "workflow.output.destination.canvas": a(1108), "image.upload.primary.advanced": "Advanced selection", "image.upload.primary.advanced.modify": a(1566), "image.upload.primary.advanced.reset": a(1052), "image.upload.primary.advanced.local_file": a(1654), "image.upload.primary.advanced.content.canvas": a(1403), "image.upload.primary.advanced.content.curlayer": "Current layer", "image.upload.primary.advanced.content.selection": a(536), "image.upload.primary.advanced.boundary.canvas": a(351), "image.upload.primary.advanced.boundary.curlayer": a(506), "image.upload.primary.advanced.boundary.selection": a(1160), "image.upload.primary.advanced.boundary.primary": "Primary boundary", "image.upload.source.file.tooltip": a(1134), "image.upload.source.layer.tooltip": a(2348), "image.upload.source.canvas.tooltip": a(2640), "image.upload.dropHint": a(1581), "image.upload.status.layer.short_named": "Layer {{layerName}}", "image.upload.status.layer.short": a(1236), "image.upload.status.file.short": a(1654), "image.upload.status.canvas.short": a(1403), "image.upload.mask.button": a(2287), "image.upload.mask.selection": a(2287), "image.upload.mask.layer": a(1553), "image.upload.remove_slot": a(2472), "image.upload.add_slot": a(1751), "video.local.button": a(2051), "video.local.empty": a(2437), "video.local.remove": a(1859), "source.source": a(1958), "source.content": a(655), "source.boundary": a(1103), "source.mask": a(1696), "source.disk": a(1698), "source.remote": a(1229), "source.unknown": "Unknown", "source.ps_image": "PS", "source.ps_mask": "PS", "source.canvas": a(1403), "source.current_layer": a(2423), "source.selection": a(536), "source.quality_percent": a(502), "source.crop.positive": a(695), "source.crop.negative": a(2722), "source.reverse": a(1966), "send_images.create_document": a(1929), "send_images.create_document_failed": "Create document failed", "photoshop.no_active_document": "No active document", "photoshop.rectangle_coordinates_required": a(2726), "photoshop.create_guide_frame": "Create guide frame", "photoshop.clear_guide_frame": a(2616), "photoshop.invalid_action": a(778), "photoshop.file_not_found": a(1389), "photoshop.failed_to_open_file_as_document": "Failed to open file as document: {{path}}", "photoshop.invalid_boundary": "Invalid boundary: left must be less than right, top must be less than bottom", "photoshop.failed_to_open_image_file": a(370), "photoshop.open_images_from_file": a(2562), "photoshop.failed_to_create_document_from_file": a(1596), "google.field.image_input": a(1793), "google.field.prompt": a(1887), "google.field.batch_count": a(1310), "google.field.images_per_batch": a(1693), "google.status.success": a(2296), "google.status.failed": a(966), "google.status.generating": a(533), "google.apikey_placeholder": a(1157), "google.get_apikey": a(1918), "google.baseurl_placeholder": a(1521), "google.help_tooltip": a(916), "google.model_name": a(2406), "google.model_label": a(483), "google.model_placeholder": a(729), "google.stop": a(234), "google.loading": "Loading...", "google.generating": a(1890), "google.generate": "Generate", "image.auto_toggle": a(2178), "image.import_as_smartobject": a(1845), "image.import_as_newdoc": a(2407), "image.boundary": "Boundary", "image.import_tip": "Hold Shift key to import as new document", "auth.guest_login_success": a(1445), "boundary.canvas": "Canvas", "boundary.select_boundary": a(239), "boundary.selection": a(536), "boundary.max_size": a(1940), "boundary.max_size_error": a(2510), "boundary.max_size_hint": a(1795), "boundary.max_size_placeholder": a(1795), "boundary.no_limit": a(2259), "boundary.image_quality": a(787), "boundary.image_quality_required": a(1525), "boundary.image_quality_range": a(2109), "boundary.preview_main_image": a(1919), "boundary.preview_select": a(1584), "boundary.preview_alt": a(1275), "boundary.preview_placeholder": a(280), "boundary.settings": a(2349), "convert widget {0} failed:": a(467), "document {0} not found": a(611), "image.document.new": a(1191), "image.layer.smart_object": a(2744), "layer not found {0}": a(1839), "photoshop.invalid_boundary_type": a(1782), "photoshop.no_active_layer": a(1239), "dialog.image_source.title": "Select Image Source", "dialog.image_source.primary_canvas": "Fetch canvas with primary boundary", "dialog.image_source.primary_curlayer": a(2434), "dialog.image_source.canvas_canvas": "Fetch canvas with canvas boundary", "dialog.image_source.canvas_curlayer": a(416), "dialog.image_source.curlayer_canvas": a(1181), "dialog.image_source.curlayer_curlayer": "Fetch current layer with current-layer boundary", "dialog.image_source.local_file": "Import from disk", "dialog.simple_source.title": a(642), "dialog.simple_source.canvas": a(1403), "dialog.simple_source.current_layer": "Current Layer", "dialog.simple_source.local_file": a(534), "dialog.simple_source.no_active_layer": a(2715), "dialog.simple_source.pick_error": a(2657) }, g0 = (o) => typeof o === a(1516), Je = () => {
  let o, x;
  const t = new Promise((n, e) => {
    o = n, x = e;
  });
  return t.resolve = o, t.reject = x, t;
}, La = (o) => o == null ? "" : "" + o, di = (o, x, t) => {
  o[a(641)]((e) => {
    x[e] && (t[e] = x[e]);
  });
}, li = /###/g, Ma = (o) => o && o[a(1817)]("###") > -1 ? o.replace(li, ".") : o, $a = (o) => !o || g0(o), xx = (o, x, t) => {
  const n = a, e = g0(x) ? x[n(2352)](".") : x;
  let r = 0;
  for (; r < e[n(2463)] - 1; ) {
    if ($a(o)) return {};
    const s = Ma(e[r]);
    !o[s] && t && (o[s] = new t()), Object[n(1060)][n(1995)][n(1850)](o, s) ? o = o[s] : o = {}, ++r;
  }
  return $a(o) ? {} : { obj: o, k: Ma(e[r]) };
}, za = (o, x, t) => {
  const n = a, { obj: e, k: r } = xx(o, x, Object);
  if (e !== void 0 || x[n(2463)] === 1) {
    e[r] = t;
    return;
  }
  let s = x[x[n(2463)] - 1], i = x[n(600)](0, x[n(2463)] - 1), c = xx(o, i, Object);
  for (; c[n(2275)] === void 0 && i[n(2463)]; )
    s = i[i[n(2463)] - 1] + "." + s, i = i.slice(0, i.length - 1), c = xx(o, i, Object), c != null && c.obj && typeof c[n(2275)][c.k + "." + s] !== n(455) && (c[n(2275)] = void 0);
  c[n(2275)][c.k + "." + s] = t;
}, fi = (o, x, t, n) => {
  const e = a, { obj: r, k: s } = xx(o, x, Object);
  r[s] = r[s] || [], r[s][e(1851)](t);
}, Rx = (o, x) => {
  const t = a, { obj: n, k: e } = xx(o, x);
  if (n && Object[t(1060)][t(1995)][t(1850)](n, e))
    return n[e];
}, hi = (o, x, t) => {
  const n = Rx(o, t);
  return n !== void 0 ? n : Rx(x, t);
}, Zn = (o, x, t) => {
  const n = a;
  for (const e in x)
    e !== "__proto__" && e !== n(1789) && (e in o ? g0(o[e]) || o[e] instanceof String || g0(x[e]) || x[e] instanceof String ? t && (o[e] = x[e]) : Zn(o[e], x[e], t) : o[e] = x[e]);
  return o;
}, He = (o) => o[a(1936)](/[\-\[\]\/\{\}\(\)\*\+\?\.\\\^\$\|]/g, a(760));
var pi = { "&": a(2552), "<": a(2750), ">": "&gt;", '"': a(2282), "'": "&#39;", "/": a(703) };
const mi = (o) => g0(o) ? o.replace(/[&<>"'\/]/g, (x) => pi[x]) : o;
class gi {
  constructor(x) {
    const t = a;
    this[t(909)] = x, this[t(620)] = /* @__PURE__ */ new Map(), this.regExpQueue = [];
  }
  [a(2409)](x) {
    const t = a, n = this[t(620)][t(635)](x);
    if (n !== void 0) return n;
    const e = new RegExp(x);
    return this.regExpQueue[t(2463)] === this[t(909)] && this[t(620)][t(1707)](this[t(1840)].shift()), this[t(620)][t(1527)](x, e), this[t(1840)][t(1851)](x), e;
  }
}
const bi = [" ", ",", "?", "!", ";"], yi = new gi(20), vi = (o, x, t) => {
  const n = a;
  x = x || "", t = t || "";
  const e = bi[n(558)]((i) => x[n(1817)](i) < 0 && t[n(1817)](i) < 0);
  if (e[n(2463)] === 0) return !0;
  const r = yi[n(2409)]("(" + e[n(698)]((i) => i === "?" ? "\\?" : i)[n(1483)]("|") + ")");
  let s = !r[n(2734)](o);
  if (!s) {
    const i = o[n(1817)](t);
    i > 0 && !r[n(2734)](o[n(248)](0, i)) && (s = !0);
  }
  return s;
}, Zt = (o, x, t = ".") => {
  const n = a;
  if (!o) return;
  if (o[x])
    return Object[n(1060)][n(1995)].call(o, x) ? o[x] : void 0;
  const e = x[n(2352)](t);
  let r = o;
  for (let s = 0; s < e[n(2463)]; ) {
    if (!r || typeof r !== n(1985)) return;
    let i, c = "";
    for (let u = s; u < e.length; ++u)
      if (u !== s && (c += t), c += e[u], i = r[c], i !== void 0) {
        if (["string", n(2601), n(598)][n(1817)](typeof i) > -1 && u < e[n(2463)] - 1) continue;
        s += u - s + 1;
        break;
      }
    r = i;
  }
  return r;
}, nx = (o) => o == null ? void 0 : o[a(1936)]("_", "-"), wi = { type: "logger", log(o) {
  this[a(274)]("log", o);
}, warn(o) {
  this.output("warn", o);
}, error(o) {
  const x = a;
  this[x(274)](x(443), o);
}, output(o, x) {
  var n, e;
  const t = a;
  (e = (n = console == null ? void 0 : console[o]) == null ? void 0 : n[t(2135)]) == null || e.call(n, console, x);
} };
class Cx {
  constructor(x, t = {}) {
    this[a(2226)](x, t);
  }
  [a(2226)](x, t = {}) {
    const n = a;
    this[n(1791)] = t[n(1791)] || n(2192), this[n(1814)] = x || wi, this.options = t, this[n(1829)] = t[n(1829)];
  }
  [a(1799)](...x) {
    const t = a;
    return this[t(788)](x, t(1799), "", !0);
  }
  [a(515)](...x) {
    const t = a;
    return this.forward(x, t(515), "", !0);
  }
  [a(443)](...x) {
    const t = a;
    return this[t(788)](x, t(443), "");
  }
  [a(1701)](...x) {
    const t = a;
    return this[t(788)](x, t(515), t(1977), !0);
  }
  [a(788)](x, t, n, e) {
    return e && !this.debug ? null : (g0(x[0]) && (x[0] = "" + n + this.prefix + " " + x[0]), this.logger[t](x));
  }
  create(x) {
    const t = a;
    return new Cx(this[t(1814)], { prefix: this.prefix + ":" + x + ":", ...this[t(1882)] });
  }
  [a(273)](x) {
    const t = a;
    return x = x || this.options, x[t(1791)] = x[t(1791)] || this[t(1791)], new Cx(this[t(1814)], x);
  }
}
var fe = new Cx();
class Tx {
  constructor() {
    const x = a;
    this[x(2807)] = {};
  }
  on(x, t) {
    const n = a;
    return x[n(2352)](" ")[n(641)]((e) => {
      const r = n;
      this[r(2807)][e] || (this[r(2807)][e] = /* @__PURE__ */ new Map());
      const s = this[r(2807)][e][r(635)](t) || 0;
      this[r(2807)][e][r(1527)](t, s + 1);
    }), this;
  }
  [a(2332)](x, t) {
    const n = a;
    if (this[n(2807)][x]) {
      if (!t) {
        delete this[n(2807)][x];
        return;
      }
      this[n(2807)][x][n(1707)](t);
    }
  }
  emit(x, ...t) {
    const n = a;
    this.observers[x] && Array[n(1038)](this.observers[x][n(1144)]())[n(641)](([r, s]) => {
      for (let i = 0; i < s; i++)
        r(...t);
    }), this[n(2807)]["*"] && Array[n(1038)](this.observers["*"][n(1144)]())[n(641)](([r, s]) => {
      const i = n;
      for (let c = 0; c < s; c++)
        r[i(2135)](r, [x, ...t]);
    });
  }
}
class Ua extends Tx {
  constructor(x, t = { ns: [a(893)], defaultNS: a(893) }) {
    const n = a;
    super(), this[n(2743)] = x || {}, this[n(1882)] = t, this[n(1882)][n(2607)] === void 0 && (this[n(1882)][n(2607)] = "."), this[n(1882)].ignoreJSONStructure === void 0 && (this[n(1882)][n(1997)] = !0);
  }
  addNamespaces(x) {
    const t = a;
    this[t(1882)].ns[t(1817)](x) < 0 && this.options.ns[t(1851)](x);
  }
  removeNamespaces(x) {
    const t = a, n = this[t(1882)].ns.indexOf(x);
    n > -1 && this[t(1882)].ns.splice(n, 1);
  }
  getResource(x, t, n, e = {}) {
    var d, l;
    const r = a, s = e.keySeparator !== void 0 ? e[r(2607)] : this[r(1882)][r(2607)], i = e[r(1997)] !== void 0 ? e[r(1997)] : this[r(1882)][r(1997)];
    let c;
    x.indexOf(".") > -1 ? c = x[r(2352)](".") : (c = [x, t], n && (Array[r(1155)](n) ? c[r(1851)](...n) : g0(n) && s ? c[r(1851)](...n[r(2352)](s)) : c.push(n)));
    const u = Rx(this[r(2743)], c);
    return !u && !t && !n && x.indexOf(".") > -1 && (x = c[0], t = c[1], n = c[r(600)](2).join(".")), u || !i || !g0(n) ? u : Zt((l = (d = this[r(2743)]) == null ? void 0 : d[x]) == null ? void 0 : l[t], n, s);
  }
  [a(322)](x, t, n, e, r = { silent: !1 }) {
    const s = a, i = r[s(2607)] !== void 0 ? r.keySeparator : this[s(1882)][s(2607)];
    let c = [x, t];
    n && (c = c[s(329)](i ? n[s(2352)](i) : n)), x[s(1817)](".") > -1 && (c = x[s(2352)]("."), e = t, t = c[1]), this[s(1984)](t), za(this[s(2743)], c, e), r[s(2314)] || this[s(2746)](s(2365), x, t, n, e);
  }
  addResources(x, t, n, e = { silent: !1 }) {
    const r = a;
    for (const s in n)
      (g0(n[s]) || Array[r(1155)](n[s])) && this.addResource(x, t, s, n[s], { silent: !0 });
    e[r(2314)] || this[r(2746)](r(2365), x, t, n);
  }
  [a(798)](x, t, n, e, r, s = { silent: !1, skipCopy: !1 }) {
    const i = a;
    let c = [x, t];
    x[i(1817)](".") > -1 && (c = x.split("."), e = n, n = t, t = c[1]), this.addNamespaces(t);
    let u = Rx(this[i(2743)], c) || {};
    s[i(1418)] || (n = JSON[i(1383)](JSON[i(555)](n))), e ? Zn(u, n, r) : u = { ...u, ...n }, za(this.data, c, u), s.silent || this.emit(i(2365), x, t, n);
  }
  [a(1861)](x, t) {
    const n = a;
    this.hasResourceBundle(x, t) && delete this.data[x][t], this.removeNamespaces(t), this[n(2746)](n(1721), x, t);
  }
  hasResourceBundle(x, t) {
    return this[a(2152)](x, t) !== void 0;
  }
  [a(1106)](x, t) {
    const n = a;
    return t || (t = this[n(1882)].defaultNS), this[n(2152)](x, t);
  }
  [a(2166)](x) {
    return this[a(2743)][x];
  }
  [a(1201)](x) {
    const t = a, n = this[t(2166)](x);
    return !!(n && Object[t(1448)](n) || [])[t(2450)]((r) => n[r] && Object[t(1448)](n[r])[t(2463)] > 0);
  }
  [a(780)]() {
    return this.data;
  }
}
var Kn = { processors: {}, addPostProcessor(o) {
  const x = a;
  this[x(634)][o[x(2796)]] = o;
}, handle(o, x, t, n, e) {
  const r = a;
  return o[r(641)]((s) => {
    var c;
    const i = r;
    x = ((c = this[i(634)][s]) == null ? void 0 : c[i(1019)](x, t, n, e)) ?? x;
  }), x;
} };
const Ha = {}, Va = (o) => !g0(o) && typeof o !== a(598) && typeof o != "number";
function Fx() {
  const o = ["HeartbeatTimeoutError", "#CCCC33", "errToObj", "comfy-uxp", "pattern", "prev", "getUsedParamsDetails", "broadcast", "interceptor_error", "checks", "获取图片", "新图层", "#3300CC", "waiting for queue prompt", "Fit to canvas", "token", "joinAs", "Login Successful", "_compile", "out", "_parseAsync", "executed", "extra", "activeWorkflow", "hasLoadedNamespace", "Action ", "No image returned", "augment", "{0,3}", ".schemaPath === undefined) { ", "未找到文档 {0}", "IPV4ADDRESS", "Send all", "isEmpty", "actionHandlers", " in key: ", "initializedStoreOnce", "initialize", "wait", "prepareLoading", "ZodTuple", "ZodVoid", "valueType", "addKeyword", "); for (var ", "ulid", "; }   var err =   ", " = equal(", "this", "?\\:\\:", "right", "PCT_ENCODED", ", validate.root.schema);", "logging", "should have required property \\'", "addResources", "No active layer available", "getCapabilities", "未实现 (501)", "Email address's domain name can not be converted to ASCII via punycode: ", "Save all", "createAsyncIterator", " === null) ", "Negative Crop", "result", "ydd", "urn:uuid", "Rectangle coordinates required for create action", "env", "Not implemented (501)", " has duplicate value ", " , message: 'should match some schema in anyOf' ", "Get content of layer {{0}}", "jsonStringifyReplacer", "handleAsObject", "test", "ZodUndefined", "add", " || ! Object.prototype.hasOwnProperty.call(", " = true; else if (!Array.isArray(schema", "resolveRunImages", "kind", "var customRule", " , message: 'should NOT have ", "data", "Smart Object Layer", "  if (!", "emit", " %c", "当前选项：图层 {{layerName}}", "fullPath", "&lt;", "加载中...", "Enum", "equal", "#6600CC", "清空所有", "setRequestHandler", "isInt", "_exclusiveLimit", "curr", " return errors === 0;       ", "addEventListener", "resources/templates/list", "subject", "Layer not found: {{0}}", "api/view?type=", "status API failed - HTTP error! status: {{status}}", "sdpppX2", "onprogress", "setOutgoingRequestInterceptor", "fromCharCode", "ZodOptional", "toFixed", "info", " , params: { i: i, j: j } ", "MAX_SAFE_INTEGER", "  var err =   ", '" ignored in schema at path "', "点我恢复", "{0,6}", "Workflow stopped by user", " if ( ", "schema", "createTemporary", "requestInitialStateForNode", "removeRequestHandler", ".length <= ", "_fragments", "handleDirectProxyForward", "typeName", "Execute", "获取选区失败", "checkState", " , params: { allowedValue: schema", " === null || ", " === 'false' || ", "name", "_key", "'].definition; var ", "status", "range", "_getId", "partialBundledLanguages", "hasEdge", "#9933FF", "Save and run immediately", 'did not save key "', "observers", ".call( ", ") {  for (var ", "Enter your Replicate API Key", "compile", "pickLocalFile", "25[0-5]", "ComfyUI loading...", "sam", ".else", "Stop", "validateKeyword", "); errors = vErrors.length;  for (var ", "Loading...", "isRoot", "Select boundary", " for language ", "#CC0099", "; else vErrors = null; }  ", "Gemini 2.5 Flash 图像", "selectColor", "你的工作流", "510", " , message: 'should NOT have more than ", "substring", "invalid_union", "overwrite", "abs", "Task execution failed", "Limit image size", " === 0 || ", "withTimeout", "escapeValue", "2024-11-05", "not-basic", "realTransport", "hasPath", "maxTotalTimeout", " != 'boolean' && ", "[\\:]", "max", "regexpUnescape", "interpolate", "getPathExpr", " === false) ", 'custom keyword "', "[MCPMiddleware]", "responseSchema", "requestsIntercepted", "clone", "output", "reboot", "request", "[\\!\\$\\%\\'\\(\\)\\*\\+\\,\\-\\.0-9\\<\\>A-Z\\x5E-\\x7E]", "unsetOutgoingNotificationInterceptor", "$el", "Click to use current selection", " === 'true' || ", "cancel", "_regex", "dataType", "_clientVersion", "{6}", "order", "pluralSeparator", "abort", "innerType", ") > 1e-", "outgoingNotificationInterceptors", "#9933CC", "resolvedOptions", "splice", "SDPPP 2.0 no longer needs this node", "当前没有可用图层", "minValue", "maxTokens", "~standard", "should NOT have additional properties", "base64url", "sendToolListChanged", " === undefined || ", "action", "none", "nsSeparator", "#9900FF", "escape", "exclusiveMinimum", "String must contain ", "objectValues", "jwt", "userDefinedKeySeparator", "manuallyExtractDefaults", "mask", "missingInterpolationHandler", "openWorkflow", "run API failed - nodeInfoList unavailable. Please call getNodes() first.", "refs", "req_", "addResource", " , message: 'should contain a valid item' ", "source", "root.refVal[0]", "RULES", "reset=false but needsReset: ", "停止全部", "concat", "getRegisteredActions", "every", "ownProperties", "logging/setLevel", " if (!", "ZodMap", "不支持的图像输入类型", "#FF3366", "dir", "def", "Get Image", "handleIncomingNotification", "_unknown", "alg", "assertCanSetRequestHandler", "ZodUnknown", "errorPath", "aeb", "missingSchema", "#66CC33", "backend", "Canvas boundary", "   var err =   ", "正在发送所有图片...", "Cycle detected: ", "strict", "#FF0033", "=== 选项 ===", "status API 调用失败 - HTTP 错误，状态: {{status}}", "不支持的上传类型：{{type}}", " !== undefined) {  ", "skipKeywords", "此处粘贴 WebApp ID", "   ", "[j])) { ", "transform", " } catch (e) { if (!(e instanceof ValidationError)) throw e; if (vErrors === null) vErrors = e.errors; else vErrors = vErrors.concat(e.errors); errors = vErrors.length; ", "dirty", "storage", "Get mask from Selection", "Failed to open image file: {{error}}", "duration", "table", "Selection bounds only", "提示词", "_onrequest", `获取图像 &
限制图像范围`, "notifications/resources/updated", "_any", "thisServer", " when property ", "ZodSymbol", "_addSchema", "cmp", "正在发送...", "catchall", "tolerant", "用户名: {{username}}", "smaller than", " != 'boolean') ", "more than", 'Invalid input: must include "', "Date must be ", "other", '" (see option extendRefs)', " var vErrors = null; ", "Unauthorized (401)", "parseInt", "listRoots", "交集或缩放目标为空", "ordinal", "[^\\%\\/\\:\\@]", "请输入您的Replicate API Key", "ary", "Invalid input", "SDPPP 2.0 不再需要此节点", " is not a valid identifier", " , params: { property: '", " delete ", "appendNamespaceToMissingKey", "extendRefs", "{1,4}", "formatSeparator", "init: no languageDetector is used and no lng is defined", "xaa", "destroy", "Fetch current layer with canvas boundary", "Node definition not found for current node ", "notifications/roots/list_changed", "未配置上传器", "Cannot access property/index ", " var isAdditional", "normalize", "run API failed - HTTP error! status: {{status}}", "count", " = errors;  ", "modules", "weeks", " , params: { limit: ", " = null;", "Crop", "keyType", "nss", "AI Generation Task", "refinement", "NOT_SCHEME", "arz", " = false;for (var ", " = 0; ", "else", "#FF9900", "任务未完成，当前状态: {{status}}", "arrayToEnum", "error", "disconnected", "         , parentSchema: validate.schema", "Running...", "sdppp/streamResponse", "exclude", "getProperty", "safeParseAsync", "asyncIterator", "languageUtils", "adf", "ckb", "undefined", "errs_", "sdppp_assets", "min", "put", "schemaHasRules", "coerce", "BigInt must be ", "nid", "Already connected to node ", "URI can not be parsed.", "step", "Failed to convert widget {0}:", "returnObjects", "extendTranslation", "http", "left", "actionManager", "Invalid", "Illegal input >= 0x80 (not a basic code point)", "Failed to request initial states after connecting to ", " , validate.schema", "comfy-user", "removeCatch", " === undefined) { ", "Elicitation response content does not match requested schema: ", "更多操作", "Auto run after canvas change", "Model", "queue", "secs", "validateStreamRequestorRequest", "pbt", "safeParse", "inlineRef", "使用教程", '"; } ', "deepPartial", "apc", "[GraphStoreSynchronizer] Error processing store update for ", "const", "') ", "hasDefaultValue", "validate", "positive", "yds", "Create document for preview", "Quality {{percent}}%", "exclType", "urn", "#00CC00", "Current layer boundary", "debouncedNotificationMethods", "No images", "nan", "rejectImage", `" keyword validation' `, "maxLength", ") && ", "hbo", "warn", "schemaId", "Server does not support tools (required for ", "strictCreate", ".type", "[^\\%\\/\\@]", "Your powerful node-based workflow engine", "same-document", "async", "#99CC00", "separator", "preprocess", "initialized", "mergeObjectAsync", "NOT_PATH_NOSCHEME", "ignore", "uniqueItems", "success", "Generating", "Choose File", "_onnotification", "Selection", " }; return validate; ", "_onerror", "#/definitions/simpleTypes", "dataVar", "async schema referenced by sync schema", "Method not found", "assistant", "; } ", "_oninitialize", "color", "cimode", "originalError", "trim", "store:update:", "发送到PS", "strip", "detect", "_errors", "stringify", "toNode", "localeCompare", "filter", "description", "]) ", "loadGraphData", "选区除外", "ListFormat", "hours", "invalid_union_discriminator", "assertNotificationCapability", "version", "external", "handle", "MissingRef", "Get selection failed", "刷新工作流列表", "); if (", "ucs2length", "fallbackRequestHandler", "Invalid forward path for proxy action", "relativetime", "未知错误（{{code}}）", "documentElement", "catch", " , params: { type: '", "本地视频", "[\\@]", "extensionManager", "finally", "invalid_return_type", "additionalProperties", "选区边界", "empty", "不支持非文本图层: {{0}}", "loadSchema", "graph update cost ", "_capabilities", " ) : ( (", "instructions", "hasOutgoingNotificationInterceptor", " not found in graph definition", "boolean", "获取像素失败: {{0}}", "slice", "prompts/list", "workflowManager", "outputs API failed - HTTP error! status: {{status}}", "uploadImage API failed - HTTP error! status: {{status}}", "abortRequest", "prompt_id", `Get image &
Limit image boundary`, ") && (missing", "unknownKeys", "Invalid literal value, expected ", "Document {0} not found", " else { ", "contains", "isULID", " % 1)", "macro", "setPrototypeOf", "没有链接图层: {{0}}", "#33CCFF", "regExpMap", "useDefault", "errors", "Edge references unknown source node: ", "$comment", "Invalid JSON-pointer: ", ";  if (vErrors === null) vErrors = [err]; else vErrors.push(err); errors++; ", "setupAbortHandler", " break; ", "_getInvalidInput", "Current selection: Layer {{layerName}}", "+Alt 按选区裁剪", "getTransportToNode", "Auto send enabled", "processors", "get", "ping", "extractFromKey", "Logout", "  errors = ", "Desire bounds is null", "forEach", "Select Source", "_getType", "notifications/initialized", "$async", "以画布边界获取当前图层", "网关超时 (504)", ".call(this, ", " = false; else {", "App ID:", "#6633CC", " validate.errors = [", "sendStreamRequestorRequest", "pluralCategories", "Content", "执行失败", "{0,5}", "%[89A-Fa-f]", "isOpen", "invalid_string", " == 'number' || ", "__proxy_forward", "precheck", "#FF00FF", " is already defined", "ZodBigInt", "No backend was added via i18next.use. Will not load resources.", "_cached", "Failed to request initial state for ", "./api/userdata/workflows%2F.index.json", "removeMiddleware", "以画布边界获取画布", ` + '" schema' `, "getLanguagePartFromCode", ` if (typeof item == 'string') item = '"' + item; `, "Server does not support logging (required for ", "[i]; ", "absolute", "maxProperties", "Schema ", " !== undefined) { ", "请选择要获取的图像", "closeHandlers", "dataPathArr", "rootData", "interceptorTimeout", "millisecond", "创建文档", "failed parsing options string in nesting for key ", "以当前图层边界获取画布", "_opts", "ZodNaN", "/type", "cancelled", "Positive Crop", "aec", "react", "map", "base64", "getAllReachableNodes", "rules", "broadcastReceived", "&#x2F;", "AI 生成任务", "escapeFragment", "[GraphStoreSynchronizer] Error broadcasting state update for ", "valid", "选区遮罩", "选择文件", " try { await ", "finished", "\\%25|\\%(?!", "__origin", "4440135CuknbA", "languages", "]; ", "alert", " , schema:  ", "获取结果失败: {{error}}", "++) { if (", "#0099CC", "host", "nonpositive", " reference.", "changeLanguage", "本地图片包", "removeKeyword", " !== ", "Select a model", "目标边界为空", "无法从文件创建文档", "pctEncChar", ".errors", ", exclusive: ", "translate", "transports", "ZodDate", "_timeoutInfo", "#0066CC", "ZodAny", "#99CC33", "NOT_QUERY", "Cloud-based model service platform", "maxSize", "url", "#FF3333", "prompt_ids: ", "edges", "addRule", "reload", "任务创建已中止", "reset", "$id", "获取图层信息", "Paste your model name", "_errorDataPathProperty", "messageHandlers", ".validate", "refVal[", "\\$&", "resourceName", "formatters", " = undefined; ", "getFixedT", "Node not found", "prompts/get", " character(s)", "AbortSignal is already aborted", "reference", "__esModule", "await ", "mesh:workflow", "rtl", "无效的边界类型: {{type}}", "Result fetch aborted", "sdppp_widgetable_title", "loadResources", "Invalid action: {{action}}", "default", "toJSON", "Server does not support notifying of prompt list changes (required for ", "var pattern", "创建图层失败", "setWidgetValue", "cacheUserLanguage", "Validation failed but no issues detected.", "Image quality (%)", "forward", "maximum", "反向裁剪", "[\\:\\@]", "Current selection: Canvas", "post", "Layer not found {{0}}", "comfy-entry", "listenMessageCallback", "; if (", "addResourceBundle", "connectionManager", "minutes", ".additionalProperties", "invalid_type", "skipInterpolation", "ComfyUI加载失败，HTTP状态码：{{code}}", " , schemaPath: ", "Server does not support prompts (required for ", "append", "运行中...", "regex", "setupGraphStoreSync", "cleanCode", " = defaults[", "yih", "RelativeTimeFormat", "./sdppp-custom.js", "joinValues", "getNodes API failed - {{reason}}", "errorsText", "defaultVariables", "Unable to reboot ComfyUI", "[^]", "Save", "__connection_established", " , message: 'should be multiple of ", " levels up, current level is ", "useRawValueToEscape", " -> ", "useDefaults", "minimum", "toString", "addSchema", "val is not a non-empty string or a valid number. val=", "Meta-schema for $data reference (JSON Schema extension proposal)", "dev", "implementInternalAction", "$ref", "请选择AI服务", "#CC9900", "Save current", "uxpHost", "appendNamespaceToCIMode", "IPV6ADDRESS", "handleIncomingRequest", ".data = ", "  }  ", "1xfOxYH", "schema id ignored", " = [", "getSuffix", " : ", "ars", "clientInfo", "getClientCapabilities", "start", " == 'boolean' || ", "is an invalid additional property", "tools/list", "multipleOfPrecision", "Note", "defaultMeta", "|0?0?", " = errors , ", "Stop auto run", "请选择要发送图像的位置", "outgoingRequestInterceptors", "missed to pass in variable ", "ZodReadonly", "isTransportReady", "2.0", "ayl", "Server does not support notifying of tool list changes (required for ", "invalid_arguments", "Cannot forward to node ", "任务执行失败: {{error}}", " , message: 'should be equal to constant' ", "[i], ", "kPanelBrightnessMediumGray", "state", " == ", "_notificationHandlers", "Comfy.userId", "charCodeAt", " == errors) { ", "resource", "; }", "rejecting language code not found in supportedLngs: ", "preload", "Invalid function return type", "level", "#00CCCC", "acx", "Exclude current layer", "translation", "greater than ", "Primary image resource is missing", "checkDataTypes", "Workflow not found", "uxp", "float", "isCUID", "cuid2", `" won't get resolved as namespace "`, "capabilities", "边界预览", "pipe", "{0,4}", "exception", "resolveRef", "capacity", " = true; if ( ", "ZodPipeline", "all", "bigint", "Connection closed", "ref/prompt", "Google Gemini Image Generator", "nullable", "Host's domain name can not be converted to ", "处理进度 {{processed}}/{{total}}", "cleanupConnection", "typ", "#/definitions/nonNegativeIntegerDefault0", "var ", "Unrecognized key(s) in object: ", "Document {{0}} not found", " else if (", "compiling", ", schema", "ZodObject", "yhd", "namespace", "includes", " var err = ", "How to get APIKey and API Secret", "toASCII", "/additionalProperties", "inlineRefs", ") break; ", "isNullable", "nullish", "正在上传...", "yud", " element(s)", "actions", "async keyword in sync schema", "errorMap", "arrayKeywords", "#0000FF", "]; } else { ", "streamRequest", " Math.abs(Math.round(division", "', depsCount: ", "color: inherit", "emergency", "less than", "{4}", "partial", "formatArgs", "initAsync", "mcp-mesh-router", "saveMissing", "exactly", "days", "__nwjs", "Edge references unknown target node: ", "Failed", "getNodes API 调用失败 - HTTP 错误，状态: {{status}}", "#33CC33", " } ", "extract", "unicode", "Received a response for an unknown message ID: ", "setItem", "padEnd", "正在等待图片上传...", "OpenAI/Google 格式API", "notificationQueue", "notifications/resources/list_changed", "en-US", "encountered", "createErrors", "hour", "never", "pst", "markDisconnected", "lng", "Get mask from Canvas", "unescapePrefix", "Set as Current Selection", "getProtocol", ".patternProperties", "statusText", "Intersection results could not be merged", "status API failed - {{reason}}", ", rootData)  ", "[\\-\\.\\_\\~]", " , params: { missingProperty: '", "[\\uE000-\\uF8FF]", ".validateSchema(", "iterator", '"number"', " = errors;", "ComfyUI server reconnecting", "unicodeSupport", "nestingSuffix", "notification", "No linked layer for {{0}}", "canvas", "unknown keyword: ", "移除槽位", "^\\[?(", "Comfy SDPPP version ({{comfyVersion}}) does not match plugin ({{pluginVersion}}), may cause issues", " = false; else { ", " = true , j; if (i > 1) { ", "'then'", "abv", "clear", " , params: { additionalProperty: '", "process", "getDefinition", "Current Selection", "relatedRequestId", "_requestMessageId", "languageChanged", "Graph must have at least one node", "schema is invalid: ", "_parseSync", "keywords", "queuePrompt", " {} ", "状态检查已中止", "No images yet", '"failed to compile', "void", "Not connected", "sdppp/directRequest", "requestId", "from", " than ", "customRules", "postMessage", "namespaces", "writeOnly", "没有活动文档", "overflow", "minProperties", "curlayer_canvas", "nestingPrefix", " !== parseInt(division", "sdppp 运行 Photoshop Action", "exec_info", "Reset", "detectCycles", "https", "languageChanging", "getHandler", " = refVal[", "setupStreamRequestHandler", "getItem", "prototype", "array", "false", "本地文件", "高级选图", "title", "missingKeyNoValueFallbackToKey", "_getCached", " } } ", "mins", "heartbeatTimeoutTimer", "async format in sync schema", " var validate = ", "unknown", "initImmediate", "nodeTransports", "[\\:\\/\\?\\#\\[\\]\\@]", "Server does not support notifying about resources (required for ", "payload", "elicitation", "{0,2}", "loopRequired", "Sending image...", "findPathInternal", "]); ", "ZodDefault", " = false; break outer; } } } ", "/required", "exactUsedKey", "getDefaultValuesFromSchema", "Gateway timeout (504)", "$data", "当前选区", "simpleTypes", "allKeys", "Current Layer", "Unknown message type: ", "maxParallelReads", ".errors; else vErrors = vErrors.concat(", " , schema: validate.schema", "true", "Output to:", "无效边界: 左边必须小于右边，上边必须小于下边", "Bounds", " == errors) {", "pbu", "getResourceBundle", "排队等待", "Full Canvas", "broadcastCurrentState", "filename", "Internal ZodObject error: invalid unknownKeys value.", "显示发送的图片", "exception_message", "选择文件失败，请重试", "firebug", "发送所有", "absolutePath", "resolveImage", "getStats", " return data; ", "curlayer", "next", "elicitation/create", "superRefine", "getKeyword", "postProcess", "formats", "secure", "executeHandlerAsync", "Number must be a multiple of ", " = customRules[", "#/definitions/stringArray", "currentOnly", "Upload from disk", " var schema", "stopAll", "parentDataProperty", "5717544lVlDZK", " , rootData )  ", "hasNotificationHandler", " if (true) {", "getImage", "escapeQuotes", "entries", "applyPostProcessor", "<errors; ", "time", "_setupTimeout", "Running", " not found for current node ", "jsonPointers", "acy", "ads", "valueOf", "isArray", "self", "Enter Google API Key", "rest", "isLanguageChangingTo", "Selection boundary", "cycles", '" was not yet loaded', "Auto Sync: off", "Google Gemini 图像生成器", " }  ", " = true; } else { ", " = true; if (", " = null; ", "#00CC33", "仅当前图层范围", "requestsHandled", "整个画布", "reduce", " var i = ", "lastPongReceived", "key", "image", "maxRetries", "删除当前", "requestedSchema", "Fetch canvas with current-layer boundary", "lastIndexOf", "Confirm", "sendResourceListChanged", "fail", "int", " not in path ", "received", "precision", "outputs API 调用失败 - {{reason}}", "New Document", "+Alt 反转遮罩", " } }  ", "#3399FF", "getConnectionCount", "minSize", "MethodNotFound", " = true; else if (typeof ", "Stop all", "metaSchema", "hasLanguageSomeTranslations", "mesh:comfy", " if (false) { ", "正向裁剪", "OpenAI API error", "Input not instance of ", "HTTP URIs must have a host.", "[ ]*{", "Email address's domain name can not be converted to ", "跳转到最后一个", "RequestTimeout", "api", "queueLoad", "Input Setting", "load", "compositeRule", "请选择要获取的遮罩", "isValidLookup", "objectKeys", "getTransportInternal", "strictDefaults", "exact", ` , message: 'should match format "`, "http://json-schema.org/draft-07/schema#", "relative", "].propertyName = ", "+Alt crop by selection", "{0,1}", "Remote", "运行失败 - 未获取到 nodeInfoList，请先执行 getNodes()。", "buildDirectedAdjacencyList", "_formats", "fragment", "URN can not be parsed.", "custom keyword definition is invalid: ", "Layer", "[object Function]", "executeOutgoingRequestInterceptor", "No active layer", "[object Number]", "&subfolder=", "getFallbackCodes", "openWorkflow: ", "local", "too_small", "组 {{0}} 中没有第一个相关图层", "清除参考线框架", "__proto__", " , message: 'should be equal to one of the allowed values' ", "[0]; ", "sourceCode", "All", "ActionSet {{0}} 未找到", "waitingReads", 'Only layer kind "TEXT" is supported, invalid layer: {{0}}', "round", " ) || ", "It seems you are nesting recursively key: ", "2025-06-18", "negative", "defaultValue", "normalizeId", "(队列:{{queueSize}}) {{progress}}% {{executingNodeTitle}}...", ' !== "object")', "_meta", "每批图像数", "Instance method `debug.destroy()` is deprecated and no longer does anything. It will be removed in the next major version of `debug`.", ";  ", "position", " { keyword: '", "#0099FF", "aborted", "returnTypeError", "Mask resource is missing", "Boundary preview", "image/png", "invalid_date", "label", "获取 API Key", "schema id must be string", " , message: 'should match exactly one schema in oneOf' ", ") vErrors.length = ", "shu", "setProperty", "formatter", "endsWith", "requestIdSeq", "Username: {{username}}", " = ''; ", "批次数量", "sdppp", "setDefaultNamespace", "Layer {{0}} is not a group", ") ) ", " , message: 'should NOT be ", " !== undefined && typeof ", "toHash", " , message: 'should NOT have duplicate items (items ## ' + j + ' and ' + i + ' are identical)' ", "Cannot reboot because ComfyManager is missing", " after ", "nest", "#CC9933", "get_layer_info requires layer_identify", " != 'number') || ", "context", "datetime", "xn--", "Invalid name: {{0}}", "res", "Batch Count", "mergeObjectSync", "停止并取消全部", "getState", "__cycle__", "streamRequestorHandlers", "Image input and prompt are required", "sendResourceUpdated", "function(data, dataPath, parentData, parentDataProperty, rootData) { 'use strict'; ", "resetTimeoutOnProgress", "isInteger", "#CC00CC", "initialState", "_responseHandlers", "Gateway error (502)", "以主图边界获取当前图层", "acq", " == 'object' && Array.isArray(", "getNode", "Invalid discriminator value. Expected ", "mailto", "&filename=", " if (!(await ", "NOT_USERINFO", "Options", " == 'boolean') ", "nestingOptionsSeparator", "RH Coins:", "文件上传失败", "nodes", "buffer", "domainHost", "returnDetails", "当前图层边界", "exactly equal to ", "Set as Current Layer", "images", "auz", "element", "#FF9933", ".additionalItems", "unsetRequestHandler", "Hold Shift for more options; Ctrl for single fetch", "/else", "running", "(typeof ", "node_id", "validateSchema", "Request interceptor failed for ", "currentNodeId", "meta-schema not available", ") continue; ", "convert widget {0} failed:", "任务已取消", "not_finite", " = RULES.custom['", "遮罩应用后未得到资源", "Array must contain ", "resolvedLanguage", "nonstrict", "unescapeSuffix", " ? ", "parseAsync", "ref/resource", " properties' ", "isEmail", "postProcessPassResolved", "ZodLiteral", "OpenAI - Image Edit", "parent", "catchValue", "one", "getConnectedNodeIds", "parse", "More actions", " } if (errors === ", "messageQueue", " && !", "Select layer", "File not found: {{path}}", "stats", "当前任务数:", "hasLoadedNamespace: i18next was not initialized", "saveMissingPlurals", "isObject", " = errors; var ", "jpr", "仅选区范围", "isTime", "cidr", " for (var ", "not_multiple_of", ".validate; var ", "Canvas", "适配至当前图层", "23771672MVpXUg", "ltr", "items", "scheme", "validate.schema", "Discriminator property ", "#3366CC", " && ", "插件可能正在拦截 PS 快捷键... ", "_clientCapabilities", "Auto Sync: on", "Exclude selection", "Outgoing request interceptor failed: ", "skipCopy", "joinArrays", "Unsupported upload type: {{type}}", "minute", "alwaysSet", "setupStreamResponseHandler", "Retry", "aao", "registerDirectRequestHandler", "humanize", "Number must be finite", "Invalid proxy forwarding: current node ", "stopSequence", "isInitializing", "\\:\\:", "[^0-9]", " != 'number') { ", "getData", ";  if (vErrors === null) vErrors = [err]; else vErrors.push(err); errors++; } ", "critical", "Close", " is present' ", "removeAdditional", "removeMessageEventListener", "} else {  errors = ", " == 'string' && ", "Merge group failed", "Guest login successful", "' + ", "suffix", "keys", "userAgent", " - no connection available", "WebkitAppearance", "copy", "errorHandlers", "setupStreamProtocolHandlers", "execution_success", "自动取图中…", ") { ", "lte", "/then", " + ", "_transport", "上传失败，请重试", "AI使用的区域与最大尺寸控制", "ZodLazy", "ruleErr", "mode", "当前选项：图层", "_processInputParams", "code", "isDuration", "Error validating elicitation response: ", "Task cancelled", "从磁盘获取", "找不到文档: {{0}}", "setupGeneralBroadcastHandler", "translator", "[^\\%]", "nodeId", "https://raw.githubusercontent.com/ajv-validator/ajv/master/lib/refs/data.json#", 'schema with key or id "', "nanoid", "ZodNull", "join", "shared", "getNodeTitle", " , message: 'property name \\'", "Unknown error ({{code}})", "run API failed - {{reason}}", "addMiddleware", ")) ", "onclose", "])) { ", "PS shortcuts may be blocked by plugin...", "cleanup", "connected", "shorter", "模型物美价廉，海量社区应用", "keywordValidate", "protocolVersion", "newdoc", "nodeIndexes", "Auto fetching…", " , params: { passingSchemas: ", "curlayer_selection", ", received '", ".length; ", " === '' || ", "timeoutId", "]; var ", "create", "_getOrReturnCtx", "errSchemaPath", "stream", "Asynchronous transform encountered during synchronous parse operation. Use .parseAsync instead.", "transport", "string", "输出区域", "reconnected", "Current option: File", "assertRequestHandlerCapability", "Base URL", "schemaErrorMap", "loadLanguages", "assertEqual", "Enter a quality percentage", "queues", "set", "missingKeyHandler", "loading namespace ", ") { var op", "#FF0000", "isCIDR", "common", "nodeStores", "exports", "formatLanguageCode", "params", "New Layer", "verbose", "清除视频", "has", " === false || ", "Task incomplete, current status: {{status}}", "isNANOID", "seconds", "输出至：", "initializeConsumer", "removeEventListener", "ZodDiscriminatedUnion", " == '", " = undefined;", " || validate.schema", "Layer mask", "diff", "under", "missed to resolve ", "Client does not support sampling (required for ", "opts", "#00CC66", "isTop", "long", " failed", " = errors === errs_", "Async refinement encountered during synchronous parse operation. Use .parseAsync instead.", "return", "Modify", "ComfyUI加载中...", "Timeout", "自动获取中…", "setupNodeBindings", "Shortcut selection feature requires login", "signal", "_error", "ZodCatch", "#CC0000", "; var ", "loaded", "Upload failed, please try again", "implements", "选择图像来源", "Drag images here and release to upload", "registerCapabilities", " if (typeof itemIndices[item] == 'number') { ", "Get selection", "Show Preview ({{count}} images)", "暂无图片", " characters' ", "coerced", "symbol", "You are passing a wrong module! Please check the object you are passing to i18next.use()", "__internal_requestInitialState_", ")) {  var err =   ", "\\' is invalid' ", "keySchema", " / ", "Failed to create document from file", "heartbeatInterval", "year", "创建操作需要矩形坐标", '[\\"]', "pick", "ESCAPE", "loadNamespaces", "optionsMap", "interpolation", '" is used in schema at path "', "$$$$", "formData", "defineProperty", " !== undefined)", "InvalidRequest", "can't resolve reference ", "#FF00CC", "ZodFunction", " } else {  for (var ", "dataProperties", "pes", "querySelector", ") ? ", "definition", "createGlobalDispatcherForType", "strictKeywords", "质量{{percent}}%", "#66CC00", "设置图层的文本", "getNodeIds", "createWithPreprocess", "setKey", "getDefaultValueFromField", "Current Tasks:", "unknownFormats", "_metaOpts", "missingRefs", "NOT_HOST", "isNaN", "unwrap", " to ", "unshift", "#FF6600", "invalid_intersection_types", "usedLng", "isDatetime", "comfy", "workflow", "从 当前图层 获取图像", "_serverInfo", "ComfyUI服务器重连中", "Paste WebApp ID here", "Required", "typeof ", "exclIsNumber", "++) { var ", "heartbeatTimer", "Local file", "PS图片", "custom", "Failed to send cancellation: ", " !== undefined && ( typeof ", ".schema = ", "postProcessor", "readingCalls", "favorites", "email", " must be number or boolean", " , data: ", "(new RegExp(", "startHeartbeat", "mergeArray", "]; if (", "getPath", "format", "findIndex", "renderer", "Server error (500)", "ConnectionClosed", "meta", "callback", "returnNull", " var async", "serialize", "widgets", "getTime", "validation failed", "buildAdjacencyList", "readOnly", " validate.errors = vErrors; return false; ", "如何获取APIKey", "; else if (", "saveMissingTo", " === 1) ", "_addCheck", "获取图层 {{0}} 的内容", "Images Per Batch", "Maximum total timeout exceeded", "执行成功", "Mask", "dataLevel", "Disk", "Invalid attempt to destructure non-iterable instance", "maxValue", "deprecate", "getTransport", "assertNever", " var ", "; if (!", "closeWorkflow", "delete", "definitions", "notificationHandlers", "select", "[0-9]", "errs__", "formatParams", "registerStreamRequestorHandler", "Connect", "ifClause", "Store not found for current node ", "allErrors", "exec", "comfy side transport.onerror", "removed", "{3}", "URI is not a ", "describe", " = vErrors[", " ? await ", "No first related layer in {{0}}", "#CC3399", "uuid", " = e.errors; else throw e; } ", "toUpperCase", "value", "languageOnly", "outputs API failed - {{reason}}", " if (schema", "fewer", "skipOnVariables", "Download", "get_layer_info: 需要 layer_identify", "use", "'else'", "wss", '.schemaPath = "', " = null; try { ", "msecs", "close", " else throw new ValidationError(vErrors); ", ") { for (var ", "useColors", "ZodUnion", "Add slot", " = false; if (e instanceof ValidationError) ", "if (!", "isFinite(", "getSuffixes", "设为当前图层", "supportedLngs", "sort", "getConnectionToNodeInternal", " === undefined ", "Cannot access data ", " must be number", "任务执行失败", "invalid_literal", "' } ", "store", "InternalError", "以主图边界获取画布", "Get image from Canvas", "initializeNodeStores", "Outpaint (positive crop)", "#00CC99", "setter", "#FF33FF", "Stop and cancel all", "] = ", "' , dataPath: (dataPath || '') + ", " , message: 'should NOT be valid' ", "自动填入画布开启", "json", "./sdppp_upload2", "Invalid boundary type: {{type}}", "second", "  for (var ", "_limitItems", "flags", "posterIdentifier", "minLength", "constructor", "channel", "prefix", "Images", "Input Image", "file", "Leave empty for no limit", " + '", "]; }  ", "(?:", "log", "未授权 (401)", "ayh", "false schema", "text", "util", "resources", "markConnected", "Failed to reboot ComfyUI", "getPluralFormsOfKey", "forkResourceStore", "uri-reference", "schemas", "relative-json-pointer", "OpenAI/Google format API", "logger", "oneOf", ", limit: ", "indexOf", "lngs", " !== undefined ", "_cleanupTimeout", "Create layer failed", " , params: {} ", "completion/complete", "mcpMesh", ", deps: '", "fallbackNS", "; if (vErrors !== null) { if (", "lowerCaseLng", "debug", "contextualErrorMap", "invalid-input", " }; return validate;", "optional", "Upload aborted", "sec", "ComfyUI failed to load, HTTP status code: {{code}}", "comfy_api_key", "#FF3399", "Layer {0} not found", "regExpQueue", 'id "', "#0000CC", "_schemas", "主图边界", "Import as Smart Object", "parsedType", " = true; ", " != 'undefined' && ", "nonempty", "call", "push", ")' returned an object instead of string.", "#CC6600", " == 'object' && !(", "(.+?)", "uploadComfyImageFromUXP", "messagePoster", "nonnegative", "Remove video", "[\\!\\$\\&\\'\\(\\)\\*\\+\\,\\;\\=]", "removeResourceBundle", "服务器错误 (500)", `"' `, "ZodPromise", "Error in broadcast handler for ", " ( ", ") { errors = ", " (async", "))) { ", "implementAction", "hasRequestHandler", "del", "pong", ") {   ", "varReplace", "unrecognized_keys", "适配至选区", "maxItems", "/additionalItems", "暂无视频", " if (", "options", "getScriptPartFromCode", "File upload failed", "hrs", "isOptional", "Prompt", "获取表单数据失败", "executing", "Generating...", "yrs", " if (errors === ", "ComfyUI - {{workflowName}}", "Server does not support sampling (required for ", "]] === undefined ", "sdpppHandshake", "messageType", "_refinement", "clearCache", "validation", "_parse", "languageDetector", "content", "按住 Shift 键以新文档方式导入", "图层 {{0}} 不是一个组", "maxDate", " for interpolating ", "graphInstance", "isPersisted", "zod", "Invalid date", "comfyAPI", "Crop by selection", " throw new ValidationError(vErrors); ", "尺寸限制 (px)", "_cache", "Canvas bounds", "Get API Key", "Output to", "connecting", "index", " } else {  errors = ", "#CC6633", "completed", "detail", "bind", ".length ", " else ", "Create document", "#CC3366", ") : ", "onmessage", " , params: { ref: '", "Fit to selection", " == null) ", "replace", " , params: { format:  ", "Current layer bounds", "widgetable", "Max size (px)", "Core schema meta-schema", "smartobject", ".dataPath = (dataPath || '') + ", 'unknown format "', "#FF33CC", "canReachThroughConnectedNodes", "needsPlural", "Synchronous parse encountered promise.", "Waiting in queue", "[^\\%\\:]", "alwaysFormat", ".pi-sign-out", "assign", "cache", "onerror", "ajv", ") ) {   ", "Source", "^(\\p{Extended_Pictographic}|\\p{Emoji_Component})+$", " = true;  ", "failing", "property", "Channel connecting...", "sdppp-heartbeat", "_refs", "Reverse", "fullFilename", "#6633FF", "root", "fatal", "exists", "registerProxyForwardHandler", "  } ", "at least", "?\\]?$", " }   ", "WARNING DEPRECATED: ", "Clear", "cacheInBuiltFormats", "roots/list", "未找到图层 {0}", "setComfyOrgAPIKey", " if (true) { ", "addNamespaces", "object", " || ", "bbz", "passContext", "findPath", "pga", "ComfyManager not found, cannot reboot", "文件未找到: {{path}}", "readonly", "required", "hasOwnProperty", "通道连接中...", "ignoreJSONStructure", " == 'function' ? ", "anyOf", "_instructions", "date", "shape", "Overflow: input needs wider integers to process", "origin", " === ", " = errors;var ", "interpolationkey", "query", " && Object.prototype.hasOwnProperty.call(", "values", "Google Gemini - 图片生成", " not implemented for node ", ".async; ", "there was no format function for ", "$dataMetaSchema", "ZodBoolean", "从 当前图层 获取遮罩", "defaultError", "停止自动运行", "schemaPath", "save", "execution_error", "%c ", "resources/read", "=0; ", "调整预览文档尺寸", "reason", "Validation", " if (rootData === undefined) rootData = data; ", "Node ", "_onprogress", "正在创建任务...", "nestingRegexp", "resources/list", "prs", "_def", "requestInfo", "less than or equal to", "', missingProperty: '", "acm", "createInstance", "2025-03-26", "invalid_enum_value", "abh", " ( ( ", "_pendingDebouncedNotifications", "Refresh workflow list", "按回车打开应用： {{appName}}", "messages", "graphChanged", "Local video", "Converting circular structure to JSON", "outputs API 调用失败 - HTTP 错误，状态: {{status}}", "Outgoing message:", "properties ", "Task creation aborted", "assertCapabilityForMethod", "getNeighbors", "_progressHandlers", " , message: '", "setOutgoingNotificationInterceptor", "errorDataPath", " && ( ", "sdppp/broadcast", "PluralRules", " if (! ", "waiters", "使用整个画布", ".validate; } if (  ", "ValidationError", "uiWeight", "notifications/prompts/list_changed", "setResolvedLanguage", "connect", "自动同步: 开启", '"object"', "Fit to current layer", "startTime", "createMessage", "点此获取RunningHub APIKey", "Client does not support elicitation (required for ", "~validate", " , schema: ", " !== undefined) ; ", "_resetTimeout", ".test(", "toUnicode", "combo", "输入图像", "MiddlewareError", " var schemaExcl", "checkDataType", ") == -1 ", "usedParams", "broadcastManager", "utils", "isBase64", "names", "选择 AI 服务提供商", "addFormat", "ParseError", "node_errors", "accept", "lastIndex", "nodeProxies", "fromCodePoint", "some", "notifications/cancelled", "Range 1-100", "newlayer_curlayer", "Server does not support resources (required for ", "getBestMatchFromCodes", "exclusive", "未知错误", "flatten", " var itemIndices = {}, item; for (;i--;) { var item = ", "适配至画布", "app.queuePrompt caught", "performWorkflowReset: ", ") { if (vErrors === null) vErrors = ", "++) { ", "i18nFormat", "调整输入设置", ".hasOwnProperty(", " ); if (isAdditional", "types", "isBase64url", "$schema must be a string", "continueOnInterceptorError", "addMessageEventListener", "getNodeStore", "cloneInstance", "registerHandler", "Module", "apply", "智能对象图层", "sendPromptListChanged", "NumberFormat", "refVal", "MIN_SAFE_INTEGER", "Error compiling schema, function code:", "任务取消失败: {{error}}", "parentData", "Email: {{email}}", "idx", "defaultNS", "_compilations", "([+-]\\d{2}:?\\d{2})", "获取账户信息失败", "not", "broadcastHandlers", "getResource", "accessing an object - but returnObjects options is not enabled!", "newlayer_selection", "setLimit", " = false , ", "Tutorial", "contentEncoding", "设为选区", "Resize document for preview", "1932692vHWvOk", " ms", "Send to PS", " = false; ", "notifications/tools/list_changed", "getDataByLanguage", "greater than or equal to ", "'[\\'' + ", "setNotificationHandler", "isRequest", "send", "is a required property", "workflows/", " = true;", "emoji", "function", "Local image pack", "AUTO", " throw new ValidationError([", "hasResourceBundle", "finite", "promise", "作为新文档导入", " = 'else'; ", "rootId", "ZodEnum", " not found for node ", "Auto repick from PS", "backendConnector", "port", "getPrototypeOf", "i18next:", "simplifyPluralSuffix", "nonExplicitSupportedLngs", "node", "ctx", "type", "at most", "unsetNotificationHandler", "Invalid enum value. Expected ", "externalListenMessageCallback", "substr", "requestHandlers", "ZodNever", "pending", "mountTo", "var missing", "$t(", ".length == 0) {", " } else { ", "画布边界", "#/definitions/nonNegativeInteger", "Click to get RunningHub APIKey", " if (Array.isArray(", "Received a progress notification for an unknown token: ", "hasLoadedNamespace: i18n.languages were undefined or empty", "pathname", "fallback", "' && !(typeof ", "offset", "missing", "setupTransportHandlers", "currency", "more", "formatType", "init", " validate.errors = vErrors; ", "escapeComponent", "usePattern", "user", "now", "DEBUG", "hasAction", " outer: for (;i--;) { for (j = i; j--;) { if (equal(", "addMetaSchema", " , schema: false , parentSchema: validate.schema", "sampling", "_requestHandlerAbortControllers", "onTimeout", " < ", "body", " = false;  ", "isSupportedCode", "/patternProperties/", "varOccurences", "Action handler ", "sdppp/abort", '" as the namespace "', " ? '", "fast", "resolve", "missingRef", "Uploading, if the image too large, may be lag...", "full", "fallbackLng", ";if (", " = validate.schema", "brand", "No limit", "ZodNullable", "longer", "getSchema", "#CC00FF", " ) ", "warning", "POST", " = typeof ", "Unicode", "__internal_", "Press Enter to open app: {{appName}}", "MissingRefError", "method", "ZodIntersection", "pctDecChars", "obj", "processCode", " != 'string') || ", "then", "jsonrpc", "protocol", "remove", "&quot;", "Request handler failed: ", "_loadingSchemas", "AbortError", "ZodEffects", "Selection mask", " || Object.keys(", "issues", "merge", "云端推荐：", "validateHandlerType", "/*# sourceURL=", "resourceStore", "[\\:\\@\\/\\?]", "Success", "Failed to check workflow changeTracker state:", " , (dataPath || '')", "addIssues", "newdoc_canvas", ".type || 'string'; if (", "reconnecting", "forwardBroadcast", "enable", "registerDirectRequestHandlerGeneric", "var refVal", "画布变更后自动运行工作流", "当前图层", "notifications/message", "2024-10-07", "[A-Za-z0-9\\!\\$\\%\\'\\*\\+\\-\\^\\_\\`\\{\\|\\}\\~]", "callValidate", "additionalItems", "silent", "You are passing an undefined module! Please check the object you are passing to i18next.use()", "[\\+\\-\\.]", "getCurrentNodeId", "workflows", "mergeShapes", "Request timed out", "toLowerCase", "usedKey", "expected", "regexp", "shift", "1.0.0", "key '", " is loaded but ", "status API 调用失败 - {{reason}}", "pluralResolver", "); if (!", "off", "设为画布", "A request handler for ", "Delete current", "_onresponse", "pendingCount", "returnEmptyString", "notificationsHandled", "lazycreate", "当前没有活动图层", "This means something IS WRONG in your setup. You access the t function before i18next.init / i18next.loadNamespace / i18next.changeLanguage was done. Wait for the callback or Promise to resolve before accessing it!!!", "保存所有", " = false; else if (", "inclusive", "Keyword ", "unsetOutgoingRequestInterceptor", "Use current layer", "Adjust input settings", '$ref: validation keywords used in schema at path "', 'Invalid input: must end with "', "split", "startsWith", "message", "read", "]; return false; ", "结果获取已中止", "缺少遮罩资源", "initializeProducer", "Action {{0}} was not found", "Select AI Service Provider", "exclusiveMaximum", "No Intl support, please use an Intl polyfill!", "getClientVersion", "added", "Generation failed", "resources/unsubscribe", "getOwnPropertyNames", "arb", "#CC33FF", "_validateKeyword", "safe", "正在发送图像...", "resetRegExp", ` , message: 'should pass "`, "loadOne", "retryTimeout", "modifying", "subscribe", "run", "ZodRecord", ".length == 1) { ", "stack", "isFinite", "从 画布 获取图像", "coerceToTypes", " division", "Show sent images", "tools", "language", "拖拽图片到此处松开完成上传", "isInitialized", "too_big", "passthrough", "heartbeatTimeout", "minItems", "propsKeywords", "ids", " in ", "非法的名称: {{0}}", "multipleOf", "interpolator", "integer", "isClone", "services", "Gemini 2.5 Flash Image", "Import as New Document", "当前图层除外", "getRegExp", "syncStoresToNewConnection", "[^\\%\\[\\]\\:]", "coerceTypes", "maxReplaces", "smaller than or equal to", "sdppp/streamRequest", "sourceType", "extend", "sd-ppp-static/sdppp_images/", "strictNumbers", "[A-Za-z]", ", '", "; else vErrors = null; } ", "CurLayer", "))))) {", "找不到图层: {{0}}", "No errors", "[vV]", "size", ") {   var err =   ", "ayp", "图像质量 (%)", " not found on node ", "ZodString", "Fetch current layer with primary boundary", "exactLength", ") {  var err =   ", "No videos yet", "快捷键选图功能仅登陆后可用", "graph", ") {", "点击使用当前选区", "#00CCFF", "从磁盘上传", "#CC3300", "executeOutgoingNotificationInterceptor", "5730325tkpWQq", " items' ", "zh-CN", "failedLoading", "find", "createStreamState", "prepend", "day", "headers", "reverse", "timestamp", "match", "++) { vErrors[", "357222sWvCTI", "Cancel", "missingKey", "openWorkflows", "length", "Google Gemini - Image Generation", "No workflow selected", "returnedObjectHandler", "ZodNativeEnum", "; else vErrors = null; }", " var missing", "Node definition not found for ", " = ", "Remove slot", " , message: 'should have ", "response", "Client does not support listing roots (required for ", "_requestHandlers", " var startErrs", "dependencies", "getRule", "pluralRulesCache", "#33CC99", "需要提供图像和提示词", " , ", "overloadTranslationOptionHandler", "Internal error", "$schema", "([^0-9])", "race", "'[' + ", "setState", "skips", " , parentSchema: validate.schema", ".length > ", ").length ", "ASCII", "iri", "connectedNodes", "selection", "生成中...", "isConnected", "path", ", (dataPath || '')", "xmn", "toQuotedString", "/%2F", "listWorkflows", " = false; for (var ", "saveWorkflow", "and", "Enter a pixel value greater than 0", "getter", "uploadImage API 调用失败 - HTTP 错误，状态: {{status}}", "Area AI reads from; controls max image size", "discriminator", "Outgoing notification interceptor failed: ", "ZodSet", ".errors); errors = vErrors.length; } ", " var errors = 0;     ", ` , message: 'should match "' + `, "openWorkflowJSON", " via punycode: ", "getAccountStatus API failed - HTTP error! status: {{status}}", "properties", "resolveComponents", "RH币:", "userDefinedNsSeparator", "#FFCC33", "请输入质量百分比", "Values", "done", "ZodBranded", "keyPrefix", "locale", "click", "console", "freeze", "uiWeightSum", "hostVersion", "A discriminator value for key `", "\\xA0-\\u200D\\u2010-\\u2029\\u202F-\\uD7FF\\uF900-\\uFDCF\\uFDF0-\\uFFEF", "removeDotSegments", "property ", ".validate;", "changeTracker", "sampling/createMessage", "_limitLength", "peo", "327080fWgOos", "NOT_PATH", "RunningHub - {{webappId}}", "__DEFAULT__", "&amp;", "addIssue", "自动填入画布关闭", " = 'then'; ", "toResolveHierarchy", "No handler for streamRequestor: ", "Sending all images...", "uri", "ssh", "runningRequests", "Open images from file", "charAt", "缺少主图资源", "contentMediaType", "pop", "gte", "refine", "msec", "getCanonicalLocales", "parseMissingKeyHandler", "未选择工作流", "if (", "ZodArray", "No crop", "#CC0066", "McpError", "parent schema must have all required keywords: ", "enum", "addPostProcessor", "ZodNumber", "mountedTransports", "Unsupported image input type", "resolved promise for", "#0033CC", "运行了 {{duration}} 秒，{{message}}", "video", "abortAllRequests", ") {  ", ") break; }  ", "[\\!\\$\\'\\(\\)\\*\\+\\,\\;\\:\\@]", "isNotification", "Action {{0}} 未找到", "保存当前", "选择素材来源", "valueSchema", "#FF6633", "_cachedPath", "zero", ".dataPath === undefined) ", "number", "=startErrs", "/properties", "colors", "2.1.0", "应用ID:", "keySeparator", "activeState", "debugDisableHeartbeatResponse", '[\\"\\\\]', '" resolves to more than one schema', "run API 调用失败 - HTTP 错误，状态: {{status}}", "isURL", "async ", "Expected ", "Clear guide frame", "getAccountStatus API 调用失败 - {{reason}}", "date-time", "未返回图片", "updateMissing", "app", "Inpaint (reverse crop)", "mesh", "spa", "getConnectionInfo", "userinfo", "#/definitions/schemaArray", "schemaUnknownRules", "Cannot register capabilities after connecting to transport", "keyword", "queue_remaining", "Entire Canvas", "assert", "getValidEnumValues", " = '' + ", "控件 {0} 转换失败：", "((\\d\\d[2468][048]|\\d\\d[13579][26]|\\d\\d0[48]|[02468][048]00|[13579][26]00)-02-29|\\d{4}-((0[13578]|1[02])-(0[1-9]|[12]\\d|3[01])|(0[469]|11)-(0[1-9]|[12]\\d|30)|(02)-(0[1-9]|1\\d|2[0-8])))", "elicitInput", "enabled", "Use entire canvas", "; } catch (e) { ", " , params: { pattern:  ", "_options", "{2}", "null", "Scan", "cuid", "cacheKey", "if ( ", "disable", "oninitialized", "style", "baseId", "Aborted", "_path", ".then", "Failed to pick file. Please try again.", "sdk"];
  return Fx = function() {
    return o;
  }, Fx();
}
class Nx extends Tx {
  constructor(x, t = {}) {
    const n = a;
    super(), di([n(2294), n(452), n(2330), n(2402), n(2189), n(2122), "utils"], x, this), this[n(1882)] = t, this[n(1882)][n(2607)] === void 0 && (this[n(1882)].keySeparator = "."), this.logger = fe[n(1510)](n(1476));
  }
  changeLanguage(x) {
    const t = a;
    x && (this[t(2390)] = x);
  }
  [a(1971)](x, t = { interpolation: {} }) {
    const n = a, e = { ...t };
    if (x == null) return !1;
    const r = this.resolve(x, e);
    return (r == null ? void 0 : r[n(1309)]) !== void 0;
  }
  [a(637)](x, t) {
    const n = a;
    let e = t.nsSeparator !== void 0 ? t[n(307)] : this[n(1882)][n(307)];
    e === void 0 && (e = ":");
    const r = t[n(2607)] !== void 0 ? t.keySeparator : this.options[n(2607)];
    let s = t.ns || this.options[n(2146)] || [];
    const i = e && x[n(1817)](e) > -1, c = !this.options.userDefinedKeySeparator && !t[n(2607)] && !this[n(1882)][n(2526)] && !t[n(307)] && !vi(x, e, r);
    if (i && !c) {
      const u = x[n(2457)](this.interpolator[n(2033)]);
      if (u && u[n(2463)] > 0) return { key: x, namespaces: g0(s) ? [s] : s };
      const d = x[n(2352)](e);
      (e !== r || e === r && this[n(1882)].ns[n(1817)](d[0]) > -1) && (s = d.shift()), x = d[n(1483)](r);
    }
    return { key: x, namespaces: g0(s) ? [s] : s };
  }
  translate(x, t, n) {
    const e = a;
    let r = typeof t == "object" ? { ...t } : t;
    if (typeof r !== e(1985) && this[e(1882)][e(2484)] && (r = this[e(1882)][e(2484)](arguments)), typeof options === e(1985) && (r = { ...r }), r || (r = {}), x == null) return "";
    Array[e(1155)](x) || (x = [String(x)]);
    const s = r[e(1342)] !== void 0 ? r[e(1342)] : this[e(1882)][e(1342)], i = r[e(2607)] !== void 0 ? r[e(2607)] : this[e(1882)][e(2607)], { key: c, namespaces: u } = this[e(637)](x[x.length - 1], r), d = u[u[e(2463)] - 1];
    let l = r[e(307)] !== void 0 ? r[e(307)] : this[e(1882)][e(307)];
    l === void 0 && (l = ":");
    const f = r.lng || this[e(2390)], g = r[e(841)] || this[e(1882)][e(841)];
    if ((f == null ? void 0 : f[e(2321)]()) === e(547))
      return g ? s ? { res: "" + d + l + c, usedKey: c, exactUsedKey: c, usedLng: f, usedNS: d, usedParams: this[e(2665)](r) } : "" + d + l + c : s ? { res: c, usedKey: c, exactUsedKey: c, usedLng: f, usedNS: d, usedParams: this[e(2665)](r) } : c;
    const h = this[e(2251)](x, r);
    let m = h == null ? void 0 : h[e(1309)];
    const v = (h == null ? void 0 : h[e(2322)]) || c, S = (h == null ? void 0 : h[e(1088)]) || c, E = [e(1240), e(1237), "[object RegExp]"], A = r[e(1419)] !== void 0 ? r[e(1419)] : this[e(1882)][e(1419)], T = !this[e(2122)] || this[e(2122)][e(2733)], R = r.count !== void 0 && !g0(r[e(424)]), P = Nx[e(497)](r), F = R ? this[e(2330)][e(849)](f, r[e(424)], r) : "", j = r[e(400)] && R ? this[e(2330)].getSuffix(f, r.count, { ordinal: !1 }) : "", O = R && !r.ordinal && r.count === 0, L = O && r[e(1261) + this[e(1882)].pluralSeparator + e(2599)] || r[e(1261) + F] || r[e(1261) + j] || r[e(1261)];
    let C = m;
    T && !m && P && (C = L);
    const N = Va(C), z = Object[e(1060)][e(830)].apply(C);
    if (T && C && N && E[e(1817)](z) < 0 && !(g0(A) && Array[e(1155)](C))) {
      if (!r[e(468)] && !this[e(1882)].returnObjects) {
        !this.options[e(2466)] && this.logger[e(515)](e(2153));
        const U = this[e(1882)][e(2466)] ? this[e(1882)][e(2466)](v, C, { ...r, ns: u }) : e(2327) + c + " (" + this[e(2390)] + e(1852);
        return s ? (h[e(1309)] = U, h[e(2094)] = this[e(2665)](r), h) : U;
      }
      if (i) {
        const U = Array[e(1155)](C), V = U ? [] : {}, G = U ? S : v;
        for (const i0 in C)
          if (Object[e(1060)][e(1995)][e(1850)](C, i0)) {
            const u0 = "" + G + i + i0;
            P && !m ? V[i0] = this[e(735)](u0, { ...r, defaultValue: Va(L) ? L[i0] : void 0, joinArrays: !1, ns: u }) : V[i0] = this[e(735)](u0, { ...r, joinArrays: !1, ns: u }), V[i0] === u0 && (V[i0] = C[i0]);
          }
        m = V;
      }
    } else if (T && g0(A) && Array[e(1155)](m))
      m = m[e(1483)](A), m && (m = this[e(469)](m, x, r, n));
    else {
      let U = !1, V = !1;
      !this[e(1218)](m) && P && (U = !0, m = L), !this[e(1218)](m) && (V = !0, m = c);
      const G = r[e(1066)] || this[e(1882)].missingKeyNoValueFallbackToKey, i0 = G && V ? void 0 : m, u0 = P && L !== m && this.options[e(2620)];
      if (V || U || u0) {
        if (this[e(1814)][e(1799)](u0 ? "updateKey" : e(2461), f, d, c, u0 ? L : m), i) {
          const k0 = this[e(2251)](c, { ...r, keySeparator: !1 });
          k0 && k0[e(1309)] && this.logger[e(515)]("Seems the loaded translations were in flat JSON format instead of nested. Either set keySeparator: false on init or make sure your translations are published in nested format.");
        }
        let l0 = [];
        const o0 = this[e(452)].getFallbackCodes(this.options[e(2255)], r[e(986)] || this[e(2390)]);
        if (this[e(1882)][e(1689)] === e(2218) && o0 && o0[0]) for (let k0 = 0; k0 < o0[e(2463)]; k0++)
          l0.push(o0[k0]);
        else this[e(1882)][e(1689)] === "all" ? l0 = this[e(452)][e(2556)](r[e(986)] || this[e(2390)]) : l0[e(1851)](r.lng || this[e(2390)]);
        const f0 = (k0, w0, j0) => {
          var D;
          const C0 = e, J0 = P && j0 !== m ? j0 : i0;
          this[C0(1882)][C0(1528)] ? this[C0(1882)][C0(1528)](k0, d, w0, J0, u0, r) : (D = this.backendConnector) != null && D[C0(961)] && this.backendConnector[C0(961)](k0, d, w0, J0, u0, r), this[C0(2746)]("missingKey", k0, d, w0, m);
        };
        this[e(1882)][e(961)] && (this.options[e(1393)] && R ? l0.forEach((k0) => {
          const w0 = e, j0 = this[w0(2330)][w0(1755)](k0, r);
          O && r[w0(1261) + this.options[w0(288)] + w0(2599)] && j0.indexOf(this[w0(1882)].pluralSeparator + "zero") < 0 && j0.push(this[w0(1882)][w0(288)] + "zero"), j0[w0(641)]((C0) => {
            const J0 = w0;
            f0([k0], c + C0, r[J0(1261) + C0] || L);
          });
        }) : f0(l0, c, L));
      }
      m = this[e(469)](m, x, r, h, n), V && m === c && this[e(1882)].appendNamespaceToMissingKey && (m = "" + d + l + c), (V || U) && this[e(1882)][e(2571)] && (m = this[e(1882)][e(2571)](this[e(1882)][e(409)] ? "" + d + l + c : c, U ? m : void 0, r));
    }
    return s ? (h[e(1309)] = m, h[e(2094)] = this[e(2665)](r), h) : m;
  }
  extendTranslation(x, t, n, e, r) {
    var u, d;
    const s = a;
    if ((u = this[s(2122)]) != null && u.parse) x = this[s(2122)][s(1383)](x, { ...this[s(1882)][s(1605)].defaultVariables, ...n }, n.lng || this[s(2390)] || e.usedLng, e.usedNS, e[s(2322)], { resolved: e });
    else if (!n[s(803)]) {
      n[s(1605)] && this[s(2402)][s(2226)]({ ...n, interpolation: { ...this[s(1882)][s(1605)], ...n[s(1605)] } });
      const l = g0(x) && (((d = n == null ? void 0 : n[s(1605)]) == null ? void 0 : d[s(1737)]) !== void 0 ? n[s(1605)][s(1737)] : this.options.interpolation[s(1737)]);
      let f;
      if (l) {
        const h = x[s(2457)](this[s(2402)][s(2033)]);
        f = h && h[s(2463)];
      }
      let g = n[s(1936)] && !g0(n[s(1936)]) ? n[s(1936)] : n;
      if (this.options[s(1605)][s(819)] && (g = { ...this[s(1882)][s(1605)][s(819)], ...g }), x = this.interpolator.interpolate(x, g, n[s(986)] || this.language || e[s(1641)], n), l) {
        const h = x[s(2457)](this[s(2402)][s(2033)]), m = h && h[s(2463)];
        f < m && (n[s(1301)] = !1);
      }
      !n.lng && e && e[s(1309)] && (n[s(986)] = this[s(2390)] || e.usedLng), n[s(1301)] !== !1 && (x = this.interpolator[s(1301)](x, (...h) => {
        const m = s;
        return (r == null ? void 0 : r[0]) === h[0] && !n[m(1305)] ? (this[m(1814)].warn(m(1258) + h[0] + m(2694) + t[0]), null) : this[m(735)](...h, t);
      }, n)), n[s(1605)] && this[s(2402)][s(752)]();
    }
    const i = n.postProcess || this[s(1882)][s(1126)], c = g0(i) ? [i] : i;
    return x != null && (c != null && c.length) && n[s(1145)] !== !1 && (x = Kn[s(569)](c, x, t, this[s(1882)] && this[s(1882)][s(1376)] ? { i18nResolved: { ...e, usedParams: this.getUsedParamsDetails(n) }, ...n } : n, this)), x;
  }
  [a(2251)](x, t = {}) {
    let n, e, r, s, i;
    return g0(x) && (x = [x]), x.forEach((c) => {
      const u = B;
      if (this[u(1218)](n)) return;
      const d = this.extractFromKey(c, t), l = d[u(1176)];
      e = l;
      let f = d.namespaces;
      this[u(1882)][u(1826)] && (f = f[u(329)](this.options[u(1826)]));
      const g = t[u(424)] !== void 0 && !g0(t.count), h = g && !t[u(400)] && t[u(424)] === 0, m = t[u(1305)] !== void 0 && (g0(t.context) || typeof t.context === u(2601)) && t[u(1305)] !== "", v = t.lngs ? t.lngs : this[u(452)].toResolveHierarchy(t[u(986)] || this.language, t.fallbackLng);
      f.forEach((S) => {
        var A, T;
        const E = u;
        this[E(1218)](n) || (i = S, !Ha[v[0] + "-" + S] && ((A = this[E(2096)]) != null && A.hasLoadedNamespace) && !((T = this[E(2096)]) != null && T[E(2683)](i)) && (Ha[v[0] + "-" + S] = !0, this.logger.warn('key "' + e + '" for languages "' + v.join(", ") + E(902) + i + E(1162), E(2342))), v[E(641)]((R) => {
          var O;
          const P = E;
          if (this[P(1218)](n)) return;
          s = R;
          const F = [l];
          if ((O = this.i18nFormat) != null && O.addLookupKeys) this[P(2122)].addLookupKeys(F, l, R, S, t);
          else {
            let L;
            g && (L = this.pluralResolver[P(849)](R, t.count, t));
            const C = this[P(1882)].pluralSeparator + P(2599), N = this[P(1882)][P(288)] + P(400) + this[P(1882)].pluralSeparator;
            if (g && (F[P(1851)](l + L), t.ordinal && L.indexOf(N) === 0 && F[P(1851)](l + L[P(1936)](N, this.options[P(288)])), h && F[P(1851)](l + C)), m) {
              const z = "" + l + this[P(1882)].contextSeparator + t[P(1305)];
              F.push(z), g && (F[P(1851)](z + L), t[P(400)] && L[P(1817)](N) === 0 && F[P(1851)](z + L[P(1936)](N, this[P(1882)][P(288)])), h && F.push(z + C));
            }
          }
          let j;
          for (; j = F[P(2566)](); )
            !this.isValidLookup(n) && (r = j, n = this[P(2152)](R, S, j, t));
        }));
      });
    }), { res: n, usedKey: e, exactUsedKey: r, usedLng: s, usedNS: i };
  }
  [a(1218)](x) {
    const t = a;
    return x !== void 0 && !(!this[t(1882)][t(1678)] && x === null) && !(!this[t(1882)][t(2338)] && x === "");
  }
  [a(2152)](x, t, n, e = {}) {
    var s;
    const r = a;
    return (s = this[r(2122)]) != null && s[r(2152)] ? this[r(2122)].getResource(x, t, n, e) : this[r(2294)][r(2152)](x, t, n, e);
  }
  getUsedParamsDetails(x = {}) {
    const t = a, n = [t(1261), t(400), t(1305), t(1936), "lng", t(1818), t(2255), "ns", t(2607), "nsSeparator", "returnObjects", t(1342), t(1419), t(1126), t(1605)], e = x[t(1936)] && !g0(x[t(1936)]);
    let r = e ? x.replace : x;
    if (e && typeof x.count !== t(455) && (r[t(424)] = x[t(424)]), this[t(1882)][t(1605)][t(819)] && (r = { ...this.options[t(1605)].defaultVariables, ...r }), !e) {
      r = { ...r };
      for (const s of n)
        delete r[s];
    }
    return r;
  }
  static [a(497)](x) {
    const t = a, n = "defaultValue";
    for (const e in x)
      if (Object[t(1060)][t(1995)].call(x, e) && n === e[t(248)](0, n[t(2463)]) && x[e] !== void 0) return !0;
    return !1;
  }
}
class _a {
  constructor(x) {
    const t = a;
    this.options = x, this[t(1757)] = this[t(1882)][t(1757)] || !1, this[t(1814)] = fe.create(t(452));
  }
  [a(1883)](x) {
    const t = a;
    if (x = nx(x), !x || x.indexOf("-") < 0) return null;
    const n = x[t(2352)]("-");
    return n[t(2463)] === 2 || (n[t(2566)](), n[n[t(2463)] - 1].toLowerCase() === "x") ? null : this[t(1536)](n[t(1483)]("-"));
  }
  [a(674)](x) {
    const t = a;
    if (x = nx(x), !x || x[t(1817)]("-") < 0) return x;
    const n = x[t(2352)]("-");
    return this[t(1536)](n[0]);
  }
  [a(1536)](x) {
    const t = a;
    if (g0(x) && x[t(1817)]("-") > -1) {
      let n;
      try {
        n = Intl[t(2570)](x)[0];
      } catch {
      }
      return n && this[t(1882)][t(1828)] && (n = n[t(2321)]()), n || (this.options[t(1828)] ? x[t(2321)]() : x);
    }
    return this[t(1882)][t(811)] || this[t(1882)].lowerCaseLng ? x[t(2321)]() : x;
  }
  [a(2243)](x) {
    const t = a;
    return (this[t(1882)][t(1215)] === t(1733) || this.options[t(2194)]) && (x = this.getLanguagePartFromCode(x)), !this.supportedLngs || !this[t(1757)][t(2463)] || this[t(1757)][t(1817)](x) > -1;
  }
  [a(2112)](x) {
    const t = a;
    if (!x) return null;
    let n;
    return x.forEach((e) => {
      const r = B;
      if (n) return;
      const s = this[r(1536)](e);
      (!this[r(1882)][r(1757)] || this[r(2243)](s)) && (n = s);
    }), !n && this[t(1882)][t(1757)] && x.forEach((e) => {
      const r = t;
      if (n) return;
      const s = this[r(1883)](e);
      if (this[r(2243)](s)) return n = s;
      const i = this[r(674)](e);
      if (this[r(2243)](i)) return n = i;
      n = this[r(1882)][r(1757)][r(2450)]((c) => {
        const u = r;
        if (c === i) return c;
        if (!(c[u(1817)]("-") < 0 && i[u(1817)]("-") < 0) && (c[u(1817)]("-") > 0 && i[u(1817)]("-") < 0 && c[u(248)](0, c[u(1817)]("-")) === i || c[u(1817)](i) === 0 && i[u(2463)] > 1))
          return c;
      });
    }), n || (n = this[t(1242)](this[t(1882)][t(2255)])[0]), n;
  }
  [a(1242)](x, t) {
    const n = a;
    if (!x) return [];
    if (typeof x == "function" && (x = x(t)), g0(x) && (x = [x]), Array.isArray(x)) return x;
    if (!t) return x[n(779)] || [];
    let e = x[t];
    return e || (e = x[this.getScriptPartFromCode(t)]), e || (e = x[this[n(1536)](t)]), e || (e = x[this.getLanguagePartFromCode(t)]), e || (e = x[n(779)]), e || [];
  }
  toResolveHierarchy(x, t) {
    const n = a, e = this[n(1242)]((t === !1 ? [] : t) || this[n(1882)].fallbackLng || [], x), r = [], s = (i) => {
      const c = n;
      i && (this[c(2243)](i) ? r.push(i) : this[c(1814)][c(515)](c(886) + i));
    };
    return g0(x) && (x[n(1817)]("-") > -1 || x[n(1817)]("_") > -1) ? (this[n(1882)][n(1215)] !== "languageOnly" && s(this[n(1536)](x)), this[n(1882)][n(1215)] !== n(1733) && this[n(1882)][n(1215)] !== "currentOnly" && s(this.getScriptPartFromCode(x)), this[n(1882)][n(1215)] !== n(1133) && s(this.getLanguagePartFromCode(x))) : g0(x) && s(this[n(1536)](x)), e[n(641)]((i) => {
      r[n(1817)](i) < 0 && s(this.formatLanguageCode(i));
    }), r;
  }
}
const Wa = { zero: 0, one: 1, two: 2, few: 3, many: 4, other: 5 }, Ba = { select: (o) => a(o === 1 ? 1381 : 393), resolvedOptions: () => ({ pluralCategories: [a(1381), a(393)] }) };
class Si {
  constructor(x, t = {}) {
    const n = a;
    this[n(452)] = x, this[n(1882)] = t, this.logger = fe[n(1510)]("pluralResolver"), this[n(2480)] = {};
  }
  [a(749)](x, t) {
    const n = a;
    this[n(701)][x] = t;
  }
  [a(1899)]() {
    const x = a;
    this[x(2480)] = {};
  }
  [a(2479)](x, t = {}) {
    const n = a, e = nx(x === n(834) ? "en" : x), r = t[n(400)] ? n(400) : "cardinal", s = JSON[n(555)]({ cleanedCode: e, type: r });
    if (s in this.pluralRulesCache) return this[n(2480)][s];
    let i;
    try {
      i = new Intl[n(2065)](e, { type: r });
    } catch {
      if (!Intl) return this.logger.error(n(2363)), Ba;
      if (!x[n(2457)](/-|_/)) return Ba;
      const u = this[n(452)].getLanguagePartFromCode(x);
      i = this[n(2479)](u, t);
    }
    return this.pluralRulesCache[s] = i, i;
  }
  [a(1947)](x, t = {}) {
    const n = a;
    let e = this[n(2479)](x, t);
    return e || (e = this[n(2479)](n(834), t)), (e == null ? void 0 : e[n(294)]().pluralCategories[n(2463)]) > 1;
  }
  [a(1808)](x, t, n = {}) {
    const e = a;
    return this[e(1755)](x, n)[e(698)]((r) => "" + t + r);
  }
  [a(1755)](x, t = {}) {
    const n = a;
    let e = this[n(2479)](x, t);
    return e || (e = this[n(2479)](n(834), t)), e ? e[n(294)]()[n(654)][n(1758)]((r, s) => Wa[r] - Wa[s])[n(698)]((r) => "" + this[n(1882)].prepend + (t[n(400)] ? "ordinal" + this.options[n(2452)] : "") + r) : [];
  }
  getSuffix(x, t, n = {}) {
    const e = a, r = this[e(2479)](x, n);
    return r ? "" + this[e(1882)][e(2452)] + (n[e(400)] ? e(400) + this[e(1882)][e(2452)] : "") + r[e(1710)](t) : (this[e(1814)][e(515)]("no plural rule found for: " + x), this[e(849)]("dev", t, n));
  }
}
const Za = (o, x, t, n = ".", e = !0) => {
  let r = hi(o, x, t);
  return !r && e && g0(t) && (r = Zt(o, t, n), r === void 0 && (r = Zt(x, t, n))), r;
}, Bx = (o) => o[a(1936)](/\$/g, a(1607));
class ki {
  constructor(x = {}) {
    var n;
    const t = a;
    this.logger = fe[t(1510)](t(2402)), this.options = x, this[t(1671)] = ((n = x == null ? void 0 : x[t(1605)]) == null ? void 0 : n[t(1671)]) || ((e) => e), this[t(2226)](x);
  }
  [a(2226)](x = {}) {
    const t = a;
    x[t(1605)] || (x.interpolation = { escapeValue: !0 });
    const { escape: n, escapeValue: e, useRawValueToEscape: r, prefix: s, prefixEscaped: i, suffix: c, suffixEscaped: u, formatSeparator: d, unescapeSuffix: l, unescapePrefix: f, nestingPrefix: g, nestingPrefixEscaped: h, nestingSuffix: m, nestingSuffixEscaped: v, nestingOptionsSeparator: S, maxReplaces: E, alwaysFormat: A } = x.interpolation;
    this[t(309)] = n !== void 0 ? n : mi, this[t(256)] = e !== void 0 ? e : !0, this[t(826)] = r !== void 0 ? r : !1, this[t(1791)] = s ? He(s) : i || "{{", this[t(1447)] = c ? He(c) : u || "}}", this.formatSeparator = d || ",", this[t(988)] = l ? "" : f || "-", this.unescapeSuffix = this[t(988)] ? "" : l || "", this[t(1048)] = g ? He(g) : h || He(t(2208)), this[t(1005)] = m ? He(m) : v || He(")"), this.nestingOptionsSeparator = S || ",", this[t(2413)] = E || 1e3, this[t(1951)] = A !== void 0 ? A : !1, this.resetRegExp();
  }
  reset() {
    const x = a;
    this[x(1882)] && this[x(2226)](this.options);
  }
  [a(2374)]() {
    const x = a, t = (n, e) => {
      const r = B;
      return (n == null ? void 0 : n[r(324)]) === e ? (n.lastIndex = 0, n) : new RegExp(e, "g");
    };
    this[x(2324)] = t(this[x(2324)], this[x(1791)] + x(1855) + this[x(1447)]), this[x(265)] = t(this[x(265)], "" + this[x(1791)] + this[x(988)] + x(1855) + this[x(1370)] + this[x(1447)]), this[x(2033)] = t(this[x(2033)], this[x(1048)] + x(1855) + this[x(1005)]);
  }
  [a(266)](x, t, n, e) {
    var h;
    const r = a;
    let s, i, c;
    const u = this[r(1882)] && this[r(1882)][r(1605)] && this[r(1882)][r(1605)][r(819)] || {}, d = (m) => {
      const v = r;
      if (m[v(1817)](this[v(412)]) < 0) {
        const T = Za(t, u, m, this.options[v(2607)], this[v(1882)].ignoreJSONStructure);
        return this.alwaysFormat ? this[v(1671)](T, void 0, n, { ...e, ...t, interpolationkey: m }) : T;
      }
      const S = m.split(this[v(412)]), E = S[v(2325)]()[v(549)](), A = S[v(1483)](this.formatSeparator)[v(549)]();
      return this[v(1671)](Za(t, u, E, this.options.keySeparator, this[v(1882)].ignoreJSONStructure), A, n, { ...e, ...t, interpolationkey: E });
    };
    this[r(2374)]();
    const l = (e == null ? void 0 : e[r(317)]) || this.options[r(317)], f = ((h = e == null ? void 0 : e[r(1605)]) == null ? void 0 : h[r(1737)]) !== void 0 ? e[r(1605)][r(1737)] : this[r(1882)][r(1605)][r(1737)];
    return [{ regex: this.regexpUnescape, safeValue: (m) => Bx(m) }, { regex: this[r(2324)], safeValue: (m) => this[r(256)] ? Bx(this[r(309)](m)) : Bx(m) }][r(641)]((m) => {
      const v = r;
      for (c = 0; s = m.regex[v(1719)](x); ) {
        const S = s[1][v(549)]();
        if (i = d(S), i === void 0)
          if (typeof l === v(2176)) {
            const A = l(x, s, e);
            i = g0(A) ? A : "";
          } else if (e && Object[v(1060)].hasOwnProperty[v(1850)](e, S)) i = "";
          else if (f) {
            i = s[0];
            continue;
          } else this[v(1814)][v(515)](v(866) + S + v(1907) + x), i = "";
        else !g0(i) && !this[v(826)] && (i = La(i));
        const E = m.safeValue(i);
        if (x = x[v(1936)](s[0], E), f ? (m[v(809)][v(2104)] += i[v(2463)], m[v(809)][v(2104)] -= s[0].length) : m[v(809)].lastIndex = 0, c++, c >= this[v(2413)]) break;
      }
    }), x;
  }
  nest(x, t, n = {}) {
    const e = a;
    let r, s, i;
    const c = (u, d) => {
      const l = B, f = this[l(1336)];
      if (u[l(1817)](f) < 0) return u;
      const g = u.split(new RegExp(f + l(1208)));
      let h = "{" + g[1];
      u = g[0], h = this[l(266)](h, i);
      const m = h[l(2457)](/'/g), v = h[l(2457)](/"/g);
      (((m == null ? void 0 : m[l(2463)]) ?? 0) % 2 === 0 && !v || v[l(2463)] % 2 !== 0) && (h = h.replace(/'/g, '"'));
      try {
        i = JSON[l(1383)](h), d && (i = { ...d, ...i });
      } catch (S) {
        return this[l(1814)][l(515)](l(689) + u, S), "" + u + f + h;
      }
      return i[l(1261)] && i[l(1261)].indexOf(this[l(1791)]) > -1 && delete i.defaultValue, u;
    };
    for (; r = this[e(2033)][e(1719)](x); ) {
      let u = [];
      i = { ...n }, i = i[e(1936)] && !g0(i.replace) ? i[e(1936)] : i, i[e(1145)] = !1, delete i.defaultValue;
      let d = !1;
      if (r[0][e(1817)](this[e(412)]) !== -1 && !/{.*}/[e(2734)](r[1])) {
        const l = r[1][e(2352)](this[e(412)])[e(698)]((f) => f[e(549)]());
        r[1] = l.shift(), u = l, d = !0;
      }
      if (s = t(c[e(1850)](this, r[1][e(549)](), i), i), s && r[0] === x && !g0(s)) return s;
      g0(s) || (s = La(s)), !s && (this[e(1814)][e(515)](e(1556) + r[1] + " for nesting " + x), s = ""), d && (s = u[e(1173)]((l, f) => this.format(l, f, n.lng, { ...n, interpolationkey: r[1][e(549)]() }), s[e(549)]())), x = x[e(1936)](r[0], s), this[e(2324)][e(2104)] = 0;
    }
    return x;
  }
}
const Pi = (o) => {
  const x = a;
  let t = o[x(2321)]()[x(549)]();
  const n = {};
  if (o[x(1817)]("(") > -1) {
    const e = o[x(2352)]("(");
    t = e[0][x(2321)]()[x(549)]();
    const r = e[1][x(248)](0, e[1].length - 1);
    t === x(2223) && r[x(1817)](":") < 0 ? n[x(2223)] || (n[x(2223)] = r.trim()) : t === x(577) && r[x(1817)](":") < 0 ? n[x(2800)] || (n[x(2800)] = r[x(549)]()) : r[x(2352)](";").forEach((i) => {
      const c = x;
      if (i) {
        const [u, ...d] = i.split(":"), l = d[c(1483)](":")[c(549)]()[c(1936)](/^'+|'+$/g, ""), f = u[c(549)]();
        n[f] || (n[f] = l), l === "false" && (n[f] = !1), l === c(1100) && (n[f] = !0), isNaN(l) || (n[f] = parseInt(l, 10));
      }
    });
  }
  return { formatName: t, formatOptions: n };
}, Ka = (o) => {
  const x = {};
  return (t, n, e) => {
    const r = B;
    let s = e;
    e && e[r(2007)] && e.formatParams && e[r(1713)][e[r(2007)]] && e[e[r(2007)]] && (s = { ...s, [e.interpolationkey]: void 0 });
    const i = n + JSON[r(555)](s);
    let c = x[i];
    return !c && (c = o(nx(n), e), x[i] = c), c(t);
  };
}, Ei = (o) => (x, t, n) => o(nx(t), n)(x);
class Ii {
  constructor(x = {}) {
    const t = a;
    this[t(1814)] = fe[t(1510)]("formatter"), this[t(1882)] = x, this[t(2226)](x);
  }
  init(x, t = { interpolation: {} }) {
    const n = a;
    this[n(412)] = t.interpolation.formatSeparator || ",";
    const e = t[n(1979)] ? Ka : Ei;
    this[n(1127)] = { number: e((r, s) => {
      const i = n, c = new Intl[i(2138)](r, { ...s });
      return (u) => c[i(1671)](u);
    }), currency: e((r, s) => {
      const i = n, c = new Intl[i(2138)](r, { ...s, style: i(2223) });
      return (u) => c[i(1671)](u);
    }), datetime: e((r, s) => {
      const i = n, c = new Intl.DateTimeFormat(r, { ...s });
      return (u) => c[i(1671)](u);
    }), relativetime: e((r, s) => {
      const i = n, c = new Intl[i(814)](r, { ...s });
      return (u) => c[i(1671)](u, s[i(2800)] || "day");
    }), list: e((r, s) => {
      const i = n, c = new Intl[i(563)](r, { ...s });
      return (u) => c[i(1671)](u);
    }) };
  }
  [a(2736)](x, t) {
    const n = a;
    this[n(1127)][x[n(2321)]().trim()] = t;
  }
  addCached(x, t) {
    const n = a;
    this.formats[x[n(2321)]()[n(549)]()] = Ka(t);
  }
  format(x, t, n, e = {}) {
    const r = a, s = t.split(this[r(412)]);
    if (s[r(2463)] > 1 && s[0][r(1817)]("(") > 1 && s[0][r(1817)](")") < 0 && s.find((c) => c[r(1817)](")") > -1)) {
      const c = s[r(1672)]((u) => u[r(1817)](")") > -1);
      s[0] = [s[0], ...s[r(295)](1, c)].join(this.formatSeparator);
    }
    return s[r(1173)]((c, u) => {
      var g;
      const d = r, { formatName: l, formatOptions: f } = Pi(u);
      if (this.formats[l]) {
        let h = c;
        try {
          const m = ((g = e == null ? void 0 : e.formatParams) == null ? void 0 : g[e[d(2007)]]) || {}, v = m[d(2533)] || m[d(986)] || e.locale || e[d(986)] || n;
          h = this.formats[l](c, v, { ...f, ...e, ...m });
        } catch (m) {
          this.logger[d(515)](m);
        }
        return h;
      } else this[d(1814)][d(515)](d(2014) + l);
      return c;
    }, x);
  }
}
const Ri = (o, x) => {
  const t = a;
  o[t(2205)][x] !== void 0 && (delete o[t(2205)][x], o.pendingCount--);
};
class Ci extends Tx {
  constructor(x, t, n, e = {}) {
    var s, i;
    const r = a;
    super(), this[r(350)] = x, this[r(1766)] = t, this[r(2405)] = n, this[r(452)] = n[r(452)], this[r(1882)] = e, this[r(1814)] = fe[r(1510)](r(2189)), this[r(1254)] = [], this[r(1097)] = e[r(1097)] || 10, this[r(1661)] = 0, this[r(1178)] = e[r(1178)] >= 0 ? e[r(1178)] : 5, this[r(2377)] = e.retryTimeout >= 1 ? e[r(2377)] : 350, this[r(878)] = {}, this[r(484)] = [], (i = (s = this[r(350)]) == null ? void 0 : s.init) == null || i.call(s, n, e[r(350)], e);
  }
  [a(1213)](x, t, n, e) {
    const r = a, s = {}, i = {}, c = {}, u = {};
    return x[r(641)]((d) => {
      const l = r;
      let f = !0;
      t[l(641)]((g) => {
        const h = l, m = d + "|" + g;
        !n.reload && this.store[h(2180)](d, g) ? this[h(878)][m] = 2 : this[h(878)][m] < 0 || (this[h(878)][m] === 1 ? i[m] === void 0 && (i[m] = !0) : (this.state[m] = 1, f = !1, i[m] === void 0 && (i[m] = !0), s[m] === void 0 && (s[m] = !0), u[g] === void 0 && (u[g] = !0)));
      }), f || (c[d] = !0);
    }), (Object[r(1448)](s)[r(2463)] || Object[r(1448)](i).length) && this[r(484)][r(1851)]({ pending: i, pendingCount: Object[r(1448)](i)[r(2463)], loaded: {}, errors: [], callback: e }), { toLoad: Object[r(1448)](s), pending: Object[r(1448)](i), toLoadLanguages: Object[r(1448)](c), toLoadNamespaces: Object[r(1448)](u) };
  }
  [a(1577)](x, t, n) {
    const e = a, r = x[e(2352)]("|"), s = r[0], i = r[1];
    t && this[e(2746)](e(2449), s, i, t), !t && n && this[e(1766)][e(798)](s, i, n, void 0, void 0, { skipCopy: !0 }), this.state[x] = t ? -1 : 2, t && n && (this[e(878)][x] = 0);
    const c = {};
    this[e(484)].forEach((u) => {
      const d = e;
      fi(u[d(1577)], [s], i), Ri(u, x), t && u[d(622)][d(1851)](t), u[d(2337)] === 0 && !u.done && (Object[d(1448)](u[d(1577)])[d(641)]((l) => {
        const f = d;
        c[l] || (c[l] = {});
        const g = u.loaded[l];
        g.length && g[f(641)]((h) => {
          c[l][h] === void 0 && (c[l][h] = !0);
        });
      }), u[d(2530)] = !0, u[d(622)][d(2463)] ? u[d(1677)](u[d(622)]) : u[d(1677)]());
    }), this[e(2746)](e(1577), c), this[e(484)] = this[e(484)][e(558)]((u) => !u[e(2530)]);
  }
  [a(2355)](x, t, n, e = 0, r = this.retryTimeout, s) {
    const i = a;
    if (!x[i(2463)]) return s(null, {});
    if (this.readingCalls >= this.maxParallelReads) {
      this.waitingReads[i(1851)]({ lng: x, ns: t, fcName: n, tried: e, wait: r, callback: s });
      return;
    }
    this[i(1661)]++;
    const c = (d, l) => {
      const f = i;
      if (this[f(1661)]--, this[f(1254)][f(2463)] > 0) {
        const g = this.waitingReads[f(2325)]();
        this[f(2355)](g[f(986)], g.ns, g.fcName, g.tried, g[f(2697)], g[f(1677)]);
      }
      if (d && l && e < this.maxRetries) {
        setTimeout(() => {
          this.read.call(this, x, t, n, e + 1, r * 2, s);
        }, r);
        return;
      }
      s(d, l);
    }, u = this[i(350)][n][i(1926)](this[i(350)]);
    if (u[i(2463)] === 2) {
      try {
        const d = u(x, t);
        d && typeof d.then === i(2176) ? d[i(2278)]((l) => c(null, l))[i(580)](c) : c(null, d);
      } catch (d) {
        c(d);
      }
      return;
    }
    return u(x, t, c);
  }
  [a(2698)](x, t, n = {}, e) {
    const r = a;
    if (!this[r(350)]) return this[r(1814)][r(515)](r(667)), e && e();
    g0(x) && (x = this[r(452)][r(2556)](x)), g0(t) && (t = [t]);
    const s = this[r(1213)](x, t, n, e);
    if (!s.toLoad[r(2463)])
      return s[r(2205)][r(2463)] || e(), null;
    s.toLoad[r(641)]((i) => {
      this[r(2376)](i);
    });
  }
  load(x, t, n) {
    this[a(2698)](x, t, {}, n);
  }
  [a(750)](x, t, n) {
    this[a(2698)](x, t, { reload: !0 }, n);
  }
  loadOne(x, t = "") {
    const n = a, e = x[n(2352)]("|"), r = e[0], s = e[1];
    this[n(2355)](r, s, n(2355), void 0, void 0, (i, c) => {
      const u = n;
      i && this[u(1814)][u(515)](t + u(1529) + s + u(240) + r + u(1562), i), !i && c && this[u(1814)][u(1799)](t + "loaded namespace " + s + u(240) + r, c), this[u(1577)](x, i, c);
    });
  }
  [a(961)](x, t, n, e, r, s = {}, i = () => {
  }) {
    var u, d, l, f, g;
    const c = a;
    if ((d = (u = this[c(2405)]) == null ? void 0 : u.utils) != null && d[c(2683)] && !((f = (l = this[c(2405)]) == null ? void 0 : l[c(2096)]) != null && f.hasLoadedNamespace(t))) {
      this.logger[c(515)](c(2806) + n + c(2248) + t + c(1162), c(2342));
      return;
    }
    if (!(n == null || n === "")) {
      if ((g = this[c(350)]) != null && g[c(1510)]) {
        const h = { ...s, isUpdate: r }, m = this[c(350)].create[c(1926)](this[c(350)]);
        if (m[c(2463)] < 6) try {
          let v;
          m[c(2463)] === 5 ? v = m(x, t, n, e, h) : v = m(x, t, n, e), v && typeof v.then === c(2176) ? v[c(2278)]((S) => i(null, S)).catch(i) : i(null, v);
        } catch (v) {
          i(v);
        }
        else m(x, t, n, e, i, h);
      }
      !x || !x[0] || this.store[c(322)](x[0], t, n, e);
    }
  }
}
const Ga = () => ({ debug: !1, initAsync: !0, ns: [a(893)], defaultNS: [a(893)], fallbackLng: ["dev"], fallbackNS: !1, supportedLngs: !1, nonExplicitSupportedLngs: !1, load: a(912), preload: !1, simplifyPluralSuffix: !0, keySeparator: ".", nsSeparator: ":", pluralSeparator: "_", contextSeparator: "_", partialBundledLanguages: !1, saveMissing: !1, updateMissing: !1, saveMissingTo: a(2218), saveMissingPlurals: !0, missingKeyHandler: !1, missingInterpolationHandler: !1, postProcess: !1, postProcessPassResolved: !1, returnNull: !1, returnEmptyString: !0, returnObjects: !1, joinArrays: !1, returnedObjectHandler: !1, parseMissingKeyHandler: !1, appendNamespaceToMissingKey: !1, appendNamespaceToCIMode: !1, overloadTranslationOptionHandler: (o) => {
  const x = a;
  let t = {};
  if (typeof o[1] == "object" && (t = o[1]), g0(o[1]) && (t.defaultValue = o[1]), g0(o[2]) && (t.tDescription = o[2]), typeof o[2] === x(1985) || typeof o[3] === x(1985)) {
    const n = o[3] || o[2];
    Object[x(1448)](n)[x(641)]((e) => {
      t[e] = n[e];
    });
  }
  return t;
}, interpolation: { escapeValue: !0, format: (o) => o, prefix: "{{", suffix: "}}", formatSeparator: ",", unescapePrefix: "-", nestingPrefix: "$t(", nestingSuffix: ")", nestingOptionsSeparator: ",", maxReplaces: 1e3, skipOnVariables: !0 }, cacheInBuiltFormats: !0 }), Ja = (o) => {
  var t, n;
  const x = a;
  return g0(o.ns) && (o.ns = [o.ns]), g0(o.fallbackLng) && (o[x(2255)] = [o.fallbackLng]), g0(o[x(1826)]) && (o[x(1826)] = [o[x(1826)]]), ((n = (t = o[x(1757)]) == null ? void 0 : t[x(1817)]) == null ? void 0 : n.call(t, x(547))) < 0 && (o[x(1757)] = o[x(1757)][x(329)]([x(547)])), typeof o[x(1074)] == "boolean" && (o[x(959)] = o[x(1074)]), o;
}, hx = () => {
}, Fi = (o) => {
  const x = a;
  Object[x(2368)](Object[x(2191)](o)).forEach((n) => {
    const e = x;
    typeof o[n] === e(2176) && (o[n] = o[n].bind(o));
  });
};
class sx extends Tx {
  constructor(x = {}, t) {
    const n = a;
    if (super(), this[n(1882)] = Ja(x), this[n(2405)] = {}, this[n(1814)] = fe, this[n(426)] = { external: [] }, Fi(this), t && !this[n(2392)] && !x[n(2404)]) {
      if (!this[n(1882)][n(959)]) return this[n(2226)](x, t), this;
      setTimeout(() => {
        this[n(2226)](x, t);
      }, 0);
    }
  }
  init(x = {}, t) {
    const n = a;
    this[n(1431)] = !0, typeof x === n(2176) && (t = x, x = {}), x[n(2146)] == null && x.ns && (g0(x.ns) ? x.defaultNS = x.ns : x.ns.indexOf(n(893)) < 0 && (x[n(2146)] = x.ns[0]));
    const e = Ga();
    this[n(1882)] = { ...e, ...this[n(1882)], ...Ja(x) }, this[n(1882)][n(1605)] = { ...e[n(1605)], ...this[n(1882)][n(1605)] }, x[n(2607)] !== void 0 && (this[n(1882)][n(314)] = x[n(2607)]), x[n(307)] !== void 0 && (this.options[n(2526)] = x[n(307)]);
    const r = (d) => d ? typeof d == "function" ? new d() : d : null;
    if (!this.options[n(2404)]) {
      this[n(426)].logger ? fe[n(2226)](r(this[n(426)][n(1814)]), this[n(1882)]) : fe[n(2226)](null, this[n(1882)]);
      let d;
      this.modules.formatter ? d = this[n(426)][n(1285)] : d = Ii;
      const l = new _a(this[n(1882)]);
      this[n(1766)] = new Ua(this[n(1882)][n(1805)], this[n(1882)]);
      const f = this[n(2405)];
      f[n(1814)] = fe, f[n(2294)] = this.store, f[n(452)] = l, f[n(2330)] = new Si(l, { prepend: this[n(1882)][n(288)], simplifyPluralSuffix: this.options[n(2193)] }), d && (!this[n(1882)][n(1605)][n(1671)] || this.options[n(1605)][n(1671)] === e[n(1605)][n(1671)]) && (f[n(1285)] = r(d), f[n(1285)][n(2226)](f, this[n(1882)]), this[n(1882)][n(1605)][n(1671)] = f[n(1285)][n(1671)][n(1926)](f[n(1285)])), f[n(2402)] = new ki(this.options), f.utils = { hasLoadedNamespace: this[n(2683)][n(1926)](this) }, f.backendConnector = new Ci(r(this[n(426)][n(350)]), f.resourceStore, f, this[n(1882)]), f.backendConnector.on("*", (g, ...h) => {
        this[n(2746)](g, ...h);
      }), this[n(426)][n(1902)] && (f[n(1902)] = r(this.modules[n(1902)]), f[n(1902)][n(2226)] && f[n(1902)][n(2226)](f, this[n(1882)].detection, this.options)), this[n(426)][n(2122)] && (f.i18nFormat = r(this[n(426)][n(2122)]), f[n(2122)][n(2226)] && f[n(2122)][n(2226)](this)), this.translator = new Nx(this[n(2405)], this[n(1882)]), this[n(1476)].on("*", (g, ...h) => {
        this.emit(g, ...h);
      }), this[n(426)][n(568)][n(641)]((g) => {
        const h = n;
        g[h(2226)] && g[h(2226)](this);
      });
    }
    if (this[n(1671)] = this[n(1882)][n(1605)][n(1671)], t || (t = hx), this[n(1882)].fallbackLng && !this[n(2405)][n(1902)] && !this[n(1882)][n(986)]) {
      const d = this[n(2405)][n(452)][n(1242)](this[n(1882)][n(2255)]);
      d[n(2463)] > 0 && d[0] !== n(834) && (this[n(1882)][n(986)] = d[0]);
    }
    !this[n(2405)].languageDetector && !this[n(1882)].lng && this[n(1814)].warn(n(413)), [n(2152), n(2180), n(1106), "getDataByLanguage"][n(641)]((d) => {
      const l = n;
      this[d] = (...f) => this[l(1766)][d](...f);
    }), [n(322), n(2714), n(798), "removeResourceBundle"][n(641)]((d) => {
      this[d] = (...l) => (this[B(1766)][d](...l), this);
    });
    const c = Je(), u = () => {
      const d = n, l = (f, g) => {
        const h = B;
        this.isInitializing = !1, this[h(2392)] && !this[h(2695)] && this.logger[h(515)]("init: i18next is already initialized. You should call init just once!"), this[h(2392)] = !0, this[h(1882)][h(2404)] || this[h(1814)][h(1799)](h(527), this.options), this.emit(h(527), this[h(1882)]), c[h(2251)](g), t(f, g);
      };
      if (this[d(715)] && !this[d(2392)]) return l(null, this.t.bind(this));
      this[d(725)](this[d(1882)].lng, l);
    };
    return this[n(1882)][n(1805)] || !this.options[n(959)] ? u() : setTimeout(u, 0), c;
  }
  [a(777)](x, t = hx) {
    var s, i;
    const n = a;
    let e = t;
    const r = g0(x) ? x : this.language;
    if (typeof x == "function" && (e = x), !this[n(1882)][n(1805)] || this[n(1882)][n(2802)]) {
      if ((r == null ? void 0 : r[n(2321)]()) === "cimode" && (!this[n(1882)][n(887)] || this[n(1882)][n(887)][n(2463)] === 0)) return e();
      const c = [], u = (d) => {
        const l = n;
        if (!d || d === l(547)) return;
        this[l(2405)][l(452)].toResolveHierarchy(d)[l(641)]((g) => {
          const h = l;
          g !== "cimode" && c[h(1817)](g) < 0 && c.push(g);
        });
      };
      r ? u(r) : this.services[n(452)][n(1242)](this.options[n(2255)])[n(641)]((l) => u(l)), (i = (s = this.options[n(887)]) == null ? void 0 : s[n(641)]) == null || i.call(s, (d) => u(d)), this[n(2405)].backendConnector[n(1215)](c, this[n(1882)].ns, (d) => {
        const l = n;
        !d && !this.resolvedLanguage && this.language && this.setResolvedLanguage(this[l(2390)]), e(d);
      });
    } else e(null);
  }
  reloadResources(x, t, n) {
    const e = a, r = Je();
    return typeof x === e(2176) && (n = x, x = void 0), typeof t === e(2176) && (n = t, t = void 0), x || (x = this[e(715)]), t || (t = this.options.ns), n || (n = hx), this[e(2405)].backendConnector.reload(x, t, (s) => {
      r[e(2251)](), n(s);
    }), r;
  }
  [a(1740)](x) {
    const t = a;
    if (!x) throw new Error(t(2315));
    if (!x.type) throw new Error(t(1590));
    return x[t(2197)] === t(350) && (this.modules[t(350)] = x), (x[t(2197)] === t(1814) || x[t(1799)] && x[t(515)] && x.error) && (this[t(426)][t(1814)] = x), x[t(2197)] === t(1902) && (this[t(426)].languageDetector = x), x.type === t(2122) && (this[t(426)][t(2122)] = x), x.type === t(1660) && Kn[t(2580)](x), x[t(2197)] === "formatter" && (this[t(426)][t(1285)] = x), x[t(2197)] === "3rdParty" && this.modules[t(568)][t(1851)](x), this;
  }
  [a(2073)](x) {
    const t = a;
    if (!(!x || !this[t(715)]) && !([t(547), t(834)][t(1817)](x) > -1)) {
      for (let n = 0; n < this.languages[t(2463)]; n++) {
        const e = this.languages[n];
        if (!(["cimode", t(834)][t(1817)](e) > -1) && this[t(1766)].hasLanguageSomeTranslations(e)) {
          this.resolvedLanguage = e;
          break;
        }
      }
      !this[t(1368)] && this[t(715)][t(1817)](x) < 0 && this[t(1766)][t(1201)](x) && (this[t(1368)] = x, this[t(715)].unshift(x));
    }
  }
  [a(725)](x, t) {
    const n = a;
    this[n(1159)] = x;
    const e = Je();
    this[n(2746)](n(1055), x);
    const r = (c) => {
      const u = n;
      this[u(2390)] = c, this[u(715)] = this[u(2405)].languageUtils[u(2556)](c), this.resolvedLanguage = void 0, this[u(2073)](c);
    }, s = (c, u) => {
      const d = n;
      u ? this[d(1159)] === x && (r(u), this[d(1476)].changeLanguage(u), this[d(1159)] = void 0, this[d(2746)](d(1024), u), this[d(1814)][d(1799)](d(1024), u)) : this[d(1159)] = void 0, e[d(2251)]((...l) => this.t(...l)), t && t(c, (...l) => this.t(...l));
    }, i = (c) => {
      var f, g;
      const u = n;
      !x && !c && this[u(2405)][u(1902)] && (c = []);
      const d = g0(c) ? c : c && c[0], l = this.store[u(1201)](d) ? d : this.services.languageUtils.getBestMatchFromCodes(g0(c) ? [c] : c);
      l && (!this[u(2390)] && r(l), this[u(1476)].language || this[u(1476)].changeLanguage(l), (g = (f = this[u(2405)][u(1902)]) == null ? void 0 : f[u(785)]) == null || g.call(f, l)), this[u(777)](l, (h) => {
        s(h, l);
      });
    };
    return !x && this[n(2405)][n(1902)] && !this[n(2405)][n(1902)][n(523)] ? i(this[n(2405)][n(1902)].detect()) : !x && this[n(2405)].languageDetector && this[n(2405)][n(1902)][n(523)] ? this.services.languageDetector[n(553)][n(2463)] === 0 ? this.services[n(1902)][n(553)]().then(i) : this[n(2405)][n(1902)][n(553)](i) : i(x), e;
  }
  [a(764)](x, t, n) {
    const e = a, r = (s, i, ...c) => {
      const u = B;
      let d;
      typeof i !== u(1985) ? d = this[u(1882)][u(2484)]([s, i].concat(c)) : d = { ...i }, d[u(986)] = d.lng || r.lng, d[u(1818)] = d.lngs || r.lngs, d.ns = d.ns || r.ns, d[u(2532)] !== "" && (d.keyPrefix = d[u(2532)] || n || r.keyPrefix);
      const l = this[u(1882)][u(2607)] || ".";
      let f;
      return d[u(2532)] && Array.isArray(s) ? f = s.map((g) => "" + d[u(2532)] + l + g) : f = d[u(2532)] ? "" + d[u(2532)] + l + s : s, this.t(f, d);
    };
    return g0(x) ? r[e(986)] = x : r.lngs = x, r.ns = t, r[e(2532)] = n, r;
  }
  t(...x) {
    var n;
    const t = a;
    return (n = this[t(1476)]) == null ? void 0 : n[t(735)](...x);
  }
  [a(1971)](...x) {
    var n;
    const t = a;
    return (n = this.translator) == null ? void 0 : n[t(1971)](...x);
  }
  [a(1292)](x) {
    const t = a;
    this[t(1882)][t(2146)] = x;
  }
  [a(2683)](x, t = {}) {
    const n = a;
    if (!this[n(2392)]) return this[n(1814)][n(515)](n(1392), this[n(715)]), !1;
    if (!this[n(715)] || !this[n(715)][n(2463)]) return this[n(1814)][n(515)](n(2216), this[n(715)]), !1;
    const e = t[n(986)] || this[n(1368)] || this.languages[0], r = this.options ? this[n(1882)][n(2255)] : !1, s = this[n(715)][this.languages[n(2463)] - 1];
    if (e[n(2321)]() === n(547)) return !0;
    const i = (c, u) => {
      const d = n, l = this[d(2405)][d(2189)][d(878)][c + "|" + u];
      return l === -1 || l === 0 || l === 2;
    };
    if (t.precheck) {
      const c = t[n(663)](this, i);
      if (c !== void 0) return c;
    }
    return !!(this[n(2180)](e, x) || !this[n(2405)][n(2189)][n(350)] || this[n(1882)][n(1805)] && !this[n(1882)][n(2802)] || i(e, x) && (!r || i(s, x)));
  }
  [a(1603)](x, t) {
    const n = a, e = Je();
    return this.options.ns ? (g0(x) && (x = [x]), x.forEach((r) => {
      const s = B;
      this[s(1882)].ns[s(1817)](r) < 0 && this.options.ns[s(1851)](r);
    }), this[n(777)]((r) => {
      e[n(2251)](), t && t(r);
    }), e) : (t && t(), Promise.resolve());
  }
  [a(1523)](x, t) {
    const n = a, e = Je();
    g0(x) && (x = [x]);
    const r = this[n(1882)].preload || [], s = x.filter((i) => r[n(1817)](i) < 0 && this[n(2405)][n(452)].isSupportedCode(i));
    return s.length ? (this[n(1882)][n(887)] = r[n(329)](s), this[n(777)]((i) => {
      e[n(2251)](), t && t(i);
    }), e) : (t && t(), Promise[n(2251)]());
  }
  [a(338)](x) {
    var r, s;
    const t = a;
    if (x || (x = this[t(1368)] || (((r = this[t(715)]) == null ? void 0 : r.length) > 0 ? this[t(715)][0] : this[t(2390)])), !x) return t(773);
    const n = ["ar", t(1283), "sqr", t(2560), t(414), t(930), t(942), t(1425), t(2044), t(1016), t(2040), t(1326), "acw", t(891), t(1152), t(453), t(1153), t(347), t(696), "afb", "ajp", t(493), "apd", t(2369), "arq", t(851), t(403), t(436), t(1347), "avl", t(1801), t(870), "ayn", t(2430), t(1987), t(1990), "he", "iw", "ps", t(487), t(1105), t(984), "prp", "prd", "ug", "ur", t(2724), t(500), t(813), "ji", "yi", t(514), "men", t(2503), "fa", t(1396), t(2547), t(1617), t(2035), "dv", t(232), t(454)], e = ((s = this[t(2405)]) == null ? void 0 : s.languageUtils) || new _a(Ga());
    return n[t(1817)](e[t(674)](x)) > -1 || x[t(2321)]()[t(1817)]("-arab") > 1 ? t(773) : t(1406);
  }
  static createInstance(x = {}, t) {
    return new sx(x, t);
  }
  [a(2132)](x = {}, t = hx) {
    const n = a, e = x[n(1809)];
    e && delete x[n(1809)];
    const r = { ...this[n(1882)], ...x, isClone: !0 }, s = new sx(r);
    if ((x[n(1829)] !== void 0 || x.prefix !== void 0) && (s[n(1814)] = s[n(1814)][n(273)](x)), [n(1766), n(2405), n(2390)][n(641)]((c) => {
      s[c] = this[c];
    }), s[n(2405)] = { ...this[n(2405)] }, s[n(2405)][n(2096)] = { hasLoadedNamespace: s[n(2683)][n(1926)](s) }, e) {
      const c = Object[n(1448)](this[n(1766)][n(2743)])[n(1173)]((u, d) => {
        const l = n;
        return u[d] = { ...this.store[l(2743)][d] }, u[d] = Object[l(1448)](u[d])[l(1173)]((f, g) => (f[g] = { ...u[d][g] }, f), u[d]), u;
      }, {});
      s[n(1766)] = new Ua(c, r), s[n(2405)].resourceStore = s[n(1766)];
    }
    return s.translator = new Nx(s[n(2405)], r), s[n(1476)].on("*", (c, ...u) => {
      s[n(2746)](c, ...u);
    }), s[n(2226)](r, t), s.translator[n(1882)] = r, s.translator.backendConnector[n(2405)][n(2096)] = { hasLoadedNamespace: s.hasLoadedNamespace[n(1926)](s) }, s;
  }
  [a(780)]() {
    const x = a;
    return { options: this.options, store: this[x(1766)], language: this[x(2390)], languages: this.languages, resolvedLanguage: this[x(1368)] };
  }
}
const X0 = sx.createInstance();
X0[a(2041)] = sx[a(2041)], X0[a(2041)], X0[a(338)], X0[a(2226)], X0[a(777)], X0.reloadResources, X0[a(1740)], X0[a(725)], X0.getFixedT, X0.t, X0[a(1971)], X0.setDefaultNamespace, X0[a(2683)], X0[a(1603)], X0.loadLanguages;
function Ni() {
  const o = a;
  if (typeof navigator !== o(455) && navigator[o(2390)]) return navigator[o(2390)] === "zh-CN" ? o(2448) : o(979);
  try {
    const x = typeof require !== o(455) ? require : void 0;
    if (x)
      return x(o(898))[o(722)].uiLocale[o(2353)]("zh") ? o(2448) : "en-US";
  } catch {
  }
  return o(979);
}
let Gn = Ni();
const qi = { "zh-CN": {}, "en-US": {} };
function Kt(o) {
  const x = a, t = o === x(2448) ? ci : ui, n = qi[o];
  return { ...t, ...n };
}
function Ti() {
  return Gn;
}
function Gt(o, x = {}) {
  let n = Kt(Gn)[o];
  return n ? typeof n == "string" ? n.replace(/\{\{(\w+)\}\}/g, (e, r) => x[r] !== void 0 ? String(x[r]) : e) : n : o;
}
const Ai = /&(?:amp|#38|lt|#60|gt|#62|apos|#39|quot|#34|nbsp|#160|copy|#169|reg|#174|hellip|#8230|#x2F|#47);/g, Oi = { "&amp;": "&", "&#38;": "&", "&lt;": "<", "&#60;": "<", "&gt;": ">", "&#62;": ">", "&apos;": "'", "&#39;": "'", "&quot;": '"', "&#34;": '"', "&nbsp;": " ", "&#160;": " ", "&copy;": "©", "&#169;": "©", "&reg;": "®", "&#174;": "®", "&hellip;": "…", "&#8230;": "…", "&#x2F;": "/", "&#47;": "/" }, Di = (o) => Oi[o], ji = (o) => o[a(1936)](Ai, Di);
let Qa = { bindI18n: a(1024), bindI18nStore: "", transEmptyNodeValue: "", transSupportBasicHtmlNodes: !0, transWrapTextNodes: "", transKeepBasicHtmlNodesFor: ["br", "strong", "i", "p"], useSuspense: !0, unescape: ji };
const Li = (o = {}) => {
  Qa = { ...Qa, ...o };
}, Mi = { type: "3rdParty", init(o) {
  const x = a;
  Li(o[x(1882)][x(697)]);
} };
!X0[a(2392)] && X0[a(1740)](Mi)[a(2226)]({ resources: { "zh-CN": { translation: Kt("zh-CN") }, "en-US": { translation: Kt(a(979)) } }, lng: Ti(), fallbackLng: a(979), interpolation: { escapeValue: !1 } });
const Re = [];
ex.widgetable = ex[a(1939)] || {}, ex[a(1939)][a(2736)] = function(o, x) {
  typeof x == "function" ? Re.push([o, { formatter: x, setter: null }]) : Re.push([o, x]);
};
function $i(o, x, t) {
  var c, u, d;
  const n = a, e = Re.find(([l]) => l == B(2551)), r = Re[n(2450)](([l]) => ra(l, o[n(2197)])) || e;
  let s = !1;
  if (r) {
    const l = r[1][n(1773)];
    l && (s = !!l(o, x, t));
  }
  !s && (o[n(1681)][x][n(1732)] = t, (u = (c = o.widgets[x])[n(1677)]) == null || u.call(c, t)), (d = (q0[n(602)] || q0[n(584)][n(1644)])[n(2682)]) == null || d[n(2544)].checkState();
}
function qx(o) {
  const x = a, t = {}, n = Re[x(2450)](([e]) => e == x(2551));
  return o[x(1339)].forEach((e) => {
    const r = x;
    if (!e.widgets || e[r(1681)].length == 0) return;
    const s = Re[r(2450)](([i]) => ra(i, e[r(2197)])) || n;
    if (s) try {
      const i = s[1][r(1285)](e);
      i && (t[e.id] = i[r(1681)].map((c) => c.value));
    } catch {
      t[e.id] = [];
    }
  }), t;
}
function Jt(o, x) {
  var r, s, i;
  const t = a;
  if (!o) return { widgetableID: "", widgetablePath: "", nodes: {}, nodeIndexes: [], options: {}, note: "" };
  const n = o.nodes.map((c) => {
    const u = B;
    if (c[u(1466)] != 0) return;
    const d = mx(c);
    if (!d || d.startsWith(".") || !c.widgets || c[u(1681)].length == 0) return;
    let l = Re[u(2450)](([m]) => ra(m, c.type));
    if (l) try {
      const m = l[1].formatter(c);
      if (m) return m.id = c.id, m[u(2537)] = m[u(1681)][u(1173)]((v, S) => v + (S[u(2071)] || 12), 0), m;
    } catch (m) {
      return { id: c.id, title: d, uiWeightSum: 12, widgets: [{ outputType: u(443), value: Gt(u(1362), l[0]) + (m[u(2354)] || m || ""), name: "", options: {} }] };
    }
    if (!d[u(2353)]("#")) return null;
    let f = c.widgets;
    const g = Re[u(2450)](([m]) => m == "__DEFAULT__");
    if (g) {
      const m = g[1][u(1285)](c);
      if (m) return Object[u(1953)](m, { uiWeightSum: m[u(1681)][u(1173)]((v, S) => v + (S[u(2071)] || 12), 0) });
    }
    const h = { id: c.id, title: d, widgets: f[u(698)]((m) => ({ name: m[u(1278)] || m[u(2796)], outputType: m[u(2197)] || u(1516), value: m[u(1732)], options: m[u(1882)] })) };
    return Object.assign(h, { uiWeightSum: h[u(1681)][u(1173)]((m, v) => m + (v[u(2071)] || 12), 0) });
  })[t(558)](Boolean)[t(1758)]((c, u) => {
    const d = t;
    let l = mx(c), f = mx(u);
    return l = l[d(2353)]("#") ? l.slice(1)[d(549)]() : l[d(549)](), f = f[d(2353)]("#") ? f[d(600)](1).trim() : f[d(549)](), l.localeCompare(f);
  }), e = ((s = (r = o[t(1339)][t(2450)]((c) => c[t(2197)] == t(859) && c.title[t(2457)](/SD-?PPP/i))) == null ? void 0 : r[t(1681)][0]) == null ? void 0 : s.value) || "";
  return { widgetablePath: ((i = x[t(2608)][t(2681)]) == null ? void 0 : i.sdppp_workflow_alias) || x[t(2501)], widgetableID: x[t(2608)].id, nodes: n[t(1173)]((c, u) => (c[u.id] = u, c), {}), note: e, nodeIndexes: n.map((c) => c.id), options: {} };
}
function ra(o, x) {
  const t = a, n = o.replace(/[.+^${}()|[\]\\]/g, t(760))[t(1936)](/\*/g, ".*")[t(1936)](/\?/g, ".");
  return new RegExp("^" + n + "$")[t(2734)](x);
}
function mx(o, x = "") {
  var e;
  const t = a;
  let n = x || o[t(1065)] || "";
  return o[t(1284)] && (n.startsWith("#") || n[t(2353)](".")) ? o[t(1284)](t(776), n) : n = ((e = o[t(2523)]) == null ? void 0 : e[t(776)]) || n, n;
}
ex[a(1485)] = mx;
const Qt = ox.extend(a(772)), Xa = /* @__PURE__ */ new Set();
I0[a(1870)](a(784), async (o) => {
  const x = a;
  return requestAnimationFrame(ws), o.values[x(641)](({ nodeID: t, widgetIndex: n, value: e }) => {
    const r = x, s = q0[r(2439)][r(1339)].find((i) => i.id == t);
    $i(s, n, e);
  }), { success: !0 };
}), I0[a(1870)](a(318), async (o) => {
  const x = a, { workflow_path: t } = o, n = !Xa[x(1541)](t), e = o[x(752)] || n;
  Xa[x(2736)](t);
  const r = q0.extensionManager.workflow || q0[x(602)], s = r.workflows[x(2450)]((c) => c[x(1967)] === t || c.path === t || c[x(2501)] === x(2173) + t);
  if (!e) {
    const c = await zi(r, s);
    if (Qt(x(327) + c), c) await Zx(r, s);
    else try {
      await i(r, s);
    } catch {
      await Zx(r, s);
    }
    return { success: !0 };
  }
  return await Zx(r, s), { success: !0 };
  async function i(c, u) {
    const d = x;
    Qt(d(1243) + u[d(2501)], u[d(1322)]), q0[d(602)] == c ? await u[d(1215)]() : (await c[d(318)](u), await q0.loadGraphData(JSON.parse(JSON[d(555)](u[d(1322)])), !0, !0, u, {}));
  }
}), I0.implementAction(a(2520), async function(o) {
  const x = a;
  let { workflow_content: t, workflow_path: n } = o;
  return t.extra = { ...t[x(2681)] || {}, sdppp_workflow_alias: n }, await q0[x(561)](t), { success: !0 };
}), I0[a(1870)](a(2506), async (o) => {
  var r;
  const x = a, t = q0[x(602)] || q0[x(584)][x(1644)];
  (r = t.syncWorkflows) == null || r.call(t), await new Promise((s) => requestAnimationFrame(s));
  let e = t[x(2318)][x(698)]((s) => s[x(2501)][x(1936)]("workflows/", ""));
  try {
    const s = new Headers(), i = localStorage[x(1059)](x(881));
    i && s.set(x(477), i);
    const c = await fetch(x(670), { headers: s });
    let u = [];
    c.ok && (u = (await c[x(1780)]())[x(1662)][x(698)]((l) => l[x(1936)](x(2173), ""))), e[x(1758)]((d, l) => {
      const f = x, g = u[f(932)](d), h = u[f(932)](l);
      return g && !h ? -1 : !g && h ? 1 : d[f(557)](l);
    });
  } catch {
  }
  return { workflows: e, error: "" };
}), I0[a(1870)](a(2508), async (o) => {
  var s;
  const x = a, { workflow_path: t, from_sid: n } = o, e = q0.workflowManager || q0[x(584)][x(1644)], r = e[x(2318)][x(2450)]((i) => i[x(1967)] === t || i.path === t || i[x(2501)] === x(2173) + t);
  if (!r) throw new Error(x(897));
  return ((s = e[x(2682)]) == null ? void 0 : s.id) != r.id && await q0[x(318)](t, n, !1), r[x(2544)][x(2792)](), await e[x(2508)](r), { success: !0 };
});
async function zi(o, x) {
  var e, r, s;
  const t = a;
  if (!x || !(((e = o[t(2682)]) == null ? void 0 : e.id) === x.id)) return !1;
  if ((r = x.changeTracker) != null && r[t(2792)]) try {
    x[t(2544)][t(2792)]();
  } catch (i) {
    console[t(515)](t(2297), i);
  }
  try {
    const i = (s = q0[t(2439)]) == null ? void 0 : s[t(1680)](), c = x[t(2608)];
    if (!i || !c) return !1;
    const u = JSON[t(555)](i), d = JSON.stringify(c);
    return u !== d;
  } catch (i) {
    return console.warn("Failed to check workflow state changes:", i), !1;
  }
}
async function Zx(o, x) {
  var e;
  const t = a;
  Qt(t(2119) + x.path);
  async function n(r, s) {
    const i = t;
    q0.workflowManager == r ? await s[i(1215)]() : (await r.openWorkflow(s), await q0[i(561)](JSON[i(1383)](JSON[i(555)](s[i(2608)])), !0, !0, s, {}));
  }
  if ((x[t(659)] || (e = o.isOpen) != null && e.call(o, x)) && o.openWorkflows[t(2463)] === 1) {
    const r = o[t(2783)]();
    o.openWorkflow(r);
  } else await n(o, o[t(2462)][0] == x ? o.openWorkflows[1] : o.openWorkflows[0]);
  await o[t(1706)](x, !1), await new Promise((r) => requestAnimationFrame(r)), await n(o, x);
}
const Xe = ox[a(2417)]("workflow-run"), qe = /* @__PURE__ */ new Map();
function Ui(o, x) {
  const t = a, n = qe[t(635)](o);
  Xe(t(2739), o, x, n, qe), n && n[t(1118)](x);
}
I0[a(1870)](a(2380), async function* (o) {
  const x = a;
  let t = !1, n = [];
  function e() {
    const f = B;
    if (t) return;
    const g = Oe[f(1029)];
    Oe[f(1029)] = async (...h) => {
      const m = f;
      try {
        const v = await g[m(1850)](Oe, ...h);
        return n.push({ error: null, result: v, prompt_id: v.prompt_id }), v;
      } catch (v) {
        throw n[m(1851)]({ error: v, result: null, prompt_id: "" }), v;
      }
    }, t = !0;
  }
  t || e();
  const r = o.size;
  let s = !1, i = {}, c = [];
  I0[x(1766)].setState({ lastError: "", widgetableErrors: {} });
  try {
    n = [], await q0[x(1029)](1, r), n[x(641)]((f) => {
      var h, m;
      const g = x;
      if (f[g(443)]) s = !0, i = f[g(443)].response ? l(f[g(443)][g(2474)][g(2102)]) : {}, Object[g(1953)](i, { "-1": ((m = (h = f[g(443)][g(2474)]) == null ? void 0 : h[g(443)]) == null ? void 0 : m[g(2354)]) || f[g(443)][g(2354)] });
      else {
        const v = f[g(2723)].prompt_id;
        c[g(1851)](v);
        let S, E;
        const A = new Promise((R, P) => {
          S = R, E = P;
        }), T = { promise: A, resolveImage: S, rejectImage: E };
        qe[g(1527)](v, T);
      }
    });
  } catch (f) {
    Xe(x(2118), f[x(2383)]), s = !0, i = { "-1": f[x(2354)] || f[x(830)]() };
  }
  Xe("after app.queuePrompt errors: ", s, i, x(747), c), s && I0[x(1766)][x(2490)]({ widgetableErrors: i });
  let u = [];
  const d = /* @__PURE__ */ new Map();
  for (const f of c) {
    const g = qe.get(f);
    g && d[x(1527)](f, g[x(2182)]);
  }
  for (Xe(x(2672)); d[x(2428)] > 0; ) {
    const f = Array[x(1038)](d[x(1144)]()), g = f[x(698)](([v, S]) => S.then((E) => ({ prompt_id: v, images: E }))), { prompt_id: h, images: m } = await Promise.race(g);
    Xe(x(2584), h), u.push(...m), d[x(1707)](h), qe[x(1707)](h), yield { success: !0, prompt_ids: [h], images: m };
  }
  function l(f) {
    const g = x, h = {};
    return Object[g(1448)](f)[g(641)]((m) => {
      const v = g, S = m[v(2352)](":")[0], E = q0.graph.nodes[v(2450)]((A) => A.id == S);
      h[S] = "[" + ((E == null ? void 0 : E.title) || S) + "]" + f[m].errors[v(698)](JSON[v(555)]).join(`
`);
    }), h;
  }
}), I0[a(1870)](a(1136), async () => {
  const o = a;
  await q0[o(1212)].clearItems(o(484)), await q0[o(1212)].interrupt();
  const x = Array[o(1038)](qe[o(2010)]());
  qe[o(1017)]();
  for (const t of x)
    try {
      t[o(510)](new Error(o(2780)));
    } catch {
    }
  return { success: !0 };
});
const Hi = ox[a(2417)]("actions:util");
I0[a(1870)](a(1896), async (o) => {
  const x = a;
  return o != null && o[x(2538)] && Hi("Received host version from UXP:", o[x(2538)]), { comfyVersion: x(246), hostVersion: (o == null ? void 0 : o[x(2538)]) ?? "" };
}), I0[a(1870)]("setNodeTitle", async (o) => {
  const x = a, { node_id: t, title: n } = o, e = q0[x(2439)][x(1339)][x(2450)]((r) => r.id == t);
  if (!e) throw new Error(x(765));
  return e.title = n, e.setProperty(x(776), n), { success: !0 };
}), I0[a(1870)](a(275), async () => {
  const o = a, x = await fetch("./api/manager/reboot");
  return x.status == 404 ? { error: Gt(o(1991)), success: !1 } : x[o(2799)] == 200 ? { success: !0 } : { error: Gt(o(1807)) + x[o(992)], success: !1 };
}), I0.implementAction(a(1982), async (o) => {
  const x = a, { api_key: t } = o;
  return localStorage[x(973)](x(1837), t), location.reload(), { success: !0 };
}), I0.implementAction("logout", async () => {
  const o = a;
  return document[o(1618)](o(1952)).parentElement[o(2534)](), { success: !0 };
});
function Vi(o) {
  const x = a, t = atob(o), n = t[x(2463)], e = new Uint8Array(n);
  for (let r = 0; r < n; r++)
    e[r] = t[x(882)](r);
  return e;
}
I0[a(1870)](a(1856), async (o, x, t) => {
  const n = a, { fileName: e, overwrite: r = !0, mimeType: s = n(1276), dataBase64: i } = o;
  if (t != null && t.aborted) throw new DOMException("Upload aborted", n(2285));
  const c = Vi(i), u = new Blob([c], { type: s }), d = new FormData();
  d[n(807)]("image", u), d.append(n(1110), e), d.append(n(250), n(r ? 1100 : 1062));
  const l = await fetch(n(1781), { method: n(2266), body: d, signal: t });
  if (!l.ok) throw new Error("Upload failed: " + l[n(992)]);
  const f = await l[n(1780)]();
  return { name: f.subfolder + "/" + f[n(2796)] };
});
const Jn = a(1259), _i = [Jn, a(2042), a(257), a(2310)], Ax = "2.0", Qn = B0([y(), K()[a(1186)]()]), Xn = y(), Wi = k({ progressToken: W(Qn) })[a(2394)](), re = k({ _meta: W(Wi) }).passthrough(), xe = k({ method: y(), params: W(re) }), ix = k({ _meta: W(k({})[a(2394)]()) })[a(2394)](), me = k({ method: y(), params: W(ix) }), ne = k({ _meta: W(k({}).passthrough()) }).passthrough(), Ox = B0([y(), K()[a(1186)]()]), Yn = k({ jsonrpc: x0(Ax), id: Ox })[a(2290)](xe)[a(355)](), Bi = (o) => Yn[a(488)](o)[a(532)], es = k({ jsonrpc: x0(Ax) }).merge(me)[a(355)](), Zi = (o) => es[a(488)](o).success, xs = k({ jsonrpc: x0(Ax), id: Ox, result: ne }).strict(), Ya = (o) => xs[a(488)](o)[a(532)];
var ye;
(function(o) {
  const x = a;
  o[o[x(1675)] = -32e3] = x(1675), o[o[x(1211)] = -32001] = x(1211), o[o[x(2101)] = -32700] = x(2101), o[o[x(1611)] = -32600] = x(1611), o[o[x(1197)] = -32601] = x(1197), o[o.InvalidParams = -32602] = "InvalidParams", o[o.InternalError = -32603] = "InternalError";
})(ye || (ye = {}));
const ts = k({ jsonrpc: x0(Ax), id: Ox, error: k({ code: K()[a(1186)](), message: y(), data: W(Me()) }) })[a(355)](), Ki = (o) => ts[a(488)](o)[a(532)];
B0([Yn, es, xs, ts]);
const Xt = ne[a(355)](), Yt = me[a(2417)]({ method: x0(a(2108)), params: ix[a(2417)]({ requestId: Ox, reason: y()[a(1833)]() }) }), cx = k({ name: y(), title: W(y()) }).passthrough(), as = cx[a(2417)]({ version: y() }), Gi = k({ experimental: W(k({})[a(2394)]()), sampling: W(k({})[a(2394)]()), elicitation: W(k({})[a(2394)]()), roots: W(k({ listChanged: W(e0()) })[a(2394)]()) })[a(2394)](), rs = xe.extend({ method: x0(a(2696)), params: re[a(2417)]({ protocolVersion: y(), capabilities: Gi, clientInfo: as }) }), Ji = k({ experimental: W(k({})[a(2394)]()), logging: W(k({}).passthrough()), completions: W(k({})[a(2394)]()), prompts: W(k({ listChanged: W(e0()) })[a(2394)]()), resources: W(k({ subscribe: W(e0()), listChanged: W(e0()) })[a(2394)]()), tools: W(k({ listChanged: W(e0()) }).passthrough()) })[a(2394)](), Qi = ne.extend({ protocolVersion: y(), capabilities: Ji, serverInfo: as, instructions: W(y()) }), ns = me[a(2417)]({ method: x0(a(644)) }), ea = xe[a(2417)]({ method: x0("ping") }), Xi = k({ progress: K(), total: W(K()), message: W(y()) })[a(2394)](), xa = me[a(2417)]({ method: x0("notifications/progress"), params: ix.merge(Xi)[a(2417)]({ progressToken: Qn }) }), Dx = xe[a(2417)]({ params: re[a(2417)]({ cursor: W(Xn) }).optional() }), jx = ne[a(2417)]({ nextCursor: W(Xn) }), ss = k({ uri: y(), mimeType: W(y()), _meta: W(k({})[a(2394)]()) })[a(2394)](), os = ss[a(2417)]({ text: y() }), is = ss.extend({ blob: y().base64() }), cs = cx[a(2417)]({ uri: y(), description: W(y()), mimeType: W(y()), _meta: W(k({}).passthrough()) }), Yi = cx[a(2417)]({ uriTemplate: y(), description: W(y()), mimeType: W(y()), _meta: W(k({})[a(2394)]()) }), e2 = Dx[a(2417)]({ method: x0(a(2034)) }), x2 = jx[a(2417)]({ resources: y0(cs) }), t2 = Dx[a(2417)]({ method: x0(a(2762)) }), a2 = jx[a(2417)]({ resourceTemplates: y0(Yi) }), r2 = xe.extend({ method: x0("resources/read"), params: re[a(2417)]({ uri: y() }) }), n2 = ne[a(2417)]({ contents: y0(B0([os, is])) }), s2 = me.extend({ method: x0(a(978)) }), o2 = xe[a(2417)]({ method: x0("resources/subscribe"), params: re[a(2417)]({ uri: y() }) }), i2 = xe.extend({ method: x0(a(2367)), params: re.extend({ uri: y() }) }), c2 = me.extend({ method: x0(a(377)), params: ix[a(2417)]({ uri: y() }) }), u2 = k({ name: y(), description: W(y()), required: W(e0()) })[a(2394)](), d2 = cx.extend({ description: W(y()), arguments: W(y0(u2)), _meta: W(k({})[a(2394)]()) }), l2 = Dx.extend({ method: x0(a(601)) }), f2 = jx[a(2417)]({ prompts: y0(d2) }), h2 = xe[a(2417)]({ method: x0(a(766)), params: re.extend({ name: y(), arguments: W(z0(y())) }) }), na = k({ type: x0(a(1803)), text: y(), _meta: W(k({})[a(2394)]()) })[a(2394)](), sa = k({ type: x0(a(1177)), data: y()[a(699)](), mimeType: y(), _meta: W(k({}).passthrough()) })[a(2394)](), oa = k({ type: x0("audio"), data: y().base64(), mimeType: y(), _meta: W(k({})[a(2394)]()) })[a(2394)](), p2 = k({ type: x0(a(884)), resource: B0([os, is]), _meta: W(k({})[a(2394)]()) })[a(2394)](), m2 = cs[a(2417)]({ type: x0("resource_link") }), us = B0([na, sa, oa, m2, p2]), g2 = k({ role: E0([a(2230), a(543)]), content: us }).passthrough(), b2 = ne.extend({ description: W(y()), messages: y0(g2) }), y2 = me[a(2417)]({ method: x0("notifications/prompts/list_changed") }), v2 = k({ title: W(y()), readOnlyHint: W(e0()), destructiveHint: W(e0()), idempotentHint: W(e0()), openWorldHint: W(e0()) })[a(2394)](), w2 = cx[a(2417)]({ description: W(y()), inputSchema: k({ type: x0("object"), properties: W(k({})[a(2394)]()), required: W(y0(y())) })[a(2394)](), outputSchema: W(k({ type: x0("object"), properties: W(k({})[a(2394)]()), required: W(y0(y())) })[a(2394)]()), annotations: W(v2), _meta: W(k({}).passthrough()) }), S2 = Dx[a(2417)]({ method: x0(a(857)) }), k2 = jx[a(2417)]({ tools: y0(w2) }), ds = ne[a(2417)]({ content: y0(us)[a(779)]([]), structuredContent: k({})[a(2394)]()[a(1833)](), isError: W(e0()) });
ds.or(ne.extend({ toolResult: Me() }));
const P2 = xe[a(2417)]({ method: x0("tools/call"), params: re[a(2417)]({ name: y(), arguments: W(z0(Me())) }) }), E2 = me[a(2417)]({ method: x0(a(2165)) }), ls = E0(["debug", a(2773), "notice", a(2265), a(443), a(1437), a(717), a(954)]), I2 = xe[a(2417)]({ method: x0(a(333)), params: re[a(2417)]({ level: ls }) }), R2 = me.extend({ method: x0(a(2309)), params: ix[a(2417)]({ level: ls, logger: W(y()), data: Me() }) }), C2 = k({ name: y()[a(1833)]() })[a(2394)](), F2 = k({ hints: W(y0(C2)), costPriority: W(K()[a(458)](0)[a(264)](1)), speedPriority: W(K()[a(458)](0)[a(264)](1)), intelligencePriority: W(K().min(0)[a(264)](1)) })[a(2394)](), N2 = k({ role: E0(["user", a(543)]), content: B0([na, sa, oa]) })[a(2394)](), q2 = xe[a(2417)]({ method: x0(a(2545)), params: re[a(2417)]({ messages: y0(N2), systemPrompt: W(y()), includeContext: W(E0([a(306), a(379), "allServers"])), temperature: W(K()), maxTokens: K()[a(1186)](), stopSequences: W(y0(y())), metadata: W(k({})[a(2394)]()), modelPreferences: W(F2) }) }), fs = ne[a(2417)]({ model: y(), stopReason: W(E0(["endTurn", a(1430), a(299)]).or(y())), role: E0([a(2230), a(543)]), content: Vn("type", [na, sa, oa]) }), T2 = k({ type: x0(a(598)), title: W(y()), description: W(y()), default: W(e0()) })[a(2394)](), A2 = k({ type: x0(a(1516)), title: W(y()), description: W(y()), minLength: W(K()), maxLength: W(K()), format: W(E0([a(1663), a(2559), a(2001), a(2618)])) }).passthrough(), O2 = k({ type: E0([a(2601), a(2403)]), title: W(y()), description: W(y()), minimum: W(K()), maximum: W(K()) })[a(2394)](), D2 = k({ type: x0(a(1516)), title: W(y()), description: W(y()), enum: y0(y()), enumNames: W(y0(y())) })[a(2394)](), j2 = B0([T2, A2, O2, D2]), L2 = xe.extend({ method: x0(a(1123)), params: re[a(2417)]({ message: y(), requestedSchema: k({ type: x0(a(1985)), properties: z0(y(), j2), required: W(y0(y())) })[a(2394)]() }) }), hs = ne.extend({ action: E0([a(2103), "decline", a(282)]), content: W(z0(y(), Me())) }), M2 = k({ type: x0(a(1373)), uri: y() }).passthrough(), $2 = k({ type: x0(a(915)), name: y() }).passthrough(), z2 = xe.extend({ method: x0(a(1823)), params: re[a(2417)]({ ref: B0([$2, M2]), argument: k({ name: y(), value: y() })[a(2394)](), context: W(k({ arguments: W(z0(y(), y())) })) }) }), U2 = ne[a(2417)]({ completion: k({ values: y0(y()).max(100), total: W(K()[a(1186)]()), hasMore: W(e0()) })[a(2394)]() }), H2 = k({ uri: y().startsWith("file://"), name: W(y()), _meta: W(k({})[a(2394)]()) })[a(2394)](), V2 = xe.extend({ method: x0(a(1980)) }), ps = ne[a(2417)]({ roots: y0(H2) }), _2 = me[a(2417)]({ method: x0(a(418)) });
B0([ea, rs, z2, I2, h2, l2, e2, t2, r2, o2, i2, P2, S2]), B0([Yt, xa, ns, _2]), B0([Xt, fs, hs, ps]), B0([ea, q2, L2, V2]), B0([Yt, xa, R2, c2, s2, E2, y2]), B0([Xt, Qi, U2, b2, f2, x2, a2, n2, ds, k2]);
class Ae extends Error {
  constructor(x, t, n) {
    const e = a;
    super("MCP error " + x + ": " + t), this[e(1469)] = x, this[e(2743)] = n, this[e(2796)] = e(2577);
  }
}
const W2 = 6e4;
class B2 {
  constructor(x) {
    const t = a;
    this._options = x, this[t(1023)] = 0, this._requestHandlers = /* @__PURE__ */ new Map(), this[t(2238)] = /* @__PURE__ */ new Map(), this[t(880)] = /* @__PURE__ */ new Map(), this[t(1323)] = /* @__PURE__ */ new Map(), this._progressHandlers = /* @__PURE__ */ new Map(), this[t(738)] = /* @__PURE__ */ new Map(), this._pendingDebouncedNotifications = /* @__PURE__ */ new Set(), this[t(2169)](Yt, (n) => {
      const e = t, r = this[e(2238)].get(n[e(1537)].requestId);
      r == null || r[e(289)](n[e(1537)][e(2027)]);
    }), this.setNotificationHandler(xa, (n) => {
      this[t(2031)](n);
    }), this[t(2756)](ea, (n) => ({}));
  }
  [a(1148)](x, t, n, e, r = !1) {
    const s = a;
    this[s(738)][s(1527)](x, { timeoutId: setTimeout(e, t), startTime: Date[s(2231)](), timeout: t, maxTotalTimeout: n, resetTimeoutOnProgress: r, onTimeout: e });
  }
  [a(2085)](x) {
    const t = a, n = this._timeoutInfo.get(x);
    if (!n) return !1;
    const e = Date[t(2231)]() - n[t(2078)];
    if (n[t(261)] && e >= n[t(261)])
      throw this._timeoutInfo[t(1707)](x), new Ae(ye[t(1211)], t(1694), { maxTotalTimeout: n[t(261)], totalElapsed: e });
    return clearTimeout(n[t(1508)]), n[t(1508)] = setTimeout(n[t(2239)], n.timeout), !0;
  }
  [a(1820)](x) {
    const t = a, n = this[t(738)][t(635)](x);
    n && (clearTimeout(n[t(1508)]), this[t(738)][t(1707)](x));
  }
  async [a(2074)](x) {
    const t = a;
    var n, e, r;
    this._transport = x;
    const s = (n = this[t(1515)]) === null || n === void 0 ? void 0 : n[t(1491)];
    this[t(1461)].onclose = () => {
      s == null || s(), this._onclose();
    };
    const i = (e = this[t(1515)]) === null || e === void 0 ? void 0 : e.onerror;
    this[t(1461)][t(1955)] = (u) => {
      const d = t;
      i == null || i(u), this[d(538)](u);
    };
    const c = (r = this[t(1461)]) === null || r === void 0 ? void 0 : r[t(1932)];
    this._transport.onmessage = (u, d) => {
      const l = t;
      c == null || c(u, d), Ya(u) || Ki(u) ? this[l(2336)](u) : Bi(u) ? this._onrequest(u, d) : Zi(u) ? this[l(535)](u) : this[l(538)](new Error(l(1096) + JSON[l(555)](u)));
    }, await this[t(1461)][t(854)]();
  }
  _onclose() {
    const x = a;
    var t;
    const n = this[x(1323)];
    this._responseHandlers = /* @__PURE__ */ new Map(), this[x(2059)][x(1017)](), this[x(2046)][x(1017)](), this[x(1461)] = void 0, (t = this[x(1491)]) === null || t === void 0 || t.call(this);
    const e = new Ae(ye[x(1675)], x(914));
    for (const r of n[x(2010)]())
      r(e);
  }
  [a(538)](x) {
    const t = a;
    var n;
    (n = this[t(1955)]) === null || n === void 0 || n[t(1850)](this, x);
  }
  _onnotification(x) {
    const t = a;
    var n;
    const e = (n = this[t(880)].get(x[t(2272)])) !== null && n !== void 0 ? n : this.fallbackNotificationHandler;
    e !== void 0 && Promise[t(2251)]()[t(2278)](() => e(x))[t(580)]((r) => this[t(538)](new Error("Uncaught error in notification handler: " + r)));
  }
  [a(375)](x, t) {
    const n = a;
    var e, r, s, i;
    const c = (e = this[n(2476)].get(x[n(2272)])) !== null && e !== void 0 ? e : this[n(575)];
    if (c === void 0) {
      (r = this._transport) === null || r === void 0 || r[n(2171)]({ jsonrpc: n(869), id: x.id, error: { code: ye[n(1197)], message: n(542) } })[n(580)]((l) => this[n(538)](new Error("Failed to send an error response: " + l)));
      return;
    }
    const u = new AbortController();
    this[n(2238)].set(x.id, u);
    const d = { signal: u[n(1572)], sessionId: (s = this[n(1461)]) === null || s === void 0 ? void 0 : s.sessionId, _meta: (i = x[n(1537)]) === null || i === void 0 ? void 0 : i[n(1265)], sendNotification: (l) => this[n(1006)](l, { relatedRequestId: x.id }), sendRequest: (l, f, g) => this[n(276)](l, f, { ...g, relatedRequestId: x.id }), authInfo: t == null ? void 0 : t.authInfo, requestId: x.id, requestInfo: t == null ? void 0 : t[n(2037)] };
    Promise[n(2251)]().then(() => c(x, d))[n(2278)]((l) => {
      const f = n;
      var g;
      if (!u[f(1572)][f(1272)])
        return (g = this[f(1461)]) === null || g === void 0 ? void 0 : g[f(2171)]({ result: l, jsonrpc: f(869), id: x.id });
    }, (l) => {
      const f = n;
      var g, h;
      if (!u[f(1572)][f(1272)])
        return (g = this._transport) === null || g === void 0 ? void 0 : g[f(2171)]({ jsonrpc: "2.0", id: x.id, error: { code: Number.isSafeInteger(l[f(1469)]) ? l[f(1469)] : ye[f(1767)], message: (h = l[f(2354)]) !== null && h !== void 0 ? h : f(2485) } });
    })[n(580)]((l) => this[n(538)](new Error("Failed to send response: " + l)))[n(585)](() => {
      const l = n;
      this._requestHandlerAbortControllers[l(1707)](x.id);
    });
  }
  [a(2031)](x) {
    const t = a, { progressToken: n, ...e } = x[t(1537)], r = Number(n), s = this[t(2059)][t(635)](r);
    if (!s) {
      this[t(538)](new Error(t(2215) + JSON[t(555)](x)));
      return;
    }
    const i = this._responseHandlers[t(635)](r), c = this[t(738)][t(635)](r);
    if (c && i && c[t(1319)]) try {
      this[t(2085)](r);
    } catch (u) {
      i(u);
      return;
    }
    s(e);
  }
  _onresponse(x) {
    const t = a, n = Number(x.id), e = this[t(1323)][t(635)](n);
    if (e === void 0) {
      this[t(538)](new Error(t(972) + JSON.stringify(x)));
      return;
    }
    if (this[t(1323)][t(1707)](n), this[t(2059)][t(1707)](n), this._cleanupTimeout(n), Ya(x)) e(x);
    else {
      const r = new Ae(x[t(443)][t(1469)], x[t(443)][t(2354)], x[t(443)].data);
      e(r);
    }
  }
  get [a(1515)]() {
    return this[a(1461)];
  }
  async close() {
    const x = a;
    var t;
    await ((t = this[x(1461)]) === null || t === void 0 ? void 0 : t[x(1746)]());
  }
  [a(276)](x, t, n) {
    const { relatedRequestId: e, resumptionToken: r, onresumptiontoken: s } = n ?? {};
    return new Promise((i, c) => {
      const u = B;
      var d, l, f, g, h, m;
      if (!this[u(1461)]) {
        c(new Error(u(1035)));
        return;
      }
      ((d = this[u(2643)]) === null || d === void 0 ? void 0 : d.enforceStrictCapabilities) === !0 && this[u(2057)](x.method), (l = n == null ? void 0 : n[u(1572)]) === null || l === void 0 || l.throwIfAborted();
      const v = this._requestMessageId++, S = { ...x, jsonrpc: u(869), id: v };
      n != null && n[u(2768)] && (this[u(2059)].set(v, n.onprogress), S.params = { ...x.params, _meta: { ...((f = x[u(1537)]) === null || f === void 0 ? void 0 : f[u(1265)]) || {}, progressToken: v } });
      const E = (R) => {
        const P = u;
        var F;
        this._responseHandlers[P(1707)](v), this[P(2059)][P(1707)](v), this[P(1820)](v), (F = this[P(1461)]) === null || F === void 0 || F[P(2171)]({ jsonrpc: P(869), method: P(2108), params: { requestId: v, reason: String(R) } }, { relatedRequestId: e, resumptionToken: r, onresumptiontoken: s })[P(580)]((j) => this[P(538)](new Error(P(1657) + j))), c(R);
      };
      this._responseHandlers[u(1527)](v, (R) => {
        const P = u;
        var F;
        if (!(!((F = n == null ? void 0 : n[P(1572)]) === null || F === void 0) && F.aborted)) {
          if (R instanceof Error) return c(R);
          try {
            const j = t[P(1383)](R.result);
            i(j);
          } catch (j) {
            c(j);
          }
        }
      }), (g = n == null ? void 0 : n[u(1572)]) === null || g === void 0 || g[u(2761)](u(289), () => {
        const R = u;
        var P;
        E((P = n == null ? void 0 : n[R(1572)]) === null || P === void 0 ? void 0 : P[R(2027)]);
      });
      const A = (h = n == null ? void 0 : n.timeout) !== null && h !== void 0 ? h : W2, T = () => E(new Ae(ye[u(1211)], u(2320), { timeout: A }));
      this[u(1148)](v, A, n == null ? void 0 : n[u(261)], T, (m = n == null ? void 0 : n.resetTimeoutOnProgress) !== null && m !== void 0 ? m : !1), this[u(1461)][u(2171)](S, { relatedRequestId: e, resumptionToken: r, onresumptiontoken: s })[u(580)]((R) => {
        this._cleanupTimeout(v), c(R);
      });
    });
  }
  async [a(1006)](x, t) {
    const n = a;
    var e, r;
    if (!this[n(1461)]) throw new Error(n(1035));
    if (this.assertNotificationCapability(x[n(2272)]), ((r = (e = this[n(2643)]) === null || e === void 0 ? void 0 : e[n(507)]) !== null && r !== void 0 ? r : []).includes(x[n(2272)]) && !x.params && !(t != null && t[n(1022)])) {
      if (this[n(2046)].has(x.method)) return;
      this[n(2046)].add(x.method), Promise[n(2251)]()[n(2278)](() => {
        const u = n;
        var d;
        if (this[u(2046)].delete(x[u(2272)]), !this[u(1461)]) return;
        const l = { ...x, jsonrpc: u(869) };
        (d = this[u(1461)]) === null || d === void 0 || d[u(2171)](l, t).catch((f) => this._onerror(f));
      });
      return;
    }
    const c = { ...x, jsonrpc: n(869) };
    await this[n(1461)][n(2171)](c, t);
  }
  setRequestHandler(x, t) {
    const n = a, e = x.shape[n(2272)][n(1732)];
    this[n(1520)](e), this[n(2476)][n(1527)](e, (r, s) => {
      const i = n;
      return Promise[i(2251)](t(x[i(1383)](r), s));
    });
  }
  [a(2785)](x) {
    const t = a;
    this[t(2476)][t(1707)](x);
  }
  [a(344)](x) {
    const t = a;
    if (this._requestHandlers.has(x)) throw new Error(t(2334) + x + " already exists, which would be overridden");
  }
  [a(2169)](x, t) {
    const n = a;
    this._notificationHandlers[n(1527)](x.shape[n(2272)].value, (e) => Promise[n(2251)](t(x[n(1383)](e))));
  }
  removeNotificationHandler(x) {
    const t = a;
    this[t(880)][t(1707)](x);
  }
}
function Z2(o, x) {
  const t = a;
  return Object.entries(x)[t(1173)]((n, [e, r]) => (r && typeof r === t(1985) ? n[e] = n[e] ? { ...n[e], ...r } : r : n[e] = r, n), { ...o });
}
var Ye = { exports: {} }, K2 = Ye[a(1535)], er;
function G2() {
  const o = a;
  return er || (er = 1, function(x, t) {
    (function(n, e) {
      e(t);
    })(K2, function(n) {
      const e = B;
      function r() {
        const I = B;
        for (var p = arguments[I(2463)], b = Array(p), w = 0; w < p; w++)
          b[w] = arguments[w];
        if (b.length > 1) {
          b[0] = b[0][I(600)](0, -1);
          for (var H = b[I(2463)] - 1, $ = 1; $ < H; ++$)
            b[$] = b[$][I(600)](1, -1);
          return b[H] = b[H][I(600)](1), b[I(1483)]("");
        } else return b[0];
      }
      function s(I) {
        return B(1798) + I + ")";
      }
      function i(I) {
        const p = B;
        return I === void 0 ? "undefined" : I === null ? p(2645) : Object[p(1060)].toString[p(1850)](I)[p(2352)](" ")[p(2566)]()[p(2352)]("]")[p(2325)]().toLowerCase();
      }
      function c(I) {
        return I[B(1731)]();
      }
      function u(I) {
        const p = B;
        return I != null ? I instanceof Array ? I : typeof I[p(2463)] !== p(2601) || I[p(2352)] || I.setInterval || I.call ? [I] : Array.prototype.slice[p(1850)](I) : [];
      }
      function d(I, p) {
        var b = I;
        if (p) for (var w in p)
          b[w] = p[w];
        return b;
      }
      function l(I) {
        const p = B;
        var b = p(2420), w = p(1711), H = r(w, "[A-Fa-f]"), $ = s(s("%[EFef]" + H + "%" + H + H + "%" + H + H) + "|" + s(p(658) + H + "%" + H + H) + "|" + s("%" + H + H)), n0 = p(1076), d0 = p(1860), F0 = r(n0, d0), D0 = I ? "[\\xA0-\\u200D\\u2010-\\u2029\\u202F-\\uD7FF\\uF900-\\uFDCF\\uFDF0-\\uFFEF]" : "[]", _0 = I ? p(998) : "[]", P0 = r(b, w, p(996), D0);
        s(b + r(b, w, p(2316)) + "*"), s(s($ + "|" + r(P0, d0, p(263))) + "*");
        var O0 = s(s(p(230)) + "|" + s("2[0-4]" + w) + "|" + s("1" + w + w) + "|" + s("0?[1-9]" + w) + p(861) + w), W0 = s(O0 + "\\." + O0 + "\\." + O0 + "\\." + O0), b0 = s(H + p(411)), M0 = s(s(b0 + "\\:" + b0) + "|" + W0), Z0 = s(s(b0 + "\\:") + p(286) + M0), $0 = s(p(1432) + s(b0 + "\\:") + "{5}" + M0), ke = s(s(b0) + p(2708) + s(b0 + "\\:") + p(956) + M0), ie = s(s(s(b0 + "\\:") + p(1228) + b0) + p(2708) + s(b0 + "\\:") + p(1722) + M0), ce = s(s(s(b0 + "\\:") + p(1080) + b0) + p(2708) + s(b0 + "\\:") + p(2644) + M0), Ue = s(s(s(b0 + "\\:") + p(2687) + b0) + "?\\:\\:" + b0 + "\\:" + M0), Fe = s(s(s(b0 + "\\:") + p(906) + b0) + p(2708) + M0), te = s(s(s(b0 + "\\:") + p(657) + b0) + p(2708) + b0), ue = s(s(s(b0 + "\\:") + p(2779) + b0) + "?\\:\\:"), de = s([Z0, $0, ke, ie, ce, Ue, Fe, te, ue][p(1483)]("|")), Pe = s(s(P0 + "|" + $) + "+");
        s(p(2427) + H + "+\\." + r(P0, d0, p(263)) + "+"), s(s($ + "|" + r(P0, d0)) + "*");
        var le = s($ + "|" + r(P0, d0, p(791)));
        return s(s($ + "|" + r(P0, d0, p(583))) + "+"), s(s(le + "|" + r("[\\/\\?]", _0)) + "*"), { NOT_SCHEME: new RegExp(r(p(821), b, w, "[\\+\\-\\.]"), "g"), NOT_USERINFO: new RegExp(r(p(1950), P0, d0), "g"), NOT_HOST: new RegExp(r(p(2411), P0, d0), "g"), NOT_PATH: new RegExp(r(p(401), P0, d0), "g"), NOT_PATH_NOSCHEME: new RegExp(r(p(520), P0, d0), "g"), NOT_QUERY: new RegExp(r(p(1477), P0, d0, p(2295), _0), "g"), NOT_FRAGMENT: new RegExp(r("[^\\%]", P0, d0, "[\\:\\@\\/\\?]"), "g"), ESCAPE: new RegExp(r(p(821), P0, d0), "g"), UNRESERVED: new RegExp(P0, "g"), OTHER_CHARS: new RegExp(r(p(1477), P0, F0), "g"), PCT_ENCODED: new RegExp($, "g"), IPV4ADDRESS: new RegExp("^(" + W0 + ")$"), IPV6ADDRESS: new RegExp(p(1011) + de + ")" + s(s(p(712) + H + "{2})") + "(" + Pe + ")") + p(1975)) };
      }
      var f = l(!1), g = l(!0), h = /* @__PURE__ */ function() {
        function I(p, b) {
          const w = B;
          var H = [], $ = !0, n0 = !1, d0 = void 0;
          try {
            for (var F0 = p[Symbol[w(1e3)]](), D0; !($ = (D0 = F0[w(1122)]())[w(2530)]) && (H[w(1851)](D0[w(1732)]), !(b && H[w(2463)] === b)); $ = !0)
              ;
          } catch (_0) {
            n0 = !0, d0 = _0;
          } finally {
            try {
              !$ && F0[w(1565)] && F0[w(1565)]();
            } finally {
              if (n0) throw d0;
            }
          }
          return H;
        }
        return function(p, b) {
          const w = B;
          if (Array[w(1155)](p)) return p;
          if (Symbol[w(1e3)] in Object(p)) return I(p, b);
          throw new TypeError(w(1699));
        };
      }(), m = function(I) {
        const p = B;
        if (Array[p(1155)](I)) {
          for (var b = 0, w = Array(I[p(2463)]); b < I[p(2463)]; b++) w[b] = I[b];
          return w;
        } else return Array.from(I);
      }, v = 2147483647, S = 36, E = 1, A = 26, T = 38, R = 700, P = 72, F = 128, j = "-", O = /^xn--/, L = /[^\0-\x7E]/, C = /[\x2E\u3002\uFF0E\uFF61]/g, N = { overflow: e(2003), "not-basic": e(474), "invalid-input": e(404) }, z = S - E, U = Math.floor, V = String.fromCharCode;
      function G(I) {
        throw new RangeError(N[I]);
      }
      function i0(I, p) {
        const b = e;
        for (var w = [], H = I[b(2463)]; H--; )
          w[H] = p(I[H]);
        return w;
      }
      function u0(I, p) {
        const b = e;
        var w = I[b(2352)]("@"), H = "";
        w.length > 1 && (H = w[0] + "@", I = w[1]), I = I[b(1936)](C, ".");
        var $ = I[b(2352)]("."), n0 = i0($, p).join(".");
        return H + n0;
      }
      function l0(I) {
        const p = e;
        for (var b = [], w = 0, H = I.length; w < H; ) {
          var $ = I.charCodeAt(w++);
          if ($ >= 55296 && $ <= 56319 && w < H) {
            var n0 = I[p(882)](w++);
            (n0 & 64512) == 56320 ? b[p(1851)]((($ & 1023) << 10) + (n0 & 1023) + 65536) : (b[p(1851)]($), w--);
          } else b[p(1851)]($);
        }
        return b;
      }
      var o0 = function(p) {
        const b = e;
        return String[b(2106)][b(2135)](String, m(p));
      }, f0 = function(p) {
        return p - 48 < 10 ? p - 22 : p - 65 < 26 ? p - 65 : p - 97 < 26 ? p - 97 : S;
      }, k0 = function(p, b) {
        return p + 22 + 75 * (p < 26) - ((b != 0) << 5);
      }, w0 = function(p, b, w) {
        var H = 0;
        for (p = w ? U(p / R) : p >> 1, p += U(p / b); p > z * A >> 1; H += S)
          p = U(p / z);
        return U(H + (z + 1) * p / (p + T));
      }, j0 = function(p) {
        const b = e;
        var w = [], H = p.length, $ = 0, n0 = F, d0 = P, F0 = p[b(1182)](j);
        F0 < 0 && (F0 = 0);
        for (var D0 = 0; D0 < F0; ++D0)
          p[b(882)](D0) >= 128 && G(b(258)), w.push(p.charCodeAt(D0));
        for (var _0 = F0 > 0 ? F0 + 1 : 0; _0 < H; ) {
          for (var P0 = $, O0 = 1, W0 = S; ; W0 += S) {
            _0 >= H && G(b(1831));
            var b0 = f0(p[b(882)](_0++));
            (b0 >= S || b0 > U((v - $) / O0)) && G("overflow"), $ += b0 * O0;
            var M0 = W0 <= d0 ? E : W0 >= d0 + A ? A : W0 - d0;
            if (b0 < M0) break;
            var Z0 = S - M0;
            O0 > U(v / Z0) && G(b(1045)), O0 *= Z0;
          }
          var $0 = w.length + 1;
          d0 = w0($ - P0, $0, P0 == 0), U($ / $0) > v - n0 && G("overflow"), n0 += U($ / $0), $ %= $0, w[b(295)]($++, 0, n0);
        }
        return String[b(2106)][b(2135)](String, w);
      }, C0 = function(p) {
        const b = e;
        var w = [];
        p = l0(p);
        var H = p[b(2463)], $ = F, n0 = 0, d0 = P, F0 = !0, D0 = !1, _0 = void 0;
        try {
          for (var P0 = p[Symbol[b(1e3)]](), O0; !(F0 = (O0 = P0[b(1122)]())[b(2530)]); F0 = !0) {
            var W0 = O0.value;
            W0 < 128 && w[b(1851)](V(W0));
          }
        } catch (Ge) {
          D0 = !0, _0 = Ge;
        } finally {
          try {
            !F0 && P0[b(1565)] && P0[b(1565)]();
          } finally {
            if (D0) throw _0;
          }
        }
        var b0 = w[b(2463)], M0 = b0;
        for (b0 && w[b(1851)](j); M0 < H; ) {
          var Z0 = v, $0 = !0, ke = !1, ie = void 0;
          try {
            for (var ce = p[Symbol[b(1e3)]](), Ue; !($0 = (Ue = ce[b(1122)]())[b(2530)]); $0 = !0) {
              var Fe = Ue[b(1732)];
              Fe >= $ && Fe < Z0 && (Z0 = Fe);
            }
          } catch (Ge) {
            ke = !0, ie = Ge;
          } finally {
            try {
              !$0 && ce.return && ce[b(1565)]();
            } finally {
              if (ke) throw ie;
            }
          }
          var te = M0 + 1;
          Z0 - $ > U((v - n0) / te) && G("overflow"), n0 += (Z0 - $) * te, $ = Z0;
          var ue = !0, de = !1, Pe = void 0;
          try {
            for (var le = p[Symbol[b(1e3)]](), ya; !(ue = (ya = le[b(1122)]())[b(2530)]); ue = !0) {
              var va = ya[b(1732)];
              if (va < $ && ++n0 > v && G(b(1045)), va == $) {
                for (var ux = n0, dx = S; ; dx += S) {
                  var lx = dx <= d0 ? E : dx >= d0 + A ? A : dx - d0;
                  if (ux < lx) break;
                  var wa = ux - lx, Sa = S - lx;
                  w[b(1851)](V(k0(lx + wa % Sa, 0))), ux = U(wa / Sa);
                }
                w.push(V(k0(ux, 0))), d0 = w0(n0, te, M0 == b0), n0 = 0, ++M0;
              }
            }
          } catch (Ge) {
            de = !0, Pe = Ge;
          } finally {
            try {
              !ue && le[b(1565)] && le.return();
            } finally {
              if (de) throw Pe;
            }
          }
          ++n0, ++$;
        }
        return w[b(1483)]("");
      }, J0 = function(p) {
        return u0(p, function(b) {
          const w = B;
          return O[w(2734)](b) ? j0(b[w(600)](4)[w(2321)]()) : b;
        });
      }, D = function(p) {
        return u0(p, function(b) {
          const w = B;
          return L[w(2734)](b) ? w(1307) + C0(b) : b;
        });
      }, q = { version: e(2605), ucs2: { decode: l0, encode: o0 }, decode: j0, encode: C0, toASCII: D, toUnicode: J0 }, M = {};
      function J(I) {
        const p = e;
        var b = I.charCodeAt(0), w = void 0;
        return b < 16 ? w = "%0" + b[p(830)](16)[p(1731)]() : b < 128 ? w = "%" + b[p(830)](16)[p(1731)]() : b < 2048 ? w = "%" + (b >> 6 | 192)[p(830)](16).toUpperCase() + "%" + (b & 63 | 128)[p(830)](16)[p(1731)]() : w = "%" + (b >> 12 | 224)[p(830)](16)[p(1731)]() + "%" + (b >> 6 & 63 | 128)[p(830)](16)[p(1731)]() + "%" + (b & 63 | 128).toString(16).toUpperCase(), w;
      }
      function Y(I) {
        const p = e;
        for (var b = "", w = 0, H = I[p(2463)]; w < H; ) {
          var $ = parseInt(I[p(2202)](w + 1, 2), 16);
          if ($ < 128) b += String[p(2770)]($), w += 3;
          else if ($ >= 194 && $ < 224) {
            if (H - w >= 6) {
              var n0 = parseInt(I.substr(w + 4, 2), 16);
              b += String.fromCharCode(($ & 31) << 6 | n0 & 63);
            } else b += I[p(2202)](w, 6);
            w += 6;
          } else if ($ >= 224) {
            if (H - w >= 9) {
              var d0 = parseInt(I.substr(w + 4, 2), 16), F0 = parseInt(I[p(2202)](w + 7, 2), 16);
              b += String[p(2770)](($ & 15) << 12 | (d0 & 63) << 6 | F0 & 63);
            } else b += I[p(2202)](w, 9);
            w += 9;
          } else b += I[p(2202)](w, 3), w += 3;
        }
        return b;
      }
      function _(I, p) {
        const b = e;
        function w(H) {
          const $ = B;
          var n0 = Y(H);
          return n0[$(2457)](p.UNRESERVED) ? n0 : H;
        }
        return I[b(1408)] && (I[b(1408)] = String(I.scheme).replace(p.PCT_ENCODED, w)[b(2321)]()[b(1936)](p[b(435)], "")), I.userinfo !== void 0 && (I[b(2626)] = String(I[b(2626)])[b(1936)](p[b(2710)], w)[b(1936)](p[b(1333)], J).replace(p[b(2710)], c)), I.host !== void 0 && (I.host = String(I.host).replace(p.PCT_ENCODED, w)[b(2321)]()[b(1936)](p[b(1634)], J)[b(1936)](p[b(2710)], c)), I.path !== void 0 && (I[b(2501)] = String(I[b(2501)])[b(1936)](p[b(2710)], w).replace(I[b(1408)] ? p[b(2549)] : p[b(529)], J)[b(1936)](p[b(2710)], c)), I[b(2008)] !== void 0 && (I[b(2008)] = String(I.query)[b(1936)](p[b(2710)], w)[b(1936)](p[b(742)], J)[b(1936)](p.PCT_ENCODED, c)), I[b(1233)] !== void 0 && (I[b(1233)] = String(I[b(1233)])[b(1936)](p[b(2710)], w)[b(1936)](p.NOT_FRAGMENT, J)[b(1936)](p.PCT_ENCODED, c)), I;
      }
      function X(I) {
        return I[e(1936)](/^0*(.*)/, "$1") || "0";
      }
      function s0(I, p) {
        const b = e;
        var w = I[b(2457)](p[b(2690)]) || [], H = h(w, 2), $ = H[1];
        return $ ? $[b(2352)](".")[b(698)](X)[b(1483)](".") : I;
      }
      function c0(I, p) {
        const b = e;
        var w = I[b(2457)](p[b(842)]) || [], H = h(w, 3), $ = H[1], n0 = H[2];
        if ($) {
          for (var d0 = $[b(2321)]()[b(2352)]("::")[b(2455)](), F0 = h(d0, 2), D0 = F0[0], _0 = F0[1], P0 = _0 ? _0[b(2352)](":")[b(698)](X) : [], O0 = D0[b(2352)](":")[b(698)](X), W0 = p[b(2690)].test(O0[O0.length - 1]), b0 = W0 ? 7 : 8, M0 = O0[b(2463)] - b0, Z0 = Array(b0), $0 = 0; $0 < b0; ++$0)
            Z0[$0] = P0[$0] || O0[M0 + $0] || "";
          W0 && (Z0[b0 - 1] = s0(Z0[b0 - 1], p));
          var ke = Z0[b(1173)](function(te, ue, de) {
            const Pe = b;
            if (!ue || ue === "0") {
              var le = te[te[Pe(2463)] - 1];
              le && le.index + le.length === de ? le[Pe(2463)]++ : te[Pe(1851)]({ index: de, length: 1 });
            }
            return te;
          }, []), ie = ke[b(1758)](function(te, ue) {
            const de = b;
            return ue[de(2463)] - te[de(2463)];
          })[0], ce = void 0;
          if (ie && ie[b(2463)] > 1) {
            var Ue = Z0[b(600)](0, ie.index), Fe = Z0.slice(ie.index + ie[b(2463)]);
            ce = Ue.join(":") + "::" + Fe[b(1483)](":");
          } else ce = Z0[b(1483)](":");
          return n0 && (ce += "%" + n0), ce;
        } else return I;
      }
      var a0 = /^(?:([^:\/?#]+):)?(?:\/\/((?:([^\/?#@]*)@)?(\[[^\/?#\]]+\]|[^\/?#:]*)(?:\:(\d*))?))?([^?#]*)(?:\?([^#]*))?(?:#((?:.|\n|\r)*))?/i, L0 = ""[e(2457)](/(){0}/)[1] === void 0;
      function A0(I) {
        const p = e;
        var b = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : {}, w = {}, H = b[p(2496)] !== !1 ? g : f;
        b[p(769)] === "suffix" && (I = (b[p(1408)] ? b[p(1408)] + ":" : "") + "//" + I);
        var $ = I[p(2457)](a0);
        if ($) {
          L0 ? (w[p(1408)] = $[1], w[p(2626)] = $[3], w.host = $[4], w[p(2190)] = parseInt($[5], 10), w.path = $[6] || "", w[p(2008)] = $[7], w.fragment = $[8], isNaN(w[p(2190)]) && (w.port = $[5])) : (w[p(1408)] = $[1] || void 0, w[p(2626)] = I[p(1817)]("@") !== -1 ? $[3] : void 0, w[p(722)] = I[p(1817)]("//") !== -1 ? $[4] : void 0, w[p(2190)] = parseInt($[5], 10), w[p(2501)] = $[6] || "", w[p(2008)] = I.indexOf("?") !== -1 ? $[7] : void 0, w[p(1233)] = I.indexOf("#") !== -1 ? $[8] : void 0, isNaN(w[p(2190)]) && (w[p(2190)] = I[p(2457)](/\/\/(?:.|\n)*\:(?:\/|\?|\#|$)/) ? $[4] : void 0)), w[p(722)] && (w.host = c0(s0(w.host, H), H)), w[p(1408)] === void 0 && w[p(2626)] === void 0 && w[p(722)] === void 0 && w[p(2190)] === void 0 && !w[p(2501)] && w[p(2008)] === void 0 ? w[p(769)] = p(522) : w[p(1408)] === void 0 ? w[p(769)] = p(1225) : w[p(1233)] === void 0 ? w[p(769)] = p(678) : w[p(769)] = "uri", b[p(769)] && b[p(769)] !== p(1447) && b[p(769)] !== w.reference && (w.error = w[p(443)] || p(1723) + b[p(769)] + p(724));
          var n0 = M[(b.scheme || w[p(1408)] || "").toLowerCase()];
          if (!b[p(1004)] && (!n0 || !n0[p(1004)])) {
            if (w[p(722)] && (b[p(1341)] || n0 && n0[p(1341)])) try {
              w[p(722)] = q.toASCII(w[p(722)][p(1936)](H.PCT_ENCODED, Y).toLowerCase());
            } catch (d0) {
              w[p(443)] = w[p(443)] || "Host's domain name can not be converted to ASCII via punycode: " + d0;
            }
            _(w, f);
          } else _(w, H);
          n0 && n0[p(1383)] && n0[p(1383)](w, b);
        } else w[p(443)] = w.error || p(465);
        return w;
      }
      function U0(I, p) {
        const b = e;
        var w = p[b(2496)] !== !1 ? g : f, H = [];
        return I.userinfo !== void 0 && (H[b(1851)](I[b(2626)]), H[b(1851)]("@")), I[b(722)] !== void 0 && H[b(1851)](c0(s0(String(I[b(722)]), w), w)[b(1936)](w[b(842)], function($, n0, d0) {
          return "[" + n0 + (d0 ? "%25" + d0 : "") + "]";
        })), (typeof I[b(2190)] === b(2601) || typeof I[b(2190)] === b(1516)) && (H[b(1851)](":"), H[b(1851)](String(I[b(2190)]))), H[b(2463)] ? H[b(1483)]("") : void 0;
      }
      var S0 = /^\.\.?\//, G0 = /^\/\.(\/|$)/, se = /^\/\.\.(\/|$)/, Q0 = /^\/?(?:.|\n)*?(?=\/|$)/;
      function H0(I) {
        const p = e;
        for (var b = []; I[p(2463)]; )
          if (I[p(2457)](S0)) I = I[p(1936)](S0, "");
          else if (I[p(2457)](G0)) I = I[p(1936)](G0, "/");
          else if (I[p(2457)](se)) I = I.replace(se, "/"), b.pop();
          else if (I === "." || I === "..") I = "";
          else {
            var w = I[p(2457)](Q0);
            if (w) {
              var H = w[0];
              I = I.slice(H[p(2463)]), b[p(1851)](H);
            } else throw new Error("Unexpected dot segment condition");
          }
        return b[p(1483)]("");
      }
      function V0(I) {
        const p = e;
        var b = arguments[p(2463)] > 1 && arguments[1] !== void 0 ? arguments[1] : {}, w = b[p(2496)] ? g : f, H = [], $ = M[(b[p(1408)] || I.scheme || "")[p(2321)]()];
        if ($ && $.serialize && $[p(1680)](I, b), I[p(722)] && !w.IPV6ADDRESS[p(2734)](I[p(722)])) {
          if (b[p(1341)] || $ && $.domainHost) try {
            I[p(722)] = b[p(2496)] ? q[p(2087)](I.host) : q[p(935)](I[p(722)][p(1936)](w[p(2710)], Y)[p(2321)]());
          } catch (F0) {
            I[p(443)] = I[p(443)] || p(918) + (b[p(2496)] ? p(2268) : p(2495)) + " via punycode: " + F0;
          }
        }
        _(I, w), b[p(769)] !== p(1447) && I[p(1408)] && (H[p(1851)](I.scheme), H[p(1851)](":"));
        var n0 = U0(I, b);
        if (n0 !== void 0 && (b.reference !== p(1447) && H[p(1851)]("//"), H[p(1851)](n0), I[p(2501)] && I[p(2501)][p(2563)](0) !== "/" && H[p(1851)]("/")), I[p(2501)] !== void 0) {
          var d0 = I[p(2501)];
          !b.absolutePath && (!$ || !$[p(1117)]) && (d0 = H0(d0)), n0 === void 0 && (d0 = d0[p(1936)](/^\/\//, p(2505))), H[p(1851)](d0);
        }
        return I[p(2008)] !== void 0 && (H[p(1851)]("?"), H[p(1851)](I[p(2008)])), I[p(1233)] !== void 0 && (H[p(1851)]("#"), H.push(I.fragment)), H.join("");
      }
      function Y0(I, p) {
        const b = e;
        var w = arguments[b(2463)] > 2 && arguments[2] !== void 0 ? arguments[2] : {}, H = arguments[3], $ = {};
        return !H && (I = A0(V0(I, w), w), p = A0(V0(p, w), w)), w = w || {}, !w[b(386)] && p[b(1408)] ? ($[b(1408)] = p[b(1408)], $.userinfo = p[b(2626)], $.host = p[b(722)], $.port = p[b(2190)], $.path = H0(p[b(2501)] || ""), $[b(2008)] = p[b(2008)]) : (p[b(2626)] !== void 0 || p.host !== void 0 || p[b(2190)] !== void 0 ? ($[b(2626)] = p.userinfo, $[b(722)] = p[b(722)], $.port = p[b(2190)], $[b(2501)] = H0(p.path || ""), $.query = p[b(2008)]) : (p[b(2501)] ? (p.path[b(2563)](0) === "/" ? $[b(2501)] = H0(p.path) : ((I[b(2626)] !== void 0 || I[b(722)] !== void 0 || I[b(2190)] !== void 0) && !I.path ? $[b(2501)] = "/" + p[b(2501)] : I[b(2501)] ? $[b(2501)] = I.path[b(600)](0, I[b(2501)][b(1182)]("/") + 1) + p[b(2501)] : $.path = p[b(2501)], $[b(2501)] = H0($[b(2501)])), $[b(2008)] = p[b(2008)]) : ($[b(2501)] = I.path, p[b(2008)] !== void 0 ? $.query = p.query : $.query = I.query), $[b(2626)] = I[b(2626)], $[b(722)] = I[b(722)], $[b(2190)] = I[b(2190)]), $[b(1408)] = I[b(1408)]), $.fragment = p[b(1233)], $;
      }
      function $e(I, p, b) {
        var w = d({ scheme: "null" }, b);
        return V0(Y0(A0(I, w), A0(p, w), w, !0), w);
      }
      function Lx(I, p) {
        const b = e;
        return typeof I === b(1516) ? I = V0(A0(I, p), p) : i(I) === b(1985) && (I = A0(V0(I, p), p)), I;
      }
      function Ps(I, p, b) {
        const w = e;
        return typeof I === w(1516) ? I = V0(A0(I, b), b) : i(I) === "object" && (I = V0(I, b)), typeof p == "string" ? p = V0(A0(p, b), b) : i(p) === w(1985) && (p = V0(p, b)), I === p;
      }
      function Es(I, p) {
        const b = e;
        return I && I[b(830)]()[b(1936)](!p || !p[b(2496)] ? f[b(1602)] : g[b(1602)], J);
      }
      function ge(I, p) {
        const b = e;
        return I && I[b(830)]()[b(1936)](!p || !p[b(2496)] ? f[b(2710)] : g.PCT_ENCODED, Y);
      }
      var Ze = { scheme: e(470), domainHost: !0, parse: function(p, b) {
        const w = e;
        return !p[w(722)] && (p[w(443)] = p.error || w(1207)), p;
      }, serialize: function(p, b) {
        const w = e;
        var H = String(p.scheme)[w(2321)]() === w(1054);
        return (p[w(2190)] === (H ? 443 : 80) || p.port === "") && (p[w(2190)] = void 0), !p[w(2501)] && (p.path = "/"), p;
      } }, da = { scheme: "https", domainHost: Ze[e(1341)], parse: Ze[e(1383)], serialize: Ze.serialize };
      function la(I) {
        const p = e;
        return typeof I[p(1128)] == "boolean" ? I[p(1128)] : String(I[p(1408)])[p(2321)]() === p(1742);
      }
      var Ke = { scheme: "ws", domainHost: !0, parse: function(p, b) {
        const w = e;
        var H = p;
        return H[w(1128)] = la(H), H[w(761)] = (H[w(2501)] || "/") + (H.query ? "?" + H.query : ""), H.path = void 0, H[w(2008)] = void 0, H;
      }, serialize: function(p, b) {
        const w = e;
        if ((p.port === (la(p) ? 443 : 80) || p[w(2190)] === "") && (p[w(2190)] = void 0), typeof p[w(1128)] == "boolean" && (p[w(1408)] = p[w(1128)] ? w(1742) : "ws", p[w(1128)] = void 0), p[w(761)]) {
          var H = p[w(761)][w(2352)]("?"), $ = h(H, 2), n0 = $[0], d0 = $[1];
          p[w(2501)] = n0 && n0 !== "/" ? n0 : void 0, p.query = d0, p[w(761)] = void 0;
        }
        return p[w(1233)] = void 0, p;
      } }, fa = { scheme: e(1742), domainHost: Ke[e(1341)], parse: Ke[e(1383)], serialize: Ke[e(1680)] }, Is = {}, ha = "[A-Za-z0-9\\-\\.\\_\\~" + e(2540) + "]", oe = "[0-9A-Fa-f]", Rs = s(s("%[EFef]" + oe + "%" + oe + oe + "%" + oe + oe) + "|" + s("%[89A-Fa-f]" + oe + "%" + oe + oe) + "|" + s("%" + oe + oe)), Cs = e(2311), Fs = e(277), Ns = r(Fs, e(2610)), qs = e(2591), Ts = new RegExp(ha, "g"), ze = new RegExp(Rs, "g"), As = new RegExp(r(e(821), Cs, "[\\.]", e(1600), Ns), "g"), pa = new RegExp(r(e(821), ha, qs), "g"), Os = pa;
      function Mx(I) {
        const p = e;
        var b = Y(I);
        return b[p(2457)](Ts) ? b : I;
      }
      var ma = { scheme: e(1330), parse: function(p, b) {
        const w = e;
        var H = p, $ = H.to = H.path ? H[w(2501)][w(2352)](",") : [];
        if (H[w(2501)] = void 0, H.query) {
          for (var n0 = !1, d0 = {}, F0 = H.query.split("&"), D0 = 0, _0 = F0[w(2463)]; D0 < _0; ++D0) {
            var P0 = F0[D0][w(2352)]("=");
            switch (P0[0]) {
              case "to":
                for (var O0 = P0[1][w(2352)](","), W0 = 0, b0 = O0[w(2463)]; W0 < b0; ++W0)
                  $[w(1851)](O0[W0]);
                break;
              case w(2763):
                H[w(2763)] = ge(P0[1], b);
                break;
              case w(2241):
                H[w(2241)] = ge(P0[1], b);
                break;
              default:
                n0 = !0, d0[ge(P0[0], b)] = ge(P0[1], b);
                break;
            }
          }
          n0 && (H.headers = d0);
        }
        H[w(2008)] = void 0;
        for (var M0 = 0, Z0 = $[w(2463)]; M0 < Z0; ++M0) {
          var $0 = $[M0][w(2352)]("@");
          if ($0[0] = ge($0[0]), b.unicodeSupport) $0[1] = ge($0[1], b)[w(2321)]();
          else try {
            $0[1] = q[w(935)](ge($0[1], b)[w(2321)]());
          } catch (ke) {
            H[w(443)] = H[w(443)] || w(2718) + ke;
          }
          $[M0] = $0.join("@");
        }
        return H;
      }, serialize: function(p, b) {
        const w = e;
        var H = p, $ = u(p.to);
        if ($) {
          for (var n0 = 0, d0 = $[w(2463)]; n0 < d0; ++n0) {
            var F0 = String($[n0]), D0 = F0[w(1182)]("@"), _0 = F0[w(600)](0, D0)[w(1936)](ze, Mx)[w(1936)](ze, c)[w(1936)](As, J), P0 = F0[w(600)](D0 + 1);
            try {
              P0 = b[w(2496)] ? q.toUnicode(P0) : q.toASCII(ge(P0, b)[w(2321)]());
            } catch (M0) {
              H[w(443)] = H[w(443)] || w(1209) + (b.iri ? w(2268) : w(2495)) + w(2521) + M0;
            }
            $[n0] = _0 + "@" + P0;
          }
          H.path = $[w(1483)](",");
        }
        var O0 = p[w(2454)] = p[w(2454)] || {};
        p[w(2763)] && (O0[w(2763)] = p.subject), p.body && (O0[w(2241)] = p[w(2241)]);
        var W0 = [];
        for (var b0 in O0)
          O0[b0] !== Is[b0] && W0[w(1851)](b0.replace(ze, Mx).replace(ze, c)[w(1936)](pa, J) + "=" + O0[b0][w(1936)](ze, Mx)[w(1936)](ze, c)[w(1936)](Os, J));
        return W0.length && (H[w(2008)] = W0[w(1483)]("&")), H;
      } }, Ds = /^([^\:]+)\:(.*)/, ga = { scheme: e(504), parse: function(p, b) {
        const w = e;
        var H = p[w(2501)] && p[w(2501)][w(2457)](Ds), $ = p;
        if (H) {
          var n0 = b[w(1408)] || $[w(1408)] || w(504), d0 = H[1].toLowerCase(), F0 = H[2], D0 = n0 + ":" + (b.nid || d0), _0 = M[D0];
          $[w(463)] = d0, $[w(432)] = F0, $[w(2501)] = void 0, _0 && ($ = _0.parse($, b));
        } else $[w(443)] = $[w(443)] || w(1234);
        return $;
      }, serialize: function(p, b) {
        const w = e;
        var H = b[w(1408)] || p.scheme || "urn", $ = p[w(463)], n0 = H + ":" + (b.nid || $), d0 = M[n0];
        d0 && (p = d0[w(1680)](p, b));
        var F0 = p, D0 = p[w(432)];
        return F0[w(2501)] = ($ || b.nid) + ":" + D0, F0;
      } }, js = /^[0-9A-Fa-f]{8}(?:\-[0-9A-Fa-f]{4}){3}\-[0-9A-Fa-f]{12}$/, ba = { scheme: e(2725), parse: function(p, b) {
        const w = e;
        var H = p;
        return H[w(1729)] = H[w(432)], H[w(432)] = void 0, !b.tolerant && (!H[w(1729)] || !H[w(1729)][w(2457)](js)) && (H[w(443)] = H[w(443)] || "UUID is not valid."), H;
      }, serialize: function(p, b) {
        const w = e;
        var H = p;
        return H[w(432)] = (p.uuid || "")[w(2321)](), H;
      } };
      M[Ze[e(1408)]] = Ze, M[da[e(1408)]] = da, M[Ke.scheme] = Ke, M[fa[e(1408)]] = fa, M[ma[e(1408)]] = ma, M[ga[e(1408)]] = ga, M[ba[e(1408)]] = ba, n.SCHEMES = M, n[e(732)] = J, n[e(2274)] = Y, n[e(1383)] = A0, n[e(2541)] = H0, n[e(1680)] = V0, n[e(2524)] = Y0, n.resolve = $e, n[e(422)] = Lx, n.equal = Ps, n[e(2228)] = Es, n.unescapeComponent = ge, Object[e(1609)](n, e(770), { value: !0 });
    });
  }(Ye, Ye[o(1535)])), Ye[o(1535)];
}
var Kx, xr;
function ia() {
  return xr || (xr = 1, Kx = function o(x, t) {
    const n = B;
    if (x === t) return !0;
    if (x && t && typeof x == "object" && typeof t == n(1985)) {
      if (x.constructor !== t.constructor) return !1;
      var e, r, s;
      if (Array[n(1155)](x)) {
        if (e = x[n(2463)], e != t[n(2463)]) return !1;
        for (r = e; r-- !== 0; ) if (!o(x[r], t[r])) return !1;
        return !0;
      }
      if (x[n(1789)] === RegExp) return x[n(324)] === t[n(324)] && x[n(1786)] === t[n(1786)];
      if (x[n(1154)] !== Object[n(1060)][n(1154)]) return x.valueOf() === t[n(1154)]();
      if (x[n(830)] !== Object[n(1060)][n(830)]) return x[n(830)]() === t[n(830)]();
      if (s = Object[n(1448)](x), e = s[n(2463)], e !== Object.keys(t)[n(2463)]) return !1;
      for (r = e; r-- !== 0; ) if (!Object.prototype[n(1995)][n(1850)](t, s[r])) return !1;
      for (r = e; r-- !== 0; ) {
        var i = s[r];
        if (!o(x[i], t[i])) return !1;
      }
      return !0;
    }
    return x !== x && t !== t;
  }), Kx;
}
var Gx, tr;
function J2() {
  return tr || (tr = 1, Gx = function(x) {
    const t = B;
    for (var n = 0, e = x.length, r = 0, s; r < e; )
      n++, s = x[t(882)](r++), s >= 55296 && s <= 56319 && r < e && (s = x[t(882)](r), (s & 64512) == 56320 && r++);
    return n;
  }), Gx;
}
var Jx, ar;
function Be() {
  const o = a;
  if (ar) return Jx;
  ar = 1, Jx = { copy: x, checkDataType: t, checkDataTypes: n, coerceToTypes: r, toHash: s, getProperty: u, escapeQuotes: d, equal: ia(), ucs2length: J2(), varOccurences: l, varReplace: f, schemaHasRules: g, schemaHasRulesExcept: h, schemaUnknownRules: m, toQuotedString: v, getPathExpr: S, getPath: E, getData: R, unescapeFragment: F, unescapeJsonPointer: L, escapeFragment: j, escapeJsonPointer: O };
  function x(C, N) {
    N = N || {};
    for (var z in C) N[z] = C[z];
    return N;
  }
  function t(C, N, z, U) {
    const V = B;
    var G = V(U ? 728 : 2005), i0 = V(U ? 1986 : 1412), u0 = U ? "!" : "", l0 = U ? "" : "!";
    switch (C) {
      case V(2645):
        return N + G + V(2645);
      case V(1061):
        return u0 + "Array.isArray(" + N + ")";
      case V(1985):
        return "(" + u0 + N + i0 + "typeof " + N + G + V(2076) + i0 + l0 + "Array.isArray(" + N + "))";
      case V(2403):
        return V(1355) + N + G + V(1001) + i0 + l0 + "(" + N + " % 1)" + i0 + N + G + N + (z ? i0 + u0 + V(1754) + N + ")" : "") + ")";
      case V(2601):
        return V(1355) + N + G + '"' + C + '"' + (z ? i0 + u0 + "isFinite(" + N + ")" : "") + ")";
      default:
        return "typeof " + N + G + '"' + C + '"';
    }
  }
  function n(C, N, z) {
    const U = B;
    switch (C[U(2463)]) {
      case 1:
        return t(C[0], N, z, !0);
      default:
        var V = "", G = s(C);
        G[U(1061)] && G[U(1985)] && (V = G[U(2645)] ? "(" : "(!" + N + " || ", V += U(1650) + N + U(1264), delete G.null, delete G[U(1061)], delete G[U(1985)]), G[U(2601)] && delete G.integer;
        for (var i0 in G) V += (V ? " && " : "") + t(i0, N, z, !0);
        return V;
    }
  }
  var e = s(["string", o(2601), o(2403), o(598), "null"]);
  function r(C, N) {
    const z = o;
    if (Array[z(1155)](N)) {
      for (var U = [], V = 0; V < N[z(2463)]; V++) {
        var G = N[V];
        (e[G] || C === "array" && G === z(1061)) && (U[U[z(2463)]] = G);
      }
      if (U[z(2463)]) return U;
    } else {
      if (e[N]) return [N];
      if (C === "array" && N === z(1061)) return [z(1061)];
    }
  }
  function s(C) {
    const N = o;
    for (var z = {}, U = 0; U < C[N(2463)]; U++) z[C[U]] = !0;
    return z;
  }
  var i = /^[a-z$_][a-z$_0-9]*$/i, c = /'|\\/g;
  function u(C) {
    return typeof C == "number" ? "[" + C + "]" : i[o(2734)](C) ? "." + C : "['" + d(C) + "']";
  }
  function d(C) {
    const N = o;
    return C[N(1936)](c, N(760)).replace(/\n/g, "\\n")[N(1936)](/\r/g, "\\r").replace(/\f/g, "\\f").replace(/\t/g, "\\t");
  }
  function l(C, N) {
    const z = o;
    N += z(1433);
    var U = C[z(2457)](new RegExp(N, "g"));
    return U ? U[z(2463)] : 0;
  }
  function f(C, N, z) {
    const U = o;
    return N += U(2487), z = z[U(1936)](/\$/g, U(1607)), C[U(1936)](new RegExp(N, "g"), z + "$1");
  }
  function g(C, N) {
    if (typeof C == o(598)) return !C;
    for (var U in C) if (N[U]) return !0;
  }
  function h(C, N, z) {
    const U = o;
    if (typeof C == U(598)) return !C && z != U(2150);
    for (var V in C) if (V != z && N[V]) return !0;
  }
  function m(C, N) {
    if (typeof C != "boolean") {
      for (var z in C) if (!N[z]) return z;
    }
  }
  function v(C) {
    return "'" + d(C) + "'";
  }
  function S(C, N, z, U) {
    const V = o;
    var G = z ? "'/' + " + N + (U ? "" : ".replace(/~/g, '~0').replace(/\\//g, '~1')") : U ? V(2489) + N + " + ']'" : V(2168) + N + " + '\\']'";
    return P(C, G);
  }
  function E(C, N, z) {
    var U = v(z ? "/" + O(N) : u(N));
    return P(C, U);
  }
  var A = /^\/(?:[^~]|~0|~1)*$/, T = /^([0-9]+)(#|\/(?:[^~]|~0|~1)*)?$/;
  function R(C, N, z) {
    const U = o;
    var V, G, i0, u0;
    if (C === "") return U(685);
    if (C[0] == "/") {
      if (!A[U(2734)](C)) throw new Error("Invalid JSON-pointer: " + C);
      G = C, i0 = U(685);
    } else {
      if (u0 = C[U(2457)](T), !u0) throw new Error(U(625) + C);
      if (V = +u0[1], G = u0[2], G == "#") {
        if (V >= N) throw new Error(U(420) + V + U(825) + N);
        return z[N - V];
      }
      if (V > N) throw new Error(U(1761) + V + U(825) + N);
      if (i0 = U(2743) + (N - V || ""), !G) return i0;
    }
    for (var l0 = i0, o0 = G[U(2352)]("/"), f0 = 0; f0 < o0[U(2463)]; f0++) {
      var k0 = o0[f0];
      k0 && (i0 += u(L(k0)), l0 += U(1412) + i0);
    }
    return l0;
  }
  function P(C, N) {
    const z = o;
    return C == '""' ? N : (C + z(1460) + N).replace(/([^\\])' \+ '/g, "$1");
  }
  function F(C) {
    return L(decodeURIComponent(C));
  }
  function j(C) {
    return encodeURIComponent(O(C));
  }
  function O(C) {
    const N = o;
    return C[N(1936)](/~/g, "~0")[N(1936)](/\//g, "~1");
  }
  function L(C) {
    const N = o;
    return C.replace(/~1/g, "/")[N(1936)](/~0/g, "~");
  }
  return Jx;
}
var Qx, rr;
function ms() {
  if (rr) return Qx;
  rr = 1;
  var o = Be();
  Qx = x;
  function x(t) {
    o.copy(t, this);
  }
  return Qx;
}
var Xx = { exports: {} }, nr;
function Q2() {
  const o = a;
  if (nr) return Xx[o(1535)];
  nr = 1;
  var x = Xx[o(1535)] = function(e, r, s) {
    const i = o;
    typeof r == i(2176) && (s = r, r = {}), s = r.cb || s;
    var c = typeof s == i(2176) ? s : s.pre || function() {
    }, u = s[i(793)] || function() {
    };
    t(r, c, u, e, "", e);
  };
  x[o(1028)] = { additionalItems: !0, items: !0, contains: !0, additionalProperties: !0, propertyNames: !0, not: !0 }, x[o(947)] = { items: !0, allOf: !0, anyOf: !0, oneOf: !0 }, x[o(2397)] = { definitions: !0, properties: !0, patternProperties: !0, dependencies: !0 }, x[o(361)] = { default: !0, enum: !0, const: !0, required: !0, maximum: !0, minimum: !0, exclusiveMaximum: !0, exclusiveMinimum: !0, multipleOf: !0, maxLength: !0, minLength: !0, pattern: !0, format: !0, maxItems: !0, minItems: !0, uniqueItems: !0, maxProperties: !0, minProperties: !0 };
  function t(e, r, s, i, c, u, d, l, f, g) {
    const h = o;
    if (i && typeof i == h(1985) && !Array[h(1155)](i)) {
      r(i, c, u, d, l, f, g);
      for (var m in i) {
        var v = i[m];
        if (Array[h(1155)](v)) {
          if (m in x[h(947)])
            for (var S = 0; S < v[h(2463)]; S++) t(e, r, s, v[S], c + "/" + m + "/" + S, u, c, m, i, S);
        } else if (m in x[h(2397)]) {
          if (v && typeof v == h(1985))
            for (var E in v) t(e, r, s, v[E], c + "/" + m + "/" + n(E), u, c, m, i, E);
        } else (m in x[h(1028)] || e[h(1094)] && !(m in x[h(361)])) && t(e, r, s, v, c + "/" + m, u, c, m, i);
      }
      s(i, c, u, d, l, f, g);
    }
  }
  function n(e) {
    const r = o;
    return e[r(1936)](/~/g, "~0")[r(1936)](/\//g, "~1");
  }
  return Xx[o(1535)];
}
var Yx, sr;
function ca() {
  const o = a;
  if (sr) return Yx;
  sr = 1;
  var x = G2(), t = ia(), n = Be(), e = ms(), r = Q2();
  Yx = s, s.normalizeId = E, s[o(2749)] = m, s[o(745)] = A, s[o(2398)] = T, s.inlineRef = f, s[o(2782)] = i;
  function s(R, P, F) {
    const j = o;
    var O = this[j(1965)][F];
    if (typeof O == "string")
      if (this[j(1965)][O]) O = this[j(1965)][O];
      else return s[j(1850)](this, R, P, O);
    if (O = O || this._schemas[F], O instanceof e) return f(O[j(2782)], this[j(691)][j(937)]) ? O.schema : O[j(498)] || this[j(2677)](O);
    var L = i.call(this, P, F), C, N, z;
    return L && (C = L[j(2782)], P = L[j(1969)], z = L[j(2653)]), C instanceof e ? N = C[j(498)] || R.call(this, C[j(2782)], P, void 0, z) : C !== void 0 && (N = f(C, this._opts[j(937)]) ? C : R[j(1850)](this, C, P, void 0, z)), N;
  }
  function i(R, P) {
    const F = o;
    var j = x[F(1383)](P), O = v(j), L = m(this[F(2801)](R[F(2782)]));
    if (Object[F(1448)](R[F(2782)]).length === 0 || O !== L) {
      var C = E(O), N = this[F(1965)][C];
      if (typeof N == F(1516)) return c[F(1850)](this, R, N, j);
      if (N instanceof e)
        N[F(498)] || this._compile(N), R = N;
      else if (N = this._schemas[C], N instanceof e) {
        if (N[F(498)] || this._compile(N), C == E(P)) return { schema: N, root: R, baseId: L };
        R = N;
      } else return;
      if (!R[F(2782)]) return;
      L = m(this[F(2801)](R[F(2782)]));
    }
    return d[F(1850)](this, j, L, R[F(2782)], R);
  }
  function c(R, P, F) {
    const j = o;
    var O = i[j(1850)](this, R, P);
    if (O) {
      var L = O[j(2782)], C = O[j(2653)];
      R = O[j(1969)];
      var N = this._getId(L);
      return N && (C = A(C, N)), d[j(1850)](this, F, C, L, R);
    }
  }
  var u = n[o(1297)](["properties", "patternProperties", o(2579), o(2478), o(1708)]);
  function d(R, P, F, j) {
    const O = o;
    if (R[O(1233)] = R[O(1233)] || "", R[O(1233)][O(600)](0, 1) == "/") {
      for (var L = R[O(1233)][O(2352)]("/"), C = 1; C < L[O(2463)]; C++) {
        var N = L[C];
        if (N) {
          if (N = n.unescapeFragment(N), F = F[N], F === void 0) break;
          var z;
          if (!u[N] && (z = this[O(2801)](F), z && (P = A(P, z)), F[O(836)])) {
            var U = A(P, F[O(836)]), V = i[O(1850)](this, j, U);
            V && (F = V[O(2782)], j = V.root, P = V[O(2653)]);
          }
        }
      }
      if (F !== void 0 && F !== j[O(2782)]) return { schema: F, root: j, baseId: P };
    }
  }
  var l = n[o(1297)]([o(2197), o(1671), o(2663), "maxLength", o(1788), o(679), o(1046), "maxItems", o(2396), o(789), o(829), o(531), o(2401), o(1994), o(2579)]);
  function f(R, P) {
    if (P === !1) return !1;
    if (P === void 0 || P === !0) return g(R);
    if (P) return h(R) <= P;
  }
  function g(R) {
    const P = o;
    var F;
    if (Array[P(1155)](R)) {
      for (var j = 0; j < R.length; j++)
        if (F = R[j], typeof F == P(1985) && !g(F)) return !1;
    } else for (var O in R)
      if (O == P(836) || (F = R[O], typeof F == P(1985) && !g(F))) return !1;
    return !0;
  }
  function h(R) {
    const P = o;
    var F = 0, j;
    if (Array[P(1155)](R)) {
      for (var O = 0; O < R[P(2463)]; O++)
        if (j = R[O], typeof j == P(1985) && (F += h(j)), F == 1 / 0) return 1 / 0;
    } else for (var L in R) {
      if (L == P(836)) return 1 / 0;
      if (l[L]) F++;
      else if (j = R[L], typeof j == P(1985) && (F += h(j) + 1), F == 1 / 0) return 1 / 0;
    }
    return F;
  }
  function m(R, P) {
    P !== !1 && (R = E(R));
    var F = x.parse(R);
    return v(F);
  }
  function v(R) {
    const P = o;
    return x[P(1680)](R)[P(2352)]("#")[0] + "#";
  }
  var S = /#\/?$/;
  function E(R) {
    return R ? R[o(1936)](S, "") : "";
  }
  function A(R, P) {
    const F = o;
    return P = E(P), x[F(2251)](R, P);
  }
  function T(R) {
    const P = o;
    var F = E(this[P(2801)](R)), j = { "": F }, O = { "": m(F, !1) }, L = {}, C = this;
    return r(R, { allKeys: !0 }, function(N, z, U, V, G, i0, u0) {
      const l0 = P;
      if (z !== "") {
        var o0 = C[l0(2801)](N), f0 = j[V], k0 = O[V] + "/" + G;
        if (u0 !== void 0 && (k0 += "/" + (typeof u0 == l0(2601) ? u0 : n[l0(705)](u0))), typeof o0 == l0(1516)) {
          o0 = f0 = E(f0 ? x[l0(2251)](f0, o0) : o0);
          var w0 = C[l0(1965)][o0];
          if (typeof w0 == l0(1516) && (w0 = C._refs[w0]), w0 && w0.schema) {
            if (!t(N, w0[l0(2782)])) throw new Error(l0(1841) + o0 + l0(2611));
          } else if (o0 != E(k0))
            if (o0[0] == "#") {
              if (L[o0] && !t(N, L[o0])) throw new Error(l0(1841) + o0 + l0(2611));
              L[o0] = N;
            } else C[l0(1965)][o0] = k0;
        }
        j[z] = f0, O[z] = k0;
      }
    }), L;
  }
  return Yx;
}
var et, or;
function ua() {
  const o = a;
  if (or) return et;
  or = 1;
  var x = ca();
  et = { Validation: e(t), MissingRef: e(n) };
  function t(r) {
    const s = B;
    this[s(2354)] = s(1683), this[s(622)] = r, this[s(1956)] = this.validation = !0;
  }
  n[o(2354)] = function(r, s) {
    return o(1612) + s + " from id " + r;
  };
  function n(r, s, i) {
    const c = o;
    this[c(2354)] = i || n[c(2354)](r, s), this[c(2252)] = x.url(r, s), this[c(348)] = x[c(1262)](x[c(2749)](this[c(2252)]));
  }
  function e(r) {
    const s = o;
    return r[s(1060)] = Object[s(1510)](Error[s(1060)]), r[s(1060)].constructor = r, r;
  }
  return et;
}
var xt, ir;
function gs() {
  return ir || (ir = 1, xt = function(o, x) {
    const t = B;
    x || (x = {}), typeof x === t(2176) && (x = { cmp: x });
    var n = typeof x[t(1161)] === t(598) ? x.cycles : !1, e = x[t(383)] && /* @__PURE__ */ function(s) {
      return function(i) {
        return function(c, u) {
          var d = { key: c, value: i[c] }, l = { key: u, value: i[u] };
          return s(d, l);
        };
      };
    }(x[t(383)]), r = [];
    return function s(i) {
      const c = t;
      if (i && i[c(780)] && typeof i[c(780)] === c(2176) && (i = i[c(780)]()), i !== void 0) {
        if (typeof i == "number") return isFinite(i) ? "" + i : "null";
        if (typeof i !== c(1985)) return JSON[c(555)](i);
        var u, d;
        if (Array[c(1155)](i)) {
          for (d = "[", u = 0; u < i[c(2463)]; u++)
            u && (d += ","), d += s(i[u]) || "null";
          return d + "]";
        }
        if (i === null) return c(2645);
        if (r[c(1817)](i) !== -1) {
          if (n) return JSON.stringify(c(1314));
          throw new TypeError(c(2052));
        }
        var l = r[c(1851)](i) - 1, f = Object[c(1448)](i)[c(1758)](e && e(i));
        for (d = "", u = 0; u < f[c(2463)]; u++) {
          var g = f[u], h = s(i[g]);
          h && (d && (d += ","), d += JSON[c(555)](g) + ":" + h);
        }
        return r[c(295)](l, 1), "{" + d + "}";
      }
    }(o);
  }), xt;
}
var tt, cr;
function bs() {
  return cr || (cr = 1, tt = function(x, t, n) {
    const e = B;
    var r = "", s = x.schema[e(645)] === !0, i = x.util.schemaHasRulesExcept(x.schema, x.RULES[e(912)], "$ref"), c = x[e(1156)][e(2801)](x[e(2782)]);
    if (x[e(1558)][e(1622)]) {
      var u = x[e(1804)][e(2628)](x.schema, x.RULES[e(1028)]);
      if (u) {
        var d = e(1009) + u;
        if (x[e(1558)][e(1622)] === "log") x.logger[e(515)](d);
        else throw new Error(d);
      }
    }
    if (x[e(1560)] && (r += e(1072), s && (x.async = !0, r += e(2614)), r += e(1318), c && (x[e(1558)][e(1251)] || x.opts[e(2276)]) && (r += " " + (e(2293) + c + " */") + " ")), typeof x[e(2782)] == e(598) || !(i || x[e(2782)][e(836)])) {
      var t = e(1802), l = x[e(889)], f = x[e(1697)], g = x[e(2782)][t], h = x[e(2020)] + x[e(1804)][e(449)](t), m = x.errSchemaPath + "/" + t, P = !x[e(1558)][e(1718)], O, v = "data" + (f || ""), R = e(707) + l;
      if (x.schema === !1) {
        x.isTop ? P = !0 : r += " var " + R + e(2164);
        var S = S || [];
        S.push(r), r = "", x[e(981)] !== !1 ? (r += " { keyword: '" + (O || e(1802)) + e(1777) + x[e(346)] + e(805) + x[e(1804)][e(2504)](m) + " , params: {} ", x.opts[e(2049)] !== !1 && (r += " , message: 'boolean schema is false' "), x[e(1558)][e(1539)] && (r += e(2236) + x[e(2020)] + e(1665) + v + " "), r += e(969)) : r += e(1030);
        var E = r;
        r = S[e(2566)](), !x[e(1216)] && P ? x[e(523)] ? r += e(2179) + E + e(1084) : r += e(652) + E + e(2356) : r += " var err = " + E + e(626);
      } else x[e(1560)] ? s ? r += e(1120) : r += " validate.errors = null; return true; " : r += e(1704) + R + " = true; ";
      return x[e(1560)] && (r += e(537)), r;
    }
    if (x[e(1560)]) {
      var A = x[e(1560)], l = x[e(889)] = 0, f = x.dataLevel = 0, v = e(2743);
      if (x[e(2185)] = x[e(2251)][e(2749)](x.self[e(2801)](x[e(1969)][e(2782)])), x[e(2653)] = x[e(2653)] || x[e(2185)], delete x[e(1560)], x.dataPathArr = [""], x[e(2782)][e(779)] !== void 0 && x.opts.useDefaults && x[e(1558)][e(1221)]) {
        var T = "default is ignored in the schema root";
        if (x[e(1558)][e(1221)] === "log") x[e(1814)][e(515)](T);
        else throw new Error(T);
      }
      r += e(395), r += e(2518), r += e(2029);
    } else {
      var l = x.level, f = x[e(1697)], v = "data" + (f || "");
      if (c && (x[e(2653)] = x[e(2251)][e(745)](x[e(2653)], c)), s && !x.async) throw new Error("async schema in sync schema");
      r += " var errs_" + l + e(1002);
    }
    var R = "valid" + l, P = !x[e(1558)][e(1718)], F = "", j = "", O, L = x[e(2782)].type, C = Array[e(1155)](L);
    if (L && x[e(1558)][e(917)] && x[e(2782)][e(917)] === !0 && (C ? L[e(1817)](e(2645)) == -1 && (L = L[e(329)]("null")) : L != "null" && (L = [L, e(2645)], C = !0)), C && L[e(2463)] == 1 && (L = L[0], C = !1), x[e(2782)].$ref && i) {
      if (x[e(1558)].extendRefs == e(1185)) throw new Error(e(2350) + x[e(1512)] + e(394));
      x[e(1558)][e(410)] !== !0 && (i = !1, x.logger[e(515)]('$ref: keywords ignored in schema at path "' + x[e(1512)] + '"'));
    }
    if (x.schema.$comment && x[e(1558)].$comment && (r += " " + x.RULES[e(912)][e(624)][e(1469)](x, e(624))), L) {
      if (x[e(1558)][e(2412)]) var N = x[e(1804)][e(2386)](x.opts[e(2412)], L);
      var z = x.RULES[e(2126)][L];
      if (N || C || z === !0 || z && !S0(z)) {
        var h = x[e(2020)] + e(519), m = x[e(1512)] + e(693), h = x[e(2020)] + ".type", m = x[e(1512)] + "/type", U = e(C ? 896 : 2092);
        if (r += e(1881) + x[e(1804)][U](L, v, x[e(1558)].strictNumbers, !0) + ") { ", N) {
          var V = e(284) + l, G = e(1588) + l;
          r += e(1704) + V + e(2267) + v + e(1576) + G + " = undefined; ", x[e(1558)][e(2412)] == e(1061) && (r += e(1881) + V + e(1327) + v + e(513) + v + e(2382) + v + e(2471) + v + e(1250) + V + " = typeof " + v + "; if (" + x[e(1804)].checkDataType(x.schema[e(2197)], v, x.opts[e(2419)]) + ") " + G + " = " + v + e(544)), r += e(1881) + G + e(2084);
          var i0 = N;
          if (i0)
            for (var u0, l0 = -1, o0 = i0[e(2463)] - 1; l0 < o0; )
              u0 = i0[l0 += 1], u0 == e(1516) ? r += " else if (" + V + e(661) + V + e(1335) + G + e(2635) + v + e(1688) + v + e(2721) + G + e(1289) : u0 == e(2601) || u0 == e(2403) ? (r += e(926) + V + " == 'boolean' || " + v + " === null || (" + V + e(1443) + v + e(1412) + v + " == +" + v + " ", u0 == e(2403) && (r += " && !(" + v + e(615)), r += e(1490) + G + " = +" + v + "; ") : u0 == e(598) ? r += " else if (" + v + e(2795) + v + " === 0 || " + v + e(2721) + G + e(2344) + v + e(281) + v + e(1690) + G + e(1847) : u0 == e(2645) ? r += e(926) + v + e(1507) + v + e(254) + v + e(268) + G + e(1168) : x[e(1558)][e(2412)] == e(1061) && u0 == e(1061) && (r += e(926) + V + " == 'string' || " + V + " == 'number' || " + V + e(855) + v + e(1935) + G + " = [" + v + e(716));
          r += " else {   ";
          var S = S || [];
          S[e(1851)](r), r = "", x[e(981)] !== !1 ? (r += " { keyword: '" + (O || e(2197)) + e(1777) + x.errorPath + e(805) + x[e(1804)][e(2504)](m) + e(581), C ? r += "" + L[e(1483)](",") : r += "" + L, r += e(1765), x[e(1558)][e(2049)] !== !1 && (r += " , message: 'should be ", C ? r += "" + L[e(1483)](",") : r += "" + L, r += "' "), x.opts[e(1539)] && (r += e(1099) + h + e(2492) + x[e(2020)] + e(1665) + v + " "), r += " } ") : r += e(1030);
          var E = r;
          r = S.pop(), !x.compositeRule && P ? x.async ? r += e(2179) + E + e(1084) : r += e(652) + E + e(2356) : r += e(933) + E + ";  if (vErrors === null) vErrors = [err]; else vErrors.push(err); errors++; ", r += " } if (" + G + e(360);
          var f0 = f ? e(2743) + (f - 1 || "") : e(2143), k0 = f ? x[e(684)][f] : e(1137);
          r += " " + v + " = " + G + "; ", !f && (r += e(2573) + f0 + e(1610)), r += " " + f0 + "[" + k0 + e(1776) + G + e(544);
        } else {
          var S = S || [];
          S[e(1851)](r), r = "", x[e(981)] !== !1 ? (r += " { keyword: '" + (O || "type") + e(1777) + x[e(346)] + e(805) + x[e(1804)].toQuotedString(m) + e(581), C ? r += "" + L[e(1483)](",") : r += "" + L, r += e(1765), x[e(1558)][e(2049)] !== !1 && (r += " , message: 'should be ", C ? r += "" + L[e(1483)](",") : r += "" + L, r += "' "), x[e(1558)][e(1539)] && (r += e(1099) + h + e(2492) + x[e(2020)] + e(1665) + v + " "), r += e(969)) : r += e(1030);
          var E = r;
          r = S[e(2566)](), !x.compositeRule && P ? x[e(523)] ? r += e(2179) + E + e(1084) : r += e(652) + E + e(2356) : r += e(933) + E + e(626);
        }
        r += e(969);
      }
    }
    if (x[e(2782)][e(836)] && !i) r += " " + x[e(326)][e(912)][e(836)][e(1469)](x, "$ref") + " ", P && (r += e(1385), A ? r += "0" : r += e(456) + l, r += e(1457), j += "}");
    else {
      var w0 = x.RULES;
      if (w0) {
        for (var z, j0 = -1, C0 = w0.length - 1; j0 < C0; )
          if (z = w0[j0 += 1], S0(z)) {
            if (z[e(2197)] && (r += " if (" + x[e(1804)].checkDataType(z[e(2197)], v, x[e(1558)].strictNumbers) + ") { "), x[e(1558)][e(828)]) {
              if (z[e(2197)] == e(1985) && x[e(2782)].properties) {
                var g = x.schema.properties, J0 = Object.keys(g), D = J0;
                if (D)
                  for (var q, M = -1, J = D.length - 1; M < J; ) {
                    q = D[M += 1];
                    var Y = g[q];
                    if (Y[e(779)] !== void 0) {
                      var _ = v + x.util[e(449)](q);
                      if (x[e(1216)]) {
                        if (x[e(1558)].strictDefaults) {
                          var T = "default is ignored for: " + _;
                          if (x.opts.strictDefaults === e(1799)) x[e(1814)][e(515)](T);
                          else throw new Error(T);
                        }
                      } else r += e(1881) + _ + e(1760), x.opts[e(828)] == e(589) && (r += " || " + _ + " === null || " + _ + " === '' "), r += " ) " + _ + e(2471), x[e(1558)][e(828)] == "shared" ? r += " " + x[e(621)](Y[e(779)]) + " " : r += " " + JSON[e(555)](Y[e(779)]) + " ", r += "; ";
                    }
                  }
              } else if (z[e(2197)] == "array" && Array[e(1155)](x[e(2782)][e(1407)])) {
                var X = x[e(2782)].items;
                if (X) {
                  for (var Y, l0 = -1, s0 = X[e(2463)] - 1; l0 < s0; )
                    if (Y = X[l0 += 1], Y[e(779)] !== void 0) {
                      var _ = v + "[" + l0 + "]";
                      if (x[e(1216)]) {
                        if (x[e(1558)].strictDefaults) {
                          var T = "default is ignored for: " + _;
                          if (x[e(1558)][e(1221)] === e(1799)) x.logger.warn(T);
                          else throw new Error(T);
                        }
                      } else r += " if (" + _ + e(1760), x[e(1558)][e(828)] == "empty" && (r += e(1986) + _ + e(2794) + _ + " === '' "), r += e(2264) + _ + e(2471), x.opts[e(828)] == e(1484) ? r += " " + x[e(621)](Y.default) + " " : r += " " + JSON[e(555)](Y[e(779)]) + " ", r += "; ";
                    }
                }
              }
            }
            var c0 = z[e(701)];
            if (c0) {
              for (var a0, L0 = -1, A0 = c0[e(2463)] - 1; L0 < A0; )
                if (a0 = c0[L0 += 1], G0(a0)) {
                  var U0 = a0[e(1469)](x, a0[e(2630)], z[e(2197)]);
                  U0 && (r += " " + U0 + " ", P && (F += "}"));
                }
            }
            if (P && (r += " " + F + " ", F = ""), z[e(2197)] && (r += e(969), L && L === z[e(2197)] && !N)) {
              r += e(612);
              var h = x[e(2020)] + e(519), m = x[e(1512)] + e(693), S = S || [];
              S[e(1851)](r), r = "", x[e(981)] !== !1 ? (r += e(1270) + (O || e(2197)) + e(1777) + x.errorPath + " , schemaPath: " + x[e(1804)][e(2504)](m) + e(581), C ? r += "" + L.join(",") : r += "" + L, r += e(1765), x[e(1558)][e(2049)] !== !1 && (r += " , message: 'should be ", C ? r += "" + L[e(1483)](",") : r += "" + L, r += "' "), x.opts[e(1539)] && (r += " , schema: validate.schema" + h + " , parentSchema: validate.schema" + x[e(2020)] + e(1665) + v + " "), r += e(969)) : r += e(1030);
              var E = r;
              r = S.pop(), !x[e(1216)] && P ? x.async ? r += " throw new ValidationError([" + E + "]); " : r += e(652) + E + e(2356) : r += e(933) + E + e(626), r += e(969);
            }
            P && (r += e(1892), A ? r += "0" : r += "errs_" + l, r += e(1457), j += "}");
          }
      }
    }
    P && (r += " " + j + " "), A ? (s ? (r += " if (errors === 0) return data;           ", r += e(1747)) : (r += e(2227), r += e(2760)), r += e(1832)) : r += e(1704) + R + e(1563) + l + ";";
    function S0(Q0) {
      for (var V0 = Q0[e(701)], Y0 = 0; Y0 < V0.length; Y0++) if (G0(V0[Y0])) return !0;
    }
    function G0(Q0) {
      return x.schema[Q0.keyword] !== void 0 || Q0.implements && se(Q0);
    }
    function se(Q0) {
      const H0 = e;
      for (var V0 = Q0.implements, Y0 = 0; Y0 < V0[H0(2463)]; Y0++) if (x[H0(2782)][V0[Y0]] !== void 0) return !0;
    }
    return r;
  }), tt;
}
var at, ur;
function X2() {
  const o = a;
  if (ur) return at;
  ur = 1;
  var x = ca(), t = Be(), n = ua(), e = gs(), r = bs(), s = t[o(574)], i = ia(), c = n[o(2028)];
  at = u;
  function u(E, A, T, R) {
    const P = o;
    var F = this, j = this._opts, O = [void 0], L = {}, C = [], N = {}, z = [], U = {}, V = [];
    A = A || { schema: E, refVal: O, refs: L };
    var G = d.call(this, E, A, R), i0 = this[P(2147)][G[P(1921)]];
    if (G[P(927)]) return i0[P(2312)] = k0;
    var u0 = this[P(1232)], l0 = this[P(326)];
    try {
      var o0 = w0(E, A, T, R);
      i0[P(498)] = o0;
      var f0 = i0[P(2312)];
      return f0 && (f0[P(2782)] = o0[P(2782)], f0[P(622)] = null, f0[P(320)] = o0.refs, f0[P(2139)] = o0[P(2139)], f0[P(1969)] = o0[P(1969)], f0[P(645)] = o0.$async, j[P(1251)] && (f0[P(324)] = o0[P(324)])), o0;
    } finally {
      l[P(1850)](this, E, A, R);
    }
    function k0() {
      const _ = P;
      var X = i0.validate, s0 = X[_(2135)](this, arguments);
      return k0[_(622)] = X.errors, s0;
    }
    function w0(_, X, s0, c0) {
      const a0 = P;
      var L0 = !X || X && X[a0(2782)] == _;
      if (X.schema != A[a0(2782)]) return u[a0(1850)](F, _, X, s0, c0);
      var A0 = _[a0(645)] === !0, U0 = r({ isTop: !0, schema: _, isRoot: L0, baseId: c0, root: X, schemaPath: "", errSchemaPath: "#", errorPath: '""', MissingRefError: n[a0(570)], RULES: l0, validate: r, util: t, resolve: x, resolveRef: j0, usePattern: M, useDefault: J, useCustomRule: Y, opts: j, formats: u0, logger: F[a0(1814)], self: F });
      U0 = S(O, m) + S(C, g) + S(z, h) + S(V, v) + U0, j[a0(2276)] && (U0 = j[a0(2276)](U0, _));
      var S0;
      try {
        var G0 = new Function(a0(1156), a0(326), a0(1127), a0(1969), a0(2139), "defaults", a0(1040), a0(2753), a0(574), a0(2070), U0);
        S0 = G0(F, l0, u0, A, O, z, V, i, s, c), O[0] = S0;
      } catch (se) {
        throw F.logger.error(a0(2141), U0), se;
      }
      return S0.schema = _, S0.errors = null, S0.refs = L, S0[a0(2139)] = O, S0[a0(1969)] = L0 ? S0 : X, A0 && (S0[a0(645)] = !0), j.sourceCode === !0 && (S0[a0(324)] = { code: U0, patterns: C, defaults: z }), S0;
    }
    function j0(_, X, s0) {
      const c0 = P;
      X = x.url(_, X);
      var a0 = L[X], L0, A0;
      if (a0 !== void 0) return L0 = O[a0], A0 = c0(759) + a0 + "]", q(L0, A0);
      if (!s0 && A[c0(320)]) {
        var U0 = A.refs[X];
        if (U0 !== void 0) return L0 = A[c0(2139)][U0], A0 = C0(X, L0), q(L0, A0);
      }
      A0 = C0(X);
      var S0 = x[c0(1850)](F, w0, A, X);
      if (S0 === void 0) {
        var G0 = T && T[X];
        G0 && (S0 = x[c0(489)](G0, j.inlineRefs) ? G0 : u.call(F, G0, A, T, _));
      }
      if (S0 === void 0) J0(X);
      else return D(X, S0), q(S0, A0);
    }
    function C0(_, X) {
      const s0 = P;
      var c0 = O[s0(2463)];
      return O[c0] = X, L[_] = c0, s0(2139) + c0;
    }
    function J0(_) {
      delete L[_];
    }
    function D(_, X) {
      var s0 = L[_];
      O[s0] = X;
    }
    function q(_, X) {
      const s0 = P;
      return typeof _ == "object" || typeof _ == s0(598) ? { code: X, schema: _, inline: !0 } : { code: X, $async: _ && !!_[s0(645)] };
    }
    function M(_) {
      const X = P;
      var s0 = N[_];
      return s0 === void 0 && (s0 = N[_] = C.length, C[s0] = _), X(2663) + s0;
    }
    function J(_) {
      const X = P;
      switch (typeof _) {
        case X(598):
        case X(2601):
          return "" + _;
        case X(1516):
          return t[X(2504)](_);
        case "object":
          if (_ === null) return X(2645);
          var s0 = e(_), c0 = U[s0];
          return c0 === void 0 && (c0 = U[s0] = z.length, z[c0] = _), "default" + c0;
      }
    }
    function Y(_, X, s0, c0) {
      const a0 = P;
      if (F[a0(691)][a0(1357)] !== !1) {
        var L0 = _[a0(1620)].dependencies;
        if (L0 && !L0[a0(331)](function(Y0) {
          const $e = a0;
          return Object.prototype[$e(1995)][$e(1850)](s0, Y0);
        })) throw new Error(a0(2578) + L0.join(","));
        var A0 = _[a0(1620)][a0(1357)];
        if (A0) {
          var U0 = A0(X);
          if (!U0) {
            var S0 = "keyword schema is invalid: " + F.errorsText(A0[a0(622)]);
            if (F[a0(691)][a0(1357)] == a0(1799)) F[a0(1814)][a0(443)](S0);
            else throw new Error(S0);
          }
        }
      }
      var G0 = _[a0(1620)].compile, se = _.definition.inline, Q0 = _.definition[a0(616)], H0;
      if (G0) H0 = G0.call(F, X, s0, c0);
      else if (Q0)
        H0 = Q0[a0(1850)](F, X, s0, c0), j[a0(1357)] !== !1 && F.validateSchema(H0, !0);
      else if (se) H0 = se.call(F, c0, _[a0(2630)], X, s0);
      else if (H0 = _[a0(1620)][a0(498)], !H0) return;
      if (H0 === void 0) throw new Error(a0(269) + _[a0(2630)] + a0(1033));
      var V0 = V[a0(2463)];
      return V[V0] = H0, { code: "customRule" + V0, validate: H0 };
    }
  }
  function d(E, A, T) {
    const R = o;
    var P = f[R(1850)](this, E, A, T);
    return P >= 0 ? { index: P, compiling: !0 } : (P = this._compilations.length, this[R(2147)][P] = { schema: E, root: A, baseId: T }, { index: P, compiling: !1 });
  }
  function l(E, A, T) {
    const R = o;
    var P = f[R(1850)](this, E, A, T);
    P >= 0 && this[R(2147)].splice(P, 1);
  }
  function f(E, A, T) {
    const R = o;
    for (var P = 0; P < this._compilations[R(2463)]; P++) {
      var F = this[R(2147)][P];
      if (F[R(2782)] == E && F.root == A && F.baseId == T) return P;
    }
    return -1;
  }
  function g(E, A) {
    return o(782) + E + " = new RegExp(" + t.toQuotedString(A[E]) + ");";
  }
  function h(E) {
    const A = o;
    return "var default" + E + A(812) + E + "];";
  }
  function m(E, A) {
    const T = o;
    return A[E] === void 0 ? "" : T(2306) + E + T(1057) + E + "];";
  }
  function v(E) {
    const A = o;
    return A(2741) + E + A(1131) + E + "];";
  }
  function S(E, A) {
    const T = o;
    if (!E[T(2463)]) return "";
    for (var R = "", P = 0; P < E[T(2463)]; P++) R += A(P, E);
    return R;
  }
  return at;
}
var rt = { exports: {} }, dr;
function Y2() {
  const o = a;
  if (dr) return rt.exports;
  dr = 1;
  var x = rt[o(1535)] = function() {
    const n = o;
    this[n(1916)] = {};
  };
  return x[o(1060)].put = function(n, e) {
    const r = o;
    this[r(1916)][n] = e;
  }, x[o(1060)][o(635)] = function(n) {
    return this[o(1916)][n];
  }, x[o(1060)][o(1872)] = function(n) {
    const e = o;
    delete this[e(1916)][n];
  }, x[o(1060)][o(1017)] = function() {
    const n = o;
    this[n(1916)] = {};
  }, rt.exports;
}
var nt, lr;
function ec() {
  const o = a;
  if (lr) return nt;
  lr = 1;
  var x = Be(), t = /^(\d\d\d\d)-(\d\d)-(\d\d)$/, n = [0, 31, 28, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31], e = /^(\d\d):(\d\d):(\d\d)(\.\d+)?(z|[+-]\d\d(?::?\d\d)?)?$/i, r = /^(?=.{1,253}\.?$)[a-z0-9](?:[a-z0-9-]{0,61}[a-z0-9])?(?:\.[a-z0-9](?:[-0-9a-z]{0,61}[0-9a-z])?)*\.?$/i, s = /^(?:[a-z][a-z0-9+\-.]*:)(?:\/?\/(?:(?:[a-z0-9\-._~!$&'()*+,;=:]|%[0-9a-f]{2})*@)?(?:\[(?:(?:(?:(?:[0-9a-f]{1,4}:){6}|::(?:[0-9a-f]{1,4}:){5}|(?:[0-9a-f]{1,4})?::(?:[0-9a-f]{1,4}:){4}|(?:(?:[0-9a-f]{1,4}:){0,1}[0-9a-f]{1,4})?::(?:[0-9a-f]{1,4}:){3}|(?:(?:[0-9a-f]{1,4}:){0,2}[0-9a-f]{1,4})?::(?:[0-9a-f]{1,4}:){2}|(?:(?:[0-9a-f]{1,4}:){0,3}[0-9a-f]{1,4})?::[0-9a-f]{1,4}:|(?:(?:[0-9a-f]{1,4}:){0,4}[0-9a-f]{1,4})?::)(?:[0-9a-f]{1,4}:[0-9a-f]{1,4}|(?:(?:25[0-5]|2[0-4]\d|[01]?\d\d?)\.){3}(?:25[0-5]|2[0-4]\d|[01]?\d\d?))|(?:(?:[0-9a-f]{1,4}:){0,5}[0-9a-f]{1,4})?::[0-9a-f]{1,4}|(?:(?:[0-9a-f]{1,4}:){0,6}[0-9a-f]{1,4})?::)|[Vv][0-9a-f]+\.[a-z0-9\-._~!$&'()*+,;=:]+)\]|(?:(?:25[0-5]|2[0-4]\d|[01]?\d\d?)\.){3}(?:25[0-5]|2[0-4]\d|[01]?\d\d?)|(?:[a-z0-9\-._~!$&'()*+,;=]|%[0-9a-f]{2})*)(?::\d*)?(?:\/(?:[a-z0-9\-._~!$&'()*+,;=:@]|%[0-9a-f]{2})*)*|\/(?:(?:[a-z0-9\-._~!$&'()*+,;=:@]|%[0-9a-f]{2})+(?:\/(?:[a-z0-9\-._~!$&'()*+,;=:@]|%[0-9a-f]{2})*)*)?|(?:[a-z0-9\-._~!$&'()*+,;=:@]|%[0-9a-f]{2})+(?:\/(?:[a-z0-9\-._~!$&'()*+,;=:@]|%[0-9a-f]{2})*)*)(?:\?(?:[a-z0-9\-._~!$&'()*+,;=:@/?]|%[0-9a-f]{2})*)?(?:#(?:[a-z0-9\-._~!$&'()*+,;=:@/?]|%[0-9a-f]{2})*)?$/i, i = /^(?:[a-z][a-z0-9+\-.]*:)?(?:\/?\/(?:(?:[a-z0-9\-._~!$&'()*+,;=:]|%[0-9a-f]{2})*@)?(?:\[(?:(?:(?:(?:[0-9a-f]{1,4}:){6}|::(?:[0-9a-f]{1,4}:){5}|(?:[0-9a-f]{1,4})?::(?:[0-9a-f]{1,4}:){4}|(?:(?:[0-9a-f]{1,4}:){0,1}[0-9a-f]{1,4})?::(?:[0-9a-f]{1,4}:){3}|(?:(?:[0-9a-f]{1,4}:){0,2}[0-9a-f]{1,4})?::(?:[0-9a-f]{1,4}:){2}|(?:(?:[0-9a-f]{1,4}:){0,3}[0-9a-f]{1,4})?::[0-9a-f]{1,4}:|(?:(?:[0-9a-f]{1,4}:){0,4}[0-9a-f]{1,4})?::)(?:[0-9a-f]{1,4}:[0-9a-f]{1,4}|(?:(?:25[0-5]|2[0-4]\d|[01]?\d\d?)\.){3}(?:25[0-5]|2[0-4]\d|[01]?\d\d?))|(?:(?:[0-9a-f]{1,4}:){0,5}[0-9a-f]{1,4})?::[0-9a-f]{1,4}|(?:(?:[0-9a-f]{1,4}:){0,6}[0-9a-f]{1,4})?::)|[Vv][0-9a-f]+\.[a-z0-9\-._~!$&'()*+,;=:]+)\]|(?:(?:25[0-5]|2[0-4]\d|[01]?\d\d?)\.){3}(?:25[0-5]|2[0-4]\d|[01]?\d\d?)|(?:[a-z0-9\-._~!$&'"()*+,;=]|%[0-9a-f]{2})*)(?::\d*)?(?:\/(?:[a-z0-9\-._~!$&'"()*+,;=:@]|%[0-9a-f]{2})*)*|\/(?:(?:[a-z0-9\-._~!$&'"()*+,;=:@]|%[0-9a-f]{2})+(?:\/(?:[a-z0-9\-._~!$&'"()*+,;=:@]|%[0-9a-f]{2})*)*)?|(?:[a-z0-9\-._~!$&'"()*+,;=:@]|%[0-9a-f]{2})+(?:\/(?:[a-z0-9\-._~!$&'"()*+,;=:@]|%[0-9a-f]{2})*)*)?(?:\?(?:[a-z0-9\-._~!$&'"()*+,;=:@/?]|%[0-9a-f]{2})*)?(?:#(?:[a-z0-9\-._~!$&'"()*+,;=:@/?]|%[0-9a-f]{2})*)?$/i, c = /^(?:(?:[^\x00-\x20"'<>%\\^`{|}]|%[0-9a-f]{2})|\{[+#./;?&=,!@|]?(?:[a-z0-9_]|%[0-9a-f]{2})+(?::[1-9][0-9]{0,3}|\*)?(?:,(?:[a-z0-9_]|%[0-9a-f]{2})+(?::[1-9][0-9]{0,3}|\*)?)*\})*$/i, u = /^(?:(?:http[s\u017F]?|ftp):\/\/)(?:(?:[\0-\x08\x0E-\x1F!-\x9F\xA1-\u167F\u1681-\u1FFF\u200B-\u2027\u202A-\u202E\u2030-\u205E\u2060-\u2FFF\u3001-\uD7FF\uE000-\uFEFE\uFF00-\uFFFF]|[\uD800-\uDBFF][\uDC00-\uDFFF]|[\uD800-\uDBFF](?![\uDC00-\uDFFF])|(?:[^\uD800-\uDBFF]|^)[\uDC00-\uDFFF])+(?::(?:[\0-\x08\x0E-\x1F!-\x9F\xA1-\u167F\u1681-\u1FFF\u200B-\u2027\u202A-\u202E\u2030-\u205E\u2060-\u2FFF\u3001-\uD7FF\uE000-\uFEFE\uFF00-\uFFFF]|[\uD800-\uDBFF][\uDC00-\uDFFF]|[\uD800-\uDBFF](?![\uDC00-\uDFFF])|(?:[^\uD800-\uDBFF]|^)[\uDC00-\uDFFF])*)?@)?(?:(?!10(?:\.[0-9]{1,3}){3})(?!127(?:\.[0-9]{1,3}){3})(?!169\.254(?:\.[0-9]{1,3}){2})(?!192\.168(?:\.[0-9]{1,3}){2})(?!172\.(?:1[6-9]|2[0-9]|3[01])(?:\.[0-9]{1,3}){2})(?:[1-9][0-9]?|1[0-9][0-9]|2[01][0-9]|22[0-3])(?:\.(?:1?[0-9]{1,2}|2[0-4][0-9]|25[0-5])){2}(?:\.(?:[1-9][0-9]?|1[0-9][0-9]|2[0-4][0-9]|25[0-4]))|(?:(?:(?:[0-9a-z\xA1-\uD7FF\uE000-\uFFFF]|[\uD800-\uDBFF](?![\uDC00-\uDFFF])|(?:[^\uD800-\uDBFF]|^)[\uDC00-\uDFFF])+-)*(?:[0-9a-z\xA1-\uD7FF\uE000-\uFFFF]|[\uD800-\uDBFF](?![\uDC00-\uDFFF])|(?:[^\uD800-\uDBFF]|^)[\uDC00-\uDFFF])+)(?:\.(?:(?:[0-9a-z\xA1-\uD7FF\uE000-\uFFFF]|[\uD800-\uDBFF](?![\uDC00-\uDFFF])|(?:[^\uD800-\uDBFF]|^)[\uDC00-\uDFFF])+-)*(?:[0-9a-z\xA1-\uD7FF\uE000-\uFFFF]|[\uD800-\uDBFF](?![\uDC00-\uDFFF])|(?:[^\uD800-\uDBFF]|^)[\uDC00-\uDFFF])+)*(?:\.(?:(?:[a-z\xA1-\uD7FF\uE000-\uFFFF]|[\uD800-\uDBFF](?![\uDC00-\uDFFF])|(?:[^\uD800-\uDBFF]|^)[\uDC00-\uDFFF]){2,})))(?::[0-9]{2,5})?(?:\/(?:[\0-\x08\x0E-\x1F!-\x9F\xA1-\u167F\u1681-\u1FFF\u200B-\u2027\u202A-\u202E\u2030-\u205E\u2060-\u2FFF\u3001-\uD7FF\uE000-\uFEFE\uFF00-\uFFFF]|[\uD800-\uDBFF][\uDC00-\uDFFF]|[\uD800-\uDBFF](?![\uDC00-\uDFFF])|(?:[^\uD800-\uDBFF]|^)[\uDC00-\uDFFF])*)?$/i, d = /^(?:urn:uuid:)?[0-9a-f]{8}-(?:[0-9a-f]{4}-){3}[0-9a-f]{12}$/i, l = /^(?:\/(?:[^~/]|~0|~1)*)*$/, f = /^#(?:\/(?:[a-z0-9_\-.!$&'()*+,;:=@]|%[0-9a-f]{2}|~0|~1)*)*$/i, g = /^(?:0|[1-9][0-9]*)(?:#|(?:\/(?:[^~/]|~0|~1)*)*)$/;
  nt = h;
  function h(j) {
    const O = B;
    return j = j == O(2254) ? "full" : O(2250), x[O(1452)](h[j]);
  }
  h[o(2250)] = { date: /^\d\d\d\d-[0-1]\d-[0-3]\d$/, time: /^(?:[0-2]\d:[0-5]\d:[0-5]\d|23:59:60)(?:\.\d+)?(?:z|[+-]\d\d(?::?\d\d)?)?$/i, "date-time": /^\d\d\d\d-[0-1]\d-[0-3]\d[t\s](?:[0-2]\d:[0-5]\d:[0-5]\d|23:59:60)(?:\.\d+)?(?:z|[+-]\d\d(?::?\d\d)?)$/i, uri: /^(?:[a-z][a-z0-9+\-.]*:)(?:\/?\/)?[^\s]*$/i, "uri-reference": /^(?:(?:[a-z][a-z0-9+\-.]*:)?\/?\/)?(?:[^\\\s#][^\s#]*)?(?:#[^\\\s]*)?$/i, "uri-template": c, url: u, email: /^[a-z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-z0-9](?:[a-z0-9-]{0,61}[a-z0-9])?(?:\.[a-z0-9](?:[a-z0-9-]{0,61}[a-z0-9])?)*$/i, hostname: r, ipv4: /^(?:(?:25[0-5]|2[0-4]\d|[01]?\d\d?)\.){3}(?:25[0-5]|2[0-4]\d|[01]?\d\d?)$/, ipv6: /^\s*(?:(?:(?:[0-9a-f]{1,4}:){7}(?:[0-9a-f]{1,4}|:))|(?:(?:[0-9a-f]{1,4}:){6}(?::[0-9a-f]{1,4}|(?:(?:25[0-5]|2[0-4]\d|1\d\d|[1-9]?\d)(?:\.(?:25[0-5]|2[0-4]\d|1\d\d|[1-9]?\d)){3})|:))|(?:(?:[0-9a-f]{1,4}:){5}(?:(?:(?::[0-9a-f]{1,4}){1,2})|:(?:(?:25[0-5]|2[0-4]\d|1\d\d|[1-9]?\d)(?:\.(?:25[0-5]|2[0-4]\d|1\d\d|[1-9]?\d)){3})|:))|(?:(?:[0-9a-f]{1,4}:){4}(?:(?:(?::[0-9a-f]{1,4}){1,3})|(?:(?::[0-9a-f]{1,4})?:(?:(?:25[0-5]|2[0-4]\d|1\d\d|[1-9]?\d)(?:\.(?:25[0-5]|2[0-4]\d|1\d\d|[1-9]?\d)){3}))|:))|(?:(?:[0-9a-f]{1,4}:){3}(?:(?:(?::[0-9a-f]{1,4}){1,4})|(?:(?::[0-9a-f]{1,4}){0,2}:(?:(?:25[0-5]|2[0-4]\d|1\d\d|[1-9]?\d)(?:\.(?:25[0-5]|2[0-4]\d|1\d\d|[1-9]?\d)){3}))|:))|(?:(?:[0-9a-f]{1,4}:){2}(?:(?:(?::[0-9a-f]{1,4}){1,5})|(?:(?::[0-9a-f]{1,4}){0,3}:(?:(?:25[0-5]|2[0-4]\d|1\d\d|[1-9]?\d)(?:\.(?:25[0-5]|2[0-4]\d|1\d\d|[1-9]?\d)){3}))|:))|(?:(?:[0-9a-f]{1,4}:){1}(?:(?:(?::[0-9a-f]{1,4}){1,6})|(?:(?::[0-9a-f]{1,4}){0,4}:(?:(?:25[0-5]|2[0-4]\d|1\d\d|[1-9]?\d)(?:\.(?:25[0-5]|2[0-4]\d|1\d\d|[1-9]?\d)){3}))|:))|(?::(?:(?:(?::[0-9a-f]{1,4}){1,7})|(?:(?::[0-9a-f]{1,4}){0,5}:(?:(?:25[0-5]|2[0-4]\d|1\d\d|[1-9]?\d)(?:\.(?:25[0-5]|2[0-4]\d|1\d\d|[1-9]?\d)){3}))|:)))(?:%.+)?\s*$/i, regex: F, uuid: d, "json-pointer": l, "json-pointer-uri-fragment": f, "relative-json-pointer": g }, h[o(2254)] = { date: v, time: S, "date-time": A, uri: R, "uri-reference": i, "uri-template": c, url: u, email: /^[a-z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[a-z0-9!#$%&'*+/=?^_`{|}~-]+)*@(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?$/i, hostname: r, ipv4: /^(?:(?:25[0-5]|2[0-4]\d|[01]?\d\d?)\.){3}(?:25[0-5]|2[0-4]\d|[01]?\d\d?)$/, ipv6: /^\s*(?:(?:(?:[0-9a-f]{1,4}:){7}(?:[0-9a-f]{1,4}|:))|(?:(?:[0-9a-f]{1,4}:){6}(?::[0-9a-f]{1,4}|(?:(?:25[0-5]|2[0-4]\d|1\d\d|[1-9]?\d)(?:\.(?:25[0-5]|2[0-4]\d|1\d\d|[1-9]?\d)){3})|:))|(?:(?:[0-9a-f]{1,4}:){5}(?:(?:(?::[0-9a-f]{1,4}){1,2})|:(?:(?:25[0-5]|2[0-4]\d|1\d\d|[1-9]?\d)(?:\.(?:25[0-5]|2[0-4]\d|1\d\d|[1-9]?\d)){3})|:))|(?:(?:[0-9a-f]{1,4}:){4}(?:(?:(?::[0-9a-f]{1,4}){1,3})|(?:(?::[0-9a-f]{1,4})?:(?:(?:25[0-5]|2[0-4]\d|1\d\d|[1-9]?\d)(?:\.(?:25[0-5]|2[0-4]\d|1\d\d|[1-9]?\d)){3}))|:))|(?:(?:[0-9a-f]{1,4}:){3}(?:(?:(?::[0-9a-f]{1,4}){1,4})|(?:(?::[0-9a-f]{1,4}){0,2}:(?:(?:25[0-5]|2[0-4]\d|1\d\d|[1-9]?\d)(?:\.(?:25[0-5]|2[0-4]\d|1\d\d|[1-9]?\d)){3}))|:))|(?:(?:[0-9a-f]{1,4}:){2}(?:(?:(?::[0-9a-f]{1,4}){1,5})|(?:(?::[0-9a-f]{1,4}){0,3}:(?:(?:25[0-5]|2[0-4]\d|1\d\d|[1-9]?\d)(?:\.(?:25[0-5]|2[0-4]\d|1\d\d|[1-9]?\d)){3}))|:))|(?:(?:[0-9a-f]{1,4}:){1}(?:(?:(?::[0-9a-f]{1,4}){1,6})|(?:(?::[0-9a-f]{1,4}){0,4}:(?:(?:25[0-5]|2[0-4]\d|1\d\d|[1-9]?\d)(?:\.(?:25[0-5]|2[0-4]\d|1\d\d|[1-9]?\d)){3}))|:))|(?::(?:(?:(?::[0-9a-f]{1,4}){1,7})|(?:(?::[0-9a-f]{1,4}){0,5}:(?:(?:25[0-5]|2[0-4]\d|1\d\d|[1-9]?\d)(?:\.(?:25[0-5]|2[0-4]\d|1\d\d|[1-9]?\d)){3}))|:)))(?:%.+)?\s*$/i, regex: F, uuid: d, "json-pointer": l, "json-pointer-uri-fragment": f, "relative-json-pointer": g };
  function m(j) {
    return j % 4 === 0 && (j % 100 !== 0 || j % 400 === 0);
  }
  function v(j) {
    var O = j.match(t);
    if (!O) return !1;
    var L = +O[1], C = +O[2], N = +O[3];
    return C >= 1 && C <= 12 && N >= 1 && N <= (C == 2 && m(L) ? 29 : n[C]);
  }
  function S(j, O) {
    var C = j[o(2457)](e);
    if (!C) return !1;
    var N = C[1], z = C[2], U = C[3], V = C[5];
    return (N <= 23 && z <= 59 && U <= 59 || N == 23 && z == 59 && U == 60) && (!O || V);
  }
  var E = /t|\s/i;
  function A(j) {
    const O = o;
    var L = j[O(2352)](E);
    return L[O(2463)] == 2 && v(L[0]) && S(L[1], !0);
  }
  var T = /\/|:/;
  function R(j) {
    const O = o;
    return T[O(2734)](j) && s[O(2734)](j);
  }
  var P = /[^\\]\\Z/;
  function F(j) {
    if (P[o(2734)](j)) return !1;
    try {
      return new RegExp(j), !0;
    } catch {
      return !1;
    }
  }
  return nt;
}
var st, fr;
function xc() {
  return fr || (fr = 1, st = function(x, t, n) {
    const e = B;
    var r = " ", s = x.level, i = x[e(1697)], c = x[e(2782)][t], u = x[e(1512)] + "/" + t, d = !x[e(1558)][e(1718)], l = e(2743) + (i || ""), f = e(707) + s, g, h;
    if (c == "#" || c == "#/") x[e(238)] ? (g = x[e(523)], h = "validate") : (g = x[e(1969)][e(2782)][e(645)] === !0, h = e(325));
    else {
      var m = x[e(908)](x[e(2653)], c, x[e(238)]);
      if (m === void 0) {
        var v = x[e(2271)][e(2354)](x.baseId, c);
        if (x[e(1558)][e(1633)] == e(1185)) {
          x.logger[e(443)](v);
          var S = S || [];
          S[e(1851)](r), r = "", x[e(981)] !== !1 ? (r += e(1270) + "$ref' , dataPath: (dataPath || '') + " + x[e(346)] + e(805) + x.util.toQuotedString(u) + e(1933) + x[e(1804)][e(1143)](c) + e(1765), x[e(1558)][e(2049)] !== !1 && (r += " , message: 'can\\'t resolve reference " + x.util.escapeQuotes(c) + "' "), x[e(1558)].verbose && (r += e(2083) + x[e(1804)][e(2504)](c) + " , parentSchema: validate.schema" + x[e(2020)] + e(1665) + l + " "), r += " } ") : r += " {} ";
          var E = r;
          r = S[e(2566)](), !x[e(1216)] && d ? x.async ? r += e(2179) + E + "]); " : r += e(652) + E + "]; return false; " : r += e(933) + E + ";  if (vErrors === null) vErrors = [err]; else vErrors.push(err); errors++; ", d && (r += e(1203));
        } else if (x.opts[e(1633)] == e(530)) x[e(1814)].warn(v), d && (r += " if (true) { ");
        else throw new x[e(2271)](x.baseId, c, v);
      } else if (m.inline) {
        var A = x.util[e(1452)](x);
        A[e(889)]++;
        var T = e(707) + A.level;
        A[e(2782)] = m[e(2782)], A.schemaPath = "", A.errSchemaPath = c;
        var R = x[e(498)](A).replace(/validate\.schema/g, m.code);
        r += " " + R + " ", d && (r += e(1881) + T + e(1457));
      } else g = m[e(645)] === !0 || x[e(523)] && m[e(645)] !== !1, h = m[e(1469)];
    }
    if (h) {
      var S = S || [];
      S.push(r), r = "", x.opts[e(1988)] ? r += " " + h + e(648) : r += " " + h + "( ", r += " " + l + e(2502), x[e(346)] != '""' && (r += e(1460) + x[e(346)]);
      var P = i ? e(2743) + (i - 1 || "") : "parentData", F = i ? x[e(684)][i] : e(1137);
      r += e(2483) + P + " , " + F + e(995);
      var j = r;
      if (r = S[e(2566)](), g) {
        if (!x.async) throw new Error(e(541));
        d && (r += e(1704) + f + "; "), r += e(710) + j + "; ", d && (r += " " + f + e(1847)), r += e(366), d && (r += " " + f + e(2164)), r += " } ", d && (r += " if (" + f + e(1457));
      } else r += e(334) + j + e(2120) + h + e(1098) + h + e(2517), d && (r += e(612));
    }
    return r;
  }), st;
}
var ot, hr;
function tc() {
  return hr || (hr = 1, ot = function(x, t, n) {
    const e = B;
    var r = " ", s = x[e(2782)][t], i = x[e(2020)] + x[e(1804)][e(449)](t), c = x[e(1512)] + "/" + t, u = !x[e(1558)][e(1718)], d = x[e(1804)][e(1452)](x), l = "";
    d[e(889)]++;
    var f = e(707) + d[e(889)], g = d[e(2653)], h = !0, m = s;
    if (m)
      for (var v, S = -1, E = m.length - 1; S < E; )
        v = m[S += 1], (x[e(1558)][e(1622)] ? typeof v == e(1985) && Object[e(1448)](v)[e(2463)] > 0 || v === !1 : x[e(1804)].schemaHasRules(v, x[e(326)].all)) && (h = !1, d[e(2782)] = v, d[e(2020)] = i + "[" + S + "]", d[e(1512)] = c + "/" + S, r += "  " + x[e(498)](d) + " ", d.baseId = g, u && (r += e(1881) + f + e(1457), l += "}"));
    return u && (h ? r += e(1983) : r += " " + l[e(600)](0, -1) + " "), r;
  }), ot;
}
var it, pr;
function ac() {
  return pr || (pr = 1, it = function(x, t, n) {
    const e = B;
    var r = " ", s = x[e(889)], i = x.dataLevel, c = x[e(2782)][t], u = x[e(2020)] + x[e(1804)][e(449)](t), d = x[e(1512)] + "/" + t, l = !x[e(1558)][e(1718)], f = "data" + (i || ""), g = e(707) + s, h = e(1712) + s, m = x[e(1804)][e(1452)](x), v = "";
    m.level++;
    var S = "valid" + m[e(889)], E = c.every(function(O) {
      const L = e;
      return x.opts.strictKeywords ? typeof O == L(1985) && Object[L(1448)](O)[L(2463)] > 0 || O === !1 : x.util[L(460)](O, x[L(326)][L(912)]);
    });
    if (E) {
      var A = m.baseId;
      r += " var " + h + e(1395) + g + e(2242);
      var T = x.compositeRule;
      x[e(1216)] = m[e(1216)] = !0;
      var R = c;
      if (R)
        for (var P, F = -1, j = R[e(2463)] - 1; F < j; )
          P = R[F += 1], m[e(2782)] = P, m[e(2020)] = u + "[" + F + "]", m[e(1512)] = d + "/" + F, r += "  " + x[e(498)](m) + " ", m[e(2653)] = A, r += " " + g + e(2471) + g + e(1986) + S + e(1705) + g + e(1457), v += "}";
      x.compositeRule = m[e(1216)] = T, r += " " + v + e(334) + g + ") {   var err =   ", x[e(981)] !== !1 ? (r += e(1270) + e(1999) + "' , dataPath: (dataPath || '') + " + x.errorPath + e(805) + x[e(1804)][e(2504)](d) + e(1822), x[e(1558)].messages !== !1 && (r += e(2730)), x[e(1558)][e(1539)] && (r += e(1099) + u + e(2492) + x.schemaPath + e(1665) + f + " "), r += e(969)) : r += " {} ", r += e(626), !x[e(1216)] && l && (x[e(523)] ? r += e(1914) : r += e(1686)), r += " } else {  errors = " + h + e(1827) + h + e(1282) + h + e(2422), x[e(1558)].allErrors && (r += " } ");
    } else l && (r += e(1983));
    return r;
  }), it;
}
var ct, mr;
function rc() {
  return mr || (mr = 1, ct = function(x, t, n) {
    const e = B;
    var r = " ", s = x[e(2782)][t], i = x[e(1512)] + "/" + t;
    x.opts.allErrors;
    var c = x[e(1804)][e(2504)](s);
    return x[e(1558)][e(624)] === !0 ? r += " console.log(" + c + ");" : typeof x[e(1558)][e(624)] == e(2176) && (r += " self._opts.$comment(" + c + ", " + x[e(1804)].toQuotedString(i) + e(2711)), r;
  }), ct;
}
var ut, gr;
function nc() {
  return gr || (gr = 1, ut = function(x, t, n) {
    const e = B;
    var r = " ", s = x[e(889)], i = x[e(1697)], c = x.schema[t], u = x[e(2020)] + x.util[e(449)](t), d = x[e(1512)] + "/" + t, l = !x[e(1558)].allErrors, f = e(2743) + (i || ""), g = e(707) + s, h = x[e(1558)][e(1091)] && c && c[e(1091)];
    h && (r += " var schema" + s + " = " + x.util[e(1435)](c.$data, i, x[e(684)]) + "; "), !h && (r += " var schema" + s + e(2257) + u + ";"), r += e(923) + g + e(2706) + f + e(928) + s + e(2331) + g + e(1874);
    var m = m || [];
    m[e(1851)](r), r = "", x[e(981)] !== !1 ? (r += e(1270) + e(495) + "' , dataPath: (dataPath || '') + " + x[e(346)] + e(805) + x[e(1804)].toQuotedString(d) + e(2793) + s + e(969), x[e(1558)][e(2049)] !== !1 && (r += e(875)), x[e(1558)][e(1539)] && (r += " , schema: validate.schema" + u + e(2492) + x[e(2020)] + e(1665) + f + " "), r += e(969)) : r += e(1030);
    var v = r;
    return r = m.pop(), !x[e(1216)] && l ? x[e(523)] ? r += e(2179) + v + e(1084) : r += e(652) + v + e(2356) : r += e(933) + v + ";  if (vErrors === null) vErrors = [err]; else vErrors.push(err); errors++; ", r += " }", l && (r += e(612)), r;
  }), ut;
}
var dt, br;
function sc() {
  return br || (br = 1, dt = function(x, t, n) {
    const e = B;
    var r = " ", s = x.level, i = x[e(1697)], c = x.schema[t], u = x.schemaPath + x[e(1804)].getProperty(t), d = x.errSchemaPath + "/" + t, l = !x[e(1558)].allErrors, f = e(2743) + (i || ""), g = e(707) + s, h = e(1712) + s, m = x[e(1804)][e(1452)](x), v = "";
    m[e(889)]++;
    var S = e(707) + m[e(889)], E = "i" + s, A = m[e(1697)] = x[e(1697)] + 1, T = e(2743) + A, R = x[e(2653)], P = x[e(1558)][e(1622)] ? typeof c == e(1985) && Object[e(1448)](c)[e(2463)] > 0 || c === !1 : x[e(1804)][e(460)](c, x[e(326)].all);
    if (r += e(923) + h + e(2006) + g + ";", P) {
      var F = x[e(1216)];
      x[e(1216)] = m.compositeRule = !0, m[e(2782)] = c, m[e(2020)] = u, m.errSchemaPath = d, r += e(1704) + S + e(2507) + E + e(438) + E + e(2240) + f + e(1506) + E + e(2121), m[e(346)] = x[e(1804)].getPathExpr(x[e(346)], E, x.opts.jsonPointers, !0);
      var j = f + "[" + E + "]";
      m[e(684)][A] = E;
      var O = x[e(498)](m);
      m[e(2653)] = R, x[e(1804)][e(2245)](O, T) < 2 ? r += " " + x.util.varReplace(O, T, j) + " " : r += e(1704) + T + e(2471) + j + "; " + O + " ", r += e(1881) + S + e(2590), x[e(1216)] = m[e(1216)] = F, r += " " + v + " if (!" + S + e(2440);
    } else r += e(1881) + f + e(2209);
    var L = L || [];
    L.push(r), r = "", x[e(981)] !== !1 ? (r += e(1270) + e(613) + e(1777) + x.errorPath + e(805) + x[e(1804)][e(2504)](d) + " , params: {} ", x[e(1558)][e(2049)] !== !1 && (r += e(323)), x.opts[e(1539)] && (r += " , schema: validate.schema" + u + " , parentSchema: validate.schema" + x[e(2020)] + e(1665) + f + " "), r += " } ") : r += " {} ";
    var C = r;
    return r = L[e(2566)](), !x.compositeRule && l ? x[e(523)] ? r += e(2179) + C + e(1084) : r += e(652) + C + e(2356) : r += " var err = " + C + e(626), r += e(2210), P && (r += e(639) + h + e(1827) + h + e(1282) + h + e(2422)), x.opts[e(1718)] && (r += e(969)), r;
  }), dt;
}
var lt, yr;
function oc() {
  return yr || (yr = 1, lt = function(x, t, n) {
    const e = B;
    var r = " ", s = x[e(889)], i = x[e(1697)], c = x[e(2782)][t], u = x[e(2020)] + x[e(1804)].getProperty(t), d = x[e(1512)] + "/" + t, l = !x[e(1558)][e(1718)], f = e(2743) + (i || ""), g = "errs__" + s, h = x[e(1804)].copy(x), m = "";
    h[e(889)]++;
    var v = e(707) + h.level, S = {}, E = {}, A = x.opts[e(332)];
    for (F in c)
      if (F != "__proto__") {
        var T = c[F], R = Array[e(1155)](T) ? E : S;
        R[F] = T;
      }
    r += "var " + g + " = errors;";
    var P = x[e(346)];
    r += e(2207) + s + ";";
    for (var F in E)
      if (R = E[F], R[e(2463)]) {
        if (r += e(2781) + f + x[e(1804)][e(449)](F) + e(1819), A && (r += e(2009) + f + ", '" + x[e(1804)][e(1143)](F) + e(496)), l) {
          r += e(2063);
          var j = R;
          if (j)
            for (var O, L = -1, C = j[e(2463)] - 1; L < C; ) {
              O = j[L += 1], L && (r += e(1986));
              var N = x[e(1804)].getProperty(O), z = f + N;
              r += e(2045) + z + e(1760), A && (r += e(2737) + f + e(2421) + x.util[e(1143)](O) + "') "), r += e(608) + s + e(2471) + x.util.toQuotedString(x[e(1558)][e(1151)] ? O : N) + e(1294);
            }
          r += ")) {  ";
          var U = "missing" + s, V = e(1446) + U + " + '";
          x[e(1558)][e(756)] && (x[e(346)] = x[e(1558)][e(1151)] ? x.util[e(267)](P, U, !0) : P + e(1460) + U);
          var G = G || [];
          G[e(1851)](r), r = "", x.createErrors !== !1 ? (r += " { keyword: 'dependencies" + e(1777) + x.errorPath + e(805) + x[e(1804)][e(2504)](d) + e(407) + x[e(1804)][e(1143)](F) + e(2039) + V + "', depsCount: " + R[e(2463)] + e(1825) + x[e(1804)][e(1143)](R.length == 1 ? R[0] : R[e(1483)](", ")) + "' } ", x[e(1558)][e(2049)] !== !1 && (r += e(2473), R[e(2463)] == 1 ? r += e(2542) + x[e(1804)][e(1143)](R[0]) : r += e(2055) + x.util.escapeQuotes(R[e(1483)](", ")), r += e(380) + x[e(1804)][e(1143)](F) + e(1439)), x[e(1558)].verbose && (r += e(1099) + u + e(2492) + x[e(2020)] + " , data: " + f + " "), r += e(969)) : r += e(1030);
          var i0 = r;
          r = G[e(2566)](), !x.compositeRule && l ? x[e(523)] ? r += e(2179) + i0 + "]); " : r += e(652) + i0 + e(2356) : r += e(933) + i0 + e(626);
        } else {
          r += " ) { ";
          var u0 = R;
          if (u0)
            for (var O, l0 = -1, o0 = u0[e(2463)] - 1; l0 < o0; ) {
              O = u0[l0 += 1];
              var N = x[e(1804)][e(449)](O), V = x[e(1804)][e(1143)](O), z = f + N;
              x.opts._errorDataPathProperty && (x.errorPath = x[e(1804)][e(1670)](P, O, x[e(1558)].jsonPointers)), r += e(2781) + z + e(1760), A && (r += e(2737) + f + e(2421) + x[e(1804)][e(1143)](O) + e(496)), r += e(2436), x.createErrors !== !1 ? (r += e(1270) + "dependencies" + e(1777) + x[e(346)] + e(805) + x[e(1804)][e(2504)](d) + e(407) + x.util[e(1143)](F) + e(2039) + V + e(952) + R[e(2463)] + e(1825) + x[e(1804)][e(1143)](R[e(2463)] == 1 ? R[0] : R[e(1483)](", ")) + e(1765), x[e(1558)][e(2049)] !== !1 && (r += e(2473), R[e(2463)] == 1 ? r += e(2542) + x[e(1804)][e(1143)](R[0]) : r += "properties " + x[e(1804)][e(1143)](R[e(1483)](", ")), r += e(380) + x.util[e(1143)](F) + " is present' "), x[e(1558)].verbose && (r += e(1099) + u + e(2492) + x[e(2020)] + e(1665) + f + " "), r += " } ") : r += e(1030), r += ";  if (vErrors === null) vErrors = [err]; else vErrors.push(err); errors++; } ";
            }
        }
        r += e(1976), l && (m += "}", r += e(612));
      }
    x[e(346)] = P;
    var f0 = h[e(2653)];
    for (var F in S) {
      var T = S[F];
      (x[e(1558)].strictKeywords ? typeof T == e(1985) && Object[e(1448)](T)[e(2463)] > 0 || T === !1 : x[e(1804)][e(460)](T, x[e(326)][e(912)])) && (r += " " + v + e(910) + f + x.util[e(449)](F) + " !== undefined ", A && (r += e(2009) + f + e(2421) + x[e(1804)].escapeQuotes(F) + "') "), r += e(1457), h[e(2782)] = T, h.schemaPath = u + x[e(1804)].getProperty(F), h.errSchemaPath = d + "/" + x[e(1804)].escapeFragment(F), r += "  " + x[e(498)](h) + " ", h[e(2653)] = f0, r += e(1165), l && (r += " if (" + v + e(1457), m += "}"));
    }
    return l && (r += e(363) + m + e(1881) + g + e(1104)), r;
  }), lt;
}
var ft, vr;
function ic() {
  return vr || (vr = 1, ft = function(x, t, n) {
    const e = B;
    var r = " ", s = x[e(889)], i = x.dataLevel, c = x.schema[t], u = x[e(2020)] + x[e(1804)][e(449)](t), d = x[e(1512)] + "/" + t, l = !x.opts[e(1718)], f = "data" + (i || ""), g = e(707) + s, h = x.opts.$data && c && c.$data;
    h && (r += e(1135) + s + e(2471) + x[e(1804)][e(1435)](c.$data, i, x[e(684)]) + "; ");
    var m = "i" + s, v = "schema" + s;
    !h && (r += e(1704) + v + " = validate.schema" + u + ";"), r += e(923) + g + ";", h && (r += e(1735) + s + " === undefined) " + g + e(2738) + s + e(1490) + g + e(649)), r += "" + g + e(437) + m + e(2025) + m + "<" + v + e(1506) + m + "++) if (equal(" + f + ", " + v + "[" + m + e(1492) + g + " = true; break; }", h && (r += e(845)), r += e(334) + g + ") {   ";
    var S = S || [];
    S[e(1851)](r), r = "", x[e(981)] !== !1 ? (r += e(1270) + e(2579) + e(1777) + x[e(346)] + e(805) + x.util[e(2504)](d) + " , params: { allowedValues: schema" + s + " } ", x.opts.messages !== !1 && (r += e(1249)), x[e(1558)][e(1539)] && (r += e(1099) + u + e(2492) + x.schemaPath + e(1665) + f + " "), r += " } ") : r += e(1030);
    var E = r;
    return r = S[e(2566)](), !x[e(1216)] && l ? x.async ? r += e(2179) + E + e(1084) : r += e(652) + E + "]; return false; " : r += e(933) + E + ";  if (vErrors === null) vErrors = [err]; else vErrors.push(err); errors++; ", r += " }", l && (r += " else { "), r;
  }), ft;
}
var ht, wr;
function cc() {
  return wr || (wr = 1, ht = function(x, t, n) {
    const e = B;
    var r = " ", s = x[e(889)], i = x[e(1697)], c = x[e(2782)][t], u = x[e(2020)] + x[e(1804)].getProperty(t), d = x.errSchemaPath + "/" + t, l = !x[e(1558)].allErrors, f = "data" + (i || "");
    if (x[e(1558)].format === !1) return l && (r += " if (true) { "), r;
    var g = x.opts.$data && c && c[e(1091)], h;
    g ? (r += e(1135) + s + " = " + x[e(1804)][e(1435)](c[e(1091)], i, x[e(684)]) + "; ", h = e(2782) + s) : h = c;
    var m = x.opts[e(1631)], v = Array[e(1155)](m);
    if (g) {
      var S = "format" + s, E = e(1394) + s, A = e(2225) + s;
      r += e(1704) + S + " = formats[" + h + e(1509) + E + e(2267) + S + e(1854) + S + " instanceof RegExp) && " + S + e(1402) + A + e(2471) + E + e(1412) + S + e(2301) + E + e(1457), x[e(523)] && (r += e(1679) + s + e(2471) + S + e(2013)), r += " " + S + e(2471) + S + e(2069), g && (r += " (" + h + " !== undefined && typeof " + h + " != 'string') || "), r += " (", m != e(530) && (r += " (" + h + e(1387) + S + " ", v && (r += " && self._opts.unknownFormats.indexOf(" + h + e(2093)), r += ") || "), r += " (" + S + e(1412) + A + e(1550) + n + e(2219) + S + e(1998), x[e(523)] ? r += e(1868) + s + e(1726) + S + "(" + f + e(1931) + S + "(" + f + e(1490) : r += " " + S + "(" + f + ") ", r += e(850) + S + e(2086) + f + e(2424);
    } else {
      var S = x.formats[c];
      if (!S) {
        if (m == e(530)) return x[e(1814)].warn(e(1944) + c + e(2777) + x.errSchemaPath + '"'), l && (r += e(1983)), r;
        if (v && m.indexOf(c) >= 0) return l && (r += e(1983)), r;
        throw new Error('unknown format "' + c + e(1606) + x[e(1512)] + '"');
      }
      var E = typeof S == e(1985) && !(S instanceof RegExp) && S[e(498)], A = E && S[e(2197)] || "string";
      if (E) {
        var T = S[e(523)] === !0;
        S = S[e(498)];
      }
      if (A != n) return l && (r += e(1983)), r;
      if (T) {
        if (!x[e(523)]) throw new Error(e(1071));
        var R = e(1127) + x[e(1804)][e(449)](c) + e(758);
        r += e(1332) + R + "(" + f + e(1869);
      } else {
        r += e(2066);
        var R = e(1127) + x[e(1804)][e(449)](c);
        E && (R += ".validate"), typeof S == "function" ? r += " " + R + "(" + f + ") " : r += " " + R + ".test(" + f + ") ", r += ") { ";
      }
    }
    var P = P || [];
    P[e(1851)](r), r = "", x[e(981)] !== !1 ? (r += e(1270) + e(1671) + e(1777) + x[e(346)] + e(805) + x[e(1804)][e(2504)](d) + e(1937), g ? r += "" + h : r += "" + x[e(1804)][e(2504)](c), r += "  } ", x[e(1558)][e(2049)] !== !1 && (r += e(1223), g ? r += e(1446) + h + e(1796) : r += "" + x[e(1804)][e(1143)](c), r += e(1863)), x[e(1558)][e(1539)] && (r += e(718), g ? r += "validate.schema" + u : r += "" + x[e(1804)][e(2504)](c), r += "         , parentSchema: validate.schema" + x.schemaPath + e(1665) + f + " "), r += e(969)) : r += e(1030);
    var F = r;
    return r = P.pop(), !x[e(1216)] && l ? x[e(523)] ? r += e(2179) + F + "]); " : r += e(652) + F + e(2356) : r += e(933) + F + e(626), r += e(969), l && (r += e(612)), r;
  }), ht;
}
var pt, Sr;
function uc() {
  return Sr || (Sr = 1, pt = function(x, t, n) {
    const e = B;
    var r = " ", s = x[e(889)], i = x[e(1697)], c = x.schema[t], u = x[e(2020)] + x[e(1804)].getProperty(t), d = x[e(1512)] + "/" + t, l = !x[e(1558)].allErrors, f = "data" + (i || ""), g = e(707) + s, h = e(1712) + s, m = x[e(1804)][e(1452)](x);
    m[e(889)]++;
    var v = "valid" + m[e(889)], S = x[e(2782)][e(2278)], E = x.schema[e(439)], A = S !== void 0 && (x.opts[e(1622)] ? typeof S == e(1985) && Object[e(1448)](S)[e(2463)] > 0 || S === !1 : x[e(1804)][e(460)](S, x[e(326)].all)), T = E !== void 0 && (x[e(1558)].strictKeywords ? typeof E == e(1985) && Object[e(1448)](E)[e(2463)] > 0 || E === !1 : x.util.schemaHasRules(E, x[e(326)][e(912)])), R = m[e(2653)];
    if (A || T) {
      var P;
      m.createErrors = !1, m[e(2782)] = c, m[e(2020)] = u, m[e(1512)] = d, r += e(1704) + h + e(1395) + g + e(1960);
      var F = x[e(1216)];
      x[e(1216)] = m[e(1216)] = !0, r += "  " + x[e(498)](m) + " ", m[e(2653)] = R, m[e(981)] = !0, r += e(639) + h + e(1827) + h + e(1282) + h + e(242), x[e(1216)] = m[e(1216)] = F, A ? (r += e(1881) + v + e(2589), m[e(2782)] = x[e(2782)][e(2278)], m[e(2020)] = x.schemaPath + e(2656), m[e(1512)] = x.errSchemaPath + e(1459), r += "  " + x[e(498)](m) + " ", m[e(2653)] = R, r += " " + g + " = " + v + "; ", A && T ? (P = e(1716) + s, r += e(1704) + P + e(2555)) : P = e(1015), r += " } ", T && (r += e(612))) : r += e(334) + v + e(1457), T && (m.schema = x[e(2782)][e(439)], m[e(2020)] = x[e(2020)] + e(233), m[e(1512)] = x[e(1512)] + e(1353), r += "  " + x[e(498)](m) + " ", m.baseId = R, r += " " + g + " = " + v + "; ", A && T ? (P = e(1716) + s, r += e(1704) + P + e(2184)) : P = e(1741), r += " } "), r += e(334) + g + ") {   var err =   ", x[e(981)] !== !1 ? (r += e(1270) + "if" + e(1777) + x[e(346)] + e(805) + x[e(1804)].toQuotedString(d) + " , params: { failingKeyword: " + P + e(969), x.opts[e(2049)] !== !1 && (r += e(2519) + P + e(673)), x[e(1558)][e(1539)] && (r += e(1099) + u + e(2492) + x[e(2020)] + e(1665) + f + " "), r += e(969)) : r += e(1030), r += e(626), !x[e(1216)] && l && (x.async ? r += e(1914) : r += e(1686)), r += " }   ", l && (r += e(612));
    } else l && (r += e(1983));
    return r;
  }), pt;
}
var mt, kr;
function dc() {
  return kr || (kr = 1, mt = function(x, t, n) {
    const e = B;
    var r = " ", s = x.level, i = x[e(1697)], c = x[e(2782)][t], u = x[e(2020)] + x[e(1804)][e(449)](t), d = x[e(1512)] + "/" + t, l = !x[e(1558)][e(1718)], f = e(2743) + (i || ""), g = e(707) + s, h = "errs__" + s, m = x[e(1804)][e(1452)](x), v = "";
    m[e(889)]++;
    var S = "valid" + m[e(889)], E = "i" + s, A = m[e(1697)] = x.dataLevel + 1, T = e(2743) + A, R = x[e(2653)];
    if (r += e(923) + h + e(2006) + g + ";", Array[e(1155)](c)) {
      var P = x[e(2782)][e(2313)];
      if (P === !1) {
        r += " " + g + " = " + f + e(2786) + c[e(2463)] + "; ";
        var F = d;
        d = x[e(1512)] + e(1879), r += e(2745) + g + e(1874);
        var j = j || [];
        j[e(1851)](r), r = "", x.createErrors !== !1 ? (r += " { keyword: '" + e(2313) + e(1777) + x[e(346)] + e(805) + x[e(1804)][e(2504)](d) + e(428) + c[e(2463)] + e(969), x[e(1558)].messages !== !1 && (r += e(247) + c.length + " items' "), x[e(1558)][e(1539)] && (r += e(2236) + x[e(2020)] + e(1665) + f + " "), r += e(969)) : r += e(1030);
        var O = r;
        r = j.pop(), !x.compositeRule && l ? x[e(523)] ? r += e(2179) + O + e(1084) : r += " validate.errors = [" + O + "]; return false; " : r += " var err = " + O + ";  if (vErrors === null) vErrors = [err]; else vErrors.push(err); errors++; ", r += " } ", d = F, l && (v += "}", r += e(612));
      }
      var L = c;
      if (L) {
        for (var C, N = -1, z = L[e(2463)] - 1; N < z; )
          if (C = L[N += 1], x[e(1558)].strictKeywords ? typeof C == "object" && Object[e(1448)](C)[e(2463)] > 0 || C === !1 : x[e(1804)][e(460)](C, x[e(326)].all)) {
            r += " " + S + e(1167) + f + e(2493) + N + e(1457);
            var U = f + "[" + N + "]";
            m[e(2782)] = C, m[e(2020)] = u + "[" + N + "]", m[e(1512)] = d + "/" + N, m.errorPath = x.util[e(267)](x.errorPath, N, x[e(1558)][e(1151)], !0), m[e(684)][A] = N;
            var V = x.validate(m);
            m[e(2653)] = R, x.util[e(2245)](V, T) < 2 ? r += " " + x.util[e(1875)](V, T, U) + " " : r += e(1704) + T + e(2471) + U + "; " + V + " ", r += e(1165), l && (r += e(1881) + S + e(1457), v += "}");
          }
      }
      if (typeof P == e(1985) && (x.opts.strictKeywords ? typeof P == "object" && Object.keys(P)[e(2463)] > 0 || P === !1 : x[e(1804)][e(460)](P, x[e(326)][e(912)]))) {
        m.schema = P, m[e(2020)] = x[e(2020)] + e(1350), m.errSchemaPath = x[e(1512)] + e(1879), r += " " + S + e(1167) + f + e(2493) + c[e(2463)] + e(226) + E + " = " + c[e(2463)] + "; " + E + e(2240) + f + e(1506) + E + e(2121), m[e(346)] = x.util[e(267)](x.errorPath, E, x[e(1558)].jsonPointers, !0);
        var U = f + "[" + E + "]";
        m[e(684)][A] = E;
        var V = x[e(498)](m);
        m[e(2653)] = R, x.util[e(2245)](V, T) < 2 ? r += " " + x[e(1804)][e(1875)](V, T, U) + " " : r += e(1704) + T + e(2471) + U + "; " + V + " ", l && (r += " if (!" + S + e(938)), r += e(1193), l && (r += e(1881) + S + e(1457), v += "}");
      }
    } else if (x[e(1558)][e(1622)] ? typeof c == e(1985) && Object.keys(c).length > 0 || c === !1 : x[e(1804)][e(460)](c, x[e(326)].all)) {
      m[e(2782)] = c, m[e(2020)] = u, m.errSchemaPath = d, r += e(1784) + E + " = 0; " + E + e(2240) + f + e(1506) + E + e(2121), m[e(346)] = x[e(1804)].getPathExpr(x[e(346)], E, x[e(1558)][e(1151)], !0);
      var U = f + "[" + E + "]";
      m[e(684)][A] = E;
      var V = x[e(498)](m);
      m.baseId = R, x.util[e(2245)](V, T) < 2 ? r += " " + x[e(1804)][e(1875)](V, T, U) + " " : r += " var " + T + e(2471) + U + "; " + V + " ", l && (r += e(334) + S + ") break; "), r += " }";
    }
    return l && (r += " " + v + e(1881) + h + e(1104)), r;
  }), mt;
}
var gt, Pr;
function Er() {
  return Pr || (Pr = 1, gt = function(x, t, n) {
    const e = B;
    var r = " ", s = x[e(889)], i = x.dataLevel, c = x[e(2782)][t], u = x[e(2020)] + x.util[e(449)](t), d = x[e(1512)] + "/" + t, l = !x[e(1558)][e(1718)], R, f = "data" + (i || ""), g = x.opts[e(1091)] && c && c[e(1091)], h;
    g ? (r += e(1135) + s + e(2471) + x.util[e(1435)](c[e(1091)], i, x[e(684)]) + "; ", h = e(2782) + s) : h = c;
    var m = t == e(789), v = e(m ? 2362 : 310), S = x[e(2782)][v], E = x[e(1558)].$data && S && S[e(1091)], A = m ? "<" : ">", T = m ? ">" : "<", R = void 0;
    if (!(g || typeof c == e(2601) || c === void 0)) throw new Error(t + " must be number");
    if (!(E || S === void 0 || typeof S == e(2601) || typeof S == e(598))) throw new Error(v + e(1664));
    if (E) {
      var P = x[e(1804)][e(1435)](S[e(1091)], i, x[e(684)]), F = e(2113) + s, j = e(503) + s, O = e(1651) + s, L = "op" + s, C = e(1446) + L + e(1796);
      r += e(2091) + s + e(2471) + P + "; ", P = "schemaExcl" + s, r += e(1704) + F + e(1576) + j + e(2267) + P + e(797) + j + e(262) + j + e(1848) + j + e(1434);
      var R = v, N = N || [];
      N.push(r), r = "", x[e(981)] !== !1 ? (r += " { keyword: '" + (R || e(2758)) + e(1777) + x[e(346)] + " , schemaPath: " + x.util[e(2504)](d) + e(1822), x[e(1558)][e(2049)] !== !1 && (r += " , message: '" + v + " should be boolean' "), x[e(1558)].verbose && (r += " , schema: validate.schema" + u + e(2492) + x.schemaPath + e(1665) + f + " "), r += e(969)) : r += e(1030);
      var z = r;
      r = N[e(2566)](), !x[e(1216)] && l ? x[e(523)] ? r += e(2179) + z + e(1084) : r += " validate.errors = [" + z + "]; return false; " : r += " var err = " + z + ";  if (vErrors === null) vErrors = [err]; else vErrors.push(err); errors++; ", r += " } else if ( ", g && (r += " (" + h + e(1296) + h + " != 'number') || "), r += " " + j + " == 'number' ? ( (" + F + e(2471) + h + " === undefined || " + P + " " + A + "= " + h + e(1619) + f + " " + T + "= " + P + e(850) + f + " " + T + " " + h + e(594) + F + e(2471) + P + " === true) ? " + f + " " + T + "= " + h + " : " + f + " " + T + " " + h + e(1257) + f + e(728) + f + e(1530) + s + " = " + F + e(2249) + A + "' : '" + A + "='; ", c === void 0 && (R = v, d = x[e(1512)] + "/" + v, h = P, g = E);
    } else {
      var O = typeof S == "number", C = A;
      if (O && g) {
        var L = "'" + C + "'";
        r += e(2781), g && (r += " (" + h + " !== undefined && typeof " + h + e(1304)), r += e(1866) + h + e(304) + S + " " + A + "= " + h + e(1371) + f + " " + T + "= " + S + e(850) + f + " " + T + " " + h + e(1257) + f + e(728) + f + ") { ";
      } else {
        O && c === void 0 ? (F = !0, R = v, d = x[e(1512)] + "/" + v, h = S, T += "=") : (O && (h = Math[e(m ? 458 : 264)](S, c)), S === (O ? h : !0) ? (F = !0, R = v, d = x[e(1512)] + "/" + v, T += "=") : (F = !1, C += "="));
        var L = "'" + C + "'";
        r += e(2781), g && (r += " (" + h + " !== undefined && typeof " + h + " != 'number') || "), r += " " + f + " " + T + " " + h + e(1986) + f + " !== " + f + e(1457);
      }
    }
    R = R || t;
    var N = N || [];
    N[e(1851)](r), r = "", x[e(981)] !== !1 ? (r += e(1270) + (R || "_limit") + e(1777) + x[e(346)] + e(805) + x[e(1804)].toQuotedString(d) + " , params: { comparison: " + L + e(1816) + h + e(734) + F + e(969), x.opts.messages !== !1 && (r += " , message: 'should be " + C + " ", g ? r += "' + " + h : r += "" + h + "'"), x.opts[e(1539)] && (r += " , schema:  ", g ? r += e(1409) + u : r += "" + c, r += e(445) + x.schemaPath + " , data: " + f + " "), r += e(969)) : r += e(1030);
    var z = r;
    return r = N[e(2566)](), !x[e(1216)] && l ? x[e(523)] ? r += e(2179) + z + e(1084) : r += e(652) + z + "]; return false; " : r += e(933) + z + e(626), r += e(969), l && (r += e(612)), r;
  }), gt;
}
var bt, Ir;
function Rr() {
  return Ir || (Ir = 1, bt = function(x, t, n) {
    const e = B;
    var r = " ", s = x.level, i = x.dataLevel, c = x.schema[t], u = x[e(2020)] + x[e(1804)][e(449)](t), d = x[e(1512)] + "/" + t, l = !x.opts[e(1718)], v, f = "data" + (i || ""), g = x[e(1558)][e(1091)] && c && c[e(1091)], h;
    if (g ? (r += e(1135) + s + e(2471) + x[e(1804)].getData(c[e(1091)], i, x[e(684)]) + "; ", h = e(2782) + s) : h = c, !(g || typeof c == "number")) throw new Error(t + e(1762));
    var m = t == e(1878) ? ">" : "<";
    r += "if ( ", g && (r += " (" + h + e(1296) + h + e(1304)), r += " " + f + e(1927) + m + " " + h + e(1457);
    var v = t, S = S || [];
    S[e(1851)](r), r = "", x.createErrors !== !1 ? (r += e(1270) + (v || e(1785)) + e(1777) + x[e(346)] + e(805) + x[e(1804)][e(2504)](d) + " , params: { limit: " + h + e(969), x.opts[e(2049)] !== !1 && (r += " , message: 'should NOT have ", t == "maxItems" ? r += e(2224) : r += e(1736), r += e(1039), g ? r += e(1446) + h + " + '" : r += "" + c, r += e(2447)), x.opts[e(1539)] && (r += " , schema:  ", g ? r += "validate.schema" + u : r += "" + c, r += e(445) + x[e(2020)] + e(1665) + f + " "), r += e(969)) : r += e(1030);
    var E = r;
    return r = S.pop(), !x[e(1216)] && l ? x[e(523)] ? r += e(2179) + E + e(1084) : r += e(652) + E + e(2356) : r += e(933) + E + e(626), r += "} ", l && (r += " else { "), r;
  }), bt;
}
var yt, Cr;
function Fr() {
  return Cr || (Cr = 1, yt = function(x, t, n) {
    const e = B;
    var r = " ", s = x[e(889)], i = x.dataLevel, c = x[e(2782)][t], u = x.schemaPath + x[e(1804)][e(449)](t), d = x[e(1512)] + "/" + t, l = !x[e(1558)][e(1718)], v, f = e(2743) + (i || ""), g = x[e(1558)].$data && c && c[e(1091)], h;
    if (g ? (r += " var schema" + s + " = " + x[e(1804)][e(1435)](c.$data, i, x[e(684)]) + "; ", h = e(2782) + s) : h = c, !(g || typeof c == e(2601))) throw new Error(t + e(1762));
    var m = t == "maxLength" ? ">" : "<";
    r += e(2649), g && (r += " (" + h + e(1296) + h + e(1304)), x[e(1558)][e(971)] === !1 ? r += " " + f + ".length " : r += " ucs2length(" + f + ") ", r += " " + m + " " + h + e(1457);
    var v = t, S = S || [];
    S[e(1851)](r), r = "", x[e(981)] !== !1 ? (r += " { keyword: '" + (v || e(2546)) + e(1777) + x.errorPath + e(805) + x[e(1804)][e(2504)](d) + e(428) + h + e(969), x[e(1558)].messages !== !1 && (r += e(1295), t == e(512) ? r += e(2261) : r += e(1496), r += " than ", g ? r += "' + " + h + " + '" : r += "" + c, r += e(1587)), x[e(1558)][e(1539)] && (r += " , schema:  ", g ? r += e(1409) + u : r += "" + c, r += e(445) + x[e(2020)] + e(1665) + f + " "), r += " } ") : r += e(1030);
    var E = r;
    return r = S[e(2566)](), !x[e(1216)] && l ? x[e(523)] ? r += e(2179) + E + e(1084) : r += e(652) + E + e(2356) : r += e(933) + E + ";  if (vErrors === null) vErrors = [err]; else vErrors.push(err); errors++; ", r += "} ", l && (r += " else { "), r;
  }), yt;
}
var vt, Nr;
function qr() {
  return Nr || (Nr = 1, vt = function(x, t, n) {
    const e = B;
    var r = " ", s = x[e(889)], i = x[e(1697)], c = x[e(2782)][t], u = x[e(2020)] + x.util[e(449)](t), d = x[e(1512)] + "/" + t, l = !x[e(1558)][e(1718)], v, f = e(2743) + (i || ""), g = x[e(1558)].$data && c && c.$data, h;
    if (g ? (r += " var schema" + s + e(2471) + x.util.getData(c.$data, i, x.dataPathArr) + "; ", h = e(2782) + s) : h = c, !(g || typeof c == "number")) throw new Error(t + " must be number");
    var m = t == "maxProperties" ? ">" : "<";
    r += "if ( ", g && (r += " (" + h + e(1296) + h + " != 'number') || "), r += " Object.keys(" + f + e(2494) + m + " " + h + e(1457);
    var v = t, S = S || [];
    S.push(r), r = "", x[e(981)] !== !1 ? (r += e(1270) + (v || "_limitProperties") + e(1777) + x[e(346)] + e(805) + x[e(1804)][e(2504)](d) + e(428) + h + e(969), x[e(1558)][e(2049)] !== !1 && (r += e(2742), t == e(679) ? r += "more" : r += e(1736), r += e(1039), g ? r += e(1446) + h + e(1796) : r += "" + c, r += e(1374)), x[e(1558)].verbose && (r += e(718), g ? r += e(1409) + u : r += "" + c, r += "         , parentSchema: validate.schema" + x[e(2020)] + e(1665) + f + " "), r += e(969)) : r += " {} ";
    var E = r;
    return r = S[e(2566)](), !x[e(1216)] && l ? x[e(523)] ? r += e(2179) + E + "]); " : r += " validate.errors = [" + E + e(2356) : r += e(933) + E + ";  if (vErrors === null) vErrors = [err]; else vErrors.push(err); errors++; ", r += "} ", l && (r += e(612)), r;
  }), vt;
}
var wt, Tr;
function lc() {
  return Tr || (Tr = 1, wt = function(x, t, n) {
    const e = B;
    var r = " ", s = x[e(889)], i = x[e(1697)], c = x[e(2782)][t], u = x.schemaPath + x[e(1804)][e(449)](t), d = x.errSchemaPath + "/" + t, l = !x[e(1558)][e(1718)], f = e(2743) + (i || ""), g = x[e(1558)][e(1091)] && c && c[e(1091)], h;
    if (g ? (r += e(1135) + s + " = " + x[e(1804)][e(1435)](c.$data, i, x[e(684)]) + "; ", h = e(2782) + s) : h = c, !(g || typeof c == e(2601))) throw new Error(t + e(1762));
    r += "var division" + s + e(2256), g && (r += " " + h + e(1658) + h + " != 'number' || "), r += " (division" + s + e(2471) + f + e(1595) + h + ", ", x[e(1558)][e(858)] ? r += e(951) + s + ") - division" + s + e(291) + x.opts[e(858)] + " " : r += e(2387) + s + e(1049) + s + ") ", r += e(2264), g && (r += "  )  "), r += " ) {   ";
    var m = m || [];
    m[e(1851)](r), r = "", x[e(981)] !== !1 ? (r += e(1270) + e(2401) + e(1777) + x[e(346)] + e(805) + x.util[e(2504)](d) + " , params: { multipleOf: " + h + e(969), x[e(1558)][e(2049)] !== !1 && (r += e(824), g ? r += "' + " + h : r += "" + h + "'"), x[e(1558)][e(1539)] && (r += " , schema:  ", g ? r += "validate.schema" + u : r += "" + c, r += "         , parentSchema: validate.schema" + x.schemaPath + e(1665) + f + " "), r += e(969)) : r += e(1030);
    var v = r;
    return r = m[e(2566)](), !x[e(1216)] && l ? x[e(523)] ? r += e(2179) + v + e(1084) : r += e(652) + v + "]; return false; " : r += e(933) + v + e(626), r += "} ", l && (r += e(612)), r;
  }), wt;
}
var St, Ar;
function fc() {
  return Ar || (Ar = 1, St = function(x, t, n) {
    const e = B;
    var r = " ", s = x[e(889)], i = x[e(1697)], c = x.schema[t], u = x[e(2020)] + x[e(1804)][e(449)](t), d = x[e(1512)] + "/" + t, l = !x.opts[e(1718)], f = "data" + (i || ""), g = "errs__" + s, h = x[e(1804)][e(1452)](x);
    h[e(889)]++;
    var m = e(707) + h[e(889)];
    if (x.opts[e(1622)] ? typeof c == "object" && Object[e(1448)](c)[e(2463)] > 0 || c === !1 : x[e(1804)].schemaHasRules(c, x.RULES[e(912)])) {
      h[e(2782)] = c, h.schemaPath = u, h[e(1512)] = d, r += " var " + g + e(425);
      var v = x[e(1216)];
      x.compositeRule = h[e(1216)] = !0, h.createErrors = !1;
      var S;
      h[e(1558)].allErrors && (S = h.opts[e(1718)], h[e(1558)][e(1718)] = !1), r += " " + x[e(498)](h) + " ", h[e(981)] = !0, S && (h[e(1558)][e(1718)] = S), x[e(1216)] = h[e(1216)] = v, r += e(1881) + m + e(1874);
      var E = E || [];
      E[e(1851)](r), r = "", x.createErrors !== !1 ? (r += e(1270) + e(2150) + "' , dataPath: (dataPath || '') + " + x[e(346)] + e(805) + x.util[e(2504)](d) + e(1822), x[e(1558)][e(2049)] !== !1 && (r += e(1778)), x.opts[e(1539)] && (r += e(1099) + u + " , parentSchema: validate.schema" + x[e(2020)] + e(1665) + f + " "), r += e(969)) : r += " {} ";
      var A = r;
      r = E.pop(), !x[e(1216)] && l ? x[e(523)] ? r += e(2179) + A + e(1084) : r += e(652) + A + e(2356) : r += e(933) + A + e(626), r += e(1922) + g + e(1827) + g + ") vErrors.length = " + g + "; else vErrors = null; } ", x[e(1558)][e(1718)] && (r += " } ");
    } else r += e(2776), x[e(981)] !== !1 ? (r += e(1270) + e(2150) + e(1777) + x[e(346)] + e(805) + x[e(1804)][e(2504)](d) + " , params: {} ", x[e(1558)][e(2049)] !== !1 && (r += e(1778)), x.opts[e(1539)] && (r += e(1099) + u + e(2492) + x.schemaPath + e(1665) + f + " "), r += e(969)) : r += " {} ", r += e(626), l && (r += " if (false) { ");
    return r;
  }), St;
}
var kt, Or;
function hc() {
  return Or || (Or = 1, kt = function(x, t, n) {
    const e = B;
    var r = " ", s = x[e(889)], i = x[e(1697)], c = x[e(2782)][t], u = x[e(2020)] + x[e(1804)][e(449)](t), d = x[e(1512)] + "/" + t, l = !x[e(1558)].allErrors, f = "data" + (i || ""), g = e(707) + s, h = e(1712) + s, m = x[e(1804)][e(1452)](x), v = "";
    m[e(889)]++;
    var S = "valid" + m[e(889)], E = m[e(2653)], A = "prevValid" + s, T = "passingSchemas" + s;
    r += e(923) + h + e(862) + A + e(2156) + g + " = false , " + T + e(1168);
    var R = x[e(1216)];
    x.compositeRule = m[e(1216)] = !0;
    var P = c;
    if (P)
      for (var F, j = -1, O = P[e(2463)] - 1; j < O; )
        F = P[j += 1], (x[e(1558)][e(1622)] ? typeof F == e(1985) && Object[e(1448)](F)[e(2463)] > 0 || F === !1 : x[e(1804)][e(460)](F, x[e(326)][e(912)])) ? (m[e(2782)] = F, m.schemaPath = u + "[" + j + "]", m[e(1512)] = d + "/" + j, r += "  " + x.validate(m) + " ", m[e(2653)] = E) : r += e(1704) + S + " = true; ", j && (r += " if (" + S + e(1412) + A + e(1457) + g + e(2164) + T + e(848) + T + ", " + j + e(949), v += "}"), r += " if (" + S + e(1457) + g + " = " + A + e(1847) + T + e(2471) + j + e(885);
    return x[e(1216)] = m[e(1216)] = R, r += "" + v + e(1753) + g + e(2429), x[e(981)] !== !1 ? (r += e(1270) + e(1815) + e(1777) + x[e(346)] + e(805) + x[e(1804)][e(2504)](d) + e(1503) + T + " } ", x[e(1558)].messages !== !1 && (r += e(1281)), x[e(1558)].verbose && (r += e(1099) + u + e(2492) + x[e(2020)] + e(1665) + f + " "), r += e(969)) : r += e(1030), r += e(626), !x[e(1216)] && l && (x[e(523)] ? r += e(1914) : r += e(1686)), r += e(1442) + h + e(1827) + h + e(1282) + h + e(2468), x[e(1558)][e(1718)] && (r += " } "), r;
  }), kt;
}
var Pt, Dr;
function pc() {
  return Dr || (Dr = 1, Pt = function(x, t, n) {
    const e = B;
    var r = " ", s = x[e(889)], i = x.dataLevel, c = x[e(2782)][t], u = x[e(2020)] + x[e(1804)][e(449)](t), d = x.errSchemaPath + "/" + t, l = !x[e(1558)][e(1718)], f = "data" + (i || ""), g = x.opts[e(1091)] && c && c[e(1091)], h;
    g ? (r += e(1135) + s + " = " + x.util[e(1435)](c[e(1091)], i, x[e(684)]) + "; ", h = e(2782) + s) : h = c;
    var m = g ? e(1666) + h + "))" : x.usePattern(c);
    r += e(2649), g && (r += " (" + h + e(1296) + h + e(2277)), r += " !" + m + ".test(" + f + e(1957);
    var v = v || [];
    v[e(1851)](r), r = "", x.createErrors !== !1 ? (r += e(1270) + e(2663) + e(1777) + x[e(346)] + e(805) + x[e(1804)][e(2504)](d) + e(2642), g ? r += "" + h : r += "" + x[e(1804)][e(2504)](c), r += e(1973), x[e(1558)].messages !== !1 && (r += ` , message: 'should match pattern "`, g ? r += "' + " + h + e(1796) : r += "" + x[e(1804)][e(1143)](c), r += e(1863)), x.opts.verbose && (r += " , schema:  ", g ? r += e(1409) + u : r += "" + x[e(1804)][e(2504)](c), r += e(445) + x[e(2020)] + e(1665) + f + " "), r += e(969)) : r += " {} ";
    var S = r;
    return r = v.pop(), !x[e(1216)] && l ? x[e(523)] ? r += e(2179) + S + e(1084) : r += " validate.errors = [" + S + e(2356) : r += e(933) + S + ";  if (vErrors === null) vErrors = [err]; else vErrors.push(err); errors++; ", r += "} ", l && (r += e(612)), r;
  }), Pt;
}
var Et, jr;
function mc() {
  return jr || (jr = 1, Et = function(x, t, n) {
    const e = B;
    var r = " ", s = x[e(889)], i = x[e(1697)], c = x[e(2782)][t], u = x[e(2020)] + x[e(1804)][e(449)](t), d = x[e(1512)] + "/" + t, l = !x[e(1558)][e(1718)], f = e(2743) + (i || ""), g = "errs__" + s, h = x[e(1804)].copy(x), m = "";
    h[e(889)]++;
    var v = "valid" + h.level, S = e(1176) + s, E = e(2145) + s, A = h[e(1697)] = x[e(1697)] + 1, T = e(2743) + A, R = "dataProperties" + s, P = Object[e(1448)](c || {})[e(558)](l0), F = x.schema.patternProperties || {}, j = Object[e(1448)](F).filter(l0), O = x[e(2782)][e(587)], L = P[e(2463)] || j.length, C = O === !1, N = typeof O == e(1985) && Object[e(1448)](O)[e(2463)], z = x[e(1558)][e(1440)], U = C || N || z, V = x.opts[e(332)], G = x[e(2653)], i0 = x[e(2782)][e(1994)];
    if (i0 && !(x.opts[e(1091)] && i0[e(1091)]) && i0[e(2463)] < x.opts.loopRequired) var u0 = x.util[e(1297)](i0);
    function l0(Lx) {
      return Lx !== "__proto__";
    }
    if (r += e(923) + g + e(2006) + v + e(2174), V && (r += e(1704) + R + e(1551)), U) {
      if (V ? r += " " + R + e(2471) + R + e(2288) + f + e(2703) + E + "=0; " + E + "<" + R + e(1506) + E + e(1652) + S + " = " + R + "[" + E + e(716) : r += e(1400) + S + " in " + f + ") { ", L) {
        if (r += e(421) + s + " = !(false ", P[e(2463)])
          if (P[e(2463)] > 8) r += e(1552) + u + e(2124) + S + ") ";
          else {
            var o0 = P;
            if (o0)
              for (var f0, k0 = -1, w0 = o0[e(2463)] - 1; k0 < w0; )
                f0 = o0[k0 += 1], r += " || " + S + e(879) + x[e(1804)][e(2504)](f0) + " ";
          }
        if (j[e(2463)]) {
          var j0 = j;
          if (j0)
            for (var C0, J0 = -1, D = j0[e(2463)] - 1; J0 < D; )
              C0 = j0[J0 += 1], r += e(1986) + x[e(2229)](C0) + e(2086) + S + ") ";
        }
        r += e(2125) + s + e(1457);
      }
      if (z == e(912)) r += e(408) + f + "[" + S + "]; ";
      else {
        var q = x[e(346)], M = e(1446) + S + e(1796);
        if (x[e(1558)][e(756)] && (x[e(346)] = x.util[e(267)](x[e(346)], S, x.opts[e(1151)])), C)
          if (z) r += e(408) + f + "[" + S + e(716);
          else {
            r += " " + v + " = false; ";
            var J = d;
            d = x[e(1512)] + e(936);
            var Y = Y || [];
            Y[e(1851)](r), r = "", x[e(981)] !== !1 ? (r += e(1270) + e(587) + e(1777) + x[e(346)] + e(805) + x[e(1804)][e(2504)](d) + e(1018) + M + "' } ", x[e(1558)].messages !== !1 && (r += e(2060), x[e(1558)][e(756)] ? r += e(856) : r += e(301), r += "' "), x[e(1558)][e(1539)] && (r += e(2236) + x[e(2020)] + e(1665) + f + " "), r += e(969)) : r += e(1030);
            var _ = r;
            r = Y[e(2566)](), !x[e(1216)] && l ? x[e(523)] ? r += e(2179) + _ + e(1084) : r += " validate.errors = [" + _ + e(2356) : r += " var err = " + _ + ";  if (vErrors === null) vErrors = [err]; else vErrors.push(err); errors++; ", d = J, l && (r += " break; ");
          }
        else if (N)
          if (z == e(1961)) {
            r += e(1704) + g + e(425);
            var X = x[e(1216)];
            x.compositeRule = h[e(1216)] = !0, h[e(2782)] = O, h[e(2020)] = x[e(2020)] + ".additionalProperties", h[e(1512)] = x.errSchemaPath + e(936), h[e(346)] = x[e(1558)]._errorDataPathProperty ? x[e(346)] : x.util.getPathExpr(x[e(346)], S, x.opts[e(1151)]);
            var s0 = f + "[" + S + "]";
            h[e(684)][A] = S;
            var c0 = x[e(498)](h);
            h.baseId = G, x[e(1804)][e(2245)](c0, T) < 2 ? r += " " + x[e(1804)][e(1875)](c0, T, s0) + " " : r += e(1704) + T + e(2471) + s0 + "; " + c0 + " ", r += e(334) + v + e(1867) + g + "; if (validate.errors !== null) { if (errors) validate.errors.length = errors; else validate.errors = null; } delete " + f + "[" + S + e(1797), x[e(1216)] = h.compositeRule = X;
          } else {
            h[e(2782)] = O, h.schemaPath = x[e(2020)] + e(801), h[e(1512)] = x.errSchemaPath + e(936), h[e(346)] = x.opts[e(756)] ? x.errorPath : x[e(1804)][e(267)](x[e(346)], S, x[e(1558)][e(1151)]);
            var s0 = f + "[" + S + "]";
            h.dataPathArr[A] = S;
            var c0 = x[e(498)](h);
            h.baseId = G, x[e(1804)][e(2245)](c0, T) < 2 ? r += " " + x[e(1804)].varReplace(c0, T, s0) + " " : r += " var " + T + e(2471) + s0 + "; " + c0 + " ", l && (r += e(334) + v + e(938));
          }
        x[e(346)] = q;
      }
      L && (r += e(969)), r += e(1165), l && (r += e(1881) + v + e(1457), m += "}");
    }
    var a0 = x[e(1558)][e(828)] && !x[e(1216)];
    if (P[e(2463)]) {
      var L0 = P;
      if (L0)
        for (var f0, A0 = -1, U0 = L0[e(2463)] - 1; A0 < U0; ) {
          f0 = L0[A0 += 1];
          var S0 = c[f0];
          if (x[e(1558)][e(1622)] ? typeof S0 == "object" && Object[e(1448)](S0)[e(2463)] > 0 || S0 === !1 : x[e(1804)][e(460)](S0, x.RULES[e(912)])) {
            var G0 = x.util.getProperty(f0), s0 = f + G0, se = a0 && S0.default !== void 0;
            h[e(2782)] = S0, h[e(2020)] = u + G0, h[e(1512)] = d + "/" + x[e(1804)][e(705)](f0), h.errorPath = x.util[e(1670)](x.errorPath, f0, x.opts[e(1151)]), h[e(684)][A] = x[e(1804)][e(2504)](f0);
            var c0 = x[e(498)](h);
            if (h.baseId = G, x[e(1804)].varOccurences(c0, T) < 2) {
              c0 = x.util[e(1875)](c0, T, s0);
              var Q0 = s0;
            } else {
              var Q0 = T;
              r += e(1704) + T + " = " + s0 + "; ";
            }
            if (se) r += " " + c0 + " ";
            else {
              if (u0 && u0[f0]) {
                r += e(2781) + Q0 + e(1760), V && (r += e(2737) + f + e(2421) + x[e(1804)].escapeQuotes(f0) + e(496)), r += e(1457) + v + e(2164);
                var q = x.errorPath, J = d, H0 = x[e(1804)][e(1143)](f0);
                x[e(1558)][e(756)] && (x.errorPath = x[e(1804)][e(1670)](q, f0, x[e(1558)][e(1151)])), d = x[e(1512)] + e(1087);
                var Y = Y || [];
                Y[e(1851)](r), r = "", x[e(981)] !== !1 ? (r += " { keyword: 'required" + e(1777) + x[e(346)] + e(805) + x[e(1804)][e(2504)](d) + e(997) + H0 + e(1765), x.opts[e(2049)] !== !1 && (r += e(2060), x.opts._errorDataPathProperty ? r += e(2172) : r += e(2713) + H0 + "\\'", r += "' "), x[e(1558)][e(1539)] && (r += e(1099) + u + " , parentSchema: validate.schema" + x[e(2020)] + e(1665) + f + " "), r += e(969)) : r += e(1030);
                var _ = r;
                r = Y[e(2566)](), !x.compositeRule && l ? x[e(523)] ? r += " throw new ValidationError([" + _ + e(1084) : r += e(652) + _ + e(2356) : r += e(933) + _ + ";  if (vErrors === null) vErrors = [err]; else vErrors.push(err); errors++; ", d = J, x.errorPath = q, r += " } else { ";
              } else l ? (r += e(2781) + Q0 + e(1760), V && (r += " || ! Object.prototype.hasOwnProperty.call(" + f + e(2421) + x[e(1804)][e(1143)](f0) + e(496)), r += ") { " + v + e(1166)) : (r += " if (" + Q0 + e(1819), V && (r += " &&   Object.prototype.hasOwnProperty.call(" + f + e(2421) + x[e(1804)][e(1143)](f0) + "') "), r += " ) { ");
              r += " " + c0 + e(969);
            }
          }
          l && (r += e(1881) + v + e(1457), m += "}");
        }
    }
    if (j.length) {
      var V0 = j;
      if (V0)
        for (var C0, Y0 = -1, $e = V0.length - 1; Y0 < $e; ) {
          C0 = V0[Y0 += 1];
          var S0 = F[C0];
          if (x[e(1558)][e(1622)] ? typeof S0 == e(1985) && Object.keys(S0)[e(2463)] > 0 || S0 === !1 : x[e(1804)].schemaHasRules(S0, x[e(326)][e(912)])) {
            h.schema = S0, h[e(2020)] = x[e(2020)] + e(991) + x[e(1804)][e(449)](C0), h[e(1512)] = x[e(1512)] + e(2244) + x.util[e(705)](C0), V ? r += " " + R + e(2471) + R + e(2288) + f + e(2703) + E + e(2025) + E + "<" + R + e(1506) + E + e(1652) + S + e(2471) + R + "[" + E + e(716) : r += e(1400) + S + e(2399) + f + e(1457), r += " if (" + x[e(2229)](C0) + e(2086) + S + ")) { ", h[e(346)] = x[e(1804)][e(267)](x[e(346)], S, x.opts[e(1151)]);
            var s0 = f + "[" + S + "]";
            h[e(684)][A] = S;
            var c0 = x[e(498)](h);
            h[e(2653)] = G, x.util[e(2245)](c0, T) < 2 ? r += " " + x[e(1804)][e(1875)](c0, T, s0) + " " : r += e(1704) + T + e(2471) + s0 + "; " + c0 + " ", l && (r += e(334) + v + ") break; "), r += e(969), l && (r += e(1928) + v + " = true; "), r += e(1165), l && (r += e(1881) + v + e(1457), m += "}");
          }
        }
    }
    return l && (r += " " + m + e(1881) + g + " == errors) {"), r;
  }), Et;
}
var It, Lr;
function gc() {
  return Lr || (Lr = 1, It = function(x, t, n) {
    const e = B;
    var r = " ", s = x.level, i = x[e(1697)], c = x[e(2782)][t], u = x[e(2020)] + x.util[e(449)](t), d = x[e(1512)] + "/" + t, l = !x.opts[e(1718)], f = e(2743) + (i || ""), g = e(1712) + s, h = x[e(1804)].copy(x), m = "";
    h[e(889)]++;
    var v = e(707) + h[e(889)];
    if (r += e(923) + g + e(1002), x[e(1558)][e(1622)] ? typeof c == e(1985) && Object[e(1448)](c)[e(2463)] > 0 || c === !1 : x[e(1804)].schemaHasRules(c, x[e(326)].all)) {
      h[e(2782)] = c, h[e(2020)] = u, h[e(1512)] = d;
      var S = e(1176) + s, E = e(2145) + s, A = "i" + s, T = e(1446) + S + e(1796), R = h[e(1697)] = x[e(1697)] + 1, P = e(2743) + R, F = e(1616) + s, j = x[e(1558)][e(332)], O = x.baseId;
      j && (r += e(1704) + F + e(763)), j ? r += " " + F + e(2471) + F + e(2288) + f + e(2703) + E + e(2025) + E + "<" + F + ".length; " + E + "++) { var " + S + e(2471) + F + "[" + E + e(716) : r += e(1400) + S + e(2399) + f + e(1457), r += e(2477) + s + " = errors; ";
      var L = S, C = x[e(1216)];
      x.compositeRule = h[e(1216)] = !0;
      var N = x[e(498)](h);
      h[e(2653)] = O, x[e(1804)][e(2245)](N, P) < 2 ? r += " " + x[e(1804)].varReplace(N, P, L) + " " : r += e(1704) + P + e(2471) + L + "; " + N + " ", x.compositeRule = h[e(1216)] = C, r += e(334) + v + e(1748) + A + e(2602) + s + "; " + A + "<errors; " + A + e(2458) + A + e(1226) + S + e(2705), x[e(981)] !== !1 ? (r += e(1270) + "propertyNames" + e(1777) + x[e(346)] + e(805) + x[e(1804)][e(2504)](d) + " , params: { propertyName: '" + T + e(1765), x[e(1558)][e(2049)] !== !1 && (r += e(1486) + T + e(1593)), x[e(1558)][e(1539)] && (r += " , schema: validate.schema" + u + e(2492) + x[e(2020)] + e(1665) + f + " "), r += " } ") : r += e(1030), r += e(626), !x[e(1216)] && l && (x[e(523)] ? r += e(1914) : r += " validate.errors = vErrors; return false; "), l && (r += e(628)), r += " } }";
    }
    return l && (r += " " + m + e(1881) + g + e(1104)), r;
  }), It;
}
var Rt, Mr;
function bc() {
  return Mr || (Mr = 1, Rt = function(x, t, n) {
    const e = B;
    var r = " ", s = x[e(889)], i = x[e(1697)], c = x[e(2782)][t], u = x[e(2020)] + x.util[e(449)](t), d = x[e(1512)] + "/" + t, l = !x[e(1558)][e(1718)], f = e(2743) + (i || ""), g = e(707) + s, h = x[e(1558)][e(1091)] && c && c.$data;
    h && (r += e(1135) + s + e(2471) + x[e(1804)][e(1435)](c[e(1091)], i, x[e(684)]) + "; ");
    var m = e(2782) + s;
    if (!h)
      if (c[e(2463)] < x[e(1558)][e(1081)] && x[e(2782)].properties && Object[e(1448)](x[e(2782)][e(2523)])[e(2463)]) {
        var R = [], v = c;
        if (v)
          for (var S, E = -1, A = v[e(2463)] - 1; E < A; ) {
            S = v[E += 1];
            var T = x.schema[e(2523)][S];
            !(T && (x[e(1558)].strictKeywords ? typeof T == e(1985) && Object[e(1448)](T)[e(2463)] > 0 || T === !1 : x[e(1804)].schemaHasRules(T, x[e(326)].all))) && (R[R[e(2463)]] = S);
          }
      } else var R = c;
    if (h || R[e(2463)]) {
      var P = x[e(346)], F = h || R[e(2463)] >= x.opts.loopRequired, j = x[e(1558)].ownProperties;
      if (l)
        if (r += e(2469) + s + "; ", F) {
          !h && (r += e(1704) + m + e(2257) + u + "; ");
          var O = "i" + s, L = e(2782) + s + "[" + O + "]", C = e(1446) + L + " + '";
          x.opts[e(756)] && (x.errorPath = x.util.getPathExpr(P, L, x[e(1558)][e(1151)])), r += " var " + g + e(1847), h && (r += e(1735) + s + " === undefined) " + g + e(2738) + s + ")) " + g + e(649)), r += e(1400) + O + e(438) + O + " < " + m + e(1506) + O + "++) { " + g + " = " + f + "[" + m + "[" + O + "]] !== undefined ", j && (r += " &&   Object.prototype.hasOwnProperty.call(" + f + ", " + m + "[" + O + e(560)), r += e(1705) + g + ") break; } ", h && (r += e(845)), r += e(2745) + g + e(1874);
          var N = N || [];
          N.push(r), r = "", x.createErrors !== !1 ? (r += e(1270) + e(1994) + "' , dataPath: (dataPath || '') + " + x[e(346)] + e(805) + x.util[e(2504)](d) + e(997) + C + e(1765), x.opts[e(2049)] !== !1 && (r += " , message: '", x[e(1558)]._errorDataPathProperty ? r += e(2172) : r += e(2713) + C + "\\'", r += "' "), x[e(1558)][e(1539)] && (r += e(1099) + u + e(2492) + x.schemaPath + e(1665) + f + " "), r += e(969)) : r += " {} ";
          var z = r;
          r = N.pop(), !x[e(1216)] && l ? x[e(523)] ? r += e(2179) + z + e(1084) : r += " validate.errors = [" + z + e(2356) : r += e(933) + z + e(626), r += e(2210);
        } else {
          r += e(2781);
          var U = R;
          if (U)
            for (var V, O = -1, G = U[e(2463)] - 1; O < G; ) {
              V = U[O += 1], O && (r += e(1986));
              var i0 = x[e(1804)][e(449)](V), u0 = f + i0;
              r += e(2045) + u0 + e(1760), j && (r += e(2737) + f + e(2421) + x[e(1804)][e(1143)](V) + e(496)), r += e(608) + s + e(2471) + x.util[e(2504)](x[e(1558)].jsonPointers ? V : i0) + ") ) ";
            }
          r += e(2589);
          var L = e(2221) + s, C = "' + " + L + e(1796);
          x.opts[e(756)] && (x[e(346)] = x[e(1558)].jsonPointers ? x.util[e(267)](P, L, !0) : P + e(1460) + L);
          var N = N || [];
          N[e(1851)](r), r = "", x.createErrors !== !1 ? (r += e(1270) + "required" + e(1777) + x.errorPath + " , schemaPath: " + x[e(1804)][e(2504)](d) + e(997) + C + "' } ", x[e(1558)][e(2049)] !== !1 && (r += e(2060), x.opts[e(756)] ? r += e(2172) : r += e(2713) + C + "\\'", r += "' "), x[e(1558)][e(1539)] && (r += e(1099) + u + e(2492) + x[e(2020)] + e(1665) + f + " "), r += e(969)) : r += e(1030);
          var z = r;
          r = N.pop(), !x[e(1216)] && l ? x[e(523)] ? r += " throw new ValidationError([" + z + e(1084) : r += e(652) + z + e(2356) : r += e(933) + z + e(626), r += e(2210);
        }
      else if (F) {
        !h && (r += " var " + m + e(2257) + u + "; ");
        var O = "i" + s, L = e(2782) + s + "[" + O + "]", C = e(1446) + L + e(1796);
        x.opts._errorDataPathProperty && (x[e(346)] = x.util.getPathExpr(P, L, x[e(1558)].jsonPointers)), h && (r += e(1881) + m + " && !Array.isArray(" + m + e(1592), x[e(981)] !== !1 ? (r += e(1270) + e(1994) + e(1777) + x[e(346)] + e(805) + x[e(1804)][e(2504)](d) + e(997) + C + e(1765), x.opts[e(2049)] !== !1 && (r += " , message: '", x.opts[e(756)] ? r += e(2172) : r += e(2713) + C + "\\'", r += "' "), x[e(1558)][e(1539)] && (r += " , schema: validate.schema" + u + " , parentSchema: validate.schema" + x[e(2020)] + e(1665) + f + " "), r += " } ") : r += e(1030), r += ";  if (vErrors === null) vErrors = [err]; else vErrors.push(err); errors++; } else if (" + m + e(681)), r += e(1400) + O + e(438) + O + e(2240) + m + e(1506) + O + e(720) + f + "[" + m + "[" + O + e(1895), j && (r += e(2737) + f + ", " + m + "[" + O + e(560)), r += ") {  var err =   ", x[e(981)] !== !1 ? (r += e(1270) + e(1994) + e(1777) + x.errorPath + e(805) + x[e(1804)][e(2504)](d) + " , params: { missingProperty: '" + C + e(1765), x[e(1558)][e(2049)] !== !1 && (r += e(2060), x[e(1558)][e(756)] ? r += e(2172) : r += e(2713) + C + "\\'", r += "' "), x.opts[e(1539)] && (r += " , schema: validate.schema" + u + e(2492) + x[e(2020)] + e(1665) + f + " "), r += e(969)) : r += e(1030), r += ";  if (vErrors === null) vErrors = [err]; else vErrors.push(err); errors++; } } ", h && (r += e(845));
      } else {
        var l0 = R;
        if (l0)
          for (var V, o0 = -1, f0 = l0[e(2463)] - 1; o0 < f0; ) {
            V = l0[o0 += 1];
            var i0 = x[e(1804)][e(449)](V), C = x.util[e(1143)](V), u0 = f + i0;
            x[e(1558)][e(756)] && (x[e(346)] = x[e(1804)][e(1670)](P, V, x[e(1558)][e(1151)])), r += e(2781) + u0 + e(1760), j && (r += " || ! Object.prototype.hasOwnProperty.call(" + f + e(2421) + x[e(1804)][e(1143)](V) + e(496)), r += e(2436), x[e(981)] !== !1 ? (r += e(1270) + e(1994) + "' , dataPath: (dataPath || '') + " + x.errorPath + e(805) + x[e(1804)][e(2504)](d) + e(997) + C + "' } ", x[e(1558)][e(2049)] !== !1 && (r += e(2060), x[e(1558)]._errorDataPathProperty ? r += e(2172) : r += e(2713) + C + "\\'", r += "' "), x.opts[e(1539)] && (r += " , schema: validate.schema" + u + e(2492) + x.schemaPath + e(1665) + f + " "), r += e(969)) : r += e(1030), r += e(1436);
          }
      }
      x[e(346)] = P;
    } else l && (r += e(1141));
    return r;
  }), Rt;
}
var Ct, $r;
function yc() {
  return $r || ($r = 1, Ct = function(x, t, n) {
    const e = B;
    var r = " ", s = x[e(889)], i = x.dataLevel, c = x[e(2782)][t], u = x[e(2020)] + x[e(1804)][e(449)](t), d = x[e(1512)] + "/" + t, l = !x[e(1558)][e(1718)], f = e(2743) + (i || ""), g = e(707) + s, h = x[e(1558)][e(1091)] && c && c[e(1091)], m;
    if (h ? (r += " var schema" + s + e(2471) + x[e(1804)].getData(c[e(1091)], i, x[e(684)]) + "; ", m = e(2782) + s) : m = c, (c || h) && x[e(1558)][e(531)] !== !1) {
      h && (r += e(1704) + g + e(797) + m + e(1542) + m + " === undefined) " + g + e(1198) + m + e(389) + g + e(1013)), r += e(1174) + f + ".length , " + g + e(1014);
      var v = x[e(2782)].items && x[e(2782)].items[e(2197)], S = Array[e(1155)](v);
      if (!v || v == "object" || v == "array" || S && (v[e(1817)](e(1985)) >= 0 || v[e(1817)](e(1061)) >= 0)) r += e(2234) + f + e(876) + f + e(364) + g + e(1086);
      else {
        r += e(2116) + f + e(677);
        var E = e(2092) + (S ? "s" : "");
        r += e(1881) + x[e(1804)][E](v, "item", x[e(1558)][e(2419)], !0) + e(1361), S && (r += e(675)), r += e(1583) + g + " = false; j = itemIndices[item]; break; } itemIndices[item] = i; } ";
      }
      r += " } ", h && (r += e(845)), r += e(334) + g + e(1874);
      var A = A || [];
      A[e(1851)](r), r = "", x[e(981)] !== !1 ? (r += e(1270) + e(531) + e(1777) + x[e(346)] + " , schemaPath: " + x.util[e(2504)](d) + e(2774), x[e(1558)][e(2049)] !== !1 && (r += e(1298)), x[e(1558)][e(1539)] && (r += e(718), h ? r += e(1409) + u : r += "" + c, r += e(445) + x[e(2020)] + e(1665) + f + " "), r += " } ") : r += e(1030);
      var T = r;
      r = A[e(2566)](), !x[e(1216)] && l ? x.async ? r += e(2179) + T + e(1084) : r += e(652) + T + e(2356) : r += e(933) + T + e(626), r += e(969), l && (r += e(612));
    } else l && (r += e(1983));
    return r;
  }), Ct;
}
var Ft, zr;
function vc() {
  return zr || (zr = 1, Ft = { $ref: xc(), allOf: tc(), anyOf: ac(), $comment: rc(), const: nc(), contains: sc(), dependencies: oc(), enum: ic(), format: cc(), if: uc(), items: dc(), maximum: Er(), minimum: Er(), maxItems: Rr(), minItems: Rr(), maxLength: Fr(), minLength: Fr(), maxProperties: qr(), minProperties: qr(), multipleOf: lc(), not: fc(), oneOf: hc(), pattern: pc(), properties: mc(), propertyNames: gc(), required: bc(), uniqueItems: yc(), validate: bs() }), Ft;
}
var Nt, Ur;
function wc() {
  const o = a;
  if (Ur) return Nt;
  Ur = 1;
  var x = vc(), t = Be()[o(1297)];
  return Nt = function() {
    const e = o;
    var r = [{ type: "number", rules: [{ maximum: ["exclusiveMaximum"] }, { minimum: [e(310)] }, e(2401), e(1671)] }, { type: e(1516), rules: [e(512), e(1788), e(2663), e(1671)] }, { type: e(1061), rules: [e(1878), e(2396), e(1407), e(613), e(531)] }, { type: "object", rules: ["maxProperties", e(1046), e(1994), "dependencies", "propertyNames", { properties: [e(587), "patternProperties"] }] }, { rules: [e(836), "const", e(2579), e(2150), e(1999), e(1815), "allOf", "if"] }], s = [e(2197), e(624)], i = [e(2486), e(753), "id", e(1091), e(645), "title", e(559), e(779), e(1708), "examples", e(1685), e(1043), e(2565), e(2158), e(2313), e(2278), e(439)], c = [e(2601), "integer", e(1516), e(1061), "object", e(598), e(2645)];
    return r.all = t(s), r.types = t(c), r[e(641)](function(u) {
      const d = e;
      u[d(701)] = u[d(701)][d(698)](function(l) {
        const f = d;
        var g;
        if (typeof l == f(1985)) {
          var h = Object[f(1448)](l)[0];
          g = l[h], l = h, g.forEach(function(v) {
            const S = f;
            s[S(1851)](v), r[S(912)][v] = !0;
          });
        }
        s[f(1851)](l);
        var m = r.all[l] = { keyword: l, code: x[l], implements: g };
        return m;
      }), r.all[d(624)] = { keyword: d(624), code: x.$comment }, u.type && (r[d(2126)][u[d(2197)]] = u);
    }), r[e(1028)] = t(s[e(329)](i)), r[e(1656)] = {}, r;
  }, Nt;
}
var qt, Hr;
function Sc() {
  const o = a;
  if (Hr) return qt;
  Hr = 1;
  var x = [o(2401), o(789), o(2362), o(829), o(310), o(512), o(1788), o(2663), "additionalItems", o(1878), o(2396), o(531), "maxProperties", "minProperties", o(1994), o(587), o(2579), o(1671), o(495)];
  return qt = function(t, n) {
    const e = o;
    for (var r = 0; r < n[e(2463)]; r++) {
      t = JSON[e(1383)](JSON[e(555)](t));
      var s = n[r][e(2352)]("/"), i = t, c;
      for (c = 1; c < s[e(2463)]; c++) i = i[s[c]];
      for (c = 0; c < x[e(2463)]; c++) {
        var u = x[c], d = i[u];
        d && (i[u] = { anyOf: [d, { $ref: e(1479) }] });
      }
    }
    return t;
  }, qt;
}
var Tt, Vr;
function kc() {
  const o = a;
  if (Vr) return Tt;
  Vr = 1;
  var x = ua()[o(570)];
  Tt = t;
  function t(n, e, r) {
    const s = o;
    var i = this;
    if (typeof this[s(691)][s(591)] != s(2176)) throw new Error("options.loadSchema should be a function");
    typeof e == s(2176) && (r = e, e = void 0);
    var c = u(n).then(function() {
      const l = s;
      var f = i[l(382)](n, void 0, e);
      return f[l(498)] || d(f);
    });
    return r && c[s(2278)](function(l) {
      r(null, l);
    }, r), c;
    function u(l) {
      const f = s;
      var g = l.$schema;
      return g && !i[f(2262)](g) ? t[f(1850)](i, { $ref: g }, !0) : Promise.resolve();
    }
    function d(l) {
      const f = s;
      try {
        return i[f(2677)](l);
      } catch (h) {
        if (h instanceof x) return g(h);
        throw h;
      }
      function g(h) {
        const m = f;
        var v = h[m(348)];
        if (A(v)) throw new Error(m(680) + v + m(2328) + h[m(2252)] + " cannot be resolved");
        var S = i._loadingSchemas[v];
        return !S && (S = i._loadingSchemas[v] = i[m(691)][m(591)](v), S.then(E, E)), S[m(2278)](function(T) {
          const R = m;
          if (!A(v)) return u(T)[R(2278)](function() {
            A(v) || i.addSchema(T, v, void 0, e);
          });
        })[m(2278)](function() {
          return d(l);
        });
        function E() {
          const T = m;
          delete i[T(2284)][v];
        }
        function A(T) {
          const R = m;
          return i[R(1965)][T] || i[R(1843)][T];
        }
      }
    }
  }
  return Tt;
}
var At, _r;
function Pc() {
  return _r || (_r = 1, At = function(x, t, n) {
    const e = B;
    var r = " ", s = x[e(889)], i = x[e(1697)], c = x.schema[t], u = x.schemaPath + x[e(1804)][e(449)](t), d = x[e(1512)] + "/" + t, l = !x[e(1558)][e(1718)], f, g = e(2743) + (i || ""), h = "valid" + s, m = e(1712) + s, v = x.opts[e(1091)] && c && c[e(1091)], S;
    v ? (r += " var schema" + s + e(2471) + x.util[e(1435)](c[e(1091)], i, x[e(684)]) + "; ", S = e(2782) + s) : S = c;
    var E = this, A = e(1620) + s, T = E[e(1620)], R = "", P, F, j, O, L;
    if (v && T.$data) {
      L = e(1498) + s;
      var C = T[e(1357)];
      r += e(1704) + A + e(1365) + t + e(2798) + L + " = " + A + e(2543);
    } else {
      if (O = x.useCustomRule(E, c, x.schema, x), !O) return;
      S = "validate.schema" + u, L = O[e(1469)], P = T[e(228)], F = T.inline, j = T[e(616)];
    }
    var N = L + e(733), z = "i" + s, U = e(1465) + s, V = T[e(523)];
    if (V && !x[e(523)]) throw new Error(e(945));
    if (!(F || j) && (r += "" + N + e(429)), r += e(923) + m + e(2006) + h + ";", v && T.$data && (R += "}", r += e(1881) + S + e(479) + h + e(1166), C && (R += "}", r += " " + h + e(2471) + A + e(999) + S + e(573) + h + ") { ")), F) T.statements ? r += " " + O[e(498)] + " " : r += " " + h + " = " + O[e(498)] + "; ";
    else if (j) {
      var G = x[e(1804)].copy(x), R = "";
      G[e(889)]++;
      var i0 = e(707) + G[e(889)];
      G.schema = O[e(498)], G[e(2020)] = "";
      var u0 = x[e(1216)];
      x[e(1216)] = G[e(1216)] = !0;
      var l0 = x.validate(G)[e(1936)](/validate\.schema/g, L);
      x.compositeRule = G[e(1216)] = u0, r += " " + l0;
    } else {
      var o0 = o0 || [];
      o0.push(r), r = "", r += "  " + L + e(2808), x[e(1558)][e(1988)] ? r += e(2707) : r += "self", P || T[e(2782)] === !1 ? r += e(2483) + g + " " : r += e(2483) + S + " , " + g + e(476) + x[e(2020)] + " ", r += e(2298), x[e(346)] != '""' && (r += " + " + x.errorPath);
      var f0 = i ? e(2743) + (i - 1 || "") : e(2143), k0 = i ? x[e(684)][i] : e(1137);
      r += e(2483) + f0 + e(2483) + k0 + e(1139);
      var w0 = r;
      r = o0.pop(), T[e(622)] === !1 ? (r += " " + h + " = ", V && (r += e(771)), r += "" + w0 + "; ") : V ? (N = "customErrors" + s, r += " var " + N + e(1744) + h + " = await " + w0 + e(2641) + h + e(1752) + N + e(1730)) : r += " " + N + e(1168) + h + " = " + w0 + "; ";
    }
    if (T[e(2378)] && (r += " if (" + f0 + ") " + g + e(2471) + f0 + "[" + k0 + "];"), r += "" + R, T[e(707)]) l && (r += " if (true) { ");
    else {
      r += e(2781), T[e(707)] === void 0 ? (r += " !", j ? r += "" + i0 : r += "" + h) : r += " " + !T[e(707)] + " ", r += e(1457), f = E[e(2630)];
      var o0 = o0 || [];
      o0.push(r), r = "";
      var o0 = o0 || [];
      o0[e(1851)](r), r = "", x[e(981)] !== !1 ? (r += e(1270) + (f || e(1656)) + e(1777) + x[e(346)] + e(805) + x.util.toQuotedString(d) + " , params: { keyword: '" + E[e(2630)] + e(1765), x.opts[e(2049)] !== !1 && (r += e(2375) + E.keyword + e(511)), x.opts[e(1539)] && (r += e(1099) + u + e(2492) + x[e(2020)] + " , data: " + g + " "), r += e(969)) : r += e(1030);
      var j0 = r;
      r = o0[e(2566)](), !x.compositeRule && l ? x[e(523)] ? r += " throw new ValidationError([" + j0 + e(1084) : r += " validate.errors = [" + j0 + e(2356) : r += e(933) + j0 + e(626);
      var C0 = r;
      r = o0.pop(), F ? T.errors ? T[e(622)] != "full" && (r += e(1784) + z + "=" + m + "; " + z + e(1146) + z + e(1652) + U + e(1725) + z + e(1669) + U + e(2600) + U + ".dataPath = (dataPath || '') + " + x[e(346)] + "; if (" + U + e(2688) + U + '.schemaPath = "' + d + e(491), x[e(1558)][e(1539)] && (r += " " + U + e(1659) + S + "; " + U + e(844) + g + "; "), r += e(969)) : T[e(622)] === !1 ? r += " " + C0 + " " : (r += e(1881) + m + e(883) + C0 + e(1615) + z + "=" + m + "; " + z + e(1146) + z + e(1652) + U + e(1725) + z + "]; if (" + U + e(2600) + U + e(1943) + x[e(346)] + e(797) + U + e(2688) + U + e(1743) + d + e(491), x.opts[e(1539)] && (r += " " + U + e(1659) + S + "; " + U + e(844) + g + "; "), r += e(1068)) : j ? (r += e(352), x[e(981)] !== !1 ? (r += e(1270) + (f || e(1656)) + "' , dataPath: (dataPath || '') + " + x[e(346)] + " , schemaPath: " + x[e(1804)].toQuotedString(d) + " , params: { keyword: '" + E[e(2630)] + e(1765), x[e(1558)][e(2049)] !== !1 && (r += e(2375) + E[e(2630)] + e(511)), x[e(1558)][e(1539)] && (r += e(1099) + u + e(2492) + x.schemaPath + e(1665) + g + " "), r += " } ") : r += e(1030), r += e(626), !x[e(1216)] && l && (x[e(523)] ? r += e(1914) : r += e(1686))) : T[e(622)] === !1 ? r += " " + C0 + " " : (r += e(2214) + N + ")) { if (vErrors === null) vErrors = " + N + "; else vErrors = vErrors.concat(" + N + e(236) + z + "=" + m + "; " + z + e(1146) + z + e(1652) + U + e(1725) + z + e(1669) + U + ".dataPath === undefined) " + U + e(1943) + x.errorPath + e(1268) + U + e(1743) + d + '";  ', x.opts.verbose && (r += " " + U + ".schema = " + S + "; " + U + e(844) + g + "; "), r += " } } else { " + C0 + e(969)), r += e(969), l && (r += e(612));
    }
    return r;
  }), At;
}
const Ec = a(1224), Ic = a(1224), Rc = a(1941), Cc = { schemaArray: { type: a(1061), minItems: 1, items: { $ref: "#" } }, nonNegativeInteger: { type: a(2403), minimum: 0 }, nonNegativeIntegerDefault0: { allOf: [{ $ref: "#/definitions/nonNegativeInteger" }, { default: 0 }] }, simpleTypes: { enum: ["array", a(598), a(2403), a(2645), a(2601), "object", a(1516)] }, stringArray: { type: a(1061), items: { type: a(1516) }, uniqueItems: !0, default: [] } }, Fc = [a(1985), a(598)], Nc = { $id: { type: "string", format: a(1810) }, $schema: { type: a(1516), format: a(2559) }, $ref: { type: a(1516), format: "uri-reference" }, $comment: { type: "string" }, title: { type: a(1516) }, description: { type: a(1516) }, default: !0, readOnly: { type: a(598), default: !1 }, examples: { type: "array", items: !0 }, multipleOf: { type: "number", exclusiveMinimum: 0 }, maximum: { type: "number" }, exclusiveMaximum: { type: a(2601) }, minimum: { type: a(2601) }, exclusiveMinimum: { type: a(2601) }, maxLength: { $ref: a(2212) }, minLength: { $ref: a(922) }, pattern: { type: a(1516), format: "regex" }, additionalItems: { $ref: "#" }, items: { anyOf: [{ $ref: "#" }, { $ref: "#/definitions/schemaArray" }], default: !0 }, maxItems: { $ref: a(2212) }, minItems: { $ref: a(922) }, uniqueItems: { type: a(598), default: !1 }, contains: { $ref: "#" }, maxProperties: { $ref: "#/definitions/nonNegativeInteger" }, minProperties: { $ref: a(922) }, required: { $ref: "#/definitions/stringArray" }, additionalProperties: { $ref: "#" }, definitions: { type: a(1985), additionalProperties: { $ref: "#" }, default: {} }, properties: { type: a(1985), additionalProperties: { $ref: "#" }, default: {} }, patternProperties: { type: a(1985), additionalProperties: { $ref: "#" }, propertyNames: { format: a(809) }, default: {} }, dependencies: { type: "object", additionalProperties: { anyOf: [{ $ref: "#" }, { $ref: a(1132) }] } }, propertyNames: { $ref: "#" }, const: !0, enum: { type: a(1061), items: !0, minItems: 1, uniqueItems: !0 }, type: { anyOf: [{ $ref: a(539) }, { type: a(1061), items: { $ref: a(539) }, minItems: 1, uniqueItems: !0 }] }, format: { type: a(1516) }, contentMediaType: { type: "string" }, contentEncoding: { type: "string" }, if: { $ref: "#" }, then: { $ref: "#" }, else: { $ref: "#" }, allOf: { $ref: a(2627) }, anyOf: { $ref: a(2627) }, oneOf: { $ref: a(2627) }, not: { $ref: "#" } }, ys = { $schema: Ec, $id: Ic, title: Rc, definitions: Cc, type: Fc, properties: Nc, default: !0 };
var Ot, Wr;
function qc() {
  const o = a;
  if (Wr) return Ot;
  Wr = 1;
  var x = ys;
  return Ot = { $id: "https://github.com/ajv-validator/ajv/blob/master/lib/definition_schema.js", definitions: { simpleTypes: x.definitions[o(1093)] }, type: o(1985), dependencies: { schema: [o(498)], $data: ["validate"], statements: ["inline"], valid: { not: { required: [o(616)] } } }, properties: { type: x[o(2523)][o(2197)], schema: { type: "boolean" }, statements: { type: o(598) }, dependencies: { type: o(1061), items: { type: o(1516) } }, metaSchema: { type: o(1985) }, modifying: { type: o(598) }, valid: { type: o(598) }, $data: { type: o(598) }, async: { type: o(598) }, errors: { anyOf: [{ type: o(598) }, { const: o(2254) }] } } }, Ot;
}
var Dt, Br;
function Tc() {
  if (Br) return Dt;
  Br = 1;
  var o = /^[a-z_$][a-z0-9_$-]*$/i, x = Pc(), t = qc();
  Dt = { add: n, get: e, remove: r, validate: s };
  function n(i, c) {
    const u = B;
    var d = this[u(326)];
    if (d[u(1028)][i]) throw new Error(u(2346) + i + u(665));
    if (!o.test(i)) throw new Error("Keyword " + i + u(406));
    if (c) {
      this[u(235)](c, !0);
      var l = c[u(2197)];
      if (Array[u(1155)](l))
        for (var f = 0; f < l[u(2463)]; f++) h(i, l[f], c);
      else h(i, l, c);
      var g = c[u(1200)];
      g && (c[u(1091)] && this[u(691)].$data && (g = { anyOf: [g, { $ref: "https://raw.githubusercontent.com/ajv-validator/ajv/master/lib/refs/data.json#" }] }), c[u(1357)] = this[u(228)](g, !0));
    }
    d[u(1028)][i] = d[u(912)][i] = !0;
    function h(m, v, S) {
      const E = u;
      for (var A, T = 0; T < d[E(2463)]; T++) {
        var R = d[T];
        if (R.type == v) {
          A = R;
          break;
        }
      }
      !A && (A = { type: v, rules: [] }, d[E(1851)](A));
      var P = { keyword: m, definition: S, custom: !0, code: x, implements: S[E(1579)] };
      A[E(701)][E(1851)](P), d[E(1656)][m] = P;
    }
    return this;
  }
  function e(i) {
    const c = B;
    var u = this[c(326)].custom[i];
    return u ? u[c(1620)] : this[c(326)][c(1028)][i] || !1;
  }
  function r(i) {
    const c = B;
    var u = this[c(326)];
    delete u.keywords[i], delete u[c(912)][i], delete u[c(1656)][i];
    for (var d = 0; d < u[c(2463)]; d++)
      for (var l = u[d][c(701)], f = 0; f < l[c(2463)]; f++)
        if (l[f][c(2630)] == i) {
          l[c(295)](f, 1);
          break;
        }
    return this;
  }
  function s(i, c) {
    const u = B;
    s[u(622)] = null;
    var d = this[u(2371)] = this._validateKeyword || this.compile(t, !0);
    if (d(i)) return !0;
    if (s[u(622)] = d.errors, c) throw new Error(u(1235) + this.errorsText(d[u(622)]));
    return !1;
  }
  return Dt;
}
const Ac = a(1224), Oc = a(1479), Dc = a(833), jc = a(1985), Lc = [a(1091)], Mc = { $data: { type: a(1516), anyOf: [{ format: a(1812) }, { format: "json-pointer" }] } }, $c = !1, zc = { $schema: Ac, $id: Oc, description: Dc, type: jc, required: Lc, properties: Mc, additionalProperties: $c };
var jt, Zr;
function Uc() {
  const o = a;
  if (Zr) return jt;
  Zr = 1;
  var x = X2(), t = ca(), n = Y2(), e = ms(), r = gs(), s = ec(), i = wc(), c = Sc(), u = Be();
  jt = m, m[o(1060)][o(498)] = v, m[o(1060)][o(228)] = S, m[o(1060)][o(831)] = E, m[o(1060)][o(2235)] = A, m[o(1060)][o(1357)] = T, m[o(1060)].getSchema = P, m[o(1060)].removeSchema = O, m[o(1060)][o(2100)] = u0, m[o(1060)].errorsText = i0, m[o(1060)]._addSchema = C, m[o(1060)][o(2677)] = N, m[o(1060)].compileAsync = kc();
  var d = Tc();
  m.prototype.addKeyword = d[o(2736)], m.prototype[o(1125)] = d[o(635)], m.prototype[o(727)] = d[o(2281)], m[o(1060)][o(235)] = d[o(498)];
  var l = ua();
  m.ValidationError = l[o(2028)], m[o(2271)] = l.MissingRef, m[o(2015)] = c;
  var f = "http://json-schema.org/draft-07/schema", g = ["removeAdditional", o(828), o(2412), "strictDefaults"], h = [o(2603)];
  function m(D) {
    const q = o;
    if (!(this instanceof m)) return new m(D);
    D = this[q(691)] = u[q(1452)](D) || {}, C0(this), this[q(1843)] = {}, this[q(1965)] = {}, this[q(2787)] = {}, this[q(1232)] = s(D[q(1671)]), this[q(1916)] = D[q(1954)] || new n(), this[q(2284)] = {}, this[q(2147)] = [], this.RULES = i(), this[q(2801)] = z(D), D[q(1081)] = D[q(1081)] || 1 / 0, D[q(2062)] == q(1962) && (D._errorDataPathProperty = !0), D[q(1680)] === void 0 && (D.serialize = r), this[q(1632)] = j0(this), D[q(1127)] && f0(this), D[q(1028)] && k0(this), l0(this), typeof D[q(1676)] == "object" && this[q(2235)](D[q(1676)]), D[q(917)] && this[q(2702)]("nullable", { metaSchema: { type: q(598) } }), o0(this);
  }
  function v(D, q) {
    const M = o;
    var J;
    if (typeof D == M(1516)) {
      if (J = this[M(2262)](D), !J) throw new Error('no schema with key or ref "' + D + '"');
    } else {
      var Y = this[M(382)](D);
      J = Y.validate || this[M(2677)](Y);
    }
    var _ = J(q);
    return J[M(645)] !== !0 && (this[M(622)] = J[M(622)]), _;
  }
  function S(D, q) {
    const M = o;
    var J = this[M(382)](D, void 0, q);
    return J.validate || this[M(2677)](J);
  }
  function E(D, q, M, J) {
    const Y = o;
    if (Array.isArray(D)) {
      for (var _ = 0; _ < D.length; _++) this.addSchema(D[_], void 0, M, J);
      return this;
    }
    var X = this[Y(2801)](D);
    if (X !== void 0 && typeof X != "string") throw new Error(Y(1280));
    return q = t[Y(1262)](q || X), w0(this, q), this[Y(1843)][q] = this[Y(382)](D, M, J, !0), this;
  }
  function A(D, q, M) {
    return this.addSchema(D, q, M, !0), this;
  }
  function T(D, q) {
    const M = o;
    var J = D[M(2486)];
    if (J !== void 0 && typeof J != M(1516)) throw new Error(M(2128));
    if (J = J || this._opts[M(860)] || R(this), !J) return this[M(1814)][M(515)](M(1360)), this[M(622)] = null, !0;
    var Y = this[M(498)](J, D);
    if (!Y && q) {
      var _ = M(1026) + this.errorsText();
      if (this[M(691)][M(1357)] == "log") this[M(1814)].error(_);
      else throw new Error(_);
    }
    return Y;
  }
  function R(D) {
    const q = o;
    var M = D[q(691)][q(1676)];
    return D._opts[q(860)] = typeof M == q(1985) ? D[q(2801)](M) || M : D[q(2262)](f) ? f : void 0, D[q(691)][q(860)];
  }
  function P(D) {
    const q = o;
    var M = j(this, D);
    switch (typeof M) {
      case q(1985):
        return M.validate || this._compile(M);
      case q(1516):
        return this[q(2262)](M);
      case q(455):
        return F(this, D);
    }
  }
  function F(D, q) {
    const M = o;
    var J = t[M(2782)][M(1850)](D, { schema: {} }, q);
    if (J) {
      var Y = J[M(2782)], _ = J[M(1969)], X = J.baseId, s0 = x.call(D, Y, _, void 0, X);
      return D[M(2787)][q] = new e({ ref: q, fragment: !0, schema: Y, root: _, baseId: X, validate: s0 }), s0;
    }
  }
  function j(D, q) {
    const M = o;
    return q = t[M(1262)](q), D[M(1843)][q] || D[M(1965)][q] || D[M(2787)][q];
  }
  function O(D) {
    const q = o;
    if (D instanceof RegExp) return L(this, this[q(1843)], D), L(this, this[q(1965)], D), this;
    switch (typeof D) {
      case q(455):
        return L(this, this._schemas), L(this, this._refs), this._cache[q(1017)](), this;
      case "string":
        var M = j(this, D);
        return M && this[q(1916)][q(1872)](M[q(2648)]), delete this[q(1843)][D], delete this[q(1965)][D], this;
      case q(1985):
        var J = this[q(691)][q(1680)], Y = J ? J(D) : D;
        this._cache[q(1872)](Y);
        var _ = this._getId(D);
        _ && (_ = t[q(1262)](_), delete this[q(1843)][_], delete this[q(1965)][_]);
    }
    return this;
  }
  function L(D, q, M) {
    const J = o;
    for (var Y in q) {
      var _ = q[Y];
      !_[J(1676)] && (!M || M[J(2734)](Y)) && (D[J(1916)][J(1872)](_[J(2648)]), delete q[Y]);
    }
  }
  function C(D, q, M, J) {
    const Y = o;
    if (typeof D != Y(1985) && typeof D != "boolean") throw new Error("schema should be object or boolean");
    var _ = this[Y(691)].serialize, X = _ ? _(D) : D, s0 = this._cache[Y(635)](X);
    if (s0) return s0;
    J = J || this._opts.addUsedSchema !== !1;
    var c0 = t[Y(1262)](this[Y(2801)](D));
    c0 && J && w0(this, c0);
    var a0 = this[Y(691)].validateSchema !== !1 && !q, L0;
    a0 && !(L0 = c0 && c0 == t[Y(1262)](D[Y(2486)])) && this[Y(1357)](D, !0);
    var A0 = t[Y(2398)][Y(1850)](this, D), U0 = new e({ id: c0, schema: D, localRefs: A0, cacheKey: X, meta: M });
    return c0[0] != "#" && J && (this[Y(1965)][c0] = U0), this[Y(1916)][Y(459)](X, U0), a0 && L0 && this.validateSchema(D, !0), U0;
  }
  function N(D, q) {
    const M = o;
    if (D[M(927)])
      return D[M(498)] = _, _[M(2782)] = D.schema, _.errors = null, _[M(1969)] = q || _, D[M(2782)][M(645)] === !0 && (_[M(645)] = !0), _;
    D[M(927)] = !0;
    var J;
    D[M(1676)] && (J = this[M(691)], this[M(691)] = this[M(1632)]);
    var Y;
    try {
      Y = x[M(1850)](this, D.schema, q, D.localRefs);
    } catch (X) {
      throw delete D.validate, X;
    } finally {
      D.compiling = !1, D.meta && (this[M(691)] = J);
    }
    return D[M(498)] = Y, D[M(320)] = Y[M(320)], D[M(2139)] = Y[M(2139)], D[M(1969)] = Y.root, Y;
    function _() {
      const X = M;
      var s0 = D.validate, c0 = s0[X(2135)](this, arguments);
      return _.errors = s0[X(622)], c0;
    }
  }
  function z(D) {
    switch (D[o(516)]) {
      case "auto":
        return G;
      case "id":
        return U;
      default:
        return V;
    }
  }
  function U(D) {
    const q = o;
    return D.$id && this[q(1814)][q(515)]("schema $id ignored", D[q(753)]), D.id;
  }
  function V(D) {
    const q = o;
    return D.id && this.logger[q(515)](q(847), D.id), D[q(753)];
  }
  function G(D) {
    const q = o;
    if (D.$id && D.id && D[q(753)] != D.id) throw new Error("schema $id is different from id");
    return D.$id || D.id;
  }
  function i0(D, q) {
    const M = o;
    if (D = D || this[M(622)], !D) return M(2426);
    q = q || {};
    for (var J = q[M(525)] === void 0 ? ", " : q[M(525)], Y = q[M(540)] === void 0 ? M(2743) : q[M(540)], _ = "", X = 0; X < D[M(2463)]; X++) {
      var s0 = D[X];
      s0 && (_ += Y + s0.dataPath + " " + s0[M(2354)] + J);
    }
    return _.slice(0, -J[M(2463)]);
  }
  function u0(D, q) {
    const M = o;
    return typeof q == "string" && (q = new RegExp(q)), this[M(1232)][D] = q, this;
  }
  function l0(D) {
    const q = o;
    var M;
    if (D._opts[q(1091)] && (M = zc, D[q(2235)](M, M[q(753)], !0)), D[q(691)][q(1676)] !== !1) {
      var J = ys;
      D[q(691)][q(1091)] && (J = c(J, h)), D[q(2235)](J, f, !0), D[q(1965)]["http://json-schema.org/schema"] = f;
    }
  }
  function o0(D) {
    const q = o;
    var M = D._opts[q(1811)];
    if (M)
      if (Array[q(1155)](M)) D[q(831)](M);
      else
        for (var J in M) D[q(831)](M[J], J);
  }
  function f0(D) {
    const q = o;
    for (var M in D._opts[q(1127)]) {
      var J = D[q(691)][q(1127)][M];
      D[q(2100)](M, J);
    }
  }
  function k0(D) {
    const q = o;
    for (var M in D[q(691)][q(1028)]) {
      var J = D[q(691)].keywords[M];
      D[q(2702)](M, J);
    }
  }
  function w0(D, q) {
    const M = o;
    if (D[M(1843)][q] || D[M(1965)][q]) throw new Error(M(1480) + q + '" already exists');
  }
  function j0(D) {
    const q = o;
    for (var M = u[q(1452)](D[q(691)]), J = 0; J < g[q(2463)]; J++) delete M[g[J]];
    return M;
  }
  function C0(D) {
    const q = o;
    var M = D[q(691)][q(1814)];
    if (M === !1) D[q(1814)] = { log: J0, warn: J0, error: J0 };
    else {
      if (M === void 0 && (M = console), !(typeof M == q(1985) && M[q(1799)] && M.warn && M[q(443)])) throw new Error("logger must implement log, warn and error methods");
      D[q(1814)] = M;
    }
  }
  function J0() {
  }
  return jt;
}
var Hc = Uc();
const Vc = Wn(Hc);
class _c extends B2 {
  constructor(x, t) {
    const n = a;
    var e;
    super(t), this[n(1646)] = x, this[n(593)] = (e = t == null ? void 0 : t[n(903)]) !== null && e !== void 0 ? e : {}, this[n(2e3)] = t == null ? void 0 : t[n(595)], this[n(2756)](rs, (r) => this._oninitialize(r)), this[n(2169)](ns, () => {
      const r = n;
      var s;
      return (s = this[r(2651)]) === null || s === void 0 ? void 0 : s[r(1850)](this);
    });
  }
  [a(1582)](x) {
    const t = a;
    if (this[t(1515)]) throw new Error(t(2629));
    this._capabilities = Z2(this._capabilities, x);
  }
  [a(2057)](x) {
    const t = a;
    var n, e, r;
    switch (x) {
      case t(2545):
        if (!(!((n = this[t(1414)]) === null || n === void 0) && n[t(2237)])) throw new Error(t(1557) + x + ")");
        break;
      case t(1123):
        if (!(!((e = this[t(1414)]) === null || e === void 0) && e[t(1079)])) throw new Error(t(2081) + x + ")");
        break;
      case t(1980):
        if (!(!((r = this._clientCapabilities) === null || r === void 0) && r.roots)) throw new Error(t(2475) + x + ")");
        break;
    }
  }
  [a(566)](x) {
    const t = a;
    switch (x) {
      case "notifications/message":
        if (!this[t(593)][t(2712)]) throw new Error(t(676) + x + ")");
        break;
      case t(377):
      case t(978):
        if (!this._capabilities.resources) throw new Error(t(1077) + x + ")");
        break;
      case "notifications/tools/list_changed":
        if (!this[t(593)][t(2389)]) throw new Error(t(871) + x + ")");
        break;
      case t(2072):
        if (!this._capabilities.prompts) throw new Error(t(781) + x + ")");
        break;
    }
  }
  [a(1520)](x) {
    const t = a;
    switch (x) {
      case "sampling/createMessage":
        if (!this[t(593)][t(2237)]) throw new Error(t(1894) + x + ")");
        break;
      case t(333):
        if (!this[t(593)].logging) throw new Error(t(676) + x + ")");
        break;
      case t(766):
      case "prompts/list":
        if (!this[t(593)].prompts) throw new Error(t(806) + x + ")");
        break;
      case "resources/list":
      case "resources/templates/list":
      case t(2024):
        if (!this[t(593)].resources) throw new Error(t(2111) + x + ")");
        break;
      case "tools/call":
      case t(857):
        if (!this[t(593)].tools) throw new Error(t(517) + x + ")");
        break;
    }
  }
  async [a(545)](x) {
    const t = a, n = x[t(1537)][t(1499)];
    return this._clientCapabilities = x[t(1537)][t(903)], this._clientVersion = x[t(1537)][t(852)], { protocolVersion: _i[t(932)](n) ? n : Jn, capabilities: this.getCapabilities(), serverInfo: this[t(1646)], ...this[t(2e3)] && { instructions: this._instructions } };
  }
  [a(853)]() {
    return this._clientCapabilities;
  }
  [a(2364)]() {
    return this[a(285)];
  }
  [a(2716)]() {
    return this[a(593)];
  }
  async [a(636)]() {
    const x = a;
    return this[x(276)]({ method: x(636) }, Xt);
  }
  async [a(2079)](x, t) {
    const n = a;
    return this[n(276)]({ method: n(2545), params: x }, fs, t);
  }
  async [a(2638)](x, t) {
    const n = a, e = await this[n(276)]({ method: n(1123), params: x }, hs, t);
    if (e.action === n(2103) && e[n(1903)]) try {
      const r = new Vc(), s = r[n(228)](x[n(1180)]);
      if (!s(e[n(1903)])) throw new Ae(ye.InvalidParams, n(480) + r[n(818)](s[n(622)]));
    } catch (r) {
      throw r instanceof Ae ? r : new Ae(ye[n(1767)], n(1471) + r);
    }
    return e;
  }
  async [a(398)](x, t) {
    return this[a(276)]({ method: "roots/list", params: x }, ps, t);
  }
  async sendLoggingMessage(x) {
    const t = a;
    return this[t(1006)]({ method: t(2309), params: x });
  }
  async [a(1317)](x) {
    const t = a;
    return this.notification({ method: t(377), params: x });
  }
  async [a(1184)]() {
    return this[a(1006)]({ method: "notifications/resources/list_changed" });
  }
  async [a(303)]() {
    const x = a;
    return this[x(1006)]({ method: x(2165) });
  }
  async [a(2137)]() {
    const x = a;
    return this.notification({ method: x(2072) });
  }
}
class Wc extends Error {
  constructor(x, t) {
    const n = a;
    super("Heartbeat timeout for poster " + x + n(1300) + t + "ms"), this[n(2796)] = n(2659);
  }
}
const px = /* @__PURE__ */ new Map();
class Bc {
  constructor(x) {
    const t = a;
    if (this[t(1386)] = [], this[t(1175)] = Date.now(), px.has(x[t(1787)])) {
      const n = px[t(635)](x[t(1787)]);
      n && n[t(1746)]();
    }
    this[t(1787)] = x[t(1787)], this[t(1857)] = x[t(1857)], this[t(2130)] = x[t(2130)], this[t(1441)] = x[t(1441)], this[t(1597)] = x[t(1597)] ?? 5e3, this.heartbeatTimeout = x[t(2395)] ?? 5e3, this[t(2609)] = x[t(2609)] ?? !1, px[t(1527)](this.posterIdentifier, this), this.listenMessageCallback = this[t(796)][t(1926)](this), this[t(2201)] = this[t(2130)](this.listenMessageCallback);
  }
  listenMessageCallback(x) {
    const t = a;
    if (x[t(1787)] === this[t(1787)]) {
      if (x.channel === "sdppp-heartbeat") {
        x[t(2197)] === t(636) && !this.debugDisableHeartbeatResponse ? this[t(1857)]({ channel: t(1964), posterIdentifier: this[t(1787)], type: t(1873), timestamp: x[t(2456)] }) : x[t(2197)] === t(1873) && (this.lastPongReceived = Date[t(2231)](), this[t(1070)] && (clearTimeout(this.heartbeatTimeoutTimer), this[t(1070)] = void 0));
        return;
      }
      x[t(1790)] === "sdppp" && (this.onmessage && t(1078) in x ? this[t(1932)](x[t(1078)]) : t(1078) in x && this.messageQueue[t(1851)](x.payload));
    }
  }
  async [a(854)]() {
    const x = a;
    for (; this[x(1386)][x(2463)] > 0; ) {
      const t = this[x(1386)][x(2325)]();
      t && this.onmessage && this[x(1932)](t);
    }
    this[x(1667)]();
  }
  startHeartbeat() {
    const x = a;
    this[x(1653)] = setInterval(() => {
      const t = x, n = Date[t(2231)]();
      this[t(1857)]({ channel: t(1964), posterIdentifier: this[t(1787)], type: t(636), timestamp: n }), this[t(1070)] = setTimeout(() => {
        const e = t, r = new Wc(this[e(1787)], this[e(2395)]);
        this[e(1955)] && this.onerror(r);
      }, this[t(2395)]);
    }, this.heartbeatInterval);
  }
  async [a(2171)](x, t) {
    const n = a;
    this[n(1857)]({ channel: n(1291), posterIdentifier: this[n(1787)], payload: x });
  }
  async [a(1746)]() {
    const x = a;
    this.heartbeatTimer && (clearInterval(this[x(1653)]), this[x(1653)] = void 0), this[x(1070)] && (clearTimeout(this[x(1070)]), this[x(1070)] = void 0), px[x(1707)](this[x(1787)]), this[x(1441)](this.externalListenMessageCallback);
  }
}
const Zc = ox[a(2417)](a(2623));
async function vs() {
  const o = a;
  if (!window[o(840)]) return;
  const x = new Bc({ posterIdentifier: o(2662), messagePoster: (e) => {
    window[o(840)].postMessage(e, "*");
  }, addMessageEventListener: (e) => {
    const r = (s) => {
      e(s[B(2743)]);
    };
    return window.addEventListener("message", r), r;
  }, removeMessageEventListener: (e) => {
    const r = o;
    window[r(1548)](r(2354), e);
  } });
  x[o(1955)] = (e) => {
    Zc(o(1720), e);
  };
  const t = new _c({ name: o(2662), version: o(2326) }, {}), n = new Ro(t);
  return await n[o(2074)](x), window[o(840)][o(1041)]({ channel: o(960), meshName: o(1643), action: o(2074), version: o(246) }, "*"), await I0[o(2074)](o(898), n);
}
const Kc = Object[a(2536)](Object[a(1609)]({ __proto__: null, connectUXP: vs, mcpMesh: I0 }, Symbol.toStringTag, { value: a(2134) }));
function ws(o) {
  const x = a, t = q0[x(602)] || q0[x(584)][x(1644)], n = t.activeWorkflow;
  if (o && o[x(1925)] && o[x(1925)].id !== n[x(2608)].id) return;
  const e = I0.store.getState().widgetableStructure, r = Jt(q0[x(2439)], n);
  ks(r, e) && I0.store[x(2490)]({ widgetableStructure: r }), I0[x(1766)][x(2490)]({ widgetableValues: qx(q0[x(2439)]) });
}
Oe.addEventListener(a(2050), ws), Oe.addEventListener(a(2680), () => {
  const o = a;
  I0[o(1766)][o(2490)]({ widgetableValues: qx(q0[o(2439)]) });
});
let Kr = 0, Gr = !0, Jr = "";
function Ss() {
  const o = a;
  requestAnimationFrame(Ss);
  const x = q0[o(602)] || q0.extensionManager[o(1644)], t = x[o(2682)], n = (t == null ? void 0 : t.id) || 0, e = (t == null ? void 0 : t[o(2501)]) || "", r = (t == null ? void 0 : t[o(1909)]) || !0;
  if (n === Kr && e === Jr && r === Gr) return;
  const s = Date.now();
  Kr = n, Jr = e, Gr = r;
  const i = Jt(q0[o(2439)], t), c = qx(q0[o(2439)]);
  I0[o(1766)][o(2490)]({ widgetableStructure: i, widgetableValues: c }), console[o(1799)](o(592) + (Date[o(2231)]() - s) + "ms"), setTimeout(() => {
    const u = o;
    if (t !== x[u(2682)]) return;
    const d = Jt(q0[u(2439)], t), l = qx(q0[u(2439)]);
    ks(d, i) && I0.store[u(2490)]({ widgetableStructure: d }), I0.store.setState({ widgetableValues: l });
  }, 800);
}
requestAnimationFrame(Ss);
function ks(o, x) {
  const t = a;
  return o.nodeIndexes[t(2463)] !== x[t(1501)].length || JSON.stringify(o.nodeIndexes) !== JSON[t(555)](x[t(1501)]) || JSON[t(555)](o[t(1339)]) !== JSON[t(555)](x[t(1339)]);
}
let Qr = !1;
async function Gc() {
  const o = a;
  if (Qr) return Promise.resolve();
  Oe[o(2230)] && I0[o(1766)].setState({ comfyUserToken: Oe[o(2230)] }), Qr = !0;
}
ox[a(2417)](a(795));
async function Jc(o, x, t) {
  const n = a;
  x[n(2761)]("progress", ({ detail: s }) => {
    const i = n;
    if (!s) return;
    let c = 0, u = 0;
    !isNaN(s[i(1732)] / s[i(264)]) && (c = Math.round(s.value / s.max * 100));
    const d = s[i(2195)], l = graph[i(1339)][i(2450)]((f) => f.id == d);
    if (l && l[i(287)]) {
      const f = 100 / graph[i(1339)][i(2463)];
      u = Math[i(1256)](l[i(287)] * f) + (c ? c / 100 * f : 0);
    }
    I0[i(1766)][i(2490)]({ progress: c, graphProgress: u });
  }), x.addEventListener(n(2799), (s) => {
    var c;
    const i = n;
    (c = s[i(1925)]) != null && c[i(1051)] && I0.store[i(2490)]({ queueSize: s[i(1925)][i(1051)][i(2631)] });
  }), x.addEventListener(n(2022), ({ detail: s }) => {
    const i = n;
    if (I0[i(1766)][i(2490)]({ executingNodeTitle: "", executingNodeID: "", lastError: s[i(1113)] }), s[i(1356)]) {
      const c = o[i(2439)][i(1339)][i(2450)]((u) => u.id == s[i(1356)]);
      I0[i(1766)][i(2490)]({ widgetableErrors: { [s[i(1356)]]: "[" + ((c == null ? void 0 : c.title) || s[i(1356)]) + "]" + s[i(1113)] } });
    }
  }), x[n(2761)](n(1889), (s) => {
    const i = n, c = s[i(1925)], u = graph[i(1339)][i(2450)]((d) => d.id == c);
    if (u) {
      const d = 100 / graph[i(1339)][i(2463)];
      I0[i(1766)].setState({ executingNodeTitle: u.title, executingNodeID: u.id, graphProgress: Math.round(u[i(287)] * d) });
    }
  }), x[n(2761)]("execution_interrupted", () => {
    const s = n;
    I0[s(1766)][s(2490)]({ progress: 0, executingNodeTitle: "", executingNodeID: "" });
  }), x[n(2761)]("execution_start", ({ detail: s }) => {
    const i = n;
    I0[i(1766)][i(2490)]({ lastError: "", widgetableErrors: {}, progress: 0, executingNodeTitle: "", executingNodeID: "", lastRunTime: Date.now() });
  });
  const e = /* @__PURE__ */ new Map();
  x.addEventListener(n(1455), (s) => {
    const i = n;
    I0[i(1766)][i(2490)]({ progress: 0, executingNodeTitle: "", executingNodeID: "" });
    const c = (e[i(635)](s[i(1925)][i(606)]) || []).map((u) => ({ url: u, thumbnail: u }));
    Ui(s.detail[i(606)], c), e.delete(s[i(1925)][i(606)]);
  }), x[n(2761)](n(2680), (s) => {
    const i = n, c = e[i(635)](s[i(1925)][i(606)]) || [];
    s[i(1925)][i(274)] && Array[i(1155)](s[i(1925)][i(274)][i(1346)]) && s.detail[i(274)][i(1346)][i(2463)] > 0 && c.push(...s[i(1925)][i(274)].images[i(558)]((u) => u[i(2197)] == i(274))[i(698)]((u) => {
      const d = i;
      return location[d(2004)] + location.pathname + d(2765) + u[d(2197)] + d(1331) + encodeURIComponent(u[d(1110)]) + (u.subfolder ? d(1241) + encodeURIComponent(u.subfolder) : "");
    })), s[i(1925)][i(274)] && Array[i(1155)](s.detail[i(274)].sdppp_assets) && s[i(1925)][i(274)].sdppp_assets.length > 0 && c.push(...s.detail[i(274)][i(457)][i(698)]((u) => {
      const d = i;
      return location[d(2004)] + location[d(2217)] + d(2418) + encodeURIComponent(u);
    })), e.set(s[i(1925)].prompt_id, c);
  });
  let r = null;
  x[n(2761)]("reconnecting", (s) => {
    r = setTimeout(() => {
      const i = B;
      I0[i(1766)][i(2490)]({ comfyWSState: i(2302) });
    }, 1e3);
  }), x.addEventListener(n(1518), (s) => {
    const i = n;
    I0[i(1766)][i(2490)]({ comfyWSState: i(1495) }), clearTimeout(r);
  });
}
let Lt = [];
(async function() {
  var x, t, n, e, r, s;
  const o = a;
  if (typeof gradioApp == o(455)) {
    try {
      const i = (t = (x = window.comfyAPI) == null ? void 0 : x[o(2621)]) == null ? void 0 : t[o(2621)], c = (e = (n = window[o(1912)]) == null ? void 0 : n.ui) == null ? void 0 : e[o(279)], u = (s = (r = window[o(1912)]) == null ? void 0 : r[o(1212)]) == null ? void 0 : s[o(1212)];
      if (!i || !u || !c) throw new Error("comfyAPI is not initialized, maybe comfyUI is too old");
      await Gc(), await vs(), await Jc(i, u, c), import(o(815))[o(2278)]((d) => {
        d[o(779)](ex, 2);
      });
    } catch (i) {
      Lt.push(i[o(2383)] || i[o(2354)] || i);
    }
    await new Promise((i) => setTimeout(i, 2e3)), Lt.length && console[o(443)](Lt[0]);
  }
})();
