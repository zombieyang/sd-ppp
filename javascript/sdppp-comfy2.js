var qs = Object.defineProperty;
var Os = (i, e, t) => e in i ? qs(i, e, { enumerable: !0, configurable: !0, writable: !0, value: t }) : i[e] = t;
var d0 = (i, e, t) => Os(i, typeof e != "symbol" ? e + "" : e, t);
const n = B;
(function(i, e) {
  const t = B, a = i();
  for (; ; )
    try {
      if (parseInt(t(2386)) / 1 + parseInt(t(2130)) / 2 + -parseInt(t(629)) / 3 + -parseInt(t(1981)) / 4 + -parseInt(t(1358)) / 5 * (-parseInt(t(874)) / 6) + parseInt(t(841)) / 7 + -parseInt(t(1577)) / 8 === e) break;
      a.push(a.shift());
    } catch {
      a.push(a.shift());
    }
})(Ie, 751307);
const R0 = window.comfyAPI[n(1517)][n(1517)];
window.comfyAPI.ui.$el;
const Ax = window.comfyAPI[n(1697)].api;
class As {
  constructor(e) {
    d0(this, "definition");
    const t = n;
    this[t(1596)] = e;
    const a = this.validate();
    if (!a.valid) throw new Error(t(2015) + a[t(1418)][t(2573)](", "));
  }
  [n(2481)]() {
    const e = n, t = [];
    (!this[e(1596)][e(892)] || Object[e(2278)](this.definition[e(892)])[e(1200)] === 0) && t[e(818)](e(996));
    for (const [x, r] of this[e(1596)].edges)
      !this[e(1596)][e(892)][x] && t[e(818)](e(2385) + x), !this.definition[e(892)][r] && t[e(818)](e(1940) + r);
    const a = this[e(1273)]();
    return !a[e(1954)] && t.push(...a[e(1418)]), { valid: t[e(1200)] === 0, errors: t };
  }
  [n(1641)]() {
    const e = n, t = /* @__PURE__ */ new Map();
    for (const a of Object.keys(this.definition.nodes))
      t[e(510)](a, []);
    for (const [a, x] of this[e(1596)][e(1028)]) {
      const r = t.get(a) || [];
      r[e(818)](x), t.set(a, r);
    }
    return t;
  }
  [n(1273)]() {
    const e = n, t = [], a = /* @__PURE__ */ new Set(), x = /* @__PURE__ */ new Set(), r = this[e(1641)](), s = (o, c) => {
      const d = e;
      if (x[d(2333)](o)) {
        const f = c[d(2170)](o), l = c.slice(f)[d(2699)](o);
        return t[d(818)](d(1405) + l[d(2573)](d(1983))), !0;
      }
      if (a[d(2333)](o)) return !1;
      a[d(2295)](o), x[d(2295)](o);
      const u = r[d(1261)](o) || [];
      for (const f of u)
        if (s(f, [...c, o])) return !0;
      return x.delete(o), !1;
    };
    for (const o of Object[e(2278)](this.definition[e(892)]))
      !a.has(o) && s(o, []);
    return { valid: t[e(1200)] === 0, errors: t };
  }
  [n(1147)]() {
    const e = n, t = /* @__PURE__ */ new Map();
    for (const a of Object[e(2278)](this.definition[e(892)]))
      t.set(a, []);
    for (const [a, x] of this.definition[e(1028)]) {
      const r = t[e(1261)](a) || [];
      r.push(x), t[e(510)](a, r);
      const s = t.get(x) || [];
      s[e(818)](a), t[e(510)](x, s);
    }
    return t;
  }
  [n(1361)](e) {
    const t = n;
    return this[t(1147)]()[t(1261)](e) || [];
  }
  [n(2369)](e) {
    const t = n;
    return this[t(1596)][t(892)][e];
  }
  [n(2718)]() {
    const e = n;
    return Object[e(2278)](this[e(1596)][e(892)]);
  }
  [n(2145)](e, t) {
    const a = n;
    return this[a(1596)][a(1028)][a(2703)](([x, r]) => x === e && r === t || x === t && r === e);
  }
  findPath(e, t) {
    const a = n;
    if (e === t) return [e];
    const x = this[a(1147)](), r = [{ nodeId: e, path: [e] }], s = /* @__PURE__ */ new Set();
    for (; r.length > 0; ) {
      const { nodeId: o, path: c } = r[a(2621)]();
      if (s[a(2333)](o)) continue;
      if (s[a(2295)](o), o === t) return c;
      const d = x[a(1261)](o) || [];
      for (const u of d)
        !s[a(2333)](u) && r[a(818)]({ nodeId: u, path: [...c, u] });
    }
    return null;
  }
  [n(1998)](e, t) {
    return this[n(605)](e, t) !== null;
  }
  [n(1693)]() {
    return { ...this.definition };
  }
}
const br = (i) => {
  let e;
  const t = /* @__PURE__ */ new Set(), a = (d, u) => {
    const f = B, l = typeof d === f(1342) ? d(e) : d;
    if (!Object.is(l, e)) {
      const g = e;
      e = u ?? (typeof l != "object" || l === null) ? l : Object.assign({}, e, l), t[f(1238)]((h) => h(e, g));
    }
  }, x = () => e, r = () => c, s = (d) => {
    const u = B;
    return t[u(2295)](d), () => t[u(2653)](d);
  }, o = { setState: a, getState: x, getInitialState: r, subscribe: s }, c = e = i(a, x, o);
  return o;
}, Ts = (i) => i ? br(i) : br;
var F0;
(function(i) {
  const e = n;
  i[e(1088)] = (r) => {
  };
  function t(r) {
  }
  i[e(1270)] = t;
  function a(r) {
    throw new Error();
  }
  i[e(920)] = a, i.arrayToEnum = (r) => {
    const s = {};
    for (const o of r)
      s[o] = o;
    return s;
  }, i[e(1170)] = (r) => {
    const s = e, o = i.objectKeys(r)[s(893)]((d) => typeof r[r[d]] != "number"), c = {};
    for (const d of o)
      c[d] = r[d];
    return i[s(505)](c);
  }, i[e(505)] = (r) => {
    const s = e;
    return i[s(765)](r)[s(2404)](function(o) {
      return r[o];
    });
  }, i[e(765)] = typeof Object[e(2278)] === e(1342) ? (r) => Object[e(2278)](r) : (r) => {
    const s = e, o = [];
    for (const c in r)
      Object[s(1166)][s(2452)][s(2518)](r, c) && o[s(818)](c);
    return o;
  }, i[e(714)] = (r, s) => {
    for (const o of r)
      if (s(o)) return o;
  }, i[e(787)] = typeof Number.isInteger === e(1342) ? (r) => Number.isInteger(r) : (r) => typeof r == "number" && Number[e(1718)](r) && Math[e(1332)](r) === r;
  function x(r, s = " | ") {
    const o = e;
    return r[o(2404)]((c) => typeof c == "string" ? "'" + c + "'" : c)[o(2573)](s);
  }
  i[e(827)] = x, i[e(1257)] = (r, s) => {
    const o = e;
    return typeof s === o(1323) ? s[o(879)]() : s;
  };
})(F0 || (F0 = {}));
var wr;
(function(i) {
  i.mergeShapes = (e, t) => ({ ...e, ...t });
})(wr || (wr = {}));
const _ = F0[n(1821)]([n(923), n(946), n(2074), "integer", n(1962), n(958), n(1633), "bigint", n(689), n(1342), "undefined", n(2382), n(1196), n(2437), "unknown", n(1001), n(849), n(1863), n(2404), n(510)]), Ex = (i) => {
  const e = n;
  switch (typeof i) {
    case "undefined":
      return _[e(2634)];
    case "string":
      return _[e(923)];
    case e(2074):
      return Number[e(1584)](i) ? _[e(946)] : _[e(2074)];
    case e(958):
      return _.boolean;
    case e(1342):
      return _.function;
    case "bigint":
      return _[e(1323)];
    case e(689):
      return _[e(689)];
    case e(2437):
      return Array[e(2344)](i) ? _[e(1196)] : i === null ? _[e(2382)] : i.then && typeof i.then === e(1342) && i[e(641)] && typeof i[e(641)] === e(1342) ? _[e(1001)] : typeof Map < "u" && i instanceof Map ? _[e(2404)] : typeof Set < "u" && i instanceof Set ? _.set : typeof Date !== e(2634) && i instanceof Date ? _.date : _[e(2437)];
    default:
      return _[e(863)];
  }
}, K = F0.arrayToEnum([n(2600), n(1836), n(938), n(2342), n(2161), "invalid_enum_value", "unrecognized_keys", n(2158), "invalid_return_type", n(1769), "invalid_string", n(2046), n(1151), n(658), n(1894), n(977)]);
class Px extends Error {
  get errors() {
    return this[n(2121)];
  }
  constructor(e) {
    const t = n;
    super(), this.issues = [], this[t(715)] = (x) => {
      const r = t;
      this[r(2121)] = [...this.issues, x];
    }, this.addIssues = (x = []) => {
      const r = t;
      this[r(2121)] = [...this.issues, ...x];
    };
    const a = new.target[t(1166)];
    Object[t(618)] ? Object[t(618)](this, a) : this[t(769)] = a, this[t(2200)] = t(783), this.issues = e;
  }
  [n(822)](e) {
    const t = e || function(r) {
      return r[B(2353)];
    }, a = { _errors: [] }, x = (r) => {
      const s = B;
      for (const o of r[s(2121)])
        if (o.code === "invalid_union") o[s(1291)].map(x);
        else if (o[s(1204)] === s(589)) x(o.returnTypeError);
        else if (o[s(1204)] === "invalid_arguments") x(o[s(1794)]);
        else if (o[s(1728)][s(1200)] === 0) a[s(2570)].push(t(o));
        else {
          let c = a, d = 0;
          for (; d < o[s(1728)][s(1200)]; ) {
            const u = o[s(1728)][d];
            d === o[s(1728)].length - 1 ? (c[u] = c[u] || { _errors: [] }, c[u][s(2570)][s(818)](t(o))) : c[u] = c[u] || { _errors: [] }, c = c[u], d++;
          }
        }
    };
    return x(this), a;
  }
  static [n(1386)](e) {
    if (!(e instanceof Px)) throw new Error("Not a ZodError: " + e);
  }
  [n(879)]() {
    return this[n(2353)];
  }
  get [n(2353)]() {
    const e = n;
    return JSON[e(2301)](this[e(2121)], F0[e(1257)], 2);
  }
  get [n(2623)]() {
    return this[n(2121)].length === 0;
  }
  [n(2531)](e = (t) => t[n(2353)]) {
    const t = n, a = {}, x = [];
    for (const r of this[t(2121)])
      if (r[t(1728)].length > 0) {
        const s = r[t(1728)][0];
        a[s] = a[s] || [], a[s].push(e(r));
      } else x[t(818)](e(r));
    return { formErrors: x, fieldErrors: a };
  }
  get formErrors() {
    return this.flatten();
  }
}
Px.create = (i) => new Px(i);
const Tt = (i, e) => {
  const t = n;
  let a;
  switch (i[t(1204)]) {
    case K[t(2600)]:
      i[t(2696)] === _[t(2634)] ? a = "Required" : a = t(506) + i.expected + ", received " + i[t(2696)];
      break;
    case K[t(1836)]:
      a = "Invalid literal value, expected " + JSON[t(2301)](i[t(2060)], F0[t(1257)]);
      break;
    case K[t(699)]:
      a = "Unrecognized key(s) in object: " + F0[t(827)](i[t(2278)], ", ");
      break;
    case K[t(2342)]:
      a = "Invalid input";
      break;
    case K[t(2161)]:
      a = t(2560) + F0[t(827)](i.options);
      break;
    case K.invalid_enum_value:
      a = t(2348) + F0[t(827)](i[t(2687)]) + t(1943) + i[t(2696)] + "'";
      break;
    case K[t(2158)]:
      a = t(2007);
      break;
    case K.invalid_return_type:
      a = t(1712);
      break;
    case K[t(1769)]:
      a = t(1920);
      break;
    case K[t(2125)]:
      typeof i[t(570)] === t(2437) ? t(1958) in i.validation ? (a = t(2397) + i[t(570)].includes + '"', typeof i[t(570)][t(1412)] === t(2074) && (a = a + " at one or more positions greater than or equal to " + i.validation.position)) : t(1817) in i[t(570)] ? a = t(520) + i[t(570)][t(1817)] + '"' : "endsWith" in i.validation ? a = t(2643) + i.validation.endsWith + '"' : F0[t(920)](i[t(570)]) : i[t(570)] !== t(1131) ? a = t(993) + i[t(570)] : a = "Invalid";
      break;
    case K[t(2046)]:
      i[t(2426)] === "array" ? a = t(2029) + (i[t(2175)] ? "exactly" : i.inclusive ? t(1542) : t(2635)) + " " + i[t(959)] + " element(s)" : i[t(2426)] === t(923) ? a = t(1399) + (i.exact ? "exactly" : i[t(2427)] ? t(1542) : t(2561)) + " " + i[t(959)] + t(2425) : i[t(2426)] === t(2074) ? a = t(620) + (i[t(2175)] ? t(925) : i[t(2427)] ? t(1329) : t(1961)) + i[t(959)] : i[t(2426)] === t(1323) ? a = t(620) + (i[t(2175)] ? "exactly equal to " : i[t(2427)] ? t(1329) : "greater than ") + i[t(959)] : i.type === t(1633) ? a = t(1612) + (i[t(2175)] ? t(925) : i[t(2427)] ? "greater than or equal to " : t(1961)) + new Date(Number(i[t(959)])) : a = t(1581);
      break;
    case K[t(1151)]:
      i.type === "array" ? a = "Array must contain " + (i.exact ? t(485) : i[t(2427)] ? t(2345) : "less than") + " " + i[t(756)] + t(1145) : i[t(2426)] === t(923) ? a = t(1399) + (i[t(2175)] ? t(485) : i[t(2427)] ? t(2345) : "under") + " " + i[t(756)] + t(2425) : i[t(2426)] === t(2074) ? a = "Number must be " + (i[t(2175)] ? t(485) : i.inclusive ? t(508) : t(2177)) + " " + i[t(756)] : i.type === t(1323) ? a = t(583) + (i[t(2175)] ? t(485) : i[t(2427)] ? t(508) : "less than") + " " + i.maximum : i[t(2426)] === t(1633) ? a = t(1612) + (i[t(2175)] ? t(485) : i[t(2427)] ? "smaller than or equal to" : t(1908)) + " " + new Date(Number(i[t(756)])) : a = t(1581);
      break;
    case K.custom:
      a = t(1581);
      break;
    case K[t(658)]:
      a = t(2124);
      break;
    case K[t(1894)]:
      a = t(2605) + i[t(500)];
      break;
    case K[t(977)]:
      a = t(1180);
      break;
    default:
      a = e[t(2183)], F0[t(920)](i);
  }
  return { message: a };
};
let Ds = Tt;
function js() {
  return Ds;
}
const Ms = (i) => {
  const e = n, { data: t, path: a, errorMaps: x, issueData: r } = i, s = [...a, ...r[e(1728)] || []], o = { ...r, path: s };
  if (r[e(2353)] !== void 0) return { ...r, path: s, message: r[e(2353)] };
  let c = "";
  const d = x[e(893)]((u) => !!u)[e(2602)]()[e(1725)]();
  for (const u of d)
    c = u(o, { data: t, defaultError: c })[e(2353)];
  return { ...r, path: s, message: c };
};
function X(i, e) {
  const t = n, a = js(), x = Ms({ issueData: e, data: i[t(726)], path: i[t(1728)], errorMaps: [i[t(2140)][t(568)], i[t(1865)], a, a === Tt ? void 0 : Tt].filter((r) => !!r) });
  i.common[t(2121)][t(818)](x);
}
class xx {
  constructor() {
    const e = n;
    this[e(2391)] = "valid";
  }
  [n(2246)]() {
    const e = n;
    this[e(2391)] === e(1954) && (this[e(2391)] = e(2246));
  }
  [n(2480)]() {
    const e = n;
    this[e(2391)] !== "aborted" && (this[e(2391)] = e(1786));
  }
  static [n(896)](e, t) {
    const a = n, x = [];
    for (const r of t) {
      if (r[a(1713)] === a(1786)) return h0;
      r[a(1713)] === "dirty" && e.dirty(), x[a(818)](r[a(2391)]);
    }
    return { status: e[a(2391)], value: x };
  }
  static async [n(1045)](e, t) {
    const a = n, x = [];
    for (const r of t) {
      const s = await r[a(1232)], o = await r[a(2391)];
      x[a(818)]({ key: s, value: o });
    }
    return xx[a(516)](e, x);
  }
  static [n(516)](e, t) {
    const a = n, x = {};
    for (const r of t) {
      const { key: s, value: o } = r;
      if (s[a(1713)] === a(1786) || o[a(1713)] === a(1786)) return h0;
      s[a(1713)] === a(2246) && e[a(2246)](), o.status === a(2246) && e[a(2246)](), s[a(2391)] !== "__proto__" && (typeof o[a(2391)] < "u" || r.alwaysSet) && (x[s.value] = o[a(2391)]);
    }
    return { status: e[a(2391)], value: x };
  }
}
const h0 = Object.freeze({ status: n(1786) }), Yx = (i) => ({ status: "dirty", value: i }), rx = (i) => ({ status: n(1954), value: i }), Sr = (i) => i[n(1713)] === n(1786), Pr = (i) => i.status === n(2246), Vx = (i) => i[n(1713)] === "valid", ge = (i) => typeof Promise < "u" && i instanceof Promise;
var e0;
(function(i) {
  const e = n;
  i.errToObj = (t) => typeof t === e(923) ? { message: t } : t || {}, i[e(879)] = (t) => typeof t == "string" ? t : t == null ? void 0 : t[e(2353)];
})(e0 || (e0 = {}));
class px {
  constructor(e, t, a, x) {
    const r = n;
    this[r(681)] = [], this[r(548)] = e, this.data = t, this._path = a, this[r(2290)] = x;
  }
  get [n(1728)]() {
    const e = n;
    return !this[e(681)][e(1200)] && (Array[e(2344)](this._key) ? this._cachedPath[e(818)](...this[e(1710)], ...this[e(2290)]) : this[e(681)][e(818)](...this[e(1710)], this[e(2290)])), this._cachedPath;
  }
}
const kr = (i, e) => {
  const t = n;
  if (Vx(e)) return { success: !0, data: e[t(2391)] };
  if (!i[t(2140)][t(2121)][t(1200)]) throw new Error("Validation failed but no issues detected.");
  return { success: !1, get error() {
    const a = t;
    if (this[a(2661)]) return this[a(2661)];
    const x = new Px(i[a(2140)][a(2121)]);
    return this[a(2661)] = x, this[a(2661)];
  } };
};
function y0(i) {
  const e = n;
  if (!i) return {};
  const { errorMap: t, invalid_type_error: a, required_error: x, description: r } = i;
  if (t && (a || x)) throw new Error(e(1302));
  return t ? { errorMap: t, description: r } : { errorMap: (o, c) => {
    const d = e, { message: u } = i;
    return o[d(1204)] === d(533) ? { message: u ?? c[d(2183)] } : typeof c[d(726)] === d(2634) ? { message: u ?? x ?? c[d(2183)] } : o.code !== d(2600) ? { message: c[d(2183)] } : { message: u ?? a ?? c[d(2183)] };
  }, description: r };
}
class k0 {
  get [n(2256)]() {
    const e = n;
    return this[e(1423)][e(2256)];
  }
  [n(2182)](e) {
    return Ex(e[n(726)]);
  }
  [n(1892)](e, t) {
    const a = n;
    return t || { common: e[a(548)][a(2140)], data: e.data, parsedType: Ex(e.data), schemaErrorMap: this[a(1423)][a(798)], path: e[a(1728)], parent: e[a(548)] };
  }
  [n(512)](e) {
    const t = n;
    return { status: new xx(), ctx: { common: e[t(548)][t(2140)], data: e[t(726)], parsedType: Ex(e[t(726)]), schemaErrorMap: this[t(1423)][t(798)], path: e[t(1728)], parent: e[t(548)] } };
  }
  _parseSync(e) {
    const t = n, a = this[t(1586)](e);
    if (ge(a)) throw new Error(t(1081));
    return a;
  }
  [n(912)](e) {
    const t = n, a = this[t(1586)](e);
    return Promise[t(1987)](a);
  }
  [n(2156)](e, t) {
    const a = n, x = this[a(2732)](e, t);
    if (x[a(2288)]) return x[a(726)];
    throw x.error;
  }
  safeParse(e, t) {
    const a = n, x = { common: { issues: [], async: (t == null ? void 0 : t[a(1721)]) ?? !1, contextualErrorMap: t == null ? void 0 : t[a(798)] }, path: (t == null ? void 0 : t[a(1728)]) || [], schemaErrorMap: this[a(1423)].errorMap, parent: null, data: e, parsedType: Ex(e) }, r = this[a(1099)]({ data: e, path: x.path, parent: x });
    return kr(x, r);
  }
  [n(1903)](e) {
    var x, r;
    const t = n, a = { common: { issues: [], async: !!this["~standard"][t(1721)] }, path: [], schemaErrorMap: this._def[t(798)], parent: null, data: e, parsedType: Ex(e) };
    if (!this[t(2685)][t(1721)]) try {
      const s = this[t(1099)]({ data: e, path: [], parent: a });
      return Vx(s) ? { value: s[t(2391)] } : { issues: a[t(2140)][t(2121)] };
    } catch (s) {
      (r = (x = s == null ? void 0 : s.message) == null ? void 0 : x.toLowerCase()) != null && r.includes(t(1515)) && (this[t(2685)][t(1721)] = !0), a.common = { issues: [], async: !0 };
    }
    return this[t(912)]({ data: e, path: [], parent: a })[t(1413)]((s) => Vx(s) ? { value: s[t(2391)] } : { issues: a.common[t(2121)] });
  }
  async [n(790)](e, t) {
    const a = n, x = await this[a(646)](e, t);
    if (x[a(2288)]) return x[a(726)];
    throw x[a(2389)];
  }
  async [n(646)](e, t) {
    const a = n, x = { common: { issues: [], contextualErrorMap: t == null ? void 0 : t[a(798)], async: !0 }, path: (t == null ? void 0 : t[a(1728)]) || [], schemaErrorMap: this._def[a(798)], parent: null, data: e, parsedType: Ex(e) }, r = this[a(1586)]({ data: e, path: x[a(1728)], parent: x }), s = await (ge(r) ? r : Promise[a(1987)](r));
    return kr(x, s);
  }
  [n(1628)](e, t) {
    const a = n, x = (r) => typeof t === B(923) || typeof t > "u" ? { message: t } : typeof t == "function" ? t(r) : t;
    return this[a(2262)]((r, s) => {
      const o = a, c = e(r), d = () => s[o(715)]({ code: K[o(938)], ...x(r) });
      return typeof Promise < "u" && c instanceof Promise ? c[o(1413)]((u) => u ? !0 : (d(), !1)) : c ? !0 : (d(), !1);
    });
  }
  [n(2508)](e, t) {
    return this._refinement((a, x) => {
      const r = B;
      return e(a) ? !0 : (x[r(715)](typeof t == "function" ? t(a, x) : t), !1);
    });
  }
  [n(2262)](e) {
    const t = n;
    return new qx({ schema: this, typeName: p0[t(2457)], effect: { type: "refinement", refinement: e } });
  }
  superRefine(e) {
    return this[n(2262)](e);
  }
  constructor(e) {
    const t = n;
    this[t(760)] = this[t(646)], this[t(1423)] = e, this[t(2156)] = this[t(2156)].bind(this), this.safeParse = this.safeParse[t(1571)](this), this[t(790)] = this[t(790)][t(1571)](this), this[t(646)] = this[t(646)].bind(this), this[t(760)] = this.spa[t(1571)](this), this[t(1628)] = this[t(1628)].bind(this), this[t(2508)] = this.refinement[t(1571)](this), this[t(2213)] = this.superRefine[t(1571)](this), this[t(1360)] = this[t(1360)][t(1571)](this), this[t(981)] = this[t(981)][t(1571)](this), this[t(1282)] = this[t(1282)][t(1571)](this), this[t(1196)] = this.array[t(1571)](this), this[t(1001)] = this[t(1001)].bind(this), this.or = this.or.bind(this), this[t(2374)] = this[t(2374)][t(1571)](this), this[t(1110)] = this[t(1110)][t(1571)](this), this[t(610)] = this.brand.bind(this), this[t(1658)] = this[t(1658)].bind(this), this[t(641)] = this[t(641)][t(1571)](this), this[t(2592)] = this[t(2592)][t(1571)](this), this[t(1112)] = this.pipe[t(1571)](this), this[t(691)] = this[t(691)][t(1571)](this), this[t(2638)] = this[t(2638)].bind(this), this.isOptional = this.isOptional[t(1571)](this), this[t(2685)] = { version: 1, vendor: t(2373), validate: (a) => this[t(1903)](a) };
  }
  [n(1360)]() {
    const e = n;
    return Sx[e(1108)](this, this[e(1423)]);
  }
  nullable() {
    const e = n;
    return jx[e(1108)](this, this[e(1423)]);
  }
  [n(1282)]() {
    const e = n;
    return this[e(981)]()[e(1360)]();
  }
  [n(1196)]() {
    return hx[n(1108)](this);
  }
  [n(1001)]() {
    const e = n;
    return Pe[e(1108)](this, this[e(1423)]);
  }
  or(e) {
    const t = n;
    return ye[t(1108)]([this, e], this[t(1423)]);
  }
  [n(2374)](e) {
    const t = n;
    return be[t(1108)](this, e, this[t(1423)]);
  }
  [n(1110)](e) {
    const t = n;
    return new qx({ ...y0(this[t(1423)]), schema: this, typeName: p0[t(2457)], effect: { type: t(1110), transform: e } });
  }
  default(e) {
    const t = n, a = typeof e == "function" ? e : () => e;
    return new ke({ ...y0(this[t(1423)]), innerType: this, defaultValue: a, typeName: p0[t(2510)] });
  }
  [n(610)]() {
    const e = n;
    return new jn({ typeName: p0.ZodBranded, type: this, ...y0(this[e(1423)]) });
  }
  catch(e) {
    const t = n, a = typeof e === t(1342) ? e : () => e;
    return new Ee({ ...y0(this._def), innerType: this, catchValue: a, typeName: p0.ZodCatch });
  }
  [n(2592)](e) {
    const t = n, a = this[t(2331)];
    return new a({ ...this[t(1423)], description: e });
  }
  [n(1112)](e) {
    return _t.create(this, e);
  }
  [n(691)]() {
    return Ce[n(1108)](this);
  }
  isOptional() {
    return this.safeParse(void 0).success;
  }
  [n(2638)]() {
    const e = n;
    return this[e(2732)](null)[e(2288)];
  }
}
const Ls = /^c[^\s-]{8,}$/i, $s = /^[0-9a-z]+$/, zs = /^[0-9A-HJKMNP-TV-Z]{26}$/i, Hs = /^[0-9a-fA-F]{8}\b-[0-9a-fA-F]{4}\b-[0-9a-fA-F]{4}\b-[0-9a-fA-F]{4}\b-[0-9a-fA-F]{12}$/i, Us = /^[a-z0-9_-]{21}$/i, Vs = /^[A-Za-z0-9-_]+\.[A-Za-z0-9-_]+\.[A-Za-z0-9-_]*$/, Zs = /^[-+]?P(?!$)(?:(?:[-+]?\d+Y)|(?:[-+]?\d+[.,]\d+Y$))?(?:(?:[-+]?\d+M)|(?:[-+]?\d+[.,]\d+M$))?(?:(?:[-+]?\d+W)|(?:[-+]?\d+[.,]\d+W$))?(?:(?:[-+]?\d+D)|(?:[-+]?\d+[.,]\d+D$))?(?:T(?=[\d+-])(?:(?:[-+]?\d+H)|(?:[-+]?\d+[.,]\d+H$))?(?:(?:[-+]?\d+M)|(?:[-+]?\d+[.,]\d+M$))?(?:[-+]?\d+(?:[.,]\d+)?S)?)??$/, Ws = /^(?!\.)(?!.*\.\.)([A-Z0-9_'+\-\.]*)[A-Z0-9_+-]@([A-Z0-9][A-Z0-9\-]*\.)+[A-Z]{2,}$/i, Bs = n(683);
let ze;
const Ks = /^(?:(?:25[0-5]|2[0-4][0-9]|1[0-9][0-9]|[1-9][0-9]|[0-9])\.){3}(?:25[0-5]|2[0-4][0-9]|1[0-9][0-9]|[1-9][0-9]|[0-9])$/, Js = /^(?:(?:25[0-5]|2[0-4][0-9]|1[0-9][0-9]|[1-9][0-9]|[0-9])\.){3}(?:25[0-5]|2[0-4][0-9]|1[0-9][0-9]|[1-9][0-9]|[0-9])\/(3[0-2]|[12]?[0-9])$/, Qs = /^(([0-9a-fA-F]{1,4}:){7,7}[0-9a-fA-F]{1,4}|([0-9a-fA-F]{1,4}:){1,7}:|([0-9a-fA-F]{1,4}:){1,6}:[0-9a-fA-F]{1,4}|([0-9a-fA-F]{1,4}:){1,5}(:[0-9a-fA-F]{1,4}){1,2}|([0-9a-fA-F]{1,4}:){1,4}(:[0-9a-fA-F]{1,4}){1,3}|([0-9a-fA-F]{1,4}:){1,3}(:[0-9a-fA-F]{1,4}){1,4}|([0-9a-fA-F]{1,4}:){1,2}(:[0-9a-fA-F]{1,4}){1,5}|[0-9a-fA-F]{1,4}:((:[0-9a-fA-F]{1,4}){1,6})|:((:[0-9a-fA-F]{1,4}){1,7}|:)|fe80:(:[0-9a-fA-F]{0,4}){0,4}%[0-9a-zA-Z]{1,}|::(ffff(:0{1,4}){0,1}:){0,1}((25[0-5]|(2[0-4]|1{0,1}[0-9]){0,1}[0-9])\.){3,3}(25[0-5]|(2[0-4]|1{0,1}[0-9]){0,1}[0-9])|([0-9a-fA-F]{1,4}:){1,4}:((25[0-5]|(2[0-4]|1{0,1}[0-9]){0,1}[0-9])\.){3,3}(25[0-5]|(2[0-4]|1{0,1}[0-9]){0,1}[0-9]))$/, Gs = /^(([0-9a-fA-F]{1,4}:){7,7}[0-9a-fA-F]{1,4}|([0-9a-fA-F]{1,4}:){1,7}:|([0-9a-fA-F]{1,4}:){1,6}:[0-9a-fA-F]{1,4}|([0-9a-fA-F]{1,4}:){1,5}(:[0-9a-fA-F]{1,4}){1,2}|([0-9a-fA-F]{1,4}:){1,4}(:[0-9a-fA-F]{1,4}){1,3}|([0-9a-fA-F]{1,4}:){1,3}(:[0-9a-fA-F]{1,4}){1,4}|([0-9a-fA-F]{1,4}:){1,2}(:[0-9a-fA-F]{1,4}){1,5}|[0-9a-fA-F]{1,4}:((:[0-9a-fA-F]{1,4}){1,6})|:((:[0-9a-fA-F]{1,4}){1,7}|:)|fe80:(:[0-9a-fA-F]{0,4}){0,4}%[0-9a-zA-Z]{1,}|::(ffff(:0{1,4}){0,1}:){0,1}((25[0-5]|(2[0-4]|1{0,1}[0-9]){0,1}[0-9])\.){3,3}(25[0-5]|(2[0-4]|1{0,1}[0-9]){0,1}[0-9])|([0-9a-fA-F]{1,4}:){1,4}:((25[0-5]|(2[0-4]|1{0,1}[0-9]){0,1}[0-9])\.){3,3}(25[0-5]|(2[0-4]|1{0,1}[0-9]){0,1}[0-9]))\/(12[0-8]|1[01][0-9]|[1-9]?[0-9])$/, Ys = /^([0-9a-zA-Z+/]{4})*(([0-9a-zA-Z+/]{2}==)|([0-9a-zA-Z+/]{3}=))?$/, Xs = /^([0-9a-zA-Z-_]{4})*(([0-9a-zA-Z-_]{2}(==)?)|([0-9a-zA-Z-_]{3}(=)?))?$/, An = n(1996), _s = new RegExp("^" + An + "$");
function Tn(i) {
  const e = n;
  let t = e(2286);
  i[e(1246)] ? t = t + e(1160) + i[e(1246)] + "}" : i[e(1246)] == null && (t = t + e(1575));
  const a = i[e(1246)] ? "+" : "?";
  return e(604) + t + ")" + a;
}
function xi(i) {
  return new RegExp("^" + Tn(i) + "$");
}
function ei(i) {
  const e = n;
  let t = An + "T" + Tn(i);
  const a = [];
  return a[e(818)](i[e(2412)] ? "Z?" : "Z"), i[e(926)] && a[e(818)](e(2134)), t = t + "(" + a[e(2573)]("|") + ")", new RegExp("^" + t + "$");
}
function ti(i, e) {
  return !!((e === "v4" || !e) && Ks[n(1313)](i) || (e === "v6" || !e) && Qs.test(i));
}
function ri(i, e) {
  const t = n;
  if (!Vs[t(1313)](i)) return !1;
  try {
    const [a] = i.split(".");
    if (!a) return !1;
    const x = a.replace(/-/g, "+").replace(/_/g, "/")[t(1990)](a[t(1200)] + (4 - a.length % 4) % 4, "="), r = JSON[t(2156)](atob(x));
    return !(typeof r !== t(2437) || r === null || "typ" in r && (r == null ? void 0 : r[t(1424)]) !== t(1703) || !r[t(1984)] || e && r[t(1984)] !== e);
  } catch {
    return !1;
  }
}
function ai(i, e) {
  const t = n;
  return !!((e === "v4" || !e) && Js[t(1313)](i) || (e === "v6" || !e) && Gs[t(1313)](i));
}
class wx extends k0 {
  [n(1586)](e) {
    const t = n;
    if (this[t(1423)][t(858)] && (e.data = String(e[t(726)])), this[t(2182)](e) !== _[t(923)]) {
      const s = this[t(1892)](e);
      return X(s, { code: K[t(2600)], expected: _[t(923)], received: s[t(2350)] }), h0;
    }
    const x = new xx();
    let r;
    for (const s of this[t(1423)][t(2277)])
      if (s[t(651)] === t(606)) e[t(726)][t(1200)] < s[t(2391)] && (r = this[t(1892)](e, r), X(r, { code: K[t(2046)], minimum: s[t(2391)], type: t(923), inclusive: !0, exact: !1, message: s[t(2353)] }), x[t(2246)]());
      else if (s[t(651)] === t(599)) e[t(726)].length > s[t(2391)] && (r = this._getOrReturnCtx(e, r), X(r, { code: K[t(1151)], maximum: s.value, type: t(923), inclusive: !0, exact: !1, message: s[t(2353)] }), x[t(2246)]());
      else if (s.kind === "length") {
        const o = e.data[t(1200)] > s[t(2391)], c = e[t(726)][t(1200)] < s[t(2391)];
        (o || c) && (r = this[t(1892)](e, r), o ? X(r, { code: K[t(1151)], maximum: s.value, type: t(923), inclusive: !0, exact: !0, message: s[t(2353)] }) : c && X(r, { code: K[t(2046)], minimum: s.value, type: "string", inclusive: !0, exact: !0, message: s[t(2353)] }), x[t(2246)]());
      } else if (s[t(651)] === t(1506)) !Ws[t(1313)](e[t(726)]) && (r = this[t(1892)](e, r), X(r, { validation: t(1506), code: K.invalid_string, message: s[t(2353)] }), x[t(2246)]());
      else if (s[t(651)] === t(1309)) !ze && (ze = new RegExp(Bs, "u")), !ze[t(1313)](e.data) && (r = this._getOrReturnCtx(e, r), X(r, { validation: t(1309), code: K[t(2125)], message: s[t(2353)] }), x.dirty());
      else if (s[t(651)] === t(2035)) !Hs[t(1313)](e[t(726)]) && (r = this[t(1892)](e, r), X(r, { validation: t(2035), code: K.invalid_string, message: s[t(2353)] }), x[t(2246)]());
      else if (s.kind === t(2517)) !Us.test(e[t(726)]) && (r = this[t(1892)](e, r), X(r, { validation: t(2517), code: K.invalid_string, message: s.message }), x[t(2246)]());
      else if (s[t(651)] === "cuid") !Ls[t(1313)](e.data) && (r = this[t(1892)](e, r), X(r, { validation: t(517), code: K[t(2125)], message: s[t(2353)] }), x[t(2246)]());
      else if (s[t(651)] === t(703)) !$s[t(1313)](e[t(726)]) && (r = this[t(1892)](e, r), X(r, { validation: t(703), code: K.invalid_string, message: s[t(2353)] }), x[t(2246)]());
      else if (s[t(651)] === t(1215)) !zs[t(1313)](e[t(726)]) && (r = this[t(1892)](e, r), X(r, { validation: t(1215), code: K.invalid_string, message: s[t(2353)] }), x[t(2246)]());
      else if (s[t(651)] === "url") try {
        new URL(e[t(726)]);
      } catch {
        r = this._getOrReturnCtx(e, r), X(r, { validation: t(2746), code: K[t(2125)], message: s[t(2353)] }), x[t(2246)]();
      }
      else
        s[t(651)] === t(1131) ? (s[t(1131)].lastIndex = 0, !s[t(1131)].test(e[t(726)]) && (r = this._getOrReturnCtx(e, r), X(r, { validation: "regex", code: K[t(2125)], message: s[t(2353)] }), x[t(2246)]())) : s[t(651)] === t(2754) ? e.data = e[t(726)][t(2754)]() : s[t(651)] === t(1958) ? !e.data[t(1958)](s[t(2391)], s[t(1412)]) && (r = this[t(1892)](e, r), X(r, { code: K[t(2125)], validation: { includes: s[t(2391)], position: s.position }, message: s.message }), x.dirty()) : s[t(651)] === t(1466) ? e.data = e[t(726)][t(1466)]() : s[t(651)] === t(1834) ? e[t(726)] = e[t(726)].toUpperCase() : s[t(651)] === t(1817) ? !e.data[t(1817)](s[t(2391)]) && (r = this[t(1892)](e, r), X(r, { code: K[t(2125)], validation: { startsWith: s[t(2391)] }, message: s[t(2353)] }), x[t(2246)]()) : s.kind === t(2538) ? !e[t(726)][t(2538)](s[t(2391)]) && (r = this._getOrReturnCtx(e, r), X(r, { code: K[t(2125)], validation: { endsWith: s[t(2391)] }, message: s.message }), x[t(2246)]()) : s.kind === t(1089) ? !ei(s)[t(1313)](e.data) && (r = this[t(1892)](e, r), X(r, { code: K[t(2125)], validation: "datetime", message: s[t(2353)] }), x.dirty()) : s[t(651)] === t(1633) ? !_s[t(1313)](e[t(726)]) && (r = this[t(1892)](e, r), X(r, { code: K.invalid_string, validation: t(1633), message: s[t(2353)] }), x.dirty()) : s[t(651)] === "time" ? !xi(s)[t(1313)](e[t(726)]) && (r = this[t(1892)](e, r), X(r, { code: K[t(2125)], validation: t(2647), message: s[t(2353)] }), x[t(2246)]()) : s[t(651)] === t(1935) ? !Zs.test(e[t(726)]) && (r = this[t(1892)](e, r), X(r, { validation: t(1935), code: K[t(2125)], message: s[t(2353)] }), x.dirty()) : s[t(651)] === "ip" ? !ti(e[t(726)], s[t(876)]) && (r = this[t(1892)](e, r), X(r, { validation: "ip", code: K[t(2125)], message: s[t(2353)] }), x.dirty()) : s.kind === t(1801) ? !ri(e[t(726)], s.alg) && (r = this[t(1892)](e, r), X(r, { validation: t(1801), code: K[t(2125)], message: s[t(2353)] }), x[t(2246)]()) : s[t(651)] === t(2557) ? !ai(e[t(726)], s.version) && (r = this._getOrReturnCtx(e, r), X(r, { validation: "cidr", code: K.invalid_string, message: s[t(2353)] }), x[t(2246)]()) : s[t(651)] === t(2210) ? !Ys[t(1313)](e[t(726)]) && (r = this[t(1892)](e, r), X(r, { validation: t(2210), code: K.invalid_string, message: s.message }), x[t(2246)]()) : s[t(651)] === t(1805) ? !Xs.test(e[t(726)]) && (r = this._getOrReturnCtx(e, r), X(r, { validation: t(1805), code: K.invalid_string, message: s.message }), x[t(2246)]()) : F0[t(920)](s);
    return { status: x[t(2391)], value: e[t(726)] };
  }
  [n(2742)](e, t, a) {
    const x = n;
    return this.refinement((r) => e[x(1313)](r), { validation: t, code: K.invalid_string, ...e0[x(1236)](a) });
  }
  [n(2707)](e) {
    const t = n;
    return new wx({ ...this[t(1423)], checks: [...this[t(1423)][t(2277)], e] });
  }
  [n(1506)](e) {
    const t = n;
    return this[t(2707)]({ kind: t(1506), ...e0[t(1236)](e) });
  }
  url(e) {
    const t = n;
    return this._addCheck({ kind: "url", ...e0[t(1236)](e) });
  }
  [n(1309)](e) {
    const t = n;
    return this[t(2707)]({ kind: "emoji", ...e0[t(1236)](e) });
  }
  [n(2035)](e) {
    const t = n;
    return this[t(2707)]({ kind: t(2035), ...e0[t(1236)](e) });
  }
  [n(2517)](e) {
    const t = n;
    return this[t(2707)]({ kind: t(2517), ...e0.errToObj(e) });
  }
  cuid(e) {
    const t = n;
    return this[t(2707)]({ kind: t(517), ...e0[t(1236)](e) });
  }
  cuid2(e) {
    const t = n;
    return this[t(2707)]({ kind: t(703), ...e0.errToObj(e) });
  }
  [n(1215)](e) {
    const t = n;
    return this[t(2707)]({ kind: t(1215), ...e0[t(1236)](e) });
  }
  [n(2210)](e) {
    const t = n;
    return this[t(2707)]({ kind: t(2210), ...e0[t(1236)](e) });
  }
  [n(1805)](e) {
    const t = n;
    return this[t(2707)]({ kind: t(1805), ...e0[t(1236)](e) });
  }
  [n(1801)](e) {
    const t = n;
    return this[t(2707)]({ kind: t(1801), ...e0[t(1236)](e) });
  }
  ip(e) {
    const t = n;
    return this[t(2707)]({ kind: "ip", ...e0[t(1236)](e) });
  }
  [n(2557)](e) {
    const t = n;
    return this[t(2707)]({ kind: "cidr", ...e0[t(1236)](e) });
  }
  [n(1089)](e) {
    const t = n;
    return typeof e == "string" ? this[t(2707)]({ kind: t(1089), precision: null, offset: !1, local: !1, message: e }) : this._addCheck({ kind: t(1089), precision: typeof (e == null ? void 0 : e[t(1246)]) === t(2634) ? null : e == null ? void 0 : e[t(1246)], offset: (e == null ? void 0 : e[t(926)]) ?? !1, local: (e == null ? void 0 : e[t(2412)]) ?? !1, ...e0[t(1236)](e == null ? void 0 : e[t(2353)]) });
  }
  [n(1633)](e) {
    return this[n(2707)]({ kind: "date", message: e });
  }
  [n(2647)](e) {
    const t = n;
    return typeof e === t(923) ? this._addCheck({ kind: "time", precision: null, message: e }) : this[t(2707)]({ kind: t(2647), precision: typeof (e == null ? void 0 : e[t(1246)]) === t(2634) ? null : e == null ? void 0 : e[t(1246)], ...e0.errToObj(e == null ? void 0 : e[t(2353)]) });
  }
  [n(1935)](e) {
    const t = n;
    return this._addCheck({ kind: t(1935), ...e0[t(1236)](e) });
  }
  [n(1131)](e, t) {
    const a = n;
    return this._addCheck({ kind: a(1131), regex: e, ...e0[a(1236)](t) });
  }
  includes(e, t) {
    const a = n;
    return this._addCheck({ kind: a(1958), value: e, position: t == null ? void 0 : t[a(1412)], ...e0[a(1236)](t == null ? void 0 : t[a(2353)]) });
  }
  startsWith(e, t) {
    const a = n;
    return this._addCheck({ kind: a(1817), value: e, ...e0[a(1236)](t) });
  }
  endsWith(e, t) {
    const a = n;
    return this[a(2707)]({ kind: a(2538), value: e, ...e0[a(1236)](t) });
  }
  [n(606)](e, t) {
    const a = n;
    return this[a(2707)]({ kind: a(606), value: e, ...e0.errToObj(t) });
  }
  max(e, t) {
    const a = n;
    return this[a(2707)]({ kind: a(599), value: e, ...e0[a(1236)](t) });
  }
  [n(1200)](e, t) {
    const a = n;
    return this[a(2707)]({ kind: a(1200), value: e, ...e0[a(1236)](t) });
  }
  [n(670)](e) {
    const t = n;
    return this.min(1, e0[t(1236)](e));
  }
  [n(2754)]() {
    const e = n;
    return new wx({ ...this[e(1423)], checks: [...this._def[e(2277)], { kind: e(2754) }] });
  }
  [n(1466)]() {
    const e = n;
    return new wx({ ...this[e(1423)], checks: [...this._def[e(2277)], { kind: e(1466) }] });
  }
  [n(1834)]() {
    const e = n;
    return new wx({ ...this[e(1423)], checks: [...this[e(1423)][e(2277)], { kind: e(1834) }] });
  }
  get [n(1400)]() {
    const e = n;
    return !!this[e(1423)].checks[e(714)]((t) => t[e(651)] === "datetime");
  }
  get [n(2624)]() {
    const e = n;
    return !!this[e(1423)].checks[e(714)]((t) => t[e(651)] === e(1633));
  }
  get [n(1106)]() {
    const e = n;
    return !!this[e(1423)][e(2277)][e(714)]((t) => t[e(651)] === e(2647));
  }
  get [n(525)]() {
    const e = n;
    return !!this[e(1423)][e(2277)][e(714)]((t) => t[e(651)] === "duration");
  }
  get isEmail() {
    const e = n;
    return !!this._def[e(2277)].find((t) => t[e(651)] === e(1506));
  }
  get [n(559)]() {
    const e = n;
    return !!this[e(1423)].checks.find((t) => t.kind === e(2746));
  }
  get [n(2208)]() {
    const e = n;
    return !!this._def[e(2277)][e(714)]((t) => t[e(651)] === e(1309));
  }
  get isUUID() {
    const e = n;
    return !!this[e(1423)][e(2277)][e(714)]((t) => t[e(651)] === "uuid");
  }
  get [n(2194)]() {
    const e = n;
    return !!this[e(1423)][e(2277)].find((t) => t[e(651)] === "nanoid");
  }
  get [n(1169)]() {
    const e = n;
    return !!this[e(1423)][e(2277)].find((t) => t[e(651)] === e(517));
  }
  get [n(1176)]() {
    const e = n;
    return !!this._def[e(2277)][e(714)]((t) => t[e(651)] === e(703));
  }
  get isULID() {
    const e = n;
    return !!this[e(1423)][e(2277)].find((t) => t[e(651)] === e(1215));
  }
  get [n(1756)]() {
    const e = n;
    return !!this[e(1423)][e(2277)].find((t) => t[e(651)] === "ip");
  }
  get isCIDR() {
    const e = n;
    return !!this[e(1423)][e(2277)][e(714)]((t) => t[e(651)] === "cidr");
  }
  get isBase64() {
    const e = n;
    return !!this._def.checks[e(714)]((t) => t[e(651)] === e(2210));
  }
  get [n(1186)]() {
    const e = n;
    return !!this[e(1423)][e(2277)][e(714)]((t) => t[e(651)] === e(1805));
  }
  get minLength() {
    const e = n;
    let t = null;
    for (const a of this[e(1423)][e(2277)])
      a[e(651)] === e(606) && (t === null || a[e(2391)] > t) && (t = a[e(2391)]);
    return t;
  }
  get [n(2692)]() {
    const e = n;
    let t = null;
    for (const a of this[e(1423)][e(2277)])
      a[e(651)] === "max" && (t === null || a[e(2391)] < t) && (t = a[e(2391)]);
    return t;
  }
}
wx[n(1108)] = (i) => {
  const e = n;
  return new wx({ checks: [], typeName: p0[e(509)], coerce: (i == null ? void 0 : i[e(858)]) ?? !1, ...y0(i) });
};
function ni(i, e) {
  const t = n, a = (i[t(879)]()[t(2248)](".")[1] || "").length, x = (e.toString()[t(2248)](".")[1] || "")[t(1200)], r = a > x ? a : x, s = Number[t(1479)](i[t(1770)](r)[t(2188)](".", "")), o = Number[t(1479)](e[t(1770)](r)[t(2188)](".", ""));
  return s % o / 10 ** r;
}
class Zx extends k0 {
  constructor() {
    const e = n;
    super(...arguments), this[e(606)] = this[e(1625)], this[e(599)] = this[e(1167)], this[e(1259)] = this.multipleOf;
  }
  _parse(e) {
    const t = n;
    if (this[t(1423)][t(858)] && (e.data = Number(e[t(726)])), this._getType(e) !== _[t(2074)]) {
      const s = this[t(1892)](e);
      return X(s, { code: K.invalid_type, expected: _[t(2074)], received: s[t(2350)] }), h0;
    }
    let x;
    const r = new xx();
    for (const s of this[t(1423)][t(2277)])
      s[t(651)] === t(1278) ? !F0[t(787)](e[t(726)]) && (x = this._getOrReturnCtx(e, x), X(x, { code: K[t(2600)], expected: t(2255), received: t(1962), message: s[t(2353)] }), r[t(2246)]()) : s.kind === t(606) ? (s[t(2427)] ? e.data < s.value : e[t(726)] <= s[t(2391)]) && (x = this[t(1892)](e, x), X(x, { code: K[t(2046)], minimum: s[t(2391)], type: "number", inclusive: s[t(2427)], exact: !1, message: s[t(2353)] }), r.dirty()) : s.kind === t(599) ? (s.inclusive ? e[t(726)] > s[t(2391)] : e[t(726)] >= s[t(2391)]) && (x = this[t(1892)](e, x), X(x, { code: K.too_big, maximum: s.value, type: t(2074), inclusive: s[t(2427)], exact: !1, message: s[t(2353)] }), r.dirty()) : s[t(651)] === "multipleOf" ? ni(e[t(726)], s[t(2391)]) !== 0 && (x = this._getOrReturnCtx(e, x), X(x, { code: K[t(1894)], multipleOf: s.value, message: s[t(2353)] }), r[t(2246)]()) : s.kind === t(2082) ? !Number[t(1718)](e[t(726)]) && (x = this._getOrReturnCtx(e, x), X(x, { code: K.not_finite, message: s[t(2353)] }), r[t(2246)]()) : F0[t(920)](s);
    return { status: r[t(2391)], value: e[t(726)] };
  }
  [n(1625)](e, t) {
    const a = n;
    return this[a(2224)](a(606), e, !0, e0[a(879)](t));
  }
  gt(e, t) {
    const a = n;
    return this[a(2224)](a(606), e, !1, e0[a(879)](t));
  }
  [n(1167)](e, t) {
    const a = n;
    return this.setLimit(a(599), e, !0, e0.toString(t));
  }
  lt(e, t) {
    const a = n;
    return this[a(2224)](a(599), e, !1, e0[a(879)](t));
  }
  [n(2224)](e, t, a, x) {
    const r = n;
    return new Zx({ ...this[r(1423)], checks: [...this[r(1423)].checks, { kind: e, value: t, inclusive: a, message: e0[r(879)](x) }] });
  }
  [n(2707)](e) {
    const t = n;
    return new Zx({ ...this[t(1423)], checks: [...this[t(1423)][t(2277)], e] });
  }
  [n(1278)](e) {
    const t = n;
    return this[t(2707)]({ kind: t(1278), message: e0[t(879)](e) });
  }
  [n(935)](e) {
    const t = n;
    return this._addCheck({ kind: t(606), value: 0, inclusive: !1, message: e0.toString(e) });
  }
  [n(1122)](e) {
    const t = n;
    return this[t(2707)]({ kind: "max", value: 0, inclusive: !1, message: e0[t(879)](e) });
  }
  [n(1179)](e) {
    const t = n;
    return this[t(2707)]({ kind: t(599), value: 0, inclusive: !0, message: e0[t(879)](e) });
  }
  [n(1544)](e) {
    const t = n;
    return this[t(2707)]({ kind: t(606), value: 0, inclusive: !0, message: e0[t(879)](e) });
  }
  [n(500)](e, t) {
    const a = n;
    return this[a(2707)]({ kind: a(500), value: e, message: e0.toString(t) });
  }
  [n(2082)](e) {
    const t = n;
    return this[t(2707)]({ kind: t(2082), message: e0[t(879)](e) });
  }
  [n(2322)](e) {
    const t = n;
    return this[t(2707)]({ kind: t(606), inclusive: !0, value: Number[t(639)], message: e0.toString(e) })[t(2707)]({ kind: t(599), inclusive: !0, value: Number[t(2198)], message: e0[t(879)](e) });
  }
  get [n(2686)]() {
    const e = n;
    let t = null;
    for (const a of this[e(1423)][e(2277)])
      a[e(651)] === e(606) && (t === null || a[e(2391)] > t) && (t = a[e(2391)]);
    return t;
  }
  get [n(1567)]() {
    const e = n;
    let t = null;
    for (const a of this[e(1423)][e(2277)])
      a[e(651)] === "max" && (t === null || a[e(2391)] < t) && (t = a[e(2391)]);
    return t;
  }
  get [n(828)]() {
    const e = n;
    return !!this[e(1423)].checks[e(714)]((t) => t[e(651)] === e(1278) || t[e(651)] === e(500) && F0[e(787)](t[e(2391)]));
  }
  get [n(1718)]() {
    const e = n;
    let t = null, a = null;
    for (const x of this._def[e(2277)]) {
      if (x.kind === "finite" || x[e(651)] === e(1278) || x.kind === "multipleOf") return !0;
      x[e(651)] === e(606) ? (a === null || x[e(2391)] > a) && (a = x[e(2391)]) : x.kind === "max" && (t === null || x[e(2391)] < t) && (t = x[e(2391)]);
    }
    return Number[e(1718)](a) && Number[e(1718)](t);
  }
}
Zx.create = (i) => {
  const e = n;
  return new Zx({ checks: [], typeName: p0[e(1948)], coerce: (i == null ? void 0 : i[e(858)]) || !1, ...y0(i) });
};
class te extends k0 {
  constructor() {
    const e = n;
    super(...arguments), this[e(606)] = this.gte, this[e(599)] = this.lte;
  }
  [n(1586)](e) {
    const t = n;
    if (this._def[t(858)]) try {
      e[t(726)] = BigInt(e[t(726)]);
    } catch {
      return this[t(2050)](e);
    }
    if (this._getType(e) !== _[t(1323)]) return this[t(2050)](e);
    let x;
    const r = new xx();
    for (const s of this[t(1423)][t(2277)])
      s.kind === t(606) ? (s[t(2427)] ? e[t(726)] < s[t(2391)] : e.data <= s[t(2391)]) && (x = this[t(1892)](e, x), X(x, { code: K.too_small, type: t(1323), minimum: s[t(2391)], inclusive: s[t(2427)], message: s[t(2353)] }), r[t(2246)]()) : s[t(651)] === t(599) ? (s[t(2427)] ? e[t(726)] > s[t(2391)] : e[t(726)] >= s[t(2391)]) && (x = this[t(1892)](e, x), X(x, { code: K.too_big, type: t(1323), maximum: s.value, inclusive: s.inclusive, message: s[t(2353)] }), r.dirty()) : s.kind === t(500) ? e[t(726)] % s[t(2391)] !== BigInt(0) && (x = this[t(1892)](e, x), X(x, { code: K[t(1894)], multipleOf: s.value, message: s.message }), r[t(2246)]()) : F0.assertNever(s);
    return { status: r.value, value: e[t(726)] };
  }
  [n(2050)](e) {
    const t = n, a = this[t(1892)](e);
    return X(a, { code: K.invalid_type, expected: _.bigint, received: a[t(2350)] }), h0;
  }
  [n(1625)](e, t) {
    const a = n;
    return this.setLimit("min", e, !0, e0[a(879)](t));
  }
  gt(e, t) {
    const a = n;
    return this[a(2224)](a(606), e, !1, e0.toString(t));
  }
  [n(1167)](e, t) {
    const a = n;
    return this[a(2224)](a(599), e, !0, e0[a(879)](t));
  }
  lt(e, t) {
    const a = n;
    return this[a(2224)](a(599), e, !1, e0[a(879)](t));
  }
  setLimit(e, t, a, x) {
    const r = n;
    return new te({ ...this[r(1423)], checks: [...this[r(1423)][r(2277)], { kind: e, value: t, inclusive: a, message: e0.toString(x) }] });
  }
  _addCheck(e) {
    const t = n;
    return new te({ ...this[t(1423)], checks: [...this[t(1423)][t(2277)], e] });
  }
  [n(935)](e) {
    const t = n;
    return this[t(2707)]({ kind: t(606), value: BigInt(0), inclusive: !1, message: e0[t(879)](e) });
  }
  [n(1122)](e) {
    const t = n;
    return this._addCheck({ kind: t(599), value: BigInt(0), inclusive: !1, message: e0[t(879)](e) });
  }
  [n(1179)](e) {
    const t = n;
    return this._addCheck({ kind: t(599), value: BigInt(0), inclusive: !0, message: e0.toString(e) });
  }
  [n(1544)](e) {
    return this._addCheck({ kind: "min", value: BigInt(0), inclusive: !0, message: e0.toString(e) });
  }
  [n(500)](e, t) {
    const a = n;
    return this[a(2707)]({ kind: "multipleOf", value: e, message: e0[a(879)](t) });
  }
  get [n(2686)]() {
    const e = n;
    let t = null;
    for (const a of this[e(1423)][e(2277)])
      a[e(651)] === e(606) && (t === null || a.value > t) && (t = a[e(2391)]);
    return t;
  }
  get maxValue() {
    const e = n;
    let t = null;
    for (const a of this[e(1423)][e(2277)])
      a[e(651)] === e(599) && (t === null || a[e(2391)] < t) && (t = a[e(2391)]);
    return t;
  }
}
te[n(1108)] = (i) => {
  const e = n;
  return new te({ checks: [], typeName: p0[e(592)], coerce: (i == null ? void 0 : i[e(858)]) ?? !1, ...y0(i) });
};
class Dt extends k0 {
  [n(1586)](e) {
    const t = n;
    if (this[t(1423)][t(858)] && (e[t(726)] = !!e[t(726)]), this[t(2182)](e) !== _.boolean) {
      const x = this._getOrReturnCtx(e);
      return X(x, { code: K[t(2600)], expected: _[t(958)], received: x[t(2350)] }), h0;
    }
    return rx(e[t(726)]);
  }
}
Dt[n(1108)] = (i) => new Dt({ typeName: p0.ZodBoolean, coerce: (i == null ? void 0 : i.coerce) || !1, ...y0(i) });
class ve extends k0 {
  [n(1586)](e) {
    const t = n;
    if (this[t(1423)][t(858)] && (e.data = new Date(e.data)), this[t(2182)](e) !== _[t(1633)]) {
      const s = this[t(1892)](e);
      return X(s, { code: K[t(2600)], expected: _[t(1633)], received: s[t(2350)] }), h0;
    }
    if (Number[t(1584)](e[t(726)].getTime())) {
      const s = this[t(1892)](e);
      return X(s, { code: K[t(1769)] }), h0;
    }
    const x = new xx();
    let r;
    for (const s of this[t(1423)][t(2277)])
      s.kind === t(606) ? e[t(726)][t(1549)]() < s.value && (r = this[t(1892)](e, r), X(r, { code: K[t(2046)], message: s[t(2353)], inclusive: !0, exact: !1, minimum: s[t(2391)], type: t(1633) }), x.dirty()) : s.kind === t(599) ? e[t(726)].getTime() > s[t(2391)] && (r = this._getOrReturnCtx(e, r), X(r, { code: K[t(1151)], message: s[t(2353)], inclusive: !0, exact: !1, maximum: s[t(2391)], type: t(1633) }), x[t(2246)]()) : F0[t(920)](s);
    return { status: x.value, value: new Date(e[t(726)][t(1549)]()) };
  }
  [n(2707)](e) {
    const t = n;
    return new ve({ ...this[t(1423)], checks: [...this[t(1423)][t(2277)], e] });
  }
  [n(606)](e, t) {
    const a = n;
    return this[a(2707)]({ kind: "min", value: e[a(1549)](), message: e0.toString(t) });
  }
  [n(599)](e, t) {
    const a = n;
    return this[a(2707)]({ kind: a(599), value: e[a(1549)](), message: e0[a(879)](t) });
  }
  get minDate() {
    const e = n;
    let t = null;
    for (const a of this[e(1423)][e(2277)])
      a[e(651)] === e(606) && (t === null || a[e(2391)] > t) && (t = a[e(2391)]);
    return t != null ? new Date(t) : null;
  }
  get [n(1910)]() {
    const e = n;
    let t = null;
    for (const a of this[e(1423)].checks)
      a[e(651)] === e(599) && (t === null || a.value < t) && (t = a.value);
    return t != null ? new Date(t) : null;
  }
}
ve.create = (i) => {
  const e = n;
  return new ve({ checks: [], coerce: (i == null ? void 0 : i[e(858)]) || !1, typeName: p0.ZodDate, ...y0(i) });
};
class Er extends k0 {
  _parse(e) {
    const t = n;
    if (this[t(2182)](e) !== _[t(689)]) {
      const x = this[t(1892)](e);
      return X(x, { code: K[t(2600)], expected: _[t(689)], received: x[t(2350)] }), h0;
    }
    return rx(e[t(726)]);
  }
}
Er.create = (i) => {
  const e = n;
  return new Er({ typeName: p0[e(1904)], ...y0(i) });
};
class jt extends k0 {
  [n(1586)](e) {
    const t = n;
    if (this._getType(e) !== _.undefined) {
      const x = this._getOrReturnCtx(e);
      return X(x, { code: K[t(2600)], expected: _[t(2634)], received: x[t(2350)] }), h0;
    }
    return rx(e[t(726)]);
  }
}
jt.create = (i) => new jt({ typeName: p0.ZodUndefined, ...y0(i) });
class Mt extends k0 {
  [n(1586)](e) {
    const t = n;
    if (this[t(2182)](e) !== _[t(2382)]) {
      const x = this._getOrReturnCtx(e);
      return X(x, { code: K[t(2600)], expected: _[t(2382)], received: x[t(2350)] }), h0;
    }
    return rx(e[t(726)]);
  }
}
Mt.create = (i) => {
  const e = n;
  return new Mt({ typeName: p0[e(1090)], ...y0(i) });
};
class Lt extends k0 {
  constructor() {
    const e = n;
    super(...arguments), this[e(1292)] = !0;
  }
  _parse(e) {
    return rx(e[n(726)]);
  }
}
Lt[n(1108)] = (i) => new Lt({ typeName: p0.ZodAny, ...y0(i) });
class $t extends k0 {
  constructor() {
    const e = n;
    super(...arguments), this[e(1492)] = !0;
  }
  [n(1586)](e) {
    return rx(e[n(726)]);
  }
}
$t[n(1108)] = (i) => {
  const e = n;
  return new $t({ typeName: p0[e(2209)], ...y0(i) });
};
class Cx extends k0 {
  [n(1586)](e) {
    const t = n, a = this[t(1892)](e);
    return X(a, { code: K[t(2600)], expected: _[t(1863)], received: a[t(2350)] }), h0;
  }
}
Cx[n(1108)] = (i) => {
  const e = n;
  return new Cx({ typeName: p0[e(2298)], ...y0(i) });
};
class Cr extends k0 {
  [n(1586)](e) {
    const t = n;
    if (this[t(2182)](e) !== _[t(2634)]) {
      const x = this[t(1892)](e);
      return X(x, { code: K[t(2600)], expected: _[t(849)], received: x[t(2350)] }), h0;
    }
    return rx(e[t(726)]);
  }
}
Cr.create = (i) => {
  const e = n;
  return new Cr({ typeName: p0[e(826)], ...y0(i) });
};
class hx extends k0 {
  [n(1586)](e) {
    const t = n, { ctx: a, status: x } = this[t(512)](e), r = this[t(1423)];
    if (a[t(2350)] !== _[t(1196)]) return X(a, { code: K[t(2600)], expected: _.array, received: a[t(2350)] }), h0;
    if (r[t(842)] !== null) {
      const o = a[t(726)][t(1200)] > r[t(842)][t(2391)], c = a[t(726)][t(1200)] < r[t(842)][t(2391)];
      (o || c) && (X(a, { code: o ? K[t(1151)] : K[t(2046)], minimum: c ? r[t(842)][t(2391)] : void 0, maximum: o ? r[t(842)].value : void 0, type: t(1196), inclusive: !0, exact: !0, message: r.exactLength[t(2353)] }), x[t(2246)]());
    }
    if (r[t(1213)] !== null && a[t(726)][t(1200)] < r[t(1213)][t(2391)] && (X(a, { code: K[t(2046)], minimum: r.minLength.value, type: t(1196), inclusive: !0, exact: !1, message: r[t(1213)][t(2353)] }), x[t(2246)]()), r[t(2692)] !== null && a[t(726)][t(1200)] > r[t(2692)][t(2391)] && (X(a, { code: K[t(1151)], maximum: r[t(2692)][t(2391)], type: t(1196), inclusive: !0, exact: !1, message: r.maxLength[t(2353)] }), x.dirty()), a[t(2140)][t(1721)]) return Promise[t(1135)]([...a.data][t(2404)]((o, c) => {
      const d = t;
      return r[d(2426)][d(912)](new px(a, o, a[d(1728)], c));
    }))[t(1413)]((o) => xx[t(896)](x, o));
    const s = [...a[t(726)]][t(2404)]((o, c) => {
      const d = t;
      return r[d(2426)][d(1099)](new px(a, o, a.path, c));
    });
    return xx[t(896)](x, s);
  }
  get [n(2462)]() {
    const e = n;
    return this[e(1423)][e(2426)];
  }
  min(e, t) {
    const a = n;
    return new hx({ ...this[a(1423)], minLength: { value: e, message: e0[a(879)](t) } });
  }
  [n(599)](e, t) {
    const a = n;
    return new hx({ ...this[a(1423)], maxLength: { value: e, message: e0[a(879)](t) } });
  }
  [n(1200)](e, t) {
    const a = n;
    return new hx({ ...this[a(1423)], exactLength: { value: e, message: e0.toString(t) } });
  }
  [n(670)](e) {
    return this.min(1, e);
  }
}
hx[n(1108)] = (i, e) => {
  const t = n;
  return new hx({ type: i, minLength: null, maxLength: null, exactLength: null, typeName: p0[t(1473)], ...y0(e) });
};
function Ux(i) {
  const e = n;
  if (i instanceof W0) {
    const t = {};
    for (const a in i[e(2129)]) {
      const x = i[e(2129)][a];
      t[a] = Sx.create(Ux(x));
    }
    return new W0({ ...i[e(1423)], shape: () => t });
  } else
    return i instanceof hx ? new hx({ ...i[e(1423)], type: Ux(i.element) }) : i instanceof Sx ? Sx[e(1108)](Ux(i[e(2741)]())) : i instanceof jx ? jx[e(1108)](Ux(i[e(2741)]())) : i instanceof Tx ? Tx[e(1108)](i.items[e(2404)]((t) => Ux(t))) : i;
}
class W0 extends k0 {
  constructor() {
    const e = n;
    super(...arguments), this[e(684)] = null, this[e(2207)] = this[e(1209)], this.augment = this.extend;
  }
  _getCached() {
    const e = n;
    if (this[e(684)] !== null) return this[e(684)];
    const t = this[e(1423)][e(2129)](), a = F0[e(765)](t);
    return this[e(684)] = { shape: t, keys: a }, this[e(684)];
  }
  [n(1586)](e) {
    const t = n;
    if (this._getType(e) !== _[t(2437)]) {
      const u = this[t(1892)](e);
      return X(u, { code: K[t(2600)], expected: _[t(2437)], received: u[t(2350)] }), h0;
    }
    const { status: x, ctx: r } = this[t(512)](e), { shape: s, keys: o } = this._getCached(), c = [];
    if (!(this._def[t(1281)] instanceof Cx && this._def[t(2318)] === t(1959))) for (const u in r.data)
      !o.includes(u) && c[t(818)](u);
    const d = [];
    for (const u of o) {
      const f = s[u], l = r[t(726)][u];
      d.push({ key: { status: t(1954), value: u }, value: f[t(1586)](new px(r, l, r.path, u)), alwaysSet: u in r[t(726)] });
    }
    if (this[t(1423)][t(1281)] instanceof Cx) {
      const u = this[t(1423)][t(2318)];
      if (u === "passthrough") for (const f of c)
        d[t(818)]({ key: { status: t(1954), value: f }, value: { status: "valid", value: r[t(726)][f] } });
      else if (u === "strict") c[t(1200)] > 0 && (X(r, { code: K.unrecognized_keys, keys: c }), x[t(2246)]());
      else if (u !== t(1959)) throw new Error(t(1559));
    } else {
      const u = this._def[t(1281)];
      for (const f of c) {
        const l = r[t(726)][f];
        d.push({ key: { status: t(1954), value: f }, value: u._parse(new px(r, l, r[t(1728)], f)), alwaysSet: f in r[t(726)] });
      }
    }
    return r[t(2140)][t(1721)] ? Promise[t(1987)]().then(async () => {
      const u = t, f = [];
      for (const l of d) {
        const g = await l[u(1232)], h = await l[u(2391)];
        f.push({ key: g, value: h, alwaysSet: l[u(2203)] });
      }
      return f;
    })[t(1413)]((u) => xx[t(516)](x, u)) : xx[t(516)](x, d);
  }
  get shape() {
    const e = n;
    return this[e(1423)][e(2129)]();
  }
  [n(1370)](e) {
    const t = n;
    return e0[t(1236)], new W0({ ...this[t(1423)], unknownKeys: t(1370), ...e !== void 0 ? { errorMap: (a, x) => {
      var o, c;
      const r = t, s = ((c = (o = this[r(1423)])[r(798)]) == null ? void 0 : c.call(o, a, x)[r(2353)]) ?? x.defaultError;
      return a[r(1204)] === r(699) ? { message: e0[r(1236)](e)[r(2353)] ?? s } : { message: s };
    } } : {} });
  }
  [n(1959)]() {
    const e = n;
    return new W0({ ...this[e(1423)], unknownKeys: e(1959) });
  }
  passthrough() {
    const e = n;
    return new W0({ ...this[e(1423)], unknownKeys: "passthrough" });
  }
  extend(e) {
    const t = n;
    return new W0({ ...this[t(1423)], shape: () => ({ ...this._def.shape(), ...e }) });
  }
  [n(1290)](e) {
    const t = n;
    return new W0({ unknownKeys: e[t(1423)][t(2318)], catchall: e[t(1423)].catchall, shape: () => ({ ...this._def[t(2129)](), ...e[t(1423)][t(2129)]() }), typeName: p0.ZodObject });
  }
  setKey(e, t) {
    return this[n(1851)]({ [e]: t });
  }
  catchall(e) {
    const t = n;
    return new W0({ ...this[t(1423)], catchall: e });
  }
  [n(894)](e) {
    const t = n, a = {};
    for (const x of F0[t(765)](e))
      e[x] && this[t(2129)][x] && (a[x] = this[t(2129)][x]);
    return new W0({ ...this[t(1423)], shape: () => a });
  }
  [n(963)](e) {
    const t = n, a = {};
    for (const x of F0.objectKeys(this[t(2129)]))
      !e[x] && (a[x] = this.shape[x]);
    return new W0({ ...this[t(1423)], shape: () => a });
  }
  deepPartial() {
    return Ux(this);
  }
  [n(1286)](e) {
    const t = n, a = {};
    for (const x of F0[t(765)](this[t(2129)])) {
      const r = this[t(2129)][x];
      e && !e[x] ? a[x] = r : a[x] = r[t(1360)]();
    }
    return new W0({ ...this[t(1423)], shape: () => a });
  }
  [n(1040)](e) {
    const t = n, a = {};
    for (const x of F0[t(765)](this.shape))
      if (e && !e[x]) a[x] = this[t(2129)][x];
      else {
        let s = this[t(2129)][x];
        for (; s instanceof Sx; )
          s = s[t(1423)][t(1779)];
        a[x] = s;
      }
    return new W0({ ...this[t(1423)], shape: () => a });
  }
  keyof() {
    return Dn(F0[n(765)](this.shape));
  }
}
W0.create = (i, e) => {
  const t = n;
  return new W0({ shape: () => i, unknownKeys: t(1959), catchall: Cx[t(1108)](), typeName: p0[t(2725)], ...y0(e) });
}, W0[n(1752)] = (i, e) => {
  const t = n;
  return new W0({ shape: () => i, unknownKeys: t(1370), catchall: Cx[t(1108)](), typeName: p0[t(2725)], ...y0(e) });
}, W0[n(1852)] = (i, e) => {
  const t = n;
  return new W0({ shape: i, unknownKeys: t(1959), catchall: Cx[t(1108)](), typeName: p0[t(2725)], ...y0(e) });
};
class ye extends k0 {
  _parse(e) {
    const t = n, { ctx: a } = this[t(512)](e), x = this[t(1423)][t(2687)];
    function r(s) {
      const o = t;
      for (const d of s)
        if (d[o(1532)].status === "valid") return d[o(1532)];
      for (const d of s)
        if (d[o(1532)][o(1713)] === o(2246)) return a[o(2140)][o(2121)][o(818)](...d[o(536)][o(2140)][o(2121)]), d[o(1532)];
      const c = s.map((d) => new Px(d[o(536)][o(2140)][o(2121)]));
      return X(a, { code: K[o(2342)], unionErrors: c }), h0;
    }
    if (a[t(2140)].async) return Promise[t(1135)](x[t(2404)](async (s) => {
      const o = t, c = { ...a, common: { ...a.common, issues: [] }, parent: null };
      return { result: await s._parseAsync({ data: a[o(726)], path: a[o(1728)], parent: c }), ctx: c };
    }))[t(1413)](r);
    {
      let s;
      const o = [];
      for (const d of x) {
        const u = { ...a, common: { ...a[t(2140)], issues: [] }, parent: null }, f = d[t(1099)]({ data: a[t(726)], path: a[t(1728)], parent: u });
        if (f[t(1713)] === t(1954)) return f;
        f[t(1713)] === t(2246) && !s && (s = { result: f, ctx: u }), u[t(2140)][t(2121)].length && o[t(818)](u[t(2140)][t(2121)]);
      }
      if (s) return a[t(2140)][t(2121)][t(818)](...s[t(536)][t(2140)][t(2121)]), s[t(1532)];
      const c = o.map((d) => new Px(d));
      return X(a, { code: K[t(2342)], unionErrors: c }), h0;
    }
  }
  get [n(2687)]() {
    return this[n(1423)].options;
  }
}
ye[n(1108)] = (i, e) => new ye({ options: i, typeName: p0.ZodUnion, ...y0(e) });
const yx = (i) => {
  const e = n;
  return i instanceof Ht ? yx(i.schema) : i instanceof qx ? yx(i.innerType()) : i instanceof Se ? [i.value] : i instanceof Dx ? i[e(2687)] : i instanceof Ut ? F0.objectValues(i[e(1252)]) : i instanceof ke ? yx(i[e(1423)].innerType) : i instanceof jt ? [void 0] : i instanceof Mt ? [null] : i instanceof Sx ? [void 0, ...yx(i[e(2741)]())] : i instanceof jx ? [null, ...yx(i[e(2741)]())] : i instanceof jn || i instanceof Ce ? yx(i[e(2741)]()) : i instanceof Ee ? yx(i[e(1423)][e(1779)]) : [];
};
class Xt extends k0 {
  [n(1586)](e) {
    const t = n, { ctx: a } = this._processInputParams(e);
    if (a[t(2350)] !== _[t(2437)]) return X(a, { code: K[t(2600)], expected: _[t(2437)], received: a.parsedType }), h0;
    const x = this[t(2260)], r = a[t(726)][x], s = this.optionsMap[t(1261)](r);
    return s ? a[t(2140)].async ? s[t(912)]({ data: a[t(726)], path: a[t(1728)], parent: a }) : s[t(1099)]({ data: a[t(726)], path: a[t(1728)], parent: a }) : (X(a, { code: K.invalid_union_discriminator, options: Array[t(781)](this.optionsMap[t(2278)]()), path: [x] }), h0);
  }
  get discriminator() {
    const e = n;
    return this._def[e(2260)];
  }
  get [n(2687)]() {
    const e = n;
    return this[e(1423)][e(2687)];
  }
  get [n(594)]() {
    const e = n;
    return this[e(1423)][e(594)];
  }
  static [n(1108)](e, t, a) {
    const x = n, r = /* @__PURE__ */ new Map();
    for (const s of t) {
      const o = yx(s.shape[e]);
      if (!o.length) throw new Error(x(1499) + e + x(880));
      for (const c of o) {
        if (r[x(2333)](c)) throw new Error(x(617) + String(e) + x(1510) + String(c));
        r[x(510)](c, s);
      }
    }
    return new Xt({ typeName: p0[x(1378)], discriminator: e, options: t, optionsMap: r, ...y0(a) });
  }
}
function zt(i, e) {
  const t = n, a = Ex(i), x = Ex(e);
  if (i === e) return { valid: !0, data: i };
  if (a === _[t(2437)] && x === _[t(2437)]) {
    const r = F0.objectKeys(e), s = F0[t(765)](i).filter((c) => r[t(2170)](c) !== -1), o = { ...i, ...e };
    for (const c of s) {
      const d = zt(i[c], e[c]);
      if (!d[t(1954)]) return { valid: !1 };
      o[c] = d[t(726)];
    }
    return { valid: !0, data: o };
  } else if (a === _.array && x === _[t(1196)]) {
    if (i[t(1200)] !== e[t(1200)]) return { valid: !1 };
    const r = [];
    for (let s = 0; s < i[t(1200)]; s++) {
      const o = i[s], c = e[s], d = zt(o, c);
      if (!d[t(1954)]) return { valid: !1 };
      r.push(d.data);
    }
    return { valid: !0, data: r };
  } else return a === _[t(1633)] && x === _.date && +i == +e ? { valid: !0, data: i } : { valid: !1 };
}
class be extends k0 {
  _parse(e) {
    const t = n, { status: a, ctx: x } = this[t(512)](e), r = (s, o) => {
      const c = t;
      if (Sr(s) || Sr(o)) return h0;
      const d = zt(s.value, o[c(2391)]);
      return d.valid ? ((Pr(s) || Pr(o)) && a[c(2246)](), { status: a[c(2391)], value: d[c(726)] }) : (X(x, { code: K[c(658)] }), h0);
    };
    return x[t(2140)][t(1721)] ? Promise[t(1135)]([this[t(1423)].left[t(912)]({ data: x[t(726)], path: x.path, parent: x }), this[t(1423)][t(1343)]._parseAsync({ data: x[t(726)], path: x[t(1728)], parent: x })])[t(1413)](([s, o]) => r(s, o)) : r(this[t(1423)].left._parseSync({ data: x[t(726)], path: x[t(1728)], parent: x }), this[t(1423)][t(1343)][t(1099)]({ data: x[t(726)], path: x[t(1728)], parent: x }));
  }
}
be[n(1108)] = (i, e, t) => new be({ left: i, right: e, typeName: p0.ZodIntersection, ...y0(t) });
class Tx extends k0 {
  _parse(e) {
    const t = n, { status: a, ctx: x } = this[t(512)](e);
    if (x[t(2350)] !== _[t(1196)]) return X(x, { code: K.invalid_type, expected: _[t(1196)], received: x.parsedType }), h0;
    if (x[t(726)][t(1200)] < this[t(1423)][t(2637)].length) return X(x, { code: K[t(2046)], minimum: this._def[t(2637)][t(1200)], inclusive: !0, exact: !1, type: "array" }), h0;
    !this[t(1423)][t(868)] && x.data.length > this[t(1423)][t(2637)][t(1200)] && (X(x, { code: K[t(1151)], maximum: this[t(1423)][t(2637)].length, inclusive: !0, exact: !1, type: t(1196) }), a[t(2246)]());
    const s = [...x[t(726)]][t(2404)]((o, c) => {
      const d = t, u = this[d(1423)].items[c] || this[d(1423)].rest;
      return u ? u._parse(new px(x, o, x[d(1728)], c)) : null;
    })[t(893)]((o) => !!o);
    return x[t(2140)].async ? Promise[t(1135)](s).then((o) => xx[t(896)](a, o)) : xx.mergeArray(a, s);
  }
  get [n(2637)]() {
    return this[n(1423)].items;
  }
  rest(e) {
    return new Tx({ ...this._def, rest: e });
  }
}
Tx[n(1108)] = (i, e) => {
  const t = n;
  if (!Array[t(2344)](i)) throw new Error(t(1509));
  return new Tx({ items: i, typeName: p0.ZodTuple, rest: null, ...y0(e) });
};
class we extends k0 {
  get [n(1913)]() {
    const e = n;
    return this._def[e(1806)];
  }
  get [n(2058)]() {
    return this[n(1423)].valueType;
  }
  [n(1586)](e) {
    const t = n, { status: a, ctx: x } = this[t(512)](e);
    if (x[t(2350)] !== _[t(2437)]) return X(x, { code: K[t(2600)], expected: _[t(2437)], received: x.parsedType }), h0;
    const r = [], s = this[t(1423)].keyType, o = this[t(1423)].valueType;
    for (const c in x[t(726)])
      r[t(818)]({ key: s[t(1586)](new px(x, c, x.path, c)), value: o[t(1586)](new px(x, x[t(726)][c], x[t(1728)], c)), alwaysSet: c in x.data });
    return x[t(2140)][t(1721)] ? xx[t(1045)](a, r) : xx.mergeObjectSync(a, r);
  }
  get element() {
    const e = n;
    return this[e(1423)][e(690)];
  }
  static create(e, t, a) {
    const x = n;
    return t instanceof k0 ? new we({ keyType: e, valueType: t, typeName: p0.ZodRecord, ...y0(a) }) : new we({ keyType: wx.create(), valueType: e, typeName: p0[x(1859)], ...y0(t) });
  }
}
class Ir extends k0 {
  get [n(1913)]() {
    return this[n(1423)].keyType;
  }
  get [n(2058)]() {
    return this[n(1423)].valueType;
  }
  [n(1586)](e) {
    const t = n, { status: a, ctx: x } = this[t(512)](e);
    if (x[t(2350)] !== _[t(2404)]) return X(x, { code: K.invalid_type, expected: _[t(2404)], received: x.parsedType }), h0;
    const r = this[t(1423)][t(1806)], s = this[t(1423)][t(690)], o = [...x[t(726)][t(586)]()].map(([c, d], u) => {
      const f = t;
      return { key: r[f(1586)](new px(x, c, x[f(1728)], [u, f(1232)])), value: s._parse(new px(x, d, x[f(1728)], [u, f(2391)])) };
    });
    if (x.common[t(1721)]) {
      const c = /* @__PURE__ */ new Map();
      return Promise[t(1987)]()[t(1413)](async () => {
        const d = t;
        for (const u of o) {
          const f = await u[d(1232)], l = await u.value;
          if (f[d(1713)] === "aborted" || l[d(1713)] === d(1786)) return h0;
          (f.status === "dirty" || l[d(1713)] === d(2246)) && a.dirty(), c[d(510)](f[d(2391)], l[d(2391)]);
        }
        return { status: a[d(2391)], value: c };
      });
    } else {
      const c = /* @__PURE__ */ new Map();
      for (const d of o) {
        const u = d[t(1232)], f = d[t(2391)];
        if (u[t(1713)] === t(1786) || f[t(1713)] === t(1786)) return h0;
        (u[t(1713)] === t(2246) || f[t(1713)] === t(2246)) && a[t(2246)](), c[t(510)](u[t(2391)], f[t(2391)]);
      }
      return { status: a[t(2391)], value: c };
    }
  }
}
Ir[n(1108)] = (i, e, t) => new Ir({ valueType: e, keyType: i, typeName: p0.ZodMap, ...y0(t) });
class re extends k0 {
  [n(1586)](e) {
    const t = n, { status: a, ctx: x } = this._processInputParams(e);
    if (x[t(2350)] !== _[t(510)]) return X(x, { code: K[t(2600)], expected: _[t(510)], received: x[t(2350)] }), h0;
    const r = this[t(1423)];
    r.minSize !== null && x[t(726)][t(1754)] < r[t(2022)][t(2391)] && (X(x, { code: K.too_small, minimum: r[t(2022)][t(2391)], type: t(510), inclusive: !0, exact: !1, message: r[t(2022)][t(2353)] }), a[t(2246)]()), r[t(1928)] !== null && x.data[t(1754)] > r[t(1928)].value && (X(x, { code: K.too_big, maximum: r[t(1928)].value, type: t(510), inclusive: !0, exact: !1, message: r[t(1928)][t(2353)] }), a[t(2246)]());
    const s = this[t(1423)][t(690)];
    function o(d) {
      const u = t, f = /* @__PURE__ */ new Set();
      for (const l of d) {
        if (l[u(1713)] === "aborted") return h0;
        l.status === "dirty" && a[u(2246)](), f[u(2295)](l[u(2391)]);
      }
      return { status: a[u(2391)], value: f };
    }
    const c = [...x[t(726)].values()][t(2404)]((d, u) => s[t(1586)](new px(x, d, x.path, u)));
    return x[t(2140)].async ? Promise.all(c)[t(1413)]((d) => o(d)) : o(c);
  }
  [n(606)](e, t) {
    const a = n;
    return new re({ ...this[a(1423)], minSize: { value: e, message: e0[a(879)](t) } });
  }
  [n(599)](e, t) {
    const a = n;
    return new re({ ...this[a(1423)], maxSize: { value: e, message: e0[a(879)](t) } });
  }
  [n(1754)](e, t) {
    const a = n;
    return this[a(606)](e, t)[a(599)](e, t);
  }
  [n(670)](e) {
    return this[n(606)](1, e);
  }
}
re[n(1108)] = (i, e) => new re({ valueType: i, minSize: null, maxSize: null, typeName: p0.ZodSet, ...y0(e) });
class Ht extends k0 {
  get [n(727)]() {
    const e = n;
    return this[e(1423)][e(1803)]();
  }
  _parse(e) {
    const t = n, { ctx: a } = this[t(512)](e);
    return this[t(1423)][t(1803)]()._parse({ data: a[t(726)], path: a[t(1728)], parent: a });
  }
}
Ht[n(1108)] = (i, e) => {
  const t = n;
  return new Ht({ getter: i, typeName: p0[t(1676)], ...y0(e) });
};
class Se extends k0 {
  [n(1586)](e) {
    const t = n;
    if (e.data !== this._def.value) {
      const a = this._getOrReturnCtx(e);
      return X(a, { received: a.data, code: K.invalid_literal, expected: this[t(1423)][t(2391)] }), h0;
    }
    return { status: t(1954), value: e.data };
  }
  get [n(2391)]() {
    const e = n;
    return this[e(1423)][e(2391)];
  }
}
Se[n(1108)] = (i, e) => new Se({ value: i, typeName: p0.ZodLiteral, ...y0(e) });
function Dn(i, e) {
  const t = n;
  return new Dx({ values: i, typeName: p0[t(488)], ...y0(e) });
}
class Dx extends k0 {
  _parse(e) {
    const t = n;
    if (typeof e.data !== t(923)) {
      const a = this[t(1892)](e), x = this._def[t(1109)];
      return X(a, { expected: F0[t(827)](x), received: a[t(2350)], code: K.invalid_type }), h0;
    }
    if (!this[t(967)] && (this[t(967)] = new Set(this[t(1423)][t(1109)])), !this[t(967)].has(e[t(726)])) {
      const a = this[t(1892)](e), x = this._def[t(1109)];
      return X(a, { received: a[t(726)], code: K[t(533)], options: x }), h0;
    }
    return rx(e[t(726)]);
  }
  get options() {
    const e = n;
    return this._def[e(1109)];
  }
  get [n(1252)]() {
    const e = n, t = {};
    for (const a of this[e(1423)][e(1109)])
      t[a] = a;
    return t;
  }
  get [n(2558)]() {
    const e = n, t = {};
    for (const a of this[e(1423)][e(1109)])
      t[a] = a;
    return t;
  }
  get Enum() {
    const e = n, t = {};
    for (const a of this[e(1423)][e(1109)])
      t[a] = a;
    return t;
  }
  extract(e, t = this[n(1423)]) {
    const a = n;
    return Dx[a(1108)](e, { ...this[a(1423)], ...t });
  }
  exclude(e, t = this[n(1423)]) {
    const a = n;
    return Dx[a(1108)](this.options[a(893)]((x) => !e[a(1958)](x)), { ...this._def, ...t });
  }
}
Dx[n(1108)] = Dn;
class Ut extends k0 {
  [n(1586)](e) {
    const t = n, a = F0[t(1170)](this[t(1423)][t(1109)]), x = this[t(1892)](e);
    if (x.parsedType !== _[t(923)] && x[t(2350)] !== _.number) {
      const r = F0.objectValues(a);
      return X(x, { expected: F0[t(827)](r), received: x[t(2350)], code: K.invalid_type }), h0;
    }
    if (!this[t(967)] && (this[t(967)] = new Set(F0.getValidEnumValues(this[t(1423)][t(1109)]))), !this[t(967)][t(2333)](e[t(726)])) {
      const r = F0[t(505)](a);
      return X(x, { received: x[t(726)], code: K.invalid_enum_value, options: r }), h0;
    }
    return rx(e.data);
  }
  get [n(1252)]() {
    const e = n;
    return this[e(1423)][e(1109)];
  }
}
Ut.create = (i, e) => {
  const t = n;
  return new Ut({ values: i, typeName: p0[t(1934)], ...y0(e) });
};
class Pe extends k0 {
  [n(2741)]() {
    return this._def.type;
  }
  [n(1586)](e) {
    const t = n, { ctx: a } = this[t(512)](e);
    if (a[t(2350)] !== _.promise && a[t(2140)].async === !1) return X(a, { code: K[t(2600)], expected: _[t(1001)], received: a[t(2350)] }), h0;
    const x = a.parsedType === _[t(1001)] ? a.data : Promise[t(1987)](a.data);
    return rx(x[t(1413)]((r) => {
      const s = t;
      return this[s(1423)].type[s(790)](r, { path: a.path, errorMap: a[s(2140)][s(568)] });
    }));
  }
}
Pe.create = (i, e) => {
  const t = n;
  return new Pe({ type: i, typeName: p0[t(2214)], ...y0(e) });
};
class qx extends k0 {
  [n(1779)]() {
    const e = n;
    return this[e(1423)][e(727)];
  }
  [n(758)]() {
    const e = n;
    return this[e(1423)][e(727)][e(1423)][e(1253)] === p0[e(2457)] ? this._def.schema[e(758)]() : this[e(1423)][e(727)];
  }
  [n(1586)](e) {
    const t = n, { status: a, ctx: x } = this[t(512)](e), r = this._def[t(543)] || null, s = { addIssue: (o) => {
      const c = t;
      X(x, o), o.fatal ? a[c(2480)]() : a[c(2246)]();
    }, get path() {
      return x[t(1728)];
    } };
    if (s[t(715)] = s[t(715)][t(1571)](s), r[t(2426)] === t(2629)) {
      const o = r.transform(x.data, s);
      if (x[t(2140)][t(1721)]) return Promise[t(1987)](o)[t(1413)](async (c) => {
        const d = t;
        if (a.value === d(1786)) return h0;
        const u = await this[d(1423)][d(727)][d(912)]({ data: c, path: x[d(1728)], parent: x });
        return u[d(1713)] === d(1786) ? h0 : u[d(1713)] === d(2246) || a[d(2391)] === d(2246) ? Yx(u[d(2391)]) : u;
      });
      {
        if (a[t(2391)] === t(1786)) return h0;
        const c = this[t(1423)].schema._parseSync({ data: o, path: x[t(1728)], parent: x });
        return c.status === t(1786) ? h0 : c[t(1713)] === "dirty" ? Yx(c.value) : a[t(2391)] === t(2246) ? Yx(c[t(2391)]) : c;
      }
    }
    if (r.type === t(2508)) {
      const o = (c) => {
        const d = t, u = r[d(2508)](c, s);
        if (x[d(2140)][d(1721)]) return Promise[d(1987)](u);
        if (u instanceof Promise) throw new Error("Async refinement encountered during synchronous parse operation. Use .parseAsync instead.");
        return c;
      };
      if (x[t(2140)][t(1721)] === !1) {
        const c = this._def[t(727)][t(1099)]({ data: x.data, path: x[t(1728)], parent: x });
        return c[t(1713)] === "aborted" ? h0 : (c[t(1713)] === t(2246) && a[t(2246)](), o(c.value), { status: a[t(2391)], value: c[t(2391)] });
      } else return this._def[t(727)]._parseAsync({ data: x[t(726)], path: x[t(1728)], parent: x })[t(1413)]((c) => {
        const d = t;
        return c.status === d(1786) ? h0 : (c[d(1713)] === d(2246) && a[d(2246)](), o(c[d(2391)])[d(1413)](() => {
          const u = d;
          return { status: a[u(2391)], value: c[u(2391)] };
        }));
      });
    }
    if (r[t(2426)] === t(1110))
      if (x[t(2140)][t(1721)] === !1) {
        const o = this[t(1423)][t(727)]._parseSync({ data: x[t(726)], path: x[t(1728)], parent: x });
        if (!Vx(o)) return h0;
        const c = r.transform(o[t(2391)], s);
        if (c instanceof Promise) throw new Error(t(2079));
        return { status: a.value, value: c };
      } else return this[t(1423)][t(727)][t(912)]({ data: x[t(726)], path: x.path, parent: x })[t(1413)]((o) => {
        const c = t;
        return Vx(o) ? Promise.resolve(r[c(1110)](o[c(2391)], s))[c(1413)]((d) => ({ status: a.value, value: d })) : h0;
      });
    F0[t(920)](r);
  }
}
qx[n(1108)] = (i, e, t) => {
  const a = n;
  return new qx({ schema: i, typeName: p0[a(2457)], effect: e, ...y0(t) });
}, qx[n(1789)] = (i, e, t) => {
  const a = n;
  return new qx({ schema: e, effect: { type: a(2629), transform: i }, typeName: p0[a(2457)], ...y0(t) });
};
class Sx extends k0 {
  [n(1586)](e) {
    const t = n;
    return this._getType(e) === _[t(2634)] ? rx(void 0) : this[t(1423)][t(1779)][t(1586)](e);
  }
  unwrap() {
    const e = n;
    return this[e(1423)][e(1779)];
  }
}
Sx[n(1108)] = (i, e) => {
  const t = n;
  return new Sx({ innerType: i, typeName: p0[t(1228)], ...y0(e) });
};
class jx extends k0 {
  [n(1586)](e) {
    const t = n;
    return this[t(2182)](e) === _[t(2382)] ? rx(null) : this[t(1423)].innerType[t(1586)](e);
  }
  [n(2741)]() {
    const e = n;
    return this[e(1423)][e(1779)];
  }
}
jx[n(1108)] = (i, e) => {
  const t = n;
  return new jx({ innerType: i, typeName: p0[t(1732)], ...y0(e) });
};
class ke extends k0 {
  _parse(e) {
    const t = n, { ctx: a } = this[t(512)](e);
    let x = a.data;
    return a[t(2350)] === _[t(2634)] && (x = this[t(1423)][t(2303)]()), this[t(1423)][t(1779)][t(1586)]({ data: x, path: a[t(1728)], parent: a });
  }
  [n(1994)]() {
    const e = n;
    return this._def[e(1779)];
  }
}
ke.create = (i, e) => {
  const t = n;
  return new ke({ innerType: i, typeName: p0[t(2510)], defaultValue: typeof e[t(1658)] === t(1342) ? e[t(1658)] : () => e[t(1658)], ...y0(e) });
};
class Ee extends k0 {
  [n(1586)](e) {
    const t = n, { ctx: a } = this._processInputParams(e), x = { ...a, common: { ...a[t(2140)], issues: [] } }, r = this[t(1423)][t(1779)][t(1586)]({ data: x[t(726)], path: x.path, parent: { ...x } });
    return ge(r) ? r[t(1413)]((s) => {
      const o = t;
      return { status: "valid", value: s[o(1713)] === "valid" ? s.value : this[o(1423)].catchValue({ get error() {
        const c = o;
        return new Px(x[c(2140)][c(2121)]);
      }, input: x[o(726)] }) };
    }) : { status: "valid", value: r.status === t(1954) ? r[t(2391)] : this[t(1423)].catchValue({ get error() {
      return new Px(x.common.issues);
    }, input: x[t(726)] }) };
  }
  [n(895)]() {
    const e = n;
    return this[e(1423)][e(1779)];
  }
}
Ee[n(1108)] = (i, e) => {
  const t = n;
  return new Ee({ innerType: i, typeName: p0[t(1150)], catchValue: typeof e.catch === t(1342) ? e[t(641)] : () => e.catch, ...y0(e) });
};
class Rr extends k0 {
  [n(1586)](e) {
    const t = n;
    if (this[t(2182)](e) !== _[t(946)]) {
      const x = this[t(1892)](e);
      return X(x, { code: K[t(2600)], expected: _.nan, received: x.parsedType }), h0;
    }
    return { status: t(1954), value: e[t(726)] };
  }
}
Rr[n(1108)] = (i) => new Rr({ typeName: p0.ZodNaN, ...y0(i) });
class jn extends k0 {
  [n(1586)](e) {
    const t = n, { ctx: a } = this[t(512)](e), x = a[t(726)];
    return this[t(1423)].type[t(1586)]({ data: x, path: a.path, parent: a });
  }
  [n(2741)]() {
    return this[n(1423)].type;
  }
}
class _t extends k0 {
  _parse(e) {
    const t = n, { status: a, ctx: x } = this[t(512)](e);
    if (x[t(2140)][t(1721)])
      return (async () => {
        const s = t, o = await this[s(1423)].in[s(912)]({ data: x[s(726)], path: x[s(1728)], parent: x });
        return o[s(1713)] === s(1786) ? h0 : o[s(1713)] === s(2246) ? (a.dirty(), Yx(o[s(2391)])) : this[s(1423)][s(2337)]._parseAsync({ data: o.value, path: x[s(1728)], parent: x });
      })();
    {
      const r = this[t(1423)].in[t(1099)]({ data: x[t(726)], path: x[t(1728)], parent: x });
      return r[t(1713)] === t(1786) ? h0 : r[t(1713)] === t(2246) ? (a.dirty(), { status: t(2246), value: r[t(2391)] }) : this[t(1423)][t(2337)][t(1099)]({ data: r[t(2391)], path: x[t(1728)], parent: x });
    }
  }
  static [n(1108)](e, t) {
    const a = n;
    return new _t({ in: e, out: t, typeName: p0[a(1783)] });
  }
}
class Ce extends k0 {
  [n(1586)](e) {
    const t = n, a = this._def[t(1779)][t(1586)](e), x = (r) => {
      const s = t;
      return Vx(r) && (r[s(2391)] = Object[s(2237)](r[s(2391)])), r;
    };
    return ge(a) ? a[t(1413)]((r) => x(r)) : x(a);
  }
  [n(2741)]() {
    const e = n;
    return this[e(1423)][e(1779)];
  }
}
Ce[n(1108)] = (i, e) => {
  const t = n;
  return new Ce({ innerType: i, typeName: p0[t(1833)], ...y0(e) });
};
var p0;
(function(i) {
  const e = n;
  i[e(509)] = e(509), i.ZodNumber = "ZodNumber", i[e(952)] = e(952), i.ZodBigInt = e(592), i[e(1918)] = "ZodBoolean", i.ZodDate = "ZodDate", i[e(1904)] = e(1904), i[e(1502)] = e(1502), i[e(1090)] = e(1090), i[e(1841)] = "ZodAny", i[e(2209)] = "ZodUnknown", i.ZodNever = e(2298), i[e(826)] = e(826), i[e(1473)] = e(1473), i[e(2725)] = e(2725), i[e(1227)] = e(1227), i[e(1378)] = e(1378), i.ZodIntersection = "ZodIntersection", i[e(1184)] = e(1184), i[e(1859)] = e(1859), i[e(2231)] = e(2231), i.ZodSet = e(1678), i.ZodFunction = e(2119), i.ZodLazy = "ZodLazy", i[e(1818)] = e(1818), i[e(488)] = e(488), i.ZodEffects = "ZodEffects", i[e(1934)] = e(1934), i[e(1228)] = "ZodOptional", i[e(1732)] = e(1732), i.ZodDefault = e(2510), i[e(1150)] = e(1150), i.ZodPromise = e(2214), i.ZodBranded = "ZodBranded", i[e(1783)] = e(1783), i.ZodReadonly = "ZodReadonly";
})(p0 || (p0 = {}));
const I = wx[n(1108)], I0 = Zx[n(1108)], l0 = Dt[n(1108)], B0 = Lt.create, se = $t[n(1108)];
Cx[n(1108)];
const N0 = hx[n(1108)], O = W0.create, _0 = ye[n(1108)], Mn = Xt[n(1108)];
be.create, Tx[n(1108)];
const Y0 = we[n(1108)], r0 = Se.create, V0 = Dx[n(1108)];
Pe[n(1108)];
const W = Sx[n(1108)];
jx.create;
var Qa, Ga;
class si {
  constructor(e, t) {
    d0(this, Ga);
    d0(this, Qa);
    const a = n;
    this.graphInstance = e, this[a(582)] = t;
  }
  get [(Ga = n(2586), Qa = n(582), n(915))]() {
    const e = n, t = this[e(2586)][e(1256)](this[e(582)]);
    if (!t) throw new Error(e(2476) + this[e(582)]);
    return this[e(582)] !== this[e(2586)][e(2611)]() && this.graphInstance[e(2523)](this[e(582)]), t;
  }
  get actions() {
    const e = n, t = this[e(2586)].getDefinition().getNode(this[e(582)]);
    if (!t) throw new Error("Node definition not found for " + this[e(582)]);
    return new Proxy({}, { get: (x, r) => {
      const s = e;
      if (typeof r !== s(923)) return;
      const o = t[s(1524)][r];
      if (!o) throw new Error(s(2159) + r + s(1514) + this.nodeId);
      return async (c, d) => {
        const u = s, f = this.getConnectionInfo();
        if (!f) throw new Error("No connection available for node " + this[u(582)]);
        const { connection: l, path: g } = f, h = this[u(2586)].getCurrentNodeId();
        if (!o.stream) {
          const y = B0();
          let w;
          if (g[u(1200)] === 2) w = await l[u(1352)](u(1500), { action: r, data: c, sourceNodeId: h }, y);
          else try {
            w = await l[u(1352)](u(1500), { action: u(2100), data: { targetNodeId: this[u(582)], targetAction: r, targetData: c, forwardPath: g[u(2602)](1) }, sourceNodeId: h }, y);
          } catch (S) {
            throw console[u(2389)](u(2310), S), console[u(2389)]({ targetNodeId: this[u(582)], targetAction: r, targetData: c, forwardPath: g[u(2602)](1) }), S;
          }
          return w;
        }
        let m;
        return g.length === 2 ? m = l[u(2676)]({ action: r, data: c, sourceNodeId: h }, o[u(1570)], d) : m = l[u(2676)]({ action: u(2100), data: { targetNodeId: this[u(582)], targetAction: r, targetData: c, forwardPath: g[u(2602)](1) }, sourceNodeId: h }, o[u(1570)], d), m;
      };
    } });
  }
  getConnectionInfo() {
    const e = n;
    return this[e(2586)][e(685)](this.nodeId);
  }
}
const zx = /* @__PURE__ */ new Map(), Fx = /* @__PURE__ */ new Map();
var Ya;
class Ln {
  constructor(e) {
    d0(this, Ya);
    const t = n;
    this[t(2036)] = e;
  }
  initializeConsumer({ store: e, storeName: t, onStateUpdate: a, requestInitialState: x }) {
    const r = n;
    this.endpoint[r(2593)](O({ method: r0("sdppp/updateStore/" + t), params: B0() }), (o) => {
      const c = r;
      try {
        a(o.params);
      } catch (d) {
        console[c(2389)]("Error updating store " + t + ":", d);
      }
    });
    const s = async (o = 0, c = 5, d = 100) => {
      const u = r;
      try {
        await x();
      } catch {
        if (o < c) {
          const l = d * Math[u(2672)](2, o) + Math[u(861)]() * 100;
          setTimeout(() => {
            s(o + 1, c, d);
          }, l);
        } else console[u(1808)](u(595) + t + u(2415) + c + u(2705));
      }
    };
    setTimeout(() => s(), 50);
  }
  initializeProducer({ store: e, storeName: t, sendStateUpdate: a, onInitialStateRequested: x }) {
    const r = n, s = t + "_" + Date[r(1381)]() + "_" + Math[r(861)](), o = async (d, u = !1) => {
      const f = r;
      if (this[f(1564)]()) try {
        await a(d), zx[f(2333)](s) && zx[f(2653)](s);
      } catch (l) {
        const g = l instanceof Error ? l[f(2353)] : String(l);
        !g[f(1958)](f(1974)) && !g[f(1958)]("transport") && console[f(2389)](f(1624) + t + ":", l), (g.includes(f(1974)) || g.includes(f(2728))) && zx[f(510)](s, d);
      }
      else {
        zx[f(510)](s, d), !Fx[f(2333)](s) && Fx[f(510)](s, /* @__PURE__ */ new Set());
        const l = Fx[f(1261)](s), g = () => {
          const m = f, y = zx[m(1261)](s);
          y && o(y, !0);
        };
        l[f(2295)](g);
        const h = () => {
          const m = f;
          this[m(1564)]() ? (l[m(1238)]((y) => y()), l[m(611)](), Fx[m(2653)](s)) : setTimeout(h, 100);
        };
        setTimeout(h, 50);
      }
    }, c = e[r(1280)]((d) => {
      o(d, !1);
    });
    return x(() => {
      o(e.getState(), !0);
    }), o(e[r(1356)](), !0), () => {
      const d = r;
      c(), zx[d(2653)](s), Fx[d(2333)](s) && (Fx[d(1261)](s)[d(611)](), Fx.delete(s));
    };
  }
  [(Ya = n(2036), n(1564))]() {
    const e = n;
    try {
      const t = this[e(2036)].transport || this.endpoint[e(1452)] || this[e(2036)][e(2365)];
      return t === void 0 && typeof this[e(2036)][e(1441)] === e(1342) ? !0 : !!t;
    } catch {
      return typeof this[e(2036)][e(1441)] == "function";
    }
  }
}
var Xa, _a;
class $n {
  constructor(e) {
    d0(this, _a);
    d0(this, "actionManager");
    d0(this, Xa);
    const t = n;
    this[t(2586)] = e, this.actionManager = e[t(1936)], this[t(1107)] = e[t(1107)];
  }
  [(_a = n(2586), Xa = n(1107), n(779))]({ store: e, storeName: t, onStateUpdate: a, requestInitialState: x }) {
    const r = n;
    this[r(1107)][r(695)](r(1082) + t, (o) => {
      const c = r;
      try {
        o.sourceNodeId !== this[c(2586)][c(2611)]() && a(o[c(1194)]);
      } catch {
      }
    });
    const s = async (o = 0, c = 5, d = 100) => {
      const u = r;
      try {
        await x();
      } catch {
        if (o < c) {
          const l = d * Math[u(2672)](2, o) + Math[u(861)]() * 100;
          setTimeout(() => {
            s(o + 1, c, d);
          }, l);
        }
      }
    };
    setTimeout(() => s(), 50);
  }
  initializeProducer({ store: e, storeName: t, sendStateUpdate: a, onInitialStateRequested: x }) {
    const r = n, s = this[r(2586)][r(2611)](), o = async (u, f = !1) => {
      const l = r;
      if (this[l(1564)]()) try {
        await this[l(1107)][l(2607)](l(1082) + t, { storeName: t, sourceNodeId: s, stateUpdate: u, isInitialState: f }), await a(u);
      } catch {
      }
    }, c = e[r(1280)]((u) => {
      o(u, !1);
    });
    x(() => {
      o(e[r(1356)](), !0);
    });
    const d = r(674) + t;
    return this.actionManager.implementInternalAction(d, async () => {
      const u = r, f = e[u(1356)]();
      return await o(f, !0), { success: !0 };
    }), o(e[r(1356)](), !0), () => {
      var f;
      const u = r;
      c(), (f = this[u(1936)][u(1406)]) == null || f[u(2653)](d);
    };
  }
  [n(1564)]() {
    var t;
    const e = n;
    try {
      const a = this[e(2586)].connectionManager, x = a && a[e(991)]() > 0, r = ((t = this.broadcastManager.mountedEndpoints) == null ? void 0 : t.size) > 0;
      return x || r;
    } catch {
      return !!this[e(1107)];
    }
  }
}
function ii({ endpoint: i, store: e, name: t }) {
  const a = n, x = new Ln(i), r = (o) => {
    const c = B, d = e[c(1356)](), u = { ...d, ...o };
    e[c(1826)](u);
  }, s = async () => {
    const o = B;
    await i[o(1441)]({ method: o(1046) + t, params: {} });
  };
  x[a(779)]({ store: e, storeName: t, onStateUpdate: r, requestInitialState: s });
}
function zn({ endpoint: i, store: e, name: t }) {
  const a = n, x = new Ln(i), r = async (o) => {
    const c = B;
    await i[c(1441)]({ method: c(1790) + t, params: o });
  }, s = (o) => {
    const c = B;
    i[c(2593)](O({ method: r0(c(1046) + t), params: B0() }), () => {
      o();
    });
  };
  return x[a(2615)]({ store: e, storeName: t, sendStateUpdate: r, onInitialStateRequested: s });
}
function Fr({ graphInstance: i, store: e, name: t }) {
  const a = n, x = new $n(i), r = (o) => {
    const c = B, d = e[c(1356)](), u = { ...d, ...o };
    e[c(1826)](u);
  }, s = async () => {
    const o = B, c = o(674) + t;
    try {
      const d = i[o(1693)]().getNeighbors(i[o(2611)]());
      for (const u of d)
        try {
          const f = i[o(2369)](u);
          if (f && f[o(1524)] && f[o(1524)][c]) {
            await f[o(1524)][c]();
            break;
          }
        } catch {
          continue;
        }
    } catch (d) {
      console.warn("Failed to request initial state for " + t + ":", d);
    }
  };
  x[a(779)]({ store: e, storeName: t, onStateUpdate: r, requestInitialState: s });
}
function oi({ graphInstance: i, store: e, name: t }) {
  const a = n, x = new $n(i), r = async (o) => {
  }, s = (o) => {
  };
  return x[a(2615)]({ store: e, storeName: t, sendStateUpdate: r, onInitialStateRequested: s });
}
var xn;
class ci {
  constructor() {
    d0(this, xn, /* @__PURE__ */ new Map());
  }
  bindConsumer({ endpoint: e, store: t, nodeId: a }) {
    const x = n;
    this[x(2053)](a), ii({ endpoint: e, store: t, name: a }), this[x(2300)][x(510)](a, { nodeId: a, isProducer: !1 });
  }
  [(xn = n(2300), n(2042))]({ endpoint: e, store: t, nodeId: a }) {
    const x = n;
    this[x(2053)](a);
    const r = zn({ endpoint: e, store: t, name: a });
    this[x(2300)].set(a, { nodeId: a, isProducer: !0, cleanup: r });
  }
  [n(2053)](e) {
    const t = n, a = this[t(2300)][t(1261)](e);
    a && (a.cleanup && a[t(821)](), this.bindings[t(2653)](e));
  }
  [n(2486)](e) {
    return this[n(2300)].get(e);
  }
  getAllBindings() {
    const e = n;
    return Array[e(781)](this[e(2300)][e(1109)]());
  }
  [n(1185)](e) {
    const t = n, a = this[t(2300)][t(1261)](e);
    return a ? !a[t(710)] : !1;
  }
  [n(1529)](e) {
    const t = n;
    this.bindings[t(510)](e, { nodeId: e, isProducer: !1 });
  }
  [n(821)]() {
    const e = n;
    for (const t of this[e(2300)].values())
      t[e(821)] && t.cleanup();
    this.bindings[e(611)]();
  }
}
var en, tn, rn;
class di {
  constructor(e, t = {}) {
    d0(this, "graphInstance");
    d0(this, rn);
    d0(this, tn, /* @__PURE__ */ new Map());
    d0(this, en);
    d0(this, "currentNodeId");
    const a = n;
    this[a(2586)] = e, this[a(1596)] = e[a(1596)], this[a(1312)] = e[a(1312)], this[a(2687)] = { pingInterval: t[a(1101)] || 3e4, maxRetries: t.maxRetries || 3, retryDelay: t[a(1414)] || 5e3, dfsInterval: t[a(745)] || 3e4 };
  }
  startMonitoring(e) {
    const t = n;
    if (this[t(1573)][t(2333)](e)) return;
    const a = setInterval(() => {
      this[t(1963)](e);
    }, this[t(2687)][t(1101)]);
    this[t(1573)][t(510)](e, a);
  }
  [(rn = n(2687), tn = n(1573), en = n(1596), n(1234))](e) {
    const t = n, a = this[t(1573)][t(1261)](e);
    a && (clearInterval(a), this[t(1573)][t(2653)](e));
  }
  async checkConnection(e) {
    const t = n;
    try {
      await this[t(1462)](e);
    } catch (a) {
      console[t(1808)]("Connection to " + e + " appears unhealthy:", a);
    }
  }
  async [n(1462)](e) {
    const t = n, a = this[t(2586)][t(1121)](e);
    if (!a) throw new Error(t(964));
    if (a[t(1782)] && typeof a[t(1782)] === t(1342) && a[t(1782)]()) return Promise[t(1987)]();
    throw new Error("Connection appears to be disconnected");
  }
  [n(519)]() {
    const e = n;
    for (const t of this[e(1573)][e(1109)]())
      clearInterval(t);
    this[e(1573)][e(611)]();
  }
}
var an;
class ui {
  constructor() {
    d0(this, an, /* @__PURE__ */ new Map());
    d0(this, "connections", /* @__PURE__ */ new Map());
    d0(this, "mountedEndpoints", /* @__PURE__ */ new Set());
  }
  [(an = n(2612), n(2628))](e) {
    return (t) => {
      const a = B, x = this.broadcastHandlers[a(1261)](e);
      if (x) for (const r of x)
        try {
          r(t);
        } catch (s) {
          console[a(2389)](a(1909) + e + ":", s);
        }
      (e[a(1817)](a(1082)) || e === a(630)) && !t[a(1753)] && this.forwardBroadcast(e, t);
    };
  }
  async [n(2054)](e, t) {
    const a = n;
    try {
      const x = { ...t, forwarded: !0 }, r = Array[a(781)](this[a(2460)][a(1109)]()), s = [...r];
      let o = 0;
      for (const d of this[a(493)])
        r[a(1958)](d) || (s.push(d), o++);
      this[a(493)][a(1754)];
      const c = s[a(2404)]((d, u) => {
        const f = a, l = r[f(1958)](d) ? f(885) : "mounted";
        return d[f(2607)](e, x)[f(641)]((g) => {
          throw g;
        });
      });
      await Promise.all(c);
    } catch (x) {
      console.error("[BroadcastManager] Error forwarding broadcast:", x);
    }
  }
  [n(695)](e, t) {
    const a = n;
    !this[a(2612)][a(2333)](e) && this[a(2612)].set(e, /* @__PURE__ */ new Set()), this.broadcastHandlers[a(1261)](e)[a(2295)](t);
    const x = this[a(2628)](e);
    for (const r of this.connections[a(1109)]())
      r[a(982)](e, x);
    for (const r of this[a(493)])
      r[a(982)](e, x);
  }
  [n(2709)](e) {
    const t = n;
    for (const a of this[t(2612)].keys()) {
      const x = this[t(2628)](a);
      e[t(982)](a, x);
    }
  }
  [n(1345)](e, t) {
    const a = n;
    this.connections[a(510)](e, t), this[a(2709)](t);
  }
  removeConnection(e) {
    this[n(2460)].delete(e);
  }
  async broadcast(e, t) {
    const a = n, x = Array.from(this[a(2460)].values()), r = [...x];
    for (const o of this[a(493)])
      !x.includes(o) && r[a(818)](o);
    const s = r[a(2404)]((o) => o.broadcast(e, t));
    await Promise[a(1135)](s);
  }
  mountTo(e) {
    const t = n;
    this[t(493)][t(2295)](e);
    for (const a of this.broadcastHandlers[t(2278)]()) {
      const x = this[t(2628)](a);
      e[t(982)](a, x);
    }
  }
  [n(2023)]() {
    const e = n;
    return Array[e(781)](this[e(2612)][e(2278)]());
  }
  clear() {
    const e = n;
    this[e(2612)][e(611)](), this.connections[e(611)](), this.mountedEndpoints.clear();
  }
}
var nn, sn;
class fi {
  constructor(e, t, a) {
    d0(this, sn, /* @__PURE__ */ new Map());
    d0(this, nn);
    d0(this, "currentNodeId");
    d0(this, "getConnection");
    const x = n;
    this[x(1596)] = e, this.currentNodeId = t, this[x(527)] = a;
  }
  [(sn = n(1406), nn = n(1596), n(933))](e, t) {
    const a = n, x = this[a(1596)][a(2369)](this[a(1312)]);
    if (!x) throw new Error(a(1346) + this[a(1312)]);
    const r = x[a(1524)][e];
    if (!r) throw new Error("Action " + String(e) + a(1514) + this[a(1312)]);
    this[a(1258)](e, t, r), this[a(1406)][a(510)](e, t);
  }
  validateHandlerType(e, t, a) {
    a[n(1007)];
  }
  implementInternalAction(e, t) {
    const a = n;
    this[a(1406)][a(510)](e, t);
  }
  [n(666)](e) {
    const t = n;
    for (const [a, x] of this[t(1406)]) {
      const r = this[t(1596)][t(2369)](this.currentNodeId), s = r == null ? void 0 : r.actions[a];
      !((s == null ? void 0 : s.stream) === !0) && this[t(930)](e, a, x);
      const c = { shape: { action: { value: a } } }, d = async function* (u, f, l) {
        const g = t, h = u[g(726)] || u, m = x(h, f, l);
        if (m && typeof m === g(2437) && Symbol[g(1938)] in m && typeof m[Symbol[g(1938)]] === g(1342)) for await (const y of m)
          yield y === void 0 ? {} : y;
        else {
          const y = await m;
          if (y && typeof y[Symbol.asyncIterator] == "function") for await (const w of y)
            yield w === void 0 ? {} : w;
          else yield y === void 0 ? {} : y;
        }
      };
      e.registerActionHandler(c, d);
    }
    this[t(740)](e), this.registerDirectRequestHandlerGeneric(e);
  }
  [n(740)](e) {
    const t = n, a = { shape: { action: { value: t(2100) } } }, x = this, r = async function* (s, o, c) {
      const d = t, u = s[d(726)] || s, { targetNodeId: f, targetAction: l, targetData: g, forwardPath: h } = u;
      if (!h || h.length === 0) throw new Error(d(2094));
      const m = h[0], y = h[d(2602)](1);
      if (y[d(1200)] === 0 && m === x.currentNodeId) {
        const w = x[d(1406)][d(1261)](l);
        if (!w) throw new Error(d(2159) + l + " not found on node " + x.currentNodeId);
        const S = w(g, o, c);
        if (S && typeof S === d(2437) && Symbol[d(1938)] in S && typeof S[Symbol[d(1938)]] === d(1342)) for await (const R of S)
          yield R === void 0 ? {} : R;
        else {
          const R = await S;
          yield R === void 0 ? {} : R;
        }
        return;
      }
      if (m === x.currentNodeId && y[d(1200)] > 0) {
        const w = y[0], S = x[d(527)](w);
        if (S) {
          const R = await S[d(2676)]({ action: d(2100), data: { targetNodeId: f, targetAction: l, targetData: g, forwardPath: y } }, {}, c);
          for await (const A of R)
            yield A === void 0 ? {} : A;
          return;
        }
        throw new Error(d(2503) + w + d(1015));
      }
      throw new Error(d(1421) + x[d(1312)] + d(673) + h);
    };
    e[t(1926)](a, r);
  }
  getRegisteredActions() {
    const e = n;
    return Array.from(this[e(1406)][e(2278)]());
  }
  [n(867)](e) {
    const t = n;
    return this[t(1406)][t(2333)](e);
  }
  [n(2617)](e) {
    const t = n;
    return this[t(1406)][t(1261)](e);
  }
  [n(611)]() {
    const e = n;
    this[e(1406)][e(611)]();
  }
  [n(930)](e, t, a) {
  }
  registerDirectRequestHandlerGeneric(e) {
    const t = n, a = O({ method: r0(t(1500)), params: O({ action: I(), data: B0()[t(1360)]() }) }), x = this;
    e[t(1688)](a, async (r, s) => {
      const o = t, { action: c, data: d } = r[o(2646)];
      if (c === o(2100)) return await x[o(989)](d, s);
      const u = x[o(1406)][o(1261)](c);
      if (!u) throw new Error(o(2159) + c + o(486) + x[o(1312)]);
      const f = u(d, s), l = await f;
      return l === void 0 ? {} : l;
    });
  }
  async [n(989)](e, t) {
    const a = n, { targetNodeId: x, targetAction: r, targetData: s, forwardPath: o } = e;
    if (!o || o.length === 0) throw new Error(a(2094));
    const c = o[0], d = o[a(2602)](1);
    if (d[a(1200)] === 0 && c === this.currentNodeId) {
      const u = this.actionHandlers.get(r);
      if (!u) throw new Error(a(2159) + r + a(486) + this[a(1312)]);
      const f = u(s, t), l = await f;
      return l === void 0 ? {} : l;
    }
    if (c === this.currentNodeId && d[a(1200)] > 0) {
      const u = d[0], f = this[a(527)](u);
      if (f) return await f.request(a(1500), { action: a(2100), data: { targetNodeId: x, targetAction: r, targetData: s, forwardPath: d } }, B0());
      throw new Error(a(2503) + u + a(1015));
    }
    throw new Error(a(1421) + this[a(1312)] + a(673) + o);
  }
}
var on, cn, dn, un, fn;
class li {
  constructor(e, t, a, x, r) {
    d0(this, fn);
    d0(this, "currentNodeId");
    d0(this, un, /* @__PURE__ */ new Map());
    d0(this, dn);
    d0(this, cn);
    d0(this, on);
    const s = n;
    this[s(1596)] = e, this[s(1312)] = t, this.broadcastManager = a, this[s(1936)] = x, this[s(1738)] = r;
  }
  async [(fn = n(1596), un = n(2460), dn = n(1107), cn = n(1936), on = n(1738), n(1610))](e, t) {
    const a = n;
    if (!this.definition[a(2145)](this[a(1312)], e)) throw new Error(a(1772) + this.currentNodeId + a(2098) + e);
    if (this.connections[a(2333)](e)) throw new Error(a(2438) + e);
    try {
      const x = await t();
      this[a(2460)][a(510)](e, x), this[a(1738)](e, x), this[a(1107)][a(1345)](e, x), this.setupConnectionCloseHandler(e, x);
    } catch (x) {
      throw x;
    }
  }
  getConnection(e) {
    const t = n;
    return this[t(2460)][t(1261)](e);
  }
  [n(871)](e) {
    const t = n, a = this[t(2460)][t(1261)](e);
    if (a) return { connection: a, path: [this[t(1312)], e] };
    const x = this[t(605)](this.currentNodeId, e);
    if (x && x[t(1200)] > 1) {
      const r = x[1], s = this[t(2460)][t(1261)](r);
      if (s) return { connection: s, path: x };
    }
  }
  findPath(e, t) {
    const a = n;
    if (e === t) return [e];
    const x = /* @__PURE__ */ new Set(), r = [{ nodeId: e, path: [e] }];
    for (; r[a(1200)] > 0; ) {
      const { nodeId: s, path: o } = r[a(2621)]();
      if (x.has(s)) continue;
      x[a(2295)](s);
      const c = this.definition.getNeighbors(s);
      for (const d of c) {
        if (d === t) return [...o, d];
        !x[a(2333)](d) && r.push({ nodeId: d, path: [...o, d] });
      }
    }
  }
  [n(1634)]() {
    const e = n;
    return Array[e(781)](this[e(2460)][e(2278)]());
  }
  [n(2449)](e) {
    const t = n;
    return this[t(2460)][t(2333)](e);
  }
  getConnectionCount() {
    return this[n(2460)].size;
  }
  disconnect(e, t = !1) {
    const a = n, x = this[a(2460)][a(1261)](e);
    x && (t && a(1140) in x && typeof x[a(1140)] === a(1342) && x[a(1140)]()[a(641)]((r) => {
      console.warn("Error closing connection to " + e + ":", r);
    }), this[a(2460)].delete(e), this[a(1107)][a(2143)](e));
  }
  [n(677)](e, t) {
    const a = () => {
      const x = B, r = t[x(628)], s = t[x(2032)];
      if (r && r[x(555)] !== void 0) {
        const c = r[x(555)];
        r[x(555)] = (d) => {
          const u = x;
          this[u(1324)](e, d), c && typeof c === u(1342) && c(d);
        };
      }
      if (s && s[x(555)] !== void 0) {
        const c = s.onclose;
        s.onclose = (d) => {
          const u = x;
          this[u(1324)](e, d), c && typeof c === u(1342) && c(d);
        };
      }
      t && typeof t[x(2679)] == "function" && t[x(2679)](() => {
        this[x(1324)](e);
      });
      const o = t.transport;
      if (o && o[x(555)] !== void 0) {
        const c = o[x(555)];
        o.onclose = (d) => {
          this[x(1324)](e, d), c && typeof c == "function" && c(d);
        };
      }
    };
    try {
      a();
    } catch {
    }
  }
  [n(1324)](e, t) {
    const a = n;
    this[a(2460)][a(2333)](e) && (this[a(2460)].delete(e), this[a(1107)][a(2143)](e));
  }
  [n(611)]() {
    const e = n;
    for (const t of this[e(2460)][e(2278)]())
      this.disconnect(t);
  }
}
var ln, hn, pn, mn, gn;
class hi {
  constructor(e, t, a) {
    d0(this, "definition");
    d0(this, gn);
    d0(this, "nodeStores", /* @__PURE__ */ new Map());
    d0(this, "nodeProxies", /* @__PURE__ */ new Map());
    d0(this, mn);
    d0(this, pn, new ci());
    d0(this, "broadcastManager");
    d0(this, hn);
    d0(this, ln);
    const x = n;
    this[x(1596)] = e, this.currentNodeId = t, this[x(1761)](), this[x(1107)] = new ui(), this[x(1936)] = new fi(e, t, (r) => this[x(1121)](r)), this[x(2206)] = new li(e, t, this[x(1107)], this[x(1936)], (r, s) => this[x(1738)](r, s)), this[x(1359)] = new di(this, a), this.setupGraphStoreSync();
  }
  [(gn = n(1312), mn = n(1359), pn = n(1366), hn = n(1936), ln = n(2206), n(1761))]() {
    const e = n;
    for (const t of this[e(1596)][e(2718)]()) {
      const a = this[e(1596)].getNode(t);
      if (a && a[e(915)]) {
        const x = this.getDefaultValuesFromSchema(a[e(915)]), r = Ts(() => x);
        this.nodeStores[e(510)](t, r);
      }
    }
  }
  [n(1397)](e) {
    const t = n;
    if (!e) return {};
    try {
      return e.parse({});
    } catch {
      return this[t(1655)](e);
    }
  }
  manuallyExtractDefaults(e) {
    const t = n;
    if (!e || !e.def) return {};
    if (e[t(2729)].type === t(1658)) {
      const a = e[t(2729)][t(2303)];
      return typeof a === t(1342) ? a() : a;
    }
    if (e[t(2729)].type === t(2437)) {
      const a = {};
      let x;
      try {
        x = e[t(2729)].shape;
      } catch {
        return {};
      }
      if (x) for (const [r, s] of Object[t(586)](x)) {
        const o = this[t(1945)](s);
        o !== void 0 && (a[r] = o);
      }
      return a;
    }
    return {};
  }
  [n(1945)](e) {
    const t = n;
    if (e)
      try {
        return e[t(2156)](void 0);
      } catch {
        return this.manuallyExtractDefaults(e);
      }
  }
  async [n(1610)](e, t) {
    return this[n(2206)].connect(e, t);
  }
  [n(1288)](e, t = !1) {
    const a = n;
    return this[a(2206)][a(1288)](e, t);
  }
  [n(1738)](e, t) {
    const a = n, x = this[a(1702)][a(1261)](e);
    if (!x) return;
    const r = t[a(2032)] || t[a(628)];
    r && (t[a(628)] ? this[a(1366)][a(1765)]({ endpoint: r, store: x, nodeId: e }) : this[a(1366)][a(2042)]({ endpoint: r, store: x, nodeId: e }));
  }
  [n(1838)]() {
    const e = n;
    for (const [t, a] of this[e(1702)])
      t === this.currentNodeId ? oi({ graphInstance: this, store: a, name: t }) : Fr({ graphInstance: this, store: a, name: t });
  }
  [n(2369)](e) {
    const t = n;
    if (!this[t(1672)].has(e)) {
      const a = new si(this, e);
      this.nodeProxies[t(510)](e, a);
    }
    return this[t(1672)][t(1261)](e);
  }
  [n(1121)](e) {
    const t = n;
    return this.connectionManager[t(527)](e);
  }
  getConnection(e) {
    return this[n(1121)](e);
  }
  [n(1256)](e) {
    return this[n(1702)].get(e);
  }
  get store() {
    const e = n, t = this[e(1702)][e(1261)](this[e(1312)]);
    if (!t) throw new Error("Store not found for current node " + this[e(1312)]);
    return t;
  }
  get [n(1524)]() {
    const e = n, t = this[e(1596)][e(2369)](this[e(1312)]);
    if (!t) throw new Error(e(751) + this[e(1312)]);
    return new Proxy({}, { get: (x, r) => {
      const s = e;
      if (typeof r !== s(923)) return;
      const o = t[s(1524)][r];
      if (!o) throw new Error(s(2159) + r + " not found for current node " + this[s(1312)]);
      return (c, d) => {
        const u = s, f = this.actionManager[u(2617)](r);
        if (!f) throw new Error(u(1066) + r + u(652) + this.currentNodeId);
        const l = { nodeId: this[u(1312)] };
        if (o[u(1007)] === !0) {
          const g = f(c, l, d);
          return g && typeof g === u(2437) && Symbol[u(1938)] in g ? async function* () {
            for await (const h of g)
              yield h === void 0 ? {} : h;
          }() : async function* () {
            const h = await g;
            yield h === void 0 ? {} : h;
          }();
        } else return (async () => {
          const g = u, h = f(c, l, d);
          if (h && typeof h == "object" && Symbol[g(1938)] in h) {
            const m = h[Symbol[g(1938)]](), y = await m[g(1459)]();
            return y[g(2391)] === void 0 ? {} : y[g(2391)];
          } else {
            const m = await h;
            return m === void 0 ? {} : m;
          }
        })();
      };
    } });
  }
  getDefinition() {
    return this[n(1596)];
  }
  getCurrentNodeId() {
    return this[n(1312)];
  }
  ensureStoreConsumerBinding(e) {
    const t = n;
    if (e === this[t(1312)] || this[t(1366)][t(1185)](e)) return;
    const a = this.nodeStores[t(1261)](e);
    if (a)
      try {
        Fr({ graphInstance: this, store: a, name: e }), this[t(1366)][t(1529)](e);
      } catch {
      }
  }
  [n(685)](e) {
    const t = n;
    return this[t(2206)][t(871)](e);
  }
  getConnectionToNode(e) {
    return this[n(685)](e);
  }
  [n(666)](e) {
    const t = n, a = this[t(1702)][t(1261)](this.currentNodeId);
    if (!a) throw new Error(t(990) + this[t(1312)]);
    const x = e[t(2032)] || e[t(628)];
    zn({ endpoint: x, store: a, name: this.currentNodeId }), this[t(1936)][t(666)](e), this.broadcastManager[t(666)](e);
  }
  [n(933)](e, t) {
    this[n(1936)].implementAction(e, t);
  }
  [n(519)]() {
    const e = n;
    this.connectionMonitor[e(519)](), this[e(1366)][e(821)](), this[e(1107)].clear(), this[e(1936)].clear(), this[e(2206)][e(611)]();
  }
  [n(1e3)](e, t) {
    const a = n;
    return this[a(2206)][a(605)](e, t);
  }
  [n(605)](e, t) {
    return this[n(1e3)](e, t);
  }
  async [n(2607)](e, t) {
    return this[n(1107)].broadcast(e, t);
  }
  broadcastReceived(e, t) {
    const a = n;
    this[a(1107)][a(695)](e, t);
  }
}
const Hn = "2025-06-18", pi = [Hn, n(2587), "2024-11-05", "2024-10-07"], Oe = n(2137), Un = _0([I(), I0().int()]), Vn = I(), mi = O({ progressToken: W(Un) })[n(1209)](), ax = O({ _meta: W(mi) })[n(1209)](), ex = O({ method: I(), params: W(ax) }), ie = O({ _meta: W(O({}).passthrough()) })[n(1209)](), mx = O({ method: I(), params: W(ie) }), nx = O({ _meta: W(O({})[n(1209)]()) })[n(1209)](), Ae = _0([I(), I0().int()]), Zn = O({ jsonrpc: r0(Oe), id: Ae })[n(1290)](ex)[n(1370)](), gi = (i) => Zn[n(2732)](i)[n(2288)], Wn = O({ jsonrpc: r0(Oe) })[n(1290)](mx)[n(1370)](), vi = (i) => Wn.safeParse(i)[n(2288)], Bn = O({ jsonrpc: r0(Oe), id: Ae, result: nx }).strict(), Nr = (i) => Bn[n(2732)](i)[n(2288)];
var bx;
(function(i) {
  const e = n;
  i[i[e(2576)] = -32e3] = e(2576), i[i[e(1153)] = -32001] = "RequestTimeout", i[i[e(2688)] = -32700] = e(2688), i[i[e(498)] = -32600] = e(498), i[i[e(1784)] = -32601] = e(1784), i[i[e(1158)] = -32602] = e(1158), i[i[e(557)] = -32603] = "InternalError";
})(bx || (bx = {}));
const Kn = O({ jsonrpc: r0(Oe), id: Ae, error: O({ code: I0().int(), message: I(), data: W(se()) }) })[n(1370)](), yi = (i) => Kn[n(2732)](i)[n(2288)];
_0([Zn, Wn, Bn, Kn]);
const Vt = nx.strict(), Zt = mx[n(2453)]({ method: r0(n(2028)), params: ie[n(2453)]({ requestId: Ae, reason: I().optional() }) }), oe = O({ name: I(), title: W(I()) })[n(1209)](), Jn = oe[n(2453)]({ version: I() }), bi = O({ experimental: W(O({})[n(1209)]()), sampling: W(O({})[n(1209)]()), elicitation: W(O({})[n(1209)]()), roots: W(O({ listChanged: W(l0()) })[n(1209)]()) }).passthrough(), Qn = ex.extend({ method: r0(n(2434)), params: ax[n(2453)]({ protocolVersion: I(), capabilities: bi, clientInfo: Jn }) }), wi = O({ experimental: W(O({})[n(1209)]()), logging: W(O({}).passthrough()), completions: W(O({})[n(1209)]()), prompts: W(O({ listChanged: W(l0()) })[n(1209)]()), resources: W(O({ subscribe: W(l0()), listChanged: W(l0()) })[n(1209)]()), tools: W(O({ listChanged: W(l0()) })[n(1209)]()) }).passthrough(), Si = nx[n(2453)]({ protocolVersion: I(), capabilities: wi, serverInfo: Jn, instructions: W(I()) }), Gn = mx[n(2453)]({ method: r0("notifications/initialized") }), Wt = ex.extend({ method: r0(n(1189)) }), Pi = O({ progress: I0(), total: W(I0()), message: W(I()) })[n(1209)](), Bt = mx.extend({ method: r0(n(2284)), params: ie[n(1290)](Pi)[n(2453)]({ progressToken: Un }) }), Te = ex[n(2453)]({ params: ax[n(2453)]({ cursor: W(Vn) })[n(1360)]() }), De = nx[n(2453)]({ nextCursor: W(Vn) }), Yn = O({ uri: I(), mimeType: W(I()), _meta: W(O({})[n(1209)]()) })[n(1209)](), Xn = Yn.extend({ text: I() }), _n = Yn.extend({ blob: I()[n(2210)]() }), xs = oe[n(2453)]({ uri: I(), description: W(I()), mimeType: W(I()), _meta: W(O({})[n(1209)]()) }), ki = oe[n(2453)]({ uriTemplate: I(), description: W(I()), mimeType: W(I()), _meta: W(O({})[n(1209)]()) }), Ei = Te[n(2453)]({ method: r0(n(2055)) }), Ci = De.extend({ resources: N0(xs) }), Ii = Te[n(2453)]({ method: r0(n(2473)) }), Ri = De[n(2453)]({ resourceTemplates: N0(ki) }), Fi = ex[n(2453)]({ method: r0(n(1642)), params: ax.extend({ uri: I() }) }), Ni = nx[n(2453)]({ contents: N0(_0([Xn, _n])) }), qi = mx[n(2453)]({ method: r0(n(1049)) }), Oi = ex[n(2453)]({ method: r0(n(2012)), params: ax[n(2453)]({ uri: I() }) }), Ai = ex.extend({ method: r0(n(1486)), params: ax.extend({ uri: I() }) }), Ti = mx[n(2453)]({ method: r0(n(2682)), params: ie[n(2453)]({ uri: I() }) }), Di = O({ name: I(), description: W(I()), required: W(l0()) })[n(1209)](), ji = oe.extend({ description: W(I()), arguments: W(N0(Di)), _meta: W(O({})[n(1209)]()) }), Mi = Te[n(2453)]({ method: r0(n(2316)) }), Li = De[n(2453)]({ prompts: N0(ji) }), $i = ex[n(2453)]({ method: r0(n(2420)), params: ax[n(2453)]({ name: I(), arguments: W(Y0(I())) }) }), xr = O({ type: r0("text"), text: I(), _meta: W(O({})[n(1209)]()) })[n(1209)](), er = O({ type: r0(n(1745)), data: I()[n(2210)](), mimeType: I(), _meta: W(O({})[n(1209)]()) })[n(1209)](), tr = O({ type: r0("audio"), data: I()[n(2210)](), mimeType: I(), _meta: W(O({})[n(1209)]()) })[n(1209)](), zi = O({ type: r0(n(1716)), resource: _0([Xn, _n]), _meta: W(O({})[n(1209)]()) })[n(1209)](), Hi = xs.extend({ type: r0(n(2383)) }), es = _0([xr, er, tr, Hi, zi]), Ui = O({ role: V0([n(2499), "assistant"]), content: es })[n(1209)](), Vi = nx[n(2453)]({ description: W(I()), messages: N0(Ui) }), Zi = mx[n(2453)]({ method: r0(n(1244)) }), Wi = O({ title: W(I()), readOnlyHint: W(l0()), destructiveHint: W(l0()), idempotentHint: W(l0()), openWorldHint: W(l0()) })[n(1209)](), Bi = oe[n(2453)]({ description: W(I()), inputSchema: O({ type: r0(n(2437)), properties: W(O({})[n(1209)]()), required: W(N0(I())) })[n(1209)](), outputSchema: W(O({ type: r0(n(2437)), properties: W(O({})[n(1209)]()), required: W(N0(I())) })[n(1209)]()), annotations: W(Wi), _meta: W(O({})[n(1209)]()) }), Ki = Te[n(2453)]({ method: r0("tools/list") }), Ji = De[n(2453)]({ tools: N0(Bi) }), ts = nx.extend({ content: N0(es)[n(1658)]([]), structuredContent: O({})[n(1209)]()[n(1360)](), isError: W(l0()) });
ts.or(nx[n(2453)]({ toolResult: se() }));
const Qi = ex[n(2453)]({ method: r0(n(561)), params: ax.extend({ name: I(), arguments: W(Y0(se())) }) }), Gi = mx.extend({ method: r0("notifications/tools/list_changed") }), rs = V0([n(855), n(2414), n(735), n(768), n(2389), "critical", n(497), n(671)]), Yi = ex[n(2453)]({ method: r0(n(2704)), params: ax[n(2453)]({ level: rs }) }), Xi = mx[n(2453)]({ method: r0(n(1889)), params: ie[n(2453)]({ level: rs, logger: W(I()), data: se() }) }), _i = O({ name: I().optional() }).passthrough(), xo = O({ hints: W(N0(_i)), costPriority: W(I0()[n(606)](0).max(1)), speedPriority: W(I0().min(0)[n(599)](1)), intelligencePriority: W(I0()[n(606)](0)[n(599)](1)) })[n(1209)](), eo = O({ role: V0([n(2499), n(2081)]), content: _0([xr, er, tr]) })[n(1209)](), to = ex.extend({ method: r0("sampling/createMessage"), params: ax[n(2453)]({ messages: N0(eo), systemPrompt: W(I()), includeContext: W(V0([n(1939), n(2367), "allServers"])), temperature: W(I0()), maxTokens: I0()[n(1278)](), stopSequences: W(N0(I())), metadata: W(O({})[n(1209)]()), modelPreferences: W(xo) }) }), as = nx[n(2453)]({ model: I(), stopReason: W(V0([n(1620), n(2230), n(1684)]).or(I())), role: V0([n(2499), n(2081)]), content: Mn(n(2426), [xr, er, tr]) }), ro = O({ type: r0(n(958)), title: W(I()), description: W(I()), default: W(l0()) })[n(1209)](), ao = O({ type: r0(n(923)), title: W(I()), description: W(I()), minLength: W(I0()), maxLength: W(I0()), format: W(V0(["email", n(2155), "date", n(986)])) }).passthrough(), no = O({ type: V0([n(2074), "integer"]), title: W(I()), description: W(I()), minimum: W(I0()), maximum: W(I0()) })[n(1209)](), so = O({ type: r0("string"), title: W(I()), description: W(I()), enum: N0(I()), enumNames: W(N0(I())) })[n(1209)](), io = _0([ro, ao, no, so]), oo = ex.extend({ method: r0(n(2492)), params: ax[n(2453)]({ message: I(), requestedSchema: O({ type: r0(n(2437)), properties: Y0(I(), io), required: W(N0(I())) })[n(1209)]() }) }), ns = nx[n(2453)]({ action: V0([n(2542), n(1880), n(2375)]), content: W(Y0(I(), se())) }), co = O({ type: r0("ref/resource"), uri: I() })[n(1209)](), uo = O({ type: r0(n(1320)), name: I() }).passthrough(), fo = ex[n(2453)]({ method: r0("completion/complete"), params: ax[n(2453)]({ ref: _0([uo, co]), argument: O({ name: I(), value: I() })[n(1209)](), context: W(O({ arguments: W(Y0(I(), I())) })) }) }), lo = nx[n(2453)]({ completion: O({ values: N0(I())[n(599)](100), total: W(I0()[n(1278)]()), hasMore: W(l0()) })[n(1209)]() }), ho = O({ uri: I()[n(1817)](n(1480)), name: W(I()), _meta: W(O({}).passthrough()) }).passthrough(), po = ex[n(2453)]({ method: r0(n(2498)) }), ss = nx.extend({ roots: N0(ho) }), mo = mx.extend({ method: r0(n(928)) });
_0([Wt, Qn, fo, Yi, $i, Mi, Ei, Ii, Fi, Oi, Ai, Qi, Ki]), _0([Zt, Bt, Gn, mo]), _0([Vt, as, ns, ss]), _0([Wt, to, oo, po]), _0([Zt, Bt, Xi, Ti, qi, Gi, Zi]), _0([Vt, Si, lo, Vi, Li, Ci, Ri, Ni, ts, Ji]);
class Ox extends Error {
  constructor(e, t, a) {
    const x = n;
    super("MCP error " + e + ": " + t), this[x(1204)] = e, this[x(726)] = a, this.name = "McpError";
  }
}
const go = 6e4;
class vo {
  constructor(e) {
    const t = n;
    this._options = e, this[t(2076)] = 0, this._requestHandlers = /* @__PURE__ */ new Map(), this[t(2180)] = /* @__PURE__ */ new Map(), this[t(2117)] = /* @__PURE__ */ new Map(), this._responseHandlers = /* @__PURE__ */ new Map(), this[t(696)] = /* @__PURE__ */ new Map(), this[t(2465)] = /* @__PURE__ */ new Map(), this[t(2150)] = /* @__PURE__ */ new Set(), this[t(2593)](Zt, (a) => {
      const x = t, r = this[x(2180)].get(a[x(2646)][x(1536)]);
      r == null || r[x(2480)](a[x(2646)][x(1900)]);
    }), this[t(2593)](Bt, (a) => {
      this._onprogress(a);
    }), this.setRequestHandler(Wt, (a) => ({}));
  }
  [n(1933)](e, t, a, x, r = !1) {
    const s = n;
    this[s(2465)].set(e, { timeoutId: setTimeout(x, t), startTime: Date[s(1381)](), timeout: t, maxTotalTimeout: a, resetTimeoutOnProgress: r, onTimeout: x });
  }
  [n(2163)](e) {
    const t = n, a = this[t(2465)].get(e);
    if (!a) return !1;
    const x = Date[t(1381)]() - a[t(1734)];
    if (a[t(1587)] && x >= a[t(1587)])
      throw this[t(2465)][t(2653)](e), new Ox(bx[t(1153)], "Maximum total timeout exceeded", { maxTotalTimeout: a[t(1587)], totalElapsed: x });
    return clearTimeout(a.timeoutId), a[t(1815)] = setTimeout(a.onTimeout, a[t(1563)]), !0;
  }
  [n(1960)](e) {
    const t = n, a = this[t(2465)][t(1261)](e);
    a && (clearTimeout(a[t(1815)]), this[t(2465)][t(2653)](e));
  }
  async [n(1610)](e) {
    const t = n;
    var a, x, r;
    this[t(1452)] = e;
    const s = (a = this[t(2728)]) === null || a === void 0 ? void 0 : a[t(555)];
    this[t(1452)].onclose = () => {
      const d = t;
      s == null || s(), this[d(2205)]();
    };
    const o = (x = this[t(2728)]) === null || x === void 0 ? void 0 : x.onerror;
    this[t(1452)][t(1626)] = (d) => {
      const u = t;
      o == null || o(d), this[u(2513)](d);
    };
    const c = (r = this[t(1452)]) === null || r === void 0 ? void 0 : r[t(709)];
    this[t(1452)][t(709)] = (d, u) => {
      const f = t;
      c == null || c(d, u), Nr(d) || yi(d) ? this[f(2384)](d) : gi(d) ? this[f(929)](d, u) : vi(d) ? this._onnotification(d) : this._onerror(new Error("Unknown message type: " + JSON.stringify(d)));
    }, await this._transport[t(1890)]();
  }
  [n(2205)]() {
    const e = n;
    var t;
    const a = this._responseHandlers;
    this[e(545)] = /* @__PURE__ */ new Map(), this[e(696)].clear(), this[e(2150)][e(611)](), this._transport = void 0, (t = this[e(555)]) === null || t === void 0 || t[e(2518)](this);
    const x = new Ox(bx.ConnectionClosed, e(2275));
    for (const r of a[e(1109)]())
      r(x);
  }
  [n(2513)](e) {
    const t = n;
    var a;
    (a = this[t(1626)]) === null || a === void 0 || a[t(2518)](this, e);
  }
  _onnotification(e) {
    const t = n;
    var a;
    const x = (a = this._notificationHandlers[t(1261)](e[t(2097)])) !== null && a !== void 0 ? a : this[t(2606)];
    x !== void 0 && Promise.resolve()[t(1413)](() => x(e)).catch((r) => this[t(2513)](new Error(t(1491) + r)));
  }
  [n(929)](e, t) {
    const a = n;
    var x, r, s, o;
    const c = (x = this._requestHandlers[a(1261)](e[a(2097)])) !== null && x !== void 0 ? x : this[a(1155)];
    if (c === void 0) {
      (r = this[a(1452)]) === null || r === void 0 || r[a(1243)]({ jsonrpc: a(2137), id: e.id, error: { code: bx[a(1784)], message: a(962) } })[a(641)]((f) => this[a(2513)](new Error(a(1917) + f)));
      return;
    }
    const d = new AbortController();
    this._requestHandlerAbortControllers.set(e.id, d);
    const u = { signal: d[a(2360)], sessionId: (s = this[a(1452)]) === null || s === void 0 ? void 0 : s.sessionId, _meta: (o = e.params) === null || o === void 0 ? void 0 : o[a(1470)], sendNotification: (f) => this.notification(f, { relatedRequestId: e.id }), sendRequest: (f, l, g) => this.request(f, l, { ...g, relatedRequestId: e.id }), authInfo: t == null ? void 0 : t[a(1964)], requestId: e.id, requestInfo: t == null ? void 0 : t.requestInfo };
    Promise.resolve()[a(1413)](() => c(e, u))[a(1413)]((f) => {
      const l = a;
      var g;
      if (!d[l(2360)][l(1786)])
        return (g = this[l(1452)]) === null || g === void 0 ? void 0 : g[l(1243)]({ result: f, jsonrpc: l(2137), id: e.id });
    }, (f) => {
      const l = a;
      var g, h;
      if (!d.signal[l(1786)])
        return (g = this._transport) === null || g === void 0 ? void 0 : g[l(1243)]({ jsonrpc: l(2137), id: e.id, error: { code: Number[l(2736)](f[l(1204)]) ? f[l(1204)] : bx[l(557)], message: (h = f[l(2353)]) !== null && h !== void 0 ? h : l(579) } });
    })[a(641)]((f) => this[a(2513)](new Error(a(900) + f)))[a(2748)](() => {
      const f = a;
      this[f(2180)][f(2653)](e.id);
    });
  }
  [n(1853)](e) {
    const t = n, { progressToken: a, ...x } = e[t(2646)], r = Number(a), s = this._progressHandlers[t(1261)](r);
    if (!s) {
      this[t(2513)](new Error(t(1173) + JSON[t(2301)](e)));
      return;
    }
    const o = this[t(545)][t(1261)](r), c = this[t(2465)][t(1261)](r);
    if (c && o && c[t(590)]) try {
      this[t(2163)](r);
    } catch (d) {
      o(d);
      return;
    }
    s(x);
  }
  [n(2384)](e) {
    const t = n, a = Number(e.id), x = this[t(545)][t(1261)](a);
    if (x === void 0) {
      this[t(2513)](new Error("Received a response for an unknown message ID: " + JSON.stringify(e)));
      return;
    }
    if (this._responseHandlers.delete(a), this[t(696)].delete(a), this[t(1960)](a), Nr(e)) x(e);
    else {
      const r = new Ox(e[t(2389)][t(1204)], e[t(2389)][t(2353)], e[t(2389)][t(726)]);
      x(r);
    }
  }
  get [n(2728)]() {
    return this._transport;
  }
  async [n(1140)]() {
    const e = n;
    var t;
    await ((t = this._transport) === null || t === void 0 ? void 0 : t[e(1140)]());
  }
  [n(1352)](e, t, a) {
    const { relatedRequestId: x, resumptionToken: r, onresumptiontoken: s } = a ?? {};
    return new Promise((o, c) => {
      const d = B;
      var u, f, l, g, h, m;
      if (!this[d(1452)]) {
        c(new Error(d(2096)));
        return;
      }
      ((u = this[d(2463)]) === null || u === void 0 ? void 0 : u[d(1031)]) === !0 && this.assertCapabilityForMethod(e[d(2097)]), (f = a == null ? void 0 : a[d(2360)]) === null || f === void 0 || f[d(554)]();
      const y = this[d(2076)]++, w = { ...e, jsonrpc: d(2137), id: y };
      a != null && a.onprogress && (this[d(696)][d(510)](y, a.onprogress), w.params = { ...e.params, _meta: { ...((l = e[d(2646)]) === null || l === void 0 ? void 0 : l[d(1470)]) || {}, progressToken: y } });
      const S = (C) => {
        const P = d;
        var E;
        this[P(545)][P(2653)](y), this[P(696)][P(2653)](y), this[P(1960)](y), (E = this[P(1452)]) === null || E === void 0 || E[P(1243)]({ jsonrpc: P(2137), method: P(2028), params: { requestId: y, reason: String(C) } }, { relatedRequestId: x, resumptionToken: r, onresumptiontoken: s })[P(641)]((D) => this[P(2513)](new Error(P(1727) + D))), c(C);
      };
      this[d(545)][d(510)](y, (C) => {
        const P = d;
        var E;
        if (!(!((E = a == null ? void 0 : a[P(2360)]) === null || E === void 0) && E[P(1786)])) {
          if (C instanceof Error) return c(C);
          try {
            const D = t[P(2156)](C.result);
            o(D);
          } catch (D) {
            c(D);
          }
        }
      }), (g = a == null ? void 0 : a[d(2360)]) === null || g === void 0 || g.addEventListener(d(2480), () => {
        const C = d;
        var P;
        S((P = a == null ? void 0 : a.signal) === null || P === void 0 ? void 0 : P[C(1900)]);
      });
      const R = (h = a == null ? void 0 : a[d(1563)]) !== null && h !== void 0 ? h : go, A = () => S(new Ox(bx[d(1153)], "Request timed out", { timeout: R }));
      this[d(1933)](y, R, a == null ? void 0 : a[d(1587)], A, (m = a == null ? void 0 : a[d(590)]) !== null && m !== void 0 ? m : !1), this[d(1452)][d(1243)](w, { relatedRequestId: x, resumptionToken: r, onresumptiontoken: s })[d(641)]((C) => {
        this[d(1960)](y), c(C);
      });
    });
  }
  async [n(1441)](e, t) {
    const a = n;
    var x, r;
    if (!this[a(1452)]) throw new Error(a(2096));
    if (this[a(1162)](e[a(2097)]), ((r = (x = this[a(2463)]) === null || x === void 0 ? void 0 : x[a(1644)]) !== null && r !== void 0 ? r : [])[a(1958)](e[a(2097)]) && !e[a(2646)] && !(t != null && t[a(656)])) {
      if (this[a(2150)][a(2333)](e[a(2097)])) return;
      this[a(2150)][a(2295)](e[a(2097)]), Promise[a(1987)]().then(() => {
        const d = a;
        var u;
        if (this[d(2150)][d(2653)](e[d(2097)]), !this[d(1452)]) return;
        const f = { ...e, jsonrpc: d(2137) };
        (u = this[d(1452)]) === null || u === void 0 || u[d(1243)](f, t)[d(641)]((l) => this[d(2513)](l));
      });
      return;
    }
    const c = { ...e, jsonrpc: a(2137) };
    await this[a(1452)][a(1243)](c, t);
  }
  [n(1670)](e, t) {
    const a = n, x = e[a(2129)][a(2097)][a(2391)];
    this.assertRequestHandlerCapability(x), this[a(1720)][a(510)](x, (r, s) => Promise[a(1987)](t(e.parse(r), s)));
  }
  [n(979)](e) {
    this._requestHandlers.delete(e);
  }
  [n(978)](e) {
    const t = n;
    if (this._requestHandlers[t(2333)](e)) throw new Error("A request handler for " + e + t(1132));
  }
  [n(2593)](e, t) {
    const a = n;
    this._notificationHandlers[a(510)](e[a(2129)][a(2097)][a(2391)], (x) => Promise.resolve(t(e.parse(x))));
  }
  [n(1848)](e) {
    const t = n;
    this[t(2117)][t(2653)](e);
  }
}
function yo(i, e) {
  const t = n;
  return Object[t(586)](e)[t(2257)]((a, [x, r]) => (r && typeof r === t(2437) ? a[x] = a[x] ? { ...a[x], ...r } : r : a[x] = r, a), { ...i });
}
function is(i) {
  const e = n;
  return i && i.__esModule && Object.prototype.hasOwnProperty[e(2518)](i, "default") ? i[e(1658)] : i;
}
var Xx = { exports: {} }, bo = Xx[n(1791)], qr;
function wo() {
  const i = n;
  return qr ? Xx.exports : (qr = 1, function(e, t) {
    (function(a, x) {
      x(t);
    })(bo, function(a) {
      const x = B;
      function r() {
        const k = B;
        for (var p = arguments[k(1200)], v = Array(p), b = 0; b < p; b++)
          v[b] = arguments[b];
        if (v[k(1200)] > 1) {
          v[0] = v[0].slice(0, -1);
          for (var z = v.length - 1, H = 1; H < z; ++H)
            v[H] = v[H].slice(1, -1);
          return v[z] = v[z][k(2602)](1), v.join("");
        } else return v[0];
      }
      function s(k) {
        return B(1708) + k + ")";
      }
      function o(k) {
        const p = B;
        return k === void 0 ? p(2634) : k === null ? p(2382) : Object[p(1166)][p(879)].call(k)[p(2248)](" ")[p(2087)]()[p(2248)]("]").shift().toLowerCase();
      }
      function c(k) {
        return k[B(1834)]();
      }
      function d(k) {
        const p = B;
        return k != null ? k instanceof Array ? k : typeof k[p(1200)] !== p(2074) || k[p(2248)] || k[p(1218)] || k[p(2518)] ? [k] : Array[p(1166)][p(2602)][p(2518)](k) : [];
      }
      function u(k, p) {
        var v = k;
        if (p) for (var b in p)
          v[b] = p[b];
        return v;
      }
      function f(k) {
        const p = B;
        var v = "[A-Za-z]", b = p(966), z = r(b, p(1054)), H = s(s("%[EFef]" + z + "%" + z + z + "%" + z + z) + "|" + s("%[89A-Fa-f]" + z + "%" + z + z) + "|" + s("%" + z + z)), t0 = "[\\:\\/\\?\\#\\[\\]\\@]", c0 = "[\\!\\$\\&\\'\\(\\)\\*\\+\\,\\;\\=]", S0 = r(t0, c0), T0 = k ? p(1321) : "[]", H0 = k ? p(785) : "[]", P0 = r(v, b, p(1709), T0);
        s(v + r(v, b, p(2380)) + "*"), s(s(H + "|" + r(P0, c0, p(1604))) + "*");
        var A0 = s(s(p(2708)) + "|" + s(p(1970) + b) + "|" + s("1" + b + b) + "|" + s(p(1737) + b) + p(1512) + b), U0 = s(A0 + "\\." + A0 + "\\." + A0 + "\\." + A0), v0 = s(z + p(713)), M0 = s(s(v0 + "\\:" + v0) + "|" + U0), Z0 = s(s(v0 + "\\:") + p(2416) + M0), L0 = s(p(1798) + s(v0 + "\\:") + p(931) + M0), kx = s(s(v0) + p(1525) + s(v0 + "\\:") + p(1589) + M0), ox = s(s(s(v0 + "\\:") + p(2162) + v0) + p(1525) + s(v0 + "\\:") + "{3}" + M0), cx = s(s(s(v0 + "\\:") + p(1338) + v0) + "?\\:\\:" + s(v0 + "\\:") + p(1780) + M0), $x = s(s(s(v0 + "\\:") + p(2105) + v0) + p(1525) + v0 + "\\:" + M0), Rx = s(s(s(v0 + "\\:") + p(2063) + v0) + p(1525) + M0), tx = s(s(s(v0 + "\\:") + p(1762) + v0) + p(1525) + v0), dx = s(s(s(v0 + "\\:") + p(546) + v0) + p(1525)), ux = s([Z0, L0, kx, ox, cx, $x, Rx, tx, dx][p(2573)]("|")), vx = s(s(P0 + "|" + H) + "+");
        s(p(980) + z + p(1403) + r(P0, c0, "[\\:]") + "+"), s(s(H + "|" + r(P0, c0)) + "*");
        var fx = s(H + "|" + r(P0, c0, p(2471)));
        return s(s(H + "|" + r(P0, c0, p(2114))) + "+"), s(s(fx + "|" + r(p(1861), H0)) + "*"), { NOT_SCHEME: new RegExp(r(p(2399), v, b, p(2380)), "g"), NOT_USERINFO: new RegExp(r(p(1195), P0, c0), "g"), NOT_HOST: new RegExp(r("[^\\%\\[\\]\\:]", P0, c0), "g"), NOT_PATH: new RegExp(r(p(1220), P0, c0), "g"), NOT_PATH_NOSCHEME: new RegExp(r(p(1830), P0, c0), "g"), NOT_QUERY: new RegExp(r(p(2695), P0, c0, p(2400), H0), "g"), NOT_FRAGMENT: new RegExp(r(p(2695), P0, c0, p(2400)), "g"), ESCAPE: new RegExp(r(p(2399), P0, c0), "g"), UNRESERVED: new RegExp(P0, "g"), OTHER_CHARS: new RegExp(r("[^\\%]", P0, S0), "g"), PCT_ENCODED: new RegExp(H, "g"), IPV4ADDRESS: new RegExp("^(" + U0 + ")$"), IPV6ADDRESS: new RegExp("^\\[?(" + ux + ")" + s(s(p(968) + z + p(718)) + "(" + vx + ")") + p(2642)) };
      }
      var l = f(!1), g = f(!0), h = /* @__PURE__ */ function() {
        function k(p, v) {
          const b = B;
          var z = [], H = !0, t0 = !1, c0 = void 0;
          try {
            for (var S0 = p[Symbol[b(1230)]](), T0; !(H = (T0 = S0.next())[b(507)]) && (z[b(818)](T0[b(2391)]), !(v && z[b(1200)] === v)); H = !0)
              ;
          } catch (H0) {
            t0 = !0, c0 = H0;
          } finally {
            try {
              !H && S0[b(2187)] && S0[b(2187)]();
            } finally {
              if (t0) throw c0;
            }
          }
          return z;
        }
        return function(p, v) {
          const b = B;
          if (Array[b(2344)](p)) return p;
          if (Symbol.iterator in Object(p)) return k(p, v);
          throw new TypeError(b(2588));
        };
      }(), m = function(k) {
        const p = B;
        if (Array[p(2344)](k)) {
          for (var v = 0, b = Array(k[p(1200)]); v < k[p(1200)]; v++) b[v] = k[v];
          return b;
        } else return Array[p(781)](k);
      }, y = 2147483647, w = 36, S = 1, R = 26, A = 38, C = 700, P = 72, E = 128, D = "-", j = /^xn--/, M = /[^\0-\x7E]/, F = /[\x2E\u3002\uFF0E\uFF61]/g, N = { overflow: x(1272), "not-basic": "Illegal input >= 0x80 (not a basic code point)", "invalid-input": "Invalid input" }, U = w - S, $ = Math[x(1332)], V = String[x(2093)];
      function J(k) {
        throw new RangeError(N[k]);
      }
      function s0(k, p) {
        const v = x;
        for (var b = [], z = k[v(1200)]; z--; )
          b[z] = p(k[z]);
        return b;
      }
      function o0(k, p) {
        const v = x;
        var b = k[v(2248)]("@"), z = "";
        b[v(1200)] > 1 && (z = b[0] + "@", k = b[1]), k = k[v(2188)](F, ".");
        var H = k[v(2248)]("."), t0 = s0(H, p)[v(2573)](".");
        return z + t0;
      }
      function u0(k) {
        const p = x;
        for (var v = [], b = 0, z = k[p(1200)]; b < z; ) {
          var H = k[p(2254)](b++);
          if (H >= 55296 && H <= 56319 && b < z) {
            var t0 = k[p(2254)](b++);
            (t0 & 64512) == 56320 ? v[p(818)](((H & 1023) << 10) + (t0 & 1023) + 65536) : (v[p(818)](H), b--);
          } else v[p(818)](H);
        }
        return v;
      }
      var a0 = function(p) {
        const v = x;
        return String.fromCodePoint[v(1364)](String, m(p));
      }, f0 = function(p) {
        return p - 48 < 10 ? p - 22 : p - 65 < 26 ? p - 65 : p - 97 < 26 ? p - 97 : w;
      }, w0 = function(p, v) {
        return p + 22 + 75 * (p < 26) - ((v != 0) << 5);
      }, m0 = function(p, v, b) {
        var z = 0;
        for (p = b ? $(p / C) : p >> 1, p += $(p / v); p > U * R >> 1; z += w)
          p = $(p / U);
        return $(z + (U + 1) * p / (p + A));
      }, D0 = function(p) {
        const v = x;
        var b = [], z = p[v(1200)], H = 0, t0 = E, c0 = P, S0 = p[v(1428)](D);
        S0 < 0 && (S0 = 0);
        for (var T0 = 0; T0 < S0; ++T0)
          p[v(2254)](T0) >= 128 && J(v(2264)), b.push(p[v(2254)](T0));
        for (var H0 = S0 > 0 ? S0 + 1 : 0; H0 < z; ) {
          for (var P0 = H, A0 = 1, U0 = w; ; U0 += w) {
            H0 >= z && J(v(1210));
            var v0 = f0(p.charCodeAt(H0++));
            (v0 >= w || v0 > $((y - H) / A0)) && J(v(2040)), H += v0 * A0;
            var M0 = U0 <= c0 ? S : U0 >= c0 + R ? R : U0 - c0;
            if (v0 < M0) break;
            var Z0 = w - M0;
            A0 > $(y / Z0) && J(v(2040)), A0 *= Z0;
          }
          var L0 = b.length + 1;
          c0 = m0(H - P0, L0, P0 == 0), $(H / L0) > y - t0 && J(v(2040)), t0 += $(H / L0), H %= L0, b.splice(H++, 0, t0);
        }
        return String[v(1814)][v(1364)](String, b);
      }, E0 = function(p) {
        const v = x;
        var b = [];
        p = u0(p);
        var z = p.length, H = E, t0 = 0, c0 = P, S0 = !0, T0 = !1, H0 = void 0;
        try {
          for (var P0 = p[Symbol[v(1230)]](), A0; !(S0 = (A0 = P0[v(1459)]()).done); S0 = !0) {
            var U0 = A0.value;
            U0 < 128 && b[v(818)](V(U0));
          }
        } catch (Qx) {
          T0 = !0, H0 = Qx;
        } finally {
          try {
            !S0 && P0[v(2187)] && P0[v(2187)]();
          } finally {
            if (T0) throw H0;
          }
        }
        var v0 = b[v(1200)], M0 = v0;
        for (v0 && b[v(818)](D); M0 < z; ) {
          var Z0 = y, L0 = !0, kx = !1, ox = void 0;
          try {
            for (var cx = p[Symbol[v(1230)]](), $x; !(L0 = ($x = cx[v(1459)]())[v(507)]); L0 = !0) {
              var Rx = $x[v(2391)];
              Rx >= H && Rx < Z0 && (Z0 = Rx);
            }
          } catch (Qx) {
            kx = !0, ox = Qx;
          } finally {
            try {
              !L0 && cx[v(2187)] && cx.return();
            } finally {
              if (kx) throw ox;
            }
          }
          var tx = M0 + 1;
          Z0 - H > $((y - t0) / tx) && J(v(2040)), t0 += (Z0 - H) * tx, H = Z0;
          var dx = !0, ux = !1, vx = void 0;
          try {
            for (var fx = p[Symbol[v(1230)]](), mr; !(dx = (mr = fx[v(1459)]()).done); dx = !0) {
              var gr = mr[v(2391)];
              if (gr < H && ++t0 > y && J(v(2040)), gr == H) {
                for (var ce = t0, de = w; ; de += w) {
                  var ue = de <= c0 ? S : de >= c0 + R ? R : de - c0;
                  if (ce < ue) break;
                  var vr = ce - ue, yr = w - ue;
                  b[v(818)](V(w0(ue + vr % yr, 0))), ce = $(vr / yr);
                }
                b.push(V(w0(ce, 0))), c0 = m0(t0, tx, M0 == v0), t0 = 0, ++M0;
              }
            }
          } catch (Qx) {
            ux = !0, vx = Qx;
          } finally {
            try {
              !dx && fx[v(2187)] && fx[v(2187)]();
            } finally {
              if (ux) throw vx;
            }
          }
          ++t0, ++H;
        }
        return b[v(2573)]("");
      }, J0 = function(p) {
        return o0(p, function(v) {
          const b = B;
          return j[b(1313)](v) ? D0(v.slice(4)[b(1466)]()) : v;
        });
      }, T = function(p) {
        return o0(p, function(v) {
          const b = B;
          return M[b(1313)](v) ? b(1733) + E0(v) : v;
        });
      }, q = { version: x(786), ucs2: { decode: u0, encode: a0 }, decode: D0, encode: E0, toASCII: T, toUnicode: J0 }, L = {};
      function Q(k) {
        const p = x;
        var v = k[p(2254)](0), b = void 0;
        return v < 16 ? b = "%0" + v[p(879)](16)[p(1834)]() : v < 128 ? b = "%" + v[p(879)](16)[p(1834)]() : v < 2048 ? b = "%" + (v >> 6 | 192).toString(16)[p(1834)]() + "%" + (v & 63 | 128)[p(879)](16)[p(1834)]() : b = "%" + (v >> 12 | 224).toString(16)[p(1834)]() + "%" + (v >> 6 & 63 | 128)[p(879)](16)[p(1834)]() + "%" + (v & 63 | 128)[p(879)](16).toUpperCase(), b;
      }
      function G(k) {
        const p = x;
        for (var v = "", b = 0, z = k.length; b < z; ) {
          var H = parseInt(k.substr(b + 1, 2), 16);
          if (H < 128) v += String[p(2093)](H), b += 3;
          else if (H >= 194 && H < 224) {
            if (z - b >= 6) {
              var t0 = parseInt(k.substr(b + 4, 2), 16);
              v += String[p(2093)]((H & 31) << 6 | t0 & 63);
            } else v += k[p(1221)](b, 6);
            b += 6;
          } else if (H >= 224) {
            if (z - b >= 9) {
              var c0 = parseInt(k.substr(b + 4, 2), 16), S0 = parseInt(k[p(1221)](b + 7, 2), 16);
              v += String.fromCharCode((H & 15) << 12 | (c0 & 63) << 6 | S0 & 63);
            } else v += k[p(1221)](b, 9);
            b += 9;
          } else v += k.substr(b, 3), b += 3;
        }
        return v;
      }
      function Z(k, p) {
        const v = x;
        function b(z) {
          const H = B;
          var t0 = G(z);
          return t0[H(799)](p.UNRESERVED) ? t0 : z;
        }
        return k[v(1387)] && (k[v(1387)] = String(k[v(1387)])[v(2188)](p.PCT_ENCODED, b).toLowerCase()[v(2188)](p[v(1749)], "")), k[v(2572)] !== void 0 && (k[v(2572)] = String(k[v(2572)])[v(2188)](p[v(1882)], b).replace(p[v(1915)], Q)[v(2188)](p[v(1882)], c)), k[v(1608)] !== void 0 && (k.host = String(k.host)[v(2188)](p[v(1882)], b)[v(1466)]()[v(2188)](p[v(2239)], Q)[v(2188)](p[v(1882)], c)), k[v(1728)] !== void 0 && (k.path = String(k[v(1728)])[v(2188)](p.PCT_ENCODED, b)[v(2188)](k[v(1387)] ? p.NOT_PATH : p[v(2233)], Q)[v(2188)](p[v(1882)], c)), k[v(2066)] !== void 0 && (k[v(2066)] = String(k[v(2066)])[v(2188)](p[v(1882)], b)[v(2188)](p[v(1126)], Q)[v(2188)](p.PCT_ENCODED, c)), k[v(732)] !== void 0 && (k[v(732)] = String(k[v(732)])[v(2188)](p[v(1882)], b)[v(2188)](p[v(2738)], Q)[v(2188)](p[v(1882)], c)), k;
      }
      function Y(k) {
        return k.replace(/^0*(.*)/, "$1") || "0";
      }
      function n0(k, p) {
        const v = x;
        var b = k.match(p.IPV4ADDRESS) || [], z = h(b, 2), H = z[1];
        return H ? H.split(".")[v(2404)](Y).join(".") : k;
      }
      function i0(k, p) {
        const v = x;
        var b = k.match(p[v(2405)]) || [], z = h(b, 3), H = z[1], t0 = z[2];
        if (H) {
          for (var c0 = H[v(1466)]()[v(2248)]("::")[v(1725)](), S0 = h(c0, 2), T0 = S0[0], H0 = S0[1], P0 = H0 ? H0[v(2248)](":")[v(2404)](Y) : [], A0 = T0.split(":")[v(2404)](Y), U0 = p[v(853)].test(A0[A0[v(1200)] - 1]), v0 = U0 ? 7 : 8, M0 = A0[v(1200)] - v0, Z0 = Array(v0), L0 = 0; L0 < v0; ++L0)
            Z0[L0] = P0[L0] || A0[M0 + L0] || "";
          U0 && (Z0[v0 - 1] = n0(Z0[v0 - 1], p));
          var kx = Z0[v(2257)](function(tx, dx, ux) {
            const vx = v;
            if (!dx || dx === "0") {
              var fx = tx[tx[vx(1200)] - 1];
              fx && fx[vx(1857)] + fx[vx(1200)] === ux ? fx[vx(1200)]++ : tx.push({ index: ux, length: 1 });
            }
            return tx;
          }, []), ox = kx[v(974)](function(tx, dx) {
            const ux = v;
            return dx[ux(1200)] - tx[ux(1200)];
          })[0], cx = void 0;
          if (ox && ox[v(1200)] > 1) {
            var $x = Z0[v(2602)](0, ox[v(1857)]), Rx = Z0.slice(ox[v(1857)] + ox.length);
            cx = $x.join(":") + "::" + Rx.join(":");
          } else cx = Z0[v(2573)](":");
          return t0 && (cx += "%" + t0), cx;
        } else return k;
      }
      var x0 = /^(?:([^:\/?#]+):)?(?:\/\/((?:([^\/?#@]*)@)?(\[[^\/?#\]]+\]|[^\/?#:]*)(?:\:(\d*))?))?([^?#]*)(?:\?([^#]*))?(?:#((?:.|\n|\r)*))?/i, j0 = "".match(/(){0}/)[1] === void 0;
      function q0(k) {
        const p = x;
        var v = arguments[p(1200)] > 1 && arguments[1] !== void 0 ? arguments[1] : {}, b = {}, z = v[p(772)] !== !1 ? g : l;
        v[p(2190)] === "suffix" && (k = (v.scheme ? v.scheme + ":" : "") + "//" + k);
        var H = k[p(799)](x0);
        if (H) {
          j0 ? (b[p(1387)] = H[1], b[p(2572)] = H[3], b[p(1608)] = H[4], b[p(1724)] = parseInt(H[5], 10), b[p(1728)] = H[6] || "", b.query = H[7], b[p(732)] = H[8], isNaN(b.port) && (b[p(1724)] = H[5])) : (b[p(1387)] = H[1] || void 0, b.userinfo = k[p(2170)]("@") !== -1 ? H[3] : void 0, b[p(1608)] = k[p(2170)]("//") !== -1 ? H[4] : void 0, b.port = parseInt(H[5], 10), b[p(1728)] = H[6] || "", b.query = k[p(2170)]("?") !== -1 ? H[7] : void 0, b[p(732)] = k.indexOf("#") !== -1 ? H[8] : void 0, isNaN(b[p(1724)]) && (b[p(1724)] = k[p(799)](/\/\/(?:.|\n)*\:(?:\/|\?|\#|$)/) ? H[4] : void 0)), b[p(1608)] && (b[p(1608)] = i0(n0(b[p(1608)], z), z)), b[p(1387)] === void 0 && b[p(2572)] === void 0 && b[p(1608)] === void 0 && b[p(1724)] === void 0 && !b.path && b[p(2066)] === void 0 ? b.reference = "same-document" : b[p(1387)] === void 0 ? b[p(2190)] = p(2086) : b[p(732)] === void 0 ? b[p(2190)] = p(1667) : b[p(2190)] = p(2155), v[p(2190)] && v[p(2190)] !== p(1855) && v[p(2190)] !== b[p(2190)] && (b.error = b[p(2389)] || "URI is not a " + v[p(2190)] + p(1952));
          var t0 = L[(v.scheme || b[p(1387)] || "").toLowerCase()];
          if (!v.unicodeSupport && (!t0 || !t0[p(541)])) {
            if (b.host && (v[p(588)] || t0 && t0[p(588)])) try {
              b[p(1608)] = q.toASCII(b[p(1608)].replace(z[p(1882)], G)[p(1466)]());
            } catch (c0) {
              b.error = b[p(2389)] || p(1951) + c0;
            }
            Z(b, l);
          } else Z(b, z);
          t0 && t0.parse && t0.parse(b, v);
        } else b[p(2389)] = b[p(2389)] || p(1875);
        return b;
      }
      function $0(k, p) {
        const v = x;
        var b = p[v(772)] !== !1 ? g : l, z = [];
        return k.userinfo !== void 0 && (z[v(818)](k[v(2572)]), z[v(818)]("@")), k.host !== void 0 && z[v(818)](i0(n0(String(k[v(1608)]), b), b)[v(2188)](b[v(2405)], function(H, t0, c0) {
          const S0 = v;
          return "[" + t0 + (c0 ? S0(1809) + c0 : "") + "]";
        })), (typeof k.port === v(2074) || typeof k[v(1724)] === v(923)) && (z[v(818)](":"), z[v(818)](String(k[v(1724)]))), z[v(1200)] ? z[v(2573)]("") : void 0;
      }
      var b0 = /^\.\.?\//, K0 = /^\/\.(\/|$)/, sx = /^\/\.\.(\/|$)/, Q0 = /^\/?(?:.|\n)*?(?=\/|$)/;
      function O0(k) {
        const p = x;
        for (var v = []; k[p(1200)]; )
          if (k[p(799)](b0)) k = k[p(2188)](b0, "");
          else if (k.match(K0)) k = k[p(2188)](K0, "/");
          else if (k[p(799)](sx)) k = k[p(2188)](sx, "/"), v.pop();
          else if (k === "." || k === "..") k = "";
          else {
            var b = k[p(799)](Q0);
            if (b) {
              var z = b[0];
              k = k[p(2602)](z[p(1200)]), v[p(818)](z);
            } else throw new Error(p(2509));
          }
        return v[p(2573)]("");
      }
      function z0(k) {
        const p = x;
        var v = arguments[p(1200)] > 1 && arguments[1] !== void 0 ? arguments[1] : {}, b = v[p(772)] ? g : l, z = [], H = L[(v[p(1387)] || k[p(1387)] || "")[p(1466)]()];
        if (H && H.serialize && H[p(538)](k, v), k[p(1608)] && !b[p(2405)][p(1313)](k[p(1608)])) {
          if (v[p(588)] || H && H[p(588)]) try {
            k[p(1608)] = v[p(772)] ? q.toUnicode(k.host) : q.toASCII(k[p(1608)][p(2188)](b.PCT_ENCODED, G).toLowerCase());
          } catch (S0) {
            k.error = k[p(2389)] || p(2045) + (v[p(772)] ? p(1351) : p(1177)) + p(2010) + S0;
          }
        }
        Z(k, b), v[p(2190)] !== "suffix" && k[p(1387)] && (z[p(818)](k[p(1387)]), z.push(":"));
        var t0 = $0(k, v);
        if (t0 !== void 0 && (v[p(2190)] !== p(1855) && z[p(818)]("//"), z[p(818)](t0), k[p(1728)] && k[p(1728)][p(1128)](0) !== "/" && z[p(818)]("/")), k[p(1728)] !== void 0) {
          var c0 = k[p(1728)];
          !v[p(2017)] && (!H || !H[p(2017)]) && (c0 = O0(c0)), t0 === void 0 && (c0 = c0.replace(/^\/\//, "/%2F")), z.push(c0);
        }
        return k.query !== void 0 && (z.push("?"), z[p(818)](k[p(2066)])), k[p(732)] !== void 0 && (z.push("#"), z.push(k.fragment)), z[p(2573)]("");
      }
      function X0(k, p) {
        const v = x;
        var b = arguments[v(1200)] > 2 && arguments[2] !== void 0 ? arguments[2] : {}, z = arguments[3], H = {};
        return !z && (k = q0(z0(k, b), b), p = q0(z0(p, b), b)), b = b || {}, !b[v(1872)] && p[v(1387)] ? (H[v(1387)] = p[v(1387)], H[v(2572)] = p[v(2572)], H[v(1608)] = p[v(1608)], H[v(1724)] = p[v(1724)], H[v(1728)] = O0(p[v(1728)] || ""), H[v(2066)] = p.query) : (p.userinfo !== void 0 || p.host !== void 0 || p[v(1724)] !== void 0 ? (H[v(2572)] = p[v(2572)], H.host = p[v(1608)], H[v(1724)] = p.port, H[v(1728)] = O0(p.path || ""), H.query = p[v(2066)]) : (p[v(1728)] ? (p.path[v(1128)](0) === "/" ? H[v(1728)] = O0(p[v(1728)]) : ((k.userinfo !== void 0 || k[v(1608)] !== void 0 || k[v(1724)] !== void 0) && !k.path ? H[v(1728)] = "/" + p.path : k[v(1728)] ? H[v(1728)] = k[v(1728)][v(2602)](0, k.path[v(1428)]("/") + 1) + p.path : H[v(1728)] = p[v(1728)], H[v(1728)] = O0(H[v(1728)])), H[v(2066)] = p[v(2066)]) : (H.path = k[v(1728)], p[v(2066)] !== void 0 ? H.query = p.query : H[v(2066)] = k[v(2066)]), H[v(2572)] = k.userinfo, H.host = k.host, H[v(1724)] = k[v(1724)]), H[v(1387)] = k[v(1387)]), H[v(732)] = p.fragment, H;
      }
      function Bx(k, p, v) {
        var z = u({ scheme: x(2382) }, v);
        return z0(X0(q0(k, z), q0(p, z), z, !0), z);
      }
      function Le(k, p) {
        const v = x;
        return typeof k === v(923) ? k = z0(q0(k, p), p) : o(k) === v(2437) && (k = q0(z0(k, p), p)), k;
      }
      function ir(k, p, v) {
        const b = x;
        return typeof k === b(923) ? k = z0(q0(k, v), v) : o(k) === b(2437) && (k = z0(k, v)), typeof p == "string" ? p = z0(q0(p, v), v) : o(p) === "object" && (p = z0(p, v)), k === p;
      }
      function ys(k, p) {
        const v = x;
        return k && k[v(879)]()[v(2188)](!p || !p[v(772)] ? l[v(2458)] : g[v(2458)], Q);
      }
      function gx(k, p) {
        const v = x;
        return k && k[v(879)]().replace(!p || !p[v(772)] ? l[v(1882)] : g[v(1882)], G);
      }
      var Kx = { scheme: "http", domainHost: !0, parse: function(p, v) {
        const b = x;
        return !p[b(1608)] && (p[b(2389)] = p[b(2389)] || b(771)), p;
      }, serialize: function(p, v) {
        const b = x;
        var z = String(p[b(1387)])[b(1466)]() === b(1100);
        return (p[b(1724)] === (z ? 443 : 80) || p[b(1724)] === "") && (p[b(1724)] = void 0), !p[b(1728)] && (p.path = "/"), p;
      } }, or = { scheme: x(1100), domainHost: Kx.domainHost, parse: Kx[x(2156)], serialize: Kx.serialize };
      function cr(k) {
        const p = x;
        return typeof k[p(1527)] == "boolean" ? k[p(1527)] : String(k[p(1387)]).toLowerCase() === "wss";
      }
      var Jx = { scheme: "ws", domainHost: !0, parse: function(p, v) {
        const b = x;
        var z = p;
        return z.secure = cr(z), z[b(1019)] = (z[b(1728)] || "/") + (z[b(2066)] ? "?" + z[b(2066)] : ""), z.path = void 0, z[b(2066)] = void 0, z;
      }, serialize: function(p, v) {
        const b = x;
        if ((p[b(1724)] === (cr(p) ? 443 : 80) || p[b(1724)] === "") && (p[b(1724)] = void 0), typeof p[b(1527)] === b(958) && (p[b(1387)] = p[b(1527)] ? "wss" : "ws", p[b(1527)] = void 0), p.resourceName) {
          var z = p[b(1019)].split("?"), H = h(z, 2), t0 = H[0], c0 = H[1];
          p[b(1728)] = t0 && t0 !== "/" ? t0 : void 0, p[b(2066)] = c0, p[b(1019)] = void 0;
        }
        return p[b(732)] = void 0, p;
      } }, dr = { scheme: "wss", domainHost: Jx[x(588)], parse: Jx[x(2156)], serialize: Jx[x(538)] }, bs = {}, ur = "[A-Za-z0-9\\-\\.\\_\\~" + x(1143) + "]", ix = "[0-9A-Fa-f]", ws = s(s(x(2014) + ix + "%" + ix + ix + "%" + ix + ix) + "|" + s(x(2520) + ix + "%" + ix + ix) + "|" + s("%" + ix + ix)), Ss = x(1556), Ps = x(1216), ks = r(Ps, '[\\"\\\\]'), Es = x(2578), Cs = new RegExp(ur, "g"), Lx = new RegExp(ws, "g"), Is = new RegExp(r(x(2399), Ss, x(2599), x(1837), ks), "g"), fr = new RegExp(r(x(2399), ur, Es), "g"), Rs = fr;
      function $e(k) {
        const p = x;
        var v = G(k);
        return v[p(799)](Cs) ? v : k;
      }
      var lr = { scheme: x(2071), parse: function(p, v) {
        const b = x;
        var z = p, H = z.to = z.path ? z.path[b(2248)](",") : [];
        if (z[b(1728)] = void 0, z[b(2066)]) {
          for (var t0 = !1, c0 = {}, S0 = z[b(2066)][b(2248)]("&"), T0 = 0, H0 = S0.length; T0 < H0; ++T0) {
            var P0 = S0[T0][b(2248)]("=");
            switch (P0[0]) {
              case "to":
                for (var A0 = P0[1][b(2248)](","), U0 = 0, v0 = A0.length; U0 < v0; ++U0)
                  H[b(818)](A0[U0]);
                break;
              case b(1263):
                z.subject = gx(P0[1], v);
                break;
              case "body":
                z.body = gx(P0[1], v);
                break;
              default:
                t0 = !0, c0[gx(P0[0], v)] = gx(P0[1], v);
                break;
            }
          }
          t0 && (z[b(1899)] = c0);
        }
        z[b(2066)] = void 0;
        for (var M0 = 0, Z0 = H[b(1200)]; M0 < Z0; ++M0) {
          var L0 = H[M0].split("@");
          if (L0[0] = gx(L0[0]), v[b(541)]) L0[1] = gx(L0[1], v)[b(1466)]();
          else try {
            L0[1] = q[b(1433)](gx(L0[1], v).toLowerCase());
          } catch (kx) {
            z[b(2389)] = z[b(2389)] || b(1417) + kx;
          }
          H[M0] = L0.join("@");
        }
        return z;
      }, serialize: function(p, v) {
        const b = x;
        var z = p, H = d(p.to);
        if (H) {
          for (var t0 = 0, c0 = H.length; t0 < c0; ++t0) {
            var S0 = String(H[t0]), T0 = S0[b(1428)]("@"), H0 = S0.slice(0, T0).replace(Lx, $e).replace(Lx, c).replace(Is, Q), P0 = S0[b(2602)](T0 + 1);
            try {
              P0 = v[b(772)] ? q.toUnicode(P0) : q[b(1433)](gx(P0, v)[b(1466)]());
            } catch (M0) {
              z.error = z[b(2389)] || b(2103) + (v[b(772)] ? b(1351) : b(1177)) + b(2010) + M0;
            }
            H[t0] = H0 + "@" + P0;
          }
          z[b(1728)] = H.join(",");
        }
        var A0 = p[b(1899)] = p[b(1899)] || {};
        p[b(1263)] && (A0[b(1263)] = p[b(1263)]), p[b(2271)] && (A0[b(2271)] = p[b(2271)]);
        var U0 = [];
        for (var v0 in A0)
          A0[v0] !== bs[v0] && U0[b(818)](v0[b(2188)](Lx, $e)[b(2188)](Lx, c)[b(2188)](fr, Q) + "=" + A0[v0][b(2188)](Lx, $e)[b(2188)](Lx, c)[b(2188)](Rs, Q));
        return U0[b(1200)] && (z[b(2066)] = U0[b(2573)]("&")), z;
      } }, Fs = /^([^\:]+)\:(.*)/, hr = { scheme: "urn", parse: function(p, v) {
        const b = x;
        var z = p[b(1728)] && p.path[b(799)](Fs), H = p;
        if (z) {
          var t0 = v[b(1387)] || H[b(1387)] || b(502), c0 = z[1][b(1466)](), S0 = z[2], T0 = t0 + ":" + (v.nid || c0), H0 = L[T0];
          H[b(1315)] = c0, H[b(567)] = S0, H[b(1728)] = void 0, H0 && (H = H0.parse(H, v));
        } else H[b(2389)] = H[b(2389)] || b(2690);
        return H;
      }, serialize: function(p, v) {
        const b = x;
        var z = v.scheme || p.scheme || "urn", H = p[b(1315)], t0 = z + ":" + (v[b(1315)] || H), c0 = L[t0];
        c0 && (p = c0[b(538)](p, v));
        var S0 = p, T0 = p[b(567)];
        return S0[b(1728)] = (H || v[b(1315)]) + ":" + T0, S0;
      } }, Ns = /^[0-9A-Fa-f]{8}(?:\-[0-9A-Fa-f]{4}){3}\-[0-9A-Fa-f]{12}$/, pr = { scheme: x(1115), parse: function(p, v) {
        const b = x;
        var z = p;
        return z.uuid = z[b(567)], z[b(567)] = void 0, !v[b(1872)] && (!z[b(2035)] || !z.uuid[b(799)](Ns)) && (z[b(2389)] = z.error || b(1482)), z;
      }, serialize: function(p, v) {
        const b = x;
        var z = p;
        return z[b(567)] = (p[b(2035)] || "")[b(1466)](), z;
      } };
      L[Kx.scheme] = Kx, L[or[x(1387)]] = or, L[Jx[x(1387)]] = Jx, L[dr[x(1387)]] = dr, L[lr[x(1387)]] = lr, L[hr[x(1387)]] = hr, L[pr.scheme] = pr, a[x(2108)] = L, a[x(1730)] = Q, a.pctDecChars = G, a[x(2156)] = q0, a[x(1076)] = O0, a[x(538)] = z0, a[x(614)] = X0, a[x(1987)] = Bx, a.normalize = Le, a[x(971)] = ir, a[x(888)] = ys, a.unescapeComponent = gx, Object[x(1907)](a, x(2157), { value: !0 });
    });
  }(Xx, Xx.exports), Xx[i(1791)]);
}
var He, Or;
function rr() {
  return Or || (Or = 1, He = function i(e, t) {
    const a = B;
    if (e === t) return !0;
    if (e && t && typeof e == a(2437) && typeof t == a(2437)) {
      if (e[a(2331)] !== t[a(2331)]) return !1;
      var x, r, s;
      if (Array[a(2344)](e)) {
        if (x = e.length, x != t[a(1200)]) return !1;
        for (r = x; r-- !== 0; ) if (!i(e[r], t[r])) return !1;
        return !0;
      }
      if (e[a(2331)] === RegExp) return e[a(1411)] === t[a(1411)] && e[a(1483)] === t[a(1483)];
      if (e[a(1764)] !== Object.prototype[a(1764)]) return e[a(1764)]() === t.valueOf();
      if (e.toString !== Object[a(1166)][a(879)]) return e[a(879)]() === t[a(879)]();
      if (s = Object.keys(e), x = s.length, x !== Object[a(2278)](t)[a(1200)]) return !1;
      for (r = x; r-- !== 0; ) if (!Object.prototype[a(2452)][a(2518)](t, s[r])) return !1;
      for (r = x; r-- !== 0; ) {
        var o = s[r];
        if (!i(e[o], t[o])) return !1;
      }
      return !0;
    }
    return e !== e && t !== t;
  }), He;
}
var Ue, Ar;
function So() {
  return Ar || (Ar = 1, Ue = function(e) {
    const t = B;
    for (var a = 0, x = e[t(1200)], r = 0, s; r < x; )
      a++, s = e[t(2254)](r++), s >= 55296 && s <= 56319 && r < x && (s = e[t(2254)](r), (s & 64512) == 56320 && r++);
    return a;
  }), Ue;
}
var Ve, Tr;
function Ie() {
  const i = ["delete", "; else vErrors = vErrors.concat(", "; else vErrors = null; }  ", " for language ", ", (dataPath || '')", "toResolveHierarchy", "Comfy侧SDPPP版本({{comfyVersion}})与插件({{pluginVersion}})不匹配，运行可能有问题", "dataPathArr", "_error", "skipKeywords", "toLoad", "coerceTypes", " ? '", "isValidLookup", "reloadResources", "comfyAPI is not initialized, maybe comfyUI is too old", "requestIdSeq", "https://github.com/ajv-validator/ajv/blob/master/lib/definition_schema.js", "addResources", "pow", "Note", "; else if (", "sdppp-heartbeat", "action", " = false; if (e instanceof ValidationError) ", " , params: { comparison: ", "onClose", "parentData", ".dataPath = (dataPath || '') + ", "notifications/resources/updated", "No linked layer for {{0}}", "https://raw.githubusercontent.com/ajv-validator/ajv/master/lib/refs/data.json#", "~standard", "minValue", "options", "ParseError", "languageDetector", "URN can not be parsed.", ".call(this, ", "maxLength", "All", "namespaces", "[^\\%]", "received", "适配至当前图层", "__cycle__", "concat", "Back", " , data: ", " = typeof ", "some", "logging/setLevel", " retries", " < ", "_addCheck", "25[0-5]", "setupConnectionHandlers", "sendToolListChanged", "newlayer_canvas", "favorites", " && !(", "images", " from id ", ".type || 'string'; if (", "maxRetries", "getNodeIds", "#6600CC", "', missingProperty: '", "uniqueItems", "Server does not support notifying of prompt list changes (required for ", ` + '" schema' `, "DateTimeFormat", "ZodObject", "saveMissingPlurals", "listeners", "transport", "def", "#FF0000", " = false; else if (", "safeParse", " ( ", "' + ", "actionExecutor", "isSafeInteger", "Sending image...", "NOT_FRAGMENT", "wait", "; }   var err =   ", "unwrap", "_regex", "找不到图层: {{0}}", "_compile", "onAbort", "url", "不裁剪", "finally", "resolvedOptions", "long", "graph", "async schema in sync schema", "click", "trim", "exactly", " not found on node ", "#FF00FF", "ZodEnum", "disconnected", "给发送的图片创建文档", " , params: { missingProperty: '", " + ']'", "mountedEndpoints", "extendTranslation", 'no schema with key or ref "', "Download", "alert", "InvalidRequest", "interpolate", "multipleOf", "Waiting in queue", "urn", " , message: 'should NOT be ", "del", "objectValues", "Expected ", "done", "less than or equal to", "ZodString", "set", " != 'undefined' && ", "_processInputParams", "arz", "]; if (", "Get selection failed", "mergeObjectSync", "cuid", ";  if (vErrors === null) vErrors = [err]; else vErrors.push(err); errors++; ", "destroy", 'Invalid input: must start with "', " , schema: false , parentSchema: validate.schema", "你的工作流", "RULES", " var isAdditional", "isDuration", "合并组失败", "getConnection", "sdppp_widgetable_title", "week", "types", "relative-json-pointer", "服务不可用 (503)", "invalid_enum_value", "Login Successful", " ms", "ctx", "#00CC66", "serialize", "round", "exists", "unicodeSupport", "logging", "effect", "partialBundledLanguages", "_responseHandlers", "{0,6}", "; if (validate.errors !== null) { if (errors) validate.errors.length = errors; else validate.errors = null; } delete ", "parent", ".additionalItems", " if (schema", " , (dataPath || '')", "saveMissing", " if (errors === ", "throwIfAborted", "onclose", "pluralCategories", "InternalError", "当前图层", "isURL", ".length > ", "tools/call", "[0]; ", "; if (", "uiWeightSum", "No first related layer in {{0}}", "Canvas", "nss", "contextualErrorMap", "count", "validation", "property", "style", "createErrors", "missed to pass in variable ", "maxProperties", "queue", "uxp", "errSchemaPath", "Internal error", "sendErrorResponse", "sourceCode", "nodeId", "BigInt must be ", "获取选区失败", "yrs", "entries", "DEBUG", "domainHost", "invalid_return_type", "resetTimeoutOnProgress", "schema should be object or boolean", "ZodBigInt", "usePattern", "optionsMap", "Failed to request initial state for ", '" (see option extendRefs)', "pre", "clearItems", "max", " == 'object' && Array.isArray(", " = true; if (", "arrayKeywords", "loadSchema", "([01]\\d|2[0-3]):[0-5]\\d(:", "findPath", "min", "alwaysFormat", "comfyAPI", "Exclude selection", "brand", "clear", " = errors;var ", "convert widget {0} failed:", "resolveComponents", "fallbackNS", "Client does not support sampling (required for ", "Discriminator property ", "setPrototypeOf", "显示发送的图片", "Number must be ", "开启自动运行", "; else vErrors = null; } ", ".dataPath === undefined) ", "清空所有图片", "#FFCC33", "); errors = vErrors.length;  for (var ", "table", "client", "3077619YjcjzC", "mesh:state:update", "服务器错误 (500)", "[j])) { ", "formData", "sdppp", " == null) ", "适配至画布", " && ", "dataType", "MIN_SAFE_INTEGER", " = validate.schema", "catch", "rootId", "Unauthorized (401)", ") : ", "Confirm", "safeParseAsync", "changeTracker", "Crop by selection", "#FF33FF", "Server does not support sampling (required for ", "kind", " not implemented for node ", "usedNS", "lastIndex", "connected", "relatedRequestId", "load", "invalid_intersection_types", "initialState", " outer: for (;i--;) { for (j = i; j--;) { if (equal(", ";  ", "createInstance", "当前任务数:", "openWorkflowJSON", "uiWeight", "mountTo", "tools", "执行成功", "missingKeyNoValueFallbackToKey", "nonempty", "emergency", "range", " not in path ", "__internal_requestInitialState_", "formatter", "resolveRunImages", "setupConnectionCloseHandler", " var schema", "))))) {", "Please select the image to get", "_cachedPath", "]; return false; ", "^(\\p{Extended_Pictographic}|\\p{Emoji_Component})+$", "_cached", "getConnectionToNodeInternal", " console.log(", "exec_info", "'].definition; var ", "symbol", "valueType", "readonly", "heartbeatInterval", "channel", " %c", "registerHandler", "_progressHandlers", "closeWorkflow", " , message: 'should NOT have ", "unrecognized_keys", "pes", "Elicitation response content does not match requested schema: ", "setupStreamHandlers", "cuid2", " = formats[", "/required", "there was no format function for ", "openWorkflow", "Server does not support logging (required for ", "onmessage", "isProducer", "language", "Document {{0}} not found", "{1,4}", "find", "addIssue", "exclusive", "reset", "{2})", "粘贴你的模型名称", "sendPromptListChanged", " when property ", "Current Layer", ` , message: 'should match format "`, "workflows/", "No images", "data", "schema", " === undefined || ", "快捷键选图功能仅登陆后可用", "checkDataType", "_serverInfo", "fragment", "queuePrompt", " !== undefined) ; ", "notice", "arb", "simplifyPluralSuffix", "property ", ".type", "registerProxyForwardHandler", "customRule", "; }", "processors", "acm", "dfsInterval", "createNotificationHandler", "assign", "发送到PS", "protocol", "escapeFragment", "Node definition not found for current node ", "allOf", "Uploading, if the image too large, may be stuck...", "++) { ", "protocolVersion", "maximum", "#3399CC", "sourceType", "widgets", "spa", "afb", " var startErrs", "Jump to last", "__DEFAULT__", "objectKeys", "node_id", " / ", "warning", "__proto__", " + '", "HTTP URIs must have a host.", "iri", "正向裁剪(Outpaint)", ` , message: 'should pass "`, "sqr", "parentElement", ") {  var err =   ", "sdppp/streamRequest", "initializeConsumer", "Task execution failed: {{error}}", "from", " = true; break; }", "ZodError", " || validate.schema", "[\\uE000-\\uF8FF]", "2.1.0", "isInteger", "#FF9900", "saveMissingTo", "parseAsync", "schemaPath", "useDefault", "humanize", "useDefaults", "$$$$", " = +", "toHash", "errorMap", "match", " = false; for (var ", "curlayer_curlayer", "removeItem", "prepareLoading", ";  if (vErrors === null) vErrors = [err]; else vErrors.push(err); errors++; } ", " validate.errors = vErrors; return false; ", "Fit to current layer", "sendLoggingMessage", "getRegExp", "[ ]*{", "contextSeparator", "varReplace", "names", "getCapabilities", "#FFCC00", "SDPPP may not be installed or version mismatch (404)", "log", ` if (typeof item == 'string') item = '"' + item; `, "push", "localeCompare", "正在创建任务...", "cleanup", "format", "cycles", "$id", "streamIterator", "ZodVoid", "joinValues", "isInt", "setDefaultNamespace", "setupAbortHandler", "$t(", "sdpppX2", ".else", "meta-schema not available", "#9933FF", "   ", "allErrors", " var ", "processCode", ") && (missing", "3461339pCsHsn", "exactLength", "Layer not found: {{0}}", " var validate = ", "isInitialized", "color: ", "readingCalls", "dataVar", "void", "未实现 (501)", "loaded", "isFinite(", "IPV4ADDRESS", "typeof ", "debug", "anyOf", "Show sent images", "coerce", "ownProperties", " than ", "random", "heartbeatTimeoutTimer", "unknown", "unescapeSuffix", " if (errors === 0) return data;           ", "http://json-schema.org/draft-07/schema", "hasAction", "rest", " = '' + ", "hasLoadedNamespace", "getConnectionToNode", "keyPrefix", " = undefined; ", "27354TIjOMo", "getBestMatchFromCodes", "version", " !== parseInt(division", "schemaHasRulesExcept", "toString", "` could not be extracted from all schema options", "registerCapabilities", "getLanguagePartFromCode", "ComfyUI加载中...", "getUsedParamsDetails", "outgoing", "Content", " var i = ", "escapeComponent", " return errors === 0;       ", " } catch (e) { if (!(e instanceof ValidationError)) throw e; if (vErrors === null) vErrors = e.errors; else vErrors = vErrors.concat(e.errors); errors = vErrors.length; ", "disable", "nodes", "filter", "pick", "removeCatch", "mergeArray", "dir", ")' returned an object instead of string.", "executed", "Failed to send response: ", ") ? ", "#00CC00", "remove", "_opts", ") == -1 ", "_loadingSchemas", "translate", " }  ", "var ", "Refresh workflow list", ".length; ", "_parseAsync", "ydd", "_addSchema", "store", "syncWorkflows", "pendingCount", "openWorkflows", "exclType", "assertNever", " = false; ", "按回车打开应用： {{appName}}", "string", "=startErrs", "exactly equal to ", "offset", "unknownFormats", "notifications/roots/list_changed", "_onrequest", "registerDirectRequestHandler", "{5}", "maxReplaces", "implementAction", " == 'string' && ", "positive", "$schema", "Create layer failed", "custom", "$schema must be a string", "removeNamespaces", "MissingRefError", "backend", "missingInterpolationHandler", "statements", "meta", "nan", "removeByRequestId", " , message: '", "acq", "$async", " self._opts.$comment(", "ZodNaN", "interrupt", "++) { if (", "ComfyManager not found, cannot reboot", "usedKey", " ) || ", "boolean", "minimum", "#00CCFF", " &&   Object.prototype.hasOwnProperty.call(", "Method not found", "omit", "No connection available", " === false) ", "[0-9]", "_cache", "\\%25|\\%(?!", "ckb", "errs__", "equal", "#9933CC", "isLanguageChangingTo", "sort", ".errors; else vErrors = vErrors.concat(", "nodeIndexes", "not_finite", "assertCanSetRequestHandler", "removeRequestHandler", "[vV]", "nullable", "registerBroadcastHandler", "auto", "); if (", "parseMissingKeyHandler", "date-time", "definitions", " + '\\']'", "handleDirectProxyForward", "Store not found for ", "getConnectionCount", "messageQueue", "Invalid ", "#3333FF", "_oninitialize", "Graph must have at least one node", "新图层", " } if (", '" ignored in schema at path "', "findPathInternal", "promise", "extra", "translator", " == errors) {", "dataLevel", " == ", "stream", "locale", "workflow", "快捷键选图功能仅在插件窗口聚焦时可用", "sd-ppp-static/sdppp_images/", "init: no languageDetector is used and no lng is defined", "baseId", " = vErrors[", " - no connection available", "schemaId", " !== undefined && ( typeof ", "#66CC33", "resourceName", "day", ".length , ", "cmp", "callValidate", "extendRefs", "languageOnly", ")) { ", " ucs2length(", "edges", "未授权 (401)", "schema id must be string", "enforceStrictCapabilities", "设置图层的文本", "if (", "color", "' , dataPath: (dataPath || '') + ", "this", "order", "finished", "formatters", "required", "_capabilities", "调整预览文档尺寸", "请输入您的RunningHub API Key", "Current Tasks:", "mergeObjectAsync", "sdppp/requestInitialState/", "自动从PS重新获取", "#33CCCC", "notifications/resources/list_changed", "async keyword in sync schema", ") break; ", "_schemas", ") {   ", "[A-Fa-f]", "item", "Get pixel of {{0}} failed", " must be number", "backendConnector", "ComfyUI服务器重连中", " = await ", "addCached", "supportedLngs", "You are passing a wrong module! Please check the object you are passing to i18next.use()", "messages", "splice", "Action handler ", "/additionalItems", "tools/list", " items' ", "checkDataTypes", "pga", "acw", "ayh", "sendStreamData", "pluralRulesCache", "removeDotSegments", "logger", "removeResourceBundle", "Get layer info", "网关超时 (504)", "Synchronous parse encountered promise.", "store:update:", "ayp", "#CCCC00", "isSupportedCode", "escapeQuotes", "logger must implement log, warn and error methods", "assertEqual", "datetime", "ZodNull", ") {  ", "filename", "Paste WebApp ID here", ".additionalProperties", "; if (vErrors !== null) { if (", "pluralSeparator", "Email: {{email}}", "year", "_parseSync", "https", "pingInterval", "isTop", "Save and run immediately", "Please select the position to send image", "errorPath", "isTime", "broadcastManager", "create", "values", "transform", ' !== "object")', "pipe", "if ( ", " = true , j; if (i > 1) { ", "urn:uuid", "initialized", "_getId", "[i], ", "should NOT have additional properties", ") break; } ", "getConnectionInternal", "negative", "创建预览文档", " = false; j = itemIndices[item]; break; } itemIndices[item] = i; } ", "strictDefaults", "NOT_QUERY", "executeHandlerAsync", "charAt", "root", "图层 {{0}} 不是一个组", "regex", " already exists, which would be overridden", "modules", "default is ignored in the schema root", "all", "isRoot", "ucs2length", "additionalItems", ";  if (vErrors === null) vErrors = [err]; else vErrors.push(err); errors++; } else if (", "close", "tried", " try { await ", "\\xA0-\\u200D\\u2010-\\u2029\\u202F-\\uD7FF\\uF900-\\uFDCF\\uFDF0-\\uFFEF", "formatParams", " element(s)", "appendNamespaceToMissingKey", "buildAdjacencyList", "_refs", "loadLanguages", "ZodCatch", "too_big", "forward", "RequestTimeout", "deprecate", "fallbackRequestHandler", "#66CC00", 'custom keyword "', "InvalidParams", " = false; else {", "\\.\\d{", 'key "', "assertNotificationCapability", "Heartbeat timeout for poster ", "/*# sourceURL=", " = ", "prototype", "lte", " } }", "isCUID", "getValidEnumValues", "#/definitions/simpleTypes", "detail", "Received a progress notification for an unknown token: ", "root.refVal[0]", "sendFinishedResponse", "isCUID2", "ASCII", "regexp", "nonpositive", "Number must be finite", "getCanonicalLocales", '";  ', "canvas", "ZodTuple", "hasConsumerBinding", "isBase64url", "addMetaSchema", "verbose", "ping", "regExpMap", "validate.schema", " in ", "getKeyword", "stateUpdate", "[^\\%\\:]", "array", "ValidationError", " !== ", "getPath", "length", ` , message: 'should match pattern "`, "skipInterpolation", ") || ", "code", "assertCapabilityForMethod", "addNamespaces", "Unknown error ({{code}})", "; } catch (e) { ", "passthrough", "invalid-input", "activeState", "pst", "minLength", ") { for (var ", "ulid", "[\\!\\$\\%\\'\\(\\)\\*\\+\\,\\-\\.0-9\\<\\>A-Z\\x5E-\\x7E]", "#9900FF", "setInterval", "languageChanged", "[^\\%\\/\\:\\@]", "substr", "strictNumbers", '.schemaPath = "', "translation", "Outpaint (positive crop)", " break; ", "ZodUnion", "ZodOptional", "加载中...", "iterator", " } }  ", "key", "getNodeTitle", "stopMonitoring", "services", "errToObj", " : ", "forEach", "Failed to reboot ComfyUI", " var async", "xmn", " for interpolating ", "send", "notifications/prompts/list_changed", "userDefinedKeySeparator", "precision", "escapeValue", "#FF9933", "exception", " { keyword: '", "执行失败", "enum", "typeName", ", '", "i18nFormat", "getNodeStore", "jsonStringifyReplacer", "validateHandlerType", "step", " = errors; var ", "get", "Create document for sent images", "subject", "isClone", "lowerCaseLng", "Comfy Manager未安装，无法重启", ", exclusive: ", "pending", "pong", "assertIs", "true", "Overflow: input needs wider integers to process", "detectCycles", "; var ", " cannot be resolved", "#0099FF", 'did not save key "', "int", "createStreamState", "subscribe", "catchall", "nullish", "days", ".length ", "formats", "partial", "Creating task...", "disconnect", "custom keyword definition is invalid: ", "merge", "unionErrors", "_any", " else { ", "lng", "ActionSet {{0}} 未找到", "missed to resolve ", "从PS", "off", "pbt", "reconnected", "#0033FF", `Can't use "invalid_type_error" or "required_error" in conjunction with custom error map.`, "Server does not support notifying about resources (required for ", "level", "exception_message", ".validateSchema(", "normalizeId", "secs", "emoji", "#FF6600", "notifications/tools/list_changed", "currentNodeId", "test", "initAsync", "nid", "waitingReads", " = false;for (var ", "updateMissing", " , message: 'should match some schema in anyOf' ", "ref/prompt", "[\\xA0-\\u200D\\u2010-\\u2029\\u202F-\\uD7FF\\uF900-\\uFDCF\\uFDF0-\\uFFEF]", ") ) ", "bigint", "handleConnectionClose", "setupNotificationHandler", " else {   ", " var err = ", "workflows", "greater than or equal to ", ") { ", "selection", "floor", "one", "console", ") { errors = ", "++) if (equal(", "#33CC33", "{0,2}", "async format in sync schema", '"; } ', "execution_interrupted", "function", "right", "removeSchema", "addConnection", "Node definition not found for ", "macro", "HeartbeatTimeoutError", "newlayer_selection", "schema $id is different from id", "Unicode", "request", "getSuffixes", "var default", " is present' ", "getState", "正在运行", "1315xIobfY", "connectionMonitor", "optional", "getNeighbors", "dependencies", "shu", "apply", "#CC33FF", "storeManager", "ignoreJSONStructure", "prp", "lngs", "strict", "getFixedT", "组 {{0}} 中没有第一个相关图层", "acy", "save", "schema is invalid: ", "formatLanguageCode", "rootData", "ZodDiscriminatedUnion", "initializedStoreOnce", "strictKeywords", "now", "propsKeywords", " , message: 'property name \\'", "#0066CC", " , message: 'can\\'t resolve reference ", "assert", "scheme", ".schema = ", '$ref: validation keywords used in schema at path "', "toJSON", "currency", " is not a valid identifier", "sec", "} else {  errors = ", "(typeof ", "#0000CC", "getDefaultValuesFromSchema", "Failed", "String must contain ", "isDatetime", "#CCCC33", "no plural rule found for: ", "+\\.", "网关错误 (502)", "Cycle detected: ", "actionHandlers", "fullPath", "clone", "fast", '" as the namespace "', "source", "position", "then", "retryDelay", "http://json-schema.org/draft-07/schema#", "missingKey", "Email address's domain name can not be converted to ASCII via punycode: ", "errors", "passContext", "node_errors", "Invalid proxy forwarding: current node ", "joinArrays", "_def", "typ", "customErrors", "#FF6633", "false", "lastIndexOf", "Meta-schema for $data reference (JSON Schema extension proposal)", "state", "#33CC99", 'unknown format "', "toASCII", "任务执行失败: {{error}}", "removeAdditional", "if (!", " if (true) {", "Mask", "heartbeatTimeout", "jsonPointers", "notification", "没有链接图层: {{0}}", "sendAbortedResponse", ".test(", "Running", "getSchema", "#FF3366", "Positive Crop", "$dataMetaSchema", "PluralRules", "请选择要发送图像的位置", "_transport", "Request timeout (408)", "compile", "inlineRef", "validateKeyword", "WARNING DEPRECATED: ", " = true; } else { ", "next", " return data; ", "_clientVersion", "pingConnection", "此处粘贴 WebApp ID", ".async; ", "Server does not support tools (required for ", "toLowerCase", "isObject", "aeb", "shorter", "_meta", " = false , ", "zero", "ZodArray", "comfy side transport.onerror", "Quality {{percent}}%", "resetRegExp", "postProcess", " === undefined ", "parseInt", "file://", "运行了 {{duration}} 秒，{{message}}", "UUID is not valid.", "flags", "removeEventListener", "Please select the mask to get", "resources/unsubscribe", " ? ", "跳转到最后一个", " , message: 'should have ", "setupBroadcastHandler", "Uncaught error in notification handler: ", "_unknown", "abs", " {} ", "applyPostProcessor", "Clear all images", "Keyword ", "languageChanging", "A discriminator value for key `", "sdppp/directRequest", "passingSchemas", "ZodUndefined", "Server does not support resources (required for ", "上传中，如果图片过大，可能会卡顿...", "addFormat", "email", "contains", "loadOne", "You must pass an array of schemas to z.tuple([ ... ])", " has duplicate value ", " , params: { property: '", "|0?0?", "processQueueItems", " not found for node ", "encountered", "Enter your RunningHub API Key", "app", "posterIdentifier", "context", "metaSchema", "key '", " === 1) ", "getSuffix", "actions", "?\\:\\:", "getClientVersion", "secure", "getOwnPropertyNames", "markConsumerBinding", " === null || ", "Canvas bounds", "result", "namespace", "after app.queuePrompt errors: ", "pluralResolver", "requestId", "'[\\'' + ", "Stop and cancel all", "languageUtils", " not found in graph definition", "_limitItems", "at least", "get_layer_info: layer_identify required", "nonnegative", "Server does not support notifying of tool list changes (required for ", " } } else { ", " division", "uiLocale", "getTime", "Negative Crop", "streamManager", " } if (errors === ", " ); if (isAdditional", "$el", "click to restore", "[A-Za-z0-9\\!\\$\\%\\'\\*\\+\\-\\^\\_\\`\\{\\|\\}\\~]", "tDescription", "Bounds", "Internal ZodObject error: invalid unknownKeys value.", " == 'string' || ", "  }  ", " != 'boolean') ", "timeout", "isTransportReady", " && Object.prototype.hasOwnProperty.call(", "Logout", "maxValue", "refs", "content", "responseSchema", "bind", "peo", "monitoringIntervals", "newlayer_curlayer", "(\\.\\d+)?", "=0; ", "4577344RdzRYP", "Merge group failed", "propertyNames", "Limit image size", "Invalid input", "Array.isArray(", " , message: 'should be equal to constant' ", "isNaN", " throw new ValidationError([", "_parse", "maxTotalTimeout", "sdppp/streamResponse", "{4}", "); for (var ", "&#39;", " , schema:  ", "sdppp_workflow_alias", "setComfyOrgAPIKey", "         , parentSchema: validate.schema", "definition", "workflowManager", "emit", "&amp;", "obj", "widgetableStructure", "workflow-run", "http://json-schema.org/schema", "[\\:]", ".schemaPath === undefined) { ", " = 'else'; ", "sdppp 运行 Photoshop Action", "host", "init: i18next is already initialized. You should call init just once!", "connect", "is a required property", "Date must be ", "createMessage", "keyword", "uri-reference", "oninitialized", "Fit to canvas", ") {", ", rootData)  ", "endTurn", "MCP Server Error:", "Selection", " + ", "Error sending store update for ", "gte", "onerror", " levels up, current level is ", "refine", "statusText", "missingRefs", "skips", "strong", "date", "getConnectedNodeIds", "async ", "options.loadSchema should be a function", "var pattern", "_fragments", "isOpen", "setProperty", "buildDirectedAdjacencyList", "resources/read", '"number"', "debouncedNotificationMethods", "getResourceBundle", " === '' || ", "hasLanguageSomeTranslations", "maxItems", "yds", "added", " if (typeof itemIndices[item] == 'number') { ", "app.queuePrompt caught", "exclIsNumber", "milliseconds", "manuallyExtractDefaults", "reject", "prs", "default", "separator", "userAgent", "sendResourceUpdated", "#FF0099", "minItems", "mcpMesh", "#0033CC", "localRefs", "absolute", ".data = ", "\\$&", "setRequestHandler", "returnObjects", "nodeProxies", "正向裁剪", "querySelector", "_instructions", "ZodLazy", "aec", "ZodSet", "  )  ", "race", "点我恢复", " is loaded but ", "nsSeparator", "maxTokens", " = null;", "resourceStore", ") {  for (var ", "registerRequestHandler", " || ", "executing", "extensionManager", "Close", "getDefinition", "properties ", "#3300FF", "initializeResponseQueue", "api", "isPersisted", "processStreamQueue", "keySeparator", "Workflow stopped by user", "nodeStores", "JWT", "#/definitions/nonNegativeInteger", "should have required property \\'", "await ", "appendNamespaceToCIMode", "(?:", "[\\-\\.\\_\\~]", "_path", "execution_error", "Invalid function return type", "status", "writeOnly", "unknown keyword: ", "resource", "init", "isFinite", "self", "_requestHandlers", "async", "comfy", " if (! ", "port", "reverse", "(队列:{{queueSize}}) {{progress}}% {{executingNodeTitle}}...", "Failed to send cancellation: ", "path", " properties' ", "pctEncChar", "prompt_id", "ZodNullable", "xn--", "startTime", "Module", "; } ", "0?[1-9]", "setupStoreBinding", "loadNamespaces", " , params: { allowedValues: schema", "resolveRef", "  } ", "fcName", "&quot;", "image", " if (false) { ", "widgetable", "listenMessageCallback", "NOT_SCHEME", "createAbortHandler", "#3300CC", "strictCreate", "forwarded", "size", " , message: 'should be equal to one of the allowed values' ", "isIP", "needsPlural", ") ) {   ", "newdoc_canvas", "hasResourceBundle", "initializeNodeStores", "{0,5}", ")) {  ", "valueOf", "bindConsumer", "获取图层信息", "addSchema", "get_layer_info: 需要 layer_identify", "invalid_date", "toFixed", "#CC6600", "No edge defined from ", "nestingSuffix", ".validate", "质量{{percent}}%", "origin", "messagePoster", "ayn", "innerType", "{2}", "#33CC66", "isConnected", "ZodPipeline", "MethodNotFound", "listRoots", "aborted", " , parentSchema: validate.schema", " if (!", "createWithPreprocess", "sdppp/updateStore/", "exports", "cacheInBuiltFormats", " === '' ", "argumentsError", "checkState", " , message: 'should contain a valid item' ", " || ! Object.prototype.hasOwnProperty.call(", "\\:\\:", "[object Number]", "node", "jwt", "__nwjs", "getter", "usedLng", "base64url", "keyType", "put", "warn", "%25", "(.+?)", "&subfolder=", "#3333CC", "notificationQueue", "fromCodePoint", "timeoutId", "#0099CC", "startsWith", "ZodLiteral", "capabilities", "setupStreamRequestHandler", "arrayToEnum", "mcp-mesh-router", "mode", "显示预览框 ({{count}}张图片)", "detection", "setState", "Auto repick from PS", "#CC3333", "missingKeyHandler", "[^\\%\\/\\@]", "How to get APIKey", "请选择要获取的遮罩", "ZodReadonly", "toUpperCase", "arq", "invalid_literal", '[\\"]', "setupGraphStoreSync", "Selection bounds only", "addMessageEventListener", "ZodAny", "pbu", " if (", "Client does not support listing roots (required for ", " , message: 'should NOT have more than ", " characters' ", " && !", "removeNotificationHandler", "forkResourceStore", "获取结果失败: {{error}}", "augment", "lazycreate", "_onprogress", "payload", "suffix", ".then", "index", "正在等待图片上传...", "ZodRecord", "heartbeatTimer", "[\\/\\?]", "minute", "never", "暂无图片", "schemaErrorMap", '" for languages "', "应用ID:", "resources", "hour", "Disk", "任务未完成，当前状态: {{status}}", "tolerant", ", schema", " = [", "URI can not be parsed.", "; else vErrors = null; }", "errorDataPath", "Server does not support prompts (required for ", " = true; else if (typeof ", "decline", " , params: { type: '", "PCT_ENCODED", "extractFromKey", "getRule", "unshift", "react", "(new RegExp(", " === 0 || ", "notifications/message", "start", "toQuotedString", "_getOrReturnCtx", "userDefinedNsSeparator", "not_multiple_of", "filterByRequestId", "varOccurences", "cloneInstance", " , params: { format:  ", "headers", "reason", "/properties", "fewer", "~validate", "ZodSymbol", "queueLoad", "画布范围", "defineProperty", "smaller than", "Error in broadcast handler for ", "maxDate", "getProperty", "use", "keySchema", "ComfyUI loading...", "NOT_USERINFO", " , params: { propertyName: '", "Failed to send an error response: ", "ZodBoolean", "This means something IS WRONG in your setup. You access the t function before i18next.init / i18next.loadNamespace / i18next.changeLanguage was done. Wait for the callback or Promise to resolve before accessing it!!!", "Invalid date", "is an invalid additional property", "execution_success", "token", "compiling", "ssh", "registerActionHandler", "useRawValueToEscape", "maxSize", "$comment", "isInitializing", "debugDisableHeartbeatResponse", "roots", "_setupTimeout", "ZodNativeEnum", "duration", "actionManager", "lastPongReceived", "asyncIterator", "none", "Edge references unknown target node: ", "loadGraphData", "var missing", ", received '", " == 'boolean' || ", "getDefaultValueFromField", "yud", "Invalid JSON-pointer: ", "ZodNumber", "validateActionRequest", "millisecond", "Host's domain name can not be converted to ASCII via punycode: ", " reference.", " ) ", "valid", " } else { ", " , validate.schema", "waiting for queue prompt", "includes", "strip", "_cleanupTimeout", "greater than ", "float", "checkConnection", "authInfo", "comfy-user", "errs_", "exclusiveMinimum", "SDPPP可能未安装或和插件版本不匹配 (404)", " ) { ", "2[0-4]", "_limitProperties", "title", " for nesting ", "Transport", " == 'number' || ", " = e.errors; else throw e; } ", "非法的名称: {{0}}", 'schema with key or id "', "val is not a non-empty string or a valid number. val=", "#00CC33", "4232400abLstR", "formatArgs", " -> ", "alg", "reconnecting", "defaultVariables", "resolve", "selectColor", "Refresh", "padEnd", " === null) ", "skipCopy", "' } ", "removeDefault", "pattern", "((\\d\\d[2468][048]|\\d\\d[13579][26]|\\d\\d0[48]|[02468][048]00|[13579][26]00)-02-29|\\d{4}-((0[13578]|1[02])-(0[1-9]|[12]\\d|3[01])|(0[469]|11)-(0[1-9]|[12]\\d|30)|(02)-(0[1-9]|1\\d|2[0-8])))", "Comfy SDPPP version ({{comfyVersion}}) does not match plugin ({{pluginVersion}}), may cause issues", "hasPath", "implements", "3rdParty", "getPrototypeOf", "process", "排队等待", "PS图片", "schema id ignored", ").length ", "Invalid function arguments", "From PS", "No crop", " via punycode: ", "_formats", "resources/subscribe", "./api/userdata/workflows%2F.index.json", "%[EFef]", "Invalid graph definition: ", " , params: { pattern:  ", "absolutePath", ".errors); errors = vErrors.length; } ", "].propertyName = ", "getPathExpr", "[UnexpectedJSONParseError]: ", "minSize", "getHandlerTypes", "parentDataProperty", "-arab", "sdppp/abort", "enable", "notifications/cancelled", "Array must contain ", "Unknown", "getItem", "server", "preload", "processHandlerStream", "uuid", "endpoint", "Press Enter to open app: {{appName}}", "cacheKey", " , ", "overflow", "resolvedLanguage", "bindProducer", "/additionalProperties", "colors", "Host's domain name can not be converted to ", "too_small", ")) ", "handle", "initImmediate", "_getInvalidInput", " (async", "#6600FF", "unbind", "forwardBroadcast", "resources/list", "postMessage", " var itemIndices = {}, item; for (;i--;) { var item = ", "valueSchema", "interpolator", "expected", "regExpQueue", "prepend", "{0,4}", "dev", "second", "query", "#CC00FF", "default is ignored for: ", "loadResources", "keyword schema is invalid: ", "mailto", "abv", "Username: {{username}}", "number", "([^0-9])", "_requestMessageId", "defaultMeta", "重启ComfyUI失败", "Asynchronous transform encountered during synchronous parse operation. Use .parseAsync instead.", " throw new ValidationError(vErrors); ", "assistant", "finite", ".length == 0) {", "'else'", "云端推荐：", "relative", "pop", "sdppp_assets", "toStringTag", "[^0-9]", "auz", "  if (!", "fromCharCode", "Invalid forward path for proxy action", "/sd-ppp-static/sdppp-workflows/", "Not connected", "method", " to ", "coerceToTypes", "__proxy_forward", "returnedObjectHandler", "Instance method `debug.destroy()` is deprecated and no longer does anything. It will be removed in the next major version of `debug`.", "Email address's domain name can not be converted to ", " else ", "{0,3}", "1.0.0", "])) { ", "SCHEMES", " == 'function' ? ", " if (true) { ", "_metaOpts", "Uploading...", "[i]; ", "[\\@]", "enabled", '" was not yet loaded', "_notificationHandlers", "/patternProperties/", "ZodFunction", "schemas", "issues", "Failed to check workflow changeTracker state:", "validateSchema", "Intersection results could not be merged", "invalid_string", "###", " && !Array.isArray(", " validate.errors = [", "shape", "1255978LvsSSI", "fail", "segment", "++) { var ", "([+-]\\d{2}:?\\d{2})", "json", " , params: { limit: ", "2.0", "removeMessageEventListener", "storage", "common", "oneOf", "clearCache", "removeConnection", " === undefined) { ", "hasEdge", " ? await ", "maxParallelReads", "', depsCount: ", "_exclusiveLimit", "_pendingDebouncedNotifications", " == 'object' && !(", "Failed to get result: {{error}}", "addKeyword", "Source", "uri", "parse", "__esModule", "invalid_arguments", "Action ", "zh-CN", "invalid_union_discriminator", "{0,1}", "_resetTimeout", "ajp", "ltr", " , schemaPath: ", " , message: 'should be ", "async schema referenced by sync schema", "resolveImage", "indexOf", "capacity", "dataPath", " = true; if ( ", ")) { if (vErrors === null) vErrors = ", "exact", "From Disk", "less than", ".call( ", "removeListener", "_requestHandlerAbortControllers", '$ref: keywords ignored in schema at path "', "_getType", "defaultError", " delete ", "resolved promise for", "activeWorkflow", "return", "replace", "saveWorkflow", "reference", "useColors", " !== undefined) {  ", " } else {  errors = ", "isNANOID", "more", "missingSchema", "<errors; ", "MAX_SAFE_INTEGER", "cardinal", "name", "observers", "'then'", "alwaysSet", "externalListenMessageCallback", "_onclose", "connectionManager", "nonstrict", "isEmoji", "ZodUnknown", "base64", "插件可能正在拦截 PS 快捷键... ", "prefix", "superRefine", "ZodPromise", 'Only layer kind "TEXT" is supported, invalid layer: {{0}}', "read", "silent", "_clientCapabilities", "NumberFormat", "json-pointer", "#00CC99", "Show Preview ({{count}} images)", "New Layer", "setLimit", "i18next:", "Operation was aborted", "限制图片尺寸", "relativetime", " != 'string') || ", "stopSequence", "ZodMap", "#CC3366", "NOT_PATH_NOSCHEME", "Shortcut selection feature requires login", "weeks", "customRules", "freeze", "Plugin window focused required to use keyboard shortcut", "NOT_HOST", " = false;  ", "RH币:", "Click to get RunningHub APIKey", " , params: {} ", "opts", "setResolvedLanguage", "dirty", " = 'then'; ", "split", "comfy-uxp", "failed parsing options string in nesting for key ", "ayl", "jpr", "#3366CC", "charCodeAt", "integer", "description", "reduce", ".errors", "response", "discriminator", "整个画布", "_refinement", "removed", "not-basic", "curr", "反向裁剪", "addResource", "formatSeparator", "subfolder", "]] === undefined ", "body", "defaultNS", "additionalProperties", " } ", "Connection closed", "No backend was added via i18next.use. Will not load resources.", "checks", "keys", "yih", " Object.keys(", "fullFilename", "#99CC00", "_limitLength", "notifications/progress", "missing", "[0-5]\\d", "$ref", "success", "shared", "_key", "errorsText", " validate.errors = null; return true; ", "msecs", "Converting circular structure to JSON", "add", "req_", "cimode", "ZodNever", " = 0; ", "bindings", "stringify", "#3399FF", "defaultValue", "WebkitAppearance", "utils", "fallbackLng", "postProcessPassResolved", " === undefined) ", "full", "Error in direct request:", "substring", "Connect", " != 'number') || ", "_compilations", "unescapePrefix", "prompts/list", "usedParams", "unknownKeys", " = ''; ", "Layer not found {{0}}", "目标边界为空", "safe", "connecting", "#/definitions/nonNegativeIntegerDefault0", "Success", "getScriptPartFromCode", " = true;", "邮箱: {{email}}", "Fit to selection", "instructions", "constructor", "queue_remaining", "has", " , params: { i: i, j: j } ", "allKeys", " = false; else { ", "out", "getDataByLanguage", "Cancel", " = customRules[", `" keyword validation' `, "invalid_union", "false schema", "isArray", "at most", "Current layer bounds", "&gt;", "Invalid enum value. Expected ", "如何获取APIKey和API Secret", "parsedType", "simpleTypes", "en-US", "message", " ( ( ", " = false; break outer; } } } ", "callback", "#CC0033", "prevValid", "external", "signal", " , schema: validate.schema", "openWorkflow: ", ") {   var err =   ", "abh", "connection", "Validation", "thisServer", "hrs", "getNode", " = true; else if (!Array.isArray(schema", "contentMediaType", "properties", "zod", "and", "cancel", "按选区裁剪", "Run", "Get content of layer {{0}}", "Enter your Replicate API Key", "[\\+\\-\\.]", "Cannot access data ", "null", "resource_link", "_onresponse", "Edge references unknown source node: ", "1085965INRJau", `"' `, "kPanelBrightnessMediumGray", "error", "cleanupStreamHandlers", "value", "changeLanguage", "keywordValidate", "); if (!", "addLookupKeys", "#3366FF", 'Invalid input: must include "', "men", "[^]", "[\\:\\@\\/\\?]", "#CC3399", "loopRequired", "]; }  ", "map", "IPV6ADDRESS", "addListener", " !== undefined && typeof ", "keywords", "prompt_ids: ", "/type", "MissingRef", "local", "diff", "info", " after ", "{6}", "formatType", "bbz", "选区除外", "prompts/get", "Comfy.userId", "overloadTranslationOptionHandler", "sdppp/broadcast", "Gateway timeout (504)", " character(s)", "type", "inclusive", "sampling", " var errors = 0;     ", " = true;  ", "#/definitions/schemaArray", " if (Array.isArray(", "languages", "initialize", "interpolation", " , params: { ref: '", "object", "Already connected to node ", "schemaUnknownRules", ".pi-sign-out", "postProcessor", "const", "can't resolve reference ", "禁止访问 (403)", "regexpUnescape", " is already defined", ".length == 1) { ", "#33CCFF", "isConnectedTo", "nestingPrefix", "Client does not support elicitation (required for ", "hasOwnProperty", "extend", "getData", "unicode", "copy", "ZodEffects", "ESCAPE", "sam", "connections", "returnDetails", "element", "_options", "App ID:", "_timeoutInfo", "skipOnVariables", "nest", "]) ", "loading namespace ", "#0000FF", "[\\:\\@]", "failedLoading", "resources/templates/list", "_errorDataPathProperty", " } else if ( ", "No store found for node ", "]); ", "Cannot register capabilities after connecting to transport", " = errors === errs_", "abort", "validate", "))) { ", " = true; ", " !== undefined) { ", "apd", "getBinding", '"object"', "retryTimeout", "Reverse", "dataProperties", "Empty", "elicitation/create", " for (var ", "validation failed", "minProperties", "reload", "#6633CC", "roots/list", "user", " = equal(", "#CC3300", "addRule", "Cannot forward to node ", "ifClause", "getResource", "missingRef", "sampling/createMessage", "refinement", "Unexpected dot segment condition", "ZodDefault", "addUsedSchema", "safeValue", "_onerror", ") && ", "inlineRefs", "Channel connecting...", "nanoid", "call", "Run Photoshop Action", "%[89A-Fa-f]", "compositeRule", " === false || ", "ensureStoreConsumerBinding", "' && !(typeof ", ") vErrors.length = ", "rtl", "#CC00CC", "output", " !== undefined ", "CurLayer", "flatten", ".replace(/~/g, '~0').replace(/\\//g, '~1')", "ars", " else if (", "curlayer", "]; ", "documentElement", "endsWith", "用户名: {{username}}", "#6633FF", "precheck", "accept", "nestingRegexp", " , params: { allowedValue: schema", "util", "listWorkflows", "schemaHasRules", "exec", "runningRequests", "cacheUserLanguage", '" is used in schema at path "', "Error", "else", "; if (!", "run", "addResourceBundle", "cidr", "Values", "acx", "Invalid discriminator value. Expected ", "over", ") break; }  ", "ajv", 'id "', "未知错误（{{code}}）", " = errors;  ", "yhd", "rules", "#FF3300", "_errors", " === ", "userinfo", "join", "Select layer", "interpolationkey", "ConnectionClosed", " , params: { keyword: '", "[\\!\\$\\'\\(\\)\\*\\+\\,\\;\\:\\@]", "登录成功", "fallback", "刷新工作流列表", "ignore", "Paste your model name", "ruleErr", "startHeartbeat", "graphInstance", "2025-03-26", "Invalid attempt to destructure non-iterable instance", "uxpHost", "sendActionRequest", "hours", "describe", "setNotificationHandler", "Execute", "createAsyncIterator", "hasDefaultValue", "$data", "Core schema meta-schema", "[\\.]", "invalid_type", " if (rootData === undefined) rootData = data; ", "slice", "setItem", "退出登录", "Number must be a multiple of ", "fallbackNotificationHandler", "broadcast", " should be boolean' ", " = errors;", "') ", "getCurrentNodeId", "broadcastHandlers", "inline", " && ( ", "initializeProducer", "api/view?type=", "getHandler", " var schemaExcl", "res", "#00CCCC", "shift", "patternProperties", "isEmpty", "isDate", "exclusiveMaximum", "addEventListener", "loaded namespace ", "createGlobalDispatcherForType", "preprocess", " } else {  for (var ", "Server error (500)", " if ( ", "保存并立即执行", "undefined", "more than", "请登陆后使用插件", "items", "isNullable", "Error compiling schema, function code:", "Invalid name: {{0}}", "refVal", "?\\]?$", 'Invalid input: must end with "', "ordinal", "not", "params", "time", "Service unavailable (503)", "currentOnly", "getFallbackCodes", ", validate.root.schema);", `" won't get resolved as namespace "`];
  return Ie = function() {
    return i;
  }, Ie();
}
function Wx() {
  const i = n;
  if (Tr) return Ve;
  Tr = 1, Ve = { copy: e, checkDataType: t, checkDataTypes: a, coerceToTypes: r, toHash: s, getProperty: d, escapeQuotes: u, equal: rr(), ucs2length: So(), varOccurences: f, varReplace: l, schemaHasRules: g, schemaHasRulesExcept: h, schemaUnknownRules: m, toQuotedString: y, getPathExpr: w, getPath: S, getData: C, unescapeFragment: E, unescapeJsonPointer: M, escapeFragment: D, escapeJsonPointer: j };
  function e(F, N) {
    N = N || {};
    for (var U in F) N[U] = F[U];
    return N;
  }
  function t(F, N, U, $) {
    const V = B;
    var J = V($ ? 1198 : 2571), s0 = V($ ? 1689 : 637), o0 = $ ? "!" : "", u0 = $ ? "" : "!";
    switch (F) {
      case V(2382):
        return N + J + V(2382);
      case V(1196):
        return o0 + V(1582) + N + ")";
      case V(2437):
        return "(" + o0 + N + s0 + "typeof " + N + J + V(2487) + s0 + u0 + V(1582) + N + "))";
      case V(2255):
        return V(1395) + N + J + V(1643) + s0 + u0 + "(" + N + " % 1)" + s0 + N + J + N + (U ? s0 + o0 + V(852) + N + ")" : "") + ")";
      case V(2074):
        return V(1395) + N + J + '"' + F + '"' + (U ? s0 + o0 + V(852) + N + ")" : "") + ")";
      default:
        return V(854) + N + J + '"' + F + '"';
    }
  }
  function a(F, N, U) {
    const $ = B;
    switch (F[$(1200)]) {
      case 1:
        return t(F[0], N, U, !0);
      default:
        var V = "", J = s(F);
        J[$(1196)] && J[$(2437)] && (V = J.null ? "(" : "(!" + N + $(1689), V += "typeof " + N + $(1111), delete J[$(2382)], delete J.array, delete J[$(2437)]), J[$(2074)] && delete J[$(2255)];
        for (var s0 in J) V += (V ? " && " : "") + t(s0, N, U, !0);
        return V;
    }
  }
  var x = s([i(923), i(2074), "integer", i(958), i(2382)]);
  function r(F, N) {
    const U = i;
    if (Array.isArray(N)) {
      for (var $ = [], V = 0; V < N[U(1200)]; V++) {
        var J = N[V];
        (x[J] || F === U(1196) && J === U(1196)) && ($[$[U(1200)]] = J);
      }
      if ($[U(1200)]) return $;
    } else {
      if (x[N]) return [N];
      if (F === U(1196) && N === U(1196)) return [U(1196)];
    }
  }
  function s(F) {
    const N = i;
    for (var U = {}, $ = 0; $ < F[N(1200)]; $++) U[F[$]] = !0;
    return U;
  }
  var o = /^[a-z$_][a-z$_0-9]*$/i, c = /'|\\/g;
  function d(F) {
    const N = i;
    return typeof F == N(2074) ? "[" + F + "]" : o[N(1313)](F) ? "." + F : "['" + u(F) + "']";
  }
  function u(F) {
    const N = i;
    return F[N(2188)](c, N(1669))[N(2188)](/\n/g, "\\n")[N(2188)](/\r/g, "\\r").replace(/\f/g, "\\f")[N(2188)](/\t/g, "\\t");
  }
  function f(F, N) {
    const U = i;
    N += U(2090);
    var $ = F[U(799)](new RegExp(N, "g"));
    return $ ? $.length : 0;
  }
  function l(F, N, U) {
    const $ = i;
    return N += $(2075), U = U[$(2188)](/\$/g, $(795)), F[$(2188)](new RegExp(N, "g"), U + "$1");
  }
  function g(F, N) {
    if (typeof F == i(958)) return !F;
    for (var $ in F) if (N[$]) return !0;
  }
  function h(F, N, U) {
    const $ = i;
    if (typeof F == $(958)) return !F && U != $(2645);
    for (var V in F) if (V != U && N[V]) return !0;
  }
  function m(F, N) {
    if (typeof F != i(958)) {
      for (var $ in F) if (!N[$]) return $;
    }
  }
  function y(F) {
    return "'" + u(F) + "'";
  }
  function w(F, N, U, $) {
    const V = i;
    var J = U ? "'/' + " + N + ($ ? "" : V(2532)) : $ ? "'[' + " + N + V(492) : V(1537) + N + V(988);
    return P(F, J);
  }
  function S(F, N, U) {
    var $ = y(U ? "/" + j(N) : d(N));
    return P(F, $);
  }
  var R = /^\/(?:[^~]|~0|~1)*$/, A = /^([0-9]+)(#|\/(?:[^~]|~0|~1)*)?$/;
  function C(F, N, U) {
    const $ = i;
    var V, J, s0, o0;
    if (F === "") return $(1377);
    if (F[0] == "/") {
      if (!R[$(1313)](F)) throw new Error("Invalid JSON-pointer: " + F);
      J = F, s0 = "rootData";
    } else {
      if (o0 = F[$(799)](A), !o0) throw new Error($(1947) + F);
      if (V = +o0[1], J = o0[2], J == "#") {
        if (V >= N) throw new Error("Cannot access property/index " + V + $(1627) + N);
        return U[N - V];
      }
      if (V > N) throw new Error($(2381) + V + $(1627) + N);
      if (s0 = $(726) + (N - V || ""), !J) return s0;
    }
    for (var u0 = s0, a0 = J.split("/"), f0 = 0; f0 < a0[$(1200)]; f0++) {
      var w0 = a0[f0];
      w0 && (s0 += d(M(w0)), u0 += $(637) + s0);
    }
    return u0;
  }
  function P(F, N) {
    const U = i;
    return F == '""' ? N : (F + U(1623) + N)[U(2188)](/([^\\])' \+ '/g, "$1");
  }
  function E(F) {
    return M(decodeURIComponent(F));
  }
  function D(F) {
    return encodeURIComponent(j(F));
  }
  function j(F) {
    return F[i(2188)](/~/g, "~0").replace(/\//g, "~1");
  }
  function M(F) {
    return F.replace(/~1/g, "/").replace(/~0/g, "~");
  }
  return Ve;
}
var Ze, Dr;
function os() {
  if (Dr) return Ze;
  Dr = 1;
  var i = Wx();
  Ze = e;
  function e(t) {
    i[B(2456)](t, this);
  }
  return Ze;
}
var We = { exports: {} }, jr;
function Po() {
  const i = n;
  if (jr) return We.exports;
  jr = 1;
  var e = We[i(1791)] = function(x, r, s) {
    const o = i;
    typeof r == o(1342) && (s = r, r = {}), s = r.cb || s;
    var c = typeof s == o(1342) ? s : s[o(597)] || function() {
    }, d = s.post || function() {
    };
    t(r, c, d, x, "", x);
  };
  e.keywords = { additionalItems: !0, items: !0, contains: !0, additionalProperties: !0, propertyNames: !0, not: !0 }, e[i(602)] = { items: !0, allOf: !0, anyOf: !0, oneOf: !0 }, e[i(1382)] = { definitions: !0, properties: !0, patternProperties: !0, dependencies: !0 }, e[i(2662)] = { default: !0, enum: !0, const: !0, required: !0, maximum: !0, minimum: !0, exclusiveMaximum: !0, exclusiveMinimum: !0, multipleOf: !0, maxLength: !0, minLength: !0, pattern: !0, format: !0, maxItems: !0, minItems: !0, uniqueItems: !0, maxProperties: !0, minProperties: !0 };
  function t(x, r, s, o, c, d, u, f, l, g) {
    const h = i;
    if (o && typeof o == h(2437) && !Array[h(2344)](o)) {
      r(o, c, d, u, f, l, g);
      for (var m in o) {
        var y = o[m];
        if (Array[h(2344)](y)) {
          if (m in e[h(602)])
            for (var w = 0; w < y[h(1200)]; w++) t(x, r, s, y[w], c + "/" + m + "/" + w, d, c, m, o, w);
        } else if (m in e[h(1382)]) {
          if (y && typeof y == "object")
            for (var S in y) t(x, r, s, y[S], c + "/" + m + "/" + a(S), d, c, m, o, S);
        } else (m in e[h(2408)] || x[h(2335)] && !(m in e[h(2662)])) && t(x, r, s, y, c + "/" + m, d, c, m, o);
      }
      s(o, c, d, u, f, l, g);
    }
  }
  function a(x) {
    const r = i;
    return x[r(2188)](/~/g, "~0")[r(2188)](/\//g, "~1");
  }
  return We[i(1791)];
}
var Be, Mr;
function ar() {
  const i = n;
  if (Mr) return Be;
  Mr = 1;
  var e = wo(), t = rr(), a = Wx(), x = os(), r = Po();
  Be = s, s.normalizeId = S, s[i(1407)] = m, s[i(2746)] = R, s.ids = A, s[i(1455)] = l, s.schema = o;
  function s(C, P, E) {
    const D = i;
    var j = this[D(1148)][E];
    if (typeof j == "string")
      if (this[D(1148)][j]) j = this._refs[j];
      else return s[D(2518)](this, C, P, j);
    if (j = j || this._schemas[E], j instanceof x) return l(j[D(727)], this._opts[D(2515)]) ? j[D(727)] : j[D(2481)] || this._compile(j);
    var M = o[D(2518)](this, P, E), F, N, U;
    return M && (F = M[D(727)], P = M.root, U = M.baseId), F instanceof x ? N = F[D(2481)] || C[D(2518)](this, F.schema, P, void 0, U) : F !== void 0 && (N = l(F, this[D(904)][D(2515)]) ? F : C.call(this, F, P, void 0, U)), N;
  }
  function o(C, P) {
    const E = i;
    var D = e[E(2156)](P), j = y(D), M = m(this[E(1117)](C[E(727)]));
    if (Object[E(2278)](C[E(727)]).length === 0 || j !== M) {
      var F = S(j), N = this[E(1148)][F];
      if (typeof N == E(923)) return c[E(2518)](this, C, N, D);
      if (N instanceof x)
        N[E(2481)] || this[E(2744)](N), C = N;
      else if (N = this[E(1052)][F], N instanceof x) {
        if (N[E(2481)] || this[E(2744)](N), F == S(P)) return { schema: N, root: C, baseId: M };
        C = N;
      } else return;
      if (!C[E(727)]) return;
      M = m(this[E(1117)](C[E(727)]));
    }
    return u[E(2518)](this, D, M, C[E(727)], C);
  }
  function c(C, P, E) {
    const D = i;
    var j = o[D(2518)](this, C, P);
    if (j) {
      var M = j.schema, F = j.baseId;
      C = j[D(1129)];
      var N = this._getId(M);
      return N && (F = R(F, N)), u[D(2518)](this, E, F, M, C);
    }
  }
  var d = a[i(797)]([i(2372), "patternProperties", i(1252), i(1362), i(987)]);
  function u(C, P, E, D) {
    const j = i;
    if (C[j(732)] = C[j(732)] || "", C[j(732)].slice(0, 1) == "/") {
      for (var M = C[j(732)][j(2248)]("/"), F = 1; F < M.length; F++) {
        var N = M[F];
        if (N) {
          if (N = a.unescapeFragment(N), E = E[N], E === void 0) break;
          var U;
          if (!d[N] && (U = this[j(1117)](E), U && (P = R(P, U)), E[j(2287)])) {
            var $ = R(P, E[j(2287)]), V = o[j(2518)](this, D, $);
            V && (E = V[j(727)], D = V[j(1129)], P = V[j(1013)]);
          }
        }
      }
      if (E !== void 0 && E !== D[j(727)]) return { schema: E, root: D, baseId: P };
    }
  }
  var f = a[i(797)]([i(2426), "format", i(1995), i(2692), i(1213), i(575), i(2495), i(1648), i(1663), "maximum", i(959), i(2721), i(500), "required", "enum"]);
  function l(C, P) {
    if (P === !1) return !1;
    if (P === void 0 || P === !0) return g(C);
    if (P) return h(C) <= P;
  }
  function g(C) {
    const P = i;
    var E;
    if (Array[P(2344)](C)) {
      for (var D = 0; D < C.length; D++)
        if (E = C[D], typeof E == P(2437) && !g(E)) return !1;
    } else for (var j in C)
      if (j == "$ref" || (E = C[j], typeof E == P(2437) && !g(E))) return !1;
    return !0;
  }
  function h(C) {
    const P = i;
    var E = 0, D;
    if (Array.isArray(C)) {
      for (var j = 0; j < C.length; j++)
        if (D = C[j], typeof D == P(2437) && (E += h(D)), E == 1 / 0) return 1 / 0;
    } else for (var M in C) {
      if (M == "$ref") return 1 / 0;
      if (f[M]) E++;
      else if (D = C[M], typeof D == P(2437) && (E += h(D) + 1), E == 1 / 0) return 1 / 0;
    }
    return E;
  }
  function m(C, P) {
    P !== !1 && (C = S(C));
    var E = e.parse(C);
    return y(E);
  }
  function y(C) {
    return e[i(538)](C).split("#")[0] + "#";
  }
  var w = /#\/?$/;
  function S(C) {
    return C ? C.replace(w, "") : "";
  }
  function R(C, P) {
    const E = i;
    return P = S(P), e[E(1987)](C, P);
  }
  function A(C) {
    const P = i;
    var E = S(this[P(1117)](C)), D = { "": E }, j = { "": m(E, !1) }, M = {}, F = this;
    return r(C, { allKeys: !0 }, function(N, U, $, V, J, s0, o0) {
      const u0 = P;
      if (U !== "") {
        var a0 = F[u0(1117)](N), f0 = D[V], w0 = j[V] + "/" + J;
        if (o0 !== void 0 && (w0 += "/" + (typeof o0 == "number" ? o0 : a[u0(750)](o0))), typeof a0 == u0(923)) {
          a0 = f0 = S(f0 ? e[u0(1987)](f0, a0) : a0);
          var m0 = F[u0(1148)][a0];
          if (typeof m0 == u0(923) && (m0 = F[u0(1148)][m0]), m0 && m0[u0(727)]) {
            if (!t(N, m0[u0(727)])) throw new Error(u0(2564) + a0 + '" resolves to more than one schema');
          } else if (a0 != S(w0))
            if (a0[0] == "#") {
              if (M[a0] && !t(N, M[a0])) throw new Error(u0(2564) + a0 + '" resolves to more than one schema');
              M[a0] = N;
            } else F[u0(1148)][a0] = w0;
        }
        D[U] = f0, j[U] = w0;
      }
    }), M;
  }
  return Be;
}
var Ke, Lr;
function nr() {
  const i = n;
  if (Lr) return Ke;
  Lr = 1;
  var e = ar();
  Ke = { Validation: x(t), MissingRef: x(a) };
  function t(r) {
    const s = B;
    this[s(2353)] = s(2494), this[s(1418)] = r, this[s(2563)] = this[s(570)] = !0;
  }
  a[i(2353)] = function(r, s) {
    const o = i;
    return o(2443) + s + o(2715) + r;
  };
  function a(r, s, o) {
    const c = i;
    this.message = o || a[c(2353)](r, s), this[c(2506)] = e[c(2746)](r, s), this[c(2196)] = e.normalizeId(e[c(1407)](this[c(2506)]));
  }
  function x(r) {
    const s = i;
    return r[s(1166)] = Object[s(1108)](Error[s(1166)]), r.prototype[s(2331)] = r, r;
  }
  return Ke;
}
var Je, $r;
function cs() {
  return $r || ($r = 1, Je = function(i, e) {
    const t = B;
    e || (e = {}), typeof e === t(1342) && (e = { cmp: e });
    var a = typeof e[t(823)] === t(958) ? e[t(823)] : !1, x = e.cmp && /* @__PURE__ */ function(s) {
      return function(o) {
        return function(c, d) {
          var u = { key: c, value: o[c] }, f = { key: d, value: o[d] };
          return s(u, f);
        };
      };
    }(e[t(1022)]), r = [];
    return function s(o) {
      const c = t;
      if (o && o[c(1390)] && typeof o[c(1390)] === c(1342) && (o = o[c(1390)]()), o !== void 0) {
        if (typeof o == c(2074)) return isFinite(o) ? "" + o : c(2382);
        if (typeof o != "object") return JSON[c(2301)](o);
        var d, u;
        if (Array[c(2344)](o)) {
          for (u = "[", d = 0; d < o[c(1200)]; d++)
            d && (u += ","), u += s(o[d]) || c(2382);
          return u + "]";
        }
        if (o === null) return c(2382);
        if (r[c(2170)](o) !== -1) {
          if (a) return JSON.stringify(c(2698));
          throw new TypeError(c(2294));
        }
        var f = r[c(818)](o) - 1, l = Object[c(2278)](o)[c(974)](x && x(o));
        for (u = "", d = 0; d < l.length; d++) {
          var g = l[d], h = s(o[g]);
          h && (u && (u += ","), u += JSON[c(2301)](g) + ":" + h);
        }
        return r[c(1065)](f, 1), "{" + u + "}";
      }
    }(i);
  }), Je;
}
var Qe, zr;
function ds() {
  return zr || (zr = 1, Qe = function(e, t, a) {
    const x = B;
    var r = "", s = e[x(727)][x(950)] === !0, o = e[x(2545)][x(878)](e[x(727)], e.RULES[x(1135)], x(2287)), c = e[x(1719)]._getId(e.schema);
    if (e.opts[x(1380)]) {
      var d = e.util[x(2439)](e[x(727)], e[x(523)][x(2408)]);
      if (d) {
        var u = x(1715) + d;
        if (e[x(2244)][x(1380)] === x(816)) e.logger[x(1808)](u);
        else throw new Error(u);
      }
    }
    if (e[x(1102)] && (r += x(844), s && (e.async = !0, r += x(1635)), r += "function(data, dataPath, parentData, parentDataProperty, rootData) { 'use strict'; ", c && (e.opts.sourceCode || e.opts.processCode) && (r += " " + (x(1164) + c + " */") + " ")), typeof e[x(727)] == x(958) || !(o || e[x(727)][x(2287)])) {
      var t = x(2343), f = e.level, l = e[x(1005)], g = e.schema[t], h = e.schemaPath + e[x(2545)][x(1911)](t), m = e[x(578)] + "/" + t, P = !e[x(2244)][x(837)], j, y = x(726) + (l || ""), C = x(1954) + f;
      if (e[x(727)] === !1) {
        e[x(1102)] ? P = !0 : r += x(838) + C + x(921);
        var w = w || [];
        w.push(r), r = "", e[x(573)] !== !1 ? (r += x(1250) + (j || x(2343)) + x(1035) + e.errorPath + x(2166) + e[x(2545)][x(1891)](m) + x(2243), e[x(2244)].messages !== !1 && (r += " , message: 'boolean schema is false' "), e.opts.verbose && (r += x(521) + e.schemaPath + x(2701) + y + " "), r += " } ") : r += x(1494);
        var S = r;
        r = w.pop(), !e[x(2521)] && P ? e[x(1721)] ? r += x(1585) + S + x(2477) : r += x(2128) + S + x(682) : r += x(1327) + S + x(518);
      } else e[x(1102)] ? s ? r += x(1460) : r += x(2292) : r += " var " + C + " = true; ";
      return e[x(1102)] && (r += " }; return validate; "), r;
    }
    if (e[x(1102)]) {
      var R = e[x(1102)], f = e[x(1304)] = 0, l = e[x(1005)] = 0, y = x(726);
      if (e[x(642)] = e[x(1987)].fullPath(e[x(1719)][x(1117)](e.root[x(727)])), e.baseId = e.baseId || e.rootId, delete e[x(1102)], e[x(2660)] = [""], e.schema[x(1658)] !== void 0 && e[x(2244)][x(794)] && e[x(2244)][x(1125)]) {
        var A = x(1134);
        if (e[x(2244)][x(1125)] === "log") e.logger[x(1808)](A);
        else throw new Error(A);
      }
      r += " var vErrors = null; ", r += x(2429), r += x(2601);
    } else {
      var f = e[x(1304)], l = e[x(1005)], y = x(726) + (l || "");
      if (c && (e[x(1013)] = e.resolve[x(2746)](e[x(1013)], c)), s && !e[x(1721)]) throw new Error(x(2752));
      r += " var errs_" + f + x(2609);
    }
    var C = x(1954) + f, P = !e[x(2244)][x(837)], E = "", D = "", j, M = e[x(727)].type, F = Array[x(2344)](M);
    if (M && e[x(2244)][x(981)] && e[x(727)][x(981)] === !0 && (F ? M[x(2170)](x(2382)) == -1 && (M = M[x(2699)](x(2382))) : M != x(2382) && (M = [M, x(2382)], F = !0)), F && M[x(1200)] == 1 && (M = M[0], F = !1), e.schema[x(2287)] && o) {
      if (e[x(2244)].extendRefs == x(2131)) throw new Error(x(1389) + e.errSchemaPath + x(596));
      e[x(2244)][x(1024)] !== !0 && (o = !1, e.logger[x(1808)](x(2181) + e.errSchemaPath + '"'));
    }
    if (e[x(727)][x(1929)] && e.opts.$comment && (r += " " + e[x(523)][x(1135)][x(1929)].code(e, x(1929))), M) {
      if (e[x(2244)][x(2664)]) var N = e[x(2545)][x(2099)](e[x(2244)].coerceTypes, M);
      var U = e[x(523)].types[M];
      if (N || F || U === !0 || U && !b0(U)) {
        var h = e[x(791)] + x(739), m = e[x(578)] + x(2410), h = e.schemaPath + x(739), m = e.errSchemaPath + x(2410), $ = F ? x(1070) : "checkDataType";
        if (r += x(1843) + e[x(2545)][$](M, y, e.opts[x(1222)], !0) + x(1330), N) {
          var V = x(638) + f, J = "coerced" + f;
          r += x(838) + V + x(2702) + y + x(1274) + J + x(873), e[x(2244)][x(2664)] == x(1196) && (r += " if (" + V + x(600) + y + x(2514) + y + x(2447) + y + x(1165) + y + x(562) + V + x(2702) + y + x(563) + e[x(2545)][x(730)](e.schema[x(2426)], y, e.opts[x(1222)]) + ") " + J + " = " + y + x(1736)), r += x(1843) + J + x(734);
          var s0 = N;
          if (s0)
            for (var o0, u0 = -1, a0 = s0[x(1200)] - 1; u0 < a0; )
              o0 = s0[u0 += 1], o0 == x(923) ? r += x(2534) + V + x(1975) + V + " == 'boolean') " + J + x(869) + y + x(2674) + y + x(1991) + J + x(2319) : o0 == x(2074) || o0 == x(2255) ? (r += x(2534) + V + x(1944) + y + " === null || (" + V + x(934) + y + " && " + y + " == +" + y + " ", o0 == x(2255) && (r += x(2713) + y + " % 1)"), r += x(2047) + J + x(796) + y + "; ") : o0 == "boolean" ? r += x(2534) + y + " === 'false' || " + y + x(1888) + y + x(1991) + J + x(2731) + y + " === 'true' || " + y + x(1522) + J + x(2483) : o0 == x(2382) ? r += " else if (" + y + x(1646) + y + x(1888) + y + x(965) + J + " = null; " : e[x(2244)][x(2664)] == x(1196) && o0 == x(1196) && (r += x(2534) + V + x(1560) + V + " == 'number' || " + V + x(1944) + y + x(635) + J + x(1874) + y + x(2536));
          r += x(1326);
          var w = w || [];
          w.push(r), r = "", e[x(573)] !== !1 ? (r += x(1250) + (j || x(2426)) + x(1035) + e[x(1105)] + x(2166) + e[x(2545)].toQuotedString(m) + x(1881), F ? r += "" + M[x(2573)](",") : r += "" + M, r += x(1993), e[x(2244)].messages !== !1 && (r += x(2167), F ? r += "" + M.join(",") : r += "" + M, r += "' "), e.opts.verbose && (r += x(2361) + h + x(1787) + e[x(791)] + x(2701) + y + " "), r += x(2274)) : r += x(1494);
          var S = r;
          r = w[x(2087)](), !e[x(2521)] && P ? e[x(1721)] ? r += x(1585) + S + x(2477) : r += x(2128) + S + x(682) : r += x(1327) + S + x(518), r += x(998) + J + x(2192);
          var f0 = l ? x(726) + (l - 1 || "") : x(2680), w0 = l ? e.dataPathArr[l] : "parentDataProperty";
          r += " " + y + " = " + J + "; ", !l && (r += x(1033) + f0 + " !== undefined)"), r += " " + f0 + "[" + w0 + "] = " + J + x(1736);
        } else {
          var w = w || [];
          w.push(r), r = "", e.createErrors !== !1 ? (r += x(1250) + (j || "type") + "' , dataPath: (dataPath || '') + " + e[x(1105)] + x(2166) + e[x(2545)].toQuotedString(m) + " , params: { type: '", F ? r += "" + M[x(2573)](",") : r += "" + M, r += x(1993), e[x(2244)].messages !== !1 && (r += x(2167), F ? r += "" + M.join(",") : r += "" + M, r += "' "), e[x(2244)][x(1188)] && (r += " , schema: validate.schema" + h + x(1787) + e.schemaPath + " , data: " + y + " "), r += " } ") : r += x(1494);
          var S = r;
          r = w[x(2087)](), !e[x(2521)] && P ? e[x(1721)] ? r += x(1585) + S + "]); " : r += x(2128) + S + x(682) : r += x(1327) + S + x(518);
        }
        r += x(2274);
      }
    }
    if (e[x(727)][x(2287)] && !o) r += " " + e[x(523)][x(1135)][x(2287)].code(e, "$ref") + " ", P && (r += x(1552), R ? r += "0" : r += x(1966) + f, r += x(1330), D += "}");
    else {
      var m0 = e.RULES;
      if (m0) {
        for (var U, D0 = -1, E0 = m0.length - 1; D0 < E0; )
          if (U = m0[D0 += 1], b0(U)) {
            if (U[x(2426)] && (r += x(1843) + e[x(2545)][x(730)](U[x(2426)], y, e[x(2244)][x(1222)]) + ") { "), e[x(2244)][x(794)]) {
              if (U[x(2426)] == "object" && e.schema[x(2372)]) {
                var g = e[x(727)][x(2372)], J0 = Object[x(2278)](g), T = J0;
                if (T)
                  for (var q, L = -1, Q = T.length - 1; L < Q; ) {
                    q = T[L += 1];
                    var G = g[q];
                    if (G[x(1658)] !== void 0) {
                      var Z = y + e[x(2545)].getProperty(q);
                      if (e[x(2521)]) {
                        if (e.opts[x(1125)]) {
                          var A = x(2068) + Z;
                          if (e[x(2244)][x(1125)] === "log") e[x(1077)].warn(A);
                          else throw new Error(A);
                        }
                      } else r += " if (" + Z + x(1478), e.opts[x(794)] == "empty" && (r += " || " + Z + x(1530) + Z + " === '' "), r += x(1953) + Z + x(1165), e[x(2244)][x(794)] == "shared" ? r += " " + e[x(792)](G[x(1658)]) + " " : r += " " + JSON[x(2301)](G[x(1658)]) + " ", r += "; ";
                    }
                  }
              } else if (U[x(2426)] == x(1196) && Array.isArray(e[x(727)][x(2637)])) {
                var Y = e[x(727)].items;
                if (Y) {
                  for (var G, u0 = -1, n0 = Y[x(1200)] - 1; u0 < n0; )
                    if (G = Y[u0 += 1], G.default !== void 0) {
                      var Z = y + "[" + u0 + "]";
                      if (e[x(2521)]) {
                        if (e.opts[x(1125)]) {
                          var A = x(2068) + Z;
                          if (e[x(2244)].strictDefaults === "log") e[x(1077)][x(1808)](A);
                          else throw new Error(A);
                        }
                      } else r += x(1843) + Z + x(1478), e[x(2244)][x(794)] == "empty" && (r += x(1689) + Z + x(1530) + Z + x(1793)), r += x(1953) + Z + x(1165), e.opts[x(794)] == x(2289) ? r += " " + e.useDefault(G[x(1658)]) + " " : r += " " + JSON[x(2301)](G[x(1658)]) + " ", r += "; ";
                    }
                }
              }
            }
            var i0 = U[x(2568)];
            if (i0) {
              for (var x0, j0 = -1, q0 = i0[x(1200)] - 1; j0 < q0; )
                if (x0 = i0[j0 += 1], K0(x0)) {
                  var $0 = x0[x(1204)](e, x0[x(1614)], U[x(2426)]);
                  $0 && (r += " " + $0 + " ", P && (E += "}"));
                }
            }
            if (P && (r += " " + E + " ", E = ""), U[x(2426)] && (r += x(2274), M && M === U.type && !N)) {
              r += x(1293);
              var h = e[x(791)] + x(739), m = e[x(578)] + "/type", w = w || [];
              w.push(r), r = "", e[x(573)] !== !1 ? (r += x(1250) + (j || x(2426)) + x(1035) + e[x(1105)] + x(2166) + e[x(2545)][x(1891)](m) + " , params: { type: '", F ? r += "" + M[x(2573)](",") : r += "" + M, r += x(1993), e[x(2244)].messages !== !1 && (r += x(2167), F ? r += "" + M[x(2573)](",") : r += "" + M, r += "' "), e[x(2244)][x(1188)] && (r += x(2361) + h + x(1787) + e[x(791)] + " , data: " + y + " "), r += x(2274)) : r += " {} ";
              var S = r;
              r = w.pop(), !e[x(2521)] && P ? e[x(1721)] ? r += x(1585) + S + "]); " : r += x(2128) + S + x(682) : r += x(1327) + S + x(518), r += x(2274);
            }
            P && (r += x(553), R ? r += "0" : r += "errs_" + f, r += x(1330), D += "}");
          }
      }
    }
    P && (r += " " + D + " "), R ? (s ? (r += x(865), r += " else throw new ValidationError(vErrors); ") : (r += " validate.errors = vErrors; ", r += x(889)), r += " }; return validate;") : r += x(838) + C + x(2479) + f + ";";
    function b0(Q0) {
      const O0 = x;
      for (var z0 = Q0[O0(2568)], X0 = 0; X0 < z0[O0(1200)]; X0++) if (K0(z0[X0])) return !0;
    }
    function K0(Q0) {
      const O0 = x;
      return e[O0(727)][Q0[O0(1614)]] !== void 0 || Q0[O0(1999)] && sx(Q0);
    }
    function sx(Q0) {
      const O0 = x;
      for (var z0 = Q0[O0(1999)], X0 = 0; X0 < z0[O0(1200)]; X0++) if (e.schema[z0[X0]] !== void 0) return !0;
    }
    return r;
  }), Qe;
}
var Ge, Hr;
function ko() {
  const i = n;
  if (Hr) return Ge;
  Hr = 1;
  var e = ar(), t = Wx(), a = nr(), x = cs(), r = ds(), s = t[i(1137)], o = rr(), c = a[i(2366)];
  Ge = d;
  function d(S, R, A, C) {
    const P = i;
    var E = this, D = this[P(904)], j = [void 0], M = {}, F = [], N = {}, U = [], $ = {}, V = [];
    R = R || { schema: S, refVal: j, refs: M };
    var J = u[P(2518)](this, S, R, C), s0 = this._compilations[J[P(1857)]];
    if (J[P(1924)]) return s0[P(1023)] = w0;
    var o0 = this[P(2011)], u0 = this[P(523)];
    try {
      var a0 = m0(S, R, A, C);
      s0[P(2481)] = a0;
      var f0 = s0[P(1023)];
      return f0 && (f0[P(727)] = a0.schema, f0.errors = null, f0[P(1568)] = a0[P(1568)], f0[P(2641)] = a0[P(2641)], f0[P(1129)] = a0[P(1129)], f0[P(950)] = a0[P(950)], D[P(581)] && (f0[P(1411)] = a0[P(1411)])), a0;
    } finally {
      f[P(2518)](this, S, R, C);
    }
    function w0() {
      const Z = P;
      var Y = s0.validate, n0 = Y[Z(1364)](this, arguments);
      return w0[Z(1418)] = Y[Z(1418)], n0;
    }
    function m0(Z, Y, n0, i0) {
      const x0 = P;
      var j0 = !Y || Y && Y[x0(727)] == Z;
      if (Y.schema != R[x0(727)]) return d[x0(2518)](E, Z, Y, n0, i0);
      var q0 = Z[x0(950)] === !0, $0 = r({ isTop: !0, schema: Z, isRoot: j0, baseId: i0, root: Y, schemaPath: "", errSchemaPath: "#", errorPath: '""', MissingRefError: a[x0(2411)], RULES: u0, validate: r, util: t, resolve: e, resolveRef: D0, usePattern: L, useDefault: Q, useCustomRule: G, opts: D, formats: o0, logger: E[x0(1077)], self: E });
      $0 = w(j, m) + w(F, g) + w(U, h) + w(V, y) + $0, D.processCode && ($0 = D[x0(839)]($0, Z));
      var b0;
      try {
        var K0 = new Function("self", "RULES", x0(1285), x0(1129), x0(2641), "defaults", x0(2236), "equal", "ucs2length", x0(1197), $0);
        b0 = K0(E, u0, o0, R, j, U, V, o, s, c), j[0] = b0;
      } catch (sx) {
        throw E.logger[x0(2389)](x0(2639), $0), sx;
      }
      return b0[x0(727)] = Z, b0[x0(1418)] = null, b0.refs = M, b0[x0(2641)] = j, b0[x0(1129)] = j0 ? b0 : Y, q0 && (b0[x0(950)] = !0), D[x0(581)] === !0 && (b0.source = { code: $0, patterns: F, defaults: U }), b0;
    }
    function D0(Z, Y, n0) {
      const i0 = P;
      Y = e[i0(2746)](Z, Y);
      var x0 = M[Y], j0, q0;
      if (x0 !== void 0) return j0 = j[x0], q0 = "refVal[" + x0 + "]", q(j0, q0);
      if (!n0 && R.refs) {
        var $0 = R[i0(1568)][Y];
        if ($0 !== void 0) return j0 = R[i0(2641)][$0], q0 = E0(Y, j0), q(j0, q0);
      }
      q0 = E0(Y);
      var b0 = e[i0(2518)](E, m0, R, Y);
      if (b0 === void 0) {
        var K0 = A && A[Y];
        K0 && (b0 = e.inlineRef(K0, D.inlineRefs) ? K0 : d[i0(2518)](E, K0, R, A, Z));
      }
      if (b0 === void 0) J0(Y);
      else return T(Y, b0), q(b0, q0);
    }
    function E0(Z, Y) {
      var i0 = j[P(1200)];
      return j[i0] = Y, M[Z] = i0, "refVal" + i0;
    }
    function J0(Z) {
      delete M[Z];
    }
    function T(Z, Y) {
      var n0 = M[Z];
      j[n0] = Y;
    }
    function q(Z, Y) {
      const n0 = P;
      return typeof Z == n0(2437) || typeof Z == n0(958) ? { code: Y, schema: Z, inline: !0 } : { code: Y, $async: Z && !!Z[n0(950)] };
    }
    function L(Z) {
      const Y = P;
      var n0 = N[Z];
      return n0 === void 0 && (n0 = N[Z] = F[Y(1200)], F[n0] = Z), Y(1995) + n0;
    }
    function Q(Z) {
      const Y = P;
      switch (typeof Z) {
        case Y(958):
        case Y(2074):
          return "" + Z;
        case "string":
          return t[Y(1891)](Z);
        case Y(2437):
          if (Z === null) return Y(2382);
          var n0 = x(Z), i0 = $[n0];
          return i0 === void 0 && (i0 = $[n0] = U[Y(1200)], U[i0] = Z), "default" + i0;
      }
    }
    function G(Z, Y, n0, i0) {
      const x0 = P;
      if (E[x0(904)].validateSchema !== !1) {
        var j0 = Z[x0(1596)][x0(1362)];
        if (j0 && !j0.every(function(X0) {
          const Bx = x0;
          return Object.prototype[Bx(2452)].call(n0, X0);
        })) throw new Error("parent schema must have all required keywords: " + j0[x0(2573)](","));
        var q0 = Z[x0(1596)][x0(2123)];
        if (q0) {
          var $0 = q0(Y);
          if (!$0) {
            var b0 = x0(2070) + E[x0(2291)](q0[x0(1418)]);
            if (E._opts[x0(2123)] == x0(816)) E.logger[x0(2389)](b0);
            else throw new Error(b0);
          }
        }
      }
      var K0 = Z[x0(1596)].compile, sx = Z.definition[x0(2613)], Q0 = Z.definition[x0(1347)], O0;
      if (K0) O0 = K0[x0(2518)](E, Y, n0, i0);
      else if (Q0)
        O0 = Q0[x0(2518)](E, Y, n0, i0), D.validateSchema !== !1 && E[x0(2123)](O0, !0);
      else if (sx) O0 = sx.call(E, i0, Z[x0(1614)], Y, n0);
      else if (O0 = Z[x0(1596)][x0(2481)], !O0) return;
      if (O0 === void 0) throw new Error(x0(1157) + Z[x0(1614)] + '"failed to compile');
      var z0 = V.length;
      return V[z0] = O0, { code: x0(741) + z0, validate: O0 };
    }
  }
  function u(S, R, A) {
    const C = i;
    var P = l[C(2518)](this, S, R, A);
    return P >= 0 ? { index: P, compiling: !0 } : (P = this._compilations[C(1200)], this[C(2314)][P] = { schema: S, root: R, baseId: A }, { index: P, compiling: !1 });
  }
  function f(S, R, A) {
    const C = i;
    var P = l[C(2518)](this, S, R, A);
    P >= 0 && this[C(2314)][C(1065)](P, 1);
  }
  function l(S, R, A) {
    const C = i;
    for (var P = 0; P < this[C(2314)][C(1200)]; P++) {
      var E = this[C(2314)][P];
      if (E[C(727)] == S && E[C(1129)] == R && E[C(1013)] == A) return P;
    }
    return -1;
  }
  function g(S, R) {
    const A = i;
    return A(1637) + S + " = new RegExp(" + t[A(1891)](R[S]) + ");";
  }
  function h(S) {
    return i(1354) + S + " = defaults[" + S + "];";
  }
  function m(S, R) {
    return R[S] === void 0 ? "" : "var refVal" + S + " = refVal[" + S + "];";
  }
  function y(S) {
    const R = i;
    return "var customRule" + S + R(2340) + S + "];";
  }
  function w(S, R) {
    const A = i;
    if (!S[A(1200)]) return "";
    for (var C = "", P = 0; P < S[A(1200)]; P++) C += R(P, S);
    return C;
  }
  return Ge;
}
var Ye = { exports: {} }, Ur;
function B(i, e) {
  const t = Ie();
  return B = function(a, x) {
    return a = a - 485, t[a];
  }, B(i, e);
}
function Eo() {
  const i = n;
  if (Ur) return Ye[i(1791)];
  Ur = 1;
  var e = Ye.exports = function() {
    const a = i;
    this[a(967)] = {};
  };
  return e.prototype[i(1807)] = function(a, x) {
    const r = i;
    this[r(967)][a] = x;
  }, e[i(1166)][i(1261)] = function(a) {
    return this[i(967)][a];
  }, e.prototype[i(504)] = function(a) {
    const x = i;
    delete this[x(967)][a];
  }, e[i(1166)].clear = function() {
    const a = i;
    this[a(967)] = {};
  }, Ye[i(1791)];
}
var Xe, Vr;
function Co() {
  const i = n;
  if (Vr) return Xe;
  Vr = 1;
  var e = Wx(), t = /^(\d\d\d\d)-(\d\d)-(\d\d)$/, a = [0, 31, 28, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31], x = /^(\d\d):(\d\d):(\d\d)(\.\d+)?(z|[+-]\d\d(?::?\d\d)?)?$/i, r = /^(?=.{1,253}\.?$)[a-z0-9](?:[a-z0-9-]{0,61}[a-z0-9])?(?:\.[a-z0-9](?:[-0-9a-z]{0,61}[0-9a-z])?)*\.?$/i, s = /^(?:[a-z][a-z0-9+\-.]*:)(?:\/?\/(?:(?:[a-z0-9\-._~!$&'()*+,;=:]|%[0-9a-f]{2})*@)?(?:\[(?:(?:(?:(?:[0-9a-f]{1,4}:){6}|::(?:[0-9a-f]{1,4}:){5}|(?:[0-9a-f]{1,4})?::(?:[0-9a-f]{1,4}:){4}|(?:(?:[0-9a-f]{1,4}:){0,1}[0-9a-f]{1,4})?::(?:[0-9a-f]{1,4}:){3}|(?:(?:[0-9a-f]{1,4}:){0,2}[0-9a-f]{1,4})?::(?:[0-9a-f]{1,4}:){2}|(?:(?:[0-9a-f]{1,4}:){0,3}[0-9a-f]{1,4})?::[0-9a-f]{1,4}:|(?:(?:[0-9a-f]{1,4}:){0,4}[0-9a-f]{1,4})?::)(?:[0-9a-f]{1,4}:[0-9a-f]{1,4}|(?:(?:25[0-5]|2[0-4]\d|[01]?\d\d?)\.){3}(?:25[0-5]|2[0-4]\d|[01]?\d\d?))|(?:(?:[0-9a-f]{1,4}:){0,5}[0-9a-f]{1,4})?::[0-9a-f]{1,4}|(?:(?:[0-9a-f]{1,4}:){0,6}[0-9a-f]{1,4})?::)|[Vv][0-9a-f]+\.[a-z0-9\-._~!$&'()*+,;=:]+)\]|(?:(?:25[0-5]|2[0-4]\d|[01]?\d\d?)\.){3}(?:25[0-5]|2[0-4]\d|[01]?\d\d?)|(?:[a-z0-9\-._~!$&'()*+,;=]|%[0-9a-f]{2})*)(?::\d*)?(?:\/(?:[a-z0-9\-._~!$&'()*+,;=:@]|%[0-9a-f]{2})*)*|\/(?:(?:[a-z0-9\-._~!$&'()*+,;=:@]|%[0-9a-f]{2})+(?:\/(?:[a-z0-9\-._~!$&'()*+,;=:@]|%[0-9a-f]{2})*)*)?|(?:[a-z0-9\-._~!$&'()*+,;=:@]|%[0-9a-f]{2})+(?:\/(?:[a-z0-9\-._~!$&'()*+,;=:@]|%[0-9a-f]{2})*)*)(?:\?(?:[a-z0-9\-._~!$&'()*+,;=:@/?]|%[0-9a-f]{2})*)?(?:#(?:[a-z0-9\-._~!$&'()*+,;=:@/?]|%[0-9a-f]{2})*)?$/i, o = /^(?:[a-z][a-z0-9+\-.]*:)?(?:\/?\/(?:(?:[a-z0-9\-._~!$&'()*+,;=:]|%[0-9a-f]{2})*@)?(?:\[(?:(?:(?:(?:[0-9a-f]{1,4}:){6}|::(?:[0-9a-f]{1,4}:){5}|(?:[0-9a-f]{1,4})?::(?:[0-9a-f]{1,4}:){4}|(?:(?:[0-9a-f]{1,4}:){0,1}[0-9a-f]{1,4})?::(?:[0-9a-f]{1,4}:){3}|(?:(?:[0-9a-f]{1,4}:){0,2}[0-9a-f]{1,4})?::(?:[0-9a-f]{1,4}:){2}|(?:(?:[0-9a-f]{1,4}:){0,3}[0-9a-f]{1,4})?::[0-9a-f]{1,4}:|(?:(?:[0-9a-f]{1,4}:){0,4}[0-9a-f]{1,4})?::)(?:[0-9a-f]{1,4}:[0-9a-f]{1,4}|(?:(?:25[0-5]|2[0-4]\d|[01]?\d\d?)\.){3}(?:25[0-5]|2[0-4]\d|[01]?\d\d?))|(?:(?:[0-9a-f]{1,4}:){0,5}[0-9a-f]{1,4})?::[0-9a-f]{1,4}|(?:(?:[0-9a-f]{1,4}:){0,6}[0-9a-f]{1,4})?::)|[Vv][0-9a-f]+\.[a-z0-9\-._~!$&'()*+,;=:]+)\]|(?:(?:25[0-5]|2[0-4]\d|[01]?\d\d?)\.){3}(?:25[0-5]|2[0-4]\d|[01]?\d\d?)|(?:[a-z0-9\-._~!$&'"()*+,;=]|%[0-9a-f]{2})*)(?::\d*)?(?:\/(?:[a-z0-9\-._~!$&'"()*+,;=:@]|%[0-9a-f]{2})*)*|\/(?:(?:[a-z0-9\-._~!$&'"()*+,;=:@]|%[0-9a-f]{2})+(?:\/(?:[a-z0-9\-._~!$&'"()*+,;=:@]|%[0-9a-f]{2})*)*)?|(?:[a-z0-9\-._~!$&'"()*+,;=:@]|%[0-9a-f]{2})+(?:\/(?:[a-z0-9\-._~!$&'"()*+,;=:@]|%[0-9a-f]{2})*)*)?(?:\?(?:[a-z0-9\-._~!$&'"()*+,;=:@/?]|%[0-9a-f]{2})*)?(?:#(?:[a-z0-9\-._~!$&'"()*+,;=:@/?]|%[0-9a-f]{2})*)?$/i, c = /^(?:(?:[^\x00-\x20"'<>%\\^`{|}]|%[0-9a-f]{2})|\{[+#./;?&=,!@|]?(?:[a-z0-9_]|%[0-9a-f]{2})+(?::[1-9][0-9]{0,3}|\*)?(?:,(?:[a-z0-9_]|%[0-9a-f]{2})+(?::[1-9][0-9]{0,3}|\*)?)*\})*$/i, d = /^(?:(?:http[s\u017F]?|ftp):\/\/)(?:(?:[\0-\x08\x0E-\x1F!-\x9F\xA1-\u167F\u1681-\u1FFF\u200B-\u2027\u202A-\u202E\u2030-\u205E\u2060-\u2FFF\u3001-\uD7FF\uE000-\uFEFE\uFF00-\uFFFF]|[\uD800-\uDBFF][\uDC00-\uDFFF]|[\uD800-\uDBFF](?![\uDC00-\uDFFF])|(?:[^\uD800-\uDBFF]|^)[\uDC00-\uDFFF])+(?::(?:[\0-\x08\x0E-\x1F!-\x9F\xA1-\u167F\u1681-\u1FFF\u200B-\u2027\u202A-\u202E\u2030-\u205E\u2060-\u2FFF\u3001-\uD7FF\uE000-\uFEFE\uFF00-\uFFFF]|[\uD800-\uDBFF][\uDC00-\uDFFF]|[\uD800-\uDBFF](?![\uDC00-\uDFFF])|(?:[^\uD800-\uDBFF]|^)[\uDC00-\uDFFF])*)?@)?(?:(?!10(?:\.[0-9]{1,3}){3})(?!127(?:\.[0-9]{1,3}){3})(?!169\.254(?:\.[0-9]{1,3}){2})(?!192\.168(?:\.[0-9]{1,3}){2})(?!172\.(?:1[6-9]|2[0-9]|3[01])(?:\.[0-9]{1,3}){2})(?:[1-9][0-9]?|1[0-9][0-9]|2[01][0-9]|22[0-3])(?:\.(?:1?[0-9]{1,2}|2[0-4][0-9]|25[0-5])){2}(?:\.(?:[1-9][0-9]?|1[0-9][0-9]|2[0-4][0-9]|25[0-4]))|(?:(?:(?:[0-9a-z\xA1-\uD7FF\uE000-\uFFFF]|[\uD800-\uDBFF](?![\uDC00-\uDFFF])|(?:[^\uD800-\uDBFF]|^)[\uDC00-\uDFFF])+-)*(?:[0-9a-z\xA1-\uD7FF\uE000-\uFFFF]|[\uD800-\uDBFF](?![\uDC00-\uDFFF])|(?:[^\uD800-\uDBFF]|^)[\uDC00-\uDFFF])+)(?:\.(?:(?:[0-9a-z\xA1-\uD7FF\uE000-\uFFFF]|[\uD800-\uDBFF](?![\uDC00-\uDFFF])|(?:[^\uD800-\uDBFF]|^)[\uDC00-\uDFFF])+-)*(?:[0-9a-z\xA1-\uD7FF\uE000-\uFFFF]|[\uD800-\uDBFF](?![\uDC00-\uDFFF])|(?:[^\uD800-\uDBFF]|^)[\uDC00-\uDFFF])+)*(?:\.(?:(?:[a-z\xA1-\uD7FF\uE000-\uFFFF]|[\uD800-\uDBFF](?![\uDC00-\uDFFF])|(?:[^\uD800-\uDBFF]|^)[\uDC00-\uDFFF]){2,})))(?::[0-9]{2,5})?(?:\/(?:[\0-\x08\x0E-\x1F!-\x9F\xA1-\u167F\u1681-\u1FFF\u200B-\u2027\u202A-\u202E\u2030-\u205E\u2060-\u2FFF\u3001-\uD7FF\uE000-\uFEFE\uFF00-\uFFFF]|[\uD800-\uDBFF][\uDC00-\uDFFF]|[\uD800-\uDBFF](?![\uDC00-\uDFFF])|(?:[^\uD800-\uDBFF]|^)[\uDC00-\uDFFF])*)?$/i, u = /^(?:urn:uuid:)?[0-9a-f]{8}-(?:[0-9a-f]{4}-){3}[0-9a-f]{12}$/i, f = /^(?:\/(?:[^~/]|~0|~1)*)*$/, l = /^#(?:\/(?:[a-z0-9_\-.!$&'()*+,;:=@]|%[0-9a-f]{2}|~0|~1)*)*$/i, g = /^(?:0|[1-9][0-9]*)(?:#|(?:\/(?:[^~/]|~0|~1)*)*)$/;
  Xe = h;
  function h(D) {
    const j = B;
    return D = D == "full" ? j(2309) : j(1409), e[j(2456)](h[D]);
  }
  h.fast = { date: /^\d\d\d\d-[0-1]\d-[0-3]\d$/, time: /^(?:[0-2]\d:[0-5]\d:[0-5]\d|23:59:60)(?:\.\d+)?(?:z|[+-]\d\d(?::?\d\d)?)?$/i, "date-time": /^\d\d\d\d-[0-1]\d-[0-3]\d[t\s](?:[0-2]\d:[0-5]\d:[0-5]\d|23:59:60)(?:\.\d+)?(?:z|[+-]\d\d(?::?\d\d)?)$/i, uri: /^(?:[a-z][a-z0-9+\-.]*:)(?:\/?\/)?[^\s]*$/i, "uri-reference": /^(?:(?:[a-z][a-z0-9+\-.]*:)?\/?\/)?(?:[^\\\s#][^\s#]*)?(?:#[^\\\s]*)?$/i, "uri-template": c, url: d, email: /^[a-z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-z0-9](?:[a-z0-9-]{0,61}[a-z0-9])?(?:\.[a-z0-9](?:[a-z0-9-]{0,61}[a-z0-9])?)*$/i, hostname: r, ipv4: /^(?:(?:25[0-5]|2[0-4]\d|[01]?\d\d?)\.){3}(?:25[0-5]|2[0-4]\d|[01]?\d\d?)$/, ipv6: /^\s*(?:(?:(?:[0-9a-f]{1,4}:){7}(?:[0-9a-f]{1,4}|:))|(?:(?:[0-9a-f]{1,4}:){6}(?::[0-9a-f]{1,4}|(?:(?:25[0-5]|2[0-4]\d|1\d\d|[1-9]?\d)(?:\.(?:25[0-5]|2[0-4]\d|1\d\d|[1-9]?\d)){3})|:))|(?:(?:[0-9a-f]{1,4}:){5}(?:(?:(?::[0-9a-f]{1,4}){1,2})|:(?:(?:25[0-5]|2[0-4]\d|1\d\d|[1-9]?\d)(?:\.(?:25[0-5]|2[0-4]\d|1\d\d|[1-9]?\d)){3})|:))|(?:(?:[0-9a-f]{1,4}:){4}(?:(?:(?::[0-9a-f]{1,4}){1,3})|(?:(?::[0-9a-f]{1,4})?:(?:(?:25[0-5]|2[0-4]\d|1\d\d|[1-9]?\d)(?:\.(?:25[0-5]|2[0-4]\d|1\d\d|[1-9]?\d)){3}))|:))|(?:(?:[0-9a-f]{1,4}:){3}(?:(?:(?::[0-9a-f]{1,4}){1,4})|(?:(?::[0-9a-f]{1,4}){0,2}:(?:(?:25[0-5]|2[0-4]\d|1\d\d|[1-9]?\d)(?:\.(?:25[0-5]|2[0-4]\d|1\d\d|[1-9]?\d)){3}))|:))|(?:(?:[0-9a-f]{1,4}:){2}(?:(?:(?::[0-9a-f]{1,4}){1,5})|(?:(?::[0-9a-f]{1,4}){0,3}:(?:(?:25[0-5]|2[0-4]\d|1\d\d|[1-9]?\d)(?:\.(?:25[0-5]|2[0-4]\d|1\d\d|[1-9]?\d)){3}))|:))|(?:(?:[0-9a-f]{1,4}:){1}(?:(?:(?::[0-9a-f]{1,4}){1,6})|(?:(?::[0-9a-f]{1,4}){0,4}:(?:(?:25[0-5]|2[0-4]\d|1\d\d|[1-9]?\d)(?:\.(?:25[0-5]|2[0-4]\d|1\d\d|[1-9]?\d)){3}))|:))|(?::(?:(?:(?::[0-9a-f]{1,4}){1,7})|(?:(?::[0-9a-f]{1,4}){0,5}:(?:(?:25[0-5]|2[0-4]\d|1\d\d|[1-9]?\d)(?:\.(?:25[0-5]|2[0-4]\d|1\d\d|[1-9]?\d)){3}))|:)))(?:%.+)?\s*$/i, regex: E, uuid: u, "json-pointer": f, "json-pointer-uri-fragment": l, "relative-json-pointer": g }, h[i(2309)] = { date: y, time: w, "date-time": R, uri: C, "uri-reference": o, "uri-template": c, url: d, email: /^[a-z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[a-z0-9!#$%&'*+/=?^_`{|}~-]+)*@(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?$/i, hostname: r, ipv4: /^(?:(?:25[0-5]|2[0-4]\d|[01]?\d\d?)\.){3}(?:25[0-5]|2[0-4]\d|[01]?\d\d?)$/, ipv6: /^\s*(?:(?:(?:[0-9a-f]{1,4}:){7}(?:[0-9a-f]{1,4}|:))|(?:(?:[0-9a-f]{1,4}:){6}(?::[0-9a-f]{1,4}|(?:(?:25[0-5]|2[0-4]\d|1\d\d|[1-9]?\d)(?:\.(?:25[0-5]|2[0-4]\d|1\d\d|[1-9]?\d)){3})|:))|(?:(?:[0-9a-f]{1,4}:){5}(?:(?:(?::[0-9a-f]{1,4}){1,2})|:(?:(?:25[0-5]|2[0-4]\d|1\d\d|[1-9]?\d)(?:\.(?:25[0-5]|2[0-4]\d|1\d\d|[1-9]?\d)){3})|:))|(?:(?:[0-9a-f]{1,4}:){4}(?:(?:(?::[0-9a-f]{1,4}){1,3})|(?:(?::[0-9a-f]{1,4})?:(?:(?:25[0-5]|2[0-4]\d|1\d\d|[1-9]?\d)(?:\.(?:25[0-5]|2[0-4]\d|1\d\d|[1-9]?\d)){3}))|:))|(?:(?:[0-9a-f]{1,4}:){3}(?:(?:(?::[0-9a-f]{1,4}){1,4})|(?:(?::[0-9a-f]{1,4}){0,2}:(?:(?:25[0-5]|2[0-4]\d|1\d\d|[1-9]?\d)(?:\.(?:25[0-5]|2[0-4]\d|1\d\d|[1-9]?\d)){3}))|:))|(?:(?:[0-9a-f]{1,4}:){2}(?:(?:(?::[0-9a-f]{1,4}){1,5})|(?:(?::[0-9a-f]{1,4}){0,3}:(?:(?:25[0-5]|2[0-4]\d|1\d\d|[1-9]?\d)(?:\.(?:25[0-5]|2[0-4]\d|1\d\d|[1-9]?\d)){3}))|:))|(?:(?:[0-9a-f]{1,4}:){1}(?:(?:(?::[0-9a-f]{1,4}){1,6})|(?:(?::[0-9a-f]{1,4}){0,4}:(?:(?:25[0-5]|2[0-4]\d|1\d\d|[1-9]?\d)(?:\.(?:25[0-5]|2[0-4]\d|1\d\d|[1-9]?\d)){3}))|:))|(?::(?:(?:(?::[0-9a-f]{1,4}){1,7})|(?:(?::[0-9a-f]{1,4}){0,5}:(?:(?:25[0-5]|2[0-4]\d|1\d\d|[1-9]?\d)(?:\.(?:25[0-5]|2[0-4]\d|1\d\d|[1-9]?\d)){3}))|:)))(?:%.+)?\s*$/i, regex: E, uuid: u, "json-pointer": f, "json-pointer-uri-fragment": l, "relative-json-pointer": g };
  function m(D) {
    return D % 4 === 0 && (D % 100 !== 0 || D % 400 === 0);
  }
  function y(D) {
    var M = D[i(799)](t);
    if (!M) return !1;
    var F = +M[1], N = +M[2], U = +M[3];
    return N >= 1 && N <= 12 && U >= 1 && U <= (N == 2 && m(F) ? 29 : a[N]);
  }
  function w(D, j) {
    var F = D[i(799)](x);
    if (!F) return !1;
    var N = F[1], U = F[2], $ = F[3], V = F[5];
    return (N <= 23 && U <= 59 && $ <= 59 || N == 23 && U == 59 && $ == 60) && (!j || V);
  }
  var S = /t|\s/i;
  function R(D) {
    const j = i;
    var M = D[j(2248)](S);
    return M[j(1200)] == 2 && y(M[0]) && w(M[1], !0);
  }
  var A = /\/|:/;
  function C(D) {
    return A[i(1313)](D) && s.test(D);
  }
  var P = /[^\\]\\Z/;
  function E(D) {
    if (P[i(1313)](D)) return !1;
    try {
      return new RegExp(D), !0;
    } catch {
      return !1;
    }
  }
  return Xe;
}
var _e, Zr;
function Io() {
  return Zr || (Zr = 1, _e = function(e, t, a) {
    const x = B;
    var r = " ", s = e[x(1304)], o = e.dataLevel, c = e.schema[t], d = e.errSchemaPath + "/" + t, u = !e.opts.allErrors, f = "data" + (o || ""), l = x(1954) + s, g, h;
    if (c == "#" || c == "#/") e[x(1136)] ? (g = e[x(1721)], h = x(2481)) : (g = e[x(1129)][x(727)][x(950)] === !0, h = x(1174));
    else {
      var m = e[x(1741)](e.baseId, c, e[x(1136)]);
      if (m === void 0) {
        var y = e[x(941)][x(2353)](e.baseId, c);
        if (e.opts[x(1630)] == x(2131)) {
          e.logger[x(2389)](y);
          var w = w || [];
          w[x(818)](r), r = "", e[x(573)] !== !1 ? (r += x(1250) + "$ref' , dataPath: (dataPath || '') + " + e[x(1105)] + x(2166) + e.util[x(1891)](d) + x(2436) + e.util[x(1086)](c) + x(1993), e[x(2244)][x(1064)] !== !1 && (r += x(1385) + e.util[x(1086)](c) + "' "), e.opts[x(1188)] && (r += " , schema: " + e.util[x(1891)](c) + x(1787) + e[x(791)] + x(2701) + f + " "), r += x(2274)) : r += x(1494);
          var S = r;
          r = w.pop(), !e.compositeRule && u ? e.async ? r += " throw new ValidationError([" + S + x(2477) : r += x(2128) + S + x(682) : r += x(1327) + S + ";  if (vErrors === null) vErrors = [err]; else vErrors.push(err); errors++; ", u && (r += x(1746));
        } else if (e[x(2244)][x(1630)] == x(2582)) e.logger[x(1808)](y), u && (r += " if (true) { ");
        else throw new e.MissingRefError(e[x(1013)], c, y);
      } else if (m[x(2613)]) {
        var R = e[x(2545)][x(2456)](e);
        R[x(1304)]++;
        var A = "valid" + R[x(1304)];
        R[x(727)] = m[x(727)], R[x(791)] = "", R.errSchemaPath = c;
        var C = e[x(2481)](R).replace(/validate\.schema/g, m[x(1204)]);
        r += " " + C + " ", u && (r += x(1843) + A + ") { ");
      } else g = m[x(950)] === !0 || e[x(1721)] && m[x(950)] !== !1, h = m[x(1204)];
    }
    if (h) {
      var w = w || [];
      w[x(818)](r), r = "", e[x(2244)][x(1419)] ? r += " " + h + x(2691) : r += " " + h + "( ", r += " " + f + x(2657), e[x(1105)] != '""' && (r += " + " + e[x(1105)]);
      var P = o ? "data" + (o - 1 || "") : "parentData", E = o ? e.dataPathArr[o] : x(2024);
      r += x(2039) + P + x(2039) + E + x(1619);
      var D = r;
      if (r = w[x(2087)](), g) {
        if (!e[x(1721)]) throw new Error(x(2168));
        u && (r += x(838) + l + "; "), r += x(1142) + D + "; ", u && (r += " " + l + x(2483)), r += x(890), u && (r += " " + l + " = false; "), r += " } ", u && (r += x(1843) + l + ") { ");
      } else r += " if (!" + D + ") { if (vErrors === null) vErrors = " + h + x(975) + h + x(2018), u && (r += x(1293));
    }
    return r;
  }), _e;
}
var xt, Wr;
function Ro() {
  return Wr || (Wr = 1, xt = function(e, t, a) {
    const x = B;
    var r = " ", s = e[x(727)][t], o = e[x(791)] + e[x(2545)].getProperty(t), c = e[x(578)] + "/" + t, d = !e[x(2244)][x(837)], u = e[x(2545)][x(2456)](e), f = "";
    u[x(1304)]++;
    var l = x(1954) + u[x(1304)], g = u[x(1013)], h = !0, m = s;
    if (m)
      for (var y, w = -1, S = m[x(1200)] - 1; w < S; )
        y = m[w += 1], (e[x(2244)][x(1380)] ? typeof y == x(2437) && Object[x(2278)](y)[x(1200)] > 0 || y === !1 : e.util.schemaHasRules(y, e[x(523)].all)) && (h = !1, u[x(727)] = y, u[x(791)] = o + "[" + w + "]", u[x(578)] = c + "/" + w, r += "  " + e[x(2481)](u) + " ", u.baseId = g, d && (r += " if (" + l + ") { ", f += "}"));
    return d && (h ? r += x(2110) : r += " " + f[x(2602)](0, -1) + " "), r;
  }), xt;
}
var et, Br;
function Fo() {
  return Br || (Br = 1, et = function(e, t, a) {
    const x = B;
    var r = " ", s = e[x(1304)], o = e.dataLevel, c = e.schema[t], d = e[x(791)] + e[x(2545)].getProperty(t), u = e[x(578)] + "/" + t, f = !e[x(2244)][x(837)], l = x(726) + (o || ""), g = x(1954) + s, h = "errs__" + s, m = e[x(2545)][x(2456)](e), y = "";
    m.level++;
    var w = x(1954) + m[x(1304)], S = c.every(function(j) {
      const M = x;
      return e[M(2244)][M(1380)] ? typeof j == M(2437) && Object[M(2278)](j)[M(1200)] > 0 || j === !1 : e[M(2545)][M(2547)](j, e.RULES[M(1135)]);
    });
    if (S) {
      var R = m[x(1013)];
      r += " var " + h + x(1260) + g + x(2240);
      var A = e[x(2521)];
      e[x(2521)] = m[x(2521)] = !0;
      var C = c;
      if (C)
        for (var P, E = -1, D = C[x(1200)] - 1; E < D; )
          P = C[E += 1], m.schema = P, m[x(791)] = d + "[" + E + "]", m[x(578)] = u + "/" + E, r += "  " + e.validate(m) + " ", m.baseId = R, r += " " + g + x(1165) + g + x(1689) + w + x(2554) + g + x(1330), y += "}";
      e[x(2521)] = m.compositeRule = A, r += " " + y + x(1788) + g + ") {   var err =   ", e[x(573)] !== !1 ? (r += x(1250) + "anyOf' , dataPath: (dataPath || '') + " + e[x(1105)] + " , schemaPath: " + e[x(2545)][x(1891)](u) + x(2243), e[x(2244)][x(1064)] !== !1 && (r += x(1319)), e.opts[x(1188)] && (r += x(2361) + d + " , parentSchema: validate.schema" + e.schemaPath + x(2701) + l + " "), r += x(2274)) : r += x(1494), r += ";  if (vErrors === null) vErrors = [err]; else vErrors.push(err); errors++; ", !e[x(2521)] && f && (e[x(1721)] ? r += x(2080) : r += x(805)), r += x(2193) + h + x(1095) + h + ") vErrors.length = " + h + x(622), e[x(2244)].allErrors && (r += x(2274));
    } else f && (r += x(2110));
    return r;
  }), et;
}
var tt, Kr;
function No() {
  return Kr || (Kr = 1, tt = function(e, t, a) {
    const x = B;
    var r = " ", s = e[x(727)][t], o = e[x(578)] + "/" + t;
    e.opts[x(837)];
    var c = e[x(2545)][x(1891)](s);
    return e.opts.$comment === !0 ? r += x(686) + c + ");" : typeof e[x(2244)][x(1929)] == x(1342) && (r += x(951) + c + ", " + e[x(2545)][x(1891)](o) + x(2651)), r;
  }), tt;
}
var rt, Jr;
function qo() {
  return Jr || (Jr = 1, rt = function(e, t, a) {
    const x = B;
    var r = " ", s = e[x(1304)], o = e[x(1005)], c = e.schema[t], d = e[x(791)] + e[x(2545)][x(1911)](t), u = e[x(578)] + "/" + t, f = !e[x(2244)][x(837)], l = x(726) + (o || ""), g = "valid" + s, h = e[x(2244)][x(2597)] && c && c[x(2597)];
    h && (r += " var schema" + s + x(1165) + e[x(2545)][x(2454)](c[x(2597)], o, e[x(2660)]) + "; "), !h && (r += " var schema" + s + x(640) + d + ";"), r += "var " + g + x(2500) + l + x(1873) + s + x(2394) + g + x(1053);
    var m = m || [];
    m.push(r), r = "", e[x(573)] !== !1 ? (r += " { keyword: '" + x(2442) + x(1035) + e[x(1105)] + x(2166) + e[x(2545)].toQuotedString(u) + x(2544) + s + x(2274), e.opts.messages !== !1 && (r += x(1583)), e.opts[x(1188)] && (r += x(2361) + d + x(1787) + e[x(791)] + x(2701) + l + " "), r += x(2274)) : r += " {} ";
    var y = r;
    return r = m[x(2087)](), !e[x(2521)] && f ? e[x(1721)] ? r += " throw new ValidationError([" + y + "]); " : r += x(2128) + y + "]; return false; " : r += x(1327) + y + x(518), r += " }", f && (r += " else { "), r;
  }), rt;
}
var at, Qr;
function Oo() {
  return Qr || (Qr = 1, at = function(e, t, a) {
    const x = B;
    var r = " ", s = e[x(1304)], o = e.dataLevel, c = e.schema[t], d = e.schemaPath + e.util[x(1911)](t), u = e[x(578)] + "/" + t, f = !e[x(2244)][x(837)], l = "data" + (o || ""), g = "valid" + s, h = x(970) + s, m = e.util.copy(e), y = "";
    m[x(1304)]++;
    var w = x(1954) + m[x(1304)], S = "i" + s, R = m[x(1005)] = e[x(1005)] + 1, A = x(726) + R, C = e[x(1013)], P = e[x(2244)][x(1380)] ? typeof c == x(2437) && Object[x(2278)](c)[x(1200)] > 0 || c === !1 : e.util.schemaHasRules(c, e[x(523)][x(1135)]);
    if (r += "var " + h + x(612) + g + ";", P) {
      var E = e[x(2521)];
      e.compositeRule = m.compositeRule = !0, m.schema = c, m[x(791)] = d, m[x(578)] = u, r += x(838) + w + x(800) + S + x(2299) + S + x(2706) + l + x(911) + S + x(754), m[x(1105)] = e.util[x(2020)](e.errorPath, S, e[x(2244)][x(1440)], !0);
      var D = l + "[" + S + "]";
      m[x(2660)][R] = S;
      var j = e[x(2481)](m);
      m[x(1013)] = C, e.util[x(1896)](j, A) < 2 ? r += " " + e[x(2545)][x(811)](j, A, D) + " " : r += " var " + A + x(1165) + D + "; " + j + " ", r += x(1843) + w + x(2562), e.compositeRule = m.compositeRule = E, r += " " + y + x(1788) + w + x(1618);
    } else r += x(1843) + l + x(2083);
    var M = M || [];
    M[x(818)](r), r = "", e[x(573)] !== !1 ? (r += " { keyword: '" + x(1507) + x(1035) + e[x(1105)] + " , schemaPath: " + e[x(2545)][x(1891)](u) + x(2243), e[x(2244)][x(1064)] !== !1 && (r += x(1796)), e[x(2244)][x(1188)] && (r += x(2361) + d + x(1787) + e[x(791)] + x(2701) + l + " "), r += x(2274)) : r += " {} ";
    var F = r;
    return r = M[x(2087)](), !e.compositeRule && f ? e[x(1721)] ? r += x(1585) + F + x(2477) : r += x(2128) + F + x(682) : r += x(1327) + F + x(518), r += " } else { ", P && (r += "  errors = " + h + "; if (vErrors !== null) { if (" + h + x(2525) + h + x(622)), e[x(2244)][x(837)] && (r += " } "), r;
  }), at;
}
var nt, Gr;
function Ao() {
  return Gr || (Gr = 1, nt = function(e, t, a) {
    const x = B;
    var r = " ", s = e[x(1304)], o = e.dataLevel, c = e[x(727)][t], d = e[x(791)] + e[x(2545)][x(1911)](t), u = e[x(578)] + "/" + t, f = !e.opts[x(837)], l = "data" + (o || ""), g = x(970) + s, h = e.util[x(2456)](e), m = "";
    h[x(1304)]++;
    var y = x(1954) + h[x(1304)], w = {}, S = {}, R = e.opts[x(859)];
    for (E in c)
      if (E != x(769)) {
        var A = c[E], C = Array[x(2344)](A) ? S : w;
        C[E] = A;
      }
    r += x(909) + g + x(2609);
    var P = e.errorPath;
    r += x(1942) + s + ";";
    for (var E in S)
      if (C = S[E], C[x(1200)]) {
        if (r += x(2632) + l + e[x(2545)][x(1911)](E) + x(2529), R && (r += " && Object.prototype.hasOwnProperty.call(" + l + ", '" + e[x(2545)][x(1086)](E) + x(2610)), f) {
          r += x(2614);
          var D = C;
          if (D)
            for (var j, M = -1, F = D[x(1200)] - 1; M < F; ) {
              j = D[M += 1], M && (r += x(1689));
              var N = e[x(2545)][x(1911)](j), U = l + N;
              r += x(2354) + U + " === undefined ", R && (r += x(1797) + l + x(1254) + e.util.escapeQuotes(j) + x(2610)), r += x(840) + s + x(1165) + e[x(2545)][x(1891)](e[x(2244)][x(1440)] ? j : N) + x(1322);
            }
          r += x(1763);
          var $ = x(2285) + s, V = x(2734) + $ + " + '";
          e.opts._errorDataPathProperty && (e[x(1105)] = e[x(2244)].jsonPointers ? e[x(2545)][x(2020)](P, $, !0) : P + " + " + $);
          var J = J || [];
          J[x(818)](r), r = "", e[x(573)] !== !1 ? (r += x(1250) + x(1362) + "' , dataPath: (dataPath || '') + " + e[x(1105)] + " , schemaPath: " + e[x(2545)].toQuotedString(u) + x(1511) + e.util[x(1086)](E) + x(2720) + V + x(2148) + C[x(1200)] + ", deps: '" + e.util.escapeQuotes(C[x(1200)] == 1 ? C[0] : C[x(2573)](", ")) + x(1993), e[x(2244)].messages !== !1 && (r += x(1489), C[x(1200)] == 1 ? r += "property " + e[x(2545)][x(1086)](C[0]) : r += x(1694) + e.util[x(1086)](C[x(2573)](", ")), r += " when property " + e[x(2545)].escapeQuotes(E) + x(1355)), e.opts[x(1188)] && (r += x(2361) + d + x(1787) + e.schemaPath + x(2701) + l + " "), r += " } ") : r += x(1494);
          var s0 = r;
          r = J.pop(), !e[x(2521)] && f ? e.async ? r += x(1585) + s0 + x(2477) : r += x(2128) + s0 + x(682) : r += x(1327) + s0 + x(518);
        } else {
          r += x(1969);
          var o0 = C;
          if (o0)
            for (var j, u0 = -1, a0 = o0[x(1200)] - 1; u0 < a0; ) {
              j = o0[u0 += 1];
              var N = e.util.getProperty(j), V = e.util[x(1086)](j), U = l + N;
              e[x(2244)]._errorDataPathProperty && (e[x(1105)] = e[x(2545)].getPath(P, j, e[x(2244)].jsonPointers)), r += x(2632) + U + x(1478), R && (r += " || ! Object.prototype.hasOwnProperty.call(" + l + x(1254) + e[x(2545)].escapeQuotes(j) + "') "), r += x(777), e[x(573)] !== !1 ? (r += x(1250) + x(1362) + x(1035) + e[x(1105)] + x(2166) + e.util[x(1891)](u) + x(1511) + e[x(2545)].escapeQuotes(E) + x(2720) + V + x(2148) + C[x(1200)] + ", deps: '" + e.util[x(1086)](C[x(1200)] == 1 ? C[0] : C[x(2573)](", ")) + x(1993), e[x(2244)][x(1064)] !== !1 && (r += x(1489), C.length == 1 ? r += x(738) + e.util.escapeQuotes(C[0]) : r += "properties " + e[x(2545)].escapeQuotes(C.join(", ")), r += x(721) + e[x(2545)][x(1086)](E) + " is present' "), e[x(2244)][x(1188)] && (r += x(2361) + d + " , parentSchema: validate.schema" + e[x(791)] + " , data: " + l + " "), r += " } ") : r += x(1494), r += ";  if (vErrors === null) vErrors = [err]; else vErrors.push(err); errors++; } ";
            }
        }
        r += " }   ", f && (m += "}", r += x(1293));
      }
    e[x(1105)] = P;
    var f0 = h.baseId;
    for (var E in w) {
      var A = w[E];
      (e.opts[x(1380)] ? typeof A == "object" && Object[x(2278)](A)[x(1200)] > 0 || A === !1 : e.util.schemaHasRules(A, e[x(523)][x(1135)])) && (r += " " + y + x(2173) + l + e[x(2545)].getProperty(E) + " !== undefined ", R && (r += x(1565) + l + x(1254) + e[x(2545)][x(1086)](E) + "') "), r += ") { ", h[x(727)] = A, h[x(791)] = d + e[x(2545)][x(1911)](E), h[x(578)] = u + "/" + e[x(2545)][x(750)](E), r += "  " + e[x(2481)](h) + " ", h[x(1013)] = f0, r += x(908), f && (r += x(1843) + y + ") { ", m += "}"));
    }
    return f && (r += x(836) + m + " if (" + g + x(1004)), r;
  }), nt;
}
var st, Yr;
function To() {
  return Yr || (Yr = 1, st = function(e, t, a) {
    const x = B;
    var r = " ", s = e[x(1304)], o = e[x(1005)], c = e[x(727)][t], d = e[x(791)] + e[x(2545)].getProperty(t), u = e[x(578)] + "/" + t, f = !e[x(2244)].allErrors, l = x(726) + (o || ""), g = "valid" + s, h = e[x(2244)][x(2597)] && c && c.$data;
    h && (r += x(678) + s + " = " + e[x(2545)][x(2454)](c[x(2597)], o, e[x(2660)]) + "; ");
    var m = "i" + s, y = x(727) + s;
    !h && (r += " var " + y + x(640) + d + ";"), r += x(909) + g + ";", h && (r += x(550) + s + x(2308) + g + x(2370) + s + x(2047) + g + x(1159)), r += "" + g + x(1317) + m + "=0; " + m + "<" + y + ".length; " + m + x(1336) + l + ", " + y + "[" + m + x(2107) + g + x(782), h && (r += "  }  "), r += " if (!" + g + x(1053);
    var w = w || [];
    w.push(r), r = "", e[x(573)] !== !1 ? (r += " { keyword: 'enum" + x(1035) + e[x(1105)] + x(2166) + e[x(2545)][x(1891)](u) + x(1740) + s + x(2274), e[x(2244)][x(1064)] !== !1 && (r += x(1755)), e[x(2244)].verbose && (r += " , schema: validate.schema" + d + " , parentSchema: validate.schema" + e[x(791)] + x(2701) + l + " "), r += x(2274)) : r += " {} ";
    var S = r;
    return r = w[x(2087)](), !e[x(2521)] && f ? e[x(1721)] ? r += " throw new ValidationError([" + S + x(2477) : r += " validate.errors = [" + S + "]; return false; " : r += x(1327) + S + ";  if (vErrors === null) vErrors = [err]; else vErrors.push(err); errors++; ", r += " }", f && (r += x(1293)), r;
  }), st;
}
var it, Xr;
function Do() {
  return Xr || (Xr = 1, it = function(e, t, a) {
    const x = B;
    var r = " ", s = e.level, o = e.dataLevel, c = e.schema[t], d = e[x(791)] + e.util[x(1911)](t), u = e[x(578)] + "/" + t, f = !e[x(2244)][x(837)], l = x(726) + (o || "");
    if (e[x(2244)][x(822)] === !1) return f && (r += " if (true) { "), r;
    var g = e[x(2244)][x(2597)] && c && c.$data, h;
    g ? (r += x(678) + s + x(1165) + e[x(2545)][x(2454)](c[x(2597)], o, e[x(2660)]) + "; ", h = x(727) + s) : h = c;
    var m = e[x(2244)][x(927)], y = Array[x(2344)](m);
    if (g) {
      var w = "format" + s, S = x(1467) + s, R = x(2417) + s;
      r += " var " + w + x(704) + h + "]; var " + S + x(2702) + w + x(2151) + w + " instanceof RegExp) && " + w + ".validate; var " + R + x(1165) + S + x(637) + w + x(2716) + S + x(1330), e.async && (r += x(1240) + s + " = " + w + x(1464)), r += " " + w + x(1165) + w + ".validate; } if (  ", g && (r += " (" + h + x(2407) + h + x(2229)), r += " (", m != x(2582) && (r += " (" + h + x(1847) + w + " ", y && (r += " && self._opts.unknownFormats.indexOf(" + h + x(905)), r += x(1203)), r += " (" + w + x(637) + R + " == '" + a + x(2524) + w + x(2109), e.async ? r += x(2051) + s + x(2146) + w + "(" + l + x(644) + w + "(" + l + ")) " : r += " " + w + "(" + l + ") ", r += x(1237) + w + x(1444) + l + x(679);
    } else {
      var w = e.formats[c];
      if (!w) {
        if (m == x(2582)) return e[x(1077)].warn(x(1432) + c + x(999) + e[x(578)] + '"'), f && (r += " if (true) { "), r;
        if (y && m[x(2170)](c) >= 0) return f && (r += x(2110)), r;
        throw new Error(x(1432) + c + x(2551) + e[x(578)] + '"');
      }
      var S = typeof w == x(2437) && !(w instanceof RegExp) && w.validate, R = S && w[x(2426)] || x(923);
      if (S) {
        var A = w[x(1721)] === !0;
        w = w[x(2481)];
      }
      if (R != a) return f && (r += " if (true) { "), r;
      if (A) {
        if (!e.async) throw new Error(x(1339));
        var C = x(1285) + e.util[x(1911)](c) + x(1774);
        r += " if (!(await " + C + "(" + l + x(2482);
      } else {
        r += x(1723);
        var C = x(1285) + e.util.getProperty(c);
        S && (C += x(1774)), typeof w == "function" ? r += " " + C + "(" + l + ") " : r += " " + C + ".test(" + l + ") ", r += ") { ";
      }
    }
    var P = P || [];
    P.push(r), r = "", e[x(573)] !== !1 ? (r += x(1250) + x(822) + x(1035) + e[x(1105)] + x(2166) + e[x(2545)][x(1891)](u) + x(1898), g ? r += "" + h : r += "" + e[x(2545)][x(1891)](c), r += x(1742), e[x(2244)][x(1064)] !== !1 && (r += x(723), g ? r += x(2734) + h + x(770) : r += "" + e.util[x(1086)](c), r += x(2387)), e.opts[x(1188)] && (r += " , schema:  ", g ? r += x(1191) + d : r += "" + e[x(2545)][x(1891)](c), r += x(1595) + e.schemaPath + x(2701) + l + " "), r += x(2274)) : r += x(1494);
    var E = r;
    return r = P[x(2087)](), !e[x(2521)] && f ? e[x(1721)] ? r += x(1585) + E + x(2477) : r += " validate.errors = [" + E + x(682) : r += x(1327) + E + x(518), r += x(2274), f && (r += x(1293)), r;
  }), it;
}
var ot, _r;
function jo() {
  return _r || (_r = 1, ot = function(e, t, a) {
    const x = B;
    var r = " ", s = e.level, o = e.dataLevel, c = e[x(727)][t], d = e[x(791)] + e[x(2545)][x(1911)](t), u = e[x(578)] + "/" + t, f = !e.opts[x(837)], l = x(726) + (o || ""), g = "valid" + s, h = x(970) + s, m = e[x(2545)][x(2456)](e);
    m[x(1304)]++;
    var y = x(1954) + m[x(1304)], w = e[x(727)].then, S = e[x(727)][x(2553)], R = w !== void 0 && (e[x(2244)][x(1380)] ? typeof w == "object" && Object[x(2278)](w)[x(1200)] > 0 || w === !1 : e[x(2545)].schemaHasRules(w, e.RULES.all)), A = S !== void 0 && (e.opts[x(1380)] ? typeof S == "object" && Object[x(2278)](S)[x(1200)] > 0 || S === !1 : e[x(2545)][x(2547)](S, e.RULES[x(1135)])), C = m[x(1013)];
    if (R || A) {
      var P;
      m[x(573)] = !1, m[x(727)] = c, m[x(791)] = d, m[x(578)] = u, r += x(838) + h + x(1260) + g + x(2430);
      var E = e.compositeRule;
      e[x(2521)] = m[x(2521)] = !0, r += "  " + e.validate(m) + " ", m.baseId = C, m.createErrors = !0, r += "  errors = " + h + "; if (vErrors !== null) { if (" + h + x(2525) + h + x(2655), e[x(2521)] = m[x(2521)] = E, R ? (r += x(1843) + y + x(1091), m[x(727)] = e[x(727)][x(1413)], m[x(791)] = e.schemaPath + x(1856), m.errSchemaPath = e[x(578)] + "/then", r += "  " + e[x(2481)](m) + " ", m[x(1013)] = C, r += " " + g + " = " + y + "; ", R && A ? (P = x(2504) + s, r += " var " + P + x(2247)) : P = x(2202), r += " } ", A && (r += " else { ")) : r += x(1788) + y + ") { ", A && (m.schema = e[x(727)][x(2553)], m[x(791)] = e[x(791)] + x(833), m[x(578)] = e[x(578)] + "/else", r += "  " + e[x(2481)](m) + " ", m[x(1013)] = C, r += " " + g + x(1165) + y + "; ", R && A ? (P = x(2504) + s, r += " var " + P + x(1606)) : P = x(2084), r += x(2274)), r += " if (!" + g + ") {   var err =   ", e[x(573)] !== !1 ? (r += " { keyword: 'if" + x(1035) + e.errorPath + " , schemaPath: " + e[x(2545)].toQuotedString(u) + " , params: { failingKeyword: " + P + " } ", e[x(2244)][x(1064)] !== !1 && (r += ` , message: 'should match "' + ` + P + x(2723)), e[x(2244)][x(1188)] && (r += x(2361) + d + x(1787) + e[x(791)] + x(2701) + l + " "), r += x(2274)) : r += x(1494), r += ";  if (vErrors === null) vErrors = [err]; else vErrors.push(err); errors++; ", !e[x(2521)] && f && (e.async ? r += x(2080) : r += x(805)), r += " }   ", f && (r += " else { ");
    } else f && (r += " if (true) { ");
    return r;
  }), ot;
}
var ct, xa;
function Mo() {
  return xa || (xa = 1, ct = function(e, t, a) {
    const x = B;
    var r = " ", s = e[x(1304)], o = e.dataLevel, c = e[x(727)][t], d = e[x(791)] + e[x(2545)][x(1911)](t), u = e[x(578)] + "/" + t, f = !e.opts[x(837)], l = x(726) + (o || ""), g = "valid" + s, h = x(970) + s, m = e[x(2545)][x(2456)](e), y = "";
    m[x(1304)]++;
    var w = x(1954) + m[x(1304)], S = "i" + s, R = m.dataLevel = e.dataLevel + 1, A = "data" + R, C = e[x(1013)];
    if (r += x(909) + h + x(612) + g + ";", Array[x(2344)](c)) {
      var P = e[x(727)][x(1138)];
      if (P === !1) {
        r += " " + g + x(1165) + l + ".length <= " + c[x(1200)] + "; ";
        var E = u;
        u = e.errSchemaPath + x(1067), r += "  if (!" + g + x(1053);
        var D = D || [];
        D.push(r), r = "", e.createErrors !== !1 ? (r += x(1250) + x(1138) + x(1035) + e[x(1105)] + x(2166) + e[x(2545)].toQuotedString(u) + " , params: { limit: " + c[x(1200)] + x(2274), e.opts.messages !== !1 && (r += x(1845) + c[x(1200)] + x(1069)), e.opts[x(1188)] && (r += x(521) + e[x(791)] + x(2701) + l + " "), r += x(2274)) : r += x(1494);
        var j = r;
        r = D[x(2087)](), !e[x(2521)] && f ? e[x(1721)] ? r += x(1585) + j + x(2477) : r += x(2128) + j + x(682) : r += x(1327) + j + ";  if (vErrors === null) vErrors = [err]; else vErrors.push(err); errors++; ", r += x(2274), u = E, f && (y += "}", r += x(1293));
      }
      var M = c;
      if (M) {
        for (var F, N = -1, U = M.length - 1; N < U; )
          if (F = M[N += 1], e[x(2244)].strictKeywords ? typeof F == x(2437) && Object.keys(F)[x(1200)] > 0 || F === !1 : e[x(2545)][x(2547)](F, e[x(523)][x(1135)])) {
            r += " " + w + x(601) + l + x(560) + N + x(1330);
            var $ = l + "[" + N + "]";
            m[x(727)] = F, m[x(791)] = d + "[" + N + "]", m.errSchemaPath = u + "/" + N, m.errorPath = e[x(2545)][x(2020)](e[x(1105)], N, e[x(2244)].jsonPointers, !0), m[x(2660)][R] = N;
            var V = e[x(2481)](m);
            m[x(1013)] = C, e[x(2545)][x(1896)](V, A) < 2 ? r += " " + e[x(2545)][x(811)](V, A, $) + " " : r += x(838) + A + x(1165) + $ + "; " + V + " ", r += " }  ", f && (r += x(1843) + w + x(1330), y += "}");
          }
      }
      if (typeof P == x(2437) && (e.opts[x(1380)] ? typeof P == "object" && Object[x(2278)](P)[x(1200)] > 0 || P === !1 : e.util[x(2547)](P, e[x(523)][x(1135)]))) {
        m[x(727)] = P, m[x(791)] = e[x(791)] + x(549), m[x(578)] = e[x(578)] + x(1067), r += " " + w + " = true; if (" + l + x(560) + c[x(1200)] + x(1687) + S + x(1165) + c[x(1200)] + "; " + S + x(2706) + l + x(911) + S + x(754), m[x(1105)] = e.util[x(2020)](e.errorPath, S, e[x(2244)][x(1440)], !0);
        var $ = l + "[" + S + "]";
        m[x(2660)][R] = S;
        var V = e[x(2481)](m);
        m[x(1013)] = C, e.util[x(1896)](V, A) < 2 ? r += " " + e[x(2545)][x(811)](V, A, $) + " " : r += " var " + A + x(1165) + $ + "; " + V + " ", f && (r += " if (!" + w + ") break; "), r += x(1231), f && (r += x(1843) + w + x(1330), y += "}");
      }
    } else if (e[x(2244)][x(1380)] ? typeof c == "object" && Object[x(2278)](c)[x(1200)] > 0 || c === !1 : e.util[x(2547)](c, e[x(523)].all)) {
      m[x(727)] = c, m[x(791)] = d, m[x(578)] = u, r += "  for (var " + S + " = 0; " + S + " < " + l + x(911) + S + x(754), m[x(1105)] = e[x(2545)][x(2020)](e.errorPath, S, e[x(2244)][x(1440)], !0);
      var $ = l + "[" + S + "]";
      m[x(2660)][R] = S;
      var V = e.validate(m);
      m[x(1013)] = C, e.util[x(1896)](V, A) < 2 ? r += " " + e[x(2545)].varReplace(V, A, $) + " " : r += x(838) + A + " = " + $ + "; " + V + " ", f && (r += x(1788) + w + x(1051)), r += " }";
    }
    return f && (r += " " + y + " if (" + h + x(1004)), r;
  }), ct;
}
var dt, ea;
function ta() {
  return ea || (ea = 1, dt = function(e, t, a) {
    const x = B;
    var r = " ", s = e[x(1304)], o = e[x(1005)], c = e.schema[t], d = e.schemaPath + e[x(2545)][x(1911)](t), u = e[x(578)] + "/" + t, f = !e[x(2244)].allErrors, C, l = x(726) + (o || ""), g = e[x(2244)][x(2597)] && c && c[x(2597)], h;
    g ? (r += " var schema" + s + x(1165) + e[x(2545)][x(2454)](c.$data, o, e.dataPathArr) + "; ", h = "schema" + s) : h = c;
    var m = t == x(756), y = m ? x(2625) : "exclusiveMinimum", w = e.schema[y], S = e.opts[x(2597)] && w && w[x(2597)], R = m ? "<" : ">", A = m ? ">" : "<", C = void 0;
    if (!(g || typeof c == x(2074) || c === void 0)) throw new Error(t + " must be number");
    if (!(S || w === void 0 || typeof w == x(2074) || typeof w == x(958))) throw new Error(y + " must be number or boolean");
    if (S) {
      var P = e[x(2545)][x(2454)](w[x(2597)], o, e[x(2660)]), E = x(716) + s, D = x(919) + s, j = x(1653) + s, M = "op" + s, F = "' + " + M + " + '";
      r += x(2618) + s + x(1165) + P + "; ", P = "schemaExcl" + s, r += x(838) + E + "; var " + D + x(2702) + P + x(563) + D + " != 'boolean' && " + D + x(511) + D + " != 'number') { ";
      var C = y, N = N || [];
      N[x(818)](r), r = "", e[x(573)] !== !1 ? (r += x(1250) + (C || x(2149)) + "' , dataPath: (dataPath || '') + " + e.errorPath + x(2166) + e[x(2545)][x(1891)](u) + " , params: {} ", e[x(2244)].messages !== !1 && (r += x(948) + y + x(2608)), e[x(2244)].verbose && (r += " , schema: validate.schema" + d + " , parentSchema: validate.schema" + e[x(791)] + " , data: " + l + " "), r += x(2274)) : r += " {} ";
      var U = r;
      r = N[x(2087)](), !e.compositeRule && f ? e[x(1721)] ? r += " throw new ValidationError([" + U + x(2477) : r += x(2128) + U + x(682) : r += " var err = " + U + x(518), r += x(2475), g && (r += " (" + h + x(2407) + h + x(2313)), r += " " + D + " == 'number' ? ( (" + E + " = " + h + " === undefined || " + P + " " + R + "= " + h + x(901) + l + " " + A + "= " + P + x(1237) + l + " " + A + " " + h + " ) : ( (" + E + x(1165) + P + " === true) ? " + l + " " + A + "= " + h + x(1237) + l + " " + A + " " + h + x(957) + l + " !== " + l + ") { var op" + s + x(1165) + E + x(2665) + R + "' : '" + R + "='; ", c === void 0 && (C = y, u = e[x(578)] + "/" + y, h = P, g = S);
    } else {
      var j = typeof w == x(2074), F = R;
      if (j && g) {
        var M = "'" + F + "'";
        r += x(2632), g && (r += " (" + h + x(2407) + h + " != 'number') || "), r += x(2733) + h + x(728) + w + " " + R + "= " + h + x(1487) + l + " " + A + "= " + w + x(1237) + l + " " + A + " " + h + x(957) + l + x(1198) + l + x(1330);
      } else {
        j && c === void 0 ? (E = !0, C = y, u = e[x(578)] + "/" + y, h = w, A += "=") : (j && (h = Math[x(m ? 606 : 599)](w, c)), w === (j ? h : !0) ? (E = !0, C = y, u = e[x(578)] + "/" + y, A += "=") : (E = !1, F += "="));
        var M = "'" + F + "'";
        r += x(2632), g && (r += " (" + h + " !== undefined && typeof " + h + x(2313)), r += " " + l + " " + A + " " + h + x(1689) + l + " !== " + l + x(1330);
      }
    }
    C = C || t;
    var N = N || [];
    N[x(818)](r), r = "", e[x(573)] !== !1 ? (r += " { keyword: '" + (C || "_limit") + x(1035) + e[x(1105)] + x(2166) + e[x(2545)][x(1891)](u) + x(2678) + M + ", limit: " + h + x(1267) + E + x(2274), e[x(2244)].messages !== !1 && (r += x(2167) + F + " ", g ? r += x(2734) + h : r += "" + h + "'"), e.opts[x(1188)] && (r += " , schema:  ", g ? r += "validate.schema" + d : r += "" + c, r += x(1595) + e[x(791)] + x(2701) + l + " "), r += x(2274)) : r += x(1494);
    var U = r;
    return r = N.pop(), !e.compositeRule && f ? e[x(1721)] ? r += x(1585) + U + x(2477) : r += x(2128) + U + x(682) : r += x(1327) + U + ";  if (vErrors === null) vErrors = [err]; else vErrors.push(err); errors++; ", r += x(2274), f && (r += x(1293)), r;
  }), dt;
}
var ut, ra;
function aa() {
  return ra || (ra = 1, ut = function(e, t, a) {
    const x = B;
    var r = " ", s = e.level, o = e[x(1005)], c = e[x(727)][t], d = e[x(791)] + e[x(2545)][x(1911)](t), u = e[x(578)] + "/" + t, f = !e[x(2244)][x(837)], y, l = x(726) + (o || ""), g = e[x(2244)].$data && c && c.$data, h;
    if (g ? (r += x(678) + s + x(1165) + e[x(2545)][x(2454)](c[x(2597)], o, e[x(2660)]) + "; ", h = x(727) + s) : h = c, !(g || typeof c == "number")) throw new Error(t + x(1057));
    var m = t == x(1648) ? ">" : "<";
    r += x(1113), g && (r += " (" + h + x(2407) + h + x(2313)), r += " " + l + x(1284) + m + " " + h + ") { ";
    var y = t, w = w || [];
    w[x(818)](r), r = "", e[x(573)] !== !1 ? (r += x(1250) + (y || x(1541)) + x(1035) + e.errorPath + x(2166) + e[x(2545)][x(1891)](u) + x(2136) + h + x(2274), e[x(2244)][x(1064)] !== !1 && (r += x(698), t == x(1648) ? r += x(2195) : r += x(1902), r += x(860), g ? r += x(2734) + h + x(770) : r += "" + c, r += " items' "), e[x(2244)].verbose && (r += x(1592), g ? r += x(1191) + d : r += "" + c, r += x(1595) + e[x(791)] + " , data: " + l + " "), r += x(2274)) : r += x(1494);
    var S = r;
    return r = w[x(2087)](), !e.compositeRule && f ? e[x(1721)] ? r += " throw new ValidationError([" + S + x(2477) : r += x(2128) + S + x(682) : r += x(1327) + S + x(518), r += "} ", f && (r += " else { "), r;
  }), ut;
}
var ft, na;
function sa() {
  return na || (na = 1, ft = function(e, t, a) {
    const x = B;
    var r = " ", s = e.level, o = e.dataLevel, c = e[x(727)][t], d = e[x(791)] + e[x(2545)].getProperty(t), u = e[x(578)] + "/" + t, f = !e[x(2244)][x(837)], y, l = x(726) + (o || ""), g = e[x(2244)][x(2597)] && c && c[x(2597)], h;
    if (g ? (r += x(678) + s + x(1165) + e.util[x(2454)](c[x(2597)], o, e.dataPathArr) + "; ", h = "schema" + s) : h = c, !(g || typeof c == x(2074))) throw new Error(t + x(1057));
    var m = t == x(2692) ? ">" : "<";
    r += x(1113), g && (r += " (" + h + x(2407) + h + x(2313)), e[x(2244)][x(2455)] === !1 ? r += " " + l + x(1284) : r += x(1027) + l + ") ", r += " " + m + " " + h + x(1330);
    var y = t, w = w || [];
    w[x(818)](r), r = "", e[x(573)] !== !1 ? (r += x(1250) + (y || x(2283)) + x(1035) + e[x(1105)] + x(2166) + e[x(2545)][x(1891)](u) + x(2136) + h + x(2274), e.opts[x(1064)] !== !1 && (r += x(503), t == x(2692) ? r += "longer" : r += x(1469), r += x(860), g ? r += x(2734) + h + x(770) : r += "" + c, r += x(1846)), e[x(2244)][x(1188)] && (r += x(1592), g ? r += x(1191) + d : r += "" + c, r += x(1595) + e[x(791)] + x(2701) + l + " "), r += x(2274)) : r += x(1494);
    var S = r;
    return r = w[x(2087)](), !e.compositeRule && f ? e[x(1721)] ? r += x(1585) + S + x(2477) : r += x(2128) + S + x(682) : r += " var err = " + S + x(518), r += "} ", f && (r += " else { "), r;
  }), ft;
}
var lt, ia;
function oa() {
  return ia || (ia = 1, lt = function(e, t, a) {
    const x = B;
    var r = " ", s = e[x(1304)], o = e[x(1005)], c = e.schema[t], d = e[x(791)] + e[x(2545)].getProperty(t), u = e.errSchemaPath + "/" + t, f = !e.opts[x(837)], y, l = "data" + (o || ""), g = e[x(2244)][x(2597)] && c && c[x(2597)], h;
    if (g ? (r += x(678) + s + x(1165) + e[x(2545)][x(2454)](c[x(2597)], o, e[x(2660)]) + "; ", h = x(727) + s) : h = c, !(g || typeof c == "number")) throw new Error(t + " must be number");
    var m = t == x(575) ? ">" : "<";
    r += "if ( ", g && (r += " (" + h + x(2407) + h + x(2313)), r += x(2280) + l + x(2006) + m + " " + h + x(1330);
    var y = t, w = w || [];
    w[x(818)](r), r = "", e[x(573)] !== !1 ? (r += " { keyword: '" + (y || x(1971)) + x(1035) + e[x(1105)] + x(2166) + e[x(2545)][x(1891)](u) + " , params: { limit: " + h + x(2274), e.opts[x(1064)] !== !1 && (r += x(698), t == "maxProperties" ? r += x(2195) : r += "fewer", r += x(860), g ? r += "' + " + h + " + '" : r += "" + c, r += x(1729)), e[x(2244)][x(1188)] && (r += x(1592), g ? r += x(1191) + d : r += "" + c, r += x(1595) + e.schemaPath + x(2701) + l + " "), r += x(2274)) : r += " {} ";
    var S = r;
    return r = w[x(2087)](), !e[x(2521)] && f ? e[x(1721)] ? r += x(1585) + S + x(2477) : r += x(2128) + S + "]; return false; " : r += x(1327) + S + x(518), r += "} ", f && (r += x(1293)), r;
  }), lt;
}
var ht, ca;
function Lo() {
  return ca || (ca = 1, ht = function(e, t, a) {
    const x = B;
    var r = " ", s = e[x(1304)], o = e[x(1005)], c = e[x(727)][t], d = e[x(791)] + e.util[x(1911)](t), u = e.errSchemaPath + "/" + t, f = !e[x(2244)][x(837)], l = x(726) + (o || ""), g = e[x(2244)][x(2597)] && c && c[x(2597)], h;
    if (g ? (r += x(678) + s + x(1165) + e[x(2545)][x(2454)](c.$data, o, e[x(2660)]) + "; ", h = x(727) + s) : h = c, !(g || typeof c == x(2074))) throw new Error(t + x(1057));
    r += "var division" + s + ";if (", g && (r += " " + h + x(1017) + h + " != 'number' || "), r += " (division" + s + " = " + l + x(767) + h + ", ", e[x(2244)].multipleOfPrecision ? r += " Math.abs(Math.round(division" + s + ") - division" + s + ") > 1e-" + e[x(2244)].multipleOfPrecision + " " : r += x(1547) + s + x(877) + s + ") ", r += x(1953), g && (r += x(1679)), r += " ) {   ";
    var m = m || [];
    m[x(818)](r), r = "", e[x(573)] !== !1 ? (r += x(1250) + x(500) + x(1035) + e[x(1105)] + x(2166) + e[x(2545)][x(1891)](u) + " , params: { multipleOf: " + h + x(2274), e[x(2244)][x(1064)] !== !1 && (r += " , message: 'should be multiple of ", g ? r += x(2734) + h : r += "" + h + "'"), e[x(2244)][x(1188)] && (r += " , schema:  ", g ? r += x(1191) + d : r += "" + c, r += "         , parentSchema: validate.schema" + e[x(791)] + x(2701) + l + " "), r += x(2274)) : r += x(1494);
    var y = r;
    return r = m[x(2087)](), !e[x(2521)] && f ? e[x(1721)] ? r += x(1585) + y + x(2477) : r += x(2128) + y + x(682) : r += " var err = " + y + x(518), r += "} ", f && (r += x(1293)), r;
  }), ht;
}
var pt, da;
function $o() {
  return da || (da = 1, pt = function(e, t, a) {
    const x = B;
    var r = " ", s = e[x(1304)], o = e.dataLevel, c = e[x(727)][t], d = e[x(791)] + e[x(2545)][x(1911)](t), u = e[x(578)] + "/" + t, f = !e[x(2244)][x(837)], l = x(726) + (o || ""), g = "errs__" + s, h = e.util[x(2456)](e);
    h.level++;
    var m = x(1954) + h.level;
    if (e[x(2244)][x(1380)] ? typeof c == x(2437) && Object[x(2278)](c)[x(1200)] > 0 || c === !1 : e[x(2545)][x(2547)](c, e[x(523)].all)) {
      h[x(727)] = c, h[x(791)] = d, h[x(578)] = u, r += x(838) + g + x(2566);
      var y = e[x(2521)];
      e[x(2521)] = h[x(2521)] = !0, h[x(573)] = !1;
      var w;
      h[x(2244)][x(837)] && (w = h.opts[x(837)], h[x(2244)][x(837)] = !1), r += " " + e[x(2481)](h) + " ", h.createErrors = !0, w && (h.opts.allErrors = w), e[x(2521)] = h.compositeRule = y, r += x(1843) + m + ") {   ";
      var S = S || [];
      S[x(818)](r), r = "", e[x(573)] !== !1 ? (r += x(1250) + x(2645) + x(1035) + e.errorPath + " , schemaPath: " + e.util[x(1891)](u) + " , params: {} ", e[x(2244)].messages !== !1 && (r += " , message: 'should NOT be valid' "), e[x(2244)][x(1188)] && (r += x(2361) + d + x(1787) + e[x(791)] + x(2701) + l + " "), r += x(2274)) : r += x(1494);
      var R = r;
      r = S[x(2087)](), !e[x(2521)] && f ? e[x(1721)] ? r += x(1585) + R + x(2477) : r += x(2128) + R + x(682) : r += x(1327) + R + ";  if (vErrors === null) vErrors = [err]; else vErrors.push(err); errors++; ", r += " } else {  errors = " + g + "; if (vErrors !== null) { if (" + g + x(2525) + g + "; else vErrors = null; } ", e[x(2244)][x(837)] && (r += x(2274));
    } else r += "  var err =   ", e[x(573)] !== !1 ? (r += x(1250) + x(2645) + x(1035) + e.errorPath + x(2166) + e[x(2545)][x(1891)](u) + x(2243), e[x(2244)][x(1064)] !== !1 && (r += " , message: 'should NOT be valid' "), e[x(2244)][x(1188)] && (r += x(2361) + d + " , parentSchema: validate.schema" + e[x(791)] + " , data: " + l + " "), r += " } ") : r += " {} ", r += x(518), f && (r += x(1746));
    return r;
  }), pt;
}
var mt, ua;
function zo() {
  return ua || (ua = 1, mt = function(e, t, a) {
    const x = B;
    var r = " ", s = e[x(1304)], o = e[x(1005)], c = e.schema[t], d = e[x(791)] + e[x(2545)].getProperty(t), u = e[x(578)] + "/" + t, f = !e[x(2244)].allErrors, l = x(726) + (o || ""), g = x(1954) + s, h = x(970) + s, m = e[x(2545)][x(2456)](e), y = "";
    m[x(1304)]++;
    var w = x(1954) + m.level, S = m.baseId, R = x(2358) + s, A = x(1501) + s;
    r += x(909) + h + " = errors , " + R + " = false , " + g + x(1471) + A + " = null; ";
    var C = e[x(2521)];
    e.compositeRule = m[x(2521)] = !0;
    var P = c;
    if (P)
      for (var E, D = -1, j = P[x(1200)] - 1; D < j; )
        E = P[D += 1], (e[x(2244)][x(1380)] ? typeof E == "object" && Object.keys(E)[x(1200)] > 0 || E === !1 : e[x(2545)].schemaHasRules(E, e[x(523)][x(1135)])) ? (m[x(727)] = E, m[x(791)] = d + "[" + D + "]", m.errSchemaPath = u + "/" + D, r += "  " + e.validate(m) + " ", m[x(1013)] = S) : r += x(838) + w + x(2483), D && (r += x(1843) + w + x(637) + R + x(1330) + g + x(921) + A + x(1874) + A + ", " + D + "]; } else { ", y += "}"), r += x(1843) + w + x(1330) + g + x(1165) + R + x(2483) + A + x(1165) + D + x(742);
    return e[x(2521)] = m.compositeRule = C, r += "" + y + x(1436) + g + x(2363), e[x(573)] !== !1 ? (r += x(1250) + x(2141) + x(1035) + e[x(1105)] + x(2166) + e[x(2545)].toQuotedString(u) + " , params: { passingSchemas: " + A + x(2274), e.opts.messages !== !1 && (r += " , message: 'should match exactly one schema in oneOf' "), e.opts[x(1188)] && (r += x(2361) + d + x(1787) + e[x(791)] + x(2701) + l + " "), r += x(2274)) : r += x(1494), r += x(518), !e[x(2521)] && f && (e[x(1721)] ? r += " throw new ValidationError(vErrors); " : r += x(805)), r += x(1394) + h + x(1095) + h + x(2525) + h + x(1876), e.opts[x(837)] && (r += x(2274)), r;
  }), mt;
}
var gt, fa;
function Ho() {
  return fa || (fa = 1, gt = function(e, t, a) {
    const x = B;
    var r = " ", s = e.level, o = e[x(1005)], c = e.schema[t], d = e[x(791)] + e[x(2545)][x(1911)](t), u = e[x(578)] + "/" + t, f = !e[x(2244)].allErrors, l = x(726) + (o || ""), g = e[x(2244)].$data && c && c[x(2597)], h;
    g ? (r += x(678) + s + " = " + e[x(2545)][x(2454)](c[x(2597)], o, e.dataPathArr) + "; ", h = "schema" + s) : h = c;
    var m = g ? x(1887) + h + "))" : e[x(593)](c);
    r += x(1113), g && (r += " (" + h + x(2407) + h + " != 'string') || "), r += " !" + m + x(1444) + l + x(1758);
    var y = y || [];
    y[x(818)](r), r = "", e[x(573)] !== !1 ? (r += x(1250) + "pattern" + x(1035) + e[x(1105)] + x(2166) + e.util[x(1891)](u) + x(2016), g ? r += "" + h : r += "" + e[x(2545)][x(1891)](c), r += "  } ", e[x(2244)][x(1064)] !== !1 && (r += x(1201), g ? r += x(2734) + h + x(770) : r += "" + e[x(2545)].escapeQuotes(c), r += x(2387)), e.opts[x(1188)] && (r += x(1592), g ? r += x(1191) + d : r += "" + e.util[x(1891)](c), r += x(1595) + e.schemaPath + x(2701) + l + " "), r += x(2274)) : r += x(1494);
    var w = r;
    return r = y.pop(), !e[x(2521)] && f ? e[x(1721)] ? r += x(1585) + w + x(2477) : r += x(2128) + w + x(682) : r += x(1327) + w + x(518), r += "} ", f && (r += x(1293)), r;
  }), gt;
}
var vt, la;
function Uo() {
  return la || (la = 1, vt = function(e, t, a) {
    const x = B;
    var r = " ", s = e[x(1304)], o = e[x(1005)], c = e.schema[t], d = e[x(791)] + e[x(2545)][x(1911)](t), u = e.errSchemaPath + "/" + t, f = !e[x(2244)][x(837)], l = x(726) + (o || ""), g = "errs__" + s, h = e.util[x(2456)](e), m = "";
    h.level++;
    var y = x(1954) + h[x(1304)], w = "key" + s, S = "idx" + s, R = h[x(1005)] = e[x(1005)] + 1, A = x(726) + R, C = x(2490) + s, P = Object[x(2278)](c || {})[x(893)](u0), E = e[x(727)][x(2622)] || {}, D = Object[x(2278)](E)[x(893)](u0), j = e[x(727)][x(2273)], M = P[x(1200)] || D[x(1200)], F = j === !1, N = typeof j == x(2437) && Object[x(2278)](j)[x(1200)], U = e[x(2244)][x(1435)], $ = F || N || U, V = e.opts[x(859)], J = e.baseId, s0 = e[x(727)].required;
    if (s0 && !(e.opts[x(2597)] && s0.$data) && s0[x(1200)] < e[x(2244)].loopRequired) var o0 = e.util[x(797)](s0);
    function u0(Le) {
      return Le !== x(769);
    }
    if (r += "var " + g + x(612) + y + x(2327), V && (r += x(838) + C + " = undefined;"), $) {
      if (V ? r += " " + C + x(1165) + C + " || Object.keys(" + l + x(1590) + S + "=0; " + S + "<" + C + x(911) + S + "++) { var " + w + x(1165) + C + "[" + S + x(2536) : r += x(2493) + w + x(1192) + l + x(1330), M) {
        if (r += x(524) + s + " = !(false ", P.length)
          if (P.length > 8) r += x(784) + d + ".hasOwnProperty(" + w + ") ";
          else {
            var a0 = P;
            if (a0)
              for (var f0, w0 = -1, m0 = a0[x(1200)] - 1; w0 < m0; )
                f0 = a0[w0 += 1], r += x(1689) + w + x(1006) + e[x(2545)][x(1891)](f0) + " ";
          }
        if (D.length) {
          var D0 = D;
          if (D0)
            for (var E0, J0 = -1, T = D0.length - 1; J0 < T; )
              E0 = D0[J0 += 1], r += " || " + e.usePattern(E0) + x(1444) + w + ") ";
        }
        r += x(1553) + s + x(1330);
      }
      if (U == x(1135)) r += " delete " + l + "[" + w + "]; ";
      else {
        var q = e[x(1105)], L = "' + " + w + x(770);
        if (e[x(2244)][x(2474)] && (e.errorPath = e[x(2545)].getPathExpr(e[x(1105)], w, e[x(2244)][x(1440)])), F)
          if (U) r += x(2184) + l + "[" + w + x(2536);
          else {
            r += " " + y + x(921);
            var Q = u;
            u = e[x(578)] + x(2043);
            var G = G || [];
            G.push(r), r = "", e.createErrors !== !1 ? (r += x(1250) + x(2273) + x(1035) + e[x(1105)] + x(2166) + e.util[x(1891)](u) + " , params: { additionalProperty: '" + L + "' } ", e.opts.messages !== !1 && (r += x(948), e[x(2244)][x(2474)] ? r += x(1921) : r += x(1119), r += "' "), e[x(2244)][x(1188)] && (r += x(521) + e[x(791)] + x(2701) + l + " "), r += " } ") : r += x(1494);
            var Z = r;
            r = G[x(2087)](), !e[x(2521)] && f ? e[x(1721)] ? r += x(1585) + Z + x(2477) : r += x(2128) + Z + x(682) : r += x(1327) + Z + x(518), u = Q, f && (r += x(1226));
          }
        else if (N)
          if (U == "failing") {
            r += " var " + g + x(2566);
            var Y = e.compositeRule;
            e[x(2521)] = h[x(2521)] = !0, h.schema = j, h[x(791)] = e[x(791)] + ".additionalProperties", h[x(578)] = e.errSchemaPath + "/additionalProperties", h.errorPath = e.opts[x(2474)] ? e[x(1105)] : e[x(2545)][x(2020)](e.errorPath, w, e[x(2244)][x(1440)]);
            var n0 = l + "[" + w + "]";
            h.dataPathArr[R] = w;
            var i0 = e[x(2481)](h);
            h[x(1013)] = J, e[x(2545)].varOccurences(i0, A) < 2 ? r += " " + e[x(2545)][x(811)](i0, A, n0) + " " : r += x(838) + A + " = " + n0 + "; " + i0 + " ", r += x(1788) + y + x(1335) + g + x(547) + l + "[" + w + x(2403), e[x(2521)] = h[x(2521)] = Y;
          } else {
            h[x(727)] = j, h.schemaPath = e[x(791)] + x(1094), h.errSchemaPath = e.errSchemaPath + x(2043), h.errorPath = e[x(2244)][x(2474)] ? e[x(1105)] : e[x(2545)][x(2020)](e[x(1105)], w, e[x(2244)][x(1440)]);
            var n0 = l + "[" + w + "]";
            h[x(2660)][R] = w;
            var i0 = e[x(2481)](h);
            h.baseId = J, e[x(2545)][x(1896)](i0, A) < 2 ? r += " " + e[x(2545)][x(811)](i0, A, n0) + " " : r += x(838) + A + x(1165) + n0 + "; " + i0 + " ", f && (r += x(1788) + y + x(1051));
          }
        e[x(1105)] = q;
      }
      M && (r += x(2274)), r += " }  ", f && (r += x(1843) + y + x(1330), m += "}");
    }
    var x0 = e[x(2244)][x(794)] && !e[x(2521)];
    if (P.length) {
      var j0 = P;
      if (j0)
        for (var f0, q0 = -1, $0 = j0[x(1200)] - 1; q0 < $0; ) {
          f0 = j0[q0 += 1];
          var b0 = c[f0];
          if (e[x(2244)].strictKeywords ? typeof b0 == x(2437) && Object.keys(b0).length > 0 || b0 === !1 : e[x(2545)][x(2547)](b0, e[x(523)].all)) {
            var K0 = e.util.getProperty(f0), n0 = l + K0, sx = x0 && b0[x(1658)] !== void 0;
            h.schema = b0, h[x(791)] = d + K0, h[x(578)] = u + "/" + e[x(2545)][x(750)](f0), h[x(1105)] = e[x(2545)][x(1199)](e.errorPath, f0, e[x(2244)][x(1440)]), h[x(2660)][R] = e.util[x(1891)](f0);
            var i0 = e.validate(h);
            if (h[x(1013)] = J, e.util[x(1896)](i0, A) < 2) {
              i0 = e[x(2545)][x(811)](i0, A, n0);
              var Q0 = n0;
            } else {
              var Q0 = A;
              r += x(838) + A + x(1165) + n0 + "; ";
            }
            if (sx) r += " " + i0 + " ";
            else {
              if (o0 && o0[f0]) {
                r += " if ( " + Q0 + x(1478), V && (r += " || ! Object.prototype.hasOwnProperty.call(" + l + x(1254) + e[x(2545)][x(1086)](f0) + "') "), r += x(1330) + y + x(921);
                var q = e[x(1105)], Q = u, O0 = e[x(2545)][x(1086)](f0);
                e[x(2244)][x(2474)] && (e[x(1105)] = e[x(2545)][x(1199)](q, f0, e[x(2244)].jsonPointers)), u = e[x(578)] + x(705);
                var G = G || [];
                G[x(818)](r), r = "", e[x(573)] !== !1 ? (r += x(1250) + "required' , dataPath: (dataPath || '') + " + e.errorPath + x(2166) + e[x(2545)][x(1891)](u) + x(491) + O0 + x(1993), e.opts[x(1064)] !== !1 && (r += " , message: '", e[x(2244)]._errorDataPathProperty ? r += "is a required property" : r += x(1705) + O0 + "\\'", r += "' "), e[x(2244)][x(1188)] && (r += " , schema: validate.schema" + d + x(1787) + e[x(791)] + x(2701) + l + " "), r += x(2274)) : r += x(1494);
                var Z = r;
                r = G[x(2087)](), !e[x(2521)] && f ? e[x(1721)] ? r += x(1585) + Z + "]); " : r += " validate.errors = [" + Z + x(682) : r += x(1327) + Z + x(518), u = Q, e[x(1105)] = q, r += x(1955);
              } else f ? (r += x(2632) + Q0 + x(1478), V && (r += x(1797) + l + x(1254) + e[x(2545)].escapeQuotes(f0) + x(2610)), r += ") { " + y + x(1458)) : (r += x(1843) + Q0 + x(2529), V && (r += x(961) + l + x(1254) + e.util[x(1086)](f0) + x(2610)), r += x(1969));
              r += " " + i0 + x(2274);
            }
          }
          f && (r += x(1843) + y + x(1330), m += "}");
        }
    }
    if (D.length) {
      var z0 = D;
      if (z0)
        for (var E0, X0 = -1, Bx = z0[x(1200)] - 1; X0 < Bx; ) {
          E0 = z0[X0 += 1];
          var b0 = E[E0];
          if (e[x(2244)].strictKeywords ? typeof b0 == "object" && Object[x(2278)](b0).length > 0 || b0 === !1 : e[x(2545)][x(2547)](b0, e[x(523)][x(1135)])) {
            h[x(727)] = b0, h.schemaPath = e.schemaPath + ".patternProperties" + e[x(2545)][x(1911)](E0), h.errSchemaPath = e[x(578)] + x(2118) + e[x(2545)][x(750)](E0), V ? r += " " + C + x(1165) + C + " || Object.keys(" + l + x(1590) + S + "=0; " + S + "<" + C + x(911) + S + "++) { var " + w + x(1165) + C + "[" + S + x(2536) : r += x(2493) + w + x(1192) + l + ") { ", r += x(1843) + e[x(593)](E0) + ".test(" + w + x(1026), h[x(1105)] = e.util[x(2020)](e[x(1105)], w, e[x(2244)][x(1440)]);
            var n0 = l + "[" + w + "]";
            h[x(2660)][R] = w;
            var i0 = e[x(2481)](h);
            h[x(1013)] = J, e[x(2545)].varOccurences(i0, A) < 2 ? r += " " + e[x(2545)].varReplace(i0, A, n0) + " " : r += x(838) + A + x(1165) + n0 + "; " + i0 + " ", f && (r += x(1788) + y + x(1051)), r += x(2274), f && (r += x(2104) + y + x(2483)), r += x(908), f && (r += x(1843) + y + x(1330), m += "}");
          }
        }
    }
    return f && (r += " " + m + x(1843) + g + x(1004)), r;
  }), vt;
}
var yt, ha;
function Vo() {
  return ha || (ha = 1, yt = function(e, t, a) {
    const x = B;
    var r = " ", s = e.level, o = e[x(1005)], c = e.schema[t], d = e[x(791)] + e[x(2545)][x(1911)](t), u = e.errSchemaPath + "/" + t, f = !e[x(2244)][x(837)], l = x(726) + (o || ""), g = x(970) + s, h = e[x(2545)][x(2456)](e), m = "";
    h.level++;
    var y = x(1954) + h.level;
    if (r += x(909) + g + x(2609), e.opts.strictKeywords ? typeof c == x(2437) && Object.keys(c)[x(1200)] > 0 || c === !1 : e[x(2545)][x(2547)](c, e[x(523)][x(1135)])) {
      h[x(727)] = c, h.schemaPath = d, h[x(578)] = u;
      var w = x(1232) + s, S = "idx" + s, R = "i" + s, A = x(2734) + w + x(770), C = h[x(1005)] = e[x(1005)] + 1, P = x(726) + C, E = x(2490) + s, D = e.opts[x(859)], j = e[x(1013)];
      D && (r += " var " + E + x(873)), D ? r += " " + E + " = " + E + " || Object.keys(" + l + x(1590) + S + x(1576) + S + "<" + E + x(911) + S + x(2133) + w + x(1165) + E + "[" + S + x(2536) : r += x(2493) + w + x(1192) + l + ") { ", r += x(762) + s + " = errors; ";
      var M = w, F = e[x(2521)];
      e[x(2521)] = h.compositeRule = !0;
      var N = e[x(2481)](h);
      h[x(1013)] = j, e[x(2545)][x(1896)](N, P) < 2 ? r += " " + e.util[x(811)](N, P, M) + " " : r += x(838) + P + " = " + M + "; " + N + " ", e[x(2521)] = h[x(2521)] = F, r += x(1788) + y + x(1214) + R + x(924) + s + "; " + R + "<errors; " + R + "++) { vErrors[" + R + x(2019) + w + x(2740), e.createErrors !== !1 ? (r += x(1250) + x(1579) + x(1035) + e[x(1105)] + x(2166) + e[x(2545)][x(1891)](u) + x(1916) + A + x(1993), e.opts[x(1064)] !== !1 && (r += x(1383) + A + "\\' is invalid' "), e[x(2244)].verbose && (r += " , schema: validate.schema" + d + x(1787) + e[x(791)] + x(2701) + l + " "), r += x(2274)) : r += " {} ", r += x(518), !e[x(2521)] && f && (e[x(1721)] ? r += " throw new ValidationError(vErrors); " : r += x(805)), f && (r += " break; "), r += x(1168);
    }
    return f && (r += " " + m + " if (" + g + x(1004)), r;
  }), yt;
}
var bt, pa;
function Zo() {
  return pa || (pa = 1, bt = function(e, t, a) {
    const x = B;
    var r = " ", s = e[x(1304)], o = e[x(1005)], c = e[x(727)][t], d = e[x(791)] + e[x(2545)][x(1911)](t), u = e[x(578)] + "/" + t, f = !e[x(2244)][x(837)], l = "data" + (o || ""), g = x(1954) + s, h = e[x(2244)][x(2597)] && c && c[x(2597)];
    h && (r += x(678) + s + " = " + e[x(2545)][x(2454)](c[x(2597)], o, e[x(2660)]) + "; ");
    var m = x(727) + s;
    if (!h)
      if (c[x(1200)] < e.opts[x(2402)] && e.schema.properties && Object[x(2278)](e[x(727)][x(2372)])[x(1200)]) {
        var C = [], y = c;
        if (y)
          for (var w, S = -1, R = y.length - 1; S < R; ) {
            w = y[S += 1];
            var A = e[x(727)].properties[w];
            !(A && (e.opts[x(1380)] ? typeof A == x(2437) && Object[x(2278)](A)[x(1200)] > 0 || A === !1 : e[x(2545)].schemaHasRules(A, e[x(523)][x(1135)]))) && (C[C[x(1200)]] = w);
          }
      } else var C = c;
    if (h || C.length) {
      var P = e[x(1105)], E = h || C[x(1200)] >= e[x(2244)][x(2402)], D = e[x(2244)][x(859)];
      if (f)
        if (r += " var missing" + s + "; ", E) {
          !h && (r += x(838) + m + x(640) + d + "; ");
          var j = "i" + s, M = x(727) + s + "[" + j + "]", F = x(2734) + M + x(770);
          e[x(2244)][x(2474)] && (e[x(1105)] = e[x(2545)][x(2020)](P, M, e.opts.jsonPointers)), r += x(838) + g + x(2483), h && (r += x(550) + s + x(2308) + g + x(2370) + s + x(2047) + g + x(1159)), r += " for (var " + j + x(2299) + j + x(2706) + m + x(911) + j + "++) { " + g + x(1165) + l + "[" + m + "[" + j + "]] !== undefined ", D && (r += x(961) + l + ", " + m + "[" + j + x(2468)), r += x(2554) + g + x(1120), h && (r += "  }  "), r += x(2092) + g + ") {   ";
          var N = N || [];
          N[x(818)](r), r = "", e[x(573)] !== !1 ? (r += x(1250) + x(1040) + x(1035) + e[x(1105)] + x(2166) + e[x(2545)].toQuotedString(u) + x(491) + F + x(1993), e[x(2244)][x(1064)] !== !1 && (r += x(948), e[x(2244)][x(2474)] ? r += x(1611) : r += x(1705) + F + "\\'", r += "' "), e[x(2244)].verbose && (r += x(2361) + d + x(1787) + e.schemaPath + x(2701) + l + " "), r += x(2274)) : r += " {} ";
          var U = r;
          r = N[x(2087)](), !e[x(2521)] && f ? e[x(1721)] ? r += x(1585) + U + x(2477) : r += x(2128) + U + x(682) : r += x(1327) + U + ";  if (vErrors === null) vErrors = [err]; else vErrors.push(err); errors++; ", r += " } else { ";
        } else {
          r += x(2632);
          var $ = C;
          if ($)
            for (var V, j = -1, J = $[x(1200)] - 1; j < J; ) {
              V = $[j += 1], j && (r += x(1689));
              var s0 = e[x(2545)][x(1911)](V), o0 = l + s0;
              r += x(2354) + o0 + x(1478), D && (r += x(1797) + l + x(1254) + e[x(2545)][x(1086)](V) + x(2610)), r += ") && (missing" + s + x(1165) + e.util[x(1891)](e[x(2244)][x(1440)] ? V : s0) + x(1322);
            }
          r += x(1091);
          var M = x(2285) + s, F = "' + " + M + " + '";
          e[x(2244)][x(2474)] && (e[x(1105)] = e.opts[x(1440)] ? e[x(2545)][x(2020)](P, M, !0) : P + x(1623) + M);
          var N = N || [];
          N.push(r), r = "", e[x(573)] !== !1 ? (r += " { keyword: 'required" + x(1035) + e[x(1105)] + x(2166) + e.util.toQuotedString(u) + x(491) + F + x(1993), e.opts[x(1064)] !== !1 && (r += x(948), e[x(2244)][x(2474)] ? r += x(1611) : r += "should have required property \\'" + F + "\\'", r += "' "), e.opts.verbose && (r += x(2361) + d + x(1787) + e[x(791)] + x(2701) + l + " "), r += " } ") : r += " {} ";
          var U = r;
          r = N.pop(), !e.compositeRule && f ? e[x(1721)] ? r += x(1585) + U + x(2477) : r += x(2128) + U + x(682) : r += x(1327) + U + x(518), r += x(1955);
        }
      else if (E) {
        !h && (r += x(838) + m + " = validate.schema" + d + "; ");
        var j = "i" + s, M = x(727) + s + "[" + j + "]", F = x(2734) + M + x(770);
        e.opts[x(2474)] && (e[x(1105)] = e[x(2545)].getPathExpr(P, M, e[x(2244)][x(1440)])), h && (r += x(1843) + m + x(2127) + m + ")) {  var err =   ", e.createErrors !== !1 ? (r += x(1250) + x(1040) + "' , dataPath: (dataPath || '') + " + e.errorPath + x(2166) + e[x(2545)][x(1891)](u) + x(491) + F + "' } ", e.opts.messages !== !1 && (r += x(948), e.opts._errorDataPathProperty ? r += x(1611) : r += x(1705) + F + "\\'", r += "' "), e[x(2244)][x(1188)] && (r += x(2361) + d + " , parentSchema: validate.schema" + e[x(791)] + " , data: " + l + " "), r += x(2274)) : r += x(1494), r += x(1139) + m + x(2484)), r += x(2493) + j + x(2299) + j + x(2706) + m + x(911) + j + x(954) + l + "[" + m + "[" + j + x(2270), D && (r += " || ! Object.prototype.hasOwnProperty.call(" + l + ", " + m + "[" + j + "]) "), r += x(777), e[x(573)] !== !1 ? (r += x(1250) + x(1040) + x(1035) + e[x(1105)] + x(2166) + e[x(2545)][x(1891)](u) + " , params: { missingProperty: '" + F + x(1993), e.opts.messages !== !1 && (r += " , message: '", e[x(2244)][x(2474)] ? r += x(1611) : r += x(1705) + F + "\\'", r += "' "), e[x(2244)][x(1188)] && (r += x(2361) + d + x(1787) + e[x(791)] + " , data: " + l + " "), r += " } ") : r += " {} ", r += ";  if (vErrors === null) vErrors = [err]; else vErrors.push(err); errors++; } } ", h && (r += x(1561));
      } else {
        var u0 = C;
        if (u0)
          for (var V, a0 = -1, f0 = u0.length - 1; a0 < f0; ) {
            V = u0[a0 += 1];
            var s0 = e.util[x(1911)](V), F = e.util[x(1086)](V), o0 = l + s0;
            e[x(2244)]._errorDataPathProperty && (e.errorPath = e[x(2545)][x(1199)](P, V, e.opts[x(1440)])), r += x(2632) + o0 + x(1478), D && (r += " || ! Object.prototype.hasOwnProperty.call(" + l + x(1254) + e[x(2545)].escapeQuotes(V) + "') "), r += x(777), e[x(573)] !== !1 ? (r += x(1250) + x(1040) + "' , dataPath: (dataPath || '') + " + e[x(1105)] + x(2166) + e[x(2545)][x(1891)](u) + x(491) + F + x(1993), e[x(2244)].messages !== !1 && (r += x(948), e[x(2244)][x(2474)] ? r += x(1611) : r += x(1705) + F + "\\'", r += "' "), e.opts[x(1188)] && (r += " , schema: validate.schema" + d + " , parentSchema: validate.schema" + e[x(791)] + x(2701) + l + " "), r += x(2274)) : r += x(1494), r += x(804);
          }
      }
      e[x(1105)] = P;
    } else f && (r += x(1437));
    return r;
  }), bt;
}
var wt, ma;
function Wo() {
  return ma || (ma = 1, wt = function(e, t, a) {
    const x = B;
    var r = " ", s = e.level, o = e.dataLevel, c = e[x(727)][t], d = e[x(791)] + e[x(2545)][x(1911)](t), u = e[x(578)] + "/" + t, f = !e[x(2244)].allErrors, l = "data" + (o || ""), g = "valid" + s, h = e[x(2244)].$data && c && c[x(2597)], m;
    if (h ? (r += x(678) + s + x(1165) + e[x(2545)][x(2454)](c[x(2597)], o, e[x(2660)]) + "; ", m = x(727) + s) : m = c, (c || h) && e.opts[x(2721)] !== !1) {
      h && (r += x(838) + g + x(563) + m + x(2522) + m + x(2308) + g + x(1879) + m + x(1562) + g + x(2336)), r += x(887) + l + x(1021) + g + x(1114);
      var y = e.schema[x(2637)] && e.schema.items.type, w = Array[x(2344)](y);
      if (!y || y == x(2437) || y == x(1196) || w && (y[x(2170)](x(2437)) >= 0 || y[x(2170)]("array") >= 0)) r += x(660) + l + x(1118) + l + x(632) + g + x(2355);
      else {
        r += x(2057) + l + x(2113);
        var S = x(730) + (w ? "s" : "");
        r += x(1843) + e[x(2545)][S](y, x(1055), e[x(2244)][x(1222)], !0) + ") continue; ", w && (r += x(817)), r += x(1651) + g + x(1124);
      }
      r += x(2274), h && (r += x(1561)), r += x(1788) + g + x(1053);
      var R = R || [];
      R.push(r), r = "", e.createErrors !== !1 ? (r += x(1250) + "uniqueItems" + x(1035) + e[x(1105)] + x(2166) + e[x(2545)].toQuotedString(u) + x(2334), e.opts[x(1064)] !== !1 && (r += " , message: 'should NOT have duplicate items (items ## ' + j + ' and ' + i + ' are identical)' "), e.opts.verbose && (r += x(1592), h ? r += x(1191) + d : r += "" + c, r += x(1595) + e.schemaPath + x(2701) + l + " "), r += x(2274)) : r += " {} ";
      var A = r;
      r = R[x(2087)](), !e[x(2521)] && f ? e[x(1721)] ? r += x(1585) + A + x(2477) : r += x(2128) + A + x(682) : r += x(1327) + A + x(518), r += x(2274), f && (r += x(1293));
    } else f && (r += x(2110));
    return r;
  }), wt;
}
var St, ga;
function Bo() {
  return ga || (ga = 1, St = { $ref: Io(), allOf: Ro(), anyOf: Fo(), $comment: No(), const: qo(), contains: Oo(), dependencies: Ao(), enum: To(), format: Do(), if: jo(), items: Mo(), maximum: ta(), minimum: ta(), maxItems: aa(), minItems: aa(), maxLength: sa(), minLength: sa(), maxProperties: oa(), minProperties: oa(), multipleOf: Lo(), not: $o(), oneOf: zo(), pattern: Ho(), properties: Uo(), propertyNames: Vo(), required: Zo(), uniqueItems: Wo(), validate: ds() }), St;
}
var Pt, va;
function Ko() {
  const i = n;
  if (va) return Pt;
  va = 1;
  var e = Bo(), t = Wx()[i(797)];
  return Pt = function() {
    const x = i;
    var r = [{ type: x(2074), rules: [{ maximum: [x(2625)] }, { minimum: [x(1967)] }, x(500), x(822)] }, { type: x(923), rules: [x(2692), x(1213), x(1995), x(822)] }, { type: x(1196), rules: ["maxItems", "minItems", x(2637), x(1507), x(2721)] }, { type: x(2437), rules: [x(575), "minProperties", x(1040), x(1362), x(1579), { properties: [x(2273), "patternProperties"] }] }, { rules: [x(2287), x(2442), x(1252), x(2645), x(856), x(2141), x(752), "if"] }], s = [x(2426), x(1929)], o = [x(936), x(824), "id", x(2597), x(950), x(1972), "description", x(1658), x(987), "examples", "readOnly", x(1714), x(2371), "contentEncoding", "additionalItems", x(1413), x(2553)], c = [x(2074), x(2255), x(923), x(1196), x(2437), x(958), x(2382)];
    return r.all = t(s), r[x(530)] = t(c), r[x(1238)](function(d) {
      const u = x;
      d[u(2568)] = d[u(2568)][u(2404)](function(f) {
        const l = u;
        var g;
        if (typeof f == l(2437)) {
          var h = Object[l(2278)](f)[0];
          g = f[h], f = h, g[l(1238)](function(y) {
            const w = l;
            s[w(818)](y), r[w(1135)][y] = !0;
          });
        }
        s[l(818)](f);
        var m = r[l(1135)][f] = { keyword: f, code: e[f], implements: g };
        return m;
      }), r.all[u(1929)] = { keyword: u(1929), code: e.$comment }, d[u(2426)] && (r[u(530)][d[u(2426)]] = d);
    }), r[x(2408)] = t(s.concat(o)), r[x(938)] = {}, r;
  }, Pt;
}
var kt, ya;
function Jo() {
  const i = n;
  if (ya) return kt;
  ya = 1;
  var e = [i(500), i(756), i(2625), i(959), i(1967), i(2692), i(1213), i(1995), i(1138), i(1648), i(1663), i(2721), "maxProperties", i(2495), "required", i(2273), "enum", i(822), i(2442)];
  return kt = function(t, a) {
    const x = i;
    for (var r = 0; r < a.length; r++) {
      t = JSON[x(2156)](JSON.stringify(t));
      var s = a[r][x(2248)]("/"), o = t, c;
      for (c = 1; c < s[x(1200)]; c++) o = o[s[c]];
      for (c = 0; c < e.length; c++) {
        var d = e[c], u = o[d];
        u && (o[d] = { anyOf: [u, { $ref: "https://raw.githubusercontent.com/ajv-validator/ajv/master/lib/refs/data.json#" }] });
      }
    }
    return t;
  }, kt;
}
var Et, ba;
function Qo() {
  const i = n;
  if (ba) return Et;
  ba = 1;
  var e = nr()[i(2411)];
  Et = t;
  function t(a, x, r) {
    const s = i;
    var o = this;
    if (typeof this[s(904)][s(603)] != s(1342)) throw new Error(s(1636));
    typeof x == "function" && (r = x, x = void 0);
    var c = d(a).then(function() {
      const f = s;
      var l = o[f(914)](a, void 0, x);
      return l[f(2481)] || u(l);
    });
    return r && c[s(1413)](function(f) {
      r(null, f);
    }, r), c;
    function d(f) {
      const l = s;
      var g = f[l(936)];
      return g && !o[l(1446)](g) ? t[l(2518)](o, { $ref: g }, !0) : Promise.resolve();
    }
    function u(f) {
      const l = s;
      try {
        return o[l(2744)](f);
      } catch (h) {
        if (h instanceof e) return g(h);
        throw h;
      }
      function g(h) {
        const m = l;
        var y = h[m(2196)];
        if (R(y)) throw new Error("Schema " + y + m(1682) + h[m(2506)] + m(1275));
        var w = o[m(906)][y];
        return !w && (w = o[m(906)][y] = o[m(904)][m(603)](y), w.then(S, S)), w[m(1413)](function(A) {
          const C = m;
          if (!R(y)) return d(A)[C(1413)](function() {
            R(y) || o.addSchema(A, y, void 0, x);
          });
        })[m(1413)](function() {
          return u(f);
        });
        function S() {
          delete o._loadingSchemas[y];
        }
        function R(A) {
          return o[m(1148)][A] || o._schemas[A];
        }
      }
    }
  }
  return Et;
}
var Ct, wa;
function Go() {
  return wa || (wa = 1, Ct = function(e, t, a) {
    const x = B;
    var r = " ", s = e[x(1304)], o = e.dataLevel, c = e[x(727)][t], d = e[x(791)] + e[x(2545)][x(1911)](t), u = e[x(578)] + "/" + t, f = !e[x(2244)][x(837)], l, g = x(726) + (o || ""), h = "valid" + s, m = x(970) + s, y = e[x(2244)][x(2597)] && c && c[x(2597)], w;
    y ? (r += " var schema" + s + x(1165) + e[x(2545)][x(2454)](c[x(2597)], o, e[x(2660)]) + "; ", w = x(727) + s) : w = c;
    var S = this, R = "definition" + s, A = S[x(1596)], C = "", P, E, D, j, M;
    if (y && A[x(2597)]) {
      M = x(2393) + s;
      var F = A[x(2123)];
      r += x(838) + R + " = RULES.custom['" + t + x(688) + M + x(1165) + R + ".validate;";
    } else {
      if (j = e.useCustomRule(S, c, e[x(727)], e), !j) return;
      w = x(1191) + d, M = j[x(1204)], P = A.compile, E = A[x(2613)], D = A[x(1347)];
    }
    var N = M + x(2258), U = "i" + s, $ = x(2584) + s, V = A.async;
    if (V && !e[x(1721)]) throw new Error(x(1050));
    if (!(E || D) && (r += "" + N + x(1685)), r += x(909) + m + x(612) + h + ";", y && A[x(2597)] && (C += "}", r += " if (" + w + x(2144) + h + x(1458), F && (C += "}", r += " " + h + x(1165) + R + x(1306) + w + x(984) + h + ") { ")), E) A[x(944)] ? r += " " + j[x(2481)] + " " : r += " " + h + " = " + j.validate + "; ";
    else if (D) {
      var J = e.util.copy(e), C = "";
      J.level++;
      var s0 = x(1954) + J[x(1304)];
      J[x(727)] = j.validate, J[x(791)] = "";
      var o0 = e[x(2521)];
      e[x(2521)] = J[x(2521)] = !0;
      var u0 = e.validate(J)[x(2188)](/validate\.schema/g, M);
      e[x(2521)] = J.compositeRule = o0, r += " " + u0;
    } else {
      var a0 = a0 || [];
      a0[x(818)](r), r = "", r += "  " + M + x(2178), e[x(2244)][x(1419)] ? r += x(1036) : r += x(1719), P || A[x(727)] === !1 ? r += x(2039) + g + " " : r += " , " + w + x(2039) + g + x(1956) + e[x(791)] + " ", r += x(551), e[x(1105)] != '""' && (r += x(1623) + e[x(1105)]);
      var f0 = o ? "data" + (o - 1 || "") : x(2680), w0 = o ? e.dataPathArr[o] : "parentDataProperty";
      r += x(2039) + f0 + x(2039) + w0 + " , rootData )  ";
      var m0 = r;
      r = a0[x(2087)](), A[x(1418)] === !1 ? (r += " " + h + x(1165), V && (r += x(1706)), r += "" + m0 + "; ") : V ? (N = x(1425) + s, r += x(838) + N + " = null; try { " + h + x(1060) + m0 + x(1208) + h + x(2677) + N + x(1976)) : r += " " + N + " = null; " + h + x(1165) + m0 + "; ";
    }
    if (A.modifying && (r += x(1843) + f0 + ") " + g + x(1165) + f0 + "[" + w0 + "];"), r += "" + C, A.valid) f && (r += x(2110));
    else {
      r += x(2632), A[x(1954)] === void 0 ? (r += " !", D ? r += "" + s0 : r += "" + h) : r += " " + !A.valid + " ", r += x(1330), l = S.keyword;
      var a0 = a0 || [];
      a0[x(818)](r), r = "";
      var a0 = a0 || [];
      a0.push(r), r = "", e.createErrors !== !1 ? (r += x(1250) + (l || x(938)) + x(1035) + e[x(1105)] + x(2166) + e[x(2545)][x(1891)](u) + " , params: { keyword: '" + S.keyword + x(1993), e[x(2244)][x(1064)] !== !1 && (r += x(774) + S[x(1614)] + x(2341)), e[x(2244)][x(1188)] && (r += x(2361) + d + " , parentSchema: validate.schema" + e[x(791)] + x(2701) + g + " "), r += " } ") : r += x(1494);
      var D0 = r;
      r = a0.pop(), !e.compositeRule && f ? e.async ? r += x(1585) + D0 + x(2477) : r += x(2128) + D0 + x(682) : r += x(1327) + D0 + x(518);
      var E0 = r;
      r = a0[x(2087)](), E ? A[x(1418)] ? A[x(1418)] != "full" && (r += "  for (var " + U + "=" + m + "; " + U + "<errors; " + U + x(2133) + $ + x(1014) + U + x(514) + $ + x(623) + $ + x(2681) + e[x(1105)] + x(563) + $ + x(1605) + $ + '.schemaPath = "' + u + x(1340), e[x(2244)][x(1188)] && (r += " " + $ + x(1388) + w + "; " + $ + ".data = " + g + "; "), r += x(2274)) : A[x(1418)] === !1 ? r += " " + E0 + " " : (r += x(1843) + m + " == errors) { " + E0 + x(2630) + U + "=" + m + "; " + U + x(2197) + U + x(2133) + $ + x(1014) + U + x(514) + $ + x(623) + $ + x(2681) + e.errorPath + x(563) + $ + x(1605) + $ + '.schemaPath = "' + u + x(1340), e[x(2244)][x(1188)] && (r += " " + $ + ".schema = " + w + "; " + $ + x(1668) + g + "; "), r += " } } ") : D ? (r += "   var err =   ", e[x(573)] !== !1 ? (r += x(1250) + (l || x(938)) + "' , dataPath: (dataPath || '') + " + e[x(1105)] + x(2166) + e.util[x(1891)](u) + x(2577) + S[x(1614)] + x(1993), e[x(2244)].messages !== !1 && (r += x(774) + S[x(1614)] + `" keyword validation' `), e[x(2244)][x(1188)] && (r += x(2361) + d + x(1787) + e[x(791)] + x(2701) + g + " "), r += x(2274)) : r += x(1494), r += x(518), !e[x(2521)] && f && (e.async ? r += x(2080) : r += x(805))) : A[x(1418)] === !1 ? r += " " + E0 + " " : (r += x(2432) + N + x(2174) + N + x(2654) + N + x(626) + U + "=" + m + "; " + U + x(2197) + U + x(2133) + $ + x(1014) + U + x(514) + $ + x(623) + $ + x(2681) + e.errorPath + x(661) + $ + x(1223) + u + x(1182), e[x(2244)][x(1188)] && (r += " " + $ + x(1388) + w + "; " + $ + x(1668) + g + "; "), r += x(1546) + E0 + x(2274)), r += x(2274), f && (r += x(1293));
    }
    return r;
  }), Ct;
}
const Yo = "http://json-schema.org/draft-07/schema#", Xo = "http://json-schema.org/draft-07/schema#", _o = n(2598), x2 = { schemaArray: { type: n(1196), minItems: 1, items: { $ref: "#" } }, nonNegativeInteger: { type: "integer", minimum: 0 }, nonNegativeIntegerDefault0: { allOf: [{ $ref: n(1704) }, { default: 0 }] }, simpleTypes: { enum: [n(1196), "boolean", n(2255), n(2382), "number", n(2437), "string"] }, stringArray: { type: n(1196), items: { type: "string" }, uniqueItems: !0, default: [] } }, e2 = [n(2437), n(958)], t2 = { $id: { type: n(923), format: n(1615) }, $schema: { type: n(923), format: n(2155) }, $ref: { type: n(923), format: n(1615) }, $comment: { type: n(923) }, title: { type: n(923) }, description: { type: n(923) }, default: !0, readOnly: { type: n(958), default: !1 }, examples: { type: n(1196), items: !0 }, multipleOf: { type: n(2074), exclusiveMinimum: 0 }, maximum: { type: n(2074) }, exclusiveMaximum: { type: n(2074) }, minimum: { type: "number" }, exclusiveMinimum: { type: "number" }, maxLength: { $ref: n(1704) }, minLength: { $ref: n(2324) }, pattern: { type: n(923), format: "regex" }, additionalItems: { $ref: "#" }, items: { anyOf: [{ $ref: "#" }, { $ref: "#/definitions/schemaArray" }], default: !0 }, maxItems: { $ref: n(1704) }, minItems: { $ref: "#/definitions/nonNegativeIntegerDefault0" }, uniqueItems: { type: "boolean", default: !1 }, contains: { $ref: "#" }, maxProperties: { $ref: n(1704) }, minProperties: { $ref: "#/definitions/nonNegativeIntegerDefault0" }, required: { $ref: "#/definitions/stringArray" }, additionalProperties: { $ref: "#" }, definitions: { type: "object", additionalProperties: { $ref: "#" }, default: {} }, properties: { type: n(2437), additionalProperties: { $ref: "#" }, default: {} }, patternProperties: { type: "object", additionalProperties: { $ref: "#" }, propertyNames: { format: n(1131) }, default: {} }, dependencies: { type: "object", additionalProperties: { anyOf: [{ $ref: "#" }, { $ref: "#/definitions/stringArray" }] } }, propertyNames: { $ref: "#" }, const: !0, enum: { type: "array", items: !0, minItems: 1, uniqueItems: !0 }, type: { anyOf: [{ $ref: n(1171) }, { type: n(1196), items: { $ref: "#/definitions/simpleTypes" }, minItems: 1, uniqueItems: !0 }] }, format: { type: n(923) }, contentMediaType: { type: n(923) }, contentEncoding: { type: "string" }, if: { $ref: "#" }, then: { $ref: "#" }, else: { $ref: "#" }, allOf: { $ref: n(2431) }, anyOf: { $ref: n(2431) }, oneOf: { $ref: "#/definitions/schemaArray" }, not: { $ref: "#" } }, us = { $schema: Yo, $id: Xo, title: _o, definitions: x2, type: e2, properties: t2, default: !0 };
var It, Sa;
function r2() {
  const i = n;
  if (Sa) return It;
  Sa = 1;
  var e = us;
  return It = { $id: i(2670), definitions: { simpleTypes: e[i(987)][i(2351)] }, type: i(2437), dependencies: { schema: [i(2481)], $data: [i(2481)], statements: [i(2613)], valid: { not: { required: ["macro"] } } }, properties: { type: e[i(2372)][i(2426)], schema: { type: "boolean" }, statements: { type: i(958) }, dependencies: { type: i(1196), items: { type: i(923) } }, metaSchema: { type: "object" }, modifying: { type: i(958) }, valid: { type: i(958) }, $data: { type: i(958) }, async: { type: "boolean" }, errors: { anyOf: [{ type: i(958) }, { const: "full" }] } } }, It;
}
var Rt, Pa;
function a2() {
  if (Pa) return Rt;
  Pa = 1;
  var i = /^[a-z_$][a-z0-9_$-]*$/i, e = Go(), t = r2();
  Rt = { add: a, get: x, remove: r, validate: s };
  function a(o, c) {
    const d = B;
    var u = this.RULES;
    if (u.keywords[o]) throw new Error(d(1497) + o + d(2446));
    if (!i[d(1313)](o)) throw new Error("Keyword " + o + d(1392));
    if (c) {
      this[d(1456)](c, !0);
      var f = c[d(2426)];
      if (Array.isArray(f))
        for (var l = 0; l < f[d(1200)]; l++) h(o, f[l], c);
      else h(o, f, c);
      var g = c[d(1520)];
      g && (c[d(2597)] && this[d(904)][d(2597)] && (g = { anyOf: [g, { $ref: d(2684) }] }), c[d(2123)] = this[d(1454)](g, !0));
    }
    u[d(2408)][o] = u[d(1135)][o] = !0;
    function h(m, y, w) {
      const S = d;
      for (var R, A = 0; A < u[S(1200)]; A++) {
        var C = u[A];
        if (C.type == y) {
          R = C;
          break;
        }
      }
      !R && (R = { type: y, rules: [] }, u[S(818)](R));
      var P = { keyword: m, definition: w, custom: !0, code: e, implements: w[S(1999)] };
      R[S(2568)][S(818)](P), u[S(938)][m] = P;
    }
    return this;
  }
  function x(o) {
    const c = B;
    var d = this[c(523)][c(938)][o];
    return d ? d[c(1596)] : this[c(523)].keywords[o] || !1;
  }
  function r(o) {
    const c = B;
    var d = this[c(523)];
    delete d[c(2408)][o], delete d[c(1135)][o], delete d[c(938)][o];
    for (var u = 0; u < d[c(1200)]; u++)
      for (var f = d[u][c(2568)], l = 0; l < f[c(1200)]; l++)
        if (f[l][c(1614)] == o) {
          f[c(1065)](l, 1);
          break;
        }
    return this;
  }
  function s(o, c) {
    const d = B;
    s[d(1418)] = null;
    var u = this._validateKeyword = this._validateKeyword || this.compile(t, !0);
    if (u(o)) return !0;
    if (s[d(1418)] = u.errors, c) throw new Error(d(1289) + this[d(2291)](u[d(1418)]));
    return !1;
  }
  return Rt;
}
const n2 = n(1415), s2 = "https://raw.githubusercontent.com/ajv-validator/ajv/master/lib/refs/data.json#", i2 = n(1429), o2 = "object", c2 = [n(2597)], d2 = { $data: { type: n(923), anyOf: [{ format: n(531) }, { format: n(2220) }] } }, u2 = !1, f2 = { $schema: n2, $id: s2, description: i2, type: o2, required: c2, properties: d2, additionalProperties: u2 };
var Ft, ka;
function l2() {
  const i = n;
  if (ka) return Ft;
  ka = 1;
  var e = ko(), t = ar(), a = Eo(), x = os(), r = cs(), s = Co(), o = Ko(), c = Jo(), d = Wx();
  Ft = m, m[i(1166)][i(2481)] = y, m[i(1166)].compile = w, m[i(1166)][i(1767)] = S, m[i(1166)].addMetaSchema = R, m[i(1166)].validateSchema = A, m.prototype.getSchema = P, m[i(1166)][i(1344)] = j, m[i(1166)][i(1505)] = o0, m[i(1166)][i(2291)] = s0, m.prototype[i(914)] = F, m.prototype[i(2744)] = N, m[i(1166)].compileAsync = Qo();
  var u = a2();
  m[i(1166)].addKeyword = u[i(2295)], m[i(1166)][i(1193)] = u[i(1261)], m[i(1166)].removeKeyword = u[i(903)], m[i(1166)][i(1456)] = u[i(2481)];
  var f = nr();
  m[i(1197)] = f[i(2366)], m.MissingRefError = f.MissingRef, m[i(1449)] = c;
  var l = i(866), g = [i(1435), i(794), "coerceTypes", i(1125)], h = [i(1901)];
  function m(T) {
    const q = i;
    if (!(this instanceof m)) return new m(T);
    T = this[q(904)] = d[q(2456)](T) || {}, E0(this), this[q(1052)] = {}, this[q(1148)] = {}, this[q(1638)] = {}, this[q(2011)] = s(T[q(822)]), this[q(967)] = T.cache || new a(), this[q(906)] = {}, this[q(2314)] = [], this.RULES = o(), this[q(1117)] = U(T), T[q(2402)] = T[q(2402)] || 1 / 0, T[q(1877)] == q(571) && (T._errorDataPathProperty = !0), T[q(538)] === void 0 && (T[q(538)] = r), this[q(2111)] = D0(this), T.formats && f0(this), T[q(2408)] && w0(this), u0(this), typeof T[q(945)] == "object" && this.addMetaSchema(T[q(945)]), T[q(981)] && this[q(2153)]("nullable", { metaSchema: { type: q(958) } }), a0(this);
  }
  function y(T, q) {
    const L = i;
    var Q;
    if (typeof T == "string") {
      if (Q = this[L(1446)](T), !Q) throw new Error(L(495) + T + '"');
    } else {
      var G = this[L(914)](T);
      Q = G[L(2481)] || this._compile(G);
    }
    var Z = Q(q);
    return Q[L(950)] !== !0 && (this[L(1418)] = Q[L(1418)]), Z;
  }
  function w(T, q) {
    const L = i;
    var Q = this[L(914)](T, void 0, q);
    return Q[L(2481)] || this._compile(Q);
  }
  function S(T, q, L, Q) {
    const G = i;
    if (Array[G(2344)](T)) {
      for (var Z = 0; Z < T.length; Z++) this[G(1767)](T[Z], void 0, L, Q);
      return this;
    }
    var Y = this._getId(T);
    if (Y !== void 0 && typeof Y != G(923)) throw new Error(G(1030));
    return q = t[G(1307)](q || Y), m0(this, q), this[G(1052)][q] = this[G(914)](T, L, Q, !0), this;
  }
  function R(T, q, L) {
    return this[i(1767)](T, q, L, !0), this;
  }
  function A(T, q) {
    const L = i;
    var Q = T[L(936)];
    if (Q !== void 0 && typeof Q != L(923)) throw new Error(L(939));
    if (Q = Q || this[L(904)][L(2077)] || C(this), !Q) return this[L(1077)].warn(L(834)), this[L(1418)] = null, !0;
    var G = this[L(2481)](Q, T);
    if (!G && q) {
      var Z = L(1375) + this[L(2291)]();
      if (this._opts[L(2123)] == "log") this[L(1077)][L(2389)](Z);
      else throw new Error(Z);
    }
    return G;
  }
  function C(T) {
    const q = i;
    var L = T[q(904)][q(945)];
    return T[q(904)][q(2077)] = typeof L == q(2437) ? T[q(1117)](L) || L : T[q(1446)](l) ? l : void 0, T[q(904)][q(2077)];
  }
  function P(T) {
    const q = i;
    var L = D(this, T);
    switch (typeof L) {
      case q(2437):
        return L[q(2481)] || this[q(2744)](L);
      case q(923):
        return this.getSchema(L);
      case q(2634):
        return E(this, T);
    }
  }
  function E(T, q) {
    const L = i;
    var Q = t[L(727)][L(2518)](T, { schema: {} }, q);
    if (Q) {
      var G = Q[L(727)], Z = Q[L(1129)], Y = Q[L(1013)], n0 = e[L(2518)](T, G, Z, void 0, Y);
      return T[L(1638)][q] = new x({ ref: q, fragment: !0, schema: G, root: Z, baseId: Y, validate: n0 }), n0;
    }
  }
  function D(T, q) {
    const L = i;
    return q = t[L(1307)](q), T[L(1052)][q] || T[L(1148)][q] || T[L(1638)][q];
  }
  function j(T) {
    const q = i;
    if (T instanceof RegExp) return M(this, this._schemas, T), M(this, this[q(1148)], T), this;
    switch (typeof T) {
      case q(2634):
        return M(this, this[q(1052)]), M(this, this._refs), this[q(967)].clear(), this;
      case q(923):
        var L = D(this, T);
        return L && this[q(967)][q(504)](L.cacheKey), delete this[q(1052)][T], delete this[q(1148)][T], this;
      case q(2437):
        var Q = this[q(904)][q(538)], G = Q ? Q(T) : T;
        this[q(967)][q(504)](G);
        var Z = this[q(1117)](T);
        Z && (Z = t[q(1307)](Z), delete this[q(1052)][Z], delete this._refs[Z]);
    }
    return this;
  }
  function M(T, q, L) {
    const Q = i;
    for (var G in q) {
      var Z = q[G];
      !Z.meta && (!L || L[Q(1313)](G)) && (T[Q(967)][Q(504)](Z[Q(2038)]), delete q[G]);
    }
  }
  function F(T, q, L, Q) {
    const G = i;
    if (typeof T != G(2437) && typeof T != G(958)) throw new Error(G(591));
    var Z = this._opts.serialize, Y = Z ? Z(T) : T, n0 = this[G(967)][G(1261)](Y);
    if (n0) return n0;
    Q = Q || this[G(904)][G(2511)] !== !1;
    var i0 = t[G(1307)](this._getId(T));
    i0 && Q && m0(this, i0);
    var x0 = this[G(904)][G(2123)] !== !1 && !q, j0;
    x0 && !(j0 = i0 && i0 == t.normalizeId(T[G(936)])) && this[G(2123)](T, !0);
    var q0 = t.ids[G(2518)](this, T), $0 = new x({ id: i0, schema: T, localRefs: q0, cacheKey: Y, meta: L });
    return i0[0] != "#" && Q && (this[G(1148)][i0] = $0), this[G(967)][G(1807)](Y, $0), x0 && j0 && this[G(2123)](T, !0), $0;
  }
  function N(T, q) {
    const L = i;
    if (T[L(1924)])
      return T[L(2481)] = Z, Z.schema = T[L(727)], Z[L(1418)] = null, Z[L(1129)] = q || Z, T[L(727)].$async === !0 && (Z[L(950)] = !0), Z;
    T[L(1924)] = !0;
    var Q;
    T[L(945)] && (Q = this._opts, this[L(904)] = this[L(2111)]);
    var G;
    try {
      G = e.call(this, T[L(727)], q, T[L(1666)]);
    } catch (Y) {
      throw delete T[L(2481)], Y;
    } finally {
      T[L(1924)] = !1, T[L(945)] && (this._opts = Q);
    }
    return T[L(2481)] = G, T.refs = G[L(1568)], T.refVal = G[L(2641)], T.root = G.root, G;
    function Z() {
      const Y = L;
      var n0 = T[Y(2481)], i0 = n0[Y(1364)](this, arguments);
      return Z[Y(1418)] = n0[Y(1418)], i0;
    }
  }
  function U(T) {
    const q = i;
    switch (T[q(1016)]) {
      case q(983):
        return J;
      case "id":
        return $;
      default:
        return V;
    }
  }
  function $(T) {
    const q = i;
    return T.$id && this.logger[q(1808)]("schema $id ignored", T[q(824)]), T.id;
  }
  function V(T) {
    const q = i;
    return T.id && this[q(1077)][q(1808)](q(2005), T.id), T[q(824)];
  }
  function J(T) {
    const q = i;
    if (T[q(824)] && T.id && T.$id != T.id) throw new Error(q(1350));
    return T[q(824)] || T.id;
  }
  function s0(T, q) {
    const L = i;
    if (T = T || this.errors, !T) return "No errors";
    q = q || {};
    for (var Q = q[L(1659)] === void 0 ? ", " : q.separator, G = q[L(848)] === void 0 ? "data" : q[L(848)], Z = "", Y = 0; Y < T.length; Y++) {
      var n0 = T[Y];
      n0 && (Z += G + n0[L(2172)] + " " + n0.message + Q);
    }
    return Z[L(2602)](0, -Q[L(1200)]);
  }
  function o0(T, q) {
    const L = i;
    return typeof q == L(923) && (q = new RegExp(q)), this[L(2011)][T] = q, this;
  }
  function u0(T) {
    const q = i;
    var L;
    if (T[q(904)][q(2597)] && (L = f2, T[q(1187)](L, L.$id, !0)), T[q(904)][q(945)] !== !1) {
      var Q = us;
      T[q(904)].$data && (Q = c(Q, h)), T[q(1187)](Q, l, !0), T[q(1148)][q(1603)] = l;
    }
  }
  function a0(T) {
    const q = i;
    var L = T[q(904)][q(2120)];
    if (L)
      if (Array[q(2344)](L)) T.addSchema(L);
      else
        for (var Q in L) T[q(1767)](L[Q], Q);
  }
  function f0(T) {
    const q = i;
    for (var L in T[q(904)].formats) {
      var Q = T[q(904)].formats[L];
      T[q(1505)](L, Q);
    }
  }
  function w0(T) {
    const q = i;
    for (var L in T[q(904)].keywords) {
      var Q = T[q(904)].keywords[L];
      T[q(2153)](L, Q);
    }
  }
  function m0(T, q) {
    const L = i;
    if (T[L(1052)][q] || T[L(1148)][q]) throw new Error(L(1978) + q + '" already exists');
  }
  function D0(T) {
    const q = i;
    for (var L = d[q(2456)](T[q(904)]), Q = 0; Q < g[q(1200)]; Q++) delete L[g[Q]];
    return L;
  }
  function E0(T) {
    const q = i;
    var L = T[q(904)][q(1077)];
    if (L === !1) T[q(1077)] = { log: J0, warn: J0, error: J0 };
    else {
      if (L === void 0 && (L = console), !(typeof L == q(2437) && L.log && L[q(1808)] && L.error)) throw new Error(q(1087));
      T[q(1077)] = L;
    }
  }
  function J0() {
  }
  return Ft;
}
var h2 = l2();
const p2 = is(h2);
class m2 extends vo {
  constructor(e, t) {
    const a = n;
    var x;
    super(t), this[a(731)] = e, this[a(1041)] = (x = t == null ? void 0 : t[a(1819)]) !== null && x !== void 0 ? x : {}, this._instructions = t == null ? void 0 : t[a(2330)], this.setRequestHandler(Qn, (r) => this[a(995)](r)), this[a(2593)](Gn, () => {
      const r = a;
      var s;
      return (s = this[r(1616)]) === null || s === void 0 ? void 0 : s[r(2518)](this);
    });
  }
  [n(881)](e) {
    const t = n;
    if (this[t(2728)]) throw new Error(t(2478));
    this[t(1041)] = yo(this._capabilities, e);
  }
  [n(1205)](e) {
    const t = n;
    var a, x, r;
    switch (e) {
      case t(2507):
        if (!(!((a = this[t(2218)]) === null || a === void 0) && a[t(2428)])) throw new Error(t(616) + e + ")");
        break;
      case t(2492):
        if (!(!((x = this[t(2218)]) === null || x === void 0) && x.elicitation)) throw new Error(t(2451) + e + ")");
        break;
      case "roots/list":
        if (!(!((r = this._clientCapabilities) === null || r === void 0) && r[t(1932)])) throw new Error(t(1844) + e + ")");
        break;
    }
  }
  [n(1162)](e) {
    const t = n;
    switch (e) {
      case t(1889):
        if (!this[t(1041)][t(542)]) throw new Error("Server does not support logging (required for " + e + ")");
        break;
      case t(2682):
      case t(1049):
        if (!this[t(1041)][t(1868)]) throw new Error(t(1303) + e + ")");
        break;
      case t(1311):
        if (!this._capabilities[t(667)]) throw new Error(t(1545) + e + ")");
        break;
      case t(1244):
        if (!this[t(1041)].prompts) throw new Error(t(2722) + e + ")");
        break;
    }
  }
  assertRequestHandlerCapability(e) {
    const t = n;
    switch (e) {
      case t(2507):
        if (!this[t(1041)][t(2428)]) throw new Error(t(650) + e + ")");
        break;
      case t(2704):
        if (!this[t(1041)][t(542)]) throw new Error(t(708) + e + ")");
        break;
      case t(2420):
      case t(2316):
        if (!this[t(1041)].prompts) throw new Error(t(1878) + e + ")");
        break;
      case t(2055):
      case t(2473):
      case t(1642):
        if (!this[t(1041)].resources) throw new Error(t(1503) + e + ")");
        break;
      case t(561):
      case t(1068):
        if (!this[t(1041)][t(667)]) throw new Error(t(1465) + e + ")");
        break;
    }
  }
  async [n(995)](e) {
    const t = n, a = e.params[t(755)];
    return this[t(2218)] = e[t(2646)].capabilities, this[t(1461)] = e[t(2646)].clientInfo, { protocolVersion: pi.includes(a) ? a : Hn, capabilities: this[t(813)](), serverInfo: this[t(731)], ...this._instructions && { instructions: this[t(1675)] } };
  }
  getClientCapabilities() {
    return this._clientCapabilities;
  }
  [n(1526)]() {
    return this[n(1461)];
  }
  [n(813)]() {
    return this[n(1041)];
  }
  async [n(1189)]() {
    const e = n;
    return this[e(1352)]({ method: e(1189) }, Vt);
  }
  async [n(1613)](e, t) {
    return this[n(1352)]({ method: "sampling/createMessage", params: e }, as, t);
  }
  async elicitInput(e, t) {
    const a = n, x = await this.request({ method: "elicitation/create", params: e }, ns, t);
    if (x[a(2676)] === a(2542) && x[a(1569)]) try {
      const r = new p2(), s = r[a(1454)](e.requestedSchema);
      if (!s(x[a(1569)])) throw new Ox(bx[a(1158)], a(701) + r[a(2291)](s[a(1418)]));
    } catch (r) {
      throw r instanceof Ox ? r : new Ox(bx[a(557)], "Error validating elicitation response: " + r);
    }
    return x;
  }
  async [n(1785)](e, t) {
    const a = n;
    return this[a(1352)]({ method: a(2498), params: e }, ss, t);
  }
  async [n(807)](e) {
    const t = n;
    return this.notification({ method: t(1889), params: e });
  }
  async [n(1661)](e) {
    return this.notification({ method: "notifications/resources/updated", params: e });
  }
  async sendResourceListChanged() {
    const e = n;
    return this.notification({ method: e(1049) });
  }
  async [n(2710)]() {
    const e = n;
    return this[e(1441)]({ method: e(1311) });
  }
  async [n(720)]() {
    const e = n;
    return this.notification({ method: e(1244) });
  }
}
var vn, yn;
class g2 {
  constructor() {
    d0(this, yn, []);
    d0(this, vn, []);
  }
  push(e) {
    const t = n;
    this[t(576)][t(818)](e), this[t(2727)].forEach((a) => a(e));
  }
  [(yn = n(576), vn = n(2727), n(1895))](e) {
    const t = n;
    return this[t(576)][t(893)]((a) => a[t(2646)][t(1536)] === e);
  }
  [n(947)](e) {
    const t = n;
    this[t(576)] = this[t(576)].filter((a) => a.params.requestId !== e);
  }
  addListener(e) {
    const t = n;
    this[t(2727)][t(818)](e);
  }
  [n(2179)](e) {
    const t = n, a = this[t(2727)][t(2170)](e);
    a !== -1 && this.listeners.splice(a, 1);
  }
}
var bn;
class v2 {
  constructor(e) {
    d0(this, bn);
    this.protocol = e;
  }
  [(bn = n(749), n(1074))](e, t) {
    const a = n;
    this.protocol[a(1441)]({ method: "sdppp/streamResponse", params: { requestId: e, data: t, error: null, finished: !1 } });
  }
  [n(1175)](e) {
    this.protocol.notification({ method: "sdppp/streamResponse", params: { requestId: e, data: null, error: null, finished: !0 } });
  }
  [n(1443)](e) {
    const t = n;
    this[t(749)][t(1441)]({ method: t(1588), params: { requestId: e, data: null, error: t(2226), finished: !0 } });
  }
  [n(580)](e, t) {
    const a = n;
    this[a(749)].notification({ method: a(1588), params: { requestId: e, data: null, error: t, finished: !0 } });
  }
}
var wn, Sn;
class y2 {
  constructor(e, t) {
    d0(this, Sn);
    d0(this, wn);
    const a = n;
    this[a(1551)] = e, this.runningRequests = t;
  }
  async [(Sn = n(1551), wn = n(2549), n(1127))](e, t, a, x, r) {
    const s = n;
    try {
      await this[s(2034)](e, t, a, x, r);
    } catch (o) {
      this[s(1551)][s(580)](e, (o == null ? void 0 : o[s(2353)]) || String(o));
    } finally {
      this[s(2549)][s(2653)](e);
    }
  }
  async [n(2034)](e, t, a, x, r) {
    const s = n;
    for await (const o of t(a, x, r[s(2360)])) {
      if (r[s(2360)][s(1786)]) {
        this[s(1551)][s(1443)](e);
        return;
      }
      this[s(1551)][s(1074)](e, o);
    }
    r[s(2360)].aborted ? this[s(1551)].sendAbortedResponse(e) : this[s(1551)][s(1175)](e);
  }
}
var Pn, kn;
class b2 {
  constructor(e, t) {
    d0(this, kn);
    d0(this, Pn);
    const a = n;
    this.protocol = e, this[a(1813)] = t;
  }
  [(kn = n(749), Pn = n(1813), n(1949))](e) {
    if (e != null && e.aborted) throw new Error("Operation was aborted");
  }
  async [n(2590)](e) {
    const t = n;
    return (await this[t(749)][t(1352)]({ method: t(778), params: { action: e[t(2676)], data: e.data } }, O({ requestId: I() })))[t(1536)];
  }
  initializeResponseQueue(e) {
    const t = n, a = this.notificationQueue[t(1895)](e).map((x) => ({ data: x[t(2646)][t(726)], error: x[t(2646)][t(2389)], finished: x[t(2646)][t(1038)] }));
    return this.notificationQueue[t(947)](e), a;
  }
  createStreamState() {
    return { resolve: null, finished: !1, aborted: !1 };
  }
  [n(702)](e, t, a, x) {
    const r = n, s = this[r(746)](e, t, a), o = this[r(1750)](e, a);
    return this[r(1813)][r(2406)](s), x == null || x[r(2626)](r(2480), o), { onNotification: s, onAbort: o };
  }
  [n(746)](e, t, a) {
    const x = n, r = O({ method: r0("sdppp/streamResponse"), params: O({ requestId: I(), data: B0(), error: I()[x(981)](), finished: l0() }) });
    return (s) => {
      const o = x, c = r[o(2732)](s);
      if (!c.success || c[o(726)][o(2646)][o(1536)] !== e) return;
      const { data: d, error: u, finished: f } = c.data[o(2646)];
      t[o(818)]({ data: d, error: u, finished: f }), a[o(1987)] && (a.resolve(), a.resolve = null);
    };
  }
  [n(1750)](e, t) {
    return async () => {
      const a = B;
      if (!t[a(1786)]) {
        t[a(1786)] = !0;
        try {
          await this[a(749)][a(1352)]({ method: "sdppp/abort", params: { requestId: e } }, O({ success: l0() }));
        } catch {
        }
        t.finished = !0, t[a(1987)] && (t.resolve(), t.resolve = null);
      }
    };
  }
  [n(2595)](e, t, a, x) {
    const r = this;
    return { async *[Symbol.asyncIterator]() {
      const s = B, o = r[s(702)](a, e, t, x);
      try {
        yield* r[s(1699)](e, t, x);
      } finally {
        r.cleanupStreamHandlers(a, o, x);
      }
    } };
  }
  async *processStreamQueue(e, t, a) {
    const x = n;
    for (; !t[x(1038)] && !t.aborted; ) {
      if (a != null && a[x(1786)] && !t[x(1786)]) {
        t.aborted = !0;
        break;
      }
      if (e[x(1200)] === 0) {
        await new Promise((r) => {
          const s = x;
          t[s(1987)] = r;
        });
        continue;
      }
      yield* this[x(1513)](e, t);
    }
    if (t.aborted) throw new Error(x(2226));
  }
  *[n(1513)](e, t) {
    const a = n;
    for (; e[a(1200)] > 0; ) {
      const x = e[a(2621)]();
      if (!x) continue;
      const { data: r, error: s, finished: o } = x;
      if (s) throw new Error(s);
      if (o) {
        t[a(1038)] = !0;
        break;
      }
      yield r;
    }
  }
  [n(2390)](e, t, a) {
    const x = n;
    this[x(1813)][x(2179)](t.onNotification), a == null || a[x(1484)]("abort", t[x(2745)]), this[x(1813)][x(947)](e);
  }
}
var En, Cn, In, Rn, Fn, Nn, qn, On;
class w2 {
  constructor(e) {
    d0(this, On, /* @__PURE__ */ new Map());
    d0(this, "broadcastHandlers", /* @__PURE__ */ new Map());
    d0(this, qn, 1);
    d0(this, Nn, /* @__PURE__ */ new Map());
    d0(this, Fn);
    d0(this, Rn, new g2());
    d0(this, In);
    d0(this, Cn);
    d0(this, En);
    const t = n;
    this.protocol = e, this[t(1551)] = new v2(e), this.actionExecutor = new y2(this[t(1551)], this[t(2549)]), this[t(825)] = new b2(e, this.notificationQueue), this[t(1325)](), this[t(830)](), this[t(1820)](), this.setupBroadcastHandler();
  }
  [(On = n(1406), qn = n(2669), Nn = n(2549), Fn = n(749), Rn = n(1813), In = n(1551), Cn = n(2735), En = n(825), n(1325))]() {
    const e = n, t = O({ method: r0("sdppp/streamResponse"), params: O({ requestId: I(), data: B0(), error: I()[e(981)](), finished: l0() }) });
    this.protocol[e(2593)](t, (a) => this.notificationQueue.push(a));
  }
  [n(830)]() {
    const e = n, t = O({ method: r0(e(2026)), params: O({ requestId: I() }) });
    this[e(749)].setRequestHandler(t, async (a, x) => {
      const r = e, { requestId: s } = a[r(2646)], o = this[r(2549)].get(s);
      return o && (o[r(2480)](), this.runningRequests[r(2653)](s)), { success: !0 };
    });
  }
  [n(1820)]() {
    const e = n, t = O({ method: r0(e(778)), params: O({ action: I(), data: B0() }) });
    this[e(749)][e(1670)](t, async (a, x) => {
      const r = e, s = r(2296) + this[r(2669)]++, o = this.actionHandlers[r(1261)](a.params[r(2676)]);
      if (!o) throw new Error("No handler for action: " + a[r(2646)].action);
      const c = new AbortController();
      return this[r(2549)].set(s, c), this[r(2735)][r(1127)](s, o, a[r(2646)], x, c), { requestId: s };
    });
  }
  [n(1926)](e, t) {
    const a = n;
    this[a(1406)][a(510)](e[a(2129)][a(2676)][a(2391)], t);
  }
  async action(e, t, a) {
    const x = n;
    this[x(825)].validateActionRequest(a);
    const r = await this[x(825)][x(2590)](e), s = this[x(825)][x(1696)](r), o = this[x(825)][x(1279)]();
    return this[x(825)].createAsyncIterator(s, o, r, a);
  }
  [n(1490)]() {
    const e = n, t = O({ method: r0("sdppp/broadcast"), params: O({ messageType: I(), message: B0() }) });
    this[e(749)][e(2593)](t, (a) => {
      const x = e, { messageType: r, message: s } = a[x(2646)], o = this.broadcastHandlers[x(1261)](r);
      o && o(s);
    });
  }
  [n(982)](e, t) {
    this[n(2612)].set(e, t);
  }
  async [n(2607)](e, t) {
    const a = n;
    await this[a(749)][a(1441)]({ method: a(2423), params: { messageType: e, message: t } });
  }
  async request(e, t, a, x) {
    const r = n;
    return x || (x = {}), x[r(1563)] = x[r(1563)] || 7 * 24 * 60 * 60 * 1e3, await this[r(749)][r(1352)]({ method: e, params: t }, a, x);
  }
  registerRequestHandler(e, t) {
    const a = n;
    this.protocol[a(1670)](e, t);
  }
}
class S2 extends w2 {
  constructor(t, a) {
    const x = n, r = new m2(t, a);
    r[x(1626)] = (s) => {
      const o = x;
      console[o(2389)](o(1621), s);
    };
    super(r);
    d0(this, "server");
    this.server = r;
  }
  async [n(1610)](t) {
    const a = n;
    return await this[a(2032)][a(1610)](t);
  }
  async [n(1140)]() {
    const t = n;
    await this.server[t(1140)]();
  }
  [n(1782)]() {
    const t = n;
    return this[t(2032)][t(2728)] !== void 0;
  }
}
function P2(i) {
  const e = new As(i);
  return { joinAs(t, a) {
    const x = B;
    if (!e[x(2369)](t)) throw new Error("Node " + String(t) + x(1540));
    return new hi(e, t, a);
  }, getDefinition() {
    return i;
  }, getNodeIds() {
    return e.getNodeIds();
  }, getNeighbors(t) {
    return e[B(1361)](t);
  }, hasEdge(t, a) {
    return e.hasEdge(t, a);
  }, hasPath(t, a) {
    return e[B(1998)](t, a);
  }, findPath(t, a) {
    return e[B(605)](t, a);
  } };
}
const k2 = O({}), E2 = O({ uname: I().default(""), activeDocumentID: I0()[n(1658)](0), layers: N0(O({ id: I0(), name: I(), identify: I() }))[n(1658)]([]), actions: N0(I())[n(1658)]([]), theme: I().default(n(2388)), sdpppX: Y0(I(), B0()).default({}), locale: V0([n(2160), n(2352)])[n(1658)](n(2352)), comfyWebviewConnectStatus: V0(["connecting", n(655), n(489)]).default("disconnected"), comfyWebviewLoadError: I().default(""), comfyWebviewLoading: l0()[n(1658)](!1), comfyWebviewVersion: I()[n(1658)](""), comfyAutoRunning: l0()[n(1658)](!1), comfyHTTPCode: I0().default(200), comfyURL: I()[n(1658)](""), sdkWebviewFocusing: l0().default(!1), sdkWebviewConnectStatus: V0([n(2323), n(655), n(489)])[n(1658)](n(489)), isLogin: l0()[n(1658)](!1), isGuest: l0()[n(1658)](!1), requestingLogin: l0()[n(1658)](!1), loginMessage: I()[n(1658)](""), token: I()[n(1658)](""), userInfo: Y0(I(), B0())[n(1658)]({}) }), Mx = { name: I(), uiWeight: I0() }, C2 = O({ ...Mx, outputType: r0(n(2714)), options: O({ required: l0(), maxCount: I0()[n(1360)](), maskMode: l0().optional() }) }), I2 = O({ ...Mx, outputType: r0("masks"), options: O({ required: l0() }) }), R2 = O({ ...Mx, outputType: r0(n(923)), options: O({ required: l0() }) }), F2 = O({ ...Mx, outputType: r0(n(958)), options: O({ required: l0() }) }), N2 = O({ ...Mx, outputType: r0(n(2074)), options: O({ required: l0(), min: I0()[n(1360)](), max: I0().optional(), step: I0().optional(), random: l0()[n(1360)](), slider: l0().optional() }) }), q2 = O({ ...Mx, outputType: r0("combo"), options: O({ required: l0(), values: N0(I()), labels: N0(I())[n(1360)]() }) }), O2 = O({ ...Mx, outputType: r0(n(2132)), options: O({ required: l0(), values: N0(I()) }) }), A2 = Mn("outputType", [C2, I2, R2, F2, N2, q2, O2]), T2 = O({ id: I(), title: I(), widgets: N0(A2), uiWeightSum: I0() }), D2 = O({ widgetableID: I(), widgetablePath: I(), nodes: Y0(I(), T2), nodeIndexes: N0(I()), note: I()[n(1360)](), options: Y0(I(), B0()) }), j2 = O({ widgetableStructure: D2[n(1658)]({ widgetableID: "", widgetablePath: "", nodes: {}, note: "", options: {}, nodeIndexes: [] }), widgetableValues: Y0(I(), N0(B0()))[n(1658)]({}), widgetableErrors: Y0(I(), I())[n(1658)]({}), queueSize: I0()[n(1658)](0), lastError: I()[n(1658)](""), progress: I0()[n(1658)](0), executingNodeTitle: I()[n(1658)](""), graphProgress: I0()[n(1658)](0), comfyUserToken: I()[n(1658)](""), comfyOrgLoggedIn: l0()[n(1658)](!1), comfyOrgAPIKey: I()[n(1658)](""), comfyWSState: V0([n(655), n(1985)])[n(1658)](n(655)), lastRunTime: I0()[n(1658)](0) }), M2 = { log: { requestSchema: O({ level: V0([n(816), n(2414), "warn", "error"]), messages: N0(I()) }), responseSchema: O({}) }, openExternalLink: { requestSchema: O({ url: I() }), responseSchema: O({ error: I()[n(1360)]() }) }, getStorage: { requestSchema: O({ key: I() }), responseSchema: O({ value: I(), error: I().optional() }) }, setStorage: { requestSchema: O({ key: I(), value: I() }), responseSchema: O({ error: I()[n(1360)]() }) }, removeStorage: { requestSchema: O({ key: I() }), responseSchema: O({ error: I()[n(1360)]() }) }, keyboardAction: { requestSchema: O({ keycode: I() }), responseSchema: O({}) }, setComfyWebviewURL: { requestSchema: O({ url: I() }), responseSchema: O({}) }, uploadComfyImage: { requestSchema: O({ uploadInput: O({ type: r0("buffer").or(r0(n(1923))), tokenOrBuffer: B0(), fileName: I() }), overwrite: l0()[n(1360)]()[n(1658)](!0) }), responseSchema: O({ name: I() }) }, proxiedFetch: { requestSchema: O({ url: I(), method: I()[n(1360)](), headers: Y0(I())[n(1360)](), body: B0()[n(1360)](), bodyType: V0(["json", n(633), "text"])[n(1360)]() }), responseSchema: O({ success: l0(), status: I0()[n(1360)](), statusText: I()[n(1360)](), headers: Y0(I())[n(1360)](), data: B0()[n(1360)](), error: I().optional() }) } }, fe = O({ thumbnail_url: I()[n(1360)](), file_token: I().optional(), source: I().optional(), error: I()[n(1360)]() }), L2 = { doGetImage: { requestSchema: O({ boundary: V0([n(1183), n(2535), n(1331)]), content: V0([n(1183), n(2535), n(1331)]).or(I()), imageSize: I0(), imageQuality: I0(), cropBySelection: V0(["no", n(935), n(1122)]) }), responseSchema: fe }, doGetMask: { requestSchema: O({ content: V0([n(1183), n(2535), n(1331)]), reverse: l0(), imageSize: I0() }), responseSchema: fe }, doSendImage: { requestSchema: O({ selection: V0([n(1759), n(2711), n(1574), n(1349), "curlayer_canvas", n(801), "curlayer_selection", "newdoc_canvas"]), url: I(), source: I(), cropBySelection: V0(["no", "positive", "negative"]).default("no") }), responseSchema: O({ error: I()[n(1360)]() }) }, requestImageGet: { requestSchema: O({}), responseSchema: fe }, requestImageSend: { requestSchema: O({ url: I(), source: I() }), responseSchema: O({ error: I()[n(1360)]() }) }, requestMaskGet: { requestSchema: O({ isMask: l0().default(!1) }), responseSchema: fe } }, $2 = O({ passwordPayload: O({ username: I(), password: I() }).or(O({ email: I(), password: I() })).or(O({ phone: I(), password: I() })).or(O({ identifier: I(), password: I() })) }).or(O({ passcodePayload: O({ phone: I(), code: I() }).or(O({ email: I(), code: I() })) })), z2 = O({ passwordPayload: O({ username: I(), password: I() }).or(O({ email: I(), password: I() })).or(O({ phone: I(), password: I() })).or(O({ identifier: I(), password: I() })) }).or(O({ passcodePayload: O({ phone: I(), code: I() }).or(O({ email: I(), code: I() })) })), H2 = { register: { requestSchema: $2, responseSchema: O({}) }, login: { requestSchema: z2, responseSchema: O({}) }, sendPassCode: { requestSchema: O({ phone: I().optional(), email: I()[n(1360)]() }), responseSchema: O({}) }, logout: { requestSchema: O({}), responseSchema: O({}) }, guestLogin: { requestSchema: O({}), responseSchema: O({}) } }, U2 = O({ workflows: N0(I()), error: I().optional() }), V2 = O({ success: l0(), nodeErrors: Y0(I())[n(1360)](), prompt_ids: N0(I()).optional(), images: N0(O({ url: I(), thumbnail: I() }))[n(1360)]() }), Z2 = { setWidgetValue: { requestSchema: O({ values: N0(O({ nodeID: I(), widgetIndex: I0(), value: Y0(I(), B0()).or(I()).or(I0()).or(l0()).or(N0(B0())) })) }), responseSchema: O({ success: l0() }) }, openWorkflow: { requestSchema: O({ workflow_path: I(), reset: l0()[n(1658)](!1) }), responseSchema: O({ success: l0() }) }, openWorkflowJSON: { requestSchema: O({ workflow_content: Y0(B0()), workflow_path: I() }), responseSchema: O({ success: l0() }) }, listWorkflows: { requestSchema: O({ listMode: I().optional(), sdpppID: I()[n(1360)](), sdpppToken: I()[n(1360)]() }), responseSchema: U2 }, saveWorkflow: { requestSchema: O({ workflow_path: I(), from_sid: I()[n(1360)]() }), responseSchema: O({ success: l0() }) }, run: { requestSchema: O({ size: I0() }), responseSchema: V2, stream: !0 }, stopAll: { requestSchema: O({}), responseSchema: O({ success: l0() }) } }, W2 = { setNodeTitle: { requestSchema: O({ node_id: I(), title: I() }), responseSchema: O({ success: l0() }) }, reboot: { requestSchema: O({}), responseSchema: O({ success: l0(), error: I().optional() }) }, setComfyOrgAPIKey: { requestSchema: O({ api_key: I() }), responseSchema: O({ success: l0() }) }, logout: { requestSchema: O({}), responseSchema: O({ success: l0() }) } }, B2 = P2({ nodes: { sdk: { store: k2, actions: {} }, uxp: { store: E2, actions: { ...L2, ...M2, ...H2 } }, comfy: { store: j2, actions: { ...Z2, ...W2 } } }, edges: [["sdk", n(577)], ["comfy", n(577)]] }), C0 = B2.joinAs("comfy");
globalThis[n(1664)] = C0, globalThis.sdpppX2 = globalThis[n(832)] || {};
const xe = globalThis[n(832)], K2 = { "preview.show": n(1824), "gateway.select_ai_service": "请选择AI服务", "image.jump_to_last": n(1488), "image.clear_all": n(624), "image.send_to_ps": n(748), "image.download": "下载", "image.copy": "复制", "task.waiting_upload": n(1858), "task.creating_task": n(820), "task.running_duration": n(1481), "comfy.connect": "连接", "comfy.load_failed": "ComfyUI加载失败，HTTP状态码：{{code}}", "comfy.loading": n(883), "comfy.channel_connecting": "通道连接中...", "comfy.server_reconnecting": n(1059), "comfy.version_mismatch": n(2659), "comfy.cloud_recommend": n(2085), "comfy.your_workflows": n(522), "comfy.refresh_workflows": n(2581), "comfy.queue_progress": n(1726), "comfy.save": "保存", "comfy.refresh": "刷新", "comfy.stop_cancel_all": "停止并取消全部", "comfy.stop_auto_run": "停止自动运行", "comfy.start_auto_run": n(621), "comfy.run": "运行", "comfy.back": "返回", "comfy.uploading": "正在上传...", "http.404": n(1968), "http.401": n(1029), "http.403": n(2444), "http.408": "请求超时 (408)", "http.500": n(631), "http.501": n(850), "http.502": n(1404), "http.503": n(532), "http.504": n(1080), "http.unknown": n(2565), "runninghub.get_apikey": "点此获取RunningHub APIKey", "runninghub.apikey_placeholder": n(1043), "runninghub.app_id": n(1867), "runninghub.webapp_id_placeholder": n(1463), "runninghub.open_app": n(922), "runninghub.execute": "执行", "runninghub.rh_coins": n(2241), "runninghub.current_tasks": n(663), "runninghub.status.waiting": n(2003), "runninghub.status.running": n(1357), "runninghub.status.failed": n(1251), "runninghub.status.success": n(668), "image.auto_refetch": n(1047), "runninghub.error.get_result_failed": n(1850), "runninghub.error.task_failed": n(1434), "runninghub.error.task_incomplete": n(1871), "replicate.get_apikey": "如何获取APIKey", "replicate.apikey_placeholder": "请输入您的Replicate API Key", "replicate.execute": "执行", "replicate.model_placeholder": n(719), "liblib.get_apikey": n(2349), "liblib.execute": "执行", "common.close": "关闭", "common.save_and_run": n(2633), "common.loading": n(1229), "common.error": "错误", "common.success": "成功", "common.cancel": "取消", "common.confirm": "确认", "common.options": "选项", "common.options_separator": "=== 选项 ===", webviewInForeground: n(2211), webviewInForeground2: n(1681), "auth.login_success": n(2579), "auth.username_label": n(2539), "auth.email_label": n(2328), "auth.logout": n(2604), "auth.login_required": n(2636), "image.send.select_position": n(1451), "image.send.sending": "正在发送图像...", "image.layer.new": n(997), "image.layer.current": n(558), "image.layer.fit_to_current": n(2697), "image.layer.fit_to_selection": "适配至选区", "image.layer.fit_to_canvas": n(636), "image.shortcut_auth_required": n(729), "image.shortcut_focus_required": n(1010), "image.get.select_image": "请选择要获取的图像", "image.get.entire_canvas": n(2261), "image.get.canvas": "画布", "image.get.current_layer": n(558), "image.get.current_layer_bounds": "仅当前图层范围", "image.get.selection_bounds": "仅选区范围", "image.get.canvas_bounds": n(1906), "image.crop_by_selection": n(2376), "image.limit_size": n(2227), "image.crop.none": n(2747), "image.crop.inpaint": "反向裁剪(Inpaint)", "image.crop.outpaint": n(773), "mask.get.select_mask": n(1832), "mask.selection": "选区", "mask.current_layer_bounds": "当前图层范围", "mask.all": "全部", "mask.selection_exclude": n(2419), "mask.current_layer_exclude": "当前图层除外", "mask.empty": "空", "document {{0}} not found": "找不到文档: {{0}}", "create document for preview": n(1123), "resize document for preview": n(1042), "create document for sent images": n(490), "show sent images": n(619), "create layer failed": "创建图层失败", "layer not found {{0}}": n(2743), "layer not found: {{0}}": n(2743), "layer {{0}} is not a group": n(1130), "no linked layer for {{0}}": n(1442), "no first related layer in {{0}}": n(1372), "merge group failed": n(526), "get content of layer {{0}}": "获取图层 {{0}} 的内容", "get layer info": n(1766), "get_layer_info: layer_identify required": n(1768), "get pixel of {{0}} failed": "获取像素失败: {{0}}", "get selection failed": n(584), "invalid name: {{0}}": n(1977), "desire bounds is null": n(2321), "intersect or scaledDesire is null": "交集或缩放目标为空", 'only layer kind "TEXT" is supported, invalid layer: {{0}}': "不支持非文本图层: {{0}}", "select layer": "sdppp 选中图层", "run Photoshop Action": n(1607), "Action {{0}} not found": "Action {{0}} 未找到", "Action set {{0}} not found": n(1295), "set text to layer": n(1032), "ComfyManager not found, cannot reboot": n(1266), "Failed to reboot ComfyUI": n(2078), "image.upload.from_ps": n(1297), "image.upload.from_disk": "从磁盘", "image.upload.clear": "清空", "image.upload.uploading": n(1504), "image.upload.no_images": n(1864), "source.source": "来源", "source.content": "内容", "source.boundary": "范围", "source.mask": "遮罩", "source.disk": "磁盘", "source.remote": "远端", "source.unknown": "未知", "source.ps_image": n(2004), "source.ps_mask": "PS遮罩", "source.canvas": n(2261), "source.current_layer": n(558), "source.selection": "选区", "source.quality_percent": n(1775), "source.crop.positive": n(1673), "source.crop.negative": n(2266), "source.reverse": "反转" }, J2 = { "preview.show": n(2222), "gateway.select_ai_service": "Please select AI service", "image.jump_to_last": n(763), "image.clear_all": n(1496), "image.send_to_ps": "Send to PS", "image.download": n(496), "image.copy": "Copy", "task.waiting_upload": "Waiting for image upload...", "task.creating_task": n(1287), "task.running_duration": "Running for {{duration}} seconds, {{message}}", "comfy.connect": n(2312), "comfy.load_failed": "ComfyUI failed to load, HTTP status code: {{code}}", "comfy.loading": n(1914), "comfy.channel_connecting": n(2516), "comfy.server_reconnecting": "ComfyUI server reconnecting", "comfy.version_mismatch": n(1997), "comfy.cloud_recommend": "Cloud:", "comfy.your_workflows": "Your Workflows", "comfy.refresh_workflows": n(910), "comfy.queue_progress": "(Queue:{{queueSize}}) {{progress}}% {{executingNodeTitle}}...", "comfy.save": "Save", "comfy.refresh": n(1989), "comfy.stop_cancel_all": n(1538), "comfy.stop_auto_run": "Stop auto run", "comfy.start_auto_run": "Start auto run", "comfy.run": n(2377), "comfy.back": n(2700), "comfy.uploading": n(2112), "http.404": n(815), "http.401": n(643), "http.403": "Forbidden (403)", "http.408": n(1453), "http.500": n(2631), "http.501": "Not implemented (501)", "http.502": "Gateway error (502)", "http.503": n(2648), "http.504": n(2424), "http.unknown": n(1207), "runninghub.get_apikey": n(2242), "runninghub.apikey_placeholder": n(1516), "runninghub.app_id": n(2464), "runninghub.webapp_id_placeholder": n(1093), "runninghub.open_app": n(2037), "runninghub.execute": n(2594), "runninghub.rh_coins": "RH Coins:", "runninghub.current_tasks": n(1044), "runninghub.status.waiting": n(501), "runninghub.status.running": n(1445), "runninghub.status.failed": n(1398), "runninghub.status.success": "Success", "image.auto_refetch": n(1827), "runninghub.error.get_result_failed": n(2152), "runninghub.error.task_failed": n(780), "runninghub.error.task_incomplete": "Task incomplete, current status: {{status}}", "replicate.get_apikey": n(1831), "replicate.apikey_placeholder": n(2379), "replicate.execute": n(2594), "replicate.model_placeholder": n(2583), "liblib.get_apikey": "How to get APIKey and API Secret", "liblib.execute": "Execute", "common.close": n(1692), "common.save_and_run": n(1103), "common.loading": "Loading...", "common.error": n(2552), "common.success": n(2325), "common.cancel": n(2339), "common.confirm": n(645), "common.options": "Options", "common.options_separator": "=== Options ===", webviewInForeground: "PS shortcuts may be blocked by plugin...", webviewInForeground2: n(1555), "auth.login_success": n(534), "auth.username_label": n(2073), "auth.email_label": n(1097), "auth.logout": n(1566), "auth.login_required": "Please login to use the plugin", "image.send.select_position": n(1104), "image.send.sending": n(2737), "image.layer.new": n(2223), "image.layer.current": n(722), "image.layer.fit_to_current": n(806), "image.layer.fit_to_selection": n(2329), "image.layer.fit_to_canvas": n(1617), "image.shortcut_auth_required": n(2234), "image.shortcut_focus_required": n(2238), "image.get.select_image": n(680), "image.get.entire_canvas": "Entire Canvas", "image.get.canvas": n(566), "image.get.current_layer": n(722), "image.get.current_layer_bounds": "Current layer bounds only", "image.get.selection_bounds": n(1839), "image.get.canvas_bounds": n(1531), "image.crop_by_selection": n(648), "image.limit_size": n(1580), "image.crop.none": n(2009), "image.crop.inpaint": "Inpaint (reverse crop)", "image.crop.outpaint": n(1225), "mask.get.select_mask": n(1485), "mask.selection": n(1622), "mask.current_layer_bounds": n(2346), "mask.all": n(2693), "mask.selection_exclude": n(609), "mask.current_layer_exclude": "Exclude current layer", "mask.empty": n(2491), "document {{0}} not found": n(712), "create document for preview": "Create document for preview", "resize document for preview": "Resize document for preview", "create document for sent images": n(1262), "show sent images": n(857), "create layer failed": n(937), "layer not found {{0}}": n(2320), "layer not found: {{0}}": n(843), "layer {{0}} is not a group": "Layer {{0}} is not a group", "no linked layer for {{0}}": n(2683), "no first related layer in {{0}}": n(565), "merge group failed": n(1578), "get content of layer {{0}}": n(2378), "get layer info": n(1079), "get_layer_info: layer_identify required": n(1543), "get pixel of {{0}} failed": n(1056), "get selection failed": n(515), "invalid name: {{0}}": n(2640), "desire bounds is null": "Desire bounds is null", "intersect or scaledDesire is null": "Intersect or scaledDesire is null", 'only layer kind "TEXT" is supported, invalid layer: {{0}}': n(2215), "select layer": n(2574), "run Photoshop Action": n(2519), "Action {{0}} not found": "Action {{0}} not found", "Action set {{0}} not found": "Action set {{0}} not found", "set text to layer": "Set text to layer", "ComfyManager not found, cannot reboot": n(955), "Failed to reboot ComfyUI": n(1239), "image.upload.from_ps": n(2008), "image.upload.from_disk": n(2176), "image.upload.clear": "Clear", "image.upload.uploading": n(753), "image.upload.no_images": n(725), "source.source": n(2154), "source.content": n(886), "source.boundary": n(1558), "source.mask": n(1438), "source.disk": n(1870), "source.remote": "Remote", "source.unknown": n(2030), "source.ps_image": "PS", "source.ps_mask": "PS", "source.canvas": n(566), "source.current_layer": n(2530), "source.selection": n(1622), "source.quality_percent": n(1475), "source.crop.positive": n(1448), "source.crop.negative": n(1550), "source.reverse": n(2489) }, g0 = (i) => typeof i === n(923), Gx = () => {
  const i = n;
  let e, t;
  const a = new Promise((x, r) => {
    e = x, t = r;
  });
  return a[i(1987)] = e, a[i(1656)] = t, a;
}, Ea = (i) => i == null ? "" : "" + i, Q2 = (i, e, t) => {
  i[n(1238)]((x) => {
    e[x] && (t[x] = e[x]);
  });
}, G2 = /###/g, Ca = (i) => i && i[n(2170)](n(2126)) > -1 ? i[n(2188)](G2, ".") : i, Ia = (i) => !i || g0(i), ee = (i, e, t) => {
  const a = n, x = g0(e) ? e[a(2248)](".") : e;
  let r = 0;
  for (; r < x.length - 1; ) {
    if (Ia(i)) return {};
    const s = Ca(x[r]);
    !i[s] && t && (i[s] = new t()), Object.prototype.hasOwnProperty[a(2518)](i, s) ? i = i[s] : i = {}, ++r;
  }
  return Ia(i) ? {} : { obj: i, k: Ca(x[r]) };
}, Ra = (i, e, t) => {
  const a = n, { obj: x, k: r } = ee(i, e, Object);
  if (x !== void 0 || e[a(1200)] === 1) {
    x[r] = t;
    return;
  }
  let s = e[e[a(1200)] - 1], o = e.slice(0, e.length - 1), c = ee(i, o, Object);
  for (; c[a(1600)] === void 0 && o.length; )
    s = o[o[a(1200)] - 1] + "." + s, o = o[a(2602)](0, o[a(1200)] - 1), c = ee(i, o, Object), c != null && c[a(1600)] && typeof c[a(1600)][c.k + "." + s] < "u" && (c.obj = void 0);
  c[a(1600)][c.k + "." + s] = t;
}, Y2 = (i, e, t, a) => {
  const x = n, { obj: r, k: s } = ee(i, e, Object);
  r[s] = r[s] || [], r[s][x(818)](t);
}, Re = (i, e) => {
  const t = n, { obj: a, k: x } = ee(i, e);
  if (a && Object.prototype[t(2452)][t(2518)](a, x))
    return a[x];
}, X2 = (i, e, t) => {
  const a = Re(i, t);
  return a !== void 0 ? a : Re(e, t);
}, fs = (i, e, t) => {
  const a = n;
  for (const x in e)
    x !== a(769) && x !== a(2331) && (x in i ? g0(i[x]) || i[x] instanceof String || g0(e[x]) || e[x] instanceof String ? t && (i[x] = e[x]) : fs(i[x], e[x], t) : i[x] = e[x]);
  return i;
}, Hx = (i) => i.replace(/[\-\[\]\/\{\}\(\)\*\+\?\.\\\^\$\|]/g, n(1669));
var _2 = { "&": n(1599), "<": "&lt;", ">": n(2347), '"': n(1744), "'": n(1591), "/": "&#x2F;" };
const xc = (i) => {
  const e = n;
  return g0(i) ? i[e(2188)](/[&<>"'\/]/g, (t) => _2[t]) : i;
};
class ec {
  constructor(e) {
    const t = n;
    this[t(2171)] = e, this[t(1190)] = /* @__PURE__ */ new Map(), this[t(2061)] = [];
  }
  [n(808)](e) {
    const t = n, a = this[t(1190)].get(e);
    if (a !== void 0) return a;
    const x = new RegExp(e);
    return this.regExpQueue[t(1200)] === this[t(2171)] && this.regExpMap[t(2653)](this[t(2061)][t(2621)]()), this[t(1190)][t(510)](e, x), this[t(2061)][t(818)](e), x;
  }
}
const tc = [" ", ",", "?", "!", ";"], rc = new ec(20), ac = (i, e, t) => {
  const a = n;
  e = e || "", t = t || "";
  const x = tc[a(893)]((o) => e.indexOf(o) < 0 && t[a(2170)](o) < 0);
  if (x[a(1200)] === 0) return !0;
  const r = rc[a(808)]("(" + x[a(2404)]((o) => o === "?" ? "\\?" : o).join("|") + ")");
  let s = !r[a(1313)](i);
  if (!s) {
    const o = i[a(2170)](t);
    o > 0 && !r[a(1313)](i[a(2311)](0, o)) && (s = !0);
  }
  return s;
}, Kt = (i, e, t = ".") => {
  const a = n;
  if (!i) return;
  if (i[e])
    return Object[a(1166)].hasOwnProperty[a(2518)](i, e) ? i[e] : void 0;
  const x = e[a(2248)](t);
  let r = i;
  for (let s = 0; s < x[a(1200)]; ) {
    if (!r || typeof r != "object") return;
    let o, c = "";
    for (let d = s; d < x[a(1200)]; ++d)
      if (d !== s && (c += t), c += x[d], o = r[c], o !== void 0) {
        if ([a(923), a(2074), a(958)][a(2170)](typeof o) > -1 && d < x[a(1200)] - 1) continue;
        s += d - s + 1;
        break;
      }
    r = o;
  }
  return r;
}, ae = (i) => i == null ? void 0 : i.replace("_", "-"), nc = { type: n(1077), log(i) {
  const e = n;
  this.output(e(816), i);
}, warn(i) {
  this[n(2528)]("warn", i);
}, error(i) {
  const e = n;
  this.output(e(2389), i);
}, output(i, e) {
  var t, a;
  (a = (t = console == null ? void 0 : console[i]) == null ? void 0 : t.apply) == null || a.call(t, console, e);
} };
class Fe {
  constructor(e, t = {}) {
    this[n(1717)](e, t);
  }
  [n(1717)](e, t = {}) {
    const a = n;
    this[a(2212)] = t[a(2212)] || a(2225), this[a(1077)] = e || nc, this[a(2687)] = t, this[a(855)] = t.debug;
  }
  log(...e) {
    const t = n;
    return this[t(1152)](e, t(816), "", !0);
  }
  [n(1808)](...e) {
    const t = n;
    return this[t(1152)](e, t(1808), "", !0);
  }
  [n(2389)](...e) {
    return this.forward(e, "error", "");
  }
  [n(1154)](...e) {
    const t = n;
    return this.forward(e, "warn", t(1457), !0);
  }
  [n(1152)](e, t, a, x) {
    const r = n;
    return x && !this.debug ? null : (g0(e[0]) && (e[0] = "" + a + this.prefix + " " + e[0]), this[r(1077)][t](e));
  }
  [n(1108)](e) {
    const t = n;
    return new Fe(this[t(1077)], { prefix: this.prefix + ":" + e + ":", ...this[t(2687)] });
  }
  clone(e) {
    const t = n;
    return e = e || this[t(2687)], e[t(2212)] = e.prefix || this[t(2212)], new Fe(this[t(1077)], e);
  }
}
var lx = new Fe();
class je {
  constructor() {
    this.observers = {};
  }
  on(e, t) {
    const a = n;
    return e[a(2248)](" ")[a(1238)]((x) => {
      const r = a;
      this[r(2201)][x] || (this[r(2201)][x] = /* @__PURE__ */ new Map());
      const s = this[r(2201)][x].get(t) || 0;
      this[r(2201)][x][r(510)](t, s + 1);
    }), this;
  }
  [n(1298)](e, t) {
    const a = n;
    if (this[a(2201)][e]) {
      if (!t) {
        delete this[a(2201)][e];
        return;
      }
      this[a(2201)][e][a(2653)](t);
    }
  }
  [n(1598)](e, ...t) {
    const a = n;
    this.observers[e] && Array[a(781)](this[a(2201)][e][a(586)]())[a(1238)](([r, s]) => {
      for (let o = 0; o < s; o++)
        r(...t);
    }), this.observers["*"] && Array[a(781)](this[a(2201)]["*"].entries())[a(1238)](([r, s]) => {
      const o = a;
      for (let c = 0; c < s; c++)
        r[o(1364)](r, [e, ...t]);
    });
  }
}
class Fa extends je {
  constructor(e, t = { ns: [n(1224)], defaultNS: n(1224) }) {
    const a = n;
    super(), this.data = e || {}, this[a(2687)] = t, this[a(2687)][a(1700)] === void 0 && (this.options[a(1700)] = "."), this[a(2687)][a(1367)] === void 0 && (this.options[a(1367)] = !0);
  }
  [n(1206)](e) {
    const t = n;
    this[t(2687)].ns.indexOf(e) < 0 && this[t(2687)].ns[t(818)](e);
  }
  [n(940)](e) {
    const t = n, a = this.options.ns.indexOf(e);
    a > -1 && this.options.ns[t(1065)](a, 1);
  }
  [n(2505)](e, t, a, x = {}) {
    var u, f;
    const r = n, s = x[r(1700)] !== void 0 ? x.keySeparator : this[r(2687)].keySeparator, o = x[r(1367)] !== void 0 ? x[r(1367)] : this[r(2687)][r(1367)];
    let c;
    e[r(2170)](".") > -1 ? c = e[r(2248)](".") : (c = [e, t], a && (Array[r(2344)](a) ? c.push(...a) : g0(a) && s ? c[r(818)](...a[r(2248)](s)) : c[r(818)](a)));
    const d = Re(this[r(726)], c);
    return !d && !t && !a && e.indexOf(".") > -1 && (e = c[0], t = c[1], a = c.slice(2)[r(2573)](".")), d || !o || !g0(a) ? d : Kt((f = (u = this[r(726)]) == null ? void 0 : u[e]) == null ? void 0 : f[t], a, s);
  }
  addResource(e, t, a, x, r = { silent: !1 }) {
    const s = n, o = r[s(1700)] !== void 0 ? r.keySeparator : this[s(2687)][s(1700)];
    let c = [e, t];
    a && (c = c.concat(o ? a[s(2248)](o) : a)), e[s(2170)](".") > -1 && (c = e[s(2248)]("."), x = t, t = c[1]), this[s(1206)](t), Ra(this[s(726)], c, x), r[s(2217)] || this.emit(s(1650), e, t, a, x);
  }
  [n(2671)](e, t, a, x = { silent: !1 }) {
    const r = n;
    for (const s in a)
      (g0(a[s]) || Array[r(2344)](a[s])) && this[r(2267)](e, t, s, a[s], { silent: !0 });
    x[r(2217)] || this[r(1598)](r(1650), e, t, a);
  }
  [n(2556)](e, t, a, x, r, s = { silent: !1, skipCopy: !1 }) {
    const o = n;
    let c = [e, t];
    e[o(2170)](".") > -1 && (c = e[o(2248)]("."), x = a, a = t, t = c[1]), this.addNamespaces(t);
    let d = Re(this[o(726)], c) || {};
    s[o(1992)] || (a = JSON[o(2156)](JSON[o(2301)](a))), x ? fs(d, a, r) : d = { ...d, ...a }, Ra(this[o(726)], c, d), s.silent || this[o(1598)](o(1650), e, t, a);
  }
  removeResourceBundle(e, t) {
    const a = n;
    this.hasResourceBundle(e, t) && delete this[a(726)][e][t], this[a(940)](t), this[a(1598)](a(2263), e, t);
  }
  [n(1760)](e, t) {
    return this[n(2505)](e, t) !== void 0;
  }
  [n(1645)](e, t) {
    const a = n;
    return t || (t = this[a(2687)].defaultNS), this[a(2505)](e, t);
  }
  [n(2338)](e) {
    return this.data[e];
  }
  [n(1647)](e) {
    const t = n, a = this[t(2338)](e);
    return !!(a && Object[t(2278)](a) || [])[t(714)]((r) => a[r] && Object[t(2278)](a[r])[t(1200)] > 0);
  }
  toJSON() {
    return this[n(726)];
  }
}
var ls = { processors: {}, addPostProcessor(i) {
  const e = n;
  this[e(743)][i[e(2200)]] = i;
}, handle(i, e, t, a, x) {
  const r = n;
  return i[r(1238)]((s) => {
    var c;
    e = ((c = this[r(743)][s]) == null ? void 0 : c.process(e, t, a, x)) ?? e;
  }), e;
} };
const Na = {}, qa = (i) => !g0(i) && typeof i !== n(958) && typeof i !== n(2074);
class Ne extends je {
  constructor(e, t = {}) {
    const a = n;
    super(), Q2([a(1686), a(1539), a(1535), a(2059), a(1058), a(1255), a(2305)], e, this), this[a(2687)] = t, this[a(2687)][a(1700)] === void 0 && (this[a(2687)][a(1700)] = "."), this[a(1077)] = lx[a(1108)](a(1003));
  }
  changeLanguage(e) {
    const t = n;
    e && (this[t(711)] = e);
  }
  [n(540)](e, t = { interpolation: {} }) {
    const a = { ...t };
    if (e == null) return !1;
    const x = this.resolve(e, a);
    return (x == null ? void 0 : x.res) !== void 0;
  }
  [n(1883)](e, t) {
    const a = n;
    let x = t.nsSeparator !== void 0 ? t[a(1683)] : this[a(2687)].nsSeparator;
    x === void 0 && (x = ":");
    const r = t[a(1700)] !== void 0 ? t.keySeparator : this[a(2687)][a(1700)];
    let s = t.ns || this[a(2687)][a(2272)] || [];
    const o = x && e[a(2170)](x) > -1, c = !this[a(2687)].userDefinedKeySeparator && !t[a(1700)] && !this.options[a(1893)] && !t[a(1683)] && !ac(e, x, r);
    if (o && !c) {
      const d = e[a(799)](this[a(2059)][a(2543)]);
      if (d && d[a(1200)] > 0) return { key: e, namespaces: g0(s) ? [s] : s };
      const u = e.split(x);
      (x !== r || x === r && this[a(2687)].ns[a(2170)](u[0]) > -1) && (s = u[a(2621)]()), e = u.join(r);
    }
    return { key: e, namespaces: g0(s) ? [s] : s };
  }
  [n(907)](e, t, a) {
    const x = n;
    let r = typeof t === x(2437) ? { ...t } : t;
    if (typeof r !== x(2437) && this[x(2687)][x(2422)] && (r = this[x(2687)][x(2422)](arguments)), typeof options === x(2437) && (r = { ...r }), r || (r = {}), e == null) return "";
    Array.isArray(e) || (e = [String(e)]);
    const s = r.returnDetails !== void 0 ? r.returnDetails : this[x(2687)][x(2461)], o = r.keySeparator !== void 0 ? r[x(1700)] : this.options[x(1700)], { key: c, namespaces: d } = this[x(1883)](e[e.length - 1], r), u = d[d[x(1200)] - 1];
    let f = r[x(1683)] !== void 0 ? r[x(1683)] : this[x(2687)][x(1683)];
    f === void 0 && (f = ":");
    const l = r[x(1294)] || this[x(711)], g = r.appendNamespaceToCIMode || this[x(2687)][x(1707)];
    if ((l == null ? void 0 : l[x(1466)]()) === x(2297))
      return g ? s ? { res: "" + u + f + c, usedKey: c, exactUsedKey: c, usedLng: l, usedNS: u, usedParams: this[x(884)](r) } : "" + u + f + c : s ? { res: c, usedKey: c, exactUsedKey: c, usedLng: l, usedNS: u, usedParams: this[x(884)](r) } : c;
    const h = this[x(1987)](e, r);
    let m = h == null ? void 0 : h[x(2619)];
    const y = (h == null ? void 0 : h.usedKey) || c, w = (h == null ? void 0 : h.exactUsedKey) || c, S = [x(1799), "[object Function]", "[object RegExp]"], R = r[x(1422)] !== void 0 ? r[x(1422)] : this.options.joinArrays, A = !this[x(1255)] || this[x(1255)].handleAsObject, C = r[x(569)] !== void 0 && !g0(r[x(569)]), P = Ne[x(2596)](r), E = C ? this[x(1535)][x(1523)](l, r[x(569)], r) : "", D = r[x(2644)] && C ? this[x(1535)].getSuffix(l, r.count, { ordinal: !1 }) : "", j = C && !r[x(2644)] && r[x(569)] === 0, M = j && r["defaultValue" + this[x(2687)].pluralSeparator + x(1472)] || r[x(2303) + E] || r[x(2303) + D] || r[x(2303)];
    let F = m;
    A && !m && P && (F = M);
    const N = qa(F), U = Object[x(1166)][x(879)][x(1364)](F);
    if (A && F && N && S[x(2170)](U) < 0 && !(g0(R) && Array.isArray(F))) {
      if (!r[x(1671)] && !this[x(2687)][x(1671)]) {
        !this[x(2687)][x(2101)] && this[x(1077)][x(1808)]("accessing an object - but returnObjects options is not enabled!");
        const $ = this[x(2687)].returnedObjectHandler ? this[x(2687)][x(2101)](y, F, { ...r, ns: d }) : x(1521) + c + " (" + this[x(711)] + x(898);
        return s ? (h[x(2619)] = $, h[x(2317)] = this[x(884)](r), h) : $;
      }
      if (o) {
        const $ = Array[x(2344)](F), V = $ ? [] : {}, J = $ ? w : y;
        for (const s0 in F)
          if (Object[x(1166)][x(2452)][x(2518)](F, s0)) {
            const o0 = "" + J + o + s0;
            P && !m ? V[s0] = this[x(907)](o0, { ...r, defaultValue: qa(M) ? M[s0] : void 0, joinArrays: !1, ns: d }) : V[s0] = this[x(907)](o0, { ...r, joinArrays: !1, ns: d }), V[s0] === o0 && (V[s0] = F[s0]);
          }
        m = V;
      }
    } else if (A && g0(R) && Array[x(2344)](m))
      m = m[x(2573)](R), m && (m = this.extendTranslation(m, e, r, a));
    else {
      let $ = !1, V = !1;
      !this[x(2666)](m) && P && ($ = !0, m = M), !this.isValidLookup(m) && (V = !0, m = c);
      const J = r[x(669)] || this[x(2687)][x(669)], s0 = J && V ? void 0 : m, o0 = P && M !== m && this[x(2687)][x(1318)];
      if (V || $ || o0) {
        if (this[x(1077)][x(816)](o0 ? "updateKey" : x(1416), l, u, c, o0 ? M : m), o) {
          const w0 = this[x(1987)](c, { ...r, keySeparator: !1 });
          w0 && w0[x(2619)] && this[x(1077)][x(1808)]("Seems the loaded translations were in flat JSON format instead of nested. Either set keySeparator: false on init or make sure your translations are published in nested format.");
        }
        let u0 = [];
        const a0 = this[x(1539)][x(2650)](this.options[x(2306)], r[x(1294)] || this[x(711)]);
        if (this.options[x(789)] === x(2580) && a0 && a0[0]) for (let w0 = 0; w0 < a0[x(1200)]; w0++)
          u0[x(818)](a0[w0]);
        else this.options[x(789)] === x(1135) ? u0 = this.languageUtils[x(2658)](r[x(1294)] || this[x(711)]) : u0[x(818)](r[x(1294)] || this[x(711)]);
        const f0 = (w0, m0, D0) => {
          var T;
          const E0 = x, J0 = P && D0 !== m ? D0 : s0;
          this[E0(2687)][E0(1829)] ? this.options[E0(1829)](w0, u, m0, J0, o0, r) : (T = this[E0(1058)]) != null && T[E0(552)] && this[E0(1058)][E0(552)](w0, u, m0, J0, o0, r), this[E0(1598)]("missingKey", w0, u, m0, m);
        };
        this[x(2687)][x(552)] && (this.options[x(2726)] && C ? u0[x(1238)]((w0) => {
          const m0 = x, D0 = this[m0(1535)][m0(1353)](w0, r);
          j && r[m0(2303) + this[m0(2687)][m0(1096)] + m0(1472)] && D0[m0(2170)](this[m0(2687)][m0(1096)] + m0(1472)) < 0 && D0[m0(818)](this[m0(2687)][m0(1096)] + m0(1472)), D0[m0(1238)]((E0) => {
            const J0 = m0;
            f0([w0], c + E0, r[J0(2303) + E0] || M);
          });
        }) : f0(u0, c, M));
      }
      m = this[x(494)](m, e, r, h, a), V && m === c && this[x(2687)][x(1146)] && (m = "" + u + f + c), (V || $) && this[x(2687)][x(985)] && (m = this[x(2687)][x(985)](this[x(2687)][x(1146)] ? "" + u + f + c : c, $ ? m : void 0, r));
    }
    return s ? (h[x(2619)] = m, h.usedParams = this[x(884)](r), h) : m;
  }
  [n(494)](e, t, a, x, r) {
    var d, u;
    const s = n;
    if ((d = this[s(1255)]) != null && d[s(2156)]) e = this.i18nFormat.parse(e, { ...this[s(2687)][s(2435)].defaultVariables, ...a }, a.lng || this[s(711)] || x[s(1804)], x[s(653)], x[s(956)], { resolved: x });
    else if (!a[s(1202)]) {
      a[s(2435)] && this[s(2059)][s(1717)]({ ...a, interpolation: { ...this[s(2687)][s(2435)], ...a[s(2435)] } });
      const f = g0(e) && (((u = a == null ? void 0 : a[s(2435)]) == null ? void 0 : u[s(2466)]) !== void 0 ? a[s(2435)][s(2466)] : this[s(2687)][s(2435)].skipOnVariables);
      let l;
      if (f) {
        const h = e[s(799)](this[s(2059)][s(2543)]);
        l = h && h[s(1200)];
      }
      let g = a[s(2188)] && !g0(a.replace) ? a[s(2188)] : a;
      if (this[s(2687)][s(2435)][s(1986)] && (g = { ...this[s(2687)][s(2435)][s(1986)], ...g }), e = this[s(2059)][s(499)](e, g, a[s(1294)] || this[s(711)] || x.usedLng, a), f) {
        const h = e[s(799)](this[s(2059)].nestingRegexp), m = h && h[s(1200)];
        l < m && (a[s(2467)] = !1);
      }
      !a[s(1294)] && x && x[s(2619)] && (a.lng = this.language || x.usedLng), a.nest !== !1 && (e = this[s(2059)].nest(e, (...h) => {
        const m = s;
        return (r == null ? void 0 : r[0]) === h[0] && !a[m(1519)] ? (this[m(1077)][m(1808)]("It seems you are nesting recursively key: " + h[0] + " in key: " + t[0]), null) : this.translate(...h, t);
      }, a)), a[s(2435)] && this[s(2059)][s(717)]();
    }
    const o = a[s(1477)] || this.options[s(1477)], c = g0(o) ? [o] : o;
    return e != null && (c != null && c[s(1200)]) && a[s(1495)] !== !1 && (e = ls[s(2048)](c, e, t, this[s(2687)] && this[s(2687)][s(2307)] ? { i18nResolved: { ...x, usedParams: this[s(884)](a) }, ...a } : a, this)), e;
  }
  [n(1987)](e, t = {}) {
    const a = n;
    let x, r, s, o, c;
    return g0(e) && (e = [e]), e[a(1238)]((d) => {
      const u = a;
      if (this[u(2666)](x)) return;
      const f = this[u(1883)](d, t), l = f[u(1232)];
      r = l;
      let g = f.namespaces;
      this.options.fallbackNS && (g = g[u(2699)](this[u(2687)][u(615)]));
      const h = t[u(569)] !== void 0 && !g0(t[u(569)]), m = h && !t[u(2644)] && t[u(569)] === 0, y = t[u(1519)] !== void 0 && (g0(t[u(1519)]) || typeof t.context == "number") && t.context !== "", w = t[u(1369)] ? t[u(1369)] : this.languageUtils[u(2658)](t[u(1294)] || this.language, t[u(2306)]);
      g[u(1238)]((S) => {
        var A, C;
        const R = u;
        this.isValidLookup(x) || (c = S, !Na[w[0] + "-" + S] && ((A = this[R(2305)]) != null && A[R(870)]) && !((C = this.utils) != null && C[R(870)](c)) && (Na[w[0] + "-" + S] = !0, this[R(1077)][R(1808)](R(1161) + r + R(1866) + w[R(2573)](", ") + R(2652) + c + R(2116), "This means something IS WRONG in your setup. You access the t function before i18next.init / i18next.loadNamespace / i18next.changeLanguage was done. Wait for the callback or Promise to resolve before accessing it!!!")), w[R(1238)]((P) => {
          var M;
          const E = R;
          if (this[E(2666)](x)) return;
          o = P;
          const D = [l];
          if ((M = this[E(1255)]) != null && M[E(2395)]) this[E(1255)][E(2395)](D, l, P, S, t);
          else {
            let F;
            h && (F = this.pluralResolver[E(1523)](P, t[E(569)], t));
            const N = this.options[E(1096)] + E(1472), U = this[E(2687)][E(1096)] + E(2644) + this[E(2687)].pluralSeparator;
            if (h && (D[E(818)](l + F), t[E(2644)] && F[E(2170)](U) === 0 && D[E(818)](l + F[E(2188)](U, this[E(2687)][E(1096)])), m && D[E(818)](l + N)), y) {
              const $ = "" + l + this[E(2687)][E(810)] + t[E(1519)];
              D[E(818)]($), h && (D.push($ + F), t[E(2644)] && F.indexOf(U) === 0 && D[E(818)]($ + F.replace(U, this[E(2687)][E(1096)])), m && D.push($ + N));
            }
          }
          let j;
          for (; j = D[E(2087)](); )
            !this[E(2666)](x) && (s = j, x = this.getResource(P, S, j, t));
        }));
      });
    }), { res: x, usedKey: r, exactUsedKey: s, usedLng: o, usedNS: c };
  }
  [n(2666)](e) {
    return e !== void 0 && !(!this[n(2687)].returnNull && e === null) && !(!this.options.returnEmptyString && e === "");
  }
  [n(2505)](e, t, a, x = {}) {
    var s;
    const r = n;
    return (s = this.i18nFormat) != null && s[r(2505)] ? this[r(1255)][r(2505)](e, t, a, x) : this[r(1686)][r(2505)](e, t, a, x);
  }
  [n(884)](e = {}) {
    const t = n, a = ["defaultValue", t(2644), t(1519), "replace", t(1294), "lngs", "fallbackLng", "ns", t(1700), "nsSeparator", t(1671), t(2461), t(1422), t(1477), t(2435)], x = e.replace && !g0(e.replace);
    let r = x ? e[t(2188)] : e;
    if (x && typeof e[t(569)] !== t(2634) && (r[t(569)] = e.count), this[t(2687)].interpolation.defaultVariables && (r = { ...this[t(2687)][t(2435)][t(1986)], ...r }), !x) {
      r = { ...r };
      for (const s of a)
        delete r[s];
    }
    return r;
  }
  static hasDefaultValue(e) {
    const t = n, a = t(2303);
    for (const x in e)
      if (Object[t(1166)][t(2452)][t(2518)](e, x) && a === x.substring(0, a[t(1200)]) && e[x] !== void 0) return !0;
    return !1;
  }
}
class Oa {
  constructor(e) {
    const t = n;
    this[t(2687)] = e, this[t(1062)] = this[t(2687)].supportedLngs || !1, this[t(1077)] = lx[t(1108)]("languageUtils");
  }
  [n(2326)](e) {
    const t = n;
    if (e = ae(e), !e || e[t(2170)]("-") < 0) return null;
    const a = e[t(2248)]("-");
    return a.length === 2 || (a[t(2087)](), a[a.length - 1][t(1466)]() === "x") ? null : this[t(1376)](a[t(2573)]("-"));
  }
  [n(882)](e) {
    const t = n;
    if (e = ae(e), !e || e[t(2170)]("-") < 0) return e;
    const a = e[t(2248)]("-");
    return this[t(1376)](a[0]);
  }
  formatLanguageCode(e) {
    const t = n;
    if (g0(e) && e[t(2170)]("-") > -1) {
      let a;
      try {
        a = Intl[t(1181)](e)[0];
      } catch {
      }
      return a && this.options[t(1265)] && (a = a[t(1466)]()), a || (this.options[t(1265)] ? e[t(1466)]() : e);
    }
    return this.options.cleanCode || this.options[t(1265)] ? e[t(1466)]() : e;
  }
  [n(1085)](e) {
    const t = n;
    return (this[t(2687)][t(657)] === t(1025) || this[t(2687)].nonExplicitSupportedLngs) && (e = this.getLanguagePartFromCode(e)), !this.supportedLngs || !this[t(1062)].length || this[t(1062)][t(2170)](e) > -1;
  }
  [n(875)](e) {
    const t = n;
    if (!e) return null;
    let a;
    return e[t(1238)]((x) => {
      const r = t;
      if (a) return;
      const s = this[r(1376)](x);
      (!this.options[r(1062)] || this[r(1085)](s)) && (a = s);
    }), !a && this[t(2687)][t(1062)] && e[t(1238)]((x) => {
      const r = t;
      if (a) return;
      const s = this.getScriptPartFromCode(x);
      if (this[r(1085)](s)) return a = s;
      const o = this.getLanguagePartFromCode(x);
      if (this[r(1085)](o)) return a = o;
      a = this[r(2687)][r(1062)].find((c) => {
        const d = r;
        if (c === o) return c;
        if (!(c[d(2170)]("-") < 0 && o.indexOf("-") < 0) && (c[d(2170)]("-") > 0 && o[d(2170)]("-") < 0 && c.substring(0, c[d(2170)]("-")) === o || c[d(2170)](o) === 0 && o[d(1200)] > 1))
          return c;
      });
    }), a || (a = this.getFallbackCodes(this.options[t(2306)])[0]), a;
  }
  [n(2650)](e, t) {
    const a = n;
    if (!e) return [];
    if (typeof e === a(1342) && (e = e(t)), g0(e) && (e = [e]), Array.isArray(e)) return e;
    if (!t) return e[a(1658)] || [];
    let x = e[t];
    return x || (x = e[this[a(2326)](t)]), x || (x = e[this[a(1376)](t)]), x || (x = e[this[a(882)](t)]), x || (x = e.default), x || [];
  }
  [n(2658)](e, t) {
    const a = n, x = this[a(2650)]((t === !1 ? [] : t) || this.options[a(2306)] || [], e), r = [], s = (o) => {
      const c = a;
      o && (this[c(1085)](o) ? r.push(o) : this.logger.warn("rejecting language code not found in supportedLngs: " + o));
    };
    return g0(e) && (e.indexOf("-") > -1 || e.indexOf("_") > -1) ? (this[a(2687)][a(657)] !== a(1025) && s(this[a(1376)](e)), this.options[a(657)] !== a(1025) && this[a(2687)][a(657)] !== a(2649) && s(this[a(2326)](e)), this[a(2687)].load !== "currentOnly" && s(this[a(882)](e))) : g0(e) && s(this[a(1376)](e)), x[a(1238)]((o) => {
      r[a(2170)](o) < 0 && s(this.formatLanguageCode(o));
    }), r;
  }
}
const Aa = { zero: 0, one: 1, two: 2, few: 3, many: 4, other: 5 }, Ta = { select: (i) => i === 1 ? n(1333) : "other", resolvedOptions: () => ({ pluralCategories: ["one", "other"] }) };
class sc {
  constructor(e, t = {}) {
    const a = n;
    this.languageUtils = e, this.options = t, this.logger = lx[a(1108)]("pluralResolver"), this[a(1075)] = {};
  }
  [n(2502)](e, t) {
    this.rules[e] = t;
  }
  [n(2142)]() {
    this.pluralRulesCache = {};
  }
  getRule(e, t = {}) {
    const a = n, x = ae(e === a(2064) ? "en" : e), r = t[a(2644)] ? "ordinal" : a(2199), s = JSON[a(2301)]({ cleanedCode: x, type: r });
    if (s in this[a(1075)]) return this[a(1075)][s];
    let o;
    try {
      o = new Intl[a(1450)](x, { type: r });
    } catch {
      if (!Intl) return this.logger[a(2389)]("No Intl support, please use an Intl polyfill!"), Ta;
      if (!e.match(/-|_/)) return Ta;
      const d = this[a(1539)][a(882)](e);
      o = this[a(1884)](d, t);
    }
    return this.pluralRulesCache[s] = o, o;
  }
  [n(1757)](e, t = {}) {
    const a = n;
    let x = this.getRule(e, t);
    return x || (x = this.getRule("dev", t)), (x == null ? void 0 : x[a(2749)]()[a(556)][a(1200)]) > 1;
  }
  getPluralFormsOfKey(e, t, a = {}) {
    const x = n;
    return this[x(1353)](e, a)[x(2404)]((r) => "" + t + r);
  }
  [n(1353)](e, t = {}) {
    const a = n;
    let x = this[a(1884)](e, t);
    return x || (x = this[a(1884)](a(2064), t)), x ? x.resolvedOptions()[a(556)][a(974)]((r, s) => Aa[r] - Aa[s]).map((r) => "" + this.options.prepend + (t[a(2644)] ? a(2644) + this.options[a(2062)] : "") + r) : [];
  }
  [n(1523)](e, t, a = {}) {
    const x = n, r = this[x(1884)](e, a);
    return r ? "" + this[x(2687)][x(2062)] + (a.ordinal ? x(2644) + this[x(2687)].prepend : "") + r.select(t) : (this[x(1077)][x(1808)](x(1402) + e), this[x(1523)](x(2064), t, a));
  }
}
const Da = (i, e, t, a = ".", x = !0) => {
  let r = X2(i, e, t);
  return !r && x && g0(t) && (r = Kt(i, t, a), r === void 0 && (r = Kt(e, t, a))), r;
}, Nt = (i) => i[n(2188)](/\$/g, n(795));
class ic {
  constructor(e = {}) {
    var a;
    const t = n;
    this[t(1077)] = lx[t(1108)]("interpolator"), this.options = e, this[t(822)] = ((a = e == null ? void 0 : e[t(2435)]) == null ? void 0 : a.format) || ((x) => x), this[t(1717)](e);
  }
  [n(1717)](e = {}) {
    const t = n;
    e[t(2435)] || (e[t(2435)] = { escapeValue: !0 });
    const { escape: a, escapeValue: x, useRawValueToEscape: r, prefix: s, prefixEscaped: o, suffix: c, suffixEscaped: d, formatSeparator: u, unescapeSuffix: f, unescapePrefix: l, nestingPrefix: g, nestingPrefixEscaped: h, nestingSuffix: m, nestingSuffixEscaped: y, nestingOptionsSeparator: w, maxReplaces: S, alwaysFormat: R } = e[t(2435)];
    this.escape = a !== void 0 ? a : xc, this[t(1247)] = x !== void 0 ? x : !0, this[t(1927)] = r !== void 0 ? r : !1, this[t(2212)] = s ? Hx(s) : o || "{{", this[t(1855)] = c ? Hx(c) : d || "}}", this[t(2268)] = u || ",", this.unescapePrefix = f ? "" : l || "-", this.unescapeSuffix = this.unescapePrefix ? "" : f || "", this.nestingPrefix = g ? Hx(g) : h || Hx(t(831)), this[t(1773)] = m ? Hx(m) : y || Hx(")"), this.nestingOptionsSeparator = w || ",", this[t(932)] = S || 1e3, this[t(607)] = R !== void 0 ? R : !1, this[t(1476)]();
  }
  [n(717)]() {
    const e = n;
    this.options && this[e(1717)](this[e(2687)]);
  }
  [n(1476)]() {
    const e = n, t = (a, x) => {
      const r = B;
      return (a == null ? void 0 : a[r(1411)]) === x ? (a.lastIndex = 0, a) : new RegExp(x, "g");
    };
    this[e(1178)] = t(this[e(1178)], this[e(2212)] + e(1810) + this[e(1855)]), this[e(2445)] = t(this[e(2445)], "" + this[e(2212)] + this[e(2315)] + e(1810) + this[e(864)] + this[e(1855)]), this.nestingRegexp = t(this.nestingRegexp, this[e(2450)] + e(1810) + this.nestingSuffix);
  }
  [n(499)](e, t, a, x) {
    var h;
    const r = n;
    let s, o, c;
    const d = this[r(2687)] && this[r(2687)].interpolation && this[r(2687)].interpolation[r(1986)] || {}, u = (m) => {
      const y = r;
      if (m.indexOf(this[y(2268)]) < 0) {
        const A = Da(t, d, m, this[y(2687)][y(1700)], this.options[y(1367)]);
        return this[y(607)] ? this.format(A, void 0, a, { ...x, ...t, interpolationkey: m }) : A;
      }
      const w = m[y(2248)](this.formatSeparator), S = w[y(2621)]()[y(2754)](), R = w[y(2573)](this[y(2268)]).trim();
      return this[y(822)](Da(t, d, S, this[y(2687)][y(1700)], this[y(2687)][y(1367)]), R, a, { ...x, ...t, interpolationkey: S });
    };
    this[r(1476)]();
    const f = (x == null ? void 0 : x[r(943)]) || this[r(2687)].missingInterpolationHandler, l = ((h = x == null ? void 0 : x.interpolation) == null ? void 0 : h[r(2466)]) !== void 0 ? x[r(2435)][r(2466)] : this[r(2687)][r(2435)][r(2466)];
    return [{ regex: this[r(2445)], safeValue: (m) => Nt(m) }, { regex: this[r(1178)], safeValue: (m) => this[r(1247)] ? Nt(this.escape(m)) : Nt(m) }][r(1238)]((m) => {
      const y = r;
      for (c = 0; s = m[y(1131)][y(2548)](e); ) {
        const w = s[1].trim();
        if (o = u(w), o === void 0)
          if (typeof f === y(1342)) {
            const R = f(e, s, x);
            o = g0(R) ? R : "";
          } else if (x && Object.prototype[y(2452)].call(x, w)) o = "";
          else if (l) {
            o = s[0];
            continue;
          } else this.logger[y(1808)](y(574) + w + y(1242) + e), o = "";
        else !g0(o) && !this[y(1927)] && (o = Ea(o));
        const S = m[y(2512)](o);
        if (e = e[y(2188)](s[0], S), l ? (m[y(1131)].lastIndex += o[y(1200)], m[y(1131)][y(654)] -= s[0].length) : m[y(1131)][y(654)] = 0, c++, c >= this[y(932)]) break;
      }
    }), e;
  }
  [n(2467)](e, t, a = {}) {
    const x = n;
    let r, s, o;
    const c = (d, u) => {
      const f = B, l = this.nestingOptionsSeparator;
      if (d[f(2170)](l) < 0) return d;
      const g = d.split(new RegExp(l + f(809)));
      let h = "{" + g[1];
      d = g[0], h = this[f(499)](h, o);
      const m = h[f(799)](/'/g), y = h[f(799)](/"/g);
      (((m == null ? void 0 : m[f(1200)]) ?? 0) % 2 === 0 && !y || y[f(1200)] % 2 !== 0) && (h = h[f(2188)](/'/g, '"'));
      try {
        o = JSON[f(2156)](h), u && (o = { ...u, ...o });
      } catch (w) {
        return this.logger.warn(f(2250) + d, w), "" + d + l + h;
      }
      return o[f(2303)] && o[f(2303)].indexOf(this[f(2212)]) > -1 && delete o[f(2303)], d;
    };
    for (; r = this[x(2543)][x(2548)](e); ) {
      let d = [];
      o = { ...a }, o = o[x(2188)] && !g0(o[x(2188)]) ? o[x(2188)] : o, o[x(1495)] = !1, delete o[x(2303)];
      let u = !1;
      if (r[0][x(2170)](this[x(2268)]) !== -1 && !/{.*}/[x(1313)](r[1])) {
        const f = r[1][x(2248)](this[x(2268)])[x(2404)]((l) => l.trim());
        r[1] = f[x(2621)](), d = f, u = !0;
      }
      if (s = t(c[x(2518)](this, r[1][x(2754)](), o), o), s && r[0] === e && !g0(s)) return s;
      g0(s) || (s = Ea(s)), !s && (this[x(1077)].warn(x(1296) + r[1] + x(1973) + e), s = ""), u && (s = d[x(2257)]((f, l) => this[x(822)](f, l, a[x(1294)], { ...a, interpolationkey: r[1][x(2754)]() }), s[x(2754)]())), e = e[x(2188)](r[0], s), this[x(1178)].lastIndex = 0;
    }
    return e;
  }
}
const oc = (i) => {
  const e = n;
  let t = i[e(1466)]()[e(2754)]();
  const a = {};
  if (i[e(2170)]("(") > -1) {
    const x = i[e(2248)]("(");
    t = x[0][e(1466)]()[e(2754)]();
    const r = x[1].substring(0, x[1][e(1200)] - 1);
    t === e(1391) && r.indexOf(":") < 0 ? a[e(1391)] || (a[e(1391)] = r.trim()) : t === e(2228) && r.indexOf(":") < 0 ? a.range || (a.range = r[e(2754)]()) : r.split(";")[e(1238)]((o) => {
      const c = e;
      if (o) {
        const [d, ...u] = o[c(2248)](":"), f = u[c(2573)](":")[c(2754)]()[c(2188)](/^'+|'+$/g, ""), l = d[c(2754)]();
        a[l] || (a[l] = f), f === c(1427) && (a[l] = !1), f === c(1271) && (a[l] = !0), isNaN(f) || (a[l] = parseInt(f, 10));
      }
    });
  }
  return { formatName: t, formatOptions: a };
}, ja = (i) => {
  const e = {};
  return (t, a, x) => {
    const r = B;
    let s = x;
    x && x.interpolationkey && x[r(1144)] && x[r(1144)][x[r(2575)]] && x[x[r(2575)]] && (s = { ...s, [x.interpolationkey]: void 0 });
    const o = a + JSON[r(2301)](s);
    let c = e[o];
    return !c && (c = i(ae(a), x), e[o] = c), c(t);
  };
}, cc = (i) => (e, t, a) => i(ae(t), a)(e);
class dc {
  constructor(e = {}) {
    const t = n;
    this[t(1077)] = lx[t(1108)](t(675)), this[t(2687)] = e, this[t(1717)](e);
  }
  [n(1717)](e, t = { interpolation: {} }) {
    const a = n;
    this[a(2268)] = t.interpolation.formatSeparator || ",";
    const x = t[a(1792)] ? ja : cc;
    this[a(1285)] = { number: x((r, s) => {
      const o = a, c = new Intl[o(2219)](r, { ...s });
      return (d) => c.format(d);
    }), currency: x((r, s) => {
      const o = a, c = new Intl[o(2219)](r, { ...s, style: o(1391) });
      return (d) => c[o(822)](d);
    }), datetime: x((r, s) => {
      const o = a, c = new Intl[o(2724)](r, { ...s });
      return (d) => c.format(d);
    }), relativetime: x((r, s) => {
      const o = a, c = new Intl.RelativeTimeFormat(r, { ...s });
      return (d) => c[o(822)](d, s[o(672)] || o(1020));
    }), list: x((r, s) => {
      const o = a, c = new Intl.ListFormat(r, { ...s });
      return (d) => c[o(822)](d);
    }) };
  }
  [n(2295)](e, t) {
    const a = n;
    this[a(1285)][e[a(1466)]()[a(2754)]()] = t;
  }
  [n(1061)](e, t) {
    const a = n;
    this[a(1285)][e[a(1466)]()[a(2754)]()] = ja(t);
  }
  format(e, t, a, x = {}) {
    const r = n, s = t[r(2248)](this[r(2268)]);
    if (s[r(1200)] > 1 && s[0][r(2170)]("(") > 1 && s[0].indexOf(")") < 0 && s.find((c) => c[r(2170)](")") > -1)) {
      const c = s.findIndex((d) => d[r(2170)](")") > -1);
      s[0] = [s[0], ...s.splice(1, c)][r(2573)](this[r(2268)]);
    }
    return s.reduce((c, d) => {
      var g;
      const u = r, { formatName: f, formatOptions: l } = oc(d);
      if (this[u(1285)][f]) {
        let h = c;
        try {
          const m = ((g = x == null ? void 0 : x[u(1144)]) == null ? void 0 : g[x.interpolationkey]) || {}, y = m[u(1008)] || m.lng || x[u(1008)] || x[u(1294)] || a;
          h = this[u(1285)][f](c, y, { ...l, ...x, ...m });
        } catch (m) {
          this[u(1077)].warn(m);
        }
        return h;
      } else this.logger[u(1808)](u(706) + f);
      return c;
    }, e);
  }
}
const uc = (i, e) => {
  const t = n;
  i.pending[e] !== void 0 && (delete i[t(1268)][e], i[t(917)]--);
};
class fc extends je {
  constructor(e, t, a, x = {}) {
    var s, o;
    const r = n;
    super(), this.backend = e, this[r(915)] = t, this.services = a, this[r(1539)] = a[r(1539)], this[r(2687)] = x, this[r(1077)] = lx[r(1108)](r(1058)), this[r(1316)] = [], this[r(2147)] = x[r(2147)] || 10, this[r(847)] = 0, this[r(2717)] = x[r(2717)] >= 0 ? x.maxRetries : 5, this[r(2488)] = x[r(2488)] >= 1 ? x[r(2488)] : 350, this.state = {}, this[r(576)] = [], (o = (s = this[r(942)]) == null ? void 0 : s.init) == null || o.call(s, a, x[r(942)], x);
  }
  queueLoad(e, t, a, x) {
    const r = n, s = {}, o = {}, c = {}, d = {};
    return e[r(1238)]((u) => {
      let f = !0;
      t.forEach((l) => {
        const g = B, h = u + "|" + l;
        !a[g(2496)] && this.store.hasResourceBundle(u, l) ? this[g(1430)][h] = 2 : this[g(1430)][h] < 0 || (this[g(1430)][h] === 1 ? o[h] === void 0 && (o[h] = !0) : (this[g(1430)][h] = 1, f = !1, o[h] === void 0 && (o[h] = !0), s[h] === void 0 && (s[h] = !0), d[l] === void 0 && (d[l] = !0)));
      }), f || (c[u] = !0);
    }), (Object[r(2278)](s)[r(1200)] || Object.keys(o)[r(1200)]) && this.queue[r(818)]({ pending: o, pendingCount: Object[r(2278)](o)[r(1200)], loaded: {}, errors: [], callback: x }), { toLoad: Object[r(2278)](s), pending: Object.keys(o), toLoadLanguages: Object[r(2278)](c), toLoadNamespaces: Object[r(2278)](d) };
  }
  loaded(e, t, a) {
    const x = n, r = e[x(2248)]("|"), s = r[0], o = r[1];
    t && this[x(1598)](x(2472), s, o, t), !t && a && this[x(915)][x(2556)](s, o, a, void 0, void 0, { skipCopy: !0 }), this[x(1430)][e] = t ? -1 : 2, t && a && (this.state[e] = 0);
    const c = {};
    this[x(576)][x(1238)]((d) => {
      const u = x;
      Y2(d[u(851)], [s], o), uc(d, e), t && d[u(1418)].push(t), d[u(917)] === 0 && !d[u(507)] && (Object[u(2278)](d[u(851)])[u(1238)]((f) => {
        const l = u;
        c[f] || (c[f] = {});
        const g = d[l(851)][f];
        g[l(1200)] && g.forEach((h) => {
          c[f][h] === void 0 && (c[f][h] = !0);
        });
      }), d[u(507)] = !0, d.errors[u(1200)] ? d[u(2356)](d[u(1418)]) : d.callback());
    }), this.emit(x(851), c), this[x(576)] = this[x(576)].filter((d) => !d[x(507)]);
  }
  [n(2216)](e, t, a, x = 0, r = this[n(2488)], s) {
    const o = n;
    if (!e[o(1200)]) return s(null, {});
    if (this[o(847)] >= this[o(2147)]) {
      this[o(1316)][o(818)]({ lng: e, ns: t, fcName: a, tried: x, wait: r, callback: s });
      return;
    }
    this[o(847)]++;
    const c = (u, f) => {
      const l = o;
      if (this[l(847)]--, this[l(1316)][l(1200)] > 0) {
        const g = this[l(1316)][l(2621)]();
        this[l(2216)](g[l(1294)], g.ns, g[l(1743)], g[l(1141)], g[l(2739)], g.callback);
      }
      if (u && f && x < this.maxRetries) {
        setTimeout(() => {
          const g = l;
          this[g(2216)][g(2518)](this, e, t, a, x + 1, r * 2, s);
        }, r);
        return;
      }
      s(u, f);
    }, d = this[o(942)][a][o(1571)](this[o(942)]);
    if (d[o(1200)] === 2) {
      try {
        const u = d(e, t);
        u && typeof u.then === o(1342) ? u[o(1413)]((f) => c(null, f))[o(641)](c) : c(null, u);
      } catch (u) {
        c(u);
      }
      return;
    }
    return d(e, t, c);
  }
  [n(803)](e, t, a = {}, x) {
    const r = n;
    if (!this.backend) return this[r(1077)][r(1808)](r(2276)), x && x();
    g0(e) && (e = this[r(1539)][r(2658)](e)), g0(t) && (t = [t]);
    const s = this[r(1905)](e, t, a, x);
    if (!s[r(2663)].length)
      return s[r(1268)][r(1200)] || x(), null;
    s[r(2663)][r(1238)]((o) => {
      this[r(1508)](o);
    });
  }
  [n(657)](e, t, a) {
    this[n(803)](e, t, {}, a);
  }
  reload(e, t, a) {
    this[n(803)](e, t, { reload: !0 }, a);
  }
  [n(1508)](e, t = "") {
    const a = n, x = e[a(2248)]("|"), r = x[0], s = x[1];
    this.read(r, s, a(2216), void 0, void 0, (o, c) => {
      const d = a;
      o && this[d(1077)][d(1808)](t + d(2469) + s + d(2656) + r + " failed", o), !o && c && this.logger[d(816)](t + d(2627) + s + " for language " + r, c), this[d(851)](e, o, c);
    });
  }
  [n(552)](e, t, a, x, r, s = {}, o = () => {
  }) {
    var d, u, f, l, g;
    const c = n;
    if ((u = (d = this[c(1235)]) == null ? void 0 : d[c(2305)]) != null && u[c(870)] && !((l = (f = this.services) == null ? void 0 : f.utils) != null && l[c(870)](t))) {
      this[c(1077)].warn(c(1277) + a + c(1410) + t + '" was not yet loaded', c(1919));
      return;
    }
    if (!(a == null || a === "")) {
      if ((g = this.backend) != null && g[c(1108)]) {
        const h = { ...s, isUpdate: r }, m = this.backend.create.bind(this[c(942)]);
        if (m.length < 6) try {
          let y;
          m[c(1200)] === 5 ? y = m(e, t, a, x, h) : y = m(e, t, a, x), y && typeof y[c(1413)] === c(1342) ? y[c(1413)]((w) => o(null, w))[c(641)](o) : o(null, y);
        } catch (y) {
          o(y);
        }
        else m(e, t, a, x, o, h);
      }
      !e || !e[0] || this[c(915)][c(2267)](e[0], t, a, x);
    }
  }
}
const Ma = () => ({ debug: !1, initAsync: !0, ns: ["translation"], defaultNS: [n(1224)], fallbackLng: [n(2064)], fallbackNS: !1, supportedLngs: !1, nonExplicitSupportedLngs: !1, load: "all", preload: !1, simplifyPluralSuffix: !0, keySeparator: ".", nsSeparator: ":", pluralSeparator: "_", contextSeparator: "_", partialBundledLanguages: !1, saveMissing: !1, updateMissing: !1, saveMissingTo: n(2580), saveMissingPlurals: !0, missingKeyHandler: !1, missingInterpolationHandler: !1, postProcess: !1, postProcessPassResolved: !1, returnNull: !1, returnEmptyString: !0, returnObjects: !1, joinArrays: !1, returnedObjectHandler: !1, parseMissingKeyHandler: !1, appendNamespaceToMissingKey: !1, appendNamespaceToCIMode: !1, overloadTranslationOptionHandler: (i) => {
  const e = n;
  let t = {};
  if (typeof i[1] === e(2437) && (t = i[1]), g0(i[1]) && (t[e(2303)] = i[1]), g0(i[2]) && (t[e(1557)] = i[2]), typeof i[2] == "object" || typeof i[3] == "object") {
    const a = i[3] || i[2];
    Object[e(2278)](a)[e(1238)]((x) => {
      t[x] = a[x];
    });
  }
  return t;
}, interpolation: { escapeValue: !0, format: (i) => i, prefix: "{{", suffix: "}}", formatSeparator: ",", unescapePrefix: "-", nestingPrefix: n(831), nestingSuffix: ")", nestingOptionsSeparator: ",", maxReplaces: 1e3, skipOnVariables: !0 }, cacheInBuiltFormats: !0 }), La = (i) => {
  var t, a;
  const e = n;
  return g0(i.ns) && (i.ns = [i.ns]), g0(i.fallbackLng) && (i.fallbackLng = [i[e(2306)]]), g0(i[e(615)]) && (i[e(615)] = [i.fallbackNS]), ((a = (t = i[e(1062)]) == null ? void 0 : t[e(2170)]) == null ? void 0 : a.call(t, e(2297))) < 0 && (i[e(1062)] = i[e(1062)].concat([e(2297)])), typeof i.initImmediate == "boolean" && (i.initAsync = i[e(2049)]), i;
}, le = () => {
}, lc = (i) => {
  const e = n;
  Object[e(1528)](Object[e(2001)](i))[e(1238)]((a) => {
    const x = e;
    typeof i[a] == "function" && (i[a] = i[a][x(1571)](i));
  });
};
class ne extends je {
  constructor(e = {}, t) {
    const a = n;
    if (super(), this.options = La(e), this.services = {}, this.logger = lx, this[a(1133)] = { external: [] }, lc(this), t && !this[a(845)] && !e.isClone) {
      if (!this[a(2687)][a(1314)]) return this[a(1717)](e, t), this;
      setTimeout(() => {
        this[a(1717)](e, t);
      }, 0);
    }
  }
  [n(1717)](e = {}, t) {
    const a = n;
    this[a(1930)] = !0, typeof e === a(1342) && (t = e, e = {}), e[a(2272)] == null && e.ns && (g0(e.ns) ? e[a(2272)] = e.ns : e.ns[a(2170)](a(1224)) < 0 && (e[a(2272)] = e.ns[0]));
    const x = Ma();
    this[a(2687)] = { ...x, ...this.options, ...La(e) }, this.options.interpolation = { ...x[a(2435)], ...this.options.interpolation }, e[a(1700)] !== void 0 && (this[a(2687)][a(1245)] = e[a(1700)]), e.nsSeparator !== void 0 && (this.options.userDefinedNsSeparator = e.nsSeparator);
    const r = (u) => {
      const f = a;
      return u ? typeof u === f(1342) ? new u() : u : null;
    };
    if (!this[a(2687)][a(1264)]) {
      this[a(1133)][a(1077)] ? lx[a(1717)](r(this[a(1133)][a(1077)]), this[a(2687)]) : lx.init(null, this[a(2687)]);
      let u;
      this.modules.formatter ? u = this[a(1133)][a(675)] : u = dc;
      const f = new Oa(this[a(2687)]);
      this[a(915)] = new Fa(this[a(2687)][a(1868)], this[a(2687)]);
      const l = this[a(1235)];
      l.logger = lx, l.resourceStore = this[a(915)], l[a(1539)] = f, l[a(1535)] = new sc(f, { prepend: this.options[a(1096)], simplifyPluralSuffix: this.options[a(737)] }), u && (!this[a(2687)].interpolation[a(822)] || this[a(2687)][a(2435)].format === x.interpolation[a(822)]) && (l[a(675)] = r(u), l[a(675)].init(l, this[a(2687)]), this[a(2687)].interpolation[a(822)] = l.formatter[a(822)][a(1571)](l.formatter)), l[a(2059)] = new ic(this[a(2687)]), l[a(2305)] = { hasLoadedNamespace: this.hasLoadedNamespace[a(1571)](this) }, l[a(1058)] = new fc(r(this.modules[a(942)]), l[a(1686)], l, this[a(2687)]), l[a(1058)].on("*", (g, ...h) => {
        this[a(1598)](g, ...h);
      }), this[a(1133)][a(2689)] && (l[a(2689)] = r(this[a(1133)][a(2689)]), l[a(2689)][a(1717)] && l[a(2689)][a(1717)](l, this.options[a(1825)], this[a(2687)])), this[a(1133)][a(1255)] && (l[a(1255)] = r(this[a(1133)][a(1255)]), l[a(1255)][a(1717)] && l.i18nFormat[a(1717)](this)), this.translator = new Ne(this.services, this[a(2687)]), this[a(1003)].on("*", (g, ...h) => {
        this[a(1598)](g, ...h);
      }), this[a(1133)][a(2359)].forEach((g) => {
        g[a(1717)] && g.init(this);
      });
    }
    if (this[a(822)] = this.options[a(2435)][a(822)], t || (t = le), this.options[a(2306)] && !this[a(1235)][a(2689)] && !this[a(2687)][a(1294)]) {
      const u = this[a(1235)][a(1539)][a(2650)](this[a(2687)].fallbackLng);
      u[a(1200)] > 0 && u[0] !== "dev" && (this[a(2687)][a(1294)] = u[0]);
    }
    !this.services[a(2689)] && !this[a(2687)][a(1294)] && this[a(1077)].warn(a(1012)), ["getResource", "hasResourceBundle", a(1645), "getDataByLanguage"][a(1238)]((u) => {
      this[u] = (...f) => this.store[u](...f);
    }), ["addResource", a(2671), a(2556), a(1078)][a(1238)]((u) => {
      this[u] = (...f) => (this.store[u](...f), this);
    });
    const c = Gx(), d = () => {
      const u = a, f = (l, g) => {
        const h = B;
        this[h(1930)] = !1, this.isInitialized && !this[h(1379)] && this.logger.warn(h(1609)), this[h(845)] = !0, this[h(2687)][h(1264)] || this[h(1077)].log(h(1116), this[h(2687)]), this[h(1598)](h(1116), this[h(2687)]), c.resolve(g), t(l, g);
      };
      if (this[u(2433)] && !this[u(845)]) return f(null, this.t[u(1571)](this));
      this[u(2392)](this[u(2687)][u(1294)], f);
    };
    return this[a(2687)][a(1868)] || !this[a(2687)][a(1314)] ? d() : setTimeout(d, 0), c;
  }
  loadResources(e, t = le) {
    var s, o;
    const a = n;
    let x = t;
    const r = g0(e) ? e : this[a(711)];
    if (typeof e === a(1342) && (x = e), !this.options.resources || this[a(2687)].partialBundledLanguages) {
      if ((r == null ? void 0 : r.toLowerCase()) === a(2297) && (!this[a(2687)][a(2033)] || this.options[a(2033)].length === 0)) return x();
      const c = [], d = (u) => {
        const f = a;
        if (!u || u === "cimode") return;
        this[f(1235)][f(1539)][f(2658)](u)[f(1238)]((g) => {
          const h = f;
          g !== h(2297) && c[h(2170)](g) < 0 && c[h(818)](g);
        });
      };
      r ? d(r) : this[a(1235)][a(1539)][a(2650)](this[a(2687)][a(2306)])[a(1238)]((f) => d(f)), (o = (s = this[a(2687)][a(2033)]) == null ? void 0 : s[a(1238)]) == null || o.call(s, (u) => d(u)), this[a(1235)][a(1058)][a(657)](c, this[a(2687)].ns, (u) => {
        const f = a;
        !u && !this[f(2041)] && this[f(711)] && this.setResolvedLanguage(this[f(711)]), x(u);
      });
    } else x(null);
  }
  [n(2667)](e, t, a) {
    const x = n, r = Gx();
    return typeof e === x(1342) && (a = e, e = void 0), typeof t === x(1342) && (a = t, t = void 0), e || (e = this[x(2433)]), t || (t = this[x(2687)].ns), a || (a = le), this[x(1235)][x(1058)][x(2496)](e, t, (s) => {
      r[x(1987)](), a(s);
    }), r;
  }
  [n(1912)](e) {
    const t = n;
    if (!e) throw new Error("You are passing an undefined module! Please check the object you are passing to i18next.use()");
    if (!e[t(2426)]) throw new Error(t(1063));
    return e[t(2426)] === "backend" && (this.modules[t(942)] = e), (e[t(2426)] === "logger" || e[t(816)] && e[t(1808)] && e[t(2389)]) && (this.modules[t(1077)] = e), e[t(2426)] === t(2689) && (this[t(1133)][t(2689)] = e), e[t(2426)] === t(1255) && (this[t(1133)][t(1255)] = e), e[t(2426)] === t(2441) && ls.addPostProcessor(e), e[t(2426)] === t(675) && (this[t(1133)][t(675)] = e), e[t(2426)] === t(2e3) && this[t(1133)][t(2359)][t(818)](e), this;
  }
  [n(2245)](e) {
    const t = n;
    if (!(!e || !this[t(2433)]) && !([t(2297), t(2064)][t(2170)](e) > -1)) {
      for (let a = 0; a < this[t(2433)].length; a++) {
        const x = this[t(2433)][a];
        if (!(["cimode", t(2064)][t(2170)](x) > -1) && this[t(915)][t(1647)](x)) {
          this[t(2041)] = x;
          break;
        }
      }
      !this[t(2041)] && this[t(2433)][t(2170)](e) < 0 && this[t(915)][t(1647)](e) && (this[t(2041)] = e, this[t(2433)][t(1885)](e));
    }
  }
  [n(2392)](e, t) {
    const a = n;
    this[a(973)] = e;
    const x = Gx();
    this.emit(a(1498), e);
    const r = (c) => {
      const d = a;
      this.language = c, this[d(2433)] = this[d(1235)].languageUtils[d(2658)](c), this[d(2041)] = void 0, this[d(2245)](c);
    }, s = (c, d) => {
      const u = a;
      d ? this[u(973)] === e && (r(d), this[u(1003)][u(2392)](d), this[u(973)] = void 0, this[u(1598)](u(1219), d), this.logger.log(u(1219), d)) : this.isLanguageChangingTo = void 0, x[u(1987)]((...f) => this.t(...f)), t && t(c, (...f) => this.t(...f));
    }, o = (c) => {
      var l, g;
      const d = a;
      !e && !c && this[d(1235)].languageDetector && (c = []);
      const u = g0(c) ? c : c && c[0], f = this[d(915)][d(1647)](u) ? u : this[d(1235)][d(1539)][d(875)](g0(c) ? [c] : c);
      f && (!this[d(711)] && r(f), this.translator[d(711)] || this[d(1003)][d(2392)](f), (g = (l = this[d(1235)][d(2689)]) == null ? void 0 : l[d(2550)]) == null || g.call(l, f)), this[d(2069)](f, (h) => {
        s(h, f);
      });
    };
    return !e && this.services[a(2689)] && !this[a(1235)].languageDetector[a(1721)] ? o(this[a(1235)].languageDetector.detect()) : !e && this.services[a(2689)] && this.services[a(2689)][a(1721)] ? this[a(1235)][a(2689)].detect.length === 0 ? this[a(1235)][a(2689)].detect().then(o) : this[a(1235)][a(2689)].detect(o) : o(e), x;
  }
  [n(1371)](e, t, a) {
    const x = n, r = (s, o, ...c) => {
      const d = B;
      let u;
      typeof o !== d(2437) ? u = this[d(2687)].overloadTranslationOptionHandler([s, o][d(2699)](c)) : u = { ...o }, u.lng = u.lng || r.lng, u[d(1369)] = u[d(1369)] || r.lngs, u.ns = u.ns || r.ns, u[d(872)] !== "" && (u[d(872)] = u.keyPrefix || a || r[d(872)]);
      const f = this.options[d(1700)] || ".";
      let l;
      return u[d(872)] && Array[d(2344)](s) ? l = s[d(2404)]((g) => "" + u[d(872)] + f + g) : l = u[d(872)] ? "" + u.keyPrefix + f + s : s, this.t(l, u);
    };
    return g0(e) ? r[x(1294)] = e : r[x(1369)] = e, r.ns = t, r[x(872)] = a, r;
  }
  t(...e) {
    var a;
    const t = n;
    return (a = this[t(1003)]) == null ? void 0 : a[t(907)](...e);
  }
  [n(540)](...e) {
    var a;
    return (a = this[n(1003)]) == null ? void 0 : a.exists(...e);
  }
  [n(829)](e) {
    const t = n;
    this[t(2687)][t(2272)] = e;
  }
  [n(870)](e, t = {}) {
    const a = n;
    if (!this.isInitialized) return this[a(1077)].warn("hasLoadedNamespace: i18next was not initialized", this[a(2433)]), !1;
    if (!this.languages || !this[a(2433)][a(1200)]) return this.logger[a(1808)]("hasLoadedNamespace: i18n.languages were undefined or empty", this[a(2433)]), !1;
    const x = t[a(1294)] || this[a(2041)] || this[a(2433)][0], r = this[a(2687)] ? this[a(2687)][a(2306)] : !1, s = this.languages[this[a(2433)].length - 1];
    if (x[a(1466)]() === a(2297)) return !0;
    const o = (c, d) => {
      const u = a, f = this[u(1235)][u(1058)][u(1430)][c + "|" + d];
      return f === -1 || f === 0 || f === 2;
    };
    if (t[a(2541)]) {
      const c = t[a(2541)](this, o);
      if (c !== void 0) return c;
    }
    return !!(this[a(1760)](x, e) || !this.services[a(1058)][a(942)] || this[a(2687)][a(1868)] && !this.options[a(544)] || o(x, e) && (!r || o(s, e)));
  }
  [n(1739)](e, t) {
    const a = n, x = Gx();
    return this.options.ns ? (g0(e) && (e = [e]), e[a(1238)]((r) => {
      const s = a;
      this[s(2687)].ns[s(2170)](r) < 0 && this[s(2687)].ns[s(818)](r);
    }), this.loadResources((r) => {
      x[a(1987)](), t && t(r);
    }), x) : (t && t(), Promise.resolve());
  }
  loadLanguages(e, t) {
    const a = n, x = Gx();
    g0(e) && (e = [e]);
    const r = this.options[a(2033)] || [], s = e.filter((o) => r[a(2170)](o) < 0 && this[a(1235)][a(1539)][a(1085)](o));
    return s[a(1200)] ? (this[a(2687)].preload = r.concat(s), this[a(2069)]((o) => {
      x[a(1987)](), t && t(o);
    }), x) : (t && t(), Promise[a(1987)]());
  }
  [n(897)](e) {
    var r, s;
    const t = n;
    if (e || (e = this.resolvedLanguage || (((r = this[t(2433)]) == null ? void 0 : r[t(1200)]) > 0 ? this[t(2433)][0] : this[t(711)])), !e) return t(2526);
    const a = ["ar", t(1363), t(775), t(1925), "xaa", t(2567), t(1946), "aao", t(2364), t(2072), t(744), t(949), t(1072), t(2559), t(1373), "adf", "ads", t(1468), t(1677), t(761), t(2164), "apc", t(2485), t(736), t(1835), t(2533), "ary", t(513), t(2091), "avl", t(1073), t(2251), t(1778), t(1083), t(2418), t(1071), "he", "iw", "ps", t(1299), t(1842), t(1212), t(1368), "prd", "ug", "ur", t(913), t(1649), t(2279), "ji", "yi", "hbo", t(2398), t(1241), "fa", t(2252), t(1572), t(700), t(1657), "dv", t(2459), t(969)], x = ((s = this[t(1235)]) == null ? void 0 : s[t(1539)]) || new Oa(Ma());
    return a[t(2170)](x[t(882)](e)) > -1 || e[t(1466)]()[t(2170)](t(2025)) > 1 ? t(2526) : t(2165);
  }
  static [n(662)](e = {}, t) {
    return new ne(e, t);
  }
  [n(1897)](e = {}, t = le) {
    const a = n, x = e.forkResourceStore;
    x && delete e[a(1849)];
    const r = { ...this[a(2687)], ...e, isClone: !0 }, s = new ne(r);
    if ((e.debug !== void 0 || e[a(2212)] !== void 0) && (s[a(1077)] = s[a(1077)][a(1408)](e)), ["store", a(1235), a(711)][a(1238)]((c) => {
      s[c] = this[c];
    }), s[a(1235)] = { ...this.services }, s[a(1235)][a(2305)] = { hasLoadedNamespace: s.hasLoadedNamespace[a(1571)](s) }, x) {
      const c = Object[a(2278)](this[a(915)].data)[a(2257)]((d, u) => {
        const f = a;
        return d[u] = { ...this[f(915)][f(726)][u] }, d[u] = Object[f(2278)](d[u])[f(2257)]((l, g) => (l[g] = { ...d[u][g] }, l), d[u]), d;
      }, {});
      s[a(915)] = new Fa(c, r), s[a(1235)][a(1686)] = s[a(915)];
    }
    return s.translator = new Ne(s.services, r), s[a(1003)].on("*", (c, ...d) => {
      s.emit(c, ...d);
    }), s.init(r, t), s[a(1003)].options = r, s[a(1003)][a(1058)][a(1235)][a(2305)] = { hasLoadedNamespace: s[a(870)][a(1571)](s) }, s;
  }
  [n(1390)]() {
    const e = n;
    return { options: this[e(2687)], store: this[e(915)], language: this[e(711)], languages: this.languages, resolvedLanguage: this[e(2041)] };
  }
}
const G0 = ne[n(662)]();
G0[n(662)] = ne.createInstance, G0.createInstance, G0[n(897)], G0.init, G0[n(2069)], G0.reloadResources, G0[n(1912)], G0.changeLanguage, G0.getFixedT, G0.t, G0[n(540)], G0.setDefaultNamespace, G0[n(870)], G0.loadNamespaces, G0[n(1149)];
function hc() {
  const i = n;
  if (typeof navigator !== i(2634) && navigator[i(711)]) return navigator[i(711)] === i(2160) ? i(2160) : i(2352);
  try {
    const e = typeof require < "u" ? require : void 0;
    if (e)
      return e("uxp").host[i(1548)][i(1817)]("zh") ? i(2160) : i(2352);
  } catch {
  }
  return i(2352);
}
let hs = hc();
const pc = { "zh-CN": {}, "en-US": {} };
function Jt(i) {
  const e = i === "zh-CN" ? K2 : J2, t = pc[i];
  return { ...e, ...t };
}
function mc() {
  return hs;
}
function Qt(i, e = {}) {
  const t = n;
  let x = Jt(hs)[i];
  return x ? typeof x === t(923) ? x[t(2188)](/\{\{(\w+)\}\}/g, (r, s) => e[s] !== void 0 ? String(e[s]) : r) : x : i;
}
const gc = /&(?:amp|#38|lt|#60|gt|#62|apos|#39|quot|#34|nbsp|#160|copy|#169|reg|#174|hellip|#8230|#x2F|#47);/g, vc = { "&amp;": "&", "&#38;": "&", "&lt;": "<", "&#60;": "<", "&gt;": ">", "&#62;": ">", "&apos;": "'", "&#39;": "'", "&quot;": '"', "&#34;": '"', "&nbsp;": " ", "&#160;": " ", "&copy;": "©", "&#169;": "©", "&reg;": "®", "&#174;": "®", "&hellip;": "…", "&#8230;": "…", "&#x2F;": "/", "&#47;": "/" }, yc = (i) => vc[i], bc = (i) => i.replace(gc, yc);
let $a = { bindI18n: "languageChanged", bindI18nStore: "", transEmptyNodeValue: "", transSupportBasicHtmlNodes: !0, transWrapTextNodes: "", transKeepBasicHtmlNodesFor: ["br", n(1632), "i", "p"], useSuspense: !0, unescape: bc };
const wc = (i = {}) => {
  $a = { ...$a, ...i };
}, Sc = { type: "3rdParty", init(i) {
  const e = n;
  wc(i[e(2687)][e(1886)]);
} };
!G0[n(845)] && G0.use(Sc)[n(1717)]({ resources: { "zh-CN": { translation: Jt(n(2160)) }, "en-US": { translation: Jt(n(2352)) } }, lng: mc(), fallbackLng: n(2352), interpolation: { escapeValue: !1 } });
const Ix = [];
xe.widgetable = xe[n(1747)] || {}, xe.widgetable[n(2295)] = function(i, e) {
  const t = n;
  typeof e === t(1342) ? Ix[t(818)]([i, { formatter: e, setter: null }]) : Ix[t(818)]([i, e]);
};
function Pc(i, e, t) {
  var c, d, u;
  const a = n, x = Ix[a(714)](([f]) => f == a(764)), r = Ix.find(([f]) => sr(f, i[a(2426)])) || x;
  let s = !1;
  if (r) {
    const f = r[1].setter;
    f && (s = !!f(i, e, t));
  }
  !s && (i[a(759)][e][a(2391)] = t, (d = (c = i[a(759)][e])[a(2356)]) == null || d.call(c, t)), (u = (R0[a(1597)] || R0[a(1691)][a(1009)]).activeWorkflow) == null || u[a(647)][a(1795)]();
}
function qe(i) {
  const e = n, t = {}, a = Ix[e(714)](([x]) => x == e(764));
  return i.nodes[e(1238)]((x) => {
    const r = e;
    if (!x[r(759)] || x[r(759)][r(1200)] == 0) return;
    const s = Ix[r(714)](([o]) => sr(o, x.type)) || a;
    if (s) try {
      const o = s[1].formatter(x);
      o && (t[x.id] = o.widgets[r(2404)]((c) => c[r(2391)]));
    } catch {
      t[x.id] = [];
    }
  }), t;
}
function Gt(i, e) {
  var r, s, o;
  const t = n;
  if (!i) return { widgetableID: "", widgetablePath: "", nodes: {}, nodeIndexes: [], options: {}, note: "" };
  const a = i[t(892)][t(2404)]((c) => {
    const d = t;
    if (c[d(1823)] != 0) return;
    const u = me(c);
    if (!u || u.startsWith(".") || !c.widgets || c[d(759)][d(1200)] == 0) return;
    let f = Ix[d(714)](([m]) => sr(m, c.type));
    if (f) try {
      const m = f[1].formatter(c);
      if (m) return m.id = c.id, m[d(564)] = m[d(759)][d(2257)]((y, w) => y + (w[d(665)] || 12), 0), m;
    } catch (m) {
      return { id: c.id, title: u, uiWeightSum: 12, widgets: [{ outputType: "error", value: Qt(d(613), f[0]) + (m[d(2353)] || m || ""), name: "", options: {} }] };
    }
    if (!u[d(1817)]("#")) return null;
    let l = c.widgets;
    const g = Ix[d(714)](([m]) => m == d(764));
    if (g) {
      const m = g[1][d(675)](c);
      if (m) return Object[d(747)](m, { uiWeightSum: m[d(759)][d(2257)]((y, w) => y + (w.uiWeight || 12), 0) });
    }
    const h = { id: c.id, title: u, widgets: l[d(2404)]((m) => ({ name: m.label || m[d(2200)], outputType: m[d(2426)] || d(923), value: m.value, options: m.options })) };
    return Object.assign(h, { uiWeightSum: h[d(759)][d(2257)]((m, y) => m + (y[d(665)] || 12), 0) });
  })[t(893)](Boolean).sort((c, d) => {
    const u = t;
    let f = me(c), l = me(d);
    return f = f[u(1817)]("#") ? f[u(2602)](1)[u(2754)]() : f[u(2754)](), l = l[u(1817)]("#") ? l[u(2602)](1).trim() : l[u(2754)](), f[u(819)](l);
  }), x = ((s = (r = i.nodes[t(714)]((c) => c[t(2426)] == t(2673) && c.title[t(799)](/SD-?PPP/i))) == null ? void 0 : r.widgets[0]) == null ? void 0 : s.value) || "";
  return { widgetablePath: ((o = e[t(1211)][t(1002)]) == null ? void 0 : o[t(1593)]) || e[t(1728)], widgetableID: e.activeState.id, nodes: a[t(2257)]((c, d) => (c[d.id] = d, c), {}), note: x, nodeIndexes: a[t(2404)]((c) => c.id), options: {} };
}
function sr(i, e) {
  const t = n, a = i.replace(/[.+^${}()|[\]\\]/g, "\\$&").replace(/\*/g, ".*").replace(/\?/g, ".");
  return new RegExp("^" + a + "$")[t(1313)](e);
}
function me(i, e = "") {
  var x;
  const t = n;
  let a = e || i.title || "";
  return i[t(1640)] && (a[t(1817)]("#") || a[t(1817)](".")) ? i[t(1640)](t(528), a) : a = ((x = i[t(2372)]) == null ? void 0 : x.sdppp_widgetable_title) || a, a;
}
xe[n(1233)] = me;
var he = { exports: {} }, qt, za;
function kc() {
  if (za) return qt;
  za = 1;
  var i = 1e3, e = i * 60, t = e * 60, a = t * 24, x = a * 7, r = a * 365.25;
  qt = function(u, f) {
    const l = B;
    f = f || {};
    var g = typeof u;
    if (g === l(923) && u[l(1200)] > 0) return s(u);
    if (g === l(2074) && isFinite(u)) return f[l(2750)] ? c(u) : o(u);
    throw new Error(l(1979) + JSON.stringify(u));
  };
  function s(u) {
    const f = B;
    if (u = String(u), !(u.length > 100)) {
      var l = /^(-?(?:\d+)?\.?\d+) *(milliseconds?|msecs?|ms|seconds?|secs?|s|minutes?|mins?|m|hours?|hrs?|h|days?|d|weeks?|w|years?|yrs?|y)?$/i[f(2548)](u);
      if (l) {
        var g = parseFloat(l[1]), h = (l[2] || "ms")[f(1466)]();
        switch (h) {
          case "years":
          case f(1098):
          case f(585):
          case "yr":
          case "y":
            return g * r;
          case f(2235):
          case f(529):
          case "w":
            return g * x;
          case f(1283):
          case f(1020):
          case "d":
            return g * a;
          case f(2591):
          case f(1869):
          case f(2368):
          case "hr":
          case "h":
            return g * t;
          case "minutes":
          case f(1862):
          case "mins":
          case f(606):
          case "m":
            return g * e;
          case "seconds":
          case f(2065):
          case f(1308):
          case f(1393):
          case "s":
            return g * i;
          case f(1654):
          case f(1950):
          case f(2293):
          case "msec":
          case "ms":
            return g;
          default:
            return;
        }
      }
    }
  }
  function o(u) {
    const f = B;
    var l = Math[f(1493)](u);
    return l >= a ? Math[f(539)](u / a) + "d" : l >= t ? Math[f(539)](u / t) + "h" : l >= e ? Math.round(u / e) + "m" : l >= i ? Math[f(539)](u / i) + "s" : u + "ms";
  }
  function c(u) {
    const f = B;
    var l = Math.abs(u);
    return l >= a ? d(u, l, a, "day") : l >= t ? d(u, l, t, f(1869)) : l >= e ? d(u, l, e, f(1862)) : l >= i ? d(u, l, i, f(2065)) : u + f(535);
  }
  function d(u, f, l, g) {
    const h = B;
    var m = f >= l * 1.5;
    return Math[h(539)](u / l) + " " + g + (m ? "s" : "");
  }
  return qt;
}
var Ot, Ha;
function Ec() {
  if (Ha) return Ot;
  Ha = 1;
  function i(e) {
    const t = B;
    x.debug = x, x.default = x, x[t(858)] = u, x[t(891)] = c, x.enable = s, x[t(2115)] = d, x.humanize = kc(), x.destroy = f, Object[t(2278)](e)[t(1238)]((l) => {
      x[l] = e[l];
    }), x.names = [], x[t(1631)] = [], x.formatters = {};
    function a(l) {
      const g = t;
      let h = 0;
      for (let m = 0; m < l.length; m++)
        h = (h << 5) - h + l.charCodeAt(m), h |= 0;
      return x[g(2044)][Math[g(1493)](h) % x[g(2044)][g(1200)]];
    }
    x.selectColor = a;
    function x(l) {
      const g = t;
      let h, m = null, y, w;
      function S(...R) {
        const A = B;
        if (!S[A(2115)]) return;
        const C = S, P = Number(/* @__PURE__ */ new Date()), E = P - (h || P);
        C[A(2413)] = E, C.prev = h, C[A(2265)] = P, h = P, R[0] = x[A(858)](R[0]), typeof R[0] !== A(923) && R[A(1885)]("%O");
        let D = 0;
        R[0] = R[0].replace(/%([a-zA-Z%])/g, (M, F) => {
          const N = A;
          if (M === "%%") return "%";
          D++;
          const U = x[N(1039)][F];
          if (typeof U === N(1342)) {
            const $ = R[D];
            M = U[N(2518)](C, $), R[N(1065)](D, 1), D--;
          }
          return M;
        }), x.formatArgs[A(2518)](C, R), (C[A(816)] || x.log).apply(C, R);
      }
      return S[g(1533)] = l, S[g(2191)] = x[g(2191)](), S[g(1034)] = x[g(1988)](l), S[g(2453)] = r, S.destroy = x[g(519)], Object[g(1907)](S, g(2115), { enumerable: !0, configurable: !1, get: () => {
        const R = g;
        return m !== null ? m : (y !== x[R(2694)] && (y = x[R(2694)], w = x[R(2115)](l)), w);
      }, set: (R) => {
        m = R;
      } }), typeof x.init === g(1342) && x[g(1717)](S), S;
    }
    function r(l, g) {
      const h = t, m = x(this[h(1533)] + (typeof g === h(2634) ? ":" : g) + l);
      return m[h(816)] = this[h(816)], m;
    }
    function s(l) {
      const g = t;
      x[g(1374)](l), x[g(2694)] = l, x.names = [], x.skips = [];
      const h = (typeof l === g(923) ? l : "")[g(2754)]()[g(2188)](/\s+/g, ",")[g(2248)](",")[g(893)](Boolean);
      for (const m of h)
        m[0] === "-" ? x.skips[g(818)](m.slice(1)) : x.names[g(818)](m);
    }
    function o(l, g) {
      const h = t;
      let m = 0, y = 0, w = -1, S = 0;
      for (; m < l[h(1200)]; )
        if (y < g[h(1200)] && (g[y] === l[m] || g[y] === "*")) g[y] === "*" ? (w = y, S = m, y++) : (m++, y++);
        else if (w !== -1) y = w + 1, S++, m = S;
        else return !1;
      for (; y < g[h(1200)] && g[y] === "*"; )
        y++;
      return y === g[h(1200)];
    }
    function c() {
      const l = t, g = [...x.names, ...x.skips[l(2404)]((h) => "-" + h)][l(2573)](",");
      return x[l(2027)](""), g;
    }
    function d(l) {
      const g = t;
      for (const h of x[g(1631)])
        if (o(l, h)) return !1;
      for (const h of x[g(812)])
        if (o(l, h)) return !0;
      return !1;
    }
    function u(l) {
      const g = t;
      return l instanceof Error ? l.stack || l[g(2353)] : l;
    }
    function f() {
      const l = t;
      console[l(1808)](l(2102));
    }
    return x[t(2027)](x[t(657)]()), x;
  }
  return Ot = i, Ot;
}
var Ua;
function Cc() {
  const i = n;
  return Ua ? he[i(1791)] : (Ua = 1, function(e, t) {
    const a = i;
    t[a(1982)] = r, t[a(1374)] = s, t[a(657)] = o, t[a(2191)] = x, t[a(2139)] = c(), t[a(519)] = /* @__PURE__ */ (() => {
      let u = !1;
      return () => {
        const f = B;
        !u && (u = !0, console[f(1808)](f(2102)));
      };
    })(), t[a(2044)] = [a(1396), a(2470), a(1665), a(1301), a(1384), "#0066FF", a(1816), a(1276), a(902), a(1980), a(537), a(2221), a(2620), a(960), a(1751), a(1695), a(1812), a(994), a(2253), a(2396), a(757), a(2302), "#33CC00", a(1337), a(1781), a(1431), a(1048), a(2448), a(2719), a(2052), a(2497), a(2540), a(1156), a(1018), "#9900CC", a(1217), a(972), a(835), a(2282), "#99CC33", "#CC0000", a(2357), "#CC0066", "#CC0099", a(2527), a(2067), a(2501), a(1828), a(2232), a(2401), "#CC33CC", a(1365), a(1771), "#CC6633", "#CC9900", "#CC9933", a(1084), a(1401), a(2730), "#FF0033", "#FF0066", a(1662), "#FF00CC", a(487), a(2569), "#FF3333", a(1447), "#FF3399", "#FF33CC", a(649), a(1310), a(1426), a(788), a(1248), a(814), a(625)];
    function x() {
      const u = a;
      if (typeof window !== u(2634) && window[u(2002)] && (window[u(2002)][u(2426)] === "renderer" || window[u(2002)][u(1802)])) return !0;
      if (typeof navigator !== u(2634) && navigator[u(1660)] && navigator[u(1660)].toLowerCase()[u(799)](/(edge|trident)\/(\d+)/)) return !1;
      let f;
      return typeof document < "u" && document[u(2537)] && document[u(2537)][u(572)] && document.documentElement[u(572)][u(2304)] || typeof window !== u(2634) && window[u(1334)] && (window[u(1334)].firebug || window[u(1334)][u(1249)] && window[u(1334)][u(627)]) || typeof navigator !== u(2634) && navigator.userAgent && (f = navigator[u(1660)][u(1466)]()[u(799)](/firefox\/(\d+)/)) && parseInt(f[1], 10) >= 31 || typeof navigator !== u(2634) && navigator.userAgent && navigator[u(1660)][u(1466)]().match(/applewebkit\/(\d+)/);
    }
    function r(u) {
      const f = a;
      if (u[0] = (this.useColors ? "%c" : "") + this.namespace + (this[f(2191)] ? f(694) : " ") + u[0] + (this.useColors ? "%c " : " ") + "+" + e[f(1791)][f(793)](this[f(2413)]), !this[f(2191)]) return;
      const l = f(846) + this.color;
      u[f(1065)](1, 0, l, "color: inherit");
      let g = 0, h = 0;
      u[0].replace(/%[a-zA-Z%]/g, (m) => {
        m !== "%%" && (g++, m === "%c" && (h = g));
      }), u[f(1065)](h, 0, l);
    }
    t[a(816)] = console[a(855)] || console.log || (() => {
    });
    function s(u) {
      const f = a;
      try {
        u ? t.storage.setItem(f(855), u) : t.storage[f(802)](f(855));
      } catch {
      }
    }
    function o() {
      const u = a;
      let f;
      try {
        f = t[u(2139)][u(2031)](u(855)) || t[u(2139)][u(2031)]("DEBUG");
      } catch {
      }
      return !f && typeof process !== u(2634) && "env" in process && (f = process.env[u(587)]), f;
    }
    function c() {
      try {
        return localStorage;
      } catch {
      }
    }
    e[a(1791)] = Ec()(t);
    const { formatters: d } = e[a(1791)];
    d.j = function(u) {
      const f = a;
      try {
        return JSON[f(2301)](u);
      } catch (l) {
        return f(2021) + l[f(2353)];
      }
    };
  }(he, he[i(1791)]), he.exports);
}
var Ic = Cc();
const ps = is(Ic);
ps.enable("*");
function Rc(i, e) {
  const t = n, a = ps(i), x = (r, s) => async function(...o) {
    try {
      await e({ level: r, messages: o });
    } catch {
    }
  };
  return a.log = x(t(816)), a;
}
const Me = Rc("mesh:comfy", async ({ level: i, messages: e }) => {
  const t = n, { mcpMesh: a } = await Promise.resolve()[t(1413)](() => Tc);
  await a[t(2369)](t(577))[t(1524)][t(816)]({ level: i, messages: e });
}), Yt = Me.extend("mesh:workflow"), Va = /* @__PURE__ */ new Set();
C0.implementAction("setWidgetValue", async (i) => {
  const e = n;
  return i[e(1109)][e(1238)](({ nodeID: t, widgetIndex: a, value: x }) => {
    const r = e, s = R0[r(2751)][r(892)][r(714)]((o) => o.id == t);
    !s || x == s.widgets[a][r(2391)] || Pc(s, a, x);
  }), { success: !0 };
}), C0.implementAction(n(707), async (i) => {
  const e = n, { workflow_path: t } = i, a = !Va[e(2333)](t), x = i[e(717)] || a;
  if (Va[e(2295)](t), t[e(1817)]("sdppp://")) return await c(t);
  const r = R0.extensionManager[e(1009)] || R0[e(1597)], s = r[e(1328)].find((d) => d[e(2281)] === t || d[e(1728)] === t || d[e(1728)] === e(724) + t);
  if (!x) {
    const d = await Fc(r, s);
    return Yt("reset=false but needsReset: " + d), d ? await Za(r, s) : await o(r, s), { success: !0 };
  }
  return await Za(r, s), { success: !0 };
  async function o(d, u) {
    const f = e;
    Yt(f(2362) + u.path, u.initialState), R0.workflowManager == d ? await u[f(657)]() : (await d[f(707)](u), await R0[f(1941)](JSON[f(2156)](JSON.stringify(u[f(659)])), !0, !0, u, {}));
  }
  async function c(d) {
    const u = e, f = d.replace("sdppp://", ""), l = await fetch(u(2095) + f)[u(1413)]((g) => g.json());
    return l[u(1002)].sdppp_workflow_alias = d, await R0[u(1941)](l), { success: !0 };
  }
}), C0.implementAction(n(664), async function(i) {
  const e = n;
  let { workflow_content: t, workflow_path: a } = i;
  return t[e(1002)] = { ...t.extra || {}, sdppp_workflow_alias: a }, await R0[e(1941)](t), { success: !0 };
}), C0[n(933)](n(2546), async (i) => {
  var r;
  const e = n, t = R0[e(1597)] || R0[e(1691)][e(1009)];
  (r = t[e(916)]) == null || r.call(t), await new Promise((s) => requestAnimationFrame(s));
  let x = t[e(1328)].map((s) => s[e(1728)][e(2188)](e(724), ""));
  try {
    const s = new Headers(), o = localStorage.getItem(e(2421));
    o && s[e(510)](e(1965), o);
    const c = await fetch(e(2013), { headers: s });
    let d = [];
    c.ok && (d = (await c[e(2135)]())[e(2712)][e(2404)]((f) => f[e(2188)](e(724), ""))), x.sort((u, f) => {
      const l = e, g = d[l(1958)](u), h = d[l(1958)](f);
      return g && !h ? -1 : !g && h ? 1 : u[l(819)](f);
    });
  } catch {
  }
  return { workflows: x, error: "" };
}), C0.implementAction("saveWorkflow", async (i) => {
  var s;
  const e = n, { workflow_path: t, from_sid: a } = i, x = R0.workflowManager || R0[e(1691)].workflow, r = x.workflows[e(714)]((o) => o.fullFilename === t || o[e(1728)] === t || o[e(1728)] === e(724) + t);
  if (!r) throw new Error("Workflow not found");
  return ((s = x[e(2186)]) == null ? void 0 : s.id) != r.id && await R0[e(707)](t, a, !1), r[e(647)][e(1795)](), await x[e(2189)](r), { success: !0 };
});
async function Fc(i, e) {
  var x, r, s;
  const t = n;
  if (!e || !(((x = i[t(2186)]) == null ? void 0 : x.id) === e.id)) return !1;
  if ((r = e[t(647)]) != null && r.checkState) try {
    e[t(647)][t(1795)]();
  } catch (o) {
    console.warn(t(2122), o);
  }
  try {
    const o = (s = R0.graph) == null ? void 0 : s.serialize(), c = e[t(1211)];
    if (!o || !c) return !1;
    const d = JSON[t(2301)](o), u = JSON[t(2301)](c);
    return d !== u;
  } catch (o) {
    return console.warn("Failed to check workflow state changes:", o), !1;
  }
}
async function Za(i, e) {
  var r;
  const t = n;
  Yt("performWorkflowReset: " + e[t(1728)]);
  const a = { last_node_id: 0, last_link_id: 0, nodes: [], links: [], groups: [], config: {}, extra: {}, version: 0.4 };
  async function x(s, o) {
    const c = t;
    R0[c(1597)] == s ? await o[c(657)]() : (await s[c(707)](o), await R0[c(1941)](JSON[c(2156)](JSON[c(2301)](o[c(1211)])), !0, !0, o, {}));
  }
  (e[t(1639)] || (r = i.isOpen) != null && r.call(i, e)) && i[t(918)][t(1200)] === 1 ? await R0[t(1941)](a) : await x(i, i[t(918)][0] == e ? i[t(918)][1] : i[t(918)][0]), await i[t(697)](e, !1), await new Promise((s) => requestAnimationFrame(s)), await x(i, e);
}
const _x = Me[n(2453)](n(1602)), Nx = /* @__PURE__ */ new Map();
function Nc(i, e) {
  const t = n, a = Nx[t(1261)](i);
  _x(t(676), i, e, a, Nx), a && a[t(2169)](e);
}
C0[n(933)](n(2555), async function* (i) {
  const e = n;
  let t = !1, a = [];
  function x() {
    const l = B;
    if (t) return;
    const g = Ax[l(733)];
    Ax[l(733)] = async (...h) => {
      const m = l;
      try {
        const y = await g[m(2518)](Ax, ...h);
        return a[m(818)]({ error: null, result: y, prompt_id: y[m(1731)] }), y;
      } catch (y) {
        throw a[m(818)]({ error: y, result: null, prompt_id: "" }), y;
      }
    }, t = !0;
  }
  t || x();
  const r = i[e(1754)];
  let s = !1, o = {}, c = [];
  C0[e(915)].setState({ lastError: "", widgetableErrors: {} });
  try {
    a = [], await R0.queuePrompt(1, r), a[e(1238)]((l) => {
      var h, m;
      const g = e;
      if (l[g(2389)]) s = !0, o = l[g(2389)].response ? f(l[g(2389)][g(2259)][g(1420)]) : {}, Object[g(747)](o, { "-1": ((m = (h = l[g(2389)][g(2259)]) == null ? void 0 : h.error) == null ? void 0 : m[g(2353)]) || l[g(2389)][g(2353)] });
      else {
        const y = l[g(1532)][g(1731)];
        c[g(818)](y);
        let w, S;
        const R = new Promise((C, P) => {
          w = C, S = P;
        }), A = { promise: R, resolveImage: w, rejectImage: S };
        Nx[g(510)](y, A);
      }
    });
  } catch (l) {
    _x(e(1652), l.stack), s = !0, o = { "-1": l[e(2353)] || l[e(879)]() };
  }
  _x(e(1534), s, o, e(2409), c), s && C0[e(915)].setState({ widgetableErrors: o });
  let d = [];
  const u = /* @__PURE__ */ new Map();
  for (const l of c) {
    const g = Nx.get(l);
    g && u[e(510)](l, g[e(1001)]);
  }
  for (_x(e(1957)); u.size > 0; ) {
    const l = Array.from(u[e(586)]()), g = l[e(2404)](([y, w]) => w[e(1413)]((S) => ({ prompt_id: y, images: S }))), { prompt_id: h, images: m } = await Promise[e(1680)](g);
    _x(e(2185), h), d.push(...m), u.delete(h), Nx[e(2653)](h), yield { success: !0, prompt_ids: [h], images: m };
  }
  function f(l) {
    const g = e, h = {};
    return Object[g(2278)](l).forEach((m) => {
      const y = g, w = m[y(2248)](":")[0], S = R0[y(2751)][y(892)][y(714)]((R) => R.id == w);
      h[w] = "[" + ((S == null ? void 0 : S[y(1972)]) || w) + "]" + l[m].errors.map(JSON[y(2301)])[y(2573)](`
`);
    }), h;
  }
}), C0[n(933)]("stopAll", async () => {
  const i = n;
  await R0[i(1697)][i(598)]("queue"), await R0[i(1697)][i(953)]();
  const e = Array.from(Nx[i(1109)]());
  Nx[i(611)]();
  for (const t of e)
    try {
      t.rejectImage(new Error(i(1701)));
    } catch {
    }
  return { success: !0 };
}), C0[n(933)]("setNodeTitle", async (i) => {
  const e = n, { node_id: t, title: a } = i, x = R0[e(2751)][e(892)][e(714)]((r) => r.id == t);
  if (!x) throw new Error("Node not found");
  return x[e(1972)] = a, x[e(1640)]("sdppp_widgetable_title", a), { success: !0 };
}), C0.implementAction("reboot", async () => {
  const i = n, e = await fetch("./api/manager/reboot");
  return e[i(1713)] == 404 ? { error: Qt(i(955)), success: !1 } : e[i(1713)] == 200 ? { success: !0 } : { error: Qt(i(1239)) + e[i(1629)], success: !1 };
}), C0[n(933)](n(1594), async (i) => {
  const e = n, { api_key: t } = i;
  return localStorage[e(2603)]("comfy_api_key", t), location[e(2496)](), { success: !0 };
}), C0[n(933)]("logout", async () => {
  const i = n;
  return document[i(1674)](i(2440))[i(776)][i(2753)](), { success: !0 };
});
class qc extends Error {
  constructor(e, t) {
    const a = n;
    super(a(1163) + e + a(2415) + t + "ms"), this[a(2200)] = a(1348);
  }
}
const pe = /* @__PURE__ */ new Map();
class Oc {
  constructor(e) {
    const t = n;
    if (this[t(992)] = [], this[t(1937)] = Date[t(1381)](), pe[t(2333)](e[t(1518)])) {
      const a = pe[t(1261)](e.posterIdentifier);
      a && a.close();
    }
    this[t(1518)] = e[t(1518)], this[t(1777)] = e[t(1777)], this[t(1840)] = e[t(1840)], this.removeMessageEventListener = e.removeMessageEventListener, this[t(692)] = e[t(692)] ?? 12e4, this.heartbeatTimeout = e[t(1439)] ?? 3e4, this[t(1931)] = e[t(1931)] ?? !1, pe.set(this[t(1518)], this), this[t(1748)] = this[t(1748)][t(1571)](this), this.externalListenMessageCallback = this[t(1840)](this.listenMessageCallback);
  }
  listenMessageCallback(e) {
    const t = n;
    if (e[t(1518)] === this[t(1518)]) {
      if (e.channel === t(2675)) {
        e[t(2426)] === "ping" && !this[t(1931)] ? this[t(1777)]({ channel: "sdppp-heartbeat", posterIdentifier: this.posterIdentifier, type: "pong", timestamp: e.timestamp }) : e.type === t(1269) && (this[t(1937)] = Date.now(), this[t(862)] && (clearTimeout(this[t(862)]), this[t(862)] = void 0));
        return;
      }
      e[t(693)] === t(634) && (this[t(709)] && t(1854) in e ? this.onmessage(e[t(1854)]) : t(1854) in e && this.messageQueue[t(818)](e[t(1854)]));
    }
  }
  async [n(1890)]() {
    const e = n;
    for (; this.messageQueue[e(1200)] > 0; ) {
      const t = this[e(992)][e(2621)]();
      t && this[e(709)] && this[e(709)](t);
    }
    this[e(2585)]();
  }
  [n(2585)]() {
    const e = n;
    this[e(1860)] = setInterval(() => {
      const t = e, a = Date[t(1381)]();
      this.messagePoster({ channel: t(2675), posterIdentifier: this[t(1518)], type: t(1189), timestamp: a }), this[t(862)] = setTimeout(() => {
        const x = t, r = new qc(this[x(1518)], this.heartbeatTimeout);
        this[x(1626)] && this[x(1626)](r);
      }, this[t(1439)]);
    }, this[e(692)]);
  }
  async [n(1243)](e, t) {
    const a = n;
    this[a(1777)]({ channel: a(634), posterIdentifier: this.posterIdentifier, payload: e });
  }
  async close() {
    const e = n;
    this[e(1860)] && (clearInterval(this[e(1860)]), this[e(1860)] = void 0), this[e(862)] && (clearTimeout(this[e(862)]), this[e(862)] = void 0), pe.delete(this.posterIdentifier), this[e(2138)](this[e(2204)]);
  }
}
const Ac = Me.extend("mesh");
async function ms() {
  const i = n;
  if (window[i(2589)])
    return await C0[i(1610)](i(577), async function() {
      const e = i, t = new Oc({ posterIdentifier: "comfy-uxp", messagePoster: (x) => {
        window[B(2589)].postMessage(x, "*");
      }, addMessageEventListener: (x) => {
        const r = B, s = (o) => {
          x(o[B(726)]);
        };
        return window[r(2626)](r(2353), s), s;
      }, removeMessageEventListener: (x) => {
        window[B(1484)]("message", x);
      } });
      t.onerror = (x) => {
        const r = B;
        x[r(2200)] === r(1348) && (Ac(r(1474), x), t[r(1140)](), location[r(2496)]());
      };
      const a = new S2({ name: e(2249), version: e(2106) });
      return a[e(1610)](t), C0[e(666)](a), window[e(2589)][e(2056)]({ channel: e(1822), meshName: e(1722), action: e(1610) }, "*"), await new Promise((x) => {
        const r = e;
        a[r(2032)].oninitialized = () => {
          const s = r;
          a[s(2032)].oninitialized = void 0, x(!0);
        };
      }), a;
    });
}
const Tc = Object.freeze(Object[n(1907)]({ __proto__: null, connectUXP: ms, mcpMesh: C0 }, Symbol[n(2089)], { value: n(1735) }));
Ax[n(2626)]("graphChanged", (i) => {
  const e = n, t = R0[e(1597)] || R0[e(1691)][e(1009)], a = t[e(2186)];
  if (i.detail.id !== a[e(1211)].id) return;
  const x = C0.store[e(1356)]()[e(1601)], r = Gt(R0[e(2751)], a);
  vs(r, x) && C0[e(915)].setState({ widgetableStructure: r }), C0[e(915)][e(1826)]({ widgetableValues: qe(R0[e(2751)]) });
}), Ax[n(2626)](n(899), () => {
  const i = n;
  C0.store.setState({ widgetableValues: qe(R0[i(2751)]) });
});
let Wa = 0, Ba = !0, Ka = "";
function gs() {
  const i = n;
  requestAnimationFrame(gs);
  const e = R0.workflowManager || R0[i(1691)].workflow, t = e.activeWorkflow, a = (t == null ? void 0 : t.id) || 0, x = (t == null ? void 0 : t[i(1728)]) || "", r = (t == null ? void 0 : t[i(1698)]) || !0;
  if (a === Wa && x === Ka && r === Ba) return;
  Wa = a, Ka = x, Ba = r;
  const s = Gt(R0[i(2751)], t), o = qe(R0[i(2751)]);
  C0[i(915)][i(1826)]({ widgetableStructure: s, widgetableValues: o }), setTimeout(() => {
    const c = i;
    if (t !== e[c(2186)]) return;
    const d = Gt(R0[c(2751)], t), u = qe(R0.graph);
    vs(d, s) && C0[c(915)].setState({ widgetableStructure: d }), C0[c(915)][c(1826)]({ widgetableValues: u });
  }, 800);
}
requestAnimationFrame(gs);
function vs(i, e) {
  const t = n;
  return i[t(976)][t(1200)] !== e[t(976)].length || JSON[t(2301)](i.nodeIndexes) !== JSON[t(2301)](e[t(976)]) || JSON.stringify(i.nodes) !== JSON[t(2301)](e[t(892)]);
}
let Ja = !1;
async function Dc() {
  const i = n;
  if (Ja) return Promise[i(1987)]();
  Ax[i(2499)] && C0[i(915)][i(1826)]({ comfyUserToken: Ax[i(2499)] }), Ja = !0;
}
Me[n(2453)]("comfy-entry");
async function jc(i, e, t) {
  const a = n;
  e[a(2626)]("progress", ({ detail: s }) => {
    const o = a;
    if (!s) return;
    let c = 0, d = 0;
    !isNaN(s[o(2391)] / s[o(599)]) && (c = Math[o(539)](s.value / s.max * 100));
    const u = s[o(1800)], f = graph[o(892)][o(714)]((l) => l.id == u);
    if (f && f[o(1037)]) {
      const l = 100 / graph[o(892)][o(1200)];
      d = Math[o(539)](f[o(1037)] * l) + (c ? c / 100 * l : 0);
    }
    C0[o(915)][o(1826)]({ progress: c, graphProgress: d });
  }), e[a(2626)](a(1713), (s) => {
    var c;
    const o = a;
    (c = s[o(1172)]) != null && c[o(687)] && C0[o(915)][o(1826)]({ queueSize: s.detail[o(687)][o(2332)] });
  }), e[a(2626)](a(1711), ({ detail: s }) => {
    const o = a;
    if (C0[o(915)][o(1826)]({ executingNodeTitle: "", lastError: s.exception_message }), s[o(766)]) {
      const c = i.graph[o(892)][o(714)]((d) => d.id == s.node_id);
      C0[o(915)][o(1826)]({ widgetableErrors: { [s[o(766)]]: "[" + ((c == null ? void 0 : c[o(1972)]) || s[o(766)]) + "]" + s[o(1305)] } });
    }
  }), e.addEventListener(a(1690), (s) => {
    const o = a, c = s[o(1172)], d = graph.nodes.find((u) => u.id == c);
    if (d) {
      const u = 100 / graph[o(892)][o(1200)];
      C0.store[o(1826)]({ executingNodeTitle: d[o(1972)], graphProgress: Math.round(d[o(1037)] * u) });
    }
  }), e[a(2626)](a(1341), () => {
    const s = a;
    C0[s(915)][s(1826)]({ progress: 0, executingNodeTitle: "" });
  }), e.addEventListener("execution_start", ({ detail: s }) => {
    const o = a;
    C0[o(915)][o(1826)]({ lastError: "", widgetableErrors: {}, progress: 0, executingNodeTitle: "", lastRunTime: Date.now() });
  });
  const x = /* @__PURE__ */ new Map();
  e.addEventListener(a(1922), (s) => {
    const o = a;
    C0[o(915)][o(1826)]({ progress: 0, executingNodeTitle: "" });
    const c = (x[o(1261)](s[o(1172)][o(1731)]) || [])[o(2404)]((d) => ({ url: d, thumbnail: d }));
    Nc(s[o(1172)][o(1731)], c), x[o(2653)](s[o(1172)][o(1731)]);
  }), e[a(2626)](a(899), (s) => {
    const o = a, c = x[o(1261)](s.detail[o(1731)]) || [];
    s[o(1172)][o(2528)] && Array.isArray(s[o(1172)][o(2528)][o(2714)]) && s[o(1172)][o(2528)][o(2714)][o(1200)] > 0 && c.push(...s[o(1172)][o(2528)][o(2714)][o(893)]((d) => d[o(2426)] == "output")[o(2404)]((d) => {
      const u = o;
      return location[u(1776)] + location.pathname + u(2616) + d[u(2426)] + "&filename=" + encodeURIComponent(d[u(1092)]) + (d.subfolder ? u(1811) + encodeURIComponent(d[u(2269)]) : "");
    })), s[o(1172)][o(2528)] && Array[o(2344)](s[o(1172)][o(2528)].sdppp_assets) && s[o(1172)].output[o(2088)][o(1200)] > 0 && c[o(818)](...s[o(1172)][o(2528)].sdppp_assets[o(2404)]((d) => {
      const u = o;
      return location[u(1776)] + location.pathname + u(1011) + encodeURIComponent(d);
    })), x[o(510)](s[o(1172)][o(1731)], c);
  });
  let r = null;
  e[a(2626)](a(1985), (s) => {
    r = setTimeout(() => {
      const o = B;
      C0[o(915)][o(1826)]({ comfyWSState: o(1985) });
    }, 1e3);
  }), e[a(2626)](a(1300), (s) => {
    const o = a;
    C0[o(915)][o(1826)]({ comfyWSState: o(655) }), clearTimeout(r);
  });
}
let At = [];
(async function() {
  var e, t, a, x, r, s;
  const i = n;
  if (typeof gradioApp == i(2634)) {
    try {
      const o = (t = (e = window[i(608)]) == null ? void 0 : e[i(1517)]) == null ? void 0 : t[i(1517)], c = (x = (a = window[i(608)]) == null ? void 0 : a.ui) == null ? void 0 : x[i(1554)], d = (s = (r = window[i(608)]) == null ? void 0 : r[i(1697)]) == null ? void 0 : s[i(1697)];
      if (!o || !d || !c) throw new Error(i(2668));
      await Dc(), await ms(), await jc(o, d, c), import("./sdppp-custom.js")[i(1413)]((u) => {
        u.default(xe, 2);
      });
    } catch (o) {
      At.push(o.stack || o[i(2353)] || o);
    }
    await new Promise((o) => setTimeout(o, 2e3)), At[i(1200)] && console[i(2389)](At[0]);
  }
})();
