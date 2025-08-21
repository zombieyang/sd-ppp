var kn = Object.defineProperty;
var In = (i, e, t) => e in i ? kn(i, e, { enumerable: !0, configurable: !0, writable: !0, value: t }) : i[e] = t;
var o0 = (i, e, t) => In(i, typeof e != "symbol" ? e + "" : e, t);
var s = B;
(function(i, e) {
  for (var t = B, a = i(); ; )
    try {
      var x = parseInt(t(1627)) / 1 * (parseInt(t(801)) / 2) + parseInt(t(1661)) / 3 * (parseInt(t(964)) / 4) + parseInt(t(921)) / 5 + parseInt(t(974)) / 6 + parseInt(t(2210)) / 7 + parseInt(t(604)) / 8 + parseInt(t(2176)) / 9 * (-parseInt(t(938)) / 10);
      if (x === e) break;
      a.push(a.shift());
    } catch {
      a.push(a.shift());
    }
})(me, 255809);
const R0 = window[s(2207)].app[s(868)];
window.comfyAPI.ui.$el;
const Ax = window.comfyAPI[s(2375)][s(2375)];
var Za;
class Cn {
  constructor(e) {
    o0(this, Za);
    var t = s;
    this.definition = e;
    const a = this[t(1140)]();
    if (!a.valid) throw new Error(t(1832) + a[t(1065)][t(1030)](", "));
  }
  [(Za = s(1707), s(1140))]() {
    var e = s;
    const t = [];
    (!this.definition[e(1852)] || Object.keys(this.definition[e(1852)]).length === 0) && t[e(2523)](e(2429));
    for (const [x, r] of this[e(1707)].edges)
      !this.definition[e(1852)][x] && t[e(2523)](e(1062) + x), !this[e(1707)][e(1852)][r] && t[e(2523)](e(1294) + r);
    const a = this[e(2048)]();
    return !a[e(977)] && t[e(2523)](...a[e(1065)]), { valid: t[e(1775)] === 0, errors: t };
  }
  [s(656)]() {
    var e = s;
    const t = /* @__PURE__ */ new Map();
    for (const a of Object[e(870)](this[e(1707)].nodes))
      t.set(a, []);
    for (const [a, x] of this.definition.edges) {
      const r = t[e(2214)](a) || [];
      r[e(2523)](x), t[e(1425)](a, r);
    }
    return t;
  }
  [s(2048)]() {
    var e = s;
    const t = [], a = /* @__PURE__ */ new Set(), x = /* @__PURE__ */ new Set(), r = this[e(656)](), n = (o, c) => {
      var f = e;
      if (x[f(2228)](o)) {
        const l = c.indexOf(o), u = c[f(2287)](l)[f(712)](o);
        return t.push(f(2170) + u[f(1030)](f(492))), !0;
      }
      if (a[f(2228)](o)) return !1;
      a[f(547)](o), x[f(547)](o);
      const d = r[f(2214)](o) || [];
      for (const l of d)
        if (n(l, [...c, o])) return !0;
      return x.delete(o), !1;
    };
    for (const o of Object.keys(this[e(1707)].nodes))
      !a[e(2228)](o) && n(o, []);
    return { valid: t[e(1775)] === 0, errors: t };
  }
  buildAdjacencyList() {
    var e = s;
    const t = /* @__PURE__ */ new Map();
    for (const a of Object[e(870)](this.definition.nodes))
      t[e(1425)](a, []);
    for (const [a, x] of this.definition[e(2111)]) {
      const r = t[e(2214)](a) || [];
      r[e(2523)](x), t.set(a, r);
      const n = t.get(x) || [];
      n.push(a), t[e(1425)](x, n);
    }
    return t;
  }
  [s(671)](e) {
    var t = s;
    return this[t(1356)]()[t(2214)](e) || [];
  }
  [s(2186)](e) {
    var t = s;
    return this[t(1707)][t(1852)][e];
  }
  [s(1739)]() {
    var e = s;
    return Object.keys(this[e(1707)].nodes);
  }
  [s(2070)](e, t) {
    var a = s;
    return this[a(1707)][a(2111)][a(2194)](([x, r]) => x === e && r === t || x === t && r === e);
  }
  findPath(e, t) {
    var a = s;
    if (e === t) return [e];
    const x = this.buildAdjacencyList(), r = [{ nodeId: e, path: [e] }], n = /* @__PURE__ */ new Set();
    for (; r[a(1775)] > 0; ) {
      const { nodeId: o, path: c } = r[a(1200)]();
      if (n.has(o)) continue;
      if (n.add(o), o === t) return c;
      const f = x.get(o) || [];
      for (const d of f)
        !n[a(2228)](d) && r[a(2523)]({ nodeId: d, path: [...c, d] });
    }
    return null;
  }
  [s(2522)](e, t) {
    var a = s;
    return this[a(1251)](e, t) !== null;
  }
  [s(2007)]() {
    return { ...this.definition };
  }
}
const vr = (i) => {
  let e;
  const t = /* @__PURE__ */ new Set(), a = (f, d) => {
    var l = B;
    const u = typeof f === l(2444) ? f(e) : f;
    if (!Object.is(u, e)) {
      const v = e;
      e = d ?? (typeof u !== l(692) || u === null) ? u : Object[l(2490)]({}, e, u), t.forEach((h) => h(e, v));
    }
  }, x = () => e, r = () => c, n = (f) => {
    var d = B;
    return t[d(547)](f), () => t[d(1869)](f);
  }, o = { setState: a, getState: x, getInitialState: r, subscribe: n }, c = e = i(a, x, o);
  return o;
}, Rn = (i) => i ? vr(i) : vr;
var C0;
(function(i) {
  var e = s;
  i.assertEqual = (r) => {
  };
  function t(r) {
  }
  i[e(1843)] = t;
  function a(r) {
    throw new Error();
  }
  i[e(1542)] = a, i[e(438)] = (r) => {
    const n = {};
    for (const o of r)
      n[o] = o;
    return n;
  }, i.getValidEnumValues = (r) => {
    var n = e;
    const o = i[n(731)](r)[n(2173)]((f) => typeof r[r[f]] != "number"), c = {};
    for (const f of o)
      c[f] = r[f];
    return i[n(587)](c);
  }, i[e(587)] = (r) => {
    var n = e;
    return i[n(731)](r)[n(866)](function(o) {
      return r[o];
    });
  }, i.objectKeys = typeof Object[e(870)] == "function" ? (r) => Object[e(870)](r) : (r) => {
    var n = e;
    const o = [];
    for (const c in r)
      Object.prototype[n(1038)][n(444)](r, c) && o.push(c);
    return o;
  }, i.find = (r, n) => {
    for (const o of r)
      if (n(o)) return o;
  }, i[e(2154)] = typeof Number[e(2154)] === e(2444) ? (r) => Number[e(2154)](r) : (r) => typeof r === e(1225) && Number[e(1060)](r) && Math[e(1357)](r) === r;
  function x(r, n = e(2412)) {
    var o = e;
    return r[o(866)]((c) => typeof c === o(998) ? "'" + c + "'" : c).join(n);
  }
  i[e(1922)] = x, i.jsonStringifyReplacer = (r, n) => {
    var o = e;
    return typeof n === o(1301) ? n[o(1928)]() : n;
  };
})(C0 || (C0 = {}));
var mr;
(function(i) {
  var e = s;
  i[e(2191)] = (t, a) => ({ ...t, ...a });
})(mr || (mr = {}));
const x0 = C0[s(438)]([s(998), s(2401), s(1225), "integer", s(2067), s(2529), s(1390), "bigint", "symbol", s(2444), s(1145), s(619), s(462), s(692), s(2269), s(2097), s(2057), "never", s(866), s(1425)]), kx = (i) => {
  var e = s;
  switch (typeof i) {
    case e(1145):
      return x0[e(1145)];
    case e(998):
      return x0[e(998)];
    case e(1225):
      return Number[e(2235)](i) ? x0[e(2401)] : x0[e(1225)];
    case e(2529):
      return x0.boolean;
    case e(2444):
      return x0[e(2444)];
    case e(1301):
      return x0[e(1301)];
    case "symbol":
      return x0.symbol;
    case e(692):
      return Array[e(2462)](i) ? x0.array : i === null ? x0[e(619)] : i.then && typeof i[e(2195)] == "function" && i[e(1856)] && typeof i[e(1856)] === e(2444) ? x0[e(2097)] : typeof Map !== e(1145) && i instanceof Map ? x0[e(866)] : typeof Set !== e(1145) && i instanceof Set ? x0[e(1425)] : typeof Date !== e(1145) && i instanceof Date ? x0[e(1390)] : x0[e(692)];
    default:
      return x0[e(2269)];
  }
}, W = C0[s(438)]([s(1084), s(810), s(1932), "invalid_union", s(1664), "invalid_enum_value", s(2147), s(1833), "invalid_return_type", s(2197), s(2531), s(2172), s(825), s(1936), s(2082), s(2200)]);
class Ex extends Error {
  get [s(1065)]() {
    var e = s;
    return this[e(2229)];
  }
  constructor(e) {
    var t = s;
    super(), this.issues = [], this.addIssue = (x) => {
      this.issues = [...this.issues, x];
    }, this[t(2177)] = (x = []) => {
      var r = t;
      this.issues = [...this[r(2229)], ...x];
    };
    const a = new.target.prototype;
    Object[t(1179)] ? Object[t(1179)](this, a) : this[t(1329)] = a, this.name = t(1009), this[t(2229)] = e;
  }
  [s(2209)](e) {
    const t = e || function(r) {
      var n = B;
      return r[n(532)];
    }, a = { _errors: [] }, x = (r) => {
      var n = B;
      for (const o of r.issues)
        if (o[n(594)] === "invalid_union") o.unionErrors[n(866)](x);
        else if (o.code === "invalid_return_type") x(o.returnTypeError);
        else if (o[n(594)] === n(1833)) x(o[n(1350)]);
        else if (o[n(1948)][n(1775)] === 0) a[n(446)].push(t(o));
        else {
          let c = a, f = 0;
          for (; f < o[n(1948)][n(1775)]; ) {
            const d = o[n(1948)][f];
            f === o[n(1948)].length - 1 ? (c[d] = c[d] || { _errors: [] }, c[d][n(446)].push(t(o))) : c[d] = c[d] || { _errors: [] }, c = c[d], f++;
          }
        }
    };
    return x(this), a;
  }
  static [s(505)](e) {
    var t = s;
    if (!(e instanceof Ex)) throw new Error(t(477) + e);
  }
  [s(1928)]() {
    return this.message;
  }
  get [s(532)]() {
    var e = s;
    return JSON.stringify(this[e(2229)], C0[e(1077)], 2);
  }
  get [s(664)]() {
    var e = s;
    return this[e(2229)][e(1775)] === 0;
  }
  [s(555)](e = (t) => t.message) {
    var t = s;
    const a = {}, x = [];
    for (const r of this[t(2229)])
      if (r[t(1948)].length > 0) {
        const n = r[t(1948)][0];
        a[n] = a[n] || [], a[n][t(2523)](e(r));
      } else x[t(2523)](e(r));
    return { formErrors: x, fieldErrors: a };
  }
  get [s(1377)]() {
    var e = s;
    return this[e(555)]();
  }
}
Ex[s(536)] = (i) => new Ex(i);
const qt = (i, e) => {
  var t = s;
  let a;
  switch (i[t(594)]) {
    case W[t(1084)]:
      i[t(1320)] === x0[t(1145)] ? a = t(1099) : a = t(1874) + i[t(1505)] + t(1091) + i[t(1320)];
      break;
    case W[t(810)]:
      a = t(1387) + JSON[t(847)](i[t(1505)], C0[t(1077)]);
      break;
    case W[t(2147)]:
      a = t(1405) + C0.joinValues(i.keys, ", ");
      break;
    case W[t(1600)]:
      a = t(2278);
      break;
    case W[t(1664)]:
      a = "Invalid discriminator value. Expected " + C0[t(1922)](i.options);
      break;
    case W[t(1890)]:
      a = t(1660) + C0.joinValues(i[t(2479)]) + t(2023) + i[t(1320)] + "'";
      break;
    case W[t(1833)]:
      a = t(2378);
      break;
    case W[t(2247)]:
      a = t(1180);
      break;
    case W.invalid_date:
      a = t(1013);
      break;
    case W[t(2531)]:
      typeof i[t(802)] == "object" ? "includes" in i[t(802)] ? (a = t(617) + i[t(802)].includes + '"', typeof i.validation.position === t(1225) && (a = a + " at one or more positions greater than or equal to " + i[t(802)].position)) : "startsWith" in i[t(802)] ? a = 'Invalid input: must start with "' + i[t(802)][t(2232)] + '"' : "endsWith" in i.validation ? a = t(1258) + i[t(802)][t(1793)] + '"' : C0[t(1542)](i.validation) : i[t(802)] !== t(552) ? a = t(1714) + i[t(802)] : a = "Invalid";
      break;
    case W[t(2172)]:
      i[t(1529)] === "array" ? a = t(528) + (i.exact ? t(564) : i[t(1747)] ? t(2024) : t(464)) + " " + i[t(1690)] + t(1352) : i[t(1529)] === "string" ? a = t(1367) + (i[t(1403)] ? "exactly" : i[t(1747)] ? t(2024) : t(949)) + " " + i.minimum + t(1615) : i[t(1529)] === t(1225) ? a = t(1618) + (i.exact ? t(2272) : i[t(1747)] ? "greater than or equal to " : t(1132)) + i[t(1690)] : i[t(1529)] === t(1301) ? a = t(1618) + (i[t(1403)] ? "exactly equal to " : i[t(1747)] ? t(994) : t(1132)) + i[t(1690)] : i.type === t(1390) ? a = "Date must be " + (i[t(1403)] ? t(2272) : i.inclusive ? t(994) : t(1132)) + new Date(Number(i[t(1690)])) : a = t(2278);
      break;
    case W[t(825)]:
      i.type === "array" ? a = t(528) + (i[t(1403)] ? t(564) : i[t(1747)] ? t(1637) : t(1595)) + " " + i.maximum + t(1352) : i.type === t(998) ? a = t(1367) + (i[t(1403)] ? t(564) : i[t(1747)] ? "at most" : "under") + " " + i[t(1219)] + t(1615) : i[t(1529)] === "number" ? a = t(1618) + (i[t(1403)] ? t(564) : i.inclusive ? t(1939) : t(1595)) + " " + i[t(1219)] : i[t(1529)] === t(1301) ? a = "BigInt must be " + (i[t(1403)] ? t(564) : i.inclusive ? t(1939) : t(1595)) + " " + i[t(1219)] : i[t(1529)] === t(1390) ? a = t(1396) + (i[t(1403)] ? "exactly" : i.inclusive ? t(1259) : t(2166)) + " " + new Date(Number(i.maximum)) : a = t(2278);
      break;
    case W[t(1932)]:
      a = t(2278);
      break;
    case W[t(1936)]:
      a = t(2530);
      break;
    case W.not_multiple_of:
      a = t(1503) + i.multipleOf;
      break;
    case W.not_finite:
      a = "Number must be finite";
      break;
    default:
      a = e[t(1966)], C0[t(1542)](i);
  }
  return { message: a };
};
let Fn = qt;
function Nn() {
  return Fn;
}
const On = (i) => {
  var e = s;
  const { data: t, path: a, errorMaps: x, issueData: r } = i, n = [...a, ...r.path || []], o = { ...r, path: n };
  if (r[e(532)] !== void 0) return { ...r, path: n, message: r[e(532)] };
  let c = "";
  const f = x[e(2173)]((d) => !!d).slice().reverse();
  for (const d of f)
    c = d(o, { data: t, defaultError: c })[e(532)];
  return { ...r, path: n, message: c };
};
function X(i, e) {
  var t = s;
  const a = Nn(), x = On({ issueData: e, data: i[t(530)], path: i.path, errorMaps: [i[t(1614)][t(1779)], i[t(1502)], a, a === qt ? void 0 : qt][t(2173)]((r) => !!r) });
  i[t(1614)].issues[t(2523)](x);
}
class xx {
  constructor() {
    var e = s;
    this.value = e(977);
  }
  [s(2291)]() {
    var e = s;
    this[e(895)] === "valid" && (this[e(895)] = e(2291));
  }
  [s(1828)]() {
    var e = s;
    this.value !== e(2459) && (this[e(895)] = e(2459));
  }
  static [s(1244)](e, t) {
    var a = s;
    const x = [];
    for (const r of t) {
      if (r[a(603)] === a(2459)) return l0;
      r[a(603)] === a(2291) && e.dirty(), x[a(2523)](r[a(895)]);
    }
    return { status: e.value, value: x };
  }
  static async [s(1313)](e, t) {
    var a = s;
    const x = [];
    for (const r of t) {
      const n = await r[a(2477)], o = await r[a(895)];
      x[a(2523)]({ key: n, value: o });
    }
    return xx[a(2386)](e, x);
  }
  static [s(2386)](e, t) {
    var a = s;
    const x = {};
    for (const r of t) {
      const { key: n, value: o } = r;
      if (n.status === a(2459) || o[a(603)] === a(2459)) return l0;
      n.status === a(2291) && e[a(2291)](), o.status === "dirty" && e.dirty(), n[a(895)] !== "__proto__" && (typeof o.value !== a(1145) || r[a(1778)]) && (x[n[a(895)]] = o[a(895)]);
    }
    return { status: e[a(895)], value: x };
  }
}
const l0 = Object[s(546)]({ status: s(2459) }), Gx = (i) => ({ status: s(2291), value: i }), rx = (i) => ({ status: s(977), value: i }), gr = (i) => i[s(603)] === s(2459), br = (i) => i[s(603)] === s(2291), Hx = (i) => i[s(603)] === s(977), ve = (i) => typeof Promise !== s(1145) && i instanceof Promise;
var r0;
(function(i) {
  var e = s;
  i[e(582)] = (t) => typeof t === e(998) ? { message: t } : t || {}, i[e(1928)] = (t) => typeof t === e(998) ? t : t == null ? void 0 : t[e(532)];
})(r0 || (r0 = {}));
class hx {
  constructor(e, t, a, x) {
    var r = s;
    this[r(2329)] = [], this[r(496)] = e, this.data = t, this._path = a, this[r(574)] = x;
  }
  get [s(1948)]() {
    var e = s;
    return !this[e(2329)].length && (Array[e(2462)](this[e(574)]) ? this[e(2329)][e(2523)](...this[e(2088)], ...this[e(574)]) : this._cachedPath.push(...this[e(2088)], this._key)), this[e(2329)];
  }
}
const yr = (i, e) => {
  var t = s;
  if (Hx(e)) return { success: !0, data: e[t(895)] };
  if (!i[t(1614)].issues[t(1775)]) throw new Error("Validation failed but no issues detected.");
  return { success: !1, get error() {
    var a = t;
    if (this[a(2249)]) return this[a(2249)];
    const x = new Ex(i[a(1614)][a(2229)]);
    return this[a(2249)] = x, this[a(2249)];
  } };
};
function m0(i) {
  var e = s;
  if (!i) return {};
  const { errorMap: t, invalid_type_error: a, required_error: x, description: r } = i;
  if (t && (a || x)) throw new Error(e(1797));
  return t ? { errorMap: t, description: r } : { errorMap: (o, c) => {
    var f = e;
    const { message: d } = i;
    return o.code === "invalid_enum_value" ? { message: d ?? c.defaultError } : typeof c[f(530)] === f(1145) ? { message: d ?? x ?? c[f(1966)] } : o.code !== f(1084) ? { message: c[f(1966)] } : { message: d ?? a ?? c[f(1966)] };
  }, description: r };
}
class k0 {
  get [s(780)]() {
    var e = s;
    return this[e(515)][e(780)];
  }
  [s(1237)](e) {
    var t = s;
    return kx(e[t(530)]);
  }
  [s(736)](e, t) {
    var a = s;
    return t || { common: e[a(496)][a(1614)], data: e[a(530)], parsedType: kx(e[a(530)]), schemaErrorMap: this._def[a(1128)], path: e[a(1948)], parent: e[a(496)] };
  }
  [s(2456)](e) {
    var t = s;
    return { status: new xx(), ctx: { common: e.parent[t(1614)], data: e[t(530)], parsedType: kx(e[t(530)]), schemaErrorMap: this._def.errorMap, path: e[t(1948)], parent: e[t(496)] } };
  }
  _parseSync(e) {
    var t = s;
    const a = this._parse(e);
    if (ve(a)) throw new Error(t(453));
    return a;
  }
  [s(1410)](e) {
    var t = s;
    const a = this[t(554)](e);
    return Promise[t(2271)](a);
  }
  [s(2078)](e, t) {
    var a = s;
    const x = this.safeParse(e, t);
    if (x.success) return x[a(530)];
    throw x[a(1882)];
  }
  [s(673)](e, t) {
    var a = s;
    const x = { common: { issues: [], async: (t == null ? void 0 : t[a(545)]) ?? !1, contextualErrorMap: t == null ? void 0 : t[a(1128)] }, path: (t == null ? void 0 : t.path) || [], schemaErrorMap: this[a(515)][a(1128)], parent: null, data: e, parsedType: kx(e) }, r = this._parseSync({ data: e, path: x[a(1948)], parent: x });
    return yr(x, r);
  }
  "~validate"(e) {
    var x, r;
    var t = s;
    const a = { common: { issues: [], async: !!this[t(1901)].async }, path: [], schemaErrorMap: this[t(515)][t(1128)], parent: null, data: e, parsedType: kx(e) };
    if (!this[t(1901)][t(545)]) try {
      const n = this._parseSync({ data: e, path: [], parent: a });
      return Hx(n) ? { value: n[t(895)] } : { issues: a[t(1614)].issues };
    } catch (n) {
      (r = (x = n == null ? void 0 : n[t(532)]) == null ? void 0 : x.toLowerCase()) != null && r[t(2115)]("encountered") && (this[t(1901)][t(545)] = !0), a[t(1614)] = { issues: [], async: !0 };
    }
    return this[t(1410)]({ data: e, path: [], parent: a })[t(2195)]((n) => Hx(n) ? { value: n.value } : { issues: a[t(1614)][t(2229)] });
  }
  async [s(1554)](e, t) {
    var a = s;
    const x = await this[a(1780)](e, t);
    if (x[a(768)]) return x[a(530)];
    throw x[a(1882)];
  }
  async safeParseAsync(e, t) {
    var a = s;
    const x = { common: { issues: [], contextualErrorMap: t == null ? void 0 : t.errorMap, async: !0 }, path: (t == null ? void 0 : t[a(1948)]) || [], schemaErrorMap: this[a(515)][a(1128)], parent: null, data: e, parsedType: kx(e) }, r = this[a(554)]({ data: e, path: x[a(1948)], parent: x }), n = await (ve(r) ? r : Promise.resolve(r));
    return yr(x, n);
  }
  [s(1479)](e, t) {
    var a = s;
    const x = (r) => {
      var n = B;
      return typeof t == "string" || typeof t > "u" ? { message: t } : typeof t === n(2444) ? t(r) : t;
    };
    return this[a(1109)]((r, n) => {
      var o = a;
      const c = e(r), f = () => n[o(843)]({ code: W[o(1932)], ...x(r) });
      return typeof Promise !== o(1145) && c instanceof Promise ? c[o(2195)]((d) => d ? !0 : (f(), !1)) : c ? !0 : (f(), !1);
    });
  }
  [s(502)](e, t) {
    return this._refinement((a, x) => {
      var r = B;
      return e(a) ? !0 : (x[r(843)](typeof t == "function" ? t(a, x) : t), !1);
    });
  }
  [s(1109)](e) {
    var t = s;
    return new Ox({ schema: this, typeName: h0[t(1624)], effect: { type: t(502), refinement: e } });
  }
  [s(1738)](e) {
    return this._refinement(e);
  }
  constructor(e) {
    var t = s;
    this[t(1740)] = this.safeParseAsync, this[t(515)] = e, this[t(2078)] = this[t(2078)][t(1982)](this), this[t(673)] = this[t(673)][t(1982)](this), this[t(1554)] = this[t(1554)][t(1982)](this), this[t(1780)] = this[t(1780)][t(1982)](this), this[t(1740)] = this[t(1740)][t(1982)](this), this[t(1479)] = this[t(1479)][t(1982)](this), this[t(502)] = this[t(502)].bind(this), this[t(1738)] = this[t(1738)][t(1982)](this), this[t(726)] = this[t(726)][t(1982)](this), this.nullable = this[t(1944)].bind(this), this.nullish = this[t(1250)].bind(this), this.array = this[t(462)][t(1982)](this), this.promise = this.promise[t(1982)](this), this.or = this.or.bind(this), this[t(2e3)] = this[t(2e3)][t(1982)](this), this[t(1414)] = this.transform[t(1982)](this), this[t(1178)] = this[t(1178)][t(1982)](this), this.default = this.default[t(1982)](this), this[t(1856)] = this.catch[t(1982)](this), this[t(1684)] = this[t(1684)][t(1982)](this), this.pipe = this[t(1820)][t(1982)](this), this[t(1057)] = this[t(1057)].bind(this), this[t(2468)] = this.isNullable[t(1982)](this), this[t(470)] = this[t(470)][t(1982)](this), this["~standard"] = { version: 1, vendor: t(1456), validate: (a) => this[t(2279)](a) };
  }
  [s(726)]() {
    var e = s;
    return Sx[e(536)](this, this[e(515)]);
  }
  [s(1944)]() {
    var e = s;
    return jx[e(536)](this, this._def);
  }
  [s(1250)]() {
    return this.nullable().optional();
  }
  [s(462)]() {
    var e = s;
    return lx[e(536)](this);
  }
  [s(2097)]() {
    return Ee.create(this, this._def);
  }
  or(e) {
    var t = s;
    return be[t(536)]([this, e], this._def);
  }
  [s(2e3)](e) {
    return ye.create(this, e, this._def);
  }
  [s(1414)](e) {
    var t = s;
    return new Ox({ ...m0(this[t(515)]), schema: this, typeName: h0[t(1624)], effect: { type: "transform", transform: e } });
  }
  [s(2178)](e) {
    var t = s;
    const a = typeof e === t(2444) ? e : () => e;
    return new Pe({ ...m0(this[t(515)]), innerType: this, defaultValue: a, typeName: h0.ZodDefault });
  }
  [s(1178)]() {
    var e = s;
    return new Fs({ typeName: h0[e(597)], type: this, ...m0(this[e(515)]) });
  }
  [s(1856)](e) {
    var t = s;
    const a = typeof e == "function" ? e : () => e;
    return new ke({ ...m0(this._def), innerType: this, catchValue: a, typeName: h0[t(816)] });
  }
  describe(e) {
    var t = s;
    const a = this[t(719)];
    return new a({ ...this._def, description: e });
  }
  [s(1820)](e) {
    var t = s;
    return Gt[t(536)](this, e);
  }
  [s(1057)]() {
    return Ie.create(this);
  }
  [s(470)]() {
    var e = s;
    return this[e(673)](void 0).success;
  }
  isNullable() {
    var e = s;
    return this[e(673)](null)[e(768)];
  }
}
const qn = /^c[^\s-]{8,}$/i, An = /^[0-9a-z]+$/, Tn = /^[0-9A-HJKMNP-TV-Z]{26}$/i, Dn = /^[0-9a-fA-F]{8}\b-[0-9a-fA-F]{4}\b-[0-9a-fA-F]{4}\b-[0-9a-fA-F]{4}\b-[0-9a-fA-F]{12}$/i, jn = /^[a-z0-9_-]{21}$/i, Mn = /^[A-Za-z0-9-_]+\.[A-Za-z0-9-_]+\.[A-Za-z0-9-_]*$/, $n = /^[-+]?P(?!$)(?:(?:[-+]?\d+Y)|(?:[-+]?\d+[.,]\d+Y$))?(?:(?:[-+]?\d+M)|(?:[-+]?\d+[.,]\d+M$))?(?:(?:[-+]?\d+W)|(?:[-+]?\d+[.,]\d+W$))?(?:(?:[-+]?\d+D)|(?:[-+]?\d+[.,]\d+D$))?(?:T(?=[\d+-])(?:(?:[-+]?\d+H)|(?:[-+]?\d+[.,]\d+H$))?(?:(?:[-+]?\d+M)|(?:[-+]?\d+[.,]\d+M$))?(?:[-+]?\d+(?:[.,]\d+)?S)?)??$/, Ln = /^(?!\.)(?!.*\.\.)([A-Z0-9_'+\-\.]*)[A-Z0-9_+-]@([A-Z0-9][A-Z0-9\-]*\.)+[A-Z]{2,}$/i, zn = s(1484);
let $e;
const Vn = /^(?:(?:25[0-5]|2[0-4][0-9]|1[0-9][0-9]|[1-9][0-9]|[0-9])\.){3}(?:25[0-5]|2[0-4][0-9]|1[0-9][0-9]|[1-9][0-9]|[0-9])$/, Hn = /^(?:(?:25[0-5]|2[0-4][0-9]|1[0-9][0-9]|[1-9][0-9]|[0-9])\.){3}(?:25[0-5]|2[0-4][0-9]|1[0-9][0-9]|[1-9][0-9]|[0-9])\/(3[0-2]|[12]?[0-9])$/, Un = /^(([0-9a-fA-F]{1,4}:){7,7}[0-9a-fA-F]{1,4}|([0-9a-fA-F]{1,4}:){1,7}:|([0-9a-fA-F]{1,4}:){1,6}:[0-9a-fA-F]{1,4}|([0-9a-fA-F]{1,4}:){1,5}(:[0-9a-fA-F]{1,4}){1,2}|([0-9a-fA-F]{1,4}:){1,4}(:[0-9a-fA-F]{1,4}){1,3}|([0-9a-fA-F]{1,4}:){1,3}(:[0-9a-fA-F]{1,4}){1,4}|([0-9a-fA-F]{1,4}:){1,2}(:[0-9a-fA-F]{1,4}){1,5}|[0-9a-fA-F]{1,4}:((:[0-9a-fA-F]{1,4}){1,6})|:((:[0-9a-fA-F]{1,4}){1,7}|:)|fe80:(:[0-9a-fA-F]{0,4}){0,4}%[0-9a-zA-Z]{1,}|::(ffff(:0{1,4}){0,1}:){0,1}((25[0-5]|(2[0-4]|1{0,1}[0-9]){0,1}[0-9])\.){3,3}(25[0-5]|(2[0-4]|1{0,1}[0-9]){0,1}[0-9])|([0-9a-fA-F]{1,4}:){1,4}:((25[0-5]|(2[0-4]|1{0,1}[0-9]){0,1}[0-9])\.){3,3}(25[0-5]|(2[0-4]|1{0,1}[0-9]){0,1}[0-9]))$/, Zn = /^(([0-9a-fA-F]{1,4}:){7,7}[0-9a-fA-F]{1,4}|([0-9a-fA-F]{1,4}:){1,7}:|([0-9a-fA-F]{1,4}:){1,6}:[0-9a-fA-F]{1,4}|([0-9a-fA-F]{1,4}:){1,5}(:[0-9a-fA-F]{1,4}){1,2}|([0-9a-fA-F]{1,4}:){1,4}(:[0-9a-fA-F]{1,4}){1,3}|([0-9a-fA-F]{1,4}:){1,3}(:[0-9a-fA-F]{1,4}){1,4}|([0-9a-fA-F]{1,4}:){1,2}(:[0-9a-fA-F]{1,4}){1,5}|[0-9a-fA-F]{1,4}:((:[0-9a-fA-F]{1,4}){1,6})|:((:[0-9a-fA-F]{1,4}){1,7}|:)|fe80:(:[0-9a-fA-F]{0,4}){0,4}%[0-9a-zA-Z]{1,}|::(ffff(:0{1,4}){0,1}:){0,1}((25[0-5]|(2[0-4]|1{0,1}[0-9]){0,1}[0-9])\.){3,3}(25[0-5]|(2[0-4]|1{0,1}[0-9]){0,1}[0-9])|([0-9a-fA-F]{1,4}:){1,4}:((25[0-5]|(2[0-4]|1{0,1}[0-9]){0,1}[0-9])\.){3,3}(25[0-5]|(2[0-4]|1{0,1}[0-9]){0,1}[0-9]))\/(12[0-8]|1[01][0-9]|[1-9]?[0-9])$/, Bn = /^([0-9a-zA-Z+/]{4})*(([0-9a-zA-Z+/]{2}==)|([0-9a-zA-Z+/]{3}=))?$/, Kn = /^([0-9a-zA-Z-_]{4})*(([0-9a-zA-Z-_]{2}(==)?)|([0-9a-zA-Z-_]{3}(=)?))?$/, Is = s(819), Wn = new RegExp("^" + Is + "$");
function Cs(i) {
  var e = s;
  let t = "[0-5]\\d";
  i[e(609)] ? t = t + "\\.\\d{" + i[e(609)] + "}" : i[e(609)] == null && (t = t + e(2192));
  const a = i[e(609)] ? "+" : "?";
  return e(541) + t + ")" + a;
}
function Jn(i) {
  return new RegExp("^" + Cs(i) + "$");
}
function Qn(i) {
  var e = s;
  let t = Is + "T" + Cs(i);
  const a = [];
  return a[e(2523)](i[e(2446)] ? "Z?" : "Z"), i[e(827)] && a[e(2523)](e(2501)), t = t + "(" + a.join("|") + ")", new RegExp("^" + t + "$");
}
function Gn(i, e) {
  var t = s;
  return !!((e === "v4" || !e) && Vn[t(2263)](i) || (e === "v6" || !e) && Un[t(2263)](i));
}
function Yn(i, e) {
  var t = s;
  if (!Mn[t(2263)](i)) return !1;
  try {
    const [a] = i.split(".");
    if (!a) return !1;
    const x = a[t(2304)](/-/g, "+")[t(2304)](/_/g, "/")[t(1767)](a[t(1775)] + (4 - a[t(1775)] % 4) % 4, "="), r = JSON[t(2078)](atob(x));
    return !(typeof r != "object" || r === null || t(2364) in r && (r == null ? void 0 : r[t(2364)]) !== t(2189) || !r[t(2528)] || e && r[t(2528)] !== e);
  } catch {
    return !1;
  }
}
function Xn(i, e) {
  var t = s;
  return !!((e === "v4" || !e) && Hn.test(i) || (e === "v6" || !e) && Zn[t(2263)](i));
}
class wx extends k0 {
  _parse(e) {
    var t = s;
    if (this[t(515)][t(1859)] && (e.data = String(e[t(530)])), this[t(1237)](e) !== x0[t(998)]) {
      const n = this._getOrReturnCtx(e);
      return X(n, { code: W[t(1084)], expected: x0[t(998)], received: n[t(563)] }), l0;
    }
    const x = new xx();
    let r;
    for (const n of this[t(515)][t(1730)])
      if (n[t(983)] === t(2369)) e[t(530)].length < n[t(895)] && (r = this[t(736)](e, r), X(r, { code: W[t(2172)], minimum: n[t(895)], type: t(998), inclusive: !0, exact: !1, message: n[t(532)] }), x[t(2291)]());
      else if (n[t(983)] === "max") e[t(530)].length > n[t(895)] && (r = this._getOrReturnCtx(e, r), X(r, { code: W[t(825)], maximum: n[t(895)], type: t(998), inclusive: !0, exact: !1, message: n[t(532)] }), x.dirty());
      else if (n[t(983)] === t(1775)) {
        const o = e[t(530)][t(1775)] > n[t(895)], c = e[t(530)][t(1775)] < n.value;
        (o || c) && (r = this[t(736)](e, r), o ? X(r, { code: W[t(825)], maximum: n[t(895)], type: "string", inclusive: !0, exact: !0, message: n[t(532)] }) : c && X(r, { code: W[t(2172)], minimum: n[t(895)], type: "string", inclusive: !0, exact: !0, message: n[t(532)] }), x[t(2291)]());
      } else if (n[t(983)] === "email") !Ln[t(2263)](e.data) && (r = this[t(736)](e, r), X(r, { validation: "email", code: W.invalid_string, message: n[t(532)] }), x[t(2291)]());
      else if (n.kind === t(1943)) !$e && ($e = new RegExp(zn, "u")), !$e[t(2263)](e[t(530)]) && (r = this[t(736)](e, r), X(r, { validation: t(1943), code: W.invalid_string, message: n[t(532)] }), x[t(2291)]());
      else if (n[t(983)] === "uuid") !Dn[t(2263)](e[t(530)]) && (r = this[t(736)](e, r), X(r, { validation: t(450), code: W[t(2531)], message: n[t(532)] }), x.dirty());
      else if (n.kind === "nanoid") !jn.test(e[t(530)]) && (r = this[t(736)](e, r), X(r, { validation: t(2108), code: W[t(2531)], message: n[t(532)] }), x[t(2291)]());
      else if (n.kind === "cuid") !qn[t(2263)](e[t(530)]) && (r = this[t(736)](e, r), X(r, { validation: t(1138), code: W.invalid_string, message: n[t(532)] }), x[t(2291)]());
      else if (n[t(983)] === "cuid2") !An[t(2263)](e[t(530)]) && (r = this[t(736)](e, r), X(r, { validation: t(991), code: W[t(2531)], message: n.message }), x[t(2291)]());
      else if (n[t(983)] === t(1114)) !Tn.test(e[t(530)]) && (r = this[t(736)](e, r), X(r, { validation: t(1114), code: W.invalid_string, message: n[t(532)] }), x[t(2291)]());
      else if (n[t(983)] === t(2463)) try {
        new URL(e[t(530)]);
      } catch {
        r = this[t(736)](e, r), X(r, { validation: t(2463), code: W[t(2531)], message: n[t(532)] }), x.dirty();
      }
      else
        n.kind === t(552) ? (n[t(552)].lastIndex = 0, !n.regex.test(e.data) && (r = this[t(736)](e, r), X(r, { validation: t(552), code: W[t(2531)], message: n[t(532)] }), x[t(2291)]())) : n.kind === t(2426) ? e[t(530)] = e[t(530)][t(2426)]() : n[t(983)] === t(2115) ? !e[t(530)][t(2115)](n[t(895)], n[t(1322)]) && (r = this[t(736)](e, r), X(r, { code: W.invalid_string, validation: { includes: n.value, position: n[t(1322)] }, message: n[t(532)] }), x[t(2291)]()) : n.kind === t(627) ? e.data = e[t(530)].toLowerCase() : n[t(983)] === "toUpperCase" ? e[t(530)] = e[t(530)][t(1485)]() : n[t(983)] === t(2232) ? !e[t(530)][t(2232)](n[t(895)]) && (r = this[t(736)](e, r), X(r, { code: W[t(2531)], validation: { startsWith: n[t(895)] }, message: n[t(532)] }), x[t(2291)]()) : n.kind === "endsWith" ? !e[t(530)][t(1793)](n[t(895)]) && (r = this[t(736)](e, r), X(r, { code: W[t(2531)], validation: { endsWith: n[t(895)] }, message: n.message }), x[t(2291)]()) : n[t(983)] === t(1327) ? !Qn(n)[t(2263)](e.data) && (r = this[t(736)](e, r), X(r, { code: W[t(2531)], validation: "datetime", message: n.message }), x[t(2291)]()) : n.kind === t(1390) ? !Wn.test(e[t(530)]) && (r = this[t(736)](e, r), X(r, { code: W.invalid_string, validation: "date", message: n.message }), x[t(2291)]()) : n.kind === t(1689) ? !Jn(n)[t(2263)](e[t(530)]) && (r = this[t(736)](e, r), X(r, { code: W[t(2531)], validation: t(1689), message: n[t(532)] }), x[t(2291)]()) : n[t(983)] === t(2133) ? !$n[t(2263)](e.data) && (r = this._getOrReturnCtx(e, r), X(r, { validation: t(2133), code: W[t(2531)], message: n[t(532)] }), x[t(2291)]()) : n[t(983)] === "ip" ? !Gn(e[t(530)], n[t(630)]) && (r = this[t(736)](e, r), X(r, { validation: "ip", code: W.invalid_string, message: n[t(532)] }), x[t(2291)]()) : n[t(983)] === "jwt" ? !Yn(e.data, n.alg) && (r = this[t(736)](e, r), X(r, { validation: t(661), code: W[t(2531)], message: n[t(532)] }), x[t(2291)]()) : n[t(983)] === t(1398) ? !Xn(e.data, n[t(630)]) && (r = this[t(736)](e, r), X(r, { validation: t(1398), code: W[t(2531)], message: n[t(532)] }), x[t(2291)]()) : n[t(983)] === t(2318) ? !Bn.test(e[t(530)]) && (r = this[t(736)](e, r), X(r, { validation: "base64", code: W[t(2531)], message: n[t(532)] }), x[t(2291)]()) : n[t(983)] === t(2441) ? !Kn[t(2263)](e[t(530)]) && (r = this._getOrReturnCtx(e, r), X(r, { validation: t(2441), code: W[t(2531)], message: n[t(532)] }), x[t(2291)]()) : C0.assertNever(n);
    return { status: x[t(895)], value: e[t(530)] };
  }
  _regex(e, t, a) {
    var x = s;
    return this[x(502)]((r) => e.test(r), { validation: t, code: W[x(2531)], ...r0[x(582)](a) });
  }
  [s(1693)](e) {
    var t = s;
    return new wx({ ...this[t(515)], checks: [...this[t(515)][t(1730)], e] });
  }
  [s(1086)](e) {
    var t = s;
    return this[t(1693)]({ kind: "email", ...r0[t(582)](e) });
  }
  [s(2463)](e) {
    var t = s;
    return this[t(1693)]({ kind: "url", ...r0[t(582)](e) });
  }
  emoji(e) {
    var t = s;
    return this[t(1693)]({ kind: "emoji", ...r0.errToObj(e) });
  }
  uuid(e) {
    var t = s;
    return this[t(1693)]({ kind: t(450), ...r0[t(582)](e) });
  }
  [s(2108)](e) {
    var t = s;
    return this[t(1693)]({ kind: t(2108), ...r0.errToObj(e) });
  }
  [s(1138)](e) {
    var t = s;
    return this[t(1693)]({ kind: t(1138), ...r0[t(582)](e) });
  }
  [s(991)](e) {
    var t = s;
    return this[t(1693)]({ kind: t(991), ...r0[t(582)](e) });
  }
  [s(1114)](e) {
    var t = s;
    return this[t(1693)]({ kind: "ulid", ...r0.errToObj(e) });
  }
  [s(2318)](e) {
    var t = s;
    return this[t(1693)]({ kind: t(2318), ...r0[t(582)](e) });
  }
  base64url(e) {
    var t = s;
    return this[t(1693)]({ kind: t(2441), ...r0[t(582)](e) });
  }
  [s(661)](e) {
    var t = s;
    return this._addCheck({ kind: t(661), ...r0.errToObj(e) });
  }
  ip(e) {
    var t = s;
    return this[t(1693)]({ kind: "ip", ...r0[t(582)](e) });
  }
  [s(1398)](e) {
    var t = s;
    return this._addCheck({ kind: t(1398), ...r0[t(582)](e) });
  }
  [s(1327)](e) {
    var t = s;
    return typeof e === t(998) ? this[t(1693)]({ kind: t(1327), precision: null, offset: !1, local: !1, message: e }) : this[t(1693)]({ kind: t(1327), precision: typeof (e == null ? void 0 : e[t(609)]) === t(1145) ? null : e == null ? void 0 : e.precision, offset: (e == null ? void 0 : e[t(827)]) ?? !1, local: (e == null ? void 0 : e.local) ?? !1, ...r0.errToObj(e == null ? void 0 : e.message) });
  }
  date(e) {
    var t = s;
    return this[t(1693)]({ kind: t(1390), message: e });
  }
  [s(1689)](e) {
    var t = s;
    return typeof e === t(998) ? this[t(1693)]({ kind: t(1689), precision: null, message: e }) : this._addCheck({ kind: "time", precision: typeof (e == null ? void 0 : e[t(609)]) === t(1145) ? null : e == null ? void 0 : e.precision, ...r0[t(582)](e == null ? void 0 : e[t(532)]) });
  }
  duration(e) {
    var t = s;
    return this[t(1693)]({ kind: t(2133), ...r0.errToObj(e) });
  }
  [s(552)](e, t) {
    var a = s;
    return this[a(1693)]({ kind: a(552), regex: e, ...r0[a(582)](t) });
  }
  [s(2115)](e, t) {
    var a = s;
    return this[a(1693)]({ kind: a(2115), value: e, position: t == null ? void 0 : t.position, ...r0[a(582)](t == null ? void 0 : t.message) });
  }
  [s(2232)](e, t) {
    var a = s;
    return this[a(1693)]({ kind: "startsWith", value: e, ...r0[a(582)](t) });
  }
  [s(1793)](e, t) {
    var a = s;
    return this._addCheck({ kind: "endsWith", value: e, ...r0[a(582)](t) });
  }
  [s(2369)](e, t) {
    var a = s;
    return this._addCheck({ kind: a(2369), value: e, ...r0[a(582)](t) });
  }
  max(e, t) {
    var a = s;
    return this[a(1693)]({ kind: a(723), value: e, ...r0.errToObj(t) });
  }
  [s(1775)](e, t) {
    var a = s;
    return this[a(1693)]({ kind: a(1775), value: e, ...r0[a(582)](t) });
  }
  nonempty(e) {
    var t = s;
    return this[t(2369)](1, r0[t(582)](e));
  }
  [s(2426)]() {
    var e = s;
    return new wx({ ...this[e(515)], checks: [...this[e(515)][e(1730)], { kind: e(2426) }] });
  }
  [s(627)]() {
    var e = s;
    return new wx({ ...this._def, checks: [...this[e(515)][e(1730)], { kind: "toLowerCase" }] });
  }
  [s(1485)]() {
    return new wx({ ...this._def, checks: [...this._def.checks, { kind: "toUpperCase" }] });
  }
  get isDatetime() {
    var e = s;
    return !!this[e(515)][e(1730)][e(951)]((t) => t.kind === "datetime");
  }
  get [s(2308)]() {
    var e = s;
    return !!this._def[e(1730)][e(951)]((t) => t[e(983)] === e(1390));
  }
  get [s(1376)]() {
    var e = s;
    return !!this[e(515)].checks[e(951)]((t) => t[e(983)] === e(1689));
  }
  get isDuration() {
    var e = s;
    return !!this[e(515)].checks[e(951)]((t) => t[e(983)] === "duration");
  }
  get [s(784)]() {
    var e = s;
    return !!this[e(515)].checks[e(951)]((t) => t[e(983)] === e(1086));
  }
  get [s(1441)]() {
    var e = s;
    return !!this[e(515)][e(1730)].find((t) => t[e(983)] === e(2463));
  }
  get [s(1149)]() {
    var e = s;
    return !!this._def[e(1730)].find((t) => t[e(983)] === e(1943));
  }
  get [s(2002)]() {
    var e = s;
    return !!this[e(515)][e(1730)].find((t) => t.kind === e(450));
  }
  get [s(800)]() {
    var e = s;
    return !!this._def[e(1730)].find((t) => t[e(983)] === e(2108));
  }
  get [s(2285)]() {
    var e = s;
    return !!this[e(515)][e(1730)][e(951)]((t) => t[e(983)] === "cuid");
  }
  get [s(629)]() {
    var e = s;
    return !!this._def.checks[e(951)]((t) => t[e(983)] === e(991));
  }
  get [s(1873)]() {
    var e = s;
    return !!this[e(515)].checks[e(951)]((t) => t[e(983)] === e(1114));
  }
  get [s(2484)]() {
    var e = s;
    return !!this._def[e(1730)][e(951)]((t) => t.kind === "ip");
  }
  get [s(1381)]() {
    var e = s;
    return !!this[e(515)][e(1730)][e(951)]((t) => t[e(983)] === "cidr");
  }
  get [s(882)]() {
    var e = s;
    return !!this._def[e(1730)][e(951)]((t) => t[e(983)] === e(2318));
  }
  get [s(1573)]() {
    var e = s;
    return !!this._def[e(1730)][e(951)]((t) => t[e(983)] === "base64url");
  }
  get [s(1292)]() {
    var e = s;
    let t = null;
    for (const a of this[e(515)].checks)
      a[e(983)] === "min" && (t === null || a.value > t) && (t = a.value);
    return t;
  }
  get [s(1870)]() {
    var e = s;
    let t = null;
    for (const a of this[e(515)][e(1730)])
      a[e(983)] === e(723) && (t === null || a[e(895)] < t) && (t = a[e(895)]);
    return t;
  }
}
wx[s(536)] = (i) => {
  var e = s;
  return new wx({ checks: [], typeName: h0[e(516)], coerce: (i == null ? void 0 : i[e(1859)]) ?? !1, ...m0(i) });
};
function _n(i, e) {
  var t = s;
  const a = (i[t(1928)]()[t(1801)](".")[1] || "")[t(1775)], x = (e[t(1928)]()[t(1801)](".")[1] || "")[t(1775)], r = a > x ? a : x, n = Number[t(2254)](i[t(466)](r).replace(".", "")), o = Number[t(2254)](e[t(466)](r)[t(2304)](".", ""));
  return n % o / 10 ** r;
}
class Ux extends k0 {
  constructor() {
    var e = s;
    super(...arguments), this[e(2369)] = this[e(1010)], this[e(723)] = this[e(796)], this[e(1772)] = this[e(1718)];
  }
  [s(554)](e) {
    var t = s;
    if (this._def[t(1859)] && (e[t(530)] = Number(e.data)), this._getType(e) !== x0[t(1225)]) {
      const n = this._getOrReturnCtx(e);
      return X(n, { code: W[t(1084)], expected: x0[t(1225)], received: n[t(563)] }), l0;
    }
    let x;
    const r = new xx();
    for (const n of this[t(515)][t(1730)])
      n[t(983)] === t(899) ? !C0[t(2154)](e[t(530)]) && (x = this[t(736)](e, x), X(x, { code: W[t(1084)], expected: t(1845), received: t(2067), message: n.message }), r[t(2291)]()) : n.kind === t(2369) ? (n[t(1747)] ? e[t(530)] < n.value : e[t(530)] <= n.value) && (x = this[t(736)](e, x), X(x, { code: W[t(2172)], minimum: n[t(895)], type: t(1225), inclusive: n[t(1747)], exact: !1, message: n[t(532)] }), r[t(2291)]()) : n[t(983)] === "max" ? (n[t(1747)] ? e[t(530)] > n[t(895)] : e.data >= n.value) && (x = this[t(736)](e, x), X(x, { code: W[t(825)], maximum: n[t(895)], type: t(1225), inclusive: n[t(1747)], exact: !1, message: n[t(532)] }), r[t(2291)]()) : n[t(983)] === t(1718) ? _n(e.data, n[t(895)]) !== 0 && (x = this[t(736)](e, x), X(x, { code: W[t(2082)], multipleOf: n[t(895)], message: n[t(532)] }), r[t(2291)]()) : n[t(983)] === t(2437) ? !Number[t(1060)](e[t(530)]) && (x = this[t(736)](e, x), X(x, { code: W.not_finite, message: n[t(532)] }), r[t(2291)]()) : C0[t(1542)](n);
    return { status: r[t(895)], value: e[t(530)] };
  }
  [s(1010)](e, t) {
    var a = s;
    return this[a(2146)]("min", e, !0, r0[a(1928)](t));
  }
  gt(e, t) {
    var a = s;
    return this[a(2146)](a(2369), e, !1, r0[a(1928)](t));
  }
  [s(796)](e, t) {
    var a = s;
    return this[a(2146)](a(723), e, !0, r0[a(1928)](t));
  }
  lt(e, t) {
    var a = s;
    return this.setLimit(a(723), e, !1, r0[a(1928)](t));
  }
  [s(2146)](e, t, a, x) {
    var r = s;
    return new Ux({ ...this[r(515)], checks: [...this[r(515)].checks, { kind: e, value: t, inclusive: a, message: r0[r(1928)](x) }] });
  }
  _addCheck(e) {
    var t = s;
    return new Ux({ ...this[t(515)], checks: [...this[t(515)][t(1730)], e] });
  }
  [s(899)](e) {
    var t = s;
    return this[t(1693)]({ kind: t(899), message: r0[t(1928)](e) });
  }
  positive(e) {
    var t = s;
    return this[t(1693)]({ kind: t(2369), value: 0, inclusive: !1, message: r0[t(1928)](e) });
  }
  [s(652)](e) {
    var t = s;
    return this[t(1693)]({ kind: t(723), value: 0, inclusive: !1, message: r0.toString(e) });
  }
  [s(1940)](e) {
    var t = s;
    return this[t(1693)]({ kind: t(723), value: 0, inclusive: !0, message: r0[t(1928)](e) });
  }
  [s(634)](e) {
    var t = s;
    return this[t(1693)]({ kind: t(2369), value: 0, inclusive: !0, message: r0.toString(e) });
  }
  [s(1718)](e, t) {
    var a = s;
    return this[a(1693)]({ kind: a(1718), value: e, message: r0[a(1928)](t) });
  }
  [s(2437)](e) {
    var t = s;
    return this[t(1693)]({ kind: t(2437), message: r0[t(1928)](e) });
  }
  safe(e) {
    var t = s;
    return this._addCheck({ kind: t(2369), inclusive: !0, value: Number[t(1794)], message: r0[t(1928)](e) })[t(1693)]({ kind: t(723), inclusive: !0, value: Number.MAX_SAFE_INTEGER, message: r0[t(1928)](e) });
  }
  get [s(835)]() {
    var e = s;
    let t = null;
    for (const a of this[e(515)][e(1730)])
      a[e(983)] === "min" && (t === null || a[e(895)] > t) && (t = a[e(895)]);
    return t;
  }
  get [s(1659)]() {
    var e = s;
    let t = null;
    for (const a of this[e(515)].checks)
      a[e(983)] === "max" && (t === null || a[e(895)] < t) && (t = a[e(895)]);
    return t;
  }
  get isInt() {
    var e = s;
    return !!this[e(515)][e(1730)][e(951)]((t) => t[e(983)] === "int" || t[e(983)] === e(1718) && C0[e(2154)](t[e(895)]));
  }
  get [s(1060)]() {
    var e = s;
    let t = null, a = null;
    for (const x of this[e(515)][e(1730)]) {
      if (x[e(983)] === "finite" || x[e(983)] === "int" || x.kind === e(1718)) return !0;
      x[e(983)] === "min" ? (a === null || x[e(895)] > a) && (a = x[e(895)]) : x[e(983)] === e(723) && (t === null || x[e(895)] < t) && (t = x[e(895)]);
    }
    return Number.isFinite(a) && Number[e(1060)](t);
  }
}
Ux[s(536)] = (i) => {
  var e = s;
  return new Ux({ checks: [], typeName: h0[e(1802)], coerce: (i == null ? void 0 : i[e(1859)]) || !1, ...m0(i) });
};
class ee extends k0 {
  constructor() {
    var e = s;
    super(...arguments), this[e(2369)] = this[e(1010)], this.max = this.lte;
  }
  [s(554)](e) {
    var t = s;
    if (this[t(515)][t(1859)]) try {
      e[t(530)] = BigInt(e[t(530)]);
    } catch {
      return this[t(2145)](e);
    }
    if (this[t(1237)](e) !== x0.bigint) return this[t(2145)](e);
    let x;
    const r = new xx();
    for (const n of this[t(515)][t(1730)])
      n[t(983)] === t(2369) ? (n[t(1747)] ? e[t(530)] < n[t(895)] : e[t(530)] <= n[t(895)]) && (x = this._getOrReturnCtx(e, x), X(x, { code: W.too_small, type: t(1301), minimum: n.value, inclusive: n[t(1747)], message: n[t(532)] }), r[t(2291)]()) : n.kind === t(723) ? (n[t(1747)] ? e[t(530)] > n[t(895)] : e[t(530)] >= n.value) && (x = this[t(736)](e, x), X(x, { code: W[t(825)], type: t(1301), maximum: n[t(895)], inclusive: n[t(1747)], message: n[t(532)] }), r[t(2291)]()) : n.kind === t(1718) ? e[t(530)] % n.value !== BigInt(0) && (x = this[t(736)](e, x), X(x, { code: W[t(2082)], multipleOf: n.value, message: n[t(532)] }), r.dirty()) : C0[t(1542)](n);
    return { status: r[t(895)], value: e.data };
  }
  [s(2145)](e) {
    var t = s;
    const a = this[t(736)](e);
    return X(a, { code: W.invalid_type, expected: x0[t(1301)], received: a[t(563)] }), l0;
  }
  [s(1010)](e, t) {
    var a = s;
    return this[a(2146)](a(2369), e, !0, r0[a(1928)](t));
  }
  gt(e, t) {
    var a = s;
    return this[a(2146)](a(2369), e, !1, r0[a(1928)](t));
  }
  [s(796)](e, t) {
    var a = s;
    return this.setLimit(a(723), e, !0, r0[a(1928)](t));
  }
  lt(e, t) {
    var a = s;
    return this[a(2146)](a(723), e, !1, r0[a(1928)](t));
  }
  [s(2146)](e, t, a, x) {
    var r = s;
    return new ee({ ...this[r(515)], checks: [...this._def[r(1730)], { kind: e, value: t, inclusive: a, message: r0.toString(x) }] });
  }
  [s(1693)](e) {
    var t = s;
    return new ee({ ...this[t(515)], checks: [...this[t(515)][t(1730)], e] });
  }
  [s(2424)](e) {
    var t = s;
    return this[t(1693)]({ kind: t(2369), value: BigInt(0), inclusive: !1, message: r0.toString(e) });
  }
  [s(652)](e) {
    var t = s;
    return this[t(1693)]({ kind: t(723), value: BigInt(0), inclusive: !1, message: r0[t(1928)](e) });
  }
  [s(1940)](e) {
    var t = s;
    return this[t(1693)]({ kind: t(723), value: BigInt(0), inclusive: !0, message: r0[t(1928)](e) });
  }
  [s(634)](e) {
    var t = s;
    return this._addCheck({ kind: t(2369), value: BigInt(0), inclusive: !0, message: r0[t(1928)](e) });
  }
  [s(1718)](e, t) {
    var a = s;
    return this[a(1693)]({ kind: "multipleOf", value: e, message: r0[a(1928)](t) });
  }
  get [s(835)]() {
    var e = s;
    let t = null;
    for (const a of this[e(515)].checks)
      a[e(983)] === "min" && (t === null || a.value > t) && (t = a[e(895)]);
    return t;
  }
  get [s(1659)]() {
    var e = s;
    let t = null;
    for (const a of this._def[e(1730)])
      a[e(983)] === e(723) && (t === null || a[e(895)] < t) && (t = a[e(895)]);
    return t;
  }
}
ee.create = (i) => {
  var e = s;
  return new ee({ checks: [], typeName: h0[e(1682)], coerce: (i == null ? void 0 : i[e(1859)]) ?? !1, ...m0(i) });
};
class At extends k0 {
  _parse(e) {
    var t = s;
    if (this._def.coerce && (e[t(530)] = !!e.data), this._getType(e) !== x0[t(2529)]) {
      const x = this[t(736)](e);
      return X(x, { code: W.invalid_type, expected: x0[t(2529)], received: x[t(563)] }), l0;
    }
    return rx(e.data);
  }
}
At.create = (i) => {
  var e = s;
  return new At({ typeName: h0[e(1893)], coerce: (i == null ? void 0 : i.coerce) || !1, ...m0(i) });
};
function me() {
  var i = [") {   ", "isDate", "varOccurences", "title", " == 'object' && !(", "endTurn", "applyPostProcessor", "cache", ") && (missing", "sdpppID", "host", "base64", "(?:", " = new RegExp(", "port", "Workflow stopped by user", "sdppp/broadcast", "ownProperties", "Converting circular structure to JSON", "Comfy.userId", " not found on node ", " = true; else if (!Array.isArray(schema", "_cachedPath", "pick", " === 0 || ", "additionalItems", ") == -1 ", "ComfyManager not found, cannot reboot", " = true; if ( ", "setupConnectionHandlers", "[ ]*{", "\\:\\:", "logger", "exception_message", "unknownKeys", "merge", "_refs", "[j])) { ", "keywords", "workflows/", "graphChanged", "messageQueue", "aec", "[0-9A-Fa-f]", "sourceType", "cimode", "sqr", "reboot", "_onclose", "broadcastHandlers", "keySeparator", "3rdParty", "next", "capacity", "server", "utils", "image", "typ", "usePattern", "currency", "addFormat", ")) ", "min", "Email address's domain name can not be converted to ASCII via punycode: ", "reason", "Operation was aborted", "__internal_requestInitialState_", "checkDataType", "api", "lazycreate", "failed parsing options string in nesting for key ", "Invalid function arguments", "race", "sort", "WARNING DEPRECATED: ", "const", ")) { ", "extend", "unicodeSupport", "mergeObjectSync", "_transport", " if (errors === ", "domainHost", " , message: 'should NOT be ", "allOf", " validate.errors = vErrors; return false; ", " via punycode: ", " !== undefined)", "yhd", "backend", "dir", "read", "startMonitoring", "assertCapabilityForMethod", "nan", "joinArrays", "getKeyword", "UUID is not valid.", " = errors;", "widgets", " } else { ", "exclusiveMinimum", "missingRefs", " = await ", "setupAbortHandler", " | ", "saveWorkflow", "ZodUnion", "lastIndexOf", "prepend", "addResources", "ars", "_meta", "statements", "Failed to send response: ", "assertCanSetRequestHandler", "workflows", "positive", "getResourceBundle", "trim", "$dataMetaSchema", "getDefaultValueFromField", "Graph must have at least one node", "#00CC33", "#CC00CC", "isClone", "sendErrorResponse", "unknownFormats", "apc", "#33CC00", "finite", "uri", "$schema", "_clientVersion", "base64url", "loadGraphData", "pop", "function", 'schema with key or id "', "local", "#66CC33", "alwaysFormat", "MCP error ", "disable", "sdppp/streamRequest", "executeHandlerAsync", "getConnectionCount", "currentNodeId", ".call( ", "_processInputParams", " } if (errors === ", "notifications/resources/updated", "aborted", "toHash", "Client does not support listing roots (required for ", "isArray", "url", "every", "onNotification", " == 'boolean' || ", '[\\"]', "isNullable", "rtl", "token", "Invalid attempt to destructure non-iterable instance", "maxItems", "dataVar", "escapeFragment", "); errors = vErrors.length;  for (var ", "exclude", "key", "modules", "options", "(typeof ", "))))) {", "setWidgetValue", "executed", "isIP", "iterator", ") {", "initializeProducer", "prompts/get", "prompt_id", "assign", "findPathInternal", "optionsMap", ".validate; var ", "finished", "_formats", "cleanup", ".additionalItems", "Error updating store ", "formData", " === null || (", "([+-]\\d{2}:?\\d{2})", "schemaPath", "nestingPrefix", "fatal", "resolvedOptions", "responseSchema", "implementAction", "getConnectedNodeIds", "thisServer", "./api/manager/reboot", "outgoing", "from", "queuePrompt", "validateActionRequest", "ignore", "splice", "store:update:", "missingKey", "detail", "userAgent", "localeCompare", "hasPath", "push", "curlayer_selection", "_limitProperties", "[\\/\\?]", "ZodEnum", "alg", "boolean", "Intersection results could not be merged", "invalid_string", " = [", "unescapePrefix", "PCT_ENCODED", "cacheUserLanguage", "isOpen", "arrayToEnum", "PluralRules", "xmn", " ? ", "uxpHost", "#00CCFF", "call", "_timeoutInfo", "_errors", "$comment", "rest", "); for (var ", "uuid", "isTop", " = false; ", "Synchronous parse encountered promise.", ") || ", "comfy-entry", " = null; ", " throw new ValidationError([", "changeTracker", " || validate.schema", "pluralSeparator", "maxRetries", "array", " else if (", "more than", " = vErrors[", "toFixed", "broadcastReceived", "setItem", "插件可能正在拦截 PS 快捷键... ", "isOptional", "IPV6ADDRESS", ")' returned an object instead of string.", "; if (vErrors !== null) { if (", "formatParams", "milliseconds", " - no connection available", "Not a ZodError: ", "_resetTimeout", "types", "]; var ", " === null || ", " should be boolean' ", "asyncIterator", "label", "HTTP URIs must have a host.", "relatedRequestId", "#FF00CC", "lng", "fcName", "#FFCC00", "cleanCode", " -> ", "assertNotificationCapability", " = errors;var ", " , validate.schema", "parent", " , params: { property: '", "exception", "You are passing a wrong module! Please check the object you are passing to i18next.use()", "  var err =   ", "loadResources", "refinement", "pes", "passthrough", "assert", ".length == 0) {", " != 'boolean') ", "implements", "var customRule", "is a required property", "apd", "fallbackRequestHandler", "processQueueItems", "ZodAny", "_def", "ZodString", "prompts/list", "toStringTag", "keywordValidate", "resolvedLanguage", "initializeConsumer", "loadSchema", "sendActionRequest", "translate", ` , message: 'should match pattern "`, "_compilations", "endpoint", "Array must contain ", "maxParallelReads", "data", "graph", "message", "resourceName", "Error in broadcast handler for ", "schemaHasRules", "create", "passContext", "[\\uE000-\\uF8FF]", "waitingReads", "nodeProxies", "([01]\\d|2[0-3]):[0-5]\\d(:", "listenMessageCallback", "deprecate", " , params: { type: '", "async", "freeze", "add", "It seems you are nesting recursively key: ", "setDefaultNamespace", "sendAbortedResponse", "use", "regex", ".else", "_parse", "flatten", "initializeResponseQueue", "catchValue", "MissingRef", "enum", "enable", "pendingCount", ";  if (vErrors === null) vErrors = [err]; else vErrors.push(err); errors++; ", "parsedType", "exactly", "_cleanupTimeout", "schema id must be string", "         , parentSchema: validate.schema", "ZodNaN", "createAbortHandler", " = +", ` , message: 'should pass "`, "fallbackLng", "URN can not be parsed.", "_key", "Node not found", "reconnecting", "&gt;", "curlayer_curlayer", ";  if (vErrors === null) vErrors = [err]; else vErrors.push(err); errors++; } else if (", " == 'object' && Array.isArray(", "sdppp/updateStore/", "errToObj", "finally", " else ", "keyPrefix", "notifications/prompts/list_changed", "objectValues", "PS shortcuts may be blocked by plugin...", "_responseHandlers", "uri-reference", "absolute", "sdpppX2", "ayl", "code", " = customRules[", "getConnectionInternal", "ZodBranded", "pluralResolver", "createGlobalDispatcherForType", "i18nFormat", "getProperty", " , data: ", "status", "3187912DqTeAQ", "initImmediate", "init: no languageDetector is used and no lng is defined", "https://github.com/ajv-validator/ajv/blob/master/lib/definition_schema.js", " var isAdditional", "precision", " not implemented for node ", "prototype", "renderer", "separator", " = true;  ", " &&   Object.prototype.hasOwnProperty.call(", "element", 'Invalid input: must include "', "ctx", "null", "stopSequence", "ucs2length", " ? await ", "__cycle__", "_exclusiveLimit", "]) ", "useDefaults", "toLowerCase", "select", "isCUID2", "version", "logger must implement log, warn and error methods", "\\' is invalid' ", " in ", "nonnegative", '" as the namespace "', "openWorkflows", "nest", "registerDirectRequestHandler", "Internal ZodObject error: invalid unknownKeys value.", "#CC3300", "exclusiveMaximum", "%25", "symbol", "ZodLiteral", "tolerant", "external", "addUsedSchema", "initializeNodeStores", "onAbort", "isInitializing", "same-document", "negative", "params", "_compile", "subject", "buildDirectedAdjacencyList", ", schema", "   ", "_capabilities", "_parseSync", "jwt", " if ( ", "loadOne", "isEmpty", "customRule", "createInstance", "getUsedParamsDetails", "fallback", "addMessageEventListener", " if (schema", "getNeighbors", "currentOnly", "safeParse", "#CC0000", "); if (", "assertRequestHandlerCapability", "Values", "McpError", "useColors", " = defaults[", "scheme", "listMode", "react", "overloadTranslationOptionHandler", "if (!", "_setupTimeout", ") break; } ", "colors", "images", "random", " != 'number') || ", "object", "now", "sampling", "suffix", " = false;  ", "ifClause", "Server does not support tools (required for ", "normalizeId", "parentData", "registerRequestHandler", "missingRef", "strictKeywords", "[\\!\\$\\%\\'\\(\\)\\*\\+\\,\\-\\.0-9\\<\\>A-Z\\x5E-\\x7E]", "'[' + ", "storage", "; else if (", "dfsInterval", "rejecting language code not found in supportedLngs: ", "useDefault", " must be number or boolean", "concat", "skipOnVariables", "json", "parentElement", "actionManager", " } }", "]] === undefined ", "constructor", "addNamespaces", "instructions", " self._opts.$comment(", "max", "\\xA0-\\u200D\\u2010-\\u2029\\u202F-\\uD7FF\\uF900-\\uFDCF\\uFDF0-\\uFFEF", "processHandlerStream", "optional", "resetRegExp", "sdppp/abort", "there was no format function for ", "regExpQueue", "objectKeys", "{4}", "skipKeywords", "changeLanguage", "formats", "_getOrReturnCtx", "_onnotification", "You are passing an undefined module! Please check the object you are passing to i18next.use()", "cos", "should NOT have additional properties", "addLookupKeys", " , message: 'should have ", "extensionManager", " when property ", "handleDirectProxyForward", "minItems", "exec_info", "iri", "getRegExp", "compositeRule", "unbind", "Core schema meta-schema", "DateTimeFormat", "properties ", "setupGraphStoreSync", " = undefined; ", "state", "right", " if (Array.isArray(", "acy", "escapeValue", "varReplace", "action", "timeoutId", "#FF0099", " && Object.prototype.hasOwnProperty.call(", " , params: { passingSchemas: ", "success", "nsSeparator", "onerror", "errSchemaPath", "name", "Node definition not found for ", "var ", "userDefinedKeySeparator", "cardinal", "can't resolve reference ", "postMessage", "compileAsync", "description", "ydd", "ZodDiscriminatedUnion", "#33CCCC", "isEmail", "forward", "_getCached", "/files", "Error sending store update for ", "2025-06-18", "firebug", "escapeQuotes", "languageOnly", "ajv", " , params: {} ", '$ref: validation keywords used in schema at path "', "lte", "#FF9900", "secure", "all", "isNANOID", "2568LKVjPE", "validation", "debouncedNotificationMethods", "failing", "discriminator", "addResource", "postProcessor", "2025-03-26", "lngs", "invalid_literal", "); if (!", "aao", "activeState", "isConnected", "workflow-run", "ZodCatch", "loaded", " , message: 'should match exactly one schema in oneOf' ", "((\\d\\d[2468][048]|\\d\\d[13579][26]|\\d\\d0[48]|[02468][048]00|[13579][26]00)-02-29|\\d{4}-((0[13578]|1[02])-(0[1-9]|[12]\\d|3[01])|(0[469]|11)-(0[1-9]|[12]\\d|30)|(02)-(0[1-9]|1\\d|2[0-8])))", " properties' ", "2024-11-05", "prompts", "createStreamState", ".type", "too_big", " === 'true' || ", "offset", "getState", "precheck", "property ", "needsPlural", "No handler for action: ", "handleAsObject", ")) {  ", "minValue", "waiting for queue prompt", "Unknown message type: ", " if (true) { ", "regexpUnescape", "pre", "]; ", "NOT_QUERY", "addIssue", "strict", ", limit: ", "#FF00FF", "stringify", " , params: { limit: ", "appendNamespaceToCIMode", "formatSeparator", " === undefined) { ", "maxDate", "forkResourceStore", ") vErrors.length = ", '"; } ', "fullFilename", ` , message: 'should match format "`, "comfy-user", "serialize", "curlayer", "exclType", "zh-CN", "isValidLookup", "afb", "queue_remaining", "map", "year", "app", " } if (", "keys", "removed", "destroy", "relative", "emit", "function(data, dataPath, parentData, parentDataProperty, rootData) { 'use strict'; ", "Error validating elicitation response: ", "]; } else { ", "isInitialized", " || ! Object.prototype.hasOwnProperty.call(", "self", "adf", "isBase64", "' : '", "getConnection", "filterByRequestId", "[^]", "exactUsedKey", " == errors) { ", "rules", "secs", ".schema = ", "pending", "decline", "translator", "value", "ESCAPE", "warn", "getHandler", "int", "removeAdditional", "substring", " , message: 'should NOT be valid' ", " , params: { multipleOf: ", " !== ", "strictCreate", "connectionMonitor", "listRoots", "logging/setLevel", " != 'number' || ", "app.queuePrompt caught", "storeManager", ".length == 1) { ", " , params: { failingKeyword: ", "]); ", "updateMissing", "; else vErrors = null; }", "reject", "getPath", "retryDelay", " not found for node ", "2139020lJdCVy", "async keyword in sync schema", "addEventListener", "examples", ` if (typeof item == 'string') item = '"' + item; `, "tried", "loadLanguages", "async schema referenced by sync schema", "[vV]", ") ? ", "queueLoad", "]; if (", " , params: { additionalProperty: '", "languageChanging", " = errors; var ", "#/definitions/nonNegativeInteger", "isSafeInteger", "2540bmmYqg", "setComfyOrgAPIKey", " } catch (e) { if (!(e instanceof ValidationError)) throw e; if (vErrors === null) vErrors = e.errors; else vErrors = vErrors.concat(e.errors); errors = vErrors.length; ", "getLanguagePartFromCode", "retryTimeout", "clearItems", "payload", " = errors; ", "Cannot access property/index ", "Workflow not found", " , params: { keyword: '", "over", "sdppp", "find", "empty", "extendTranslation", "useRawValueToEscape", "languageDetector", " for nesting ", "Store not found for ", "_addSchema", "notice", "properties", " = 0; ", " , params: { ref: '", " levels up, current level is ", "8392XCaVMd", "ZodObject", "_metaOpts", "querySelector", "reference", "absolutePath", "ValidationError", " === null) ", "missing", " if (!", "538374WNNBce", "resolveComponents", "returnedObjectHandler", "valid", "headers", "onclose", "Server does not support notifying of prompt list changes (required for ", "ZodNativeEnum", "postProcess", "kind", "dataPathArr", "supportedLngs", "lowerCaseLng", "mountTo", "ping", "#00CCCC", "languageChanged", "cuid2", "_serverInfo", "multipleOfPrecision", "greater than or equal to ", " , parentSchema: validate.schema", " , message: 'should be equal to one of the allowed values' ", "unescapeSuffix", "string", "elicitInput", "errorPath", "prepareLoading", "patternProperties", "{6}", "msecs", "getClientCapabilities", "getter", "', missingProperty: '", "#3300FF", "ZodError", "gte", ";if (", "jpr", "Invalid date", " validate.errors = null; return true; ", "sdppp_widgetable_title", "run", ") { ", "readingCalls", " = false; if (e instanceof ValidationError) ", "cos://", ", (dataPath || '')", "canvas", '" is used in schema at path "', "notifications/message", "handleConnectionClose", " == 'boolean') ", "pingInterval", " var vErrors = null; ", "resources/read", "join", "setupConnectionCloseHandler", "removeRequestHandler", "   var err =   ", "compile", "catchall", "' && !(typeof ", "ZodNullable", "hasOwnProperty", " } }  ", "interrupt", " && !", "humanize", " var err = ", "createErrors", "resolved promise for", "exclusive", "date-time", "initialized", ", deps: '", "lastIndex", "minute", "click", "escapeComponent", "isProducer", "tools/call", "$ref", "readonly", "$async", "Bearer ", "isFinite", "logout", "Edge references unknown source node: ", "zero", " var i = ", "errors", "init: i18next is already initialized. You should call init just once!", "[object Function]", "count", '" resolves to more than one schema', " , message: 'should NOT have ", "Server does not support resources (required for ", "query", "2[0-4]", "&filename=", " var startErrs", "NumberFormat", "jsonStringifyReplacer", ") { if (vErrors === null) vErrors = ", " != 'string') || ", "registerBroadcastHandler", "  for (var ", ") > 1e-", "#FF9933", "invalid_type", "init", "email", ".test(", "broadcast", "more", "nss", ", received ", "点我恢复", "apply", "Keyword ", "[object Number]", "/patternProperties/", "notifications/initialized", "formatters", "Required", "#0066FF", "MethodNotFound", "\\$&", "no plural rule found for: ", "startTime", "env", "getConnectionToNode", "ZodFunction", "ASCII", "_refinement", "Discriminator property ", "2.0", "resources/subscribe", "debug", "ulid", "setupStreamHandlers", " === '' || ", "root.refVal[0]", "requestIdSeq", "setupStoreBinding", "&quot;", "Node definition not found for current node ", "Failed to reboot ComfyUI", ".length , ", " ); if (isAdditional", "Error closing connection to ", " , params: { allowedValues: schema", "#0033FF", "errorMap", "nestingSuffix", "formatter", "[\\:\\@\\/\\?]", "greater than ", " is present' ", "getFixedT", "sdpppToken", "  } ", "removeMessageEventListener", "cuid", "#9900CC", "validate", " ( ( ", " else { ", "console", ' !== "object")', "undefined", "A request handler for ", "defineProperty", "getAllBindings", "isEmoji", "selectColor", "week", "connections", "NOT_HOST", "cloneInstance", "initialize", "stopMonitoring", "ZodUndefined", " !== undefined ", "sampling/createMessage", " than ", "] = ", "[\\:\\/\\?\\#\\[\\]\\@]", "nestingRegexp", "true", "Maximum total timeout exceeded", " if (", "allKeys", "maxReplaces", " === 1) ", " == 'function' ? ", " ? '", " = ", " + ']'", "registerActionHandler", "fast", "URI can not be parsed.", "; var ", "brand", "setPrototypeOf", "Invalid function return type", "setRequestHandler", "getData", "xaa", " = false;for (var ", "getTime", "arrayKeywords", "origin", "setProperty", "ayh", "  errors = ", "typeof ", "uiWeightSum", "accessing an object - but returnObjects options is not enabled!", "toResolveHierarchy", "tools", "Connection to ", "ordinal", "&amp;", "{0,3}", "shift", ".validate; } if (  ", "getPathExpr", "ids", ".dataPath === undefined) ", "items", "reduce", "curlayer_canvas", "disconnect", "[\\xA0-\\u200D\\u2010-\\u2029\\u202F-\\uD7FF\\uF900-\\uFDCF\\uFDF0-\\uFFEF]", " = true; break; }", "Internal error", "#CCCC00", "nodeStores", '.schemaPath = "', "mesh:state:update", " && self._opts.unknownFormats.indexOf(", "#/definitions/stringArray", "25[0-5]", "maximum", "stack", " var ", "RelativeTimeFormat", "getOwnPropertyNames", "skips", "number", "No errors", "newdoc_canvas", "toQuotedString", " , message: 'boolean schema is false' ", "Connection closed", "' } ", "fallbackNS", "notificationQueue", " , schema: validate.schema", "Server does not support logging (required for ", " failed", "_getType", "send", "ensureStoreConsumerBinding", "ConnectionClosed", ".additionalProperties", "streamManager", "missingInterpolationHandler", "mergeArray", "No store found for node ", "substr", "notifications/resources/list_changed", "warning", "is an invalid additional property", "nullish", "findPath", "dev", "[A-Fa-f]", "abv", "widgetable", "getCurrentNodeId", "(new RegExp(", 'Invalid input: must end with "', "smaller than or equal to", "checkState", "men", "actionHandlers", "table", "verbose", "extract", ";  if (vErrors === null) vErrors = [err]; else vErrors.push(err); errors++; } ", "[^\\%\\[\\]\\:]", "; else vErrors = vErrors.concat(", " = false; else if (", "response", "Error in direct request:", ".errors", " for language ", "ref/prompt", "msec", "nonstrict", "$t(", " characters' ", "safeValue", "schemas", "_options", "getScriptPartFromCode", "Cannot access data ", "fullPath", "` could not be extracted from all schema options", "execution_error", " != 'boolean' && ", "Server does not support prompts (required for ", ", validate.root.schema);", "fromCodePoint", " == null) ", "minLength", "urn:uuid", "Edge references unknown target node: ", "escape", "setState", "sourceNodeId", " }; return validate;", "node_id", "ZodUnknown", "bigint", "async schema in sync schema", "util", "mcp-mesh-router", " , ", " + '", "reload", "abh", " items' ", "' + ", `" won't get resolved as namespace "`, " == 'number' || ", "mergeObjectAsync", "fail", "runningRequests", " == 'string' || ", "_opts", "messages", "mins", "received", "mountedEndpoints", "position", '" ignored in schema at path "', "minutes", "++) { var ", " var schemaExcl", "datetime", "[\\@]", "__proto__", "setter", "schema", " is not a valid identifier", "sourceCode", " , message: 'should match some schema in anyOf' ", "coerced", "broadcastManager", "Validation", "ZodLazy", "preprocess", "setNodeTitle", " === undefined || ", "root", "years", "_errorDataPathProperty", "validateKeyword", "charAt", "arq", "actions", "{5}", "argumentsError", "You must pass an array of schemas to z.tuple([ ... ])", " element(s)", "custom keyword definition is invalid: ", " not found for current node ", "property", "buildAdjacencyList", "floor", "cleanupStreamHandlers", "getCapabilities", "Client does not support sampling (required for ", "DEBUG", "getResource", 'custom keyword "', "namespace", "connecting", "rootId", "String must contain ", "ckb", "toLoad", " === false) ", "No edge defined from ", "[^0-9]", " = false; else {", "_validateKeyword", "obj", "isTime", "formErrors", "method", "save", " from id ", "isCIDR", "Array.isArray(", "#FF6600", "getCanonicalLocales", "https://raw.githubusercontent.com/ajv-validator/ajv/master/lib/refs/data.json#", "; if (!", "Invalid literal value, expected ", "]; }  ", " = equal(", "date", "registerHandler", "exists", "formatArgs", "(.+?)", "close", "Date must be ", "roots/list", "cidr", "sendStreamData", "Store not found for current node ", "nid", "userDefinedNsSeparator", "exact", 'key "', "Unrecognized key(s) in object: ", '"object"', "queue", "day", "hasLoadedNamespace: i18next was not initialized", "_parseAsync", ".length > ", "sdppp/directRequest", "log", "transform", "prompt_ids: ", "emergency", "#CC3333", " = true; } else { ", "returnEmptyString", "sessionId", "checkDataTypes", "', depsCount: ", "') ", "match", "set", "Connection appears to be disconnected", " return errors === 0;       ", "backendConnector", "#3333CC", "loadNamespaces", "progress", "res", "pluralRulesCache", ") {  for (var ", "left", "#FFCC33", "$schema must be a string", "WebkitAppearance", "#9900FF", "_cache", "isURL", " = true; ", "reverse", ".length ", "isSupportedCode", "onClose", ";  if (vErrors === null) vErrors = [err]; else vErrors.push(err); errors++; } } ", "_onerror", "post", "; else vErrors = null; } ", "elicitation/create", "languages", "uniqueItems", " , (dataPath || '')", "bindings", "zod", "addResourceBundle", "prefix", "prevValid", " } ", "baseId", " Math.abs(Math.round(division", "notifications/progress", "diff", " = refVal[", ")) {  var err =   ", "unescapeComponent", "coerceTypes", "source", " , message: 'should be ", "observers", "getValidEnumValues", "execution_success", "text", "posterIdentifier", "validation failed", " for interpolating ", "{1,4}", "refine", " } } else { ", "saveMissing", "unwrap", "[\\:]", "^(\\p{Extended_Pictographic}|\\p{Emoji_Component})+$", "toUpperCase", "equal", " {} ", "connectionManager", "resource", "language", ".length; ", "dependencies", " , params: { missingProperty: '", "stateUpdate", "abs", " division", " === ", "del", "sdppp/requestInitialState/", " Object.keys(", "resources/templates/list", "schemaErrorMap", "Number must be a multiple of ", "InvalidParams", "expected", "effect", "markConsumerBinding", "var default", "hasLanguageSomeTranslations", "requestId", "_getId", "exec", "oneOf", "typeName", " = errors , ", "setNotificationHandler", "forwarded", "addListener", "NOT_USERINFO", "implementInternalAction", "pow", "parseMissingKeyHandler", "=0; ", " , message: 'should be multiple of ", "prp", "#3366FF", "style", " throw new ValidationError(vErrors); ", "type", "resetTimeoutOnProgress", "validateHandlerType", "comfy-uxp", "Seems the loaded translations were in flat JSON format instead of nested. Either set keySeparator: false on init or make sure your translations are published in nested format.", "detect", " % 1)", "  if (!", "usedKey", "usedLng", "))) { ", "++) { ", "removeListener", "assertNever", "rootData", "maxTokens", "/sd-ppp-static/sdppp-workflows/", "graphInstance", "exports", "translation", " , rootData )  ", "setupBroadcastHandler", " */", "missingKeyNoValueFallbackToKey", "getRegisteredActions", "parseAsync", " , params: { propertyName: '", "protocolVersion", "[^\\%]", "flags", " var errors = 0;     ", "urn", "languageUtils", "indexOf", "postProcessPassResolved", "sdk", "subfolder", "else", " console.log(", "?\\:\\:", "hours", "updateKey", "comfyAPI is not initialized, maybe comfyUI is too old", "loaded namespace ", "isBase64url", "formatLanguageCode", ") { errors = ", "registerProxyForwardHandler", "Not connected", "{0,6}", `" keyword validation' `, "_instructions", "var missing", "skipInterpolation", "cycles", "tDescription", "meta", " === undefined) ", "cacheKey", "_limit", " must be number", " delete ", "_fragments", ") : ", "stream", "getSchema", "less than", "accept", "propertyNames", ".call(this, ", "getConnectionToNodeInternal", "invalid_union", "resources/list", "timeout", "#CC3399", "NOT_PATH", " ) || ", " , message: 'should NOT have more than ", "minSize", "other", "reloadResources", "valueType", "/additionalProperties", "failedLoading", "extendRefs", "common", " character(s)", ".pi-sign-out", "resources", "Number must be ", "defaultMeta", " not found in graph definition", "localRefs", "toASCII", "one", "ZodEffects", "def", "removeNotificationHandler", "271vmsOjA", "#99CC00", "removeEventListener", "processors", "[A-Za-z0-9\\-\\.\\_\\~", "uxp", ".schemaPath === undefined) { ", "ZodArray", " }   ", " === 'false' || ", "at most", "ZodSet", "ZodMap", ", '", "createAsyncIterator", "entries", "Uncaught error in notification handler: ", "protocol", "([^0-9])", '"number"', ".patternProperties", " for (var ", "contentMediaType", "=startErrs", "prev", "usedNS", "UNRESERVED", "out", "bindProducer", "_requestHandlers", "if (", " == ", "maxValue", "Invalid enum value. Expected ", "402YXdWXn", " === '' ", "validate.schema", "invalid_union_discriminator", " = false , ", "widgetableStructure", "dataPath", " } else {  errors = ", "allServers", "ZodOptional", " , message: 'should be equal to constant' ", "#33CC66", "getClientVersion", "#9933FF", "InternalError", "createNotificationHandler", "oninitialized", "body", "_cached", "callback", "yds", "ZodBigInt", "./sdppp-custom.js", "describe", "#CC33CC", "cancel", "$$$$", "uiWeight", "time", "minimum", "getNodeTitle", " !== undefined) {  ", "_addCheck", "Schema ", " = validate.schema", "missingSchema", "interpolation", "if ( ", "required", " return data; ", "keyword", "sendFinishedResponse", "valueOf", " if (rootData === undefined) rootData = data; ", "false schema", "Meta-schema for $data reference (JSON Schema extension proposal)", "definition", "#CC0033", " === undefined ", "isPersisted", "unescapeFragment", "favorites", " = null;", "Invalid ", "#3366CC", "findIndex", " , schemaPath: ", "multipleOf", "-arab", "ZodDate", " var errs_", "1.0.0", "exactLength", "simpleTypes", "]; return false; ", "ZodRecord", "Cannot forward to node ", "/required", " = errors;  ", "checks", "notifications/tools/list_changed", "Failed to request initial state for ", "<errors; ", "validateSchema", "errs_", "subscribe", "level", "superRefine", "getNodeIds", "spa", ".type || 'string'; if (", "setResolvedLanguage", "innerType", " , params: { i: i, j: j } ", "ignoreJSONStructure", "parentDataProperty", "inclusive", "nodeId", "hasResourceBundle", "#6600FF", "processStreamQueue", "streamIterator", "ZodPromise", "resourceStore", "fewer", " = true; if (", "#FF6633", " , message: '", "inline", " ) { ", ") - division", "strip", " == errors) {", "#0099CC", "addKeyword", "fragment", "padEnd", "defaultValue", "start", 'id "', "metaSchema", "step", " && ( ", "Error fetching workflow list", "length", "isTransportReady", "reset", "alwaysSet", "contextualErrorMap", "safeParseAsync", "; if (", "defaultNS", "pingConnection", "nestingOptionsSeparator", "minDate", "nonExplicitSupportedLngs", "Module", "workflowManager", " , params: { pattern:  ", "RULES", "http", "addSchema", "endsWith", "MIN_SAFE_INTEGER", "color", "none", `Can't use "invalid_type_error" or "required_error" in conjunction with custom error map.`, "#00CC00", "macro", " + ", "split", "ZodNumber", "reconnected", "getDataByLanguage", ".errors; else vErrors = vErrors.concat(", "options.loadSchema should be a function", "])) { ", "%c ", "sendPromptListChanged", "$id", "nonempty", "#/definitions/nonNegativeIntegerDefault0", "0?[1-9]", "; } ", "schemaId", "ZodNever", " , schema:  ", "auz", "Invalid JSON-pointer: ", "pipe", "returnDetails", "processCode", "partial", "maxSize", ") {  ", "saveMissingTo", "Email address's domain name can not be converted to ", "abort", "defaultVariables", "#3399CC", "charCodeAt", "Invalid graph definition: ", "invalid_arguments", ") break; ", 'unknown format "', "forEach", " = false; for (var ", "MCP Server Error:", "sdppp/streamResponse", "#FF33FF", "dataProperties", "ajp", "assertIs", ") ) ", "integer", "_requestHandlerAbortControllers", " ( ", "removeByRequestId", " !== undefined) { ", "ZodSymbol", " else {   ", "nodes", "var pattern", '" was not yet loaded', "ZodTuple", "catch", "#FF0033", " !== undefined) ; ", "coerce", " }; return validate; ", "removeResourceBundle", "errorsText", "{0,2}", " = undefined;", "#FF33CC", "|0?0?", " }  ", " if (false) { ", "delete", "maxLength", "put", "regExpMap", "isULID", "Expected ", "[\\-\\.\\_\\~]", "syncWorkflows", "execution_interrupted", "hasLoadedNamespace", "errs__", "++) if (equal(", "elicitation", "error", "mcpMesh", "#33CC33", " : ", "addConnection", "notifications/roots/list_changed", "openWorkflowJSON", "_schemas", "invalid_enum_value", "unicode", "signal", "ZodBoolean", "'/' + ", "mode", " === true) ? ", " } else if ( ", "resource_link", " < ", "pctEncChar", "~standard", " var schema", "dataType", "_pendingDebouncedNotifications", "Transport", "__proxy_forward", "_clientCapabilities", " !== undefined && typeof ", "hrs", " var async", " == +", "schemaHasRulesExcept", "Unicode", "[\\!\\$\\&\\'\\(\\)\\*\\+\\,\\;\\=]", "strictDefaults", "} else {  errors = ", "info", "contains", "hbo", ".validate;", "newlayer_canvas", "joinValues", "opts", "remove", "prd", "isLanguageChangingTo", "ary", "toString", "not", "_progressHandlers", "%[89A-Fa-f]", "custom", "http://json-schema.org/schema", "#6633CC", "arb", "invalid_intersection_types", " break; ", " ms", "less than or equal to", "nonpositive", " == 'number' ? ( (", " (async", "emoji", "nullable", " if (typeof itemIndices[item] == 'number') { ", "names", "%[EFef]", "path", "copy", "clear", "index", "registerDirectRequestHandlerGeneric", "actionExecutor", ") ) {   ", "user", "hasConsumerBinding", "A discriminator value for key `", "logging", "ref/resource", "getFallbackCodes", " = 'then'; ", "#CC00FF", ` + '" schema' `, "return", "; if (validate.errors !== null) { if (errors) validate.errors.length = errors; else validate.errors = null; } delete ", "defaultError", "notifications/cancelled", "#CC33FF", " = typeof ", "isRoot", "#FF0000", "order", "/type", "Instance method `debug.destroy()` is deprecated and no longer does anything. It will be removed in the next major version of `debug`.", "allErrors", "additionalProperties", " , message: 'can\\'t resolve reference ", "ZodReadonly", " is already defined", "keyType", "output", "bind", " else throw new ValidationError(vErrors); ", "workflow", "MissingRefError", "refVal", ") && ", "#99CC33", "audio", "getDefaultValuesFromSchema", "addMetaSchema", "client", "extra", "{3}", "manuallyExtractDefaults", "Node ", "keySchema", "onprogress", "shape", "and", "this", "isUUID", "context", "getBestMatchFromCodes", "No connection available", "Host's domain name can not be converted to ASCII via punycode: ", "getDefinition", "initAsync", " validate.errors = [", "connection", "wss", "regexp", "2.1.0", "dataLevel", " if (! ", "getSuffix", "store", "ayn", "strictNumbers", "long", "2024-10-07", "./api/userdata/workflows%2F.index.json", ", received '", "at least", "silent", "https://sdppp-api.zombee.tech/api/", "definitions", "Request timed out", "cmp", "size", ") {   var err =   ", "namespaces", "hasAction", "mounted", "missingKeyHandler", "__esModule", " !== undefined && ( typeof ", "auto", "interpolationkey", "millisecond", " outer: for (;i--;) { for (j = i; j--;) { if (equal(", "#0000FF", " ) ", "compiling", "ZodDefault", "#FF3366", "pluralCategories", "detectCycles", "documentElement", "/*# sourceURL=", "req_", ".length <= ", "services", "i18next:", "shared", "partialBundledLanguages", "void", "tools/list", "simplifyPluralSuffix", "#CC9933", "#/definitions/schemaArray", "overflow", "sdppp://", "pst", " = RULES.custom['", " after ", "float", '" for languages "', "channel", "hasEdge", "result", "val is not a non-empty string or a valid number. val=", "onTimeout", " , params: { allowedValue: schema", "__nwjs", "SCHEMES", " = !(false ", "parse", "pattern", "sendLoggingMessage", " != 'undefined' && ", "not_multiple_of", "listWorkflows", "#/definitions/simpleTypes", "__DEFAULT__", "_limitLength", "newlayer_curlayer", "_path", "callValidate", "maxTotalTimeout", "getPluralFormsOfKey", "preload", "false", "connect", " && ", "selection", "promise", "usedParams", "executing", "buffer", "content", "unshift", "skipCopy", "keyof", '[\\"\\\\]', "_loadingSchemas", ") { var op", "nanoid", "loopRequired", "ZodIntersection", "edges", "errorDataPath", "inlineRef", "ZodPipeline", "includes", "alert", "[i], ", "Invalid proxy forwarding: current node ", " (division", "maxProperties", "enabled", "color: inherit", "; else vErrors = null; }  ", "setInterval", "stopAll", "disconnected", "toJSON", ".data = ", "ListFormat", " } } ", "_unknown", "activeWorkflow", "duration", "getSuffixes", "messagePoster", "connected", "###", "getBinding", "appendNamespaceToMissingKey", ".validateSchema(", "resolveRef", " = true;", "_onprogress", "jsonPointers", "_getInvalidInput", "setLimit", "unrecognized_keys", "removeKeyword", "ZodNull", "should have required property \\'", ".validate", "added", "ParseError", "isInteger", "listeners", "comfy", "openWorkflow", "++) { vErrors[", "process", "Elicitation response content does not match requested schema: ", " = e.errors; else throw e; } ", " } else {  for (var ", "passingSchemas", "seconds", "isObject", "smaller than", "range", ", rootData)  ", "normalize", "Cycle detected: ", "keyword schema is invalid: ", "too_small", "filter", "formatType", "_limitItems", "55899TeSXFP", "addIssues", "default", "getItem", "aeb", "checkConnection", "[UnexpectedJSONParseError]: ", "completion/complete", "externalListenMessageCallback", "onmessage", "getNode", " ucs2length(", "forwardBroadcast", "JWT", "isFinite(", "mergeShapes", "(\\.\\d+)?", "[BroadcastManager] Error forwarding broadcast:", "some", "then", ") {  var err =   ", "invalid_date", " instanceof RegExp) && ", "ads", "not_finite", "resolveImage", "Invalid forward path for proxy action", "missed to pass in variable ", "acx", "contextSeparator", "sendToolListChanged", "comfyAPI", "refs", "format", "2017995CBrzUo", "augment", " = ''; ", "request", "get", "inlineRefs", "RequestTimeout", "' , dataPath: (dataPath || '') + ", "notification", "interpolate", "sdppp_workflow_alias", "#9933CC", "interpolator", "$data", "nodeIndexes", " { keyword: '", "setupStreamRequestHandler", "initializedStoreOnce", "has", "issues", "coerceToTypes", "capabilities", "startsWith", "off", " = errors === errs_", "isNaN", "writeOnly", "Action ", "_requestMessageId", "roots", "rejectImage", "userinfo", " + '\\']'", "async ", "'[\\'' + ", "monitoringIntervals", "meta-schema not available", "invalid_return_type", " = true , j; if (i > 1) { ", "_error", "full", ".dataPath = (dataPath || '') + ", "Illegal input >= 0x80 (not a basic code point)", "values", "parseInt", "_onrequest", ") { for (var ", " , message: 'should contain a valid item' ", " || Object.keys(", "transport", "item", "clone", "#0033CC", "test", "key '", " , schema: false , parentSchema: validate.schema", "^\\[?(", "extractFromKey", " ) {   ", "unknown", "&lt;", "resolve", "exactly equal to ", "resolveRunImages", "var refVal", "_notificationHandlers", "done", "Cannot register capabilities after connecting to transport", "Invalid input", "~validate", "propsKeywords", " || ", "load", "Received a response for an unknown message ID: ", "Already connected to node ", "isCUID", "wait", "slice", " = false; j = itemIndices[item]; break; } itemIndices[item] = i; } ", "/else", "isConnectedTo", "dirty", "http://json-schema.org/draft-07/schema#", "throwIfAborted", "valueSchema", "assistant", "acq", "getRule", "#0000CC", "fallbackNotificationHandler", "fromCharCode", "requestInfo", "idx", "removeConnection", "replace", "minProperties", "round"];
  return me = function() {
    return i;
  }, me();
}
class ge extends k0 {
  _parse(e) {
    var t = s;
    if (this[t(515)][t(1859)] && (e[t(530)] = new Date(e.data)), this[t(1237)](e) !== x0.date) {
      const n = this._getOrReturnCtx(e);
      return X(n, { code: W[t(1084)], expected: x0[t(1390)], received: n.parsedType }), l0;
    }
    if (Number[t(2235)](e.data.getTime())) {
      const n = this[t(736)](e);
      return X(n, { code: W[t(2197)] }), l0;
    }
    const x = new xx();
    let r;
    for (const n of this[t(515)][t(1730)])
      n[t(983)] === t(2369) ? e[t(530)][t(1185)]() < n.value && (r = this[t(736)](e, r), X(r, { code: W[t(2172)], message: n.message, inclusive: !0, exact: !1, minimum: n[t(895)], type: "date" }), x[t(2291)]()) : n[t(983)] === "max" ? e[t(530)][t(1185)]() > n[t(895)] && (r = this[t(736)](e, r), X(r, { code: W.too_big, message: n.message, inclusive: !0, exact: !1, maximum: n[t(895)], type: t(1390) }), x.dirty()) : C0[t(1542)](n);
    return { status: x[t(895)], value: new Date(e[t(530)][t(1185)]()) };
  }
  [s(1693)](e) {
    var t = s;
    return new ge({ ...this[t(515)], checks: [...this[t(515)][t(1730)], e] });
  }
  [s(2369)](e, t) {
    var a = s;
    return this[a(1693)]({ kind: a(2369), value: e[a(1185)](), message: r0[a(1928)](t) });
  }
  [s(723)](e, t) {
    var a = s;
    return this._addCheck({ kind: "max", value: e[a(1185)](), message: r0[a(1928)](t) });
  }
  get [s(1785)]() {
    var e = s;
    let t = null;
    for (const a of this[e(515)][e(1730)])
      a[e(983)] === e(2369) && (t === null || a.value > t) && (t = a.value);
    return t != null ? new Date(t) : null;
  }
  get [s(852)]() {
    var e = s;
    let t = null;
    for (const a of this._def[e(1730)])
      a[e(983)] === e(723) && (t === null || a.value < t) && (t = a[e(895)]);
    return t != null ? new Date(t) : null;
  }
}
ge[s(536)] = (i) => {
  var e = s;
  return new ge({ checks: [], coerce: (i == null ? void 0 : i[e(1859)]) || !1, typeName: h0[e(1720)], ...m0(i) });
};
class wr extends k0 {
  [s(554)](e) {
    var t = s;
    if (this._getType(e) !== x0[t(643)]) {
      const x = this._getOrReturnCtx(e);
      return X(x, { code: W[t(1084)], expected: x0[t(643)], received: x[t(563)] }), l0;
    }
    return rx(e.data);
  }
}
wr[s(536)] = (i) => {
  var e = s;
  return new wr({ typeName: h0[e(1850)], ...m0(i) });
};
class Tt extends k0 {
  _parse(e) {
    var t = s;
    if (this._getType(e) !== x0.undefined) {
      const x = this._getOrReturnCtx(e);
      return X(x, { code: W.invalid_type, expected: x0[t(1145)], received: x.parsedType }), l0;
    }
    return rx(e[t(530)]);
  }
}
Tt[s(536)] = (i) => {
  var e = s;
  return new Tt({ typeName: h0[e(1157)], ...m0(i) });
};
class Dt extends k0 {
  [s(554)](e) {
    var t = s;
    if (this._getType(e) !== x0[t(619)]) {
      const x = this._getOrReturnCtx(e);
      return X(x, { code: W[t(1084)], expected: x0.null, received: x[t(563)] }), l0;
    }
    return rx(e[t(530)]);
  }
}
Dt[s(536)] = (i) => {
  var e = s;
  return new Dt({ typeName: h0[e(2149)], ...m0(i) });
};
class jt extends k0 {
  constructor() {
    super(...arguments), this._any = !0;
  }
  _parse(e) {
    var t = s;
    return rx(e[t(530)]);
  }
}
jt[s(536)] = (i) => {
  var e = s;
  return new jt({ typeName: h0[e(514)], ...m0(i) });
};
class Mt extends k0 {
  constructor() {
    var e = s;
    super(...arguments), this[e(2131)] = !0;
  }
  [s(554)](e) {
    return rx(e.data);
  }
}
Mt[s(536)] = (i) => {
  var e = s;
  return new Mt({ typeName: h0[e(1300)], ...m0(i) });
};
class Ix extends k0 {
  [s(554)](e) {
    var t = s;
    const a = this._getOrReturnCtx(e);
    return X(a, { code: W[t(1084)], expected: x0.never, received: a.parsedType }), l0;
  }
}
Ix[s(536)] = (i) => new Ix({ typeName: h0.ZodNever, ...m0(i) });
class Sr extends k0 {
  _parse(e) {
    var t = s;
    if (this[t(1237)](e) !== x0[t(1145)]) {
      const x = this[t(736)](e);
      return X(x, { code: W[t(1084)], expected: x0.void, received: x[t(563)] }), l0;
    }
    return rx(e.data);
  }
}
Sr.create = (i) => new Sr({ typeName: h0.ZodVoid, ...m0(i) });
class lx extends k0 {
  [s(554)](e) {
    var t = s;
    const { ctx: a, status: x } = this._processInputParams(e), r = this[t(515)];
    if (a[t(563)] !== x0[t(462)]) return X(a, { code: W[t(1084)], expected: x0.array, received: a.parsedType }), l0;
    if (r[t(1723)] !== null) {
      const o = a.data[t(1775)] > r[t(1723)][t(895)], c = a[t(530)][t(1775)] < r[t(1723)][t(895)];
      (o || c) && (X(a, { code: o ? W[t(825)] : W[t(2172)], minimum: c ? r[t(1723)][t(895)] : void 0, maximum: o ? r[t(1723)].value : void 0, type: t(462), inclusive: !0, exact: !0, message: r[t(1723)][t(532)] }), x[t(2291)]());
    }
    if (r[t(1292)] !== null && a[t(530)][t(1775)] < r[t(1292)][t(895)] && (X(a, { code: W[t(2172)], minimum: r.minLength.value, type: t(462), inclusive: !0, exact: !1, message: r[t(1292)][t(532)] }), x.dirty()), r[t(1870)] !== null && a[t(530)].length > r.maxLength[t(895)] && (X(a, { code: W[t(825)], maximum: r.maxLength[t(895)], type: t(462), inclusive: !0, exact: !1, message: r[t(1870)][t(532)] }), x[t(2291)]()), a[t(1614)][t(545)]) return Promise.all([...a[t(530)]][t(866)]((o, c) => {
      var f = t;
      return r[f(1529)]._parseAsync(new hx(a, o, a.path, c));
    }))[t(2195)]((o) => {
      var c = t;
      return xx[c(1244)](x, o);
    });
    const n = [...a[t(530)]][t(866)]((o, c) => {
      var f = t;
      return r[f(1529)][f(660)](new hx(a, o, a[f(1948)], c));
    });
    return xx[t(1244)](x, n);
  }
  get [s(616)]() {
    var e = s;
    return this[e(515)][e(1529)];
  }
  [s(2369)](e, t) {
    var a = s;
    return new lx({ ...this[a(515)], minLength: { value: e, message: r0[a(1928)](t) } });
  }
  [s(723)](e, t) {
    var a = s;
    return new lx({ ...this[a(515)], maxLength: { value: e, message: r0[a(1928)](t) } });
  }
  length(e, t) {
    var a = s;
    return new lx({ ...this[a(515)], exactLength: { value: e, message: r0[a(1928)](t) } });
  }
  [s(1811)](e) {
    var t = s;
    return this[t(2369)](1, e);
  }
}
lx[s(536)] = (i, e) => {
  var t = s;
  return new lx({ type: i, minLength: null, maxLength: null, exactLength: null, typeName: h0[t(1634)], ...m0(e) });
};
function Vx(i) {
  var e = s;
  if (i instanceof B0) {
    const t = {};
    for (const a in i[e(1999)]) {
      const x = i[e(1999)][a];
      t[a] = Sx[e(536)](Vx(x));
    }
    return new B0({ ...i[e(515)], shape: () => t });
  } else
    return i instanceof lx ? new lx({ ...i._def, type: Vx(i[e(616)]) }) : i instanceof Sx ? Sx[e(536)](Vx(i.unwrap())) : i instanceof jx ? jx[e(536)](Vx(i.unwrap())) : i instanceof Tx ? Tx[e(536)](i[e(1205)][e(866)]((t) => Vx(t))) : i;
}
class B0 extends k0 {
  constructor() {
    var e = s;
    super(...arguments), this[e(1679)] = null, this[e(1276)] = this.passthrough, this[e(2211)] = this[e(2384)];
  }
  [s(786)]() {
    var e = s;
    if (this[e(1679)] !== null) return this[e(1679)];
    const t = this[e(515)][e(1999)](), a = C0[e(731)](t);
    return this._cached = { shape: t, keys: a }, this[e(1679)];
  }
  [s(554)](e) {
    var t = s;
    if (this._getType(e) !== x0[t(692)]) {
      const d = this[t(736)](e);
      return X(d, { code: W[t(1084)], expected: x0[t(692)], received: d[t(563)] }), l0;
    }
    const { status: x, ctx: r } = this._processInputParams(e), { shape: n, keys: o } = this[t(786)](), c = [];
    if (!(this[t(515)][t(1035)] instanceof Ix && this[t(515)][t(2341)] === t(1762))) for (const d in r[t(530)])
      !o[t(2115)](d) && c[t(2523)](d);
    const f = [];
    for (const d of o) {
      const l = n[d], u = r[t(530)][d];
      f[t(2523)]({ key: { status: t(977), value: d }, value: l[t(554)](new hx(r, u, r[t(1948)], d)), alwaysSet: d in r[t(530)] });
    }
    if (this[t(515)][t(1035)] instanceof Ix) {
      const d = this[t(515)][t(2341)];
      if (d === "passthrough") for (const l of c)
        f[t(2523)]({ key: { status: t(977), value: l }, value: { status: t(977), value: r.data[l] } });
      else if (d === t(844)) c[t(1775)] > 0 && (X(r, { code: W[t(2147)], keys: c }), x[t(2291)]());
      else if (d !== t(1762)) throw new Error(t(639));
    } else {
      const d = this[t(515)][t(1035)];
      for (const l of c) {
        const u = r[t(530)][l];
        f[t(2523)]({ key: { status: "valid", value: l }, value: d[t(554)](new hx(r, u, r[t(1948)], l)), alwaysSet: l in r[t(530)] });
      }
    }
    return r[t(1614)][t(545)] ? Promise[t(2271)]().then(async () => {
      var d = t;
      const l = [];
      for (const u of f) {
        const v = await u.key, h = await u[d(895)];
        l[d(2523)]({ key: v, value: h, alwaysSet: u[d(1778)] });
      }
      return l;
    }).then((d) => {
      var l = t;
      return xx[l(2386)](x, d);
    }) : xx[t(2386)](x, f);
  }
  get [s(1999)]() {
    var e = s;
    return this[e(515)][e(1999)]();
  }
  [s(844)](e) {
    var t = s;
    return r0[t(582)], new B0({ ...this._def, unknownKeys: t(844), ...e !== void 0 ? { errorMap: (a, x) => {
      var o, c;
      var r = t;
      const n = ((c = (o = this[r(515)])[r(1128)]) == null ? void 0 : c.call(o, a, x)[r(532)]) ?? x[r(1966)];
      return a[r(594)] === r(2147) ? { message: r0[r(582)](e)[r(532)] ?? n } : { message: n };
    } } : {} });
  }
  [s(1762)]() {
    var e = s;
    return new B0({ ...this[e(515)], unknownKeys: e(1762) });
  }
  passthrough() {
    var e = s;
    return new B0({ ...this[e(515)], unknownKeys: e(504) });
  }
  [s(2384)](e) {
    var t = s;
    return new B0({ ...this[t(515)], shape: () => ({ ...this[t(515)][t(1999)](), ...e }) });
  }
  [s(2342)](e) {
    var t = s;
    return new B0({ unknownKeys: e[t(515)][t(2341)], catchall: e._def[t(1035)], shape: () => ({ ...this[t(515)].shape(), ...e._def.shape() }), typeName: h0[t(965)] });
  }
  setKey(e, t) {
    return this.augment({ [e]: t });
  }
  [s(1035)](e) {
    var t = s;
    return new B0({ ...this[t(515)], catchall: e });
  }
  [s(2330)](e) {
    var t = s;
    const a = {};
    for (const x of C0[t(731)](e))
      e[x] && this[t(1999)][x] && (a[x] = this[t(1999)][x]);
    return new B0({ ...this._def, shape: () => a });
  }
  omit(e) {
    var t = s;
    const a = {};
    for (const x of C0.objectKeys(this[t(1999)]))
      !e[x] && (a[x] = this[t(1999)][x]);
    return new B0({ ...this[t(515)], shape: () => a });
  }
  deepPartial() {
    return Vx(this);
  }
  [s(1823)](e) {
    var t = s;
    const a = {};
    for (const x of C0[t(731)](this[t(1999)])) {
      const r = this[t(1999)][x];
      e && !e[x] ? a[x] = r : a[x] = r[t(726)]();
    }
    return new B0({ ...this[t(515)], shape: () => a });
  }
  required(e) {
    var t = s;
    const a = {};
    for (const x of C0[t(731)](this.shape))
      if (e && !e[x]) a[x] = this[t(1999)][x];
      else {
        let n = this[t(1999)][x];
        for (; n instanceof Sx; )
          n = n[t(515)][t(1743)];
        a[x] = n;
      }
    return new B0({ ...this[t(515)], shape: () => a });
  }
  [s(2104)]() {
    var e = s;
    return Rs(C0[e(731)](this[e(1999)]));
  }
}
B0[s(536)] = (i, e) => {
  var t = s;
  return new B0({ shape: () => i, unknownKeys: t(1762), catchall: Ix[t(536)](), typeName: h0.ZodObject, ...m0(e) });
}, B0[s(905)] = (i, e) => {
  var t = s;
  return new B0({ shape: () => i, unknownKeys: t(844), catchall: Ix[t(536)](), typeName: h0[t(965)], ...m0(e) });
}, B0[s(2376)] = (i, e) => {
  var t = s;
  return new B0({ shape: i, unknownKeys: t(1762), catchall: Ix.create(), typeName: h0[t(965)], ...m0(e) });
};
class be extends k0 {
  [s(554)](e) {
    var t = s;
    const { ctx: a } = this._processInputParams(e), x = this._def.options;
    function r(n) {
      var o = B;
      for (const f of n)
        if (f[o(2071)][o(603)] === o(977)) return f[o(2071)];
      for (const f of n)
        if (f.result[o(603)] === o(2291)) return a.common[o(2229)].push(...f.ctx[o(1614)][o(2229)]), f[o(2071)];
      const c = n[o(866)]((f) => new Ex(f[o(618)].common[o(2229)]));
      return X(a, { code: W[o(1600)], unionErrors: c }), l0;
    }
    if (a[t(1614)][t(545)]) return Promise[t(799)](x[t(866)](async (n) => {
      var o = t;
      const c = { ...a, common: { ...a[o(1614)], issues: [] }, parent: null };
      return { result: await n._parseAsync({ data: a.data, path: a[o(1948)], parent: c }), ctx: c };
    }))[t(2195)](r);
    {
      let n;
      const o = [];
      for (const f of x) {
        const d = { ...a, common: { ...a.common, issues: [] }, parent: null }, l = f[t(660)]({ data: a[t(530)], path: a[t(1948)], parent: d });
        if (l[t(603)] === t(977)) return l;
        l[t(603)] === "dirty" && !n && (n = { result: l, ctx: d }), d[t(1614)][t(2229)][t(1775)] && o[t(2523)](d[t(1614)][t(2229)]);
      }
      if (n) return a.common[t(2229)].push(...n[t(618)].common[t(2229)]), n[t(2071)];
      const c = o.map((f) => new Ex(f));
      return X(a, { code: W.invalid_union, unionErrors: c }), l0;
    }
  }
  get [s(2479)]() {
    var e = s;
    return this[e(515)].options;
  }
}
be[s(536)] = (i, e) => new be({ options: i, typeName: h0.ZodUnion, ...m0(e) });
const bx = (i) => {
  var e = s;
  return i instanceof Lt ? bx(i.schema) : i instanceof Ox ? bx(i[e(1743)]()) : i instanceof Se ? [i[e(895)]] : i instanceof Dx ? i[e(2479)] : i instanceof zt ? C0[e(587)](i[e(559)]) : i instanceof Pe ? bx(i[e(515)].innerType) : i instanceof Tt ? [void 0] : i instanceof Dt ? [null] : i instanceof Sx ? [void 0, ...bx(i[e(1482)]())] : i instanceof jx ? [null, ...bx(i[e(1482)]())] : i instanceof Fs || i instanceof Ie ? bx(i[e(1482)]()) : i instanceof ke ? bx(i._def.innerType) : [];
};
class Qt extends k0 {
  [s(554)](e) {
    var t = s;
    const { ctx: a } = this[t(2456)](e);
    if (a[t(563)] !== x0[t(692)]) return X(a, { code: W[t(1084)], expected: x0[t(692)], received: a[t(563)] }), l0;
    const x = this[t(805)], r = a[t(530)][x], n = this[t(2492)][t(2214)](r);
    return n ? a[t(1614)][t(545)] ? n[t(1410)]({ data: a[t(530)], path: a[t(1948)], parent: a }) : n._parseSync({ data: a[t(530)], path: a[t(1948)], parent: a }) : (X(a, { code: W[t(1664)], options: Array[t(2512)](this[t(2492)][t(870)]()), path: [x] }), l0);
  }
  get discriminator() {
    var e = s;
    return this[e(515)].discriminator;
  }
  get [s(2479)]() {
    var e = s;
    return this[e(515)][e(2479)];
  }
  get [s(2492)]() {
    var e = s;
    return this[e(515)].optionsMap;
  }
  static [s(536)](e, t, a) {
    var x = s;
    const r = /* @__PURE__ */ new Map();
    for (const n of t) {
      const o = bx(n[x(1999)][e]);
      if (!o.length) throw new Error(x(1957) + e + x(1285));
      for (const c of o) {
        if (r[x(2228)](c)) throw new Error(x(1110) + String(e) + " has duplicate value " + String(c));
        r.set(c, n);
      }
    }
    return new Qt({ typeName: h0[x(782)], discriminator: e, options: t, optionsMap: r, ...m0(a) });
  }
}
function $t(i, e) {
  var t = s;
  const a = kx(i), x = kx(e);
  if (i === e) return { valid: !0, data: i };
  if (a === x0.object && x === x0[t(692)]) {
    const r = C0.objectKeys(e), n = C0.objectKeys(i)[t(2173)]((c) => r.indexOf(c) !== -1), o = { ...i, ...e };
    for (const c of n) {
      const f = $t(i[c], e[c]);
      if (!f[t(977)]) return { valid: !1 };
      o[c] = f[t(530)];
    }
    return { valid: !0, data: o };
  } else if (a === x0.array && x === x0[t(462)]) {
    if (i[t(1775)] !== e[t(1775)]) return { valid: !1 };
    const r = [];
    for (let n = 0; n < i[t(1775)]; n++) {
      const o = i[n], c = e[n], f = $t(o, c);
      if (!f[t(977)]) return { valid: !1 };
      r[t(2523)](f[t(530)]);
    }
    return { valid: !0, data: r };
  } else return a === x0[t(1390)] && x === x0[t(1390)] && +i == +e ? { valid: !0, data: i } : { valid: !1 };
}
class ye extends k0 {
  _parse(e) {
    var t = s;
    const { status: a, ctx: x } = this[t(2456)](e), r = (n, o) => {
      var c = t;
      if (gr(n) || gr(o)) return l0;
      const f = $t(n[c(895)], o[c(895)]);
      return f[c(977)] ? ((br(n) || br(o)) && a[c(2291)](), { status: a[c(895)], value: f[c(530)] }) : (X(x, { code: W[c(1936)] }), l0);
    };
    return x.common[t(545)] ? Promise[t(799)]([this[t(515)][t(1435)]._parseAsync({ data: x[t(530)], path: x[t(1948)], parent: x }), this[t(515)].right[t(1410)]({ data: x[t(530)], path: x[t(1948)], parent: x })])[t(2195)](([n, o]) => r(n, o)) : r(this._def[t(1435)][t(660)]({ data: x[t(530)], path: x[t(1948)], parent: x }), this._def[t(758)][t(660)]({ data: x[t(530)], path: x[t(1948)], parent: x }));
  }
}
ye[s(536)] = (i, e, t) => {
  var a = s;
  return new ye({ left: i, right: e, typeName: h0[a(2110)], ...m0(t) });
};
class Tx extends k0 {
  [s(554)](e) {
    var t = s;
    const { status: a, ctx: x } = this._processInputParams(e);
    if (x[t(563)] !== x0.array) return X(x, { code: W[t(1084)], expected: x0[t(462)], received: x[t(563)] }), l0;
    if (x[t(530)][t(1775)] < this[t(515)][t(1205)][t(1775)]) return X(x, { code: W.too_small, minimum: this._def.items[t(1775)], inclusive: !0, exact: !1, type: t(462) }), l0;
    !this[t(515)][t(448)] && x[t(530)].length > this[t(515)][t(1205)][t(1775)] && (X(x, { code: W[t(825)], maximum: this[t(515)][t(1205)][t(1775)], inclusive: !0, exact: !1, type: "array" }), a.dirty());
    const n = [...x.data][t(866)]((o, c) => {
      var f = t;
      const d = this._def.items[c] || this[f(515)][f(448)];
      return d ? d[f(554)](new hx(x, o, x.path, c)) : null;
    }).filter((o) => !!o);
    return x.common.async ? Promise[t(799)](n)[t(2195)]((o) => {
      var c = t;
      return xx[c(1244)](a, o);
    }) : xx[t(1244)](a, n);
  }
  get [s(1205)]() {
    var e = s;
    return this[e(515)][e(1205)];
  }
  rest(e) {
    var t = s;
    return new Tx({ ...this[t(515)], rest: e });
  }
}
Tx[s(536)] = (i, e) => {
  var t = s;
  if (!Array.isArray(i)) throw new Error(t(1351));
  return new Tx({ items: i, typeName: h0[t(1855)], rest: null, ...m0(e) });
};
class we extends k0 {
  get [s(1997)]() {
    var e = s;
    return this[e(515)].keyType;
  }
  get valueSchema() {
    var e = s;
    return this._def[e(1610)];
  }
  _parse(e) {
    var t = s;
    const { status: a, ctx: x } = this._processInputParams(e);
    if (x.parsedType !== x0[t(692)]) return X(x, { code: W[t(1084)], expected: x0[t(692)], received: x[t(563)] }), l0;
    const r = [], n = this._def[t(1980)], o = this._def[t(1610)];
    for (const c in x.data)
      r[t(2523)]({ key: n[t(554)](new hx(x, c, x.path, c)), value: o[t(554)](new hx(x, x[t(530)][c], x[t(1948)], c)), alwaysSet: c in x[t(530)] });
    return x[t(1614)].async ? xx[t(1313)](a, r) : xx[t(2386)](a, r);
  }
  get [s(616)]() {
    var e = s;
    return this[e(515)][e(1610)];
  }
  static [s(536)](e, t, a) {
    var x = s;
    return t instanceof k0 ? new we({ keyType: e, valueType: t, typeName: h0[x(1726)], ...m0(a) }) : new we({ keyType: wx.create(), valueType: e, typeName: h0.ZodRecord, ...m0(t) });
  }
}
class Er extends k0 {
  get keySchema() {
    var e = s;
    return this[e(515)][e(1980)];
  }
  get [s(2294)]() {
    var e = s;
    return this[e(515)][e(1610)];
  }
  _parse(e) {
    var t = s;
    const { status: a, ctx: x } = this._processInputParams(e);
    if (x[t(563)] !== x0[t(866)]) return X(x, { code: W[t(1084)], expected: x0[t(866)], received: x.parsedType }), l0;
    const r = this[t(515)][t(1980)], n = this[t(515)][t(1610)], o = [...x[t(530)][t(1642)]()][t(866)](([c, f], d) => {
      var l = t;
      return { key: r._parse(new hx(x, c, x[l(1948)], [d, l(2477)])), value: n._parse(new hx(x, f, x[l(1948)], [d, l(895)])) };
    });
    if (x[t(1614)].async) {
      const c = /* @__PURE__ */ new Map();
      return Promise.resolve()[t(2195)](async () => {
        var f = t;
        for (const d of o) {
          const l = await d[f(2477)], u = await d[f(895)];
          if (l.status === f(2459) || u[f(603)] === f(2459)) return l0;
          (l[f(603)] === f(2291) || u[f(603)] === f(2291)) && a.dirty(), c[f(1425)](l[f(895)], u[f(895)]);
        }
        return { status: a[f(895)], value: c };
      });
    } else {
      const c = /* @__PURE__ */ new Map();
      for (const f of o) {
        const d = f[t(2477)], l = f[t(895)];
        if (d[t(603)] === "aborted" || l[t(603)] === t(2459)) return l0;
        (d[t(603)] === t(2291) || l[t(603)] === t(2291)) && a[t(2291)](), c[t(1425)](d[t(895)], l[t(895)]);
      }
      return { status: a[t(895)], value: c };
    }
  }
}
Er[s(536)] = (i, e, t) => {
  var a = s;
  return new Er({ valueType: e, keyType: i, typeName: h0[a(1639)], ...m0(t) });
};
class te extends k0 {
  [s(554)](e) {
    var t = s;
    const { status: a, ctx: x } = this._processInputParams(e);
    if (x[t(563)] !== x0[t(1425)]) return X(x, { code: W[t(1084)], expected: x0.set, received: x[t(563)] }), l0;
    const r = this._def;
    r[t(1607)] !== null && x[t(530)][t(2030)] < r[t(1607)][t(895)] && (X(x, { code: W.too_small, minimum: r[t(1607)][t(895)], type: t(1425), inclusive: !0, exact: !1, message: r[t(1607)][t(532)] }), a.dirty()), r[t(1824)] !== null && x[t(530)][t(2030)] > r[t(1824)].value && (X(x, { code: W[t(825)], maximum: r[t(1824)][t(895)], type: t(1425), inclusive: !0, exact: !1, message: r[t(1824)][t(532)] }), a.dirty());
    const n = this[t(515)][t(1610)];
    function o(f) {
      var d = t;
      const l = /* @__PURE__ */ new Set();
      for (const u of f) {
        if (u.status === d(2459)) return l0;
        u[d(603)] === "dirty" && a.dirty(), l[d(547)](u[d(895)]);
      }
      return { status: a.value, value: l };
    }
    const c = [...x[t(530)].values()][t(866)]((f, d) => n[t(554)](new hx(x, f, x[t(1948)], d)));
    return x[t(1614)][t(545)] ? Promise[t(799)](c)[t(2195)]((f) => o(f)) : o(c);
  }
  [s(2369)](e, t) {
    var a = s;
    return new te({ ...this[a(515)], minSize: { value: e, message: r0[a(1928)](t) } });
  }
  [s(723)](e, t) {
    var a = s;
    return new te({ ...this[a(515)], maxSize: { value: e, message: r0[a(1928)](t) } });
  }
  [s(2030)](e, t) {
    var a = s;
    return this[a(2369)](e, t)[a(723)](e, t);
  }
  [s(1811)](e) {
    var t = s;
    return this[t(2369)](1, e);
  }
}
te[s(536)] = (i, e) => new te({ valueType: i, minSize: null, maxSize: null, typeName: h0.ZodSet, ...m0(e) });
class Lt extends k0 {
  get [s(1331)]() {
    var e = s;
    return this._def[e(1006)]();
  }
  [s(554)](e) {
    var t = s;
    const { ctx: a } = this._processInputParams(e);
    return this[t(515)][t(1006)]()._parse({ data: a[t(530)], path: a[t(1948)], parent: a });
  }
}
Lt[s(536)] = (i, e) => {
  var t = s;
  return new Lt({ getter: i, typeName: h0[t(1338)], ...m0(e) });
};
class Se extends k0 {
  [s(554)](e) {
    var t = s;
    if (e.data !== this[t(515)].value) {
      const a = this[t(736)](e);
      return X(a, { received: a[t(530)], code: W.invalid_literal, expected: this[t(515)][t(895)] }), l0;
    }
    return { status: "valid", value: e[t(530)] };
  }
  get value() {
    var e = s;
    return this[e(515)][e(895)];
  }
}
Se[s(536)] = (i, e) => new Se({ value: i, typeName: h0.ZodLiteral, ...m0(e) });
function Rs(i, e) {
  var t = s;
  return new Dx({ values: i, typeName: h0[t(2527)], ...m0(e) });
}
class Dx extends k0 {
  _parse(e) {
    var t = s;
    if (typeof e[t(530)] != "string") {
      const a = this[t(736)](e), x = this._def[t(2253)];
      return X(a, { expected: C0[t(1922)](x), received: a.parsedType, code: W[t(1084)] }), l0;
    }
    if (!this[t(1440)] && (this._cache = new Set(this[t(515)][t(2253)])), !this._cache[t(2228)](e[t(530)])) {
      const a = this[t(736)](e), x = this[t(515)][t(2253)];
      return X(a, { received: a[t(530)], code: W[t(1890)], options: x }), l0;
    }
    return rx(e[t(530)]);
  }
  get options() {
    var e = s;
    return this._def[e(2253)];
  }
  get enum() {
    var e = s;
    const t = {};
    for (const a of this[e(515)][e(2253)])
      t[a] = a;
    return t;
  }
  get [s(677)]() {
    var e = s;
    const t = {};
    for (const a of this._def[e(2253)])
      t[a] = a;
    return t;
  }
  get Enum() {
    var e = s;
    const t = {};
    for (const a of this[e(515)].values)
      t[a] = a;
    return t;
  }
  [s(1265)](e, t = this._def) {
    var a = s;
    return Dx[a(536)](e, { ...this[a(515)], ...t });
  }
  [s(2476)](e, t = this._def) {
    var a = s;
    return Dx.create(this[a(2479)][a(2173)]((x) => !e.includes(x)), { ...this._def, ...t });
  }
}
Dx[s(536)] = Rs;
class zt extends k0 {
  [s(554)](e) {
    var t = s;
    const a = C0.getValidEnumValues(this[t(515)][t(2253)]), x = this[t(736)](e);
    if (x.parsedType !== x0.string && x[t(563)] !== x0[t(1225)]) {
      const r = C0.objectValues(a);
      return X(x, { expected: C0.joinValues(r), received: x[t(563)], code: W[t(1084)] }), l0;
    }
    if (!this[t(1440)] && (this[t(1440)] = new Set(C0[t(1472)](this[t(515)].values))), !this._cache[t(2228)](e.data)) {
      const r = C0[t(587)](a);
      return X(x, { received: x[t(530)], code: W[t(1890)], options: r }), l0;
    }
    return rx(e[t(530)]);
  }
  get [s(559)]() {
    var e = s;
    return this[e(515)][e(2253)];
  }
}
zt[s(536)] = (i, e) => {
  var t = s;
  return new zt({ values: i, typeName: h0[t(981)], ...m0(e) });
};
class Ee extends k0 {
  [s(1482)]() {
    var e = s;
    return this[e(515)].type;
  }
  [s(554)](e) {
    var t = s;
    const { ctx: a } = this[t(2456)](e);
    if (a[t(563)] !== x0.promise && a.common.async === !1) return X(a, { code: W[t(1084)], expected: x0[t(2097)], received: a[t(563)] }), l0;
    const x = a[t(563)] === x0.promise ? a[t(530)] : Promise.resolve(a.data);
    return rx(x.then((r) => {
      var n = t;
      return this[n(515)][n(1529)].parseAsync(r, { path: a[n(1948)], errorMap: a[n(1614)][n(1779)] });
    }));
  }
}
Ee.create = (i, e) => {
  var t = s;
  return new Ee({ type: i, typeName: h0[t(1753)], ...m0(e) });
};
class Ox extends k0 {
  [s(1743)]() {
    var e = s;
    return this[e(515)][e(1331)];
  }
  [s(2351)]() {
    var e = s;
    return this[e(515)][e(1331)][e(515)][e(1514)] === h0[e(1624)] ? this[e(515)][e(1331)].sourceType() : this[e(515)][e(1331)];
  }
  _parse(e) {
    var t = s;
    const { status: a, ctx: x } = this[t(2456)](e), r = this[t(515)][t(1506)] || null, n = { addIssue: (o) => {
      var c = t;
      X(x, o), o[c(2504)] ? a[c(1828)]() : a[c(2291)]();
    }, get path() {
      var o = t;
      return x[o(1948)];
    } };
    if (n[t(843)] = n.addIssue.bind(n), r.type === t(1339)) {
      const o = r.transform(x.data, n);
      if (x[t(1614)].async) return Promise[t(2271)](o)[t(2195)](async (c) => {
        var f = t;
        if (a.value === f(2459)) return l0;
        const d = await this[f(515)][f(1331)][f(1410)]({ data: c, path: x[f(1948)], parent: x });
        return d.status === f(2459) ? l0 : d[f(603)] === f(2291) || a.value === "dirty" ? Gx(d[f(895)]) : d;
      });
      {
        if (a.value === "aborted") return l0;
        const c = this[t(515)][t(1331)][t(660)]({ data: o, path: x[t(1948)], parent: x });
        return c[t(603)] === t(2459) ? l0 : c[t(603)] === t(2291) || a[t(895)] === t(2291) ? Gx(c[t(895)]) : c;
      }
    }
    if (r[t(1529)] === t(502)) {
      const o = (c) => {
        var f = t;
        const d = r[f(502)](c, n);
        if (x[f(1614)][f(545)]) return Promise[f(2271)](d);
        if (d instanceof Promise) throw new Error("Async refinement encountered during synchronous parse operation. Use .parseAsync instead.");
        return c;
      };
      if (x[t(1614)][t(545)] === !1) {
        const c = this[t(515)][t(1331)][t(660)]({ data: x[t(530)], path: x[t(1948)], parent: x });
        return c[t(603)] === t(2459) ? l0 : (c.status === t(2291) && a[t(2291)](), o(c[t(895)]), { status: a.value, value: c[t(895)] });
      } else return this[t(515)].schema._parseAsync({ data: x[t(530)], path: x.path, parent: x }).then((c) => {
        var f = t;
        return c[f(603)] === f(2459) ? l0 : (c[f(603)] === f(2291) && a[f(2291)](), o(c[f(895)])[f(2195)](() => {
          var d = f;
          return { status: a[d(895)], value: c[d(895)] };
        }));
      });
    }
    if (r[t(1529)] === "transform")
      if (x[t(1614)][t(545)] === !1) {
        const o = this._def[t(1331)]._parseSync({ data: x[t(530)], path: x.path, parent: x });
        if (!Hx(o)) return l0;
        const c = r[t(1414)](o.value, n);
        if (c instanceof Promise) throw new Error("Asynchronous transform encountered during synchronous parse operation. Use .parseAsync instead.");
        return { status: a[t(895)], value: c };
      } else return this[t(515)].schema[t(1410)]({ data: x[t(530)], path: x.path, parent: x })[t(2195)]((o) => {
        var c = t;
        return Hx(o) ? Promise.resolve(r[c(1414)](o[c(895)], n))[c(2195)]((f) => ({ status: a[c(895)], value: f })) : l0;
      });
    C0[t(1542)](r);
  }
}
Ox.create = (i, e, t) => new Ox({ schema: i, typeName: h0.ZodEffects, effect: e, ...m0(t) }), Ox.createWithPreprocess = (i, e, t) => {
  var a = s;
  return new Ox({ schema: e, effect: { type: "preprocess", transform: i }, typeName: h0[a(1624)], ...m0(t) });
};
class Sx extends k0 {
  [s(554)](e) {
    var t = s;
    return this[t(1237)](e) === x0[t(1145)] ? rx(void 0) : this[t(515)][t(1743)][t(554)](e);
  }
  unwrap() {
    var e = s;
    return this[e(515)][e(1743)];
  }
}
Sx.create = (i, e) => {
  var t = s;
  return new Sx({ innerType: i, typeName: h0[t(1670)], ...m0(e) });
};
class jx extends k0 {
  _parse(e) {
    var t = s;
    return this[t(1237)](e) === x0[t(619)] ? rx(null) : this._def[t(1743)][t(554)](e);
  }
  [s(1482)]() {
    var e = s;
    return this[e(515)][e(1743)];
  }
}
jx[s(536)] = (i, e) => {
  var t = s;
  return new jx({ innerType: i, typeName: h0[t(1037)], ...m0(e) });
};
class Pe extends k0 {
  [s(554)](e) {
    var t = s;
    const { ctx: a } = this[t(2456)](e);
    let x = a[t(530)];
    return a[t(563)] === x0[t(1145)] && (x = this[t(515)][t(1768)]()), this[t(515)][t(1743)][t(554)]({ data: x, path: a[t(1948)], parent: a });
  }
  removeDefault() {
    var e = s;
    return this[e(515)][e(1743)];
  }
}
Pe[s(536)] = (i, e) => {
  var t = s;
  return new Pe({ innerType: i, typeName: h0.ZodDefault, defaultValue: typeof e[t(2178)] === t(2444) ? e.default : () => e.default, ...m0(e) });
};
class ke extends k0 {
  [s(554)](e) {
    var t = s;
    const { ctx: a } = this._processInputParams(e), x = { ...a, common: { ...a[t(1614)], issues: [] } }, r = this[t(515)][t(1743)][t(554)]({ data: x[t(530)], path: x[t(1948)], parent: { ...x } });
    return ve(r) ? r[t(2195)]((n) => {
      var o = t;
      return { status: o(977), value: n[o(603)] === o(977) ? n[o(895)] : this[o(515)][o(557)]({ get error() {
        var c = o;
        return new Ex(x[c(1614)][c(2229)]);
      }, input: x.data }) };
    }) : { status: "valid", value: r[t(603)] === t(977) ? r[t(895)] : this[t(515)][t(557)]({ get error() {
      var n = t;
      return new Ex(x[n(1614)][n(2229)]);
    }, input: x[t(530)] }) };
  }
  removeCatch() {
    var e = s;
    return this[e(515)].innerType;
  }
}
ke.create = (i, e) => {
  var t = s;
  return new ke({ innerType: i, typeName: h0[t(816)], catchValue: typeof e[t(1856)] === t(2444) ? e[t(1856)] : () => e[t(1856)], ...m0(e) });
};
class Pr extends k0 {
  [s(554)](e) {
    var t = s;
    if (this[t(1237)](e) !== x0[t(2401)]) {
      const x = this[t(736)](e);
      return X(x, { code: W[t(1084)], expected: x0[t(2401)], received: x[t(563)] }), l0;
    }
    return { status: t(977), value: e[t(530)] };
  }
}
Pr[s(536)] = (i) => {
  var e = s;
  return new Pr({ typeName: h0[e(568)], ...m0(i) });
};
class Fs extends k0 {
  _parse(e) {
    var t = s;
    const { ctx: a } = this[t(2456)](e), x = a[t(530)];
    return this._def[t(1529)][t(554)]({ data: x, path: a[t(1948)], parent: a });
  }
  unwrap() {
    var e = s;
    return this[e(515)][e(1529)];
  }
}
class Gt extends k0 {
  _parse(e) {
    var t = s;
    const { status: a, ctx: x } = this[t(2456)](e);
    if (x.common.async)
      return (async () => {
        var n = t;
        const o = await this._def.in._parseAsync({ data: x.data, path: x[n(1948)], parent: x });
        return o[n(603)] === "aborted" ? l0 : o[n(603)] === n(2291) ? (a[n(2291)](), Gx(o.value)) : this[n(515)].out._parseAsync({ data: o[n(895)], path: x[n(1948)], parent: x });
      })();
    {
      const r = this[t(515)].in[t(660)]({ data: x[t(530)], path: x.path, parent: x });
      return r[t(603)] === "aborted" ? l0 : r[t(603)] === t(2291) ? (a[t(2291)](), { status: t(2291), value: r[t(895)] }) : this[t(515)][t(1654)]._parseSync({ data: r[t(895)], path: x[t(1948)], parent: x });
    }
  }
  static [s(536)](e, t) {
    var a = s;
    return new Gt({ in: e, out: t, typeName: h0[a(2114)] });
  }
}
class Ie extends k0 {
  [s(554)](e) {
    var t = s;
    const a = this[t(515)][t(1743)][t(554)](e), x = (r) => {
      var n = t;
      return Hx(r) && (r.value = Object[n(546)](r[n(895)])), r;
    };
    return ve(a) ? a[t(2195)]((r) => x(r)) : x(a);
  }
  unwrap() {
    var e = s;
    return this[e(515)].innerType;
  }
}
Ie.create = (i, e) => {
  var t = s;
  return new Ie({ innerType: i, typeName: h0[t(1978)], ...m0(e) });
};
var h0;
(function(i) {
  var e = s;
  i.ZodString = e(516), i[e(1802)] = e(1802), i.ZodNaN = e(568), i.ZodBigInt = e(1682), i.ZodBoolean = e(1893), i.ZodDate = e(1720), i[e(1850)] = "ZodSymbol", i[e(1157)] = "ZodUndefined", i[e(2149)] = "ZodNull", i[e(514)] = e(514), i[e(1300)] = e(1300), i[e(1816)] = e(1816), i.ZodVoid = "ZodVoid", i.ZodArray = e(1634), i[e(965)] = e(965), i.ZodUnion = e(2414), i[e(782)] = e(782), i[e(2110)] = e(2110), i[e(1855)] = e(1855), i[e(1726)] = e(1726), i[e(1639)] = e(1639), i.ZodSet = e(1638), i.ZodFunction = e(1107), i[e(1338)] = e(1338), i[e(644)] = e(644), i[e(2527)] = e(2527), i[e(1624)] = e(1624), i[e(981)] = "ZodNativeEnum", i[e(1670)] = "ZodOptional", i[e(1037)] = "ZodNullable", i[e(2045)] = e(2045), i.ZodCatch = e(816), i[e(1753)] = e(1753), i[e(597)] = e(597), i[e(2114)] = e(2114), i[e(1978)] = e(1978);
})(h0 || (h0 = {}));
const q = wx[s(536)], N0 = Ux[s(536)], w0 = At.create, U0 = jt[s(536)], se = Mt[s(536)];
Ix[s(536)];
const q0 = lx[s(536)], M = B0[s(536)], _0 = be[s(536)], xi = Qt[s(536)];
ye[s(536)], Tx.create;
const G0 = we[s(536)], f0 = Se.create, K0 = Dx[s(536)];
Ee[s(536)];
const K = Sx[s(536)];
jx[s(536)];
var Ba;
class ei {
  constructor(e, t) {
    o0(this, Ba);
    o0(this, "nodeId");
    var a = s;
    this[a(1546)] = e, this.nodeId = t;
  }
  get store() {
    var e = s;
    const t = this[e(1546)].getNodeStore(this[e(1748)]);
    if (!t) throw new Error(e(1245) + this[e(1748)]);
    return this[e(1748)] !== this.graphInstance[e(1256)]() && this.graphInstance.ensureStoreConsumerBinding(this.nodeId), t;
  }
  get [(Ba = s(1546), s(1348))]() {
    var e = s;
    const t = this.graphInstance.getDefinition().getNode(this.nodeId);
    if (!t) throw new Error(e(773) + this.nodeId);
    return new Proxy({}, { get: (x, r) => {
      var n = e;
      if (typeof r !== n(998)) return;
      const o = t.actions[r];
      if (!o) throw new Error(n(2237) + r + n(920) + this[n(1748)]);
      return async (c, f) => {
        var d = n;
        const l = this.getConnectionInfo();
        if (!l) throw new Error("No connection available for node " + this[d(1748)]);
        const { connection: u, path: v } = l, h = this[d(1546)][d(1256)]();
        if (!o[d(1593)]) {
          const b = U0();
          let w;
          if (v[d(1775)] === 2) w = await u[d(2213)]("sdppp/directRequest", { action: r, data: c, sourceNodeId: h }, b);
          else try {
            w = await u.request(d(1412), { action: d(1906), data: { targetNodeId: this[d(1748)], targetAction: r, targetData: c, forwardPath: v[d(2287)](1) }, sourceNodeId: h }, b);
          } catch (S) {
            throw console[d(1882)](d(1271), S), console.error({ targetNodeId: this[d(1748)], targetAction: r, targetData: c, forwardPath: v.slice(1) }), S;
          }
          return w;
        }
        let m;
        return v.length === 2 ? m = u[d(763)]({ action: r, data: c, sourceNodeId: h }, o[d(2506)], f) : m = u.action({ action: "__proxy_forward", data: { targetNodeId: this[d(1748)], targetAction: r, targetData: c, forwardPath: v[d(2287)](1) }, sourceNodeId: h }, o.responseSchema, f), m;
      };
    } });
  }
  getConnectionInfo() {
    var e = s;
    return this[e(1546)][e(1599)](this[e(1748)]);
  }
}
const Lx = /* @__PURE__ */ new Map(), Fx = /* @__PURE__ */ new Map();
class Ns {
  constructor(e) {
    o0(this, "endpoint");
    var t = s;
    this[t(527)] = e;
  }
  [s(521)]({ store: e, storeName: t, onStateUpdate: a, requestInitialState: x }) {
    var r = s;
    this[r(527)][r(1516)](M({ method: f0(r(581) + t), params: U0() }), (o) => {
      var c = r;
      try {
        a(o[c(653)]);
      } catch (f) {
        console[c(1882)](c(2498) + t + ":", f);
      }
    });
    const n = async (o = 0, c = 5, f = 100) => {
      var d = r;
      try {
        await x();
      } catch {
        if (o < c) {
          const u = f * Math[d(1521)](2, o) + Math.random() * 100;
          setTimeout(() => {
            n(o + 1, c, f);
          }, u);
        } else console[d(897)](d(1732) + t + d(2066) + c + " retries");
      }
    };
    setTimeout(() => n(), 50);
  }
  [s(2487)]({ store: e, storeName: t, sendStateUpdate: a, onInitialStateRequested: x }) {
    var r = s;
    const n = t + "_" + Date.now() + "_" + Math[r(690)](), o = async (f, d = !1) => {
      var l = r;
      if (this[l(1776)]()) try {
        await a(f), Lx[l(2228)](n) && Lx[l(1869)](n);
      } catch (u) {
        const v = u instanceof Error ? u[l(532)] : String(u);
        !v.includes(l(1905)) && !v[l(2115)](l(2259)) && console[l(1882)](l(788) + t + ":", u), (v[l(2115)](l(1905)) || v[l(2115)](l(2259))) && Lx[l(1425)](n, f);
      }
      else {
        Lx[l(1425)](n, f), !Fx[l(2228)](n) && Fx[l(1425)](n, /* @__PURE__ */ new Set());
        const u = Fx[l(2214)](n), v = () => {
          var m = l;
          const b = Lx[m(2214)](n);
          b && o(b, !0);
        };
        u[l(547)](v);
        const h = () => {
          var m = l;
          this[m(1776)]() ? (u[m(1836)]((b) => b()), u[m(1950)](), Fx[m(1869)](n)) : setTimeout(h, 100);
        };
        setTimeout(h, 50);
      }
    }, c = e[r(1736)]((f) => {
      o(f, !1);
    });
    return x(() => {
      o(e.getState(), !0);
    }), o(e[r(828)](), !0), () => {
      var f = r;
      c(), Lx[f(1869)](n), Fx[f(2228)](n) && (Fx.get(n).clear(), Fx[f(1869)](n));
    };
  }
  isTransportReady() {
    var e = s;
    try {
      const t = this[e(527)].transport || this.endpoint[e(2387)] || this[e(527)][e(2010)];
      return t === void 0 && typeof this[e(527)][e(2218)] === e(2444) ? !0 : !!t;
    } catch {
      return typeof this[e(527)][e(2218)] === e(2444);
    }
  }
}
var Ka, Wa;
class Os {
  constructor(e) {
    o0(this, Wa);
    o0(this, "actionManager");
    o0(this, Ka);
    var t = s;
    this[t(1546)] = e, this[t(716)] = e.actionManager, this[t(1336)] = e[t(1336)];
  }
  [(Wa = s(1546), Ka = s(1336), s(521))]({ store: e, storeName: t, onStateUpdate: a, requestInitialState: x }) {
    var r = s;
    this[r(1336)][r(1391)](r(2517) + t, (o) => {
      var c = r;
      try {
        o[c(1297)] !== this[c(1546)][c(1256)]() && a(o[c(1494)]);
      } catch {
      }
    });
    const n = async (o = 0, c = 5, f = 100) => {
      var d = r;
      try {
        await x();
      } catch {
        if (o < c) {
          const u = f * Math[d(1521)](2, o) + Math[d(690)]() * 100;
          setTimeout(() => {
            n(o + 1, c, f);
          }, u);
        }
      }
    };
    setTimeout(() => n(), 50);
  }
  [s(2487)]({ store: e, storeName: t, sendStateUpdate: a, onInitialStateRequested: x }) {
    var r = s;
    const n = this[r(1546)].getCurrentNodeId(), o = async (d, l = !1) => {
      var u = r;
      if (this[u(1776)]()) try {
        await this[u(1336)].broadcast("store:update:" + t, { storeName: t, sourceNodeId: n, stateUpdate: d, isInitialState: l }), await a(d);
      } catch {
      }
    }, c = e[r(1736)]((d) => {
      o(d, !1);
    });
    x(() => {
      o(e.getState(), !0);
    });
    const f = r(2373) + t;
    return this[r(716)][r(1520)](f, async () => {
      var d = r;
      const l = e[d(828)]();
      return await o(l, !0), { success: !0 };
    }), o(e.getState(), !0), () => {
      var d;
      c(), (d = this.actionManager.actionHandlers) == null || d.delete(f);
    };
  }
  [s(1776)]() {
    var t;
    var e = s;
    try {
      const a = this.graphInstance[e(1488)], x = a && a[e(2453)]() > 0, r = ((t = this[e(1336)][e(1321)]) == null ? void 0 : t[e(2030)]) > 0;
      return x || r;
    } catch {
      return !!this[e(1336)];
    }
  }
}
function ti({ endpoint: i, store: e, name: t }) {
  var a = s;
  const x = new Ns(i), r = (o) => {
    var c = B;
    const f = e[c(828)](), d = { ...f, ...o };
    e[c(1296)](d);
  }, n = async () => {
    var o = B;
    await i[o(2218)]({ method: o(1499) + t, params: {} });
  };
  x[a(521)]({ store: e, storeName: t, onStateUpdate: r, requestInitialState: n });
}
function qs({ endpoint: i, store: e, name: t }) {
  var a = s;
  const x = new Ns(i), r = async (o) => {
    var c = B;
    await i.notification({ method: c(581) + t, params: o });
  }, n = (o) => {
    var c = B;
    i[c(1516)](M({ method: f0(c(1499) + t), params: U0() }), () => {
      o();
    });
  };
  return x[a(2487)]({ store: e, storeName: t, sendStateUpdate: r, onInitialStateRequested: n });
}
function kr({ graphInstance: i, store: e, name: t }) {
  var a = s;
  const x = new Os(i), r = (o) => {
    const c = e.getState(), f = { ...c, ...o };
    e.setState(f);
  }, n = async () => {
    var o = B;
    const c = o(2373) + t;
    try {
      const f = i[o(2007)]().getNeighbors(i.getCurrentNodeId());
      for (const d of f)
        try {
          const l = i[o(2186)](d);
          if (l && l[o(1348)] && l[o(1348)][c]) {
            await l[o(1348)][c]();
            break;
          }
        } catch {
          continue;
        }
    } catch (f) {
      console[o(897)](o(1732) + t + ":", f);
    }
  };
  x[a(521)]({ store: e, storeName: t, onStateUpdate: r, requestInitialState: n });
}
function ri({ graphInstance: i, store: e, name: t }) {
  var a = s;
  const x = new Os(i), r = async (o) => {
  }, n = (o) => {
  };
  return x[a(2487)]({ store: e, storeName: t, sendStateUpdate: r, onInitialStateRequested: n });
}
var Ja;
class ai {
  constructor() {
    o0(this, Ja, /* @__PURE__ */ new Map());
  }
  bindConsumer({ endpoint: e, store: t, nodeId: a }) {
    var x = s;
    this[x(751)](a), ti({ endpoint: e, store: t, name: a }), this.bindings.set(a, { nodeId: a, isProducer: !1 });
  }
  [(Ja = s(1455), s(1655))]({ endpoint: e, store: t, nodeId: a }) {
    var x = s;
    this[x(751)](a);
    const r = qs({ endpoint: e, store: t, name: a });
    this[x(1455)].set(a, { nodeId: a, isProducer: !0, cleanup: r });
  }
  unbind(e) {
    var t = s;
    const a = this.bindings.get(e);
    a && (a[t(2496)] && a[t(2496)](), this[t(1455)].delete(e));
  }
  [s(2138)](e) {
    var t = s;
    return this[t(1455)][t(2214)](e);
  }
  [s(1148)]() {
    var e = s;
    return Array[e(2512)](this[e(1455)][e(2253)]());
  }
  hasConsumerBinding(e) {
    var t = s;
    const a = this[t(1455)].get(e);
    return a ? !a[t(1054)] : !1;
  }
  [s(1507)](e) {
    var t = s;
    this[t(1455)].set(e, { nodeId: e, isProducer: !1 });
  }
  cleanup() {
    var e = s;
    for (const t of this[e(1455)][e(2253)]())
      t[e(2496)] && t.cleanup();
    this[e(1455)][e(1950)]();
  }
}
var Qa, Ga, Ya, Xa;
class si {
  constructor(e, t = {}) {
    o0(this, Xa);
    o0(this, Ya);
    o0(this, Ga, /* @__PURE__ */ new Map());
    o0(this, "definition");
    o0(this, Qa);
    var a = s;
    this[a(1546)] = e, this[a(1707)] = e.definition, this[a(2454)] = e[a(2454)], this.options = { pingInterval: t[a(1027)] || 3e4, maxRetries: t[a(461)] || 3, retryDelay: t[a(919)] || 5e3, dfsInterval: t[a(708)] || 3e4 };
  }
  [(Xa = s(1546), Ya = s(2479), Ga = s(2245), Qa = s(2454), s(2399))](e) {
    var t = s;
    if (this[t(2245)][t(2228)](e)) return;
    const a = setInterval(() => {
      var x = t;
      this[x(2181)](e);
    }, this[t(2479)][t(1027)]);
    this.monitoringIntervals.set(e, a);
  }
  [s(1156)](e) {
    var t = s;
    const a = this[t(2245)][t(2214)](e);
    a && (clearInterval(a), this.monitoringIntervals.delete(e));
  }
  async [s(2181)](e) {
    var t = s;
    try {
      await this[t(1783)](e);
    } catch (a) {
      console[t(897)](t(1196) + e + " appears unhealthy:", a);
    }
  }
  async [s(1783)](e) {
    var t = s;
    const a = this[t(1546)][t(596)](e);
    if (!a) throw new Error(t(2005));
    if (a[t(814)] && typeof a[t(814)] === t(2444) && a[t(814)]()) return Promise.resolve();
    throw new Error(t(1426));
  }
  [s(872)]() {
    var e = s;
    for (const t of this[e(2245)][e(2253)]())
      clearInterval(t);
    this[e(2245)][e(1950)]();
  }
}
var _a;
class ni {
  constructor() {
    o0(this, "broadcastHandlers", /* @__PURE__ */ new Map());
    o0(this, "connections", /* @__PURE__ */ new Map());
    o0(this, _a, /* @__PURE__ */ new Set());
  }
  createGlobalDispatcherForType(e) {
    return (t) => {
      var a = B;
      const x = this[a(2356)][a(2214)](e);
      if (x) for (const r of x)
        try {
          r(t);
        } catch (n) {
          console[a(1882)](a(534) + e + ":", n);
        }
      (e[a(2232)](a(2517)) || e === a(1215)) && !t[a(1517)] && this[a(2188)](e, t);
    };
  }
  async forwardBroadcast(e, t) {
    var a = s;
    try {
      const x = { ...t, forwarded: !0 }, r = Array[a(2512)](this[a(1152)][a(2253)]()), n = [...r];
      let o = 0;
      for (const f of this[a(1321)])
        r[a(2115)](f) || (n[a(2523)](f), o++);
      this[a(1321)][a(2030)];
      const c = n[a(866)]((f, d) => {
        var l = a;
        const u = r[l(2115)](f) ? l(2511) : l(2034);
        return f[l(1088)](e, x).catch((v) => {
          throw v;
        });
      });
      await Promise[a(799)](c);
    } catch (x) {
      console[a(1882)](a(2193), x);
    }
  }
  [(_a = s(1321), s(1391))](e, t) {
    var a = s;
    !this.broadcastHandlers.has(e) && this[a(2356)][a(1425)](e, /* @__PURE__ */ new Set()), this[a(2356)][a(2214)](e)[a(547)](t);
    const x = this[a(599)](e);
    for (const r of this.connections.values())
      r[a(1080)](e, x);
    for (const r of this[a(1321)])
      r[a(1080)](e, x);
  }
  [s(2336)](e) {
    var t = s;
    for (const a of this[t(2356)][t(870)]()) {
      const x = this[t(599)](a);
      e.registerBroadcastHandler(a, x);
    }
  }
  [s(1886)](e, t) {
    var a = s;
    this[a(1152)][a(1425)](e, t), this[a(2336)](t);
  }
  [s(2303)](e) {
    this.connections.delete(e);
  }
  async [s(1088)](e, t) {
    var a = s;
    const x = Array.from(this.connections[a(2253)]()), r = [...x];
    for (const o of this[a(1321)])
      !x.includes(o) && r.push(o);
    const n = r.map((o) => {
      var c = a;
      return o[c(1088)](e, t);
    });
    await Promise[a(799)](n);
  }
  [s(987)](e) {
    var t = s;
    this.mountedEndpoints[t(547)](e);
    for (const a of this.broadcastHandlers.keys()) {
      const x = this[t(599)](a);
      e[t(1080)](a, x);
    }
  }
  getHandlerTypes() {
    var e = s;
    return Array[e(2512)](this[e(2356)][e(870)]());
  }
  clear() {
    var e = s;
    this[e(2356)][e(1950)](), this[e(1152)][e(1950)](), this.mountedEndpoints[e(1950)]();
  }
}
var xs, es;
class ii {
  constructor(e, t, a) {
    o0(this, es, /* @__PURE__ */ new Map());
    o0(this, "definition");
    o0(this, xs);
    o0(this, "getConnection");
    var x = s;
    this[x(1707)] = e, this[x(2454)] = t, this[x(884)] = a;
  }
  [(es = s(1262), xs = s(2454), s(2507))](e, t) {
    var a = s;
    const x = this[a(1707)][a(2186)](this[a(2454)]);
    if (!x) throw new Error(a(773) + this[a(2454)]);
    const r = x[a(1348)][e];
    if (!r) throw new Error(a(2237) + String(e) + a(920) + this[a(2454)]);
    this[a(1531)](e, t, r), this[a(1262)][a(1425)](e, t);
  }
  [s(1531)](e, t, a) {
    var x = s;
    a[x(1593)];
  }
  [s(1520)](e, t) {
    var a = s;
    this[a(1262)][a(1425)](e, t);
  }
  [s(987)](e) {
    var t = s;
    for (const [a, x] of this[t(1262)]) {
      const r = this[t(1707)].getNode(this[t(2454)]), n = r == null ? void 0 : r[t(1348)][a];
      !((n == null ? void 0 : n[t(1593)]) === !0) && this[t(638)](e, a, x);
      const c = { shape: { action: { value: a } } }, f = async function* (d, l, u) {
        var v = t;
        const h = d[v(530)] || d, m = x(h, l, u);
        if (m && typeof m === v(692) && Symbol.asyncIterator in m && typeof m[Symbol[v(483)]] === v(2444)) for await (const b of m)
          yield b === void 0 ? {} : b;
        else {
          const b = await m;
          if (b && typeof b[Symbol[v(483)]] === v(2444)) for await (const w of b)
            yield w === void 0 ? {} : w;
          else yield b === void 0 ? {} : b;
        }
      };
      e.registerActionHandler(c, f);
    }
    this[t(1576)](e), this[t(1952)](e);
  }
  registerProxyForwardHandler(e) {
    var t = s;
    const a = { shape: { action: { value: "__proxy_forward" } } }, x = this, r = async function* (n, o, c) {
      var f = B;
      const d = n.data || n, { targetNodeId: l, targetAction: u, targetData: v, forwardPath: h } = d;
      if (!h || h.length === 0) throw new Error(f(2202));
      const m = h[0], b = h.slice(1);
      if (b[f(1775)] === 0 && m === x[f(2454)]) {
        const w = x.actionHandlers[f(2214)](u);
        if (!w) throw new Error(f(2237) + u + f(2327) + x[f(2454)]);
        const S = w(v, o, c);
        if (S && typeof S === f(692) && Symbol.asyncIterator in S && typeof S[Symbol[f(483)]] === f(2444)) for await (const C of S)
          yield C === void 0 ? {} : C;
        else {
          const C = await S;
          yield C === void 0 ? {} : C;
        }
        return;
      }
      if (m === x[f(2454)] && b.length > 0) {
        const w = b[0], S = x[f(884)](w);
        if (S) {
          const C = await S.action({ action: f(1906), data: { targetNodeId: l, targetAction: u, targetData: v, forwardPath: b } }, {}, c);
          for await (const N of C)
            yield N === void 0 ? {} : N;
          return;
        }
        throw new Error(f(1727) + w + f(476));
      }
      throw new Error(f(2118) + x.currentNodeId + " not in path " + h);
    };
    e[t(1174)](a, r);
  }
  [s(1553)]() {
    var e = s;
    return Array[e(2512)](this.actionHandlers[e(870)]());
  }
  [s(2033)](e) {
    var t = s;
    return this[t(1262)][t(2228)](e);
  }
  [s(898)](e) {
    var t = s;
    return this[t(1262)][t(2214)](e);
  }
  [s(1950)]() {
    var e = s;
    this[e(1262)].clear();
  }
  [s(638)](e, t, a) {
  }
  [s(1952)](e) {
    var t = s;
    const a = M({ method: f0("sdppp/directRequest"), params: M({ action: q(), data: U0()[t(726)]() }) }), x = this;
    e[t(701)](a, async (r, n) => {
      var o = t;
      const { action: c, data: f } = r[o(653)];
      if (c === o(1906)) return await x[o(745)](f, n);
      const d = x[o(1262)][o(2214)](c);
      if (!d) throw new Error(o(2237) + c + " not found on node " + x.currentNodeId);
      const l = d(f, n), u = await l;
      return u === void 0 ? {} : u;
    });
  }
  async handleDirectProxyForward(e, t) {
    var a = s;
    const { targetNodeId: x, targetAction: r, targetData: n, forwardPath: o } = e;
    if (!o || o[a(1775)] === 0) throw new Error(a(2202));
    const c = o[0], f = o[a(2287)](1);
    if (f[a(1775)] === 0 && c === this[a(2454)]) {
      const d = this[a(1262)].get(r);
      if (!d) throw new Error("Action " + r + " not found on node " + this[a(2454)]);
      const l = d(n, t), u = await l;
      return u === void 0 ? {} : u;
    }
    if (c === this[a(2454)] && f[a(1775)] > 0) {
      const d = f[0], l = this.getConnection(d);
      if (l) return await l.request("sdppp/directRequest", { action: a(1906), data: { targetNodeId: x, targetAction: r, targetData: n, forwardPath: f } }, U0());
      throw new Error(a(1727) + d + a(476));
    }
    throw new Error("Invalid proxy forwarding: current node " + this[a(2454)] + " not in path " + o);
  }
}
var ts, rs, as, ss;
class oi {
  constructor(e, t, a, x, r) {
    o0(this, "definition");
    o0(this, ss);
    o0(this, "connections", /* @__PURE__ */ new Map());
    o0(this, as);
    o0(this, rs);
    o0(this, ts);
    var n = s;
    this[n(1707)] = e, this.currentNodeId = t, this[n(1336)] = a, this[n(716)] = x, this.setupStoreBinding = r;
  }
  async [(ss = s(2454), as = s(1336), rs = s(716), ts = s(1119), s(2094))](e, t) {
    var a = s;
    if (!this[a(1707)][a(2070)](this[a(2454)], e)) throw new Error(a(1371) + this[a(2454)] + " to " + e);
    if (this[a(1152)][a(2228)](e)) throw new Error(a(2284) + e);
    try {
      const x = await t();
      this[a(1152)][a(1425)](e, x), this[a(1119)](e, x), this[a(1336)][a(1886)](e, x), this[a(1031)](e, x);
    } catch (x) {
      throw x;
    }
  }
  [s(884)](e) {
    var t = s;
    return this[t(1152)][t(2214)](e);
  }
  [s(1106)](e) {
    var t = s;
    const a = this[t(1152)][t(2214)](e);
    if (a) return { connection: a, path: [this[t(2454)], e] };
    const x = this.findPath(this.currentNodeId, e);
    if (x && x[t(1775)] > 1) {
      const r = x[1], n = this.connections[t(2214)](r);
      if (n) return { connection: n, path: x };
    }
  }
  [s(1251)](e, t) {
    var a = s;
    if (e === t) return [e];
    const x = /* @__PURE__ */ new Set(), r = [{ nodeId: e, path: [e] }];
    for (; r[a(1775)] > 0; ) {
      const { nodeId: n, path: o } = r.shift();
      if (x[a(2228)](n)) continue;
      x.add(n);
      const c = this[a(1707)][a(671)](n);
      for (const f of c) {
        if (f === t) return [...o, f];
        !x[a(2228)](f) && r.push({ nodeId: f, path: [...o, f] });
      }
    }
  }
  [s(2508)]() {
    var e = s;
    return Array[e(2512)](this.connections[e(870)]());
  }
  [s(2290)](e) {
    var t = s;
    return this[t(1152)].has(e);
  }
  [s(2453)]() {
    return this.connections.size;
  }
  disconnect(e, t = !1) {
    var a = s;
    const x = this[a(1152)][a(2214)](e);
    x && (t && a(1395) in x && typeof x[a(1395)] == "function" && x[a(1395)]()[a(1856)]((r) => {
      var n = a;
      console[n(897)](n(1125) + e + ":", r);
    }), this[a(1152)][a(1869)](e), this[a(1336)][a(2303)](e));
  }
  [s(1031)](e, t) {
    const a = () => {
      var x = B;
      const r = t[x(1992)], n = t[x(2361)];
      if (r && r[x(979)] !== void 0) {
        const c = r[x(979)];
        r[x(979)] = (f) => {
          var d = x;
          this[d(1025)](e, f), c && typeof c === d(2444) && c(f);
        };
      }
      if (n && n[x(979)] !== void 0) {
        const c = n[x(979)];
        n[x(979)] = (f) => {
          var d = x;
          this[d(1025)](e, f), c && typeof c === d(2444) && c(f);
        };
      }
      t && typeof t.onClose === x(2444) && t[x(1446)](() => {
        var c = x;
        this[c(1025)](e);
      });
      const o = t[x(2259)];
      if (o && o[x(979)] !== void 0) {
        const c = o[x(979)];
        o.onclose = (f) => {
          var d = x;
          this[d(1025)](e, f), c && typeof c === d(2444) && c(f);
        };
      }
    };
    try {
      a();
    } catch {
    }
  }
  [s(1025)](e, t) {
    var a = s;
    this[a(1152)].has(e) && (this[a(1152)][a(1869)](e), this[a(1336)][a(2303)](e));
  }
  [s(1950)]() {
    var e = s;
    for (const t of this.connections.keys())
      this[e(1208)](t);
  }
}
var ns, is, os, cs, fs, ds, us;
class ci {
  constructor(e, t, a) {
    o0(this, us);
    o0(this, "currentNodeId");
    o0(this, ds, /* @__PURE__ */ new Map());
    o0(this, fs, /* @__PURE__ */ new Map());
    o0(this, cs);
    o0(this, os, new ai());
    o0(this, "broadcastManager");
    o0(this, is);
    o0(this, ns);
    var x = s;
    this.definition = e, this[x(2454)] = t, this[x(648)](), this[x(1336)] = new ni(), this[x(716)] = new ii(e, t, (r) => this[x(596)](r)), this[x(1488)] = new oi(e, t, this[x(1336)], this[x(716)], (r, n) => this[x(1119)](r, n)), this[x(906)] = new si(this, a), this[x(755)]();
  }
  initializeNodeStores() {
    var e = s;
    for (const t of this[e(1707)][e(1739)]()) {
      const a = this[e(1707)].getNode(t);
      if (a && a[e(2017)]) {
        const x = this.getDefaultValuesFromSchema(a[e(2017)]), r = Rn(() => x);
        this[e(1213)].set(t, r);
      }
    }
  }
  [(us = s(1707), ds = s(1213), fs = s(540), cs = s(906), os = s(911), is = s(716), ns = s(1488), s(1990))](e) {
    var t = s;
    if (!e) return {};
    try {
      return e[t(2078)]({});
    } catch {
      return this[t(1995)](e);
    }
  }
  [s(1995)](e) {
    var t = s;
    if (!e || !e[t(1625)]) return {};
    if (e[t(1625)][t(1529)] === "default") {
      const a = e[t(1625)][t(1768)];
      return typeof a == "function" ? a() : a;
    }
    if (e[t(1625)][t(1529)] === t(692)) {
      const a = {};
      let x;
      try {
        x = e[t(1625)][t(1999)];
      } catch {
        return {};
      }
      if (x) for (const [r, n] of Object[t(1642)](x)) {
        const o = this[t(2428)](n);
        o !== void 0 && (a[r] = o);
      }
      return a;
    }
    return {};
  }
  [s(2428)](e) {
    var t = s;
    if (e)
      try {
        return e[t(2078)](void 0);
      } catch {
        return this[t(1995)](e);
      }
  }
  async [s(2094)](e, t) {
    var a = s;
    return this.connectionManager[a(2094)](e, t);
  }
  [s(1208)](e, t = !1) {
    var a = s;
    return this[a(1488)].disconnect(e, t);
  }
  setupStoreBinding(e, t) {
    var a = s;
    const x = this[a(1213)][a(2214)](e);
    if (!x) return;
    const r = t.server || t[a(1992)];
    r && (t.client ? this[a(911)].bindConsumer({ endpoint: r, store: x, nodeId: e }) : this[a(911)][a(1655)]({ endpoint: r, store: x, nodeId: e }));
  }
  setupGraphStoreSync() {
    var e = s;
    for (const [t, a] of this[e(1213)])
      t === this[e(2454)] ? ri({ graphInstance: this, store: a, name: t }) : kr({ graphInstance: this, store: a, name: t });
  }
  [s(2186)](e) {
    var t = s;
    if (!this[t(540)][t(2228)](e)) {
      const a = new ei(this, e);
      this[t(540)][t(1425)](e, a);
    }
    return this[t(540)][t(2214)](e);
  }
  [s(596)](e) {
    var t = s;
    return this.connectionManager[t(884)](e);
  }
  [s(884)](e) {
    var t = s;
    return this[t(596)](e);
  }
  getNodeStore(e) {
    var t = s;
    return this[t(1213)].get(e);
  }
  get [s(2017)]() {
    var e = s;
    const t = this[e(1213)][e(2214)](this[e(2454)]);
    if (!t) throw new Error(e(1400) + this[e(2454)]);
    return t;
  }
  get [s(1348)]() {
    var e = s;
    const t = this[e(1707)][e(2186)](this[e(2454)]);
    if (!t) throw new Error(e(1121) + this[e(2454)]);
    return new Proxy({}, { get: (x, r) => {
      var n = e;
      if (typeof r != "string") return;
      const o = t[n(1348)][r];
      if (!o) throw new Error(n(2237) + r + n(1354) + this[n(2454)]);
      return (c, f) => {
        var d = n;
        const l = this[d(716)][d(898)](r);
        if (!l) throw new Error("Action handler " + r + d(610) + this[d(2454)]);
        const u = { nodeId: this.currentNodeId };
        if (o[d(1593)] === !0) {
          const v = l(c, u, f);
          return v && typeof v === d(692) && Symbol[d(483)] in v ? async function* () {
            for await (const h of v)
              yield h === void 0 ? {} : h;
          }() : async function* () {
            const h = await v;
            yield h === void 0 ? {} : h;
          }();
        } else return (async () => {
          var v = d;
          const h = l(c, u, f);
          if (h && typeof h === v(692) && Symbol[v(483)] in h) {
            const m = h[Symbol[v(483)]](), b = await m[v(2359)]();
            return b.value === void 0 ? {} : b[v(895)];
          } else {
            const m = await h;
            return m === void 0 ? {} : m;
          }
        })();
      };
    } });
  }
  [s(2007)]() {
    var e = s;
    return this[e(1707)];
  }
  [s(1256)]() {
    var e = s;
    return this[e(2454)];
  }
  [s(1239)](e) {
    var t = s;
    if (e === this[t(2454)] || this[t(911)][t(1956)](e)) return;
    const a = this[t(1213)][t(2214)](e);
    if (a)
      try {
        kr({ graphInstance: this, store: a, name: e }), this[t(911)][t(1507)](e);
      } catch {
      }
  }
  [s(1599)](e) {
    var t = s;
    return this[t(1488)].getConnectionToNode(e);
  }
  getConnectionToNode(e) {
    var t = s;
    return this[t(1599)](e);
  }
  [s(987)](e) {
    var t = s;
    const a = this[t(1213)][t(2214)](this[t(2454)]);
    if (!a) throw new Error(t(957) + this[t(2454)]);
    const x = e[t(2361)] || e.client;
    qs({ endpoint: x, store: a, name: this[t(2454)] }), this.actionManager[t(987)](e), this[t(1336)][t(987)](e);
  }
  [s(2507)](e, t) {
    var a = s;
    this[a(716)].implementAction(e, t);
  }
  [s(872)]() {
    var e = s;
    this[e(906)].destroy(), this[e(911)][e(2496)](), this[e(1336)][e(1950)](), this[e(716)][e(1950)](), this.connectionManager.clear();
  }
  [s(2491)](e, t) {
    var a = s;
    return this.connectionManager[a(1251)](e, t);
  }
  [s(1251)](e, t) {
    return this.findPathInternal(e, t);
  }
  async broadcast(e, t) {
    var a = s;
    return this[a(1336)].broadcast(e, t);
  }
  [s(467)](e, t) {
    var a = s;
    this[a(1336)][a(1391)](e, t);
  }
}
const As = s(789), fi = [As, s(808), s(821), s(2021)], Oe = s(1111), Ts = _0([q(), N0().int()]), Ds = q(), di = M({ progressToken: K(Ts) })[s(504)](), ax = M({ _meta: K(di) })[s(504)](), ex = M({ method: q(), params: K(ax) }), ne = M({ _meta: K(M({}).passthrough()) })[s(504)](), px = M({ method: q(), params: K(ne) }), sx = M({ _meta: K(M({})[s(504)]()) })[s(504)](), qe = _0([q(), N0()[s(899)]()]), js = M({ jsonrpc: f0(Oe), id: qe })[s(2342)](ex)[s(844)](), ui = (i) => js.safeParse(i)[s(768)], Ms = M({ jsonrpc: f0(Oe) })[s(2342)](px).strict(), li = (i) => Ms[s(673)](i)[s(768)], $s = M({ jsonrpc: f0(Oe), id: qe, result: sx })[s(844)](), Ir = (i) => $s.safeParse(i).success;
var yx;
(function(i) {
  var e = s;
  i[i[e(1240)] = -32e3] = e(1240), i[i.RequestTimeout = -32001] = e(2216), i[i[e(2153)] = -32700] = e(2153), i[i.InvalidRequest = -32600] = "InvalidRequest", i[i[e(1101)] = -32601] = e(1101), i[i[e(1504)] = -32602] = e(1504), i[i[e(1675)] = -32603] = e(1675);
})(yx || (yx = {}));
const Ls = M({ jsonrpc: f0(Oe), id: qe, error: M({ code: N0().int(), message: q(), data: K(se()) }) })[s(844)](), hi = (i) => Ls.safeParse(i)[s(768)];
_0([js, Ms, $s, Ls]);
const Vt = sx[s(844)](), Ht = px[s(2384)]({ method: f0(s(1967)), params: ne.extend({ requestId: qe, reason: q()[s(726)]() }) }), ie = M({ name: q(), title: K(q()) })[s(504)](), zs = ie[s(2384)]({ version: q() }), pi = M({ experimental: K(M({})[s(504)]()), sampling: K(M({}).passthrough()), elicitation: K(M({})[s(504)]()), roots: K(M({ listChanged: K(w0()) })[s(504)]()) }).passthrough(), Vs = ex[s(2384)]({ method: f0(s(1155)), params: ax[s(2384)]({ protocolVersion: q(), capabilities: pi, clientInfo: zs }) }), vi = M({ experimental: K(M({})[s(504)]()), logging: K(M({})[s(504)]()), completions: K(M({})[s(504)]()), prompts: K(M({ listChanged: K(w0()) }).passthrough()), resources: K(M({ subscribe: K(w0()), listChanged: K(w0()) })[s(504)]()), tools: K(M({ listChanged: K(w0()) })[s(504)]()) }).passthrough(), mi = sx.extend({ protocolVersion: q(), capabilities: vi, serverInfo: zs, instructions: K(q()) }), Hs = px[s(2384)]({ method: f0(s(1097)) }), Ut = ex[s(2384)]({ method: f0("ping") }), gi = M({ progress: N0(), total: K(N0()), message: K(q()) })[s(504)](), Zt = px[s(2384)]({ method: f0(s(1463)), params: ne.merge(gi)[s(2384)]({ progressToken: Ts }) }), Ae = ex[s(2384)]({ params: ax.extend({ cursor: K(Ds) })[s(726)]() }), Te = sx[s(2384)]({ nextCursor: K(Ds) }), Us = M({ uri: q(), mimeType: K(q()), _meta: K(M({})[s(504)]()) }).passthrough(), Zs = Us[s(2384)]({ text: q() }), Bs = Us[s(2384)]({ blob: q()[s(2318)]() }), Ks = ie.extend({ uri: q(), description: K(q()), mimeType: K(q()), _meta: K(M({}).passthrough()) }), bi = ie[s(2384)]({ uriTemplate: q(), description: K(q()), mimeType: K(q()), _meta: K(M({})[s(504)]()) }), yi = Ae.extend({ method: f0(s(1601)) }), wi = Te[s(2384)]({ resources: q0(Ks) }), Si = Ae[s(2384)]({ method: f0("resources/templates/list") }), Ei = Te.extend({ resourceTemplates: q0(bi) }), Pi = ex.extend({ method: f0("resources/read"), params: ax[s(2384)]({ uri: q() }) }), ki = sx[s(2384)]({ contents: q0(_0([Zs, Bs])) }), Ii = px[s(2384)]({ method: f0("notifications/resources/list_changed") }), Ci = ex[s(2384)]({ method: f0(s(1112)), params: ax[s(2384)]({ uri: q() }) }), Ri = ex.extend({ method: f0("resources/unsubscribe"), params: ax[s(2384)]({ uri: q() }) }), Fi = px.extend({ method: f0(s(2458)), params: ne.extend({ uri: q() }) }), Ni = M({ name: q(), description: K(q()), required: K(w0()) }).passthrough(), Oi = ie.extend({ description: K(q()), arguments: K(q0(Ni)), _meta: K(M({}).passthrough()) }), qi = Ae[s(2384)]({ method: f0(s(517)) }), Ai = Te[s(2384)]({ prompts: q0(Oi) }), Ti = ex.extend({ method: f0(s(2488)), params: ax[s(2384)]({ name: q(), arguments: K(G0(q())) }) }), Yt = M({ type: f0("text"), text: q(), _meta: K(M({})[s(504)]()) })[s(504)](), Xt = M({ type: f0(s(2363)), data: q()[s(2318)](), mimeType: q(), _meta: K(M({})[s(504)]()) }).passthrough(), _t = M({ type: f0(s(1989)), data: q()[s(2318)](), mimeType: q(), _meta: K(M({})[s(504)]()) })[s(504)](), Di = M({ type: f0(s(1489)), resource: _0([Zs, Bs]), _meta: K(M({})[s(504)]()) })[s(504)](), ji = Ks[s(2384)]({ type: f0(s(1898)) }), Ws = _0([Yt, Xt, _t, ji, Di]), Mi = M({ role: K0([s(1955), s(2295)]), content: Ws })[s(504)](), $i = sx[s(2384)]({ description: K(q()), messages: q0(Mi) }), Li = px[s(2384)]({ method: f0(s(586)) }), zi = M({ title: K(q()), readOnlyHint: K(w0()), destructiveHint: K(w0()), idempotentHint: K(w0()), openWorldHint: K(w0()) }).passthrough(), Vi = ie[s(2384)]({ description: K(q()), inputSchema: M({ type: f0(s(692)), properties: K(M({})[s(504)]()), required: K(q0(q())) }).passthrough(), outputSchema: K(M({ type: f0("object"), properties: K(M({})[s(504)]()), required: K(q0(q())) })[s(504)]()), annotations: K(zi), _meta: K(M({}).passthrough()) }), Hi = Ae[s(2384)]({ method: f0(s(2058)) }), Ui = Te[s(2384)]({ tools: q0(Vi) }), Js = sx[s(2384)]({ content: q0(Ws)[s(2178)]([]), structuredContent: M({})[s(504)]()[s(726)](), isError: K(w0()) });
Js.or(sx[s(2384)]({ toolResult: se() }));
const Zi = ex[s(2384)]({ method: f0("tools/call"), params: ax[s(2384)]({ name: q(), arguments: K(G0(se())) }) }), Bi = px[s(2384)]({ method: f0("notifications/tools/list_changed") }), Qs = K0([s(1113), s(1917), s(959), s(1248), s(1882), "critical", s(2116), s(1416)]), Ki = ex[s(2384)]({ method: f0(s(908)), params: ax.extend({ level: Qs }) }), Wi = px.extend({ method: f0("notifications/message"), params: ne[s(2384)]({ level: Qs, logger: K(q()), data: se() }) }), Ji = M({ name: q()[s(726)]() })[s(504)](), Qi = M({ hints: K(q0(Ji)), costPriority: K(N0()[s(2369)](0)[s(723)](1)), speedPriority: K(N0().min(0)[s(723)](1)), intelligencePriority: K(N0()[s(2369)](0)[s(723)](1)) }).passthrough(), Gi = M({ role: K0([s(1955), s(2295)]), content: _0([Yt, Xt, _t]) })[s(504)](), Yi = ex[s(2384)]({ method: f0(s(1159)), params: ax[s(2384)]({ messages: q0(Gi), systemPrompt: K(q()), includeContext: K(K0([s(1796), s(2509), s(1669)])), temperature: K(N0()), maxTokens: N0().int(), stopSequences: K(q0(q())), metadata: K(M({}).passthrough()), modelPreferences: K(Qi) }) }), Gs = sx[s(2384)]({ model: q(), stopReason: K(K0([s(2312), s(620), s(1544)]).or(q())), role: K0([s(1955), s(2295)]), content: xi(s(1529), [Yt, Xt, _t]) }), Xi = M({ type: f0(s(2529)), title: K(q()), description: K(q()), default: K(w0()) })[s(504)](), _i = M({ type: f0(s(998)), title: K(q()), description: K(q()), minLength: K(N0()), maxLength: K(N0()), format: K(K0(["email", s(2438), s(1390), s(1047)])) })[s(504)](), xo = M({ type: K0([s(1225), s(1845)]), title: K(q()), description: K(q()), minimum: K(N0()), maximum: K(N0()) })[s(504)](), eo = M({ type: f0(s(998)), title: K(q()), description: K(q()), enum: q0(q()), enumNames: K(q0(q())) })[s(504)](), to = _0([Xi, _i, xo, eo]), ro = ex.extend({ method: f0(s(1451)), params: ax[s(2384)]({ message: q(), requestedSchema: M({ type: f0(s(692)), properties: G0(q(), to), required: K(q0(q())) })[s(504)]() }) }), Ys = sx[s(2384)]({ action: K0([s(1596), s(893), s(1686)]), content: K(G0(q(), se())) }), ao = M({ type: f0(s(1959)), uri: q() })[s(504)](), so = M({ type: f0(s(1274)), name: q() })[s(504)](), no = ex[s(2384)]({ method: f0(s(2183)), params: ax[s(2384)]({ ref: _0([so, ao]), argument: M({ name: q(), value: q() })[s(504)](), context: K(M({ arguments: K(G0(q(), q())) })) }) }), io = sx[s(2384)]({ completion: M({ values: q0(q())[s(723)](100), total: K(N0().int()), hasMore: K(w0()) })[s(504)]() }), oo = M({ uri: q()[s(2232)]("file://"), name: K(q()), _meta: K(M({})[s(504)]()) }).passthrough(), co = ex[s(2384)]({ method: f0(s(1397)) }), Xs = sx[s(2384)]({ roots: q0(oo) }), fo = px[s(2384)]({ method: f0(s(1887)) });
_0([Ut, Vs, no, Ki, Ti, qi, yi, Si, Pi, Ci, Ri, Zi, Hi]), _0([Ht, Zt, Hs, fo]), _0([Vt, Gs, Ys, Xs]), _0([Ut, Yi, ro, co]), _0([Ht, Zt, Wi, Fi, Ii, Bi, Li]), _0([Vt, mi, io, $i, Ai, wi, Ei, ki, Js, Ui]);
class qx extends Error {
  constructor(e, t, a) {
    var x = s;
    super(x(2449) + e + ": " + t), this[x(594)] = e, this[x(530)] = a, this[x(772)] = x(678);
  }
}
const uo = 6e4;
class lo {
  constructor(e) {
    var t = s;
    this[t(1281)] = e, this[t(2238)] = 0, this[t(1656)] = /* @__PURE__ */ new Map(), this[t(1846)] = /* @__PURE__ */ new Map(), this[t(2275)] = /* @__PURE__ */ new Map(), this[t(589)] = /* @__PURE__ */ new Map(), this._progressHandlers = /* @__PURE__ */ new Map(), this[t(445)] = /* @__PURE__ */ new Map(), this[t(1904)] = /* @__PURE__ */ new Set(), this[t(1516)](Ht, (a) => {
      var x = t;
      const r = this[x(1846)].get(a[x(653)].requestId);
      r == null || r[x(1828)](a[x(653)][x(2371)]);
    }), this[t(1516)](Zt, (a) => {
      var x = t;
      this[x(2143)](a);
    }), this[t(1181)](Ut, (a) => ({}));
  }
  _setupTimeout(e, t, a, x, r = !1) {
    var n = s;
    this[n(445)][n(1425)](e, { timeoutId: setTimeout(x, t), startTime: Date[n(693)](), timeout: t, maxTotalTimeout: a, resetTimeoutOnProgress: r, onTimeout: x });
  }
  [s(478)](e) {
    var t = s;
    const a = this._timeoutInfo[t(2214)](e);
    if (!a) return !1;
    const x = Date[t(693)]() - a[t(1104)];
    if (a[t(2090)] && x >= a[t(2090)])
      throw this._timeoutInfo[t(1869)](e), new qx(yx[t(2216)], t(1165), { maxTotalTimeout: a[t(2090)], totalElapsed: x });
    return clearTimeout(a[t(764)]), a[t(764)] = setTimeout(a[t(2073)], a[t(1602)]), !0;
  }
  [s(565)](e) {
    var t = s;
    const a = this._timeoutInfo[t(2214)](e);
    a && (clearTimeout(a.timeoutId), this[t(445)][t(1869)](e));
  }
  async [s(2094)](e) {
    var t = s, a, x, r;
    this._transport = e;
    const n = (a = this[t(2259)]) === null || a === void 0 ? void 0 : a[t(979)];
    this._transport.onclose = () => {
      var f = t;
      n == null || n(), this[f(2355)]();
    };
    const o = (x = this.transport) === null || x === void 0 ? void 0 : x[t(770)];
    this[t(2387)].onerror = (f) => {
      var d = t;
      o == null || o(f), this[d(1448)](f);
    };
    const c = (r = this[t(2387)]) === null || r === void 0 ? void 0 : r[t(2185)];
    this[t(2387)].onmessage = (f, d) => {
      var l = t;
      c == null || c(f, d), Ir(f) || hi(f) ? this._onresponse(f) : ui(f) ? this._onrequest(f, d) : li(f) ? this._onnotification(f) : this[l(1448)](new Error(l(837) + JSON[l(847)](f)));
    }, await this[t(2387)].start();
  }
  [s(2355)]() {
    var e = s, t;
    const a = this[e(589)];
    this._responseHandlers = /* @__PURE__ */ new Map(), this[e(1930)][e(1950)](), this[e(1904)][e(1950)](), this[e(2387)] = void 0, (t = this[e(979)]) === null || t === void 0 || t.call(this);
    const x = new qx(yx[e(1240)], e(1230));
    for (const r of a[e(2253)]())
      r(x);
  }
  [s(1448)](e) {
    var t = s, a;
    (a = this[t(770)]) === null || a === void 0 || a[t(444)](this, e);
  }
  [s(737)](e) {
    var t = s, a;
    const x = (a = this._notificationHandlers.get(e.method)) !== null && a !== void 0 ? a : this[t(2299)];
    x !== void 0 && Promise.resolve()[t(2195)](() => x(e)).catch((r) => this[t(1448)](new Error(t(1643) + r)));
  }
  [s(2255)](e, t) {
    var a = s, x, r, n, o;
    const c = (x = this[a(1656)][a(2214)](e[a(1378)])) !== null && x !== void 0 ? x : this[a(512)];
    if (c === void 0) {
      (r = this[a(2387)]) === null || r === void 0 || r[a(1238)]({ jsonrpc: a(1111), id: e.id, error: { code: yx[a(1101)], message: "Method not found" } })[a(1856)]((l) => this._onerror(new Error("Failed to send an error response: " + l)));
      return;
    }
    const f = new AbortController();
    this._requestHandlerAbortControllers[a(1425)](e.id, f);
    const d = { signal: f[a(1892)], sessionId: (n = this._transport) === null || n === void 0 ? void 0 : n[a(1420)], _meta: (o = e[a(653)]) === null || o === void 0 ? void 0 : o[a(2419)], sendNotification: (l) => this[a(2218)](l, { relatedRequestId: e.id }), sendRequest: (l, u, v) => this[a(2213)](l, u, { ...v, relatedRequestId: e.id }), authInfo: t == null ? void 0 : t.authInfo, requestId: e.id, requestInfo: t == null ? void 0 : t[a(2301)] };
    Promise[a(2271)]().then(() => c(e, d))[a(2195)]((l) => {
      var u = a, v;
      if (!f[u(1892)][u(2459)])
        return (v = this[u(2387)]) === null || v === void 0 ? void 0 : v.send({ result: l, jsonrpc: u(1111), id: e.id });
    }, (l) => {
      var u = a, v, h;
      if (!f[u(1892)][u(2459)])
        return (v = this[u(2387)]) === null || v === void 0 ? void 0 : v.send({ jsonrpc: u(1111), id: e.id, error: { code: Number[u(937)](l.code) ? l[u(594)] : yx.InternalError, message: (h = l.message) !== null && h !== void 0 ? h : u(1211) } });
    })[a(1856)]((l) => this[a(1448)](new Error(a(2421) + l)))[a(583)](() => {
      var l = a;
      this[l(1846)][l(1869)](e.id);
    });
  }
  [s(2143)](e) {
    var t = s;
    const { progressToken: a, ...x } = e[t(653)], r = Number(a), n = this[t(1930)][t(2214)](r);
    if (!n) {
      this[t(1448)](new Error("Received a progress notification for an unknown token: " + JSON[t(847)](e)));
      return;
    }
    const o = this[t(589)][t(2214)](r), c = this._timeoutInfo[t(2214)](r);
    if (c && o && c[t(1530)]) try {
      this[t(478)](r);
    } catch (f) {
      o(f);
      return;
    }
    n(x);
  }
  _onresponse(e) {
    var t = s;
    const a = Number(e.id), x = this[t(589)].get(a);
    if (x === void 0) {
      this[t(1448)](new Error(t(2283) + JSON.stringify(e)));
      return;
    }
    if (this[t(589)][t(1869)](a), this[t(1930)][t(1869)](a), this[t(565)](a), Ir(e)) x(e);
    else {
      const r = new qx(e[t(1882)][t(594)], e[t(1882)].message, e[t(1882)].data);
      x(r);
    }
  }
  get [s(2259)]() {
    var e = s;
    return this[e(2387)];
  }
  async [s(1395)]() {
    var e;
    await ((e = this._transport) === null || e === void 0 ? void 0 : e.close());
  }
  request(e, t, a) {
    const { relatedRequestId: x, resumptionToken: r, onresumptiontoken: n } = a ?? {};
    return new Promise((o, c) => {
      var f = B, d, l, u, v, h, m;
      if (!this._transport) {
        c(new Error("Not connected"));
        return;
      }
      ((d = this[f(1281)]) === null || d === void 0 ? void 0 : d.enforceStrictCapabilities) === !0 && this[f(2400)](e[f(1378)]), (l = a == null ? void 0 : a.signal) === null || l === void 0 || l[f(2293)]();
      const b = this[f(2238)]++, w = { ...e, jsonrpc: f(1111), id: b };
      a != null && a[f(1998)] && (this[f(1930)][f(1425)](b, a.onprogress), w[f(653)] = { ...e[f(653)], _meta: { ...((u = e.params) === null || u === void 0 ? void 0 : u[f(2419)]) || {}, progressToken: b } });
      const S = (k) => {
        var E = f, I;
        this[E(589)][E(1869)](b), this._progressHandlers[E(1869)](b), this[E(565)](b), (I = this[E(2387)]) === null || I === void 0 || I[E(1238)]({ jsonrpc: E(1111), method: E(1967), params: { requestId: b, reason: String(k) } }, { relatedRequestId: x, resumptionToken: r, onresumptiontoken: n })[E(1856)]((D) => this[E(1448)](new Error("Failed to send cancellation: " + D))), c(k);
      };
      this[f(589)].set(b, (k) => {
        var E = f, I;
        if (!(!((I = a == null ? void 0 : a[E(1892)]) === null || I === void 0) && I[E(2459)])) {
          if (k instanceof Error) return c(k);
          try {
            const D = t[E(2078)](k[E(2071)]);
            o(D);
          } catch (D) {
            c(D);
          }
        }
      }), (v = a == null ? void 0 : a[f(1892)]) === null || v === void 0 || v.addEventListener(f(1828), () => {
        var k = f, E;
        S((E = a == null ? void 0 : a.signal) === null || E === void 0 ? void 0 : E[k(2371)]);
      });
      const C = (h = a == null ? void 0 : a.timeout) !== null && h !== void 0 ? h : uo, N = () => S(new qx(yx[f(2216)], f(2028), { timeout: C }));
      this[f(686)](b, C, a == null ? void 0 : a[f(2090)], N, (m = a == null ? void 0 : a[f(1530)]) !== null && m !== void 0 ? m : !1), this[f(2387)][f(1238)](w, { relatedRequestId: x, resumptionToken: r, onresumptiontoken: n }).catch((k) => {
        var E = f;
        this[E(565)](b), c(k);
      });
    });
  }
  async [s(2218)](e, t) {
    var a = s, x, r;
    if (!this._transport) throw new Error(a(1577));
    if (this[a(493)](e[a(1378)]), ((r = (x = this._options) === null || x === void 0 ? void 0 : x[a(803)]) !== null && r !== void 0 ? r : [])[a(2115)](e[a(1378)]) && !e.params && !(t != null && t[a(486)])) {
      if (this._pendingDebouncedNotifications[a(2228)](e.method)) return;
      this._pendingDebouncedNotifications[a(547)](e[a(1378)]), Promise[a(2271)]()[a(2195)](() => {
        var f = a, d;
        if (this[f(1904)][f(1869)](e[f(1378)]), !this._transport) return;
        const l = { ...e, jsonrpc: f(1111) };
        (d = this[f(2387)]) === null || d === void 0 || d[f(1238)](l, t)[f(1856)]((u) => this[f(1448)](u));
      });
      return;
    }
    const c = { ...e, jsonrpc: a(1111) };
    await this[a(2387)].send(c, t);
  }
  [s(1181)](e, t) {
    var a = s;
    const x = e[a(1999)][a(1378)][a(895)];
    this[a(676)](x), this._requestHandlers[a(1425)](x, (r, n) => {
      var o = a;
      return Promise[o(2271)](t(e[o(2078)](r), n));
    });
  }
  [s(1032)](e) {
    this._requestHandlers.delete(e);
  }
  [s(2422)](e) {
    var t = s;
    if (this[t(1656)][t(2228)](e)) throw new Error(t(1146) + e + " already exists, which would be overridden");
  }
  [s(1516)](e, t) {
    var a = s;
    this._notificationHandlers[a(1425)](e[a(1999)][a(1378)][a(895)], (x) => Promise[a(2271)](t(e[a(2078)](x))));
  }
  [s(1626)](e) {
    var t = s;
    this._notificationHandlers[t(1869)](e);
  }
}
function ho(i, e) {
  return Object.entries(e).reduce((t, [a, x]) => {
    var r = B;
    return x && typeof x === r(692) ? t[a] = t[a] ? { ...t[a], ...x } : x : t[a] = x, t;
  }, { ...i });
}
function _s(i) {
  var e = s;
  return i && i[e(2036)] && Object[e(611)].hasOwnProperty[e(444)](i, "default") ? i.default : i;
}
var Yx = { exports: {} }, po = Yx.exports, Cr;
function vo() {
  var i = s;
  return Cr ? Yx[i(1547)] : (Cr = 1, function(e, t) {
    (function(a, x) {
      x(t);
    })(po, function(a) {
      var x = B;
      function r() {
        for (var P = B, p = arguments[P(1775)], g = Array(p), y = 0; y < p; y++)
          g[y] = arguments[y];
        if (g[P(1775)] > 1) {
          g[0] = g[0].slice(0, -1);
          for (var z = g[P(1775)] - 1, V = 1; V < z; ++V)
            g[V] = g[V].slice(1, -1);
          return g[z] = g[z][P(2287)](1), g[P(1030)]("");
        } else return g[0];
      }
      function n(P) {
        var p = B;
        return p(2319) + P + ")";
      }
      function o(P) {
        var p = B;
        return P === void 0 ? p(1145) : P === null ? p(619) : Object.prototype[p(1928)][p(444)](P)[p(1801)](" ")[p(2443)]()[p(1801)]("]")[p(1200)]().toLowerCase();
      }
      function c(P) {
        var p = B;
        return P[p(1485)]();
      }
      function f(P) {
        var p = B;
        return P != null ? P instanceof Array ? P : typeof P.length != "number" || P[p(1801)] || P[p(2124)] || P.call ? [P] : Array[p(611)].slice[p(444)](P) : [];
      }
      function d(P, p) {
        var g = P;
        if (p) for (var y in p)
          g[y] = p[y];
        return g;
      }
      function l(P) {
        var p = B, g = "[A-Za-z]", y = "[0-9]", z = r(y, p(1253)), V = n(n(p(1947) + z + "%" + z + z + "%" + z + z) + "|" + n(p(1931) + z + "%" + z + z) + "|" + n("%" + z + z)), s0 = p(1162), i0 = p(1914), E0 = r(s0, i0), T0 = P ? p(1209) : "[]", V0 = P ? p(538) : "[]", P0 = r(g, y, p(1875), T0);
        n(g + r(g, y, "[\\+\\-\\.]") + "*"), n(n(V + "|" + r(P0, i0, p(1483))) + "*");
        var A0 = n(n(p(1218)) + "|" + n(p(1073) + y) + "|" + n("1" + y + y) + "|" + n(p(1813) + y) + p(1866) + y), H0 = n(A0 + "\\." + A0 + "\\." + A0 + "\\." + A0), v0 = n(z + p(1478)), M0 = n(n(v0 + "\\:" + v0) + "|" + H0), Z0 = n(n(v0 + "\\:") + p(1003) + M0), $0 = n(p(2338) + n(v0 + "\\:") + p(1349) + M0), Px = n(n(v0) + p(1568) + n(v0 + "\\:") + p(732) + M0), ox = n(n(n(v0 + "\\:") + "{0,1}" + v0) + p(1568) + n(v0 + "\\:") + p(1994) + M0), cx = n(n(n(v0 + "\\:") + p(1863) + v0) + p(1568) + n(v0 + "\\:") + "{2}" + M0), $x = n(n(n(v0 + "\\:") + p(1199) + v0) + p(1568) + v0 + "\\:" + M0), Rx = n(n(n(v0 + "\\:") + "{0,4}" + v0) + p(1568) + M0), tx = n(n(n(v0 + "\\:") + "{0,5}" + v0) + p(1568) + v0), fx = n(n(n(v0 + "\\:") + p(1578) + v0) + p(1568)), mx = n([Z0, $0, Px, ox, cx, $x, Rx, tx, fx].join("|")), gx = n(n(P0 + "|" + V) + "+");
        n(p(929) + z + "+\\." + r(P0, i0, p(1483)) + "+"), n(n(V + "|" + r(P0, i0)) + "*");
        var dx = n(V + "|" + r(P0, i0, "[\\:\\@]"));
        return n(n(V + "|" + r(P0, i0, p(1328))) + "+"), n(n(dx + "|" + r(p(2526), V0)) + "*"), { NOT_SCHEME: new RegExp(r(p(886), g, y, "[\\+\\-\\.]"), "g"), NOT_USERINFO: new RegExp(r("[^\\%\\:]", P0, i0), "g"), NOT_HOST: new RegExp(r(p(1267), P0, i0), "g"), NOT_PATH: new RegExp(r("[^\\%\\/\\:\\@]", P0, i0), "g"), NOT_PATH_NOSCHEME: new RegExp(r("[^\\%\\/\\@]", P0, i0), "g"), NOT_QUERY: new RegExp(r(p(1557), P0, i0, "[\\:\\@\\/\\?]", V0), "g"), NOT_FRAGMENT: new RegExp(r("[^\\%]", P0, i0, p(1131)), "g"), ESCAPE: new RegExp(r(p(886), P0, i0), "g"), UNRESERVED: new RegExp(P0, "g"), OTHER_CHARS: new RegExp(r("[^\\%]", P0, E0), "g"), PCT_ENCODED: new RegExp(V, "g"), IPV4ADDRESS: new RegExp("^(" + H0 + ")$"), IPV6ADDRESS: new RegExp(p(2266) + mx + ")" + n(n("\\%25|\\%(?!" + z + "{2})") + "(" + gx + ")") + "?\\]?$") };
      }
      var u = l(!1), v = l(!0), h = /* @__PURE__ */ function() {
        function P(p, g) {
          var y = B, z = [], V = !0, s0 = !1, i0 = void 0;
          try {
            for (var E0 = p[Symbol[y(2485)]](), T0; !(V = (T0 = E0.next())[y(2276)]) && (z[y(2523)](T0[y(895)]), !(g && z[y(1775)] === g)); V = !0)
              ;
          } catch (V0) {
            s0 = !0, i0 = V0;
          } finally {
            try {
              !V && E0.return && E0[y(1964)]();
            } finally {
              if (s0) throw i0;
            }
          }
          return z;
        }
        return function(p, g) {
          var y = B;
          if (Array[y(2462)](p)) return p;
          if (Symbol[y(2485)] in Object(p)) return P(p, g);
          throw new TypeError(y(2471));
        };
      }(), m = function(P) {
        var p = B;
        if (Array[p(2462)](P)) {
          for (var g = 0, y = Array(P[p(1775)]); g < P.length; g++) y[g] = P[g];
          return y;
        } else return Array[p(2512)](P);
      }, b = 2147483647, w = 36, S = 1, C = 26, N = 38, k = 700, E = 72, I = 128, D = "-", A = /^xn--/, j = /[^\0-\x7E]/, R = /[\x2E\u3002\uFF0E\uFF61]/g, F = { overflow: "Overflow: input needs wider integers to process", "not-basic": x(2252), "invalid-input": "Invalid input" }, H = w - S, L = Math[x(1357)], U = String[x(2300)];
      function J(P) {
        throw new RangeError(F[P]);
      }
      function t0(P, p) {
        for (var g = x, y = [], z = P[g(1775)]; z--; )
          y[z] = p(P[z]);
        return y;
      }
      function e0(P, p) {
        var g = x, y = P[g(1801)]("@"), z = "";
        y[g(1775)] > 1 && (z = y[0] + "@", P = y[1]), P = P.replace(R, ".");
        var V = P.split("."), s0 = t0(V, p)[g(1030)](".");
        return z + s0;
      }
      function c0(P) {
        for (var p = x, g = [], y = 0, z = P[p(1775)]; y < z; ) {
          var V = P[p(1831)](y++);
          if (V >= 55296 && V <= 56319 && y < z) {
            var s0 = P[p(1831)](y++);
            (s0 & 64512) == 56320 ? g.push(((V & 1023) << 10) + (s0 & 1023) + 65536) : (g[p(2523)](V), y--);
          } else g[p(2523)](V);
        }
        return g;
      }
      var u0 = function(p) {
        var g = x;
        return String[g(1290)][g(1093)](String, m(p));
      }, d0 = function(p) {
        return p - 48 < 10 ? p - 22 : p - 65 < 26 ? p - 65 : p - 97 < 26 ? p - 97 : w;
      }, g0 = function(p, g) {
        return p + 22 + 75 * (p < 26) - ((g != 0) << 5);
      }, y0 = function(p, g, y) {
        var z = 0;
        for (p = y ? L(p / k) : p >> 1, p += L(p / g); p > H * C >> 1; z += w)
          p = L(p / H);
        return L(z + (H + 1) * p / (p + N));
      }, D0 = function(p) {
        var g = x, y = [], z = p[g(1775)], V = 0, s0 = I, i0 = E, E0 = p[g(2415)](D);
        E0 < 0 && (E0 = 0);
        for (var T0 = 0; T0 < E0; ++T0)
          p[g(1831)](T0) >= 128 && J("not-basic"), y[g(2523)](p[g(1831)](T0));
        for (var V0 = E0 > 0 ? E0 + 1 : 0; V0 < z; ) {
          for (var P0 = V, A0 = 1, H0 = w; ; H0 += w) {
            V0 >= z && J("invalid-input");
            var v0 = d0(p[g(1831)](V0++));
            (v0 >= w || v0 > L((b - V) / A0)) && J(g(2062)), V += v0 * A0;
            var M0 = H0 <= i0 ? S : H0 >= i0 + C ? C : H0 - i0;
            if (v0 < M0) break;
            var Z0 = w - M0;
            A0 > L(b / Z0) && J(g(2062)), A0 *= Z0;
          }
          var $0 = y.length + 1;
          i0 = y0(V - P0, $0, P0 == 0), L(V / $0) > b - s0 && J("overflow"), s0 += L(V / $0), V %= $0, y[g(2516)](V++, 0, s0);
        }
        return String.fromCodePoint[g(1093)](String, y);
      }, S0 = function(p) {
        var g = x, y = [];
        p = c0(p);
        var z = p.length, V = I, s0 = 0, i0 = E, E0 = !0, T0 = !1, V0 = void 0;
        try {
          for (var P0 = p[Symbol[g(2485)]](), A0; !(E0 = (A0 = P0[g(2359)]()).done); E0 = !0) {
            var H0 = A0.value;
            H0 < 128 && y.push(U(H0));
          }
        } catch (Jx) {
          T0 = !0, V0 = Jx;
        } finally {
          try {
            !E0 && P0[g(1964)] && P0.return();
          } finally {
            if (T0) throw V0;
          }
        }
        var v0 = y.length, M0 = v0;
        for (v0 && y.push(D); M0 < z; ) {
          var Z0 = b, $0 = !0, Px = !1, ox = void 0;
          try {
            for (var cx = p[Symbol.iterator](), $x; !($0 = ($x = cx[g(2359)]()).done); $0 = !0) {
              var Rx = $x.value;
              Rx >= V && Rx < Z0 && (Z0 = Rx);
            }
          } catch (Jx) {
            Px = !0, ox = Jx;
          } finally {
            try {
              !$0 && cx[g(1964)] && cx[g(1964)]();
            } finally {
              if (Px) throw ox;
            }
          }
          var tx = M0 + 1;
          Z0 - V > L((b - s0) / tx) && J(g(2062)), s0 += (Z0 - V) * tx, V = Z0;
          var fx = !0, mx = !1, gx = void 0;
          try {
            for (var dx = p[Symbol[g(2485)]](), ur; !(fx = (ur = dx[g(2359)]())[g(2276)]); fx = !0) {
              var lr = ur[g(895)];
              if (lr < V && ++s0 > b && J(g(2062)), lr == V) {
                for (var oe = s0, ce = w; ; ce += w) {
                  var fe = ce <= i0 ? S : ce >= i0 + C ? C : ce - i0;
                  if (oe < fe) break;
                  var hr = oe - fe, pr = w - fe;
                  y.push(U(g0(fe + hr % pr, 0))), oe = L(hr / pr);
                }
                y[g(2523)](U(g0(oe, 0))), i0 = y0(s0, tx, M0 == v0), s0 = 0, ++M0;
              }
            }
          } catch (Jx) {
            mx = !0, gx = Jx;
          } finally {
            try {
              !fx && dx[g(1964)] && dx[g(1964)]();
            } finally {
              if (mx) throw gx;
            }
          }
          ++s0, ++V;
        }
        return y[g(1030)]("");
      }, J0 = function(p) {
        return e0(p, function(g) {
          var y = B;
          return A[y(2263)](g) ? D0(g.slice(4)[y(627)]()) : g;
        });
      }, T = function(p) {
        return e0(p, function(g) {
          var y = B;
          return j[y(2263)](g) ? "xn--" + S0(g) : g;
        });
      }, O = { version: x(2013), ucs2: { decode: c0, encode: u0 }, decode: D0, encode: S0, toASCII: T, toUnicode: J0 }, $ = {};
      function Q(P) {
        var p = x, g = P[p(1831)](0), y = void 0;
        return g < 16 ? y = "%0" + g[p(1928)](16)[p(1485)]() : g < 128 ? y = "%" + g[p(1928)](16)[p(1485)]() : g < 2048 ? y = "%" + (g >> 6 | 192)[p(1928)](16)[p(1485)]() + "%" + (g & 63 | 128)[p(1928)](16)[p(1485)]() : y = "%" + (g >> 12 | 224)[p(1928)](16)[p(1485)]() + "%" + (g >> 6 & 63 | 128)[p(1928)](16)[p(1485)]() + "%" + (g & 63 | 128)[p(1928)](16)[p(1485)](), y;
      }
      function G(P) {
        for (var p = x, g = "", y = 0, z = P[p(1775)]; y < z; ) {
          var V = parseInt(P[p(1246)](y + 1, 2), 16);
          if (V < 128) g += String[p(2300)](V), y += 3;
          else if (V >= 194 && V < 224) {
            if (z - y >= 6) {
              var s0 = parseInt(P[p(1246)](y + 4, 2), 16);
              g += String.fromCharCode((V & 31) << 6 | s0 & 63);
            } else g += P[p(1246)](y, 6);
            y += 6;
          } else if (V >= 224) {
            if (z - y >= 9) {
              var i0 = parseInt(P[p(1246)](y + 4, 2), 16), E0 = parseInt(P[p(1246)](y + 7, 2), 16);
              g += String[p(2300)]((V & 15) << 12 | (i0 & 63) << 6 | E0 & 63);
            } else g += P[p(1246)](y, 9);
            y += 9;
          } else g += P[p(1246)](y, 3), y += 3;
        }
        return g;
      }
      function Z(P, p) {
        var g = x;
        function y(z) {
          var V = B, s0 = G(z);
          return s0.match(p[V(1653)]) ? s0 : z;
        }
        return P[g(681)] && (P.scheme = String(P.scheme).replace(p.PCT_ENCODED, y)[g(627)]()[g(2304)](p.NOT_SCHEME, "")), P[g(2241)] !== void 0 && (P[g(2241)] = String(P[g(2241)])[g(2304)](p.PCT_ENCODED, y)[g(2304)](p[g(1519)], Q)[g(2304)](p[g(2534)], c)), P.host !== void 0 && (P.host = String(P.host)[g(2304)](p.PCT_ENCODED, y)[g(627)]()[g(2304)](p[g(1153)], Q)[g(2304)](p[g(2534)], c)), P[g(1948)] !== void 0 && (P[g(1948)] = String(P.path)[g(2304)](p.PCT_ENCODED, y)[g(2304)](P[g(681)] ? p[g(1604)] : p.NOT_PATH_NOSCHEME, Q)[g(2304)](p[g(2534)], c)), P[g(1072)] !== void 0 && (P[g(1072)] = String(P[g(1072)])[g(2304)](p[g(2534)], y).replace(p[g(842)], Q)[g(2304)](p.PCT_ENCODED, c)), P[g(1766)] !== void 0 && (P[g(1766)] = String(P.fragment)[g(2304)](p.PCT_ENCODED, y).replace(p.NOT_FRAGMENT, Q).replace(p[g(2534)], c)), P;
      }
      function Y(P) {
        var p = x;
        return P[p(2304)](/^0*(.*)/, "$1") || "0";
      }
      function a0(P, p) {
        var g = x, y = P.match(p.IPV4ADDRESS) || [], z = h(y, 2), V = z[1];
        return V ? V.split(".")[g(866)](Y).join(".") : P;
      }
      function n0(P, p) {
        var g = x, y = P[g(1424)](p.IPV6ADDRESS) || [], z = h(y, 3), V = z[1], s0 = z[2];
        if (V) {
          for (var i0 = V.toLowerCase()[g(1801)]("::")[g(1443)](), E0 = h(i0, 2), T0 = E0[0], V0 = E0[1], P0 = V0 ? V0[g(1801)](":")[g(866)](Y) : [], A0 = T0[g(1801)](":")[g(866)](Y), H0 = p.IPV4ADDRESS[g(2263)](A0[A0.length - 1]), v0 = H0 ? 7 : 8, M0 = A0[g(1775)] - v0, Z0 = Array(v0), $0 = 0; $0 < v0; ++$0)
            Z0[$0] = P0[$0] || A0[M0 + $0] || "";
          H0 && (Z0[v0 - 1] = a0(Z0[v0 - 1], p));
          var Px = Z0.reduce(function(tx, fx, mx) {
            var gx = g;
            if (!fx || fx === "0") {
              var dx = tx[tx.length - 1];
              dx && dx[gx(1951)] + dx[gx(1775)] === mx ? dx[gx(1775)]++ : tx[gx(2523)]({ index: mx, length: 1 });
            }
            return tx;
          }, []), ox = Px.sort(function(tx, fx) {
            var mx = g;
            return fx[mx(1775)] - tx.length;
          })[0], cx = void 0;
          if (ox && ox[g(1775)] > 1) {
            var $x = Z0[g(2287)](0, ox.index), Rx = Z0.slice(ox[g(1951)] + ox.length);
            cx = $x[g(1030)](":") + "::" + Rx[g(1030)](":");
          } else cx = Z0[g(1030)](":");
          return s0 && (cx += "%" + s0), cx;
        } else return P;
      }
      var _ = /^(?:([^:\/?#]+):)?(?:\/\/((?:([^\/?#@]*)@)?(\[[^\/?#\]]+\]|[^\/?#:]*)(?:\:(\d*))?))?([^?#]*)(?:\?([^#]*))?(?:#((?:.|\n|\r)*))?/i, j0 = ""[x(1424)](/(){0}/)[1] === void 0;
      function F0(P) {
        var p = x, g = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : {}, y = {}, z = g[p(748)] !== !1 ? v : u;
        g[p(968)] === p(695) && (P = (g.scheme ? g[p(681)] + ":" : "") + "//" + P);
        var V = P.match(_);
        if (V) {
          j0 ? (y[p(681)] = V[1], y[p(2241)] = V[3], y[p(2317)] = V[4], y[p(2321)] = parseInt(V[5], 10), y.path = V[6] || "", y[p(1072)] = V[7], y[p(1766)] = V[8], isNaN(y[p(2321)]) && (y[p(2321)] = V[5])) : (y.scheme = V[1] || void 0, y.userinfo = P[p(1562)]("@") !== -1 ? V[3] : void 0, y[p(2317)] = P[p(1562)]("//") !== -1 ? V[4] : void 0, y[p(2321)] = parseInt(V[5], 10), y[p(1948)] = V[6] || "", y[p(1072)] = P[p(1562)]("?") !== -1 ? V[7] : void 0, y[p(1766)] = P[p(1562)]("#") !== -1 ? V[8] : void 0, isNaN(y[p(2321)]) && (y[p(2321)] = P[p(1424)](/\/\/(?:.|\n)*\:(?:\/|\?|\#|$)/) ? V[4] : void 0)), y[p(2317)] && (y[p(2317)] = n0(a0(y[p(2317)], z), z)), y[p(681)] === void 0 && y.userinfo === void 0 && y.host === void 0 && y[p(2321)] === void 0 && !y[p(1948)] && y.query === void 0 ? y.reference = p(651) : y.scheme === void 0 ? y[p(968)] = p(873) : y[p(1766)] === void 0 ? y[p(968)] = p(591) : y[p(968)] = p(2438), g[p(968)] && g[p(968)] !== p(695) && g[p(968)] !== y[p(968)] && (y[p(1882)] = y.error || "URI is not a " + g[p(968)] + " reference.");
          var s0 = $[(g[p(681)] || y[p(681)] || "")[p(627)]()];
          if (!g[p(2385)] && (!s0 || !s0[p(2385)])) {
            if (y[p(2317)] && (g.domainHost || s0 && s0[p(2389)])) try {
              y.host = O.toASCII(y[p(2317)][p(2304)](z.PCT_ENCODED, G).toLowerCase());
            } catch (i0) {
              y.error = y[p(1882)] || p(2006) + i0;
            }
            Z(y, u);
          } else Z(y, z);
          s0 && s0.parse && s0[p(2078)](y, g);
        } else y[p(1882)] = y[p(1882)] || p(1176);
        return y;
      }
      function L0(P, p) {
        var g = x, y = p[g(748)] !== !1 ? v : u, z = [];
        return P[g(2241)] !== void 0 && (z[g(2523)](P.userinfo), z.push("@")), P[g(2317)] !== void 0 && z.push(n0(a0(String(P[g(2317)]), y), y)[g(2304)](y[g(471)], function(V, s0, i0) {
          var E0 = g;
          return "[" + s0 + (i0 ? E0(642) + i0 : "") + "]";
        })), (typeof P[g(2321)] === g(1225) || typeof P[g(2321)] === g(998)) && (z.push(":"), z[g(2523)](String(P[g(2321)]))), z[g(1775)] ? z[g(1030)]("") : void 0;
      }
      var b0 = /^\.\.?\//, W0 = /^\/\.(\/|$)/, nx = /^\/\.\.(\/|$)/, Q0 = /^\/?(?:.|\n)*?(?=\/|$)/;
      function O0(P) {
        for (var p = x, g = []; P[p(1775)]; )
          if (P[p(1424)](b0)) P = P[p(2304)](b0, "");
          else if (P[p(1424)](W0)) P = P[p(2304)](W0, "/");
          else if (P[p(1424)](nx)) P = P[p(2304)](nx, "/"), g[p(2443)]();
          else if (P === "." || P === "..") P = "";
          else {
            var y = P[p(1424)](Q0);
            if (y) {
              var z = y[0];
              P = P[p(2287)](z[p(1775)]), g[p(2523)](z);
            } else throw new Error("Unexpected dot segment condition");
          }
        return g.join("");
      }
      function z0(P) {
        var p = x, g = arguments[p(1775)] > 1 && arguments[1] !== void 0 ? arguments[1] : {}, y = g[p(748)] ? v : u, z = [], V = $[(g[p(681)] || P[p(681)] || "")[p(627)]()];
        if (V && V[p(859)] && V.serialize(P, g), P[p(2317)] && !y[p(471)][p(2263)](P.host)) {
          if (g[p(2389)] || V && V[p(2389)]) try {
            P[p(2317)] = g.iri ? O.toUnicode(P.host) : O[p(1622)](P[p(2317)][p(2304)](y[p(2534)], G)[p(627)]());
          } catch (E0) {
            P[p(1882)] = P.error || "Host's domain name can not be converted to " + (g[p(748)] ? p(1913) : p(1108)) + p(2393) + E0;
          }
        }
        Z(P, y), g[p(968)] !== p(695) && P[p(681)] && (z.push(P.scheme), z[p(2523)](":"));
        var s0 = L0(P, g);
        if (s0 !== void 0 && (g.reference !== p(695) && z[p(2523)]("//"), z[p(2523)](s0), P[p(1948)] && P[p(1948)].charAt(0) !== "/" && z[p(2523)]("/")), P[p(1948)] !== void 0) {
          var i0 = P[p(1948)];
          !g.absolutePath && (!V || !V[p(969)]) && (i0 = O0(i0)), s0 === void 0 && (i0 = i0[p(2304)](/^\/\//, "/%2F")), z[p(2523)](i0);
        }
        return P[p(1072)] !== void 0 && (z[p(2523)]("?"), z[p(2523)](P[p(1072)])), P[p(1766)] !== void 0 && (z[p(2523)]("#"), z[p(2523)](P[p(1766)])), z[p(1030)]("");
      }
      function X0(P, p) {
        var g = x, y = arguments[g(1775)] > 2 && arguments[2] !== void 0 ? arguments[2] : {}, z = arguments[3], V = {};
        return !z && (P = F0(z0(P, y), y), p = F0(z0(p, y), y)), y = y || {}, !y[g(645)] && p[g(681)] ? (V.scheme = p[g(681)], V.userinfo = p[g(2241)], V[g(2317)] = p[g(2317)], V[g(2321)] = p.port, V.path = O0(p[g(1948)] || ""), V.query = p[g(1072)]) : (p[g(2241)] !== void 0 || p[g(2317)] !== void 0 || p[g(2321)] !== void 0 ? (V[g(2241)] = p[g(2241)], V[g(2317)] = p[g(2317)], V[g(2321)] = p[g(2321)], V[g(1948)] = O0(p.path || ""), V.query = p[g(1072)]) : (p[g(1948)] ? (p[g(1948)][g(1346)](0) === "/" ? V[g(1948)] = O0(p[g(1948)]) : ((P[g(2241)] !== void 0 || P[g(2317)] !== void 0 || P[g(2321)] !== void 0) && !P[g(1948)] ? V.path = "/" + p[g(1948)] : P.path ? V[g(1948)] = P[g(1948)][g(2287)](0, P[g(1948)][g(2415)]("/") + 1) + p[g(1948)] : V[g(1948)] = p[g(1948)], V[g(1948)] = O0(V[g(1948)])), V.query = p[g(1072)]) : (V[g(1948)] = P[g(1948)], p[g(1072)] !== void 0 ? V[g(1072)] = p[g(1072)] : V[g(1072)] = P.query), V.userinfo = P.userinfo, V[g(2317)] = P[g(2317)], V[g(2321)] = P.port), V[g(681)] = P[g(681)]), V[g(1766)] = p[g(1766)], V;
      }
      function Bx(P, p, g) {
        var y = x, z = d({ scheme: y(619) }, g);
        return z0(X0(F0(P, z), F0(p, z), z, !0), z);
      }
      function je(P, p) {
        var g = x;
        return typeof P === g(998) ? P = z0(F0(P, p), p) : o(P) === g(692) && (P = F0(z0(P, p), p)), P;
      }
      function un(P, p, g) {
        var y = x;
        return typeof P === y(998) ? P = z0(F0(P, g), g) : o(P) === "object" && (P = z0(P, g)), typeof p === y(998) ? p = z0(F0(p, g), g) : o(p) === y(692) && (p = z0(p, g)), P === p;
      }
      function ln(P, p) {
        var g = x;
        return P && P[g(1928)]()[g(2304)](!p || !p.iri ? u[g(896)] : v.ESCAPE, Q);
      }
      function vx(P, p) {
        var g = x;
        return P && P[g(1928)]()[g(2304)](!p || !p.iri ? u[g(2534)] : v[g(2534)], G);
      }
      var Kx = { scheme: x(1791), domainHost: !0, parse: function(p, g) {
        var y = x;
        return !p.host && (p[y(1882)] = p[y(1882)] || y(485)), p;
      }, serialize: function(p, g) {
        var y = x, z = String(p[y(681)])[y(627)]() === "https";
        return (p.port === (z ? 443 : 80) || p[y(2321)] === "") && (p[y(2321)] = void 0), !p[y(1948)] && (p[y(1948)] = "/"), p;
      } }, ar = { scheme: "https", domainHost: Kx[x(2389)], parse: Kx[x(2078)], serialize: Kx[x(859)] };
      function sr(P) {
        var p = x;
        return typeof P.secure == "boolean" ? P[p(798)] : String(P.scheme).toLowerCase() === p(2011);
      }
      var Wx = { scheme: "ws", domainHost: !0, parse: function(p, g) {
        var y = x, z = p;
        return z.secure = sr(z), z[y(533)] = (z[y(1948)] || "/") + (z.query ? "?" + z[y(1072)] : ""), z.path = void 0, z[y(1072)] = void 0, z;
      }, serialize: function(p, g) {
        var y = x;
        if ((p.port === (sr(p) ? 443 : 80) || p.port === "") && (p[y(2321)] = void 0), typeof p[y(798)] === y(2529) && (p[y(681)] = p.secure ? y(2011) : "ws", p[y(798)] = void 0), p[y(533)]) {
          var z = p.resourceName.split("?"), V = h(z, 2), s0 = V[0], i0 = V[1];
          p[y(1948)] = s0 && s0 !== "/" ? s0 : void 0, p[y(1072)] = i0, p.resourceName = void 0;
        }
        return p[y(1766)] = void 0, p;
      } }, nr = { scheme: x(2011), domainHost: Wx[x(2389)], parse: Wx[x(2078)], serialize: Wx[x(859)] }, hn = {}, ir = x(1631) + x(724) + "]", ix = x(2350), pn = n(n(x(1947) + ix + "%" + ix + ix + "%" + ix + ix) + "|" + n(x(1931) + ix + "%" + ix + ix) + "|" + n("%" + ix + ix)), vn = "[A-Za-z0-9\\!\\$\\%\\'\\*\\+\\-\\^\\_\\`\\{\\|\\}\\~]", mn = x(704), gn = r(mn, x(2105)), bn = "[\\!\\$\\'\\(\\)\\*\\+\\,\\;\\:\\@]", yn = new RegExp(ir, "g"), Mx = new RegExp(pn, "g"), wn = new RegExp(r("[^]", vn, "[\\.]", x(2467), gn), "g"), or = new RegExp(r(x(886), ir, bn), "g"), Sn = or;
      function Me(P) {
        var p = x, g = G(P);
        return g[p(1424)](yn) ? g : P;
      }
      var cr = { scheme: "mailto", parse: function(p, g) {
        var y = x, z = p, V = z.to = z[y(1948)] ? z.path.split(",") : [];
        if (z[y(1948)] = void 0, z[y(1072)]) {
          for (var s0 = !1, i0 = {}, E0 = z[y(1072)][y(1801)]("&"), T0 = 0, V0 = E0[y(1775)]; T0 < V0; ++T0) {
            var P0 = E0[T0][y(1801)]("=");
            switch (P0[0]) {
              case "to":
                for (var A0 = P0[1].split(","), H0 = 0, v0 = A0[y(1775)]; H0 < v0; ++H0)
                  V[y(2523)](A0[H0]);
                break;
              case "subject":
                z.subject = vx(P0[1], g);
                break;
              case "body":
                z[y(1678)] = vx(P0[1], g);
                break;
              default:
                s0 = !0, i0[vx(P0[0], g)] = vx(P0[1], g);
                break;
            }
          }
          s0 && (z[y(978)] = i0);
        }
        z[y(1072)] = void 0;
        for (var M0 = 0, Z0 = V[y(1775)]; M0 < Z0; ++M0) {
          var $0 = V[M0][y(1801)]("@");
          if ($0[0] = vx($0[0]), g[y(2385)]) $0[1] = vx($0[1], g).toLowerCase();
          else try {
            $0[1] = O[y(1622)](vx($0[1], g)[y(627)]());
          } catch (Px) {
            z[y(1882)] = z[y(1882)] || y(2370) + Px;
          }
          V[M0] = $0[y(1030)]("@");
        }
        return z;
      }, serialize: function(p, g) {
        var y = x, z = p, V = f(p.to);
        if (V) {
          for (var s0 = 0, i0 = V[y(1775)]; s0 < i0; ++s0) {
            var E0 = String(V[s0]), T0 = E0[y(2415)]("@"), V0 = E0[y(2287)](0, T0)[y(2304)](Mx, Me)[y(2304)](Mx, c)[y(2304)](wn, Q), P0 = E0[y(2287)](T0 + 1);
            try {
              P0 = g.iri ? O.toUnicode(P0) : O[y(1622)](vx(P0, g)[y(627)]());
            } catch (M0) {
              z[y(1882)] = z[y(1882)] || y(1827) + (g[y(748)] ? y(1913) : y(1108)) + y(2393) + M0;
            }
            V[s0] = V0 + "@" + P0;
          }
          z[y(1948)] = V[y(1030)](",");
        }
        var A0 = p.headers = p[y(978)] || {};
        p[y(655)] && (A0.subject = p[y(655)]), p[y(1678)] && (A0[y(1678)] = p[y(1678)]);
        var H0 = [];
        for (var v0 in A0)
          A0[v0] !== hn[v0] && H0[y(2523)](v0[y(2304)](Mx, Me)[y(2304)](Mx, c)[y(2304)](or, Q) + "=" + A0[v0][y(2304)](Mx, Me).replace(Mx, c)[y(2304)](Sn, Q));
        return H0[y(1775)] && (z[y(1072)] = H0[y(1030)]("&")), z;
      } }, En = /^([^\:]+)\:(.*)/, fr = { scheme: x(1560), parse: function(p, g) {
        var y = x, z = p.path && p.path[y(1424)](En), V = p;
        if (z) {
          var s0 = g.scheme || V.scheme || y(1560), i0 = z[1][y(627)](), E0 = z[2], T0 = s0 + ":" + (g[y(1401)] || i0), V0 = $[T0];
          V[y(1401)] = i0, V[y(1090)] = E0, V[y(1948)] = void 0, V0 && (V = V0[y(2078)](V, g));
        } else V.error = V[y(1882)] || y(573);
        return V;
      }, serialize: function(p, g) {
        var y = x, z = g[y(681)] || p.scheme || y(1560), V = p.nid, s0 = z + ":" + (g.nid || V), i0 = $[s0];
        i0 && (p = i0.serialize(p, g));
        var E0 = p, T0 = p[y(1090)];
        return E0.path = (V || g[y(1401)]) + ":" + T0, E0;
      } }, Pn = /^[0-9A-Fa-f]{8}(?:\-[0-9A-Fa-f]{4}){3}\-[0-9A-Fa-f]{12}$/, dr = { scheme: x(1293), parse: function(p, g) {
        var y = x, z = p;
        return z[y(450)] = z[y(1090)], z[y(1090)] = void 0, !g.tolerant && (!z[y(450)] || !z[y(450)][y(1424)](Pn)) && (z[y(1882)] = z[y(1882)] || y(2404)), z;
      }, serialize: function(p, g) {
        var y = x, z = p;
        return z[y(1090)] = (p[y(450)] || "")[y(627)](), z;
      } };
      $[Kx[x(681)]] = Kx, $[ar.scheme] = ar, $[Wx[x(681)]] = Wx, $[nr[x(681)]] = nr, $[cr[x(681)]] = cr, $[fr[x(681)]] = fr, $[dr.scheme] = dr, a[x(2076)] = $, a[x(1900)] = Q, a.pctDecChars = G, a[x(2078)] = F0, a.removeDotSegments = O0, a[x(859)] = z0, a[x(975)] = X0, a.resolve = Bx, a[x(2169)] = je, a[x(1486)] = un, a[x(1053)] = ln, a[x(1467)] = vx, Object[x(1147)](a, x(2036), { value: !0 });
    });
  }(Yx, Yx[i(1547)]), Yx.exports);
}
var Le, Rr;
function xr() {
  return Rr || (Rr = 1, Le = function i(e, t) {
    var a = B;
    if (e === t) return !0;
    if (e && t && typeof e == a(692) && typeof t == a(692)) {
      if (e[a(719)] !== t.constructor) return !1;
      var x, r, n;
      if (Array.isArray(e)) {
        if (x = e[a(1775)], x != t.length) return !1;
        for (r = x; r-- !== 0; ) if (!i(e[r], t[r])) return !1;
        return !0;
      }
      if (e[a(719)] === RegExp) return e[a(1469)] === t[a(1469)] && e[a(1558)] === t[a(1558)];
      if (e.valueOf !== Object[a(611)][a(1703)]) return e[a(1703)]() === t[a(1703)]();
      if (e.toString !== Object[a(611)][a(1928)]) return e[a(1928)]() === t[a(1928)]();
      if (n = Object[a(870)](e), x = n[a(1775)], x !== Object[a(870)](t)[a(1775)]) return !1;
      for (r = x; r-- !== 0; ) if (!Object.prototype[a(1038)][a(444)](t, n[r])) return !1;
      for (r = x; r-- !== 0; ) {
        var o = n[r];
        if (!i(e[o], t[o])) return !1;
      }
      return !0;
    }
    return e !== e && t !== t;
  }), Le;
}
var ze, Fr;
function mo() {
  return Fr || (Fr = 1, ze = function(e) {
    for (var t = B, a = 0, x = e[t(1775)], r = 0, n; r < x; )
      a++, n = e[t(1831)](r++), n >= 55296 && n <= 56319 && r < x && (n = e[t(1831)](r), (n & 64512) == 56320 && r++);
    return a;
  }), ze;
}
var Ve, Nr;
function Zx() {
  var i = s;
  if (Nr) return Ve;
  Nr = 1, Ve = { copy: e, checkDataType: t, checkDataTypes: a, coerceToTypes: r, toHash: n, getProperty: f, escapeQuotes: d, equal: xr(), ucs2length: mo(), varOccurences: l, varReplace: u, schemaHasRules: v, schemaHasRulesExcept: h, schemaUnknownRules: m, toQuotedString: b, getPathExpr: w, getPath: S, getData: k, unescapeFragment: I, unescapeJsonPointer: j, escapeFragment: D, escapeJsonPointer: A };
  function e(R, F) {
    F = F || {};
    for (var H in R) F[H] = R[H];
    return F;
  }
  function t(R, F, H, L) {
    var U = B, J = L ? " !== " : U(1497), t0 = U(L ? 2281 : 2095), e0 = L ? "!" : "", c0 = L ? "" : "!";
    switch (R) {
      case U(619):
        return F + J + U(619);
      case "array":
        return e0 + "Array.isArray(" + F + ")";
      case U(692):
        return "(" + e0 + F + t0 + U(1191) + F + J + U(1406) + t0 + c0 + U(1382) + F + "))";
      case U(1845):
        return U(2480) + F + J + U(1646) + t0 + c0 + "(" + F + U(1535) + t0 + F + J + F + (H ? t0 + e0 + U(2190) + F + ")" : "") + ")";
      case U(1225):
        return U(2480) + F + J + '"' + R + '"' + (H ? t0 + e0 + U(2190) + F + ")" : "") + ")";
      default:
        return U(1191) + F + J + '"' + R + '"';
    }
  }
  function a(R, F, H) {
    var L = B;
    switch (R[L(1775)]) {
      case 1:
        return t(R[0], F, H, !0);
      default:
        var U = "", J = n(R);
        J[L(462)] && J[L(692)] && (U = J[L(619)] ? "(" : "(!" + F + L(2281), U += "typeof " + F + L(1144), delete J[L(619)], delete J[L(462)], delete J[L(692)]), J.number && delete J[L(1845)];
        for (var t0 in J) U += (U ? L(2095) : "") + t(t0, F, H, !0);
        return U;
    }
  }
  var x = n([i(998), i(1225), i(1845), i(2529), "null"]);
  function r(R, F) {
    var H = i;
    if (Array.isArray(F)) {
      for (var L = [], U = 0; U < F[H(1775)]; U++) {
        var J = F[U];
        (x[J] || R === H(462) && J === H(462)) && (L[L[H(1775)]] = J);
      }
      if (L.length) return L;
    } else {
      if (x[F]) return [F];
      if (R === H(462) && F === H(462)) return ["array"];
    }
  }
  function n(R) {
    for (var F = i, H = {}, L = 0; L < R[F(1775)]; L++) H[R[L]] = !0;
    return H;
  }
  var o = /^[a-z$_][a-z$_0-9]*$/i, c = /'|\\/g;
  function f(R) {
    var F = i;
    return typeof R == "number" ? "[" + R + "]" : o[F(2263)](R) ? "." + R : "['" + d(R) + "']";
  }
  function d(R) {
    var F = i;
    return R[F(2304)](c, F(1102))[F(2304)](/\n/g, "\\n").replace(/\r/g, "\\r")[F(2304)](/\f/g, "\\f")[F(2304)](/\t/g, "\\t");
  }
  function l(R, F) {
    var H = i;
    F += H(1372);
    var L = R[H(1424)](new RegExp(F, "g"));
    return L ? L[H(1775)] : 0;
  }
  function u(R, F, H) {
    var L = i;
    return F += L(1645), H = H[L(2304)](/\$/g, L(1687)), R[L(2304)](new RegExp(F, "g"), H + "$1");
  }
  function v(R, F) {
    if (typeof R == "boolean") return !R;
    for (var H in R) if (F[H]) return !0;
  }
  function h(R, F, H) {
    var L = i;
    if (typeof R == "boolean") return !R && H != L(1929);
    for (var U in R) if (U != H && F[U]) return !0;
  }
  function m(R, F) {
    if (typeof R != "boolean") {
      for (var H in R) if (!F[H]) return H;
    }
  }
  function b(R) {
    return "'" + d(R) + "'";
  }
  function w(R, F, H, L) {
    var U = i, J = H ? U(1894) + F + (L ? "" : ".replace(/~/g, '~0').replace(/\\//g, '~1')") : L ? U(705) + F + U(1173) : U(2244) + F + U(2242);
    return E(R, J);
  }
  function S(R, F, H) {
    var L = b(H ? "/" + A(F) : f(F));
    return E(R, L);
  }
  var C = /^\/(?:[^~]|~0|~1)*$/, N = /^([0-9]+)(#|\/(?:[^~]|~0|~1)*)?$/;
  function k(R, F, H) {
    var L = i, U, J, t0, e0;
    if (R === "") return "rootData";
    if (R[0] == "/") {
      if (!C[L(2263)](R)) throw new Error(L(1819) + R);
      J = R, t0 = L(1543);
    } else {
      if (e0 = R[L(1424)](N), !e0) throw new Error(L(1819) + R);
      if (U = +e0[1], J = e0[2], J == "#") {
        if (U >= F) throw new Error(L(946) + U + L(963) + F);
        return H[F - U];
      }
      if (U > F) throw new Error(L(1283) + U + L(963) + F);
      if (t0 = "data" + (F - U || ""), !J) return t0;
    }
    for (var c0 = t0, u0 = J[L(1801)]("/"), d0 = 0; d0 < u0[L(1775)]; d0++) {
      var g0 = u0[d0];
      g0 && (t0 += f(j(g0)), c0 += L(2095) + t0);
    }
    return c0;
  }
  function E(R, F) {
    var H = i;
    return R == '""' ? F : (R + H(1800) + F)[H(2304)](/([^\\])' \+ '/g, "$1");
  }
  function I(R) {
    return j(decodeURIComponent(R));
  }
  function D(R) {
    return encodeURIComponent(A(R));
  }
  function A(R) {
    var F = i;
    return R[F(2304)](/~/g, "~0")[F(2304)](/\//g, "~1");
  }
  function j(R) {
    var F = i;
    return R.replace(/~1/g, "/")[F(2304)](/~0/g, "~");
  }
  return Ve;
}
var He, Or;
function xn() {
  if (Or) return He;
  Or = 1;
  var i = Zx();
  He = e;
  function e(t) {
    var a = B;
    i[a(1949)](t, this);
  }
  return He;
}
var Ue = { exports: {} }, qr;
function go() {
  var i = s;
  if (qr) return Ue[i(1547)];
  qr = 1;
  var e = Ue[i(1547)] = function(x, r, n) {
    var o = i;
    typeof r == o(2444) && (n = r, r = {}), n = r.cb || n;
    var c = typeof n == "function" ? n : n[o(840)] || function() {
    }, f = n[o(1449)] || function() {
    };
    t(r, c, f, x, "", x);
  };
  e.keywords = { additionalItems: !0, items: !0, contains: !0, additionalProperties: !0, propertyNames: !0, not: !0 }, e[i(1186)] = { items: !0, allOf: !0, anyOf: !0, oneOf: !0 }, e[i(2280)] = { definitions: !0, properties: !0, patternProperties: !0, dependencies: !0 }, e[i(733)] = { default: !0, enum: !0, const: !0, required: !0, maximum: !0, minimum: !0, exclusiveMaximum: !0, exclusiveMinimum: !0, multipleOf: !0, maxLength: !0, minLength: !0, pattern: !0, format: !0, maxItems: !0, minItems: !0, uniqueItems: !0, maxProperties: !0, minProperties: !0 };
  function t(x, r, n, o, c, f, d, l, u, v) {
    var h = i;
    if (o && typeof o == h(692) && !Array.isArray(o)) {
      r(o, c, f, d, l, u, v);
      for (var m in o) {
        var b = o[m];
        if (Array[h(2462)](b)) {
          if (m in e[h(1186)])
            for (var w = 0; w < b.length; w++) t(x, r, n, b[w], c + "/" + m + "/" + w, f, c, m, o, w);
        } else if (m in e[h(2280)]) {
          if (b && typeof b == "object")
            for (var S in b) t(x, r, n, b[S], c + "/" + m + "/" + a(S), f, c, m, o, S);
        } else (m in e[h(2345)] || x[h(1167)] && !(m in e.skipKeywords)) && t(x, r, n, b, c + "/" + m, f, c, m, o);
      }
      n(o, c, f, d, l, u, v);
    }
  }
  function a(x) {
    var r = i;
    return x[r(2304)](/~/g, "~0")[r(2304)](/\//g, "~1");
  }
  return Ue.exports;
}
var Ze, Ar;
function er() {
  var i = s;
  if (Ar) return Ze;
  Ar = 1;
  var e = vo(), t = xr(), a = Zx(), x = xn(), r = go();
  Ze = n, n[i(699)] = S, n[i(1284)] = m, n[i(2463)] = C, n[i(1203)] = N, n[i(2113)] = u, n[i(1331)] = o;
  function n(k, E, I) {
    var D = i, A = this[D(2343)][I];
    if (typeof A == D(998))
      if (this[D(2343)][A]) A = this[D(2343)][A];
      else return n.call(this, k, E, A);
    if (A = A || this._schemas[I], A instanceof x) return u(A[D(1331)], this[D(1317)][D(2215)]) ? A[D(1331)] : A.validate || this._compile(A);
    var j = o[D(444)](this, E, I), R, F, H;
    return j && (R = j[D(1331)], E = j[D(1342)], H = j.baseId), R instanceof x ? F = R[D(1140)] || k.call(this, R[D(1331)], E, void 0, H) : R !== void 0 && (F = u(R, this._opts.inlineRefs) ? R : k[D(444)](this, R, E, void 0, H)), F;
  }
  function o(k, E) {
    var I = i, D = e[I(2078)](E), A = b(D), j = m(this[I(1511)](k[I(1331)]));
    if (Object[I(870)](k[I(1331)])[I(1775)] === 0 || A !== j) {
      var R = S(A), F = this[I(2343)][R];
      if (typeof F == I(998)) return c[I(444)](this, k, F, D);
      if (F instanceof x)
        F[I(1140)] || this[I(654)](F), k = F;
      else if (F = this._schemas[R], F instanceof x) {
        if (F[I(1140)] || this[I(654)](F), R == S(E)) return { schema: F, root: k, baseId: j };
        k = F;
      } else return;
      if (!k[I(1331)]) return;
      j = m(this[I(1511)](k[I(1331)]));
    }
    return d.call(this, D, j, k[I(1331)], k);
  }
  function c(k, E, I) {
    var D = i, A = o[D(444)](this, k, E);
    if (A) {
      var j = A[D(1331)], R = A[D(1461)];
      k = A.root;
      var F = this[D(1511)](j);
      return F && (R = C(R, F)), d[D(444)](this, I, R, j, k);
    }
  }
  var f = a.toHash([i(960), "patternProperties", i(559), i(1492), i(2027)]);
  function d(k, E, I, D) {
    var A = i;
    if (k[A(1766)] = k[A(1766)] || "", k.fragment[A(2287)](0, 1) == "/") {
      for (var j = k[A(1766)][A(1801)]("/"), R = 1; R < j.length; R++) {
        var F = j[R];
        if (F) {
          if (F = a[A(1711)](F), I = I[F], I === void 0) break;
          var H;
          if (!f[F] && (H = this._getId(I), H && (E = C(E, H)), I[A(1056)])) {
            var L = C(E, I[A(1056)]), U = o[A(444)](this, D, L);
            U && (I = U[A(1331)], D = U[A(1342)], E = U[A(1461)]);
          }
        }
      }
      if (I !== void 0 && I !== D.schema) return { schema: I, root: D, baseId: E };
    }
  }
  var l = a[i(2460)]([i(1529), i(2209), "pattern", "maxLength", "minLength", i(2120), "minProperties", i(2472), i(746), i(1219), i(1690), i(1453), i(1718), "required", i(559)]);
  function u(k, E) {
    if (E === !1) return !1;
    if (E === void 0 || E === !0) return v(k);
    if (E) return h(k) <= E;
  }
  function v(k) {
    var E = i, I;
    if (Array[E(2462)](k)) {
      for (var D = 0; D < k[E(1775)]; D++)
        if (I = k[D], typeof I == "object" && !v(I)) return !1;
    } else for (var A in k)
      if (A == "$ref" || (I = k[A], typeof I == E(692) && !v(I))) return !1;
    return !0;
  }
  function h(k) {
    var E = i, I = 0, D;
    if (Array[E(2462)](k)) {
      for (var A = 0; A < k.length; A++)
        if (D = k[A], typeof D == E(692) && (I += h(D)), I == 1 / 0) return 1 / 0;
    } else for (var j in k) {
      if (j == "$ref") return 1 / 0;
      if (l[j]) I++;
      else if (D = k[j], typeof D == E(692) && (I += h(D) + 1), I == 1 / 0) return 1 / 0;
    }
    return I;
  }
  function m(k, E) {
    var I = i;
    E !== !1 && (k = S(k));
    var D = e[I(2078)](k);
    return b(D);
  }
  function b(k) {
    var E = i;
    return e[E(859)](k).split("#")[0] + "#";
  }
  var w = /#\/?$/;
  function S(k) {
    var E = i;
    return k ? k[E(2304)](w, "") : "";
  }
  function C(k, E) {
    var I = i;
    return E = S(E), e[I(2271)](k, E);
  }
  function N(k) {
    var E = S(this._getId(k)), I = { "": E }, D = { "": m(E, !1) }, A = {}, j = this;
    return r(k, { allKeys: !0 }, function(R, F, H, L, U, J, t0) {
      var e0 = B;
      if (F !== "") {
        var c0 = j._getId(R), u0 = I[L], d0 = D[L] + "/" + U;
        if (t0 !== void 0 && (d0 += "/" + (typeof t0 == "number" ? t0 : a[e0(2474)](t0))), typeof c0 == "string") {
          c0 = u0 = S(u0 ? e[e0(2271)](u0, c0) : c0);
          var g0 = j[e0(2343)][c0];
          if (typeof g0 == e0(998) && (g0 = j[e0(2343)][g0]), g0 && g0[e0(1331)]) {
            if (!t(R, g0[e0(1331)])) throw new Error(e0(1770) + c0 + e0(1069));
          } else if (c0 != S(d0))
            if (c0[0] == "#") {
              if (A[c0] && !t(R, A[c0])) throw new Error('id "' + c0 + e0(1069));
              A[c0] = R;
            } else j[e0(2343)][c0] = d0;
        }
        I[F] = u0, D[F] = d0;
      }
    }), A;
  }
  return Ze;
}
var Be, Tr;
function tr() {
  if (Tr) return Be;
  Tr = 1;
  var i = er();
  Be = { Validation: a(e), MissingRef: a(t) };
  function e(x) {
    var r = B;
    this[r(532)] = r(1476), this[r(1065)] = x, this[r(793)] = this[r(802)] = !0;
  }
  t.message = function(x, r) {
    var n = B;
    return n(777) + r + n(1380) + x;
  };
  function t(x, r, n) {
    var o = B;
    this[o(532)] = n || t.message(x, r), this[o(702)] = i[o(2463)](x, r), this[o(1696)] = i[o(699)](i.fullPath(this.missingRef));
  }
  function a(x) {
    var r = B;
    return x.prototype = Object.create(Error[r(611)]), x[r(611)][r(719)] = x, x;
  }
  return Be;
}
var Ke, Dr;
function en() {
  return Dr || (Dr = 1, Ke = function(i, e) {
    var t = B;
    e || (e = {}), typeof e === t(2444) && (e = { cmp: e });
    var a = typeof e.cycles === t(2529) ? e[t(1583)] : !1, x = e[t(2029)] && /* @__PURE__ */ function(n) {
      return function(o) {
        return function(c, f) {
          var d = { key: c, value: o[c] }, l = { key: f, value: o[f] };
          return n(d, l);
        };
      };
    }(e.cmp), r = [];
    return function n(o) {
      var c = t;
      if (o && o[c(2127)] && typeof o[c(2127)] === c(2444) && (o = o[c(2127)]()), o !== void 0) {
        if (typeof o == "number") return isFinite(o) ? "" + o : c(619);
        if (typeof o !== c(692)) return JSON[c(847)](o);
        var f, d;
        if (Array.isArray(o)) {
          for (d = "[", f = 0; f < o[c(1775)]; f++)
            f && (d += ","), d += n(o[f]) || c(619);
          return d + "]";
        }
        if (o === null) return c(619);
        if (r[c(1562)](o) !== -1) {
          if (a) return JSON.stringify(c(623));
          throw new TypeError(c(2325));
        }
        var l = r[c(2523)](o) - 1, u = Object[c(870)](o)[c(2380)](x && x(o));
        for (d = "", f = 0; f < u[c(1775)]; f++) {
          var v = u[f], h = n(o[v]);
          h && (d && (d += ","), d += JSON[c(847)](v) + ":" + h);
        }
        return r[c(2516)](l, 1), "{" + d + "}";
      }
    }(i);
  }), Ke;
}
var We, jr;
function tn() {
  return jr || (jr = 1, We = function(e, t, a) {
    var x = B, r = "", n = e.schema.$async === !0, o = e[x(1303)][x(1912)](e[x(1331)], e.RULES.all, "$ref"), c = e[x(880)][x(1511)](e[x(1331)]);
    if (e.opts.strictKeywords) {
      var f = e[x(1303)].schemaUnknownRules(e.schema, e[x(1790)][x(2345)]);
      if (f) {
        var d = "unknown keyword: " + f;
        if (e[x(1923)][x(703)] === "log") e[x(2339)][x(897)](d);
        else throw new Error(d);
      }
    }
    if (e[x(451)] && (r += " var validate = ", n && (e[x(545)] = !0, r += x(2243)), r += x(875), c && (e[x(1923)][x(1333)] || e[x(1923)][x(1822)]) && (r += " " + (x(2050) + c + x(1551)) + " ")), typeof e.schema == "boolean" || !(o || e[x(1331)].$ref)) {
      var t = x(1705), l = e[x(1737)], u = e[x(2014)], v = e.schema[t], h = e.schemaPath + e[x(1303)][x(601)](t), m = e.errSchemaPath + "/" + t, E = !e[x(1923)][x(1975)], A, b = x(530) + (u || ""), k = x(977) + l;
      if (e[x(1331)] === !1) {
        e.isTop ? E = !0 : r += " var " + k + " = false; ";
        var w = w || [];
        w[x(2523)](r), r = "", e[x(1044)] !== !1 ? (r += " { keyword: '" + (A || x(1705)) + "' , dataPath: (dataPath || '') + " + e[x(1e3)] + x(1717) + e[x(1303)][x(1228)](m) + x(794), e[x(1923)][x(1318)] !== !1 && (r += x(1229)), e[x(1923)][x(1264)] && (r += x(2265) + e[x(2502)] + x(602) + b + " "), r += x(1460)) : r += x(1487);
        var S = r;
        r = w.pop(), !e[x(750)] && E ? e[x(545)] ? r += x(457) + S + "]); " : r += x(2009) + S + x(1725) : r += x(1043) + S + ";  if (vErrors === null) vErrors = [err]; else vErrors.push(err); errors++; ";
      } else e[x(451)] ? n ? r += x(1700) : r += x(1014) : r += x(1221) + k + x(1442);
      return e[x(451)] && (r += x(1860)), r;
    }
    if (e[x(451)]) {
      var C = e[x(451)], l = e[x(1737)] = 0, u = e.dataLevel = 0, b = x(530);
      if (e[x(1366)] = e[x(2271)][x(1284)](e[x(880)][x(1511)](e[x(1342)][x(1331)])), e[x(1461)] = e[x(1461)] || e.rootId, delete e[x(451)], e[x(984)] = [""], e[x(1331)][x(2178)] !== void 0 && e[x(1923)][x(626)] && e[x(1923)][x(1915)]) {
        var N = "default is ignored in the schema root";
        if (e[x(1923)][x(1915)] === x(1413)) e.logger.warn(N);
        else throw new Error(N);
      }
      r += x(1028), r += x(1559), r += x(1704);
    } else {
      var l = e[x(1737)], u = e.dataLevel, b = x(530) + (u || "");
      if (c && (e.baseId = e[x(2271)][x(2463)](e.baseId, c)), n && !e[x(545)]) throw new Error(x(1302));
      r += x(1721) + l + x(2405);
    }
    var k = "valid" + l, E = !e[x(1923)][x(1975)], I = "", D = "", A, j = e[x(1331)][x(1529)], R = Array.isArray(j);
    if (j && e[x(1923)].nullable && e[x(1331)].nullable === !0 && (R ? j[x(1562)](x(619)) == -1 && (j = j[x(712)]("null")) : j != "null" && (j = [j, x(619)], R = !0)), R && j[x(1775)] == 1 && (j = j[0], R = !1), e[x(1331)][x(1056)] && o) {
      if (e[x(1923)][x(1613)] == x(1314)) throw new Error(x(795) + e[x(771)] + '" (see option extendRefs)');
      e[x(1923)].extendRefs !== !0 && (o = !1, e.logger.warn('$ref: keywords ignored in schema at path "' + e[x(771)] + '"'));
    }
    if (e[x(1331)].$comment && e[x(1923)][x(447)] && (r += " " + e[x(1790)][x(799)][x(447)].code(e, x(447))), j) {
      if (e[x(1923)][x(1468)]) var F = e[x(1303)][x(2230)](e[x(1923)][x(1468)], j);
      var H = e[x(1790)].types[j];
      if (F || R || H === !0 || H && !b0(H)) {
        var h = e.schemaPath + ".type", m = e.errSchemaPath + x(1973), h = e[x(2502)] + x(824), m = e[x(771)] + x(1973), L = x(R ? 1421 : 2374);
        if (r += x(1166) + e[x(1303)][L](j, b, e.opts[x(2019)], !0) + x(1017), F) {
          var U = x(1903) + l, J = x(1335) + l;
          r += x(1221) + U + " = typeof " + b + x(1177) + J + x(756), e[x(1923)][x(1468)] == x(462) && (r += " if (" + U + x(580) + b + x(1987) + b + x(912) + b + x(1172) + b + "[0]; " + U + x(1969) + b + x(1781) + e[x(1303)].checkDataType(e[x(1331)][x(1529)], b, e[x(1923)][x(2019)]) + ") " + J + x(1172) + b + x(1814)), r += " if (" + J + x(1858);
          var t0 = F;
          if (t0)
            for (var e0, c0 = -1, u0 = t0[x(1775)] - 1; c0 < u0; )
              e0 = t0[c0 += 1], e0 == x(998) ? r += x(463) + U + " == 'number' || " + U + x(1026) + J + " = '' + " + b + x(707) + b + x(971) + J + x(2212) : e0 == x(1225) || e0 == "integer" ? (r += x(463) + U + " == 'boolean' || " + b + x(2500) + U + " == 'string' && " + b + " && " + b + x(1911) + b + " ", e0 == x(1845) && (r += " && !(" + b + x(1535)), r += ")) " + J + x(570) + b + "; ") : e0 == x(2529) ? r += " else if (" + b + x(1636) + b + " === 0 || " + b + " === null) " + J + x(1269) + b + x(826) + b + x(1169) + J + x(1442) : e0 == x(619) ? r += x(463) + b + x(1116) + b + x(2331) + b + x(1370) + J + x(456) : e[x(1923)][x(1468)] == x(462) && e0 == x(462) && (r += x(463) + U + x(1316) + U + x(1312) + U + x(2466) + b + x(1291) + J + x(2532) + b + x(841));
          r += x(1851);
          var w = w || [];
          w[x(2523)](r), r = "", e[x(1044)] !== !1 ? (r += " { keyword: '" + (A || x(1529)) + x(2217) + e.errorPath + x(1717) + e[x(1303)].toQuotedString(m) + " , params: { type: '", R ? r += "" + j[x(1030)](",") : r += "" + j, r += "' } ", e[x(1923)][x(1318)] !== !1 && (r += x(1470), R ? r += "" + j[x(1030)](",") : r += "" + j, r += "' "), e[x(1923)].verbose && (r += " , schema: validate.schema" + h + x(995) + e[x(2502)] + " , data: " + b + " "), r += " } ") : r += x(1487);
          var S = r;
          r = w[x(2443)](), !e.compositeRule && E ? e[x(545)] ? r += x(457) + S + x(914) : r += x(2009) + S + x(1725) : r += x(1043) + S + x(562), r += x(869) + J + x(1692);
          var d0 = u ? x(530) + (u - 1 || "") : x(700), g0 = u ? e[x(984)][u] : x(1746);
          r += " " + b + x(1172) + J + "; ", !u && (r += x(1657) + d0 + x(2394)), r += " " + d0 + "[" + g0 + x(1161) + J + "; } ";
        } else {
          var w = w || [];
          w[x(2523)](r), r = "", e.createErrors !== !1 ? (r += " { keyword: '" + (A || x(1529)) + x(2217) + e[x(1e3)] + x(1717) + e[x(1303)].toQuotedString(m) + x(544), R ? r += "" + j[x(1030)](",") : r += "" + j, r += x(1231), e[x(1923)][x(1318)] !== !1 && (r += x(1470), R ? r += "" + j.join(",") : r += "" + j, r += "' "), e[x(1923)].verbose && (r += x(1234) + h + x(995) + e[x(2502)] + x(602) + b + " "), r += " } ") : r += x(1487);
          var S = r;
          r = w.pop(), !e[x(750)] && E ? e[x(545)] ? r += x(457) + S + x(914) : r += x(2009) + S + x(1725) : r += " var err = " + S + ";  if (vErrors === null) vErrors = [err]; else vErrors.push(err); errors++; ";
        }
        r += " } ";
      }
    }
    if (e[x(1331)][x(1056)] && !o) r += " " + e[x(1790)][x(799)][x(1056)][x(594)](e, x(1056)) + " ", E && (r += x(2457), C ? r += "0" : r += x(1735) + l, r += x(1017), D += "}");
    else {
      var y0 = e[x(1790)];
      if (y0) {
        for (var H, D0 = -1, S0 = y0[x(1775)] - 1; D0 < S0; )
          if (H = y0[D0 += 1], b0(H)) {
            if (H.type && (r += " if (" + e[x(1303)].checkDataType(H[x(1529)], b, e[x(1923)].strictNumbers) + x(1017)), e[x(1923)][x(626)]) {
              if (H[x(1529)] == x(692) && e.schema[x(960)]) {
                var v = e[x(1331)][x(960)], J0 = Object[x(870)](v), T = J0;
                if (T)
                  for (var O, $ = -1, Q = T.length - 1; $ < Q; ) {
                    O = T[$ += 1];
                    var G = v[O];
                    if (G.default !== void 0) {
                      var Z = b + e[x(1303)][x(601)](O);
                      if (e[x(750)]) {
                        if (e[x(1923)][x(1915)]) {
                          var N = "default is ignored for: " + Z;
                          if (e[x(1923)].strictDefaults === x(1413)) e[x(2339)][x(897)](N);
                          else throw new Error(N);
                        }
                      } else r += x(1166) + Z + x(1709), e[x(1923)][x(626)] == x(952) && (r += x(2281) + Z + " === null || " + Z + x(1662)), r += x(2043) + Z + " = ", e[x(1923)][x(626)] == x(2055) ? r += " " + e[x(710)](G[x(2178)]) + " " : r += " " + JSON.stringify(G.default) + " ", r += "; ";
                    }
                  }
              } else if (H.type == x(462) && Array.isArray(e[x(1331)][x(1205)])) {
                var Y = e.schema.items;
                if (Y) {
                  for (var G, c0 = -1, a0 = Y[x(1775)] - 1; c0 < a0; )
                    if (G = Y[c0 += 1], G.default !== void 0) {
                      var Z = b + "[" + c0 + "]";
                      if (e[x(750)]) {
                        if (e[x(1923)][x(1915)]) {
                          var N = "default is ignored for: " + Z;
                          if (e.opts[x(1915)] === x(1413)) e[x(2339)][x(897)](N);
                          else throw new Error(N);
                        }
                      } else r += " if (" + Z + x(1709), e.opts.useDefaults == x(952) && (r += x(2281) + Z + x(481) + Z + " === '' "), r += x(2043) + Z + " = ", e[x(1923)].useDefaults == "shared" ? r += " " + e[x(710)](G[x(2178)]) + " " : r += " " + JSON[x(847)](G[x(2178)]) + " ", r += "; ";
                    }
                }
              }
            }
            var n0 = H[x(889)];
            if (n0) {
              for (var _, j0 = -1, F0 = n0[x(1775)] - 1; j0 < F0; )
                if (_ = n0[j0 += 1], W0(_)) {
                  var L0 = _[x(594)](e, _.keyword, H[x(1529)]);
                  L0 && (r += " " + L0 + " ", E && (I += "}"));
                }
            }
            if (E && (r += " " + I + " ", I = ""), H.type && (r += " } ", j && j === H[x(1529)] && !F)) {
              r += x(1142);
              var h = e[x(2502)] + x(824), m = e[x(771)] + x(1973), w = w || [];
              w[x(2523)](r), r = "", e[x(1044)] !== !1 ? (r += x(2225) + (A || "type") + x(2217) + e.errorPath + x(1717) + e[x(1303)].toQuotedString(m) + x(544), R ? r += "" + j[x(1030)](",") : r += "" + j, r += "' } ", e[x(1923)][x(1318)] !== !1 && (r += x(1470), R ? r += "" + j[x(1030)](",") : r += "" + j, r += "' "), e[x(1923)][x(1264)] && (r += x(1234) + h + " , parentSchema: validate.schema" + e[x(2502)] + x(602) + b + " "), r += x(1460)) : r += " {} ";
              var S = r;
              r = w[x(2443)](), !e[x(750)] && E ? e[x(545)] ? r += " throw new ValidationError([" + S + x(914) : r += x(2009) + S + x(1725) : r += x(1043) + S + x(562), r += " } ";
            }
            E && (r += x(2388), C ? r += "0" : r += x(1735) + l, r += x(1017), D += "}");
          }
      }
    }
    E && (r += " " + D + " "), C ? (n ? (r += " if (errors === 0) return data;           ", r += x(1983)) : (r += " validate.errors = vErrors; ", r += x(1427)), r += x(1298)) : r += x(1221) + k + x(2234) + l + ";";
    function b0(Q0) {
      for (var O0 = x, z0 = Q0.rules, X0 = 0; X0 < z0[O0(1775)]; X0++) if (W0(z0[X0])) return !0;
    }
    function W0(Q0) {
      var O0 = x;
      return e[O0(1331)][Q0[O0(1701)]] !== void 0 || Q0[O0(508)] && nx(Q0);
    }
    function nx(Q0) {
      for (var O0 = x, z0 = Q0[O0(508)], X0 = 0; X0 < z0[O0(1775)]; X0++) if (e.schema[z0[X0]] !== void 0) return !0;
    }
    return r;
  }), We;
}
var Je, Mr;
function bo() {
  var i = s;
  if (Mr) return Je;
  Mr = 1;
  var e = er(), t = Zx(), a = tr(), x = en(), r = tn(), n = t[i(621)], o = xr(), c = a[i(1337)];
  Je = f;
  function f(S, C, N, k) {
    var E = i, I = this, D = this[E(1317)], A = [void 0], j = {}, R = [], F = {}, H = [], L = {}, U = [];
    C = C || { schema: S, refVal: A, refs: j };
    var J = d[E(444)](this, S, C, k), t0 = this[E(526)][J[E(1951)]];
    if (J[E(2044)]) return t0[E(2089)] = g0;
    var e0 = this[E(2495)], c0 = this.RULES;
    try {
      var u0 = y0(S, C, N, k);
      t0.validate = u0;
      var d0 = t0[E(2089)];
      return d0 && (d0[E(1331)] = u0[E(1331)], d0[E(1065)] = null, d0[E(2208)] = u0.refs, d0[E(1986)] = u0[E(1986)], d0[E(1342)] = u0[E(1342)], d0[E(1058)] = u0[E(1058)], D.sourceCode && (d0[E(1469)] = u0.source)), u0;
    } finally {
      l[E(444)](this, S, C, k);
    }
    function g0() {
      var Z = E, Y = t0.validate, a0 = Y.apply(this, arguments);
      return g0[Z(1065)] = Y[Z(1065)], a0;
    }
    function y0(Z, Y, a0, n0) {
      var _ = E, j0 = !Y || Y && Y[_(1331)] == Z;
      if (Y[_(1331)] != C[_(1331)]) return f[_(444)](I, Z, Y, a0, n0);
      var F0 = Z.$async === !0, L0 = r({ isTop: !0, schema: Z, isRoot: j0, baseId: n0, root: Y, schemaPath: "", errSchemaPath: "#", errorPath: '""', MissingRefError: a[_(558)], RULES: c0, validate: r, util: t, resolve: e, resolveRef: D0, usePattern: $, useDefault: Q, useCustomRule: G, opts: D, formats: e0, logger: I[_(2339)], self: I });
      L0 = w(A, m) + w(R, v) + w(H, h) + w(U, b) + L0, D.processCode && (L0 = D[_(1822)](L0, Z));
      var b0;
      try {
        var W0 = new Function(_(880), _(1790), _(735), _(1342), _(1986), "defaults", "customRules", _(1486), "ucs2length", _(970), L0);
        b0 = W0(I, c0, e0, C, A, H, U, o, n, c), A[0] = b0;
      } catch (nx) {
        throw I[_(2339)][_(1882)]("Error compiling schema, function code:", L0), nx;
      }
      return b0[_(1331)] = Z, b0[_(1065)] = null, b0[_(2208)] = j, b0[_(1986)] = A, b0[_(1342)] = j0 ? b0 : Y, F0 && (b0[_(1058)] = !0), D[_(1333)] === !0 && (b0[_(1469)] = { code: L0, patterns: R, defaults: H }), b0;
    }
    function D0(Z, Y, a0) {
      var n0 = E;
      Y = e[n0(2463)](Z, Y);
      var _ = j[Y], j0, F0;
      if (_ !== void 0) return j0 = A[_], F0 = "refVal[" + _ + "]", O(j0, F0);
      if (!a0 && C[n0(2208)]) {
        var L0 = C[n0(2208)][Y];
        if (L0 !== void 0) return j0 = C[n0(1986)][L0], F0 = S0(Y, j0), O(j0, F0);
      }
      F0 = S0(Y);
      var b0 = e[n0(444)](I, y0, C, Y);
      if (b0 === void 0) {
        var W0 = N && N[Y];
        W0 && (b0 = e[n0(2113)](W0, D.inlineRefs) ? W0 : f.call(I, W0, C, N, Z));
      }
      if (b0 === void 0) J0(Y);
      else return T(Y, b0), O(b0, F0);
    }
    function S0(Z, Y) {
      var a0 = E, n0 = A[a0(1775)];
      return A[n0] = Y, j[Z] = n0, a0(1986) + n0;
    }
    function J0(Z) {
      delete j[Z];
    }
    function T(Z, Y) {
      var a0 = j[Z];
      A[a0] = Y;
    }
    function O(Z, Y) {
      var a0 = E;
      return typeof Z == a0(692) || typeof Z == a0(2529) ? { code: Y, schema: Z, inline: !0 } : { code: Y, $async: Z && !!Z[a0(1058)] };
    }
    function $(Z) {
      var Y = E, a0 = F[Z];
      return a0 === void 0 && (a0 = F[Z] = R.length, R[a0] = Z), Y(2079) + a0;
    }
    function Q(Z) {
      var Y = E;
      switch (typeof Z) {
        case Y(2529):
        case Y(1225):
          return "" + Z;
        case "string":
          return t[Y(1228)](Z);
        case Y(692):
          if (Z === null) return "null";
          var a0 = x(Z), n0 = L[a0];
          return n0 === void 0 && (n0 = L[a0] = H.length, H[n0] = Z), Y(2178) + n0;
      }
    }
    function G(Z, Y, a0, n0) {
      var _ = E;
      if (I._opts[_(1734)] !== !1) {
        var j0 = Z[_(1707)][_(1492)];
        if (j0 && !j0[_(2464)](function(X0) {
          var Bx = _;
          return Object[Bx(611)].hasOwnProperty.call(a0, X0);
        })) throw new Error("parent schema must have all required keywords: " + j0[_(1030)](","));
        var F0 = Z[_(1707)][_(1734)];
        if (F0) {
          var L0 = F0(Y);
          if (!L0) {
            var b0 = _(2171) + I.errorsText(F0.errors);
            if (I[_(1317)].validateSchema == _(1413)) I[_(2339)][_(1882)](b0);
            else throw new Error(b0);
          }
        }
      }
      var W0 = Z[_(1707)][_(1034)], nx = Z[_(1707)][_(1759)], Q0 = Z.definition[_(1799)], O0;
      if (W0) O0 = W0[_(444)](I, Y, a0, n0);
      else if (Q0)
        O0 = Q0[_(444)](I, Y, a0, n0), D[_(1734)] !== !1 && I.validateSchema(O0, !0);
      else if (nx) O0 = nx.call(I, n0, Z[_(1701)], Y, a0);
      else if (O0 = Z.definition[_(1140)], !O0) return;
      if (O0 === void 0) throw new Error(_(1363) + Z[_(1701)] + '"failed to compile');
      var z0 = U[_(1775)];
      return U[z0] = O0, { code: _(665) + z0, validate: O0 };
    }
  }
  function d(S, C, N) {
    var k = i, E = u[k(444)](this, S, C, N);
    return E >= 0 ? { index: E, compiling: !0 } : (E = this[k(526)][k(1775)], this[k(526)][E] = { schema: S, root: C, baseId: N }, { index: E, compiling: !1 });
  }
  function l(S, C, N) {
    var k = i, E = u[k(444)](this, S, C, N);
    E >= 0 && this[k(526)][k(2516)](E, 1);
  }
  function u(S, C, N) {
    for (var k = i, E = 0; E < this[k(526)].length; E++) {
      var I = this._compilations[E];
      if (I[k(1331)] == S && I[k(1342)] == C && I[k(1461)] == N) return E;
    }
    return -1;
  }
  function v(S, C) {
    var N = i;
    return N(1853) + S + N(2320) + t[N(1228)](C[S]) + ");";
  }
  function h(S) {
    var C = i;
    return C(1508) + S + C(680) + S + "];";
  }
  function m(S, C) {
    var N = i;
    return C[S] === void 0 ? "" : N(2274) + S + N(1465) + S + "];";
  }
  function b(S) {
    var C = i;
    return C(509) + S + C(595) + S + "];";
  }
  function w(S, C) {
    var N = i;
    if (!S.length) return "";
    for (var k = "", E = 0; E < S[N(1775)]; E++) k += C(E, S);
    return k;
  }
  return Je;
}
var Qe = { exports: {} }, $r;
function yo() {
  var i = s;
  if ($r) return Qe[i(1547)];
  $r = 1;
  var e = Qe[i(1547)] = function() {
    var a = i;
    this[a(1440)] = {};
  };
  return e.prototype[i(1871)] = function(a, x) {
    var r = i;
    this[r(1440)][a] = x;
  }, e[i(611)][i(2214)] = function(a) {
    return this._cache[a];
  }, e[i(611)][i(1498)] = function(a) {
    var x = i;
    delete this[x(1440)][a];
  }, e.prototype[i(1950)] = function() {
    this._cache = {};
  }, Qe[i(1547)];
}
var Ge, Lr;
function wo() {
  var i = s;
  if (Lr) return Ge;
  Lr = 1;
  var e = Zx(), t = /^(\d\d\d\d)-(\d\d)-(\d\d)$/, a = [0, 31, 28, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31], x = /^(\d\d):(\d\d):(\d\d)(\.\d+)?(z|[+-]\d\d(?::?\d\d)?)?$/i, r = /^(?=.{1,253}\.?$)[a-z0-9](?:[a-z0-9-]{0,61}[a-z0-9])?(?:\.[a-z0-9](?:[-0-9a-z]{0,61}[0-9a-z])?)*\.?$/i, n = /^(?:[a-z][a-z0-9+\-.]*:)(?:\/?\/(?:(?:[a-z0-9\-._~!$&'()*+,;=:]|%[0-9a-f]{2})*@)?(?:\[(?:(?:(?:(?:[0-9a-f]{1,4}:){6}|::(?:[0-9a-f]{1,4}:){5}|(?:[0-9a-f]{1,4})?::(?:[0-9a-f]{1,4}:){4}|(?:(?:[0-9a-f]{1,4}:){0,1}[0-9a-f]{1,4})?::(?:[0-9a-f]{1,4}:){3}|(?:(?:[0-9a-f]{1,4}:){0,2}[0-9a-f]{1,4})?::(?:[0-9a-f]{1,4}:){2}|(?:(?:[0-9a-f]{1,4}:){0,3}[0-9a-f]{1,4})?::[0-9a-f]{1,4}:|(?:(?:[0-9a-f]{1,4}:){0,4}[0-9a-f]{1,4})?::)(?:[0-9a-f]{1,4}:[0-9a-f]{1,4}|(?:(?:25[0-5]|2[0-4]\d|[01]?\d\d?)\.){3}(?:25[0-5]|2[0-4]\d|[01]?\d\d?))|(?:(?:[0-9a-f]{1,4}:){0,5}[0-9a-f]{1,4})?::[0-9a-f]{1,4}|(?:(?:[0-9a-f]{1,4}:){0,6}[0-9a-f]{1,4})?::)|[Vv][0-9a-f]+\.[a-z0-9\-._~!$&'()*+,;=:]+)\]|(?:(?:25[0-5]|2[0-4]\d|[01]?\d\d?)\.){3}(?:25[0-5]|2[0-4]\d|[01]?\d\d?)|(?:[a-z0-9\-._~!$&'()*+,;=]|%[0-9a-f]{2})*)(?::\d*)?(?:\/(?:[a-z0-9\-._~!$&'()*+,;=:@]|%[0-9a-f]{2})*)*|\/(?:(?:[a-z0-9\-._~!$&'()*+,;=:@]|%[0-9a-f]{2})+(?:\/(?:[a-z0-9\-._~!$&'()*+,;=:@]|%[0-9a-f]{2})*)*)?|(?:[a-z0-9\-._~!$&'()*+,;=:@]|%[0-9a-f]{2})+(?:\/(?:[a-z0-9\-._~!$&'()*+,;=:@]|%[0-9a-f]{2})*)*)(?:\?(?:[a-z0-9\-._~!$&'()*+,;=:@/?]|%[0-9a-f]{2})*)?(?:#(?:[a-z0-9\-._~!$&'()*+,;=:@/?]|%[0-9a-f]{2})*)?$/i, o = /^(?:[a-z][a-z0-9+\-.]*:)?(?:\/?\/(?:(?:[a-z0-9\-._~!$&'()*+,;=:]|%[0-9a-f]{2})*@)?(?:\[(?:(?:(?:(?:[0-9a-f]{1,4}:){6}|::(?:[0-9a-f]{1,4}:){5}|(?:[0-9a-f]{1,4})?::(?:[0-9a-f]{1,4}:){4}|(?:(?:[0-9a-f]{1,4}:){0,1}[0-9a-f]{1,4})?::(?:[0-9a-f]{1,4}:){3}|(?:(?:[0-9a-f]{1,4}:){0,2}[0-9a-f]{1,4})?::(?:[0-9a-f]{1,4}:){2}|(?:(?:[0-9a-f]{1,4}:){0,3}[0-9a-f]{1,4})?::[0-9a-f]{1,4}:|(?:(?:[0-9a-f]{1,4}:){0,4}[0-9a-f]{1,4})?::)(?:[0-9a-f]{1,4}:[0-9a-f]{1,4}|(?:(?:25[0-5]|2[0-4]\d|[01]?\d\d?)\.){3}(?:25[0-5]|2[0-4]\d|[01]?\d\d?))|(?:(?:[0-9a-f]{1,4}:){0,5}[0-9a-f]{1,4})?::[0-9a-f]{1,4}|(?:(?:[0-9a-f]{1,4}:){0,6}[0-9a-f]{1,4})?::)|[Vv][0-9a-f]+\.[a-z0-9\-._~!$&'()*+,;=:]+)\]|(?:(?:25[0-5]|2[0-4]\d|[01]?\d\d?)\.){3}(?:25[0-5]|2[0-4]\d|[01]?\d\d?)|(?:[a-z0-9\-._~!$&'"()*+,;=]|%[0-9a-f]{2})*)(?::\d*)?(?:\/(?:[a-z0-9\-._~!$&'"()*+,;=:@]|%[0-9a-f]{2})*)*|\/(?:(?:[a-z0-9\-._~!$&'"()*+,;=:@]|%[0-9a-f]{2})+(?:\/(?:[a-z0-9\-._~!$&'"()*+,;=:@]|%[0-9a-f]{2})*)*)?|(?:[a-z0-9\-._~!$&'"()*+,;=:@]|%[0-9a-f]{2})+(?:\/(?:[a-z0-9\-._~!$&'"()*+,;=:@]|%[0-9a-f]{2})*)*)?(?:\?(?:[a-z0-9\-._~!$&'"()*+,;=:@/?]|%[0-9a-f]{2})*)?(?:#(?:[a-z0-9\-._~!$&'"()*+,;=:@/?]|%[0-9a-f]{2})*)?$/i, c = /^(?:(?:[^\x00-\x20"'<>%\\^`{|}]|%[0-9a-f]{2})|\{[+#./;?&=,!@|]?(?:[a-z0-9_]|%[0-9a-f]{2})+(?::[1-9][0-9]{0,3}|\*)?(?:,(?:[a-z0-9_]|%[0-9a-f]{2})+(?::[1-9][0-9]{0,3}|\*)?)*\})*$/i, f = /^(?:(?:http[s\u017F]?|ftp):\/\/)(?:(?:[\0-\x08\x0E-\x1F!-\x9F\xA1-\u167F\u1681-\u1FFF\u200B-\u2027\u202A-\u202E\u2030-\u205E\u2060-\u2FFF\u3001-\uD7FF\uE000-\uFEFE\uFF00-\uFFFF]|[\uD800-\uDBFF][\uDC00-\uDFFF]|[\uD800-\uDBFF](?![\uDC00-\uDFFF])|(?:[^\uD800-\uDBFF]|^)[\uDC00-\uDFFF])+(?::(?:[\0-\x08\x0E-\x1F!-\x9F\xA1-\u167F\u1681-\u1FFF\u200B-\u2027\u202A-\u202E\u2030-\u205E\u2060-\u2FFF\u3001-\uD7FF\uE000-\uFEFE\uFF00-\uFFFF]|[\uD800-\uDBFF][\uDC00-\uDFFF]|[\uD800-\uDBFF](?![\uDC00-\uDFFF])|(?:[^\uD800-\uDBFF]|^)[\uDC00-\uDFFF])*)?@)?(?:(?!10(?:\.[0-9]{1,3}){3})(?!127(?:\.[0-9]{1,3}){3})(?!169\.254(?:\.[0-9]{1,3}){2})(?!192\.168(?:\.[0-9]{1,3}){2})(?!172\.(?:1[6-9]|2[0-9]|3[01])(?:\.[0-9]{1,3}){2})(?:[1-9][0-9]?|1[0-9][0-9]|2[01][0-9]|22[0-3])(?:\.(?:1?[0-9]{1,2}|2[0-4][0-9]|25[0-5])){2}(?:\.(?:[1-9][0-9]?|1[0-9][0-9]|2[0-4][0-9]|25[0-4]))|(?:(?:(?:[0-9a-z\xA1-\uD7FF\uE000-\uFFFF]|[\uD800-\uDBFF](?![\uDC00-\uDFFF])|(?:[^\uD800-\uDBFF]|^)[\uDC00-\uDFFF])+-)*(?:[0-9a-z\xA1-\uD7FF\uE000-\uFFFF]|[\uD800-\uDBFF](?![\uDC00-\uDFFF])|(?:[^\uD800-\uDBFF]|^)[\uDC00-\uDFFF])+)(?:\.(?:(?:[0-9a-z\xA1-\uD7FF\uE000-\uFFFF]|[\uD800-\uDBFF](?![\uDC00-\uDFFF])|(?:[^\uD800-\uDBFF]|^)[\uDC00-\uDFFF])+-)*(?:[0-9a-z\xA1-\uD7FF\uE000-\uFFFF]|[\uD800-\uDBFF](?![\uDC00-\uDFFF])|(?:[^\uD800-\uDBFF]|^)[\uDC00-\uDFFF])+)*(?:\.(?:(?:[a-z\xA1-\uD7FF\uE000-\uFFFF]|[\uD800-\uDBFF](?![\uDC00-\uDFFF])|(?:[^\uD800-\uDBFF]|^)[\uDC00-\uDFFF]){2,})))(?::[0-9]{2,5})?(?:\/(?:[\0-\x08\x0E-\x1F!-\x9F\xA1-\u167F\u1681-\u1FFF\u200B-\u2027\u202A-\u202E\u2030-\u205E\u2060-\u2FFF\u3001-\uD7FF\uE000-\uFEFE\uFF00-\uFFFF]|[\uD800-\uDBFF][\uDC00-\uDFFF]|[\uD800-\uDBFF](?![\uDC00-\uDFFF])|(?:[^\uD800-\uDBFF]|^)[\uDC00-\uDFFF])*)?$/i, d = /^(?:urn:uuid:)?[0-9a-f]{8}-(?:[0-9a-f]{4}-){3}[0-9a-f]{12}$/i, l = /^(?:\/(?:[^~/]|~0|~1)*)*$/, u = /^#(?:\/(?:[a-z0-9_\-.!$&'()*+,;:=@]|%[0-9a-f]{2}|~0|~1)*)*$/i, v = /^(?:0|[1-9][0-9]*)(?:#|(?:\/(?:[^~/]|~0|~1)*)*)$/;
  Ge = h;
  function h(D) {
    var A = B;
    return D = D == A(2250) ? A(2250) : A(1175), e[A(1949)](h[D]);
  }
  h[i(1175)] = { date: /^\d\d\d\d-[0-1]\d-[0-3]\d$/, time: /^(?:[0-2]\d:[0-5]\d:[0-5]\d|23:59:60)(?:\.\d+)?(?:z|[+-]\d\d(?::?\d\d)?)?$/i, "date-time": /^\d\d\d\d-[0-1]\d-[0-3]\d[t\s](?:[0-2]\d:[0-5]\d:[0-5]\d|23:59:60)(?:\.\d+)?(?:z|[+-]\d\d(?::?\d\d)?)$/i, uri: /^(?:[a-z][a-z0-9+\-.]*:)(?:\/?\/)?[^\s]*$/i, "uri-reference": /^(?:(?:[a-z][a-z0-9+\-.]*:)?\/?\/)?(?:[^\\\s#][^\s#]*)?(?:#[^\\\s]*)?$/i, "uri-template": c, url: f, email: /^[a-z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-z0-9](?:[a-z0-9-]{0,61}[a-z0-9])?(?:\.[a-z0-9](?:[a-z0-9-]{0,61}[a-z0-9])?)*$/i, hostname: r, ipv4: /^(?:(?:25[0-5]|2[0-4]\d|[01]?\d\d?)\.){3}(?:25[0-5]|2[0-4]\d|[01]?\d\d?)$/, ipv6: /^\s*(?:(?:(?:[0-9a-f]{1,4}:){7}(?:[0-9a-f]{1,4}|:))|(?:(?:[0-9a-f]{1,4}:){6}(?::[0-9a-f]{1,4}|(?:(?:25[0-5]|2[0-4]\d|1\d\d|[1-9]?\d)(?:\.(?:25[0-5]|2[0-4]\d|1\d\d|[1-9]?\d)){3})|:))|(?:(?:[0-9a-f]{1,4}:){5}(?:(?:(?::[0-9a-f]{1,4}){1,2})|:(?:(?:25[0-5]|2[0-4]\d|1\d\d|[1-9]?\d)(?:\.(?:25[0-5]|2[0-4]\d|1\d\d|[1-9]?\d)){3})|:))|(?:(?:[0-9a-f]{1,4}:){4}(?:(?:(?::[0-9a-f]{1,4}){1,3})|(?:(?::[0-9a-f]{1,4})?:(?:(?:25[0-5]|2[0-4]\d|1\d\d|[1-9]?\d)(?:\.(?:25[0-5]|2[0-4]\d|1\d\d|[1-9]?\d)){3}))|:))|(?:(?:[0-9a-f]{1,4}:){3}(?:(?:(?::[0-9a-f]{1,4}){1,4})|(?:(?::[0-9a-f]{1,4}){0,2}:(?:(?:25[0-5]|2[0-4]\d|1\d\d|[1-9]?\d)(?:\.(?:25[0-5]|2[0-4]\d|1\d\d|[1-9]?\d)){3}))|:))|(?:(?:[0-9a-f]{1,4}:){2}(?:(?:(?::[0-9a-f]{1,4}){1,5})|(?:(?::[0-9a-f]{1,4}){0,3}:(?:(?:25[0-5]|2[0-4]\d|1\d\d|[1-9]?\d)(?:\.(?:25[0-5]|2[0-4]\d|1\d\d|[1-9]?\d)){3}))|:))|(?:(?:[0-9a-f]{1,4}:){1}(?:(?:(?::[0-9a-f]{1,4}){1,6})|(?:(?::[0-9a-f]{1,4}){0,4}:(?:(?:25[0-5]|2[0-4]\d|1\d\d|[1-9]?\d)(?:\.(?:25[0-5]|2[0-4]\d|1\d\d|[1-9]?\d)){3}))|:))|(?::(?:(?:(?::[0-9a-f]{1,4}){1,7})|(?:(?::[0-9a-f]{1,4}){0,5}:(?:(?:25[0-5]|2[0-4]\d|1\d\d|[1-9]?\d)(?:\.(?:25[0-5]|2[0-4]\d|1\d\d|[1-9]?\d)){3}))|:)))(?:%.+)?\s*$/i, regex: I, uuid: d, "json-pointer": l, "json-pointer-uri-fragment": u, "relative-json-pointer": v }, h[i(2250)] = { date: b, time: w, "date-time": C, uri: k, "uri-reference": o, "uri-template": c, url: f, email: /^[a-z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[a-z0-9!#$%&'*+/=?^_`{|}~-]+)*@(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?$/i, hostname: r, ipv4: /^(?:(?:25[0-5]|2[0-4]\d|[01]?\d\d?)\.){3}(?:25[0-5]|2[0-4]\d|[01]?\d\d?)$/, ipv6: /^\s*(?:(?:(?:[0-9a-f]{1,4}:){7}(?:[0-9a-f]{1,4}|:))|(?:(?:[0-9a-f]{1,4}:){6}(?::[0-9a-f]{1,4}|(?:(?:25[0-5]|2[0-4]\d|1\d\d|[1-9]?\d)(?:\.(?:25[0-5]|2[0-4]\d|1\d\d|[1-9]?\d)){3})|:))|(?:(?:[0-9a-f]{1,4}:){5}(?:(?:(?::[0-9a-f]{1,4}){1,2})|:(?:(?:25[0-5]|2[0-4]\d|1\d\d|[1-9]?\d)(?:\.(?:25[0-5]|2[0-4]\d|1\d\d|[1-9]?\d)){3})|:))|(?:(?:[0-9a-f]{1,4}:){4}(?:(?:(?::[0-9a-f]{1,4}){1,3})|(?:(?::[0-9a-f]{1,4})?:(?:(?:25[0-5]|2[0-4]\d|1\d\d|[1-9]?\d)(?:\.(?:25[0-5]|2[0-4]\d|1\d\d|[1-9]?\d)){3}))|:))|(?:(?:[0-9a-f]{1,4}:){3}(?:(?:(?::[0-9a-f]{1,4}){1,4})|(?:(?::[0-9a-f]{1,4}){0,2}:(?:(?:25[0-5]|2[0-4]\d|1\d\d|[1-9]?\d)(?:\.(?:25[0-5]|2[0-4]\d|1\d\d|[1-9]?\d)){3}))|:))|(?:(?:[0-9a-f]{1,4}:){2}(?:(?:(?::[0-9a-f]{1,4}){1,5})|(?:(?::[0-9a-f]{1,4}){0,3}:(?:(?:25[0-5]|2[0-4]\d|1\d\d|[1-9]?\d)(?:\.(?:25[0-5]|2[0-4]\d|1\d\d|[1-9]?\d)){3}))|:))|(?:(?:[0-9a-f]{1,4}:){1}(?:(?:(?::[0-9a-f]{1,4}){1,6})|(?:(?::[0-9a-f]{1,4}){0,4}:(?:(?:25[0-5]|2[0-4]\d|1\d\d|[1-9]?\d)(?:\.(?:25[0-5]|2[0-4]\d|1\d\d|[1-9]?\d)){3}))|:))|(?::(?:(?:(?::[0-9a-f]{1,4}){1,7})|(?:(?::[0-9a-f]{1,4}){0,5}:(?:(?:25[0-5]|2[0-4]\d|1\d\d|[1-9]?\d)(?:\.(?:25[0-5]|2[0-4]\d|1\d\d|[1-9]?\d)){3}))|:)))(?:%.+)?\s*$/i, regex: I, uuid: d, "json-pointer": l, "json-pointer-uri-fragment": u, "relative-json-pointer": v };
  function m(D) {
    return D % 4 === 0 && (D % 100 !== 0 || D % 400 === 0);
  }
  function b(D) {
    var A = i, j = D[A(1424)](t);
    if (!j) return !1;
    var R = +j[1], F = +j[2], H = +j[3];
    return F >= 1 && F <= 12 && H >= 1 && H <= (F == 2 && m(R) ? 29 : a[F]);
  }
  function w(D, A) {
    var j = i, R = D[j(1424)](x);
    if (!R) return !1;
    var F = R[1], H = R[2], L = R[3], U = R[5];
    return (F <= 23 && H <= 59 && L <= 59 || F == 23 && H == 59 && L == 60) && (!A || U);
  }
  var S = /t|\s/i;
  function C(D) {
    var A = i, j = D[A(1801)](S);
    return j[A(1775)] == 2 && b(j[0]) && w(j[1], !0);
  }
  var N = /\/|:/;
  function k(D) {
    var A = i;
    return N[A(2263)](D) && n[A(2263)](D);
  }
  var E = /[^\\]\\Z/;
  function I(D) {
    var A = i;
    if (E[A(2263)](D)) return !1;
    try {
      return new RegExp(D), !0;
    } catch {
      return !1;
    }
  }
  return Ge;
}
var Ye, zr;
function So() {
  return zr || (zr = 1, Ye = function(e, t, a) {
    var x = B, r = " ", n = e.level, o = e.dataLevel, c = e[x(1331)][t], f = e[x(771)] + "/" + t, d = !e[x(1923)][x(1975)], l = x(530) + (o || ""), u = x(977) + n, v, h;
    if (c == "#" || c == "#/") e.isRoot ? (v = e[x(545)], h = x(1140)) : (v = e.root.schema[x(1058)] === !0, h = x(1117));
    else {
      var m = e[x(2141)](e[x(1461)], c, e[x(1970)]);
      if (m === void 0) {
        var b = e[x(1985)].message(e[x(1461)], c);
        if (e.opts[x(2409)] == x(1314)) {
          e.logger[x(1882)](b);
          var w = w || [];
          w.push(r), r = "", e[x(1044)] !== !1 ? (r += x(2225) + "$ref" + x(2217) + e.errorPath + x(1717) + e[x(1303)][x(1228)](f) + x(962) + e[x(1303)][x(791)](c) + x(1231), e.opts[x(1318)] !== !1 && (r += x(1977) + e[x(1303)][x(791)](c) + "' "), e[x(1923)][x(1264)] && (r += " , schema: " + e.util.toQuotedString(c) + x(995) + e[x(2502)] + " , data: " + l + " "), r += x(1460)) : r += " {} ";
          var S = r;
          r = w[x(2443)](), !e[x(750)] && d ? e[x(545)] ? r += " throw new ValidationError([" + S + x(914) : r += x(2009) + S + x(1725) : r += x(1043) + S + x(562), d && (r += x(1868));
        } else if (e.opts[x(2409)] == x(2515)) e[x(2339)][x(897)](b), d && (r += " if (true) { ");
        else throw new e[x(1985)](e[x(1461)], c, b);
      } else if (m.inline) {
        var C = e[x(1303)][x(1949)](e);
        C[x(1737)]++;
        var N = "valid" + C.level;
        C[x(1331)] = m[x(1331)], C.schemaPath = "", C.errSchemaPath = c;
        var k = e[x(1140)](C).replace(/validate\.schema/g, m.code);
        r += " " + k + " ", d && (r += " if (" + N + ") { ");
      } else v = m[x(1058)] === !0 || e.async && m[x(1058)] !== !1, h = m[x(594)];
    }
    if (h) {
      var w = w || [];
      w[x(2523)](r), r = "", e[x(1923)][x(537)] ? r += " " + h + x(1598) : r += " " + h + "( ", r += " " + l + x(1021), e[x(1e3)] != '""' && (r += x(1800) + e[x(1e3)]);
      var E = o ? x(530) + (o - 1 || "") : x(700), I = o ? e[x(984)][o] : x(1746);
      r += x(1305) + E + " , " + I + x(2168);
      var D = r;
      if (r = w[x(2443)](), v) {
        if (!e[x(545)]) throw new Error(x(928));
        d && (r += x(1221) + u + "; "), r += " try { await " + D + "; ", d && (r += " " + u + x(1442)), r += x(940), d && (r += " " + u + x(452)), r += " } ", d && (r += x(1166) + u + ") { ");
      } else r += " if (!" + D + x(1078) + h + x(1805) + h + ".errors); errors = vErrors.length; } ", d && (r += x(1142));
    }
    return r;
  }), Ye;
}
var Xe, Vr;
function Eo() {
  return Vr || (Vr = 1, Xe = function(e, t, a) {
    var x = B, r = " ", n = e[x(1331)][t], o = e.schemaPath + e[x(1303)][x(601)](t), c = e[x(771)] + "/" + t, f = !e.opts[x(1975)], d = e[x(1303)][x(1949)](e), l = "";
    d[x(1737)]++;
    var u = x(977) + d[x(1737)], v = d[x(1461)], h = !0, m = n;
    if (m)
      for (var b, w = -1, S = m[x(1775)] - 1; w < S; )
        b = m[w += 1], (e.opts[x(703)] ? typeof b == "object" && Object.keys(b).length > 0 || b === !1 : e[x(1303)].schemaHasRules(b, e[x(1790)].all)) && (h = !1, d.schema = b, d.schemaPath = o + "[" + w + "]", d.errSchemaPath = c + "/" + w, r += "  " + e[x(1140)](d) + " ", d[x(1461)] = v, f && (r += x(1166) + u + x(1017), l += "}"));
    return f && (h ? r += x(838) : r += " " + l[x(2287)](0, -1) + " "), r;
  }), Xe;
}
var _e, Hr;
function Po() {
  return Hr || (Hr = 1, _e = function(e, t, a) {
    var x = B, r = " ", n = e[x(1737)], o = e.dataLevel, c = e.schema[t], f = e[x(2502)] + e[x(1303)][x(601)](t), d = e[x(771)] + "/" + t, l = !e[x(1923)][x(1975)], u = "data" + (o || ""), v = x(977) + n, h = x(1879) + n, m = e[x(1303)][x(1949)](e), b = "";
    m[x(1737)]++;
    var w = x(977) + m[x(1737)], S = c[x(2464)](function(A) {
      var j = x;
      return e[j(1923)].strictKeywords ? typeof A == "object" && Object[j(870)](A)[j(1775)] > 0 || A === !1 : e[j(1303)][j(535)](A, e[j(1790)][j(799)]);
    });
    if (S) {
      var C = m[x(1461)];
      r += x(1221) + h + x(935) + v + x(696);
      var N = e[x(750)];
      e[x(750)] = m.compositeRule = !0;
      var k = c;
      if (k)
        for (var E, I = -1, D = k.length - 1; I < D; )
          E = k[I += 1], m.schema = E, m[x(2502)] = f + "[" + I + "]", m.errSchemaPath = d + "/" + I, r += "  " + e.validate(m) + " ", m.baseId = C, r += " " + v + x(1172) + v + x(2281) + w + x(1386) + v + x(1017), b += "}";
      e[x(750)] = m[x(750)] = N, r += " " + b + " if (!" + v + x(2031), e[x(1044)] !== !1 ? (r += x(2225) + "anyOf" + x(2217) + e[x(1e3)] + x(1717) + e[x(1303)].toQuotedString(d) + " , params: {} ", e[x(1923)][x(1318)] !== !1 && (r += x(1334)), e[x(1923)][x(1264)] && (r += " , schema: validate.schema" + f + x(995) + e.schemaPath + x(602) + u + " "), r += x(1460)) : r += x(1487), r += x(562), !e[x(750)] && l && (e.async ? r += x(1528) : r += x(2392)), r += x(1668) + h + "; if (vErrors !== null) { if (" + h + x(854) + h + "; else vErrors = null; } ", e[x(1923)][x(1975)] && (r += " } ");
    } else l && (r += " if (true) { ");
    return r;
  }), _e;
}
var xt, Ur;
function ko() {
  return Ur || (Ur = 1, xt = function(e, t, a) {
    var x = B, r = " ", n = e.schema[t], o = e[x(771)] + "/" + t;
    e[x(1923)].allErrors;
    var c = e[x(1303)][x(1228)](n);
    return e.opts[x(447)] === !0 ? r += x(1567) + c + ");" : typeof e[x(1923)][x(447)] == x(2444) && (r += x(722) + c + ", " + e[x(1303)][x(1228)](o) + x(1289)), r;
  }), xt;
}
var et, Zr;
function Io() {
  return Zr || (Zr = 1, et = function(e, t, a) {
    var x = B, r = " ", n = e.level, o = e[x(2014)], c = e[x(1331)][t], f = e[x(2502)] + e[x(1303)][x(601)](t), d = e.errSchemaPath + "/" + t, l = !e.opts[x(1975)], u = "data" + (o || ""), v = x(977) + n, h = e[x(1923)][x(2223)] && c && c[x(2223)];
    h && (r += x(1902) + n + " = " + e[x(1303)][x(1182)](c[x(2223)], o, e.dataPathArr) + "; "), !h && (r += x(1902) + n + x(1695) + f + ";"), r += x(774) + v + x(1389) + u + x(657) + n + x(811) + v + x(2307);
    var m = m || [];
    m.push(r), r = "", e.createErrors !== !1 ? (r += x(2225) + x(2382) + x(2217) + e[x(1e3)] + x(1717) + e[x(1303)][x(1228)](d) + x(2074) + n + " } ", e[x(1923)][x(1318)] !== !1 && (r += x(1671)), e.opts.verbose && (r += " , schema: validate.schema" + f + x(995) + e[x(2502)] + x(602) + u + " "), r += " } ") : r += " {} ";
    var b = r;
    return r = m[x(2443)](), !e[x(750)] && l ? e.async ? r += x(457) + b + x(914) : r += " validate.errors = [" + b + x(1725) : r += x(1043) + b + x(562), r += " }", l && (r += " else { "), r;
  }), et;
}
var tt, Br;
function Co() {
  return Br || (Br = 1, tt = function(e, t, a) {
    var x = B, r = " ", n = e.level, o = e.dataLevel, c = e[x(1331)][t], f = e[x(2502)] + e[x(1303)].getProperty(t), d = e[x(771)] + "/" + t, l = !e[x(1923)][x(1975)], u = x(530) + (o || ""), v = "valid" + n, h = x(1879) + n, m = e[x(1303)][x(1949)](e), b = "";
    m[x(1737)]++;
    var w = x(977) + m[x(1737)], S = "i" + n, C = m[x(2014)] = e[x(2014)] + 1, N = x(530) + C, k = e[x(1461)], E = e.opts[x(703)] ? typeof c == "object" && Object[x(870)](c)[x(1775)] > 0 || c === !1 : e.util.schemaHasRules(c, e.RULES.all);
    if (r += x(774) + h + x(494) + v + ";", E) {
      var I = e.compositeRule;
      e.compositeRule = m[x(750)] = !0, m[x(1331)] = c, m[x(2502)] = f, m[x(771)] = d, r += x(1221) + w + x(1837) + S + x(961) + S + x(1899) + u + x(1491) + S + x(1540), m.errorPath = e.util[x(1202)](e[x(1e3)], S, e[x(1923)].jsonPointers, !0);
      var D = u + "[" + S + "]";
      m.dataPathArr[C] = S;
      var A = e[x(1140)](m);
      m[x(1461)] = k, e[x(1303)][x(2309)](A, N) < 2 ? r += " " + e[x(1303)][x(762)](A, N, D) + " " : r += x(1221) + N + x(1172) + D + "; " + A + " ", r += x(1166) + w + ") break; }  ", e.compositeRule = m[x(750)] = I, r += " " + b + x(973) + w + x(2486);
    } else r += x(1166) + u + x(506);
    var j = j || [];
    j.push(r), r = "", e.createErrors !== !1 ? (r += x(2225) + x(1918) + x(2217) + e[x(1e3)] + " , schemaPath: " + e.util[x(1228)](d) + x(794), e[x(1923)][x(1318)] !== !1 && (r += x(2257)), e[x(1923)][x(1264)] && (r += x(1234) + f + x(995) + e[x(2502)] + x(602) + u + " "), r += x(1460)) : r += x(1487);
    var R = r;
    return r = j[x(2443)](), !e[x(750)] && l ? e[x(545)] ? r += " throw new ValidationError([" + R + "]); " : r += x(2009) + R + x(1725) : r += x(1043) + R + ";  if (vErrors === null) vErrors = [err]; else vErrors.push(err); errors++; ", r += x(2407), E && (r += x(1190) + h + x(473) + h + x(854) + h + x(1450)), e[x(1923)][x(1975)] && (r += " } "), r;
  }), tt;
}
var rt, Kr;
function Ro() {
  return Kr || (Kr = 1, rt = function(e, t, a) {
    var x = B, r = " ", n = e[x(1737)], o = e[x(2014)], c = e[x(1331)][t], f = e[x(2502)] + e[x(1303)][x(601)](t), d = e[x(771)] + "/" + t, l = !e.opts.allErrors, u = x(530) + (o || ""), v = x(1879) + n, h = e[x(1303)][x(1949)](e), m = "";
    h[x(1737)]++;
    var b = x(977) + h[x(1737)], w = {}, S = {}, C = e[x(1923)][x(2324)];
    for (I in c)
      if (I != "__proto__") {
        var N = c[I], k = Array[x(2462)](N) ? S : w;
        k[I] = N;
      }
    r += x(774) + v + x(2405);
    var E = e[x(1e3)];
    r += x(1581) + n + ";";
    for (var I in S)
      if (k = S[I], k[x(1775)]) {
        if (r += " if ( " + u + e.util[x(601)](I) + x(1158), C && (r += x(766) + u + x(1640) + e[x(1303)].escapeQuotes(I) + x(1423)), l) {
          r += x(1773);
          var D = k;
          if (D)
            for (var A, j = -1, R = D.length - 1; j < R; ) {
              A = D[j += 1], j && (r += x(2281));
              var F = e.util[x(601)](A), H = u + F;
              r += " ( ( " + H + x(1709), C && (r += " || ! Object.prototype.hasOwnProperty.call(" + u + x(1640) + e.util.escapeQuotes(A) + x(1423)), r += x(2315) + n + " = " + e.util[x(1228)](e[x(1923)][x(2144)] ? A : F) + x(1844);
            }
          r += x(834);
          var L = x(972) + n, U = x(1310) + L + x(1306);
          e[x(1923)][x(1344)] && (e.errorPath = e[x(1923)][x(2144)] ? e[x(1303)][x(1202)](E, L, !0) : E + x(1800) + L);
          var J = J || [];
          J[x(2523)](r), r = "", e[x(1044)] !== !1 ? (r += x(2225) + x(1492) + "' , dataPath: (dataPath || '') + " + e[x(1e3)] + x(1717) + e[x(1303)].toQuotedString(d) + x(497) + e.util[x(791)](I) + "', missingProperty: '" + U + x(1422) + k.length + ", deps: '" + e[x(1303)][x(791)](k.length == 1 ? k[0] : k[x(1030)](", ")) + x(1231), e[x(1923)][x(1318)] !== !1 && (r += x(742), k[x(1775)] == 1 ? r += x(830) + e[x(1303)][x(791)](k[0]) : r += x(754) + e[x(1303)][x(791)](k[x(1030)](", ")), r += x(744) + e.util[x(791)](I) + x(1133)), e[x(1923)][x(1264)] && (r += " , schema: validate.schema" + f + x(995) + e.schemaPath + x(602) + u + " "), r += " } ") : r += x(1487);
          var t0 = r;
          r = J.pop(), !e[x(750)] && l ? e[x(545)] ? r += " throw new ValidationError([" + t0 + x(914) : r += " validate.errors = [" + t0 + "]; return false; " : r += " var err = " + t0 + x(562);
        } else {
          r += x(1760);
          var e0 = k;
          if (e0)
            for (var A, c0 = -1, u0 = e0[x(1775)] - 1; c0 < u0; ) {
              A = e0[c0 += 1];
              var F = e[x(1303)][x(601)](A), U = e.util[x(791)](A), H = u + F;
              e[x(1923)][x(1344)] && (e[x(1e3)] = e[x(1303)][x(918)](E, A, e[x(1923)][x(2144)])), r += x(662) + H + " === undefined ", C && (r += x(879) + u + x(1640) + e[x(1303)][x(791)](A) + "') "), r += x(2196), e[x(1044)] !== !1 ? (r += x(2225) + x(1492) + x(2217) + e.errorPath + x(1717) + e[x(1303)][x(1228)](d) + " , params: { property: '" + e[x(1303)].escapeQuotes(I) + x(1007) + U + "', depsCount: " + k.length + x(1049) + e[x(1303)][x(791)](k[x(1775)] == 1 ? k[0] : k[x(1030)](", ")) + x(1231), e[x(1923)][x(1318)] !== !1 && (r += x(742), k[x(1775)] == 1 ? r += "property " + e.util[x(791)](k[0]) : r += x(754) + e[x(1303)][x(791)](k[x(1030)](", ")), r += x(744) + e[x(1303)][x(791)](I) + x(1133)), e[x(1923)].verbose && (r += x(1234) + f + " , parentSchema: validate.schema" + e[x(2502)] + " , data: " + u + " "), r += x(1460)) : r += x(1487), r += x(1266);
            }
        }
        r += " }   ", l && (m += "}", r += " else { ");
      }
    e[x(1e3)] = E;
    var d0 = h[x(1461)];
    for (var I in w) {
      var N = w[I];
      (e[x(1923)][x(703)] ? typeof N == x(692) && Object[x(870)](N).length > 0 || N === !1 : e[x(1303)][x(535)](N, e[x(1790)][x(799)])) && (r += " " + b + x(2335) + u + e[x(1303)][x(601)](I) + x(1158), C && (r += x(766) + u + ", '" + e[x(1303)][x(791)](I) + "') "), r += x(1017), h[x(1331)] = N, h.schemaPath = f + e[x(1303)][x(601)](I), h[x(771)] = d + "/" + e[x(1303)][x(2474)](I), r += "  " + e[x(1140)](h) + " ", h.baseId = d0, r += x(1867), l && (r += x(1166) + b + x(1017), m += "}"));
    }
    return l && (r += x(658) + m + x(1166) + v + x(1763)), r;
  }), rt;
}
var at, Wr;
function Fo() {
  return Wr || (Wr = 1, at = function(e, t, a) {
    var x = B, r = " ", n = e.level, o = e.dataLevel, c = e[x(1331)][t], f = e[x(2502)] + e.util[x(601)](t), d = e[x(771)] + "/" + t, l = !e[x(1923)].allErrors, u = x(530) + (o || ""), v = "valid" + n, h = e[x(1923)].$data && c && c[x(2223)];
    h && (r += " var schema" + n + x(1172) + e[x(1303)][x(1182)](c[x(2223)], o, e.dataPathArr) + "; ");
    var m = "i" + n, b = x(1331) + n;
    !h && (r += x(1221) + b + x(1695) + f + ";"), r += x(774) + v + ";", h && (r += x(670) + n + " === undefined) " + v + x(2328) + n + x(2368) + v + " = false; else {"), r += "" + v + x(1184) + m + x(1523) + m + "<" + b + x(1491) + m + x(1880) + u + ", " + b + "[" + m + x(1807) + v + x(1210), h && (r += "  }  "), r += x(973) + v + x(2307);
    var w = w || [];
    w.push(r), r = "", e[x(1044)] !== !1 ? (r += x(2225) + x(559) + x(2217) + e[x(1e3)] + x(1717) + e[x(1303)].toQuotedString(d) + x(1126) + n + " } ", e[x(1923)][x(1318)] !== !1 && (r += x(996)), e.opts[x(1264)] && (r += x(1234) + f + x(995) + e[x(2502)] + x(602) + u + " "), r += " } ") : r += " {} ";
    var S = r;
    return r = w[x(2443)](), !e.compositeRule && l ? e[x(545)] ? r += x(457) + S + x(914) : r += " validate.errors = [" + S + x(1725) : r += x(1043) + S + ";  if (vErrors === null) vErrors = [err]; else vErrors.push(err); errors++; ", r += " }", l && (r += x(1142)), r;
  }), at;
}
var st, Jr;
function No() {
  return Jr || (Jr = 1, st = function(e, t, a) {
    var x = B, r = " ", n = e.level, o = e[x(2014)], c = e.schema[t], f = e.schemaPath + e[x(1303)].getProperty(t), d = e[x(771)] + "/" + t, l = !e[x(1923)][x(1975)], u = "data" + (o || "");
    if (e.opts[x(2209)] === !1) return l && (r += x(838)), r;
    var v = e[x(1923)][x(2223)] && c && c[x(2223)], h;
    v ? (r += x(1902) + n + x(1172) + e.util[x(1182)](c.$data, o, e[x(984)]) + "; ", h = "schema" + n) : h = c;
    var m = e.opts[x(2434)], b = Array[x(2462)](m);
    if (v) {
      var w = x(2209) + n, S = x(2165) + n, C = x(2174) + n;
      r += x(1221) + w + " = formats[" + h + x(480) + S + x(1969) + w + x(2311) + w + x(2198) + w + x(2493) + C + x(1172) + S + x(2095) + w + x(1741) + S + x(1017), e.async && (r += x(1910) + n + " = " + w + ".async; "), r += " " + w + x(1172) + w + x(1201), v && (r += " (" + h + x(1908) + h + " != 'string') || "), r += " (", m != x(2515) && (r += " (" + h + x(1041) + w + " ", b && (r += x(1216) + h + x(2333)), r += x(454)), r += " (" + w + x(2095) + C + " == '" + a + x(1036) + w + x(1170), e[x(545)] ? r += x(1942) + n + x(622) + w + "(" + u + x(1592) + w + "(" + u + ")) " : r += " " + w + "(" + u + ") ", r += x(1885) + w + x(1087) + u + x(2481);
    } else {
      var w = e.formats[c];
      if (!w) {
        if (m == x(2515)) return e[x(2339)][x(897)](x(1835) + c + x(1323) + e[x(771)] + '"'), l && (r += " if (true) { "), r;
        if (b && m[x(1562)](c) >= 0) return l && (r += x(838)), r;
        throw new Error('unknown format "' + c + x(1023) + e[x(771)] + '"');
      }
      var S = typeof w == x(692) && !(w instanceof RegExp) && w[x(1140)], C = S && w[x(1529)] || x(998);
      if (S) {
        var N = w.async === !0;
        w = w[x(1140)];
      }
      if (C != a) return l && (r += x(838)), r;
      if (N) {
        if (!e[x(545)]) throw new Error("async format in sync schema");
        var k = "formats" + e[x(1303)].getProperty(c) + x(2151);
        r += " if (!(await " + k + "(" + u + x(1539);
      } else {
        r += x(2015);
        var k = x(735) + e[x(1303)][x(601)](c);
        S && (k += x(2151)), typeof w == "function" ? r += " " + k + "(" + u + ") " : r += " " + k + x(1087) + u + ") ", r += x(1017);
      }
    }
    var E = E || [];
    E[x(2523)](r), r = "", e[x(1044)] !== !1 ? (r += x(2225) + x(2209) + x(2217) + e[x(1e3)] + x(1717) + e.util[x(1228)](d) + " , params: { format:  ", v ? r += "" + h : r += "" + e[x(1303)].toQuotedString(c), r += "  } ", e.opts.messages !== !1 && (r += x(857), v ? r += x(1310) + h + x(1306) : r += "" + e[x(1303)][x(791)](c), r += `"' `), e[x(1923)][x(1264)] && (r += x(1817), v ? r += x(1663) + f : r += "" + e[x(1303)][x(1228)](c), r += x(567) + e[x(2502)] + x(602) + u + " "), r += x(1460)) : r += x(1487);
    var I = r;
    return r = E.pop(), !e[x(750)] && l ? e.async ? r += x(457) + I + "]); " : r += x(2009) + I + x(1725) : r += x(1043) + I + x(562), r += x(1460), l && (r += x(1142)), r;
  }), st;
}
var nt, Qr;
function Oo() {
  return Qr || (Qr = 1, nt = function(e, t, a) {
    var x = B, r = " ", n = e[x(1737)], o = e.dataLevel, c = e[x(1331)][t], f = e.schemaPath + e[x(1303)].getProperty(t), d = e[x(771)] + "/" + t, l = !e[x(1923)][x(1975)], u = x(530) + (o || ""), v = x(977) + n, h = x(1879) + n, m = e.util[x(1949)](e);
    m.level++;
    var b = x(977) + m[x(1737)], w = e[x(1331)][x(2195)], S = e[x(1331)][x(1566)], C = w !== void 0 && (e[x(1923)][x(703)] ? typeof w == "object" && Object[x(870)](w).length > 0 || w === !1 : e[x(1303)][x(535)](w, e.RULES[x(799)])), N = S !== void 0 && (e[x(1923)].strictKeywords ? typeof S == x(692) && Object[x(870)](S)[x(1775)] > 0 || S === !1 : e[x(1303)][x(535)](S, e[x(1790)][x(799)])), k = m[x(1461)];
    if (C || N) {
      var E;
      m[x(1044)] = !1, m[x(1331)] = c, m[x(2502)] = f, m[x(771)] = d, r += x(1221) + h + x(935) + v + x(614);
      var I = e.compositeRule;
      e[x(750)] = m[x(750)] = !0, r += "  " + e[x(1140)](m) + " ", m[x(1461)] = k, m.createErrors = !0, r += x(1190) + h + x(473) + h + ") vErrors.length = " + h + x(2123), e.compositeRule = m[x(750)] = I, C ? (r += x(1166) + b + x(1825), m[x(1331)] = e.schema.then, m[x(2502)] = e[x(2502)] + ".then", m[x(771)] = e[x(771)] + "/then", r += "  " + e.validate(m) + " ", m.baseId = k, r += " " + v + x(1172) + b + "; ", C && N ? (E = x(697) + n, r += " var " + E + x(1961)) : E = "'then'", r += " } ", N && (r += x(1142))) : r += " if (!" + b + x(1017), N && (m[x(1331)] = e[x(1331)].else, m[x(2502)] = e[x(2502)] + x(553), m[x(771)] = e.errSchemaPath + x(2289), r += "  " + e[x(1140)](m) + " ", m[x(1461)] = k, r += " " + v + x(1172) + b + "; ", C && N ? (E = x(697) + n, r += x(1221) + E + " = 'else'; ") : E = "'else'", r += x(1460)), r += x(973) + v + ") {   var err =   ", e[x(1044)] !== !1 ? (r += x(2225) + "if' , dataPath: (dataPath || '') + " + e[x(1e3)] + x(1717) + e[x(1303)].toQuotedString(d) + x(913) + E + x(1460), e[x(1923)][x(1318)] !== !1 && (r += ` , message: 'should match "' + ` + E + x(1963)), e[x(1923)][x(1264)] && (r += " , schema: validate.schema" + f + x(995) + e[x(2502)] + x(602) + u + " "), r += x(1460)) : r += x(1487), r += ";  if (vErrors === null) vErrors = [err]; else vErrors.push(err); errors++; ", !e[x(750)] && l && (e[x(545)] ? r += x(1528) : r += x(2392)), r += x(1635), l && (r += " else { ");
    } else l && (r += " if (true) { ");
    return r;
  }), nt;
}
var it, Gr;
function qo() {
  return Gr || (Gr = 1, it = function(e, t, a) {
    var x = B, r = " ", n = e[x(1737)], o = e[x(2014)], c = e[x(1331)][t], f = e.schemaPath + e.util[x(601)](t), d = e[x(771)] + "/" + t, l = !e.opts[x(1975)], u = "data" + (o || ""), v = x(977) + n, h = "errs__" + n, m = e[x(1303)].copy(e), b = "";
    m[x(1737)]++;
    var w = x(977) + m.level, S = "i" + n, C = m.dataLevel = e[x(2014)] + 1, N = x(530) + C, k = e[x(1461)];
    if (r += x(774) + h + x(494) + v + ";", Array[x(2462)](c)) {
      var E = e[x(1331)].additionalItems;
      if (E === !1) {
        r += " " + v + x(1172) + u + x(2052) + c[x(1775)] + "; ";
        var I = d;
        d = e.errSchemaPath + "/additionalItems", r += "  if (!" + v + x(2307);
        var D = D || [];
        D[x(2523)](r), r = "", e[x(1044)] !== !1 ? (r += " { keyword: '" + x(2332) + x(2217) + e[x(1e3)] + " , schemaPath: " + e[x(1303)][x(1228)](d) + x(848) + c[x(1775)] + x(1460), e.opts[x(1318)] !== !1 && (r += x(1606) + c[x(1775)] + " items' "), e[x(1923)][x(1264)] && (r += " , schema: false , parentSchema: validate.schema" + e[x(2502)] + " , data: " + u + " "), r += " } ") : r += x(1487);
        var A = r;
        r = D[x(2443)](), !e[x(750)] && l ? e.async ? r += x(457) + A + x(914) : r += x(2009) + A + x(1725) : r += x(1043) + A + x(562), r += x(1460), d = I, l && (b += "}", r += x(1142));
      }
      var j = c;
      if (j) {
        for (var R, F = -1, H = j.length - 1; F < H; )
          if (R = j[F += 1], e.opts[x(703)] ? typeof R == x(692) && Object[x(870)](R).length > 0 || R === !1 : e[x(1303)][x(535)](R, e[x(1790)].all)) {
            r += " " + w + x(1756) + u + x(1411) + F + x(1017);
            var L = u + "[" + F + "]";
            m[x(1331)] = R, m.schemaPath = f + "[" + F + "]", m.errSchemaPath = d + "/" + F, m[x(1e3)] = e[x(1303)][x(1202)](e[x(1e3)], F, e[x(1923)][x(2144)], !0), m[x(984)][C] = F;
            var U = e[x(1140)](m);
            m[x(1461)] = k, e.util[x(2309)](U, N) < 2 ? r += " " + e[x(1303)][x(762)](U, N, L) + " " : r += x(1221) + N + x(1172) + L + "; " + U + " ", r += x(1867), l && (r += x(1166) + w + x(1017), b += "}");
          }
      }
      if (typeof E == "object" && (e.opts[x(703)] ? typeof E == x(692) && Object[x(870)](E).length > 0 || E === !1 : e[x(1303)][x(535)](E, e[x(1790)].all))) {
        m[x(1331)] = E, m.schemaPath = e.schemaPath + x(2497), m[x(771)] = e[x(771)] + "/additionalItems", r += " " + w + x(1756) + u + x(1411) + c.length + x(1434) + S + x(1172) + c[x(1775)] + "; " + S + x(1899) + u + ".length; " + S + x(1540), m.errorPath = e.util[x(1202)](e[x(1e3)], S, e[x(1923)][x(2144)], !0);
        var L = u + "[" + S + "]";
        m[x(984)][C] = S;
        var U = e[x(1140)](m);
        m.baseId = k, e[x(1303)][x(2309)](U, N) < 2 ? r += " " + e[x(1303)].varReplace(U, N, L) + " " : r += x(1221) + N + x(1172) + L + "; " + U + " ", l && (r += x(973) + w + ") break; "), r += x(1039), l && (r += " if (" + w + x(1017), b += "}");
      }
    } else if (e[x(1923)][x(703)] ? typeof c == x(692) && Object[x(870)](c)[x(1775)] > 0 || c === !1 : e.util[x(535)](c, e[x(1790)][x(799)])) {
      m[x(1331)] = c, m.schemaPath = f, m[x(771)] = d, r += x(1081) + S + x(1172) + 0 + "; " + S + x(1899) + u + x(1491) + S + x(1540), m[x(1e3)] = e.util[x(1202)](e[x(1e3)], S, e[x(1923)][x(2144)], !0);
      var L = u + "[" + S + "]";
      m[x(984)][C] = S;
      var U = e[x(1140)](m);
      m[x(1461)] = k, e.util[x(2309)](U, N) < 2 ? r += " " + e[x(1303)][x(762)](U, N, L) + " " : r += " var " + N + x(1172) + L + "; " + U + " ", l && (r += x(973) + w + ") break; "), r += " }";
    }
    return l && (r += " " + b + x(1166) + h + x(1763)), r;
  }), it;
}
var ot, Yr;
function Xr() {
  return Yr || (Yr = 1, ot = function(e, t, a) {
    var x = B, r = " ", n = e[x(1737)], o = e[x(2014)], c = e.schema[t], f = e[x(2502)] + e.util[x(601)](t), d = e.errSchemaPath + "/" + t, l = !e[x(1923)][x(1975)], k, u = x(530) + (o || ""), v = e.opts[x(2223)] && c && c.$data, h;
    v ? (r += x(1902) + n + x(1172) + e.util[x(1182)](c[x(2223)], o, e.dataPathArr) + "; ", h = x(1331) + n) : h = c;
    var m = t == x(1219), b = x(m ? 641 : 2408), w = e[x(1331)][b], S = e.opts[x(2223)] && w && w[x(2223)], C = m ? "<" : ">", N = m ? ">" : "<", k = void 0;
    if (!(v || typeof c == "number" || c === void 0)) throw new Error(t + x(1589));
    if (!(S || w === void 0 || typeof w == x(1225) || typeof w == x(2529))) throw new Error(b + x(711));
    if (S) {
      var E = e[x(1303)][x(1182)](w[x(2223)], o, e[x(984)]), I = x(1046) + n, D = x(861) + n, A = "exclIsNumber" + n, j = "op" + n, R = x(1310) + j + " + '";
      r += x(1326) + n + x(1172) + E + "; ", E = "schemaExcl" + n, r += x(1221) + I + x(1177) + D + x(1969) + E + x(1781) + D + x(1287) + D + x(2081) + D + " != 'number') { ";
      var k = b, F = F || [];
      F.push(r), r = "", e[x(1044)] !== !1 ? (r += x(2225) + (k || x(624)) + x(2217) + e[x(1e3)] + x(1717) + e[x(1303)].toQuotedString(d) + x(794), e[x(1923)].messages !== !1 && (r += x(1758) + b + x(482)), e[x(1923)].verbose && (r += x(1234) + f + x(995) + e.schemaPath + " , data: " + u + " "), r += x(1460)) : r += " {} ";
      var H = r;
      r = F[x(2443)](), !e[x(750)] && l ? e.async ? r += x(457) + H + x(914) : r += " validate.errors = [" + H + x(1725) : r += x(1043) + H + x(562), r += x(1897), v && (r += " (" + h + " !== undefined && typeof " + h + x(691)), r += " " + D + x(1941) + I + x(1172) + h + x(1341) + E + " " + C + "= " + h + x(930) + u + " " + N + "= " + E + x(1885) + u + " " + N + " " + h + " ) : ( (" + I + x(1172) + E + x(1896) + u + " " + N + "= " + h + " : " + u + " " + N + " " + h + x(1605) + u + " !== " + u + x(2107) + n + x(1172) + I + x(1171) + C + x(883) + C + "='; ", c === void 0 && (k = b, d = e.errSchemaPath + "/" + b, h = E, v = S);
    } else {
      var A = typeof w == x(1225), R = C;
      if (A && v) {
        var j = "'" + R + "'";
        r += x(662), v && (r += " (" + h + x(1908) + h + x(691)), r += x(1847) + h + x(1341) + w + " " + C + "= " + h + x(441) + u + " " + N + "= " + w + x(1885) + u + " " + N + " " + h + x(1605) + u + x(904) + u + ") { ";
      } else {
        A && c === void 0 ? (I = !0, k = b, d = e.errSchemaPath + "/" + b, h = w, N += "=") : (A && (h = Math[x(m ? 2369 : 723)](w, c)), w === (A ? h : !0) ? (I = !0, k = b, d = e.errSchemaPath + "/" + b, N += "=") : (I = !1, R += "="));
        var j = "'" + R + "'";
        r += " if ( ", v && (r += " (" + h + x(1908) + h + x(691)), r += " " + u + " " + N + " " + h + x(2281) + u + x(904) + u + x(1017);
      }
    }
    k = k || t;
    var F = F || [];
    F.push(r), r = "", e[x(1044)] !== !1 ? (r += x(2225) + (k || x(1588)) + x(2217) + e[x(1e3)] + x(1717) + e[x(1303)][x(1228)](d) + " , params: { comparison: " + j + x(845) + h + ", exclusive: " + I + x(1460), e[x(1923)][x(1318)] !== !1 && (r += x(1470) + R + " ", v ? r += x(1310) + h : r += "" + h + "'"), e[x(1923)][x(1264)] && (r += x(1817), v ? r += x(1663) + f : r += "" + c, r += x(567) + e[x(2502)] + " , data: " + u + " "), r += " } ") : r += x(1487);
    var H = r;
    return r = F[x(2443)](), !e[x(750)] && l ? e[x(545)] ? r += x(457) + H + x(914) : r += x(2009) + H + "]; return false; " : r += x(1043) + H + ";  if (vErrors === null) vErrors = [err]; else vErrors.push(err); errors++; ", r += " } ", l && (r += x(1142)), r;
  }), ot;
}
var ct, _r;
function xa() {
  return _r || (_r = 1, ct = function(e, t, a) {
    var x = B, r = " ", n = e[x(1737)], o = e.dataLevel, c = e[x(1331)][t], f = e[x(2502)] + e[x(1303)][x(601)](t), d = e[x(771)] + "/" + t, l = !e[x(1923)][x(1975)], b, u = x(530) + (o || ""), v = e.opts[x(2223)] && c && c[x(2223)], h;
    if (v ? (r += x(1902) + n + x(1172) + e.util.getData(c[x(2223)], o, e[x(984)]) + "; ", h = x(1331) + n) : h = c, !(v || typeof c == x(1225))) throw new Error(t + x(1589));
    var m = t == x(2472) ? ">" : "<";
    r += x(1698), v && (r += " (" + h + " !== undefined && typeof " + h + x(691)), r += " " + u + x(1444) + m + " " + h + x(1017);
    var b = t, w = w || [];
    w[x(2523)](r), r = "", e[x(1044)] !== !1 ? (r += " { keyword: '" + (b || x(2175)) + x(2217) + e[x(1e3)] + " , schemaPath: " + e.util[x(1228)](d) + " , params: { limit: " + h + x(1460), e[x(1923)][x(1318)] !== !1 && (r += x(1070), t == x(2472) ? r += x(1089) : r += x(1755), r += " than ", v ? r += x(1310) + h + x(1306) : r += "" + c, r += x(1309)), e.opts[x(1264)] && (r += " , schema:  ", v ? r += x(1663) + f : r += "" + c, r += x(567) + e[x(2502)] + " , data: " + u + " "), r += x(1460)) : r += x(1487);
    var S = r;
    return r = w[x(2443)](), !e[x(750)] && l ? e[x(545)] ? r += x(457) + S + x(914) : r += x(2009) + S + x(1725) : r += x(1043) + S + ";  if (vErrors === null) vErrors = [err]; else vErrors.push(err); errors++; ", r += "} ", l && (r += x(1142)), r;
  }), ct;
}
var ft, ea;
function ta() {
  return ea || (ea = 1, ft = function(e, t, a) {
    var x = B, r = " ", n = e[x(1737)], o = e[x(2014)], c = e[x(1331)][t], f = e[x(2502)] + e[x(1303)][x(601)](t), d = e.errSchemaPath + "/" + t, l = !e.opts[x(1975)], b, u = x(530) + (o || ""), v = e[x(1923)][x(2223)] && c && c.$data, h;
    if (v ? (r += x(1902) + n + x(1172) + e[x(1303)][x(1182)](c[x(2223)], o, e[x(984)]) + "; ", h = x(1331) + n) : h = c, !(v || typeof c == x(1225))) throw new Error(t + x(1589));
    var m = t == "maxLength" ? ">" : "<";
    r += x(1698), v && (r += " (" + h + x(1908) + h + x(691)), e[x(1923)][x(1891)] === !1 ? r += " " + u + x(1444) : r += x(2187) + u + ") ", r += " " + m + " " + h + ") { ";
    var b = t, w = w || [];
    w[x(2523)](r), r = "", e[x(1044)] !== !1 ? (r += x(2225) + (b || x(2086)) + x(2217) + e.errorPath + " , schemaPath: " + e[x(1303)][x(1228)](d) + x(848) + h + " } ", e[x(1923)][x(1318)] !== !1 && (r += x(2390), t == x(1870) ? r += "longer" : r += "shorter", r += x(1160), v ? r += "' + " + h + x(1306) : r += "" + c, r += x(1278)), e[x(1923)][x(1264)] && (r += " , schema:  ", v ? r += x(1663) + f : r += "" + c, r += "         , parentSchema: validate.schema" + e[x(2502)] + " , data: " + u + " "), r += x(1460)) : r += x(1487);
    var S = r;
    return r = w[x(2443)](), !e[x(750)] && l ? e[x(545)] ? r += x(457) + S + x(914) : r += x(2009) + S + "]; return false; " : r += x(1043) + S + x(562), r += "} ", l && (r += x(1142)), r;
  }), ft;
}
var dt, ra;
function aa() {
  return ra || (ra = 1, dt = function(e, t, a) {
    var x = B, r = " ", n = e.level, o = e[x(2014)], c = e[x(1331)][t], f = e.schemaPath + e.util[x(601)](t), d = e[x(771)] + "/" + t, l = !e[x(1923)][x(1975)], b, u = x(530) + (o || ""), v = e[x(1923)].$data && c && c[x(2223)], h;
    if (v ? (r += x(1902) + n + " = " + e[x(1303)][x(1182)](c[x(2223)], o, e[x(984)]) + "; ", h = x(1331) + n) : h = c, !(v || typeof c == x(1225))) throw new Error(t + x(1589));
    var m = t == "maxProperties" ? ">" : "<";
    r += "if ( ", v && (r += " (" + h + x(1908) + h + x(691)), r += x(1500) + u + ").length " + m + " " + h + x(1017);
    var b = t, w = w || [];
    w[x(2523)](r), r = "", e[x(1044)] !== !1 ? (r += x(2225) + (b || x(2525)) + "' , dataPath: (dataPath || '') + " + e[x(1e3)] + x(1717) + e[x(1303)][x(1228)](d) + x(848) + h + " } ", e[x(1923)].messages !== !1 && (r += " , message: 'should NOT have ", t == x(2120) ? r += x(1089) : r += x(1755), r += " than ", v ? r += x(1310) + h + x(1306) : r += "" + c, r += x(820)), e.opts[x(1264)] && (r += " , schema:  ", v ? r += x(1663) + f : r += "" + c, r += x(567) + e[x(2502)] + " , data: " + u + " "), r += x(1460)) : r += " {} ";
    var S = r;
    return r = w[x(2443)](), !e[x(750)] && l ? e.async ? r += x(457) + S + x(914) : r += " validate.errors = [" + S + x(1725) : r += x(1043) + S + ";  if (vErrors === null) vErrors = [err]; else vErrors.push(err); errors++; ", r += "} ", l && (r += x(1142)), r;
  }), dt;
}
var ut, sa;
function Ao() {
  return sa || (sa = 1, ut = function(e, t, a) {
    var x = B, r = " ", n = e[x(1737)], o = e[x(2014)], c = e[x(1331)][t], f = e[x(2502)] + e[x(1303)].getProperty(t), d = e[x(771)] + "/" + t, l = !e[x(1923)][x(1975)], u = x(530) + (o || ""), v = e.opts[x(2223)] && c && c.$data, h;
    if (v ? (r += " var schema" + n + x(1172) + e.util[x(1182)](c[x(2223)], o, e[x(984)]) + "; ", h = x(1331) + n) : h = c, !(v || typeof c == x(1225))) throw new Error(t + x(1589));
    r += "var division" + n + x(1011), v && (r += " " + h + x(2037) + h + x(909)), r += x(2119) + n + x(1172) + u + " / " + h + ", ", e[x(1923)][x(993)] ? r += x(1462) + n + x(1761) + n + x(1082) + e.opts[x(993)] + " " : r += x(1496) + n + " !== parseInt(division" + n + ") ", r += x(2043), v && (r += "  )  "), r += x(2268);
    var m = m || [];
    m[x(2523)](r), r = "", e.createErrors !== !1 ? (r += x(2225) + x(1718) + "' , dataPath: (dataPath || '') + " + e[x(1e3)] + x(1717) + e[x(1303)].toQuotedString(d) + x(903) + h + x(1460), e[x(1923)][x(1318)] !== !1 && (r += x(1524), v ? r += x(1310) + h : r += "" + h + "'"), e[x(1923)][x(1264)] && (r += x(1817), v ? r += x(1663) + f : r += "" + c, r += x(567) + e.schemaPath + x(602) + u + " "), r += x(1460)) : r += " {} ";
    var b = r;
    return r = m[x(2443)](), !e.compositeRule && l ? e[x(545)] ? r += x(457) + b + x(914) : r += x(2009) + b + "]; return false; " : r += x(1043) + b + x(562), r += "} ", l && (r += x(1142)), r;
  }), ut;
}
var lt, na;
function To() {
  return na || (na = 1, lt = function(e, t, a) {
    var x = B, r = " ", n = e[x(1737)], o = e[x(2014)], c = e[x(1331)][t], f = e[x(2502)] + e[x(1303)].getProperty(t), d = e[x(771)] + "/" + t, l = !e.opts[x(1975)], u = "data" + (o || ""), v = x(1879) + n, h = e[x(1303)][x(1949)](e);
    h.level++;
    var m = x(977) + h[x(1737)];
    if (e[x(1923)].strictKeywords ? typeof c == x(692) && Object[x(870)](c)[x(1775)] > 0 || c === !1 : e[x(1303)].schemaHasRules(c, e[x(1790)][x(799)])) {
      h[x(1331)] = c, h[x(2502)] = f, h.errSchemaPath = d, r += x(1221) + v + x(1729);
      var b = e[x(750)];
      e.compositeRule = h[x(750)] = !0, h.createErrors = !1;
      var w;
      h[x(1923)][x(1975)] && (w = h[x(1923)][x(1975)], h[x(1923)].allErrors = !1), r += " " + e[x(1140)](h) + " ", h[x(1044)] = !0, w && (h[x(1923)][x(1975)] = w), e[x(750)] = h[x(750)] = b, r += x(1166) + m + x(2307);
      var S = S || [];
      S[x(2523)](r), r = "", e[x(1044)] !== !1 ? (r += x(2225) + "not" + x(2217) + e[x(1e3)] + x(1717) + e[x(1303)][x(1228)](d) + x(794), e.opts[x(1318)] !== !1 && (r += x(902)), e[x(1923)].verbose && (r += " , schema: validate.schema" + f + x(995) + e.schemaPath + x(602) + u + " "), r += x(1460)) : r += x(1487);
      var C = r;
      r = S[x(2443)](), !e[x(750)] && l ? e[x(545)] ? r += x(457) + C + x(914) : r += x(2009) + C + "]; return false; " : r += x(1043) + C + ";  if (vErrors === null) vErrors = [err]; else vErrors.push(err); errors++; ", r += x(1668) + v + x(473) + v + ") vErrors.length = " + v + x(1450), e[x(1923)][x(1975)] && (r += x(1460));
    } else r += x(500), e[x(1044)] !== !1 ? (r += x(2225) + "not" + x(2217) + e[x(1e3)] + x(1717) + e.util[x(1228)](d) + x(794), e[x(1923)].messages !== !1 && (r += x(902)), e[x(1923)][x(1264)] && (r += " , schema: validate.schema" + f + x(995) + e[x(2502)] + x(602) + u + " "), r += x(1460)) : r += x(1487), r += x(562), l && (r += x(1868));
    return r;
  }), lt;
}
var ht, ia;
function Do() {
  return ia || (ia = 1, ht = function(e, t, a) {
    var x = B, r = " ", n = e[x(1737)], o = e[x(2014)], c = e[x(1331)][t], f = e.schemaPath + e[x(1303)][x(601)](t), d = e[x(771)] + "/" + t, l = !e[x(1923)].allErrors, u = "data" + (o || ""), v = x(977) + n, h = x(1879) + n, m = e.util[x(1949)](e), b = "";
    m[x(1737)]++;
    var w = x(977) + m[x(1737)], S = m[x(1461)], C = x(1459) + n, N = x(2163) + n;
    r += "var " + h + x(1515) + C + " = false , " + v + x(1665) + N + x(456);
    var k = e[x(750)];
    e[x(750)] = m[x(750)] = !0;
    var E = c;
    if (E)
      for (var I, D = -1, A = E[x(1775)] - 1; D < A; )
        I = E[D += 1], (e[x(1923)][x(703)] ? typeof I == x(692) && Object[x(870)](I)[x(1775)] > 0 || I === !1 : e.util.schemaHasRules(I, e[x(1790)].all)) ? (m.schema = I, m[x(2502)] = f + "[" + D + "]", m.errSchemaPath = d + "/" + D, r += "  " + e[x(1140)](m) + " ", m[x(1461)] = S) : r += " var " + w + x(1442), D && (r += x(1166) + w + " && " + C + x(1017) + v + x(452) + N + x(2532) + N + ", " + D + x(877), b += "}"), r += " if (" + w + x(1017) + v + x(1172) + C + x(1442) + N + x(1172) + D + "; }";
    return e.compositeRule = m[x(750)] = k, r += "" + b + x(685) + v + x(2031), e[x(1044)] !== !1 ? (r += x(2225) + x(1513) + x(2217) + e[x(1e3)] + " , schemaPath: " + e.util[x(1228)](d) + x(767) + N + x(1460), e[x(1923)][x(1318)] !== !1 && (r += x(818)), e[x(1923)][x(1264)] && (r += x(1234) + f + x(995) + e[x(2502)] + x(602) + u + " "), r += x(1460)) : r += x(1487), r += x(562), !e[x(750)] && l && (e[x(545)] ? r += " throw new ValidationError(vErrors); " : r += x(2392)), r += x(1916) + h + x(473) + h + x(854) + h + x(916), e[x(1923)][x(1975)] && (r += x(1460)), r;
  }), ht;
}
var pt, oa;
function jo() {
  return oa || (oa = 1, pt = function(e, t, a) {
    var x = B, r = " ", n = e.level, o = e[x(2014)], c = e.schema[t], f = e[x(2502)] + e.util.getProperty(t), d = e[x(771)] + "/" + t, l = !e[x(1923)].allErrors, u = x(530) + (o || ""), v = e[x(1923)].$data && c && c[x(2223)], h;
    v ? (r += x(1902) + n + " = " + e[x(1303)][x(1182)](c.$data, o, e[x(984)]) + "; ", h = x(1331) + n) : h = c;
    var m = v ? x(1257) + h + "))" : e[x(2365)](c);
    r += x(1698), v && (r += " (" + h + " !== undefined && typeof " + h + x(1079)), r += " !" + m + x(1087) + u + x(1954);
    var b = b || [];
    b[x(2523)](r), r = "", e[x(1044)] !== !1 ? (r += x(2225) + "pattern" + x(2217) + e.errorPath + x(1717) + e.util[x(1228)](d) + x(1789), v ? r += "" + h : r += "" + e.util[x(1228)](c), r += x(1136), e[x(1923)][x(1318)] !== !1 && (r += x(525), v ? r += x(1310) + h + x(1306) : r += "" + e[x(1303)][x(791)](c), r += `"' `), e[x(1923)][x(1264)] && (r += " , schema:  ", v ? r += "validate.schema" + f : r += "" + e[x(1303)].toQuotedString(c), r += x(567) + e.schemaPath + x(602) + u + " "), r += x(1460)) : r += x(1487);
    var w = r;
    return r = b[x(2443)](), !e[x(750)] && l ? e[x(545)] ? r += " throw new ValidationError([" + w + "]); " : r += x(2009) + w + x(1725) : r += x(1043) + w + x(562), r += "} ", l && (r += " else { "), r;
  }), pt;
}
function B(i, e) {
  var t = me();
  return B = function(a, x) {
    a = a - 436;
    var r = t[a];
    return r;
  }, B(i, e);
}
var vt, ca;
function Mo() {
  return ca || (ca = 1, vt = function(e, t, a) {
    var x = B, r = " ", n = e[x(1737)], o = e[x(2014)], c = e[x(1331)][t], f = e[x(2502)] + e[x(1303)][x(601)](t), d = e[x(771)] + "/" + t, l = !e[x(1923)][x(1975)], u = "data" + (o || ""), v = "errs__" + n, h = e[x(1303)][x(1949)](e), m = "";
    h[x(1737)]++;
    var b = "valid" + h[x(1737)], w = x(2477) + n, S = x(2302) + n, C = h.dataLevel = e[x(2014)] + 1, N = x(530) + C, k = "dataProperties" + n, E = Object[x(870)](c || {})[x(2173)](c0), I = e[x(1331)][x(1002)] || {}, D = Object[x(870)](I)[x(2173)](c0), A = e[x(1331)][x(1976)], j = E[x(1775)] || D[x(1775)], R = A === !1, F = typeof A == x(692) && Object[x(870)](A)[x(1775)], H = e[x(1923)].removeAdditional, L = R || F || H, U = e[x(1923)][x(2324)], J = e[x(1461)], t0 = e.schema[x(1699)];
    if (t0 && !(e.opts[x(2223)] && t0[x(2223)]) && t0[x(1775)] < e[x(1923)][x(2109)]) var e0 = e.util[x(2460)](t0);
    function c0(je) {
      return je !== "__proto__";
    }
    if (r += "var " + v + x(494) + b + x(2142), U && (r += x(1221) + k + x(1864)), L) {
      if (U ? r += " " + k + x(1172) + k + " || Object.keys(" + u + "); for (var " + S + x(1523) + S + "<" + k + x(1491) + S + x(1325) + w + " = " + k + "[" + S + x(841) : r += x(1648) + w + x(633) + u + x(1017), j) {
        if (r += x(608) + n + x(2077), E[x(1775)])
          if (E.length > 8) r += x(459) + f + ".hasOwnProperty(" + w + ") ";
          else {
            var u0 = E;
            if (u0)
              for (var d0, g0 = -1, y0 = u0.length - 1; g0 < y0; )
                d0 = u0[g0 += 1], r += x(2281) + w + x(1658) + e[x(1303)].toQuotedString(d0) + " ";
          }
        if (D[x(1775)]) {
          var D0 = D;
          if (D0)
            for (var S0, J0 = -1, T = D0[x(1775)] - 1; J0 < T; )
              S0 = D0[J0 += 1], r += x(2281) + e[x(2365)](S0) + ".test(" + w + ") ";
        }
        r += x(1124) + n + x(1017);
      }
      if (H == x(799)) r += x(1590) + u + "[" + w + x(841);
      else {
        var O = e[x(1e3)], $ = "' + " + w + " + '";
        if (e.opts[x(1344)] && (e.errorPath = e.util.getPathExpr(e[x(1e3)], w, e.opts[x(2144)])), R)
          if (H) r += " delete " + u + "[" + w + x(841);
          else {
            r += " " + b + x(452);
            var Q = d;
            d = e.errSchemaPath + x(1611);
            var G = G || [];
            G[x(2523)](r), r = "", e[x(1044)] !== !1 ? (r += x(2225) + x(1976) + x(2217) + e[x(1e3)] + x(1717) + e.util.toQuotedString(d) + x(933) + $ + x(1231), e[x(1923)].messages !== !1 && (r += x(1758), e[x(1923)]._errorDataPathProperty ? r += x(1249) : r += x(740), r += "' "), e[x(1923)].verbose && (r += x(2265) + e[x(2502)] + x(602) + u + " "), r += x(1460)) : r += " {} ";
            var Z = r;
            r = G[x(2443)](), !e[x(750)] && l ? e[x(545)] ? r += x(457) + Z + x(914) : r += x(2009) + Z + x(1725) : r += x(1043) + Z + ";  if (vErrors === null) vErrors = [err]; else vErrors.push(err); errors++; ", d = Q, l && (r += x(1937));
          }
        else if (F)
          if (H == x(804)) {
            r += " var " + v + " = errors;  ";
            var Y = e[x(750)];
            e[x(750)] = h[x(750)] = !0, h[x(1331)] = A, h[x(2502)] = e[x(2502)] + x(1241), h[x(771)] = e[x(771)] + "/additionalProperties", h.errorPath = e[x(1923)][x(1344)] ? e[x(1e3)] : e[x(1303)][x(1202)](e.errorPath, w, e.opts.jsonPointers);
            var a0 = u + "[" + w + "]";
            h[x(984)][C] = w;
            var n0 = e.validate(h);
            h[x(1461)] = J, e[x(1303)][x(2309)](n0, N) < 2 ? r += " " + e[x(1303)].varReplace(n0, N, a0) + " " : r += x(1221) + N + x(1172) + a0 + "; " + n0 + " ", r += x(973) + b + x(1575) + v + x(1965) + u + "[" + w + x(1388), e[x(750)] = h[x(750)] = Y;
          } else {
            h[x(1331)] = A, h[x(2502)] = e[x(2502)] + x(1241), h[x(771)] = e[x(771)] + x(1611), h[x(1e3)] = e[x(1923)][x(1344)] ? e[x(1e3)] : e[x(1303)][x(1202)](e[x(1e3)], w, e.opts[x(2144)]);
            var a0 = u + "[" + w + "]";
            h.dataPathArr[C] = w;
            var n0 = e.validate(h);
            h[x(1461)] = J, e[x(1303)][x(2309)](n0, N) < 2 ? r += " " + e[x(1303)][x(762)](n0, N, a0) + " " : r += x(1221) + N + x(1172) + a0 + "; " + n0 + " ", l && (r += x(973) + b + x(1834));
          }
        e.errorPath = O;
      }
      j && (r += " } "), r += x(1867), l && (r += x(1166) + b + ") { ", m += "}");
    }
    var _ = e[x(1923)][x(626)] && !e.compositeRule;
    if (E[x(1775)]) {
      var j0 = E;
      if (j0)
        for (var d0, F0 = -1, L0 = j0[x(1775)] - 1; F0 < L0; ) {
          d0 = j0[F0 += 1];
          var b0 = c[d0];
          if (e[x(1923)][x(703)] ? typeof b0 == x(692) && Object[x(870)](b0)[x(1775)] > 0 || b0 === !1 : e[x(1303)][x(535)](b0, e[x(1790)][x(799)])) {
            var W0 = e[x(1303)][x(601)](d0), a0 = u + W0, nx = _ && b0[x(2178)] !== void 0;
            h[x(1331)] = b0, h[x(2502)] = f + W0, h[x(771)] = d + "/" + e[x(1303)][x(2474)](d0), h[x(1e3)] = e[x(1303)].getPath(e[x(1e3)], d0, e[x(1923)][x(2144)]), h[x(984)][C] = e[x(1303)][x(1228)](d0);
            var n0 = e[x(1140)](h);
            if (h[x(1461)] = J, e[x(1303)][x(2309)](n0, N) < 2) {
              n0 = e[x(1303)].varReplace(n0, N, a0);
              var Q0 = a0;
            } else {
              var Q0 = N;
              r += " var " + N + x(1172) + a0 + "; ";
            }
            if (nx) r += " " + n0 + " ";
            else {
              if (e0 && e0[d0]) {
                r += x(662) + Q0 + x(1709), U && (r += " || ! Object.prototype.hasOwnProperty.call(" + u + ", '" + e[x(1303)].escapeQuotes(d0) + x(1423)), r += x(1017) + b + x(452);
                var O = e[x(1e3)], Q = d, O0 = e[x(1303)].escapeQuotes(d0);
                e.opts[x(1344)] && (e.errorPath = e[x(1303)][x(918)](O, d0, e.opts[x(2144)])), d = e.errSchemaPath + x(1728);
                var G = G || [];
                G[x(2523)](r), r = "", e[x(1044)] !== !1 ? (r += " { keyword: '" + x(1699) + "' , dataPath: (dataPath || '') + " + e[x(1e3)] + x(1717) + e[x(1303)][x(1228)](d) + x(1493) + O0 + x(1231), e.opts[x(1318)] !== !1 && (r += x(1758), e[x(1923)][x(1344)] ? r += x(510) : r += x(2150) + O0 + "\\'", r += "' "), e[x(1923)][x(1264)] && (r += " , schema: validate.schema" + f + x(995) + e[x(2502)] + " , data: " + u + " "), r += " } ") : r += x(1487);
                var Z = r;
                r = G[x(2443)](), !e[x(750)] && l ? e.async ? r += x(457) + Z + x(914) : r += x(2009) + Z + x(1725) : r += x(1043) + Z + x(562), d = Q, e[x(1e3)] = O, r += x(2407);
              } else l ? (r += x(662) + Q0 + x(1709), U && (r += x(879) + u + x(1640) + e[x(1303)][x(791)](d0) + x(1423)), r += x(1017) + b + x(1418)) : (r += x(1166) + Q0 + x(1158), U && (r += " &&   Object.prototype.hasOwnProperty.call(" + u + ", '" + e[x(1303)].escapeQuotes(d0) + x(1423)), r += x(1760));
              r += " " + n0 + x(1460);
            }
          }
          l && (r += x(1166) + b + x(1017), m += "}");
        }
    }
    if (D[x(1775)]) {
      var z0 = D;
      if (z0)
        for (var S0, X0 = -1, Bx = z0.length - 1; X0 < Bx; ) {
          S0 = z0[X0 += 1];
          var b0 = I[S0];
          if (e[x(1923)][x(703)] ? typeof b0 == x(692) && Object[x(870)](b0)[x(1775)] > 0 || b0 === !1 : e[x(1303)][x(535)](b0, e.RULES[x(799)])) {
            h[x(1331)] = b0, h.schemaPath = e[x(2502)] + x(1647) + e[x(1303)][x(601)](S0), h[x(771)] = e[x(771)] + x(1096) + e[x(1303)][x(2474)](S0), U ? r += " " + k + x(1172) + k + x(2258) + u + x(449) + S + x(1523) + S + "<" + k + ".length; " + S + "++) { var " + w + x(1172) + k + "[" + S + x(841) : r += x(1648) + w + x(633) + u + x(1017), r += " if (" + e[x(2365)](S0) + x(1087) + w + x(2383), h.errorPath = e[x(1303)][x(1202)](e.errorPath, w, e[x(1923)][x(2144)]);
            var a0 = u + "[" + w + "]";
            h.dataPathArr[C] = w;
            var n0 = e.validate(h);
            h.baseId = J, e.util[x(2309)](n0, N) < 2 ? r += " " + e[x(1303)].varReplace(n0, N, a0) + " " : r += x(1221) + N + x(1172) + a0 + "; " + n0 + " ", l && (r += x(973) + b + ") break; "), r += x(1460), l && (r += x(584) + b + x(1442)), r += x(1867), l && (r += x(1166) + b + x(1017), m += "}");
          }
        }
    }
    return l && (r += " " + m + x(1166) + v + x(1763)), r;
  }), vt;
}
var mt, fa;
function $o() {
  return fa || (fa = 1, mt = function(e, t, a) {
    var x = B, r = " ", n = e[x(1737)], o = e[x(2014)], c = e[x(1331)][t], f = e[x(2502)] + e[x(1303)][x(601)](t), d = e.errSchemaPath + "/" + t, l = !e.opts[x(1975)], u = "data" + (o || ""), v = "errs__" + n, h = e[x(1303)][x(1949)](e), m = "";
    h[x(1737)]++;
    var b = x(977) + h[x(1737)];
    if (r += "var " + v + " = errors;", e[x(1923)].strictKeywords ? typeof c == x(692) && Object[x(870)](c)[x(1775)] > 0 || c === !1 : e.util[x(535)](c, e[x(1790)][x(799)])) {
      h[x(1331)] = c, h[x(2502)] = f, h.errSchemaPath = d;
      var w = x(2477) + n, S = x(2302) + n, C = "i" + n, N = x(1310) + w + x(1306), k = h.dataLevel = e[x(2014)] + 1, E = x(530) + k, I = x(1841) + n, D = e[x(1923)].ownProperties, A = e[x(1461)];
      D && (r += x(1221) + I + x(756)), D ? r += " " + I + x(1172) + I + " || Object.keys(" + u + x(449) + S + x(1523) + S + "<" + I + x(1491) + S + x(1325) + w + " = " + I + "[" + S + x(841) : r += x(1648) + w + x(633) + u + x(1017), r += x(1075) + n + x(945);
      var j = w, R = e[x(750)];
      e[x(750)] = h.compositeRule = !0;
      var F = e[x(1140)](h);
      h[x(1461)] = A, e[x(1303)][x(2309)](F, E) < 2 ? r += " " + e[x(1303)][x(762)](F, E, j) + " " : r += x(1221) + E + x(1172) + j + "; " + F + " ", e[x(750)] = h.compositeRule = R, r += x(973) + b + x(2256) + C + x(1650) + n + "; " + C + x(1733) + C + x(2158) + C + "].propertyName = " + w + "; }   var err =   ", e[x(1044)] !== !1 ? (r += " { keyword: '" + x(1597) + x(2217) + e[x(1e3)] + " , schemaPath: " + e[x(1303)].toQuotedString(d) + x(1555) + N + "' } ", e[x(1923)].messages !== !1 && (r += " , message: 'property name \\'" + N + x(632)), e.opts[x(1264)] && (r += x(1234) + f + x(995) + e.schemaPath + x(602) + u + " "), r += " } ") : r += " {} ", r += x(562), !e[x(750)] && l && (e[x(545)] ? r += x(1528) : r += " validate.errors = vErrors; return false; "), l && (r += x(1937)), r += x(717);
    }
    return l && (r += " " + m + x(1166) + v + x(1763)), r;
  }), mt;
}
var gt, da;
function Lo() {
  return da || (da = 1, gt = function(e, t, a) {
    var x = B, r = " ", n = e.level, o = e.dataLevel, c = e[x(1331)][t], f = e[x(2502)] + e.util[x(601)](t), d = e[x(771)] + "/" + t, l = !e[x(1923)][x(1975)], u = "data" + (o || ""), v = x(977) + n, h = e.opts[x(2223)] && c && c[x(2223)];
    h && (r += " var schema" + n + " = " + e[x(1303)][x(1182)](c[x(2223)], o, e[x(984)]) + "; ");
    var m = x(1331) + n;
    if (!h)
      if (c.length < e[x(1923)][x(2109)] && e.schema[x(960)] && Object.keys(e[x(1331)].properties).length) {
        var k = [], b = c;
        if (b)
          for (var w, S = -1, C = b.length - 1; S < C; ) {
            w = b[S += 1];
            var N = e[x(1331)][x(960)][w];
            !(N && (e.opts[x(703)] ? typeof N == x(692) && Object[x(870)](N).length > 0 || N === !1 : e[x(1303)][x(535)](N, e[x(1790)].all))) && (k[k.length] = w);
          }
      } else var k = c;
    if (h || k[x(1775)]) {
      var E = e[x(1e3)], I = h || k[x(1775)] >= e[x(1923)][x(2109)], D = e[x(1923)][x(2324)];
      if (l)
        if (r += " var missing" + n + "; ", I) {
          !h && (r += x(1221) + m + x(1695) + f + "; ");
          var A = "i" + n, j = x(1331) + n + "[" + A + "]", R = "' + " + j + x(1306);
          e[x(1923)][x(1344)] && (e.errorPath = e.util[x(1202)](E, j, e[x(1923)][x(2144)])), r += x(1221) + v + x(1442), h && (r += x(670) + n + x(1586) + v + x(2328) + n + x(2368) + v + x(1373)), r += " for (var " + A + x(961) + A + " < " + m + ".length; " + A + x(1540) + v + x(1172) + u + "[" + m + "[" + A + "]] !== undefined ", D && (r += x(615) + u + ", " + m + "[" + A + x(625)), r += x(1386) + v + x(687), h && (r += "  }  "), r += x(1536) + v + x(2307);
          var F = F || [];
          F[x(2523)](r), r = "", e.createErrors !== !1 ? (r += x(2225) + x(1699) + x(2217) + e[x(1e3)] + " , schemaPath: " + e[x(1303)][x(1228)](d) + x(1493) + R + x(1231), e.opts[x(1318)] !== !1 && (r += x(1758), e[x(1923)][x(1344)] ? r += x(510) : r += x(2150) + R + "\\'", r += "' "), e.opts[x(1264)] && (r += x(1234) + f + x(995) + e[x(2502)] + " , data: " + u + " "), r += x(1460)) : r += x(1487);
          var H = r;
          r = F[x(2443)](), !e[x(750)] && l ? e[x(545)] ? r += " throw new ValidationError([" + H + x(914) : r += " validate.errors = [" + H + x(1725) : r += x(1043) + H + x(562), r += " } else { ";
        } else {
          r += x(662);
          var L = k;
          if (L)
            for (var U, A = -1, J = L[x(1775)] - 1; A < J; ) {
              U = L[A += 1], A && (r += x(2281));
              var t0 = e.util[x(601)](U), e0 = u + t0;
              r += x(1141) + e0 + " === undefined ", D && (r += x(879) + u + x(1640) + e[x(1303)].escapeQuotes(U) + x(1423)), r += x(2315) + n + x(1172) + e.util[x(1228)](e[x(1923)][x(2144)] ? U : t0) + x(1844);
            }
          r += ") {  ";
          var j = x(972) + n, R = x(1310) + j + " + '";
          e[x(1923)][x(1344)] && (e[x(1e3)] = e[x(1923)][x(2144)] ? e.util[x(1202)](E, j, !0) : E + x(1800) + j);
          var F = F || [];
          F[x(2523)](r), r = "", e[x(1044)] !== !1 ? (r += x(2225) + x(1699) + "' , dataPath: (dataPath || '') + " + e[x(1e3)] + x(1717) + e[x(1303)][x(1228)](d) + " , params: { missingProperty: '" + R + x(1231), e[x(1923)][x(1318)] !== !1 && (r += x(1758), e.opts[x(1344)] ? r += x(510) : r += x(2150) + R + "\\'", r += "' "), e[x(1923)].verbose && (r += x(1234) + f + " , parentSchema: validate.schema" + e[x(2502)] + x(602) + u + " "), r += x(1460)) : r += " {} ";
          var H = r;
          r = F[x(2443)](), !e[x(750)] && l ? e.async ? r += x(457) + H + x(914) : r += " validate.errors = [" + H + x(1725) : r += x(1043) + H + x(562), r += x(2407);
        }
      else if (I) {
        !h && (r += x(1221) + m + x(1695) + f + "; ");
        var A = "i" + n, j = x(1331) + n + "[" + A + "]", R = x(1310) + j + x(1306);
        e[x(1923)][x(1344)] && (e[x(1e3)] = e.util[x(1202)](E, j, e.opts[x(2144)])), h && (r += " if (" + m + " && !Array.isArray(" + m + x(1466), e.createErrors !== !1 ? (r += x(2225) + x(1699) + x(2217) + e[x(1e3)] + " , schemaPath: " + e[x(1303)][x(1228)](d) + x(1493) + R + x(1231), e[x(1923)][x(1318)] !== !1 && (r += x(1758), e[x(1923)][x(1344)] ? r += "is a required property" : r += x(2150) + R + "\\'", r += "' "), e[x(1923)][x(1264)] && (r += " , schema: validate.schema" + f + x(995) + e.schemaPath + x(602) + u + " "), r += x(1460)) : r += x(1487), r += x(579) + m + x(1849)), r += x(1648) + A + x(961) + A + x(1899) + m + x(1491) + A + "++) { if (" + u + "[" + m + "[" + A + x(718), D && (r += x(879) + u + ", " + m + "[" + A + x(625)), r += ") {  var err =   ", e[x(1044)] !== !1 ? (r += x(2225) + x(1699) + x(2217) + e[x(1e3)] + x(1717) + e[x(1303)][x(1228)](d) + x(1493) + R + x(1231), e[x(1923)].messages !== !1 && (r += x(1758), e[x(1923)]._errorDataPathProperty ? r += x(510) : r += x(2150) + R + "\\'", r += "' "), e[x(1923)].verbose && (r += x(1234) + f + x(995) + e[x(2502)] + x(602) + u + " "), r += " } ") : r += " {} ", r += x(1447), h && (r += "  }  ");
      } else {
        var c0 = k;
        if (c0)
          for (var U, u0 = -1, d0 = c0[x(1775)] - 1; u0 < d0; ) {
            U = c0[u0 += 1];
            var t0 = e[x(1303)].getProperty(U), R = e[x(1303)].escapeQuotes(U), e0 = u + t0;
            e[x(1923)][x(1344)] && (e.errorPath = e[x(1303)].getPath(E, U, e[x(1923)][x(2144)])), r += x(662) + e0 + x(1709), D && (r += x(879) + u + x(1640) + e.util[x(791)](U) + "') "), r += x(2196), e[x(1044)] !== !1 ? (r += x(2225) + x(1699) + x(2217) + e[x(1e3)] + x(1717) + e[x(1303)].toQuotedString(d) + x(1493) + R + x(1231), e.opts[x(1318)] !== !1 && (r += " , message: '", e[x(1923)][x(1344)] ? r += x(510) : r += x(2150) + R + "\\'", r += "' "), e.opts.verbose && (r += " , schema: validate.schema" + f + " , parentSchema: validate.schema" + e.schemaPath + " , data: " + u + " "), r += " } ") : r += x(1487), r += x(1266);
          }
      }
      e.errorPath = E;
    } else l && (r += " if (true) {");
    return r;
  }), gt;
}
var bt, ua;
function zo() {
  return ua || (ua = 1, bt = function(e, t, a) {
    var x = B, r = " ", n = e[x(1737)], o = e[x(2014)], c = e.schema[t], f = e[x(2502)] + e[x(1303)][x(601)](t), d = e[x(771)] + "/" + t, l = !e[x(1923)].allErrors, u = x(530) + (o || ""), v = "valid" + n, h = e.opts.$data && c && c.$data, m;
    if (h ? (r += x(1902) + n + x(1172) + e.util[x(1182)](c[x(2223)], o, e[x(984)]) + "; ", m = "schema" + n) : m = c, (c || h) && e[x(1923)][x(1453)] !== !1) {
      h && (r += x(1221) + v + x(1781) + m + " === false || " + m + " === undefined) " + v + " = true; else if (typeof " + m + x(507) + v + " = false; else { "), r += x(1064) + u + x(1123) + v + x(2248);
      var b = e[x(1331)].items && e[x(1331)][x(1205)][x(1529)], w = Array[x(2462)](b);
      if (!b || b == "object" || b == x(462) || w && (b.indexOf("object") >= 0 || b[x(1562)]("array") >= 0)) r += x(2041) + u + x(2117) + u + x(2344) + v + " = false; break outer; } } } ";
      else {
        r += " var itemIndices = {}, item; for (;i--;) { var item = " + u + "[i]; ";
        var S = "checkDataType" + (w ? "s" : "");
        r += x(1166) + e[x(1303)][S](b, x(2260), e[x(1923)][x(2019)], !0) + ") continue; ", w && (r += x(925)), r += x(1945) + v + x(2288);
      }
      r += x(1460), h && (r += "  }  "), r += x(973) + v + ") {   ";
      var C = C || [];
      C[x(2523)](r), r = "", e[x(1044)] !== !1 ? (r += x(2225) + x(1453) + x(2217) + e.errorPath + x(1717) + e[x(1303)].toQuotedString(d) + x(1744), e.opts[x(1318)] !== !1 && (r += " , message: 'should NOT have duplicate items (items ## ' + j + ' and ' + i + ' are identical)' "), e[x(1923)][x(1264)] && (r += " , schema:  ", h ? r += x(1663) + f : r += "" + c, r += "         , parentSchema: validate.schema" + e[x(2502)] + x(602) + u + " "), r += " } ") : r += x(1487);
      var N = r;
      r = C[x(2443)](), !e[x(750)] && l ? e[x(545)] ? r += " throw new ValidationError([" + N + x(914) : r += " validate.errors = [" + N + x(1725) : r += x(1043) + N + ";  if (vErrors === null) vErrors = [err]; else vErrors.push(err); errors++; ", r += x(1460), l && (r += x(1142));
    } else l && (r += " if (true) { ");
    return r;
  }), bt;
}
var yt, la;
function Vo() {
  return la || (la = 1, yt = { $ref: So(), allOf: Eo(), anyOf: Po(), $comment: ko(), const: Io(), contains: Co(), dependencies: Ro(), enum: Fo(), format: No(), if: Oo(), items: qo(), maximum: Xr(), minimum: Xr(), maxItems: xa(), minItems: xa(), maxLength: ta(), minLength: ta(), maxProperties: aa(), minProperties: aa(), multipleOf: Ao(), not: To(), oneOf: Do(), pattern: jo(), properties: Mo(), propertyNames: $o(), required: Lo(), uniqueItems: zo(), validate: tn() }), yt;
}
var wt, ha;
function Ho() {
  if (ha) return wt;
  ha = 1;
  var i = Vo(), e = Zx().toHash;
  return wt = function() {
    var a = B, x = [{ type: a(1225), rules: [{ maximum: ["exclusiveMaximum"] }, { minimum: ["exclusiveMinimum"] }, a(1718), "format"] }, { type: a(998), rules: [a(1870), a(1292), a(2079), a(2209)] }, { type: "array", rules: [a(2472), "minItems", a(1205), a(1918), a(1453)] }, { type: a(692), rules: [a(2120), a(2305), "required", a(1492), "propertyNames", { properties: ["additionalProperties", a(1002)] }] }, { rules: [a(1056), a(2382), a(559), a(1929), "anyOf", a(1513), a(2391), "if"] }], r = [a(1529), a(447)], n = [a(2439), "$id", "id", a(2223), a(1058), a(2310), a(780), a(2178), a(2027), a(924), "readOnly", a(2236), a(1649), "contentEncoding", a(2332), a(2195), a(1566)], o = [a(1225), a(1845), "string", "array", "object", a(2529), "null"];
    return x[a(799)] = e(r), x.types = e(o), x.forEach(function(c) {
      var f = a;
      c[f(889)] = c.rules[f(866)](function(d) {
        var l = f, u;
        if (typeof d == "object") {
          var v = Object[l(870)](d)[0];
          u = d[v], d = v, u.forEach(function(m) {
            r.push(m), x.all[m] = !0;
          });
        }
        r[l(2523)](d);
        var h = x[l(799)][d] = { keyword: d, code: i[d], implements: u };
        return h;
      }), x[f(799)][f(447)] = { keyword: "$comment", code: i[f(447)] }, c.type && (x[f(479)][c[f(1529)]] = c);
    }), x[a(2345)] = e(r[a(712)](n)), x.custom = {}, x;
  }, wt;
}
var St, pa;
function Uo() {
  var i = s;
  if (pa) return St;
  pa = 1;
  var e = [i(1718), i(1219), i(641), "minimum", i(2408), i(1870), i(1292), i(2079), "additionalItems", i(2472), i(746), "uniqueItems", i(2120), "minProperties", i(1699), i(1976), "enum", "format", i(2382)];
  return St = function(t, a) {
    for (var x = i, r = 0; r < a[x(1775)]; r++) {
      t = JSON.parse(JSON[x(847)](t));
      var n = a[r].split("/"), o = t, c;
      for (c = 1; c < n[x(1775)]; c++) o = o[n[c]];
      for (c = 0; c < e[x(1775)]; c++) {
        var f = e[c], d = o[f];
        d && (o[f] = { anyOf: [d, { $ref: x(1385) }] });
      }
    }
    return t;
  }, St;
}
var Et, va;
function Zo() {
  if (va) return Et;
  va = 1;
  var i = tr().MissingRef;
  Et = e;
  function e(t, a, x) {
    var r = B, n = this;
    if (typeof this._opts[r(522)] != r(2444)) throw new Error(r(1806));
    typeof a == r(2444) && (x = a, a = void 0);
    var o = c(t)[r(2195)](function() {
      var d = r, l = n[d(958)](t, void 0, a);
      return l[d(1140)] || f(l);
    });
    return x && o[r(2195)](function(d) {
      x(null, d);
    }, x), o;
    function c(d) {
      var l = r, u = d[l(2439)];
      return u && !n[l(1594)](u) ? e[l(444)](n, { $ref: u }, !0) : Promise[l(2271)]();
    }
    function f(d) {
      var l = r;
      try {
        return n[l(654)](d);
      } catch (v) {
        if (v instanceof i) return u(v);
        throw v;
      }
      function u(v) {
        var h = l, m = v[h(1696)];
        if (S(m)) throw new Error(h(1694) + m + " is loaded but " + v[h(702)] + " cannot be resolved");
        var b = n[h(2106)][m];
        return !b && (b = n[h(2106)][m] = n._opts[h(522)](m), b[h(2195)](w, w)), b.then(function(C) {
          var N = h;
          if (!S(m)) return c(C)[N(2195)](function() {
            var k = N;
            S(m) || n[k(1792)](C, m, void 0, a);
          });
        })[h(2195)](function() {
          return f(d);
        });
        function w() {
          delete n._loadingSchemas[m];
        }
        function S(C) {
          var N = h;
          return n[N(2343)][C] || n[N(1889)][C];
        }
      }
    }
  }
  return Et;
}
var Pt, ma;
function Bo() {
  return ma || (ma = 1, Pt = function(e, t, a) {
    var x = B, r = " ", n = e.level, o = e[x(2014)], c = e[x(1331)][t], f = e[x(2502)] + e[x(1303)].getProperty(t), d = e.errSchemaPath + "/" + t, l = !e[x(1923)][x(1975)], u, v = "data" + (o || ""), h = x(977) + n, m = "errs__" + n, b = e[x(1923)][x(2223)] && c && c[x(2223)], w;
    b ? (r += x(1902) + n + " = " + e[x(1303)][x(1182)](c.$data, o, e[x(984)]) + "; ", w = x(1331) + n) : w = c;
    var S = this, C = x(1707) + n, N = S[x(1707)], k = "", E, I, D, A, j;
    if (b && N[x(2223)]) {
      j = x(519) + n;
      var R = N[x(1734)];
      r += " var " + C + x(2065) + t + "'].definition; var " + j + x(1172) + C + x(1920);
    } else {
      if (A = e.useCustomRule(S, c, e.schema, e), !A) return;
      w = x(1663) + f, j = A.code, E = N[x(1034)], I = N[x(1759)], D = N[x(1799)];
    }
    var F = j + x(1272), H = "i" + n, L = "ruleErr" + n, U = N[x(545)];
    if (U && !e.async) throw new Error(x(922));
    if (!(I || D) && (r += "" + F + x(1713)), r += "var " + m + x(494) + h + ";", b && N[x(2223)] && (k += "}", r += " if (" + w + x(851) + h + x(1418), R && (k += "}", r += " " + h + x(1172) + C + x(2140) + w + x(675) + h + x(1017))), I) N[x(2420)] ? r += " " + A.validate + " " : r += " " + h + " = " + A[x(1140)] + "; ";
    else if (D) {
      var J = e[x(1303)][x(1949)](e), k = "";
      J[x(1737)]++;
      var t0 = x(977) + J[x(1737)];
      J[x(1331)] = A.validate, J.schemaPath = "";
      var e0 = e[x(750)];
      e[x(750)] = J[x(750)] = !0;
      var c0 = e.validate(J)[x(2304)](/validate\.schema/g, j);
      e[x(750)] = J[x(750)] = e0, r += " " + c0;
    } else {
      var u0 = u0 || [];
      u0[x(2523)](r), r = "", r += "  " + j + x(2455), e.opts[x(537)] ? r += x(2001) : r += x(880), E || N.schema === !1 ? r += x(1305) + v + " " : r += x(1305) + w + " , " + v + x(495) + e[x(2502)] + " ", r += x(1454), e[x(1e3)] != '""' && (r += x(1800) + e[x(1e3)]);
      var d0 = o ? x(530) + (o - 1 || "") : x(700), g0 = o ? e[x(984)][o] : "parentDataProperty";
      r += x(1305) + d0 + " , " + g0 + x(1549);
      var y0 = r;
      r = u0[x(2443)](), N.errors === !1 ? (r += " " + h + " = ", U && (r += "await "), r += "" + y0 + "; ") : U ? (F = "customErrors" + n, r += x(1221) + F + " = null; try { " + h + x(2410) + y0 + "; } catch (e) { " + h + x(1019) + F + x(2161)) : r += " " + F + x(456) + h + " = " + y0 + "; ";
    }
    if (N.modifying && (r += x(1166) + d0 + ") " + v + x(1172) + d0 + "[" + g0 + "];"), r += "" + k, N[x(977)]) l && (r += " if (true) { ");
    else {
      r += " if ( ", N[x(977)] === void 0 ? (r += " !", D ? r += "" + t0 : r += "" + h) : r += " " + !N.valid + " ", r += x(1017), u = S[x(1701)];
      var u0 = u0 || [];
      u0.push(r), r = "";
      var u0 = u0 || [];
      u0[x(2523)](r), r = "", e.createErrors !== !1 ? (r += x(2225) + (u || x(1932)) + "' , dataPath: (dataPath || '') + " + e[x(1e3)] + x(1717) + e.util[x(1228)](d) + " , params: { keyword: '" + S[x(1701)] + x(1231), e.opts[x(1318)] !== !1 && (r += ` , message: 'should pass "` + S.keyword + x(1579)), e[x(1923)][x(1264)] && (r += " , schema: validate.schema" + f + x(995) + e[x(2502)] + x(602) + v + " "), r += x(1460)) : r += x(1487);
      var D0 = r;
      r = u0.pop(), !e[x(750)] && l ? e[x(545)] ? r += " throw new ValidationError([" + D0 + "]); " : r += x(2009) + D0 + x(1725) : r += x(1043) + D0 + x(562);
      var S0 = r;
      r = u0[x(2443)](), I ? N[x(1065)] ? N.errors != "full" && (r += x(1081) + H + "=" + m + "; " + H + x(1733) + H + x(1325) + L + x(465) + H + x(932) + L + ".dataPath === undefined) " + L + ".dataPath = (dataPath || '') + " + e[x(1e3)] + x(1781) + L + x(1633) + L + '.schemaPath = "' + d + x(855), e[x(1923)][x(1264)] && (r += " " + L + x(891) + w + "; " + L + x(2128) + v + "; "), r += x(1460)) : N[x(1065)] === !1 ? r += " " + S0 + " " : (r += x(1166) + m + x(888) + S0 + x(2162) + H + "=" + m + "; " + H + "<errors; " + H + x(1325) + L + x(465) + H + x(932) + L + x(1204) + L + x(2251) + e[x(1e3)] + x(1781) + L + x(1633) + L + x(1214) + d + x(855), e.opts[x(1264)] && (r += " " + L + ".schema = " + w + "; " + L + x(2128) + v + "; "), r += x(2130)) : D ? (r += x(1033), e[x(1044)] !== !1 ? (r += x(2225) + (u || x(1932)) + "' , dataPath: (dataPath || '') + " + e[x(1e3)] + x(1717) + e[x(1303)][x(1228)](d) + x(948) + S.keyword + x(1231), e.opts.messages !== !1 && (r += x(571) + S[x(1701)] + x(1579)), e[x(1923)][x(1264)] && (r += x(1234) + f + x(995) + e[x(2502)] + x(602) + v + " "), r += x(1460)) : r += x(1487), r += ";  if (vErrors === null) vErrors = [err]; else vErrors.push(err); errors++; ", !e[x(750)] && l && (e.async ? r += " throw new ValidationError(vErrors); " : r += " validate.errors = vErrors; return false; ")) : N[x(1065)] === !1 ? r += " " + S0 + " " : (r += x(759) + F + ")) { if (vErrors === null) vErrors = " + F + x(1268) + F + x(2475) + H + "=" + m + "; " + H + "<errors; " + H + x(1325) + L + x(465) + H + "]; if (" + L + ".dataPath === undefined) " + L + ".dataPath = (dataPath || '') + " + e.errorPath + ";  " + L + x(1214) + d + '";  ', e[x(1923)].verbose && (r += " " + L + x(891) + w + "; " + L + x(2128) + v + "; "), r += x(1480) + S0 + " } "), r += " } ", l && (r += x(1142));
    }
    return r;
  }), Pt;
}
const Ko = s(2292), Wo = s(2292), Jo = s(752), Qo = { schemaArray: { type: s(462), minItems: 1, items: { $ref: "#" } }, nonNegativeInteger: { type: s(1845), minimum: 0 }, nonNegativeIntegerDefault0: { allOf: [{ $ref: s(936) }, { default: 0 }] }, simpleTypes: { enum: [s(462), s(2529), s(1845), s(619), s(1225), s(692), "string"] }, stringArray: { type: s(462), items: { type: "string" }, uniqueItems: !0, default: [] } }, Go = [s(692), "boolean"], Yo = { $id: { type: "string", format: s(590) }, $schema: { type: s(998), format: "uri" }, $ref: { type: s(998), format: "uri-reference" }, $comment: { type: s(998) }, title: { type: s(998) }, description: { type: "string" }, default: !0, readOnly: { type: s(2529), default: !1 }, examples: { type: "array", items: !0 }, multipleOf: { type: s(1225), exclusiveMinimum: 0 }, maximum: { type: s(1225) }, exclusiveMaximum: { type: s(1225) }, minimum: { type: s(1225) }, exclusiveMinimum: { type: "number" }, maxLength: { $ref: s(936) }, minLength: { $ref: "#/definitions/nonNegativeIntegerDefault0" }, pattern: { type: s(998), format: s(552) }, additionalItems: { $ref: "#" }, items: { anyOf: [{ $ref: "#" }, { $ref: "#/definitions/schemaArray" }], default: !0 }, maxItems: { $ref: s(936) }, minItems: { $ref: s(1812) }, uniqueItems: { type: "boolean", default: !1 }, contains: { $ref: "#" }, maxProperties: { $ref: s(936) }, minProperties: { $ref: "#/definitions/nonNegativeIntegerDefault0" }, required: { $ref: s(1217) }, additionalProperties: { $ref: "#" }, definitions: { type: s(692), additionalProperties: { $ref: "#" }, default: {} }, properties: { type: s(692), additionalProperties: { $ref: "#" }, default: {} }, patternProperties: { type: s(692), additionalProperties: { $ref: "#" }, propertyNames: { format: "regex" }, default: {} }, dependencies: { type: "object", additionalProperties: { anyOf: [{ $ref: "#" }, { $ref: s(1217) }] } }, propertyNames: { $ref: "#" }, const: !0, enum: { type: s(462), items: !0, minItems: 1, uniqueItems: !0 }, type: { anyOf: [{ $ref: s(2084) }, { type: s(462), items: { $ref: s(2084) }, minItems: 1, uniqueItems: !0 }] }, format: { type: s(998) }, contentMediaType: { type: s(998) }, contentEncoding: { type: s(998) }, if: { $ref: "#" }, then: { $ref: "#" }, else: { $ref: "#" }, allOf: { $ref: s(2061) }, anyOf: { $ref: "#/definitions/schemaArray" }, oneOf: { $ref: s(2061) }, not: { $ref: "#" } }, rn = { $schema: Ko, $id: Wo, title: Jo, definitions: Qo, type: Go, properties: Yo, default: !0 };
var kt, ga;
function Xo() {
  var i = s;
  if (ga) return kt;
  ga = 1;
  var e = rn;
  return kt = { $id: i(607), definitions: { simpleTypes: e[i(2027)][i(1724)] }, type: i(692), dependencies: { schema: [i(1140)], $data: [i(1140)], statements: [i(1759)], valid: { not: { required: [i(1799)] } } }, properties: { type: e[i(960)][i(1529)], schema: { type: "boolean" }, statements: { type: i(2529) }, dependencies: { type: "array", items: { type: i(998) } }, metaSchema: { type: "object" }, modifying: { type: i(2529) }, valid: { type: i(2529) }, $data: { type: "boolean" }, async: { type: i(2529) }, errors: { anyOf: [{ type: i(2529) }, { const: i(2250) }] } } }, kt;
}
var It, ba;
function _o() {
  if (ba) return It;
  ba = 1;
  var i = /^[a-z_$][a-z0-9_$-]*$/i, e = Bo(), t = Xo();
  It = { add: a, get: x, remove: r, validate: n };
  function a(o, c) {
    var f = B, d = this[f(1790)];
    if (d[f(2345)][o]) throw new Error(f(1094) + o + f(1979));
    if (!i.test(o)) throw new Error(f(1094) + o + f(1332));
    if (c) {
      this[f(1345)](c, !0);
      var l = c[f(1529)];
      if (Array[f(2462)](l))
        for (var u = 0; u < l[f(1775)]; u++) h(o, l[u], c);
      else h(o, l, c);
      var v = c[f(1771)];
      v && (c[f(2223)] && this[f(1317)][f(2223)] && (v = { anyOf: [v, { $ref: "https://raw.githubusercontent.com/ajv-validator/ajv/master/lib/refs/data.json#" }] }), c[f(1734)] = this[f(1034)](v, !0));
    }
    d[f(2345)][o] = d[f(799)][o] = !0;
    function h(m, b, w) {
      for (var S = f, C, N = 0; N < d.length; N++) {
        var k = d[N];
        if (k[S(1529)] == b) {
          C = k;
          break;
        }
      }
      !C && (C = { type: b, rules: [] }, d.push(C));
      var E = { keyword: m, definition: w, custom: !0, code: e, implements: w.implements };
      C[S(889)][S(2523)](E), d[S(1932)][m] = E;
    }
    return this;
  }
  function x(o) {
    var c = B, f = this[c(1790)][c(1932)][o];
    return f ? f.definition : this.RULES[c(2345)][o] || !1;
  }
  function r(o) {
    var c = B, f = this[c(1790)];
    delete f[c(2345)][o], delete f[c(799)][o], delete f[c(1932)][o];
    for (var d = 0; d < f.length; d++)
      for (var l = f[d].rules, u = 0; u < l[c(1775)]; u++)
        if (l[u][c(1701)] == o) {
          l.splice(u, 1);
          break;
        }
    return this;
  }
  function n(o, c) {
    var f = B;
    n[f(1065)] = null;
    var d = this[f(1374)] = this[f(1374)] || this[f(1034)](t, !0);
    if (d(o)) return !0;
    if (n[f(1065)] = d[f(1065)], c) throw new Error(f(1353) + this[f(1862)](d[f(1065)]));
    return !1;
  }
  return It;
}
const x2 = "http://json-schema.org/draft-07/schema#", e2 = "https://raw.githubusercontent.com/ajv-validator/ajv/master/lib/refs/data.json#", t2 = s(1706), r2 = s(692), a2 = [s(2223)], s2 = { $data: { type: s(998), anyOf: [{ format: "relative-json-pointer" }, { format: "json-pointer" }] } }, n2 = !1, i2 = { $schema: x2, $id: e2, description: t2, type: r2, required: a2, properties: s2, additionalProperties: n2 };
var Ct, ya;
function o2() {
  var i = s;
  if (ya) return Ct;
  ya = 1;
  var e = bo(), t = er(), a = yo(), x = xn(), r = en(), n = wo(), o = Ho(), c = Uo(), f = Zx();
  Ct = m, m[i(611)][i(1140)] = b, m[i(611)][i(1034)] = w, m[i(611)][i(1792)] = S, m.prototype[i(1991)] = C, m[i(611)][i(1734)] = N, m[i(611)][i(1594)] = E, m[i(611)].removeSchema = A, m[i(611)][i(2367)] = e0, m.prototype[i(1862)] = t0, m[i(611)][i(958)] = R, m[i(611)][i(654)] = F, m[i(611)][i(779)] = Zo();
  var d = _o();
  m.prototype[i(1765)] = d.add, m[i(611)][i(2403)] = d.get, m.prototype[i(2148)] = d[i(1924)], m[i(611)].validateKeyword = d.validate;
  var l = tr();
  m.ValidationError = l[i(1337)], m[i(1985)] = l[i(558)], m[i(2427)] = c;
  var u = "http://json-schema.org/draft-07/schema", v = [i(900), i(626), "coerceTypes", i(1915)], h = ["/properties"];
  function m(T) {
    var O = i;
    if (!(this instanceof m)) return new m(T);
    T = this[O(1317)] = f[O(1949)](T) || {}, S0(this), this._schemas = {}, this[O(2343)] = {}, this[O(1591)] = {}, this[O(2495)] = n(T.format), this._cache = T[O(2314)] || new a(), this[O(2106)] = {}, this._compilations = [], this.RULES = o(), this[O(1511)] = H(T), T.loopRequired = T[O(2109)] || 1 / 0, T[O(2112)] == O(1355) && (T[O(1344)] = !0), T[O(859)] === void 0 && (T[O(859)] = r), this[O(966)] = D0(this), T.formats && d0(this), T[O(2345)] && g0(this), c0(this), typeof T[O(1585)] == "object" && this[O(1991)](T.meta), T[O(1944)] && this[O(1765)](O(1944), { metaSchema: { type: "boolean" } }), u0(this);
  }
  function b(T, O) {
    var $ = i, Q;
    if (typeof T == $(998)) {
      if (Q = this[$(1594)](T), !Q) throw new Error('no schema with key or ref "' + T + '"');
    } else {
      var G = this._addSchema(T);
      Q = G[$(1140)] || this[$(654)](G);
    }
    var Z = Q(O);
    return Q.$async !== !0 && (this.errors = Q[$(1065)]), Z;
  }
  function w(T, O) {
    var $ = i, Q = this[$(958)](T, void 0, O);
    return Q[$(1140)] || this[$(654)](Q);
  }
  function S(T, O, $, Q) {
    var G = i;
    if (Array[G(2462)](T)) {
      for (var Z = 0; Z < T[G(1775)]; Z++) this[G(1792)](T[Z], void 0, $, Q);
      return this;
    }
    var Y = this[G(1511)](T);
    if (Y !== void 0 && typeof Y != G(998)) throw new Error(G(566));
    return O = t[G(699)](O || Y), y0(this, O), this[G(1889)][O] = this[G(958)](T, $, Q, !0), this;
  }
  function C(T, O, $) {
    var Q = i;
    return this[Q(1792)](T, O, $, !0), this;
  }
  function N(T, O) {
    var $ = i, Q = T[$(2439)];
    if (Q !== void 0 && typeof Q != $(998)) throw new Error($(1437));
    if (Q = Q || this._opts.defaultMeta || k(this), !Q) return this[$(2339)][$(897)]($(2246)), this[$(1065)] = null, !0;
    var G = this[$(1140)](Q, T);
    if (!G && O) {
      var Z = "schema is invalid: " + this.errorsText();
      if (this[$(1317)][$(1734)] == $(1413)) this[$(2339)][$(1882)](Z);
      else throw new Error(Z);
    }
    return G;
  }
  function k(T) {
    var O = i, $ = T[O(1317)][O(1585)];
    return T[O(1317)][O(1619)] = typeof $ == "object" ? T[O(1511)]($) || $ : T[O(1594)](u) ? u : void 0, T[O(1317)][O(1619)];
  }
  function E(T) {
    var O = i, $ = D(this, T);
    switch (typeof $) {
      case O(692):
        return $[O(1140)] || this._compile($);
      case O(998):
        return this[O(1594)]($);
      case O(1145):
        return I(this, T);
    }
  }
  function I(T, O) {
    var $ = i, Q = t[$(1331)].call(T, { schema: {} }, O);
    if (Q) {
      var G = Q[$(1331)], Z = Q[$(1342)], Y = Q[$(1461)], a0 = e[$(444)](T, G, Z, void 0, Y);
      return T[$(1591)][O] = new x({ ref: O, fragment: !0, schema: G, root: Z, baseId: Y, validate: a0 }), a0;
    }
  }
  function D(T, O) {
    var $ = i;
    return O = t.normalizeId(O), T[$(1889)][O] || T[$(2343)][O] || T._fragments[O];
  }
  function A(T) {
    var O = i;
    if (T instanceof RegExp) return j(this, this[O(1889)], T), j(this, this._refs, T), this;
    switch (typeof T) {
      case "undefined":
        return j(this, this[O(1889)]), j(this, this[O(2343)]), this[O(1440)].clear(), this;
      case O(998):
        var $ = D(this, T);
        return $ && this[O(1440)][O(1498)]($[O(1587)]), delete this._schemas[T], delete this[O(2343)][T], this;
      case O(692):
        var Q = this[O(1317)][O(859)], G = Q ? Q(T) : T;
        this[O(1440)][O(1498)](G);
        var Z = this[O(1511)](T);
        Z && (Z = t[O(699)](Z), delete this[O(1889)][Z], delete this[O(2343)][Z]);
    }
    return this;
  }
  function j(T, O, $) {
    var Q = i;
    for (var G in O) {
      var Z = O[G];
      !Z[Q(1585)] && (!$ || $.test(G)) && (T[Q(1440)][Q(1498)](Z[Q(1587)]), delete O[G]);
    }
  }
  function R(T, O, $, Q) {
    var G = i;
    if (typeof T != G(692) && typeof T != G(2529)) throw new Error("schema should be object or boolean");
    var Z = this._opts.serialize, Y = Z ? Z(T) : T, a0 = this._cache[G(2214)](Y);
    if (a0) return a0;
    Q = Q || this[G(1317)][G(647)] !== !1;
    var n0 = t[G(699)](this[G(1511)](T));
    n0 && Q && y0(this, n0);
    var _ = this._opts[G(1734)] !== !1 && !O, j0;
    _ && !(j0 = n0 && n0 == t[G(699)](T[G(2439)])) && this[G(1734)](T, !0);
    var F0 = t.ids[G(444)](this, T), L0 = new x({ id: n0, schema: T, localRefs: F0, cacheKey: Y, meta: $ });
    return n0[0] != "#" && Q && (this[G(2343)][n0] = L0), this[G(1440)].put(Y, L0), _ && j0 && this[G(1734)](T, !0), L0;
  }
  function F(T, O) {
    var $ = i;
    if (T[$(2044)])
      return T[$(1140)] = Z, Z[$(1331)] = T[$(1331)], Z[$(1065)] = null, Z.root = O || Z, T.schema[$(1058)] === !0 && (Z[$(1058)] = !0), Z;
    T.compiling = !0;
    var Q;
    T[$(1585)] && (Q = this[$(1317)], this[$(1317)] = this._metaOpts);
    var G;
    try {
      G = e[$(444)](this, T[$(1331)], O, T[$(1621)]);
    } catch (Y) {
      throw delete T[$(1140)], Y;
    } finally {
      T[$(2044)] = !1, T[$(1585)] && (this[$(1317)] = Q);
    }
    return T[$(1140)] = G, T[$(2208)] = G[$(2208)], T[$(1986)] = G[$(1986)], T[$(1342)] = G[$(1342)], G;
    function Z() {
      var Y = $, a0 = T[Y(1140)], n0 = a0[Y(1093)](this, arguments);
      return Z[Y(1065)] = a0[Y(1065)], n0;
    }
  }
  function H(T) {
    var O = i;
    switch (T[O(1815)]) {
      case O(2038):
        return J;
      case "id":
        return L;
      default:
        return U;
    }
  }
  function L(T) {
    var O = i;
    return T[O(1810)] && this[O(2339)].warn("schema $id ignored", T[O(1810)]), T.id;
  }
  function U(T) {
    var O = i;
    return T.id && this[O(2339)][O(897)]("schema id ignored", T.id), T[O(1810)];
  }
  function J(T) {
    var O = i;
    if (T.$id && T.id && T[O(1810)] != T.id) throw new Error("schema $id is different from id");
    return T[O(1810)] || T.id;
  }
  function t0(T, O) {
    var $ = i;
    if (T = T || this[$(1065)], !T) return $(1226);
    O = O || {};
    for (var Q = O.separator === void 0 ? ", " : O[$(613)], G = O[$(2473)] === void 0 ? $(530) : O.dataVar, Z = "", Y = 0; Y < T[$(1775)]; Y++) {
      var a0 = T[Y];
      a0 && (Z += G + a0[$(1667)] + " " + a0[$(532)] + Q);
    }
    return Z.slice(0, -Q.length);
  }
  function e0(T, O) {
    var $ = i;
    return typeof O == $(998) && (O = new RegExp(O)), this[$(2495)][T] = O, this;
  }
  function c0(T) {
    var O = i, $;
    if (T[O(1317)].$data && ($ = i2, T[O(1991)]($, $[O(1810)], !0)), T[O(1317)].meta !== !1) {
      var Q = rn;
      T._opts[O(2223)] && (Q = c(Q, h)), T[O(1991)](Q, u, !0), T[O(2343)][O(1933)] = u;
    }
  }
  function u0(T) {
    var O = i, $ = T._opts[O(1280)];
    if ($)
      if (Array[O(2462)]($)) T[O(1792)]($);
      else
        for (var Q in $) T[O(1792)]($[Q], Q);
  }
  function d0(T) {
    var O = i;
    for (var $ in T._opts[O(735)]) {
      var Q = T[O(1317)][O(735)][$];
      T[O(2367)]($, Q);
    }
  }
  function g0(T) {
    var O = i;
    for (var $ in T._opts[O(2345)]) {
      var Q = T._opts[O(2345)][$];
      T[O(1765)]($, Q);
    }
  }
  function y0(T, O) {
    var $ = i;
    if (T[$(1889)][O] || T[$(2343)][O]) throw new Error($(2445) + O + '" already exists');
  }
  function D0(T) {
    for (var O = i, $ = f.copy(T[O(1317)]), Q = 0; Q < v[O(1775)]; Q++) delete $[v[Q]];
    return $;
  }
  function S0(T) {
    var O = i, $ = T[O(1317)][O(2339)];
    if ($ === !1) T.logger = { log: J0, warn: J0, error: J0 };
    else {
      if ($ === void 0 && ($ = console), !(typeof $ == O(692) && $[O(1413)] && $[O(897)] && $[O(1882)])) throw new Error(O(631));
      T[O(2339)] = $;
    }
  }
  function J0() {
  }
  return Ct;
}
var c2 = o2();
const f2 = _s(c2);
class d2 extends lo {
  constructor(e, t) {
    var a = s, x;
    super(t), this[a(992)] = e, this[a(659)] = (x = t == null ? void 0 : t.capabilities) !== null && x !== void 0 ? x : {}, this._instructions = t == null ? void 0 : t[a(721)], this.setRequestHandler(Vs, (r) => this._oninitialize(r)), this[a(1516)](Hs, () => {
      var r = a, n;
      return (n = this[r(1677)]) === null || n === void 0 ? void 0 : n[r(444)](this);
    });
  }
  registerCapabilities(e) {
    var t = s;
    if (this[t(2259)]) throw new Error(t(2277));
    this[t(659)] = ho(this[t(659)], e);
  }
  [s(2400)](e) {
    var t = s, a, x, r;
    switch (e) {
      case t(1159):
        if (!(!((a = this[t(1907)]) === null || a === void 0) && a[t(694)])) throw new Error(t(1360) + e + ")");
        break;
      case t(1451):
        if (!(!((x = this[t(1907)]) === null || x === void 0) && x[t(1881)])) throw new Error("Client does not support elicitation (required for " + e + ")");
        break;
      case "roots/list":
        if (!(!((r = this[t(1907)]) === null || r === void 0) && r[t(2239)])) throw new Error(t(2461) + e + ")");
        break;
    }
  }
  assertNotificationCapability(e) {
    var t = s;
    switch (e) {
      case t(1024):
        if (!this[t(659)].logging) throw new Error(t(1235) + e + ")");
        break;
      case t(2458):
      case t(1247):
        if (!this._capabilities[t(1617)]) throw new Error("Server does not support notifying about resources (required for " + e + ")");
        break;
      case t(1731):
        if (!this[t(659)].tools) throw new Error("Server does not support notifying of tool list changes (required for " + e + ")");
        break;
      case t(586):
        if (!this[t(659)][t(822)]) throw new Error(t(980) + e + ")");
        break;
    }
  }
  [s(676)](e) {
    var t = s;
    switch (e) {
      case "sampling/createMessage":
        if (!this[t(659)][t(694)]) throw new Error("Server does not support sampling (required for " + e + ")");
        break;
      case "logging/setLevel":
        if (!this._capabilities[t(1958)]) throw new Error(t(1235) + e + ")");
        break;
      case t(2488):
      case t(517):
        if (!this[t(659)][t(822)]) throw new Error(t(1288) + e + ")");
        break;
      case t(1601):
      case t(1501):
      case t(1029):
        if (!this[t(659)][t(1617)]) throw new Error(t(1071) + e + ")");
        break;
      case t(1055):
      case t(2058):
        if (!this[t(659)][t(1195)]) throw new Error(t(698) + e + ")");
        break;
    }
  }
  async _oninitialize(e) {
    var t = s;
    const a = e.params[t(1556)];
    return this[t(1907)] = e[t(653)][t(2231)], this[t(2440)] = e.params.clientInfo, { protocolVersion: fi.includes(a) ? a : As, capabilities: this[t(1359)](), serverInfo: this[t(992)], ...this[t(1580)] && { instructions: this[t(1580)] } };
  }
  [s(1005)]() {
    return this._clientCapabilities;
  }
  [s(1673)]() {
    var e = s;
    return this[e(2440)];
  }
  [s(1359)]() {
    var e = s;
    return this[e(659)];
  }
  async [s(988)]() {
    var e = s;
    return this[e(2213)]({ method: e(988) }, Vt);
  }
  async createMessage(e, t) {
    var a = s;
    return this[a(2213)]({ method: "sampling/createMessage", params: e }, Gs, t);
  }
  async [s(999)](e, t) {
    var a = s;
    const x = await this[a(2213)]({ method: "elicitation/create", params: e }, Ys, t);
    if (x[a(763)] === a(1596) && x[a(2101)]) try {
      const r = new f2(), n = r[a(1034)](e.requestedSchema);
      if (!n(x.content)) throw new qx(yx[a(1504)], a(2160) + r[a(1862)](n[a(1065)]));
    } catch (r) {
      throw r instanceof qx ? r : new qx(yx[a(1675)], a(876) + r);
    }
    return x;
  }
  async [s(907)](e, t) {
    var a = s;
    return this[a(2213)]({ method: a(1397), params: e }, Xs, t);
  }
  async [s(2080)](e) {
    var t = s;
    return this[t(2218)]({ method: t(1024), params: e });
  }
  async sendResourceUpdated(e) {
    var t = s;
    return this[t(2218)]({ method: t(2458), params: e });
  }
  async sendResourceListChanged() {
    var e = s;
    return this[e(2218)]({ method: e(1247) });
  }
  async [s(2206)]() {
    var e = s;
    return this[e(2218)]({ method: e(1731) });
  }
  async [s(1809)]() {
    var e = s;
    return this[e(2218)]({ method: e(586) });
  }
}
var ls;
class u2 {
  constructor() {
    o0(this, ls, []);
    o0(this, "listeners", []);
  }
  push(e) {
    var t = s;
    this.queue[t(2523)](e), this.listeners[t(1836)]((a) => a(e));
  }
  [(ls = s(1407), s(885))](e) {
    var t = s;
    return this[t(1407)][t(2173)]((a) => a[t(653)][t(1510)] === e);
  }
  [s(1848)](e) {
    var t = s;
    this.queue = this[t(1407)][t(2173)]((a) => a.params[t(1510)] !== e);
  }
  [s(1518)](e) {
    var t = s;
    this[t(2155)][t(2523)](e);
  }
  [s(1541)](e) {
    var t = s;
    const a = this.listeners.indexOf(e);
    a !== -1 && this[t(2155)].splice(a, 1);
  }
}
class l2 {
  constructor(e) {
    o0(this, "protocol");
    var t = s;
    this[t(1644)] = e;
  }
  [s(1399)](e, t) {
    var a = s;
    this[a(1644)][a(2218)]({ method: a(1839), params: { requestId: e, data: t, error: null, finished: !1 } });
  }
  [s(1702)](e) {
    var t = s;
    this[t(1644)][t(2218)]({ method: t(1839), params: { requestId: e, data: null, error: null, finished: !0 } });
  }
  sendAbortedResponse(e) {
    var t = s;
    this[t(1644)][t(2218)]({ method: t(1839), params: { requestId: e, data: null, error: "Operation was aborted", finished: !0 } });
  }
  [s(2433)](e, t) {
    var a = s;
    this[a(1644)][a(2218)]({ method: a(1839), params: { requestId: e, data: null, error: t, finished: !0 } });
  }
}
var hs, ps;
class h2 {
  constructor(e, t) {
    o0(this, ps);
    o0(this, hs);
    var a = s;
    this[a(1242)] = e, this[a(1315)] = t;
  }
  async [(ps = s(1242), hs = s(1315), s(2452))](e, t, a, x, r) {
    var n = s;
    try {
      await this[n(725)](e, t, a, x, r);
    } catch (o) {
      this[n(1242)][n(2433)](e, (o == null ? void 0 : o[n(532)]) || String(o));
    } finally {
      this.runningRequests[n(1869)](e);
    }
  }
  async [s(725)](e, t, a, x, r) {
    var n = s;
    for await (const o of t(a, x, r.signal)) {
      if (r[n(1892)].aborted) {
        this.streamManager[n(550)](e);
        return;
      }
      this.streamManager[n(1399)](e, o);
    }
    r[n(1892)][n(2459)] ? this[n(1242)][n(550)](e) : this.streamManager.sendFinishedResponse(e);
  }
}
var vs, ms;
class p2 {
  constructor(e, t) {
    o0(this, ms);
    o0(this, vs);
    var a = s;
    this[a(1644)] = e, this[a(1233)] = t;
  }
  validateActionRequest(e) {
    var t = s;
    if (e != null && e[t(2459)]) throw new Error(t(2372));
  }
  async [(ms = s(1644), vs = s(1233), s(523))](e) {
    var t = s;
    return (await this[t(1644)][t(2213)]({ method: "sdppp/streamRequest", params: { action: e[t(763)], data: e[t(530)] } }, M({ requestId: q() })))[t(1510)];
  }
  initializeResponseQueue(e) {
    var t = s;
    const a = this.notificationQueue[t(885)](e)[t(866)]((x) => ({ data: x[t(653)][t(530)], error: x.params[t(1882)], finished: x[t(653)][t(2494)] }));
    return this[t(1233)][t(1848)](e), a;
  }
  createStreamState() {
    return { resolve: null, finished: !1, aborted: !1 };
  }
  [s(1115)](e, t, a, x) {
    var r = s;
    const n = this[r(1676)](e, t, a), o = this[r(569)](e, a);
    return this.notificationQueue.addListener(n), x == null || x[r(923)](r(1828), o), { onNotification: n, onAbort: o };
  }
  [s(1676)](e, t, a) {
    var x = s;
    const r = M({ method: f0(x(1839)), params: M({ requestId: q(), data: U0(), error: q().nullable(), finished: w0() }) });
    return (n) => {
      var o = x;
      const c = r.safeParse(n);
      if (!c[o(768)] || c[o(530)][o(653)][o(1510)] !== e) return;
      const { data: f, error: d, finished: l } = c[o(530)][o(653)];
      t.push({ data: f, error: d, finished: l }), a[o(2271)] && (a[o(2271)](), a.resolve = null);
    };
  }
  [s(569)](e, t) {
    return async () => {
      var a = B;
      if (!t[a(2459)]) {
        t[a(2459)] = !0;
        try {
          await this[a(1644)][a(2213)]({ method: "sdppp/abort", params: { requestId: e } }, M({ success: w0() }));
        } catch {
        }
        t[a(2494)] = !0, t[a(2271)] && (t[a(2271)](), t[a(2271)] = null);
      }
    };
  }
  [s(1641)](e, t, a, x) {
    const r = this;
    return { async *[Symbol.asyncIterator]() {
      var n = B;
      const o = r[n(1115)](a, e, t, x);
      try {
        yield* r.processStreamQueue(e, t, x);
      } finally {
        r[n(1358)](a, o, x);
      }
    } };
  }
  async *[s(1751)](e, t, a) {
    for (var x = s; !t[x(2494)] && !t[x(2459)]; ) {
      if (a != null && a[x(2459)] && !t[x(2459)]) {
        t[x(2459)] = !0;
        break;
      }
      if (e[x(1775)] === 0) {
        await new Promise((r) => {
          var n = x;
          t[n(2271)] = r;
        });
        continue;
      }
      yield* this.processQueueItems(e, t);
    }
    if (t[x(2459)]) throw new Error(x(2372));
  }
  *[s(513)](e, t) {
    for (var a = s; e.length > 0; ) {
      const x = e[a(1200)]();
      if (!x) continue;
      const { data: r, error: n, finished: o } = x;
      if (n) throw new Error(n);
      if (o) {
        t[a(2494)] = !0;
        break;
      }
      yield r;
    }
  }
  cleanupStreamHandlers(e, t, a) {
    var x = s;
    this.notificationQueue.removeListener(t[x(2465)]), a == null || a[x(1629)](x(1828), t[x(649)]), this[x(1233)][x(1848)](e);
  }
}
var gs, bs, ys, ws, Ss, Es, Ps;
class v2 {
  constructor(e) {
    o0(this, Ps, /* @__PURE__ */ new Map());
    o0(this, Es, /* @__PURE__ */ new Map());
    o0(this, Ss, 1);
    o0(this, "runningRequests", /* @__PURE__ */ new Map());
    o0(this, ws);
    o0(this, "notificationQueue", new u2());
    o0(this, ys);
    o0(this, bs);
    o0(this, gs);
    var t = s;
    this[t(1644)] = e, this.streamManager = new l2(e), this[t(1953)] = new h2(this.streamManager, this[t(1315)]), this[t(1752)] = new p2(e, this[t(1233)]), this.setupNotificationHandler(), this[t(2411)](), this[t(2226)](), this[t(1550)]();
  }
  setupNotificationHandler() {
    var e = s;
    const t = M({ method: f0(e(1839)), params: M({ requestId: q(), data: U0(), error: q()[e(1944)](), finished: w0() }) });
    this[e(1644)][e(1516)](t, (a) => this[e(1233)][e(2523)](a));
  }
  [(Ps = s(1262), Es = s(2356), Ss = s(1118), ws = s(1644), ys = s(1242), bs = s(1953), gs = s(1752), s(2411))]() {
    var e = s;
    const t = M({ method: f0(e(728)), params: M({ requestId: q() }) });
    this[e(1644)][e(1181)](t, async (a, x) => {
      var r = e;
      const { requestId: n } = a.params, o = this[r(1315)][r(2214)](n);
      return o && (o.abort(), this[r(1315)][r(1869)](n)), { success: !0 };
    });
  }
  [s(2226)]() {
    var e = s;
    const t = M({ method: f0(e(2451)), params: M({ action: q(), data: U0() }) });
    this[e(1644)][e(1181)](t, async (a, x) => {
      var r = e;
      const n = r(2051) + this[r(1118)]++, o = this[r(1262)][r(2214)](a[r(653)][r(763)]);
      if (!o) throw new Error(r(832) + a[r(653)][r(763)]);
      const c = new AbortController();
      return this.runningRequests[r(1425)](n, c), this[r(1953)].executeHandlerAsync(n, o, a[r(653)], x, c), { requestId: n };
    });
  }
  registerActionHandler(e, t) {
    var a = s;
    this[a(1262)][a(1425)](e.shape[a(763)][a(895)], t);
  }
  async [s(763)](e, t, a) {
    var x = s;
    this[x(1752)][x(2514)](a);
    const r = await this[x(1752)][x(523)](e), n = this[x(1752)][x(556)](r), o = this.streamIterator[x(823)]();
    return this[x(1752)][x(1641)](n, o, r, a);
  }
  [s(1550)]() {
    var e = s;
    const t = M({ method: f0(e(2323)), params: M({ messageType: q(), message: U0() }) });
    this[e(1644)][e(1516)](t, (a) => {
      var x = e;
      const { messageType: r, message: n } = a[x(653)], o = this[x(2356)][x(2214)](r);
      o && o(n);
    });
  }
  [s(1080)](e, t) {
    var a = s;
    this.broadcastHandlers[a(1425)](e, t);
  }
  async [s(1088)](e, t) {
    var a = s;
    await this[a(1644)].notification({ method: a(2323), params: { messageType: e, message: t } });
  }
  async [s(2213)](e, t, a) {
    return await this.protocol.request({ method: e, params: t }, a);
  }
  [s(701)](e, t) {
    var a = s;
    this[a(1644)][a(1181)](e, t);
  }
}
var ks;
class m2 extends v2 {
  constructor(t, a) {
    var x = s;
    const r = new d2(t, a);
    r[x(770)] = (n) => {
      var o = x;
      console[o(1882)](o(1838), n);
    };
    super(r);
    o0(this, ks);
    this[x(2361)] = r;
  }
  async [(ks = s(2361), s(2094))](t) {
    var a = s;
    return await this[a(2361)][a(2094)](t);
  }
  async [s(1395)]() {
    var t = s;
    await this[t(2361)][t(1395)]();
  }
  isConnected() {
    var t = s;
    return this[t(2361)][t(2259)] !== void 0;
  }
}
function g2(i) {
  const e = new Cn(i);
  return { joinAs(t, a) {
    var x = B;
    if (!e[x(2186)](t)) throw new Error(x(1996) + String(t) + x(1620));
    return new ci(e, t, a);
  }, getDefinition() {
    var t = B;
    return e[t(2007)]();
  }, getNodeIds() {
    var t = B;
    return e[t(1739)]();
  }, getNeighbors(t) {
    var a = B;
    return e[a(671)](t);
  }, hasEdge(t, a) {
    var x = B;
    return e[x(2070)](t, a);
  }, hasPath(t, a) {
    return e.hasPath(t, a);
  }, findPath(t, a) {
    var x = B;
    return e[x(1251)](t, a);
  } };
}
const b2 = M({}), y2 = M({ uname: q()[s(2178)](""), activeDocumentID: N0().default(0), layers: q0(M({ id: N0(), name: q(), identify: q() }))[s(2178)]([]), actions: q0(q())[s(2178)]([]), theme: q().default("kPanelBrightnessMediumGray"), sdpppX: G0(q(), U0())[s(2178)]({}), comfyWebviewConnectStatus: K0([s(1365), s(2136), s(2126)])[s(2178)]("disconnected"), comfyWebviewLoadError: q().default(""), comfyWebviewLoading: w0()[s(2178)](!1), comfyWebviewVersion: q().default(""), comfyAutoRunning: w0().default(!1), comfyHTTPCode: N0()[s(2178)](200), comfyURL: q()[s(2178)](""), sdkWebviewFocusing: w0()[s(2178)](!1), sdkWebviewConnectStatus: K0([s(1365), s(2136), s(2126)])[s(2178)](s(2126)), isLogin: w0()[s(2178)](!1), requestingLogin: w0().default(!1), loginMessage: q().default(""), token: q().default(""), userInfo: G0(q(), U0()).default({}) }), w2 = M({ widgetableStructure: M({ widgetableID: q(), widgetablePath: q(), nodes: G0(q(), U0()), options: G0(q(), U0()), nodeIndexes: q0(q()) }).default({ widgetableID: "", widgetablePath: "", nodes: {}, options: {}, nodeIndexes: [] }), widgetableValues: G0(q(), q0(U0()))[s(2178)]({}), widgetableErrors: G0(q(), q())[s(2178)]({}), queueSize: N0()[s(2178)](0), lastError: q().default(""), progress: N0()[s(2178)](0), executingNodeTitle: q()[s(2178)](""), graphProgress: N0().default(0), comfyUserToken: q()[s(2178)](""), comfyOrgLoggedIn: w0()[s(2178)](!1), comfyOrgAPIKey: q()[s(2178)](""), comfyWSState: K0([s(2136), s(576)])[s(2178)](s(2136)), lastRunTime: N0()[s(2178)](0) }), S2 = { log: { requestSchema: M({ level: K0([s(1413), s(1917), "warn", s(1882)]), messages: q0(q()) }), responseSchema: M({}) }, openExternalLink: { requestSchema: M({ url: q() }), responseSchema: M({ error: q()[s(726)]() }) }, getStorage: { requestSchema: M({ key: q() }), responseSchema: M({ value: q(), error: q()[s(726)]() }) }, setStorage: { requestSchema: M({ key: q(), value: q() }), responseSchema: M({ error: q()[s(726)]() }) }, removeStorage: { requestSchema: M({ key: q() }), responseSchema: M({ error: q()[s(726)]() }) }, keyboardAction: { requestSchema: M({ keycode: q() }), responseSchema: M({}) }, setComfyWebviewURL: { requestSchema: M({ url: q() }), responseSchema: M({}) }, uploadComfyImage: { requestSchema: M({ uploadInput: M({ type: f0(s(2100)).or(f0(s(2470))), tokenOrBuffer: U0(), fileName: q() }), overwrite: w0()[s(726)]()[s(2178)](!0) }), responseSchema: M({ name: q() }) }, proxiedFetch: { requestSchema: M({ url: q(), method: q()[s(726)](), headers: G0(q()).optional(), body: U0()[s(726)](), bodyType: K0([s(714), s(2499), s(1474)])[s(726)]() }), responseSchema: M({ success: w0(), status: N0()[s(726)](), statusText: q()[s(726)](), headers: G0(q()).optional(), data: U0()[s(726)](), error: q()[s(726)]() }) } }, de = M({ thumbnail_url: q()[s(726)](), file_token: q().optional(), source: q().optional(), error: q().optional() }), E2 = { doGetImage: { requestSchema: M({ boundary: K0([s(1022), s(860), s(2096)]), content: K0(["canvas", s(860), s(2096)]).or(q()), imageSize: N0(), imageQuality: N0(), cropBySelection: K0(["no", "positive", "negative"]) }), responseSchema: de }, doGetMask: { requestSchema: M({ content: K0([s(1022), s(860), s(2096)]), reverse: w0(), imageSize: N0() }), responseSchema: de }, doSendImage: { requestSchema: M({ selection: K0([s(1227), s(1921), s(2087), "newlayer_selection", s(1207), s(578), s(2524), s(1227)]), url: q(), source: q(), cropBySelection: K0(["no", s(2424), s(652)])[s(2178)]("no") }), responseSchema: M({ error: q().optional() }) }, requestImageGet: { requestSchema: M({}), responseSchema: de }, requestImageSend: { requestSchema: M({ url: q(), source: q() }), responseSchema: M({ error: q()[s(726)]() }) }, requestMaskGet: { requestSchema: M({ isMask: w0()[s(2178)](!1) }), responseSchema: de } }, P2 = { register: { requestSchema: M({ username: q(), password: q(), infos: G0(q(), U0()) }), responseSchema: M({}) }, loginByPassword: { requestSchema: M({ username: q(), password: q() }), responseSchema: M({}) }, loginByPhone: { requestSchema: M({ phone: q(), code: q() }), responseSchema: M({}) }, sendPhoneCode: { requestSchema: M({ phone: q() }), responseSchema: M({}) }, logout: { requestSchema: M({}), responseSchema: M({}) } }, k2 = M({ workflows: q0(q()), error: q()[s(726)]() }), I2 = M({ success: w0(), nodeErrors: G0(q())[s(726)](), prompt_ids: q0(q())[s(726)](), images: q0(M({ url: q(), thumbnail: q() }))[s(726)]() }), C2 = { setWidgetValue: { requestSchema: M({ values: q0(M({ nodeID: q(), widgetIndex: N0(), value: G0(q(), U0()).or(q()).or(N0()).or(w0()).or(q0(U0())) })) }), responseSchema: M({ success: w0() }) }, openWorkflow: { requestSchema: M({ workflow_path: q(), reset: w0()[s(2178)](!1) }), responseSchema: M({ success: w0() }) }, openWorkflowJSON: { requestSchema: M({ workflow_content: G0(U0()), workflow_path: q() }), responseSchema: M({ success: w0() }) }, listWorkflows: { requestSchema: M({ listMode: q()[s(726)](), sdpppID: q()[s(726)](), sdpppToken: q()[s(726)]() }), responseSchema: k2 }, saveWorkflow: { requestSchema: M({ workflow_path: q(), from_sid: q()[s(726)]() }), responseSchema: M({ success: w0() }) }, run: { requestSchema: M({ size: N0() }), responseSchema: I2, stream: !0 }, stopAll: { requestSchema: M({}), responseSchema: M({ success: w0() }) } }, R2 = { setNodeTitle: { requestSchema: M({ node_id: q(), title: q() }), responseSchema: M({ success: w0() }) }, reboot: { requestSchema: M({}), responseSchema: M({ success: w0(), error: q()[s(726)]() }) }, setComfyOrgAPIKey: { requestSchema: M({ api_key: q() }), responseSchema: M({ success: w0() }) }, logout: { requestSchema: M({}), responseSchema: M({ success: w0() }) } }, F2 = g2({ nodes: { sdk: { store: b2, actions: {} }, uxp: { store: y2, actions: { ...E2, ...S2, ...P2 } }, comfy: { store: w2, actions: { ...C2, ...R2 } } }, edges: [[s(1564), s(1632)], [s(2156), "uxp"]] }), I0 = F2.joinAs(s(2156));
globalThis[s(1883)] = I0, globalThis.sdpppX2 = globalThis[s(592)] || {};
const _x = globalThis[s(592)], p0 = (i) => typeof i == "string", Qx = () => {
  var i = s;
  let e, t;
  const a = new Promise((x, r) => {
    e = x, t = r;
  });
  return a[i(2271)] = e, a[i(917)] = t, a;
}, wa = (i) => i == null ? "" : "" + i, N2 = (i, e, t) => {
  i.forEach((a) => {
    e[a] && (t[a] = e[a]);
  });
}, O2 = /###/g, Sa = (i) => i && i.indexOf(s(2137)) > -1 ? i[s(2304)](O2, ".") : i, Ea = (i) => !i || p0(i), xe = (i, e, t) => {
  var a = s;
  const x = p0(e) ? e[a(1801)](".") : e;
  let r = 0;
  for (; r < x[a(1775)] - 1; ) {
    if (Ea(i)) return {};
    const n = Sa(x[r]);
    !i[n] && t && (i[n] = new t()), Object.prototype[a(1038)].call(i, n) ? i = i[n] : i = {}, ++r;
  }
  return Ea(i) ? {} : { obj: i, k: Sa(x[r]) };
}, Pa = (i, e, t) => {
  var a = s;
  const { obj: x, k: r } = xe(i, e, Object);
  if (x !== void 0 || e[a(1775)] === 1) {
    x[r] = t;
    return;
  }
  let n = e[e.length - 1], o = e[a(2287)](0, e[a(1775)] - 1), c = xe(i, o, Object);
  for (; c[a(1375)] === void 0 && o[a(1775)]; )
    n = o[o[a(1775)] - 1] + "." + n, o = o.slice(0, o[a(1775)] - 1), c = xe(i, o, Object), c != null && c[a(1375)] && typeof c[a(1375)][c.k + "." + n] !== a(1145) && (c[a(1375)] = void 0);
  c[a(1375)][c.k + "." + n] = t;
}, q2 = (i, e, t, a) => {
  var x = s;
  const { obj: r, k: n } = xe(i, e, Object);
  r[n] = r[n] || [], r[n][x(2523)](t);
}, Ce = (i, e) => {
  var t = s;
  const { obj: a, k: x } = xe(i, e);
  if (a && Object.prototype[t(1038)][t(444)](a, x))
    return a[x];
}, A2 = (i, e, t) => {
  const a = Ce(i, t);
  return a !== void 0 ? a : Ce(e, t);
}, an = (i, e, t) => {
  for (const a in e)
    a !== "__proto__" && a !== "constructor" && (a in i ? p0(i[a]) || i[a] instanceof String || p0(e[a]) || e[a] instanceof String ? t && (i[a] = e[a]) : an(i[a], e[a], t) : i[a] = e[a]);
  return i;
}, zx = (i) => i[s(2304)](/[\-\[\]\/\{\}\(\)\*\+\?\.\\\^\$\|]/g, s(1102));
var T2 = { "&": s(1198), "<": s(2270), ">": s(577), '"': s(1120), "'": "&#39;", "/": "&#x2F;" };
const D2 = (i) => p0(i) ? i.replace(/[&<>"'\/]/g, (e) => T2[e]) : i;
class j2 {
  constructor(e) {
    var t = s;
    this[t(2360)] = e, this[t(1872)] = /* @__PURE__ */ new Map(), this[t(730)] = [];
  }
  [s(749)](e) {
    var t = s;
    const a = this[t(1872)].get(e);
    if (a !== void 0) return a;
    const x = new RegExp(e);
    return this[t(730)].length === this.capacity && this[t(1872)].delete(this.regExpQueue[t(1200)]()), this[t(1872)][t(1425)](e, x), this[t(730)][t(2523)](e), x;
  }
}
const M2 = [" ", ",", "?", "!", ";"], $2 = new j2(20), L2 = (i, e, t) => {
  var a = s;
  e = e || "", t = t || "";
  const x = M2[a(2173)]((o) => e.indexOf(o) < 0 && t[a(1562)](o) < 0);
  if (x.length === 0) return !0;
  const r = $2[a(749)]("(" + x[a(866)]((o) => o === "?" ? "\\?" : o).join("|") + ")");
  let n = !r.test(i);
  if (!n) {
    const o = i.indexOf(t);
    o > 0 && !r[a(2263)](i[a(901)](0, o)) && (n = !0);
  }
  return n;
}, Bt = (i, e, t = ".") => {
  var a = s;
  if (!i) return;
  if (i[e])
    return Object[a(611)][a(1038)][a(444)](i, e) ? i[e] : void 0;
  const x = e[a(1801)](t);
  let r = i;
  for (let n = 0; n < x.length; ) {
    if (!r || typeof r != "object") return;
    let o, c = "";
    for (let f = n; f < x.length; ++f)
      if (f !== n && (c += t), c += x[f], o = r[c], o !== void 0) {
        if (["string", "number", "boolean"][a(1562)](typeof o) > -1 && f < x[a(1775)] - 1) continue;
        n += f - n + 1;
        break;
      }
    r = o;
  }
  return r;
}, re = (i) => i == null ? void 0 : i.replace("_", "-"), z2 = { type: s(2339), log(i) {
  var e = s;
  this[e(1981)](e(1413), i);
}, warn(i) {
  var e = s;
  this[e(1981)](e(897), i);
}, error(i) {
  var e = s;
  this[e(1981)](e(1882), i);
}, output(i, e) {
  var a, x;
  var t = s;
  (x = (a = console == null ? void 0 : console[i]) == null ? void 0 : a[t(1093)]) == null || x.call(a, console, e);
} };
class Re {
  constructor(e, t = {}) {
    this.init(e, t);
  }
  [s(1085)](e, t = {}) {
    var a = s;
    this[a(1458)] = t.prefix || a(2054), this[a(2339)] = e || z2, this.options = t, this.debug = t[a(1113)];
  }
  log(...e) {
    var t = s;
    return this[t(785)](e, t(1413), "", !0);
  }
  [s(897)](...e) {
    var t = s;
    return this[t(785)](e, "warn", "", !0);
  }
  [s(1882)](...e) {
    var t = s;
    return this[t(785)](e, t(1882), "");
  }
  [s(543)](...e) {
    var t = s;
    return this.forward(e, t(897), t(2381), !0);
  }
  forward(e, t, a, x) {
    var r = s;
    return x && !this[r(1113)] ? null : (p0(e[0]) && (e[0] = "" + a + this[r(1458)] + " " + e[0]), this[r(2339)][t](e));
  }
  [s(536)](e) {
    var t = s;
    return new Re(this[t(2339)], { prefix: this.prefix + ":" + e + ":", ...this[t(2479)] });
  }
  [s(2261)](e) {
    var t = s;
    return e = e || this.options, e[t(1458)] = e[t(1458)] || this.prefix, new Re(this[t(2339)], e);
  }
}
var ux = new Re();
class De {
  constructor() {
    var e = s;
    this[e(1471)] = {};
  }
  on(e, t) {
    var a = s;
    return e.split(" ")[a(1836)]((x) => {
      var r = a;
      this[r(1471)][x] || (this.observers[x] = /* @__PURE__ */ new Map());
      const n = this[r(1471)][x].get(t) || 0;
      this[r(1471)][x][r(1425)](t, n + 1);
    }), this;
  }
  [s(2233)](e, t) {
    var a = s;
    if (this[a(1471)][e]) {
      if (!t) {
        delete this[a(1471)][e];
        return;
      }
      this.observers[e].delete(t);
    }
  }
  [s(874)](e, ...t) {
    var a = s;
    this.observers[e] && Array[a(2512)](this.observers[e][a(1642)]()).forEach(([r, n]) => {
      for (let o = 0; o < n; o++)
        r(...t);
    }), this.observers["*"] && Array[a(2512)](this.observers["*"][a(1642)]())[a(1836)](([r, n]) => {
      for (let o = 0; o < n; o++)
        r.apply(r, [e, ...t]);
    });
  }
}
class ka extends De {
  constructor(e, t = { ns: ["translation"], defaultNS: "translation" }) {
    var a = s;
    super(), this[a(530)] = e || {}, this[a(2479)] = t, this[a(2479)][a(2357)] === void 0 && (this.options.keySeparator = "."), this.options[a(1745)] === void 0 && (this[a(2479)][a(1745)] = !0);
  }
  addNamespaces(e) {
    var t = s;
    this[t(2479)].ns[t(1562)](e) < 0 && this[t(2479)].ns[t(2523)](e);
  }
  removeNamespaces(e) {
    var t = s;
    const a = this.options.ns.indexOf(e);
    a > -1 && this[t(2479)].ns.splice(a, 1);
  }
  [s(1362)](e, t, a, x = {}) {
    var d, l;
    var r = s;
    const n = x[r(2357)] !== void 0 ? x[r(2357)] : this[r(2479)][r(2357)], o = x[r(1745)] !== void 0 ? x[r(1745)] : this[r(2479)][r(1745)];
    let c;
    e[r(1562)](".") > -1 ? c = e[r(1801)](".") : (c = [e, t], a && (Array[r(2462)](a) ? c[r(2523)](...a) : p0(a) && n ? c[r(2523)](...a[r(1801)](n)) : c[r(2523)](a)));
    const f = Ce(this[r(530)], c);
    return !f && !t && !a && e[r(1562)](".") > -1 && (e = c[0], t = c[1], a = c[r(2287)](2)[r(1030)](".")), f || !o || !p0(a) ? f : Bt((l = (d = this[r(530)]) == null ? void 0 : d[e]) == null ? void 0 : l[t], a, n);
  }
  [s(806)](e, t, a, x, r = { silent: !1 }) {
    var n = s;
    const o = r[n(2357)] !== void 0 ? r[n(2357)] : this.options.keySeparator;
    let c = [e, t];
    a && (c = c[n(712)](o ? a[n(1801)](o) : a)), e[n(1562)](".") > -1 && (c = e[n(1801)]("."), x = t, t = c[1]), this[n(720)](t), Pa(this[n(530)], c, x), r[n(2025)] || this.emit(n(2152), e, t, a, x);
  }
  [s(2417)](e, t, a, x = { silent: !1 }) {
    var r = s;
    for (const n in a)
      (p0(a[n]) || Array[r(2462)](a[n])) && this[r(806)](e, t, n, a[n], { silent: !0 });
    x[r(2025)] || this[r(874)](r(2152), e, t, a);
  }
  addResourceBundle(e, t, a, x, r, n = { silent: !1, skipCopy: !1 }) {
    var o = s;
    let c = [e, t];
    e[o(1562)](".") > -1 && (c = e.split("."), x = a, a = t, t = c[1]), this[o(720)](t);
    let f = Ce(this.data, c) || {};
    n[o(2103)] || (a = JSON.parse(JSON[o(847)](a))), x ? an(f, a, r) : f = { ...f, ...a }, Pa(this[o(530)], c, f), n.silent || this[o(874)](o(2152), e, t, a);
  }
  [s(1861)](e, t) {
    var a = s;
    this[a(1749)](e, t) && delete this[a(530)][e][t], this.removeNamespaces(t), this[a(874)](a(871), e, t);
  }
  [s(1749)](e, t) {
    var a = s;
    return this[a(1362)](e, t) !== void 0;
  }
  [s(2425)](e, t) {
    var a = s;
    return t || (t = this[a(2479)][a(1782)]), this[a(1362)](e, t);
  }
  [s(1804)](e) {
    return this.data[e];
  }
  [s(1509)](e) {
    var t = s;
    const a = this[t(1804)](e);
    return !!(a && Object.keys(a) || []).find((r) => a[r] && Object.keys(a[r]).length > 0);
  }
  [s(2127)]() {
    var e = s;
    return this[e(530)];
  }
}
var sn = { processors: {}, addPostProcessor(i) {
  var e = s;
  this[e(1630)][i.name] = i;
}, handle(i, e, t, a, x) {
  var r = s;
  return i[r(1836)]((n) => {
    var c;
    var o = r;
    e = ((c = this[o(1630)][n]) == null ? void 0 : c[o(2159)](e, t, a, x)) ?? e;
  }), e;
} };
const Ia = {}, Ca = (i) => !p0(i) && typeof i !== s(2529) && typeof i !== s(1225);
class Fe extends De {
  constructor(e, t = {}) {
    var a = s;
    super(), N2(["resourceStore", a(1561), "pluralResolver", a(2222), a(1428), a(600), a(2362)], e, this), this[a(2479)] = t, this.options[a(2357)] === void 0 && (this[a(2479)].keySeparator = "."), this[a(2339)] = ux.create(a(894));
  }
  [s(734)](e) {
    e && (this.language = e);
  }
  [s(1392)](e, t = { interpolation: {} }) {
    var a = s;
    const x = { ...t };
    if (e == null) return !1;
    const r = this[a(2271)](e, x);
    return (r == null ? void 0 : r[a(1432)]) !== void 0;
  }
  [s(2267)](e, t) {
    var a = s;
    let x = t[a(769)] !== void 0 ? t.nsSeparator : this[a(2479)][a(769)];
    x === void 0 && (x = ":");
    const r = t[a(2357)] !== void 0 ? t.keySeparator : this[a(2479)][a(2357)];
    let n = t.ns || this[a(2479)][a(1782)] || [];
    const o = x && e[a(1562)](x) > -1, c = !this[a(2479)][a(775)] && !t[a(2357)] && !this[a(2479)][a(1402)] && !t[a(769)] && !L2(e, x, r);
    if (o && !c) {
      const f = e.match(this[a(2222)][a(1163)]);
      if (f && f[a(1775)] > 0) return { key: e, namespaces: p0(n) ? [n] : n };
      const d = e[a(1801)](x);
      (x !== r || x === r && this[a(2479)].ns[a(1562)](d[0]) > -1) && (n = d[a(1200)]()), e = d[a(1030)](r);
    }
    return { key: e, namespaces: p0(n) ? [n] : n };
  }
  [s(524)](e, t, a) {
    var x = s;
    let r = typeof t === x(692) ? { ...t } : t;
    if (typeof r !== x(692) && this.options[x(684)] && (r = this[x(2479)].overloadTranslationOptionHandler(arguments)), typeof options === x(692) && (r = { ...r }), r || (r = {}), e == null) return "";
    Array[x(2462)](e) || (e = [String(e)]);
    const n = r[x(1821)] !== void 0 ? r.returnDetails : this[x(2479)].returnDetails, o = r[x(2357)] !== void 0 ? r[x(2357)] : this[x(2479)][x(2357)], { key: c, namespaces: f } = this[x(2267)](e[e[x(1775)] - 1], r), d = f[f[x(1775)] - 1];
    let l = r[x(769)] !== void 0 ? r[x(769)] : this[x(2479)][x(769)];
    l === void 0 && (l = ":");
    const u = r[x(488)] || this.language, v = r.appendNamespaceToCIMode || this[x(2479)][x(849)];
    if ((u == null ? void 0 : u[x(627)]()) === "cimode")
      return v ? n ? { res: "" + d + l + c, usedKey: c, exactUsedKey: c, usedLng: u, usedNS: d, usedParams: this[x(667)](r) } : "" + d + l + c : n ? { res: c, usedKey: c, exactUsedKey: c, usedLng: u, usedNS: d, usedParams: this[x(667)](r) } : c;
    const h = this.resolve(e, r);
    let m = h == null ? void 0 : h[x(1432)];
    const b = (h == null ? void 0 : h[x(1537)]) || c, w = (h == null ? void 0 : h[x(887)]) || c, S = [x(1095), x(1067), "[object RegExp]"], C = r[x(2402)] !== void 0 ? r[x(2402)] : this[x(2479)].joinArrays, N = !this[x(600)] || this[x(600)][x(833)], k = r.count !== void 0 && !p0(r[x(1068)]), E = Fe.hasDefaultValue(r), I = k ? this.pluralResolver.getSuffix(u, r.count, r) : "", D = r[x(1197)] && k ? this.pluralResolver[x(2016)](u, r.count, { ordinal: !1 }) : "", A = k && !r[x(1197)] && r.count === 0, j = A && r["defaultValue" + this[x(2479)][x(460)] + "zero"] || r[x(1768) + I] || r[x(1768) + D] || r[x(1768)];
    let R = m;
    N && !m && E && (R = j);
    const F = Ca(R), H = Object.prototype[x(1928)][x(1093)](R);
    if (N && R && F && S[x(1562)](H) < 0 && !(p0(C) && Array[x(2462)](R))) {
      if (!r.returnObjects && !this[x(2479)].returnObjects) {
        !this[x(2479)].returnedObjectHandler && this[x(2339)][x(897)](x(1193));
        const L = this[x(2479)][x(976)] ? this[x(2479)][x(976)](b, R, { ...r, ns: f }) : x(2264) + c + " (" + this[x(1490)] + x(472);
        return n ? (h[x(1432)] = L, h[x(2098)] = this.getUsedParamsDetails(r), h) : L;
      }
      if (o) {
        const L = Array[x(2462)](R), U = L ? [] : {}, J = L ? w : b;
        for (const t0 in R)
          if (Object[x(611)].hasOwnProperty[x(444)](R, t0)) {
            const e0 = "" + J + o + t0;
            E && !m ? U[t0] = this[x(524)](e0, { ...r, defaultValue: Ca(j) ? j[t0] : void 0, joinArrays: !1, ns: f }) : U[t0] = this[x(524)](e0, { ...r, joinArrays: !1, ns: f }), U[t0] === e0 && (U[t0] = R[t0]);
          }
        m = U;
      }
    } else if (N && p0(C) && Array.isArray(m))
      m = m[x(1030)](C), m && (m = this[x(953)](m, e, r, a));
    else {
      let L = !1, U = !1;
      !this[x(863)](m) && E && (L = !0, m = j), !this.isValidLookup(m) && (U = !0, m = c);
      const J = r[x(1552)] || this.options[x(1552)], t0 = J && U ? void 0 : m, e0 = E && j !== m && this.options[x(915)];
      if (U || L || e0) {
        if (this[x(2339)][x(1413)](e0 ? x(1570) : "missingKey", u, d, c, e0 ? j : m), o) {
          const g0 = this[x(2271)](c, { ...r, keySeparator: !1 });
          g0 && g0.res && this[x(2339)][x(897)](x(1533));
        }
        let c0 = [];
        const u0 = this[x(1561)][x(1960)](this[x(2479)][x(572)], r[x(488)] || this[x(1490)]);
        if (this[x(2479)][x(1826)] === x(668) && u0 && u0[0]) for (let g0 = 0; g0 < u0[x(1775)]; g0++)
          c0[x(2523)](u0[g0]);
        else this[x(2479)].saveMissingTo === x(799) ? c0 = this.languageUtils[x(1194)](r.lng || this[x(1490)]) : c0[x(2523)](r[x(488)] || this.language);
        const d0 = (g0, y0, D0) => {
          var T;
          var S0 = x;
          const J0 = E && D0 !== m ? D0 : t0;
          this[S0(2479)][S0(2035)] ? this[S0(2479)][S0(2035)](g0, d, y0, J0, e0, r) : (T = this[S0(1428)]) != null && T[S0(1481)] && this[S0(1428)][S0(1481)](g0, d, y0, J0, e0, r), this[S0(874)](S0(2518), g0, d, y0, m);
        };
        this[x(2479)][x(1481)] && (this[x(2479)].saveMissingPlurals && k ? c0[x(1836)]((g0) => {
          var y0 = x;
          const D0 = this[y0(598)][y0(2134)](g0, r);
          A && r[y0(1768) + this[y0(2479)][y0(460)] + y0(1063)] && D0[y0(1562)](this[y0(2479)][y0(460)] + "zero") < 0 && D0[y0(2523)](this[y0(2479)][y0(460)] + y0(1063)), D0[y0(1836)]((S0) => {
            var J0 = y0;
            d0([g0], c + S0, r[J0(1768) + S0] || j);
          });
        }) : d0(c0, c, j));
      }
      m = this[x(953)](m, e, r, h, a), U && m === c && this[x(2479)].appendNamespaceToMissingKey && (m = "" + d + l + c), (U || L) && this[x(2479)][x(1522)] && (m = this[x(2479)][x(1522)](this[x(2479)][x(2139)] ? "" + d + l + c : c, L ? m : void 0, r));
    }
    return n ? (h[x(1432)] = m, h[x(2098)] = this[x(667)](r), h) : m;
  }
  [s(953)](e, t, a, x, r) {
    var f, d;
    var n = s;
    if ((f = this.i18nFormat) != null && f.parse) e = this[n(600)][n(2078)](e, { ...this[n(2479)].interpolation[n(1829)], ...a }, a[n(488)] || this.language || x[n(1538)], x[n(1652)], x.usedKey, { resolved: x });
    else if (!a[n(1582)]) {
      a[n(1697)] && this[n(2222)][n(1085)]({ ...a, interpolation: { ...this[n(2479)][n(1697)], ...a[n(1697)] } });
      const l = p0(e) && (((d = a == null ? void 0 : a.interpolation) == null ? void 0 : d[n(713)]) !== void 0 ? a.interpolation.skipOnVariables : this[n(2479)][n(1697)][n(713)]);
      let u;
      if (l) {
        const h = e[n(1424)](this[n(2222)][n(1163)]);
        u = h && h.length;
      }
      let v = a[n(2304)] && !p0(a[n(2304)]) ? a.replace : a;
      if (this[n(2479)][n(1697)][n(1829)] && (v = { ...this[n(2479)][n(1697)].defaultVariables, ...v }), e = this[n(2222)][n(2219)](e, v, a[n(488)] || this.language || x[n(1538)], a), l) {
        const h = e[n(1424)](this[n(2222)].nestingRegexp), m = h && h[n(1775)];
        u < m && (a.nest = !1);
      }
      !a[n(488)] && x && x.res && (a[n(488)] = this[n(1490)] || x[n(1538)]), a[n(637)] !== !1 && (e = this.interpolator[n(637)](e, (...h) => {
        var m = n;
        return (r == null ? void 0 : r[0]) === h[0] && !a.context ? (this[m(2339)][m(897)](m(548) + h[0] + " in key: " + t[0]), null) : this[m(524)](...h, t);
      }, a)), a[n(1697)] && this[n(2222)][n(1777)]();
    }
    const o = a[n(982)] || this[n(2479)][n(982)], c = p0(o) ? [o] : o;
    return e != null && (c != null && c[n(1775)]) && a[n(2313)] !== !1 && (e = sn.handle(c, e, t, this.options && this[n(2479)][n(1563)] ? { i18nResolved: { ...x, usedParams: this[n(667)](a) }, ...a } : a, this)), e;
  }
  [s(2271)](e, t = {}) {
    var a = s;
    let x, r, n, o, c;
    return p0(e) && (e = [e]), e[a(1836)]((f) => {
      var d = a;
      if (this[d(863)](x)) return;
      const l = this[d(2267)](f, t), u = l[d(2477)];
      r = u;
      let v = l[d(2032)];
      this[d(2479)].fallbackNS && (v = v[d(712)](this[d(2479)][d(1232)]));
      const h = t[d(1068)] !== void 0 && !p0(t[d(1068)]), m = h && !t.ordinal && t[d(1068)] === 0, b = t.context !== void 0 && (p0(t[d(2003)]) || typeof t[d(2003)] === d(1225)) && t[d(2003)] !== "", w = t[d(809)] ? t[d(809)] : this[d(1561)][d(1194)](t.lng || this[d(1490)], t[d(572)]);
      v[d(1836)]((S) => {
        var N, k;
        var C = d;
        this[C(863)](x) || (c = S, !Ia[w[0] + "-" + S] && ((N = this[C(2362)]) != null && N[C(1878)]) && !((k = this.utils) != null && k[C(1878)](c)) && (Ia[w[0] + "-" + S] = !0, this[C(2339)][C(897)](C(1404) + r + C(2068) + w[C(1030)](", ") + C(1311) + c + C(1854), "This means something IS WRONG in your setup. You access the t function before i18next.init / i18next.loadNamespace / i18next.changeLanguage was done. Wait for the callback or Promise to resolve before accessing it!!!")), w.forEach((E) => {
          var j;
          var I = C;
          if (this[I(863)](x)) return;
          o = E;
          const D = [u];
          if ((j = this[I(600)]) != null && j.addLookupKeys) this[I(600)][I(741)](D, u, E, S, t);
          else {
            let R;
            h && (R = this[I(598)][I(2016)](E, t[I(1068)], t));
            const F = this[I(2479)].pluralSeparator + I(1063), H = this[I(2479)][I(460)] + I(1197) + this[I(2479)][I(460)];
            if (h && (D.push(u + R), t.ordinal && R[I(1562)](H) === 0 && D[I(2523)](u + R[I(2304)](H, this[I(2479)][I(460)])), m && D.push(u + F)), b) {
              const L = "" + u + this[I(2479)][I(2205)] + t[I(2003)];
              D[I(2523)](L), h && (D.push(L + R), t[I(1197)] && R[I(1562)](H) === 0 && D[I(2523)](L + R.replace(H, this[I(2479)].pluralSeparator)), m && D.push(L + F));
            }
          }
          let A;
          for (; A = D[I(2443)](); )
            !this.isValidLookup(x) && (n = A, x = this[I(1362)](E, S, A, t));
        }));
      });
    }), { res: x, usedKey: r, exactUsedKey: n, usedLng: o, usedNS: c };
  }
  [s(863)](e) {
    var t = s;
    return e !== void 0 && !(!this[t(2479)].returnNull && e === null) && !(!this[t(2479)][t(1419)] && e === "");
  }
  getResource(e, t, a, x = {}) {
    var n;
    var r = s;
    return (n = this[r(600)]) != null && n.getResource ? this[r(600)].getResource(e, t, a, x) : this.resourceStore[r(1362)](e, t, a, x);
  }
  [s(667)](e = {}) {
    var t = s;
    const a = [t(1768), t(1197), t(2003), "replace", "lng", t(809), t(572), "ns", t(2357), "nsSeparator", "returnObjects", t(1821), "joinArrays", t(982), t(1697)], x = e[t(2304)] && !p0(e.replace);
    let r = x ? e.replace : e;
    if (x && typeof e.count < "u" && (r[t(1068)] = e[t(1068)]), this.options[t(1697)][t(1829)] && (r = { ...this[t(2479)][t(1697)][t(1829)], ...r }), !x) {
      r = { ...r };
      for (const n of a)
        delete r[n];
    }
    return r;
  }
  static hasDefaultValue(e) {
    var t = s;
    const a = "defaultValue";
    for (const x in e)
      if (Object[t(611)].hasOwnProperty.call(e, x) && a === x.substring(0, a[t(1775)]) && e[x] !== void 0) return !0;
    return !1;
  }
}
class Ra {
  constructor(e) {
    var t = s;
    this.options = e, this.supportedLngs = this[t(2479)].supportedLngs || !1, this.logger = ux[t(536)](t(1561));
  }
  [s(1282)](e) {
    var t = s;
    if (e = re(e), !e || e[t(1562)]("-") < 0) return null;
    const a = e[t(1801)]("-");
    return a.length === 2 || (a[t(2443)](), a[a[t(1775)] - 1][t(627)]() === "x") ? null : this[t(1574)](a[t(1030)]("-"));
  }
  [s(941)](e) {
    var t = s;
    if (e = re(e), !e || e[t(1562)]("-") < 0) return e;
    const a = e[t(1801)]("-");
    return this[t(1574)](a[0]);
  }
  formatLanguageCode(e) {
    var t = s;
    if (p0(e) && e.indexOf("-") > -1) {
      let a;
      try {
        a = Intl[t(1384)](e)[0];
      } catch {
      }
      return a && this[t(2479)][t(986)] && (a = a.toLowerCase()), a || (this[t(2479)][t(986)] ? e[t(627)]() : e);
    }
    return this[t(2479)][t(491)] || this.options[t(986)] ? e[t(627)]() : e;
  }
  isSupportedCode(e) {
    var t = s;
    return (this[t(2479)][t(2282)] === t(792) || this[t(2479)][t(1786)]) && (e = this[t(941)](e)), !this[t(985)] || !this[t(985)][t(1775)] || this[t(985)][t(1562)](e) > -1;
  }
  [s(2004)](e) {
    var t = s;
    if (!e) return null;
    let a;
    return e[t(1836)]((x) => {
      var r = t;
      if (a) return;
      const n = this[r(1574)](x);
      (!this[r(2479)][r(985)] || this[r(1445)](n)) && (a = n);
    }), !a && this[t(2479)][t(985)] && e[t(1836)]((x) => {
      var r = t;
      if (a) return;
      const n = this[r(1282)](x);
      if (this[r(1445)](n)) return a = n;
      const o = this[r(941)](x);
      if (this[r(1445)](o)) return a = o;
      a = this[r(2479)][r(985)][r(951)]((c) => {
        var f = r;
        if (c === o) return c;
        if (!(c[f(1562)]("-") < 0 && o[f(1562)]("-") < 0) && (c[f(1562)]("-") > 0 && o.indexOf("-") < 0 && c[f(901)](0, c[f(1562)]("-")) === o || c[f(1562)](o) === 0 && o.length > 1))
          return c;
      });
    }), a || (a = this[t(1960)](this[t(2479)][t(572)])[0]), a;
  }
  [s(1960)](e, t) {
    var a = s;
    if (!e) return [];
    if (typeof e == "function" && (e = e(t)), p0(e) && (e = [e]), Array[a(2462)](e)) return e;
    if (!t) return e[a(2178)] || [];
    let x = e[t];
    return x || (x = e[this[a(1282)](t)]), x || (x = e[this[a(1574)](t)]), x || (x = e[this.getLanguagePartFromCode(t)]), x || (x = e[a(2178)]), x || [];
  }
  [s(1194)](e, t) {
    var a = s;
    const x = this[a(1960)]((t === !1 ? [] : t) || this.options[a(572)] || [], e), r = [], n = (o) => {
      var c = a;
      o && (this[c(1445)](o) ? r[c(2523)](o) : this[c(2339)][c(897)](c(709) + o));
    };
    return p0(e) && (e[a(1562)]("-") > -1 || e[a(1562)]("_") > -1) ? (this[a(2479)][a(2282)] !== "languageOnly" && n(this.formatLanguageCode(e)), this[a(2479)].load !== a(792) && this.options[a(2282)] !== "currentOnly" && n(this[a(1282)](e)), this.options[a(2282)] !== a(672) && n(this[a(941)](e))) : p0(e) && n(this[a(1574)](e)), x[a(1836)]((o) => {
      var c = a;
      r[c(1562)](o) < 0 && n(this[c(1574)](o));
    }), r;
  }
}
const Fa = { zero: 0, one: 1, two: 2, few: 3, many: 4, other: 5 }, Na = { select: (i) => s(i === 1 ? 1623 : 1608), resolvedOptions: () => ({ pluralCategories: ["one", "other"] }) };
class V2 {
  constructor(e, t = {}) {
    var a = s;
    this[a(1561)] = e, this.options = t, this.logger = ux[a(536)](a(598)), this[a(1433)] = {};
  }
  addRule(e, t) {
    this.rules[e] = t;
  }
  clearCache() {
    var e = s;
    this[e(1433)] = {};
  }
  [s(2297)](e, t = {}) {
    var a = s;
    const x = re(e === "dev" ? "en" : e), r = t[a(1197)] ? "ordinal" : a(776), n = JSON[a(847)]({ cleanedCode: x, type: r });
    if (n in this[a(1433)]) return this[a(1433)][n];
    let o;
    try {
      o = new Intl[a(439)](x, { type: r });
    } catch {
      if (!Intl) return this.logger.error("No Intl support, please use an Intl polyfill!"), Na;
      if (!e.match(/-|_/)) return Na;
      const f = this[a(1561)].getLanguagePartFromCode(e);
      o = this.getRule(f, t);
    }
    return this[a(1433)][n] = o, o;
  }
  [s(831)](e, t = {}) {
    var a = s;
    let x = this[a(2297)](e, t);
    return x || (x = this[a(2297)](a(1252), t)), (x == null ? void 0 : x.resolvedOptions().pluralCategories[a(1775)]) > 1;
  }
  [s(2091)](e, t, a = {}) {
    var x = s;
    return this[x(2134)](e, a).map((r) => "" + t + r);
  }
  [s(2134)](e, t = {}) {
    var a = s;
    let x = this.getRule(e, t);
    return x || (x = this.getRule(a(1252), t)), x ? x[a(2505)]()[a(2047)][a(2380)]((r, n) => Fa[r] - Fa[n])[a(866)]((r) => "" + this[a(2479)][a(2416)] + (t[a(1197)] ? a(1197) + this[a(2479)][a(2416)] : "") + r) : [];
  }
  [s(2016)](e, t, a = {}) {
    var x = s;
    const r = this[x(2297)](e, a);
    return r ? "" + this[x(2479)][x(2416)] + (a[x(1197)] ? x(1197) + this[x(2479)][x(2416)] : "") + r[x(628)](t) : (this[x(2339)][x(897)](x(1103) + e), this[x(2016)](x(1252), t, a));
  }
}
const Oa = (i, e, t, a = ".", x = !0) => {
  let r = A2(i, e, t);
  return !r && x && p0(t) && (r = Bt(i, t, a), r === void 0 && (r = Bt(e, t, a))), r;
}, Rt = (i) => i[s(2304)](/\$/g, "$$$$");
class H2 {
  constructor(e = {}) {
    var a;
    var t = s;
    this[t(2339)] = ux.create("interpolator"), this[t(2479)] = e, this.format = ((a = e == null ? void 0 : e[t(1697)]) == null ? void 0 : a[t(2209)]) || ((x) => x), this[t(1085)](e);
  }
  [s(1085)](e = {}) {
    var t = s;
    e[t(1697)] || (e[t(1697)] = { escapeValue: !0 });
    const { escape: a, escapeValue: x, useRawValueToEscape: r, prefix: n, prefixEscaped: o, suffix: c, suffixEscaped: f, formatSeparator: d, unescapeSuffix: l, unescapePrefix: u, nestingPrefix: v, nestingPrefixEscaped: h, nestingSuffix: m, nestingSuffixEscaped: b, nestingOptionsSeparator: w, maxReplaces: S, alwaysFormat: C } = e.interpolation;
    this[t(1295)] = a !== void 0 ? a : D2, this[t(761)] = x !== void 0 ? x : !0, this[t(954)] = r !== void 0 ? r : !1, this[t(1458)] = n ? zx(n) : o || "{{", this.suffix = c ? zx(c) : f || "}}", this[t(850)] = d || ",", this[t(2533)] = l ? "" : u || "-", this[t(997)] = this.unescapePrefix ? "" : l || "", this[t(2503)] = v ? zx(v) : h || zx(t(1277)), this[t(1129)] = m ? zx(m) : b || zx(")"), this[t(1784)] = w || ",", this[t(1168)] = S || 1e3, this.alwaysFormat = C !== void 0 ? C : !1, this[t(727)]();
  }
  [s(1777)]() {
    var e = s;
    this.options && this.init(this[e(2479)]);
  }
  [s(727)]() {
    var e = s;
    const t = (a, x) => {
      var r = B;
      return (a == null ? void 0 : a[r(1469)]) === x ? (a[r(1050)] = 0, a) : new RegExp(x, "g");
    };
    this[e(2012)] = t(this[e(2012)], this.prefix + e(1394) + this[e(695)]), this[e(839)] = t(this[e(839)], "" + this[e(1458)] + this.unescapePrefix + e(1394) + this.unescapeSuffix + this[e(695)]), this[e(1163)] = t(this[e(1163)], this[e(2503)] + e(1394) + this[e(1129)]);
  }
  interpolate(e, t, a, x) {
    var h;
    var r = s;
    let n, o, c;
    const f = this[r(2479)] && this[r(2479)][r(1697)] && this[r(2479)].interpolation[r(1829)] || {}, d = (m) => {
      var b = r;
      if (m[b(1562)](this[b(850)]) < 0) {
        const N = Oa(t, f, m, this[b(2479)].keySeparator, this[b(2479)].ignoreJSONStructure);
        return this[b(2448)] ? this[b(2209)](N, void 0, a, { ...x, ...t, interpolationkey: m }) : N;
      }
      const w = m.split(this[b(850)]), S = w[b(1200)]()[b(2426)](), C = w[b(1030)](this[b(850)])[b(2426)]();
      return this[b(2209)](Oa(t, f, S, this.options[b(2357)], this[b(2479)][b(1745)]), C, a, { ...x, ...t, interpolationkey: S });
    };
    this[r(727)]();
    const l = (x == null ? void 0 : x[r(1243)]) || this.options[r(1243)], u = ((h = x == null ? void 0 : x[r(1697)]) == null ? void 0 : h[r(713)]) !== void 0 ? x[r(1697)][r(713)] : this[r(2479)].interpolation[r(713)];
    return [{ regex: this[r(839)], safeValue: (m) => Rt(m) }, { regex: this[r(2012)], safeValue: (m) => this.escapeValue ? Rt(this.escape(m)) : Rt(m) }][r(1836)]((m) => {
      var b = r;
      for (c = 0; n = m[b(552)].exec(e); ) {
        const w = n[1][b(2426)]();
        if (o = d(w), o === void 0)
          if (typeof l === b(2444)) {
            const C = l(e, n, x);
            o = p0(C) ? C : "";
          } else if (x && Object.prototype[b(1038)][b(444)](x, w)) o = "";
          else if (u) {
            o = n[0];
            continue;
          } else this[b(2339)][b(897)](b(2203) + w + b(1477) + e), o = "";
        else !p0(o) && !this[b(954)] && (o = wa(o));
        const S = m[b(1279)](o);
        if (e = e.replace(n[0], S), u ? (m[b(552)][b(1050)] += o.length, m[b(552)][b(1050)] -= n[0][b(1775)]) : m[b(552)][b(1050)] = 0, c++, c >= this[b(1168)]) break;
      }
    }), e;
  }
  nest(e, t, a = {}) {
    var x = s;
    let r, n, o;
    const c = (f, d) => {
      var l = B;
      const u = this[l(1784)];
      if (f[l(1562)](u) < 0) return f;
      const v = f[l(1801)](new RegExp(u + l(2337)));
      let h = "{" + v[1];
      f = v[0], h = this[l(2219)](h, o);
      const m = h[l(1424)](/'/g), b = h[l(1424)](/"/g);
      (((m == null ? void 0 : m[l(1775)]) ?? 0) % 2 === 0 && !b || b.length % 2 !== 0) && (h = h[l(2304)](/'/g, '"'));
      try {
        o = JSON[l(2078)](h), d && (o = { ...d, ...o });
      } catch (w) {
        return this[l(2339)][l(897)](l(2377) + f, w), "" + f + u + h;
      }
      return o[l(1768)] && o[l(1768)][l(1562)](this[l(1458)]) > -1 && delete o.defaultValue, f;
    };
    for (; r = this[x(1163)][x(1512)](e); ) {
      let f = [];
      o = { ...a }, o = o[x(2304)] && !p0(o[x(2304)]) ? o.replace : o, o[x(2313)] = !1, delete o.defaultValue;
      let d = !1;
      if (r[0][x(1562)](this[x(850)]) !== -1 && !/{.*}/[x(2263)](r[1])) {
        const l = r[1][x(1801)](this[x(850)])[x(866)]((u) => u[x(2426)]());
        r[1] = l[x(1200)](), f = l, d = !0;
      }
      if (n = t(c[x(444)](this, r[1][x(2426)](), o), o), n && r[0] === e && !p0(n)) return n;
      p0(n) || (n = wa(n)), !n && (this[x(2339)][x(897)]("missed to resolve " + r[1] + x(956) + e), n = ""), d && (n = f[x(1206)]((l, u) => this[x(2209)](l, u, a.lng, { ...a, interpolationkey: r[1][x(2426)]() }), n[x(2426)]())), e = e[x(2304)](r[0], n), this[x(2012)].lastIndex = 0;
    }
    return e;
  }
}
const U2 = (i) => {
  var e = s;
  let t = i[e(627)]()[e(2426)]();
  const a = {};
  if (i.indexOf("(") > -1) {
    const x = i.split("(");
    t = x[0][e(627)]()[e(2426)]();
    const r = x[1].substring(0, x[1][e(1775)] - 1);
    t === e(2366) && r[e(1562)](":") < 0 ? a[e(2366)] || (a[e(2366)] = r[e(2426)]()) : t === "relativetime" && r[e(1562)](":") < 0 ? a[e(2167)] || (a.range = r[e(2426)]()) : r[e(1801)](";")[e(1836)]((o) => {
      var c = e;
      if (o) {
        const [f, ...d] = o[c(1801)](":"), l = d[c(1030)](":").trim().replace(/^'+|'+$/g, ""), u = f.trim();
        a[u] || (a[u] = l), l === c(2093) && (a[u] = !1), l === c(1164) && (a[u] = !0), isNaN(l) || (a[u] = parseInt(l, 10));
      }
    });
  }
  return { formatName: t, formatOptions: a };
}, qa = (i) => {
  const e = {};
  return (t, a, x) => {
    var r = B;
    let n = x;
    x && x.interpolationkey && x[r(474)] && x[r(474)][x.interpolationkey] && x[x[r(2039)]] && (n = { ...n, [x[r(2039)]]: void 0 });
    const o = a + JSON[r(847)](n);
    let c = e[o];
    return !c && (c = i(re(a), x), e[o] = c), c(t);
  };
}, Z2 = (i) => (e, t, a) => i(re(t), a)(e);
class B2 {
  constructor(e = {}) {
    var t = s;
    this.logger = ux[t(536)](t(1130)), this[t(2479)] = e, this[t(1085)](e);
  }
  [s(1085)](e, t = { interpolation: {} }) {
    var a = s;
    this.formatSeparator = t[a(1697)].formatSeparator || ",";
    const x = t.cacheInBuiltFormats ? qa : Z2;
    this.formats = { number: x((r, n) => {
      var o = a;
      const c = new Intl.NumberFormat(r, { ...n });
      return (f) => c[o(2209)](f);
    }), currency: x((r, n) => {
      var o = a;
      const c = new Intl[o(1076)](r, { ...n, style: o(2366) });
      return (f) => c.format(f);
    }), datetime: x((r, n) => {
      var o = a;
      const c = new Intl[o(753)](r, { ...n });
      return (f) => c[o(2209)](f);
    }), relativetime: x((r, n) => {
      var o = a;
      const c = new Intl[o(1222)](r, { ...n });
      return (f) => c[o(2209)](f, n[o(2167)] || o(1408));
    }), list: x((r, n) => {
      var o = a;
      const c = new Intl[o(2129)](r, { ...n });
      return (f) => c[o(2209)](f);
    }) };
  }
  add(e, t) {
    var a = s;
    this.formats[e[a(627)]().trim()] = t;
  }
  addCached(e, t) {
    var a = s;
    this[a(735)][e.toLowerCase().trim()] = qa(t);
  }
  [s(2209)](e, t, a, x = {}) {
    var r = s;
    const n = t[r(1801)](this.formatSeparator);
    if (n[r(1775)] > 1 && n[0][r(1562)]("(") > 1 && n[0][r(1562)](")") < 0 && n[r(951)]((c) => c.indexOf(")") > -1)) {
      const c = n[r(1716)]((f) => f[r(1562)](")") > -1);
      n[0] = [n[0], ...n.splice(1, c)].join(this[r(850)]);
    }
    return n[r(1206)]((c, f) => {
      var v;
      var d = r;
      const { formatName: l, formatOptions: u } = U2(f);
      if (this.formats[l]) {
        let h = c;
        try {
          const m = ((v = x == null ? void 0 : x[d(474)]) == null ? void 0 : v[x[d(2039)]]) || {}, b = m.locale || m[d(488)] || x.locale || x[d(488)] || a;
          h = this.formats[l](c, b, { ...u, ...x, ...m });
        } catch (m) {
          this.logger.warn(m);
        }
        return h;
      } else this[d(2339)][d(897)](d(729) + l);
      return c;
    }, e);
  }
}
const K2 = (i, e) => {
  var t = s;
  i.pending[e] !== void 0 && (delete i[t(892)][e], i[t(561)]--);
};
class W2 extends De {
  constructor(e, t, a, x = {}) {
    var n, o;
    var r = s;
    super(), this[r(2396)] = e, this[r(2017)] = t, this.services = a, this[r(1561)] = a[r(1561)], this[r(2479)] = x, this.logger = ux[r(536)](r(1428)), this.waitingReads = [], this[r(529)] = x[r(529)] || 10, this.readingCalls = 0, this[r(461)] = x[r(461)] >= 0 ? x.maxRetries : 5, this[r(942)] = x[r(942)] >= 1 ? x.retryTimeout : 350, this[r(757)] = {}, this[r(1407)] = [], (o = (n = this[r(2396)]) == null ? void 0 : n.init) == null || o.call(n, a, x[r(2396)], x);
  }
  [s(931)](e, t, a, x) {
    var r = s;
    const n = {}, o = {}, c = {}, f = {};
    return e[r(1836)]((d) => {
      var l = r;
      let u = !0;
      t[l(1836)]((v) => {
        var h = l;
        const m = d + "|" + v;
        !a[h(1307)] && this[h(2017)][h(1749)](d, v) ? this[h(757)][m] = 2 : this.state[m] < 0 || (this[h(757)][m] === 1 ? o[m] === void 0 && (o[m] = !0) : (this[h(757)][m] = 1, u = !1, o[m] === void 0 && (o[m] = !0), n[m] === void 0 && (n[m] = !0), f[v] === void 0 && (f[v] = !0)));
      }), u || (c[d] = !0);
    }), (Object[r(870)](n)[r(1775)] || Object.keys(o)[r(1775)]) && this[r(1407)][r(2523)]({ pending: o, pendingCount: Object[r(870)](o)[r(1775)], loaded: {}, errors: [], callback: x }), { toLoad: Object.keys(n), pending: Object.keys(o), toLoadLanguages: Object[r(870)](c), toLoadNamespaces: Object[r(870)](f) };
  }
  [s(817)](e, t, a) {
    var x = s;
    const r = e[x(1801)]("|"), n = r[0], o = r[1];
    t && this.emit(x(1612), n, o, t), !t && a && this[x(2017)].addResourceBundle(n, o, a, void 0, void 0, { skipCopy: !0 }), this.state[e] = t ? -1 : 2, t && a && (this[x(757)][e] = 0);
    const c = {};
    this[x(1407)].forEach((f) => {
      var d = x;
      q2(f[d(817)], [n], o), K2(f, e), t && f[d(1065)].push(t), f[d(561)] === 0 && !f[d(2276)] && (Object[d(870)](f.loaded)[d(1836)]((l) => {
        var u = d;
        c[l] || (c[l] = {});
        const v = f[u(817)][l];
        v.length && v[u(1836)]((h) => {
          c[l][h] === void 0 && (c[l][h] = !0);
        });
      }), f[d(2276)] = !0, f.errors.length ? f[d(1680)](f[d(1065)]) : f[d(1680)]());
    }), this[x(874)]("loaded", c), this[x(1407)] = this[x(1407)][x(2173)]((f) => !f[x(2276)]);
  }
  [s(2398)](e, t, a, x = 0, r = this[s(942)], n) {
    var o = s;
    if (!e[o(1775)]) return n(null, {});
    if (this[o(1018)] >= this.maxParallelReads) {
      this[o(539)][o(2523)]({ lng: e, ns: t, fcName: a, tried: x, wait: r, callback: n });
      return;
    }
    this.readingCalls++;
    const c = (d, l) => {
      var u = o;
      if (this[u(1018)]--, this[u(539)][u(1775)] > 0) {
        const v = this[u(539)].shift();
        this[u(2398)](v.lng, v.ns, v[u(489)], v[u(926)], v[u(2286)], v[u(1680)]);
      }
      if (d && l && x < this[u(461)]) {
        setTimeout(() => {
          var v = u;
          this[v(2398)].call(this, e, t, a, x + 1, r * 2, n);
        }, r);
        return;
      }
      n(d, l);
    }, f = this[o(2396)][a][o(1982)](this.backend);
    if (f.length === 2) {
      try {
        const d = f(e, t);
        d && typeof d[o(2195)] === o(2444) ? d.then((l) => c(null, l))[o(1856)](c) : c(null, d);
      } catch (d) {
        c(d);
      }
      return;
    }
    return f(e, t, c);
  }
  [s(1001)](e, t, a = {}, x) {
    var r = s;
    if (!this[r(2396)]) return this.logger.warn("No backend was added via i18next.use. Will not load resources."), x && x();
    p0(e) && (e = this[r(1561)][r(1194)](e)), p0(t) && (t = [t]);
    const n = this[r(931)](e, t, a, x);
    if (!n[r(1369)][r(1775)])
      return n[r(892)][r(1775)] || x(), null;
    n[r(1369)][r(1836)]((o) => {
      var c = r;
      this[c(663)](o);
    });
  }
  [s(2282)](e, t, a) {
    var x = s;
    this[x(1001)](e, t, {}, a);
  }
  [s(1307)](e, t, a) {
    var x = s;
    this[x(1001)](e, t, { reload: !0 }, a);
  }
  [s(663)](e, t = "") {
    var a = s;
    const x = e[a(1801)]("|"), r = x[0], n = x[1];
    this.read(r, n, a(2398), void 0, void 0, (o, c) => {
      var f = a;
      o && this.logger.warn(t + "loading namespace " + n + f(1273) + r + f(1236), o), !o && c && this.logger[f(1413)](t + f(1572) + n + " for language " + r, c), this[f(817)](e, o, c);
    });
  }
  [s(1481)](e, t, a, x, r, n = {}, o = () => {
  }) {
    var f, d, l, u, v;
    var c = s;
    if ((d = (f = this[c(2053)]) == null ? void 0 : f[c(2362)]) != null && d[c(1878)] && !((u = (l = this.services) == null ? void 0 : l[c(2362)]) != null && u[c(1878)](t))) {
      this[c(2339)].warn('did not save key "' + a + c(635) + t + c(1854), "This means something IS WRONG in your setup. You access the t function before i18next.init / i18next.loadNamespace / i18next.changeLanguage was done. Wait for the callback or Promise to resolve before accessing it!!!");
      return;
    }
    if (!(a == null || a === "")) {
      if ((v = this[c(2396)]) != null && v[c(536)]) {
        const h = { ...n, isUpdate: r }, m = this.backend[c(536)][c(1982)](this[c(2396)]);
        if (m[c(1775)] < 6) try {
          let b;
          m[c(1775)] === 5 ? b = m(e, t, a, x, h) : b = m(e, t, a, x), b && typeof b[c(2195)] == "function" ? b[c(2195)]((w) => o(null, w))[c(1856)](o) : o(null, b);
        } catch (b) {
          o(b);
        }
        else m(e, t, a, x, o, h);
      }
      !e || !e[0] || this[c(2017)][c(806)](e[0], t, a, x);
    }
  }
}
const Aa = () => ({ debug: !1, initAsync: !0, ns: ["translation"], defaultNS: [s(1548)], fallbackLng: [s(1252)], fallbackNS: !1, supportedLngs: !1, nonExplicitSupportedLngs: !1, load: s(799), preload: !1, simplifyPluralSuffix: !0, keySeparator: ".", nsSeparator: ":", pluralSeparator: "_", contextSeparator: "_", partialBundledLanguages: !1, saveMissing: !1, updateMissing: !1, saveMissingTo: s(668), saveMissingPlurals: !0, missingKeyHandler: !1, missingInterpolationHandler: !1, postProcess: !1, postProcessPassResolved: !1, returnNull: !1, returnEmptyString: !0, returnObjects: !1, joinArrays: !1, returnedObjectHandler: !1, parseMissingKeyHandler: !1, appendNamespaceToMissingKey: !1, appendNamespaceToCIMode: !1, overloadTranslationOptionHandler: (i) => {
  var e = s;
  let t = {};
  if (typeof i[1] === e(692) && (t = i[1]), p0(i[1]) && (t[e(1768)] = i[1]), p0(i[2]) && (t[e(1584)] = i[2]), typeof i[2] === e(692) || typeof i[3] === e(692)) {
    const a = i[3] || i[2];
    Object[e(870)](a).forEach((x) => {
      t[x] = a[x];
    });
  }
  return t;
}, interpolation: { escapeValue: !0, format: (i) => i, prefix: "{{", suffix: "}}", formatSeparator: ",", unescapePrefix: "-", nestingPrefix: "$t(", nestingSuffix: ")", nestingOptionsSeparator: ",", maxReplaces: 1e3, skipOnVariables: !0 }, cacheInBuiltFormats: !0 }), Ta = (i) => {
  var t, a;
  var e = s;
  return p0(i.ns) && (i.ns = [i.ns]), p0(i[e(572)]) && (i[e(572)] = [i.fallbackLng]), p0(i[e(1232)]) && (i[e(1232)] = [i[e(1232)]]), ((a = (t = i[e(985)]) == null ? void 0 : t.indexOf) == null ? void 0 : a.call(t, e(2352))) < 0 && (i[e(985)] = i[e(985)][e(712)]([e(2352)])), typeof i[e(605)] === e(2529) && (i[e(2008)] = i.initImmediate), i;
}, ue = () => {
}, J2 = (i) => {
  var e = s;
  Object[e(1223)](Object.getPrototypeOf(i))[e(1836)]((a) => {
    var x = e;
    typeof i[a] === x(2444) && (i[a] = i[a].bind(i));
  });
};
class ae extends De {
  constructor(e = {}, t) {
    var a = s;
    if (super(), this[a(2479)] = Ta(e), this[a(2053)] = {}, this.logger = ux, this[a(2478)] = { external: [] }, J2(this), t && !this[a(878)] && !e[a(2432)]) {
      if (!this[a(2479)][a(2008)]) return this[a(1085)](e, t), this;
      setTimeout(() => {
        var x = a;
        this[x(1085)](e, t);
      }, 0);
    }
  }
  init(e = {}, t) {
    var a = s;
    this[a(650)] = !0, typeof e == "function" && (t = e, e = {}), e[a(1782)] == null && e.ns && (p0(e.ns) ? e[a(1782)] = e.ns : e.ns.indexOf("translation") < 0 && (e[a(1782)] = e.ns[0]));
    const x = Aa();
    this[a(2479)] = { ...x, ...this.options, ...Ta(e) }, this[a(2479)][a(1697)] = { ...x.interpolation, ...this.options.interpolation }, e[a(2357)] !== void 0 && (this.options.userDefinedKeySeparator = e[a(2357)]), e.nsSeparator !== void 0 && (this[a(2479)][a(1402)] = e.nsSeparator);
    const r = (d) => d ? typeof d == "function" ? new d() : d : null;
    if (!this[a(2479)].isClone) {
      this[a(2478)].logger ? ux[a(1085)](r(this.modules[a(2339)]), this.options) : ux.init(null, this[a(2479)]);
      let d;
      this.modules[a(1130)] ? d = this[a(2478)][a(1130)] : d = B2;
      const l = new Ra(this[a(2479)]);
      this[a(2017)] = new ka(this[a(2479)].resources, this[a(2479)]);
      const u = this[a(2053)];
      u.logger = ux, u.resourceStore = this[a(2017)], u[a(1561)] = l, u[a(598)] = new V2(l, { prepend: this.options[a(460)], simplifyPluralSuffix: this[a(2479)][a(2059)] }), d && (!this[a(2479)][a(1697)][a(2209)] || this.options[a(1697)][a(2209)] === x[a(1697)][a(2209)]) && (u.formatter = r(d), u[a(1130)][a(1085)](u, this.options), this[a(2479)].interpolation[a(2209)] = u[a(1130)][a(2209)][a(1982)](u[a(1130)])), u.interpolator = new H2(this.options), u[a(2362)] = { hasLoadedNamespace: this[a(1878)][a(1982)](this) }, u.backendConnector = new W2(r(this[a(2478)][a(2396)]), u[a(1754)], u, this.options), u[a(1428)].on("*", (v, ...h) => {
        this.emit(v, ...h);
      }), this[a(2478)][a(955)] && (u.languageDetector = r(this[a(2478)][a(955)]), u[a(955)][a(1085)] && u[a(955)][a(1085)](u, this.options.detection, this[a(2479)])), this[a(2478)][a(600)] && (u[a(600)] = r(this[a(2478)].i18nFormat), u[a(600)][a(1085)] && u[a(600)][a(1085)](this)), this[a(894)] = new Fe(this[a(2053)], this[a(2479)]), this[a(894)].on("*", (v, ...h) => {
        var m = a;
        this[m(874)](v, ...h);
      }), this[a(2478)][a(646)][a(1836)]((v) => {
        var h = a;
        v[h(1085)] && v[h(1085)](this);
      });
    }
    if (this[a(2209)] = this.options[a(1697)][a(2209)], t || (t = ue), this[a(2479)].fallbackLng && !this[a(2053)][a(955)] && !this[a(2479)][a(488)]) {
      const d = this.services[a(1561)][a(1960)](this[a(2479)].fallbackLng);
      d[a(1775)] > 0 && d[0] !== "dev" && (this[a(2479)][a(488)] = d[0]);
    }
    !this[a(2053)][a(955)] && !this[a(2479)][a(488)] && this[a(2339)][a(897)](a(606)), [a(1362), "hasResourceBundle", a(2425), a(1804)][a(1836)]((d) => {
      var l = a;
      this[d] = (...u) => this[l(2017)][d](...u);
    }), ["addResource", a(2417), a(1457), a(1861)][a(1836)]((d) => {
      this[d] = (...l) => (this.store[d](...l), this);
    });
    const c = Qx(), f = () => {
      var d = a;
      const l = (u, v) => {
        var h = B;
        this[h(650)] = !1, this[h(878)] && !this[h(2227)] && this.logger[h(897)](h(1066)), this[h(878)] = !0, this[h(2479)][h(2432)] || this[h(2339)][h(1413)]("initialized", this[h(2479)]), this[h(874)](h(1048), this[h(2479)]), c.resolve(v), t(u, v);
      };
      if (this[d(1452)] && !this[d(878)]) return l(null, this.t.bind(this));
      this[d(734)](this[d(2479)][d(488)], l);
    };
    return this[a(2479)][a(1617)] || !this.options[a(2008)] ? f() : setTimeout(f, 0), c;
  }
  [s(501)](e, t = ue) {
    var n, o;
    var a = s;
    let x = t;
    const r = p0(e) ? e : this[a(1490)];
    if (typeof e === a(2444) && (x = e), !this[a(2479)][a(1617)] || this[a(2479)][a(2056)]) {
      if ((r == null ? void 0 : r.toLowerCase()) === a(2352) && (!this[a(2479)].preload || this[a(2479)][a(2092)][a(1775)] === 0)) return x();
      const c = [], f = (d) => {
        var l = a;
        if (!d || d === l(2352)) return;
        this[l(2053)][l(1561)].toResolveHierarchy(d).forEach((v) => {
          var h = l;
          v !== h(2352) && c[h(1562)](v) < 0 && c[h(2523)](v);
        });
      };
      r ? f(r) : this[a(2053)][a(1561)][a(1960)](this[a(2479)][a(572)])[a(1836)]((l) => f(l)), (o = (n = this.options[a(2092)]) == null ? void 0 : n[a(1836)]) == null || o.call(n, (d) => f(d)), this[a(2053)][a(1428)][a(2282)](c, this.options.ns, (d) => {
        var l = a;
        !d && !this[l(520)] && this[l(1490)] && this.setResolvedLanguage(this[l(1490)]), x(d);
      });
    } else x(null);
  }
  [s(1609)](e, t, a) {
    var x = s;
    const r = Qx();
    return typeof e === x(2444) && (a = e, e = void 0), typeof t == "function" && (a = t, t = void 0), e || (e = this[x(1452)]), t || (t = this[x(2479)].ns), a || (a = ue), this[x(2053)][x(1428)][x(1307)](e, t, (n) => {
      r.resolve(), a(n);
    }), r;
  }
  [s(551)](e) {
    var t = s;
    if (!e) throw new Error(t(738));
    if (!e[t(1529)]) throw new Error(t(499));
    return e.type === t(2396) && (this.modules[t(2396)] = e), (e[t(1529)] === t(2339) || e[t(1413)] && e.warn && e[t(1882)]) && (this[t(2478)][t(2339)] = e), e.type === t(955) && (this.modules[t(955)] = e), e[t(1529)] === "i18nFormat" && (this.modules.i18nFormat = e), e.type === t(807) && sn.addPostProcessor(e), e.type === t(1130) && (this.modules.formatter = e), e[t(1529)] === t(2358) && this[t(2478)][t(646)][t(2523)](e), this;
  }
  [s(1742)](e) {
    var t = s;
    if (!(!e || !this.languages) && !([t(2352), "dev"].indexOf(e) > -1)) {
      for (let a = 0; a < this.languages[t(1775)]; a++) {
        const x = this[t(1452)][a];
        if (!([t(2352), t(1252)].indexOf(x) > -1) && this[t(2017)][t(1509)](x)) {
          this[t(520)] = x;
          break;
        }
      }
      !this[t(520)] && this.languages[t(1562)](e) < 0 && this.store[t(1509)](e) && (this.resolvedLanguage = e, this[t(1452)].unshift(e));
    }
  }
  [s(734)](e, t) {
    var a = s;
    this.isLanguageChangingTo = e;
    const x = Qx();
    this[a(874)](a(934), e);
    const r = (c) => {
      var f = a;
      this[f(1490)] = c, this[f(1452)] = this[f(2053)].languageUtils[f(1194)](c), this[f(520)] = void 0, this[f(1742)](c);
    }, n = (c, f) => {
      var d = a;
      f ? this[d(1926)] === e && (r(f), this[d(894)][d(734)](f), this[d(1926)] = void 0, this[d(874)](d(990), f), this[d(2339)][d(1413)](d(990), f)) : this.isLanguageChangingTo = void 0, x[d(2271)]((...l) => this.t(...l)), t && t(c, (...l) => this.t(...l));
    }, o = (c) => {
      var u, v;
      var f = a;
      !e && !c && this[f(2053)][f(955)] && (c = []);
      const d = p0(c) ? c : c && c[0], l = this[f(2017)].hasLanguageSomeTranslations(d) ? d : this.services[f(1561)][f(2004)](p0(c) ? [c] : c);
      l && (!this[f(1490)] && r(l), this[f(894)][f(1490)] || this[f(894)][f(734)](l), (v = (u = this.services[f(955)]) == null ? void 0 : u[f(436)]) == null || v.call(u, l)), this[f(501)](l, (h) => {
        n(h, l);
      });
    };
    return !e && this[a(2053)].languageDetector && !this[a(2053)][a(955)][a(545)] ? o(this[a(2053)][a(955)][a(1534)]()) : !e && this[a(2053)].languageDetector && this[a(2053)].languageDetector[a(545)] ? this[a(2053)][a(955)].detect.length === 0 ? this[a(2053)][a(955)][a(1534)]()[a(2195)](o) : this[a(2053)][a(955)][a(1534)](o) : o(e), x;
  }
  [s(1134)](e, t, a) {
    var x = s;
    const r = (n, o, ...c) => {
      var f = B;
      let d;
      typeof o != "object" ? d = this[f(2479)].overloadTranslationOptionHandler([n, o][f(712)](c)) : d = { ...o }, d.lng = d[f(488)] || r[f(488)], d[f(809)] = d[f(809)] || r.lngs, d.ns = d.ns || r.ns, d.keyPrefix !== "" && (d[f(585)] = d.keyPrefix || a || r.keyPrefix);
      const l = this[f(2479)][f(2357)] || ".";
      let u;
      return d.keyPrefix && Array[f(2462)](n) ? u = n[f(866)]((v) => "" + d[f(585)] + l + v) : u = d[f(585)] ? "" + d[f(585)] + l + n : n, this.t(u, d);
    };
    return p0(e) ? r[x(488)] = e : r.lngs = e, r.ns = t, r.keyPrefix = a, r;
  }
  t(...e) {
    var a;
    var t = s;
    return (a = this[t(894)]) == null ? void 0 : a[t(524)](...e);
  }
  exists(...e) {
    var a;
    var t = s;
    return (a = this[t(894)]) == null ? void 0 : a[t(1392)](...e);
  }
  [s(549)](e) {
    var t = s;
    this[t(2479)].defaultNS = e;
  }
  [s(1878)](e, t = {}) {
    var a = s;
    if (!this.isInitialized) return this.logger[a(897)](a(1409), this[a(1452)]), !1;
    if (!this[a(1452)] || !this[a(1452)][a(1775)]) return this[a(2339)][a(897)]("hasLoadedNamespace: i18n.languages were undefined or empty", this[a(1452)]), !1;
    const x = t[a(488)] || this[a(520)] || this[a(1452)][0], r = this[a(2479)] ? this[a(2479)][a(572)] : !1, n = this.languages[this[a(1452)][a(1775)] - 1];
    if (x.toLowerCase() === a(2352)) return !0;
    const o = (c, f) => {
      var d = a;
      const l = this[d(2053)].backendConnector[d(757)][c + "|" + f];
      return l === -1 || l === 0 || l === 2;
    };
    if (t.precheck) {
      const c = t[a(829)](this, o);
      if (c !== void 0) return c;
    }
    return !!(this[a(1749)](x, e) || !this.services[a(1428)][a(2396)] || this[a(2479)][a(1617)] && !this[a(2479)][a(2056)] || o(x, e) && (!r || o(n, e)));
  }
  loadNamespaces(e, t) {
    var a = s;
    const x = Qx();
    return this[a(2479)].ns ? (p0(e) && (e = [e]), e[a(1836)]((r) => {
      var n = a;
      this[n(2479)].ns[n(1562)](r) < 0 && this.options.ns.push(r);
    }), this[a(501)]((r) => {
      x.resolve(), t && t(r);
    }), x) : (t && t(), Promise[a(2271)]());
  }
  [s(927)](e, t) {
    var a = s;
    const x = Qx();
    p0(e) && (e = [e]);
    const r = this.options[a(2092)] || [], n = e[a(2173)]((o) => r[a(1562)](o) < 0 && this[a(2053)][a(1561)][a(1445)](o));
    return n[a(1775)] ? (this.options[a(2092)] = r[a(712)](n), this[a(501)]((o) => {
      var c = a;
      x[c(2271)](), t && t(o);
    }), x) : (t && t(), Promise.resolve());
  }
  [s(2397)](e) {
    var r, n;
    var t = s;
    if (e || (e = this[t(520)] || (((r = this.languages) == null ? void 0 : r.length) > 0 ? this[t(1452)][0] : this.language)), !e) return t(2469);
    const a = ["ar", "shu", t(2353), "ssh", t(1183), t(2395), "yud", t(812), t(1308), t(1254), "acm", t(2296), "acw", t(2204), t(760), t(881), t(2199), t(2180), t(2349), t(864), t(1842), t(2435), t(511), t(1935), t(1347), t(2418), t(1927), "arz", t(1818), "avl", t(1189), t(593), t(2018), "ayp", "bbz", "pga", "he", "iw", "ps", "pbt", "pbu", t(2064), t(1525), t(1925), "ug", "ur", t(781), t(1681), "yih", "ji", "yi", t(1919), t(1261), t(440), "fa", t(1012), "peo", t(503), "prs", "dv", "sam", t(1368)], x = ((n = this.services) == null ? void 0 : n[t(1561)]) || new Ra(Aa());
    return a[t(1562)](x.getLanguagePartFromCode(e)) > -1 || e[t(627)]()[t(1562)](t(1719)) > 1 ? t(2469) : "ltr";
  }
  static createInstance(e = {}, t) {
    return new ae(e, t);
  }
  [s(1154)](e = {}, t = ue) {
    var a = s;
    const x = e[a(853)];
    x && delete e[a(853)];
    const r = { ...this[a(2479)], ...e, isClone: !0 }, n = new ae(r);
    if ((e[a(1113)] !== void 0 || e[a(1458)] !== void 0) && (n.logger = n[a(2339)][a(2261)](e)), ["store", a(2053), "language"][a(1836)]((c) => {
      n[c] = this[c];
    }), n[a(2053)] = { ...this[a(2053)] }, n[a(2053)].utils = { hasLoadedNamespace: n[a(1878)].bind(n) }, x) {
      const c = Object.keys(this[a(2017)][a(530)])[a(1206)]((f, d) => {
        var l = a;
        return f[d] = { ...this[l(2017)][l(530)][d] }, f[d] = Object[l(870)](f[d])[l(1206)]((u, v) => (u[v] = { ...f[d][v] }, u), f[d]), f;
      }, {});
      n[a(2017)] = new ka(c, r), n[a(2053)][a(1754)] = n[a(2017)];
    }
    return n[a(894)] = new Fe(n[a(2053)], r), n[a(894)].on("*", (c, ...f) => {
      var d = a;
      n[d(874)](c, ...f);
    }), n[a(1085)](r, t), n[a(894)][a(2479)] = r, n[a(894)][a(1428)].services[a(2362)] = { hasLoadedNamespace: n[a(1878)].bind(n) }, n;
  }
  [s(2127)]() {
    var e = s;
    return { options: this[e(2479)], store: this[e(2017)], language: this.language, languages: this[e(1452)], resolvedLanguage: this[e(520)] };
  }
}
const Y0 = ae.createInstance();
Y0[s(666)] = ae[s(666)], Y0[s(666)], Y0[s(2397)], Y0[s(1085)], Y0.loadResources, Y0[s(1609)], Y0.use, Y0[s(734)], Y0.getFixedT;
const Kt = Y0.t;
Y0[s(1392)], Y0[s(549)], Y0[s(1878)], Y0[s(1430)], Y0[s(927)];
const Q2 = /&(?:amp|#38|lt|#60|gt|#62|apos|#39|quot|#34|nbsp|#160|copy|#169|reg|#174|hellip|#8230|#x2F|#47);/g, G2 = { "&amp;": "&", "&#38;": "&", "&lt;": "<", "&#60;": "<", "&gt;": ">", "&#62;": ">", "&apos;": "'", "&#39;": "'", "&quot;": '"', "&#34;": '"', "&nbsp;": " ", "&#160;": " ", "&copy;": "©", "&#169;": "©", "&reg;": "®", "&#174;": "®", "&hellip;": "…", "&#8230;": "…", "&#x2F;": "/", "&#47;": "/" }, Y2 = (i) => G2[i], X2 = (i) => i[s(2304)](Q2, Y2);
let Da = { bindI18n: s(990), bindI18nStore: "", transEmptyNodeValue: "", transSupportBasicHtmlNodes: !0, transWrapTextNodes: "", transKeepBasicHtmlNodesFor: ["br", "strong", "i", "p"], useSuspense: !0, unescape: X2 };
const _2 = (i = {}) => {
  Da = { ...Da, ...i };
}, xc = { type: "3rdParty", init(i) {
  var e = s;
  _2(i[e(2479)][e(683)]);
} }, ec = s(469), tc = s(1092), rc = { webviewInForeground: ec, webviewInForeground2: tc }, ac = s(588), sc = "click to restore", nc = { webviewInForeground: ac, webviewInForeground2: sc }, ja = typeof require != s(1145) ? require : void 0;
let Wt = "en";
typeof navigator !== s(1145) && navigator[s(1490)] ? Wt = navigator[s(1490)] == s(862) ? "zh" : "en" : ja && (Wt = ja(s(1632))[s(2317)].uiLocale.startsWith("zh") ? "zh" : "en");
Y0[s(551)](xc).init({ resources: { zh: { translation: rc }, en: { translation: nc } }, lng: Wt, fallbackLng: "en", interpolation: { escapeValue: !1 } });
const Cx = [];
_x[s(1255)] = _x[s(1255)] || {}, _x[s(1255)][s(547)] = function(i, e) {
  var t = s;
  typeof e === t(2444) ? Cx[t(2523)]([i, { formatter: e, setter: null }]) : Cx[t(2523)]([i, e]);
};
function ic(i, e, t) {
  var c, f, d;
  var a = s;
  const x = Cx[a(951)](([l]) => {
    var u = a;
    return l == u(2085);
  }), r = Cx[a(951)](([l]) => {
    var u = a;
    return rr(l, i[u(1529)]);
  }) || x;
  let n = !1;
  if (r) {
    const l = r[1][a(1330)];
    l && (n = !!l(i, e, t));
  }
  !n && (i.widgets[e][a(895)] = t, (f = (c = i.widgets[e])[a(1680)]) == null || f.call(c, t)), (d = (R0[a(1788)] || R0[a(743)].workflow).activeWorkflow) == null || d[a(458)][a(1260)]();
}
function Ne(i) {
  var e = s;
  const t = {}, a = Cx[e(951)](([x]) => {
    var r = e;
    return x == r(2085);
  });
  return i.nodes[e(1836)]((x) => {
    var r = e;
    if (!x[r(2406)] || x[r(2406)][r(1775)] == 0) return;
    const n = Cx[r(951)](([o]) => {
      var c = r;
      return rr(o, x[c(1529)]);
    }) || a;
    if (n) try {
      const o = n[1][r(1130)](x);
      o && (t[x.id] = o[r(2406)].map((c) => c[r(895)]));
    } catch {
      t[x.id] = [];
    }
  }), t;
}
function Jt(i, e) {
  var x;
  var t = s;
  if (!i) return { widgetableID: "", widgetablePath: "", nodes: {}, nodeIndexes: [], options: {} };
  const a = i[t(1852)][t(866)]((r) => {
    var n = t;
    if (r[n(1895)] != 0) return;
    const o = pe(r);
    if (!o || o[n(2232)](".") || !r.widgets || r[n(2406)][n(1775)] == 0) return;
    let c = Cx[n(951)](([u]) => rr(u, r.type));
    if (c) try {
      const u = c[1][n(1130)](r);
      if (u) return u.id = r.id, u[n(1192)] = u[n(2406)].reduce((v, h) => v + (h[n(1688)] || 12), 0), u;
    } catch (u) {
      return { id: r.id, title: o, uiWeightSum: 12, widgets: [{ outputType: n(1882), value: Kt("convert widget {0} failed:", c[0]) + (u[n(532)] || u || ""), name: "", options: {} }] };
    }
    if (!o.startsWith("#")) return null;
    let f = r[n(2406)];
    const d = Cx[n(951)](([u]) => {
      var v = n;
      return u == v(2085);
    });
    if (d) {
      const u = d[1][n(1130)](r);
      if (u) return Object[n(2490)](u, { uiWeightSum: u[n(2406)].reduce((v, h) => v + (h[n(1688)] || 12), 0) });
    }
    const l = { id: r.id, title: o, widgets: f[n(866)]((u) => ({ name: u[n(484)] || u.name, outputType: u[n(1529)] || n(998), value: u[n(895)], options: u[n(2479)] })) };
    return Object.assign(l, { uiWeightSum: l[n(2406)][n(1206)]((u, v) => u + (v[n(1688)] || 12), 0) });
  }).filter(Boolean)[t(2380)]((r, n) => {
    var o = t;
    let c = pe(r), f = pe(n);
    return c = c[o(2232)]("#") ? c[o(2287)](1)[o(2426)]() : c[o(2426)](), f = f[o(2232)]("#") ? f[o(2287)](1).trim() : f[o(2426)](), c[o(2521)](f);
  });
  return { widgetablePath: ((x = e[t(813)][t(1993)]) == null ? void 0 : x[t(2220)]) || e[t(1948)], widgetableID: e[t(813)].id, nodes: a.reduce((r, n) => (r[n.id] = n, r), {}), nodeIndexes: a.map((r) => r.id), options: {} };
}
function rr(i, e) {
  var t = s;
  const a = i.replace(/[.+^${}()|[\]\\]/g, t(1102))[t(2304)](/\*/g, ".*")[t(2304)](/\?/g, ".");
  return new RegExp("^" + a + "$")[t(2263)](e);
}
function pe(i, e = "") {
  var x;
  var t = s;
  let a = e || i[t(2310)] || "";
  return i[t(1188)] && (a[t(2232)]("#") || a[t(2232)](".")) ? i[t(1188)]("sdppp_widgetable_title", a) : a = ((x = i[t(960)]) == null ? void 0 : x.sdppp_widgetable_title) || a, a;
}
_x[s(1691)] = pe, I0[s(2507)](s(2482), async (i) => {
  var e = s;
  return i[e(2253)][e(1836)](({ nodeID: t, widgetIndex: a, value: x }) => {
    var r = e;
    const n = R0.graph[r(1852)].find((o) => o.id == t);
    !n || x == n[r(2406)][a][r(895)] || ic(n, a, x);
  }), { success: !0 };
}), I0[s(2507)](s(2157), async (i) => {
  var f;
  var e = s;
  const { workflow_path: t, reset: a } = i, x = { last_node_id: 0, last_link_id: 0, nodes: [], links: [], groups: [], config: {}, extra: {}, version: 0.4 };
  if (t[e(2232)](e(2063))) return await c(t);
  const r = R0.workflowManager || R0[e(743)][e(1984)], n = r[e(2423)][e(951)]((d) => d[e(856)] === t || d[e(1948)] === t || d[e(1948)] === e(2346) + t);
  if (!a) return o(r, n), { success: !0 };
  return (n[e(437)] || (f = r[e(437)]) != null && f.call(r, n)) && r[e(636)][e(1775)] === 1 ? await R0[e(2442)](x) : await o(r, r[e(636)][0] == n ? r[e(636)][1] : r[e(636)][0]), await r.closeWorkflow(n, !1), await new Promise((d) => requestAnimationFrame(d)), await o(r, n), { success: !0 };
  async function o(d, l) {
    var u = e;
    R0[u(1788)] == d ? await l[u(2282)]() : (await d[u(2157)](l), await R0[u(2442)](JSON.parse(JSON[u(847)](l.activeState)), !0, !0, l, {}));
  }
  async function c(d) {
    var l = e;
    const u = d[l(2304)](l(2063), ""), v = await fetch(l(1545) + u)[l(2195)]((h) => h[l(714)]());
    return v[l(1993)][l(2220)] = d, await R0[l(2442)](v), { success: !0 };
  }
}), I0[s(2507)](s(1888), async function(i) {
  var e = s;
  let { workflow_content: t, workflow_path: a } = i;
  return t[e(1993)] = { ...t[e(1993)] || {}, sdppp_workflow_alias: a }, await R0[e(2442)](t), { success: !0 };
}), I0[s(2507)](s(2083), async (i) => {
  var r;
  var e = s;
  if (i[e(682)] == e(739)) try {
    const n = await fetch(e(2026) + i[e(2316)] + e(787), { headers: i[e(1135)] ? { Authorization: e(1059) + i.sdpppToken } : void 0 });
    return n.ok ? { workflows: (await n[e(714)]()).files.filter((c) => c[e(2477)][e(1793)](".json"))[e(866)]((c) => (c.vip ? "cos-vip://" : e(1020)) + c[e(2477)]) } : { workflows: [], error: e(1774) };
  } catch (n) {
    return { workflows: [], error: n[e(1928)]() };
  }
  const t = R0[e(1788)] || R0[e(743)].workflow;
  (r = t[e(1876)]) == null || r.call(t), await new Promise((n) => requestAnimationFrame(n));
  let x = t[e(2423)][e(866)]((n) => n[e(1948)][e(2304)](e(2346), ""));
  try {
    const n = new Headers(), o = localStorage[e(2179)](e(2326));
    o && n.set(e(858), o);
    const c = await fetch(e(2022), { headers: n });
    let f = [];
    c.ok && (f = (await c.json())[e(1712)][e(866)]((l) => l[e(2304)](e(2346), ""))), x[e(2380)]((d, l) => {
      var u = e;
      const v = f.includes(d), h = f[u(2115)](l);
      return v && !h ? -1 : !v && h ? 1 : d[u(2521)](l);
    });
  } catch {
  }
  return { workflows: x, error: "" };
}), I0[s(2507)](s(2413), async (i) => {
  var n;
  var e = s;
  const { workflow_path: t, from_sid: a } = i, x = R0[e(1788)] || R0[e(743)][e(1984)], r = x[e(2423)][e(951)]((o) => o.fullFilename === t || o.path === t || o[e(1948)] === e(2346) + t);
  if (!r) throw new Error(e(947));
  return ((n = x[e(2132)]) == null ? void 0 : n.id) != r.id && await R0.openWorkflow(t, a, !1), r[e(458)][e(1260)](), await x[e(2413)](r), { success: !0 };
});
var le = { exports: {} }, Ft, Ma;
function oc() {
  if (Ma) return Ft;
  Ma = 1;
  var i = 1e3, e = i * 60, t = e * 60, a = t * 24, x = a * 7, r = a * 365.25;
  Ft = function(d, l) {
    var u = B;
    l = l || {};
    var v = typeof d;
    if (v === u(998) && d[u(1775)] > 0) return n(d);
    if (v === u(1225) && isFinite(d)) return l[u(2020)] ? c(d) : o(d);
    throw new Error(u(2072) + JSON[u(847)](d));
  };
  function n(d) {
    var l = B;
    if (d = String(d), !(d.length > 100)) {
      var u = /^(-?(?:\d+)?\.?\d+) *(milliseconds?|msecs?|ms|seconds?|secs?|s|minutes?|mins?|m|hours?|hrs?|h|days?|d|weeks?|w|years?|yrs?|y)?$/i[l(1512)](d);
      if (u) {
        var v = parseFloat(u[1]), h = (u[2] || "ms").toLowerCase();
        switch (h) {
          case l(1343):
          case l(867):
          case "yrs":
          case "yr":
          case "y":
            return v * r;
          case "weeks":
          case l(1151):
          case "w":
            return v * x;
          case "days":
          case l(1408):
          case "d":
            return v * a;
          case l(1569):
          case "hour":
          case l(1909):
          case "hr":
          case "h":
            return v * t;
          case l(1324):
          case l(1051):
          case l(1319):
          case l(2369):
          case "m":
            return v * e;
          case l(2164):
          case "second":
          case l(890):
          case "sec":
          case "s":
            return v * i;
          case l(475):
          case l(2040):
          case l(1004):
          case l(1275):
          case "ms":
            return v;
          default:
            return;
        }
      }
    }
  }
  function o(d) {
    var l = B, u = Math[l(1495)](d);
    return u >= a ? Math[l(2306)](d / a) + "d" : u >= t ? Math[l(2306)](d / t) + "h" : u >= e ? Math[l(2306)](d / e) + "m" : u >= i ? Math[l(2306)](d / i) + "s" : d + "ms";
  }
  function c(d) {
    var l = B, u = Math[l(1495)](d);
    return u >= a ? f(d, u, a, l(1408)) : u >= t ? f(d, u, t, "hour") : u >= e ? f(d, u, e, "minute") : u >= i ? f(d, u, i, "second") : d + l(1938);
  }
  function f(d, l, u, v) {
    var h = B, m = l >= u * 1.5;
    return Math[h(2306)](d / u) + " " + v + (m ? "s" : "");
  }
  return Ft;
}
var Nt, $a;
function cc() {
  if ($a) return Nt;
  $a = 1;
  function i(e) {
    var t = B;
    x[t(1113)] = x, x[t(2178)] = x, x[t(1859)] = d, x[t(2450)] = c, x.enable = n, x.enabled = f, x[t(1042)] = oc(), x.destroy = l, Object[t(870)](e)[t(1836)]((u) => {
      x[u] = e[u];
    }), x[t(1946)] = [], x[t(1224)] = [], x[t(1098)] = {};
    function a(u) {
      var v = t;
      let h = 0;
      for (let m = 0; m < u.length; m++)
        h = (h << 5) - h + u[v(1831)](m), h |= 0;
      return x[v(688)][Math[v(1495)](h) % x[v(688)].length];
    }
    x[t(1150)] = a;
    function x(u) {
      var v = t;
      let h, m = null, b, w;
      function S(...C) {
        var N = B;
        if (!S[N(2121)]) return;
        const k = S, E = Number(/* @__PURE__ */ new Date()), I = E - (h || E);
        k[N(1464)] = I, k[N(1651)] = h, k.curr = E, h = E, C[0] = x.coerce(C[0]), typeof C[0] != "string" && C[N(2102)]("%O");
        let D = 0;
        C[0] = C[0][N(2304)](/%([a-zA-Z%])/g, (j, R) => {
          var F = N;
          if (j === "%%") return "%";
          D++;
          const H = x[F(1098)][R];
          if (typeof H == "function") {
            const L = C[D];
            j = H[F(444)](k, L), C.splice(D, 1), D--;
          }
          return j;
        }), x[N(1393)][N(444)](k, C), (k[N(1413)] || x.log)[N(1093)](k, C);
      }
      return S[v(1364)] = u, S[v(679)] = x[v(679)](), S.color = x.selectColor(u), S[v(2384)] = r, S[v(872)] = x[v(872)], Object.defineProperty(S, v(2121), { enumerable: !0, configurable: !1, get: () => {
        var C = v;
        return m !== null ? m : (b !== x[C(2032)] && (b = x[C(2032)], w = x[C(2121)](u)), w);
      }, set: (C) => {
        m = C;
      } }), typeof x[v(1085)] === v(2444) && x[v(1085)](S), S;
    }
    function r(u, v) {
      var h = t;
      const m = x(this[h(1364)] + (typeof v === h(1145) ? ":" : v) + u);
      return m.log = this[h(1413)], m;
    }
    function n(u) {
      var v = t;
      x[v(1379)](u), x[v(2032)] = u, x.names = [], x[v(1224)] = [];
      const h = (typeof u === v(998) ? u : "").trim()[v(2304)](/\s+/g, ",")[v(1801)](",")[v(2173)](Boolean);
      for (const m of h)
        m[0] === "-" ? x[v(1224)][v(2523)](m[v(2287)](1)) : x[v(1946)][v(2523)](m);
    }
    function o(u, v) {
      var h = t;
      let m = 0, b = 0, w = -1, S = 0;
      for (; m < u[h(1775)]; )
        if (b < v.length && (v[b] === u[m] || v[b] === "*")) v[b] === "*" ? (w = b, S = m, b++) : (m++, b++);
        else if (w !== -1) b = w + 1, S++, m = S;
        else return !1;
      for (; b < v[h(1775)] && v[b] === "*"; )
        b++;
      return b === v[h(1775)];
    }
    function c() {
      var u = t;
      const v = [...x.names, ...x[u(1224)][u(866)]((h) => "-" + h)][u(1030)](",");
      return x[u(560)](""), v;
    }
    function f(u) {
      var v = t;
      for (const h of x[v(1224)])
        if (o(u, h)) return !1;
      for (const h of x.names)
        if (o(u, h)) return !0;
      return !1;
    }
    function d(u) {
      var v = t;
      return u instanceof Error ? u[v(1220)] || u[v(532)] : u;
    }
    function l() {
      var u = t;
      console[u(897)](u(1974));
    }
    return x[t(560)](x.load()), x;
  }
  return Nt = i, Nt;
}
var La;
function fc() {
  var i = s;
  return La || (La = 1, function(e, t) {
    var a = i;
    t.formatArgs = r, t[a(1379)] = n, t[a(2282)] = o, t[a(679)] = x, t[a(706)] = c(), t[a(872)] = /* @__PURE__ */ (() => {
      let d = !1;
      return () => {
        var l = B;
        !d && (d = !0, console[l(897)](l(1974)));
      };
    })(), t[a(688)] = [a(2298), a(2042), a(2262), a(1127), "#0066CC", a(1100), a(1764), "#0099FF", a(1798), a(2430), "#00CC66", "#00CC99", a(989), a(443), "#3300CC", a(1008), a(1429), "#3333FF", a(1715), a(1526), a(1830), "#3399FF", a(2436), a(1884), a(1672), "#33CC99", a(783), "#33CCFF", "#6600CC", a(1750), a(1934), "#6633FF", "#66CC00", a(2447), a(1139), a(1439), a(2221), a(1674), a(1628), a(1988), a(674), a(1708), "#CC0066", "#CC0099", a(2431), a(1962), a(640), a(1417), "#CC3366", a(1603), a(1685), a(1968), "#CC6600", "#CC6633", "#CC9900", a(2060), a(1212), "#CCCC33", a(1971), a(1857), "#FF0066", a(765), a(487), a(846), "#FF3300", "#FF3333", a(2046), "#FF3399", a(1865), a(1840), a(1383), a(1757), a(797), a(1083), a(490), a(1436)];
    function x() {
      var d = a;
      if (typeof window !== d(1145) && window[d(2159)] && (window[d(2159)][d(1529)] === d(612) || window[d(2159)][d(2075)])) return !0;
      if (typeof navigator < "u" && navigator[d(2520)] && navigator[d(2520)].toLowerCase()[d(1424)](/(edge|trident)\/(\d+)/)) return !1;
      let l;
      return typeof document !== d(1145) && document[d(2049)] && document[d(2049)][d(1527)] && document[d(2049)][d(1527)][d(1438)] || typeof window < "u" && window.console && (window[d(1143)][d(790)] || window[d(1143)][d(498)] && window[d(1143)][d(1263)]) || typeof navigator !== d(1145) && navigator.userAgent && (l = navigator.userAgent[d(627)]()[d(1424)](/firefox\/(\d+)/)) && parseInt(l[1], 10) >= 31 || typeof navigator !== d(1145) && navigator[d(2520)] && navigator[d(2520)][d(627)]().match(/applewebkit\/(\d+)/);
    }
    function r(d) {
      var l = a;
      if (d[0] = (this[l(679)] ? "%c" : "") + this.namespace + (this.useColors ? " %c" : " ") + d[0] + (this.useColors ? l(1808) : " ") + "+" + e[l(1547)][l(1042)](this.diff), !this[l(679)]) return;
      const u = "color: " + this[l(1795)];
      d[l(2516)](1, 0, u, l(2122));
      let v = 0, h = 0;
      d[0][l(2304)](/%[a-zA-Z%]/g, (m) => {
        m !== "%%" && (v++, m === "%c" && (h = v));
      }), d[l(2516)](h, 0, u);
    }
    t[a(1413)] = console[a(1113)] || console[a(1413)] || (() => {
    });
    function n(d) {
      var l = a;
      try {
        d ? t[l(706)][l(468)](l(1113), d) : t[l(706)].removeItem(l(1113));
      } catch {
      }
    }
    function o() {
      var d = a;
      let l;
      try {
        l = t[d(706)].getItem(d(1113)) || t.storage[d(2179)](d(1361));
      } catch {
      }
      return !l && typeof process < "u" && d(1105) in process && (l = process.env.DEBUG), l;
    }
    function c() {
      try {
        return localStorage;
      } catch {
      }
    }
    e[a(1547)] = cc()(t);
    const { formatters: f } = e[a(1547)];
    f.j = function(d) {
      var l = a;
      try {
        return JSON[l(847)](d);
      } catch (u) {
        return l(2182) + u.message;
      }
    };
  }(le, le.exports)), le[i(1547)];
}
var dc = fc();
const nn = _s(dc);
nn[s(560)]("*");
function uc(i, e) {
  var t = s;
  const a = nn(i), x = (r, n) => async function(...o) {
    try {
      await e({ level: r, messages: o });
    } catch {
    }
  };
  return a.log = x(t(1413)), a;
}
const on = uc("mesh:comfy", async ({ level: i, messages: e }) => {
  var t = s;
  const { mcpMesh: a } = await Promise[t(2271)]().then(() => pc);
  await a[t(2186)](t(1632))[t(1348)][t(1413)]({ level: i, messages: e });
}), Xx = on.extend(s(815)), Nx = /* @__PURE__ */ new Map();
function lc(i, e) {
  var t = s;
  const a = Nx[t(2214)](i);
  Xx(t(2273), i, e, a, Nx), a && a[t(2201)](e);
}
I0.implementAction(s(1016), async function* (i) {
  var e = s;
  let t = !1, a = [];
  function x() {
    var u = B;
    if (t) return;
    const v = Ax[u(2513)];
    Ax[u(2513)] = async (...h) => {
      var m = u;
      try {
        const b = await v[m(444)](Ax, ...h);
        return a[m(2523)]({ error: null, result: b, prompt_id: b[m(2489)] }), b;
      } catch (b) {
        throw a[m(2523)]({ error: b, result: null, prompt_id: "" }), b;
      }
    }, t = !0;
  }
  t || x();
  const r = i[e(2030)];
  let n = !1, o = {}, c = [];
  I0[e(2017)][e(1296)]({ lastError: "", widgetableErrors: {} });
  try {
    a = [], await R0.queuePrompt(1, r), a[e(1836)]((u) => {
      var h, m;
      var v = e;
      if (u[v(1882)]) n = !0, o = u[v(1882)].response ? l(u[v(1882)][v(1270)].node_errors) : {}, Object[v(2490)](o, { "-1": ((m = (h = u[v(1882)][v(1270)]) == null ? void 0 : h[v(1882)]) == null ? void 0 : m[v(532)]) || u.error.message });
      else {
        const b = u[v(2071)].prompt_id;
        c[v(2523)](b);
        let w, S;
        const C = new Promise((k, E) => {
          w = k, S = E;
        }), N = { promise: C, resolveImage: w, rejectImage: S };
        Nx[v(1425)](b, N);
      }
    });
  } catch (u) {
    Xx(e(910), u[e(1220)]), n = !0, o = { "-1": u[e(532)] || u[e(1928)]() };
  }
  Xx("after app.queuePrompt errors: ", n, o, e(1415), c), n && I0[e(2017)][e(1296)]({ widgetableErrors: o });
  let f = [];
  const d = /* @__PURE__ */ new Map();
  for (const u of c) {
    const v = Nx.get(u);
    v && d[e(1425)](u, v.promise);
  }
  for (Xx(e(836)); d[e(2030)] > 0; ) {
    const u = Array[e(2512)](d[e(1642)]()), v = u[e(866)](([b, w]) => w[e(2195)]((S) => ({ prompt_id: b, images: S }))), { prompt_id: h, images: m } = await Promise[e(2379)](v);
    Xx(e(1045), h), f[e(2523)](...m), d[e(1869)](h), Nx[e(1869)](h), yield { success: !0, prompt_ids: [h], images: m };
  }
  function l(u) {
    var v = e;
    const h = {};
    return Object[v(870)](u)[v(1836)]((m) => {
      var b = v;
      const w = m.split(":")[0], S = R0.graph[b(1852)][b(951)]((C) => C.id == w);
      h[w] = "[" + ((S == null ? void 0 : S[b(2310)]) || w) + "]" + u[m][b(1065)][b(866)](JSON[b(847)]).join(`
`);
    }), h;
  }
}), I0[s(2507)](s(2125), async () => {
  var i = s;
  await R0[i(2375)][i(943)](i(1407)), await R0[i(2375)][i(1040)]();
  const e = Array.from(Nx[i(2253)]());
  Nx[i(1950)]();
  for (const t of e)
    try {
      t[i(2240)](new Error(i(2322)));
    } catch {
    }
  return { success: !0 };
}), I0.implementAction(s(1340), async (i) => {
  var e = s;
  const { node_id: t, title: a } = i, x = R0[e(531)][e(1852)].find((r) => r.id == t);
  if (!x) throw new Error(e(575));
  return x.title = a, x[e(1188)](e(1015), a), { success: !0 };
}), I0[s(2507)](s(2354), async () => {
  var i = s;
  const e = await fetch(i(2510));
  return e.status == 404 ? { error: Kt(i(2334)), success: !1 } : e[i(603)] == 200 ? { success: !0 } : { error: Kt(i(1122)) + e.statusText, success: !1 };
}), I0[s(2507)](s(939), async (i) => {
  var e = s;
  const { api_key: t } = i;
  return localStorage[e(468)]("comfy_api_key", t), location[e(1307)](), { success: !0 };
}), I0[s(2507)](s(1061), async () => {
  var i = s;
  return document[i(967)](i(1616))[i(715)][i(1052)](), { success: !0 };
});
const he = /* @__PURE__ */ new Map();
class hc {
  constructor(e) {
    var t = s;
    if (this[t(2348)] = [], he.has(e[t(1475)])) {
      const a = he[t(2214)](e.posterIdentifier);
      a && a[t(1395)]();
    }
    this[t(1475)] = e[t(1475)], this.messagePoster = e[t(2135)], this[t(669)] = e.addMessageEventListener, this.removeMessageEventListener = e[t(1137)], he.set(this[t(1475)], this), this[t(542)] = this[t(542)][t(1982)](this), this[t(2184)] = this[t(669)](this[t(542)]);
  }
  [s(542)](e) {
    var t = s;
    e[t(2069)] !== t(950) || e[t(1475)] !== this[t(1475)] || (this[t(2185)] ? this.onmessage(e[t(944)]) : this[t(2348)].push(e[t(944)]));
  }
  async [s(1769)]() {
    for (var e = s; this[e(2348)][e(1775)] > 0; ) {
      const t = this[e(2348)][e(1200)]();
      t && this[e(2185)] && this.onmessage(t);
    }
  }
  async send(e, t) {
    var a = s;
    this[a(2135)]({ channel: a(950), posterIdentifier: this.posterIdentifier, payload: e });
  }
  async close() {
    var e = s;
    he[e(1869)](this.posterIdentifier), this.removeMessageEventListener(this[e(2184)]);
  }
}
async function cn() {
  var i = s;
  if (window[i(442)])
    return await I0[i(2094)](i(1632), async function() {
      var e = i;
      const t = new hc({ posterIdentifier: e(1532), messagePoster: (x) => {
        var r = e;
        window[r(442)][r(778)](x, "*");
      }, addMessageEventListener: (x) => {
        var r = e;
        const n = (o) => {
          var c = B;
          x(o[c(530)]);
        };
        return window[r(923)](r(532), n), n;
      }, removeMessageEventListener: (x) => {
        var r = e;
        window[r(1629)](r(532), x);
      } }), a = new m2({ name: e(1532), version: e(1722) });
      return a.connect(t), I0[e(987)](a), window[e(442)][e(778)]({ channel: e(1304), meshName: e(2156), action: e(2094) }, "*"), await new Promise((x) => {
        var r = e;
        a[r(2361)].oninitialized = () => {
          var n = r;
          a[n(2361)][n(1677)] = void 0, x(!0);
        };
      }), a;
    });
}
const pc = Object[s(546)](Object[s(1147)]({ __proto__: null, connectUXP: cn, mcpMesh: I0 }, Symbol[s(518)], { value: s(1787) }));
Ax[s(923)](s(2347), (i) => {
  var e = s;
  const t = R0[e(1788)] || R0[e(743)][e(1984)], a = t[e(2132)];
  if (i[e(2519)].id !== a[e(813)].id) return;
  const x = I0[e(2017)][e(828)]()[e(1666)], r = Jt(R0.graph, a);
  dn(r, x) && I0[e(2017)][e(1296)]({ widgetableStructure: r }), I0[e(2017)][e(1296)]({ widgetableValues: Ne(R0[e(531)]) });
}), Ax[s(923)](s(2483), () => {
  var i = s;
  I0[i(2017)][i(1296)]({ widgetableValues: Ne(R0.graph) });
});
let za = 0, Va = !0, Ha = "";
function fn() {
  var i = s;
  requestAnimationFrame(fn);
  const e = R0[i(1788)] || R0[i(743)][i(1984)], t = e[i(2132)], a = (t == null ? void 0 : t.id) || 0, x = (t == null ? void 0 : t[i(1948)]) || "", r = (t == null ? void 0 : t[i(1710)]) || !0;
  if (a === za && x === Ha && r === Va) return;
  za = a, Ha = x, Va = r;
  const n = Jt(R0[i(531)], t), o = Ne(R0.graph);
  I0[i(2017)][i(1296)]({ widgetableStructure: n, widgetableValues: o }), setTimeout(() => {
    var c = i;
    if (t !== e.activeWorkflow) return;
    const f = Jt(R0.graph, t), d = Ne(R0[c(531)]);
    dn(f, n) && I0[c(2017)][c(1296)]({ widgetableStructure: f }), I0[c(2017)].setState({ widgetableValues: d });
  }, 800);
}
requestAnimationFrame(fn);
function dn(i, e) {
  var t = s;
  return i[t(2224)].length !== e.nodeIndexes[t(1775)] || JSON.stringify(i[t(2224)]) !== JSON[t(847)](e.nodeIndexes) || JSON[t(847)](i[t(1852)]) !== JSON.stringify(e.nodes);
}
let Ua = !1;
async function vc() {
  var i = s;
  if (Ua) return Promise[i(2271)]();
  Ax.user && I0.store.setState({ comfyUserToken: Ax.user }), Ua = !0;
}
on[s(2384)](s(455));
async function mc(i, e, t) {
  var a = s;
  e[a(923)](a(1431), ({ detail: n }) => {
    var o = a;
    if (!n) return;
    let c = 0, f = 0;
    !isNaN(n[o(895)] / n.max) && (c = Math[o(2306)](n[o(895)] / n[o(723)] * 100));
    const d = n.node, l = graph[o(1852)][o(951)]((u) => u.id == d);
    if (l && l[o(1972)]) {
      const u = 100 / graph[o(1852)][o(1775)];
      f = Math[o(2306)](l[o(1972)] * u) + (c ? c / 100 * u : 0);
    }
    I0[o(2017)].setState({ progress: c, graphProgress: f });
  }), e[a(923)](a(603), (n) => {
    var c;
    var o = a;
    (c = n[o(2519)]) != null && c[o(747)] && I0[o(2017)][o(1296)]({ queueSize: n.detail[o(747)][o(865)] });
  }), e[a(923)](a(1286), ({ detail: n }) => {
    var o = a;
    if (I0[o(2017)][o(1296)]({ executingNodeTitle: "", lastError: n[o(2340)] }), n[o(1299)]) {
      const c = i.graph[o(1852)][o(951)]((f) => f.id == n[o(1299)]);
      I0[o(2017)][o(1296)]({ widgetableErrors: { [n[o(1299)]]: "[" + ((c == null ? void 0 : c[o(2310)]) || n[o(1299)]) + "]" + n[o(2340)] } });
    }
  }), e.addEventListener(a(2099), (n) => {
    var o = a;
    const c = n.detail, f = graph[o(1852)][o(951)]((d) => d.id == c);
    if (f) {
      const d = 100 / graph.nodes.length;
      I0[o(2017)].setState({ executingNodeTitle: f.title, graphProgress: Math[o(2306)](f[o(1972)] * d) });
    }
  }), e[a(923)](a(1877), () => {
    var n = a;
    I0[n(2017)].setState({ progress: 0, executingNodeTitle: "" });
  }), e[a(923)]("execution_start", ({ detail: n }) => {
    var o = a;
    I0[o(2017)][o(1296)]({ lastError: "", widgetableErrors: {}, progress: 0, executingNodeTitle: "", lastRunTime: Date.now() });
  });
  const x = /* @__PURE__ */ new Map();
  e.addEventListener(a(1473), (n) => {
    var o = a;
    I0[o(2017)].setState({ progress: 0, executingNodeTitle: "" });
    const c = (x[o(2214)](n.detail.prompt_id) || [])[o(866)]((f) => ({ url: f, thumbnail: f }));
    lc(n.detail[o(2489)], c), x[o(1869)](n[o(2519)].prompt_id);
  }), e[a(923)](a(2483), (n) => {
    var o = a;
    if (n[o(2519)].output && Array[o(2462)](n[o(2519)].output[o(689)]) && n.detail[o(1981)].images[o(1775)] > 0) {
      const c = x[o(2214)](n[o(2519)].prompt_id) || [];
      c[o(2523)](...n[o(2519)][o(1981)].images[o(2173)]((f) => f[o(1529)] == "output")[o(866)]((f) => {
        var d = o;
        return location[d(1187)] + location.pathname + "api/view?type=" + f.type + d(1074) + f.filename + (f[d(1565)] ? "&subfolder=" + f[d(1565)] : "");
      })), x.set(n[o(2519)][o(2489)], c);
    }
  });
  let r = null;
  e.addEventListener(a(576), (n) => {
    r = setTimeout(() => {
      var o = B;
      I0[o(2017)][o(1296)]({ comfyWSState: o(576) });
    }, 1e3);
  }), e[a(923)](a(1803), (n) => {
    var o = a;
    I0[o(2017)].setState({ comfyWSState: o(2136) }), clearTimeout(r);
  });
}
let Ot = [];
(async function() {
  var e, t, a, x, r, n;
  var i = s;
  if (typeof gradioApp == i(1145)) {
    try {
      const o = (t = (e = window.comfyAPI) == null ? void 0 : e[i(868)]) == null ? void 0 : t[i(868)], c = (x = (a = window[i(2207)]) == null ? void 0 : a.ui) == null ? void 0 : x.$el, f = (n = (r = window[i(2207)]) == null ? void 0 : r[i(2375)]) == null ? void 0 : n.api;
      if (!o || !f || !c) throw new Error(i(1571));
      await vc(), await cn(), await mc(o, f, c), import(i(1683)).then((d) => {
        d.default(_x, 2);
      });
    } catch (o) {
      Ot[i(2523)](o[i(1220)] || o.message || o);
    }
    await new Promise((o) => setTimeout(o, 2e3)), Ot[i(1775)] && console[i(1882)](Ot[0]);
  }
})();
