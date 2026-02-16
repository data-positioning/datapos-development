import { promises as ne, existsSync as ys } from "node:fs";
import Ye from "node:path";
import { promisify as xs } from "node:util";
import { exec as vs, spawn as gs } from "node:child_process";
import { fileURLToPath as gi, URL as bs } from "node:url";
const Ps = "useandom-26T198340PX75pxJACKVERYMINDBUSHWOLF_GQZbfghjklqvwyzrict";
let Ss = (e = 21) => {
  let t = "", s = crypto.getRandomValues(new Uint8Array(e |= 0));
  for (; e--; )
    t += Ps[s[e] & 63];
  return t;
}, Et;
// @__NO_SIDE_EFFECTS__
function Ts(e) {
  return {
    lang: e?.lang ?? Et?.lang,
    message: e?.message,
    abortEarly: e?.abortEarly ?? Et?.abortEarly,
    abortPipeEarly: e?.abortPipeEarly ?? Et?.abortPipeEarly
  };
}
// @__NO_SIDE_EFFECTS__
function Bt(e, t, s) {
  const a = e["~run"]({ value: t }, /* @__PURE__ */ Ts(s));
  return {
    typed: a.typed,
    success: !a.issues,
    output: a.value,
    issues: a.issues
  };
}
let It;
// @__NO_SIDE_EFFECTS__
function Cs(e) {
  return {
    lang: e?.lang ?? It?.lang,
    message: e?.message,
    abortEarly: e?.abortEarly ?? It?.abortEarly,
    abortPipeEarly: e?.abortPipeEarly ?? It?.abortPipeEarly
  };
}
let ks;
// @__NO_SIDE_EFFECTS__
function ws(e) {
  return ks?.get(e);
}
let As;
// @__NO_SIDE_EFFECTS__
function Es(e) {
  return As?.get(e);
}
let Is;
// @__NO_SIDE_EFFECTS__
function _s(e, t) {
  return Is?.get(e)?.get(t);
}
// @__NO_SIDE_EFFECTS__
function bi(e) {
  const t = typeof e;
  return t === "string" ? `"${e}"` : t === "number" || t === "bigint" || t === "boolean" ? `${e}` : t === "object" || t === "function" ? (e && Object.getPrototypeOf(e)?.constructor?.name) ?? "null" : t;
}
function be(e, t, s, a, n) {
  const p = n && "input" in n ? n.input : s.value, f = n?.expected ?? e.expects ?? null, v = n?.received ?? /* @__PURE__ */ bi(p), x = {
    kind: e.kind,
    type: e.type,
    input: p,
    expected: f,
    received: v,
    message: `Invalid ${t}: ${f ? `Expected ${f} but r` : "R"}eceived ${v}`,
    requirement: e.requirement,
    path: n?.path,
    issues: n?.issues,
    lang: a.lang,
    abortEarly: a.abortEarly,
    abortPipeEarly: a.abortPipeEarly
  }, o = e.kind === "schema", S = n?.message ?? e.message ?? /* @__PURE__ */ _s(e.reference, x.lang) ?? (o ? /* @__PURE__ */ Es(x.lang) : null) ?? a.message ?? /* @__PURE__ */ ws(x.lang);
  S !== void 0 && (x.message = typeof S == "function" ? S(x) : S), o && (s.typed = !1), s.issues ? s.issues.push(x) : s.issues = [x];
}
// @__NO_SIDE_EFFECTS__
function Pe(e) {
  return {
    version: 1,
    vendor: "valibot",
    validate(t) {
      return e["~run"]({ value: t }, /* @__PURE__ */ Cs());
    }
  };
}
// @__NO_SIDE_EFFECTS__
function Ns(e, t) {
  return Object.hasOwn(e, t) && t !== "__proto__" && t !== "prototype" && t !== "constructor";
}
// @__NO_SIDE_EFFECTS__
function Ls(e, t) {
  const s = [...new Set(e)];
  return s.length > 1 ? `(${s.join(` ${t} `)})` : s[0] ?? "never";
}
// @__NO_SIDE_EFFECTS__
function Os(e, t, s) {
  return typeof e.fallback == "function" ? e.fallback(t, s) : e.fallback;
}
// @__NO_SIDE_EFFECTS__
function Ut(e, t, s) {
  return typeof e.default == "function" ? e.default(t, s) : e.default;
}
// @__NO_SIDE_EFFECTS__
function Re(e, t) {
  return {
    kind: "schema",
    type: "array",
    reference: Re,
    expects: "Array",
    async: !1,
    item: e,
    message: t,
    get "~standard"() {
      return /* @__PURE__ */ Pe(this);
    },
    "~run"(s, a) {
      const n = s.value;
      if (Array.isArray(n)) {
        s.typed = !0, s.value = [];
        for (let p = 0; p < n.length; p++) {
          const f = n[p], v = this.item["~run"]({ value: f }, a);
          if (v.issues) {
            const x = {
              type: "array",
              origin: "value",
              input: n,
              key: p,
              value: f
            };
            for (const o of v.issues)
              o.path ? o.path.unshift(x) : o.path = [x], s.issues?.push(o);
            if (s.issues || (s.issues = v.issues), a.abortEarly) {
              s.typed = !1;
              break;
            }
          }
          v.typed || (s.typed = !1), s.value.push(v.value);
        }
      } else be(this, "type", s, a);
      return s;
    }
  };
}
// @__NO_SIDE_EFFECTS__
function Pi(e) {
  return {
    kind: "schema",
    type: "boolean",
    reference: Pi,
    expects: "boolean",
    async: !1,
    message: e,
    get "~standard"() {
      return /* @__PURE__ */ Pe(this);
    },
    "~run"(t, s) {
      return typeof t.value == "boolean" ? t.typed = !0 : be(this, "type", t, s), t;
    }
  };
}
// @__NO_SIDE_EFFECTS__
function He(e, t) {
  return {
    kind: "schema",
    type: "literal",
    reference: He,
    expects: /* @__PURE__ */ bi(e),
    async: !1,
    literal: e,
    message: t,
    get "~standard"() {
      return /* @__PURE__ */ Pe(this);
    },
    "~run"(s, a) {
      return s.value === this.literal ? s.typed = !0 : be(this, "type", s, a), s;
    }
  };
}
// @__NO_SIDE_EFFECTS__
function le(e, t) {
  return {
    kind: "schema",
    type: "nullable",
    reference: le,
    expects: `(${e.expects} | null)`,
    async: !1,
    wrapped: e,
    default: t,
    get "~standard"() {
      return /* @__PURE__ */ Pe(this);
    },
    "~run"(s, a) {
      return s.value === null && (this.default !== void 0 && (s.value = /* @__PURE__ */ Ut(this, s, a)), s.value === null) ? (s.typed = !0, s) : this.wrapped["~run"](s, a);
    }
  };
}
// @__NO_SIDE_EFFECTS__
function De(e) {
  return {
    kind: "schema",
    type: "number",
    reference: De,
    expects: "number",
    async: !1,
    message: e,
    get "~standard"() {
      return /* @__PURE__ */ Pe(this);
    },
    "~run"(t, s) {
      return typeof t.value == "number" && !isNaN(t.value) ? t.typed = !0 : be(this, "type", t, s), t;
    }
  };
}
// @__NO_SIDE_EFFECTS__
function ve(e, t) {
  return {
    kind: "schema",
    type: "object",
    reference: ve,
    expects: "Object",
    async: !1,
    entries: e,
    message: t,
    get "~standard"() {
      return /* @__PURE__ */ Pe(this);
    },
    "~run"(s, a) {
      const n = s.value;
      if (n && typeof n == "object") {
        s.typed = !0, s.value = {};
        for (const p in this.entries) {
          const f = this.entries[p];
          if (p in n || (f.type === "exact_optional" || f.type === "optional" || f.type === "nullish") && f.default !== void 0) {
            const v = p in n ? n[p] : /* @__PURE__ */ Ut(f), x = f["~run"]({ value: v }, a);
            if (x.issues) {
              const o = {
                type: "object",
                origin: "value",
                input: n,
                key: p,
                value: v
              };
              for (const S of x.issues)
                S.path ? S.path.unshift(o) : S.path = [o], s.issues?.push(S);
              if (s.issues || (s.issues = x.issues), a.abortEarly) {
                s.typed = !1;
                break;
              }
            }
            x.typed || (s.typed = !1), s.value[p] = x.value;
          } else if (f.fallback !== void 0) s.value[p] = /* @__PURE__ */ Os(f);
          else if (f.type !== "exact_optional" && f.type !== "optional" && f.type !== "nullish" && (be(this, "key", s, a, {
            input: void 0,
            expected: `"${p}"`,
            path: [{
              type: "object",
              origin: "key",
              input: n,
              key: p,
              value: n[p]
            }]
          }), a.abortEarly))
            break;
        }
      } else be(this, "type", s, a);
      return s;
    }
  };
}
// @__NO_SIDE_EFFECTS__
function me(e, t) {
  return {
    kind: "schema",
    type: "optional",
    reference: me,
    expects: `(${e.expects} | undefined)`,
    async: !1,
    wrapped: e,
    default: t,
    get "~standard"() {
      return /* @__PURE__ */ Pe(this);
    },
    "~run"(s, a) {
      return s.value === void 0 && (this.default !== void 0 && (s.value = /* @__PURE__ */ Ut(this, s, a)), s.value === void 0) ? (s.typed = !0, s) : this.wrapped["~run"](s, a);
    }
  };
}
// @__NO_SIDE_EFFECTS__
function $t(e, t, s) {
  return {
    kind: "schema",
    type: "record",
    reference: $t,
    expects: "Object",
    async: !1,
    key: e,
    value: t,
    message: s,
    get "~standard"() {
      return /* @__PURE__ */ Pe(this);
    },
    "~run"(a, n) {
      const p = a.value;
      if (p && typeof p == "object") {
        a.typed = !0, a.value = {};
        for (const f in p) if (/* @__PURE__ */ Ns(p, f)) {
          const v = p[f], x = this.key["~run"]({ value: f }, n);
          if (x.issues) {
            const S = {
              type: "object",
              origin: "key",
              input: p,
              key: f,
              value: v
            };
            for (const I of x.issues)
              I.path = [S], a.issues?.push(I);
            if (a.issues || (a.issues = x.issues), n.abortEarly) {
              a.typed = !1;
              break;
            }
          }
          const o = this.value["~run"]({ value: v }, n);
          if (o.issues) {
            const S = {
              type: "object",
              origin: "value",
              input: p,
              key: f,
              value: v
            };
            for (const I of o.issues)
              I.path ? I.path.unshift(S) : I.path = [S], a.issues?.push(I);
            if (a.issues || (a.issues = o.issues), n.abortEarly) {
              a.typed = !1;
              break;
            }
          }
          (!x.typed || !o.typed) && (a.typed = !1), x.typed && (a.value[x.value] = o.value);
        }
      } else be(this, "type", a, n);
      return a;
    }
  };
}
// @__NO_SIDE_EFFECTS__
function V(e) {
  return {
    kind: "schema",
    type: "string",
    reference: V,
    expects: "string",
    async: !1,
    message: e,
    get "~standard"() {
      return /* @__PURE__ */ Pe(this);
    },
    "~run"(t, s) {
      return typeof t.value == "string" ? t.typed = !0 : be(this, "type", t, s), t;
    }
  };
}
// @__NO_SIDE_EFFECTS__
function ri(e) {
  let t;
  if (e) for (const s of e) t ? t.push(...s.issues) : t = s.issues;
  return t;
}
// @__NO_SIDE_EFFECTS__
function Si(e, t) {
  return {
    kind: "schema",
    type: "union",
    reference: Si,
    expects: /* @__PURE__ */ Ls(e.map((s) => s.expects), "|"),
    async: !1,
    options: e,
    message: t,
    get "~standard"() {
      return /* @__PURE__ */ Pe(this);
    },
    "~run"(s, a) {
      let n, p, f;
      for (const v of this.options) {
        const x = v["~run"]({ value: s.value }, a);
        if (x.typed) if (x.issues) p ? p.push(x) : p = [x];
        else {
          n = x;
          break;
        }
        else f ? f.push(x) : f = [x];
      }
      if (n) return n;
      if (p) {
        if (p.length === 1) return p[0];
        be(this, "type", s, a, { issues: /* @__PURE__ */ ri(p) }), s.typed = !0;
      } else {
        if (f?.length === 1) return f[0];
        be(this, "type", s, a, { issues: /* @__PURE__ */ ri(f) });
      }
      return s;
    }
  };
}
const Se = (e) => /* @__PURE__ */ Si(e.map((t) => /* @__PURE__ */ He(t))), Rs = /* @__PURE__ */ ve({
  "en-au": /* @__PURE__ */ V(),
  "en-gb": /* @__PURE__ */ V(),
  "en-us": /* @__PURE__ */ V(),
  "es-es": /* @__PURE__ */ V()
}), tt = /* @__PURE__ */ ve({
  "en-au": /* @__PURE__ */ me(/* @__PURE__ */ V()),
  "en-gb": /* @__PURE__ */ me(/* @__PURE__ */ V()),
  "en-us": /* @__PURE__ */ me(/* @__PURE__ */ V()),
  "es-es": /* @__PURE__ */ me(/* @__PURE__ */ V())
}), Ms = Se(["amber", "green", "red", "other"]), Ds = Se([
  "alpha",
  "beta",
  "generalAvailability",
  "notApplicable",
  "preAlpha",
  "proposed",
  "releaseCandidate",
  "unavailable",
  "underReview"
]);
Se([
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
]);
const Vs = /* @__PURE__ */ ve({
  id: /* @__PURE__ */ V(),
  color: Ms,
  label: /* @__PURE__ */ V()
}), Ti = {
  id: /* @__PURE__ */ V(),
  label: tt,
  description: tt,
  firstCreatedAt: /* @__PURE__ */ me(/* @__PURE__ */ De()),
  icon: /* @__PURE__ */ le(/* @__PURE__ */ V()),
  iconDark: /* @__PURE__ */ le(/* @__PURE__ */ V()),
  lastUpdatedAt: /* @__PURE__ */ le(/* @__PURE__ */ De()),
  status: /* @__PURE__ */ le(Vs),
  statusId: Ds
}, Ci = /* @__PURE__ */ ve({
  id: /* @__PURE__ */ V(),
  label: tt,
  description: tt,
  icon: /* @__PURE__ */ le(/* @__PURE__ */ V()),
  iconDark: /* @__PURE__ */ le(/* @__PURE__ */ V()),
  order: /* @__PURE__ */ De(),
  path: /* @__PURE__ */ V()
});
Se(["app", "engine", "connector", "context", "presenter", "tool"]);
const qt = {
  ...Ti,
  version: /* @__PURE__ */ V()
}, js = Se(["apiKey", "disabled", "oAuth2", "none"]), Fs = /* @__PURE__ */ ve({
  authMethodId: js,
  activeConnectionCount: /* @__PURE__ */ me(/* @__PURE__ */ De()),
  canDescribe: /* @__PURE__ */ me(/* @__PURE__ */ Pi()),
  id: /* @__PURE__ */ me(/* @__PURE__ */ V()),
  label: /* @__PURE__ */ me(Rs),
  maxConnectionCount: /* @__PURE__ */ le(/* @__PURE__ */ De()),
  params: /* @__PURE__ */ me(/* @__PURE__ */ Re(/* @__PURE__ */ $t(/* @__PURE__ */ V(), /* @__PURE__ */ V())))
}), Bs = Se(["application", "curatedDataset", "database", "fileStore"]), Us = Se([
  "abortOperation",
  "auditObjectContent",
  "authenticateConnection",
  "createObject",
  "describeConnection",
  "dropObject",
  "findObjectFolderPath",
  "getReadableStream",
  "getRecord",
  "listNodes",
  "previewObject",
  "removeRecords",
  "retrieveChunks",
  "retrieveRecords",
  "upsertRecords"
]), $s = Se(["bidirectional", "destination", "source", "unknown"]), qs = /* @__PURE__ */ ve({
  id: /* @__PURE__ */ V(),
  label: tt
}), Hs = /* @__PURE__ */ ve({
  ...qt,
  typeId: /* @__PURE__ */ He("connector"),
  category: /* @__PURE__ */ le(qs),
  categoryId: Bs,
  implementations: /* @__PURE__ */ $t(/* @__PURE__ */ V(), Fs),
  operations: /* @__PURE__ */ Re(Us),
  usageId: $s,
  vendorAccountURL: /* @__PURE__ */ le(/* @__PURE__ */ V()),
  vendorDocumentationURL: /* @__PURE__ */ le(/* @__PURE__ */ V()),
  vendorHomeURL: /* @__PURE__ */ le(/* @__PURE__ */ V())
}), Gs = Se(["list"]), Ks = /* @__PURE__ */ ve({
  ...Ti,
  typeId: /* @__PURE__ */ He("contextModelGroup"),
  modelRefs: /* @__PURE__ */ Re(Ci),
  order: /* @__PURE__ */ De()
}), Ws = /* @__PURE__ */ ve({
  ...qt,
  typeId: /* @__PURE__ */ He("context"),
  models: /* @__PURE__ */ Re(Ks),
  operations: /* @__PURE__ */ Re(Gs)
}), zs = Se(["list", "render", "setColorMode"]), Xs = /* @__PURE__ */ ve({
  ...qt,
  typeId: /* @__PURE__ */ He("presenter"),
  presentations: /* @__PURE__ */ Re(Ci),
  operations: /* @__PURE__ */ Re(zs)
});
var Qs = [509, 0, 227, 0, 150, 4, 294, 9, 1368, 2, 2, 1, 6, 3, 41, 2, 5, 0, 166, 1, 574, 3, 9, 9, 7, 9, 32, 4, 318, 1, 80, 3, 71, 10, 50, 3, 123, 2, 54, 14, 32, 10, 3, 1, 11, 3, 46, 10, 8, 0, 46, 9, 7, 2, 37, 13, 2, 9, 6, 1, 45, 0, 13, 2, 49, 13, 9, 3, 2, 11, 83, 11, 7, 0, 3, 0, 158, 11, 6, 9, 7, 3, 56, 1, 2, 6, 3, 1, 3, 2, 10, 0, 11, 1, 3, 6, 4, 4, 68, 8, 2, 0, 3, 0, 2, 3, 2, 4, 2, 0, 15, 1, 83, 17, 10, 9, 5, 0, 82, 19, 13, 9, 214, 6, 3, 8, 28, 1, 83, 16, 16, 9, 82, 12, 9, 9, 7, 19, 58, 14, 5, 9, 243, 14, 166, 9, 71, 5, 2, 1, 3, 3, 2, 0, 2, 1, 13, 9, 120, 6, 3, 6, 4, 0, 29, 9, 41, 6, 2, 3, 9, 0, 10, 10, 47, 15, 343, 9, 54, 7, 2, 7, 17, 9, 57, 21, 2, 13, 123, 5, 4, 0, 2, 1, 2, 6, 2, 0, 9, 9, 49, 4, 2, 1, 2, 4, 9, 9, 330, 3, 10, 1, 2, 0, 49, 6, 4, 4, 14, 10, 5350, 0, 7, 14, 11465, 27, 2343, 9, 87, 9, 39, 4, 60, 6, 26, 9, 535, 9, 470, 0, 2, 54, 8, 3, 82, 0, 12, 1, 19628, 1, 4178, 9, 519, 45, 3, 22, 543, 4, 4, 5, 9, 7, 3, 6, 31, 3, 149, 2, 1418, 49, 513, 54, 5, 49, 9, 0, 15, 0, 23, 4, 2, 14, 1361, 6, 2, 16, 3, 6, 2, 1, 2, 4, 101, 0, 161, 6, 10, 9, 357, 0, 62, 13, 499, 13, 245, 1, 2, 9, 726, 6, 110, 6, 6, 9, 4759, 9, 787719, 239], ki = [0, 11, 2, 25, 2, 18, 2, 1, 2, 14, 3, 13, 35, 122, 70, 52, 268, 28, 4, 48, 48, 31, 14, 29, 6, 37, 11, 29, 3, 35, 5, 7, 2, 4, 43, 157, 19, 35, 5, 35, 5, 39, 9, 51, 13, 10, 2, 14, 2, 6, 2, 1, 2, 10, 2, 14, 2, 6, 2, 1, 4, 51, 13, 310, 10, 21, 11, 7, 25, 5, 2, 41, 2, 8, 70, 5, 3, 0, 2, 43, 2, 1, 4, 0, 3, 22, 11, 22, 10, 30, 66, 18, 2, 1, 11, 21, 11, 25, 71, 55, 7, 1, 65, 0, 16, 3, 2, 2, 2, 28, 43, 28, 4, 28, 36, 7, 2, 27, 28, 53, 11, 21, 11, 18, 14, 17, 111, 72, 56, 50, 14, 50, 14, 35, 39, 27, 10, 22, 251, 41, 7, 1, 17, 2, 60, 28, 11, 0, 9, 21, 43, 17, 47, 20, 28, 22, 13, 52, 58, 1, 3, 0, 14, 44, 33, 24, 27, 35, 30, 0, 3, 0, 9, 34, 4, 0, 13, 47, 15, 3, 22, 0, 2, 0, 36, 17, 2, 24, 20, 1, 64, 6, 2, 0, 2, 3, 2, 14, 2, 9, 8, 46, 39, 7, 3, 1, 3, 21, 2, 6, 2, 1, 2, 4, 4, 0, 19, 0, 13, 4, 31, 9, 2, 0, 3, 0, 2, 37, 2, 0, 26, 0, 2, 0, 45, 52, 19, 3, 21, 2, 31, 47, 21, 1, 2, 0, 185, 46, 42, 3, 37, 47, 21, 0, 60, 42, 14, 0, 72, 26, 38, 6, 186, 43, 117, 63, 32, 7, 3, 0, 3, 7, 2, 1, 2, 23, 16, 0, 2, 0, 95, 7, 3, 38, 17, 0, 2, 0, 29, 0, 11, 39, 8, 0, 22, 0, 12, 45, 20, 0, 19, 72, 200, 32, 32, 8, 2, 36, 18, 0, 50, 29, 113, 6, 2, 1, 2, 37, 22, 0, 26, 5, 2, 1, 2, 31, 15, 0, 328, 18, 16, 0, 2, 12, 2, 33, 125, 0, 80, 921, 103, 110, 18, 195, 2637, 96, 16, 1071, 18, 5, 26, 3994, 6, 582, 6842, 29, 1763, 568, 8, 30, 18, 78, 18, 29, 19, 47, 17, 3, 32, 20, 6, 18, 433, 44, 212, 63, 129, 74, 6, 0, 67, 12, 65, 1, 2, 0, 29, 6135, 9, 1237, 42, 9, 8936, 3, 2, 6, 2, 1, 2, 290, 16, 0, 30, 2, 3, 0, 15, 3, 9, 395, 2309, 106, 6, 12, 4, 8, 8, 9, 5991, 84, 2, 70, 2, 1, 3, 0, 3, 1, 3, 3, 2, 11, 2, 0, 2, 6, 2, 64, 2, 3, 3, 7, 2, 6, 2, 27, 2, 3, 2, 4, 2, 0, 4, 6, 2, 339, 3, 24, 2, 24, 2, 30, 2, 24, 2, 30, 2, 24, 2, 30, 2, 24, 2, 30, 2, 24, 2, 7, 1845, 30, 7, 5, 262, 61, 147, 44, 11, 6, 17, 0, 322, 29, 19, 43, 485, 27, 229, 29, 3, 0, 496, 6, 2, 3, 2, 1, 2, 14, 2, 196, 60, 67, 8, 0, 1205, 3, 2, 26, 2, 1, 2, 0, 3, 0, 2, 9, 2, 3, 2, 0, 2, 0, 7, 0, 5, 0, 2, 0, 2, 0, 2, 2, 2, 1, 2, 0, 3, 0, 2, 0, 2, 0, 2, 0, 2, 0, 2, 1, 2, 0, 3, 3, 2, 6, 2, 3, 2, 3, 2, 0, 2, 9, 2, 16, 6, 2, 2, 4, 2, 16, 4421, 42719, 33, 4153, 7, 221, 3, 5761, 15, 7472, 16, 621, 2467, 541, 1507, 4938, 6, 4191], Js = "‌‍·̀-ͯ·҃-֑҇-ׇֽֿׁׂׅׄؐ-ًؚ-٩ٰۖ-ۜ۟-۪ۤۧۨ-ۭ۰-۹ܑܰ-݊ަ-ް߀-߉߫-߽߳ࠖ-࠙ࠛ-ࠣࠥ-ࠧࠩ-࡙࠭-࡛ࢗ-࢟࣊-ࣣ࣡-ःऺ-़ा-ॏ॑-ॗॢॣ०-९ঁ-ঃ়া-ৄেৈো-্ৗৢৣ০-৯৾ਁ-ਃ਼ਾ-ੂੇੈੋ-੍ੑ੦-ੱੵઁ-ઃ઼ા-ૅે-ૉો-્ૢૣ૦-૯ૺ-૿ଁ-ଃ଼ା-ୄେୈୋ-୍୕-ୗୢୣ୦-୯ஂா-ூெ-ைொ-்ௗ௦-௯ఀ-ఄ఼ా-ౄె-ైొ-్ౕౖౢౣ౦-౯ಁ-ಃ಼ಾ-ೄೆ-ೈೊ-್ೕೖೢೣ೦-೯ೳഀ-ഃ഻഼ാ-ൄെ-ൈൊ-്ൗൢൣ൦-൯ඁ-ඃ්ා-ුූෘ-ෟ෦-෯ෲෳัิ-ฺ็-๎๐-๙ັິ-ຼ່-໎໐-໙༘༙༠-༩༹༵༷༾༿ཱ-྄྆྇ྍ-ྗྙ-ྼ࿆ါ-ှ၀-၉ၖ-ၙၞ-ၠၢ-ၤၧ-ၭၱ-ၴႂ-ႍႏ-ႝ፝-፟፩-፱ᜒ-᜕ᜲ-᜴ᝒᝓᝲᝳ឴-៓៝០-៩᠋-᠍᠏-᠙ᢩᤠ-ᤫᤰ-᤻᥆-᥏᧐-᧚ᨗ-ᨛᩕ-ᩞ᩠-᩿᩼-᪉᪐-᪙᪰-᪽ᪿ-ᫎᬀ-ᬄ᬴-᭄᭐-᭙᭫-᭳ᮀ-ᮂᮡ-ᮭ᮰-᮹᯦-᯳ᰤ-᰷᱀-᱉᱐-᱙᳐-᳔᳒-᳨᳭᳴᳷-᳹᷀-᷿‌‍‿⁀⁔⃐-⃥⃜⃡-⃰⳯-⵿⳱ⷠ-〪ⷿ-゙゚〯・꘠-꘩꙯ꙴ-꙽ꚞꚟ꛰꛱ꠂ꠆ꠋꠣ-ꠧ꠬ꢀꢁꢴ-ꣅ꣐-꣙꣠-꣱ꣿ-꤉ꤦ-꤭ꥇ-꥓ꦀ-ꦃ꦳-꧀꧐-꧙ꧥ꧰-꧹ꨩ-ꨶꩃꩌꩍ꩐-꩙ꩻ-ꩽꪰꪲ-ꪴꪷꪸꪾ꪿꫁ꫫ-ꫯꫵ꫶ꯣ-ꯪ꯬꯭꯰-꯹ﬞ︀-️︠-︯︳︴﹍-﹏０-９＿･", wi = "ªµºÀ-ÖØ-öø-ˁˆ-ˑˠ-ˤˬˮͰ-ʹͶͷͺ-ͽͿΆΈ-ΊΌΎ-ΡΣ-ϵϷ-ҁҊ-ԯԱ-Ֆՙՠ-ֈא-תׯ-ײؠ-يٮٯٱ-ۓەۥۦۮۯۺ-ۼۿܐܒ-ܯݍ-ޥޱߊ-ߪߴߵߺࠀ-ࠕࠚࠤࠨࡀ-ࡘࡠ-ࡪࡰ-ࢇࢉ-ࢎࢠ-ࣉऄ-हऽॐक़-ॡॱ-ঀঅ-ঌএঐও-নপ-রলশ-হঽৎড়ঢ়য়-ৡৰৱৼਅ-ਊਏਐਓ-ਨਪ-ਰਲਲ਼ਵਸ਼ਸਹਖ਼-ੜਫ਼ੲ-ੴઅ-ઍએ-ઑઓ-નપ-રલળવ-હઽૐૠૡૹଅ-ଌଏଐଓ-ନପ-ରଲଳଵ-ହଽଡ଼ଢ଼ୟ-ୡୱஃஅ-ஊஎ-ஐஒ-கஙசஜஞடணதந-பம-ஹௐఅ-ఌఎ-ఐఒ-నప-హఽౘ-ౚౝౠౡಀಅ-ಌಎ-ಐಒ-ನಪ-ಳವ-ಹಽೝೞೠೡೱೲഄ-ഌഎ-ഐഒ-ഺഽൎൔ-ൖൟ-ൡൺ-ൿඅ-ඖක-නඳ-රලව-ෆก-ะาำเ-ๆກຂຄຆ-ຊຌ-ຣລວ-ະາຳຽເ-ໄໆໜ-ໟༀཀ-ཇཉ-ཬྈ-ྌက-ဪဿၐ-ၕၚ-ၝၡၥၦၮ-ၰၵ-ႁႎႠ-ჅჇჍა-ჺჼ-ቈቊ-ቍቐ-ቖቘቚ-ቝበ-ኈኊ-ኍነ-ኰኲ-ኵኸ-ኾዀዂ-ዅወ-ዖዘ-ጐጒ-ጕጘ-ፚᎀ-ᎏᎠ-Ᏽᏸ-ᏽᐁ-ᙬᙯ-ᙿᚁ-ᚚᚠ-ᛪᛮ-ᛸᜀ-ᜑᜟ-ᜱᝀ-ᝑᝠ-ᝬᝮ-ᝰក-ឳៗៜᠠ-ᡸᢀ-ᢨᢪᢰ-ᣵᤀ-ᤞᥐ-ᥭᥰ-ᥴᦀ-ᦫᦰ-ᧉᨀ-ᨖᨠ-ᩔᪧᬅ-ᬳᭅ-ᭌᮃ-ᮠᮮᮯᮺ-ᯥᰀ-ᰣᱍ-ᱏᱚ-ᱽᲀ-ᲊᲐ-ᲺᲽ-Ჿᳩ-ᳬᳮ-ᳳᳵᳶᳺᴀ-ᶿḀ-ἕἘ-Ἕἠ-ὅὈ-Ὅὐ-ὗὙὛὝὟ-ώᾀ-ᾴᾶ-ᾼιῂ-ῄῆ-ῌῐ-ΐῖ-Ίῠ-Ῥῲ-ῴῶ-ῼⁱⁿₐ-ₜℂℇℊ-ℓℕ℘-ℝℤΩℨK-ℹℼ-ℿⅅ-ⅉⅎⅠ-ↈⰀ-ⳤⳫ-ⳮⳲⳳⴀ-ⴥⴧⴭⴰ-ⵧⵯⶀ-ⶖⶠ-ⶦⶨ-ⶮⶰ-ⶶⶸ-ⶾⷀ-ⷆⷈ-ⷎⷐ-ⷖⷘ-ⷞ々-〇〡-〩〱-〵〸-〼ぁ-ゖ゛-ゟァ-ヺー-ヿㄅ-ㄯㄱ-ㆎㆠ-ㆿㇰ-ㇿ㐀-䶿一-ꒌꓐ-ꓽꔀ-ꘌꘐ-ꘟꘪꘫꙀ-ꙮꙿ-ꚝꚠ-ꛯꜗ-ꜟꜢ-ꞈꞋ-ꟍꟐꟑꟓꟕ-Ƛꟲ-ꠁꠃ-ꠅꠇ-ꠊꠌ-ꠢꡀ-ꡳꢂ-ꢳꣲ-ꣷꣻꣽꣾꤊ-ꤥꤰ-ꥆꥠ-ꥼꦄ-ꦲꧏꧠ-ꧤꧦ-ꧯꧺ-ꧾꨀ-ꨨꩀ-ꩂꩄ-ꩋꩠ-ꩶꩺꩾ-ꪯꪱꪵꪶꪹ-ꪽꫀꫂꫛ-ꫝꫠ-ꫪꫲ-ꫴꬁ-ꬆꬉ-ꬎꬑ-ꬖꬠ-ꬦꬨ-ꬮꬰ-ꭚꭜ-ꭩꭰ-ꯢ가-힣ힰ-ퟆퟋ-ퟻ豈-舘並-龎ﬀ-ﬆﬓ-ﬗיִײַ-ﬨשׁ-זּטּ-לּמּנּסּףּפּצּ-ﮱﯓ-ﴽﵐ-ﶏﶒ-ﷇﷰ-ﷻﹰ-ﹴﹶ-ﻼＡ-Ｚａ-ｚｦ-ﾾￂ-ￇￊ-ￏￒ-ￗￚ-ￜ", _t = {
  3: "abstract boolean byte char class double enum export extends final float goto implements import int interface long native package private protected public short static super synchronized throws transient volatile",
  5: "class enum extends super const export import",
  6: "enum",
  strict: "implements interface let package private protected public static yield",
  strictBind: "eval arguments"
}, Nt = "break case catch continue debugger default do else finally for function if return switch throw try var while with null true false instanceof typeof void delete new in this", Ys = {
  5: Nt,
  "5module": Nt + " export import",
  6: Nt + " const class extends export import super"
}, Zs = /^in(stanceof)?$/, er = new RegExp("[" + wi + "]"), tr = new RegExp("[" + wi + Js + "]");
function Mt(e, t) {
  for (var s = 65536, a = 0; a < t.length; a += 2) {
    if (s += t[a], s > e)
      return !1;
    if (s += t[a + 1], s >= e)
      return !0;
  }
  return !1;
}
function ye(e, t) {
  return e < 65 ? e === 36 : e < 91 ? !0 : e < 97 ? e === 95 : e < 123 ? !0 : e <= 65535 ? e >= 170 && er.test(String.fromCharCode(e)) : t === !1 ? !1 : Mt(e, ki);
}
function we(e, t) {
  return e < 48 ? e === 36 : e < 58 ? !0 : e < 65 ? !1 : e < 91 ? !0 : e < 97 ? e === 95 : e < 123 ? !0 : e <= 65535 ? e >= 170 && tr.test(String.fromCharCode(e)) : t === !1 ? !1 : Mt(e, ki) || Mt(e, Qs);
}
var O = function(t, s) {
  s === void 0 && (s = {}), this.label = t, this.keyword = s.keyword, this.beforeExpr = !!s.beforeExpr, this.startsExpr = !!s.startsExpr, this.isLoop = !!s.isLoop, this.isAssign = !!s.isAssign, this.prefix = !!s.prefix, this.postfix = !!s.postfix, this.binop = s.binop || null, this.updateContext = null;
};
function ue(e, t) {
  return new O(e, { beforeExpr: !0, binop: t });
}
var he = { beforeExpr: !0 }, ie = { startsExpr: !0 }, $e = {};
function M(e, t) {
  return t === void 0 && (t = {}), t.keyword = e, $e[e] = new O(e, t);
}
var h = {
  num: new O("num", ie),
  regexp: new O("regexp", ie),
  string: new O("string", ie),
  name: new O("name", ie),
  privateId: new O("privateId", ie),
  eof: new O("eof"),
  // Punctuation token types.
  bracketL: new O("[", { beforeExpr: !0, startsExpr: !0 }),
  bracketR: new O("]"),
  braceL: new O("{", { beforeExpr: !0, startsExpr: !0 }),
  braceR: new O("}"),
  parenL: new O("(", { beforeExpr: !0, startsExpr: !0 }),
  parenR: new O(")"),
  comma: new O(",", he),
  semi: new O(";", he),
  colon: new O(":", he),
  dot: new O("."),
  question: new O("?", he),
  questionDot: new O("?."),
  arrow: new O("=>", he),
  template: new O("template"),
  invalidTemplate: new O("invalidTemplate"),
  ellipsis: new O("...", he),
  backQuote: new O("`", ie),
  dollarBraceL: new O("${", { beforeExpr: !0, startsExpr: !0 }),
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
  eq: new O("=", { beforeExpr: !0, isAssign: !0 }),
  assign: new O("_=", { beforeExpr: !0, isAssign: !0 }),
  incDec: new O("++/--", { prefix: !0, postfix: !0, startsExpr: !0 }),
  prefix: new O("!/~", { beforeExpr: !0, prefix: !0, startsExpr: !0 }),
  logicalOR: ue("||", 1),
  logicalAND: ue("&&", 2),
  bitwiseOR: ue("|", 3),
  bitwiseXOR: ue("^", 4),
  bitwiseAND: ue("&", 5),
  equality: ue("==/!=/===/!==", 6),
  relational: ue("</>/<=/>=", 7),
  bitShift: ue("<</>>/>>>", 8),
  plusMin: new O("+/-", { beforeExpr: !0, binop: 9, prefix: !0, startsExpr: !0 }),
  modulo: ue("%", 10),
  star: ue("*", 10),
  slash: ue("/", 10),
  starstar: new O("**", { beforeExpr: !0 }),
  coalesce: ue("??", 1),
  // Keyword token types.
  _break: M("break"),
  _case: M("case", he),
  _catch: M("catch"),
  _continue: M("continue"),
  _debugger: M("debugger"),
  _default: M("default", he),
  _do: M("do", { isLoop: !0, beforeExpr: !0 }),
  _else: M("else", he),
  _finally: M("finally"),
  _for: M("for", { isLoop: !0 }),
  _function: M("function", ie),
  _if: M("if"),
  _return: M("return", he),
  _switch: M("switch"),
  _throw: M("throw", he),
  _try: M("try"),
  _var: M("var"),
  _const: M("const"),
  _while: M("while", { isLoop: !0 }),
  _with: M("with"),
  _new: M("new", { beforeExpr: !0, startsExpr: !0 }),
  _this: M("this", ie),
  _super: M("super", ie),
  _class: M("class", ie),
  _extends: M("extends", he),
  _export: M("export"),
  _import: M("import", ie),
  _null: M("null", ie),
  _true: M("true", ie),
  _false: M("false", ie),
  _in: M("in", { beforeExpr: !0, binop: 7 }),
  _instanceof: M("instanceof", { beforeExpr: !0, binop: 7 }),
  _typeof: M("typeof", { beforeExpr: !0, prefix: !0, startsExpr: !0 }),
  _void: M("void", { beforeExpr: !0, prefix: !0, startsExpr: !0 }),
  _delete: M("delete", { beforeExpr: !0, prefix: !0, startsExpr: !0 })
}, Y = /\r\n?|\n|\u2028|\u2029/, Ai = new RegExp(Y.source, "g");
function je(e) {
  return e === 10 || e === 13 || e === 8232 || e === 8233;
}
function Ei(e, t, s) {
  s === void 0 && (s = e.length);
  for (var a = t; a < s; a++) {
    var n = e.charCodeAt(a);
    if (je(n))
      return a < s - 1 && n === 13 && e.charCodeAt(a + 1) === 10 ? a + 2 : a + 1;
  }
  return -1;
}
var Ht = /[\u1680\u2000-\u200a\u202f\u205f\u3000\ufeff]/, z = /(?:\s|\/\/.*|\/\*[^]*?\*\/)*/g, Ii = Object.prototype, ir = Ii.hasOwnProperty, sr = Ii.toString, Ge = Object.hasOwn || (function(e, t) {
  return ir.call(e, t);
}), ai = Array.isArray || (function(e) {
  return sr.call(e) === "[object Array]";
}), ni = /* @__PURE__ */ Object.create(null);
function Oe(e) {
  return ni[e] || (ni[e] = new RegExp("^(?:" + e.replace(/ /g, "|") + ")$"));
}
function Ae(e) {
  return e <= 65535 ? String.fromCharCode(e) : (e -= 65536, String.fromCharCode((e >> 10) + 55296, (e & 1023) + 56320));
}
var rr = /(?:[\uD800-\uDBFF](?![\uDC00-\uDFFF])|(?:[^\uD800-\uDBFF]|^)[\uDC00-\uDFFF])/, qe = function(t, s) {
  this.line = t, this.column = s;
};
qe.prototype.offset = function(t) {
  return new qe(this.line, this.column + t);
};
var rt = function(t, s, a) {
  this.start = s, this.end = a, t.sourceFile !== null && (this.source = t.sourceFile);
};
function Gt(e, t) {
  for (var s = 1, a = 0; ; ) {
    var n = Ei(e, a, t);
    if (n < 0)
      return new qe(s, t - a);
    ++s, a = n;
  }
}
var lt = {
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
}, oi = !1;
function ar(e) {
  var t = {};
  for (var s in lt)
    t[s] = e && Ge(e, s) ? e[s] : lt[s];
  if (t.ecmaVersion === "latest" ? t.ecmaVersion = 1e8 : t.ecmaVersion == null ? (!oi && typeof console == "object" && console.warn && (oi = !0, console.warn(`Since Acorn 8.0.0, options.ecmaVersion is required.
Defaulting to 2020, but this will stop working in the future.`)), t.ecmaVersion = 11) : t.ecmaVersion >= 2015 && (t.ecmaVersion -= 2009), t.allowReserved == null && (t.allowReserved = t.ecmaVersion < 5), (!e || e.allowHashBang == null) && (t.allowHashBang = t.ecmaVersion >= 14), ai(t.onToken)) {
    var a = t.onToken;
    t.onToken = function(n) {
      return a.push(n);
    };
  }
  return ai(t.onComment) && (t.onComment = nr(t, t.onComment)), t;
}
function nr(e, t) {
  return function(s, a, n, p, f, v) {
    var x = {
      type: s ? "Block" : "Line",
      value: a,
      start: n,
      end: p
    };
    e.locations && (x.loc = new rt(this, f, v)), e.ranges && (x.range = [n, p]), t.push(x);
  };
}
var it = 1, Ke = 2, Kt = 4, _i = 8, Wt = 16, Ni = 32, gt = 64, Li = 128, Fe = 256, at = 512, bt = it | Ke | Fe;
function zt(e, t) {
  return Ke | (e ? Kt : 0) | (t ? _i : 0);
}
var ft = 0, Xt = 1, Ie = 2, Oi = 3, Ri = 4, Mi = 5, H = function(t, s, a) {
  this.options = t = ar(t), this.sourceFile = t.sourceFile, this.keywords = Oe(Ys[t.ecmaVersion >= 6 ? 6 : t.sourceType === "module" ? "5module" : 5]);
  var n = "";
  t.allowReserved !== !0 && (n = _t[t.ecmaVersion >= 6 ? 6 : t.ecmaVersion === 5 ? 5 : 3], t.sourceType === "module" && (n += " await")), this.reservedWords = Oe(n);
  var p = (n ? n + " " : "") + _t.strict;
  this.reservedWordsStrict = Oe(p), this.reservedWordsStrictBind = Oe(p + " " + _t.strictBind), this.input = String(s), this.containsEsc = !1, a ? (this.pos = a, this.lineStart = this.input.lastIndexOf(`
`, a - 1) + 1, this.curLine = this.input.slice(0, this.lineStart).split(Y).length) : (this.pos = this.lineStart = 0, this.curLine = 1), this.type = h.eof, this.value = null, this.start = this.end = this.pos, this.startLoc = this.endLoc = this.curPosition(), this.lastTokEndLoc = this.lastTokStartLoc = null, this.lastTokStart = this.lastTokEnd = this.pos, this.context = this.initialContext(), this.exprAllowed = !0, this.inModule = t.sourceType === "module", this.strict = this.inModule || this.strictDirective(this.pos), this.potentialArrowAt = -1, this.potentialArrowInForAwait = !1, this.yieldPos = this.awaitPos = this.awaitIdentPos = 0, this.labels = [], this.undefinedExports = /* @__PURE__ */ Object.create(null), this.pos === 0 && t.allowHashBang && this.input.slice(0, 2) === "#!" && this.skipLineComment(2), this.scopeStack = [], this.enterScope(it), this.regexpState = null, this.privateNameStack = [];
}, Te = { inFunction: { configurable: !0 }, inGenerator: { configurable: !0 }, inAsync: { configurable: !0 }, canAwait: { configurable: !0 }, allowSuper: { configurable: !0 }, allowDirectSuper: { configurable: !0 }, treatFunctionsAsVar: { configurable: !0 }, allowNewDotTarget: { configurable: !0 }, inClassStaticBlock: { configurable: !0 } };
H.prototype.parse = function() {
  var t = this.options.program || this.startNode();
  return this.nextToken(), this.parseTopLevel(t);
};
Te.inFunction.get = function() {
  return (this.currentVarScope().flags & Ke) > 0;
};
Te.inGenerator.get = function() {
  return (this.currentVarScope().flags & _i) > 0;
};
Te.inAsync.get = function() {
  return (this.currentVarScope().flags & Kt) > 0;
};
Te.canAwait.get = function() {
  for (var e = this.scopeStack.length - 1; e >= 0; e--) {
    var t = this.scopeStack[e], s = t.flags;
    if (s & (Fe | at))
      return !1;
    if (s & Ke)
      return (s & Kt) > 0;
  }
  return this.inModule && this.options.ecmaVersion >= 13 || this.options.allowAwaitOutsideFunction;
};
Te.allowSuper.get = function() {
  var e = this.currentThisScope(), t = e.flags;
  return (t & gt) > 0 || this.options.allowSuperOutsideMethod;
};
Te.allowDirectSuper.get = function() {
  return (this.currentThisScope().flags & Li) > 0;
};
Te.treatFunctionsAsVar.get = function() {
  return this.treatFunctionsAsVarInScope(this.currentScope());
};
Te.allowNewDotTarget.get = function() {
  for (var e = this.scopeStack.length - 1; e >= 0; e--) {
    var t = this.scopeStack[e], s = t.flags;
    if (s & (Fe | at) || s & Ke && !(s & Wt))
      return !0;
  }
  return !1;
};
Te.inClassStaticBlock.get = function() {
  return (this.currentVarScope().flags & Fe) > 0;
};
H.extend = function() {
  for (var t = [], s = arguments.length; s--; ) t[s] = arguments[s];
  for (var a = this, n = 0; n < t.length; n++)
    a = t[n](a);
  return a;
};
H.parse = function(t, s) {
  return new this(s, t).parse();
};
H.parseExpressionAt = function(t, s, a) {
  var n = new this(a, t, s);
  return n.nextToken(), n.parseExpression();
};
H.tokenizer = function(t, s) {
  return new this(s, t);
};
Object.defineProperties(H.prototype, Te);
var Z = H.prototype, or = /^(?:'((?:\\[^]|[^'\\])*?)'|"((?:\\[^]|[^"\\])*?)")/;
Z.strictDirective = function(e) {
  if (this.options.ecmaVersion < 5)
    return !1;
  for (; ; ) {
    z.lastIndex = e, e += z.exec(this.input)[0].length;
    var t = or.exec(this.input.slice(e));
    if (!t)
      return !1;
    if ((t[1] || t[2]) === "use strict") {
      z.lastIndex = e + t[0].length;
      var s = z.exec(this.input), a = s.index + s[0].length, n = this.input.charAt(a);
      return n === ";" || n === "}" || Y.test(s[0]) && !(/[(`.[+\-/*%<>=,?^&]/.test(n) || n === "!" && this.input.charAt(a + 1) === "=");
    }
    e += t[0].length, z.lastIndex = e, e += z.exec(this.input)[0].length, this.input[e] === ";" && e++;
  }
};
Z.eat = function(e) {
  return this.type === e ? (this.next(), !0) : !1;
};
Z.isContextual = function(e) {
  return this.type === h.name && this.value === e && !this.containsEsc;
};
Z.eatContextual = function(e) {
  return this.isContextual(e) ? (this.next(), !0) : !1;
};
Z.expectContextual = function(e) {
  this.eatContextual(e) || this.unexpected();
};
Z.canInsertSemicolon = function() {
  return this.type === h.eof || this.type === h.braceR || Y.test(this.input.slice(this.lastTokEnd, this.start));
};
Z.insertSemicolon = function() {
  if (this.canInsertSemicolon())
    return this.options.onInsertedSemicolon && this.options.onInsertedSemicolon(this.lastTokEnd, this.lastTokEndLoc), !0;
};
Z.semicolon = function() {
  !this.eat(h.semi) && !this.insertSemicolon() && this.unexpected();
};
Z.afterTrailingComma = function(e, t) {
  if (this.type === e)
    return this.options.onTrailingComma && this.options.onTrailingComma(this.lastTokStart, this.lastTokStartLoc), t || this.next(), !0;
};
Z.expect = function(e) {
  this.eat(e) || this.unexpected();
};
Z.unexpected = function(e) {
  this.raise(e ?? this.start, "Unexpected token");
};
var Pt = function() {
  this.shorthandAssign = this.trailingComma = this.parenthesizedAssign = this.parenthesizedBind = this.doubleProto = -1;
};
Z.checkPatternErrors = function(e, t) {
  if (e) {
    e.trailingComma > -1 && this.raiseRecoverable(e.trailingComma, "Comma is not permitted after the rest element");
    var s = t ? e.parenthesizedAssign : e.parenthesizedBind;
    s > -1 && this.raiseRecoverable(s, t ? "Assigning to rvalue" : "Parenthesized pattern");
  }
};
Z.checkExpressionErrors = function(e, t) {
  if (!e)
    return !1;
  var s = e.shorthandAssign, a = e.doubleProto;
  if (!t)
    return s >= 0 || a >= 0;
  s >= 0 && this.raise(s, "Shorthand property assignments are valid only in destructuring patterns"), a >= 0 && this.raiseRecoverable(a, "Redefinition of __proto__ property");
};
Z.checkYieldAwaitInDefaultParams = function() {
  this.yieldPos && (!this.awaitPos || this.yieldPos < this.awaitPos) && this.raise(this.yieldPos, "Yield expression cannot be a default value"), this.awaitPos && this.raise(this.awaitPos, "Await expression cannot be a default value");
};
Z.isSimpleAssignTarget = function(e) {
  return e.type === "ParenthesizedExpression" ? this.isSimpleAssignTarget(e.expression) : e.type === "Identifier" || e.type === "MemberExpression";
};
var w = H.prototype;
w.parseTopLevel = function(e) {
  var t = /* @__PURE__ */ Object.create(null);
  for (e.body || (e.body = []); this.type !== h.eof; ) {
    var s = this.parseStatement(null, !0, t);
    e.body.push(s);
  }
  if (this.inModule)
    for (var a = 0, n = Object.keys(this.undefinedExports); a < n.length; a += 1) {
      var p = n[a];
      this.raiseRecoverable(this.undefinedExports[p].start, "Export '" + p + "' is not defined");
    }
  return this.adaptDirectivePrologue(e.body), this.next(), e.sourceType = this.options.sourceType, this.finishNode(e, "Program");
};
var Qt = { kind: "loop" }, ur = { kind: "switch" };
w.isLet = function(e) {
  if (this.options.ecmaVersion < 6 || !this.isContextual("let"))
    return !1;
  z.lastIndex = this.pos;
  var t = z.exec(this.input), s = this.pos + t[0].length, a = this.input.charCodeAt(s);
  if (a === 91 || a === 92)
    return !0;
  if (e)
    return !1;
  if (a === 123 || a > 55295 && a < 56320)
    return !0;
  if (ye(a, !0)) {
    for (var n = s + 1; we(a = this.input.charCodeAt(n), !0); )
      ++n;
    if (a === 92 || a > 55295 && a < 56320)
      return !0;
    var p = this.input.slice(s, n);
    if (!Zs.test(p))
      return !0;
  }
  return !1;
};
w.isAsyncFunction = function() {
  if (this.options.ecmaVersion < 8 || !this.isContextual("async"))
    return !1;
  z.lastIndex = this.pos;
  var e = z.exec(this.input), t = this.pos + e[0].length, s;
  return !Y.test(this.input.slice(this.pos, t)) && this.input.slice(t, t + 8) === "function" && (t + 8 === this.input.length || !(we(s = this.input.charCodeAt(t + 8)) || s > 55295 && s < 56320));
};
w.isUsingKeyword = function(e, t) {
  if (this.options.ecmaVersion < 17 || !this.isContextual(e ? "await" : "using"))
    return !1;
  z.lastIndex = this.pos;
  var s = z.exec(this.input), a = this.pos + s[0].length;
  if (Y.test(this.input.slice(this.pos, a)))
    return !1;
  if (e) {
    var n = a + 5, p;
    if (this.input.slice(a, n) !== "using" || n === this.input.length || we(p = this.input.charCodeAt(n)) || p > 55295 && p < 56320)
      return !1;
    z.lastIndex = n;
    var f = z.exec(this.input);
    if (f && Y.test(this.input.slice(n, n + f[0].length)))
      return !1;
  }
  if (t) {
    var v = a + 2, x;
    if (this.input.slice(a, v) === "of" && (v === this.input.length || !we(x = this.input.charCodeAt(v)) && !(x > 55295 && x < 56320)))
      return !1;
  }
  var o = this.input.charCodeAt(a);
  return ye(o, !0) || o === 92;
};
w.isAwaitUsing = function(e) {
  return this.isUsingKeyword(!0, e);
};
w.isUsing = function(e) {
  return this.isUsingKeyword(!1, e);
};
w.parseStatement = function(e, t, s) {
  var a = this.type, n = this.startNode(), p;
  switch (this.isLet(e) && (a = h._var, p = "let"), a) {
    case h._break:
    case h._continue:
      return this.parseBreakContinueStatement(n, a.keyword);
    case h._debugger:
      return this.parseDebuggerStatement(n);
    case h._do:
      return this.parseDoStatement(n);
    case h._for:
      return this.parseForStatement(n);
    case h._function:
      return e && (this.strict || e !== "if" && e !== "label") && this.options.ecmaVersion >= 6 && this.unexpected(), this.parseFunctionStatement(n, !1, !e);
    case h._class:
      return e && this.unexpected(), this.parseClass(n, !0);
    case h._if:
      return this.parseIfStatement(n);
    case h._return:
      return this.parseReturnStatement(n);
    case h._switch:
      return this.parseSwitchStatement(n);
    case h._throw:
      return this.parseThrowStatement(n);
    case h._try:
      return this.parseTryStatement(n);
    case h._const:
    case h._var:
      return p = p || this.value, e && p !== "var" && this.unexpected(), this.parseVarStatement(n, p);
    case h._while:
      return this.parseWhileStatement(n);
    case h._with:
      return this.parseWithStatement(n);
    case h.braceL:
      return this.parseBlock(!0, n);
    case h.semi:
      return this.parseEmptyStatement(n);
    case h._export:
    case h._import:
      if (this.options.ecmaVersion > 10 && a === h._import) {
        z.lastIndex = this.pos;
        var f = z.exec(this.input), v = this.pos + f[0].length, x = this.input.charCodeAt(v);
        if (x === 40 || x === 46)
          return this.parseExpressionStatement(n, this.parseExpression());
      }
      return this.options.allowImportExportEverywhere || (t || this.raise(this.start, "'import' and 'export' may only appear at the top level"), this.inModule || this.raise(this.start, "'import' and 'export' may appear only with 'sourceType: module'")), a === h._import ? this.parseImport(n) : this.parseExport(n, s);
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
      var S = this.value, I = this.parseExpression();
      return a === h.name && I.type === "Identifier" && this.eat(h.colon) ? this.parseLabeledStatement(n, S, I, e) : this.parseExpressionStatement(n, I);
  }
};
w.parseBreakContinueStatement = function(e, t) {
  var s = t === "break";
  this.next(), this.eat(h.semi) || this.insertSemicolon() ? e.label = null : this.type !== h.name ? this.unexpected() : (e.label = this.parseIdent(), this.semicolon());
  for (var a = 0; a < this.labels.length; ++a) {
    var n = this.labels[a];
    if ((e.label == null || n.name === e.label.name) && (n.kind != null && (s || n.kind === "loop") || e.label && s))
      break;
  }
  return a === this.labels.length && this.raise(e.start, "Unsyntactic " + t), this.finishNode(e, s ? "BreakStatement" : "ContinueStatement");
};
w.parseDebuggerStatement = function(e) {
  return this.next(), this.semicolon(), this.finishNode(e, "DebuggerStatement");
};
w.parseDoStatement = function(e) {
  return this.next(), this.labels.push(Qt), e.body = this.parseStatement("do"), this.labels.pop(), this.expect(h._while), e.test = this.parseParenExpression(), this.options.ecmaVersion >= 6 ? this.eat(h.semi) : this.semicolon(), this.finishNode(e, "DoWhileStatement");
};
w.parseForStatement = function(e) {
  this.next();
  var t = this.options.ecmaVersion >= 9 && this.canAwait && this.eatContextual("await") ? this.lastTokStart : -1;
  if (this.labels.push(Qt), this.enterScope(0), this.expect(h.parenL), this.type === h.semi)
    return t > -1 && this.unexpected(t), this.parseFor(e, null);
  var s = this.isLet();
  if (this.type === h._var || this.type === h._const || s) {
    var a = this.startNode(), n = s ? "let" : this.value;
    return this.next(), this.parseVar(a, !0, n), this.finishNode(a, "VariableDeclaration"), this.parseForAfterInit(e, a, t);
  }
  var p = this.isContextual("let"), f = !1, v = this.isUsing(!0) ? "using" : this.isAwaitUsing(!0) ? "await using" : null;
  if (v) {
    var x = this.startNode();
    return this.next(), v === "await using" && this.next(), this.parseVar(x, !0, v), this.finishNode(x, "VariableDeclaration"), this.parseForAfterInit(e, x, t);
  }
  var o = this.containsEsc, S = new Pt(), I = this.start, B = t > -1 ? this.parseExprSubscripts(S, "await") : this.parseExpression(!0, S);
  return this.type === h._in || (f = this.options.ecmaVersion >= 6 && this.isContextual("of")) ? (t > -1 ? (this.type === h._in && this.unexpected(t), e.await = !0) : f && this.options.ecmaVersion >= 8 && (B.start === I && !o && B.type === "Identifier" && B.name === "async" ? this.unexpected() : this.options.ecmaVersion >= 9 && (e.await = !1)), p && f && this.raise(B.start, "The left-hand side of a for-of loop may not start with 'let'."), this.toAssignable(B, !1, S), this.checkLValPattern(B), this.parseForIn(e, B)) : (this.checkExpressionErrors(S, !0), t > -1 && this.unexpected(t), this.parseFor(e, B));
};
w.parseForAfterInit = function(e, t, s) {
  return (this.type === h._in || this.options.ecmaVersion >= 6 && this.isContextual("of")) && t.declarations.length === 1 ? (this.options.ecmaVersion >= 9 && (this.type === h._in ? s > -1 && this.unexpected(s) : e.await = s > -1), this.parseForIn(e, t)) : (s > -1 && this.unexpected(s), this.parseFor(e, t));
};
w.parseFunctionStatement = function(e, t, s) {
  return this.next(), this.parseFunction(e, Ze | (s ? 0 : Dt), !1, t);
};
w.parseIfStatement = function(e) {
  return this.next(), e.test = this.parseParenExpression(), e.consequent = this.parseStatement("if"), e.alternate = this.eat(h._else) ? this.parseStatement("if") : null, this.finishNode(e, "IfStatement");
};
w.parseReturnStatement = function(e) {
  return !this.inFunction && !this.options.allowReturnOutsideFunction && this.raise(this.start, "'return' outside of function"), this.next(), this.eat(h.semi) || this.insertSemicolon() ? e.argument = null : (e.argument = this.parseExpression(), this.semicolon()), this.finishNode(e, "ReturnStatement");
};
w.parseSwitchStatement = function(e) {
  this.next(), e.discriminant = this.parseParenExpression(), e.cases = [], this.expect(h.braceL), this.labels.push(ur), this.enterScope(0);
  for (var t, s = !1; this.type !== h.braceR; )
    if (this.type === h._case || this.type === h._default) {
      var a = this.type === h._case;
      t && this.finishNode(t, "SwitchCase"), e.cases.push(t = this.startNode()), t.consequent = [], this.next(), a ? t.test = this.parseExpression() : (s && this.raiseRecoverable(this.lastTokStart, "Multiple default clauses"), s = !0, t.test = null), this.expect(h.colon);
    } else
      t || this.unexpected(), t.consequent.push(this.parseStatement(null));
  return this.exitScope(), t && this.finishNode(t, "SwitchCase"), this.next(), this.labels.pop(), this.finishNode(e, "SwitchStatement");
};
w.parseThrowStatement = function(e) {
  return this.next(), Y.test(this.input.slice(this.lastTokEnd, this.start)) && this.raise(this.lastTokEnd, "Illegal newline after throw"), e.argument = this.parseExpression(), this.semicolon(), this.finishNode(e, "ThrowStatement");
};
var hr = [];
w.parseCatchClauseParam = function() {
  var e = this.parseBindingAtom(), t = e.type === "Identifier";
  return this.enterScope(t ? Ni : 0), this.checkLValPattern(e, t ? Ri : Ie), this.expect(h.parenR), e;
};
w.parseTryStatement = function(e) {
  if (this.next(), e.block = this.parseBlock(), e.handler = null, this.type === h._catch) {
    var t = this.startNode();
    this.next(), this.eat(h.parenL) ? t.param = this.parseCatchClauseParam() : (this.options.ecmaVersion < 10 && this.unexpected(), t.param = null, this.enterScope(0)), t.body = this.parseBlock(!1), this.exitScope(), e.handler = this.finishNode(t, "CatchClause");
  }
  return e.finalizer = this.eat(h._finally) ? this.parseBlock() : null, !e.handler && !e.finalizer && this.raise(e.start, "Missing catch or finally clause"), this.finishNode(e, "TryStatement");
};
w.parseVarStatement = function(e, t, s) {
  return this.next(), this.parseVar(e, !1, t, s), this.semicolon(), this.finishNode(e, "VariableDeclaration");
};
w.parseWhileStatement = function(e) {
  return this.next(), e.test = this.parseParenExpression(), this.labels.push(Qt), e.body = this.parseStatement("while"), this.labels.pop(), this.finishNode(e, "WhileStatement");
};
w.parseWithStatement = function(e) {
  return this.strict && this.raise(this.start, "'with' in strict mode"), this.next(), e.object = this.parseParenExpression(), e.body = this.parseStatement("with"), this.finishNode(e, "WithStatement");
};
w.parseEmptyStatement = function(e) {
  return this.next(), this.finishNode(e, "EmptyStatement");
};
w.parseLabeledStatement = function(e, t, s, a) {
  for (var n = 0, p = this.labels; n < p.length; n += 1) {
    var f = p[n];
    f.name === t && this.raise(s.start, "Label '" + t + "' is already declared");
  }
  for (var v = this.type.isLoop ? "loop" : this.type === h._switch ? "switch" : null, x = this.labels.length - 1; x >= 0; x--) {
    var o = this.labels[x];
    if (o.statementStart === e.start)
      o.statementStart = this.start, o.kind = v;
    else
      break;
  }
  return this.labels.push({ name: t, kind: v, statementStart: this.start }), e.body = this.parseStatement(a ? a.indexOf("label") === -1 ? a + "label" : a : "label"), this.labels.pop(), e.label = s, this.finishNode(e, "LabeledStatement");
};
w.parseExpressionStatement = function(e, t) {
  return e.expression = t, this.semicolon(), this.finishNode(e, "ExpressionStatement");
};
w.parseBlock = function(e, t, s) {
  for (e === void 0 && (e = !0), t === void 0 && (t = this.startNode()), t.body = [], this.expect(h.braceL), e && this.enterScope(0); this.type !== h.braceR; ) {
    var a = this.parseStatement(null);
    t.body.push(a);
  }
  return s && (this.strict = !1), this.next(), e && this.exitScope(), this.finishNode(t, "BlockStatement");
};
w.parseFor = function(e, t) {
  return e.init = t, this.expect(h.semi), e.test = this.type === h.semi ? null : this.parseExpression(), this.expect(h.semi), e.update = this.type === h.parenR ? null : this.parseExpression(), this.expect(h.parenR), e.body = this.parseStatement("for"), this.exitScope(), this.labels.pop(), this.finishNode(e, "ForStatement");
};
w.parseForIn = function(e, t) {
  var s = this.type === h._in;
  return this.next(), t.type === "VariableDeclaration" && t.declarations[0].init != null && (!s || this.options.ecmaVersion < 8 || this.strict || t.kind !== "var" || t.declarations[0].id.type !== "Identifier") && this.raise(
    t.start,
    (s ? "for-in" : "for-of") + " loop variable declaration may not have an initializer"
  ), e.left = t, e.right = s ? this.parseExpression() : this.parseMaybeAssign(), this.expect(h.parenR), e.body = this.parseStatement("for"), this.exitScope(), this.labels.pop(), this.finishNode(e, s ? "ForInStatement" : "ForOfStatement");
};
w.parseVar = function(e, t, s, a) {
  for (e.declarations = [], e.kind = s; ; ) {
    var n = this.startNode();
    if (this.parseVarId(n, s), this.eat(h.eq) ? n.init = this.parseMaybeAssign(t) : !a && s === "const" && !(this.type === h._in || this.options.ecmaVersion >= 6 && this.isContextual("of")) ? this.unexpected() : !a && (s === "using" || s === "await using") && this.options.ecmaVersion >= 17 && this.type !== h._in && !this.isContextual("of") ? this.raise(this.lastTokEnd, "Missing initializer in " + s + " declaration") : !a && n.id.type !== "Identifier" && !(t && (this.type === h._in || this.isContextual("of"))) ? this.raise(this.lastTokEnd, "Complex binding patterns require an initialization value") : n.init = null, e.declarations.push(this.finishNode(n, "VariableDeclarator")), !this.eat(h.comma))
      break;
  }
  return e;
};
w.parseVarId = function(e, t) {
  e.id = t === "using" || t === "await using" ? this.parseIdent() : this.parseBindingAtom(), this.checkLValPattern(e.id, t === "var" ? Xt : Ie, !1);
};
var Ze = 1, Dt = 2, Di = 4;
w.parseFunction = function(e, t, s, a, n) {
  this.initFunction(e), (this.options.ecmaVersion >= 9 || this.options.ecmaVersion >= 6 && !a) && (this.type === h.star && t & Dt && this.unexpected(), e.generator = this.eat(h.star)), this.options.ecmaVersion >= 8 && (e.async = !!a), t & Ze && (e.id = t & Di && this.type !== h.name ? null : this.parseIdent(), e.id && !(t & Dt) && this.checkLValSimple(e.id, this.strict || e.generator || e.async ? this.treatFunctionsAsVar ? Xt : Ie : Oi));
  var p = this.yieldPos, f = this.awaitPos, v = this.awaitIdentPos;
  return this.yieldPos = 0, this.awaitPos = 0, this.awaitIdentPos = 0, this.enterScope(zt(e.async, e.generator)), t & Ze || (e.id = this.type === h.name ? this.parseIdent() : null), this.parseFunctionParams(e), this.parseFunctionBody(e, s, !1, n), this.yieldPos = p, this.awaitPos = f, this.awaitIdentPos = v, this.finishNode(e, t & Ze ? "FunctionDeclaration" : "FunctionExpression");
};
w.parseFunctionParams = function(e) {
  this.expect(h.parenL), e.params = this.parseBindingList(h.parenR, !1, this.options.ecmaVersion >= 8), this.checkYieldAwaitInDefaultParams();
};
w.parseClass = function(e, t) {
  this.next();
  var s = this.strict;
  this.strict = !0, this.parseClassId(e, t), this.parseClassSuper(e);
  var a = this.enterClassBody(), n = this.startNode(), p = !1;
  for (n.body = [], this.expect(h.braceL); this.type !== h.braceR; ) {
    var f = this.parseClassElement(e.superClass !== null);
    f && (n.body.push(f), f.type === "MethodDefinition" && f.kind === "constructor" ? (p && this.raiseRecoverable(f.start, "Duplicate constructor in the same class"), p = !0) : f.key && f.key.type === "PrivateIdentifier" && cr(a, f) && this.raiseRecoverable(f.key.start, "Identifier '#" + f.key.name + "' has already been declared"));
  }
  return this.strict = s, this.next(), e.body = this.finishNode(n, "ClassBody"), this.exitClassBody(), this.finishNode(e, t ? "ClassDeclaration" : "ClassExpression");
};
w.parseClassElement = function(e) {
  if (this.eat(h.semi))
    return null;
  var t = this.options.ecmaVersion, s = this.startNode(), a = "", n = !1, p = !1, f = "method", v = !1;
  if (this.eatContextual("static")) {
    if (t >= 13 && this.eat(h.braceL))
      return this.parseClassStaticBlock(s), s;
    this.isClassElementNameStart() || this.type === h.star ? v = !0 : a = "static";
  }
  if (s.static = v, !a && t >= 8 && this.eatContextual("async") && ((this.isClassElementNameStart() || this.type === h.star) && !this.canInsertSemicolon() ? p = !0 : a = "async"), !a && (t >= 9 || !p) && this.eat(h.star) && (n = !0), !a && !p && !n) {
    var x = this.value;
    (this.eatContextual("get") || this.eatContextual("set")) && (this.isClassElementNameStart() ? f = x : a = x);
  }
  if (a ? (s.computed = !1, s.key = this.startNodeAt(this.lastTokStart, this.lastTokStartLoc), s.key.name = a, this.finishNode(s.key, "Identifier")) : this.parseClassElementName(s), t < 13 || this.type === h.parenL || f !== "method" || n || p) {
    var o = !s.static && dt(s, "constructor"), S = o && e;
    o && f !== "method" && this.raise(s.key.start, "Constructor can't have get/set modifier"), s.kind = o ? "constructor" : f, this.parseClassMethod(s, n, p, S);
  } else
    this.parseClassField(s);
  return s;
};
w.isClassElementNameStart = function() {
  return this.type === h.name || this.type === h.privateId || this.type === h.num || this.type === h.string || this.type === h.bracketL || this.type.keyword;
};
w.parseClassElementName = function(e) {
  this.type === h.privateId ? (this.value === "constructor" && this.raise(this.start, "Classes can't have an element named '#constructor'"), e.computed = !1, e.key = this.parsePrivateIdent()) : this.parsePropertyName(e);
};
w.parseClassMethod = function(e, t, s, a) {
  var n = e.key;
  e.kind === "constructor" ? (t && this.raise(n.start, "Constructor can't be a generator"), s && this.raise(n.start, "Constructor can't be an async method")) : e.static && dt(e, "prototype") && this.raise(n.start, "Classes may not have a static property named prototype");
  var p = e.value = this.parseMethod(t, s, a);
  return e.kind === "get" && p.params.length !== 0 && this.raiseRecoverable(p.start, "getter should have no params"), e.kind === "set" && p.params.length !== 1 && this.raiseRecoverable(p.start, "setter should have exactly one param"), e.kind === "set" && p.params[0].type === "RestElement" && this.raiseRecoverable(p.params[0].start, "Setter cannot use rest params"), this.finishNode(e, "MethodDefinition");
};
w.parseClassField = function(e) {
  return dt(e, "constructor") ? this.raise(e.key.start, "Classes can't have a field named 'constructor'") : e.static && dt(e, "prototype") && this.raise(e.key.start, "Classes can't have a static field named 'prototype'"), this.eat(h.eq) ? (this.enterScope(at | gt), e.value = this.parseMaybeAssign(), this.exitScope()) : e.value = null, this.semicolon(), this.finishNode(e, "PropertyDefinition");
};
w.parseClassStaticBlock = function(e) {
  e.body = [];
  var t = this.labels;
  for (this.labels = [], this.enterScope(Fe | gt); this.type !== h.braceR; ) {
    var s = this.parseStatement(null);
    e.body.push(s);
  }
  return this.next(), this.exitScope(), this.labels = t, this.finishNode(e, "StaticBlock");
};
w.parseClassId = function(e, t) {
  this.type === h.name ? (e.id = this.parseIdent(), t && this.checkLValSimple(e.id, Ie, !1)) : (t === !0 && this.unexpected(), e.id = null);
};
w.parseClassSuper = function(e) {
  e.superClass = this.eat(h._extends) ? this.parseExprSubscripts(null, !1) : null;
};
w.enterClassBody = function() {
  var e = { declared: /* @__PURE__ */ Object.create(null), used: [] };
  return this.privateNameStack.push(e), e.declared;
};
w.exitClassBody = function() {
  var e = this.privateNameStack.pop(), t = e.declared, s = e.used;
  if (this.options.checkPrivateFields)
    for (var a = this.privateNameStack.length, n = a === 0 ? null : this.privateNameStack[a - 1], p = 0; p < s.length; ++p) {
      var f = s[p];
      Ge(t, f.name) || (n ? n.used.push(f) : this.raiseRecoverable(f.start, "Private field '#" + f.name + "' must be declared in an enclosing class"));
    }
};
function cr(e, t) {
  var s = t.key.name, a = e[s], n = "true";
  return t.type === "MethodDefinition" && (t.kind === "get" || t.kind === "set") && (n = (t.static ? "s" : "i") + t.kind), a === "iget" && n === "iset" || a === "iset" && n === "iget" || a === "sget" && n === "sset" || a === "sset" && n === "sget" ? (e[s] = "true", !1) : a ? !0 : (e[s] = n, !1);
}
function dt(e, t) {
  var s = e.computed, a = e.key;
  return !s && (a.type === "Identifier" && a.name === t || a.type === "Literal" && a.value === t);
}
w.parseExportAllDeclaration = function(e, t) {
  return this.options.ecmaVersion >= 11 && (this.eatContextual("as") ? (e.exported = this.parseModuleExportName(), this.checkExport(t, e.exported, this.lastTokStart)) : e.exported = null), this.expectContextual("from"), this.type !== h.string && this.unexpected(), e.source = this.parseExprAtom(), this.options.ecmaVersion >= 16 && (e.attributes = this.parseWithClause()), this.semicolon(), this.finishNode(e, "ExportAllDeclaration");
};
w.parseExport = function(e, t) {
  if (this.next(), this.eat(h.star))
    return this.parseExportAllDeclaration(e, t);
  if (this.eat(h._default))
    return this.checkExport(t, "default", this.lastTokStart), e.declaration = this.parseExportDefaultDeclaration(), this.finishNode(e, "ExportDefaultDeclaration");
  if (this.shouldParseExportStatement())
    e.declaration = this.parseExportDeclaration(e), e.declaration.type === "VariableDeclaration" ? this.checkVariableExport(t, e.declaration.declarations) : this.checkExport(t, e.declaration.id, e.declaration.id.start), e.specifiers = [], e.source = null, this.options.ecmaVersion >= 16 && (e.attributes = []);
  else {
    if (e.declaration = null, e.specifiers = this.parseExportSpecifiers(t), this.eatContextual("from"))
      this.type !== h.string && this.unexpected(), e.source = this.parseExprAtom(), this.options.ecmaVersion >= 16 && (e.attributes = this.parseWithClause());
    else {
      for (var s = 0, a = e.specifiers; s < a.length; s += 1) {
        var n = a[s];
        this.checkUnreserved(n.local), this.checkLocalExport(n.local), n.local.type === "Literal" && this.raise(n.local.start, "A string literal cannot be used as an exported binding without `from`.");
      }
      e.source = null, this.options.ecmaVersion >= 16 && (e.attributes = []);
    }
    this.semicolon();
  }
  return this.finishNode(e, "ExportNamedDeclaration");
};
w.parseExportDeclaration = function(e) {
  return this.parseStatement(null);
};
w.parseExportDefaultDeclaration = function() {
  var e;
  if (this.type === h._function || (e = this.isAsyncFunction())) {
    var t = this.startNode();
    return this.next(), e && this.next(), this.parseFunction(t, Ze | Di, !1, e);
  } else if (this.type === h._class) {
    var s = this.startNode();
    return this.parseClass(s, "nullableID");
  } else {
    var a = this.parseMaybeAssign();
    return this.semicolon(), a;
  }
};
w.checkExport = function(e, t, s) {
  e && (typeof t != "string" && (t = t.type === "Identifier" ? t.name : t.value), Ge(e, t) && this.raiseRecoverable(s, "Duplicate export '" + t + "'"), e[t] = !0);
};
w.checkPatternExport = function(e, t) {
  var s = t.type;
  if (s === "Identifier")
    this.checkExport(e, t, t.start);
  else if (s === "ObjectPattern")
    for (var a = 0, n = t.properties; a < n.length; a += 1) {
      var p = n[a];
      this.checkPatternExport(e, p);
    }
  else if (s === "ArrayPattern")
    for (var f = 0, v = t.elements; f < v.length; f += 1) {
      var x = v[f];
      x && this.checkPatternExport(e, x);
    }
  else s === "Property" ? this.checkPatternExport(e, t.value) : s === "AssignmentPattern" ? this.checkPatternExport(e, t.left) : s === "RestElement" && this.checkPatternExport(e, t.argument);
};
w.checkVariableExport = function(e, t) {
  if (e)
    for (var s = 0, a = t; s < a.length; s += 1) {
      var n = a[s];
      this.checkPatternExport(e, n.id);
    }
};
w.shouldParseExportStatement = function() {
  return this.type.keyword === "var" || this.type.keyword === "const" || this.type.keyword === "class" || this.type.keyword === "function" || this.isLet() || this.isAsyncFunction();
};
w.parseExportSpecifier = function(e) {
  var t = this.startNode();
  return t.local = this.parseModuleExportName(), t.exported = this.eatContextual("as") ? this.parseModuleExportName() : t.local, this.checkExport(
    e,
    t.exported,
    t.exported.start
  ), this.finishNode(t, "ExportSpecifier");
};
w.parseExportSpecifiers = function(e) {
  var t = [], s = !0;
  for (this.expect(h.braceL); !this.eat(h.braceR); ) {
    if (s)
      s = !1;
    else if (this.expect(h.comma), this.afterTrailingComma(h.braceR))
      break;
    t.push(this.parseExportSpecifier(e));
  }
  return t;
};
w.parseImport = function(e) {
  return this.next(), this.type === h.string ? (e.specifiers = hr, e.source = this.parseExprAtom()) : (e.specifiers = this.parseImportSpecifiers(), this.expectContextual("from"), e.source = this.type === h.string ? this.parseExprAtom() : this.unexpected()), this.options.ecmaVersion >= 16 && (e.attributes = this.parseWithClause()), this.semicolon(), this.finishNode(e, "ImportDeclaration");
};
w.parseImportSpecifier = function() {
  var e = this.startNode();
  return e.imported = this.parseModuleExportName(), this.eatContextual("as") ? e.local = this.parseIdent() : (this.checkUnreserved(e.imported), e.local = e.imported), this.checkLValSimple(e.local, Ie), this.finishNode(e, "ImportSpecifier");
};
w.parseImportDefaultSpecifier = function() {
  var e = this.startNode();
  return e.local = this.parseIdent(), this.checkLValSimple(e.local, Ie), this.finishNode(e, "ImportDefaultSpecifier");
};
w.parseImportNamespaceSpecifier = function() {
  var e = this.startNode();
  return this.next(), this.expectContextual("as"), e.local = this.parseIdent(), this.checkLValSimple(e.local, Ie), this.finishNode(e, "ImportNamespaceSpecifier");
};
w.parseImportSpecifiers = function() {
  var e = [], t = !0;
  if (this.type === h.name && (e.push(this.parseImportDefaultSpecifier()), !this.eat(h.comma)))
    return e;
  if (this.type === h.star)
    return e.push(this.parseImportNamespaceSpecifier()), e;
  for (this.expect(h.braceL); !this.eat(h.braceR); ) {
    if (t)
      t = !1;
    else if (this.expect(h.comma), this.afterTrailingComma(h.braceR))
      break;
    e.push(this.parseImportSpecifier());
  }
  return e;
};
w.parseWithClause = function() {
  var e = [];
  if (!this.eat(h._with))
    return e;
  this.expect(h.braceL);
  for (var t = {}, s = !0; !this.eat(h.braceR); ) {
    if (s)
      s = !1;
    else if (this.expect(h.comma), this.afterTrailingComma(h.braceR))
      break;
    var a = this.parseImportAttribute(), n = a.key.type === "Identifier" ? a.key.name : a.key.value;
    Ge(t, n) && this.raiseRecoverable(a.key.start, "Duplicate attribute key '" + n + "'"), t[n] = !0, e.push(a);
  }
  return e;
};
w.parseImportAttribute = function() {
  var e = this.startNode();
  return e.key = this.type === h.string ? this.parseExprAtom() : this.parseIdent(this.options.allowReserved !== "never"), this.expect(h.colon), this.type !== h.string && this.unexpected(), e.value = this.parseExprAtom(), this.finishNode(e, "ImportAttribute");
};
w.parseModuleExportName = function() {
  if (this.options.ecmaVersion >= 13 && this.type === h.string) {
    var e = this.parseLiteral(this.value);
    return rr.test(e.value) && this.raise(e.start, "An export name cannot include a lone surrogate."), e;
  }
  return this.parseIdent(!0);
};
w.adaptDirectivePrologue = function(e) {
  for (var t = 0; t < e.length && this.isDirectiveCandidate(e[t]); ++t)
    e[t].directive = e[t].expression.raw.slice(1, -1);
};
w.isDirectiveCandidate = function(e) {
  return this.options.ecmaVersion >= 5 && e.type === "ExpressionStatement" && e.expression.type === "Literal" && typeof e.expression.value == "string" && // Reject parenthesized strings.
  (this.input[e.start] === '"' || this.input[e.start] === "'");
};
var fe = H.prototype;
fe.toAssignable = function(e, t, s) {
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
        e.type = "ObjectPattern", s && this.checkPatternErrors(s, !0);
        for (var a = 0, n = e.properties; a < n.length; a += 1) {
          var p = n[a];
          this.toAssignable(p, t), p.type === "RestElement" && (p.argument.type === "ArrayPattern" || p.argument.type === "ObjectPattern") && this.raise(p.argument.start, "Unexpected token");
        }
        break;
      case "Property":
        e.kind !== "init" && this.raise(e.key.start, "Object pattern can't contain getter or setter"), this.toAssignable(e.value, t);
        break;
      case "ArrayExpression":
        e.type = "ArrayPattern", s && this.checkPatternErrors(s, !0), this.toAssignableList(e.elements, t);
        break;
      case "SpreadElement":
        e.type = "RestElement", this.toAssignable(e.argument, t), e.argument.type === "AssignmentPattern" && this.raise(e.argument.start, "Rest elements cannot have a default value");
        break;
      case "AssignmentExpression":
        e.operator !== "=" && this.raise(e.left.end, "Only '=' operator can be used for specifying default value."), e.type = "AssignmentPattern", delete e.operator, this.toAssignable(e.left, t);
        break;
      case "ParenthesizedExpression":
        this.toAssignable(e.expression, t, s);
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
  else s && this.checkPatternErrors(s, !0);
  return e;
};
fe.toAssignableList = function(e, t) {
  for (var s = e.length, a = 0; a < s; a++) {
    var n = e[a];
    n && this.toAssignable(n, t);
  }
  if (s) {
    var p = e[s - 1];
    this.options.ecmaVersion === 6 && t && p && p.type === "RestElement" && p.argument.type !== "Identifier" && this.unexpected(p.argument.start);
  }
  return e;
};
fe.parseSpread = function(e) {
  var t = this.startNode();
  return this.next(), t.argument = this.parseMaybeAssign(!1, e), this.finishNode(t, "SpreadElement");
};
fe.parseRestBinding = function() {
  var e = this.startNode();
  return this.next(), this.options.ecmaVersion === 6 && this.type !== h.name && this.unexpected(), e.argument = this.parseBindingAtom(), this.finishNode(e, "RestElement");
};
fe.parseBindingAtom = function() {
  if (this.options.ecmaVersion >= 6)
    switch (this.type) {
      case h.bracketL:
        var e = this.startNode();
        return this.next(), e.elements = this.parseBindingList(h.bracketR, !0, !0), this.finishNode(e, "ArrayPattern");
      case h.braceL:
        return this.parseObj(!0);
    }
  return this.parseIdent();
};
fe.parseBindingList = function(e, t, s, a) {
  for (var n = [], p = !0; !this.eat(e); )
    if (p ? p = !1 : this.expect(h.comma), t && this.type === h.comma)
      n.push(null);
    else {
      if (s && this.afterTrailingComma(e))
        break;
      if (this.type === h.ellipsis) {
        var f = this.parseRestBinding();
        this.parseBindingListItem(f), n.push(f), this.type === h.comma && this.raiseRecoverable(this.start, "Comma is not permitted after the rest element"), this.expect(e);
        break;
      } else
        n.push(this.parseAssignableListItem(a));
    }
  return n;
};
fe.parseAssignableListItem = function(e) {
  var t = this.parseMaybeDefault(this.start, this.startLoc);
  return this.parseBindingListItem(t), t;
};
fe.parseBindingListItem = function(e) {
  return e;
};
fe.parseMaybeDefault = function(e, t, s) {
  if (s = s || this.parseBindingAtom(), this.options.ecmaVersion < 6 || !this.eat(h.eq))
    return s;
  var a = this.startNodeAt(e, t);
  return a.left = s, a.right = this.parseMaybeAssign(), this.finishNode(a, "AssignmentPattern");
};
fe.checkLValSimple = function(e, t, s) {
  t === void 0 && (t = ft);
  var a = t !== ft;
  switch (e.type) {
    case "Identifier":
      this.strict && this.reservedWordsStrictBind.test(e.name) && this.raiseRecoverable(e.start, (a ? "Binding " : "Assigning to ") + e.name + " in strict mode"), a && (t === Ie && e.name === "let" && this.raiseRecoverable(e.start, "let is disallowed as a lexically bound name"), s && (Ge(s, e.name) && this.raiseRecoverable(e.start, "Argument name clash"), s[e.name] = !0), t !== Mi && this.declareName(e.name, t, e.start));
      break;
    case "ChainExpression":
      this.raiseRecoverable(e.start, "Optional chaining cannot appear in left-hand side");
      break;
    case "MemberExpression":
      a && this.raiseRecoverable(e.start, "Binding member expression");
      break;
    case "ParenthesizedExpression":
      return a && this.raiseRecoverable(e.start, "Binding parenthesized expression"), this.checkLValSimple(e.expression, t, s);
    default:
      this.raise(e.start, (a ? "Binding" : "Assigning to") + " rvalue");
  }
};
fe.checkLValPattern = function(e, t, s) {
  switch (t === void 0 && (t = ft), e.type) {
    case "ObjectPattern":
      for (var a = 0, n = e.properties; a < n.length; a += 1) {
        var p = n[a];
        this.checkLValInnerPattern(p, t, s);
      }
      break;
    case "ArrayPattern":
      for (var f = 0, v = e.elements; f < v.length; f += 1) {
        var x = v[f];
        x && this.checkLValInnerPattern(x, t, s);
      }
      break;
    default:
      this.checkLValSimple(e, t, s);
  }
};
fe.checkLValInnerPattern = function(e, t, s) {
  switch (t === void 0 && (t = ft), e.type) {
    case "Property":
      this.checkLValInnerPattern(e.value, t, s);
      break;
    case "AssignmentPattern":
      this.checkLValPattern(e.left, t, s);
      break;
    case "RestElement":
      this.checkLValPattern(e.argument, t, s);
      break;
    default:
      this.checkLValPattern(e, t, s);
  }
};
var Q = function(t, s, a, n, p) {
  this.token = t, this.isExpr = !!s, this.preserveSpace = !!a, this.override = n, this.generator = !!p;
}, F = {
  b_stat: new Q("{", !1),
  b_expr: new Q("{", !0),
  b_tmpl: new Q("${", !1),
  p_stat: new Q("(", !1),
  p_expr: new Q("(", !0),
  q_tmpl: new Q("`", !0, !0, function(e) {
    return e.tryReadTemplateToken();
  }),
  f_stat: new Q("function", !1),
  f_expr: new Q("function", !0),
  f_expr_gen: new Q("function", !0, !1, null, !0),
  f_gen: new Q("function", !1, !1, null, !0)
}, We = H.prototype;
We.initialContext = function() {
  return [F.b_stat];
};
We.curContext = function() {
  return this.context[this.context.length - 1];
};
We.braceIsBlock = function(e) {
  var t = this.curContext();
  return t === F.f_expr || t === F.f_stat ? !0 : e === h.colon && (t === F.b_stat || t === F.b_expr) ? !t.isExpr : e === h._return || e === h.name && this.exprAllowed ? Y.test(this.input.slice(this.lastTokEnd, this.start)) : e === h._else || e === h.semi || e === h.eof || e === h.parenR || e === h.arrow ? !0 : e === h.braceL ? t === F.b_stat : e === h._var || e === h._const || e === h.name ? !1 : !this.exprAllowed;
};
We.inGeneratorContext = function() {
  for (var e = this.context.length - 1; e >= 1; e--) {
    var t = this.context[e];
    if (t.token === "function")
      return t.generator;
  }
  return !1;
};
We.updateContext = function(e) {
  var t, s = this.type;
  s.keyword && e === h.dot ? this.exprAllowed = !1 : (t = s.updateContext) ? t.call(this, e) : this.exprAllowed = s.beforeExpr;
};
We.overrideContext = function(e) {
  this.curContext() !== e && (this.context[this.context.length - 1] = e);
};
h.parenR.updateContext = h.braceR.updateContext = function() {
  if (this.context.length === 1) {
    this.exprAllowed = !0;
    return;
  }
  var e = this.context.pop();
  e === F.b_stat && this.curContext().token === "function" && (e = this.context.pop()), this.exprAllowed = !e.isExpr;
};
h.braceL.updateContext = function(e) {
  this.context.push(this.braceIsBlock(e) ? F.b_stat : F.b_expr), this.exprAllowed = !0;
};
h.dollarBraceL.updateContext = function() {
  this.context.push(F.b_tmpl), this.exprAllowed = !0;
};
h.parenL.updateContext = function(e) {
  var t = e === h._if || e === h._for || e === h._with || e === h._while;
  this.context.push(t ? F.p_stat : F.p_expr), this.exprAllowed = !0;
};
h.incDec.updateContext = function() {
};
h._function.updateContext = h._class.updateContext = function(e) {
  e.beforeExpr && e !== h._else && !(e === h.semi && this.curContext() !== F.p_stat) && !(e === h._return && Y.test(this.input.slice(this.lastTokEnd, this.start))) && !((e === h.colon || e === h.braceL) && this.curContext() === F.b_stat) ? this.context.push(F.f_expr) : this.context.push(F.f_stat), this.exprAllowed = !1;
};
h.colon.updateContext = function() {
  this.curContext().token === "function" && this.context.pop(), this.exprAllowed = !0;
};
h.backQuote.updateContext = function() {
  this.curContext() === F.q_tmpl ? this.context.pop() : this.context.push(F.q_tmpl), this.exprAllowed = !1;
};
h.star.updateContext = function(e) {
  if (e === h._function) {
    var t = this.context.length - 1;
    this.context[t] === F.f_expr ? this.context[t] = F.f_expr_gen : this.context[t] = F.f_gen;
  }
  this.exprAllowed = !0;
};
h.name.updateContext = function(e) {
  var t = !1;
  this.options.ecmaVersion >= 6 && e !== h.dot && (this.value === "of" && !this.exprAllowed || this.value === "yield" && this.inGeneratorContext()) && (t = !0), this.exprAllowed = t;
};
var N = H.prototype;
N.checkPropClash = function(e, t, s) {
  if (!(this.options.ecmaVersion >= 9 && e.type === "SpreadElement") && !(this.options.ecmaVersion >= 6 && (e.computed || e.method || e.shorthand))) {
    var a = e.key, n;
    switch (a.type) {
      case "Identifier":
        n = a.name;
        break;
      case "Literal":
        n = String(a.value);
        break;
      default:
        return;
    }
    var p = e.kind;
    if (this.options.ecmaVersion >= 6) {
      n === "__proto__" && p === "init" && (t.proto && (s ? s.doubleProto < 0 && (s.doubleProto = a.start) : this.raiseRecoverable(a.start, "Redefinition of __proto__ property")), t.proto = !0);
      return;
    }
    n = "$" + n;
    var f = t[n];
    if (f) {
      var v;
      p === "init" ? v = this.strict && f.init || f.get || f.set : v = f.init || f[p], v && this.raiseRecoverable(a.start, "Redefinition of property");
    } else
      f = t[n] = {
        init: !1,
        get: !1,
        set: !1
      };
    f[p] = !0;
  }
};
N.parseExpression = function(e, t) {
  var s = this.start, a = this.startLoc, n = this.parseMaybeAssign(e, t);
  if (this.type === h.comma) {
    var p = this.startNodeAt(s, a);
    for (p.expressions = [n]; this.eat(h.comma); )
      p.expressions.push(this.parseMaybeAssign(e, t));
    return this.finishNode(p, "SequenceExpression");
  }
  return n;
};
N.parseMaybeAssign = function(e, t, s) {
  if (this.isContextual("yield")) {
    if (this.inGenerator)
      return this.parseYield(e);
    this.exprAllowed = !1;
  }
  var a = !1, n = -1, p = -1, f = -1;
  t ? (n = t.parenthesizedAssign, p = t.trailingComma, f = t.doubleProto, t.parenthesizedAssign = t.trailingComma = -1) : (t = new Pt(), a = !0);
  var v = this.start, x = this.startLoc;
  (this.type === h.parenL || this.type === h.name) && (this.potentialArrowAt = this.start, this.potentialArrowInForAwait = e === "await");
  var o = this.parseMaybeConditional(e, t);
  if (s && (o = s.call(this, o, v, x)), this.type.isAssign) {
    var S = this.startNodeAt(v, x);
    return S.operator = this.value, this.type === h.eq && (o = this.toAssignable(o, !1, t)), a || (t.parenthesizedAssign = t.trailingComma = t.doubleProto = -1), t.shorthandAssign >= o.start && (t.shorthandAssign = -1), this.type === h.eq ? this.checkLValPattern(o) : this.checkLValSimple(o), S.left = o, this.next(), S.right = this.parseMaybeAssign(e), f > -1 && (t.doubleProto = f), this.finishNode(S, "AssignmentExpression");
  } else
    a && this.checkExpressionErrors(t, !0);
  return n > -1 && (t.parenthesizedAssign = n), p > -1 && (t.trailingComma = p), o;
};
N.parseMaybeConditional = function(e, t) {
  var s = this.start, a = this.startLoc, n = this.parseExprOps(e, t);
  if (this.checkExpressionErrors(t))
    return n;
  if (this.eat(h.question)) {
    var p = this.startNodeAt(s, a);
    return p.test = n, p.consequent = this.parseMaybeAssign(), this.expect(h.colon), p.alternate = this.parseMaybeAssign(e), this.finishNode(p, "ConditionalExpression");
  }
  return n;
};
N.parseExprOps = function(e, t) {
  var s = this.start, a = this.startLoc, n = this.parseMaybeUnary(t, !1, !1, e);
  return this.checkExpressionErrors(t) || n.start === s && n.type === "ArrowFunctionExpression" ? n : this.parseExprOp(n, s, a, -1, e);
};
N.parseExprOp = function(e, t, s, a, n) {
  var p = this.type.binop;
  if (p != null && (!n || this.type !== h._in) && p > a) {
    var f = this.type === h.logicalOR || this.type === h.logicalAND, v = this.type === h.coalesce;
    v && (p = h.logicalAND.binop);
    var x = this.value;
    this.next();
    var o = this.start, S = this.startLoc, I = this.parseExprOp(this.parseMaybeUnary(null, !1, !1, n), o, S, p, n), B = this.buildBinary(t, s, e, I, x, f || v);
    return (f && this.type === h.coalesce || v && (this.type === h.logicalOR || this.type === h.logicalAND)) && this.raiseRecoverable(this.start, "Logical expressions and coalesce expressions cannot be mixed. Wrap either by parentheses"), this.parseExprOp(B, t, s, a, n);
  }
  return e;
};
N.buildBinary = function(e, t, s, a, n, p) {
  a.type === "PrivateIdentifier" && this.raise(a.start, "Private identifier can only be left side of binary expression");
  var f = this.startNodeAt(e, t);
  return f.left = s, f.operator = n, f.right = a, this.finishNode(f, p ? "LogicalExpression" : "BinaryExpression");
};
N.parseMaybeUnary = function(e, t, s, a) {
  var n = this.start, p = this.startLoc, f;
  if (this.isContextual("await") && this.canAwait)
    f = this.parseAwait(a), t = !0;
  else if (this.type.prefix) {
    var v = this.startNode(), x = this.type === h.incDec;
    v.operator = this.value, v.prefix = !0, this.next(), v.argument = this.parseMaybeUnary(null, !0, x, a), this.checkExpressionErrors(e, !0), x ? this.checkLValSimple(v.argument) : this.strict && v.operator === "delete" && Vi(v.argument) ? this.raiseRecoverable(v.start, "Deleting local variable in strict mode") : v.operator === "delete" && Vt(v.argument) ? this.raiseRecoverable(v.start, "Private fields can not be deleted") : t = !0, f = this.finishNode(v, x ? "UpdateExpression" : "UnaryExpression");
  } else if (!t && this.type === h.privateId)
    (a || this.privateNameStack.length === 0) && this.options.checkPrivateFields && this.unexpected(), f = this.parsePrivateIdent(), this.type !== h._in && this.unexpected();
  else {
    if (f = this.parseExprSubscripts(e, a), this.checkExpressionErrors(e))
      return f;
    for (; this.type.postfix && !this.canInsertSemicolon(); ) {
      var o = this.startNodeAt(n, p);
      o.operator = this.value, o.prefix = !1, o.argument = f, this.checkLValSimple(f), this.next(), f = this.finishNode(o, "UpdateExpression");
    }
  }
  if (!s && this.eat(h.starstar))
    if (t)
      this.unexpected(this.lastTokStart);
    else
      return this.buildBinary(n, p, f, this.parseMaybeUnary(null, !1, !1, a), "**", !1);
  else
    return f;
};
function Vi(e) {
  return e.type === "Identifier" || e.type === "ParenthesizedExpression" && Vi(e.expression);
}
function Vt(e) {
  return e.type === "MemberExpression" && e.property.type === "PrivateIdentifier" || e.type === "ChainExpression" && Vt(e.expression) || e.type === "ParenthesizedExpression" && Vt(e.expression);
}
N.parseExprSubscripts = function(e, t) {
  var s = this.start, a = this.startLoc, n = this.parseExprAtom(e, t);
  if (n.type === "ArrowFunctionExpression" && this.input.slice(this.lastTokStart, this.lastTokEnd) !== ")")
    return n;
  var p = this.parseSubscripts(n, s, a, !1, t);
  return e && p.type === "MemberExpression" && (e.parenthesizedAssign >= p.start && (e.parenthesizedAssign = -1), e.parenthesizedBind >= p.start && (e.parenthesizedBind = -1), e.trailingComma >= p.start && (e.trailingComma = -1)), p;
};
N.parseSubscripts = function(e, t, s, a, n) {
  for (var p = this.options.ecmaVersion >= 8 && e.type === "Identifier" && e.name === "async" && this.lastTokEnd === e.end && !this.canInsertSemicolon() && e.end - e.start === 5 && this.potentialArrowAt === e.start, f = !1; ; ) {
    var v = this.parseSubscript(e, t, s, a, p, f, n);
    if (v.optional && (f = !0), v === e || v.type === "ArrowFunctionExpression") {
      if (f) {
        var x = this.startNodeAt(t, s);
        x.expression = v, v = this.finishNode(x, "ChainExpression");
      }
      return v;
    }
    e = v;
  }
};
N.shouldParseAsyncArrow = function() {
  return !this.canInsertSemicolon() && this.eat(h.arrow);
};
N.parseSubscriptAsyncArrow = function(e, t, s, a) {
  return this.parseArrowExpression(this.startNodeAt(e, t), s, !0, a);
};
N.parseSubscript = function(e, t, s, a, n, p, f) {
  var v = this.options.ecmaVersion >= 11, x = v && this.eat(h.questionDot);
  a && x && this.raise(this.lastTokStart, "Optional chaining cannot appear in the callee of new expressions");
  var o = this.eat(h.bracketL);
  if (o || x && this.type !== h.parenL && this.type !== h.backQuote || this.eat(h.dot)) {
    var S = this.startNodeAt(t, s);
    S.object = e, o ? (S.property = this.parseExpression(), this.expect(h.bracketR)) : this.type === h.privateId && e.type !== "Super" ? S.property = this.parsePrivateIdent() : S.property = this.parseIdent(this.options.allowReserved !== "never"), S.computed = !!o, v && (S.optional = x), e = this.finishNode(S, "MemberExpression");
  } else if (!a && this.eat(h.parenL)) {
    var I = new Pt(), B = this.yieldPos, oe = this.awaitPos, de = this.awaitIdentPos;
    this.yieldPos = 0, this.awaitPos = 0, this.awaitIdentPos = 0;
    var Be = this.parseExprList(h.parenR, this.options.ecmaVersion >= 8, !1, I);
    if (n && !x && this.shouldParseAsyncArrow())
      return this.checkPatternErrors(I, !1), this.checkYieldAwaitInDefaultParams(), this.awaitIdentPos > 0 && this.raise(this.awaitIdentPos, "Cannot use 'await' as identifier inside an async function"), this.yieldPos = B, this.awaitPos = oe, this.awaitIdentPos = de, this.parseSubscriptAsyncArrow(t, s, Be, f);
    this.checkExpressionErrors(I, !0), this.yieldPos = B || this.yieldPos, this.awaitPos = oe || this.awaitPos, this.awaitIdentPos = de || this.awaitIdentPos;
    var _ = this.startNodeAt(t, s);
    _.callee = e, _.arguments = Be, v && (_.optional = x), e = this.finishNode(_, "CallExpression");
  } else if (this.type === h.backQuote) {
    (x || p) && this.raise(this.start, "Optional chaining cannot appear in the tag of tagged template expressions");
    var ee = this.startNodeAt(t, s);
    ee.tag = e, ee.quasi = this.parseTemplate({ isTagged: !0 }), e = this.finishNode(ee, "TaggedTemplateExpression");
  }
  return e;
};
N.parseExprAtom = function(e, t, s) {
  this.type === h.slash && this.readRegexp();
  var a, n = this.potentialArrowAt === this.start;
  switch (this.type) {
    case h._super:
      return this.allowSuper || this.raise(this.start, "'super' keyword outside a method"), a = this.startNode(), this.next(), this.type === h.parenL && !this.allowDirectSuper && this.raise(a.start, "super() call outside constructor of a subclass"), this.type !== h.dot && this.type !== h.bracketL && this.type !== h.parenL && this.unexpected(), this.finishNode(a, "Super");
    case h._this:
      return a = this.startNode(), this.next(), this.finishNode(a, "ThisExpression");
    case h.name:
      var p = this.start, f = this.startLoc, v = this.containsEsc, x = this.parseIdent(!1);
      if (this.options.ecmaVersion >= 8 && !v && x.name === "async" && !this.canInsertSemicolon() && this.eat(h._function))
        return this.overrideContext(F.f_expr), this.parseFunction(this.startNodeAt(p, f), 0, !1, !0, t);
      if (n && !this.canInsertSemicolon()) {
        if (this.eat(h.arrow))
          return this.parseArrowExpression(this.startNodeAt(p, f), [x], !1, t);
        if (this.options.ecmaVersion >= 8 && x.name === "async" && this.type === h.name && !v && (!this.potentialArrowInForAwait || this.value !== "of" || this.containsEsc))
          return x = this.parseIdent(!1), (this.canInsertSemicolon() || !this.eat(h.arrow)) && this.unexpected(), this.parseArrowExpression(this.startNodeAt(p, f), [x], !0, t);
      }
      return x;
    case h.regexp:
      var o = this.value;
      return a = this.parseLiteral(o.value), a.regex = { pattern: o.pattern, flags: o.flags }, a;
    case h.num:
    case h.string:
      return this.parseLiteral(this.value);
    case h._null:
    case h._true:
    case h._false:
      return a = this.startNode(), a.value = this.type === h._null ? null : this.type === h._true, a.raw = this.type.keyword, this.next(), this.finishNode(a, "Literal");
    case h.parenL:
      var S = this.start, I = this.parseParenAndDistinguishExpression(n, t);
      return e && (e.parenthesizedAssign < 0 && !this.isSimpleAssignTarget(I) && (e.parenthesizedAssign = S), e.parenthesizedBind < 0 && (e.parenthesizedBind = S)), I;
    case h.bracketL:
      return a = this.startNode(), this.next(), a.elements = this.parseExprList(h.bracketR, !0, !0, e), this.finishNode(a, "ArrayExpression");
    case h.braceL:
      return this.overrideContext(F.b_expr), this.parseObj(!1, e);
    case h._function:
      return a = this.startNode(), this.next(), this.parseFunction(a, 0);
    case h._class:
      return this.parseClass(this.startNode(), !1);
    case h._new:
      return this.parseNew();
    case h.backQuote:
      return this.parseTemplate();
    case h._import:
      return this.options.ecmaVersion >= 11 ? this.parseExprImport(s) : this.unexpected();
    default:
      return this.parseExprAtomDefault();
  }
};
N.parseExprAtomDefault = function() {
  this.unexpected();
};
N.parseExprImport = function(e) {
  var t = this.startNode();
  if (this.containsEsc && this.raiseRecoverable(this.start, "Escape sequence in keyword import"), this.next(), this.type === h.parenL && !e)
    return this.parseDynamicImport(t);
  if (this.type === h.dot) {
    var s = this.startNodeAt(t.start, t.loc && t.loc.start);
    return s.name = "import", t.meta = this.finishNode(s, "Identifier"), this.parseImportMeta(t);
  } else
    this.unexpected();
};
N.parseDynamicImport = function(e) {
  if (this.next(), e.source = this.parseMaybeAssign(), this.options.ecmaVersion >= 16)
    this.eat(h.parenR) ? e.options = null : (this.expect(h.comma), this.afterTrailingComma(h.parenR) ? e.options = null : (e.options = this.parseMaybeAssign(), this.eat(h.parenR) || (this.expect(h.comma), this.afterTrailingComma(h.parenR) || this.unexpected())));
  else if (!this.eat(h.parenR)) {
    var t = this.start;
    this.eat(h.comma) && this.eat(h.parenR) ? this.raiseRecoverable(t, "Trailing comma is not allowed in import()") : this.unexpected(t);
  }
  return this.finishNode(e, "ImportExpression");
};
N.parseImportMeta = function(e) {
  this.next();
  var t = this.containsEsc;
  return e.property = this.parseIdent(!0), e.property.name !== "meta" && this.raiseRecoverable(e.property.start, "The only valid meta property for import is 'import.meta'"), t && this.raiseRecoverable(e.start, "'import.meta' must not contain escaped characters"), this.options.sourceType !== "module" && !this.options.allowImportExportEverywhere && this.raiseRecoverable(e.start, "Cannot use 'import.meta' outside a module"), this.finishNode(e, "MetaProperty");
};
N.parseLiteral = function(e) {
  var t = this.startNode();
  return t.value = e, t.raw = this.input.slice(this.start, this.end), t.raw.charCodeAt(t.raw.length - 1) === 110 && (t.bigint = t.value != null ? t.value.toString() : t.raw.slice(0, -1).replace(/_/g, "")), this.next(), this.finishNode(t, "Literal");
};
N.parseParenExpression = function() {
  this.expect(h.parenL);
  var e = this.parseExpression();
  return this.expect(h.parenR), e;
};
N.shouldParseArrow = function(e) {
  return !this.canInsertSemicolon();
};
N.parseParenAndDistinguishExpression = function(e, t) {
  var s = this.start, a = this.startLoc, n, p = this.options.ecmaVersion >= 8;
  if (this.options.ecmaVersion >= 6) {
    this.next();
    var f = this.start, v = this.startLoc, x = [], o = !0, S = !1, I = new Pt(), B = this.yieldPos, oe = this.awaitPos, de;
    for (this.yieldPos = 0, this.awaitPos = 0; this.type !== h.parenR; )
      if (o ? o = !1 : this.expect(h.comma), p && this.afterTrailingComma(h.parenR, !0)) {
        S = !0;
        break;
      } else if (this.type === h.ellipsis) {
        de = this.start, x.push(this.parseParenItem(this.parseRestBinding())), this.type === h.comma && this.raiseRecoverable(
          this.start,
          "Comma is not permitted after the rest element"
        );
        break;
      } else
        x.push(this.parseMaybeAssign(!1, I, this.parseParenItem));
    var Be = this.lastTokEnd, _ = this.lastTokEndLoc;
    if (this.expect(h.parenR), e && this.shouldParseArrow(x) && this.eat(h.arrow))
      return this.checkPatternErrors(I, !1), this.checkYieldAwaitInDefaultParams(), this.yieldPos = B, this.awaitPos = oe, this.parseParenArrowList(s, a, x, t);
    (!x.length || S) && this.unexpected(this.lastTokStart), de && this.unexpected(de), this.checkExpressionErrors(I, !0), this.yieldPos = B || this.yieldPos, this.awaitPos = oe || this.awaitPos, x.length > 1 ? (n = this.startNodeAt(f, v), n.expressions = x, this.finishNodeAt(n, "SequenceExpression", Be, _)) : n = x[0];
  } else
    n = this.parseParenExpression();
  if (this.options.preserveParens) {
    var ee = this.startNodeAt(s, a);
    return ee.expression = n, this.finishNode(ee, "ParenthesizedExpression");
  } else
    return n;
};
N.parseParenItem = function(e) {
  return e;
};
N.parseParenArrowList = function(e, t, s, a) {
  return this.parseArrowExpression(this.startNodeAt(e, t), s, !1, a);
};
var pr = [];
N.parseNew = function() {
  this.containsEsc && this.raiseRecoverable(this.start, "Escape sequence in keyword new");
  var e = this.startNode();
  if (this.next(), this.options.ecmaVersion >= 6 && this.type === h.dot) {
    var t = this.startNodeAt(e.start, e.loc && e.loc.start);
    t.name = "new", e.meta = this.finishNode(t, "Identifier"), this.next();
    var s = this.containsEsc;
    return e.property = this.parseIdent(!0), e.property.name !== "target" && this.raiseRecoverable(e.property.start, "The only valid meta property for new is 'new.target'"), s && this.raiseRecoverable(e.start, "'new.target' must not contain escaped characters"), this.allowNewDotTarget || this.raiseRecoverable(e.start, "'new.target' can only be used in functions and class static block"), this.finishNode(e, "MetaProperty");
  }
  var a = this.start, n = this.startLoc;
  return e.callee = this.parseSubscripts(this.parseExprAtom(null, !1, !0), a, n, !0, !1), this.eat(h.parenL) ? e.arguments = this.parseExprList(h.parenR, this.options.ecmaVersion >= 8, !1) : e.arguments = pr, this.finishNode(e, "NewExpression");
};
N.parseTemplateElement = function(e) {
  var t = e.isTagged, s = this.startNode();
  return this.type === h.invalidTemplate ? (t || this.raiseRecoverable(this.start, "Bad escape sequence in untagged template literal"), s.value = {
    raw: this.value.replace(/\r\n?/g, `
`),
    cooked: null
  }) : s.value = {
    raw: this.input.slice(this.start, this.end).replace(/\r\n?/g, `
`),
    cooked: this.value
  }, this.next(), s.tail = this.type === h.backQuote, this.finishNode(s, "TemplateElement");
};
N.parseTemplate = function(e) {
  e === void 0 && (e = {});
  var t = e.isTagged;
  t === void 0 && (t = !1);
  var s = this.startNode();
  this.next(), s.expressions = [];
  var a = this.parseTemplateElement({ isTagged: t });
  for (s.quasis = [a]; !a.tail; )
    this.type === h.eof && this.raise(this.pos, "Unterminated template literal"), this.expect(h.dollarBraceL), s.expressions.push(this.parseExpression()), this.expect(h.braceR), s.quasis.push(a = this.parseTemplateElement({ isTagged: t }));
  return this.next(), this.finishNode(s, "TemplateLiteral");
};
N.isAsyncProp = function(e) {
  return !e.computed && e.key.type === "Identifier" && e.key.name === "async" && (this.type === h.name || this.type === h.num || this.type === h.string || this.type === h.bracketL || this.type.keyword || this.options.ecmaVersion >= 9 && this.type === h.star) && !Y.test(this.input.slice(this.lastTokEnd, this.start));
};
N.parseObj = function(e, t) {
  var s = this.startNode(), a = !0, n = {};
  for (s.properties = [], this.next(); !this.eat(h.braceR); ) {
    if (a)
      a = !1;
    else if (this.expect(h.comma), this.options.ecmaVersion >= 5 && this.afterTrailingComma(h.braceR))
      break;
    var p = this.parseProperty(e, t);
    e || this.checkPropClash(p, n, t), s.properties.push(p);
  }
  return this.finishNode(s, e ? "ObjectPattern" : "ObjectExpression");
};
N.parseProperty = function(e, t) {
  var s = this.startNode(), a, n, p, f;
  if (this.options.ecmaVersion >= 9 && this.eat(h.ellipsis))
    return e ? (s.argument = this.parseIdent(!1), this.type === h.comma && this.raiseRecoverable(this.start, "Comma is not permitted after the rest element"), this.finishNode(s, "RestElement")) : (s.argument = this.parseMaybeAssign(!1, t), this.type === h.comma && t && t.trailingComma < 0 && (t.trailingComma = this.start), this.finishNode(s, "SpreadElement"));
  this.options.ecmaVersion >= 6 && (s.method = !1, s.shorthand = !1, (e || t) && (p = this.start, f = this.startLoc), e || (a = this.eat(h.star)));
  var v = this.containsEsc;
  return this.parsePropertyName(s), !e && !v && this.options.ecmaVersion >= 8 && !a && this.isAsyncProp(s) ? (n = !0, a = this.options.ecmaVersion >= 9 && this.eat(h.star), this.parsePropertyName(s)) : n = !1, this.parsePropertyValue(s, e, a, n, p, f, t, v), this.finishNode(s, "Property");
};
N.parseGetterSetter = function(e) {
  var t = e.key.name;
  this.parsePropertyName(e), e.value = this.parseMethod(!1), e.kind = t;
  var s = e.kind === "get" ? 0 : 1;
  if (e.value.params.length !== s) {
    var a = e.value.start;
    e.kind === "get" ? this.raiseRecoverable(a, "getter should have no params") : this.raiseRecoverable(a, "setter should have exactly one param");
  } else
    e.kind === "set" && e.value.params[0].type === "RestElement" && this.raiseRecoverable(e.value.params[0].start, "Setter cannot use rest params");
};
N.parsePropertyValue = function(e, t, s, a, n, p, f, v) {
  (s || a) && this.type === h.colon && this.unexpected(), this.eat(h.colon) ? (e.value = t ? this.parseMaybeDefault(this.start, this.startLoc) : this.parseMaybeAssign(!1, f), e.kind = "init") : this.options.ecmaVersion >= 6 && this.type === h.parenL ? (t && this.unexpected(), e.method = !0, e.value = this.parseMethod(s, a), e.kind = "init") : !t && !v && this.options.ecmaVersion >= 5 && !e.computed && e.key.type === "Identifier" && (e.key.name === "get" || e.key.name === "set") && this.type !== h.comma && this.type !== h.braceR && this.type !== h.eq ? ((s || a) && this.unexpected(), this.parseGetterSetter(e)) : this.options.ecmaVersion >= 6 && !e.computed && e.key.type === "Identifier" ? ((s || a) && this.unexpected(), this.checkUnreserved(e.key), e.key.name === "await" && !this.awaitIdentPos && (this.awaitIdentPos = n), t ? e.value = this.parseMaybeDefault(n, p, this.copyNode(e.key)) : this.type === h.eq && f ? (f.shorthandAssign < 0 && (f.shorthandAssign = this.start), e.value = this.parseMaybeDefault(n, p, this.copyNode(e.key))) : e.value = this.copyNode(e.key), e.kind = "init", e.shorthand = !0) : this.unexpected();
};
N.parsePropertyName = function(e) {
  if (this.options.ecmaVersion >= 6) {
    if (this.eat(h.bracketL))
      return e.computed = !0, e.key = this.parseMaybeAssign(), this.expect(h.bracketR), e.key;
    e.computed = !1;
  }
  return e.key = this.type === h.num || this.type === h.string ? this.parseExprAtom() : this.parseIdent(this.options.allowReserved !== "never");
};
N.initFunction = function(e) {
  e.id = null, this.options.ecmaVersion >= 6 && (e.generator = e.expression = !1), this.options.ecmaVersion >= 8 && (e.async = !1);
};
N.parseMethod = function(e, t, s) {
  var a = this.startNode(), n = this.yieldPos, p = this.awaitPos, f = this.awaitIdentPos;
  return this.initFunction(a), this.options.ecmaVersion >= 6 && (a.generator = e), this.options.ecmaVersion >= 8 && (a.async = !!t), this.yieldPos = 0, this.awaitPos = 0, this.awaitIdentPos = 0, this.enterScope(zt(t, a.generator) | gt | (s ? Li : 0)), this.expect(h.parenL), a.params = this.parseBindingList(h.parenR, !1, this.options.ecmaVersion >= 8), this.checkYieldAwaitInDefaultParams(), this.parseFunctionBody(a, !1, !0, !1), this.yieldPos = n, this.awaitPos = p, this.awaitIdentPos = f, this.finishNode(a, "FunctionExpression");
};
N.parseArrowExpression = function(e, t, s, a) {
  var n = this.yieldPos, p = this.awaitPos, f = this.awaitIdentPos;
  return this.enterScope(zt(s, !1) | Wt), this.initFunction(e), this.options.ecmaVersion >= 8 && (e.async = !!s), this.yieldPos = 0, this.awaitPos = 0, this.awaitIdentPos = 0, e.params = this.toAssignableList(t, !0), this.parseFunctionBody(e, !0, !1, a), this.yieldPos = n, this.awaitPos = p, this.awaitIdentPos = f, this.finishNode(e, "ArrowFunctionExpression");
};
N.parseFunctionBody = function(e, t, s, a) {
  var n = t && this.type !== h.braceL, p = this.strict, f = !1;
  if (n)
    e.body = this.parseMaybeAssign(a), e.expression = !0, this.checkParams(e, !1);
  else {
    var v = this.options.ecmaVersion >= 7 && !this.isSimpleParamList(e.params);
    (!p || v) && (f = this.strictDirective(this.end), f && v && this.raiseRecoverable(e.start, "Illegal 'use strict' directive in function with non-simple parameter list"));
    var x = this.labels;
    this.labels = [], f && (this.strict = !0), this.checkParams(e, !p && !f && !t && !s && this.isSimpleParamList(e.params)), this.strict && e.id && this.checkLValSimple(e.id, Mi), e.body = this.parseBlock(!1, void 0, f && !p), e.expression = !1, this.adaptDirectivePrologue(e.body.body), this.labels = x;
  }
  this.exitScope();
};
N.isSimpleParamList = function(e) {
  for (var t = 0, s = e; t < s.length; t += 1) {
    var a = s[t];
    if (a.type !== "Identifier")
      return !1;
  }
  return !0;
};
N.checkParams = function(e, t) {
  for (var s = /* @__PURE__ */ Object.create(null), a = 0, n = e.params; a < n.length; a += 1) {
    var p = n[a];
    this.checkLValInnerPattern(p, Xt, t ? null : s);
  }
};
N.parseExprList = function(e, t, s, a) {
  for (var n = [], p = !0; !this.eat(e); ) {
    if (p)
      p = !1;
    else if (this.expect(h.comma), t && this.afterTrailingComma(e))
      break;
    var f = void 0;
    s && this.type === h.comma ? f = null : this.type === h.ellipsis ? (f = this.parseSpread(a), a && this.type === h.comma && a.trailingComma < 0 && (a.trailingComma = this.start)) : f = this.parseMaybeAssign(!1, a), n.push(f);
  }
  return n;
};
N.checkUnreserved = function(e) {
  var t = e.start, s = e.end, a = e.name;
  if (this.inGenerator && a === "yield" && this.raiseRecoverable(t, "Cannot use 'yield' as identifier inside a generator"), this.inAsync && a === "await" && this.raiseRecoverable(t, "Cannot use 'await' as identifier inside an async function"), !(this.currentThisScope().flags & bt) && a === "arguments" && this.raiseRecoverable(t, "Cannot use 'arguments' in class field initializer"), this.inClassStaticBlock && (a === "arguments" || a === "await") && this.raise(t, "Cannot use " + a + " in class static initialization block"), this.keywords.test(a) && this.raise(t, "Unexpected keyword '" + a + "'"), !(this.options.ecmaVersion < 6 && this.input.slice(t, s).indexOf("\\") !== -1)) {
    var n = this.strict ? this.reservedWordsStrict : this.reservedWords;
    n.test(a) && (!this.inAsync && a === "await" && this.raiseRecoverable(t, "Cannot use keyword 'await' outside an async function"), this.raiseRecoverable(t, "The keyword '" + a + "' is reserved"));
  }
};
N.parseIdent = function(e) {
  var t = this.parseIdentNode();
  return this.next(!!e), this.finishNode(t, "Identifier"), e || (this.checkUnreserved(t), t.name === "await" && !this.awaitIdentPos && (this.awaitIdentPos = t.start)), t;
};
N.parseIdentNode = function() {
  var e = this.startNode();
  return this.type === h.name ? e.name = this.value : this.type.keyword ? (e.name = this.type.keyword, (e.name === "class" || e.name === "function") && (this.lastTokEnd !== this.lastTokStart + 1 || this.input.charCodeAt(this.lastTokStart) !== 46) && this.context.pop(), this.type = h.name) : this.unexpected(), e;
};
N.parsePrivateIdent = function() {
  var e = this.startNode();
  return this.type === h.privateId ? e.name = this.value : this.unexpected(), this.next(), this.finishNode(e, "PrivateIdentifier"), this.options.checkPrivateFields && (this.privateNameStack.length === 0 ? this.raise(e.start, "Private field '#" + e.name + "' must be declared in an enclosing class") : this.privateNameStack[this.privateNameStack.length - 1].used.push(e)), e;
};
N.parseYield = function(e) {
  this.yieldPos || (this.yieldPos = this.start);
  var t = this.startNode();
  return this.next(), this.type === h.semi || this.canInsertSemicolon() || this.type !== h.star && !this.type.startsExpr ? (t.delegate = !1, t.argument = null) : (t.delegate = this.eat(h.star), t.argument = this.parseMaybeAssign(e)), this.finishNode(t, "YieldExpression");
};
N.parseAwait = function(e) {
  this.awaitPos || (this.awaitPos = this.start);
  var t = this.startNode();
  return this.next(), t.argument = this.parseMaybeUnary(null, !0, !1, e), this.finishNode(t, "AwaitExpression");
};
var mt = H.prototype;
mt.raise = function(e, t) {
  var s = Gt(this.input, e);
  t += " (" + s.line + ":" + s.column + ")", this.sourceFile && (t += " in " + this.sourceFile);
  var a = new SyntaxError(t);
  throw a.pos = e, a.loc = s, a.raisedAt = this.pos, a;
};
mt.raiseRecoverable = mt.raise;
mt.curPosition = function() {
  if (this.options.locations)
    return new qe(this.curLine, this.pos - this.lineStart);
};
var Me = H.prototype, lr = function(t) {
  this.flags = t, this.var = [], this.lexical = [], this.functions = [];
};
Me.enterScope = function(e) {
  this.scopeStack.push(new lr(e));
};
Me.exitScope = function() {
  this.scopeStack.pop();
};
Me.treatFunctionsAsVarInScope = function(e) {
  return e.flags & Ke || !this.inModule && e.flags & it;
};
Me.declareName = function(e, t, s) {
  var a = !1;
  if (t === Ie) {
    var n = this.currentScope();
    a = n.lexical.indexOf(e) > -1 || n.functions.indexOf(e) > -1 || n.var.indexOf(e) > -1, n.lexical.push(e), this.inModule && n.flags & it && delete this.undefinedExports[e];
  } else if (t === Ri) {
    var p = this.currentScope();
    p.lexical.push(e);
  } else if (t === Oi) {
    var f = this.currentScope();
    this.treatFunctionsAsVar ? a = f.lexical.indexOf(e) > -1 : a = f.lexical.indexOf(e) > -1 || f.var.indexOf(e) > -1, f.functions.push(e);
  } else
    for (var v = this.scopeStack.length - 1; v >= 0; --v) {
      var x = this.scopeStack[v];
      if (x.lexical.indexOf(e) > -1 && !(x.flags & Ni && x.lexical[0] === e) || !this.treatFunctionsAsVarInScope(x) && x.functions.indexOf(e) > -1) {
        a = !0;
        break;
      }
      if (x.var.push(e), this.inModule && x.flags & it && delete this.undefinedExports[e], x.flags & bt)
        break;
    }
  a && this.raiseRecoverable(s, "Identifier '" + e + "' has already been declared");
};
Me.checkLocalExport = function(e) {
  this.scopeStack[0].lexical.indexOf(e.name) === -1 && this.scopeStack[0].var.indexOf(e.name) === -1 && (this.undefinedExports[e.name] = e);
};
Me.currentScope = function() {
  return this.scopeStack[this.scopeStack.length - 1];
};
Me.currentVarScope = function() {
  for (var e = this.scopeStack.length - 1; ; e--) {
    var t = this.scopeStack[e];
    if (t.flags & (bt | at | Fe))
      return t;
  }
};
Me.currentThisScope = function() {
  for (var e = this.scopeStack.length - 1; ; e--) {
    var t = this.scopeStack[e];
    if (t.flags & (bt | at | Fe) && !(t.flags & Wt))
      return t;
  }
};
var nt = function(t, s, a) {
  this.type = "", this.start = s, this.end = 0, t.options.locations && (this.loc = new rt(t, a)), t.options.directSourceFile && (this.sourceFile = t.options.directSourceFile), t.options.ranges && (this.range = [s, 0]);
}, ot = H.prototype;
ot.startNode = function() {
  return new nt(this, this.start, this.startLoc);
};
ot.startNodeAt = function(e, t) {
  return new nt(this, e, t);
};
function ji(e, t, s, a) {
  return e.type = t, e.end = s, this.options.locations && (e.loc.end = a), this.options.ranges && (e.range[1] = s), e;
}
ot.finishNode = function(e, t) {
  return ji.call(this, e, t, this.lastTokEnd, this.lastTokEndLoc);
};
ot.finishNodeAt = function(e, t, s, a) {
  return ji.call(this, e, t, s, a);
};
ot.copyNode = function(e) {
  var t = new nt(this, e.start, this.startLoc);
  for (var s in e)
    t[s] = e[s];
  return t;
};
var fr = "Gara Garay Gukh Gurung_Khema Hrkt Katakana_Or_Hiragana Kawi Kirat_Rai Krai Nag_Mundari Nagm Ol_Onal Onao Sunu Sunuwar Todhri Todr Tulu_Tigalari Tutg Unknown Zzzz", Fi = "ASCII ASCII_Hex_Digit AHex Alphabetic Alpha Any Assigned Bidi_Control Bidi_C Bidi_Mirrored Bidi_M Case_Ignorable CI Cased Changes_When_Casefolded CWCF Changes_When_Casemapped CWCM Changes_When_Lowercased CWL Changes_When_NFKC_Casefolded CWKCF Changes_When_Titlecased CWT Changes_When_Uppercased CWU Dash Default_Ignorable_Code_Point DI Deprecated Dep Diacritic Dia Emoji Emoji_Component Emoji_Modifier Emoji_Modifier_Base Emoji_Presentation Extender Ext Grapheme_Base Gr_Base Grapheme_Extend Gr_Ext Hex_Digit Hex IDS_Binary_Operator IDSB IDS_Trinary_Operator IDST ID_Continue IDC ID_Start IDS Ideographic Ideo Join_Control Join_C Logical_Order_Exception LOE Lowercase Lower Math Noncharacter_Code_Point NChar Pattern_Syntax Pat_Syn Pattern_White_Space Pat_WS Quotation_Mark QMark Radical Regional_Indicator RI Sentence_Terminal STerm Soft_Dotted SD Terminal_Punctuation Term Unified_Ideograph UIdeo Uppercase Upper Variation_Selector VS White_Space space XID_Continue XIDC XID_Start XIDS", Bi = Fi + " Extended_Pictographic", Ui = Bi, $i = Ui + " EBase EComp EMod EPres ExtPict", qi = $i, dr = qi, mr = {
  9: Fi,
  10: Bi,
  11: Ui,
  12: $i,
  13: qi,
  14: dr
}, yr = "Basic_Emoji Emoji_Keycap_Sequence RGI_Emoji_Modifier_Sequence RGI_Emoji_Flag_Sequence RGI_Emoji_Tag_Sequence RGI_Emoji_ZWJ_Sequence RGI_Emoji", xr = {
  9: "",
  10: "",
  11: "",
  12: "",
  13: "",
  14: yr
}, ui = "Cased_Letter LC Close_Punctuation Pe Connector_Punctuation Pc Control Cc cntrl Currency_Symbol Sc Dash_Punctuation Pd Decimal_Number Nd digit Enclosing_Mark Me Final_Punctuation Pf Format Cf Initial_Punctuation Pi Letter L Letter_Number Nl Line_Separator Zl Lowercase_Letter Ll Mark M Combining_Mark Math_Symbol Sm Modifier_Letter Lm Modifier_Symbol Sk Nonspacing_Mark Mn Number N Open_Punctuation Ps Other C Other_Letter Lo Other_Number No Other_Punctuation Po Other_Symbol So Paragraph_Separator Zp Private_Use Co Punctuation P punct Separator Z Space_Separator Zs Spacing_Mark Mc Surrogate Cs Symbol S Titlecase_Letter Lt Unassigned Cn Uppercase_Letter Lu", Hi = "Adlam Adlm Ahom Anatolian_Hieroglyphs Hluw Arabic Arab Armenian Armn Avestan Avst Balinese Bali Bamum Bamu Bassa_Vah Bass Batak Batk Bengali Beng Bhaiksuki Bhks Bopomofo Bopo Brahmi Brah Braille Brai Buginese Bugi Buhid Buhd Canadian_Aboriginal Cans Carian Cari Caucasian_Albanian Aghb Chakma Cakm Cham Cham Cherokee Cher Common Zyyy Coptic Copt Qaac Cuneiform Xsux Cypriot Cprt Cyrillic Cyrl Deseret Dsrt Devanagari Deva Duployan Dupl Egyptian_Hieroglyphs Egyp Elbasan Elba Ethiopic Ethi Georgian Geor Glagolitic Glag Gothic Goth Grantha Gran Greek Grek Gujarati Gujr Gurmukhi Guru Han Hani Hangul Hang Hanunoo Hano Hatran Hatr Hebrew Hebr Hiragana Hira Imperial_Aramaic Armi Inherited Zinh Qaai Inscriptional_Pahlavi Phli Inscriptional_Parthian Prti Javanese Java Kaithi Kthi Kannada Knda Katakana Kana Kayah_Li Kali Kharoshthi Khar Khmer Khmr Khojki Khoj Khudawadi Sind Lao Laoo Latin Latn Lepcha Lepc Limbu Limb Linear_A Lina Linear_B Linb Lisu Lisu Lycian Lyci Lydian Lydi Mahajani Mahj Malayalam Mlym Mandaic Mand Manichaean Mani Marchen Marc Masaram_Gondi Gonm Meetei_Mayek Mtei Mende_Kikakui Mend Meroitic_Cursive Merc Meroitic_Hieroglyphs Mero Miao Plrd Modi Mongolian Mong Mro Mroo Multani Mult Myanmar Mymr Nabataean Nbat New_Tai_Lue Talu Newa Newa Nko Nkoo Nushu Nshu Ogham Ogam Ol_Chiki Olck Old_Hungarian Hung Old_Italic Ital Old_North_Arabian Narb Old_Permic Perm Old_Persian Xpeo Old_South_Arabian Sarb Old_Turkic Orkh Oriya Orya Osage Osge Osmanya Osma Pahawh_Hmong Hmng Palmyrene Palm Pau_Cin_Hau Pauc Phags_Pa Phag Phoenician Phnx Psalter_Pahlavi Phlp Rejang Rjng Runic Runr Samaritan Samr Saurashtra Saur Sharada Shrd Shavian Shaw Siddham Sidd SignWriting Sgnw Sinhala Sinh Sora_Sompeng Sora Soyombo Soyo Sundanese Sund Syloti_Nagri Sylo Syriac Syrc Tagalog Tglg Tagbanwa Tagb Tai_Le Tale Tai_Tham Lana Tai_Viet Tavt Takri Takr Tamil Taml Tangut Tang Telugu Telu Thaana Thaa Thai Thai Tibetan Tibt Tifinagh Tfng Tirhuta Tirh Ugaritic Ugar Vai Vaii Warang_Citi Wara Yi Yiii Zanabazar_Square Zanb", Gi = Hi + " Dogra Dogr Gunjala_Gondi Gong Hanifi_Rohingya Rohg Makasar Maka Medefaidrin Medf Old_Sogdian Sogo Sogdian Sogd", Ki = Gi + " Elymaic Elym Nandinagari Nand Nyiakeng_Puachue_Hmong Hmnp Wancho Wcho", Wi = Ki + " Chorasmian Chrs Diak Dives_Akuru Khitan_Small_Script Kits Yezi Yezidi", zi = Wi + " Cypro_Minoan Cpmn Old_Uyghur Ougr Tangsa Tnsa Toto Vithkuqi Vith", vr = zi + " " + fr, gr = {
  9: Hi,
  10: Gi,
  11: Ki,
  12: Wi,
  13: zi,
  14: vr
}, Xi = {};
function br(e) {
  var t = Xi[e] = {
    binary: Oe(mr[e] + " " + ui),
    binaryOfStrings: Oe(xr[e]),
    nonBinary: {
      General_Category: Oe(ui),
      Script: Oe(gr[e])
    }
  };
  t.nonBinary.Script_Extensions = t.nonBinary.Script, t.nonBinary.gc = t.nonBinary.General_Category, t.nonBinary.sc = t.nonBinary.Script, t.nonBinary.scx = t.nonBinary.Script_Extensions;
}
for (var Lt = 0, hi = [9, 10, 11, 12, 13, 14]; Lt < hi.length; Lt += 1) {
  var Pr = hi[Lt];
  br(Pr);
}
var C = H.prototype, yt = function(t, s) {
  this.parent = t, this.base = s || this;
};
yt.prototype.separatedFrom = function(t) {
  for (var s = this; s; s = s.parent)
    for (var a = t; a; a = a.parent)
      if (s.base === a.base && s !== a)
        return !0;
  return !1;
};
yt.prototype.sibling = function() {
  return new yt(this.parent, this.base);
};
var Ce = function(t) {
  this.parser = t, this.validFlags = "gim" + (t.options.ecmaVersion >= 6 ? "uy" : "") + (t.options.ecmaVersion >= 9 ? "s" : "") + (t.options.ecmaVersion >= 13 ? "d" : "") + (t.options.ecmaVersion >= 15 ? "v" : ""), this.unicodeProperties = Xi[t.options.ecmaVersion >= 14 ? 14 : t.options.ecmaVersion], this.source = "", this.flags = "", this.start = 0, this.switchU = !1, this.switchV = !1, this.switchN = !1, this.pos = 0, this.lastIntValue = 0, this.lastStringValue = "", this.lastAssertionIsQuantifiable = !1, this.numCapturingParens = 0, this.maxBackReference = 0, this.groupNames = /* @__PURE__ */ Object.create(null), this.backReferenceNames = [], this.branchID = null;
};
Ce.prototype.reset = function(t, s, a) {
  var n = a.indexOf("v") !== -1, p = a.indexOf("u") !== -1;
  this.start = t | 0, this.source = s + "", this.flags = a, n && this.parser.options.ecmaVersion >= 15 ? (this.switchU = !0, this.switchV = !0, this.switchN = !0) : (this.switchU = p && this.parser.options.ecmaVersion >= 6, this.switchV = !1, this.switchN = p && this.parser.options.ecmaVersion >= 9);
};
Ce.prototype.raise = function(t) {
  this.parser.raiseRecoverable(this.start, "Invalid regular expression: /" + this.source + "/: " + t);
};
Ce.prototype.at = function(t, s) {
  s === void 0 && (s = !1);
  var a = this.source, n = a.length;
  if (t >= n)
    return -1;
  var p = a.charCodeAt(t);
  if (!(s || this.switchU) || p <= 55295 || p >= 57344 || t + 1 >= n)
    return p;
  var f = a.charCodeAt(t + 1);
  return f >= 56320 && f <= 57343 ? (p << 10) + f - 56613888 : p;
};
Ce.prototype.nextIndex = function(t, s) {
  s === void 0 && (s = !1);
  var a = this.source, n = a.length;
  if (t >= n)
    return n;
  var p = a.charCodeAt(t), f;
  return !(s || this.switchU) || p <= 55295 || p >= 57344 || t + 1 >= n || (f = a.charCodeAt(t + 1)) < 56320 || f > 57343 ? t + 1 : t + 2;
};
Ce.prototype.current = function(t) {
  return t === void 0 && (t = !1), this.at(this.pos, t);
};
Ce.prototype.lookahead = function(t) {
  return t === void 0 && (t = !1), this.at(this.nextIndex(this.pos, t), t);
};
Ce.prototype.advance = function(t) {
  t === void 0 && (t = !1), this.pos = this.nextIndex(this.pos, t);
};
Ce.prototype.eat = function(t, s) {
  return s === void 0 && (s = !1), this.current(s) === t ? (this.advance(s), !0) : !1;
};
Ce.prototype.eatChars = function(t, s) {
  s === void 0 && (s = !1);
  for (var a = this.pos, n = 0, p = t; n < p.length; n += 1) {
    var f = p[n], v = this.at(a, s);
    if (v === -1 || v !== f)
      return !1;
    a = this.nextIndex(a, s);
  }
  return this.pos = a, !0;
};
C.validateRegExpFlags = function(e) {
  for (var t = e.validFlags, s = e.flags, a = !1, n = !1, p = 0; p < s.length; p++) {
    var f = s.charAt(p);
    t.indexOf(f) === -1 && this.raise(e.start, "Invalid regular expression flag"), s.indexOf(f, p + 1) > -1 && this.raise(e.start, "Duplicate regular expression flag"), f === "u" && (a = !0), f === "v" && (n = !0);
  }
  this.options.ecmaVersion >= 15 && a && n && this.raise(e.start, "Invalid regular expression flag");
};
function Sr(e) {
  for (var t in e)
    return !0;
  return !1;
}
C.validateRegExpPattern = function(e) {
  this.regexp_pattern(e), !e.switchN && this.options.ecmaVersion >= 9 && Sr(e.groupNames) && (e.switchN = !0, this.regexp_pattern(e));
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
  for (var t = 0, s = e.backReferenceNames; t < s.length; t += 1) {
    var a = s[t];
    e.groupNames[a] || e.raise("Invalid named capture referenced");
  }
};
C.regexp_disjunction = function(e) {
  var t = this.options.ecmaVersion >= 16;
  for (t && (e.branchID = new yt(e.branchID, null)), this.regexp_alternative(e); e.eat(
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
    var s = !1;
    if (this.options.ecmaVersion >= 9 && (s = e.eat(
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
      ) || e.raise("Unterminated group"), e.lastAssertionIsQuantifiable = !s, !0;
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
  var s = e.pos;
  if (e.eat(
    123
    /* { */
  )) {
    var a = 0, n = -1;
    if (this.regexp_eatDecimalDigits(e) && (a = e.lastIntValue, e.eat(
      44
      /* , */
    ) && this.regexp_eatDecimalDigits(e) && (n = e.lastIntValue), e.eat(
      125
      /* } */
    )))
      return n !== -1 && n < a && !t && e.raise("numbers out of order in {} quantifier"), !0;
    e.switchU && !t && e.raise("Incomplete quantifier"), e.pos = s;
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
        var s = this.regexp_eatModifiers(e), a = e.eat(
          45
          /* - */
        );
        if (s || a) {
          for (var n = 0; n < s.length; n++) {
            var p = s.charAt(n);
            s.indexOf(p, n + 1) > -1 && e.raise("Duplicate regular expression modifiers");
          }
          if (a) {
            var f = this.regexp_eatModifiers(e);
            !s && !f && e.current() === 58 && e.raise("Invalid regular expression modifiers");
            for (var v = 0; v < f.length; v++) {
              var x = f.charAt(v);
              (f.indexOf(x, v + 1) > -1 || s.indexOf(x) > -1) && e.raise("Duplicate regular expression modifiers");
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
  for (var t = "", s = 0; (s = e.current()) !== -1 && Tr(s); )
    t += Ae(s), e.advance();
  return t;
};
function Tr(e) {
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
  return Qi(t) ? (e.lastIntValue = t, e.advance(), !0) : !1;
};
function Qi(e) {
  return e === 36 || e >= 40 && e <= 43 || e === 46 || e === 63 || e >= 91 && e <= 94 || e >= 123 && e <= 125;
}
C.regexp_eatPatternCharacters = function(e) {
  for (var t = e.pos, s = 0; (s = e.current()) !== -1 && !Qi(s); )
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
    var t = this.options.ecmaVersion >= 16, s = e.groupNames[e.lastStringValue];
    if (s)
      if (t)
        for (var a = 0, n = s; a < n.length; a += 1) {
          var p = n[a];
          p.separatedFrom(e.branchID) || e.raise("Duplicate capture group name");
        }
      else
        e.raise("Duplicate capture group name");
    t ? (s || (e.groupNames[e.lastStringValue] = [])).push(e.branchID) : e.groupNames[e.lastStringValue] = !0;
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
    for (e.lastStringValue += Ae(e.lastIntValue); this.regexp_eatRegExpIdentifierPart(e); )
      e.lastStringValue += Ae(e.lastIntValue);
    return !0;
  }
  return !1;
};
C.regexp_eatRegExpIdentifierStart = function(e) {
  var t = e.pos, s = this.options.ecmaVersion >= 11, a = e.current(s);
  return e.advance(s), a === 92 && this.regexp_eatRegExpUnicodeEscapeSequence(e, s) && (a = e.lastIntValue), Cr(a) ? (e.lastIntValue = a, !0) : (e.pos = t, !1);
};
function Cr(e) {
  return ye(e, !0) || e === 36 || e === 95;
}
C.regexp_eatRegExpIdentifierPart = function(e) {
  var t = e.pos, s = this.options.ecmaVersion >= 11, a = e.current(s);
  return e.advance(s), a === 92 && this.regexp_eatRegExpUnicodeEscapeSequence(e, s) && (a = e.lastIntValue), kr(a) ? (e.lastIntValue = a, !0) : (e.pos = t, !1);
};
function kr(e) {
  return we(e, !0) || e === 36 || e === 95 || e === 8204 || e === 8205;
}
C.regexp_eatAtomEscape = function(e) {
  return this.regexp_eatBackReference(e) || this.regexp_eatCharacterClassEscape(e) || this.regexp_eatCharacterEscape(e) || e.switchN && this.regexp_eatKGroupName(e) ? !0 : (e.switchU && (e.current() === 99 && e.raise("Invalid unicode escape"), e.raise("Invalid escape")), !1);
};
C.regexp_eatBackReference = function(e) {
  var t = e.pos;
  if (this.regexp_eatDecimalEscape(e)) {
    var s = e.lastIntValue;
    if (e.switchU)
      return s > e.maxBackReference && (e.maxBackReference = s), !0;
    if (s <= e.numCapturingParens)
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
  return e.current() === 48 && !St(e.lookahead()) ? (e.lastIntValue = 0, e.advance(), !0) : !1;
};
C.regexp_eatControlEscape = function(e) {
  var t = e.current();
  return t === 116 ? (e.lastIntValue = 9, e.advance(), !0) : t === 110 ? (e.lastIntValue = 10, e.advance(), !0) : t === 118 ? (e.lastIntValue = 11, e.advance(), !0) : t === 102 ? (e.lastIntValue = 12, e.advance(), !0) : t === 114 ? (e.lastIntValue = 13, e.advance(), !0) : !1;
};
C.regexp_eatControlLetter = function(e) {
  var t = e.current();
  return Ji(t) ? (e.lastIntValue = t % 32, e.advance(), !0) : !1;
};
function Ji(e) {
  return e >= 65 && e <= 90 || e >= 97 && e <= 122;
}
C.regexp_eatRegExpUnicodeEscapeSequence = function(e, t) {
  t === void 0 && (t = !1);
  var s = e.pos, a = t || e.switchU;
  if (e.eat(
    117
    /* u */
  )) {
    if (this.regexp_eatFixedHexDigits(e, 4)) {
      var n = e.lastIntValue;
      if (a && n >= 55296 && n <= 56319) {
        var p = e.pos;
        if (e.eat(
          92
          /* \ */
        ) && e.eat(
          117
          /* u */
        ) && this.regexp_eatFixedHexDigits(e, 4)) {
          var f = e.lastIntValue;
          if (f >= 56320 && f <= 57343)
            return e.lastIntValue = (n - 55296) * 1024 + (f - 56320) + 65536, !0;
        }
        e.pos = p, e.lastIntValue = n;
      }
      return !0;
    }
    if (a && e.eat(
      123
      /* { */
    ) && this.regexp_eatHexDigits(e) && e.eat(
      125
      /* } */
    ) && wr(e.lastIntValue))
      return !0;
    a && e.raise("Invalid unicode escape"), e.pos = s;
  }
  return !1;
};
function wr(e) {
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
var Yi = 0, Ee = 1, ce = 2;
C.regexp_eatCharacterClassEscape = function(e) {
  var t = e.current();
  if (Ar(t))
    return e.lastIntValue = -1, e.advance(), Ee;
  var s = !1;
  if (e.switchU && this.options.ecmaVersion >= 9 && ((s = t === 80) || t === 112)) {
    e.lastIntValue = -1, e.advance();
    var a;
    if (e.eat(
      123
      /* { */
    ) && (a = this.regexp_eatUnicodePropertyValueExpression(e)) && e.eat(
      125
      /* } */
    ))
      return s && a === ce && e.raise("Invalid property name"), a;
    e.raise("Invalid property name");
  }
  return Yi;
};
function Ar(e) {
  return e === 100 || e === 68 || e === 115 || e === 83 || e === 119 || e === 87;
}
C.regexp_eatUnicodePropertyValueExpression = function(e) {
  var t = e.pos;
  if (this.regexp_eatUnicodePropertyName(e) && e.eat(
    61
    /* = */
  )) {
    var s = e.lastStringValue;
    if (this.regexp_eatUnicodePropertyValue(e)) {
      var a = e.lastStringValue;
      return this.regexp_validateUnicodePropertyNameAndValue(e, s, a), Ee;
    }
  }
  if (e.pos = t, this.regexp_eatLoneUnicodePropertyNameOrValue(e)) {
    var n = e.lastStringValue;
    return this.regexp_validateUnicodePropertyNameOrValue(e, n);
  }
  return Yi;
};
C.regexp_validateUnicodePropertyNameAndValue = function(e, t, s) {
  Ge(e.unicodeProperties.nonBinary, t) || e.raise("Invalid property name"), e.unicodeProperties.nonBinary[t].test(s) || e.raise("Invalid property value");
};
C.regexp_validateUnicodePropertyNameOrValue = function(e, t) {
  if (e.unicodeProperties.binary.test(t))
    return Ee;
  if (e.switchV && e.unicodeProperties.binaryOfStrings.test(t))
    return ce;
  e.raise("Invalid property name");
};
C.regexp_eatUnicodePropertyName = function(e) {
  var t = 0;
  for (e.lastStringValue = ""; Zi(t = e.current()); )
    e.lastStringValue += Ae(t), e.advance();
  return e.lastStringValue !== "";
};
function Zi(e) {
  return Ji(e) || e === 95;
}
C.regexp_eatUnicodePropertyValue = function(e) {
  var t = 0;
  for (e.lastStringValue = ""; Er(t = e.current()); )
    e.lastStringValue += Ae(t), e.advance();
  return e.lastStringValue !== "";
};
function Er(e) {
  return Zi(e) || St(e);
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
    ), s = this.regexp_classContents(e);
    return e.eat(
      93
      /* ] */
    ) || e.raise("Unterminated character class"), t && s === ce && e.raise("Negated character class may contain strings"), !0;
  }
  return !1;
};
C.regexp_classContents = function(e) {
  return e.current() === 93 ? Ee : e.switchV ? this.regexp_classSetExpression(e) : (this.regexp_nonEmptyClassRanges(e), Ee);
};
C.regexp_nonEmptyClassRanges = function(e) {
  for (; this.regexp_eatClassAtom(e); ) {
    var t = e.lastIntValue;
    if (e.eat(
      45
      /* - */
    ) && this.regexp_eatClassAtom(e)) {
      var s = e.lastIntValue;
      e.switchU && (t === -1 || s === -1) && e.raise("Invalid character class"), t !== -1 && s !== -1 && t > s && e.raise("Range out of order in character class");
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
      var s = e.current();
      (s === 99 || is(s)) && e.raise("Invalid class escape"), e.raise("Invalid escape");
    }
    e.pos = t;
  }
  var a = e.current();
  return a !== 93 ? (e.lastIntValue = a, e.advance(), !0) : !1;
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
  var t = Ee, s;
  if (!this.regexp_eatClassSetRange(e)) if (s = this.regexp_eatClassSetOperand(e)) {
    s === ce && (t = ce);
    for (var a = e.pos; e.eatChars(
      [38, 38]
      /* && */
    ); ) {
      if (e.current() !== 38 && (s = this.regexp_eatClassSetOperand(e))) {
        s !== ce && (t = Ee);
        continue;
      }
      e.raise("Invalid character in character class");
    }
    if (a !== e.pos)
      return t;
    for (; e.eatChars(
      [45, 45]
      /* -- */
    ); )
      this.regexp_eatClassSetOperand(e) || e.raise("Invalid character in character class");
    if (a !== e.pos)
      return t;
  } else
    e.raise("Invalid character in character class");
  for (; ; )
    if (!this.regexp_eatClassSetRange(e)) {
      if (s = this.regexp_eatClassSetOperand(e), !s)
        return t;
      s === ce && (t = ce);
    }
};
C.regexp_eatClassSetRange = function(e) {
  var t = e.pos;
  if (this.regexp_eatClassSetCharacter(e)) {
    var s = e.lastIntValue;
    if (e.eat(
      45
      /* - */
    ) && this.regexp_eatClassSetCharacter(e)) {
      var a = e.lastIntValue;
      return s !== -1 && a !== -1 && s > a && e.raise("Range out of order in character class"), !0;
    }
    e.pos = t;
  }
  return !1;
};
C.regexp_eatClassSetOperand = function(e) {
  return this.regexp_eatClassSetCharacter(e) ? Ee : this.regexp_eatClassStringDisjunction(e) || this.regexp_eatNestedClass(e);
};
C.regexp_eatNestedClass = function(e) {
  var t = e.pos;
  if (e.eat(
    91
    /* [ */
  )) {
    var s = e.eat(
      94
      /* ^ */
    ), a = this.regexp_classContents(e);
    if (e.eat(
      93
      /* ] */
    ))
      return s && a === ce && e.raise("Negated character class may contain strings"), a;
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
      var s = this.regexp_classStringDisjunctionContents(e);
      if (e.eat(
        125
        /* } */
      ))
        return s;
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
    this.regexp_classString(e) === ce && (t = ce);
  return t;
};
C.regexp_classString = function(e) {
  for (var t = 0; this.regexp_eatClassSetCharacter(e); )
    t++;
  return t === 1 ? Ee : ce;
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
  var s = e.current();
  return s < 0 || s === e.lookahead() && Ir(s) || _r(s) ? !1 : (e.advance(), e.lastIntValue = s, !0);
};
function Ir(e) {
  return e === 33 || e >= 35 && e <= 38 || e >= 42 && e <= 44 || e === 46 || e >= 58 && e <= 64 || e === 94 || e === 96 || e === 126;
}
function _r(e) {
  return e === 40 || e === 41 || e === 45 || e === 47 || e >= 91 && e <= 93 || e >= 123 && e <= 125;
}
C.regexp_eatClassSetReservedPunctuator = function(e) {
  var t = e.current();
  return Nr(t) ? (e.lastIntValue = t, e.advance(), !0) : !1;
};
function Nr(e) {
  return e === 33 || e === 35 || e === 37 || e === 38 || e === 44 || e === 45 || e >= 58 && e <= 62 || e === 64 || e === 96 || e === 126;
}
C.regexp_eatClassControlLetter = function(e) {
  var t = e.current();
  return St(t) || t === 95 ? (e.lastIntValue = t % 32, e.advance(), !0) : !1;
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
  var t = e.pos, s = 0;
  for (e.lastIntValue = 0; St(s = e.current()); )
    e.lastIntValue = 10 * e.lastIntValue + (s - 48), e.advance();
  return e.pos !== t;
};
function St(e) {
  return e >= 48 && e <= 57;
}
C.regexp_eatHexDigits = function(e) {
  var t = e.pos, s = 0;
  for (e.lastIntValue = 0; es(s = e.current()); )
    e.lastIntValue = 16 * e.lastIntValue + ts(s), e.advance();
  return e.pos !== t;
};
function es(e) {
  return e >= 48 && e <= 57 || e >= 65 && e <= 70 || e >= 97 && e <= 102;
}
function ts(e) {
  return e >= 65 && e <= 70 ? 10 + (e - 65) : e >= 97 && e <= 102 ? 10 + (e - 97) : e - 48;
}
C.regexp_eatLegacyOctalEscapeSequence = function(e) {
  if (this.regexp_eatOctalDigit(e)) {
    var t = e.lastIntValue;
    if (this.regexp_eatOctalDigit(e)) {
      var s = e.lastIntValue;
      t <= 3 && this.regexp_eatOctalDigit(e) ? e.lastIntValue = t * 64 + s * 8 + e.lastIntValue : e.lastIntValue = t * 8 + s;
    } else
      e.lastIntValue = t;
    return !0;
  }
  return !1;
};
C.regexp_eatOctalDigit = function(e) {
  var t = e.current();
  return is(t) ? (e.lastIntValue = t - 48, e.advance(), !0) : (e.lastIntValue = 0, !1);
};
function is(e) {
  return e >= 48 && e <= 55;
}
C.regexp_eatFixedHexDigits = function(e, t) {
  var s = e.pos;
  e.lastIntValue = 0;
  for (var a = 0; a < t; ++a) {
    var n = e.current();
    if (!es(n))
      return e.pos = s, !1;
    e.lastIntValue = 16 * e.lastIntValue + ts(n), e.advance();
  }
  return !0;
};
var Tt = function(t) {
  this.type = t.type, this.value = t.value, this.start = t.start, this.end = t.end, t.options.locations && (this.loc = new rt(t, t.startLoc, t.endLoc)), t.options.ranges && (this.range = [t.start, t.end]);
}, R = H.prototype;
R.next = function(e) {
  !e && this.type.keyword && this.containsEsc && this.raiseRecoverable(this.start, "Escape sequence in keyword " + this.type.keyword), this.options.onToken && this.options.onToken(new Tt(this)), this.lastTokEnd = this.end, this.lastTokStart = this.start, this.lastTokEndLoc = this.endLoc, this.lastTokStartLoc = this.startLoc, this.nextToken();
};
R.getToken = function() {
  return this.next(), new Tt(this);
};
typeof Symbol < "u" && (R[Symbol.iterator] = function() {
  var e = this;
  return {
    next: function() {
      var t = e.getToken();
      return {
        done: t.type === h.eof,
        value: t
      };
    }
  };
});
R.nextToken = function() {
  var e = this.curContext();
  if ((!e || !e.preserveSpace) && this.skipSpace(), this.start = this.pos, this.options.locations && (this.startLoc = this.curPosition()), this.pos >= this.input.length)
    return this.finishToken(h.eof);
  if (e.override)
    return e.override(this);
  this.readToken(this.fullCharCodeAtPos());
};
R.readToken = function(e) {
  return ye(e, this.options.ecmaVersion >= 6) || e === 92 ? this.readWord() : this.getTokenFromCode(e);
};
R.fullCharCodeAtPos = function() {
  var e = this.input.charCodeAt(this.pos);
  if (e <= 55295 || e >= 56320)
    return e;
  var t = this.input.charCodeAt(this.pos + 1);
  return t <= 56319 || t >= 57344 ? e : (e << 10) + t - 56613888;
};
R.skipBlockComment = function() {
  var e = this.options.onComment && this.curPosition(), t = this.pos, s = this.input.indexOf("*/", this.pos += 2);
  if (s === -1 && this.raise(this.pos - 2, "Unterminated comment"), this.pos = s + 2, this.options.locations)
    for (var a = void 0, n = t; (a = Ei(this.input, n, this.pos)) > -1; )
      ++this.curLine, n = this.lineStart = a;
  this.options.onComment && this.options.onComment(
    !0,
    this.input.slice(t + 2, s),
    t,
    this.pos,
    e,
    this.curPosition()
  );
};
R.skipLineComment = function(e) {
  for (var t = this.pos, s = this.options.onComment && this.curPosition(), a = this.input.charCodeAt(this.pos += e); this.pos < this.input.length && !je(a); )
    a = this.input.charCodeAt(++this.pos);
  this.options.onComment && this.options.onComment(
    !1,
    this.input.slice(t + e, this.pos),
    t,
    this.pos,
    s,
    this.curPosition()
  );
};
R.skipSpace = function() {
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
        if (e > 8 && e < 14 || e >= 5760 && Ht.test(String.fromCharCode(e)))
          ++this.pos;
        else
          break e;
    }
  }
};
R.finishToken = function(e, t) {
  this.end = this.pos, this.options.locations && (this.endLoc = this.curPosition());
  var s = this.type;
  this.type = e, this.value = t, this.updateContext(s);
};
R.readToken_dot = function() {
  var e = this.input.charCodeAt(this.pos + 1);
  if (e >= 48 && e <= 57)
    return this.readNumber(!0);
  var t = this.input.charCodeAt(this.pos + 2);
  return this.options.ecmaVersion >= 6 && e === 46 && t === 46 ? (this.pos += 3, this.finishToken(h.ellipsis)) : (++this.pos, this.finishToken(h.dot));
};
R.readToken_slash = function() {
  var e = this.input.charCodeAt(this.pos + 1);
  return this.exprAllowed ? (++this.pos, this.readRegexp()) : e === 61 ? this.finishOp(h.assign, 2) : this.finishOp(h.slash, 1);
};
R.readToken_mult_modulo_exp = function(e) {
  var t = this.input.charCodeAt(this.pos + 1), s = 1, a = e === 42 ? h.star : h.modulo;
  return this.options.ecmaVersion >= 7 && e === 42 && t === 42 && (++s, a = h.starstar, t = this.input.charCodeAt(this.pos + 2)), t === 61 ? this.finishOp(h.assign, s + 1) : this.finishOp(a, s);
};
R.readToken_pipe_amp = function(e) {
  var t = this.input.charCodeAt(this.pos + 1);
  if (t === e) {
    if (this.options.ecmaVersion >= 12) {
      var s = this.input.charCodeAt(this.pos + 2);
      if (s === 61)
        return this.finishOp(h.assign, 3);
    }
    return this.finishOp(e === 124 ? h.logicalOR : h.logicalAND, 2);
  }
  return t === 61 ? this.finishOp(h.assign, 2) : this.finishOp(e === 124 ? h.bitwiseOR : h.bitwiseAND, 1);
};
R.readToken_caret = function() {
  var e = this.input.charCodeAt(this.pos + 1);
  return e === 61 ? this.finishOp(h.assign, 2) : this.finishOp(h.bitwiseXOR, 1);
};
R.readToken_plus_min = function(e) {
  var t = this.input.charCodeAt(this.pos + 1);
  return t === e ? t === 45 && !this.inModule && this.input.charCodeAt(this.pos + 2) === 62 && (this.lastTokEnd === 0 || Y.test(this.input.slice(this.lastTokEnd, this.pos))) ? (this.skipLineComment(3), this.skipSpace(), this.nextToken()) : this.finishOp(h.incDec, 2) : t === 61 ? this.finishOp(h.assign, 2) : this.finishOp(h.plusMin, 1);
};
R.readToken_lt_gt = function(e) {
  var t = this.input.charCodeAt(this.pos + 1), s = 1;
  return t === e ? (s = e === 62 && this.input.charCodeAt(this.pos + 2) === 62 ? 3 : 2, this.input.charCodeAt(this.pos + s) === 61 ? this.finishOp(h.assign, s + 1) : this.finishOp(h.bitShift, s)) : t === 33 && e === 60 && !this.inModule && this.input.charCodeAt(this.pos + 2) === 45 && this.input.charCodeAt(this.pos + 3) === 45 ? (this.skipLineComment(4), this.skipSpace(), this.nextToken()) : (t === 61 && (s = 2), this.finishOp(h.relational, s));
};
R.readToken_eq_excl = function(e) {
  var t = this.input.charCodeAt(this.pos + 1);
  return t === 61 ? this.finishOp(h.equality, this.input.charCodeAt(this.pos + 2) === 61 ? 3 : 2) : e === 61 && t === 62 && this.options.ecmaVersion >= 6 ? (this.pos += 2, this.finishToken(h.arrow)) : this.finishOp(e === 61 ? h.eq : h.prefix, 1);
};
R.readToken_question = function() {
  var e = this.options.ecmaVersion;
  if (e >= 11) {
    var t = this.input.charCodeAt(this.pos + 1);
    if (t === 46) {
      var s = this.input.charCodeAt(this.pos + 2);
      if (s < 48 || s > 57)
        return this.finishOp(h.questionDot, 2);
    }
    if (t === 63) {
      if (e >= 12) {
        var a = this.input.charCodeAt(this.pos + 2);
        if (a === 61)
          return this.finishOp(h.assign, 3);
      }
      return this.finishOp(h.coalesce, 2);
    }
  }
  return this.finishOp(h.question, 1);
};
R.readToken_numberSign = function() {
  var e = this.options.ecmaVersion, t = 35;
  if (e >= 13 && (++this.pos, t = this.fullCharCodeAtPos(), ye(t, !0) || t === 92))
    return this.finishToken(h.privateId, this.readWord1());
  this.raise(this.pos, "Unexpected character '" + Ae(t) + "'");
};
R.getTokenFromCode = function(e) {
  switch (e) {
    // The interpretation of a dot depends on whether it is followed
    // by a digit or another two dots.
    case 46:
      return this.readToken_dot();
    // Punctuation tokens.
    case 40:
      return ++this.pos, this.finishToken(h.parenL);
    case 41:
      return ++this.pos, this.finishToken(h.parenR);
    case 59:
      return ++this.pos, this.finishToken(h.semi);
    case 44:
      return ++this.pos, this.finishToken(h.comma);
    case 91:
      return ++this.pos, this.finishToken(h.bracketL);
    case 93:
      return ++this.pos, this.finishToken(h.bracketR);
    case 123:
      return ++this.pos, this.finishToken(h.braceL);
    case 125:
      return ++this.pos, this.finishToken(h.braceR);
    case 58:
      return ++this.pos, this.finishToken(h.colon);
    case 96:
      if (this.options.ecmaVersion < 6)
        break;
      return ++this.pos, this.finishToken(h.backQuote);
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
      return this.finishOp(h.prefix, 1);
    case 35:
      return this.readToken_numberSign();
  }
  this.raise(this.pos, "Unexpected character '" + Ae(e) + "'");
};
R.finishOp = function(e, t) {
  var s = this.input.slice(this.pos, this.pos + t);
  return this.pos += t, this.finishToken(e, s);
};
R.readRegexp = function() {
  for (var e, t, s = this.pos; ; ) {
    this.pos >= this.input.length && this.raise(s, "Unterminated regular expression");
    var a = this.input.charAt(this.pos);
    if (Y.test(a) && this.raise(s, "Unterminated regular expression"), e)
      e = !1;
    else {
      if (a === "[")
        t = !0;
      else if (a === "]" && t)
        t = !1;
      else if (a === "/" && !t)
        break;
      e = a === "\\";
    }
    ++this.pos;
  }
  var n = this.input.slice(s, this.pos);
  ++this.pos;
  var p = this.pos, f = this.readWord1();
  this.containsEsc && this.unexpected(p);
  var v = this.regexpState || (this.regexpState = new Ce(this));
  v.reset(s, n, f), this.validateRegExpFlags(v), this.validateRegExpPattern(v);
  var x = null;
  try {
    x = new RegExp(n, f);
  } catch {
  }
  return this.finishToken(h.regexp, { pattern: n, flags: f, value: x });
};
R.readInt = function(e, t, s) {
  for (var a = this.options.ecmaVersion >= 12 && t === void 0, n = s && this.input.charCodeAt(this.pos) === 48, p = this.pos, f = 0, v = 0, x = 0, o = t ?? 1 / 0; x < o; ++x, ++this.pos) {
    var S = this.input.charCodeAt(this.pos), I = void 0;
    if (a && S === 95) {
      n && this.raiseRecoverable(this.pos, "Numeric separator is not allowed in legacy octal numeric literals"), v === 95 && this.raiseRecoverable(this.pos, "Numeric separator must be exactly one underscore"), x === 0 && this.raiseRecoverable(this.pos, "Numeric separator is not allowed at the first of digits"), v = S;
      continue;
    }
    if (S >= 97 ? I = S - 97 + 10 : S >= 65 ? I = S - 65 + 10 : S >= 48 && S <= 57 ? I = S - 48 : I = 1 / 0, I >= e)
      break;
    v = S, f = f * e + I;
  }
  return a && v === 95 && this.raiseRecoverable(this.pos - 1, "Numeric separator is not allowed at the last of digits"), this.pos === p || t != null && this.pos - p !== t ? null : f;
};
function Lr(e, t) {
  return t ? parseInt(e, 8) : parseFloat(e.replace(/_/g, ""));
}
function ss(e) {
  return typeof BigInt != "function" ? null : BigInt(e.replace(/_/g, ""));
}
R.readRadixNumber = function(e) {
  var t = this.pos;
  this.pos += 2;
  var s = this.readInt(e);
  return s == null && this.raise(this.start + 2, "Expected number in radix " + e), this.options.ecmaVersion >= 11 && this.input.charCodeAt(this.pos) === 110 ? (s = ss(this.input.slice(t, this.pos)), ++this.pos) : ye(this.fullCharCodeAtPos()) && this.raise(this.pos, "Identifier directly after number"), this.finishToken(h.num, s);
};
R.readNumber = function(e) {
  var t = this.pos;
  !e && this.readInt(10, void 0, !0) === null && this.raise(t, "Invalid number");
  var s = this.pos - t >= 2 && this.input.charCodeAt(t) === 48;
  s && this.strict && this.raise(t, "Invalid number");
  var a = this.input.charCodeAt(this.pos);
  if (!s && !e && this.options.ecmaVersion >= 11 && a === 110) {
    var n = ss(this.input.slice(t, this.pos));
    return ++this.pos, ye(this.fullCharCodeAtPos()) && this.raise(this.pos, "Identifier directly after number"), this.finishToken(h.num, n);
  }
  s && /[89]/.test(this.input.slice(t, this.pos)) && (s = !1), a === 46 && !s && (++this.pos, this.readInt(10), a = this.input.charCodeAt(this.pos)), (a === 69 || a === 101) && !s && (a = this.input.charCodeAt(++this.pos), (a === 43 || a === 45) && ++this.pos, this.readInt(10) === null && this.raise(t, "Invalid number")), ye(this.fullCharCodeAtPos()) && this.raise(this.pos, "Identifier directly after number");
  var p = Lr(this.input.slice(t, this.pos), s);
  return this.finishToken(h.num, p);
};
R.readCodePoint = function() {
  var e = this.input.charCodeAt(this.pos), t;
  if (e === 123) {
    this.options.ecmaVersion < 6 && this.unexpected();
    var s = ++this.pos;
    t = this.readHexChar(this.input.indexOf("}", this.pos) - this.pos), ++this.pos, t > 1114111 && this.invalidStringToken(s, "Code point out of bounds");
  } else
    t = this.readHexChar(4);
  return t;
};
R.readString = function(e) {
  for (var t = "", s = ++this.pos; ; ) {
    this.pos >= this.input.length && this.raise(this.start, "Unterminated string constant");
    var a = this.input.charCodeAt(this.pos);
    if (a === e)
      break;
    a === 92 ? (t += this.input.slice(s, this.pos), t += this.readEscapedChar(!1), s = this.pos) : a === 8232 || a === 8233 ? (this.options.ecmaVersion < 10 && this.raise(this.start, "Unterminated string constant"), ++this.pos, this.options.locations && (this.curLine++, this.lineStart = this.pos)) : (je(a) && this.raise(this.start, "Unterminated string constant"), ++this.pos);
  }
  return t += this.input.slice(s, this.pos++), this.finishToken(h.string, t);
};
var rs = {};
R.tryReadTemplateToken = function() {
  this.inTemplateElement = !0;
  try {
    this.readTmplToken();
  } catch (e) {
    if (e === rs)
      this.readInvalidTemplateToken();
    else
      throw e;
  }
  this.inTemplateElement = !1;
};
R.invalidStringToken = function(e, t) {
  if (this.inTemplateElement && this.options.ecmaVersion >= 9)
    throw rs;
  this.raise(e, t);
};
R.readTmplToken = function() {
  for (var e = "", t = this.pos; ; ) {
    this.pos >= this.input.length && this.raise(this.start, "Unterminated template");
    var s = this.input.charCodeAt(this.pos);
    if (s === 96 || s === 36 && this.input.charCodeAt(this.pos + 1) === 123)
      return this.pos === this.start && (this.type === h.template || this.type === h.invalidTemplate) ? s === 36 ? (this.pos += 2, this.finishToken(h.dollarBraceL)) : (++this.pos, this.finishToken(h.backQuote)) : (e += this.input.slice(t, this.pos), this.finishToken(h.template, e));
    if (s === 92)
      e += this.input.slice(t, this.pos), e += this.readEscapedChar(!0), t = this.pos;
    else if (je(s)) {
      switch (e += this.input.slice(t, this.pos), ++this.pos, s) {
        case 13:
          this.input.charCodeAt(this.pos) === 10 && ++this.pos;
        case 10:
          e += `
`;
          break;
        default:
          e += String.fromCharCode(s);
          break;
      }
      this.options.locations && (++this.curLine, this.lineStart = this.pos), t = this.pos;
    } else
      ++this.pos;
  }
};
R.readInvalidTemplateToken = function() {
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
        return this.finishToken(h.invalidTemplate, this.input.slice(this.start, this.pos));
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
R.readEscapedChar = function(e) {
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
      return Ae(this.readCodePoint());
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
        var s = this.pos - 1;
        this.invalidStringToken(
          s,
          "Invalid escape sequence in template string"
        );
      }
    default:
      if (t >= 48 && t <= 55) {
        var a = this.input.substr(this.pos - 1, 3).match(/^[0-7]+/)[0], n = parseInt(a, 8);
        return n > 255 && (a = a.slice(0, -1), n = parseInt(a, 8)), this.pos += a.length - 1, t = this.input.charCodeAt(this.pos), (a !== "0" || t === 56 || t === 57) && (this.strict || e) && this.invalidStringToken(
          this.pos - 1 - a.length,
          e ? "Octal literal in template string" : "Octal literal in strict mode"
        ), String.fromCharCode(n);
      }
      return je(t) ? (this.options.locations && (this.lineStart = this.pos, ++this.curLine), "") : String.fromCharCode(t);
  }
};
R.readHexChar = function(e) {
  var t = this.pos, s = this.readInt(16, e);
  return s === null && this.invalidStringToken(t, "Bad character escape sequence"), s;
};
R.readWord1 = function() {
  this.containsEsc = !1;
  for (var e = "", t = !0, s = this.pos, a = this.options.ecmaVersion >= 6; this.pos < this.input.length; ) {
    var n = this.fullCharCodeAtPos();
    if (we(n, a))
      this.pos += n <= 65535 ? 1 : 2;
    else if (n === 92) {
      this.containsEsc = !0, e += this.input.slice(s, this.pos);
      var p = this.pos;
      this.input.charCodeAt(++this.pos) !== 117 && this.invalidStringToken(this.pos, "Expecting Unicode escape sequence \\uXXXX"), ++this.pos;
      var f = this.readCodePoint();
      (t ? ye : we)(f, a) || this.invalidStringToken(p, "Invalid Unicode escape"), e += Ae(f), s = this.pos;
    } else
      break;
    t = !1;
  }
  return e + this.input.slice(s, this.pos);
};
R.readWord = function() {
  var e = this.readWord1(), t = h.name;
  return this.keywords.test(e) && (t = $e[e]), this.finishToken(t, e);
};
var as = "8.15.0";
H.acorn = {
  Parser: H,
  version: as,
  defaultOptions: lt,
  Position: qe,
  SourceLocation: rt,
  getLineInfo: Gt,
  Node: nt,
  TokenType: O,
  tokTypes: h,
  keywordTypes: $e,
  TokContext: Q,
  tokContexts: F,
  isIdentifierChar: we,
  isIdentifierStart: ye,
  Token: Tt,
  isNewLine: je,
  lineBreak: Y,
  lineBreakG: Ai,
  nonASCIIwhitespace: Ht
};
function Or(e, t) {
  return H.parse(e, t);
}
function Rr(e, t, s) {
  return H.parseExpressionAt(e, t, s);
}
function Mr(e, t) {
  return H.tokenizer(e, t);
}
const Dr = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  Node: nt,
  Parser: H,
  Position: qe,
  SourceLocation: rt,
  TokContext: Q,
  Token: Tt,
  TokenType: O,
  defaultOptions: lt,
  getLineInfo: Gt,
  isIdentifierChar: we,
  isIdentifierStart: ye,
  isNewLine: je,
  keywordTypes: $e,
  lineBreak: Y,
  lineBreakG: Ai,
  nonASCIIwhitespace: Ht,
  parse: Or,
  parseExpressionAt: Rr,
  tokContexts: F,
  tokTypes: h,
  tokenizer: Mr,
  version: as
}, Symbol.toStringTag, { value: "Module" }));
function ci(e, t) {
  for (var s = 0; s < t.length; s++) {
    var a = t[s];
    a.enumerable = a.enumerable || !1, a.configurable = !0, "value" in a && (a.writable = !0), Object.defineProperty(e, typeof (n = (function(p, f) {
      if (typeof p != "object" || p === null) return p;
      var v = p[Symbol.toPrimitive];
      if (v !== void 0) {
        var x = v.call(p, "string");
        if (typeof x != "object") return x;
        throw new TypeError("@@toPrimitive must return a primitive value.");
      }
      return String(p);
    })(a.key)) == "symbol" ? n : String(n), a);
  }
  var n;
}
function xt() {
  return xt = Object.assign ? Object.assign.bind() : function(e) {
    for (var t = 1; t < arguments.length; t++) {
      var s = arguments[t];
      for (var a in s) Object.prototype.hasOwnProperty.call(s, a) && (e[a] = s[a]);
    }
    return e;
  }, xt.apply(this, arguments);
}
function pt(e, t) {
  e.prototype = Object.create(t.prototype), e.prototype.constructor = e, jt(e, t);
}
function jt(e, t) {
  return jt = Object.setPrototypeOf ? Object.setPrototypeOf.bind() : function(s, a) {
    return s.__proto__ = a, s;
  }, jt(e, t);
}
function pi(e, t) {
  (t == null || t > e.length) && (t = e.length);
  for (var s = 0, a = new Array(t); s < t; s++) a[s] = e[s];
  return a;
}
function li(e, t) {
  var s = typeof Symbol < "u" && e[Symbol.iterator] || e["@@iterator"];
  if (s) return (s = s.call(e)).next.bind(s);
  if (Array.isArray(e) || (s = (function(n, p) {
    if (n) {
      if (typeof n == "string") return pi(n, p);
      var f = Object.prototype.toString.call(n).slice(8, -1);
      return f === "Object" && n.constructor && (f = n.constructor.name), f === "Map" || f === "Set" ? Array.from(n) : f === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(f) ? pi(n, p) : void 0;
    }
  })(e)) || t) {
    s && (e = s);
    var a = 0;
    return function() {
      return a >= e.length ? { done: !0 } : { done: !1, value: e[a++] };
    };
  }
  throw new TypeError(`Invalid attempt to iterate non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`);
}
var re = !0;
function ae(e, t) {
  return t === void 0 && (t = {}), new O("name", t);
}
var Vr = /* @__PURE__ */ new WeakMap();
function jr(e) {
  var t = Vr.get(e.Parser.acorn || e);
  if (!t) {
    var s = { assert: ae(0, { startsExpr: re }), asserts: ae(0, { startsExpr: re }), global: ae(0, { startsExpr: re }), keyof: ae(0, { startsExpr: re }), readonly: ae(0, { startsExpr: re }), unique: ae(0, { startsExpr: re }), abstract: ae(0, { startsExpr: re }), declare: ae(0, { startsExpr: re }), enum: ae(0, { startsExpr: re }), module: ae(0, { startsExpr: re }), namespace: ae(0, { startsExpr: re }), interface: ae(0, { startsExpr: re }), type: ae(0, { startsExpr: re }) }, a = { at: new O("@"), jsxName: new O("jsxName"), jsxText: new O("jsxText", { beforeExpr: !0 }), jsxTagStart: new O("jsxTagStart", { startsExpr: !0 }), jsxTagEnd: new O("jsxTagEnd") }, n = { tc_oTag: new Q("<tag", !1, !1), tc_cTag: new Q("</tag", !1, !1), tc_expr: new Q("<tag>...</tag>", !0, !0) }, p = new RegExp("^(?:" + Object.keys(s).join("|") + ")$");
    a.jsxTagStart.updateContext = function() {
      this.context.push(n.tc_expr), this.context.push(n.tc_oTag), this.exprAllowed = !1;
    }, a.jsxTagEnd.updateContext = function(f) {
      var v = this.context.pop();
      v === n.tc_oTag && f === h.slash || v === n.tc_cTag ? (this.context.pop(), this.exprAllowed = this.curContext() === n.tc_expr) : this.exprAllowed = !0;
    }, t = { tokTypes: xt({}, s, a), tokContexts: xt({}, n), keywordsRegExp: p, tokenIsLiteralPropertyName: function(f) {
      return [h.name, h.string, h.num].concat(Object.values($e), Object.values(s)).includes(f);
    }, tokenIsKeywordOrIdentifier: function(f) {
      return [h.name].concat(Object.values($e), Object.values(s)).includes(f);
    }, tokenIsIdentifier: function(f) {
      return [].concat(Object.values(s), [h.name]).includes(f);
    }, tokenIsTSDeclarationStart: function(f) {
      return [s.abstract, s.declare, s.enum, s.module, s.namespace, s.interface, s.type].includes(f);
    }, tokenIsTSTypeOperator: function(f) {
      return [s.keyof, s.readonly, s.unique].includes(f);
    }, tokenIsTemplate: function(f) {
      return f === h.invalidTemplate;
    } };
  }
  return t;
}
var Qe = 1024, Fr = new RegExp("(?:[^\\S\\n\\r\\u2028\\u2029]|\\/\\/.*|\\/\\*.*?\\*\\/)*", "y"), fi = new RegExp("(?=(" + Fr.source + "))\\1" + /(?=[\n\r\u2028\u2029]|\/\*(?!.*?\*\/)|$)/.source, "y"), Je = function() {
  this.shorthandAssign = void 0, this.trailingComma = void 0, this.parenthesizedAssign = void 0, this.parenthesizedBind = void 0, this.doubleProto = void 0, this.shorthandAssign = this.trailingComma = this.parenthesizedAssign = this.parenthesizedBind = this.doubleProto = -1;
};
function Br(e, t) {
  var s = t.key.name, a = e[s], n = "true";
  return t.type !== "MethodDefinition" || t.kind !== "get" && t.kind !== "set" || (n = (t.static ? "s" : "i") + t.kind), a === "iget" && n === "iset" || a === "iset" && n === "iget" || a === "sget" && n === "sset" || a === "sset" && n === "sget" ? (e[s] = "true", !1) : !!a || (e[s] = n, !1);
}
function di(e, t) {
  var s = e.key;
  return !e.computed && (s.type === "Identifier" && s.name === t || s.type === "Literal" && s.value === t);
}
var A = { AbstractMethodHasImplementation: function(e) {
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
}, LetInLexicalBinding: "'let' is not allowed to be used as a name in 'let' or 'const' declarations." }, Ur = { quot: '"', amp: "&", apos: "'", lt: "<", gt: ">", nbsp: " ", iexcl: "¡", cent: "¢", pound: "£", curren: "¤", yen: "¥", brvbar: "¦", sect: "§", uml: "¨", copy: "©", ordf: "ª", laquo: "«", not: "¬", shy: "­", reg: "®", macr: "¯", deg: "°", plusmn: "±", sup2: "²", sup3: "³", acute: "´", micro: "µ", para: "¶", middot: "·", cedil: "¸", sup1: "¹", ordm: "º", raquo: "»", frac14: "¼", frac12: "½", frac34: "¾", iquest: "¿", Agrave: "À", Aacute: "Á", Acirc: "Â", Atilde: "Ã", Auml: "Ä", Aring: "Å", AElig: "Æ", Ccedil: "Ç", Egrave: "È", Eacute: "É", Ecirc: "Ê", Euml: "Ë", Igrave: "Ì", Iacute: "Í", Icirc: "Î", Iuml: "Ï", ETH: "Ð", Ntilde: "Ñ", Ograve: "Ò", Oacute: "Ó", Ocirc: "Ô", Otilde: "Õ", Ouml: "Ö", times: "×", Oslash: "Ø", Ugrave: "Ù", Uacute: "Ú", Ucirc: "Û", Uuml: "Ü", Yacute: "Ý", THORN: "Þ", szlig: "ß", agrave: "à", aacute: "á", acirc: "â", atilde: "ã", auml: "ä", aring: "å", aelig: "æ", ccedil: "ç", egrave: "è", eacute: "é", ecirc: "ê", euml: "ë", igrave: "ì", iacute: "í", icirc: "î", iuml: "ï", eth: "ð", ntilde: "ñ", ograve: "ò", oacute: "ó", ocirc: "ô", otilde: "õ", ouml: "ö", divide: "÷", oslash: "ø", ugrave: "ù", uacute: "ú", ucirc: "û", uuml: "ü", yacute: "ý", thorn: "þ", yuml: "ÿ", OElig: "Œ", oelig: "œ", Scaron: "Š", scaron: "š", Yuml: "Ÿ", fnof: "ƒ", circ: "ˆ", tilde: "˜", Alpha: "Α", Beta: "Β", Gamma: "Γ", Delta: "Δ", Epsilon: "Ε", Zeta: "Ζ", Eta: "Η", Theta: "Θ", Iota: "Ι", Kappa: "Κ", Lambda: "Λ", Mu: "Μ", Nu: "Ν", Xi: "Ξ", Omicron: "Ο", Pi: "Π", Rho: "Ρ", Sigma: "Σ", Tau: "Τ", Upsilon: "Υ", Phi: "Φ", Chi: "Χ", Psi: "Ψ", Omega: "Ω", alpha: "α", beta: "β", gamma: "γ", delta: "δ", epsilon: "ε", zeta: "ζ", eta: "η", theta: "θ", iota: "ι", kappa: "κ", lambda: "λ", mu: "μ", nu: "ν", xi: "ξ", omicron: "ο", pi: "π", rho: "ρ", sigmaf: "ς", sigma: "σ", tau: "τ", upsilon: "υ", phi: "φ", chi: "χ", psi: "ψ", omega: "ω", thetasym: "ϑ", upsih: "ϒ", piv: "ϖ", ensp: " ", emsp: " ", thinsp: " ", zwnj: "‌", zwj: "‍", lrm: "‎", rlm: "‏", ndash: "–", mdash: "—", lsquo: "‘", rsquo: "’", sbquo: "‚", ldquo: "“", rdquo: "”", bdquo: "„", dagger: "†", Dagger: "‡", bull: "•", hellip: "…", permil: "‰", prime: "′", Prime: "″", lsaquo: "‹", rsaquo: "›", oline: "‾", frasl: "⁄", euro: "€", image: "ℑ", weierp: "℘", real: "ℜ", trade: "™", alefsym: "ℵ", larr: "←", uarr: "↑", rarr: "→", darr: "↓", harr: "↔", crarr: "↵", lArr: "⇐", uArr: "⇑", rArr: "⇒", dArr: "⇓", hArr: "⇔", forall: "∀", part: "∂", exist: "∃", empty: "∅", nabla: "∇", isin: "∈", notin: "∉", ni: "∋", prod: "∏", sum: "∑", minus: "−", lowast: "∗", radic: "√", prop: "∝", infin: "∞", ang: "∠", and: "∧", or: "∨", cap: "∩", cup: "∪", int: "∫", there4: "∴", sim: "∼", cong: "≅", asymp: "≈", ne: "≠", equiv: "≡", le: "≤", ge: "≥", sub: "⊂", sup: "⊃", nsub: "⊄", sube: "⊆", supe: "⊇", oplus: "⊕", otimes: "⊗", perp: "⊥", sdot: "⋅", lceil: "⌈", rceil: "⌉", lfloor: "⌊", rfloor: "⌋", lang: "〈", rang: "〉", loz: "◊", spades: "♠", clubs: "♣", hearts: "♥", diams: "♦" }, $r = /^[\da-fA-F]+$/, qr = /^\d+$/;
function et(e) {
  return e && (e.type === "JSXIdentifier" ? e.name : e.type === "JSXNamespacedName" ? e.namespace.name + ":" + e.name.name : e.type === "JSXMemberExpression" ? et(e.object) + "." + et(e.property) : void 0);
}
var Ot = /(?:\s|\/\/.*|\/\*[^]*?\*\/)*/g;
function mi(e) {
  if (!e) throw new Error("Assert fail");
}
function Hr(e) {
  return e === "accessor";
}
function Gr(e) {
  return e === "in" || e === "out";
}
function Rt(e, t) {
  return 2 | (e ? 4 : 0) | (t ? 8 : 0);
}
function Kr(e) {
  if (e.type !== "MemberExpression") return !1;
  var t = e.property;
  return (!e.computed || !(t.type !== "TemplateLiteral" || t.expressions.length > 0)) && ns(e.object);
}
function ns(e) {
  return e.type === "Identifier" || e.type === "MemberExpression" && !e.computed && ns(e.object);
}
function yi(e) {
  return e === "private" || e === "public" || e === "protected";
}
function Wr(e) {
  var t = {}, s = t.dts, a = s !== void 0 && s, n = t.allowSatisfies, p = n !== void 0 && n;
  return function(f) {
    var v = f.acorn || Dr, x = jr(v), o = v.tokTypes, S = v.keywordTypes, I = v.isIdentifierStart, B = v.lineBreak, oe = v.isNewLine, de = v.tokContexts, Be = v.isIdentifierChar, _ = x.tokTypes, ee = x.tokContexts, Ct = x.keywordsRegExp, cs = x.tokenIsLiteralPropertyName, ps = x.tokenIsTemplate, ls = x.tokenIsTSDeclarationStart, j = x.tokenIsIdentifier, ut = x.tokenIsKeywordOrIdentifier, fs = x.tokenIsTSTypeOperator;
    function ds(T, te, X) {
      X === void 0 && (X = T.length);
      for (var G = te; G < X; G++) {
        var D = T.charCodeAt(G);
        if (oe(D)) return G < X - 1 && D === 13 && T.charCodeAt(G + 1) === 10 ? G + 2 : G + 1;
      }
      return -1;
    }
    f = (function(T, te, X) {
      var G = X.tokTypes, D = te.tokTypes;
      return (function(l) {
        function i() {
          return l.apply(this, arguments) || this;
        }
        pt(i, l);
        var r = i.prototype;
        return r.takeDecorators = function(u) {
          var c = this.decoratorStack[this.decoratorStack.length - 1];
          c.length && (u.decorators = c, this.resetStartLocationFromNode(u, c[0]), this.decoratorStack[this.decoratorStack.length - 1] = []);
        }, r.parseDecorators = function(u) {
          for (var c = this.decoratorStack[this.decoratorStack.length - 1]; this.match(D.at); ) {
            var d = this.parseDecorator();
            c.push(d);
          }
          this.match(G._export) ? u || this.unexpected() : this.canHaveLeadingDecorator() || this.raise(this.start, "Leading decorators must be attached to a class declaration.");
        }, r.parseDecorator = function() {
          var u = this.startNode();
          this.next(), this.decoratorStack.push([]);
          var c, d = this.start, m = this.startLoc;
          if (this.match(G.parenL)) {
            var y = this.start, g = this.startLoc;
            if (this.next(), c = this.parseExpression(), this.expect(G.parenR), this.options.preserveParens) {
              var b = this.startNodeAt(y, g);
              b.expression = c, c = this.finishNode(b, "ParenthesizedExpression");
            }
          } else for (c = this.parseIdent(!1); this.eat(G.dot); ) {
            var P = this.startNodeAt(d, m);
            P.object = c, P.property = this.parseIdent(!0), P.computed = !1, c = this.finishNode(P, "MemberExpression");
          }
          return u.expression = this.parseMaybeDecoratorArguments(c), this.decoratorStack.pop(), this.finishNode(u, "Decorator");
        }, r.parseMaybeDecoratorArguments = function(u) {
          if (this.eat(G.parenL)) {
            var c = this.startNodeAtNode(u);
            return c.callee = u, c.arguments = this.parseExprList(G.parenR, !1), this.finishNode(c, "CallExpression");
          }
          return u;
        }, i;
      })(T);
    })(f, x, v), f = (function(T, te, X, G) {
      var D = T.tokTypes, l = te.tokTypes, i = T.isNewLine, r = T.isIdentifierChar, u = Object.assign({ allowNamespaces: !0, allowNamespacedObjects: !0 }, {});
      return (function(c) {
        function d() {
          return c.apply(this, arguments) || this;
        }
        pt(d, c);
        var m = d.prototype;
        return m.jsx_readToken = function() {
          for (var y = "", g = this.pos; ; ) {
            this.pos >= this.input.length && this.raise(this.start, "Unterminated JSX contents");
            var b = this.input.charCodeAt(this.pos);
            switch (b) {
              case 60:
              case 123:
                return this.pos === this.start ? b === 60 && this.exprAllowed ? (++this.pos, this.finishToken(l.jsxTagStart)) : this.getTokenFromCode(b) : (y += this.input.slice(g, this.pos), this.finishToken(l.jsxText, y));
              case 38:
                y += this.input.slice(g, this.pos), y += this.jsx_readEntity(), g = this.pos;
                break;
              case 62:
              case 125:
                this.raise(this.pos, "Unexpected token `" + this.input[this.pos] + "`. Did you mean `" + (b === 62 ? "&gt;" : "&rbrace;") + '` or `{"' + this.input[this.pos] + '"}`?');
              default:
                i(b) ? (y += this.input.slice(g, this.pos), y += this.jsx_readNewLine(!0), g = this.pos) : ++this.pos;
            }
          }
        }, m.jsx_readNewLine = function(y) {
          var g, b = this.input.charCodeAt(this.pos);
          return ++this.pos, b === 13 && this.input.charCodeAt(this.pos) === 10 ? (++this.pos, g = y ? `
` : `\r
`) : g = String.fromCharCode(b), this.options.locations && (++this.curLine, this.lineStart = this.pos), g;
        }, m.jsx_readString = function(y) {
          for (var g = "", b = ++this.pos; ; ) {
            this.pos >= this.input.length && this.raise(this.start, "Unterminated string constant");
            var P = this.input.charCodeAt(this.pos);
            if (P === y) break;
            P === 38 ? (g += this.input.slice(b, this.pos), g += this.jsx_readEntity(), b = this.pos) : i(P) ? (g += this.input.slice(b, this.pos), g += this.jsx_readNewLine(!1), b = this.pos) : ++this.pos;
          }
          return g += this.input.slice(b, this.pos++), this.finishToken(D.string, g);
        }, m.jsx_readEntity = function() {
          var y, g = "", b = 0, P = this.input[this.pos];
          P !== "&" && this.raise(this.pos, "Entity must start with an ampersand");
          for (var E = ++this.pos; this.pos < this.input.length && b++ < 10; ) {
            if ((P = this.input[this.pos++]) === ";") {
              g[0] === "#" ? g[1] === "x" ? (g = g.substr(2), $r.test(g) && (y = String.fromCharCode(parseInt(g, 16)))) : (g = g.substr(1), qr.test(g) && (y = String.fromCharCode(parseInt(g, 10)))) : y = Ur[g];
              break;
            }
            g += P;
          }
          return y || (this.pos = E, "&");
        }, m.jsx_readWord = function() {
          var y, g = this.pos;
          do
            y = this.input.charCodeAt(++this.pos);
          while (r(y) || y === 45);
          return this.finishToken(l.jsxName, this.input.slice(g, this.pos));
        }, m.jsx_parseIdentifier = function() {
          var y = this.startNode();
          return this.type === l.jsxName ? y.name = this.value : this.type.keyword ? y.name = this.type.keyword : this.unexpected(), this.next(), this.finishNode(y, "JSXIdentifier");
        }, m.jsx_parseNamespacedName = function() {
          var y = this.start, g = this.startLoc, b = this.jsx_parseIdentifier();
          if (!u.allowNamespaces || !this.eat(D.colon)) return b;
          var P = this.startNodeAt(y, g);
          return P.namespace = b, P.name = this.jsx_parseIdentifier(), this.finishNode(P, "JSXNamespacedName");
        }, m.jsx_parseElementName = function() {
          if (this.type === l.jsxTagEnd) return "";
          var y = this.start, g = this.startLoc, b = this.jsx_parseNamespacedName();
          for (this.type !== D.dot || b.type !== "JSXNamespacedName" || u.allowNamespacedObjects || this.unexpected(); this.eat(D.dot); ) {
            var P = this.startNodeAt(y, g);
            P.object = b, P.property = this.jsx_parseIdentifier(), b = this.finishNode(P, "JSXMemberExpression");
          }
          return b;
        }, m.jsx_parseAttributeValue = function() {
          switch (this.type) {
            case D.braceL:
              var y = this.jsx_parseExpressionContainer();
              return y.expression.type === "JSXEmptyExpression" && this.raise(y.start, "JSX attributes must only be assigned a non-empty expression"), y;
            case l.jsxTagStart:
            case D.string:
              return this.parseExprAtom();
            default:
              this.raise(this.start, "JSX value should be either an expression or a quoted JSX text");
          }
        }, m.jsx_parseEmptyExpression = function() {
          var y = this.startNodeAt(this.lastTokEnd, this.lastTokEndLoc);
          return this.finishNodeAt(y, "JSXEmptyExpression", this.start, this.startLoc);
        }, m.jsx_parseExpressionContainer = function() {
          var y = this.startNode();
          return this.next(), y.expression = this.type === D.braceR ? this.jsx_parseEmptyExpression() : this.parseExpression(), this.expect(D.braceR), this.finishNode(y, "JSXExpressionContainer");
        }, m.jsx_parseAttribute = function() {
          var y = this.startNode();
          return this.eat(D.braceL) ? (this.expect(D.ellipsis), y.argument = this.parseMaybeAssign(), this.expect(D.braceR), this.finishNode(y, "JSXSpreadAttribute")) : (y.name = this.jsx_parseNamespacedName(), y.value = this.eat(D.eq) ? this.jsx_parseAttributeValue() : null, this.finishNode(y, "JSXAttribute"));
        }, m.jsx_parseOpeningElementAt = function(y, g) {
          var b = this.startNodeAt(y, g);
          b.attributes = [];
          var P = this.jsx_parseElementName();
          for (P && (b.name = P); this.type !== D.slash && this.type !== l.jsxTagEnd; ) b.attributes.push(this.jsx_parseAttribute());
          return b.selfClosing = this.eat(D.slash), this.expect(l.jsxTagEnd), this.finishNode(b, P ? "JSXOpeningElement" : "JSXOpeningFragment");
        }, m.jsx_parseClosingElementAt = function(y, g) {
          var b = this.startNodeAt(y, g), P = this.jsx_parseElementName();
          return P && (b.name = P), this.expect(l.jsxTagEnd), this.finishNode(b, P ? "JSXClosingElement" : "JSXClosingFragment");
        }, m.jsx_parseElementAt = function(y, g) {
          var b = this.startNodeAt(y, g), P = [], E = this.jsx_parseOpeningElementAt(y, g), L = null;
          if (!E.selfClosing) {
            e: for (; ; ) switch (this.type) {
              case l.jsxTagStart:
                if (y = this.start, g = this.startLoc, this.next(), this.eat(D.slash)) {
                  L = this.jsx_parseClosingElementAt(y, g);
                  break e;
                }
                P.push(this.jsx_parseElementAt(y, g));
                break;
              case l.jsxText:
                P.push(this.parseExprAtom());
                break;
              case D.braceL:
                P.push(this.jsx_parseExpressionContainer());
                break;
              default:
                this.unexpected();
            }
            et(L.name) !== et(E.name) && this.raise(L.start, "Expected corresponding JSX closing tag for <" + et(E.name) + ">");
          }
          var k = E.name ? "Element" : "Fragment";
          return b["opening" + k] = E, b["closing" + k] = L, b.children = P, this.type === D.relational && this.value === "<" && this.raise(this.start, "Adjacent JSX elements must be wrapped in an enclosing tag"), this.finishNode(b, "JSX" + k);
        }, m.jsx_parseText = function() {
          var y = this.parseLiteral(this.value);
          return y.type = "JSXText", y;
        }, m.jsx_parseElement = function() {
          var y = this.start, g = this.startLoc;
          return this.next(), this.jsx_parseElementAt(y, g);
        }, d;
      })(X);
    })(v, x, f), f = (function(T, te, X) {
      var G = te.tokTypes, D = X.tokTypes;
      return (function(l) {
        function i() {
          return l.apply(this, arguments) || this;
        }
        pt(i, l);
        var r = i.prototype;
        return r.parseMaybeImportAttributes = function(u) {
          if (this.type === D._with || this.type === G.assert) {
            this.next();
            var c = this.parseImportAttributes();
            c && (u.attributes = c);
          }
        }, r.parseImportAttributes = function() {
          this.expect(D.braceL);
          var u = this.parseWithEntries();
          return this.expect(D.braceR), u;
        }, r.parseWithEntries = function() {
          var u = [], c = /* @__PURE__ */ new Set();
          do {
            if (this.type === D.braceR) break;
            var d, m = this.startNode();
            d = this.type === D.string ? this.parseLiteral(this.value) : this.parseIdent(!0), this.next(), m.key = d, c.has(m.key.name) && this.raise(this.pos, "Duplicated key in attributes"), c.add(m.key.name), this.type !== D.string && this.raise(this.pos, "Only string is supported as an attribute value"), m.value = this.parseLiteral(this.value), u.push(this.finishNode(m, "ImportAttribute"));
          } while (this.eat(D.comma));
          return u;
        }, i;
      })(T);
    })(f, x, v);
    var ms = /* @__PURE__ */ (function(T) {
      function te(i, r, u) {
        var c;
        return (c = T.call(this, i, r, u) || this).preValue = null, c.preToken = null, c.isLookahead = !1, c.isAmbientContext = !1, c.inAbstractClass = !1, c.inType = !1, c.inDisallowConditionalTypesContext = !1, c.maybeInArrowParameters = !1, c.shouldParseArrowReturnType = void 0, c.shouldParseAsyncArrowReturnType = void 0, c.decoratorStack = [[]], c.importsStack = [[]], c.importOrExportOuterKind = void 0, c.tsParseConstModifier = c.tsParseModifiers.bind((function(d) {
          if (d === void 0) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
          return d;
        })(c), { allowedModifiers: ["const"], disallowedModifiers: ["in", "out"], errorTemplate: A.InvalidModifierOnTypeParameterPositions }), c;
      }
      pt(te, T);
      var X, G, D, l = te.prototype;
      return l.getTokenFromCodeInType = function(i) {
        return i === 62 || i === 60 ? this.finishOp(o.relational, 1) : T.prototype.getTokenFromCode.call(this, i);
      }, l.readToken = function(i) {
        if (!this.inType) {
          var r = this.curContext();
          if (r === ee.tc_expr) return this.jsx_readToken();
          if (r === ee.tc_oTag || r === ee.tc_cTag) {
            if (I(i)) return this.jsx_readWord();
            if (i == 62) return ++this.pos, this.finishToken(_.jsxTagEnd);
            if ((i === 34 || i === 39) && r == ee.tc_oTag) return this.jsx_readString(i);
          }
          if (i === 60 && this.exprAllowed && this.input.charCodeAt(this.pos + 1) !== 33) return ++this.pos, this.finishToken(_.jsxTagStart);
        }
        return T.prototype.readToken.call(this, i);
      }, l.getTokenFromCode = function(i) {
        return this.inType ? this.getTokenFromCodeInType(i) : i === 64 ? (++this.pos, this.finishToken(_.at)) : T.prototype.getTokenFromCode.call(this, i);
      }, l.isAbstractClass = function() {
        return this.ts_isContextual(_.abstract) && this.lookahead().type === o._class;
      }, l.finishNode = function(i, r) {
        return i.type !== "" && i.end !== 0 ? i : T.prototype.finishNode.call(this, i, r);
      }, l.tryParse = function(i, r) {
        r === void 0 && (r = this.cloneCurLookaheadState());
        var u = { node: null };
        try {
          return { node: i(function(d) {
            throw d === void 0 && (d = null), u.node = d, u;
          }), error: null, thrown: !1, aborted: !1, failState: null };
        } catch (d) {
          var c = this.getCurLookaheadState();
          if (this.setLookaheadState(r), d instanceof SyntaxError) return { node: null, error: d, thrown: !0, aborted: !1, failState: c };
          if (d === u) return { node: u.node, error: null, thrown: !1, aborted: !0, failState: c };
          throw d;
        }
      }, l.setOptionalParametersError = function(i, r) {
        var u;
        i.optionalParametersLoc = (u = r?.loc) != null ? u : this.startLoc;
      }, l.reScan_lt_gt = function() {
        this.type === o.relational && (this.pos -= 1, this.readToken_lt_gt(this.fullCharCodeAtPos()));
      }, l.reScan_lt = function() {
        var i = this.type;
        return i === o.bitShift ? (this.pos -= 2, this.finishOp(o.relational, 1), o.relational) : i;
      }, l.resetEndLocation = function(i, r) {
        r === void 0 && (r = this.lastTokEndLoc), i.end = r.column, i.loc.end = r, this.options.ranges && (i.range[1] = r.column);
      }, l.startNodeAtNode = function(i) {
        return T.prototype.startNodeAt.call(this, i.start, i.loc.start);
      }, l.nextTokenStart = function() {
        return this.nextTokenStartSince(this.pos);
      }, l.tsHasSomeModifiers = function(i, r) {
        return r.some(function(u) {
          return yi(u) ? i.accessibility === u : !!i[u];
        });
      }, l.tsIsStartOfStaticBlocks = function() {
        return this.isContextual("static") && this.lookaheadCharCode() === 123;
      }, l.tsCheckForInvalidTypeCasts = function(i) {
        var r = this;
        i.forEach(function(u) {
          u?.type === "TSTypeCastExpression" && r.raise(u.typeAnnotation.start, A.UnexpectedTypeAnnotation);
        });
      }, l.atPossibleAsyncArrow = function(i) {
        return i.type === "Identifier" && i.name === "async" && this.lastTokEndLoc.column === i.end && !this.canInsertSemicolon() && i.end - i.start == 5 && i.start === this.potentialArrowAt;
      }, l.tsIsIdentifier = function() {
        return j(this.type);
      }, l.tsTryParseTypeOrTypePredicateAnnotation = function() {
        return this.match(o.colon) ? this.tsParseTypeOrTypePredicateAnnotation(o.colon) : void 0;
      }, l.tsTryParseGenericAsyncArrowFunction = function(i, r, u) {
        var c = this;
        if (this.tsMatchLeftRelational()) {
          var d = this.maybeInArrowParameters;
          this.maybeInArrowParameters = !0;
          var m = this.tsTryParseAndCatch(function() {
            var y = c.startNodeAt(i, r);
            return y.typeParameters = c.tsParseTypeParameters(), T.prototype.parseFunctionParams.call(c, y), y.returnType = c.tsTryParseTypeOrTypePredicateAnnotation(), c.expect(o.arrow), y;
          });
          if (this.maybeInArrowParameters = d, m) return T.prototype.parseArrowExpression.call(this, m, null, !0, u);
        }
      }, l.tsParseTypeArgumentsInExpression = function() {
        if (this.reScan_lt() === o.relational) return this.tsParseTypeArguments();
      }, l.tsInNoContext = function(i) {
        var r = this.context;
        this.context = [r[0]];
        try {
          return i();
        } finally {
          this.context = r;
        }
      }, l.tsTryParseTypeAnnotation = function() {
        return this.match(o.colon) ? this.tsParseTypeAnnotation() : void 0;
      }, l.isUnparsedContextual = function(i, r) {
        var u = i + r.length;
        if (this.input.slice(i, u) === r) {
          var c = this.input.charCodeAt(u);
          return !(Be(c) || (64512 & c) == 55296);
        }
        return !1;
      }, l.isAbstractConstructorSignature = function() {
        return this.ts_isContextual(_.abstract) && this.lookahead().type === o._new;
      }, l.nextTokenStartSince = function(i) {
        return Ot.lastIndex = i, Ot.test(this.input) ? Ot.lastIndex : i;
      }, l.lookaheadCharCode = function() {
        return this.input.charCodeAt(this.nextTokenStart());
      }, l.compareLookaheadState = function(i, r) {
        for (var u = 0, c = Object.keys(i); u < c.length; u++) {
          var d = c[u];
          if (i[d] !== r[d]) return !1;
        }
        return !0;
      }, l.createLookaheadState = function() {
        this.value = null, this.context = [this.curContext()];
      }, l.getCurLookaheadState = function() {
        return { endLoc: this.endLoc, lastTokEnd: this.lastTokEnd, lastTokStart: this.lastTokStart, lastTokStartLoc: this.lastTokStartLoc, pos: this.pos, value: this.value, type: this.type, start: this.start, end: this.end, context: this.context, startLoc: this.startLoc, lastTokEndLoc: this.lastTokEndLoc, curLine: this.curLine, lineStart: this.lineStart, curPosition: this.curPosition, containsEsc: this.containsEsc };
      }, l.cloneCurLookaheadState = function() {
        return { pos: this.pos, value: this.value, type: this.type, start: this.start, end: this.end, context: this.context && this.context.slice(), startLoc: this.startLoc, lastTokEndLoc: this.lastTokEndLoc, endLoc: this.endLoc, lastTokEnd: this.lastTokEnd, lastTokStart: this.lastTokStart, lastTokStartLoc: this.lastTokStartLoc, curLine: this.curLine, lineStart: this.lineStart, curPosition: this.curPosition, containsEsc: this.containsEsc };
      }, l.setLookaheadState = function(i) {
        this.pos = i.pos, this.value = i.value, this.endLoc = i.endLoc, this.lastTokEnd = i.lastTokEnd, this.lastTokStart = i.lastTokStart, this.lastTokStartLoc = i.lastTokStartLoc, this.type = i.type, this.start = i.start, this.end = i.end, this.context = i.context, this.startLoc = i.startLoc, this.lastTokEndLoc = i.lastTokEndLoc, this.curLine = i.curLine, this.lineStart = i.lineStart, this.curPosition = i.curPosition, this.containsEsc = i.containsEsc;
      }, l.tsLookAhead = function(i) {
        var r = this.getCurLookaheadState(), u = i();
        return this.setLookaheadState(r), u;
      }, l.lookahead = function(i) {
        var r = this.getCurLookaheadState();
        if (this.createLookaheadState(), this.isLookahead = !0, i !== void 0) for (var u = 0; u < i; u++) this.nextToken();
        else this.nextToken();
        this.isLookahead = !1;
        var c = this.getCurLookaheadState();
        return this.setLookaheadState(r), c;
      }, l.readWord = function() {
        var i = this.readWord1(), r = o.name;
        return this.keywords.test(i) ? r = S[i] : new RegExp(Ct).test(i) && (r = _[i]), this.finishToken(r, i);
      }, l.skipBlockComment = function() {
        var i;
        this.isLookahead || (i = this.options.onComment && this.curPosition());
        var r = this.pos, u = this.input.indexOf("*/", this.pos += 2);
        if (u === -1 && this.raise(this.pos - 2, "Unterminated comment"), this.pos = u + 2, this.options.locations) for (var c, d = r; (c = ds(this.input, d, this.pos)) > -1; ) ++this.curLine, d = this.lineStart = c;
        this.isLookahead || this.options.onComment && this.options.onComment(!0, this.input.slice(r + 2, u), r, this.pos, i, this.curPosition());
      }, l.skipLineComment = function(i) {
        var r, u = this.pos;
        this.isLookahead || (r = this.options.onComment && this.curPosition());
        for (var c = this.input.charCodeAt(this.pos += i); this.pos < this.input.length && !oe(c); ) c = this.input.charCodeAt(++this.pos);
        this.isLookahead || this.options.onComment && this.options.onComment(!1, this.input.slice(u + i, this.pos), u, this.pos, r, this.curPosition());
      }, l.finishToken = function(i, r) {
        this.preValue = this.value, this.preToken = this.type, this.end = this.pos, this.options.locations && (this.endLoc = this.curPosition());
        var u = this.type;
        this.type = i, this.value = r, this.isLookahead || this.updateContext(u);
      }, l.resetStartLocation = function(i, r, u) {
        i.start = r, i.loc.start = u, this.options.ranges && (i.range[0] = r);
      }, l.isLineTerminator = function() {
        return this.eat(o.semi) || T.prototype.canInsertSemicolon.call(this);
      }, l.hasFollowingLineBreak = function() {
        return fi.lastIndex = this.end, fi.test(this.input);
      }, l.addExtra = function(i, r, u, c) {
        if (c === void 0 && (c = !0), i) {
          var d = i.extra = i.extra || {};
          c ? d[r] = u : Object.defineProperty(d, r, { enumerable: c, value: u });
        }
      }, l.isLiteralPropertyName = function() {
        return cs(this.type);
      }, l.hasPrecedingLineBreak = function() {
        return B.test(this.input.slice(this.lastTokEndLoc.index, this.start));
      }, l.createIdentifier = function(i, r) {
        return i.name = r, this.finishNode(i, "Identifier");
      }, l.resetStartLocationFromNode = function(i, r) {
        this.resetStartLocation(i, r.start, r.loc.start);
      }, l.isThisParam = function(i) {
        return i.type === "Identifier" && i.name === "this";
      }, l.isLookaheadContextual = function(i) {
        var r = this.nextTokenStart();
        return this.isUnparsedContextual(r, i);
      }, l.ts_type_isContextual = function(i, r) {
        return i === r && !this.containsEsc;
      }, l.ts_isContextual = function(i) {
        return this.type === i && !this.containsEsc;
      }, l.ts_isContextualWithState = function(i, r) {
        return i.type === r && !i.containsEsc;
      }, l.isContextualWithState = function(i, r) {
        return r.type === o.name && r.value === i && !r.containsEsc;
      }, l.tsIsStartOfMappedType = function() {
        return this.next(), this.eat(o.plusMin) ? this.ts_isContextual(_.readonly) : (this.ts_isContextual(_.readonly) && this.next(), !!this.match(o.bracketL) && (this.next(), !!this.tsIsIdentifier() && (this.next(), this.match(o._in))));
      }, l.tsInDisallowConditionalTypesContext = function(i) {
        var r = this.inDisallowConditionalTypesContext;
        this.inDisallowConditionalTypesContext = !0;
        try {
          return i();
        } finally {
          this.inDisallowConditionalTypesContext = r;
        }
      }, l.tsTryParseType = function() {
        return this.tsEatThenParseType(o.colon);
      }, l.match = function(i) {
        return this.type === i;
      }, l.matchJsx = function(i) {
        return this.type === x.tokTypes[i];
      }, l.ts_eatWithState = function(i, r, u) {
        if (i === u.type) {
          for (var c = 0; c < r; c++) this.next();
          return !0;
        }
        return !1;
      }, l.ts_eatContextualWithState = function(i, r, u) {
        if (Ct.test(i)) {
          if (this.ts_isContextualWithState(u, _[i])) {
            for (var c = 0; c < r; c++) this.next();
            return !0;
          }
          return !1;
        }
        if (!this.isContextualWithState(i, u)) return !1;
        for (var d = 0; d < r; d++) this.next();
        return !0;
      }, l.canHaveLeadingDecorator = function() {
        return this.match(o._class);
      }, l.eatContextual = function(i) {
        return Ct.test(i) ? !!this.ts_isContextual(_[i]) && (this.next(), !0) : T.prototype.eatContextual.call(this, i);
      }, l.tsIsExternalModuleReference = function() {
        return this.isContextual("require") && this.lookaheadCharCode() === 40;
      }, l.tsParseExternalModuleReference = function() {
        var i = this.startNode();
        return this.expectContextual("require"), this.expect(o.parenL), this.match(o.string) || this.unexpected(), i.expression = this.parseExprAtom(), this.expect(o.parenR), this.finishNode(i, "TSExternalModuleReference");
      }, l.tsParseEntityName = function(i) {
        i === void 0 && (i = !0);
        for (var r = this.parseIdent(i); this.eat(o.dot); ) {
          var u = this.startNodeAtNode(r);
          u.left = r, u.right = this.parseIdent(i), r = this.finishNode(u, "TSQualifiedName");
        }
        return r;
      }, l.tsParseEnumMember = function() {
        var i = this.startNode();
        return i.id = this.match(o.string) ? this.parseLiteral(this.value) : this.parseIdent(!0), this.eat(o.eq) && (i.initializer = this.parseMaybeAssign()), this.finishNode(i, "TSEnumMember");
      }, l.tsParseEnumDeclaration = function(i, r) {
        return r === void 0 && (r = {}), r.const && (i.const = !0), r.declare && (i.declare = !0), this.expectContextual("enum"), i.id = this.parseIdent(), this.checkLValSimple(i.id), this.expect(o.braceL), i.members = this.tsParseDelimitedList("EnumMembers", this.tsParseEnumMember.bind(this)), this.expect(o.braceR), this.finishNode(i, "TSEnumDeclaration");
      }, l.tsParseModuleBlock = function() {
        var i = this.startNode();
        for (T.prototype.enterScope.call(this, 512), this.expect(o.braceL), i.body = []; this.type !== o.braceR; ) {
          var r = this.parseStatement(null, !0);
          i.body.push(r);
        }
        return this.next(), T.prototype.exitScope.call(this), this.finishNode(i, "TSModuleBlock");
      }, l.tsParseAmbientExternalModuleDeclaration = function(i) {
        return this.ts_isContextual(_.global) ? (i.global = !0, i.id = this.parseIdent()) : this.match(o.string) ? i.id = this.parseLiteral(this.value) : this.unexpected(), this.match(o.braceL) ? (T.prototype.enterScope.call(this, Qe), i.body = this.tsParseModuleBlock(), T.prototype.exitScope.call(this)) : T.prototype.semicolon.call(this), this.finishNode(i, "TSModuleDeclaration");
      }, l.tsTryParseDeclare = function(i) {
        var r = this;
        if (!this.isLineTerminator()) {
          var u, c = this.type;
          return this.isContextual("let") && (c = o._var, u = "let"), this.tsInAmbientContext(function() {
            if (c === o._function) return i.declare = !0, r.parseFunctionStatement(i, !1, !0);
            if (c === o._class) return i.declare = !0, r.parseClass(i, !0);
            if (c === _.enum) return r.tsParseEnumDeclaration(i, { declare: !0 });
            if (c === _.global) return r.tsParseAmbientExternalModuleDeclaration(i);
            if (c === o._const || c === o._var) return r.match(o._const) && r.isLookaheadContextual("enum") ? (r.expect(o._const), r.tsParseEnumDeclaration(i, { const: !0, declare: !0 })) : (i.declare = !0, r.parseVarStatement(i, u || r.value, !0));
            if (c === _.interface) {
              var d = r.tsParseInterfaceDeclaration(i, { declare: !0 });
              if (d) return d;
            }
            return j(c) ? r.tsParseDeclaration(i, r.value, !0) : void 0;
          });
        }
      }, l.tsIsListTerminator = function(i) {
        switch (i) {
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
      }, l.tsParseDelimitedListWorker = function(i, r, u, c) {
        for (var d = [], m = -1; !this.tsIsListTerminator(i); ) {
          m = -1;
          var y = r();
          if (y == null) return;
          if (d.push(y), !this.eat(o.comma)) {
            if (this.tsIsListTerminator(i)) break;
            return void (u && this.expect(o.comma));
          }
          m = this.lastTokStart;
        }
        return c && (c.value = m), d;
      }, l.tsParseDelimitedList = function(i, r, u) {
        return (function(c) {
          if (c == null) throw new Error("Unexpected " + c + " value.");
          return c;
        })(this.tsParseDelimitedListWorker(i, r, !0, u));
      }, l.tsParseBracketedList = function(i, r, u, c, d) {
        c || this.expect(u ? o.bracketL : o.relational);
        var m = this.tsParseDelimitedList(i, r, d);
        return this.expect(u ? o.bracketR : o.relational), m;
      }, l.tsParseTypeParameterName = function() {
        return this.parseIdent().name;
      }, l.tsEatThenParseType = function(i) {
        return this.match(i) ? this.tsNextThenParseType() : void 0;
      }, l.tsExpectThenParseType = function(i) {
        var r = this;
        return this.tsDoThenParseType(function() {
          return r.expect(i);
        });
      }, l.tsNextThenParseType = function() {
        var i = this;
        return this.tsDoThenParseType(function() {
          return i.next();
        });
      }, l.tsDoThenParseType = function(i) {
        var r = this;
        return this.tsInType(function() {
          return i(), r.tsParseType();
        });
      }, l.tsSkipParameterStart = function() {
        if (j(this.type) || this.match(o._this)) return this.next(), !0;
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
      }, l.tsIsUnambiguouslyStartOfFunctionType = function() {
        return this.next(), !!(this.match(o.parenR) || this.match(o.ellipsis) || this.tsSkipParameterStart() && (this.match(o.colon) || this.match(o.comma) || this.match(o.question) || this.match(o.eq) || this.match(o.parenR) && (this.next(), this.match(o.arrow))));
      }, l.tsIsStartOfFunctionType = function() {
        return !!this.tsMatchLeftRelational() || this.match(o.parenL) && this.tsLookAhead(this.tsIsUnambiguouslyStartOfFunctionType.bind(this));
      }, l.tsInAllowConditionalTypesContext = function(i) {
        var r = this.inDisallowConditionalTypesContext;
        this.inDisallowConditionalTypesContext = !1;
        try {
          return i();
        } finally {
          this.inDisallowConditionalTypesContext = r;
        }
      }, l.tsParseBindingListForSignature = function() {
        var i = this;
        return T.prototype.parseBindingList.call(this, o.parenR, !0, !0).map(function(r) {
          return r.type !== "Identifier" && r.type !== "RestElement" && r.type !== "ObjectPattern" && r.type !== "ArrayPattern" && i.raise(r.start, A.UnsupportedSignatureParameterKind(r.type)), r;
        });
      }, l.tsParseTypePredicateAsserts = function() {
        if (this.type !== _.asserts) return !1;
        var i = this.containsEsc;
        return this.next(), !(!j(this.type) && !this.match(o._this) || (i && this.raise(this.lastTokStart, "Escape sequence in keyword asserts"), 0));
      }, l.tsParseThisTypeNode = function() {
        var i = this.startNode();
        return this.next(), this.finishNode(i, "TSThisType");
      }, l.tsParseTypeAnnotation = function(i, r) {
        var u = this;
        return i === void 0 && (i = !0), r === void 0 && (r = this.startNode()), this.tsInType(function() {
          i && u.expect(o.colon), r.typeAnnotation = u.tsParseType();
        }), this.finishNode(r, "TSTypeAnnotation");
      }, l.tsParseThisTypePredicate = function(i) {
        this.next();
        var r = this.startNodeAtNode(i);
        return r.parameterName = i, r.typeAnnotation = this.tsParseTypeAnnotation(!1), r.asserts = !1, this.finishNode(r, "TSTypePredicate");
      }, l.tsParseThisTypeOrThisTypePredicate = function() {
        var i = this.tsParseThisTypeNode();
        return this.isContextual("is") && !this.hasPrecedingLineBreak() ? this.tsParseThisTypePredicate(i) : i;
      }, l.tsParseTypePredicatePrefix = function() {
        var i = this.parseIdent();
        if (this.isContextual("is") && !this.hasPrecedingLineBreak()) return this.next(), i;
      }, l.tsParseTypeOrTypePredicateAnnotation = function(i) {
        var r = this;
        return this.tsInType(function() {
          var u = r.startNode();
          r.expect(i);
          var c = r.startNode(), d = !!r.tsTryParse(r.tsParseTypePredicateAsserts.bind(r));
          if (d && r.match(o._this)) {
            var m = r.tsParseThisTypeOrThisTypePredicate();
            return m.type === "TSThisType" ? (c.parameterName = m, c.asserts = !0, c.typeAnnotation = null, m = r.finishNode(c, "TSTypePredicate")) : (r.resetStartLocationFromNode(m, c), m.asserts = !0), u.typeAnnotation = m, r.finishNode(u, "TSTypeAnnotation");
          }
          var y = r.tsIsIdentifier() && r.tsTryParse(r.tsParseTypePredicatePrefix.bind(r));
          if (!y) return d ? (c.parameterName = r.parseIdent(), c.asserts = d, c.typeAnnotation = null, u.typeAnnotation = r.finishNode(c, "TSTypePredicate"), r.finishNode(u, "TSTypeAnnotation")) : r.tsParseTypeAnnotation(!1, u);
          var g = r.tsParseTypeAnnotation(!1);
          return c.parameterName = y, c.typeAnnotation = g, c.asserts = d, u.typeAnnotation = r.finishNode(c, "TSTypePredicate"), r.finishNode(u, "TSTypeAnnotation");
        });
      }, l.tsFillSignature = function(i, r) {
        var u = i === o.arrow;
        r.typeParameters = this.tsTryParseTypeParameters(), this.expect(o.parenL), r.parameters = this.tsParseBindingListForSignature(), (u || this.match(i)) && (r.typeAnnotation = this.tsParseTypeOrTypePredicateAnnotation(i));
      }, l.tsTryNextParseConstantContext = function() {
        if (this.lookahead().type !== o._const) return null;
        this.next();
        var i = this.tsParseTypeReference();
        return i.typeParameters && this.raise(i.typeName.start, A.CannotFindName({ name: "const" })), i;
      }, l.tsParseFunctionOrConstructorType = function(i, r) {
        var u = this, c = this.startNode();
        return i === "TSConstructorType" && (c.abstract = !!r, r && this.next(), this.next()), this.tsInAllowConditionalTypesContext(function() {
          return u.tsFillSignature(o.arrow, c);
        }), this.finishNode(c, i);
      }, l.tsParseUnionOrIntersectionType = function(i, r, u) {
        var c = this.startNode(), d = this.eat(u), m = [];
        do
          m.push(r());
        while (this.eat(u));
        return m.length !== 1 || d ? (c.types = m, this.finishNode(c, i)) : m[0];
      }, l.tsCheckTypeAnnotationForReadOnly = function(i) {
        switch (i.typeAnnotation.type) {
          case "TSTupleType":
          case "TSArrayType":
            return;
          default:
            this.raise(i.start, A.UnexpectedReadonly);
        }
      }, l.tsParseTypeOperator = function() {
        var i = this.startNode(), r = this.value;
        return this.next(), i.operator = r, i.typeAnnotation = this.tsParseTypeOperatorOrHigher(), r === "readonly" && this.tsCheckTypeAnnotationForReadOnly(i), this.finishNode(i, "TSTypeOperator");
      }, l.tsParseConstraintForInferType = function() {
        var i = this;
        if (this.eat(o._extends)) {
          var r = this.tsInDisallowConditionalTypesContext(function() {
            return i.tsParseType();
          });
          if (this.inDisallowConditionalTypesContext || !this.match(o.question)) return r;
        }
      }, l.tsParseInferType = function() {
        var i = this, r = this.startNode();
        this.expectContextual("infer");
        var u = this.startNode();
        return u.name = this.tsParseTypeParameterName(), u.constraint = this.tsTryParse(function() {
          return i.tsParseConstraintForInferType();
        }), r.typeParameter = this.finishNode(u, "TSTypeParameter"), this.finishNode(r, "TSInferType");
      }, l.tsParseLiteralTypeNode = function() {
        var i = this, r = this.startNode();
        return r.literal = (function() {
          switch (i.type) {
            case o.num:
            case o.string:
            case o._true:
            case o._false:
              return i.parseExprAtom();
            default:
              i.unexpected();
          }
        })(), this.finishNode(r, "TSLiteralType");
      }, l.tsParseImportType = function() {
        var i = this.startNode();
        return this.expect(o._import), this.expect(o.parenL), this.match(o.string) || this.raise(this.start, A.UnsupportedImportTypeArgument), i.argument = this.parseExprAtom(), this.expect(o.parenR), this.eat(o.dot) && (i.qualifier = this.tsParseEntityName()), this.tsMatchLeftRelational() && (i.typeParameters = this.tsParseTypeArguments()), this.finishNode(i, "TSImportType");
      }, l.tsParseTypeQuery = function() {
        var i = this.startNode();
        return this.expect(o._typeof), i.exprName = this.match(o._import) ? this.tsParseImportType() : this.tsParseEntityName(), !this.hasPrecedingLineBreak() && this.tsMatchLeftRelational() && (i.typeParameters = this.tsParseTypeArguments()), this.finishNode(i, "TSTypeQuery");
      }, l.tsParseMappedTypeParameter = function() {
        var i = this.startNode();
        return i.name = this.tsParseTypeParameterName(), i.constraint = this.tsExpectThenParseType(o._in), this.finishNode(i, "TSTypeParameter");
      }, l.tsParseMappedType = function() {
        var i = this.startNode();
        return this.expect(o.braceL), this.match(o.plusMin) ? (i.readonly = this.value, this.next(), this.expectContextual("readonly")) : this.eatContextual("readonly") && (i.readonly = !0), this.expect(o.bracketL), i.typeParameter = this.tsParseMappedTypeParameter(), i.nameType = this.eatContextual("as") ? this.tsParseType() : null, this.expect(o.bracketR), this.match(o.plusMin) ? (i.optional = this.value, this.next(), this.expect(o.question)) : this.eat(o.question) && (i.optional = !0), i.typeAnnotation = this.tsTryParseType(), this.semicolon(), this.expect(o.braceR), this.finishNode(i, "TSMappedType");
      }, l.tsParseTypeLiteral = function() {
        var i = this.startNode();
        return i.members = this.tsParseObjectTypeMembers(), this.finishNode(i, "TSTypeLiteral");
      }, l.tsParseTupleElementType = function() {
        var i = this.startLoc, r = this.start, u = this.eat(o.ellipsis), c = this.tsParseType(), d = this.eat(o.question);
        if (this.eat(o.colon)) {
          var m = this.startNodeAtNode(c);
          m.optional = d, c.type !== "TSTypeReference" || c.typeParameters || c.typeName.type !== "Identifier" ? (this.raise(c.start, A.InvalidTupleMemberLabel), m.label = c) : m.label = c.typeName, m.elementType = this.tsParseType(), c = this.finishNode(m, "TSNamedTupleMember");
        } else if (d) {
          var y = this.startNodeAtNode(c);
          y.typeAnnotation = c, c = this.finishNode(y, "TSOptionalType");
        }
        if (u) {
          var g = this.startNodeAt(r, i);
          g.typeAnnotation = c, c = this.finishNode(g, "TSRestType");
        }
        return c;
      }, l.tsParseTupleType = function() {
        var i = this, r = this.startNode();
        r.elementTypes = this.tsParseBracketedList("TupleElementTypes", this.tsParseTupleElementType.bind(this), !0, !1);
        var u = !1, c = null;
        return r.elementTypes.forEach(function(d) {
          var m = d.type;
          !u || m === "TSRestType" || m === "TSOptionalType" || m === "TSNamedTupleMember" && d.optional || i.raise(d.start, A.OptionalTypeBeforeRequired), u || (u = m === "TSNamedTupleMember" && d.optional || m === "TSOptionalType");
          var y = m;
          m === "TSRestType" && (y = (d = d.typeAnnotation).type);
          var g = y === "TSNamedTupleMember";
          c != null || (c = g), c !== g && i.raise(d.start, A.MixedLabeledAndUnlabeledElements);
        }), this.finishNode(r, "TSTupleType");
      }, l.tsParseTemplateLiteralType = function() {
        var i = this.startNode();
        return i.literal = this.parseTemplate({ isTagged: !1 }), this.finishNode(i, "TSLiteralType");
      }, l.tsParseTypeReference = function() {
        var i = this.startNode();
        return i.typeName = this.tsParseEntityName(), !this.hasPrecedingLineBreak() && this.tsMatchLeftRelational() && (i.typeParameters = this.tsParseTypeArguments()), this.finishNode(i, "TSTypeReference");
      }, l.tsMatchLeftRelational = function() {
        return this.match(o.relational) && this.value === "<";
      }, l.tsMatchRightRelational = function() {
        return this.match(o.relational) && this.value === ">";
      }, l.tsParseParenthesizedType = function() {
        var i = this.startNode();
        return this.expect(o.parenL), i.typeAnnotation = this.tsParseType(), this.expect(o.parenR), this.finishNode(i, "TSParenthesizedType");
      }, l.tsParseNonArrayType = function() {
        switch (this.type) {
          case o.string:
          case o.num:
          case o._true:
          case o._false:
            return this.tsParseLiteralTypeNode();
          case o.plusMin:
            if (this.value === "-") {
              var i = this.startNode();
              return this.lookahead().type !== o.num && this.unexpected(), i.literal = this.parseMaybeUnary(), this.finishNode(i, "TSLiteralType");
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
            var r = this.type;
            if (j(r) || r === o._void || r === o._null) {
              var u = r === o._void ? "TSVoidKeyword" : r === o._null ? "TSNullKeyword" : (function(d) {
                switch (d) {
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
              if (u !== void 0 && this.lookaheadCharCode() !== 46) {
                var c = this.startNode();
                return this.next(), this.finishNode(c, u);
              }
              return this.tsParseTypeReference();
            }
        }
        this.unexpected();
      }, l.tsParseArrayTypeOrHigher = function() {
        for (var i = this.tsParseNonArrayType(); !this.hasPrecedingLineBreak() && this.eat(o.bracketL); ) if (this.match(o.bracketR)) {
          var r = this.startNodeAtNode(i);
          r.elementType = i, this.expect(o.bracketR), i = this.finishNode(r, "TSArrayType");
        } else {
          var u = this.startNodeAtNode(i);
          u.objectType = i, u.indexType = this.tsParseType(), this.expect(o.bracketR), i = this.finishNode(u, "TSIndexedAccessType");
        }
        return i;
      }, l.tsParseTypeOperatorOrHigher = function() {
        var i = this;
        return fs(this.type) && !this.containsEsc ? this.tsParseTypeOperator() : this.isContextual("infer") ? this.tsParseInferType() : this.tsInAllowConditionalTypesContext(function() {
          return i.tsParseArrayTypeOrHigher();
        });
      }, l.tsParseIntersectionTypeOrHigher = function() {
        return this.tsParseUnionOrIntersectionType("TSIntersectionType", this.tsParseTypeOperatorOrHigher.bind(this), o.bitwiseAND);
      }, l.tsParseUnionTypeOrHigher = function() {
        return this.tsParseUnionOrIntersectionType("TSUnionType", this.tsParseIntersectionTypeOrHigher.bind(this), o.bitwiseOR);
      }, l.tsParseNonConditionalType = function() {
        return this.tsIsStartOfFunctionType() ? this.tsParseFunctionOrConstructorType("TSFunctionType") : this.match(o._new) ? this.tsParseFunctionOrConstructorType("TSConstructorType") : this.isAbstractConstructorSignature() ? this.tsParseFunctionOrConstructorType("TSConstructorType", !0) : this.tsParseUnionTypeOrHigher();
      }, l.tsParseType = function() {
        var i = this;
        mi(this.inType);
        var r = this.tsParseNonConditionalType();
        if (this.inDisallowConditionalTypesContext || this.hasPrecedingLineBreak() || !this.eat(o._extends)) return r;
        var u = this.startNodeAtNode(r);
        return u.checkType = r, u.extendsType = this.tsInDisallowConditionalTypesContext(function() {
          return i.tsParseNonConditionalType();
        }), this.expect(o.question), u.trueType = this.tsInAllowConditionalTypesContext(function() {
          return i.tsParseType();
        }), this.expect(o.colon), u.falseType = this.tsInAllowConditionalTypesContext(function() {
          return i.tsParseType();
        }), this.finishNode(u, "TSConditionalType");
      }, l.tsIsUnambiguouslyIndexSignature = function() {
        return this.next(), !!j(this.type) && (this.next(), this.match(o.colon));
      }, l.tsInType = function(i) {
        var r = this.inType;
        this.inType = !0;
        try {
          return i();
        } finally {
          this.inType = r;
        }
      }, l.tsTryParseIndexSignature = function(i) {
        if (this.match(o.bracketL) && this.tsLookAhead(this.tsIsUnambiguouslyIndexSignature.bind(this))) {
          this.expect(o.bracketL);
          var r = this.parseIdent();
          r.typeAnnotation = this.tsParseTypeAnnotation(), this.resetEndLocation(r), this.expect(o.bracketR), i.parameters = [r];
          var u = this.tsTryParseTypeAnnotation();
          return u && (i.typeAnnotation = u), this.tsParseTypeMemberSemicolon(), this.finishNode(i, "TSIndexSignature");
        }
      }, l.tsParseNoneModifiers = function(i) {
        this.tsParseModifiers({ modified: i, allowedModifiers: [], disallowedModifiers: ["in", "out"], errorTemplate: A.InvalidModifierOnTypeParameterPositions });
      }, l.tsParseTypeParameter = function(i) {
        i === void 0 && (i = this.tsParseNoneModifiers.bind(this));
        var r = this.startNode();
        return i(r), r.name = this.tsParseTypeParameterName(), r.constraint = this.tsEatThenParseType(o._extends), r.default = this.tsEatThenParseType(o.eq), this.finishNode(r, "TSTypeParameter");
      }, l.tsParseTypeParameters = function(i) {
        var r = this.startNode();
        this.tsMatchLeftRelational() || this.matchJsx("jsxTagStart") ? this.next() : this.unexpected();
        var u = { value: -1 };
        return r.params = this.tsParseBracketedList("TypeParametersOrArguments", this.tsParseTypeParameter.bind(this, i), !1, !0, u), r.params.length === 0 && this.raise(this.start, A.EmptyTypeParameters), u.value !== -1 && this.addExtra(r, "trailingComma", u.value), this.finishNode(r, "TSTypeParameterDeclaration");
      }, l.tsTryParseTypeParameters = function(i) {
        if (this.tsMatchLeftRelational()) return this.tsParseTypeParameters(i);
      }, l.tsTryParse = function(i) {
        var r = this.getCurLookaheadState(), u = i();
        return u !== void 0 && u !== !1 ? u : void this.setLookaheadState(r);
      }, l.tsTokenCanFollowModifier = function() {
        return (this.match(o.bracketL) || this.match(o.braceL) || this.match(o.star) || this.match(o.ellipsis) || this.match(o.privateId) || this.isLiteralPropertyName()) && !this.hasPrecedingLineBreak();
      }, l.tsNextTokenCanFollowModifier = function() {
        return this.next(!0), this.tsTokenCanFollowModifier();
      }, l.tsParseModifier = function(i, r) {
        if (j(this.type) || this.type === o._in) {
          var u = this.value;
          if (i.indexOf(u) !== -1 && !this.containsEsc) {
            if (r && this.tsIsStartOfStaticBlocks()) return;
            if (this.tsTryParse(this.tsNextTokenCanFollowModifier.bind(this))) return u;
          }
        }
      }, l.tsParseModifiersByMap = function(i) {
        for (var r = i.modified, u = i.map, c = 0, d = Object.keys(u); c < d.length; c++) {
          var m = d[c];
          r[m] = u[m];
        }
      }, l.tsParseModifiers = function(i) {
        for (var r = this, u = i.modified, c = i.allowedModifiers, d = i.disallowedModifiers, m = i.stopOnStartOfClassStaticBlock, y = i.errorTemplate, g = y === void 0 ? A.InvalidModifierOnTypeMember : y, b = {}, P = function($, U, q, K) {
          U === q && u[K] && r.raise($.column, A.InvalidModifiersOrder({ orderedModifiers: [q, K] }));
        }, E = function($, U, q, K) {
          (u[q] && U === K || u[K] && U === q) && r.raise($.column, A.IncompatibleModifiers({ modifiers: [q, K] }));
        }; ; ) {
          var L = this.startLoc, k = this.tsParseModifier(c.concat(d ?? []), m);
          if (!k) break;
          yi(k) ? u.accessibility ? this.raise(this.start, A.DuplicateAccessibilityModifier()) : (P(L, k, k, "override"), P(L, k, k, "static"), P(L, k, k, "readonly"), P(L, k, k, "accessor"), b.accessibility = k, u.accessibility = k) : Gr(k) ? u[k] ? this.raise(this.start, A.DuplicateModifier({ modifier: k })) : (P(L, k, "in", "out"), b[k] = k, u[k] = !0) : Hr(k) ? u[k] ? this.raise(this.start, A.DuplicateModifier({ modifier: k })) : (E(L, k, "accessor", "readonly"), E(L, k, "accessor", "static"), E(L, k, "accessor", "override"), b[k] = k, u[k] = !0) : Object.hasOwnProperty.call(u, k) ? this.raise(this.start, A.DuplicateModifier({ modifier: k })) : (P(L, k, "static", "readonly"), P(L, k, "static", "override"), P(L, k, "override", "readonly"), P(L, k, "abstract", "override"), E(L, k, "declare", "override"), E(L, k, "static", "abstract"), b[k] = k, u[k] = !0), d != null && d.includes(k) && this.raise(this.start, g);
        }
        return b;
      }, l.tsParseInOutModifiers = function(i) {
        this.tsParseModifiers({ modified: i, allowedModifiers: ["in", "out"], disallowedModifiers: ["public", "private", "protected", "readonly", "declare", "abstract", "override"], errorTemplate: A.InvalidModifierOnTypeParameter });
      }, l.tsParseTypeArguments = function() {
        var i = this, r = this.startNode();
        return r.params = this.tsInType(function() {
          return i.tsInNoContext(function() {
            return i.expect(o.relational), i.tsParseDelimitedList("TypeParametersOrArguments", i.tsParseType.bind(i));
          });
        }), r.params.length === 0 && this.raise(this.start, A.EmptyTypeArguments), this.exprAllowed = !1, this.expect(o.relational), this.finishNode(r, "TSTypeParameterInstantiation");
      }, l.tsParseHeritageClause = function(i) {
        var r = this, u = this.start, c = this.tsParseDelimitedList("HeritageClauseElement", function() {
          var d = r.startNode();
          return d.expression = r.tsParseEntityName(), r.tsMatchLeftRelational() && (d.typeParameters = r.tsParseTypeArguments()), r.finishNode(d, "TSExpressionWithTypeArguments");
        });
        return c.length || this.raise(u, A.EmptyHeritageClauseType({ token: i })), c;
      }, l.tsParseTypeMemberSemicolon = function() {
        this.eat(o.comma) || this.isLineTerminator() || this.expect(o.semi);
      }, l.tsTryParseAndCatch = function(i) {
        var r = this.tryParse(function(u) {
          return i() || u();
        });
        if (!r.aborted && r.node) return r.error && this.setLookaheadState(r.failState), r.node;
      }, l.tsParseSignatureMember = function(i, r) {
        return this.tsFillSignature(o.colon, r), this.tsParseTypeMemberSemicolon(), this.finishNode(r, i);
      }, l.tsParsePropertyOrMethodSignature = function(i, r) {
        this.eat(o.question) && (i.optional = !0);
        var u = i;
        if (this.match(o.parenL) || this.tsMatchLeftRelational()) {
          r && this.raise(i.start, A.ReadonlyForMethodSignature);
          var c = u;
          c.kind && this.tsMatchLeftRelational() && this.raise(this.start, A.AccesorCannotHaveTypeParameters), this.tsFillSignature(o.colon, c), this.tsParseTypeMemberSemicolon();
          var d = "parameters", m = "typeAnnotation";
          if (c.kind === "get") c[d].length > 0 && (this.raise(this.start, "A 'get' accesor must not have any formal parameters."), this.isThisParam(c[d][0]) && this.raise(this.start, A.AccesorCannotDeclareThisParameter));
          else if (c.kind === "set") {
            if (c[d].length !== 1) this.raise(this.start, "A 'get' accesor must not have any formal parameters.");
            else {
              var y = c[d][0];
              this.isThisParam(y) && this.raise(this.start, A.AccesorCannotDeclareThisParameter), y.type === "Identifier" && y.optional && this.raise(this.start, A.SetAccesorCannotHaveOptionalParameter), y.type === "RestElement" && this.raise(this.start, A.SetAccesorCannotHaveRestParameter);
            }
            c[m] && this.raise(c[m].start, A.SetAccesorCannotHaveReturnType);
          } else c.kind = "method";
          return this.finishNode(c, "TSMethodSignature");
        }
        var g = u;
        r && (g.readonly = !0);
        var b = this.tsTryParseTypeAnnotation();
        return b && (g.typeAnnotation = b), this.tsParseTypeMemberSemicolon(), this.finishNode(g, "TSPropertySignature");
      }, l.tsParseTypeMember = function() {
        var i = this.startNode();
        if (this.match(o.parenL) || this.tsMatchLeftRelational()) return this.tsParseSignatureMember("TSCallSignatureDeclaration", i);
        if (this.match(o._new)) {
          var r = this.startNode();
          return this.next(), this.match(o.parenL) || this.tsMatchLeftRelational() ? this.tsParseSignatureMember("TSConstructSignatureDeclaration", i) : (i.key = this.createIdentifier(r, "new"), this.tsParsePropertyOrMethodSignature(i, !1));
        }
        return this.tsParseModifiers({ modified: i, allowedModifiers: ["readonly"], disallowedModifiers: ["declare", "abstract", "private", "protected", "public", "static", "override"] }), this.tsTryParseIndexSignature(i) || (this.parsePropertyName(i), i.computed || i.key.type !== "Identifier" || i.key.name !== "get" && i.key.name !== "set" || !this.tsTokenCanFollowModifier() || (i.kind = i.key.name, this.parsePropertyName(i)), this.tsParsePropertyOrMethodSignature(i, !!i.readonly));
      }, l.tsParseList = function(i, r) {
        for (var u = []; !this.tsIsListTerminator(i); ) u.push(r());
        return u;
      }, l.tsParseObjectTypeMembers = function() {
        this.expect(o.braceL);
        var i = this.tsParseList("TypeMembers", this.tsParseTypeMember.bind(this));
        return this.expect(o.braceR), i;
      }, l.tsParseInterfaceDeclaration = function(i, r) {
        if (r === void 0 && (r = {}), this.hasFollowingLineBreak()) return null;
        this.expectContextual("interface"), r.declare && (i.declare = !0), j(this.type) ? (i.id = this.parseIdent(), this.checkLValSimple(i.id, 7)) : (i.id = null, this.raise(this.start, A.MissingInterfaceName)), i.typeParameters = this.tsTryParseTypeParameters(this.tsParseInOutModifiers.bind(this)), this.eat(o._extends) && (i.extends = this.tsParseHeritageClause("extends"));
        var u = this.startNode();
        return u.body = this.tsInType(this.tsParseObjectTypeMembers.bind(this)), i.body = this.finishNode(u, "TSInterfaceBody"), this.finishNode(i, "TSInterfaceDeclaration");
      }, l.tsParseAbstractDeclaration = function(i) {
        if (this.match(o._class)) return i.abstract = !0, this.parseClass(i, !0);
        if (this.ts_isContextual(_.interface)) {
          if (!this.hasFollowingLineBreak()) return i.abstract = !0, this.tsParseInterfaceDeclaration(i);
        } else this.unexpected(i.start);
      }, l.tsIsDeclarationStart = function() {
        return ls(this.type);
      }, l.tsParseExpressionStatement = function(i, r) {
        switch (r.name) {
          case "declare":
            var u = this.tsTryParseDeclare(i);
            if (u) return u.declare = !0, u;
            break;
          case "global":
            if (this.match(o.braceL)) {
              T.prototype.enterScope.call(this, Qe);
              var c = i;
              return c.global = !0, c.id = r, c.body = this.tsParseModuleBlock(), T.prototype.exitScope.call(this), this.finishNode(c, "TSModuleDeclaration");
            }
            break;
          default:
            return this.tsParseDeclaration(i, r.name, !1);
        }
      }, l.tsParseModuleReference = function() {
        return this.tsIsExternalModuleReference() ? this.tsParseExternalModuleReference() : this.tsParseEntityName(!1);
      }, l.tsIsExportDefaultSpecifier = function() {
        var i = this.type, r = this.isAsyncFunction(), u = this.isLet();
        if (j(i)) {
          if (r && !this.containsEsc || u) return !1;
          if ((i === _.type || i === _.interface) && !this.containsEsc) {
            var c = this.lookahead();
            if (j(c.type) && !this.isContextualWithState("from", c) || c.type === o.braceL) return !1;
          }
        } else if (!this.match(o._default)) return !1;
        var d = this.nextTokenStart(), m = this.isUnparsedContextual(d, "from");
        if (this.input.charCodeAt(d) === 44 || j(this.type) && m) return !0;
        if (this.match(o._default) && m) {
          var y = this.input.charCodeAt(this.nextTokenStartSince(d + 4));
          return y === 34 || y === 39;
        }
        return !1;
      }, l.tsInAmbientContext = function(i) {
        var r = this.isAmbientContext;
        this.isAmbientContext = !0;
        try {
          return i();
        } finally {
          this.isAmbientContext = r;
        }
      }, l.tsCheckLineTerminator = function(i) {
        return i ? !this.hasFollowingLineBreak() && (this.next(), !0) : !this.isLineTerminator();
      }, l.tsParseModuleOrNamespaceDeclaration = function(i, r) {
        if (r === void 0 && (r = !1), i.id = this.parseIdent(), r || this.checkLValSimple(i.id, 8), this.eat(o.dot)) {
          var u = this.startNode();
          this.tsParseModuleOrNamespaceDeclaration(u, !0), i.body = u;
        } else T.prototype.enterScope.call(this, Qe), i.body = this.tsParseModuleBlock(), T.prototype.exitScope.call(this);
        return this.finishNode(i, "TSModuleDeclaration");
      }, l.checkLValSimple = function(i, r, u) {
        return r === void 0 && (r = 0), T.prototype.checkLValSimple.call(this, i, r, u);
      }, l.tsParseTypeAliasDeclaration = function(i) {
        var r = this;
        return i.id = this.parseIdent(), this.checkLValSimple(i.id, 6), i.typeAnnotation = this.tsInType(function() {
          if (i.typeParameters = r.tsTryParseTypeParameters(r.tsParseInOutModifiers.bind(r)), r.expect(o.eq), r.ts_isContextual(_.interface) && r.lookahead().type !== o.dot) {
            var u = r.startNode();
            return r.next(), r.finishNode(u, "TSIntrinsicKeyword");
          }
          return r.tsParseType();
        }), this.semicolon(), this.finishNode(i, "TSTypeAliasDeclaration");
      }, l.tsParseDeclaration = function(i, r, u) {
        switch (r) {
          case "abstract":
            if (this.tsCheckLineTerminator(u) && (this.match(o._class) || j(this.type))) return this.tsParseAbstractDeclaration(i);
            break;
          case "module":
            if (this.tsCheckLineTerminator(u)) {
              if (this.match(o.string)) return this.tsParseAmbientExternalModuleDeclaration(i);
              if (j(this.type)) return this.tsParseModuleOrNamespaceDeclaration(i);
            }
            break;
          case "namespace":
            if (this.tsCheckLineTerminator(u) && j(this.type)) return this.tsParseModuleOrNamespaceDeclaration(i);
            break;
          case "type":
            if (this.tsCheckLineTerminator(u) && j(this.type)) return this.tsParseTypeAliasDeclaration(i);
        }
      }, l.tsTryParseExportDeclaration = function() {
        return this.tsParseDeclaration(this.startNode(), this.value, !0);
      }, l.tsParseImportEqualsDeclaration = function(i, r) {
        i.isExport = r || !1, i.id = this.parseIdent(), this.checkLValSimple(i.id, 2), T.prototype.expect.call(this, o.eq);
        var u = this.tsParseModuleReference();
        return i.importKind === "type" && u.type !== "TSExternalModuleReference" && this.raise(u.start, A.ImportAliasHasImportType), i.moduleReference = u, T.prototype.semicolon.call(this), this.finishNode(i, "TSImportEqualsDeclaration");
      }, l.isExportDefaultSpecifier = function() {
        if (this.tsIsDeclarationStart()) return !1;
        var i = this.type;
        if (j(i)) {
          if (this.isContextual("async") || this.isContextual("let")) return !1;
          if ((i === _.type || i === _.interface) && !this.containsEsc) {
            var r = this.lookahead();
            if (j(r.type) && !this.isContextualWithState("from", r) || r.type === o.braceL) return !1;
          }
        } else if (!this.match(o._default)) return !1;
        var u = this.nextTokenStart(), c = this.isUnparsedContextual(u, "from");
        if (this.input.charCodeAt(u) === 44 || j(this.type) && c) return !0;
        if (this.match(o._default) && c) {
          var d = this.input.charCodeAt(this.nextTokenStartSince(u + 4));
          return d === 34 || d === 39;
        }
        return !1;
      }, l.parseTemplate = function(i) {
        var r = (i === void 0 ? {} : i).isTagged, u = r !== void 0 && r, c = this.startNode();
        this.next(), c.expressions = [];
        var d = this.parseTemplateElement({ isTagged: u });
        for (c.quasis = [d]; !d.tail; ) this.type === o.eof && this.raise(this.pos, "Unterminated template literal"), this.expect(o.dollarBraceL), c.expressions.push(this.inType ? this.tsParseType() : this.parseExpression()), this.expect(o.braceR), c.quasis.push(d = this.parseTemplateElement({ isTagged: u }));
        return this.next(), this.finishNode(c, "TemplateLiteral");
      }, l.parseFunction = function(i, r, u, c, d) {
        this.initFunction(i), (this.options.ecmaVersion >= 9 || this.options.ecmaVersion >= 6 && !c) && (this.type === o.star && 2 & r && this.unexpected(), i.generator = this.eat(o.star)), this.options.ecmaVersion >= 8 && (i.async = !!c), 1 & r && (i.id = 4 & r && this.type !== o.name ? null : this.parseIdent());
        var m = this.yieldPos, y = this.awaitPos, g = this.awaitIdentPos, b = this.maybeInArrowParameters;
        this.maybeInArrowParameters = !1, this.yieldPos = 0, this.awaitPos = 0, this.awaitIdentPos = 0, this.enterScope(Rt(i.async, i.generator)), 1 & r || (i.id = this.type === o.name ? this.parseIdent() : null), this.parseFunctionParams(i);
        var P = 1 & r;
        return this.parseFunctionBody(i, u, !1, d, { isFunctionDeclaration: P }), this.yieldPos = m, this.awaitPos = y, this.awaitIdentPos = g, 1 & r && i.id && !(2 & r) && this.checkLValSimple(i.id, i.body ? this.strict || i.generator || i.async ? this.treatFunctionsAsVar ? 1 : 2 : 3 : 0), this.maybeInArrowParameters = b, this.finishNode(i, P ? "FunctionDeclaration" : "FunctionExpression");
      }, l.parseFunctionBody = function(i, r, u, c, d) {
        r === void 0 && (r = !1), u === void 0 && (u = !1), c === void 0 && (c = !1), this.match(o.colon) && (i.returnType = this.tsParseTypeOrTypePredicateAnnotation(o.colon));
        var m = d != null && d.isFunctionDeclaration ? "TSDeclareFunction" : d != null && d.isClassMethod ? "TSDeclareMethod" : void 0;
        return m && !this.match(o.braceL) && this.isLineTerminator() ? this.finishNode(i, m) : m === "TSDeclareFunction" && this.isAmbientContext && (this.raise(i.start, A.DeclareFunctionHasImplementation), i.declare) ? (T.prototype.parseFunctionBody.call(this, i, r, u, !1), this.finishNode(i, m)) : (T.prototype.parseFunctionBody.call(this, i, r, u, c), i);
      }, l.parseNew = function() {
        var i;
        this.containsEsc && this.raiseRecoverable(this.start, "Escape sequence in keyword new");
        var r = this.startNode(), u = this.parseIdent(!0);
        if (this.options.ecmaVersion >= 6 && this.eat(o.dot)) {
          r.meta = u;
          var c = this.containsEsc;
          return r.property = this.parseIdent(!0), r.property.name !== "target" && this.raiseRecoverable(r.property.start, "The only valid meta property for new is 'new.target'"), c && this.raiseRecoverable(r.start, "'new.target' must not contain escaped characters"), this.allowNewDotTarget || this.raiseRecoverable(r.start, "'new.target' can only be used in functions and class static block"), this.finishNode(r, "MetaProperty");
        }
        var d = this.start, m = this.startLoc, y = this.type === o._import;
        r.callee = this.parseSubscripts(this.parseExprAtom(), d, m, !0, !1), y && r.callee.type === "ImportExpression" && this.raise(d, "Cannot use new with import()");
        var g = r.callee;
        return g.type !== "TSInstantiationExpression" || (i = g.extra) != null && i.parenthesized || (r.typeParameters = g.typeParameters, r.callee = g.expression), r.arguments = this.eat(o.parenL) ? this.parseExprList(o.parenR, this.options.ecmaVersion >= 8, !1) : [], this.finishNode(r, "NewExpression");
      }, l.parseExprOp = function(i, r, u, c, d) {
        var m;
        if (o._in.binop > c && !this.hasPrecedingLineBreak() && (this.isContextual("as") && (m = "TSAsExpression"), p && this.isContextual("satisfies") && (m = "TSSatisfiesExpression"), m)) {
          var y = this.startNodeAt(r, u);
          y.expression = i;
          var g = this.tsTryNextParseConstantContext();
          return y.typeAnnotation = g || this.tsNextThenParseType(), this.finishNode(y, m), this.reScan_lt_gt(), this.parseExprOp(y, r, u, c, d);
        }
        return T.prototype.parseExprOp.call(this, i, r, u, c, d);
      }, l.parseImportSpecifiers = function() {
        var i = [], r = !0;
        if (x.tokenIsIdentifier(this.type) && (i.push(this.parseImportDefaultSpecifier()), !this.eat(o.comma))) return i;
        if (this.type === o.star) return i.push(this.parseImportNamespaceSpecifier()), i;
        for (this.expect(o.braceL); !this.eat(o.braceR); ) {
          if (r) r = !1;
          else if (this.expect(o.comma), this.afterTrailingComma(o.braceR)) break;
          i.push(this.parseImportSpecifier());
        }
        return i;
      }, l.parseImport = function(i) {
        var r = this.lookahead();
        if (i.importKind = "value", this.importOrExportOuterKind = "value", j(r.type) || this.match(o.star) || this.match(o.braceL)) {
          var u = this.lookahead(2);
          if (u.type !== o.comma && !this.isContextualWithState("from", u) && u.type !== o.eq && this.ts_eatContextualWithState("type", 1, r) && (this.importOrExportOuterKind = "type", i.importKind = "type", r = this.lookahead(), u = this.lookahead(2)), j(r.type) && u.type === o.eq) {
            this.next();
            var c = this.tsParseImportEqualsDeclaration(i);
            return this.importOrExportOuterKind = "value", c;
          }
        }
        return this.next(), this.type === o.string ? (i.specifiers = [], i.source = this.parseExprAtom()) : (i.specifiers = this.parseImportSpecifiers(), this.expectContextual("from"), i.source = this.type === o.string ? this.parseExprAtom() : this.unexpected()), this.parseMaybeImportAttributes(i), this.semicolon(), this.finishNode(i, "ImportDeclaration"), this.importOrExportOuterKind = "value", i.importKind === "type" && i.specifiers.length > 1 && i.specifiers[0].type === "ImportDefaultSpecifier" && this.raise(i.start, A.TypeImportCannotSpecifyDefaultAndNamed), i;
      }, l.parseExportDefaultDeclaration = function() {
        if (this.isAbstractClass()) {
          var i = this.startNode();
          return this.next(), i.abstract = !0, this.parseClass(i, !0);
        }
        if (this.match(_.interface)) {
          var r = this.tsParseInterfaceDeclaration(this.startNode());
          if (r) return r;
        }
        return T.prototype.parseExportDefaultDeclaration.call(this);
      }, l.parseExportAllDeclaration = function(i, r) {
        return this.options.ecmaVersion >= 11 && (this.eatContextual("as") ? (i.exported = this.parseModuleExportName(), this.checkExport(r, i.exported, this.lastTokStart)) : i.exported = null), this.expectContextual("from"), this.type !== o.string && this.unexpected(), i.source = this.parseExprAtom(), this.parseMaybeImportAttributes(i), this.semicolon(), this.finishNode(i, "ExportAllDeclaration");
      }, l.parseDynamicImport = function(i) {
        if (this.next(), i.source = this.parseMaybeAssign(), this.eat(o.comma)) {
          var r = this.parseExpression();
          i.arguments = [r];
        }
        if (!this.eat(o.parenR)) {
          var u = this.start;
          this.eat(o.comma) && this.eat(o.parenR) ? this.raiseRecoverable(u, "Trailing comma is not allowed in import()") : this.unexpected(u);
        }
        return this.finishNode(i, "ImportExpression");
      }, l.parseExport = function(i, r) {
        var u = this.lookahead();
        if (this.ts_eatWithState(o._import, 2, u)) {
          this.ts_isContextual(_.type) && this.lookaheadCharCode() !== 61 ? (i.importKind = "type", this.importOrExportOuterKind = "type", this.next()) : (i.importKind = "value", this.importOrExportOuterKind = "value");
          var c = this.tsParseImportEqualsDeclaration(i, !0);
          return this.importOrExportOuterKind = void 0, c;
        }
        if (this.ts_eatWithState(o.eq, 2, u)) {
          var d = i;
          return d.expression = this.parseExpression(), this.semicolon(), this.importOrExportOuterKind = void 0, this.finishNode(d, "TSExportAssignment");
        }
        if (this.ts_eatContextualWithState("as", 2, u)) {
          var m = i;
          return this.expectContextual("namespace"), m.id = this.parseIdent(), this.semicolon(), this.importOrExportOuterKind = void 0, this.finishNode(m, "TSNamespaceExportDeclaration");
        }
        if (this.ts_isContextualWithState(u, _.type) && this.lookahead(2).type === o.braceL ? (this.next(), this.importOrExportOuterKind = "type", i.exportKind = "type") : (this.importOrExportOuterKind = "value", i.exportKind = "value"), this.next(), this.eat(o.star)) return this.parseExportAllDeclaration(i, r);
        if (this.eat(o._default)) return this.checkExport(r, "default", this.lastTokStart), i.declaration = this.parseExportDefaultDeclaration(), this.finishNode(i, "ExportDefaultDeclaration");
        if (this.shouldParseExportStatement()) i.declaration = this.parseExportDeclaration(i), i.declaration.type === "VariableDeclaration" ? this.checkVariableExport(r, i.declaration.declarations) : this.checkExport(r, i.declaration.id, i.declaration.id.start), i.specifiers = [], i.source = null;
        else {
          if (i.declaration = null, i.specifiers = this.parseExportSpecifiers(r), this.eatContextual("from")) this.type !== o.string && this.unexpected(), i.source = this.parseExprAtom(), this.parseMaybeImportAttributes(i);
          else {
            for (var y, g = li(i.specifiers); !(y = g()).done; ) {
              var b = y.value;
              this.checkUnreserved(b.local), this.checkLocalExport(b.local), b.local.type === "Literal" && this.raise(b.local.start, "A string literal cannot be used as an exported binding without `from`.");
            }
            i.source = null;
          }
          this.semicolon();
        }
        return this.finishNode(i, "ExportNamedDeclaration");
      }, l.checkExport = function(i, r, u) {
        i && (typeof r != "string" && (r = r.type === "Identifier" ? r.name : r.value), i[r] = !0);
      }, l.parseMaybeDefault = function(i, r, u) {
        var c = T.prototype.parseMaybeDefault.call(this, i, r, u);
        return c.type === "AssignmentPattern" && c.typeAnnotation && c.right.start < c.typeAnnotation.start && this.raise(c.typeAnnotation.start, A.TypeAnnotationAfterAssign), c;
      }, l.typeCastToParameter = function(i) {
        return i.expression.typeAnnotation = i.typeAnnotation, this.resetEndLocation(i.expression, i.typeAnnotation.end), i.expression;
      }, l.toAssignableList = function(i, r) {
        for (var u = 0; u < i.length; u++) {
          var c = i[u];
          c?.type === "TSTypeCastExpression" && (i[u] = this.typeCastToParameter(c));
        }
        return T.prototype.toAssignableList.call(this, i, r);
      }, l.reportReservedArrowTypeParam = function(i) {
      }, l.parseExprAtom = function(i, r, u) {
        if (this.type === _.jsxText) return this.jsx_parseText();
        if (this.type === _.jsxTagStart) return this.jsx_parseElement();
        if (this.type === _.at) return this.parseDecorators(), this.parseExprAtom();
        if (j(this.type)) {
          var c = this.potentialArrowAt === this.start, d = this.start, m = this.startLoc, y = this.containsEsc, g = this.parseIdent(!1);
          if (this.options.ecmaVersion >= 8 && !y && g.name === "async" && !this.canInsertSemicolon() && this.eat(o._function)) return this.overrideContext(de.f_expr), this.parseFunction(this.startNodeAt(d, m), 0, !1, !0, r);
          if (c && !this.canInsertSemicolon()) {
            if (this.eat(o.arrow)) return this.parseArrowExpression(this.startNodeAt(d, m), [g], !1, r);
            if (this.options.ecmaVersion >= 8 && g.name === "async" && this.type === o.name && !y && (!this.potentialArrowInForAwait || this.value !== "of" || this.containsEsc)) return g = this.parseIdent(!1), !this.canInsertSemicolon() && this.eat(o.arrow) || this.unexpected(), this.parseArrowExpression(this.startNodeAt(d, m), [g], !0, r);
          }
          return g;
        }
        return T.prototype.parseExprAtom.call(this, i, r, u);
      }, l.parseExprAtomDefault = function() {
        if (j(this.type)) {
          var i = this.potentialArrowAt === this.start, r = this.containsEsc, u = this.parseIdent();
          if (!r && u.name === "async" && !this.canInsertSemicolon()) {
            var c = this.type;
            if (c === o._function) return this.next(), this.parseFunction(this.startNodeAtNode(u), void 0, !0, !0);
            if (j(c)) {
              if (this.lookaheadCharCode() === 61) {
                var d = this.parseIdent(!1);
                return !this.canInsertSemicolon() && this.eat(o.arrow) || this.unexpected(), this.parseArrowExpression(this.startNodeAtNode(u), [d], !0);
              }
              return u;
            }
          }
          return i && this.match(o.arrow) && !this.canInsertSemicolon() ? (this.next(), this.parseArrowExpression(this.startNodeAtNode(u), [u], !1)) : u;
        }
        this.unexpected();
      }, l.parseIdentNode = function() {
        var i = this.startNode();
        return ut(this.type) ? (i.name = this.value, i) : T.prototype.parseIdentNode.call(this);
      }, l.parseVarStatement = function(i, r, u) {
        u === void 0 && (u = !1);
        var c = this.isAmbientContext;
        this.next(), T.prototype.parseVar.call(this, i, !1, r, u || c), this.semicolon();
        var d = this.finishNode(i, "VariableDeclaration");
        if (!c) return d;
        for (var m, y = li(d.declarations); !(m = y()).done; ) {
          var g = m.value, b = g.init;
          b && (r !== "const" || g.id.typeAnnotation ? this.raise(b.start, A.InitializerNotAllowedInAmbientContext) : b.type !== "StringLiteral" && b.type !== "BooleanLiteral" && b.type !== "NumericLiteral" && b.type !== "BigIntLiteral" && (b.type !== "TemplateLiteral" || b.expressions.length > 0) && !Kr(b) && this.raise(b.start, A.ConstInitiailizerMustBeStringOrNumericLiteralOrLiteralEnumReference));
        }
        return d;
      }, l.parseStatement = function(i, r, u) {
        if (this.match(_.at) && this.parseDecorators(!0), this.match(o._const) && this.isLookaheadContextual("enum")) {
          var c = this.startNode();
          return this.expect(o._const), this.tsParseEnumDeclaration(c, { const: !0 });
        }
        if (this.ts_isContextual(_.enum)) return this.tsParseEnumDeclaration(this.startNode());
        if (this.ts_isContextual(_.interface)) {
          var d = this.tsParseInterfaceDeclaration(this.startNode());
          if (d) return d;
        }
        return T.prototype.parseStatement.call(this, i, r, u);
      }, l.parseAccessModifier = function() {
        return this.tsParseModifier(["public", "protected", "private"]);
      }, l.parsePostMemberNameModifiers = function(i) {
        this.eat(o.question) && (i.optional = !0), i.readonly && this.match(o.parenL) && this.raise(i.start, A.ClassMethodHasReadonly), i.declare && this.match(o.parenL) && this.raise(i.start, A.ClassMethodHasDeclare);
      }, l.parseExpressionStatement = function(i, r) {
        return (r.type === "Identifier" ? this.tsParseExpressionStatement(i, r) : void 0) || T.prototype.parseExpressionStatement.call(this, i, r);
      }, l.shouldParseExportStatement = function() {
        return !!this.tsIsDeclarationStart() || !!this.match(_.at) || T.prototype.shouldParseExportStatement.call(this);
      }, l.parseConditional = function(i, r, u, c, d) {
        if (this.eat(o.question)) {
          var m = this.startNodeAt(r, u);
          return m.test = i, m.consequent = this.parseMaybeAssign(), this.expect(o.colon), m.alternate = this.parseMaybeAssign(c), this.finishNode(m, "ConditionalExpression");
        }
        return i;
      }, l.parseMaybeConditional = function(i, r) {
        var u = this, c = this.start, d = this.startLoc, m = this.parseExprOps(i, r);
        if (this.checkExpressionErrors(r)) return m;
        if (!this.maybeInArrowParameters || !this.match(o.question)) return this.parseConditional(m, c, d, i, r);
        var y = this.tryParse(function() {
          return u.parseConditional(m, c, d, i, r);
        });
        return y.node ? (y.error && this.setLookaheadState(y.failState), y.node) : (y.error && this.setOptionalParametersError(r, y.error), m);
      }, l.parseParenItem = function(i) {
        var r = this.start, u = this.startLoc;
        if (i = T.prototype.parseParenItem.call(this, i), this.eat(o.question) && (i.optional = !0, this.resetEndLocation(i)), this.match(o.colon)) {
          var c = this.startNodeAt(r, u);
          return c.expression = i, c.typeAnnotation = this.tsParseTypeAnnotation(), this.finishNode(c, "TSTypeCastExpression");
        }
        return i;
      }, l.parseExportDeclaration = function(i) {
        var r = this;
        if (!this.isAmbientContext && this.ts_isContextual(_.declare)) return this.tsInAmbientContext(function() {
          return r.parseExportDeclaration(i);
        });
        var u = this.start, c = this.startLoc, d = this.eatContextual("declare");
        !d || !this.ts_isContextual(_.declare) && this.shouldParseExportStatement() || this.raise(this.start, A.ExpectedAmbientAfterExportDeclare);
        var m = j(this.type) && this.tsTryParseExportDeclaration() || this.parseStatement(null);
        return m ? ((m.type === "TSInterfaceDeclaration" || m.type === "TSTypeAliasDeclaration" || d) && (i.exportKind = "type"), d && (this.resetStartLocation(m, u, c), m.declare = !0), m) : null;
      }, l.parseClassId = function(i, r) {
        if (r || !this.isContextual("implements")) {
          T.prototype.parseClassId.call(this, i, r);
          var u = this.tsTryParseTypeParameters(this.tsParseInOutModifiers.bind(this));
          u && (i.typeParameters = u);
        }
      }, l.parseClassPropertyAnnotation = function(i) {
        i.optional || (this.value === "!" && this.eat(o.prefix) ? i.definite = !0 : this.eat(o.question) && (i.optional = !0));
        var r = this.tsTryParseTypeAnnotation();
        r && (i.typeAnnotation = r);
      }, l.parseClassField = function(i) {
        if (i.key.type === "PrivateIdentifier") i.abstract && this.raise(i.start, A.PrivateElementHasAbstract), i.accessibility && this.raise(i.start, A.PrivateElementHasAccessibility({ modifier: i.accessibility })), this.parseClassPropertyAnnotation(i);
        else if (this.parseClassPropertyAnnotation(i), this.isAmbientContext && (!i.readonly || i.typeAnnotation) && this.match(o.eq) && this.raise(this.start, A.DeclareClassFieldHasInitializer), i.abstract && this.match(o.eq)) {
          var r = i.key;
          this.raise(this.start, A.AbstractPropertyHasInitializer({ propertyName: r.type !== "Identifier" || i.computed ? "[" + this.input.slice(r.start, r.end) + "]" : r.name }));
        }
        return T.prototype.parseClassField.call(this, i);
      }, l.parseClassMethod = function(i, r, u, c) {
        var d = i.kind === "constructor", m = i.key.type === "PrivateIdentifier", y = this.tsTryParseTypeParameters();
        m ? (y && (i.typeParameters = y), i.accessibility && this.raise(i.start, A.PrivateMethodsHasAccessibility({ modifier: i.accessibility }))) : y && d && this.raise(y.start, A.ConstructorHasTypeParameters);
        var g = i.declare, b = i.kind;
        !(g !== void 0 && g) || b !== "get" && b !== "set" || this.raise(i.start, A.DeclareAccessor({ kind: b })), y && (i.typeParameters = y);
        var P = i.key;
        i.kind === "constructor" ? (r && this.raise(P.start, "Constructor can't be a generator"), u && this.raise(P.start, "Constructor can't be an async method")) : i.static && di(i, "prototype") && this.raise(P.start, "Classes may not have a static property named prototype");
        var E = i.value = this.parseMethod(r, u, c, !0, i);
        return i.kind === "get" && E.params.length !== 0 && this.raiseRecoverable(E.start, "getter should have no params"), i.kind === "set" && E.params.length !== 1 && this.raiseRecoverable(E.start, "setter should have exactly one param"), i.kind === "set" && E.params[0].type === "RestElement" && this.raiseRecoverable(E.params[0].start, "Setter cannot use rest params"), this.finishNode(i, "MethodDefinition");
      }, l.isClassMethod = function() {
        return this.match(o.relational);
      }, l.parseClassElement = function(i) {
        var r = this;
        if (this.eat(o.semi)) return null;
        var u, c = this.options.ecmaVersion, d = this.startNode(), m = "", y = !1, g = !1, b = "method", P = ["declare", "private", "public", "protected", "accessor", "override", "abstract", "readonly", "static"], E = this.tsParseModifiers({ modified: d, allowedModifiers: P, disallowedModifiers: ["in", "out"], stopOnStartOfClassStaticBlock: !0, errorTemplate: A.InvalidModifierOnTypeParameterPositions });
        u = !!E.static;
        var L = function() {
          if (!r.tsIsStartOfStaticBlocks()) {
            var k = r.tsTryParseIndexSignature(d);
            if (k) return d.abstract && r.raise(d.start, A.IndexSignatureHasAbstract), d.accessibility && r.raise(d.start, A.IndexSignatureHasAccessibility({ modifier: d.accessibility })), d.declare && r.raise(d.start, A.IndexSignatureHasDeclare), d.override && r.raise(d.start, A.IndexSignatureHasOverride), k;
            if (!r.inAbstractClass && d.abstract && r.raise(d.start, A.NonAbstractClassHasAbstractMethod), d.override && i && r.raise(d.start, A.OverrideNotInSubClass), d.static = u, u && (r.isClassElementNameStart() || r.type === o.star || (m = "static")), !m && c >= 8 && r.eatContextual("async") && (!r.isClassElementNameStart() && r.type !== o.star || r.canInsertSemicolon() ? m = "async" : g = !0), !m && (c >= 9 || !g) && r.eat(o.star) && (y = !0), !m && !g && !y) {
              var $ = r.value;
              (r.eatContextual("get") || r.eatContextual("set")) && (r.isClassElementNameStart() ? b = $ : m = $);
            }
            if (m ? (d.computed = !1, d.key = r.startNodeAt(r.lastTokStart, r.lastTokStartLoc), d.key.name = m, r.finishNode(d.key, "Identifier")) : r.parseClassElementName(d), r.parsePostMemberNameModifiers(d), r.isClassMethod() || c < 13 || r.type === o.parenL || b !== "method" || y || g) {
              var U = !d.static && di(d, "constructor"), q = U && i;
              U && b !== "method" && r.raise(d.key.start, "Constructor can't have get/set modifier"), d.kind = U ? "constructor" : b, r.parseClassMethod(d, y, g, q);
            } else r.parseClassField(d);
            return d;
          }
          if (r.next(), r.next(), r.tsHasSomeModifiers(d, P) && r.raise(r.start, A.StaticBlockCannotHaveModifier), c >= 13) return T.prototype.parseClassStaticBlock.call(r, d), d;
        };
        return d.declare ? this.tsInAmbientContext(L) : L(), d;
      }, l.isClassElementNameStart = function() {
        return !!this.tsIsIdentifier() || T.prototype.isClassElementNameStart.call(this);
      }, l.parseClassSuper = function(i) {
        T.prototype.parseClassSuper.call(this, i), i.superClass && (this.tsMatchLeftRelational() || this.match(o.bitShift)) && (i.superTypeParameters = this.tsParseTypeArgumentsInExpression()), this.eatContextual("implements") && (i.implements = this.tsParseHeritageClause("implements"));
      }, l.parseFunctionParams = function(i) {
        var r = this.tsTryParseTypeParameters();
        r && (i.typeParameters = r), T.prototype.parseFunctionParams.call(this, i);
      }, l.parseVarId = function(i, r) {
        T.prototype.parseVarId.call(this, i, r), i.id.type === "Identifier" && !this.hasPrecedingLineBreak() && this.value === "!" && this.eat(o.prefix) && (i.definite = !0);
        var u = this.tsTryParseTypeAnnotation();
        u && (i.id.typeAnnotation = u, this.resetEndLocation(i.id));
      }, l.parseArrowExpression = function(i, r, u, c) {
        this.match(o.colon) && (i.returnType = this.tsParseTypeAnnotation());
        var d = this.yieldPos, m = this.awaitPos, y = this.awaitIdentPos;
        this.enterScope(16 | Rt(u, !1)), this.initFunction(i);
        var g = this.maybeInArrowParameters;
        return this.options.ecmaVersion >= 8 && (i.async = !!u), this.yieldPos = 0, this.awaitPos = 0, this.awaitIdentPos = 0, this.maybeInArrowParameters = !0, i.params = this.toAssignableList(r, !0), this.maybeInArrowParameters = !1, this.parseFunctionBody(i, !0, !1, c), this.yieldPos = d, this.awaitPos = m, this.awaitIdentPos = y, this.maybeInArrowParameters = g, this.finishNode(i, "ArrowFunctionExpression");
      }, l.parseMaybeAssignOrigin = function(i, r, u) {
        if (this.isContextual("yield")) {
          if (this.inGenerator) return this.parseYield(i);
          this.exprAllowed = !1;
        }
        var c = !1, d = -1, m = -1, y = -1;
        r ? (d = r.parenthesizedAssign, m = r.trailingComma, y = r.doubleProto, r.parenthesizedAssign = r.trailingComma = -1) : (r = new Je(), c = !0);
        var g = this.start, b = this.startLoc;
        (this.type === o.parenL || j(this.type)) && (this.potentialArrowAt = this.start, this.potentialArrowInForAwait = i === "await");
        var P = this.parseMaybeConditional(i, r);
        if (u && (P = u.call(this, P, g, b)), this.type.isAssign) {
          var E = this.startNodeAt(g, b);
          return E.operator = this.value, this.type === o.eq && (P = this.toAssignable(P, !0, r)), c || (r.parenthesizedAssign = r.trailingComma = r.doubleProto = -1), r.shorthandAssign >= P.start && (r.shorthandAssign = -1), this.type === o.eq ? this.checkLValPattern(P) : this.checkLValSimple(P), E.left = P, this.next(), E.right = this.parseMaybeAssign(i), y > -1 && (r.doubleProto = y), this.finishNode(E, "AssignmentExpression");
        }
        return c && this.checkExpressionErrors(r, !0), d > -1 && (r.parenthesizedAssign = d), m > -1 && (r.trailingComma = m), P;
      }, l.parseMaybeAssign = function(i, r, u) {
        var c, d, m, y, g, b, P, E, L, k, $, U = this;
        if (this.matchJsx("jsxTagStart") || this.tsMatchLeftRelational()) {
          if (E = this.cloneCurLookaheadState(), !(L = this.tryParse(function() {
            return U.parseMaybeAssignOrigin(i, r, u);
          }, E)).error) return L.node;
          var q = this.context, K = q[q.length - 1];
          K === x.tokContexts.tc_oTag && q[q.length - 2] === x.tokContexts.tc_expr ? (q.pop(), q.pop()) : K !== x.tokContexts.tc_oTag && K !== x.tokContexts.tc_expr || q.pop();
        }
        if (!((c = L) != null && c.error || this.tsMatchLeftRelational())) return this.parseMaybeAssignOrigin(i, r, u);
        E && !this.compareLookaheadState(E, this.getCurLookaheadState()) || (E = this.cloneCurLookaheadState());
        var se = this.tryParse(function(Ne) {
          var ze, Xe;
          $ = U.tsParseTypeParameters();
          var Le = U.parseMaybeAssignOrigin(i, r, u);
          return (Le.type !== "ArrowFunctionExpression" || (ze = Le.extra) != null && ze.parenthesized) && Ne(), ((Xe = $) == null ? void 0 : Xe.params.length) !== 0 && U.resetStartLocationFromNode(Le, $), Le.typeParameters = $, Le;
        }, E);
        if (!se.error && !se.aborted) return $ && this.reportReservedArrowTypeParam($), se.node;
        if (!L && (mi(!0), !(k = this.tryParse(function() {
          return U.parseMaybeAssignOrigin(i, r, u);
        }, E)).error)) return k.node;
        if ((d = L) != null && d.node) return this.setLookaheadState(L.failState), L.node;
        if (se.node) return this.setLookaheadState(se.failState), $ && this.reportReservedArrowTypeParam($), se.node;
        if ((m = k) != null && m.node) return this.setLookaheadState(k.failState), k.node;
        throw (y = L) != null && y.thrown ? L.error : se.thrown ? se.error : (g = k) != null && g.thrown ? k.error : ((b = L) == null ? void 0 : b.error) || se.error || ((P = k) == null ? void 0 : P.error);
      }, l.parseAssignableListItem = function(i) {
        for (var r = []; this.match(_.at); ) r.push(this.parseDecorator());
        var u, c = this.start, d = this.startLoc, m = !1, y = !1;
        if (i !== void 0) {
          var g = {};
          this.tsParseModifiers({ modified: g, allowedModifiers: ["public", "private", "protected", "override", "readonly"] }), u = g.accessibility, y = g.override, m = g.readonly, i === !1 && (u || m || y) && this.raise(d.start, A.UnexpectedParameterModifier);
        }
        var b = this.parseMaybeDefault(c, d);
        this.parseBindingListItem(b);
        var P = this.parseMaybeDefault(b.start, b.loc, b);
        if (r.length && (P.decorators = r), u || m || y) {
          var E = this.startNodeAt(c, d);
          return u && (E.accessibility = u), m && (E.readonly = m), y && (E.override = y), P.type !== "Identifier" && P.type !== "AssignmentPattern" && this.raise(E.start, A.UnsupportedParameterPropertyKind), E.parameter = P, this.finishNode(E, "TSParameterProperty");
        }
        return P;
      }, l.checkLValInnerPattern = function(i, r, u) {
        r === void 0 && (r = 0), i.type === "TSParameterProperty" ? this.checkLValInnerPattern(i.parameter, r, u) : T.prototype.checkLValInnerPattern.call(this, i, r, u);
      }, l.parseBindingListItem = function(i) {
        this.eat(o.question) && (i.type === "Identifier" || this.isAmbientContext || this.inType || this.raise(i.start, A.PatternIsOptional), i.optional = !0);
        var r = this.tsTryParseTypeAnnotation();
        return r && (i.typeAnnotation = r), this.resetEndLocation(i), i;
      }, l.isAssignable = function(i, r) {
        var u = this;
        switch (i.type) {
          case "TSTypeCastExpression":
            return this.isAssignable(i.expression, r);
          case "TSParameterProperty":
          case "Identifier":
          case "ObjectPattern":
          case "ArrayPattern":
          case "AssignmentPattern":
          case "RestElement":
            return !0;
          case "ObjectExpression":
            var c = i.properties.length - 1;
            return i.properties.every(function(d, m) {
              return d.type !== "ObjectMethod" && (m === c || d.type !== "SpreadElement") && u.isAssignable(d);
            });
          case "Property":
          case "ObjectProperty":
            return this.isAssignable(i.value);
          case "SpreadElement":
            return this.isAssignable(i.argument);
          case "ArrayExpression":
            return i.elements.every(function(d) {
              return d === null || u.isAssignable(d);
            });
          case "AssignmentExpression":
            return i.operator === "=";
          case "ParenthesizedExpression":
            return this.isAssignable(i.expression);
          case "MemberExpression":
          case "OptionalMemberExpression":
            return !r;
          default:
            return !1;
        }
      }, l.toAssignable = function(i, r, u) {
        switch (r === void 0 && (r = !1), u === void 0 && (u = new Je()), i.type) {
          case "ParenthesizedExpression":
            return this.toAssignableParenthesizedExpression(i, r, u);
          case "TSAsExpression":
          case "TSSatisfiesExpression":
          case "TSNonNullExpression":
          case "TSTypeAssertion":
            return r || this.raise(i.start, A.UnexpectedTypeCastInParameter), this.toAssignable(i.expression, r, u);
          case "MemberExpression":
            break;
          case "AssignmentExpression":
            return r || i.left.type !== "TSTypeCastExpression" || (i.left = this.typeCastToParameter(i.left)), T.prototype.toAssignable.call(this, i, r, u);
          case "TSTypeCastExpression":
            return this.typeCastToParameter(i);
          default:
            return T.prototype.toAssignable.call(this, i, r, u);
        }
        return i;
      }, l.toAssignableParenthesizedExpression = function(i, r, u) {
        switch (i.expression.type) {
          case "TSAsExpression":
          case "TSSatisfiesExpression":
          case "TSNonNullExpression":
          case "TSTypeAssertion":
          case "ParenthesizedExpression":
            return this.toAssignable(i.expression, r, u);
          default:
            return T.prototype.toAssignable.call(this, i, r, u);
        }
      }, l.curPosition = function() {
        if (this.options.locations) {
          var i = T.prototype.curPosition.call(this);
          return Object.defineProperty(i, "offset", { get: function() {
            return function(r) {
              var u = new v.Position(this.line, this.column + r);
              return u.index = this.index + r, u;
            };
          } }), i.index = this.pos, i;
        }
      }, l.parseBindingAtom = function() {
        return this.type === o._this ? this.parseIdent(!0) : T.prototype.parseBindingAtom.call(this);
      }, l.shouldParseArrow = function(i) {
        var r, u = this;
        if (r = this.match(o.colon) ? i.every(function(d) {
          return u.isAssignable(d, !0);
        }) : !this.canInsertSemicolon()) {
          if (this.match(o.colon)) {
            var c = this.tryParse(function(d) {
              var m = u.tsParseTypeOrTypePredicateAnnotation(o.colon);
              return !u.canInsertSemicolon() && u.match(o.arrow) || d(), m;
            });
            if (c.aborted) return this.shouldParseArrowReturnType = void 0, !1;
            c.thrown || (c.error && this.setLookaheadState(c.failState), this.shouldParseArrowReturnType = c.node);
          }
          return !!this.match(o.arrow) || (this.shouldParseArrowReturnType = void 0, !1);
        }
        return this.shouldParseArrowReturnType = void 0, r;
      }, l.parseParenArrowList = function(i, r, u, c) {
        var d = this.startNodeAt(i, r);
        return d.returnType = this.shouldParseArrowReturnType, this.shouldParseArrowReturnType = void 0, this.parseArrowExpression(d, u, !1, c);
      }, l.parseParenAndDistinguishExpression = function(i, r) {
        var u, c = this.start, d = this.startLoc, m = this.options.ecmaVersion >= 8;
        if (this.options.ecmaVersion >= 6) {
          var y = this.maybeInArrowParameters;
          this.maybeInArrowParameters = !0, this.next();
          var g, b = this.start, P = this.startLoc, E = [], L = !0, k = !1, $ = new Je(), U = this.yieldPos, q = this.awaitPos;
          for (this.yieldPos = 0, this.awaitPos = 0; this.type !== o.parenR; ) {
            if (L ? L = !1 : this.expect(o.comma), m && this.afterTrailingComma(o.parenR, !0)) {
              k = !0;
              break;
            }
            if (this.type === o.ellipsis) {
              g = this.start, E.push(this.parseParenItem(this.parseRestBinding())), this.type === o.comma && this.raise(this.start, "Comma is not permitted after the rest element");
              break;
            }
            E.push(this.parseMaybeAssign(r, $, this.parseParenItem));
          }
          var K = this.lastTokEnd, se = this.lastTokEndLoc;
          if (this.expect(o.parenR), this.maybeInArrowParameters = y, i && this.shouldParseArrow(E) && this.eat(o.arrow)) return this.checkPatternErrors($, !1), this.checkYieldAwaitInDefaultParams(), this.yieldPos = U, this.awaitPos = q, this.parseParenArrowList(c, d, E, r);
          E.length && !k || this.unexpected(this.lastTokStart), g && this.unexpected(g), this.checkExpressionErrors($, !0), this.yieldPos = U || this.yieldPos, this.awaitPos = q || this.awaitPos, E.length > 1 ? ((u = this.startNodeAt(b, P)).expressions = E, this.finishNodeAt(u, "SequenceExpression", K, se)) : u = E[0];
        } else u = this.parseParenExpression();
        if (this.options.preserveParens) {
          var Ne = this.startNodeAt(c, d);
          return Ne.expression = u, this.finishNode(Ne, "ParenthesizedExpression");
        }
        return u;
      }, l.parseTaggedTemplateExpression = function(i, r, u, c) {
        var d = this.startNodeAt(r, u);
        return d.tag = i, d.quasi = this.parseTemplate({ isTagged: !0 }), c && this.raise(r, "Tagged Template Literals are not allowed in optionalChain."), this.finishNode(d, "TaggedTemplateExpression");
      }, l.shouldParseAsyncArrow = function() {
        var i = this;
        if (!this.match(o.colon)) return !this.canInsertSemicolon() && this.eat(o.arrow);
        var r = this.tryParse(function(u) {
          var c = i.tsParseTypeOrTypePredicateAnnotation(o.colon);
          return !i.canInsertSemicolon() && i.match(o.arrow) || u(), c;
        });
        return r.aborted ? (this.shouldParseAsyncArrowReturnType = void 0, !1) : r.thrown ? void 0 : (r.error && this.setLookaheadState(r.failState), this.shouldParseAsyncArrowReturnType = r.node, !this.canInsertSemicolon() && this.eat(o.arrow));
      }, l.parseSubscriptAsyncArrow = function(i, r, u, c) {
        var d = this.startNodeAt(i, r);
        return d.returnType = this.shouldParseAsyncArrowReturnType, this.shouldParseAsyncArrowReturnType = void 0, this.parseArrowExpression(d, u, !0, c);
      }, l.parseExprList = function(i, r, u, c) {
        for (var d = [], m = !0; !this.eat(i); ) {
          if (m) m = !1;
          else if (this.expect(o.comma), r && this.afterTrailingComma(i)) break;
          var y = void 0;
          u && this.type === o.comma ? y = null : this.type === o.ellipsis ? (y = this.parseSpread(c), c && this.type === o.comma && c.trailingComma < 0 && (c.trailingComma = this.start)) : y = this.parseMaybeAssign(!1, c, this.parseParenItem), d.push(y);
        }
        return d;
      }, l.parseSubscript = function(i, r, u, c, d, m, y) {
        var g = this, b = m;
        if (!this.hasPrecedingLineBreak() && this.value === "!" && this.match(o.prefix)) {
          this.exprAllowed = !1, this.next();
          var P = this.startNodeAt(r, u);
          return P.expression = i, i = this.finishNode(P, "TSNonNullExpression");
        }
        var E = !1;
        if (this.match(o.questionDot) && this.lookaheadCharCode() === 60) {
          if (c) return i;
          i.optional = !0, b = E = !0, this.next();
        }
        if (this.tsMatchLeftRelational() || this.match(o.bitShift)) {
          var L, k = this.tsTryParseAndCatch(function() {
            if (!c && g.atPossibleAsyncArrow(i)) {
              var ei = g.tsTryParseGenericAsyncArrowFunction(r, u, y);
              if (ei) return i = ei;
            }
            var ct = g.tsParseTypeArgumentsInExpression();
            if (!ct) return i;
            if (E && !g.match(o.parenL)) return L = g.curPosition(), i;
            if (ps(g.type) || g.type === o.backQuote) {
              var ti = g.parseTaggedTemplateExpression(i, r, u, b);
              return ti.typeParameters = ct, ti;
            }
            if (!c && g.eat(o.parenL)) {
              var ii = new Je(), Ue = g.startNodeAt(r, u);
              return Ue.callee = i, Ue.arguments = g.parseExprList(o.parenR, g.options.ecmaVersion >= 8, !1, ii), g.tsCheckForInvalidTypeCasts(Ue.arguments), Ue.typeParameters = ct, b && (Ue.optional = E), g.checkExpressionErrors(ii, !0), i = g.finishNode(Ue, "CallExpression");
            }
            var wt = g.type;
            if (!(g.tsMatchRightRelational() || wt === o.bitShift || wt !== o.parenL && (si = wt, !!si.startsExpr) && !g.hasPrecedingLineBreak())) {
              var si, At = g.startNodeAt(r, u);
              return At.expression = i, At.typeParameters = ct, g.finishNode(At, "TSInstantiationExpression");
            }
          });
          if (L && this.unexpected(L), k) return k.type === "TSInstantiationExpression" && (this.match(o.dot) || this.match(o.questionDot) && this.lookaheadCharCode() !== 40) && this.raise(this.start, A.InvalidPropertyAccessAfterInstantiationExpression), i = k;
        }
        var $ = this.options.ecmaVersion >= 11, U = $ && this.eat(o.questionDot);
        c && U && this.raise(this.lastTokStart, "Optional chaining cannot appear in the callee of new expressions");
        var q = this.eat(o.bracketL);
        if (q || U && this.type !== o.parenL && this.type !== o.backQuote || this.eat(o.dot)) {
          var K = this.startNodeAt(r, u);
          K.object = i, q ? (K.property = this.parseExpression(), this.expect(o.bracketR)) : K.property = this.type === o.privateId && i.type !== "Super" ? this.parsePrivateIdent() : this.parseIdent(this.options.allowReserved !== "never"), K.computed = !!q, $ && (K.optional = U), i = this.finishNode(K, "MemberExpression");
        } else if (!c && this.eat(o.parenL)) {
          var se = this.maybeInArrowParameters;
          this.maybeInArrowParameters = !0;
          var Ne = new Je(), ze = this.yieldPos, Xe = this.awaitPos, Le = this.awaitIdentPos;
          this.yieldPos = 0, this.awaitPos = 0, this.awaitIdentPos = 0;
          var Zt = this.parseExprList(o.parenR, this.options.ecmaVersion >= 8, !1, Ne);
          if (d && !U && this.shouldParseAsyncArrow()) this.checkPatternErrors(Ne, !1), this.checkYieldAwaitInDefaultParams(), this.awaitIdentPos > 0 && this.raise(this.awaitIdentPos, "Cannot use 'await' as identifier inside an async function"), this.yieldPos = ze, this.awaitPos = Xe, this.awaitIdentPos = Le, i = this.parseSubscriptAsyncArrow(r, u, Zt, y);
          else {
            this.checkExpressionErrors(Ne, !0), this.yieldPos = ze || this.yieldPos, this.awaitPos = Xe || this.awaitPos, this.awaitIdentPos = Le || this.awaitIdentPos;
            var ht = this.startNodeAt(r, u);
            ht.callee = i, ht.arguments = Zt, $ && (ht.optional = U), i = this.finishNode(ht, "CallExpression");
          }
          this.maybeInArrowParameters = se;
        } else if (this.type === o.backQuote) {
          (U || b) && this.raise(this.start, "Optional chaining cannot appear in the tag of tagged template expressions");
          var kt = this.startNodeAt(r, u);
          kt.tag = i, kt.quasi = this.parseTemplate({ isTagged: !0 }), i = this.finishNode(kt, "TaggedTemplateExpression");
        }
        return i;
      }, l.parseGetterSetter = function(i) {
        i.kind = i.key.name, this.parsePropertyName(i), i.value = this.parseMethod(!1);
        var r = i.kind === "get" ? 0 : 1, u = i.value.params[0], c = u && this.isThisParam(u);
        i.value.params.length !== (r = c ? r + 1 : r) ? this.raiseRecoverable(i.value.start, i.kind === "get" ? "getter should have no params" : "setter should have exactly one param") : i.kind === "set" && i.value.params[0].type === "RestElement" && this.raiseRecoverable(i.value.params[0].start, "Setter cannot use rest params");
      }, l.parseProperty = function(i, r) {
        if (!i) {
          var u = [];
          if (this.match(_.at)) for (; this.match(_.at); ) u.push(this.parseDecorator());
          var c = T.prototype.parseProperty.call(this, i, r);
          return c.type === "SpreadElement" && u.length && this.raise(c.start, "Decorators can't be used with SpreadElement"), u.length && (c.decorators = u, u = []), c;
        }
        return T.prototype.parseProperty.call(this, i, r);
      }, l.parseCatchClauseParam = function() {
        var i = this.parseBindingAtom(), r = i.type === "Identifier";
        this.enterScope(r ? 32 : 0), this.checkLValPattern(i, r ? 4 : 2);
        var u = this.tsTryParseTypeAnnotation();
        return u && (i.typeAnnotation = u, this.resetEndLocation(i)), this.expect(o.parenR), i;
      }, l.parseClass = function(i, r) {
        var u = this.inAbstractClass;
        this.inAbstractClass = !!i.abstract;
        try {
          this.next(), this.takeDecorators(i);
          var c = this.strict;
          this.strict = !0, this.parseClassId(i, r), this.parseClassSuper(i);
          var d = this.enterClassBody(), m = this.startNode(), y = !1;
          m.body = [];
          var g = [];
          for (this.expect(o.braceL); this.type !== o.braceR; ) if (this.match(_.at)) g.push(this.parseDecorator());
          else {
            var b = this.parseClassElement(i.superClass !== null);
            g.length && (b.decorators = g, this.resetStartLocationFromNode(b, g[0]), g = []), b && (m.body.push(b), b.type === "MethodDefinition" && b.kind === "constructor" && b.value.type === "FunctionExpression" ? (y && this.raiseRecoverable(b.start, "Duplicate constructor in the same class"), y = !0, b.decorators && b.decorators.length > 0 && this.raise(b.start, "Decorators can't be used with a constructor. Did you mean '@dec class { ... }'?")) : b.key && b.key.type === "PrivateIdentifier" && Br(d, b) && this.raiseRecoverable(b.key.start, "Identifier '#" + b.key.name + "' has already been declared"));
          }
          return this.strict = c, this.next(), g.length && this.raise(this.start, "Decorators must be attached to a class element."), i.body = this.finishNode(m, "ClassBody"), this.exitClassBody(), this.finishNode(i, r ? "ClassDeclaration" : "ClassExpression");
        } finally {
          this.inAbstractClass = u;
        }
      }, l.parseClassFunctionParams = function() {
        var i = this.tsTryParseTypeParameters(this.tsParseConstModifier), r = this.parseBindingList(o.parenR, !1, this.options.ecmaVersion >= 8, !0);
        return i && (r.typeParameters = i), r;
      }, l.parseMethod = function(i, r, u, c, d) {
        var m = this.startNode(), y = this.yieldPos, g = this.awaitPos, b = this.awaitIdentPos;
        if (this.initFunction(m), this.options.ecmaVersion >= 6 && (m.generator = i), this.options.ecmaVersion >= 8 && (m.async = !!r), this.yieldPos = 0, this.awaitPos = 0, this.awaitIdentPos = 0, this.enterScope(64 | Rt(r, m.generator) | (u ? 128 : 0)), this.expect(o.parenL), m.params = this.parseClassFunctionParams(), this.checkYieldAwaitInDefaultParams(), this.parseFunctionBody(m, !1, !0, !1, { isClassMethod: c }), this.yieldPos = y, this.awaitPos = g, this.awaitIdentPos = b, d && d.abstract && m.body) {
          var P = d.key;
          this.raise(d.start, A.AbstractMethodHasImplementation({ methodName: P.type !== "Identifier" || d.computed ? "[" + this.input.slice(P.start, P.end) + "]" : P.name }));
        }
        return this.finishNode(m, "FunctionExpression");
      }, te.parse = function(i, r) {
        if (r.locations === !1) throw new Error("You have to enable options.locations while using acorn-typescript");
        r.locations = !0;
        var u = new this(r, i);
        return a && (u.isAmbientContext = !0), u.parse();
      }, te.parseExpressionAt = function(i, r, u) {
        if (u.locations === !1) throw new Error("You have to enable options.locations while using acorn-typescript");
        u.locations = !0;
        var c = new this(u, i, r);
        return a && (c.isAmbientContext = !0), c.nextToken(), c.parseExpression();
      }, l.parseImportSpecifier = function() {
        if (this.ts_isContextual(_.type)) {
          var i = this.startNode();
          return i.imported = this.parseModuleExportName(), this.parseTypeOnlyImportExportSpecifier(i, !0, this.importOrExportOuterKind === "type"), this.finishNode(i, "ImportSpecifier");
        }
        var r = T.prototype.parseImportSpecifier.call(this);
        return r.importKind = "value", r;
      }, l.parseExportSpecifier = function(i) {
        var r = this.ts_isContextual(_.type);
        if (!this.match(o.string) && r) {
          var u = this.startNode();
          return u.local = this.parseModuleExportName(), this.parseTypeOnlyImportExportSpecifier(u, !1, this.importOrExportOuterKind === "type"), this.finishNode(u, "ExportSpecifier"), this.checkExport(i, u.exported, u.exported.start), u;
        }
        var c = T.prototype.parseExportSpecifier.call(this, i);
        return c.exportKind = "value", c;
      }, l.parseTypeOnlyImportExportSpecifier = function(i, r, u) {
        var c, d = r ? "imported" : "local", m = r ? "local" : "exported", y = i[d], g = !1, b = !0, P = y.start;
        if (this.isContextual("as")) {
          var E = this.parseIdent();
          if (this.isContextual("as")) {
            var L = this.parseIdent();
            ut(this.type) ? (g = !0, y = E, c = r ? this.parseIdent() : this.parseModuleExportName(), b = !1) : (c = L, b = !1);
          } else ut(this.type) ? (b = !1, c = r ? this.parseIdent() : this.parseModuleExportName()) : (g = !0, y = E);
        } else ut(this.type) && (g = !0, r ? (y = T.prototype.parseIdent.call(this, !0), this.isContextual("as") || this.checkUnreserved(y)) : y = this.parseModuleExportName());
        g && u && this.raise(P, r ? A.TypeModifierIsUsedInTypeImports : A.TypeModifierIsUsedInTypeExports), i[d] = y, i[m] = c, i[r ? "importKind" : "exportKind"] = g ? "type" : "value", b && this.eatContextual("as") && (i[m] = r ? this.parseIdent() : this.parseModuleExportName()), i[m] || (i[m] = this.copyNode(i[d])), r && this.checkLValSimple(i[m], 2);
      }, l.raiseCommonCheck = function(i, r, u) {
        return r === "Comma is not permitted after the rest element" ? this.isAmbientContext && this.match(o.comma) && this.lookaheadCharCode() === 41 ? void this.next() : T.prototype.raise.call(this, i, r) : u ? T.prototype.raiseRecoverable.call(this, i, r) : T.prototype.raise.call(this, i, r);
      }, l.raiseRecoverable = function(i, r) {
        return this.raiseCommonCheck(i, r, !0);
      }, l.raise = function(i, r) {
        return this.raiseCommonCheck(i, r, !0);
      }, l.updateContext = function(i) {
        var r = this.type;
        if (r == o.braceL) {
          var u = this.curContext();
          u == ee.tc_oTag ? this.context.push(de.b_expr) : u == ee.tc_expr ? this.context.push(de.b_tmpl) : T.prototype.updateContext.call(this, i), this.exprAllowed = !0;
        } else {
          if (r !== o.slash || i !== _.jsxTagStart) return T.prototype.updateContext.call(this, i);
          this.context.length -= 2, this.context.push(ee.tc_cTag), this.exprAllowed = !1;
        }
      }, l.jsx_parseOpeningElementAt = function(i, r) {
        var u = this, c = this.startNodeAt(i, r), d = this.jsx_parseElementName();
        if (d && (c.name = d), this.match(o.relational) || this.match(o.bitShift)) {
          var m = this.tsTryParseAndCatch(function() {
            return u.tsParseTypeArgumentsInExpression();
          });
          m && (c.typeParameters = m);
        }
        for (c.attributes = []; this.type !== o.slash && this.type !== _.jsxTagEnd; ) c.attributes.push(this.jsx_parseAttribute());
        return c.selfClosing = this.eat(o.slash), this.expect(_.jsxTagEnd), this.finishNode(c, d ? "JSXOpeningElement" : "JSXOpeningFragment");
      }, l.enterScope = function(i) {
        i === Qe && this.importsStack.push([]), T.prototype.enterScope.call(this, i);
        var r = T.prototype.currentScope.call(this);
        r.types = [], r.enums = [], r.constEnums = [], r.classes = [], r.exportOnlyBindings = [];
      }, l.exitScope = function() {
        T.prototype.currentScope.call(this).flags === Qe && this.importsStack.pop(), T.prototype.exitScope.call(this);
      }, l.hasImport = function(i, r) {
        var u = this.importsStack.length;
        if (this.importsStack[u - 1].indexOf(i) > -1) return !0;
        if (!r && u > 1) {
          for (var c = 0; c < u - 1; c++) if (this.importsStack[c].indexOf(i) > -1) return !0;
        }
        return !1;
      }, l.maybeExportDefined = function(i, r) {
        this.inModule && 1 & i.flags && this.undefinedExports.delete(r);
      }, l.isRedeclaredInScope = function(i, r, u) {
        return !!(0 & u) && (2 & u ? i.lexical.indexOf(r) > -1 || i.functions.indexOf(r) > -1 || i.var.indexOf(r) > -1 : 3 & u ? i.lexical.indexOf(r) > -1 || !T.prototype.treatFunctionsAsVarInScope.call(this, i) && i.var.indexOf(r) > -1 : i.lexical.indexOf(r) > -1 && !(32 & i.flags && i.lexical[0] === r) || !this.treatFunctionsAsVarInScope(i) && i.functions.indexOf(r) > -1);
      }, l.checkRedeclarationInScope = function(i, r, u, c) {
        this.isRedeclaredInScope(i, r, u) && this.raise(c, "Identifier '" + r + "' has already been declared.");
      }, l.declareName = function(i, r, u) {
        if (4096 & r) return this.hasImport(i, !0) && this.raise(u, "Identifier '" + i + "' has already been declared."), void this.importsStack[this.importsStack.length - 1].push(i);
        var c = this.currentScope();
        if (1024 & r) return this.maybeExportDefined(c, i), void c.exportOnlyBindings.push(i);
        T.prototype.declareName.call(this, i, r, u), 0 & r && (0 & r || (this.checkRedeclarationInScope(c, i, r, u), this.maybeExportDefined(c, i)), c.types.push(i)), 256 & r && c.enums.push(i), 512 & r && c.constEnums.push(i), 128 & r && c.classes.push(i);
      }, l.checkLocalExport = function(i) {
        var r = i.name;
        if (!this.hasImport(r)) {
          for (var u = this.scopeStack.length - 1; u >= 0; u--) {
            var c = this.scopeStack[u];
            if (c.types.indexOf(r) > -1 || c.exportOnlyBindings.indexOf(r) > -1) return;
          }
          T.prototype.checkLocalExport.call(this, i);
        }
      }, X = te, D = [{ key: "acornTypeScript", get: function() {
        return x;
      } }], (G = [{ key: "acornTypeScript", get: function() {
        return x;
      } }]) && ci(X.prototype, G), D && ci(X, D), Object.defineProperty(X, "prototype", { writable: !1 }), te;
    })(f);
    return ms;
  };
}
const zr = [
  { idPrefix: "datapos-app-nuxt", typeId: "app", isPublish: !1, uploadGroupName: void 0 },
  { idPrefix: "datapos-api", typeId: "api", isPublish: !1, uploadGroupName: void 0 },
  { idPrefix: "datapos-connector", typeId: "connector", isPublish: !0, uploadGroupName: "connectors" },
  { idPrefix: "datapos-context", typeId: "context", isPublish: !0, uploadGroupName: "contexts" },
  { idPrefix: "datapos-development", typeId: "development", isPublish: !0, uploadGroupName: void 0 },
  { idPrefix: "datapos-engine", typeId: "engine", isPublish: !1, uploadGroupName: "engine" },
  { idPrefix: "datapos-presenter", typeId: "presenter", isPublish: !0, uploadGroupName: "presenters" },
  { idPrefix: "datapos-resources", typeId: "resources", isPublish: !1, uploadGroupName: void 0 },
  { idPrefix: "datapos-shared", typeId: "shared", isPublish: !0, uploadGroupName: void 0 },
  { idPrefix: "datapos-tool", typeId: "tool", isPublish: !0, uploadGroupName: "tools" },
  { idPrefix: "eslint-config-datapos", typeId: "eslint", isPublish: !0, uploadGroupName: void 0 }
], Xr = xs(vs);
async function Qr(e) {
  let t;
  try {
    t = await ne.readdir(e, { withFileTypes: !0 });
  } catch (s) {
    if (s.code === "ENOENT") return;
    throw s;
  }
  await Promise.all(
    t.map(async (s) => {
      const a = Ye.join(e, s.name);
      try {
        await ne.rm(a, { recursive: !0, force: !0 });
      } catch (n) {
        if (n.code !== "ENOENT") throw n;
      }
    })
  );
}
function Jt(e) {
  const s = H.extend(Wr()).parse(e, {
    ecmaVersion: "latest",
    sourceType: "module",
    locations: !0
  }), a = [];
  return console.log("aaaa"), Ft(s, (n) => {
    if (console.log("bbbb", n), n.type !== "MethodDefinition") return;
    console.log("cccc");
    const p = n, f = p.key;
    if (f.type !== "Identifier") return;
    const v = f.name;
    console.log("dddd"), v && v !== "constructor" && p.accessibility !== "private" && (console.log("eeee"), a.push(v), console.log("ffff"));
  }), a;
}
async function pe(e, t, s = [], a) {
  const n = `${t} ${s.join(" ")}`;
  e !== void 0 && W(`${e} - exec(${n})`);
  const { stdout: p, stderr: f } = await Xr(n);
  a === void 0 ? p.trim() && console.log(p.trim()) : await ne.writeFile(a, p.trim(), "utf8"), f.trim() && console.error(f.trim());
}
async function Jr(e, t) {
  return ne.readdir(e, t);
}
function os(e) {
  const t = zr.find((s) => e.startsWith(s.idPrefix));
  if (!t) throw new Error(`Failed to locate module type configuration for identifier '${e}'.`);
  return t;
}
function ke(e) {
  const t = "\x1B[36m", s = "\x1B[0m", a = "─".repeat(Math.max(e.length + 60, 60));
  console.info(`
${t}${a}`), console.info(`▶️  ${e}`), console.info(`${a}${s}`);
}
function _e(e) {
  console.info(`
✅ ${e}
`);
}
function W(e) {
  console.info(`
${e}
`);
}
async function J(e) {
  return JSON.parse(await ne.readFile(e, "utf8"));
}
async function Ve(e) {
  return await ne.readFile(e, "utf8");
}
async function Yr(e) {
  try {
    await ne.unlink(e);
  } catch (t) {
    if (t.code !== "ENOENT") throw t;
  }
}
async function xe(e, t, s = [], a = !1) {
  return W(`${e} - spawn(${t} ${s.join(" ")})`), new Promise((n, p) => {
    gs(t, s, { stdio: "inherit" }).on("close", (v) => {
      v === 0 || a ? n() : p(new Error(`${t} exited with code ${v}`));
    });
  });
}
function us(e, t, s, a) {
  const n = e.indexOf(s), p = e.indexOf(a);
  if (n === -1 || p === -1) throw new Error(`Markers ${s}-${a} not found in content.`);
  return `${e.slice(0, Math.max(0, n + s.length))}
${t}
${e.slice(Math.max(0, p))}`;
}
async function vt(e, t) {
  await ne.writeFile(e, JSON.stringify(t, void 0, 4), "utf8");
}
async function st(e, t) {
  await ne.writeFile(e, t, "utf8");
}
function Ft(e, t) {
  t(e);
  for (const [s, a] of Object.entries(e)) {
    if (["loc", "range", "start", "end", "comments"].includes(s)) continue;
    const n = a;
    if (Array.isArray(n))
      for (const p of n) {
        const f = p;
        f && typeof f.type == "string" && Ft(f, t);
      }
    else n && typeof n == "object" && typeof n.type == "string" && Ft(n, t);
  }
}
async function Zr() {
  const e = await J("config.json"), t = {
    body: JSON.stringify(e),
    headers: { "Content-Type": "application/json" },
    method: "PUT"
  }, s = await fetch(`https://api.datapos.app/states/${e.id}`, t);
  if (!s.ok) throw new Error(await s.text());
}
async function xi(e) {
  const t = e.id, s = {
    body: JSON.stringify(e),
    headers: { "Content-Type": "application/json" },
    method: "PUT"
  }, a = await fetch(`https://api.datapos.app/states/${t}`, s);
  if (!a.ok) throw new Error(await a.text());
}
async function vi(e, t) {
  const s = `v${e.version}`;
  async function a(n, p = "") {
    const f = await Jr(n, { withFileTypes: !0 });
    for (const v of f) {
      const x = `${n}/${v.name}`, o = p ? `${p}/${v.name}` : v.name;
      if (v.isDirectory()) continue;
      const S = `${t}_${s}/${o}`.replaceAll("\\", "/"), I = v.name.endsWith(".css") ? "text/css" : "application/octet-stream", B = v.name.endsWith(".js") ? "application/javascript" : I;
      console.info(`⚙️ Uploading '${o}' → '${S}'...`), await pe(void 0, `wrangler r2 object put "${S}" --file="${x}" --content-type ${B} --jurisdiction=eu --remote`);
    }
  }
  await a("dist");
}
const ea = /* @__PURE__ */ new Set(["createObject", "dropObject", "removeRecords", "upsertRecords"]), ta = /* @__PURE__ */ new Set([
  "auditObjectContent",
  "findObjectFolderPath",
  "getReadableStream",
  "getRecord",
  "listNodes",
  "previewObject",
  "retrieveChunks",
  "retrieveRecords"
]);
async function Ta() {
  try {
    ke("Build Project"), await xe("1️⃣  Bundle project", "vite", ["build"]), _e("Project built.");
  } catch (e) {
    console.error("❌ Error building project.", e), process.exit(1);
  }
}
async function Ca() {
  try {
    ke("Release Project");
    const e = await J("package.json");
    let t = await J("config.json");
    await hs("1️⃣", e);
    const s = os(t.id);
    switch (s.typeId) {
      case "connector":
        t = await sa("2️⃣", e);
        break;
      case "context":
        t = await ra("2️⃣", e);
        break;
      case "presenter":
        t = await aa("2️⃣", e);
        break;
      default:
        t = await ia("2️⃣", e);
    }
    if (await xe("3️⃣  Bundle project", "vite", ["build"]), await pe("4️⃣  Stage changes", "git", ["add", "."]), await pe("5️⃣  Commit changes", "git", ["commit", "-m", `"v${e.version}"`]), await pe("6️⃣  Push changes", "git", ["push", "origin", "main:main"]), s.typeId === "app")
      W("7️⃣  Register module"), await Zr();
    else if (s.typeId === "engine")
      W("7️⃣  Register module"), await vi(e, `datapos-engine-eu/${s.uploadGroupName}`), await xi(t);
    else if (s.uploadGroupName === void 0)
      W("7️⃣  Registration NOT required.");
    else {
      W("7️⃣  Register module");
      const a = t.id.split("-").slice(2).join("-");
      await vi(e, `datapos-engine-eu/${s.uploadGroupName}/${a}`), await xi(t);
    }
    if (s.isPublish) {
      const a = ".npmrc";
      try {
        await st(a, `registry=https://registry.npmjs.org/
//registry.npmjs.org/:_authToken=${process.env.NPM_TOKEN ?? ""}`), await xe("8️⃣  Publish to npm", "npm", ["publish", "--access", "public"]);
      } finally {
        await Yr(a);
      }
    } else
      W(`8️⃣  Publishing NOT required for package with type identifier of '${s.typeId}'.`);
    _e(`Project version '${e.version}' released.`);
  } catch (e) {
    console.error("❌ Error releasing project.", e), process.exit(1);
  }
}
async function ka() {
  try {
    ke("Synchronise Project with GitHub");
    const e = await J("package.json");
    W("Bump project version"), await hs("1️⃣", e), await pe("2️⃣  Stage changes", "git", ["add", "."]), await pe("3️⃣  Commit changes", "git", ["commit", "-m", `"v${e.version}"`]), await pe("4️⃣  Push changes", "git", ["push", "origin", "main:main"]), _e(`Project version '${e.version}' synchronised with GitHub.`);
  } catch (e) {
    console.error("❌ Error synchronising project with GitHub.", e), process.exit(1);
  }
}
function wa() {
  try {
    ke("Test Project"), console.error(`
❌ No tests implemented.
`);
  } catch (e) {
    console.error("❌ Error testing project.", e), process.exit(1);
  }
}
async function ia(e, t) {
  W(`${e}  Build project configuration`);
  const s = await J("config.json");
  return t.name != null && (s.id = t.name.replace("@datapos/", "").replace("@data-positioning/", "")), t.version != null && (s.version = t.version), await vt("config.json", s), s;
}
async function sa(e, t) {
  W(`${e}  Build connector project configuration`);
  const [s, a] = await Promise.all([J("config.json"), Ve("src/index.ts")]), n = /* @__PURE__ */ Bt(Hs, s);
  if (!n.success)
    throw console.error("❌ Configuration is invalid:"), console.table(n.issues), new Error("Configuration is invalid.");
  console.log(1111);
  const p = Jt(a);
  console.log(2222);
  const f = na(p);
  return console.log(3333), await Yt(t, s, p, f);
}
async function Yt(e, t, s, a) {
  return s.length > 0 ? (console.info(`ℹ️  Implements ${s.length} operations:`), console.table(s)) : console.warn("⚠️  Implements no operations."), a === "unknown" ? console.warn("⚠️  No usage identified.") : console.info(`ℹ️  Supports '${a}' usage.`), e.name != null && (t.id = e.name.replace("@datapos/", "").replace("@data-positioning/", "")), e.version != null && (t.version = e.version), t.operations = s, t.usageId = a ?? "unknown", await vt("config.json", t), t;
}
async function ra(e, t) {
  W(`${e}  Build context project configuration`);
  const [s, a] = await Promise.all([J("config.json"), Ve("src/index.ts")]), n = /* @__PURE__ */ Bt(Ws, s);
  if (!n.success)
    throw console.error("❌ Configuration is invalid:"), console.table(n.issues), new Error("Configuration is invalid.");
  const p = Jt(a);
  return await Yt(t, s, p);
}
async function aa(e, t) {
  W(`${e}  Build presenter project configuration`);
  const [s, a] = await Promise.all([J("config.json"), Ve("src/index.ts")]), n = /* @__PURE__ */ Bt(Xs, s);
  if (!n.success)
    throw console.error("❌ Configuration is invalid:"), console.table(n.issues), new Error("Configuration is invalid.");
  const p = Jt(a);
  return await Yt(t, s, p);
}
async function hs(e, t, s = "./") {
  if (W(`${e}  Bump project version`), t.version == null)
    t.version = "0.0.001", console.warn(`⚠️ Project version initialised to '${t.version}'.`), await vt(`${s}package.json`, t);
  else {
    const a = t.version, n = t.version.split(".");
    t.version = `${n[0]}.${n[1]}.${Number(n[2]) + 1}`, console.info(`Project version bumped from '${a}' to '${t.version}'.`), await vt(`${s}package.json`, t);
  }
}
function na(e) {
  let t = !1, s = !1;
  for (const a of e)
    ta.has(a) && (t = !0), ea.has(a) && (s = !0);
  return t && s ? "bidirectional" : t ? "source" : s ? "destination" : "unknown";
}
const oa = {
  critical: { color: "D32F2F", label: "critical" },
  high: { color: "EF6C00", label: "high" },
  moderate: { color: "FBC02D", label: "moderate" },
  low: { color: "6D8C31", label: "low" },
  unknown: { color: "616161", label: "unknown" }
  // See sample badges in ~/tests/sampleBadges.md. Also included 'info' colouring.
}, ua = "<!-- OWASP_BADGES_START -->", ha = "<!-- OWASP_BADGES_END -->";
async function Aa() {
  try {
    ke("Audit Dependencies");
    const e = await J("package.json");
    await xe("1️⃣", "owasp-dependency-check", [
      "--out",
      "dependency-check-reports",
      "--project",
      e.name ?? "unknown",
      "--enableRetired",
      "--nodePackageSkipDevDependencies",
      "--nvdApiKey",
      process.env.OWASP_NVD_API_KEY ?? ""
    ]), await ca("2️⃣"), await xe("3️⃣  Check using 'npm audit'", "npm", ["audit"]), _e("Dependencies audited.");
  } catch (e) {
    console.error("❌ Error auditing dependencies.", e), process.exit(1);
  }
}
async function ca(e) {
  W(`${e}  Insert OWASP Badge(s) into 'README.md'`);
  const t = await J("dependency-check-reports/dependency-check-report.json"), s = { critical: 0, high: 0, moderate: 0, low: 0, unknown: 0 };
  for (const f of t.dependencies)
    if (f.vulnerabilities != null)
      for (const v of f.vulnerabilities) {
        const x = v.severity?.toLowerCase() ?? "unknown";
        x in s ? s[x]++ : s.unknown++;
      }
  const a = await pa(s), n = await Ve("./README.md"), p = us(n, a.join(" "), ua, ha);
  await st("README.md", p), console.info("OWASP audit badge(s) inserted into 'README.md'");
}
async function pa(e) {
  const t = await J("config.json"), s = [];
  if (Object.values(e).reduce((n, p) => n + p, 0) === 0)
    console.info("No vulnerabilities found."), s.push(`[![OWASP](https://img.shields.io/badge/OWASP-passed-4CAF50)](https://data-positioning.github.io/${t.id}/dependency-check-reports/dependency-check-report.html)`);
  else
    for (const [n, p] of Object.entries(e)) {
      const f = oa[n];
      if (console.warn(`⚠️  ${p} ${f.label} vulnerability(ies) found.`), p === 0) continue;
      const v = `https://img.shields.io/badge/OWASP-${p}%20${f.label}-${f.color}`;
      s.push(`[![OWASP](${v})](https://data-positioning.github.io/${t.id}/dependency-check-reports/dependency-check-report.html)`);
    }
  return s;
}
async function Ea() {
  try {
    ke("Check Dependencies"), await xe("1️⃣  Check using 'npm outdated'", "npm", ["outdated"], !0), await xe("2️⃣  Check using 'npm-check-updates'", "npm-check-updates", ["-i"]), _e("Dependencies checked.");
  } catch (e) {
    console.error("❌ Error checking dependencies.", e), process.exit(1);
  }
}
const la = "<!-- DEPENDENCY_LICENSES_START -->", fa = "<!-- DEPENDENCY_LICENSES_END -->";
async function Ia(e = [], t = !0) {
  try {
    ke("Document Dependencies");
    const s = e.flatMap((n) => ["--allowed", `'${n}'`]), a = gi(new bs(import.meta.resolve("@datapos/datapos-development/license-report-config")));
    await pe(
      "1️⃣  Generate 'licenses.json' file",
      "license-report",
      ["--config", `'${a}'`, "--only=prod,peer", "--output=json"],
      "licenses/licenses.json"
    ), await pe("2️⃣  Check 'licenses.json' file", "license-report-check", ["--source", "licenses/licenses.json", "--output=table", ...s]), t ? (await pe(
      "3️⃣  Generate 'licenseTree.json' file",
      "license-report-recursive",
      ["--only=prod,peer", "--output=tree", "--recurse", "--department.value=n/a", "--licensePeriod.value=n/a", "--material.value=n/a", "--relatedTo.value=n/a"],
      "licenses/licenseTree.json"
    ), await pe("4️⃣  Check 'licenseTree.json' file", "license-report-check", ["--source", "licenses/licenseTree.json", "--output=table", ...s])) : (W("3️⃣  Skip 'licenses/licenseTree.json' file generate"), W("4️⃣  Skip 'licenses/licenseTree.json' file check")), await Qr("licenses/downloads"), await pe("5️⃣  Download license files", "license-downloader", [
      "--source",
      "licenses/licenses.json",
      "--licDir",
      "licenses/downloads",
      "--githubToken.tokenEnvVar",
      "GITHUB_TOKEN",
      "--download"
    ]), await da("6️⃣", t), _e("Dependencies documented.");
  } catch (s) {
    console.error("❌ Error documenting dependencies.", s), process.exit(1);
  }
}
async function da(e, t) {
  W(`${e}  Insert licenses into 'README.md'`);
  const s = await J("licenses/licenses.json"), a = await J("licenses/downloads/licenses.ext.json");
  let n = [];
  t && (n = await J("licenses/licenseTree.json"));
  const p = [
    ...(() => {
      const o = /* @__PURE__ */ new Map();
      for (const S of s)
        o.set(S.name, { ...S });
      for (const S of a) {
        const I = o.get(S.name);
        o.set(S.name, I ? { ...I, ...S } : { ...S });
      }
      for (const S of n) {
        const I = o.get(S.name);
        I && o.set(S.name, { ...I, dependencyCount: S.requires?.length ?? 0 });
      }
      return o.values();
    })()
  ];
  let f = `|Name|Type|Installed|Latest|Latest Released|Deps|Document|
|:-|:-|:-:|:-:|:-|-:|:-|
`;
  for (const o of p) {
    const S = o.installedVersion === o.remoteVersion ? o.installedVersion : `${o.installedVersion} ⚠️`, I = o.latestRemoteModified ? ma(o.latestRemoteModified.split("T")[0]) : "n/a", B = o.dependencyCount != null && o.dependencyCount >= 0 ? o.dependencyCount : "n/a";
    let oe;
    o.licenseFileLink == null || o.licenseFileLink == "" ? oe = "⚠️ No license file" : oe = `[${o.licenseFileLink.slice(Math.max(0, o.licenseFileLink.lastIndexOf("/") + 1))}](${o.licenseFileLink})`, f += `|${o.name}|${o.licenseType}|${S}|${o.remoteVersion}|${I}|${B}|${oe}|
`;
  }
  const v = await Ve("./README.md"), x = us(v, f, la, fa);
  await st("README.md", x), console.info("OWASP audit badge(s) inserted into 'README.md'"), await st("README.md", x);
}
function ma(e) {
  if (e == null || e === "") return "n/a";
  const t = e.split("T")[0];
  if (t == null || t === "") return "n/a";
  const s = new Date(t), a = /* @__PURE__ */ new Date();
  let n = (a.getFullYear() - s.getFullYear()) * 12 + (a.getMonth() - s.getMonth());
  return a.getDate() < s.getDate() && (n -= 1), n === 0 ? `this month: ${t}` : n === 1 ? `1 month ago: ${t}` : n <= 6 ? `${n} months ago: ${t}` : n <= 12 ? `${n} months ago: ${t} ⚠️` : `${n} months ago: ${t}❗`;
}
async function _a() {
  try {
    ke("Format Code");
    const s = ["--write", "*.json", "*.md", "*.ts", ...["app", "src"].filter((a) => ys(a)).map((a) => `${a}/**`)];
    await xe("1️⃣  Format", "prettier", s), _e("Code formatted.");
  } catch (e) {
    console.error("❌ Error formatting code.", e), process.exit(1);
  }
}
async function Na() {
  try {
    ke("Lint Code"), await xe("1️⃣  Lint", "eslint", ["."]), _e("Code linted.");
  } catch (e) {
    console.error("❌ Error linting code.", e), process.exit(1);
  }
}
const ya = ["1️⃣", "2️⃣", "3️⃣", "4️⃣", "5️⃣", "6️⃣", "7️⃣", "8️⃣", "9️⃣"];
async function La(e = []) {
  try {
    ke("Update '@datapos/datapos' Dependencies");
    for (const [t, s] of e.entries()) {
      const a = ya.at(t) ?? "🔢";
      if (s === "eslint")
        await xe(`${a}  Update '${s}'`, "npm", ["install", "@datapos/eslint-config-datapos@latest"]);
      else if (await xe(`${a}  Update '${s}'`, "npm", ["install", `@datapos/datapos-${s}@latest`]), s === "development") {
        const n = await J("config.json"), p = os(n.id);
        await xa(p);
      }
    }
    _e("'@datapos/datapos' dependencies updated.");
  } catch (t) {
    console.error("❌ Error updating '@datapos/datapos' dependencies.", t), process.exit(1);
  }
}
async function xa(e) {
  const t = Ye.dirname(gi(import.meta.url));
  await ge(t, "../", ".editorconfig"), await ge(t, "../", ".gitattributes"), await (e.isPublish ? ge(t, "../", ".gitignore_published", ".gitignore2") : ge(t, "../", ".gitignore_unpublished", ".gitignore2")), await ge(t, "../", ".markdownlint.json"), await ge(t, "../", "LICENSE"), await ge(t, "../", "tsconfig.json", "tsconfig2.json"), e.typeId === "eslint" || (await ge(t, "../", "eslint.config.ts", "eslint.config2.ts"), await ge(t, "../", "vite.config.ts", "vite.config2.ts"), await ge(t, "../", "vitest.config.ts", "vitest.config2.ts"));
}
async function ge(e, t, s, a) {
  const n = Ye.resolve(e, `${t}${s}`), p = await Ve(n), f = Ye.resolve(process.cwd(), s.split("_")[0] ?? s), v = Ye.resolve(process.cwd(), a ?? s);
  let x;
  try {
    x = await Ve(f);
  } catch (o) {
    if (o.code !== "ENOENT") throw o;
  }
  if (x === p) {
    console.info(`ℹ️  File '${s.split("_")[0] ?? s}' is already up to date.`);
    return;
  }
  await st(v, p), console.info(`ℹ️  File '${a ?? s}' synchronised.`);
}
async function Oa(e) {
  try {
    console.info(`🚀 Building public directory index for identifier '${e}'...`);
    const t = {};
    async function s(n, p) {
      console.info(`⚙️ Processing directory '${n}'...`);
      const f = [], v = n.slice(`public/${e}`.length);
      t[v === "" ? "/" : v] = f;
      for (const x of p) {
        const o = `${n}/${x}`;
        try {
          const S = await ne.stat(o);
          if (S.isDirectory()) {
            const I = await ne.readdir(o), B = { childCount: I.length, name: x, typeId: "folder" };
            f.push(B), await s(o, I);
          } else {
            const I = { id: Ss(), lastModifiedAt: S.mtimeMs, name: x, size: S.size, typeId: "object" };
            f.push(I);
          }
        } catch (S) {
          throw new Error(`Unable to get information for '${x}' in 'buildPublicDirectoryIndex'. ${String(S)}`);
        }
      }
      f.sort((x, o) => {
        const S = x.typeId.localeCompare(o.typeId);
        return S === 0 ? x.name.localeCompare(o.name) : S;
      });
    }
    const a = await ne.readdir(`public/${e}`);
    await s(`public/${e}`, a), await ne.writeFile(`./public/${e}Index.json`, JSON.stringify(t), "utf8"), console.info("✅ Public directory index built.");
  } catch (t) {
    console.error("❌ Error building public directory index.", t);
  }
}
export {
  Aa as auditDependencies,
  Oa as buildDirectoryIndex,
  Ta as buildProject,
  Ea as checkDependencies,
  Ia as documentDependencies,
  _a as formatCode,
  Na as lintCode,
  Ca as releaseProject,
  ka as syncProjectWithGitHub,
  wa as testProject,
  La as updateDataPosDependencies
};
//# sourceMappingURL=datapos-development.es.js.map
