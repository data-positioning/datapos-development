import { promises as Ae } from "node:fs";
import { nanoid as Ds } from "nanoid";
import { promisify as Ms } from "node:util";
import { exec as Vs, spawn as zs } from "node:child_process";
import { CONNECTOR_SOURCE_OPERATIONS as js, CONNECTOR_DESTINATION_OPERATIONS as $s } from "@datapos/datapos-shared";
import { fileURLToPath as Fs, URL as Bs } from "node:url";
function k(e, t, i) {
  function r(d, y) {
    if (d._zod || Object.defineProperty(d, "_zod", {
      value: {
        def: y,
        constr: h,
        traits: /* @__PURE__ */ new Set()
      },
      enumerable: !1
    }), d._zod.traits.has(e))
      return;
    d._zod.traits.add(e), t(d, y);
    const o = h.prototype, S = Object.keys(o);
    for (let w = 0; w < S.length; w++) {
      const C = S[w];
      C in d || (d[C] = o[C].bind(d));
    }
  }
  const n = i?.Parent ?? Object;
  class u extends n {
  }
  Object.defineProperty(u, "name", { value: e });
  function h(d) {
    var y;
    const o = i?.Parent ? new u() : this;
    r(o, d), (y = o._zod).deferred ?? (y.deferred = []);
    for (const S of o._zod.deferred)
      S();
    return o;
  }
  return Object.defineProperty(h, "init", { value: r }), Object.defineProperty(h, Symbol.hasInstance, {
    value: (d) => i?.Parent && d instanceof i.Parent ? !0 : d?._zod?.traits?.has(e)
  }), Object.defineProperty(h, "name", { value: e }), h;
}
class rt extends Error {
  constructor() {
    super("Encountered Promise during synchronous parse. Use .parseAsync() instead.");
  }
}
class Sr extends Error {
  constructor(t) {
    super(`Encountered unidirectional transform during encode: ${t}`), this.name = "ZodEncodeError";
  }
}
const wr = {};
function Ue(e) {
  return wr;
}
function Zs(e) {
  const t = Object.values(e).filter((r) => typeof r == "number");
  return Object.entries(e).filter(([r, n]) => t.indexOf(+r) === -1).map(([r, n]) => n);
}
function ci(e, t) {
  return typeof t == "bigint" ? t.toString() : t;
}
function vi(e) {
  return {
    get value() {
      {
        const t = e();
        return Object.defineProperty(this, "value", { value: t }), t;
      }
    }
  };
}
function xi(e) {
  return e == null;
}
function gi(e) {
  const t = e.startsWith("^") ? 1 : 0, i = e.endsWith("$") ? e.length - 1 : e.length;
  return e.slice(t, i);
}
function Us(e, t) {
  const i = (e.toString().split(".")[1] || "").length, r = t.toString();
  let n = (r.split(".")[1] || "").length;
  if (n === 0 && /\d?e-\d?/.test(r)) {
    const y = r.match(/\d?e-(\d?)/);
    y?.[1] && (n = Number.parseInt(y[1]));
  }
  const u = i > n ? i : n, h = Number.parseInt(e.toFixed(u).replace(".", "")), d = Number.parseInt(t.toFixed(u).replace(".", ""));
  return h % d / 10 ** u;
}
const Vi = Symbol("evaluating");
function U(e, t, i) {
  let r;
  Object.defineProperty(e, t, {
    get() {
      if (r !== Vi)
        return r === void 0 && (r = Vi, r = i()), r;
    },
    set(n) {
      Object.defineProperty(e, t, {
        value: n
        // configurable: true,
      });
    },
    configurable: !0
  });
}
function Je(e, t, i) {
  Object.defineProperty(e, t, {
    value: i,
    writable: !0,
    enumerable: !0,
    configurable: !0
  });
}
function Xe(...e) {
  const t = {};
  for (const i of e) {
    const r = Object.getOwnPropertyDescriptors(i);
    Object.assign(t, r);
  }
  return Object.defineProperties({}, t);
}
function zi(e) {
  return JSON.stringify(e);
}
function qs(e) {
  return e.toLowerCase().trim().replace(/[^\w\s-]/g, "").replace(/[\s_-]+/g, "-").replace(/^-+|-+$/g, "");
}
const Tr = "captureStackTrace" in Error ? Error.captureStackTrace : (...e) => {
};
function Dt(e) {
  return typeof e == "object" && e !== null && !Array.isArray(e);
}
const Hs = vi(() => {
  if (typeof navigator < "u" && navigator?.userAgent?.includes("Cloudflare"))
    return !1;
  try {
    const e = Function;
    return new e(""), !0;
  } catch {
    return !1;
  }
});
function st(e) {
  if (Dt(e) === !1)
    return !1;
  const t = e.constructor;
  if (t === void 0 || typeof t != "function")
    return !0;
  const i = t.prototype;
  return !(Dt(i) === !1 || Object.prototype.hasOwnProperty.call(i, "isPrototypeOf") === !1);
}
function Pr(e) {
  return st(e) ? { ...e } : Array.isArray(e) ? [...e] : e;
}
const Ws = /* @__PURE__ */ new Set(["string", "number", "symbol"]);
function nt(e) {
  return e.replace(/[.*+?^${}()|[\]\\]/g, "\\$&");
}
function We(e, t, i) {
  const r = new e._zod.constr(t ?? e._zod.def);
  return (!t || i?.parent) && (r._zod.parent = e), r;
}
function R(e) {
  const t = e;
  if (!t)
    return {};
  if (typeof t == "string")
    return { error: () => t };
  if (t?.message !== void 0) {
    if (t?.error !== void 0)
      throw new Error("Cannot specify both `message` and `error` params");
    t.error = t.message;
  }
  return delete t.message, typeof t.error == "string" ? { ...t, error: () => t.error } : t;
}
function Ks(e) {
  return Object.keys(e).filter((t) => e[t]._zod.optin === "optional" && e[t]._zod.optout === "optional");
}
const Gs = {
  safeint: [Number.MIN_SAFE_INTEGER, Number.MAX_SAFE_INTEGER],
  int32: [-2147483648, 2147483647],
  uint32: [0, 4294967295],
  float32: [-34028234663852886e22, 34028234663852886e22],
  float64: [-Number.MAX_VALUE, Number.MAX_VALUE]
};
function Js(e, t) {
  const i = e._zod.def, r = Xe(e._zod.def, {
    get shape() {
      const n = {};
      for (const u in t) {
        if (!(u in i.shape))
          throw new Error(`Unrecognized key: "${u}"`);
        t[u] && (n[u] = i.shape[u]);
      }
      return Je(this, "shape", n), n;
    },
    checks: []
  });
  return We(e, r);
}
function Xs(e, t) {
  const i = e._zod.def, r = Xe(e._zod.def, {
    get shape() {
      const n = { ...e._zod.def.shape };
      for (const u in t) {
        if (!(u in i.shape))
          throw new Error(`Unrecognized key: "${u}"`);
        t[u] && delete n[u];
      }
      return Je(this, "shape", n), n;
    },
    checks: []
  });
  return We(e, r);
}
function Ys(e, t) {
  if (!st(t))
    throw new Error("Invalid input to extend: expected a plain object");
  const i = e._zod.def.checks;
  if (i && i.length > 0)
    throw new Error("Object schemas containing refinements cannot be extended. Use `.safeExtend()` instead.");
  const n = Xe(e._zod.def, {
    get shape() {
      const u = { ...e._zod.def.shape, ...t };
      return Je(this, "shape", u), u;
    },
    checks: []
  });
  return We(e, n);
}
function Qs(e, t) {
  if (!st(t))
    throw new Error("Invalid input to safeExtend: expected a plain object");
  const i = {
    ...e._zod.def,
    get shape() {
      const r = { ...e._zod.def.shape, ...t };
      return Je(this, "shape", r), r;
    },
    checks: e._zod.def.checks
  };
  return We(e, i);
}
function en(e, t) {
  const i = Xe(e._zod.def, {
    get shape() {
      const r = { ...e._zod.def.shape, ...t._zod.def.shape };
      return Je(this, "shape", r), r;
    },
    get catchall() {
      return t._zod.def.catchall;
    },
    checks: []
    // delete existing checks
  });
  return We(e, i);
}
function tn(e, t, i) {
  const r = Xe(t._zod.def, {
    get shape() {
      const n = t._zod.def.shape, u = { ...n };
      if (i)
        for (const h in i) {
          if (!(h in n))
            throw new Error(`Unrecognized key: "${h}"`);
          i[h] && (u[h] = e ? new e({
            type: "optional",
            innerType: n[h]
          }) : n[h]);
        }
      else
        for (const h in n)
          u[h] = e ? new e({
            type: "optional",
            innerType: n[h]
          }) : n[h];
      return Je(this, "shape", u), u;
    },
    checks: []
  });
  return We(t, r);
}
function rn(e, t, i) {
  const r = Xe(t._zod.def, {
    get shape() {
      const n = t._zod.def.shape, u = { ...n };
      if (i)
        for (const h in i) {
          if (!(h in u))
            throw new Error(`Unrecognized key: "${h}"`);
          i[h] && (u[h] = new e({
            type: "nonoptional",
            innerType: n[h]
          }));
        }
      else
        for (const h in n)
          u[h] = new e({
            type: "nonoptional",
            innerType: n[h]
          });
      return Je(this, "shape", u), u;
    },
    checks: []
  });
  return We(t, r);
}
function tt(e, t = 0) {
  if (e.aborted === !0)
    return !0;
  for (let i = t; i < e.issues.length; i++)
    if (e.issues[i]?.continue !== !0)
      return !0;
  return !1;
}
function it(e, t) {
  return t.map((i) => {
    var r;
    return (r = i).path ?? (r.path = []), i.path.unshift(e), i;
  });
}
function It(e) {
  return typeof e == "string" ? e : e?.message;
}
function qe(e, t, i) {
  const r = { ...e, path: e.path ?? [] };
  if (!e.message) {
    const n = It(e.inst?._zod.def?.error?.(e)) ?? It(t?.error?.(e)) ?? It(i.customError?.(e)) ?? It(i.localeError?.(e)) ?? "Invalid input";
    r.message = n;
  }
  return delete r.inst, delete r.continue, t?.reportInput || delete r.input, r;
}
function bi(e) {
  return Array.isArray(e) ? "array" : typeof e == "string" ? "string" : "unknown";
}
function bt(...e) {
  const [t, i, r] = e;
  return typeof t == "string" ? {
    message: t,
    code: "custom",
    input: i,
    inst: r
  } : { ...t };
}
const Cr = (e, t) => {
  e.name = "$ZodError", Object.defineProperty(e, "_zod", {
    value: e._zod,
    enumerable: !1
  }), Object.defineProperty(e, "issues", {
    value: t,
    enumerable: !1
  }), e.message = JSON.stringify(t, ci, 2), Object.defineProperty(e, "toString", {
    value: () => e.message,
    enumerable: !1
  });
}, Ar = k("$ZodError", Cr), Er = k("$ZodError", Cr, { Parent: Error });
function sn(e, t = (i) => i.message) {
  const i = {}, r = [];
  for (const n of e.issues)
    n.path.length > 0 ? (i[n.path[0]] = i[n.path[0]] || [], i[n.path[0]].push(t(n))) : r.push(t(n));
  return { formErrors: r, fieldErrors: i };
}
function nn(e, t = (i) => i.message) {
  const i = { _errors: [] }, r = (n) => {
    for (const u of n.issues)
      if (u.code === "invalid_union" && u.errors.length)
        u.errors.map((h) => r({ issues: h }));
      else if (u.code === "invalid_key")
        r({ issues: u.issues });
      else if (u.code === "invalid_element")
        r({ issues: u.issues });
      else if (u.path.length === 0)
        i._errors.push(t(u));
      else {
        let h = i, d = 0;
        for (; d < u.path.length; ) {
          const y = u.path[d];
          d === u.path.length - 1 ? (h[y] = h[y] || { _errors: [] }, h[y]._errors.push(t(u))) : h[y] = h[y] || { _errors: [] }, h = h[y], d++;
        }
      }
  };
  return r(e), i;
}
const _i = (e) => (t, i, r, n) => {
  const u = r ? Object.assign(r, { async: !1 }) : { async: !1 }, h = t._zod.run({ value: i, issues: [] }, u);
  if (h instanceof Promise)
    throw new rt();
  if (h.issues.length) {
    const d = new (n?.Err ?? e)(h.issues.map((y) => qe(y, u, Ue())));
    throw Tr(d, n?.callee), d;
  }
  return h.value;
}, ki = (e) => async (t, i, r, n) => {
  const u = r ? Object.assign(r, { async: !0 }) : { async: !0 };
  let h = t._zod.run({ value: i, issues: [] }, u);
  if (h instanceof Promise && (h = await h), h.issues.length) {
    const d = new (n?.Err ?? e)(h.issues.map((y) => qe(y, u, Ue())));
    throw Tr(d, n?.callee), d;
  }
  return h.value;
}, Ut = (e) => (t, i, r) => {
  const n = r ? { ...r, async: !1 } : { async: !1 }, u = t._zod.run({ value: i, issues: [] }, n);
  if (u instanceof Promise)
    throw new rt();
  return u.issues.length ? {
    success: !1,
    error: new (e ?? Ar)(u.issues.map((h) => qe(h, n, Ue())))
  } : { success: !0, data: u.value };
}, an = /* @__PURE__ */ Ut(Er), qt = (e) => async (t, i, r) => {
  const n = r ? Object.assign(r, { async: !0 }) : { async: !0 };
  let u = t._zod.run({ value: i, issues: [] }, n);
  return u instanceof Promise && (u = await u), u.issues.length ? {
    success: !1,
    error: new e(u.issues.map((h) => qe(h, n, Ue())))
  } : { success: !0, data: u.value };
}, on = /* @__PURE__ */ qt(Er), un = (e) => (t, i, r) => {
  const n = r ? Object.assign(r, { direction: "backward" }) : { direction: "backward" };
  return _i(e)(t, i, n);
}, cn = (e) => (t, i, r) => _i(e)(t, i, r), hn = (e) => async (t, i, r) => {
  const n = r ? Object.assign(r, { direction: "backward" }) : { direction: "backward" };
  return ki(e)(t, i, n);
}, ln = (e) => async (t, i, r) => ki(e)(t, i, r), pn = (e) => (t, i, r) => {
  const n = r ? Object.assign(r, { direction: "backward" }) : { direction: "backward" };
  return Ut(e)(t, i, n);
}, fn = (e) => (t, i, r) => Ut(e)(t, i, r), dn = (e) => async (t, i, r) => {
  const n = r ? Object.assign(r, { direction: "backward" }) : { direction: "backward" };
  return qt(e)(t, i, n);
}, mn = (e) => async (t, i, r) => qt(e)(t, i, r), yn = /^[cC][^\s-]{8,}$/, vn = /^[0-9a-z]+$/, xn = /^[0-9A-HJKMNP-TV-Za-hjkmnp-tv-z]{26}$/, gn = /^[0-9a-vA-V]{20}$/, bn = /^[A-Za-z0-9]{27}$/, _n = /^[a-zA-Z0-9_-]{21}$/, kn = /^P(?:(\d+W)|(?!.*W)(?=\d|T\d)(\d+Y)?(\d+M)?(\d+D)?(T(?=\d)(\d+H)?(\d+M)?(\d+([.,]\d+)?S)?)?)$/, Sn = /^([0-9a-fA-F]{8}-[0-9a-fA-F]{4}-[0-9a-fA-F]{4}-[0-9a-fA-F]{4}-[0-9a-fA-F]{12})$/, ji = (e) => e ? new RegExp(`^([0-9a-fA-F]{8}-[0-9a-fA-F]{4}-${e}[0-9a-fA-F]{3}-[89abAB][0-9a-fA-F]{3}-[0-9a-fA-F]{12})$`) : /^([0-9a-fA-F]{8}-[0-9a-fA-F]{4}-[1-8][0-9a-fA-F]{3}-[89abAB][0-9a-fA-F]{3}-[0-9a-fA-F]{12}|00000000-0000-0000-0000-000000000000|ffffffff-ffff-ffff-ffff-ffffffffffff)$/, wn = /^(?!\.)(?!.*\.\.)([A-Za-z0-9_'+\-\.]*)[A-Za-z0-9_+-]@([A-Za-z0-9][A-Za-z0-9\-]*\.)+[A-Za-z]{2,}$/, Tn = "^(\\p{Extended_Pictographic}|\\p{Emoji_Component})+$";
function Pn() {
  return new RegExp(Tn, "u");
}
const Cn = /^(?:(?:25[0-5]|2[0-4][0-9]|1[0-9][0-9]|[1-9][0-9]|[0-9])\.){3}(?:25[0-5]|2[0-4][0-9]|1[0-9][0-9]|[1-9][0-9]|[0-9])$/, An = /^(([0-9a-fA-F]{1,4}:){7}[0-9a-fA-F]{1,4}|([0-9a-fA-F]{1,4}:){1,7}:|([0-9a-fA-F]{1,4}:){1,6}:[0-9a-fA-F]{1,4}|([0-9a-fA-F]{1,4}:){1,5}(:[0-9a-fA-F]{1,4}){1,2}|([0-9a-fA-F]{1,4}:){1,4}(:[0-9a-fA-F]{1,4}){1,3}|([0-9a-fA-F]{1,4}:){1,3}(:[0-9a-fA-F]{1,4}){1,4}|([0-9a-fA-F]{1,4}:){1,2}(:[0-9a-fA-F]{1,4}){1,5}|[0-9a-fA-F]{1,4}:((:[0-9a-fA-F]{1,4}){1,6})|:((:[0-9a-fA-F]{1,4}){1,7}|:))$/, En = /^((25[0-5]|2[0-4][0-9]|1[0-9][0-9]|[1-9][0-9]|[0-9])\.){3}(25[0-5]|2[0-4][0-9]|1[0-9][0-9]|[1-9][0-9]|[0-9])\/([0-9]|[1-2][0-9]|3[0-2])$/, In = /^(([0-9a-fA-F]{1,4}:){7}[0-9a-fA-F]{1,4}|::|([0-9a-fA-F]{1,4})?::([0-9a-fA-F]{1,4}:?){0,6})\/(12[0-8]|1[01][0-9]|[1-9]?[0-9])$/, Nn = /^$|^(?:[0-9a-zA-Z+/]{4})*(?:(?:[0-9a-zA-Z+/]{2}==)|(?:[0-9a-zA-Z+/]{3}=))?$/, Ir = /^[A-Za-z0-9_-]*$/, Ln = /^\+(?:[0-9]){6,14}[0-9]$/, Nr = "(?:(?:\\d\\d[2468][048]|\\d\\d[13579][26]|\\d\\d0[48]|[02468][048]00|[13579][26]00)-02-29|\\d{4}-(?:(?:0[13578]|1[02])-(?:0[1-9]|[12]\\d|3[01])|(?:0[469]|11)-(?:0[1-9]|[12]\\d|30)|(?:02)-(?:0[1-9]|1\\d|2[0-8])))", On = /* @__PURE__ */ new RegExp(`^${Nr}$`);
function Lr(e) {
  const t = "(?:[01]\\d|2[0-3]):[0-5]\\d";
  return typeof e.precision == "number" ? e.precision === -1 ? `${t}` : e.precision === 0 ? `${t}:[0-5]\\d` : `${t}:[0-5]\\d\\.\\d{${e.precision}}` : `${t}(?::[0-5]\\d(?:\\.\\d+)?)?`;
}
function Rn(e) {
  return new RegExp(`^${Lr(e)}$`);
}
function Dn(e) {
  const t = Lr({ precision: e.precision }), i = ["Z"];
  e.local && i.push(""), e.offset && i.push("([+-](?:[01]\\d|2[0-3]):[0-5]\\d)");
  const r = `${t}(?:${i.join("|")})`;
  return new RegExp(`^${Nr}T(?:${r})$`);
}
const Mn = (e) => {
  const t = e ? `[\\s\\S]{${e?.minimum ?? 0},${e?.maximum ?? ""}}` : "[\\s\\S]*";
  return new RegExp(`^${t}$`);
}, Vn = /^-?\d+$/, zn = /^-?\d+(?:\.\d+)?/, jn = /^(?:true|false)$/i, $n = /^[^A-Z]*$/, Fn = /^[^a-z]*$/, me = /* @__PURE__ */ k("$ZodCheck", (e, t) => {
  var i;
  e._zod ?? (e._zod = {}), e._zod.def = t, (i = e._zod).onattach ?? (i.onattach = []);
}), Or = {
  number: "number",
  bigint: "bigint",
  object: "date"
}, Rr = /* @__PURE__ */ k("$ZodCheckLessThan", (e, t) => {
  me.init(e, t);
  const i = Or[typeof t.value];
  e._zod.onattach.push((r) => {
    const n = r._zod.bag, u = (t.inclusive ? n.maximum : n.exclusiveMaximum) ?? Number.POSITIVE_INFINITY;
    t.value < u && (t.inclusive ? n.maximum = t.value : n.exclusiveMaximum = t.value);
  }), e._zod.check = (r) => {
    (t.inclusive ? r.value <= t.value : r.value < t.value) || r.issues.push({
      origin: i,
      code: "too_big",
      maximum: t.value,
      input: r.value,
      inclusive: t.inclusive,
      inst: e,
      continue: !t.abort
    });
  };
}), Dr = /* @__PURE__ */ k("$ZodCheckGreaterThan", (e, t) => {
  me.init(e, t);
  const i = Or[typeof t.value];
  e._zod.onattach.push((r) => {
    const n = r._zod.bag, u = (t.inclusive ? n.minimum : n.exclusiveMinimum) ?? Number.NEGATIVE_INFINITY;
    t.value > u && (t.inclusive ? n.minimum = t.value : n.exclusiveMinimum = t.value);
  }), e._zod.check = (r) => {
    (t.inclusive ? r.value >= t.value : r.value > t.value) || r.issues.push({
      origin: i,
      code: "too_small",
      minimum: t.value,
      input: r.value,
      inclusive: t.inclusive,
      inst: e,
      continue: !t.abort
    });
  };
}), Bn = /* @__PURE__ */ k("$ZodCheckMultipleOf", (e, t) => {
  me.init(e, t), e._zod.onattach.push((i) => {
    var r;
    (r = i._zod.bag).multipleOf ?? (r.multipleOf = t.value);
  }), e._zod.check = (i) => {
    if (typeof i.value != typeof t.value)
      throw new Error("Cannot mix number and bigint in multiple_of check.");
    (typeof i.value == "bigint" ? i.value % t.value === BigInt(0) : Us(i.value, t.value) === 0) || i.issues.push({
      origin: typeof i.value,
      code: "not_multiple_of",
      divisor: t.value,
      input: i.value,
      inst: e,
      continue: !t.abort
    });
  };
}), Zn = /* @__PURE__ */ k("$ZodCheckNumberFormat", (e, t) => {
  me.init(e, t), t.format = t.format || "float64";
  const i = t.format?.includes("int"), r = i ? "int" : "number", [n, u] = Gs[t.format];
  e._zod.onattach.push((h) => {
    const d = h._zod.bag;
    d.format = t.format, d.minimum = n, d.maximum = u, i && (d.pattern = Vn);
  }), e._zod.check = (h) => {
    const d = h.value;
    if (i) {
      if (!Number.isInteger(d)) {
        h.issues.push({
          expected: r,
          format: t.format,
          code: "invalid_type",
          continue: !1,
          input: d,
          inst: e
        });
        return;
      }
      if (!Number.isSafeInteger(d)) {
        d > 0 ? h.issues.push({
          input: d,
          code: "too_big",
          maximum: Number.MAX_SAFE_INTEGER,
          note: "Integers must be within the safe integer range.",
          inst: e,
          origin: r,
          continue: !t.abort
        }) : h.issues.push({
          input: d,
          code: "too_small",
          minimum: Number.MIN_SAFE_INTEGER,
          note: "Integers must be within the safe integer range.",
          inst: e,
          origin: r,
          continue: !t.abort
        });
        return;
      }
    }
    d < n && h.issues.push({
      origin: "number",
      input: d,
      code: "too_small",
      minimum: n,
      inclusive: !0,
      inst: e,
      continue: !t.abort
    }), d > u && h.issues.push({
      origin: "number",
      input: d,
      code: "too_big",
      maximum: u,
      inst: e
    });
  };
}), Un = /* @__PURE__ */ k("$ZodCheckMaxLength", (e, t) => {
  var i;
  me.init(e, t), (i = e._zod.def).when ?? (i.when = (r) => {
    const n = r.value;
    return !xi(n) && n.length !== void 0;
  }), e._zod.onattach.push((r) => {
    const n = r._zod.bag.maximum ?? Number.POSITIVE_INFINITY;
    t.maximum < n && (r._zod.bag.maximum = t.maximum);
  }), e._zod.check = (r) => {
    const n = r.value;
    if (n.length <= t.maximum)
      return;
    const h = bi(n);
    r.issues.push({
      origin: h,
      code: "too_big",
      maximum: t.maximum,
      inclusive: !0,
      input: n,
      inst: e,
      continue: !t.abort
    });
  };
}), qn = /* @__PURE__ */ k("$ZodCheckMinLength", (e, t) => {
  var i;
  me.init(e, t), (i = e._zod.def).when ?? (i.when = (r) => {
    const n = r.value;
    return !xi(n) && n.length !== void 0;
  }), e._zod.onattach.push((r) => {
    const n = r._zod.bag.minimum ?? Number.NEGATIVE_INFINITY;
    t.minimum > n && (r._zod.bag.minimum = t.minimum);
  }), e._zod.check = (r) => {
    const n = r.value;
    if (n.length >= t.minimum)
      return;
    const h = bi(n);
    r.issues.push({
      origin: h,
      code: "too_small",
      minimum: t.minimum,
      inclusive: !0,
      input: n,
      inst: e,
      continue: !t.abort
    });
  };
}), Hn = /* @__PURE__ */ k("$ZodCheckLengthEquals", (e, t) => {
  var i;
  me.init(e, t), (i = e._zod.def).when ?? (i.when = (r) => {
    const n = r.value;
    return !xi(n) && n.length !== void 0;
  }), e._zod.onattach.push((r) => {
    const n = r._zod.bag;
    n.minimum = t.length, n.maximum = t.length, n.length = t.length;
  }), e._zod.check = (r) => {
    const n = r.value, u = n.length;
    if (u === t.length)
      return;
    const h = bi(n), d = u > t.length;
    r.issues.push({
      origin: h,
      ...d ? { code: "too_big", maximum: t.length } : { code: "too_small", minimum: t.length },
      inclusive: !0,
      exact: !0,
      input: r.value,
      inst: e,
      continue: !t.abort
    });
  };
}), Ht = /* @__PURE__ */ k("$ZodCheckStringFormat", (e, t) => {
  var i, r;
  me.init(e, t), e._zod.onattach.push((n) => {
    const u = n._zod.bag;
    u.format = t.format, t.pattern && (u.patterns ?? (u.patterns = /* @__PURE__ */ new Set()), u.patterns.add(t.pattern));
  }), t.pattern ? (i = e._zod).check ?? (i.check = (n) => {
    t.pattern.lastIndex = 0, !t.pattern.test(n.value) && n.issues.push({
      origin: "string",
      code: "invalid_format",
      format: t.format,
      input: n.value,
      ...t.pattern ? { pattern: t.pattern.toString() } : {},
      inst: e,
      continue: !t.abort
    });
  }) : (r = e._zod).check ?? (r.check = () => {
  });
}), Wn = /* @__PURE__ */ k("$ZodCheckRegex", (e, t) => {
  Ht.init(e, t), e._zod.check = (i) => {
    t.pattern.lastIndex = 0, !t.pattern.test(i.value) && i.issues.push({
      origin: "string",
      code: "invalid_format",
      format: "regex",
      input: i.value,
      pattern: t.pattern.toString(),
      inst: e,
      continue: !t.abort
    });
  };
}), Kn = /* @__PURE__ */ k("$ZodCheckLowerCase", (e, t) => {
  t.pattern ?? (t.pattern = $n), Ht.init(e, t);
}), Gn = /* @__PURE__ */ k("$ZodCheckUpperCase", (e, t) => {
  t.pattern ?? (t.pattern = Fn), Ht.init(e, t);
}), Jn = /* @__PURE__ */ k("$ZodCheckIncludes", (e, t) => {
  me.init(e, t);
  const i = nt(t.includes), r = new RegExp(typeof t.position == "number" ? `^.{${t.position}}${i}` : i);
  t.pattern = r, e._zod.onattach.push((n) => {
    const u = n._zod.bag;
    u.patterns ?? (u.patterns = /* @__PURE__ */ new Set()), u.patterns.add(r);
  }), e._zod.check = (n) => {
    n.value.includes(t.includes, t.position) || n.issues.push({
      origin: "string",
      code: "invalid_format",
      format: "includes",
      includes: t.includes,
      input: n.value,
      inst: e,
      continue: !t.abort
    });
  };
}), Xn = /* @__PURE__ */ k("$ZodCheckStartsWith", (e, t) => {
  me.init(e, t);
  const i = new RegExp(`^${nt(t.prefix)}.*`);
  t.pattern ?? (t.pattern = i), e._zod.onattach.push((r) => {
    const n = r._zod.bag;
    n.patterns ?? (n.patterns = /* @__PURE__ */ new Set()), n.patterns.add(i);
  }), e._zod.check = (r) => {
    r.value.startsWith(t.prefix) || r.issues.push({
      origin: "string",
      code: "invalid_format",
      format: "starts_with",
      prefix: t.prefix,
      input: r.value,
      inst: e,
      continue: !t.abort
    });
  };
}), Yn = /* @__PURE__ */ k("$ZodCheckEndsWith", (e, t) => {
  me.init(e, t);
  const i = new RegExp(`.*${nt(t.suffix)}$`);
  t.pattern ?? (t.pattern = i), e._zod.onattach.push((r) => {
    const n = r._zod.bag;
    n.patterns ?? (n.patterns = /* @__PURE__ */ new Set()), n.patterns.add(i);
  }), e._zod.check = (r) => {
    r.value.endsWith(t.suffix) || r.issues.push({
      origin: "string",
      code: "invalid_format",
      format: "ends_with",
      suffix: t.suffix,
      input: r.value,
      inst: e,
      continue: !t.abort
    });
  };
}), Qn = /* @__PURE__ */ k("$ZodCheckOverwrite", (e, t) => {
  me.init(e, t), e._zod.check = (i) => {
    i.value = t.tx(i.value);
  };
});
class ea {
  constructor(t = []) {
    this.content = [], this.indent = 0, this && (this.args = t);
  }
  indented(t) {
    this.indent += 1, t(this), this.indent -= 1;
  }
  write(t) {
    if (typeof t == "function") {
      t(this, { execution: "sync" }), t(this, { execution: "async" });
      return;
    }
    const r = t.split(`
`).filter((h) => h), n = Math.min(...r.map((h) => h.length - h.trimStart().length)), u = r.map((h) => h.slice(n)).map((h) => " ".repeat(this.indent * 2) + h);
    for (const h of u)
      this.content.push(h);
  }
  compile() {
    const t = Function, i = this?.args, n = [...(this?.content ?? [""]).map((u) => `  ${u}`)];
    return new t(...i, n.join(`
`));
  }
}
const ta = {
  major: 4,
  minor: 1,
  patch: 13
}, Y = /* @__PURE__ */ k("$ZodType", (e, t) => {
  var i;
  e ?? (e = {}), e._zod.def = t, e._zod.bag = e._zod.bag || {}, e._zod.version = ta;
  const r = [...e._zod.def.checks ?? []];
  e._zod.traits.has("$ZodCheck") && r.unshift(e);
  for (const n of r)
    for (const u of n._zod.onattach)
      u(e);
  if (r.length === 0)
    (i = e._zod).deferred ?? (i.deferred = []), e._zod.deferred?.push(() => {
      e._zod.run = e._zod.parse;
    });
  else {
    const n = (h, d, y) => {
      let o = tt(h), S;
      for (const w of d) {
        if (w._zod.def.when) {
          if (!w._zod.def.when(h))
            continue;
        } else if (o)
          continue;
        const C = h.issues.length, j = w._zod.check(h);
        if (j instanceof Promise && y?.async === !1)
          throw new rt();
        if (S || j instanceof Promise)
          S = (S ?? Promise.resolve()).then(async () => {
            await j, h.issues.length !== C && (o || (o = tt(h, C)));
          });
        else {
          if (h.issues.length === C)
            continue;
          o || (o = tt(h, C));
        }
      }
      return S ? S.then(() => h) : h;
    }, u = (h, d, y) => {
      if (tt(h))
        return h.aborted = !0, h;
      const o = n(d, r, y);
      if (o instanceof Promise) {
        if (y.async === !1)
          throw new rt();
        return o.then((S) => e._zod.parse(S, y));
      }
      return e._zod.parse(o, y);
    };
    e._zod.run = (h, d) => {
      if (d.skipChecks)
        return e._zod.parse(h, d);
      if (d.direction === "backward") {
        const o = e._zod.parse({ value: h.value, issues: [] }, { ...d, skipChecks: !0 });
        return o instanceof Promise ? o.then((S) => u(S, h, d)) : u(o, h, d);
      }
      const y = e._zod.parse(h, d);
      if (y instanceof Promise) {
        if (d.async === !1)
          throw new rt();
        return y.then((o) => n(o, r, d));
      }
      return n(y, r, d);
    };
  }
  e["~standard"] = {
    validate: (n) => {
      try {
        const u = an(e, n);
        return u.success ? { value: u.data } : { issues: u.error?.issues };
      } catch {
        return on(e, n).then((h) => h.success ? { value: h.data } : { issues: h.error?.issues });
      }
    },
    vendor: "zod",
    version: 1
  };
}), Si = /* @__PURE__ */ k("$ZodString", (e, t) => {
  Y.init(e, t), e._zod.pattern = [...e?._zod.bag?.patterns ?? []].pop() ?? Mn(e._zod.bag), e._zod.parse = (i, r) => {
    if (t.coerce)
      try {
        i.value = String(i.value);
      } catch {
      }
    return typeof i.value == "string" || i.issues.push({
      expected: "string",
      code: "invalid_type",
      input: i.value,
      inst: e
    }), i;
  };
}), K = /* @__PURE__ */ k("$ZodStringFormat", (e, t) => {
  Ht.init(e, t), Si.init(e, t);
}), ia = /* @__PURE__ */ k("$ZodGUID", (e, t) => {
  t.pattern ?? (t.pattern = Sn), K.init(e, t);
}), ra = /* @__PURE__ */ k("$ZodUUID", (e, t) => {
  if (t.version) {
    const r = {
      v1: 1,
      v2: 2,
      v3: 3,
      v4: 4,
      v5: 5,
      v6: 6,
      v7: 7,
      v8: 8
    }[t.version];
    if (r === void 0)
      throw new Error(`Invalid UUID version: "${t.version}"`);
    t.pattern ?? (t.pattern = ji(r));
  } else
    t.pattern ?? (t.pattern = ji());
  K.init(e, t);
}), sa = /* @__PURE__ */ k("$ZodEmail", (e, t) => {
  t.pattern ?? (t.pattern = wn), K.init(e, t);
}), na = /* @__PURE__ */ k("$ZodURL", (e, t) => {
  K.init(e, t), e._zod.check = (i) => {
    try {
      const r = i.value.trim(), n = new URL(r);
      t.hostname && (t.hostname.lastIndex = 0, t.hostname.test(n.hostname) || i.issues.push({
        code: "invalid_format",
        format: "url",
        note: "Invalid hostname",
        pattern: t.hostname.source,
        input: i.value,
        inst: e,
        continue: !t.abort
      })), t.protocol && (t.protocol.lastIndex = 0, t.protocol.test(n.protocol.endsWith(":") ? n.protocol.slice(0, -1) : n.protocol) || i.issues.push({
        code: "invalid_format",
        format: "url",
        note: "Invalid protocol",
        pattern: t.protocol.source,
        input: i.value,
        inst: e,
        continue: !t.abort
      })), t.normalize ? i.value = n.href : i.value = r;
      return;
    } catch {
      i.issues.push({
        code: "invalid_format",
        format: "url",
        input: i.value,
        inst: e,
        continue: !t.abort
      });
    }
  };
}), aa = /* @__PURE__ */ k("$ZodEmoji", (e, t) => {
  t.pattern ?? (t.pattern = Pn()), K.init(e, t);
}), oa = /* @__PURE__ */ k("$ZodNanoID", (e, t) => {
  t.pattern ?? (t.pattern = _n), K.init(e, t);
}), ua = /* @__PURE__ */ k("$ZodCUID", (e, t) => {
  t.pattern ?? (t.pattern = yn), K.init(e, t);
}), ca = /* @__PURE__ */ k("$ZodCUID2", (e, t) => {
  t.pattern ?? (t.pattern = vn), K.init(e, t);
}), ha = /* @__PURE__ */ k("$ZodULID", (e, t) => {
  t.pattern ?? (t.pattern = xn), K.init(e, t);
}), la = /* @__PURE__ */ k("$ZodXID", (e, t) => {
  t.pattern ?? (t.pattern = gn), K.init(e, t);
}), pa = /* @__PURE__ */ k("$ZodKSUID", (e, t) => {
  t.pattern ?? (t.pattern = bn), K.init(e, t);
}), fa = /* @__PURE__ */ k("$ZodISODateTime", (e, t) => {
  t.pattern ?? (t.pattern = Dn(t)), K.init(e, t);
}), da = /* @__PURE__ */ k("$ZodISODate", (e, t) => {
  t.pattern ?? (t.pattern = On), K.init(e, t);
}), ma = /* @__PURE__ */ k("$ZodISOTime", (e, t) => {
  t.pattern ?? (t.pattern = Rn(t)), K.init(e, t);
}), ya = /* @__PURE__ */ k("$ZodISODuration", (e, t) => {
  t.pattern ?? (t.pattern = kn), K.init(e, t);
}), va = /* @__PURE__ */ k("$ZodIPv4", (e, t) => {
  t.pattern ?? (t.pattern = Cn), K.init(e, t), e._zod.bag.format = "ipv4";
}), xa = /* @__PURE__ */ k("$ZodIPv6", (e, t) => {
  t.pattern ?? (t.pattern = An), K.init(e, t), e._zod.bag.format = "ipv6", e._zod.check = (i) => {
    try {
      new URL(`http://[${i.value}]`);
    } catch {
      i.issues.push({
        code: "invalid_format",
        format: "ipv6",
        input: i.value,
        inst: e,
        continue: !t.abort
      });
    }
  };
}), ga = /* @__PURE__ */ k("$ZodCIDRv4", (e, t) => {
  t.pattern ?? (t.pattern = En), K.init(e, t);
}), ba = /* @__PURE__ */ k("$ZodCIDRv6", (e, t) => {
  t.pattern ?? (t.pattern = In), K.init(e, t), e._zod.check = (i) => {
    const r = i.value.split("/");
    try {
      if (r.length !== 2)
        throw new Error();
      const [n, u] = r;
      if (!u)
        throw new Error();
      const h = Number(u);
      if (`${h}` !== u)
        throw new Error();
      if (h < 0 || h > 128)
        throw new Error();
      new URL(`http://[${n}]`);
    } catch {
      i.issues.push({
        code: "invalid_format",
        format: "cidrv6",
        input: i.value,
        inst: e,
        continue: !t.abort
      });
    }
  };
});
function Mr(e) {
  if (e === "")
    return !0;
  if (e.length % 4 !== 0)
    return !1;
  try {
    return atob(e), !0;
  } catch {
    return !1;
  }
}
const _a = /* @__PURE__ */ k("$ZodBase64", (e, t) => {
  t.pattern ?? (t.pattern = Nn), K.init(e, t), e._zod.bag.contentEncoding = "base64", e._zod.check = (i) => {
    Mr(i.value) || i.issues.push({
      code: "invalid_format",
      format: "base64",
      input: i.value,
      inst: e,
      continue: !t.abort
    });
  };
});
function ka(e) {
  if (!Ir.test(e))
    return !1;
  const t = e.replace(/[-_]/g, (r) => r === "-" ? "+" : "/"), i = t.padEnd(Math.ceil(t.length / 4) * 4, "=");
  return Mr(i);
}
const Sa = /* @__PURE__ */ k("$ZodBase64URL", (e, t) => {
  t.pattern ?? (t.pattern = Ir), K.init(e, t), e._zod.bag.contentEncoding = "base64url", e._zod.check = (i) => {
    ka(i.value) || i.issues.push({
      code: "invalid_format",
      format: "base64url",
      input: i.value,
      inst: e,
      continue: !t.abort
    });
  };
}), wa = /* @__PURE__ */ k("$ZodE164", (e, t) => {
  t.pattern ?? (t.pattern = Ln), K.init(e, t);
});
function Ta(e, t = null) {
  try {
    const i = e.split(".");
    if (i.length !== 3)
      return !1;
    const [r] = i;
    if (!r)
      return !1;
    const n = JSON.parse(atob(r));
    return !("typ" in n && n?.typ !== "JWT" || !n.alg || t && (!("alg" in n) || n.alg !== t));
  } catch {
    return !1;
  }
}
const Pa = /* @__PURE__ */ k("$ZodJWT", (e, t) => {
  K.init(e, t), e._zod.check = (i) => {
    Ta(i.value, t.alg) || i.issues.push({
      code: "invalid_format",
      format: "jwt",
      input: i.value,
      inst: e,
      continue: !t.abort
    });
  };
}), Vr = /* @__PURE__ */ k("$ZodNumber", (e, t) => {
  Y.init(e, t), e._zod.pattern = e._zod.bag.pattern ?? zn, e._zod.parse = (i, r) => {
    if (t.coerce)
      try {
        i.value = Number(i.value);
      } catch {
      }
    const n = i.value;
    if (typeof n == "number" && !Number.isNaN(n) && Number.isFinite(n))
      return i;
    const u = typeof n == "number" ? Number.isNaN(n) ? "NaN" : Number.isFinite(n) ? void 0 : "Infinity" : void 0;
    return i.issues.push({
      expected: "number",
      code: "invalid_type",
      input: n,
      inst: e,
      ...u ? { received: u } : {}
    }), i;
  };
}), Ca = /* @__PURE__ */ k("$ZodNumberFormat", (e, t) => {
  Zn.init(e, t), Vr.init(e, t);
}), Aa = /* @__PURE__ */ k("$ZodBoolean", (e, t) => {
  Y.init(e, t), e._zod.pattern = jn, e._zod.parse = (i, r) => {
    if (t.coerce)
      try {
        i.value = !!i.value;
      } catch {
      }
    const n = i.value;
    return typeof n == "boolean" || i.issues.push({
      expected: "boolean",
      code: "invalid_type",
      input: n,
      inst: e
    }), i;
  };
}), Ea = /* @__PURE__ */ k("$ZodUnknown", (e, t) => {
  Y.init(e, t), e._zod.parse = (i) => i;
}), Ia = /* @__PURE__ */ k("$ZodNever", (e, t) => {
  Y.init(e, t), e._zod.parse = (i, r) => (i.issues.push({
    expected: "never",
    code: "invalid_type",
    input: i.value,
    inst: e
  }), i);
});
function $i(e, t, i) {
  e.issues.length && t.issues.push(...it(i, e.issues)), t.value[i] = e.value;
}
const Na = /* @__PURE__ */ k("$ZodArray", (e, t) => {
  Y.init(e, t), e._zod.parse = (i, r) => {
    const n = i.value;
    if (!Array.isArray(n))
      return i.issues.push({
        expected: "array",
        code: "invalid_type",
        input: n,
        inst: e
      }), i;
    i.value = Array(n.length);
    const u = [];
    for (let h = 0; h < n.length; h++) {
      const d = n[h], y = t.element._zod.run({
        value: d,
        issues: []
      }, r);
      y instanceof Promise ? u.push(y.then((o) => $i(o, i, h))) : $i(y, i, h);
    }
    return u.length ? Promise.all(u).then(() => i) : i;
  };
});
function Mt(e, t, i, r) {
  e.issues.length && t.issues.push(...it(i, e.issues)), e.value === void 0 ? i in r && (t.value[i] = void 0) : t.value[i] = e.value;
}
function zr(e) {
  const t = Object.keys(e.shape);
  for (const r of t)
    if (!e.shape?.[r]?._zod?.traits?.has("$ZodType"))
      throw new Error(`Invalid element at key "${r}": expected a Zod schema`);
  const i = Ks(e.shape);
  return {
    ...e,
    keys: t,
    keySet: new Set(t),
    numKeys: t.length,
    optionalKeys: new Set(i)
  };
}
function jr(e, t, i, r, n, u) {
  const h = [], d = n.keySet, y = n.catchall._zod, o = y.def.type;
  for (const S in t) {
    if (d.has(S))
      continue;
    if (o === "never") {
      h.push(S);
      continue;
    }
    const w = y.run({ value: t[S], issues: [] }, r);
    w instanceof Promise ? e.push(w.then((C) => Mt(C, i, S, t))) : Mt(w, i, S, t);
  }
  return h.length && i.issues.push({
    code: "unrecognized_keys",
    keys: h,
    input: t,
    inst: u
  }), e.length ? Promise.all(e).then(() => i) : i;
}
const La = /* @__PURE__ */ k("$ZodObject", (e, t) => {
  if (Y.init(e, t), !Object.getOwnPropertyDescriptor(t, "shape")?.get) {
    const d = t.shape;
    Object.defineProperty(t, "shape", {
      get: () => {
        const y = { ...d };
        return Object.defineProperty(t, "shape", {
          value: y
        }), y;
      }
    });
  }
  const r = vi(() => zr(t));
  U(e._zod, "propValues", () => {
    const d = t.shape, y = {};
    for (const o in d) {
      const S = d[o]._zod;
      if (S.values) {
        y[o] ?? (y[o] = /* @__PURE__ */ new Set());
        for (const w of S.values)
          y[o].add(w);
      }
    }
    return y;
  });
  const n = Dt, u = t.catchall;
  let h;
  e._zod.parse = (d, y) => {
    h ?? (h = r.value);
    const o = d.value;
    if (!n(o))
      return d.issues.push({
        expected: "object",
        code: "invalid_type",
        input: o,
        inst: e
      }), d;
    d.value = {};
    const S = [], w = h.shape;
    for (const C of h.keys) {
      const Z = w[C]._zod.run({ value: o[C], issues: [] }, y);
      Z instanceof Promise ? S.push(Z.then((pe) => Mt(pe, d, C, o))) : Mt(Z, d, C, o);
    }
    return u ? jr(S, o, d, y, r.value, e) : S.length ? Promise.all(S).then(() => d) : d;
  };
}), Oa = /* @__PURE__ */ k("$ZodObjectJIT", (e, t) => {
  La.init(e, t);
  const i = e._zod.parse, r = vi(() => zr(t)), n = (C) => {
    const j = new ea(["shape", "payload", "ctx"]), Z = r.value, pe = (Ce) => {
      const be = zi(Ce);
      return `shape[${be}]._zod.run({ value: input[${be}], issues: [] }, ctx)`;
    };
    j.write("const input = payload.value;");
    const D = /* @__PURE__ */ Object.create(null);
    let se = 0;
    for (const Ce of Z.keys)
      D[Ce] = `key_${se++}`;
    j.write("const newResult = {};");
    for (const Ce of Z.keys) {
      const be = D[Ce], Ge = zi(Ce);
      j.write(`const ${be} = ${pe(Ce)};`), j.write(`
        if (${be}.issues.length) {
          payload.issues = payload.issues.concat(${be}.issues.map(iss => ({
            ...iss,
            path: iss.path ? [${Ge}, ...iss.path] : [${Ge}]
          })));
        }
        
        
        if (${be}.value === undefined) {
          if (${Ge} in input) {
            newResult[${Ge}] = undefined;
          }
        } else {
          newResult[${Ge}] = ${be}.value;
        }
        
      `);
    }
    j.write("payload.value = newResult;"), j.write("return payload;");
    const ft = j.compile();
    return (Ce, be) => ft(C, Ce, be);
  };
  let u;
  const h = Dt, d = !wr.jitless, o = d && Hs.value, S = t.catchall;
  let w;
  e._zod.parse = (C, j) => {
    w ?? (w = r.value);
    const Z = C.value;
    return h(Z) ? d && o && j?.async === !1 && j.jitless !== !0 ? (u || (u = n(t.shape)), C = u(C, j), S ? jr([], Z, C, j, w, e) : C) : i(C, j) : (C.issues.push({
      expected: "object",
      code: "invalid_type",
      input: Z,
      inst: e
    }), C);
  };
});
function Fi(e, t, i, r) {
  for (const u of e)
    if (u.issues.length === 0)
      return t.value = u.value, t;
  const n = e.filter((u) => !tt(u));
  return n.length === 1 ? (t.value = n[0].value, n[0]) : (t.issues.push({
    code: "invalid_union",
    input: t.value,
    inst: i,
    errors: e.map((u) => u.issues.map((h) => qe(h, r, Ue())))
  }), t);
}
const Ra = /* @__PURE__ */ k("$ZodUnion", (e, t) => {
  Y.init(e, t), U(e._zod, "optin", () => t.options.some((n) => n._zod.optin === "optional") ? "optional" : void 0), U(e._zod, "optout", () => t.options.some((n) => n._zod.optout === "optional") ? "optional" : void 0), U(e._zod, "values", () => {
    if (t.options.every((n) => n._zod.values))
      return new Set(t.options.flatMap((n) => Array.from(n._zod.values)));
  }), U(e._zod, "pattern", () => {
    if (t.options.every((n) => n._zod.pattern)) {
      const n = t.options.map((u) => u._zod.pattern);
      return new RegExp(`^(${n.map((u) => gi(u.source)).join("|")})$`);
    }
  });
  const i = t.options.length === 1, r = t.options[0]._zod.run;
  e._zod.parse = (n, u) => {
    if (i)
      return r(n, u);
    let h = !1;
    const d = [];
    for (const y of t.options) {
      const o = y._zod.run({
        value: n.value,
        issues: []
      }, u);
      if (o instanceof Promise)
        d.push(o), h = !0;
      else {
        if (o.issues.length === 0)
          return o;
        d.push(o);
      }
    }
    return h ? Promise.all(d).then((y) => Fi(y, n, e, u)) : Fi(d, n, e, u);
  };
}), Da = /* @__PURE__ */ k("$ZodIntersection", (e, t) => {
  Y.init(e, t), e._zod.parse = (i, r) => {
    const n = i.value, u = t.left._zod.run({ value: n, issues: [] }, r), h = t.right._zod.run({ value: n, issues: [] }, r);
    return u instanceof Promise || h instanceof Promise ? Promise.all([u, h]).then(([y, o]) => Bi(i, y, o)) : Bi(i, u, h);
  };
});
function hi(e, t) {
  if (e === t)
    return { valid: !0, data: e };
  if (e instanceof Date && t instanceof Date && +e == +t)
    return { valid: !0, data: e };
  if (st(e) && st(t)) {
    const i = Object.keys(t), r = Object.keys(e).filter((u) => i.indexOf(u) !== -1), n = { ...e, ...t };
    for (const u of r) {
      const h = hi(e[u], t[u]);
      if (!h.valid)
        return {
          valid: !1,
          mergeErrorPath: [u, ...h.mergeErrorPath]
        };
      n[u] = h.data;
    }
    return { valid: !0, data: n };
  }
  if (Array.isArray(e) && Array.isArray(t)) {
    if (e.length !== t.length)
      return { valid: !1, mergeErrorPath: [] };
    const i = [];
    for (let r = 0; r < e.length; r++) {
      const n = e[r], u = t[r], h = hi(n, u);
      if (!h.valid)
        return {
          valid: !1,
          mergeErrorPath: [r, ...h.mergeErrorPath]
        };
      i.push(h.data);
    }
    return { valid: !0, data: i };
  }
  return { valid: !1, mergeErrorPath: [] };
}
function Bi(e, t, i) {
  if (t.issues.length && e.issues.push(...t.issues), i.issues.length && e.issues.push(...i.issues), tt(e))
    return e;
  const r = hi(t.value, i.value);
  if (!r.valid)
    throw new Error(`Unmergable intersection. Error path: ${JSON.stringify(r.mergeErrorPath)}`);
  return e.value = r.data, e;
}
const Ma = /* @__PURE__ */ k("$ZodRecord", (e, t) => {
  Y.init(e, t), e._zod.parse = (i, r) => {
    const n = i.value;
    if (!st(n))
      return i.issues.push({
        expected: "record",
        code: "invalid_type",
        input: n,
        inst: e
      }), i;
    const u = [], h = t.keyType._zod.values;
    if (h) {
      i.value = {};
      const d = /* @__PURE__ */ new Set();
      for (const o of h)
        if (typeof o == "string" || typeof o == "number" || typeof o == "symbol") {
          d.add(typeof o == "number" ? o.toString() : o);
          const S = t.valueType._zod.run({ value: n[o], issues: [] }, r);
          S instanceof Promise ? u.push(S.then((w) => {
            w.issues.length && i.issues.push(...it(o, w.issues)), i.value[o] = w.value;
          })) : (S.issues.length && i.issues.push(...it(o, S.issues)), i.value[o] = S.value);
        }
      let y;
      for (const o in n)
        d.has(o) || (y = y ?? [], y.push(o));
      y && y.length > 0 && i.issues.push({
        code: "unrecognized_keys",
        input: n,
        inst: e,
        keys: y
      });
    } else {
      i.value = {};
      for (const d of Reflect.ownKeys(n)) {
        if (d === "__proto__")
          continue;
        const y = t.keyType._zod.run({ value: d, issues: [] }, r);
        if (y instanceof Promise)
          throw new Error("Async schemas not supported in object keys currently");
        if (y.issues.length) {
          i.issues.push({
            code: "invalid_key",
            origin: "record",
            issues: y.issues.map((S) => qe(S, r, Ue())),
            input: d,
            path: [d],
            inst: e
          }), i.value[y.value] = y.value;
          continue;
        }
        const o = t.valueType._zod.run({ value: n[d], issues: [] }, r);
        o instanceof Promise ? u.push(o.then((S) => {
          S.issues.length && i.issues.push(...it(d, S.issues)), i.value[y.value] = S.value;
        })) : (o.issues.length && i.issues.push(...it(d, o.issues)), i.value[y.value] = o.value);
      }
    }
    return u.length ? Promise.all(u).then(() => i) : i;
  };
}), Va = /* @__PURE__ */ k("$ZodEnum", (e, t) => {
  Y.init(e, t);
  const i = Zs(t.entries), r = new Set(i);
  e._zod.values = r, e._zod.pattern = new RegExp(`^(${i.filter((n) => Ws.has(typeof n)).map((n) => typeof n == "string" ? nt(n) : n.toString()).join("|")})$`), e._zod.parse = (n, u) => {
    const h = n.value;
    return r.has(h) || n.issues.push({
      code: "invalid_value",
      values: i,
      input: h,
      inst: e
    }), n;
  };
}), za = /* @__PURE__ */ k("$ZodLiteral", (e, t) => {
  if (Y.init(e, t), t.values.length === 0)
    throw new Error("Cannot create literal schema with no valid values");
  const i = new Set(t.values);
  e._zod.values = i, e._zod.pattern = new RegExp(`^(${t.values.map((r) => typeof r == "string" ? nt(r) : r ? nt(r.toString()) : String(r)).join("|")})$`), e._zod.parse = (r, n) => {
    const u = r.value;
    return i.has(u) || r.issues.push({
      code: "invalid_value",
      values: t.values,
      input: u,
      inst: e
    }), r;
  };
}), ja = /* @__PURE__ */ k("$ZodTransform", (e, t) => {
  Y.init(e, t), e._zod.parse = (i, r) => {
    if (r.direction === "backward")
      throw new Sr(e.constructor.name);
    const n = t.transform(i.value, i);
    if (r.async)
      return (n instanceof Promise ? n : Promise.resolve(n)).then((h) => (i.value = h, i));
    if (n instanceof Promise)
      throw new rt();
    return i.value = n, i;
  };
});
function Zi(e, t) {
  return e.issues.length && t === void 0 ? { issues: [], value: void 0 } : e;
}
const $a = /* @__PURE__ */ k("$ZodOptional", (e, t) => {
  Y.init(e, t), e._zod.optin = "optional", e._zod.optout = "optional", U(e._zod, "values", () => t.innerType._zod.values ? /* @__PURE__ */ new Set([...t.innerType._zod.values, void 0]) : void 0), U(e._zod, "pattern", () => {
    const i = t.innerType._zod.pattern;
    return i ? new RegExp(`^(${gi(i.source)})?$`) : void 0;
  }), e._zod.parse = (i, r) => {
    if (t.innerType._zod.optin === "optional") {
      const n = t.innerType._zod.run(i, r);
      return n instanceof Promise ? n.then((u) => Zi(u, i.value)) : Zi(n, i.value);
    }
    return i.value === void 0 ? i : t.innerType._zod.run(i, r);
  };
}), Fa = /* @__PURE__ */ k("$ZodNullable", (e, t) => {
  Y.init(e, t), U(e._zod, "optin", () => t.innerType._zod.optin), U(e._zod, "optout", () => t.innerType._zod.optout), U(e._zod, "pattern", () => {
    const i = t.innerType._zod.pattern;
    return i ? new RegExp(`^(${gi(i.source)}|null)$`) : void 0;
  }), U(e._zod, "values", () => t.innerType._zod.values ? /* @__PURE__ */ new Set([...t.innerType._zod.values, null]) : void 0), e._zod.parse = (i, r) => i.value === null ? i : t.innerType._zod.run(i, r);
}), Ba = /* @__PURE__ */ k("$ZodDefault", (e, t) => {
  Y.init(e, t), e._zod.optin = "optional", U(e._zod, "values", () => t.innerType._zod.values), e._zod.parse = (i, r) => {
    if (r.direction === "backward")
      return t.innerType._zod.run(i, r);
    if (i.value === void 0)
      return i.value = t.defaultValue, i;
    const n = t.innerType._zod.run(i, r);
    return n instanceof Promise ? n.then((u) => Ui(u, t)) : Ui(n, t);
  };
});
function Ui(e, t) {
  return e.value === void 0 && (e.value = t.defaultValue), e;
}
const Za = /* @__PURE__ */ k("$ZodPrefault", (e, t) => {
  Y.init(e, t), e._zod.optin = "optional", U(e._zod, "values", () => t.innerType._zod.values), e._zod.parse = (i, r) => (r.direction === "backward" || i.value === void 0 && (i.value = t.defaultValue), t.innerType._zod.run(i, r));
}), Ua = /* @__PURE__ */ k("$ZodNonOptional", (e, t) => {
  Y.init(e, t), U(e._zod, "values", () => {
    const i = t.innerType._zod.values;
    return i ? new Set([...i].filter((r) => r !== void 0)) : void 0;
  }), e._zod.parse = (i, r) => {
    const n = t.innerType._zod.run(i, r);
    return n instanceof Promise ? n.then((u) => qi(u, e)) : qi(n, e);
  };
});
function qi(e, t) {
  return !e.issues.length && e.value === void 0 && e.issues.push({
    code: "invalid_type",
    expected: "nonoptional",
    input: e.value,
    inst: t
  }), e;
}
const qa = /* @__PURE__ */ k("$ZodCatch", (e, t) => {
  Y.init(e, t), U(e._zod, "optin", () => t.innerType._zod.optin), U(e._zod, "optout", () => t.innerType._zod.optout), U(e._zod, "values", () => t.innerType._zod.values), e._zod.parse = (i, r) => {
    if (r.direction === "backward")
      return t.innerType._zod.run(i, r);
    const n = t.innerType._zod.run(i, r);
    return n instanceof Promise ? n.then((u) => (i.value = u.value, u.issues.length && (i.value = t.catchValue({
      ...i,
      error: {
        issues: u.issues.map((h) => qe(h, r, Ue()))
      },
      input: i.value
    }), i.issues = []), i)) : (i.value = n.value, n.issues.length && (i.value = t.catchValue({
      ...i,
      error: {
        issues: n.issues.map((u) => qe(u, r, Ue()))
      },
      input: i.value
    }), i.issues = []), i);
  };
}), Ha = /* @__PURE__ */ k("$ZodPipe", (e, t) => {
  Y.init(e, t), U(e._zod, "values", () => t.in._zod.values), U(e._zod, "optin", () => t.in._zod.optin), U(e._zod, "optout", () => t.out._zod.optout), U(e._zod, "propValues", () => t.in._zod.propValues), e._zod.parse = (i, r) => {
    if (r.direction === "backward") {
      const u = t.out._zod.run(i, r);
      return u instanceof Promise ? u.then((h) => Nt(h, t.in, r)) : Nt(u, t.in, r);
    }
    const n = t.in._zod.run(i, r);
    return n instanceof Promise ? n.then((u) => Nt(u, t.out, r)) : Nt(n, t.out, r);
  };
});
function Nt(e, t, i) {
  return e.issues.length ? (e.aborted = !0, e) : t._zod.run({ value: e.value, issues: e.issues }, i);
}
const Wa = /* @__PURE__ */ k("$ZodReadonly", (e, t) => {
  Y.init(e, t), U(e._zod, "propValues", () => t.innerType._zod.propValues), U(e._zod, "values", () => t.innerType._zod.values), U(e._zod, "optin", () => t.innerType?._zod?.optin), U(e._zod, "optout", () => t.innerType?._zod?.optout), e._zod.parse = (i, r) => {
    if (r.direction === "backward")
      return t.innerType._zod.run(i, r);
    const n = t.innerType._zod.run(i, r);
    return n instanceof Promise ? n.then(Hi) : Hi(n);
  };
});
function Hi(e) {
  return e.value = Object.freeze(e.value), e;
}
const Ka = /* @__PURE__ */ k("$ZodCustom", (e, t) => {
  me.init(e, t), Y.init(e, t), e._zod.parse = (i, r) => i, e._zod.check = (i) => {
    const r = i.value, n = t.fn(r);
    if (n instanceof Promise)
      return n.then((u) => Wi(u, i, r, e));
    Wi(n, i, r, e);
  };
});
function Wi(e, t, i, r) {
  if (!e) {
    const n = {
      code: "custom",
      input: i,
      inst: r,
      // incorporates params.error into issue reporting
      path: [...r._zod.def.path ?? []],
      // incorporates params.error into issue reporting
      continue: !r._zod.def.abort
      // params: inst._zod.def.params,
    };
    r._zod.def.params && (n.params = r._zod.def.params), t.issues.push(bt(n));
  }
}
var Ki;
class Ga {
  constructor() {
    this._map = /* @__PURE__ */ new WeakMap(), this._idmap = /* @__PURE__ */ new Map();
  }
  add(t, ...i) {
    const r = i[0];
    if (this._map.set(t, r), r && typeof r == "object" && "id" in r) {
      if (this._idmap.has(r.id))
        throw new Error(`ID ${r.id} already exists in the registry`);
      this._idmap.set(r.id, t);
    }
    return this;
  }
  clear() {
    return this._map = /* @__PURE__ */ new WeakMap(), this._idmap = /* @__PURE__ */ new Map(), this;
  }
  remove(t) {
    const i = this._map.get(t);
    return i && typeof i == "object" && "id" in i && this._idmap.delete(i.id), this._map.delete(t), this;
  }
  get(t) {
    const i = t._zod.parent;
    if (i) {
      const r = { ...this.get(i) ?? {} };
      delete r.id;
      const n = { ...r, ...this._map.get(t) };
      return Object.keys(n).length ? n : void 0;
    }
    return this._map.get(t);
  }
  has(t) {
    return this._map.has(t);
  }
}
function Ja() {
  return new Ga();
}
(Ki = globalThis).__zod_globalRegistry ?? (Ki.__zod_globalRegistry = Ja());
const Lt = globalThis.__zod_globalRegistry;
function Xa(e, t) {
  return new e({
    type: "string",
    ...R(t)
  });
}
function Ya(e, t) {
  return new e({
    type: "string",
    format: "email",
    check: "string_format",
    abort: !1,
    ...R(t)
  });
}
function Gi(e, t) {
  return new e({
    type: "string",
    format: "guid",
    check: "string_format",
    abort: !1,
    ...R(t)
  });
}
function Qa(e, t) {
  return new e({
    type: "string",
    format: "uuid",
    check: "string_format",
    abort: !1,
    ...R(t)
  });
}
function eo(e, t) {
  return new e({
    type: "string",
    format: "uuid",
    check: "string_format",
    abort: !1,
    version: "v4",
    ...R(t)
  });
}
function to(e, t) {
  return new e({
    type: "string",
    format: "uuid",
    check: "string_format",
    abort: !1,
    version: "v6",
    ...R(t)
  });
}
function io(e, t) {
  return new e({
    type: "string",
    format: "uuid",
    check: "string_format",
    abort: !1,
    version: "v7",
    ...R(t)
  });
}
function ro(e, t) {
  return new e({
    type: "string",
    format: "url",
    check: "string_format",
    abort: !1,
    ...R(t)
  });
}
function so(e, t) {
  return new e({
    type: "string",
    format: "emoji",
    check: "string_format",
    abort: !1,
    ...R(t)
  });
}
function no(e, t) {
  return new e({
    type: "string",
    format: "nanoid",
    check: "string_format",
    abort: !1,
    ...R(t)
  });
}
function ao(e, t) {
  return new e({
    type: "string",
    format: "cuid",
    check: "string_format",
    abort: !1,
    ...R(t)
  });
}
function oo(e, t) {
  return new e({
    type: "string",
    format: "cuid2",
    check: "string_format",
    abort: !1,
    ...R(t)
  });
}
function uo(e, t) {
  return new e({
    type: "string",
    format: "ulid",
    check: "string_format",
    abort: !1,
    ...R(t)
  });
}
function co(e, t) {
  return new e({
    type: "string",
    format: "xid",
    check: "string_format",
    abort: !1,
    ...R(t)
  });
}
function ho(e, t) {
  return new e({
    type: "string",
    format: "ksuid",
    check: "string_format",
    abort: !1,
    ...R(t)
  });
}
function lo(e, t) {
  return new e({
    type: "string",
    format: "ipv4",
    check: "string_format",
    abort: !1,
    ...R(t)
  });
}
function po(e, t) {
  return new e({
    type: "string",
    format: "ipv6",
    check: "string_format",
    abort: !1,
    ...R(t)
  });
}
function fo(e, t) {
  return new e({
    type: "string",
    format: "cidrv4",
    check: "string_format",
    abort: !1,
    ...R(t)
  });
}
function mo(e, t) {
  return new e({
    type: "string",
    format: "cidrv6",
    check: "string_format",
    abort: !1,
    ...R(t)
  });
}
function yo(e, t) {
  return new e({
    type: "string",
    format: "base64",
    check: "string_format",
    abort: !1,
    ...R(t)
  });
}
function vo(e, t) {
  return new e({
    type: "string",
    format: "base64url",
    check: "string_format",
    abort: !1,
    ...R(t)
  });
}
function xo(e, t) {
  return new e({
    type: "string",
    format: "e164",
    check: "string_format",
    abort: !1,
    ...R(t)
  });
}
function go(e, t) {
  return new e({
    type: "string",
    format: "jwt",
    check: "string_format",
    abort: !1,
    ...R(t)
  });
}
function bo(e, t) {
  return new e({
    type: "string",
    format: "datetime",
    check: "string_format",
    offset: !1,
    local: !1,
    precision: null,
    ...R(t)
  });
}
function _o(e, t) {
  return new e({
    type: "string",
    format: "date",
    check: "string_format",
    ...R(t)
  });
}
function ko(e, t) {
  return new e({
    type: "string",
    format: "time",
    check: "string_format",
    precision: null,
    ...R(t)
  });
}
function So(e, t) {
  return new e({
    type: "string",
    format: "duration",
    check: "string_format",
    ...R(t)
  });
}
function wo(e, t) {
  return new e({
    type: "number",
    checks: [],
    ...R(t)
  });
}
function To(e, t) {
  return new e({
    type: "number",
    check: "number_format",
    abort: !1,
    format: "safeint",
    ...R(t)
  });
}
function Po(e, t) {
  return new e({
    type: "boolean",
    ...R(t)
  });
}
function Co(e) {
  return new e({
    type: "unknown"
  });
}
function Ao(e, t) {
  return new e({
    type: "never",
    ...R(t)
  });
}
function Ji(e, t) {
  return new Rr({
    check: "less_than",
    ...R(t),
    value: e,
    inclusive: !1
  });
}
function ii(e, t) {
  return new Rr({
    check: "less_than",
    ...R(t),
    value: e,
    inclusive: !0
  });
}
function Xi(e, t) {
  return new Dr({
    check: "greater_than",
    ...R(t),
    value: e,
    inclusive: !1
  });
}
function ri(e, t) {
  return new Dr({
    check: "greater_than",
    ...R(t),
    value: e,
    inclusive: !0
  });
}
function Yi(e, t) {
  return new Bn({
    check: "multiple_of",
    ...R(t),
    value: e
  });
}
function $r(e, t) {
  return new Un({
    check: "max_length",
    ...R(t),
    maximum: e
  });
}
function Vt(e, t) {
  return new qn({
    check: "min_length",
    ...R(t),
    minimum: e
  });
}
function Fr(e, t) {
  return new Hn({
    check: "length_equals",
    ...R(t),
    length: e
  });
}
function Eo(e, t) {
  return new Wn({
    check: "string_format",
    format: "regex",
    ...R(t),
    pattern: e
  });
}
function Io(e) {
  return new Kn({
    check: "string_format",
    format: "lowercase",
    ...R(e)
  });
}
function No(e) {
  return new Gn({
    check: "string_format",
    format: "uppercase",
    ...R(e)
  });
}
function Lo(e, t) {
  return new Jn({
    check: "string_format",
    format: "includes",
    ...R(t),
    includes: e
  });
}
function Oo(e, t) {
  return new Xn({
    check: "string_format",
    format: "starts_with",
    ...R(t),
    prefix: e
  });
}
function Ro(e, t) {
  return new Yn({
    check: "string_format",
    format: "ends_with",
    ...R(t),
    suffix: e
  });
}
function ct(e) {
  return new Qn({
    check: "overwrite",
    tx: e
  });
}
function Do(e) {
  return ct((t) => t.normalize(e));
}
function Mo() {
  return ct((e) => e.trim());
}
function Vo() {
  return ct((e) => e.toLowerCase());
}
function zo() {
  return ct((e) => e.toUpperCase());
}
function jo() {
  return ct((e) => qs(e));
}
function $o(e, t, i) {
  return new e({
    type: "array",
    element: t,
    // get element() {
    //   return element;
    // },
    ...R(i)
  });
}
function Fo(e, t, i) {
  return new e({
    type: "custom",
    check: "custom",
    fn: t,
    ...R(i)
  });
}
function Bo(e) {
  const t = Zo((i) => (i.addIssue = (r) => {
    if (typeof r == "string")
      i.issues.push(bt(r, i.value, t._zod.def));
    else {
      const n = r;
      n.fatal && (n.continue = !1), n.code ?? (n.code = "custom"), n.input ?? (n.input = i.value), n.inst ?? (n.inst = t), n.continue ?? (n.continue = !t._zod.def.abort), i.issues.push(bt(n));
    }
  }, e(i.value, i)));
  return t;
}
function Zo(e, t) {
  const i = new me({
    check: "custom",
    ...R(t)
  });
  return i._zod.check = e, i;
}
const Uo = /* @__PURE__ */ k("ZodISODateTime", (e, t) => {
  fa.init(e, t), Q.init(e, t);
});
function qo(e) {
  return bo(Uo, e);
}
const Ho = /* @__PURE__ */ k("ZodISODate", (e, t) => {
  da.init(e, t), Q.init(e, t);
});
function Wo(e) {
  return _o(Ho, e);
}
const Ko = /* @__PURE__ */ k("ZodISOTime", (e, t) => {
  ma.init(e, t), Q.init(e, t);
});
function Go(e) {
  return ko(Ko, e);
}
const Jo = /* @__PURE__ */ k("ZodISODuration", (e, t) => {
  ya.init(e, t), Q.init(e, t);
});
function Xo(e) {
  return So(Jo, e);
}
const Yo = (e, t) => {
  Ar.init(e, t), e.name = "ZodError", Object.defineProperties(e, {
    format: {
      value: (i) => nn(e, i)
      // enumerable: false,
    },
    flatten: {
      value: (i) => sn(e, i)
      // enumerable: false,
    },
    addIssue: {
      value: (i) => {
        e.issues.push(i), e.message = JSON.stringify(e.issues, ci, 2);
      }
      // enumerable: false,
    },
    addIssues: {
      value: (i) => {
        e.issues.push(...i), e.message = JSON.stringify(e.issues, ci, 2);
      }
      // enumerable: false,
    },
    isEmpty: {
      get() {
        return e.issues.length === 0;
      }
      // enumerable: false,
    }
  });
}, Te = k("ZodError", Yo, {
  Parent: Error
}), Qo = /* @__PURE__ */ _i(Te), eu = /* @__PURE__ */ ki(Te), tu = /* @__PURE__ */ Ut(Te), iu = /* @__PURE__ */ qt(Te), ru = /* @__PURE__ */ un(Te), su = /* @__PURE__ */ cn(Te), nu = /* @__PURE__ */ hn(Te), au = /* @__PURE__ */ ln(Te), ou = /* @__PURE__ */ pn(Te), uu = /* @__PURE__ */ fn(Te), cu = /* @__PURE__ */ dn(Te), hu = /* @__PURE__ */ mn(Te), ee = /* @__PURE__ */ k("ZodType", (e, t) => (Y.init(e, t), e.def = t, e.type = t.type, Object.defineProperty(e, "_def", { value: t }), e.check = (...i) => e.clone(Xe(t, {
  checks: [
    ...t.checks ?? [],
    ...i.map((r) => typeof r == "function" ? { _zod: { check: r, def: { check: "custom" }, onattach: [] } } : r)
  ]
})), e.clone = (i, r) => We(e, i, r), e.brand = () => e, e.register = ((i, r) => (i.add(e, r), e)), e.parse = (i, r) => Qo(e, i, r, { callee: e.parse }), e.safeParse = (i, r) => tu(e, i, r), e.parseAsync = async (i, r) => eu(e, i, r, { callee: e.parseAsync }), e.safeParseAsync = async (i, r) => iu(e, i, r), e.spa = e.safeParseAsync, e.encode = (i, r) => ru(e, i, r), e.decode = (i, r) => su(e, i, r), e.encodeAsync = async (i, r) => nu(e, i, r), e.decodeAsync = async (i, r) => au(e, i, r), e.safeEncode = (i, r) => ou(e, i, r), e.safeDecode = (i, r) => uu(e, i, r), e.safeEncodeAsync = async (i, r) => cu(e, i, r), e.safeDecodeAsync = async (i, r) => hu(e, i, r), e.refine = (i, r) => e.check(ic(i, r)), e.superRefine = (i) => e.check(rc(i)), e.overwrite = (i) => e.check(ct(i)), e.optional = () => ir(e), e.nullable = () => rr(e), e.nullish = () => ir(rr(e)), e.nonoptional = (i) => Gu(e, i), e.array = () => He(e), e.or = (i) => ae([e, i]), e.and = (i) => ju(e, i), e.transform = (i) => sr(e, Zu(i)), e.default = (i) => Hu(e, i), e.prefault = (i) => Ku(e, i), e.catch = (i) => Xu(e, i), e.pipe = (i) => sr(e, i), e.readonly = () => ec(e), e.describe = (i) => {
  const r = e.clone();
  return Lt.add(r, { description: i }), r;
}, Object.defineProperty(e, "description", {
  get() {
    return Lt.get(e)?.description;
  },
  configurable: !0
}), e.meta = (...i) => {
  if (i.length === 0)
    return Lt.get(e);
  const r = e.clone();
  return Lt.add(r, i[0]), r;
}, e.isOptional = () => e.safeParse(void 0).success, e.isNullable = () => e.safeParse(null).success, e)), Br = /* @__PURE__ */ k("_ZodString", (e, t) => {
  Si.init(e, t), ee.init(e, t);
  const i = e._zod.bag;
  e.format = i.format ?? null, e.minLength = i.minimum ?? null, e.maxLength = i.maximum ?? null, e.regex = (...r) => e.check(Eo(...r)), e.includes = (...r) => e.check(Lo(...r)), e.startsWith = (...r) => e.check(Oo(...r)), e.endsWith = (...r) => e.check(Ro(...r)), e.min = (...r) => e.check(Vt(...r)), e.max = (...r) => e.check($r(...r)), e.length = (...r) => e.check(Fr(...r)), e.nonempty = (...r) => e.check(Vt(1, ...r)), e.lowercase = (r) => e.check(Io(r)), e.uppercase = (r) => e.check(No(r)), e.trim = () => e.check(Mo()), e.normalize = (...r) => e.check(Do(...r)), e.toLowerCase = () => e.check(Vo()), e.toUpperCase = () => e.check(zo()), e.slugify = () => e.check(jo());
}), lu = /* @__PURE__ */ k("ZodString", (e, t) => {
  Si.init(e, t), Br.init(e, t), e.email = (i) => e.check(Ya(pu, i)), e.url = (i) => e.check(ro(fu, i)), e.jwt = (i) => e.check(go(Au, i)), e.emoji = (i) => e.check(so(du, i)), e.guid = (i) => e.check(Gi(Qi, i)), e.uuid = (i) => e.check(Qa(Ot, i)), e.uuidv4 = (i) => e.check(eo(Ot, i)), e.uuidv6 = (i) => e.check(to(Ot, i)), e.uuidv7 = (i) => e.check(io(Ot, i)), e.nanoid = (i) => e.check(no(mu, i)), e.guid = (i) => e.check(Gi(Qi, i)), e.cuid = (i) => e.check(ao(yu, i)), e.cuid2 = (i) => e.check(oo(vu, i)), e.ulid = (i) => e.check(uo(xu, i)), e.base64 = (i) => e.check(yo(Tu, i)), e.base64url = (i) => e.check(vo(Pu, i)), e.xid = (i) => e.check(co(gu, i)), e.ksuid = (i) => e.check(ho(bu, i)), e.ipv4 = (i) => e.check(lo(_u, i)), e.ipv6 = (i) => e.check(po(ku, i)), e.cidrv4 = (i) => e.check(fo(Su, i)), e.cidrv6 = (i) => e.check(mo(wu, i)), e.e164 = (i) => e.check(xo(Cu, i)), e.datetime = (i) => e.check(qo(i)), e.date = (i) => e.check(Wo(i)), e.time = (i) => e.check(Go(i)), e.duration = (i) => e.check(Xo(i));
});
function O(e) {
  return Xa(lu, e);
}
const Q = /* @__PURE__ */ k("ZodStringFormat", (e, t) => {
  K.init(e, t), Br.init(e, t);
}), pu = /* @__PURE__ */ k("ZodEmail", (e, t) => {
  sa.init(e, t), Q.init(e, t);
}), Qi = /* @__PURE__ */ k("ZodGUID", (e, t) => {
  ia.init(e, t), Q.init(e, t);
}), Ot = /* @__PURE__ */ k("ZodUUID", (e, t) => {
  ra.init(e, t), Q.init(e, t);
}), fu = /* @__PURE__ */ k("ZodURL", (e, t) => {
  na.init(e, t), Q.init(e, t);
}), du = /* @__PURE__ */ k("ZodEmoji", (e, t) => {
  aa.init(e, t), Q.init(e, t);
}), mu = /* @__PURE__ */ k("ZodNanoID", (e, t) => {
  oa.init(e, t), Q.init(e, t);
}), yu = /* @__PURE__ */ k("ZodCUID", (e, t) => {
  ua.init(e, t), Q.init(e, t);
}), vu = /* @__PURE__ */ k("ZodCUID2", (e, t) => {
  ca.init(e, t), Q.init(e, t);
}), xu = /* @__PURE__ */ k("ZodULID", (e, t) => {
  ha.init(e, t), Q.init(e, t);
}), gu = /* @__PURE__ */ k("ZodXID", (e, t) => {
  la.init(e, t), Q.init(e, t);
}), bu = /* @__PURE__ */ k("ZodKSUID", (e, t) => {
  pa.init(e, t), Q.init(e, t);
}), _u = /* @__PURE__ */ k("ZodIPv4", (e, t) => {
  va.init(e, t), Q.init(e, t);
}), ku = /* @__PURE__ */ k("ZodIPv6", (e, t) => {
  xa.init(e, t), Q.init(e, t);
}), Su = /* @__PURE__ */ k("ZodCIDRv4", (e, t) => {
  ga.init(e, t), Q.init(e, t);
}), wu = /* @__PURE__ */ k("ZodCIDRv6", (e, t) => {
  ba.init(e, t), Q.init(e, t);
}), Tu = /* @__PURE__ */ k("ZodBase64", (e, t) => {
  _a.init(e, t), Q.init(e, t);
}), Pu = /* @__PURE__ */ k("ZodBase64URL", (e, t) => {
  Sa.init(e, t), Q.init(e, t);
}), Cu = /* @__PURE__ */ k("ZodE164", (e, t) => {
  wa.init(e, t), Q.init(e, t);
}), Au = /* @__PURE__ */ k("ZodJWT", (e, t) => {
  Pa.init(e, t), Q.init(e, t);
}), Zr = /* @__PURE__ */ k("ZodNumber", (e, t) => {
  Vr.init(e, t), ee.init(e, t), e.gt = (r, n) => e.check(Xi(r, n)), e.gte = (r, n) => e.check(ri(r, n)), e.min = (r, n) => e.check(ri(r, n)), e.lt = (r, n) => e.check(Ji(r, n)), e.lte = (r, n) => e.check(ii(r, n)), e.max = (r, n) => e.check(ii(r, n)), e.int = (r) => e.check(er(r)), e.safe = (r) => e.check(er(r)), e.positive = (r) => e.check(Xi(0, r)), e.nonnegative = (r) => e.check(ri(0, r)), e.negative = (r) => e.check(Ji(0, r)), e.nonpositive = (r) => e.check(ii(0, r)), e.multipleOf = (r, n) => e.check(Yi(r, n)), e.step = (r, n) => e.check(Yi(r, n)), e.finite = () => e;
  const i = e._zod.bag;
  e.minValue = Math.max(i.minimum ?? Number.NEGATIVE_INFINITY, i.exclusiveMinimum ?? Number.NEGATIVE_INFINITY) ?? null, e.maxValue = Math.min(i.maximum ?? Number.POSITIVE_INFINITY, i.exclusiveMaximum ?? Number.POSITIVE_INFINITY) ?? null, e.isInt = (i.format ?? "").includes("int") || Number.isSafeInteger(i.multipleOf ?? 0.5), e.isFinite = !0, e.format = i.format ?? null;
});
function De(e) {
  return wo(Zr, e);
}
const Eu = /* @__PURE__ */ k("ZodNumberFormat", (e, t) => {
  Ca.init(e, t), Zr.init(e, t);
});
function er(e) {
  return To(Eu, e);
}
const Iu = /* @__PURE__ */ k("ZodBoolean", (e, t) => {
  Aa.init(e, t), ee.init(e, t);
});
function Nu(e) {
  return Po(Iu, e);
}
const Lu = /* @__PURE__ */ k("ZodUnknown", (e, t) => {
  Ea.init(e, t), ee.init(e, t);
});
function tr() {
  return Co(Lu);
}
const Ou = /* @__PURE__ */ k("ZodNever", (e, t) => {
  Ia.init(e, t), ee.init(e, t);
});
function Ru(e) {
  return Ao(Ou, e);
}
const Du = /* @__PURE__ */ k("ZodArray", (e, t) => {
  Na.init(e, t), ee.init(e, t), e.element = t.element, e.min = (i, r) => e.check(Vt(i, r)), e.nonempty = (i) => e.check(Vt(1, i)), e.max = (i, r) => e.check($r(i, r)), e.length = (i, r) => e.check(Fr(i, r)), e.unwrap = () => e.element;
});
function He(e, t) {
  return $o(Du, e, t);
}
const Mu = /* @__PURE__ */ k("ZodObject", (e, t) => {
  Oa.init(e, t), ee.init(e, t), U(e, "shape", () => t.shape), e.keyof = () => Wt(Object.keys(e._zod.def.shape)), e.catchall = (i) => e.clone({ ...e._zod.def, catchall: i }), e.passthrough = () => e.clone({ ...e._zod.def, catchall: tr() }), e.loose = () => e.clone({ ...e._zod.def, catchall: tr() }), e.strict = () => e.clone({ ...e._zod.def, catchall: Ru() }), e.strip = () => e.clone({ ...e._zod.def, catchall: void 0 }), e.extend = (i) => Ys(e, i), e.safeExtend = (i) => Qs(e, i), e.merge = (i) => en(e, i), e.pick = (i) => Js(e, i), e.omit = (i) => Xs(e, i), e.partial = (...i) => tn(Ur, e, i[0]), e.required = (...i) => rn(qr, e, i[0]);
});
function Ne(e, t) {
  const i = {
    type: "object",
    shape: e ?? {},
    ...R(t)
  };
  return new Mu(i);
}
const Vu = /* @__PURE__ */ k("ZodUnion", (e, t) => {
  Ra.init(e, t), ee.init(e, t), e.options = t.options;
});
function ae(e, t) {
  return new Vu({
    type: "union",
    options: e,
    ...R(t)
  });
}
const zu = /* @__PURE__ */ k("ZodIntersection", (e, t) => {
  Da.init(e, t), ee.init(e, t);
});
function ju(e, t) {
  return new zu({
    type: "intersection",
    left: e,
    right: t
  });
}
const $u = /* @__PURE__ */ k("ZodRecord", (e, t) => {
  Ma.init(e, t), ee.init(e, t), e.keyType = t.keyType, e.valueType = t.valueType;
});
function ge(e, t, i) {
  return new $u({
    type: "record",
    keyType: e,
    valueType: t,
    ...R(i)
  });
}
const li = /* @__PURE__ */ k("ZodEnum", (e, t) => {
  Va.init(e, t), ee.init(e, t), e.enum = t.entries, e.options = Object.values(t.entries);
  const i = new Set(Object.keys(t.entries));
  e.extract = (r, n) => {
    const u = {};
    for (const h of r)
      if (i.has(h))
        u[h] = t.entries[h];
      else
        throw new Error(`Key ${h} not found in enum`);
    return new li({
      ...t,
      checks: [],
      ...R(n),
      entries: u
    });
  }, e.exclude = (r, n) => {
    const u = { ...t.entries };
    for (const h of r)
      if (i.has(h))
        delete u[h];
      else
        throw new Error(`Key ${h} not found in enum`);
    return new li({
      ...t,
      checks: [],
      ...R(n),
      entries: u
    });
  };
});
function Wt(e, t) {
  const i = Array.isArray(e) ? Object.fromEntries(e.map((r) => [r, r])) : e;
  return new li({
    type: "enum",
    entries: i,
    ...R(t)
  });
}
const Fu = /* @__PURE__ */ k("ZodLiteral", (e, t) => {
  za.init(e, t), ee.init(e, t), e.values = new Set(t.values), Object.defineProperty(e, "value", {
    get() {
      if (t.values.length > 1)
        throw new Error("This schema contains multiple valid literal values. Use `.values` instead.");
      return t.values[0];
    }
  });
});
function b(e, t) {
  return new Fu({
    type: "literal",
    values: Array.isArray(e) ? e : [e],
    ...R(t)
  });
}
const Bu = /* @__PURE__ */ k("ZodTransform", (e, t) => {
  ja.init(e, t), ee.init(e, t), e._zod.parse = (i, r) => {
    if (r.direction === "backward")
      throw new Sr(e.constructor.name);
    i.addIssue = (u) => {
      if (typeof u == "string")
        i.issues.push(bt(u, i.value, t));
      else {
        const h = u;
        h.fatal && (h.continue = !1), h.code ?? (h.code = "custom"), h.input ?? (h.input = i.value), h.inst ?? (h.inst = e), i.issues.push(bt(h));
      }
    };
    const n = t.transform(i.value, i);
    return n instanceof Promise ? n.then((u) => (i.value = u, i)) : (i.value = n, i);
  };
});
function Zu(e) {
  return new Bu({
    type: "transform",
    transform: e
  });
}
const Ur = /* @__PURE__ */ k("ZodOptional", (e, t) => {
  $a.init(e, t), ee.init(e, t), e.unwrap = () => e._zod.def.innerType;
});
function ir(e) {
  return new Ur({
    type: "optional",
    innerType: e
  });
}
const Uu = /* @__PURE__ */ k("ZodNullable", (e, t) => {
  Fa.init(e, t), ee.init(e, t), e.unwrap = () => e._zod.def.innerType;
});
function rr(e) {
  return new Uu({
    type: "nullable",
    innerType: e
  });
}
const qu = /* @__PURE__ */ k("ZodDefault", (e, t) => {
  Ba.init(e, t), ee.init(e, t), e.unwrap = () => e._zod.def.innerType, e.removeDefault = e.unwrap;
});
function Hu(e, t) {
  return new qu({
    type: "default",
    innerType: e,
    get defaultValue() {
      return typeof t == "function" ? t() : Pr(t);
    }
  });
}
const Wu = /* @__PURE__ */ k("ZodPrefault", (e, t) => {
  Za.init(e, t), ee.init(e, t), e.unwrap = () => e._zod.def.innerType;
});
function Ku(e, t) {
  return new Wu({
    type: "prefault",
    innerType: e,
    get defaultValue() {
      return typeof t == "function" ? t() : Pr(t);
    }
  });
}
const qr = /* @__PURE__ */ k("ZodNonOptional", (e, t) => {
  Ua.init(e, t), ee.init(e, t), e.unwrap = () => e._zod.def.innerType;
});
function Gu(e, t) {
  return new qr({
    type: "nonoptional",
    innerType: e,
    ...R(t)
  });
}
const Ju = /* @__PURE__ */ k("ZodCatch", (e, t) => {
  qa.init(e, t), ee.init(e, t), e.unwrap = () => e._zod.def.innerType, e.removeCatch = e.unwrap;
});
function Xu(e, t) {
  return new Ju({
    type: "catch",
    innerType: e,
    catchValue: typeof t == "function" ? t : () => t
  });
}
const Yu = /* @__PURE__ */ k("ZodPipe", (e, t) => {
  Ha.init(e, t), ee.init(e, t), e.in = t.in, e.out = t.out;
});
function sr(e, t) {
  return new Yu({
    type: "pipe",
    in: e,
    out: t
    // ...util.normalizeParams(params),
  });
}
const Qu = /* @__PURE__ */ k("ZodReadonly", (e, t) => {
  Wa.init(e, t), ee.init(e, t), e.unwrap = () => e._zod.def.innerType;
});
function ec(e) {
  return new Qu({
    type: "readonly",
    innerType: e
  });
}
const tc = /* @__PURE__ */ k("ZodCustom", (e, t) => {
  Ka.init(e, t), ee.init(e, t);
});
function ic(e, t = {}) {
  return Fo(tc, e, t);
}
function rc(e) {
  return Bo(e);
}
const sc = ["amber", "green", "red", "other"], nc = Wt(sc), ac = ["alpha", "beta", "generalAvailability", "notApplicable", "preAlpha", "proposed", "releaseCandidate", "unavailable", "underReview"], oc = Wt(ac), uc = [
  "app",
  "connector",
  "connectorConnection",
  "context",
  "contextModelGroup",
  "contextModel",
  "contextModelDimensionGroup",
  "contextModelDimension",
  "contextModelDimensionHierarchy",
  "contextModelEntityGroup",
  "contextModelEntity",
  "contextModelEntityDataItem",
  "contextModelEntityEvent",
  "contextModelEntityPrimaryMeasure",
  "contextModelSecondaryMeasureGroup",
  "contextModelSecondaryMeasure",
  "dataView",
  "dimension",
  "engine",
  "eventQuery",
  "presenter",
  "presenterPresentation",
  "tool"
], cc = Wt(uc), hc = ae([b("en-au"), b("en-gb"), b("en-us"), b("es-es")]), lc = ge(hc, O()), pc = Ne({
  id: O(),
  color: nc,
  label: O()
}), fc = Ne({
  id: O(),
  label: ge(O(), O()),
  description: ge(O(), O()),
  firstCreatedAt: De().optional(),
  icon: O().optional(),
  iconDark: O().optional(),
  lastUpdatedAt: De().optional(),
  status: pc.nullable().optional(),
  statusId: oc,
  typeId: cc
}), dc = ae([b("app"), b("engine"), b("connector"), b("context"), b("presenter"), b("tool")]), mc = Ne({
  id: O(),
  label: O()
}), yc = Ne({
  activeConnectionCount: De().optional(),
  canDescribe: Nu().optional(),
  id: O().optional(),
  authMethodId: ae([b("apiKey"), b("disabled"), b("oAuth2"), b("none")]),
  label: lc.optional(),
  maxConnectionCount: De().optional(),
  params: He(ge(O(), O())).optional()
}), vc = ae([b("application"), b("curatedDataset"), b("database"), b("fileStore")]), xc = ae([
  b("abortOperation"),
  b("authenticateConnection"),
  b("createObject"),
  b("describeConnection"),
  b("dropObject"),
  b("findObject"),
  b("getRecord"),
  b("listNodes"),
  b("previewObject"),
  b("removeRecords"),
  b("retrieveRecords"),
  b("upsertRecords")
]), gc = ae([b("bidirectional"), b("destination"), b("source"), b("unknown")]), bc = fc.extend({
  typeId: dc,
  version: O()
}), _c = bc.extend({
  category: mc.optional(),
  categoryId: vc,
  implementations: ge(O(), yc),
  operations: He(xc),
  typeId: b("connector"),
  usageId: gc,
  vendorAccountURL: O().nullable().optional(),
  vendorDocumentationURL: O().nullable().optional(),
  vendorHomeURL: O().nullable().optional()
}), kc = ae([b("amber"), b("green"), b("red"), b("other")]), Sc = ae([
  b("alpha"),
  b("beta"),
  b("generalAvailability"),
  b("notApplicable"),
  b("preAlpha"),
  b("proposed"),
  b("releaseCandidate"),
  b("unavailable"),
  b("underReview")
]), wc = ae([
  b("app"),
  b("connector"),
  b("connectorConnection"),
  b("context"),
  b("contextModelGroup"),
  b("contextModel"),
  b("contextModelDimensionGroup"),
  b("contextModelDimension"),
  b("contextModelDimensionHierarchy"),
  b("contextModelEntityGroup"),
  b("contextModelEntity"),
  b("contextModelEntityDataItem"),
  b("contextModelEntityEvent"),
  b("contextModelEntityPrimaryMeasure"),
  b("contextModelSecondaryMeasureGroup"),
  b("contextModelSecondaryMeasure"),
  b("dataView"),
  b("dimension"),
  b("engine"),
  b("eventQuery"),
  b("presenter"),
  b("presenterPresentation"),
  b("tool")
]), nr = De(), Tc = Ne({
  id: O(),
  color: kc,
  label: O()
}), Pc = Ne({
  id: O(),
  label: ge(O(), O()),
  description: ge(O(), O()),
  icon: O().optional(),
  iconDark: O().optional(),
  order: De(),
  path: O()
}), Hr = Ne({
  id: O(),
  label: ge(O(), O()),
  description: ge(O(), O()),
  firstCreatedAt: nr.optional(),
  icon: O().optional(),
  iconDark: O().optional(),
  lastUpdatedAt: nr.optional(),
  status: Tc.optional(),
  statusId: Sc,
  typeId: wc
}), Cc = ae([b("app"), b("engine"), b("connector"), b("context"), b("presenter"), b("tool")]), Ac = Hr.extend({
  typeId: Cc,
  version: O()
}), Ec = Hr.extend({
  modelRefs: He(Pc),
  order: De()
}), Ic = b("list"), Nc = Ac.extend({
  models: He(Ec),
  operations: He(Ic),
  typeId: b("context")
}), Lc = ae([b("amber"), b("green"), b("red"), b("other")]), Oc = ae([
  b("alpha"),
  b("beta"),
  b("generalAvailability"),
  b("notApplicable"),
  b("preAlpha"),
  b("proposed"),
  b("releaseCandidate"),
  b("unavailable"),
  b("underReview")
]), Rc = ae([
  b("app"),
  b("connector"),
  b("connectorConnection"),
  b("context"),
  b("contextModelGroup"),
  b("contextModel"),
  b("contextModelDimensionGroup"),
  b("contextModelDimension"),
  b("contextModelDimensionHierarchy"),
  b("contextModelEntityGroup"),
  b("contextModelEntity"),
  b("contextModelEntityDataItem"),
  b("contextModelEntityEvent"),
  b("contextModelEntityPrimaryMeasure"),
  b("contextModelSecondaryMeasureGroup"),
  b("contextModelSecondaryMeasure"),
  b("dataView"),
  b("dimension"),
  b("engine"),
  b("eventQuery"),
  b("presenter"),
  b("presenterPresentation"),
  b("tool")
]), ar = De(), Dc = Ne({
  id: O(),
  color: Lc,
  label: O()
}), Mc = Ne({
  id: O(),
  label: ge(O(), O()),
  description: ge(O(), O()),
  icon: O().optional(),
  iconDark: O().optional(),
  order: De(),
  path: O()
}), Vc = Ne({
  id: O(),
  label: ge(O(), O()),
  description: ge(O(), O()),
  firstCreatedAt: ar.optional(),
  icon: O().optional(),
  iconDark: O().optional(),
  lastUpdatedAt: ar.optional(),
  status: Dc.optional(),
  statusId: Oc,
  typeId: Rc
}), zc = ae([b("app"), b("engine"), b("connector"), b("context"), b("presenter"), b("tool")]), jc = Vc.extend({
  typeId: zc,
  version: O()
}), $c = ae([b("list"), b("render"), b("setColorMode")]), Fc = jc.extend({
  presentations: He(Mc),
  operations: He($c),
  typeId: b("presenter")
});
var Bc = [509, 0, 227, 0, 150, 4, 294, 9, 1368, 2, 2, 1, 6, 3, 41, 2, 5, 0, 166, 1, 574, 3, 9, 9, 7, 9, 32, 4, 318, 1, 80, 3, 71, 10, 50, 3, 123, 2, 54, 14, 32, 10, 3, 1, 11, 3, 46, 10, 8, 0, 46, 9, 7, 2, 37, 13, 2, 9, 6, 1, 45, 0, 13, 2, 49, 13, 9, 3, 2, 11, 83, 11, 7, 0, 3, 0, 158, 11, 6, 9, 7, 3, 56, 1, 2, 6, 3, 1, 3, 2, 10, 0, 11, 1, 3, 6, 4, 4, 68, 8, 2, 0, 3, 0, 2, 3, 2, 4, 2, 0, 15, 1, 83, 17, 10, 9, 5, 0, 82, 19, 13, 9, 214, 6, 3, 8, 28, 1, 83, 16, 16, 9, 82, 12, 9, 9, 7, 19, 58, 14, 5, 9, 243, 14, 166, 9, 71, 5, 2, 1, 3, 3, 2, 0, 2, 1, 13, 9, 120, 6, 3, 6, 4, 0, 29, 9, 41, 6, 2, 3, 9, 0, 10, 10, 47, 15, 343, 9, 54, 7, 2, 7, 17, 9, 57, 21, 2, 13, 123, 5, 4, 0, 2, 1, 2, 6, 2, 0, 9, 9, 49, 4, 2, 1, 2, 4, 9, 9, 330, 3, 10, 1, 2, 0, 49, 6, 4, 4, 14, 10, 5350, 0, 7, 14, 11465, 27, 2343, 9, 87, 9, 39, 4, 60, 6, 26, 9, 535, 9, 470, 0, 2, 54, 8, 3, 82, 0, 12, 1, 19628, 1, 4178, 9, 519, 45, 3, 22, 543, 4, 4, 5, 9, 7, 3, 6, 31, 3, 149, 2, 1418, 49, 513, 54, 5, 49, 9, 0, 15, 0, 23, 4, 2, 14, 1361, 6, 2, 16, 3, 6, 2, 1, 2, 4, 101, 0, 161, 6, 10, 9, 357, 0, 62, 13, 499, 13, 245, 1, 2, 9, 726, 6, 110, 6, 6, 9, 4759, 9, 787719, 239], Wr = [0, 11, 2, 25, 2, 18, 2, 1, 2, 14, 3, 13, 35, 122, 70, 52, 268, 28, 4, 48, 48, 31, 14, 29, 6, 37, 11, 29, 3, 35, 5, 7, 2, 4, 43, 157, 19, 35, 5, 35, 5, 39, 9, 51, 13, 10, 2, 14, 2, 6, 2, 1, 2, 10, 2, 14, 2, 6, 2, 1, 4, 51, 13, 310, 10, 21, 11, 7, 25, 5, 2, 41, 2, 8, 70, 5, 3, 0, 2, 43, 2, 1, 4, 0, 3, 22, 11, 22, 10, 30, 66, 18, 2, 1, 11, 21, 11, 25, 71, 55, 7, 1, 65, 0, 16, 3, 2, 2, 2, 28, 43, 28, 4, 28, 36, 7, 2, 27, 28, 53, 11, 21, 11, 18, 14, 17, 111, 72, 56, 50, 14, 50, 14, 35, 39, 27, 10, 22, 251, 41, 7, 1, 17, 2, 60, 28, 11, 0, 9, 21, 43, 17, 47, 20, 28, 22, 13, 52, 58, 1, 3, 0, 14, 44, 33, 24, 27, 35, 30, 0, 3, 0, 9, 34, 4, 0, 13, 47, 15, 3, 22, 0, 2, 0, 36, 17, 2, 24, 20, 1, 64, 6, 2, 0, 2, 3, 2, 14, 2, 9, 8, 46, 39, 7, 3, 1, 3, 21, 2, 6, 2, 1, 2, 4, 4, 0, 19, 0, 13, 4, 31, 9, 2, 0, 3, 0, 2, 37, 2, 0, 26, 0, 2, 0, 45, 52, 19, 3, 21, 2, 31, 47, 21, 1, 2, 0, 185, 46, 42, 3, 37, 47, 21, 0, 60, 42, 14, 0, 72, 26, 38, 6, 186, 43, 117, 63, 32, 7, 3, 0, 3, 7, 2, 1, 2, 23, 16, 0, 2, 0, 95, 7, 3, 38, 17, 0, 2, 0, 29, 0, 11, 39, 8, 0, 22, 0, 12, 45, 20, 0, 19, 72, 200, 32, 32, 8, 2, 36, 18, 0, 50, 29, 113, 6, 2, 1, 2, 37, 22, 0, 26, 5, 2, 1, 2, 31, 15, 0, 328, 18, 16, 0, 2, 12, 2, 33, 125, 0, 80, 921, 103, 110, 18, 195, 2637, 96, 16, 1071, 18, 5, 26, 3994, 6, 582, 6842, 29, 1763, 568, 8, 30, 18, 78, 18, 29, 19, 47, 17, 3, 32, 20, 6, 18, 433, 44, 212, 63, 129, 74, 6, 0, 67, 12, 65, 1, 2, 0, 29, 6135, 9, 1237, 42, 9, 8936, 3, 2, 6, 2, 1, 2, 290, 16, 0, 30, 2, 3, 0, 15, 3, 9, 395, 2309, 106, 6, 12, 4, 8, 8, 9, 5991, 84, 2, 70, 2, 1, 3, 0, 3, 1, 3, 3, 2, 11, 2, 0, 2, 6, 2, 64, 2, 3, 3, 7, 2, 6, 2, 27, 2, 3, 2, 4, 2, 0, 4, 6, 2, 339, 3, 24, 2, 24, 2, 30, 2, 24, 2, 30, 2, 24, 2, 30, 2, 24, 2, 30, 2, 24, 2, 7, 1845, 30, 7, 5, 262, 61, 147, 44, 11, 6, 17, 0, 322, 29, 19, 43, 485, 27, 229, 29, 3, 0, 496, 6, 2, 3, 2, 1, 2, 14, 2, 196, 60, 67, 8, 0, 1205, 3, 2, 26, 2, 1, 2, 0, 3, 0, 2, 9, 2, 3, 2, 0, 2, 0, 7, 0, 5, 0, 2, 0, 2, 0, 2, 2, 2, 1, 2, 0, 3, 0, 2, 0, 2, 0, 2, 0, 2, 0, 2, 1, 2, 0, 3, 3, 2, 6, 2, 3, 2, 3, 2, 0, 2, 9, 2, 16, 6, 2, 2, 4, 2, 16, 4421, 42719, 33, 4153, 7, 221, 3, 5761, 15, 7472, 16, 621, 2467, 541, 1507, 4938, 6, 4191], Zc = "‌‍·̀-ͯ·҃-֑҇-ׇֽֿׁׂׅׄؐ-ًؚ-٩ٰۖ-ۜ۟-۪ۤۧۨ-ۭ۰-۹ܑܰ-݊ަ-ް߀-߉߫-߽߳ࠖ-࠙ࠛ-ࠣࠥ-ࠧࠩ-࡙࠭-࡛ࢗ-࢟࣊-ࣣ࣡-ःऺ-़ा-ॏ॑-ॗॢॣ०-९ঁ-ঃ়া-ৄেৈো-্ৗৢৣ০-৯৾ਁ-ਃ਼ਾ-ੂੇੈੋ-੍ੑ੦-ੱੵઁ-ઃ઼ા-ૅે-ૉો-્ૢૣ૦-૯ૺ-૿ଁ-ଃ଼ା-ୄେୈୋ-୍୕-ୗୢୣ୦-୯ஂா-ூெ-ைொ-்ௗ௦-௯ఀ-ఄ఼ా-ౄె-ైొ-్ౕౖౢౣ౦-౯ಁ-ಃ಼ಾ-ೄೆ-ೈೊ-್ೕೖೢೣ೦-೯ೳഀ-ഃ഻഼ാ-ൄെ-ൈൊ-്ൗൢൣ൦-൯ඁ-ඃ්ා-ුූෘ-ෟ෦-෯ෲෳัิ-ฺ็-๎๐-๙ັິ-ຼ່-໎໐-໙༘༙༠-༩༹༵༷༾༿ཱ-྄྆྇ྍ-ྗྙ-ྼ࿆ါ-ှ၀-၉ၖ-ၙၞ-ၠၢ-ၤၧ-ၭၱ-ၴႂ-ႍႏ-ႝ፝-፟፩-፱ᜒ-᜕ᜲ-᜴ᝒᝓᝲᝳ឴-៓៝០-៩᠋-᠍᠏-᠙ᢩᤠ-ᤫᤰ-᤻᥆-᥏᧐-᧚ᨗ-ᨛᩕ-ᩞ᩠-᩿᩼-᪉᪐-᪙᪰-᪽ᪿ-ᫎᬀ-ᬄ᬴-᭄᭐-᭙᭫-᭳ᮀ-ᮂᮡ-ᮭ᮰-᮹᯦-᯳ᰤ-᰷᱀-᱉᱐-᱙᳐-᳔᳒-᳨᳭᳴᳷-᳹᷀-᷿‌‍‿⁀⁔⃐-⃥⃜⃡-⃰⳯-⵿⳱ⷠ-〪ⷿ-゙゚〯・꘠-꘩꙯ꙴ-꙽ꚞꚟ꛰꛱ꠂ꠆ꠋꠣ-ꠧ꠬ꢀꢁꢴ-ꣅ꣐-꣙꣠-꣱ꣿ-꤉ꤦ-꤭ꥇ-꥓ꦀ-ꦃ꦳-꧀꧐-꧙ꧥ꧰-꧹ꨩ-ꨶꩃꩌꩍ꩐-꩙ꩻ-ꩽꪰꪲ-ꪴꪷꪸꪾ꪿꫁ꫫ-ꫯꫵ꫶ꯣ-ꯪ꯬꯭꯰-꯹ﬞ︀-️︠-︯︳︴﹍-﹏０-９＿･", Kr = "ªµºÀ-ÖØ-öø-ˁˆ-ˑˠ-ˤˬˮͰ-ʹͶͷͺ-ͽͿΆΈ-ΊΌΎ-ΡΣ-ϵϷ-ҁҊ-ԯԱ-Ֆՙՠ-ֈא-תׯ-ײؠ-يٮٯٱ-ۓەۥۦۮۯۺ-ۼۿܐܒ-ܯݍ-ޥޱߊ-ߪߴߵߺࠀ-ࠕࠚࠤࠨࡀ-ࡘࡠ-ࡪࡰ-ࢇࢉ-ࢎࢠ-ࣉऄ-हऽॐक़-ॡॱ-ঀঅ-ঌএঐও-নপ-রলশ-হঽৎড়ঢ়য়-ৡৰৱৼਅ-ਊਏਐਓ-ਨਪ-ਰਲਲ਼ਵਸ਼ਸਹਖ਼-ੜਫ਼ੲ-ੴઅ-ઍએ-ઑઓ-નપ-રલળવ-હઽૐૠૡૹଅ-ଌଏଐଓ-ନପ-ରଲଳଵ-ହଽଡ଼ଢ଼ୟ-ୡୱஃஅ-ஊஎ-ஐஒ-கஙசஜஞடணதந-பம-ஹௐఅ-ఌఎ-ఐఒ-నప-హఽౘ-ౚౝౠౡಀಅ-ಌಎ-ಐಒ-ನಪ-ಳವ-ಹಽೝೞೠೡೱೲഄ-ഌഎ-ഐഒ-ഺഽൎൔ-ൖൟ-ൡൺ-ൿඅ-ඖක-නඳ-රලව-ෆก-ะาำเ-ๆກຂຄຆ-ຊຌ-ຣລວ-ະາຳຽເ-ໄໆໜ-ໟༀཀ-ཇཉ-ཬྈ-ྌက-ဪဿၐ-ၕၚ-ၝၡၥၦၮ-ၰၵ-ႁႎႠ-ჅჇჍა-ჺჼ-ቈቊ-ቍቐ-ቖቘቚ-ቝበ-ኈኊ-ኍነ-ኰኲ-ኵኸ-ኾዀዂ-ዅወ-ዖዘ-ጐጒ-ጕጘ-ፚᎀ-ᎏᎠ-Ᏽᏸ-ᏽᐁ-ᙬᙯ-ᙿᚁ-ᚚᚠ-ᛪᛮ-ᛸᜀ-ᜑᜟ-ᜱᝀ-ᝑᝠ-ᝬᝮ-ᝰក-ឳៗៜᠠ-ᡸᢀ-ᢨᢪᢰ-ᣵᤀ-ᤞᥐ-ᥭᥰ-ᥴᦀ-ᦫᦰ-ᧉᨀ-ᨖᨠ-ᩔᪧᬅ-ᬳᭅ-ᭌᮃ-ᮠᮮᮯᮺ-ᯥᰀ-ᰣᱍ-ᱏᱚ-ᱽᲀ-ᲊᲐ-ᲺᲽ-Ჿᳩ-ᳬᳮ-ᳳᳵᳶᳺᴀ-ᶿḀ-ἕἘ-Ἕἠ-ὅὈ-Ὅὐ-ὗὙὛὝὟ-ώᾀ-ᾴᾶ-ᾼιῂ-ῄῆ-ῌῐ-ΐῖ-Ίῠ-Ῥῲ-ῴῶ-ῼⁱⁿₐ-ₜℂℇℊ-ℓℕ℘-ℝℤΩℨK-ℹℼ-ℿⅅ-ⅉⅎⅠ-ↈⰀ-ⳤⳫ-ⳮⳲⳳⴀ-ⴥⴧⴭⴰ-ⵧⵯⶀ-ⶖⶠ-ⶦⶨ-ⶮⶰ-ⶶⶸ-ⶾⷀ-ⷆⷈ-ⷎⷐ-ⷖⷘ-ⷞ々-〇〡-〩〱-〵〸-〼ぁ-ゖ゛-ゟァ-ヺー-ヿㄅ-ㄯㄱ-ㆎㆠ-ㆿㇰ-ㇿ㐀-䶿一-ꒌꓐ-ꓽꔀ-ꘌꘐ-ꘟꘪꘫꙀ-ꙮꙿ-ꚝꚠ-ꛯꜗ-ꜟꜢ-ꞈꞋ-ꟍꟐꟑꟓꟕ-Ƛꟲ-ꠁꠃ-ꠅꠇ-ꠊꠌ-ꠢꡀ-ꡳꢂ-ꢳꣲ-ꣷꣻꣽꣾꤊ-ꤥꤰ-ꥆꥠ-ꥼꦄ-ꦲꧏꧠ-ꧤꧦ-ꧯꧺ-ꧾꨀ-ꨨꩀ-ꩂꩄ-ꩋꩠ-ꩶꩺꩾ-ꪯꪱꪵꪶꪹ-ꪽꫀꫂꫛ-ꫝꫠ-ꫪꫲ-ꫴꬁ-ꬆꬉ-ꬎꬑ-ꬖꬠ-ꬦꬨ-ꬮꬰ-ꭚꭜ-ꭩꭰ-ꯢ가-힣ힰ-ퟆퟋ-ퟻ豈-舘並-龎ﬀ-ﬆﬓ-ﬗיִײַ-ﬨשׁ-זּטּ-לּמּנּסּףּפּצּ-ﮱﯓ-ﴽﵐ-ﶏﶒ-ﷇﷰ-ﷻﹰ-ﹴﹶ-ﻼＡ-Ｚａ-ｚｦ-ﾾￂ-ￇￊ-ￏￒ-ￗￚ-ￜ", si = {
  3: "abstract boolean byte char class double enum export extends final float goto implements import int interface long native package private protected public short static super synchronized throws transient volatile",
  5: "class enum extends super const export import",
  6: "enum",
  strict: "implements interface let package private protected public static yield",
  strictBind: "eval arguments"
}, ni = "break case catch continue debugger default do else finally for function if return switch throw try var while with null true false instanceof typeof void delete new in this", Uc = {
  5: ni,
  "5module": ni + " export import",
  6: ni + " const class extends export import super"
}, qc = /^in(stanceof)?$/, Hc = new RegExp("[" + Kr + "]"), Wc = new RegExp("[" + Kr + Zc + "]");
function pi(e, t) {
  for (var i = 65536, r = 0; r < t.length; r += 2) {
    if (i += t[r], i > e)
      return !1;
    if (i += t[r + 1], i >= e)
      return !0;
  }
  return !1;
}
function Ee(e, t) {
  return e < 65 ? e === 36 : e < 91 ? !0 : e < 97 ? e === 95 : e < 123 ? !0 : e <= 65535 ? e >= 170 && Hc.test(String.fromCharCode(e)) : t === !1 ? !1 : pi(e, Wr);
}
function Me(e, t) {
  return e < 48 ? e === 36 : e < 58 ? !0 : e < 65 ? !1 : e < 91 ? !0 : e < 97 ? e === 95 : e < 123 ? !0 : e <= 65535 ? e >= 170 && Wc.test(String.fromCharCode(e)) : t === !1 ? !1 : pi(e, Wr) || pi(e, Bc);
}
var z = function(t, i) {
  i === void 0 && (i = {}), this.label = t, this.keyword = i.keyword, this.beforeExpr = !!i.beforeExpr, this.startsExpr = !!i.startsExpr, this.isLoop = !!i.isLoop, this.isAssign = !!i.isAssign, this.prefix = !!i.prefix, this.postfix = !!i.postfix, this.binop = i.binop || null, this.updateContext = null;
};
function _e(e, t) {
  return new z(e, { beforeExpr: !0, binop: t });
}
var ke = { beforeExpr: !0 }, de = { startsExpr: !0 }, at = {};
function F(e, t) {
  return t === void 0 && (t = {}), t.keyword = e, at[e] = new z(e, t);
}
var l = {
  num: new z("num", de),
  regexp: new z("regexp", de),
  string: new z("string", de),
  name: new z("name", de),
  privateId: new z("privateId", de),
  eof: new z("eof"),
  // Punctuation token types.
  bracketL: new z("[", { beforeExpr: !0, startsExpr: !0 }),
  bracketR: new z("]"),
  braceL: new z("{", { beforeExpr: !0, startsExpr: !0 }),
  braceR: new z("}"),
  parenL: new z("(", { beforeExpr: !0, startsExpr: !0 }),
  parenR: new z(")"),
  comma: new z(",", ke),
  semi: new z(";", ke),
  colon: new z(":", ke),
  dot: new z("."),
  question: new z("?", ke),
  questionDot: new z("?."),
  arrow: new z("=>", ke),
  template: new z("template"),
  invalidTemplate: new z("invalidTemplate"),
  ellipsis: new z("...", ke),
  backQuote: new z("`", de),
  dollarBraceL: new z("${", { beforeExpr: !0, startsExpr: !0 }),
  // Operators. These carry several kinds of properties to help the
  // parser use them properly (the presence of these properties is
  // what categorizes them as operators).
  //
  // `binop`, when present, specifies that this operator is a binary
  // operator, and will refer to its precedence.
  //
  // `prefix` and `postfix` mark the operator as a prefix or postfix
  // unary operator.
  //
  // `isAssign` marks all of `=`, `+=`, `-=` etcetera, which act as
  // binary operators with a very low precedence, that should result
  // in AssignmentExpression nodes.
  eq: new z("=", { beforeExpr: !0, isAssign: !0 }),
  assign: new z("_=", { beforeExpr: !0, isAssign: !0 }),
  incDec: new z("++/--", { prefix: !0, postfix: !0, startsExpr: !0 }),
  prefix: new z("!/~", { beforeExpr: !0, prefix: !0, startsExpr: !0 }),
  logicalOR: _e("||", 1),
  logicalAND: _e("&&", 2),
  bitwiseOR: _e("|", 3),
  bitwiseXOR: _e("^", 4),
  bitwiseAND: _e("&", 5),
  equality: _e("==/!=/===/!==", 6),
  relational: _e("</>/<=/>=", 7),
  bitShift: _e("<</>>/>>>", 8),
  plusMin: new z("+/-", { beforeExpr: !0, binop: 9, prefix: !0, startsExpr: !0 }),
  modulo: _e("%", 10),
  star: _e("*", 10),
  slash: _e("/", 10),
  starstar: new z("**", { beforeExpr: !0 }),
  coalesce: _e("??", 1),
  // Keyword token types.
  _break: F("break"),
  _case: F("case", ke),
  _catch: F("catch"),
  _continue: F("continue"),
  _debugger: F("debugger"),
  _default: F("default", ke),
  _do: F("do", { isLoop: !0, beforeExpr: !0 }),
  _else: F("else", ke),
  _finally: F("finally"),
  _for: F("for", { isLoop: !0 }),
  _function: F("function", de),
  _if: F("if"),
  _return: F("return", ke),
  _switch: F("switch"),
  _throw: F("throw", ke),
  _try: F("try"),
  _var: F("var"),
  _const: F("const"),
  _while: F("while", { isLoop: !0 }),
  _with: F("with"),
  _new: F("new", { beforeExpr: !0, startsExpr: !0 }),
  _this: F("this", de),
  _super: F("super", de),
  _class: F("class", de),
  _extends: F("extends", ke),
  _export: F("export"),
  _import: F("import", de),
  _null: F("null", de),
  _true: F("true", de),
  _false: F("false", de),
  _in: F("in", { beforeExpr: !0, binop: 7 }),
  _instanceof: F("instanceof", { beforeExpr: !0, binop: 7 }),
  _typeof: F("typeof", { beforeExpr: !0, prefix: !0, startsExpr: !0 }),
  _void: F("void", { beforeExpr: !0, prefix: !0, startsExpr: !0 }),
  _delete: F("delete", { beforeExpr: !0, prefix: !0, startsExpr: !0 })
}, he = /\r\n?|\n|\u2028|\u2029/, Gr = new RegExp(he.source, "g");
function Ye(e) {
  return e === 10 || e === 13 || e === 8232 || e === 8233;
}
function Jr(e, t, i) {
  i === void 0 && (i = e.length);
  for (var r = t; r < i; r++) {
    var n = e.charCodeAt(r);
    if (Ye(n))
      return r < i - 1 && n === 13 && e.charCodeAt(r + 1) === 10 ? r + 2 : r + 1;
  }
  return -1;
}
var wi = /[\u1680\u2000-\u200a\u202f\u205f\u3000\ufeff]/, ne = /(?:\s|\/\/.*|\/\*[^]*?\*\/)*/g, Xr = Object.prototype, Kc = Xr.hasOwnProperty, Gc = Xr.toString, ht = Object.hasOwn || (function(e, t) {
  return Kc.call(e, t);
}), or = Array.isArray || (function(e) {
  return Gc.call(e) === "[object Array]";
}), ur = /* @__PURE__ */ Object.create(null);
function Ze(e) {
  return ur[e] || (ur[e] = new RegExp("^(?:" + e.replace(/ /g, "|") + ")$"));
}
function Ve(e) {
  return e <= 65535 ? String.fromCharCode(e) : (e -= 65536, String.fromCharCode((e >> 10) + 55296, (e & 1023) + 56320));
}
var Jc = /(?:[\uD800-\uDBFF](?![\uDC00-\uDFFF])|(?:[^\uD800-\uDBFF]|^)[\uDC00-\uDFFF])/, ot = function(t, i) {
  this.line = t, this.column = i;
};
ot.prototype.offset = function(t) {
  return new ot(this.line, this.column + t);
};
var kt = function(t, i, r) {
  this.start = i, this.end = r, t.sourceFile !== null && (this.source = t.sourceFile);
};
function Ti(e, t) {
  for (var i = 1, r = 0; ; ) {
    var n = Jr(e, r, t);
    if (n < 0)
      return new ot(i, t - r);
    ++i, r = n;
  }
}
var zt = {
  // `ecmaVersion` indicates the ECMAScript version to parse. Must be
  // either 3, 5, 6 (or 2015), 7 (2016), 8 (2017), 9 (2018), 10
  // (2019), 11 (2020), 12 (2021), 13 (2022), 14 (2023), or `"latest"`
  // (the latest version the library supports). This influences
  // support for strict mode, the set of reserved words, and support
  // for new syntax features.
  ecmaVersion: null,
  // `sourceType` indicates the mode the code should be parsed in.
  // Can be either `"script"` or `"module"`. This influences global
  // strict mode and parsing of `import` and `export` declarations.
  sourceType: "script",
  // `onInsertedSemicolon` can be a callback that will be called when
  // a semicolon is automatically inserted. It will be passed the
  // position of the inserted semicolon as an offset, and if
  // `locations` is enabled, it is given the location as a `{line,
  // column}` object as second argument.
  onInsertedSemicolon: null,
  // `onTrailingComma` is similar to `onInsertedSemicolon`, but for
  // trailing commas.
  onTrailingComma: null,
  // By default, reserved words are only enforced if ecmaVersion >= 5.
  // Set `allowReserved` to a boolean value to explicitly turn this on
  // an off. When this option has the value "never", reserved words
  // and keywords can also not be used as property names.
  allowReserved: null,
  // When enabled, a return at the top level is not considered an
  // error.
  allowReturnOutsideFunction: !1,
  // When enabled, import/export statements are not constrained to
  // appearing at the top of the program, and an import.meta expression
  // in a script isn't considered an error.
  allowImportExportEverywhere: !1,
  // By default, await identifiers are allowed to appear at the top-level scope only if ecmaVersion >= 2022.
  // When enabled, await identifiers are allowed to appear at the top-level scope,
  // but they are still not allowed in non-async functions.
  allowAwaitOutsideFunction: null,
  // When enabled, super identifiers are not constrained to
  // appearing in methods and do not raise an error when they appear elsewhere.
  allowSuperOutsideMethod: null,
  // When enabled, hashbang directive in the beginning of file is
  // allowed and treated as a line comment. Enabled by default when
  // `ecmaVersion` >= 2023.
  allowHashBang: !1,
  // By default, the parser will verify that private properties are
  // only used in places where they are valid and have been declared.
  // Set this to false to turn such checks off.
  checkPrivateFields: !0,
  // When `locations` is on, `loc` properties holding objects with
  // `start` and `end` properties in `{line, column}` form (with
  // line being 1-based and column 0-based) will be attached to the
  // nodes.
  locations: !1,
  // A function can be passed as `onToken` option, which will
  // cause Acorn to call that function with object in the same
  // format as tokens returned from `tokenizer().getToken()`. Note
  // that you are not allowed to call the parser from the
  // callback—that will corrupt its internal state.
  onToken: null,
  // A function can be passed as `onComment` option, which will
  // cause Acorn to call that function with `(block, text, start,
  // end)` parameters whenever a comment is skipped. `block` is a
  // boolean indicating whether this is a block (`/* */`) comment,
  // `text` is the content of the comment, and `start` and `end` are
  // character offsets that denote the start and end of the comment.
  // When the `locations` option is on, two more parameters are
  // passed, the full `{line, column}` locations of the start and
  // end of the comments. Note that you are not allowed to call the
  // parser from the callback—that will corrupt its internal state.
  // When this option has an array as value, objects representing the
  // comments are pushed to it.
  onComment: null,
  // Nodes have their start and end characters offsets recorded in
  // `start` and `end` properties (directly on the node, rather than
  // the `loc` object, which holds line/column data. To also add a
  // [semi-standardized][range] `range` property holding a `[start,
  // end]` array with the same numbers, set the `ranges` option to
  // `true`.
  //
  // [range]: https://bugzilla.mozilla.org/show_bug.cgi?id=745678
  ranges: !1,
  // It is possible to parse multiple files into a single AST by
  // passing the tree produced by parsing the first file as
  // `program` option in subsequent parses. This will add the
  // toplevel forms of the parsed file to the `Program` (top) node
  // of an existing parse tree.
  program: null,
  // When `locations` is on, you can pass this to record the source
  // file in every node's `loc` object.
  sourceFile: null,
  // This value, if given, is stored in every node, whether
  // `locations` is on or off.
  directSourceFile: null,
  // When enabled, parenthesized expressions are represented by
  // (non-standard) ParenthesizedExpression nodes
  preserveParens: !1
}, cr = !1;
function Xc(e) {
  var t = {};
  for (var i in zt)
    t[i] = e && ht(e, i) ? e[i] : zt[i];
  if (t.ecmaVersion === "latest" ? t.ecmaVersion = 1e8 : t.ecmaVersion == null ? (!cr && typeof console == "object" && console.warn && (cr = !0, console.warn(`Since Acorn 8.0.0, options.ecmaVersion is required.
Defaulting to 2020, but this will stop working in the future.`)), t.ecmaVersion = 11) : t.ecmaVersion >= 2015 && (t.ecmaVersion -= 2009), t.allowReserved == null && (t.allowReserved = t.ecmaVersion < 5), (!e || e.allowHashBang == null) && (t.allowHashBang = t.ecmaVersion >= 14), or(t.onToken)) {
    var r = t.onToken;
    t.onToken = function(n) {
      return r.push(n);
    };
  }
  return or(t.onComment) && (t.onComment = Yc(t, t.onComment)), t;
}
function Yc(e, t) {
  return function(i, r, n, u, h, d) {
    var y = {
      type: i ? "Block" : "Line",
      value: r,
      start: n,
      end: u
    };
    e.locations && (y.loc = new kt(this, h, d)), e.ranges && (y.range = [n, u]), t.push(y);
  };
}
var _t = 1, lt = 2, Pi = 4, Yr = 8, Ci = 16, Qr = 32, Kt = 64, es = 128, Qe = 256, St = 512, Gt = _t | lt | Qe;
function Ai(e, t) {
  return lt | (e ? Pi : 0) | (t ? Yr : 0);
}
var jt = 0, Ei = 1, je = 2, ts = 3, is = 4, rs = 5, X = function(t, i, r) {
  this.options = t = Xc(t), this.sourceFile = t.sourceFile, this.keywords = Ze(Uc[t.ecmaVersion >= 6 ? 6 : t.sourceType === "module" ? "5module" : 5]);
  var n = "";
  t.allowReserved !== !0 && (n = si[t.ecmaVersion >= 6 ? 6 : t.ecmaVersion === 5 ? 5 : 3], t.sourceType === "module" && (n += " await")), this.reservedWords = Ze(n);
  var u = (n ? n + " " : "") + si.strict;
  this.reservedWordsStrict = Ze(u), this.reservedWordsStrictBind = Ze(u + " " + si.strictBind), this.input = String(i), this.containsEsc = !1, r ? (this.pos = r, this.lineStart = this.input.lastIndexOf(`
`, r - 1) + 1, this.curLine = this.input.slice(0, this.lineStart).split(he).length) : (this.pos = this.lineStart = 0, this.curLine = 1), this.type = l.eof, this.value = null, this.start = this.end = this.pos, this.startLoc = this.endLoc = this.curPosition(), this.lastTokEndLoc = this.lastTokStartLoc = null, this.lastTokStart = this.lastTokEnd = this.pos, this.context = this.initialContext(), this.exprAllowed = !0, this.inModule = t.sourceType === "module", this.strict = this.inModule || this.strictDirective(this.pos), this.potentialArrowAt = -1, this.potentialArrowInForAwait = !1, this.yieldPos = this.awaitPos = this.awaitIdentPos = 0, this.labels = [], this.undefinedExports = /* @__PURE__ */ Object.create(null), this.pos === 0 && t.allowHashBang && this.input.slice(0, 2) === "#!" && this.skipLineComment(2), this.scopeStack = [], this.enterScope(_t), this.regexpState = null, this.privateNameStack = [];
}, Le = { inFunction: { configurable: !0 }, inGenerator: { configurable: !0 }, inAsync: { configurable: !0 }, canAwait: { configurable: !0 }, allowSuper: { configurable: !0 }, allowDirectSuper: { configurable: !0 }, treatFunctionsAsVar: { configurable: !0 }, allowNewDotTarget: { configurable: !0 }, inClassStaticBlock: { configurable: !0 } };
X.prototype.parse = function() {
  var t = this.options.program || this.startNode();
  return this.nextToken(), this.parseTopLevel(t);
};
Le.inFunction.get = function() {
  return (this.currentVarScope().flags & lt) > 0;
};
Le.inGenerator.get = function() {
  return (this.currentVarScope().flags & Yr) > 0;
};
Le.inAsync.get = function() {
  return (this.currentVarScope().flags & Pi) > 0;
};
Le.canAwait.get = function() {
  for (var e = this.scopeStack.length - 1; e >= 0; e--) {
    var t = this.scopeStack[e], i = t.flags;
    if (i & (Qe | St))
      return !1;
    if (i & lt)
      return (i & Pi) > 0;
  }
  return this.inModule && this.options.ecmaVersion >= 13 || this.options.allowAwaitOutsideFunction;
};
Le.allowSuper.get = function() {
  var e = this.currentThisScope(), t = e.flags;
  return (t & Kt) > 0 || this.options.allowSuperOutsideMethod;
};
Le.allowDirectSuper.get = function() {
  return (this.currentThisScope().flags & es) > 0;
};
Le.treatFunctionsAsVar.get = function() {
  return this.treatFunctionsAsVarInScope(this.currentScope());
};
Le.allowNewDotTarget.get = function() {
  for (var e = this.scopeStack.length - 1; e >= 0; e--) {
    var t = this.scopeStack[e], i = t.flags;
    if (i & (Qe | St) || i & lt && !(i & Ci))
      return !0;
  }
  return !1;
};
Le.inClassStaticBlock.get = function() {
  return (this.currentVarScope().flags & Qe) > 0;
};
X.extend = function() {
  for (var t = [], i = arguments.length; i--; ) t[i] = arguments[i];
  for (var r = this, n = 0; n < t.length; n++)
    r = t[n](r);
  return r;
};
X.parse = function(t, i) {
  return new this(i, t).parse();
};
X.parseExpressionAt = function(t, i, r) {
  var n = new this(r, t, i);
  return n.nextToken(), n.parseExpression();
};
X.tokenizer = function(t, i) {
  return new this(i, t);
};
Object.defineProperties(X.prototype, Le);
var le = X.prototype, Qc = /^(?:'((?:\\[^]|[^'\\])*?)'|"((?:\\[^]|[^"\\])*?)")/;
le.strictDirective = function(e) {
  if (this.options.ecmaVersion < 5)
    return !1;
  for (; ; ) {
    ne.lastIndex = e, e += ne.exec(this.input)[0].length;
    var t = Qc.exec(this.input.slice(e));
    if (!t)
      return !1;
    if ((t[1] || t[2]) === "use strict") {
      ne.lastIndex = e + t[0].length;
      var i = ne.exec(this.input), r = i.index + i[0].length, n = this.input.charAt(r);
      return n === ";" || n === "}" || he.test(i[0]) && !(/[(`.[+\-/*%<>=,?^&]/.test(n) || n === "!" && this.input.charAt(r + 1) === "=");
    }
    e += t[0].length, ne.lastIndex = e, e += ne.exec(this.input)[0].length, this.input[e] === ";" && e++;
  }
};
le.eat = function(e) {
  return this.type === e ? (this.next(), !0) : !1;
};
le.isContextual = function(e) {
  return this.type === l.name && this.value === e && !this.containsEsc;
};
le.eatContextual = function(e) {
  return this.isContextual(e) ? (this.next(), !0) : !1;
};
le.expectContextual = function(e) {
  this.eatContextual(e) || this.unexpected();
};
le.canInsertSemicolon = function() {
  return this.type === l.eof || this.type === l.braceR || he.test(this.input.slice(this.lastTokEnd, this.start));
};
le.insertSemicolon = function() {
  if (this.canInsertSemicolon())
    return this.options.onInsertedSemicolon && this.options.onInsertedSemicolon(this.lastTokEnd, this.lastTokEndLoc), !0;
};
le.semicolon = function() {
  !this.eat(l.semi) && !this.insertSemicolon() && this.unexpected();
};
le.afterTrailingComma = function(e, t) {
  if (this.type === e)
    return this.options.onTrailingComma && this.options.onTrailingComma(this.lastTokStart, this.lastTokStartLoc), t || this.next(), !0;
};
le.expect = function(e) {
  this.eat(e) || this.unexpected();
};
le.unexpected = function(e) {
  this.raise(e ?? this.start, "Unexpected token");
};
var Jt = function() {
  this.shorthandAssign = this.trailingComma = this.parenthesizedAssign = this.parenthesizedBind = this.doubleProto = -1;
};
le.checkPatternErrors = function(e, t) {
  if (e) {
    e.trailingComma > -1 && this.raiseRecoverable(e.trailingComma, "Comma is not permitted after the rest element");
    var i = t ? e.parenthesizedAssign : e.parenthesizedBind;
    i > -1 && this.raiseRecoverable(i, t ? "Assigning to rvalue" : "Parenthesized pattern");
  }
};
le.checkExpressionErrors = function(e, t) {
  if (!e)
    return !1;
  var i = e.shorthandAssign, r = e.doubleProto;
  if (!t)
    return i >= 0 || r >= 0;
  i >= 0 && this.raise(i, "Shorthand property assignments are valid only in destructuring patterns"), r >= 0 && this.raiseRecoverable(r, "Redefinition of __proto__ property");
};
le.checkYieldAwaitInDefaultParams = function() {
  this.yieldPos && (!this.awaitPos || this.yieldPos < this.awaitPos) && this.raise(this.yieldPos, "Yield expression cannot be a default value"), this.awaitPos && this.raise(this.awaitPos, "Await expression cannot be a default value");
};
le.isSimpleAssignTarget = function(e) {
  return e.type === "ParenthesizedExpression" ? this.isSimpleAssignTarget(e.expression) : e.type === "Identifier" || e.type === "MemberExpression";
};
var I = X.prototype;
I.parseTopLevel = function(e) {
  var t = /* @__PURE__ */ Object.create(null);
  for (e.body || (e.body = []); this.type !== l.eof; ) {
    var i = this.parseStatement(null, !0, t);
    e.body.push(i);
  }
  if (this.inModule)
    for (var r = 0, n = Object.keys(this.undefinedExports); r < n.length; r += 1) {
      var u = n[r];
      this.raiseRecoverable(this.undefinedExports[u].start, "Export '" + u + "' is not defined");
    }
  return this.adaptDirectivePrologue(e.body), this.next(), e.sourceType = this.options.sourceType, this.finishNode(e, "Program");
};
var Ii = { kind: "loop" }, eh = { kind: "switch" };
I.isLet = function(e) {
  if (this.options.ecmaVersion < 6 || !this.isContextual("let"))
    return !1;
  ne.lastIndex = this.pos;
  var t = ne.exec(this.input), i = this.pos + t[0].length, r = this.input.charCodeAt(i);
  if (r === 91 || r === 92)
    return !0;
  if (e)
    return !1;
  if (r === 123 || r > 55295 && r < 56320)
    return !0;
  if (Ee(r, !0)) {
    for (var n = i + 1; Me(r = this.input.charCodeAt(n), !0); )
      ++n;
    if (r === 92 || r > 55295 && r < 56320)
      return !0;
    var u = this.input.slice(i, n);
    if (!qc.test(u))
      return !0;
  }
  return !1;
};
I.isAsyncFunction = function() {
  if (this.options.ecmaVersion < 8 || !this.isContextual("async"))
    return !1;
  ne.lastIndex = this.pos;
  var e = ne.exec(this.input), t = this.pos + e[0].length, i;
  return !he.test(this.input.slice(this.pos, t)) && this.input.slice(t, t + 8) === "function" && (t + 8 === this.input.length || !(Me(i = this.input.charCodeAt(t + 8)) || i > 55295 && i < 56320));
};
I.isUsingKeyword = function(e, t) {
  if (this.options.ecmaVersion < 17 || !this.isContextual(e ? "await" : "using"))
    return !1;
  ne.lastIndex = this.pos;
  var i = ne.exec(this.input), r = this.pos + i[0].length;
  if (he.test(this.input.slice(this.pos, r)))
    return !1;
  if (e) {
    var n = r + 5, u;
    if (this.input.slice(r, n) !== "using" || n === this.input.length || Me(u = this.input.charCodeAt(n)) || u > 55295 && u < 56320)
      return !1;
    ne.lastIndex = n;
    var h = ne.exec(this.input);
    if (h && he.test(this.input.slice(n, n + h[0].length)))
      return !1;
  }
  if (t) {
    var d = r + 2, y;
    if (this.input.slice(r, d) === "of" && (d === this.input.length || !Me(y = this.input.charCodeAt(d)) && !(y > 55295 && y < 56320)))
      return !1;
  }
  var o = this.input.charCodeAt(r);
  return Ee(o, !0) || o === 92;
};
I.isAwaitUsing = function(e) {
  return this.isUsingKeyword(!0, e);
};
I.isUsing = function(e) {
  return this.isUsingKeyword(!1, e);
};
I.parseStatement = function(e, t, i) {
  var r = this.type, n = this.startNode(), u;
  switch (this.isLet(e) && (r = l._var, u = "let"), r) {
    case l._break:
    case l._continue:
      return this.parseBreakContinueStatement(n, r.keyword);
    case l._debugger:
      return this.parseDebuggerStatement(n);
    case l._do:
      return this.parseDoStatement(n);
    case l._for:
      return this.parseForStatement(n);
    case l._function:
      return e && (this.strict || e !== "if" && e !== "label") && this.options.ecmaVersion >= 6 && this.unexpected(), this.parseFunctionStatement(n, !1, !e);
    case l._class:
      return e && this.unexpected(), this.parseClass(n, !0);
    case l._if:
      return this.parseIfStatement(n);
    case l._return:
      return this.parseReturnStatement(n);
    case l._switch:
      return this.parseSwitchStatement(n);
    case l._throw:
      return this.parseThrowStatement(n);
    case l._try:
      return this.parseTryStatement(n);
    case l._const:
    case l._var:
      return u = u || this.value, e && u !== "var" && this.unexpected(), this.parseVarStatement(n, u);
    case l._while:
      return this.parseWhileStatement(n);
    case l._with:
      return this.parseWithStatement(n);
    case l.braceL:
      return this.parseBlock(!0, n);
    case l.semi:
      return this.parseEmptyStatement(n);
    case l._export:
    case l._import:
      if (this.options.ecmaVersion > 10 && r === l._import) {
        ne.lastIndex = this.pos;
        var h = ne.exec(this.input), d = this.pos + h[0].length, y = this.input.charCodeAt(d);
        if (y === 40 || y === 46)
          return this.parseExpressionStatement(n, this.parseExpression());
      }
      return this.options.allowImportExportEverywhere || (t || this.raise(this.start, "'import' and 'export' may only appear at the top level"), this.inModule || this.raise(this.start, "'import' and 'export' may appear only with 'sourceType: module'")), r === l._import ? this.parseImport(n) : this.parseExport(n, i);
    // If the statement does not start with a statement keyword or a
    // brace, it's an ExpressionStatement or LabeledStatement. We
    // simply start parsing an expression, and afterwards, if the
    // next token is a colon and the expression was a simple
    // Identifier node, we switch to interpreting it as a label.
    default:
      if (this.isAsyncFunction())
        return e && this.unexpected(), this.next(), this.parseFunctionStatement(n, !0, !e);
      var o = this.isAwaitUsing(!1) ? "await using" : this.isUsing(!1) ? "using" : null;
      if (o)
        return t && this.options.sourceType === "script" && this.raise(this.start, "Using declaration cannot appear in the top level when source type is `script`"), o === "await using" && (this.canAwait || this.raise(this.start, "Await using cannot appear outside of async function"), this.next()), this.next(), this.parseVar(n, !1, o), this.semicolon(), this.finishNode(n, "VariableDeclaration");
      var S = this.value, w = this.parseExpression();
      return r === l.name && w.type === "Identifier" && this.eat(l.colon) ? this.parseLabeledStatement(n, S, w, e) : this.parseExpressionStatement(n, w);
  }
};
I.parseBreakContinueStatement = function(e, t) {
  var i = t === "break";
  this.next(), this.eat(l.semi) || this.insertSemicolon() ? e.label = null : this.type !== l.name ? this.unexpected() : (e.label = this.parseIdent(), this.semicolon());
  for (var r = 0; r < this.labels.length; ++r) {
    var n = this.labels[r];
    if ((e.label == null || n.name === e.label.name) && (n.kind != null && (i || n.kind === "loop") || e.label && i))
      break;
  }
  return r === this.labels.length && this.raise(e.start, "Unsyntactic " + t), this.finishNode(e, i ? "BreakStatement" : "ContinueStatement");
};
I.parseDebuggerStatement = function(e) {
  return this.next(), this.semicolon(), this.finishNode(e, "DebuggerStatement");
};
I.parseDoStatement = function(e) {
  return this.next(), this.labels.push(Ii), e.body = this.parseStatement("do"), this.labels.pop(), this.expect(l._while), e.test = this.parseParenExpression(), this.options.ecmaVersion >= 6 ? this.eat(l.semi) : this.semicolon(), this.finishNode(e, "DoWhileStatement");
};
I.parseForStatement = function(e) {
  this.next();
  var t = this.options.ecmaVersion >= 9 && this.canAwait && this.eatContextual("await") ? this.lastTokStart : -1;
  if (this.labels.push(Ii), this.enterScope(0), this.expect(l.parenL), this.type === l.semi)
    return t > -1 && this.unexpected(t), this.parseFor(e, null);
  var i = this.isLet();
  if (this.type === l._var || this.type === l._const || i) {
    var r = this.startNode(), n = i ? "let" : this.value;
    return this.next(), this.parseVar(r, !0, n), this.finishNode(r, "VariableDeclaration"), this.parseForAfterInit(e, r, t);
  }
  var u = this.isContextual("let"), h = !1, d = this.isUsing(!0) ? "using" : this.isAwaitUsing(!0) ? "await using" : null;
  if (d) {
    var y = this.startNode();
    return this.next(), d === "await using" && this.next(), this.parseVar(y, !0, d), this.finishNode(y, "VariableDeclaration"), this.parseForAfterInit(e, y, t);
  }
  var o = this.containsEsc, S = new Jt(), w = this.start, C = t > -1 ? this.parseExprSubscripts(S, "await") : this.parseExpression(!0, S);
  return this.type === l._in || (h = this.options.ecmaVersion >= 6 && this.isContextual("of")) ? (t > -1 ? (this.type === l._in && this.unexpected(t), e.await = !0) : h && this.options.ecmaVersion >= 8 && (C.start === w && !o && C.type === "Identifier" && C.name === "async" ? this.unexpected() : this.options.ecmaVersion >= 9 && (e.await = !1)), u && h && this.raise(C.start, "The left-hand side of a for-of loop may not start with 'let'."), this.toAssignable(C, !1, S), this.checkLValPattern(C), this.parseForIn(e, C)) : (this.checkExpressionErrors(S, !0), t > -1 && this.unexpected(t), this.parseFor(e, C));
};
I.parseForAfterInit = function(e, t, i) {
  return (this.type === l._in || this.options.ecmaVersion >= 6 && this.isContextual("of")) && t.declarations.length === 1 ? (this.options.ecmaVersion >= 9 && (this.type === l._in ? i > -1 && this.unexpected(i) : e.await = i > -1), this.parseForIn(e, t)) : (i > -1 && this.unexpected(i), this.parseFor(e, t));
};
I.parseFunctionStatement = function(e, t, i) {
  return this.next(), this.parseFunction(e, xt | (i ? 0 : fi), !1, t);
};
I.parseIfStatement = function(e) {
  return this.next(), e.test = this.parseParenExpression(), e.consequent = this.parseStatement("if"), e.alternate = this.eat(l._else) ? this.parseStatement("if") : null, this.finishNode(e, "IfStatement");
};
I.parseReturnStatement = function(e) {
  return !this.inFunction && !this.options.allowReturnOutsideFunction && this.raise(this.start, "'return' outside of function"), this.next(), this.eat(l.semi) || this.insertSemicolon() ? e.argument = null : (e.argument = this.parseExpression(), this.semicolon()), this.finishNode(e, "ReturnStatement");
};
I.parseSwitchStatement = function(e) {
  this.next(), e.discriminant = this.parseParenExpression(), e.cases = [], this.expect(l.braceL), this.labels.push(eh), this.enterScope(0);
  for (var t, i = !1; this.type !== l.braceR; )
    if (this.type === l._case || this.type === l._default) {
      var r = this.type === l._case;
      t && this.finishNode(t, "SwitchCase"), e.cases.push(t = this.startNode()), t.consequent = [], this.next(), r ? t.test = this.parseExpression() : (i && this.raiseRecoverable(this.lastTokStart, "Multiple default clauses"), i = !0, t.test = null), this.expect(l.colon);
    } else
      t || this.unexpected(), t.consequent.push(this.parseStatement(null));
  return this.exitScope(), t && this.finishNode(t, "SwitchCase"), this.next(), this.labels.pop(), this.finishNode(e, "SwitchStatement");
};
I.parseThrowStatement = function(e) {
  return this.next(), he.test(this.input.slice(this.lastTokEnd, this.start)) && this.raise(this.lastTokEnd, "Illegal newline after throw"), e.argument = this.parseExpression(), this.semicolon(), this.finishNode(e, "ThrowStatement");
};
var th = [];
I.parseCatchClauseParam = function() {
  var e = this.parseBindingAtom(), t = e.type === "Identifier";
  return this.enterScope(t ? Qr : 0), this.checkLValPattern(e, t ? is : je), this.expect(l.parenR), e;
};
I.parseTryStatement = function(e) {
  if (this.next(), e.block = this.parseBlock(), e.handler = null, this.type === l._catch) {
    var t = this.startNode();
    this.next(), this.eat(l.parenL) ? t.param = this.parseCatchClauseParam() : (this.options.ecmaVersion < 10 && this.unexpected(), t.param = null, this.enterScope(0)), t.body = this.parseBlock(!1), this.exitScope(), e.handler = this.finishNode(t, "CatchClause");
  }
  return e.finalizer = this.eat(l._finally) ? this.parseBlock() : null, !e.handler && !e.finalizer && this.raise(e.start, "Missing catch or finally clause"), this.finishNode(e, "TryStatement");
};
I.parseVarStatement = function(e, t, i) {
  return this.next(), this.parseVar(e, !1, t, i), this.semicolon(), this.finishNode(e, "VariableDeclaration");
};
I.parseWhileStatement = function(e) {
  return this.next(), e.test = this.parseParenExpression(), this.labels.push(Ii), e.body = this.parseStatement("while"), this.labels.pop(), this.finishNode(e, "WhileStatement");
};
I.parseWithStatement = function(e) {
  return this.strict && this.raise(this.start, "'with' in strict mode"), this.next(), e.object = this.parseParenExpression(), e.body = this.parseStatement("with"), this.finishNode(e, "WithStatement");
};
I.parseEmptyStatement = function(e) {
  return this.next(), this.finishNode(e, "EmptyStatement");
};
I.parseLabeledStatement = function(e, t, i, r) {
  for (var n = 0, u = this.labels; n < u.length; n += 1) {
    var h = u[n];
    h.name === t && this.raise(i.start, "Label '" + t + "' is already declared");
  }
  for (var d = this.type.isLoop ? "loop" : this.type === l._switch ? "switch" : null, y = this.labels.length - 1; y >= 0; y--) {
    var o = this.labels[y];
    if (o.statementStart === e.start)
      o.statementStart = this.start, o.kind = d;
    else
      break;
  }
  return this.labels.push({ name: t, kind: d, statementStart: this.start }), e.body = this.parseStatement(r ? r.indexOf("label") === -1 ? r + "label" : r : "label"), this.labels.pop(), e.label = i, this.finishNode(e, "LabeledStatement");
};
I.parseExpressionStatement = function(e, t) {
  return e.expression = t, this.semicolon(), this.finishNode(e, "ExpressionStatement");
};
I.parseBlock = function(e, t, i) {
  for (e === void 0 && (e = !0), t === void 0 && (t = this.startNode()), t.body = [], this.expect(l.braceL), e && this.enterScope(0); this.type !== l.braceR; ) {
    var r = this.parseStatement(null);
    t.body.push(r);
  }
  return i && (this.strict = !1), this.next(), e && this.exitScope(), this.finishNode(t, "BlockStatement");
};
I.parseFor = function(e, t) {
  return e.init = t, this.expect(l.semi), e.test = this.type === l.semi ? null : this.parseExpression(), this.expect(l.semi), e.update = this.type === l.parenR ? null : this.parseExpression(), this.expect(l.parenR), e.body = this.parseStatement("for"), this.exitScope(), this.labels.pop(), this.finishNode(e, "ForStatement");
};
I.parseForIn = function(e, t) {
  var i = this.type === l._in;
  return this.next(), t.type === "VariableDeclaration" && t.declarations[0].init != null && (!i || this.options.ecmaVersion < 8 || this.strict || t.kind !== "var" || t.declarations[0].id.type !== "Identifier") && this.raise(
    t.start,
    (i ? "for-in" : "for-of") + " loop variable declaration may not have an initializer"
  ), e.left = t, e.right = i ? this.parseExpression() : this.parseMaybeAssign(), this.expect(l.parenR), e.body = this.parseStatement("for"), this.exitScope(), this.labels.pop(), this.finishNode(e, i ? "ForInStatement" : "ForOfStatement");
};
I.parseVar = function(e, t, i, r) {
  for (e.declarations = [], e.kind = i; ; ) {
    var n = this.startNode();
    if (this.parseVarId(n, i), this.eat(l.eq) ? n.init = this.parseMaybeAssign(t) : !r && i === "const" && !(this.type === l._in || this.options.ecmaVersion >= 6 && this.isContextual("of")) ? this.unexpected() : !r && (i === "using" || i === "await using") && this.options.ecmaVersion >= 17 && this.type !== l._in && !this.isContextual("of") ? this.raise(this.lastTokEnd, "Missing initializer in " + i + " declaration") : !r && n.id.type !== "Identifier" && !(t && (this.type === l._in || this.isContextual("of"))) ? this.raise(this.lastTokEnd, "Complex binding patterns require an initialization value") : n.init = null, e.declarations.push(this.finishNode(n, "VariableDeclarator")), !this.eat(l.comma))
      break;
  }
  return e;
};
I.parseVarId = function(e, t) {
  e.id = t === "using" || t === "await using" ? this.parseIdent() : this.parseBindingAtom(), this.checkLValPattern(e.id, t === "var" ? Ei : je, !1);
};
var xt = 1, fi = 2, ss = 4;
I.parseFunction = function(e, t, i, r, n) {
  this.initFunction(e), (this.options.ecmaVersion >= 9 || this.options.ecmaVersion >= 6 && !r) && (this.type === l.star && t & fi && this.unexpected(), e.generator = this.eat(l.star)), this.options.ecmaVersion >= 8 && (e.async = !!r), t & xt && (e.id = t & ss && this.type !== l.name ? null : this.parseIdent(), e.id && !(t & fi) && this.checkLValSimple(e.id, this.strict || e.generator || e.async ? this.treatFunctionsAsVar ? Ei : je : ts));
  var u = this.yieldPos, h = this.awaitPos, d = this.awaitIdentPos;
  return this.yieldPos = 0, this.awaitPos = 0, this.awaitIdentPos = 0, this.enterScope(Ai(e.async, e.generator)), t & xt || (e.id = this.type === l.name ? this.parseIdent() : null), this.parseFunctionParams(e), this.parseFunctionBody(e, i, !1, n), this.yieldPos = u, this.awaitPos = h, this.awaitIdentPos = d, this.finishNode(e, t & xt ? "FunctionDeclaration" : "FunctionExpression");
};
I.parseFunctionParams = function(e) {
  this.expect(l.parenL), e.params = this.parseBindingList(l.parenR, !1, this.options.ecmaVersion >= 8), this.checkYieldAwaitInDefaultParams();
};
I.parseClass = function(e, t) {
  this.next();
  var i = this.strict;
  this.strict = !0, this.parseClassId(e, t), this.parseClassSuper(e);
  var r = this.enterClassBody(), n = this.startNode(), u = !1;
  for (n.body = [], this.expect(l.braceL); this.type !== l.braceR; ) {
    var h = this.parseClassElement(e.superClass !== null);
    h && (n.body.push(h), h.type === "MethodDefinition" && h.kind === "constructor" ? (u && this.raiseRecoverable(h.start, "Duplicate constructor in the same class"), u = !0) : h.key && h.key.type === "PrivateIdentifier" && ih(r, h) && this.raiseRecoverable(h.key.start, "Identifier '#" + h.key.name + "' has already been declared"));
  }
  return this.strict = i, this.next(), e.body = this.finishNode(n, "ClassBody"), this.exitClassBody(), this.finishNode(e, t ? "ClassDeclaration" : "ClassExpression");
};
I.parseClassElement = function(e) {
  if (this.eat(l.semi))
    return null;
  var t = this.options.ecmaVersion, i = this.startNode(), r = "", n = !1, u = !1, h = "method", d = !1;
  if (this.eatContextual("static")) {
    if (t >= 13 && this.eat(l.braceL))
      return this.parseClassStaticBlock(i), i;
    this.isClassElementNameStart() || this.type === l.star ? d = !0 : r = "static";
  }
  if (i.static = d, !r && t >= 8 && this.eatContextual("async") && ((this.isClassElementNameStart() || this.type === l.star) && !this.canInsertSemicolon() ? u = !0 : r = "async"), !r && (t >= 9 || !u) && this.eat(l.star) && (n = !0), !r && !u && !n) {
    var y = this.value;
    (this.eatContextual("get") || this.eatContextual("set")) && (this.isClassElementNameStart() ? h = y : r = y);
  }
  if (r ? (i.computed = !1, i.key = this.startNodeAt(this.lastTokStart, this.lastTokStartLoc), i.key.name = r, this.finishNode(i.key, "Identifier")) : this.parseClassElementName(i), t < 13 || this.type === l.parenL || h !== "method" || n || u) {
    var o = !i.static && $t(i, "constructor"), S = o && e;
    o && h !== "method" && this.raise(i.key.start, "Constructor can't have get/set modifier"), i.kind = o ? "constructor" : h, this.parseClassMethod(i, n, u, S);
  } else
    this.parseClassField(i);
  return i;
};
I.isClassElementNameStart = function() {
  return this.type === l.name || this.type === l.privateId || this.type === l.num || this.type === l.string || this.type === l.bracketL || this.type.keyword;
};
I.parseClassElementName = function(e) {
  this.type === l.privateId ? (this.value === "constructor" && this.raise(this.start, "Classes can't have an element named '#constructor'"), e.computed = !1, e.key = this.parsePrivateIdent()) : this.parsePropertyName(e);
};
I.parseClassMethod = function(e, t, i, r) {
  var n = e.key;
  e.kind === "constructor" ? (t && this.raise(n.start, "Constructor can't be a generator"), i && this.raise(n.start, "Constructor can't be an async method")) : e.static && $t(e, "prototype") && this.raise(n.start, "Classes may not have a static property named prototype");
  var u = e.value = this.parseMethod(t, i, r);
  return e.kind === "get" && u.params.length !== 0 && this.raiseRecoverable(u.start, "getter should have no params"), e.kind === "set" && u.params.length !== 1 && this.raiseRecoverable(u.start, "setter should have exactly one param"), e.kind === "set" && u.params[0].type === "RestElement" && this.raiseRecoverable(u.params[0].start, "Setter cannot use rest params"), this.finishNode(e, "MethodDefinition");
};
I.parseClassField = function(e) {
  return $t(e, "constructor") ? this.raise(e.key.start, "Classes can't have a field named 'constructor'") : e.static && $t(e, "prototype") && this.raise(e.key.start, "Classes can't have a static field named 'prototype'"), this.eat(l.eq) ? (this.enterScope(St | Kt), e.value = this.parseMaybeAssign(), this.exitScope()) : e.value = null, this.semicolon(), this.finishNode(e, "PropertyDefinition");
};
I.parseClassStaticBlock = function(e) {
  e.body = [];
  var t = this.labels;
  for (this.labels = [], this.enterScope(Qe | Kt); this.type !== l.braceR; ) {
    var i = this.parseStatement(null);
    e.body.push(i);
  }
  return this.next(), this.exitScope(), this.labels = t, this.finishNode(e, "StaticBlock");
};
I.parseClassId = function(e, t) {
  this.type === l.name ? (e.id = this.parseIdent(), t && this.checkLValSimple(e.id, je, !1)) : (t === !0 && this.unexpected(), e.id = null);
};
I.parseClassSuper = function(e) {
  e.superClass = this.eat(l._extends) ? this.parseExprSubscripts(null, !1) : null;
};
I.enterClassBody = function() {
  var e = { declared: /* @__PURE__ */ Object.create(null), used: [] };
  return this.privateNameStack.push(e), e.declared;
};
I.exitClassBody = function() {
  var e = this.privateNameStack.pop(), t = e.declared, i = e.used;
  if (this.options.checkPrivateFields)
    for (var r = this.privateNameStack.length, n = r === 0 ? null : this.privateNameStack[r - 1], u = 0; u < i.length; ++u) {
      var h = i[u];
      ht(t, h.name) || (n ? n.used.push(h) : this.raiseRecoverable(h.start, "Private field '#" + h.name + "' must be declared in an enclosing class"));
    }
};
function ih(e, t) {
  var i = t.key.name, r = e[i], n = "true";
  return t.type === "MethodDefinition" && (t.kind === "get" || t.kind === "set") && (n = (t.static ? "s" : "i") + t.kind), r === "iget" && n === "iset" || r === "iset" && n === "iget" || r === "sget" && n === "sset" || r === "sset" && n === "sget" ? (e[i] = "true", !1) : r ? !0 : (e[i] = n, !1);
}
function $t(e, t) {
  var i = e.computed, r = e.key;
  return !i && (r.type === "Identifier" && r.name === t || r.type === "Literal" && r.value === t);
}
I.parseExportAllDeclaration = function(e, t) {
  return this.options.ecmaVersion >= 11 && (this.eatContextual("as") ? (e.exported = this.parseModuleExportName(), this.checkExport(t, e.exported, this.lastTokStart)) : e.exported = null), this.expectContextual("from"), this.type !== l.string && this.unexpected(), e.source = this.parseExprAtom(), this.options.ecmaVersion >= 16 && (e.attributes = this.parseWithClause()), this.semicolon(), this.finishNode(e, "ExportAllDeclaration");
};
I.parseExport = function(e, t) {
  if (this.next(), this.eat(l.star))
    return this.parseExportAllDeclaration(e, t);
  if (this.eat(l._default))
    return this.checkExport(t, "default", this.lastTokStart), e.declaration = this.parseExportDefaultDeclaration(), this.finishNode(e, "ExportDefaultDeclaration");
  if (this.shouldParseExportStatement())
    e.declaration = this.parseExportDeclaration(e), e.declaration.type === "VariableDeclaration" ? this.checkVariableExport(t, e.declaration.declarations) : this.checkExport(t, e.declaration.id, e.declaration.id.start), e.specifiers = [], e.source = null, this.options.ecmaVersion >= 16 && (e.attributes = []);
  else {
    if (e.declaration = null, e.specifiers = this.parseExportSpecifiers(t), this.eatContextual("from"))
      this.type !== l.string && this.unexpected(), e.source = this.parseExprAtom(), this.options.ecmaVersion >= 16 && (e.attributes = this.parseWithClause());
    else {
      for (var i = 0, r = e.specifiers; i < r.length; i += 1) {
        var n = r[i];
        this.checkUnreserved(n.local), this.checkLocalExport(n.local), n.local.type === "Literal" && this.raise(n.local.start, "A string literal cannot be used as an exported binding without `from`.");
      }
      e.source = null, this.options.ecmaVersion >= 16 && (e.attributes = []);
    }
    this.semicolon();
  }
  return this.finishNode(e, "ExportNamedDeclaration");
};
I.parseExportDeclaration = function(e) {
  return this.parseStatement(null);
};
I.parseExportDefaultDeclaration = function() {
  var e;
  if (this.type === l._function || (e = this.isAsyncFunction())) {
    var t = this.startNode();
    return this.next(), e && this.next(), this.parseFunction(t, xt | ss, !1, e);
  } else if (this.type === l._class) {
    var i = this.startNode();
    return this.parseClass(i, "nullableID");
  } else {
    var r = this.parseMaybeAssign();
    return this.semicolon(), r;
  }
};
I.checkExport = function(e, t, i) {
  e && (typeof t != "string" && (t = t.type === "Identifier" ? t.name : t.value), ht(e, t) && this.raiseRecoverable(i, "Duplicate export '" + t + "'"), e[t] = !0);
};
I.checkPatternExport = function(e, t) {
  var i = t.type;
  if (i === "Identifier")
    this.checkExport(e, t, t.start);
  else if (i === "ObjectPattern")
    for (var r = 0, n = t.properties; r < n.length; r += 1) {
      var u = n[r];
      this.checkPatternExport(e, u);
    }
  else if (i === "ArrayPattern")
    for (var h = 0, d = t.elements; h < d.length; h += 1) {
      var y = d[h];
      y && this.checkPatternExport(e, y);
    }
  else i === "Property" ? this.checkPatternExport(e, t.value) : i === "AssignmentPattern" ? this.checkPatternExport(e, t.left) : i === "RestElement" && this.checkPatternExport(e, t.argument);
};
I.checkVariableExport = function(e, t) {
  if (e)
    for (var i = 0, r = t; i < r.length; i += 1) {
      var n = r[i];
      this.checkPatternExport(e, n.id);
    }
};
I.shouldParseExportStatement = function() {
  return this.type.keyword === "var" || this.type.keyword === "const" || this.type.keyword === "class" || this.type.keyword === "function" || this.isLet() || this.isAsyncFunction();
};
I.parseExportSpecifier = function(e) {
  var t = this.startNode();
  return t.local = this.parseModuleExportName(), t.exported = this.eatContextual("as") ? this.parseModuleExportName() : t.local, this.checkExport(
    e,
    t.exported,
    t.exported.start
  ), this.finishNode(t, "ExportSpecifier");
};
I.parseExportSpecifiers = function(e) {
  var t = [], i = !0;
  for (this.expect(l.braceL); !this.eat(l.braceR); ) {
    if (i)
      i = !1;
    else if (this.expect(l.comma), this.afterTrailingComma(l.braceR))
      break;
    t.push(this.parseExportSpecifier(e));
  }
  return t;
};
I.parseImport = function(e) {
  return this.next(), this.type === l.string ? (e.specifiers = th, e.source = this.parseExprAtom()) : (e.specifiers = this.parseImportSpecifiers(), this.expectContextual("from"), e.source = this.type === l.string ? this.parseExprAtom() : this.unexpected()), this.options.ecmaVersion >= 16 && (e.attributes = this.parseWithClause()), this.semicolon(), this.finishNode(e, "ImportDeclaration");
};
I.parseImportSpecifier = function() {
  var e = this.startNode();
  return e.imported = this.parseModuleExportName(), this.eatContextual("as") ? e.local = this.parseIdent() : (this.checkUnreserved(e.imported), e.local = e.imported), this.checkLValSimple(e.local, je), this.finishNode(e, "ImportSpecifier");
};
I.parseImportDefaultSpecifier = function() {
  var e = this.startNode();
  return e.local = this.parseIdent(), this.checkLValSimple(e.local, je), this.finishNode(e, "ImportDefaultSpecifier");
};
I.parseImportNamespaceSpecifier = function() {
  var e = this.startNode();
  return this.next(), this.expectContextual("as"), e.local = this.parseIdent(), this.checkLValSimple(e.local, je), this.finishNode(e, "ImportNamespaceSpecifier");
};
I.parseImportSpecifiers = function() {
  var e = [], t = !0;
  if (this.type === l.name && (e.push(this.parseImportDefaultSpecifier()), !this.eat(l.comma)))
    return e;
  if (this.type === l.star)
    return e.push(this.parseImportNamespaceSpecifier()), e;
  for (this.expect(l.braceL); !this.eat(l.braceR); ) {
    if (t)
      t = !1;
    else if (this.expect(l.comma), this.afterTrailingComma(l.braceR))
      break;
    e.push(this.parseImportSpecifier());
  }
  return e;
};
I.parseWithClause = function() {
  var e = [];
  if (!this.eat(l._with))
    return e;
  this.expect(l.braceL);
  for (var t = {}, i = !0; !this.eat(l.braceR); ) {
    if (i)
      i = !1;
    else if (this.expect(l.comma), this.afterTrailingComma(l.braceR))
      break;
    var r = this.parseImportAttribute(), n = r.key.type === "Identifier" ? r.key.name : r.key.value;
    ht(t, n) && this.raiseRecoverable(r.key.start, "Duplicate attribute key '" + n + "'"), t[n] = !0, e.push(r);
  }
  return e;
};
I.parseImportAttribute = function() {
  var e = this.startNode();
  return e.key = this.type === l.string ? this.parseExprAtom() : this.parseIdent(this.options.allowReserved !== "never"), this.expect(l.colon), this.type !== l.string && this.unexpected(), e.value = this.parseExprAtom(), this.finishNode(e, "ImportAttribute");
};
I.parseModuleExportName = function() {
  if (this.options.ecmaVersion >= 13 && this.type === l.string) {
    var e = this.parseLiteral(this.value);
    return Jc.test(e.value) && this.raise(e.start, "An export name cannot include a lone surrogate."), e;
  }
  return this.parseIdent(!0);
};
I.adaptDirectivePrologue = function(e) {
  for (var t = 0; t < e.length && this.isDirectiveCandidate(e[t]); ++t)
    e[t].directive = e[t].expression.raw.slice(1, -1);
};
I.isDirectiveCandidate = function(e) {
  return this.options.ecmaVersion >= 5 && e.type === "ExpressionStatement" && e.expression.type === "Literal" && typeof e.expression.value == "string" && // Reject parenthesized strings.
  (this.input[e.start] === '"' || this.input[e.start] === "'");
};
var Pe = X.prototype;
Pe.toAssignable = function(e, t, i) {
  if (this.options.ecmaVersion >= 6 && e)
    switch (e.type) {
      case "Identifier":
        this.inAsync && e.name === "await" && this.raise(e.start, "Cannot use 'await' as identifier inside an async function");
        break;
      case "ObjectPattern":
      case "ArrayPattern":
      case "AssignmentPattern":
      case "RestElement":
        break;
      case "ObjectExpression":
        e.type = "ObjectPattern", i && this.checkPatternErrors(i, !0);
        for (var r = 0, n = e.properties; r < n.length; r += 1) {
          var u = n[r];
          this.toAssignable(u, t), u.type === "RestElement" && (u.argument.type === "ArrayPattern" || u.argument.type === "ObjectPattern") && this.raise(u.argument.start, "Unexpected token");
        }
        break;
      case "Property":
        e.kind !== "init" && this.raise(e.key.start, "Object pattern can't contain getter or setter"), this.toAssignable(e.value, t);
        break;
      case "ArrayExpression":
        e.type = "ArrayPattern", i && this.checkPatternErrors(i, !0), this.toAssignableList(e.elements, t);
        break;
      case "SpreadElement":
        e.type = "RestElement", this.toAssignable(e.argument, t), e.argument.type === "AssignmentPattern" && this.raise(e.argument.start, "Rest elements cannot have a default value");
        break;
      case "AssignmentExpression":
        e.operator !== "=" && this.raise(e.left.end, "Only '=' operator can be used for specifying default value."), e.type = "AssignmentPattern", delete e.operator, this.toAssignable(e.left, t);
        break;
      case "ParenthesizedExpression":
        this.toAssignable(e.expression, t, i);
        break;
      case "ChainExpression":
        this.raiseRecoverable(e.start, "Optional chaining cannot appear in left-hand side");
        break;
      case "MemberExpression":
        if (!t)
          break;
      default:
        this.raise(e.start, "Assigning to rvalue");
    }
  else i && this.checkPatternErrors(i, !0);
  return e;
};
Pe.toAssignableList = function(e, t) {
  for (var i = e.length, r = 0; r < i; r++) {
    var n = e[r];
    n && this.toAssignable(n, t);
  }
  if (i) {
    var u = e[i - 1];
    this.options.ecmaVersion === 6 && t && u && u.type === "RestElement" && u.argument.type !== "Identifier" && this.unexpected(u.argument.start);
  }
  return e;
};
Pe.parseSpread = function(e) {
  var t = this.startNode();
  return this.next(), t.argument = this.parseMaybeAssign(!1, e), this.finishNode(t, "SpreadElement");
};
Pe.parseRestBinding = function() {
  var e = this.startNode();
  return this.next(), this.options.ecmaVersion === 6 && this.type !== l.name && this.unexpected(), e.argument = this.parseBindingAtom(), this.finishNode(e, "RestElement");
};
Pe.parseBindingAtom = function() {
  if (this.options.ecmaVersion >= 6)
    switch (this.type) {
      case l.bracketL:
        var e = this.startNode();
        return this.next(), e.elements = this.parseBindingList(l.bracketR, !0, !0), this.finishNode(e, "ArrayPattern");
      case l.braceL:
        return this.parseObj(!0);
    }
  return this.parseIdent();
};
Pe.parseBindingList = function(e, t, i, r) {
  for (var n = [], u = !0; !this.eat(e); )
    if (u ? u = !1 : this.expect(l.comma), t && this.type === l.comma)
      n.push(null);
    else {
      if (i && this.afterTrailingComma(e))
        break;
      if (this.type === l.ellipsis) {
        var h = this.parseRestBinding();
        this.parseBindingListItem(h), n.push(h), this.type === l.comma && this.raiseRecoverable(this.start, "Comma is not permitted after the rest element"), this.expect(e);
        break;
      } else
        n.push(this.parseAssignableListItem(r));
    }
  return n;
};
Pe.parseAssignableListItem = function(e) {
  var t = this.parseMaybeDefault(this.start, this.startLoc);
  return this.parseBindingListItem(t), t;
};
Pe.parseBindingListItem = function(e) {
  return e;
};
Pe.parseMaybeDefault = function(e, t, i) {
  if (i = i || this.parseBindingAtom(), this.options.ecmaVersion < 6 || !this.eat(l.eq))
    return i;
  var r = this.startNodeAt(e, t);
  return r.left = i, r.right = this.parseMaybeAssign(), this.finishNode(r, "AssignmentPattern");
};
Pe.checkLValSimple = function(e, t, i) {
  t === void 0 && (t = jt);
  var r = t !== jt;
  switch (e.type) {
    case "Identifier":
      this.strict && this.reservedWordsStrictBind.test(e.name) && this.raiseRecoverable(e.start, (r ? "Binding " : "Assigning to ") + e.name + " in strict mode"), r && (t === je && e.name === "let" && this.raiseRecoverable(e.start, "let is disallowed as a lexically bound name"), i && (ht(i, e.name) && this.raiseRecoverable(e.start, "Argument name clash"), i[e.name] = !0), t !== rs && this.declareName(e.name, t, e.start));
      break;
    case "ChainExpression":
      this.raiseRecoverable(e.start, "Optional chaining cannot appear in left-hand side");
      break;
    case "MemberExpression":
      r && this.raiseRecoverable(e.start, "Binding member expression");
      break;
    case "ParenthesizedExpression":
      return r && this.raiseRecoverable(e.start, "Binding parenthesized expression"), this.checkLValSimple(e.expression, t, i);
    default:
      this.raise(e.start, (r ? "Binding" : "Assigning to") + " rvalue");
  }
};
Pe.checkLValPattern = function(e, t, i) {
  switch (t === void 0 && (t = jt), e.type) {
    case "ObjectPattern":
      for (var r = 0, n = e.properties; r < n.length; r += 1) {
        var u = n[r];
        this.checkLValInnerPattern(u, t, i);
      }
      break;
    case "ArrayPattern":
      for (var h = 0, d = e.elements; h < d.length; h += 1) {
        var y = d[h];
        y && this.checkLValInnerPattern(y, t, i);
      }
      break;
    default:
      this.checkLValSimple(e, t, i);
  }
};
Pe.checkLValInnerPattern = function(e, t, i) {
  switch (t === void 0 && (t = jt), e.type) {
    case "Property":
      this.checkLValInnerPattern(e.value, t, i);
      break;
    case "AssignmentPattern":
      this.checkLValPattern(e.left, t, i);
      break;
    case "RestElement":
      this.checkLValPattern(e.argument, t, i);
      break;
    default:
      this.checkLValPattern(e, t, i);
  }
};
var ue = function(t, i, r, n, u) {
  this.token = t, this.isExpr = !!i, this.preserveSpace = !!r, this.override = n, this.generator = !!u;
}, H = {
  b_stat: new ue("{", !1),
  b_expr: new ue("{", !0),
  b_tmpl: new ue("${", !1),
  p_stat: new ue("(", !1),
  p_expr: new ue("(", !0),
  q_tmpl: new ue("`", !0, !0, function(e) {
    return e.tryReadTemplateToken();
  }),
  f_stat: new ue("function", !1),
  f_expr: new ue("function", !0),
  f_expr_gen: new ue("function", !0, !1, null, !0),
  f_gen: new ue("function", !1, !1, null, !0)
}, pt = X.prototype;
pt.initialContext = function() {
  return [H.b_stat];
};
pt.curContext = function() {
  return this.context[this.context.length - 1];
};
pt.braceIsBlock = function(e) {
  var t = this.curContext();
  return t === H.f_expr || t === H.f_stat ? !0 : e === l.colon && (t === H.b_stat || t === H.b_expr) ? !t.isExpr : e === l._return || e === l.name && this.exprAllowed ? he.test(this.input.slice(this.lastTokEnd, this.start)) : e === l._else || e === l.semi || e === l.eof || e === l.parenR || e === l.arrow ? !0 : e === l.braceL ? t === H.b_stat : e === l._var || e === l._const || e === l.name ? !1 : !this.exprAllowed;
};
pt.inGeneratorContext = function() {
  for (var e = this.context.length - 1; e >= 1; e--) {
    var t = this.context[e];
    if (t.token === "function")
      return t.generator;
  }
  return !1;
};
pt.updateContext = function(e) {
  var t, i = this.type;
  i.keyword && e === l.dot ? this.exprAllowed = !1 : (t = i.updateContext) ? t.call(this, e) : this.exprAllowed = i.beforeExpr;
};
pt.overrideContext = function(e) {
  this.curContext() !== e && (this.context[this.context.length - 1] = e);
};
l.parenR.updateContext = l.braceR.updateContext = function() {
  if (this.context.length === 1) {
    this.exprAllowed = !0;
    return;
  }
  var e = this.context.pop();
  e === H.b_stat && this.curContext().token === "function" && (e = this.context.pop()), this.exprAllowed = !e.isExpr;
};
l.braceL.updateContext = function(e) {
  this.context.push(this.braceIsBlock(e) ? H.b_stat : H.b_expr), this.exprAllowed = !0;
};
l.dollarBraceL.updateContext = function() {
  this.context.push(H.b_tmpl), this.exprAllowed = !0;
};
l.parenL.updateContext = function(e) {
  var t = e === l._if || e === l._for || e === l._with || e === l._while;
  this.context.push(t ? H.p_stat : H.p_expr), this.exprAllowed = !0;
};
l.incDec.updateContext = function() {
};
l._function.updateContext = l._class.updateContext = function(e) {
  e.beforeExpr && e !== l._else && !(e === l.semi && this.curContext() !== H.p_stat) && !(e === l._return && he.test(this.input.slice(this.lastTokEnd, this.start))) && !((e === l.colon || e === l.braceL) && this.curContext() === H.b_stat) ? this.context.push(H.f_expr) : this.context.push(H.f_stat), this.exprAllowed = !1;
};
l.colon.updateContext = function() {
  this.curContext().token === "function" && this.context.pop(), this.exprAllowed = !0;
};
l.backQuote.updateContext = function() {
  this.curContext() === H.q_tmpl ? this.context.pop() : this.context.push(H.q_tmpl), this.exprAllowed = !1;
};
l.star.updateContext = function(e) {
  if (e === l._function) {
    var t = this.context.length - 1;
    this.context[t] === H.f_expr ? this.context[t] = H.f_expr_gen : this.context[t] = H.f_gen;
  }
  this.exprAllowed = !0;
};
l.name.updateContext = function(e) {
  var t = !1;
  this.options.ecmaVersion >= 6 && e !== l.dot && (this.value === "of" && !this.exprAllowed || this.value === "yield" && this.inGeneratorContext()) && (t = !0), this.exprAllowed = t;
};
var M = X.prototype;
M.checkPropClash = function(e, t, i) {
  if (!(this.options.ecmaVersion >= 9 && e.type === "SpreadElement") && !(this.options.ecmaVersion >= 6 && (e.computed || e.method || e.shorthand))) {
    var r = e.key, n;
    switch (r.type) {
      case "Identifier":
        n = r.name;
        break;
      case "Literal":
        n = String(r.value);
        break;
      default:
        return;
    }
    var u = e.kind;
    if (this.options.ecmaVersion >= 6) {
      n === "__proto__" && u === "init" && (t.proto && (i ? i.doubleProto < 0 && (i.doubleProto = r.start) : this.raiseRecoverable(r.start, "Redefinition of __proto__ property")), t.proto = !0);
      return;
    }
    n = "$" + n;
    var h = t[n];
    if (h) {
      var d;
      u === "init" ? d = this.strict && h.init || h.get || h.set : d = h.init || h[u], d && this.raiseRecoverable(r.start, "Redefinition of property");
    } else
      h = t[n] = {
        init: !1,
        get: !1,
        set: !1
      };
    h[u] = !0;
  }
};
M.parseExpression = function(e, t) {
  var i = this.start, r = this.startLoc, n = this.parseMaybeAssign(e, t);
  if (this.type === l.comma) {
    var u = this.startNodeAt(i, r);
    for (u.expressions = [n]; this.eat(l.comma); )
      u.expressions.push(this.parseMaybeAssign(e, t));
    return this.finishNode(u, "SequenceExpression");
  }
  return n;
};
M.parseMaybeAssign = function(e, t, i) {
  if (this.isContextual("yield")) {
    if (this.inGenerator)
      return this.parseYield(e);
    this.exprAllowed = !1;
  }
  var r = !1, n = -1, u = -1, h = -1;
  t ? (n = t.parenthesizedAssign, u = t.trailingComma, h = t.doubleProto, t.parenthesizedAssign = t.trailingComma = -1) : (t = new Jt(), r = !0);
  var d = this.start, y = this.startLoc;
  (this.type === l.parenL || this.type === l.name) && (this.potentialArrowAt = this.start, this.potentialArrowInForAwait = e === "await");
  var o = this.parseMaybeConditional(e, t);
  if (i && (o = i.call(this, o, d, y)), this.type.isAssign) {
    var S = this.startNodeAt(d, y);
    return S.operator = this.value, this.type === l.eq && (o = this.toAssignable(o, !1, t)), r || (t.parenthesizedAssign = t.trailingComma = t.doubleProto = -1), t.shorthandAssign >= o.start && (t.shorthandAssign = -1), this.type === l.eq ? this.checkLValPattern(o) : this.checkLValSimple(o), S.left = o, this.next(), S.right = this.parseMaybeAssign(e), h > -1 && (t.doubleProto = h), this.finishNode(S, "AssignmentExpression");
  } else
    r && this.checkExpressionErrors(t, !0);
  return n > -1 && (t.parenthesizedAssign = n), u > -1 && (t.trailingComma = u), o;
};
M.parseMaybeConditional = function(e, t) {
  var i = this.start, r = this.startLoc, n = this.parseExprOps(e, t);
  if (this.checkExpressionErrors(t))
    return n;
  if (this.eat(l.question)) {
    var u = this.startNodeAt(i, r);
    return u.test = n, u.consequent = this.parseMaybeAssign(), this.expect(l.colon), u.alternate = this.parseMaybeAssign(e), this.finishNode(u, "ConditionalExpression");
  }
  return n;
};
M.parseExprOps = function(e, t) {
  var i = this.start, r = this.startLoc, n = this.parseMaybeUnary(t, !1, !1, e);
  return this.checkExpressionErrors(t) || n.start === i && n.type === "ArrowFunctionExpression" ? n : this.parseExprOp(n, i, r, -1, e);
};
M.parseExprOp = function(e, t, i, r, n) {
  var u = this.type.binop;
  if (u != null && (!n || this.type !== l._in) && u > r) {
    var h = this.type === l.logicalOR || this.type === l.logicalAND, d = this.type === l.coalesce;
    d && (u = l.logicalAND.binop);
    var y = this.value;
    this.next();
    var o = this.start, S = this.startLoc, w = this.parseExprOp(this.parseMaybeUnary(null, !1, !1, n), o, S, u, n), C = this.buildBinary(t, i, e, w, y, h || d);
    return (h && this.type === l.coalesce || d && (this.type === l.logicalOR || this.type === l.logicalAND)) && this.raiseRecoverable(this.start, "Logical expressions and coalesce expressions cannot be mixed. Wrap either by parentheses"), this.parseExprOp(C, t, i, r, n);
  }
  return e;
};
M.buildBinary = function(e, t, i, r, n, u) {
  r.type === "PrivateIdentifier" && this.raise(r.start, "Private identifier can only be left side of binary expression");
  var h = this.startNodeAt(e, t);
  return h.left = i, h.operator = n, h.right = r, this.finishNode(h, u ? "LogicalExpression" : "BinaryExpression");
};
M.parseMaybeUnary = function(e, t, i, r) {
  var n = this.start, u = this.startLoc, h;
  if (this.isContextual("await") && this.canAwait)
    h = this.parseAwait(r), t = !0;
  else if (this.type.prefix) {
    var d = this.startNode(), y = this.type === l.incDec;
    d.operator = this.value, d.prefix = !0, this.next(), d.argument = this.parseMaybeUnary(null, !0, y, r), this.checkExpressionErrors(e, !0), y ? this.checkLValSimple(d.argument) : this.strict && d.operator === "delete" && ns(d.argument) ? this.raiseRecoverable(d.start, "Deleting local variable in strict mode") : d.operator === "delete" && di(d.argument) ? this.raiseRecoverable(d.start, "Private fields can not be deleted") : t = !0, h = this.finishNode(d, y ? "UpdateExpression" : "UnaryExpression");
  } else if (!t && this.type === l.privateId)
    (r || this.privateNameStack.length === 0) && this.options.checkPrivateFields && this.unexpected(), h = this.parsePrivateIdent(), this.type !== l._in && this.unexpected();
  else {
    if (h = this.parseExprSubscripts(e, r), this.checkExpressionErrors(e))
      return h;
    for (; this.type.postfix && !this.canInsertSemicolon(); ) {
      var o = this.startNodeAt(n, u);
      o.operator = this.value, o.prefix = !1, o.argument = h, this.checkLValSimple(h), this.next(), h = this.finishNode(o, "UpdateExpression");
    }
  }
  if (!i && this.eat(l.starstar))
    if (t)
      this.unexpected(this.lastTokStart);
    else
      return this.buildBinary(n, u, h, this.parseMaybeUnary(null, !1, !1, r), "**", !1);
  else
    return h;
};
function ns(e) {
  return e.type === "Identifier" || e.type === "ParenthesizedExpression" && ns(e.expression);
}
function di(e) {
  return e.type === "MemberExpression" && e.property.type === "PrivateIdentifier" || e.type === "ChainExpression" && di(e.expression) || e.type === "ParenthesizedExpression" && di(e.expression);
}
M.parseExprSubscripts = function(e, t) {
  var i = this.start, r = this.startLoc, n = this.parseExprAtom(e, t);
  if (n.type === "ArrowFunctionExpression" && this.input.slice(this.lastTokStart, this.lastTokEnd) !== ")")
    return n;
  var u = this.parseSubscripts(n, i, r, !1, t);
  return e && u.type === "MemberExpression" && (e.parenthesizedAssign >= u.start && (e.parenthesizedAssign = -1), e.parenthesizedBind >= u.start && (e.parenthesizedBind = -1), e.trailingComma >= u.start && (e.trailingComma = -1)), u;
};
M.parseSubscripts = function(e, t, i, r, n) {
  for (var u = this.options.ecmaVersion >= 8 && e.type === "Identifier" && e.name === "async" && this.lastTokEnd === e.end && !this.canInsertSemicolon() && e.end - e.start === 5 && this.potentialArrowAt === e.start, h = !1; ; ) {
    var d = this.parseSubscript(e, t, i, r, u, h, n);
    if (d.optional && (h = !0), d === e || d.type === "ArrowFunctionExpression") {
      if (h) {
        var y = this.startNodeAt(t, i);
        y.expression = d, d = this.finishNode(y, "ChainExpression");
      }
      return d;
    }
    e = d;
  }
};
M.shouldParseAsyncArrow = function() {
  return !this.canInsertSemicolon() && this.eat(l.arrow);
};
M.parseSubscriptAsyncArrow = function(e, t, i, r) {
  return this.parseArrowExpression(this.startNodeAt(e, t), i, !0, r);
};
M.parseSubscript = function(e, t, i, r, n, u, h) {
  var d = this.options.ecmaVersion >= 11, y = d && this.eat(l.questionDot);
  r && y && this.raise(this.lastTokStart, "Optional chaining cannot appear in the callee of new expressions");
  var o = this.eat(l.bracketL);
  if (o || y && this.type !== l.parenL && this.type !== l.backQuote || this.eat(l.dot)) {
    var S = this.startNodeAt(t, i);
    S.object = e, o ? (S.property = this.parseExpression(), this.expect(l.bracketR)) : this.type === l.privateId && e.type !== "Super" ? S.property = this.parsePrivateIdent() : S.property = this.parseIdent(this.options.allowReserved !== "never"), S.computed = !!o, d && (S.optional = y), e = this.finishNode(S, "MemberExpression");
  } else if (!r && this.eat(l.parenL)) {
    var w = new Jt(), C = this.yieldPos, j = this.awaitPos, Z = this.awaitIdentPos;
    this.yieldPos = 0, this.awaitPos = 0, this.awaitIdentPos = 0;
    var pe = this.parseExprList(l.parenR, this.options.ecmaVersion >= 8, !1, w);
    if (n && !y && this.shouldParseAsyncArrow())
      return this.checkPatternErrors(w, !1), this.checkYieldAwaitInDefaultParams(), this.awaitIdentPos > 0 && this.raise(this.awaitIdentPos, "Cannot use 'await' as identifier inside an async function"), this.yieldPos = C, this.awaitPos = j, this.awaitIdentPos = Z, this.parseSubscriptAsyncArrow(t, i, pe, h);
    this.checkExpressionErrors(w, !0), this.yieldPos = C || this.yieldPos, this.awaitPos = j || this.awaitPos, this.awaitIdentPos = Z || this.awaitIdentPos;
    var D = this.startNodeAt(t, i);
    D.callee = e, D.arguments = pe, d && (D.optional = y), e = this.finishNode(D, "CallExpression");
  } else if (this.type === l.backQuote) {
    (y || u) && this.raise(this.start, "Optional chaining cannot appear in the tag of tagged template expressions");
    var se = this.startNodeAt(t, i);
    se.tag = e, se.quasi = this.parseTemplate({ isTagged: !0 }), e = this.finishNode(se, "TaggedTemplateExpression");
  }
  return e;
};
M.parseExprAtom = function(e, t, i) {
  this.type === l.slash && this.readRegexp();
  var r, n = this.potentialArrowAt === this.start;
  switch (this.type) {
    case l._super:
      return this.allowSuper || this.raise(this.start, "'super' keyword outside a method"), r = this.startNode(), this.next(), this.type === l.parenL && !this.allowDirectSuper && this.raise(r.start, "super() call outside constructor of a subclass"), this.type !== l.dot && this.type !== l.bracketL && this.type !== l.parenL && this.unexpected(), this.finishNode(r, "Super");
    case l._this:
      return r = this.startNode(), this.next(), this.finishNode(r, "ThisExpression");
    case l.name:
      var u = this.start, h = this.startLoc, d = this.containsEsc, y = this.parseIdent(!1);
      if (this.options.ecmaVersion >= 8 && !d && y.name === "async" && !this.canInsertSemicolon() && this.eat(l._function))
        return this.overrideContext(H.f_expr), this.parseFunction(this.startNodeAt(u, h), 0, !1, !0, t);
      if (n && !this.canInsertSemicolon()) {
        if (this.eat(l.arrow))
          return this.parseArrowExpression(this.startNodeAt(u, h), [y], !1, t);
        if (this.options.ecmaVersion >= 8 && y.name === "async" && this.type === l.name && !d && (!this.potentialArrowInForAwait || this.value !== "of" || this.containsEsc))
          return y = this.parseIdent(!1), (this.canInsertSemicolon() || !this.eat(l.arrow)) && this.unexpected(), this.parseArrowExpression(this.startNodeAt(u, h), [y], !0, t);
      }
      return y;
    case l.regexp:
      var o = this.value;
      return r = this.parseLiteral(o.value), r.regex = { pattern: o.pattern, flags: o.flags }, r;
    case l.num:
    case l.string:
      return this.parseLiteral(this.value);
    case l._null:
    case l._true:
    case l._false:
      return r = this.startNode(), r.value = this.type === l._null ? null : this.type === l._true, r.raw = this.type.keyword, this.next(), this.finishNode(r, "Literal");
    case l.parenL:
      var S = this.start, w = this.parseParenAndDistinguishExpression(n, t);
      return e && (e.parenthesizedAssign < 0 && !this.isSimpleAssignTarget(w) && (e.parenthesizedAssign = S), e.parenthesizedBind < 0 && (e.parenthesizedBind = S)), w;
    case l.bracketL:
      return r = this.startNode(), this.next(), r.elements = this.parseExprList(l.bracketR, !0, !0, e), this.finishNode(r, "ArrayExpression");
    case l.braceL:
      return this.overrideContext(H.b_expr), this.parseObj(!1, e);
    case l._function:
      return r = this.startNode(), this.next(), this.parseFunction(r, 0);
    case l._class:
      return this.parseClass(this.startNode(), !1);
    case l._new:
      return this.parseNew();
    case l.backQuote:
      return this.parseTemplate();
    case l._import:
      return this.options.ecmaVersion >= 11 ? this.parseExprImport(i) : this.unexpected();
    default:
      return this.parseExprAtomDefault();
  }
};
M.parseExprAtomDefault = function() {
  this.unexpected();
};
M.parseExprImport = function(e) {
  var t = this.startNode();
  if (this.containsEsc && this.raiseRecoverable(this.start, "Escape sequence in keyword import"), this.next(), this.type === l.parenL && !e)
    return this.parseDynamicImport(t);
  if (this.type === l.dot) {
    var i = this.startNodeAt(t.start, t.loc && t.loc.start);
    return i.name = "import", t.meta = this.finishNode(i, "Identifier"), this.parseImportMeta(t);
  } else
    this.unexpected();
};
M.parseDynamicImport = function(e) {
  if (this.next(), e.source = this.parseMaybeAssign(), this.options.ecmaVersion >= 16)
    this.eat(l.parenR) ? e.options = null : (this.expect(l.comma), this.afterTrailingComma(l.parenR) ? e.options = null : (e.options = this.parseMaybeAssign(), this.eat(l.parenR) || (this.expect(l.comma), this.afterTrailingComma(l.parenR) || this.unexpected())));
  else if (!this.eat(l.parenR)) {
    var t = this.start;
    this.eat(l.comma) && this.eat(l.parenR) ? this.raiseRecoverable(t, "Trailing comma is not allowed in import()") : this.unexpected(t);
  }
  return this.finishNode(e, "ImportExpression");
};
M.parseImportMeta = function(e) {
  this.next();
  var t = this.containsEsc;
  return e.property = this.parseIdent(!0), e.property.name !== "meta" && this.raiseRecoverable(e.property.start, "The only valid meta property for import is 'import.meta'"), t && this.raiseRecoverable(e.start, "'import.meta' must not contain escaped characters"), this.options.sourceType !== "module" && !this.options.allowImportExportEverywhere && this.raiseRecoverable(e.start, "Cannot use 'import.meta' outside a module"), this.finishNode(e, "MetaProperty");
};
M.parseLiteral = function(e) {
  var t = this.startNode();
  return t.value = e, t.raw = this.input.slice(this.start, this.end), t.raw.charCodeAt(t.raw.length - 1) === 110 && (t.bigint = t.value != null ? t.value.toString() : t.raw.slice(0, -1).replace(/_/g, "")), this.next(), this.finishNode(t, "Literal");
};
M.parseParenExpression = function() {
  this.expect(l.parenL);
  var e = this.parseExpression();
  return this.expect(l.parenR), e;
};
M.shouldParseArrow = function(e) {
  return !this.canInsertSemicolon();
};
M.parseParenAndDistinguishExpression = function(e, t) {
  var i = this.start, r = this.startLoc, n, u = this.options.ecmaVersion >= 8;
  if (this.options.ecmaVersion >= 6) {
    this.next();
    var h = this.start, d = this.startLoc, y = [], o = !0, S = !1, w = new Jt(), C = this.yieldPos, j = this.awaitPos, Z;
    for (this.yieldPos = 0, this.awaitPos = 0; this.type !== l.parenR; )
      if (o ? o = !1 : this.expect(l.comma), u && this.afterTrailingComma(l.parenR, !0)) {
        S = !0;
        break;
      } else if (this.type === l.ellipsis) {
        Z = this.start, y.push(this.parseParenItem(this.parseRestBinding())), this.type === l.comma && this.raiseRecoverable(
          this.start,
          "Comma is not permitted after the rest element"
        );
        break;
      } else
        y.push(this.parseMaybeAssign(!1, w, this.parseParenItem));
    var pe = this.lastTokEnd, D = this.lastTokEndLoc;
    if (this.expect(l.parenR), e && this.shouldParseArrow(y) && this.eat(l.arrow))
      return this.checkPatternErrors(w, !1), this.checkYieldAwaitInDefaultParams(), this.yieldPos = C, this.awaitPos = j, this.parseParenArrowList(i, r, y, t);
    (!y.length || S) && this.unexpected(this.lastTokStart), Z && this.unexpected(Z), this.checkExpressionErrors(w, !0), this.yieldPos = C || this.yieldPos, this.awaitPos = j || this.awaitPos, y.length > 1 ? (n = this.startNodeAt(h, d), n.expressions = y, this.finishNodeAt(n, "SequenceExpression", pe, D)) : n = y[0];
  } else
    n = this.parseParenExpression();
  if (this.options.preserveParens) {
    var se = this.startNodeAt(i, r);
    return se.expression = n, this.finishNode(se, "ParenthesizedExpression");
  } else
    return n;
};
M.parseParenItem = function(e) {
  return e;
};
M.parseParenArrowList = function(e, t, i, r) {
  return this.parseArrowExpression(this.startNodeAt(e, t), i, !1, r);
};
var rh = [];
M.parseNew = function() {
  this.containsEsc && this.raiseRecoverable(this.start, "Escape sequence in keyword new");
  var e = this.startNode();
  if (this.next(), this.options.ecmaVersion >= 6 && this.type === l.dot) {
    var t = this.startNodeAt(e.start, e.loc && e.loc.start);
    t.name = "new", e.meta = this.finishNode(t, "Identifier"), this.next();
    var i = this.containsEsc;
    return e.property = this.parseIdent(!0), e.property.name !== "target" && this.raiseRecoverable(e.property.start, "The only valid meta property for new is 'new.target'"), i && this.raiseRecoverable(e.start, "'new.target' must not contain escaped characters"), this.allowNewDotTarget || this.raiseRecoverable(e.start, "'new.target' can only be used in functions and class static block"), this.finishNode(e, "MetaProperty");
  }
  var r = this.start, n = this.startLoc;
  return e.callee = this.parseSubscripts(this.parseExprAtom(null, !1, !0), r, n, !0, !1), this.eat(l.parenL) ? e.arguments = this.parseExprList(l.parenR, this.options.ecmaVersion >= 8, !1) : e.arguments = rh, this.finishNode(e, "NewExpression");
};
M.parseTemplateElement = function(e) {
  var t = e.isTagged, i = this.startNode();
  return this.type === l.invalidTemplate ? (t || this.raiseRecoverable(this.start, "Bad escape sequence in untagged template literal"), i.value = {
    raw: this.value.replace(/\r\n?/g, `
`),
    cooked: null
  }) : i.value = {
    raw: this.input.slice(this.start, this.end).replace(/\r\n?/g, `
`),
    cooked: this.value
  }, this.next(), i.tail = this.type === l.backQuote, this.finishNode(i, "TemplateElement");
};
M.parseTemplate = function(e) {
  e === void 0 && (e = {});
  var t = e.isTagged;
  t === void 0 && (t = !1);
  var i = this.startNode();
  this.next(), i.expressions = [];
  var r = this.parseTemplateElement({ isTagged: t });
  for (i.quasis = [r]; !r.tail; )
    this.type === l.eof && this.raise(this.pos, "Unterminated template literal"), this.expect(l.dollarBraceL), i.expressions.push(this.parseExpression()), this.expect(l.braceR), i.quasis.push(r = this.parseTemplateElement({ isTagged: t }));
  return this.next(), this.finishNode(i, "TemplateLiteral");
};
M.isAsyncProp = function(e) {
  return !e.computed && e.key.type === "Identifier" && e.key.name === "async" && (this.type === l.name || this.type === l.num || this.type === l.string || this.type === l.bracketL || this.type.keyword || this.options.ecmaVersion >= 9 && this.type === l.star) && !he.test(this.input.slice(this.lastTokEnd, this.start));
};
M.parseObj = function(e, t) {
  var i = this.startNode(), r = !0, n = {};
  for (i.properties = [], this.next(); !this.eat(l.braceR); ) {
    if (r)
      r = !1;
    else if (this.expect(l.comma), this.options.ecmaVersion >= 5 && this.afterTrailingComma(l.braceR))
      break;
    var u = this.parseProperty(e, t);
    e || this.checkPropClash(u, n, t), i.properties.push(u);
  }
  return this.finishNode(i, e ? "ObjectPattern" : "ObjectExpression");
};
M.parseProperty = function(e, t) {
  var i = this.startNode(), r, n, u, h;
  if (this.options.ecmaVersion >= 9 && this.eat(l.ellipsis))
    return e ? (i.argument = this.parseIdent(!1), this.type === l.comma && this.raiseRecoverable(this.start, "Comma is not permitted after the rest element"), this.finishNode(i, "RestElement")) : (i.argument = this.parseMaybeAssign(!1, t), this.type === l.comma && t && t.trailingComma < 0 && (t.trailingComma = this.start), this.finishNode(i, "SpreadElement"));
  this.options.ecmaVersion >= 6 && (i.method = !1, i.shorthand = !1, (e || t) && (u = this.start, h = this.startLoc), e || (r = this.eat(l.star)));
  var d = this.containsEsc;
  return this.parsePropertyName(i), !e && !d && this.options.ecmaVersion >= 8 && !r && this.isAsyncProp(i) ? (n = !0, r = this.options.ecmaVersion >= 9 && this.eat(l.star), this.parsePropertyName(i)) : n = !1, this.parsePropertyValue(i, e, r, n, u, h, t, d), this.finishNode(i, "Property");
};
M.parseGetterSetter = function(e) {
  var t = e.key.name;
  this.parsePropertyName(e), e.value = this.parseMethod(!1), e.kind = t;
  var i = e.kind === "get" ? 0 : 1;
  if (e.value.params.length !== i) {
    var r = e.value.start;
    e.kind === "get" ? this.raiseRecoverable(r, "getter should have no params") : this.raiseRecoverable(r, "setter should have exactly one param");
  } else
    e.kind === "set" && e.value.params[0].type === "RestElement" && this.raiseRecoverable(e.value.params[0].start, "Setter cannot use rest params");
};
M.parsePropertyValue = function(e, t, i, r, n, u, h, d) {
  (i || r) && this.type === l.colon && this.unexpected(), this.eat(l.colon) ? (e.value = t ? this.parseMaybeDefault(this.start, this.startLoc) : this.parseMaybeAssign(!1, h), e.kind = "init") : this.options.ecmaVersion >= 6 && this.type === l.parenL ? (t && this.unexpected(), e.method = !0, e.value = this.parseMethod(i, r), e.kind = "init") : !t && !d && this.options.ecmaVersion >= 5 && !e.computed && e.key.type === "Identifier" && (e.key.name === "get" || e.key.name === "set") && this.type !== l.comma && this.type !== l.braceR && this.type !== l.eq ? ((i || r) && this.unexpected(), this.parseGetterSetter(e)) : this.options.ecmaVersion >= 6 && !e.computed && e.key.type === "Identifier" ? ((i || r) && this.unexpected(), this.checkUnreserved(e.key), e.key.name === "await" && !this.awaitIdentPos && (this.awaitIdentPos = n), t ? e.value = this.parseMaybeDefault(n, u, this.copyNode(e.key)) : this.type === l.eq && h ? (h.shorthandAssign < 0 && (h.shorthandAssign = this.start), e.value = this.parseMaybeDefault(n, u, this.copyNode(e.key))) : e.value = this.copyNode(e.key), e.kind = "init", e.shorthand = !0) : this.unexpected();
};
M.parsePropertyName = function(e) {
  if (this.options.ecmaVersion >= 6) {
    if (this.eat(l.bracketL))
      return e.computed = !0, e.key = this.parseMaybeAssign(), this.expect(l.bracketR), e.key;
    e.computed = !1;
  }
  return e.key = this.type === l.num || this.type === l.string ? this.parseExprAtom() : this.parseIdent(this.options.allowReserved !== "never");
};
M.initFunction = function(e) {
  e.id = null, this.options.ecmaVersion >= 6 && (e.generator = e.expression = !1), this.options.ecmaVersion >= 8 && (e.async = !1);
};
M.parseMethod = function(e, t, i) {
  var r = this.startNode(), n = this.yieldPos, u = this.awaitPos, h = this.awaitIdentPos;
  return this.initFunction(r), this.options.ecmaVersion >= 6 && (r.generator = e), this.options.ecmaVersion >= 8 && (r.async = !!t), this.yieldPos = 0, this.awaitPos = 0, this.awaitIdentPos = 0, this.enterScope(Ai(t, r.generator) | Kt | (i ? es : 0)), this.expect(l.parenL), r.params = this.parseBindingList(l.parenR, !1, this.options.ecmaVersion >= 8), this.checkYieldAwaitInDefaultParams(), this.parseFunctionBody(r, !1, !0, !1), this.yieldPos = n, this.awaitPos = u, this.awaitIdentPos = h, this.finishNode(r, "FunctionExpression");
};
M.parseArrowExpression = function(e, t, i, r) {
  var n = this.yieldPos, u = this.awaitPos, h = this.awaitIdentPos;
  return this.enterScope(Ai(i, !1) | Ci), this.initFunction(e), this.options.ecmaVersion >= 8 && (e.async = !!i), this.yieldPos = 0, this.awaitPos = 0, this.awaitIdentPos = 0, e.params = this.toAssignableList(t, !0), this.parseFunctionBody(e, !0, !1, r), this.yieldPos = n, this.awaitPos = u, this.awaitIdentPos = h, this.finishNode(e, "ArrowFunctionExpression");
};
M.parseFunctionBody = function(e, t, i, r) {
  var n = t && this.type !== l.braceL, u = this.strict, h = !1;
  if (n)
    e.body = this.parseMaybeAssign(r), e.expression = !0, this.checkParams(e, !1);
  else {
    var d = this.options.ecmaVersion >= 7 && !this.isSimpleParamList(e.params);
    (!u || d) && (h = this.strictDirective(this.end), h && d && this.raiseRecoverable(e.start, "Illegal 'use strict' directive in function with non-simple parameter list"));
    var y = this.labels;
    this.labels = [], h && (this.strict = !0), this.checkParams(e, !u && !h && !t && !i && this.isSimpleParamList(e.params)), this.strict && e.id && this.checkLValSimple(e.id, rs), e.body = this.parseBlock(!1, void 0, h && !u), e.expression = !1, this.adaptDirectivePrologue(e.body.body), this.labels = y;
  }
  this.exitScope();
};
M.isSimpleParamList = function(e) {
  for (var t = 0, i = e; t < i.length; t += 1) {
    var r = i[t];
    if (r.type !== "Identifier")
      return !1;
  }
  return !0;
};
M.checkParams = function(e, t) {
  for (var i = /* @__PURE__ */ Object.create(null), r = 0, n = e.params; r < n.length; r += 1) {
    var u = n[r];
    this.checkLValInnerPattern(u, Ei, t ? null : i);
  }
};
M.parseExprList = function(e, t, i, r) {
  for (var n = [], u = !0; !this.eat(e); ) {
    if (u)
      u = !1;
    else if (this.expect(l.comma), t && this.afterTrailingComma(e))
      break;
    var h = void 0;
    i && this.type === l.comma ? h = null : this.type === l.ellipsis ? (h = this.parseSpread(r), r && this.type === l.comma && r.trailingComma < 0 && (r.trailingComma = this.start)) : h = this.parseMaybeAssign(!1, r), n.push(h);
  }
  return n;
};
M.checkUnreserved = function(e) {
  var t = e.start, i = e.end, r = e.name;
  if (this.inGenerator && r === "yield" && this.raiseRecoverable(t, "Cannot use 'yield' as identifier inside a generator"), this.inAsync && r === "await" && this.raiseRecoverable(t, "Cannot use 'await' as identifier inside an async function"), !(this.currentThisScope().flags & Gt) && r === "arguments" && this.raiseRecoverable(t, "Cannot use 'arguments' in class field initializer"), this.inClassStaticBlock && (r === "arguments" || r === "await") && this.raise(t, "Cannot use " + r + " in class static initialization block"), this.keywords.test(r) && this.raise(t, "Unexpected keyword '" + r + "'"), !(this.options.ecmaVersion < 6 && this.input.slice(t, i).indexOf("\\") !== -1)) {
    var n = this.strict ? this.reservedWordsStrict : this.reservedWords;
    n.test(r) && (!this.inAsync && r === "await" && this.raiseRecoverable(t, "Cannot use keyword 'await' outside an async function"), this.raiseRecoverable(t, "The keyword '" + r + "' is reserved"));
  }
};
M.parseIdent = function(e) {
  var t = this.parseIdentNode();
  return this.next(!!e), this.finishNode(t, "Identifier"), e || (this.checkUnreserved(t), t.name === "await" && !this.awaitIdentPos && (this.awaitIdentPos = t.start)), t;
};
M.parseIdentNode = function() {
  var e = this.startNode();
  return this.type === l.name ? e.name = this.value : this.type.keyword ? (e.name = this.type.keyword, (e.name === "class" || e.name === "function") && (this.lastTokEnd !== this.lastTokStart + 1 || this.input.charCodeAt(this.lastTokStart) !== 46) && this.context.pop(), this.type = l.name) : this.unexpected(), e;
};
M.parsePrivateIdent = function() {
  var e = this.startNode();
  return this.type === l.privateId ? e.name = this.value : this.unexpected(), this.next(), this.finishNode(e, "PrivateIdentifier"), this.options.checkPrivateFields && (this.privateNameStack.length === 0 ? this.raise(e.start, "Private field '#" + e.name + "' must be declared in an enclosing class") : this.privateNameStack[this.privateNameStack.length - 1].used.push(e)), e;
};
M.parseYield = function(e) {
  this.yieldPos || (this.yieldPos = this.start);
  var t = this.startNode();
  return this.next(), this.type === l.semi || this.canInsertSemicolon() || this.type !== l.star && !this.type.startsExpr ? (t.delegate = !1, t.argument = null) : (t.delegate = this.eat(l.star), t.argument = this.parseMaybeAssign(e)), this.finishNode(t, "YieldExpression");
};
M.parseAwait = function(e) {
  this.awaitPos || (this.awaitPos = this.start);
  var t = this.startNode();
  return this.next(), t.argument = this.parseMaybeUnary(null, !0, !1, e), this.finishNode(t, "AwaitExpression");
};
var Ft = X.prototype;
Ft.raise = function(e, t) {
  var i = Ti(this.input, e);
  t += " (" + i.line + ":" + i.column + ")", this.sourceFile && (t += " in " + this.sourceFile);
  var r = new SyntaxError(t);
  throw r.pos = e, r.loc = i, r.raisedAt = this.pos, r;
};
Ft.raiseRecoverable = Ft.raise;
Ft.curPosition = function() {
  if (this.options.locations)
    return new ot(this.curLine, this.pos - this.lineStart);
};
var Ke = X.prototype, sh = function(t) {
  this.flags = t, this.var = [], this.lexical = [], this.functions = [];
};
Ke.enterScope = function(e) {
  this.scopeStack.push(new sh(e));
};
Ke.exitScope = function() {
  this.scopeStack.pop();
};
Ke.treatFunctionsAsVarInScope = function(e) {
  return e.flags & lt || !this.inModule && e.flags & _t;
};
Ke.declareName = function(e, t, i) {
  var r = !1;
  if (t === je) {
    var n = this.currentScope();
    r = n.lexical.indexOf(e) > -1 || n.functions.indexOf(e) > -1 || n.var.indexOf(e) > -1, n.lexical.push(e), this.inModule && n.flags & _t && delete this.undefinedExports[e];
  } else if (t === is) {
    var u = this.currentScope();
    u.lexical.push(e);
  } else if (t === ts) {
    var h = this.currentScope();
    this.treatFunctionsAsVar ? r = h.lexical.indexOf(e) > -1 : r = h.lexical.indexOf(e) > -1 || h.var.indexOf(e) > -1, h.functions.push(e);
  } else
    for (var d = this.scopeStack.length - 1; d >= 0; --d) {
      var y = this.scopeStack[d];
      if (y.lexical.indexOf(e) > -1 && !(y.flags & Qr && y.lexical[0] === e) || !this.treatFunctionsAsVarInScope(y) && y.functions.indexOf(e) > -1) {
        r = !0;
        break;
      }
      if (y.var.push(e), this.inModule && y.flags & _t && delete this.undefinedExports[e], y.flags & Gt)
        break;
    }
  r && this.raiseRecoverable(i, "Identifier '" + e + "' has already been declared");
};
Ke.checkLocalExport = function(e) {
  this.scopeStack[0].lexical.indexOf(e.name) === -1 && this.scopeStack[0].var.indexOf(e.name) === -1 && (this.undefinedExports[e.name] = e);
};
Ke.currentScope = function() {
  return this.scopeStack[this.scopeStack.length - 1];
};
Ke.currentVarScope = function() {
  for (var e = this.scopeStack.length - 1; ; e--) {
    var t = this.scopeStack[e];
    if (t.flags & (Gt | St | Qe))
      return t;
  }
};
Ke.currentThisScope = function() {
  for (var e = this.scopeStack.length - 1; ; e--) {
    var t = this.scopeStack[e];
    if (t.flags & (Gt | St | Qe) && !(t.flags & Ci))
      return t;
  }
};
var wt = function(t, i, r) {
  this.type = "", this.start = i, this.end = 0, t.options.locations && (this.loc = new kt(t, r)), t.options.directSourceFile && (this.sourceFile = t.options.directSourceFile), t.options.ranges && (this.range = [i, 0]);
}, Tt = X.prototype;
Tt.startNode = function() {
  return new wt(this, this.start, this.startLoc);
};
Tt.startNodeAt = function(e, t) {
  return new wt(this, e, t);
};
function as(e, t, i, r) {
  return e.type = t, e.end = i, this.options.locations && (e.loc.end = r), this.options.ranges && (e.range[1] = i), e;
}
Tt.finishNode = function(e, t) {
  return as.call(this, e, t, this.lastTokEnd, this.lastTokEndLoc);
};
Tt.finishNodeAt = function(e, t, i, r) {
  return as.call(this, e, t, i, r);
};
Tt.copyNode = function(e) {
  var t = new wt(this, e.start, this.startLoc);
  for (var i in e)
    t[i] = e[i];
  return t;
};
var nh = "Gara Garay Gukh Gurung_Khema Hrkt Katakana_Or_Hiragana Kawi Kirat_Rai Krai Nag_Mundari Nagm Ol_Onal Onao Sunu Sunuwar Todhri Todr Tulu_Tigalari Tutg Unknown Zzzz", os = "ASCII ASCII_Hex_Digit AHex Alphabetic Alpha Any Assigned Bidi_Control Bidi_C Bidi_Mirrored Bidi_M Case_Ignorable CI Cased Changes_When_Casefolded CWCF Changes_When_Casemapped CWCM Changes_When_Lowercased CWL Changes_When_NFKC_Casefolded CWKCF Changes_When_Titlecased CWT Changes_When_Uppercased CWU Dash Default_Ignorable_Code_Point DI Deprecated Dep Diacritic Dia Emoji Emoji_Component Emoji_Modifier Emoji_Modifier_Base Emoji_Presentation Extender Ext Grapheme_Base Gr_Base Grapheme_Extend Gr_Ext Hex_Digit Hex IDS_Binary_Operator IDSB IDS_Trinary_Operator IDST ID_Continue IDC ID_Start IDS Ideographic Ideo Join_Control Join_C Logical_Order_Exception LOE Lowercase Lower Math Noncharacter_Code_Point NChar Pattern_Syntax Pat_Syn Pattern_White_Space Pat_WS Quotation_Mark QMark Radical Regional_Indicator RI Sentence_Terminal STerm Soft_Dotted SD Terminal_Punctuation Term Unified_Ideograph UIdeo Uppercase Upper Variation_Selector VS White_Space space XID_Continue XIDC XID_Start XIDS", us = os + " Extended_Pictographic", cs = us, hs = cs + " EBase EComp EMod EPres ExtPict", ls = hs, ah = ls, oh = {
  9: os,
  10: us,
  11: cs,
  12: hs,
  13: ls,
  14: ah
}, uh = "Basic_Emoji Emoji_Keycap_Sequence RGI_Emoji_Modifier_Sequence RGI_Emoji_Flag_Sequence RGI_Emoji_Tag_Sequence RGI_Emoji_ZWJ_Sequence RGI_Emoji", ch = {
  9: "",
  10: "",
  11: "",
  12: "",
  13: "",
  14: uh
}, hr = "Cased_Letter LC Close_Punctuation Pe Connector_Punctuation Pc Control Cc cntrl Currency_Symbol Sc Dash_Punctuation Pd Decimal_Number Nd digit Enclosing_Mark Me Final_Punctuation Pf Format Cf Initial_Punctuation Pi Letter L Letter_Number Nl Line_Separator Zl Lowercase_Letter Ll Mark M Combining_Mark Math_Symbol Sm Modifier_Letter Lm Modifier_Symbol Sk Nonspacing_Mark Mn Number N Open_Punctuation Ps Other C Other_Letter Lo Other_Number No Other_Punctuation Po Other_Symbol So Paragraph_Separator Zp Private_Use Co Punctuation P punct Separator Z Space_Separator Zs Spacing_Mark Mc Surrogate Cs Symbol S Titlecase_Letter Lt Unassigned Cn Uppercase_Letter Lu", ps = "Adlam Adlm Ahom Anatolian_Hieroglyphs Hluw Arabic Arab Armenian Armn Avestan Avst Balinese Bali Bamum Bamu Bassa_Vah Bass Batak Batk Bengali Beng Bhaiksuki Bhks Bopomofo Bopo Brahmi Brah Braille Brai Buginese Bugi Buhid Buhd Canadian_Aboriginal Cans Carian Cari Caucasian_Albanian Aghb Chakma Cakm Cham Cham Cherokee Cher Common Zyyy Coptic Copt Qaac Cuneiform Xsux Cypriot Cprt Cyrillic Cyrl Deseret Dsrt Devanagari Deva Duployan Dupl Egyptian_Hieroglyphs Egyp Elbasan Elba Ethiopic Ethi Georgian Geor Glagolitic Glag Gothic Goth Grantha Gran Greek Grek Gujarati Gujr Gurmukhi Guru Han Hani Hangul Hang Hanunoo Hano Hatran Hatr Hebrew Hebr Hiragana Hira Imperial_Aramaic Armi Inherited Zinh Qaai Inscriptional_Pahlavi Phli Inscriptional_Parthian Prti Javanese Java Kaithi Kthi Kannada Knda Katakana Kana Kayah_Li Kali Kharoshthi Khar Khmer Khmr Khojki Khoj Khudawadi Sind Lao Laoo Latin Latn Lepcha Lepc Limbu Limb Linear_A Lina Linear_B Linb Lisu Lisu Lycian Lyci Lydian Lydi Mahajani Mahj Malayalam Mlym Mandaic Mand Manichaean Mani Marchen Marc Masaram_Gondi Gonm Meetei_Mayek Mtei Mende_Kikakui Mend Meroitic_Cursive Merc Meroitic_Hieroglyphs Mero Miao Plrd Modi Mongolian Mong Mro Mroo Multani Mult Myanmar Mymr Nabataean Nbat New_Tai_Lue Talu Newa Newa Nko Nkoo Nushu Nshu Ogham Ogam Ol_Chiki Olck Old_Hungarian Hung Old_Italic Ital Old_North_Arabian Narb Old_Permic Perm Old_Persian Xpeo Old_South_Arabian Sarb Old_Turkic Orkh Oriya Orya Osage Osge Osmanya Osma Pahawh_Hmong Hmng Palmyrene Palm Pau_Cin_Hau Pauc Phags_Pa Phag Phoenician Phnx Psalter_Pahlavi Phlp Rejang Rjng Runic Runr Samaritan Samr Saurashtra Saur Sharada Shrd Shavian Shaw Siddham Sidd SignWriting Sgnw Sinhala Sinh Sora_Sompeng Sora Soyombo Soyo Sundanese Sund Syloti_Nagri Sylo Syriac Syrc Tagalog Tglg Tagbanwa Tagb Tai_Le Tale Tai_Tham Lana Tai_Viet Tavt Takri Takr Tamil Taml Tangut Tang Telugu Telu Thaana Thaa Thai Thai Tibetan Tibt Tifinagh Tfng Tirhuta Tirh Ugaritic Ugar Vai Vaii Warang_Citi Wara Yi Yiii Zanabazar_Square Zanb", fs = ps + " Dogra Dogr Gunjala_Gondi Gong Hanifi_Rohingya Rohg Makasar Maka Medefaidrin Medf Old_Sogdian Sogo Sogdian Sogd", ds = fs + " Elymaic Elym Nandinagari Nand Nyiakeng_Puachue_Hmong Hmnp Wancho Wcho", ms = ds + " Chorasmian Chrs Diak Dives_Akuru Khitan_Small_Script Kits Yezi Yezidi", ys = ms + " Cypro_Minoan Cpmn Old_Uyghur Ougr Tangsa Tnsa Toto Vithkuqi Vith", hh = ys + " " + nh, lh = {
  9: ps,
  10: fs,
  11: ds,
  12: ms,
  13: ys,
  14: hh
}, vs = {};
function ph(e) {
  var t = vs[e] = {
    binary: Ze(oh[e] + " " + hr),
    binaryOfStrings: Ze(ch[e]),
    nonBinary: {
      General_Category: Ze(hr),
      Script: Ze(lh[e])
    }
  };
  t.nonBinary.Script_Extensions = t.nonBinary.Script, t.nonBinary.gc = t.nonBinary.General_Category, t.nonBinary.sc = t.nonBinary.Script, t.nonBinary.scx = t.nonBinary.Script_Extensions;
}
for (var ai = 0, lr = [9, 10, 11, 12, 13, 14]; ai < lr.length; ai += 1) {
  var fh = lr[ai];
  ph(fh);
}
var A = X.prototype, Bt = function(t, i) {
  this.parent = t, this.base = i || this;
};
Bt.prototype.separatedFrom = function(t) {
  for (var i = this; i; i = i.parent)
    for (var r = t; r; r = r.parent)
      if (i.base === r.base && i !== r)
        return !0;
  return !1;
};
Bt.prototype.sibling = function() {
  return new Bt(this.parent, this.base);
};
var Oe = function(t) {
  this.parser = t, this.validFlags = "gim" + (t.options.ecmaVersion >= 6 ? "uy" : "") + (t.options.ecmaVersion >= 9 ? "s" : "") + (t.options.ecmaVersion >= 13 ? "d" : "") + (t.options.ecmaVersion >= 15 ? "v" : ""), this.unicodeProperties = vs[t.options.ecmaVersion >= 14 ? 14 : t.options.ecmaVersion], this.source = "", this.flags = "", this.start = 0, this.switchU = !1, this.switchV = !1, this.switchN = !1, this.pos = 0, this.lastIntValue = 0, this.lastStringValue = "", this.lastAssertionIsQuantifiable = !1, this.numCapturingParens = 0, this.maxBackReference = 0, this.groupNames = /* @__PURE__ */ Object.create(null), this.backReferenceNames = [], this.branchID = null;
};
Oe.prototype.reset = function(t, i, r) {
  var n = r.indexOf("v") !== -1, u = r.indexOf("u") !== -1;
  this.start = t | 0, this.source = i + "", this.flags = r, n && this.parser.options.ecmaVersion >= 15 ? (this.switchU = !0, this.switchV = !0, this.switchN = !0) : (this.switchU = u && this.parser.options.ecmaVersion >= 6, this.switchV = !1, this.switchN = u && this.parser.options.ecmaVersion >= 9);
};
Oe.prototype.raise = function(t) {
  this.parser.raiseRecoverable(this.start, "Invalid regular expression: /" + this.source + "/: " + t);
};
Oe.prototype.at = function(t, i) {
  i === void 0 && (i = !1);
  var r = this.source, n = r.length;
  if (t >= n)
    return -1;
  var u = r.charCodeAt(t);
  if (!(i || this.switchU) || u <= 55295 || u >= 57344 || t + 1 >= n)
    return u;
  var h = r.charCodeAt(t + 1);
  return h >= 56320 && h <= 57343 ? (u << 10) + h - 56613888 : u;
};
Oe.prototype.nextIndex = function(t, i) {
  i === void 0 && (i = !1);
  var r = this.source, n = r.length;
  if (t >= n)
    return n;
  var u = r.charCodeAt(t), h;
  return !(i || this.switchU) || u <= 55295 || u >= 57344 || t + 1 >= n || (h = r.charCodeAt(t + 1)) < 56320 || h > 57343 ? t + 1 : t + 2;
};
Oe.prototype.current = function(t) {
  return t === void 0 && (t = !1), this.at(this.pos, t);
};
Oe.prototype.lookahead = function(t) {
  return t === void 0 && (t = !1), this.at(this.nextIndex(this.pos, t), t);
};
Oe.prototype.advance = function(t) {
  t === void 0 && (t = !1), this.pos = this.nextIndex(this.pos, t);
};
Oe.prototype.eat = function(t, i) {
  return i === void 0 && (i = !1), this.current(i) === t ? (this.advance(i), !0) : !1;
};
Oe.prototype.eatChars = function(t, i) {
  i === void 0 && (i = !1);
  for (var r = this.pos, n = 0, u = t; n < u.length; n += 1) {
    var h = u[n], d = this.at(r, i);
    if (d === -1 || d !== h)
      return !1;
    r = this.nextIndex(r, i);
  }
  return this.pos = r, !0;
};
A.validateRegExpFlags = function(e) {
  for (var t = e.validFlags, i = e.flags, r = !1, n = !1, u = 0; u < i.length; u++) {
    var h = i.charAt(u);
    t.indexOf(h) === -1 && this.raise(e.start, "Invalid regular expression flag"), i.indexOf(h, u + 1) > -1 && this.raise(e.start, "Duplicate regular expression flag"), h === "u" && (r = !0), h === "v" && (n = !0);
  }
  this.options.ecmaVersion >= 15 && r && n && this.raise(e.start, "Invalid regular expression flag");
};
function dh(e) {
  for (var t in e)
    return !0;
  return !1;
}
A.validateRegExpPattern = function(e) {
  this.regexp_pattern(e), !e.switchN && this.options.ecmaVersion >= 9 && dh(e.groupNames) && (e.switchN = !0, this.regexp_pattern(e));
};
A.regexp_pattern = function(e) {
  e.pos = 0, e.lastIntValue = 0, e.lastStringValue = "", e.lastAssertionIsQuantifiable = !1, e.numCapturingParens = 0, e.maxBackReference = 0, e.groupNames = /* @__PURE__ */ Object.create(null), e.backReferenceNames.length = 0, e.branchID = null, this.regexp_disjunction(e), e.pos !== e.source.length && (e.eat(
    41
    /* ) */
  ) && e.raise("Unmatched ')'"), (e.eat(
    93
    /* ] */
  ) || e.eat(
    125
    /* } */
  )) && e.raise("Lone quantifier brackets")), e.maxBackReference > e.numCapturingParens && e.raise("Invalid escape");
  for (var t = 0, i = e.backReferenceNames; t < i.length; t += 1) {
    var r = i[t];
    e.groupNames[r] || e.raise("Invalid named capture referenced");
  }
};
A.regexp_disjunction = function(e) {
  var t = this.options.ecmaVersion >= 16;
  for (t && (e.branchID = new Bt(e.branchID, null)), this.regexp_alternative(e); e.eat(
    124
    /* | */
  ); )
    t && (e.branchID = e.branchID.sibling()), this.regexp_alternative(e);
  t && (e.branchID = e.branchID.parent), this.regexp_eatQuantifier(e, !0) && e.raise("Nothing to repeat"), e.eat(
    123
    /* { */
  ) && e.raise("Lone quantifier brackets");
};
A.regexp_alternative = function(e) {
  for (; e.pos < e.source.length && this.regexp_eatTerm(e); )
    ;
};
A.regexp_eatTerm = function(e) {
  return this.regexp_eatAssertion(e) ? (e.lastAssertionIsQuantifiable && this.regexp_eatQuantifier(e) && e.switchU && e.raise("Invalid quantifier"), !0) : (e.switchU ? this.regexp_eatAtom(e) : this.regexp_eatExtendedAtom(e)) ? (this.regexp_eatQuantifier(e), !0) : !1;
};
A.regexp_eatAssertion = function(e) {
  var t = e.pos;
  if (e.lastAssertionIsQuantifiable = !1, e.eat(
    94
    /* ^ */
  ) || e.eat(
    36
    /* $ */
  ))
    return !0;
  if (e.eat(
    92
    /* \ */
  )) {
    if (e.eat(
      66
      /* B */
    ) || e.eat(
      98
      /* b */
    ))
      return !0;
    e.pos = t;
  }
  if (e.eat(
    40
    /* ( */
  ) && e.eat(
    63
    /* ? */
  )) {
    var i = !1;
    if (this.options.ecmaVersion >= 9 && (i = e.eat(
      60
      /* < */
    )), e.eat(
      61
      /* = */
    ) || e.eat(
      33
      /* ! */
    ))
      return this.regexp_disjunction(e), e.eat(
        41
        /* ) */
      ) || e.raise("Unterminated group"), e.lastAssertionIsQuantifiable = !i, !0;
  }
  return e.pos = t, !1;
};
A.regexp_eatQuantifier = function(e, t) {
  return t === void 0 && (t = !1), this.regexp_eatQuantifierPrefix(e, t) ? (e.eat(
    63
    /* ? */
  ), !0) : !1;
};
A.regexp_eatQuantifierPrefix = function(e, t) {
  return e.eat(
    42
    /* * */
  ) || e.eat(
    43
    /* + */
  ) || e.eat(
    63
    /* ? */
  ) || this.regexp_eatBracedQuantifier(e, t);
};
A.regexp_eatBracedQuantifier = function(e, t) {
  var i = e.pos;
  if (e.eat(
    123
    /* { */
  )) {
    var r = 0, n = -1;
    if (this.regexp_eatDecimalDigits(e) && (r = e.lastIntValue, e.eat(
      44
      /* , */
    ) && this.regexp_eatDecimalDigits(e) && (n = e.lastIntValue), e.eat(
      125
      /* } */
    )))
      return n !== -1 && n < r && !t && e.raise("numbers out of order in {} quantifier"), !0;
    e.switchU && !t && e.raise("Incomplete quantifier"), e.pos = i;
  }
  return !1;
};
A.regexp_eatAtom = function(e) {
  return this.regexp_eatPatternCharacters(e) || e.eat(
    46
    /* . */
  ) || this.regexp_eatReverseSolidusAtomEscape(e) || this.regexp_eatCharacterClass(e) || this.regexp_eatUncapturingGroup(e) || this.regexp_eatCapturingGroup(e);
};
A.regexp_eatReverseSolidusAtomEscape = function(e) {
  var t = e.pos;
  if (e.eat(
    92
    /* \ */
  )) {
    if (this.regexp_eatAtomEscape(e))
      return !0;
    e.pos = t;
  }
  return !1;
};
A.regexp_eatUncapturingGroup = function(e) {
  var t = e.pos;
  if (e.eat(
    40
    /* ( */
  )) {
    if (e.eat(
      63
      /* ? */
    )) {
      if (this.options.ecmaVersion >= 16) {
        var i = this.regexp_eatModifiers(e), r = e.eat(
          45
          /* - */
        );
        if (i || r) {
          for (var n = 0; n < i.length; n++) {
            var u = i.charAt(n);
            i.indexOf(u, n + 1) > -1 && e.raise("Duplicate regular expression modifiers");
          }
          if (r) {
            var h = this.regexp_eatModifiers(e);
            !i && !h && e.current() === 58 && e.raise("Invalid regular expression modifiers");
            for (var d = 0; d < h.length; d++) {
              var y = h.charAt(d);
              (h.indexOf(y, d + 1) > -1 || i.indexOf(y) > -1) && e.raise("Duplicate regular expression modifiers");
            }
          }
        }
      }
      if (e.eat(
        58
        /* : */
      )) {
        if (this.regexp_disjunction(e), e.eat(
          41
          /* ) */
        ))
          return !0;
        e.raise("Unterminated group");
      }
    }
    e.pos = t;
  }
  return !1;
};
A.regexp_eatCapturingGroup = function(e) {
  if (e.eat(
    40
    /* ( */
  )) {
    if (this.options.ecmaVersion >= 9 ? this.regexp_groupSpecifier(e) : e.current() === 63 && e.raise("Invalid group"), this.regexp_disjunction(e), e.eat(
      41
      /* ) */
    ))
      return e.numCapturingParens += 1, !0;
    e.raise("Unterminated group");
  }
  return !1;
};
A.regexp_eatModifiers = function(e) {
  for (var t = "", i = 0; (i = e.current()) !== -1 && mh(i); )
    t += Ve(i), e.advance();
  return t;
};
function mh(e) {
  return e === 105 || e === 109 || e === 115;
}
A.regexp_eatExtendedAtom = function(e) {
  return e.eat(
    46
    /* . */
  ) || this.regexp_eatReverseSolidusAtomEscape(e) || this.regexp_eatCharacterClass(e) || this.regexp_eatUncapturingGroup(e) || this.regexp_eatCapturingGroup(e) || this.regexp_eatInvalidBracedQuantifier(e) || this.regexp_eatExtendedPatternCharacter(e);
};
A.regexp_eatInvalidBracedQuantifier = function(e) {
  return this.regexp_eatBracedQuantifier(e, !0) && e.raise("Nothing to repeat"), !1;
};
A.regexp_eatSyntaxCharacter = function(e) {
  var t = e.current();
  return xs(t) ? (e.lastIntValue = t, e.advance(), !0) : !1;
};
function xs(e) {
  return e === 36 || e >= 40 && e <= 43 || e === 46 || e === 63 || e >= 91 && e <= 94 || e >= 123 && e <= 125;
}
A.regexp_eatPatternCharacters = function(e) {
  for (var t = e.pos, i = 0; (i = e.current()) !== -1 && !xs(i); )
    e.advance();
  return e.pos !== t;
};
A.regexp_eatExtendedPatternCharacter = function(e) {
  var t = e.current();
  return t !== -1 && t !== 36 && !(t >= 40 && t <= 43) && t !== 46 && t !== 63 && t !== 91 && t !== 94 && t !== 124 ? (e.advance(), !0) : !1;
};
A.regexp_groupSpecifier = function(e) {
  if (e.eat(
    63
    /* ? */
  )) {
    this.regexp_eatGroupName(e) || e.raise("Invalid group");
    var t = this.options.ecmaVersion >= 16, i = e.groupNames[e.lastStringValue];
    if (i)
      if (t)
        for (var r = 0, n = i; r < n.length; r += 1) {
          var u = n[r];
          u.separatedFrom(e.branchID) || e.raise("Duplicate capture group name");
        }
      else
        e.raise("Duplicate capture group name");
    t ? (i || (e.groupNames[e.lastStringValue] = [])).push(e.branchID) : e.groupNames[e.lastStringValue] = !0;
  }
};
A.regexp_eatGroupName = function(e) {
  if (e.lastStringValue = "", e.eat(
    60
    /* < */
  )) {
    if (this.regexp_eatRegExpIdentifierName(e) && e.eat(
      62
      /* > */
    ))
      return !0;
    e.raise("Invalid capture group name");
  }
  return !1;
};
A.regexp_eatRegExpIdentifierName = function(e) {
  if (e.lastStringValue = "", this.regexp_eatRegExpIdentifierStart(e)) {
    for (e.lastStringValue += Ve(e.lastIntValue); this.regexp_eatRegExpIdentifierPart(e); )
      e.lastStringValue += Ve(e.lastIntValue);
    return !0;
  }
  return !1;
};
A.regexp_eatRegExpIdentifierStart = function(e) {
  var t = e.pos, i = this.options.ecmaVersion >= 11, r = e.current(i);
  return e.advance(i), r === 92 && this.regexp_eatRegExpUnicodeEscapeSequence(e, i) && (r = e.lastIntValue), yh(r) ? (e.lastIntValue = r, !0) : (e.pos = t, !1);
};
function yh(e) {
  return Ee(e, !0) || e === 36 || e === 95;
}
A.regexp_eatRegExpIdentifierPart = function(e) {
  var t = e.pos, i = this.options.ecmaVersion >= 11, r = e.current(i);
  return e.advance(i), r === 92 && this.regexp_eatRegExpUnicodeEscapeSequence(e, i) && (r = e.lastIntValue), vh(r) ? (e.lastIntValue = r, !0) : (e.pos = t, !1);
};
function vh(e) {
  return Me(e, !0) || e === 36 || e === 95 || e === 8204 || e === 8205;
}
A.regexp_eatAtomEscape = function(e) {
  return this.regexp_eatBackReference(e) || this.regexp_eatCharacterClassEscape(e) || this.regexp_eatCharacterEscape(e) || e.switchN && this.regexp_eatKGroupName(e) ? !0 : (e.switchU && (e.current() === 99 && e.raise("Invalid unicode escape"), e.raise("Invalid escape")), !1);
};
A.regexp_eatBackReference = function(e) {
  var t = e.pos;
  if (this.regexp_eatDecimalEscape(e)) {
    var i = e.lastIntValue;
    if (e.switchU)
      return i > e.maxBackReference && (e.maxBackReference = i), !0;
    if (i <= e.numCapturingParens)
      return !0;
    e.pos = t;
  }
  return !1;
};
A.regexp_eatKGroupName = function(e) {
  if (e.eat(
    107
    /* k */
  )) {
    if (this.regexp_eatGroupName(e))
      return e.backReferenceNames.push(e.lastStringValue), !0;
    e.raise("Invalid named reference");
  }
  return !1;
};
A.regexp_eatCharacterEscape = function(e) {
  return this.regexp_eatControlEscape(e) || this.regexp_eatCControlLetter(e) || this.regexp_eatZero(e) || this.regexp_eatHexEscapeSequence(e) || this.regexp_eatRegExpUnicodeEscapeSequence(e, !1) || !e.switchU && this.regexp_eatLegacyOctalEscapeSequence(e) || this.regexp_eatIdentityEscape(e);
};
A.regexp_eatCControlLetter = function(e) {
  var t = e.pos;
  if (e.eat(
    99
    /* c */
  )) {
    if (this.regexp_eatControlLetter(e))
      return !0;
    e.pos = t;
  }
  return !1;
};
A.regexp_eatZero = function(e) {
  return e.current() === 48 && !Xt(e.lookahead()) ? (e.lastIntValue = 0, e.advance(), !0) : !1;
};
A.regexp_eatControlEscape = function(e) {
  var t = e.current();
  return t === 116 ? (e.lastIntValue = 9, e.advance(), !0) : t === 110 ? (e.lastIntValue = 10, e.advance(), !0) : t === 118 ? (e.lastIntValue = 11, e.advance(), !0) : t === 102 ? (e.lastIntValue = 12, e.advance(), !0) : t === 114 ? (e.lastIntValue = 13, e.advance(), !0) : !1;
};
A.regexp_eatControlLetter = function(e) {
  var t = e.current();
  return gs(t) ? (e.lastIntValue = t % 32, e.advance(), !0) : !1;
};
function gs(e) {
  return e >= 65 && e <= 90 || e >= 97 && e <= 122;
}
A.regexp_eatRegExpUnicodeEscapeSequence = function(e, t) {
  t === void 0 && (t = !1);
  var i = e.pos, r = t || e.switchU;
  if (e.eat(
    117
    /* u */
  )) {
    if (this.regexp_eatFixedHexDigits(e, 4)) {
      var n = e.lastIntValue;
      if (r && n >= 55296 && n <= 56319) {
        var u = e.pos;
        if (e.eat(
          92
          /* \ */
        ) && e.eat(
          117
          /* u */
        ) && this.regexp_eatFixedHexDigits(e, 4)) {
          var h = e.lastIntValue;
          if (h >= 56320 && h <= 57343)
            return e.lastIntValue = (n - 55296) * 1024 + (h - 56320) + 65536, !0;
        }
        e.pos = u, e.lastIntValue = n;
      }
      return !0;
    }
    if (r && e.eat(
      123
      /* { */
    ) && this.regexp_eatHexDigits(e) && e.eat(
      125
      /* } */
    ) && xh(e.lastIntValue))
      return !0;
    r && e.raise("Invalid unicode escape"), e.pos = i;
  }
  return !1;
};
function xh(e) {
  return e >= 0 && e <= 1114111;
}
A.regexp_eatIdentityEscape = function(e) {
  if (e.switchU)
    return this.regexp_eatSyntaxCharacter(e) ? !0 : e.eat(
      47
      /* / */
    ) ? (e.lastIntValue = 47, !0) : !1;
  var t = e.current();
  return t !== 99 && (!e.switchN || t !== 107) ? (e.lastIntValue = t, e.advance(), !0) : !1;
};
A.regexp_eatDecimalEscape = function(e) {
  e.lastIntValue = 0;
  var t = e.current();
  if (t >= 49 && t <= 57) {
    do
      e.lastIntValue = 10 * e.lastIntValue + (t - 48), e.advance();
    while ((t = e.current()) >= 48 && t <= 57);
    return !0;
  }
  return !1;
};
var bs = 0, ze = 1, Se = 2;
A.regexp_eatCharacterClassEscape = function(e) {
  var t = e.current();
  if (gh(t))
    return e.lastIntValue = -1, e.advance(), ze;
  var i = !1;
  if (e.switchU && this.options.ecmaVersion >= 9 && ((i = t === 80) || t === 112)) {
    e.lastIntValue = -1, e.advance();
    var r;
    if (e.eat(
      123
      /* { */
    ) && (r = this.regexp_eatUnicodePropertyValueExpression(e)) && e.eat(
      125
      /* } */
    ))
      return i && r === Se && e.raise("Invalid property name"), r;
    e.raise("Invalid property name");
  }
  return bs;
};
function gh(e) {
  return e === 100 || e === 68 || e === 115 || e === 83 || e === 119 || e === 87;
}
A.regexp_eatUnicodePropertyValueExpression = function(e) {
  var t = e.pos;
  if (this.regexp_eatUnicodePropertyName(e) && e.eat(
    61
    /* = */
  )) {
    var i = e.lastStringValue;
    if (this.regexp_eatUnicodePropertyValue(e)) {
      var r = e.lastStringValue;
      return this.regexp_validateUnicodePropertyNameAndValue(e, i, r), ze;
    }
  }
  if (e.pos = t, this.regexp_eatLoneUnicodePropertyNameOrValue(e)) {
    var n = e.lastStringValue;
    return this.regexp_validateUnicodePropertyNameOrValue(e, n);
  }
  return bs;
};
A.regexp_validateUnicodePropertyNameAndValue = function(e, t, i) {
  ht(e.unicodeProperties.nonBinary, t) || e.raise("Invalid property name"), e.unicodeProperties.nonBinary[t].test(i) || e.raise("Invalid property value");
};
A.regexp_validateUnicodePropertyNameOrValue = function(e, t) {
  if (e.unicodeProperties.binary.test(t))
    return ze;
  if (e.switchV && e.unicodeProperties.binaryOfStrings.test(t))
    return Se;
  e.raise("Invalid property name");
};
A.regexp_eatUnicodePropertyName = function(e) {
  var t = 0;
  for (e.lastStringValue = ""; _s(t = e.current()); )
    e.lastStringValue += Ve(t), e.advance();
  return e.lastStringValue !== "";
};
function _s(e) {
  return gs(e) || e === 95;
}
A.regexp_eatUnicodePropertyValue = function(e) {
  var t = 0;
  for (e.lastStringValue = ""; bh(t = e.current()); )
    e.lastStringValue += Ve(t), e.advance();
  return e.lastStringValue !== "";
};
function bh(e) {
  return _s(e) || Xt(e);
}
A.regexp_eatLoneUnicodePropertyNameOrValue = function(e) {
  return this.regexp_eatUnicodePropertyValue(e);
};
A.regexp_eatCharacterClass = function(e) {
  if (e.eat(
    91
    /* [ */
  )) {
    var t = e.eat(
      94
      /* ^ */
    ), i = this.regexp_classContents(e);
    return e.eat(
      93
      /* ] */
    ) || e.raise("Unterminated character class"), t && i === Se && e.raise("Negated character class may contain strings"), !0;
  }
  return !1;
};
A.regexp_classContents = function(e) {
  return e.current() === 93 ? ze : e.switchV ? this.regexp_classSetExpression(e) : (this.regexp_nonEmptyClassRanges(e), ze);
};
A.regexp_nonEmptyClassRanges = function(e) {
  for (; this.regexp_eatClassAtom(e); ) {
    var t = e.lastIntValue;
    if (e.eat(
      45
      /* - */
    ) && this.regexp_eatClassAtom(e)) {
      var i = e.lastIntValue;
      e.switchU && (t === -1 || i === -1) && e.raise("Invalid character class"), t !== -1 && i !== -1 && t > i && e.raise("Range out of order in character class");
    }
  }
};
A.regexp_eatClassAtom = function(e) {
  var t = e.pos;
  if (e.eat(
    92
    /* \ */
  )) {
    if (this.regexp_eatClassEscape(e))
      return !0;
    if (e.switchU) {
      var i = e.current();
      (i === 99 || ws(i)) && e.raise("Invalid class escape"), e.raise("Invalid escape");
    }
    e.pos = t;
  }
  var r = e.current();
  return r !== 93 ? (e.lastIntValue = r, e.advance(), !0) : !1;
};
A.regexp_eatClassEscape = function(e) {
  var t = e.pos;
  if (e.eat(
    98
    /* b */
  ))
    return e.lastIntValue = 8, !0;
  if (e.switchU && e.eat(
    45
    /* - */
  ))
    return e.lastIntValue = 45, !0;
  if (!e.switchU && e.eat(
    99
    /* c */
  )) {
    if (this.regexp_eatClassControlLetter(e))
      return !0;
    e.pos = t;
  }
  return this.regexp_eatCharacterClassEscape(e) || this.regexp_eatCharacterEscape(e);
};
A.regexp_classSetExpression = function(e) {
  var t = ze, i;
  if (!this.regexp_eatClassSetRange(e)) if (i = this.regexp_eatClassSetOperand(e)) {
    i === Se && (t = Se);
    for (var r = e.pos; e.eatChars(
      [38, 38]
      /* && */
    ); ) {
      if (e.current() !== 38 && (i = this.regexp_eatClassSetOperand(e))) {
        i !== Se && (t = ze);
        continue;
      }
      e.raise("Invalid character in character class");
    }
    if (r !== e.pos)
      return t;
    for (; e.eatChars(
      [45, 45]
      /* -- */
    ); )
      this.regexp_eatClassSetOperand(e) || e.raise("Invalid character in character class");
    if (r !== e.pos)
      return t;
  } else
    e.raise("Invalid character in character class");
  for (; ; )
    if (!this.regexp_eatClassSetRange(e)) {
      if (i = this.regexp_eatClassSetOperand(e), !i)
        return t;
      i === Se && (t = Se);
    }
};
A.regexp_eatClassSetRange = function(e) {
  var t = e.pos;
  if (this.regexp_eatClassSetCharacter(e)) {
    var i = e.lastIntValue;
    if (e.eat(
      45
      /* - */
    ) && this.regexp_eatClassSetCharacter(e)) {
      var r = e.lastIntValue;
      return i !== -1 && r !== -1 && i > r && e.raise("Range out of order in character class"), !0;
    }
    e.pos = t;
  }
  return !1;
};
A.regexp_eatClassSetOperand = function(e) {
  return this.regexp_eatClassSetCharacter(e) ? ze : this.regexp_eatClassStringDisjunction(e) || this.regexp_eatNestedClass(e);
};
A.regexp_eatNestedClass = function(e) {
  var t = e.pos;
  if (e.eat(
    91
    /* [ */
  )) {
    var i = e.eat(
      94
      /* ^ */
    ), r = this.regexp_classContents(e);
    if (e.eat(
      93
      /* ] */
    ))
      return i && r === Se && e.raise("Negated character class may contain strings"), r;
    e.pos = t;
  }
  if (e.eat(
    92
    /* \ */
  )) {
    var n = this.regexp_eatCharacterClassEscape(e);
    if (n)
      return n;
    e.pos = t;
  }
  return null;
};
A.regexp_eatClassStringDisjunction = function(e) {
  var t = e.pos;
  if (e.eatChars(
    [92, 113]
    /* \q */
  )) {
    if (e.eat(
      123
      /* { */
    )) {
      var i = this.regexp_classStringDisjunctionContents(e);
      if (e.eat(
        125
        /* } */
      ))
        return i;
    } else
      e.raise("Invalid escape");
    e.pos = t;
  }
  return null;
};
A.regexp_classStringDisjunctionContents = function(e) {
  for (var t = this.regexp_classString(e); e.eat(
    124
    /* | */
  ); )
    this.regexp_classString(e) === Se && (t = Se);
  return t;
};
A.regexp_classString = function(e) {
  for (var t = 0; this.regexp_eatClassSetCharacter(e); )
    t++;
  return t === 1 ? ze : Se;
};
A.regexp_eatClassSetCharacter = function(e) {
  var t = e.pos;
  if (e.eat(
    92
    /* \ */
  ))
    return this.regexp_eatCharacterEscape(e) || this.regexp_eatClassSetReservedPunctuator(e) ? !0 : e.eat(
      98
      /* b */
    ) ? (e.lastIntValue = 8, !0) : (e.pos = t, !1);
  var i = e.current();
  return i < 0 || i === e.lookahead() && _h(i) || kh(i) ? !1 : (e.advance(), e.lastIntValue = i, !0);
};
function _h(e) {
  return e === 33 || e >= 35 && e <= 38 || e >= 42 && e <= 44 || e === 46 || e >= 58 && e <= 64 || e === 94 || e === 96 || e === 126;
}
function kh(e) {
  return e === 40 || e === 41 || e === 45 || e === 47 || e >= 91 && e <= 93 || e >= 123 && e <= 125;
}
A.regexp_eatClassSetReservedPunctuator = function(e) {
  var t = e.current();
  return Sh(t) ? (e.lastIntValue = t, e.advance(), !0) : !1;
};
function Sh(e) {
  return e === 33 || e === 35 || e === 37 || e === 38 || e === 44 || e === 45 || e >= 58 && e <= 62 || e === 64 || e === 96 || e === 126;
}
A.regexp_eatClassControlLetter = function(e) {
  var t = e.current();
  return Xt(t) || t === 95 ? (e.lastIntValue = t % 32, e.advance(), !0) : !1;
};
A.regexp_eatHexEscapeSequence = function(e) {
  var t = e.pos;
  if (e.eat(
    120
    /* x */
  )) {
    if (this.regexp_eatFixedHexDigits(e, 2))
      return !0;
    e.switchU && e.raise("Invalid escape"), e.pos = t;
  }
  return !1;
};
A.regexp_eatDecimalDigits = function(e) {
  var t = e.pos, i = 0;
  for (e.lastIntValue = 0; Xt(i = e.current()); )
    e.lastIntValue = 10 * e.lastIntValue + (i - 48), e.advance();
  return e.pos !== t;
};
function Xt(e) {
  return e >= 48 && e <= 57;
}
A.regexp_eatHexDigits = function(e) {
  var t = e.pos, i = 0;
  for (e.lastIntValue = 0; ks(i = e.current()); )
    e.lastIntValue = 16 * e.lastIntValue + Ss(i), e.advance();
  return e.pos !== t;
};
function ks(e) {
  return e >= 48 && e <= 57 || e >= 65 && e <= 70 || e >= 97 && e <= 102;
}
function Ss(e) {
  return e >= 65 && e <= 70 ? 10 + (e - 65) : e >= 97 && e <= 102 ? 10 + (e - 97) : e - 48;
}
A.regexp_eatLegacyOctalEscapeSequence = function(e) {
  if (this.regexp_eatOctalDigit(e)) {
    var t = e.lastIntValue;
    if (this.regexp_eatOctalDigit(e)) {
      var i = e.lastIntValue;
      t <= 3 && this.regexp_eatOctalDigit(e) ? e.lastIntValue = t * 64 + i * 8 + e.lastIntValue : e.lastIntValue = t * 8 + i;
    } else
      e.lastIntValue = t;
    return !0;
  }
  return !1;
};
A.regexp_eatOctalDigit = function(e) {
  var t = e.current();
  return ws(t) ? (e.lastIntValue = t - 48, e.advance(), !0) : (e.lastIntValue = 0, !1);
};
function ws(e) {
  return e >= 48 && e <= 55;
}
A.regexp_eatFixedHexDigits = function(e, t) {
  var i = e.pos;
  e.lastIntValue = 0;
  for (var r = 0; r < t; ++r) {
    var n = e.current();
    if (!ks(n))
      return e.pos = i, !1;
    e.lastIntValue = 16 * e.lastIntValue + Ss(n), e.advance();
  }
  return !0;
};
var Yt = function(t) {
  this.type = t.type, this.value = t.value, this.start = t.start, this.end = t.end, t.options.locations && (this.loc = new kt(t, t.startLoc, t.endLoc)), t.options.ranges && (this.range = [t.start, t.end]);
}, $ = X.prototype;
$.next = function(e) {
  !e && this.type.keyword && this.containsEsc && this.raiseRecoverable(this.start, "Escape sequence in keyword " + this.type.keyword), this.options.onToken && this.options.onToken(new Yt(this)), this.lastTokEnd = this.end, this.lastTokStart = this.start, this.lastTokEndLoc = this.endLoc, this.lastTokStartLoc = this.startLoc, this.nextToken();
};
$.getToken = function() {
  return this.next(), new Yt(this);
};
typeof Symbol < "u" && ($[Symbol.iterator] = function() {
  var e = this;
  return {
    next: function() {
      var t = e.getToken();
      return {
        done: t.type === l.eof,
        value: t
      };
    }
  };
});
$.nextToken = function() {
  var e = this.curContext();
  if ((!e || !e.preserveSpace) && this.skipSpace(), this.start = this.pos, this.options.locations && (this.startLoc = this.curPosition()), this.pos >= this.input.length)
    return this.finishToken(l.eof);
  if (e.override)
    return e.override(this);
  this.readToken(this.fullCharCodeAtPos());
};
$.readToken = function(e) {
  return Ee(e, this.options.ecmaVersion >= 6) || e === 92 ? this.readWord() : this.getTokenFromCode(e);
};
$.fullCharCodeAtPos = function() {
  var e = this.input.charCodeAt(this.pos);
  if (e <= 55295 || e >= 56320)
    return e;
  var t = this.input.charCodeAt(this.pos + 1);
  return t <= 56319 || t >= 57344 ? e : (e << 10) + t - 56613888;
};
$.skipBlockComment = function() {
  var e = this.options.onComment && this.curPosition(), t = this.pos, i = this.input.indexOf("*/", this.pos += 2);
  if (i === -1 && this.raise(this.pos - 2, "Unterminated comment"), this.pos = i + 2, this.options.locations)
    for (var r = void 0, n = t; (r = Jr(this.input, n, this.pos)) > -1; )
      ++this.curLine, n = this.lineStart = r;
  this.options.onComment && this.options.onComment(
    !0,
    this.input.slice(t + 2, i),
    t,
    this.pos,
    e,
    this.curPosition()
  );
};
$.skipLineComment = function(e) {
  for (var t = this.pos, i = this.options.onComment && this.curPosition(), r = this.input.charCodeAt(this.pos += e); this.pos < this.input.length && !Ye(r); )
    r = this.input.charCodeAt(++this.pos);
  this.options.onComment && this.options.onComment(
    !1,
    this.input.slice(t + e, this.pos),
    t,
    this.pos,
    i,
    this.curPosition()
  );
};
$.skipSpace = function() {
  e: for (; this.pos < this.input.length; ) {
    var e = this.input.charCodeAt(this.pos);
    switch (e) {
      case 32:
      case 160:
        ++this.pos;
        break;
      case 13:
        this.input.charCodeAt(this.pos + 1) === 10 && ++this.pos;
      case 10:
      case 8232:
      case 8233:
        ++this.pos, this.options.locations && (++this.curLine, this.lineStart = this.pos);
        break;
      case 47:
        switch (this.input.charCodeAt(this.pos + 1)) {
          case 42:
            this.skipBlockComment();
            break;
          case 47:
            this.skipLineComment(2);
            break;
          default:
            break e;
        }
        break;
      default:
        if (e > 8 && e < 14 || e >= 5760 && wi.test(String.fromCharCode(e)))
          ++this.pos;
        else
          break e;
    }
  }
};
$.finishToken = function(e, t) {
  this.end = this.pos, this.options.locations && (this.endLoc = this.curPosition());
  var i = this.type;
  this.type = e, this.value = t, this.updateContext(i);
};
$.readToken_dot = function() {
  var e = this.input.charCodeAt(this.pos + 1);
  if (e >= 48 && e <= 57)
    return this.readNumber(!0);
  var t = this.input.charCodeAt(this.pos + 2);
  return this.options.ecmaVersion >= 6 && e === 46 && t === 46 ? (this.pos += 3, this.finishToken(l.ellipsis)) : (++this.pos, this.finishToken(l.dot));
};
$.readToken_slash = function() {
  var e = this.input.charCodeAt(this.pos + 1);
  return this.exprAllowed ? (++this.pos, this.readRegexp()) : e === 61 ? this.finishOp(l.assign, 2) : this.finishOp(l.slash, 1);
};
$.readToken_mult_modulo_exp = function(e) {
  var t = this.input.charCodeAt(this.pos + 1), i = 1, r = e === 42 ? l.star : l.modulo;
  return this.options.ecmaVersion >= 7 && e === 42 && t === 42 && (++i, r = l.starstar, t = this.input.charCodeAt(this.pos + 2)), t === 61 ? this.finishOp(l.assign, i + 1) : this.finishOp(r, i);
};
$.readToken_pipe_amp = function(e) {
  var t = this.input.charCodeAt(this.pos + 1);
  if (t === e) {
    if (this.options.ecmaVersion >= 12) {
      var i = this.input.charCodeAt(this.pos + 2);
      if (i === 61)
        return this.finishOp(l.assign, 3);
    }
    return this.finishOp(e === 124 ? l.logicalOR : l.logicalAND, 2);
  }
  return t === 61 ? this.finishOp(l.assign, 2) : this.finishOp(e === 124 ? l.bitwiseOR : l.bitwiseAND, 1);
};
$.readToken_caret = function() {
  var e = this.input.charCodeAt(this.pos + 1);
  return e === 61 ? this.finishOp(l.assign, 2) : this.finishOp(l.bitwiseXOR, 1);
};
$.readToken_plus_min = function(e) {
  var t = this.input.charCodeAt(this.pos + 1);
  return t === e ? t === 45 && !this.inModule && this.input.charCodeAt(this.pos + 2) === 62 && (this.lastTokEnd === 0 || he.test(this.input.slice(this.lastTokEnd, this.pos))) ? (this.skipLineComment(3), this.skipSpace(), this.nextToken()) : this.finishOp(l.incDec, 2) : t === 61 ? this.finishOp(l.assign, 2) : this.finishOp(l.plusMin, 1);
};
$.readToken_lt_gt = function(e) {
  var t = this.input.charCodeAt(this.pos + 1), i = 1;
  return t === e ? (i = e === 62 && this.input.charCodeAt(this.pos + 2) === 62 ? 3 : 2, this.input.charCodeAt(this.pos + i) === 61 ? this.finishOp(l.assign, i + 1) : this.finishOp(l.bitShift, i)) : t === 33 && e === 60 && !this.inModule && this.input.charCodeAt(this.pos + 2) === 45 && this.input.charCodeAt(this.pos + 3) === 45 ? (this.skipLineComment(4), this.skipSpace(), this.nextToken()) : (t === 61 && (i = 2), this.finishOp(l.relational, i));
};
$.readToken_eq_excl = function(e) {
  var t = this.input.charCodeAt(this.pos + 1);
  return t === 61 ? this.finishOp(l.equality, this.input.charCodeAt(this.pos + 2) === 61 ? 3 : 2) : e === 61 && t === 62 && this.options.ecmaVersion >= 6 ? (this.pos += 2, this.finishToken(l.arrow)) : this.finishOp(e === 61 ? l.eq : l.prefix, 1);
};
$.readToken_question = function() {
  var e = this.options.ecmaVersion;
  if (e >= 11) {
    var t = this.input.charCodeAt(this.pos + 1);
    if (t === 46) {
      var i = this.input.charCodeAt(this.pos + 2);
      if (i < 48 || i > 57)
        return this.finishOp(l.questionDot, 2);
    }
    if (t === 63) {
      if (e >= 12) {
        var r = this.input.charCodeAt(this.pos + 2);
        if (r === 61)
          return this.finishOp(l.assign, 3);
      }
      return this.finishOp(l.coalesce, 2);
    }
  }
  return this.finishOp(l.question, 1);
};
$.readToken_numberSign = function() {
  var e = this.options.ecmaVersion, t = 35;
  if (e >= 13 && (++this.pos, t = this.fullCharCodeAtPos(), Ee(t, !0) || t === 92))
    return this.finishToken(l.privateId, this.readWord1());
  this.raise(this.pos, "Unexpected character '" + Ve(t) + "'");
};
$.getTokenFromCode = function(e) {
  switch (e) {
    // The interpretation of a dot depends on whether it is followed
    // by a digit or another two dots.
    case 46:
      return this.readToken_dot();
    // Punctuation tokens.
    case 40:
      return ++this.pos, this.finishToken(l.parenL);
    case 41:
      return ++this.pos, this.finishToken(l.parenR);
    case 59:
      return ++this.pos, this.finishToken(l.semi);
    case 44:
      return ++this.pos, this.finishToken(l.comma);
    case 91:
      return ++this.pos, this.finishToken(l.bracketL);
    case 93:
      return ++this.pos, this.finishToken(l.bracketR);
    case 123:
      return ++this.pos, this.finishToken(l.braceL);
    case 125:
      return ++this.pos, this.finishToken(l.braceR);
    case 58:
      return ++this.pos, this.finishToken(l.colon);
    case 96:
      if (this.options.ecmaVersion < 6)
        break;
      return ++this.pos, this.finishToken(l.backQuote);
    case 48:
      var t = this.input.charCodeAt(this.pos + 1);
      if (t === 120 || t === 88)
        return this.readRadixNumber(16);
      if (this.options.ecmaVersion >= 6) {
        if (t === 111 || t === 79)
          return this.readRadixNumber(8);
        if (t === 98 || t === 66)
          return this.readRadixNumber(2);
      }
    // Anything else beginning with a digit is an integer, octal
    // number, or float.
    case 49:
    case 50:
    case 51:
    case 52:
    case 53:
    case 54:
    case 55:
    case 56:
    case 57:
      return this.readNumber(!1);
    // Quotes produce strings.
    case 34:
    case 39:
      return this.readString(e);
    // Operators are parsed inline in tiny state machines. '=' (61) is
    // often referred to. `finishOp` simply skips the amount of
    // characters it is given as second argument, and returns a token
    // of the type given by its first argument.
    case 47:
      return this.readToken_slash();
    case 37:
    case 42:
      return this.readToken_mult_modulo_exp(e);
    case 124:
    case 38:
      return this.readToken_pipe_amp(e);
    case 94:
      return this.readToken_caret();
    case 43:
    case 45:
      return this.readToken_plus_min(e);
    case 60:
    case 62:
      return this.readToken_lt_gt(e);
    case 61:
    case 33:
      return this.readToken_eq_excl(e);
    case 63:
      return this.readToken_question();
    case 126:
      return this.finishOp(l.prefix, 1);
    case 35:
      return this.readToken_numberSign();
  }
  this.raise(this.pos, "Unexpected character '" + Ve(e) + "'");
};
$.finishOp = function(e, t) {
  var i = this.input.slice(this.pos, this.pos + t);
  return this.pos += t, this.finishToken(e, i);
};
$.readRegexp = function() {
  for (var e, t, i = this.pos; ; ) {
    this.pos >= this.input.length && this.raise(i, "Unterminated regular expression");
    var r = this.input.charAt(this.pos);
    if (he.test(r) && this.raise(i, "Unterminated regular expression"), e)
      e = !1;
    else {
      if (r === "[")
        t = !0;
      else if (r === "]" && t)
        t = !1;
      else if (r === "/" && !t)
        break;
      e = r === "\\";
    }
    ++this.pos;
  }
  var n = this.input.slice(i, this.pos);
  ++this.pos;
  var u = this.pos, h = this.readWord1();
  this.containsEsc && this.unexpected(u);
  var d = this.regexpState || (this.regexpState = new Oe(this));
  d.reset(i, n, h), this.validateRegExpFlags(d), this.validateRegExpPattern(d);
  var y = null;
  try {
    y = new RegExp(n, h);
  } catch {
  }
  return this.finishToken(l.regexp, { pattern: n, flags: h, value: y });
};
$.readInt = function(e, t, i) {
  for (var r = this.options.ecmaVersion >= 12 && t === void 0, n = i && this.input.charCodeAt(this.pos) === 48, u = this.pos, h = 0, d = 0, y = 0, o = t ?? 1 / 0; y < o; ++y, ++this.pos) {
    var S = this.input.charCodeAt(this.pos), w = void 0;
    if (r && S === 95) {
      n && this.raiseRecoverable(this.pos, "Numeric separator is not allowed in legacy octal numeric literals"), d === 95 && this.raiseRecoverable(this.pos, "Numeric separator must be exactly one underscore"), y === 0 && this.raiseRecoverable(this.pos, "Numeric separator is not allowed at the first of digits"), d = S;
      continue;
    }
    if (S >= 97 ? w = S - 97 + 10 : S >= 65 ? w = S - 65 + 10 : S >= 48 && S <= 57 ? w = S - 48 : w = 1 / 0, w >= e)
      break;
    d = S, h = h * e + w;
  }
  return r && d === 95 && this.raiseRecoverable(this.pos - 1, "Numeric separator is not allowed at the last of digits"), this.pos === u || t != null && this.pos - u !== t ? null : h;
};
function wh(e, t) {
  return t ? parseInt(e, 8) : parseFloat(e.replace(/_/g, ""));
}
function Ts(e) {
  return typeof BigInt != "function" ? null : BigInt(e.replace(/_/g, ""));
}
$.readRadixNumber = function(e) {
  var t = this.pos;
  this.pos += 2;
  var i = this.readInt(e);
  return i == null && this.raise(this.start + 2, "Expected number in radix " + e), this.options.ecmaVersion >= 11 && this.input.charCodeAt(this.pos) === 110 ? (i = Ts(this.input.slice(t, this.pos)), ++this.pos) : Ee(this.fullCharCodeAtPos()) && this.raise(this.pos, "Identifier directly after number"), this.finishToken(l.num, i);
};
$.readNumber = function(e) {
  var t = this.pos;
  !e && this.readInt(10, void 0, !0) === null && this.raise(t, "Invalid number");
  var i = this.pos - t >= 2 && this.input.charCodeAt(t) === 48;
  i && this.strict && this.raise(t, "Invalid number");
  var r = this.input.charCodeAt(this.pos);
  if (!i && !e && this.options.ecmaVersion >= 11 && r === 110) {
    var n = Ts(this.input.slice(t, this.pos));
    return ++this.pos, Ee(this.fullCharCodeAtPos()) && this.raise(this.pos, "Identifier directly after number"), this.finishToken(l.num, n);
  }
  i && /[89]/.test(this.input.slice(t, this.pos)) && (i = !1), r === 46 && !i && (++this.pos, this.readInt(10), r = this.input.charCodeAt(this.pos)), (r === 69 || r === 101) && !i && (r = this.input.charCodeAt(++this.pos), (r === 43 || r === 45) && ++this.pos, this.readInt(10) === null && this.raise(t, "Invalid number")), Ee(this.fullCharCodeAtPos()) && this.raise(this.pos, "Identifier directly after number");
  var u = wh(this.input.slice(t, this.pos), i);
  return this.finishToken(l.num, u);
};
$.readCodePoint = function() {
  var e = this.input.charCodeAt(this.pos), t;
  if (e === 123) {
    this.options.ecmaVersion < 6 && this.unexpected();
    var i = ++this.pos;
    t = this.readHexChar(this.input.indexOf("}", this.pos) - this.pos), ++this.pos, t > 1114111 && this.invalidStringToken(i, "Code point out of bounds");
  } else
    t = this.readHexChar(4);
  return t;
};
$.readString = function(e) {
  for (var t = "", i = ++this.pos; ; ) {
    this.pos >= this.input.length && this.raise(this.start, "Unterminated string constant");
    var r = this.input.charCodeAt(this.pos);
    if (r === e)
      break;
    r === 92 ? (t += this.input.slice(i, this.pos), t += this.readEscapedChar(!1), i = this.pos) : r === 8232 || r === 8233 ? (this.options.ecmaVersion < 10 && this.raise(this.start, "Unterminated string constant"), ++this.pos, this.options.locations && (this.curLine++, this.lineStart = this.pos)) : (Ye(r) && this.raise(this.start, "Unterminated string constant"), ++this.pos);
  }
  return t += this.input.slice(i, this.pos++), this.finishToken(l.string, t);
};
var Ps = {};
$.tryReadTemplateToken = function() {
  this.inTemplateElement = !0;
  try {
    this.readTmplToken();
  } catch (e) {
    if (e === Ps)
      this.readInvalidTemplateToken();
    else
      throw e;
  }
  this.inTemplateElement = !1;
};
$.invalidStringToken = function(e, t) {
  if (this.inTemplateElement && this.options.ecmaVersion >= 9)
    throw Ps;
  this.raise(e, t);
};
$.readTmplToken = function() {
  for (var e = "", t = this.pos; ; ) {
    this.pos >= this.input.length && this.raise(this.start, "Unterminated template");
    var i = this.input.charCodeAt(this.pos);
    if (i === 96 || i === 36 && this.input.charCodeAt(this.pos + 1) === 123)
      return this.pos === this.start && (this.type === l.template || this.type === l.invalidTemplate) ? i === 36 ? (this.pos += 2, this.finishToken(l.dollarBraceL)) : (++this.pos, this.finishToken(l.backQuote)) : (e += this.input.slice(t, this.pos), this.finishToken(l.template, e));
    if (i === 92)
      e += this.input.slice(t, this.pos), e += this.readEscapedChar(!0), t = this.pos;
    else if (Ye(i)) {
      switch (e += this.input.slice(t, this.pos), ++this.pos, i) {
        case 13:
          this.input.charCodeAt(this.pos) === 10 && ++this.pos;
        case 10:
          e += `
`;
          break;
        default:
          e += String.fromCharCode(i);
          break;
      }
      this.options.locations && (++this.curLine, this.lineStart = this.pos), t = this.pos;
    } else
      ++this.pos;
  }
};
$.readInvalidTemplateToken = function() {
  for (; this.pos < this.input.length; this.pos++)
    switch (this.input[this.pos]) {
      case "\\":
        ++this.pos;
        break;
      case "$":
        if (this.input[this.pos + 1] !== "{")
          break;
      // fall through
      case "`":
        return this.finishToken(l.invalidTemplate, this.input.slice(this.start, this.pos));
      case "\r":
        this.input[this.pos + 1] === `
` && ++this.pos;
      // fall through
      case `
`:
      case "\u2028":
      case "\u2029":
        ++this.curLine, this.lineStart = this.pos + 1;
        break;
    }
  this.raise(this.start, "Unterminated template");
};
$.readEscapedChar = function(e) {
  var t = this.input.charCodeAt(++this.pos);
  switch (++this.pos, t) {
    case 110:
      return `
`;
    // 'n' -> '\n'
    case 114:
      return "\r";
    // 'r' -> '\r'
    case 120:
      return String.fromCharCode(this.readHexChar(2));
    // 'x'
    case 117:
      return Ve(this.readCodePoint());
    // 'u'
    case 116:
      return "	";
    // 't' -> '\t'
    case 98:
      return "\b";
    // 'b' -> '\b'
    case 118:
      return "\v";
    // 'v' -> '\u000b'
    case 102:
      return "\f";
    // 'f' -> '\f'
    case 13:
      this.input.charCodeAt(this.pos) === 10 && ++this.pos;
    // '\r\n'
    case 10:
      return this.options.locations && (this.lineStart = this.pos, ++this.curLine), "";
    case 56:
    case 57:
      if (this.strict && this.invalidStringToken(
        this.pos - 1,
        "Invalid escape sequence"
      ), e) {
        var i = this.pos - 1;
        this.invalidStringToken(
          i,
          "Invalid escape sequence in template string"
        );
      }
    default:
      if (t >= 48 && t <= 55) {
        var r = this.input.substr(this.pos - 1, 3).match(/^[0-7]+/)[0], n = parseInt(r, 8);
        return n > 255 && (r = r.slice(0, -1), n = parseInt(r, 8)), this.pos += r.length - 1, t = this.input.charCodeAt(this.pos), (r !== "0" || t === 56 || t === 57) && (this.strict || e) && this.invalidStringToken(
          this.pos - 1 - r.length,
          e ? "Octal literal in template string" : "Octal literal in strict mode"
        ), String.fromCharCode(n);
      }
      return Ye(t) ? (this.options.locations && (this.lineStart = this.pos, ++this.curLine), "") : String.fromCharCode(t);
  }
};
$.readHexChar = function(e) {
  var t = this.pos, i = this.readInt(16, e);
  return i === null && this.invalidStringToken(t, "Bad character escape sequence"), i;
};
$.readWord1 = function() {
  this.containsEsc = !1;
  for (var e = "", t = !0, i = this.pos, r = this.options.ecmaVersion >= 6; this.pos < this.input.length; ) {
    var n = this.fullCharCodeAtPos();
    if (Me(n, r))
      this.pos += n <= 65535 ? 1 : 2;
    else if (n === 92) {
      this.containsEsc = !0, e += this.input.slice(i, this.pos);
      var u = this.pos;
      this.input.charCodeAt(++this.pos) !== 117 && this.invalidStringToken(this.pos, "Expecting Unicode escape sequence \\uXXXX"), ++this.pos;
      var h = this.readCodePoint();
      (t ? Ee : Me)(h, r) || this.invalidStringToken(u, "Invalid Unicode escape"), e += Ve(h), i = this.pos;
    } else
      break;
    t = !1;
  }
  return e + this.input.slice(i, this.pos);
};
$.readWord = function() {
  var e = this.readWord1(), t = l.name;
  return this.keywords.test(e) && (t = at[e]), this.finishToken(t, e);
};
var Cs = "8.15.0";
X.acorn = {
  Parser: X,
  version: Cs,
  defaultOptions: zt,
  Position: ot,
  SourceLocation: kt,
  getLineInfo: Ti,
  Node: wt,
  TokenType: z,
  tokTypes: l,
  keywordTypes: at,
  TokContext: ue,
  tokContexts: H,
  isIdentifierChar: Me,
  isIdentifierStart: Ee,
  Token: Yt,
  isNewLine: Ye,
  lineBreak: he,
  lineBreakG: Gr,
  nonASCIIwhitespace: wi
};
function Th(e, t) {
  return X.parse(e, t);
}
function Ph(e, t, i) {
  return X.parseExpressionAt(e, t, i);
}
function Ch(e, t) {
  return X.tokenizer(e, t);
}
const Ah = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  Node: wt,
  Parser: X,
  Position: ot,
  SourceLocation: kt,
  TokContext: ue,
  Token: Yt,
  TokenType: z,
  defaultOptions: zt,
  getLineInfo: Ti,
  isIdentifierChar: Me,
  isIdentifierStart: Ee,
  isNewLine: Ye,
  keywordTypes: at,
  lineBreak: he,
  lineBreakG: Gr,
  nonASCIIwhitespace: wi,
  parse: Th,
  parseExpressionAt: Ph,
  tokContexts: H,
  tokTypes: l,
  tokenizer: Ch,
  version: Cs
}, Symbol.toStringTag, { value: "Module" }));
function pr(e, t) {
  for (var i = 0; i < t.length; i++) {
    var r = t[i];
    r.enumerable = r.enumerable || !1, r.configurable = !0, "value" in r && (r.writable = !0), Object.defineProperty(e, typeof (n = (function(u, h) {
      if (typeof u != "object" || u === null) return u;
      var d = u[Symbol.toPrimitive];
      if (d !== void 0) {
        var y = d.call(u, "string");
        if (typeof y != "object") return y;
        throw new TypeError("@@toPrimitive must return a primitive value.");
      }
      return String(u);
    })(r.key)) == "symbol" ? n : String(n), r);
  }
  var n;
}
function Zt() {
  return Zt = Object.assign ? Object.assign.bind() : function(e) {
    for (var t = 1; t < arguments.length; t++) {
      var i = arguments[t];
      for (var r in i) Object.prototype.hasOwnProperty.call(i, r) && (e[r] = i[r]);
    }
    return e;
  }, Zt.apply(this, arguments);
}
function Rt(e, t) {
  e.prototype = Object.create(t.prototype), e.prototype.constructor = e, mi(e, t);
}
function mi(e, t) {
  return mi = Object.setPrototypeOf ? Object.setPrototypeOf.bind() : function(i, r) {
    return i.__proto__ = r, i;
  }, mi(e, t);
}
function fr(e, t) {
  (t == null || t > e.length) && (t = e.length);
  for (var i = 0, r = new Array(t); i < t; i++) r[i] = e[i];
  return r;
}
function dr(e, t) {
  var i = typeof Symbol < "u" && e[Symbol.iterator] || e["@@iterator"];
  if (i) return (i = i.call(e)).next.bind(i);
  if (Array.isArray(e) || (i = (function(n, u) {
    if (n) {
      if (typeof n == "string") return fr(n, u);
      var h = Object.prototype.toString.call(n).slice(8, -1);
      return h === "Object" && n.constructor && (h = n.constructor.name), h === "Map" || h === "Set" ? Array.from(n) : h === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(h) ? fr(n, u) : void 0;
    }
  })(e)) || t) {
    i && (e = i);
    var r = 0;
    return function() {
      return r >= e.length ? { done: !0 } : { done: !1, value: e[r++] };
    };
  }
  throw new TypeError(`Invalid attempt to iterate non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`);
}
var ve = !0;
function xe(e, t) {
  return t === void 0 && (t = {}), new z("name", t);
}
var Eh = /* @__PURE__ */ new WeakMap();
function Ih(e) {
  var t = Eh.get(e.Parser.acorn || e);
  if (!t) {
    var i = { assert: xe(0, { startsExpr: ve }), asserts: xe(0, { startsExpr: ve }), global: xe(0, { startsExpr: ve }), keyof: xe(0, { startsExpr: ve }), readonly: xe(0, { startsExpr: ve }), unique: xe(0, { startsExpr: ve }), abstract: xe(0, { startsExpr: ve }), declare: xe(0, { startsExpr: ve }), enum: xe(0, { startsExpr: ve }), module: xe(0, { startsExpr: ve }), namespace: xe(0, { startsExpr: ve }), interface: xe(0, { startsExpr: ve }), type: xe(0, { startsExpr: ve }) }, r = { at: new z("@"), jsxName: new z("jsxName"), jsxText: new z("jsxText", { beforeExpr: !0 }), jsxTagStart: new z("jsxTagStart", { startsExpr: !0 }), jsxTagEnd: new z("jsxTagEnd") }, n = { tc_oTag: new ue("<tag", !1, !1), tc_cTag: new ue("</tag", !1, !1), tc_expr: new ue("<tag>...</tag>", !0, !0) }, u = new RegExp("^(?:" + Object.keys(i).join("|") + ")$");
    r.jsxTagStart.updateContext = function() {
      this.context.push(n.tc_expr), this.context.push(n.tc_oTag), this.exprAllowed = !1;
    }, r.jsxTagEnd.updateContext = function(h) {
      var d = this.context.pop();
      d === n.tc_oTag && h === l.slash || d === n.tc_cTag ? (this.context.pop(), this.exprAllowed = this.curContext() === n.tc_expr) : this.exprAllowed = !0;
    }, t = { tokTypes: Zt({}, i, r), tokContexts: Zt({}, n), keywordsRegExp: u, tokenIsLiteralPropertyName: function(h) {
      return [l.name, l.string, l.num].concat(Object.values(at), Object.values(i)).includes(h);
    }, tokenIsKeywordOrIdentifier: function(h) {
      return [l.name].concat(Object.values(at), Object.values(i)).includes(h);
    }, tokenIsIdentifier: function(h) {
      return [].concat(Object.values(i), [l.name]).includes(h);
    }, tokenIsTSDeclarationStart: function(h) {
      return [i.abstract, i.declare, i.enum, i.module, i.namespace, i.interface, i.type].includes(h);
    }, tokenIsTSTypeOperator: function(h) {
      return [i.keyof, i.readonly, i.unique].includes(h);
    }, tokenIsTemplate: function(h) {
      return h === l.invalidTemplate;
    } };
  }
  return t;
}
var yt = 1024, Nh = new RegExp("(?:[^\\S\\n\\r\\u2028\\u2029]|\\/\\/.*|\\/\\*.*?\\*\\/)*", "y"), mr = new RegExp("(?=(" + Nh.source + "))\\1" + /(?=[\n\r\u2028\u2029]|\/\*(?!.*?\*\/)|$)/.source, "y"), vt = function() {
  this.shorthandAssign = void 0, this.trailingComma = void 0, this.parenthesizedAssign = void 0, this.parenthesizedBind = void 0, this.doubleProto = void 0, this.shorthandAssign = this.trailingComma = this.parenthesizedAssign = this.parenthesizedBind = this.doubleProto = -1;
};
function Lh(e, t) {
  var i = t.key.name, r = e[i], n = "true";
  return t.type !== "MethodDefinition" || t.kind !== "get" && t.kind !== "set" || (n = (t.static ? "s" : "i") + t.kind), r === "iget" && n === "iset" || r === "iset" && n === "iget" || r === "sget" && n === "sset" || r === "sset" && n === "sget" ? (e[i] = "true", !1) : !!r || (e[i] = n, !1);
}
function yr(e, t) {
  var i = e.key;
  return !e.computed && (i.type === "Identifier" && i.name === t || i.type === "Literal" && i.value === t);
}
var N = { AbstractMethodHasImplementation: function(e) {
  return "Method '" + e.methodName + "' cannot have an implementation because it is marked abstract.";
}, AbstractPropertyHasInitializer: function(e) {
  return "Property '" + e.propertyName + "' cannot have an initializer because it is marked abstract.";
}, AccesorCannotDeclareThisParameter: "'get' and 'set' accessors cannot declare 'this' parameters.", AccesorCannotHaveTypeParameters: "An accessor cannot have type parameters.", CannotFindName: function(e) {
  return "Cannot find name '" + e.name + "'.";
}, ClassMethodHasDeclare: "Class methods cannot have the 'declare' modifier.", ClassMethodHasReadonly: "Class methods cannot have the 'readonly' modifier.", ConstInitiailizerMustBeStringOrNumericLiteralOrLiteralEnumReference: "A 'const' initializer in an ambient context must be a string or numeric literal or literal enum reference.", ConstructorHasTypeParameters: "Type parameters cannot appear on a constructor declaration.", DeclareAccessor: function(e) {
  return "'declare' is not allowed in " + e.kind + "ters.";
}, DeclareClassFieldHasInitializer: "Initializers are not allowed in ambient contexts.", DeclareFunctionHasImplementation: "An implementation cannot be declared in ambient contexts.", DuplicateAccessibilityModifier: function() {
  return "Accessibility modifier already seen.";
}, DuplicateModifier: function(e) {
  return "Duplicate modifier: '" + e.modifier + "'.";
}, EmptyHeritageClauseType: function(e) {
  return "'" + e.token + "' list cannot be empty.";
}, EmptyTypeArguments: "Type argument list cannot be empty.", EmptyTypeParameters: "Type parameter list cannot be empty.", ExpectedAmbientAfterExportDeclare: "'export declare' must be followed by an ambient declaration.", ImportAliasHasImportType: "An import alias can not use 'import type'.", IncompatibleModifiers: function(e) {
  var t = e.modifiers;
  return "'" + t[0] + "' modifier cannot be used with '" + t[1] + "' modifier.";
}, IndexSignatureHasAbstract: "Index signatures cannot have the 'abstract' modifier.", IndexSignatureHasAccessibility: function(e) {
  return "Index signatures cannot have an accessibility modifier ('" + e.modifier + "').";
}, IndexSignatureHasDeclare: "Index signatures cannot have the 'declare' modifier.", IndexSignatureHasOverride: "'override' modifier cannot appear on an index signature.", IndexSignatureHasStatic: "Index signatures cannot have the 'static' modifier.", InitializerNotAllowedInAmbientContext: "Initializers are not allowed in ambient contexts.", InvalidModifierOnTypeMember: function(e) {
  return "'" + e.modifier + "' modifier cannot appear on a type member.";
}, InvalidModifierOnTypeParameter: function(e) {
  return "'" + e.modifier + "' modifier cannot appear on a type parameter.";
}, InvalidModifierOnTypeParameterPositions: function(e) {
  return "'" + e.modifier + "' modifier can only appear on a type parameter of a class, interface or type alias.";
}, InvalidModifiersOrder: function(e) {
  var t = e.orderedModifiers;
  return "'" + t[0] + "' modifier must precede '" + t[1] + "' modifier.";
}, InvalidPropertyAccessAfterInstantiationExpression: "Invalid property access after an instantiation expression. You can either wrap the instantiation expression in parentheses, or delete the type arguments.", InvalidTupleMemberLabel: "Tuple members must be labeled with a simple identifier.", MissingInterfaceName: "'interface' declarations must be followed by an identifier.", MixedLabeledAndUnlabeledElements: "Tuple members must all have names or all not have names.", NonAbstractClassHasAbstractMethod: "Abstract methods can only appear within an abstract class.", NonClassMethodPropertyHasAbstractModifer: "'abstract' modifier can only appear on a class, method, or property declaration.", OptionalTypeBeforeRequired: "A required element cannot follow an optional element.", OverrideNotInSubClass: "This member cannot have an 'override' modifier because its containing class does not extend another class.", PatternIsOptional: "A binding pattern parameter cannot be optional in an implementation signature.", PrivateElementHasAbstract: "Private elements cannot have the 'abstract' modifier.", PrivateElementHasAccessibility: function(e) {
  return "Private elements cannot have an accessibility modifier ('" + e.modifier + "').";
}, PrivateMethodsHasAccessibility: function(e) {
  return "Private methods cannot have an accessibility modifier ('" + e.modifier + "').";
}, ReadonlyForMethodSignature: "'readonly' modifier can only appear on a property declaration or index signature.", ReservedArrowTypeParam: "This syntax is reserved in files with the .mts or .cts extension. Add a trailing comma, as in `<T,>() => ...`.", ReservedTypeAssertion: "This syntax is reserved in files with the .mts or .cts extension. Use an `as` expression instead.", SetAccesorCannotHaveOptionalParameter: "A 'set' accessor cannot have an optional parameter.", SetAccesorCannotHaveRestParameter: "A 'set' accessor cannot have rest parameter.", SetAccesorCannotHaveReturnType: "A 'set' accessor cannot have a return type annotation.", SingleTypeParameterWithoutTrailingComma: function(e) {
  var t = e.typeParameterName;
  return "Single type parameter " + t + " should have a trailing comma. Example usage: <" + t + ",>.";
}, StaticBlockCannotHaveModifier: "Static class blocks cannot have any modifier.", TypeAnnotationAfterAssign: "Type annotations must come before default assignments, e.g. instead of `age = 25: number` use `age: number = 25`.", TypeImportCannotSpecifyDefaultAndNamed: "A type-only import can specify a default import or named bindings, but not both.", TypeModifierIsUsedInTypeExports: "The 'type' modifier cannot be used on a named export when 'export type' is used on its export statement.", TypeModifierIsUsedInTypeImports: "The 'type' modifier cannot be used on a named import when 'import type' is used on its import statement.", UnexpectedParameterModifier: "A parameter property is only allowed in a constructor implementation.", UnexpectedReadonly: "'readonly' type modifier is only permitted on array and tuple literal types.", GenericsEndWithComma: "Trailing comma is not allowed at the end of generics.", UnexpectedTypeAnnotation: "Did not expect a type annotation here.", UnexpectedTypeCastInParameter: "Unexpected type cast in parameter position.", UnsupportedImportTypeArgument: "Argument in a type import must be a string literal.", UnsupportedParameterPropertyKind: "A parameter property may not be declared using a binding pattern.", UnsupportedSignatureParameterKind: function(e) {
  return "Name in a signature must be an Identifier, ObjectPattern or ArrayPattern, instead got " + e.type + ".";
}, LetInLexicalBinding: "'let' is not allowed to be used as a name in 'let' or 'const' declarations." }, Oh = { quot: '"', amp: "&", apos: "'", lt: "<", gt: ">", nbsp: " ", iexcl: "¡", cent: "¢", pound: "£", curren: "¤", yen: "¥", brvbar: "¦", sect: "§", uml: "¨", copy: "©", ordf: "ª", laquo: "«", not: "¬", shy: "­", reg: "®", macr: "¯", deg: "°", plusmn: "±", sup2: "²", sup3: "³", acute: "´", micro: "µ", para: "¶", middot: "·", cedil: "¸", sup1: "¹", ordm: "º", raquo: "»", frac14: "¼", frac12: "½", frac34: "¾", iquest: "¿", Agrave: "À", Aacute: "Á", Acirc: "Â", Atilde: "Ã", Auml: "Ä", Aring: "Å", AElig: "Æ", Ccedil: "Ç", Egrave: "È", Eacute: "É", Ecirc: "Ê", Euml: "Ë", Igrave: "Ì", Iacute: "Í", Icirc: "Î", Iuml: "Ï", ETH: "Ð", Ntilde: "Ñ", Ograve: "Ò", Oacute: "Ó", Ocirc: "Ô", Otilde: "Õ", Ouml: "Ö", times: "×", Oslash: "Ø", Ugrave: "Ù", Uacute: "Ú", Ucirc: "Û", Uuml: "Ü", Yacute: "Ý", THORN: "Þ", szlig: "ß", agrave: "à", aacute: "á", acirc: "â", atilde: "ã", auml: "ä", aring: "å", aelig: "æ", ccedil: "ç", egrave: "è", eacute: "é", ecirc: "ê", euml: "ë", igrave: "ì", iacute: "í", icirc: "î", iuml: "ï", eth: "ð", ntilde: "ñ", ograve: "ò", oacute: "ó", ocirc: "ô", otilde: "õ", ouml: "ö", divide: "÷", oslash: "ø", ugrave: "ù", uacute: "ú", ucirc: "û", uuml: "ü", yacute: "ý", thorn: "þ", yuml: "ÿ", OElig: "Œ", oelig: "œ", Scaron: "Š", scaron: "š", Yuml: "Ÿ", fnof: "ƒ", circ: "ˆ", tilde: "˜", Alpha: "Α", Beta: "Β", Gamma: "Γ", Delta: "Δ", Epsilon: "Ε", Zeta: "Ζ", Eta: "Η", Theta: "Θ", Iota: "Ι", Kappa: "Κ", Lambda: "Λ", Mu: "Μ", Nu: "Ν", Xi: "Ξ", Omicron: "Ο", Pi: "Π", Rho: "Ρ", Sigma: "Σ", Tau: "Τ", Upsilon: "Υ", Phi: "Φ", Chi: "Χ", Psi: "Ψ", Omega: "Ω", alpha: "α", beta: "β", gamma: "γ", delta: "δ", epsilon: "ε", zeta: "ζ", eta: "η", theta: "θ", iota: "ι", kappa: "κ", lambda: "λ", mu: "μ", nu: "ν", xi: "ξ", omicron: "ο", pi: "π", rho: "ρ", sigmaf: "ς", sigma: "σ", tau: "τ", upsilon: "υ", phi: "φ", chi: "χ", psi: "ψ", omega: "ω", thetasym: "ϑ", upsih: "ϒ", piv: "ϖ", ensp: " ", emsp: " ", thinsp: " ", zwnj: "‌", zwj: "‍", lrm: "‎", rlm: "‏", ndash: "–", mdash: "—", lsquo: "‘", rsquo: "’", sbquo: "‚", ldquo: "“", rdquo: "”", bdquo: "„", dagger: "†", Dagger: "‡", bull: "•", hellip: "…", permil: "‰", prime: "′", Prime: "″", lsaquo: "‹", rsaquo: "›", oline: "‾", frasl: "⁄", euro: "€", image: "ℑ", weierp: "℘", real: "ℜ", trade: "™", alefsym: "ℵ", larr: "←", uarr: "↑", rarr: "→", darr: "↓", harr: "↔", crarr: "↵", lArr: "⇐", uArr: "⇑", rArr: "⇒", dArr: "⇓", hArr: "⇔", forall: "∀", part: "∂", exist: "∃", empty: "∅", nabla: "∇", isin: "∈", notin: "∉", ni: "∋", prod: "∏", sum: "∑", minus: "−", lowast: "∗", radic: "√", prop: "∝", infin: "∞", ang: "∠", and: "∧", or: "∨", cap: "∩", cup: "∪", int: "∫", there4: "∴", sim: "∼", cong: "≅", asymp: "≈", ne: "≠", equiv: "≡", le: "≤", ge: "≥", sub: "⊂", sup: "⊃", nsub: "⊄", sube: "⊆", supe: "⊇", oplus: "⊕", otimes: "⊗", perp: "⊥", sdot: "⋅", lceil: "⌈", rceil: "⌉", lfloor: "⌊", rfloor: "⌋", lang: "〈", rang: "〉", loz: "◊", spades: "♠", clubs: "♣", hearts: "♥", diams: "♦" }, Rh = /^[\da-fA-F]+$/, Dh = /^\d+$/;
function gt(e) {
  return e && (e.type === "JSXIdentifier" ? e.name : e.type === "JSXNamespacedName" ? e.namespace.name + ":" + e.name.name : e.type === "JSXMemberExpression" ? gt(e.object) + "." + gt(e.property) : void 0);
}
var oi = /(?:\s|\/\/.*|\/\*[^]*?\*\/)*/g;
function vr(e) {
  if (!e) throw new Error("Assert fail");
}
function Mh(e) {
  return e === "accessor";
}
function Vh(e) {
  return e === "in" || e === "out";
}
function ui(e, t) {
  return 2 | (e ? 4 : 0) | (t ? 8 : 0);
}
function zh(e) {
  if (e.type !== "MemberExpression") return !1;
  var t = e.property;
  return (!e.computed || !(t.type !== "TemplateLiteral" || t.expressions.length > 0)) && As(e.object);
}
function As(e) {
  return e.type === "Identifier" || e.type === "MemberExpression" && !e.computed && As(e.object);
}
function xr(e) {
  return e === "private" || e === "public" || e === "protected";
}
function jh(e) {
  var t = {}, i = t.dts, r = i !== void 0 && i, n = t.allowSatisfies, u = n !== void 0 && n;
  return function(h) {
    var d = h.acorn || Ah, y = Ih(d), o = d.tokTypes, S = d.keywordTypes, w = d.isIdentifierStart, C = d.lineBreak, j = d.isNewLine, Z = d.tokContexts, pe = d.isIdentifierChar, D = y.tokTypes, se = y.tokContexts, ft = y.keywordsRegExp, Ce = y.tokenIsLiteralPropertyName, be = y.tokenIsTemplate, Ge = y.tokenIsTSDeclarationStart, q = y.tokenIsIdentifier, Ct = y.tokenIsKeywordOrIdentifier, Ls = y.tokenIsTSTypeOperator;
    function Os(P, fe, oe) {
      oe === void 0 && (oe = P.length);
      for (var te = fe; te < oe; te++) {
        var B = P.charCodeAt(te);
        if (j(B)) return te < oe - 1 && B === 13 && P.charCodeAt(te + 1) === 10 ? te + 2 : te + 1;
      }
      return -1;
    }
    h = (function(P, fe, oe) {
      var te = oe.tokTypes, B = fe.tokTypes;
      return (function(f) {
        function s() {
          return f.apply(this, arguments) || this;
        }
        Rt(s, f);
        var a = s.prototype;
        return a.takeDecorators = function(c) {
          var p = this.decoratorStack[this.decoratorStack.length - 1];
          p.length && (c.decorators = p, this.resetStartLocationFromNode(c, p[0]), this.decoratorStack[this.decoratorStack.length - 1] = []);
        }, a.parseDecorators = function(c) {
          for (var p = this.decoratorStack[this.decoratorStack.length - 1]; this.match(B.at); ) {
            var m = this.parseDecorator();
            p.push(m);
          }
          this.match(te._export) ? c || this.unexpected() : this.canHaveLeadingDecorator() || this.raise(this.start, "Leading decorators must be attached to a class declaration.");
        }, a.parseDecorator = function() {
          var c = this.startNode();
          this.next(), this.decoratorStack.push([]);
          var p, m = this.start, v = this.startLoc;
          if (this.match(te.parenL)) {
            var x = this.start, g = this.startLoc;
            if (this.next(), p = this.parseExpression(), this.expect(te.parenR), this.options.preserveParens) {
              var _ = this.startNodeAt(x, g);
              _.expression = p, p = this.finishNode(_, "ParenthesizedExpression");
            }
          } else for (p = this.parseIdent(!1); this.eat(te.dot); ) {
            var T = this.startNodeAt(m, v);
            T.object = p, T.property = this.parseIdent(!0), T.computed = !1, p = this.finishNode(T, "MemberExpression");
          }
          return c.expression = this.parseMaybeDecoratorArguments(p), this.decoratorStack.pop(), this.finishNode(c, "Decorator");
        }, a.parseMaybeDecoratorArguments = function(c) {
          if (this.eat(te.parenL)) {
            var p = this.startNodeAtNode(c);
            return p.callee = c, p.arguments = this.parseExprList(te.parenR, !1), this.finishNode(p, "CallExpression");
          }
          return c;
        }, s;
      })(P);
    })(h, y, d), h = (function(P, fe, oe, te) {
      var B = P.tokTypes, f = fe.tokTypes, s = P.isNewLine, a = P.isIdentifierChar, c = Object.assign({ allowNamespaces: !0, allowNamespacedObjects: !0 }, {});
      return (function(p) {
        function m() {
          return p.apply(this, arguments) || this;
        }
        Rt(m, p);
        var v = m.prototype;
        return v.jsx_readToken = function() {
          for (var x = "", g = this.pos; ; ) {
            this.pos >= this.input.length && this.raise(this.start, "Unterminated JSX contents");
            var _ = this.input.charCodeAt(this.pos);
            switch (_) {
              case 60:
              case 123:
                return this.pos === this.start ? _ === 60 && this.exprAllowed ? (++this.pos, this.finishToken(f.jsxTagStart)) : this.getTokenFromCode(_) : (x += this.input.slice(g, this.pos), this.finishToken(f.jsxText, x));
              case 38:
                x += this.input.slice(g, this.pos), x += this.jsx_readEntity(), g = this.pos;
                break;
              case 62:
              case 125:
                this.raise(this.pos, "Unexpected token `" + this.input[this.pos] + "`. Did you mean `" + (_ === 62 ? "&gt;" : "&rbrace;") + '` or `{"' + this.input[this.pos] + '"}`?');
              default:
                s(_) ? (x += this.input.slice(g, this.pos), x += this.jsx_readNewLine(!0), g = this.pos) : ++this.pos;
            }
          }
        }, v.jsx_readNewLine = function(x) {
          var g, _ = this.input.charCodeAt(this.pos);
          return ++this.pos, _ === 13 && this.input.charCodeAt(this.pos) === 10 ? (++this.pos, g = x ? `
` : `\r
`) : g = String.fromCharCode(_), this.options.locations && (++this.curLine, this.lineStart = this.pos), g;
        }, v.jsx_readString = function(x) {
          for (var g = "", _ = ++this.pos; ; ) {
            this.pos >= this.input.length && this.raise(this.start, "Unterminated string constant");
            var T = this.input.charCodeAt(this.pos);
            if (T === x) break;
            T === 38 ? (g += this.input.slice(_, this.pos), g += this.jsx_readEntity(), _ = this.pos) : s(T) ? (g += this.input.slice(_, this.pos), g += this.jsx_readNewLine(!1), _ = this.pos) : ++this.pos;
          }
          return g += this.input.slice(_, this.pos++), this.finishToken(B.string, g);
        }, v.jsx_readEntity = function() {
          var x, g = "", _ = 0, T = this.input[this.pos];
          T !== "&" && this.raise(this.pos, "Entity must start with an ampersand");
          for (var L = ++this.pos; this.pos < this.input.length && _++ < 10; ) {
            if ((T = this.input[this.pos++]) === ";") {
              g[0] === "#" ? g[1] === "x" ? (g = g.substr(2), Rh.test(g) && (x = String.fromCharCode(parseInt(g, 16)))) : (g = g.substr(1), Dh.test(g) && (x = String.fromCharCode(parseInt(g, 10)))) : x = Oh[g];
              break;
            }
            g += T;
          }
          return x || (this.pos = L, "&");
        }, v.jsx_readWord = function() {
          var x, g = this.pos;
          do
            x = this.input.charCodeAt(++this.pos);
          while (a(x) || x === 45);
          return this.finishToken(f.jsxName, this.input.slice(g, this.pos));
        }, v.jsx_parseIdentifier = function() {
          var x = this.startNode();
          return this.type === f.jsxName ? x.name = this.value : this.type.keyword ? x.name = this.type.keyword : this.unexpected(), this.next(), this.finishNode(x, "JSXIdentifier");
        }, v.jsx_parseNamespacedName = function() {
          var x = this.start, g = this.startLoc, _ = this.jsx_parseIdentifier();
          if (!c.allowNamespaces || !this.eat(B.colon)) return _;
          var T = this.startNodeAt(x, g);
          return T.namespace = _, T.name = this.jsx_parseIdentifier(), this.finishNode(T, "JSXNamespacedName");
        }, v.jsx_parseElementName = function() {
          if (this.type === f.jsxTagEnd) return "";
          var x = this.start, g = this.startLoc, _ = this.jsx_parseNamespacedName();
          for (this.type !== B.dot || _.type !== "JSXNamespacedName" || c.allowNamespacedObjects || this.unexpected(); this.eat(B.dot); ) {
            var T = this.startNodeAt(x, g);
            T.object = _, T.property = this.jsx_parseIdentifier(), _ = this.finishNode(T, "JSXMemberExpression");
          }
          return _;
        }, v.jsx_parseAttributeValue = function() {
          switch (this.type) {
            case B.braceL:
              var x = this.jsx_parseExpressionContainer();
              return x.expression.type === "JSXEmptyExpression" && this.raise(x.start, "JSX attributes must only be assigned a non-empty expression"), x;
            case f.jsxTagStart:
            case B.string:
              return this.parseExprAtom();
            default:
              this.raise(this.start, "JSX value should be either an expression or a quoted JSX text");
          }
        }, v.jsx_parseEmptyExpression = function() {
          var x = this.startNodeAt(this.lastTokEnd, this.lastTokEndLoc);
          return this.finishNodeAt(x, "JSXEmptyExpression", this.start, this.startLoc);
        }, v.jsx_parseExpressionContainer = function() {
          var x = this.startNode();
          return this.next(), x.expression = this.type === B.braceR ? this.jsx_parseEmptyExpression() : this.parseExpression(), this.expect(B.braceR), this.finishNode(x, "JSXExpressionContainer");
        }, v.jsx_parseAttribute = function() {
          var x = this.startNode();
          return this.eat(B.braceL) ? (this.expect(B.ellipsis), x.argument = this.parseMaybeAssign(), this.expect(B.braceR), this.finishNode(x, "JSXSpreadAttribute")) : (x.name = this.jsx_parseNamespacedName(), x.value = this.eat(B.eq) ? this.jsx_parseAttributeValue() : null, this.finishNode(x, "JSXAttribute"));
        }, v.jsx_parseOpeningElementAt = function(x, g) {
          var _ = this.startNodeAt(x, g);
          _.attributes = [];
          var T = this.jsx_parseElementName();
          for (T && (_.name = T); this.type !== B.slash && this.type !== f.jsxTagEnd; ) _.attributes.push(this.jsx_parseAttribute());
          return _.selfClosing = this.eat(B.slash), this.expect(f.jsxTagEnd), this.finishNode(_, T ? "JSXOpeningElement" : "JSXOpeningFragment");
        }, v.jsx_parseClosingElementAt = function(x, g) {
          var _ = this.startNodeAt(x, g), T = this.jsx_parseElementName();
          return T && (_.name = T), this.expect(f.jsxTagEnd), this.finishNode(_, T ? "JSXClosingElement" : "JSXClosingFragment");
        }, v.jsx_parseElementAt = function(x, g) {
          var _ = this.startNodeAt(x, g), T = [], L = this.jsx_parseOpeningElementAt(x, g), V = null;
          if (!L.selfClosing) {
            e: for (; ; ) switch (this.type) {
              case f.jsxTagStart:
                if (x = this.start, g = this.startLoc, this.next(), this.eat(B.slash)) {
                  V = this.jsx_parseClosingElementAt(x, g);
                  break e;
                }
                T.push(this.jsx_parseElementAt(x, g));
                break;
              case f.jsxText:
                T.push(this.parseExprAtom());
                break;
              case B.braceL:
                T.push(this.jsx_parseExpressionContainer());
                break;
              default:
                this.unexpected();
            }
            gt(V.name) !== gt(L.name) && this.raise(V.start, "Expected corresponding JSX closing tag for <" + gt(L.name) + ">");
          }
          var E = L.name ? "Element" : "Fragment";
          return _["opening" + E] = L, _["closing" + E] = V, _.children = T, this.type === B.relational && this.value === "<" && this.raise(this.start, "Adjacent JSX elements must be wrapped in an enclosing tag"), this.finishNode(_, "JSX" + E);
        }, v.jsx_parseText = function() {
          var x = this.parseLiteral(this.value);
          return x.type = "JSXText", x;
        }, v.jsx_parseElement = function() {
          var x = this.start, g = this.startLoc;
          return this.next(), this.jsx_parseElementAt(x, g);
        }, m;
      })(oe);
    })(d, y, h), h = (function(P, fe, oe) {
      var te = fe.tokTypes, B = oe.tokTypes;
      return (function(f) {
        function s() {
          return f.apply(this, arguments) || this;
        }
        Rt(s, f);
        var a = s.prototype;
        return a.parseMaybeImportAttributes = function(c) {
          if (this.type === B._with || this.type === te.assert) {
            this.next();
            var p = this.parseImportAttributes();
            p && (c.attributes = p);
          }
        }, a.parseImportAttributes = function() {
          this.expect(B.braceL);
          var c = this.parseWithEntries();
          return this.expect(B.braceR), c;
        }, a.parseWithEntries = function() {
          var c = [], p = /* @__PURE__ */ new Set();
          do {
            if (this.type === B.braceR) break;
            var m, v = this.startNode();
            m = this.type === B.string ? this.parseLiteral(this.value) : this.parseIdent(!0), this.next(), v.key = m, p.has(v.key.name) && this.raise(this.pos, "Duplicated key in attributes"), p.add(v.key.name), this.type !== B.string && this.raise(this.pos, "Only string is supported as an attribute value"), v.value = this.parseLiteral(this.value), c.push(this.finishNode(v, "ImportAttribute"));
          } while (this.eat(B.comma));
          return c;
        }, s;
      })(P);
    })(h, y, d);
    var Rs = /* @__PURE__ */ (function(P) {
      function fe(s, a, c) {
        var p;
        return (p = P.call(this, s, a, c) || this).preValue = null, p.preToken = null, p.isLookahead = !1, p.isAmbientContext = !1, p.inAbstractClass = !1, p.inType = !1, p.inDisallowConditionalTypesContext = !1, p.maybeInArrowParameters = !1, p.shouldParseArrowReturnType = void 0, p.shouldParseAsyncArrowReturnType = void 0, p.decoratorStack = [[]], p.importsStack = [[]], p.importOrExportOuterKind = void 0, p.tsParseConstModifier = p.tsParseModifiers.bind((function(m) {
          if (m === void 0) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
          return m;
        })(p), { allowedModifiers: ["const"], disallowedModifiers: ["in", "out"], errorTemplate: N.InvalidModifierOnTypeParameterPositions }), p;
      }
      Rt(fe, P);
      var oe, te, B, f = fe.prototype;
      return f.getTokenFromCodeInType = function(s) {
        return s === 62 || s === 60 ? this.finishOp(o.relational, 1) : P.prototype.getTokenFromCode.call(this, s);
      }, f.readToken = function(s) {
        if (!this.inType) {
          var a = this.curContext();
          if (a === se.tc_expr) return this.jsx_readToken();
          if (a === se.tc_oTag || a === se.tc_cTag) {
            if (w(s)) return this.jsx_readWord();
            if (s == 62) return ++this.pos, this.finishToken(D.jsxTagEnd);
            if ((s === 34 || s === 39) && a == se.tc_oTag) return this.jsx_readString(s);
          }
          if (s === 60 && this.exprAllowed && this.input.charCodeAt(this.pos + 1) !== 33) return ++this.pos, this.finishToken(D.jsxTagStart);
        }
        return P.prototype.readToken.call(this, s);
      }, f.getTokenFromCode = function(s) {
        return this.inType ? this.getTokenFromCodeInType(s) : s === 64 ? (++this.pos, this.finishToken(D.at)) : P.prototype.getTokenFromCode.call(this, s);
      }, f.isAbstractClass = function() {
        return this.ts_isContextual(D.abstract) && this.lookahead().type === o._class;
      }, f.finishNode = function(s, a) {
        return s.type !== "" && s.end !== 0 ? s : P.prototype.finishNode.call(this, s, a);
      }, f.tryParse = function(s, a) {
        a === void 0 && (a = this.cloneCurLookaheadState());
        var c = { node: null };
        try {
          return { node: s(function(m) {
            throw m === void 0 && (m = null), c.node = m, c;
          }), error: null, thrown: !1, aborted: !1, failState: null };
        } catch (m) {
          var p = this.getCurLookaheadState();
          if (this.setLookaheadState(a), m instanceof SyntaxError) return { node: null, error: m, thrown: !0, aborted: !1, failState: p };
          if (m === c) return { node: c.node, error: null, thrown: !1, aborted: !0, failState: p };
          throw m;
        }
      }, f.setOptionalParametersError = function(s, a) {
        var c;
        s.optionalParametersLoc = (c = a?.loc) != null ? c : this.startLoc;
      }, f.reScan_lt_gt = function() {
        this.type === o.relational && (this.pos -= 1, this.readToken_lt_gt(this.fullCharCodeAtPos()));
      }, f.reScan_lt = function() {
        var s = this.type;
        return s === o.bitShift ? (this.pos -= 2, this.finishOp(o.relational, 1), o.relational) : s;
      }, f.resetEndLocation = function(s, a) {
        a === void 0 && (a = this.lastTokEndLoc), s.end = a.column, s.loc.end = a, this.options.ranges && (s.range[1] = a.column);
      }, f.startNodeAtNode = function(s) {
        return P.prototype.startNodeAt.call(this, s.start, s.loc.start);
      }, f.nextTokenStart = function() {
        return this.nextTokenStartSince(this.pos);
      }, f.tsHasSomeModifiers = function(s, a) {
        return a.some(function(c) {
          return xr(c) ? s.accessibility === c : !!s[c];
        });
      }, f.tsIsStartOfStaticBlocks = function() {
        return this.isContextual("static") && this.lookaheadCharCode() === 123;
      }, f.tsCheckForInvalidTypeCasts = function(s) {
        var a = this;
        s.forEach(function(c) {
          c?.type === "TSTypeCastExpression" && a.raise(c.typeAnnotation.start, N.UnexpectedTypeAnnotation);
        });
      }, f.atPossibleAsyncArrow = function(s) {
        return s.type === "Identifier" && s.name === "async" && this.lastTokEndLoc.column === s.end && !this.canInsertSemicolon() && s.end - s.start == 5 && s.start === this.potentialArrowAt;
      }, f.tsIsIdentifier = function() {
        return q(this.type);
      }, f.tsTryParseTypeOrTypePredicateAnnotation = function() {
        return this.match(o.colon) ? this.tsParseTypeOrTypePredicateAnnotation(o.colon) : void 0;
      }, f.tsTryParseGenericAsyncArrowFunction = function(s, a, c) {
        var p = this;
        if (this.tsMatchLeftRelational()) {
          var m = this.maybeInArrowParameters;
          this.maybeInArrowParameters = !0;
          var v = this.tsTryParseAndCatch(function() {
            var x = p.startNodeAt(s, a);
            return x.typeParameters = p.tsParseTypeParameters(), P.prototype.parseFunctionParams.call(p, x), x.returnType = p.tsTryParseTypeOrTypePredicateAnnotation(), p.expect(o.arrow), x;
          });
          if (this.maybeInArrowParameters = m, v) return P.prototype.parseArrowExpression.call(this, v, null, !0, c);
        }
      }, f.tsParseTypeArgumentsInExpression = function() {
        if (this.reScan_lt() === o.relational) return this.tsParseTypeArguments();
      }, f.tsInNoContext = function(s) {
        var a = this.context;
        this.context = [a[0]];
        try {
          return s();
        } finally {
          this.context = a;
        }
      }, f.tsTryParseTypeAnnotation = function() {
        return this.match(o.colon) ? this.tsParseTypeAnnotation() : void 0;
      }, f.isUnparsedContextual = function(s, a) {
        var c = s + a.length;
        if (this.input.slice(s, c) === a) {
          var p = this.input.charCodeAt(c);
          return !(pe(p) || (64512 & p) == 55296);
        }
        return !1;
      }, f.isAbstractConstructorSignature = function() {
        return this.ts_isContextual(D.abstract) && this.lookahead().type === o._new;
      }, f.nextTokenStartSince = function(s) {
        return oi.lastIndex = s, oi.test(this.input) ? oi.lastIndex : s;
      }, f.lookaheadCharCode = function() {
        return this.input.charCodeAt(this.nextTokenStart());
      }, f.compareLookaheadState = function(s, a) {
        for (var c = 0, p = Object.keys(s); c < p.length; c++) {
          var m = p[c];
          if (s[m] !== a[m]) return !1;
        }
        return !0;
      }, f.createLookaheadState = function() {
        this.value = null, this.context = [this.curContext()];
      }, f.getCurLookaheadState = function() {
        return { endLoc: this.endLoc, lastTokEnd: this.lastTokEnd, lastTokStart: this.lastTokStart, lastTokStartLoc: this.lastTokStartLoc, pos: this.pos, value: this.value, type: this.type, start: this.start, end: this.end, context: this.context, startLoc: this.startLoc, lastTokEndLoc: this.lastTokEndLoc, curLine: this.curLine, lineStart: this.lineStart, curPosition: this.curPosition, containsEsc: this.containsEsc };
      }, f.cloneCurLookaheadState = function() {
        return { pos: this.pos, value: this.value, type: this.type, start: this.start, end: this.end, context: this.context && this.context.slice(), startLoc: this.startLoc, lastTokEndLoc: this.lastTokEndLoc, endLoc: this.endLoc, lastTokEnd: this.lastTokEnd, lastTokStart: this.lastTokStart, lastTokStartLoc: this.lastTokStartLoc, curLine: this.curLine, lineStart: this.lineStart, curPosition: this.curPosition, containsEsc: this.containsEsc };
      }, f.setLookaheadState = function(s) {
        this.pos = s.pos, this.value = s.value, this.endLoc = s.endLoc, this.lastTokEnd = s.lastTokEnd, this.lastTokStart = s.lastTokStart, this.lastTokStartLoc = s.lastTokStartLoc, this.type = s.type, this.start = s.start, this.end = s.end, this.context = s.context, this.startLoc = s.startLoc, this.lastTokEndLoc = s.lastTokEndLoc, this.curLine = s.curLine, this.lineStart = s.lineStart, this.curPosition = s.curPosition, this.containsEsc = s.containsEsc;
      }, f.tsLookAhead = function(s) {
        var a = this.getCurLookaheadState(), c = s();
        return this.setLookaheadState(a), c;
      }, f.lookahead = function(s) {
        var a = this.getCurLookaheadState();
        if (this.createLookaheadState(), this.isLookahead = !0, s !== void 0) for (var c = 0; c < s; c++) this.nextToken();
        else this.nextToken();
        this.isLookahead = !1;
        var p = this.getCurLookaheadState();
        return this.setLookaheadState(a), p;
      }, f.readWord = function() {
        var s = this.readWord1(), a = o.name;
        return this.keywords.test(s) ? a = S[s] : new RegExp(ft).test(s) && (a = D[s]), this.finishToken(a, s);
      }, f.skipBlockComment = function() {
        var s;
        this.isLookahead || (s = this.options.onComment && this.curPosition());
        var a = this.pos, c = this.input.indexOf("*/", this.pos += 2);
        if (c === -1 && this.raise(this.pos - 2, "Unterminated comment"), this.pos = c + 2, this.options.locations) for (var p, m = a; (p = Os(this.input, m, this.pos)) > -1; ) ++this.curLine, m = this.lineStart = p;
        this.isLookahead || this.options.onComment && this.options.onComment(!0, this.input.slice(a + 2, c), a, this.pos, s, this.curPosition());
      }, f.skipLineComment = function(s) {
        var a, c = this.pos;
        this.isLookahead || (a = this.options.onComment && this.curPosition());
        for (var p = this.input.charCodeAt(this.pos += s); this.pos < this.input.length && !j(p); ) p = this.input.charCodeAt(++this.pos);
        this.isLookahead || this.options.onComment && this.options.onComment(!1, this.input.slice(c + s, this.pos), c, this.pos, a, this.curPosition());
      }, f.finishToken = function(s, a) {
        this.preValue = this.value, this.preToken = this.type, this.end = this.pos, this.options.locations && (this.endLoc = this.curPosition());
        var c = this.type;
        this.type = s, this.value = a, this.isLookahead || this.updateContext(c);
      }, f.resetStartLocation = function(s, a, c) {
        s.start = a, s.loc.start = c, this.options.ranges && (s.range[0] = a);
      }, f.isLineTerminator = function() {
        return this.eat(o.semi) || P.prototype.canInsertSemicolon.call(this);
      }, f.hasFollowingLineBreak = function() {
        return mr.lastIndex = this.end, mr.test(this.input);
      }, f.addExtra = function(s, a, c, p) {
        if (p === void 0 && (p = !0), s) {
          var m = s.extra = s.extra || {};
          p ? m[a] = c : Object.defineProperty(m, a, { enumerable: p, value: c });
        }
      }, f.isLiteralPropertyName = function() {
        return Ce(this.type);
      }, f.hasPrecedingLineBreak = function() {
        return C.test(this.input.slice(this.lastTokEndLoc.index, this.start));
      }, f.createIdentifier = function(s, a) {
        return s.name = a, this.finishNode(s, "Identifier");
      }, f.resetStartLocationFromNode = function(s, a) {
        this.resetStartLocation(s, a.start, a.loc.start);
      }, f.isThisParam = function(s) {
        return s.type === "Identifier" && s.name === "this";
      }, f.isLookaheadContextual = function(s) {
        var a = this.nextTokenStart();
        return this.isUnparsedContextual(a, s);
      }, f.ts_type_isContextual = function(s, a) {
        return s === a && !this.containsEsc;
      }, f.ts_isContextual = function(s) {
        return this.type === s && !this.containsEsc;
      }, f.ts_isContextualWithState = function(s, a) {
        return s.type === a && !s.containsEsc;
      }, f.isContextualWithState = function(s, a) {
        return a.type === o.name && a.value === s && !a.containsEsc;
      }, f.tsIsStartOfMappedType = function() {
        return this.next(), this.eat(o.plusMin) ? this.ts_isContextual(D.readonly) : (this.ts_isContextual(D.readonly) && this.next(), !!this.match(o.bracketL) && (this.next(), !!this.tsIsIdentifier() && (this.next(), this.match(o._in))));
      }, f.tsInDisallowConditionalTypesContext = function(s) {
        var a = this.inDisallowConditionalTypesContext;
        this.inDisallowConditionalTypesContext = !0;
        try {
          return s();
        } finally {
          this.inDisallowConditionalTypesContext = a;
        }
      }, f.tsTryParseType = function() {
        return this.tsEatThenParseType(o.colon);
      }, f.match = function(s) {
        return this.type === s;
      }, f.matchJsx = function(s) {
        return this.type === y.tokTypes[s];
      }, f.ts_eatWithState = function(s, a, c) {
        if (s === c.type) {
          for (var p = 0; p < a; p++) this.next();
          return !0;
        }
        return !1;
      }, f.ts_eatContextualWithState = function(s, a, c) {
        if (ft.test(s)) {
          if (this.ts_isContextualWithState(c, D[s])) {
            for (var p = 0; p < a; p++) this.next();
            return !0;
          }
          return !1;
        }
        if (!this.isContextualWithState(s, c)) return !1;
        for (var m = 0; m < a; m++) this.next();
        return !0;
      }, f.canHaveLeadingDecorator = function() {
        return this.match(o._class);
      }, f.eatContextual = function(s) {
        return ft.test(s) ? !!this.ts_isContextual(D[s]) && (this.next(), !0) : P.prototype.eatContextual.call(this, s);
      }, f.tsIsExternalModuleReference = function() {
        return this.isContextual("require") && this.lookaheadCharCode() === 40;
      }, f.tsParseExternalModuleReference = function() {
        var s = this.startNode();
        return this.expectContextual("require"), this.expect(o.parenL), this.match(o.string) || this.unexpected(), s.expression = this.parseExprAtom(), this.expect(o.parenR), this.finishNode(s, "TSExternalModuleReference");
      }, f.tsParseEntityName = function(s) {
        s === void 0 && (s = !0);
        for (var a = this.parseIdent(s); this.eat(o.dot); ) {
          var c = this.startNodeAtNode(a);
          c.left = a, c.right = this.parseIdent(s), a = this.finishNode(c, "TSQualifiedName");
        }
        return a;
      }, f.tsParseEnumMember = function() {
        var s = this.startNode();
        return s.id = this.match(o.string) ? this.parseLiteral(this.value) : this.parseIdent(!0), this.eat(o.eq) && (s.initializer = this.parseMaybeAssign()), this.finishNode(s, "TSEnumMember");
      }, f.tsParseEnumDeclaration = function(s, a) {
        return a === void 0 && (a = {}), a.const && (s.const = !0), a.declare && (s.declare = !0), this.expectContextual("enum"), s.id = this.parseIdent(), this.checkLValSimple(s.id), this.expect(o.braceL), s.members = this.tsParseDelimitedList("EnumMembers", this.tsParseEnumMember.bind(this)), this.expect(o.braceR), this.finishNode(s, "TSEnumDeclaration");
      }, f.tsParseModuleBlock = function() {
        var s = this.startNode();
        for (P.prototype.enterScope.call(this, 512), this.expect(o.braceL), s.body = []; this.type !== o.braceR; ) {
          var a = this.parseStatement(null, !0);
          s.body.push(a);
        }
        return this.next(), P.prototype.exitScope.call(this), this.finishNode(s, "TSModuleBlock");
      }, f.tsParseAmbientExternalModuleDeclaration = function(s) {
        return this.ts_isContextual(D.global) ? (s.global = !0, s.id = this.parseIdent()) : this.match(o.string) ? s.id = this.parseLiteral(this.value) : this.unexpected(), this.match(o.braceL) ? (P.prototype.enterScope.call(this, yt), s.body = this.tsParseModuleBlock(), P.prototype.exitScope.call(this)) : P.prototype.semicolon.call(this), this.finishNode(s, "TSModuleDeclaration");
      }, f.tsTryParseDeclare = function(s) {
        var a = this;
        if (!this.isLineTerminator()) {
          var c, p = this.type;
          return this.isContextual("let") && (p = o._var, c = "let"), this.tsInAmbientContext(function() {
            if (p === o._function) return s.declare = !0, a.parseFunctionStatement(s, !1, !0);
            if (p === o._class) return s.declare = !0, a.parseClass(s, !0);
            if (p === D.enum) return a.tsParseEnumDeclaration(s, { declare: !0 });
            if (p === D.global) return a.tsParseAmbientExternalModuleDeclaration(s);
            if (p === o._const || p === o._var) return a.match(o._const) && a.isLookaheadContextual("enum") ? (a.expect(o._const), a.tsParseEnumDeclaration(s, { const: !0, declare: !0 })) : (s.declare = !0, a.parseVarStatement(s, c || a.value, !0));
            if (p === D.interface) {
              var m = a.tsParseInterfaceDeclaration(s, { declare: !0 });
              if (m) return m;
            }
            return q(p) ? a.tsParseDeclaration(s, a.value, !0) : void 0;
          });
        }
      }, f.tsIsListTerminator = function(s) {
        switch (s) {
          case "EnumMembers":
          case "TypeMembers":
            return this.match(o.braceR);
          case "HeritageClauseElement":
            return this.match(o.braceL);
          case "TupleElementTypes":
            return this.match(o.bracketR);
          case "TypeParametersOrArguments":
            return this.tsMatchRightRelational();
        }
      }, f.tsParseDelimitedListWorker = function(s, a, c, p) {
        for (var m = [], v = -1; !this.tsIsListTerminator(s); ) {
          v = -1;
          var x = a();
          if (x == null) return;
          if (m.push(x), !this.eat(o.comma)) {
            if (this.tsIsListTerminator(s)) break;
            return void (c && this.expect(o.comma));
          }
          v = this.lastTokStart;
        }
        return p && (p.value = v), m;
      }, f.tsParseDelimitedList = function(s, a, c) {
        return (function(p) {
          if (p == null) throw new Error("Unexpected " + p + " value.");
          return p;
        })(this.tsParseDelimitedListWorker(s, a, !0, c));
      }, f.tsParseBracketedList = function(s, a, c, p, m) {
        p || this.expect(c ? o.bracketL : o.relational);
        var v = this.tsParseDelimitedList(s, a, m);
        return this.expect(c ? o.bracketR : o.relational), v;
      }, f.tsParseTypeParameterName = function() {
        return this.parseIdent().name;
      }, f.tsEatThenParseType = function(s) {
        return this.match(s) ? this.tsNextThenParseType() : void 0;
      }, f.tsExpectThenParseType = function(s) {
        var a = this;
        return this.tsDoThenParseType(function() {
          return a.expect(s);
        });
      }, f.tsNextThenParseType = function() {
        var s = this;
        return this.tsDoThenParseType(function() {
          return s.next();
        });
      }, f.tsDoThenParseType = function(s) {
        var a = this;
        return this.tsInType(function() {
          return s(), a.tsParseType();
        });
      }, f.tsSkipParameterStart = function() {
        if (q(this.type) || this.match(o._this)) return this.next(), !0;
        if (this.match(o.braceL)) try {
          return this.parseObj(!0), !0;
        } catch {
          return !1;
        }
        if (this.match(o.bracketL)) {
          this.next();
          try {
            return this.parseBindingList(o.bracketR, !0, !0), !0;
          } catch {
            return !1;
          }
        }
        return !1;
      }, f.tsIsUnambiguouslyStartOfFunctionType = function() {
        return this.next(), !!(this.match(o.parenR) || this.match(o.ellipsis) || this.tsSkipParameterStart() && (this.match(o.colon) || this.match(o.comma) || this.match(o.question) || this.match(o.eq) || this.match(o.parenR) && (this.next(), this.match(o.arrow))));
      }, f.tsIsStartOfFunctionType = function() {
        return !!this.tsMatchLeftRelational() || this.match(o.parenL) && this.tsLookAhead(this.tsIsUnambiguouslyStartOfFunctionType.bind(this));
      }, f.tsInAllowConditionalTypesContext = function(s) {
        var a = this.inDisallowConditionalTypesContext;
        this.inDisallowConditionalTypesContext = !1;
        try {
          return s();
        } finally {
          this.inDisallowConditionalTypesContext = a;
        }
      }, f.tsParseBindingListForSignature = function() {
        var s = this;
        return P.prototype.parseBindingList.call(this, o.parenR, !0, !0).map(function(a) {
          return a.type !== "Identifier" && a.type !== "RestElement" && a.type !== "ObjectPattern" && a.type !== "ArrayPattern" && s.raise(a.start, N.UnsupportedSignatureParameterKind(a.type)), a;
        });
      }, f.tsParseTypePredicateAsserts = function() {
        if (this.type !== D.asserts) return !1;
        var s = this.containsEsc;
        return this.next(), !(!q(this.type) && !this.match(o._this) || (s && this.raise(this.lastTokStart, "Escape sequence in keyword asserts"), 0));
      }, f.tsParseThisTypeNode = function() {
        var s = this.startNode();
        return this.next(), this.finishNode(s, "TSThisType");
      }, f.tsParseTypeAnnotation = function(s, a) {
        var c = this;
        return s === void 0 && (s = !0), a === void 0 && (a = this.startNode()), this.tsInType(function() {
          s && c.expect(o.colon), a.typeAnnotation = c.tsParseType();
        }), this.finishNode(a, "TSTypeAnnotation");
      }, f.tsParseThisTypePredicate = function(s) {
        this.next();
        var a = this.startNodeAtNode(s);
        return a.parameterName = s, a.typeAnnotation = this.tsParseTypeAnnotation(!1), a.asserts = !1, this.finishNode(a, "TSTypePredicate");
      }, f.tsParseThisTypeOrThisTypePredicate = function() {
        var s = this.tsParseThisTypeNode();
        return this.isContextual("is") && !this.hasPrecedingLineBreak() ? this.tsParseThisTypePredicate(s) : s;
      }, f.tsParseTypePredicatePrefix = function() {
        var s = this.parseIdent();
        if (this.isContextual("is") && !this.hasPrecedingLineBreak()) return this.next(), s;
      }, f.tsParseTypeOrTypePredicateAnnotation = function(s) {
        var a = this;
        return this.tsInType(function() {
          var c = a.startNode();
          a.expect(s);
          var p = a.startNode(), m = !!a.tsTryParse(a.tsParseTypePredicateAsserts.bind(a));
          if (m && a.match(o._this)) {
            var v = a.tsParseThisTypeOrThisTypePredicate();
            return v.type === "TSThisType" ? (p.parameterName = v, p.asserts = !0, p.typeAnnotation = null, v = a.finishNode(p, "TSTypePredicate")) : (a.resetStartLocationFromNode(v, p), v.asserts = !0), c.typeAnnotation = v, a.finishNode(c, "TSTypeAnnotation");
          }
          var x = a.tsIsIdentifier() && a.tsTryParse(a.tsParseTypePredicatePrefix.bind(a));
          if (!x) return m ? (p.parameterName = a.parseIdent(), p.asserts = m, p.typeAnnotation = null, c.typeAnnotation = a.finishNode(p, "TSTypePredicate"), a.finishNode(c, "TSTypeAnnotation")) : a.tsParseTypeAnnotation(!1, c);
          var g = a.tsParseTypeAnnotation(!1);
          return p.parameterName = x, p.typeAnnotation = g, p.asserts = m, c.typeAnnotation = a.finishNode(p, "TSTypePredicate"), a.finishNode(c, "TSTypeAnnotation");
        });
      }, f.tsFillSignature = function(s, a) {
        var c = s === o.arrow;
        a.typeParameters = this.tsTryParseTypeParameters(), this.expect(o.parenL), a.parameters = this.tsParseBindingListForSignature(), (c || this.match(s)) && (a.typeAnnotation = this.tsParseTypeOrTypePredicateAnnotation(s));
      }, f.tsTryNextParseConstantContext = function() {
        if (this.lookahead().type !== o._const) return null;
        this.next();
        var s = this.tsParseTypeReference();
        return s.typeParameters && this.raise(s.typeName.start, N.CannotFindName({ name: "const" })), s;
      }, f.tsParseFunctionOrConstructorType = function(s, a) {
        var c = this, p = this.startNode();
        return s === "TSConstructorType" && (p.abstract = !!a, a && this.next(), this.next()), this.tsInAllowConditionalTypesContext(function() {
          return c.tsFillSignature(o.arrow, p);
        }), this.finishNode(p, s);
      }, f.tsParseUnionOrIntersectionType = function(s, a, c) {
        var p = this.startNode(), m = this.eat(c), v = [];
        do
          v.push(a());
        while (this.eat(c));
        return v.length !== 1 || m ? (p.types = v, this.finishNode(p, s)) : v[0];
      }, f.tsCheckTypeAnnotationForReadOnly = function(s) {
        switch (s.typeAnnotation.type) {
          case "TSTupleType":
          case "TSArrayType":
            return;
          default:
            this.raise(s.start, N.UnexpectedReadonly);
        }
      }, f.tsParseTypeOperator = function() {
        var s = this.startNode(), a = this.value;
        return this.next(), s.operator = a, s.typeAnnotation = this.tsParseTypeOperatorOrHigher(), a === "readonly" && this.tsCheckTypeAnnotationForReadOnly(s), this.finishNode(s, "TSTypeOperator");
      }, f.tsParseConstraintForInferType = function() {
        var s = this;
        if (this.eat(o._extends)) {
          var a = this.tsInDisallowConditionalTypesContext(function() {
            return s.tsParseType();
          });
          if (this.inDisallowConditionalTypesContext || !this.match(o.question)) return a;
        }
      }, f.tsParseInferType = function() {
        var s = this, a = this.startNode();
        this.expectContextual("infer");
        var c = this.startNode();
        return c.name = this.tsParseTypeParameterName(), c.constraint = this.tsTryParse(function() {
          return s.tsParseConstraintForInferType();
        }), a.typeParameter = this.finishNode(c, "TSTypeParameter"), this.finishNode(a, "TSInferType");
      }, f.tsParseLiteralTypeNode = function() {
        var s = this, a = this.startNode();
        return a.literal = (function() {
          switch (s.type) {
            case o.num:
            case o.string:
            case o._true:
            case o._false:
              return s.parseExprAtom();
            default:
              s.unexpected();
          }
        })(), this.finishNode(a, "TSLiteralType");
      }, f.tsParseImportType = function() {
        var s = this.startNode();
        return this.expect(o._import), this.expect(o.parenL), this.match(o.string) || this.raise(this.start, N.UnsupportedImportTypeArgument), s.argument = this.parseExprAtom(), this.expect(o.parenR), this.eat(o.dot) && (s.qualifier = this.tsParseEntityName()), this.tsMatchLeftRelational() && (s.typeParameters = this.tsParseTypeArguments()), this.finishNode(s, "TSImportType");
      }, f.tsParseTypeQuery = function() {
        var s = this.startNode();
        return this.expect(o._typeof), s.exprName = this.match(o._import) ? this.tsParseImportType() : this.tsParseEntityName(), !this.hasPrecedingLineBreak() && this.tsMatchLeftRelational() && (s.typeParameters = this.tsParseTypeArguments()), this.finishNode(s, "TSTypeQuery");
      }, f.tsParseMappedTypeParameter = function() {
        var s = this.startNode();
        return s.name = this.tsParseTypeParameterName(), s.constraint = this.tsExpectThenParseType(o._in), this.finishNode(s, "TSTypeParameter");
      }, f.tsParseMappedType = function() {
        var s = this.startNode();
        return this.expect(o.braceL), this.match(o.plusMin) ? (s.readonly = this.value, this.next(), this.expectContextual("readonly")) : this.eatContextual("readonly") && (s.readonly = !0), this.expect(o.bracketL), s.typeParameter = this.tsParseMappedTypeParameter(), s.nameType = this.eatContextual("as") ? this.tsParseType() : null, this.expect(o.bracketR), this.match(o.plusMin) ? (s.optional = this.value, this.next(), this.expect(o.question)) : this.eat(o.question) && (s.optional = !0), s.typeAnnotation = this.tsTryParseType(), this.semicolon(), this.expect(o.braceR), this.finishNode(s, "TSMappedType");
      }, f.tsParseTypeLiteral = function() {
        var s = this.startNode();
        return s.members = this.tsParseObjectTypeMembers(), this.finishNode(s, "TSTypeLiteral");
      }, f.tsParseTupleElementType = function() {
        var s = this.startLoc, a = this.start, c = this.eat(o.ellipsis), p = this.tsParseType(), m = this.eat(o.question);
        if (this.eat(o.colon)) {
          var v = this.startNodeAtNode(p);
          v.optional = m, p.type !== "TSTypeReference" || p.typeParameters || p.typeName.type !== "Identifier" ? (this.raise(p.start, N.InvalidTupleMemberLabel), v.label = p) : v.label = p.typeName, v.elementType = this.tsParseType(), p = this.finishNode(v, "TSNamedTupleMember");
        } else if (m) {
          var x = this.startNodeAtNode(p);
          x.typeAnnotation = p, p = this.finishNode(x, "TSOptionalType");
        }
        if (c) {
          var g = this.startNodeAt(a, s);
          g.typeAnnotation = p, p = this.finishNode(g, "TSRestType");
        }
        return p;
      }, f.tsParseTupleType = function() {
        var s = this, a = this.startNode();
        a.elementTypes = this.tsParseBracketedList("TupleElementTypes", this.tsParseTupleElementType.bind(this), !0, !1);
        var c = !1, p = null;
        return a.elementTypes.forEach(function(m) {
          var v = m.type;
          !c || v === "TSRestType" || v === "TSOptionalType" || v === "TSNamedTupleMember" && m.optional || s.raise(m.start, N.OptionalTypeBeforeRequired), c || (c = v === "TSNamedTupleMember" && m.optional || v === "TSOptionalType");
          var x = v;
          v === "TSRestType" && (x = (m = m.typeAnnotation).type);
          var g = x === "TSNamedTupleMember";
          p != null || (p = g), p !== g && s.raise(m.start, N.MixedLabeledAndUnlabeledElements);
        }), this.finishNode(a, "TSTupleType");
      }, f.tsParseTemplateLiteralType = function() {
        var s = this.startNode();
        return s.literal = this.parseTemplate({ isTagged: !1 }), this.finishNode(s, "TSLiteralType");
      }, f.tsParseTypeReference = function() {
        var s = this.startNode();
        return s.typeName = this.tsParseEntityName(), !this.hasPrecedingLineBreak() && this.tsMatchLeftRelational() && (s.typeParameters = this.tsParseTypeArguments()), this.finishNode(s, "TSTypeReference");
      }, f.tsMatchLeftRelational = function() {
        return this.match(o.relational) && this.value === "<";
      }, f.tsMatchRightRelational = function() {
        return this.match(o.relational) && this.value === ">";
      }, f.tsParseParenthesizedType = function() {
        var s = this.startNode();
        return this.expect(o.parenL), s.typeAnnotation = this.tsParseType(), this.expect(o.parenR), this.finishNode(s, "TSParenthesizedType");
      }, f.tsParseNonArrayType = function() {
        switch (this.type) {
          case o.string:
          case o.num:
          case o._true:
          case o._false:
            return this.tsParseLiteralTypeNode();
          case o.plusMin:
            if (this.value === "-") {
              var s = this.startNode();
              return this.lookahead().type !== o.num && this.unexpected(), s.literal = this.parseMaybeUnary(), this.finishNode(s, "TSLiteralType");
            }
            break;
          case o._this:
            return this.tsParseThisTypeOrThisTypePredicate();
          case o._typeof:
            return this.tsParseTypeQuery();
          case o._import:
            return this.tsParseImportType();
          case o.braceL:
            return this.tsLookAhead(this.tsIsStartOfMappedType.bind(this)) ? this.tsParseMappedType() : this.tsParseTypeLiteral();
          case o.bracketL:
            return this.tsParseTupleType();
          case o.parenL:
            return this.tsParseParenthesizedType();
          case o.backQuote:
          case o.dollarBraceL:
            return this.tsParseTemplateLiteralType();
          default:
            var a = this.type;
            if (q(a) || a === o._void || a === o._null) {
              var c = a === o._void ? "TSVoidKeyword" : a === o._null ? "TSNullKeyword" : (function(m) {
                switch (m) {
                  case "any":
                    return "TSAnyKeyword";
                  case "boolean":
                    return "TSBooleanKeyword";
                  case "bigint":
                    return "TSBigIntKeyword";
                  case "never":
                    return "TSNeverKeyword";
                  case "number":
                    return "TSNumberKeyword";
                  case "object":
                    return "TSObjectKeyword";
                  case "string":
                    return "TSStringKeyword";
                  case "symbol":
                    return "TSSymbolKeyword";
                  case "undefined":
                    return "TSUndefinedKeyword";
                  case "unknown":
                    return "TSUnknownKeyword";
                  default:
                    return;
                }
              })(this.value);
              if (c !== void 0 && this.lookaheadCharCode() !== 46) {
                var p = this.startNode();
                return this.next(), this.finishNode(p, c);
              }
              return this.tsParseTypeReference();
            }
        }
        this.unexpected();
      }, f.tsParseArrayTypeOrHigher = function() {
        for (var s = this.tsParseNonArrayType(); !this.hasPrecedingLineBreak() && this.eat(o.bracketL); ) if (this.match(o.bracketR)) {
          var a = this.startNodeAtNode(s);
          a.elementType = s, this.expect(o.bracketR), s = this.finishNode(a, "TSArrayType");
        } else {
          var c = this.startNodeAtNode(s);
          c.objectType = s, c.indexType = this.tsParseType(), this.expect(o.bracketR), s = this.finishNode(c, "TSIndexedAccessType");
        }
        return s;
      }, f.tsParseTypeOperatorOrHigher = function() {
        var s = this;
        return Ls(this.type) && !this.containsEsc ? this.tsParseTypeOperator() : this.isContextual("infer") ? this.tsParseInferType() : this.tsInAllowConditionalTypesContext(function() {
          return s.tsParseArrayTypeOrHigher();
        });
      }, f.tsParseIntersectionTypeOrHigher = function() {
        return this.tsParseUnionOrIntersectionType("TSIntersectionType", this.tsParseTypeOperatorOrHigher.bind(this), o.bitwiseAND);
      }, f.tsParseUnionTypeOrHigher = function() {
        return this.tsParseUnionOrIntersectionType("TSUnionType", this.tsParseIntersectionTypeOrHigher.bind(this), o.bitwiseOR);
      }, f.tsParseNonConditionalType = function() {
        return this.tsIsStartOfFunctionType() ? this.tsParseFunctionOrConstructorType("TSFunctionType") : this.match(o._new) ? this.tsParseFunctionOrConstructorType("TSConstructorType") : this.isAbstractConstructorSignature() ? this.tsParseFunctionOrConstructorType("TSConstructorType", !0) : this.tsParseUnionTypeOrHigher();
      }, f.tsParseType = function() {
        var s = this;
        vr(this.inType);
        var a = this.tsParseNonConditionalType();
        if (this.inDisallowConditionalTypesContext || this.hasPrecedingLineBreak() || !this.eat(o._extends)) return a;
        var c = this.startNodeAtNode(a);
        return c.checkType = a, c.extendsType = this.tsInDisallowConditionalTypesContext(function() {
          return s.tsParseNonConditionalType();
        }), this.expect(o.question), c.trueType = this.tsInAllowConditionalTypesContext(function() {
          return s.tsParseType();
        }), this.expect(o.colon), c.falseType = this.tsInAllowConditionalTypesContext(function() {
          return s.tsParseType();
        }), this.finishNode(c, "TSConditionalType");
      }, f.tsIsUnambiguouslyIndexSignature = function() {
        return this.next(), !!q(this.type) && (this.next(), this.match(o.colon));
      }, f.tsInType = function(s) {
        var a = this.inType;
        this.inType = !0;
        try {
          return s();
        } finally {
          this.inType = a;
        }
      }, f.tsTryParseIndexSignature = function(s) {
        if (this.match(o.bracketL) && this.tsLookAhead(this.tsIsUnambiguouslyIndexSignature.bind(this))) {
          this.expect(o.bracketL);
          var a = this.parseIdent();
          a.typeAnnotation = this.tsParseTypeAnnotation(), this.resetEndLocation(a), this.expect(o.bracketR), s.parameters = [a];
          var c = this.tsTryParseTypeAnnotation();
          return c && (s.typeAnnotation = c), this.tsParseTypeMemberSemicolon(), this.finishNode(s, "TSIndexSignature");
        }
      }, f.tsParseNoneModifiers = function(s) {
        this.tsParseModifiers({ modified: s, allowedModifiers: [], disallowedModifiers: ["in", "out"], errorTemplate: N.InvalidModifierOnTypeParameterPositions });
      }, f.tsParseTypeParameter = function(s) {
        s === void 0 && (s = this.tsParseNoneModifiers.bind(this));
        var a = this.startNode();
        return s(a), a.name = this.tsParseTypeParameterName(), a.constraint = this.tsEatThenParseType(o._extends), a.default = this.tsEatThenParseType(o.eq), this.finishNode(a, "TSTypeParameter");
      }, f.tsParseTypeParameters = function(s) {
        var a = this.startNode();
        this.tsMatchLeftRelational() || this.matchJsx("jsxTagStart") ? this.next() : this.unexpected();
        var c = { value: -1 };
        return a.params = this.tsParseBracketedList("TypeParametersOrArguments", this.tsParseTypeParameter.bind(this, s), !1, !0, c), a.params.length === 0 && this.raise(this.start, N.EmptyTypeParameters), c.value !== -1 && this.addExtra(a, "trailingComma", c.value), this.finishNode(a, "TSTypeParameterDeclaration");
      }, f.tsTryParseTypeParameters = function(s) {
        if (this.tsMatchLeftRelational()) return this.tsParseTypeParameters(s);
      }, f.tsTryParse = function(s) {
        var a = this.getCurLookaheadState(), c = s();
        return c !== void 0 && c !== !1 ? c : void this.setLookaheadState(a);
      }, f.tsTokenCanFollowModifier = function() {
        return (this.match(o.bracketL) || this.match(o.braceL) || this.match(o.star) || this.match(o.ellipsis) || this.match(o.privateId) || this.isLiteralPropertyName()) && !this.hasPrecedingLineBreak();
      }, f.tsNextTokenCanFollowModifier = function() {
        return this.next(!0), this.tsTokenCanFollowModifier();
      }, f.tsParseModifier = function(s, a) {
        if (q(this.type) || this.type === o._in) {
          var c = this.value;
          if (s.indexOf(c) !== -1 && !this.containsEsc) {
            if (a && this.tsIsStartOfStaticBlocks()) return;
            if (this.tsTryParse(this.tsNextTokenCanFollowModifier.bind(this))) return c;
          }
        }
      }, f.tsParseModifiersByMap = function(s) {
        for (var a = s.modified, c = s.map, p = 0, m = Object.keys(c); p < m.length; p++) {
          var v = m[p];
          a[v] = c[v];
        }
      }, f.tsParseModifiers = function(s) {
        for (var a = this, c = s.modified, p = s.allowedModifiers, m = s.disallowedModifiers, v = s.stopOnStartOfClassStaticBlock, x = s.errorTemplate, g = x === void 0 ? N.InvalidModifierOnTypeMember : x, _ = {}, T = function(G, W, J, ie) {
          W === J && c[ie] && a.raise(G.column, N.InvalidModifiersOrder({ orderedModifiers: [J, ie] }));
        }, L = function(G, W, J, ie) {
          (c[J] && W === ie || c[ie] && W === J) && a.raise(G.column, N.IncompatibleModifiers({ modifiers: [J, ie] }));
        }; ; ) {
          var V = this.startLoc, E = this.tsParseModifier(p.concat(m ?? []), v);
          if (!E) break;
          xr(E) ? c.accessibility ? this.raise(this.start, N.DuplicateAccessibilityModifier()) : (T(V, E, E, "override"), T(V, E, E, "static"), T(V, E, E, "readonly"), T(V, E, E, "accessor"), _.accessibility = E, c.accessibility = E) : Vh(E) ? c[E] ? this.raise(this.start, N.DuplicateModifier({ modifier: E })) : (T(V, E, "in", "out"), _[E] = E, c[E] = !0) : Mh(E) ? c[E] ? this.raise(this.start, N.DuplicateModifier({ modifier: E })) : (L(V, E, "accessor", "readonly"), L(V, E, "accessor", "static"), L(V, E, "accessor", "override"), _[E] = E, c[E] = !0) : Object.hasOwnProperty.call(c, E) ? this.raise(this.start, N.DuplicateModifier({ modifier: E })) : (T(V, E, "static", "readonly"), T(V, E, "static", "override"), T(V, E, "override", "readonly"), T(V, E, "abstract", "override"), L(V, E, "declare", "override"), L(V, E, "static", "abstract"), _[E] = E, c[E] = !0), m != null && m.includes(E) && this.raise(this.start, g);
        }
        return _;
      }, f.tsParseInOutModifiers = function(s) {
        this.tsParseModifiers({ modified: s, allowedModifiers: ["in", "out"], disallowedModifiers: ["public", "private", "protected", "readonly", "declare", "abstract", "override"], errorTemplate: N.InvalidModifierOnTypeParameter });
      }, f.tsParseTypeArguments = function() {
        var s = this, a = this.startNode();
        return a.params = this.tsInType(function() {
          return s.tsInNoContext(function() {
            return s.expect(o.relational), s.tsParseDelimitedList("TypeParametersOrArguments", s.tsParseType.bind(s));
          });
        }), a.params.length === 0 && this.raise(this.start, N.EmptyTypeArguments), this.exprAllowed = !1, this.expect(o.relational), this.finishNode(a, "TSTypeParameterInstantiation");
      }, f.tsParseHeritageClause = function(s) {
        var a = this, c = this.start, p = this.tsParseDelimitedList("HeritageClauseElement", function() {
          var m = a.startNode();
          return m.expression = a.tsParseEntityName(), a.tsMatchLeftRelational() && (m.typeParameters = a.tsParseTypeArguments()), a.finishNode(m, "TSExpressionWithTypeArguments");
        });
        return p.length || this.raise(c, N.EmptyHeritageClauseType({ token: s })), p;
      }, f.tsParseTypeMemberSemicolon = function() {
        this.eat(o.comma) || this.isLineTerminator() || this.expect(o.semi);
      }, f.tsTryParseAndCatch = function(s) {
        var a = this.tryParse(function(c) {
          return s() || c();
        });
        if (!a.aborted && a.node) return a.error && this.setLookaheadState(a.failState), a.node;
      }, f.tsParseSignatureMember = function(s, a) {
        return this.tsFillSignature(o.colon, a), this.tsParseTypeMemberSemicolon(), this.finishNode(a, s);
      }, f.tsParsePropertyOrMethodSignature = function(s, a) {
        this.eat(o.question) && (s.optional = !0);
        var c = s;
        if (this.match(o.parenL) || this.tsMatchLeftRelational()) {
          a && this.raise(s.start, N.ReadonlyForMethodSignature);
          var p = c;
          p.kind && this.tsMatchLeftRelational() && this.raise(this.start, N.AccesorCannotHaveTypeParameters), this.tsFillSignature(o.colon, p), this.tsParseTypeMemberSemicolon();
          var m = "parameters", v = "typeAnnotation";
          if (p.kind === "get") p[m].length > 0 && (this.raise(this.start, "A 'get' accesor must not have any formal parameters."), this.isThisParam(p[m][0]) && this.raise(this.start, N.AccesorCannotDeclareThisParameter));
          else if (p.kind === "set") {
            if (p[m].length !== 1) this.raise(this.start, "A 'get' accesor must not have any formal parameters.");
            else {
              var x = p[m][0];
              this.isThisParam(x) && this.raise(this.start, N.AccesorCannotDeclareThisParameter), x.type === "Identifier" && x.optional && this.raise(this.start, N.SetAccesorCannotHaveOptionalParameter), x.type === "RestElement" && this.raise(this.start, N.SetAccesorCannotHaveRestParameter);
            }
            p[v] && this.raise(p[v].start, N.SetAccesorCannotHaveReturnType);
          } else p.kind = "method";
          return this.finishNode(p, "TSMethodSignature");
        }
        var g = c;
        a && (g.readonly = !0);
        var _ = this.tsTryParseTypeAnnotation();
        return _ && (g.typeAnnotation = _), this.tsParseTypeMemberSemicolon(), this.finishNode(g, "TSPropertySignature");
      }, f.tsParseTypeMember = function() {
        var s = this.startNode();
        if (this.match(o.parenL) || this.tsMatchLeftRelational()) return this.tsParseSignatureMember("TSCallSignatureDeclaration", s);
        if (this.match(o._new)) {
          var a = this.startNode();
          return this.next(), this.match(o.parenL) || this.tsMatchLeftRelational() ? this.tsParseSignatureMember("TSConstructSignatureDeclaration", s) : (s.key = this.createIdentifier(a, "new"), this.tsParsePropertyOrMethodSignature(s, !1));
        }
        return this.tsParseModifiers({ modified: s, allowedModifiers: ["readonly"], disallowedModifiers: ["declare", "abstract", "private", "protected", "public", "static", "override"] }), this.tsTryParseIndexSignature(s) || (this.parsePropertyName(s), s.computed || s.key.type !== "Identifier" || s.key.name !== "get" && s.key.name !== "set" || !this.tsTokenCanFollowModifier() || (s.kind = s.key.name, this.parsePropertyName(s)), this.tsParsePropertyOrMethodSignature(s, !!s.readonly));
      }, f.tsParseList = function(s, a) {
        for (var c = []; !this.tsIsListTerminator(s); ) c.push(a());
        return c;
      }, f.tsParseObjectTypeMembers = function() {
        this.expect(o.braceL);
        var s = this.tsParseList("TypeMembers", this.tsParseTypeMember.bind(this));
        return this.expect(o.braceR), s;
      }, f.tsParseInterfaceDeclaration = function(s, a) {
        if (a === void 0 && (a = {}), this.hasFollowingLineBreak()) return null;
        this.expectContextual("interface"), a.declare && (s.declare = !0), q(this.type) ? (s.id = this.parseIdent(), this.checkLValSimple(s.id, 7)) : (s.id = null, this.raise(this.start, N.MissingInterfaceName)), s.typeParameters = this.tsTryParseTypeParameters(this.tsParseInOutModifiers.bind(this)), this.eat(o._extends) && (s.extends = this.tsParseHeritageClause("extends"));
        var c = this.startNode();
        return c.body = this.tsInType(this.tsParseObjectTypeMembers.bind(this)), s.body = this.finishNode(c, "TSInterfaceBody"), this.finishNode(s, "TSInterfaceDeclaration");
      }, f.tsParseAbstractDeclaration = function(s) {
        if (this.match(o._class)) return s.abstract = !0, this.parseClass(s, !0);
        if (this.ts_isContextual(D.interface)) {
          if (!this.hasFollowingLineBreak()) return s.abstract = !0, this.tsParseInterfaceDeclaration(s);
        } else this.unexpected(s.start);
      }, f.tsIsDeclarationStart = function() {
        return Ge(this.type);
      }, f.tsParseExpressionStatement = function(s, a) {
        switch (a.name) {
          case "declare":
            var c = this.tsTryParseDeclare(s);
            if (c) return c.declare = !0, c;
            break;
          case "global":
            if (this.match(o.braceL)) {
              P.prototype.enterScope.call(this, yt);
              var p = s;
              return p.global = !0, p.id = a, p.body = this.tsParseModuleBlock(), P.prototype.exitScope.call(this), this.finishNode(p, "TSModuleDeclaration");
            }
            break;
          default:
            return this.tsParseDeclaration(s, a.name, !1);
        }
      }, f.tsParseModuleReference = function() {
        return this.tsIsExternalModuleReference() ? this.tsParseExternalModuleReference() : this.tsParseEntityName(!1);
      }, f.tsIsExportDefaultSpecifier = function() {
        var s = this.type, a = this.isAsyncFunction(), c = this.isLet();
        if (q(s)) {
          if (a && !this.containsEsc || c) return !1;
          if ((s === D.type || s === D.interface) && !this.containsEsc) {
            var p = this.lookahead();
            if (q(p.type) && !this.isContextualWithState("from", p) || p.type === o.braceL) return !1;
          }
        } else if (!this.match(o._default)) return !1;
        var m = this.nextTokenStart(), v = this.isUnparsedContextual(m, "from");
        if (this.input.charCodeAt(m) === 44 || q(this.type) && v) return !0;
        if (this.match(o._default) && v) {
          var x = this.input.charCodeAt(this.nextTokenStartSince(m + 4));
          return x === 34 || x === 39;
        }
        return !1;
      }, f.tsInAmbientContext = function(s) {
        var a = this.isAmbientContext;
        this.isAmbientContext = !0;
        try {
          return s();
        } finally {
          this.isAmbientContext = a;
        }
      }, f.tsCheckLineTerminator = function(s) {
        return s ? !this.hasFollowingLineBreak() && (this.next(), !0) : !this.isLineTerminator();
      }, f.tsParseModuleOrNamespaceDeclaration = function(s, a) {
        if (a === void 0 && (a = !1), s.id = this.parseIdent(), a || this.checkLValSimple(s.id, 8), this.eat(o.dot)) {
          var c = this.startNode();
          this.tsParseModuleOrNamespaceDeclaration(c, !0), s.body = c;
        } else P.prototype.enterScope.call(this, yt), s.body = this.tsParseModuleBlock(), P.prototype.exitScope.call(this);
        return this.finishNode(s, "TSModuleDeclaration");
      }, f.checkLValSimple = function(s, a, c) {
        return a === void 0 && (a = 0), P.prototype.checkLValSimple.call(this, s, a, c);
      }, f.tsParseTypeAliasDeclaration = function(s) {
        var a = this;
        return s.id = this.parseIdent(), this.checkLValSimple(s.id, 6), s.typeAnnotation = this.tsInType(function() {
          if (s.typeParameters = a.tsTryParseTypeParameters(a.tsParseInOutModifiers.bind(a)), a.expect(o.eq), a.ts_isContextual(D.interface) && a.lookahead().type !== o.dot) {
            var c = a.startNode();
            return a.next(), a.finishNode(c, "TSIntrinsicKeyword");
          }
          return a.tsParseType();
        }), this.semicolon(), this.finishNode(s, "TSTypeAliasDeclaration");
      }, f.tsParseDeclaration = function(s, a, c) {
        switch (a) {
          case "abstract":
            if (this.tsCheckLineTerminator(c) && (this.match(o._class) || q(this.type))) return this.tsParseAbstractDeclaration(s);
            break;
          case "module":
            if (this.tsCheckLineTerminator(c)) {
              if (this.match(o.string)) return this.tsParseAmbientExternalModuleDeclaration(s);
              if (q(this.type)) return this.tsParseModuleOrNamespaceDeclaration(s);
            }
            break;
          case "namespace":
            if (this.tsCheckLineTerminator(c) && q(this.type)) return this.tsParseModuleOrNamespaceDeclaration(s);
            break;
          case "type":
            if (this.tsCheckLineTerminator(c) && q(this.type)) return this.tsParseTypeAliasDeclaration(s);
        }
      }, f.tsTryParseExportDeclaration = function() {
        return this.tsParseDeclaration(this.startNode(), this.value, !0);
      }, f.tsParseImportEqualsDeclaration = function(s, a) {
        s.isExport = a || !1, s.id = this.parseIdent(), this.checkLValSimple(s.id, 2), P.prototype.expect.call(this, o.eq);
        var c = this.tsParseModuleReference();
        return s.importKind === "type" && c.type !== "TSExternalModuleReference" && this.raise(c.start, N.ImportAliasHasImportType), s.moduleReference = c, P.prototype.semicolon.call(this), this.finishNode(s, "TSImportEqualsDeclaration");
      }, f.isExportDefaultSpecifier = function() {
        if (this.tsIsDeclarationStart()) return !1;
        var s = this.type;
        if (q(s)) {
          if (this.isContextual("async") || this.isContextual("let")) return !1;
          if ((s === D.type || s === D.interface) && !this.containsEsc) {
            var a = this.lookahead();
            if (q(a.type) && !this.isContextualWithState("from", a) || a.type === o.braceL) return !1;
          }
        } else if (!this.match(o._default)) return !1;
        var c = this.nextTokenStart(), p = this.isUnparsedContextual(c, "from");
        if (this.input.charCodeAt(c) === 44 || q(this.type) && p) return !0;
        if (this.match(o._default) && p) {
          var m = this.input.charCodeAt(this.nextTokenStartSince(c + 4));
          return m === 34 || m === 39;
        }
        return !1;
      }, f.parseTemplate = function(s) {
        var a = (s === void 0 ? {} : s).isTagged, c = a !== void 0 && a, p = this.startNode();
        this.next(), p.expressions = [];
        var m = this.parseTemplateElement({ isTagged: c });
        for (p.quasis = [m]; !m.tail; ) this.type === o.eof && this.raise(this.pos, "Unterminated template literal"), this.expect(o.dollarBraceL), p.expressions.push(this.inType ? this.tsParseType() : this.parseExpression()), this.expect(o.braceR), p.quasis.push(m = this.parseTemplateElement({ isTagged: c }));
        return this.next(), this.finishNode(p, "TemplateLiteral");
      }, f.parseFunction = function(s, a, c, p, m) {
        this.initFunction(s), (this.options.ecmaVersion >= 9 || this.options.ecmaVersion >= 6 && !p) && (this.type === o.star && 2 & a && this.unexpected(), s.generator = this.eat(o.star)), this.options.ecmaVersion >= 8 && (s.async = !!p), 1 & a && (s.id = 4 & a && this.type !== o.name ? null : this.parseIdent());
        var v = this.yieldPos, x = this.awaitPos, g = this.awaitIdentPos, _ = this.maybeInArrowParameters;
        this.maybeInArrowParameters = !1, this.yieldPos = 0, this.awaitPos = 0, this.awaitIdentPos = 0, this.enterScope(ui(s.async, s.generator)), 1 & a || (s.id = this.type === o.name ? this.parseIdent() : null), this.parseFunctionParams(s);
        var T = 1 & a;
        return this.parseFunctionBody(s, c, !1, m, { isFunctionDeclaration: T }), this.yieldPos = v, this.awaitPos = x, this.awaitIdentPos = g, 1 & a && s.id && !(2 & a) && this.checkLValSimple(s.id, s.body ? this.strict || s.generator || s.async ? this.treatFunctionsAsVar ? 1 : 2 : 3 : 0), this.maybeInArrowParameters = _, this.finishNode(s, T ? "FunctionDeclaration" : "FunctionExpression");
      }, f.parseFunctionBody = function(s, a, c, p, m) {
        a === void 0 && (a = !1), c === void 0 && (c = !1), p === void 0 && (p = !1), this.match(o.colon) && (s.returnType = this.tsParseTypeOrTypePredicateAnnotation(o.colon));
        var v = m != null && m.isFunctionDeclaration ? "TSDeclareFunction" : m != null && m.isClassMethod ? "TSDeclareMethod" : void 0;
        return v && !this.match(o.braceL) && this.isLineTerminator() ? this.finishNode(s, v) : v === "TSDeclareFunction" && this.isAmbientContext && (this.raise(s.start, N.DeclareFunctionHasImplementation), s.declare) ? (P.prototype.parseFunctionBody.call(this, s, a, c, !1), this.finishNode(s, v)) : (P.prototype.parseFunctionBody.call(this, s, a, c, p), s);
      }, f.parseNew = function() {
        var s;
        this.containsEsc && this.raiseRecoverable(this.start, "Escape sequence in keyword new");
        var a = this.startNode(), c = this.parseIdent(!0);
        if (this.options.ecmaVersion >= 6 && this.eat(o.dot)) {
          a.meta = c;
          var p = this.containsEsc;
          return a.property = this.parseIdent(!0), a.property.name !== "target" && this.raiseRecoverable(a.property.start, "The only valid meta property for new is 'new.target'"), p && this.raiseRecoverable(a.start, "'new.target' must not contain escaped characters"), this.allowNewDotTarget || this.raiseRecoverable(a.start, "'new.target' can only be used in functions and class static block"), this.finishNode(a, "MetaProperty");
        }
        var m = this.start, v = this.startLoc, x = this.type === o._import;
        a.callee = this.parseSubscripts(this.parseExprAtom(), m, v, !0, !1), x && a.callee.type === "ImportExpression" && this.raise(m, "Cannot use new with import()");
        var g = a.callee;
        return g.type !== "TSInstantiationExpression" || (s = g.extra) != null && s.parenthesized || (a.typeParameters = g.typeParameters, a.callee = g.expression), a.arguments = this.eat(o.parenL) ? this.parseExprList(o.parenR, this.options.ecmaVersion >= 8, !1) : [], this.finishNode(a, "NewExpression");
      }, f.parseExprOp = function(s, a, c, p, m) {
        var v;
        if (o._in.binop > p && !this.hasPrecedingLineBreak() && (this.isContextual("as") && (v = "TSAsExpression"), u && this.isContextual("satisfies") && (v = "TSSatisfiesExpression"), v)) {
          var x = this.startNodeAt(a, c);
          x.expression = s;
          var g = this.tsTryNextParseConstantContext();
          return x.typeAnnotation = g || this.tsNextThenParseType(), this.finishNode(x, v), this.reScan_lt_gt(), this.parseExprOp(x, a, c, p, m);
        }
        return P.prototype.parseExprOp.call(this, s, a, c, p, m);
      }, f.parseImportSpecifiers = function() {
        var s = [], a = !0;
        if (y.tokenIsIdentifier(this.type) && (s.push(this.parseImportDefaultSpecifier()), !this.eat(o.comma))) return s;
        if (this.type === o.star) return s.push(this.parseImportNamespaceSpecifier()), s;
        for (this.expect(o.braceL); !this.eat(o.braceR); ) {
          if (a) a = !1;
          else if (this.expect(o.comma), this.afterTrailingComma(o.braceR)) break;
          s.push(this.parseImportSpecifier());
        }
        return s;
      }, f.parseImport = function(s) {
        var a = this.lookahead();
        if (s.importKind = "value", this.importOrExportOuterKind = "value", q(a.type) || this.match(o.star) || this.match(o.braceL)) {
          var c = this.lookahead(2);
          if (c.type !== o.comma && !this.isContextualWithState("from", c) && c.type !== o.eq && this.ts_eatContextualWithState("type", 1, a) && (this.importOrExportOuterKind = "type", s.importKind = "type", a = this.lookahead(), c = this.lookahead(2)), q(a.type) && c.type === o.eq) {
            this.next();
            var p = this.tsParseImportEqualsDeclaration(s);
            return this.importOrExportOuterKind = "value", p;
          }
        }
        return this.next(), this.type === o.string ? (s.specifiers = [], s.source = this.parseExprAtom()) : (s.specifiers = this.parseImportSpecifiers(), this.expectContextual("from"), s.source = this.type === o.string ? this.parseExprAtom() : this.unexpected()), this.parseMaybeImportAttributes(s), this.semicolon(), this.finishNode(s, "ImportDeclaration"), this.importOrExportOuterKind = "value", s.importKind === "type" && s.specifiers.length > 1 && s.specifiers[0].type === "ImportDefaultSpecifier" && this.raise(s.start, N.TypeImportCannotSpecifyDefaultAndNamed), s;
      }, f.parseExportDefaultDeclaration = function() {
        if (this.isAbstractClass()) {
          var s = this.startNode();
          return this.next(), s.abstract = !0, this.parseClass(s, !0);
        }
        if (this.match(D.interface)) {
          var a = this.tsParseInterfaceDeclaration(this.startNode());
          if (a) return a;
        }
        return P.prototype.parseExportDefaultDeclaration.call(this);
      }, f.parseExportAllDeclaration = function(s, a) {
        return this.options.ecmaVersion >= 11 && (this.eatContextual("as") ? (s.exported = this.parseModuleExportName(), this.checkExport(a, s.exported, this.lastTokStart)) : s.exported = null), this.expectContextual("from"), this.type !== o.string && this.unexpected(), s.source = this.parseExprAtom(), this.parseMaybeImportAttributes(s), this.semicolon(), this.finishNode(s, "ExportAllDeclaration");
      }, f.parseDynamicImport = function(s) {
        if (this.next(), s.source = this.parseMaybeAssign(), this.eat(o.comma)) {
          var a = this.parseExpression();
          s.arguments = [a];
        }
        if (!this.eat(o.parenR)) {
          var c = this.start;
          this.eat(o.comma) && this.eat(o.parenR) ? this.raiseRecoverable(c, "Trailing comma is not allowed in import()") : this.unexpected(c);
        }
        return this.finishNode(s, "ImportExpression");
      }, f.parseExport = function(s, a) {
        var c = this.lookahead();
        if (this.ts_eatWithState(o._import, 2, c)) {
          this.ts_isContextual(D.type) && this.lookaheadCharCode() !== 61 ? (s.importKind = "type", this.importOrExportOuterKind = "type", this.next()) : (s.importKind = "value", this.importOrExportOuterKind = "value");
          var p = this.tsParseImportEqualsDeclaration(s, !0);
          return this.importOrExportOuterKind = void 0, p;
        }
        if (this.ts_eatWithState(o.eq, 2, c)) {
          var m = s;
          return m.expression = this.parseExpression(), this.semicolon(), this.importOrExportOuterKind = void 0, this.finishNode(m, "TSExportAssignment");
        }
        if (this.ts_eatContextualWithState("as", 2, c)) {
          var v = s;
          return this.expectContextual("namespace"), v.id = this.parseIdent(), this.semicolon(), this.importOrExportOuterKind = void 0, this.finishNode(v, "TSNamespaceExportDeclaration");
        }
        if (this.ts_isContextualWithState(c, D.type) && this.lookahead(2).type === o.braceL ? (this.next(), this.importOrExportOuterKind = "type", s.exportKind = "type") : (this.importOrExportOuterKind = "value", s.exportKind = "value"), this.next(), this.eat(o.star)) return this.parseExportAllDeclaration(s, a);
        if (this.eat(o._default)) return this.checkExport(a, "default", this.lastTokStart), s.declaration = this.parseExportDefaultDeclaration(), this.finishNode(s, "ExportDefaultDeclaration");
        if (this.shouldParseExportStatement()) s.declaration = this.parseExportDeclaration(s), s.declaration.type === "VariableDeclaration" ? this.checkVariableExport(a, s.declaration.declarations) : this.checkExport(a, s.declaration.id, s.declaration.id.start), s.specifiers = [], s.source = null;
        else {
          if (s.declaration = null, s.specifiers = this.parseExportSpecifiers(a), this.eatContextual("from")) this.type !== o.string && this.unexpected(), s.source = this.parseExprAtom(), this.parseMaybeImportAttributes(s);
          else {
            for (var x, g = dr(s.specifiers); !(x = g()).done; ) {
              var _ = x.value;
              this.checkUnreserved(_.local), this.checkLocalExport(_.local), _.local.type === "Literal" && this.raise(_.local.start, "A string literal cannot be used as an exported binding without `from`.");
            }
            s.source = null;
          }
          this.semicolon();
        }
        return this.finishNode(s, "ExportNamedDeclaration");
      }, f.checkExport = function(s, a, c) {
        s && (typeof a != "string" && (a = a.type === "Identifier" ? a.name : a.value), s[a] = !0);
      }, f.parseMaybeDefault = function(s, a, c) {
        var p = P.prototype.parseMaybeDefault.call(this, s, a, c);
        return p.type === "AssignmentPattern" && p.typeAnnotation && p.right.start < p.typeAnnotation.start && this.raise(p.typeAnnotation.start, N.TypeAnnotationAfterAssign), p;
      }, f.typeCastToParameter = function(s) {
        return s.expression.typeAnnotation = s.typeAnnotation, this.resetEndLocation(s.expression, s.typeAnnotation.end), s.expression;
      }, f.toAssignableList = function(s, a) {
        for (var c = 0; c < s.length; c++) {
          var p = s[c];
          p?.type === "TSTypeCastExpression" && (s[c] = this.typeCastToParameter(p));
        }
        return P.prototype.toAssignableList.call(this, s, a);
      }, f.reportReservedArrowTypeParam = function(s) {
      }, f.parseExprAtom = function(s, a, c) {
        if (this.type === D.jsxText) return this.jsx_parseText();
        if (this.type === D.jsxTagStart) return this.jsx_parseElement();
        if (this.type === D.at) return this.parseDecorators(), this.parseExprAtom();
        if (q(this.type)) {
          var p = this.potentialArrowAt === this.start, m = this.start, v = this.startLoc, x = this.containsEsc, g = this.parseIdent(!1);
          if (this.options.ecmaVersion >= 8 && !x && g.name === "async" && !this.canInsertSemicolon() && this.eat(o._function)) return this.overrideContext(Z.f_expr), this.parseFunction(this.startNodeAt(m, v), 0, !1, !0, a);
          if (p && !this.canInsertSemicolon()) {
            if (this.eat(o.arrow)) return this.parseArrowExpression(this.startNodeAt(m, v), [g], !1, a);
            if (this.options.ecmaVersion >= 8 && g.name === "async" && this.type === o.name && !x && (!this.potentialArrowInForAwait || this.value !== "of" || this.containsEsc)) return g = this.parseIdent(!1), !this.canInsertSemicolon() && this.eat(o.arrow) || this.unexpected(), this.parseArrowExpression(this.startNodeAt(m, v), [g], !0, a);
          }
          return g;
        }
        return P.prototype.parseExprAtom.call(this, s, a, c);
      }, f.parseExprAtomDefault = function() {
        if (q(this.type)) {
          var s = this.potentialArrowAt === this.start, a = this.containsEsc, c = this.parseIdent();
          if (!a && c.name === "async" && !this.canInsertSemicolon()) {
            var p = this.type;
            if (p === o._function) return this.next(), this.parseFunction(this.startNodeAtNode(c), void 0, !0, !0);
            if (q(p)) {
              if (this.lookaheadCharCode() === 61) {
                var m = this.parseIdent(!1);
                return !this.canInsertSemicolon() && this.eat(o.arrow) || this.unexpected(), this.parseArrowExpression(this.startNodeAtNode(c), [m], !0);
              }
              return c;
            }
          }
          return s && this.match(o.arrow) && !this.canInsertSemicolon() ? (this.next(), this.parseArrowExpression(this.startNodeAtNode(c), [c], !1)) : c;
        }
        this.unexpected();
      }, f.parseIdentNode = function() {
        var s = this.startNode();
        return Ct(this.type) ? (s.name = this.value, s) : P.prototype.parseIdentNode.call(this);
      }, f.parseVarStatement = function(s, a, c) {
        c === void 0 && (c = !1);
        var p = this.isAmbientContext;
        this.next(), P.prototype.parseVar.call(this, s, !1, a, c || p), this.semicolon();
        var m = this.finishNode(s, "VariableDeclaration");
        if (!p) return m;
        for (var v, x = dr(m.declarations); !(v = x()).done; ) {
          var g = v.value, _ = g.init;
          _ && (a !== "const" || g.id.typeAnnotation ? this.raise(_.start, N.InitializerNotAllowedInAmbientContext) : _.type !== "StringLiteral" && _.type !== "BooleanLiteral" && _.type !== "NumericLiteral" && _.type !== "BigIntLiteral" && (_.type !== "TemplateLiteral" || _.expressions.length > 0) && !zh(_) && this.raise(_.start, N.ConstInitiailizerMustBeStringOrNumericLiteralOrLiteralEnumReference));
        }
        return m;
      }, f.parseStatement = function(s, a, c) {
        if (this.match(D.at) && this.parseDecorators(!0), this.match(o._const) && this.isLookaheadContextual("enum")) {
          var p = this.startNode();
          return this.expect(o._const), this.tsParseEnumDeclaration(p, { const: !0 });
        }
        if (this.ts_isContextual(D.enum)) return this.tsParseEnumDeclaration(this.startNode());
        if (this.ts_isContextual(D.interface)) {
          var m = this.tsParseInterfaceDeclaration(this.startNode());
          if (m) return m;
        }
        return P.prototype.parseStatement.call(this, s, a, c);
      }, f.parseAccessModifier = function() {
        return this.tsParseModifier(["public", "protected", "private"]);
      }, f.parsePostMemberNameModifiers = function(s) {
        this.eat(o.question) && (s.optional = !0), s.readonly && this.match(o.parenL) && this.raise(s.start, N.ClassMethodHasReadonly), s.declare && this.match(o.parenL) && this.raise(s.start, N.ClassMethodHasDeclare);
      }, f.parseExpressionStatement = function(s, a) {
        return (a.type === "Identifier" ? this.tsParseExpressionStatement(s, a) : void 0) || P.prototype.parseExpressionStatement.call(this, s, a);
      }, f.shouldParseExportStatement = function() {
        return !!this.tsIsDeclarationStart() || !!this.match(D.at) || P.prototype.shouldParseExportStatement.call(this);
      }, f.parseConditional = function(s, a, c, p, m) {
        if (this.eat(o.question)) {
          var v = this.startNodeAt(a, c);
          return v.test = s, v.consequent = this.parseMaybeAssign(), this.expect(o.colon), v.alternate = this.parseMaybeAssign(p), this.finishNode(v, "ConditionalExpression");
        }
        return s;
      }, f.parseMaybeConditional = function(s, a) {
        var c = this, p = this.start, m = this.startLoc, v = this.parseExprOps(s, a);
        if (this.checkExpressionErrors(a)) return v;
        if (!this.maybeInArrowParameters || !this.match(o.question)) return this.parseConditional(v, p, m, s, a);
        var x = this.tryParse(function() {
          return c.parseConditional(v, p, m, s, a);
        });
        return x.node ? (x.error && this.setLookaheadState(x.failState), x.node) : (x.error && this.setOptionalParametersError(a, x.error), v);
      }, f.parseParenItem = function(s) {
        var a = this.start, c = this.startLoc;
        if (s = P.prototype.parseParenItem.call(this, s), this.eat(o.question) && (s.optional = !0, this.resetEndLocation(s)), this.match(o.colon)) {
          var p = this.startNodeAt(a, c);
          return p.expression = s, p.typeAnnotation = this.tsParseTypeAnnotation(), this.finishNode(p, "TSTypeCastExpression");
        }
        return s;
      }, f.parseExportDeclaration = function(s) {
        var a = this;
        if (!this.isAmbientContext && this.ts_isContextual(D.declare)) return this.tsInAmbientContext(function() {
          return a.parseExportDeclaration(s);
        });
        var c = this.start, p = this.startLoc, m = this.eatContextual("declare");
        !m || !this.ts_isContextual(D.declare) && this.shouldParseExportStatement() || this.raise(this.start, N.ExpectedAmbientAfterExportDeclare);
        var v = q(this.type) && this.tsTryParseExportDeclaration() || this.parseStatement(null);
        return v ? ((v.type === "TSInterfaceDeclaration" || v.type === "TSTypeAliasDeclaration" || m) && (s.exportKind = "type"), m && (this.resetStartLocation(v, c, p), v.declare = !0), v) : null;
      }, f.parseClassId = function(s, a) {
        if (a || !this.isContextual("implements")) {
          P.prototype.parseClassId.call(this, s, a);
          var c = this.tsTryParseTypeParameters(this.tsParseInOutModifiers.bind(this));
          c && (s.typeParameters = c);
        }
      }, f.parseClassPropertyAnnotation = function(s) {
        s.optional || (this.value === "!" && this.eat(o.prefix) ? s.definite = !0 : this.eat(o.question) && (s.optional = !0));
        var a = this.tsTryParseTypeAnnotation();
        a && (s.typeAnnotation = a);
      }, f.parseClassField = function(s) {
        if (s.key.type === "PrivateIdentifier") s.abstract && this.raise(s.start, N.PrivateElementHasAbstract), s.accessibility && this.raise(s.start, N.PrivateElementHasAccessibility({ modifier: s.accessibility })), this.parseClassPropertyAnnotation(s);
        else if (this.parseClassPropertyAnnotation(s), this.isAmbientContext && (!s.readonly || s.typeAnnotation) && this.match(o.eq) && this.raise(this.start, N.DeclareClassFieldHasInitializer), s.abstract && this.match(o.eq)) {
          var a = s.key;
          this.raise(this.start, N.AbstractPropertyHasInitializer({ propertyName: a.type !== "Identifier" || s.computed ? "[" + this.input.slice(a.start, a.end) + "]" : a.name }));
        }
        return P.prototype.parseClassField.call(this, s);
      }, f.parseClassMethod = function(s, a, c, p) {
        var m = s.kind === "constructor", v = s.key.type === "PrivateIdentifier", x = this.tsTryParseTypeParameters();
        v ? (x && (s.typeParameters = x), s.accessibility && this.raise(s.start, N.PrivateMethodsHasAccessibility({ modifier: s.accessibility }))) : x && m && this.raise(x.start, N.ConstructorHasTypeParameters);
        var g = s.declare, _ = s.kind;
        !(g !== void 0 && g) || _ !== "get" && _ !== "set" || this.raise(s.start, N.DeclareAccessor({ kind: _ })), x && (s.typeParameters = x);
        var T = s.key;
        s.kind === "constructor" ? (a && this.raise(T.start, "Constructor can't be a generator"), c && this.raise(T.start, "Constructor can't be an async method")) : s.static && yr(s, "prototype") && this.raise(T.start, "Classes may not have a static property named prototype");
        var L = s.value = this.parseMethod(a, c, p, !0, s);
        return s.kind === "get" && L.params.length !== 0 && this.raiseRecoverable(L.start, "getter should have no params"), s.kind === "set" && L.params.length !== 1 && this.raiseRecoverable(L.start, "setter should have exactly one param"), s.kind === "set" && L.params[0].type === "RestElement" && this.raiseRecoverable(L.params[0].start, "Setter cannot use rest params"), this.finishNode(s, "MethodDefinition");
      }, f.isClassMethod = function() {
        return this.match(o.relational);
      }, f.parseClassElement = function(s) {
        var a = this;
        if (this.eat(o.semi)) return null;
        var c, p = this.options.ecmaVersion, m = this.startNode(), v = "", x = !1, g = !1, _ = "method", T = ["declare", "private", "public", "protected", "accessor", "override", "abstract", "readonly", "static"], L = this.tsParseModifiers({ modified: m, allowedModifiers: T, disallowedModifiers: ["in", "out"], stopOnStartOfClassStaticBlock: !0, errorTemplate: N.InvalidModifierOnTypeParameterPositions });
        c = !!L.static;
        var V = function() {
          if (!a.tsIsStartOfStaticBlocks()) {
            var E = a.tsTryParseIndexSignature(m);
            if (E) return m.abstract && a.raise(m.start, N.IndexSignatureHasAbstract), m.accessibility && a.raise(m.start, N.IndexSignatureHasAccessibility({ modifier: m.accessibility })), m.declare && a.raise(m.start, N.IndexSignatureHasDeclare), m.override && a.raise(m.start, N.IndexSignatureHasOverride), E;
            if (!a.inAbstractClass && m.abstract && a.raise(m.start, N.NonAbstractClassHasAbstractMethod), m.override && s && a.raise(m.start, N.OverrideNotInSubClass), m.static = c, c && (a.isClassElementNameStart() || a.type === o.star || (v = "static")), !v && p >= 8 && a.eatContextual("async") && (!a.isClassElementNameStart() && a.type !== o.star || a.canInsertSemicolon() ? v = "async" : g = !0), !v && (p >= 9 || !g) && a.eat(o.star) && (x = !0), !v && !g && !x) {
              var G = a.value;
              (a.eatContextual("get") || a.eatContextual("set")) && (a.isClassElementNameStart() ? _ = G : v = G);
            }
            if (v ? (m.computed = !1, m.key = a.startNodeAt(a.lastTokStart, a.lastTokStartLoc), m.key.name = v, a.finishNode(m.key, "Identifier")) : a.parseClassElementName(m), a.parsePostMemberNameModifiers(m), a.isClassMethod() || p < 13 || a.type === o.parenL || _ !== "method" || x || g) {
              var W = !m.static && yr(m, "constructor"), J = W && s;
              W && _ !== "method" && a.raise(m.key.start, "Constructor can't have get/set modifier"), m.kind = W ? "constructor" : _, a.parseClassMethod(m, x, g, J);
            } else a.parseClassField(m);
            return m;
          }
          if (a.next(), a.next(), a.tsHasSomeModifiers(m, T) && a.raise(a.start, N.StaticBlockCannotHaveModifier), p >= 13) return P.prototype.parseClassStaticBlock.call(a, m), m;
        };
        return m.declare ? this.tsInAmbientContext(V) : V(), m;
      }, f.isClassElementNameStart = function() {
        return !!this.tsIsIdentifier() || P.prototype.isClassElementNameStart.call(this);
      }, f.parseClassSuper = function(s) {
        P.prototype.parseClassSuper.call(this, s), s.superClass && (this.tsMatchLeftRelational() || this.match(o.bitShift)) && (s.superTypeParameters = this.tsParseTypeArgumentsInExpression()), this.eatContextual("implements") && (s.implements = this.tsParseHeritageClause("implements"));
      }, f.parseFunctionParams = function(s) {
        var a = this.tsTryParseTypeParameters();
        a && (s.typeParameters = a), P.prototype.parseFunctionParams.call(this, s);
      }, f.parseVarId = function(s, a) {
        P.prototype.parseVarId.call(this, s, a), s.id.type === "Identifier" && !this.hasPrecedingLineBreak() && this.value === "!" && this.eat(o.prefix) && (s.definite = !0);
        var c = this.tsTryParseTypeAnnotation();
        c && (s.id.typeAnnotation = c, this.resetEndLocation(s.id));
      }, f.parseArrowExpression = function(s, a, c, p) {
        this.match(o.colon) && (s.returnType = this.tsParseTypeAnnotation());
        var m = this.yieldPos, v = this.awaitPos, x = this.awaitIdentPos;
        this.enterScope(16 | ui(c, !1)), this.initFunction(s);
        var g = this.maybeInArrowParameters;
        return this.options.ecmaVersion >= 8 && (s.async = !!c), this.yieldPos = 0, this.awaitPos = 0, this.awaitIdentPos = 0, this.maybeInArrowParameters = !0, s.params = this.toAssignableList(a, !0), this.maybeInArrowParameters = !1, this.parseFunctionBody(s, !0, !1, p), this.yieldPos = m, this.awaitPos = v, this.awaitIdentPos = x, this.maybeInArrowParameters = g, this.finishNode(s, "ArrowFunctionExpression");
      }, f.parseMaybeAssignOrigin = function(s, a, c) {
        if (this.isContextual("yield")) {
          if (this.inGenerator) return this.parseYield(s);
          this.exprAllowed = !1;
        }
        var p = !1, m = -1, v = -1, x = -1;
        a ? (m = a.parenthesizedAssign, v = a.trailingComma, x = a.doubleProto, a.parenthesizedAssign = a.trailingComma = -1) : (a = new vt(), p = !0);
        var g = this.start, _ = this.startLoc;
        (this.type === o.parenL || q(this.type)) && (this.potentialArrowAt = this.start, this.potentialArrowInForAwait = s === "await");
        var T = this.parseMaybeConditional(s, a);
        if (c && (T = c.call(this, T, g, _)), this.type.isAssign) {
          var L = this.startNodeAt(g, _);
          return L.operator = this.value, this.type === o.eq && (T = this.toAssignable(T, !0, a)), p || (a.parenthesizedAssign = a.trailingComma = a.doubleProto = -1), a.shorthandAssign >= T.start && (a.shorthandAssign = -1), this.type === o.eq ? this.checkLValPattern(T) : this.checkLValSimple(T), L.left = T, this.next(), L.right = this.parseMaybeAssign(s), x > -1 && (a.doubleProto = x), this.finishNode(L, "AssignmentExpression");
        }
        return p && this.checkExpressionErrors(a, !0), m > -1 && (a.parenthesizedAssign = m), v > -1 && (a.trailingComma = v), T;
      }, f.parseMaybeAssign = function(s, a, c) {
        var p, m, v, x, g, _, T, L, V, E, G, W = this;
        if (this.matchJsx("jsxTagStart") || this.tsMatchLeftRelational()) {
          if (L = this.cloneCurLookaheadState(), !(V = this.tryParse(function() {
            return W.parseMaybeAssignOrigin(s, a, c);
          }, L)).error) return V.node;
          var J = this.context, ie = J[J.length - 1];
          ie === y.tokContexts.tc_oTag && J[J.length - 2] === y.tokContexts.tc_expr ? (J.pop(), J.pop()) : ie !== y.tokContexts.tc_oTag && ie !== y.tokContexts.tc_expr || J.pop();
        }
        if (!((p = V) != null && p.error || this.tsMatchLeftRelational())) return this.parseMaybeAssignOrigin(s, a, c);
        L && !this.compareLookaheadState(L, this.getCurLookaheadState()) || (L = this.cloneCurLookaheadState());
        var ye = this.tryParse(function(Fe) {
          var dt, mt;
          G = W.tsParseTypeParameters();
          var Be = W.parseMaybeAssignOrigin(s, a, c);
          return (Be.type !== "ArrowFunctionExpression" || (dt = Be.extra) != null && dt.parenthesized) && Fe(), ((mt = G) == null ? void 0 : mt.params.length) !== 0 && W.resetStartLocationFromNode(Be, G), Be.typeParameters = G, Be;
        }, L);
        if (!ye.error && !ye.aborted) return G && this.reportReservedArrowTypeParam(G), ye.node;
        if (!V && (vr(!0), !(E = this.tryParse(function() {
          return W.parseMaybeAssignOrigin(s, a, c);
        }, L)).error)) return E.node;
        if ((m = V) != null && m.node) return this.setLookaheadState(V.failState), V.node;
        if (ye.node) return this.setLookaheadState(ye.failState), G && this.reportReservedArrowTypeParam(G), ye.node;
        if ((v = E) != null && v.node) return this.setLookaheadState(E.failState), E.node;
        throw (x = V) != null && x.thrown ? V.error : ye.thrown ? ye.error : (g = E) != null && g.thrown ? E.error : ((_ = V) == null ? void 0 : _.error) || ye.error || ((T = E) == null ? void 0 : T.error);
      }, f.parseAssignableListItem = function(s) {
        for (var a = []; this.match(D.at); ) a.push(this.parseDecorator());
        var c, p = this.start, m = this.startLoc, v = !1, x = !1;
        if (s !== void 0) {
          var g = {};
          this.tsParseModifiers({ modified: g, allowedModifiers: ["public", "private", "protected", "override", "readonly"] }), c = g.accessibility, x = g.override, v = g.readonly, s === !1 && (c || v || x) && this.raise(m.start, N.UnexpectedParameterModifier);
        }
        var _ = this.parseMaybeDefault(p, m);
        this.parseBindingListItem(_);
        var T = this.parseMaybeDefault(_.start, _.loc, _);
        if (a.length && (T.decorators = a), c || v || x) {
          var L = this.startNodeAt(p, m);
          return c && (L.accessibility = c), v && (L.readonly = v), x && (L.override = x), T.type !== "Identifier" && T.type !== "AssignmentPattern" && this.raise(L.start, N.UnsupportedParameterPropertyKind), L.parameter = T, this.finishNode(L, "TSParameterProperty");
        }
        return T;
      }, f.checkLValInnerPattern = function(s, a, c) {
        a === void 0 && (a = 0), s.type === "TSParameterProperty" ? this.checkLValInnerPattern(s.parameter, a, c) : P.prototype.checkLValInnerPattern.call(this, s, a, c);
      }, f.parseBindingListItem = function(s) {
        this.eat(o.question) && (s.type === "Identifier" || this.isAmbientContext || this.inType || this.raise(s.start, N.PatternIsOptional), s.optional = !0);
        var a = this.tsTryParseTypeAnnotation();
        return a && (s.typeAnnotation = a), this.resetEndLocation(s), s;
      }, f.isAssignable = function(s, a) {
        var c = this;
        switch (s.type) {
          case "TSTypeCastExpression":
            return this.isAssignable(s.expression, a);
          case "TSParameterProperty":
          case "Identifier":
          case "ObjectPattern":
          case "ArrayPattern":
          case "AssignmentPattern":
          case "RestElement":
            return !0;
          case "ObjectExpression":
            var p = s.properties.length - 1;
            return s.properties.every(function(m, v) {
              return m.type !== "ObjectMethod" && (v === p || m.type !== "SpreadElement") && c.isAssignable(m);
            });
          case "Property":
          case "ObjectProperty":
            return this.isAssignable(s.value);
          case "SpreadElement":
            return this.isAssignable(s.argument);
          case "ArrayExpression":
            return s.elements.every(function(m) {
              return m === null || c.isAssignable(m);
            });
          case "AssignmentExpression":
            return s.operator === "=";
          case "ParenthesizedExpression":
            return this.isAssignable(s.expression);
          case "MemberExpression":
          case "OptionalMemberExpression":
            return !a;
          default:
            return !1;
        }
      }, f.toAssignable = function(s, a, c) {
        switch (a === void 0 && (a = !1), c === void 0 && (c = new vt()), s.type) {
          case "ParenthesizedExpression":
            return this.toAssignableParenthesizedExpression(s, a, c);
          case "TSAsExpression":
          case "TSSatisfiesExpression":
          case "TSNonNullExpression":
          case "TSTypeAssertion":
            return a || this.raise(s.start, N.UnexpectedTypeCastInParameter), this.toAssignable(s.expression, a, c);
          case "MemberExpression":
            break;
          case "AssignmentExpression":
            return a || s.left.type !== "TSTypeCastExpression" || (s.left = this.typeCastToParameter(s.left)), P.prototype.toAssignable.call(this, s, a, c);
          case "TSTypeCastExpression":
            return this.typeCastToParameter(s);
          default:
            return P.prototype.toAssignable.call(this, s, a, c);
        }
        return s;
      }, f.toAssignableParenthesizedExpression = function(s, a, c) {
        switch (s.expression.type) {
          case "TSAsExpression":
          case "TSSatisfiesExpression":
          case "TSNonNullExpression":
          case "TSTypeAssertion":
          case "ParenthesizedExpression":
            return this.toAssignable(s.expression, a, c);
          default:
            return P.prototype.toAssignable.call(this, s, a, c);
        }
      }, f.curPosition = function() {
        if (this.options.locations) {
          var s = P.prototype.curPosition.call(this);
          return Object.defineProperty(s, "offset", { get: function() {
            return function(a) {
              var c = new d.Position(this.line, this.column + a);
              return c.index = this.index + a, c;
            };
          } }), s.index = this.pos, s;
        }
      }, f.parseBindingAtom = function() {
        return this.type === o._this ? this.parseIdent(!0) : P.prototype.parseBindingAtom.call(this);
      }, f.shouldParseArrow = function(s) {
        var a, c = this;
        if (a = this.match(o.colon) ? s.every(function(m) {
          return c.isAssignable(m, !0);
        }) : !this.canInsertSemicolon()) {
          if (this.match(o.colon)) {
            var p = this.tryParse(function(m) {
              var v = c.tsParseTypeOrTypePredicateAnnotation(o.colon);
              return !c.canInsertSemicolon() && c.match(o.arrow) || m(), v;
            });
            if (p.aborted) return this.shouldParseArrowReturnType = void 0, !1;
            p.thrown || (p.error && this.setLookaheadState(p.failState), this.shouldParseArrowReturnType = p.node);
          }
          return !!this.match(o.arrow) || (this.shouldParseArrowReturnType = void 0, !1);
        }
        return this.shouldParseArrowReturnType = void 0, a;
      }, f.parseParenArrowList = function(s, a, c, p) {
        var m = this.startNodeAt(s, a);
        return m.returnType = this.shouldParseArrowReturnType, this.shouldParseArrowReturnType = void 0, this.parseArrowExpression(m, c, !1, p);
      }, f.parseParenAndDistinguishExpression = function(s, a) {
        var c, p = this.start, m = this.startLoc, v = this.options.ecmaVersion >= 8;
        if (this.options.ecmaVersion >= 6) {
          var x = this.maybeInArrowParameters;
          this.maybeInArrowParameters = !0, this.next();
          var g, _ = this.start, T = this.startLoc, L = [], V = !0, E = !1, G = new vt(), W = this.yieldPos, J = this.awaitPos;
          for (this.yieldPos = 0, this.awaitPos = 0; this.type !== o.parenR; ) {
            if (V ? V = !1 : this.expect(o.comma), v && this.afterTrailingComma(o.parenR, !0)) {
              E = !0;
              break;
            }
            if (this.type === o.ellipsis) {
              g = this.start, L.push(this.parseParenItem(this.parseRestBinding())), this.type === o.comma && this.raise(this.start, "Comma is not permitted after the rest element");
              break;
            }
            L.push(this.parseMaybeAssign(a, G, this.parseParenItem));
          }
          var ie = this.lastTokEnd, ye = this.lastTokEndLoc;
          if (this.expect(o.parenR), this.maybeInArrowParameters = x, s && this.shouldParseArrow(L) && this.eat(o.arrow)) return this.checkPatternErrors(G, !1), this.checkYieldAwaitInDefaultParams(), this.yieldPos = W, this.awaitPos = J, this.parseParenArrowList(p, m, L, a);
          L.length && !E || this.unexpected(this.lastTokStart), g && this.unexpected(g), this.checkExpressionErrors(G, !0), this.yieldPos = W || this.yieldPos, this.awaitPos = J || this.awaitPos, L.length > 1 ? ((c = this.startNodeAt(_, T)).expressions = L, this.finishNodeAt(c, "SequenceExpression", ie, ye)) : c = L[0];
        } else c = this.parseParenExpression();
        if (this.options.preserveParens) {
          var Fe = this.startNodeAt(p, m);
          return Fe.expression = c, this.finishNode(Fe, "ParenthesizedExpression");
        }
        return c;
      }, f.parseTaggedTemplateExpression = function(s, a, c, p) {
        var m = this.startNodeAt(a, c);
        return m.tag = s, m.quasi = this.parseTemplate({ isTagged: !0 }), p && this.raise(a, "Tagged Template Literals are not allowed in optionalChain."), this.finishNode(m, "TaggedTemplateExpression");
      }, f.shouldParseAsyncArrow = function() {
        var s = this;
        if (!this.match(o.colon)) return !this.canInsertSemicolon() && this.eat(o.arrow);
        var a = this.tryParse(function(c) {
          var p = s.tsParseTypeOrTypePredicateAnnotation(o.colon);
          return !s.canInsertSemicolon() && s.match(o.arrow) || c(), p;
        });
        return a.aborted ? (this.shouldParseAsyncArrowReturnType = void 0, !1) : a.thrown ? void 0 : (a.error && this.setLookaheadState(a.failState), this.shouldParseAsyncArrowReturnType = a.node, !this.canInsertSemicolon() && this.eat(o.arrow));
      }, f.parseSubscriptAsyncArrow = function(s, a, c, p) {
        var m = this.startNodeAt(s, a);
        return m.returnType = this.shouldParseAsyncArrowReturnType, this.shouldParseAsyncArrowReturnType = void 0, this.parseArrowExpression(m, c, !0, p);
      }, f.parseExprList = function(s, a, c, p) {
        for (var m = [], v = !0; !this.eat(s); ) {
          if (v) v = !1;
          else if (this.expect(o.comma), a && this.afterTrailingComma(s)) break;
          var x = void 0;
          c && this.type === o.comma ? x = null : this.type === o.ellipsis ? (x = this.parseSpread(p), p && this.type === o.comma && p.trailingComma < 0 && (p.trailingComma = this.start)) : x = this.parseMaybeAssign(!1, p, this.parseParenItem), m.push(x);
        }
        return m;
      }, f.parseSubscript = function(s, a, c, p, m, v, x) {
        var g = this, _ = v;
        if (!this.hasPrecedingLineBreak() && this.value === "!" && this.match(o.prefix)) {
          this.exprAllowed = !1, this.next();
          var T = this.startNodeAt(a, c);
          return T.expression = s, s = this.finishNode(T, "TSNonNullExpression");
        }
        var L = !1;
        if (this.match(o.questionDot) && this.lookaheadCharCode() === 60) {
          if (p) return s;
          s.optional = !0, _ = L = !0, this.next();
        }
        if (this.tsMatchLeftRelational() || this.match(o.bitShift)) {
          var V, E = this.tsTryParseAndCatch(function() {
            if (!p && g.atPossibleAsyncArrow(s)) {
              var Oi = g.tsTryParseGenericAsyncArrowFunction(a, c, x);
              if (Oi) return s = Oi;
            }
            var Et = g.tsParseTypeArgumentsInExpression();
            if (!Et) return s;
            if (L && !g.match(o.parenL)) return V = g.curPosition(), s;
            if (be(g.type) || g.type === o.backQuote) {
              var Ri = g.parseTaggedTemplateExpression(s, a, c, _);
              return Ri.typeParameters = Et, Ri;
            }
            if (!p && g.eat(o.parenL)) {
              var Di = new vt(), et = g.startNodeAt(a, c);
              return et.callee = s, et.arguments = g.parseExprList(o.parenR, g.options.ecmaVersion >= 8, !1, Di), g.tsCheckForInvalidTypeCasts(et.arguments), et.typeParameters = Et, _ && (et.optional = L), g.checkExpressionErrors(Di, !0), s = g.finishNode(et, "CallExpression");
            }
            var ei = g.type;
            if (!(g.tsMatchRightRelational() || ei === o.bitShift || ei !== o.parenL && (Mi = ei, !!Mi.startsExpr) && !g.hasPrecedingLineBreak())) {
              var Mi, ti = g.startNodeAt(a, c);
              return ti.expression = s, ti.typeParameters = Et, g.finishNode(ti, "TSInstantiationExpression");
            }
          });
          if (V && this.unexpected(V), E) return E.type === "TSInstantiationExpression" && (this.match(o.dot) || this.match(o.questionDot) && this.lookaheadCharCode() !== 40) && this.raise(this.start, N.InvalidPropertyAccessAfterInstantiationExpression), s = E;
        }
        var G = this.options.ecmaVersion >= 11, W = G && this.eat(o.questionDot);
        p && W && this.raise(this.lastTokStart, "Optional chaining cannot appear in the callee of new expressions");
        var J = this.eat(o.bracketL);
        if (J || W && this.type !== o.parenL && this.type !== o.backQuote || this.eat(o.dot)) {
          var ie = this.startNodeAt(a, c);
          ie.object = s, J ? (ie.property = this.parseExpression(), this.expect(o.bracketR)) : ie.property = this.type === o.privateId && s.type !== "Super" ? this.parsePrivateIdent() : this.parseIdent(this.options.allowReserved !== "never"), ie.computed = !!J, G && (ie.optional = W), s = this.finishNode(ie, "MemberExpression");
        } else if (!p && this.eat(o.parenL)) {
          var ye = this.maybeInArrowParameters;
          this.maybeInArrowParameters = !0;
          var Fe = new vt(), dt = this.yieldPos, mt = this.awaitPos, Be = this.awaitIdentPos;
          this.yieldPos = 0, this.awaitPos = 0, this.awaitIdentPos = 0;
          var Li = this.parseExprList(o.parenR, this.options.ecmaVersion >= 8, !1, Fe);
          if (m && !W && this.shouldParseAsyncArrow()) this.checkPatternErrors(Fe, !1), this.checkYieldAwaitInDefaultParams(), this.awaitIdentPos > 0 && this.raise(this.awaitIdentPos, "Cannot use 'await' as identifier inside an async function"), this.yieldPos = dt, this.awaitPos = mt, this.awaitIdentPos = Be, s = this.parseSubscriptAsyncArrow(a, c, Li, x);
          else {
            this.checkExpressionErrors(Fe, !0), this.yieldPos = dt || this.yieldPos, this.awaitPos = mt || this.awaitPos, this.awaitIdentPos = Be || this.awaitIdentPos;
            var At = this.startNodeAt(a, c);
            At.callee = s, At.arguments = Li, G && (At.optional = W), s = this.finishNode(At, "CallExpression");
          }
          this.maybeInArrowParameters = ye;
        } else if (this.type === o.backQuote) {
          (W || _) && this.raise(this.start, "Optional chaining cannot appear in the tag of tagged template expressions");
          var Qt = this.startNodeAt(a, c);
          Qt.tag = s, Qt.quasi = this.parseTemplate({ isTagged: !0 }), s = this.finishNode(Qt, "TaggedTemplateExpression");
        }
        return s;
      }, f.parseGetterSetter = function(s) {
        s.kind = s.key.name, this.parsePropertyName(s), s.value = this.parseMethod(!1);
        var a = s.kind === "get" ? 0 : 1, c = s.value.params[0], p = c && this.isThisParam(c);
        s.value.params.length !== (a = p ? a + 1 : a) ? this.raiseRecoverable(s.value.start, s.kind === "get" ? "getter should have no params" : "setter should have exactly one param") : s.kind === "set" && s.value.params[0].type === "RestElement" && this.raiseRecoverable(s.value.params[0].start, "Setter cannot use rest params");
      }, f.parseProperty = function(s, a) {
        if (!s) {
          var c = [];
          if (this.match(D.at)) for (; this.match(D.at); ) c.push(this.parseDecorator());
          var p = P.prototype.parseProperty.call(this, s, a);
          return p.type === "SpreadElement" && c.length && this.raise(p.start, "Decorators can't be used with SpreadElement"), c.length && (p.decorators = c, c = []), p;
        }
        return P.prototype.parseProperty.call(this, s, a);
      }, f.parseCatchClauseParam = function() {
        var s = this.parseBindingAtom(), a = s.type === "Identifier";
        this.enterScope(a ? 32 : 0), this.checkLValPattern(s, a ? 4 : 2);
        var c = this.tsTryParseTypeAnnotation();
        return c && (s.typeAnnotation = c, this.resetEndLocation(s)), this.expect(o.parenR), s;
      }, f.parseClass = function(s, a) {
        var c = this.inAbstractClass;
        this.inAbstractClass = !!s.abstract;
        try {
          this.next(), this.takeDecorators(s);
          var p = this.strict;
          this.strict = !0, this.parseClassId(s, a), this.parseClassSuper(s);
          var m = this.enterClassBody(), v = this.startNode(), x = !1;
          v.body = [];
          var g = [];
          for (this.expect(o.braceL); this.type !== o.braceR; ) if (this.match(D.at)) g.push(this.parseDecorator());
          else {
            var _ = this.parseClassElement(s.superClass !== null);
            g.length && (_.decorators = g, this.resetStartLocationFromNode(_, g[0]), g = []), _ && (v.body.push(_), _.type === "MethodDefinition" && _.kind === "constructor" && _.value.type === "FunctionExpression" ? (x && this.raiseRecoverable(_.start, "Duplicate constructor in the same class"), x = !0, _.decorators && _.decorators.length > 0 && this.raise(_.start, "Decorators can't be used with a constructor. Did you mean '@dec class { ... }'?")) : _.key && _.key.type === "PrivateIdentifier" && Lh(m, _) && this.raiseRecoverable(_.key.start, "Identifier '#" + _.key.name + "' has already been declared"));
          }
          return this.strict = p, this.next(), g.length && this.raise(this.start, "Decorators must be attached to a class element."), s.body = this.finishNode(v, "ClassBody"), this.exitClassBody(), this.finishNode(s, a ? "ClassDeclaration" : "ClassExpression");
        } finally {
          this.inAbstractClass = c;
        }
      }, f.parseClassFunctionParams = function() {
        var s = this.tsTryParseTypeParameters(this.tsParseConstModifier), a = this.parseBindingList(o.parenR, !1, this.options.ecmaVersion >= 8, !0);
        return s && (a.typeParameters = s), a;
      }, f.parseMethod = function(s, a, c, p, m) {
        var v = this.startNode(), x = this.yieldPos, g = this.awaitPos, _ = this.awaitIdentPos;
        if (this.initFunction(v), this.options.ecmaVersion >= 6 && (v.generator = s), this.options.ecmaVersion >= 8 && (v.async = !!a), this.yieldPos = 0, this.awaitPos = 0, this.awaitIdentPos = 0, this.enterScope(64 | ui(a, v.generator) | (c ? 128 : 0)), this.expect(o.parenL), v.params = this.parseClassFunctionParams(), this.checkYieldAwaitInDefaultParams(), this.parseFunctionBody(v, !1, !0, !1, { isClassMethod: p }), this.yieldPos = x, this.awaitPos = g, this.awaitIdentPos = _, m && m.abstract && v.body) {
          var T = m.key;
          this.raise(m.start, N.AbstractMethodHasImplementation({ methodName: T.type !== "Identifier" || m.computed ? "[" + this.input.slice(T.start, T.end) + "]" : T.name }));
        }
        return this.finishNode(v, "FunctionExpression");
      }, fe.parse = function(s, a) {
        if (a.locations === !1) throw new Error("You have to enable options.locations while using acorn-typescript");
        a.locations = !0;
        var c = new this(a, s);
        return r && (c.isAmbientContext = !0), c.parse();
      }, fe.parseExpressionAt = function(s, a, c) {
        if (c.locations === !1) throw new Error("You have to enable options.locations while using acorn-typescript");
        c.locations = !0;
        var p = new this(c, s, a);
        return r && (p.isAmbientContext = !0), p.nextToken(), p.parseExpression();
      }, f.parseImportSpecifier = function() {
        if (this.ts_isContextual(D.type)) {
          var s = this.startNode();
          return s.imported = this.parseModuleExportName(), this.parseTypeOnlyImportExportSpecifier(s, !0, this.importOrExportOuterKind === "type"), this.finishNode(s, "ImportSpecifier");
        }
        var a = P.prototype.parseImportSpecifier.call(this);
        return a.importKind = "value", a;
      }, f.parseExportSpecifier = function(s) {
        var a = this.ts_isContextual(D.type);
        if (!this.match(o.string) && a) {
          var c = this.startNode();
          return c.local = this.parseModuleExportName(), this.parseTypeOnlyImportExportSpecifier(c, !1, this.importOrExportOuterKind === "type"), this.finishNode(c, "ExportSpecifier"), this.checkExport(s, c.exported, c.exported.start), c;
        }
        var p = P.prototype.parseExportSpecifier.call(this, s);
        return p.exportKind = "value", p;
      }, f.parseTypeOnlyImportExportSpecifier = function(s, a, c) {
        var p, m = a ? "imported" : "local", v = a ? "local" : "exported", x = s[m], g = !1, _ = !0, T = x.start;
        if (this.isContextual("as")) {
          var L = this.parseIdent();
          if (this.isContextual("as")) {
            var V = this.parseIdent();
            Ct(this.type) ? (g = !0, x = L, p = a ? this.parseIdent() : this.parseModuleExportName(), _ = !1) : (p = V, _ = !1);
          } else Ct(this.type) ? (_ = !1, p = a ? this.parseIdent() : this.parseModuleExportName()) : (g = !0, x = L);
        } else Ct(this.type) && (g = !0, a ? (x = P.prototype.parseIdent.call(this, !0), this.isContextual("as") || this.checkUnreserved(x)) : x = this.parseModuleExportName());
        g && c && this.raise(T, a ? N.TypeModifierIsUsedInTypeImports : N.TypeModifierIsUsedInTypeExports), s[m] = x, s[v] = p, s[a ? "importKind" : "exportKind"] = g ? "type" : "value", _ && this.eatContextual("as") && (s[v] = a ? this.parseIdent() : this.parseModuleExportName()), s[v] || (s[v] = this.copyNode(s[m])), a && this.checkLValSimple(s[v], 2);
      }, f.raiseCommonCheck = function(s, a, c) {
        return a === "Comma is not permitted after the rest element" ? this.isAmbientContext && this.match(o.comma) && this.lookaheadCharCode() === 41 ? void this.next() : P.prototype.raise.call(this, s, a) : c ? P.prototype.raiseRecoverable.call(this, s, a) : P.prototype.raise.call(this, s, a);
      }, f.raiseRecoverable = function(s, a) {
        return this.raiseCommonCheck(s, a, !0);
      }, f.raise = function(s, a) {
        return this.raiseCommonCheck(s, a, !0);
      }, f.updateContext = function(s) {
        var a = this.type;
        if (a == o.braceL) {
          var c = this.curContext();
          c == se.tc_oTag ? this.context.push(Z.b_expr) : c == se.tc_expr ? this.context.push(Z.b_tmpl) : P.prototype.updateContext.call(this, s), this.exprAllowed = !0;
        } else {
          if (a !== o.slash || s !== D.jsxTagStart) return P.prototype.updateContext.call(this, s);
          this.context.length -= 2, this.context.push(se.tc_cTag), this.exprAllowed = !1;
        }
      }, f.jsx_parseOpeningElementAt = function(s, a) {
        var c = this, p = this.startNodeAt(s, a), m = this.jsx_parseElementName();
        if (m && (p.name = m), this.match(o.relational) || this.match(o.bitShift)) {
          var v = this.tsTryParseAndCatch(function() {
            return c.tsParseTypeArgumentsInExpression();
          });
          v && (p.typeParameters = v);
        }
        for (p.attributes = []; this.type !== o.slash && this.type !== D.jsxTagEnd; ) p.attributes.push(this.jsx_parseAttribute());
        return p.selfClosing = this.eat(o.slash), this.expect(D.jsxTagEnd), this.finishNode(p, m ? "JSXOpeningElement" : "JSXOpeningFragment");
      }, f.enterScope = function(s) {
        s === yt && this.importsStack.push([]), P.prototype.enterScope.call(this, s);
        var a = P.prototype.currentScope.call(this);
        a.types = [], a.enums = [], a.constEnums = [], a.classes = [], a.exportOnlyBindings = [];
      }, f.exitScope = function() {
        P.prototype.currentScope.call(this).flags === yt && this.importsStack.pop(), P.prototype.exitScope.call(this);
      }, f.hasImport = function(s, a) {
        var c = this.importsStack.length;
        if (this.importsStack[c - 1].indexOf(s) > -1) return !0;
        if (!a && c > 1) {
          for (var p = 0; p < c - 1; p++) if (this.importsStack[p].indexOf(s) > -1) return !0;
        }
        return !1;
      }, f.maybeExportDefined = function(s, a) {
        this.inModule && 1 & s.flags && this.undefinedExports.delete(a);
      }, f.isRedeclaredInScope = function(s, a, c) {
        return !!(0 & c) && (2 & c ? s.lexical.indexOf(a) > -1 || s.functions.indexOf(a) > -1 || s.var.indexOf(a) > -1 : 3 & c ? s.lexical.indexOf(a) > -1 || !P.prototype.treatFunctionsAsVarInScope.call(this, s) && s.var.indexOf(a) > -1 : s.lexical.indexOf(a) > -1 && !(32 & s.flags && s.lexical[0] === a) || !this.treatFunctionsAsVarInScope(s) && s.functions.indexOf(a) > -1);
      }, f.checkRedeclarationInScope = function(s, a, c, p) {
        this.isRedeclaredInScope(s, a, c) && this.raise(p, "Identifier '" + a + "' has already been declared.");
      }, f.declareName = function(s, a, c) {
        if (4096 & a) return this.hasImport(s, !0) && this.raise(c, "Identifier '" + s + "' has already been declared."), void this.importsStack[this.importsStack.length - 1].push(s);
        var p = this.currentScope();
        if (1024 & a) return this.maybeExportDefined(p, s), void p.exportOnlyBindings.push(s);
        P.prototype.declareName.call(this, s, a, c), 0 & a && (0 & a || (this.checkRedeclarationInScope(p, s, a, c), this.maybeExportDefined(p, s)), p.types.push(s)), 256 & a && p.enums.push(s), 512 & a && p.constEnums.push(s), 128 & a && p.classes.push(s);
      }, f.checkLocalExport = function(s) {
        var a = s.name;
        if (!this.hasImport(a)) {
          for (var c = this.scopeStack.length - 1; c >= 0; c--) {
            var p = this.scopeStack[c];
            if (p.types.indexOf(a) > -1 || p.exportOnlyBindings.indexOf(a) > -1) return;
          }
          P.prototype.checkLocalExport.call(this, s);
        }
      }, oe = fe, B = [{ key: "acornTypeScript", get: function() {
        return y;
      } }], (te = [{ key: "acornTypeScript", get: function() {
        return y;
      } }]) && pr(oe.prototype, te), B && pr(oe, B), Object.defineProperty(oe, "prototype", { writable: !1 }), fe;
    })(h);
    return Rs;
  };
}
const $h = Ms(Vs);
function Ni(e) {
  const i = X.extend(jh()).parse(e, {
    ecmaVersion: "latest",
    sourceType: "module",
    locations: !0
  }), r = [];
  return yi(i, (n) => {
    if (n.type !== "MethodDefinition") return;
    const u = n, h = u.key;
    if (h.type !== "Identifier") return;
    const d = h.name;
    d && d !== "constructor" && u.accessibility !== "private" && r.push(d);
  }), r;
}
async function we(e, t, i = [], r) {
  const n = `${t} ${i.join(" ")}`;
  e !== void 0 && re(`${e} - exec(${n})`);
  const { stdout: u, stderr: h } = await $h(n);
  r === void 0 ? u.trim() && console.log(u.trim()) : await Ae.writeFile(r, u.trim(), "utf8"), h.trim() && console.error(h.trim());
}
async function Fh(e, t) {
  return Ae.readdir(e, t);
}
async function Es() {
  re("Load environment variables"), (await import("dotenv")).config();
}
function Re(e) {
  const t = "\x1B[36m", i = "\x1B[0m", r = "─".repeat(Math.max(e.length + 60, 60));
  console.info(`
${t}${r}`), console.info(`▶️  ${e}`), console.info(`${r}${i}`);
}
function $e(e) {
  console.info(`
✅ ${e}
`);
}
function re(e) {
  console.info(`
${e}
`);
}
async function ce(e) {
  return JSON.parse(await Ae.readFile(e, "utf8"));
}
async function Pt(e) {
  return await Ae.readFile(e, "utf8");
}
async function Ie(e, t, i = [], r = !1) {
  return re(`${e} - spawn(${t} ${i.join(" ")})`), new Promise((n, u) => {
    zs(t, i, { stdio: "inherit" }).on("close", (d) => {
      d === 0 || r ? n() : u(new Error(`${t} exited with code ${d}`));
    });
  });
}
async function ut(e, t) {
  await Ae.writeFile(e, JSON.stringify(t, void 0, 4), "utf8");
}
async function Is(e, t) {
  await Ae.writeFile(e, t, "utf8");
}
function yi(e, t) {
  t(e);
  for (const [i, r] of Object.entries(e)) {
    if (["loc", "range", "start", "end", "comments"].includes(i)) continue;
    const n = r;
    if (Array.isArray(n))
      for (const u of n) {
        const h = u;
        h && typeof h.type == "string" && yi(h, t);
      }
    else n && typeof n == "object" && typeof n.type == "string" && yi(n, t);
  }
}
async function Bh() {
  const e = await ce("config.json"), t = {
    body: JSON.stringify(e),
    headers: { "Content-Type": "application/json" },
    method: "PUT"
  }, i = await fetch(`https://api.datapos.app/states/${e.id}`, t);
  if (!i.ok) throw new Error(await i.text());
}
async function gr() {
  const e = await ce("config.json"), t = e.id, i = {
    body: JSON.stringify(e),
    headers: { "Content-Type": "application/json" },
    method: "PUT"
  }, r = await fetch(`https://api.datapos.app/states/${t}`, i);
  if (!r.ok) throw new Error(await r.text());
}
async function br(e) {
  const i = `v${JSON.parse(await Ae.readFile("package.json", "utf8")).version}`;
  async function r(n, u = "") {
    const h = await Fh(n, { withFileTypes: !0 });
    for (const d of h) {
      const y = `${n}/${d.name}`, o = u ? `${u}/${d.name}` : d.name;
      if (d.isDirectory()) continue;
      const S = `${e}_${i}/${o}`.replaceAll("\\", "/"), w = d.name.endsWith(".css") ? "text/css" : "application/octet-stream", C = d.name.endsWith(".js") ? "application/javascript" : w;
      console.info(`⚙️ Uploading '${o}' → '${S}'...`), await we(void 0, `wrangler r2 object put "${S}" --file="${y}" --content-type ${C} --jurisdiction=eu --remote`);
    }
  }
  await r("dist");
}
async function ll() {
  try {
    Re("Build Project"), await Ie("1️⃣  Bundle project", "vite", ["build"]), $e("Project built.");
  } catch (e) {
    console.error("❌ Error building project.", e), process.exit(1);
  }
}
async function pl() {
  try {
    Re("Release Project");
    const e = await ce("package.json"), t = await ce("config.json");
    await Ns("1️⃣", e);
    const i = Gh(e);
    switch (i) {
      case "connector":
        await Uh("2️⃣", e);
        break;
      case "context":
        await qh("2️⃣", e);
        break;
      case "presenter":
        await Hh("2️⃣", e);
        break;
      default:
        await Zh("2️⃣", e);
    }
    await Ie("3️⃣  Bundle project", "vite", ["build"]), await we("4️⃣  Stage changes", "git", ["add", "."]), await we("5️⃣  Commit changes", "git", ["commit", "-m", `"v${e.version}"`]), await we("6️⃣  Push changes", "git", ["push", "origin", "main:main"]);
    const r = Kh(i);
    if (i === "app")
      re("7️⃣  Register module"), await Bh();
    else if (i === "engine")
      re("7️⃣  Register module"), await gr(), await br(`datapos-engine-eu/${r}`);
    else if (r === void 0)
      re("7️⃣  Registration NOT required.");
    else {
      re("7️⃣  Register module"), await gr();
      const n = t.id.split("-").slice(2).join("-");
      await br(`datapos-engine-eu/${r}/${n}`);
    }
    i === "connector" || i === "context" || i === "dev" || i === "presenter" || i === "shared" || i === "tool" ? await Ie("8️⃣  Publish to npm", "npm", ["publish", "--access", "public"]) : re(`8️⃣  Publishing NOT required for package with type identifier of '${i}'.`), $e(`Project version '${e.version}' released.`);
  } catch (e) {
    console.error("❌ Error releasing project.", e), process.exit(1);
  }
}
async function fl() {
  try {
    Re("Synchronise Project with GitHub");
    const e = await ce("package.json");
    re("Bump project version"), await Ns("1️⃣", e), await we("2️⃣  Stage changes", "git", ["add", "."]), await we("3️⃣  Commit changes", "git", ["commit", "-m", `"v${e.version}"`]), await we("4️⃣  Push changes", "git", ["push", "origin", "main:main"]), $e(`Project version '${e.version}' synchronised with GitHub.`);
  } catch (e) {
    console.error("❌ Error synchronising project with GitHub.", e), process.exit(1);
  }
}
function dl() {
  try {
    Re("Test Project"), console.log(`
❌ Test project is not implemented. No 'vitest' command.
`);
  } catch (e) {
    console.error("❌ Error testing project.", e), process.exit(1);
  }
}
async function Zh(e, t) {
  re(`${e}  Build project configuration`);
  const i = await ce("config.json");
  t.name != null && (i.id = t.name.replace("@datapos/", "").replace("@data-positioning/", "")), t.version != null && (i.version = t.version), await ut("config.json", i);
}
async function Uh(e, t) {
  re(`${e}  Build connector project configuration`);
  const [i, r] = await Promise.all([ce("config.json"), Pt("src/index.ts")]), n = _c.safeParse(i);
  if (!n.success) {
    console.log("❌ Configuration is invalid:"), console.table(n.error.issues);
    return;
  }
  const u = Ni(r), h = Wh(u);
  u.length > 0 ? (console.info(`ℹ️  Implements ${u.length} operations:`), console.table(u)) : console.warn("⚠️  Implements no operations."), h === "unknown" ? console.warn("⚠️  No usage identified.") : console.info(`ℹ️  Supports '${h}' usage.`), t.name != null && (i.id = t.name.replace("@datapos/", "").replace("@data-positioning/", "")), t.version != null && (i.version = t.version), i.operations = u, i.usageId = h, await ut("config.json", i);
}
async function qh(e, t) {
  re(`${e}  Build context project configuration`);
  const [i, r] = await Promise.all([ce("config.json"), Pt("src/index.ts")]), n = Nc.safeParse(i);
  if (!n.success) {
    console.log("❌ Configuration is invalid:"), console.table(n.error.issues);
    return;
  }
  const u = Ni(r);
  u.length > 0 ? (console.info(`ℹ️  Implements ${u.length} operations:`), console.table(u)) : console.warn("⚠️  Implements no operations."), t.name != null && (i.id = t.name.replace("@datapos/", "").replace("@data-positioning/", "")), t.version != null && (i.version = t.version), i.operations = u, await ut("config.json", i);
}
async function Hh(e, t) {
  re(`${e}  Build presenter project configuration`);
  const [i, r] = await Promise.all([ce("config.json"), Pt("src/index.ts")]), n = Fc.safeParse(i);
  if (!n.success) {
    console.log("❌ Configuration is invalid:"), console.table(n.error.issues);
    return;
  }
  const u = Ni(r);
  u.length > 0 ? (console.info(`ℹ️  Implements ${u.length} operations:`), console.table(u)) : console.warn("⚠️  Implements no operations."), t.name != null && (i.id = t.name.replace("@datapos/", "").replace("@data-positioning/", "")), t.version != null && (i.version = t.version), i.operations = u, await ut("config.json", i);
}
async function Ns(e, t, i = "./") {
  if (re(`${e}  Bump project version`), t.version == null)
    t.version = "0.0.001", console.warn(`⚠️ Project version initialised to '${t.version}'.`), await ut(`${i}package.json`, t);
  else {
    const r = t.version, n = t.version.split(".");
    t.version = `${n[0]}.${n[1]}.${Number(n[2]) + 1}`, console.info(`Project version bumped from '${r}' to '${t.version}'.`), await ut(`${i}package.json`, t);
  }
}
function Wh(e) {
  let t = !1, i = !1;
  for (const r of e)
    js.includes(r) && (t = !0), $s.includes(r) && (i = !0);
  return t && i ? "bidirectional" : t ? "source" : i ? "destination" : "unknown";
}
function Kh(e) {
  switch (e) {
    case "engine":
      return "engine";
    case "connector":
      return "connectors";
    case "context":
      return "contexts";
    case "presenter":
      return "presenters";
    case "tool":
      return "tools";
    default:
      return;
  }
}
function Gh(e) {
  const t = e.name ?? "";
  return t === "datapos-app" ? "app" : t === "datapos-api" ? "api" : t === "datapos-engine" ? "engine" : t === "@datapos/datapos-shared" ? "shared" : t === "@datapos/datapos-development" ? "dev" : t.includes("datapos-connector") ? "connector" : t.includes("datapos-context") ? "context" : t.includes("datapos-presenter") ? "presenter" : t.includes("datapos-tool") ? "tool" : "other";
}
const Jh = ["critical", "high", "moderate", "low", "unknown"], Xh = {
  critical: { color: "D32F2F", label: "critical" },
  high: { color: "EF6C00", label: "high" },
  moderate: { color: "FBC02D", label: "moderate" },
  low: { color: "6D8C31", label: "low" },
  unknown: { color: "616161", label: "unknown" }
  // See sample badges in ~/tests/sampleBadges.md. Also included 'info' colouring.
}, _r = "<!-- OWASP_BADGES_START -->", Yh = "<!-- OWASP_BADGES_END -->";
async function ml() {
  try {
    Re("Audit Dependencies"), await Es();
    const e = await ce("package.json");
    await Ie("1️⃣", "owasp-dependency-check", [
      "--out",
      "dependency-check-reports",
      "--project",
      e.name ?? "unknown",
      "--enableRetired",
      "--nodePackageSkipDevDependencies",
      "--nvdApiKey",
      process.env.NVD_API_KEY ?? ""
    ]), await Qh("2️⃣"), await Ie("3️⃣  Check using 'npm outdated'", "npm", ["audit"]), $e("Dependencies audited.");
  } catch (e) {
    console.error("❌ Error auditing dependencies.", e), process.exit(1);
  }
}
async function Qh(e) {
  re(`${e}  Insert OWASP Badge(s) into 'README.md'`);
  const t = await ce("dependency-check-reports/dependency-check-report.json"), i = { critical: 0, high: 0, moderate: 0, low: 0, unknown: 0 };
  for (const o of t.dependencies)
    if (o.vulnerabilities != null)
      for (const S of o.vulnerabilities) {
        const w = S.severity?.toLowerCase() ?? "unknown";
        if (w in i) {
          const C = Jh.find((j) => j === w);
          i[C ?? "unknown"]++;
        } else
          i.unknown++;
      }
  const r = await el(i), n = await Pt("./README.md"), u = n.indexOf(_r), h = n.indexOf(Yh);
  if (u === -1 || h === -1) {
    console.error("❌ No OWASP badge markers found in 'README.md'.");
    return;
  }
  const d = r.join(" "), y = n.slice(0, Math.max(0, u + _r.length)) + d + n.slice(Math.max(0, h));
  await Is("README.md", y), console.info("OWASP audit badge(s) inserted into 'README.md'");
}
async function el(e) {
  const t = await ce("config.json"), i = [];
  if (Object.values(e).reduce((n, u) => n + u, 0) === 0)
    console.info("No vulnerabilities found."), i.push(`[![OWASP](https://img.shields.io/badge/OWASP-passed-4CAF50)](https://data-positioning.github.io/${t.id}/dependency-check-reports/dependency-check-report.html)`);
  else
    for (const [n, u] of Object.entries(e)) {
      const h = Xh[n];
      if (console.warn(`⚠️  ${u} ${h.label} vulnerability(ies) found.`), u === 0) continue;
      const d = `https://img.shields.io/badge/OWASP-${u}%20${h.label}-${h.color}`;
      i.push(`[![OWASP](${d})](https://data-positioning.github.io/${t.id}/dependency-check-reports/dependency-check-report.html)`);
    }
  return i;
}
async function yl() {
  try {
    Re("Check Dependencies"), await Ie("1️⃣  Check using 'npm outdated'", "npm", ["outdated"], !0), await Ie("2️⃣  Check using 'npm-check-updates'", "npm-check-updates", ["-i"]), $e("Dependencies checked.");
  } catch (e) {
    console.error("❌ Error checking dependencies.", e), process.exit(1);
  }
}
const kr = "<!-- DEPENDENCY_LICENSES_START -->", tl = "<!-- DEPENDENCY_LICENSES_END -->";
async function vl(e = [], t = !0) {
  try {
    Re("Document Dependencies"), await Es();
    const i = e.flatMap((n) => ["--allowed", n]), r = Fs(new Bs(import.meta.resolve("@datapos/datapos-development/license-report-config")));
    await we(
      "1️⃣  Generate 'licenses.json' file",
      "license-report",
      ["--config", `'${r}'`, "--only=prod,peer", "--output=json"],
      "licenses/licenses.json"
    ), await we("2️⃣  Check 'licenses.json' file", "license-report-check", ["--source", "licenses/licenses.json", "--output=table", ...i]), t ? (await we(
      "3️⃣  Generate 'licenseTree.json' file",
      "license-report-recursive",
      ["--only=prod,peer", "--output=tree", "--recurse", "--department.value=n/a", "--licensePeriod.value=n/a", "--material.value=n/a", "--relatedTo.value=n/a"],
      "licenses/licenseTree.json"
    ), await we("4️⃣  Check 'licenseTree.json' file", "license-report-check", ["--source", "licenses/licenseTree.json", "--output=table", ...i])) : (re("3️⃣  Skip 'licenses/licenseTree.json' file generate"), re("4️⃣  Skip 'licenses/licenseTree.json' file check")), await we("5️⃣  Download license files", "license-downloader", ["--source", "licenses/licenses.json", "--licDir", "licenses/downloads", "--download"]), await il("6️⃣", t), $e("Dependencies documented.");
  } catch (i) {
    console.error("❌ Error documenting dependencies.", i), process.exit(1);
  }
}
async function il(e, t) {
  re(`${e}  Insert licenses into 'README.md'`);
  const i = await Pt("./README.md"), r = i.indexOf(kr), n = i.indexOf(tl);
  if (r === -1 || n === -1) {
    console.error("❌ No dependency license markers found in 'README.md'.");
    return;
  }
  const u = await ce("licenses/licenses.json"), h = await ce("licenses/downloads/licenses.ext.json");
  let d = [];
  t && (d = await ce("licenses/licenseTree.json"));
  const y = [
    ...(() => {
      const w = /* @__PURE__ */ new Map();
      for (const C of u)
        w.set(C.name, { ...C });
      for (const C of h) {
        const j = w.get(C.name);
        w.set(C.name, j ? { ...j, ...C } : { ...C });
      }
      for (const C of d) {
        const j = w.get(C.name);
        j && w.set(C.name, { ...j, dependencyCount: C.requires?.length ?? 0 });
      }
      return w.values();
    })()
  ];
  let o = `|Name|Type|Installed|Latest|Latest Updated|Deps|Document|
|:-|:-|:-:|:-:|:-|-:|:-|
`;
  for (const w of y) {
    const C = w.installedVersion === w.remoteVersion ? w.installedVersion : `${w.installedVersion} ⚠️`, j = w.latestRemoteModified ? rl(w.latestRemoteModified.split("T")[0]) : "n/a", Z = w.dependencyCount != null && w.dependencyCount >= 0 ? w.dependencyCount : "n/a";
    let pe;
    w.licenseFileLink == null || w.licenseFileLink == "" ? pe = "⚠️ No license file" : pe = `[${w.licenseFileLink.slice(Math.max(0, w.licenseFileLink.lastIndexOf("/") + 1))}](${w.licenseFileLink})`, o += `|${w.name}|${w.licenseType}|${C}|${w.remoteVersion}|${j}|${Z}|${pe}|
`;
  }
  const S = `${i.slice(0, Math.max(0, r + kr.length))}
${o}
${i.slice(Math.max(0, n))}`;
  await Is("README.md", S);
}
function rl(e) {
  if (e == null || e === "") return "n/a";
  const t = e.split("T")[0];
  if (t == null || t === "") return "n/a";
  const i = new Date(t), r = /* @__PURE__ */ new Date();
  let n = (r.getFullYear() - i.getFullYear()) * 12 + (r.getMonth() - i.getMonth());
  return r.getDate() < i.getDate() && (n -= 1), n === 0 ? `this month - ${t}` : n === 1 ? `1 month ago - ${t}` : n <= 6 ? `${n} months ago - ${t}` : n <= 12 ? `${n} months ago - ${t} ⚠️` : `${n} months ago - ${t}❗`;
}
async function xl() {
  try {
    Re("Format Code"), await Ie("1️⃣  Format", "prettier", ["--write", "src/"]), $e("Code formatted.");
  } catch (e) {
    console.error("❌ Error formatting code.", e), process.exit(1);
  }
}
async function gl() {
  try {
    Re("Lint Code"), await Ie("1️⃣  Lint", "eslint", []), $e("Code linted.");
  } catch (e) {
    console.error("❌ Error linting code.", e), process.exit(1);
  }
}
const sl = ["1️⃣", "2️⃣", "3️⃣", "4️⃣", "5️⃣", "6️⃣", "7️⃣", "8️⃣", "9️⃣"];
async function bl(e = []) {
  try {
    Re("Update '@datapos/datapos' Dependencies");
    for (const [t, i] of e.entries()) {
      const r = sl.at(t) ?? "🔢";
      await Ie(`${r}  Update '${i}'`, "npm", ["install", `@datapos/datapos-${i}@latest`]);
    }
    $e("'@datapos/datapos' dependencies updated.");
  } catch (t) {
    console.error("❌ Error updating '@datapos/datapos' dependencies.", t), process.exit(1);
  }
}
async function _l(e) {
  try {
    console.info(`🚀 Building public directory index for identifier '${e}'...`);
    const t = {};
    async function i(n, u) {
      console.info(`⚙️ Processing directory '${n}'...`);
      const h = [], d = n.slice(`public/${e}`.length);
      t[d === "" ? "/" : d] = h;
      for (const y of u) {
        const o = `${n}/${y}`;
        try {
          const S = await Ae.stat(o);
          if (S.isDirectory()) {
            const w = await Ae.readdir(o), C = { childCount: w.length, name: y, typeId: "folder" };
            h.push(C), await i(o, w);
          } else {
            const w = { id: Ds(), lastModifiedAt: S.mtimeMs, name: y, size: S.size, typeId: "object" };
            h.push(w);
          }
        } catch (S) {
          throw new Error(`Unable to get information for '${y}' in 'buildPublicDirectoryIndex'. ${String(S)}`);
        }
      }
      h.sort((y, o) => {
        const S = y.typeId.localeCompare(o.typeId);
        return S === 0 ? y.name.localeCompare(o.name) : S;
      });
    }
    const r = await Ae.readdir(`public/${e}`);
    await i(`public/${e}`, r), await Ae.writeFile(`./public/${e}Index.json`, JSON.stringify(t), "utf8"), console.info("✅ Public directory index built.");
  } catch (t) {
    console.error("❌ Error building public directory index.", t);
  }
}
export {
  ml as auditDependencies,
  _l as buildDirectoryIndex,
  ll as buildProject,
  yl as checkDependencies,
  vl as documentDependencies,
  xl as formatCode,
  gl as lintCode,
  pl as releaseProject,
  fl as syncProjectWithGitHub,
  dl as testProject,
  bl as updateDataPosDependencies
};
//# sourceMappingURL=datapos-development.es.js.map
