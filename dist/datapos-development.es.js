import { exec as Yn } from "child_process";
import { promises as h } from "fs";
import { nanoid as Xn } from "nanoid";
import { promisify as Qn } from "util";
const q = {}, nt = ["createObject", "dropObject", "removeRecords", "upsertRecords"], tt = ["findObject", "getRecord", "listNodes", "previewObject", "retrieveRecords"];
function a(n, t, e) {
  function o(c, u) {
    var d;
    Object.defineProperty(c, "_zod", {
      value: c._zod ?? {},
      enumerable: !1
    }), (d = c._zod).traits ?? (d.traits = /* @__PURE__ */ new Set()), c._zod.traits.add(n), t(c, u);
    for (const l in s.prototype)
      l in c || Object.defineProperty(c, l, { value: s.prototype[l].bind(c) });
    c._zod.constr = s, c._zod.def = u;
  }
  const r = e?.Parent ?? Object;
  class i extends r {
  }
  Object.defineProperty(i, "name", { value: n });
  function s(c) {
    var u;
    const d = e?.Parent ? new i() : this;
    o(d, c), (u = d._zod).deferred ?? (u.deferred = []);
    for (const l of d._zod.deferred)
      l();
    return d;
  }
  return Object.defineProperty(s, "init", { value: o }), Object.defineProperty(s, Symbol.hasInstance, {
    value: (c) => e?.Parent && c instanceof e.Parent ? !0 : c?._zod?.traits?.has(n)
  }), Object.defineProperty(s, "name", { value: n }), s;
}
class I extends Error {
  constructor() {
    super("Encountered Promise during synchronous parse. Use .parseAsync() instead.");
  }
}
class xn extends Error {
  constructor(t) {
    super(`Encountered unidirectional transform during encode: ${t}`), this.name = "ZodEncodeError";
  }
}
const jn = {};
function x(n) {
  return jn;
}
function et(n) {
  const t = Object.values(n).filter((e) => typeof e == "number");
  return Object.entries(n).filter(([e, o]) => t.indexOf(+e) === -1).map(([e, o]) => o);
}
function Y(n, t) {
  return typeof t == "bigint" ? t.toString() : t;
}
function tn(n) {
  return {
    get value() {
      {
        const t = n();
        return Object.defineProperty(this, "value", { value: t }), t;
      }
    }
  };
}
function en(n) {
  return n == null;
}
function on(n) {
  const t = n.startsWith("^") ? 1 : 0, e = n.endsWith("$") ? n.length - 1 : n.length;
  return n.slice(t, e);
}
const dn = Symbol("evaluating");
function g(n, t, e) {
  let o;
  Object.defineProperty(n, t, {
    get() {
      if (o !== dn)
        return o === void 0 && (o = dn, o = e()), o;
    },
    set(r) {
      Object.defineProperty(n, t, {
        value: r
        // configurable: true,
      });
    },
    configurable: !0
  });
}
function E(n, t, e) {
  Object.defineProperty(n, t, {
    value: e,
    writable: !0,
    enumerable: !0,
    configurable: !0
  });
}
function S(...n) {
  const t = {};
  for (const e of n) {
    const o = Object.getOwnPropertyDescriptors(e);
    Object.assign(t, o);
  }
  return Object.defineProperties({}, t);
}
function fn(n) {
  return JSON.stringify(n);
}
const En = "captureStackTrace" in Error ? Error.captureStackTrace : (...n) => {
};
function L(n) {
  return typeof n == "object" && n !== null && !Array.isArray(n);
}
const ot = tn(() => {
  if (typeof navigator < "u" && navigator?.userAgent?.includes("Cloudflare"))
    return !1;
  try {
    const n = Function;
    return new n(""), !0;
  } catch {
    return !1;
  }
});
function F(n) {
  if (L(n) === !1)
    return !1;
  const t = n.constructor;
  if (t === void 0)
    return !0;
  const e = t.prototype;
  return !(L(e) === !1 || Object.prototype.hasOwnProperty.call(e, "isPrototypeOf") === !1);
}
function Sn(n) {
  return F(n) ? { ...n } : Array.isArray(n) ? [...n] : n;
}
const rt = /* @__PURE__ */ new Set(["string", "number", "symbol"]);
function B(n) {
  return n.replace(/[.*+?^${}()|[\]\\]/g, "\\$&");
}
function O(n, t, e) {
  const o = new n._zod.constr(t ?? n._zod.def);
  return (!t || e?.parent) && (o._zod.parent = n), o;
}
function f(n) {
  const t = n;
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
function it(n) {
  return Object.keys(n).filter((t) => n[t]._zod.optin === "optional" && n[t]._zod.optout === "optional");
}
function st(n, t) {
  const e = n._zod.def, o = S(n._zod.def, {
    get shape() {
      const r = {};
      for (const i in t) {
        if (!(i in e.shape))
          throw new Error(`Unrecognized key: "${i}"`);
        t[i] && (r[i] = e.shape[i]);
      }
      return E(this, "shape", r), r;
    },
    checks: []
  });
  return O(n, o);
}
function at(n, t) {
  const e = n._zod.def, o = S(n._zod.def, {
    get shape() {
      const r = { ...n._zod.def.shape };
      for (const i in t) {
        if (!(i in e.shape))
          throw new Error(`Unrecognized key: "${i}"`);
        t[i] && delete r[i];
      }
      return E(this, "shape", r), r;
    },
    checks: []
  });
  return O(n, o);
}
function ct(n, t) {
  if (!F(t))
    throw new Error("Invalid input to extend: expected a plain object");
  const e = n._zod.def.checks;
  if (e && e.length > 0)
    throw new Error("Object schemas containing refinements cannot be extended. Use `.safeExtend()` instead.");
  const o = S(n._zod.def, {
    get shape() {
      const r = { ...n._zod.def.shape, ...t };
      return E(this, "shape", r), r;
    },
    checks: []
  });
  return O(n, o);
}
function ut(n, t) {
  if (!F(t))
    throw new Error("Invalid input to safeExtend: expected a plain object");
  const e = {
    ...n._zod.def,
    get shape() {
      const o = { ...n._zod.def.shape, ...t };
      return E(this, "shape", o), o;
    },
    checks: n._zod.def.checks
  };
  return O(n, e);
}
function dt(n, t) {
  const e = S(n._zod.def, {
    get shape() {
      const o = { ...n._zod.def.shape, ...t._zod.def.shape };
      return E(this, "shape", o), o;
    },
    get catchall() {
      return t._zod.def.catchall;
    },
    checks: []
    // delete existing checks
  });
  return O(n, e);
}
function ft(n, t, e) {
  const o = S(t._zod.def, {
    get shape() {
      const r = t._zod.def.shape, i = { ...r };
      if (e)
        for (const s in e) {
          if (!(s in r))
            throw new Error(`Unrecognized key: "${s}"`);
          e[s] && (i[s] = n ? new n({
            type: "optional",
            innerType: r[s]
          }) : r[s]);
        }
      else
        for (const s in r)
          i[s] = n ? new n({
            type: "optional",
            innerType: r[s]
          }) : r[s];
      return E(this, "shape", i), i;
    },
    checks: []
  });
  return O(t, o);
}
function lt(n, t, e) {
  const o = S(t._zod.def, {
    get shape() {
      const r = t._zod.def.shape, i = { ...r };
      if (e)
        for (const s in e) {
          if (!(s in i))
            throw new Error(`Unrecognized key: "${s}"`);
          e[s] && (i[s] = new n({
            type: "nonoptional",
            innerType: r[s]
          }));
        }
      else
        for (const s in r)
          i[s] = new n({
            type: "nonoptional",
            innerType: r[s]
          });
      return E(this, "shape", i), i;
    },
    checks: []
  });
  return O(t, o);
}
function P(n, t = 0) {
  if (n.aborted === !0)
    return !0;
  for (let e = t; e < n.issues.length; e++)
    if (n.issues[e]?.continue !== !0)
      return !0;
  return !1;
}
function Pn(n, t) {
  return t.map((e) => {
    var o;
    return (o = e).path ?? (o.path = []), e.path.unshift(n), e;
  });
}
function D(n) {
  return typeof n == "string" ? n : n?.message;
}
function j(n, t, e) {
  const o = { ...n, path: n.path ?? [] };
  if (!n.message) {
    const r = D(n.inst?._zod.def?.error?.(n)) ?? D(t?.error?.(n)) ?? D(e.customError?.(n)) ?? D(e.localeError?.(n)) ?? "Invalid input";
    o.message = r;
  }
  return delete o.inst, delete o.continue, t?.reportInput || delete o.input, o;
}
function rn(n) {
  return Array.isArray(n) ? "array" : typeof n == "string" ? "string" : "unknown";
}
function C(...n) {
  const [t, e, o] = n;
  return typeof t == "string" ? {
    message: t,
    code: "custom",
    input: e,
    inst: o
  } : { ...t };
}
const An = (n, t) => {
  n.name = "$ZodError", Object.defineProperty(n, "_zod", {
    value: n._zod,
    enumerable: !1
  }), Object.defineProperty(n, "issues", {
    value: t,
    enumerable: !1
  }), n.message = JSON.stringify(t, Y, 2), Object.defineProperty(n, "toString", {
    value: () => n.message,
    enumerable: !1
  });
}, In = a("$ZodError", An), Tn = a("$ZodError", An, { Parent: Error });
function pt(n, t = (e) => e.message) {
  const e = {}, o = [];
  for (const r of n.issues)
    r.path.length > 0 ? (e[r.path[0]] = e[r.path[0]] || [], e[r.path[0]].push(t(r))) : o.push(t(r));
  return { formErrors: o, fieldErrors: e };
}
function ht(n, t = (e) => e.message) {
  const e = { _errors: [] }, o = (r) => {
    for (const i of r.issues)
      if (i.code === "invalid_union" && i.errors.length)
        i.errors.map((s) => o({ issues: s }));
      else if (i.code === "invalid_key")
        o({ issues: i.issues });
      else if (i.code === "invalid_element")
        o({ issues: i.issues });
      else if (i.path.length === 0)
        e._errors.push(t(i));
      else {
        let s = e, c = 0;
        for (; c < i.path.length; ) {
          const u = i.path[c];
          c === i.path.length - 1 ? (s[u] = s[u] || { _errors: [] }, s[u]._errors.push(t(i))) : s[u] = s[u] || { _errors: [] }, s = s[u], c++;
        }
      }
  };
  return o(n), e;
}
const sn = (n) => (t, e, o, r) => {
  const i = o ? Object.assign(o, { async: !1 }) : { async: !1 }, s = t._zod.run({ value: e, issues: [] }, i);
  if (s instanceof Promise)
    throw new I();
  if (s.issues.length) {
    const c = new (r?.Err ?? n)(s.issues.map((u) => j(u, i, x())));
    throw En(c, r?.callee), c;
  }
  return s.value;
}, an = (n) => async (t, e, o, r) => {
  const i = o ? Object.assign(o, { async: !0 }) : { async: !0 };
  let s = t._zod.run({ value: e, issues: [] }, i);
  if (s instanceof Promise && (s = await s), s.issues.length) {
    const c = new (r?.Err ?? n)(s.issues.map((u) => j(u, i, x())));
    throw En(c, r?.callee), c;
  }
  return s.value;
}, K = (n) => (t, e, o) => {
  const r = o ? { ...o, async: !1 } : { async: !1 }, i = t._zod.run({ value: e, issues: [] }, r);
  if (i instanceof Promise)
    throw new I();
  return i.issues.length ? {
    success: !1,
    error: new (n ?? In)(i.issues.map((s) => j(s, r, x())))
  } : { success: !0, data: i.value };
}, mt = /* @__PURE__ */ K(Tn), G = (n) => async (t, e, o) => {
  const r = o ? Object.assign(o, { async: !0 }) : { async: !0 };
  let i = t._zod.run({ value: e, issues: [] }, r);
  return i instanceof Promise && (i = await i), i.issues.length ? {
    success: !1,
    error: new n(i.issues.map((s) => j(s, r, x())))
  } : { success: !0, data: i.value };
}, gt = /* @__PURE__ */ G(Tn), vt = (n) => (t, e, o) => {
  const r = o ? Object.assign(o, { direction: "backward" }) : { direction: "backward" };
  return sn(n)(t, e, r);
}, yt = (n) => (t, e, o) => sn(n)(t, e, o), _t = (n) => async (t, e, o) => {
  const r = o ? Object.assign(o, { direction: "backward" }) : { direction: "backward" };
  return an(n)(t, e, r);
}, wt = (n) => async (t, e, o) => an(n)(t, e, o), zt = (n) => (t, e, o) => {
  const r = o ? Object.assign(o, { direction: "backward" }) : { direction: "backward" };
  return K(n)(t, e, r);
}, bt = (n) => (t, e, o) => K(n)(t, e, o), kt = (n) => async (t, e, o) => {
  const r = o ? Object.assign(o, { direction: "backward" }) : { direction: "backward" };
  return G(n)(t, e, r);
}, $t = (n) => async (t, e, o) => G(n)(t, e, o), Zt = /^[cC][^\s-]{8,}$/, Ot = /^[0-9a-z]+$/, xt = /^[0-9A-HJKMNP-TV-Za-hjkmnp-tv-z]{26}$/, jt = /^[0-9a-vA-V]{20}$/, Et = /^[A-Za-z0-9]{27}$/, St = /^[a-zA-Z0-9_-]{21}$/, Pt = /^P(?:(\d+W)|(?!.*W)(?=\d|T\d)(\d+Y)?(\d+M)?(\d+D)?(T(?=\d)(\d+H)?(\d+M)?(\d+([.,]\d+)?S)?)?)$/, At = /^([0-9a-fA-F]{8}-[0-9a-fA-F]{4}-[0-9a-fA-F]{4}-[0-9a-fA-F]{4}-[0-9a-fA-F]{12})$/, ln = (n) => n ? new RegExp(`^([0-9a-fA-F]{8}-[0-9a-fA-F]{4}-${n}[0-9a-fA-F]{3}-[89abAB][0-9a-fA-F]{3}-[0-9a-fA-F]{12})$`) : /^([0-9a-fA-F]{8}-[0-9a-fA-F]{4}-[1-8][0-9a-fA-F]{3}-[89abAB][0-9a-fA-F]{3}-[0-9a-fA-F]{12}|00000000-0000-0000-0000-000000000000|ffffffff-ffff-ffff-ffff-ffffffffffff)$/, It = /^(?!\.)(?!.*\.\.)([A-Za-z0-9_'+\-\.]*)[A-Za-z0-9_+-]@([A-Za-z0-9][A-Za-z0-9\-]*\.)+[A-Za-z]{2,}$/, Tt = "^(\\p{Extended_Pictographic}|\\p{Emoji_Component})+$";
function Nt() {
  return new RegExp(Tt, "u");
}
const Ft = /^(?:(?:25[0-5]|2[0-4][0-9]|1[0-9][0-9]|[1-9][0-9]|[0-9])\.){3}(?:25[0-5]|2[0-4][0-9]|1[0-9][0-9]|[1-9][0-9]|[0-9])$/, Ct = /^(([0-9a-fA-F]{1,4}:){7}[0-9a-fA-F]{1,4}|([0-9a-fA-F]{1,4}:){1,7}:|([0-9a-fA-F]{1,4}:){1,6}:[0-9a-fA-F]{1,4}|([0-9a-fA-F]{1,4}:){1,5}(:[0-9a-fA-F]{1,4}){1,2}|([0-9a-fA-F]{1,4}:){1,4}(:[0-9a-fA-F]{1,4}){1,3}|([0-9a-fA-F]{1,4}:){1,3}(:[0-9a-fA-F]{1,4}){1,4}|([0-9a-fA-F]{1,4}:){1,2}(:[0-9a-fA-F]{1,4}){1,5}|[0-9a-fA-F]{1,4}:((:[0-9a-fA-F]{1,4}){1,6})|:((:[0-9a-fA-F]{1,4}){1,7}|:))$/, Jt = /^((25[0-5]|2[0-4][0-9]|1[0-9][0-9]|[1-9][0-9]|[0-9])\.){3}(25[0-5]|2[0-4][0-9]|1[0-9][0-9]|[1-9][0-9]|[0-9])\/([0-9]|[1-2][0-9]|3[0-2])$/, Dt = /^(([0-9a-fA-F]{1,4}:){7}[0-9a-fA-F]{1,4}|::|([0-9a-fA-F]{1,4})?::([0-9a-fA-F]{1,4}:?){0,6})\/(12[0-8]|1[01][0-9]|[1-9]?[0-9])$/, Rt = /^$|^(?:[0-9a-zA-Z+/]{4})*(?:(?:[0-9a-zA-Z+/]{2}==)|(?:[0-9a-zA-Z+/]{3}=))?$/, Nn = /^[A-Za-z0-9_-]*$/, Ut = /^(?=.{1,253}\.?$)[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?(?:\.[a-zA-Z0-9](?:[-0-9a-zA-Z]{0,61}[0-9a-zA-Z])?)*\.?$/, Vt = /^\+(?:[0-9]){6,14}[0-9]$/, Fn = "(?:(?:\\d\\d[2468][048]|\\d\\d[13579][26]|\\d\\d0[48]|[02468][048]00|[13579][26]00)-02-29|\\d{4}-(?:(?:0[13578]|1[02])-(?:0[1-9]|[12]\\d|3[01])|(?:0[469]|11)-(?:0[1-9]|[12]\\d|30)|(?:02)-(?:0[1-9]|1\\d|2[0-8])))", Lt = /* @__PURE__ */ new RegExp(`^${Fn}$`);
function Cn(n) {
  const t = "(?:[01]\\d|2[0-3]):[0-5]\\d";
  return typeof n.precision == "number" ? n.precision === -1 ? `${t}` : n.precision === 0 ? `${t}:[0-5]\\d` : `${t}:[0-5]\\d\\.\\d{${n.precision}}` : `${t}(?::[0-5]\\d(?:\\.\\d+)?)?`;
}
function Wt(n) {
  return new RegExp(`^${Cn(n)}$`);
}
function Mt(n) {
  const t = Cn({ precision: n.precision }), e = ["Z"];
  n.local && e.push(""), n.offset && e.push("([+-](?:[01]\\d|2[0-3]):[0-5]\\d)");
  const o = `${t}(?:${e.join("|")})`;
  return new RegExp(`^${Fn}T(?:${o})$`);
}
const Bt = (n) => {
  const t = n ? `[\\s\\S]{${n?.minimum ?? 0},${n?.maximum ?? ""}}` : "[\\s\\S]*";
  return new RegExp(`^${t}$`);
}, Kt = /^[^A-Z]*$/, Gt = /^[^a-z]*$/, $ = /* @__PURE__ */ a("$ZodCheck", (n, t) => {
  var e;
  n._zod ?? (n._zod = {}), n._zod.def = t, (e = n._zod).onattach ?? (e.onattach = []);
}), Ht = /* @__PURE__ */ a("$ZodCheckMaxLength", (n, t) => {
  var e;
  $.init(n, t), (e = n._zod.def).when ?? (e.when = (o) => {
    const r = o.value;
    return !en(r) && r.length !== void 0;
  }), n._zod.onattach.push((o) => {
    const r = o._zod.bag.maximum ?? Number.POSITIVE_INFINITY;
    t.maximum < r && (o._zod.bag.maximum = t.maximum);
  }), n._zod.check = (o) => {
    const r = o.value;
    if (r.length <= t.maximum)
      return;
    const i = rn(r);
    o.issues.push({
      origin: i,
      code: "too_big",
      maximum: t.maximum,
      inclusive: !0,
      input: r,
      inst: n,
      continue: !t.abort
    });
  };
}), qt = /* @__PURE__ */ a("$ZodCheckMinLength", (n, t) => {
  var e;
  $.init(n, t), (e = n._zod.def).when ?? (e.when = (o) => {
    const r = o.value;
    return !en(r) && r.length !== void 0;
  }), n._zod.onattach.push((o) => {
    const r = o._zod.bag.minimum ?? Number.NEGATIVE_INFINITY;
    t.minimum > r && (o._zod.bag.minimum = t.minimum);
  }), n._zod.check = (o) => {
    const r = o.value;
    if (r.length >= t.minimum)
      return;
    const i = rn(r);
    o.issues.push({
      origin: i,
      code: "too_small",
      minimum: t.minimum,
      inclusive: !0,
      input: r,
      inst: n,
      continue: !t.abort
    });
  };
}), Yt = /* @__PURE__ */ a("$ZodCheckLengthEquals", (n, t) => {
  var e;
  $.init(n, t), (e = n._zod.def).when ?? (e.when = (o) => {
    const r = o.value;
    return !en(r) && r.length !== void 0;
  }), n._zod.onattach.push((o) => {
    const r = o._zod.bag;
    r.minimum = t.length, r.maximum = t.length, r.length = t.length;
  }), n._zod.check = (o) => {
    const r = o.value, i = r.length;
    if (i === t.length)
      return;
    const s = rn(r), c = i > t.length;
    o.issues.push({
      origin: s,
      ...c ? { code: "too_big", maximum: t.length } : { code: "too_small", minimum: t.length },
      inclusive: !0,
      exact: !0,
      input: o.value,
      inst: n,
      continue: !t.abort
    });
  };
}), H = /* @__PURE__ */ a("$ZodCheckStringFormat", (n, t) => {
  var e, o;
  $.init(n, t), n._zod.onattach.push((r) => {
    const i = r._zod.bag;
    i.format = t.format, t.pattern && (i.patterns ?? (i.patterns = /* @__PURE__ */ new Set()), i.patterns.add(t.pattern));
  }), t.pattern ? (e = n._zod).check ?? (e.check = (r) => {
    t.pattern.lastIndex = 0, !t.pattern.test(r.value) && r.issues.push({
      origin: "string",
      code: "invalid_format",
      format: t.format,
      input: r.value,
      ...t.pattern ? { pattern: t.pattern.toString() } : {},
      inst: n,
      continue: !t.abort
    });
  }) : (o = n._zod).check ?? (o.check = () => {
  });
}), Xt = /* @__PURE__ */ a("$ZodCheckRegex", (n, t) => {
  H.init(n, t), n._zod.check = (e) => {
    t.pattern.lastIndex = 0, !t.pattern.test(e.value) && e.issues.push({
      origin: "string",
      code: "invalid_format",
      format: "regex",
      input: e.value,
      pattern: t.pattern.toString(),
      inst: n,
      continue: !t.abort
    });
  };
}), Qt = /* @__PURE__ */ a("$ZodCheckLowerCase", (n, t) => {
  t.pattern ?? (t.pattern = Kt), H.init(n, t);
}), ne = /* @__PURE__ */ a("$ZodCheckUpperCase", (n, t) => {
  t.pattern ?? (t.pattern = Gt), H.init(n, t);
}), te = /* @__PURE__ */ a("$ZodCheckIncludes", (n, t) => {
  $.init(n, t);
  const e = B(t.includes), o = new RegExp(typeof t.position == "number" ? `^.{${t.position}}${e}` : e);
  t.pattern = o, n._zod.onattach.push((r) => {
    const i = r._zod.bag;
    i.patterns ?? (i.patterns = /* @__PURE__ */ new Set()), i.patterns.add(o);
  }), n._zod.check = (r) => {
    r.value.includes(t.includes, t.position) || r.issues.push({
      origin: "string",
      code: "invalid_format",
      format: "includes",
      includes: t.includes,
      input: r.value,
      inst: n,
      continue: !t.abort
    });
  };
}), ee = /* @__PURE__ */ a("$ZodCheckStartsWith", (n, t) => {
  $.init(n, t);
  const e = new RegExp(`^${B(t.prefix)}.*`);
  t.pattern ?? (t.pattern = e), n._zod.onattach.push((o) => {
    const r = o._zod.bag;
    r.patterns ?? (r.patterns = /* @__PURE__ */ new Set()), r.patterns.add(e);
  }), n._zod.check = (o) => {
    o.value.startsWith(t.prefix) || o.issues.push({
      origin: "string",
      code: "invalid_format",
      format: "starts_with",
      prefix: t.prefix,
      input: o.value,
      inst: n,
      continue: !t.abort
    });
  };
}), oe = /* @__PURE__ */ a("$ZodCheckEndsWith", (n, t) => {
  $.init(n, t);
  const e = new RegExp(`.*${B(t.suffix)}$`);
  t.pattern ?? (t.pattern = e), n._zod.onattach.push((o) => {
    const r = o._zod.bag;
    r.patterns ?? (r.patterns = /* @__PURE__ */ new Set()), r.patterns.add(e);
  }), n._zod.check = (o) => {
    o.value.endsWith(t.suffix) || o.issues.push({
      origin: "string",
      code: "invalid_format",
      format: "ends_with",
      suffix: t.suffix,
      input: o.value,
      inst: n,
      continue: !t.abort
    });
  };
}), re = /* @__PURE__ */ a("$ZodCheckOverwrite", (n, t) => {
  $.init(n, t), n._zod.check = (e) => {
    e.value = t.tx(e.value);
  };
});
class ie {
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
    const e = t.split(`
`).filter((i) => i), o = Math.min(...e.map((i) => i.length - i.trimStart().length)), r = e.map((i) => i.slice(o)).map((i) => " ".repeat(this.indent * 2) + i);
    for (const i of r)
      this.content.push(i);
  }
  compile() {
    const t = Function, e = this?.args, o = [...(this?.content ?? [""]).map((r) => `  ${r}`)];
    return new t(...e, o.join(`
`));
  }
}
const se = {
  major: 4,
  minor: 1,
  patch: 12
}, _ = /* @__PURE__ */ a("$ZodType", (n, t) => {
  var e;
  n ?? (n = {}), n._zod.def = t, n._zod.bag = n._zod.bag || {}, n._zod.version = se;
  const o = [...n._zod.def.checks ?? []];
  n._zod.traits.has("$ZodCheck") && o.unshift(n);
  for (const r of o)
    for (const i of r._zod.onattach)
      i(n);
  if (o.length === 0)
    (e = n._zod).deferred ?? (e.deferred = []), n._zod.deferred?.push(() => {
      n._zod.run = n._zod.parse;
    });
  else {
    const r = (s, c, u) => {
      let d = P(s), l;
      for (const p of c) {
        if (p._zod.def.when) {
          if (!p._zod.def.when(s))
            continue;
        } else if (d)
          continue;
        const m = s.issues.length, z = p._zod.check(s);
        if (z instanceof Promise && u?.async === !1)
          throw new I();
        if (l || z instanceof Promise)
          l = (l ?? Promise.resolve()).then(async () => {
            await z, s.issues.length !== m && (d || (d = P(s, m)));
          });
        else {
          if (s.issues.length === m)
            continue;
          d || (d = P(s, m));
        }
      }
      return l ? l.then(() => s) : s;
    }, i = (s, c, u) => {
      if (P(s))
        return s.aborted = !0, s;
      const d = r(c, o, u);
      if (d instanceof Promise) {
        if (u.async === !1)
          throw new I();
        return d.then((l) => n._zod.parse(l, u));
      }
      return n._zod.parse(d, u);
    };
    n._zod.run = (s, c) => {
      if (c.skipChecks)
        return n._zod.parse(s, c);
      if (c.direction === "backward") {
        const d = n._zod.parse({ value: s.value, issues: [] }, { ...c, skipChecks: !0 });
        return d instanceof Promise ? d.then((l) => i(l, s, c)) : i(d, s, c);
      }
      const u = n._zod.parse(s, c);
      if (u instanceof Promise) {
        if (c.async === !1)
          throw new I();
        return u.then((d) => r(d, o, c));
      }
      return r(u, o, c);
    };
  }
  n["~standard"] = {
    validate: (r) => {
      try {
        const i = mt(n, r);
        return i.success ? { value: i.data } : { issues: i.error?.issues };
      } catch {
        return gt(n, r).then((i) => i.success ? { value: i.data } : { issues: i.error?.issues });
      }
    },
    vendor: "zod",
    version: 1
  };
}), cn = /* @__PURE__ */ a("$ZodString", (n, t) => {
  _.init(n, t), n._zod.pattern = [...n?._zod.bag?.patterns ?? []].pop() ?? Bt(n._zod.bag), n._zod.parse = (e, o) => {
    if (t.coerce)
      try {
        e.value = String(e.value);
      } catch {
      }
    return typeof e.value == "string" || e.issues.push({
      expected: "string",
      code: "invalid_type",
      input: e.value,
      inst: n
    }), e;
  };
}), v = /* @__PURE__ */ a("$ZodStringFormat", (n, t) => {
  H.init(n, t), cn.init(n, t);
}), ae = /* @__PURE__ */ a("$ZodGUID", (n, t) => {
  t.pattern ?? (t.pattern = At), v.init(n, t);
}), ce = /* @__PURE__ */ a("$ZodUUID", (n, t) => {
  if (t.version) {
    const e = {
      v1: 1,
      v2: 2,
      v3: 3,
      v4: 4,
      v5: 5,
      v6: 6,
      v7: 7,
      v8: 8
    }[t.version];
    if (e === void 0)
      throw new Error(`Invalid UUID version: "${t.version}"`);
    t.pattern ?? (t.pattern = ln(e));
  } else
    t.pattern ?? (t.pattern = ln());
  v.init(n, t);
}), ue = /* @__PURE__ */ a("$ZodEmail", (n, t) => {
  t.pattern ?? (t.pattern = It), v.init(n, t);
}), de = /* @__PURE__ */ a("$ZodURL", (n, t) => {
  v.init(n, t), n._zod.check = (e) => {
    try {
      const o = e.value.trim(), r = new URL(o);
      t.hostname && (t.hostname.lastIndex = 0, t.hostname.test(r.hostname) || e.issues.push({
        code: "invalid_format",
        format: "url",
        note: "Invalid hostname",
        pattern: Ut.source,
        input: e.value,
        inst: n,
        continue: !t.abort
      })), t.protocol && (t.protocol.lastIndex = 0, t.protocol.test(r.protocol.endsWith(":") ? r.protocol.slice(0, -1) : r.protocol) || e.issues.push({
        code: "invalid_format",
        format: "url",
        note: "Invalid protocol",
        pattern: t.protocol.source,
        input: e.value,
        inst: n,
        continue: !t.abort
      })), t.normalize ? e.value = r.href : e.value = o;
      return;
    } catch {
      e.issues.push({
        code: "invalid_format",
        format: "url",
        input: e.value,
        inst: n,
        continue: !t.abort
      });
    }
  };
}), fe = /* @__PURE__ */ a("$ZodEmoji", (n, t) => {
  t.pattern ?? (t.pattern = Nt()), v.init(n, t);
}), le = /* @__PURE__ */ a("$ZodNanoID", (n, t) => {
  t.pattern ?? (t.pattern = St), v.init(n, t);
}), pe = /* @__PURE__ */ a("$ZodCUID", (n, t) => {
  t.pattern ?? (t.pattern = Zt), v.init(n, t);
}), he = /* @__PURE__ */ a("$ZodCUID2", (n, t) => {
  t.pattern ?? (t.pattern = Ot), v.init(n, t);
}), me = /* @__PURE__ */ a("$ZodULID", (n, t) => {
  t.pattern ?? (t.pattern = xt), v.init(n, t);
}), ge = /* @__PURE__ */ a("$ZodXID", (n, t) => {
  t.pattern ?? (t.pattern = jt), v.init(n, t);
}), ve = /* @__PURE__ */ a("$ZodKSUID", (n, t) => {
  t.pattern ?? (t.pattern = Et), v.init(n, t);
}), ye = /* @__PURE__ */ a("$ZodISODateTime", (n, t) => {
  t.pattern ?? (t.pattern = Mt(t)), v.init(n, t);
}), _e = /* @__PURE__ */ a("$ZodISODate", (n, t) => {
  t.pattern ?? (t.pattern = Lt), v.init(n, t);
}), we = /* @__PURE__ */ a("$ZodISOTime", (n, t) => {
  t.pattern ?? (t.pattern = Wt(t)), v.init(n, t);
}), ze = /* @__PURE__ */ a("$ZodISODuration", (n, t) => {
  t.pattern ?? (t.pattern = Pt), v.init(n, t);
}), be = /* @__PURE__ */ a("$ZodIPv4", (n, t) => {
  t.pattern ?? (t.pattern = Ft), v.init(n, t), n._zod.onattach.push((e) => {
    const o = e._zod.bag;
    o.format = "ipv4";
  });
}), ke = /* @__PURE__ */ a("$ZodIPv6", (n, t) => {
  t.pattern ?? (t.pattern = Ct), v.init(n, t), n._zod.onattach.push((e) => {
    const o = e._zod.bag;
    o.format = "ipv6";
  }), n._zod.check = (e) => {
    try {
      new URL(`http://[${e.value}]`);
    } catch {
      e.issues.push({
        code: "invalid_format",
        format: "ipv6",
        input: e.value,
        inst: n,
        continue: !t.abort
      });
    }
  };
}), $e = /* @__PURE__ */ a("$ZodCIDRv4", (n, t) => {
  t.pattern ?? (t.pattern = Jt), v.init(n, t);
}), Ze = /* @__PURE__ */ a("$ZodCIDRv6", (n, t) => {
  t.pattern ?? (t.pattern = Dt), v.init(n, t), n._zod.check = (e) => {
    const o = e.value.split("/");
    try {
      if (o.length !== 2)
        throw new Error();
      const [r, i] = o;
      if (!i)
        throw new Error();
      const s = Number(i);
      if (`${s}` !== i)
        throw new Error();
      if (s < 0 || s > 128)
        throw new Error();
      new URL(`http://[${r}]`);
    } catch {
      e.issues.push({
        code: "invalid_format",
        format: "cidrv6",
        input: e.value,
        inst: n,
        continue: !t.abort
      });
    }
  };
});
function Jn(n) {
  if (n === "")
    return !0;
  if (n.length % 4 !== 0)
    return !1;
  try {
    return atob(n), !0;
  } catch {
    return !1;
  }
}
const Oe = /* @__PURE__ */ a("$ZodBase64", (n, t) => {
  t.pattern ?? (t.pattern = Rt), v.init(n, t), n._zod.onattach.push((e) => {
    e._zod.bag.contentEncoding = "base64";
  }), n._zod.check = (e) => {
    Jn(e.value) || e.issues.push({
      code: "invalid_format",
      format: "base64",
      input: e.value,
      inst: n,
      continue: !t.abort
    });
  };
});
function xe(n) {
  if (!Nn.test(n))
    return !1;
  const t = n.replace(/[-_]/g, (o) => o === "-" ? "+" : "/"), e = t.padEnd(Math.ceil(t.length / 4) * 4, "=");
  return Jn(e);
}
const je = /* @__PURE__ */ a("$ZodBase64URL", (n, t) => {
  t.pattern ?? (t.pattern = Nn), v.init(n, t), n._zod.onattach.push((e) => {
    e._zod.bag.contentEncoding = "base64url";
  }), n._zod.check = (e) => {
    xe(e.value) || e.issues.push({
      code: "invalid_format",
      format: "base64url",
      input: e.value,
      inst: n,
      continue: !t.abort
    });
  };
}), Ee = /* @__PURE__ */ a("$ZodE164", (n, t) => {
  t.pattern ?? (t.pattern = Vt), v.init(n, t);
});
function Se(n, t = null) {
  try {
    const e = n.split(".");
    if (e.length !== 3)
      return !1;
    const [o] = e;
    if (!o)
      return !1;
    const r = JSON.parse(atob(o));
    return !("typ" in r && r?.typ !== "JWT" || !r.alg || t && (!("alg" in r) || r.alg !== t));
  } catch {
    return !1;
  }
}
const Pe = /* @__PURE__ */ a("$ZodJWT", (n, t) => {
  v.init(n, t), n._zod.check = (e) => {
    Se(e.value, t.alg) || e.issues.push({
      code: "invalid_format",
      format: "jwt",
      input: e.value,
      inst: n,
      continue: !t.abort
    });
  };
}), Ae = /* @__PURE__ */ a("$ZodUnknown", (n, t) => {
  _.init(n, t), n._zod.parse = (e) => e;
}), Ie = /* @__PURE__ */ a("$ZodNever", (n, t) => {
  _.init(n, t), n._zod.parse = (e, o) => (e.issues.push({
    expected: "never",
    code: "invalid_type",
    input: e.value,
    inst: n
  }), e);
});
function pn(n, t, e) {
  n.issues.length && t.issues.push(...Pn(e, n.issues)), t.value[e] = n.value;
}
const Te = /* @__PURE__ */ a("$ZodArray", (n, t) => {
  _.init(n, t), n._zod.parse = (e, o) => {
    const r = e.value;
    if (!Array.isArray(r))
      return e.issues.push({
        expected: "array",
        code: "invalid_type",
        input: r,
        inst: n
      }), e;
    e.value = Array(r.length);
    const i = [];
    for (let s = 0; s < r.length; s++) {
      const c = r[s], u = t.element._zod.run({
        value: c,
        issues: []
      }, o);
      u instanceof Promise ? i.push(u.then((d) => pn(d, e, s))) : pn(u, e, s);
    }
    return i.length ? Promise.all(i).then(() => e) : e;
  };
});
function W(n, t, e, o) {
  n.issues.length && t.issues.push(...Pn(e, n.issues)), n.value === void 0 ? e in o && (t.value[e] = void 0) : t.value[e] = n.value;
}
function Dn(n) {
  const t = Object.keys(n.shape);
  for (const o of t)
    if (!n.shape?.[o]?._zod?.traits?.has("$ZodType"))
      throw new Error(`Invalid element at key "${o}": expected a Zod schema`);
  const e = it(n.shape);
  return {
    ...n,
    keys: t,
    keySet: new Set(t),
    numKeys: t.length,
    optionalKeys: new Set(e)
  };
}
function Rn(n, t, e, o, r, i) {
  const s = [], c = r.keySet, u = r.catchall._zod, d = u.def.type;
  for (const l of Object.keys(t)) {
    if (c.has(l))
      continue;
    if (d === "never") {
      s.push(l);
      continue;
    }
    const p = u.run({ value: t[l], issues: [] }, o);
    p instanceof Promise ? n.push(p.then((m) => W(m, e, l, t))) : W(p, e, l, t);
  }
  return s.length && e.issues.push({
    code: "unrecognized_keys",
    keys: s,
    input: t,
    inst: i
  }), n.length ? Promise.all(n).then(() => e) : e;
}
const Ne = /* @__PURE__ */ a("$ZodObject", (n, t) => {
  if (_.init(n, t), !Object.getOwnPropertyDescriptor(t, "shape")?.get) {
    const s = t.shape;
    Object.defineProperty(t, "shape", {
      get: () => {
        const c = { ...s };
        return Object.defineProperty(t, "shape", {
          value: c
        }), c;
      }
    });
  }
  const e = tn(() => Dn(t));
  g(n._zod, "propValues", () => {
    const s = t.shape, c = {};
    for (const u in s) {
      const d = s[u]._zod;
      if (d.values) {
        c[u] ?? (c[u] = /* @__PURE__ */ new Set());
        for (const l of d.values)
          c[u].add(l);
      }
    }
    return c;
  });
  const o = L, r = t.catchall;
  let i;
  n._zod.parse = (s, c) => {
    i ?? (i = e.value);
    const u = s.value;
    if (!o(u))
      return s.issues.push({
        expected: "object",
        code: "invalid_type",
        input: u,
        inst: n
      }), s;
    s.value = {};
    const d = [], l = i.shape;
    for (const p of i.keys) {
      const m = l[p]._zod.run({ value: u[p], issues: [] }, c);
      m instanceof Promise ? d.push(m.then((z) => W(z, s, p, u))) : W(m, s, p, u);
    }
    return r ? Rn(d, u, s, c, e.value, n) : d.length ? Promise.all(d).then(() => s) : s;
  };
}), Fe = /* @__PURE__ */ a("$ZodObjectJIT", (n, t) => {
  Ne.init(n, t);
  const e = n._zod.parse, o = tn(() => Dn(t)), r = (p) => {
    const m = new ie(["shape", "payload", "ctx"]), z = o.value, Gn = (Z) => {
      const k = fn(Z);
      return `shape[${k}]._zod.run({ value: input[${k}], issues: [] }, ctx)`;
    };
    m.write("const input = payload.value;");
    const un = /* @__PURE__ */ Object.create(null);
    let Hn = 0;
    for (const Z of z.keys)
      un[Z] = `key_${Hn++}`;
    m.write("const newResult = {};");
    for (const Z of z.keys) {
      const k = un[Z], T = fn(Z);
      m.write(`const ${k} = ${Gn(Z)};`), m.write(`
        if (${k}.issues.length) {
          payload.issues = payload.issues.concat(${k}.issues.map(iss => ({
            ...iss,
            path: iss.path ? [${T}, ...iss.path] : [${T}]
          })));
        }
        
        
        if (${k}.value === undefined) {
          if (${T} in input) {
            newResult[${T}] = undefined;
          }
        } else {
          newResult[${T}] = ${k}.value;
        }
        
      `);
    }
    m.write("payload.value = newResult;"), m.write("return payload;");
    const qn = m.compile();
    return (Z, k) => qn(p, Z, k);
  };
  let i;
  const s = L, c = !jn.jitless, u = c && ot.value, d = t.catchall;
  let l;
  n._zod.parse = (p, m) => {
    l ?? (l = o.value);
    const z = p.value;
    return s(z) ? c && u && m?.async === !1 && m.jitless !== !0 ? (i || (i = r(t.shape)), p = i(p, m), d ? Rn([], z, p, m, l, n) : p) : e(p, m) : (p.issues.push({
      expected: "object",
      code: "invalid_type",
      input: z,
      inst: n
    }), p);
  };
});
function hn(n, t, e, o) {
  for (const i of n)
    if (i.issues.length === 0)
      return t.value = i.value, t;
  const r = n.filter((i) => !P(i));
  return r.length === 1 ? (t.value = r[0].value, r[0]) : (t.issues.push({
    code: "invalid_union",
    input: t.value,
    inst: e,
    errors: n.map((i) => i.issues.map((s) => j(s, o, x())))
  }), t);
}
const Ce = /* @__PURE__ */ a("$ZodUnion", (n, t) => {
  _.init(n, t), g(n._zod, "optin", () => t.options.some((r) => r._zod.optin === "optional") ? "optional" : void 0), g(n._zod, "optout", () => t.options.some((r) => r._zod.optout === "optional") ? "optional" : void 0), g(n._zod, "values", () => {
    if (t.options.every((r) => r._zod.values))
      return new Set(t.options.flatMap((r) => Array.from(r._zod.values)));
  }), g(n._zod, "pattern", () => {
    if (t.options.every((r) => r._zod.pattern)) {
      const r = t.options.map((i) => i._zod.pattern);
      return new RegExp(`^(${r.map((i) => on(i.source)).join("|")})$`);
    }
  });
  const e = t.options.length === 1, o = t.options[0]._zod.run;
  n._zod.parse = (r, i) => {
    if (e)
      return o(r, i);
    let s = !1;
    const c = [];
    for (const u of t.options) {
      const d = u._zod.run({
        value: r.value,
        issues: []
      }, i);
      if (d instanceof Promise)
        c.push(d), s = !0;
      else {
        if (d.issues.length === 0)
          return d;
        c.push(d);
      }
    }
    return s ? Promise.all(c).then((u) => hn(u, r, n, i)) : hn(c, r, n, i);
  };
}), Je = /* @__PURE__ */ a("$ZodIntersection", (n, t) => {
  _.init(n, t), n._zod.parse = (e, o) => {
    const r = e.value, i = t.left._zod.run({ value: r, issues: [] }, o), s = t.right._zod.run({ value: r, issues: [] }, o);
    return i instanceof Promise || s instanceof Promise ? Promise.all([i, s]).then(([c, u]) => mn(e, c, u)) : mn(e, i, s);
  };
});
function X(n, t) {
  if (n === t)
    return { valid: !0, data: n };
  if (n instanceof Date && t instanceof Date && +n == +t)
    return { valid: !0, data: n };
  if (F(n) && F(t)) {
    const e = Object.keys(t), o = Object.keys(n).filter((i) => e.indexOf(i) !== -1), r = { ...n, ...t };
    for (const i of o) {
      const s = X(n[i], t[i]);
      if (!s.valid)
        return {
          valid: !1,
          mergeErrorPath: [i, ...s.mergeErrorPath]
        };
      r[i] = s.data;
    }
    return { valid: !0, data: r };
  }
  if (Array.isArray(n) && Array.isArray(t)) {
    if (n.length !== t.length)
      return { valid: !1, mergeErrorPath: [] };
    const e = [];
    for (let o = 0; o < n.length; o++) {
      const r = n[o], i = t[o], s = X(r, i);
      if (!s.valid)
        return {
          valid: !1,
          mergeErrorPath: [o, ...s.mergeErrorPath]
        };
      e.push(s.data);
    }
    return { valid: !0, data: e };
  }
  return { valid: !1, mergeErrorPath: [] };
}
function mn(n, t, e) {
  if (t.issues.length && n.issues.push(...t.issues), e.issues.length && n.issues.push(...e.issues), P(n))
    return n;
  const o = X(t.value, e.value);
  if (!o.valid)
    throw new Error(`Unmergable intersection. Error path: ${JSON.stringify(o.mergeErrorPath)}`);
  return n.value = o.data, n;
}
const De = /* @__PURE__ */ a("$ZodEnum", (n, t) => {
  _.init(n, t);
  const e = et(t.entries), o = new Set(e);
  n._zod.values = o, n._zod.pattern = new RegExp(`^(${e.filter((r) => rt.has(typeof r)).map((r) => typeof r == "string" ? B(r) : r.toString()).join("|")})$`), n._zod.parse = (r, i) => {
    const s = r.value;
    return o.has(s) || r.issues.push({
      code: "invalid_value",
      values: e,
      input: s,
      inst: n
    }), r;
  };
}), Re = /* @__PURE__ */ a("$ZodTransform", (n, t) => {
  _.init(n, t), n._zod.parse = (e, o) => {
    if (o.direction === "backward")
      throw new xn(n.constructor.name);
    const r = t.transform(e.value, e);
    if (o.async)
      return (r instanceof Promise ? r : Promise.resolve(r)).then((i) => (e.value = i, e));
    if (r instanceof Promise)
      throw new I();
    return e.value = r, e;
  };
});
function gn(n, t) {
  return n.issues.length && t === void 0 ? { issues: [], value: void 0 } : n;
}
const Ue = /* @__PURE__ */ a("$ZodOptional", (n, t) => {
  _.init(n, t), n._zod.optin = "optional", n._zod.optout = "optional", g(n._zod, "values", () => t.innerType._zod.values ? /* @__PURE__ */ new Set([...t.innerType._zod.values, void 0]) : void 0), g(n._zod, "pattern", () => {
    const e = t.innerType._zod.pattern;
    return e ? new RegExp(`^(${on(e.source)})?$`) : void 0;
  }), n._zod.parse = (e, o) => {
    if (t.innerType._zod.optin === "optional") {
      const r = t.innerType._zod.run(e, o);
      return r instanceof Promise ? r.then((i) => gn(i, e.value)) : gn(r, e.value);
    }
    return e.value === void 0 ? e : t.innerType._zod.run(e, o);
  };
}), Ve = /* @__PURE__ */ a("$ZodNullable", (n, t) => {
  _.init(n, t), g(n._zod, "optin", () => t.innerType._zod.optin), g(n._zod, "optout", () => t.innerType._zod.optout), g(n._zod, "pattern", () => {
    const e = t.innerType._zod.pattern;
    return e ? new RegExp(`^(${on(e.source)}|null)$`) : void 0;
  }), g(n._zod, "values", () => t.innerType._zod.values ? /* @__PURE__ */ new Set([...t.innerType._zod.values, null]) : void 0), n._zod.parse = (e, o) => e.value === null ? e : t.innerType._zod.run(e, o);
}), Le = /* @__PURE__ */ a("$ZodDefault", (n, t) => {
  _.init(n, t), n._zod.optin = "optional", g(n._zod, "values", () => t.innerType._zod.values), n._zod.parse = (e, o) => {
    if (o.direction === "backward")
      return t.innerType._zod.run(e, o);
    if (e.value === void 0)
      return e.value = t.defaultValue, e;
    const r = t.innerType._zod.run(e, o);
    return r instanceof Promise ? r.then((i) => vn(i, t)) : vn(r, t);
  };
});
function vn(n, t) {
  return n.value === void 0 && (n.value = t.defaultValue), n;
}
const We = /* @__PURE__ */ a("$ZodPrefault", (n, t) => {
  _.init(n, t), n._zod.optin = "optional", g(n._zod, "values", () => t.innerType._zod.values), n._zod.parse = (e, o) => (o.direction === "backward" || e.value === void 0 && (e.value = t.defaultValue), t.innerType._zod.run(e, o));
}), Me = /* @__PURE__ */ a("$ZodNonOptional", (n, t) => {
  _.init(n, t), g(n._zod, "values", () => {
    const e = t.innerType._zod.values;
    return e ? new Set([...e].filter((o) => o !== void 0)) : void 0;
  }), n._zod.parse = (e, o) => {
    const r = t.innerType._zod.run(e, o);
    return r instanceof Promise ? r.then((i) => yn(i, n)) : yn(r, n);
  };
});
function yn(n, t) {
  return !n.issues.length && n.value === void 0 && n.issues.push({
    code: "invalid_type",
    expected: "nonoptional",
    input: n.value,
    inst: t
  }), n;
}
const Be = /* @__PURE__ */ a("$ZodCatch", (n, t) => {
  _.init(n, t), g(n._zod, "optin", () => t.innerType._zod.optin), g(n._zod, "optout", () => t.innerType._zod.optout), g(n._zod, "values", () => t.innerType._zod.values), n._zod.parse = (e, o) => {
    if (o.direction === "backward")
      return t.innerType._zod.run(e, o);
    const r = t.innerType._zod.run(e, o);
    return r instanceof Promise ? r.then((i) => (e.value = i.value, i.issues.length && (e.value = t.catchValue({
      ...e,
      error: {
        issues: i.issues.map((s) => j(s, o, x()))
      },
      input: e.value
    }), e.issues = []), e)) : (e.value = r.value, r.issues.length && (e.value = t.catchValue({
      ...e,
      error: {
        issues: r.issues.map((i) => j(i, o, x()))
      },
      input: e.value
    }), e.issues = []), e);
  };
}), Ke = /* @__PURE__ */ a("$ZodPipe", (n, t) => {
  _.init(n, t), g(n._zod, "values", () => t.in._zod.values), g(n._zod, "optin", () => t.in._zod.optin), g(n._zod, "optout", () => t.out._zod.optout), g(n._zod, "propValues", () => t.in._zod.propValues), n._zod.parse = (e, o) => {
    if (o.direction === "backward") {
      const i = t.out._zod.run(e, o);
      return i instanceof Promise ? i.then((s) => R(s, t.in, o)) : R(i, t.in, o);
    }
    const r = t.in._zod.run(e, o);
    return r instanceof Promise ? r.then((i) => R(i, t.out, o)) : R(r, t.out, o);
  };
});
function R(n, t, e) {
  return n.issues.length ? (n.aborted = !0, n) : t._zod.run({ value: n.value, issues: n.issues }, e);
}
const Ge = /* @__PURE__ */ a("$ZodReadonly", (n, t) => {
  _.init(n, t), g(n._zod, "propValues", () => t.innerType._zod.propValues), g(n._zod, "values", () => t.innerType._zod.values), g(n._zod, "optin", () => t.innerType._zod.optin), g(n._zod, "optout", () => t.innerType._zod.optout), n._zod.parse = (e, o) => {
    if (o.direction === "backward")
      return t.innerType._zod.run(e, o);
    const r = t.innerType._zod.run(e, o);
    return r instanceof Promise ? r.then(_n) : _n(r);
  };
});
function _n(n) {
  return n.value = Object.freeze(n.value), n;
}
const He = /* @__PURE__ */ a("$ZodCustom", (n, t) => {
  $.init(n, t), _.init(n, t), n._zod.parse = (e, o) => e, n._zod.check = (e) => {
    const o = e.value, r = t.fn(o);
    if (r instanceof Promise)
      return r.then((i) => wn(i, e, o, n));
    wn(r, e, o, n);
  };
});
function wn(n, t, e, o) {
  if (!n) {
    const r = {
      code: "custom",
      input: e,
      inst: o,
      // incorporates params.error into issue reporting
      path: [...o._zod.def.path ?? []],
      // incorporates params.error into issue reporting
      continue: !o._zod.def.abort
      // params: inst._zod.def.params,
    };
    o._zod.def.params && (r.params = o._zod.def.params), t.issues.push(C(r));
  }
}
class qe {
  constructor() {
    this._map = /* @__PURE__ */ new WeakMap(), this._idmap = /* @__PURE__ */ new Map();
  }
  add(t, ...e) {
    const o = e[0];
    if (this._map.set(t, o), o && typeof o == "object" && "id" in o) {
      if (this._idmap.has(o.id))
        throw new Error(`ID ${o.id} already exists in the registry`);
      this._idmap.set(o.id, t);
    }
    return this;
  }
  clear() {
    return this._map = /* @__PURE__ */ new WeakMap(), this._idmap = /* @__PURE__ */ new Map(), this;
  }
  remove(t) {
    const e = this._map.get(t);
    return e && typeof e == "object" && "id" in e && this._idmap.delete(e.id), this._map.delete(t), this;
  }
  get(t) {
    const e = t._zod.parent;
    if (e) {
      const o = { ...this.get(e) ?? {} };
      delete o.id;
      const r = { ...o, ...this._map.get(t) };
      return Object.keys(r).length ? r : void 0;
    }
    return this._map.get(t);
  }
  has(t) {
    return this._map.has(t);
  }
}
function Ye() {
  return new qe();
}
const U = /* @__PURE__ */ Ye();
function Xe(n, t) {
  return new n({
    type: "string",
    ...f(t)
  });
}
function Qe(n, t) {
  return new n({
    type: "string",
    format: "email",
    check: "string_format",
    abort: !1,
    ...f(t)
  });
}
function zn(n, t) {
  return new n({
    type: "string",
    format: "guid",
    check: "string_format",
    abort: !1,
    ...f(t)
  });
}
function no(n, t) {
  return new n({
    type: "string",
    format: "uuid",
    check: "string_format",
    abort: !1,
    ...f(t)
  });
}
function to(n, t) {
  return new n({
    type: "string",
    format: "uuid",
    check: "string_format",
    abort: !1,
    version: "v4",
    ...f(t)
  });
}
function eo(n, t) {
  return new n({
    type: "string",
    format: "uuid",
    check: "string_format",
    abort: !1,
    version: "v6",
    ...f(t)
  });
}
function oo(n, t) {
  return new n({
    type: "string",
    format: "uuid",
    check: "string_format",
    abort: !1,
    version: "v7",
    ...f(t)
  });
}
function ro(n, t) {
  return new n({
    type: "string",
    format: "url",
    check: "string_format",
    abort: !1,
    ...f(t)
  });
}
function io(n, t) {
  return new n({
    type: "string",
    format: "emoji",
    check: "string_format",
    abort: !1,
    ...f(t)
  });
}
function so(n, t) {
  return new n({
    type: "string",
    format: "nanoid",
    check: "string_format",
    abort: !1,
    ...f(t)
  });
}
function ao(n, t) {
  return new n({
    type: "string",
    format: "cuid",
    check: "string_format",
    abort: !1,
    ...f(t)
  });
}
function co(n, t) {
  return new n({
    type: "string",
    format: "cuid2",
    check: "string_format",
    abort: !1,
    ...f(t)
  });
}
function uo(n, t) {
  return new n({
    type: "string",
    format: "ulid",
    check: "string_format",
    abort: !1,
    ...f(t)
  });
}
function fo(n, t) {
  return new n({
    type: "string",
    format: "xid",
    check: "string_format",
    abort: !1,
    ...f(t)
  });
}
function lo(n, t) {
  return new n({
    type: "string",
    format: "ksuid",
    check: "string_format",
    abort: !1,
    ...f(t)
  });
}
function po(n, t) {
  return new n({
    type: "string",
    format: "ipv4",
    check: "string_format",
    abort: !1,
    ...f(t)
  });
}
function ho(n, t) {
  return new n({
    type: "string",
    format: "ipv6",
    check: "string_format",
    abort: !1,
    ...f(t)
  });
}
function mo(n, t) {
  return new n({
    type: "string",
    format: "cidrv4",
    check: "string_format",
    abort: !1,
    ...f(t)
  });
}
function go(n, t) {
  return new n({
    type: "string",
    format: "cidrv6",
    check: "string_format",
    abort: !1,
    ...f(t)
  });
}
function vo(n, t) {
  return new n({
    type: "string",
    format: "base64",
    check: "string_format",
    abort: !1,
    ...f(t)
  });
}
function yo(n, t) {
  return new n({
    type: "string",
    format: "base64url",
    check: "string_format",
    abort: !1,
    ...f(t)
  });
}
function _o(n, t) {
  return new n({
    type: "string",
    format: "e164",
    check: "string_format",
    abort: !1,
    ...f(t)
  });
}
function wo(n, t) {
  return new n({
    type: "string",
    format: "jwt",
    check: "string_format",
    abort: !1,
    ...f(t)
  });
}
function zo(n, t) {
  return new n({
    type: "string",
    format: "datetime",
    check: "string_format",
    offset: !1,
    local: !1,
    precision: null,
    ...f(t)
  });
}
function bo(n, t) {
  return new n({
    type: "string",
    format: "date",
    check: "string_format",
    ...f(t)
  });
}
function ko(n, t) {
  return new n({
    type: "string",
    format: "time",
    check: "string_format",
    precision: null,
    ...f(t)
  });
}
function $o(n, t) {
  return new n({
    type: "string",
    format: "duration",
    check: "string_format",
    ...f(t)
  });
}
function Zo(n) {
  return new n({
    type: "unknown"
  });
}
function Oo(n, t) {
  return new n({
    type: "never",
    ...f(t)
  });
}
function Un(n, t) {
  return new Ht({
    check: "max_length",
    ...f(t),
    maximum: n
  });
}
function M(n, t) {
  return new qt({
    check: "min_length",
    ...f(t),
    minimum: n
  });
}
function Vn(n, t) {
  return new Yt({
    check: "length_equals",
    ...f(t),
    length: n
  });
}
function xo(n, t) {
  return new Xt({
    check: "string_format",
    format: "regex",
    ...f(t),
    pattern: n
  });
}
function jo(n) {
  return new Qt({
    check: "string_format",
    format: "lowercase",
    ...f(n)
  });
}
function Eo(n) {
  return new ne({
    check: "string_format",
    format: "uppercase",
    ...f(n)
  });
}
function So(n, t) {
  return new te({
    check: "string_format",
    format: "includes",
    ...f(t),
    includes: n
  });
}
function Po(n, t) {
  return new ee({
    check: "string_format",
    format: "starts_with",
    ...f(t),
    prefix: n
  });
}
function Ao(n, t) {
  return new oe({
    check: "string_format",
    format: "ends_with",
    ...f(t),
    suffix: n
  });
}
function J(n) {
  return new re({
    check: "overwrite",
    tx: n
  });
}
function Io(n) {
  return J((t) => t.normalize(n));
}
function To() {
  return J((n) => n.trim());
}
function No() {
  return J((n) => n.toLowerCase());
}
function Fo() {
  return J((n) => n.toUpperCase());
}
function Co(n, t, e) {
  return new n({
    type: "array",
    element: t,
    // get element() {
    //   return element;
    // },
    ...f(e)
  });
}
function Jo(n, t, e) {
  return new n({
    type: "custom",
    check: "custom",
    fn: t,
    ...f(e)
  });
}
function Do(n) {
  const t = Ro((e) => (e.addIssue = (o) => {
    if (typeof o == "string")
      e.issues.push(C(o, e.value, t._zod.def));
    else {
      const r = o;
      r.fatal && (r.continue = !1), r.code ?? (r.code = "custom"), r.input ?? (r.input = e.value), r.inst ?? (r.inst = t), r.continue ?? (r.continue = !t._zod.def.abort), e.issues.push(C(r));
    }
  }, n(e.value, e)));
  return t;
}
function Ro(n, t) {
  const e = new $({
    check: "custom",
    ...f(t)
  });
  return e._zod.check = n, e;
}
const Uo = /* @__PURE__ */ a("ZodISODateTime", (n, t) => {
  ye.init(n, t), y.init(n, t);
});
function Vo(n) {
  return zo(Uo, n);
}
const Lo = /* @__PURE__ */ a("ZodISODate", (n, t) => {
  _e.init(n, t), y.init(n, t);
});
function Wo(n) {
  return bo(Lo, n);
}
const Mo = /* @__PURE__ */ a("ZodISOTime", (n, t) => {
  we.init(n, t), y.init(n, t);
});
function Bo(n) {
  return ko(Mo, n);
}
const Ko = /* @__PURE__ */ a("ZodISODuration", (n, t) => {
  ze.init(n, t), y.init(n, t);
});
function Go(n) {
  return $o(Ko, n);
}
const Ho = (n, t) => {
  In.init(n, t), n.name = "ZodError", Object.defineProperties(n, {
    format: {
      value: (e) => ht(n, e)
      // enumerable: false,
    },
    flatten: {
      value: (e) => pt(n, e)
      // enumerable: false,
    },
    addIssue: {
      value: (e) => {
        n.issues.push(e), n.message = JSON.stringify(n.issues, Y, 2);
      }
      // enumerable: false,
    },
    addIssues: {
      value: (e) => {
        n.issues.push(...e), n.message = JSON.stringify(n.issues, Y, 2);
      }
      // enumerable: false,
    },
    isEmpty: {
      get() {
        return n.issues.length === 0;
      }
      // enumerable: false,
    }
  });
}, b = a("ZodError", Ho, {
  Parent: Error
}), qo = /* @__PURE__ */ sn(b), Yo = /* @__PURE__ */ an(b), Xo = /* @__PURE__ */ K(b), Qo = /* @__PURE__ */ G(b), nr = /* @__PURE__ */ vt(b), tr = /* @__PURE__ */ yt(b), er = /* @__PURE__ */ _t(b), or = /* @__PURE__ */ wt(b), rr = /* @__PURE__ */ zt(b), ir = /* @__PURE__ */ bt(b), sr = /* @__PURE__ */ kt(b), ar = /* @__PURE__ */ $t(b), w = /* @__PURE__ */ a("ZodType", (n, t) => (_.init(n, t), n.def = t, n.type = t.type, Object.defineProperty(n, "_def", { value: t }), n.check = (...e) => n.clone(S(t, {
  checks: [
    ...t.checks ?? [],
    ...e.map((o) => typeof o == "function" ? { _zod: { check: o, def: { check: "custom" }, onattach: [] } } : o)
  ]
})), n.clone = (e, o) => O(n, e, o), n.brand = () => n, n.register = (e, o) => (e.add(n, o), n), n.parse = (e, o) => qo(n, e, o, { callee: n.parse }), n.safeParse = (e, o) => Xo(n, e, o), n.parseAsync = async (e, o) => Yo(n, e, o, { callee: n.parseAsync }), n.safeParseAsync = async (e, o) => Qo(n, e, o), n.spa = n.safeParseAsync, n.encode = (e, o) => nr(n, e, o), n.decode = (e, o) => tr(n, e, o), n.encodeAsync = async (e, o) => er(n, e, o), n.decodeAsync = async (e, o) => or(n, e, o), n.safeEncode = (e, o) => rr(n, e, o), n.safeDecode = (e, o) => ir(n, e, o), n.safeEncodeAsync = async (e, o) => sr(n, e, o), n.safeDecodeAsync = async (e, o) => ar(n, e, o), n.refine = (e, o) => n.check(qr(e, o)), n.superRefine = (e) => n.check(Yr(e)), n.overwrite = (e) => n.check(J(e)), n.optional = () => kn(n), n.nullable = () => $n(n), n.nullish = () => kn($n(n)), n.nonoptional = (e) => Lr(n, e), n.array = () => Sr(n), n.or = (e) => Ir([n, e]), n.and = (e) => Nr(n, e), n.transform = (e) => Zn(n, Cr(e)), n.default = (e) => Rr(n, e), n.prefault = (e) => Vr(n, e), n.catch = (e) => Mr(n, e), n.pipe = (e) => Zn(n, e), n.readonly = () => Gr(n), n.describe = (e) => {
  const o = n.clone();
  return U.add(o, { description: e }), o;
}, Object.defineProperty(n, "description", {
  get() {
    return U.get(n)?.description;
  },
  configurable: !0
}), n.meta = (...e) => {
  if (e.length === 0)
    return U.get(n);
  const o = n.clone();
  return U.add(o, e[0]), o;
}, n.isOptional = () => n.safeParse(void 0).success, n.isNullable = () => n.safeParse(null).success, n)), Ln = /* @__PURE__ */ a("_ZodString", (n, t) => {
  cn.init(n, t), w.init(n, t);
  const e = n._zod.bag;
  n.format = e.format ?? null, n.minLength = e.minimum ?? null, n.maxLength = e.maximum ?? null, n.regex = (...o) => n.check(xo(...o)), n.includes = (...o) => n.check(So(...o)), n.startsWith = (...o) => n.check(Po(...o)), n.endsWith = (...o) => n.check(Ao(...o)), n.min = (...o) => n.check(M(...o)), n.max = (...o) => n.check(Un(...o)), n.length = (...o) => n.check(Vn(...o)), n.nonempty = (...o) => n.check(M(1, ...o)), n.lowercase = (o) => n.check(jo(o)), n.uppercase = (o) => n.check(Eo(o)), n.trim = () => n.check(To()), n.normalize = (...o) => n.check(Io(...o)), n.toLowerCase = () => n.check(No()), n.toUpperCase = () => n.check(Fo());
}), cr = /* @__PURE__ */ a("ZodString", (n, t) => {
  cn.init(n, t), Ln.init(n, t), n.email = (e) => n.check(Qe(ur, e)), n.url = (e) => n.check(ro(dr, e)), n.jwt = (e) => n.check(wo(Zr, e)), n.emoji = (e) => n.check(io(fr, e)), n.guid = (e) => n.check(zn(bn, e)), n.uuid = (e) => n.check(no(V, e)), n.uuidv4 = (e) => n.check(to(V, e)), n.uuidv6 = (e) => n.check(eo(V, e)), n.uuidv7 = (e) => n.check(oo(V, e)), n.nanoid = (e) => n.check(so(lr, e)), n.guid = (e) => n.check(zn(bn, e)), n.cuid = (e) => n.check(ao(pr, e)), n.cuid2 = (e) => n.check(co(hr, e)), n.ulid = (e) => n.check(uo(mr, e)), n.base64 = (e) => n.check(vo(br, e)), n.base64url = (e) => n.check(yo(kr, e)), n.xid = (e) => n.check(fo(gr, e)), n.ksuid = (e) => n.check(lo(vr, e)), n.ipv4 = (e) => n.check(po(yr, e)), n.ipv6 = (e) => n.check(ho(_r, e)), n.cidrv4 = (e) => n.check(mo(wr, e)), n.cidrv6 = (e) => n.check(go(zr, e)), n.e164 = (e) => n.check(_o($r, e)), n.datetime = (e) => n.check(Vo(e)), n.date = (e) => n.check(Wo(e)), n.time = (e) => n.check(Bo(e)), n.duration = (e) => n.check(Go(e));
});
function A(n) {
  return Xe(cr, n);
}
const y = /* @__PURE__ */ a("ZodStringFormat", (n, t) => {
  v.init(n, t), Ln.init(n, t);
}), ur = /* @__PURE__ */ a("ZodEmail", (n, t) => {
  ue.init(n, t), y.init(n, t);
}), bn = /* @__PURE__ */ a("ZodGUID", (n, t) => {
  ae.init(n, t), y.init(n, t);
}), V = /* @__PURE__ */ a("ZodUUID", (n, t) => {
  ce.init(n, t), y.init(n, t);
}), dr = /* @__PURE__ */ a("ZodURL", (n, t) => {
  de.init(n, t), y.init(n, t);
}), fr = /* @__PURE__ */ a("ZodEmoji", (n, t) => {
  fe.init(n, t), y.init(n, t);
}), lr = /* @__PURE__ */ a("ZodNanoID", (n, t) => {
  le.init(n, t), y.init(n, t);
}), pr = /* @__PURE__ */ a("ZodCUID", (n, t) => {
  pe.init(n, t), y.init(n, t);
}), hr = /* @__PURE__ */ a("ZodCUID2", (n, t) => {
  he.init(n, t), y.init(n, t);
}), mr = /* @__PURE__ */ a("ZodULID", (n, t) => {
  me.init(n, t), y.init(n, t);
}), gr = /* @__PURE__ */ a("ZodXID", (n, t) => {
  ge.init(n, t), y.init(n, t);
}), vr = /* @__PURE__ */ a("ZodKSUID", (n, t) => {
  ve.init(n, t), y.init(n, t);
}), yr = /* @__PURE__ */ a("ZodIPv4", (n, t) => {
  be.init(n, t), y.init(n, t);
}), _r = /* @__PURE__ */ a("ZodIPv6", (n, t) => {
  ke.init(n, t), y.init(n, t);
}), wr = /* @__PURE__ */ a("ZodCIDRv4", (n, t) => {
  $e.init(n, t), y.init(n, t);
}), zr = /* @__PURE__ */ a("ZodCIDRv6", (n, t) => {
  Ze.init(n, t), y.init(n, t);
}), br = /* @__PURE__ */ a("ZodBase64", (n, t) => {
  Oe.init(n, t), y.init(n, t);
}), kr = /* @__PURE__ */ a("ZodBase64URL", (n, t) => {
  je.init(n, t), y.init(n, t);
}), $r = /* @__PURE__ */ a("ZodE164", (n, t) => {
  Ee.init(n, t), y.init(n, t);
}), Zr = /* @__PURE__ */ a("ZodJWT", (n, t) => {
  Pe.init(n, t), y.init(n, t);
}), Or = /* @__PURE__ */ a("ZodUnknown", (n, t) => {
  Ae.init(n, t), w.init(n, t);
});
function Q() {
  return Zo(Or);
}
const xr = /* @__PURE__ */ a("ZodNever", (n, t) => {
  Ie.init(n, t), w.init(n, t);
});
function jr(n) {
  return Oo(xr, n);
}
const Er = /* @__PURE__ */ a("ZodArray", (n, t) => {
  Te.init(n, t), w.init(n, t), n.element = t.element, n.min = (e, o) => n.check(M(e, o)), n.nonempty = (e) => n.check(M(1, e)), n.max = (e, o) => n.check(Un(e, o)), n.length = (e, o) => n.check(Vn(e, o)), n.unwrap = () => n.element;
});
function Sr(n, t) {
  return Co(Er, n, t);
}
const Pr = /* @__PURE__ */ a("ZodObject", (n, t) => {
  Fe.init(n, t), w.init(n, t), g(n, "shape", () => t.shape), n.keyof = () => Mn(Object.keys(n._zod.def.shape)), n.catchall = (e) => n.clone({ ...n._zod.def, catchall: e }), n.passthrough = () => n.clone({ ...n._zod.def, catchall: Q() }), n.loose = () => n.clone({ ...n._zod.def, catchall: Q() }), n.strict = () => n.clone({ ...n._zod.def, catchall: jr() }), n.strip = () => n.clone({ ...n._zod.def, catchall: void 0 }), n.extend = (e) => ct(n, e), n.safeExtend = (e) => ut(n, e), n.merge = (e) => dt(n, e), n.pick = (e) => st(n, e), n.omit = (e) => at(n, e), n.partial = (...e) => ft(Bn, n, e[0]), n.required = (...e) => lt(Kn, n, e[0]);
});
function Wn(n, t) {
  const e = {
    type: "object",
    shape: n ?? {},
    ...f(t)
  };
  return new Pr(e);
}
const Ar = /* @__PURE__ */ a("ZodUnion", (n, t) => {
  Ce.init(n, t), w.init(n, t), n.options = t.options;
});
function Ir(n, t) {
  return new Ar({
    type: "union",
    options: n,
    ...f(t)
  });
}
const Tr = /* @__PURE__ */ a("ZodIntersection", (n, t) => {
  Je.init(n, t), w.init(n, t);
});
function Nr(n, t) {
  return new Tr({
    type: "intersection",
    left: n,
    right: t
  });
}
const nn = /* @__PURE__ */ a("ZodEnum", (n, t) => {
  De.init(n, t), w.init(n, t), n.enum = t.entries, n.options = Object.values(t.entries);
  const e = new Set(Object.keys(t.entries));
  n.extract = (o, r) => {
    const i = {};
    for (const s of o)
      if (e.has(s))
        i[s] = t.entries[s];
      else
        throw new Error(`Key ${s} not found in enum`);
    return new nn({
      ...t,
      checks: [],
      ...f(r),
      entries: i
    });
  }, n.exclude = (o, r) => {
    const i = { ...t.entries };
    for (const s of o)
      if (e.has(s))
        delete i[s];
      else
        throw new Error(`Key ${s} not found in enum`);
    return new nn({
      ...t,
      checks: [],
      ...f(r),
      entries: i
    });
  };
});
function Mn(n, t) {
  const e = Array.isArray(n) ? Object.fromEntries(n.map((o) => [o, o])) : n;
  return new nn({
    type: "enum",
    entries: e,
    ...f(t)
  });
}
const Fr = /* @__PURE__ */ a("ZodTransform", (n, t) => {
  Re.init(n, t), w.init(n, t), n._zod.parse = (e, o) => {
    if (o.direction === "backward")
      throw new xn(n.constructor.name);
    e.addIssue = (i) => {
      if (typeof i == "string")
        e.issues.push(C(i, e.value, t));
      else {
        const s = i;
        s.fatal && (s.continue = !1), s.code ?? (s.code = "custom"), s.input ?? (s.input = e.value), s.inst ?? (s.inst = n), e.issues.push(C(s));
      }
    };
    const r = t.transform(e.value, e);
    return r instanceof Promise ? r.then((i) => (e.value = i, e)) : (e.value = r, e);
  };
});
function Cr(n) {
  return new Fr({
    type: "transform",
    transform: n
  });
}
const Bn = /* @__PURE__ */ a("ZodOptional", (n, t) => {
  Ue.init(n, t), w.init(n, t), n.unwrap = () => n._zod.def.innerType;
});
function kn(n) {
  return new Bn({
    type: "optional",
    innerType: n
  });
}
const Jr = /* @__PURE__ */ a("ZodNullable", (n, t) => {
  Ve.init(n, t), w.init(n, t), n.unwrap = () => n._zod.def.innerType;
});
function $n(n) {
  return new Jr({
    type: "nullable",
    innerType: n
  });
}
const Dr = /* @__PURE__ */ a("ZodDefault", (n, t) => {
  Le.init(n, t), w.init(n, t), n.unwrap = () => n._zod.def.innerType, n.removeDefault = n.unwrap;
});
function Rr(n, t) {
  return new Dr({
    type: "default",
    innerType: n,
    get defaultValue() {
      return typeof t == "function" ? t() : Sn(t);
    }
  });
}
const Ur = /* @__PURE__ */ a("ZodPrefault", (n, t) => {
  We.init(n, t), w.init(n, t), n.unwrap = () => n._zod.def.innerType;
});
function Vr(n, t) {
  return new Ur({
    type: "prefault",
    innerType: n,
    get defaultValue() {
      return typeof t == "function" ? t() : Sn(t);
    }
  });
}
const Kn = /* @__PURE__ */ a("ZodNonOptional", (n, t) => {
  Me.init(n, t), w.init(n, t), n.unwrap = () => n._zod.def.innerType;
});
function Lr(n, t) {
  return new Kn({
    type: "nonoptional",
    innerType: n,
    ...f(t)
  });
}
const Wr = /* @__PURE__ */ a("ZodCatch", (n, t) => {
  Be.init(n, t), w.init(n, t), n.unwrap = () => n._zod.def.innerType, n.removeCatch = n.unwrap;
});
function Mr(n, t) {
  return new Wr({
    type: "catch",
    innerType: n,
    catchValue: typeof t == "function" ? t : () => t
  });
}
const Br = /* @__PURE__ */ a("ZodPipe", (n, t) => {
  Ke.init(n, t), w.init(n, t), n.in = t.in, n.out = t.out;
});
function Zn(n, t) {
  return new Br({
    type: "pipe",
    in: n,
    out: t
    // ...util.normalizeParams(params),
  });
}
const Kr = /* @__PURE__ */ a("ZodReadonly", (n, t) => {
  Ge.init(n, t), w.init(n, t), n.unwrap = () => n._zod.def.innerType;
});
function Gr(n) {
  return new Kr({
    type: "readonly",
    innerType: n
  });
}
const Hr = /* @__PURE__ */ a("ZodCustom", (n, t) => {
  He.init(n, t), w.init(n, t);
});
function qr(n, t = {}) {
  return Jo(Hr, n, t);
}
function Yr(n) {
  return Do(n);
}
const On = Wn({
  "en-au": A().optional(),
  "en-gb": A().optional(),
  "en-us": A().optional(),
  "es-es": A().optional()
}), Xr = Wn({
  id: A(),
  label: On,
  description: On,
  statusId: Q(),
  typeId: Mn(["app", "engine", "connector", "context", "informer", "presenter"]),
  version: A()
}), N = Qn(Yn);
async function oi() {
  try {
    console.info("🚀 Building configuration...");
    const n = JSON.parse(await h.readFile("package.json", "utf8")), t = JSON.parse(await h.readFile("config.json", "utf8"));
    Xr.parse(t), n.name && (t.id = n.name), n.version && (t.version = n.version), await h.writeFile("config.json", JSON.stringify(t, void 0, 4), "utf8"), console.info("✅ Configuration built.");
  } catch (n) {
    console.error("❌ Error building configuration.", n);
  }
}
async function ri(n) {
  try {
    console.info(`🚀 Building public directory index for identifier '${n}'...`);
    const t = {};
    async function e(r, i) {
      console.info(`⚙️ Processing directory '${r}'...`);
      const s = [], c = r.substring(`public/${n}`.length);
      t[c] = s;
      for (const u of i) {
        const d = `${r}/${u}`;
        try {
          const l = await h.stat(d);
          if (l.isDirectory()) {
            const p = await h.readdir(d), m = { childCount: p.length, name: `${u}`, typeId: "folder" };
            s.push(m), await e(d, p);
          } else {
            const p = { id: Xn(), lastModifiedAt: l.mtimeMs, name: u, size: l.size, typeId: "object" };
            s.push(p);
          }
        } catch (l) {
          throw new Error(`Unable to get information for '${u}' in 'buildPublicDirectoryIndex'. ${String(l)}`);
        }
      }
      s.sort((u, d) => {
        const l = u.typeId.localeCompare(d.typeId);
        return l !== 0 ? l : u.name.localeCompare(d.name);
      });
    }
    const o = await h.readdir(`public/${n}`);
    await e(`public/${n}`, o), await h.writeFile(`./public/${n}Index.json`, JSON.stringify(t), "utf8"), console.info("✅ Public directory index built.");
  } catch (t) {
    console.error("❌ Error building public directory index.", t);
  }
}
async function ii() {
  try {
    console.info("🚀 Building connector configuration...");
    const n = JSON.parse(await h.readFile("package.json", "utf8")), t = JSON.parse(await h.readFile("config.json", "utf8")), e = await h.readFile("src/index.ts", "utf8");
    let o = !1, r = !1;
    const i = /^\s{4}(?:async\s+)?(private\s+)?(?:public\s+|protected\s+)?([A-Za-z_]\w*)\s*\(/gm, s = [...e.matchAll(i)].filter((u) => !u[1] && u[2] !== "constructor").map((u) => {
      const d = u[2];
      return o = o || nt.includes(d), r = r || tt.includes(d), d;
    });
    s.length > 0 ? console.info(`ℹ️  Implements ${s.length} operations.`) : console.warn("⚠️  Implements no operations.");
    const c = r && o ? "bidirectional" : r ? "source" : o ? "destination" : null;
    c ? console.info(`ℹ️  Supports ${c} usage.`) : console.warn("⚠️  No usage identified."), n.name && (t.id = n.name), t.operations = s, t.usageId = c, n.version && (t.version = n.version), await h.writeFile("config.json", JSON.stringify(t, void 0, 4), "utf8"), console.info("✅ Connector configuration built.");
  } catch (n) {
    console.error("❌ Error building connector configuration.", n);
  }
}
async function si() {
  try {
    console.info("🚀 Building context configuration...");
    const n = JSON.parse(await h.readFile("package.json", "utf8")), t = JSON.parse(await h.readFile("config.json", "utf8")), e = await h.readFile("src/index.ts", "utf8"), o = /^\s{4}(?:async\s+)?(private\s+)?(?:public\s+|protected\s+)?([A-Za-z_]\w*)\s*\(/gm, r = [...e.matchAll(o)].filter((i) => !i[1] && i[2] !== "constructor").map((i) => i[2]);
    n.name && (t.id = n.name), t.operations = r, n.version && (t.version = n.version), await h.writeFile("config.json", JSON.stringify(t, void 0, 4), "utf8"), console.info("✅ Context configuration built.");
  } catch (n) {
    console.error("❌ Error building context configuration.", n);
  }
}
async function ai() {
  try {
    console.info("🚀 Building informer configuration...");
    const n = JSON.parse(await h.readFile("package.json", "utf8")), t = JSON.parse(await h.readFile("config.json", "utf8")), e = await h.readFile("src/index.ts", "utf8"), o = /^\s{4}(?:async\s+)?(private\s+)?(?:public\s+|protected\s+)?([A-Za-z_]\w*)\s*\(/gm, r = [...e.matchAll(o)].filter((i) => !i[1] && i[2] !== "constructor").map((i) => i[2]);
    n.name && (t.id = n.name), t.operations = r, n.version && (t.version = n.version), await h.writeFile("config.json", JSON.stringify(t, void 0, 4), "utf8"), console.info("✅ Informer configuration built.");
  } catch (n) {
    console.error("❌ Error building informer configuration.", n);
  }
}
async function ci() {
  try {
    console.info("🚀 Building presenter configuration...");
    const n = JSON.parse(await h.readFile("package.json", "utf8")), t = JSON.parse(await h.readFile("config.json", "utf8")), e = await h.readFile("src/index.ts", "utf8"), o = /^\s{4}(?:async\s+)?(private\s+)?(?:public\s+|protected\s+)?([A-Za-z_]\w*)\s*\(/gm, r = [...e.matchAll(o)].filter((i) => !i[1] && i[2] !== "constructor").map((i) => i[2]);
    n.name && (t.id = n.name), t.operations = r, n.version && (t.version = n.version), await h.writeFile("config.json", JSON.stringify(t, void 0, 4), "utf8"), console.info("✅ Presenter configuration built.");
  } catch (n) {
    console.error("❌ Error building context configuration.", n);
  }
}
async function ui() {
  try {
    console.info("🚀 Bumping version...");
    const n = JSON.parse(await h.readFile("package.json", "utf8"));
    if (n.version) {
      const t = n.version, e = n.version.split(".");
      n.version = `${e[0]}.${e[1]}.${Number(e[2]) + 1}`, await h.writeFile("package.json", JSON.stringify(n, void 0, 4), "utf8"), console.info(`✅ Version bumped from ${t} to ${n.version}.`);
    } else
      n.version = "0.0.001", await h.writeFile("package.json", JSON.stringify(n, void 0, 4), "utf8"), console.warn(`⚠️ Version initialised to ${n.version}.`);
  } catch (n) {
    console.error("❌ Error bumping package version.", n);
  }
}
function di(n) {
  console.error(`❌ ${n} script not implemented.`);
}
async function fi() {
  try {
    console.info("🚀 Sending deployment notice...");
    const n = JSON.parse(await h.readFile("config.json", "utf8")), t = {
      body: JSON.stringify(n),
      headers: { "Content-Type": "application/json" },
      method: "PUT"
    }, e = await fetch(`https://api.datapos.app/states/${n.id}`, t);
    if (!e.ok) throw new Error(await e.text());
    console.info("✅ Deployment notice sent.");
  } catch (n) {
    console.error("❌ Error sending deployment notice.", n);
  }
}
async function li() {
  try {
    console.info("🚀 Synchronising with GitHub....");
    const n = JSON.parse(await h.readFile("package.json", "utf8"));
    await N("git add ."), await N(`git commit -m "v${n.version}"`), await N("git push origin main:main"), console.info(`✅ Synchronised version ${n.version} with GitHub.`);
  } catch (n) {
    console.error("❌ Error synchronising with GitHub.", n);
  }
}
async function pi(n, t) {
  try {
    console.info("🚀 Uploading directory to R2....");
    async function e(r, i, s) {
      for (const c of s) {
        const u = `${r}/${c}`, d = `${i}/${c}`;
        if ((await h.stat(u)).isDirectory()) {
          const p = await h.readdir(u);
          await e(u, d, p);
        } else {
          console.info(`⚙️ Uploading '${r}/${c}'.`);
          const p = `wrangler r2 object put "datapos-sample-data-eu/${i}/${c}" --file="${r}/${c}" --jurisdiction=eu --remote`, m = await N(p);
          if (m.stderr) throw new Error(m.stderr);
        }
      }
    }
    const o = await h.readdir(`${n}/${t}/`);
    await e(`${n}/${t}`, t, o), console.info("✅ Directory uploaded to R2.");
  } catch (e) {
    console.error("❌ Error uploading directory to R2.", e);
  }
}
async function hi() {
  try {
    console.info("🚀 Uploading module configuration....");
    const n = JSON.parse(await h.readFile("config.json", "utf8")), t = n.id, e = {
      body: JSON.stringify(n),
      headers: { "Content-Type": "application/json" },
      method: "PUT"
    }, o = await fetch(`https://api.datapos.app/states/${t}`, e);
    if (!o.ok) throw new Error(await o.text());
    console.info("✅ Module configuration uploaded.");
  } catch (n) {
    console.error("❌ Error uploading module configuration.", n);
  }
}
async function mi(n, t) {
  try {
    console.info("🚀 Uploading module to R2...");
    const o = `v${JSON.parse(await h.readFile("package.json", "utf8")).version}`;
    async function r(i) {
      const s = await h.readdir(i, { withFileTypes: !0 });
      for (const c of s) {
        const u = q.join(i, c.name);
        if (c.isDirectory())
          await r(u);
        else {
          const d = q.relative("dist", u), l = q.join(t, o, d).replace(/\\/g, "/"), p = u.endsWith(".js") ? "application/javascript" : u.endsWith(".css") ? "text/css" : "application/octet-stream", { stderr: m } = await N(`wrangler r2 object put ${l} --file=${u} --content-type ${p} --jurisdiction=eu --remote`);
          if (m) throw new Error(m);
          console.info(`✅ Uploaded ${d} to ${l}`);
        }
      }
    }
    await r("dist"), console.info("✅ Module uploaded to R2.");
  } catch (e) {
    console.error("❌ Error uploading module to R2.", e);
  }
}
export {
  oi as buildConfig,
  ii as buildConnectorConfig,
  si as buildContextConfig,
  ai as buildInformerConfig,
  ci as buildPresenterConfig,
  ri as buildPublicDirectoryIndex,
  ui as bumpVersion,
  di as echoScriptNotImplemented,
  fi as sendDeploymentNotice,
  li as syncWithGitHub,
  pi as uploadDirectoryToR2,
  hi as uploadModuleConfigToDO,
  mi as uploadModuleToR2
};
