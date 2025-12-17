import { promises as ge } from "node:fs";
import { nanoid as Ys } from "nanoid";
import Ht from "node:path";
import { promisify as Qs } from "node:util";
import { exec as en, spawn as tn } from "node:child_process";
import { CONNECTOR_SOURCE_OPERATIONS as rn, CONNECTOR_DESTINATION_OPERATIONS as sn } from "@datapos/datapos-shared";
import { fileURLToPath as Vr, URL as nn } from "node:url";
let fi;
// @__NO_SIDE_EFFECTS__
function jr(e) {
  return {
    lang: e?.lang ?? fi?.lang,
    message: e?.message,
    abortEarly: e?.abortEarly ?? fi?.abortEarly,
    abortPipeEarly: e?.abortPipeEarly ?? fi?.abortPipeEarly
  };
}
let an;
// @__NO_SIDE_EFFECTS__
function on(e) {
  return an?.get(e);
}
let un;
// @__NO_SIDE_EFFECTS__
function cn(e) {
  return un?.get(e);
}
let hn;
// @__NO_SIDE_EFFECTS__
function ln(e, t) {
  return hn?.get(e)?.get(t);
}
// @__NO_SIDE_EFFECTS__
function Ei(e) {
  const t = typeof e;
  return t === "string" ? `"${e}"` : t === "number" || t === "bigint" || t === "boolean" ? `${e}` : t === "object" || t === "function" ? (e && Object.getPrototypeOf(e)?.constructor?.name) ?? "null" : t;
}
function Ve(e, t, i, r, n) {
  const u = n && "input" in n ? n.input : i.value, c = n?.expected ?? e.expects ?? null, f = n?.received ?? /* @__PURE__ */ Ei(u), y = {
    kind: e.kind,
    type: e.type,
    input: u,
    expected: c,
    received: f,
    message: `Invalid ${t}: ${c ? `Expected ${c} but r` : "R"}eceived ${f}`,
    requirement: e.requirement,
    path: n?.path,
    issues: n?.issues,
    lang: r.lang,
    abortEarly: r.abortEarly,
    abortPipeEarly: r.abortPipeEarly
  }, o = e.kind === "schema", b = n?.message ?? e.message ?? /* @__PURE__ */ ln(e.reference, y.lang) ?? (o ? /* @__PURE__ */ cn(y.lang) : null) ?? r.message ?? /* @__PURE__ */ on(y.lang);
  b !== void 0 && (y.message = typeof b == "function" ? b(y) : b), o && (i.typed = !1), i.issues ? i.issues.push(y) : i.issues = [y];
}
// @__NO_SIDE_EFFECTS__
function Ne(e) {
  return {
    version: 1,
    vendor: "valibot",
    validate(t) {
      return e["~run"]({ value: t }, /* @__PURE__ */ jr());
    }
  };
}
// @__NO_SIDE_EFFECTS__
function pn(e, t) {
  return Object.hasOwn(e, t) && t !== "__proto__" && t !== "prototype" && t !== "constructor";
}
// @__NO_SIDE_EFFECTS__
function fn(e, t) {
  const i = [...new Set(e)];
  return i.length > 1 ? `(${i.join(` ${t} `)})` : i[0] ?? "never";
}
// @__NO_SIDE_EFFECTS__
function dn(e, t, i) {
  return typeof e.fallback == "function" ? e.fallback(t, i) : e.fallback;
}
// @__NO_SIDE_EFFECTS__
function Ii(e, t, i) {
  return typeof e.default == "function" ? e.default(t, i) : e.default;
}
// @__NO_SIDE_EFFECTS__
function Ni(e, t) {
  return {
    kind: "schema",
    type: "array",
    reference: Ni,
    expects: "Array",
    async: !1,
    item: e,
    message: t,
    get "~standard"() {
      return /* @__PURE__ */ Ne(this);
    },
    "~run"(i, r) {
      const n = i.value;
      if (Array.isArray(n)) {
        i.typed = !0, i.value = [];
        for (let u = 0; u < n.length; u++) {
          const c = n[u], f = this.item["~run"]({ value: c }, r);
          if (f.issues) {
            const y = {
              type: "array",
              origin: "value",
              input: n,
              key: u,
              value: c
            };
            for (const o of f.issues)
              o.path ? o.path.unshift(y) : o.path = [y], i.issues?.push(o);
            if (i.issues || (i.issues = f.issues), r.abortEarly) {
              i.typed = !1;
              break;
            }
          }
          f.typed || (i.typed = !1), i.value.push(f.value);
        }
      } else Ve(this, "type", i, r);
      return i;
    }
  };
}
// @__NO_SIDE_EFFECTS__
function zr(e) {
  return {
    kind: "schema",
    type: "boolean",
    reference: zr,
    expects: "boolean",
    async: !1,
    message: e,
    get "~standard"() {
      return /* @__PURE__ */ Ne(this);
    },
    "~run"(t, i) {
      return typeof t.value == "boolean" ? t.typed = !0 : Ve(this, "type", t, i), t;
    }
  };
}
// @__NO_SIDE_EFFECTS__
function $r(e, t) {
  return {
    kind: "schema",
    type: "literal",
    reference: $r,
    expects: /* @__PURE__ */ Ei(e),
    async: !1,
    literal: e,
    message: t,
    get "~standard"() {
      return /* @__PURE__ */ Ne(this);
    },
    "~run"(i, r) {
      return i.value === this.literal ? i.typed = !0 : Ve(this, "type", i, r), i;
    }
  };
}
// @__NO_SIDE_EFFECTS__
function Ye(e, t) {
  return {
    kind: "schema",
    type: "nullable",
    reference: Ye,
    expects: `(${e.expects} | null)`,
    async: !1,
    wrapped: e,
    default: t,
    get "~standard"() {
      return /* @__PURE__ */ Ne(this);
    },
    "~run"(i, r) {
      return i.value === null && (this.default !== void 0 && (i.value = /* @__PURE__ */ Ii(this, i, r)), i.value === null) ? (i.typed = !0, i) : this.wrapped["~run"](i, r);
    }
  };
}
// @__NO_SIDE_EFFECTS__
function Ct(e) {
  return {
    kind: "schema",
    type: "number",
    reference: Ct,
    expects: "number",
    async: !1,
    message: e,
    get "~standard"() {
      return /* @__PURE__ */ Ne(this);
    },
    "~run"(t, i) {
      return typeof t.value == "number" && !isNaN(t.value) ? t.typed = !0 : Ve(this, "type", t, i), t;
    }
  };
}
// @__NO_SIDE_EFFECTS__
function Nt(e, t) {
  return {
    kind: "schema",
    type: "object",
    reference: Nt,
    expects: "Object",
    async: !1,
    entries: e,
    message: t,
    get "~standard"() {
      return /* @__PURE__ */ Ne(this);
    },
    "~run"(i, r) {
      const n = i.value;
      if (n && typeof n == "object") {
        i.typed = !0, i.value = {};
        for (const u in this.entries) {
          const c = this.entries[u];
          if (u in n || (c.type === "exact_optional" || c.type === "optional" || c.type === "nullish") && c.default !== void 0) {
            const f = u in n ? n[u] : /* @__PURE__ */ Ii(c), y = c["~run"]({ value: f }, r);
            if (y.issues) {
              const o = {
                type: "object",
                origin: "value",
                input: n,
                key: u,
                value: f
              };
              for (const b of y.issues)
                b.path ? b.path.unshift(o) : b.path = [o], i.issues?.push(b);
              if (i.issues || (i.issues = y.issues), r.abortEarly) {
                i.typed = !1;
                break;
              }
            }
            y.typed || (i.typed = !1), i.value[u] = y.value;
          } else if (c.fallback !== void 0) i.value[u] = /* @__PURE__ */ dn(c);
          else if (c.type !== "exact_optional" && c.type !== "optional" && c.type !== "nullish" && (Ve(this, "key", i, r, {
            input: void 0,
            expected: `"${u}"`,
            path: [{
              type: "object",
              origin: "key",
              input: n,
              key: u,
              value: n[u]
            }]
          }), r.abortEarly))
            break;
        }
      } else Ve(this, "type", i, r);
      return i;
    }
  };
}
// @__NO_SIDE_EFFECTS__
function ae(e, t) {
  return {
    kind: "schema",
    type: "optional",
    reference: ae,
    expects: `(${e.expects} | undefined)`,
    async: !1,
    wrapped: e,
    default: t,
    get "~standard"() {
      return /* @__PURE__ */ Ne(this);
    },
    "~run"(i, r) {
      return i.value === void 0 && (this.default !== void 0 && (i.value = /* @__PURE__ */ Ii(this, i, r)), i.value === void 0) ? (i.typed = !0, i) : this.wrapped["~run"](i, r);
    }
  };
}
// @__NO_SIDE_EFFECTS__
function Le(e, t) {
  return {
    kind: "schema",
    type: "picklist",
    reference: Le,
    expects: /* @__PURE__ */ fn(e.map(Ei), "|"),
    async: !1,
    options: e,
    message: t,
    get "~standard"() {
      return /* @__PURE__ */ Ne(this);
    },
    "~run"(i, r) {
      return this.options.includes(i.value) ? i.typed = !0 : Ve(this, "type", i, r), i;
    }
  };
}
// @__NO_SIDE_EFFECTS__
function ut(e, t, i) {
  return {
    kind: "schema",
    type: "record",
    reference: ut,
    expects: "Object",
    async: !1,
    key: e,
    value: t,
    message: i,
    get "~standard"() {
      return /* @__PURE__ */ Ne(this);
    },
    "~run"(r, n) {
      const u = r.value;
      if (u && typeof u == "object") {
        r.typed = !0, r.value = {};
        for (const c in u) if (/* @__PURE__ */ pn(u, c)) {
          const f = u[c], y = this.key["~run"]({ value: c }, n);
          if (y.issues) {
            const b = {
              type: "object",
              origin: "key",
              input: u,
              key: c,
              value: f
            };
            for (const P of y.issues)
              P.path = [b], r.issues?.push(P);
            if (r.issues || (r.issues = y.issues), n.abortEarly) {
              r.typed = !1;
              break;
            }
          }
          const o = this.value["~run"]({ value: f }, n);
          if (o.issues) {
            const b = {
              type: "object",
              origin: "value",
              input: u,
              key: c,
              value: f
            };
            for (const P of o.issues)
              P.path ? P.path.unshift(b) : P.path = [b], r.issues?.push(P);
            if (r.issues || (r.issues = o.issues), n.abortEarly) {
              r.typed = !1;
              break;
            }
          }
          (!y.typed || !o.typed) && (r.typed = !1), y.typed && (r.value[y.value] = o.value);
        }
      } else Ve(this, "type", r, n);
      return r;
    }
  };
}
// @__NO_SIDE_EFFECTS__
function ee(e) {
  return {
    kind: "schema",
    type: "string",
    reference: ee,
    expects: "string",
    async: !1,
    message: e,
    get "~standard"() {
      return /* @__PURE__ */ Ne(this);
    },
    "~run"(t, i) {
      return typeof t.value == "string" ? t.typed = !0 : Ve(this, "type", t, i), t;
    }
  };
}
// @__NO_SIDE_EFFECTS__
function mn(e, t, i) {
  const r = e["~run"]({ value: t }, /* @__PURE__ */ jr(i));
  return {
    typed: r.typed,
    success: !r.issues,
    output: r.value,
    issues: r.issues
  };
}
const yn = ["amber", "green", "red", "other"], vn = /* @__PURE__ */ Le(yn), xn = ["alpha", "beta", "generalAvailability", "notApplicable", "preAlpha", "proposed", "releaseCandidate", "unavailable", "underReview"], gn = /* @__PURE__ */ Le(xn), bn = [
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
], kn = /* @__PURE__ */ Le(bn), _n = ["en-au", "en-gb", "en-us", "es-es"], wn = /* @__PURE__ */ Le(_n), Sn = /* @__PURE__ */ ut(wn, /* @__PURE__ */ ee()), Tn = /* @__PURE__ */ Nt({
  id: /* @__PURE__ */ ee(),
  color: vn,
  label: /* @__PURE__ */ ee()
}), Pn = {
  id: /* @__PURE__ */ ee(),
  label: /* @__PURE__ */ ut(/* @__PURE__ */ ee(), /* @__PURE__ */ ee()),
  description: /* @__PURE__ */ ut(/* @__PURE__ */ ee(), /* @__PURE__ */ ee()),
  firstCreatedAt: /* @__PURE__ */ ae(/* @__PURE__ */ Ct()),
  icon: /* @__PURE__ */ ae(/* @__PURE__ */ ee()),
  iconDark: /* @__PURE__ */ ae(/* @__PURE__ */ ee()),
  lastUpdatedAt: /* @__PURE__ */ ae(/* @__PURE__ */ Ye(/* @__PURE__ */ Ct())),
  status: /* @__PURE__ */ ae(/* @__PURE__ */ Ye(Tn)),
  statusId: gn,
  typeId: kn
}, Cn = ["app", "engine", "connector", "context", "presenter", "tool"], An = /* @__PURE__ */ Le(Cn), En = /* @__PURE__ */ Nt({
  id: /* @__PURE__ */ ee(),
  label: /* @__PURE__ */ ee()
}), In = {
  ...Pn,
  typeId: An,
  version: /* @__PURE__ */ ee()
}, Nn = ["apiKey", "disabled", "oAuth2", "none"], Ln = /* @__PURE__ */ Le(Nn), On = /* @__PURE__ */ Nt({
  activeConnectionCount: /* @__PURE__ */ ae(/* @__PURE__ */ Ct()),
  canDescribe: /* @__PURE__ */ ae(/* @__PURE__ */ zr()),
  id: /* @__PURE__ */ ae(/* @__PURE__ */ ee()),
  authMethodId: Ln,
  label: /* @__PURE__ */ ae(Sn),
  maxConnectionCount: /* @__PURE__ */ ae(/* @__PURE__ */ Ct()),
  params: /* @__PURE__ */ ae(/* @__PURE__ */ Ni(/* @__PURE__ */ ut(/* @__PURE__ */ ee(), /* @__PURE__ */ ee())))
}), Rn = ["application", "curatedDataset", "database", "fileStore"], Dn = /* @__PURE__ */ Le(Rn), Mn = [
  "abortOperation",
  "authenticateConnection",
  "createObject",
  "describeConnection",
  "dropObject",
  "findObject",
  "getRecord",
  "listNodes",
  "previewObject",
  "removeRecords",
  "retrieveRecords",
  "upsertRecords"
], Vn = /* @__PURE__ */ Le(Mn), jn = ["bidirectional", "destination", "source", "unknown"], zn = /* @__PURE__ */ Le(jn), $n = /* @__PURE__ */ Nt({
  ...In,
  category: /* @__PURE__ */ ae(/* @__PURE__ */ Ye(En)),
  categoryId: Dn,
  implementations: /* @__PURE__ */ ut(/* @__PURE__ */ ee(), On),
  operations: /* @__PURE__ */ Ni(Vn),
  typeId: /* @__PURE__ */ $r("connector"),
  usageId: zn,
  vendorAccountURL: /* @__PURE__ */ ae(/* @__PURE__ */ Ye(/* @__PURE__ */ ee())),
  vendorDocumentationURL: /* @__PURE__ */ ae(/* @__PURE__ */ Ye(/* @__PURE__ */ ee())),
  vendorHomeURL: /* @__PURE__ */ ae(/* @__PURE__ */ Ye(/* @__PURE__ */ ee()))
});
function _(e, t, i) {
  function r(f, y) {
    if (f._zod || Object.defineProperty(f, "_zod", {
      value: {
        def: y,
        constr: c,
        traits: /* @__PURE__ */ new Set()
      },
      enumerable: !1
    }), f._zod.traits.has(e))
      return;
    f._zod.traits.add(e), t(f, y);
    const o = c.prototype, b = Object.keys(o);
    for (let P = 0; P < b.length; P++) {
      const R = b[P];
      R in f || (f[R] = o[R].bind(f));
    }
  }
  const n = i?.Parent ?? Object;
  class u extends n {
  }
  Object.defineProperty(u, "name", { value: e });
  function c(f) {
    var y;
    const o = i?.Parent ? new u() : this;
    r(o, f), (y = o._zod).deferred ?? (y.deferred = []);
    for (const b of o._zod.deferred)
      b();
    return o;
  }
  return Object.defineProperty(c, "init", { value: r }), Object.defineProperty(c, Symbol.hasInstance, {
    value: (f) => i?.Parent && f instanceof i.Parent ? !0 : f?._zod?.traits?.has(e)
  }), Object.defineProperty(c, "name", { value: e }), c;
}
class ot extends Error {
  constructor() {
    super("Encountered Promise during synchronous parse. Use .parseAsync() instead.");
  }
}
class Fr extends Error {
  constructor(t) {
    super(`Encountered unidirectional transform during encode: ${t}`), this.name = "ZodEncodeError";
  }
}
const Br = {};
function He(e) {
  return Br;
}
function Fn(e) {
  const t = Object.values(e).filter((r) => typeof r == "number");
  return Object.entries(e).filter(([r, n]) => t.indexOf(+r) === -1).map(([r, n]) => n);
}
function ki(e, t) {
  return typeof t == "bigint" ? t.toString() : t;
}
function Li(e) {
  return {
    get value() {
      {
        const t = e();
        return Object.defineProperty(this, "value", { value: t }), t;
      }
    }
  };
}
function Oi(e) {
  return e == null;
}
function Ri(e) {
  const t = e.startsWith("^") ? 1 : 0, i = e.endsWith("$") ? e.length - 1 : e.length;
  return e.slice(t, i);
}
function Bn(e, t) {
  const i = (e.toString().split(".")[1] || "").length, r = t.toString();
  let n = (r.split(".")[1] || "").length;
  if (n === 0 && /\d?e-\d?/.test(r)) {
    const y = r.match(/\d?e-(\d?)/);
    y?.[1] && (n = Number.parseInt(y[1]));
  }
  const u = i > n ? i : n, c = Number.parseInt(e.toFixed(u).replace(".", "")), f = Number.parseInt(t.toFixed(u).replace(".", ""));
  return c % f / 10 ** u;
}
const Qi = Symbol("evaluating");
function Z(e, t, i) {
  let r;
  Object.defineProperty(e, t, {
    get() {
      if (r !== Qi)
        return r === void 0 && (r = Qi, r = i()), r;
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
function et(e, t, i) {
  Object.defineProperty(e, t, {
    value: i,
    writable: !0,
    enumerable: !0,
    configurable: !0
  });
}
function tt(...e) {
  const t = {};
  for (const i of e) {
    const r = Object.getOwnPropertyDescriptors(i);
    Object.assign(t, r);
  }
  return Object.defineProperties({}, t);
}
function er(e) {
  return JSON.stringify(e);
}
function Zn(e) {
  return e.toLowerCase().trim().replace(/[^\w\s-]/g, "").replace(/[\s_-]+/g, "-").replace(/^-+|-+$/g, "");
}
const Zr = "captureStackTrace" in Error ? Error.captureStackTrace : (...e) => {
};
function Gt(e) {
  return typeof e == "object" && e !== null && !Array.isArray(e);
}
const Un = Li(() => {
  if (typeof navigator < "u" && navigator?.userAgent?.includes("Cloudflare"))
    return !1;
  try {
    const e = Function;
    return new e(""), !0;
  } catch {
    return !1;
  }
});
function ct(e) {
  if (Gt(e) === !1)
    return !1;
  const t = e.constructor;
  if (t === void 0 || typeof t != "function")
    return !0;
  const i = t.prototype;
  return !(Gt(i) === !1 || Object.prototype.hasOwnProperty.call(i, "isPrototypeOf") === !1);
}
function Ur(e) {
  return ct(e) ? { ...e } : Array.isArray(e) ? [...e] : e;
}
const qn = /* @__PURE__ */ new Set(["string", "number", "symbol"]);
function ht(e) {
  return e.replace(/[.*+?^${}()|[\]\\]/g, "\\$&");
}
function Ke(e, t, i) {
  const r = new e._zod.constr(t ?? e._zod.def);
  return (!t || i?.parent) && (r._zod.parent = e), r;
}
function L(e) {
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
function Hn(e) {
  return Object.keys(e).filter((t) => e[t]._zod.optin === "optional" && e[t]._zod.optout === "optional");
}
const Gn = {
  safeint: [Number.MIN_SAFE_INTEGER, Number.MAX_SAFE_INTEGER],
  int32: [-2147483648, 2147483647],
  uint32: [0, 4294967295],
  float32: [-34028234663852886e22, 34028234663852886e22],
  float64: [-Number.MAX_VALUE, Number.MAX_VALUE]
};
function Wn(e, t) {
  const i = e._zod.def, r = tt(e._zod.def, {
    get shape() {
      const n = {};
      for (const u in t) {
        if (!(u in i.shape))
          throw new Error(`Unrecognized key: "${u}"`);
        t[u] && (n[u] = i.shape[u]);
      }
      return et(this, "shape", n), n;
    },
    checks: []
  });
  return Ke(e, r);
}
function Kn(e, t) {
  const i = e._zod.def, r = tt(e._zod.def, {
    get shape() {
      const n = { ...e._zod.def.shape };
      for (const u in t) {
        if (!(u in i.shape))
          throw new Error(`Unrecognized key: "${u}"`);
        t[u] && delete n[u];
      }
      return et(this, "shape", n), n;
    },
    checks: []
  });
  return Ke(e, r);
}
function Xn(e, t) {
  if (!ct(t))
    throw new Error("Invalid input to extend: expected a plain object");
  const i = e._zod.def.checks;
  if (i && i.length > 0)
    throw new Error("Object schemas containing refinements cannot be extended. Use `.safeExtend()` instead.");
  const n = tt(e._zod.def, {
    get shape() {
      const u = { ...e._zod.def.shape, ...t };
      return et(this, "shape", u), u;
    },
    checks: []
  });
  return Ke(e, n);
}
function Jn(e, t) {
  if (!ct(t))
    throw new Error("Invalid input to safeExtend: expected a plain object");
  const i = {
    ...e._zod.def,
    get shape() {
      const r = { ...e._zod.def.shape, ...t };
      return et(this, "shape", r), r;
    },
    checks: e._zod.def.checks
  };
  return Ke(e, i);
}
function Yn(e, t) {
  const i = tt(e._zod.def, {
    get shape() {
      const r = { ...e._zod.def.shape, ...t._zod.def.shape };
      return et(this, "shape", r), r;
    },
    get catchall() {
      return t._zod.def.catchall;
    },
    checks: []
    // delete existing checks
  });
  return Ke(e, i);
}
function Qn(e, t, i) {
  const r = tt(t._zod.def, {
    get shape() {
      const n = t._zod.def.shape, u = { ...n };
      if (i)
        for (const c in i) {
          if (!(c in n))
            throw new Error(`Unrecognized key: "${c}"`);
          i[c] && (u[c] = e ? new e({
            type: "optional",
            innerType: n[c]
          }) : n[c]);
        }
      else
        for (const c in n)
          u[c] = e ? new e({
            type: "optional",
            innerType: n[c]
          }) : n[c];
      return et(this, "shape", u), u;
    },
    checks: []
  });
  return Ke(t, r);
}
function ea(e, t, i) {
  const r = tt(t._zod.def, {
    get shape() {
      const n = t._zod.def.shape, u = { ...n };
      if (i)
        for (const c in i) {
          if (!(c in u))
            throw new Error(`Unrecognized key: "${c}"`);
          i[c] && (u[c] = new e({
            type: "nonoptional",
            innerType: n[c]
          }));
        }
      else
        for (const c in n)
          u[c] = new e({
            type: "nonoptional",
            innerType: n[c]
          });
      return et(this, "shape", u), u;
    },
    checks: []
  });
  return Ke(t, r);
}
function nt(e, t = 0) {
  if (e.aborted === !0)
    return !0;
  for (let i = t; i < e.issues.length; i++)
    if (e.issues[i]?.continue !== !0)
      return !0;
  return !1;
}
function at(e, t) {
  return t.map((i) => {
    var r;
    return (r = i).path ?? (r.path = []), i.path.unshift(e), i;
  });
}
function $t(e) {
  return typeof e == "string" ? e : e?.message;
}
function Ge(e, t, i) {
  const r = { ...e, path: e.path ?? [] };
  if (!e.message) {
    const n = $t(e.inst?._zod.def?.error?.(e)) ?? $t(t?.error?.(e)) ?? $t(i.customError?.(e)) ?? $t(i.localeError?.(e)) ?? "Invalid input";
    r.message = n;
  }
  return delete r.inst, delete r.continue, t?.reportInput || delete r.input, r;
}
function Di(e) {
  return Array.isArray(e) ? "array" : typeof e == "string" ? "string" : "unknown";
}
function At(...e) {
  const [t, i, r] = e;
  return typeof t == "string" ? {
    message: t,
    code: "custom",
    input: i,
    inst: r
  } : { ...t };
}
const qr = (e, t) => {
  e.name = "$ZodError", Object.defineProperty(e, "_zod", {
    value: e._zod,
    enumerable: !1
  }), Object.defineProperty(e, "issues", {
    value: t,
    enumerable: !1
  }), e.message = JSON.stringify(t, ki, 2), Object.defineProperty(e, "toString", {
    value: () => e.message,
    enumerable: !1
  });
}, Hr = _("$ZodError", qr), Gr = _("$ZodError", qr, { Parent: Error });
function ta(e, t = (i) => i.message) {
  const i = {}, r = [];
  for (const n of e.issues)
    n.path.length > 0 ? (i[n.path[0]] = i[n.path[0]] || [], i[n.path[0]].push(t(n))) : r.push(t(n));
  return { formErrors: r, fieldErrors: i };
}
function ia(e, t = (i) => i.message) {
  const i = { _errors: [] }, r = (n) => {
    for (const u of n.issues)
      if (u.code === "invalid_union" && u.errors.length)
        u.errors.map((c) => r({ issues: c }));
      else if (u.code === "invalid_key")
        r({ issues: u.issues });
      else if (u.code === "invalid_element")
        r({ issues: u.issues });
      else if (u.path.length === 0)
        i._errors.push(t(u));
      else {
        let c = i, f = 0;
        for (; f < u.path.length; ) {
          const y = u.path[f];
          f === u.path.length - 1 ? (c[y] = c[y] || { _errors: [] }, c[y]._errors.push(t(u))) : c[y] = c[y] || { _errors: [] }, c = c[y], f++;
        }
      }
  };
  return r(e), i;
}
const Mi = (e) => (t, i, r, n) => {
  const u = r ? Object.assign(r, { async: !1 }) : { async: !1 }, c = t._zod.run({ value: i, issues: [] }, u);
  if (c instanceof Promise)
    throw new ot();
  if (c.issues.length) {
    const f = new (n?.Err ?? e)(c.issues.map((y) => Ge(y, u, He())));
    throw Zr(f, n?.callee), f;
  }
  return c.value;
}, Vi = (e) => async (t, i, r, n) => {
  const u = r ? Object.assign(r, { async: !0 }) : { async: !0 };
  let c = t._zod.run({ value: i, issues: [] }, u);
  if (c instanceof Promise && (c = await c), c.issues.length) {
    const f = new (n?.Err ?? e)(c.issues.map((y) => Ge(y, u, He())));
    throw Zr(f, n?.callee), f;
  }
  return c.value;
}, ii = (e) => (t, i, r) => {
  const n = r ? { ...r, async: !1 } : { async: !1 }, u = t._zod.run({ value: i, issues: [] }, n);
  if (u instanceof Promise)
    throw new ot();
  return u.issues.length ? {
    success: !1,
    error: new (e ?? Hr)(u.issues.map((c) => Ge(c, n, He())))
  } : { success: !0, data: u.value };
}, ra = /* @__PURE__ */ ii(Gr), ri = (e) => async (t, i, r) => {
  const n = r ? Object.assign(r, { async: !0 }) : { async: !0 };
  let u = t._zod.run({ value: i, issues: [] }, n);
  return u instanceof Promise && (u = await u), u.issues.length ? {
    success: !1,
    error: new e(u.issues.map((c) => Ge(c, n, He())))
  } : { success: !0, data: u.value };
}, sa = /* @__PURE__ */ ri(Gr), na = (e) => (t, i, r) => {
  const n = r ? Object.assign(r, { direction: "backward" }) : { direction: "backward" };
  return Mi(e)(t, i, n);
}, aa = (e) => (t, i, r) => Mi(e)(t, i, r), oa = (e) => async (t, i, r) => {
  const n = r ? Object.assign(r, { direction: "backward" }) : { direction: "backward" };
  return Vi(e)(t, i, n);
}, ua = (e) => async (t, i, r) => Vi(e)(t, i, r), ca = (e) => (t, i, r) => {
  const n = r ? Object.assign(r, { direction: "backward" }) : { direction: "backward" };
  return ii(e)(t, i, n);
}, ha = (e) => (t, i, r) => ii(e)(t, i, r), la = (e) => async (t, i, r) => {
  const n = r ? Object.assign(r, { direction: "backward" }) : { direction: "backward" };
  return ri(e)(t, i, n);
}, pa = (e) => async (t, i, r) => ri(e)(t, i, r), fa = /^[cC][^\s-]{8,}$/, da = /^[0-9a-z]+$/, ma = /^[0-9A-HJKMNP-TV-Za-hjkmnp-tv-z]{26}$/, ya = /^[0-9a-vA-V]{20}$/, va = /^[A-Za-z0-9]{27}$/, xa = /^[a-zA-Z0-9_-]{21}$/, ga = /^P(?:(\d+W)|(?!.*W)(?=\d|T\d)(\d+Y)?(\d+M)?(\d+D)?(T(?=\d)(\d+H)?(\d+M)?(\d+([.,]\d+)?S)?)?)$/, ba = /^([0-9a-fA-F]{8}-[0-9a-fA-F]{4}-[0-9a-fA-F]{4}-[0-9a-fA-F]{4}-[0-9a-fA-F]{12})$/, tr = (e) => e ? new RegExp(`^([0-9a-fA-F]{8}-[0-9a-fA-F]{4}-${e}[0-9a-fA-F]{3}-[89abAB][0-9a-fA-F]{3}-[0-9a-fA-F]{12})$`) : /^([0-9a-fA-F]{8}-[0-9a-fA-F]{4}-[1-8][0-9a-fA-F]{3}-[89abAB][0-9a-fA-F]{3}-[0-9a-fA-F]{12}|00000000-0000-0000-0000-000000000000|ffffffff-ffff-ffff-ffff-ffffffffffff)$/, ka = /^(?!\.)(?!.*\.\.)([A-Za-z0-9_'+\-\.]*)[A-Za-z0-9_+-]@([A-Za-z0-9][A-Za-z0-9\-]*\.)+[A-Za-z]{2,}$/, _a = "^(\\p{Extended_Pictographic}|\\p{Emoji_Component})+$";
function wa() {
  return new RegExp(_a, "u");
}
const Sa = /^(?:(?:25[0-5]|2[0-4][0-9]|1[0-9][0-9]|[1-9][0-9]|[0-9])\.){3}(?:25[0-5]|2[0-4][0-9]|1[0-9][0-9]|[1-9][0-9]|[0-9])$/, Ta = /^(([0-9a-fA-F]{1,4}:){7}[0-9a-fA-F]{1,4}|([0-9a-fA-F]{1,4}:){1,7}:|([0-9a-fA-F]{1,4}:){1,6}:[0-9a-fA-F]{1,4}|([0-9a-fA-F]{1,4}:){1,5}(:[0-9a-fA-F]{1,4}){1,2}|([0-9a-fA-F]{1,4}:){1,4}(:[0-9a-fA-F]{1,4}){1,3}|([0-9a-fA-F]{1,4}:){1,3}(:[0-9a-fA-F]{1,4}){1,4}|([0-9a-fA-F]{1,4}:){1,2}(:[0-9a-fA-F]{1,4}){1,5}|[0-9a-fA-F]{1,4}:((:[0-9a-fA-F]{1,4}){1,6})|:((:[0-9a-fA-F]{1,4}){1,7}|:))$/, Pa = /^((25[0-5]|2[0-4][0-9]|1[0-9][0-9]|[1-9][0-9]|[0-9])\.){3}(25[0-5]|2[0-4][0-9]|1[0-9][0-9]|[1-9][0-9]|[0-9])\/([0-9]|[1-2][0-9]|3[0-2])$/, Ca = /^(([0-9a-fA-F]{1,4}:){7}[0-9a-fA-F]{1,4}|::|([0-9a-fA-F]{1,4})?::([0-9a-fA-F]{1,4}:?){0,6})\/(12[0-8]|1[01][0-9]|[1-9]?[0-9])$/, Aa = /^$|^(?:[0-9a-zA-Z+/]{4})*(?:(?:[0-9a-zA-Z+/]{2}==)|(?:[0-9a-zA-Z+/]{3}=))?$/, Wr = /^[A-Za-z0-9_-]*$/, Ea = /^\+(?:[0-9]){6,14}[0-9]$/, Kr = "(?:(?:\\d\\d[2468][048]|\\d\\d[13579][26]|\\d\\d0[48]|[02468][048]00|[13579][26]00)-02-29|\\d{4}-(?:(?:0[13578]|1[02])-(?:0[1-9]|[12]\\d|3[01])|(?:0[469]|11)-(?:0[1-9]|[12]\\d|30)|(?:02)-(?:0[1-9]|1\\d|2[0-8])))", Ia = /* @__PURE__ */ new RegExp(`^${Kr}$`);
function Xr(e) {
  const t = "(?:[01]\\d|2[0-3]):[0-5]\\d";
  return typeof e.precision == "number" ? e.precision === -1 ? `${t}` : e.precision === 0 ? `${t}:[0-5]\\d` : `${t}:[0-5]\\d\\.\\d{${e.precision}}` : `${t}(?::[0-5]\\d(?:\\.\\d+)?)?`;
}
function Na(e) {
  return new RegExp(`^${Xr(e)}$`);
}
function La(e) {
  const t = Xr({ precision: e.precision }), i = ["Z"];
  e.local && i.push(""), e.offset && i.push("([+-](?:[01]\\d|2[0-3]):[0-5]\\d)");
  const r = `${t}(?:${i.join("|")})`;
  return new RegExp(`^${Kr}T(?:${r})$`);
}
const Oa = (e) => {
  const t = e ? `[\\s\\S]{${e?.minimum ?? 0},${e?.maximum ?? ""}}` : "[\\s\\S]*";
  return new RegExp(`^${t}$`);
}, Ra = /^-?\d+$/, Da = /^-?\d+(?:\.\d+)?/, Ma = /^[^A-Z]*$/, Va = /^[^a-z]*$/, me = /* @__PURE__ */ _("$ZodCheck", (e, t) => {
  var i;
  e._zod ?? (e._zod = {}), e._zod.def = t, (i = e._zod).onattach ?? (i.onattach = []);
}), Jr = {
  number: "number",
  bigint: "bigint",
  object: "date"
}, Yr = /* @__PURE__ */ _("$ZodCheckLessThan", (e, t) => {
  me.init(e, t);
  const i = Jr[typeof t.value];
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
}), Qr = /* @__PURE__ */ _("$ZodCheckGreaterThan", (e, t) => {
  me.init(e, t);
  const i = Jr[typeof t.value];
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
}), ja = /* @__PURE__ */ _("$ZodCheckMultipleOf", (e, t) => {
  me.init(e, t), e._zod.onattach.push((i) => {
    var r;
    (r = i._zod.bag).multipleOf ?? (r.multipleOf = t.value);
  }), e._zod.check = (i) => {
    if (typeof i.value != typeof t.value)
      throw new Error("Cannot mix number and bigint in multiple_of check.");
    (typeof i.value == "bigint" ? i.value % t.value === BigInt(0) : Bn(i.value, t.value) === 0) || i.issues.push({
      origin: typeof i.value,
      code: "not_multiple_of",
      divisor: t.value,
      input: i.value,
      inst: e,
      continue: !t.abort
    });
  };
}), za = /* @__PURE__ */ _("$ZodCheckNumberFormat", (e, t) => {
  me.init(e, t), t.format = t.format || "float64";
  const i = t.format?.includes("int"), r = i ? "int" : "number", [n, u] = Gn[t.format];
  e._zod.onattach.push((c) => {
    const f = c._zod.bag;
    f.format = t.format, f.minimum = n, f.maximum = u, i && (f.pattern = Ra);
  }), e._zod.check = (c) => {
    const f = c.value;
    if (i) {
      if (!Number.isInteger(f)) {
        c.issues.push({
          expected: r,
          format: t.format,
          code: "invalid_type",
          continue: !1,
          input: f,
          inst: e
        });
        return;
      }
      if (!Number.isSafeInteger(f)) {
        f > 0 ? c.issues.push({
          input: f,
          code: "too_big",
          maximum: Number.MAX_SAFE_INTEGER,
          note: "Integers must be within the safe integer range.",
          inst: e,
          origin: r,
          continue: !t.abort
        }) : c.issues.push({
          input: f,
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
    f < n && c.issues.push({
      origin: "number",
      input: f,
      code: "too_small",
      minimum: n,
      inclusive: !0,
      inst: e,
      continue: !t.abort
    }), f > u && c.issues.push({
      origin: "number",
      input: f,
      code: "too_big",
      maximum: u,
      inst: e
    });
  };
}), $a = /* @__PURE__ */ _("$ZodCheckMaxLength", (e, t) => {
  var i;
  me.init(e, t), (i = e._zod.def).when ?? (i.when = (r) => {
    const n = r.value;
    return !Oi(n) && n.length !== void 0;
  }), e._zod.onattach.push((r) => {
    const n = r._zod.bag.maximum ?? Number.POSITIVE_INFINITY;
    t.maximum < n && (r._zod.bag.maximum = t.maximum);
  }), e._zod.check = (r) => {
    const n = r.value;
    if (n.length <= t.maximum)
      return;
    const c = Di(n);
    r.issues.push({
      origin: c,
      code: "too_big",
      maximum: t.maximum,
      inclusive: !0,
      input: n,
      inst: e,
      continue: !t.abort
    });
  };
}), Fa = /* @__PURE__ */ _("$ZodCheckMinLength", (e, t) => {
  var i;
  me.init(e, t), (i = e._zod.def).when ?? (i.when = (r) => {
    const n = r.value;
    return !Oi(n) && n.length !== void 0;
  }), e._zod.onattach.push((r) => {
    const n = r._zod.bag.minimum ?? Number.NEGATIVE_INFINITY;
    t.minimum > n && (r._zod.bag.minimum = t.minimum);
  }), e._zod.check = (r) => {
    const n = r.value;
    if (n.length >= t.minimum)
      return;
    const c = Di(n);
    r.issues.push({
      origin: c,
      code: "too_small",
      minimum: t.minimum,
      inclusive: !0,
      input: n,
      inst: e,
      continue: !t.abort
    });
  };
}), Ba = /* @__PURE__ */ _("$ZodCheckLengthEquals", (e, t) => {
  var i;
  me.init(e, t), (i = e._zod.def).when ?? (i.when = (r) => {
    const n = r.value;
    return !Oi(n) && n.length !== void 0;
  }), e._zod.onattach.push((r) => {
    const n = r._zod.bag;
    n.minimum = t.length, n.maximum = t.length, n.length = t.length;
  }), e._zod.check = (r) => {
    const n = r.value, u = n.length;
    if (u === t.length)
      return;
    const c = Di(n), f = u > t.length;
    r.issues.push({
      origin: c,
      ...f ? { code: "too_big", maximum: t.length } : { code: "too_small", minimum: t.length },
      inclusive: !0,
      exact: !0,
      input: r.value,
      inst: e,
      continue: !t.abort
    });
  };
}), si = /* @__PURE__ */ _("$ZodCheckStringFormat", (e, t) => {
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
}), Za = /* @__PURE__ */ _("$ZodCheckRegex", (e, t) => {
  si.init(e, t), e._zod.check = (i) => {
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
}), Ua = /* @__PURE__ */ _("$ZodCheckLowerCase", (e, t) => {
  t.pattern ?? (t.pattern = Ma), si.init(e, t);
}), qa = /* @__PURE__ */ _("$ZodCheckUpperCase", (e, t) => {
  t.pattern ?? (t.pattern = Va), si.init(e, t);
}), Ha = /* @__PURE__ */ _("$ZodCheckIncludes", (e, t) => {
  me.init(e, t);
  const i = ht(t.includes), r = new RegExp(typeof t.position == "number" ? `^.{${t.position}}${i}` : i);
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
}), Ga = /* @__PURE__ */ _("$ZodCheckStartsWith", (e, t) => {
  me.init(e, t);
  const i = new RegExp(`^${ht(t.prefix)}.*`);
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
}), Wa = /* @__PURE__ */ _("$ZodCheckEndsWith", (e, t) => {
  me.init(e, t);
  const i = new RegExp(`.*${ht(t.suffix)}$`);
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
}), Ka = /* @__PURE__ */ _("$ZodCheckOverwrite", (e, t) => {
  me.init(e, t), e._zod.check = (i) => {
    i.value = t.tx(i.value);
  };
});
class Xa {
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
`).filter((c) => c), n = Math.min(...r.map((c) => c.length - c.trimStart().length)), u = r.map((c) => c.slice(n)).map((c) => " ".repeat(this.indent * 2) + c);
    for (const c of u)
      this.content.push(c);
  }
  compile() {
    const t = Function, i = this?.args, n = [...(this?.content ?? [""]).map((u) => `  ${u}`)];
    return new t(...i, n.join(`
`));
  }
}
const Ja = {
  major: 4,
  minor: 1,
  patch: 13
}, Q = /* @__PURE__ */ _("$ZodType", (e, t) => {
  var i;
  e ?? (e = {}), e._zod.def = t, e._zod.bag = e._zod.bag || {}, e._zod.version = Ja;
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
    const n = (c, f, y) => {
      let o = nt(c), b;
      for (const P of f) {
        if (P._zod.def.when) {
          if (!P._zod.def.when(c))
            continue;
        } else if (o)
          continue;
        const R = c.issues.length, B = P._zod.check(c);
        if (B instanceof Promise && y?.async === !1)
          throw new ot();
        if (b || B instanceof Promise)
          b = (b ?? Promise.resolve()).then(async () => {
            await B, c.issues.length !== R && (o || (o = nt(c, R)));
          });
        else {
          if (c.issues.length === R)
            continue;
          o || (o = nt(c, R));
        }
      }
      return b ? b.then(() => c) : c;
    }, u = (c, f, y) => {
      if (nt(c))
        return c.aborted = !0, c;
      const o = n(f, r, y);
      if (o instanceof Promise) {
        if (y.async === !1)
          throw new ot();
        return o.then((b) => e._zod.parse(b, y));
      }
      return e._zod.parse(o, y);
    };
    e._zod.run = (c, f) => {
      if (f.skipChecks)
        return e._zod.parse(c, f);
      if (f.direction === "backward") {
        const o = e._zod.parse({ value: c.value, issues: [] }, { ...f, skipChecks: !0 });
        return o instanceof Promise ? o.then((b) => u(b, c, f)) : u(o, c, f);
      }
      const y = e._zod.parse(c, f);
      if (y instanceof Promise) {
        if (f.async === !1)
          throw new ot();
        return y.then((o) => n(o, r, f));
      }
      return n(y, r, f);
    };
  }
  e["~standard"] = {
    validate: (n) => {
      try {
        const u = ra(e, n);
        return u.success ? { value: u.data } : { issues: u.error?.issues };
      } catch {
        return sa(e, n).then((c) => c.success ? { value: c.data } : { issues: c.error?.issues });
      }
    },
    vendor: "zod",
    version: 1
  };
}), ji = /* @__PURE__ */ _("$ZodString", (e, t) => {
  Q.init(e, t), e._zod.pattern = [...e?._zod.bag?.patterns ?? []].pop() ?? Oa(e._zod.bag), e._zod.parse = (i, r) => {
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
}), W = /* @__PURE__ */ _("$ZodStringFormat", (e, t) => {
  si.init(e, t), ji.init(e, t);
}), Ya = /* @__PURE__ */ _("$ZodGUID", (e, t) => {
  t.pattern ?? (t.pattern = ba), W.init(e, t);
}), Qa = /* @__PURE__ */ _("$ZodUUID", (e, t) => {
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
    t.pattern ?? (t.pattern = tr(r));
  } else
    t.pattern ?? (t.pattern = tr());
  W.init(e, t);
}), eo = /* @__PURE__ */ _("$ZodEmail", (e, t) => {
  t.pattern ?? (t.pattern = ka), W.init(e, t);
}), to = /* @__PURE__ */ _("$ZodURL", (e, t) => {
  W.init(e, t), e._zod.check = (i) => {
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
}), io = /* @__PURE__ */ _("$ZodEmoji", (e, t) => {
  t.pattern ?? (t.pattern = wa()), W.init(e, t);
}), ro = /* @__PURE__ */ _("$ZodNanoID", (e, t) => {
  t.pattern ?? (t.pattern = xa), W.init(e, t);
}), so = /* @__PURE__ */ _("$ZodCUID", (e, t) => {
  t.pattern ?? (t.pattern = fa), W.init(e, t);
}), no = /* @__PURE__ */ _("$ZodCUID2", (e, t) => {
  t.pattern ?? (t.pattern = da), W.init(e, t);
}), ao = /* @__PURE__ */ _("$ZodULID", (e, t) => {
  t.pattern ?? (t.pattern = ma), W.init(e, t);
}), oo = /* @__PURE__ */ _("$ZodXID", (e, t) => {
  t.pattern ?? (t.pattern = ya), W.init(e, t);
}), uo = /* @__PURE__ */ _("$ZodKSUID", (e, t) => {
  t.pattern ?? (t.pattern = va), W.init(e, t);
}), co = /* @__PURE__ */ _("$ZodISODateTime", (e, t) => {
  t.pattern ?? (t.pattern = La(t)), W.init(e, t);
}), ho = /* @__PURE__ */ _("$ZodISODate", (e, t) => {
  t.pattern ?? (t.pattern = Ia), W.init(e, t);
}), lo = /* @__PURE__ */ _("$ZodISOTime", (e, t) => {
  t.pattern ?? (t.pattern = Na(t)), W.init(e, t);
}), po = /* @__PURE__ */ _("$ZodISODuration", (e, t) => {
  t.pattern ?? (t.pattern = ga), W.init(e, t);
}), fo = /* @__PURE__ */ _("$ZodIPv4", (e, t) => {
  t.pattern ?? (t.pattern = Sa), W.init(e, t), e._zod.bag.format = "ipv4";
}), mo = /* @__PURE__ */ _("$ZodIPv6", (e, t) => {
  t.pattern ?? (t.pattern = Ta), W.init(e, t), e._zod.bag.format = "ipv6", e._zod.check = (i) => {
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
}), yo = /* @__PURE__ */ _("$ZodCIDRv4", (e, t) => {
  t.pattern ?? (t.pattern = Pa), W.init(e, t);
}), vo = /* @__PURE__ */ _("$ZodCIDRv6", (e, t) => {
  t.pattern ?? (t.pattern = Ca), W.init(e, t), e._zod.check = (i) => {
    const r = i.value.split("/");
    try {
      if (r.length !== 2)
        throw new Error();
      const [n, u] = r;
      if (!u)
        throw new Error();
      const c = Number(u);
      if (`${c}` !== u)
        throw new Error();
      if (c < 0 || c > 128)
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
function es(e) {
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
const xo = /* @__PURE__ */ _("$ZodBase64", (e, t) => {
  t.pattern ?? (t.pattern = Aa), W.init(e, t), e._zod.bag.contentEncoding = "base64", e._zod.check = (i) => {
    es(i.value) || i.issues.push({
      code: "invalid_format",
      format: "base64",
      input: i.value,
      inst: e,
      continue: !t.abort
    });
  };
});
function go(e) {
  if (!Wr.test(e))
    return !1;
  const t = e.replace(/[-_]/g, (r) => r === "-" ? "+" : "/"), i = t.padEnd(Math.ceil(t.length / 4) * 4, "=");
  return es(i);
}
const bo = /* @__PURE__ */ _("$ZodBase64URL", (e, t) => {
  t.pattern ?? (t.pattern = Wr), W.init(e, t), e._zod.bag.contentEncoding = "base64url", e._zod.check = (i) => {
    go(i.value) || i.issues.push({
      code: "invalid_format",
      format: "base64url",
      input: i.value,
      inst: e,
      continue: !t.abort
    });
  };
}), ko = /* @__PURE__ */ _("$ZodE164", (e, t) => {
  t.pattern ?? (t.pattern = Ea), W.init(e, t);
});
function _o(e, t = null) {
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
const wo = /* @__PURE__ */ _("$ZodJWT", (e, t) => {
  W.init(e, t), e._zod.check = (i) => {
    _o(i.value, t.alg) || i.issues.push({
      code: "invalid_format",
      format: "jwt",
      input: i.value,
      inst: e,
      continue: !t.abort
    });
  };
}), ts = /* @__PURE__ */ _("$ZodNumber", (e, t) => {
  Q.init(e, t), e._zod.pattern = e._zod.bag.pattern ?? Da, e._zod.parse = (i, r) => {
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
}), So = /* @__PURE__ */ _("$ZodNumberFormat", (e, t) => {
  za.init(e, t), ts.init(e, t);
}), To = /* @__PURE__ */ _("$ZodUnknown", (e, t) => {
  Q.init(e, t), e._zod.parse = (i) => i;
}), Po = /* @__PURE__ */ _("$ZodNever", (e, t) => {
  Q.init(e, t), e._zod.parse = (i, r) => (i.issues.push({
    expected: "never",
    code: "invalid_type",
    input: i.value,
    inst: e
  }), i);
});
function ir(e, t, i) {
  e.issues.length && t.issues.push(...at(i, e.issues)), t.value[i] = e.value;
}
const Co = /* @__PURE__ */ _("$ZodArray", (e, t) => {
  Q.init(e, t), e._zod.parse = (i, r) => {
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
    for (let c = 0; c < n.length; c++) {
      const f = n[c], y = t.element._zod.run({
        value: f,
        issues: []
      }, r);
      y instanceof Promise ? u.push(y.then((o) => ir(o, i, c))) : ir(y, i, c);
    }
    return u.length ? Promise.all(u).then(() => i) : i;
  };
});
function Wt(e, t, i, r) {
  e.issues.length && t.issues.push(...at(i, e.issues)), e.value === void 0 ? i in r && (t.value[i] = void 0) : t.value[i] = e.value;
}
function is(e) {
  const t = Object.keys(e.shape);
  for (const r of t)
    if (!e.shape?.[r]?._zod?.traits?.has("$ZodType"))
      throw new Error(`Invalid element at key "${r}": expected a Zod schema`);
  const i = Hn(e.shape);
  return {
    ...e,
    keys: t,
    keySet: new Set(t),
    numKeys: t.length,
    optionalKeys: new Set(i)
  };
}
function rs(e, t, i, r, n, u) {
  const c = [], f = n.keySet, y = n.catchall._zod, o = y.def.type;
  for (const b in t) {
    if (f.has(b))
      continue;
    if (o === "never") {
      c.push(b);
      continue;
    }
    const P = y.run({ value: t[b], issues: [] }, r);
    P instanceof Promise ? e.push(P.then((R) => Wt(R, i, b, t))) : Wt(P, i, b, t);
  }
  return c.length && i.issues.push({
    code: "unrecognized_keys",
    keys: c,
    input: t,
    inst: u
  }), e.length ? Promise.all(e).then(() => i) : i;
}
const Ao = /* @__PURE__ */ _("$ZodObject", (e, t) => {
  if (Q.init(e, t), !Object.getOwnPropertyDescriptor(t, "shape")?.get) {
    const f = t.shape;
    Object.defineProperty(t, "shape", {
      get: () => {
        const y = { ...f };
        return Object.defineProperty(t, "shape", {
          value: y
        }), y;
      }
    });
  }
  const r = Li(() => is(t));
  Z(e._zod, "propValues", () => {
    const f = t.shape, y = {};
    for (const o in f) {
      const b = f[o]._zod;
      if (b.values) {
        y[o] ?? (y[o] = /* @__PURE__ */ new Set());
        for (const P of b.values)
          y[o].add(P);
      }
    }
    return y;
  });
  const n = Gt, u = t.catchall;
  let c;
  e._zod.parse = (f, y) => {
    c ?? (c = r.value);
    const o = f.value;
    if (!n(o))
      return f.issues.push({
        expected: "object",
        code: "invalid_type",
        input: o,
        inst: e
      }), f;
    f.value = {};
    const b = [], P = c.shape;
    for (const R of c.keys) {
      const U = P[R]._zod.run({ value: o[R], issues: [] }, y);
      U instanceof Promise ? b.push(U.then((Ee) => Wt(Ee, f, R, o))) : Wt(U, f, R, o);
    }
    return u ? rs(b, o, f, y, r.value, e) : b.length ? Promise.all(b).then(() => f) : f;
  };
}), Eo = /* @__PURE__ */ _("$ZodObjectJIT", (e, t) => {
  Ao.init(e, t);
  const i = e._zod.parse, r = Li(() => is(t)), n = (R) => {
    const B = new Xa(["shape", "payload", "ctx"]), U = r.value, Ee = (Ce) => {
      const be = er(Ce);
      return `shape[${be}]._zod.run({ value: input[${be}], issues: [] }, ctx)`;
    };
    B.write("const input = payload.value;");
    const O = /* @__PURE__ */ Object.create(null);
    let ne = 0;
    for (const Ce of U.keys)
      O[Ce] = `key_${ne++}`;
    B.write("const newResult = {};");
    for (const Ce of U.keys) {
      const be = O[Ce], Je = er(Ce);
      B.write(`const ${be} = ${Ee(Ce)};`), B.write(`
        if (${be}.issues.length) {
          payload.issues = payload.issues.concat(${be}.issues.map(iss => ({
            ...iss,
            path: iss.path ? [${Je}, ...iss.path] : [${Je}]
          })));
        }
        
        
        if (${be}.value === undefined) {
          if (${Je} in input) {
            newResult[${Je}] = undefined;
          }
        } else {
          newResult[${Je}] = ${be}.value;
        }
        
      `);
    }
    B.write("payload.value = newResult;"), B.write("return payload;");
    const bt = B.compile();
    return (Ce, be) => bt(R, Ce, be);
  };
  let u;
  const c = Gt, f = !Br.jitless, o = f && Un.value, b = t.catchall;
  let P;
  e._zod.parse = (R, B) => {
    P ?? (P = r.value);
    const U = R.value;
    return c(U) ? f && o && B?.async === !1 && B.jitless !== !0 ? (u || (u = n(t.shape)), R = u(R, B), b ? rs([], U, R, B, P, e) : R) : i(R, B) : (R.issues.push({
      expected: "object",
      code: "invalid_type",
      input: U,
      inst: e
    }), R);
  };
});
function rr(e, t, i, r) {
  for (const u of e)
    if (u.issues.length === 0)
      return t.value = u.value, t;
  const n = e.filter((u) => !nt(u));
  return n.length === 1 ? (t.value = n[0].value, n[0]) : (t.issues.push({
    code: "invalid_union",
    input: t.value,
    inst: i,
    errors: e.map((u) => u.issues.map((c) => Ge(c, r, He())))
  }), t);
}
const Io = /* @__PURE__ */ _("$ZodUnion", (e, t) => {
  Q.init(e, t), Z(e._zod, "optin", () => t.options.some((n) => n._zod.optin === "optional") ? "optional" : void 0), Z(e._zod, "optout", () => t.options.some((n) => n._zod.optout === "optional") ? "optional" : void 0), Z(e._zod, "values", () => {
    if (t.options.every((n) => n._zod.values))
      return new Set(t.options.flatMap((n) => Array.from(n._zod.values)));
  }), Z(e._zod, "pattern", () => {
    if (t.options.every((n) => n._zod.pattern)) {
      const n = t.options.map((u) => u._zod.pattern);
      return new RegExp(`^(${n.map((u) => Ri(u.source)).join("|")})$`);
    }
  });
  const i = t.options.length === 1, r = t.options[0]._zod.run;
  e._zod.parse = (n, u) => {
    if (i)
      return r(n, u);
    let c = !1;
    const f = [];
    for (const y of t.options) {
      const o = y._zod.run({
        value: n.value,
        issues: []
      }, u);
      if (o instanceof Promise)
        f.push(o), c = !0;
      else {
        if (o.issues.length === 0)
          return o;
        f.push(o);
      }
    }
    return c ? Promise.all(f).then((y) => rr(y, n, e, u)) : rr(f, n, e, u);
  };
}), No = /* @__PURE__ */ _("$ZodIntersection", (e, t) => {
  Q.init(e, t), e._zod.parse = (i, r) => {
    const n = i.value, u = t.left._zod.run({ value: n, issues: [] }, r), c = t.right._zod.run({ value: n, issues: [] }, r);
    return u instanceof Promise || c instanceof Promise ? Promise.all([u, c]).then(([y, o]) => sr(i, y, o)) : sr(i, u, c);
  };
});
function _i(e, t) {
  if (e === t)
    return { valid: !0, data: e };
  if (e instanceof Date && t instanceof Date && +e == +t)
    return { valid: !0, data: e };
  if (ct(e) && ct(t)) {
    const i = Object.keys(t), r = Object.keys(e).filter((u) => i.indexOf(u) !== -1), n = { ...e, ...t };
    for (const u of r) {
      const c = _i(e[u], t[u]);
      if (!c.valid)
        return {
          valid: !1,
          mergeErrorPath: [u, ...c.mergeErrorPath]
        };
      n[u] = c.data;
    }
    return { valid: !0, data: n };
  }
  if (Array.isArray(e) && Array.isArray(t)) {
    if (e.length !== t.length)
      return { valid: !1, mergeErrorPath: [] };
    const i = [];
    for (let r = 0; r < e.length; r++) {
      const n = e[r], u = t[r], c = _i(n, u);
      if (!c.valid)
        return {
          valid: !1,
          mergeErrorPath: [r, ...c.mergeErrorPath]
        };
      i.push(c.data);
    }
    return { valid: !0, data: i };
  }
  return { valid: !1, mergeErrorPath: [] };
}
function sr(e, t, i) {
  if (t.issues.length && e.issues.push(...t.issues), i.issues.length && e.issues.push(...i.issues), nt(e))
    return e;
  const r = _i(t.value, i.value);
  if (!r.valid)
    throw new Error(`Unmergable intersection. Error path: ${JSON.stringify(r.mergeErrorPath)}`);
  return e.value = r.data, e;
}
const Lo = /* @__PURE__ */ _("$ZodRecord", (e, t) => {
  Q.init(e, t), e._zod.parse = (i, r) => {
    const n = i.value;
    if (!ct(n))
      return i.issues.push({
        expected: "record",
        code: "invalid_type",
        input: n,
        inst: e
      }), i;
    const u = [], c = t.keyType._zod.values;
    if (c) {
      i.value = {};
      const f = /* @__PURE__ */ new Set();
      for (const o of c)
        if (typeof o == "string" || typeof o == "number" || typeof o == "symbol") {
          f.add(typeof o == "number" ? o.toString() : o);
          const b = t.valueType._zod.run({ value: n[o], issues: [] }, r);
          b instanceof Promise ? u.push(b.then((P) => {
            P.issues.length && i.issues.push(...at(o, P.issues)), i.value[o] = P.value;
          })) : (b.issues.length && i.issues.push(...at(o, b.issues)), i.value[o] = b.value);
        }
      let y;
      for (const o in n)
        f.has(o) || (y = y ?? [], y.push(o));
      y && y.length > 0 && i.issues.push({
        code: "unrecognized_keys",
        input: n,
        inst: e,
        keys: y
      });
    } else {
      i.value = {};
      for (const f of Reflect.ownKeys(n)) {
        if (f === "__proto__")
          continue;
        const y = t.keyType._zod.run({ value: f, issues: [] }, r);
        if (y instanceof Promise)
          throw new Error("Async schemas not supported in object keys currently");
        if (y.issues.length) {
          i.issues.push({
            code: "invalid_key",
            origin: "record",
            issues: y.issues.map((b) => Ge(b, r, He())),
            input: f,
            path: [f],
            inst: e
          }), i.value[y.value] = y.value;
          continue;
        }
        const o = t.valueType._zod.run({ value: n[f], issues: [] }, r);
        o instanceof Promise ? u.push(o.then((b) => {
          b.issues.length && i.issues.push(...at(f, b.issues)), i.value[y.value] = b.value;
        })) : (o.issues.length && i.issues.push(...at(f, o.issues)), i.value[y.value] = o.value);
      }
    }
    return u.length ? Promise.all(u).then(() => i) : i;
  };
}), Oo = /* @__PURE__ */ _("$ZodEnum", (e, t) => {
  Q.init(e, t);
  const i = Fn(t.entries), r = new Set(i);
  e._zod.values = r, e._zod.pattern = new RegExp(`^(${i.filter((n) => qn.has(typeof n)).map((n) => typeof n == "string" ? ht(n) : n.toString()).join("|")})$`), e._zod.parse = (n, u) => {
    const c = n.value;
    return r.has(c) || n.issues.push({
      code: "invalid_value",
      values: i,
      input: c,
      inst: e
    }), n;
  };
}), Ro = /* @__PURE__ */ _("$ZodLiteral", (e, t) => {
  if (Q.init(e, t), t.values.length === 0)
    throw new Error("Cannot create literal schema with no valid values");
  const i = new Set(t.values);
  e._zod.values = i, e._zod.pattern = new RegExp(`^(${t.values.map((r) => typeof r == "string" ? ht(r) : r ? ht(r.toString()) : String(r)).join("|")})$`), e._zod.parse = (r, n) => {
    const u = r.value;
    return i.has(u) || r.issues.push({
      code: "invalid_value",
      values: t.values,
      input: u,
      inst: e
    }), r;
  };
}), Do = /* @__PURE__ */ _("$ZodTransform", (e, t) => {
  Q.init(e, t), e._zod.parse = (i, r) => {
    if (r.direction === "backward")
      throw new Fr(e.constructor.name);
    const n = t.transform(i.value, i);
    if (r.async)
      return (n instanceof Promise ? n : Promise.resolve(n)).then((c) => (i.value = c, i));
    if (n instanceof Promise)
      throw new ot();
    return i.value = n, i;
  };
});
function nr(e, t) {
  return e.issues.length && t === void 0 ? { issues: [], value: void 0 } : e;
}
const Mo = /* @__PURE__ */ _("$ZodOptional", (e, t) => {
  Q.init(e, t), e._zod.optin = "optional", e._zod.optout = "optional", Z(e._zod, "values", () => t.innerType._zod.values ? /* @__PURE__ */ new Set([...t.innerType._zod.values, void 0]) : void 0), Z(e._zod, "pattern", () => {
    const i = t.innerType._zod.pattern;
    return i ? new RegExp(`^(${Ri(i.source)})?$`) : void 0;
  }), e._zod.parse = (i, r) => {
    if (t.innerType._zod.optin === "optional") {
      const n = t.innerType._zod.run(i, r);
      return n instanceof Promise ? n.then((u) => nr(u, i.value)) : nr(n, i.value);
    }
    return i.value === void 0 ? i : t.innerType._zod.run(i, r);
  };
}), Vo = /* @__PURE__ */ _("$ZodNullable", (e, t) => {
  Q.init(e, t), Z(e._zod, "optin", () => t.innerType._zod.optin), Z(e._zod, "optout", () => t.innerType._zod.optout), Z(e._zod, "pattern", () => {
    const i = t.innerType._zod.pattern;
    return i ? new RegExp(`^(${Ri(i.source)}|null)$`) : void 0;
  }), Z(e._zod, "values", () => t.innerType._zod.values ? /* @__PURE__ */ new Set([...t.innerType._zod.values, null]) : void 0), e._zod.parse = (i, r) => i.value === null ? i : t.innerType._zod.run(i, r);
}), jo = /* @__PURE__ */ _("$ZodDefault", (e, t) => {
  Q.init(e, t), e._zod.optin = "optional", Z(e._zod, "values", () => t.innerType._zod.values), e._zod.parse = (i, r) => {
    if (r.direction === "backward")
      return t.innerType._zod.run(i, r);
    if (i.value === void 0)
      return i.value = t.defaultValue, i;
    const n = t.innerType._zod.run(i, r);
    return n instanceof Promise ? n.then((u) => ar(u, t)) : ar(n, t);
  };
});
function ar(e, t) {
  return e.value === void 0 && (e.value = t.defaultValue), e;
}
const zo = /* @__PURE__ */ _("$ZodPrefault", (e, t) => {
  Q.init(e, t), e._zod.optin = "optional", Z(e._zod, "values", () => t.innerType._zod.values), e._zod.parse = (i, r) => (r.direction === "backward" || i.value === void 0 && (i.value = t.defaultValue), t.innerType._zod.run(i, r));
}), $o = /* @__PURE__ */ _("$ZodNonOptional", (e, t) => {
  Q.init(e, t), Z(e._zod, "values", () => {
    const i = t.innerType._zod.values;
    return i ? new Set([...i].filter((r) => r !== void 0)) : void 0;
  }), e._zod.parse = (i, r) => {
    const n = t.innerType._zod.run(i, r);
    return n instanceof Promise ? n.then((u) => or(u, e)) : or(n, e);
  };
});
function or(e, t) {
  return !e.issues.length && e.value === void 0 && e.issues.push({
    code: "invalid_type",
    expected: "nonoptional",
    input: e.value,
    inst: t
  }), e;
}
const Fo = /* @__PURE__ */ _("$ZodCatch", (e, t) => {
  Q.init(e, t), Z(e._zod, "optin", () => t.innerType._zod.optin), Z(e._zod, "optout", () => t.innerType._zod.optout), Z(e._zod, "values", () => t.innerType._zod.values), e._zod.parse = (i, r) => {
    if (r.direction === "backward")
      return t.innerType._zod.run(i, r);
    const n = t.innerType._zod.run(i, r);
    return n instanceof Promise ? n.then((u) => (i.value = u.value, u.issues.length && (i.value = t.catchValue({
      ...i,
      error: {
        issues: u.issues.map((c) => Ge(c, r, He()))
      },
      input: i.value
    }), i.issues = []), i)) : (i.value = n.value, n.issues.length && (i.value = t.catchValue({
      ...i,
      error: {
        issues: n.issues.map((u) => Ge(u, r, He()))
      },
      input: i.value
    }), i.issues = []), i);
  };
}), Bo = /* @__PURE__ */ _("$ZodPipe", (e, t) => {
  Q.init(e, t), Z(e._zod, "values", () => t.in._zod.values), Z(e._zod, "optin", () => t.in._zod.optin), Z(e._zod, "optout", () => t.out._zod.optout), Z(e._zod, "propValues", () => t.in._zod.propValues), e._zod.parse = (i, r) => {
    if (r.direction === "backward") {
      const u = t.out._zod.run(i, r);
      return u instanceof Promise ? u.then((c) => Ft(c, t.in, r)) : Ft(u, t.in, r);
    }
    const n = t.in._zod.run(i, r);
    return n instanceof Promise ? n.then((u) => Ft(u, t.out, r)) : Ft(n, t.out, r);
  };
});
function Ft(e, t, i) {
  return e.issues.length ? (e.aborted = !0, e) : t._zod.run({ value: e.value, issues: e.issues }, i);
}
const Zo = /* @__PURE__ */ _("$ZodReadonly", (e, t) => {
  Q.init(e, t), Z(e._zod, "propValues", () => t.innerType._zod.propValues), Z(e._zod, "values", () => t.innerType._zod.values), Z(e._zod, "optin", () => t.innerType?._zod?.optin), Z(e._zod, "optout", () => t.innerType?._zod?.optout), e._zod.parse = (i, r) => {
    if (r.direction === "backward")
      return t.innerType._zod.run(i, r);
    const n = t.innerType._zod.run(i, r);
    return n instanceof Promise ? n.then(ur) : ur(n);
  };
});
function ur(e) {
  return e.value = Object.freeze(e.value), e;
}
const Uo = /* @__PURE__ */ _("$ZodCustom", (e, t) => {
  me.init(e, t), Q.init(e, t), e._zod.parse = (i, r) => i, e._zod.check = (i) => {
    const r = i.value, n = t.fn(r);
    if (n instanceof Promise)
      return n.then((u) => cr(u, i, r, e));
    cr(n, i, r, e);
  };
});
function cr(e, t, i, r) {
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
    r._zod.def.params && (n.params = r._zod.def.params), t.issues.push(At(n));
  }
}
var hr;
class qo {
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
function Ho() {
  return new qo();
}
(hr = globalThis).__zod_globalRegistry ?? (hr.__zod_globalRegistry = Ho());
const Bt = globalThis.__zod_globalRegistry;
function Go(e, t) {
  return new e({
    type: "string",
    ...L(t)
  });
}
function Wo(e, t) {
  return new e({
    type: "string",
    format: "email",
    check: "string_format",
    abort: !1,
    ...L(t)
  });
}
function lr(e, t) {
  return new e({
    type: "string",
    format: "guid",
    check: "string_format",
    abort: !1,
    ...L(t)
  });
}
function Ko(e, t) {
  return new e({
    type: "string",
    format: "uuid",
    check: "string_format",
    abort: !1,
    ...L(t)
  });
}
function Xo(e, t) {
  return new e({
    type: "string",
    format: "uuid",
    check: "string_format",
    abort: !1,
    version: "v4",
    ...L(t)
  });
}
function Jo(e, t) {
  return new e({
    type: "string",
    format: "uuid",
    check: "string_format",
    abort: !1,
    version: "v6",
    ...L(t)
  });
}
function Yo(e, t) {
  return new e({
    type: "string",
    format: "uuid",
    check: "string_format",
    abort: !1,
    version: "v7",
    ...L(t)
  });
}
function Qo(e, t) {
  return new e({
    type: "string",
    format: "url",
    check: "string_format",
    abort: !1,
    ...L(t)
  });
}
function eu(e, t) {
  return new e({
    type: "string",
    format: "emoji",
    check: "string_format",
    abort: !1,
    ...L(t)
  });
}
function tu(e, t) {
  return new e({
    type: "string",
    format: "nanoid",
    check: "string_format",
    abort: !1,
    ...L(t)
  });
}
function iu(e, t) {
  return new e({
    type: "string",
    format: "cuid",
    check: "string_format",
    abort: !1,
    ...L(t)
  });
}
function ru(e, t) {
  return new e({
    type: "string",
    format: "cuid2",
    check: "string_format",
    abort: !1,
    ...L(t)
  });
}
function su(e, t) {
  return new e({
    type: "string",
    format: "ulid",
    check: "string_format",
    abort: !1,
    ...L(t)
  });
}
function nu(e, t) {
  return new e({
    type: "string",
    format: "xid",
    check: "string_format",
    abort: !1,
    ...L(t)
  });
}
function au(e, t) {
  return new e({
    type: "string",
    format: "ksuid",
    check: "string_format",
    abort: !1,
    ...L(t)
  });
}
function ou(e, t) {
  return new e({
    type: "string",
    format: "ipv4",
    check: "string_format",
    abort: !1,
    ...L(t)
  });
}
function uu(e, t) {
  return new e({
    type: "string",
    format: "ipv6",
    check: "string_format",
    abort: !1,
    ...L(t)
  });
}
function cu(e, t) {
  return new e({
    type: "string",
    format: "cidrv4",
    check: "string_format",
    abort: !1,
    ...L(t)
  });
}
function hu(e, t) {
  return new e({
    type: "string",
    format: "cidrv6",
    check: "string_format",
    abort: !1,
    ...L(t)
  });
}
function lu(e, t) {
  return new e({
    type: "string",
    format: "base64",
    check: "string_format",
    abort: !1,
    ...L(t)
  });
}
function pu(e, t) {
  return new e({
    type: "string",
    format: "base64url",
    check: "string_format",
    abort: !1,
    ...L(t)
  });
}
function fu(e, t) {
  return new e({
    type: "string",
    format: "e164",
    check: "string_format",
    abort: !1,
    ...L(t)
  });
}
function du(e, t) {
  return new e({
    type: "string",
    format: "jwt",
    check: "string_format",
    abort: !1,
    ...L(t)
  });
}
function mu(e, t) {
  return new e({
    type: "string",
    format: "datetime",
    check: "string_format",
    offset: !1,
    local: !1,
    precision: null,
    ...L(t)
  });
}
function yu(e, t) {
  return new e({
    type: "string",
    format: "date",
    check: "string_format",
    ...L(t)
  });
}
function vu(e, t) {
  return new e({
    type: "string",
    format: "time",
    check: "string_format",
    precision: null,
    ...L(t)
  });
}
function xu(e, t) {
  return new e({
    type: "string",
    format: "duration",
    check: "string_format",
    ...L(t)
  });
}
function gu(e, t) {
  return new e({
    type: "number",
    checks: [],
    ...L(t)
  });
}
function bu(e, t) {
  return new e({
    type: "number",
    check: "number_format",
    abort: !1,
    format: "safeint",
    ...L(t)
  });
}
function ku(e) {
  return new e({
    type: "unknown"
  });
}
function _u(e, t) {
  return new e({
    type: "never",
    ...L(t)
  });
}
function pr(e, t) {
  return new Yr({
    check: "less_than",
    ...L(t),
    value: e,
    inclusive: !1
  });
}
function di(e, t) {
  return new Yr({
    check: "less_than",
    ...L(t),
    value: e,
    inclusive: !0
  });
}
function fr(e, t) {
  return new Qr({
    check: "greater_than",
    ...L(t),
    value: e,
    inclusive: !1
  });
}
function mi(e, t) {
  return new Qr({
    check: "greater_than",
    ...L(t),
    value: e,
    inclusive: !0
  });
}
function dr(e, t) {
  return new ja({
    check: "multiple_of",
    ...L(t),
    value: e
  });
}
function ss(e, t) {
  return new $a({
    check: "max_length",
    ...L(t),
    maximum: e
  });
}
function Kt(e, t) {
  return new Fa({
    check: "min_length",
    ...L(t),
    minimum: e
  });
}
function ns(e, t) {
  return new Ba({
    check: "length_equals",
    ...L(t),
    length: e
  });
}
function wu(e, t) {
  return new Za({
    check: "string_format",
    format: "regex",
    ...L(t),
    pattern: e
  });
}
function Su(e) {
  return new Ua({
    check: "string_format",
    format: "lowercase",
    ...L(e)
  });
}
function Tu(e) {
  return new qa({
    check: "string_format",
    format: "uppercase",
    ...L(e)
  });
}
function Pu(e, t) {
  return new Ha({
    check: "string_format",
    format: "includes",
    ...L(t),
    includes: e
  });
}
function Cu(e, t) {
  return new Ga({
    check: "string_format",
    format: "starts_with",
    ...L(t),
    prefix: e
  });
}
function Au(e, t) {
  return new Wa({
    check: "string_format",
    format: "ends_with",
    ...L(t),
    suffix: e
  });
}
function mt(e) {
  return new Ka({
    check: "overwrite",
    tx: e
  });
}
function Eu(e) {
  return mt((t) => t.normalize(e));
}
function Iu() {
  return mt((e) => e.trim());
}
function Nu() {
  return mt((e) => e.toLowerCase());
}
function Lu() {
  return mt((e) => e.toUpperCase());
}
function Ou() {
  return mt((e) => Zn(e));
}
function Ru(e, t, i) {
  return new e({
    type: "array",
    element: t,
    // get element() {
    //   return element;
    // },
    ...L(i)
  });
}
function Du(e, t, i) {
  return new e({
    type: "custom",
    check: "custom",
    fn: t,
    ...L(i)
  });
}
function Mu(e) {
  const t = Vu((i) => (i.addIssue = (r) => {
    if (typeof r == "string")
      i.issues.push(At(r, i.value, t._zod.def));
    else {
      const n = r;
      n.fatal && (n.continue = !1), n.code ?? (n.code = "custom"), n.input ?? (n.input = i.value), n.inst ?? (n.inst = t), n.continue ?? (n.continue = !t._zod.def.abort), i.issues.push(At(n));
    }
  }, e(i.value, i)));
  return t;
}
function Vu(e, t) {
  const i = new me({
    check: "custom",
    ...L(t)
  });
  return i._zod.check = e, i;
}
const ju = /* @__PURE__ */ _("ZodISODateTime", (e, t) => {
  co.init(e, t), Y.init(e, t);
});
function zu(e) {
  return mu(ju, e);
}
const $u = /* @__PURE__ */ _("ZodISODate", (e, t) => {
  ho.init(e, t), Y.init(e, t);
});
function Fu(e) {
  return yu($u, e);
}
const Bu = /* @__PURE__ */ _("ZodISOTime", (e, t) => {
  lo.init(e, t), Y.init(e, t);
});
function Zu(e) {
  return vu(Bu, e);
}
const Uu = /* @__PURE__ */ _("ZodISODuration", (e, t) => {
  po.init(e, t), Y.init(e, t);
});
function qu(e) {
  return xu(Uu, e);
}
const Hu = (e, t) => {
  Hr.init(e, t), e.name = "ZodError", Object.defineProperties(e, {
    format: {
      value: (i) => ia(e, i)
      // enumerable: false,
    },
    flatten: {
      value: (i) => ta(e, i)
      // enumerable: false,
    },
    addIssue: {
      value: (i) => {
        e.issues.push(i), e.message = JSON.stringify(e.issues, ki, 2);
      }
      // enumerable: false,
    },
    addIssues: {
      value: (i) => {
        e.issues.push(...i), e.message = JSON.stringify(e.issues, ki, 2);
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
}, Te = _("ZodError", Hu, {
  Parent: Error
}), Gu = /* @__PURE__ */ Mi(Te), Wu = /* @__PURE__ */ Vi(Te), Ku = /* @__PURE__ */ ii(Te), Xu = /* @__PURE__ */ ri(Te), Ju = /* @__PURE__ */ na(Te), Yu = /* @__PURE__ */ aa(Te), Qu = /* @__PURE__ */ oa(Te), ec = /* @__PURE__ */ ua(Te), tc = /* @__PURE__ */ ca(Te), ic = /* @__PURE__ */ ha(Te), rc = /* @__PURE__ */ la(Te), sc = /* @__PURE__ */ pa(Te), te = /* @__PURE__ */ _("ZodType", (e, t) => (Q.init(e, t), e.def = t, e.type = t.type, Object.defineProperty(e, "_def", { value: t }), e.check = (...i) => e.clone(tt(t, {
  checks: [
    ...t.checks ?? [],
    ...i.map((r) => typeof r == "function" ? { _zod: { check: r, def: { check: "custom" }, onattach: [] } } : r)
  ]
})), e.clone = (i, r) => Ke(e, i, r), e.brand = () => e, e.register = ((i, r) => (i.add(e, r), e)), e.parse = (i, r) => Gu(e, i, r, { callee: e.parse }), e.safeParse = (i, r) => Ku(e, i, r), e.parseAsync = async (i, r) => Wu(e, i, r, { callee: e.parseAsync }), e.safeParseAsync = async (i, r) => Xu(e, i, r), e.spa = e.safeParseAsync, e.encode = (i, r) => Ju(e, i, r), e.decode = (i, r) => Yu(e, i, r), e.encodeAsync = async (i, r) => Qu(e, i, r), e.decodeAsync = async (i, r) => ec(e, i, r), e.safeEncode = (i, r) => tc(e, i, r), e.safeDecode = (i, r) => ic(e, i, r), e.safeEncodeAsync = async (i, r) => rc(e, i, r), e.safeDecodeAsync = async (i, r) => sc(e, i, r), e.refine = (i, r) => e.check(Kc(i, r)), e.superRefine = (i) => e.check(Xc(i)), e.overwrite = (i) => e.check(mt(i)), e.optional = () => xr(e), e.nullable = () => gr(e), e.nullish = () => xr(gr(e)), e.nonoptional = (i) => Bc(e, i), e.array = () => lt(e), e.or = (i) => Oe([e, i]), e.and = (i) => Nc(e, i), e.transform = (i) => br(e, Mc(i)), e.default = (i) => zc(e, i), e.prefault = (i) => Fc(e, i), e.catch = (i) => Uc(e, i), e.pipe = (i) => br(e, i), e.readonly = () => Gc(e), e.describe = (i) => {
  const r = e.clone();
  return Bt.add(r, { description: i }), r;
}, Object.defineProperty(e, "description", {
  get() {
    return Bt.get(e)?.description;
  },
  configurable: !0
}), e.meta = (...i) => {
  if (i.length === 0)
    return Bt.get(e);
  const r = e.clone();
  return Bt.add(r, i[0]), r;
}, e.isOptional = () => e.safeParse(void 0).success, e.isNullable = () => e.safeParse(null).success, e)), as = /* @__PURE__ */ _("_ZodString", (e, t) => {
  ji.init(e, t), te.init(e, t);
  const i = e._zod.bag;
  e.format = i.format ?? null, e.minLength = i.minimum ?? null, e.maxLength = i.maximum ?? null, e.regex = (...r) => e.check(wu(...r)), e.includes = (...r) => e.check(Pu(...r)), e.startsWith = (...r) => e.check(Cu(...r)), e.endsWith = (...r) => e.check(Au(...r)), e.min = (...r) => e.check(Kt(...r)), e.max = (...r) => e.check(ss(...r)), e.length = (...r) => e.check(ns(...r)), e.nonempty = (...r) => e.check(Kt(1, ...r)), e.lowercase = (r) => e.check(Su(r)), e.uppercase = (r) => e.check(Tu(r)), e.trim = () => e.check(Iu()), e.normalize = (...r) => e.check(Eu(...r)), e.toLowerCase = () => e.check(Nu()), e.toUpperCase = () => e.check(Lu()), e.slugify = () => e.check(Ou());
}), nc = /* @__PURE__ */ _("ZodString", (e, t) => {
  ji.init(e, t), as.init(e, t), e.email = (i) => e.check(Wo(ac, i)), e.url = (i) => e.check(Qo(oc, i)), e.jwt = (i) => e.check(du(_c, i)), e.emoji = (i) => e.check(eu(uc, i)), e.guid = (i) => e.check(lr(mr, i)), e.uuid = (i) => e.check(Ko(Zt, i)), e.uuidv4 = (i) => e.check(Xo(Zt, i)), e.uuidv6 = (i) => e.check(Jo(Zt, i)), e.uuidv7 = (i) => e.check(Yo(Zt, i)), e.nanoid = (i) => e.check(tu(cc, i)), e.guid = (i) => e.check(lr(mr, i)), e.cuid = (i) => e.check(iu(hc, i)), e.cuid2 = (i) => e.check(ru(lc, i)), e.ulid = (i) => e.check(su(pc, i)), e.base64 = (i) => e.check(lu(gc, i)), e.base64url = (i) => e.check(pu(bc, i)), e.xid = (i) => e.check(nu(fc, i)), e.ksuid = (i) => e.check(au(dc, i)), e.ipv4 = (i) => e.check(ou(mc, i)), e.ipv6 = (i) => e.check(uu(yc, i)), e.cidrv4 = (i) => e.check(cu(vc, i)), e.cidrv6 = (i) => e.check(hu(xc, i)), e.e164 = (i) => e.check(fu(kc, i)), e.datetime = (i) => e.check(zu(i)), e.date = (i) => e.check(Fu(i)), e.time = (i) => e.check(Zu(i)), e.duration = (i) => e.check(qu(i));
});
function j(e) {
  return Go(nc, e);
}
const Y = /* @__PURE__ */ _("ZodStringFormat", (e, t) => {
  W.init(e, t), as.init(e, t);
}), ac = /* @__PURE__ */ _("ZodEmail", (e, t) => {
  eo.init(e, t), Y.init(e, t);
}), mr = /* @__PURE__ */ _("ZodGUID", (e, t) => {
  Ya.init(e, t), Y.init(e, t);
}), Zt = /* @__PURE__ */ _("ZodUUID", (e, t) => {
  Qa.init(e, t), Y.init(e, t);
}), oc = /* @__PURE__ */ _("ZodURL", (e, t) => {
  to.init(e, t), Y.init(e, t);
}), uc = /* @__PURE__ */ _("ZodEmoji", (e, t) => {
  io.init(e, t), Y.init(e, t);
}), cc = /* @__PURE__ */ _("ZodNanoID", (e, t) => {
  ro.init(e, t), Y.init(e, t);
}), hc = /* @__PURE__ */ _("ZodCUID", (e, t) => {
  so.init(e, t), Y.init(e, t);
}), lc = /* @__PURE__ */ _("ZodCUID2", (e, t) => {
  no.init(e, t), Y.init(e, t);
}), pc = /* @__PURE__ */ _("ZodULID", (e, t) => {
  ao.init(e, t), Y.init(e, t);
}), fc = /* @__PURE__ */ _("ZodXID", (e, t) => {
  oo.init(e, t), Y.init(e, t);
}), dc = /* @__PURE__ */ _("ZodKSUID", (e, t) => {
  uo.init(e, t), Y.init(e, t);
}), mc = /* @__PURE__ */ _("ZodIPv4", (e, t) => {
  fo.init(e, t), Y.init(e, t);
}), yc = /* @__PURE__ */ _("ZodIPv6", (e, t) => {
  mo.init(e, t), Y.init(e, t);
}), vc = /* @__PURE__ */ _("ZodCIDRv4", (e, t) => {
  yo.init(e, t), Y.init(e, t);
}), xc = /* @__PURE__ */ _("ZodCIDRv6", (e, t) => {
  vo.init(e, t), Y.init(e, t);
}), gc = /* @__PURE__ */ _("ZodBase64", (e, t) => {
  xo.init(e, t), Y.init(e, t);
}), bc = /* @__PURE__ */ _("ZodBase64URL", (e, t) => {
  bo.init(e, t), Y.init(e, t);
}), kc = /* @__PURE__ */ _("ZodE164", (e, t) => {
  ko.init(e, t), Y.init(e, t);
}), _c = /* @__PURE__ */ _("ZodJWT", (e, t) => {
  wo.init(e, t), Y.init(e, t);
}), os = /* @__PURE__ */ _("ZodNumber", (e, t) => {
  ts.init(e, t), te.init(e, t), e.gt = (r, n) => e.check(fr(r, n)), e.gte = (r, n) => e.check(mi(r, n)), e.min = (r, n) => e.check(mi(r, n)), e.lt = (r, n) => e.check(pr(r, n)), e.lte = (r, n) => e.check(di(r, n)), e.max = (r, n) => e.check(di(r, n)), e.int = (r) => e.check(yr(r)), e.safe = (r) => e.check(yr(r)), e.positive = (r) => e.check(fr(0, r)), e.nonnegative = (r) => e.check(mi(0, r)), e.negative = (r) => e.check(pr(0, r)), e.nonpositive = (r) => e.check(di(0, r)), e.multipleOf = (r, n) => e.check(dr(r, n)), e.step = (r, n) => e.check(dr(r, n)), e.finite = () => e;
  const i = e._zod.bag;
  e.minValue = Math.max(i.minimum ?? Number.NEGATIVE_INFINITY, i.exclusiveMinimum ?? Number.NEGATIVE_INFINITY) ?? null, e.maxValue = Math.min(i.maximum ?? Number.POSITIVE_INFINITY, i.exclusiveMaximum ?? Number.POSITIVE_INFINITY) ?? null, e.isInt = (i.format ?? "").includes("int") || Number.isSafeInteger(i.multipleOf ?? 0.5), e.isFinite = !0, e.format = i.format ?? null;
});
function Lt(e) {
  return gu(os, e);
}
const wc = /* @__PURE__ */ _("ZodNumberFormat", (e, t) => {
  So.init(e, t), os.init(e, t);
});
function yr(e) {
  return bu(wc, e);
}
const Sc = /* @__PURE__ */ _("ZodUnknown", (e, t) => {
  To.init(e, t), te.init(e, t);
});
function vr() {
  return ku(Sc);
}
const Tc = /* @__PURE__ */ _("ZodNever", (e, t) => {
  Po.init(e, t), te.init(e, t);
});
function Pc(e) {
  return _u(Tc, e);
}
const Cc = /* @__PURE__ */ _("ZodArray", (e, t) => {
  Co.init(e, t), te.init(e, t), e.element = t.element, e.min = (i, r) => e.check(Kt(i, r)), e.nonempty = (i) => e.check(Kt(1, i)), e.max = (i, r) => e.check(ss(i, r)), e.length = (i, r) => e.check(ns(i, r)), e.unwrap = () => e.element;
});
function lt(e, t) {
  return Ru(Cc, e, t);
}
const Ac = /* @__PURE__ */ _("ZodObject", (e, t) => {
  Eo.init(e, t), te.init(e, t), Z(e, "shape", () => t.shape), e.keyof = () => Oc(Object.keys(e._zod.def.shape)), e.catchall = (i) => e.clone({ ...e._zod.def, catchall: i }), e.passthrough = () => e.clone({ ...e._zod.def, catchall: vr() }), e.loose = () => e.clone({ ...e._zod.def, catchall: vr() }), e.strict = () => e.clone({ ...e._zod.def, catchall: Pc() }), e.strip = () => e.clone({ ...e._zod.def, catchall: void 0 }), e.extend = (i) => Xn(e, i), e.safeExtend = (i) => Jn(e, i), e.merge = (i) => Yn(e, i), e.pick = (i) => Wn(e, i), e.omit = (i) => Kn(e, i), e.partial = (...i) => Qn(us, e, i[0]), e.required = (...i) => ea(cs, e, i[0]);
});
function yt(e, t) {
  const i = {
    type: "object",
    shape: e ?? {},
    ...L(t)
  };
  return new Ac(i);
}
const Ec = /* @__PURE__ */ _("ZodUnion", (e, t) => {
  Io.init(e, t), te.init(e, t), e.options = t.options;
});
function Oe(e, t) {
  return new Ec({
    type: "union",
    options: e,
    ...L(t)
  });
}
const Ic = /* @__PURE__ */ _("ZodIntersection", (e, t) => {
  No.init(e, t), te.init(e, t);
});
function Nc(e, t) {
  return new Ic({
    type: "intersection",
    left: e,
    right: t
  });
}
const Lc = /* @__PURE__ */ _("ZodRecord", (e, t) => {
  Lo.init(e, t), te.init(e, t), e.keyType = t.keyType, e.valueType = t.valueType;
});
function We(e, t, i) {
  return new Lc({
    type: "record",
    keyType: e,
    valueType: t,
    ...L(i)
  });
}
const wi = /* @__PURE__ */ _("ZodEnum", (e, t) => {
  Oo.init(e, t), te.init(e, t), e.enum = t.entries, e.options = Object.values(t.entries);
  const i = new Set(Object.keys(t.entries));
  e.extract = (r, n) => {
    const u = {};
    for (const c of r)
      if (i.has(c))
        u[c] = t.entries[c];
      else
        throw new Error(`Key ${c} not found in enum`);
    return new wi({
      ...t,
      checks: [],
      ...L(n),
      entries: u
    });
  }, e.exclude = (r, n) => {
    const u = { ...t.entries };
    for (const c of r)
      if (i.has(c))
        delete u[c];
      else
        throw new Error(`Key ${c} not found in enum`);
    return new wi({
      ...t,
      checks: [],
      ...L(n),
      entries: u
    });
  };
});
function Oc(e, t) {
  const i = Array.isArray(e) ? Object.fromEntries(e.map((r) => [r, r])) : e;
  return new wi({
    type: "enum",
    entries: i,
    ...L(t)
  });
}
const Rc = /* @__PURE__ */ _("ZodLiteral", (e, t) => {
  Ro.init(e, t), te.init(e, t), e.values = new Set(t.values), Object.defineProperty(e, "value", {
    get() {
      if (t.values.length > 1)
        throw new Error("This schema contains multiple valid literal values. Use `.values` instead.");
      return t.values[0];
    }
  });
});
function w(e, t) {
  return new Rc({
    type: "literal",
    values: Array.isArray(e) ? e : [e],
    ...L(t)
  });
}
const Dc = /* @__PURE__ */ _("ZodTransform", (e, t) => {
  Do.init(e, t), te.init(e, t), e._zod.parse = (i, r) => {
    if (r.direction === "backward")
      throw new Fr(e.constructor.name);
    i.addIssue = (u) => {
      if (typeof u == "string")
        i.issues.push(At(u, i.value, t));
      else {
        const c = u;
        c.fatal && (c.continue = !1), c.code ?? (c.code = "custom"), c.input ?? (c.input = i.value), c.inst ?? (c.inst = e), i.issues.push(At(c));
      }
    };
    const n = t.transform(i.value, i);
    return n instanceof Promise ? n.then((u) => (i.value = u, i)) : (i.value = n, i);
  };
});
function Mc(e) {
  return new Dc({
    type: "transform",
    transform: e
  });
}
const us = /* @__PURE__ */ _("ZodOptional", (e, t) => {
  Mo.init(e, t), te.init(e, t), e.unwrap = () => e._zod.def.innerType;
});
function xr(e) {
  return new us({
    type: "optional",
    innerType: e
  });
}
const Vc = /* @__PURE__ */ _("ZodNullable", (e, t) => {
  Vo.init(e, t), te.init(e, t), e.unwrap = () => e._zod.def.innerType;
});
function gr(e) {
  return new Vc({
    type: "nullable",
    innerType: e
  });
}
const jc = /* @__PURE__ */ _("ZodDefault", (e, t) => {
  jo.init(e, t), te.init(e, t), e.unwrap = () => e._zod.def.innerType, e.removeDefault = e.unwrap;
});
function zc(e, t) {
  return new jc({
    type: "default",
    innerType: e,
    get defaultValue() {
      return typeof t == "function" ? t() : Ur(t);
    }
  });
}
const $c = /* @__PURE__ */ _("ZodPrefault", (e, t) => {
  zo.init(e, t), te.init(e, t), e.unwrap = () => e._zod.def.innerType;
});
function Fc(e, t) {
  return new $c({
    type: "prefault",
    innerType: e,
    get defaultValue() {
      return typeof t == "function" ? t() : Ur(t);
    }
  });
}
const cs = /* @__PURE__ */ _("ZodNonOptional", (e, t) => {
  $o.init(e, t), te.init(e, t), e.unwrap = () => e._zod.def.innerType;
});
function Bc(e, t) {
  return new cs({
    type: "nonoptional",
    innerType: e,
    ...L(t)
  });
}
const Zc = /* @__PURE__ */ _("ZodCatch", (e, t) => {
  Fo.init(e, t), te.init(e, t), e.unwrap = () => e._zod.def.innerType, e.removeCatch = e.unwrap;
});
function Uc(e, t) {
  return new Zc({
    type: "catch",
    innerType: e,
    catchValue: typeof t == "function" ? t : () => t
  });
}
const qc = /* @__PURE__ */ _("ZodPipe", (e, t) => {
  Bo.init(e, t), te.init(e, t), e.in = t.in, e.out = t.out;
});
function br(e, t) {
  return new qc({
    type: "pipe",
    in: e,
    out: t
    // ...util.normalizeParams(params),
  });
}
const Hc = /* @__PURE__ */ _("ZodReadonly", (e, t) => {
  Zo.init(e, t), te.init(e, t), e.unwrap = () => e._zod.def.innerType;
});
function Gc(e) {
  return new Hc({
    type: "readonly",
    innerType: e
  });
}
const Wc = /* @__PURE__ */ _("ZodCustom", (e, t) => {
  Uo.init(e, t), te.init(e, t);
});
function Kc(e, t = {}) {
  return Du(Wc, e, t);
}
function Xc(e) {
  return Mu(e);
}
const Jc = Oe([w("amber"), w("green"), w("red"), w("other")]), Yc = Oe([
  w("alpha"),
  w("beta"),
  w("generalAvailability"),
  w("notApplicable"),
  w("preAlpha"),
  w("proposed"),
  w("releaseCandidate"),
  w("unavailable"),
  w("underReview")
]), Qc = Oe([
  w("app"),
  w("connector"),
  w("connectorConnection"),
  w("context"),
  w("contextModelGroup"),
  w("contextModel"),
  w("contextModelDimensionGroup"),
  w("contextModelDimension"),
  w("contextModelDimensionHierarchy"),
  w("contextModelEntityGroup"),
  w("contextModelEntity"),
  w("contextModelEntityDataItem"),
  w("contextModelEntityEvent"),
  w("contextModelEntityPrimaryMeasure"),
  w("contextModelSecondaryMeasureGroup"),
  w("contextModelSecondaryMeasure"),
  w("dataView"),
  w("dimension"),
  w("engine"),
  w("eventQuery"),
  w("presenter"),
  w("presenterPresentation"),
  w("tool")
]), kr = Lt(), eh = yt({
  id: j(),
  color: Jc,
  label: j()
}), th = yt({
  id: j(),
  label: We(j(), j()),
  description: We(j(), j()),
  icon: j().optional(),
  iconDark: j().optional(),
  order: Lt(),
  path: j()
}), hs = yt({
  id: j(),
  label: We(j(), j()),
  description: We(j(), j()),
  firstCreatedAt: kr.optional(),
  icon: j().optional(),
  iconDark: j().optional(),
  lastUpdatedAt: kr.optional(),
  status: eh.optional(),
  statusId: Yc,
  typeId: Qc
}), ih = Oe([w("app"), w("engine"), w("connector"), w("context"), w("presenter"), w("tool")]), rh = hs.extend({
  typeId: ih,
  version: j()
}), sh = hs.extend({
  modelRefs: lt(th),
  order: Lt()
}), nh = w("list"), ah = rh.extend({
  models: lt(sh),
  operations: lt(nh),
  typeId: w("context")
}), oh = Oe([w("amber"), w("green"), w("red"), w("other")]), uh = Oe([
  w("alpha"),
  w("beta"),
  w("generalAvailability"),
  w("notApplicable"),
  w("preAlpha"),
  w("proposed"),
  w("releaseCandidate"),
  w("unavailable"),
  w("underReview")
]), ch = Oe([
  w("app"),
  w("connector"),
  w("connectorConnection"),
  w("context"),
  w("contextModelGroup"),
  w("contextModel"),
  w("contextModelDimensionGroup"),
  w("contextModelDimension"),
  w("contextModelDimensionHierarchy"),
  w("contextModelEntityGroup"),
  w("contextModelEntity"),
  w("contextModelEntityDataItem"),
  w("contextModelEntityEvent"),
  w("contextModelEntityPrimaryMeasure"),
  w("contextModelSecondaryMeasureGroup"),
  w("contextModelSecondaryMeasure"),
  w("dataView"),
  w("dimension"),
  w("engine"),
  w("eventQuery"),
  w("presenter"),
  w("presenterPresentation"),
  w("tool")
]), _r = Lt(), hh = yt({
  id: j(),
  color: oh,
  label: j()
}), lh = yt({
  id: j(),
  label: We(j(), j()),
  description: We(j(), j()),
  icon: j().optional(),
  iconDark: j().optional(),
  order: Lt(),
  path: j()
}), ph = yt({
  id: j(),
  label: We(j(), j()),
  description: We(j(), j()),
  firstCreatedAt: _r.optional(),
  icon: j().optional(),
  iconDark: j().optional(),
  lastUpdatedAt: _r.optional(),
  status: hh.optional(),
  statusId: uh,
  typeId: ch
}), fh = Oe([w("app"), w("engine"), w("connector"), w("context"), w("presenter"), w("tool")]), dh = ph.extend({
  typeId: fh,
  version: j()
}), mh = Oe([w("list"), w("render"), w("setColorMode")]), yh = dh.extend({
  presentations: lt(lh),
  operations: lt(mh),
  typeId: w("presenter")
});
var vh = [509, 0, 227, 0, 150, 4, 294, 9, 1368, 2, 2, 1, 6, 3, 41, 2, 5, 0, 166, 1, 574, 3, 9, 9, 7, 9, 32, 4, 318, 1, 80, 3, 71, 10, 50, 3, 123, 2, 54, 14, 32, 10, 3, 1, 11, 3, 46, 10, 8, 0, 46, 9, 7, 2, 37, 13, 2, 9, 6, 1, 45, 0, 13, 2, 49, 13, 9, 3, 2, 11, 83, 11, 7, 0, 3, 0, 158, 11, 6, 9, 7, 3, 56, 1, 2, 6, 3, 1, 3, 2, 10, 0, 11, 1, 3, 6, 4, 4, 68, 8, 2, 0, 3, 0, 2, 3, 2, 4, 2, 0, 15, 1, 83, 17, 10, 9, 5, 0, 82, 19, 13, 9, 214, 6, 3, 8, 28, 1, 83, 16, 16, 9, 82, 12, 9, 9, 7, 19, 58, 14, 5, 9, 243, 14, 166, 9, 71, 5, 2, 1, 3, 3, 2, 0, 2, 1, 13, 9, 120, 6, 3, 6, 4, 0, 29, 9, 41, 6, 2, 3, 9, 0, 10, 10, 47, 15, 343, 9, 54, 7, 2, 7, 17, 9, 57, 21, 2, 13, 123, 5, 4, 0, 2, 1, 2, 6, 2, 0, 9, 9, 49, 4, 2, 1, 2, 4, 9, 9, 330, 3, 10, 1, 2, 0, 49, 6, 4, 4, 14, 10, 5350, 0, 7, 14, 11465, 27, 2343, 9, 87, 9, 39, 4, 60, 6, 26, 9, 535, 9, 470, 0, 2, 54, 8, 3, 82, 0, 12, 1, 19628, 1, 4178, 9, 519, 45, 3, 22, 543, 4, 4, 5, 9, 7, 3, 6, 31, 3, 149, 2, 1418, 49, 513, 54, 5, 49, 9, 0, 15, 0, 23, 4, 2, 14, 1361, 6, 2, 16, 3, 6, 2, 1, 2, 4, 101, 0, 161, 6, 10, 9, 357, 0, 62, 13, 499, 13, 245, 1, 2, 9, 726, 6, 110, 6, 6, 9, 4759, 9, 787719, 239], ls = [0, 11, 2, 25, 2, 18, 2, 1, 2, 14, 3, 13, 35, 122, 70, 52, 268, 28, 4, 48, 48, 31, 14, 29, 6, 37, 11, 29, 3, 35, 5, 7, 2, 4, 43, 157, 19, 35, 5, 35, 5, 39, 9, 51, 13, 10, 2, 14, 2, 6, 2, 1, 2, 10, 2, 14, 2, 6, 2, 1, 4, 51, 13, 310, 10, 21, 11, 7, 25, 5, 2, 41, 2, 8, 70, 5, 3, 0, 2, 43, 2, 1, 4, 0, 3, 22, 11, 22, 10, 30, 66, 18, 2, 1, 11, 21, 11, 25, 71, 55, 7, 1, 65, 0, 16, 3, 2, 2, 2, 28, 43, 28, 4, 28, 36, 7, 2, 27, 28, 53, 11, 21, 11, 18, 14, 17, 111, 72, 56, 50, 14, 50, 14, 35, 39, 27, 10, 22, 251, 41, 7, 1, 17, 2, 60, 28, 11, 0, 9, 21, 43, 17, 47, 20, 28, 22, 13, 52, 58, 1, 3, 0, 14, 44, 33, 24, 27, 35, 30, 0, 3, 0, 9, 34, 4, 0, 13, 47, 15, 3, 22, 0, 2, 0, 36, 17, 2, 24, 20, 1, 64, 6, 2, 0, 2, 3, 2, 14, 2, 9, 8, 46, 39, 7, 3, 1, 3, 21, 2, 6, 2, 1, 2, 4, 4, 0, 19, 0, 13, 4, 31, 9, 2, 0, 3, 0, 2, 37, 2, 0, 26, 0, 2, 0, 45, 52, 19, 3, 21, 2, 31, 47, 21, 1, 2, 0, 185, 46, 42, 3, 37, 47, 21, 0, 60, 42, 14, 0, 72, 26, 38, 6, 186, 43, 117, 63, 32, 7, 3, 0, 3, 7, 2, 1, 2, 23, 16, 0, 2, 0, 95, 7, 3, 38, 17, 0, 2, 0, 29, 0, 11, 39, 8, 0, 22, 0, 12, 45, 20, 0, 19, 72, 200, 32, 32, 8, 2, 36, 18, 0, 50, 29, 113, 6, 2, 1, 2, 37, 22, 0, 26, 5, 2, 1, 2, 31, 15, 0, 328, 18, 16, 0, 2, 12, 2, 33, 125, 0, 80, 921, 103, 110, 18, 195, 2637, 96, 16, 1071, 18, 5, 26, 3994, 6, 582, 6842, 29, 1763, 568, 8, 30, 18, 78, 18, 29, 19, 47, 17, 3, 32, 20, 6, 18, 433, 44, 212, 63, 129, 74, 6, 0, 67, 12, 65, 1, 2, 0, 29, 6135, 9, 1237, 42, 9, 8936, 3, 2, 6, 2, 1, 2, 290, 16, 0, 30, 2, 3, 0, 15, 3, 9, 395, 2309, 106, 6, 12, 4, 8, 8, 9, 5991, 84, 2, 70, 2, 1, 3, 0, 3, 1, 3, 3, 2, 11, 2, 0, 2, 6, 2, 64, 2, 3, 3, 7, 2, 6, 2, 27, 2, 3, 2, 4, 2, 0, 4, 6, 2, 339, 3, 24, 2, 24, 2, 30, 2, 24, 2, 30, 2, 24, 2, 30, 2, 24, 2, 30, 2, 24, 2, 7, 1845, 30, 7, 5, 262, 61, 147, 44, 11, 6, 17, 0, 322, 29, 19, 43, 485, 27, 229, 29, 3, 0, 496, 6, 2, 3, 2, 1, 2, 14, 2, 196, 60, 67, 8, 0, 1205, 3, 2, 26, 2, 1, 2, 0, 3, 0, 2, 9, 2, 3, 2, 0, 2, 0, 7, 0, 5, 0, 2, 0, 2, 0, 2, 2, 2, 1, 2, 0, 3, 0, 2, 0, 2, 0, 2, 0, 2, 0, 2, 1, 2, 0, 3, 3, 2, 6, 2, 3, 2, 3, 2, 0, 2, 9, 2, 16, 6, 2, 2, 4, 2, 16, 4421, 42719, 33, 4153, 7, 221, 3, 5761, 15, 7472, 16, 621, 2467, 541, 1507, 4938, 6, 4191], xh = "‌‍·̀-ͯ·҃-֑҇-ׇֽֿׁׂׅׄؐ-ًؚ-٩ٰۖ-ۜ۟-۪ۤۧۨ-ۭ۰-۹ܑܰ-݊ަ-ް߀-߉߫-߽߳ࠖ-࠙ࠛ-ࠣࠥ-ࠧࠩ-࡙࠭-࡛ࢗ-࢟࣊-ࣣ࣡-ःऺ-़ा-ॏ॑-ॗॢॣ०-९ঁ-ঃ়া-ৄেৈো-্ৗৢৣ০-৯৾ਁ-ਃ਼ਾ-ੂੇੈੋ-੍ੑ੦-ੱੵઁ-ઃ઼ા-ૅે-ૉો-્ૢૣ૦-૯ૺ-૿ଁ-ଃ଼ା-ୄେୈୋ-୍୕-ୗୢୣ୦-୯ஂா-ூெ-ைொ-்ௗ௦-௯ఀ-ఄ఼ా-ౄె-ైొ-్ౕౖౢౣ౦-౯ಁ-ಃ಼ಾ-ೄೆ-ೈೊ-್ೕೖೢೣ೦-೯ೳഀ-ഃ഻഼ാ-ൄെ-ൈൊ-്ൗൢൣ൦-൯ඁ-ඃ්ා-ුූෘ-ෟ෦-෯ෲෳัิ-ฺ็-๎๐-๙ັິ-ຼ່-໎໐-໙༘༙༠-༩༹༵༷༾༿ཱ-྄྆྇ྍ-ྗྙ-ྼ࿆ါ-ှ၀-၉ၖ-ၙၞ-ၠၢ-ၤၧ-ၭၱ-ၴႂ-ႍႏ-ႝ፝-፟፩-፱ᜒ-᜕ᜲ-᜴ᝒᝓᝲᝳ឴-៓៝០-៩᠋-᠍᠏-᠙ᢩᤠ-ᤫᤰ-᤻᥆-᥏᧐-᧚ᨗ-ᨛᩕ-ᩞ᩠-᩿᩼-᪉᪐-᪙᪰-᪽ᪿ-ᫎᬀ-ᬄ᬴-᭄᭐-᭙᭫-᭳ᮀ-ᮂᮡ-ᮭ᮰-᮹᯦-᯳ᰤ-᰷᱀-᱉᱐-᱙᳐-᳔᳒-᳨᳭᳴᳷-᳹᷀-᷿‌‍‿⁀⁔⃐-⃥⃜⃡-⃰⳯-⵿⳱ⷠ-〪ⷿ-゙゚〯・꘠-꘩꙯ꙴ-꙽ꚞꚟ꛰꛱ꠂ꠆ꠋꠣ-ꠧ꠬ꢀꢁꢴ-ꣅ꣐-꣙꣠-꣱ꣿ-꤉ꤦ-꤭ꥇ-꥓ꦀ-ꦃ꦳-꧀꧐-꧙ꧥ꧰-꧹ꨩ-ꨶꩃꩌꩍ꩐-꩙ꩻ-ꩽꪰꪲ-ꪴꪷꪸꪾ꪿꫁ꫫ-ꫯꫵ꫶ꯣ-ꯪ꯬꯭꯰-꯹ﬞ︀-️︠-︯︳︴﹍-﹏０-９＿･", ps = "ªµºÀ-ÖØ-öø-ˁˆ-ˑˠ-ˤˬˮͰ-ʹͶͷͺ-ͽͿΆΈ-ΊΌΎ-ΡΣ-ϵϷ-ҁҊ-ԯԱ-Ֆՙՠ-ֈא-תׯ-ײؠ-يٮٯٱ-ۓەۥۦۮۯۺ-ۼۿܐܒ-ܯݍ-ޥޱߊ-ߪߴߵߺࠀ-ࠕࠚࠤࠨࡀ-ࡘࡠ-ࡪࡰ-ࢇࢉ-ࢎࢠ-ࣉऄ-हऽॐक़-ॡॱ-ঀঅ-ঌএঐও-নপ-রলশ-হঽৎড়ঢ়য়-ৡৰৱৼਅ-ਊਏਐਓ-ਨਪ-ਰਲਲ਼ਵਸ਼ਸਹਖ਼-ੜਫ਼ੲ-ੴઅ-ઍએ-ઑઓ-નપ-રલળવ-હઽૐૠૡૹଅ-ଌଏଐଓ-ନପ-ରଲଳଵ-ହଽଡ଼ଢ଼ୟ-ୡୱஃஅ-ஊஎ-ஐஒ-கஙசஜஞடணதந-பம-ஹௐఅ-ఌఎ-ఐఒ-నప-హఽౘ-ౚౝౠౡಀಅ-ಌಎ-ಐಒ-ನಪ-ಳವ-ಹಽೝೞೠೡೱೲഄ-ഌഎ-ഐഒ-ഺഽൎൔ-ൖൟ-ൡൺ-ൿඅ-ඖක-නඳ-රලව-ෆก-ะาำเ-ๆກຂຄຆ-ຊຌ-ຣລວ-ະາຳຽເ-ໄໆໜ-ໟༀཀ-ཇཉ-ཬྈ-ྌက-ဪဿၐ-ၕၚ-ၝၡၥၦၮ-ၰၵ-ႁႎႠ-ჅჇჍა-ჺჼ-ቈቊ-ቍቐ-ቖቘቚ-ቝበ-ኈኊ-ኍነ-ኰኲ-ኵኸ-ኾዀዂ-ዅወ-ዖዘ-ጐጒ-ጕጘ-ፚᎀ-ᎏᎠ-Ᏽᏸ-ᏽᐁ-ᙬᙯ-ᙿᚁ-ᚚᚠ-ᛪᛮ-ᛸᜀ-ᜑᜟ-ᜱᝀ-ᝑᝠ-ᝬᝮ-ᝰក-ឳៗៜᠠ-ᡸᢀ-ᢨᢪᢰ-ᣵᤀ-ᤞᥐ-ᥭᥰ-ᥴᦀ-ᦫᦰ-ᧉᨀ-ᨖᨠ-ᩔᪧᬅ-ᬳᭅ-ᭌᮃ-ᮠᮮᮯᮺ-ᯥᰀ-ᰣᱍ-ᱏᱚ-ᱽᲀ-ᲊᲐ-ᲺᲽ-Ჿᳩ-ᳬᳮ-ᳳᳵᳶᳺᴀ-ᶿḀ-ἕἘ-Ἕἠ-ὅὈ-Ὅὐ-ὗὙὛὝὟ-ώᾀ-ᾴᾶ-ᾼιῂ-ῄῆ-ῌῐ-ΐῖ-Ίῠ-Ῥῲ-ῴῶ-ῼⁱⁿₐ-ₜℂℇℊ-ℓℕ℘-ℝℤΩℨK-ℹℼ-ℿⅅ-ⅉⅎⅠ-ↈⰀ-ⳤⳫ-ⳮⳲⳳⴀ-ⴥⴧⴭⴰ-ⵧⵯⶀ-ⶖⶠ-ⶦⶨ-ⶮⶰ-ⶶⶸ-ⶾⷀ-ⷆⷈ-ⷎⷐ-ⷖⷘ-ⷞ々-〇〡-〩〱-〵〸-〼ぁ-ゖ゛-ゟァ-ヺー-ヿㄅ-ㄯㄱ-ㆎㆠ-ㆿㇰ-ㇿ㐀-䶿一-ꒌꓐ-ꓽꔀ-ꘌꘐ-ꘟꘪꘫꙀ-ꙮꙿ-ꚝꚠ-ꛯꜗ-ꜟꜢ-ꞈꞋ-ꟍꟐꟑꟓꟕ-Ƛꟲ-ꠁꠃ-ꠅꠇ-ꠊꠌ-ꠢꡀ-ꡳꢂ-ꢳꣲ-ꣷꣻꣽꣾꤊ-ꤥꤰ-ꥆꥠ-ꥼꦄ-ꦲꧏꧠ-ꧤꧦ-ꧯꧺ-ꧾꨀ-ꨨꩀ-ꩂꩄ-ꩋꩠ-ꩶꩺꩾ-ꪯꪱꪵꪶꪹ-ꪽꫀꫂꫛ-ꫝꫠ-ꫪꫲ-ꫴꬁ-ꬆꬉ-ꬎꬑ-ꬖꬠ-ꬦꬨ-ꬮꬰ-ꭚꭜ-ꭩꭰ-ꯢ가-힣ힰ-ퟆퟋ-ퟻ豈-舘並-龎ﬀ-ﬆﬓ-ﬗיִײַ-ﬨשׁ-זּטּ-לּמּנּסּףּפּצּ-ﮱﯓ-ﴽﵐ-ﶏﶒ-ﷇﷰ-ﷻﹰ-ﹴﹶ-ﻼＡ-Ｚａ-ｚｦ-ﾾￂ-ￇￊ-ￏￒ-ￗￚ-ￜ", yi = {
  3: "abstract boolean byte char class double enum export extends final float goto implements import int interface long native package private protected public short static super synchronized throws transient volatile",
  5: "class enum extends super const export import",
  6: "enum",
  strict: "implements interface let package private protected public static yield",
  strictBind: "eval arguments"
}, vi = "break case catch continue debugger default do else finally for function if return switch throw try var while with null true false instanceof typeof void delete new in this", gh = {
  5: vi,
  "5module": vi + " export import",
  6: vi + " const class extends export import super"
}, bh = /^in(stanceof)?$/, kh = new RegExp("[" + ps + "]"), _h = new RegExp("[" + ps + xh + "]");
function Si(e, t) {
  for (var i = 65536, r = 0; r < t.length; r += 2) {
    if (i += t[r], i > e)
      return !1;
    if (i += t[r + 1], i >= e)
      return !0;
  }
  return !1;
}
function Ae(e, t) {
  return e < 65 ? e === 36 : e < 91 ? !0 : e < 97 ? e === 95 : e < 123 ? !0 : e <= 65535 ? e >= 170 && kh.test(String.fromCharCode(e)) : t === !1 ? !1 : Si(e, ls);
}
function je(e, t) {
  return e < 48 ? e === 36 : e < 58 ? !0 : e < 65 ? !1 : e < 91 ? !0 : e < 97 ? e === 95 : e < 123 ? !0 : e <= 65535 ? e >= 170 && _h.test(String.fromCharCode(e)) : t === !1 ? !1 : Si(e, ls) || Si(e, vh);
}
var V = function(t, i) {
  i === void 0 && (i = {}), this.label = t, this.keyword = i.keyword, this.beforeExpr = !!i.beforeExpr, this.startsExpr = !!i.startsExpr, this.isLoop = !!i.isLoop, this.isAssign = !!i.isAssign, this.prefix = !!i.prefix, this.postfix = !!i.postfix, this.binop = i.binop || null, this.updateContext = null;
};
function ke(e, t) {
  return new V(e, { beforeExpr: !0, binop: t });
}
var _e = { beforeExpr: !0 }, fe = { startsExpr: !0 }, pt = {};
function $(e, t) {
  return t === void 0 && (t = {}), t.keyword = e, pt[e] = new V(e, t);
}
var l = {
  num: new V("num", fe),
  regexp: new V("regexp", fe),
  string: new V("string", fe),
  name: new V("name", fe),
  privateId: new V("privateId", fe),
  eof: new V("eof"),
  // Punctuation token types.
  bracketL: new V("[", { beforeExpr: !0, startsExpr: !0 }),
  bracketR: new V("]"),
  braceL: new V("{", { beforeExpr: !0, startsExpr: !0 }),
  braceR: new V("}"),
  parenL: new V("(", { beforeExpr: !0, startsExpr: !0 }),
  parenR: new V(")"),
  comma: new V(",", _e),
  semi: new V(";", _e),
  colon: new V(":", _e),
  dot: new V("."),
  question: new V("?", _e),
  questionDot: new V("?."),
  arrow: new V("=>", _e),
  template: new V("template"),
  invalidTemplate: new V("invalidTemplate"),
  ellipsis: new V("...", _e),
  backQuote: new V("`", fe),
  dollarBraceL: new V("${", { beforeExpr: !0, startsExpr: !0 }),
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
  eq: new V("=", { beforeExpr: !0, isAssign: !0 }),
  assign: new V("_=", { beforeExpr: !0, isAssign: !0 }),
  incDec: new V("++/--", { prefix: !0, postfix: !0, startsExpr: !0 }),
  prefix: new V("!/~", { beforeExpr: !0, prefix: !0, startsExpr: !0 }),
  logicalOR: ke("||", 1),
  logicalAND: ke("&&", 2),
  bitwiseOR: ke("|", 3),
  bitwiseXOR: ke("^", 4),
  bitwiseAND: ke("&", 5),
  equality: ke("==/!=/===/!==", 6),
  relational: ke("</>/<=/>=", 7),
  bitShift: ke("<</>>/>>>", 8),
  plusMin: new V("+/-", { beforeExpr: !0, binop: 9, prefix: !0, startsExpr: !0 }),
  modulo: ke("%", 10),
  star: ke("*", 10),
  slash: ke("/", 10),
  starstar: new V("**", { beforeExpr: !0 }),
  coalesce: ke("??", 1),
  // Keyword token types.
  _break: $("break"),
  _case: $("case", _e),
  _catch: $("catch"),
  _continue: $("continue"),
  _debugger: $("debugger"),
  _default: $("default", _e),
  _do: $("do", { isLoop: !0, beforeExpr: !0 }),
  _else: $("else", _e),
  _finally: $("finally"),
  _for: $("for", { isLoop: !0 }),
  _function: $("function", fe),
  _if: $("if"),
  _return: $("return", _e),
  _switch: $("switch"),
  _throw: $("throw", _e),
  _try: $("try"),
  _var: $("var"),
  _const: $("const"),
  _while: $("while", { isLoop: !0 }),
  _with: $("with"),
  _new: $("new", { beforeExpr: !0, startsExpr: !0 }),
  _this: $("this", fe),
  _super: $("super", fe),
  _class: $("class", fe),
  _extends: $("extends", _e),
  _export: $("export"),
  _import: $("import", fe),
  _null: $("null", fe),
  _true: $("true", fe),
  _false: $("false", fe),
  _in: $("in", { beforeExpr: !0, binop: 7 }),
  _instanceof: $("instanceof", { beforeExpr: !0, binop: 7 }),
  _typeof: $("typeof", { beforeExpr: !0, prefix: !0, startsExpr: !0 }),
  _void: $("void", { beforeExpr: !0, prefix: !0, startsExpr: !0 }),
  _delete: $("delete", { beforeExpr: !0, prefix: !0, startsExpr: !0 })
}, he = /\r\n?|\n|\u2028|\u2029/, fs = new RegExp(he.source, "g");
function it(e) {
  return e === 10 || e === 13 || e === 8232 || e === 8233;
}
function ds(e, t, i) {
  i === void 0 && (i = e.length);
  for (var r = t; r < i; r++) {
    var n = e.charCodeAt(r);
    if (it(n))
      return r < i - 1 && n === 13 && e.charCodeAt(r + 1) === 10 ? r + 2 : r + 1;
  }
  return -1;
}
var zi = /[\u1680\u2000-\u200a\u202f\u205f\u3000\ufeff]/, oe = /(?:\s|\/\/.*|\/\*[^]*?\*\/)*/g, ms = Object.prototype, wh = ms.hasOwnProperty, Sh = ms.toString, vt = Object.hasOwn || (function(e, t) {
  return wh.call(e, t);
}), wr = Array.isArray || (function(e) {
  return Sh.call(e) === "[object Array]";
}), Sr = /* @__PURE__ */ Object.create(null);
function qe(e) {
  return Sr[e] || (Sr[e] = new RegExp("^(?:" + e.replace(/ /g, "|") + ")$"));
}
function ze(e) {
  return e <= 65535 ? String.fromCharCode(e) : (e -= 65536, String.fromCharCode((e >> 10) + 55296, (e & 1023) + 56320));
}
var Th = /(?:[\uD800-\uDBFF](?![\uDC00-\uDFFF])|(?:[^\uD800-\uDBFF]|^)[\uDC00-\uDFFF])/, ft = function(t, i) {
  this.line = t, this.column = i;
};
ft.prototype.offset = function(t) {
  return new ft(this.line, this.column + t);
};
var Ot = function(t, i, r) {
  this.start = i, this.end = r, t.sourceFile !== null && (this.source = t.sourceFile);
};
function $i(e, t) {
  for (var i = 1, r = 0; ; ) {
    var n = ds(e, r, t);
    if (n < 0)
      return new ft(i, t - r);
    ++i, r = n;
  }
}
var Xt = {
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
}, Tr = !1;
function Ph(e) {
  var t = {};
  for (var i in Xt)
    t[i] = e && vt(e, i) ? e[i] : Xt[i];
  if (t.ecmaVersion === "latest" ? t.ecmaVersion = 1e8 : t.ecmaVersion == null ? (!Tr && typeof console == "object" && console.warn && (Tr = !0, console.warn(`Since Acorn 8.0.0, options.ecmaVersion is required.
Defaulting to 2020, but this will stop working in the future.`)), t.ecmaVersion = 11) : t.ecmaVersion >= 2015 && (t.ecmaVersion -= 2009), t.allowReserved == null && (t.allowReserved = t.ecmaVersion < 5), (!e || e.allowHashBang == null) && (t.allowHashBang = t.ecmaVersion >= 14), wr(t.onToken)) {
    var r = t.onToken;
    t.onToken = function(n) {
      return r.push(n);
    };
  }
  return wr(t.onComment) && (t.onComment = Ch(t, t.onComment)), t;
}
function Ch(e, t) {
  return function(i, r, n, u, c, f) {
    var y = {
      type: i ? "Block" : "Line",
      value: r,
      start: n,
      end: u
    };
    e.locations && (y.loc = new Ot(this, c, f)), e.ranges && (y.range = [n, u]), t.push(y);
  };
}
var Et = 1, xt = 2, Fi = 4, ys = 8, Bi = 16, vs = 32, ni = 64, xs = 128, rt = 256, Rt = 512, ai = Et | xt | rt;
function Zi(e, t) {
  return xt | (e ? Fi : 0) | (t ? ys : 0);
}
var Jt = 0, Ui = 1, Fe = 2, gs = 3, bs = 4, ks = 5, J = function(t, i, r) {
  this.options = t = Ph(t), this.sourceFile = t.sourceFile, this.keywords = qe(gh[t.ecmaVersion >= 6 ? 6 : t.sourceType === "module" ? "5module" : 5]);
  var n = "";
  t.allowReserved !== !0 && (n = yi[t.ecmaVersion >= 6 ? 6 : t.ecmaVersion === 5 ? 5 : 3], t.sourceType === "module" && (n += " await")), this.reservedWords = qe(n);
  var u = (n ? n + " " : "") + yi.strict;
  this.reservedWordsStrict = qe(u), this.reservedWordsStrictBind = qe(u + " " + yi.strictBind), this.input = String(i), this.containsEsc = !1, r ? (this.pos = r, this.lineStart = this.input.lastIndexOf(`
`, r - 1) + 1, this.curLine = this.input.slice(0, this.lineStart).split(he).length) : (this.pos = this.lineStart = 0, this.curLine = 1), this.type = l.eof, this.value = null, this.start = this.end = this.pos, this.startLoc = this.endLoc = this.curPosition(), this.lastTokEndLoc = this.lastTokStartLoc = null, this.lastTokStart = this.lastTokEnd = this.pos, this.context = this.initialContext(), this.exprAllowed = !0, this.inModule = t.sourceType === "module", this.strict = this.inModule || this.strictDirective(this.pos), this.potentialArrowAt = -1, this.potentialArrowInForAwait = !1, this.yieldPos = this.awaitPos = this.awaitIdentPos = 0, this.labels = [], this.undefinedExports = /* @__PURE__ */ Object.create(null), this.pos === 0 && t.allowHashBang && this.input.slice(0, 2) === "#!" && this.skipLineComment(2), this.scopeStack = [], this.enterScope(Et), this.regexpState = null, this.privateNameStack = [];
}, Re = { inFunction: { configurable: !0 }, inGenerator: { configurable: !0 }, inAsync: { configurable: !0 }, canAwait: { configurable: !0 }, allowSuper: { configurable: !0 }, allowDirectSuper: { configurable: !0 }, treatFunctionsAsVar: { configurable: !0 }, allowNewDotTarget: { configurable: !0 }, inClassStaticBlock: { configurable: !0 } };
J.prototype.parse = function() {
  var t = this.options.program || this.startNode();
  return this.nextToken(), this.parseTopLevel(t);
};
Re.inFunction.get = function() {
  return (this.currentVarScope().flags & xt) > 0;
};
Re.inGenerator.get = function() {
  return (this.currentVarScope().flags & ys) > 0;
};
Re.inAsync.get = function() {
  return (this.currentVarScope().flags & Fi) > 0;
};
Re.canAwait.get = function() {
  for (var e = this.scopeStack.length - 1; e >= 0; e--) {
    var t = this.scopeStack[e], i = t.flags;
    if (i & (rt | Rt))
      return !1;
    if (i & xt)
      return (i & Fi) > 0;
  }
  return this.inModule && this.options.ecmaVersion >= 13 || this.options.allowAwaitOutsideFunction;
};
Re.allowSuper.get = function() {
  var e = this.currentThisScope(), t = e.flags;
  return (t & ni) > 0 || this.options.allowSuperOutsideMethod;
};
Re.allowDirectSuper.get = function() {
  return (this.currentThisScope().flags & xs) > 0;
};
Re.treatFunctionsAsVar.get = function() {
  return this.treatFunctionsAsVarInScope(this.currentScope());
};
Re.allowNewDotTarget.get = function() {
  for (var e = this.scopeStack.length - 1; e >= 0; e--) {
    var t = this.scopeStack[e], i = t.flags;
    if (i & (rt | Rt) || i & xt && !(i & Bi))
      return !0;
  }
  return !1;
};
Re.inClassStaticBlock.get = function() {
  return (this.currentVarScope().flags & rt) > 0;
};
J.extend = function() {
  for (var t = [], i = arguments.length; i--; ) t[i] = arguments[i];
  for (var r = this, n = 0; n < t.length; n++)
    r = t[n](r);
  return r;
};
J.parse = function(t, i) {
  return new this(i, t).parse();
};
J.parseExpressionAt = function(t, i, r) {
  var n = new this(r, t, i);
  return n.nextToken(), n.parseExpression();
};
J.tokenizer = function(t, i) {
  return new this(i, t);
};
Object.defineProperties(J.prototype, Re);
var le = J.prototype, Ah = /^(?:'((?:\\[^]|[^'\\])*?)'|"((?:\\[^]|[^"\\])*?)")/;
le.strictDirective = function(e) {
  if (this.options.ecmaVersion < 5)
    return !1;
  for (; ; ) {
    oe.lastIndex = e, e += oe.exec(this.input)[0].length;
    var t = Ah.exec(this.input.slice(e));
    if (!t)
      return !1;
    if ((t[1] || t[2]) === "use strict") {
      oe.lastIndex = e + t[0].length;
      var i = oe.exec(this.input), r = i.index + i[0].length, n = this.input.charAt(r);
      return n === ";" || n === "}" || he.test(i[0]) && !(/[(`.[+\-/*%<>=,?^&]/.test(n) || n === "!" && this.input.charAt(r + 1) === "=");
    }
    e += t[0].length, oe.lastIndex = e, e += oe.exec(this.input)[0].length, this.input[e] === ";" && e++;
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
var oi = function() {
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
var E = J.prototype;
E.parseTopLevel = function(e) {
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
var qi = { kind: "loop" }, Eh = { kind: "switch" };
E.isLet = function(e) {
  if (this.options.ecmaVersion < 6 || !this.isContextual("let"))
    return !1;
  oe.lastIndex = this.pos;
  var t = oe.exec(this.input), i = this.pos + t[0].length, r = this.input.charCodeAt(i);
  if (r === 91 || r === 92)
    return !0;
  if (e)
    return !1;
  if (r === 123 || r > 55295 && r < 56320)
    return !0;
  if (Ae(r, !0)) {
    for (var n = i + 1; je(r = this.input.charCodeAt(n), !0); )
      ++n;
    if (r === 92 || r > 55295 && r < 56320)
      return !0;
    var u = this.input.slice(i, n);
    if (!bh.test(u))
      return !0;
  }
  return !1;
};
E.isAsyncFunction = function() {
  if (this.options.ecmaVersion < 8 || !this.isContextual("async"))
    return !1;
  oe.lastIndex = this.pos;
  var e = oe.exec(this.input), t = this.pos + e[0].length, i;
  return !he.test(this.input.slice(this.pos, t)) && this.input.slice(t, t + 8) === "function" && (t + 8 === this.input.length || !(je(i = this.input.charCodeAt(t + 8)) || i > 55295 && i < 56320));
};
E.isUsingKeyword = function(e, t) {
  if (this.options.ecmaVersion < 17 || !this.isContextual(e ? "await" : "using"))
    return !1;
  oe.lastIndex = this.pos;
  var i = oe.exec(this.input), r = this.pos + i[0].length;
  if (he.test(this.input.slice(this.pos, r)))
    return !1;
  if (e) {
    var n = r + 5, u;
    if (this.input.slice(r, n) !== "using" || n === this.input.length || je(u = this.input.charCodeAt(n)) || u > 55295 && u < 56320)
      return !1;
    oe.lastIndex = n;
    var c = oe.exec(this.input);
    if (c && he.test(this.input.slice(n, n + c[0].length)))
      return !1;
  }
  if (t) {
    var f = r + 2, y;
    if (this.input.slice(r, f) === "of" && (f === this.input.length || !je(y = this.input.charCodeAt(f)) && !(y > 55295 && y < 56320)))
      return !1;
  }
  var o = this.input.charCodeAt(r);
  return Ae(o, !0) || o === 92;
};
E.isAwaitUsing = function(e) {
  return this.isUsingKeyword(!0, e);
};
E.isUsing = function(e) {
  return this.isUsingKeyword(!1, e);
};
E.parseStatement = function(e, t, i) {
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
        oe.lastIndex = this.pos;
        var c = oe.exec(this.input), f = this.pos + c[0].length, y = this.input.charCodeAt(f);
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
      var b = this.value, P = this.parseExpression();
      return r === l.name && P.type === "Identifier" && this.eat(l.colon) ? this.parseLabeledStatement(n, b, P, e) : this.parseExpressionStatement(n, P);
  }
};
E.parseBreakContinueStatement = function(e, t) {
  var i = t === "break";
  this.next(), this.eat(l.semi) || this.insertSemicolon() ? e.label = null : this.type !== l.name ? this.unexpected() : (e.label = this.parseIdent(), this.semicolon());
  for (var r = 0; r < this.labels.length; ++r) {
    var n = this.labels[r];
    if ((e.label == null || n.name === e.label.name) && (n.kind != null && (i || n.kind === "loop") || e.label && i))
      break;
  }
  return r === this.labels.length && this.raise(e.start, "Unsyntactic " + t), this.finishNode(e, i ? "BreakStatement" : "ContinueStatement");
};
E.parseDebuggerStatement = function(e) {
  return this.next(), this.semicolon(), this.finishNode(e, "DebuggerStatement");
};
E.parseDoStatement = function(e) {
  return this.next(), this.labels.push(qi), e.body = this.parseStatement("do"), this.labels.pop(), this.expect(l._while), e.test = this.parseParenExpression(), this.options.ecmaVersion >= 6 ? this.eat(l.semi) : this.semicolon(), this.finishNode(e, "DoWhileStatement");
};
E.parseForStatement = function(e) {
  this.next();
  var t = this.options.ecmaVersion >= 9 && this.canAwait && this.eatContextual("await") ? this.lastTokStart : -1;
  if (this.labels.push(qi), this.enterScope(0), this.expect(l.parenL), this.type === l.semi)
    return t > -1 && this.unexpected(t), this.parseFor(e, null);
  var i = this.isLet();
  if (this.type === l._var || this.type === l._const || i) {
    var r = this.startNode(), n = i ? "let" : this.value;
    return this.next(), this.parseVar(r, !0, n), this.finishNode(r, "VariableDeclaration"), this.parseForAfterInit(e, r, t);
  }
  var u = this.isContextual("let"), c = !1, f = this.isUsing(!0) ? "using" : this.isAwaitUsing(!0) ? "await using" : null;
  if (f) {
    var y = this.startNode();
    return this.next(), f === "await using" && this.next(), this.parseVar(y, !0, f), this.finishNode(y, "VariableDeclaration"), this.parseForAfterInit(e, y, t);
  }
  var o = this.containsEsc, b = new oi(), P = this.start, R = t > -1 ? this.parseExprSubscripts(b, "await") : this.parseExpression(!0, b);
  return this.type === l._in || (c = this.options.ecmaVersion >= 6 && this.isContextual("of")) ? (t > -1 ? (this.type === l._in && this.unexpected(t), e.await = !0) : c && this.options.ecmaVersion >= 8 && (R.start === P && !o && R.type === "Identifier" && R.name === "async" ? this.unexpected() : this.options.ecmaVersion >= 9 && (e.await = !1)), u && c && this.raise(R.start, "The left-hand side of a for-of loop may not start with 'let'."), this.toAssignable(R, !1, b), this.checkLValPattern(R), this.parseForIn(e, R)) : (this.checkExpressionErrors(b, !0), t > -1 && this.unexpected(t), this.parseFor(e, R));
};
E.parseForAfterInit = function(e, t, i) {
  return (this.type === l._in || this.options.ecmaVersion >= 6 && this.isContextual("of")) && t.declarations.length === 1 ? (this.options.ecmaVersion >= 9 && (this.type === l._in ? i > -1 && this.unexpected(i) : e.await = i > -1), this.parseForIn(e, t)) : (i > -1 && this.unexpected(i), this.parseFor(e, t));
};
E.parseFunctionStatement = function(e, t, i) {
  return this.next(), this.parseFunction(e, Tt | (i ? 0 : Ti), !1, t);
};
E.parseIfStatement = function(e) {
  return this.next(), e.test = this.parseParenExpression(), e.consequent = this.parseStatement("if"), e.alternate = this.eat(l._else) ? this.parseStatement("if") : null, this.finishNode(e, "IfStatement");
};
E.parseReturnStatement = function(e) {
  return !this.inFunction && !this.options.allowReturnOutsideFunction && this.raise(this.start, "'return' outside of function"), this.next(), this.eat(l.semi) || this.insertSemicolon() ? e.argument = null : (e.argument = this.parseExpression(), this.semicolon()), this.finishNode(e, "ReturnStatement");
};
E.parseSwitchStatement = function(e) {
  this.next(), e.discriminant = this.parseParenExpression(), e.cases = [], this.expect(l.braceL), this.labels.push(Eh), this.enterScope(0);
  for (var t, i = !1; this.type !== l.braceR; )
    if (this.type === l._case || this.type === l._default) {
      var r = this.type === l._case;
      t && this.finishNode(t, "SwitchCase"), e.cases.push(t = this.startNode()), t.consequent = [], this.next(), r ? t.test = this.parseExpression() : (i && this.raiseRecoverable(this.lastTokStart, "Multiple default clauses"), i = !0, t.test = null), this.expect(l.colon);
    } else
      t || this.unexpected(), t.consequent.push(this.parseStatement(null));
  return this.exitScope(), t && this.finishNode(t, "SwitchCase"), this.next(), this.labels.pop(), this.finishNode(e, "SwitchStatement");
};
E.parseThrowStatement = function(e) {
  return this.next(), he.test(this.input.slice(this.lastTokEnd, this.start)) && this.raise(this.lastTokEnd, "Illegal newline after throw"), e.argument = this.parseExpression(), this.semicolon(), this.finishNode(e, "ThrowStatement");
};
var Ih = [];
E.parseCatchClauseParam = function() {
  var e = this.parseBindingAtom(), t = e.type === "Identifier";
  return this.enterScope(t ? vs : 0), this.checkLValPattern(e, t ? bs : Fe), this.expect(l.parenR), e;
};
E.parseTryStatement = function(e) {
  if (this.next(), e.block = this.parseBlock(), e.handler = null, this.type === l._catch) {
    var t = this.startNode();
    this.next(), this.eat(l.parenL) ? t.param = this.parseCatchClauseParam() : (this.options.ecmaVersion < 10 && this.unexpected(), t.param = null, this.enterScope(0)), t.body = this.parseBlock(!1), this.exitScope(), e.handler = this.finishNode(t, "CatchClause");
  }
  return e.finalizer = this.eat(l._finally) ? this.parseBlock() : null, !e.handler && !e.finalizer && this.raise(e.start, "Missing catch or finally clause"), this.finishNode(e, "TryStatement");
};
E.parseVarStatement = function(e, t, i) {
  return this.next(), this.parseVar(e, !1, t, i), this.semicolon(), this.finishNode(e, "VariableDeclaration");
};
E.parseWhileStatement = function(e) {
  return this.next(), e.test = this.parseParenExpression(), this.labels.push(qi), e.body = this.parseStatement("while"), this.labels.pop(), this.finishNode(e, "WhileStatement");
};
E.parseWithStatement = function(e) {
  return this.strict && this.raise(this.start, "'with' in strict mode"), this.next(), e.object = this.parseParenExpression(), e.body = this.parseStatement("with"), this.finishNode(e, "WithStatement");
};
E.parseEmptyStatement = function(e) {
  return this.next(), this.finishNode(e, "EmptyStatement");
};
E.parseLabeledStatement = function(e, t, i, r) {
  for (var n = 0, u = this.labels; n < u.length; n += 1) {
    var c = u[n];
    c.name === t && this.raise(i.start, "Label '" + t + "' is already declared");
  }
  for (var f = this.type.isLoop ? "loop" : this.type === l._switch ? "switch" : null, y = this.labels.length - 1; y >= 0; y--) {
    var o = this.labels[y];
    if (o.statementStart === e.start)
      o.statementStart = this.start, o.kind = f;
    else
      break;
  }
  return this.labels.push({ name: t, kind: f, statementStart: this.start }), e.body = this.parseStatement(r ? r.indexOf("label") === -1 ? r + "label" : r : "label"), this.labels.pop(), e.label = i, this.finishNode(e, "LabeledStatement");
};
E.parseExpressionStatement = function(e, t) {
  return e.expression = t, this.semicolon(), this.finishNode(e, "ExpressionStatement");
};
E.parseBlock = function(e, t, i) {
  for (e === void 0 && (e = !0), t === void 0 && (t = this.startNode()), t.body = [], this.expect(l.braceL), e && this.enterScope(0); this.type !== l.braceR; ) {
    var r = this.parseStatement(null);
    t.body.push(r);
  }
  return i && (this.strict = !1), this.next(), e && this.exitScope(), this.finishNode(t, "BlockStatement");
};
E.parseFor = function(e, t) {
  return e.init = t, this.expect(l.semi), e.test = this.type === l.semi ? null : this.parseExpression(), this.expect(l.semi), e.update = this.type === l.parenR ? null : this.parseExpression(), this.expect(l.parenR), e.body = this.parseStatement("for"), this.exitScope(), this.labels.pop(), this.finishNode(e, "ForStatement");
};
E.parseForIn = function(e, t) {
  var i = this.type === l._in;
  return this.next(), t.type === "VariableDeclaration" && t.declarations[0].init != null && (!i || this.options.ecmaVersion < 8 || this.strict || t.kind !== "var" || t.declarations[0].id.type !== "Identifier") && this.raise(
    t.start,
    (i ? "for-in" : "for-of") + " loop variable declaration may not have an initializer"
  ), e.left = t, e.right = i ? this.parseExpression() : this.parseMaybeAssign(), this.expect(l.parenR), e.body = this.parseStatement("for"), this.exitScope(), this.labels.pop(), this.finishNode(e, i ? "ForInStatement" : "ForOfStatement");
};
E.parseVar = function(e, t, i, r) {
  for (e.declarations = [], e.kind = i; ; ) {
    var n = this.startNode();
    if (this.parseVarId(n, i), this.eat(l.eq) ? n.init = this.parseMaybeAssign(t) : !r && i === "const" && !(this.type === l._in || this.options.ecmaVersion >= 6 && this.isContextual("of")) ? this.unexpected() : !r && (i === "using" || i === "await using") && this.options.ecmaVersion >= 17 && this.type !== l._in && !this.isContextual("of") ? this.raise(this.lastTokEnd, "Missing initializer in " + i + " declaration") : !r && n.id.type !== "Identifier" && !(t && (this.type === l._in || this.isContextual("of"))) ? this.raise(this.lastTokEnd, "Complex binding patterns require an initialization value") : n.init = null, e.declarations.push(this.finishNode(n, "VariableDeclarator")), !this.eat(l.comma))
      break;
  }
  return e;
};
E.parseVarId = function(e, t) {
  e.id = t === "using" || t === "await using" ? this.parseIdent() : this.parseBindingAtom(), this.checkLValPattern(e.id, t === "var" ? Ui : Fe, !1);
};
var Tt = 1, Ti = 2, _s = 4;
E.parseFunction = function(e, t, i, r, n) {
  this.initFunction(e), (this.options.ecmaVersion >= 9 || this.options.ecmaVersion >= 6 && !r) && (this.type === l.star && t & Ti && this.unexpected(), e.generator = this.eat(l.star)), this.options.ecmaVersion >= 8 && (e.async = !!r), t & Tt && (e.id = t & _s && this.type !== l.name ? null : this.parseIdent(), e.id && !(t & Ti) && this.checkLValSimple(e.id, this.strict || e.generator || e.async ? this.treatFunctionsAsVar ? Ui : Fe : gs));
  var u = this.yieldPos, c = this.awaitPos, f = this.awaitIdentPos;
  return this.yieldPos = 0, this.awaitPos = 0, this.awaitIdentPos = 0, this.enterScope(Zi(e.async, e.generator)), t & Tt || (e.id = this.type === l.name ? this.parseIdent() : null), this.parseFunctionParams(e), this.parseFunctionBody(e, i, !1, n), this.yieldPos = u, this.awaitPos = c, this.awaitIdentPos = f, this.finishNode(e, t & Tt ? "FunctionDeclaration" : "FunctionExpression");
};
E.parseFunctionParams = function(e) {
  this.expect(l.parenL), e.params = this.parseBindingList(l.parenR, !1, this.options.ecmaVersion >= 8), this.checkYieldAwaitInDefaultParams();
};
E.parseClass = function(e, t) {
  this.next();
  var i = this.strict;
  this.strict = !0, this.parseClassId(e, t), this.parseClassSuper(e);
  var r = this.enterClassBody(), n = this.startNode(), u = !1;
  for (n.body = [], this.expect(l.braceL); this.type !== l.braceR; ) {
    var c = this.parseClassElement(e.superClass !== null);
    c && (n.body.push(c), c.type === "MethodDefinition" && c.kind === "constructor" ? (u && this.raiseRecoverable(c.start, "Duplicate constructor in the same class"), u = !0) : c.key && c.key.type === "PrivateIdentifier" && Nh(r, c) && this.raiseRecoverable(c.key.start, "Identifier '#" + c.key.name + "' has already been declared"));
  }
  return this.strict = i, this.next(), e.body = this.finishNode(n, "ClassBody"), this.exitClassBody(), this.finishNode(e, t ? "ClassDeclaration" : "ClassExpression");
};
E.parseClassElement = function(e) {
  if (this.eat(l.semi))
    return null;
  var t = this.options.ecmaVersion, i = this.startNode(), r = "", n = !1, u = !1, c = "method", f = !1;
  if (this.eatContextual("static")) {
    if (t >= 13 && this.eat(l.braceL))
      return this.parseClassStaticBlock(i), i;
    this.isClassElementNameStart() || this.type === l.star ? f = !0 : r = "static";
  }
  if (i.static = f, !r && t >= 8 && this.eatContextual("async") && ((this.isClassElementNameStart() || this.type === l.star) && !this.canInsertSemicolon() ? u = !0 : r = "async"), !r && (t >= 9 || !u) && this.eat(l.star) && (n = !0), !r && !u && !n) {
    var y = this.value;
    (this.eatContextual("get") || this.eatContextual("set")) && (this.isClassElementNameStart() ? c = y : r = y);
  }
  if (r ? (i.computed = !1, i.key = this.startNodeAt(this.lastTokStart, this.lastTokStartLoc), i.key.name = r, this.finishNode(i.key, "Identifier")) : this.parseClassElementName(i), t < 13 || this.type === l.parenL || c !== "method" || n || u) {
    var o = !i.static && Yt(i, "constructor"), b = o && e;
    o && c !== "method" && this.raise(i.key.start, "Constructor can't have get/set modifier"), i.kind = o ? "constructor" : c, this.parseClassMethod(i, n, u, b);
  } else
    this.parseClassField(i);
  return i;
};
E.isClassElementNameStart = function() {
  return this.type === l.name || this.type === l.privateId || this.type === l.num || this.type === l.string || this.type === l.bracketL || this.type.keyword;
};
E.parseClassElementName = function(e) {
  this.type === l.privateId ? (this.value === "constructor" && this.raise(this.start, "Classes can't have an element named '#constructor'"), e.computed = !1, e.key = this.parsePrivateIdent()) : this.parsePropertyName(e);
};
E.parseClassMethod = function(e, t, i, r) {
  var n = e.key;
  e.kind === "constructor" ? (t && this.raise(n.start, "Constructor can't be a generator"), i && this.raise(n.start, "Constructor can't be an async method")) : e.static && Yt(e, "prototype") && this.raise(n.start, "Classes may not have a static property named prototype");
  var u = e.value = this.parseMethod(t, i, r);
  return e.kind === "get" && u.params.length !== 0 && this.raiseRecoverable(u.start, "getter should have no params"), e.kind === "set" && u.params.length !== 1 && this.raiseRecoverable(u.start, "setter should have exactly one param"), e.kind === "set" && u.params[0].type === "RestElement" && this.raiseRecoverable(u.params[0].start, "Setter cannot use rest params"), this.finishNode(e, "MethodDefinition");
};
E.parseClassField = function(e) {
  return Yt(e, "constructor") ? this.raise(e.key.start, "Classes can't have a field named 'constructor'") : e.static && Yt(e, "prototype") && this.raise(e.key.start, "Classes can't have a static field named 'prototype'"), this.eat(l.eq) ? (this.enterScope(Rt | ni), e.value = this.parseMaybeAssign(), this.exitScope()) : e.value = null, this.semicolon(), this.finishNode(e, "PropertyDefinition");
};
E.parseClassStaticBlock = function(e) {
  e.body = [];
  var t = this.labels;
  for (this.labels = [], this.enterScope(rt | ni); this.type !== l.braceR; ) {
    var i = this.parseStatement(null);
    e.body.push(i);
  }
  return this.next(), this.exitScope(), this.labels = t, this.finishNode(e, "StaticBlock");
};
E.parseClassId = function(e, t) {
  this.type === l.name ? (e.id = this.parseIdent(), t && this.checkLValSimple(e.id, Fe, !1)) : (t === !0 && this.unexpected(), e.id = null);
};
E.parseClassSuper = function(e) {
  e.superClass = this.eat(l._extends) ? this.parseExprSubscripts(null, !1) : null;
};
E.enterClassBody = function() {
  var e = { declared: /* @__PURE__ */ Object.create(null), used: [] };
  return this.privateNameStack.push(e), e.declared;
};
E.exitClassBody = function() {
  var e = this.privateNameStack.pop(), t = e.declared, i = e.used;
  if (this.options.checkPrivateFields)
    for (var r = this.privateNameStack.length, n = r === 0 ? null : this.privateNameStack[r - 1], u = 0; u < i.length; ++u) {
      var c = i[u];
      vt(t, c.name) || (n ? n.used.push(c) : this.raiseRecoverable(c.start, "Private field '#" + c.name + "' must be declared in an enclosing class"));
    }
};
function Nh(e, t) {
  var i = t.key.name, r = e[i], n = "true";
  return t.type === "MethodDefinition" && (t.kind === "get" || t.kind === "set") && (n = (t.static ? "s" : "i") + t.kind), r === "iget" && n === "iset" || r === "iset" && n === "iget" || r === "sget" && n === "sset" || r === "sset" && n === "sget" ? (e[i] = "true", !1) : r ? !0 : (e[i] = n, !1);
}
function Yt(e, t) {
  var i = e.computed, r = e.key;
  return !i && (r.type === "Identifier" && r.name === t || r.type === "Literal" && r.value === t);
}
E.parseExportAllDeclaration = function(e, t) {
  return this.options.ecmaVersion >= 11 && (this.eatContextual("as") ? (e.exported = this.parseModuleExportName(), this.checkExport(t, e.exported, this.lastTokStart)) : e.exported = null), this.expectContextual("from"), this.type !== l.string && this.unexpected(), e.source = this.parseExprAtom(), this.options.ecmaVersion >= 16 && (e.attributes = this.parseWithClause()), this.semicolon(), this.finishNode(e, "ExportAllDeclaration");
};
E.parseExport = function(e, t) {
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
E.parseExportDeclaration = function(e) {
  return this.parseStatement(null);
};
E.parseExportDefaultDeclaration = function() {
  var e;
  if (this.type === l._function || (e = this.isAsyncFunction())) {
    var t = this.startNode();
    return this.next(), e && this.next(), this.parseFunction(t, Tt | _s, !1, e);
  } else if (this.type === l._class) {
    var i = this.startNode();
    return this.parseClass(i, "nullableID");
  } else {
    var r = this.parseMaybeAssign();
    return this.semicolon(), r;
  }
};
E.checkExport = function(e, t, i) {
  e && (typeof t != "string" && (t = t.type === "Identifier" ? t.name : t.value), vt(e, t) && this.raiseRecoverable(i, "Duplicate export '" + t + "'"), e[t] = !0);
};
E.checkPatternExport = function(e, t) {
  var i = t.type;
  if (i === "Identifier")
    this.checkExport(e, t, t.start);
  else if (i === "ObjectPattern")
    for (var r = 0, n = t.properties; r < n.length; r += 1) {
      var u = n[r];
      this.checkPatternExport(e, u);
    }
  else if (i === "ArrayPattern")
    for (var c = 0, f = t.elements; c < f.length; c += 1) {
      var y = f[c];
      y && this.checkPatternExport(e, y);
    }
  else i === "Property" ? this.checkPatternExport(e, t.value) : i === "AssignmentPattern" ? this.checkPatternExport(e, t.left) : i === "RestElement" && this.checkPatternExport(e, t.argument);
};
E.checkVariableExport = function(e, t) {
  if (e)
    for (var i = 0, r = t; i < r.length; i += 1) {
      var n = r[i];
      this.checkPatternExport(e, n.id);
    }
};
E.shouldParseExportStatement = function() {
  return this.type.keyword === "var" || this.type.keyword === "const" || this.type.keyword === "class" || this.type.keyword === "function" || this.isLet() || this.isAsyncFunction();
};
E.parseExportSpecifier = function(e) {
  var t = this.startNode();
  return t.local = this.parseModuleExportName(), t.exported = this.eatContextual("as") ? this.parseModuleExportName() : t.local, this.checkExport(
    e,
    t.exported,
    t.exported.start
  ), this.finishNode(t, "ExportSpecifier");
};
E.parseExportSpecifiers = function(e) {
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
E.parseImport = function(e) {
  return this.next(), this.type === l.string ? (e.specifiers = Ih, e.source = this.parseExprAtom()) : (e.specifiers = this.parseImportSpecifiers(), this.expectContextual("from"), e.source = this.type === l.string ? this.parseExprAtom() : this.unexpected()), this.options.ecmaVersion >= 16 && (e.attributes = this.parseWithClause()), this.semicolon(), this.finishNode(e, "ImportDeclaration");
};
E.parseImportSpecifier = function() {
  var e = this.startNode();
  return e.imported = this.parseModuleExportName(), this.eatContextual("as") ? e.local = this.parseIdent() : (this.checkUnreserved(e.imported), e.local = e.imported), this.checkLValSimple(e.local, Fe), this.finishNode(e, "ImportSpecifier");
};
E.parseImportDefaultSpecifier = function() {
  var e = this.startNode();
  return e.local = this.parseIdent(), this.checkLValSimple(e.local, Fe), this.finishNode(e, "ImportDefaultSpecifier");
};
E.parseImportNamespaceSpecifier = function() {
  var e = this.startNode();
  return this.next(), this.expectContextual("as"), e.local = this.parseIdent(), this.checkLValSimple(e.local, Fe), this.finishNode(e, "ImportNamespaceSpecifier");
};
E.parseImportSpecifiers = function() {
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
E.parseWithClause = function() {
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
    vt(t, n) && this.raiseRecoverable(r.key.start, "Duplicate attribute key '" + n + "'"), t[n] = !0, e.push(r);
  }
  return e;
};
E.parseImportAttribute = function() {
  var e = this.startNode();
  return e.key = this.type === l.string ? this.parseExprAtom() : this.parseIdent(this.options.allowReserved !== "never"), this.expect(l.colon), this.type !== l.string && this.unexpected(), e.value = this.parseExprAtom(), this.finishNode(e, "ImportAttribute");
};
E.parseModuleExportName = function() {
  if (this.options.ecmaVersion >= 13 && this.type === l.string) {
    var e = this.parseLiteral(this.value);
    return Th.test(e.value) && this.raise(e.start, "An export name cannot include a lone surrogate."), e;
  }
  return this.parseIdent(!0);
};
E.adaptDirectivePrologue = function(e) {
  for (var t = 0; t < e.length && this.isDirectiveCandidate(e[t]); ++t)
    e[t].directive = e[t].expression.raw.slice(1, -1);
};
E.isDirectiveCandidate = function(e) {
  return this.options.ecmaVersion >= 5 && e.type === "ExpressionStatement" && e.expression.type === "Literal" && typeof e.expression.value == "string" && // Reject parenthesized strings.
  (this.input[e.start] === '"' || this.input[e.start] === "'");
};
var Pe = J.prototype;
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
        var c = this.parseRestBinding();
        this.parseBindingListItem(c), n.push(c), this.type === l.comma && this.raiseRecoverable(this.start, "Comma is not permitted after the rest element"), this.expect(e);
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
  t === void 0 && (t = Jt);
  var r = t !== Jt;
  switch (e.type) {
    case "Identifier":
      this.strict && this.reservedWordsStrictBind.test(e.name) && this.raiseRecoverable(e.start, (r ? "Binding " : "Assigning to ") + e.name + " in strict mode"), r && (t === Fe && e.name === "let" && this.raiseRecoverable(e.start, "let is disallowed as a lexically bound name"), i && (vt(i, e.name) && this.raiseRecoverable(e.start, "Argument name clash"), i[e.name] = !0), t !== ks && this.declareName(e.name, t, e.start));
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
  switch (t === void 0 && (t = Jt), e.type) {
    case "ObjectPattern":
      for (var r = 0, n = e.properties; r < n.length; r += 1) {
        var u = n[r];
        this.checkLValInnerPattern(u, t, i);
      }
      break;
    case "ArrayPattern":
      for (var c = 0, f = e.elements; c < f.length; c += 1) {
        var y = f[c];
        y && this.checkLValInnerPattern(y, t, i);
      }
      break;
    default:
      this.checkLValSimple(e, t, i);
  }
};
Pe.checkLValInnerPattern = function(e, t, i) {
  switch (t === void 0 && (t = Jt), e.type) {
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
var ce = function(t, i, r, n, u) {
  this.token = t, this.isExpr = !!i, this.preserveSpace = !!r, this.override = n, this.generator = !!u;
}, H = {
  b_stat: new ce("{", !1),
  b_expr: new ce("{", !0),
  b_tmpl: new ce("${", !1),
  p_stat: new ce("(", !1),
  p_expr: new ce("(", !0),
  q_tmpl: new ce("`", !0, !0, function(e) {
    return e.tryReadTemplateToken();
  }),
  f_stat: new ce("function", !1),
  f_expr: new ce("function", !0),
  f_expr_gen: new ce("function", !0, !1, null, !0),
  f_gen: new ce("function", !1, !1, null, !0)
}, gt = J.prototype;
gt.initialContext = function() {
  return [H.b_stat];
};
gt.curContext = function() {
  return this.context[this.context.length - 1];
};
gt.braceIsBlock = function(e) {
  var t = this.curContext();
  return t === H.f_expr || t === H.f_stat ? !0 : e === l.colon && (t === H.b_stat || t === H.b_expr) ? !t.isExpr : e === l._return || e === l.name && this.exprAllowed ? he.test(this.input.slice(this.lastTokEnd, this.start)) : e === l._else || e === l.semi || e === l.eof || e === l.parenR || e === l.arrow ? !0 : e === l.braceL ? t === H.b_stat : e === l._var || e === l._const || e === l.name ? !1 : !this.exprAllowed;
};
gt.inGeneratorContext = function() {
  for (var e = this.context.length - 1; e >= 1; e--) {
    var t = this.context[e];
    if (t.token === "function")
      return t.generator;
  }
  return !1;
};
gt.updateContext = function(e) {
  var t, i = this.type;
  i.keyword && e === l.dot ? this.exprAllowed = !1 : (t = i.updateContext) ? t.call(this, e) : this.exprAllowed = i.beforeExpr;
};
gt.overrideContext = function(e) {
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
var D = J.prototype;
D.checkPropClash = function(e, t, i) {
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
    var c = t[n];
    if (c) {
      var f;
      u === "init" ? f = this.strict && c.init || c.get || c.set : f = c.init || c[u], f && this.raiseRecoverable(r.start, "Redefinition of property");
    } else
      c = t[n] = {
        init: !1,
        get: !1,
        set: !1
      };
    c[u] = !0;
  }
};
D.parseExpression = function(e, t) {
  var i = this.start, r = this.startLoc, n = this.parseMaybeAssign(e, t);
  if (this.type === l.comma) {
    var u = this.startNodeAt(i, r);
    for (u.expressions = [n]; this.eat(l.comma); )
      u.expressions.push(this.parseMaybeAssign(e, t));
    return this.finishNode(u, "SequenceExpression");
  }
  return n;
};
D.parseMaybeAssign = function(e, t, i) {
  if (this.isContextual("yield")) {
    if (this.inGenerator)
      return this.parseYield(e);
    this.exprAllowed = !1;
  }
  var r = !1, n = -1, u = -1, c = -1;
  t ? (n = t.parenthesizedAssign, u = t.trailingComma, c = t.doubleProto, t.parenthesizedAssign = t.trailingComma = -1) : (t = new oi(), r = !0);
  var f = this.start, y = this.startLoc;
  (this.type === l.parenL || this.type === l.name) && (this.potentialArrowAt = this.start, this.potentialArrowInForAwait = e === "await");
  var o = this.parseMaybeConditional(e, t);
  if (i && (o = i.call(this, o, f, y)), this.type.isAssign) {
    var b = this.startNodeAt(f, y);
    return b.operator = this.value, this.type === l.eq && (o = this.toAssignable(o, !1, t)), r || (t.parenthesizedAssign = t.trailingComma = t.doubleProto = -1), t.shorthandAssign >= o.start && (t.shorthandAssign = -1), this.type === l.eq ? this.checkLValPattern(o) : this.checkLValSimple(o), b.left = o, this.next(), b.right = this.parseMaybeAssign(e), c > -1 && (t.doubleProto = c), this.finishNode(b, "AssignmentExpression");
  } else
    r && this.checkExpressionErrors(t, !0);
  return n > -1 && (t.parenthesizedAssign = n), u > -1 && (t.trailingComma = u), o;
};
D.parseMaybeConditional = function(e, t) {
  var i = this.start, r = this.startLoc, n = this.parseExprOps(e, t);
  if (this.checkExpressionErrors(t))
    return n;
  if (this.eat(l.question)) {
    var u = this.startNodeAt(i, r);
    return u.test = n, u.consequent = this.parseMaybeAssign(), this.expect(l.colon), u.alternate = this.parseMaybeAssign(e), this.finishNode(u, "ConditionalExpression");
  }
  return n;
};
D.parseExprOps = function(e, t) {
  var i = this.start, r = this.startLoc, n = this.parseMaybeUnary(t, !1, !1, e);
  return this.checkExpressionErrors(t) || n.start === i && n.type === "ArrowFunctionExpression" ? n : this.parseExprOp(n, i, r, -1, e);
};
D.parseExprOp = function(e, t, i, r, n) {
  var u = this.type.binop;
  if (u != null && (!n || this.type !== l._in) && u > r) {
    var c = this.type === l.logicalOR || this.type === l.logicalAND, f = this.type === l.coalesce;
    f && (u = l.logicalAND.binop);
    var y = this.value;
    this.next();
    var o = this.start, b = this.startLoc, P = this.parseExprOp(this.parseMaybeUnary(null, !1, !1, n), o, b, u, n), R = this.buildBinary(t, i, e, P, y, c || f);
    return (c && this.type === l.coalesce || f && (this.type === l.logicalOR || this.type === l.logicalAND)) && this.raiseRecoverable(this.start, "Logical expressions and coalesce expressions cannot be mixed. Wrap either by parentheses"), this.parseExprOp(R, t, i, r, n);
  }
  return e;
};
D.buildBinary = function(e, t, i, r, n, u) {
  r.type === "PrivateIdentifier" && this.raise(r.start, "Private identifier can only be left side of binary expression");
  var c = this.startNodeAt(e, t);
  return c.left = i, c.operator = n, c.right = r, this.finishNode(c, u ? "LogicalExpression" : "BinaryExpression");
};
D.parseMaybeUnary = function(e, t, i, r) {
  var n = this.start, u = this.startLoc, c;
  if (this.isContextual("await") && this.canAwait)
    c = this.parseAwait(r), t = !0;
  else if (this.type.prefix) {
    var f = this.startNode(), y = this.type === l.incDec;
    f.operator = this.value, f.prefix = !0, this.next(), f.argument = this.parseMaybeUnary(null, !0, y, r), this.checkExpressionErrors(e, !0), y ? this.checkLValSimple(f.argument) : this.strict && f.operator === "delete" && ws(f.argument) ? this.raiseRecoverable(f.start, "Deleting local variable in strict mode") : f.operator === "delete" && Pi(f.argument) ? this.raiseRecoverable(f.start, "Private fields can not be deleted") : t = !0, c = this.finishNode(f, y ? "UpdateExpression" : "UnaryExpression");
  } else if (!t && this.type === l.privateId)
    (r || this.privateNameStack.length === 0) && this.options.checkPrivateFields && this.unexpected(), c = this.parsePrivateIdent(), this.type !== l._in && this.unexpected();
  else {
    if (c = this.parseExprSubscripts(e, r), this.checkExpressionErrors(e))
      return c;
    for (; this.type.postfix && !this.canInsertSemicolon(); ) {
      var o = this.startNodeAt(n, u);
      o.operator = this.value, o.prefix = !1, o.argument = c, this.checkLValSimple(c), this.next(), c = this.finishNode(o, "UpdateExpression");
    }
  }
  if (!i && this.eat(l.starstar))
    if (t)
      this.unexpected(this.lastTokStart);
    else
      return this.buildBinary(n, u, c, this.parseMaybeUnary(null, !1, !1, r), "**", !1);
  else
    return c;
};
function ws(e) {
  return e.type === "Identifier" || e.type === "ParenthesizedExpression" && ws(e.expression);
}
function Pi(e) {
  return e.type === "MemberExpression" && e.property.type === "PrivateIdentifier" || e.type === "ChainExpression" && Pi(e.expression) || e.type === "ParenthesizedExpression" && Pi(e.expression);
}
D.parseExprSubscripts = function(e, t) {
  var i = this.start, r = this.startLoc, n = this.parseExprAtom(e, t);
  if (n.type === "ArrowFunctionExpression" && this.input.slice(this.lastTokStart, this.lastTokEnd) !== ")")
    return n;
  var u = this.parseSubscripts(n, i, r, !1, t);
  return e && u.type === "MemberExpression" && (e.parenthesizedAssign >= u.start && (e.parenthesizedAssign = -1), e.parenthesizedBind >= u.start && (e.parenthesizedBind = -1), e.trailingComma >= u.start && (e.trailingComma = -1)), u;
};
D.parseSubscripts = function(e, t, i, r, n) {
  for (var u = this.options.ecmaVersion >= 8 && e.type === "Identifier" && e.name === "async" && this.lastTokEnd === e.end && !this.canInsertSemicolon() && e.end - e.start === 5 && this.potentialArrowAt === e.start, c = !1; ; ) {
    var f = this.parseSubscript(e, t, i, r, u, c, n);
    if (f.optional && (c = !0), f === e || f.type === "ArrowFunctionExpression") {
      if (c) {
        var y = this.startNodeAt(t, i);
        y.expression = f, f = this.finishNode(y, "ChainExpression");
      }
      return f;
    }
    e = f;
  }
};
D.shouldParseAsyncArrow = function() {
  return !this.canInsertSemicolon() && this.eat(l.arrow);
};
D.parseSubscriptAsyncArrow = function(e, t, i, r) {
  return this.parseArrowExpression(this.startNodeAt(e, t), i, !0, r);
};
D.parseSubscript = function(e, t, i, r, n, u, c) {
  var f = this.options.ecmaVersion >= 11, y = f && this.eat(l.questionDot);
  r && y && this.raise(this.lastTokStart, "Optional chaining cannot appear in the callee of new expressions");
  var o = this.eat(l.bracketL);
  if (o || y && this.type !== l.parenL && this.type !== l.backQuote || this.eat(l.dot)) {
    var b = this.startNodeAt(t, i);
    b.object = e, o ? (b.property = this.parseExpression(), this.expect(l.bracketR)) : this.type === l.privateId && e.type !== "Super" ? b.property = this.parsePrivateIdent() : b.property = this.parseIdent(this.options.allowReserved !== "never"), b.computed = !!o, f && (b.optional = y), e = this.finishNode(b, "MemberExpression");
  } else if (!r && this.eat(l.parenL)) {
    var P = new oi(), R = this.yieldPos, B = this.awaitPos, U = this.awaitIdentPos;
    this.yieldPos = 0, this.awaitPos = 0, this.awaitIdentPos = 0;
    var Ee = this.parseExprList(l.parenR, this.options.ecmaVersion >= 8, !1, P);
    if (n && !y && this.shouldParseAsyncArrow())
      return this.checkPatternErrors(P, !1), this.checkYieldAwaitInDefaultParams(), this.awaitIdentPos > 0 && this.raise(this.awaitIdentPos, "Cannot use 'await' as identifier inside an async function"), this.yieldPos = R, this.awaitPos = B, this.awaitIdentPos = U, this.parseSubscriptAsyncArrow(t, i, Ee, c);
    this.checkExpressionErrors(P, !0), this.yieldPos = R || this.yieldPos, this.awaitPos = B || this.awaitPos, this.awaitIdentPos = U || this.awaitIdentPos;
    var O = this.startNodeAt(t, i);
    O.callee = e, O.arguments = Ee, f && (O.optional = y), e = this.finishNode(O, "CallExpression");
  } else if (this.type === l.backQuote) {
    (y || u) && this.raise(this.start, "Optional chaining cannot appear in the tag of tagged template expressions");
    var ne = this.startNodeAt(t, i);
    ne.tag = e, ne.quasi = this.parseTemplate({ isTagged: !0 }), e = this.finishNode(ne, "TaggedTemplateExpression");
  }
  return e;
};
D.parseExprAtom = function(e, t, i) {
  this.type === l.slash && this.readRegexp();
  var r, n = this.potentialArrowAt === this.start;
  switch (this.type) {
    case l._super:
      return this.allowSuper || this.raise(this.start, "'super' keyword outside a method"), r = this.startNode(), this.next(), this.type === l.parenL && !this.allowDirectSuper && this.raise(r.start, "super() call outside constructor of a subclass"), this.type !== l.dot && this.type !== l.bracketL && this.type !== l.parenL && this.unexpected(), this.finishNode(r, "Super");
    case l._this:
      return r = this.startNode(), this.next(), this.finishNode(r, "ThisExpression");
    case l.name:
      var u = this.start, c = this.startLoc, f = this.containsEsc, y = this.parseIdent(!1);
      if (this.options.ecmaVersion >= 8 && !f && y.name === "async" && !this.canInsertSemicolon() && this.eat(l._function))
        return this.overrideContext(H.f_expr), this.parseFunction(this.startNodeAt(u, c), 0, !1, !0, t);
      if (n && !this.canInsertSemicolon()) {
        if (this.eat(l.arrow))
          return this.parseArrowExpression(this.startNodeAt(u, c), [y], !1, t);
        if (this.options.ecmaVersion >= 8 && y.name === "async" && this.type === l.name && !f && (!this.potentialArrowInForAwait || this.value !== "of" || this.containsEsc))
          return y = this.parseIdent(!1), (this.canInsertSemicolon() || !this.eat(l.arrow)) && this.unexpected(), this.parseArrowExpression(this.startNodeAt(u, c), [y], !0, t);
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
      var b = this.start, P = this.parseParenAndDistinguishExpression(n, t);
      return e && (e.parenthesizedAssign < 0 && !this.isSimpleAssignTarget(P) && (e.parenthesizedAssign = b), e.parenthesizedBind < 0 && (e.parenthesizedBind = b)), P;
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
D.parseExprAtomDefault = function() {
  this.unexpected();
};
D.parseExprImport = function(e) {
  var t = this.startNode();
  if (this.containsEsc && this.raiseRecoverable(this.start, "Escape sequence in keyword import"), this.next(), this.type === l.parenL && !e)
    return this.parseDynamicImport(t);
  if (this.type === l.dot) {
    var i = this.startNodeAt(t.start, t.loc && t.loc.start);
    return i.name = "import", t.meta = this.finishNode(i, "Identifier"), this.parseImportMeta(t);
  } else
    this.unexpected();
};
D.parseDynamicImport = function(e) {
  if (this.next(), e.source = this.parseMaybeAssign(), this.options.ecmaVersion >= 16)
    this.eat(l.parenR) ? e.options = null : (this.expect(l.comma), this.afterTrailingComma(l.parenR) ? e.options = null : (e.options = this.parseMaybeAssign(), this.eat(l.parenR) || (this.expect(l.comma), this.afterTrailingComma(l.parenR) || this.unexpected())));
  else if (!this.eat(l.parenR)) {
    var t = this.start;
    this.eat(l.comma) && this.eat(l.parenR) ? this.raiseRecoverable(t, "Trailing comma is not allowed in import()") : this.unexpected(t);
  }
  return this.finishNode(e, "ImportExpression");
};
D.parseImportMeta = function(e) {
  this.next();
  var t = this.containsEsc;
  return e.property = this.parseIdent(!0), e.property.name !== "meta" && this.raiseRecoverable(e.property.start, "The only valid meta property for import is 'import.meta'"), t && this.raiseRecoverable(e.start, "'import.meta' must not contain escaped characters"), this.options.sourceType !== "module" && !this.options.allowImportExportEverywhere && this.raiseRecoverable(e.start, "Cannot use 'import.meta' outside a module"), this.finishNode(e, "MetaProperty");
};
D.parseLiteral = function(e) {
  var t = this.startNode();
  return t.value = e, t.raw = this.input.slice(this.start, this.end), t.raw.charCodeAt(t.raw.length - 1) === 110 && (t.bigint = t.value != null ? t.value.toString() : t.raw.slice(0, -1).replace(/_/g, "")), this.next(), this.finishNode(t, "Literal");
};
D.parseParenExpression = function() {
  this.expect(l.parenL);
  var e = this.parseExpression();
  return this.expect(l.parenR), e;
};
D.shouldParseArrow = function(e) {
  return !this.canInsertSemicolon();
};
D.parseParenAndDistinguishExpression = function(e, t) {
  var i = this.start, r = this.startLoc, n, u = this.options.ecmaVersion >= 8;
  if (this.options.ecmaVersion >= 6) {
    this.next();
    var c = this.start, f = this.startLoc, y = [], o = !0, b = !1, P = new oi(), R = this.yieldPos, B = this.awaitPos, U;
    for (this.yieldPos = 0, this.awaitPos = 0; this.type !== l.parenR; )
      if (o ? o = !1 : this.expect(l.comma), u && this.afterTrailingComma(l.parenR, !0)) {
        b = !0;
        break;
      } else if (this.type === l.ellipsis) {
        U = this.start, y.push(this.parseParenItem(this.parseRestBinding())), this.type === l.comma && this.raiseRecoverable(
          this.start,
          "Comma is not permitted after the rest element"
        );
        break;
      } else
        y.push(this.parseMaybeAssign(!1, P, this.parseParenItem));
    var Ee = this.lastTokEnd, O = this.lastTokEndLoc;
    if (this.expect(l.parenR), e && this.shouldParseArrow(y) && this.eat(l.arrow))
      return this.checkPatternErrors(P, !1), this.checkYieldAwaitInDefaultParams(), this.yieldPos = R, this.awaitPos = B, this.parseParenArrowList(i, r, y, t);
    (!y.length || b) && this.unexpected(this.lastTokStart), U && this.unexpected(U), this.checkExpressionErrors(P, !0), this.yieldPos = R || this.yieldPos, this.awaitPos = B || this.awaitPos, y.length > 1 ? (n = this.startNodeAt(c, f), n.expressions = y, this.finishNodeAt(n, "SequenceExpression", Ee, O)) : n = y[0];
  } else
    n = this.parseParenExpression();
  if (this.options.preserveParens) {
    var ne = this.startNodeAt(i, r);
    return ne.expression = n, this.finishNode(ne, "ParenthesizedExpression");
  } else
    return n;
};
D.parseParenItem = function(e) {
  return e;
};
D.parseParenArrowList = function(e, t, i, r) {
  return this.parseArrowExpression(this.startNodeAt(e, t), i, !1, r);
};
var Lh = [];
D.parseNew = function() {
  this.containsEsc && this.raiseRecoverable(this.start, "Escape sequence in keyword new");
  var e = this.startNode();
  if (this.next(), this.options.ecmaVersion >= 6 && this.type === l.dot) {
    var t = this.startNodeAt(e.start, e.loc && e.loc.start);
    t.name = "new", e.meta = this.finishNode(t, "Identifier"), this.next();
    var i = this.containsEsc;
    return e.property = this.parseIdent(!0), e.property.name !== "target" && this.raiseRecoverable(e.property.start, "The only valid meta property for new is 'new.target'"), i && this.raiseRecoverable(e.start, "'new.target' must not contain escaped characters"), this.allowNewDotTarget || this.raiseRecoverable(e.start, "'new.target' can only be used in functions and class static block"), this.finishNode(e, "MetaProperty");
  }
  var r = this.start, n = this.startLoc;
  return e.callee = this.parseSubscripts(this.parseExprAtom(null, !1, !0), r, n, !0, !1), this.eat(l.parenL) ? e.arguments = this.parseExprList(l.parenR, this.options.ecmaVersion >= 8, !1) : e.arguments = Lh, this.finishNode(e, "NewExpression");
};
D.parseTemplateElement = function(e) {
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
D.parseTemplate = function(e) {
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
D.isAsyncProp = function(e) {
  return !e.computed && e.key.type === "Identifier" && e.key.name === "async" && (this.type === l.name || this.type === l.num || this.type === l.string || this.type === l.bracketL || this.type.keyword || this.options.ecmaVersion >= 9 && this.type === l.star) && !he.test(this.input.slice(this.lastTokEnd, this.start));
};
D.parseObj = function(e, t) {
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
D.parseProperty = function(e, t) {
  var i = this.startNode(), r, n, u, c;
  if (this.options.ecmaVersion >= 9 && this.eat(l.ellipsis))
    return e ? (i.argument = this.parseIdent(!1), this.type === l.comma && this.raiseRecoverable(this.start, "Comma is not permitted after the rest element"), this.finishNode(i, "RestElement")) : (i.argument = this.parseMaybeAssign(!1, t), this.type === l.comma && t && t.trailingComma < 0 && (t.trailingComma = this.start), this.finishNode(i, "SpreadElement"));
  this.options.ecmaVersion >= 6 && (i.method = !1, i.shorthand = !1, (e || t) && (u = this.start, c = this.startLoc), e || (r = this.eat(l.star)));
  var f = this.containsEsc;
  return this.parsePropertyName(i), !e && !f && this.options.ecmaVersion >= 8 && !r && this.isAsyncProp(i) ? (n = !0, r = this.options.ecmaVersion >= 9 && this.eat(l.star), this.parsePropertyName(i)) : n = !1, this.parsePropertyValue(i, e, r, n, u, c, t, f), this.finishNode(i, "Property");
};
D.parseGetterSetter = function(e) {
  var t = e.key.name;
  this.parsePropertyName(e), e.value = this.parseMethod(!1), e.kind = t;
  var i = e.kind === "get" ? 0 : 1;
  if (e.value.params.length !== i) {
    var r = e.value.start;
    e.kind === "get" ? this.raiseRecoverable(r, "getter should have no params") : this.raiseRecoverable(r, "setter should have exactly one param");
  } else
    e.kind === "set" && e.value.params[0].type === "RestElement" && this.raiseRecoverable(e.value.params[0].start, "Setter cannot use rest params");
};
D.parsePropertyValue = function(e, t, i, r, n, u, c, f) {
  (i || r) && this.type === l.colon && this.unexpected(), this.eat(l.colon) ? (e.value = t ? this.parseMaybeDefault(this.start, this.startLoc) : this.parseMaybeAssign(!1, c), e.kind = "init") : this.options.ecmaVersion >= 6 && this.type === l.parenL ? (t && this.unexpected(), e.method = !0, e.value = this.parseMethod(i, r), e.kind = "init") : !t && !f && this.options.ecmaVersion >= 5 && !e.computed && e.key.type === "Identifier" && (e.key.name === "get" || e.key.name === "set") && this.type !== l.comma && this.type !== l.braceR && this.type !== l.eq ? ((i || r) && this.unexpected(), this.parseGetterSetter(e)) : this.options.ecmaVersion >= 6 && !e.computed && e.key.type === "Identifier" ? ((i || r) && this.unexpected(), this.checkUnreserved(e.key), e.key.name === "await" && !this.awaitIdentPos && (this.awaitIdentPos = n), t ? e.value = this.parseMaybeDefault(n, u, this.copyNode(e.key)) : this.type === l.eq && c ? (c.shorthandAssign < 0 && (c.shorthandAssign = this.start), e.value = this.parseMaybeDefault(n, u, this.copyNode(e.key))) : e.value = this.copyNode(e.key), e.kind = "init", e.shorthand = !0) : this.unexpected();
};
D.parsePropertyName = function(e) {
  if (this.options.ecmaVersion >= 6) {
    if (this.eat(l.bracketL))
      return e.computed = !0, e.key = this.parseMaybeAssign(), this.expect(l.bracketR), e.key;
    e.computed = !1;
  }
  return e.key = this.type === l.num || this.type === l.string ? this.parseExprAtom() : this.parseIdent(this.options.allowReserved !== "never");
};
D.initFunction = function(e) {
  e.id = null, this.options.ecmaVersion >= 6 && (e.generator = e.expression = !1), this.options.ecmaVersion >= 8 && (e.async = !1);
};
D.parseMethod = function(e, t, i) {
  var r = this.startNode(), n = this.yieldPos, u = this.awaitPos, c = this.awaitIdentPos;
  return this.initFunction(r), this.options.ecmaVersion >= 6 && (r.generator = e), this.options.ecmaVersion >= 8 && (r.async = !!t), this.yieldPos = 0, this.awaitPos = 0, this.awaitIdentPos = 0, this.enterScope(Zi(t, r.generator) | ni | (i ? xs : 0)), this.expect(l.parenL), r.params = this.parseBindingList(l.parenR, !1, this.options.ecmaVersion >= 8), this.checkYieldAwaitInDefaultParams(), this.parseFunctionBody(r, !1, !0, !1), this.yieldPos = n, this.awaitPos = u, this.awaitIdentPos = c, this.finishNode(r, "FunctionExpression");
};
D.parseArrowExpression = function(e, t, i, r) {
  var n = this.yieldPos, u = this.awaitPos, c = this.awaitIdentPos;
  return this.enterScope(Zi(i, !1) | Bi), this.initFunction(e), this.options.ecmaVersion >= 8 && (e.async = !!i), this.yieldPos = 0, this.awaitPos = 0, this.awaitIdentPos = 0, e.params = this.toAssignableList(t, !0), this.parseFunctionBody(e, !0, !1, r), this.yieldPos = n, this.awaitPos = u, this.awaitIdentPos = c, this.finishNode(e, "ArrowFunctionExpression");
};
D.parseFunctionBody = function(e, t, i, r) {
  var n = t && this.type !== l.braceL, u = this.strict, c = !1;
  if (n)
    e.body = this.parseMaybeAssign(r), e.expression = !0, this.checkParams(e, !1);
  else {
    var f = this.options.ecmaVersion >= 7 && !this.isSimpleParamList(e.params);
    (!u || f) && (c = this.strictDirective(this.end), c && f && this.raiseRecoverable(e.start, "Illegal 'use strict' directive in function with non-simple parameter list"));
    var y = this.labels;
    this.labels = [], c && (this.strict = !0), this.checkParams(e, !u && !c && !t && !i && this.isSimpleParamList(e.params)), this.strict && e.id && this.checkLValSimple(e.id, ks), e.body = this.parseBlock(!1, void 0, c && !u), e.expression = !1, this.adaptDirectivePrologue(e.body.body), this.labels = y;
  }
  this.exitScope();
};
D.isSimpleParamList = function(e) {
  for (var t = 0, i = e; t < i.length; t += 1) {
    var r = i[t];
    if (r.type !== "Identifier")
      return !1;
  }
  return !0;
};
D.checkParams = function(e, t) {
  for (var i = /* @__PURE__ */ Object.create(null), r = 0, n = e.params; r < n.length; r += 1) {
    var u = n[r];
    this.checkLValInnerPattern(u, Ui, t ? null : i);
  }
};
D.parseExprList = function(e, t, i, r) {
  for (var n = [], u = !0; !this.eat(e); ) {
    if (u)
      u = !1;
    else if (this.expect(l.comma), t && this.afterTrailingComma(e))
      break;
    var c = void 0;
    i && this.type === l.comma ? c = null : this.type === l.ellipsis ? (c = this.parseSpread(r), r && this.type === l.comma && r.trailingComma < 0 && (r.trailingComma = this.start)) : c = this.parseMaybeAssign(!1, r), n.push(c);
  }
  return n;
};
D.checkUnreserved = function(e) {
  var t = e.start, i = e.end, r = e.name;
  if (this.inGenerator && r === "yield" && this.raiseRecoverable(t, "Cannot use 'yield' as identifier inside a generator"), this.inAsync && r === "await" && this.raiseRecoverable(t, "Cannot use 'await' as identifier inside an async function"), !(this.currentThisScope().flags & ai) && r === "arguments" && this.raiseRecoverable(t, "Cannot use 'arguments' in class field initializer"), this.inClassStaticBlock && (r === "arguments" || r === "await") && this.raise(t, "Cannot use " + r + " in class static initialization block"), this.keywords.test(r) && this.raise(t, "Unexpected keyword '" + r + "'"), !(this.options.ecmaVersion < 6 && this.input.slice(t, i).indexOf("\\") !== -1)) {
    var n = this.strict ? this.reservedWordsStrict : this.reservedWords;
    n.test(r) && (!this.inAsync && r === "await" && this.raiseRecoverable(t, "Cannot use keyword 'await' outside an async function"), this.raiseRecoverable(t, "The keyword '" + r + "' is reserved"));
  }
};
D.parseIdent = function(e) {
  var t = this.parseIdentNode();
  return this.next(!!e), this.finishNode(t, "Identifier"), e || (this.checkUnreserved(t), t.name === "await" && !this.awaitIdentPos && (this.awaitIdentPos = t.start)), t;
};
D.parseIdentNode = function() {
  var e = this.startNode();
  return this.type === l.name ? e.name = this.value : this.type.keyword ? (e.name = this.type.keyword, (e.name === "class" || e.name === "function") && (this.lastTokEnd !== this.lastTokStart + 1 || this.input.charCodeAt(this.lastTokStart) !== 46) && this.context.pop(), this.type = l.name) : this.unexpected(), e;
};
D.parsePrivateIdent = function() {
  var e = this.startNode();
  return this.type === l.privateId ? e.name = this.value : this.unexpected(), this.next(), this.finishNode(e, "PrivateIdentifier"), this.options.checkPrivateFields && (this.privateNameStack.length === 0 ? this.raise(e.start, "Private field '#" + e.name + "' must be declared in an enclosing class") : this.privateNameStack[this.privateNameStack.length - 1].used.push(e)), e;
};
D.parseYield = function(e) {
  this.yieldPos || (this.yieldPos = this.start);
  var t = this.startNode();
  return this.next(), this.type === l.semi || this.canInsertSemicolon() || this.type !== l.star && !this.type.startsExpr ? (t.delegate = !1, t.argument = null) : (t.delegate = this.eat(l.star), t.argument = this.parseMaybeAssign(e)), this.finishNode(t, "YieldExpression");
};
D.parseAwait = function(e) {
  this.awaitPos || (this.awaitPos = this.start);
  var t = this.startNode();
  return this.next(), t.argument = this.parseMaybeUnary(null, !0, !1, e), this.finishNode(t, "AwaitExpression");
};
var Qt = J.prototype;
Qt.raise = function(e, t) {
  var i = $i(this.input, e);
  t += " (" + i.line + ":" + i.column + ")", this.sourceFile && (t += " in " + this.sourceFile);
  var r = new SyntaxError(t);
  throw r.pos = e, r.loc = i, r.raisedAt = this.pos, r;
};
Qt.raiseRecoverable = Qt.raise;
Qt.curPosition = function() {
  if (this.options.locations)
    return new ft(this.curLine, this.pos - this.lineStart);
};
var Xe = J.prototype, Oh = function(t) {
  this.flags = t, this.var = [], this.lexical = [], this.functions = [];
};
Xe.enterScope = function(e) {
  this.scopeStack.push(new Oh(e));
};
Xe.exitScope = function() {
  this.scopeStack.pop();
};
Xe.treatFunctionsAsVarInScope = function(e) {
  return e.flags & xt || !this.inModule && e.flags & Et;
};
Xe.declareName = function(e, t, i) {
  var r = !1;
  if (t === Fe) {
    var n = this.currentScope();
    r = n.lexical.indexOf(e) > -1 || n.functions.indexOf(e) > -1 || n.var.indexOf(e) > -1, n.lexical.push(e), this.inModule && n.flags & Et && delete this.undefinedExports[e];
  } else if (t === bs) {
    var u = this.currentScope();
    u.lexical.push(e);
  } else if (t === gs) {
    var c = this.currentScope();
    this.treatFunctionsAsVar ? r = c.lexical.indexOf(e) > -1 : r = c.lexical.indexOf(e) > -1 || c.var.indexOf(e) > -1, c.functions.push(e);
  } else
    for (var f = this.scopeStack.length - 1; f >= 0; --f) {
      var y = this.scopeStack[f];
      if (y.lexical.indexOf(e) > -1 && !(y.flags & vs && y.lexical[0] === e) || !this.treatFunctionsAsVarInScope(y) && y.functions.indexOf(e) > -1) {
        r = !0;
        break;
      }
      if (y.var.push(e), this.inModule && y.flags & Et && delete this.undefinedExports[e], y.flags & ai)
        break;
    }
  r && this.raiseRecoverable(i, "Identifier '" + e + "' has already been declared");
};
Xe.checkLocalExport = function(e) {
  this.scopeStack[0].lexical.indexOf(e.name) === -1 && this.scopeStack[0].var.indexOf(e.name) === -1 && (this.undefinedExports[e.name] = e);
};
Xe.currentScope = function() {
  return this.scopeStack[this.scopeStack.length - 1];
};
Xe.currentVarScope = function() {
  for (var e = this.scopeStack.length - 1; ; e--) {
    var t = this.scopeStack[e];
    if (t.flags & (ai | Rt | rt))
      return t;
  }
};
Xe.currentThisScope = function() {
  for (var e = this.scopeStack.length - 1; ; e--) {
    var t = this.scopeStack[e];
    if (t.flags & (ai | Rt | rt) && !(t.flags & Bi))
      return t;
  }
};
var Dt = function(t, i, r) {
  this.type = "", this.start = i, this.end = 0, t.options.locations && (this.loc = new Ot(t, r)), t.options.directSourceFile && (this.sourceFile = t.options.directSourceFile), t.options.ranges && (this.range = [i, 0]);
}, Mt = J.prototype;
Mt.startNode = function() {
  return new Dt(this, this.start, this.startLoc);
};
Mt.startNodeAt = function(e, t) {
  return new Dt(this, e, t);
};
function Ss(e, t, i, r) {
  return e.type = t, e.end = i, this.options.locations && (e.loc.end = r), this.options.ranges && (e.range[1] = i), e;
}
Mt.finishNode = function(e, t) {
  return Ss.call(this, e, t, this.lastTokEnd, this.lastTokEndLoc);
};
Mt.finishNodeAt = function(e, t, i, r) {
  return Ss.call(this, e, t, i, r);
};
Mt.copyNode = function(e) {
  var t = new Dt(this, e.start, this.startLoc);
  for (var i in e)
    t[i] = e[i];
  return t;
};
var Rh = "Gara Garay Gukh Gurung_Khema Hrkt Katakana_Or_Hiragana Kawi Kirat_Rai Krai Nag_Mundari Nagm Ol_Onal Onao Sunu Sunuwar Todhri Todr Tulu_Tigalari Tutg Unknown Zzzz", Ts = "ASCII ASCII_Hex_Digit AHex Alphabetic Alpha Any Assigned Bidi_Control Bidi_C Bidi_Mirrored Bidi_M Case_Ignorable CI Cased Changes_When_Casefolded CWCF Changes_When_Casemapped CWCM Changes_When_Lowercased CWL Changes_When_NFKC_Casefolded CWKCF Changes_When_Titlecased CWT Changes_When_Uppercased CWU Dash Default_Ignorable_Code_Point DI Deprecated Dep Diacritic Dia Emoji Emoji_Component Emoji_Modifier Emoji_Modifier_Base Emoji_Presentation Extender Ext Grapheme_Base Gr_Base Grapheme_Extend Gr_Ext Hex_Digit Hex IDS_Binary_Operator IDSB IDS_Trinary_Operator IDST ID_Continue IDC ID_Start IDS Ideographic Ideo Join_Control Join_C Logical_Order_Exception LOE Lowercase Lower Math Noncharacter_Code_Point NChar Pattern_Syntax Pat_Syn Pattern_White_Space Pat_WS Quotation_Mark QMark Radical Regional_Indicator RI Sentence_Terminal STerm Soft_Dotted SD Terminal_Punctuation Term Unified_Ideograph UIdeo Uppercase Upper Variation_Selector VS White_Space space XID_Continue XIDC XID_Start XIDS", Ps = Ts + " Extended_Pictographic", Cs = Ps, As = Cs + " EBase EComp EMod EPres ExtPict", Es = As, Dh = Es, Mh = {
  9: Ts,
  10: Ps,
  11: Cs,
  12: As,
  13: Es,
  14: Dh
}, Vh = "Basic_Emoji Emoji_Keycap_Sequence RGI_Emoji_Modifier_Sequence RGI_Emoji_Flag_Sequence RGI_Emoji_Tag_Sequence RGI_Emoji_ZWJ_Sequence RGI_Emoji", jh = {
  9: "",
  10: "",
  11: "",
  12: "",
  13: "",
  14: Vh
}, Pr = "Cased_Letter LC Close_Punctuation Pe Connector_Punctuation Pc Control Cc cntrl Currency_Symbol Sc Dash_Punctuation Pd Decimal_Number Nd digit Enclosing_Mark Me Final_Punctuation Pf Format Cf Initial_Punctuation Pi Letter L Letter_Number Nl Line_Separator Zl Lowercase_Letter Ll Mark M Combining_Mark Math_Symbol Sm Modifier_Letter Lm Modifier_Symbol Sk Nonspacing_Mark Mn Number N Open_Punctuation Ps Other C Other_Letter Lo Other_Number No Other_Punctuation Po Other_Symbol So Paragraph_Separator Zp Private_Use Co Punctuation P punct Separator Z Space_Separator Zs Spacing_Mark Mc Surrogate Cs Symbol S Titlecase_Letter Lt Unassigned Cn Uppercase_Letter Lu", Is = "Adlam Adlm Ahom Anatolian_Hieroglyphs Hluw Arabic Arab Armenian Armn Avestan Avst Balinese Bali Bamum Bamu Bassa_Vah Bass Batak Batk Bengali Beng Bhaiksuki Bhks Bopomofo Bopo Brahmi Brah Braille Brai Buginese Bugi Buhid Buhd Canadian_Aboriginal Cans Carian Cari Caucasian_Albanian Aghb Chakma Cakm Cham Cham Cherokee Cher Common Zyyy Coptic Copt Qaac Cuneiform Xsux Cypriot Cprt Cyrillic Cyrl Deseret Dsrt Devanagari Deva Duployan Dupl Egyptian_Hieroglyphs Egyp Elbasan Elba Ethiopic Ethi Georgian Geor Glagolitic Glag Gothic Goth Grantha Gran Greek Grek Gujarati Gujr Gurmukhi Guru Han Hani Hangul Hang Hanunoo Hano Hatran Hatr Hebrew Hebr Hiragana Hira Imperial_Aramaic Armi Inherited Zinh Qaai Inscriptional_Pahlavi Phli Inscriptional_Parthian Prti Javanese Java Kaithi Kthi Kannada Knda Katakana Kana Kayah_Li Kali Kharoshthi Khar Khmer Khmr Khojki Khoj Khudawadi Sind Lao Laoo Latin Latn Lepcha Lepc Limbu Limb Linear_A Lina Linear_B Linb Lisu Lisu Lycian Lyci Lydian Lydi Mahajani Mahj Malayalam Mlym Mandaic Mand Manichaean Mani Marchen Marc Masaram_Gondi Gonm Meetei_Mayek Mtei Mende_Kikakui Mend Meroitic_Cursive Merc Meroitic_Hieroglyphs Mero Miao Plrd Modi Mongolian Mong Mro Mroo Multani Mult Myanmar Mymr Nabataean Nbat New_Tai_Lue Talu Newa Newa Nko Nkoo Nushu Nshu Ogham Ogam Ol_Chiki Olck Old_Hungarian Hung Old_Italic Ital Old_North_Arabian Narb Old_Permic Perm Old_Persian Xpeo Old_South_Arabian Sarb Old_Turkic Orkh Oriya Orya Osage Osge Osmanya Osma Pahawh_Hmong Hmng Palmyrene Palm Pau_Cin_Hau Pauc Phags_Pa Phag Phoenician Phnx Psalter_Pahlavi Phlp Rejang Rjng Runic Runr Samaritan Samr Saurashtra Saur Sharada Shrd Shavian Shaw Siddham Sidd SignWriting Sgnw Sinhala Sinh Sora_Sompeng Sora Soyombo Soyo Sundanese Sund Syloti_Nagri Sylo Syriac Syrc Tagalog Tglg Tagbanwa Tagb Tai_Le Tale Tai_Tham Lana Tai_Viet Tavt Takri Takr Tamil Taml Tangut Tang Telugu Telu Thaana Thaa Thai Thai Tibetan Tibt Tifinagh Tfng Tirhuta Tirh Ugaritic Ugar Vai Vaii Warang_Citi Wara Yi Yiii Zanabazar_Square Zanb", Ns = Is + " Dogra Dogr Gunjala_Gondi Gong Hanifi_Rohingya Rohg Makasar Maka Medefaidrin Medf Old_Sogdian Sogo Sogdian Sogd", Ls = Ns + " Elymaic Elym Nandinagari Nand Nyiakeng_Puachue_Hmong Hmnp Wancho Wcho", Os = Ls + " Chorasmian Chrs Diak Dives_Akuru Khitan_Small_Script Kits Yezi Yezidi", Rs = Os + " Cypro_Minoan Cpmn Old_Uyghur Ougr Tangsa Tnsa Toto Vithkuqi Vith", zh = Rs + " " + Rh, $h = {
  9: Is,
  10: Ns,
  11: Ls,
  12: Os,
  13: Rs,
  14: zh
}, Ds = {};
function Fh(e) {
  var t = Ds[e] = {
    binary: qe(Mh[e] + " " + Pr),
    binaryOfStrings: qe(jh[e]),
    nonBinary: {
      General_Category: qe(Pr),
      Script: qe($h[e])
    }
  };
  t.nonBinary.Script_Extensions = t.nonBinary.Script, t.nonBinary.gc = t.nonBinary.General_Category, t.nonBinary.sc = t.nonBinary.Script, t.nonBinary.scx = t.nonBinary.Script_Extensions;
}
for (var xi = 0, Cr = [9, 10, 11, 12, 13, 14]; xi < Cr.length; xi += 1) {
  var Bh = Cr[xi];
  Fh(Bh);
}
var C = J.prototype, ei = function(t, i) {
  this.parent = t, this.base = i || this;
};
ei.prototype.separatedFrom = function(t) {
  for (var i = this; i; i = i.parent)
    for (var r = t; r; r = r.parent)
      if (i.base === r.base && i !== r)
        return !0;
  return !1;
};
ei.prototype.sibling = function() {
  return new ei(this.parent, this.base);
};
var De = function(t) {
  this.parser = t, this.validFlags = "gim" + (t.options.ecmaVersion >= 6 ? "uy" : "") + (t.options.ecmaVersion >= 9 ? "s" : "") + (t.options.ecmaVersion >= 13 ? "d" : "") + (t.options.ecmaVersion >= 15 ? "v" : ""), this.unicodeProperties = Ds[t.options.ecmaVersion >= 14 ? 14 : t.options.ecmaVersion], this.source = "", this.flags = "", this.start = 0, this.switchU = !1, this.switchV = !1, this.switchN = !1, this.pos = 0, this.lastIntValue = 0, this.lastStringValue = "", this.lastAssertionIsQuantifiable = !1, this.numCapturingParens = 0, this.maxBackReference = 0, this.groupNames = /* @__PURE__ */ Object.create(null), this.backReferenceNames = [], this.branchID = null;
};
De.prototype.reset = function(t, i, r) {
  var n = r.indexOf("v") !== -1, u = r.indexOf("u") !== -1;
  this.start = t | 0, this.source = i + "", this.flags = r, n && this.parser.options.ecmaVersion >= 15 ? (this.switchU = !0, this.switchV = !0, this.switchN = !0) : (this.switchU = u && this.parser.options.ecmaVersion >= 6, this.switchV = !1, this.switchN = u && this.parser.options.ecmaVersion >= 9);
};
De.prototype.raise = function(t) {
  this.parser.raiseRecoverable(this.start, "Invalid regular expression: /" + this.source + "/: " + t);
};
De.prototype.at = function(t, i) {
  i === void 0 && (i = !1);
  var r = this.source, n = r.length;
  if (t >= n)
    return -1;
  var u = r.charCodeAt(t);
  if (!(i || this.switchU) || u <= 55295 || u >= 57344 || t + 1 >= n)
    return u;
  var c = r.charCodeAt(t + 1);
  return c >= 56320 && c <= 57343 ? (u << 10) + c - 56613888 : u;
};
De.prototype.nextIndex = function(t, i) {
  i === void 0 && (i = !1);
  var r = this.source, n = r.length;
  if (t >= n)
    return n;
  var u = r.charCodeAt(t), c;
  return !(i || this.switchU) || u <= 55295 || u >= 57344 || t + 1 >= n || (c = r.charCodeAt(t + 1)) < 56320 || c > 57343 ? t + 1 : t + 2;
};
De.prototype.current = function(t) {
  return t === void 0 && (t = !1), this.at(this.pos, t);
};
De.prototype.lookahead = function(t) {
  return t === void 0 && (t = !1), this.at(this.nextIndex(this.pos, t), t);
};
De.prototype.advance = function(t) {
  t === void 0 && (t = !1), this.pos = this.nextIndex(this.pos, t);
};
De.prototype.eat = function(t, i) {
  return i === void 0 && (i = !1), this.current(i) === t ? (this.advance(i), !0) : !1;
};
De.prototype.eatChars = function(t, i) {
  i === void 0 && (i = !1);
  for (var r = this.pos, n = 0, u = t; n < u.length; n += 1) {
    var c = u[n], f = this.at(r, i);
    if (f === -1 || f !== c)
      return !1;
    r = this.nextIndex(r, i);
  }
  return this.pos = r, !0;
};
C.validateRegExpFlags = function(e) {
  for (var t = e.validFlags, i = e.flags, r = !1, n = !1, u = 0; u < i.length; u++) {
    var c = i.charAt(u);
    t.indexOf(c) === -1 && this.raise(e.start, "Invalid regular expression flag"), i.indexOf(c, u + 1) > -1 && this.raise(e.start, "Duplicate regular expression flag"), c === "u" && (r = !0), c === "v" && (n = !0);
  }
  this.options.ecmaVersion >= 15 && r && n && this.raise(e.start, "Invalid regular expression flag");
};
function Zh(e) {
  for (var t in e)
    return !0;
  return !1;
}
C.validateRegExpPattern = function(e) {
  this.regexp_pattern(e), !e.switchN && this.options.ecmaVersion >= 9 && Zh(e.groupNames) && (e.switchN = !0, this.regexp_pattern(e));
};
C.regexp_pattern = function(e) {
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
C.regexp_disjunction = function(e) {
  var t = this.options.ecmaVersion >= 16;
  for (t && (e.branchID = new ei(e.branchID, null)), this.regexp_alternative(e); e.eat(
    124
    /* | */
  ); )
    t && (e.branchID = e.branchID.sibling()), this.regexp_alternative(e);
  t && (e.branchID = e.branchID.parent), this.regexp_eatQuantifier(e, !0) && e.raise("Nothing to repeat"), e.eat(
    123
    /* { */
  ) && e.raise("Lone quantifier brackets");
};
C.regexp_alternative = function(e) {
  for (; e.pos < e.source.length && this.regexp_eatTerm(e); )
    ;
};
C.regexp_eatTerm = function(e) {
  return this.regexp_eatAssertion(e) ? (e.lastAssertionIsQuantifiable && this.regexp_eatQuantifier(e) && e.switchU && e.raise("Invalid quantifier"), !0) : (e.switchU ? this.regexp_eatAtom(e) : this.regexp_eatExtendedAtom(e)) ? (this.regexp_eatQuantifier(e), !0) : !1;
};
C.regexp_eatAssertion = function(e) {
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
C.regexp_eatQuantifier = function(e, t) {
  return t === void 0 && (t = !1), this.regexp_eatQuantifierPrefix(e, t) ? (e.eat(
    63
    /* ? */
  ), !0) : !1;
};
C.regexp_eatQuantifierPrefix = function(e, t) {
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
C.regexp_eatBracedQuantifier = function(e, t) {
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
C.regexp_eatAtom = function(e) {
  return this.regexp_eatPatternCharacters(e) || e.eat(
    46
    /* . */
  ) || this.regexp_eatReverseSolidusAtomEscape(e) || this.regexp_eatCharacterClass(e) || this.regexp_eatUncapturingGroup(e) || this.regexp_eatCapturingGroup(e);
};
C.regexp_eatReverseSolidusAtomEscape = function(e) {
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
C.regexp_eatUncapturingGroup = function(e) {
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
            var c = this.regexp_eatModifiers(e);
            !i && !c && e.current() === 58 && e.raise("Invalid regular expression modifiers");
            for (var f = 0; f < c.length; f++) {
              var y = c.charAt(f);
              (c.indexOf(y, f + 1) > -1 || i.indexOf(y) > -1) && e.raise("Duplicate regular expression modifiers");
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
C.regexp_eatCapturingGroup = function(e) {
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
C.regexp_eatModifiers = function(e) {
  for (var t = "", i = 0; (i = e.current()) !== -1 && Uh(i); )
    t += ze(i), e.advance();
  return t;
};
function Uh(e) {
  return e === 105 || e === 109 || e === 115;
}
C.regexp_eatExtendedAtom = function(e) {
  return e.eat(
    46
    /* . */
  ) || this.regexp_eatReverseSolidusAtomEscape(e) || this.regexp_eatCharacterClass(e) || this.regexp_eatUncapturingGroup(e) || this.regexp_eatCapturingGroup(e) || this.regexp_eatInvalidBracedQuantifier(e) || this.regexp_eatExtendedPatternCharacter(e);
};
C.regexp_eatInvalidBracedQuantifier = function(e) {
  return this.regexp_eatBracedQuantifier(e, !0) && e.raise("Nothing to repeat"), !1;
};
C.regexp_eatSyntaxCharacter = function(e) {
  var t = e.current();
  return Ms(t) ? (e.lastIntValue = t, e.advance(), !0) : !1;
};
function Ms(e) {
  return e === 36 || e >= 40 && e <= 43 || e === 46 || e === 63 || e >= 91 && e <= 94 || e >= 123 && e <= 125;
}
C.regexp_eatPatternCharacters = function(e) {
  for (var t = e.pos, i = 0; (i = e.current()) !== -1 && !Ms(i); )
    e.advance();
  return e.pos !== t;
};
C.regexp_eatExtendedPatternCharacter = function(e) {
  var t = e.current();
  return t !== -1 && t !== 36 && !(t >= 40 && t <= 43) && t !== 46 && t !== 63 && t !== 91 && t !== 94 && t !== 124 ? (e.advance(), !0) : !1;
};
C.regexp_groupSpecifier = function(e) {
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
C.regexp_eatGroupName = function(e) {
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
C.regexp_eatRegExpIdentifierName = function(e) {
  if (e.lastStringValue = "", this.regexp_eatRegExpIdentifierStart(e)) {
    for (e.lastStringValue += ze(e.lastIntValue); this.regexp_eatRegExpIdentifierPart(e); )
      e.lastStringValue += ze(e.lastIntValue);
    return !0;
  }
  return !1;
};
C.regexp_eatRegExpIdentifierStart = function(e) {
  var t = e.pos, i = this.options.ecmaVersion >= 11, r = e.current(i);
  return e.advance(i), r === 92 && this.regexp_eatRegExpUnicodeEscapeSequence(e, i) && (r = e.lastIntValue), qh(r) ? (e.lastIntValue = r, !0) : (e.pos = t, !1);
};
function qh(e) {
  return Ae(e, !0) || e === 36 || e === 95;
}
C.regexp_eatRegExpIdentifierPart = function(e) {
  var t = e.pos, i = this.options.ecmaVersion >= 11, r = e.current(i);
  return e.advance(i), r === 92 && this.regexp_eatRegExpUnicodeEscapeSequence(e, i) && (r = e.lastIntValue), Hh(r) ? (e.lastIntValue = r, !0) : (e.pos = t, !1);
};
function Hh(e) {
  return je(e, !0) || e === 36 || e === 95 || e === 8204 || e === 8205;
}
C.regexp_eatAtomEscape = function(e) {
  return this.regexp_eatBackReference(e) || this.regexp_eatCharacterClassEscape(e) || this.regexp_eatCharacterEscape(e) || e.switchN && this.regexp_eatKGroupName(e) ? !0 : (e.switchU && (e.current() === 99 && e.raise("Invalid unicode escape"), e.raise("Invalid escape")), !1);
};
C.regexp_eatBackReference = function(e) {
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
C.regexp_eatKGroupName = function(e) {
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
C.regexp_eatCharacterEscape = function(e) {
  return this.regexp_eatControlEscape(e) || this.regexp_eatCControlLetter(e) || this.regexp_eatZero(e) || this.regexp_eatHexEscapeSequence(e) || this.regexp_eatRegExpUnicodeEscapeSequence(e, !1) || !e.switchU && this.regexp_eatLegacyOctalEscapeSequence(e) || this.regexp_eatIdentityEscape(e);
};
C.regexp_eatCControlLetter = function(e) {
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
C.regexp_eatZero = function(e) {
  return e.current() === 48 && !ui(e.lookahead()) ? (e.lastIntValue = 0, e.advance(), !0) : !1;
};
C.regexp_eatControlEscape = function(e) {
  var t = e.current();
  return t === 116 ? (e.lastIntValue = 9, e.advance(), !0) : t === 110 ? (e.lastIntValue = 10, e.advance(), !0) : t === 118 ? (e.lastIntValue = 11, e.advance(), !0) : t === 102 ? (e.lastIntValue = 12, e.advance(), !0) : t === 114 ? (e.lastIntValue = 13, e.advance(), !0) : !1;
};
C.regexp_eatControlLetter = function(e) {
  var t = e.current();
  return Vs(t) ? (e.lastIntValue = t % 32, e.advance(), !0) : !1;
};
function Vs(e) {
  return e >= 65 && e <= 90 || e >= 97 && e <= 122;
}
C.regexp_eatRegExpUnicodeEscapeSequence = function(e, t) {
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
          var c = e.lastIntValue;
          if (c >= 56320 && c <= 57343)
            return e.lastIntValue = (n - 55296) * 1024 + (c - 56320) + 65536, !0;
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
    ) && Gh(e.lastIntValue))
      return !0;
    r && e.raise("Invalid unicode escape"), e.pos = i;
  }
  return !1;
};
function Gh(e) {
  return e >= 0 && e <= 1114111;
}
C.regexp_eatIdentityEscape = function(e) {
  if (e.switchU)
    return this.regexp_eatSyntaxCharacter(e) ? !0 : e.eat(
      47
      /* / */
    ) ? (e.lastIntValue = 47, !0) : !1;
  var t = e.current();
  return t !== 99 && (!e.switchN || t !== 107) ? (e.lastIntValue = t, e.advance(), !0) : !1;
};
C.regexp_eatDecimalEscape = function(e) {
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
var js = 0, $e = 1, we = 2;
C.regexp_eatCharacterClassEscape = function(e) {
  var t = e.current();
  if (Wh(t))
    return e.lastIntValue = -1, e.advance(), $e;
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
      return i && r === we && e.raise("Invalid property name"), r;
    e.raise("Invalid property name");
  }
  return js;
};
function Wh(e) {
  return e === 100 || e === 68 || e === 115 || e === 83 || e === 119 || e === 87;
}
C.regexp_eatUnicodePropertyValueExpression = function(e) {
  var t = e.pos;
  if (this.regexp_eatUnicodePropertyName(e) && e.eat(
    61
    /* = */
  )) {
    var i = e.lastStringValue;
    if (this.regexp_eatUnicodePropertyValue(e)) {
      var r = e.lastStringValue;
      return this.regexp_validateUnicodePropertyNameAndValue(e, i, r), $e;
    }
  }
  if (e.pos = t, this.regexp_eatLoneUnicodePropertyNameOrValue(e)) {
    var n = e.lastStringValue;
    return this.regexp_validateUnicodePropertyNameOrValue(e, n);
  }
  return js;
};
C.regexp_validateUnicodePropertyNameAndValue = function(e, t, i) {
  vt(e.unicodeProperties.nonBinary, t) || e.raise("Invalid property name"), e.unicodeProperties.nonBinary[t].test(i) || e.raise("Invalid property value");
};
C.regexp_validateUnicodePropertyNameOrValue = function(e, t) {
  if (e.unicodeProperties.binary.test(t))
    return $e;
  if (e.switchV && e.unicodeProperties.binaryOfStrings.test(t))
    return we;
  e.raise("Invalid property name");
};
C.regexp_eatUnicodePropertyName = function(e) {
  var t = 0;
  for (e.lastStringValue = ""; zs(t = e.current()); )
    e.lastStringValue += ze(t), e.advance();
  return e.lastStringValue !== "";
};
function zs(e) {
  return Vs(e) || e === 95;
}
C.regexp_eatUnicodePropertyValue = function(e) {
  var t = 0;
  for (e.lastStringValue = ""; Kh(t = e.current()); )
    e.lastStringValue += ze(t), e.advance();
  return e.lastStringValue !== "";
};
function Kh(e) {
  return zs(e) || ui(e);
}
C.regexp_eatLoneUnicodePropertyNameOrValue = function(e) {
  return this.regexp_eatUnicodePropertyValue(e);
};
C.regexp_eatCharacterClass = function(e) {
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
    ) || e.raise("Unterminated character class"), t && i === we && e.raise("Negated character class may contain strings"), !0;
  }
  return !1;
};
C.regexp_classContents = function(e) {
  return e.current() === 93 ? $e : e.switchV ? this.regexp_classSetExpression(e) : (this.regexp_nonEmptyClassRanges(e), $e);
};
C.regexp_nonEmptyClassRanges = function(e) {
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
C.regexp_eatClassAtom = function(e) {
  var t = e.pos;
  if (e.eat(
    92
    /* \ */
  )) {
    if (this.regexp_eatClassEscape(e))
      return !0;
    if (e.switchU) {
      var i = e.current();
      (i === 99 || Bs(i)) && e.raise("Invalid class escape"), e.raise("Invalid escape");
    }
    e.pos = t;
  }
  var r = e.current();
  return r !== 93 ? (e.lastIntValue = r, e.advance(), !0) : !1;
};
C.regexp_eatClassEscape = function(e) {
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
C.regexp_classSetExpression = function(e) {
  var t = $e, i;
  if (!this.regexp_eatClassSetRange(e)) if (i = this.regexp_eatClassSetOperand(e)) {
    i === we && (t = we);
    for (var r = e.pos; e.eatChars(
      [38, 38]
      /* && */
    ); ) {
      if (e.current() !== 38 && (i = this.regexp_eatClassSetOperand(e))) {
        i !== we && (t = $e);
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
      i === we && (t = we);
    }
};
C.regexp_eatClassSetRange = function(e) {
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
C.regexp_eatClassSetOperand = function(e) {
  return this.regexp_eatClassSetCharacter(e) ? $e : this.regexp_eatClassStringDisjunction(e) || this.regexp_eatNestedClass(e);
};
C.regexp_eatNestedClass = function(e) {
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
      return i && r === we && e.raise("Negated character class may contain strings"), r;
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
C.regexp_eatClassStringDisjunction = function(e) {
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
C.regexp_classStringDisjunctionContents = function(e) {
  for (var t = this.regexp_classString(e); e.eat(
    124
    /* | */
  ); )
    this.regexp_classString(e) === we && (t = we);
  return t;
};
C.regexp_classString = function(e) {
  for (var t = 0; this.regexp_eatClassSetCharacter(e); )
    t++;
  return t === 1 ? $e : we;
};
C.regexp_eatClassSetCharacter = function(e) {
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
  return i < 0 || i === e.lookahead() && Xh(i) || Jh(i) ? !1 : (e.advance(), e.lastIntValue = i, !0);
};
function Xh(e) {
  return e === 33 || e >= 35 && e <= 38 || e >= 42 && e <= 44 || e === 46 || e >= 58 && e <= 64 || e === 94 || e === 96 || e === 126;
}
function Jh(e) {
  return e === 40 || e === 41 || e === 45 || e === 47 || e >= 91 && e <= 93 || e >= 123 && e <= 125;
}
C.regexp_eatClassSetReservedPunctuator = function(e) {
  var t = e.current();
  return Yh(t) ? (e.lastIntValue = t, e.advance(), !0) : !1;
};
function Yh(e) {
  return e === 33 || e === 35 || e === 37 || e === 38 || e === 44 || e === 45 || e >= 58 && e <= 62 || e === 64 || e === 96 || e === 126;
}
C.regexp_eatClassControlLetter = function(e) {
  var t = e.current();
  return ui(t) || t === 95 ? (e.lastIntValue = t % 32, e.advance(), !0) : !1;
};
C.regexp_eatHexEscapeSequence = function(e) {
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
C.regexp_eatDecimalDigits = function(e) {
  var t = e.pos, i = 0;
  for (e.lastIntValue = 0; ui(i = e.current()); )
    e.lastIntValue = 10 * e.lastIntValue + (i - 48), e.advance();
  return e.pos !== t;
};
function ui(e) {
  return e >= 48 && e <= 57;
}
C.regexp_eatHexDigits = function(e) {
  var t = e.pos, i = 0;
  for (e.lastIntValue = 0; $s(i = e.current()); )
    e.lastIntValue = 16 * e.lastIntValue + Fs(i), e.advance();
  return e.pos !== t;
};
function $s(e) {
  return e >= 48 && e <= 57 || e >= 65 && e <= 70 || e >= 97 && e <= 102;
}
function Fs(e) {
  return e >= 65 && e <= 70 ? 10 + (e - 65) : e >= 97 && e <= 102 ? 10 + (e - 97) : e - 48;
}
C.regexp_eatLegacyOctalEscapeSequence = function(e) {
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
C.regexp_eatOctalDigit = function(e) {
  var t = e.current();
  return Bs(t) ? (e.lastIntValue = t - 48, e.advance(), !0) : (e.lastIntValue = 0, !1);
};
function Bs(e) {
  return e >= 48 && e <= 55;
}
C.regexp_eatFixedHexDigits = function(e, t) {
  var i = e.pos;
  e.lastIntValue = 0;
  for (var r = 0; r < t; ++r) {
    var n = e.current();
    if (!$s(n))
      return e.pos = i, !1;
    e.lastIntValue = 16 * e.lastIntValue + Fs(n), e.advance();
  }
  return !0;
};
var ci = function(t) {
  this.type = t.type, this.value = t.value, this.start = t.start, this.end = t.end, t.options.locations && (this.loc = new Ot(t, t.startLoc, t.endLoc)), t.options.ranges && (this.range = [t.start, t.end]);
}, z = J.prototype;
z.next = function(e) {
  !e && this.type.keyword && this.containsEsc && this.raiseRecoverable(this.start, "Escape sequence in keyword " + this.type.keyword), this.options.onToken && this.options.onToken(new ci(this)), this.lastTokEnd = this.end, this.lastTokStart = this.start, this.lastTokEndLoc = this.endLoc, this.lastTokStartLoc = this.startLoc, this.nextToken();
};
z.getToken = function() {
  return this.next(), new ci(this);
};
typeof Symbol < "u" && (z[Symbol.iterator] = function() {
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
z.nextToken = function() {
  var e = this.curContext();
  if ((!e || !e.preserveSpace) && this.skipSpace(), this.start = this.pos, this.options.locations && (this.startLoc = this.curPosition()), this.pos >= this.input.length)
    return this.finishToken(l.eof);
  if (e.override)
    return e.override(this);
  this.readToken(this.fullCharCodeAtPos());
};
z.readToken = function(e) {
  return Ae(e, this.options.ecmaVersion >= 6) || e === 92 ? this.readWord() : this.getTokenFromCode(e);
};
z.fullCharCodeAtPos = function() {
  var e = this.input.charCodeAt(this.pos);
  if (e <= 55295 || e >= 56320)
    return e;
  var t = this.input.charCodeAt(this.pos + 1);
  return t <= 56319 || t >= 57344 ? e : (e << 10) + t - 56613888;
};
z.skipBlockComment = function() {
  var e = this.options.onComment && this.curPosition(), t = this.pos, i = this.input.indexOf("*/", this.pos += 2);
  if (i === -1 && this.raise(this.pos - 2, "Unterminated comment"), this.pos = i + 2, this.options.locations)
    for (var r = void 0, n = t; (r = ds(this.input, n, this.pos)) > -1; )
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
z.skipLineComment = function(e) {
  for (var t = this.pos, i = this.options.onComment && this.curPosition(), r = this.input.charCodeAt(this.pos += e); this.pos < this.input.length && !it(r); )
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
z.skipSpace = function() {
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
        if (e > 8 && e < 14 || e >= 5760 && zi.test(String.fromCharCode(e)))
          ++this.pos;
        else
          break e;
    }
  }
};
z.finishToken = function(e, t) {
  this.end = this.pos, this.options.locations && (this.endLoc = this.curPosition());
  var i = this.type;
  this.type = e, this.value = t, this.updateContext(i);
};
z.readToken_dot = function() {
  var e = this.input.charCodeAt(this.pos + 1);
  if (e >= 48 && e <= 57)
    return this.readNumber(!0);
  var t = this.input.charCodeAt(this.pos + 2);
  return this.options.ecmaVersion >= 6 && e === 46 && t === 46 ? (this.pos += 3, this.finishToken(l.ellipsis)) : (++this.pos, this.finishToken(l.dot));
};
z.readToken_slash = function() {
  var e = this.input.charCodeAt(this.pos + 1);
  return this.exprAllowed ? (++this.pos, this.readRegexp()) : e === 61 ? this.finishOp(l.assign, 2) : this.finishOp(l.slash, 1);
};
z.readToken_mult_modulo_exp = function(e) {
  var t = this.input.charCodeAt(this.pos + 1), i = 1, r = e === 42 ? l.star : l.modulo;
  return this.options.ecmaVersion >= 7 && e === 42 && t === 42 && (++i, r = l.starstar, t = this.input.charCodeAt(this.pos + 2)), t === 61 ? this.finishOp(l.assign, i + 1) : this.finishOp(r, i);
};
z.readToken_pipe_amp = function(e) {
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
z.readToken_caret = function() {
  var e = this.input.charCodeAt(this.pos + 1);
  return e === 61 ? this.finishOp(l.assign, 2) : this.finishOp(l.bitwiseXOR, 1);
};
z.readToken_plus_min = function(e) {
  var t = this.input.charCodeAt(this.pos + 1);
  return t === e ? t === 45 && !this.inModule && this.input.charCodeAt(this.pos + 2) === 62 && (this.lastTokEnd === 0 || he.test(this.input.slice(this.lastTokEnd, this.pos))) ? (this.skipLineComment(3), this.skipSpace(), this.nextToken()) : this.finishOp(l.incDec, 2) : t === 61 ? this.finishOp(l.assign, 2) : this.finishOp(l.plusMin, 1);
};
z.readToken_lt_gt = function(e) {
  var t = this.input.charCodeAt(this.pos + 1), i = 1;
  return t === e ? (i = e === 62 && this.input.charCodeAt(this.pos + 2) === 62 ? 3 : 2, this.input.charCodeAt(this.pos + i) === 61 ? this.finishOp(l.assign, i + 1) : this.finishOp(l.bitShift, i)) : t === 33 && e === 60 && !this.inModule && this.input.charCodeAt(this.pos + 2) === 45 && this.input.charCodeAt(this.pos + 3) === 45 ? (this.skipLineComment(4), this.skipSpace(), this.nextToken()) : (t === 61 && (i = 2), this.finishOp(l.relational, i));
};
z.readToken_eq_excl = function(e) {
  var t = this.input.charCodeAt(this.pos + 1);
  return t === 61 ? this.finishOp(l.equality, this.input.charCodeAt(this.pos + 2) === 61 ? 3 : 2) : e === 61 && t === 62 && this.options.ecmaVersion >= 6 ? (this.pos += 2, this.finishToken(l.arrow)) : this.finishOp(e === 61 ? l.eq : l.prefix, 1);
};
z.readToken_question = function() {
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
z.readToken_numberSign = function() {
  var e = this.options.ecmaVersion, t = 35;
  if (e >= 13 && (++this.pos, t = this.fullCharCodeAtPos(), Ae(t, !0) || t === 92))
    return this.finishToken(l.privateId, this.readWord1());
  this.raise(this.pos, "Unexpected character '" + ze(t) + "'");
};
z.getTokenFromCode = function(e) {
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
  this.raise(this.pos, "Unexpected character '" + ze(e) + "'");
};
z.finishOp = function(e, t) {
  var i = this.input.slice(this.pos, this.pos + t);
  return this.pos += t, this.finishToken(e, i);
};
z.readRegexp = function() {
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
  var u = this.pos, c = this.readWord1();
  this.containsEsc && this.unexpected(u);
  var f = this.regexpState || (this.regexpState = new De(this));
  f.reset(i, n, c), this.validateRegExpFlags(f), this.validateRegExpPattern(f);
  var y = null;
  try {
    y = new RegExp(n, c);
  } catch {
  }
  return this.finishToken(l.regexp, { pattern: n, flags: c, value: y });
};
z.readInt = function(e, t, i) {
  for (var r = this.options.ecmaVersion >= 12 && t === void 0, n = i && this.input.charCodeAt(this.pos) === 48, u = this.pos, c = 0, f = 0, y = 0, o = t ?? 1 / 0; y < o; ++y, ++this.pos) {
    var b = this.input.charCodeAt(this.pos), P = void 0;
    if (r && b === 95) {
      n && this.raiseRecoverable(this.pos, "Numeric separator is not allowed in legacy octal numeric literals"), f === 95 && this.raiseRecoverable(this.pos, "Numeric separator must be exactly one underscore"), y === 0 && this.raiseRecoverable(this.pos, "Numeric separator is not allowed at the first of digits"), f = b;
      continue;
    }
    if (b >= 97 ? P = b - 97 + 10 : b >= 65 ? P = b - 65 + 10 : b >= 48 && b <= 57 ? P = b - 48 : P = 1 / 0, P >= e)
      break;
    f = b, c = c * e + P;
  }
  return r && f === 95 && this.raiseRecoverable(this.pos - 1, "Numeric separator is not allowed at the last of digits"), this.pos === u || t != null && this.pos - u !== t ? null : c;
};
function Qh(e, t) {
  return t ? parseInt(e, 8) : parseFloat(e.replace(/_/g, ""));
}
function Zs(e) {
  return typeof BigInt != "function" ? null : BigInt(e.replace(/_/g, ""));
}
z.readRadixNumber = function(e) {
  var t = this.pos;
  this.pos += 2;
  var i = this.readInt(e);
  return i == null && this.raise(this.start + 2, "Expected number in radix " + e), this.options.ecmaVersion >= 11 && this.input.charCodeAt(this.pos) === 110 ? (i = Zs(this.input.slice(t, this.pos)), ++this.pos) : Ae(this.fullCharCodeAtPos()) && this.raise(this.pos, "Identifier directly after number"), this.finishToken(l.num, i);
};
z.readNumber = function(e) {
  var t = this.pos;
  !e && this.readInt(10, void 0, !0) === null && this.raise(t, "Invalid number");
  var i = this.pos - t >= 2 && this.input.charCodeAt(t) === 48;
  i && this.strict && this.raise(t, "Invalid number");
  var r = this.input.charCodeAt(this.pos);
  if (!i && !e && this.options.ecmaVersion >= 11 && r === 110) {
    var n = Zs(this.input.slice(t, this.pos));
    return ++this.pos, Ae(this.fullCharCodeAtPos()) && this.raise(this.pos, "Identifier directly after number"), this.finishToken(l.num, n);
  }
  i && /[89]/.test(this.input.slice(t, this.pos)) && (i = !1), r === 46 && !i && (++this.pos, this.readInt(10), r = this.input.charCodeAt(this.pos)), (r === 69 || r === 101) && !i && (r = this.input.charCodeAt(++this.pos), (r === 43 || r === 45) && ++this.pos, this.readInt(10) === null && this.raise(t, "Invalid number")), Ae(this.fullCharCodeAtPos()) && this.raise(this.pos, "Identifier directly after number");
  var u = Qh(this.input.slice(t, this.pos), i);
  return this.finishToken(l.num, u);
};
z.readCodePoint = function() {
  var e = this.input.charCodeAt(this.pos), t;
  if (e === 123) {
    this.options.ecmaVersion < 6 && this.unexpected();
    var i = ++this.pos;
    t = this.readHexChar(this.input.indexOf("}", this.pos) - this.pos), ++this.pos, t > 1114111 && this.invalidStringToken(i, "Code point out of bounds");
  } else
    t = this.readHexChar(4);
  return t;
};
z.readString = function(e) {
  for (var t = "", i = ++this.pos; ; ) {
    this.pos >= this.input.length && this.raise(this.start, "Unterminated string constant");
    var r = this.input.charCodeAt(this.pos);
    if (r === e)
      break;
    r === 92 ? (t += this.input.slice(i, this.pos), t += this.readEscapedChar(!1), i = this.pos) : r === 8232 || r === 8233 ? (this.options.ecmaVersion < 10 && this.raise(this.start, "Unterminated string constant"), ++this.pos, this.options.locations && (this.curLine++, this.lineStart = this.pos)) : (it(r) && this.raise(this.start, "Unterminated string constant"), ++this.pos);
  }
  return t += this.input.slice(i, this.pos++), this.finishToken(l.string, t);
};
var Us = {};
z.tryReadTemplateToken = function() {
  this.inTemplateElement = !0;
  try {
    this.readTmplToken();
  } catch (e) {
    if (e === Us)
      this.readInvalidTemplateToken();
    else
      throw e;
  }
  this.inTemplateElement = !1;
};
z.invalidStringToken = function(e, t) {
  if (this.inTemplateElement && this.options.ecmaVersion >= 9)
    throw Us;
  this.raise(e, t);
};
z.readTmplToken = function() {
  for (var e = "", t = this.pos; ; ) {
    this.pos >= this.input.length && this.raise(this.start, "Unterminated template");
    var i = this.input.charCodeAt(this.pos);
    if (i === 96 || i === 36 && this.input.charCodeAt(this.pos + 1) === 123)
      return this.pos === this.start && (this.type === l.template || this.type === l.invalidTemplate) ? i === 36 ? (this.pos += 2, this.finishToken(l.dollarBraceL)) : (++this.pos, this.finishToken(l.backQuote)) : (e += this.input.slice(t, this.pos), this.finishToken(l.template, e));
    if (i === 92)
      e += this.input.slice(t, this.pos), e += this.readEscapedChar(!0), t = this.pos;
    else if (it(i)) {
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
z.readInvalidTemplateToken = function() {
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
z.readEscapedChar = function(e) {
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
      return ze(this.readCodePoint());
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
      return it(t) ? (this.options.locations && (this.lineStart = this.pos, ++this.curLine), "") : String.fromCharCode(t);
  }
};
z.readHexChar = function(e) {
  var t = this.pos, i = this.readInt(16, e);
  return i === null && this.invalidStringToken(t, "Bad character escape sequence"), i;
};
z.readWord1 = function() {
  this.containsEsc = !1;
  for (var e = "", t = !0, i = this.pos, r = this.options.ecmaVersion >= 6; this.pos < this.input.length; ) {
    var n = this.fullCharCodeAtPos();
    if (je(n, r))
      this.pos += n <= 65535 ? 1 : 2;
    else if (n === 92) {
      this.containsEsc = !0, e += this.input.slice(i, this.pos);
      var u = this.pos;
      this.input.charCodeAt(++this.pos) !== 117 && this.invalidStringToken(this.pos, "Expecting Unicode escape sequence \\uXXXX"), ++this.pos;
      var c = this.readCodePoint();
      (t ? Ae : je)(c, r) || this.invalidStringToken(u, "Invalid Unicode escape"), e += ze(c), i = this.pos;
    } else
      break;
    t = !1;
  }
  return e + this.input.slice(i, this.pos);
};
z.readWord = function() {
  var e = this.readWord1(), t = l.name;
  return this.keywords.test(e) && (t = pt[e]), this.finishToken(t, e);
};
var qs = "8.15.0";
J.acorn = {
  Parser: J,
  version: qs,
  defaultOptions: Xt,
  Position: ft,
  SourceLocation: Ot,
  getLineInfo: $i,
  Node: Dt,
  TokenType: V,
  tokTypes: l,
  keywordTypes: pt,
  TokContext: ce,
  tokContexts: H,
  isIdentifierChar: je,
  isIdentifierStart: Ae,
  Token: ci,
  isNewLine: it,
  lineBreak: he,
  lineBreakG: fs,
  nonASCIIwhitespace: zi
};
function el(e, t) {
  return J.parse(e, t);
}
function tl(e, t, i) {
  return J.parseExpressionAt(e, t, i);
}
function il(e, t) {
  return J.tokenizer(e, t);
}
const rl = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  Node: Dt,
  Parser: J,
  Position: ft,
  SourceLocation: Ot,
  TokContext: ce,
  Token: ci,
  TokenType: V,
  defaultOptions: Xt,
  getLineInfo: $i,
  isIdentifierChar: je,
  isIdentifierStart: Ae,
  isNewLine: it,
  keywordTypes: pt,
  lineBreak: he,
  lineBreakG: fs,
  nonASCIIwhitespace: zi,
  parse: el,
  parseExpressionAt: tl,
  tokContexts: H,
  tokTypes: l,
  tokenizer: il,
  version: qs
}, Symbol.toStringTag, { value: "Module" }));
function Ar(e, t) {
  for (var i = 0; i < t.length; i++) {
    var r = t[i];
    r.enumerable = r.enumerable || !1, r.configurable = !0, "value" in r && (r.writable = !0), Object.defineProperty(e, typeof (n = (function(u, c) {
      if (typeof u != "object" || u === null) return u;
      var f = u[Symbol.toPrimitive];
      if (f !== void 0) {
        var y = f.call(u, "string");
        if (typeof y != "object") return y;
        throw new TypeError("@@toPrimitive must return a primitive value.");
      }
      return String(u);
    })(r.key)) == "symbol" ? n : String(n), r);
  }
  var n;
}
function ti() {
  return ti = Object.assign ? Object.assign.bind() : function(e) {
    for (var t = 1; t < arguments.length; t++) {
      var i = arguments[t];
      for (var r in i) Object.prototype.hasOwnProperty.call(i, r) && (e[r] = i[r]);
    }
    return e;
  }, ti.apply(this, arguments);
}
function Ut(e, t) {
  e.prototype = Object.create(t.prototype), e.prototype.constructor = e, Ci(e, t);
}
function Ci(e, t) {
  return Ci = Object.setPrototypeOf ? Object.setPrototypeOf.bind() : function(i, r) {
    return i.__proto__ = r, i;
  }, Ci(e, t);
}
function Er(e, t) {
  (t == null || t > e.length) && (t = e.length);
  for (var i = 0, r = new Array(t); i < t; i++) r[i] = e[i];
  return r;
}
function Ir(e, t) {
  var i = typeof Symbol < "u" && e[Symbol.iterator] || e["@@iterator"];
  if (i) return (i = i.call(e)).next.bind(i);
  if (Array.isArray(e) || (i = (function(n, u) {
    if (n) {
      if (typeof n == "string") return Er(n, u);
      var c = Object.prototype.toString.call(n).slice(8, -1);
      return c === "Object" && n.constructor && (c = n.constructor.name), c === "Map" || c === "Set" ? Array.from(n) : c === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(c) ? Er(n, u) : void 0;
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
  return t === void 0 && (t = {}), new V("name", t);
}
var sl = /* @__PURE__ */ new WeakMap();
function nl(e) {
  var t = sl.get(e.Parser.acorn || e);
  if (!t) {
    var i = { assert: xe(0, { startsExpr: ve }), asserts: xe(0, { startsExpr: ve }), global: xe(0, { startsExpr: ve }), keyof: xe(0, { startsExpr: ve }), readonly: xe(0, { startsExpr: ve }), unique: xe(0, { startsExpr: ve }), abstract: xe(0, { startsExpr: ve }), declare: xe(0, { startsExpr: ve }), enum: xe(0, { startsExpr: ve }), module: xe(0, { startsExpr: ve }), namespace: xe(0, { startsExpr: ve }), interface: xe(0, { startsExpr: ve }), type: xe(0, { startsExpr: ve }) }, r = { at: new V("@"), jsxName: new V("jsxName"), jsxText: new V("jsxText", { beforeExpr: !0 }), jsxTagStart: new V("jsxTagStart", { startsExpr: !0 }), jsxTagEnd: new V("jsxTagEnd") }, n = { tc_oTag: new ce("<tag", !1, !1), tc_cTag: new ce("</tag", !1, !1), tc_expr: new ce("<tag>...</tag>", !0, !0) }, u = new RegExp("^(?:" + Object.keys(i).join("|") + ")$");
    r.jsxTagStart.updateContext = function() {
      this.context.push(n.tc_expr), this.context.push(n.tc_oTag), this.exprAllowed = !1;
    }, r.jsxTagEnd.updateContext = function(c) {
      var f = this.context.pop();
      f === n.tc_oTag && c === l.slash || f === n.tc_cTag ? (this.context.pop(), this.exprAllowed = this.curContext() === n.tc_expr) : this.exprAllowed = !0;
    }, t = { tokTypes: ti({}, i, r), tokContexts: ti({}, n), keywordsRegExp: u, tokenIsLiteralPropertyName: function(c) {
      return [l.name, l.string, l.num].concat(Object.values(pt), Object.values(i)).includes(c);
    }, tokenIsKeywordOrIdentifier: function(c) {
      return [l.name].concat(Object.values(pt), Object.values(i)).includes(c);
    }, tokenIsIdentifier: function(c) {
      return [].concat(Object.values(i), [l.name]).includes(c);
    }, tokenIsTSDeclarationStart: function(c) {
      return [i.abstract, i.declare, i.enum, i.module, i.namespace, i.interface, i.type].includes(c);
    }, tokenIsTSTypeOperator: function(c) {
      return [i.keyof, i.readonly, i.unique].includes(c);
    }, tokenIsTemplate: function(c) {
      return c === l.invalidTemplate;
    } };
  }
  return t;
}
var wt = 1024, al = new RegExp("(?:[^\\S\\n\\r\\u2028\\u2029]|\\/\\/.*|\\/\\*.*?\\*\\/)*", "y"), Nr = new RegExp("(?=(" + al.source + "))\\1" + /(?=[\n\r\u2028\u2029]|\/\*(?!.*?\*\/)|$)/.source, "y"), St = function() {
  this.shorthandAssign = void 0, this.trailingComma = void 0, this.parenthesizedAssign = void 0, this.parenthesizedBind = void 0, this.doubleProto = void 0, this.shorthandAssign = this.trailingComma = this.parenthesizedAssign = this.parenthesizedBind = this.doubleProto = -1;
};
function ol(e, t) {
  var i = t.key.name, r = e[i], n = "true";
  return t.type !== "MethodDefinition" || t.kind !== "get" && t.kind !== "set" || (n = (t.static ? "s" : "i") + t.kind), r === "iget" && n === "iset" || r === "iset" && n === "iget" || r === "sget" && n === "sset" || r === "sset" && n === "sget" ? (e[i] = "true", !1) : !!r || (e[i] = n, !1);
}
function Lr(e, t) {
  var i = e.key;
  return !e.computed && (i.type === "Identifier" && i.name === t || i.type === "Literal" && i.value === t);
}
var I = { AbstractMethodHasImplementation: function(e) {
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
}, LetInLexicalBinding: "'let' is not allowed to be used as a name in 'let' or 'const' declarations." }, ul = { quot: '"', amp: "&", apos: "'", lt: "<", gt: ">", nbsp: " ", iexcl: "¡", cent: "¢", pound: "£", curren: "¤", yen: "¥", brvbar: "¦", sect: "§", uml: "¨", copy: "©", ordf: "ª", laquo: "«", not: "¬", shy: "­", reg: "®", macr: "¯", deg: "°", plusmn: "±", sup2: "²", sup3: "³", acute: "´", micro: "µ", para: "¶", middot: "·", cedil: "¸", sup1: "¹", ordm: "º", raquo: "»", frac14: "¼", frac12: "½", frac34: "¾", iquest: "¿", Agrave: "À", Aacute: "Á", Acirc: "Â", Atilde: "Ã", Auml: "Ä", Aring: "Å", AElig: "Æ", Ccedil: "Ç", Egrave: "È", Eacute: "É", Ecirc: "Ê", Euml: "Ë", Igrave: "Ì", Iacute: "Í", Icirc: "Î", Iuml: "Ï", ETH: "Ð", Ntilde: "Ñ", Ograve: "Ò", Oacute: "Ó", Ocirc: "Ô", Otilde: "Õ", Ouml: "Ö", times: "×", Oslash: "Ø", Ugrave: "Ù", Uacute: "Ú", Ucirc: "Û", Uuml: "Ü", Yacute: "Ý", THORN: "Þ", szlig: "ß", agrave: "à", aacute: "á", acirc: "â", atilde: "ã", auml: "ä", aring: "å", aelig: "æ", ccedil: "ç", egrave: "è", eacute: "é", ecirc: "ê", euml: "ë", igrave: "ì", iacute: "í", icirc: "î", iuml: "ï", eth: "ð", ntilde: "ñ", ograve: "ò", oacute: "ó", ocirc: "ô", otilde: "õ", ouml: "ö", divide: "÷", oslash: "ø", ugrave: "ù", uacute: "ú", ucirc: "û", uuml: "ü", yacute: "ý", thorn: "þ", yuml: "ÿ", OElig: "Œ", oelig: "œ", Scaron: "Š", scaron: "š", Yuml: "Ÿ", fnof: "ƒ", circ: "ˆ", tilde: "˜", Alpha: "Α", Beta: "Β", Gamma: "Γ", Delta: "Δ", Epsilon: "Ε", Zeta: "Ζ", Eta: "Η", Theta: "Θ", Iota: "Ι", Kappa: "Κ", Lambda: "Λ", Mu: "Μ", Nu: "Ν", Xi: "Ξ", Omicron: "Ο", Pi: "Π", Rho: "Ρ", Sigma: "Σ", Tau: "Τ", Upsilon: "Υ", Phi: "Φ", Chi: "Χ", Psi: "Ψ", Omega: "Ω", alpha: "α", beta: "β", gamma: "γ", delta: "δ", epsilon: "ε", zeta: "ζ", eta: "η", theta: "θ", iota: "ι", kappa: "κ", lambda: "λ", mu: "μ", nu: "ν", xi: "ξ", omicron: "ο", pi: "π", rho: "ρ", sigmaf: "ς", sigma: "σ", tau: "τ", upsilon: "υ", phi: "φ", chi: "χ", psi: "ψ", omega: "ω", thetasym: "ϑ", upsih: "ϒ", piv: "ϖ", ensp: " ", emsp: " ", thinsp: " ", zwnj: "‌", zwj: "‍", lrm: "‎", rlm: "‏", ndash: "–", mdash: "—", lsquo: "‘", rsquo: "’", sbquo: "‚", ldquo: "“", rdquo: "”", bdquo: "„", dagger: "†", Dagger: "‡", bull: "•", hellip: "…", permil: "‰", prime: "′", Prime: "″", lsaquo: "‹", rsaquo: "›", oline: "‾", frasl: "⁄", euro: "€", image: "ℑ", weierp: "℘", real: "ℜ", trade: "™", alefsym: "ℵ", larr: "←", uarr: "↑", rarr: "→", darr: "↓", harr: "↔", crarr: "↵", lArr: "⇐", uArr: "⇑", rArr: "⇒", dArr: "⇓", hArr: "⇔", forall: "∀", part: "∂", exist: "∃", empty: "∅", nabla: "∇", isin: "∈", notin: "∉", ni: "∋", prod: "∏", sum: "∑", minus: "−", lowast: "∗", radic: "√", prop: "∝", infin: "∞", ang: "∠", and: "∧", or: "∨", cap: "∩", cup: "∪", int: "∫", there4: "∴", sim: "∼", cong: "≅", asymp: "≈", ne: "≠", equiv: "≡", le: "≤", ge: "≥", sub: "⊂", sup: "⊃", nsub: "⊄", sube: "⊆", supe: "⊇", oplus: "⊕", otimes: "⊗", perp: "⊥", sdot: "⋅", lceil: "⌈", rceil: "⌉", lfloor: "⌊", rfloor: "⌋", lang: "〈", rang: "〉", loz: "◊", spades: "♠", clubs: "♣", hearts: "♥", diams: "♦" }, cl = /^[\da-fA-F]+$/, hl = /^\d+$/;
function Pt(e) {
  return e && (e.type === "JSXIdentifier" ? e.name : e.type === "JSXNamespacedName" ? e.namespace.name + ":" + e.name.name : e.type === "JSXMemberExpression" ? Pt(e.object) + "." + Pt(e.property) : void 0);
}
var gi = /(?:\s|\/\/.*|\/\*[^]*?\*\/)*/g;
function Or(e) {
  if (!e) throw new Error("Assert fail");
}
function ll(e) {
  return e === "accessor";
}
function pl(e) {
  return e === "in" || e === "out";
}
function bi(e, t) {
  return 2 | (e ? 4 : 0) | (t ? 8 : 0);
}
function fl(e) {
  if (e.type !== "MemberExpression") return !1;
  var t = e.property;
  return (!e.computed || !(t.type !== "TemplateLiteral" || t.expressions.length > 0)) && Hs(e.object);
}
function Hs(e) {
  return e.type === "Identifier" || e.type === "MemberExpression" && !e.computed && Hs(e.object);
}
function Rr(e) {
  return e === "private" || e === "public" || e === "protected";
}
function dl(e) {
  var t = {}, i = t.dts, r = i !== void 0 && i, n = t.allowSatisfies, u = n !== void 0 && n;
  return function(c) {
    var f = c.acorn || rl, y = nl(f), o = f.tokTypes, b = f.keywordTypes, P = f.isIdentifierStart, R = f.lineBreak, B = f.isNewLine, U = f.tokContexts, Ee = f.isIdentifierChar, O = y.tokTypes, ne = y.tokContexts, bt = y.keywordsRegExp, Ce = y.tokenIsLiteralPropertyName, be = y.tokenIsTemplate, Je = y.tokenIsTSDeclarationStart, q = y.tokenIsIdentifier, Vt = y.tokenIsKeywordOrIdentifier, Ks = y.tokenIsTSTypeOperator;
    function Xs(T, pe, ue) {
      ue === void 0 && (ue = T.length);
      for (var ie = pe; ie < ue; ie++) {
        var F = T.charCodeAt(ie);
        if (B(F)) return ie < ue - 1 && F === 13 && T.charCodeAt(ie + 1) === 10 ? ie + 2 : ie + 1;
      }
      return -1;
    }
    c = (function(T, pe, ue) {
      var ie = ue.tokTypes, F = pe.tokTypes;
      return (function(d) {
        function s() {
          return d.apply(this, arguments) || this;
        }
        Ut(s, d);
        var a = s.prototype;
        return a.takeDecorators = function(h) {
          var p = this.decoratorStack[this.decoratorStack.length - 1];
          p.length && (h.decorators = p, this.resetStartLocationFromNode(h, p[0]), this.decoratorStack[this.decoratorStack.length - 1] = []);
        }, a.parseDecorators = function(h) {
          for (var p = this.decoratorStack[this.decoratorStack.length - 1]; this.match(F.at); ) {
            var m = this.parseDecorator();
            p.push(m);
          }
          this.match(ie._export) ? h || this.unexpected() : this.canHaveLeadingDecorator() || this.raise(this.start, "Leading decorators must be attached to a class declaration.");
        }, a.parseDecorator = function() {
          var h = this.startNode();
          this.next(), this.decoratorStack.push([]);
          var p, m = this.start, v = this.startLoc;
          if (this.match(ie.parenL)) {
            var x = this.start, g = this.startLoc;
            if (this.next(), p = this.parseExpression(), this.expect(ie.parenR), this.options.preserveParens) {
              var k = this.startNodeAt(x, g);
              k.expression = p, p = this.finishNode(k, "ParenthesizedExpression");
            }
          } else for (p = this.parseIdent(!1); this.eat(ie.dot); ) {
            var S = this.startNodeAt(m, v);
            S.object = p, S.property = this.parseIdent(!0), S.computed = !1, p = this.finishNode(S, "MemberExpression");
          }
          return h.expression = this.parseMaybeDecoratorArguments(p), this.decoratorStack.pop(), this.finishNode(h, "Decorator");
        }, a.parseMaybeDecoratorArguments = function(h) {
          if (this.eat(ie.parenL)) {
            var p = this.startNodeAtNode(h);
            return p.callee = h, p.arguments = this.parseExprList(ie.parenR, !1), this.finishNode(p, "CallExpression");
          }
          return h;
        }, s;
      })(T);
    })(c, y, f), c = (function(T, pe, ue, ie) {
      var F = T.tokTypes, d = pe.tokTypes, s = T.isNewLine, a = T.isIdentifierChar, h = Object.assign({ allowNamespaces: !0, allowNamespacedObjects: !0 }, {});
      return (function(p) {
        function m() {
          return p.apply(this, arguments) || this;
        }
        Ut(m, p);
        var v = m.prototype;
        return v.jsx_readToken = function() {
          for (var x = "", g = this.pos; ; ) {
            this.pos >= this.input.length && this.raise(this.start, "Unterminated JSX contents");
            var k = this.input.charCodeAt(this.pos);
            switch (k) {
              case 60:
              case 123:
                return this.pos === this.start ? k === 60 && this.exprAllowed ? (++this.pos, this.finishToken(d.jsxTagStart)) : this.getTokenFromCode(k) : (x += this.input.slice(g, this.pos), this.finishToken(d.jsxText, x));
              case 38:
                x += this.input.slice(g, this.pos), x += this.jsx_readEntity(), g = this.pos;
                break;
              case 62:
              case 125:
                this.raise(this.pos, "Unexpected token `" + this.input[this.pos] + "`. Did you mean `" + (k === 62 ? "&gt;" : "&rbrace;") + '` or `{"' + this.input[this.pos] + '"}`?');
              default:
                s(k) ? (x += this.input.slice(g, this.pos), x += this.jsx_readNewLine(!0), g = this.pos) : ++this.pos;
            }
          }
        }, v.jsx_readNewLine = function(x) {
          var g, k = this.input.charCodeAt(this.pos);
          return ++this.pos, k === 13 && this.input.charCodeAt(this.pos) === 10 ? (++this.pos, g = x ? `
` : `\r
`) : g = String.fromCharCode(k), this.options.locations && (++this.curLine, this.lineStart = this.pos), g;
        }, v.jsx_readString = function(x) {
          for (var g = "", k = ++this.pos; ; ) {
            this.pos >= this.input.length && this.raise(this.start, "Unterminated string constant");
            var S = this.input.charCodeAt(this.pos);
            if (S === x) break;
            S === 38 ? (g += this.input.slice(k, this.pos), g += this.jsx_readEntity(), k = this.pos) : s(S) ? (g += this.input.slice(k, this.pos), g += this.jsx_readNewLine(!1), k = this.pos) : ++this.pos;
          }
          return g += this.input.slice(k, this.pos++), this.finishToken(F.string, g);
        }, v.jsx_readEntity = function() {
          var x, g = "", k = 0, S = this.input[this.pos];
          S !== "&" && this.raise(this.pos, "Entity must start with an ampersand");
          for (var N = ++this.pos; this.pos < this.input.length && k++ < 10; ) {
            if ((S = this.input[this.pos++]) === ";") {
              g[0] === "#" ? g[1] === "x" ? (g = g.substr(2), cl.test(g) && (x = String.fromCharCode(parseInt(g, 16)))) : (g = g.substr(1), hl.test(g) && (x = String.fromCharCode(parseInt(g, 10)))) : x = ul[g];
              break;
            }
            g += S;
          }
          return x || (this.pos = N, "&");
        }, v.jsx_readWord = function() {
          var x, g = this.pos;
          do
            x = this.input.charCodeAt(++this.pos);
          while (a(x) || x === 45);
          return this.finishToken(d.jsxName, this.input.slice(g, this.pos));
        }, v.jsx_parseIdentifier = function() {
          var x = this.startNode();
          return this.type === d.jsxName ? x.name = this.value : this.type.keyword ? x.name = this.type.keyword : this.unexpected(), this.next(), this.finishNode(x, "JSXIdentifier");
        }, v.jsx_parseNamespacedName = function() {
          var x = this.start, g = this.startLoc, k = this.jsx_parseIdentifier();
          if (!h.allowNamespaces || !this.eat(F.colon)) return k;
          var S = this.startNodeAt(x, g);
          return S.namespace = k, S.name = this.jsx_parseIdentifier(), this.finishNode(S, "JSXNamespacedName");
        }, v.jsx_parseElementName = function() {
          if (this.type === d.jsxTagEnd) return "";
          var x = this.start, g = this.startLoc, k = this.jsx_parseNamespacedName();
          for (this.type !== F.dot || k.type !== "JSXNamespacedName" || h.allowNamespacedObjects || this.unexpected(); this.eat(F.dot); ) {
            var S = this.startNodeAt(x, g);
            S.object = k, S.property = this.jsx_parseIdentifier(), k = this.finishNode(S, "JSXMemberExpression");
          }
          return k;
        }, v.jsx_parseAttributeValue = function() {
          switch (this.type) {
            case F.braceL:
              var x = this.jsx_parseExpressionContainer();
              return x.expression.type === "JSXEmptyExpression" && this.raise(x.start, "JSX attributes must only be assigned a non-empty expression"), x;
            case d.jsxTagStart:
            case F.string:
              return this.parseExprAtom();
            default:
              this.raise(this.start, "JSX value should be either an expression or a quoted JSX text");
          }
        }, v.jsx_parseEmptyExpression = function() {
          var x = this.startNodeAt(this.lastTokEnd, this.lastTokEndLoc);
          return this.finishNodeAt(x, "JSXEmptyExpression", this.start, this.startLoc);
        }, v.jsx_parseExpressionContainer = function() {
          var x = this.startNode();
          return this.next(), x.expression = this.type === F.braceR ? this.jsx_parseEmptyExpression() : this.parseExpression(), this.expect(F.braceR), this.finishNode(x, "JSXExpressionContainer");
        }, v.jsx_parseAttribute = function() {
          var x = this.startNode();
          return this.eat(F.braceL) ? (this.expect(F.ellipsis), x.argument = this.parseMaybeAssign(), this.expect(F.braceR), this.finishNode(x, "JSXSpreadAttribute")) : (x.name = this.jsx_parseNamespacedName(), x.value = this.eat(F.eq) ? this.jsx_parseAttributeValue() : null, this.finishNode(x, "JSXAttribute"));
        }, v.jsx_parseOpeningElementAt = function(x, g) {
          var k = this.startNodeAt(x, g);
          k.attributes = [];
          var S = this.jsx_parseElementName();
          for (S && (k.name = S); this.type !== F.slash && this.type !== d.jsxTagEnd; ) k.attributes.push(this.jsx_parseAttribute());
          return k.selfClosing = this.eat(F.slash), this.expect(d.jsxTagEnd), this.finishNode(k, S ? "JSXOpeningElement" : "JSXOpeningFragment");
        }, v.jsx_parseClosingElementAt = function(x, g) {
          var k = this.startNodeAt(x, g), S = this.jsx_parseElementName();
          return S && (k.name = S), this.expect(d.jsxTagEnd), this.finishNode(k, S ? "JSXClosingElement" : "JSXClosingFragment");
        }, v.jsx_parseElementAt = function(x, g) {
          var k = this.startNodeAt(x, g), S = [], N = this.jsx_parseOpeningElementAt(x, g), M = null;
          if (!N.selfClosing) {
            e: for (; ; ) switch (this.type) {
              case d.jsxTagStart:
                if (x = this.start, g = this.startLoc, this.next(), this.eat(F.slash)) {
                  M = this.jsx_parseClosingElementAt(x, g);
                  break e;
                }
                S.push(this.jsx_parseElementAt(x, g));
                break;
              case d.jsxText:
                S.push(this.parseExprAtom());
                break;
              case F.braceL:
                S.push(this.jsx_parseExpressionContainer());
                break;
              default:
                this.unexpected();
            }
            Pt(M.name) !== Pt(N.name) && this.raise(M.start, "Expected corresponding JSX closing tag for <" + Pt(N.name) + ">");
          }
          var A = N.name ? "Element" : "Fragment";
          return k["opening" + A] = N, k["closing" + A] = M, k.children = S, this.type === F.relational && this.value === "<" && this.raise(this.start, "Adjacent JSX elements must be wrapped in an enclosing tag"), this.finishNode(k, "JSX" + A);
        }, v.jsx_parseText = function() {
          var x = this.parseLiteral(this.value);
          return x.type = "JSXText", x;
        }, v.jsx_parseElement = function() {
          var x = this.start, g = this.startLoc;
          return this.next(), this.jsx_parseElementAt(x, g);
        }, m;
      })(ue);
    })(f, y, c), c = (function(T, pe, ue) {
      var ie = pe.tokTypes, F = ue.tokTypes;
      return (function(d) {
        function s() {
          return d.apply(this, arguments) || this;
        }
        Ut(s, d);
        var a = s.prototype;
        return a.parseMaybeImportAttributes = function(h) {
          if (this.type === F._with || this.type === ie.assert) {
            this.next();
            var p = this.parseImportAttributes();
            p && (h.attributes = p);
          }
        }, a.parseImportAttributes = function() {
          this.expect(F.braceL);
          var h = this.parseWithEntries();
          return this.expect(F.braceR), h;
        }, a.parseWithEntries = function() {
          var h = [], p = /* @__PURE__ */ new Set();
          do {
            if (this.type === F.braceR) break;
            var m, v = this.startNode();
            m = this.type === F.string ? this.parseLiteral(this.value) : this.parseIdent(!0), this.next(), v.key = m, p.has(v.key.name) && this.raise(this.pos, "Duplicated key in attributes"), p.add(v.key.name), this.type !== F.string && this.raise(this.pos, "Only string is supported as an attribute value"), v.value = this.parseLiteral(this.value), h.push(this.finishNode(v, "ImportAttribute"));
          } while (this.eat(F.comma));
          return h;
        }, s;
      })(T);
    })(c, y, f);
    var Js = /* @__PURE__ */ (function(T) {
      function pe(s, a, h) {
        var p;
        return (p = T.call(this, s, a, h) || this).preValue = null, p.preToken = null, p.isLookahead = !1, p.isAmbientContext = !1, p.inAbstractClass = !1, p.inType = !1, p.inDisallowConditionalTypesContext = !1, p.maybeInArrowParameters = !1, p.shouldParseArrowReturnType = void 0, p.shouldParseAsyncArrowReturnType = void 0, p.decoratorStack = [[]], p.importsStack = [[]], p.importOrExportOuterKind = void 0, p.tsParseConstModifier = p.tsParseModifiers.bind((function(m) {
          if (m === void 0) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
          return m;
        })(p), { allowedModifiers: ["const"], disallowedModifiers: ["in", "out"], errorTemplate: I.InvalidModifierOnTypeParameterPositions }), p;
      }
      Ut(pe, T);
      var ue, ie, F, d = pe.prototype;
      return d.getTokenFromCodeInType = function(s) {
        return s === 62 || s === 60 ? this.finishOp(o.relational, 1) : T.prototype.getTokenFromCode.call(this, s);
      }, d.readToken = function(s) {
        if (!this.inType) {
          var a = this.curContext();
          if (a === ne.tc_expr) return this.jsx_readToken();
          if (a === ne.tc_oTag || a === ne.tc_cTag) {
            if (P(s)) return this.jsx_readWord();
            if (s == 62) return ++this.pos, this.finishToken(O.jsxTagEnd);
            if ((s === 34 || s === 39) && a == ne.tc_oTag) return this.jsx_readString(s);
          }
          if (s === 60 && this.exprAllowed && this.input.charCodeAt(this.pos + 1) !== 33) return ++this.pos, this.finishToken(O.jsxTagStart);
        }
        return T.prototype.readToken.call(this, s);
      }, d.getTokenFromCode = function(s) {
        return this.inType ? this.getTokenFromCodeInType(s) : s === 64 ? (++this.pos, this.finishToken(O.at)) : T.prototype.getTokenFromCode.call(this, s);
      }, d.isAbstractClass = function() {
        return this.ts_isContextual(O.abstract) && this.lookahead().type === o._class;
      }, d.finishNode = function(s, a) {
        return s.type !== "" && s.end !== 0 ? s : T.prototype.finishNode.call(this, s, a);
      }, d.tryParse = function(s, a) {
        a === void 0 && (a = this.cloneCurLookaheadState());
        var h = { node: null };
        try {
          return { node: s(function(m) {
            throw m === void 0 && (m = null), h.node = m, h;
          }), error: null, thrown: !1, aborted: !1, failState: null };
        } catch (m) {
          var p = this.getCurLookaheadState();
          if (this.setLookaheadState(a), m instanceof SyntaxError) return { node: null, error: m, thrown: !0, aborted: !1, failState: p };
          if (m === h) return { node: h.node, error: null, thrown: !1, aborted: !0, failState: p };
          throw m;
        }
      }, d.setOptionalParametersError = function(s, a) {
        var h;
        s.optionalParametersLoc = (h = a?.loc) != null ? h : this.startLoc;
      }, d.reScan_lt_gt = function() {
        this.type === o.relational && (this.pos -= 1, this.readToken_lt_gt(this.fullCharCodeAtPos()));
      }, d.reScan_lt = function() {
        var s = this.type;
        return s === o.bitShift ? (this.pos -= 2, this.finishOp(o.relational, 1), o.relational) : s;
      }, d.resetEndLocation = function(s, a) {
        a === void 0 && (a = this.lastTokEndLoc), s.end = a.column, s.loc.end = a, this.options.ranges && (s.range[1] = a.column);
      }, d.startNodeAtNode = function(s) {
        return T.prototype.startNodeAt.call(this, s.start, s.loc.start);
      }, d.nextTokenStart = function() {
        return this.nextTokenStartSince(this.pos);
      }, d.tsHasSomeModifiers = function(s, a) {
        return a.some(function(h) {
          return Rr(h) ? s.accessibility === h : !!s[h];
        });
      }, d.tsIsStartOfStaticBlocks = function() {
        return this.isContextual("static") && this.lookaheadCharCode() === 123;
      }, d.tsCheckForInvalidTypeCasts = function(s) {
        var a = this;
        s.forEach(function(h) {
          h?.type === "TSTypeCastExpression" && a.raise(h.typeAnnotation.start, I.UnexpectedTypeAnnotation);
        });
      }, d.atPossibleAsyncArrow = function(s) {
        return s.type === "Identifier" && s.name === "async" && this.lastTokEndLoc.column === s.end && !this.canInsertSemicolon() && s.end - s.start == 5 && s.start === this.potentialArrowAt;
      }, d.tsIsIdentifier = function() {
        return q(this.type);
      }, d.tsTryParseTypeOrTypePredicateAnnotation = function() {
        return this.match(o.colon) ? this.tsParseTypeOrTypePredicateAnnotation(o.colon) : void 0;
      }, d.tsTryParseGenericAsyncArrowFunction = function(s, a, h) {
        var p = this;
        if (this.tsMatchLeftRelational()) {
          var m = this.maybeInArrowParameters;
          this.maybeInArrowParameters = !0;
          var v = this.tsTryParseAndCatch(function() {
            var x = p.startNodeAt(s, a);
            return x.typeParameters = p.tsParseTypeParameters(), T.prototype.parseFunctionParams.call(p, x), x.returnType = p.tsTryParseTypeOrTypePredicateAnnotation(), p.expect(o.arrow), x;
          });
          if (this.maybeInArrowParameters = m, v) return T.prototype.parseArrowExpression.call(this, v, null, !0, h);
        }
      }, d.tsParseTypeArgumentsInExpression = function() {
        if (this.reScan_lt() === o.relational) return this.tsParseTypeArguments();
      }, d.tsInNoContext = function(s) {
        var a = this.context;
        this.context = [a[0]];
        try {
          return s();
        } finally {
          this.context = a;
        }
      }, d.tsTryParseTypeAnnotation = function() {
        return this.match(o.colon) ? this.tsParseTypeAnnotation() : void 0;
      }, d.isUnparsedContextual = function(s, a) {
        var h = s + a.length;
        if (this.input.slice(s, h) === a) {
          var p = this.input.charCodeAt(h);
          return !(Ee(p) || (64512 & p) == 55296);
        }
        return !1;
      }, d.isAbstractConstructorSignature = function() {
        return this.ts_isContextual(O.abstract) && this.lookahead().type === o._new;
      }, d.nextTokenStartSince = function(s) {
        return gi.lastIndex = s, gi.test(this.input) ? gi.lastIndex : s;
      }, d.lookaheadCharCode = function() {
        return this.input.charCodeAt(this.nextTokenStart());
      }, d.compareLookaheadState = function(s, a) {
        for (var h = 0, p = Object.keys(s); h < p.length; h++) {
          var m = p[h];
          if (s[m] !== a[m]) return !1;
        }
        return !0;
      }, d.createLookaheadState = function() {
        this.value = null, this.context = [this.curContext()];
      }, d.getCurLookaheadState = function() {
        return { endLoc: this.endLoc, lastTokEnd: this.lastTokEnd, lastTokStart: this.lastTokStart, lastTokStartLoc: this.lastTokStartLoc, pos: this.pos, value: this.value, type: this.type, start: this.start, end: this.end, context: this.context, startLoc: this.startLoc, lastTokEndLoc: this.lastTokEndLoc, curLine: this.curLine, lineStart: this.lineStart, curPosition: this.curPosition, containsEsc: this.containsEsc };
      }, d.cloneCurLookaheadState = function() {
        return { pos: this.pos, value: this.value, type: this.type, start: this.start, end: this.end, context: this.context && this.context.slice(), startLoc: this.startLoc, lastTokEndLoc: this.lastTokEndLoc, endLoc: this.endLoc, lastTokEnd: this.lastTokEnd, lastTokStart: this.lastTokStart, lastTokStartLoc: this.lastTokStartLoc, curLine: this.curLine, lineStart: this.lineStart, curPosition: this.curPosition, containsEsc: this.containsEsc };
      }, d.setLookaheadState = function(s) {
        this.pos = s.pos, this.value = s.value, this.endLoc = s.endLoc, this.lastTokEnd = s.lastTokEnd, this.lastTokStart = s.lastTokStart, this.lastTokStartLoc = s.lastTokStartLoc, this.type = s.type, this.start = s.start, this.end = s.end, this.context = s.context, this.startLoc = s.startLoc, this.lastTokEndLoc = s.lastTokEndLoc, this.curLine = s.curLine, this.lineStart = s.lineStart, this.curPosition = s.curPosition, this.containsEsc = s.containsEsc;
      }, d.tsLookAhead = function(s) {
        var a = this.getCurLookaheadState(), h = s();
        return this.setLookaheadState(a), h;
      }, d.lookahead = function(s) {
        var a = this.getCurLookaheadState();
        if (this.createLookaheadState(), this.isLookahead = !0, s !== void 0) for (var h = 0; h < s; h++) this.nextToken();
        else this.nextToken();
        this.isLookahead = !1;
        var p = this.getCurLookaheadState();
        return this.setLookaheadState(a), p;
      }, d.readWord = function() {
        var s = this.readWord1(), a = o.name;
        return this.keywords.test(s) ? a = b[s] : new RegExp(bt).test(s) && (a = O[s]), this.finishToken(a, s);
      }, d.skipBlockComment = function() {
        var s;
        this.isLookahead || (s = this.options.onComment && this.curPosition());
        var a = this.pos, h = this.input.indexOf("*/", this.pos += 2);
        if (h === -1 && this.raise(this.pos - 2, "Unterminated comment"), this.pos = h + 2, this.options.locations) for (var p, m = a; (p = Xs(this.input, m, this.pos)) > -1; ) ++this.curLine, m = this.lineStart = p;
        this.isLookahead || this.options.onComment && this.options.onComment(!0, this.input.slice(a + 2, h), a, this.pos, s, this.curPosition());
      }, d.skipLineComment = function(s) {
        var a, h = this.pos;
        this.isLookahead || (a = this.options.onComment && this.curPosition());
        for (var p = this.input.charCodeAt(this.pos += s); this.pos < this.input.length && !B(p); ) p = this.input.charCodeAt(++this.pos);
        this.isLookahead || this.options.onComment && this.options.onComment(!1, this.input.slice(h + s, this.pos), h, this.pos, a, this.curPosition());
      }, d.finishToken = function(s, a) {
        this.preValue = this.value, this.preToken = this.type, this.end = this.pos, this.options.locations && (this.endLoc = this.curPosition());
        var h = this.type;
        this.type = s, this.value = a, this.isLookahead || this.updateContext(h);
      }, d.resetStartLocation = function(s, a, h) {
        s.start = a, s.loc.start = h, this.options.ranges && (s.range[0] = a);
      }, d.isLineTerminator = function() {
        return this.eat(o.semi) || T.prototype.canInsertSemicolon.call(this);
      }, d.hasFollowingLineBreak = function() {
        return Nr.lastIndex = this.end, Nr.test(this.input);
      }, d.addExtra = function(s, a, h, p) {
        if (p === void 0 && (p = !0), s) {
          var m = s.extra = s.extra || {};
          p ? m[a] = h : Object.defineProperty(m, a, { enumerable: p, value: h });
        }
      }, d.isLiteralPropertyName = function() {
        return Ce(this.type);
      }, d.hasPrecedingLineBreak = function() {
        return R.test(this.input.slice(this.lastTokEndLoc.index, this.start));
      }, d.createIdentifier = function(s, a) {
        return s.name = a, this.finishNode(s, "Identifier");
      }, d.resetStartLocationFromNode = function(s, a) {
        this.resetStartLocation(s, a.start, a.loc.start);
      }, d.isThisParam = function(s) {
        return s.type === "Identifier" && s.name === "this";
      }, d.isLookaheadContextual = function(s) {
        var a = this.nextTokenStart();
        return this.isUnparsedContextual(a, s);
      }, d.ts_type_isContextual = function(s, a) {
        return s === a && !this.containsEsc;
      }, d.ts_isContextual = function(s) {
        return this.type === s && !this.containsEsc;
      }, d.ts_isContextualWithState = function(s, a) {
        return s.type === a && !s.containsEsc;
      }, d.isContextualWithState = function(s, a) {
        return a.type === o.name && a.value === s && !a.containsEsc;
      }, d.tsIsStartOfMappedType = function() {
        return this.next(), this.eat(o.plusMin) ? this.ts_isContextual(O.readonly) : (this.ts_isContextual(O.readonly) && this.next(), !!this.match(o.bracketL) && (this.next(), !!this.tsIsIdentifier() && (this.next(), this.match(o._in))));
      }, d.tsInDisallowConditionalTypesContext = function(s) {
        var a = this.inDisallowConditionalTypesContext;
        this.inDisallowConditionalTypesContext = !0;
        try {
          return s();
        } finally {
          this.inDisallowConditionalTypesContext = a;
        }
      }, d.tsTryParseType = function() {
        return this.tsEatThenParseType(o.colon);
      }, d.match = function(s) {
        return this.type === s;
      }, d.matchJsx = function(s) {
        return this.type === y.tokTypes[s];
      }, d.ts_eatWithState = function(s, a, h) {
        if (s === h.type) {
          for (var p = 0; p < a; p++) this.next();
          return !0;
        }
        return !1;
      }, d.ts_eatContextualWithState = function(s, a, h) {
        if (bt.test(s)) {
          if (this.ts_isContextualWithState(h, O[s])) {
            for (var p = 0; p < a; p++) this.next();
            return !0;
          }
          return !1;
        }
        if (!this.isContextualWithState(s, h)) return !1;
        for (var m = 0; m < a; m++) this.next();
        return !0;
      }, d.canHaveLeadingDecorator = function() {
        return this.match(o._class);
      }, d.eatContextual = function(s) {
        return bt.test(s) ? !!this.ts_isContextual(O[s]) && (this.next(), !0) : T.prototype.eatContextual.call(this, s);
      }, d.tsIsExternalModuleReference = function() {
        return this.isContextual("require") && this.lookaheadCharCode() === 40;
      }, d.tsParseExternalModuleReference = function() {
        var s = this.startNode();
        return this.expectContextual("require"), this.expect(o.parenL), this.match(o.string) || this.unexpected(), s.expression = this.parseExprAtom(), this.expect(o.parenR), this.finishNode(s, "TSExternalModuleReference");
      }, d.tsParseEntityName = function(s) {
        s === void 0 && (s = !0);
        for (var a = this.parseIdent(s); this.eat(o.dot); ) {
          var h = this.startNodeAtNode(a);
          h.left = a, h.right = this.parseIdent(s), a = this.finishNode(h, "TSQualifiedName");
        }
        return a;
      }, d.tsParseEnumMember = function() {
        var s = this.startNode();
        return s.id = this.match(o.string) ? this.parseLiteral(this.value) : this.parseIdent(!0), this.eat(o.eq) && (s.initializer = this.parseMaybeAssign()), this.finishNode(s, "TSEnumMember");
      }, d.tsParseEnumDeclaration = function(s, a) {
        return a === void 0 && (a = {}), a.const && (s.const = !0), a.declare && (s.declare = !0), this.expectContextual("enum"), s.id = this.parseIdent(), this.checkLValSimple(s.id), this.expect(o.braceL), s.members = this.tsParseDelimitedList("EnumMembers", this.tsParseEnumMember.bind(this)), this.expect(o.braceR), this.finishNode(s, "TSEnumDeclaration");
      }, d.tsParseModuleBlock = function() {
        var s = this.startNode();
        for (T.prototype.enterScope.call(this, 512), this.expect(o.braceL), s.body = []; this.type !== o.braceR; ) {
          var a = this.parseStatement(null, !0);
          s.body.push(a);
        }
        return this.next(), T.prototype.exitScope.call(this), this.finishNode(s, "TSModuleBlock");
      }, d.tsParseAmbientExternalModuleDeclaration = function(s) {
        return this.ts_isContextual(O.global) ? (s.global = !0, s.id = this.parseIdent()) : this.match(o.string) ? s.id = this.parseLiteral(this.value) : this.unexpected(), this.match(o.braceL) ? (T.prototype.enterScope.call(this, wt), s.body = this.tsParseModuleBlock(), T.prototype.exitScope.call(this)) : T.prototype.semicolon.call(this), this.finishNode(s, "TSModuleDeclaration");
      }, d.tsTryParseDeclare = function(s) {
        var a = this;
        if (!this.isLineTerminator()) {
          var h, p = this.type;
          return this.isContextual("let") && (p = o._var, h = "let"), this.tsInAmbientContext(function() {
            if (p === o._function) return s.declare = !0, a.parseFunctionStatement(s, !1, !0);
            if (p === o._class) return s.declare = !0, a.parseClass(s, !0);
            if (p === O.enum) return a.tsParseEnumDeclaration(s, { declare: !0 });
            if (p === O.global) return a.tsParseAmbientExternalModuleDeclaration(s);
            if (p === o._const || p === o._var) return a.match(o._const) && a.isLookaheadContextual("enum") ? (a.expect(o._const), a.tsParseEnumDeclaration(s, { const: !0, declare: !0 })) : (s.declare = !0, a.parseVarStatement(s, h || a.value, !0));
            if (p === O.interface) {
              var m = a.tsParseInterfaceDeclaration(s, { declare: !0 });
              if (m) return m;
            }
            return q(p) ? a.tsParseDeclaration(s, a.value, !0) : void 0;
          });
        }
      }, d.tsIsListTerminator = function(s) {
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
      }, d.tsParseDelimitedListWorker = function(s, a, h, p) {
        for (var m = [], v = -1; !this.tsIsListTerminator(s); ) {
          v = -1;
          var x = a();
          if (x == null) return;
          if (m.push(x), !this.eat(o.comma)) {
            if (this.tsIsListTerminator(s)) break;
            return void (h && this.expect(o.comma));
          }
          v = this.lastTokStart;
        }
        return p && (p.value = v), m;
      }, d.tsParseDelimitedList = function(s, a, h) {
        return (function(p) {
          if (p == null) throw new Error("Unexpected " + p + " value.");
          return p;
        })(this.tsParseDelimitedListWorker(s, a, !0, h));
      }, d.tsParseBracketedList = function(s, a, h, p, m) {
        p || this.expect(h ? o.bracketL : o.relational);
        var v = this.tsParseDelimitedList(s, a, m);
        return this.expect(h ? o.bracketR : o.relational), v;
      }, d.tsParseTypeParameterName = function() {
        return this.parseIdent().name;
      }, d.tsEatThenParseType = function(s) {
        return this.match(s) ? this.tsNextThenParseType() : void 0;
      }, d.tsExpectThenParseType = function(s) {
        var a = this;
        return this.tsDoThenParseType(function() {
          return a.expect(s);
        });
      }, d.tsNextThenParseType = function() {
        var s = this;
        return this.tsDoThenParseType(function() {
          return s.next();
        });
      }, d.tsDoThenParseType = function(s) {
        var a = this;
        return this.tsInType(function() {
          return s(), a.tsParseType();
        });
      }, d.tsSkipParameterStart = function() {
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
      }, d.tsIsUnambiguouslyStartOfFunctionType = function() {
        return this.next(), !!(this.match(o.parenR) || this.match(o.ellipsis) || this.tsSkipParameterStart() && (this.match(o.colon) || this.match(o.comma) || this.match(o.question) || this.match(o.eq) || this.match(o.parenR) && (this.next(), this.match(o.arrow))));
      }, d.tsIsStartOfFunctionType = function() {
        return !!this.tsMatchLeftRelational() || this.match(o.parenL) && this.tsLookAhead(this.tsIsUnambiguouslyStartOfFunctionType.bind(this));
      }, d.tsInAllowConditionalTypesContext = function(s) {
        var a = this.inDisallowConditionalTypesContext;
        this.inDisallowConditionalTypesContext = !1;
        try {
          return s();
        } finally {
          this.inDisallowConditionalTypesContext = a;
        }
      }, d.tsParseBindingListForSignature = function() {
        var s = this;
        return T.prototype.parseBindingList.call(this, o.parenR, !0, !0).map(function(a) {
          return a.type !== "Identifier" && a.type !== "RestElement" && a.type !== "ObjectPattern" && a.type !== "ArrayPattern" && s.raise(a.start, I.UnsupportedSignatureParameterKind(a.type)), a;
        });
      }, d.tsParseTypePredicateAsserts = function() {
        if (this.type !== O.asserts) return !1;
        var s = this.containsEsc;
        return this.next(), !(!q(this.type) && !this.match(o._this) || (s && this.raise(this.lastTokStart, "Escape sequence in keyword asserts"), 0));
      }, d.tsParseThisTypeNode = function() {
        var s = this.startNode();
        return this.next(), this.finishNode(s, "TSThisType");
      }, d.tsParseTypeAnnotation = function(s, a) {
        var h = this;
        return s === void 0 && (s = !0), a === void 0 && (a = this.startNode()), this.tsInType(function() {
          s && h.expect(o.colon), a.typeAnnotation = h.tsParseType();
        }), this.finishNode(a, "TSTypeAnnotation");
      }, d.tsParseThisTypePredicate = function(s) {
        this.next();
        var a = this.startNodeAtNode(s);
        return a.parameterName = s, a.typeAnnotation = this.tsParseTypeAnnotation(!1), a.asserts = !1, this.finishNode(a, "TSTypePredicate");
      }, d.tsParseThisTypeOrThisTypePredicate = function() {
        var s = this.tsParseThisTypeNode();
        return this.isContextual("is") && !this.hasPrecedingLineBreak() ? this.tsParseThisTypePredicate(s) : s;
      }, d.tsParseTypePredicatePrefix = function() {
        var s = this.parseIdent();
        if (this.isContextual("is") && !this.hasPrecedingLineBreak()) return this.next(), s;
      }, d.tsParseTypeOrTypePredicateAnnotation = function(s) {
        var a = this;
        return this.tsInType(function() {
          var h = a.startNode();
          a.expect(s);
          var p = a.startNode(), m = !!a.tsTryParse(a.tsParseTypePredicateAsserts.bind(a));
          if (m && a.match(o._this)) {
            var v = a.tsParseThisTypeOrThisTypePredicate();
            return v.type === "TSThisType" ? (p.parameterName = v, p.asserts = !0, p.typeAnnotation = null, v = a.finishNode(p, "TSTypePredicate")) : (a.resetStartLocationFromNode(v, p), v.asserts = !0), h.typeAnnotation = v, a.finishNode(h, "TSTypeAnnotation");
          }
          var x = a.tsIsIdentifier() && a.tsTryParse(a.tsParseTypePredicatePrefix.bind(a));
          if (!x) return m ? (p.parameterName = a.parseIdent(), p.asserts = m, p.typeAnnotation = null, h.typeAnnotation = a.finishNode(p, "TSTypePredicate"), a.finishNode(h, "TSTypeAnnotation")) : a.tsParseTypeAnnotation(!1, h);
          var g = a.tsParseTypeAnnotation(!1);
          return p.parameterName = x, p.typeAnnotation = g, p.asserts = m, h.typeAnnotation = a.finishNode(p, "TSTypePredicate"), a.finishNode(h, "TSTypeAnnotation");
        });
      }, d.tsFillSignature = function(s, a) {
        var h = s === o.arrow;
        a.typeParameters = this.tsTryParseTypeParameters(), this.expect(o.parenL), a.parameters = this.tsParseBindingListForSignature(), (h || this.match(s)) && (a.typeAnnotation = this.tsParseTypeOrTypePredicateAnnotation(s));
      }, d.tsTryNextParseConstantContext = function() {
        if (this.lookahead().type !== o._const) return null;
        this.next();
        var s = this.tsParseTypeReference();
        return s.typeParameters && this.raise(s.typeName.start, I.CannotFindName({ name: "const" })), s;
      }, d.tsParseFunctionOrConstructorType = function(s, a) {
        var h = this, p = this.startNode();
        return s === "TSConstructorType" && (p.abstract = !!a, a && this.next(), this.next()), this.tsInAllowConditionalTypesContext(function() {
          return h.tsFillSignature(o.arrow, p);
        }), this.finishNode(p, s);
      }, d.tsParseUnionOrIntersectionType = function(s, a, h) {
        var p = this.startNode(), m = this.eat(h), v = [];
        do
          v.push(a());
        while (this.eat(h));
        return v.length !== 1 || m ? (p.types = v, this.finishNode(p, s)) : v[0];
      }, d.tsCheckTypeAnnotationForReadOnly = function(s) {
        switch (s.typeAnnotation.type) {
          case "TSTupleType":
          case "TSArrayType":
            return;
          default:
            this.raise(s.start, I.UnexpectedReadonly);
        }
      }, d.tsParseTypeOperator = function() {
        var s = this.startNode(), a = this.value;
        return this.next(), s.operator = a, s.typeAnnotation = this.tsParseTypeOperatorOrHigher(), a === "readonly" && this.tsCheckTypeAnnotationForReadOnly(s), this.finishNode(s, "TSTypeOperator");
      }, d.tsParseConstraintForInferType = function() {
        var s = this;
        if (this.eat(o._extends)) {
          var a = this.tsInDisallowConditionalTypesContext(function() {
            return s.tsParseType();
          });
          if (this.inDisallowConditionalTypesContext || !this.match(o.question)) return a;
        }
      }, d.tsParseInferType = function() {
        var s = this, a = this.startNode();
        this.expectContextual("infer");
        var h = this.startNode();
        return h.name = this.tsParseTypeParameterName(), h.constraint = this.tsTryParse(function() {
          return s.tsParseConstraintForInferType();
        }), a.typeParameter = this.finishNode(h, "TSTypeParameter"), this.finishNode(a, "TSInferType");
      }, d.tsParseLiteralTypeNode = function() {
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
      }, d.tsParseImportType = function() {
        var s = this.startNode();
        return this.expect(o._import), this.expect(o.parenL), this.match(o.string) || this.raise(this.start, I.UnsupportedImportTypeArgument), s.argument = this.parseExprAtom(), this.expect(o.parenR), this.eat(o.dot) && (s.qualifier = this.tsParseEntityName()), this.tsMatchLeftRelational() && (s.typeParameters = this.tsParseTypeArguments()), this.finishNode(s, "TSImportType");
      }, d.tsParseTypeQuery = function() {
        var s = this.startNode();
        return this.expect(o._typeof), s.exprName = this.match(o._import) ? this.tsParseImportType() : this.tsParseEntityName(), !this.hasPrecedingLineBreak() && this.tsMatchLeftRelational() && (s.typeParameters = this.tsParseTypeArguments()), this.finishNode(s, "TSTypeQuery");
      }, d.tsParseMappedTypeParameter = function() {
        var s = this.startNode();
        return s.name = this.tsParseTypeParameterName(), s.constraint = this.tsExpectThenParseType(o._in), this.finishNode(s, "TSTypeParameter");
      }, d.tsParseMappedType = function() {
        var s = this.startNode();
        return this.expect(o.braceL), this.match(o.plusMin) ? (s.readonly = this.value, this.next(), this.expectContextual("readonly")) : this.eatContextual("readonly") && (s.readonly = !0), this.expect(o.bracketL), s.typeParameter = this.tsParseMappedTypeParameter(), s.nameType = this.eatContextual("as") ? this.tsParseType() : null, this.expect(o.bracketR), this.match(o.plusMin) ? (s.optional = this.value, this.next(), this.expect(o.question)) : this.eat(o.question) && (s.optional = !0), s.typeAnnotation = this.tsTryParseType(), this.semicolon(), this.expect(o.braceR), this.finishNode(s, "TSMappedType");
      }, d.tsParseTypeLiteral = function() {
        var s = this.startNode();
        return s.members = this.tsParseObjectTypeMembers(), this.finishNode(s, "TSTypeLiteral");
      }, d.tsParseTupleElementType = function() {
        var s = this.startLoc, a = this.start, h = this.eat(o.ellipsis), p = this.tsParseType(), m = this.eat(o.question);
        if (this.eat(o.colon)) {
          var v = this.startNodeAtNode(p);
          v.optional = m, p.type !== "TSTypeReference" || p.typeParameters || p.typeName.type !== "Identifier" ? (this.raise(p.start, I.InvalidTupleMemberLabel), v.label = p) : v.label = p.typeName, v.elementType = this.tsParseType(), p = this.finishNode(v, "TSNamedTupleMember");
        } else if (m) {
          var x = this.startNodeAtNode(p);
          x.typeAnnotation = p, p = this.finishNode(x, "TSOptionalType");
        }
        if (h) {
          var g = this.startNodeAt(a, s);
          g.typeAnnotation = p, p = this.finishNode(g, "TSRestType");
        }
        return p;
      }, d.tsParseTupleType = function() {
        var s = this, a = this.startNode();
        a.elementTypes = this.tsParseBracketedList("TupleElementTypes", this.tsParseTupleElementType.bind(this), !0, !1);
        var h = !1, p = null;
        return a.elementTypes.forEach(function(m) {
          var v = m.type;
          !h || v === "TSRestType" || v === "TSOptionalType" || v === "TSNamedTupleMember" && m.optional || s.raise(m.start, I.OptionalTypeBeforeRequired), h || (h = v === "TSNamedTupleMember" && m.optional || v === "TSOptionalType");
          var x = v;
          v === "TSRestType" && (x = (m = m.typeAnnotation).type);
          var g = x === "TSNamedTupleMember";
          p != null || (p = g), p !== g && s.raise(m.start, I.MixedLabeledAndUnlabeledElements);
        }), this.finishNode(a, "TSTupleType");
      }, d.tsParseTemplateLiteralType = function() {
        var s = this.startNode();
        return s.literal = this.parseTemplate({ isTagged: !1 }), this.finishNode(s, "TSLiteralType");
      }, d.tsParseTypeReference = function() {
        var s = this.startNode();
        return s.typeName = this.tsParseEntityName(), !this.hasPrecedingLineBreak() && this.tsMatchLeftRelational() && (s.typeParameters = this.tsParseTypeArguments()), this.finishNode(s, "TSTypeReference");
      }, d.tsMatchLeftRelational = function() {
        return this.match(o.relational) && this.value === "<";
      }, d.tsMatchRightRelational = function() {
        return this.match(o.relational) && this.value === ">";
      }, d.tsParseParenthesizedType = function() {
        var s = this.startNode();
        return this.expect(o.parenL), s.typeAnnotation = this.tsParseType(), this.expect(o.parenR), this.finishNode(s, "TSParenthesizedType");
      }, d.tsParseNonArrayType = function() {
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
              var h = a === o._void ? "TSVoidKeyword" : a === o._null ? "TSNullKeyword" : (function(m) {
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
              if (h !== void 0 && this.lookaheadCharCode() !== 46) {
                var p = this.startNode();
                return this.next(), this.finishNode(p, h);
              }
              return this.tsParseTypeReference();
            }
        }
        this.unexpected();
      }, d.tsParseArrayTypeOrHigher = function() {
        for (var s = this.tsParseNonArrayType(); !this.hasPrecedingLineBreak() && this.eat(o.bracketL); ) if (this.match(o.bracketR)) {
          var a = this.startNodeAtNode(s);
          a.elementType = s, this.expect(o.bracketR), s = this.finishNode(a, "TSArrayType");
        } else {
          var h = this.startNodeAtNode(s);
          h.objectType = s, h.indexType = this.tsParseType(), this.expect(o.bracketR), s = this.finishNode(h, "TSIndexedAccessType");
        }
        return s;
      }, d.tsParseTypeOperatorOrHigher = function() {
        var s = this;
        return Ks(this.type) && !this.containsEsc ? this.tsParseTypeOperator() : this.isContextual("infer") ? this.tsParseInferType() : this.tsInAllowConditionalTypesContext(function() {
          return s.tsParseArrayTypeOrHigher();
        });
      }, d.tsParseIntersectionTypeOrHigher = function() {
        return this.tsParseUnionOrIntersectionType("TSIntersectionType", this.tsParseTypeOperatorOrHigher.bind(this), o.bitwiseAND);
      }, d.tsParseUnionTypeOrHigher = function() {
        return this.tsParseUnionOrIntersectionType("TSUnionType", this.tsParseIntersectionTypeOrHigher.bind(this), o.bitwiseOR);
      }, d.tsParseNonConditionalType = function() {
        return this.tsIsStartOfFunctionType() ? this.tsParseFunctionOrConstructorType("TSFunctionType") : this.match(o._new) ? this.tsParseFunctionOrConstructorType("TSConstructorType") : this.isAbstractConstructorSignature() ? this.tsParseFunctionOrConstructorType("TSConstructorType", !0) : this.tsParseUnionTypeOrHigher();
      }, d.tsParseType = function() {
        var s = this;
        Or(this.inType);
        var a = this.tsParseNonConditionalType();
        if (this.inDisallowConditionalTypesContext || this.hasPrecedingLineBreak() || !this.eat(o._extends)) return a;
        var h = this.startNodeAtNode(a);
        return h.checkType = a, h.extendsType = this.tsInDisallowConditionalTypesContext(function() {
          return s.tsParseNonConditionalType();
        }), this.expect(o.question), h.trueType = this.tsInAllowConditionalTypesContext(function() {
          return s.tsParseType();
        }), this.expect(o.colon), h.falseType = this.tsInAllowConditionalTypesContext(function() {
          return s.tsParseType();
        }), this.finishNode(h, "TSConditionalType");
      }, d.tsIsUnambiguouslyIndexSignature = function() {
        return this.next(), !!q(this.type) && (this.next(), this.match(o.colon));
      }, d.tsInType = function(s) {
        var a = this.inType;
        this.inType = !0;
        try {
          return s();
        } finally {
          this.inType = a;
        }
      }, d.tsTryParseIndexSignature = function(s) {
        if (this.match(o.bracketL) && this.tsLookAhead(this.tsIsUnambiguouslyIndexSignature.bind(this))) {
          this.expect(o.bracketL);
          var a = this.parseIdent();
          a.typeAnnotation = this.tsParseTypeAnnotation(), this.resetEndLocation(a), this.expect(o.bracketR), s.parameters = [a];
          var h = this.tsTryParseTypeAnnotation();
          return h && (s.typeAnnotation = h), this.tsParseTypeMemberSemicolon(), this.finishNode(s, "TSIndexSignature");
        }
      }, d.tsParseNoneModifiers = function(s) {
        this.tsParseModifiers({ modified: s, allowedModifiers: [], disallowedModifiers: ["in", "out"], errorTemplate: I.InvalidModifierOnTypeParameterPositions });
      }, d.tsParseTypeParameter = function(s) {
        s === void 0 && (s = this.tsParseNoneModifiers.bind(this));
        var a = this.startNode();
        return s(a), a.name = this.tsParseTypeParameterName(), a.constraint = this.tsEatThenParseType(o._extends), a.default = this.tsEatThenParseType(o.eq), this.finishNode(a, "TSTypeParameter");
      }, d.tsParseTypeParameters = function(s) {
        var a = this.startNode();
        this.tsMatchLeftRelational() || this.matchJsx("jsxTagStart") ? this.next() : this.unexpected();
        var h = { value: -1 };
        return a.params = this.tsParseBracketedList("TypeParametersOrArguments", this.tsParseTypeParameter.bind(this, s), !1, !0, h), a.params.length === 0 && this.raise(this.start, I.EmptyTypeParameters), h.value !== -1 && this.addExtra(a, "trailingComma", h.value), this.finishNode(a, "TSTypeParameterDeclaration");
      }, d.tsTryParseTypeParameters = function(s) {
        if (this.tsMatchLeftRelational()) return this.tsParseTypeParameters(s);
      }, d.tsTryParse = function(s) {
        var a = this.getCurLookaheadState(), h = s();
        return h !== void 0 && h !== !1 ? h : void this.setLookaheadState(a);
      }, d.tsTokenCanFollowModifier = function() {
        return (this.match(o.bracketL) || this.match(o.braceL) || this.match(o.star) || this.match(o.ellipsis) || this.match(o.privateId) || this.isLiteralPropertyName()) && !this.hasPrecedingLineBreak();
      }, d.tsNextTokenCanFollowModifier = function() {
        return this.next(!0), this.tsTokenCanFollowModifier();
      }, d.tsParseModifier = function(s, a) {
        if (q(this.type) || this.type === o._in) {
          var h = this.value;
          if (s.indexOf(h) !== -1 && !this.containsEsc) {
            if (a && this.tsIsStartOfStaticBlocks()) return;
            if (this.tsTryParse(this.tsNextTokenCanFollowModifier.bind(this))) return h;
          }
        }
      }, d.tsParseModifiersByMap = function(s) {
        for (var a = s.modified, h = s.map, p = 0, m = Object.keys(h); p < m.length; p++) {
          var v = m[p];
          a[v] = h[v];
        }
      }, d.tsParseModifiers = function(s) {
        for (var a = this, h = s.modified, p = s.allowedModifiers, m = s.disallowedModifiers, v = s.stopOnStartOfClassStaticBlock, x = s.errorTemplate, g = x === void 0 ? I.InvalidModifierOnTypeMember : x, k = {}, S = function(K, G, X, re) {
          G === X && h[re] && a.raise(K.column, I.InvalidModifiersOrder({ orderedModifiers: [X, re] }));
        }, N = function(K, G, X, re) {
          (h[X] && G === re || h[re] && G === X) && a.raise(K.column, I.IncompatibleModifiers({ modifiers: [X, re] }));
        }; ; ) {
          var M = this.startLoc, A = this.tsParseModifier(p.concat(m ?? []), v);
          if (!A) break;
          Rr(A) ? h.accessibility ? this.raise(this.start, I.DuplicateAccessibilityModifier()) : (S(M, A, A, "override"), S(M, A, A, "static"), S(M, A, A, "readonly"), S(M, A, A, "accessor"), k.accessibility = A, h.accessibility = A) : pl(A) ? h[A] ? this.raise(this.start, I.DuplicateModifier({ modifier: A })) : (S(M, A, "in", "out"), k[A] = A, h[A] = !0) : ll(A) ? h[A] ? this.raise(this.start, I.DuplicateModifier({ modifier: A })) : (N(M, A, "accessor", "readonly"), N(M, A, "accessor", "static"), N(M, A, "accessor", "override"), k[A] = A, h[A] = !0) : Object.hasOwnProperty.call(h, A) ? this.raise(this.start, I.DuplicateModifier({ modifier: A })) : (S(M, A, "static", "readonly"), S(M, A, "static", "override"), S(M, A, "override", "readonly"), S(M, A, "abstract", "override"), N(M, A, "declare", "override"), N(M, A, "static", "abstract"), k[A] = A, h[A] = !0), m != null && m.includes(A) && this.raise(this.start, g);
        }
        return k;
      }, d.tsParseInOutModifiers = function(s) {
        this.tsParseModifiers({ modified: s, allowedModifiers: ["in", "out"], disallowedModifiers: ["public", "private", "protected", "readonly", "declare", "abstract", "override"], errorTemplate: I.InvalidModifierOnTypeParameter });
      }, d.tsParseTypeArguments = function() {
        var s = this, a = this.startNode();
        return a.params = this.tsInType(function() {
          return s.tsInNoContext(function() {
            return s.expect(o.relational), s.tsParseDelimitedList("TypeParametersOrArguments", s.tsParseType.bind(s));
          });
        }), a.params.length === 0 && this.raise(this.start, I.EmptyTypeArguments), this.exprAllowed = !1, this.expect(o.relational), this.finishNode(a, "TSTypeParameterInstantiation");
      }, d.tsParseHeritageClause = function(s) {
        var a = this, h = this.start, p = this.tsParseDelimitedList("HeritageClauseElement", function() {
          var m = a.startNode();
          return m.expression = a.tsParseEntityName(), a.tsMatchLeftRelational() && (m.typeParameters = a.tsParseTypeArguments()), a.finishNode(m, "TSExpressionWithTypeArguments");
        });
        return p.length || this.raise(h, I.EmptyHeritageClauseType({ token: s })), p;
      }, d.tsParseTypeMemberSemicolon = function() {
        this.eat(o.comma) || this.isLineTerminator() || this.expect(o.semi);
      }, d.tsTryParseAndCatch = function(s) {
        var a = this.tryParse(function(h) {
          return s() || h();
        });
        if (!a.aborted && a.node) return a.error && this.setLookaheadState(a.failState), a.node;
      }, d.tsParseSignatureMember = function(s, a) {
        return this.tsFillSignature(o.colon, a), this.tsParseTypeMemberSemicolon(), this.finishNode(a, s);
      }, d.tsParsePropertyOrMethodSignature = function(s, a) {
        this.eat(o.question) && (s.optional = !0);
        var h = s;
        if (this.match(o.parenL) || this.tsMatchLeftRelational()) {
          a && this.raise(s.start, I.ReadonlyForMethodSignature);
          var p = h;
          p.kind && this.tsMatchLeftRelational() && this.raise(this.start, I.AccesorCannotHaveTypeParameters), this.tsFillSignature(o.colon, p), this.tsParseTypeMemberSemicolon();
          var m = "parameters", v = "typeAnnotation";
          if (p.kind === "get") p[m].length > 0 && (this.raise(this.start, "A 'get' accesor must not have any formal parameters."), this.isThisParam(p[m][0]) && this.raise(this.start, I.AccesorCannotDeclareThisParameter));
          else if (p.kind === "set") {
            if (p[m].length !== 1) this.raise(this.start, "A 'get' accesor must not have any formal parameters.");
            else {
              var x = p[m][0];
              this.isThisParam(x) && this.raise(this.start, I.AccesorCannotDeclareThisParameter), x.type === "Identifier" && x.optional && this.raise(this.start, I.SetAccesorCannotHaveOptionalParameter), x.type === "RestElement" && this.raise(this.start, I.SetAccesorCannotHaveRestParameter);
            }
            p[v] && this.raise(p[v].start, I.SetAccesorCannotHaveReturnType);
          } else p.kind = "method";
          return this.finishNode(p, "TSMethodSignature");
        }
        var g = h;
        a && (g.readonly = !0);
        var k = this.tsTryParseTypeAnnotation();
        return k && (g.typeAnnotation = k), this.tsParseTypeMemberSemicolon(), this.finishNode(g, "TSPropertySignature");
      }, d.tsParseTypeMember = function() {
        var s = this.startNode();
        if (this.match(o.parenL) || this.tsMatchLeftRelational()) return this.tsParseSignatureMember("TSCallSignatureDeclaration", s);
        if (this.match(o._new)) {
          var a = this.startNode();
          return this.next(), this.match(o.parenL) || this.tsMatchLeftRelational() ? this.tsParseSignatureMember("TSConstructSignatureDeclaration", s) : (s.key = this.createIdentifier(a, "new"), this.tsParsePropertyOrMethodSignature(s, !1));
        }
        return this.tsParseModifiers({ modified: s, allowedModifiers: ["readonly"], disallowedModifiers: ["declare", "abstract", "private", "protected", "public", "static", "override"] }), this.tsTryParseIndexSignature(s) || (this.parsePropertyName(s), s.computed || s.key.type !== "Identifier" || s.key.name !== "get" && s.key.name !== "set" || !this.tsTokenCanFollowModifier() || (s.kind = s.key.name, this.parsePropertyName(s)), this.tsParsePropertyOrMethodSignature(s, !!s.readonly));
      }, d.tsParseList = function(s, a) {
        for (var h = []; !this.tsIsListTerminator(s); ) h.push(a());
        return h;
      }, d.tsParseObjectTypeMembers = function() {
        this.expect(o.braceL);
        var s = this.tsParseList("TypeMembers", this.tsParseTypeMember.bind(this));
        return this.expect(o.braceR), s;
      }, d.tsParseInterfaceDeclaration = function(s, a) {
        if (a === void 0 && (a = {}), this.hasFollowingLineBreak()) return null;
        this.expectContextual("interface"), a.declare && (s.declare = !0), q(this.type) ? (s.id = this.parseIdent(), this.checkLValSimple(s.id, 7)) : (s.id = null, this.raise(this.start, I.MissingInterfaceName)), s.typeParameters = this.tsTryParseTypeParameters(this.tsParseInOutModifiers.bind(this)), this.eat(o._extends) && (s.extends = this.tsParseHeritageClause("extends"));
        var h = this.startNode();
        return h.body = this.tsInType(this.tsParseObjectTypeMembers.bind(this)), s.body = this.finishNode(h, "TSInterfaceBody"), this.finishNode(s, "TSInterfaceDeclaration");
      }, d.tsParseAbstractDeclaration = function(s) {
        if (this.match(o._class)) return s.abstract = !0, this.parseClass(s, !0);
        if (this.ts_isContextual(O.interface)) {
          if (!this.hasFollowingLineBreak()) return s.abstract = !0, this.tsParseInterfaceDeclaration(s);
        } else this.unexpected(s.start);
      }, d.tsIsDeclarationStart = function() {
        return Je(this.type);
      }, d.tsParseExpressionStatement = function(s, a) {
        switch (a.name) {
          case "declare":
            var h = this.tsTryParseDeclare(s);
            if (h) return h.declare = !0, h;
            break;
          case "global":
            if (this.match(o.braceL)) {
              T.prototype.enterScope.call(this, wt);
              var p = s;
              return p.global = !0, p.id = a, p.body = this.tsParseModuleBlock(), T.prototype.exitScope.call(this), this.finishNode(p, "TSModuleDeclaration");
            }
            break;
          default:
            return this.tsParseDeclaration(s, a.name, !1);
        }
      }, d.tsParseModuleReference = function() {
        return this.tsIsExternalModuleReference() ? this.tsParseExternalModuleReference() : this.tsParseEntityName(!1);
      }, d.tsIsExportDefaultSpecifier = function() {
        var s = this.type, a = this.isAsyncFunction(), h = this.isLet();
        if (q(s)) {
          if (a && !this.containsEsc || h) return !1;
          if ((s === O.type || s === O.interface) && !this.containsEsc) {
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
      }, d.tsInAmbientContext = function(s) {
        var a = this.isAmbientContext;
        this.isAmbientContext = !0;
        try {
          return s();
        } finally {
          this.isAmbientContext = a;
        }
      }, d.tsCheckLineTerminator = function(s) {
        return s ? !this.hasFollowingLineBreak() && (this.next(), !0) : !this.isLineTerminator();
      }, d.tsParseModuleOrNamespaceDeclaration = function(s, a) {
        if (a === void 0 && (a = !1), s.id = this.parseIdent(), a || this.checkLValSimple(s.id, 8), this.eat(o.dot)) {
          var h = this.startNode();
          this.tsParseModuleOrNamespaceDeclaration(h, !0), s.body = h;
        } else T.prototype.enterScope.call(this, wt), s.body = this.tsParseModuleBlock(), T.prototype.exitScope.call(this);
        return this.finishNode(s, "TSModuleDeclaration");
      }, d.checkLValSimple = function(s, a, h) {
        return a === void 0 && (a = 0), T.prototype.checkLValSimple.call(this, s, a, h);
      }, d.tsParseTypeAliasDeclaration = function(s) {
        var a = this;
        return s.id = this.parseIdent(), this.checkLValSimple(s.id, 6), s.typeAnnotation = this.tsInType(function() {
          if (s.typeParameters = a.tsTryParseTypeParameters(a.tsParseInOutModifiers.bind(a)), a.expect(o.eq), a.ts_isContextual(O.interface) && a.lookahead().type !== o.dot) {
            var h = a.startNode();
            return a.next(), a.finishNode(h, "TSIntrinsicKeyword");
          }
          return a.tsParseType();
        }), this.semicolon(), this.finishNode(s, "TSTypeAliasDeclaration");
      }, d.tsParseDeclaration = function(s, a, h) {
        switch (a) {
          case "abstract":
            if (this.tsCheckLineTerminator(h) && (this.match(o._class) || q(this.type))) return this.tsParseAbstractDeclaration(s);
            break;
          case "module":
            if (this.tsCheckLineTerminator(h)) {
              if (this.match(o.string)) return this.tsParseAmbientExternalModuleDeclaration(s);
              if (q(this.type)) return this.tsParseModuleOrNamespaceDeclaration(s);
            }
            break;
          case "namespace":
            if (this.tsCheckLineTerminator(h) && q(this.type)) return this.tsParseModuleOrNamespaceDeclaration(s);
            break;
          case "type":
            if (this.tsCheckLineTerminator(h) && q(this.type)) return this.tsParseTypeAliasDeclaration(s);
        }
      }, d.tsTryParseExportDeclaration = function() {
        return this.tsParseDeclaration(this.startNode(), this.value, !0);
      }, d.tsParseImportEqualsDeclaration = function(s, a) {
        s.isExport = a || !1, s.id = this.parseIdent(), this.checkLValSimple(s.id, 2), T.prototype.expect.call(this, o.eq);
        var h = this.tsParseModuleReference();
        return s.importKind === "type" && h.type !== "TSExternalModuleReference" && this.raise(h.start, I.ImportAliasHasImportType), s.moduleReference = h, T.prototype.semicolon.call(this), this.finishNode(s, "TSImportEqualsDeclaration");
      }, d.isExportDefaultSpecifier = function() {
        if (this.tsIsDeclarationStart()) return !1;
        var s = this.type;
        if (q(s)) {
          if (this.isContextual("async") || this.isContextual("let")) return !1;
          if ((s === O.type || s === O.interface) && !this.containsEsc) {
            var a = this.lookahead();
            if (q(a.type) && !this.isContextualWithState("from", a) || a.type === o.braceL) return !1;
          }
        } else if (!this.match(o._default)) return !1;
        var h = this.nextTokenStart(), p = this.isUnparsedContextual(h, "from");
        if (this.input.charCodeAt(h) === 44 || q(this.type) && p) return !0;
        if (this.match(o._default) && p) {
          var m = this.input.charCodeAt(this.nextTokenStartSince(h + 4));
          return m === 34 || m === 39;
        }
        return !1;
      }, d.parseTemplate = function(s) {
        var a = (s === void 0 ? {} : s).isTagged, h = a !== void 0 && a, p = this.startNode();
        this.next(), p.expressions = [];
        var m = this.parseTemplateElement({ isTagged: h });
        for (p.quasis = [m]; !m.tail; ) this.type === o.eof && this.raise(this.pos, "Unterminated template literal"), this.expect(o.dollarBraceL), p.expressions.push(this.inType ? this.tsParseType() : this.parseExpression()), this.expect(o.braceR), p.quasis.push(m = this.parseTemplateElement({ isTagged: h }));
        return this.next(), this.finishNode(p, "TemplateLiteral");
      }, d.parseFunction = function(s, a, h, p, m) {
        this.initFunction(s), (this.options.ecmaVersion >= 9 || this.options.ecmaVersion >= 6 && !p) && (this.type === o.star && 2 & a && this.unexpected(), s.generator = this.eat(o.star)), this.options.ecmaVersion >= 8 && (s.async = !!p), 1 & a && (s.id = 4 & a && this.type !== o.name ? null : this.parseIdent());
        var v = this.yieldPos, x = this.awaitPos, g = this.awaitIdentPos, k = this.maybeInArrowParameters;
        this.maybeInArrowParameters = !1, this.yieldPos = 0, this.awaitPos = 0, this.awaitIdentPos = 0, this.enterScope(bi(s.async, s.generator)), 1 & a || (s.id = this.type === o.name ? this.parseIdent() : null), this.parseFunctionParams(s);
        var S = 1 & a;
        return this.parseFunctionBody(s, h, !1, m, { isFunctionDeclaration: S }), this.yieldPos = v, this.awaitPos = x, this.awaitIdentPos = g, 1 & a && s.id && !(2 & a) && this.checkLValSimple(s.id, s.body ? this.strict || s.generator || s.async ? this.treatFunctionsAsVar ? 1 : 2 : 3 : 0), this.maybeInArrowParameters = k, this.finishNode(s, S ? "FunctionDeclaration" : "FunctionExpression");
      }, d.parseFunctionBody = function(s, a, h, p, m) {
        a === void 0 && (a = !1), h === void 0 && (h = !1), p === void 0 && (p = !1), this.match(o.colon) && (s.returnType = this.tsParseTypeOrTypePredicateAnnotation(o.colon));
        var v = m != null && m.isFunctionDeclaration ? "TSDeclareFunction" : m != null && m.isClassMethod ? "TSDeclareMethod" : void 0;
        return v && !this.match(o.braceL) && this.isLineTerminator() ? this.finishNode(s, v) : v === "TSDeclareFunction" && this.isAmbientContext && (this.raise(s.start, I.DeclareFunctionHasImplementation), s.declare) ? (T.prototype.parseFunctionBody.call(this, s, a, h, !1), this.finishNode(s, v)) : (T.prototype.parseFunctionBody.call(this, s, a, h, p), s);
      }, d.parseNew = function() {
        var s;
        this.containsEsc && this.raiseRecoverable(this.start, "Escape sequence in keyword new");
        var a = this.startNode(), h = this.parseIdent(!0);
        if (this.options.ecmaVersion >= 6 && this.eat(o.dot)) {
          a.meta = h;
          var p = this.containsEsc;
          return a.property = this.parseIdent(!0), a.property.name !== "target" && this.raiseRecoverable(a.property.start, "The only valid meta property for new is 'new.target'"), p && this.raiseRecoverable(a.start, "'new.target' must not contain escaped characters"), this.allowNewDotTarget || this.raiseRecoverable(a.start, "'new.target' can only be used in functions and class static block"), this.finishNode(a, "MetaProperty");
        }
        var m = this.start, v = this.startLoc, x = this.type === o._import;
        a.callee = this.parseSubscripts(this.parseExprAtom(), m, v, !0, !1), x && a.callee.type === "ImportExpression" && this.raise(m, "Cannot use new with import()");
        var g = a.callee;
        return g.type !== "TSInstantiationExpression" || (s = g.extra) != null && s.parenthesized || (a.typeParameters = g.typeParameters, a.callee = g.expression), a.arguments = this.eat(o.parenL) ? this.parseExprList(o.parenR, this.options.ecmaVersion >= 8, !1) : [], this.finishNode(a, "NewExpression");
      }, d.parseExprOp = function(s, a, h, p, m) {
        var v;
        if (o._in.binop > p && !this.hasPrecedingLineBreak() && (this.isContextual("as") && (v = "TSAsExpression"), u && this.isContextual("satisfies") && (v = "TSSatisfiesExpression"), v)) {
          var x = this.startNodeAt(a, h);
          x.expression = s;
          var g = this.tsTryNextParseConstantContext();
          return x.typeAnnotation = g || this.tsNextThenParseType(), this.finishNode(x, v), this.reScan_lt_gt(), this.parseExprOp(x, a, h, p, m);
        }
        return T.prototype.parseExprOp.call(this, s, a, h, p, m);
      }, d.parseImportSpecifiers = function() {
        var s = [], a = !0;
        if (y.tokenIsIdentifier(this.type) && (s.push(this.parseImportDefaultSpecifier()), !this.eat(o.comma))) return s;
        if (this.type === o.star) return s.push(this.parseImportNamespaceSpecifier()), s;
        for (this.expect(o.braceL); !this.eat(o.braceR); ) {
          if (a) a = !1;
          else if (this.expect(o.comma), this.afterTrailingComma(o.braceR)) break;
          s.push(this.parseImportSpecifier());
        }
        return s;
      }, d.parseImport = function(s) {
        var a = this.lookahead();
        if (s.importKind = "value", this.importOrExportOuterKind = "value", q(a.type) || this.match(o.star) || this.match(o.braceL)) {
          var h = this.lookahead(2);
          if (h.type !== o.comma && !this.isContextualWithState("from", h) && h.type !== o.eq && this.ts_eatContextualWithState("type", 1, a) && (this.importOrExportOuterKind = "type", s.importKind = "type", a = this.lookahead(), h = this.lookahead(2)), q(a.type) && h.type === o.eq) {
            this.next();
            var p = this.tsParseImportEqualsDeclaration(s);
            return this.importOrExportOuterKind = "value", p;
          }
        }
        return this.next(), this.type === o.string ? (s.specifiers = [], s.source = this.parseExprAtom()) : (s.specifiers = this.parseImportSpecifiers(), this.expectContextual("from"), s.source = this.type === o.string ? this.parseExprAtom() : this.unexpected()), this.parseMaybeImportAttributes(s), this.semicolon(), this.finishNode(s, "ImportDeclaration"), this.importOrExportOuterKind = "value", s.importKind === "type" && s.specifiers.length > 1 && s.specifiers[0].type === "ImportDefaultSpecifier" && this.raise(s.start, I.TypeImportCannotSpecifyDefaultAndNamed), s;
      }, d.parseExportDefaultDeclaration = function() {
        if (this.isAbstractClass()) {
          var s = this.startNode();
          return this.next(), s.abstract = !0, this.parseClass(s, !0);
        }
        if (this.match(O.interface)) {
          var a = this.tsParseInterfaceDeclaration(this.startNode());
          if (a) return a;
        }
        return T.prototype.parseExportDefaultDeclaration.call(this);
      }, d.parseExportAllDeclaration = function(s, a) {
        return this.options.ecmaVersion >= 11 && (this.eatContextual("as") ? (s.exported = this.parseModuleExportName(), this.checkExport(a, s.exported, this.lastTokStart)) : s.exported = null), this.expectContextual("from"), this.type !== o.string && this.unexpected(), s.source = this.parseExprAtom(), this.parseMaybeImportAttributes(s), this.semicolon(), this.finishNode(s, "ExportAllDeclaration");
      }, d.parseDynamicImport = function(s) {
        if (this.next(), s.source = this.parseMaybeAssign(), this.eat(o.comma)) {
          var a = this.parseExpression();
          s.arguments = [a];
        }
        if (!this.eat(o.parenR)) {
          var h = this.start;
          this.eat(o.comma) && this.eat(o.parenR) ? this.raiseRecoverable(h, "Trailing comma is not allowed in import()") : this.unexpected(h);
        }
        return this.finishNode(s, "ImportExpression");
      }, d.parseExport = function(s, a) {
        var h = this.lookahead();
        if (this.ts_eatWithState(o._import, 2, h)) {
          this.ts_isContextual(O.type) && this.lookaheadCharCode() !== 61 ? (s.importKind = "type", this.importOrExportOuterKind = "type", this.next()) : (s.importKind = "value", this.importOrExportOuterKind = "value");
          var p = this.tsParseImportEqualsDeclaration(s, !0);
          return this.importOrExportOuterKind = void 0, p;
        }
        if (this.ts_eatWithState(o.eq, 2, h)) {
          var m = s;
          return m.expression = this.parseExpression(), this.semicolon(), this.importOrExportOuterKind = void 0, this.finishNode(m, "TSExportAssignment");
        }
        if (this.ts_eatContextualWithState("as", 2, h)) {
          var v = s;
          return this.expectContextual("namespace"), v.id = this.parseIdent(), this.semicolon(), this.importOrExportOuterKind = void 0, this.finishNode(v, "TSNamespaceExportDeclaration");
        }
        if (this.ts_isContextualWithState(h, O.type) && this.lookahead(2).type === o.braceL ? (this.next(), this.importOrExportOuterKind = "type", s.exportKind = "type") : (this.importOrExportOuterKind = "value", s.exportKind = "value"), this.next(), this.eat(o.star)) return this.parseExportAllDeclaration(s, a);
        if (this.eat(o._default)) return this.checkExport(a, "default", this.lastTokStart), s.declaration = this.parseExportDefaultDeclaration(), this.finishNode(s, "ExportDefaultDeclaration");
        if (this.shouldParseExportStatement()) s.declaration = this.parseExportDeclaration(s), s.declaration.type === "VariableDeclaration" ? this.checkVariableExport(a, s.declaration.declarations) : this.checkExport(a, s.declaration.id, s.declaration.id.start), s.specifiers = [], s.source = null;
        else {
          if (s.declaration = null, s.specifiers = this.parseExportSpecifiers(a), this.eatContextual("from")) this.type !== o.string && this.unexpected(), s.source = this.parseExprAtom(), this.parseMaybeImportAttributes(s);
          else {
            for (var x, g = Ir(s.specifiers); !(x = g()).done; ) {
              var k = x.value;
              this.checkUnreserved(k.local), this.checkLocalExport(k.local), k.local.type === "Literal" && this.raise(k.local.start, "A string literal cannot be used as an exported binding without `from`.");
            }
            s.source = null;
          }
          this.semicolon();
        }
        return this.finishNode(s, "ExportNamedDeclaration");
      }, d.checkExport = function(s, a, h) {
        s && (typeof a != "string" && (a = a.type === "Identifier" ? a.name : a.value), s[a] = !0);
      }, d.parseMaybeDefault = function(s, a, h) {
        var p = T.prototype.parseMaybeDefault.call(this, s, a, h);
        return p.type === "AssignmentPattern" && p.typeAnnotation && p.right.start < p.typeAnnotation.start && this.raise(p.typeAnnotation.start, I.TypeAnnotationAfterAssign), p;
      }, d.typeCastToParameter = function(s) {
        return s.expression.typeAnnotation = s.typeAnnotation, this.resetEndLocation(s.expression, s.typeAnnotation.end), s.expression;
      }, d.toAssignableList = function(s, a) {
        for (var h = 0; h < s.length; h++) {
          var p = s[h];
          p?.type === "TSTypeCastExpression" && (s[h] = this.typeCastToParameter(p));
        }
        return T.prototype.toAssignableList.call(this, s, a);
      }, d.reportReservedArrowTypeParam = function(s) {
      }, d.parseExprAtom = function(s, a, h) {
        if (this.type === O.jsxText) return this.jsx_parseText();
        if (this.type === O.jsxTagStart) return this.jsx_parseElement();
        if (this.type === O.at) return this.parseDecorators(), this.parseExprAtom();
        if (q(this.type)) {
          var p = this.potentialArrowAt === this.start, m = this.start, v = this.startLoc, x = this.containsEsc, g = this.parseIdent(!1);
          if (this.options.ecmaVersion >= 8 && !x && g.name === "async" && !this.canInsertSemicolon() && this.eat(o._function)) return this.overrideContext(U.f_expr), this.parseFunction(this.startNodeAt(m, v), 0, !1, !0, a);
          if (p && !this.canInsertSemicolon()) {
            if (this.eat(o.arrow)) return this.parseArrowExpression(this.startNodeAt(m, v), [g], !1, a);
            if (this.options.ecmaVersion >= 8 && g.name === "async" && this.type === o.name && !x && (!this.potentialArrowInForAwait || this.value !== "of" || this.containsEsc)) return g = this.parseIdent(!1), !this.canInsertSemicolon() && this.eat(o.arrow) || this.unexpected(), this.parseArrowExpression(this.startNodeAt(m, v), [g], !0, a);
          }
          return g;
        }
        return T.prototype.parseExprAtom.call(this, s, a, h);
      }, d.parseExprAtomDefault = function() {
        if (q(this.type)) {
          var s = this.potentialArrowAt === this.start, a = this.containsEsc, h = this.parseIdent();
          if (!a && h.name === "async" && !this.canInsertSemicolon()) {
            var p = this.type;
            if (p === o._function) return this.next(), this.parseFunction(this.startNodeAtNode(h), void 0, !0, !0);
            if (q(p)) {
              if (this.lookaheadCharCode() === 61) {
                var m = this.parseIdent(!1);
                return !this.canInsertSemicolon() && this.eat(o.arrow) || this.unexpected(), this.parseArrowExpression(this.startNodeAtNode(h), [m], !0);
              }
              return h;
            }
          }
          return s && this.match(o.arrow) && !this.canInsertSemicolon() ? (this.next(), this.parseArrowExpression(this.startNodeAtNode(h), [h], !1)) : h;
        }
        this.unexpected();
      }, d.parseIdentNode = function() {
        var s = this.startNode();
        return Vt(this.type) ? (s.name = this.value, s) : T.prototype.parseIdentNode.call(this);
      }, d.parseVarStatement = function(s, a, h) {
        h === void 0 && (h = !1);
        var p = this.isAmbientContext;
        this.next(), T.prototype.parseVar.call(this, s, !1, a, h || p), this.semicolon();
        var m = this.finishNode(s, "VariableDeclaration");
        if (!p) return m;
        for (var v, x = Ir(m.declarations); !(v = x()).done; ) {
          var g = v.value, k = g.init;
          k && (a !== "const" || g.id.typeAnnotation ? this.raise(k.start, I.InitializerNotAllowedInAmbientContext) : k.type !== "StringLiteral" && k.type !== "BooleanLiteral" && k.type !== "NumericLiteral" && k.type !== "BigIntLiteral" && (k.type !== "TemplateLiteral" || k.expressions.length > 0) && !fl(k) && this.raise(k.start, I.ConstInitiailizerMustBeStringOrNumericLiteralOrLiteralEnumReference));
        }
        return m;
      }, d.parseStatement = function(s, a, h) {
        if (this.match(O.at) && this.parseDecorators(!0), this.match(o._const) && this.isLookaheadContextual("enum")) {
          var p = this.startNode();
          return this.expect(o._const), this.tsParseEnumDeclaration(p, { const: !0 });
        }
        if (this.ts_isContextual(O.enum)) return this.tsParseEnumDeclaration(this.startNode());
        if (this.ts_isContextual(O.interface)) {
          var m = this.tsParseInterfaceDeclaration(this.startNode());
          if (m) return m;
        }
        return T.prototype.parseStatement.call(this, s, a, h);
      }, d.parseAccessModifier = function() {
        return this.tsParseModifier(["public", "protected", "private"]);
      }, d.parsePostMemberNameModifiers = function(s) {
        this.eat(o.question) && (s.optional = !0), s.readonly && this.match(o.parenL) && this.raise(s.start, I.ClassMethodHasReadonly), s.declare && this.match(o.parenL) && this.raise(s.start, I.ClassMethodHasDeclare);
      }, d.parseExpressionStatement = function(s, a) {
        return (a.type === "Identifier" ? this.tsParseExpressionStatement(s, a) : void 0) || T.prototype.parseExpressionStatement.call(this, s, a);
      }, d.shouldParseExportStatement = function() {
        return !!this.tsIsDeclarationStart() || !!this.match(O.at) || T.prototype.shouldParseExportStatement.call(this);
      }, d.parseConditional = function(s, a, h, p, m) {
        if (this.eat(o.question)) {
          var v = this.startNodeAt(a, h);
          return v.test = s, v.consequent = this.parseMaybeAssign(), this.expect(o.colon), v.alternate = this.parseMaybeAssign(p), this.finishNode(v, "ConditionalExpression");
        }
        return s;
      }, d.parseMaybeConditional = function(s, a) {
        var h = this, p = this.start, m = this.startLoc, v = this.parseExprOps(s, a);
        if (this.checkExpressionErrors(a)) return v;
        if (!this.maybeInArrowParameters || !this.match(o.question)) return this.parseConditional(v, p, m, s, a);
        var x = this.tryParse(function() {
          return h.parseConditional(v, p, m, s, a);
        });
        return x.node ? (x.error && this.setLookaheadState(x.failState), x.node) : (x.error && this.setOptionalParametersError(a, x.error), v);
      }, d.parseParenItem = function(s) {
        var a = this.start, h = this.startLoc;
        if (s = T.prototype.parseParenItem.call(this, s), this.eat(o.question) && (s.optional = !0, this.resetEndLocation(s)), this.match(o.colon)) {
          var p = this.startNodeAt(a, h);
          return p.expression = s, p.typeAnnotation = this.tsParseTypeAnnotation(), this.finishNode(p, "TSTypeCastExpression");
        }
        return s;
      }, d.parseExportDeclaration = function(s) {
        var a = this;
        if (!this.isAmbientContext && this.ts_isContextual(O.declare)) return this.tsInAmbientContext(function() {
          return a.parseExportDeclaration(s);
        });
        var h = this.start, p = this.startLoc, m = this.eatContextual("declare");
        !m || !this.ts_isContextual(O.declare) && this.shouldParseExportStatement() || this.raise(this.start, I.ExpectedAmbientAfterExportDeclare);
        var v = q(this.type) && this.tsTryParseExportDeclaration() || this.parseStatement(null);
        return v ? ((v.type === "TSInterfaceDeclaration" || v.type === "TSTypeAliasDeclaration" || m) && (s.exportKind = "type"), m && (this.resetStartLocation(v, h, p), v.declare = !0), v) : null;
      }, d.parseClassId = function(s, a) {
        if (a || !this.isContextual("implements")) {
          T.prototype.parseClassId.call(this, s, a);
          var h = this.tsTryParseTypeParameters(this.tsParseInOutModifiers.bind(this));
          h && (s.typeParameters = h);
        }
      }, d.parseClassPropertyAnnotation = function(s) {
        s.optional || (this.value === "!" && this.eat(o.prefix) ? s.definite = !0 : this.eat(o.question) && (s.optional = !0));
        var a = this.tsTryParseTypeAnnotation();
        a && (s.typeAnnotation = a);
      }, d.parseClassField = function(s) {
        if (s.key.type === "PrivateIdentifier") s.abstract && this.raise(s.start, I.PrivateElementHasAbstract), s.accessibility && this.raise(s.start, I.PrivateElementHasAccessibility({ modifier: s.accessibility })), this.parseClassPropertyAnnotation(s);
        else if (this.parseClassPropertyAnnotation(s), this.isAmbientContext && (!s.readonly || s.typeAnnotation) && this.match(o.eq) && this.raise(this.start, I.DeclareClassFieldHasInitializer), s.abstract && this.match(o.eq)) {
          var a = s.key;
          this.raise(this.start, I.AbstractPropertyHasInitializer({ propertyName: a.type !== "Identifier" || s.computed ? "[" + this.input.slice(a.start, a.end) + "]" : a.name }));
        }
        return T.prototype.parseClassField.call(this, s);
      }, d.parseClassMethod = function(s, a, h, p) {
        var m = s.kind === "constructor", v = s.key.type === "PrivateIdentifier", x = this.tsTryParseTypeParameters();
        v ? (x && (s.typeParameters = x), s.accessibility && this.raise(s.start, I.PrivateMethodsHasAccessibility({ modifier: s.accessibility }))) : x && m && this.raise(x.start, I.ConstructorHasTypeParameters);
        var g = s.declare, k = s.kind;
        !(g !== void 0 && g) || k !== "get" && k !== "set" || this.raise(s.start, I.DeclareAccessor({ kind: k })), x && (s.typeParameters = x);
        var S = s.key;
        s.kind === "constructor" ? (a && this.raise(S.start, "Constructor can't be a generator"), h && this.raise(S.start, "Constructor can't be an async method")) : s.static && Lr(s, "prototype") && this.raise(S.start, "Classes may not have a static property named prototype");
        var N = s.value = this.parseMethod(a, h, p, !0, s);
        return s.kind === "get" && N.params.length !== 0 && this.raiseRecoverable(N.start, "getter should have no params"), s.kind === "set" && N.params.length !== 1 && this.raiseRecoverable(N.start, "setter should have exactly one param"), s.kind === "set" && N.params[0].type === "RestElement" && this.raiseRecoverable(N.params[0].start, "Setter cannot use rest params"), this.finishNode(s, "MethodDefinition");
      }, d.isClassMethod = function() {
        return this.match(o.relational);
      }, d.parseClassElement = function(s) {
        var a = this;
        if (this.eat(o.semi)) return null;
        var h, p = this.options.ecmaVersion, m = this.startNode(), v = "", x = !1, g = !1, k = "method", S = ["declare", "private", "public", "protected", "accessor", "override", "abstract", "readonly", "static"], N = this.tsParseModifiers({ modified: m, allowedModifiers: S, disallowedModifiers: ["in", "out"], stopOnStartOfClassStaticBlock: !0, errorTemplate: I.InvalidModifierOnTypeParameterPositions });
        h = !!N.static;
        var M = function() {
          if (!a.tsIsStartOfStaticBlocks()) {
            var A = a.tsTryParseIndexSignature(m);
            if (A) return m.abstract && a.raise(m.start, I.IndexSignatureHasAbstract), m.accessibility && a.raise(m.start, I.IndexSignatureHasAccessibility({ modifier: m.accessibility })), m.declare && a.raise(m.start, I.IndexSignatureHasDeclare), m.override && a.raise(m.start, I.IndexSignatureHasOverride), A;
            if (!a.inAbstractClass && m.abstract && a.raise(m.start, I.NonAbstractClassHasAbstractMethod), m.override && s && a.raise(m.start, I.OverrideNotInSubClass), m.static = h, h && (a.isClassElementNameStart() || a.type === o.star || (v = "static")), !v && p >= 8 && a.eatContextual("async") && (!a.isClassElementNameStart() && a.type !== o.star || a.canInsertSemicolon() ? v = "async" : g = !0), !v && (p >= 9 || !g) && a.eat(o.star) && (x = !0), !v && !g && !x) {
              var K = a.value;
              (a.eatContextual("get") || a.eatContextual("set")) && (a.isClassElementNameStart() ? k = K : v = K);
            }
            if (v ? (m.computed = !1, m.key = a.startNodeAt(a.lastTokStart, a.lastTokStartLoc), m.key.name = v, a.finishNode(m.key, "Identifier")) : a.parseClassElementName(m), a.parsePostMemberNameModifiers(m), a.isClassMethod() || p < 13 || a.type === o.parenL || k !== "method" || x || g) {
              var G = !m.static && Lr(m, "constructor"), X = G && s;
              G && k !== "method" && a.raise(m.key.start, "Constructor can't have get/set modifier"), m.kind = G ? "constructor" : k, a.parseClassMethod(m, x, g, X);
            } else a.parseClassField(m);
            return m;
          }
          if (a.next(), a.next(), a.tsHasSomeModifiers(m, S) && a.raise(a.start, I.StaticBlockCannotHaveModifier), p >= 13) return T.prototype.parseClassStaticBlock.call(a, m), m;
        };
        return m.declare ? this.tsInAmbientContext(M) : M(), m;
      }, d.isClassElementNameStart = function() {
        return !!this.tsIsIdentifier() || T.prototype.isClassElementNameStart.call(this);
      }, d.parseClassSuper = function(s) {
        T.prototype.parseClassSuper.call(this, s), s.superClass && (this.tsMatchLeftRelational() || this.match(o.bitShift)) && (s.superTypeParameters = this.tsParseTypeArgumentsInExpression()), this.eatContextual("implements") && (s.implements = this.tsParseHeritageClause("implements"));
      }, d.parseFunctionParams = function(s) {
        var a = this.tsTryParseTypeParameters();
        a && (s.typeParameters = a), T.prototype.parseFunctionParams.call(this, s);
      }, d.parseVarId = function(s, a) {
        T.prototype.parseVarId.call(this, s, a), s.id.type === "Identifier" && !this.hasPrecedingLineBreak() && this.value === "!" && this.eat(o.prefix) && (s.definite = !0);
        var h = this.tsTryParseTypeAnnotation();
        h && (s.id.typeAnnotation = h, this.resetEndLocation(s.id));
      }, d.parseArrowExpression = function(s, a, h, p) {
        this.match(o.colon) && (s.returnType = this.tsParseTypeAnnotation());
        var m = this.yieldPos, v = this.awaitPos, x = this.awaitIdentPos;
        this.enterScope(16 | bi(h, !1)), this.initFunction(s);
        var g = this.maybeInArrowParameters;
        return this.options.ecmaVersion >= 8 && (s.async = !!h), this.yieldPos = 0, this.awaitPos = 0, this.awaitIdentPos = 0, this.maybeInArrowParameters = !0, s.params = this.toAssignableList(a, !0), this.maybeInArrowParameters = !1, this.parseFunctionBody(s, !0, !1, p), this.yieldPos = m, this.awaitPos = v, this.awaitIdentPos = x, this.maybeInArrowParameters = g, this.finishNode(s, "ArrowFunctionExpression");
      }, d.parseMaybeAssignOrigin = function(s, a, h) {
        if (this.isContextual("yield")) {
          if (this.inGenerator) return this.parseYield(s);
          this.exprAllowed = !1;
        }
        var p = !1, m = -1, v = -1, x = -1;
        a ? (m = a.parenthesizedAssign, v = a.trailingComma, x = a.doubleProto, a.parenthesizedAssign = a.trailingComma = -1) : (a = new St(), p = !0);
        var g = this.start, k = this.startLoc;
        (this.type === o.parenL || q(this.type)) && (this.potentialArrowAt = this.start, this.potentialArrowInForAwait = s === "await");
        var S = this.parseMaybeConditional(s, a);
        if (h && (S = h.call(this, S, g, k)), this.type.isAssign) {
          var N = this.startNodeAt(g, k);
          return N.operator = this.value, this.type === o.eq && (S = this.toAssignable(S, !0, a)), p || (a.parenthesizedAssign = a.trailingComma = a.doubleProto = -1), a.shorthandAssign >= S.start && (a.shorthandAssign = -1), this.type === o.eq ? this.checkLValPattern(S) : this.checkLValSimple(S), N.left = S, this.next(), N.right = this.parseMaybeAssign(s), x > -1 && (a.doubleProto = x), this.finishNode(N, "AssignmentExpression");
        }
        return p && this.checkExpressionErrors(a, !0), m > -1 && (a.parenthesizedAssign = m), v > -1 && (a.trailingComma = v), S;
      }, d.parseMaybeAssign = function(s, a, h) {
        var p, m, v, x, g, k, S, N, M, A, K, G = this;
        if (this.matchJsx("jsxTagStart") || this.tsMatchLeftRelational()) {
          if (N = this.cloneCurLookaheadState(), !(M = this.tryParse(function() {
            return G.parseMaybeAssignOrigin(s, a, h);
          }, N)).error) return M.node;
          var X = this.context, re = X[X.length - 1];
          re === y.tokContexts.tc_oTag && X[X.length - 2] === y.tokContexts.tc_expr ? (X.pop(), X.pop()) : re !== y.tokContexts.tc_oTag && re !== y.tokContexts.tc_expr || X.pop();
        }
        if (!((p = M) != null && p.error || this.tsMatchLeftRelational())) return this.parseMaybeAssignOrigin(s, a, h);
        N && !this.compareLookaheadState(N, this.getCurLookaheadState()) || (N = this.cloneCurLookaheadState());
        var ye = this.tryParse(function(Ze) {
          var kt, _t;
          K = G.tsParseTypeParameters();
          var Ue = G.parseMaybeAssignOrigin(s, a, h);
          return (Ue.type !== "ArrowFunctionExpression" || (kt = Ue.extra) != null && kt.parenthesized) && Ze(), ((_t = K) == null ? void 0 : _t.params.length) !== 0 && G.resetStartLocationFromNode(Ue, K), Ue.typeParameters = K, Ue;
        }, N);
        if (!ye.error && !ye.aborted) return K && this.reportReservedArrowTypeParam(K), ye.node;
        if (!M && (Or(!0), !(A = this.tryParse(function() {
          return G.parseMaybeAssignOrigin(s, a, h);
        }, N)).error)) return A.node;
        if ((m = M) != null && m.node) return this.setLookaheadState(M.failState), M.node;
        if (ye.node) return this.setLookaheadState(ye.failState), K && this.reportReservedArrowTypeParam(K), ye.node;
        if ((v = A) != null && v.node) return this.setLookaheadState(A.failState), A.node;
        throw (x = M) != null && x.thrown ? M.error : ye.thrown ? ye.error : (g = A) != null && g.thrown ? A.error : ((k = M) == null ? void 0 : k.error) || ye.error || ((S = A) == null ? void 0 : S.error);
      }, d.parseAssignableListItem = function(s) {
        for (var a = []; this.match(O.at); ) a.push(this.parseDecorator());
        var h, p = this.start, m = this.startLoc, v = !1, x = !1;
        if (s !== void 0) {
          var g = {};
          this.tsParseModifiers({ modified: g, allowedModifiers: ["public", "private", "protected", "override", "readonly"] }), h = g.accessibility, x = g.override, v = g.readonly, s === !1 && (h || v || x) && this.raise(m.start, I.UnexpectedParameterModifier);
        }
        var k = this.parseMaybeDefault(p, m);
        this.parseBindingListItem(k);
        var S = this.parseMaybeDefault(k.start, k.loc, k);
        if (a.length && (S.decorators = a), h || v || x) {
          var N = this.startNodeAt(p, m);
          return h && (N.accessibility = h), v && (N.readonly = v), x && (N.override = x), S.type !== "Identifier" && S.type !== "AssignmentPattern" && this.raise(N.start, I.UnsupportedParameterPropertyKind), N.parameter = S, this.finishNode(N, "TSParameterProperty");
        }
        return S;
      }, d.checkLValInnerPattern = function(s, a, h) {
        a === void 0 && (a = 0), s.type === "TSParameterProperty" ? this.checkLValInnerPattern(s.parameter, a, h) : T.prototype.checkLValInnerPattern.call(this, s, a, h);
      }, d.parseBindingListItem = function(s) {
        this.eat(o.question) && (s.type === "Identifier" || this.isAmbientContext || this.inType || this.raise(s.start, I.PatternIsOptional), s.optional = !0);
        var a = this.tsTryParseTypeAnnotation();
        return a && (s.typeAnnotation = a), this.resetEndLocation(s), s;
      }, d.isAssignable = function(s, a) {
        var h = this;
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
              return m.type !== "ObjectMethod" && (v === p || m.type !== "SpreadElement") && h.isAssignable(m);
            });
          case "Property":
          case "ObjectProperty":
            return this.isAssignable(s.value);
          case "SpreadElement":
            return this.isAssignable(s.argument);
          case "ArrayExpression":
            return s.elements.every(function(m) {
              return m === null || h.isAssignable(m);
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
      }, d.toAssignable = function(s, a, h) {
        switch (a === void 0 && (a = !1), h === void 0 && (h = new St()), s.type) {
          case "ParenthesizedExpression":
            return this.toAssignableParenthesizedExpression(s, a, h);
          case "TSAsExpression":
          case "TSSatisfiesExpression":
          case "TSNonNullExpression":
          case "TSTypeAssertion":
            return a || this.raise(s.start, I.UnexpectedTypeCastInParameter), this.toAssignable(s.expression, a, h);
          case "MemberExpression":
            break;
          case "AssignmentExpression":
            return a || s.left.type !== "TSTypeCastExpression" || (s.left = this.typeCastToParameter(s.left)), T.prototype.toAssignable.call(this, s, a, h);
          case "TSTypeCastExpression":
            return this.typeCastToParameter(s);
          default:
            return T.prototype.toAssignable.call(this, s, a, h);
        }
        return s;
      }, d.toAssignableParenthesizedExpression = function(s, a, h) {
        switch (s.expression.type) {
          case "TSAsExpression":
          case "TSSatisfiesExpression":
          case "TSNonNullExpression":
          case "TSTypeAssertion":
          case "ParenthesizedExpression":
            return this.toAssignable(s.expression, a, h);
          default:
            return T.prototype.toAssignable.call(this, s, a, h);
        }
      }, d.curPosition = function() {
        if (this.options.locations) {
          var s = T.prototype.curPosition.call(this);
          return Object.defineProperty(s, "offset", { get: function() {
            return function(a) {
              var h = new f.Position(this.line, this.column + a);
              return h.index = this.index + a, h;
            };
          } }), s.index = this.pos, s;
        }
      }, d.parseBindingAtom = function() {
        return this.type === o._this ? this.parseIdent(!0) : T.prototype.parseBindingAtom.call(this);
      }, d.shouldParseArrow = function(s) {
        var a, h = this;
        if (a = this.match(o.colon) ? s.every(function(m) {
          return h.isAssignable(m, !0);
        }) : !this.canInsertSemicolon()) {
          if (this.match(o.colon)) {
            var p = this.tryParse(function(m) {
              var v = h.tsParseTypeOrTypePredicateAnnotation(o.colon);
              return !h.canInsertSemicolon() && h.match(o.arrow) || m(), v;
            });
            if (p.aborted) return this.shouldParseArrowReturnType = void 0, !1;
            p.thrown || (p.error && this.setLookaheadState(p.failState), this.shouldParseArrowReturnType = p.node);
          }
          return !!this.match(o.arrow) || (this.shouldParseArrowReturnType = void 0, !1);
        }
        return this.shouldParseArrowReturnType = void 0, a;
      }, d.parseParenArrowList = function(s, a, h, p) {
        var m = this.startNodeAt(s, a);
        return m.returnType = this.shouldParseArrowReturnType, this.shouldParseArrowReturnType = void 0, this.parseArrowExpression(m, h, !1, p);
      }, d.parseParenAndDistinguishExpression = function(s, a) {
        var h, p = this.start, m = this.startLoc, v = this.options.ecmaVersion >= 8;
        if (this.options.ecmaVersion >= 6) {
          var x = this.maybeInArrowParameters;
          this.maybeInArrowParameters = !0, this.next();
          var g, k = this.start, S = this.startLoc, N = [], M = !0, A = !1, K = new St(), G = this.yieldPos, X = this.awaitPos;
          for (this.yieldPos = 0, this.awaitPos = 0; this.type !== o.parenR; ) {
            if (M ? M = !1 : this.expect(o.comma), v && this.afterTrailingComma(o.parenR, !0)) {
              A = !0;
              break;
            }
            if (this.type === o.ellipsis) {
              g = this.start, N.push(this.parseParenItem(this.parseRestBinding())), this.type === o.comma && this.raise(this.start, "Comma is not permitted after the rest element");
              break;
            }
            N.push(this.parseMaybeAssign(a, K, this.parseParenItem));
          }
          var re = this.lastTokEnd, ye = this.lastTokEndLoc;
          if (this.expect(o.parenR), this.maybeInArrowParameters = x, s && this.shouldParseArrow(N) && this.eat(o.arrow)) return this.checkPatternErrors(K, !1), this.checkYieldAwaitInDefaultParams(), this.yieldPos = G, this.awaitPos = X, this.parseParenArrowList(p, m, N, a);
          N.length && !A || this.unexpected(this.lastTokStart), g && this.unexpected(g), this.checkExpressionErrors(K, !0), this.yieldPos = G || this.yieldPos, this.awaitPos = X || this.awaitPos, N.length > 1 ? ((h = this.startNodeAt(k, S)).expressions = N, this.finishNodeAt(h, "SequenceExpression", re, ye)) : h = N[0];
        } else h = this.parseParenExpression();
        if (this.options.preserveParens) {
          var Ze = this.startNodeAt(p, m);
          return Ze.expression = h, this.finishNode(Ze, "ParenthesizedExpression");
        }
        return h;
      }, d.parseTaggedTemplateExpression = function(s, a, h, p) {
        var m = this.startNodeAt(a, h);
        return m.tag = s, m.quasi = this.parseTemplate({ isTagged: !0 }), p && this.raise(a, "Tagged Template Literals are not allowed in optionalChain."), this.finishNode(m, "TaggedTemplateExpression");
      }, d.shouldParseAsyncArrow = function() {
        var s = this;
        if (!this.match(o.colon)) return !this.canInsertSemicolon() && this.eat(o.arrow);
        var a = this.tryParse(function(h) {
          var p = s.tsParseTypeOrTypePredicateAnnotation(o.colon);
          return !s.canInsertSemicolon() && s.match(o.arrow) || h(), p;
        });
        return a.aborted ? (this.shouldParseAsyncArrowReturnType = void 0, !1) : a.thrown ? void 0 : (a.error && this.setLookaheadState(a.failState), this.shouldParseAsyncArrowReturnType = a.node, !this.canInsertSemicolon() && this.eat(o.arrow));
      }, d.parseSubscriptAsyncArrow = function(s, a, h, p) {
        var m = this.startNodeAt(s, a);
        return m.returnType = this.shouldParseAsyncArrowReturnType, this.shouldParseAsyncArrowReturnType = void 0, this.parseArrowExpression(m, h, !0, p);
      }, d.parseExprList = function(s, a, h, p) {
        for (var m = [], v = !0; !this.eat(s); ) {
          if (v) v = !1;
          else if (this.expect(o.comma), a && this.afterTrailingComma(s)) break;
          var x = void 0;
          h && this.type === o.comma ? x = null : this.type === o.ellipsis ? (x = this.parseSpread(p), p && this.type === o.comma && p.trailingComma < 0 && (p.trailingComma = this.start)) : x = this.parseMaybeAssign(!1, p, this.parseParenItem), m.push(x);
        }
        return m;
      }, d.parseSubscript = function(s, a, h, p, m, v, x) {
        var g = this, k = v;
        if (!this.hasPrecedingLineBreak() && this.value === "!" && this.match(o.prefix)) {
          this.exprAllowed = !1, this.next();
          var S = this.startNodeAt(a, h);
          return S.expression = s, s = this.finishNode(S, "TSNonNullExpression");
        }
        var N = !1;
        if (this.match(o.questionDot) && this.lookaheadCharCode() === 60) {
          if (p) return s;
          s.optional = !0, k = N = !0, this.next();
        }
        if (this.tsMatchLeftRelational() || this.match(o.bitShift)) {
          var M, A = this.tsTryParseAndCatch(function() {
            if (!p && g.atPossibleAsyncArrow(s)) {
              var Ki = g.tsTryParseGenericAsyncArrowFunction(a, h, x);
              if (Ki) return s = Ki;
            }
            var zt = g.tsParseTypeArgumentsInExpression();
            if (!zt) return s;
            if (N && !g.match(o.parenL)) return M = g.curPosition(), s;
            if (be(g.type) || g.type === o.backQuote) {
              var Xi = g.parseTaggedTemplateExpression(s, a, h, k);
              return Xi.typeParameters = zt, Xi;
            }
            if (!p && g.eat(o.parenL)) {
              var Ji = new St(), st = g.startNodeAt(a, h);
              return st.callee = s, st.arguments = g.parseExprList(o.parenR, g.options.ecmaVersion >= 8, !1, Ji), g.tsCheckForInvalidTypeCasts(st.arguments), st.typeParameters = zt, k && (st.optional = N), g.checkExpressionErrors(Ji, !0), s = g.finishNode(st, "CallExpression");
            }
            var li = g.type;
            if (!(g.tsMatchRightRelational() || li === o.bitShift || li !== o.parenL && (Yi = li, !!Yi.startsExpr) && !g.hasPrecedingLineBreak())) {
              var Yi, pi = g.startNodeAt(a, h);
              return pi.expression = s, pi.typeParameters = zt, g.finishNode(pi, "TSInstantiationExpression");
            }
          });
          if (M && this.unexpected(M), A) return A.type === "TSInstantiationExpression" && (this.match(o.dot) || this.match(o.questionDot) && this.lookaheadCharCode() !== 40) && this.raise(this.start, I.InvalidPropertyAccessAfterInstantiationExpression), s = A;
        }
        var K = this.options.ecmaVersion >= 11, G = K && this.eat(o.questionDot);
        p && G && this.raise(this.lastTokStart, "Optional chaining cannot appear in the callee of new expressions");
        var X = this.eat(o.bracketL);
        if (X || G && this.type !== o.parenL && this.type !== o.backQuote || this.eat(o.dot)) {
          var re = this.startNodeAt(a, h);
          re.object = s, X ? (re.property = this.parseExpression(), this.expect(o.bracketR)) : re.property = this.type === o.privateId && s.type !== "Super" ? this.parsePrivateIdent() : this.parseIdent(this.options.allowReserved !== "never"), re.computed = !!X, K && (re.optional = G), s = this.finishNode(re, "MemberExpression");
        } else if (!p && this.eat(o.parenL)) {
          var ye = this.maybeInArrowParameters;
          this.maybeInArrowParameters = !0;
          var Ze = new St(), kt = this.yieldPos, _t = this.awaitPos, Ue = this.awaitIdentPos;
          this.yieldPos = 0, this.awaitPos = 0, this.awaitIdentPos = 0;
          var Wi = this.parseExprList(o.parenR, this.options.ecmaVersion >= 8, !1, Ze);
          if (m && !G && this.shouldParseAsyncArrow()) this.checkPatternErrors(Ze, !1), this.checkYieldAwaitInDefaultParams(), this.awaitIdentPos > 0 && this.raise(this.awaitIdentPos, "Cannot use 'await' as identifier inside an async function"), this.yieldPos = kt, this.awaitPos = _t, this.awaitIdentPos = Ue, s = this.parseSubscriptAsyncArrow(a, h, Wi, x);
          else {
            this.checkExpressionErrors(Ze, !0), this.yieldPos = kt || this.yieldPos, this.awaitPos = _t || this.awaitPos, this.awaitIdentPos = Ue || this.awaitIdentPos;
            var jt = this.startNodeAt(a, h);
            jt.callee = s, jt.arguments = Wi, K && (jt.optional = G), s = this.finishNode(jt, "CallExpression");
          }
          this.maybeInArrowParameters = ye;
        } else if (this.type === o.backQuote) {
          (G || k) && this.raise(this.start, "Optional chaining cannot appear in the tag of tagged template expressions");
          var hi = this.startNodeAt(a, h);
          hi.tag = s, hi.quasi = this.parseTemplate({ isTagged: !0 }), s = this.finishNode(hi, "TaggedTemplateExpression");
        }
        return s;
      }, d.parseGetterSetter = function(s) {
        s.kind = s.key.name, this.parsePropertyName(s), s.value = this.parseMethod(!1);
        var a = s.kind === "get" ? 0 : 1, h = s.value.params[0], p = h && this.isThisParam(h);
        s.value.params.length !== (a = p ? a + 1 : a) ? this.raiseRecoverable(s.value.start, s.kind === "get" ? "getter should have no params" : "setter should have exactly one param") : s.kind === "set" && s.value.params[0].type === "RestElement" && this.raiseRecoverable(s.value.params[0].start, "Setter cannot use rest params");
      }, d.parseProperty = function(s, a) {
        if (!s) {
          var h = [];
          if (this.match(O.at)) for (; this.match(O.at); ) h.push(this.parseDecorator());
          var p = T.prototype.parseProperty.call(this, s, a);
          return p.type === "SpreadElement" && h.length && this.raise(p.start, "Decorators can't be used with SpreadElement"), h.length && (p.decorators = h, h = []), p;
        }
        return T.prototype.parseProperty.call(this, s, a);
      }, d.parseCatchClauseParam = function() {
        var s = this.parseBindingAtom(), a = s.type === "Identifier";
        this.enterScope(a ? 32 : 0), this.checkLValPattern(s, a ? 4 : 2);
        var h = this.tsTryParseTypeAnnotation();
        return h && (s.typeAnnotation = h, this.resetEndLocation(s)), this.expect(o.parenR), s;
      }, d.parseClass = function(s, a) {
        var h = this.inAbstractClass;
        this.inAbstractClass = !!s.abstract;
        try {
          this.next(), this.takeDecorators(s);
          var p = this.strict;
          this.strict = !0, this.parseClassId(s, a), this.parseClassSuper(s);
          var m = this.enterClassBody(), v = this.startNode(), x = !1;
          v.body = [];
          var g = [];
          for (this.expect(o.braceL); this.type !== o.braceR; ) if (this.match(O.at)) g.push(this.parseDecorator());
          else {
            var k = this.parseClassElement(s.superClass !== null);
            g.length && (k.decorators = g, this.resetStartLocationFromNode(k, g[0]), g = []), k && (v.body.push(k), k.type === "MethodDefinition" && k.kind === "constructor" && k.value.type === "FunctionExpression" ? (x && this.raiseRecoverable(k.start, "Duplicate constructor in the same class"), x = !0, k.decorators && k.decorators.length > 0 && this.raise(k.start, "Decorators can't be used with a constructor. Did you mean '@dec class { ... }'?")) : k.key && k.key.type === "PrivateIdentifier" && ol(m, k) && this.raiseRecoverable(k.key.start, "Identifier '#" + k.key.name + "' has already been declared"));
          }
          return this.strict = p, this.next(), g.length && this.raise(this.start, "Decorators must be attached to a class element."), s.body = this.finishNode(v, "ClassBody"), this.exitClassBody(), this.finishNode(s, a ? "ClassDeclaration" : "ClassExpression");
        } finally {
          this.inAbstractClass = h;
        }
      }, d.parseClassFunctionParams = function() {
        var s = this.tsTryParseTypeParameters(this.tsParseConstModifier), a = this.parseBindingList(o.parenR, !1, this.options.ecmaVersion >= 8, !0);
        return s && (a.typeParameters = s), a;
      }, d.parseMethod = function(s, a, h, p, m) {
        var v = this.startNode(), x = this.yieldPos, g = this.awaitPos, k = this.awaitIdentPos;
        if (this.initFunction(v), this.options.ecmaVersion >= 6 && (v.generator = s), this.options.ecmaVersion >= 8 && (v.async = !!a), this.yieldPos = 0, this.awaitPos = 0, this.awaitIdentPos = 0, this.enterScope(64 | bi(a, v.generator) | (h ? 128 : 0)), this.expect(o.parenL), v.params = this.parseClassFunctionParams(), this.checkYieldAwaitInDefaultParams(), this.parseFunctionBody(v, !1, !0, !1, { isClassMethod: p }), this.yieldPos = x, this.awaitPos = g, this.awaitIdentPos = k, m && m.abstract && v.body) {
          var S = m.key;
          this.raise(m.start, I.AbstractMethodHasImplementation({ methodName: S.type !== "Identifier" || m.computed ? "[" + this.input.slice(S.start, S.end) + "]" : S.name }));
        }
        return this.finishNode(v, "FunctionExpression");
      }, pe.parse = function(s, a) {
        if (a.locations === !1) throw new Error("You have to enable options.locations while using acorn-typescript");
        a.locations = !0;
        var h = new this(a, s);
        return r && (h.isAmbientContext = !0), h.parse();
      }, pe.parseExpressionAt = function(s, a, h) {
        if (h.locations === !1) throw new Error("You have to enable options.locations while using acorn-typescript");
        h.locations = !0;
        var p = new this(h, s, a);
        return r && (p.isAmbientContext = !0), p.nextToken(), p.parseExpression();
      }, d.parseImportSpecifier = function() {
        if (this.ts_isContextual(O.type)) {
          var s = this.startNode();
          return s.imported = this.parseModuleExportName(), this.parseTypeOnlyImportExportSpecifier(s, !0, this.importOrExportOuterKind === "type"), this.finishNode(s, "ImportSpecifier");
        }
        var a = T.prototype.parseImportSpecifier.call(this);
        return a.importKind = "value", a;
      }, d.parseExportSpecifier = function(s) {
        var a = this.ts_isContextual(O.type);
        if (!this.match(o.string) && a) {
          var h = this.startNode();
          return h.local = this.parseModuleExportName(), this.parseTypeOnlyImportExportSpecifier(h, !1, this.importOrExportOuterKind === "type"), this.finishNode(h, "ExportSpecifier"), this.checkExport(s, h.exported, h.exported.start), h;
        }
        var p = T.prototype.parseExportSpecifier.call(this, s);
        return p.exportKind = "value", p;
      }, d.parseTypeOnlyImportExportSpecifier = function(s, a, h) {
        var p, m = a ? "imported" : "local", v = a ? "local" : "exported", x = s[m], g = !1, k = !0, S = x.start;
        if (this.isContextual("as")) {
          var N = this.parseIdent();
          if (this.isContextual("as")) {
            var M = this.parseIdent();
            Vt(this.type) ? (g = !0, x = N, p = a ? this.parseIdent() : this.parseModuleExportName(), k = !1) : (p = M, k = !1);
          } else Vt(this.type) ? (k = !1, p = a ? this.parseIdent() : this.parseModuleExportName()) : (g = !0, x = N);
        } else Vt(this.type) && (g = !0, a ? (x = T.prototype.parseIdent.call(this, !0), this.isContextual("as") || this.checkUnreserved(x)) : x = this.parseModuleExportName());
        g && h && this.raise(S, a ? I.TypeModifierIsUsedInTypeImports : I.TypeModifierIsUsedInTypeExports), s[m] = x, s[v] = p, s[a ? "importKind" : "exportKind"] = g ? "type" : "value", k && this.eatContextual("as") && (s[v] = a ? this.parseIdent() : this.parseModuleExportName()), s[v] || (s[v] = this.copyNode(s[m])), a && this.checkLValSimple(s[v], 2);
      }, d.raiseCommonCheck = function(s, a, h) {
        return a === "Comma is not permitted after the rest element" ? this.isAmbientContext && this.match(o.comma) && this.lookaheadCharCode() === 41 ? void this.next() : T.prototype.raise.call(this, s, a) : h ? T.prototype.raiseRecoverable.call(this, s, a) : T.prototype.raise.call(this, s, a);
      }, d.raiseRecoverable = function(s, a) {
        return this.raiseCommonCheck(s, a, !0);
      }, d.raise = function(s, a) {
        return this.raiseCommonCheck(s, a, !0);
      }, d.updateContext = function(s) {
        var a = this.type;
        if (a == o.braceL) {
          var h = this.curContext();
          h == ne.tc_oTag ? this.context.push(U.b_expr) : h == ne.tc_expr ? this.context.push(U.b_tmpl) : T.prototype.updateContext.call(this, s), this.exprAllowed = !0;
        } else {
          if (a !== o.slash || s !== O.jsxTagStart) return T.prototype.updateContext.call(this, s);
          this.context.length -= 2, this.context.push(ne.tc_cTag), this.exprAllowed = !1;
        }
      }, d.jsx_parseOpeningElementAt = function(s, a) {
        var h = this, p = this.startNodeAt(s, a), m = this.jsx_parseElementName();
        if (m && (p.name = m), this.match(o.relational) || this.match(o.bitShift)) {
          var v = this.tsTryParseAndCatch(function() {
            return h.tsParseTypeArgumentsInExpression();
          });
          v && (p.typeParameters = v);
        }
        for (p.attributes = []; this.type !== o.slash && this.type !== O.jsxTagEnd; ) p.attributes.push(this.jsx_parseAttribute());
        return p.selfClosing = this.eat(o.slash), this.expect(O.jsxTagEnd), this.finishNode(p, m ? "JSXOpeningElement" : "JSXOpeningFragment");
      }, d.enterScope = function(s) {
        s === wt && this.importsStack.push([]), T.prototype.enterScope.call(this, s);
        var a = T.prototype.currentScope.call(this);
        a.types = [], a.enums = [], a.constEnums = [], a.classes = [], a.exportOnlyBindings = [];
      }, d.exitScope = function() {
        T.prototype.currentScope.call(this).flags === wt && this.importsStack.pop(), T.prototype.exitScope.call(this);
      }, d.hasImport = function(s, a) {
        var h = this.importsStack.length;
        if (this.importsStack[h - 1].indexOf(s) > -1) return !0;
        if (!a && h > 1) {
          for (var p = 0; p < h - 1; p++) if (this.importsStack[p].indexOf(s) > -1) return !0;
        }
        return !1;
      }, d.maybeExportDefined = function(s, a) {
        this.inModule && 1 & s.flags && this.undefinedExports.delete(a);
      }, d.isRedeclaredInScope = function(s, a, h) {
        return !!(0 & h) && (2 & h ? s.lexical.indexOf(a) > -1 || s.functions.indexOf(a) > -1 || s.var.indexOf(a) > -1 : 3 & h ? s.lexical.indexOf(a) > -1 || !T.prototype.treatFunctionsAsVarInScope.call(this, s) && s.var.indexOf(a) > -1 : s.lexical.indexOf(a) > -1 && !(32 & s.flags && s.lexical[0] === a) || !this.treatFunctionsAsVarInScope(s) && s.functions.indexOf(a) > -1);
      }, d.checkRedeclarationInScope = function(s, a, h, p) {
        this.isRedeclaredInScope(s, a, h) && this.raise(p, "Identifier '" + a + "' has already been declared.");
      }, d.declareName = function(s, a, h) {
        if (4096 & a) return this.hasImport(s, !0) && this.raise(h, "Identifier '" + s + "' has already been declared."), void this.importsStack[this.importsStack.length - 1].push(s);
        var p = this.currentScope();
        if (1024 & a) return this.maybeExportDefined(p, s), void p.exportOnlyBindings.push(s);
        T.prototype.declareName.call(this, s, a, h), 0 & a && (0 & a || (this.checkRedeclarationInScope(p, s, a, h), this.maybeExportDefined(p, s)), p.types.push(s)), 256 & a && p.enums.push(s), 512 & a && p.constEnums.push(s), 128 & a && p.classes.push(s);
      }, d.checkLocalExport = function(s) {
        var a = s.name;
        if (!this.hasImport(a)) {
          for (var h = this.scopeStack.length - 1; h >= 0; h--) {
            var p = this.scopeStack[h];
            if (p.types.indexOf(a) > -1 || p.exportOnlyBindings.indexOf(a) > -1) return;
          }
          T.prototype.checkLocalExport.call(this, s);
        }
      }, ue = pe, F = [{ key: "acornTypeScript", get: function() {
        return y;
      } }], (ie = [{ key: "acornTypeScript", get: function() {
        return y;
      } }]) && Ar(ue.prototype, ie), F && Ar(ue, F), Object.defineProperty(ue, "prototype", { writable: !1 }), pe;
    })(c);
    return Js;
  };
}
const ml = Qs(en);
async function yl(e) {
  let t;
  try {
    t = await ge.readdir(e, { withFileTypes: !0 });
  } catch (i) {
    if (i.code === "ENOENT") return;
    throw i;
  }
  await Promise.all(
    t.map(async (i) => {
      const r = Ht.join(e, i.name);
      try {
        await ge.rm(r, { recursive: !0, force: !0 });
      } catch (n) {
        if (n.code !== "ENOENT") throw n;
      }
    })
  );
}
function Hi(e) {
  const i = J.extend(dl()).parse(e, {
    ecmaVersion: "latest",
    sourceType: "module",
    locations: !0
  }), r = [];
  return Ai(i, (n) => {
    if (n.type !== "MethodDefinition") return;
    const u = n, c = u.key;
    if (c.type !== "Identifier") return;
    const f = c.name;
    f && f !== "constructor" && u.accessibility !== "private" && r.push(f);
  }), r;
}
async function Se(e, t, i = [], r) {
  const n = `${t} ${i.join(" ")}`;
  e !== void 0 && se(`${e} - exec(${n})`);
  const { stdout: u, stderr: c } = await ml(n);
  r === void 0 ? u.trim() && console.log(u.trim()) : await ge.writeFile(r, u.trim(), "utf8"), c.trim() && console.error(c.trim());
}
async function vl(e, t) {
  return ge.readdir(e, t);
}
async function Gi() {
  se("Load environment variables"), (await import("dotenv")).config();
}
function Me(e) {
  const t = "\x1B[36m", i = "\x1B[0m", r = "─".repeat(Math.max(e.length + 60, 60));
  console.info(`
${t}${r}`), console.info(`▶️  ${e}`), console.info(`${r}${i}`);
}
function Be(e) {
  console.info(`
✅ ${e}
`);
}
function se(e) {
  console.info(`
${e}
`);
}
async function de(e) {
  return JSON.parse(await ge.readFile(e, "utf8"));
}
async function Qe(e) {
  return await ge.readFile(e, "utf8");
}
async function xl(e) {
  try {
    await ge.unlink(e);
  } catch (t) {
    if (t.code !== "ENOENT") throw t;
  }
}
async function Ie(e, t, i = [], r = !1) {
  return se(`${e} - spawn(${t} ${i.join(" ")})`), new Promise((n, u) => {
    tn(t, i, { stdio: "inherit" }).on("close", (f) => {
      f === 0 || r ? n() : u(new Error(`${t} exited with code ${f}`));
    });
  });
}
function Gs(e, t, i, r) {
  const n = e.indexOf(i), u = e.indexOf(r);
  if (n === -1 || u === -1) throw new Error(`Markers ${i}-${r} not found in content.`);
  return `${e.slice(0, Math.max(0, n + i.length))}
${t}
${e.slice(Math.max(0, u))}`;
}
async function dt(e, t) {
  await ge.writeFile(e, JSON.stringify(t, void 0, 4), "utf8");
}
async function It(e, t) {
  await ge.writeFile(e, t, "utf8");
}
function Ai(e, t) {
  t(e);
  for (const [i, r] of Object.entries(e)) {
    if (["loc", "range", "start", "end", "comments"].includes(i)) continue;
    const n = r;
    if (Array.isArray(n))
      for (const u of n) {
        const c = u;
        c && typeof c.type == "string" && Ai(c, t);
      }
    else n && typeof n == "object" && typeof n.type == "string" && Ai(n, t);
  }
}
async function gl() {
  const e = await de("config.json"), t = {
    body: JSON.stringify(e),
    headers: { "Content-Type": "application/json" },
    method: "PUT"
  }, i = await fetch(`https://api.datapos.app/states/${e.id}`, t);
  if (!i.ok) throw new Error(await i.text());
}
async function Dr(e) {
  const t = e.id, i = {
    body: JSON.stringify(e),
    headers: { "Content-Type": "application/json" },
    method: "PUT"
  }, r = await fetch(`https://api.datapos.app/states/${t}`, i);
  if (!r.ok) throw new Error(await r.text());
}
async function Mr(e, t) {
  const i = `v${e.version}`;
  async function r(n, u = "") {
    const c = await vl(n, { withFileTypes: !0 });
    for (const f of c) {
      const y = `${n}/${f.name}`, o = u ? `${u}/${f.name}` : f.name;
      if (f.isDirectory()) continue;
      const b = `${t}_${i}/${o}`.replaceAll("\\", "/"), P = f.name.endsWith(".css") ? "text/css" : "application/octet-stream", R = f.name.endsWith(".js") ? "application/javascript" : P;
      console.info(`⚙️ Uploading '${o}' → '${b}'...`), await Se(void 0, `wrangler r2 object put "${b}" --file="${y}" --content-type ${R} --jurisdiction=eu --remote`);
    }
  }
  await r("dist");
}
const bl = [
  { idPrefix: "datapos-app-nuxt", typeId: "app", publish: !1, uploadGroupName: void 0 },
  { idPrefix: "datapos-api", typeId: "api", publish: !1, uploadGroupName: void 0 },
  { idPrefix: "datapos-connector", typeId: "connector", publish: !0, uploadGroupName: "connectors" },
  { idPrefix: "datapos-context", typeId: "context", publish: !0, uploadGroupName: "contexts" },
  { idPrefix: "datapos-development", typeId: "development", publish: !0, uploadGroupName: void 0 },
  { idPrefix: "datapos-engine", typeId: "engine", publish: !1, uploadGroupName: "engine" },
  { idPrefix: "datapos-presenter", typeId: "presenter", publish: !0, uploadGroupName: "presenters" },
  { idPrefix: "datapos-resources", typeId: "resources", publish: !1, uploadGroupName: void 0 },
  { idPrefix: "datapos-shared", typeId: "shared", publish: !0, uploadGroupName: void 0 },
  { idPrefix: "datapos-tool", typeId: "tool", publish: !0, uploadGroupName: "tools" }
];
async function Ul() {
  try {
    Me("Build Project"), await Ie("1️⃣  Bundle project", "vite", ["build"]), Be("Project built.");
  } catch (e) {
    console.error("❌ Error building project.", e), process.exit(1);
  }
}
async function ql() {
  try {
    Me("Release Project"), await Gi();
    const e = await de("package.json");
    let t = await de("config.json");
    await Ws("1️⃣", e);
    const i = bl.find((r) => t.id.startsWith(r.idPrefix));
    if (!i) throw new Error(`Failed to locate module type configuration for identifier '${t.id}'.`);
    switch (i.typeId) {
      case "connector":
        t = await _l("2️⃣", e);
        break;
      case "context":
        t = await wl("2️⃣", e);
        break;
      case "presenter":
        t = await Sl("2️⃣", e);
        break;
      default:
        t = await kl("2️⃣", e);
    }
    if (await Ie("3️⃣  Bundle project", "vite", ["build"]), await Se("4️⃣  Stage changes", "git", ["add", "."]), await Se("5️⃣  Commit changes", "git", ["commit", "-m", `"v${e.version}"`]), await Se("6️⃣  Push changes", "git", ["push", "origin", "main:main"]), i.typeId === "app")
      se("7️⃣  Register module"), await gl();
    else if (i.typeId === "engine")
      se("7️⃣  Register module"), await Mr(e, `datapos-engine-eu/${i.uploadGroupName}`), await Dr(t);
    else if (i.uploadGroupName === void 0)
      se("7️⃣  Registration NOT required.");
    else {
      se("7️⃣  Register module");
      const r = t.id.split("-").slice(2).join("-");
      await Mr(e, `datapos-engine-eu/${i.uploadGroupName}/${r}`), await Dr(t);
    }
    if (i.publish) {
      const r = ".npmrc";
      try {
        await It(r, `registry=https://registry.npmjs.org/
//registry.npmjs.org/:_authToken=${process.env.NPM_TOKEN ?? ""}`), await Ie("8️⃣  Publish to npm", "npm", ["publish", "--access", "public"]);
      } finally {
        await xl(r);
      }
    } else
      se(`8️⃣  Publishing NOT required for package with type identifier of '${i.typeId}'.`);
    Be(`Project version '${e.version}' released.`);
  } catch (e) {
    console.error("❌ Error releasing project.", e), process.exit(1);
  }
}
async function Hl() {
  try {
    Me("Synchronise Project with GitHub");
    const e = await de("package.json");
    se("Bump project version"), await Ws("1️⃣", e), await Se("2️⃣  Stage changes", "git", ["add", "."]), await Se("3️⃣  Commit changes", "git", ["commit", "-m", `"v${e.version}"`]), await Se("4️⃣  Push changes", "git", ["push", "origin", "main:main"]), Be(`Project version '${e.version}' synchronised with GitHub.`);
  } catch (e) {
    console.error("❌ Error synchronising project with GitHub.", e), process.exit(1);
  }
}
function Gl() {
  try {
    Me("Test Project"), console.error(`
❌ No tests implemented.
`);
  } catch (e) {
    console.error("❌ Error testing project.", e), process.exit(1);
  }
}
async function kl(e, t) {
  se(`${e}  Build project configuration`);
  const i = await de("config.json");
  return t.name != null && (i.id = t.name.replace("@datapos/", "").replace("@data-positioning/", "")), t.version != null && (i.version = t.version), await dt("config.json", i), i;
}
async function _l(e, t) {
  se(`${e}  Build connector project configuration`);
  const [i, r] = await Promise.all([de("config.json"), Qe("src/index.ts")]), n = /* @__PURE__ */ mn($n, i);
  if (!n.success)
    throw console.error("❌ Configuration is invalid:"), console.table(n.issues), new Error("Configuration is invalid.");
  const u = Hi(r), c = Tl(u);
  return u.length > 0 ? (console.info(`ℹ️  Implements ${u.length} operations:`), console.table(u)) : console.warn("⚠️  Implements no operations."), c === "unknown" ? console.warn("⚠️  No usage identified.") : console.info(`ℹ️  Supports '${c}' usage.`), t.name != null && (i.id = t.name.replace("@datapos/", "").replace("@data-positioning/", "")), t.version != null && (i.version = t.version), i.operations = u, i.usageId = c, await dt("config.json", i), i;
}
async function wl(e, t) {
  se(`${e}  Build context project configuration`);
  const [i, r] = await Promise.all([de("config.json"), Qe("src/index.ts")]), n = ah.safeParse(i);
  if (!n.success)
    throw console.error("❌ Configuration is invalid:"), console.table(n.error.issues), new Error("Configuration is invalid.");
  const u = Hi(r);
  return u.length > 0 ? (console.info(`ℹ️  Implements ${u.length} operations:`), console.table(u)) : console.warn("⚠️  Implements no operations."), t.name != null && (i.id = t.name.replace("@datapos/", "").replace("@data-positioning/", "")), t.version != null && (i.version = t.version), i.operations = u, await dt("config.json", i), i;
}
async function Sl(e, t) {
  se(`${e}  Build presenter project configuration`);
  const [i, r] = await Promise.all([de("config.json"), Qe("src/index.ts")]), n = yh.safeParse(i);
  if (!n.success)
    throw console.error("❌ Configuration is invalid:"), console.table(n.error.issues), new Error("Configuration is invalid.");
  const u = Hi(r);
  return u.length > 0 ? (console.info(`ℹ️  Implements ${u.length} operations:`), console.table(u)) : console.warn("⚠️  Implements no operations."), t.name != null && (i.id = t.name.replace("@datapos/", "").replace("@data-positioning/", "")), t.version != null && (i.version = t.version), i.operations = u, await dt("config.json", i), i;
}
async function Ws(e, t, i = "./") {
  if (se(`${e}  Bump project version`), t.version == null)
    t.version = "0.0.001", console.warn(`⚠️ Project version initialised to '${t.version}'.`), await dt(`${i}package.json`, t);
  else {
    const r = t.version, n = t.version.split(".");
    t.version = `${n[0]}.${n[1]}.${Number(n[2]) + 1}`, console.info(`Project version bumped from '${r}' to '${t.version}'.`), await dt(`${i}package.json`, t);
  }
}
function Tl(e) {
  let t = !1, i = !1;
  for (const r of e)
    rn.includes(r) && (t = !0), sn.includes(r) && (i = !0);
  return t && i ? "bidirectional" : t ? "source" : i ? "destination" : "unknown";
}
const Pl = {
  critical: { color: "D32F2F", label: "critical" },
  high: { color: "EF6C00", label: "high" },
  moderate: { color: "FBC02D", label: "moderate" },
  low: { color: "6D8C31", label: "low" },
  unknown: { color: "616161", label: "unknown" }
  // See sample badges in ~/tests/sampleBadges.md. Also included 'info' colouring.
}, Cl = "<!-- OWASP_BADGES_START -->", Al = "<!-- OWASP_BADGES_END -->";
async function Wl() {
  try {
    Me("Audit Dependencies"), await Gi();
    const e = await de("package.json");
    await Ie("1️⃣", "owasp-dependency-check", [
      "--out",
      "dependency-check-reports",
      "--project",
      e.name ?? "unknown",
      "--enableRetired",
      "--nodePackageSkipDevDependencies",
      "--nvdApiKey",
      process.env.OWASP_NVD_API_KEY ?? ""
    ]), await El("2️⃣"), await Ie("3️⃣  Check using 'npm audit'", "npm", ["audit"]), Be("Dependencies audited.");
  } catch (e) {
    console.error("❌ Error auditing dependencies.", e), process.exit(1);
  }
}
async function El(e) {
  se(`${e}  Insert OWASP Badge(s) into 'README.md'`);
  const t = await de("dependency-check-reports/dependency-check-report.json"), i = { critical: 0, high: 0, moderate: 0, low: 0, unknown: 0 };
  for (const c of t.dependencies)
    if (c.vulnerabilities != null)
      for (const f of c.vulnerabilities) {
        const y = f.severity?.toLowerCase() ?? "unknown";
        y in i ? i[y]++ : i.unknown++;
      }
  const r = await Il(i), n = await Qe("./README.md"), u = Gs(n, r.join(" "), Cl, Al);
  await It("README.md", u), console.info("OWASP audit badge(s) inserted into 'README.md'");
}
async function Il(e) {
  const t = await de("config.json"), i = [];
  if (Object.values(e).reduce((n, u) => n + u, 0) === 0)
    console.info("No vulnerabilities found."), i.push(`[![OWASP](https://img.shields.io/badge/OWASP-passed-4CAF50)](https://data-positioning.github.io/${t.id}/dependency-check-reports/dependency-check-report.html)`);
  else
    for (const [n, u] of Object.entries(e)) {
      const c = Pl[n];
      if (console.warn(`⚠️  ${u} ${c.label} vulnerability(ies) found.`), u === 0) continue;
      const f = `https://img.shields.io/badge/OWASP-${u}%20${c.label}-${c.color}`;
      i.push(`[![OWASP](${f})](https://data-positioning.github.io/${t.id}/dependency-check-reports/dependency-check-report.html)`);
    }
  return i;
}
async function Kl() {
  try {
    Me("Check Dependencies"), await Ie("1️⃣  Check using 'npm outdated'", "npm", ["outdated"], !0), await Ie("2️⃣  Check using 'npm-check-updates'", "npm-check-updates", ["-i"]), Be("Dependencies checked.");
  } catch (e) {
    console.error("❌ Error checking dependencies.", e), process.exit(1);
  }
}
const Nl = "<!-- DEPENDENCY_LICENSES_START -->", Ll = "<!-- DEPENDENCY_LICENSES_END -->";
async function Xl(e = [], t = !0) {
  try {
    Me("Document Dependencies"), await Gi();
    const i = e.flatMap((n) => ["--allowed", `'${n}'`]), r = Vr(new nn(import.meta.resolve("@datapos/datapos-development/license-report-config")));
    await Se(
      "1️⃣  Generate 'licenses.json' file",
      "license-report",
      ["--config", `'${r}'`, "--only=prod,peer", "--output=json"],
      "licenses/licenses.json"
    ), await Se("2️⃣  Check 'licenses.json' file", "license-report-check", ["--source", "licenses/licenses.json", "--output=table", ...i]), t ? (await Se(
      "3️⃣  Generate 'licenseTree.json' file",
      "license-report-recursive",
      ["--only=prod,peer", "--output=tree", "--recurse", "--department.value=n/a", "--licensePeriod.value=n/a", "--material.value=n/a", "--relatedTo.value=n/a"],
      "licenses/licenseTree.json"
    ), await Se("4️⃣  Check 'licenseTree.json' file", "license-report-check", ["--source", "licenses/licenseTree.json", "--output=table", ...i])) : (se("3️⃣  Skip 'licenses/licenseTree.json' file generate"), se("4️⃣  Skip 'licenses/licenseTree.json' file check")), await yl("licenses/downloads"), await Se("5️⃣  Download license files", "license-downloader", [
      "--source",
      "licenses/licenses.json",
      "--licDir",
      "licenses/downloads",
      "--githubToken.tokenEnvVar",
      "GITHUB_TOKEN",
      "--download"
    ]), await Ol("6️⃣", t), Be("Dependencies documented.");
  } catch (i) {
    console.error("❌ Error documenting dependencies.", i), process.exit(1);
  }
}
async function Ol(e, t) {
  se(`${e}  Insert licenses into 'README.md'`);
  const i = await de("licenses/licenses.json"), r = await de("licenses/downloads/licenses.ext.json");
  let n = [];
  t && (n = await de("licenses/licenseTree.json"));
  const u = [
    ...(() => {
      const o = /* @__PURE__ */ new Map();
      for (const b of i)
        o.set(b.name, { ...b });
      for (const b of r) {
        const P = o.get(b.name);
        o.set(b.name, P ? { ...P, ...b } : { ...b });
      }
      for (const b of n) {
        const P = o.get(b.name);
        P && o.set(b.name, { ...P, dependencyCount: b.requires?.length ?? 0 });
      }
      return o.values();
    })()
  ];
  let c = `|Name|Type|Installed|Latest|Latest Released|Deps|Document|
|:-|:-|:-:|:-:|:-|-:|:-|
`;
  for (const o of u) {
    const b = o.installedVersion === o.remoteVersion ? o.installedVersion : `${o.installedVersion} ⚠️`, P = o.latestRemoteModified ? Rl(o.latestRemoteModified.split("T")[0]) : "n/a", R = o.dependencyCount != null && o.dependencyCount >= 0 ? o.dependencyCount : "n/a";
    let B;
    o.licenseFileLink == null || o.licenseFileLink == "" ? B = "⚠️ No license file" : B = `[${o.licenseFileLink.slice(Math.max(0, o.licenseFileLink.lastIndexOf("/") + 1))}](${o.licenseFileLink})`, c += `|${o.name}|${o.licenseType}|${b}|${o.remoteVersion}|${P}|${R}|${B}|
`;
  }
  const f = await Qe("./README.md"), y = Gs(f, c, Nl, Ll);
  await It("README.md", y), console.info("OWASP audit badge(s) inserted into 'README.md'"), await It("README.md", y);
}
function Rl(e) {
  if (e == null || e === "") return "n/a";
  const t = e.split("T")[0];
  if (t == null || t === "") return "n/a";
  const i = new Date(t), r = /* @__PURE__ */ new Date();
  let n = (r.getFullYear() - i.getFullYear()) * 12 + (r.getMonth() - i.getMonth());
  return r.getDate() < i.getDate() && (n -= 1), n === 0 ? `this month: ${t}` : n === 1 ? `1 month ago: ${t}` : n <= 6 ? `${n} months ago: ${t}` : n <= 12 ? `${n} months ago: ${t} ⚠️` : `${n} months ago: ${t}❗`;
}
async function Jl() {
  try {
    Me("Format Code"), await Ie("1️⃣  Format", "prettier", ["--write", "*.json", "*.md", "*.ts", "src/**"]), Be("Code formatted.");
  } catch (e) {
    console.error("❌ Error formatting code.", e), process.exit(1);
  }
}
async function Yl() {
  try {
    Me("Lint Code"), await Ie("1️⃣  Lint", "eslint", ["."]), Be("Code linted.");
  } catch (e) {
    console.error("❌ Error linting code.", e), process.exit(1);
  }
}
const Dl = ["1️⃣", "2️⃣", "3️⃣", "4️⃣", "5️⃣", "6️⃣", "7️⃣", "8️⃣", "9️⃣"];
async function Ql(e = []) {
  try {
    Me("Update '@datapos/datapos' Dependencies");
    for (const [t, i] of e.entries()) {
      const r = Dl.at(t) ?? "🔢";
      await Ie(`${r}  Update '${i}'`, "npm", ["install", `@datapos/datapos-${i}@latest`]), i === "development" && await Ml();
    }
    Be("'@datapos/datapos' dependencies updated.");
  } catch (t) {
    console.error("❌ Error updating '@datapos/datapos' dependencies.", t), process.exit(1);
  }
}
async function Ml(e) {
  const t = Ht.dirname(Vr(import.meta.url));
  await qt(t, "../", ".editorconfig"), await qt(t, "../", ".gitattributes"), await qt(t, "../", ".markdownlint.json"), await qt(t, "../", "LICENSE");
}
async function qt(e, t, i) {
  const r = Ht.resolve(e, `${t}${i}`), n = await Qe(r), u = Ht.resolve(process.cwd(), i);
  let c;
  try {
    c = await Qe(u);
  } catch (f) {
    if (f.code !== "ENOENT") throw f;
  }
  if (c === n) {
    console.info(`ℹ️  File '${i}' is already up to date.`);
    return;
  }
  await It(u, n), console.info(`ℹ️  File '${i}' synchronised.`);
}
async function ep(e) {
  try {
    console.info(`🚀 Building public directory index for identifier '${e}'...`);
    const t = {};
    async function i(n, u) {
      console.info(`⚙️ Processing directory '${n}'...`);
      const c = [], f = n.slice(`public/${e}`.length);
      t[f === "" ? "/" : f] = c;
      for (const y of u) {
        const o = `${n}/${y}`;
        try {
          const b = await ge.stat(o);
          if (b.isDirectory()) {
            const P = await ge.readdir(o), R = { childCount: P.length, name: y, typeId: "folder" };
            c.push(R), await i(o, P);
          } else {
            const P = { id: Ys(), lastModifiedAt: b.mtimeMs, name: y, size: b.size, typeId: "object" };
            c.push(P);
          }
        } catch (b) {
          throw new Error(`Unable to get information for '${y}' in 'buildPublicDirectoryIndex'. ${String(b)}`);
        }
      }
      c.sort((y, o) => {
        const b = y.typeId.localeCompare(o.typeId);
        return b === 0 ? y.name.localeCompare(o.name) : b;
      });
    }
    const r = await ge.readdir(`public/${e}`);
    await i(`public/${e}`, r), await ge.writeFile(`./public/${e}Index.json`, JSON.stringify(t), "utf8"), console.info("✅ Public directory index built.");
  } catch (t) {
    console.error("❌ Error building public directory index.", t);
  }
}
export {
  Wl as auditDependencies,
  ep as buildDirectoryIndex,
  Ul as buildProject,
  Kl as checkDependencies,
  Xl as documentDependencies,
  Jl as formatCode,
  Yl as lintCode,
  ql as releaseProject,
  Hl as syncProjectWithGitHub,
  Gl as testProject,
  Ql as updateDataPosDependencies
};
//# sourceMappingURL=datapos-development.es.js.map
