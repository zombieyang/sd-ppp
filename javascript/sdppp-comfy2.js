var _n = Object.defineProperty;
var On = (i, x, t) => x in i ? _n(i, x, { enumerable: !0, configurable: !0, writable: !0, value: t }) : i[x] = t;
var m0 = (i, x, t) => On(i, typeof x != "symbol" ? x + "" : x, t);
const a = K;
(function(i, x) {
  const t = K, r = i();
  for (; ; )
    try {
      if (parseInt(t(874)) / 1 * (-parseInt(t(1051)) / 2) + parseInt(t(592)) / 3 * (parseInt(t(1123)) / 4) + parseInt(t(358)) / 5 * (parseInt(t(1356)) / 6) + parseInt(t(2861)) / 7 * (parseInt(t(2232)) / 8) + parseInt(t(1161)) / 9 + parseInt(t(1709)) / 10 * (parseInt(t(2147)) / 11) + -parseInt(t(2364)) / 12 * (parseInt(t(510)) / 13) === x) break;
      r.push(r.shift());
    } catch {
      r.push(r.shift());
    }
})(bx, 450007);
const N0 = window[a(1848)][a(2164)][a(2164)];
window.comfyAPI.ui[a(1447)];
const Re = window[a(1848)][a(2503)][a(2503)];
var as;
class Dn {
  constructor(x) {
    m0(this, as);
    const t = a;
    this[t(576)] = x;
    const r = this[t(312)]();
    if (!r.valid) throw new Error(t(975) + r[t(2183)][t(1255)](", "));
  }
  [(as = a(576), a(312))]() {
    const x = a, t = [];
    (!this[x(576)][x(1785)] || Object.keys(this[x(576)][x(1785)])[x(1667)] === 0) && t.push(x(2126));
    for (const [e, s] of this[x(576)][x(2845)])
      !this[x(576)][x(1785)][e] && t[x(528)](x(2138) + e), !this[x(576)].nodes[s] && t.push(x(2113) + s);
    const r = this[x(2036)]();
    return !r[x(1268)] && t.push(...r[x(2183)]), { valid: t[x(1667)] === 0, errors: t };
  }
  [a(645)]() {
    const x = a, t = /* @__PURE__ */ new Map();
    for (const r of Object[x(1400)](this[x(576)][x(1785)]))
      t[x(480)](r, []);
    for (const [r, e] of this[x(576)][x(2845)]) {
      const s = t.get(r) || [];
      s[x(528)](e), t[x(480)](r, s);
    }
    return t;
  }
  [a(2036)]() {
    const x = a, t = [], r = /* @__PURE__ */ new Set(), e = /* @__PURE__ */ new Set(), s = this[x(645)](), n = (o, c) => {
      const u = x;
      if (e[u(2507)](o)) {
        const l = c.indexOf(o), f = c[u(2419)](l)[u(572)](o);
        return t[u(528)](u(2919) + f[u(1255)](u(2151))), !0;
      }
      if (r[u(2507)](o)) return !1;
      r[u(2701)](o), e[u(2701)](o);
      const d = s[u(2917)](o) || [];
      for (const l of d)
        if (n(l, [...c, o])) return !0;
      return e.delete(o), !1;
    };
    for (const o of Object[x(1400)](this[x(576)][x(1785)]))
      !r.has(o) && n(o, []);
    return { valid: t[x(1667)] === 0, errors: t };
  }
  [a(2673)]() {
    const x = a, t = /* @__PURE__ */ new Map();
    for (const r of Object[x(1400)](this.definition[x(1785)]))
      t[x(480)](r, []);
    for (const [r, e] of this[x(576)][x(2845)]) {
      const s = t[x(2917)](r) || [];
      s[x(528)](e), t[x(480)](r, s);
      const n = t[x(2917)](e) || [];
      n[x(528)](r), t.set(e, n);
    }
    return t;
  }
  [a(2725)](x) {
    return this[a(2673)]().get(x) || [];
  }
  [a(364)](x) {
    const t = a;
    return this.definition[t(1785)][x];
  }
  [a(869)]() {
    const x = a;
    return Object[x(1400)](this[x(576)][x(1785)]);
  }
  [a(1253)](x, t) {
    const r = a;
    return this.definition[r(2845)][r(1957)](([e, s]) => e === x && s === t || e === t && s === x);
  }
  [a(2390)](x, t) {
    const r = a;
    if (x === t) return [x];
    const e = this.buildAdjacencyList(), s = [{ nodeId: x, path: [x] }], n = /* @__PURE__ */ new Set();
    for (; s.length > 0; ) {
      const { nodeId: o, path: c } = s[r(2846)]();
      if (n[r(2507)](o)) continue;
      if (n[r(2701)](o), o === t) return c;
      const u = e[r(2917)](o) || [];
      for (const d of u)
        !n[r(2507)](d) && s[r(528)]({ nodeId: d, path: [...c, d] });
    }
    return null;
  }
  hasPath(x, t) {
    return this[a(2390)](x, t) !== null;
  }
  [a(2667)]() {
    return { ...this.definition };
  }
}
const Ca = (i) => {
  let x;
  const t = /* @__PURE__ */ new Set(), r = (u, d) => {
    const l = K, f = typeof u === l(1137) ? u(x) : u;
    if (!Object.is(f, x)) {
      const b = x;
      x = d ?? (typeof f != "object" || f === null) ? f : Object.assign({}, x, f), t.forEach((h) => h(x, b));
    }
  }, e = () => x, s = () => c, n = (u) => {
    const d = K;
    return t[d(2701)](u), () => t[d(2764)](u);
  }, o = { setState: r, getState: e, getInitialState: s, subscribe: n }, c = x = i(r, e, o);
  return o;
}, jn = (i) => i ? Ca(i) : Ca;
var q0;
(function(i) {
  const x = a;
  i[x(2213)] = (s) => {
  };
  function t(s) {
  }
  i[x(2137)] = t;
  function r(s) {
    throw new Error();
  }
  i[x(309)] = r, i[x(2445)] = (s) => {
    const n = {};
    for (const o of s)
      n[o] = o;
    return n;
  }, i[x(1315)] = (s) => {
    const n = x, o = i[n(1155)](s)[n(2534)]((u) => typeof s[s[u]] !== n(329)), c = {};
    for (const u of o)
      c[u] = s[u];
    return i[n(1227)](c);
  }, i[x(1227)] = (s) => {
    const n = x;
    return i.objectKeys(s)[n(1753)](function(o) {
      return s[o];
    });
  }, i[x(1155)] = typeof Object[x(1400)] === x(1137) ? (s) => Object[x(1400)](s) : (s) => {
    const n = x, o = [];
    for (const c in s)
      Object.prototype[n(1687)][n(1512)](s, c) && o[n(528)](c);
    return o;
  }, i[x(2408)] = (s, n) => {
    for (const o of s)
      if (n(o)) return o;
  }, i[x(618)] = typeof Number[x(618)] === x(1137) ? (s) => Number[x(618)](s) : (s) => typeof s == "number" && Number[x(2895)](s) && Math[x(2696)](s) === s;
  function e(s, n = x(608)) {
    const o = x;
    return s.map((c) => typeof c === o(1019) ? "'" + c + "'" : c).join(n);
  }
  i[x(2513)] = e, i[x(1379)] = (s, n) => typeof n === x(2428) ? n.toString() : n;
})(q0 || (q0 = {}));
var Fa;
(function(i) {
  const x = a;
  i[x(2677)] = (t, r) => ({ ...t, ...r });
})(Fa || (Fa = {}));
const a0 = q0.arrayToEnum(["string", a(845), "number", a(1779), a(1923), a(1459), a(1401), a(2428), a(2020), a(1137), a(1714), a(1399), a(2455), a(2613), a(987), a(2217), a(2416), a(2594), a(1753), "set"]), Ee = (i) => {
  const x = a;
  switch (typeof i) {
    case x(1714):
      return a0[x(1714)];
    case x(1019):
      return a0[x(1019)];
    case x(329):
      return Number[x(685)](i) ? a0[x(845)] : a0[x(329)];
    case x(1459):
      return a0[x(1459)];
    case x(1137):
      return a0.function;
    case x(2428):
      return a0[x(2428)];
    case x(2020):
      return a0[x(2020)];
    case x(2613):
      return Array[x(1683)](i) ? a0.array : i === null ? a0[x(1399)] : i[x(654)] && typeof i[x(654)] == "function" && i[x(1336)] && typeof i[x(1336)] === x(1137) ? a0[x(2217)] : typeof Map !== x(1714) && i instanceof Map ? a0[x(1753)] : typeof Set !== x(1714) && i instanceof Set ? a0.set : typeof Date !== x(1714) && i instanceof Date ? a0[x(1401)] : a0[x(2613)];
    default:
      return a0[x(987)];
  }
}, B = q0[a(2445)]([a(1354), a(1452), "custom", "invalid_union", a(703), "invalid_enum_value", a(2488), a(266), "invalid_return_type", a(301), "invalid_string", a(2044), a(2015), a(1282), a(556), a(2027)]);
class Pe extends Error {
  get [a(2183)]() {
    return this[a(719)];
  }
  constructor(x) {
    const t = a;
    super(), this.issues = [], this[t(2086)] = (e) => {
      const s = t;
      this[s(719)] = [...this[s(719)], e];
    }, this[t(693)] = (e = []) => {
      const s = t;
      this[s(719)] = [...this.issues, ...e];
    };
    const r = new.target.prototype;
    Object[t(851)] ? Object[t(851)](this, r) : this[t(1940)] = r, this.name = "ZodError", this[t(719)] = x;
  }
  [a(2899)](x) {
    const t = x || function(s) {
      return s[K(2851)];
    }, r = { _errors: [] }, e = (s) => {
      const n = K;
      for (const o of s[n(719)])
        if (o[n(444)] === "invalid_union") o[n(470)][n(1753)](e);
        else if (o[n(444)] === n(2668)) e(o[n(1187)]);
        else if (o[n(444)] === n(266)) e(o[n(1818)]);
        else if (o.path[n(1667)] === 0) r[n(1943)].push(t(o));
        else {
          let c = r, u = 0;
          for (; u < o.path[n(1667)]; ) {
            const d = o[n(2711)][u];
            u === o[n(2711)].length - 1 ? (c[d] = c[d] || { _errors: [] }, c[d][n(1943)][n(528)](t(o))) : c[d] = c[d] || { _errors: [] }, c = c[d], u++;
          }
        }
    };
    return e(this), r;
  }
  static [a(2501)](x) {
    const t = a;
    if (!(x instanceof Pe)) throw new Error(t(1396) + x);
  }
  [a(1977)]() {
    return this.message;
  }
  get message() {
    const x = a;
    return JSON[x(2340)](this[x(719)], q0.jsonStringifyReplacer, 2);
  }
  get [a(2796)]() {
    return this[a(719)].length === 0;
  }
  [a(1777)](x = (t) => t.message) {
    const t = a, r = {}, e = [];
    for (const s of this[t(719)])
      if (s[t(2711)][t(1667)] > 0) {
        const n = s[t(2711)][0];
        r[n] = r[n] || [], r[n].push(x(s));
      } else e[t(528)](x(s));
    return { formErrors: e, fieldErrors: r };
  }
  get formErrors() {
    return this[a(1777)]();
  }
}
Pe[a(1186)] = (i) => new Pe(i);
const Ht = (i, x) => {
  const t = a;
  let r;
  switch (i[t(444)]) {
    case B[t(1354)]:
      i[t(1345)] === a0[t(1714)] ? r = t(1355) : r = t(2574) + i[t(1181)] + t(1919) + i.received;
      break;
    case B.invalid_literal:
      r = "Invalid literal value, expected " + JSON[t(2340)](i.expected, q0.jsonStringifyReplacer);
      break;
    case B[t(2488)]:
      r = t(2786) + q0[t(2513)](i[t(1400)], ", ");
      break;
    case B.invalid_union:
      r = t(2312);
      break;
    case B[t(703)]:
      r = t(1035) + q0.joinValues(i[t(891)]);
      break;
    case B.invalid_enum_value:
      r = t(2328) + q0[t(2513)](i[t(891)]) + t(877) + i.received + "'";
      break;
    case B[t(266)]:
      r = "Invalid function arguments";
      break;
    case B[t(2668)]:
      r = t(1041);
      break;
    case B.invalid_date:
      r = t(2016);
      break;
    case B.invalid_string:
      typeof i[t(646)] === t(2613) ? t(1721) in i[t(646)] ? (r = t(2642) + i[t(646)][t(1721)] + '"', typeof i[t(646)][t(1257)] === t(329) && (r = r + t(1510) + i.validation[t(1257)])) : t(2839) in i[t(646)] ? r = t(1678) + i[t(646)][t(2839)] + '"' : t(2335) in i[t(646)] ? r = t(1870) + i[t(646)][t(2335)] + '"' : q0[t(309)](i[t(646)]) : i.validation !== t(1173) ? r = t(907) + i[t(646)] : r = t(2167);
      break;
    case B[t(2044)]:
      i[t(1436)] === t(2455) ? r = t(2909) + (i[t(2481)] ? "exactly" : i[t(1143)] ? t(2112) : "more than") + " " + i.minimum + t(1682) : i[t(1436)] === t(1019) ? r = t(2156) + (i[t(2481)] ? t(2403) : i[t(1143)] ? t(2112) : t(2053)) + " " + i[t(2591)] + " character(s)" : i[t(1436)] === t(329) ? r = t(1970) + (i.exact ? t(2026) : i[t(1143)] ? t(448) : t(2351)) + i[t(2591)] : i[t(1436)] === t(2428) ? r = t(1970) + (i[t(2481)] ? t(2026) : i[t(1143)] ? t(448) : "greater than ") + i[t(2591)] : i[t(1436)] === t(1401) ? r = t(2186) + (i[t(2481)] ? "exactly equal to " : i[t(1143)] ? "greater than or equal to " : t(2351)) + new Date(Number(i[t(2591)])) : r = t(2312);
      break;
    case B[t(2015)]:
      i[t(1436)] === t(2455) ? r = t(2909) + (i.exact ? t(2403) : i[t(1143)] ? "at most" : t(1691)) + " " + i.maximum + t(1682) : i.type === t(1019) ? r = "String must contain " + (i[t(2481)] ? "exactly" : i[t(1143)] ? t(2847) : t(1225)) + " " + i[t(1887)] + " character(s)" : i.type === t(329) ? r = t(1970) + (i.exact ? t(2403) : i[t(1143)] ? t(713) : t(1691)) + " " + i[t(1887)] : i.type === "bigint" ? r = t(423) + (i[t(2481)] ? t(2403) : i[t(1143)] ? t(713) : t(1691)) + " " + i[t(1887)] : i[t(1436)] === t(1401) ? r = "Date must be " + (i[t(2481)] ? t(2403) : i[t(1143)] ? "smaller than or equal to" : "smaller than") + " " + new Date(Number(i.maximum)) : r = t(2312);
      break;
    case B.custom:
      r = t(2312);
      break;
    case B[t(1282)]:
      r = "Intersection results could not be merged";
      break;
    case B.not_multiple_of:
      r = "Number must be a multiple of " + i[t(1847)];
      break;
    case B[t(2027)]:
      r = t(1584);
      break;
    default:
      r = x[t(382)], q0[t(309)](i);
  }
  return { message: r };
};
let Mn = Ht;
function Ln() {
  return Mn;
}
function bx() {
  const i = ["unsetOutgoingRequestInterceptor", "Internal ZodObject error: invalid unknownKeys value.", "hasLanguageSomeTranslations", "setComfyOrgAPIKey", "]] !== undefined ", "outgoingRequestInterceptors", "uploadImage API failed - HTTP error! status: {{status}}", "Current option: File", "Failed to connect to ComfyUI (HTTP {{code}})", "Uncaught error in notification handler: ", "]) ", "Save", "property", "async", "ref/prompt", "No crop", "Store not found for current node ", "设为当前图层", "++) { var ", "Unrecognized key(s) in object: ", "formatArgs", "extract", "sendPromptListChanged", "addPostProcessor", "passingSchemas", "Reverse", "sdppp/streamResponse", "strictDefaults", " var vErrors = null; ", "isEmpty", "如何获取APIKey", "Not current document", "isHeartbeatEnabled", "callback", "failing", "Client does not support elicitation (required for ", "[UnexpectedJSONParseError]: ", " is already defined", "setState", " == +", "#3399FF", ").length ", "from", "localeCompare", "applyPostProcessor", " && !(", " || ", "getSchema", "messagePoster", "clientInfo", " != 'boolean' && ", "executeOutgoingNotificationInterceptor", "正在上传...", "newdoc_canvas", "Current", "click to restore", "&filename=", "addRule", " for language ", " + ", "_path", ".additionalProperties", "false", "Google Gemini Image Generator", "Auto sync is off", "_parseAsync", "one", "$id", ") : ", "int", "/additionalProperties", "parseInt", "startsWith", "verbose", "无法将文件作为文档打开: {{path}}", " (division", "asyncIterator", "getBestMatchFromCodes", "edges", "shift", "at most", "ZodNullable", "'else'", "comfyAPI is not initialized, maybe comfyUI is too old", "message", "未返回图片", "Error in broadcast handler for ", "Email address's domain name can not be converted to ", "No preview content yet", "JWT", "Merge group failed", "hasPath", "initialized", "__DEFAULT__", "1281609clFwtv", "maxTotalTimeout", "fallbackNotificationHandler", '" ignored in schema at path "', "merge", "getKeyword", "IPV6ADDRESS", "append", "prepend", "Exclude current layer", "获取图片", "Server does not support sampling (required for ", "isIP", " , parentSchema: validate.schema", "nonempty", "nodeProxies", " == 'object' && Array.isArray(", "请输入您的Replicate API Key", "namespaces", "interpolate", "上传失败，请重试", "Clear guide frame", "uploadImage API 调用失败 - HTTP 错误，状态: {{status}}", "Import as New Document", "$comment", "every", " , message: 'should NOT be valid' ", " = true;", "actionHandlers", "registerCapabilities", "清空选择", "Get selection", " ( ( ", "#FF3333", "isFinite", "[^\\%\\/\\@]", ")) ", ".validate; var ", "format", "以主图边界获取当前图层", "_onprogress", "%[EFef]", "选择边界", "ordinal", "nestingOptionsSeparator", "shu", "errs__", "Unsupported image input type", "Array must contain ", "pctDecChars", "Execute", "i18next:", " = false; else { ", " !== undefined ", "logging/setLevel", "i18next/PATH_KEY", "get", "removeAdditional", "Cycle detected: ", "（为空）", "ZodFunction", "sdpppHandshake", "patternProperties", "Select", "isFinite(", "新增槽位", "exclIsNumber", "图层 {{layerName}}", "broadcastManager", "用户名: {{username}}", " = errors;", "stopAll", "contextualErrorMap", "No workflow selected", "requestedSchema", " == 'number' || ", "输入图像", "ASCII", " = true; ", "schemaHasRules", " : ", "#33CCCC", "([^0-9])", "table", "处理进度 {{processed}}/{{total}}", "Login Successful", "withTimeout", "getScriptPartFromCode", "isURL", "isBase64url", "services", " , params: { allowedValue: schema", "usedNS", "; var ", "_getCached", "选择素材来源", "console", "relatedRequestId", "当前选项：文件", " already exists, which would be overridden", "removeMessageEventListener", "absolute", "observers", "heartbeatTimeout", " else {   ", "shorter", " == '", "/additionalItems", "RunningHub - {{webappId}}", " }; return validate; ", "已限定范围", "Failed to update the {{part}} prompt: ComfyUI connection is not ready.", "sendStreamRequestorRequest", ", limit: ", "emergency", "Method not found", "names", "addMiddleware", "invalid_arguments", " not in path ", "Input Setting", "Host's domain name can not be converted to ASCII via punycode: ", "MAX_SAFE_INTEGER", "maxSize", "connected", "allKeys", "Invalid boundary: left must be less than right, top must be less than bottom", "assistant", "promptIds", "2024-11-05", "async ", "Intersect or scaledDesire is null", "removeCatch", "./api/manager/reboot", "以主图边界获取画布", " = errors , ", "无法写入{{part}}提示词，请稍后重试。", "broadcastReceived", "Boundary", "modifying", "{6}", "基础 URL", "hour", "  } ", "ComfyUI connection not configured yet. Please set the address first.", "store", "刷新工作流列表", "_compilations", ".dataPath = (dataPath || '') + ", " = ''; ", "currency", "externalListenMessageCallback", " , data: ", "invalid_date", "addSchema", "保存提示词模板失败。", "elicitation", "Open images from file", '.schemaPath = "', "documentElement", "shape", "assertNever", "acm", "' , dataPath: (dataPath || '') + ", "validate", "=0; ", "smartobject", "自动同步: 关闭", "Select AI Service Provider", "resourceStore", "no plural rule found for: ", "outputs API 调用失败 - HTTP 错误，状态: {{status}}", "Unknown error ({{code}})", "Create document for sent images", "suffix", " is loaded but ", "无法打开图像文件: {{error}}", "{0,2}", "backend", "cacheInBuiltFormats", "Create document", "number", "Values", "Request interceptor failed for ", "schemaPath", "status", "未配置上传器", "send", "#6633FF", "translate", "arb", "__proxy_forward", "replace", "Crop", "getFallbackCodes", "simpleTypes", "Close", "date-time", "从磁盘上传", "hasLoadedNamespace: i18n.languages were undefined or empty", " if (true) { ", "Show sent images", `" keyword validation' `, "My Templates", "ZodString", "AbortSignal is already aborted", "res", "isInitialized", "keyof", "' : '", "43570eqTtKX", "Upload from disk", "/patternProperties/", "Get mask from Selection", ") { var op", "Failed to send response: ", "getNode", "checks", "ZodUndefined", "true", "index", "next", "Layer {{0}} is not a group", "toNode", "errorPath", "time", "fallbackNS", "_pendingDebouncedNotifications", "Workflow not found", "brand", "负面提示词", "Import as Smart Object", "if ( ", "拖拽图片到此处松开完成上传", "defaultError", "ZodBigInt", ".type", " %c", "masks", " != 'string') || ", "ZodMap", "not", "diff", "nonpositive", "]); ", "yud", "toUpperCase", "added", " , schema: validate.schema", "escapeQuotes", "More actions", "ComfyUI服务器重连中", "alert", "nodeErrors", "ads", "addMetaSchema", "completion/complete", "Retry", "get_layer_info requires layer_identify", "getAccountStatus API failed - {{reason}}", "readingCalls", ") == -1 ", "+Alt 反转遮罩", "退出登录", "ajv", "请输入大于 0 的像素值", " validate.errors = vErrors; return false; ", "ZodSet", "queuePrompt", " for interpolating ", "应用模板失败。", "Download", "deepPartial", "RequestTimeout", "currentNodeId", "BigInt must be ", "addCached", "#CC3399", " } else {  errors = ", "{2}", "storage", "[\\+\\-\\.]", " not found in graph definition", "fallback", "#/definitions/simpleTypes", "load", "execution_interrupted", "加载中...", " = await ", "; } catch (e) { ", " = defaults[", "varOccurences", "getDataByLanguage", "languageUtils", "workflow-run", "video", "code", ".test(", "发送到PS", "prompts", "greater than or equal to ", "useColors", "origin", "Enum", "obj", "Unicode", "valueSchema", "&lt;", "Negative Prompt", "\\.\\d{", "SDPPP 2.0 不再需要此节点", ".then", "resetStats", "_cache", "hijacked", "other", " else if (", "escapeValue", "addResource", "transports", "生成失败", "Fetch current layer with canvas boundary", "unionErrors", "Source", "namespace", "removed", "getStats", "Click to get RunningHub APIKey", "运行中...", "Send to PS", "当前图层", "You are passing an undefined module! Please check the object you are passing to i18next.use()", "set", "WARNING DEPRECATED: ", " = errors; ", "Your powerful node-based workflow engine", "notifications/cancelled", ".length == 1) { ", "输出区域", "Module", "actionManager", " if (! ", "keyword schema is invalid: ", "implementAction", "skipOnVariables", "removeResourceBundle", "combo", "_addSchema", "missingRef", "defaultNS", "toLowerCase", "isNANOID", "defaultValue", "executeOutgoingRequestInterceptor", "sdk", "Service unavailable (503)", "Generating", "Current Layer", "options.loadSchema should be a function", " ? '", "#33CC33", "HTTP URIs must have a host.", "7175675VzSPMq", "valueOf", " var ", "_getOrReturnCtx", "_cached", "getItem", "模型物美价廉，海量社区应用", "pctEncChar", "setInterval", "Content", "Client does not support listing roots (required for ", " === null || ", "abort", "readOnly", "protocolVersion", "invalid_string", ") {   var err =   ", "Select layer", "push", "SDPPP may not be installed or version mismatch (404)", ".schema = ", "` could not be extracted from all schema options", "Upload failed: ", "从 选区 获取遮罩", "zero", "pluralCategories", "default is ignored for: ", "emit", " === undefined || ", "clone", "precheck", "Server does not support notifying about resources (required for ", "canReachThroughConnectedNodes", "sec", " || ! Object.prototype.hasOwnProperty.call(", "No Intl support, please use an Intl polyfill!", "_clientVersion", "superRefine", "Error handling incoming message:", "tools/list", "2025-03-26", "run API 调用失败 - HTTP 错误，状态: {{status}}", "Please provide prompt content.", "encountered", "Remove video", "cleanupConnection", "not_multiple_of", "还没有自定义模板。", "PCT_ENCODED", "IPV4ADDRESS", " for (var ", "stack", "validation failed", "PS图片", "#33CC99", "Workflow stopped by user", "sendToolListChanged", ".length ", " var validate = ", "Set as Current Layer", " return data; ", "++) { ", "concat", "选区遮罩为空", " instanceof RegExp) && ", "[\\:\\@\\/\\?]", "definition", "_transport", "coerceTypes", "_metaOpts", "]; return false; ", "keyPrefix", "__nwjs", "preprocess", "stats", "当前选项：画布", "initializeProducer", "joinArrays", "Not connected", " , message: '", "_limitProperties", "Auto-run workflow after changes...", "3UzGIkO", "Select boundary", " if (errors === 0) return data;           ", "newdoc", "{4}", "Keyword ", "Output to", "nest", "Document {{0}} not found", " }   ", "curr", "fail", "Failed to apply template.", "hasLoadedNamespace: i18next was not initialized", "Copy", "uri", " | ", "[GraphStoreSynchronizer] Error broadcasting state update for ", "meta", "#00CC66", "requestsHandled", "properties ", " ) || ", "values", "\\%25|\\%(?!", " , params: { failingKeyword: ", "isInteger", "executing", "pick", "inlineRef", "#CC0066", "Max size (px)", "skips", "checkState", "schemaExcl", "Delete Template", "property ", "locale", ") {   ", "needsPlural", "messageHandlers", "Node not found", "compositeRule", "messages", "反向裁剪(Inpaint)", "yhd", "exclusiveMaximum", " , message: 'boolean schema is false' ", "reject", "我的模板", " else throw new ValidationError(vErrors); ", "widgetable", "protocol", "buildDirectedAdjacencyList", "validation", "Full Canvas", "Timeout", "handleDirectProxyForward", " failed", `Get image &
Crop selection mask`, "Selection mask", " if (false) { ", "then", "Instance method `debug.destroy()` is deprecated and no longer does anything. It will be removed in the next major version of `debug`.", "ping", "isConnected", " { keyword: '", "&#x2F;", "Prompt content", "style", " , schemaPath: ", "addLookupKeys", "dataVar", "normalizeId", "='; ", "domainHost", "Fetch canvas with canvas boundary", "ssh", " && self._opts.unknownFormats.indexOf(", "Waiting in queue", "No image returned", "resolvedOptions", "dataProperties", "%[89A-Fa-f]", " === 1) ", "网关超时 (504)", "run API failed - {{reason}}", "openWorkflows", "requestsIntercepted", "#CC3300", "选择模型", "_exclusiveLimit", "nid", "isNaN", "initialize", "interceptor_error", "returnedObjectHandler", "isLanguageChangingTo", "Host's domain name can not be converted to ", "sendLoggingMessage", "选区除外", "addIssues", "_getType", "[\\-\\.\\_\\~]", "usePattern", "isCUID", "[i], ", "compile", "test", "getHandler", "范围 1-100", "invalid_union_discriminator", "registerHandler", "off", "Shortcut selection feature requires login", " , params: { propertyName: '", "async format in sync schema", " } else { ", "rules", "Sync current content", "dataLevel", "less than or equal to", "#/definitions/nonNegativeIntegerDefault0", "waitingReads", ")' returned an object instead of string.", "initialState", "audio", "issues", "Action ", "Refresh workflow list", "now", " } catch (e) { if (!(e instanceof ValidationError)) throw e; if (vErrors === null) vErrors = e.errors; else vErrors = vErrors.concat(e.errors); errors = vErrors.length; ", "Task execution failed", "') ", " , params: {} ", "favorites", "pipe", "nanoid", " != 'number') || ", "_limitItems", "parentData", "validateSchema", "获取任务状态失败", '" resolves to more than one schema', "abh", "msec", "checkDataType", "__internal_", "var missing", "mergeObjectAsync", "[A-Fa-f]", "从 画布 获取遮罩", "#6600CC", "getCurrentNodeId", "给发送的图片创建文档", '[\\"\\\\]', "nsSeparator", "ComfyUI failed to load, HTTP status code: {{code}}", "Positive Prompt", "state", "markDisconnected", "instructions", "week", "$schema must be a string", "Click to remove local file", "uiLocale", "apply", "Auto send disabled", "Failed to open image file: {{error}}", "Current selection: Canvas", "Google Gemini - Image Generation", "strict", "删除模板", "\\:\\:", "requestInfo", "_compile", " + '", "Clear selection", "messageType", "yrs", "边界预览", "ulid", "停止全部", "notifications/tools/list_changed", "getProtocol", "#/definitions/nonNegativeInteger", "ZodNativeEnum", "urn", "UNRESERVED", " &&   Object.prototype.hasOwnProperty.call(", "data", " must be number", "Current layer bounds", "getTextInfo", "isTransportReady", "缺少主图资源", "_timeoutInfo", "spa", 'custom keyword "', " } ", "Task cancel failed: {{error}}", "))))) {", "aborted", "content", "cimode", "inline", " (Members only)", ")) {  ", "sdppp-heartbeat", "interrupt", "dirty", "=startErrs", "setLimit", "当前图层除外", "charAt", " not found for node ", "Action set {{0}} was not found", " than ", "Opening workflow", "jsonrpc", "Failed to update the {{part}} prompt: no matching widget binding.", "合并组失败", "heartbeatTimeoutTimer", "POST", "Unauthorized (401)", "start", "Fetch canvas with current-layer boundary", "uiWeightSum", "Leave empty for no limit", "适配至画布", "设为选区", "正面提示词", "素材同步中", "rootId", "ifClause", "AI Generation Task", "sendResourceListChanged", "prompt_id", "Username: {{username}}", "executeHandlerAsync", "#3366CC", "processCode", "$schema", " if (schema", "Server does not support prompts (required for ", "maxProperties", "openWorkflow", " === false) ", " === undefined) ", ".validate;", "暂无图片", " === '' ", "label", "nan", " || Object.keys(", "read", "resource", "dependencies", '" was not yet loaded', "setPrototypeOf", "loopRequired", "refs", "Boundary preview", "Auto repick from PS", "更多操作", "title", "missingKeyHandler", "startHeartbeat", "No handler for streamRequestor: ", "invalid-input", "Delete current", "arq", "Outgoing notification interceptor failed: ", "ParseError", "nodeStores", "exactLength", "exclType", "getNodeIds", "[object Number]", "#3366FF", "reloadResources", "remove", "25EfmNCt", "getCapabilities", "i18nFormat", ", received '", "failed parsing options string in nesting for key ", "comfy_api_key", "sdppp 选中图层", "parsedType", "markConnected", "parent schema must have all required keywords: ", "coerce", "reconnecting", "&#39;", "画布范围", "action", " - no connection available", "Async refinement encountered during synchronous parse operation. Use .parseAsync instead.", "options", " ) { ", "从 当前图层 获取遮罩", "wss", "Auto sync in progress…", "当前选区", "Connection closed", "#6633CC", "mountTo", "body", "addMessageEventListener", " = false; else {", " } else {  for (var ", "Sending...", "OpenAI API 错误", "]; } else { ", "Invalid ", "(Queue:{{queueSize}}) {{progress}}% {{executingNodeTitle}}...", "queue_remaining", "Mask", "uiWeight", "移除槽位", "Node ", "skipCopy", "response", "returnNull", "translator", "运行了 {{duration}} 秒，{{message}}", "{3}", "setRequestHandler", "Set text to layer", "Invalid boundary type: {{type}}", "extensionManager", "Fetch current layer with primary boundary", "zod", "Create document failed", "forwardBroadcast", "#FF33CC", "NOT_USERINFO", "opts", "connectionManager", " var i = ", `((?:[^()"']+|"[^"]*"|'[^']*'|\\((?:[^()]|"[^"]*"|'[^']*')*\\))*?)`, "cacheKey", ".call( ", "服务不可用 (503)", "'then'", "ZodLazy", "Get mask from Current Layer", "pop", "#CC9933", "init: no languageDetector is used and no lng is defined", " throw new ValidationError(vErrors); ", "executed", "scheme", "buffer", "InternalError", "element", "addResources", "second", "以画布边界获取画布", "millisecond", "Show Preview ({{count}} images)", " if ( ", "Server does not support tools (required for ", "returnObjects", "创建图层失败", "$data", ` , message: 'should pass "`, "nodeTransports", " break; ", "正在发送所有图片...", "#33CC00", "maxParallelReads", "Current selection: Layer", "isRequest", "exists", "[\\@]", "^(\\p{Extended_Pictographic}|\\p{Emoji_Component})+$", "changeTracker", "close", "Click to restore default boundary", 'did not save key "', "Get image from Canvas", "Invalid graph definition: ", '"number"', ") break; ", "hasError", "Set as Canvas", "normalize", "yds", "apc", "retryTimeout", "[\\:\\@]", "onprogress", "_oninitialize", "unknown", "overloadTranslationOptionHandler", "请输入您的 Google API Key", "Clear", "notifications/prompts/list_changed", "http://json-schema.org/draft-07/schema#", "transport", "_onresponse", "sqr", "maxDate", "点击恢复默认遮罩", "显示发送的图片", " ); if (isAdditional", "++) { vErrors[", "OpenAI - 图片编辑", "resources", "Generation failed", "_onclose", "alwaysFormat", " in ", "initializeNodeStores", "comfy", " = true; else if (!Array.isArray(schema", "ZodNull", "插件可能正在拦截 PS 快捷键... ", " && !Array.isArray(", "loadOne", "execution_error", "additionalProperties", " var errs_", "allServers", "separator", "string", "alg", "setupStreamRequestHandler", "enforceStrictCapabilities", "uxp", "Task cancelled", " = 'then'; ", " !== undefined) ; ", "getConnectedNodeIds", "./api/userdata/workflows%2F.index.json", "hasDefaultValue", "Remote", "findIndex", "Array.isArray(", "error", "posterIdentifier", "Invalid discriminator value. Expected ", "Base URL", "[0-9]", "未找到文档 {0}", "画布边界", "Disk", "Invalid function return type", " is present' ", "You are passing a wrong module! Please check the object you are passing to i18next.use()", "requestId", "xaa", "\\$&", ".else", " } } else { ", "ZodDefault", ") { ", "31570AbVLHa", "', missingProperty: '", " = validate.schema", "var ", "Run", "_formats", "Selection", "equal", "Already connected to node ", "async schema referenced by sync schema", '"; } ', "Enter your Replicate API Key", "catchValue", "ComfyUI not ready", "useRawValueToEscape", "extractFromKey", "Gemini 2.5 Flash 图像", "Get selection failed", "this", "closeHandlers", "appendNamespaceToMissingKey", "Resize document for preview", " throw new ValidationError([", "Default", " ) : ( (", "positive", "Node definition not found for current node ", "afb", "usedLng", ` , message: 'should match "' + `, "saveMissing", "streamRequest", "(typeof ", "createAsyncIterator", "notificationHandlers", "partial", "Failed to check workflow state changes:", ".length == 0) {", "minItems", "使用当前图层", "适配至当前图层", "resources/read", "3rdParty", "&subfolder=", "调整预览文档尺寸", "rejecting language code not found in supportedLngs: ", "getAccountStatus API 调用失败 - HTTP 错误，状态: {{status}}", "metaSchema", "languageChanged", "DEBUG", "unsetOutgoingNotificationInterceptor", "sourceType", "waiters", "按住 Shift 键以新文档方式导入", " = true; break; }", "setOutgoingRequestInterceptor", "} else {  errors = ", "_errorDataPathProperty", "setupStreamResponseHandler", "zh-CN", "Failed to send an error response: ", "indexOf", "entries", " && !", "allErrors", "RH币:", "postProcess", "seconds", "Create layer failed", " = formats[", "updateMissing", "var default", "2464860ppHrYL", "nonnegative", "useDefault", "#9933CC", "保存并立即执行", "run API 调用失败 - {{reason}}", "activeWorkflow", " = null; try { ", "more", "自动从PS重新获取", `"' `, "#33CCFF", "#33CC66", "海量模型，稳定服务", "function", "is an invalid additional property", "ZodPromise", " === false || ", "notifications/resources/updated", "Images Per Batch", "inclusive", "等待 ComfyUI 连接完成…", "Range 1-100", "发送所有", "_addCheck", " , schema:  ", "varReplace", "cancelled", "You must pass an array of schemas to z.tuple([ ... ])", "Selection boundary", "_regex", "exclude", "objectKeys", "reduce", "Layer {{layerName}}", "[^\\%\\:]", "Unexpected dot segment condition", "split", "8024310sqCcUG", " via punycode: ", "正在使用本地文件", "serialize", "can't resolve reference ", "isValidLookup", "errorHandlers", "保存所有", "validateKeyword", "ZodLiteral", "secs", "图像质量 (%)", "regex", "任务已取消", "ZodEnum", "ActionSet {{0}} 未找到", "accessing an object - but returnObjects options is not enabled!", "No default templates available.", "formatLanguageCode", "keywords", "expected", "setOutgoingNotificationInterceptor", "escapeComponent", "画布变更后自动运行工作流", "fragment", "create", "returnTypeError", "forEach", "flags", " !== parseInt(division", "当前没有活动图层", "updateKey", "Edit Template", "passContext", "optional", "done", "discriminator", "parse", "connect", "This means something IS WRONG in your setup. You access the t function before i18next.init / i18next.loadNamespace / i18next.changeLanguage was done. Wait for the callback or Promise to resolve before accessing it!!!", "_requestMessageId", "run API failed - nodeInfoList unavailable. Please call getNodes() first.", "Auto send enabled", ".validate", "userDefinedNsSeparator", "completed", "iri", " cannot be resolved", "isRoot", "finished", "Add slot", "step", "urn:uuid", "roots/list", " && ", "false schema", "已选择", "setWidgetValue", ".data = ", "graph update cost ", "prp", "return", "contentMediaType", "Create document for preview", "under", "safeParseAsync", "objectValues", "isSupportedCode", "清空所有", "#CC33CC", "safe", "Smart Object Layer", " = equal(", "maxValue", "_setupTimeout", " == 'function' ? ", " characters' ", "auz", "performWorkflowReset: ", "unicode", "[^]", "schemas", ".replace(/~/g, '~0').replace(/\\//g, '~1')", "range", "Images", "long", "ComfyUI server reconnecting", "widgets", "sdpppX2", "No connection available for node ", "getUsedParamsDetails", "userDefinedKeySeparator", "hasEdge", "Layer {0} not found", "join", "cuid", "position", "Image input and prompt are required", "_instructions", "Selected", "exactUsedKey", "该节点默认继承当前图层与遮罩", "sdppp/abort", "{0,6}", "(队列:{{queueSize}}) {{progress}}% {{executingNodeTitle}}...", " = errors; var ", "[\\!\\$\\%\\'\\(\\)\\*\\+\\,\\-\\.0-9\\<\\>A-Z\\x5E-\\x7E]", "valid", " = false; if (e instanceof ValidationError) ", '[\\"]', "); errors = vErrors.length;  for (var ", "Comfy Manager未安装，无法重启", "reload", "name", "创建参考线框架", "setupStreamProtocolHandlers", "requestInitialStateForNode", "SDPPP 2.0 no longer needs this node", "typ", "isDuration", "extendTranslation", "invalid_intersection_types", "destroy", "URI is not a ", "已添加遮罩", ";if (", "自动同步: 开启", "]; var ", "cycles", "Upload failed, please try again", "Model", "ownProperties", "<errors; ", "exports", "ZodNumber", "请选择要发送图像的位置", "Notification handler failed for ", "removeItem", " reference.", "listWorkflows", "overflow", "No images", ".async; ", "Batch Count", ".length > ", "模板名称", "', depsCount: ", " = '' + ", "当前没有可用图层", "var refVal", "#CC0033", "MissingRefError", "Options", "subject", "getValidEnumValues", "_getInvalidInput", "Template saved.", "getConnectionToNodeInternal", "./sdppp-custom.js", "Masked", "self", "Jump to last", " , validate.schema", "Forbidden (403)", "unescapeFragment", "use", "管理 Comfy Simple 工作流的提示词片段。", "目标边界为空", "returnEmptyString", "queues", "comfy-uxp", "未知错误（{{code}}）", "implementInternalAction", "getAccountStatus API 调用失败 - {{reason}}", "#CC33FF", "catch", "minProperties", "var pattern", "确定要删除此模板吗？", " (async", "?\\:\\:", "isEmail", "&quot;", "cidr", "received", "正在创建任务...", "Get mask from Canvas", ") { errors = ", "assertCapabilityForMethod", "interpolationkey", "从文件打开图像", "isTop", "mesh:workflow", "invalid_type", "Required", "66ewIJJB", "jpr", "URN can not be parsed.", "请选择AI服务", "Validation", "DateTimeFormat", " === 0 || ", ", '", "Loading...", "Click to restore default mask", " == errors) {", "properties", " return errors === 0;       ", " === ", "https://raw.githubusercontent.com/ajv-validator/ajv/master/lib/refs/data.json#", "ZodUnion", "Template name already exists.", "本地视频", "#/definitions/stringArray", "addNamespaces", "match", "Server does not support logging (required for ", "assertCanSetRequestHandler", "jsonStringifyReplacer", "'/' + ", "本地图片包", "regexpUnescape", "toFixed", "ZodDiscriminatedUnion", "pendingCount", "#FF3366", "stateUpdate", "Current layer", "is a required property", "   var err =   ", "_getId", " , message: 'property name \\'", "AI使用的区域与最大尺寸控制", "([01]\\d|2[0-3]):[0-5]\\d(:", "Template removed.", "Not a ZodError: ", "exec", "full", "null", "keys", "date", "removeEventListener", "Auto fetching…", "运行失败 - 未获取到 nodeInfoList，请先执行 getNodes()。", "constructor", "convert widget {0} failed:", "Your Workflows", "schemaHasRulesExcept", "var customRule", "schema is invalid: ", "ComfyUI loading...", "#66CC00", "dataPathArr", " } }  ", "clearItems", "version", "/properties", "Inpaint (reverse crop)", " } if (errors === ", "isNullable", "syncStoresToNewConnection", "{0,5}", "nullable", "addEventListener", "datetime", "_processInputParams", " === null) ", "http://json-schema.org/schema", "留空表示不限", "validate.schema", "minutes", "sendResourceUpdated", "++) { if (", "getRegExp", "result", "type", "mergeObjectSync", "' } ", "postProcessPassResolved", "maxItems", "interpolation", "(.+?)", "=== 选项 ===", "runningRequests", " = false; ", "actions", "$el", "errorsText", "__esModule", "finite", "msecs", "invalid_literal", "strictCreate", "multipleOfPrecision", "UUID is not valid.", "ucs2length", "MCP error ", "[^\\%]", "boolean", "clearHeartbeatTimers", "; if (", ".validate; } if (  ", "输入设置", "toJSON", " == 'boolean' || ", "setupNodeBindings", "unescapePrefix", "+\\.", "extend", "sdppp_assets", "duration", "Quick", "http", "resetTimeoutOnProgress", " = true; } else { ", "uuid", " = false;  ", "获取 API Key", "New Template", "设置图层的文本", "errSchemaPath", ") - division", "Request timeout (408)", "pickLocalFile", "[^0-9]", ".additionalItems", "removeRequestHandler", ` , message: 'should match pattern "`, "; else if (", "offset", "loading namespace ", ".hasOwnProperty(", "gte", "success", "Cloud-based model service platform", "_onrequest", "getResource", "Task execution failed: {{error}}", "actions:util", "ids", ".validateSchema(", "ignore", "setItem", "]; ", "fewer", "getPluralFormsOfKey", "Upload aborted", "nonstrict", "_parseSync", " at one or more positions greater than or equal to ", "#9933FF", "call", "getRunningRequestsCount", "toUnicode", "keySeparator", "oneOf", "abs", "missingRefs", "NOT_QUERY", "ZodIntersection", "Stop", " = null; ", "prototype", "/type", "Scan", "responseSchema", "#3333CC", "A discriminator value for key `", "parentDataProperty", "fromCodePoint", "messageQueue", "getClientVersion", "INTERCEPTOR_ERROR", "getSuffixes", "输出至：", "上传已中止", "[^\\%\\[\\]\\:]", "enable", "propsKeywords", "自动填入画布关闭", "direction", "requestIdSeq", "ayl", ") break; } ", "compiling", "log", "Paste WebApp ID here", " = true , j; if (i > 1) { ", "获取像素失败: {{0}}", "thisServer", "非当前文档", "批次数量", "#FF0099", "tools", "#0099CC", "Logout", "prepareLoading", "ref/resource", "strip", "setupTransportHandlers", "[BroadcastManager] Error forwarding ", "base64url", " , params: { format:  ", "RelativeTimeFormat", "unshift", "createErrors", "Google Gemini 图像生成器", "ZodArray", ") continue; ", "registerProxyForwardHandler", "color: ", "ctx", "iterator", " = typeof ", "ZodReadonly", "root", " for nesting ", "function(data, dataPath, parentData, parentDataProperty, rootData) { 'use strict'; ", "_onnotification", "notice", "description", "resolveComponents", "整个画布", "Number must be finite", "提示词内容", "Defaults using", "More Settings", "getData", "base64", "ydd", "openWorkflow: ", "meta-schema not available", ", validate.root.schema);", "translation", "[ ]*{", "missingKeyNoValueFallbackToKey", "failedLoading", "exception_message", "callValidate", "[0]; ", "Please select AI service", " not implemented for node ", "fatal", "模板已应用。", "_parse", "Outgoing request interceptor failed: ", " , schema: false , parentSchema: validate.schema", "prompts/get", "definitions", "sdppp_workflow_alias", "; } ", " var missing", "skipKeywords", "exec_info", "ZodRecord", "创建文档失败", "stopSequence", "fromCharCode", "Positive Crop", "Task creation aborted", "loadLanguages", "getState", "AbortError", "Cannot register capabilities after connecting to transport", "oninitialized", " else { ", "languageChanging", "cloneInstance", " validate.errors = vErrors; ", "ZodObject", "getNodes API 调用失败 - HTTP 错误，状态: {{status}}", "emoji", "$ref", "days", "mergeArray", 'schema with key or id "', "#3333FF", "重启ComfyUI失败", ") vErrors.length = ", "assign", ".patternProperties", "deprecate", "appendNamespaceToCIMode", "color", "Received host version from UXP:", "isCIDR", "getSuffix", "formatType", "def", "#FF9900", "Running...", "enabled", "_refinement", "Area AI reads from; controls max image size", "%25", "排队等待", "         , parentSchema: validate.schema", "app.queuePrompt caught", "absolutePath", "点击移除本地文件", "cmp", "detection", "max", "unwrap", "_resetTimeout", "channel", "length", "file://", "workflows/", " var itemIndices = {}, item; for (;i--;) { var item = ", "Layer not found: {{0}}", "reverse", "maxReplaces", "setNotificationHandler", "Server does not support notifying of prompt list changes (required for ", "schema", "Failed to save prompt templates.", 'Invalid input: must start with "', "保存当前", "node_id", "Choose File", " element(s)", "isArray", "silent", "|0?0?", "proxy", "hasOwnProperty", "modules", "File upload failed", "NOT_PATH", "less than", " levels up, current level is ", "~validate", "languages", " if (typeof itemIndices[item] == 'number') { ", "#CC00CC", " !== ", "isNotification", "新建文档", "mode", "创建操作需要矩形坐标", "post", "请输入您的RunningHub API Key", "New Layer", "dev", "Layer not found {{0}}", "notification", "reference", "10stbnwE", " , params: { additionalProperty: '", " , message: 'should NOT have ", "defineProperty", "_limit", "undefined", "resolveRunImages", "=== Options ===", "_requestHandlers", "ZodBranded", "normalizeDuration", "errToObj", "includes", "toStringTag", "hours", " not found on node ", "fallbackLng", "  }  ", "Save current", "process", "#9900CC", "removeDotSegments", "additionalItems", "capacity", "无法写入{{part}}提示词：ComfyUI 尚未就绪。", "curlayer_selection", "_clientCapabilities", " = [", "0?[1-9]", ") {  ", " !== undefined && typeof ", "manuallyExtractDefaults", "headers", " ? ", "ZodAny", "rest", "McpError", "reset", " if (!(await ", "getTransportToNode", " , message: 'should NOT be ", "Failed to pick file. Please try again.", "No errors", "[A-Za-z0-9\\-\\.\\_\\~", "map", "状态检查已中止", "  errors = ", "Are you sure you want to delete this template?", "; else vErrors = null; }  ", "languageOnly", "elicitInput", "req_", "Store not found for ", "status API 调用失败 - HTTP 错误，状态: {{status}}", "stream", "languageDetector", "#0033CC", "lastPongReceived", "setNodeTitle", ")) { ", ") ) ", "padEnd", ";  if (vErrors === null) vErrors = [err]; else vErrors.push(err); errors++; ", "refVal", "acy", `获取图像 &
裁剪选区遮罩`, " , params: { keyword: '", "获取结果失败: {{error}}", "flatten", " if (Array.isArray(", "integer", "bind", " var err = ", "#FF33FF", "there was no format function for ", " , params: { i: i, j: j } ", "nodes", "Converting circular structure to JSON", "colors", "MethodNotFound", "#FF0000", "PS shortcuts may be blocked by plugin...", "fromNode", "Unknown message type: ", "作为新文档导入", "ZodPipeline", "relative-json-pointer", " , message: 'should be ", "critical", ", schema", "How to get APIKey", "正在发送...", "正在发送图像...", "and", ".length <= ", "men", "Gemini 2.5 Flash Image", "toQuotedString", "min", "   ", " , message: 'should match some schema in anyOf' ", "resetRegExp", "precision", "getter", "failed", "ZodSymbol", "无效的边界类型: {{type}}", "Uploading, if the image too large, may be lag...", "InvalidParams", "argumentsError", "SDPPP可能未安装或和插件版本不匹配 (404)", "; else vErrors = null; } ", ") && ", ") || ", "keySchema", "removeMiddleware", "keyword", "请求超时 (408)", "shared", "/then", "initImmediate", "keyType", "regExpQueue", "typeof ", "获取表单数据失败", "changeLanguage", "Processing {{processed}}/{{total}}", "AI 生成任务", "request", "_loadingSchemas", "Run Photoshop Action", "非法的名称: {{0}}", "formData", "warn", "getTransportInternal", "resolved promise for", "output", " var startErrs", "multipleOf", "comfyAPI", "all", "user", "Fit to canvas", "hasResourceBundle", "http://json-schema.org/draft-07/schema", "negative", "Invalid proxy forwarding: current node ", "getTime", "Crop by selection", "extra", "%c ", "[\\:\\/\\?\\#\\[\\]\\@]", "点击使用当前选区", "510", " , params: { allowedValues: schema", "停止并取消全部", "resources/unsubscribe", "当前图层边界", "; if (!", "[\\/\\?]", "put", 'Invalid input: must end with "', "userAgent", " , message: 'should be equal to one of the allowed values' ", "setKey", "Unknown", "Uploading...", "missing", " < ", "Validation failed but no issues detected.", "waiting for queue prompt", " === null || (", "hostVersion", "jsonPointers", "Get pixel of {{0}} failed", "escape", "云端推荐：", "设为画布", "maximum", "escapeFragment", "遮罩应用后未得到资源", "local", "graph", "hasOutgoingNotificationInterceptor", "Current Tasks:", "不支持的图像输入类型", "'[' + ", "Manage reusable prompt templates", "RH Coins:", "sampling", "正在连接 ComfyUI...", "heartbeatTimer", ")) {  var err =   ", "?\\]?$", "context", " } } ", ";  ", "pes", "Cloud:", "right", "File not found: {{path}}", "Failed to get result: {{error}}", "errorMap", "pluralResolver", "_opts", ".errors", "; else vErrors = null; }", "email", "items", "returnDetails", ", received ", "addKeyword", "登录成功", "Failed to check workflow changeTracker state:", "float", "获取图层信息", "_unknown", "MiddlewareError", "workflows", "validateStreamRequestorRequest", "coerced", " == 'object' && !(", '"object"', "formatSeparator", "size", "选择文件", "Cancel", "NumberFormat", "forkResourceStore", "activeState", "Cannot forward to node ", "__proto__", " } if (", "nestingSuffix", "_errors", "endTurn", "newlayer_curlayer", "主图边界", '" already exists', "2.1.0", "getPathExpr", "OpenAI/Google 格式API", " === '' || ", "refVal[", " delete ", "setProperty", " == null) ", "text", "some", "Select Workflow", "sdppp/directRequest", "requestHandlers", "setResolvedLanguage", "Canvas boundary", "ComfyUI 未就绪", "nestingRegexp", "Local file", "unknown keyword: ", "extendRefs", " {} ", "按回车打开应用： {{appName}}", "Number must be ", "macro", "reason", "disconnected", "_responseHandlers", "invalid_union", "createInstance", "toString", "substring", "checkDataTypes", "graphChanged", " if (rootData === undefined) rootData = data; ", "#99CC33", "toHash", "preload", "ltr", "通道连接中...", "Plugin window focused required to use keyboard shortcut", ", (dataPath || '')", "debugDisableHeartbeatResponse", "https", "sampling/createMessage", " = ", "没有活动文档", "Internal error", "#CC9900", "cacheUserLanguage", "notifications/progress", "NOT_PATH_NOSCHEME", "需要提供图像和提示词", "ruleErr", "newlayer_canvas", "&amp;", "removeNamespaces", "graphInstance", "renderer", "nullish", "'[\\'' + ", "reset=false but needsReset: ", "Main Image", "ZodBoolean", "自动获取中…", "新建模板", "jwt", "Selection bounds only", "too_big", "Invalid date", "registerDirectRequestHandlerGeneric", "创建文档", "#00CC00", "symbol", "2[0-4]", "点我恢复", "onclose", "getDefaultValuesFromSchema", "joinAs", "exactly equal to ", "not_finite", " == 'boolean') ", "$t(", "minSize", "acq", " else ", "hasLoadedNamespace", "Seems the loaded translations were in flat JSON format instead of nested. Either set keySeparator: false on init or make sure your translations are published in nested format.", "authInfo", "detectCycles", "Idle", "resources/templates/list", "不裁剪", "timeoutId", "image/png", 'no schema with key or ref "', "isOptional", "too_small", "connectedNodes", "overwrite", "logger", "Cannot access data ", "schema id ignored", " = false; j = itemIndices[item]; break; } itemIndices[item] = i; } ", "originalError", "[0-5]\\d", "over", "interceptorTimeout", "Drag images here and release to upload", "sdppp/streamRequest", "getDefaultValueFromField", "Prompts", "Failed to request initial states after connecting to ", "不支持非文本图层: {{0}}", "init: i18next is already initialized. You should call init just once!", "defaultMeta", "registerStreamRequestorHandler", "hrs", "当前无法应用模板。", "debug", "resolveRef", "tDescription", "Manage reusable prompt snippets for Comfy Simple workflows.", "选择图像来源", "_onerror", "Invalid JSON-pointer: ", "getRule", "AUTO", "从 画布 获取图像", "handleIncomingNotification", "addFormat", "没有链接图层: {{0}}", "selectColor", "ESCAPE", "Rectangle coordinates required for create action", "resources/subscribe", "每批图像数", "acw", "isInitializing", "addIssue", "模板已保存。", " = new RegExp(", "Failed to create document from file", "__cycle__", "Quality {{percent}}%", "sdppp", "pluralRulesCache", "以当前图层边界获取画布", "__internal_requestInitialState_", "任务未完成，当前状态: {{status}}", "outgoingNotificationInterceptors", " = true; if (", "heartbeatInterval", "defaultVariables", "accept", "resourceName", "enum", "ZodVoid", "loaded", "getLanguagePartFromCode", "implements", "widgetableStructure", "当前选项：图层", "graphToPrompt", "No store found for node ", "at least", "Edge references unknown target node: ", "node_errors", "lngs", "charCodeAt", " = undefined; ", "addResourceBundle", "选择 AI 服务提供商", "Empty selection mask", "common", "^\\[?(", "async schema in sync schema", "未授权 (401)", "#FF9933", "Graph must have at least one node", "从 当前图层 获取图像", "Gateway error (502)", "调整输入设置", "currentOnly", "访客登录成功", "uploadImage API 调用失败 - {{reason}}", "#0000CC", "(?:", " || validate.schema", "使用整个画布", "assertIs", "Edge references unknown source node: ", "Success", "round", "高级选图", "]] === undefined ", " }  ", "run API failed - HTTP error! status: {{status}}", ".dataPath === undefined) ", "Invalid forward path for proxy action", "3824007cnqohl", "minDate", "作为智能对象导入", `获取图像 &
限制图像范围`, " -> ", "([+-]\\d{2}:?\\d{2})", "Auto Sync: on", "notifications/message", "logger must implement log, warn and error methods", "String must contain ", "请填写模板名称。", 'unknown format "', "source", "schemaId", "notifications/resources/list_changed", "lazycreate", "maxRetries", "app", "[object Function]", " is not a valid identifier", "Invalid", "提示词", "#CC3333", ") && (missing", "更多设置", "Default Templates", "自动同步中…", "findPathInternal", "info", "清除参考线框架", "useDefaults", "ZodTuple", "maxTokens", "_cachedPath", "listenMessageCallback", "key", "errors", "toASCII", " = customRules[", "Date must be ", " = undefined;", "[A-Za-z0-9\\!\\$\\%\\'\\*\\+\\-\\^\\_\\`\\{\\|\\}\\~]", "Failed to fetch account status", "$async", "empty", ") {  var err =   ", "store:update:", "kind", "count", "en-US", "refinement", "usedParams", "SCHEMES", "未知错误", " var errors = 0;     ", " != 'undefined' && ", "skipInterpolation", "saveMissingPlurals", "else", "cleanup", 'Only layer kind "TEXT" is supported, invalid layer: {{0}}', "Running", " ? await ", "getImage", "logging", "~standard", "assertEqual", "prefix", ".errors; else vErrors = vErrors.concat(", "生成中...", "promise", "effect", "propertyNames", "__connection_established", "rootData", "  for (var ", "控件 {0} 转换失败：", "Set as Current Selection", "正向裁剪", "#FFCC33", "exception", "Prompt Templates", "bbz", "initAsync", "roots", "24ApwCfF", "上传中，如果图片过大，可能会卡顿...", "_cleanupTimeout", "host", "port", "未找到图层 {0}", "augment", "should NOT have additional properties", "Failed to convert widget {0}:", "del", ".schemaPath === undefined) { ", "token", "#CC6600", "prompts/list", 'id "', "pending", "pga", "Exclude selection", "Document {0} not found", ` , message: 'should match format "`, "lowerCaseLng", "正在运行", "Failed to load workflows.", "[0-9A-Fa-f]", "质量{{percent}}%", "pong", "should have required property \\'", " var schemaExcl", "不支持的上传类型：{{type}}", "Save all", "allOf", "Rescoped", "save", " = vErrors[", "nodeId", "Current layer bounds only", "strictKeywords", " console.log(", "' + ", "ignoreJSONStructure", "Fit to current layer", "Failed to fetch form data", "createGlobalDispatcherForType", "快捷键选图功能仅登陆后可用", " = RULES.custom['", "[\\.]", "canvas", "sd-ppp-static/sdppp_images/", "New Document", "#FF6600", ".length; ", ") ) {   ", "Failed to update the {{part}} prompt. Please try again.", "forward", "contains", "Outpaint (positive crop)", "$dataMetaSchema", "Please select the mask to get", "反向裁剪", "env", "ConnectionClosed", "Failed to request initial state for ", "revocable", "capabilities", "尺寸限制 (px)", "Create guide frame", "queueLoad", "_error", "ZodNever", "formatter", "if (", "createTemporary", "supportedLngs", "init", "-latn", "params", "query", "catchall", "找不到图层: {{0}}", "ary", "Invalid input", "HeartbeatTimeoutError", "No edge defined from ", "broadcast", "Applying templates is unavailable right now.", "); if (!", "uploadComfyImageFromUXP", "cleanCode", "Creating task...", "模板名称已存在。", "tolerant", '";  ', "fullFilename", "#CC0099", "file", "detect", "Invalid enum value. Expected ", "_capabilities", 'key "', "Get image from Current Layer", "lastIndexOf", "Get Image", "image", "endsWith", "未选择工作流", " != 'number' || ", " validate.errors = [", "[object RegExp]", "stringify", "ComfyUI - {{workflowName}}", " !== undefined)", ", exclusive: ", "toResolveHierarchy", "resolve", "No workflows available.", "strictNumbers", "createMessage", "Current layer boundary", "Using local file", "greater than ", "notificationQueue", " , message: 'should have ", "Illegal input >= 0x80 (not a basic code point)", "isBase64", "setupGeneralBroadcastHandler", "#00CCCC", "loadNamespaces", "_progressHandlers", " , message: 'should be equal to constant' ", "url", "); for (var ", ") { for (var ", "36CkgVtF", "util", "Generating...", "milliseconds", " , message: 'should contain a valid item' ", "你的工作流", "pst", "reconnected", "initializeConsumer", "#FF3300", "trim", " ) ", "resolvedLanguage", "2.0", "setDefaultNamespace", "nestingPrefix", "value", "onTimeout", "getConnectionCount", "splice", "Canvas", "NOT_HOST", " if (true) {", " = errors;var ", "Get API Key", "nodeIndexes", "findPath", "禁止访问 (403)", '" is used in schema at path "', "#3300FF", "loadGraphData", "pluralSeparator", "#FF6633", `Get image &
Limit image boundary`, "找不到文档: {{0}}", "usedKey", "handleAsObject", "Action handler ", "unicodeSupport", "exactly", "{0,1}", "onerror", "safeParse", "Gateway timeout (504)", "find", "执行失败", "formatters", " !== undefined) { ", "newlayer_selection", " = errors;  ", "broadcastHandlers", "Hold Shift key to import as new document", "void", " , message: 'should match exactly one schema in oneOf' ", " Object.keys(", "slice", "RULES", "contentEncoding", "regExpMap", "nonExplicitSupportedLngs", "No limit", "minLength", "getFixedT", "pbt", "bigint", "uxpHost", "initializeResponseQueue", "inlineRefs", "cache", "_fragments", "workflow", "(\\.\\d+)?", "###", ".type || 'string'; if (", "custom", " , params: { limit: ", "粘贴你的模型名称", "Click to send (Shift-click creates new document)", "OpenAI/Google format API", "MIN_SAFE_INTEGER", "Send all", "arrayToEnum", "toLoad", "ZodNaN", "getNodes API 调用失败 - {{reason}}", "loaded namespace ", "clear", "Negative prompt content", "从磁盘获取", "startTime", "Empty", "array", "selection", "Delete", "prs", "cuid2", "if (!", "&gt;", "rtl", "mountedTransports", "ComfyUI加载失败，HTTP状态码：{{code}}", "tools/call", "getAllReachableNodes", " , params: { multipleOf: ", "arrayKeywords", "invalid_enum_value", "服务器错误 (500)", " if (", " Math.abs(Math.round(division", ", rootData)  ", "registerDirectRequestHandler", "default", "payload", "required", "click", "Primary image resource is missing", "substr", "exact", "dir", "#6600FF", "\\' is invalid' ", '$ref: validation keywords used in schema at path "', "interpolator", "disable", "unrecognized_keys", "pre", "relativetime", "loadSchema", "getResourceBundle", "getNodeStore", "strong", "; }   var err =   ", "prevValid", "_notificationHandlers", " === true) ? ", "; if (vErrors !== null) { if (", "running", "assert", "Cannot access property/index ", "api", "#/definitions/schemaArray", "Invalid name: {{0}}", "Import from disk", "has", "decline", " / ", "setupAbortHandler", "No linked layer for {{0}}", "Failed to get task status", "joinValues", " === undefined ", "点击恢复默认边界", "Aborted", "optionsMap", " != 'number') { ", "Canvas bounds", "ZodCatch", "请输入质量百分比", "valueType", "removeDefault", "#0066FF", "detail", "passthrough", "+Shift 调整更多选项；Ctrl 单次获取。", "Press Enter to open app: {{appName}}", "-arab", "sort", "Outgoing message:", "[\\!\\$\\&\\'\\(\\)\\*\\+\\,\\;\\=]", "mailto", "filter", "segment", "anyOf", "streamRequestorHandlers", "Cannot reboot because ComfyManager is missing", "describe", "maxLength", "_options", "刷新图片中", "选区遮罩", "缺少遮罩资源", ", deps: '", "loadResources", "#0066CC", "language", "_requestHandlerAbortControllers", "examples", "parent", "sdppp/broadcast", "execution_success", "missingInterpolationHandler", " when property ", "getCanonicalLocales", " && Object.prototype.hasOwnProperty.call(", "getPath", "node", "innerType", "secure", "getProperty", "realTransport", "isDate", "outputs API failed - HTTP error! status: {{status}}", "hasNotificationHandler", "comfy side transport.onerror", "Auto", "fullPath", "pbu", "openWorkflowJSON", "[j])) { ", "debouncedNotificationMethods", "Expected ", "notificationsHandled", "此处粘贴 WebApp ID", "unknownKeys", "暂无预览内容", "fast", " ms", "{1,4}", "_any", "_key", "#FF00CC", "order", "#FFCC00", "_def", "copy", "formatParams", "Server error (500)", "minimum", " after ", " = !(false ", "never", "connecting", "freeze", "outputs API failed - {{reason}}", " not found for current node ", "year", "partialBundledLanguages", "ZodUnknown", " = 0; ", "Error validating elicitation response: ", " = false , ", "images", " should be boolean' ", "addUsedSchema", "setupGraphStoreSync", "显示预览框 ({{count}}张图片)", "Auto run after canvas change", "#CC0000", "errs_", "object", "No custom templates yet.", "validateHandlerType", " , params: { comparison: ", '" (see option extendRefs)', "mcpMesh", "No backend was added via i18next.use. Will not load resources.", " from id ", "Discriminator property ", "Template applied.", "avl", "#0099FF", "assertRequestHandlerCapability", "以画布边界获取当前图层", "Elicitation response content does not match requested schema: ", "Asynchronous transform encountered during synchronous parse operation. Use .parseAsync instead.", "Back", "ValidationError", "signal", " , ", "点击发送（Shift-点击新建文档）", "xn--", "abortAllRequests", "subscribe", "resources/list", "#FF0066", " , message: 'should be multiple of ", "backendConnector", " var schema", 'Invalid input: must include "', "lastIndex", "parseMissingKeyHandler", "使用教程", "WebkitAppearance", "Tutorial", "readonly", "errorDataPath", "MissingRef", "[GraphStoreSynchronizer] Error processing store update for ", "curlayer", "hasAction", "status API 调用失败 - {{reason}}", "handleIncomingMessage", "{0,4}", "Use current layer", "compileAsync", "Waiting for ComfyUI to finish connecting…", "lte", "Remove slot", "Unknown error", "createStreamState", "missingKey", "App ID:", `" won't get resolved as namespace "`, "getDefinition", "invalid_return_type", "regexp", " , params: { missingProperty: '", "mountedEndpoints", "utils", "buildAdjacencyList", "getConnectionInfo", "exclusiveMinimum", " outer: for (;i--;) { for (j = i; j--;) { if (equal(", "mergeShapes", "xmn", "ZodEffects", "Generate", "baseId", "nss", "ZodOptional", "/else", ".length , ", "NOT_SCHEME", "]; if (", "暂无默认模板。", "isDatetime", "getTransport", "json", "lng", "method", "rejectImage", "'].definition; var ", "floor", " && ( ", "X10", "_schemas", ") ? ", "add", "unsetNotificationHandler", "Failed to reboot ComfyUI", "arz", " items' ", "transform", "race", "_limitLength", "Client does not support sampling (required for ", "throwIfAborted", "path", "level", "missingSchema", "ajp", "querySelector", "无效操作: {{action}}", " , rootData )  ", "Received a response for an unknown message ID: ", "customRules", `Can't use "invalid_type_error" or "required_error" in conjunction with custom error map.`, "Enter a pixel value greater than 0", "同步当前内容", "sam", "async keyword in sync schema", "getNeighbors", "getOwnPropertyNames", "自动同步未打开", "key '", "画布变动后自动运行", "hbo", "queue", "适配至选区", "schemaUnknownRules", "Sending all images...", "自定义AI工作流引擎", " !== undefined) {  ", "fcName", "设为当前选区", "day", "workflowManager", "_refs", "onmessage", "simplifyPluralSuffix", "isClone", " if (!", "$$$$", "))) { ", "图层遮罩", "pattern", "模板已删除。", "智能对象图层", "exclusive", "parseAsync", "userinfo", "formats", " , params: { type: '", "Enter Google API Key", "uniqueItems", "#3300CC", "任务执行失败", "Output to:", "types", "ListFormat", "delete", "isPersisted", "refine"];
  return bx = function() {
    return i;
  }, bx();
}
const $n = (i) => {
  const x = a, { data: t, path: r, errorMaps: e, issueData: s } = i, n = [...r, ...s[x(2711)] || []], o = { ...s, path: n };
  if (s[x(2851)] !== void 0) return { ...s, path: n, message: s.message };
  let c = "";
  const u = e[x(2534)]((d) => !!d)[x(2419)]()[x(1672)]();
  for (const d of u)
    c = d(o, { data: t, defaultError: c })[x(2851)];
  return { ...s, path: n, message: c };
};
function X(i, x) {
  const t = a, r = Ln(), e = $n({ issueData: x, data: i[t(782)], path: i[t(2711)], errorMaps: [i[t(2121)][t(2933)], i.schemaErrorMap, r, r === Ht ? void 0 : Ht][t(2534)]((s) => !!s) });
  i.common[t(719)].push(e);
}
class ee {
  constructor() {
    const x = a;
    this.value = x(1268);
  }
  [a(802)]() {
    const x = a;
    this[x(2380)] === "valid" && (this[x(2380)] = x(802));
  }
  [a(522)]() {
    const x = a;
    this[x(2380)] !== x(794) && (this[x(2380)] = x(794));
  }
  static [a(1635)](x, t) {
    const r = a, e = [];
    for (const s of t) {
      if (s[r(333)] === "aborted") return h0;
      s[r(333)] === r(802) && x[r(802)](), e[r(528)](s.value);
    }
    return { status: x[r(2380)], value: e };
  }
  static async [a(741)](x, t) {
    const r = a, e = [];
    for (const s of t) {
      const n = await s[r(2182)], o = await s[r(2380)];
      e[r(528)]({ key: n, value: o });
    }
    return ee.mergeObjectSync(x, e);
  }
  static [a(1437)](x, t) {
    const r = a, e = {};
    for (const s of t) {
      const { key: n, value: o } = s;
      if (n[r(333)] === r(794) || o[r(333)] === r(794)) return h0;
      n[r(333)] === r(802) && x[r(802)](), o[r(333)] === r(802) && x[r(802)](), n[r(2380)] !== r(1940) && (typeof o.value !== r(1714) || s.alwaysSet) && (e[n[r(2380)]] = o[r(2380)]);
    }
    return { status: x.value, value: e };
  }
}
const h0 = Object[a(2596)]({ status: a(794) }), Qe = (i) => ({ status: a(802), value: i }), ae = (i) => ({ status: a(1268), value: i }), Na = (i) => i.status === a(794), qa = (i) => i[a(333)] === "dirty", Ve = (i) => i[a(333)] === a(1268), gx = (i) => typeof Promise !== a(1714) && i instanceof Promise;
var r0;
(function(i) {
  const x = a;
  i[x(1720)] = (t) => typeof t === x(1019) ? { message: t } : t || {}, i[x(1977)] = (t) => typeof t == "string" ? t : t == null ? void 0 : t[x(2851)];
})(r0 || (r0 = {}));
class me {
  constructor(x, t, r, e) {
    const s = a;
    this[s(2180)] = [], this[s(2551)] = x, this[s(782)] = t, this[s(2827)] = r, this[s(2583)] = e;
  }
  get [a(2711)]() {
    const x = a;
    return !this[x(2180)][x(1667)] && (Array[x(1683)](this[x(2583)]) ? this[x(2180)][x(528)](...this._path, ...this[x(2583)]) : this[x(2180)][x(528)](...this[x(2827)], this._key)), this._cachedPath;
  }
}
const Ta = (i, x) => {
  const t = a;
  if (Ve(x)) return { success: !0, data: x[t(2380)] };
  if (!i[t(2121)][t(719)][t(1667)]) throw new Error(t(1878));
  return { success: !1, get error() {
    const r = t;
    if (this[r(2299)]) return this[r(2299)];
    const e = new Pe(i[r(2121)].issues);
    return this[r(2299)] = e, this[r(2299)];
  } };
};
function v0(i) {
  const x = a;
  if (!i) return {};
  const { errorMap: t, invalid_type_error: r, required_error: e, description: s } = i;
  if (t && (r || e)) throw new Error(x(2720));
  return t ? { errorMap: t, description: s } : { errorMap: (o, c) => {
    const u = x, { message: d } = i;
    return o.code === u(2469) ? { message: d ?? c[u(382)] } : typeof c[u(782)] > "u" ? { message: d ?? e ?? c[u(382)] } : o.code !== "invalid_type" ? { message: c[u(382)] } : { message: d ?? r ?? c[u(382)] };
  }, description: s };
}
class C0 {
  get description() {
    const x = a;
    return this[x(2587)][x(1581)];
  }
  [a(694)](x) {
    return Ee(x.data);
  }
  _getOrReturnCtx(x, t) {
    const r = a;
    return t || { common: x[r(2551)][r(2121)], data: x[r(782)], parsedType: Ee(x[r(782)]), schemaErrorMap: this._def[r(1911)], path: x.path, parent: x[r(2551)] };
  }
  [a(1426)](x) {
    const t = a;
    return { status: new ee(), ctx: { common: x[t(2551)][t(2121)], data: x[t(782)], parsedType: Ee(x[t(782)]), schemaErrorMap: this[t(2587)][t(1911)], path: x[t(2711)], parent: x[t(2551)] } };
  }
  [a(1509)](x) {
    const t = a, r = this[t(1605)](x);
    if (gx(r)) throw new Error("Synchronous parse encountered promise.");
    return r;
  }
  [a(2832)](x) {
    const t = a, r = this._parse(x);
    return Promise[t(2345)](r);
  }
  [a(1198)](x, t) {
    const r = a, e = this.safeParse(x, t);
    if (e.success) return e.data;
    throw e[r(1033)];
  }
  [a(2406)](x, t) {
    const r = a, e = { common: { issues: [], async: (t == null ? void 0 : t[r(2780)]) ?? !1, contextualErrorMap: t == null ? void 0 : t.errorMap }, path: (t == null ? void 0 : t[r(2711)]) || [], schemaErrorMap: this._def[r(1911)], parent: null, data: x, parsedType: Ee(x) }, s = this[r(1509)]({ data: x, path: e[r(2711)], parent: e });
    return Ta(e, s);
  }
  "~validate"(x) {
    var e, s;
    const t = a, r = { common: { issues: [], async: !!this["~standard"].async }, path: [], schemaErrorMap: this[t(2587)][t(1911)], parent: null, data: x, parsedType: Ee(x) };
    if (!this["~standard"][t(2780)]) try {
      const n = this[t(1509)]({ data: x, path: [], parent: r });
      return Ve(n) ? { value: n[t(2380)] } : { issues: r.common.issues };
    } catch (n) {
      (s = (e = n == null ? void 0 : n[t(2851)]) == null ? void 0 : e[t(498)]()) != null && s.includes(t(553)) && (this[t(2212)][t(2780)] = !0), r.common = { issues: [], async: !0 };
    }
    return this[t(2832)]({ data: x, path: [], parent: r })[t(654)]((n) => Ve(n) ? { value: n.value } : { issues: r[t(2121)][t(719)] });
  }
  async [a(2753)](x, t) {
    const r = a, e = await this[r(1226)](x, t);
    if (e.success) return e[r(782)];
    throw e[r(1033)];
  }
  async [a(1226)](x, t) {
    const r = a, e = { common: { issues: [], contextualErrorMap: t == null ? void 0 : t[r(1911)], async: !0 }, path: (t == null ? void 0 : t[r(2711)]) || [], schemaErrorMap: this[r(2587)][r(1911)], parent: null, data: x, parsedType: Ee(x) }, s = this[r(1605)]({ data: x, path: e[r(2711)], parent: e }), n = await (gx(s) ? s : Promise.resolve(s));
    return Ta(e, n);
  }
  refine(x, t) {
    const r = a, e = (s) => {
      const n = K;
      return typeof t === n(1019) || typeof t === n(1714) ? { message: t } : typeof t === n(1137) ? t(s) : t;
    };
    return this[r(1653)]((s, n) => {
      const o = r, c = x(s), u = () => n.addIssue({ code: B[o(2438)], ...e(s) });
      return typeof Promise !== o(1714) && c instanceof Promise ? c[o(654)]((d) => d ? !0 : (u(), !1)) : c ? !0 : (u(), !1);
    });
  }
  refinement(x, t) {
    return this._refinement((r, e) => {
      const s = K;
      return x(r) ? !0 : (e[s(2086)](typeof t === s(1137) ? t(r, e) : t), !1);
    });
  }
  [a(1653)](x) {
    const t = a;
    return new Ae({ schema: this, typeName: p0[t(2679)], effect: { type: t(2197), refinement: x } });
  }
  [a(547)](x) {
    return this[a(1653)](x);
  }
  constructor(x) {
    const t = a;
    this[t(789)] = this[t(1226)], this._def = x, this.parse = this[t(1198)][t(1780)](this), this[t(2406)] = this[t(2406)].bind(this), this[t(2753)] = this[t(2753)].bind(this), this[t(1226)] = this.safeParseAsync[t(1780)](this), this.spa = this.spa[t(1780)](this), this[t(2766)] = this[t(2766)][t(1780)](this), this.refinement = this[t(2197)][t(1780)](this), this[t(547)] = this[t(547)][t(1780)](this), this.optional = this[t(1195)][t(1780)](this), this[t(1423)] = this[t(1423)][t(1780)](this), this[t(2006)] = this[t(2006)][t(1780)](this), this[t(2455)] = this[t(2455)][t(1780)](this), this[t(2217)] = this.promise[t(1780)](this), this.or = this.or[t(1780)](this), this[t(1802)] = this.and[t(1780)](this), this.transform = this[t(2706)][t(1780)](this), this[t(377)] = this[t(377)][t(1780)](this), this[t(2475)] = this[t(2475)].bind(this), this[t(1336)] = this[t(1336)][t(1780)](this), this[t(2539)] = this[t(2539)][t(1780)](this), this[t(728)] = this[t(728)][t(1780)](this), this[t(2648)] = this[t(2648)].bind(this), this.isNullable = this[t(1420)].bind(this), this[t(2043)] = this[t(2043)][t(1780)](this), this[t(2212)] = { version: 1, vendor: t(925), validate: (r) => this[t(1693)](r) };
  }
  optional() {
    const x = a;
    return Se[x(1186)](this, this[x(2587)]);
  }
  [a(1423)]() {
    const x = a;
    return je.create(this, this[x(2587)]);
  }
  [a(2006)]() {
    const x = a;
    return this[x(1423)]()[x(1195)]();
  }
  array() {
    return pe[a(1186)](this);
  }
  [a(2217)]() {
    const x = a;
    return Px[x(1186)](this, this[x(2587)]);
  }
  or(x) {
    const t = a;
    return vx.create([this, x], this[t(2587)]);
  }
  [a(1802)](x) {
    const t = a;
    return wx.create(this, x, this[t(2587)]);
  }
  [a(2706)](x) {
    const t = a;
    return new Ae({ ...v0(this._def), schema: this, typeName: p0[t(2679)], effect: { type: t(2706), transform: x } });
  }
  [a(2475)](x) {
    const t = a, r = typeof x == "function" ? x : () => x;
    return new Ix({ ...v0(this[t(2587)]), innerType: this, defaultValue: r, typeName: p0.ZodDefault });
  }
  [a(377)]() {
    const x = a;
    return new Ms({ typeName: p0[x(1718)], type: this, ...v0(this[x(2587)]) });
  }
  catch(x) {
    const t = a, r = typeof x === t(1137) ? x : () => x;
    return new Ex({ ...v0(this._def), innerType: this, catchValue: r, typeName: p0[t(2520)] });
  }
  [a(2539)](x) {
    const t = a, r = this.constructor;
    return new r({ ...this[t(2587)], description: x });
  }
  [a(728)](x) {
    return ia[a(1186)](this, x);
  }
  [a(2648)]() {
    return Rx[a(1186)](this);
  }
  [a(2043)]() {
    return this[a(2406)](void 0).success;
  }
  isNullable() {
    const x = a;
    return this[x(2406)](null)[x(1494)];
  }
}
const Hn = /^c[^\s-]{8,}$/i, zn = /^[0-9a-z]+$/, Un = /^[0-9A-HJKMNP-TV-Z]{26}$/i, Vn = /^[0-9a-fA-F]{8}\b-[0-9a-fA-F]{4}\b-[0-9a-fA-F]{4}\b-[0-9a-fA-F]{4}\b-[0-9a-fA-F]{12}$/i, Zn = /^[a-z0-9_-]{21}$/i, Bn = /^[A-Za-z0-9-_]+\.[A-Za-z0-9-_]+\.[A-Za-z0-9-_]*$/, Wn = /^[-+]?P(?!$)(?:(?:[-+]?\d+Y)|(?:[-+]?\d+[.,]\d+Y$))?(?:(?:[-+]?\d+M)|(?:[-+]?\d+[.,]\d+M$))?(?:(?:[-+]?\d+W)|(?:[-+]?\d+[.,]\d+W$))?(?:(?:[-+]?\d+D)|(?:[-+]?\d+[.,]\d+D$))?(?:T(?=[\d+-])(?:(?:[-+]?\d+H)|(?:[-+]?\d+[.,]\d+H$))?(?:(?:[-+]?\d+M)|(?:[-+]?\d+[.,]\d+M$))?(?:[-+]?\d+(?:[.,]\d+)?S)?)??$/, Kn = /^(?!\.)(?!.*\.\.)([A-Z0-9_'+\-\.]*)[A-Z0-9_+-]@([A-Z0-9][A-Z0-9\-]*\.)+[A-Z]{2,}$/i, Gn = a(969);
let $x;
const Jn = /^(?:(?:25[0-5]|2[0-4][0-9]|1[0-9][0-9]|[1-9][0-9]|[0-9])\.){3}(?:25[0-5]|2[0-4][0-9]|1[0-9][0-9]|[1-9][0-9]|[0-9])$/, Qn = /^(?:(?:25[0-5]|2[0-4][0-9]|1[0-9][0-9]|[1-9][0-9]|[0-9])\.){3}(?:25[0-5]|2[0-4][0-9]|1[0-9][0-9]|[1-9][0-9]|[0-9])\/(3[0-2]|[12]?[0-9])$/, Xn = /^(([0-9a-fA-F]{1,4}:){7,7}[0-9a-fA-F]{1,4}|([0-9a-fA-F]{1,4}:){1,7}:|([0-9a-fA-F]{1,4}:){1,6}:[0-9a-fA-F]{1,4}|([0-9a-fA-F]{1,4}:){1,5}(:[0-9a-fA-F]{1,4}){1,2}|([0-9a-fA-F]{1,4}:){1,4}(:[0-9a-fA-F]{1,4}){1,3}|([0-9a-fA-F]{1,4}:){1,3}(:[0-9a-fA-F]{1,4}){1,4}|([0-9a-fA-F]{1,4}:){1,2}(:[0-9a-fA-F]{1,4}){1,5}|[0-9a-fA-F]{1,4}:((:[0-9a-fA-F]{1,4}){1,6})|:((:[0-9a-fA-F]{1,4}){1,7}|:)|fe80:(:[0-9a-fA-F]{0,4}){0,4}%[0-9a-zA-Z]{1,}|::(ffff(:0{1,4}){0,1}:){0,1}((25[0-5]|(2[0-4]|1{0,1}[0-9]){0,1}[0-9])\.){3,3}(25[0-5]|(2[0-4]|1{0,1}[0-9]){0,1}[0-9])|([0-9a-fA-F]{1,4}:){1,4}:((25[0-5]|(2[0-4]|1{0,1}[0-9]){0,1}[0-9])\.){3,3}(25[0-5]|(2[0-4]|1{0,1}[0-9]){0,1}[0-9]))$/, Yn = /^(([0-9a-fA-F]{1,4}:){7,7}[0-9a-fA-F]{1,4}|([0-9a-fA-F]{1,4}:){1,7}:|([0-9a-fA-F]{1,4}:){1,6}:[0-9a-fA-F]{1,4}|([0-9a-fA-F]{1,4}:){1,5}(:[0-9a-fA-F]{1,4}){1,2}|([0-9a-fA-F]{1,4}:){1,4}(:[0-9a-fA-F]{1,4}){1,3}|([0-9a-fA-F]{1,4}:){1,3}(:[0-9a-fA-F]{1,4}){1,4}|([0-9a-fA-F]{1,4}:){1,2}(:[0-9a-fA-F]{1,4}){1,5}|[0-9a-fA-F]{1,4}:((:[0-9a-fA-F]{1,4}){1,6})|:((:[0-9a-fA-F]{1,4}){1,7}|:)|fe80:(:[0-9a-fA-F]{0,4}){0,4}%[0-9a-zA-Z]{1,}|::(ffff(:0{1,4}){0,1}:){0,1}((25[0-5]|(2[0-4]|1{0,1}[0-9]){0,1}[0-9])\.){3,3}(25[0-5]|(2[0-4]|1{0,1}[0-9]){0,1}[0-9])|([0-9a-fA-F]{1,4}:){1,4}:((25[0-5]|(2[0-4]|1{0,1}[0-9]){0,1}[0-9])\.){3,3}(25[0-5]|(2[0-4]|1{0,1}[0-9]){0,1}[0-9]))\/(12[0-8]|1[01][0-9]|[1-9]?[0-9])$/, ei = /^([0-9a-zA-Z+/]{4})*(([0-9a-zA-Z+/]{2}==)|([0-9a-zA-Z+/]{3}=))?$/, xi = /^([0-9a-zA-Z-_]{4})*(([0-9a-zA-Z-_]{2}(==)?)|([0-9a-zA-Z-_]{3}(=)?))?$/, Os = "((\\d\\d[2468][048]|\\d\\d[13579][26]|\\d\\d0[48]|[02468][048]00|[13579][26]00)-02-29|\\d{4}-((0[13578]|1[02])-(0[1-9]|[12]\\d|3[01])|(0[469]|11)-(0[1-9]|[12]\\d|30)|(02)-(0[1-9]|1\\d|2[0-8])))", ti = new RegExp("^" + Os + "$");
function Ds(i) {
  const x = a;
  let t = x(2052);
  i[x(1811)] ? t = t + x(457) + i[x(1811)] + "}" : i.precision == null && (t = t + x(2435));
  const r = i[x(1811)] ? "+" : "?";
  return x(1394) + t + ")" + r;
}
function ai(i) {
  return new RegExp("^" + Ds(i) + "$");
}
function ri(i) {
  const x = a;
  let t = Os + "T" + Ds(i);
  const r = [];
  return r[x(528)](i[x(1890)] ? "Z?" : "Z"), i[x(1490)] && r[x(528)](x(2152)), t = t + "(" + r[x(1255)]("|") + ")", new RegExp("^" + t + "$");
}
function si(i, x) {
  const t = a;
  return !!((x === "v4" || !x) && Jn[t(700)](i) || (x === "v6" || !x) && Xn[t(700)](i));
}
function ni(i, x) {
  const t = a;
  if (!Bn[t(700)](i)) return !1;
  try {
    const [r] = i[t(1160)](".");
    if (!r) return !1;
    const e = r[t(340)](/-/g, "+")[t(340)](/_/g, "/")[t(1770)](r[t(1667)] + (4 - r[t(1667)] % 4) % 4, "="), s = JSON[t(1198)](atob(e));
    return !(typeof s !== t(2613) || s === null || t(1279) in s && (s == null ? void 0 : s[t(1279)]) !== t(2856) || !s[t(1020)] || x && s[t(1020)] !== x);
  } catch {
    return !1;
  }
}
function ii(i, x) {
  const t = a;
  return !!((x === "v4" || !x) && Qn[t(700)](i) || (x === "v6" || !x) && Yn[t(700)](i));
}
class we extends C0 {
  [a(1605)](x) {
    const t = a;
    if (this[t(2587)].coerce && (x[t(782)] = String(x[t(782)])), this[t(694)](x) !== a0.string) {
      const n = this._getOrReturnCtx(x);
      return X(n, { code: B[t(1354)], expected: a0[t(1019)], received: n[t(881)] }), h0;
    }
    const e = new ee();
    let s;
    for (const n of this[t(2587)][t(365)])
      if (n[t(2194)] === "min") x[t(782)].length < n[t(2380)] && (s = this[t(513)](x, s), X(s, { code: B[t(2044)], minimum: n[t(2380)], type: t(1019), inclusive: !0, exact: !1, message: n[t(2851)] }), e.dirty());
      else if (n.kind === t(1663)) x.data[t(1667)] > n[t(2380)] && (s = this[t(513)](x, s), X(s, { code: B[t(2015)], maximum: n[t(2380)], type: t(1019), inclusive: !0, exact: !1, message: n[t(2851)] }), e[t(802)]());
      else if (n[t(2194)] === "length") {
        const o = x[t(782)][t(1667)] > n[t(2380)], c = x.data[t(1667)] < n.value;
        (o || c) && (s = this[t(513)](x, s), o ? X(s, { code: B[t(2015)], maximum: n[t(2380)], type: t(1019), inclusive: !0, exact: !0, message: n[t(2851)] }) : c && X(s, { code: B[t(2044)], minimum: n[t(2380)], type: t(1019), inclusive: !0, exact: !0, message: n[t(2851)] }), e.dirty());
      } else if (n[t(2194)] === t(1916)) !Kn.test(x[t(782)]) && (s = this[t(513)](x, s), X(s, { validation: t(1916), code: B[t(525)], message: n[t(2851)] }), e[t(802)]());
      else if (n[t(2194)] === t(1632)) !$x && ($x = new RegExp(Gn, "u")), !$x[t(700)](x.data) && (s = this[t(513)](x, s), X(s, { validation: t(1632), code: B[t(525)], message: n[t(2851)] }), e[t(802)]());
      else if (n[t(2194)] === t(1476)) !Vn.test(x[t(782)]) && (s = this._getOrReturnCtx(x, s), X(s, { validation: t(1476), code: B[t(525)], message: n[t(2851)] }), e.dirty());
      else if (n.kind === t(729)) !Zn.test(x[t(782)]) && (s = this[t(513)](x, s), X(s, { validation: "nanoid", code: B.invalid_string, message: n[t(2851)] }), e[t(802)]());
      else if (n[t(2194)] === t(1256)) !Hn[t(700)](x[t(782)]) && (s = this[t(513)](x, s), X(s, { validation: t(1256), code: B[t(525)], message: n[t(2851)] }), e.dirty());
      else if (n[t(2194)] === t(2459)) !zn.test(x.data) && (s = this._getOrReturnCtx(x, s), X(s, { validation: "cuid2", code: B[t(525)], message: n[t(2851)] }), e[t(802)]());
      else if (n.kind === t(773)) !Un[t(700)](x[t(782)]) && (s = this._getOrReturnCtx(x, s), X(s, { validation: "ulid", code: B.invalid_string, message: n[t(2851)] }), e[t(802)]());
      else if (n[t(2194)] === t(2361)) try {
        new URL(x[t(782)]);
      } catch {
        s = this[t(513)](x, s), X(s, { validation: t(2361), code: B[t(525)], message: n.message }), e[t(802)]();
      }
      else
        n[t(2194)] === "regex" ? (n.regex[t(2643)] = 0, !n[t(1173)].test(x[t(782)]) && (s = this[t(513)](x, s), X(s, { validation: "regex", code: B.invalid_string, message: n.message }), e[t(802)]())) : n[t(2194)] === t(2374) ? x[t(782)] = x[t(782)][t(2374)]() : n[t(2194)] === t(1721) ? !x.data[t(1721)](n[t(2380)], n[t(1257)]) && (s = this[t(513)](x, s), X(s, { code: B[t(525)], validation: { includes: n[t(2380)], position: n[t(1257)] }, message: n[t(2851)] }), e[t(802)]()) : n[t(2194)] === t(498) ? x[t(782)] = x.data[t(498)]() : n.kind === t(394) ? x[t(782)] = x[t(782)][t(394)]() : n[t(2194)] === t(2839) ? !x.data[t(2839)](n[t(2380)]) && (s = this[t(513)](x, s), X(s, { code: B.invalid_string, validation: { startsWith: n[t(2380)] }, message: n[t(2851)] }), e[t(802)]()) : n[t(2194)] === t(2335) ? !x[t(782)].endsWith(n[t(2380)]) && (s = this[t(513)](x, s), X(s, { code: B.invalid_string, validation: { endsWith: n[t(2380)] }, message: n[t(2851)] }), e[t(802)]()) : n[t(2194)] === t(1425) ? !ri(n)[t(700)](x[t(782)]) && (s = this[t(513)](x, s), X(s, { code: B[t(525)], validation: t(1425), message: n[t(2851)] }), e.dirty()) : n[t(2194)] === t(1401) ? !ti[t(700)](x.data) && (s = this[t(513)](x, s), X(s, { code: B[t(525)], validation: t(1401), message: n[t(2851)] }), e[t(802)]()) : n.kind === "time" ? !ai(n)[t(700)](x[t(782)]) && (s = this[t(513)](x, s), X(s, { code: B[t(525)], validation: "time", message: n[t(2851)] }), e[t(802)]()) : n.kind === t(1471) ? !Wn[t(700)](x[t(782)]) && (s = this[t(513)](x, s), X(s, { validation: t(1471), code: B.invalid_string, message: n[t(2851)] }), e[t(802)]()) : n[t(2194)] === "ip" ? !si(x[t(782)], n[t(1416)]) && (s = this[t(513)](x, s), X(s, { validation: "ip", code: B.invalid_string, message: n.message }), e[t(802)]()) : n[t(2194)] === t(2013) ? !ni(x.data, n[t(1020)]) && (s = this._getOrReturnCtx(x, s), X(s, { validation: "jwt", code: B[t(525)], message: n.message }), e[t(802)]()) : n[t(2194)] === "cidr" ? !ii(x[t(782)], n[t(1416)]) && (s = this[t(513)](x, s), X(s, { validation: t(1344), code: B[t(525)], message: n[t(2851)] }), e[t(802)]()) : n[t(2194)] === "base64" ? !ei.test(x[t(782)]) && (s = this[t(513)](x, s), X(s, { validation: t(1589), code: B[t(525)], message: n[t(2851)] }), e.dirty()) : n.kind === t(1562) ? !xi[t(700)](x[t(782)]) && (s = this[t(513)](x, s), X(s, { validation: t(1562), code: B[t(525)], message: n.message }), e[t(802)]()) : q0.assertNever(n);
    return { status: e[t(2380)], value: x[t(782)] };
  }
  [a(1153)](x, t, r) {
    const e = a;
    return this.refinement((s) => x[e(700)](s), { validation: t, code: B[e(525)], ...r0[e(1720)](r) });
  }
  [a(1147)](x) {
    const t = a;
    return new we({ ...this[t(2587)], checks: [...this[t(2587)].checks, x] });
  }
  [a(1916)](x) {
    const t = a;
    return this[t(1147)]({ kind: t(1916), ...r0[t(1720)](x) });
  }
  [a(2361)](x) {
    const t = a;
    return this[t(1147)]({ kind: t(2361), ...r0[t(1720)](x) });
  }
  emoji(x) {
    const t = a;
    return this._addCheck({ kind: t(1632), ...r0.errToObj(x) });
  }
  [a(1476)](x) {
    const t = a;
    return this._addCheck({ kind: t(1476), ...r0[t(1720)](x) });
  }
  [a(729)](x) {
    const t = a;
    return this[t(1147)]({ kind: t(729), ...r0[t(1720)](x) });
  }
  cuid(x) {
    const t = a;
    return this[t(1147)]({ kind: t(1256), ...r0[t(1720)](x) });
  }
  [a(2459)](x) {
    const t = a;
    return this._addCheck({ kind: t(2459), ...r0[t(1720)](x) });
  }
  [a(773)](x) {
    const t = a;
    return this[t(1147)]({ kind: t(773), ...r0[t(1720)](x) });
  }
  [a(1589)](x) {
    const t = a;
    return this[t(1147)]({ kind: t(1589), ...r0[t(1720)](x) });
  }
  base64url(x) {
    const t = a;
    return this[t(1147)]({ kind: t(1562), ...r0.errToObj(x) });
  }
  [a(2013)](x) {
    const t = a;
    return this._addCheck({ kind: t(2013), ...r0[t(1720)](x) });
  }
  ip(x) {
    const t = a;
    return this[t(1147)]({ kind: "ip", ...r0[t(1720)](x) });
  }
  [a(1344)](x) {
    const t = a;
    return this._addCheck({ kind: "cidr", ...r0[t(1720)](x) });
  }
  [a(1425)](x) {
    const t = a;
    return typeof x === t(1019) ? this[t(1147)]({ kind: t(1425), precision: null, offset: !1, local: !1, message: x }) : this[t(1147)]({ kind: "datetime", precision: typeof (x == null ? void 0 : x[t(1811)]) === t(1714) ? null : x == null ? void 0 : x.precision, offset: (x == null ? void 0 : x[t(1490)]) ?? !1, local: (x == null ? void 0 : x[t(1890)]) ?? !1, ...r0.errToObj(x == null ? void 0 : x.message) });
  }
  [a(1401)](x) {
    const t = a;
    return this[t(1147)]({ kind: t(1401), message: x });
  }
  [a(373)](x) {
    const t = a;
    return typeof x === t(1019) ? this[t(1147)]({ kind: t(373), precision: null, message: x }) : this[t(1147)]({ kind: t(373), precision: typeof (x == null ? void 0 : x[t(1811)]) > "u" ? null : x == null ? void 0 : x.precision, ...r0[t(1720)](x == null ? void 0 : x.message) });
  }
  duration(x) {
    const t = a;
    return this[t(1147)]({ kind: t(1471), ...r0.errToObj(x) });
  }
  [a(1173)](x, t) {
    const r = a;
    return this._addCheck({ kind: r(1173), regex: x, ...r0[r(1720)](t) });
  }
  [a(1721)](x, t) {
    const r = a;
    return this[r(1147)]({ kind: r(1721), value: x, position: t == null ? void 0 : t[r(1257)], ...r0[r(1720)](t == null ? void 0 : t[r(2851)]) });
  }
  [a(2839)](x, t) {
    const r = a;
    return this[r(1147)]({ kind: "startsWith", value: x, ...r0[r(1720)](t) });
  }
  [a(2335)](x, t) {
    const r = a;
    return this[r(1147)]({ kind: r(2335), value: x, ...r0.errToObj(t) });
  }
  [a(1807)](x, t) {
    const r = a;
    return this[r(1147)]({ kind: r(1807), value: x, ...r0[r(1720)](t) });
  }
  [a(1663)](x, t) {
    const r = a;
    return this[r(1147)]({ kind: r(1663), value: x, ...r0[r(1720)](t) });
  }
  [a(1667)](x, t) {
    const r = a;
    return this[r(1147)]({ kind: r(1667), value: x, ...r0[r(1720)](t) });
  }
  [a(2875)](x) {
    return this[a(1807)](1, r0.errToObj(x));
  }
  trim() {
    const x = a;
    return new we({ ...this[x(2587)], checks: [...this[x(2587)][x(365)], { kind: "trim" }] });
  }
  [a(498)]() {
    const x = a;
    return new we({ ...this._def, checks: [...this[x(2587)][x(365)], { kind: "toLowerCase" }] });
  }
  [a(394)]() {
    const x = a;
    return new we({ ...this[x(2587)], checks: [...this[x(2587)][x(365)], { kind: x(394) }] });
  }
  get [a(2689)]() {
    const x = a;
    return !!this._def[x(365)][x(2408)]((t) => t[x(2194)] === x(1425));
  }
  get [a(2564)]() {
    const x = a;
    return !!this[x(2587)][x(365)].find((t) => t[x(2194)] === x(1401));
  }
  get isTime() {
    const x = a;
    return !!this[x(2587)][x(365)][x(2408)]((t) => t[x(2194)] === "time");
  }
  get [a(1280)]() {
    const x = a;
    return !!this._def[x(365)].find((t) => t[x(2194)] === x(1471));
  }
  get [a(1342)]() {
    const x = a;
    return !!this._def[x(365)][x(2408)]((t) => t.kind === "email");
  }
  get [a(2949)]() {
    const x = a;
    return !!this[x(2587)][x(365)][x(2408)]((t) => t[x(2194)] === x(2361));
  }
  get isEmoji() {
    const x = a;
    return !!this[x(2587)][x(365)].find((t) => t[x(2194)] === "emoji");
  }
  get isUUID() {
    const x = a;
    return !!this[x(2587)][x(365)].find((t) => t[x(2194)] === "uuid");
  }
  get [a(499)]() {
    const x = a;
    return !!this[x(2587)][x(365)].find((t) => t[x(2194)] === x(729));
  }
  get [a(697)]() {
    const x = a;
    return !!this[x(2587)][x(365)].find((t) => t.kind === x(1256));
  }
  get isCUID2() {
    const x = a;
    return !!this[x(2587)][x(365)][x(2408)]((t) => t.kind === "cuid2");
  }
  get isULID() {
    const x = a;
    return !!this._def[x(365)][x(2408)]((t) => t[x(2194)] === "ulid");
  }
  get [a(2873)]() {
    return !!this._def.checks.find((x) => x.kind === "ip");
  }
  get [a(1646)]() {
    const x = a;
    return !!this[x(2587)][x(365)].find((t) => t[x(2194)] === "cidr");
  }
  get [a(2355)]() {
    const x = a;
    return !!this._def[x(365)][x(2408)]((t) => t[x(2194)] === "base64");
  }
  get [a(2950)]() {
    const x = a;
    return !!this[x(2587)][x(365)][x(2408)]((t) => t[x(2194)] === x(1562));
  }
  get minLength() {
    const x = a;
    let t = null;
    for (const r of this._def[x(365)])
      r.kind === x(1807) && (t === null || r.value > t) && (t = r[x(2380)]);
    return t;
  }
  get maxLength() {
    const x = a;
    let t = null;
    for (const r of this[x(2587)][x(365)])
      r[x(2194)] === "max" && (t === null || r[x(2380)] < t) && (t = r[x(2380)]);
    return t;
  }
}
we[a(1186)] = (i) => {
  const x = a;
  return new we({ checks: [], typeName: p0[x(352)], coerce: (i == null ? void 0 : i.coerce) ?? !1, ...v0(i) });
};
function oi(i, x) {
  const t = a, r = (i[t(1977)]()[t(1160)](".")[1] || "").length, e = (x[t(1977)]()[t(1160)](".")[1] || "")[t(1667)], s = r > e ? r : e, n = Number.parseInt(i[t(1383)](s)[t(340)](".", "")), o = Number[t(2838)](x.toFixed(s)[t(340)](".", ""));
  return n % o / 10 ** s;
}
class Ze extends C0 {
  constructor() {
    const x = a;
    super(...arguments), this[x(1807)] = this[x(1493)], this[x(1663)] = this[x(2660)], this[x(1212)] = this.multipleOf;
  }
  _parse(x) {
    const t = a;
    if (this[t(2587)].coerce && (x[t(782)] = Number(x.data)), this[t(694)](x) !== a0.number) {
      const n = this._getOrReturnCtx(x);
      return X(n, { code: B[t(1354)], expected: a0[t(329)], received: n[t(881)] }), h0;
    }
    let e;
    const s = new ee();
    for (const n of this._def[t(365)])
      n[t(2194)] === t(2836) ? !q0[t(618)](x[t(782)]) && (e = this[t(513)](x, e), X(e, { code: B[t(1354)], expected: "integer", received: t(1923), message: n.message }), s[t(802)]()) : n.kind === "min" ? (n[t(1143)] ? x[t(782)] < n.value : x.data <= n.value) && (e = this[t(513)](x, e), X(e, { code: B[t(2044)], minimum: n.value, type: t(329), inclusive: n[t(1143)], exact: !1, message: n[t(2851)] }), s[t(802)]()) : n[t(2194)] === t(1663) ? (n[t(1143)] ? x[t(782)] > n[t(2380)] : x.data >= n[t(2380)]) && (e = this[t(513)](x, e), X(e, { code: B[t(2015)], maximum: n[t(2380)], type: "number", inclusive: n[t(1143)], exact: !1, message: n[t(2851)] }), s[t(802)]()) : n[t(2194)] === t(1847) ? oi(x[t(782)], n[t(2380)]) !== 0 && (e = this[t(513)](x, e), X(e, { code: B.not_multiple_of, multipleOf: n[t(2380)], message: n.message }), s[t(802)]()) : n[t(2194)] === t(1450) ? !Number[t(2895)](x[t(782)]) && (e = this[t(513)](x, e), X(e, { code: B[t(2027)], message: n[t(2851)] }), s.dirty()) : q0[t(309)](n);
    return { status: s.value, value: x.data };
  }
  [a(1493)](x, t) {
    const r = a;
    return this[r(804)]("min", x, !0, r0[r(1977)](t));
  }
  gt(x, t) {
    const r = a;
    return this[r(804)](r(1807), x, !1, r0[r(1977)](t));
  }
  [a(2660)](x, t) {
    const r = a;
    return this[r(804)]("max", x, !0, r0[r(1977)](t));
  }
  lt(x, t) {
    const r = a;
    return this[r(804)](r(1663), x, !1, r0[r(1977)](t));
  }
  [a(804)](x, t, r, e) {
    const s = a;
    return new Ze({ ...this[s(2587)], checks: [...this[s(2587)].checks, { kind: x, value: t, inclusive: r, message: r0[s(1977)](e) }] });
  }
  _addCheck(x) {
    const t = a;
    return new Ze({ ...this[t(2587)], checks: [...this[t(2587)].checks, x] });
  }
  [a(2836)](x) {
    const t = a;
    return this[t(1147)]({ kind: "int", message: r0[t(1977)](x) });
  }
  positive(x) {
    const t = a;
    return this[t(1147)]({ kind: t(1807), value: 0, inclusive: !1, message: r0.toString(x) });
  }
  negative(x) {
    const t = a;
    return this._addCheck({ kind: t(1663), value: 0, inclusive: !1, message: r0[t(1977)](x) });
  }
  [a(391)](x) {
    const t = a;
    return this._addCheck({ kind: "max", value: 0, inclusive: !0, message: r0[t(1977)](x) });
  }
  nonnegative(x) {
    const t = a;
    return this[t(1147)]({ kind: t(1807), value: 0, inclusive: !0, message: r0[t(1977)](x) });
  }
  [a(1847)](x, t) {
    const r = a;
    return this[r(1147)]({ kind: "multipleOf", value: x, message: r0[r(1977)](t) });
  }
  [a(1450)](x) {
    const t = a;
    return this[t(1147)]({ kind: t(1450), message: r0.toString(x) });
  }
  [a(1231)](x) {
    const t = a;
    return this._addCheck({ kind: "min", inclusive: !0, value: Number[t(2443)], message: r0[t(1977)](x) })._addCheck({ kind: t(1663), inclusive: !0, value: Number[t(270)], message: r0[t(1977)](x) });
  }
  get minValue() {
    const x = a;
    let t = null;
    for (const r of this._def[x(365)])
      r[x(2194)] === x(1807) && (t === null || r[x(2380)] > t) && (t = r[x(2380)]);
    return t;
  }
  get [a(1234)]() {
    const x = a;
    let t = null;
    for (const r of this[x(2587)].checks)
      r[x(2194)] === "max" && (t === null || r[x(2380)] < t) && (t = r[x(2380)]);
    return t;
  }
  get isInt() {
    const x = a;
    return !!this[x(2587)].checks[x(2408)]((t) => t[x(2194)] === x(2836) || t.kind === x(1847) && q0[x(618)](t.value));
  }
  get [a(2895)]() {
    const x = a;
    let t = null, r = null;
    for (const e of this[x(2587)][x(365)]) {
      if (e[x(2194)] === x(1450) || e[x(2194)] === x(2836) || e.kind === x(1847)) return !0;
      e[x(2194)] === x(1807) ? (r === null || e[x(2380)] > r) && (r = e.value) : e[x(2194)] === x(1663) && (t === null || e[x(2380)] < t) && (t = e[x(2380)]);
    }
    return Number.isFinite(r) && Number.isFinite(t);
  }
}
Ze[a(1186)] = (i) => {
  const x = a;
  return new Ze({ checks: [], typeName: p0[x(1295)], coerce: (i == null ? void 0 : i[x(884)]) || !1, ...v0(i) });
};
class tx extends C0 {
  constructor() {
    const x = a;
    super(...arguments), this[x(1807)] = this.gte, this[x(1663)] = this[x(2660)];
  }
  [a(1605)](x) {
    const t = a;
    if (this[t(2587)][t(884)]) try {
      x.data = BigInt(x[t(782)]);
    } catch {
      return this._getInvalidInput(x);
    }
    if (this[t(694)](x) !== a0[t(2428)]) return this._getInvalidInput(x);
    let e;
    const s = new ee();
    for (const n of this[t(2587)][t(365)])
      n.kind === t(1807) ? (n.inclusive ? x.data < n[t(2380)] : x[t(782)] <= n.value) && (e = this._getOrReturnCtx(x, e), X(e, { code: B[t(2044)], type: t(2428), minimum: n[t(2380)], inclusive: n[t(1143)], message: n[t(2851)] }), s.dirty()) : n.kind === t(1663) ? (n[t(1143)] ? x[t(782)] > n[t(2380)] : x[t(782)] >= n[t(2380)]) && (e = this[t(513)](x, e), X(e, { code: B[t(2015)], type: t(2428), maximum: n[t(2380)], inclusive: n[t(1143)], message: n[t(2851)] }), s[t(802)]()) : n[t(2194)] === t(1847) ? x[t(782)] % n.value !== BigInt(0) && (e = this[t(513)](x, e), X(e, { code: B.not_multiple_of, multipleOf: n[t(2380)], message: n[t(2851)] }), s[t(802)]()) : q0[t(309)](n);
    return { status: s.value, value: x[t(782)] };
  }
  [a(1316)](x) {
    const t = a, r = this[t(513)](x);
    return X(r, { code: B.invalid_type, expected: a0[t(2428)], received: r.parsedType }), h0;
  }
  gte(x, t) {
    return this[a(804)]("min", x, !0, r0.toString(t));
  }
  gt(x, t) {
    const r = a;
    return this[r(804)]("min", x, !1, r0[r(1977)](t));
  }
  [a(2660)](x, t) {
    const r = a;
    return this[r(804)](r(1663), x, !0, r0[r(1977)](t));
  }
  lt(x, t) {
    return this[a(804)]("max", x, !1, r0.toString(t));
  }
  [a(804)](x, t, r, e) {
    const s = a;
    return new tx({ ...this[s(2587)], checks: [...this._def[s(365)], { kind: x, value: t, inclusive: r, message: r0[s(1977)](e) }] });
  }
  _addCheck(x) {
    const t = a;
    return new tx({ ...this[t(2587)], checks: [...this[t(2587)][t(365)], x] });
  }
  [a(1076)](x) {
    const t = a;
    return this[t(1147)]({ kind: "min", value: BigInt(0), inclusive: !1, message: r0[t(1977)](x) });
  }
  negative(x) {
    const t = a;
    return this[t(1147)]({ kind: t(1663), value: BigInt(0), inclusive: !1, message: r0[t(1977)](x) });
  }
  nonpositive(x) {
    return this[a(1147)]({ kind: "max", value: BigInt(0), inclusive: !0, message: r0.toString(x) });
  }
  [a(1124)](x) {
    const t = a;
    return this[t(1147)]({ kind: t(1807), value: BigInt(0), inclusive: !0, message: r0.toString(x) });
  }
  [a(1847)](x, t) {
    const r = a;
    return this[r(1147)]({ kind: r(1847), value: x, message: r0.toString(t) });
  }
  get minValue() {
    const x = a;
    let t = null;
    for (const r of this._def[x(365)])
      r[x(2194)] === "min" && (t === null || r[x(2380)] > t) && (t = r[x(2380)]);
    return t;
  }
  get [a(1234)]() {
    const x = a;
    let t = null;
    for (const r of this[x(2587)][x(365)])
      r.kind === x(1663) && (t === null || r[x(2380)] < t) && (t = r[x(2380)]);
    return t;
  }
}
tx.create = (i) => {
  const x = a;
  return new tx({ checks: [], typeName: p0.ZodBigInt, coerce: (i == null ? void 0 : i[x(884)]) ?? !1, ...v0(i) });
};
class zt extends C0 {
  [a(1605)](x) {
    const t = a;
    if (this[t(2587)].coerce && (x[t(782)] = !!x[t(782)]), this[t(694)](x) !== a0[t(1459)]) {
      const e = this[t(513)](x);
      return X(e, { code: B[t(1354)], expected: a0[t(1459)], received: e.parsedType }), h0;
    }
    return ae(x[t(782)]);
  }
}
zt[a(1186)] = (i) => {
  const x = a;
  return new zt({ typeName: p0[x(2010)], coerce: (i == null ? void 0 : i[x(884)]) || !1, ...v0(i) });
};
class yx extends C0 {
  [a(1605)](x) {
    const t = a;
    if (this[t(2587)][t(884)] && (x[t(782)] = new Date(x.data)), this._getType(x) !== a0[t(1401)]) {
      const n = this[t(513)](x);
      return X(n, { code: B[t(1354)], expected: a0[t(1401)], received: n[t(881)] }), h0;
    }
    if (Number[t(685)](x.data[t(1856)]())) {
      const n = this[t(513)](x);
      return X(n, { code: B.invalid_date }), h0;
    }
    const e = new ee();
    let s;
    for (const n of this[t(2587)][t(365)])
      n[t(2194)] === "min" ? x[t(782)][t(1856)]() < n[t(2380)] && (s = this[t(513)](x, s), X(s, { code: B[t(2044)], message: n[t(2851)], inclusive: !0, exact: !1, minimum: n[t(2380)], type: t(1401) }), e[t(802)]()) : n[t(2194)] === t(1663) ? x[t(782)][t(1856)]() > n[t(2380)] && (s = this._getOrReturnCtx(x, s), X(s, { code: B[t(2015)], message: n[t(2851)], inclusive: !0, exact: !1, maximum: n[t(2380)], type: t(1401) }), e[t(802)]()) : q0[t(309)](n);
    return { status: e[t(2380)], value: new Date(x.data[t(1856)]()) };
  }
  [a(1147)](x) {
    const t = a;
    return new yx({ ...this._def, checks: [...this._def[t(365)], x] });
  }
  [a(1807)](x, t) {
    const r = a;
    return this[r(1147)]({ kind: r(1807), value: x[r(1856)](), message: r0[r(1977)](t) });
  }
  max(x, t) {
    const r = a;
    return this[r(1147)]({ kind: r(1663), value: x.getTime(), message: r0[r(1977)](t) });
  }
  get [a(2148)]() {
    const x = a;
    let t = null;
    for (const r of this[x(2587)][x(365)])
      r.kind === x(1807) && (t === null || r[x(2380)] > t) && (t = r[x(2380)]);
    return t != null ? new Date(t) : null;
  }
  get [a(996)]() {
    const x = a;
    let t = null;
    for (const r of this[x(2587)][x(365)])
      r.kind === "max" && (t === null || r[x(2380)] < t) && (t = r[x(2380)]);
    return t != null ? new Date(t) : null;
  }
}
yx[a(1186)] = (i) => {
  const x = a;
  return new yx({ checks: [], coerce: (i == null ? void 0 : i[x(884)]) || !1, typeName: p0.ZodDate, ...v0(i) });
};
class Aa extends C0 {
  [a(1605)](x) {
    const t = a;
    if (this[t(694)](x) !== a0[t(2020)]) {
      const e = this._getOrReturnCtx(x);
      return X(e, { code: B[t(1354)], expected: a0[t(2020)], received: e[t(881)] }), h0;
    }
    return ae(x[t(782)]);
  }
}
Aa[a(1186)] = (i) => {
  const x = a;
  return new Aa({ typeName: p0[x(1814)], ...v0(i) });
};
class Ut extends C0 {
  _parse(x) {
    const t = a;
    if (this[t(694)](x) !== a0.undefined) {
      const e = this._getOrReturnCtx(x);
      return X(e, { code: B.invalid_type, expected: a0[t(1714)], received: e.parsedType }), h0;
    }
    return ae(x[t(782)]);
  }
}
Ut[a(1186)] = (i) => new Ut({ typeName: p0.ZodUndefined, ...v0(i) });
class Vt extends C0 {
  [a(1605)](x) {
    const t = a;
    if (this[t(694)](x) !== a0[t(1399)]) {
      const e = this._getOrReturnCtx(x);
      return X(e, { code: B.invalid_type, expected: a0.null, received: e[t(881)] }), h0;
    }
    return ae(x.data);
  }
}
Vt[a(1186)] = (i) => {
  const x = a;
  return new Vt({ typeName: p0[x(1010)], ...v0(i) });
};
class ax extends C0 {
  constructor() {
    const x = a;
    super(...arguments), this[x(2582)] = !0;
  }
  [a(1605)](x) {
    return ae(x[a(782)]);
  }
}
ax[a(1186)] = (i) => {
  const x = a;
  return new ax({ typeName: p0[x(1743)], ...v0(i) });
};
class Zt extends C0 {
  constructor() {
    const x = a;
    super(...arguments), this[x(1925)] = !0;
  }
  _parse(x) {
    return ae(x[a(782)]);
  }
}
Zt[a(1186)] = (i) => new Zt({ typeName: p0.ZodUnknown, ...v0(i) });
class Ce extends C0 {
  _parse(x) {
    const t = a, r = this[t(513)](x);
    return X(r, { code: B[t(1354)], expected: a0.never, received: r.parsedType }), h0;
  }
}
Ce.create = (i) => {
  const x = a;
  return new Ce({ typeName: p0[x(2300)], ...v0(i) });
};
class Bt extends C0 {
  [a(1605)](x) {
    const t = a;
    if (this[t(694)](x) !== a0[t(1714)]) {
      const e = this[t(513)](x);
      return X(e, { code: B.invalid_type, expected: a0[t(2416)], received: e[t(881)] }), h0;
    }
    return ae(x[t(782)]);
  }
}
Bt[a(1186)] = (i) => new Bt({ typeName: p0.ZodVoid, ...v0(i) });
class pe extends C0 {
  [a(1605)](x) {
    const t = a, { ctx: r, status: e } = this[t(1426)](x), s = this[t(2587)];
    if (r[t(881)] !== a0[t(2455)]) return X(r, { code: B.invalid_type, expected: a0.array, received: r[t(881)] }), h0;
    if (s.exactLength !== null) {
      const o = r.data[t(1667)] > s[t(867)].value, c = r[t(782)][t(1667)] < s[t(867)][t(2380)];
      (o || c) && (X(r, { code: o ? B[t(2015)] : B.too_small, minimum: c ? s[t(867)].value : void 0, maximum: o ? s.exactLength[t(2380)] : void 0, type: t(2455), inclusive: !0, exact: !0, message: s.exactLength[t(2851)] }), e.dirty());
    }
    if (s[t(2425)] !== null && r.data[t(1667)] < s[t(2425)][t(2380)] && (X(r, { code: B[t(2044)], minimum: s[t(2425)][t(2380)], type: t(2455), inclusive: !0, exact: !1, message: s[t(2425)][t(2851)] }), e.dirty()), s[t(2540)] !== null && r.data[t(1667)] > s[t(2540)][t(2380)] && (X(r, { code: B[t(2015)], maximum: s[t(2540)].value, type: t(2455), inclusive: !0, exact: !1, message: s[t(2540)][t(2851)] }), e[t(802)]()), r[t(2121)][t(2780)]) return Promise[t(1849)]([...r[t(782)]].map((o, c) => {
      const u = t;
      return s[u(1436)][u(2832)](new me(r, o, r[u(2711)], c));
    }))[t(654)]((o) => ee[t(1635)](e, o));
    const n = [...r[t(782)]][t(1753)]((o, c) => {
      const u = t;
      return s.type[u(1509)](new me(r, o, r[u(2711)], c));
    });
    return ee[t(1635)](e, n);
  }
  get [a(948)]() {
    const x = a;
    return this[x(2587)][x(1436)];
  }
  [a(1807)](x, t) {
    const r = a;
    return new pe({ ...this[r(2587)], minLength: { value: x, message: r0[r(1977)](t) } });
  }
  [a(1663)](x, t) {
    const r = a;
    return new pe({ ...this._def, maxLength: { value: x, message: r0[r(1977)](t) } });
  }
  [a(1667)](x, t) {
    const r = a;
    return new pe({ ...this[r(2587)], exactLength: { value: x, message: r0[r(1977)](t) } });
  }
  [a(2875)](x) {
    return this[a(1807)](1, x);
  }
}
pe[a(1186)] = (i, x) => {
  const t = a;
  return new pe({ type: i, minLength: null, maxLength: null, exactLength: null, typeName: p0[t(1568)], ...v0(x) });
};
function ze(i) {
  const x = a;
  if (i instanceof W0) {
    const t = {};
    for (const r in i[x(308)]) {
      const e = i[x(308)][r];
      t[r] = Se[x(1186)](ze(e));
    }
    return new W0({ ...i[x(2587)], shape: () => t });
  } else
    return i instanceof pe ? new pe({ ...i[x(2587)], type: ze(i.element) }) : i instanceof Se ? Se[x(1186)](ze(i[x(1664)]())) : i instanceof je ? je[x(1186)](ze(i[x(1664)]())) : i instanceof Oe ? Oe[x(1186)](i[x(1917)][x(1753)]((t) => ze(t))) : i;
}
class W0 extends C0 {
  constructor() {
    const x = a;
    super(...arguments), this._cached = null, this[x(1508)] = this[x(2526)], this[x(2238)] = this[x(1469)];
  }
  [a(242)]() {
    const x = a;
    if (this[x(514)] !== null) return this._cached;
    const t = this[x(2587)][x(308)](), r = q0.objectKeys(t);
    return this._cached = { shape: t, keys: r }, this[x(514)];
  }
  [a(1605)](x) {
    const t = a;
    if (this[t(694)](x) !== a0[t(2613)]) {
      const d = this[t(513)](x);
      return X(d, { code: B[t(1354)], expected: a0[t(2613)], received: d[t(881)] }), h0;
    }
    const { status: e, ctx: s } = this._processInputParams(x), { shape: n, keys: o } = this._getCached(), c = [];
    if (!(this[t(2587)][t(2309)] instanceof Ce && this._def[t(2577)] === "strip")) for (const d in s[t(782)])
      !o.includes(d) && c[t(528)](d);
    const u = [];
    for (const d of o) {
      const l = n[d], f = s[t(782)][d];
      u[t(528)]({ key: { status: t(1268), value: d }, value: l[t(1605)](new me(s, f, s.path, d)), alwaysSet: d in s[t(782)] });
    }
    if (this[t(2587)].catchall instanceof Ce) {
      const d = this._def[t(2577)];
      if (d === t(2526)) for (const l of c)
        u[t(528)]({ key: { status: t(1268), value: l }, value: { status: t(1268), value: s[t(782)][l] } });
      else if (d === t(763)) c[t(1667)] > 0 && (X(s, { code: B[t(2488)], keys: c }), e[t(802)]());
      else if (d !== t(1559)) throw new Error(t(2768));
    } else {
      const d = this[t(2587)][t(2309)];
      for (const l of c) {
        const f = s[t(782)][l];
        u[t(528)]({ key: { status: "valid", value: l }, value: d[t(1605)](new me(s, f, s[t(2711)], l)), alwaysSet: l in s[t(782)] });
      }
    }
    return s[t(2121)].async ? Promise[t(2345)]()[t(654)](async () => {
      const d = t, l = [];
      for (const f of u) {
        const b = await f[d(2182)], h = await f[d(2380)];
        l[d(528)]({ key: b, value: h, alwaysSet: f.alwaysSet });
      }
      return l;
    })[t(654)]((d) => ee.mergeObjectSync(e, d)) : ee.mergeObjectSync(e, u);
  }
  get [a(308)]() {
    const x = a;
    return this._def[x(308)]();
  }
  [a(763)](x) {
    const t = a;
    return r0[t(1720)], new W0({ ...this[t(2587)], unknownKeys: t(763), ...x !== void 0 ? { errorMap: (r, e) => {
      var o, c;
      const s = t, n = ((c = (o = this[s(2587)])[s(1911)]) == null ? void 0 : c.call(o, r, e)[s(2851)]) ?? e[s(382)];
      return r.code === s(2488) ? { message: r0[s(1720)](x)[s(2851)] ?? n } : { message: n };
    } } : {} });
  }
  strip() {
    const x = a;
    return new W0({ ...this[x(2587)], unknownKeys: x(1559) });
  }
  [a(2526)]() {
    const x = a;
    return new W0({ ...this[x(2587)], unknownKeys: x(2526) });
  }
  [a(1469)](x) {
    const t = a;
    return new W0({ ...this[t(2587)], shape: () => ({ ...this[t(2587)].shape(), ...x }) });
  }
  [a(2865)](x) {
    const t = a;
    return new W0({ unknownKeys: x[t(2587)][t(2577)], catchall: x._def[t(2309)], shape: () => ({ ...this[t(2587)][t(308)](), ...x._def[t(308)]() }), typeName: p0[t(1630)] });
  }
  [a(1873)](x, t) {
    return this[a(2238)]({ [x]: t });
  }
  catchall(x) {
    const t = a;
    return new W0({ ...this[t(2587)], catchall: x });
  }
  [a(620)](x) {
    const t = a, r = {};
    for (const e of q0.objectKeys(x))
      x[e] && this.shape[e] && (r[e] = this[t(308)][e]);
    return new W0({ ...this[t(2587)], shape: () => r });
  }
  omit(x) {
    const t = a, r = {};
    for (const e of q0[t(1155)](this[t(308)]))
      !x[e] && (r[e] = this[t(308)][e]);
    return new W0({ ...this[t(2587)], shape: () => r });
  }
  [a(420)]() {
    return ze(this);
  }
  [a(1086)](x) {
    const t = a, r = {};
    for (const e of q0[t(1155)](this[t(308)])) {
      const s = this.shape[e];
      x && !x[e] ? r[e] = s : r[e] = s[t(1195)]();
    }
    return new W0({ ...this._def, shape: () => r });
  }
  [a(2477)](x) {
    const t = a, r = {};
    for (const e of q0.objectKeys(this[t(308)]))
      if (x && !x[e]) r[e] = this.shape[e];
      else {
        let n = this[t(308)][e];
        for (; n instanceof Se; )
          n = n[t(2587)][t(2560)];
        r[e] = n;
      }
    return new W0({ ...this[t(2587)], shape: () => r });
  }
  [a(356)]() {
    const x = a;
    return js(q0[x(1155)](this[x(308)]));
  }
}
W0[a(1186)] = (i, x) => {
  const t = a;
  return new W0({ shape: () => i, unknownKeys: "strip", catchall: Ce[t(1186)](), typeName: p0[t(1630)], ...v0(x) });
}, W0[a(1453)] = (i, x) => {
  const t = a;
  return new W0({ shape: () => i, unknownKeys: t(763), catchall: Ce[t(1186)](), typeName: p0[t(1630)], ...v0(x) });
}, W0[a(2162)] = (i, x) => {
  const t = a;
  return new W0({ shape: i, unknownKeys: t(1559), catchall: Ce.create(), typeName: p0.ZodObject, ...v0(x) });
};
class vx extends C0 {
  _parse(x) {
    const t = a, { ctx: r } = this._processInputParams(x), e = this._def[t(891)];
    function s(n) {
      const o = t;
      for (const u of n)
        if (u[o(1435)][o(333)] === "valid") return u[o(1435)];
      for (const u of n)
        if (u[o(1435)][o(333)] === o(802)) return r[o(2121)][o(719)][o(528)](...u[o(1572)][o(2121)].issues), u[o(1435)];
      const c = n[o(1753)]((u) => new Pe(u[o(1572)][o(2121)].issues));
      return X(r, { code: B.invalid_union, unionErrors: c }), h0;
    }
    if (r.common[t(2780)]) return Promise[t(1849)](e[t(1753)](async (n) => {
      const o = t, c = { ...r, common: { ...r[o(2121)], issues: [] }, parent: null };
      return { result: await n._parseAsync({ data: r.data, path: r[o(2711)], parent: c }), ctx: c };
    }))[t(654)](s);
    {
      let n;
      const o = [];
      for (const u of e) {
        const d = { ...r, common: { ...r[t(2121)], issues: [] }, parent: null }, l = u._parseSync({ data: r[t(782)], path: r[t(2711)], parent: d });
        if (l[t(333)] === t(1268)) return l;
        l[t(333)] === t(802) && !n && (n = { result: l, ctx: d }), d[t(2121)][t(719)][t(1667)] && o[t(528)](d[t(2121)][t(719)]);
      }
      if (n) return r[t(2121)][t(719)][t(528)](...n[t(1572)][t(2121)].issues), n.result;
      const c = o[t(1753)]((u) => new Pe(u));
      return X(r, { code: B[t(1975)], unionErrors: c }), h0;
    }
  }
  get options() {
    return this[a(2587)].options;
  }
}
vx[a(1186)] = (i, x) => new vx({ options: i, typeName: p0.ZodUnion, ...v0(x) });
const ye = (i) => {
  const x = a;
  return i instanceof Kt ? ye(i[x(1676)]) : i instanceof Ae ? ye(i[x(2560)]()) : i instanceof kx ? [i[x(2380)]] : i instanceof De ? i[x(891)] : i instanceof Gt ? q0[x(1227)](i[x(2103)]) : i instanceof Ix ? ye(i._def[x(2560)]) : i instanceof Ut ? [void 0] : i instanceof Vt ? [null] : i instanceof Se ? [void 0, ...ye(i[x(1664)]())] : i instanceof je ? [null, ...ye(i[x(1664)]())] : i instanceof Ms || i instanceof Rx ? ye(i[x(1664)]()) : i instanceof Ex ? ye(i._def[x(2560)]) : [];
};
class na extends C0 {
  _parse(x) {
    const t = a, { ctx: r } = this._processInputParams(x);
    if (r.parsedType !== a0[t(2613)]) return X(r, { code: B.invalid_type, expected: a0.object, received: r.parsedType }), h0;
    const e = this[t(1197)], s = r.data[e], n = this[t(2517)].get(s);
    return n ? r[t(2121)][t(2780)] ? n[t(2832)]({ data: r.data, path: r.path, parent: r }) : n[t(1509)]({ data: r[t(782)], path: r[t(2711)], parent: r }) : (X(r, { code: B[t(703)], options: Array[t(2809)](this.optionsMap[t(1400)]()), path: [e] }), h0);
  }
  get [a(1197)]() {
    const x = a;
    return this[x(2587)][x(1197)];
  }
  get options() {
    const x = a;
    return this._def[x(891)];
  }
  get optionsMap() {
    const x = a;
    return this[x(2587)][x(2517)];
  }
  static [a(1186)](x, t, r) {
    const e = a, s = /* @__PURE__ */ new Map();
    for (const n of t) {
      const o = ye(n.shape[x]);
      if (!o[e(1667)]) throw new Error(e(1528) + x + e(531));
      for (const c of o) {
        if (s.has(c)) throw new Error(e(2621) + String(x) + " has duplicate value " + String(c));
        s[e(480)](c, n);
      }
    }
    return new na({ typeName: p0[e(1384)], discriminator: x, options: t, optionsMap: s, ...v0(r) });
  }
}
function Wt(i, x) {
  const t = a, r = Ee(i), e = Ee(x);
  if (i === x) return { valid: !0, data: i };
  if (r === a0[t(2613)] && e === a0[t(2613)]) {
    const s = q0[t(1155)](x), n = q0[t(1155)](i).filter((c) => s.indexOf(c) !== -1), o = { ...i, ...x };
    for (const c of n) {
      const u = Wt(i[c], x[c]);
      if (!u[t(1268)]) return { valid: !1 };
      o[c] = u[t(782)];
    }
    return { valid: !0, data: o };
  } else if (r === a0.array && e === a0[t(2455)]) {
    if (i[t(1667)] !== x.length) return { valid: !1 };
    const s = [];
    for (let n = 0; n < i[t(1667)]; n++) {
      const o = i[n], c = x[n], u = Wt(o, c);
      if (!u[t(1268)]) return { valid: !1 };
      s[t(528)](u[t(782)]);
    }
    return { valid: !0, data: s };
  } else return r === a0[t(1401)] && e === a0[t(1401)] && +i == +x ? { valid: !0, data: i } : { valid: !1 };
}
class wx extends C0 {
  [a(1605)](x) {
    const t = a, { status: r, ctx: e } = this._processInputParams(x), s = (n, o) => {
      const c = K;
      if (Na(n) || Na(o)) return h0;
      const u = Wt(n[c(2380)], o[c(2380)]);
      return u[c(1268)] ? ((qa(n) || qa(o)) && r[c(802)](), { status: r[c(2380)], value: u[c(782)] }) : (X(e, { code: B[c(1282)] }), h0);
    };
    return e[t(2121)].async ? Promise[t(1849)]([this._def.left[t(2832)]({ data: e[t(782)], path: e[t(2711)], parent: e }), this._def[t(1908)][t(2832)]({ data: e[t(782)], path: e[t(2711)], parent: e })]).then(([n, o]) => s(n, o)) : s(this[t(2587)].left[t(1509)]({ data: e.data, path: e.path, parent: e }), this._def[t(1908)][t(1509)]({ data: e[t(782)], path: e[t(2711)], parent: e }));
  }
}
wx[a(1186)] = (i, x, t) => new wx({ left: i, right: x, typeName: p0.ZodIntersection, ...v0(t) });
class Oe extends C0 {
  [a(1605)](x) {
    const t = a, { status: r, ctx: e } = this._processInputParams(x);
    if (e.parsedType !== a0[t(2455)]) return X(e, { code: B[t(1354)], expected: a0[t(2455)], received: e[t(881)] }), h0;
    if (e[t(782)][t(1667)] < this[t(2587)].items[t(1667)]) return X(e, { code: B[t(2044)], minimum: this[t(2587)][t(1917)][t(1667)], inclusive: !0, exact: !1, type: t(2455) }), h0;
    !this[t(2587)][t(1744)] && e.data.length > this[t(2587)].items[t(1667)] && (X(e, { code: B[t(2015)], maximum: this[t(2587)].items[t(1667)], inclusive: !0, exact: !1, type: t(2455) }), r[t(802)]());
    const n = [...e.data][t(1753)]((o, c) => {
      const u = t, d = this[u(2587)][u(1917)][c] || this[u(2587)][u(1744)];
      return d ? d[u(1605)](new me(e, o, e[u(2711)], c)) : null;
    })[t(2534)]((o) => !!o);
    return e[t(2121)][t(2780)] ? Promise[t(1849)](n).then((o) => ee[t(1635)](r, o)) : ee.mergeArray(r, n);
  }
  get [a(1917)]() {
    const x = a;
    return this[x(2587)][x(1917)];
  }
  [a(1744)](x) {
    const t = a;
    return new Oe({ ...this[t(2587)], rest: x });
  }
}
Oe[a(1186)] = (i, x) => {
  const t = a;
  if (!Array.isArray(i)) throw new Error(t(1151));
  return new Oe({ items: i, typeName: p0.ZodTuple, rest: null, ...v0(x) });
};
class Sx extends C0 {
  get [a(1823)]() {
    return this._def.keyType;
  }
  get [a(454)]() {
    const x = a;
    return this[x(2587)][x(2522)];
  }
  [a(1605)](x) {
    const t = a, { status: r, ctx: e } = this[t(1426)](x);
    if (e[t(881)] !== a0.object) return X(e, { code: B[t(1354)], expected: a0[t(2613)], received: e.parsedType }), h0;
    const s = [], n = this[t(2587)][t(1830)], o = this[t(2587)][t(2522)];
    for (const c in e[t(782)])
      s[t(528)]({ key: n[t(1605)](new me(e, c, e[t(2711)], c)), value: o[t(1605)](new me(e, e[t(782)][c], e[t(2711)], c)), alwaysSet: c in e.data });
    return e[t(2121)][t(2780)] ? ee.mergeObjectAsync(r, s) : ee[t(1437)](r, s);
  }
  get [a(948)]() {
    const x = a;
    return this._def[x(2522)];
  }
  static [a(1186)](x, t, r) {
    const e = a;
    return t instanceof C0 ? new Sx({ keyType: x, valueType: t, typeName: p0[e(1615)], ...v0(r) }) : new Sx({ keyType: we[e(1186)](), valueType: x, typeName: p0[e(1615)], ...v0(t) });
  }
}
class _a extends C0 {
  get [a(1823)]() {
    const x = a;
    return this[x(2587)][x(1830)];
  }
  get [a(454)]() {
    return this[a(2587)].valueType;
  }
  _parse(x) {
    const t = a, { status: r, ctx: e } = this[t(1426)](x);
    if (e.parsedType !== a0[t(1753)]) return X(e, { code: B[t(1354)], expected: a0[t(1753)], received: e[t(881)] }), h0;
    const s = this[t(2587)][t(1830)], n = this._def[t(2522)], o = [...e.data[t(1113)]()][t(1753)](([c, u], d) => {
      const l = t;
      return { key: s[l(1605)](new me(e, c, e.path, [d, "key"])), value: n._parse(new me(e, u, e[l(2711)], [d, l(2380)])) };
    });
    if (e[t(2121)][t(2780)]) {
      const c = /* @__PURE__ */ new Map();
      return Promise.resolve()[t(654)](async () => {
        const u = t;
        for (const d of o) {
          const l = await d.key, f = await d[u(2380)];
          if (l.status === u(794) || f[u(333)] === u(794)) return h0;
          (l[u(333)] === u(802) || f[u(333)] === "dirty") && r[u(802)](), c[u(480)](l[u(2380)], f[u(2380)]);
        }
        return { status: r[u(2380)], value: c };
      });
    } else {
      const c = /* @__PURE__ */ new Map();
      for (const u of o) {
        const d = u.key, l = u[t(2380)];
        if (d[t(333)] === t(794) || l[t(333)] === "aborted") return h0;
        (d[t(333)] === t(802) || l[t(333)] === t(802)) && r[t(802)](), c[t(480)](d[t(2380)], l[t(2380)]);
      }
      return { status: r[t(2380)], value: c };
    }
  }
}
_a[a(1186)] = (i, x, t) => {
  const r = a;
  return new _a({ valueType: x, keyType: i, typeName: p0[r(388)], ...v0(t) });
};
class rx extends C0 {
  _parse(x) {
    const t = a, { status: r, ctx: e } = this._processInputParams(x);
    if (e.parsedType !== a0[t(480)]) return X(e, { code: B[t(1354)], expected: a0[t(480)], received: e[t(881)] }), h0;
    const s = this[t(2587)];
    s[t(2030)] !== null && e[t(782)][t(1933)] < s[t(2030)][t(2380)] && (X(e, { code: B[t(2044)], minimum: s[t(2030)].value, type: t(480), inclusive: !0, exact: !1, message: s[t(2030)][t(2851)] }), r[t(802)]()), s[t(271)] !== null && e[t(782)][t(1933)] > s[t(271)].value && (X(e, { code: B[t(2015)], maximum: s.maxSize[t(2380)], type: t(480), inclusive: !0, exact: !1, message: s.maxSize.message }), r[t(802)]());
    const n = this[t(2587)].valueType;
    function o(u) {
      const d = t, l = /* @__PURE__ */ new Set();
      for (const f of u) {
        if (f[d(333)] === d(794)) return h0;
        f[d(333)] === d(802) && r[d(802)](), l[d(2701)](f[d(2380)]);
      }
      return { status: r[d(2380)], value: l };
    }
    const c = [...e[t(782)][t(615)]()][t(1753)]((u, d) => n[t(1605)](new me(e, u, e[t(2711)], d)));
    return e[t(2121)][t(2780)] ? Promise[t(1849)](c)[t(654)]((u) => o(u)) : o(c);
  }
  [a(1807)](x, t) {
    const r = a;
    return new rx({ ...this[r(2587)], minSize: { value: x, message: r0[r(1977)](t) } });
  }
  [a(1663)](x, t) {
    const r = a;
    return new rx({ ...this._def, maxSize: { value: x, message: r0[r(1977)](t) } });
  }
  size(x, t) {
    return this[a(1807)](x, t).max(x, t);
  }
  [a(2875)](x) {
    return this[a(1807)](1, x);
  }
}
rx.create = (i, x) => {
  const t = a;
  return new rx({ valueType: i, minSize: null, maxSize: null, typeName: p0[t(415)], ...v0(x) });
};
class Kt extends C0 {
  get [a(1676)]() {
    const x = a;
    return this[x(2587)][x(1812)]();
  }
  [a(1605)](x) {
    const t = a, { ctx: r } = this._processInputParams(x);
    return this[t(2587)][t(1812)]()[t(1605)]({ data: r[t(782)], path: r[t(2711)], parent: r });
  }
}
Kt.create = (i, x) => new Kt({ getter: i, typeName: p0.ZodLazy, ...v0(x) });
class kx extends C0 {
  _parse(x) {
    const t = a;
    if (x[t(782)] !== this._def[t(2380)]) {
      const r = this[t(513)](x);
      return X(r, { received: r[t(782)], code: B[t(1452)], expected: this[t(2587)][t(2380)] }), h0;
    }
    return { status: t(1268), value: x[t(782)] };
  }
  get [a(2380)]() {
    const x = a;
    return this[x(2587)][x(2380)];
  }
}
kx[a(1186)] = (i, x) => {
  const t = a;
  return new kx({ value: i, typeName: p0[t(1170)], ...v0(x) });
};
function js(i, x) {
  const t = a;
  return new De({ values: i, typeName: p0[t(1175)], ...v0(x) });
}
class De extends C0 {
  [a(1605)](x) {
    const t = a;
    if (typeof x[t(782)] !== t(1019)) {
      const r = this[t(513)](x), e = this[t(2587)][t(615)];
      return X(r, { expected: q0[t(2513)](e), received: r.parsedType, code: B[t(1354)] }), h0;
    }
    if (!this[t(461)] && (this._cache = new Set(this._def.values)), !this[t(461)][t(2507)](x[t(782)])) {
      const r = this[t(513)](x), e = this._def.values;
      return X(r, { received: r[t(782)], code: B[t(2469)], options: e }), h0;
    }
    return ae(x[t(782)]);
  }
  get options() {
    return this[a(2587)].values;
  }
  get [a(2103)]() {
    const x = a, t = {};
    for (const r of this[x(2587)][x(615)])
      t[r] = r;
    return t;
  }
  get [a(330)]() {
    const x = a, t = {};
    for (const r of this._def[x(615)])
      t[r] = r;
    return t;
  }
  get [a(451)]() {
    const x = a, t = {};
    for (const r of this[x(2587)][x(615)])
      t[r] = r;
    return t;
  }
  [a(2788)](x, t = this[a(2587)]) {
    return De[a(1186)](x, { ...this._def, ...t });
  }
  [a(1154)](x, t = this[a(2587)]) {
    const r = a;
    return De.create(this[r(891)].filter((e) => !x.includes(e)), { ...this[r(2587)], ...t });
  }
}
De[a(1186)] = js;
class Gt extends C0 {
  [a(1605)](x) {
    const t = a, r = q0[t(1315)](this[t(2587)][t(615)]), e = this._getOrReturnCtx(x);
    if (e.parsedType !== a0[t(1019)] && e.parsedType !== a0[t(329)]) {
      const s = q0[t(1227)](r);
      return X(e, { expected: q0[t(2513)](s), received: e[t(881)], code: B[t(1354)] }), h0;
    }
    if (!this[t(461)] && (this._cache = new Set(q0[t(1315)](this[t(2587)][t(615)]))), !this._cache[t(2507)](x[t(782)])) {
      const s = q0.objectValues(r);
      return X(e, { received: e[t(782)], code: B.invalid_enum_value, options: s }), h0;
    }
    return ae(x[t(782)]);
  }
  get [a(2103)]() {
    const x = a;
    return this[x(2587)][x(615)];
  }
}
Gt[a(1186)] = (i, x) => {
  const t = a;
  return new Gt({ values: i, typeName: p0[t(778)], ...v0(x) });
};
class Px extends C0 {
  [a(1664)]() {
    const x = a;
    return this[x(2587)][x(1436)];
  }
  [a(1605)](x) {
    const t = a, { ctx: r } = this._processInputParams(x);
    if (r[t(881)] !== a0[t(2217)] && r[t(2121)][t(2780)] === !1) return X(r, { code: B[t(1354)], expected: a0.promise, received: r[t(881)] }), h0;
    const e = r.parsedType === a0[t(2217)] ? r[t(782)] : Promise[t(2345)](r.data);
    return ae(e[t(654)]((s) => {
      const n = t;
      return this[n(2587)][n(1436)][n(2753)](s, { path: r[n(2711)], errorMap: r[n(2121)][n(2933)] });
    }));
  }
}
Px[a(1186)] = (i, x) => {
  const t = a;
  return new Px({ type: i, typeName: p0[t(1139)], ...v0(x) });
};
class Ae extends C0 {
  [a(2560)]() {
    const x = a;
    return this[x(2587)][x(1676)];
  }
  [a(1102)]() {
    const x = a;
    return this._def[x(1676)]._def.typeName === p0[x(2679)] ? this._def[x(1676)][x(1102)]() : this[x(2587)][x(1676)];
  }
  [a(1605)](x) {
    const t = a, { status: r, ctx: e } = this[t(1426)](x), s = this._def[t(2218)] || null, n = { addIssue: (o) => {
      const c = t;
      X(e, o), o[c(1603)] ? r.abort() : r[c(802)]();
    }, get path() {
      return e[t(2711)];
    } };
    if (n.addIssue = n[t(2086)][t(1780)](n), s[t(1436)] === "preprocess") {
      const o = s.transform(e[t(782)], n);
      if (e.common[t(2780)]) return Promise[t(2345)](o)[t(654)](async (c) => {
        const u = t;
        if (r.value === u(794)) return h0;
        const d = await this[u(2587)].schema[u(2832)]({ data: c, path: e[u(2711)], parent: e });
        return d[u(333)] === u(794) ? h0 : d.status === "dirty" || r[u(2380)] === "dirty" ? Qe(d[u(2380)]) : d;
      });
      {
        if (r.value === t(794)) return h0;
        const c = this[t(2587)][t(1676)]._parseSync({ data: o, path: e[t(2711)], parent: e });
        return c[t(333)] === "aborted" ? h0 : c.status === "dirty" ? Qe(c.value) : r.value === t(802) ? Qe(c[t(2380)]) : c;
      }
    }
    if (s[t(1436)] === t(2197)) {
      const o = (c) => {
        const u = t, d = s[u(2197)](c, n);
        if (e.common.async) return Promise.resolve(d);
        if (d instanceof Promise) throw new Error(u(890));
        return c;
      };
      if (e[t(2121)].async === !1) {
        const c = this._def[t(1676)][t(1509)]({ data: e[t(782)], path: e[t(2711)], parent: e });
        return c[t(333)] === t(794) ? h0 : (c[t(333)] === t(802) && r[t(802)](), o(c[t(2380)]), { status: r[t(2380)], value: c[t(2380)] });
      } else return this[t(2587)][t(1676)][t(2832)]({ data: e.data, path: e[t(2711)], parent: e })[t(654)]((c) => {
        const u = t;
        return c.status === u(794) ? h0 : (c[u(333)] === "dirty" && r[u(802)](), o(c[u(2380)])[u(654)](() => {
          const d = u;
          return { status: r[d(2380)], value: c[d(2380)] };
        }));
      });
    }
    if (s[t(1436)] === t(2706))
      if (e[t(2121)][t(2780)] === !1) {
        const o = this[t(2587)][t(1676)][t(1509)]({ data: e[t(782)], path: e[t(2711)], parent: e });
        if (!Ve(o)) return h0;
        const c = s.transform(o[t(2380)], n);
        if (c instanceof Promise) throw new Error(t(2628));
        return { status: r[t(2380)], value: c };
      } else return this[t(2587)][t(1676)][t(2832)]({ data: e.data, path: e[t(2711)], parent: e })[t(654)]((o) => {
        const c = t;
        return Ve(o) ? Promise[c(2345)](s.transform(o[c(2380)], n))[c(654)]((u) => ({ status: r[c(2380)], value: u })) : h0;
      });
    q0[t(309)](s);
  }
}
Ae[a(1186)] = (i, x, t) => {
  const r = a;
  return new Ae({ schema: i, typeName: p0[r(2679)], effect: x, ...v0(t) });
}, Ae.createWithPreprocess = (i, x, t) => {
  const r = a;
  return new Ae({ schema: x, effect: { type: r(583), transform: i }, typeName: p0[r(2679)], ...v0(t) });
};
class Se extends C0 {
  [a(1605)](x) {
    const t = a;
    return this[t(694)](x) === a0.undefined ? ae(void 0) : this[t(2587)][t(2560)][t(1605)](x);
  }
  [a(1664)]() {
    const x = a;
    return this[x(2587)][x(2560)];
  }
}
Se[a(1186)] = (i, x) => new Se({ innerType: i, typeName: p0.ZodOptional, ...v0(x) });
class je extends C0 {
  [a(1605)](x) {
    const t = a;
    return this[t(694)](x) === a0[t(1399)] ? ae(null) : this[t(2587)][t(2560)][t(1605)](x);
  }
  [a(1664)]() {
    const x = a;
    return this[x(2587)][x(2560)];
  }
}
je[a(1186)] = (i, x) => {
  const t = a;
  return new je({ innerType: i, typeName: p0[t(2848)], ...v0(x) });
};
class Ix extends C0 {
  _parse(x) {
    const t = a, { ctx: r } = this[t(1426)](x);
    let e = r[t(782)];
    return r[t(881)] === a0.undefined && (e = this[t(2587)][t(500)]()), this._def.innerType._parse({ data: e, path: r.path, parent: r });
  }
  [a(2523)]() {
    const x = a;
    return this[x(2587)][x(2560)];
  }
}
Ix[a(1186)] = (i, x) => {
  const t = a;
  return new Ix({ innerType: i, typeName: p0[t(1049)], defaultValue: typeof x[t(2475)] === t(1137) ? x[t(2475)] : () => x.default, ...v0(x) });
};
class Ex extends C0 {
  _parse(x) {
    const t = a, { ctx: r } = this[t(1426)](x), e = { ...r, common: { ...r[t(2121)], issues: [] } }, s = this[t(2587)][t(2560)][t(1605)]({ data: e[t(782)], path: e.path, parent: { ...e } });
    return gx(s) ? s[t(654)]((n) => {
      const o = t;
      return { status: o(1268), value: n[o(333)] === o(1268) ? n[o(2380)] : this._def[o(1063)]({ get error() {
        const c = o;
        return new Pe(e.common[c(719)]);
      }, input: e[o(782)] }) };
    }) : { status: t(1268), value: s[t(333)] === t(1268) ? s[t(2380)] : this[t(2587)].catchValue({ get error() {
      const n = t;
      return new Pe(e[n(2121)][n(719)]);
    }, input: e[t(782)] }) };
  }
  [a(280)]() {
    const x = a;
    return this._def[x(2560)];
  }
}
Ex.create = (i, x) => {
  const t = a;
  return new Ex({ innerType: i, typeName: p0.ZodCatch, catchValue: typeof x[t(1336)] === t(1137) ? x[t(1336)] : () => x[t(1336)], ...v0(x) });
};
class Oa extends C0 {
  [a(1605)](x) {
    const t = a;
    if (this[t(694)](x) !== a0[t(845)]) {
      const e = this[t(513)](x);
      return X(e, { code: B.invalid_type, expected: a0.nan, received: e[t(881)] }), h0;
    }
    return { status: t(1268), value: x[t(782)] };
  }
}
Oa[a(1186)] = (i) => {
  const x = a;
  return new Oa({ typeName: p0[x(2447)], ...v0(i) });
};
class Ms extends C0 {
  _parse(x) {
    const t = a, { ctx: r } = this[t(1426)](x), e = r[t(782)];
    return this[t(2587)].type[t(1605)]({ data: e, path: r[t(2711)], parent: r });
  }
  [a(1664)]() {
    const x = a;
    return this._def[x(1436)];
  }
}
class ia extends C0 {
  [a(1605)](x) {
    const t = a, { status: r, ctx: e } = this._processInputParams(x);
    if (e[t(2121)][t(2780)])
      return (async () => {
        const n = t, o = await this[n(2587)].in[n(2832)]({ data: e[n(782)], path: e[n(2711)], parent: e });
        return o[n(333)] === "aborted" ? h0 : o.status === n(802) ? (r[n(802)](), Qe(o[n(2380)])) : this[n(2587)].out[n(2832)]({ data: o.value, path: e[n(2711)], parent: e });
      })();
    {
      const s = this[t(2587)].in[t(1509)]({ data: e.data, path: e[t(2711)], parent: e });
      return s.status === "aborted" ? h0 : s[t(333)] === "dirty" ? (r.dirty(), { status: t(802), value: s[t(2380)] }) : this._def.out._parseSync({ data: s.value, path: e.path, parent: e });
    }
  }
  static create(x, t) {
    const r = a;
    return new ia({ in: x, out: t, typeName: p0[r(1794)] });
  }
}
class Rx extends C0 {
  [a(1605)](x) {
    const t = a, r = this[t(2587)][t(2560)][t(1605)](x), e = (s) => {
      const n = t;
      return Ve(s) && (s[n(2380)] = Object[n(2596)](s.value)), s;
    };
    return gx(r) ? r[t(654)]((s) => e(s)) : e(r);
  }
  [a(1664)]() {
    return this._def.innerType;
  }
}
Rx.create = (i, x) => new Rx({ innerType: i, typeName: p0.ZodReadonly, ...v0(x) });
function Da(i, x) {
  const t = a, r = typeof i == "function" ? i(x) : typeof i === t(1019) ? { message: i } : i;
  return typeof r === t(1019) ? { message: r } : r;
}
function ci(i, x = {}, t) {
  const r = a;
  return i ? ax[r(1186)]()[r(547)]((e, s) => {
    const n = r, o = i(e);
    if (o instanceof Promise) return o[n(654)]((c) => {
      const u = n;
      if (!c) {
        const d = Da(x, e), l = d[u(1603)] ?? t ?? !0;
        s.addIssue({ code: u(2438), ...d, fatal: l });
      }
    });
    if (!o) {
      const c = Da(x, e), u = c[n(1603)] ?? t ?? !0;
      s.addIssue({ code: n(2438), ...c, fatal: u });
    }
  }) : ax[r(1186)]();
}
var p0;
(function(i) {
  const x = a;
  i[x(352)] = x(352), i.ZodNumber = x(1295), i[x(2447)] = "ZodNaN", i[x(383)] = x(383), i.ZodBoolean = x(2010), i.ZodDate = "ZodDate", i[x(1814)] = "ZodSymbol", i[x(366)] = x(366), i.ZodNull = x(1010), i[x(1743)] = x(1743), i.ZodUnknown = x(2601), i[x(2300)] = x(2300), i[x(2104)] = x(2104), i[x(1568)] = "ZodArray", i[x(1630)] = x(1630), i.ZodUnion = x(1371), i[x(1384)] = x(1384), i[x(1520)] = "ZodIntersection", i.ZodTuple = x(2178), i.ZodRecord = "ZodRecord", i[x(388)] = "ZodMap", i[x(415)] = x(415), i[x(2921)] = x(2921), i[x(938)] = x(938), i[x(1170)] = x(1170), i[x(1175)] = "ZodEnum", i.ZodEffects = x(2679), i.ZodNativeEnum = "ZodNativeEnum", i[x(2683)] = x(2683), i[x(2848)] = x(2848), i[x(1049)] = "ZodDefault", i[x(2520)] = x(2520), i.ZodPromise = x(1139), i[x(1718)] = "ZodBranded", i[x(1794)] = "ZodPipeline", i[x(1575)] = "ZodReadonly";
})(p0 || (p0 = {}));
const Hx = (i, x = { message: "Input not instance of " + i[a(1274)] }) => ci((t) => t instanceof i, x), g = we[a(1186)], W = Ze[a(1186)], e0 = zt[a(1186)], T0 = ax[a(1186)], ke = Zt.create;
Ce[a(1186)];
const zx = Bt[a(1186)], w0 = pe[a(1186)], S = W0.create, K0 = vx.create, Ls = na[a(1186)];
wx.create, Oe[a(1186)];
const D0 = Sx[a(1186)], t0 = kx[a(1186)], R0 = De.create;
Px[a(1186)];
const Z = Se.create;
je[a(1186)];
class ui {
  constructor(x, t) {
    m0(this, "graphInstance");
    m0(this, "nodeId");
    const r = a;
    this.graphInstance = x, this[r(2266)] = t;
  }
  get [a(293)]() {
    const x = a, t = this[x(2004)][x(2493)](this[x(2266)]);
    if (!t) throw new Error(x(2111) + this[x(2266)]);
    return t;
  }
  get [a(1446)]() {
    const x = a, t = this[x(2004)][x(2667)]()[x(364)](this[x(2266)]);
    if (!t) throw new Error("Node definition not found for " + this[x(2266)]);
    return new Proxy({}, { get: (e, s) => {
      const n = x;
      if (typeof s != "string") return;
      const o = t.actions[s], c = s.startsWith(n(739));
      if (!o && !c) throw new Error(n(720) + s + n(807) + this[n(2266)]);
      return async (u, d) => {
        const l = n, f = this[l(2674)]();
        if (!f) throw new Error(l(1250) + this[l(2266)]);
        const { transport: b, path: h } = f, m = this[l(2004)][l(745)]();
        if (!(o != null && o[l(1763)])) {
          const k = T0();
          let P;
          if (h.length === 2) P = await b[l(1837)]({ method: l(1959), params: { action: s, data: u, sourceNodeId: m } }, k);
          else try {
            P = await b.request({ method: l(1959), params: { action: "__proxy_forward", data: { targetNodeId: this[l(2266)], targetAction: s, targetData: u, forwardPath: h.slice(1) }, sourceNodeId: m } }, k);
          } catch (F) {
            throw console[l(1033)]("Error in direct request " + s + ":", F), console[l(1033)]({ targetNodeId: this[l(2266)], targetAction: s, targetData: u, forwardPath: h[l(2419)](1) }), F;
          }
          return P;
        }
        let v;
        return h.length === 2 ? v = b.streamRequest({ action: s, data: u, sourceNodeId: m }, o[l(1526)], d) : v = b[l(1082)]({ action: l(339), data: { targetNodeId: this[l(2266)], targetAction: s, targetData: u, forwardPath: h[l(2419)](1) }, sourceNodeId: m }, o.responseSchema, d), v;
      };
    } });
  }
  [a(2674)]() {
    const x = a;
    return this[x(2004)][x(1748)](this[x(2266)]);
  }
}
var rs, ss, ns;
class $s {
  constructor(x) {
    m0(this, ns);
    m0(this, ss);
    m0(this, rs);
    const t = a;
    this[t(2004)] = x, this[t(488)] = x[t(488)], this[t(2929)] = x[t(2929)];
  }
  [(ns = a(2004), ss = a(488), rs = a(2929), a(2372))]({ store: x, storeName: t, onStateUpdate: r, requestInitialState: e }) {
    const s = a;
    this[s(2929)][s(704)](s(2193) + t, (n) => {
      const o = s;
      try {
        n.sourceNodeId !== this[o(2004)][o(745)]() && r(n[o(1387)]);
      } catch (c) {
        console[o(1033)](o(2651) + t + ":", c);
      }
    });
  }
  [a(586)]({ store: x, storeName: t, sendStateUpdate: r, onInitialStateRequested: e }) {
    const s = a, n = this.graphInstance.getCurrentNodeId(), o = async (d, l = !1) => {
      const f = K;
      if (this.isTransportReady()) try {
        await this[f(2929)][f(2315)](f(2193) + t, { storeName: t, sourceNodeId: n, stateUpdate: d, isInitialState: l });
      } catch (h) {
        console[f(1033)](f(609) + t + ":", h);
      }
    }, c = x[s(2636)]((d) => {
      o(d, !1);
    });
    e(() => {
      o(x.getState(), !0);
    });
    const u = s(2095) + t;
    return this[s(488)][s(1333)](u, async () => {
      const d = x.getState();
      return await o(d, !0), { success: !0 };
    }), this[s(2929)][s(704)](s(2220), async (d) => {
      const l = s;
      try {
        (d[l(371)] === n || d[l(1791)] === n) && await o(x.getState(), !0);
      } catch {
      }
    }), () => {
      var l;
      const d = s;
      c(), (l = this[d(488)][d(2889)]) == null || l.delete(u);
    };
  }
  [a(786)]() {
    var t;
    const x = a;
    try {
      const r = this[x(2004)][x(931)], e = r && r[x(2382)]() > 0, s = ((t = this[x(2929)][x(2671)]) == null ? void 0 : t[x(1933)]) > 0;
      return e || s;
    } catch {
      return !!this[x(2929)];
    }
  }
  async broadcastCurrentState(x, t) {
    const r = a, e = this.graphInstance[r(745)]();
    if (this.isTransportReady()) try {
      await this[r(2929)][r(2315)](r(2193) + t, { storeName: t, sourceNodeId: e, stateUpdate: x[r(1622)](), isInitialState: !0 });
    } catch {
    }
  }
}
function di({ graphInstance: i, store: x, name: t }) {
  const r = a, e = new $s(i), s = (o) => {
    const c = K, u = x[c(1622)](), d = { ...u, ...o };
    x[c(2805)](d);
  }, n = async () => {
    const o = K, c = o(2095) + t;
    try {
      const u = i[o(364)](t);
      u && u.actions && u[o(1446)][c] && await u.actions[c]();
    } catch (u) {
      console.warn(o(2293) + t + ":", u);
    }
  };
  e[r(2372)]({ store: x, storeName: t, onStateUpdate: s, requestInitialState: n });
}
function li({ graphInstance: i, store: x, name: t }) {
  const r = a, e = new $s(i), s = async (o) => {
  }, n = (o) => {
  };
  return e[r(586)]({ store: x, storeName: t, sendStateUpdate: s, onInitialStateRequested: n });
}
var is, os;
class fi {
  constructor(x) {
    m0(this, "broadcastHandlers", /* @__PURE__ */ new Map());
    m0(this, "transports", /* @__PURE__ */ new Map());
    m0(this, os, /* @__PURE__ */ new Set());
    m0(this, is);
    const t = a;
    this[t(422)] = x;
  }
  [(os = a(2463), is = a(422), a(2274))](x) {
    return (t) => {
      const r = K;
      if (t && t.__origin === this.currentNodeId) return;
      const e = this.broadcastHandlers.get(x);
      if (e) {
        const { __origin: s, forwarded: n, ...o } = t || {};
        for (const c of e)
          try {
            c(o);
          } catch (u) {
            console[r(1033)](r(2853) + x + ":", u);
          }
      }
      !t.forwarded && this[r(927)](x, t);
    };
  }
  async [a(927)](x, t) {
    const r = a;
    try {
      const e = { ...t, forwarded: !0 }, s = [...Array[r(2809)](this[r(467)][r(615)]()), ...Array.from(this[r(2463)])], n = s[r(1753)]((o) => {
        const c = r;
        return o.notification({ method: c(2552), params: { messageType: x, message: e } })[c(1336)]((u) => {
          console.error(c(1561) + x + ":", u);
        });
      });
      await Promise[r(1849)](n);
    } catch (e) {
      console.error("[BroadcastManager] Error forwarding broadcast:", e);
    }
  }
  [a(704)](x, t) {
    const r = a;
    !this[r(2414)][r(2507)](x) && this.broadcastHandlers[r(480)](x, /* @__PURE__ */ new Set()), this.broadcastHandlers[r(2917)](x)[r(2701)](t);
  }
  [a(1560)](x) {
    this[a(2356)](x);
  }
  [a(2356)](x) {
    const t = a, r = S({ method: t0(t(2552)), params: S({ messageType: g(), message: T0() }) });
    x[t(1674)](r, async (e) => {
      const s = t, n = e.params[s(770)];
      this[s(2274)](n)(e[s(2307)][s(2851)]);
    });
  }
  [a(265)](x, t) {
    const r = a;
    this[r(467)][r(480)](x, t), this[r(1560)](t);
  }
  removeMiddleware(x) {
    const t = a;
    this[t(467)][t(2764)](x);
  }
  async [a(2315)](x, t) {
    const r = a, e = [...Array[r(2809)](this[r(467)][r(615)]()), ...Array[r(2809)](this.mountedTransports)], s = e[r(1753)]((n) => {
      const o = r;
      return n.notification({ method: o(2552), params: { messageType: x, message: t } });
    });
    await Promise[r(1849)](s);
  }
  [a(899)](x) {
    this.mountedTransports.add(x), this.setupTransportHandlers(x);
  }
  getHandlerTypes() {
    const x = a;
    return Array.from(this.broadcastHandlers[x(1400)]());
  }
  [a(2450)]() {
    const x = a;
    this[x(2414)].clear(), this[x(467)][x(2450)](), this[x(2463)][x(2450)]();
  }
}
var cs, us;
class hi {
  constructor(x, t, r) {
    m0(this, us, /* @__PURE__ */ new Map());
    m0(this, "definition");
    m0(this, "currentNodeId");
    m0(this, cs);
    const e = a;
    this.definition = x, this[e(422)] = t, this[e(2690)] = r;
  }
  [(us = a(2889), cs = a(2690), a(491))](x, t) {
    const r = a, e = this.definition[r(364)](this[r(422)]);
    if (!e) throw new Error("Node definition not found for " + this[r(422)]);
    const s = e[r(1446)][x];
    if (!s) throw new Error(r(720) + String(x) + r(807) + this.currentNodeId);
    this[r(2615)](x, t, s), this.actionHandlers.set(x, t);
  }
  [a(2615)](x, t, r) {
    r.stream;
  }
  implementInternalAction(x, t) {
    const r = a;
    this[r(2889)][r(480)](x, t);
  }
  [a(899)](x) {
    const t = a;
    for (const [r, e] of this[t(2889)]) {
      const s = this[t(576)][t(364)](this[t(422)]), n = s == null ? void 0 : s[t(1446)][r];
      if (r[t(2839)]("__internal_") ? !1 : (n == null ? void 0 : n[t(1763)]) === !0) {
        const u = S({ action: t0(r) });
        x[t(2063)](u, async function* (d, l, f) {
          const b = t, h = d.data || d, m = e(h, l, f);
          if (m && typeof m === b(2613) && Symbol[b(2843)] in m) for await (const v of m)
            yield v === void 0 ? {} : v;
          else {
            const v = await m;
            yield v === void 0 ? {} : v;
          }
        });
      }
    }
    this[t(1570)](x), this[t(2017)](x);
  }
  [a(1570)](x) {
    const t = a, r = S({ action: t0(t(339)) }), e = this;
    x.registerStreamRequestorHandler(r, async function* (s, n, o) {
      const c = t, u = s[c(782)] || s, { targetNodeId: d, targetAction: l, targetData: f, forwardPath: b } = u;
      if (!b || b[c(1667)] === 0) throw new Error(c(2146));
      const h = b[0], m = b[c(2419)](1);
      if (m[c(1667)] === 0 && h === e[c(422)]) {
        const v = e[c(2889)][c(2917)](l);
        if (!v) throw new Error(c(720) + l + c(1724) + e[c(422)]);
        const k = v(f, n, o);
        if (k && typeof k === c(2613) && Symbol[c(2843)] in k) for await (const P of k)
          yield P === void 0 ? {} : P;
        else {
          const P = await k;
          yield P === void 0 ? {} : P;
        }
        return;
      }
      if (h === e.currentNodeId && m[c(1667)] > 0) {
        const v = m[0], k = e[c(2690)](v);
        if (k) {
          const P = await k.streamRequest({ action: c(339), data: { targetNodeId: d, targetAction: l, targetData: f, forwardPath: m } }, S({}), o);
          for await (const F of P)
            yield F === void 0 ? {} : F;
          return;
        }
        throw new Error(c(1939) + v + c(889));
      }
      throw new Error(c(1855) + e.currentNodeId + c(267) + b);
    });
  }
  getRegisteredActions() {
    const x = a;
    return Array[x(2809)](this[x(2889)][x(1400)]());
  }
  [a(2653)](x) {
    return this.actionHandlers.has(x);
  }
  getHandler(x) {
    const t = a;
    return this[t(2889)][t(2917)](x);
  }
  [a(2450)]() {
    const x = a;
    this[x(2889)][x(2450)]();
  }
  [a(2474)](x, t, r) {
  }
  [a(2017)](x) {
    const t = a, r = S({ method: t0("sdppp/directRequest"), params: S({ action: g(), data: T0().optional() }) }), e = this;
    x[t(920)](r, async (s, n) => {
      const o = t, { action: c, data: u } = s[o(2307)];
      if (c === o(339)) return await e[o(649)](u, n);
      const d = e[o(2889)][o(2917)](c);
      if (!d) throw new Error(o(720) + c + " not found on node " + e.currentNodeId);
      const l = d(u, n), f = await l;
      return f === void 0 ? {} : f;
    });
  }
  async handleDirectProxyForward(x, t) {
    const r = a, { targetNodeId: e, targetAction: s, targetData: n, forwardPath: o } = x;
    if (!o || o[r(1667)] === 0) throw new Error(r(2146));
    const c = o[0], u = o[r(2419)](1);
    if (u[r(1667)] === 0 && c === this[r(422)]) {
      const d = this.actionHandlers[r(2917)](s);
      if (!d) throw new Error(r(720) + s + r(1724) + this[r(422)]);
      const l = d(n, t), f = await l;
      return f === void 0 ? {} : f;
    }
    if (c === this[r(422)] && u[r(1667)] > 0) {
      const d = u[0], l = this[r(2690)](d);
      if (l) return await l[r(1837)]({ method: r(1959), params: { action: "__proxy_forward", data: { targetNodeId: e, targetAction: s, targetData: n, forwardPath: u } } }, T0());
      throw new Error(r(1939) + d + r(889));
    }
    throw new Error("Invalid proxy forwarding: current node " + this[r(422)] + r(267) + o);
  }
}
var ds, ls, fs;
class pi {
  constructor(x, t) {
    m0(this, fs);
    m0(this, ls);
    m0(this, ds, /* @__PURE__ */ new Set());
    const r = a;
    this.definition = x, this[r(422)] = t;
  }
  [(fs = a(576), ls = a(422), ds = a(2045), a(882))](x) {
    const t = a;
    this.connectedNodes[t(2701)](x);
  }
  [a(752)](x) {
    const t = a;
    this[t(2045)][t(2764)](x);
  }
  [a(657)](x) {
    const t = a;
    return this[t(2045)][t(2507)](x);
  }
  findPath(x, t) {
    const r = a;
    if (x === t) return [x];
    const e = /* @__PURE__ */ new Set(), s = [{ nodeId: x, path: [x] }];
    for (; s[r(1667)] > 0; ) {
      const { nodeId: n, path: o } = s[r(2846)]();
      if (e[r(2507)](n)) continue;
      e[r(2701)](n);
      const c = this[r(576)][r(2725)](n);
      for (const u of c) {
        if (u === t) return [...o, u];
        !e[r(2507)](u) && s[r(528)]({ nodeId: u, path: [...o, u] });
      }
    }
  }
  [a(1027)]() {
    const x = a;
    return Array[x(2809)](this[x(2045)]);
  }
  getConnectionCount() {
    const x = a;
    return this[x(2045)][x(1933)];
  }
  [a(2466)]() {
    const x = a, t = /* @__PURE__ */ new Set(), r = /* @__PURE__ */ new Set(), e = [this.currentNodeId];
    for (r[x(2701)](this[x(422)]); e[x(1667)] > 0; ) {
      const s = e[x(2846)](), n = this[x(576)].getNeighbors(s);
      for (const o of n)
        !r[x(2507)](o) && (r[x(2701)](o), (this[x(2045)][x(2507)](o) || this[x(542)](o, r)) && (t[x(2701)](o), e[x(528)](o)));
    }
    return Array[x(2809)](t);
  }
  [a(542)](x, t) {
    const r = a, e = this[r(2390)](this.currentNodeId, x);
    if (!e || e[r(1667)] <= 1) return !1;
    for (let s = 1; s < e[r(1667)] - 1; s++)
      if (!this[r(2045)][r(2507)](e[s])) return !1;
    return !0;
  }
  [a(2450)]() {
    const x = a;
    this.connectedNodes[x(2450)]();
  }
}
var hs, ps, ms, bs, gs, ys, vs, ws;
class mi {
  constructor(x, t) {
    m0(this, ws);
    m0(this, vs);
    m0(this, ys, /* @__PURE__ */ new Map());
    m0(this, gs, /* @__PURE__ */ new Map());
    m0(this, bs);
    m0(this, ms);
    m0(this, ps);
    m0(this, hs, /* @__PURE__ */ new Map());
    const r = a;
    this.definition = x, this[r(422)] = t, this.initializeNodeStores(), this.broadcastManager = new fi(t), this[r(488)] = new hi(x, t, (e) => this[r(1843)](e)), this[r(931)] = new pi(x, t), this[r(2608)]();
  }
  [(ws = a(576), vs = a(422), ys = a(866), gs = a(2876), bs = a(2929), ms = a(488), ps = a(931), hs = a(960), a(1007))]() {
    const x = a;
    for (const t of this[x(576)].getNodeIds()) {
      const r = this.definition[x(364)](t);
      if (r && r[x(293)]) {
        const e = this[x(2024)](r[x(293)]), s = jn(() => e);
        this.nodeStores.set(t, s);
      }
    }
  }
  [a(2024)](x) {
    const t = a;
    if (!x) return {};
    try {
      return x[t(1198)]({});
    } catch {
      return this[t(1740)](x);
    }
  }
  [a(1740)](x) {
    const t = a;
    if (!x || !x[t(1649)]) return {};
    if (x.def[t(1436)] === t(2475)) {
      const r = x[t(1649)].defaultValue;
      return typeof r == "function" ? r() : r;
    }
    if (x[t(1649)][t(1436)] === t(2613)) {
      const r = {};
      let e;
      try {
        e = x.def[t(308)];
      } catch {
        return {};
      }
      if (e) for (const [s, n] of Object[t(1113)](e)) {
        const o = this[t(2057)](n);
        o !== void 0 && (r[s] = o);
      }
      return r;
    }
    return {};
  }
  [a(2057)](x) {
    const t = a;
    if (x)
      try {
        return x[t(1198)](void 0);
      } catch {
        return this[t(1740)](x);
      }
  }
  async [a(1199)](x, t) {
    const r = a;
    if (!this[r(576)][r(1253)](this[r(422)], x)) throw new Error(r(2314) + this[r(422)] + " to " + x);
    if (this[r(960)][r(2507)](x)) throw new Error(r(1059) + x);
    try {
      this[r(960)][r(480)](x, t), this[r(931)][r(882)](x), this[r(1466)](x, t), await this[r(1421)](x), await this[r(1277)](x);
    } catch (e) {
      throw this[r(555)](x), e;
    }
  }
  disconnect(x) {
    this.cleanupConnection(x);
  }
  async syncStoresToNewConnection(x) {
    const t = a;
    await new Promise((r) => setTimeout(r, 100));
    for (const [r, e] of this[t(866)])
      if (r === this[t(422)]) try {
        await this[t(2929)][t(2315)](t(2193) + r, { storeName: r, sourceNodeId: this[t(422)], stateUpdate: e[t(1622)](), isInitialState: !0 });
      } catch {
      }
    try {
      await this.broadcastManager[t(2315)](t(2220), { fromNode: this[t(422)], toNode: x });
    } catch {
    }
  }
  async [a(1277)](x) {
    const t = a;
    try {
      const r = this.connectionManager[t(2466)]();
      for (const e of r)
        try {
          const s = t(2095) + e, n = this[t(364)](e);
          if (n && n[t(1446)] && n.actions[s]) {
            const o = n.actions[s]({});
            await Promise.race([o, new Promise((c) => setTimeout(c, 300))]);
          }
        } catch (s) {
          console.log(t(2293) + e + ":", s);
        }
    } catch (r) {
      console[t(1546)](t(2059) + x + ":", r);
    }
  }
  [a(555)](x) {
    const t = a, r = this[t(960)].get(x);
    this[t(960)][t(2764)](x), this[t(931)][t(752)](x), this[t(2929)][t(1824)](x), r && r[t(2206)]();
  }
  setupNodeBindings(x, t) {
    const r = a;
    if (!this[r(866)][r(2917)](this[r(422)])) throw new Error(r(1761) + this[r(422)]);
    this[r(488)][r(899)](t), this[r(2929)].addMiddleware(x, t);
  }
  [a(2608)]() {
    for (const [x, t] of this.nodeStores)
      x === this.currentNodeId ? li({ graphInstance: this, store: t, name: x }) : di({ graphInstance: this, store: t, name: x });
  }
  [a(364)](x) {
    const t = a;
    if (!this.nodeProxies[t(2507)](x)) {
      const r = new ui(this, x);
      this[t(2876)][t(480)](x, r);
    }
    return this[t(2876)][t(2917)](x);
  }
  [a(1843)](x) {
    return this.nodeTransports.get(x);
  }
  getTransportToNode(x) {
    const t = a, r = this.nodeTransports[t(2917)](x);
    if (r) return { transport: r, path: [this[t(422)], x] };
    const e = this[t(2174)](this[t(422)], x);
    if (e && e[t(1667)] > 1) {
      const s = e[1], n = this.nodeTransports[t(2917)](s);
      if (n) return { transport: n, path: e };
    }
  }
  [a(2493)](x) {
    const t = a;
    return this[t(866)][t(2917)](x);
  }
  get [a(293)]() {
    const x = a, t = this[x(866)].get(this.currentNodeId);
    if (!t) throw new Error(x(2783) + this[x(422)]);
    return t;
  }
  get [a(1446)]() {
    const x = a, t = this[x(576)][x(364)](this[x(422)]);
    if (!t) throw new Error(x(1077) + this[x(422)]);
    return new Proxy({}, { get: (e, s) => {
      const n = x;
      if (typeof s != "string") return;
      const o = t[n(1446)][s];
      if (!o) throw new Error(n(720) + s + n(2598) + this.currentNodeId);
      return (c, u) => {
        const d = n, l = this[d(488)][d(701)](s);
        if (!l) throw new Error(d(2401) + s + d(1602) + this[d(422)]);
        const f = { nodeId: this[d(422)] };
        if (o[d(1763)] === !0) {
          const b = l(c, f, u);
          return b && typeof b === d(2613) && Symbol[d(2843)] in b ? (async function* () {
            for await (const h of b)
              yield h === void 0 ? {} : h;
          })() : (async function* () {
            const h = await b;
            yield h === void 0 ? {} : h;
          })();
        } else return (async () => {
          const b = d, h = l(c, f, u);
          if (h && typeof h == "object" && Symbol.asyncIterator in h) {
            const m = h[Symbol[b(2843)]](), v = await m[b(369)]();
            return v[b(2380)] === void 0 ? {} : v[b(2380)];
          } else {
            const m = await h;
            return m === void 0 ? {} : m;
          }
        })();
      };
    } });
  }
  [a(2667)]() {
    return this[a(576)];
  }
  [a(745)]() {
    return this[a(422)];
  }
  [a(1318)](x) {
    return this[a(1748)](x);
  }
  [a(491)](x, t) {
    const r = a;
    this[r(488)][r(491)](x, t);
  }
  [a(1283)]() {
    const x = a, t = Array[x(2809)](this[x(960)][x(1400)]());
    for (const r of t)
      this[x(555)](r);
    this[x(2929)][x(2450)](), this[x(488)].clear(), this[x(931)][x(2450)]();
  }
  [a(2174)](x, t) {
    return this[a(931)].findPath(x, t);
  }
  [a(2390)](x, t) {
    return this[a(2174)](x, t);
  }
  async broadcast(x, t) {
    const r = a, e = { ...t, __origin: this[r(422)] };
    return this[r(2929)][r(2315)](x, e);
  }
  [a(285)](x, t) {
    const r = a;
    this[r(2929)][r(704)](x, t);
  }
}
function bi(i) {
  const x = new Dn(i);
  return { joinAs(t) {
    const r = K;
    if (!x[r(364)](t)) throw new Error(r(913) + String(t) + r(430));
    return new mi(x, t);
  }, getDefinition() {
    return i;
  }, getNodeIds() {
    return x.getNodeIds();
  }, getNeighbors(t) {
    return x[K(2725)](t);
  }, hasEdge(t, r) {
    return x.hasEdge(t, r);
  }, hasPath(t, r) {
    return x[K(2858)](t, r);
  }, findPath(t, r) {
    return x.findPath(t, r);
  } };
}
const ja = { INTERCEPTOR_ERROR: a(687) };
var Ss, ks, Ps;
class Ma extends (Ps = Error, ks = a(2693), Ss = a(2051), Ps) {
  constructor(t, r, e, s) {
    const n = a;
    super(e);
    m0(this, "type");
    m0(this, ks);
    m0(this, Ss);
    this[n(1274)] = n(1926), this[n(1436)] = t, this[n(2693)] = r, this.originalError = s;
  }
}
var Is, Es, Rs, Cs, Fs;
class gi {
  constructor(x, t = {}) {
    m0(this, Fs);
    m0(this, "realTransport", null);
    m0(this, "options");
    m0(this, "requestHandlers", /* @__PURE__ */ new Map());
    m0(this, Cs, /* @__PURE__ */ new Map());
    m0(this, Rs, /* @__PURE__ */ new Map());
    m0(this, Es, /* @__PURE__ */ new Map());
    m0(this, "messageHandlers", []);
    m0(this, "closeHandlers", []);
    m0(this, "errorHandlers", []);
    m0(this, Is, { requestsHandled: 0, notificationsHandled: 0, requestsIntercepted: 0, notificationsIntercepted: 0, errors: 0 });
    const r = a;
    this[r(644)] = x, this.options = { debug: !1, interceptorTimeout: 5e3, continueOnInterceptorError: !0, ...t };
  }
  async [(Fs = a(644), Cs = a(1085), Rs = a(2772), Es = a(2097), Is = a(584), a(1199))](x) {
    const t = a;
    this[t(2563)] = x, x[t(2742)] = (r) => {
      this.handleIncomingMessage(r);
    }, x[t(2023)] = () => {
      const r = t;
      this[r(1070)][r(1188)]((e) => e());
    }, x[t(2405)] = (r) => {
      const e = t;
      this[e(1167)][e(1188)]((s) => s(r));
    }, await this[t(644)][t(1199)](this);
  }
  async [a(2655)](x) {
    const t = a;
    this.log(t(2066), "Incoming message:", x);
    try {
      if (this[t(966)](x) && await this.handleIncomingRequest(x) || this[t(1698)](x) && await this[t(2076)](x))
        return;
      this[t(632)][t(1188)]((r) => r(x));
    } catch (r) {
      this.stats[t(2183)]++, this[t(1546)]("error", t(548), r), this[t(632)][t(1188)]((e) => e(x));
    }
  }
  async handleIncomingRequest(x) {
    const t = a, r = this[t(1960)].get(x[t(2693)]);
    if (!r) return !1;
    try {
      this[t(584)][t(612)]++;
      const e = await r(x, {});
      return this[t(2563)] && "id" in x && await this[t(2563)][t(335)]({ jsonrpc: t(2377), id: x.id, result: e }), !0;
    } catch (e) {
      return this[t(584)][t(2183)]++, this[t(2563)] && "id" in x && await this.realTransport.send({ jsonrpc: t(2377), id: x.id, error: { code: -32603, message: "Request handler failed: " + JSON[t(2340)](x.params) + " " + e.message } }), !0;
    }
  }
  async [a(2076)](x) {
    const t = a, r = this[t(1085)][t(2917)](x[t(2693)]);
    if (!r) return !1;
    try {
      return this[t(584)][t(2575)]++, await r(x), !0;
    } catch (e) {
      return this.stats[t(2183)]++, this.log(t(1033), t(1297) + x[t(2693)] + ":", e), !0;
    }
  }
  async [a(335)](x) {
    const t = a;
    this.log("debug", t(2531), x);
    try {
      if (this.isRequest(x)) {
        const r = await this.executeOutgoingRequestInterceptor(x);
        if (r[t(1494)]) {
          if (r[t(1435)] === null) return;
          r[t(1435)] && (x = { ...r[t(1435)], jsonrpc: "2.0" }, this[t(584)][t(680)]++);
        } else if (this[t(891)].continueOnInterceptorError) this.log("warn", t(331) + x[t(2693)] + ":", r[t(1033)]);
        else throw r.error;
      }
      if (this.isNotification(x)) {
        const r = await this.executeOutgoingNotificationInterceptor(x);
        if (r[t(1494)]) {
          if (r[t(1435)] === null) return;
          r[t(1435)] && (x = { ...r[t(1435)], jsonrpc: t(2377) }, this.stats.notificationsIntercepted++);
        } else if (this[t(891)].continueOnInterceptorError) this[t(1546)]("warn", "Notification interceptor failed for " + x[t(2693)] + ":", r[t(1033)]);
        else throw r[t(1033)];
      }
      this.realTransport && await this.realTransport[t(335)](x);
    } catch (r) {
      throw this[t(584)][t(2183)]++, r;
    }
  }
  async [a(817)]() {
    const x = a;
    this[x(2563)] && await this[x(2563)][x(817)]();
  }
  async [a(971)]() {
    const x = a;
    this[x(2563)] && await this[x(2563)][x(971)]();
  }
  set [a(2742)](x) {
    const t = a;
    this[t(632)] = [x];
  }
  set [a(2023)](x) {
    const t = a;
    this[t(1070)] = [x];
  }
  set [a(2405)](x) {
    this.errorHandlers = [x];
  }
  async [a(501)](x) {
    const t = a, r = this[t(2772)][t(2917)](x.method);
    if (!r) return { success: !0, result: x };
    try {
      return { success: !0, result: await this[t(2947)](r(x), this[t(891)][t(2054)]) };
    } catch (e) {
      return this[t(584)][t(2183)]++, { success: !1, error: new Ma(ja.INTERCEPTOR_ERROR, x[t(2693)], t(1606) + e[t(2851)], e) };
    }
  }
  async [a(2818)](x) {
    const t = a, r = this.outgoingNotificationInterceptors.get(x[t(2693)]);
    if (!r) return { success: !0, result: x };
    try {
      return { success: !0, result: await this.withTimeout(r(x), this[t(891)].interceptorTimeout) };
    } catch (e) {
      return this[t(584)][t(2183)]++, { success: !1, error: new Ma(ja[t(1533)], x[t(2693)], t(864) + e[t(2851)], e) };
    }
  }
  async [a(1837)](x, t) {
    const r = a;
    return await this[r(644)][r(1837)](x, t, { timeout: 36e5 });
  }
  async [a(1707)](x) {
    const t = a;
    return await this.protocol[t(1707)](x);
  }
  setRequestHandler(x, t) {
    const r = a, e = x.shape[r(2693)][r(2380)];
    this[r(1960)][r(480)](e, t);
  }
  [a(1674)](x, t) {
    const r = a, e = x[r(308)][r(2693)].value;
    this[r(1085)][r(480)](e, t);
  }
  [a(1106)](x, t) {
    const r = a, e = x[r(308)][r(2693)][r(2380)];
    this[r(2772)][r(480)](e, t);
  }
  [a(1182)](x, t) {
    const r = a, e = x[r(308)][r(2693)][r(2380)];
    this[r(2097)][r(480)](e, t);
  }
  unsetRequestHandler(x) {
    this[a(1960)].delete(x);
  }
  [a(2702)](x) {
    this[a(1085)].delete(x);
  }
  [a(2767)](x) {
    const t = a;
    this[t(2772)][t(2764)](x);
  }
  [a(1101)](x) {
    const t = a;
    this[t(2097)][t(2764)](x);
  }
  hasRequestHandler(x) {
    const t = a;
    return this[t(1960)][t(2507)](x);
  }
  [a(2566)](x) {
    const t = a;
    return this[t(1085)][t(2507)](x);
  }
  hasOutgoingRequestInterceptor(x) {
    const t = a;
    return this.outgoingRequestInterceptors[t(2507)](x);
  }
  [a(1892)](x) {
    const t = a;
    return this[t(2097)][t(2507)](x);
  }
  [a(474)]() {
    return { ...this[a(584)] };
  }
  [a(460)]() {
    const x = a;
    this[x(584)] = { requestsHandled: 0, notificationsHandled: 0, requestsIntercepted: 0, notificationsIntercepted: 0, errors: 0 };
  }
  [a(776)]() {
    return this[a(644)];
  }
  [a(2206)]() {
    const x = a;
    this[x(1960)][x(2450)](), this[x(1085)][x(2450)](), this[x(2772)][x(2450)](), this[x(2097)].clear();
  }
  [a(966)](x) {
    const t = a;
    return x[t(811)] === t(2377) && t(2693) in x && "id" in x;
  }
  isNotification(x) {
    const t = a;
    return x[t(811)] === t(2377) && t(2693) in x && !("id" in x);
  }
  async [a(2947)](x, t) {
    const r = a, e = new Promise((s, n) => {
      const o = K;
      setTimeout(() => n(new Error(o(648))), t);
    });
    return await Promise[r(2707)]([x, e]);
  }
  [a(1546)](x, t, ...r) {
    const e = a;
    if (!this[e(891)].debug && x === e(2066)) return;
    const s = "[MCPMiddleware]";
    switch (x) {
      case e(2066):
        console.debug(s, t, ...r);
        break;
      case e(2175):
        console[e(2175)](s, t, ...r);
        break;
      case e(1842):
        console[e(1842)](s, t, ...r);
        break;
      case e(1033):
        console[e(1033)](s, t, ...r);
        break;
    }
  }
}
S({ method: t0(a(2793)), params: S({ requestId: g(), data: T0(), error: g()[a(1423)](), finished: e0() }) }), S({ method: t0(a(2056)), params: S({ action: g(), data: T0() }) }), S({ method: t0(a(1263)), params: S({ requestId: g() }) });
const yi = S({ method: t0(a(2793)), params: S({ requestId: g(), data: T0(), error: g()[a(1423)](), finished: e0() }) }), vi = S({ method: t0(a(2056)), params: S({ action: g(), data: T0() }) }), wi = S({ method: t0("sdppp/abort"), params: S({ requestId: g() }) });
var Ns, qs;
class Si {
  constructor() {
    m0(this, qs, /* @__PURE__ */ new Map());
    m0(this, Ns, /* @__PURE__ */ new Map());
  }
  [(qs = a(1330), Ns = a(1103), a(528))](x) {
    const t = a, { requestId: r } = x[t(2307)], e = this.queues[t(2917)](r) || [], s = this[t(1103)][t(2917)](r) || [];
    s[t(1667)] > 0 ? s.shift()(x[t(2307)]) : (e[t(528)](x[t(2307)]), this[t(1330)].set(r, e));
  }
  async [a(940)](x) {
    const t = a, r = this[t(1330)][t(2917)](x) || [];
    return r[t(1667)] > 0 ? r.shift() : new Promise((e) => {
      const s = t, n = this[s(1103)].get(x) || [];
      n.push(e), this[s(1103)][s(480)](x, n);
    });
  }
  [a(2206)](x) {
    const t = a;
    this[t(1330)][t(2764)](x), this[t(1103)][t(2764)](x);
  }
}
var Ts, As, _s;
class ki extends gi {
  constructor(t, r = {}) {
    const e = a;
    super(t, r);
    m0(this, _s, /* @__PURE__ */ new Map());
    m0(this, "requestIdSeq", 1);
    m0(this, As, /* @__PURE__ */ new Map());
    m0(this, Ts, new Si());
    this[e(1276)]();
  }
  [(_s = a(2537), As = a(1444), Ts = a(2352), a(1276))]() {
    const t = a;
    this[t(1109)](), this[t(2510)](), this[t(1021)]();
  }
  [a(1109)]() {
    this.setNotificationHandler(yi, async (t) => {
      const r = K;
      this.notificationQueue[r(528)](t);
    });
  }
  [a(2510)]() {
    const t = a;
    this[t(920)](wi, async (r, e) => {
      const s = t, { requestId: n } = r.params, o = this[s(1444)][s(2917)](n);
      return o && (o[s(522)](), this[s(1444)].delete(n)), { success: !0 };
    });
  }
  setupStreamRequestHandler() {
    this.setRequestHandler(vi, async (t, r) => {
      const e = K, s = e(1760) + this[e(1542)]++, n = this.streamRequestorHandlers[e(2917)](t[e(2307)].action);
      if (!n) throw new Error(e(860) + t[e(2307)][e(888)]);
      const o = new AbortController();
      return this.runningRequests[e(480)](s, o), this[e(831)](s, n, t[e(2307)], r, o), { requestId: s };
    });
  }
  async [a(831)](t, r, e, s, n) {
    const o = a;
    try {
      const c = r(e, s, n[o(2631)]);
      for await (const u of c) {
        if (n[o(2631)][o(794)]) break;
        await this.notification({ method: o(2793), params: { requestId: t, data: u, error: null, finished: !1 } });
      }
      !n.signal[o(794)] && await this[o(1707)]({ method: o(2793), params: { requestId: t, data: null, error: null, finished: !0 } });
    } catch (c) {
      !n[o(2631)][o(794)] && await this.notification({ method: "sdppp/streamResponse", params: { requestId: t, data: null, error: c.message, finished: !0 } });
    } finally {
      this[o(1444)].delete(t);
    }
  }
  [a(2063)](t, r) {
    const e = a;
    this.streamRequestorHandlers[e(480)](t.shape[e(888)][e(2380)], r);
  }
  async streamRequest(t, r, e) {
    const s = a;
    this.validateStreamRequestorRequest(e);
    const n = await this[s(260)](t), o = this[s(2430)](n), c = this[s(2663)]();
    return this[s(1084)](o, c, n, e);
  }
  [a(1928)](t) {
    const r = a;
    if (t && t[r(794)]) throw new Error(r(353));
  }
  async [a(260)](t) {
    const r = a;
    return (await this[r(1837)]({ method: r(2056), params: { action: t[r(888)], data: t.data } }, S({ requestId: g() }))).requestId;
  }
  initializeResponseQueue(t) {
    return this[a(2352)];
  }
  [a(2663)]() {
    return { finished: !1, error: null };
  }
  [a(1084)](t, r, e, s) {
    const n = this;
    return { async *[Symbol.asyncIterator]() {
      const o = K;
      try {
        for (; !r.finished && !r[o(1033)]; ) {
          if (s && s[o(794)])
            throw await n[o(1837)]({ method: "sdppp/abort", params: { requestId: e } }, S({ success: e0() })), new Error(o(2516));
          const c = await t[o(940)](e);
          if (c.error)
            throw r[o(1033)] = c[o(1033)], new Error(c.error);
          if (c.finished) {
            r[o(1210)] = !0;
            break;
          }
          c[o(782)] !== null && (yield c[o(782)]);
        }
      } finally {
        t[o(2206)](e);
      }
    } };
  }
  [a(1513)]() {
    return this[a(1444)].size;
  }
  async abortRequest(t) {
    const r = a, e = this.runningRequests[r(2917)](t);
    return e ? (e.abort(), this[r(1444)][r(2764)](t), !0) : !1;
  }
  [a(2635)]() {
    const t = a;
    for (const [r, e] of this[t(1444)])
      e[t(522)]();
    this[t(1444)][t(2450)]();
  }
  cleanup() {
    const t = a;
    super[t(2206)](), this[t(2635)](), this[t(2537)].clear();
  }
}
S({ id: g(), method: g(), params: T0()[a(1195)](), traceId: g()[a(1195)]() }), S({ id: g(), result: T0()[a(1195)](), error: S({ code: W(), message: g(), data: T0()[a(1195)]() })[a(1195)]() }), S({ method: g(), params: T0()[a(1195)]() }), S({ method: t0(a(2056)), params: S({ action: g(), data: T0() }) }), S({ method: t0(a(2793)), params: S({ requestId: g(), data: T0()[a(1195)](), error: g()[a(1423)]()[a(1195)](), finished: e0()[a(2475)](!1) }) }), S({ method: t0(a(1263)), params: S({ requestId: g() }) }), S({ method: t0(a(2552)), params: S({ messageType: g(), message: T0() }) });
function Hs(i) {
  const x = a;
  return i && i[x(1449)] && Object.prototype[x(1687)][x(1512)](i, x(2475)) ? i[x(2475)] : i;
}
const Ue = S({ leftDistance: W(), topDistance: W(), rightDistance: W(), bottomDistance: W(), width: W(), height: W() }), Ne = { name: g(), uiWeight: W() }, Pi = S({ ...Ne, outputType: t0(a(2605)), options: S({ required: e0(), maxCount: W()[a(1195)](), maskMode: e0()[a(1195)]() }) }), Ii = S({ ...Ne, outputType: t0(a(386)), options: S({ required: e0() }) }), Ei = S({ ...Ne, outputType: t0("string"), options: S({ required: e0() }) }), Ri = S({ ...Ne, outputType: t0(a(1459)), options: S({ required: e0() }) }), Ci = S({ ...Ne, outputType: t0(a(329)), options: S({ required: e0(), min: W().optional(), max: W()[a(1195)](), step: W()[a(1195)](), random: e0().optional(), slider: e0()[a(1195)]() }) }), Fi = S({ ...Ne, outputType: t0(a(494)), options: S({ required: e0(), values: w0(g()), labels: w0(g())[a(1195)]() }) }), Ni = S({ ...Ne, outputType: t0(a(2535)), options: S({ required: e0(), values: w0(g()) }) }), qi = S({ ...Ne, outputType: t0(a(443)), options: S({ required: e0() }) }), Ti = Ls("outputType", [Pi, Ii, Ei, Ri, Ci, Fi, Ni, qi]), Ai = S({ id: g(), title: g(), widgets: w0(Ti), uiWeightSum: W() }), _i = S({ widgetableID: g(), widgetablePath: g(), nodes: D0(g(), Ai), nodeIndexes: w0(g()), note: g().optional(), options: D0(g(), T0()) }), Oi = S({ widgetableStructure: _i[a(2475)]({ widgetableID: "", widgetablePath: "", nodes: {}, note: "", options: {}, nodeIndexes: [] }), widgetableValues: D0(g(), w0(T0()))[a(2475)]({}), widgetableErrors: D0(g(), g()).default({}), queueSize: W().default(0), lastError: g()[a(2475)](""), progress: W()[a(2475)](0), executingNodeTitle: g()[a(2475)](""), executingNodeID: g()[a(2475)](""), graphProgress: W().default(0), comfyUserToken: g()[a(2475)](""), comfyOrgLoggedIn: e0()[a(2475)](!1), comfyOrgAPIKey: g()[a(2475)](""), comfyWSState: R0([a(272), a(885)]).default(a(272)), lastRunTime: W()[a(2475)](0) }), Di = S({ bannerData: T0()[a(1195)](), refreshable: e0()[a(2475)](!1), backwardable: e0()[a(2475)](!1), loginable: e0().default(!1), runnable: e0()[a(2475)](!1), workBoundaries: D0(W(), Ue)[a(2475)]({}), workBoundaryMaxSizes: D0(W(), W())[a(2475)]({}) }), ji = S({ uname: g()[a(2475)](""), activeDocumentID: W().default(0), layers: w0(S({ id: W(), name: g(), identify: g() })).default([]), actions: w0(g())[a(2475)]([]), theme: g()[a(2475)]("kPanelBrightnessMediumGray"), sdpppX: D0(g(), T0())[a(2475)]({}), locale: R0([a(1110), a(2196)])[a(2475)](a(2196)), comfyWebviewConnectStatus: R0([a(2595), a(272), a(1973)])[a(2475)](a(1973)), comfyWebviewLoadError: g()[a(2475)](""), comfyWebviewLoading: e0()[a(2475)](!1), comfyWebviewVersion: g()[a(2475)](""), comfyHTTPCode: W()[a(2475)](200), comfyURL: g()[a(2475)](""), sdkWebviewFocusing: e0()[a(2475)](!1), sdkWebviewConnectStatus: R0([a(2595), a(272), "disconnected"])[a(2475)](a(1973)), isLogin: e0()[a(2475)](!1), isGuest: e0().default(!1), requestingLogin: e0().default(!1), loginMessage: g()[a(2475)](""), token: g()[a(2475)](""), userInfo: D0(g(), T0())[a(2475)]({}), taskLastRun: W().default(0), canvasStateID: W().optional(), selectionStateID: g()[a(1195)](), selectionBoundary: Ue[a(1423)]()[a(1195)]() }), Mi = { setNodeTitle: { requestSchema: S({ node_id: g(), title: g() }), responseSchema: S({ success: e0() }) }, reboot: { requestSchema: S({}), responseSchema: S({ success: e0(), error: g().optional() }) }, setComfyOrgAPIKey: { requestSchema: S({ api_key: g() }), responseSchema: S({ success: e0() }) }, logout: { requestSchema: S({}), responseSchema: S({ success: e0() }) }, uploadComfyImageFromUXP: { requestSchema: S({ fileName: g(), overwrite: e0()[a(1195)](), mimeType: g()[a(1195)](), dataBase64: g() }), responseSchema: S({ name: g() }) }, sdpppHandshake: { requestSchema: S({ hostVersion: g()[a(1195)]() }), responseSchema: S({ comfyVersion: g(), hostVersion: g()[a(1195)]() }) } }, Li = S({ workflows: w0(g()), error: g()[a(1195)]() }), $i = S({ success: e0(), nodeErrors: D0(g())[a(1195)](), prompt_ids: w0(g())[a(1195)](), images: w0(S({ url: g(), thumbnail: g() })).optional() }), Hi = { setWidgetValue: { requestSchema: S({ values: w0(S({ nodeID: g(), widgetIndex: W(), value: D0(g(), T0()).or(g()).or(W()).or(e0()).or(w0(T0())) })) }), responseSchema: S({ success: e0() }) }, openWorkflow: { requestSchema: S({ workflow_path: g(), reset: e0()[a(2475)](!1) }), responseSchema: S({ success: e0() }) }, openWorkflowJSON: { requestSchema: S({ workflow_content: D0(T0()), workflow_path: g() }), responseSchema: S({ success: e0() }) }, listWorkflows: { requestSchema: S({ listMode: g()[a(1195)](), sdpppID: g()[a(1195)](), sdpppToken: g()[a(1195)]() }), responseSchema: Li }, saveWorkflow: { requestSchema: S({ workflow_path: g(), from_sid: g()[a(1195)]() }), responseSchema: S({ success: e0() }) }, run: { requestSchema: S({ size: W(), mode: R0([a(2164), a(2503)])[a(2475)]("app").optional() }), responseSchema: $i, stream: !0 }, stopAll: { requestSchema: S({}), responseSchema: S({ success: e0() }) } }, zi = { backward: { requestSchema: zx(), responseSchema: S({ success: e0() }) }, refresh: { requestSchema: zx(), responseSchema: S({ success: e0() }) }, run: { requestSchema: zx(), responseSchema: S({ success: e0() }) } }, Ui = S({ passwordPayload: S({ username: g(), password: g() }).or(S({ email: g(), password: g() })).or(S({ phone: g(), password: g() })).or(S({ identifier: g(), password: g() })) }).or(S({ passcodePayload: S({ phone: g(), code: g() }).or(S({ email: g(), code: g() })) })), Vi = S({ passwordPayload: S({ username: g(), password: g() }).or(S({ email: g(), password: g() })).or(S({ phone: g(), password: g() })).or(S({ identifier: g(), password: g() })) }).or(S({ passcodePayload: S({ phone: g(), code: g() }).or(S({ email: g(), code: g() })) })), Zi = { register: { requestSchema: Ui, responseSchema: S({}) }, login: { requestSchema: Vi, responseSchema: S({}) }, sendPassCode: { requestSchema: S({ phone: g()[a(1195)](), email: g().optional() }), responseSchema: S({}) }, logout: { requestSchema: S({}), responseSchema: S({}) }, guestLogin: { requestSchema: S({}), responseSchema: S({}) } };
S({ resource: g().optional(), thumbnail: g()[a(1195)](), width: W()[a(1195)](), height: W()[a(1195)](), mimeType: g()[a(1195)](), source: g()[a(1195)](), error: g()[a(1195)]() }), S({ boundary: R0([a(2278), "curlayer", a(2456)]), content: R0([a(2278), a(2652), a(2456)]).or(g()), imageSize: W(), imageQuality: W(), cropBySelection: R0(["no", "positive", "negative"]), layer_identify: g()[a(1423)]()[a(1195)]() }), S({ content: R0([a(2278), a(2652), "selection"]), reverse: e0(), imageSize: W(), layer_identify: g().nullable()[a(1195)]() }), S({ selection: R0([a(2820), a(2001), a(1945), a(2412), "curlayer_canvas", "curlayer_curlayer", a(1734), "newdoc_canvas"]), url: g(), source: g(), cropBySelection: R0(["no", a(1076), "negative"]) });
const Bi = { downloadImage: { requestSchema: S({ url: g() }), responseSchema: S({ thumbnail: g()[a(1195)](), resource: g().optional(), width: W().optional(), height: W()[a(1195)](), error: g().optional() }) }, getThumbnail: { requestSchema: S({ resource: g(), maxSize: W()[a(1195)]() }), responseSchema: S({ thumbnail: g()[a(1195)](), width: W()[a(1195)](), height: W()[a(1195)](), error: g()[a(1195)]() }) } }, Wi = { manageGuides: { requestSchema: S({ action: R0([a(1186), a(2450)]), rect: Ue.optional() }), responseSchema: S({ success: e0() }) }, getBoundary: { requestSchema: S({ type: R0(["curlayer", a(2456)]) }), responseSchema: Ue }, getImage: { requestSchema: S({ boundary: K0([R0([a(2278), a(2652), a(2456)]), Ue]), content: K0([R0([a(2278), a(2652)]), g()]), imageSize: W(), imageQuality: W(), cropBySelection: R0(["no", a(1076), a(1854)]), SkipNonNormalLayer: e0(), layer_identify: g()[a(1423)]()[a(1195)]() }), responseSchema: S({ resource: g()[a(1195)](), thumbnail: g().optional(), width: W()[a(1195)](), height: W().optional(), mimeType: g()[a(1195)](), source: g().optional(), error: g()[a(1195)]() }) }, getMask: { requestSchema: S({ boundary: K0([R0([a(2278), a(2652), "selection"]), Ue]), content: R0([a(2278), "curlayer", a(2456)]), reverse: e0(), imageSize: W(), layer_identify: g()[a(1423)]()[a(1195)]() }), responseSchema: S({ resource: g()[a(1195)](), thumbnail: g()[a(1195)](), width: W().optional(), height: W()[a(1195)](), mimeType: g().optional(), source: g().optional(), error: g().optional() }) }, getCurrentLayerIdentify: { requestSchema: S({}), responseSchema: S({ layer_identify: g()[a(1423)]() }) }, importImage: { requestSchema: S({ resource: g(), boundaryUri: g()[a(1423)]()[a(1195)](), type: R0(["canvas", a(2652), a(595), a(314)]), sourceWidth: W()[a(1195)](), sourceHeight: W()[a(1195)](), maskUri: g()[a(1423)]()[a(1195)]() }), responseSchema: S({ success: e0(), layers: w0(S({ identify: g() }))[a(1195)](), message: g().optional(), error: g()[a(1195)]() }) }, applyMaskToImage: { requestSchema: S({ imageResource: g(), maskResource: g(), invertMask: e0()[a(1195)]() }), responseSchema: S({ resource: g(), thumbnail: g()[a(1195)](), width: W(), height: W(), mimeType: g() }) }, showBoundarySelectionDialog: { requestSchema: S({ additionalData: D0(T0())[a(1195)]() }), responseSchema: S({ boundary: R0([a(2278), a(2652), a(2456)]).optional(), cancelled: e0()[a(1195)]() }) }, selectImageSource: { requestSchema: S({ additionalData: D0(T0())[a(1195)]() }), responseSchema: S({ action: R0([a(2210), a(1484)])[a(1195)](), params: T0()[a(1195)](), cancelled: e0().optional() }) }, selectContentSource: { requestSchema: S({ additionalData: D0(T0())[a(1195)]() })[a(1195)](), responseSchema: S({ resource: g()[a(1195)](), fileName: g().optional(), mimeType: g()[a(1195)](), size: W()[a(1195)](), layerIdentify: g()[a(1195)](), cancelled: e0()[a(1195)]() }) } }, Ux = S({ taskId: g(), taskName: g(), status: R0([a(2500), a(1206), a(1813), a(1150)]), currentStep: W()[a(1195)](), totalSteps: W().optional(), stepDescription: g()[a(1195)](), progressPercentage: W()[a(1807)](0)[a(1663)](100).optional(), startTime: g(), endTime: g()[a(1195)](), error: g()[a(1195)](), errorCode: g()[a(1195)](), result: T0().optional(), metadata: D0(T0())[a(1195)]() }), Vx = S({ success: e0(), error: g().optional() }), Ki = { taskAdd: { requestSchema: Ux, responseSchema: Vx }, taskUpdate: { requestSchema: Ux[a(1086)]()[a(2477)]({ taskId: !0 }), responseSchema: Vx }, taskRemove: { requestSchema: Ux[a(620)]({ taskId: !0 }), responseSchema: Vx } }, Gi = { log: { requestSchema: S({ level: R0([a(1546), a(2175), a(1842), a(1033)]), messages: w0(g()) }), responseSchema: S({}) }, openExternalLink: { requestSchema: S({ url: g() }), responseSchema: S({ error: g()[a(1195)]() }) }, getStorage: { requestSchema: S({ key: g() }), responseSchema: S({ value: g(), error: g()[a(1195)]() }) }, setStorage: { requestSchema: S({ key: g(), value: g() }), responseSchema: S({ error: g()[a(1195)]() }) }, removeStorage: { requestSchema: S({ key: g() }), responseSchema: S({ error: g()[a(1195)]() }) }, keyboardAction: { requestSchema: S({ keycode: g() }), responseSchema: S({}) }, setComfyWebviewURL: { requestSchema: S({ url: g() }), responseSchema: S({}) }, getImageBase64: { requestSchema: S({ token: g() }), responseSchema: S({ base64: g()[a(1195)](), mimeType: g().optional(), error: g()[a(1195)]() }) }, uploadComfyImage: { requestSchema: S({ uploadInput: S({ type: K0([t0(a(946)), t0(a(2243)), t0(a(848))]), resource: T0(), fileName: g(), mimeType: g()[a(1195)](), resourceId: g().optional() }), overwrite: e0()[a(1195)]()[a(2475)](!0) }), responseSchema: S({ name: g() }) }, pickLocalFile: { requestSchema: S({ acceptExtensions: w0(g())[a(1195)](), kind: R0([a(2334), a(2326)])[a(1195)]() })[a(1195)](), responseSchema: S({ cancelled: e0()[a(1195)](), resource: g()[a(1195)](), fileName: g()[a(1195)](), mimeType: g()[a(1195)](), size: W()[a(1195)](), error: g()[a(1195)]() }) }, proxiedFetch: { requestSchema: S({ url: g(), method: g()[a(1195)](), headers: D0(g())[a(1195)](), body: T0()[a(1195)](), bodyType: R0([a(2691), a(1841), a(1956)])[a(1195)]() }), responseSchema: S({ success: e0(), status: W().optional(), statusText: g()[a(1195)](), headers: D0(g())[a(1195)](), data: T0().optional(), error: g()[a(1195)]() }) }, openaiImageEdit: { requestSchema: S({ apiKey: g(), baseURL: g(), imageToken: g(), prompt: g(), model: g() }), responseSchema: S({ success: e0(), imageUrl: g().optional(), apiTime: W()[a(1195)](), error: g()[a(1195)]() }) }, geminiImageGenerate: { requestSchema: S({ apiKey: g(), baseURL: g()[a(1195)](), imageInputs: w0(g())[a(1195)](), imageInput: g()[a(1195)](), imageInputType: R0([a(2243), a(1589)]), prompt: g() }), responseSchema: S({ success: e0(), imageUrl: g().optional(), apiTime: W()[a(1195)](), error: g()[a(1195)]() }) } }, Ji = K0([g(), Hx(Uint8Array), Hx(ArrayBuffer), Hx(DataView)]), Qi = S({ buffer: Ji, name: g()[a(1423)]()[a(1195)](), mime: g()[a(1423)]().optional(), width: W()[a(1423)]()[a(1195)](), height: W()[a(1423)]()[a(1195)](), thumbnail: g()[a(1423)]().optional(), meta: D0(ke()).optional() }), Xi = { "fileResource.createFromExternal": { requestSchema: S({ url: g(), fileName: g()[a(1195)]() }), responseSchema: S({ resource: g()[a(1195)](), thumbnail: g()[a(1195)](), width: W()[a(1195)](), height: W().optional(), mime: g()[a(1195)](), mimeType: g()[a(1195)](), error: g()[a(1195)]() }) }, "fileResource.createFromLocal": { requestSchema: S({ types: w0(S({ description: g()[a(1195)](), extensions: w0(g())[a(1195)]() }))[a(1195)]() }), responseSchema: S({ resource: g()[a(1195)](), thumbnail: g()[a(1195)](), width: W()[a(1195)](), height: W()[a(1195)](), mime: g()[a(1195)](), error: g()[a(1195)]() }) }, "fileResource.createFromBuffer": { requestSchema: S({ files: w0(Qi)[a(1807)](1) }), responseSchema: S({ resource: g()[a(1195)](), thumbnail: g()[a(1195)](), width: W()[a(1195)](), height: W()[a(1195)](), mime: g().optional(), error: g().optional() }) }, "fileResource.createByContent": { requestSchema: S({ contentUri: g(), boundaryUri: g()[a(1195)](), options: D0(ke()).optional() }), responseSchema: S({ resource: g()[a(1195)](), thumbnail: g()[a(1195)](), width: W().optional(), height: W()[a(1195)](), mime: g()[a(1195)](), error: g()[a(1195)]() }) }, "fileResource.createByMask": { requestSchema: S({ maskUri: g(), boundaryUri: g()[a(1195)](), options: D0(ke())[a(1195)]() }), responseSchema: S({ resource: g()[a(1195)](), thumbnail: g()[a(1195)](), width: W()[a(1195)](), height: W()[a(1195)](), mime: g()[a(1195)](), error: g().optional() }) }, "fileResource.combineByCBM": { requestSchema: S({ contentUri: g(), boundaryUri: g(), maskUri: g()[a(1423)]()[a(1195)](), options: D0(ke()).optional(), thumbnail: e0()[a(1195)]() }), responseSchema: S({ resource: g()[a(1195)](), thumbnail: g()[a(1195)](), width: W()[a(1195)](), height: W()[a(1195)](), mime: g()[a(1195)](), error: g()[a(1195)]() }) }, "fileResource.delete": { requestSchema: S({ resources: w0(g()) }), responseSchema: S({ error: g().optional() }) }, "fileResource.thumbnail": { requestSchema: S({ resource: g(), maxSize: W()[a(1195)]() }), responseSchema: S({ thumbnail: g()[a(1195)](), width: W()[a(1195)](), height: W()[a(1195)](), error: g()[a(1195)]() }) }, "fileResource.saveAs": { requestSchema: S({ resources: w0(g()) }), responseSchema: S({ error: g()[a(1195)]() }) }, "boundary.normalize": { requestSchema: S({ boundary: g() }), responseSchema: S({ boundary: g()[a(1195)](), error: g()[a(1195)]() }) }, "layer.resolve": { requestSchema: S({ uri: g(), type: R0([a(795), "mask"]) }), responseSchema: S({ uri: g().optional(), error: g()[a(1195)]() }) } }, Yi = bi({ nodes: { sdk: { store: Di, actions: { ...zi } }, uxp: { store: ji, actions: { ...Bi, ...Xi, ...Gi, ...Zi, ...Ki, ...Wi } }, comfy: { store: Oi, actions: { ...Hi, ...Mi } } }, edges: [[a(502), a(1023)], [a(1008), a(1023)]] }), P0 = Yi[a(2025)](a(1008));
globalThis[a(2618)] = P0;
var fx = { exports: {} }, Zx, La;
function eo() {
  if (La) return Zx;
  La = 1;
  var i = 1e3, x = i * 60, t = x * 60, r = t * 24, e = r * 7, s = r * 365.25;
  Zx = function(d, l) {
    const f = K;
    l = l || {};
    var b = typeof d;
    if (b === "string" && d.length > 0) return n(d);
    if (b === f(329) && isFinite(d)) return l[f(1246)] ? c(d) : o(d);
    throw new Error("val is not a non-empty string or a valid number. val=" + JSON[f(2340)](d));
  };
  function n(d) {
    const l = K;
    if (d = String(d), !(d.length > 100)) {
      var f = /^(-?(?:\d+)?\.?\d+) *(milliseconds?|msecs?|ms|seconds?|secs?|s|minutes?|mins?|m|hours?|hrs?|h|days?|d|weeks?|w|years?|yrs?|y)?$/i.exec(d);
      if (f) {
        var b = parseFloat(f[1]), h = (f[2] || "ms")[l(498)]();
        switch (h) {
          case "years":
          case l(2599):
          case l(771):
          case "yr":
          case "y":
            return b * s;
          case "weeks":
          case l(754):
          case "w":
            return b * e;
          case l(1634):
          case "day":
          case "d":
            return b * r;
          case l(1723):
          case l(290):
          case l(2064):
          case "hr":
          case "h":
            return b * t;
          case l(1431):
          case "minute":
          case "mins":
          case "min":
          case "m":
            return b * x;
          case l(1118):
          case l(950):
          case l(1171):
          case l(543):
          case "s":
            return b * i;
          case l(2367):
          case l(952):
          case l(1451):
          case l(737):
          case "ms":
            return b;
          default:
            return;
        }
      }
    }
  }
  function o(d) {
    const l = K;
    var f = Math[l(1517)](d);
    return f >= r ? Math[l(2140)](d / r) + "d" : f >= t ? Math[l(2140)](d / t) + "h" : f >= x ? Math.round(d / x) + "m" : f >= i ? Math[l(2140)](d / i) + "s" : d + "ms";
  }
  function c(d) {
    const l = K;
    var f = Math.abs(d);
    return f >= r ? u(d, f, r, l(2739)) : f >= t ? u(d, f, t, l(290)) : f >= x ? u(d, f, x, "minute") : f >= i ? u(d, f, i, l(950)) : d + l(2580);
  }
  function u(d, l, f, b) {
    const h = K;
    var m = l >= f * 1.5;
    return Math[h(2140)](d / f) + " " + b + (m ? "s" : "");
  }
  return Zx;
}
var Bx, $a;
function xo() {
  if ($a) return Bx;
  $a = 1;
  function i(x) {
    const t = K;
    e[t(2066)] = e, e[t(2475)] = e, e[t(884)] = d, e[t(2487)] = c, e.enable = n, e.enabled = u, e.humanize = eo(), e[t(1283)] = l, Object.keys(x)[t(1188)]((f) => {
      e[f] = x[f];
    }), e[t(264)] = [], e[t(624)] = [], e[t(2410)] = {};
    function r(f) {
      const b = t;
      let h = 0;
      for (let m = 0; m < f[b(1667)]; m++)
        h = (h << 5) - h + f.charCodeAt(m), h |= 0;
      return e[b(1787)][Math[b(1517)](h) % e[b(1787)][b(1667)]];
    }
    e[t(2079)] = r;
    function e(f) {
      const b = t;
      let h, m = null, v, k;
      function P(...F) {
        const A = K;
        if (!P[A(1652)]) return;
        const C = P, E = Number(/* @__PURE__ */ new Date()), R = E - (h || E);
        C[A(390)] = R, C.prev = h, C[A(602)] = E, h = E, F[0] = e[A(884)](F[0]), typeof F[0] !== A(1019) && F.unshift("%O");
        let O = 0;
        F[0] = F[0][A(340)](/%([a-zA-Z%])/g, (j, q) => {
          const N = A;
          if (j === "%%") return "%";
          O++;
          const z = e[N(2410)][q];
          if (typeof z === N(1137)) {
            const L = F[O];
            j = z[N(1512)](C, L), F[N(2383)](O, 1), O--;
          }
          return j;
        }), e[A(2787)][A(1512)](C, F), (C.log || e[A(1546)])[A(758)](C, F);
      }
      return P.namespace = f, P[b(449)] = e[b(449)](), P[b(1644)] = e[b(2079)](f), P.extend = s, P.destroy = e[b(1283)], Object.defineProperty(P, b(1652), { enumerable: !0, configurable: !1, get: () => {
        const F = b;
        return m !== null ? m : (v !== e[F(2879)] && (v = e[F(2879)], k = e[F(1652)](f)), k);
      }, set: (F) => {
        m = F;
      } }), typeof e[b(2305)] === b(1137) && e[b(2305)](P), P;
    }
    function s(f, b) {
      const h = t, m = e(this[h(472)] + (typeof b === h(1714) ? ":" : b) + f);
      return m[h(1546)] = this[h(1546)], m;
    }
    function n(f) {
      const b = t;
      e[b(2264)](f), e[b(2879)] = f, e[b(264)] = [], e[b(624)] = [];
      const h = (typeof f == "string" ? f : "")[b(2374)]()[b(340)](/\s+/g, ",")[b(1160)](",").filter(Boolean);
      for (const m of h)
        m[0] === "-" ? e[b(624)][b(528)](m[b(2419)](1)) : e.names.push(m);
    }
    function o(f, b) {
      const h = t;
      let m = 0, v = 0, k = -1, P = 0;
      for (; m < f[h(1667)]; )
        if (v < b[h(1667)] && (b[v] === f[m] || b[v] === "*")) b[v] === "*" ? (k = v, P = m, v++) : (m++, v++);
        else if (k !== -1) v = k + 1, P++, m = P;
        else return !1;
      for (; v < b[h(1667)] && b[v] === "*"; )
        v++;
      return v === b[h(1667)];
    }
    function c() {
      const f = t, b = [...e[f(264)], ...e[f(624)][f(1753)]((h) => "-" + h)][f(1255)](",");
      return e[f(1538)](""), b;
    }
    function u(f) {
      const b = t;
      for (const h of e[b(624)])
        if (o(f, h)) return !1;
      for (const h of e.names)
        if (o(f, h)) return !0;
      return !1;
    }
    function d(f) {
      const b = t;
      return f instanceof Error ? f.stack || f[b(2851)] : f;
    }
    function l() {
      const f = t;
      console[f(1842)](f(655));
    }
    return e[t(1538)](e[t(433)]()), e;
  }
  return Bx = i, Bx;
}
var Ha;
function to() {
  const i = a;
  return Ha || (Ha = 1, (function(x, t) {
    const r = i;
    t[r(2787)] = s, t[r(2264)] = n, t.load = o, t[r(449)] = e, t[r(428)] = c(), t[r(1283)] = /* @__PURE__ */ (() => {
      let d = !1;
      return () => {
        const l = K;
        !d && (d = !0, console[l(1842)](l(655)));
      };
    })(), t[r(1787)] = [r(2133), "#0000FF", r(1765), "#0033FF", r(2547), r(2524), r(1555), r(2624), r(2019), "#00CC33", r(611), "#00CC99", r(2357), "#00CCFF", r(2759), r(2393), r(1527), r(1637), r(832), r(871), "#3399CC", r(2807), r(963), r(508), r(1135), r(564), r(2942), r(1134), r(744), r(2483), r(898), r(336), r(1412), "#66CC33", r(1729), "#9900FF", r(1126), r(1511), "#99CC00", r(1982), r(2611), r(1311), r(622), r(2325), r(1696), "#CC00FF", r(681), r(2169), "#CC3366", r(425), r(1230), r(1335), r(2244), "#CC6633", r(1995), r(941), "#CCCC00", "#CCCC33", r(1789), "#FF0033", r(2638), r(1553), r(2584), "#FF00FF", r(2373), r(2894), r(1386), "#FF3399", r(928), r(1782), r(2281), r(2396), r(1650), r(2125), r(2586), r(2226)];
    function e() {
      const d = r;
      if (typeof window < "u" && window[d(1728)] && (window[d(1728)][d(1436)] === d(2005) || window.process[d(582)])) return !0;
      if (typeof navigator !== d(1714) && navigator[d(1871)] && navigator[d(1871)].toLowerCase().match(/(edge|trident)\/(\d+)/)) return !1;
      let l;
      return typeof document < "u" && document[d(307)] && document[d(307)][d(661)] && document.documentElement[d(661)][d(2646)] || typeof window !== d(1714) && window[d(244)] && (window[d(244)].firebug || window[d(244)][d(2227)] && window[d(244)][d(2944)]) || typeof navigator !== d(1714) && navigator[d(1871)] && (l = navigator[d(1871)][d(498)]()[d(1376)](/firefox\/(\d+)/)) && parseInt(l[1], 10) >= 31 || typeof navigator !== d(1714) && navigator[d(1871)] && navigator[d(1871)][d(498)]().match(/applewebkit\/(\d+)/);
    }
    function s(d) {
      const l = r;
      if (d[0] = (this[l(449)] ? "%c" : "") + this.namespace + (this[l(449)] ? l(385) : " ") + d[0] + (this[l(449)] ? l(1859) : " ") + "+" + x[l(1294)].humanize(this.diff), !this.useColors) return;
      const f = l(1571) + this[l(1644)];
      d.splice(1, 0, f, "color: inherit");
      let b = 0, h = 0;
      d[0][l(340)](/%[a-zA-Z%]/g, (m) => {
        m !== "%%" && (b++, m === "%c" && (h = b));
      }), d.splice(h, 0, f);
    }
    t[r(1546)] = console[r(2066)] || console[r(1546)] || (() => {
    });
    function n(d) {
      const l = r;
      try {
        d ? t[l(428)][l(1503)](l(2066), d) : t[l(428)][l(1298)](l(2066));
      } catch {
      }
    }
    function o() {
      const d = r;
      let l;
      try {
        l = t[d(428)][d(515)](d(2066)) || t[d(428)][d(515)]("DEBUG");
      } catch {
      }
      return !l && typeof process !== d(1714) && "env" in process && (l = process[d(2291)][d(1100)]), l;
    }
    function c() {
      try {
        return localStorage;
      } catch {
      }
    }
    x[r(1294)] = xo()(t);
    const { formatters: u } = x[r(1294)];
    u.j = function(d) {
      const l = r;
      try {
        return JSON.stringify(d);
      } catch (f) {
        return l(2803) + f.message;
      }
    };
  })(fx, fx.exports)), fx[i(1294)];
}
var ao = to();
const zs = Hs(ao);
zs[a(1538)]("*");
function ro(i, x) {
  const t = a, r = zs(i), e = (s, n) => async function(...o) {
    try {
      await x({ level: s, messages: o });
    } catch {
    }
  };
  return r[t(1546)] = e("log"), r;
}
const ix = ro("mesh:comfy", async ({ level: i, messages: x }) => {
  const t = a, { mcpMesh: r } = await Promise[t(2345)]().then(() => Y2);
  await r.getNode("uxp")[t(1446)].log({ level: i, messages: x });
});
globalThis[a(1249)] = globalThis.sdpppX2 || {};
const Ye = globalThis[a(1249)], so = { "preview.show": a(2609), "gateway.select_ai_service": a(1359), "provider.select.title": a(2119), "provider.comfyui.description": a(2735), "provider.replicate.description": a(1136), "provider.runninghub.description": a(516), "provider.google.description": a(1950), "task.waiting_upload": "正在等待图片上传...", "task.creating_task": a(1346), "task.running_duration": a(918), "task.cancelled": a(1174), "task.cancel_failed": "任务取消失败: {{error}}", "task.default_name": a(1836), "comfy.connect": "连接", "comfy.load_failed": a(2464), "comfy.loading": "ComfyUI加载中...", "comfy.channel_connecting": a(1986), "comfy.server_reconnecting": a(399), "comfy.version_mismatch": "Comfy侧SDPPP版本({{comfyVersion}})与插件({{pluginVersion}})不匹配，运行可能有问题", "comfy.cloud_recommend": a(1885), "comfy.your_workflows": a(2369), "comfy.refresh_workflows": a(294), "comfy.queue_progress": a(1265), "comfy.save": "保存", "comfy.refresh": "刷新", "comfy.stop_cancel_all": a(1864), "comfy.stop_auto_run": "停止自动运行", "comfy.start_auto_run": a(2729), "comfy.auto_run_status": a(1184), "comfy.run": "运行", "comfy.back": "返回", "comfy.uploading": a(2819), "comfy_simple.refreshing_preview": a(2542), "comfy.select_workflow": "选择工作流", "comfy.task.name": a(2341), "comfy.error.task_cancelled": a(1174), "comfy.task.processing_progress": a(2945), "comfy.help_tooltip": a(2645), "comfy.no_workflow_selected": a(2336), "comfy_simple.missing_url": "尚未配置 ComfyUI 连接，请先设置地址。", "comfy_simple.loading_webview": a(1899), "comfy_simple.http_error": "连接 ComfyUI 失败（HTTP {{code}}）", "comfy_simple.wait_connect": a(1144), "comfy_simple.loading": "工作流打开中", "comfy_simple.connection_required": a(1963), "comfy_simple.preview_empty": a(2578), "comfy_simple.progress.idle": "空闲", "comfy_simple.auto_run": "自动", "comfy_simple.workflow_quick": "快捷", "comfy_simple.multiplier.X1": "X1", "comfy_simple.multiplier.X2": "X2", "comfy_simple.multiplier.X4": "X4", "comfy_simple.multiplier.X10": a(2698), "comfy_simple.prompt_templates.manage_tooltip": "管理可复用的提示词模板", "comfy_simple.prompt_templates.button": "提示词", "comfy_simple.prompt_templates.save_error": a(303), "comfy_simple.prompt_templates.missing_key": a(2157), "comfy_simple.prompt_templates.missing_value": "请填写提示词内容。", "comfy_simple.prompt_templates.duplicate_key": a(2321), "comfy_simple.prompt_templates.save_success": a(2087), "comfy_simple.prompt_templates.delete_confirm_title": a(764), "comfy_simple.prompt_templates.delete_confirm_content": a(1339), "comfy_simple.prompt_templates.delete_success": a(2750), "comfy_simple.prompt_templates.add_title": "新增模板", "comfy_simple.prompt_templates.edit_title": "编辑模板", "comfy_simple.prompt_templates.modal_title": "提示词模板", "comfy_simple.prompt_templates.description": a(1327), "comfy_simple.prompt_templates.add_button": a(2012), "comfy_simple.prompt_templates.name_placeholder": a(1306), "comfy_simple.prompt_templates.value_placeholder": a(1585), "comfy_simple.fallback.title": a(2171), "comfy_simple.fallback.button": a(2171), "comfy_simple.prompt_templates.positive_label": a(823), "comfy_simple.prompt_templates.negative_label": a(378), "comfy_simple.prompt_templates.negative_placeholder": "负面提示词内容", "comfy_simple.prompt_templates.negative_empty": a(2920), "comfy_simple.prompt_templates.default_section": "默认模板", "comfy_simple.prompt_templates.default_empty": a(2688), "comfy_simple.prompt_templates.default_tag": "默认", "comfy_simple.prompt_templates.custom_section": a(641), "comfy_simple.prompt_templates.custom_empty": a(557), "comfy_simple.prompt_templates.applied_success": a(1604), "comfy_simple.prompt_templates.applied_failed": a(418), "comfy_simple.prompt_templates.apply_unavailable": a(2065), "comfy_simple.prompt_templates.apply_failed_missing_binding": "无法写入{{part}}提示词：未找到对应控件。", "comfy_simple.prompt_templates.apply_failed_caller_unavailable": a(1733), "comfy_simple.prompt_templates.apply_failed_set_error": a(284), "common.delete": "删除", "comfy_simple.preview_click_to_send": a(2633), "comfy_simple.workflow_select.empty": "暂无可用工作流。", "comfy_simple.workflow_select.select": "选择", "comfy_simple.workflow_select.selected": a(1217), "comfy_simple.workflow_select.current": "当前", "comfy_simple.workflow_select.load_failed": "获取工作流列表失败。", "comfy_simple.workflow_select.members_only": "（会员专属）", "boundary.title": a(1463), "boundary.tooltip": a(1393), "boundary.current_canvas": a(1583), "boundary.current_layer": a(478), "boundary.current_selection": a(896), "boundary.set_as_canvas": a(1886), "boundary.set_as_layer": a(2784), "boundary.set_as_selection": a(2738), "http.404": a(1819), "http.401": a(2124), "http.403": a(2391), "http.408": a(1826), "http.500": a(2470), "http.501": "未实现 (501)", "http.502": "网关错误 (502)", "http.503": a(936), "http.504": a(677), "http.unknown": a(1332), "runninghub.get_apikey": "点此获取RunningHub APIKey", "runninghub.apikey_placeholder": a(1703), "runninghub.app_id": "应用ID:", "runninghub.webapp_id_placeholder": a(2576), "runninghub.open_app": a(1969), "runninghub.execute": "执行", "runninghub.running": a(476), "runninghub.rh_coins": a(1116), "runninghub.current_tasks": "当前任务数:", "runninghub.help_tooltip": a(2645), "runninghub.stop_all": a(774), "runninghub.status.waiting": a(1656), "runninghub.status.running": a(2253), "runninghub.status.failed": a(2409), "runninghub.status.success": "执行成功", "image.auto_refetch": a(1132), "local_resource.selection.images": "图片", "runninghub.error.get_result_failed": a(1776), "runninghub.error.task_failed": "任务执行失败: {{error}}", "runninghub.error.task_incomplete": a(2096), "runninghub.error.account_status_http": a(1097), "runninghub.error.account_status_reason_unknown": "获取账户信息失败", "runninghub.error.account_status_failed": a(1334), "runninghub.error.form_data_http": a(1631), "runninghub.error.form_data_reason_unknown": a(1833), "runninghub.error.form_data_failed": a(2448), "runninghub.error.node_info_missing": a(1404), "runninghub.error.run_http": a(551), "runninghub.error.run_reason_default": a(2760), "runninghub.error.run_failed": a(1128), "runninghub.error.status_http": a(1762), "runninghub.error.status_reason_unknown": a(734), "runninghub.error.status_failed": a(2654), "runninghub.error.outputs_http": a(319), "runninghub.error.outputs_failed": "outputs API 调用失败 - {{reason}}", "runninghub.task.title": a(256), "runninghub.error.upload_http": a(2883), "runninghub.error.upload_reason_unknown": "文件上传失败", "runninghub.error.upload_failed": a(2132), "customapi.error.no_image_returned": a(2852), "customapi.error.openai_api": a(905), "customapi.error.input_required": a(1999), "customapi.error.generation_failed": a(468), "customapi.task.name.google": "Google Gemini - 图片生成", "customapi.task.name.openai": a(1001), "customapi.error.unsupported_image_input": a(1894), "replicate.get_apikey": a(2797), "replicate.apikey_placeholder": a(2878), "replicate.execute": "执行", "replicate.model_placeholder": a(2440), "replicate.help_tooltip": a(2645), "replicate.loading": "加载中...", "replicate.running": a(476), "replicate.stop": "停止", "liblib.get_apikey": "如何获取APIKey和API Secret", "liblib.execute": "执行", "common.close": "关闭", "common.save": "保存", "common.save_and_run": a(1127), "common.loading": a(435), "common.error": "错误", "common.error.unknown": a(2200), "common.error.task_creation_aborted": "任务创建已中止", "common.error.status_check_aborted": a(1754), "common.error.result_fetch_aborted": "结果获取已中止", "common.error.upload_aborted": a(1536), "common.success": "成功", "common.failed": "失败", "common.generating": a(2216), "common.cancel": "取消", "common.confirm": "确认", "common.options": "选项", "common.options_separator": a(1443), "upload_pass.error.unsupported_type": a(2260), "upload_pass.error.uploader_missing": a(334), webviewInForeground: a(1011), webviewInForeground2: a(2022), "auth.login_success": a(1921), "auth.username_label": a(2930), "auth.email_label": "邮箱: {{email}}", "auth.logout": a(411), "auth.login_required": "请登陆后使用插件", "image.send.select_position": a(1296), "image.send.sending": a(1801), "image.layer.new": "新图层", "image.layer.current": a(478), "image.layer.fit_to_current": a(1091), "image.layer.fit_to_selection": a(2732), "image.layer.fit_to_canvas": a(821), "image.shortcut_auth_required": a(2275), "image.shortcut_focus_required": "快捷键选图功能仅在插件窗口聚焦时可用", "image.get.select_image": "请选择要获取的图像", "image.get.entire_canvas": a(1583), "image.get.canvas": "画布", "image.get.current_layer": a(478), "image.get.current_layer_bounds": "仅当前图层范围", "image.get.selection_bounds": "仅选区范围", "image.get.canvas_bounds": a(887), "image.crop_by_selection": "按选区裁剪", "image.limit_size": "限制图片尺寸", "image.crop.none": a(2039), "image.crop.inpaint": a(636), "image.crop.outpaint": "正向裁剪(Outpaint)", "image.send_all": a(1146), "image.save_all": a(1168), "image.save_current": a(1679), "image.delete_current": "删除当前", "image.more_actions": a(856), "image.jump_to_last": "跳转到最后一个", "image.clear_all": a(1229), "image.send_to_ps": a(446), "image.download": "下载", "image.copy": "复制", "image.sending": a(1800), "image.sending_all": a(962), "mask.get.select_mask": "请选择要获取的遮罩", "mask.selection": "选区", "mask.current_layer_bounds": "当前图层范围", "mask.all": "全部", "mask.selection_exclude": a(692), "mask.current_layer_exclude": a(805), "mask.empty": "空", "widgetable.photoshop.deprecated_node": a(458), "work_boundary.error.empty_selection_mask": a(573), "work_boundary.error.primary_resource_missing": a(787), "work_boundary.error.mask_resource_missing": a(2544), "work_boundary.error.mask_apply_empty": a(1889), "document {{0}} not found": a(2398), "create document for preview": "创建预览文档", "resize document for preview": a(1095), "create document for sent images": a(746), "show sent images": a(998), "create layer failed": a(957), "layer not found {{0}}": a(2310), "layer not found: {{0}}": a(2310), "layer {{0}} is not a group": "图层 {{0}} 不是一个组", "no linked layer for {{0}}": a(2078), "no first related layer in {{0}}": "组 {{0}} 中没有第一个相关图层", "merge group failed": a(813), "get content of layer {{0}}": "获取图层 {{0}} 的内容", "get layer info": a(1924), "get_layer_info: layer_identify required": "get_layer_info: 需要 layer_identify", "get pixel of {{0}} failed": a(1549), "get selection failed": "获取选区失败", "invalid name: {{0}}": a(1840), "desire bounds is null": a(1328), "intersect or scaledDesire is null": "交集或缩放目标为空", 'only layer kind "TEXT" is supported, invalid layer: {{0}}': a(2060), "select layer": a(880), "run Photoshop Action": "sdppp 运行 Photoshop Action", "Action {{0}} not found": "Action {{0}} 未找到", "Action set {{0}} not found": a(1176), "set text to layer": a(1480), "ComfyManager not found, cannot reboot": a(1272), "Failed to reboot ComfyUI": a(1638), "image.upload.from_canvas": "画布", "image.upload.from_curlayer": a(478), "image.upload.from_selection": "选区", "image.upload.from_harddisk": "磁盘", "image.upload.clear": "清空", "image.upload.uploading": a(2233), "image.upload.syncing": a(824), "image.upload.no_images": a(842), "image.upload.error": a(2881), "image.upload.tooltip.more_options_hint": a(2527), "image.upload.tooltip.alt.crop": "+Alt 按选区裁剪", "image.upload.tooltip.alt.reverse": a(410), "image.upload.tooltip.image.canvas": a(2075), "image.upload.tooltip.image.curlayer": a(2127), "image.upload.tooltip.mask.curlayer": a(893), "image.upload.tooltip.mask.selection": a(533), "image.upload.tooltip.mask.canvas": a(743), "image.upload.tooltip.cut_action": a(1774), "image.upload.tooltip.scan_action": a(2150), "image.upload.tooltip.autosync.on": a(1287), "image.upload.tooltip.autosync.off": a(315), "image.upload.tooltip.sync_action": a(2722), "image.upload.autosync.fetching": a(2011), "image.upload.autosync.status.enabled": a(2173), "image.upload.autosync.status.disabled": a(2727), "image.upload.tooltip.current.canvas": a(585), "image.upload.tooltip.current.layer": a(2109), "image.upload.tooltip.current.layer_named": "当前选项：图层 {{layerName}}", "image.upload.tooltip.current.file": a(246), "image.upload.retry": "重试", "image.pack.local.button": a(1381), "image.pack.local.empty": a(842), "image.auto_send_enabled": "自动填入画布开启", "image.auto_send_disabled": a(1540), "image.upload.primary.auto": "自动取图中…", "image.upload.primary.manual": a(2871), "image.upload.primary.hint": a(1262), "image.upload.primary.cut": "裁剪", "image.upload.primary.scan": "扫描", "image.upload.primary.hint.line1": "本节点默认继承:", "image.upload.primary.hint.line2": "主图", "workflow.output.destination.title": a(1535), "workflow.output.destination.canvas": "全图", "image.upload.primary.advanced": a(2141), "image.upload.primary.advanced.modify": "修改", "image.upload.primary.advanced.reset": "重置", "image.upload.primary.advanced.local_file": a(2452), "image.upload.primary.advanced.content.canvas": "画布", "image.upload.primary.advanced.content.curlayer": "当前图层", "image.upload.primary.advanced.content.selection": "选区", "image.upload.primary.advanced.boundary.canvas": a(1039), "image.upload.primary.advanced.boundary.curlayer": a(1866), "image.upload.primary.advanced.boundary.selection": "选区边界", "image.upload.primary.advanced.boundary.primary": a(1946), "image.upload.source.file.tooltip": a(346), "image.upload.mode.file.label": "文件", "image.upload.mode.layer.label": "图层", "image.upload.mode.canvas.label": "画布", "image.upload.source.layer.tooltip": a(1090), "image.upload.source.canvas.tooltip": a(2136), "image.upload.dropHint": a(381), "image.upload.tooltip.clear_action": a(2891), "image.upload.status.layer.short_named": a(2928), "image.upload.status.layer.short": "图层", "image.upload.status.file.short": "本地文件", "image.upload.status.canvas.short": "画布", "image.upload.status.file.active": a(1163), "image.upload.status.file.resetHint": a(1660), "image.upload.status.mask.resetHint": a(997), "image.upload.status.mask.modified": a(1285), "image.upload.status.boundary.resetHint": a(2515), "image.upload.status.boundary.modified": a(258), "image.upload.status.boundary.docMismatch": a(1551), "image.upload.mask.button": a(2543), "image.upload.mask.selection": a(2543), "image.upload.mask.layer": a(2748), "image.upload.remove_slot": a(912), "image.upload.add_slot": a(2926), "video.local.button": a(1373), "video.local.empty": "暂无视频", "video.local.remove": "清除视频", "source.source": "来源", "source.content": "内容", "source.boundary": "范围", "source.mask": "遮罩", "source.disk": "磁盘", "source.remote": "远端", "source.unknown": "未知", "source.ps_image": a(563), "source.ps_mask": "PS遮罩", "source.canvas": a(1583), "source.current_layer": "当前图层", "source.selection": "选区", "source.quality_percent": a(2256), "source.crop.positive": a(2225), "source.crop.negative": a(2290), "source.reverse": "反转", "send_images.create_document": a(2018), "send_images.create_document_failed": a(1616), "photoshop.no_active_document": a(1993), "photoshop.rectangle_coordinates_required": a(1701), "photoshop.create_guide_frame": a(1275), "photoshop.clear_guide_frame": a(2176), "photoshop.invalid_action": a(2716), "photoshop.file_not_found": "文件未找到: {{path}}", "photoshop.failed_to_open_file_as_document": a(2841), "photoshop.invalid_boundary": "无效边界: 左边必须小于右边，上边必须小于下边", "photoshop.failed_to_open_image_file": a(324), "photoshop.open_images_from_file": a(1351), "photoshop.failed_to_create_document_from_file": "无法从文件创建文档", "google.field.image_input": a(2937), "google.field.prompt": a(2168), "google.field.batch_count": a(1552), "google.field.images_per_batch": a(2083), "google.status.success": "成功", "google.status.failed": "失败", "google.status.generating": "生成中", "google.apikey_placeholder": a(989), "google.baseurl_placeholder": a(289), "google.get_apikey": a(1478), "google.help_tooltip": a(1567), "google.model_name": a(1067), "google.model_label": "模型", "google.model_placeholder": a(682), "google.stop": "停止", "google.loading": a(435), "google.generating": a(2216), "google.generate": "生成", "image.auto_toggle": "自动", "image.import_as_smartobject": a(2149), "image.import_as_newdoc": a(1793), "image.boundary": "边界", "image.import_tip": a(1104), "auth.guest_login_success": a(2131), "boundary.canvas": "画布", "boundary.select_boundary": a(2903), "boundary.selection": "选区", "boundary.max_size": a(2296), "boundary.max_size_error": a(413), "boundary.max_size_hint": a(1429), "boundary.max_size_placeholder": a(1429), "boundary.no_limit": "不限", "boundary.image_quality": a(1172), "boundary.image_quality_required": a(2521), "boundary.image_quality_range": a(702), "boundary.preview_main_image": a(486), "boundary.preview_select": a(822), "boundary.preview_alt": a(772), "boundary.preview_placeholder": a(1861), "boundary.settings": a(2129), "convert widget {0} failed:": a(2223), "document {0} not found": a(1038), "image.document.new": a(1699), "image.layer.smart_object": a(2751), "layer not found {0}": a(2237), "photoshop.invalid_boundary_type": a(1815), "photoshop.no_active_layer": a(1191), "dialog.image_source.title": a(2070), "dialog.image_source.primary_canvas": a(282), "dialog.image_source.primary_curlayer": a(2900), "dialog.image_source.canvas_canvas": a(951), "dialog.image_source.canvas_curlayer": a(2626), "dialog.image_source.curlayer_canvas": a(2094), "dialog.image_source.curlayer_curlayer": "以当前图层边界获取当前图层", "dialog.image_source.local_file": a(2452), "dialog.simple_source.title": a(243), "dialog.simple_source.canvas": "画布", "dialog.simple_source.current_layer": "当前图层", "dialog.simple_source.local_file": a(1934), "dialog.simple_source.no_active_layer": a(1309), "dialog.simple_source.pick_error": "选择文件失败，请重试" }, no = { "preview.show": a(953), "gateway.select_ai_service": a(1601), "provider.select.title": a(316), "provider.comfyui.description": a(483), "provider.replicate.description": a(1495), "provider.runninghub.description": "Model with affordable price, abundant community applications", "provider.google.description": a(2442), "task.waiting_upload": "Waiting for image upload...", "task.creating_task": a(2320), "task.running_duration": "Running for {{duration}} secs, {{message}}", "task.cancelled": a(1024), "task.cancel_failed": a(792), "task.default_name": a(827), "comfy.connect": "Connect", "comfy.load_failed": a(749), "comfy.loading": a(1411), "comfy.channel_connecting": "Channel connecting...", "comfy.server_reconnecting": a(1247), "comfy.version_mismatch": "Comfy SDPPP version ({{comfyVersion}}) does not match plugin ({{pluginVersion}}), may cause issues", "comfy.cloud_recommend": a(1907), "comfy.your_workflows": a(1407), "comfy.refresh_workflows": a(721), "comfy.queue_progress": a(908), "comfy.save": "Save", "comfy.refresh": "Refresh", "comfy.stop_cancel_all": "Stop and cancel all", "comfy.stop_auto_run": "Stop auto run", "comfy.start_auto_run": a(2610), "comfy.auto_run_status": a(591), "comfy.run": a(1055), "comfy.back": a(2629), "comfy.uploading": a(1875), "comfy_simple.refreshing_preview": "Refreshing preview...", "comfy.select_workflow": a(1958), "comfy.task.name": "ComfyUI - {{workflowName}}", "comfy.error.task_cancelled": "Task cancelled", "comfy.task.processing_progress": a(1835), "comfy.help_tooltip": a(2647), "comfy.no_workflow_selected": a(2934), "comfy_simple.missing_url": a(292), "comfy_simple.loading_webview": "Connecting to ComfyUI...", "comfy_simple.http_error": a(2775), "comfy_simple.wait_connect": a(2659), "comfy_simple.loading": a(810), "comfy_simple.connection_required": a(1064), "comfy_simple.preview_empty": a(2855), "comfy_simple.progress.idle": a(2037), "comfy_simple.auto_run": a(2568), "comfy_simple.workflow_quick": a(1472), "comfy_simple.multiplier.X1": "X1", "comfy_simple.multiplier.X2": "X2", "comfy_simple.multiplier.X4": "X4", "comfy_simple.multiplier.X10": "X10", "comfy_simple.prompt_templates.manage_tooltip": a(1896), "comfy_simple.prompt_templates.button": a(2058), "comfy_simple.prompt_templates.save_error": a(1677), "comfy_simple.prompt_templates.missing_key": "Please provide a template name.", "comfy_simple.prompt_templates.missing_value": a(552), "comfy_simple.prompt_templates.duplicate_key": a(1372), "comfy_simple.prompt_templates.save_success": a(1317), "comfy_simple.prompt_templates.delete_confirm_title": a(627), "comfy_simple.prompt_templates.delete_confirm_content": a(1756), "comfy_simple.prompt_templates.delete_success": a(1395), "comfy_simple.prompt_templates.add_title": "Add Template", "comfy_simple.prompt_templates.edit_title": a(1193), "comfy_simple.prompt_templates.modal_title": a(2228), "comfy_simple.prompt_templates.description": a(2069), "comfy_simple.prompt_templates.add_button": a(1479), "comfy_simple.prompt_templates.name_placeholder": "Template name", "comfy_simple.prompt_templates.value_placeholder": a(660), "comfy_simple.fallback.title": a(1587), "comfy_simple.fallback.button": a(1587), "comfy_simple.prompt_templates.positive_label": a(750), "comfy_simple.prompt_templates.negative_label": a(456), "comfy_simple.prompt_templates.negative_placeholder": a(2451), "comfy_simple.prompt_templates.negative_empty": a(2454), "comfy_simple.prompt_templates.default_section": a(2172), "comfy_simple.prompt_templates.default_empty": a(1178), "comfy_simple.prompt_templates.default_tag": a(1074), "comfy_simple.prompt_templates.custom_section": a(351), "comfy_simple.prompt_templates.custom_empty": a(2614), "comfy_simple.prompt_templates.applied_success": a(2622), "comfy_simple.prompt_templates.applied_failed": a(604), "comfy_simple.prompt_templates.apply_unavailable": a(2316), "comfy_simple.prompt_templates.apply_failed_missing_binding": a(812), "comfy_simple.prompt_templates.apply_failed_caller_unavailable": a(259), "comfy_simple.prompt_templates.apply_failed_set_error": a(2284), "common.delete": a(2457), "comfy_simple.preview_click_to_send": a(2441), "comfy_simple.workflow_select.empty": a(2346), "comfy_simple.workflow_select.select": a(2924), "comfy_simple.workflow_select.selected": a(1260), "comfy_simple.workflow_select.current": a(2821), "comfy_simple.workflow_select.load_failed": a(2254), "comfy_simple.workflow_select.members_only": a(798), "boundary.title": a(268), "boundary.tooltip": a(1654), "boundary.current_canvas": "Entire Canvas", "boundary.current_layer": "Current Layer", "boundary.current_selection": "Current Selection", "boundary.set_as_canvas": a(979), "boundary.set_as_layer": a(569), "boundary.set_as_selection": a(2224), "http.404": a(529), "http.401": a(816), "http.403": a(1324), "http.408": a(1483), "http.500": a(2590), "http.501": "Not implemented (501)", "http.502": a(2128), "http.503": a(503), "http.504": a(2407), "http.unknown": a(320), "runninghub.get_apikey": a(475), "runninghub.apikey_placeholder": "Enter your RunningHub API Key", "runninghub.app_id": a(2665), "runninghub.webapp_id_placeholder": a(1547), "runninghub.open_app": a(2528), "runninghub.execute": a(2911), "runninghub.running": a(1651), "runninghub.rh_coins": a(1897), "runninghub.current_tasks": a(1893), "runninghub.help_tooltip": a(2647), "runninghub.stop_all": "Stop all", "runninghub.status.waiting": a(671), "runninghub.status.running": a(2208), "runninghub.status.failed": "Failed", "runninghub.status.success": a(2139), "image.auto_refetch": a(855), "local_resource.selection.images": a(1245), "runninghub.error.get_result_failed": a(1910), "runninghub.error.task_failed": a(1498), "runninghub.error.task_incomplete": "Task incomplete, current status: {{status}}", "runninghub.error.account_status_http": "getAccountStatus API failed - HTTP error! status: {{status}}", "runninghub.error.account_status_reason_unknown": a(2189), "runninghub.error.account_status_failed": a(407), "runninghub.error.form_data_http": "getNodes API failed - HTTP error! status: {{status}}", "runninghub.error.form_data_reason_unknown": a(2273), "runninghub.error.form_data_failed": "getNodes API failed - {{reason}}", "runninghub.error.node_info_missing": a(1202), "runninghub.error.run_http": a(2144), "runninghub.error.run_reason_default": a(724), "runninghub.error.run_failed": a(678), "runninghub.error.status_http": "status API failed - HTTP error! status: {{status}}", "runninghub.error.status_reason_unknown": a(2512), "runninghub.error.status_failed": "status API failed - {{reason}}", "runninghub.error.outputs_http": a(2565), "runninghub.error.outputs_failed": a(2597), "runninghub.task.title": a(256), "runninghub.error.upload_http": a(2773), "runninghub.error.upload_reason_unknown": a(1689), "runninghub.error.upload_failed": "uploadImage API failed - {{reason}}", "customapi.error.no_image_returned": a(672), "customapi.error.openai_api": "OpenAI API error", "customapi.error.input_required": a(1258), "customapi.error.generation_failed": a(1003), "customapi.task.name.google": a(762), "customapi.task.name.openai": "OpenAI - Image Edit", "customapi.error.unsupported_image_input": a(2908), "replicate.get_apikey": a(1799), "replicate.apikey_placeholder": a(1062), "replicate.execute": "Execute", "replicate.model_placeholder": "Paste your model name", "replicate.help_tooltip": a(2647), "replicate.loading": "Loading...", "replicate.running": a(1651), "replicate.stop": a(1521), "liblib.get_apikey": "How to get APIKey and API Secret", "liblib.execute": a(2911), "common.close": a(344), "common.save": a(2778), "common.save_and_run": "Save and run immediately", "common.loading": a(1364), "common.error": "Error", "common.error.unknown": a(2662), "common.error.task_creation_aborted": a(1620), "common.error.status_check_aborted": "Status check aborted", "common.error.result_fetch_aborted": "Result fetch aborted", "common.error.upload_aborted": a(1507), "common.success": "Success", "common.failed": "Failed", "common.generating": a(2366), "common.cancel": a(1935), "common.confirm": "Confirm", "common.options": a(1313), "common.options_separator": a(1716), "upload_pass.error.unsupported_type": "Unsupported upload type: {{type}}", "upload_pass.error.uploader_missing": "Uploader not set", webviewInForeground: a(1790), webviewInForeground2: a(2822), "auth.login_success": a(2946), "auth.username_label": a(830), "auth.email_label": "Email: {{email}}", "auth.logout": a(1556), "auth.login_required": "Please login to use the plugin", "image.send.select_position": "Please select the position to send image", "image.send.sending": "Sending image...", "image.layer.new": a(1704), "image.layer.current": a(505), "image.layer.fit_to_current": a(2272), "image.layer.fit_to_selection": "Fit to selection", "image.layer.fit_to_canvas": a(1851), "image.shortcut_auth_required": a(706), "image.shortcut_focus_required": a(1987), "image.get.select_image": "Please select the image to get", "image.get.entire_canvas": "Entire Canvas", "image.get.canvas": "Canvas", "image.get.current_layer": a(505), "image.get.current_layer_bounds": a(2267), "image.get.selection_bounds": a(2014), "image.get.canvas_bounds": a(2519), "image.crop_by_selection": a(1857), "image.limit_size": "Limit image size", "image.crop.none": a(2782), "image.crop.inpaint": a(1418), "image.crop.outpaint": a(2287), "image.send_all": a(2444), "image.save_all": a(2261), "image.save_current": a(1727), "image.delete_current": a(862), "image.more_actions": a(398), "image.jump_to_last": a(1322), "image.clear_all": "Clear all", "image.send_to_ps": a(477), "image.download": a(419), "image.copy": a(606), "image.sending": a(904), "image.sending_all": a(2734), "mask.get.select_mask": a(2289), "mask.selection": a(1057), "mask.current_layer_bounds": a(784), "mask.all": "All", "mask.selection_exclude": a(2249), "mask.current_layer_exclude": a(2870), "mask.empty": a(2454), "widgetable.photoshop.deprecated_node": a(1278), "work_boundary.error.empty_selection_mask": a(2120), "work_boundary.error.primary_resource_missing": a(2479), "work_boundary.error.mask_resource_missing": "Mask resource is missing", "work_boundary.error.mask_apply_empty": "Mask apply returned empty resource", "document {{0}} not found": a(600), "create document for preview": a(1224), "resize document for preview": a(1072), "create document for sent images": a(321), "show sent images": a(349), "create layer failed": a(1119), "layer not found {{0}}": a(1706), "layer not found: {{0}}": a(1671), "layer {{0}} is not a group": a(370), "no linked layer for {{0}}": a(2511), "no first related layer in {{0}}": "No first related layer in {{0}}", "merge group failed": a(2857), "get content of layer {{0}}": "Get content of layer {{0}}", "get layer info": "Get layer info", "get_layer_info: layer_identify required": a(406), "get pixel of {{0}} failed": a(1883), "get selection failed": a(1068), "invalid name: {{0}}": a(2505), "desire bounds is null": "Desire bounds is null", "intersect or scaledDesire is null": a(279), 'only layer kind "TEXT" is supported, invalid layer: {{0}}': a(2207), "select layer": a(527), "run Photoshop Action": a(1839), "Action {{0}} not found": "Action {{0}} was not found", "Action set {{0}} not found": a(808), "set text to layer": a(921), "ComfyManager not found, cannot reboot": a(2538), "Failed to reboot ComfyUI": "Unable to reboot ComfyUI", "image.upload.from_canvas": a(2384), "image.upload.from_curlayer": "Current Layer", "image.upload.from_selection": a(1057), "image.upload.from_harddisk": a(1040), "image.upload.clear": a(990), "image.upload.uploading": a(1816), "image.upload.syncing": "Syncing assets", "image.upload.no_images": a(1302), "image.upload.error": a(1290), "image.upload.tooltip.alt.crop": "+Alt crop by selection", "image.upload.tooltip.alt.reverse": "+Alt reversed mask", "image.upload.tooltip.image.canvas": a(974), "image.upload.tooltip.image.curlayer": a(2331), "image.upload.tooltip.mask.canvas": a(1347), "image.upload.tooltip.mask.curlayer": a(939), "image.upload.tooltip.mask.selection": a(361), "image.upload.tooltip.cut_action": a(651), "image.upload.tooltip.scan_action": a(2397), "image.upload.tooltip.autosync.on": a(2153), "image.upload.tooltip.autosync.off": "Auto Sync: off", "image.upload.tooltip.sync_action": a(711), "image.upload.tooltip.more_options_hint": "Hold Shift for more options; Ctrl for single fetch", "image.upload.tooltip.current.canvas": a(761), "image.upload.tooltip.current.layer": a(965), "image.upload.tooltip.current.layer_named": "Current selection: Layer {{layerName}}", "image.upload.tooltip.current.file": a(2774), "image.upload.autosync.fetching": a(1403), "image.upload.autosync.status.enabled": a(895), "image.upload.autosync.status.disabled": a(2831), "image.upload.retry": a(405), "image.pack.local.button": "Local image pack", "image.pack.local.empty": "No images yet", "image.auto_send_enabled": a(1203), "image.auto_send_disabled": a(759), "image.upload.primary.auto": "Auto fetching…", "image.upload.primary.manual": a(2333), "image.upload.primary.cut": a(341), "image.upload.primary.scan": a(1525), "image.upload.primary.hint": "This node defaults to current layer + mask", "image.upload.primary.hint.line1": a(1586), "image.upload.primary.hint.line2": a(2009), "workflow.output.destination.title": a(2761), "workflow.output.destination.canvas": a(647), "image.upload.primary.advanced": "Advanced selection", "image.upload.primary.advanced.modify": "Modify", "image.upload.primary.advanced.reset": "Reset", "image.upload.primary.advanced.local_file": a(1965), "image.upload.primary.advanced.content.canvas": a(2384), "image.upload.primary.advanced.content.curlayer": a(1388), "image.upload.primary.advanced.content.selection": a(1057), "image.upload.primary.advanced.boundary.canvas": a(1962), "image.upload.primary.advanced.boundary.curlayer": a(2349), "image.upload.primary.advanced.boundary.selection": a(1152), "image.upload.primary.advanced.boundary.primary": "Primary boundary", "image.upload.mode.file.label": "File", "image.upload.mode.layer.label": "Layer", "image.upload.mode.canvas.label": a(2384), "image.upload.source.file.tooltip": a(359), "image.upload.source.layer.tooltip": a(2657), "image.upload.source.canvas.tooltip": "Use entire canvas", "image.upload.dropHint": a(2055), "image.upload.tooltip.clear_action": a(769), "image.upload.status.layer.short_named": a(1157), "image.upload.status.layer.short": "Layer", "image.upload.status.file.short": a(1965), "image.upload.status.canvas.short": a(2384), "image.upload.status.file.active": a(2350), "image.upload.status.file.resetHint": a(756), "image.upload.status.mask.resetHint": a(1365), "image.upload.status.mask.modified": a(1320), "image.upload.status.boundary.resetHint": a(972), "image.upload.status.boundary.modified": a(2263), "image.upload.status.boundary.docMismatch": a(2798), "image.upload.mask.button": a(652), "image.upload.mask.selection": a(652), "image.upload.mask.layer": "Layer mask", "image.upload.remove_slot": a(2661), "image.upload.add_slot": a(1211), "video.local.button": "Local video", "video.local.empty": "No videos yet", "video.local.remove": a(554), "source.source": a(471), "source.content": a(519), "source.boundary": "Bounds", "source.mask": a(910), "source.disk": a(1040), "source.remote": a(1030), "source.unknown": a(1874), "source.ps_image": "PS", "source.ps_mask": "PS", "source.canvas": a(2384), "source.current_layer": "CurLayer", "source.selection": a(1057), "source.quality_percent": a(2091), "source.crop.positive": a(1619), "source.crop.negative": "Negative Crop", "source.reverse": a(2792), "send_images.create_document": a(328), "send_images.create_document_failed": a(926), "photoshop.no_active_document": "No active document", "photoshop.rectangle_coordinates_required": a(2081), "photoshop.create_guide_frame": a(2297), "photoshop.clear_guide_frame": a(2882), "photoshop.invalid_action": "Invalid action: {{action}}", "photoshop.file_not_found": a(1909), "photoshop.failed_to_open_file_as_document": "Failed to open file as document: {{path}}", "photoshop.invalid_boundary": a(274), "photoshop.failed_to_open_image_file": a(760), "photoshop.open_images_from_file": a(305), "photoshop.failed_to_create_document_from_file": a(2089), "google.field.image_input": "Input Image", "google.field.prompt": "Prompt", "google.field.batch_count": a(1304), "google.field.images_per_batch": a(1142), "google.status.success": a(2139), "google.status.failed": "Failed", "google.status.generating": a(504), "google.apikey_placeholder": a(2757), "google.get_apikey": a(2388), "google.baseurl_placeholder": a(1036), "google.help_tooltip": a(2830), "google.model_name": a(1805), "google.model_label": a(1291), "google.model_placeholder": "Select a model", "google.stop": "Stop", "google.loading": a(1364), "google.generating": a(2366), "google.generate": a(2680), "image.auto_toggle": a(2074), "image.import_as_smartobject": a(379), "image.import_as_newdoc": a(2884), "image.boundary": a(286), "image.import_tip": a(2415), "auth.guest_login_success": "Guest login successful", "boundary.canvas": a(2384), "boundary.select_boundary": a(593), "boundary.selection": a(1057), "boundary.max_size": a(623), "boundary.max_size_error": a(2721), "boundary.max_size_hint": a(820), "boundary.max_size_placeholder": a(820), "boundary.no_limit": a(2424), "boundary.image_quality": "Image quality (%)", "boundary.image_quality_required": "Enter a quality percentage", "boundary.image_quality_range": a(1145), "boundary.preview_main_image": a(598), "boundary.preview_select": a(2892), "boundary.preview_alt": a(854), "boundary.preview_placeholder": "Click to use current selection", "boundary.settings": "Adjust input settings", "convert widget {0} failed:": a(2240), "document {0} not found": a(2250), "image.document.new": a(2280), "image.layer.smart_object": a(1232), "layer not found {0}": a(1254), "photoshop.invalid_boundary_type": a(922), "photoshop.no_active_layer": "No active layer", "dialog.image_source.title": "Select Image Source", "dialog.image_source.primary_canvas": "Fetch canvas with primary boundary", "dialog.image_source.primary_curlayer": a(924), "dialog.image_source.canvas_canvas": a(668), "dialog.image_source.canvas_curlayer": a(469), "dialog.image_source.curlayer_canvas": a(818), "dialog.image_source.curlayer_curlayer": "Fetch current layer with current-layer boundary", "dialog.image_source.local_file": a(2506), "dialog.simple_source.title": "Select Source", "dialog.simple_source.canvas": a(2384), "dialog.simple_source.current_layer": "Current Layer", "dialog.simple_source.local_file": a(1681), "dialog.simple_source.no_active_layer": "No active layer available", "dialog.simple_source.pick_error": a(1750) }, b0 = (i) => typeof i === a(1019), Je = () => {
  const i = a;
  let x, t;
  const r = new Promise((e, s) => {
    x = e, t = s;
  });
  return r[i(2345)] = x, r[i(640)] = t, r;
}, za = (i) => i == null ? "" : "" + i, io = (i, x, t) => {
  i[a(1188)]((e) => {
    x[e] && (t[e] = x[e]);
  });
}, oo = /###/g, Ua = (i) => i && i[a(1112)](a(2436)) > -1 ? i.replace(oo, ".") : i, Va = (i) => !i || b0(i), ex = (i, x, t) => {
  const r = a, e = b0(x) ? x[r(1160)](".") : x;
  let s = 0;
  for (; s < e[r(1667)] - 1; ) {
    if (Va(i)) return {};
    const n = Ua(e[s]);
    !i[n] && t && (i[n] = new t()), Object[r(1523)][r(1687)].call(i, n) ? i = i[n] : i = {}, ++s;
  }
  return Va(i) ? {} : { obj: i, k: Ua(e[s]) };
}, Za = (i, x, t) => {
  const r = a, { obj: e, k: s } = ex(i, x, Object);
  if (e !== void 0 || x[r(1667)] === 1) {
    e[s] = t;
    return;
  }
  let n = x[x[r(1667)] - 1], o = x[r(2419)](0, x[r(1667)] - 1), c = ex(i, o, Object);
  for (; c[r(452)] === void 0 && o[r(1667)]; )
    n = o[o[r(1667)] - 1] + "." + n, o = o[r(2419)](0, o[r(1667)] - 1), c = ex(i, o, Object), c != null && c[r(452)] && typeof c.obj[c.k + "." + n] !== r(1714) && (c[r(452)] = void 0);
  c[r(452)][c.k + "." + n] = t;
}, co = (i, x, t, r) => {
  const { obj: e, k: s } = ex(i, x, Object);
  e[s] = e[s] || [], e[s].push(t);
}, Cx = (i, x) => {
  const t = a, { obj: r, k: e } = ex(i, x);
  if (r && Object[t(1523)][t(1687)][t(1512)](r, e))
    return r[e];
}, uo = (i, x, t) => {
  const r = Cx(i, t);
  return r !== void 0 ? r : Cx(x, t);
}, Us = (i, x, t) => {
  const r = a;
  for (const e in x)
    e !== "__proto__" && e !== r(1405) && (e in i ? b0(i[e]) || i[e] instanceof String || b0(x[e]) || x[e] instanceof String ? t && (i[e] = x[e]) : Us(i[e], x[e], t) : i[e] = x[e]);
  return i;
}, He = (i) => i[a(340)](/[\-\[\]\/\{\}\(\)\*\+\?\.\\\^\$\|]/g, a(1046));
var lo = { "&": a(2002), "<": a(455), ">": a(2461), '"': a(1343), "'": a(886), "/": a(659) };
const fo = (i) => {
  const x = a;
  return b0(i) ? i[x(340)](/[&<>"'\/]/g, (t) => lo[t]) : i;
};
class ho {
  constructor(x) {
    const t = a;
    this[t(1732)] = x, this[t(2422)] = /* @__PURE__ */ new Map(), this.regExpQueue = [];
  }
  [a(1434)](x) {
    const t = a, r = this.regExpMap[t(2917)](x);
    if (r !== void 0) return r;
    const e = new RegExp(x);
    return this[t(1831)].length === this.capacity && this[t(2422)][t(2764)](this.regExpQueue[t(2846)]()), this[t(2422)].set(x, e), this[t(1831)][t(528)](x), e;
  }
}
const po = [" ", ",", "?", "!", ";"], mo = new ho(20), bo = (i, x, t) => {
  const r = a;
  x = x || "", t = t || "";
  const e = po[r(2534)]((o) => x.indexOf(o) < 0 && t[r(1112)](o) < 0);
  if (e[r(1667)] === 0) return !0;
  const s = mo[r(1434)]("(" + e[r(1753)]((o) => o === "?" ? "\\?" : o)[r(1255)]("|") + ")");
  let n = !s[r(700)](i);
  if (!n) {
    const o = i[r(1112)](t);
    o > 0 && !s.test(i[r(1978)](0, o)) && (n = !0);
  }
  return n;
}, Jt = (i, x, t = ".") => {
  const r = a;
  if (!i) return;
  if (i[x])
    return Object.prototype.hasOwnProperty[r(1512)](i, x) ? i[x] : void 0;
  const e = x[r(1160)](t);
  let s = i;
  for (let n = 0; n < e[r(1667)]; ) {
    if (!s || typeof s != "object") return;
    let o, c = "";
    for (let u = n; u < e[r(1667)]; ++u)
      if (u !== n && (c += t), c += e[u], o = s[c], o !== void 0) {
        if (["string", r(329), "boolean"][r(1112)](typeof o) > -1 && u < e[r(1667)] - 1) continue;
        n += u - n + 1;
        break;
      }
    s = o;
  }
  return s;
}, sx = (i) => i == null ? void 0 : i[a(340)]("_", "-"), go = { type: a(2047), log(i) {
  const x = a;
  this[x(1845)](x(1546), i);
}, warn(i) {
  const x = a;
  this[x(1845)](x(1842), i);
}, error(i) {
  this[a(1845)]("error", i);
}, output(i, x) {
  var t, r;
  (r = (t = console == null ? void 0 : console[i]) == null ? void 0 : t.apply) == null || r.call(t, console, x);
} };
class Fx {
  constructor(x, t = {}) {
    this.init(x, t);
  }
  [a(2305)](x, t = {}) {
    const r = a;
    this[r(2214)] = t[r(2214)] || r(2912), this[r(2047)] = x || go, this.options = t, this[r(2066)] = t[r(2066)];
  }
  [a(1546)](...x) {
    const t = a;
    return this[t(2285)](x, t(1546), "", !0);
  }
  warn(...x) {
    const t = a;
    return this[t(2285)](x, t(1842), "", !0);
  }
  [a(1033)](...x) {
    const t = a;
    return this[t(2285)](x, t(1033), "");
  }
  [a(1642)](...x) {
    const t = a;
    return this[t(2285)](x, t(1842), t(481), !0);
  }
  [a(2285)](x, t, r, e) {
    const s = a;
    return e && !this[s(2066)] ? null : (b0(x[0]) && (x[0] = "" + r + this[s(2214)] + " " + x[0]), this[s(2047)][t](x));
  }
  [a(1186)](x) {
    const t = a;
    return new Fx(this[t(2047)], { prefix: this[t(2214)] + ":" + x + ":", ...this.options });
  }
  [a(539)](x) {
    const t = a;
    return x = x || this[t(891)], x[t(2214)] = x[t(2214)] || this[t(2214)], new Fx(this[t(2047)], x);
  }
}
var he = new Fx();
class Ax {
  constructor() {
    const x = a;
    this[x(250)] = {};
  }
  on(x, t) {
    const r = a;
    return x[r(1160)](" ")[r(1188)]((e) => {
      const s = r;
      this.observers[e] || (this[s(250)][e] = /* @__PURE__ */ new Map());
      const n = this[s(250)][e][s(2917)](t) || 0;
      this[s(250)][e].set(t, n + 1);
    }), this;
  }
  [a(705)](x, t) {
    const r = a;
    if (this[r(250)][x]) {
      if (!t) {
        delete this.observers[x];
        return;
      }
      this[r(250)][x].delete(t);
    }
  }
  [a(537)](x, ...t) {
    const r = a;
    this[r(250)][x] && Array.from(this[r(250)][x][r(1113)]()).forEach(([s, n]) => {
      for (let o = 0; o < n; o++)
        s(...t);
    }), this.observers["*"] && Array[r(2809)](this[r(250)]["*"][r(1113)]())[r(1188)](([s, n]) => {
      const o = r;
      for (let c = 0; c < n; c++)
        s[o(758)](s, [x, ...t]);
    });
  }
}
class Ba extends Ax {
  constructor(x, t = { ns: [a(1594)], defaultNS: "translation" }) {
    const r = a;
    super(), this[r(782)] = x || {}, this[r(891)] = t, this[r(891)][r(1515)] === void 0 && (this[r(891)].keySeparator = "."), this[r(891)][r(2271)] === void 0 && (this[r(891)].ignoreJSONStructure = !0);
  }
  [a(1375)](x) {
    const t = a;
    this[t(891)].ns[t(1112)](x) < 0 && this[t(891)].ns[t(528)](x);
  }
  [a(2003)](x) {
    const t = a, r = this[t(891)].ns[t(1112)](x);
    r > -1 && this[t(891)].ns[t(2383)](r, 1);
  }
  [a(1497)](x, t, r, e = {}) {
    var d, l;
    const s = a, n = e.keySeparator !== void 0 ? e[s(1515)] : this[s(891)][s(1515)], o = e[s(2271)] !== void 0 ? e.ignoreJSONStructure : this[s(891)][s(2271)];
    let c;
    x[s(1112)](".") > -1 ? c = x[s(1160)](".") : (c = [x, t], r && (Array[s(1683)](r) ? c[s(528)](...r) : b0(r) && n ? c[s(528)](...r[s(1160)](n)) : c[s(528)](r)));
    const u = Cx(this[s(782)], c);
    return !u && !t && !r && x.indexOf(".") > -1 && (x = c[0], t = c[1], r = c[s(2419)](2)[s(1255)](".")), u || !o || !b0(r) ? u : Jt((l = (d = this[s(782)]) == null ? void 0 : d[x]) == null ? void 0 : l[t], r, n);
  }
  addResource(x, t, r, e, s = { silent: !1 }) {
    const n = a, o = s[n(1515)] !== void 0 ? s[n(1515)] : this[n(891)][n(1515)];
    let c = [x, t];
    r && (c = c[n(572)](o ? r[n(1160)](o) : r)), x[n(1112)](".") > -1 && (c = x[n(1160)]("."), e = t, t = c[1]), this[n(1375)](t), Za(this[n(782)], c, e), s.silent || this[n(537)](n(395), x, t, r, e);
  }
  addResources(x, t, r, e = { silent: !1 }) {
    const s = a;
    for (const n in r)
      (b0(r[n]) || Array.isArray(r[n])) && this[s(466)](x, t, n, r[n], { silent: !0 });
    e[s(1684)] || this.emit(s(395), x, t, r);
  }
  [a(2118)](x, t, r, e, s, n = { silent: !1, skipCopy: !1 }) {
    const o = a;
    let c = [x, t];
    x[o(1112)](".") > -1 && (c = x[o(1160)]("."), e = r, r = t, t = c[1]), this[o(1375)](t);
    let u = Cx(this[o(782)], c) || {};
    n[o(914)] || (r = JSON[o(1198)](JSON.stringify(r))), e ? Us(u, r, s) : u = { ...u, ...r }, Za(this[o(782)], c, u), n.silent || this[o(537)](o(395), x, t, r);
  }
  [a(493)](x, t) {
    const r = a;
    this[r(1852)](x, t) && delete this[r(782)][x][t], this[r(2003)](t), this[r(537)](r(473), x, t);
  }
  [a(1852)](x, t) {
    return this[a(1497)](x, t) !== void 0;
  }
  getResourceBundle(x, t) {
    const r = a;
    return t || (t = this.options.defaultNS), this[r(1497)](x, t);
  }
  [a(440)](x) {
    return this.data[x];
  }
  [a(2769)](x) {
    const t = a, r = this[t(440)](x);
    return !!(r && Object[t(1400)](r) || [])[t(2408)]((s) => r[s] && Object.keys(r[s])[t(1667)] > 0);
  }
  toJSON() {
    return this.data;
  }
}
var Vs = { processors: {}, addPostProcessor(i) {
  this.processors[i.name] = i;
}, handle(i, x, t, r, e) {
  const s = a;
  return i[s(1188)]((n) => {
    var c;
    const o = s;
    x = ((c = this.processors[n]) == null ? void 0 : c[o(1728)](x, t, r, e)) ?? x;
  }), x;
} };
const Zs = Symbol(a(2916));
function yo() {
  const i = a, x = [], t = Object[i(1186)](null);
  let r;
  return t[i(2917)] = (e, s) => {
    var o;
    const n = i;
    return (o = r == null ? void 0 : r.revoke) == null || o.call(r), s === Zs ? x : (x[n(528)](s), r = Proxy[n(2294)](e, t), r.proxy);
  }, Proxy[i(2294)](Object[i(1186)](null), t)[i(1686)];
}
function Qt(i, x) {
  const t = a, { [Zs]: r } = i(yo());
  return r.join((x == null ? void 0 : x[t(1515)]) ?? ".");
}
function K(i, x) {
  return i = i - 242, bx()[i];
}
const Wa = {}, Wx = (i) => !b0(i) && typeof i != "boolean" && typeof i != "number";
class Nx extends Ax {
  constructor(x, t = {}) {
    const r = a;
    super(), io([r(317), r(441), r(1912), "interpolator", r(2640), "i18nFormat", "utils"], x, this), this[r(891)] = t, this[r(891)].keySeparator === void 0 && (this.options[r(1515)] = "."), this[r(2047)] = he[r(1186)](r(917));
  }
  [a(1834)](x) {
    const t = a;
    x && (this[t(2548)] = x);
  }
  [a(967)](x, t = { interpolation: {} }) {
    const r = a, e = { ...t };
    if (x == null) return !1;
    const s = this[r(2345)](x, e);
    if ((s == null ? void 0 : s[r(354)]) === void 0) return !1;
    const n = Wx(s[r(354)]);
    return !(e.returnObjects === !1 && n);
  }
  [a(1066)](x, t) {
    const r = a;
    let e = t.nsSeparator !== void 0 ? t[r(748)] : this[r(891)][r(748)];
    e === void 0 && (e = ":");
    const s = t[r(1515)] !== void 0 ? t[r(1515)] : this.options[r(1515)];
    let n = t.ns || this.options[r(497)] || [];
    const o = e && x[r(1112)](e) > -1, c = !this.options[r(1252)] && !t[r(1515)] && !this[r(891)].userDefinedNsSeparator && !t.nsSeparator && !bo(x, e, s);
    if (o && !c) {
      const u = x[r(1376)](this[r(2486)][r(1964)]);
      if (u && u[r(1667)] > 0) return { key: x, namespaces: b0(n) ? [n] : n };
      const d = x[r(1160)](e);
      (e !== s || e === s && this[r(891)].ns[r(1112)](d[0]) > -1) && (n = d[r(2846)]()), x = d[r(1255)](s);
    }
    return { key: x, namespaces: b0(n) ? [n] : n };
  }
  translate(x, t, r) {
    const e = a;
    let s = typeof t === e(2613) ? { ...t } : t;
    if (typeof s !== e(2613) && this[e(891)][e(988)] && (s = this[e(891)][e(988)](arguments)), typeof s === e(2613) && (s = { ...s }), s || (s = {}), x == null) return "";
    typeof x === e(1137) && (x = Qt(x, { ...this[e(891)], ...s })), Array[e(1683)](x) || (x = [String(x)]);
    const n = s.returnDetails !== void 0 ? s[e(1918)] : this[e(891)][e(1918)], o = s.keySeparator !== void 0 ? s[e(1515)] : this.options[e(1515)], { key: c, namespaces: u } = this[e(1066)](x[x[e(1667)] - 1], s), d = u[u[e(1667)] - 1];
    let l = s[e(748)] !== void 0 ? s[e(748)] : this.options[e(748)];
    l === void 0 && (l = ":");
    const f = s.lng || this[e(2548)], b = s[e(1643)] || this[e(891)][e(1643)];
    if ((f == null ? void 0 : f.toLowerCase()) === e(796))
      return b ? n ? { res: "" + d + l + c, usedKey: c, exactUsedKey: c, usedLng: f, usedNS: d, usedParams: this[e(1251)](s) } : "" + d + l + c : n ? { res: c, usedKey: c, exactUsedKey: c, usedLng: f, usedNS: d, usedParams: this[e(1251)](s) } : c;
    const h = this[e(2345)](x, s);
    let m = h == null ? void 0 : h[e(354)];
    const v = (h == null ? void 0 : h[e(2399)]) || c, k = (h == null ? void 0 : h[e(1261)]) || c, P = [e(870), e(2165), e(2339)], F = s[e(587)] !== void 0 ? s.joinArrays : this[e(891)][e(587)], A = !this.i18nFormat || this[e(876)][e(2400)], C = s.count !== void 0 && !b0(s[e(2195)]), E = Nx[e(1029)](s), R = C ? this[e(1912)][e(1647)](f, s[e(2195)], s) : "", O = s[e(2904)] && C ? this[e(1912)][e(1647)](f, s[e(2195)], { ordinal: !1 }) : "", D = C && !s.ordinal && s[e(2195)] === 0, j = D && s[e(500) + this.options[e(2395)] + e(534)] || s[e(500) + R] || s["defaultValue" + O] || s.defaultValue;
    let q = m;
    A && !m && E && (q = j);
    const N = Wx(q), z = Object.prototype[e(1977)].apply(q);
    if (A && q && N && P[e(1112)](z) < 0 && !(b0(F) && Array.isArray(q))) {
      if (!s.returnObjects && !this[e(891)].returnObjects) {
        !this[e(891)].returnedObjectHandler && this[e(2047)][e(1842)](e(1177));
        const L = this[e(891)].returnedObjectHandler ? this[e(891)][e(688)](v, q, { ...s, ns: u }) : e(2728) + c + " (" + this[e(2548)] + e(716);
        return n ? (h.res = L, h[e(2198)] = this.getUsedParamsDetails(s), h) : L;
      }
      if (o) {
        const L = Array.isArray(q), U = L ? [] : {}, G = L ? k : v;
        for (const c0 in q)
          if (Object[e(1523)][e(1687)].call(q, c0)) {
            const u0 = "" + G + o + c0;
            E && !m ? U[c0] = this[e(337)](u0, { ...s, defaultValue: Wx(j) ? j[c0] : void 0, joinArrays: !1, ns: u }) : U[c0] = this[e(337)](u0, { ...s, joinArrays: !1, ns: u }), U[c0] === u0 && (U[c0] = q[c0]);
          }
        m = U;
      }
    } else if (A && b0(F) && Array.isArray(m))
      m = m[e(1255)](F), m && (m = this[e(1281)](m, x, s, r));
    else {
      let L = !1, U = !1;
      !this[e(1166)](m) && E && (L = !0, m = j), !this[e(1166)](m) && (U = !0, m = c);
      const G = s.missingKeyNoValueFallbackToKey || this.options[e(1596)], c0 = G && U ? void 0 : m, u0 = E && j !== m && this[e(891)][e(1121)];
      if (U || L || u0) {
        if (this[e(2047)][e(1546)](e(u0 ? 1192 : 2664), f, d, c, u0 ? j : m), o) {
          const k0 = this[e(2345)](c, { ...s, keySeparator: !1 });
          k0 && k0[e(354)] && this[e(2047)][e(1842)](e(2034));
        }
        let l0 = [];
        const o0 = this[e(441)][e(342)](this[e(891)].fallbackLng, s[e(2692)] || this[e(2548)]);
        if (this[e(891)].saveMissingTo === e(431) && o0 && o0[0]) for (let k0 = 0; k0 < o0[e(1667)]; k0++)
          l0[e(528)](o0[k0]);
        else this.options.saveMissingTo === "all" ? l0 = this[e(441)][e(2344)](s.lng || this[e(2548)]) : l0[e(528)](s[e(2692)] || this.language);
        const f0 = (k0, y0, M0) => {
          var _;
          const F0 = e, J0 = E && M0 !== m ? M0 : c0;
          this.options[F0(858)] ? this[F0(891)].missingKeyHandler(k0, d, y0, J0, u0, s) : (_ = this[F0(2640)]) != null && _[F0(1081)] && this[F0(2640)].saveMissing(k0, d, y0, J0, u0, s), this[F0(537)](F0(2664), k0, d, y0, m);
        };
        this.options[e(1081)] && (this[e(891)][e(2204)] && C ? l0[e(1188)]((k0) => {
          const y0 = e, M0 = this[y0(1912)][y0(1534)](k0, s);
          D && s[y0(500) + this.options[y0(2395)] + y0(534)] && M0[y0(1112)](this.options[y0(2395)] + "zero") < 0 && M0.push(this.options[y0(2395)] + y0(534)), M0[y0(1188)]((F0) => {
            const J0 = y0;
            f0([k0], c + F0, s[J0(500) + F0] || j);
          });
        }) : f0(l0, c, j));
      }
      m = this[e(1281)](m, x, s, h, r), U && m === c && this.options.appendNamespaceToMissingKey && (m = "" + d + l + c), (U || L) && this.options[e(2644)] && (m = this.options[e(2644)](this[e(891)][e(1071)] ? "" + d + l + c : c, L ? m : void 0, s));
    }
    return n ? (h[e(354)] = m, h[e(2198)] = this[e(1251)](s), h) : m;
  }
  [a(1281)](x, t, r, e, s) {
    var u, d;
    const n = a;
    if ((u = this[n(876)]) != null && u[n(1198)]) x = this[n(876)][n(1198)](x, { ...this.options[n(1441)][n(2100)], ...r }, r[n(2692)] || this[n(2548)] || e[n(1079)], e[n(2953)], e[n(2399)], { resolved: e });
    else if (!r[n(2203)]) {
      r[n(1441)] && this.interpolator[n(2305)]({ ...r, interpolation: { ...this[n(891)][n(1441)], ...r[n(1441)] } });
      const l = b0(x) && (((d = r == null ? void 0 : r[n(1441)]) == null ? void 0 : d[n(492)]) !== void 0 ? r[n(1441)][n(492)] : this[n(891)][n(1441)].skipOnVariables);
      let f;
      if (l) {
        const h = x[n(1376)](this[n(2486)][n(1964)]);
        f = h && h.length;
      }
      let b = r[n(340)] && !b0(r.replace) ? r[n(340)] : r;
      if (this[n(891)][n(1441)][n(2100)] && (b = { ...this[n(891)][n(1441)][n(2100)], ...b }), x = this[n(2486)].interpolate(x, b, r[n(2692)] || this[n(2548)] || e[n(1079)], r), l) {
        const h = x[n(1376)](this[n(2486)][n(1964)]), m = h && h[n(1667)];
        f < m && (r[n(599)] = !1);
      }
      !r[n(2692)] && e && e[n(354)] && (r[n(2692)] = this.language || e[n(1079)]), r[n(599)] !== !1 && (x = this[n(2486)][n(599)](x, (...h) => {
        const m = n;
        return (s == null ? void 0 : s[0]) === h[0] && !r[m(1903)] ? (this[m(2047)][m(1842)]("It seems you are nesting recursively key: " + h[0] + " in key: " + t[0]), null) : this[m(337)](...h, t);
      }, r)), r[n(1441)] && this[n(2486)][n(1746)]();
    }
    const o = r[n(1117)] || this[n(891)][n(1117)], c = b0(o) ? [o] : o;
    return x != null && (c != null && c[n(1667)]) && r[n(2811)] !== !1 && (x = Vs.handle(c, x, t, this[n(891)] && this[n(891)][n(1439)] ? { i18nResolved: { ...e, usedParams: this[n(1251)](r) }, ...r } : r, this)), x;
  }
  [a(2345)](x, t = {}) {
    const r = a;
    let e, s, n, o, c;
    return b0(x) && (x = [x]), x[r(1188)]((u) => {
      const d = r;
      if (this[d(1166)](e)) return;
      const l = this[d(1066)](u, t), f = l[d(2182)];
      s = f;
      let b = l[d(2879)];
      this[d(891)][d(374)] && (b = b.concat(this[d(891)][d(374)]));
      const h = t[d(2195)] !== void 0 && !b0(t[d(2195)]), m = h && !t[d(2904)] && t[d(2195)] === 0, v = t[d(1903)] !== void 0 && (b0(t.context) || typeof t[d(1903)] === d(329)) && t.context !== "", k = t[d(2115)] ? t[d(2115)] : this[d(441)][d(2344)](t[d(2692)] || this[d(2548)], t[d(1725)]);
      b[d(1188)]((P) => {
        var A, C;
        const F = d;
        this[F(1166)](e) || (c = P, !Wa[k[0] + "-" + P] && ((A = this.utils) != null && A[F(2033)]) && !((C = this[F(2672)]) != null && C[F(2033)](c)) && (Wa[k[0] + "-" + P] = !0, this[F(2047)][F(1842)](F(2330) + s + '" for languages "' + k[F(1255)](", ") + F(2666) + c + F(850), F(1200))), k[F(1188)]((E) => {
          var j;
          const R = F;
          if (this.isValidLookup(e)) return;
          o = E;
          const O = [f];
          if ((j = this[R(876)]) != null && j[R(663)]) this[R(876)][R(663)](O, f, E, P, t);
          else {
            let q;
            h && (q = this[R(1912)][R(1647)](E, t.count, t));
            const N = this[R(891)][R(2395)] + R(534), z = this[R(891)][R(2395)] + "ordinal" + this[R(891)][R(2395)];
            if (h && (t[R(2904)] && q.indexOf(z) === 0 && O[R(528)](f + q.replace(z, this[R(891)][R(2395)])), O[R(528)](f + q), m && O[R(528)](f + N)), v) {
              const L = "" + f + (this[R(891)].contextSeparator || "_") + t[R(1903)];
              O.push(L), h && (t.ordinal && q.indexOf(z) === 0 && O[R(528)](L + q[R(340)](z, this[R(891)][R(2395)])), O[R(528)](L + q), m && O[R(528)](L + N));
            }
          }
          let D;
          for (; D = O[R(940)](); )
            !this[R(1166)](e) && (n = D, e = this.getResource(E, P, D, t));
        }));
      });
    }), { res: e, usedKey: s, exactUsedKey: n, usedLng: o, usedNS: c };
  }
  [a(1166)](x) {
    const t = a;
    return x !== void 0 && !(!this[t(891)][t(916)] && x === null) && !(!this[t(891)][t(1329)] && x === "");
  }
  getResource(x, t, r, e = {}) {
    var n;
    const s = a;
    return (n = this.i18nFormat) != null && n[s(1497)] ? this.i18nFormat[s(1497)](x, t, r, e) : this.resourceStore[s(1497)](x, t, r, e);
  }
  [a(1251)](x = {}) {
    const t = a, r = [t(500), t(2904), t(1903), "replace", t(2692), t(2115), t(1725), "ns", "keySeparator", t(748), t(956), t(1918), t(587), t(1117), "interpolation"], e = x.replace && !b0(x.replace);
    let s = e ? x.replace : x;
    if (e && typeof x[t(2195)] !== t(1714) && (s.count = x[t(2195)]), this[t(891)][t(1441)][t(2100)] && (s = { ...this.options[t(1441)][t(2100)], ...s }), !e) {
      s = { ...s };
      for (const n of r)
        delete s[n];
    }
    return s;
  }
  static [a(1029)](x) {
    const t = a, r = "defaultValue";
    for (const e in x)
      if (Object.prototype[t(1687)].call(x, e) && r === e[t(1978)](0, r.length) && x[e] !== void 0) return !0;
    return !1;
  }
}
class Ka {
  constructor(x) {
    const t = a;
    this[t(891)] = x, this[t(2304)] = this[t(891)][t(2304)] || !1, this[t(2047)] = he[t(1186)](t(441));
  }
  [a(2948)](x) {
    const t = a;
    if (x = sx(x), !x || x[t(1112)]("-") < 0) return null;
    const r = x.split("-");
    return r[t(1667)] === 2 || (r[t(940)](), r[r.length - 1][t(498)]() === "x") ? null : this.formatLanguageCode(r[t(1255)]("-"));
  }
  [a(2106)](x) {
    const t = a;
    if (x = sx(x), !x || x[t(1112)]("-") < 0) return x;
    const r = x[t(1160)]("-");
    return this[t(1179)](r[0]);
  }
  [a(1179)](x) {
    const t = a;
    if (b0(x) && x.indexOf("-") > -1) {
      let r;
      try {
        r = Intl[t(2556)](x)[0];
      } catch {
      }
      return r && this[t(891)][t(2252)] && (r = r.toLowerCase()), r || (this[t(891)][t(2252)] ? x[t(498)]() : x);
    }
    return this[t(891)][t(2319)] || this[t(891)][t(2252)] ? x[t(498)]() : x;
  }
  [a(1228)](x) {
    const t = a;
    return (this.options[t(433)] === "languageOnly" || this.options[t(2423)]) && (x = this[t(2106)](x)), !this[t(2304)] || !this[t(2304)][t(1667)] || this[t(2304)][t(1112)](x) > -1;
  }
  [a(2844)](x) {
    const t = a;
    if (!x) return null;
    let r;
    return x[t(1188)]((e) => {
      const s = t;
      if (r) return;
      const n = this[s(1179)](e);
      (!this[s(891)].supportedLngs || this[s(1228)](n)) && (r = n);
    }), !r && this[t(891)].supportedLngs && x[t(1188)]((e) => {
      const s = t;
      if (r) return;
      const n = this[s(2948)](e);
      if (this[s(1228)](n)) return r = n;
      const o = this[s(2106)](e);
      if (this.isSupportedCode(o)) return r = o;
      r = this[s(891)][s(2304)][s(2408)]((c) => {
        const u = s;
        if (c === o) return c;
        if (!(c[u(1112)]("-") < 0 && o[u(1112)]("-") < 0) && (c.indexOf("-") > 0 && o[u(1112)]("-") < 0 && c[u(1978)](0, c[u(1112)]("-")) === o || c.indexOf(o) === 0 && o.length > 1))
          return c;
      });
    }), r || (r = this[t(342)](this.options[t(1725)])[0]), r;
  }
  getFallbackCodes(x, t) {
    const r = a;
    if (!x) return [];
    if (typeof x == "function" && (x = x(t)), b0(x) && (x = [x]), Array[r(1683)](x)) return x;
    if (!t) return x.default || [];
    let e = x[t];
    return e || (e = x[this[r(2948)](t)]), e || (e = x[this[r(1179)](t)]), e || (e = x[this.getLanguagePartFromCode(t)]), e || (e = x.default), e || [];
  }
  toResolveHierarchy(x, t) {
    const r = a, e = this[r(342)]((t === !1 ? [] : t) || this[r(891)][r(1725)] || [], x), s = [], n = (o) => {
      const c = r;
      o && (this[c(1228)](o) ? s[c(528)](o) : this[c(2047)][c(1842)](c(1096) + o));
    };
    return b0(x) && (x[r(1112)]("-") > -1 || x[r(1112)]("_") > -1) ? (this[r(891)][r(433)] !== r(1758) && n(this.formatLanguageCode(x)), this.options[r(433)] !== r(1758) && this.options.load !== "currentOnly" && n(this[r(2948)](x)), this.options[r(433)] !== r(2130) && n(this.getLanguagePartFromCode(x))) : b0(x) && n(this.formatLanguageCode(x)), e[r(1188)]((o) => {
      const c = r;
      s[c(1112)](o) < 0 && n(this[c(1179)](o));
    }), s;
  }
}
const Ga = { zero: 0, one: 1, two: 2, few: 3, many: 4, other: 5 }, Ja = { select: (i) => a(i === 1 ? 2833 : 463), resolvedOptions: () => ({ pluralCategories: ["one", a(463)] }) };
class vo {
  constructor(x, t = {}) {
    const r = a;
    this[r(441)] = x, this.options = t, this[r(2047)] = he.create(r(1912)), this[r(2093)] = {};
  }
  [a(2824)](x, t) {
    this.rules[x] = t;
  }
  clearCache() {
    const x = a;
    this[x(2093)] = {};
  }
  [a(2073)](x, t = {}) {
    const r = a, e = sx(x === "dev" ? "en" : x), s = t[r(2904)] ? r(2904) : "cardinal", n = JSON[r(2340)]({ cleanedCode: e, type: s });
    if (n in this.pluralRulesCache) return this[r(2093)][n];
    let o;
    try {
      o = new Intl.PluralRules(e, { type: s });
    } catch {
      if (!Intl) return this[r(2047)].error(r(545)), Ja;
      if (!x[r(1376)](/-|_/)) return Ja;
      const u = this[r(441)][r(2106)](x);
      o = this[r(2073)](u, t);
    }
    return this[r(2093)][n] = o, o;
  }
  [a(631)](x, t = {}) {
    const r = a;
    let e = this[r(2073)](x, t);
    return e || (e = this[r(2073)](r(1705), t)), (e == null ? void 0 : e[r(673)]()[r(535)][r(1667)]) > 1;
  }
  [a(1506)](x, t, r = {}) {
    const e = a;
    return this[e(1534)](x, r)[e(1753)]((s) => "" + t + s);
  }
  getSuffixes(x, t = {}) {
    const r = a;
    let e = this[r(2073)](x, t);
    return e || (e = this[r(2073)](r(1705), t)), e ? e[r(673)]()[r(535)][r(2530)]((s, n) => Ga[s] - Ga[n])[r(1753)]((s) => "" + this.options.prepend + (t[r(2904)] ? "ordinal" + this[r(891)][r(2869)] : "") + s) : [];
  }
  [a(1647)](x, t, r = {}) {
    const e = a, s = this[e(2073)](x, r);
    return s ? "" + this[e(891)][e(2869)] + (r[e(2904)] ? e(2904) + this.options.prepend : "") + s.select(t) : (this[e(2047)][e(1842)](e(318) + x), this[e(1647)](e(1705), t, r));
  }
}
const Qa = (i, x, t, r = ".", e = !0) => {
  let s = uo(i, x, t);
  return !s && e && b0(t) && (s = Jt(i, t, r), s === void 0 && (s = Jt(x, t, r))), s;
}, Kx = (i) => i.replace(/\$/g, a(2746));
class Xa {
  constructor(x = {}) {
    var r;
    const t = a;
    this[t(2047)] = he.create("interpolator"), this[t(891)] = x, this[t(2899)] = ((r = x == null ? void 0 : x.interpolation) == null ? void 0 : r.format) || ((e) => e), this[t(2305)](x);
  }
  init(x = {}) {
    const t = a;
    x[t(1441)] || (x[t(1441)] = { escapeValue: !0 });
    const { escape: r, escapeValue: e, useRawValueToEscape: s, prefix: n, prefixEscaped: o, suffix: c, suffixEscaped: u, formatSeparator: d, unescapeSuffix: l, unescapePrefix: f, nestingPrefix: b, nestingPrefixEscaped: h, nestingSuffix: m, nestingSuffixEscaped: v, nestingOptionsSeparator: k, maxReplaces: P, alwaysFormat: F } = x.interpolation;
    this[t(1884)] = r !== void 0 ? r : fo, this[t(465)] = e !== void 0 ? e : !0, this[t(1065)] = s !== void 0 ? s : !1, this[t(2214)] = n ? He(n) : o || "{{", this[t(322)] = c ? He(c) : u || "}}", this[t(1932)] = d || ",", this.unescapePrefix = l ? "" : f || "-", this.unescapeSuffix = this[t(1467)] ? "" : l || "", this.nestingPrefix = b ? He(b) : h || He(t(2029)), this[t(1942)] = m ? He(m) : v || He(")"), this.nestingOptionsSeparator = k || ",", this.maxReplaces = P || 1e3, this.alwaysFormat = F !== void 0 ? F : !1, this[t(1810)]();
  }
  [a(1746)]() {
    const x = a;
    this[x(891)] && this[x(2305)](this[x(891)]);
  }
  [a(1810)]() {
    const x = a, t = (r, e) => {
      const s = K;
      return (r == null ? void 0 : r[s(2159)]) === e ? (r.lastIndex = 0, r) : new RegExp(e, "g");
    };
    this[x(2669)] = t(this[x(2669)], this[x(2214)] + "(.+?)" + this[x(322)]), this[x(1382)] = t(this[x(1382)], "" + this[x(2214)] + this[x(1467)] + x(1442) + this.unescapeSuffix + this[x(322)]), this[x(1964)] = t(this[x(1964)], this[x(2379)] + x(933) + this[x(1942)]);
  }
  [a(2880)](x, t, r, e) {
    var h;
    const s = a;
    let n, o, c;
    const u = this[s(891)] && this.options[s(1441)] && this[s(891)][s(1441)][s(2100)] || {}, d = (m) => {
      const v = s;
      if (m[v(1112)](this[v(1932)]) < 0) {
        const A = Qa(t, u, m, this.options[v(1515)], this[v(891)][v(2271)]);
        return this[v(1005)] ? this[v(2899)](A, void 0, r, { ...e, ...t, interpolationkey: m }) : A;
      }
      const k = m.split(this.formatSeparator), P = k[v(2846)]()[v(2374)](), F = k[v(1255)](this[v(1932)])[v(2374)]();
      return this[v(2899)](Qa(t, u, P, this[v(891)][v(1515)], this[v(891)][v(2271)]), F, r, { ...e, ...t, interpolationkey: P });
    };
    this[s(1810)]();
    const l = (e == null ? void 0 : e.missingInterpolationHandler) || this[s(891)][s(2554)], f = ((h = e == null ? void 0 : e[s(1441)]) == null ? void 0 : h[s(492)]) !== void 0 ? e[s(1441)][s(492)] : this[s(891)][s(1441)].skipOnVariables;
    return [{ regex: this[s(1382)], safeValue: (m) => Kx(m) }, { regex: this[s(2669)], safeValue: (m) => this[s(465)] ? Kx(this[s(1884)](m)) : Kx(m) }][s(1188)]((m) => {
      const v = s;
      for (c = 0; n = m[v(1173)][v(1397)](x); ) {
        const k = n[1][v(2374)]();
        if (o = d(k), o === void 0)
          if (typeof l === v(1137)) {
            const F = l(x, n, e);
            o = b0(F) ? F : "";
          } else if (e && Object.prototype[v(1687)].call(e, k)) o = "";
          else if (f) {
            o = n[0];
            continue;
          } else this.logger[v(1842)]("missed to pass in variable " + k + v(417) + x), o = "";
        else !b0(o) && !this[v(1065)] && (o = za(o));
        const P = m.safeValue(o);
        if (x = x[v(340)](n[0], P), f ? (m[v(1173)].lastIndex += o[v(1667)], m.regex[v(2643)] -= n[0][v(1667)]) : m[v(1173)][v(2643)] = 0, c++, c >= this[v(1673)]) break;
      }
    }), x;
  }
  [a(599)](x, t, r = {}) {
    const e = a;
    let s, n, o;
    const c = (u, d) => {
      const l = K, f = this[l(2905)];
      if (u.indexOf(f) < 0) return u;
      const b = u[l(1160)](new RegExp(f + l(1595)));
      let h = "{" + b[1];
      u = b[0], h = this.interpolate(h, o);
      const m = h.match(/'/g), v = h.match(/"/g);
      (((m == null ? void 0 : m[l(1667)]) ?? 0) % 2 === 0 && !v || v[l(1667)] % 2 !== 0) && (h = h[l(340)](/'/g, '"'));
      try {
        o = JSON[l(1198)](h), d && (o = { ...d, ...o });
      } catch (k) {
        return this.logger[l(1842)](l(878) + u, k), "" + u + f + h;
      }
      return o[l(500)] && o[l(500)][l(1112)](this[l(2214)]) > -1 && delete o.defaultValue, u;
    };
    for (; s = this[e(1964)][e(1397)](x); ) {
      let u = [];
      o = { ...r }, o = o[e(340)] && !b0(o[e(340)]) ? o[e(340)] : o, o[e(2811)] = !1, delete o[e(500)];
      const d = /{.*}/[e(700)](s[1]) ? s[1][e(2332)]("}") + 1 : s[1][e(1112)](this[e(1932)]);
      if (d !== -1 && (u = s[1][e(2419)](d).split(this.formatSeparator).map((l) => l[e(2374)]()).filter(Boolean), s[1] = s[1][e(2419)](0, d)), n = t(c[e(1512)](this, s[1][e(2374)](), o), o), n && s[0] === x && !b0(n)) return n;
      b0(n) || (n = za(n)), !n && (this[e(2047)][e(1842)]("missed to resolve " + s[1] + e(1577) + x), n = ""), u[e(1667)] && (n = u.reduce((l, f) => this[e(2899)](l, f, r[e(2692)], { ...r, interpolationkey: s[1][e(2374)]() }), n[e(2374)]())), x = x[e(340)](s[0], n), this.regexp[e(2643)] = 0;
    }
    return x;
  }
}
const wo = (i) => {
  const x = a;
  let t = i[x(498)]()[x(2374)]();
  const r = {};
  if (i[x(1112)]("(") > -1) {
    const e = i[x(1160)]("(");
    t = e[0].toLowerCase()[x(2374)]();
    const s = e[1].substring(0, e[1].length - 1);
    t === x(298) && s.indexOf(":") < 0 ? r[x(298)] || (r.currency = s[x(2374)]()) : t === x(2490) && s[x(1112)](":") < 0 ? r.range || (r[x(1244)] = s[x(2374)]()) : s[x(1160)](";")[x(1188)]((o) => {
      const c = x;
      if (o) {
        const [u, ...d] = o[c(1160)](":"), l = d[c(1255)](":").trim()[c(340)](/^'+|'+$/g, ""), f = u[c(2374)]();
        r[f] || (r[f] = l), l === c(2829) && (r[f] = !1), l === c(367) && (r[f] = !0), isNaN(l) || (r[f] = parseInt(l, 10));
      }
    });
  }
  return { formatName: t, formatOptions: r };
}, Ya = (i) => {
  const x = {};
  return (t, r, e) => {
    const s = K;
    let n = e;
    e && e[s(1350)] && e[s(2589)] && e[s(2589)][e[s(1350)]] && e[e[s(1350)]] && (n = { ...n, [e.interpolationkey]: void 0 });
    const o = r + JSON.stringify(n);
    let c = x[o];
    return !c && (c = i(sx(r), e), x[o] = c), c(t);
  };
}, So = (i) => (x, t, r) => i(sx(t), r)(x);
class ko {
  constructor(x = {}) {
    const t = a;
    this[t(2047)] = he.create(t(2301)), this.options = x, this[t(2305)](x);
  }
  [a(2305)](x, t = { interpolation: {} }) {
    const r = a;
    this[r(1932)] = t[r(1441)].formatSeparator || ",";
    const e = t[r(327)] ? Ya : So;
    this[r(2755)] = { number: e((s, n) => {
      const o = r, c = new Intl[o(1936)](s, { ...n });
      return (u) => c.format(u);
    }), currency: e((s, n) => {
      const o = r, c = new Intl[o(1936)](s, { ...n, style: "currency" });
      return (u) => c[o(2899)](u);
    }), datetime: e((s, n) => {
      const o = r, c = new Intl[o(1361)](s, { ...n });
      return (u) => c[o(2899)](u);
    }), relativetime: e((s, n) => {
      const o = r, c = new Intl[o(1564)](s, { ...n });
      return (u) => c[o(2899)](u, n.range || "day");
    }), list: e((s, n) => {
      const o = r, c = new Intl[o(2763)](s, { ...n });
      return (u) => c[o(2899)](u);
    }) };
  }
  [a(2701)](x, t) {
    const r = a;
    this.formats[x[r(498)]()[r(2374)]()] = t;
  }
  [a(424)](x, t) {
    const r = a;
    this[r(2755)][x[r(498)]()[r(2374)]()] = Ya(t);
  }
  [a(2899)](x, t, r, e = {}) {
    const s = a, n = t[s(1160)](this.formatSeparator);
    if (n.length > 1 && n[0][s(1112)]("(") > 1 && n[0].indexOf(")") < 0 && n[s(2408)]((c) => c[s(1112)](")") > -1)) {
      const c = n[s(1031)]((u) => u.indexOf(")") > -1);
      n[0] = [n[0], ...n[s(2383)](1, c)][s(1255)](this.formatSeparator);
    }
    return n[s(1156)]((c, u) => {
      var b;
      const d = s, { formatName: l, formatOptions: f } = wo(u);
      if (this[d(2755)][l]) {
        let h = c;
        try {
          const m = ((b = e == null ? void 0 : e[d(2589)]) == null ? void 0 : b[e.interpolationkey]) || {}, v = m[d(629)] || m[d(2692)] || e.locale || e.lng || r;
          h = this[d(2755)][l](c, v, { ...f, ...e, ...m });
        } catch (m) {
          this.logger[d(1842)](m);
        }
        return h;
      } else this.logger.warn(d(1783) + l);
      return c;
    }, x);
  }
}
const Po = (i, x) => {
  const t = a;
  i[t(2247)][x] !== void 0 && (delete i[t(2247)][x], i[t(1385)]--);
};
class Io extends Ax {
  constructor(x, t, r, e = {}) {
    var n, o;
    const s = a;
    super(), this[s(326)] = x, this[s(293)] = t, this[s(2951)] = r, this.languageUtils = r[s(441)], this[s(891)] = e, this[s(2047)] = he[s(1186)]("backendConnector"), this[s(715)] = [], this.maxParallelReads = e.maxParallelReads || 10, this[s(408)] = 0, this[s(2163)] = e[s(2163)] >= 0 ? e.maxRetries : 5, this[s(983)] = e[s(983)] >= 1 ? e.retryTimeout : 350, this[s(751)] = {}, this[s(2731)] = [], (o = (n = this[s(326)]) == null ? void 0 : n[s(2305)]) == null || o.call(n, r, e[s(326)], e);
  }
  queueLoad(x, t, r, e) {
    const s = a, n = {}, o = {}, c = {}, u = {};
    return x[s(1188)]((d) => {
      let l = !0;
      t.forEach((f) => {
        const b = K, h = d + "|" + f;
        !r[b(1273)] && this.store[b(1852)](d, f) ? this[b(751)][h] = 2 : this[b(751)][h] < 0 || (this[b(751)][h] === 1 ? o[h] === void 0 && (o[h] = !0) : (this.state[h] = 1, l = !1, o[h] === void 0 && (o[h] = !0), n[h] === void 0 && (n[h] = !0), u[f] === void 0 && (u[f] = !0)));
      }), l || (c[d] = !0);
    }), (Object.keys(n)[s(1667)] || Object.keys(o)[s(1667)]) && this[s(2731)].push({ pending: o, pendingCount: Object[s(1400)](o)[s(1667)], loaded: {}, errors: [], callback: e }), { toLoad: Object[s(1400)](n), pending: Object[s(1400)](o), toLoadLanguages: Object[s(1400)](c), toLoadNamespaces: Object[s(1400)](u) };
  }
  [a(2105)](x, t, r) {
    const e = a, s = x[e(1160)]("|"), n = s[0], o = s[1];
    t && this[e(537)](e(1597), n, o, t), !t && r && this.store[e(2118)](n, o, r, void 0, void 0, { skipCopy: !0 }), this[e(751)][x] = t ? -1 : 2, t && r && (this.state[x] = 0);
    const c = {};
    this[e(2731)][e(1188)]((u) => {
      const d = e;
      co(u[d(2105)], [n], o), Po(u, x), t && u[d(2183)].push(t), u[d(1385)] === 0 && !u[d(1196)] && (Object[d(1400)](u[d(2105)])[d(1188)]((l) => {
        const f = d;
        c[l] || (c[l] = {});
        const b = u.loaded[l];
        b.length && b[f(1188)]((h) => {
          c[l][h] === void 0 && (c[l][h] = !0);
        });
      }), u[d(1196)] = !0, u[d(2183)][d(1667)] ? u.callback(u[d(2183)]) : u[d(2800)]());
    }), this[e(537)](e(2105), c), this[e(2731)] = this[e(2731)][e(2534)]((u) => !u[e(1196)]);
  }
  [a(847)](x, t, r, e = 0, s = this[a(983)], n) {
    const o = a;
    if (!x[o(1667)]) return n(null, {});
    if (this[o(408)] >= this[o(964)]) {
      this.waitingReads[o(528)]({ lng: x, ns: t, fcName: r, tried: e, wait: s, callback: n });
      return;
    }
    this[o(408)]++;
    const c = (d, l) => {
      const f = o;
      if (this[f(408)]--, this.waitingReads[f(1667)] > 0) {
        const b = this[f(715)].shift();
        this[f(847)](b.lng, b.ns, b[f(2737)], b.tried, b.wait, b.callback);
      }
      if (d && l && e < this[f(2163)]) {
        setTimeout(() => {
          const b = f;
          this[b(847)][b(1512)](this, x, t, r, e + 1, s * 2, n);
        }, s);
        return;
      }
      n(d, l);
    }, u = this.backend[r].bind(this[o(326)]);
    if (u[o(1667)] === 2) {
      try {
        const d = u(x, t);
        d && typeof d.then === o(1137) ? d[o(654)]((l) => c(null, l))[o(1336)](c) : c(null, d);
      } catch (d) {
        c(d);
      }
      return;
    }
    return u(x, t, c);
  }
  [a(1557)](x, t, r = {}, e) {
    const s = a;
    if (!this[s(326)]) return this.logger[s(1842)](s(2619)), e && e();
    b0(x) && (x = this[s(441)].toResolveHierarchy(x)), b0(t) && (t = [t]);
    const n = this[s(2298)](x, t, r, e);
    if (!n[s(2446)][s(1667)])
      return n[s(2247)][s(1667)] || e(), null;
    n[s(2446)][s(1188)]((o) => {
      this.loadOne(o);
    });
  }
  load(x, t, r) {
    this.prepareLoading(x, t, {}, r);
  }
  [a(1273)](x, t, r) {
    this[a(1557)](x, t, { reload: !0 }, r);
  }
  [a(1013)](x, t = "") {
    const r = a, e = x[r(1160)]("|"), s = e[0], n = e[1];
    this[r(847)](s, n, r(847), void 0, void 0, (o, c) => {
      const u = r;
      o && this.logger.warn(t + u(1491) + n + " for language " + s + u(650), o), !o && c && this[u(2047)][u(1546)](t + u(2449) + n + u(2825) + s, c), this[u(2105)](x, o, c);
    });
  }
  [a(1081)](x, t, r, e, s, n = {}, o = () => {
  }) {
    var u, d, l, f, b;
    const c = a;
    if ((d = (u = this[c(2951)]) == null ? void 0 : u[c(2672)]) != null && d[c(2033)] && !((f = (l = this[c(2951)]) == null ? void 0 : l[c(2672)]) != null && f[c(2033)](t))) {
      this[c(2047)][c(1842)](c(973) + r + '" as the namespace "' + t + c(850), c(1200));
      return;
    }
    if (!(r == null || r === "")) {
      if ((b = this[c(326)]) != null && b[c(1186)]) {
        const h = { ...n, isUpdate: s }, m = this[c(326)][c(1186)][c(1780)](this[c(326)]);
        if (m[c(1667)] < 6) try {
          let v;
          m.length === 5 ? v = m(x, t, r, e, h) : v = m(x, t, r, e), v && typeof v[c(654)] === c(1137) ? v.then((k) => o(null, k)).catch(o) : o(null, v);
        } catch (v) {
          o(v);
        }
        else m(x, t, r, e, o, h);
      }
      !x || !x[0] || this.store[c(466)](x[0], t, r, e);
    }
  }
}
const er = () => ({ debug: !1, initAsync: !0, ns: ["translation"], defaultNS: [a(1594)], fallbackLng: ["dev"], fallbackNS: !1, supportedLngs: !1, nonExplicitSupportedLngs: !1, load: a(1849), preload: !1, simplifyPluralSuffix: !0, keySeparator: ".", nsSeparator: ":", pluralSeparator: "_", contextSeparator: "_", partialBundledLanguages: !1, saveMissing: !1, updateMissing: !1, saveMissingTo: "fallback", saveMissingPlurals: !0, missingKeyHandler: !1, missingInterpolationHandler: !1, postProcess: !1, postProcessPassResolved: !1, returnNull: !1, returnEmptyString: !0, returnObjects: !1, joinArrays: !1, returnedObjectHandler: !1, parseMissingKeyHandler: !1, appendNamespaceToMissingKey: !1, appendNamespaceToCIMode: !1, overloadTranslationOptionHandler: (i) => {
  const x = a;
  let t = {};
  if (typeof i[1] === x(2613) && (t = i[1]), b0(i[1]) && (t[x(500)] = i[1]), b0(i[2]) && (t[x(2068)] = i[2]), typeof i[2] === x(2613) || typeof i[3] === x(2613)) {
    const r = i[3] || i[2];
    Object.keys(r)[x(1188)]((e) => {
      t[e] = r[e];
    });
  }
  return t;
}, interpolation: { escapeValue: !0, format: (i) => i, prefix: "{{", suffix: "}}", formatSeparator: ",", unescapePrefix: "-", nestingPrefix: a(2029), nestingSuffix: ")", nestingOptionsSeparator: ",", maxReplaces: 1e3, skipOnVariables: !0 }, cacheInBuiltFormats: !0 }), xr = (i) => {
  var t, r;
  const x = a;
  return b0(i.ns) && (i.ns = [i.ns]), b0(i[x(1725)]) && (i[x(1725)] = [i.fallbackLng]), b0(i[x(374)]) && (i.fallbackNS = [i[x(374)]]), ((r = (t = i[x(2304)]) == null ? void 0 : t[x(1112)]) == null ? void 0 : r.call(t, x(796))) < 0 && (i[x(2304)] = i.supportedLngs.concat(["cimode"])), typeof i[x(1829)] === x(1459) && (i.initAsync = i[x(1829)]), i;
}, hx = () => {
}, Eo = (i) => {
  const x = a;
  Object[x(2726)](Object.getPrototypeOf(i))[x(1188)]((r) => {
    const e = x;
    typeof i[r] === e(1137) && (i[r] = i[r][e(1780)](i));
  });
};
class xx extends Ax {
  constructor(x = {}, t) {
    const r = a;
    if (super(), this[r(891)] = xr(x), this[r(2951)] = {}, this[r(2047)] = he, this[r(1688)] = { external: [] }, Eo(this), t && !this[r(355)] && !x[r(2744)]) {
      if (!this.options[r(2230)]) return this[r(2305)](x, t), this;
      setTimeout(() => {
        this[r(2305)](x, t);
      }, 0);
    }
  }
  [a(2305)](x = {}, t) {
    const r = a;
    this.isInitializing = !0, typeof x == "function" && (t = x, x = {}), x[r(497)] == null && x.ns && (b0(x.ns) ? x.defaultNS = x.ns : x.ns[r(1112)](r(1594)) < 0 && (x[r(497)] = x.ns[0]));
    const e = er();
    this[r(891)] = { ...e, ...this[r(891)], ...xr(x) }, this.options[r(1441)] = { ...e.interpolation, ...this[r(891)][r(1441)] }, x[r(1515)] !== void 0 && (this[r(891)].userDefinedKeySeparator = x[r(1515)]), x.nsSeparator !== void 0 && (this[r(891)][r(1205)] = x[r(748)]);
    const s = (d) => {
      const l = r;
      return d ? typeof d === l(1137) ? new d() : d : null;
    };
    if (!this[r(891)][r(2744)]) {
      this.modules.logger ? he.init(s(this[r(1688)].logger), this[r(891)]) : he[r(2305)](null, this[r(891)]);
      let d;
      this[r(1688)][r(2301)] ? d = this[r(1688)][r(2301)] : d = ko;
      const l = new Ka(this[r(891)]);
      this[r(293)] = new Ba(this[r(891)][r(1002)], this[r(891)]);
      const f = this.services;
      f.logger = he, f[r(317)] = this.store, f[r(441)] = l, f[r(1912)] = new vo(l, { prepend: this[r(891)][r(2395)], simplifyPluralSuffix: this[r(891)][r(2743)] }), this[r(891)][r(1441)][r(2899)] && this[r(891)][r(1441)].format !== e.interpolation[r(2899)] && this[r(2047)][r(1642)]("init: you are still using the legacy format function, please use the new approach: https://www.i18next.com/translation-function/formatting"), d && (!this[r(891)][r(1441)][r(2899)] || this[r(891)].interpolation[r(2899)] === e.interpolation.format) && (f[r(2301)] = s(d), f[r(2301)][r(2305)] && f[r(2301)][r(2305)](f, this.options), this.options.interpolation[r(2899)] = f[r(2301)][r(2899)][r(1780)](f[r(2301)])), f.interpolator = new Xa(this[r(891)]), f[r(2672)] = { hasLoadedNamespace: this[r(2033)][r(1780)](this) }, f[r(2640)] = new Io(s(this[r(1688)][r(326)]), f.resourceStore, f, this[r(891)]), f[r(2640)].on("*", (h, ...m) => {
        this[r(537)](h, ...m);
      }), this[r(1688)][r(1764)] && (f[r(1764)] = s(this[r(1688)].languageDetector), f[r(1764)].init && f[r(1764)].init(f, this.options[r(1662)], this[r(891)])), this[r(1688)][r(876)] && (f[r(876)] = s(this[r(1688)][r(876)]), f[r(876)][r(2305)] && f[r(876)].init(this)), this[r(917)] = new Nx(this[r(2951)], this[r(891)]), this[r(917)].on("*", (h, ...m) => {
        this[r(537)](h, ...m);
      }), this[r(1688)].external[r(1188)]((h) => {
        const m = r;
        h.init && h[m(2305)](this);
      });
    }
    if (this[r(2899)] = this[r(891)].interpolation[r(2899)], t || (t = hx), this[r(891)][r(1725)] && !this.services.languageDetector && !this.options[r(2692)]) {
      const d = this[r(2951)][r(441)][r(342)](this.options[r(1725)]);
      d[r(1667)] > 0 && d[0] !== r(1705) && (this.options[r(2692)] = d[0]);
    }
    !this[r(2951)][r(1764)] && !this[r(891)][r(2692)] && this[r(2047)][r(1842)](r(942)), [r(1497), r(1852), r(2492), r(440)][r(1188)]((d) => {
      const l = r;
      this[d] = (...f) => this[l(293)][d](...f);
    }), ["addResource", r(949), "addResourceBundle", r(493)][r(1188)]((d) => {
      this[d] = (...l) => (this[K(293)][d](...l), this);
    });
    const c = Je(), u = () => {
      const d = r, l = (f, b) => {
        const h = K;
        this[h(2085)] = !1, this[h(355)] && !this.initializedStoreOnce && this[h(2047)][h(1842)](h(2061)), this.isInitialized = !0, this[h(891)].isClone || this[h(2047)][h(1546)](h(2859), this.options), this[h(537)](h(2859), this.options), c[h(2345)](b), t(f, b);
      };
      if (this[d(1694)] && !this[d(355)]) return l(null, this.t[d(1780)](this));
      this.changeLanguage(this.options.lng, l);
    };
    return this[r(891)].resources || !this[r(891)][r(2230)] ? u() : setTimeout(u, 0), c;
  }
  loadResources(x, t = hx) {
    var n, o;
    const r = a;
    let e = t;
    const s = b0(x) ? x : this[r(2548)];
    if (typeof x === r(1137) && (e = x), !this[r(891)][r(1002)] || this[r(891)][r(2600)]) {
      if ((s == null ? void 0 : s[r(498)]()) === r(796) && (!this.options[r(1984)] || this[r(891)].preload[r(1667)] === 0)) return e();
      const c = [], u = (d) => {
        const l = r;
        if (!d || d === l(796)) return;
        this.services[l(441)].toResolveHierarchy(d)[l(1188)]((b) => {
          const h = l;
          b !== h(796) && c[h(1112)](b) < 0 && c[h(528)](b);
        });
      };
      s ? u(s) : this[r(2951)][r(441)].getFallbackCodes(this[r(891)][r(1725)])[r(1188)]((l) => u(l)), (o = (n = this[r(891)][r(1984)]) == null ? void 0 : n.forEach) == null || o.call(n, (d) => u(d)), this[r(2951)][r(2640)][r(433)](c, this[r(891)].ns, (d) => {
        const l = r;
        !d && !this[l(2376)] && this[l(2548)] && this[l(1961)](this[l(2548)]), e(d);
      });
    } else e(null);
  }
  [a(872)](x, t, r) {
    const e = a, s = Je();
    return typeof x == "function" && (r = x, x = void 0), typeof t === e(1137) && (r = t, t = void 0), x || (x = this[e(1694)]), t || (t = this[e(891)].ns), r || (r = hx), this[e(2951)][e(2640)][e(1273)](x, t, (n) => {
      s[e(2345)](), r(n);
    }), s;
  }
  [a(1326)](x) {
    const t = a;
    if (!x) throw new Error(t(479));
    if (!x[t(1436)]) throw new Error(t(1043));
    return x.type === "backend" && (this.modules.backend = x), (x.type === "logger" || x[t(1546)] && x[t(1842)] && x.error) && (this.modules[t(2047)] = x), x[t(1436)] === t(1764) && (this.modules[t(1764)] = x), x[t(1436)] === t(876) && (this[t(1688)][t(876)] = x), x.type === "postProcessor" && Vs[t(2790)](x), x[t(1436)] === t(2301) && (this[t(1688)][t(2301)] = x), x[t(1436)] === t(1093) && this[t(1688)].external[t(528)](x), this;
  }
  setResolvedLanguage(x) {
    const t = a;
    if (!(!x || !this[t(1694)]) && !([t(796), "dev"].indexOf(x) > -1)) {
      for (let r = 0; r < this[t(1694)].length; r++) {
        const e = this.languages[r];
        if (!([t(796), t(1705)][t(1112)](e) > -1) && this[t(293)][t(2769)](e)) {
          this[t(2376)] = e;
          break;
        }
      }
      !this[t(2376)] && this.languages.indexOf(x) < 0 && this[t(293)][t(2769)](x) && (this.resolvedLanguage = x, this[t(1694)][t(1565)](x));
    }
  }
  changeLanguage(x, t) {
    const r = a;
    this.isLanguageChangingTo = x;
    const e = Je();
    this[r(537)](r(1627), x);
    const s = (c) => {
      const u = r;
      this[u(2548)] = c, this[u(1694)] = this[u(2951)][u(441)].toResolveHierarchy(c), this[u(2376)] = void 0, this[u(1961)](c);
    }, n = (c, u) => {
      const d = r;
      u ? this.isLanguageChangingTo === x && (s(u), this[d(917)][d(1834)](u), this[d(689)] = void 0, this.emit(d(1099), u), this[d(2047)][d(1546)](d(1099), u)) : this[d(689)] = void 0, e[d(2345)]((...l) => this.t(...l)), t && t(c, (...l) => this.t(...l));
    }, o = (c) => {
      var f, b;
      const u = r;
      !x && !c && this[u(2951)][u(1764)] && (c = []);
      const d = b0(c) ? c : c && c[0], l = this[u(293)][u(2769)](d) ? d : this.services[u(441)].getBestMatchFromCodes(b0(c) ? [c] : c);
      l && (!this[u(2548)] && s(l), this[u(917)][u(2548)] || this.translator[u(1834)](l), (b = (f = this[u(2951)][u(1764)]) == null ? void 0 : f[u(1996)]) == null || b.call(f, l)), this[u(2546)](l, (h) => {
        n(h, l);
      });
    };
    return !x && this[r(2951)][r(1764)] && !this[r(2951)].languageDetector.async ? o(this[r(2951)][r(1764)][r(2327)]()) : !x && this.services[r(1764)] && this[r(2951)][r(1764)][r(2780)] ? this[r(2951)][r(1764)][r(2327)].length === 0 ? this[r(2951)][r(1764)].detect().then(o) : this[r(2951)][r(1764)][r(2327)](o) : o(x), e;
  }
  [a(2426)](x, t, r) {
    const e = a, s = (n, o, ...c) => {
      const u = K;
      let d;
      typeof o !== u(2613) ? d = this[u(891)].overloadTranslationOptionHandler([n, o].concat(c)) : d = { ...o }, d.lng = d[u(2692)] || s[u(2692)], d[u(2115)] = d[u(2115)] || s[u(2115)], d.ns = d.ns || s.ns, d[u(581)] !== "" && (d[u(581)] = d[u(581)] || r || s[u(581)]);
      const l = this[u(891)][u(1515)] || ".";
      let f;
      return d[u(581)] && Array[u(1683)](n) ? f = n.map((b) => {
        const h = u;
        return typeof b === h(1137) && (b = Qt(b, { ...this[h(891)], ...o })), "" + d[h(581)] + l + b;
      }) : (typeof n == "function" && (n = Qt(n, { ...this[u(891)], ...o })), f = d[u(581)] ? "" + d[u(581)] + l + n : n), this.t(f, d);
    };
    return b0(x) ? s[e(2692)] = x : s[e(2115)] = x, s.ns = t, s.keyPrefix = r, s;
  }
  t(...x) {
    var r;
    const t = a;
    return (r = this[t(917)]) == null ? void 0 : r[t(337)](...x);
  }
  exists(...x) {
    var r;
    const t = a;
    return (r = this[t(917)]) == null ? void 0 : r[t(967)](...x);
  }
  [a(2378)](x) {
    const t = a;
    this[t(891)][t(497)] = x;
  }
  [a(2033)](x, t = {}) {
    const r = a;
    if (!this[r(355)]) return this[r(2047)].warn(r(605), this[r(1694)]), !1;
    if (!this[r(1694)] || !this.languages[r(1667)]) return this.logger[r(1842)](r(347), this[r(1694)]), !1;
    const e = t[r(2692)] || this[r(2376)] || this.languages[0], s = this.options ? this[r(891)].fallbackLng : !1, n = this[r(1694)][this[r(1694)][r(1667)] - 1];
    if (e.toLowerCase() === r(796)) return !0;
    const o = (c, u) => {
      const d = r, l = this[d(2951)][d(2640)][d(751)][c + "|" + u];
      return l === -1 || l === 0 || l === 2;
    };
    if (t.precheck) {
      const c = t[r(540)](this, o);
      if (c !== void 0) return c;
    }
    return !!(this[r(1852)](e, x) || !this[r(2951)][r(2640)][r(326)] || this[r(891)][r(1002)] && !this[r(891)][r(2600)] || o(e, x) && (!s || o(n, x)));
  }
  [a(2358)](x, t) {
    const r = a, e = Je();
    return this.options.ns ? (b0(x) && (x = [x]), x[r(1188)]((s) => {
      const n = r;
      this[n(891)].ns.indexOf(s) < 0 && this[n(891)].ns.push(s);
    }), this[r(2546)]((s) => {
      e.resolve(), t && t(s);
    }), e) : (t && t(), Promise[r(2345)]());
  }
  [a(1621)](x, t) {
    const r = a, e = Je();
    b0(x) && (x = [x]);
    const s = this[r(891)][r(1984)] || [], n = x.filter((o) => s[r(1112)](o) < 0 && this[r(2951)][r(441)][r(1228)](o));
    return n.length ? (this.options[r(1984)] = s[r(572)](n), this[r(2546)]((o) => {
      e[r(2345)](), t && t(o);
    }), e) : (t && t(), Promise.resolve());
  }
  [a(2482)](x) {
    var s, n;
    const t = a;
    if (x || (x = this[t(2376)] || (((s = this[t(1694)]) == null ? void 0 : s[t(1667)]) > 0 ? this[t(1694)][0] : this.language)), !x) return t(2462);
    try {
      const o = new Intl.Locale(x);
      if (o && o[t(785)]) {
        const c = o.getTextInfo();
        if (c && c[t(1541)]) return c[t(1541)];
      }
    } catch {
    }
    const r = ["ar", t(2906), t(995), t(669), t(1045), t(637), t(393), "aao", t(736), "abv", t(310), t(2031), t(2084), "acx", t(1773), "adf", t(402), "aeb", "aec", t(1078), t(2714), t(982), "apd", t(338), t(863), "ars", t(2311), t(2704), t(1238), t(2623), "ayh", t(1543), "ayn", "ayp", t(2229), t(2248), "he", "iw", "ps", t(2427), t(2570), t(2370), t(1221), "prd", "ug", "ur", t(1590), t(981), "yih", "ji", "yi", t(2730), t(1804), t(2678), "fa", t(1357), "peo", t(1906), t(2458), "dv", t(2723), "ckb"], e = ((n = this[t(2951)]) == null ? void 0 : n.languageUtils) || new Ka(er());
    return x.toLowerCase().indexOf(t(2306)) > 1 ? t(1985) : r.indexOf(e.getLanguagePartFromCode(x)) > -1 || x[t(498)]()[t(1112)](t(2529)) > 1 ? "rtl" : t(1985);
  }
  static [a(1976)](x = {}, t) {
    const r = a, e = new xx(x, t);
    return e.createInstance = xx[r(1976)], e;
  }
  [a(1628)](x = {}, t = hx) {
    const r = a, e = x[r(1937)];
    e && delete x[r(1937)];
    const s = { ...this[r(891)], ...x, isClone: !0 }, n = new xx(s);
    if ((x[r(2066)] !== void 0 || x[r(2214)] !== void 0) && (n.logger = n[r(2047)].clone(x)), [r(293), "services", "language"][r(1188)]((c) => {
      n[c] = this[c];
    }), n[r(2951)] = { ...this[r(2951)] }, n[r(2951)][r(2672)] = { hasLoadedNamespace: n.hasLoadedNamespace[r(1780)](n) }, e) {
      const c = Object[r(1400)](this[r(293)][r(782)])[r(1156)]((u, d) => {
        const l = r;
        return u[d] = { ...this[l(293)][l(782)][d] }, u[d] = Object.keys(u[d]).reduce((f, b) => (f[b] = { ...u[d][b] }, f), u[d]), u;
      }, {});
      n[r(293)] = new Ba(c, s), n[r(2951)][r(317)] = n[r(293)];
    }
    return x[r(1441)] && (n[r(2951)][r(2486)] = new Xa(s)), n[r(917)] = new Nx(n[r(2951)], s), n[r(917)].on("*", (c, ...u) => {
      n[r(537)](c, ...u);
    }), n.init(s, t), n.translator[r(891)] = s, n[r(917)].backendConnector[r(2951)][r(2672)] = { hasLoadedNamespace: n[r(2033)][r(1780)](n) }, n;
  }
  toJSON() {
    const x = a;
    return { options: this[x(891)], store: this[x(293)], language: this.language, languages: this.languages, resolvedLanguage: this[x(2376)] };
  }
}
const X0 = xx.createInstance();
X0.createInstance, X0[a(2482)], X0.init, X0[a(2546)], X0[a(872)], X0[a(1326)], X0[a(1834)], X0[a(2426)], X0.t, X0[a(967)], X0[a(2378)], X0[a(2033)], X0[a(2358)], X0[a(1621)];
function Ro() {
  const i = a;
  if (typeof navigator !== i(1714) && navigator[i(2548)]) return navigator[i(2548)] === i(1110) ? i(1110) : i(2196);
  try {
    const x = typeof require !== i(1714) ? require : void 0;
    if (x)
      return x(i(1023))[i(2235)][i(757)][i(2839)]("zh") ? i(1110) : "en-US";
  } catch {
  }
  return i(2196);
}
let Bs = Ro();
const Co = { "zh-CN": {}, "en-US": {} };
function Xt(i) {
  const x = a, t = i === x(1110) ? so : no, r = Co[i];
  return { ...t, ...r };
}
function Fo() {
  return Bs;
}
function Yt(i, x = {}) {
  let r = Xt(Bs)[i];
  return r ? typeof r == "string" ? r.replace(/\{\{(\w+)\}\}/g, (e, s) => x[s] !== void 0 ? String(x[s]) : e) : r : i;
}
const No = /&(?:amp|#38|lt|#60|gt|#62|apos|#39|quot|#34|nbsp|#160|copy|#169|reg|#174|hellip|#8230|#x2F|#47);/g, qo = { "&amp;": "&", "&#38;": "&", "&lt;": "<", "&#60;": "<", "&gt;": ">", "&#62;": ">", "&apos;": "'", "&#39;": "'", "&quot;": '"', "&#34;": '"', "&nbsp;": " ", "&#160;": " ", "&copy;": "©", "&#169;": "©", "&reg;": "®", "&#174;": "®", "&hellip;": "…", "&#8230;": "…", "&#x2F;": "/", "&#47;": "/" }, To = (i) => qo[i], Ao = (i) => i[a(340)](No, To);
let tr = { bindI18n: a(1099), bindI18nStore: "", transEmptyNodeValue: "", transSupportBasicHtmlNodes: !0, transWrapTextNodes: "", transKeepBasicHtmlNodesFor: ["br", a(2494), "i", "p"], useSuspense: !0, unescape: Ao };
const _o = (i = {}) => {
  tr = { ...tr, ...i };
}, Oo = { type: a(1093), init(i) {
  _o(i[a(891)].react);
} };
!X0[a(355)] && X0[a(1326)](Oo)[a(2305)]({ resources: { "zh-CN": { translation: Xt(a(1110)) }, "en-US": { translation: Xt(a(2196)) } }, lng: Fo(), fallbackLng: a(2196), interpolation: { escapeValue: !1 } });
const Fe = [];
Ye[a(643)] = Ye[a(643)] || {}, Ye[a(643)].add = function(i, x) {
  const t = a;
  typeof x === t(1137) ? Fe[t(528)]([i, { formatter: x, setter: null }]) : Fe[t(528)]([i, x]);
};
function Do(i, x, t) {
  var c, u, d;
  const r = a, e = Fe[r(2408)](([l]) => l == r(2860)), s = Fe[r(2408)](([l]) => oa(l, i.type)) || e;
  let n = !1;
  if (s) {
    const l = s[1].setter;
    l && (n = !!l(i, x, t));
  }
  !n && (i[r(1248)][x].value = t, (u = (c = i[r(1248)][x])[r(2800)]) == null || u.call(c, t)), (d = (N0[r(2740)] || N0[r(923)][r(2434)])[r(1129)]) == null || d[r(970)][r(625)]();
}
function qx(i) {
  const x = a, t = {}, r = Fe[x(2408)](([e]) => e == x(2860));
  return i[x(1785)].forEach((e) => {
    const s = x;
    if (!e[s(1248)] || e.widgets[s(1667)] == 0) return;
    const n = Fe.find(([o]) => oa(o, e[s(1436)])) || r;
    if (n) try {
      const o = n[1].formatter(e);
      o && (t[e.id] = o[s(1248)].map((c) => c[s(2380)]));
    } catch {
      t[e.id] = [];
    }
  }), t;
}
function ea(i, x) {
  var s, n, o;
  const t = a;
  if (!i) return { widgetableID: "", widgetablePath: "", nodes: {}, nodeIndexes: [], options: {}, note: "" };
  const r = i[t(1785)][t(1753)]((c) => {
    const u = t;
    if (c[u(1700)] != 0) return;
    const d = mx(c);
    if (!d || d.startsWith(".") || !c[u(1248)] || c[u(1248)].length == 0) return;
    let l = Fe[u(2408)](([m]) => oa(m, c[u(1436)]));
    if (l) try {
      const m = l[1].formatter(c);
      if (m) return m.id = c.id, m[u(819)] = m.widgets.reduce((v, k) => v + (k.uiWeight || 12), 0), m;
    } catch (m) {
      return { id: c.id, title: d, uiWeightSum: 12, widgets: [{ outputType: u(1033), value: Yt(u(1406), l[0]) + (m[u(2851)] || m || ""), name: "", options: {} }] };
    }
    if (!d.startsWith("#")) return null;
    let f = c.widgets;
    const b = Fe[u(2408)](([m]) => m == u(2860));
    if (b) {
      const m = b[1][u(2301)](c);
      if (m) return Object[u(1640)](m, { uiWeightSum: m[u(1248)].reduce((v, k) => v + (k[u(911)] || 12), 0) });
    }
    const h = { id: c.id, title: d, widgets: f[u(1753)]((m) => ({ name: m[u(844)] || m[u(1274)], outputType: m[u(1436)] || "string", value: m[u(2380)], options: m[u(891)] })) };
    return Object[u(1640)](h, { uiWeightSum: h.widgets[u(1156)]((m, v) => m + (v[u(911)] || 12), 0) });
  })[t(2534)](Boolean)[t(2530)]((c, u) => {
    const d = t;
    let l = mx(c), f = mx(u);
    return l = l[d(2839)]("#") ? l.slice(1)[d(2374)]() : l[d(2374)](), f = f[d(2839)]("#") ? f.slice(1)[d(2374)]() : f[d(2374)](), l[d(2810)](f);
  }), e = ((n = (s = i.nodes[t(2408)]((c) => c.type == "Note" && c.title[t(1376)](/SD-?PPP/i))) == null ? void 0 : s.widgets[0]) == null ? void 0 : n[t(2380)]) || "";
  return { widgetablePath: ((o = x[t(1938)][t(1858)]) == null ? void 0 : o[t(1610)]) || x[t(2711)], widgetableID: x.activeState.id, nodes: r[t(1156)]((c, u) => (c[u.id] = u, c), {}), note: e, nodeIndexes: r.map((c) => c.id), options: {} };
}
function oa(i, x) {
  const t = a, r = i.replace(/[.+^${}()|[\]\\]/g, t(1046))[t(340)](/\*/g, ".*")[t(340)](/\?/g, ".");
  return new RegExp("^" + r + "$").test(x);
}
function mx(i, x = "") {
  var e;
  const t = a;
  let r = x || i[t(857)] || "";
  return i[t(1954)] && (r[t(2839)]("#") || r[t(2839)](".")) ? i[t(1954)]("sdppp_widgetable_title", r) : r = ((e = i.properties) == null ? void 0 : e.sdppp_widgetable_title) || r, r;
}
Ye.getNodeTitle = mx;
const xa = ix.extend(a(1353)), ar = /* @__PURE__ */ new Set();
P0.implementAction(a(1218), async (i) => {
  const x = a;
  return requestAnimationFrame(yn), i.values[x(1188)](({ nodeID: t, widgetIndex: r, value: e }) => {
    const s = x, n = N0[s(1891)][s(1785)][s(2408)]((o) => o.id == t);
    Do(n, r, e);
  }), { success: !0 };
}), P0[a(491)](a(838), async (i) => {
  const x = a, { workflow_path: t } = i, r = !ar.has(t), e = i[x(1746)] || r;
  ar[x(2701)](t);
  const s = N0[x(923)].workflow || N0[x(2740)], n = s[x(1927)][x(2408)]((c) => c[x(2324)] === t || c[x(2711)] === t || c[x(2711)] === x(1669) + t);
  if (!e) {
    const c = await jo(s, n);
    if (xa(x(2008) + c), c) await Gx(s, n);
    else try {
      await o(s, n);
    } catch {
      await Gx(s, n);
    }
    return { success: !0 };
  }
  return await Gx(s, n), { success: !0 };
  async function o(c, u) {
    const d = x;
    xa(d(1591) + u[d(2711)], u[d(717)]), N0[d(2740)] == c ? await u[d(433)]() : (await c.openWorkflow(u), await N0.loadGraphData(JSON.parse(JSON[d(2340)](u[d(717)])), !0, !0, u, {}));
  }
}), P0[a(491)](a(2571), async function(i) {
  const x = a;
  let { workflow_content: t, workflow_path: r } = i;
  return t[x(1858)] = { ...t[x(1858)] || {}, sdppp_workflow_alias: r }, await N0[x(2394)](t), { success: !0 };
}), P0[a(491)](a(1300), async (i) => {
  var s;
  const x = a, t = N0[x(2740)] || N0.extensionManager[x(2434)];
  (s = t.syncWorkflows) == null || s.call(t), await new Promise((n) => requestAnimationFrame(n));
  let e = t[x(1927)].map((n) => n[x(2711)][x(340)]("workflows/", ""));
  try {
    const n = new Headers(), o = localStorage[x(515)]("Comfy.userId");
    o && n[x(480)]("comfy-user", o);
    const c = await fetch(x(1028), { headers: n });
    let u = [];
    c.ok && (u = (await c[x(2691)]())[x(727)].map((l) => l[x(340)]("workflows/", ""))), e.sort((d, l) => {
      const f = x, b = u[f(1721)](d), h = u[f(1721)](l);
      return b && !h ? -1 : !b && h ? 1 : d[f(2810)](l);
    });
  } catch {
  }
  return { workflows: e, error: "" };
}), P0[a(491)]("saveWorkflow", async (i) => {
  var n;
  const x = a, { workflow_path: t, from_sid: r } = i, e = N0[x(2740)] || N0[x(923)][x(2434)], s = e[x(1927)][x(2408)]((o) => o[x(2324)] === t || o.path === t || o[x(2711)] === x(1669) + t);
  if (!s) throw new Error(x(376));
  return ((n = e[x(1129)]) == null ? void 0 : n.id) != s.id && await N0[x(838)](t, r, !1), s[x(970)][x(625)](), await e.saveWorkflow(s), { success: !0 };
});
async function jo(i, x) {
  var e, s, n;
  const t = a;
  if (!x || !(((e = i.activeWorkflow) == null ? void 0 : e.id) === x.id)) return !1;
  if ((s = x[t(970)]) != null && s[t(625)]) try {
    x[t(970)].checkState();
  } catch (o) {
    console[t(1842)](t(1922), o);
  }
  try {
    const o = (n = N0[t(1891)]) == null ? void 0 : n[t(1164)](), c = x.activeState;
    if (!o || !c) return !1;
    const u = JSON[t(2340)](o), d = JSON.stringify(c);
    return u !== d;
  } catch (o) {
    return console[t(1842)](t(1087), o), !1;
  }
}
async function Gx(i, x) {
  var e;
  const t = a;
  xa(t(1239) + x[t(2711)]);
  async function r(s, n) {
    const o = t;
    N0.workflowManager == s ? await n.load() : (await s[o(838)](n), await N0.loadGraphData(JSON[o(1198)](JSON.stringify(n.activeState)), !0, !0, n, {}));
  }
  if ((x.isOpen || (e = i.isOpen) != null && e.call(i, x)) && i[t(679)][t(1667)] === 1) {
    const s = i[t(2303)]();
    i[t(838)](s);
  } else await r(i, i.openWorkflows[0] == x ? i[t(679)][1] : i[t(679)][0]);
  await i.closeWorkflow(x, !1), await new Promise((s) => requestAnimationFrame(s)), await r(i, x);
}
const nx = ix.extend(a(442)), Me = /* @__PURE__ */ new Map();
let Tx = [];
const Jx = { hijacked: !1, originalQueuePrompt: null };
function Mo(i, x) {
  const t = a, r = Me.get(i);
  nx(t(1715), i, x, r, Me), r && r.resolveImage(x);
}
P0.implementAction(a(2932), async () => {
  const i = a;
  await N0[i(2503)][i(1415)]("queue"), await N0.api[i(801)]();
  const x = Array[i(2809)](Me[i(615)]());
  Me[i(2450)]();
  for (const t of x)
    try {
      t[i(2694)](new Error(i(565)));
    } catch {
    }
  return { success: !0 };
}), P0[a(491)]("run", async function* (i) {
  const x = a;
  Lo(), Tx = [];
  const t = i[x(1933)];
  P0.store[x(2805)]({ lastError: "", widgetableErrors: {} });
  const r = await zo(t, i[x(1700)]);
  nx("after app.queuePrompt errors: ", r[x(978)], r[x(401)], "prompt_ids: ", r[x(276)]), Vo(r), yield* Zo(r[x(276)]);
});
function Lo() {
  const i = a;
  if (Jx[i(462)]) return;
  const x = Re.queuePrompt;
  Jx.originalQueuePrompt = x, Re[i(416)] = async (...t) => {
    const r = i;
    try {
      const e = await x[r(1512)](Re, ...t);
      return Tx.push({ error: null, result: e, prompt_id: e[r(829)] }), e;
    } catch (e) {
      throw Tx[r(528)]({ error: e, result: null, prompt_id: "" }), e;
    }
  }, Jx[i(462)] = !0;
}
async function $o(i) {
  await N0[a(416)](1, i);
}
async function Ho(i) {
  const x = a, t = await N0[x(2110)](N0[x(1891)]);
  for (let r = 0; r < i; r++)
    await Re.queuePrompt(1, t);
}
async function zo(i, x = a(2164)) {
  var e, s;
  const t = a, r = { promptIds: [], hasError: !1, generalError: "", nodeErrors: {} };
  try {
    x === t(2503) ? await Ho(i) : await $o(i);
    for (const n of Tx)
      if (n.error) r[t(978)] = !0, r[t(401)] = n[t(1033)].response ? Bo(n.error[t(915)][t(2114)]) : {}, Object.assign(r[t(401)], { "-1": ((s = (e = n.error[t(915)]) == null ? void 0 : e[t(1033)]) == null ? void 0 : s[t(2851)]) || n[t(1033)].message });
      else {
        const o = n[t(1435)].prompt_id;
        r[t(276)][t(528)](o), Uo(o);
      }
  } catch (n) {
    nx(t(1658), n[t(561)]), r[t(978)] = !0, r[t(401)] = { "-1": n[t(2851)] || n[t(1977)]() };
  }
  return r;
}
function Uo(i) {
  const x = a;
  let t, r;
  const e = new Promise((s, n) => {
    t = s, r = n;
  });
  Me[x(480)](i, { promise: e, resolveImage: t, rejectImage: r });
}
function Vo({ hasError: i, generalError: x, nodeErrors: t }) {
  const r = a;
  i && (x ? P0.store.setState({ lastError: x }) : P0.store[r(2805)]({ widgetableErrors: t }));
}
async function* Zo(i) {
  const x = a, t = /* @__PURE__ */ new Map();
  for (const r of i) {
    const e = Me[x(2917)](r);
    e && t.set(r, e[x(2217)]);
  }
  if (t.size !== 0)
    for (nx(x(1879)); t[x(1933)] > 0; ) {
      const r = Array.from(t[x(1113)]()), e = r[x(1753)](([o, c]) => c[x(654)]((u) => ({ prompt_id: o, images: u }))), { prompt_id: s, images: n } = await Promise.race(e);
      nx(x(1844), s), t[x(2764)](s), Me[x(2764)](s), yield { success: !0, prompt_ids: [s], images: n };
    }
}
function Bo(i) {
  const x = a, t = {};
  return Object[x(1400)](i)[x(1188)]((r) => {
    const e = x, s = r[e(1160)](":")[0], n = N0[e(1891)].nodes.find((o) => o.id == s);
    t[s] = "[" + ((n == null ? void 0 : n[e(857)]) || s) + "]" + i[r][e(2183)].map(JSON[e(2340)])[e(1255)](`
`);
  }), t;
}
const Wo = ix[a(1469)](a(1499));
P0[a(491)](a(2922), async (i) => {
  const x = a;
  return i != null && i[x(1881)] && Wo(x(1645), i[x(1881)]), { comfyVersion: x(1862), hostVersion: (i == null ? void 0 : i[x(1881)]) ?? "" };
}), P0.implementAction(a(1767), async (i) => {
  const x = a, { node_id: t, title: r } = i, e = N0[x(1891)].nodes.find((s) => s.id == t);
  if (!e) throw new Error(x(633));
  return e[x(857)] = r, e[x(1954)]("sdppp_widgetable_title", r), { success: !0 };
}), P0[a(491)]("reboot", async () => {
  const i = a, x = await fetch(i(281));
  return x[i(333)] == 404 ? { error: Yt("ComfyManager not found, cannot reboot"), success: !1 } : x[i(333)] == 200 ? { success: !0 } : { error: Yt(i(2703)) + x.statusText, success: !1 };
}), P0[a(491)](a(2770), async (i) => {
  const x = a, { api_key: t } = i;
  return localStorage[x(1503)](x(879), t), location[x(1273)](), { success: !0 };
}), P0[a(491)]("logout", async () => {
  const i = a;
  return document[i(2715)](".pi-sign-out").parentElement[i(2478)](), { success: !0 };
});
function Ko(i) {
  const x = a, t = atob(i), r = t[x(1667)], e = new Uint8Array(r);
  for (let s = 0; s < r; s++)
    e[s] = t[x(2116)](s);
  return e;
}
P0.implementAction(a(2318), async (i, x, t) => {
  const r = a, { fileName: e, overwrite: s = !0, mimeType: n = r(2041), dataBase64: o } = i;
  if (t != null && t.aborted) throw new DOMException(r(1507), r(1623));
  const c = Ko(o), u = new Blob([c], { type: n }), d = new FormData();
  d.append(r(2334), u), d[r(2868)]("filename", e), d.append(r(2046), s ? "true" : r(2829));
  const l = await fetch("./sdppp_upload2", { method: r(815), body: d, signal: t });
  if (!l.ok) throw new Error(r(532) + l.statusText);
  const f = await l[r(2691)]();
  return { name: f.subfolder + "/" + f[r(1274)] };
});
const Ws = "2025-06-18", Go = [Ws, a(550), a(277), "2024-10-07"], _x = a(2377), Ks = K0([g(), W().int()]), Gs = g(), Jo = S({ progressToken: Z(Ks) })[a(2526)](), re = S({ _meta: Z(Jo) })[a(2526)](), xe = S({ method: g(), params: Z(re) }), ox = S({ _meta: Z(S({})[a(2526)]()) })[a(2526)](), be = S({ method: g(), params: Z(ox) }), se = S({ _meta: Z(S({})[a(2526)]()) })[a(2526)](), Ox = K0([g(), W()[a(2836)]()]), Js = S({ jsonrpc: t0(_x), id: Ox })[a(2865)](xe)[a(763)](), Qo = (i) => Js[a(2406)](i).success, Qs = S({ jsonrpc: t0(_x) })[a(2865)](be)[a(763)](), Xo = (i) => Qs.safeParse(i).success, Xs = S({ jsonrpc: t0(_x), id: Ox, result: se })[a(763)](), rr = (i) => Xs.safeParse(i)[a(1494)];
var ve;
(function(i) {
  const x = a;
  i[i[x(2292)] = -32e3] = x(2292), i[i[x(421)] = -32001] = x(421), i[i[x(865)] = -32700] = x(865), i[i.InvalidRequest = -32600] = "InvalidRequest", i[i[x(1788)] = -32601] = x(1788), i[i[x(1817)] = -32602] = "InvalidParams", i[i[x(947)] = -32603] = "InternalError";
})(ve || (ve = {}));
const Ys = S({ jsonrpc: t0(_x), id: Ox, error: S({ code: W().int(), message: g(), data: Z(ke()) }) })[a(763)](), Yo = (i) => Ys[a(2406)](i)[a(1494)];
K0([Js, Qs, Xs, Ys]);
const ta = se.strict(), aa = be[a(1469)]({ method: t0(a(484)), params: ox[a(1469)]({ requestId: Ox, reason: g()[a(1195)]() }) }), cx = S({ name: g(), title: Z(g()) })[a(2526)](), en = cx[a(1469)]({ version: g() }), ec = S({ experimental: Z(S({})[a(2526)]()), sampling: Z(S({})[a(2526)]()), elicitation: Z(S({})[a(2526)]()), roots: Z(S({ listChanged: Z(e0()) }).passthrough()) }).passthrough(), xn = xe.extend({ method: t0(a(686)), params: re[a(1469)]({ protocolVersion: g(), capabilities: ec, clientInfo: en }) }), xc = S({ experimental: Z(S({}).passthrough()), logging: Z(S({})[a(2526)]()), completions: Z(S({}).passthrough()), prompts: Z(S({ listChanged: Z(e0()) })[a(2526)]()), resources: Z(S({ subscribe: Z(e0()), listChanged: Z(e0()) })[a(2526)]()), tools: Z(S({ listChanged: Z(e0()) })[a(2526)]()) })[a(2526)](), tc = se[a(1469)]({ protocolVersion: g(), capabilities: xc, serverInfo: en, instructions: Z(g()) }), tn = be[a(1469)]({ method: t0("notifications/initialized") }), ra = xe.extend({ method: t0(a(656)) }), ac = S({ progress: W(), total: Z(W()), message: Z(g()) })[a(2526)](), sa = be.extend({ method: t0(a(1997)), params: ox.merge(ac)[a(1469)]({ progressToken: Ks }) }), Dx = xe.extend({ params: re[a(1469)]({ cursor: Z(Gs) }).optional() }), jx = se[a(1469)]({ nextCursor: Z(Gs) }), an = S({ uri: g(), mimeType: Z(g()), _meta: Z(S({})[a(2526)]()) })[a(2526)](), rn = an[a(1469)]({ text: g() }), sn = an[a(1469)]({ blob: g()[a(1589)]() }), nn = cx.extend({ uri: g(), description: Z(g()), mimeType: Z(g()), _meta: Z(S({})[a(2526)]()) }), rc = cx[a(1469)]({ uriTemplate: g(), description: Z(g()), mimeType: Z(g()), _meta: Z(S({}).passthrough()) }), sc = Dx[a(1469)]({ method: t0(a(2637)) }), nc = jx[a(1469)]({ resources: w0(nn) }), ic = Dx[a(1469)]({ method: t0("resources/templates/list") }), oc = jx[a(1469)]({ resourceTemplates: w0(rc) }), cc = xe[a(1469)]({ method: t0(a(1092)), params: re.extend({ uri: g() }) }), uc = se[a(1469)]({ contents: w0(K0([rn, sn])) }), dc = be[a(1469)]({ method: t0(a(2161)) }), lc = xe[a(1469)]({ method: t0(a(2082)), params: re[a(1469)]({ uri: g() }) }), fc = xe[a(1469)]({ method: t0(a(1865)), params: re[a(1469)]({ uri: g() }) }), hc = be[a(1469)]({ method: t0(a(1141)), params: ox[a(1469)]({ uri: g() }) }), pc = S({ name: g(), description: Z(g()), required: Z(e0()) })[a(2526)](), mc = cx[a(1469)]({ description: Z(g()), arguments: Z(w0(pc)), _meta: Z(S({})[a(2526)]()) }), bc = Dx.extend({ method: t0("prompts/list") }), gc = jx.extend({ prompts: w0(mc) }), yc = xe[a(1469)]({ method: t0("prompts/get"), params: re[a(1469)]({ name: g(), arguments: Z(D0(g())) }) }), ca = S({ type: t0(a(1956)), text: g(), _meta: Z(S({})[a(2526)]()) })[a(2526)](), ua = S({ type: t0("image"), data: g()[a(1589)](), mimeType: g(), _meta: Z(S({}).passthrough()) })[a(2526)](), da = S({ type: t0(a(718)), data: g()[a(1589)](), mimeType: g(), _meta: Z(S({})[a(2526)]()) })[a(2526)](), vc = S({ type: t0("resource"), resource: K0([rn, sn]), _meta: Z(S({}).passthrough()) })[a(2526)](), wc = nn[a(1469)]({ type: t0("resource_link") }), on = K0([ca, ua, da, wc, vc]), Sc = S({ role: R0([a(1850), a(275)]), content: on })[a(2526)](), kc = se[a(1469)]({ description: Z(g()), messages: w0(Sc) }), Pc = be[a(1469)]({ method: t0(a(991)) }), Ic = S({ title: Z(g()), readOnlyHint: Z(e0()), destructiveHint: Z(e0()), idempotentHint: Z(e0()), openWorldHint: Z(e0()) })[a(2526)](), Ec = cx.extend({ description: Z(g()), inputSchema: S({ type: t0(a(2613)), properties: Z(S({})[a(2526)]()), required: Z(w0(g())) }).passthrough(), outputSchema: Z(S({ type: t0(a(2613)), properties: Z(S({})[a(2526)]()), required: Z(w0(g())) })[a(2526)]()), annotations: Z(Ic), _meta: Z(S({})[a(2526)]()) }), Rc = Dx[a(1469)]({ method: t0("tools/list") }), Cc = jx[a(1469)]({ tools: w0(Ec) }), cn = se.extend({ content: w0(on)[a(2475)]([]), structuredContent: S({})[a(2526)]()[a(1195)](), isError: Z(e0()) });
cn.or(se[a(1469)]({ toolResult: ke() }));
const Fc = xe[a(1469)]({ method: t0(a(2465)), params: re[a(1469)]({ name: g(), arguments: Z(D0(ke())) }) }), Nc = be[a(1469)]({ method: t0(a(775)) }), un = R0(["debug", a(2175), a(1580), "warning", a(1033), a(1797), a(400), a(262)]), qc = xe[a(1469)]({ method: t0(a(2915)), params: re[a(1469)]({ level: un }) }), Tc = be.extend({ method: t0(a(2154)), params: ox[a(1469)]({ level: un, logger: Z(g()), data: ke() }) }), Ac = S({ name: g()[a(1195)]() })[a(2526)](), _c = S({ hints: Z(w0(Ac)), costPriority: Z(W()[a(1807)](0)[a(1663)](1)), speedPriority: Z(W()[a(1807)](0).max(1)), intelligencePriority: Z(W()[a(1807)](0)[a(1663)](1)) })[a(2526)](), Oc = S({ role: R0(["user", "assistant"]), content: K0([ca, ua, da]) })[a(2526)](), Dc = xe.extend({ method: t0(a(1991)), params: re[a(1469)]({ messages: w0(Oc), systemPrompt: Z(g()), includeContext: Z(R0(["none", a(1550), a(1017)])), temperature: Z(W()), maxTokens: W()[a(2836)](), stopSequences: Z(w0(g())), metadata: Z(S({})[a(2526)]()), modelPreferences: Z(_c) }) }), dn = se.extend({ model: g(), stopReason: Z(R0([a(1944), a(1617), a(2179)]).or(g())), role: R0([a(1850), a(275)]), content: Ls("type", [ca, ua, da]) }), jc = S({ type: t0("boolean"), title: Z(g()), description: Z(g()), default: Z(e0()) })[a(2526)](), Mc = S({ type: t0(a(1019)), title: Z(g()), description: Z(g()), minLength: Z(W()), maxLength: Z(W()), format: Z(R0([a(1916), a(607), a(1401), a(345)])) })[a(2526)](), Lc = S({ type: R0([a(329), "integer"]), title: Z(g()), description: Z(g()), minimum: Z(W()), maximum: Z(W()) })[a(2526)](), $c = S({ type: t0("string"), title: Z(g()), description: Z(g()), enum: w0(g()), enumNames: Z(w0(g())) }).passthrough(), Hc = K0([jc, Mc, Lc, $c]), zc = xe.extend({ method: t0("elicitation/create"), params: re[a(1469)]({ message: g(), requestedSchema: S({ type: t0("object"), properties: D0(g(), Hc), required: Z(w0(g())) })[a(2526)]() }) }), ln = se[a(1469)]({ action: R0([a(2101), a(2508), "cancel"]), content: Z(D0(g(), ke())) }), Uc = S({ type: t0(a(1558)), uri: g() })[a(2526)](), Vc = S({ type: t0(a(2781)), name: g() })[a(2526)](), Zc = xe.extend({ method: t0(a(404)), params: re.extend({ ref: K0([Vc, Uc]), argument: S({ name: g(), value: g() }).passthrough(), context: Z(S({ arguments: Z(D0(g(), g())) })) }) }), Bc = se.extend({ completion: S({ values: w0(g())[a(1663)](100), total: Z(W()[a(2836)]()), hasMore: Z(e0()) })[a(2526)]() }), Wc = S({ uri: g().startsWith(a(1668)), name: Z(g()), _meta: Z(S({}).passthrough()) })[a(2526)](), Kc = xe[a(1469)]({ method: t0(a(1214)) }), fn = se[a(1469)]({ roots: w0(Wc) }), Gc = be.extend({ method: t0("notifications/roots/list_changed") });
K0([ra, xn, Zc, qc, yc, bc, sc, ic, cc, lc, fc, Fc, Rc]), K0([aa, sa, tn, Gc]), K0([ta, dn, ln, fn]), K0([ra, Dc, zc, Kc]), K0([aa, sa, Tc, hc, dc, Nc, Pc]), K0([ta, tc, Bc, kc, gc, nc, oc, uc, cn, Cc]);
class _e extends Error {
  constructor(x, t, r) {
    const e = a;
    super(e(1457) + x + ": " + t), this[e(444)] = x, this[e(782)] = r, this[e(1274)] = e(1745);
  }
}
const Jc = 6e4;
class Qc {
  constructor(x) {
    const t = a;
    this[t(2541)] = x, this[t(1201)] = 0, this._requestHandlers = /* @__PURE__ */ new Map(), this._requestHandlerAbortControllers = /* @__PURE__ */ new Map(), this[t(2497)] = /* @__PURE__ */ new Map(), this._responseHandlers = /* @__PURE__ */ new Map(), this[t(2359)] = /* @__PURE__ */ new Map(), this[t(788)] = /* @__PURE__ */ new Map(), this._pendingDebouncedNotifications = /* @__PURE__ */ new Set(), this[t(1674)](aa, (r) => {
      const e = t, s = this[e(2549)][e(2917)](r[e(2307)][e(1044)]);
      s == null || s[e(522)](r[e(2307)][e(1972)]);
    }), this[t(1674)](sa, (r) => {
      this[t(2901)](r);
    }), this[t(920)](ra, (r) => ({}));
  }
  _setupTimeout(x, t, r, e, s = !1) {
    const n = a;
    this[n(788)][n(480)](x, { timeoutId: setTimeout(e, t), startTime: Date[n(722)](), timeout: t, maxTotalTimeout: r, resetTimeoutOnProgress: s, onTimeout: e });
  }
  [a(1665)](x) {
    const t = a, r = this[t(788)][t(2917)](x);
    if (!r) return !1;
    const e = Date[t(722)]() - r[t(2453)];
    if (r[t(2862)] && e >= r[t(2862)])
      throw this[t(788)].delete(x), new _e(ve[t(421)], "Maximum total timeout exceeded", { maxTotalTimeout: r[t(2862)], totalElapsed: e });
    return clearTimeout(r[t(2040)]), r[t(2040)] = setTimeout(r[t(2381)], r.timeout), !0;
  }
  _cleanupTimeout(x) {
    const t = a, r = this[t(788)].get(x);
    r && (clearTimeout(r.timeoutId), this._timeoutInfo[t(2764)](x));
  }
  async [a(1199)](x) {
    const t = a;
    var r, e, s;
    this[t(577)] = x;
    const n = (r = this[t(993)]) === null || r === void 0 ? void 0 : r.onclose;
    this._transport.onclose = () => {
      n == null || n(), this._onclose();
    };
    const o = (e = this[t(993)]) === null || e === void 0 ? void 0 : e[t(2405)];
    this[t(577)][t(2405)] = (u) => {
      const d = t;
      o == null || o(u), this[d(2071)](u);
    };
    const c = (s = this[t(577)]) === null || s === void 0 ? void 0 : s.onmessage;
    this[t(577)][t(2742)] = (u, d) => {
      const l = t;
      c == null || c(u, d), rr(u) || Yo(u) ? this[l(994)](u) : Qo(u) ? this[l(1496)](u, d) : Xo(u) ? this[l(1579)](u) : this[l(2071)](new Error(l(1792) + JSON[l(2340)](u)));
    }, await this._transport[t(817)]();
  }
  [a(1004)]() {
    const x = a;
    var t;
    const r = this._responseHandlers;
    this[x(1974)] = /* @__PURE__ */ new Map(), this[x(2359)][x(2450)](), this[x(375)].clear(), this[x(577)] = void 0, (t = this[x(2023)]) === null || t === void 0 || t[x(1512)](this);
    const e = new _e(ve[x(2292)], x(897));
    for (const s of r[x(615)]())
      s(e);
  }
  _onerror(x) {
    const t = a;
    var r;
    (r = this.onerror) === null || r === void 0 || r[t(1512)](this, x);
  }
  [a(1579)](x) {
    const t = a;
    var r;
    const e = (r = this[t(2497)].get(x[t(2693)])) !== null && r !== void 0 ? r : this[t(2863)];
    e !== void 0 && Promise[t(2345)]()[t(654)](() => e(x)).catch((s) => this[t(2071)](new Error(t(2776) + s)));
  }
  [a(1496)](x, t) {
    const r = a;
    var e, s, n, o;
    const c = (e = this[r(1717)][r(2917)](x[r(2693)])) !== null && e !== void 0 ? e : this.fallbackRequestHandler;
    if (c === void 0) {
      (s = this[r(577)]) === null || s === void 0 || s[r(335)]({ jsonrpc: "2.0", id: x.id, error: { code: ve[r(1788)], message: r(263) } })[r(1336)]((l) => this[r(2071)](new Error(r(1111) + l)));
      return;
    }
    const u = new AbortController();
    this[r(2549)][r(480)](x.id, u);
    const d = { signal: u[r(2631)], sessionId: (n = this[r(577)]) === null || n === void 0 ? void 0 : n.sessionId, _meta: (o = x[r(2307)]) === null || o === void 0 ? void 0 : o._meta, sendNotification: (l) => this[r(1707)](l, { relatedRequestId: x.id }), sendRequest: (l, f, b) => this.request(l, f, { ...b, relatedRequestId: x.id }), authInfo: t == null ? void 0 : t[r(2035)], requestId: x.id, requestInfo: t == null ? void 0 : t[r(766)] };
    Promise[r(2345)]().then(() => c(x, d))[r(654)]((l) => {
      const f = r;
      var b;
      if (!u.signal[f(794)])
        return (b = this[f(577)]) === null || b === void 0 ? void 0 : b[f(335)]({ result: l, jsonrpc: f(2377), id: x.id });
    }, (l) => {
      const f = r;
      var b, h;
      if (!u.signal[f(794)])
        return (b = this[f(577)]) === null || b === void 0 ? void 0 : b[f(335)]({ jsonrpc: f(2377), id: x.id, error: { code: Number.isSafeInteger(l.code) ? l[f(444)] : ve.InternalError, message: (h = l.message) !== null && h !== void 0 ? h : f(1994) } });
    })[r(1336)]((l) => this[r(2071)](new Error(r(363) + l))).finally(() => {
      const l = r;
      this._requestHandlerAbortControllers[l(2764)](x.id);
    });
  }
  _onprogress(x) {
    const t = a, { progressToken: r, ...e } = x[t(2307)], s = Number(r), n = this._progressHandlers.get(s);
    if (!n) {
      this[t(2071)](new Error("Received a progress notification for an unknown token: " + JSON[t(2340)](x)));
      return;
    }
    const o = this[t(1974)][t(2917)](s), c = this._timeoutInfo.get(s);
    if (c && o && c[t(1474)]) try {
      this[t(1665)](s);
    } catch (u) {
      o(u);
      return;
    }
    n(e);
  }
  [a(994)](x) {
    const t = a, r = Number(x.id), e = this._responseHandlers[t(2917)](r);
    if (e === void 0) {
      this[t(2071)](new Error(t(2718) + JSON[t(2340)](x)));
      return;
    }
    if (this[t(1974)][t(2764)](r), this[t(2359)].delete(r), this[t(2234)](r), rr(x)) e(x);
    else {
      const s = new _e(x[t(1033)][t(444)], x[t(1033)][t(2851)], x[t(1033)].data);
      e(s);
    }
  }
  get [a(993)]() {
    return this._transport;
  }
  async [a(971)]() {
    const x = a;
    var t;
    await ((t = this[x(577)]) === null || t === void 0 ? void 0 : t.close());
  }
  request(x, t, r) {
    const { relatedRequestId: e, resumptionToken: s, onresumptiontoken: n } = r ?? {};
    return new Promise((o, c) => {
      const u = K;
      var d, l, f, b, h, m;
      if (!this._transport) {
        c(new Error(u(588)));
        return;
      }
      ((d = this[u(2541)]) === null || d === void 0 ? void 0 : d[u(1022)]) === !0 && this.assertCapabilityForMethod(x[u(2693)]), (l = r == null ? void 0 : r[u(2631)]) === null || l === void 0 || l[u(2710)]();
      const v = this[u(1201)]++, k = { ...x, jsonrpc: u(2377), id: v };
      r != null && r[u(985)] && (this[u(2359)][u(480)](v, r[u(985)]), k.params = { ...x[u(2307)], _meta: { ...((f = x.params) === null || f === void 0 ? void 0 : f._meta) || {}, progressToken: v } });
      const P = (C) => {
        const E = u;
        var R;
        this[E(1974)][E(2764)](v), this[E(2359)][E(2764)](v), this._cleanupTimeout(v), (R = this[E(577)]) === null || R === void 0 || R.send({ jsonrpc: "2.0", method: E(484), params: { requestId: v, reason: String(C) } }, { relatedRequestId: e, resumptionToken: s, onresumptiontoken: n })[E(1336)]((O) => this[E(2071)](new Error("Failed to send cancellation: " + O))), c(C);
      };
      this._responseHandlers[u(480)](v, (C) => {
        const E = u;
        var R;
        if (!(!((R = r == null ? void 0 : r[E(2631)]) === null || R === void 0) && R[E(794)])) {
          if (C instanceof Error) return c(C);
          try {
            const O = t.parse(C.result);
            o(O);
          } catch (O) {
            c(O);
          }
        }
      }), (b = r == null ? void 0 : r[u(2631)]) === null || b === void 0 || b[u(1424)]("abort", () => {
        const C = u;
        var E;
        P((E = r == null ? void 0 : r[C(2631)]) === null || E === void 0 ? void 0 : E[C(1972)]);
      });
      const F = (h = r == null ? void 0 : r.timeout) !== null && h !== void 0 ? h : Jc, A = () => P(new _e(ve[u(421)], "Request timed out", { timeout: F }));
      this[u(1235)](v, F, r == null ? void 0 : r[u(2862)], A, (m = r == null ? void 0 : r[u(1474)]) !== null && m !== void 0 ? m : !1), this[u(577)][u(335)](k, { relatedRequestId: e, resumptionToken: s, onresumptiontoken: n }).catch((C) => {
        this[u(2234)](v), c(C);
      });
    });
  }
  async [a(1707)](x, t) {
    const r = a;
    var e, s;
    if (!this[r(577)]) throw new Error(r(588));
    if (this.assertNotificationCapability(x.method), ((s = (e = this[r(2541)]) === null || e === void 0 ? void 0 : e[r(2573)]) !== null && s !== void 0 ? s : []).includes(x[r(2693)]) && !x[r(2307)] && !(t != null && t[r(245)])) {
      if (this[r(375)][r(2507)](x.method)) return;
      this[r(375)][r(2701)](x.method), Promise[r(2345)]()[r(654)](() => {
        const u = r;
        var d;
        if (this[u(375)][u(2764)](x[u(2693)]), !this[u(577)]) return;
        const l = { ...x, jsonrpc: u(2377) };
        (d = this[u(577)]) === null || d === void 0 || d[u(335)](l, t)[u(1336)]((f) => this[u(2071)](f));
      });
      return;
    }
    const c = { ...x, jsonrpc: r(2377) };
    await this[r(577)].send(c, t);
  }
  setRequestHandler(x, t) {
    const r = a, e = x[r(308)][r(2693)].value;
    this[r(2625)](e), this[r(1717)][r(480)](e, (s, n) => {
      const o = r;
      return Promise[o(2345)](t(x[o(1198)](s), n));
    });
  }
  [a(1487)](x) {
    this[a(1717)].delete(x);
  }
  [a(1378)](x) {
    const t = a;
    if (this._requestHandlers.has(x)) throw new Error("A request handler for " + x + t(247));
  }
  [a(1674)](x, t) {
    const r = a;
    this[r(2497)].set(x[r(308)][r(2693)][r(2380)], (e) => Promise.resolve(t(x[r(1198)](e))));
  }
  removeNotificationHandler(x) {
    this._notificationHandlers.delete(x);
  }
}
function Xc(i, x) {
  const t = a;
  return Object[t(1113)](x)[t(1156)]((r, [e, s]) => (s && typeof s === t(2613) ? r[e] = r[e] ? { ...r[e], ...s } : s : r[e] = s, r), { ...i });
}
var Xe = { exports: {} }, Yc = Xe.exports, sr;
function e2() {
  const i = a;
  return sr || (sr = 1, (function(x, t) {
    (function(r, e) {
      e(t);
    })(Yc, function(r) {
      const e = K;
      function s() {
        const I = K;
        for (var p = arguments[I(1667)], y = Array(p), w = 0; w < p; w++)
          y[w] = arguments[w];
        if (y[I(1667)] > 1) {
          y[0] = y[0].slice(0, -1);
          for (var $ = y[I(1667)] - 1, M = 1; M < $; ++M)
            y[M] = y[M][I(2419)](1, -1);
          return y[$] = y[$].slice(1), y[I(1255)]("");
        } else return y[0];
      }
      function n(I) {
        return K(2134) + I + ")";
      }
      function o(I) {
        const p = K;
        return I === void 0 ? p(1714) : I === null ? p(1399) : Object[p(1523)][p(1977)][p(1512)](I)[p(1160)](" ")[p(940)]()[p(1160)]("]").shift().toLowerCase();
      }
      function c(I) {
        return I.toUpperCase();
      }
      function u(I) {
        const p = K;
        return I != null ? I instanceof Array ? I : typeof I[p(1667)] !== p(329) || I.split || I[p(518)] || I[p(1512)] ? [I] : Array[p(1523)][p(2419)][p(1512)](I) : [];
      }
      function d(I, p) {
        var y = I;
        if (p) for (var w in p)
          y[w] = p[w];
        return y;
      }
      function l(I) {
        const p = K;
        var y = "[A-Za-z]", w = p(1037), $ = s(w, p(742)), M = n(n("%[EFef]" + $ + "%" + $ + $ + "%" + $ + $) + "|" + n("%[89A-Fa-f]" + $ + "%" + $ + $) + "|" + n("%" + $ + $)), s0 = p(1860), d0 = p(2532), I0 = s(s0, d0), j0 = I ? "[\\xA0-\\u200D\\u2010-\\u2029\\u202F-\\uD7FF\\uF900-\\uFDCF\\uFDF0-\\uFFEF]" : "[]", V0 = I ? "[\\uE000-\\uF8FF]" : "[]", E0 = s(y, w, p(695), j0);
        n(y + s(y, w, p(429)) + "*"), n(n(M + "|" + s(E0, d0, "[\\:]")) + "*");
        var O0 = n(n("25[0-5]") + "|" + n(p(2021) + w) + "|" + n("1" + w + w) + "|" + n(p(1737) + w) + p(1685) + w), Z0 = n(O0 + "\\." + O0 + "\\." + O0 + "\\." + O0), g0 = n($ + p(2581)), $0 = n(n(g0 + "\\:" + g0) + "|" + Z0), B0 = n(n(g0 + "\\:") + p(288) + $0), H0 = n(p(765) + n(g0 + "\\:") + "{5}" + $0), Ie = n(n(g0) + p(1341) + n(g0 + "\\:") + p(596) + $0), oe = n(n(n(g0 + "\\:") + p(2404) + g0) + "?\\:\\:" + n(g0 + "\\:") + p(919) + $0), ce = n(n(n(g0 + "\\:") + p(325) + g0) + p(1341) + n(g0 + "\\:") + p(427) + $0), $e = n(n(n(g0 + "\\:") + "{0,3}" + g0) + "?\\:\\:" + g0 + "\\:" + $0), Te = n(n(n(g0 + "\\:") + p(2656) + g0) + p(1341) + $0), te = n(n(n(g0 + "\\:") + p(1422) + g0) + p(1341) + g0), ue = n(n(n(g0 + "\\:") + p(1264) + g0) + p(1341)), de = n([B0, H0, Ie, oe, ce, $e, Te, te, ue][p(1255)]("|")), le = n(n(E0 + "|" + M) + "+");
        n("[vV]" + $ + p(1468) + s(E0, d0, "[\\:]") + "+"), n(n(M + "|" + s(E0, d0)) + "*");
        var fe = n(M + "|" + s(E0, d0, p(984)));
        return n(n(M + "|" + s(E0, d0, p(968))) + "+"), n(n(fe + "|" + s(p(1868), V0)) + "*"), { NOT_SCHEME: new RegExp(s(p(1241), y, w, p(429)), "g"), NOT_USERINFO: new RegExp(s(p(1158), E0, d0), "g"), NOT_HOST: new RegExp(s(p(1537), E0, d0), "g"), NOT_PATH: new RegExp(s("[^\\%\\/\\:\\@]", E0, d0), "g"), NOT_PATH_NOSCHEME: new RegExp(s(p(2896), E0, d0), "g"), NOT_QUERY: new RegExp(s(p(1458), E0, d0, "[\\:\\@\\/\\?]", V0), "g"), NOT_FRAGMENT: new RegExp(s(p(1458), E0, d0, p(575)), "g"), ESCAPE: new RegExp(s(p(1241), E0, d0), "g"), UNRESERVED: new RegExp(E0, "g"), OTHER_CHARS: new RegExp(s("[^\\%]", E0, I0), "g"), PCT_ENCODED: new RegExp(M, "g"), IPV4ADDRESS: new RegExp("^(" + Z0 + ")$"), IPV6ADDRESS: new RegExp(p(2122) + de + ")" + n(n(p(616) + $ + "{2})") + "(" + le + ")") + p(1902)) };
      }
      var f = l(!1), b = l(!0), h = /* @__PURE__ */ (function() {
        function I(p, y) {
          const w = K;
          var $ = [], M = !0, s0 = !1, d0 = void 0;
          try {
            for (var I0 = p[Symbol[w(1573)]](), j0; !(M = (j0 = I0[w(369)]())[w(1196)]) && ($[w(528)](j0[w(2380)]), !(y && $[w(1667)] === y)); M = !0)
              ;
          } catch (V0) {
            s0 = !0, d0 = V0;
          } finally {
            try {
              !M && I0[w(1222)] && I0[w(1222)]();
            } finally {
              if (s0) throw d0;
            }
          }
          return $;
        }
        return function(p, y) {
          const w = K;
          if (Array[w(1683)](p)) return p;
          if (Symbol[w(1573)] in Object(p)) return I(p, y);
          throw new TypeError("Invalid attempt to destructure non-iterable instance");
        };
      })(), m = function(I) {
        const p = K;
        if (Array.isArray(I)) {
          for (var y = 0, w = Array(I[p(1667)]); y < I[p(1667)]; y++) w[y] = I[y];
          return w;
        } else return Array[p(2809)](I);
      }, v = 2147483647, k = 36, P = 1, F = 26, A = 38, C = 700, E = 72, R = 128, O = "-", D = /^xn--/, j = /[^\0-\x7E]/, q = /[\x2E\u3002\uFF0E\uFF61]/g, N = { overflow: "Overflow: input needs wider integers to process", "not-basic": e(2354), "invalid-input": e(2312) }, z = k - P, L = Math[e(2696)], U = String[e(1618)];
      function G(I) {
        throw new RangeError(N[I]);
      }
      function c0(I, p) {
        const y = e;
        for (var w = [], $ = I[y(1667)]; $--; )
          w[$] = p(I[$]);
        return w;
      }
      function u0(I, p) {
        const y = e;
        var w = I[y(1160)]("@"), $ = "";
        w.length > 1 && ($ = w[0] + "@", I = w[1]), I = I[y(340)](q, ".");
        var M = I[y(1160)]("."), s0 = c0(M, p)[y(1255)](".");
        return $ + s0;
      }
      function l0(I) {
        const p = e;
        for (var y = [], w = 0, $ = I[p(1667)]; w < $; ) {
          var M = I[p(2116)](w++);
          if (M >= 55296 && M <= 56319 && w < $) {
            var s0 = I[p(2116)](w++);
            (s0 & 64512) == 56320 ? y[p(528)](((M & 1023) << 10) + (s0 & 1023) + 65536) : (y.push(M), w--);
          } else y[p(528)](M);
        }
        return y;
      }
      var o0 = function(p) {
        return String[e(1530)].apply(String, m(p));
      }, f0 = function(p) {
        return p - 48 < 10 ? p - 22 : p - 65 < 26 ? p - 65 : p - 97 < 26 ? p - 97 : k;
      }, k0 = function(p, y) {
        return p + 22 + 75 * (p < 26) - ((y != 0) << 5);
      }, y0 = function(p, y, w) {
        var $ = 0;
        for (p = w ? L(p / C) : p >> 1, p += L(p / y); p > z * F >> 1; $ += k)
          p = L(p / z);
        return L($ + (z + 1) * p / (p + A));
      }, M0 = function(p) {
        const y = e;
        var w = [], $ = p[y(1667)], M = 0, s0 = R, d0 = E, I0 = p[y(2332)](O);
        I0 < 0 && (I0 = 0);
        for (var j0 = 0; j0 < I0; ++j0)
          p[y(2116)](j0) >= 128 && G("not-basic"), w[y(528)](p.charCodeAt(j0));
        for (var V0 = I0 > 0 ? I0 + 1 : 0; V0 < $; ) {
          for (var E0 = M, O0 = 1, Z0 = k; ; Z0 += k) {
            V0 >= $ && G(y(861));
            var g0 = f0(p[y(2116)](V0++));
            (g0 >= k || g0 > L((v - M) / O0)) && G(y(1301)), M += g0 * O0;
            var $0 = Z0 <= d0 ? P : Z0 >= d0 + F ? F : Z0 - d0;
            if (g0 < $0) break;
            var B0 = k - $0;
            O0 > L(v / B0) && G(y(1301)), O0 *= B0;
          }
          var H0 = w.length + 1;
          d0 = y0(M - E0, H0, E0 == 0), L(M / H0) > v - s0 && G(y(1301)), s0 += L(M / H0), M %= H0, w.splice(M++, 0, s0);
        }
        return String[y(1530)].apply(String, w);
      }, F0 = function(p) {
        const y = e;
        var w = [];
        p = l0(p);
        var $ = p[y(1667)], M = R, s0 = 0, d0 = E, I0 = !0, j0 = !1, V0 = void 0;
        try {
          for (var E0 = p[Symbol[y(1573)]](), O0; !(I0 = (O0 = E0[y(369)]())[y(1196)]); I0 = !0) {
            var Z0 = O0[y(2380)];
            Z0 < 128 && w[y(528)](U(Z0));
          }
        } catch (Ge) {
          j0 = !0, V0 = Ge;
        } finally {
          try {
            !I0 && E0[y(1222)] && E0.return();
          } finally {
            if (j0) throw V0;
          }
        }
        var g0 = w[y(1667)], $0 = g0;
        for (g0 && w[y(528)](O); $0 < $; ) {
          var B0 = v, H0 = !0, Ie = !1, oe = void 0;
          try {
            for (var ce = p[Symbol[y(1573)]](), $e; !(H0 = ($e = ce[y(369)]())[y(1196)]); H0 = !0) {
              var Te = $e.value;
              Te >= M && Te < B0 && (B0 = Te);
            }
          } catch (Ge) {
            Ie = !0, oe = Ge;
          } finally {
            try {
              !H0 && ce[y(1222)] && ce[y(1222)]();
            } finally {
              if (Ie) throw oe;
            }
          }
          var te = $0 + 1;
          B0 - M > L((v - s0) / te) && G(y(1301)), s0 += (B0 - M) * te, M = B0;
          var ue = !0, de = !1, le = void 0;
          try {
            for (var fe = p[Symbol[y(1573)]](), Pa; !(ue = (Pa = fe.next())[y(1196)]); ue = !0) {
              var Ia = Pa[y(2380)];
              if (Ia < M && ++s0 > v && G(y(1301)), Ia == M) {
                for (var ux = s0, dx = k; ; dx += k) {
                  var lx = dx <= d0 ? P : dx >= d0 + F ? F : dx - d0;
                  if (ux < lx) break;
                  var Ea = ux - lx, Ra = k - lx;
                  w[y(528)](U(k0(lx + Ea % Ra, 0))), ux = L(Ea / Ra);
                }
                w[y(528)](U(k0(ux, 0))), d0 = y0(s0, te, $0 == g0), s0 = 0, ++$0;
              }
            }
          } catch (Ge) {
            de = !0, le = Ge;
          } finally {
            try {
              !ue && fe[y(1222)] && fe[y(1222)]();
            } finally {
              if (de) throw le;
            }
          }
          ++s0, ++M;
        }
        return w[y(1255)]("");
      }, J0 = function(p) {
        return u0(p, function(y) {
          const w = K;
          return D[w(700)](y) ? M0(y[w(2419)](4).toLowerCase()) : y;
        });
      }, _ = function(p) {
        return u0(p, function(y) {
          const w = K;
          return j.test(y) ? w(2634) + F0(y) : y;
        });
      }, T = { version: e(1948), ucs2: { decode: l0, encode: o0 }, decode: M0, encode: F0, toASCII: _, toUnicode: J0 }, H = {};
      function J(I) {
        const p = e;
        var y = I.charCodeAt(0), w = void 0;
        return y < 16 ? w = "%0" + y[p(1977)](16)[p(394)]() : y < 128 ? w = "%" + y.toString(16)[p(394)]() : y < 2048 ? w = "%" + (y >> 6 | 192)[p(1977)](16)[p(394)]() + "%" + (y & 63 | 128).toString(16)[p(394)]() : w = "%" + (y >> 12 | 224).toString(16)[p(394)]() + "%" + (y >> 6 & 63 | 128)[p(1977)](16)[p(394)]() + "%" + (y & 63 | 128)[p(1977)](16)[p(394)](), w;
      }
      function Y(I) {
        const p = e;
        for (var y = "", w = 0, $ = I[p(1667)]; w < $; ) {
          var M = parseInt(I[p(2480)](w + 1, 2), 16);
          if (M < 128) y += String[p(1618)](M), w += 3;
          else if (M >= 194 && M < 224) {
            if ($ - w >= 6) {
              var s0 = parseInt(I[p(2480)](w + 4, 2), 16);
              y += String[p(1618)]((M & 31) << 6 | s0 & 63);
            } else y += I[p(2480)](w, 6);
            w += 6;
          } else if (M >= 224) {
            if ($ - w >= 9) {
              var d0 = parseInt(I[p(2480)](w + 4, 2), 16), I0 = parseInt(I[p(2480)](w + 7, 2), 16);
              y += String[p(1618)]((M & 15) << 12 | (d0 & 63) << 6 | I0 & 63);
            } else y += I[p(2480)](w, 9);
            w += 9;
          } else y += I[p(2480)](w, 3), w += 3;
        }
        return y;
      }
      function V(I, p) {
        const y = e;
        function w($) {
          const M = K;
          var s0 = Y($);
          return s0[M(1376)](p[M(780)]) ? s0 : $;
        }
        return I[y(945)] && (I.scheme = String(I[y(945)])[y(340)](p[y(558)], w).toLowerCase()[y(340)](p[y(2686)], "")), I[y(2754)] !== void 0 && (I[y(2754)] = String(I[y(2754)]).replace(p.PCT_ENCODED, w).replace(p[y(929)], J).replace(p.PCT_ENCODED, c)), I[y(2235)] !== void 0 && (I[y(2235)] = String(I.host).replace(p[y(558)], w)[y(498)]()[y(340)](p[y(2385)], J)[y(340)](p[y(558)], c)), I.path !== void 0 && (I[y(2711)] = String(I[y(2711)]).replace(p.PCT_ENCODED, w)[y(340)](I.scheme ? p[y(1690)] : p[y(1998)], J)[y(340)](p[y(558)], c)), I[y(2308)] !== void 0 && (I[y(2308)] = String(I.query)[y(340)](p[y(558)], w).replace(p[y(1519)], J)[y(340)](p[y(558)], c)), I[y(1185)] !== void 0 && (I.fragment = String(I[y(1185)])[y(340)](p[y(558)], w)[y(340)](p.NOT_FRAGMENT, J)[y(340)](p[y(558)], c)), I;
      }
      function Q(I) {
        return I.replace(/^0*(.*)/, "$1") || "0";
      }
      function n0(I, p) {
        const y = e;
        var w = I.match(p[y(559)]) || [], $ = h(w, 2), M = $[1];
        return M ? M[y(1160)](".").map(Q).join(".") : I;
      }
      function i0(I, p) {
        const y = e;
        var w = I[y(1376)](p[y(2867)]) || [], $ = h(w, 3), M = $[1], s0 = $[2];
        if (M) {
          for (var d0 = M[y(498)]()[y(1160)]("::")[y(1672)](), I0 = h(d0, 2), j0 = I0[0], V0 = I0[1], E0 = V0 ? V0[y(1160)](":")[y(1753)](Q) : [], O0 = j0[y(1160)](":")[y(1753)](Q), Z0 = p[y(559)].test(O0[O0.length - 1]), g0 = Z0 ? 7 : 8, $0 = O0[y(1667)] - g0, B0 = Array(g0), H0 = 0; H0 < g0; ++H0)
            B0[H0] = E0[H0] || O0[$0 + H0] || "";
          Z0 && (B0[g0 - 1] = n0(B0[g0 - 1], p));
          var Ie = B0[y(1156)](function(te, ue, de) {
            const le = y;
            if (!ue || ue === "0") {
              var fe = te[te[le(1667)] - 1];
              fe && fe[le(368)] + fe[le(1667)] === de ? fe[le(1667)]++ : te[le(528)]({ index: de, length: 1 });
            }
            return te;
          }, []), oe = Ie[y(2530)](function(te, ue) {
            const de = y;
            return ue[de(1667)] - te[de(1667)];
          })[0], ce = void 0;
          if (oe && oe[y(1667)] > 1) {
            var $e = B0[y(2419)](0, oe[y(368)]), Te = B0[y(2419)](oe[y(368)] + oe[y(1667)]);
            ce = $e[y(1255)](":") + "::" + Te.join(":");
          } else ce = B0[y(1255)](":");
          return s0 && (ce += "%" + s0), ce;
        } else return I;
      }
      var x0 = /^(?:([^:\/?#]+):)?(?:\/\/((?:([^\/?#@]*)@)?(\[[^\/?#\]]+\]|[^\/?#:]*)(?:\:(\d*))?))?([^?#]*)(?:\?([^#]*))?(?:#((?:.|\n|\r)*))?/i, L0 = "".match(/(){0}/)[1] === void 0;
      function A0(I) {
        const p = e;
        var y = arguments[p(1667)] > 1 && arguments[1] !== void 0 ? arguments[1] : {}, w = {}, $ = y[p(1207)] !== !1 ? b : f;
        y[p(1708)] === "suffix" && (I = (y[p(945)] ? y[p(945)] + ":" : "") + "//" + I);
        var M = I[p(1376)](x0);
        if (M) {
          L0 ? (w[p(945)] = M[1], w[p(2754)] = M[3], w[p(2235)] = M[4], w[p(2236)] = parseInt(M[5], 10), w[p(2711)] = M[6] || "", w.query = M[7], w[p(1185)] = M[8], isNaN(w[p(2236)]) && (w[p(2236)] = M[5])) : (w.scheme = M[1] || void 0, w.userinfo = I[p(1112)]("@") !== -1 ? M[3] : void 0, w[p(2235)] = I[p(1112)]("//") !== -1 ? M[4] : void 0, w[p(2236)] = parseInt(M[5], 10), w.path = M[6] || "", w[p(2308)] = I[p(1112)]("?") !== -1 ? M[7] : void 0, w[p(1185)] = I.indexOf("#") !== -1 ? M[8] : void 0, isNaN(w[p(2236)]) && (w.port = I[p(1376)](/\/\/(?:.|\n)*\:(?:\/|\?|\#|$)/) ? M[4] : void 0)), w[p(2235)] && (w.host = i0(n0(w.host, $), $)), w.scheme === void 0 && w.userinfo === void 0 && w[p(2235)] === void 0 && w[p(2236)] === void 0 && !w[p(2711)] && w[p(2308)] === void 0 ? w[p(1708)] = "same-document" : w.scheme === void 0 ? w[p(1708)] = "relative" : w[p(1185)] === void 0 ? w[p(1708)] = p(249) : w[p(1708)] = p(607), y[p(1708)] && y[p(1708)] !== p(322) && y[p(1708)] !== w[p(1708)] && (w[p(1033)] = w[p(1033)] || p(1284) + y.reference + p(1299));
          var s0 = H[(y[p(945)] || w[p(945)] || "")[p(498)]()];
          if (!y[p(2402)] && (!s0 || !s0[p(2402)])) {
            if (w.host && (y[p(667)] || s0 && s0[p(667)])) try {
              w.host = T.toASCII(w[p(2235)].replace($[p(558)], Y)[p(498)]());
            } catch (d0) {
              w[p(1033)] = w.error || p(269) + d0;
            }
            V(w, f);
          } else V(w, $);
          s0 && s0[p(1198)] && s0[p(1198)](w, y);
        } else w[p(1033)] = w[p(1033)] || "URI can not be parsed.";
        return w;
      }
      function z0(I, p) {
        const y = e;
        var w = p[y(1207)] !== !1 ? b : f, $ = [];
        return I.userinfo !== void 0 && ($[y(528)](I[y(2754)]), $.push("@")), I[y(2235)] !== void 0 && $[y(528)](i0(n0(String(I[y(2235)]), w), w)[y(340)](w[y(2867)], function(M, s0, d0) {
          const I0 = y;
          return "[" + s0 + (d0 ? I0(1655) + d0 : "") + "]";
        })), (typeof I[y(2236)] === y(329) || typeof I.port === y(1019)) && ($.push(":"), $[y(528)](String(I[y(2236)]))), $[y(1667)] ? $.join("") : void 0;
      }
      var S0 = /^\.\.?\//, G0 = /^\/\.(\/|$)/, ne = /^\/\.\.(\/|$)/, Q0 = /^\/?(?:.|\n)*?(?=\/|$)/;
      function _0(I) {
        const p = e;
        for (var y = []; I[p(1667)]; )
          if (I[p(1376)](S0)) I = I[p(340)](S0, "");
          else if (I.match(G0)) I = I.replace(G0, "/");
          else if (I.match(ne)) I = I[p(340)](ne, "/"), y[p(940)]();
          else if (I === "." || I === "..") I = "";
          else {
            var w = I.match(Q0);
            if (w) {
              var $ = w[0];
              I = I[p(2419)]($[p(1667)]), y[p(528)]($);
            } else throw new Error(p(1159));
          }
        return y[p(1255)]("");
      }
      function U0(I) {
        const p = e;
        var y = arguments[p(1667)] > 1 && arguments[1] !== void 0 ? arguments[1] : {}, w = y[p(1207)] ? b : f, $ = [], M = H[(y.scheme || I[p(945)] || "").toLowerCase()];
        if (M && M.serialize && M[p(1164)](I, y), I[p(2235)] && !w[p(2867)].test(I[p(2235)])) {
          if (y[p(667)] || M && M[p(667)]) try {
            I[p(2235)] = y[p(1207)] ? T[p(1514)](I.host) : T.toASCII(I[p(2235)][p(340)](w.PCT_ENCODED, Y)[p(498)]());
          } catch (I0) {
            I.error = I[p(1033)] || p(690) + (y[p(1207)] ? p(453) : p(2938)) + p(1162) + I0;
          }
        }
        V(I, w), y[p(1708)] !== p(322) && I.scheme && ($.push(I[p(945)]), $[p(528)](":"));
        var s0 = z0(I, y);
        if (s0 !== void 0 && (y.reference !== p(322) && $.push("//"), $[p(528)](s0), I[p(2711)] && I[p(2711)].charAt(0) !== "/" && $[p(528)]("/")), I[p(2711)] !== void 0) {
          var d0 = I[p(2711)];
          !y[p(1659)] && (!M || !M[p(1659)]) && (d0 = _0(d0)), s0 === void 0 && (d0 = d0[p(340)](/^\/\//, "/%2F")), $.push(d0);
        }
        return I[p(2308)] !== void 0 && ($[p(528)]("?"), $[p(528)](I[p(2308)])), I[p(1185)] !== void 0 && ($[p(528)]("#"), $[p(528)](I.fragment)), $[p(1255)]("");
      }
      function Y0(I, p) {
        const y = e;
        var w = arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : {}, $ = arguments[3], M = {};
        return !$ && (I = A0(U0(I, w), w), p = A0(U0(p, w), w)), w = w || {}, !w[y(2322)] && p.scheme ? (M[y(945)] = p[y(945)], M[y(2754)] = p[y(2754)], M.host = p[y(2235)], M.port = p[y(2236)], M[y(2711)] = _0(p[y(2711)] || ""), M[y(2308)] = p[y(2308)]) : (p[y(2754)] !== void 0 || p[y(2235)] !== void 0 || p[y(2236)] !== void 0 ? (M[y(2754)] = p.userinfo, M[y(2235)] = p.host, M[y(2236)] = p.port, M[y(2711)] = _0(p[y(2711)] || ""), M[y(2308)] = p[y(2308)]) : (p[y(2711)] ? (p[y(2711)][y(806)](0) === "/" ? M[y(2711)] = _0(p.path) : ((I[y(2754)] !== void 0 || I[y(2235)] !== void 0 || I[y(2236)] !== void 0) && !I.path ? M.path = "/" + p[y(2711)] : I.path ? M.path = I[y(2711)][y(2419)](0, I[y(2711)][y(2332)]("/") + 1) + p[y(2711)] : M[y(2711)] = p[y(2711)], M[y(2711)] = _0(M.path)), M.query = p.query) : (M[y(2711)] = I[y(2711)], p.query !== void 0 ? M.query = p[y(2308)] : M[y(2308)] = I[y(2308)]), M.userinfo = I[y(2754)], M[y(2235)] = I.host, M[y(2236)] = I[y(2236)]), M[y(945)] = I[y(945)]), M.fragment = p[y(1185)], M;
      }
      function qe(I, p, y) {
        var $ = d({ scheme: e(1399) }, y);
        return U0(Y0(A0(I, $), A0(p, $), $, !0), $);
      }
      function Mx(I, p) {
        return typeof I === e(1019) ? I = U0(A0(I, p), p) : o(I) === "object" && (I = A0(U0(I, p), p)), I;
      }
      function pa(I, p, y) {
        const w = e;
        return typeof I === w(1019) ? I = U0(A0(I, y), y) : o(I) === "object" && (I = U0(I, y)), typeof p === w(1019) ? p = U0(A0(p, y), y) : o(p) === w(2613) && (p = U0(p, y)), I === p;
      }
      function Sn(I, p) {
        const y = e;
        return I && I[y(1977)]().replace(!p || !p[y(1207)] ? f[y(2080)] : b[y(2080)], J);
      }
      function ge(I, p) {
        const y = e;
        return I && I[y(1977)]().replace(!p || !p[y(1207)] ? f[y(558)] : b[y(558)], Y);
      }
      var We = { scheme: e(1473), domainHost: !0, parse: function(p, y) {
        const w = e;
        return !p[w(2235)] && (p[w(1033)] = p.error || w(509)), p;
      }, serialize: function(p, y) {
        const w = e;
        var $ = String(p.scheme)[w(498)]() === "https";
        return (p[w(2236)] === ($ ? 443 : 80) || p[w(2236)] === "") && (p[w(2236)] = void 0), !p[w(2711)] && (p[w(2711)] = "/"), p;
      } }, ma = { scheme: e(1990), domainHost: We[e(667)], parse: We[e(1198)], serialize: We[e(1164)] };
      function ba(I) {
        const p = e;
        return typeof I.secure === p(1459) ? I.secure : String(I[p(945)])[p(498)]() === p(894);
      }
      var Ke = { scheme: "ws", domainHost: !0, parse: function(p, y) {
        const w = e;
        var $ = p;
        return $[w(2561)] = ba($), $[w(2102)] = ($[w(2711)] || "/") + ($[w(2308)] ? "?" + $[w(2308)] : ""), $[w(2711)] = void 0, $[w(2308)] = void 0, $;
      }, serialize: function(p, y) {
        const w = e;
        if ((p[w(2236)] === (ba(p) ? 443 : 80) || p.port === "") && (p[w(2236)] = void 0), typeof p[w(2561)] == "boolean" && (p[w(945)] = p[w(2561)] ? "wss" : "ws", p[w(2561)] = void 0), p[w(2102)]) {
          var $ = p[w(2102)][w(1160)]("?"), M = h($, 2), s0 = M[0], d0 = M[1];
          p.path = s0 && s0 !== "/" ? s0 : void 0, p[w(2308)] = d0, p.resourceName = void 0;
        }
        return p.fragment = void 0, p;
      } }, ga = { scheme: e(894), domainHost: Ke.domainHost, parse: Ke[e(1198)], serialize: Ke[e(1164)] }, kn = {}, ya = e(1752) + "\\xA0-\\u200D\\u2010-\\u2029\\u202F-\\uD7FF\\uF900-\\uFDCF\\uFDF0-\\uFFEF]", ie = e(2255), Pn = n(n(e(2902) + ie + "%" + ie + ie + "%" + ie + ie) + "|" + n(e(675) + ie + "%" + ie + ie) + "|" + n("%" + ie + ie)), In = e(2188), En = e(1267), Rn = s(En, e(747)), Cn = "[\\!\\$\\'\\(\\)\\*\\+\\,\\;\\:\\@]", Fn = new RegExp(ya, "g"), Le = new RegExp(Pn, "g"), Nn = new RegExp(s(e(1241), In, e(2277), e(1270), Rn), "g"), va = new RegExp(s("[^]", ya, Cn), "g"), qn = va;
      function Lx(I) {
        const p = e;
        var y = Y(I);
        return y[p(1376)](Fn) ? y : I;
      }
      var wa = { scheme: e(2533), parse: function(p, y) {
        const w = e;
        var $ = p, M = $.to = $[w(2711)] ? $[w(2711)].split(",") : [];
        if ($[w(2711)] = void 0, $.query) {
          for (var s0 = !1, d0 = {}, I0 = $.query.split("&"), j0 = 0, V0 = I0[w(1667)]; j0 < V0; ++j0) {
            var E0 = I0[j0][w(1160)]("=");
            switch (E0[0]) {
              case "to":
                for (var O0 = E0[1][w(1160)](","), Z0 = 0, g0 = O0[w(1667)]; Z0 < g0; ++Z0)
                  M[w(528)](O0[Z0]);
                break;
              case w(1314):
                $.subject = ge(E0[1], y);
                break;
              case w(900):
                $[w(900)] = ge(E0[1], y);
                break;
              default:
                s0 = !0, d0[ge(E0[0], y)] = ge(E0[1], y);
                break;
            }
          }
          s0 && ($.headers = d0);
        }
        $[w(2308)] = void 0;
        for (var $0 = 0, B0 = M[w(1667)]; $0 < B0; ++$0) {
          var H0 = M[$0][w(1160)]("@");
          if (H0[0] = ge(H0[0]), y[w(2402)]) H0[1] = ge(H0[1], y)[w(498)]();
          else try {
            H0[1] = T[w(2184)](ge(H0[1], y)[w(498)]());
          } catch (Ie) {
            $[w(1033)] = $[w(1033)] || "Email address's domain name can not be converted to ASCII via punycode: " + Ie;
          }
          M[$0] = H0[w(1255)]("@");
        }
        return $;
      }, serialize: function(p, y) {
        const w = e;
        var $ = p, M = u(p.to);
        if (M) {
          for (var s0 = 0, d0 = M[w(1667)]; s0 < d0; ++s0) {
            var I0 = String(M[s0]), j0 = I0[w(2332)]("@"), V0 = I0[w(2419)](0, j0)[w(340)](Le, Lx)[w(340)](Le, c)[w(340)](Nn, J), E0 = I0[w(2419)](j0 + 1);
            try {
              E0 = y.iri ? T[w(1514)](E0) : T[w(2184)](ge(E0, y)[w(498)]());
            } catch ($0) {
              $[w(1033)] = $[w(1033)] || w(2854) + (y[w(1207)] ? w(453) : w(2938)) + " via punycode: " + $0;
            }
            M[s0] = V0 + "@" + E0;
          }
          $[w(2711)] = M[w(1255)](",");
        }
        var O0 = p[w(1741)] = p[w(1741)] || {};
        p.subject && (O0.subject = p.subject), p.body && (O0[w(900)] = p[w(900)]);
        var Z0 = [];
        for (var g0 in O0)
          O0[g0] !== kn[g0] && Z0[w(528)](g0[w(340)](Le, Lx)[w(340)](Le, c)[w(340)](va, J) + "=" + O0[g0][w(340)](Le, Lx)[w(340)](Le, c)[w(340)](qn, J));
        return Z0[w(1667)] && ($[w(2308)] = Z0[w(1255)]("&")), $;
      } }, Tn = /^([^\:]+)\:(.*)/, Sa = { scheme: "urn", parse: function(p, y) {
        const w = e;
        var $ = p[w(2711)] && p[w(2711)][w(1376)](Tn), M = p;
        if ($) {
          var s0 = y[w(945)] || M[w(945)] || w(779), d0 = $[1][w(498)](), I0 = $[2], j0 = s0 + ":" + (y.nid || d0), V0 = H[j0];
          M[w(684)] = d0, M[w(2682)] = I0, M.path = void 0, V0 && (M = V0[w(1198)](M, y));
        } else M[w(1033)] = M[w(1033)] || w(1358);
        return M;
      }, serialize: function(p, y) {
        const w = e;
        var $ = y[w(945)] || p[w(945)] || w(779), M = p[w(684)], s0 = $ + ":" + (y[w(684)] || M), d0 = H[s0];
        d0 && (p = d0.serialize(p, y));
        var I0 = p, j0 = p[w(2682)];
        return I0[w(2711)] = (M || y[w(684)]) + ":" + j0, I0;
      } }, An = /^[0-9A-Fa-f]{8}(?:\-[0-9A-Fa-f]{4}){3}\-[0-9A-Fa-f]{12}$/, ka = { scheme: e(1213), parse: function(p, y) {
        const w = e;
        var $ = p;
        return $[w(1476)] = $[w(2682)], $.nss = void 0, !y[w(2322)] && (!$.uuid || !$[w(1476)][w(1376)](An)) && ($.error = $[w(1033)] || w(1455)), $;
      }, serialize: function(p, y) {
        const w = e;
        var $ = p;
        return $[w(2682)] = (p[w(1476)] || "")[w(498)](), $;
      } };
      H[We[e(945)]] = We, H[ma[e(945)]] = ma, H[Ke[e(945)]] = Ke, H[ga.scheme] = ga, H[wa[e(945)]] = wa, H[Sa[e(945)]] = Sa, H[ka[e(945)]] = ka, r[e(2199)] = H, r[e(517)] = J, r[e(2910)] = Y, r[e(1198)] = A0, r[e(1730)] = _0, r[e(1164)] = U0, r[e(1582)] = Y0, r[e(2345)] = qe, r[e(980)] = Mx, r[e(1058)] = pa, r[e(1183)] = Sn, r.unescapeComponent = ge, Object[e(1712)](r, e(1449), { value: !0 });
    });
  })(Xe, Xe[i(1294)])), Xe[i(1294)];
}
var Qx, nr;
function la() {
  return nr || (nr = 1, Qx = function i(x, t) {
    const r = K;
    if (x === t) return !0;
    if (x && t && typeof x == r(2613) && typeof t == r(2613)) {
      if (x[r(1405)] !== t[r(1405)]) return !1;
      var e, s, n;
      if (Array.isArray(x)) {
        if (e = x[r(1667)], e != t[r(1667)]) return !1;
        for (s = e; s-- !== 0; ) if (!i(x[s], t[s])) return !1;
        return !0;
      }
      if (x[r(1405)] === RegExp) return x[r(2159)] === t[r(2159)] && x[r(1189)] === t.flags;
      if (x[r(511)] !== Object[r(1523)][r(511)]) return x.valueOf() === t.valueOf();
      if (x[r(1977)] !== Object[r(1523)][r(1977)]) return x[r(1977)]() === t[r(1977)]();
      if (n = Object[r(1400)](x), e = n.length, e !== Object.keys(t).length) return !1;
      for (s = e; s-- !== 0; ) if (!Object[r(1523)][r(1687)].call(t, n[s])) return !1;
      for (s = e; s-- !== 0; ) {
        var o = n[s];
        if (!i(x[o], t[o])) return !1;
      }
      return !0;
    }
    return x !== x && t !== t;
  }), Qx;
}
var Xx, ir;
function x2() {
  return ir || (ir = 1, Xx = function(x) {
    const t = K;
    for (var r = 0, e = x[t(1667)], s = 0, n; s < e; )
      r++, n = x[t(2116)](s++), n >= 55296 && n <= 56319 && s < e && (n = x.charCodeAt(s), (n & 64512) == 56320 && s++);
    return r;
  }), Xx;
}
var Yx, or;
function Be() {
  const i = a;
  if (or) return Yx;
  or = 1, Yx = { copy: x, checkDataType: t, checkDataTypes: r, coerceToTypes: s, toHash: n, getProperty: u, escapeQuotes: d, equal: la(), ucs2length: x2(), varOccurences: l, varReplace: f, schemaHasRules: b, schemaHasRulesExcept: h, schemaUnknownRules: m, toQuotedString: v, getPathExpr: k, getPath: P, getData: C, unescapeFragment: R, unescapeJsonPointer: j, escapeFragment: O, escapeJsonPointer: D };
  function x(q, N) {
    N = N || {};
    for (var z in q) N[z] = q[z];
    return N;
  }
  function t(q, N, z, L) {
    const U = K;
    var G = U(L ? 1697 : 1369), c0 = L ? U(2813) : " && ", u0 = L ? "!" : "", l0 = L ? "" : "!";
    switch (q) {
      case U(1399):
        return N + G + U(1399);
      case U(2455):
        return u0 + "Array.isArray(" + N + ")";
      case U(2613):
        return "(" + u0 + N + c0 + "typeof " + N + G + U(1931) + c0 + l0 + U(1032) + N + "))";
      case U(1779):
        return U(1083) + N + G + U(976) + c0 + l0 + "(" + N + " % 1)" + c0 + N + G + N + (z ? c0 + u0 + U(2925) + N + ")" : "") + ")";
      case U(329):
        return "(typeof " + N + G + '"' + q + '"' + (z ? c0 + u0 + U(2925) + N + ")" : "") + ")";
      default:
        return "typeof " + N + G + '"' + q + '"';
    }
  }
  function r(q, N, z) {
    const L = K;
    switch (q[L(1667)]) {
      case 1:
        return t(q[0], N, z, !0);
      default:
        var U = "", G = n(q);
        G[L(2455)] && G[L(2613)] && (U = G[L(1399)] ? "(" : "(!" + N + L(2813), U += L(1832) + N + ' !== "object")', delete G[L(1399)], delete G.array, delete G[L(2613)]), G.number && delete G[L(1779)];
        for (var c0 in G) U += (U ? " && " : "") + t(c0, N, z, !0);
        return U;
    }
  }
  var e = n([i(1019), i(329), i(1779), "boolean", i(1399)]);
  function s(q, N) {
    const z = i;
    if (Array.isArray(N)) {
      for (var L = [], U = 0; U < N[z(1667)]; U++) {
        var G = N[U];
        e[G] ? L[L.length] = G : q === "array" && G === z(2455) && (L[L[z(1667)]] = G);
      }
      if (L[z(1667)]) return L;
    } else {
      if (e[N]) return [N];
      if (q === "array" && N === "array") return [z(2455)];
    }
  }
  function n(q) {
    const N = i;
    for (var z = {}, L = 0; L < q[N(1667)]; L++) z[q[L]] = !0;
    return z;
  }
  var o = /^[a-z$_][a-z$_0-9]*$/i, c = /'|\\/g;
  function u(q) {
    const N = i;
    return typeof q == N(329) ? "[" + q + "]" : o[N(700)](q) ? "." + q : "['" + d(q) + "']";
  }
  function d(q) {
    const N = i;
    return q[N(340)](c, N(1046)).replace(/\n/g, "\\n").replace(/\r/g, "\\r")[N(340)](/\f/g, "\\f")[N(340)](/\t/g, "\\t");
  }
  function l(q, N) {
    const z = i;
    N += z(1485);
    var L = q.match(new RegExp(N, "g"));
    return L ? L[z(1667)] : 0;
  }
  function f(q, N, z) {
    const L = i;
    return N += L(2943), z = z[L(340)](/\$/g, L(2746)), q.replace(new RegExp(N, "g"), z + "$1");
  }
  function b(q, N) {
    if (typeof q == i(1459)) return !q;
    for (var L in q) if (N[L]) return !0;
  }
  function h(q, N, z) {
    if (typeof q == i(1459)) return !q && z != "not";
    for (var U in q) if (U != z && N[U]) return !0;
  }
  function m(q, N) {
    if (typeof q != i(1459)) {
      for (var L in q) if (!N[L]) return L;
    }
  }
  function v(q) {
    return "'" + d(q) + "'";
  }
  function k(q, N, z, L) {
    const U = i;
    var G = z ? U(1380) + N + (L ? "" : U(1243)) : L ? U(1895) + N + " + ']'" : U(2007) + N + " + '\\']'";
    return E(q, G);
  }
  function P(q, N, z) {
    var L = v(z ? "/" + D(N) : u(N));
    return E(q, L);
  }
  var F = /^\/(?:[^~]|~0|~1)*$/, A = /^([0-9]+)(#|\/(?:[^~]|~0|~1)*)?$/;
  function C(q, N, z) {
    const L = i;
    var U, G, c0, u0;
    if (q === "") return L(2221);
    if (q[0] == "/") {
      if (!F.test(q)) throw new Error(L(2072) + q);
      G = q, c0 = L(2221);
    } else {
      if (u0 = q[L(1376)](A), !u0) throw new Error(L(2072) + q);
      if (U = +u0[1], G = u0[2], G == "#") {
        if (U >= N) throw new Error(L(2502) + U + L(1692) + N);
        return z[N - U];
      }
      if (U > N) throw new Error(L(2048) + U + " levels up, current level is " + N);
      if (c0 = L(782) + (N - U || ""), !G) return c0;
    }
    for (var l0 = c0, o0 = G[L(1160)]("/"), f0 = 0; f0 < o0[L(1667)]; f0++) {
      var k0 = o0[f0];
      k0 && (c0 += u(j(k0)), l0 += L(1215) + c0);
    }
    return l0;
  }
  function E(q, N) {
    const z = i;
    return q == '""' ? N : (q + " + " + N)[z(340)](/([^\\])' \+ '/g, "$1");
  }
  function R(q) {
    return j(decodeURIComponent(q));
  }
  function O(q) {
    return encodeURIComponent(D(q));
  }
  function D(q) {
    const N = i;
    return q[N(340)](/~/g, "~0")[N(340)](/\//g, "~1");
  }
  function j(q) {
    const N = i;
    return q[N(340)](/~1/g, "/")[N(340)](/~0/g, "~");
  }
  return Yx;
}
var et, cr;
function hn() {
  if (cr) return et;
  cr = 1;
  var i = Be();
  et = x;
  function x(t) {
    i.copy(t, this);
  }
  return et;
}
var xt = { exports: {} }, ur;
function t2() {
  const i = a;
  if (ur) return xt[i(1294)];
  ur = 1;
  var x = xt.exports = function(e, s, n) {
    const o = i;
    typeof s == o(1137) && (n = s, s = {}), n = s.cb || n;
    var c = typeof n == "function" ? n : n[o(2489)] || function() {
    }, u = n[o(1702)] || function() {
    };
    t(s, c, u, e, "", e);
  };
  x[i(1180)] = { additionalItems: !0, items: !0, contains: !0, additionalProperties: !0, propertyNames: !0, not: !0 }, x[i(2468)] = { items: !0, allOf: !0, anyOf: !0, oneOf: !0 }, x[i(1539)] = { definitions: !0, properties: !0, patternProperties: !0, dependencies: !0 }, x[i(1613)] = { default: !0, enum: !0, const: !0, required: !0, maximum: !0, minimum: !0, exclusiveMaximum: !0, exclusiveMinimum: !0, multipleOf: !0, maxLength: !0, minLength: !0, pattern: !0, format: !0, maxItems: !0, minItems: !0, uniqueItems: !0, maxProperties: !0, minProperties: !0 };
  function t(e, s, n, o, c, u, d, l, f, b) {
    const h = i;
    if (o && typeof o == h(2613) && !Array[h(1683)](o)) {
      s(o, c, u, d, l, f, b);
      for (var m in o) {
        var v = o[m];
        if (Array[h(1683)](v)) {
          if (m in x.arrayKeywords)
            for (var k = 0; k < v[h(1667)]; k++) t(e, s, n, v[k], c + "/" + m + "/" + k, u, c, m, o, k);
        } else if (m in x[h(1539)]) {
          if (v && typeof v == h(2613))
            for (var P in v) t(e, s, n, v[P], c + "/" + m + "/" + r(P), u, c, m, o, P);
        } else (m in x.keywords || e[h(273)] && !(m in x[h(1613)])) && t(e, s, n, v, c + "/" + m, u, c, m, o);
      }
      n(o, c, u, d, l, f, b);
    }
  }
  function r(e) {
    return e[i(340)](/~/g, "~0").replace(/\//g, "~1");
  }
  return xt.exports;
}
var tt, dr;
function fa() {
  const i = a;
  if (dr) return tt;
  dr = 1;
  var x = e2(), t = la(), r = Be(), e = hn(), s = t2();
  tt = n, n[i(665)] = P, n[i(2569)] = m, n.url = F, n[i(1500)] = A, n[i(621)] = f, n[i(1676)] = o;
  function n(C, E, R) {
    const O = i;
    var D = this._refs[R];
    if (typeof D == "string")
      if (this[O(2741)][D]) D = this[O(2741)][D];
      else return n[O(1512)](this, C, E, D);
    if (D = D || this[O(2699)][R], D instanceof e) return f(D[O(1676)], this._opts.inlineRefs) ? D[O(1676)] : D.validate || this[O(767)](D);
    var j = o[O(1512)](this, E, R), q, N, z;
    return j && (q = j[O(1676)], E = j[O(1576)], z = j.baseId), q instanceof e ? N = q.validate || C[O(1512)](this, q[O(1676)], E, void 0, z) : q !== void 0 && (N = f(q, this[O(1913)][O(2431)]) ? q : C.call(this, q, E, void 0, z)), N;
  }
  function o(C, E) {
    const R = i;
    var O = x[R(1198)](E), D = v(O), j = m(this[R(1391)](C[R(1676)]));
    if (Object.keys(C[R(1676)])[R(1667)] === 0 || D !== j) {
      var q = P(D), N = this[R(2741)][q];
      if (typeof N == R(1019)) return c.call(this, C, N, O);
      if (N instanceof e)
        N[R(312)] || this[R(767)](N), C = N;
      else if (N = this[R(2699)][q], N instanceof e) {
        if (N[R(312)] || this[R(767)](N), q == P(E)) return { schema: N, root: C, baseId: j };
        C = N;
      } else return;
      if (!C[R(1676)]) return;
      j = m(this[R(1391)](C.schema));
    }
    return d.call(this, O, j, C[R(1676)], C);
  }
  function c(C, E, R) {
    const O = i;
    var D = o[O(1512)](this, C, E);
    if (D) {
      var j = D[O(1676)], q = D[O(2681)];
      C = D[O(1576)];
      var N = this[O(1391)](j);
      return N && (q = F(q, N)), d[O(1512)](this, R, q, j, C);
    }
  }
  var u = r[i(1983)]([i(1367), i(2923), i(2103), i(849), i(1609)]);
  function d(C, E, R, O) {
    const D = i;
    if (C.fragment = C[D(1185)] || "", C[D(1185)][D(2419)](0, 1) == "/") {
      for (var j = C[D(1185)].split("/"), q = 1; q < j.length; q++) {
        var N = j[q];
        if (N) {
          if (N = r[D(1325)](N), R = R[N], R === void 0) break;
          var z;
          if (!u[N] && (z = this[D(1391)](R), z && (E = F(E, z)), R[D(1633)])) {
            var L = F(E, R[D(1633)]), U = o[D(1512)](this, O, L);
            U && (R = U[D(1676)], O = U[D(1576)], E = U[D(2681)]);
          }
        }
      }
      if (R !== void 0 && R !== O[D(1676)]) return { schema: R, root: O, baseId: E };
    }
  }
  var l = r[i(1983)]([i(1436), "format", "pattern", i(2540), i(2425), i(837), "minProperties", i(1440), "minItems", i(1887), "minimum", "uniqueItems", i(1847), i(2477), i(2103)]);
  function f(C, E) {
    if (E === !1) return !1;
    if (E === void 0 || E === !0) return b(C);
    if (E) return h(C) <= E;
  }
  function b(C) {
    const E = i;
    var R;
    if (Array[E(1683)](C)) {
      for (var O = 0; O < C[E(1667)]; O++)
        if (R = C[O], typeof R == E(2613) && !b(R)) return !1;
    } else for (var D in C)
      if (D == E(1633) || (R = C[D], typeof R == E(2613) && !b(R))) return !1;
    return !0;
  }
  function h(C) {
    const E = i;
    var R = 0, O;
    if (Array[E(1683)](C)) {
      for (var D = 0; D < C[E(1667)]; D++)
        if (O = C[D], typeof O == E(2613) && (R += h(O)), R == 1 / 0) return 1 / 0;
    } else for (var j in C) {
      if (j == E(1633)) return 1 / 0;
      if (l[j]) R++;
      else if (O = C[j], typeof O == E(2613) && (R += h(O) + 1), R == 1 / 0) return 1 / 0;
    }
    return R;
  }
  function m(C, E) {
    E !== !1 && (C = P(C));
    var R = x.parse(C);
    return v(R);
  }
  function v(C) {
    return x[i(1164)](C).split("#")[0] + "#";
  }
  var k = /#\/?$/;
  function P(C) {
    return C ? C[i(340)](k, "") : "";
  }
  function F(C, E) {
    const R = i;
    return E = P(E), x[R(2345)](C, E);
  }
  function A(C) {
    const E = i;
    var R = P(this[E(1391)](C)), O = { "": R }, D = { "": m(R, !1) }, j = {}, q = this;
    return s(C, { allKeys: !0 }, function(N, z, L, U, G, c0, u0) {
      const l0 = E;
      if (z !== "") {
        var o0 = q[l0(1391)](N), f0 = O[U], k0 = D[U] + "/" + G;
        if (u0 !== void 0 && (k0 += "/" + (typeof u0 == l0(329) ? u0 : r[l0(1888)](u0))), typeof o0 == l0(1019)) {
          o0 = f0 = P(f0 ? x[l0(2345)](f0, o0) : o0);
          var y0 = q[l0(2741)][o0];
          if (typeof y0 == l0(1019) && (y0 = q[l0(2741)][y0]), y0 && y0[l0(1676)]) {
            if (!t(N, y0[l0(1676)])) throw new Error(l0(2246) + o0 + '" resolves to more than one schema');
          } else if (o0 != P(k0))
            if (o0[0] == "#") {
              if (j[o0] && !t(N, j[o0])) throw new Error(l0(2246) + o0 + l0(735));
              j[o0] = N;
            } else q[l0(2741)][o0] = k0;
        }
        O[z] = f0, D[z] = k0;
      }
    }), j;
  }
  return tt;
}
var at, lr;
function ha() {
  const i = a;
  if (lr) return at;
  lr = 1;
  var x = fa();
  at = { Validation: e(t), MissingRef: e(r) };
  function t(s) {
    const n = K;
    this[n(2851)] = n(562), this[n(2183)] = s, this[n(412)] = this[n(646)] = !0;
  }
  r[i(2851)] = function(s, n) {
    const o = i;
    return o(1165) + n + o(2620) + s;
  };
  function r(s, n, o) {
    const c = i;
    this[c(2851)] = o || r.message(s, n), this[c(496)] = x[c(2361)](s, n), this[c(2713)] = x[c(665)](x[c(2569)](this.missingRef));
  }
  function e(s) {
    const n = i;
    return s.prototype = Object[n(1186)](Error.prototype), s[n(1523)][n(1405)] = s, s;
  }
  return at;
}
var rt, fr;
function pn() {
  return fr || (fr = 1, rt = function(i, x) {
    const t = K;
    x || (x = {}), typeof x === t(1137) && (x = { cmp: x });
    var r = typeof x[t(1289)] == "boolean" ? x[t(1289)] : !1, e = x[t(1661)] && /* @__PURE__ */ (function(n) {
      return function(o) {
        return function(c, u) {
          var d = { key: c, value: o[c] }, l = { key: u, value: o[u] };
          return n(d, l);
        };
      };
    })(x[t(1661)]), s = [];
    return (function n(o) {
      const c = t;
      if (o && o[c(1464)] && typeof o[c(1464)] === c(1137) && (o = o.toJSON()), o !== void 0) {
        if (typeof o == "number") return isFinite(o) ? "" + o : "null";
        if (typeof o !== c(2613)) return JSON[c(2340)](o);
        var u, d;
        if (Array.isArray(o)) {
          for (d = "[", u = 0; u < o[c(1667)]; u++)
            u && (d += ","), d += n(o[u]) || c(1399);
          return d + "]";
        }
        if (o === null) return c(1399);
        if (s[c(1112)](o) !== -1) {
          if (r) return JSON[c(2340)](c(2090));
          throw new TypeError(c(1786));
        }
        var l = s[c(528)](o) - 1, f = Object[c(1400)](o)[c(2530)](e && e(o));
        for (d = "", u = 0; u < f[c(1667)]; u++) {
          var b = f[u], h = n(o[b]);
          h && (d && (d += ","), d += JSON.stringify(b) + ":" + h);
        }
        return s.splice(l, 1), "{" + d + "}";
      }
    })(i);
  }), rt;
}
var st, hr;
function mn() {
  return hr || (hr = 1, st = function(x, t, r) {
    const e = K;
    var s = "", n = x[e(1676)].$async === !0, o = x[e(2365)][e(1408)](x[e(1676)], x[e(2420)][e(1849)], "$ref"), c = x[e(1321)][e(1391)](x[e(1676)]);
    if (x.opts[e(2268)]) {
      var u = x[e(2365)][e(2733)](x.schema, x[e(2420)][e(1180)]);
      if (u) {
        var d = e(1966) + u;
        if (x[e(930)][e(2268)] === "log") x.logger.warn(d);
        else throw new Error(d);
      }
    }
    if (x[e(1352)] && (s += e(568), n && (x.async = !0, s += e(278)), s += e(1578), c && (x[e(930)].sourceCode || x[e(930)][e(833)]) && (s += " " + ("/*# sourceURL=" + c + " */") + " ")), typeof x[e(1676)] == e(1459) || !(o || x[e(1676)][e(1633)])) {
      var t = "false schema", l = x[e(2712)], f = x[e(712)], b = x.schema[t], h = x[e(332)] + x.util[e(2562)](t), m = x[e(1481)] + "/" + t, E = !x[e(930)][e(1115)], D, v = e(782) + (f || ""), C = e(1268) + l;
      if (x.schema === !1) {
        x[e(1352)] ? E = !0 : s += e(512) + C + e(1445);
        var k = k || [];
        k[e(528)](s), s = "", x.createErrors !== !1 ? (s += e(658) + (D || e(1216)) + e(311) + x.errorPath + e(662) + x.util[e(1806)](m) + e(726), x[e(930)][e(635)] !== !1 && (s += e(639)), x[e(930)][e(2840)] && (s += e(1607) + x[e(332)] + e(300) + v + " "), s += e(791)) : s += " {} ";
        var P = s;
        s = k.pop(), !x.compositeRule && E ? x[e(2780)] ? s += e(1073) + P + e(392) : s += e(2338) + P + e(580) : s += e(1781) + P + e(1771);
      } else x.isTop ? n ? s += e(570) : s += " validate.errors = null; return true; " : s += e(512) + C + e(2939);
      return x[e(1352)] && (s += e(257)), s;
    }
    if (x[e(1352)]) {
      var F = x.isTop, l = x.level = 0, f = x[e(712)] = 0, v = "data";
      if (x.rootId = x[e(2345)][e(2569)](x[e(1321)][e(1391)](x.root[e(1676)])), x[e(2681)] = x[e(2681)] || x[e(825)], delete x[e(1352)], x[e(1413)] = [""], x[e(1676)][e(2475)] !== void 0 && x.opts.useDefaults && x.opts.strictDefaults) {
        var A = "default is ignored in the schema root";
        if (x.opts[e(2794)] === e(1546)) x[e(2047)][e(1842)](A);
        else throw new Error(A);
      }
      s += e(2795), s += e(2201), s += e(1981);
    } else {
      var l = x.level, f = x[e(712)], v = "data" + (f || "");
      if (c && (x.baseId = x[e(2345)][e(2361)](x.baseId, c)), n && !x.async) throw new Error(e(2123));
      s += e(1016) + l + e(2931);
    }
    var C = "valid" + l, E = !x.opts.allErrors, R = "", O = "", D, j = x.schema.type, q = Array[e(1683)](j);
    if (j && x[e(930)].nullable && x.schema.nullable === !0 && (q ? j.indexOf(e(1399)) == -1 && (j = j[e(572)](e(1399))) : j != e(1399) && (j = [j, e(1399)], q = !0)), q && j[e(1667)] == 1 && (j = j[0], q = !1), x.schema[e(1633)] && o) {
      if (x[e(930)][e(1967)] == e(603)) throw new Error(e(2485) + x.errSchemaPath + e(2617));
      x.opts[e(1967)] !== !0 && (o = !1, x[e(2047)][e(1842)]('$ref: keywords ignored in schema at path "' + x[e(1481)] + '"'));
    }
    if (x[e(1676)].$comment && x[e(930)][e(2885)] && (s += " " + x[e(2420)][e(1849)][e(2885)][e(444)](x, e(2885))), j) {
      if (x[e(930)][e(578)]) var N = x.util.coerceToTypes(x[e(930)][e(578)], j);
      var z = x.RULES.types[j];
      if (N || q || z === !0 || z && !S0(z)) {
        var h = x[e(332)] + e(384), m = x[e(1481)] + e(1524), h = x[e(332)] + e(384), m = x[e(1481)] + e(1524), L = e(q ? 1979 : 738);
        if (s += e(2471) + x[e(2365)][L](j, v, x[e(930)][e(2347)], !0) + e(1050), N) {
          var U = "dataType" + l, G = e(1929) + l;
          s += e(512) + U + e(1574) + v + e(2954) + G + e(2117), x[e(930)][e(578)] == e(2455) && (s += " if (" + U + e(2877) + v + e(1821) + v + e(485) + v + e(1992) + v + e(1600) + U + " = typeof " + v + e(1461) + x[e(2365)][e(738)](x[e(1676)][e(1436)], v, x[e(930)][e(2347)]) + ") " + G + " = " + v + e(1611)), s += " if (" + G + e(1026);
          var c0 = N;
          if (c0)
            for (var u0, l0 = -1, o0 = c0.length - 1; l0 < o0; )
              u0 = c0[l0 += 1], u0 == e(1019) ? s += e(464) + U + e(2936) + U + e(2028) + G + e(1308) + v + e(1489) + v + e(1427) + G + e(297) : u0 == e(329) || u0 == e(1779) ? (s += e(464) + U + e(1465) + v + e(1880) + U + " == 'string' && " + v + e(1215) + v + e(2806) + v + " ", u0 == e(1779) && (s += e(2812) + v + " % 1)"), s += ")) " + G + " = +" + v + "; ") : u0 == "boolean" ? s += e(464) + v + " === 'false' || " + v + e(1362) + v + e(1427) + G + " = false; else if (" + v + " === 'true' || " + v + e(676) + G + " = true; " : u0 == e(1399) ? s += e(464) + v + e(1951) + v + e(1362) + v + e(839) + G + e(1522) : x[e(930)][e(578)] == "array" && u0 == e(2455) && (s += " else if (" + U + " == 'string' || " + U + e(2936) + U + e(1465) + v + e(1955) + G + " = [" + v + "]; ");
          s += e(252);
          var k = k || [];
          k[e(528)](s), s = "", x.createErrors !== !1 ? (s += " { keyword: '" + (D || e(1436)) + "' , dataPath: (dataPath || '') + " + x[e(372)] + e(662) + x[e(2365)].toQuotedString(m) + e(2756), q ? s += "" + j[e(1255)](",") : s += "" + j, s += e(1438), x[e(930)][e(635)] !== !1 && (s += e(1796), q ? s += "" + j.join(",") : s += "" + j, s += "' "), x[e(930)][e(2840)] && (s += e(396) + h + e(2874) + x[e(332)] + e(300) + v + " "), s += e(791)) : s += " {} ";
          var P = s;
          s = k[e(940)](), !x.compositeRule && E ? x.async ? s += e(1073) + P + e(392) : s += " validate.errors = [" + P + e(580) : s += e(1781) + P + e(1771), s += e(1941) + G + e(2736);
          var f0 = f ? "data" + (f - 1 || "") : "parentData", k0 = f ? x[e(1413)][f] : "parentDataProperty";
          s += " " + v + " = " + G + "; ", !f && (s += e(2302) + f0 + e(2342)), s += " " + f0 + "[" + k0 + "] = " + G + e(1611);
        } else {
          var k = k || [];
          k[e(528)](s), s = "", x.createErrors !== !1 ? (s += " { keyword: '" + (D || "type") + "' , dataPath: (dataPath || '') + " + x.errorPath + e(662) + x.util[e(1806)](m) + e(2756), q ? s += "" + j[e(1255)](",") : s += "" + j, s += e(1438), x[e(930)][e(635)] !== !1 && (s += e(1796), q ? s += "" + j[e(1255)](",") : s += "" + j, s += "' "), x.opts[e(2840)] && (s += e(396) + h + e(2874) + x[e(332)] + e(300) + v + " "), s += e(791)) : s += e(1968);
          var P = s;
          s = k[e(940)](), !x[e(634)] && E ? x.async ? s += e(1073) + P + e(392) : s += e(2338) + P + e(580) : s += e(1781) + P + e(1771);
        }
        s += e(791);
      }
    }
    if (x[e(1676)][e(1633)] && !o) s += " " + x[e(2420)].all[e(1633)].code(x, "$ref") + " ", E && (s += e(1419), F ? s += "0" : s += e(2612) + l, s += e(1050), O += "}");
    else {
      var y0 = x[e(2420)];
      if (y0) {
        for (var z, M0 = -1, F0 = y0.length - 1; M0 < F0; )
          if (z = y0[M0 += 1], S0(z)) {
            if (z[e(1436)] && (s += " if (" + x[e(2365)].checkDataType(z[e(1436)], v, x.opts[e(2347)]) + e(1050)), x[e(930)].useDefaults) {
              if (z[e(1436)] == e(2613) && x[e(1676)][e(1367)]) {
                var b = x[e(1676)][e(1367)], J0 = Object.keys(b), _ = J0;
                if (_)
                  for (var T, H = -1, J = _[e(1667)] - 1; H < J; ) {
                    T = _[H += 1];
                    var Y = b[T];
                    if (Y[e(2475)] !== void 0) {
                      var V = v + x[e(2365)][e(2562)](T);
                      if (x[e(634)]) {
                        if (x[e(930)][e(2794)]) {
                          var A = e(536) + V;
                          if (x.opts.strictDefaults === e(1546)) x.logger.warn(A);
                          else throw new Error(A);
                        }
                      } else s += e(2471) + V + e(2514), x[e(930)].useDefaults == e(2191) && (s += e(2813) + V + e(521) + V + e(843)), s += " ) " + V + e(1992), x[e(930)][e(2177)] == e(1827) ? s += " " + x[e(1125)](Y.default) + " " : s += " " + JSON[e(2340)](Y[e(2475)]) + " ", s += "; ";
                    }
                  }
              } else if (z[e(1436)] == e(2455) && Array[e(1683)](x.schema.items)) {
                var Q = x[e(1676)][e(1917)];
                if (Q) {
                  for (var Y, l0 = -1, n0 = Q[e(1667)] - 1; l0 < n0; )
                    if (Y = Q[l0 += 1], Y[e(2475)] !== void 0) {
                      var V = v + "[" + l0 + "]";
                      if (x[e(634)]) {
                        if (x[e(930)].strictDefaults) {
                          var A = e(536) + V;
                          if (x[e(930)][e(2794)] === "log") x.logger[e(1842)](A);
                          else throw new Error(A);
                        }
                      } else s += " if (" + V + e(2514), x[e(930)].useDefaults == e(2191) && (s += e(2813) + V + e(521) + V + e(843)), s += e(2375) + V + e(1992), x[e(930)].useDefaults == e(1827) ? s += " " + x[e(1125)](Y.default) + " " : s += " " + JSON[e(2340)](Y[e(2475)]) + " ", s += "; ";
                    }
                }
              }
            }
            var i0 = z[e(710)];
            if (i0) {
              for (var x0, L0 = -1, A0 = i0[e(1667)] - 1; L0 < A0; )
                if (x0 = i0[L0 += 1], G0(x0)) {
                  var z0 = x0[e(444)](x, x0.keyword, z[e(1436)]);
                  z0 && (s += " " + z0 + " ", E && (R += "}"));
                }
            }
            if (E && (s += " " + R + " ", R = ""), z[e(1436)] && (s += e(791), j && j === z.type && !N)) {
              s += " else { ";
              var h = x[e(332)] + e(384), m = x[e(1481)] + "/type", k = k || [];
              k[e(528)](s), s = "", x[e(1566)] !== !1 ? (s += e(658) + (D || e(1436)) + "' , dataPath: (dataPath || '') + " + x[e(372)] + e(662) + x[e(2365)][e(1806)](m) + e(2756), q ? s += "" + j.join(",") : s += "" + j, s += "' } ", x.opts[e(635)] !== !1 && (s += e(1796), q ? s += "" + j[e(1255)](",") : s += "" + j, s += "' "), x.opts[e(2840)] && (s += e(396) + h + e(2874) + x[e(332)] + e(300) + v + " "), s += e(791)) : s += e(1968);
              var P = s;
              s = k[e(940)](), !x[e(634)] && E ? x[e(2780)] ? s += e(1073) + P + "]); " : s += e(2338) + P + e(580) : s += e(1781) + P + e(1771), s += e(791);
            }
            E && (s += " if (errors === ", F ? s += "0" : s += e(2612) + l, s += e(1050), O += "}");
          }
      }
    }
    E && (s += " " + O + " "), F ? (n ? (s += e(594), s += e(642)) : (s += e(1629), s += e(1368)), s += " }; return validate;") : s += e(512) + C + " = errors === errs_" + l + ";";
    function S0(Q0) {
      for (var U0 = Q0[e(710)], Y0 = 0; Y0 < U0.length; Y0++) if (G0(U0[Y0])) return !0;
    }
    function G0(Q0) {
      const _0 = e;
      return x[_0(1676)][Q0[_0(1825)]] !== void 0 || Q0.implements && ne(Q0);
    }
    function ne(Q0) {
      const _0 = e;
      for (var U0 = Q0[_0(2107)], Y0 = 0; Y0 < U0[_0(1667)]; Y0++) if (x[_0(1676)][U0[Y0]] !== void 0) return !0;
    }
    return s;
  }), st;
}
var nt, pr;
function a2() {
  const i = a;
  if (pr) return nt;
  pr = 1;
  var x = fa(), t = Be(), r = ha(), e = pn(), s = mn(), n = t[i(1456)], o = la(), c = r[i(1360)];
  nt = u;
  function u(P, F, A, C) {
    const E = i;
    var R = this, O = this[E(1913)], D = [void 0], j = {}, q = [], N = {}, z = [], L = {}, U = [];
    F = F || { schema: P, refVal: D, refs: j };
    var G = d[E(1512)](this, P, F, C), c0 = this[E(295)][G.index];
    if (G.compiling) return c0[E(1599)] = k0;
    var u0 = this[E(1056)], l0 = this[E(2420)];
    try {
      var o0 = y0(P, F, A, C);
      c0[E(312)] = o0;
      var f0 = c0[E(1599)];
      return f0 && (f0[E(1676)] = o0[E(1676)], f0[E(2183)] = null, f0[E(853)] = o0[E(853)], f0.refVal = o0[E(1772)], f0.root = o0.root, f0.$async = o0[E(2190)], O.sourceCode && (f0[E(2159)] = o0[E(2159)])), o0;
    } finally {
      l[E(1512)](this, P, F, C);
    }
    function k0() {
      const V = E;
      var Q = c0[V(312)], n0 = Q[V(758)](this, arguments);
      return k0[V(2183)] = Q[V(2183)], n0;
    }
    function y0(V, Q, n0, i0) {
      const x0 = E;
      var L0 = !Q || Q && Q[x0(1676)] == V;
      if (Q[x0(1676)] != F[x0(1676)]) return u[x0(1512)](R, V, Q, n0, i0);
      var A0 = V[x0(2190)] === !0, z0 = s({ isTop: !0, schema: V, isRoot: L0, baseId: i0, root: Q, schemaPath: "", errSchemaPath: "#", errorPath: '""', MissingRefError: r[x0(2650)], RULES: l0, validate: s, util: t, resolve: x, resolveRef: M0, usePattern: H, useDefault: J, useCustomRule: Y, opts: O, formats: u0, logger: R[x0(2047)], self: R });
      z0 = k(D, m) + k(q, b) + k(z, h) + k(U, v) + z0, O[x0(833)] && (z0 = O[x0(833)](z0, V));
      var S0;
      try {
        var G0 = new Function(x0(1321), x0(2420), x0(2755), "root", x0(1772), "defaults", x0(2719), x0(1058), "ucs2length", x0(2630), z0);
        S0 = G0(R, l0, u0, F, D, z, U, o, n, c), D[0] = S0;
      } catch (ne) {
        throw R[x0(2047)][x0(1033)]("Error compiling schema, function code:", z0), ne;
      }
      return S0[x0(1676)] = V, S0.errors = null, S0[x0(853)] = j, S0.refVal = D, S0[x0(1576)] = L0 ? S0 : Q, A0 && (S0[x0(2190)] = !0), O.sourceCode === !0 && (S0[x0(2159)] = { code: z0, patterns: q, defaults: z }), S0;
    }
    function M0(V, Q, n0) {
      const i0 = E;
      Q = x.url(V, Q);
      var x0 = j[Q], L0, A0;
      if (x0 !== void 0) return L0 = D[x0], A0 = i0(1952) + x0 + "]", T(L0, A0);
      if (!n0 && F[i0(853)]) {
        var z0 = F[i0(853)][Q];
        if (z0 !== void 0) return L0 = F[i0(1772)][z0], A0 = F0(Q, L0), T(L0, A0);
      }
      A0 = F0(Q);
      var S0 = x[i0(1512)](R, y0, F, Q);
      if (S0 === void 0) {
        var G0 = A && A[Q];
        G0 && (S0 = x[i0(621)](G0, O[i0(2431)]) ? G0 : u.call(R, G0, F, A, V));
      }
      if (S0 === void 0) J0(Q);
      else return _(Q, S0), T(S0, A0);
    }
    function F0(V, Q) {
      const n0 = E;
      var i0 = D.length;
      return D[i0] = Q, j[V] = i0, n0(1772) + i0;
    }
    function J0(V) {
      delete j[V];
    }
    function _(V, Q) {
      var n0 = j[V];
      D[n0] = Q;
    }
    function T(V, Q) {
      const n0 = E;
      return typeof V == n0(2613) || typeof V == n0(1459) ? { code: Q, schema: V, inline: !0 } : { code: Q, $async: V && !!V[n0(2190)] };
    }
    function H(V) {
      const Q = E;
      var n0 = N[V];
      return n0 === void 0 && (n0 = N[V] = q[Q(1667)], q[n0] = V), "pattern" + n0;
    }
    function J(V) {
      const Q = E;
      switch (typeof V) {
        case Q(1459):
        case Q(329):
          return "" + V;
        case "string":
          return t[Q(1806)](V);
        case Q(2613):
          if (V === null) return Q(1399);
          var n0 = e(V), i0 = L[n0];
          return i0 === void 0 && (i0 = L[n0] = z[Q(1667)], z[i0] = V), Q(2475) + i0;
      }
    }
    function Y(V, Q, n0, i0) {
      const x0 = E;
      if (R[x0(1913)][x0(733)] !== !1) {
        var L0 = V[x0(576)][x0(849)];
        if (L0 && !L0.every(function(Y0) {
          const qe = x0;
          return Object[qe(1523)][qe(1687)][qe(1512)](n0, Y0);
        })) throw new Error(x0(883) + L0[x0(1255)](","));
        var A0 = V[x0(576)].validateSchema;
        if (A0) {
          var z0 = A0(Q);
          if (!z0) {
            var S0 = x0(490) + R[x0(1448)](A0[x0(2183)]);
            if (R[x0(1913)][x0(733)] == x0(1546)) R[x0(2047)].error(S0);
            else throw new Error(S0);
          }
        }
      }
      var G0 = V[x0(576)][x0(699)], ne = V[x0(576)][x0(797)], Q0 = V[x0(576)][x0(1971)], _0;
      if (G0) _0 = G0.call(R, Q, n0, i0);
      else if (Q0)
        _0 = Q0[x0(1512)](R, Q, n0, i0), O[x0(733)] !== !1 && R[x0(733)](_0, !0);
      else if (ne) _0 = ne.call(R, i0, V[x0(1825)], Q, n0);
      else if (_0 = V[x0(576)].validate, !_0) return;
      if (_0 === void 0) throw new Error(x0(790) + V[x0(1825)] + '"failed to compile');
      var U0 = U[x0(1667)];
      return U[U0] = _0, { code: "customRule" + U0, validate: _0 };
    }
  }
  function d(P, F, A) {
    const C = i;
    var E = f[C(1512)](this, P, F, A);
    return E >= 0 ? { index: E, compiling: !0 } : (E = this[C(295)][C(1667)], this[C(295)][E] = { schema: P, root: F, baseId: A }, { index: E, compiling: !1 });
  }
  function l(P, F, A) {
    var C = f.call(this, P, F, A);
    C >= 0 && this._compilations.splice(C, 1);
  }
  function f(P, F, A) {
    const C = i;
    for (var E = 0; E < this[C(295)][C(1667)]; E++) {
      var R = this._compilations[E];
      if (R.schema == P && R[C(1576)] == F && R.baseId == A) return E;
    }
    return -1;
  }
  function b(P, F) {
    const A = i;
    return A(1338) + P + A(2088) + t.toQuotedString(F[P]) + ");";
  }
  function h(P) {
    const F = i;
    return F(1122) + P + F(438) + P + "];";
  }
  function m(P, F) {
    const A = i;
    return F[P] === void 0 ? "" : A(1310) + P + " = refVal[" + P + "];";
  }
  function v(P) {
    const F = i;
    return F(1409) + P + F(2185) + P + "];";
  }
  function k(P, F) {
    const A = i;
    if (!P[A(1667)]) return "";
    for (var C = "", E = 0; E < P[A(1667)]; E++) C += F(E, P);
    return C;
  }
  return nt;
}
var it = { exports: {} }, mr;
function r2() {
  const i = a;
  if (mr) return it[i(1294)];
  mr = 1;
  var x = it.exports = function() {
    const r = i;
    this[r(461)] = {};
  };
  return x.prototype[i(1869)] = function(r, e) {
    const s = i;
    this[s(461)][r] = e;
  }, x[i(1523)][i(2917)] = function(r) {
    return this[i(461)][r];
  }, x[i(1523)][i(2241)] = function(r) {
    const e = i;
    delete this[e(461)][r];
  }, x[i(1523)][i(2450)] = function() {
    const r = i;
    this[r(461)] = {};
  }, it.exports;
}
var ot, br;
function s2() {
  const i = a;
  if (br) return ot;
  br = 1;
  var x = Be(), t = /^(\d\d\d\d)-(\d\d)-(\d\d)$/, r = [0, 31, 28, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31], e = /^(\d\d):(\d\d):(\d\d)(\.\d+)?(z|[+-]\d\d(?::?\d\d)?)?$/i, s = /^(?=.{1,253}\.?$)[a-z0-9](?:[a-z0-9-]{0,61}[a-z0-9])?(?:\.[a-z0-9](?:[-0-9a-z]{0,61}[0-9a-z])?)*\.?$/i, n = /^(?:[a-z][a-z0-9+\-.]*:)(?:\/?\/(?:(?:[a-z0-9\-._~!$&'()*+,;=:]|%[0-9a-f]{2})*@)?(?:\[(?:(?:(?:(?:[0-9a-f]{1,4}:){6}|::(?:[0-9a-f]{1,4}:){5}|(?:[0-9a-f]{1,4})?::(?:[0-9a-f]{1,4}:){4}|(?:(?:[0-9a-f]{1,4}:){0,1}[0-9a-f]{1,4})?::(?:[0-9a-f]{1,4}:){3}|(?:(?:[0-9a-f]{1,4}:){0,2}[0-9a-f]{1,4})?::(?:[0-9a-f]{1,4}:){2}|(?:(?:[0-9a-f]{1,4}:){0,3}[0-9a-f]{1,4})?::[0-9a-f]{1,4}:|(?:(?:[0-9a-f]{1,4}:){0,4}[0-9a-f]{1,4})?::)(?:[0-9a-f]{1,4}:[0-9a-f]{1,4}|(?:(?:25[0-5]|2[0-4]\d|[01]?\d\d?)\.){3}(?:25[0-5]|2[0-4]\d|[01]?\d\d?))|(?:(?:[0-9a-f]{1,4}:){0,5}[0-9a-f]{1,4})?::[0-9a-f]{1,4}|(?:(?:[0-9a-f]{1,4}:){0,6}[0-9a-f]{1,4})?::)|[Vv][0-9a-f]+\.[a-z0-9\-._~!$&'()*+,;=:]+)\]|(?:(?:25[0-5]|2[0-4]\d|[01]?\d\d?)\.){3}(?:25[0-5]|2[0-4]\d|[01]?\d\d?)|(?:[a-z0-9\-._~!$&'()*+,;=]|%[0-9a-f]{2})*)(?::\d*)?(?:\/(?:[a-z0-9\-._~!$&'()*+,;=:@]|%[0-9a-f]{2})*)*|\/(?:(?:[a-z0-9\-._~!$&'()*+,;=:@]|%[0-9a-f]{2})+(?:\/(?:[a-z0-9\-._~!$&'()*+,;=:@]|%[0-9a-f]{2})*)*)?|(?:[a-z0-9\-._~!$&'()*+,;=:@]|%[0-9a-f]{2})+(?:\/(?:[a-z0-9\-._~!$&'()*+,;=:@]|%[0-9a-f]{2})*)*)(?:\?(?:[a-z0-9\-._~!$&'()*+,;=:@/?]|%[0-9a-f]{2})*)?(?:#(?:[a-z0-9\-._~!$&'()*+,;=:@/?]|%[0-9a-f]{2})*)?$/i, o = /^(?:[a-z][a-z0-9+\-.]*:)?(?:\/?\/(?:(?:[a-z0-9\-._~!$&'()*+,;=:]|%[0-9a-f]{2})*@)?(?:\[(?:(?:(?:(?:[0-9a-f]{1,4}:){6}|::(?:[0-9a-f]{1,4}:){5}|(?:[0-9a-f]{1,4})?::(?:[0-9a-f]{1,4}:){4}|(?:(?:[0-9a-f]{1,4}:){0,1}[0-9a-f]{1,4})?::(?:[0-9a-f]{1,4}:){3}|(?:(?:[0-9a-f]{1,4}:){0,2}[0-9a-f]{1,4})?::(?:[0-9a-f]{1,4}:){2}|(?:(?:[0-9a-f]{1,4}:){0,3}[0-9a-f]{1,4})?::[0-9a-f]{1,4}:|(?:(?:[0-9a-f]{1,4}:){0,4}[0-9a-f]{1,4})?::)(?:[0-9a-f]{1,4}:[0-9a-f]{1,4}|(?:(?:25[0-5]|2[0-4]\d|[01]?\d\d?)\.){3}(?:25[0-5]|2[0-4]\d|[01]?\d\d?))|(?:(?:[0-9a-f]{1,4}:){0,5}[0-9a-f]{1,4})?::[0-9a-f]{1,4}|(?:(?:[0-9a-f]{1,4}:){0,6}[0-9a-f]{1,4})?::)|[Vv][0-9a-f]+\.[a-z0-9\-._~!$&'()*+,;=:]+)\]|(?:(?:25[0-5]|2[0-4]\d|[01]?\d\d?)\.){3}(?:25[0-5]|2[0-4]\d|[01]?\d\d?)|(?:[a-z0-9\-._~!$&'"()*+,;=]|%[0-9a-f]{2})*)(?::\d*)?(?:\/(?:[a-z0-9\-._~!$&'"()*+,;=:@]|%[0-9a-f]{2})*)*|\/(?:(?:[a-z0-9\-._~!$&'"()*+,;=:@]|%[0-9a-f]{2})+(?:\/(?:[a-z0-9\-._~!$&'"()*+,;=:@]|%[0-9a-f]{2})*)*)?|(?:[a-z0-9\-._~!$&'"()*+,;=:@]|%[0-9a-f]{2})+(?:\/(?:[a-z0-9\-._~!$&'"()*+,;=:@]|%[0-9a-f]{2})*)*)?(?:\?(?:[a-z0-9\-._~!$&'"()*+,;=:@/?]|%[0-9a-f]{2})*)?(?:#(?:[a-z0-9\-._~!$&'"()*+,;=:@/?]|%[0-9a-f]{2})*)?$/i, c = /^(?:(?:[^\x00-\x20"'<>%\\^`{|}]|%[0-9a-f]{2})|\{[+#./;?&=,!@|]?(?:[a-z0-9_]|%[0-9a-f]{2})+(?::[1-9][0-9]{0,3}|\*)?(?:,(?:[a-z0-9_]|%[0-9a-f]{2})+(?::[1-9][0-9]{0,3}|\*)?)*\})*$/i, u = /^(?:(?:http[s\u017F]?|ftp):\/\/)(?:(?:[\0-\x08\x0E-\x1F!-\x9F\xA1-\u167F\u1681-\u1FFF\u200B-\u2027\u202A-\u202E\u2030-\u205E\u2060-\u2FFF\u3001-\uD7FF\uE000-\uFEFE\uFF00-\uFFFF]|[\uD800-\uDBFF][\uDC00-\uDFFF]|[\uD800-\uDBFF](?![\uDC00-\uDFFF])|(?:[^\uD800-\uDBFF]|^)[\uDC00-\uDFFF])+(?::(?:[\0-\x08\x0E-\x1F!-\x9F\xA1-\u167F\u1681-\u1FFF\u200B-\u2027\u202A-\u202E\u2030-\u205E\u2060-\u2FFF\u3001-\uD7FF\uE000-\uFEFE\uFF00-\uFFFF]|[\uD800-\uDBFF][\uDC00-\uDFFF]|[\uD800-\uDBFF](?![\uDC00-\uDFFF])|(?:[^\uD800-\uDBFF]|^)[\uDC00-\uDFFF])*)?@)?(?:(?!10(?:\.[0-9]{1,3}){3})(?!127(?:\.[0-9]{1,3}){3})(?!169\.254(?:\.[0-9]{1,3}){2})(?!192\.168(?:\.[0-9]{1,3}){2})(?!172\.(?:1[6-9]|2[0-9]|3[01])(?:\.[0-9]{1,3}){2})(?:[1-9][0-9]?|1[0-9][0-9]|2[01][0-9]|22[0-3])(?:\.(?:1?[0-9]{1,2}|2[0-4][0-9]|25[0-5])){2}(?:\.(?:[1-9][0-9]?|1[0-9][0-9]|2[0-4][0-9]|25[0-4]))|(?:(?:(?:[0-9a-z\xA1-\uD7FF\uE000-\uFFFF]|[\uD800-\uDBFF](?![\uDC00-\uDFFF])|(?:[^\uD800-\uDBFF]|^)[\uDC00-\uDFFF])+-)*(?:[0-9a-z\xA1-\uD7FF\uE000-\uFFFF]|[\uD800-\uDBFF](?![\uDC00-\uDFFF])|(?:[^\uD800-\uDBFF]|^)[\uDC00-\uDFFF])+)(?:\.(?:(?:[0-9a-z\xA1-\uD7FF\uE000-\uFFFF]|[\uD800-\uDBFF](?![\uDC00-\uDFFF])|(?:[^\uD800-\uDBFF]|^)[\uDC00-\uDFFF])+-)*(?:[0-9a-z\xA1-\uD7FF\uE000-\uFFFF]|[\uD800-\uDBFF](?![\uDC00-\uDFFF])|(?:[^\uD800-\uDBFF]|^)[\uDC00-\uDFFF])+)*(?:\.(?:(?:[a-z\xA1-\uD7FF\uE000-\uFFFF]|[\uD800-\uDBFF](?![\uDC00-\uDFFF])|(?:[^\uD800-\uDBFF]|^)[\uDC00-\uDFFF]){2,})))(?::[0-9]{2,5})?(?:\/(?:[\0-\x08\x0E-\x1F!-\x9F\xA1-\u167F\u1681-\u1FFF\u200B-\u2027\u202A-\u202E\u2030-\u205E\u2060-\u2FFF\u3001-\uD7FF\uE000-\uFEFE\uFF00-\uFFFF]|[\uD800-\uDBFF][\uDC00-\uDFFF]|[\uD800-\uDBFF](?![\uDC00-\uDFFF])|(?:[^\uD800-\uDBFF]|^)[\uDC00-\uDFFF])*)?$/i, d = /^(?:urn:uuid:)?[0-9a-f]{8}-(?:[0-9a-f]{4}-){3}[0-9a-f]{12}$/i, l = /^(?:\/(?:[^~/]|~0|~1)*)*$/, f = /^#(?:\/(?:[a-z0-9_\-.!$&'()*+,;:=@]|%[0-9a-f]{2}|~0|~1)*)*$/i, b = /^(?:0|[1-9][0-9]*)(?:#|(?:\/(?:[^~/]|~0|~1)*)*)$/;
  ot = h;
  function h(O) {
    const D = K;
    return O = O == D(1398) ? D(1398) : D(2579), x[D(2588)](h[O]);
  }
  h[i(2579)] = { date: /^\d\d\d\d-[0-1]\d-[0-3]\d$/, time: /^(?:[0-2]\d:[0-5]\d:[0-5]\d|23:59:60)(?:\.\d+)?(?:z|[+-]\d\d(?::?\d\d)?)?$/i, "date-time": /^\d\d\d\d-[0-1]\d-[0-3]\d[t\s](?:[0-2]\d:[0-5]\d:[0-5]\d|23:59:60)(?:\.\d+)?(?:z|[+-]\d\d(?::?\d\d)?)$/i, uri: /^(?:[a-z][a-z0-9+\-.]*:)(?:\/?\/)?[^\s]*$/i, "uri-reference": /^(?:(?:[a-z][a-z0-9+\-.]*:)?\/?\/)?(?:[^\\\s#][^\s#]*)?(?:#[^\\\s]*)?$/i, "uri-template": c, url: u, email: /^[a-z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-z0-9](?:[a-z0-9-]{0,61}[a-z0-9])?(?:\.[a-z0-9](?:[a-z0-9-]{0,61}[a-z0-9])?)*$/i, hostname: s, ipv4: /^(?:(?:25[0-5]|2[0-4]\d|[01]?\d\d?)\.){3}(?:25[0-5]|2[0-4]\d|[01]?\d\d?)$/, ipv6: /^\s*(?:(?:(?:[0-9a-f]{1,4}:){7}(?:[0-9a-f]{1,4}|:))|(?:(?:[0-9a-f]{1,4}:){6}(?::[0-9a-f]{1,4}|(?:(?:25[0-5]|2[0-4]\d|1\d\d|[1-9]?\d)(?:\.(?:25[0-5]|2[0-4]\d|1\d\d|[1-9]?\d)){3})|:))|(?:(?:[0-9a-f]{1,4}:){5}(?:(?:(?::[0-9a-f]{1,4}){1,2})|:(?:(?:25[0-5]|2[0-4]\d|1\d\d|[1-9]?\d)(?:\.(?:25[0-5]|2[0-4]\d|1\d\d|[1-9]?\d)){3})|:))|(?:(?:[0-9a-f]{1,4}:){4}(?:(?:(?::[0-9a-f]{1,4}){1,3})|(?:(?::[0-9a-f]{1,4})?:(?:(?:25[0-5]|2[0-4]\d|1\d\d|[1-9]?\d)(?:\.(?:25[0-5]|2[0-4]\d|1\d\d|[1-9]?\d)){3}))|:))|(?:(?:[0-9a-f]{1,4}:){3}(?:(?:(?::[0-9a-f]{1,4}){1,4})|(?:(?::[0-9a-f]{1,4}){0,2}:(?:(?:25[0-5]|2[0-4]\d|1\d\d|[1-9]?\d)(?:\.(?:25[0-5]|2[0-4]\d|1\d\d|[1-9]?\d)){3}))|:))|(?:(?:[0-9a-f]{1,4}:){2}(?:(?:(?::[0-9a-f]{1,4}){1,5})|(?:(?::[0-9a-f]{1,4}){0,3}:(?:(?:25[0-5]|2[0-4]\d|1\d\d|[1-9]?\d)(?:\.(?:25[0-5]|2[0-4]\d|1\d\d|[1-9]?\d)){3}))|:))|(?:(?:[0-9a-f]{1,4}:){1}(?:(?:(?::[0-9a-f]{1,4}){1,6})|(?:(?::[0-9a-f]{1,4}){0,4}:(?:(?:25[0-5]|2[0-4]\d|1\d\d|[1-9]?\d)(?:\.(?:25[0-5]|2[0-4]\d|1\d\d|[1-9]?\d)){3}))|:))|(?::(?:(?:(?::[0-9a-f]{1,4}){1,7})|(?:(?::[0-9a-f]{1,4}){0,5}:(?:(?:25[0-5]|2[0-4]\d|1\d\d|[1-9]?\d)(?:\.(?:25[0-5]|2[0-4]\d|1\d\d|[1-9]?\d)){3}))|:)))(?:%.+)?\s*$/i, regex: R, uuid: d, "json-pointer": l, "json-pointer-uri-fragment": f, "relative-json-pointer": b }, h[i(1398)] = { date: v, time: k, "date-time": F, uri: C, "uri-reference": o, "uri-template": c, url: u, email: /^[a-z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[a-z0-9!#$%&'*+/=?^_`{|}~-]+)*@(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?$/i, hostname: s, ipv4: /^(?:(?:25[0-5]|2[0-4]\d|[01]?\d\d?)\.){3}(?:25[0-5]|2[0-4]\d|[01]?\d\d?)$/, ipv6: /^\s*(?:(?:(?:[0-9a-f]{1,4}:){7}(?:[0-9a-f]{1,4}|:))|(?:(?:[0-9a-f]{1,4}:){6}(?::[0-9a-f]{1,4}|(?:(?:25[0-5]|2[0-4]\d|1\d\d|[1-9]?\d)(?:\.(?:25[0-5]|2[0-4]\d|1\d\d|[1-9]?\d)){3})|:))|(?:(?:[0-9a-f]{1,4}:){5}(?:(?:(?::[0-9a-f]{1,4}){1,2})|:(?:(?:25[0-5]|2[0-4]\d|1\d\d|[1-9]?\d)(?:\.(?:25[0-5]|2[0-4]\d|1\d\d|[1-9]?\d)){3})|:))|(?:(?:[0-9a-f]{1,4}:){4}(?:(?:(?::[0-9a-f]{1,4}){1,3})|(?:(?::[0-9a-f]{1,4})?:(?:(?:25[0-5]|2[0-4]\d|1\d\d|[1-9]?\d)(?:\.(?:25[0-5]|2[0-4]\d|1\d\d|[1-9]?\d)){3}))|:))|(?:(?:[0-9a-f]{1,4}:){3}(?:(?:(?::[0-9a-f]{1,4}){1,4})|(?:(?::[0-9a-f]{1,4}){0,2}:(?:(?:25[0-5]|2[0-4]\d|1\d\d|[1-9]?\d)(?:\.(?:25[0-5]|2[0-4]\d|1\d\d|[1-9]?\d)){3}))|:))|(?:(?:[0-9a-f]{1,4}:){2}(?:(?:(?::[0-9a-f]{1,4}){1,5})|(?:(?::[0-9a-f]{1,4}){0,3}:(?:(?:25[0-5]|2[0-4]\d|1\d\d|[1-9]?\d)(?:\.(?:25[0-5]|2[0-4]\d|1\d\d|[1-9]?\d)){3}))|:))|(?:(?:[0-9a-f]{1,4}:){1}(?:(?:(?::[0-9a-f]{1,4}){1,6})|(?:(?::[0-9a-f]{1,4}){0,4}:(?:(?:25[0-5]|2[0-4]\d|1\d\d|[1-9]?\d)(?:\.(?:25[0-5]|2[0-4]\d|1\d\d|[1-9]?\d)){3}))|:))|(?::(?:(?:(?::[0-9a-f]{1,4}){1,7})|(?:(?::[0-9a-f]{1,4}){0,5}:(?:(?:25[0-5]|2[0-4]\d|1\d\d|[1-9]?\d)(?:\.(?:25[0-5]|2[0-4]\d|1\d\d|[1-9]?\d)){3}))|:)))(?:%.+)?\s*$/i, regex: R, uuid: d, "json-pointer": l, "json-pointer-uri-fragment": f, "relative-json-pointer": b };
  function m(O) {
    return O % 4 === 0 && (O % 100 !== 0 || O % 400 === 0);
  }
  function v(O) {
    var j = O[i(1376)](t);
    if (!j) return !1;
    var q = +j[1], N = +j[2], z = +j[3];
    return N >= 1 && N <= 12 && z >= 1 && z <= (N == 2 && m(q) ? 29 : r[N]);
  }
  function k(O, D) {
    var q = O[i(1376)](e);
    if (!q) return !1;
    var N = q[1], z = q[2], L = q[3], U = q[5];
    return (N <= 23 && z <= 59 && L <= 59 || N == 23 && z == 59 && L == 60) && (!D || U);
  }
  var P = /t|\s/i;
  function F(O) {
    const D = i;
    var j = O[D(1160)](P);
    return j[D(1667)] == 2 && v(j[0]) && k(j[1], !0);
  }
  var A = /\/|:/;
  function C(O) {
    return A[i(700)](O) && n.test(O);
  }
  var E = /[^\\]\\Z/;
  function R(O) {
    if (E[i(700)](O)) return !1;
    try {
      return new RegExp(O), !0;
    } catch {
      return !1;
    }
  }
  return ot;
}
var ct, gr;
function n2() {
  return gr || (gr = 1, ct = function(x, t, r) {
    const e = K;
    var s = " ", n = x.level, o = x[e(712)], c = x.schema[t], u = x.errSchemaPath + "/" + t, d = !x[e(930)][e(1115)], l = e(782) + (o || ""), f = e(1268) + n, b, h;
    if (c == "#" || c == "#/") x[e(1209)] ? (b = x[e(2780)], h = "validate") : (b = x[e(1576)][e(1676)][e(2190)] === !0, h = "root.refVal[0]");
    else {
      var m = x[e(2067)](x[e(2681)], c, x[e(1209)]);
      if (m === void 0) {
        var v = x[e(1312)][e(2851)](x[e(2681)], c);
        if (x[e(930)][e(1518)] == "fail") {
          x[e(2047)][e(1033)](v);
          var k = k || [];
          k[e(528)](s), s = "", x[e(1566)] !== !1 ? (s += e(658) + e(1633) + e(311) + x.errorPath + " , schemaPath: " + x.util[e(1806)](u) + " , params: { ref: '" + x.util[e(397)](c) + "' } ", x[e(930)][e(635)] !== !1 && (s += " , message: 'can\\'t resolve reference " + x[e(2365)][e(397)](c) + "' "), x[e(930)].verbose && (s += " , schema: " + x.util.toQuotedString(c) + e(2874) + x[e(332)] + " , data: " + l + " "), s += e(791)) : s += e(1968);
          var P = s;
          s = k[e(940)](), !x[e(634)] && d ? x[e(2780)] ? s += e(1073) + P + e(392) : s += e(2338) + P + e(580) : s += e(1781) + P + e(1771), d && (s += e(653));
        } else if (x.opts[e(1518)] == e(1502)) x[e(2047)][e(1842)](v), d && (s += e(348));
        else throw new x[e(1312)](x.baseId, c, v);
      } else if (m.inline) {
        var F = x.util.copy(x);
        F[e(2712)]++;
        var A = e(1268) + F[e(2712)];
        F[e(1676)] = m.schema, F[e(332)] = "", F[e(1481)] = c;
        var C = x.validate(F)[e(340)](/validate\.schema/g, m[e(444)]);
        s += " " + C + " ", d && (s += " if (" + A + e(1050));
      } else b = m[e(2190)] === !0 || x[e(2780)] && m[e(2190)] !== !1, h = m.code;
    }
    if (h) {
      var k = k || [];
      k.push(s), s = "", x[e(930)][e(1194)] ? s += " " + h + ".call(this, " : s += " " + h + "( ", s += " " + l + e(1988), x[e(372)] != '""' && (s += e(2826) + x.errorPath);
      var E = o ? e(782) + (o - 1 || "") : e(732), R = o ? x[e(1413)][o] : e(1529);
      s += " , " + E + " , " + R + e(2473);
      var O = s;
      if (s = k.pop(), b) {
        if (!x[e(2780)]) throw new Error(e(1060));
        d && (s += e(512) + f + "; "), s += " try { await " + O + "; ", d && (s += " " + f + " = true; "), s += e(723), d && (s += " " + f + " = false; "), s += " } ", d && (s += e(2471) + f + e(1050));
      } else s += e(2745) + O + ") { if (vErrors === null) vErrors = " + h + e(2215) + h + ".errors); errors = vErrors.length; } ", d && (s += " else { ");
    }
    return s;
  }), ct;
}
var ut, yr;
function i2() {
  return yr || (yr = 1, ut = function(x, t, r) {
    const e = K;
    var s = " ", n = x[e(1676)][t], o = x[e(332)] + x[e(2365)][e(2562)](t), c = x[e(1481)] + "/" + t, u = !x[e(930)][e(1115)], d = x[e(2365)][e(2588)](x), l = "";
    d.level++;
    var f = e(1268) + d[e(2712)], b = d.baseId, h = !0, m = n;
    if (m)
      for (var v, k = -1, P = m[e(1667)] - 1; k < P; )
        v = m[k += 1], (x[e(930)].strictKeywords ? typeof v == e(2613) && Object[e(1400)](v)[e(1667)] > 0 || v === !1 : x[e(2365)].schemaHasRules(v, x[e(2420)].all)) && (h = !1, d.schema = v, d[e(332)] = o + "[" + k + "]", d[e(1481)] = c + "/" + k, s += "  " + x[e(312)](d) + " ", d[e(2681)] = b, u && (s += e(2471) + f + ") { ", l += "}"));
    return u && (h ? s += e(348) : s += " " + l[e(2419)](0, -1) + " "), s;
  }), ut;
}
var dt, vr;
function o2() {
  return vr || (vr = 1, dt = function(x, t, r) {
    const e = K;
    var s = " ", n = x[e(2712)], o = x[e(712)], c = x.schema[t], u = x.schemaPath + x.util[e(2562)](t), d = x[e(1481)] + "/" + t, l = !x[e(930)][e(1115)], f = e(782) + (o || ""), b = e(1268) + n, h = e(2907) + n, m = x.util.copy(x), v = "";
    m[e(2712)]++;
    var k = e(1268) + m.level, P = c[e(2886)](function(D) {
      const j = e;
      return x[j(930)].strictKeywords ? typeof D == j(2613) && Object[j(1400)](D)[j(1667)] > 0 || D === !1 : x[j(2365)][j(2940)](D, x[j(2420)][j(1849)]);
    });
    if (P) {
      var F = m[e(2681)];
      s += e(512) + h + e(1266) + b + e(1477);
      var A = x[e(634)];
      x[e(634)] = m[e(634)] = !0;
      var C = c;
      if (C)
        for (var E, R = -1, O = C[e(1667)] - 1; R < O; )
          E = C[R += 1], m[e(1676)] = E, m[e(332)] = u + "[" + R + "]", m[e(1481)] = d + "/" + R, s += "  " + x[e(312)](m) + " ", m[e(2681)] = F, s += " " + b + e(1992) + b + " || " + k + e(1867) + b + ") { ", v += "}";
      x[e(634)] = m[e(634)] = A, s += " " + v + e(2745) + b + e(526), x[e(1566)] !== !1 ? (s += e(658) + "anyOf' , dataPath: (dataPath || '') + " + x[e(372)] + e(662) + x[e(2365)][e(1806)](d) + " , params: {} ", x[e(930)].messages !== !1 && (s += e(1809)), x[e(930)].verbose && (s += " , schema: validate.schema" + u + e(2874) + x[e(332)] + e(300) + f + " "), s += e(791)) : s += e(1968), s += e(1771), !x.compositeRule && l && (x[e(2780)] ? s += e(943) : s += e(414)), s += e(426) + h + e(2499) + h + e(1639) + h + e(1820), x[e(930)][e(1115)] && (s += " } ");
    } else l && (s += e(348));
    return s;
  }), dt;
}
var lt, wr;
function c2() {
  return wr || (wr = 1, lt = function(x, t, r) {
    const e = K;
    var s = " ", n = x.schema[t], o = x.errSchemaPath + "/" + t;
    x[e(930)][e(1115)];
    var c = x[e(2365)][e(1806)](n);
    return x.opts[e(2885)] === !0 ? s += e(2269) + c + ");" : typeof x.opts.$comment == e(1137) && (s += " self._opts.$comment(" + c + ", " + x[e(2365)][e(1806)](o) + e(1593)), s;
  }), lt;
}
var ft, Sr;
function u2() {
  return Sr || (Sr = 1, ft = function(x, t, r) {
    const e = K;
    var s = " ", n = x.level, o = x[e(712)], c = x[e(1676)][t], u = x[e(332)] + x.util[e(2562)](t), d = x[e(1481)] + "/" + t, l = !x[e(930)][e(1115)], f = "data" + (o || ""), b = e(1268) + n, h = x[e(930)][e(958)] && c && c[e(958)];
    h && (s += e(2641) + n + e(1992) + x.util[e(1588)](c[e(958)], o, x[e(1413)]) + "; "), !h && (s += e(2641) + n + e(1053) + u + ";"), s += e(1054) + b + e(1233) + f + e(1798) + n + e(2317) + b + e(630);
    var m = m || [];
    m[e(528)](s), s = "", x[e(1566)] !== !1 ? (s += " { keyword: 'const" + e(311) + x.errorPath + " , schemaPath: " + x.util[e(1806)](d) + e(2952) + n + e(791), x[e(930)].messages !== !1 && (s += e(2360)), x.opts.verbose && (s += e(396) + u + " , parentSchema: validate.schema" + x[e(332)] + e(300) + f + " "), s += e(791)) : s += e(1968);
    var v = s;
    return s = m[e(940)](), !x[e(634)] && l ? x.async ? s += " throw new ValidationError([" + v + e(392) : s += e(2338) + v + "]; return false; " : s += e(1781) + v + e(1771), s += " }", l && (s += e(1626)), s;
  }), ft;
}
var ht, kr;
function d2() {
  return kr || (kr = 1, ht = function(x, t, r) {
    const e = K;
    var s = " ", n = x[e(2712)], o = x[e(712)], c = x.schema[t], u = x.schemaPath + x.util.getProperty(t), d = x[e(1481)] + "/" + t, l = !x.opts[e(1115)], f = e(782) + (o || ""), b = e(1268) + n, h = e(2907) + n, m = x[e(2365)].copy(x), v = "";
    m[e(2712)]++;
    var k = e(1268) + m[e(2712)], P = "i" + n, F = m.dataLevel = x[e(712)] + 1, A = e(782) + F, C = x.baseId, E = x[e(930)][e(2268)] ? typeof c == e(2613) && Object[e(1400)](c).length > 0 || c === !1 : x[e(2365)].schemaHasRules(c, x[e(2420)][e(1849)]);
    if (s += e(1054) + h + " = errors;var " + b + ";", E) {
      var R = x[e(634)];
      x[e(634)] = m[e(634)] = !0, m[e(1676)] = c, m[e(332)] = u, m[e(1481)] = d, s += e(512) + k + " = false; for (var " + P + e(2602) + P + e(1877) + f + e(2282) + P + e(571), m[e(372)] = x[e(2365)][e(1949)](x[e(372)], P, x[e(930)][e(1882)], !0);
      var O = f + "[" + P + "]";
      m[e(1413)][F] = P;
      var D = x[e(312)](m);
      m[e(2681)] = C, x[e(2365)][e(439)](D, A) < 2 ? s += " " + x[e(2365)].varReplace(D, A, O) + " " : s += " var " + A + e(1992) + O + "; " + D + " ", s += " if (" + k + ") break; }  ", x[e(634)] = m[e(634)] = R, s += " " + v + e(2745) + k + ") {";
    } else s += e(2471) + f + e(1088);
    var j = j || [];
    j[e(528)](s), s = "", x[e(1566)] !== !1 ? (s += e(658) + e(2286) + e(311) + x[e(372)] + e(662) + x[e(2365)][e(1806)](d) + e(726), x[e(930)][e(635)] !== !1 && (s += e(2368)), x[e(930)][e(2840)] && (s += e(396) + u + e(2874) + x[e(332)] + e(300) + f + " "), s += e(791)) : s += " {} ";
    var q = s;
    return s = j[e(940)](), !x[e(634)] && l ? x.async ? s += e(1073) + q + e(392) : s += e(2338) + q + "]; return false; " : s += e(1781) + q + e(1771), s += " } else { ", E && (s += e(1755) + h + e(2499) + h + e(1639) + h + "; else vErrors = null; } "), x.opts[e(1115)] && (s += e(791)), s;
  }), ht;
}
var pt, Pr;
function l2() {
  return Pr || (Pr = 1, pt = function(x, t, r) {
    const e = K;
    var s = " ", n = x[e(2712)], o = x.dataLevel, c = x[e(1676)][t], u = x[e(332)] + x[e(2365)][e(2562)](t), d = x[e(1481)] + "/" + t, l = !x[e(930)].allErrors, f = "data" + (o || ""), b = e(2907) + n, h = x[e(2365)][e(2588)](x), m = "";
    h[e(2712)]++;
    var v = e(1268) + h.level, k = {}, P = {}, F = x.opts[e(1292)];
    for (R in c)
      if (R != e(1940)) {
        var A = c[R], C = Array[e(1683)](A) ? P : k;
        C[R] = A;
      }
    s += e(1054) + b + e(2931);
    var E = x.errorPath;
    s += e(740) + n + ";";
    for (var R in P)
      if (C = P[R], C[e(1667)]) {
        if (s += e(954) + f + x.util.getProperty(R) + e(2914), F && (s += e(2557) + f + ", '" + x[e(2365)][e(397)](R) + "') "), l) {
          s += e(2697);
          var O = C;
          if (O)
            for (var D, j = -1, q = O.length - 1; j < q; ) {
              D = O[j += 1], j && (s += e(2813));
              var N = x.util[e(2562)](D), z = f + N;
              s += e(2893) + z + " === undefined ", F && (s += " || ! Object.prototype.hasOwnProperty.call(" + f + e(1363) + x.util[e(397)](D) + "') "), s += e(2170) + n + e(1992) + x.util[e(1806)](x[e(930)][e(1882)] ? D : N) + e(1769);
            }
          s += e(799);
          var L = e(1876) + n, U = e(2270) + L + e(768);
          x[e(930)]._errorDataPathProperty && (x[e(372)] = x[e(930)][e(1882)] ? x[e(2365)][e(1949)](E, L, !0) : E + e(2826) + L);
          var G = G || [];
          G[e(528)](s), s = "", x[e(1566)] !== !1 ? (s += e(658) + "dependencies' , dataPath: (dataPath || '') + " + x.errorPath + e(662) + x[e(2365)].toQuotedString(d) + " , params: { property: '" + x[e(2365)].escapeQuotes(R) + "', missingProperty: '" + U + e(1307) + C[e(1667)] + e(2545) + x[e(2365)][e(397)](C.length == 1 ? C[0] : C[e(1255)](", ")) + e(1438), x[e(930)][e(635)] !== !1 && (s += e(2353), C[e(1667)] == 1 ? s += e(628) + x[e(2365)][e(397)](C[0]) : s += e(613) + x[e(2365)][e(397)](C[e(1255)](", ")), s += e(2555) + x[e(2365)].escapeQuotes(R) + e(1042)), x[e(930)][e(2840)] && (s += e(396) + u + e(2874) + x[e(332)] + e(300) + f + " "), s += e(791)) : s += e(1968);
          var c0 = s;
          s = G[e(940)](), !x.compositeRule && l ? x[e(2780)] ? s += e(1073) + c0 + e(392) : s += e(2338) + c0 + "]; return false; " : s += e(1781) + c0 + e(1771);
        } else {
          s += " ) { ";
          var u0 = C;
          if (u0)
            for (var D, l0 = -1, o0 = u0[e(1667)] - 1; l0 < o0; ) {
              D = u0[l0 += 1];
              var N = x[e(2365)][e(2562)](D), U = x[e(2365)][e(397)](D), z = f + N;
              x[e(930)][e(1108)] && (x[e(372)] = x[e(2365)][e(2558)](E, D, x[e(930)][e(1882)])), s += e(954) + z + e(2514), F && (s += e(544) + f + ", '" + x.util.escapeQuotes(D) + e(725)), s += e(2192), x[e(1566)] !== !1 ? (s += e(658) + e(849) + e(311) + x[e(372)] + e(662) + x[e(2365)][e(1806)](d) + " , params: { property: '" + x[e(2365)][e(397)](R) + e(1052) + U + e(1307) + C.length + e(2545) + x[e(2365)][e(397)](C[e(1667)] == 1 ? C[0] : C.join(", ")) + e(1438), x.opts[e(635)] !== !1 && (s += e(2353), C[e(1667)] == 1 ? s += e(628) + x[e(2365)][e(397)](C[0]) : s += e(613) + x[e(2365)][e(397)](C[e(1255)](", ")), s += " when property " + x.util.escapeQuotes(R) + e(1042)), x[e(930)][e(2840)] && (s += e(396) + u + e(2874) + x[e(332)] + e(300) + f + " "), s += " } ") : s += e(1968), s += ";  if (vErrors === null) vErrors = [err]; else vErrors.push(err); errors++; } ";
            }
        }
        s += " }   ", l && (m += "}", s += " else { ");
      }
    x.errorPath = E;
    var f0 = h.baseId;
    for (var R in k) {
      var A = k[R];
      (x[e(930)].strictKeywords ? typeof A == e(2613) && Object[e(1400)](A)[e(1667)] > 0 || A === !1 : x[e(2365)].schemaHasRules(A, x[e(2420)].all)) && (s += " " + v + " = true; if ( " + f + x.util[e(2562)](R) + " !== undefined ", F && (s += e(2557) + f + ", '" + x[e(2365)][e(397)](R) + "') "), s += e(1050), h[e(1676)] = A, h.schemaPath = u + x[e(2365)].getProperty(R), h[e(1481)] = d + "/" + x[e(2365)].escapeFragment(R), s += "  " + x[e(312)](h) + " ", h.baseId = f0, s += e(2143), l && (s += e(2471) + v + e(1050), m += "}"));
    }
    return l && (s += e(1808) + m + e(2471) + b + e(1366)), s;
  }), pt;
}
var mt, Ir;
function f2() {
  return Ir || (Ir = 1, mt = function(x, t, r) {
    const e = K;
    var s = " ", n = x[e(2712)], o = x[e(712)], c = x[e(1676)][t], u = x[e(332)] + x[e(2365)][e(2562)](t), d = x[e(1481)] + "/" + t, l = !x[e(930)][e(1115)], f = e(782) + (o || ""), b = "valid" + n, h = x.opts.$data && c && c[e(958)];
    h && (s += e(2641) + n + e(1992) + x[e(2365)][e(1588)](c.$data, o, x[e(1413)]) + "; ");
    var m = "i" + n, v = e(1676) + n;
    !h && (s += e(512) + v + e(1053) + u + ";"), s += e(1054) + b + ";", h && (s += e(835) + n + " === undefined) " + b + e(1009) + n + ")) " + b + " = false; else {"), s += "" + b + " = false;for (var " + m + e(313) + m + "<" + v + e(2282) + m + "++) if (equal(" + f + ", " + v + "[" + m + "])) { " + b + e(1105), h && (s += e(1726)), s += e(2745) + b + ") {   ";
    var k = k || [];
    k[e(528)](s), s = "", x[e(1566)] !== !1 ? (s += " { keyword: '" + e(2103) + e(311) + x[e(372)] + e(662) + x.util.toQuotedString(d) + e(1863) + n + " } ", x[e(930)][e(635)] !== !1 && (s += e(1872)), x[e(930)][e(2840)] && (s += e(396) + u + " , parentSchema: validate.schema" + x[e(332)] + " , data: " + f + " "), s += e(791)) : s += " {} ";
    var P = s;
    return s = k[e(940)](), !x[e(634)] && l ? x[e(2780)] ? s += " throw new ValidationError([" + P + e(392) : s += e(2338) + P + e(580) : s += e(1781) + P + e(1771), s += " }", l && (s += e(1626)), s;
  }), mt;
}
var bt, Er;
function h2() {
  return Er || (Er = 1, bt = function(x, t, r) {
    const e = K;
    var s = " ", n = x[e(2712)], o = x.dataLevel, c = x.schema[t], u = x[e(332)] + x[e(2365)][e(2562)](t), d = x[e(1481)] + "/" + t, l = !x[e(930)][e(1115)], f = "data" + (o || "");
    if (x.opts.format === !1) return l && (s += e(348)), s;
    var b = x[e(930)][e(958)] && c && c[e(958)], h;
    b ? (s += " var schema" + n + " = " + x[e(2365)].getData(c[e(958)], o, x[e(1413)]) + "; ", h = e(1676) + n) : h = c;
    var m = x[e(930)].unknownFormats, v = Array[e(1683)](m);
    if (b) {
      var k = e(2899) + n, P = "isObject" + n, F = e(1648) + n;
      s += " var " + k + e(1120) + h + e(1288) + P + " = typeof " + k + e(1930) + k + e(574) + k + e(2898) + F + e(1992) + P + e(1215) + k + e(2437) + P + e(1050), x[e(2780)] && (s += " var async" + n + e(1992) + k + e(1303)), s += " " + k + e(1992) + k + e(1462), b && (s += " (" + h + " !== undefined && typeof " + h + e(387)), s += " (", m != e(1502) && (s += " (" + h + e(1114) + k + " ", v && (s += e(670) + h + e(409)), s += e(1822)), s += " (" + k + e(1215) + F + e(254) + r + "' && !(typeof " + k + e(1236), x[e(2780)] ? s += e(1340) + n + e(2209) + k + "(" + f + e(2835) + k + "(" + f + e(2897) : s += " " + k + "(" + f + ") ", s += e(2941) + k + e(445) + f + e(793);
    } else {
      var k = x[e(2755)][c];
      if (!k) {
        if (m == "ignore") return x[e(2047)][e(1842)]('unknown format "' + c + e(2864) + x[e(1481)] + '"'), l && (s += e(348)), s;
        if (v && m.indexOf(c) >= 0) return l && (s += " if (true) { "), s;
        throw new Error(e(2158) + c + e(2392) + x[e(1481)] + '"');
      }
      var P = typeof k == "object" && !(k instanceof RegExp) && k[e(312)], F = P && k.type || e(1019);
      if (P) {
        var A = k[e(2780)] === !0;
        k = k[e(312)];
      }
      if (F != r) return l && (s += e(348)), s;
      if (A) {
        if (!x[e(2780)]) throw new Error(e(708));
        var C = e(2755) + x[e(2365)].getProperty(c) + e(1204);
        s += e(1747) + C + "(" + f + e(2747);
      } else {
        s += e(489);
        var C = e(2755) + x[e(2365)][e(2562)](c);
        P && (C += e(1204)), typeof k == e(1137) ? s += " " + C + "(" + f + ") " : s += " " + C + e(445) + f + ") ", s += e(1050);
      }
    }
    var E = E || [];
    E[e(528)](s), s = "", x[e(1566)] !== !1 ? (s += e(658) + e(2899) + e(311) + x[e(372)] + e(662) + x.util[e(1806)](d) + e(1563), b ? s += "" + h : s += "" + x[e(2365)][e(1806)](c), s += e(291), x.opts[e(635)] !== !1 && (s += e(2251), b ? s += e(2270) + h + " + '" : s += "" + x[e(2365)][e(397)](c), s += e(1133)), x[e(930)][e(2840)] && (s += " , schema:  ", b ? s += e(1430) + u : s += "" + x[e(2365)].toQuotedString(c), s += e(1657) + x[e(332)] + " , data: " + f + " "), s += e(791)) : s += e(1968);
    var R = s;
    return s = E[e(940)](), !x[e(634)] && l ? x[e(2780)] ? s += e(1073) + R + "]); " : s += e(2338) + R + e(580) : s += e(1781) + R + e(1771), s += e(791), l && (s += " else { "), s;
  }), bt;
}
var gt, Rr;
function p2() {
  return Rr || (Rr = 1, gt = function(x, t, r) {
    const e = K;
    var s = " ", n = x[e(2712)], o = x[e(712)], c = x[e(1676)][t], u = x[e(332)] + x[e(2365)][e(2562)](t), d = x[e(1481)] + "/" + t, l = !x[e(930)][e(1115)], f = e(782) + (o || ""), b = e(1268) + n, h = e(2907) + n, m = x.util[e(2588)](x);
    m[e(2712)]++;
    var v = e(1268) + m[e(2712)], k = x[e(1676)][e(654)], P = x[e(1676)][e(2205)], F = k !== void 0 && (x[e(930)][e(2268)] ? typeof k == e(2613) && Object[e(1400)](k)[e(1667)] > 0 || k === !1 : x[e(2365)].schemaHasRules(k, x[e(2420)][e(1849)])), A = P !== void 0 && (x[e(930)][e(2268)] ? typeof P == "object" && Object[e(1400)](P)[e(1667)] > 0 || P === !1 : x[e(2365)][e(2940)](P, x[e(2420)].all)), C = m.baseId;
    if (F || A) {
      var E;
      m[e(1566)] = !1, m.schema = c, m[e(332)] = u, m[e(1481)] = d, s += e(512) + h + e(1266) + b + " = true;  ";
      var R = x[e(634)];
      x[e(634)] = m[e(634)] = !0, s += "  " + x.validate(m) + " ", m.baseId = C, m[e(1566)] = !0, s += e(1755) + h + "; if (vErrors !== null) { if (" + h + e(1639) + h + e(1757), x[e(634)] = m.compositeRule = R, F ? (s += e(2471) + v + e(1738), m[e(1676)] = x[e(1676)][e(654)], m[e(332)] = x.schemaPath + e(459), m[e(1481)] = x[e(1481)] + e(1828), s += "  " + x[e(312)](m) + " ", m[e(2681)] = C, s += " " + b + e(1992) + v + "; ", F && A ? (E = e(826) + n, s += " var " + E + e(1025)) : E = e(937), s += e(791), A && (s += e(1626))) : s += e(2745) + v + e(1050), A && (m[e(1676)] = x[e(1676)].else, m[e(332)] = x[e(332)] + e(1047), m[e(1481)] = x.errSchemaPath + e(2684), s += "  " + x[e(312)](m) + " ", m[e(2681)] = C, s += " " + b + " = " + v + "; ", F && A ? (E = e(826) + n, s += e(512) + E + " = 'else'; ") : E = e(2849), s += e(791)), s += e(2745) + b + e(526), x[e(1566)] !== !1 ? (s += " { keyword: 'if" + e(311) + x[e(372)] + e(662) + x[e(2365)][e(1806)](d) + e(617) + E + " } ", x[e(930)][e(635)] !== !1 && (s += e(1080) + E + ` + '" schema' `), x[e(930)][e(2840)] && (s += e(396) + u + e(2874) + x[e(332)] + e(300) + f + " "), s += " } ") : s += e(1968), s += e(1771), !x[e(634)] && l && (x[e(2780)] ? s += e(943) : s += e(414)), s += e(601), l && (s += e(1626));
    } else l && (s += e(348));
    return s;
  }), gt;
}
var yt, Cr;
function m2() {
  return Cr || (Cr = 1, yt = function(x, t, r) {
    const e = K;
    var s = " ", n = x[e(2712)], o = x.dataLevel, c = x[e(1676)][t], u = x.schemaPath + x[e(2365)][e(2562)](t), d = x[e(1481)] + "/" + t, l = !x[e(930)].allErrors, f = e(782) + (o || ""), b = e(1268) + n, h = e(2907) + n, m = x.util[e(2588)](x), v = "";
    m[e(2712)]++;
    var k = e(1268) + m[e(2712)], P = "i" + n, F = m[e(712)] = x[e(712)] + 1, A = e(782) + F, C = x.baseId;
    if (s += "var " + h + e(2387) + b + ";", Array[e(1683)](c)) {
      var E = x[e(1676)][e(1731)];
      if (E === !1) {
        s += " " + b + " = " + f + e(1803) + c[e(1667)] + "; ";
        var R = d;
        d = x[e(1481)] + e(255), s += "  if (!" + b + e(630);
        var O = O || [];
        O.push(s), s = "", x.createErrors !== !1 ? (s += " { keyword: '" + e(1731) + e(311) + x[e(372)] + e(662) + x[e(2365)][e(1806)](d) + e(2439) + c[e(1667)] + e(791), x[e(930)][e(635)] !== !1 && (s += " , message: 'should NOT have more than " + c[e(1667)] + " items' "), x[e(930)].verbose && (s += " , schema: false , parentSchema: validate.schema" + x[e(332)] + e(300) + f + " "), s += e(791)) : s += e(1968);
        var D = s;
        s = O[e(940)](), !x[e(634)] && l ? x[e(2780)] ? s += e(1073) + D + e(392) : s += " validate.errors = [" + D + e(580) : s += e(1781) + D + ";  if (vErrors === null) vErrors = [err]; else vErrors.push(err); errors++; ", s += " } ", d = R, l && (v += "}", s += e(1626));
      }
      var j = c;
      if (j) {
        for (var q, N = -1, z = j[e(1667)] - 1; N < z; )
          if (q = j[N += 1], x[e(930)][e(2268)] ? typeof q == e(2613) && Object[e(1400)](q)[e(1667)] > 0 || q === !1 : x[e(2365)][e(2940)](q, x[e(2420)].all)) {
            s += " " + k + e(2098) + f + ".length > " + N + e(1050);
            var L = f + "[" + N + "]";
            m[e(1676)] = q, m[e(332)] = u + "[" + N + "]", m[e(1481)] = d + "/" + N, m[e(372)] = x[e(2365)][e(1949)](x[e(372)], N, x[e(930)][e(1882)], !0), m[e(1413)][F] = N;
            var U = x.validate(m);
            m[e(2681)] = C, x[e(2365)].varOccurences(U, A) < 2 ? s += " " + x[e(2365)][e(1149)](U, A, L) + " " : s += e(512) + A + e(1992) + L + "; " + U + " ", s += " }  ", l && (s += " if (" + k + e(1050), v += "}");
          }
      }
      if (typeof E == e(2613) && (x[e(930)][e(2268)] ? typeof E == e(2613) && Object[e(1400)](E)[e(1667)] > 0 || E === !1 : x[e(2365)][e(2940)](E, x[e(2420)][e(1849)]))) {
        m.schema = E, m[e(332)] = x[e(332)] + e(1486), m[e(1481)] = x[e(1481)] + e(255), s += " " + k + e(2098) + f + e(1305) + c[e(1667)] + ") {  for (var " + P + " = " + c[e(1667)] + "; " + P + e(1877) + f + ".length; " + P + "++) { ", m[e(372)] = x[e(2365)][e(1949)](x.errorPath, P, x[e(930)][e(1882)], !0);
        var L = f + "[" + P + "]";
        m[e(1413)][F] = P;
        var U = x[e(312)](m);
        m.baseId = C, x[e(2365)][e(439)](U, A) < 2 ? s += " " + x[e(2365)][e(1149)](U, A, L) + " " : s += " var " + A + e(1992) + L + "; " + U + " ", l && (s += e(2745) + k + e(977)), s += e(1414), l && (s += e(2471) + k + e(1050), v += "}");
      }
    } else if (x[e(930)][e(2268)] ? typeof c == "object" && Object[e(1400)](c)[e(1667)] > 0 || c === !1 : x.util[e(2940)](c, x[e(2420)][e(1849)])) {
      m[e(1676)] = c, m[e(332)] = u, m[e(1481)] = d, s += e(2222) + P + e(1992) + 0 + "; " + P + e(1877) + f + e(2282) + P + e(571), m.errorPath = x[e(2365)][e(1949)](x[e(372)], P, x[e(930)][e(1882)], !0);
      var L = f + "[" + P + "]";
      m[e(1413)][F] = P;
      var U = x.validate(m);
      m[e(2681)] = C, x[e(2365)].varOccurences(U, A) < 2 ? s += " " + x[e(2365)][e(1149)](U, A, L) + " " : s += e(512) + A + e(1992) + L + "; " + U + " ", l && (s += e(2745) + k + ") break; "), s += " }";
    }
    return l && (s += " " + v + e(2471) + h + e(1366)), s;
  }), yt;
}
var vt, Fr;
function Nr() {
  return Fr || (Fr = 1, vt = function(x, t, r) {
    const e = K;
    var s = " ", n = x[e(2712)], o = x[e(712)], c = x.schema[t], u = x[e(332)] + x[e(2365)].getProperty(t), d = x[e(1481)] + "/" + t, l = !x[e(930)][e(1115)], C, f = e(782) + (o || ""), b = x[e(930)][e(958)] && c && c.$data, h;
    b ? (s += e(2641) + n + e(1992) + x[e(2365)][e(1588)](c[e(958)], o, x[e(1413)]) + "; ", h = e(1676) + n) : h = c;
    var m = t == e(1887), v = e(m ? 638 : 2675), k = x.schema[v], P = x[e(930)][e(958)] && k && k[e(958)], F = m ? "<" : ">", A = m ? ">" : "<", C = void 0;
    if (!(b || typeof c == e(329) || c === void 0)) throw new Error(t + e(783));
    if (!(P || k === void 0 || typeof k == e(329) || typeof k == e(1459))) throw new Error(v + " must be number or boolean");
    if (P) {
      var E = x.util[e(1588)](k[e(958)], o, x.dataPathArr), R = e(2752) + n, O = e(868) + n, D = e(2927) + n, j = "op" + n, q = e(2270) + j + " + '";
      s += e(2259) + n + " = " + E + "; ", E = e(626) + n, s += e(512) + R + e(2954) + O + e(1574) + E + "; if (" + O + e(2817) + O + e(2202) + O + e(2518);
      var C = v, N = N || [];
      N[e(528)](s), s = "", x[e(1566)] !== !1 ? (s += e(658) + (C || e(683)) + e(311) + x[e(372)] + e(662) + x[e(2365)].toQuotedString(d) + e(726), x[e(930)][e(635)] !== !1 && (s += e(589) + v + e(2606)), x[e(930)][e(2840)] && (s += e(396) + u + e(2874) + x[e(332)] + e(300) + f + " "), s += e(791)) : s += e(1968);
      var z = s;
      s = N[e(940)](), !x.compositeRule && l ? x[e(2780)] ? s += " throw new ValidationError([" + z + "]); " : s += e(2338) + z + e(580) : s += e(1781) + z + ";  if (vErrors === null) vErrors = [err]; else vErrors.push(err); errors++; ", s += " } else if ( ", b && (s += " (" + h + e(1739) + h + e(730)), s += " " + O + " == 'number' ? ( (" + R + e(1992) + h + e(538) + E + " " + F + "= " + h + e(2700) + f + " " + A + "= " + E + " : " + f + " " + A + " " + h + e(1075) + R + e(1992) + E + e(2498) + f + " " + A + "= " + h + e(2941) + f + " " + A + " " + h + " ) || " + f + e(1697) + f + e(362) + n + e(1992) + R + e(507) + F + e(357) + F + e(666), c === void 0 && (C = v, d = x[e(1481)] + "/" + v, h = E, b = P);
    } else {
      var D = typeof k == e(329), q = F;
      if (D && b) {
        var j = "'" + q + "'";
        s += e(954), b && (s += " (" + h + " !== undefined && typeof " + h + " != 'number') || "), s += " ( " + h + e(538) + k + " " + F + "= " + h + e(1742) + f + " " + A + "= " + k + e(2941) + f + " " + A + " " + h + e(614) + f + e(1697) + f + e(1050);
      } else {
        D && c === void 0 ? (R = !0, C = v, d = x[e(1481)] + "/" + v, h = k, A += "=") : (D && (h = Math[e(m ? 1807 : 1663)](k, c)), k === (D ? h : !0) ? (R = !0, C = v, d = x[e(1481)] + "/" + v, A += "=") : (R = !1, q += "="));
        var j = "'" + q + "'";
        s += e(954), b && (s += " (" + h + e(1739) + h + e(730)), s += " " + f + " " + A + " " + h + e(2813) + f + " !== " + f + e(1050);
      }
    }
    C = C || t;
    var N = N || [];
    N.push(s), s = "", x.createErrors !== !1 ? (s += e(658) + (C || e(1713)) + e(311) + x[e(372)] + e(662) + x.util[e(1806)](d) + e(2616) + j + e(261) + h + e(2343) + R + e(791), x[e(930)].messages !== !1 && (s += e(1796) + q + " ", b ? s += e(2270) + h : s += "" + h + "'"), x[e(930)][e(2840)] && (s += e(1148), b ? s += "validate.schema" + u : s += "" + c, s += "         , parentSchema: validate.schema" + x[e(332)] + e(300) + f + " "), s += e(791)) : s += e(1968);
    var z = s;
    return s = N[e(940)](), !x.compositeRule && l ? x[e(2780)] ? s += " throw new ValidationError([" + z + e(392) : s += e(2338) + z + e(580) : s += e(1781) + z + e(1771), s += e(791), l && (s += e(1626)), s;
  }), vt;
}
var wt, qr;
function Tr() {
  return qr || (qr = 1, wt = function(x, t, r) {
    const e = K;
    var s = " ", n = x.level, o = x[e(712)], c = x[e(1676)][t], u = x[e(332)] + x[e(2365)][e(2562)](t), d = x[e(1481)] + "/" + t, l = !x[e(930)][e(1115)], v, f = "data" + (o || ""), b = x.opts.$data && c && c[e(958)], h;
    if (b ? (s += e(2641) + n + e(1992) + x.util[e(1588)](c[e(958)], o, x[e(1413)]) + "; ", h = e(1676) + n) : h = c, !(b || typeof c == e(329))) throw new Error(t + e(783));
    var m = t == e(1440) ? ">" : "<";
    s += e(380), b && (s += " (" + h + " !== undefined && typeof " + h + e(730)), s += " " + f + e(567) + m + " " + h + e(1050);
    var v = t, k = k || [];
    k.push(s), s = "", x[e(1566)] !== !1 ? (s += e(658) + (v || e(731)) + e(311) + x[e(372)] + e(662) + x[e(2365)].toQuotedString(d) + " , params: { limit: " + h + " } ", x[e(930)].messages !== !1 && (s += " , message: 'should NOT have ", t == e(1440) ? s += e(1131) : s += e(1505), s += e(809), b ? s += "' + " + h + e(768) : s += "" + c, s += e(2705)), x[e(930)][e(2840)] && (s += e(1148), b ? s += e(1430) + u : s += "" + c, s += e(1657) + x[e(332)] + " , data: " + f + " "), s += e(791)) : s += e(1968);
    var P = s;
    return s = k.pop(), !x.compositeRule && l ? x[e(2780)] ? s += e(1073) + P + e(392) : s += e(2338) + P + e(580) : s += e(1781) + P + e(1771), s += "} ", l && (s += e(1626)), s;
  }), wt;
}
var St, Ar;
function _r() {
  return Ar || (Ar = 1, St = function(x, t, r) {
    const e = K;
    var s = " ", n = x[e(2712)], o = x[e(712)], c = x[e(1676)][t], u = x[e(332)] + x[e(2365)][e(2562)](t), d = x[e(1481)] + "/" + t, l = !x[e(930)][e(1115)], v, f = e(782) + (o || ""), b = x[e(930)][e(958)] && c && c[e(958)], h;
    if (b ? (s += " var schema" + n + e(1992) + x[e(2365)].getData(c[e(958)], o, x.dataPathArr) + "; ", h = "schema" + n) : h = c, !(b || typeof c == "number")) throw new Error(t + e(783));
    var m = t == e(2540) ? ">" : "<";
    s += "if ( ", b && (s += " (" + h + " !== undefined && typeof " + h + " != 'number') || "), x[e(930)][e(1240)] === !1 ? s += " " + f + ".length " : s += " ucs2length(" + f + ") ", s += " " + m + " " + h + e(1050);
    var v = t, k = k || [];
    k.push(s), s = "", x.createErrors !== !1 ? (s += e(658) + (v || e(2708)) + "' , dataPath: (dataPath || '') + " + x[e(372)] + e(662) + x.util[e(1806)](d) + " , params: { limit: " + h + e(791), x[e(930)][e(635)] !== !1 && (s += e(1749), t == e(2540) ? s += "longer" : s += e(253), s += " than ", b ? s += "' + " + h + e(768) : s += "" + c, s += e(1237)), x[e(930)][e(2840)] && (s += e(1148), b ? s += e(1430) + u : s += "" + c, s += e(1657) + x[e(332)] + e(300) + f + " "), s += e(791)) : s += e(1968);
    var P = s;
    return s = k[e(940)](), !x[e(634)] && l ? x[e(2780)] ? s += " throw new ValidationError([" + P + e(392) : s += " validate.errors = [" + P + "]; return false; " : s += e(1781) + P + e(1771), s += "} ", l && (s += " else { "), s;
  }), St;
}
var kt, Or;
function Dr() {
  return Or || (Or = 1, kt = function(x, t, r) {
    const e = K;
    var s = " ", n = x[e(2712)], o = x[e(712)], c = x.schema[t], u = x[e(332)] + x.util[e(2562)](t), d = x.errSchemaPath + "/" + t, l = !x[e(930)][e(1115)], v, f = e(782) + (o || ""), b = x[e(930)][e(958)] && c && c[e(958)], h;
    if (b ? (s += " var schema" + n + e(1992) + x.util[e(1588)](c[e(958)], o, x.dataPathArr) + "; ", h = "schema" + n) : h = c, !(b || typeof c == e(329))) throw new Error(t + e(783));
    var m = t == "maxProperties" ? ">" : "<";
    s += e(380), b && (s += " (" + h + e(1739) + h + e(730)), s += e(2418) + f + e(2808) + m + " " + h + ") { ";
    var v = t, k = k || [];
    k[e(528)](s), s = "", x[e(1566)] !== !1 ? (s += e(658) + (v || e(590)) + e(311) + x[e(372)] + " , schemaPath: " + x[e(2365)][e(1806)](d) + e(2439) + h + e(791), x.opts.messages !== !1 && (s += e(1711), t == e(837) ? s += e(1131) : s += e(1505), s += e(809), b ? s += e(2270) + h + e(768) : s += "" + c, s += " properties' "), x.opts[e(2840)] && (s += " , schema:  ", b ? s += "validate.schema" + u : s += "" + c, s += e(1657) + x[e(332)] + " , data: " + f + " "), s += e(791)) : s += e(1968);
    var P = s;
    return s = k[e(940)](), !x.compositeRule && l ? x[e(2780)] ? s += e(1073) + P + e(392) : s += e(2338) + P + e(580) : s += " var err = " + P + e(1771), s += "} ", l && (s += " else { "), s;
  }), kt;
}
var Pt, jr;
function b2() {
  return jr || (jr = 1, Pt = function(x, t, r) {
    const e = K;
    var s = " ", n = x[e(2712)], o = x.dataLevel, c = x[e(1676)][t], u = x[e(332)] + x[e(2365)][e(2562)](t), d = x[e(1481)] + "/" + t, l = !x[e(930)][e(1115)], f = e(782) + (o || ""), b = x[e(930)].$data && c && c[e(958)], h;
    if (b ? (s += e(2641) + n + " = " + x[e(2365)][e(1588)](c[e(958)], o, x.dataPathArr) + "; ", h = "schema" + n) : h = c, !(b || typeof c == e(329))) throw new Error(t + e(783));
    s += "var division" + n + e(1286), b && (s += " " + h + " !== undefined && ( typeof " + h + e(2337)), s += e(2842) + n + e(1992) + f + e(2509) + h + ", ", x.opts[e(1454)] ? s += e(2472) + n + e(1482) + n + ") > 1e-" + x[e(930)][e(1454)] + " " : s += " division" + n + e(1190) + n + ") ", s += " ) ", b && (s += "  )  "), s += " ) {   ";
    var m = m || [];
    m[e(528)](s), s = "", x[e(1566)] !== !1 ? (s += e(658) + e(1847) + e(311) + x[e(372)] + e(662) + x[e(2365)][e(1806)](d) + e(2467) + h + e(791), x[e(930)][e(635)] !== !1 && (s += e(2639), b ? s += "' + " + h : s += "" + h + "'"), x[e(930)][e(2840)] && (s += e(1148), b ? s += e(1430) + u : s += "" + c, s += e(1657) + x.schemaPath + " , data: " + f + " "), s += e(791)) : s += e(1968);
    var v = s;
    return s = m[e(940)](), !x[e(634)] && l ? x[e(2780)] ? s += e(1073) + v + e(392) : s += e(2338) + v + e(580) : s += e(1781) + v + e(1771), s += "} ", l && (s += e(1626)), s;
  }), Pt;
}
var It, Mr;
function g2() {
  return Mr || (Mr = 1, It = function(x, t, r) {
    const e = K;
    var s = " ", n = x[e(2712)], o = x[e(712)], c = x[e(1676)][t], u = x.schemaPath + x[e(2365)].getProperty(t), d = x[e(1481)] + "/" + t, l = !x.opts[e(1115)], f = e(782) + (o || ""), b = e(2907) + n, h = x[e(2365)].copy(x);
    h[e(2712)]++;
    var m = "valid" + h.level;
    if (x[e(930)][e(2268)] ? typeof c == e(2613) && Object[e(1400)](c)[e(1667)] > 0 || c === !1 : x[e(2365)].schemaHasRules(c, x[e(2420)].all)) {
      h.schema = c, h.schemaPath = u, h.errSchemaPath = d, s += e(512) + b + e(2413);
      var v = x[e(634)];
      x[e(634)] = h[e(634)] = !0, h[e(1566)] = !1;
      var k;
      h.opts.allErrors && (k = h[e(930)][e(1115)], h[e(930)].allErrors = !1), s += " " + x.validate(h) + " ", h[e(1566)] = !0, k && (h.opts.allErrors = k), x.compositeRule = h[e(634)] = v, s += " if (" + m + e(630);
      var P = P || [];
      P[e(528)](s), s = "", x[e(1566)] !== !1 ? (s += e(658) + "not" + e(311) + x.errorPath + " , schemaPath: " + x[e(2365)].toQuotedString(d) + e(726), x.opts[e(635)] !== !1 && (s += e(2887)), x.opts[e(2840)] && (s += e(396) + u + e(2874) + x[e(332)] + " , data: " + f + " "), s += e(791)) : s += e(1968);
      var F = s;
      s = P[e(940)](), !x.compositeRule && l ? x.async ? s += e(1073) + F + e(392) : s += " validate.errors = [" + F + e(580) : s += e(1781) + F + e(1771), s += e(426) + b + e(2499) + b + ") vErrors.length = " + b + "; else vErrors = null; } ", x[e(930)][e(1115)] && (s += e(791));
    } else s += "  var err =   ", x.createErrors !== !1 ? (s += e(658) + e(389) + "' , dataPath: (dataPath || '') + " + x[e(372)] + e(662) + x.util[e(1806)](d) + e(726), x.opts[e(635)] !== !1 && (s += e(2887)), x[e(930)][e(2840)] && (s += e(396) + u + e(2874) + x[e(332)] + e(300) + f + " "), s += e(791)) : s += " {} ", s += e(1771), l && (s += e(653));
    return s;
  }), It;
}
var Et, Lr;
function y2() {
  return Lr || (Lr = 1, Et = function(x, t, r) {
    const e = K;
    var s = " ", n = x[e(2712)], o = x[e(712)], c = x.schema[t], u = x[e(332)] + x.util[e(2562)](t), d = x.errSchemaPath + "/" + t, l = !x[e(930)][e(1115)], f = e(782) + (o || ""), b = "valid" + n, h = "errs__" + n, m = x.util.copy(x), v = "";
    m.level++;
    var k = e(1268) + m[e(2712)], P = m[e(2681)], F = e(2496) + n, A = e(2791) + n;
    s += e(1054) + h + e(283) + F + e(2604) + b + e(2604) + A + e(1522);
    var C = x.compositeRule;
    x[e(634)] = m.compositeRule = !0;
    var E = c;
    if (E)
      for (var R, O = -1, D = E[e(1667)] - 1; O < D; )
        R = E[O += 1], (x.opts.strictKeywords ? typeof R == "object" && Object[e(1400)](R)[e(1667)] > 0 || R === !1 : x[e(2365)].schemaHasRules(R, x[e(2420)][e(1849)])) ? (m.schema = R, m.schemaPath = u + "[" + O + "]", m[e(1481)] = d + "/" + O, s += "  " + x.validate(m) + " ", m[e(2681)] = P) : s += e(512) + k + " = true; ", O && (s += e(2471) + k + e(1215) + F + e(1050) + b + " = false; " + A + e(1736) + A + ", " + O + e(906), v += "}"), s += " if (" + k + ") { " + b + e(1992) + F + " = true; " + A + e(1992) + O + "; }";
    return x[e(634)] = m.compositeRule = C, s += "" + v + e(2460) + b + e(526), x[e(1566)] !== !1 ? (s += e(658) + e(1516) + e(311) + x.errorPath + " , schemaPath: " + x.util.toQuotedString(d) + " , params: { passingSchemas: " + A + e(791), x[e(930)][e(635)] !== !1 && (s += e(2417)), x[e(930)][e(2840)] && (s += " , schema: validate.schema" + u + e(2874) + x[e(332)] + e(300) + f + " "), s += e(791)) : s += e(1968), s += e(1771), !x[e(634)] && l && (x.async ? s += e(943) : s += " validate.errors = vErrors; return false; "), s += e(1107) + h + "; if (vErrors !== null) { if (" + h + e(1639) + h + e(1915), x[e(930)][e(1115)] && (s += e(791)), s;
  }), Et;
}
var Rt, $r;
function v2() {
  return $r || ($r = 1, Rt = function(x, t, r) {
    const e = K;
    var s = " ", n = x[e(2712)], o = x[e(712)], c = x[e(1676)][t], u = x.schemaPath + x[e(2365)][e(2562)](t), d = x[e(1481)] + "/" + t, l = !x[e(930)][e(1115)], f = e(782) + (o || ""), b = x.opts[e(958)] && c && c.$data, h;
    b ? (s += " var schema" + n + e(1992) + x.util.getData(c.$data, o, x[e(1413)]) + "; ", h = e(1676) + n) : h = c;
    var m = b ? "(new RegExp(" + h + "))" : x.usePattern(c);
    s += e(380), b && (s += " (" + h + e(1739) + h + " != 'string') || "), s += " !" + m + ".test(" + f + e(2283);
    var v = v || [];
    v.push(s), s = "", x[e(1566)] !== !1 ? (s += e(658) + e(2749) + e(311) + x[e(372)] + " , schemaPath: " + x[e(2365)][e(1806)](d) + " , params: { pattern:  ", b ? s += "" + h : s += "" + x[e(2365)].toQuotedString(c), s += e(291), x.opts[e(635)] !== !1 && (s += e(1488), b ? s += "' + " + h + e(768) : s += "" + x.util[e(397)](c), s += e(1133)), x[e(930)][e(2840)] && (s += e(1148), b ? s += e(1430) + u : s += "" + x[e(2365)][e(1806)](c), s += e(1657) + x[e(332)] + " , data: " + f + " "), s += e(791)) : s += e(1968);
    var k = s;
    return s = v[e(940)](), !x[e(634)] && l ? x[e(2780)] ? s += e(1073) + k + e(392) : s += e(2338) + k + e(580) : s += " var err = " + k + e(1771), s += "} ", l && (s += e(1626)), s;
  }), Rt;
}
var Ct, Hr;
function w2() {
  return Hr || (Hr = 1, Ct = function(x, t, r) {
    const e = K;
    var s = " ", n = x[e(2712)], o = x[e(712)], c = x[e(1676)][t], u = x.schemaPath + x[e(2365)][e(2562)](t), d = x[e(1481)] + "/" + t, l = !x[e(930)][e(1115)], f = e(782) + (o || ""), b = e(2907) + n, h = x.util[e(2588)](x), m = "";
    h.level++;
    var v = e(1268) + h[e(2712)], k = "key" + n, P = "idx" + n, F = h[e(712)] = x.dataLevel + 1, A = e(782) + F, C = e(674) + n, E = Object[e(1400)](c || {}).filter(l0), R = x[e(1676)][e(2923)] || {}, O = Object[e(1400)](R)[e(2534)](l0), D = x[e(1676)][e(1015)], j = E[e(1667)] || O[e(1667)], q = D === !1, N = typeof D == e(2613) && Object[e(1400)](D)[e(1667)], z = x[e(930)][e(2918)], L = q || N || z, U = x[e(930)].ownProperties, G = x[e(2681)], c0 = x[e(1676)].required;
    if (c0 && !(x[e(930)].$data && c0[e(958)]) && c0[e(1667)] < x[e(930)][e(852)]) var u0 = x[e(2365)].toHash(c0);
    function l0(Mx) {
      return Mx !== e(1940);
    }
    if (s += "var " + b + e(2387) + v + e(2888), U && (s += e(512) + C + e(2187)), L) {
      if (U ? s += " " + C + " = " + C + " || Object.keys(" + f + e(2362) + P + e(313) + P + "<" + C + ".length; " + P + e(2785) + k + e(1992) + C + "[" + P + e(1504) : s += e(560) + k + e(1006) + f + e(1050), j) {
        if (s += " var isAdditional" + n + e(2593), E[e(1667)])
          if (E.length > 8) s += e(2135) + u + e(1492) + k + ") ";
          else {
            var o0 = E;
            if (o0)
              for (var f0, k0 = -1, y0 = o0[e(1667)] - 1; k0 < y0; )
                f0 = o0[k0 += 1], s += " || " + k + " == " + x.util[e(1806)](f0) + " ";
          }
        if (O.length) {
          var M0 = O;
          if (M0)
            for (var F0, J0 = -1, _ = M0.length - 1; J0 < _; )
              F0 = M0[J0 += 1], s += e(2813) + x[e(696)](F0) + e(445) + k + ") ";
        }
        s += e(999) + n + ") { ";
      }
      if (z == "all") s += e(1953) + f + "[" + k + e(1504);
      else {
        var T = x[e(372)], H = e(2270) + k + e(768);
        if (x.opts[e(1108)] && (x[e(372)] = x[e(2365)][e(1949)](x[e(372)], k, x[e(930)][e(1882)])), q)
          if (z) s += e(1953) + f + "[" + k + "]; ";
          else {
            s += " " + v + e(1445);
            var J = d;
            d = x.errSchemaPath + e(2837);
            var Y = Y || [];
            Y[e(528)](s), s = "", x[e(1566)] !== !1 ? (s += e(658) + e(1015) + e(311) + x[e(372)] + " , schemaPath: " + x.util[e(1806)](d) + e(1710) + H + "' } ", x[e(930)][e(635)] !== !1 && (s += e(589), x[e(930)]._errorDataPathProperty ? s += e(1138) : s += e(2239), s += "' "), x.opts[e(2840)] && (s += e(1607) + x[e(332)] + " , data: " + f + " "), s += e(791)) : s += e(1968);
            var V = s;
            s = Y[e(940)](), !x[e(634)] && l ? x[e(2780)] ? s += e(1073) + V + e(392) : s += e(2338) + V + "]; return false; " : s += e(1781) + V + ";  if (vErrors === null) vErrors = [err]; else vErrors.push(err); errors++; ", d = J, l && (s += " break; ");
          }
        else if (N)
          if (z == e(2801)) {
            s += " var " + b + e(2413);
            var Q = x[e(634)];
            x[e(634)] = h[e(634)] = !0, h[e(1676)] = D, h[e(332)] = x.schemaPath + e(2828), h[e(1481)] = x[e(1481)] + e(2837), h[e(372)] = x[e(930)][e(1108)] ? x[e(372)] : x[e(2365)].getPathExpr(x[e(372)], k, x[e(930)][e(1882)]);
            var n0 = f + "[" + k + "]";
            h[e(1413)][F] = k;
            var i0 = x.validate(h);
            h[e(2681)] = G, x[e(2365)][e(439)](i0, A) < 2 ? s += " " + x.util[e(1149)](i0, A, n0) + " " : s += e(512) + A + " = " + n0 + "; " + i0 + " ", s += " if (!" + v + e(1348) + b + "; if (validate.errors !== null) { if (errors) validate.errors.length = errors; else validate.errors = null; } delete " + f + "[" + k + "]; }  ", x.compositeRule = h[e(634)] = Q;
          } else {
            h.schema = D, h.schemaPath = x.schemaPath + e(2828), h[e(1481)] = x[e(1481)] + "/additionalProperties", h[e(372)] = x.opts[e(1108)] ? x[e(372)] : x.util.getPathExpr(x[e(372)], k, x[e(930)][e(1882)]);
            var n0 = f + "[" + k + "]";
            h[e(1413)][F] = k;
            var i0 = x[e(312)](h);
            h[e(2681)] = G, x[e(2365)][e(439)](i0, A) < 2 ? s += " " + x.util[e(1149)](i0, A, n0) + " " : s += e(512) + A + e(1992) + n0 + "; " + i0 + " ", l && (s += " if (!" + v + e(977));
          }
        x[e(372)] = T;
      }
      j && (s += e(791)), s += e(2143), l && (s += e(2471) + v + e(1050), m += "}");
    }
    var x0 = x[e(930)][e(2177)] && !x.compositeRule;
    if (E[e(1667)]) {
      var L0 = E;
      if (L0)
        for (var f0, A0 = -1, z0 = L0[e(1667)] - 1; A0 < z0; ) {
          f0 = L0[A0 += 1];
          var S0 = c[f0];
          if (x[e(930)][e(2268)] ? typeof S0 == e(2613) && Object[e(1400)](S0)[e(1667)] > 0 || S0 === !1 : x[e(2365)].schemaHasRules(S0, x.RULES[e(1849)])) {
            var G0 = x[e(2365)][e(2562)](f0), n0 = f + G0, ne = x0 && S0[e(2475)] !== void 0;
            h.schema = S0, h[e(332)] = u + G0, h[e(1481)] = d + "/" + x[e(2365)][e(1888)](f0), h.errorPath = x[e(2365)].getPath(x[e(372)], f0, x[e(930)][e(1882)]), h[e(1413)][F] = x.util[e(1806)](f0);
            var i0 = x[e(312)](h);
            if (h[e(2681)] = G, x.util[e(439)](i0, A) < 2) {
              i0 = x[e(2365)].varReplace(i0, A, n0);
              var Q0 = n0;
            } else {
              var Q0 = A;
              s += e(512) + A + " = " + n0 + "; ";
            }
            if (ne) s += " " + i0 + " ";
            else {
              if (u0 && u0[f0]) {
                s += e(954) + Q0 + e(2514), U && (s += e(544) + f + ", '" + x[e(2365)][e(397)](f0) + "') "), s += e(1050) + v + e(1445);
                var T = x[e(372)], J = d, _0 = x[e(2365)].escapeQuotes(f0);
                x[e(930)]._errorDataPathProperty && (x[e(372)] = x[e(2365)][e(2558)](T, f0, x[e(930)][e(1882)])), d = x[e(1481)] + "/required";
                var Y = Y || [];
                Y.push(s), s = "", x[e(1566)] !== !1 ? (s += e(658) + e(2477) + "' , dataPath: (dataPath || '') + " + x[e(372)] + e(662) + x[e(2365)][e(1806)](d) + e(2670) + _0 + e(1438), x[e(930)][e(635)] !== !1 && (s += e(589), x[e(930)][e(1108)] ? s += e(1389) : s += e(2258) + _0 + "\\'", s += "' "), x.opts.verbose && (s += e(396) + u + e(2874) + x.schemaPath + e(300) + f + " "), s += e(791)) : s += e(1968);
                var V = s;
                s = Y[e(940)](), !x[e(634)] && l ? x[e(2780)] ? s += e(1073) + V + e(392) : s += " validate.errors = [" + V + e(580) : s += e(1781) + V + e(1771), d = J, x[e(372)] = T, s += e(709);
              } else l ? (s += e(954) + Q0 + e(2514), U && (s += e(544) + f + e(1363) + x[e(2365)][e(397)](f0) + e(725)), s += e(1050) + v + e(1475)) : (s += e(2471) + Q0 + e(2914), U && (s += " &&   Object.prototype.hasOwnProperty.call(" + f + ", '" + x[e(2365)][e(397)](f0) + e(725)), s += e(892));
              s += " " + i0 + e(791);
            }
          }
          l && (s += " if (" + v + e(1050), m += "}");
        }
    }
    if (O[e(1667)]) {
      var U0 = O;
      if (U0)
        for (var F0, Y0 = -1, qe = U0[e(1667)] - 1; Y0 < qe; ) {
          F0 = U0[Y0 += 1];
          var S0 = R[F0];
          if (x[e(930)][e(2268)] ? typeof S0 == e(2613) && Object.keys(S0)[e(1667)] > 0 || S0 === !1 : x[e(2365)][e(2940)](S0, x[e(2420)][e(1849)])) {
            h[e(1676)] = S0, h[e(332)] = x.schemaPath + e(1641) + x[e(2365)][e(2562)](F0), h.errSchemaPath = x[e(1481)] + e(360) + x[e(2365)][e(1888)](F0), U ? s += " " + C + e(1992) + C + e(846) + f + e(2362) + P + e(313) + P + "<" + C + e(2282) + P + e(2785) + k + e(1992) + C + "[" + P + e(1504) : s += " for (var " + k + e(1006) + f + e(1050), s += e(2471) + x[e(696)](F0) + ".test(" + k + e(1768), h.errorPath = x[e(2365)][e(1949)](x[e(372)], k, x.opts.jsonPointers);
            var n0 = f + "[" + k + "]";
            h.dataPathArr[F] = k;
            var i0 = x[e(312)](h);
            h.baseId = G, x[e(2365)][e(439)](i0, A) < 2 ? s += " " + x[e(2365)][e(1149)](i0, A, n0) + " " : s += e(512) + A + e(1992) + n0 + "; " + i0 + " ", l && (s += e(2745) + v + e(977)), s += e(791), l && (s += e(2032) + v + e(2939)), s += e(2143), l && (s += e(2471) + v + e(1050), m += "}");
          }
        }
    }
    return l && (s += " " + m + e(2471) + b + e(1366)), s;
  }), Ct;
}
var Ft, zr;
function S2() {
  return zr || (zr = 1, Ft = function(x, t, r) {
    const e = K;
    var s = " ", n = x[e(2712)], o = x[e(712)], c = x.schema[t], u = x[e(332)] + x[e(2365)][e(2562)](t), d = x.errSchemaPath + "/" + t, l = !x.opts[e(1115)], f = e(782) + (o || ""), b = "errs__" + n, h = x[e(2365)][e(2588)](x), m = "";
    h[e(2712)]++;
    var v = e(1268) + h[e(2712)];
    if (s += "var " + b + e(2931), x.opts.strictKeywords ? typeof c == e(2613) && Object.keys(c)[e(1667)] > 0 || c === !1 : x[e(2365)].schemaHasRules(c, x[e(2420)][e(1849)])) {
      h[e(1676)] = c, h[e(332)] = u, h[e(1481)] = d;
      var k = e(2182) + n, P = "idx" + n, F = "i" + n, A = e(2270) + k + e(768), C = h.dataLevel = x[e(712)] + 1, E = e(782) + C, R = e(674) + n, O = x[e(930)].ownProperties, D = x[e(2681)];
      O && (s += e(512) + R + e(2117)), O ? s += " " + R + e(1992) + R + e(846) + f + e(2362) + P + "=0; " + P + "<" + R + ".length; " + P + e(2785) + k + e(1992) + R + "[" + P + e(1504) : s += e(560) + k + e(1006) + f + e(1050), s += e(1846) + n + e(482);
      var j = k, q = x.compositeRule;
      x[e(634)] = h[e(634)] = !0;
      var N = x.validate(h);
      h[e(2681)] = D, x[e(2365)][e(439)](N, E) < 2 ? s += " " + x[e(2365)][e(1149)](N, E, j) + " " : s += e(512) + E + e(1992) + j + "; " + N + " ", x[e(634)] = h[e(634)] = q, s += e(2745) + v + e(2363) + F + e(803) + n + "; " + F + e(1293) + F + e(1e3) + F + "].propertyName = " + k + e(2495), x.createErrors !== !1 ? (s += e(658) + e(2219) + e(311) + x.errorPath + e(662) + x[e(2365)].toQuotedString(d) + e(707) + A + e(1438), x.opts.messages !== !1 && (s += e(1392) + A + e(2484)), x[e(930)][e(2840)] && (s += e(396) + u + e(2874) + x[e(332)] + e(300) + f + " "), s += " } ") : s += " {} ", s += e(1771), !x[e(634)] && l && (x[e(2780)] ? s += e(943) : s += e(414)), l && (s += e(961)), s += " } }";
    }
    return l && (s += " " + m + e(2471) + b + " == errors) {"), s;
  }), Ft;
}
var Nt, Ur;
function k2() {
  return Ur || (Ur = 1, Nt = function(x, t, r) {
    const e = K;
    var s = " ", n = x[e(2712)], o = x[e(712)], c = x[e(1676)][t], u = x.schemaPath + x[e(2365)][e(2562)](t), d = x.errSchemaPath + "/" + t, l = !x[e(930)][e(1115)], f = e(782) + (o || ""), b = e(1268) + n, h = x[e(930)][e(958)] && c && c[e(958)];
    h && (s += e(2641) + n + e(1992) + x[e(2365)][e(1588)](c[e(958)], o, x.dataPathArr) + "; ");
    var m = e(1676) + n;
    if (!h)
      if (c.length < x[e(930)][e(852)] && x[e(1676)][e(1367)] && Object[e(1400)](x[e(1676)][e(1367)])[e(1667)]) {
        var C = [], v = c;
        if (v)
          for (var k, P = -1, F = v[e(1667)] - 1; P < F; ) {
            k = v[P += 1];
            var A = x[e(1676)].properties[k];
            !(A && (x[e(930)].strictKeywords ? typeof A == e(2613) && Object[e(1400)](A)[e(1667)] > 0 || A === !1 : x[e(2365)][e(2940)](A, x.RULES[e(1849)]))) && (C[C[e(1667)]] = k);
          }
      } else var C = c;
    if (h || C[e(1667)]) {
      var E = x[e(372)], R = h || C[e(1667)] >= x.opts[e(852)], O = x.opts[e(1292)];
      if (l)
        if (s += e(1612) + n + "; ", R) {
          !h && (s += " var " + m + " = validate.schema" + u + "; ");
          var D = "i" + n, j = e(1676) + n + "[" + D + "]", q = "' + " + j + " + '";
          x.opts[e(1108)] && (x[e(372)] = x[e(2365)][e(1949)](E, j, x[e(930)].jsonPointers)), s += e(512) + b + e(2939), h && (s += " if (schema" + n + e(840) + b + e(1009) + n + e(2897) + b + e(902)), s += e(560) + D + e(2602) + D + " < " + m + ".length; " + D + e(571) + b + e(1992) + f + "[" + m + "[" + D + e(2771), O && (s += e(781) + f + ", " + m + "[" + D + e(2777)), s += e(1867) + b + e(1544), h && (s += "  }  "), s += "  if (!" + b + ") {   ";
          var N = N || [];
          N[e(528)](s), s = "", x[e(1566)] !== !1 ? (s += e(658) + e(2477) + e(311) + x[e(372)] + e(662) + x.util.toQuotedString(d) + e(2670) + q + e(1438), x[e(930)][e(635)] !== !1 && (s += e(589), x[e(930)][e(1108)] ? s += "is a required property" : s += e(2258) + q + "\\'", s += "' "), x[e(930)][e(2840)] && (s += e(396) + u + e(2874) + x[e(332)] + e(300) + f + " "), s += e(791)) : s += e(1968);
          var z = s;
          s = N[e(940)](), !x[e(634)] && l ? x[e(2780)] ? s += e(1073) + z + "]); " : s += e(2338) + z + e(580) : s += " var err = " + z + e(1771), s += e(709);
        } else {
          s += e(954);
          var L = C;
          if (L)
            for (var U, D = -1, G = L[e(1667)] - 1; D < G; ) {
              U = L[D += 1], D && (s += e(2813));
              var c0 = x.util[e(2562)](U), u0 = f + c0;
              s += " ( ( " + u0 + e(2514), O && (s += e(544) + f + e(1363) + x[e(2365)][e(397)](U) + e(725)), s += e(2170) + n + e(1992) + x[e(2365)][e(1806)](x[e(930)].jsonPointers ? U : c0) + e(1769);
            }
          s += e(1738);
          var j = "missing" + n, q = "' + " + j + e(768);
          x[e(930)]._errorDataPathProperty && (x[e(372)] = x[e(930)].jsonPointers ? x[e(2365)][e(1949)](E, j, !0) : E + e(2826) + j);
          var N = N || [];
          N[e(528)](s), s = "", x[e(1566)] !== !1 ? (s += " { keyword: '" + e(2477) + "' , dataPath: (dataPath || '') + " + x[e(372)] + e(662) + x.util[e(1806)](d) + e(2670) + q + "' } ", x[e(930)][e(635)] !== !1 && (s += e(589), x[e(930)][e(1108)] ? s += e(1389) : s += e(2258) + q + "\\'", s += "' "), x[e(930)][e(2840)] && (s += e(396) + u + " , parentSchema: validate.schema" + x[e(332)] + " , data: " + f + " "), s += e(791)) : s += e(1968);
          var z = s;
          s = N[e(940)](), !x[e(634)] && l ? x[e(2780)] ? s += e(1073) + z + e(392) : s += " validate.errors = [" + z + e(580) : s += " var err = " + z + e(1771), s += e(709);
        }
      else if (R) {
        !h && (s += e(512) + m + e(1053) + u + "; ");
        var D = "i" + n, j = e(1676) + n + "[" + D + "]", q = e(2270) + j + e(768);
        x[e(930)][e(1108)] && (x[e(372)] = x.util[e(1949)](E, j, x[e(930)][e(1882)])), h && (s += e(2471) + m + e(1012) + m + e(1901), x[e(1566)] !== !1 ? (s += e(658) + e(2477) + "' , dataPath: (dataPath || '') + " + x[e(372)] + " , schemaPath: " + x[e(2365)][e(1806)](d) + e(2670) + q + e(1438), x[e(930)][e(635)] !== !1 && (s += e(589), x[e(930)][e(1108)] ? s += e(1389) : s += e(2258) + q + "\\'", s += "' "), x.opts[e(2840)] && (s += e(396) + u + e(2874) + x[e(332)] + " , data: " + f + " "), s += e(791)) : s += e(1968), s += ";  if (vErrors === null) vErrors = [err]; else vErrors.push(err); errors++; } else if (" + m + e(2411)), s += e(560) + D + e(2602) + D + " < " + m + ".length; " + D + e(1433) + f + "[" + m + "[" + D + e(2142), O && (s += e(544) + f + ", " + m + "[" + D + e(2777)), s += e(2192), x.createErrors !== !1 ? (s += e(658) + e(2477) + e(311) + x.errorPath + e(662) + x[e(2365)][e(1806)](d) + e(2670) + q + "' } ", x[e(930)][e(635)] !== !1 && (s += e(589), x[e(930)][e(1108)] ? s += "is a required property" : s += "should have required property \\'" + q + "\\'", s += "' "), x.opts[e(2840)] && (s += e(396) + u + e(2874) + x[e(332)] + e(300) + f + " "), s += e(791)) : s += e(1968), s += ";  if (vErrors === null) vErrors = [err]; else vErrors.push(err); errors++; } } ", h && (s += e(1726));
      } else {
        var l0 = C;
        if (l0)
          for (var U, o0 = -1, f0 = l0[e(1667)] - 1; o0 < f0; ) {
            U = l0[o0 += 1];
            var c0 = x[e(2365)][e(2562)](U), q = x[e(2365)][e(397)](U), u0 = f + c0;
            x.opts[e(1108)] && (x[e(372)] = x[e(2365)][e(2558)](E, U, x[e(930)][e(1882)])), s += e(954) + u0 + " === undefined ", O && (s += e(544) + f + ", '" + x[e(2365)][e(397)](U) + e(725)), s += e(2192), x.createErrors !== !1 ? (s += e(658) + e(2477) + e(311) + x[e(372)] + " , schemaPath: " + x[e(2365)][e(1806)](d) + e(2670) + q + "' } ", x[e(930)][e(635)] !== !1 && (s += e(589), x.opts._errorDataPathProperty ? s += e(1389) : s += e(2258) + q + "\\'", s += "' "), x[e(930)][e(2840)] && (s += e(396) + u + " , parentSchema: validate.schema" + x[e(332)] + e(300) + f + " "), s += e(791)) : s += e(1968), s += ";  if (vErrors === null) vErrors = [err]; else vErrors.push(err); errors++; } ";
          }
      }
      x.errorPath = E;
    } else l && (s += e(2386));
    return s;
  }), Nt;
}
var qt, Vr;
function P2() {
  return Vr || (Vr = 1, qt = function(x, t, r) {
    const e = K;
    var s = " ", n = x.level, o = x[e(712)], c = x.schema[t], u = x[e(332)] + x.util[e(2562)](t), d = x[e(1481)] + "/" + t, l = !x[e(930)][e(1115)], f = "data" + (o || ""), b = "valid" + n, h = x[e(930)][e(958)] && c && c.$data, m;
    if (h ? (s += e(2641) + n + e(1992) + x.util[e(1588)](c[e(958)], o, x[e(1413)]) + "; ", m = e(1676) + n) : m = c, (c || h) && x[e(930)][e(2758)] !== !1) {
      h && (s += e(512) + b + e(1461) + m + e(1140) + m + e(840) + b + " = true; else if (typeof " + m + " != 'boolean') " + b + e(2913)), s += e(932) + f + e(2685) + b + e(1548);
      var v = x.schema[e(1917)] && x[e(1676)][e(1917)][e(1436)], k = Array[e(1683)](v);
      if (!v || v == e(2613) || v == e(2455) || k && (v.indexOf(e(2613)) >= 0 || v[e(1112)](e(2455)) >= 0)) s += e(2676) + f + e(698) + f + e(2572) + b + " = false; break outer; } } } ";
      else {
        s += e(1670) + f + "[i]; ";
        var P = e(738) + (k ? "s" : "");
        s += e(2471) + x[e(2365)][P](v, "item", x[e(930)][e(2347)], !0) + e(1569), k && (s += ` if (typeof item == 'string') item = '"' + item; `), s += e(1695) + b + e(2050);
      }
      s += e(791), h && (s += e(1726)), s += " if (!" + b + ") {   ";
      var F = F || [];
      F[e(528)](s), s = "", x[e(1566)] !== !1 ? (s += e(658) + e(2758) + e(311) + x[e(372)] + e(662) + x[e(2365)].toQuotedString(d) + e(1784), x[e(930)].messages !== !1 && (s += " , message: 'should NOT have duplicate items (items ## ' + j + ' and ' + i + ' are identical)' "), x[e(930)][e(2840)] && (s += e(1148), h ? s += e(1430) + u : s += "" + c, s += "         , parentSchema: validate.schema" + x.schemaPath + e(300) + f + " "), s += " } ") : s += e(1968);
      var A = s;
      s = F[e(940)](), !x[e(634)] && l ? x[e(2780)] ? s += e(1073) + A + e(392) : s += e(2338) + A + e(580) : s += " var err = " + A + e(1771), s += " } ", l && (s += e(1626));
    } else l && (s += " if (true) { ");
    return s;
  }), qt;
}
var Tt, Zr;
function I2() {
  return Zr || (Zr = 1, Tt = { $ref: n2(), allOf: i2(), anyOf: o2(), $comment: c2(), const: u2(), contains: d2(), dependencies: l2(), enum: f2(), format: h2(), if: p2(), items: m2(), maximum: Nr(), minimum: Nr(), maxItems: Tr(), minItems: Tr(), maxLength: _r(), minLength: _r(), maxProperties: Dr(), minProperties: Dr(), multipleOf: b2(), not: g2(), oneOf: y2(), pattern: v2(), properties: w2(), propertyNames: S2(), required: k2(), uniqueItems: P2(), validate: mn() }), Tt;
}
var At, Br;
function E2() {
  const i = a;
  if (Br) return At;
  Br = 1;
  var x = I2(), t = Be()[i(1983)];
  return At = function() {
    const e = i;
    var s = [{ type: e(329), rules: [{ maximum: ["exclusiveMaximum"] }, { minimum: [e(2675)] }, e(1847), "format"] }, { type: e(1019), rules: [e(2540), e(2425), "pattern", e(2899)] }, { type: e(2455), rules: [e(1440), "minItems", e(1917), e(2286), e(2758)] }, { type: e(2613), rules: [e(837), e(1337), e(2477), "dependencies", e(2219), { properties: [e(1015), e(2923)] }] }, { rules: ["$ref", "const", "enum", e(389), e(2536), "oneOf", e(2262), "if"] }], n = [e(1436), e(2885)], o = [e(834), e(2834), "id", "$data", e(2190), e(857), "description", e(2475), e(1609), e(2550), e(523), "writeOnly", e(1223), e(2421), "additionalItems", e(654), e(2205)], c = [e(329), "integer", e(1019), e(2455), "object", e(1459), e(1399)];
    return s[e(1849)] = t(n), s[e(2762)] = t(c), s[e(1188)](function(u) {
      const d = e;
      u[d(710)] = u[d(710)][d(1753)](function(l) {
        const f = d;
        var b;
        if (typeof l == "object") {
          var h = Object[f(1400)](l)[0];
          b = l[h], l = h, b[f(1188)](function(v) {
            const k = f;
            n.push(v), s[k(1849)][v] = !0;
          });
        }
        n.push(l);
        var m = s.all[l] = { keyword: l, code: x[l], implements: b };
        return m;
      }), s[d(1849)][d(2885)] = { keyword: d(2885), code: x.$comment }, u[d(1436)] && (s[d(2762)][u[d(1436)]] = u);
    }), s[e(1180)] = t(n[e(572)](o)), s[e(2438)] = {}, s;
  }, At;
}
var _t, Wr;
function R2() {
  const i = a;
  if (Wr) return _t;
  Wr = 1;
  var x = [i(1847), i(1887), i(638), i(2591), i(2675), i(2540), i(2425), i(2749), "additionalItems", i(1440), i(1089), i(2758), i(837), i(1337), i(2477), "additionalProperties", "enum", "format", "const"];
  return _t = function(t, r) {
    const e = i;
    for (var s = 0; s < r[e(1667)]; s++) {
      t = JSON[e(1198)](JSON.stringify(t));
      var n = r[s].split("/"), o = t, c;
      for (c = 1; c < n.length; c++) o = o[n[c]];
      for (c = 0; c < x[e(1667)]; c++) {
        var u = x[c], d = o[u];
        d && (o[u] = { anyOf: [d, { $ref: "https://raw.githubusercontent.com/ajv-validator/ajv/master/lib/refs/data.json#" }] });
      }
    }
    return t;
  }, _t;
}
var Ot, Kr;
function C2() {
  const i = a;
  if (Kr) return Ot;
  Kr = 1;
  var x = ha()[i(2650)];
  Ot = t;
  function t(r, e, s) {
    const n = i;
    var o = this;
    if (typeof this[n(1913)].loadSchema != n(1137)) throw new Error(n(506));
    typeof e == n(1137) && (s = e, e = void 0);
    var c = u(r)[n(654)](function() {
      const l = n;
      var f = o._addSchema(r, void 0, e);
      return f[l(312)] || d(f);
    });
    return s && c[n(654)](function(l) {
      s(null, l);
    }, s), c;
    function u(l) {
      const f = n;
      var b = l.$schema;
      return b && !o.getSchema(b) ? t.call(o, { $ref: b }, !0) : Promise[f(2345)]();
    }
    function d(l) {
      try {
        return o._compile(l);
      } catch (b) {
        if (b instanceof x) return f(b);
        throw b;
      }
      function f(b) {
        const h = K;
        var m = b[h(2713)];
        if (P(m)) throw new Error("Schema " + m + h(323) + b[h(496)] + h(1208));
        var v = o[h(1838)][m];
        return !v && (v = o[h(1838)][m] = o[h(1913)][h(2491)](m), v[h(654)](k, k)), v.then(function(F) {
          const A = h;
          if (!P(m)) return u(F)[A(654)](function() {
            const C = A;
            P(m) || o[C(302)](F, m, void 0, e);
          });
        })[h(654)](function() {
          return d(l);
        });
        function k() {
          const F = h;
          delete o[F(1838)][m];
        }
        function P(F) {
          const A = h;
          return o[A(2741)][F] || o[A(2699)][F];
        }
      }
    }
  }
  return Ot;
}
var Dt, Gr;
function F2() {
  return Gr || (Gr = 1, Dt = function(x, t, r) {
    const e = K;
    var s = " ", n = x[e(2712)], o = x[e(712)], c = x[e(1676)][t], u = x.schemaPath + x[e(2365)][e(2562)](t), d = x[e(1481)] + "/" + t, l = !x.opts[e(1115)], f, b = e(782) + (o || ""), h = e(1268) + n, m = e(2907) + n, v = x[e(930)][e(958)] && c && c.$data, k;
    v ? (s += e(2641) + n + e(1992) + x.util.getData(c[e(958)], o, x[e(1413)]) + "; ", k = e(1676) + n) : k = c;
    var P = this, F = "definition" + n, A = P[e(576)], C = "", E, R, O, D, j;
    if (v && A[e(958)]) {
      j = "keywordValidate" + n;
      var q = A[e(733)];
      s += e(512) + F + e(2276) + t + e(2695) + j + e(1992) + F + e(841);
    } else {
      if (D = x.useCustomRule(P, c, x[e(1676)], x), !D) return;
      k = e(1430) + u, j = D[e(444)], E = A.compile, R = A[e(797)], O = A[e(1971)];
    }
    var N = j + e(1914), z = "i" + n, L = e(2e3) + n, U = A[e(2780)];
    if (U && !x[e(2780)]) throw new Error(e(2724));
    if (!(R || O) && (s += "" + N + " = null;"), s += e(1054) + m + e(2387) + h + ";", v && A[e(958)] && (C += "}", s += e(2471) + k + " === undefined) { " + h + e(1475), q && (C += "}", s += " " + h + e(1992) + F + e(1501) + k + "); if (" + h + e(1050))), R) A.statements ? s += " " + D[e(312)] + " " : s += " " + h + " = " + D[e(312)] + "; ";
    else if (O) {
      var G = x[e(2365)][e(2588)](x), C = "";
      G[e(2712)]++;
      var c0 = "valid" + G[e(2712)];
      G[e(1676)] = D[e(312)], G[e(332)] = "";
      var u0 = x[e(634)];
      x[e(634)] = G[e(634)] = !0;
      var l0 = x[e(312)](G).replace(/validate\.schema/g, j);
      x.compositeRule = G.compositeRule = u0, s += " " + l0;
    } else {
      var o0 = o0 || [];
      o0.push(s), s = "", s += "  " + j + e(935), x[e(930)][e(1194)] ? s += e(1069) : s += e(1321), E || A.schema === !1 ? s += e(2632) + b + " " : s += e(2632) + k + " , " + b + e(1323) + x.schemaPath + " ", s += " , (dataPath || '')", x.errorPath != '""' && (s += e(2826) + x[e(372)]);
      var f0 = o ? e(782) + (o - 1 || "") : e(732), k0 = o ? x[e(1413)][o] : e(1529);
      s += e(2632) + f0 + e(2632) + k0 + e(2717);
      var y0 = s;
      s = o0[e(940)](), A.errors === !1 ? (s += " " + h + e(1992), U && (s += "await "), s += "" + y0 + "; ") : U ? (N = "customErrors" + n, s += " var " + N + e(1130) + h + e(436) + y0 + e(437) + h + e(1269) + N + " = e.errors; else throw e; } ") : s += " " + N + e(1522) + h + " = " + y0 + "; ";
    }
    if (A[e(287)] && (s += " if (" + f0 + ") " + b + e(1992) + f0 + "[" + k0 + "];"), s += "" + C, A[e(1268)]) l && (s += e(348));
    else {
      s += e(954), A[e(1268)] === void 0 ? (s += " !", O ? s += "" + c0 : s += "" + h) : s += " " + !A.valid + " ", s += e(1050), f = P[e(1825)];
      var o0 = o0 || [];
      o0.push(s), s = "";
      var o0 = o0 || [];
      o0.push(s), s = "", x[e(1566)] !== !1 ? (s += " { keyword: '" + (f || e(2438)) + "' , dataPath: (dataPath || '') + " + x[e(372)] + e(662) + x[e(2365)][e(1806)](d) + e(1775) + P[e(1825)] + e(1438), x[e(930)][e(635)] !== !1 && (s += e(959) + P[e(1825)] + e(350)), x.opts.verbose && (s += " , schema: validate.schema" + u + e(2874) + x[e(332)] + e(300) + b + " "), s += e(791)) : s += e(1968);
      var M0 = s;
      s = o0[e(940)](), !x[e(634)] && l ? x[e(2780)] ? s += e(1073) + M0 + e(392) : s += e(2338) + M0 + e(580) : s += " var err = " + M0 + e(1771);
      var F0 = s;
      s = o0[e(940)](), R ? A[e(2183)] ? A.errors != e(1398) && (s += e(2222) + z + "=" + m + "; " + z + e(1293) + z + e(2785) + L + e(2265) + z + e(2687) + L + ".dataPath === undefined) " + L + e(296) + x.errorPath + e(1461) + L + e(2242) + L + '.schemaPath = "' + d + e(1061), x.opts[e(2840)] && (s += " " + L + e(530) + k + "; " + L + e(1219) + b + "; "), s += e(791)) : A[e(2183)] === !1 ? s += " " + F0 + " " : (s += e(2471) + m + " == errors) { " + F0 + e(903) + z + "=" + m + "; " + z + e(1293) + z + "++) { var " + L + e(2265) + z + "]; if (" + L + e(2145) + L + ".dataPath = (dataPath || '') + " + x.errorPath + e(1461) + L + e(2242) + L + e(306) + d + e(1061), x[e(930)][e(2840)] && (s += " " + L + e(530) + k + "; " + L + e(1219) + b + "; "), s += e(1904)) : O ? (s += e(1390), x[e(1566)] !== !1 ? (s += e(658) + (f || e(2438)) + "' , dataPath: (dataPath || '') + " + x.errorPath + e(662) + x[e(2365)][e(1806)](d) + e(1775) + P[e(1825)] + e(1438), x.opts[e(635)] !== !1 && (s += e(959) + P[e(1825)] + e(350)), x.opts[e(2840)] && (s += e(396) + u + e(2874) + x[e(332)] + e(300) + b + " "), s += e(791)) : s += e(1968), s += ";  if (vErrors === null) vErrors = [err]; else vErrors.push(err); errors++; ", !x.compositeRule && l && (x[e(2780)] ? s += e(943) : s += e(414))) : A.errors === !1 ? s += " " + F0 + " " : (s += e(1778) + N + ")) { if (vErrors === null) vErrors = " + N + "; else vErrors = vErrors.concat(" + N + e(1271) + z + "=" + m + "; " + z + e(1293) + z + "++) { var " + L + e(2265) + z + e(2687) + L + e(2145) + L + e(296) + x.errorPath + e(1905) + L + e(306) + d + e(2323), x[e(930)][e(2840)] && (s += " " + L + e(530) + k + "; " + L + e(1219) + b + "; "), s += e(1048) + F0 + " } "), s += e(791), l && (s += e(1626));
    }
    return s;
  }), Dt;
}
const N2 = a(992), q2 = a(992), T2 = "Core schema meta-schema", A2 = { schemaArray: { type: "array", minItems: 1, items: { $ref: "#" } }, nonNegativeInteger: { type: "integer", minimum: 0 }, nonNegativeIntegerDefault0: { allOf: [{ $ref: a(777) }, { default: 0 }] }, simpleTypes: { enum: [a(2455), "boolean", a(1779), a(1399), a(329), "object", a(1019)] }, stringArray: { type: "array", items: { type: a(1019) }, uniqueItems: !0, default: [] } }, _2 = [a(2613), a(1459)], O2 = { $id: { type: a(1019), format: "uri-reference" }, $schema: { type: "string", format: a(607) }, $ref: { type: a(1019), format: "uri-reference" }, $comment: { type: "string" }, title: { type: a(1019) }, description: { type: "string" }, default: !0, readOnly: { type: "boolean", default: !1 }, examples: { type: a(2455), items: !0 }, multipleOf: { type: "number", exclusiveMinimum: 0 }, maximum: { type: a(329) }, exclusiveMaximum: { type: a(329) }, minimum: { type: "number" }, exclusiveMinimum: { type: a(329) }, maxLength: { $ref: a(777) }, minLength: { $ref: a(714) }, pattern: { type: a(1019), format: a(1173) }, additionalItems: { $ref: "#" }, items: { anyOf: [{ $ref: "#" }, { $ref: a(2504) }], default: !0 }, maxItems: { $ref: a(777) }, minItems: { $ref: a(714) }, uniqueItems: { type: "boolean", default: !1 }, contains: { $ref: "#" }, maxProperties: { $ref: a(777) }, minProperties: { $ref: a(714) }, required: { $ref: a(1374) }, additionalProperties: { $ref: "#" }, definitions: { type: a(2613), additionalProperties: { $ref: "#" }, default: {} }, properties: { type: a(2613), additionalProperties: { $ref: "#" }, default: {} }, patternProperties: { type: a(2613), additionalProperties: { $ref: "#" }, propertyNames: { format: "regex" }, default: {} }, dependencies: { type: "object", additionalProperties: { anyOf: [{ $ref: "#" }, { $ref: a(1374) }] } }, propertyNames: { $ref: "#" }, const: !0, enum: { type: a(2455), items: !0, minItems: 1, uniqueItems: !0 }, type: { anyOf: [{ $ref: a(432) }, { type: a(2455), items: { $ref: a(432) }, minItems: 1, uniqueItems: !0 }] }, format: { type: "string" }, contentMediaType: { type: "string" }, contentEncoding: { type: "string" }, if: { $ref: "#" }, then: { $ref: "#" }, else: { $ref: "#" }, allOf: { $ref: a(2504) }, anyOf: { $ref: a(2504) }, oneOf: { $ref: a(2504) }, not: { $ref: "#" } }, bn = { $schema: N2, $id: q2, title: T2, definitions: A2, type: _2, properties: O2, default: !0 };
var jt, Jr;
function D2() {
  const i = a;
  if (Jr) return jt;
  Jr = 1;
  var x = bn;
  return jt = { $id: "https://github.com/ajv-validator/ajv/blob/master/lib/definition_schema.js", definitions: { simpleTypes: x[i(1609)][i(343)] }, type: "object", dependencies: { schema: [i(312)], $data: [i(312)], statements: [i(797)], valid: { not: { required: [i(1971)] } } }, properties: { type: x[i(1367)][i(1436)], schema: { type: i(1459) }, statements: { type: i(1459) }, dependencies: { type: i(2455), items: { type: "string" } }, metaSchema: { type: "object" }, modifying: { type: "boolean" }, valid: { type: i(1459) }, $data: { type: "boolean" }, async: { type: i(1459) }, errors: { anyOf: [{ type: "boolean" }, { const: i(1398) }] } } }, jt;
}
var Mt, Qr;
function j2() {
  if (Qr) return Mt;
  Qr = 1;
  var i = /^[a-z_$][a-z0-9_$-]*$/i, x = F2(), t = D2();
  Mt = { add: r, get: e, remove: s, validate: n };
  function r(o, c) {
    const u = K;
    var d = this.RULES;
    if (d[u(1180)][o]) throw new Error(u(597) + o + u(2804));
    if (!i[u(700)](o)) throw new Error("Keyword " + o + u(2166));
    if (c) {
      this[u(1169)](c, !0);
      var l = c[u(1436)];
      if (Array[u(1683)](l))
        for (var f = 0; f < l[u(1667)]; f++) h(o, l[f], c);
      else h(o, l, c);
      var b = c[u(1098)];
      b && (c[u(958)] && this[u(1913)][u(958)] && (b = { anyOf: [b, { $ref: u(1370) }] }), c[u(733)] = this[u(699)](b, !0));
    }
    d.keywords[o] = d[u(1849)][o] = !0;
    function h(m, v, k) {
      const P = u;
      for (var F, A = 0; A < d.length; A++) {
        var C = d[A];
        if (C[P(1436)] == v) {
          F = C;
          break;
        }
      }
      !F && (F = { type: v, rules: [] }, d.push(F));
      var E = { keyword: m, definition: k, custom: !0, code: x, implements: k[P(2107)] };
      F[P(710)].push(E), d[P(2438)][m] = E;
    }
    return this;
  }
  function e(o) {
    const c = K;
    var u = this[c(2420)][c(2438)][o];
    return u ? u[c(576)] : this[c(2420)].keywords[o] || !1;
  }
  function s(o) {
    const c = K;
    var u = this.RULES;
    delete u[c(1180)][o], delete u[c(1849)][o], delete u[c(2438)][o];
    for (var d = 0; d < u.length; d++)
      for (var l = u[d][c(710)], f = 0; f < l.length; f++)
        if (l[f][c(1825)] == o) {
          l[c(2383)](f, 1);
          break;
        }
    return this;
  }
  function n(o, c) {
    const u = K;
    n[u(2183)] = null;
    var d = this._validateKeyword = this._validateKeyword || this.compile(t, !0);
    if (d(o)) return !0;
    if (n[u(2183)] = d[u(2183)], c) throw new Error("custom keyword definition is invalid: " + this[u(1448)](d[u(2183)]));
    return !1;
  }
  return Mt;
}
const M2 = a(992), L2 = "https://raw.githubusercontent.com/ajv-validator/ajv/master/lib/refs/data.json#", $2 = "Meta-schema for $data reference (JSON Schema extension proposal)", H2 = "object", z2 = [a(958)], U2 = { $data: { type: a(1019), anyOf: [{ format: a(1795) }, { format: "json-pointer" }] } }, V2 = !1, Z2 = { $schema: M2, $id: L2, description: $2, type: H2, required: z2, properties: U2, additionalProperties: V2 };
var Lt, Xr;
function B2() {
  const i = a;
  if (Xr) return Lt;
  Xr = 1;
  var x = a2(), t = fa(), r = r2(), e = hn(), s = pn(), n = s2(), o = E2(), c = R2(), u = Be();
  Lt = m, m[i(1523)].validate = v, m[i(1523)][i(699)] = k, m.prototype[i(302)] = P, m[i(1523)].addMetaSchema = F, m[i(1523)][i(733)] = A, m[i(1523)].getSchema = E, m[i(1523)].removeSchema = D, m.prototype[i(2077)] = u0, m[i(1523)][i(1448)] = c0, m.prototype[i(495)] = q, m[i(1523)][i(767)] = N, m[i(1523)][i(2658)] = C2();
  var d = j2();
  m.prototype[i(1920)] = d[i(2701)], m[i(1523)][i(2866)] = d[i(2917)], m.prototype.removeKeyword = d[i(873)], m[i(1523)].validateKeyword = d[i(312)];
  var l = ha();
  m[i(2630)] = l[i(1360)], m[i(1312)] = l[i(2650)], m[i(2288)] = c;
  var f = i(1853), b = ["removeAdditional", "useDefaults", i(578), i(2794)], h = [i(1417)];
  function m(_) {
    const T = i;
    if (!(this instanceof m)) return new m(_);
    _ = this._opts = u[T(2588)](_) || {}, F0(this), this[T(2699)] = {}, this._refs = {}, this._fragments = {}, this._formats = n(_[T(2899)]), this[T(461)] = _[T(2432)] || new r(), this[T(1838)] = {}, this[T(295)] = [], this[T(2420)] = o(), this._getId = z(_), _.loopRequired = _[T(852)] || 1 / 0, _[T(2649)] == T(2779) && (_[T(1108)] = !0), _.serialize === void 0 && (_[T(1164)] = s), this[T(579)] = M0(this), _[T(2755)] && f0(this), _.keywords && k0(this), l0(this), typeof _[T(610)] == "object" && this[T(403)](_[T(610)]), _[T(1423)] && this[T(1920)](T(1423), { metaSchema: { type: T(1459) } }), o0(this);
  }
  function v(_, T) {
    const H = i;
    var J;
    if (typeof _ == "string") {
      if (J = this.getSchema(_), !J) throw new Error(H(2042) + _ + '"');
    } else {
      var Y = this._addSchema(_);
      J = Y.validate || this[H(767)](Y);
    }
    var V = J(T);
    return J[H(2190)] !== !0 && (this.errors = J[H(2183)]), V;
  }
  function k(_, T) {
    var H = this._addSchema(_, void 0, T);
    return H.validate || this._compile(H);
  }
  function P(_, T, H, J) {
    const Y = i;
    if (Array.isArray(_)) {
      for (var V = 0; V < _.length; V++) this[Y(302)](_[V], void 0, H, J);
      return this;
    }
    var Q = this._getId(_);
    if (Q !== void 0 && typeof Q != Y(1019)) throw new Error("schema id must be string");
    return T = t[Y(665)](T || Q), y0(this, T), this[Y(2699)][T] = this[Y(495)](_, H, J, !0), this;
  }
  function F(_, T, H) {
    return this[i(302)](_, T, H, !0), this;
  }
  function A(_, T) {
    const H = i;
    var J = _.$schema;
    if (J !== void 0 && typeof J != "string") throw new Error(H(755));
    if (J = J || this[H(1913)].defaultMeta || C(this), !J) return this[H(2047)].warn(H(1592)), this.errors = null, !0;
    var Y = this[H(312)](J, _);
    if (!Y && T) {
      var V = H(1410) + this[H(1448)]();
      if (this[H(1913)].validateSchema == "log") this.logger[H(1033)](V);
      else throw new Error(V);
    }
    return Y;
  }
  function C(_) {
    const T = i;
    var H = _[T(1913)][T(610)];
    return _[T(1913)][T(2062)] = typeof H == T(2613) ? _[T(1391)](H) || H : _[T(2814)](f) ? f : void 0, _[T(1913)][T(2062)];
  }
  function E(_) {
    const T = i;
    var H = O(this, _);
    switch (typeof H) {
      case T(2613):
        return H[T(312)] || this[T(767)](H);
      case T(1019):
        return this[T(2814)](H);
      case "undefined":
        return R(this, _);
    }
  }
  function R(_, T) {
    const H = i;
    var J = t[H(1676)][H(1512)](_, { schema: {} }, T);
    if (J) {
      var Y = J[H(1676)], V = J[H(1576)], Q = J[H(2681)], n0 = x[H(1512)](_, Y, V, void 0, Q);
      return _._fragments[T] = new e({ ref: T, fragment: !0, schema: Y, root: V, baseId: Q, validate: n0 }), n0;
    }
  }
  function O(_, T) {
    const H = i;
    return T = t[H(665)](T), _._schemas[T] || _[H(2741)][T] || _[H(2433)][T];
  }
  function D(_) {
    const T = i;
    if (_ instanceof RegExp) return j(this, this[T(2699)], _), j(this, this._refs, _), this;
    switch (typeof _) {
      case T(1714):
        return j(this, this[T(2699)]), j(this, this[T(2741)]), this._cache[T(2450)](), this;
      case T(1019):
        var H = O(this, _);
        return H && this._cache.del(H[T(934)]), delete this[T(2699)][_], delete this._refs[_], this;
      case T(2613):
        var J = this[T(1913)][T(1164)], Y = J ? J(_) : _;
        this[T(461)][T(2241)](Y);
        var V = this[T(1391)](_);
        V && (V = t[T(665)](V), delete this._schemas[V], delete this[T(2741)][V]);
    }
    return this;
  }
  function j(_, T, H) {
    const J = i;
    for (var Y in T) {
      var V = T[Y];
      !V[J(610)] && (!H || H.test(Y)) && (_[J(461)][J(2241)](V[J(934)]), delete T[Y]);
    }
  }
  function q(_, T, H, J) {
    const Y = i;
    if (typeof _ != Y(2613) && typeof _ != "boolean") throw new Error("schema should be object or boolean");
    var V = this[Y(1913)][Y(1164)], Q = V ? V(_) : _, n0 = this[Y(461)].get(Q);
    if (n0) return n0;
    J = J || this[Y(1913)][Y(2607)] !== !1;
    var i0 = t[Y(665)](this._getId(_));
    i0 && J && y0(this, i0);
    var x0 = this[Y(1913)].validateSchema !== !1 && !T, L0;
    x0 && !(L0 = i0 && i0 == t[Y(665)](_[Y(834)])) && this[Y(733)](_, !0);
    var A0 = t.ids.call(this, _), z0 = new e({ id: i0, schema: _, localRefs: A0, cacheKey: Q, meta: H });
    return i0[0] != "#" && J && (this[Y(2741)][i0] = z0), this[Y(461)].put(Q, z0), x0 && L0 && this[Y(733)](_, !0), z0;
  }
  function N(_, T) {
    const H = i;
    if (_[H(1545)])
      return _.validate = V, V[H(1676)] = _.schema, V[H(2183)] = null, V[H(1576)] = T || V, _.schema.$async === !0 && (V[H(2190)] = !0), V;
    _[H(1545)] = !0;
    var J;
    _[H(610)] && (J = this[H(1913)], this[H(1913)] = this[H(579)]);
    var Y;
    try {
      Y = x.call(this, _[H(1676)], T, _.localRefs);
    } catch (Q) {
      throw delete _[H(312)], Q;
    } finally {
      _.compiling = !1, _[H(610)] && (this[H(1913)] = J);
    }
    return _[H(312)] = Y, _[H(853)] = Y[H(853)], _[H(1772)] = Y.refVal, _[H(1576)] = Y.root, Y;
    function V() {
      const Q = H;
      var n0 = _[Q(312)], i0 = n0[Q(758)](this, arguments);
      return V[Q(2183)] = n0[Q(2183)], i0;
    }
  }
  function z(_) {
    switch (_[i(2160)]) {
      case "auto":
        return G;
      case "id":
        return L;
      default:
        return U;
    }
  }
  function L(_) {
    const T = i;
    return _[T(2834)] && this[T(2047)][T(1842)]("schema $id ignored", _[T(2834)]), _.id;
  }
  function U(_) {
    const T = i;
    return _.id && this[T(2047)].warn(T(2049), _.id), _[T(2834)];
  }
  function G(_) {
    const T = i;
    if (_.$id && _.id && _[T(2834)] != _.id) throw new Error("schema $id is different from id");
    return _.$id || _.id;
  }
  function c0(_, T) {
    const H = i;
    if (_ = _ || this[H(2183)], !_) return H(1751);
    T = T || {};
    for (var J = T.separator === void 0 ? ", " : T[H(1018)], Y = T[H(664)] === void 0 ? "data" : T[H(664)], V = "", Q = 0; Q < _[H(1667)]; Q++) {
      var n0 = _[Q];
      n0 && (V += Y + n0.dataPath + " " + n0[H(2851)] + J);
    }
    return V[H(2419)](0, -J[H(1667)]);
  }
  function u0(_, T) {
    const H = i;
    return typeof T == H(1019) && (T = new RegExp(T)), this[H(1056)][_] = T, this;
  }
  function l0(_) {
    const T = i;
    var H;
    if (_._opts[T(958)] && (H = Z2, _[T(403)](H, H.$id, !0)), _[T(1913)][T(610)] !== !1) {
      var J = bn;
      _[T(1913)][T(958)] && (J = c(J, h)), _.addMetaSchema(J, f, !0), _[T(2741)][T(1428)] = f;
    }
  }
  function o0(_) {
    const T = i;
    var H = _[T(1913)][T(1242)];
    if (H)
      if (Array[T(1683)](H)) _[T(302)](H);
      else
        for (var J in H) _[T(302)](H[J], J);
  }
  function f0(_) {
    const T = i;
    for (var H in _[T(1913)][T(2755)]) {
      var J = _[T(1913)][T(2755)][H];
      _[T(2077)](H, J);
    }
  }
  function k0(_) {
    const T = i;
    for (var H in _._opts.keywords) {
      var J = _._opts[T(1180)][H];
      _[T(1920)](H, J);
    }
  }
  function y0(_, T) {
    const H = i;
    if (_[H(2699)][T] || _[H(2741)][T]) throw new Error(H(1636) + T + H(1947));
  }
  function M0(_) {
    const T = i;
    for (var H = u[T(2588)](_[T(1913)]), J = 0; J < b[T(1667)]; J++) delete H[b[J]];
    return H;
  }
  function F0(_) {
    const T = i;
    var H = _[T(1913)][T(2047)];
    if (H === !1) _[T(2047)] = { log: J0, warn: J0, error: J0 };
    else {
      if (H === void 0 && (H = console), !(typeof H == T(2613) && H[T(1546)] && H[T(1842)] && H[T(1033)])) throw new Error(T(2155));
      _[T(2047)] = H;
    }
  }
  function J0() {
  }
  return Lt;
}
var W2 = B2();
const K2 = Hs(W2);
class G2 extends Qc {
  constructor(x, t) {
    const r = a;
    var e;
    super(t), this._serverInfo = x, this[r(2329)] = (e = t == null ? void 0 : t[r(2295)]) !== null && e !== void 0 ? e : {}, this[r(1259)] = t == null ? void 0 : t[r(753)], this[r(920)](xn, (s) => this[r(986)](s)), this.setNotificationHandler(tn, () => {
      const s = r;
      var n;
      return (n = this[s(1625)]) === null || n === void 0 ? void 0 : n.call(this);
    });
  }
  [a(2890)](x) {
    const t = a;
    if (this[t(993)]) throw new Error(t(1624));
    this[t(2329)] = Xc(this[t(2329)], x);
  }
  [a(1349)](x) {
    const t = a;
    var r, e, s;
    switch (x) {
      case t(1991):
        if (!(!((r = this._clientCapabilities) === null || r === void 0) && r[t(1898)])) throw new Error(t(2709) + x + ")");
        break;
      case "elicitation/create":
        if (!(!((e = this[t(1735)]) === null || e === void 0) && e[t(304)])) throw new Error(t(2802) + x + ")");
        break;
      case t(1214):
        if (!(!((s = this[t(1735)]) === null || s === void 0) && s[t(2231)])) throw new Error(t(520) + x + ")");
        break;
    }
  }
  assertNotificationCapability(x) {
    const t = a;
    switch (x) {
      case t(2154):
        if (!this[t(2329)][t(2211)]) throw new Error(t(1377) + x + ")");
        break;
      case t(1141):
      case t(2161):
        if (!this[t(2329)][t(1002)]) throw new Error(t(541) + x + ")");
        break;
      case t(775):
        if (!this[t(2329)].tools) throw new Error("Server does not support notifying of tool list changes (required for " + x + ")");
        break;
      case "notifications/prompts/list_changed":
        if (!this[t(2329)][t(447)]) throw new Error(t(1675) + x + ")");
        break;
    }
  }
  [a(2625)](x) {
    const t = a;
    switch (x) {
      case "sampling/createMessage":
        if (!this._capabilities[t(1898)]) throw new Error(t(2872) + x + ")");
        break;
      case t(2915):
        if (!this[t(2329)].logging) throw new Error(t(1377) + x + ")");
        break;
      case t(1608):
      case t(2245):
        if (!this._capabilities[t(447)]) throw new Error(t(836) + x + ")");
        break;
      case t(2637):
      case t(2038):
      case "resources/read":
        if (!this[t(2329)][t(1002)]) throw new Error("Server does not support resources (required for " + x + ")");
        break;
      case t(2465):
      case t(549):
        if (!this._capabilities[t(1554)]) throw new Error(t(955) + x + ")");
        break;
    }
  }
  async _oninitialize(x) {
    const t = a, r = x[t(2307)][t(524)];
    return this[t(1735)] = x[t(2307)][t(2295)], this[t(546)] = x.params[t(2816)], { protocolVersion: Go[t(1721)](r) ? r : Ws, capabilities: this[t(875)](), serverInfo: this._serverInfo, ...this._instructions && { instructions: this[t(1259)] } };
  }
  getClientCapabilities() {
    return this[a(1735)];
  }
  [a(1532)]() {
    return this[a(546)];
  }
  [a(875)]() {
    return this[a(2329)];
  }
  async [a(656)]() {
    const x = a;
    return this[x(1837)]({ method: x(656) }, ta);
  }
  async [a(2348)](x, t) {
    return this[a(1837)]({ method: "sampling/createMessage", params: x }, dn, t);
  }
  async [a(1759)](x, t) {
    const r = a, e = await this[r(1837)]({ method: "elicitation/create", params: x }, ln, t);
    if (e[r(888)] === r(2101) && e[r(795)]) try {
      const s = new K2(), n = s.compile(x[r(2935)]);
      if (!n(e[r(795)])) throw new _e(ve[r(1817)], r(2627) + s[r(1448)](n.errors));
    } catch (s) {
      throw s instanceof _e ? s : new _e(ve[r(947)], r(2603) + s);
    }
    return e;
  }
  async listRoots(x, t) {
    const r = a;
    return this[r(1837)]({ method: r(1214), params: x }, fn, t);
  }
  async [a(691)](x) {
    const t = a;
    return this[t(1707)]({ method: t(2154), params: x });
  }
  async [a(1432)](x) {
    return this[a(1707)]({ method: "notifications/resources/updated", params: x });
  }
  async [a(828)]() {
    const x = a;
    return this[x(1707)]({ method: x(2161) });
  }
  async [a(566)]() {
    const x = a;
    return this.notification({ method: x(775) });
  }
  async [a(2789)]() {
    const x = a;
    return this.notification({ method: x(991) });
  }
}
class J2 extends Error {
  constructor(x, t) {
    const r = a;
    super("Heartbeat timeout for poster " + x + r(2592) + t + "ms"), this[r(1274)] = r(2313);
  }
}
const px = /* @__PURE__ */ new Map();
class Q2 {
  constructor(x) {
    const t = a;
    if (this[t(1531)] = [], this[t(1766)] = Date[t(722)](), px[t(2507)](x[t(1034)])) {
      const o = px[t(2917)](x[t(1034)]);
      o && o[t(971)]();
    }
    this[t(1034)] = x.posterIdentifier, this[t(2815)] = x[t(2815)], this[t(901)] = x[t(901)], this[t(248)] = x[t(248)];
    const r = x[t(2099)] ?? x[t(251)], e = x[t(251)] ?? x[t(2099)], s = this.normalizeDuration(r), n = this[t(1719)](e);
    s && n && (this[t(2099)] = s, this[t(251)] = n), this.debugDisableHeartbeatResponse = x[t(1989)] ?? !1, px[t(480)](this[t(1034)], this), this[t(2181)] = this[t(2181)][t(1780)](this), this[t(299)] = this[t(901)](this[t(2181)]);
  }
  normalizeDuration(x) {
    const t = a;
    if (typeof x === t(329) && !(!Number[t(2895)](x) || x <= 0))
      return x;
  }
  [a(2799)]() {
    const x = a;
    return typeof this[x(2099)] == "number" && typeof this[x(251)] === x(329);
  }
  listenMessageCallback(x) {
    const t = a;
    if (x[t(1034)] === this[t(1034)]) {
      if (x[t(1666)] === "sdppp-heartbeat") {
        x[t(1436)] === t(656) && !this.debugDisableHeartbeatResponse ? this[t(2815)]({ channel: t(800), posterIdentifier: this[t(1034)], type: t(2257), timestamp: x.timestamp }) : x[t(1436)] === t(2257) && (this[t(1766)] = Date[t(722)](), this.heartbeatTimeoutTimer && (clearTimeout(this[t(814)]), this[t(814)] = void 0));
        return;
      }
      x.channel === t(2092) && (this[t(2742)] && t(2476) in x ? this[t(2742)](x[t(2476)]) : t(2476) in x && this[t(1531)][t(528)](x.payload));
    }
  }
  async [a(817)]() {
    const x = a;
    for (; this[x(1531)][x(1667)] > 0; ) {
      const t = this[x(1531)][x(2846)]();
      t && this.onmessage && this.onmessage(t);
    }
    this[x(2799)]() && this.startHeartbeat();
  }
  [a(859)]() {
    const x = a;
    if (!this.isHeartbeatEnabled()) return;
    const t = this.heartbeatInterval, r = this[x(251)];
    this[x(1460)](), this[x(1900)] = setInterval(() => {
      const e = x, s = Date[e(722)]();
      this[e(2815)]({ channel: e(800), posterIdentifier: this[e(1034)], type: e(656), timestamp: s }), this[e(814)] = setTimeout(() => {
        const n = e, o = new J2(this[n(1034)], r);
        this[n(2405)] && this[n(2405)](o);
      }, r);
    }, t);
  }
  [a(1460)]() {
    const x = a;
    this.heartbeatTimer && (clearInterval(this.heartbeatTimer), this[x(1900)] = void 0), this[x(814)] && (clearTimeout(this[x(814)]), this[x(814)] = void 0);
  }
  async [a(335)](x, t) {
    const r = a;
    this.messagePoster({ channel: r(2092), posterIdentifier: this.posterIdentifier, payload: x });
  }
  async [a(971)]() {
    const x = a;
    this.clearHeartbeatTimers(), px[x(2764)](this.posterIdentifier), this[x(248)](this[x(299)]);
  }
}
const X2 = ix[a(1469)]("mesh");
async function gn() {
  const i = a;
  if (!window.uxpHost) return;
  const x = new Q2({ posterIdentifier: "comfy-uxp", messagePoster: (e) => {
    window.uxpHost.postMessage(e, "*");
  }, addMessageEventListener: (e) => {
    const s = K, n = (o) => {
      e(o[K(782)]);
    };
    return window[s(1424)](s(2851), n), n;
  }, removeMessageEventListener: (e) => {
    const s = K;
    window[s(1402)](s(2851), e);
  } });
  x[i(2405)] = (e) => {
    X2(i(2567), e);
  };
  const t = new G2({ name: i(1331), version: "1.0.0" }, {}), r = new ki(t);
  return await r.connect(x), window[i(2429)].postMessage({ channel: "mcp-mesh-router", meshName: i(1008), action: i(1199), version: i(1862) }, "*"), await P0[i(1199)](i(1023), r);
}
const Y2 = Object[a(2596)](Object[a(1712)]({ __proto__: null, connectUXP: gn, mcpMesh: P0 }, Symbol[a(1722)], { value: a(487) }));
function yn(i) {
  const x = a, t = N0[x(2740)] || N0[x(923)].workflow, r = t.activeWorkflow;
  if (i && i[x(2525)] && i[x(2525)].id !== r[x(1938)].id) return;
  const e = P0[x(293)].getState()[x(2108)], s = ea(N0[x(1891)], r);
  wn(s, e) && P0[x(293)][x(2805)]({ widgetableStructure: s }), P0[x(293)][x(2805)]({ widgetableValues: qx(N0.graph) });
}
Re.addEventListener(a(1980), yn), Re[a(1424)](a(944), () => {
  const i = a;
  P0[i(293)][i(2805)]({ widgetableValues: qx(N0[i(1891)]) });
});
let Yr = 0, es = !0, xs = "";
function vn() {
  const i = a;
  requestAnimationFrame(vn);
  const x = N0.workflowManager || N0[i(923)][i(2434)], t = x[i(1129)], r = (t == null ? void 0 : t.id) || 0, e = (t == null ? void 0 : t[i(2711)]) || "", s = (t == null ? void 0 : t[i(2765)]) || !0;
  if (r === Yr && e === xs && s === es) return;
  const n = Date[i(722)]();
  Yr = r, xs = e, es = s;
  const o = ea(N0[i(1891)], t), c = qx(N0.graph);
  P0[i(293)][i(2805)]({ widgetableStructure: o, widgetableValues: c }), console[i(1546)](i(1220) + (Date[i(722)]() - n) + "ms"), setTimeout(() => {
    const u = i;
    if (t !== x[u(1129)]) return;
    const d = ea(N0[u(1891)], t), l = qx(N0[u(1891)]);
    wn(d, o) && P0.store.setState({ widgetableStructure: d }), P0[u(293)][u(2805)]({ widgetableValues: l });
  }, 800);
}
requestAnimationFrame(vn);
function wn(i, x) {
  const t = a;
  return i[t(2389)].length !== x[t(2389)][t(1667)] || JSON[t(2340)](i[t(2389)]) !== JSON[t(2340)](x[t(2389)]) || JSON.stringify(i.nodes) !== JSON[t(2340)](x[t(1785)]);
}
let ts = !1;
async function eu() {
  const i = a;
  if (ts) return Promise[i(2345)]();
  Re.user && P0[i(293)].setState({ comfyUserToken: Re.user }), ts = !0;
}
ix.extend("comfy-entry");
async function xu(i, x, t) {
  const r = a;
  x[r(1424)]("progress", ({ detail: n }) => {
    const o = r;
    if (!n) return;
    let c = 0, u = 0;
    !isNaN(n[o(2380)] / n.max) && (c = Math[o(2140)](n.value / n.max * 100));
    const d = n[o(2559)], l = graph[o(1785)][o(2408)]((f) => f.id == d);
    if (l && l.order) {
      const f = 100 / graph.nodes[o(1667)];
      u = Math[o(2140)](l[o(2585)] * f) + (c ? c / 100 * f : 0);
    }
    P0[o(293)][o(2805)]({ progress: c, graphProgress: u });
  }), x.addEventListener(r(333), (n) => {
    var c;
    const o = r;
    (c = n[o(2525)]) != null && c[o(1614)] && P0[o(293)][o(2805)]({ queueSize: n[o(2525)].exec_info[o(909)] });
  }), x[r(1424)](r(1014), ({ detail: n }) => {
    const o = r;
    if (P0[o(293)].setState({ executingNodeTitle: "", executingNodeID: "", lastError: n.exception_message }), n[o(1680)]) {
      const c = i[o(1891)][o(1785)][o(2408)]((u) => u.id == n[o(1680)]);
      P0.store[o(2805)]({ widgetableErrors: { [n[o(1680)]]: "[" + ((c == null ? void 0 : c[o(857)]) || n[o(1680)]) + "]" + n[o(1598)] } });
    }
  }), x[r(1424)](r(619), (n) => {
    const o = r, c = n[o(2525)], u = graph[o(1785)].find((d) => d.id == c);
    if (u) {
      const d = 100 / graph.nodes[o(1667)];
      P0.store[o(2805)]({ executingNodeTitle: u[o(857)], executingNodeID: u.id, graphProgress: Math[o(2140)](u[o(2585)] * d) });
    }
  }), x[r(1424)](r(434), () => {
    P0[r(293)].setState({ progress: 0, executingNodeTitle: "", executingNodeID: "" });
  }), x[r(1424)]("execution_start", ({ detail: n }) => {
    const o = r;
    P0[o(293)][o(2805)]({ lastError: "", widgetableErrors: {}, progress: 0, executingNodeTitle: "", executingNodeID: "", lastRunTime: Date[o(722)]() });
  });
  const e = /* @__PURE__ */ new Map();
  x.addEventListener(r(2553), (n) => {
    const o = r;
    P0.store[o(2805)]({ progress: 0, executingNodeTitle: "", executingNodeID: "" });
    const c = (e[o(2917)](n[o(2525)][o(829)]) || [])[o(1753)]((u) => ({ url: u, thumbnail: u }));
    Mo(n[o(2525)].prompt_id, c), e.delete(n[o(2525)][o(829)]);
  }), x.addEventListener(r(944), (n) => {
    const o = r, c = e.get(n[o(2525)][o(829)]) || [];
    n[o(2525)].output && Array.isArray(n[o(2525)].output[o(2605)]) && n[o(2525)][o(1845)][o(2605)][o(1667)] > 0 && c[o(528)](...n.detail.output.images[o(2534)]((u) => u[o(1436)] == o(1845)).map((u) => {
      const d = o;
      return location[d(450)] + location.pathname + "api/view?type=" + u.type + d(2823) + encodeURIComponent(u.filename) + (u.subfolder ? d(1094) + encodeURIComponent(u.subfolder) : "");
    })), n.detail[o(1845)] && Array[o(1683)](n.detail[o(1845)][o(1470)]) && n[o(2525)][o(1845)].sdppp_assets[o(1667)] > 0 && c[o(528)](...n[o(2525)][o(1845)].sdppp_assets[o(1753)]((u) => {
      const d = o;
      return location[d(450)] + location.pathname + d(2279) + encodeURIComponent(u);
    })), e[o(480)](n[o(2525)][o(829)], c);
  });
  let s = null;
  x.addEventListener("reconnecting", (n) => {
    s = setTimeout(() => {
      const o = K;
      P0[o(293)][o(2805)]({ comfyWSState: o(885) });
    }, 1e3);
  }), x[r(1424)](r(2371), (n) => {
    const o = r;
    P0[o(293)][o(2805)]({ comfyWSState: "connected" }), clearTimeout(s);
  });
}
let $t = [];
(async function() {
  var x, t, r, e, s, n;
  const i = a;
  if (typeof gradioApp == i(1714)) {
    try {
      const o = (t = (x = window[i(1848)]) == null ? void 0 : x[i(2164)]) == null ? void 0 : t[i(2164)], c = (e = (r = window[i(1848)]) == null ? void 0 : r.ui) == null ? void 0 : e[i(1447)], u = (n = (s = window[i(1848)]) == null ? void 0 : s[i(2503)]) == null ? void 0 : n[i(2503)];
      if (!o || !u || !c) throw new Error(i(2850));
      await eu(), await gn(), await xu(o, u, c), import(i(1319))[i(654)]((d) => {
        d[i(2475)](Ye, 2);
      });
    } catch (o) {
      $t[i(528)](o[i(561)] || o.message || o);
    }
    await new Promise((o) => setTimeout(o, 2e3)), $t[i(1667)] && console[i(1033)]($t[0]);
  }
})();
