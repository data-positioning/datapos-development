import { exec as p } from "node:child_process";
import { promises as B } from "node:fs";
import { nanoid as J } from "nanoid";
import { promisify as N } from "node:util";
var d;
(function(A) {
  A[A.Static = 1] = "Static", A[A.Dynamic = 2] = "Dynamic", A[A.ImportMeta = 3] = "ImportMeta", A[A.StaticSourcePhase = 4] = "StaticSourcePhase", A[A.DynamicSourcePhase = 5] = "DynamicSourcePhase", A[A.StaticDeferPhase = 6] = "StaticDeferPhase", A[A.DynamicDeferPhase = 7] = "DynamicDeferPhase";
})(d || (d = {}));
const u = new Uint8Array(new Uint16Array([1]).buffer)[0] === 1;
function D(A, Q = "@") {
  if (!n) return f.then((() => D(A)));
  const C = A.length + 1, o = (n.__heap_base.value || n.__heap_base) + 4 * C - n.memory.buffer.byteLength;
  o > 0 && n.memory.grow(Math.ceil(o / 65536));
  const t = n.sa(C - 1);
  if ((u ? L : h)(A, new Uint16Array(n.memory.buffer, t, C)), !n.parse()) throw Object.assign(new Error(`Parse error ${Q}:${A.slice(0, n.e()).split(`
`).length}:${n.e() - A.lastIndexOf(`
`, n.e() - 1)}`), { idx: n.e() });
  const e = [], a = [];
  for (; n.ri(); ) {
    const E = n.is(), i = n.ie(), g = n.it(), r = n.ai(), I = n.id(), w = n.ss(), c = n.se();
    let l;
    n.ip() && (l = s(A.slice(I === -1 ? E - 1 : E, I === -1 ? i + 1 : i))), e.push({ n: l, t: g, s: E, e: i, ss: w, se: c, d: I, a: r });
  }
  for (; n.re(); ) {
    const E = n.es(), i = n.ee(), g = n.els(), r = n.ele(), I = A.slice(E, i), w = I[0], c = g < 0 ? void 0 : A.slice(g, r), l = c ? c[0] : "";
    a.push({ s: E, e: i, ls: g, le: r, n: w === '"' || w === "'" ? s(I) : I, ln: l === '"' || l === "'" ? s(c) : c });
  }
  function s(E) {
    try {
      return (0, eval)(E);
    } catch {
    }
  }
  return [e, a, !!n.f(), !!n.ms()];
}
function h(A, Q) {
  const C = A.length;
  let o = 0;
  for (; o < C; ) {
    const t = A.charCodeAt(o);
    Q[o++] = (255 & t) << 8 | t >>> 8;
  }
}
function L(A, Q) {
  const C = A.length;
  let o = 0;
  for (; o < C; ) Q[o] = A.charCodeAt(o++);
}
let n;
const m = () => {
  return A = "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GzYCHAtBAEEAKAKwCkECajYCsAoCQAJAAkACQEEAECkiAUHhAEYNACABQfcARg0BQQAoArAKIQEMAgtBACgCsAoiAUECakHACEEKEC8NAUEGIQIMAgtBACgCsAoiAS8BAkHpAEcNACABLwEEQfQARw0AQQQhAiABLwEGQegARg0BC0EAIAFBfmo2ArAKDwtBACABIAJBAXRqNgKwCgJAQQEQKUH7AEYNAEEAIAE2ArAKDwtBACgCsAoiACECA0BBACACQQJqNgKwCgJAAkACQEEBECkiAkEiRg0AIAJBJ0cNAUEnEBpBAEEAKAKwCkECajYCsApBARApIQIMAgtBIhAaQQBBACgCsApBAmo2ArAKQQEQKSECDAELIAIQLCECCwJAIAJBOkYNAEEAIAE2ArAKDwtBAEEAKAKwCkECajYCsAoCQEEBECkiAkEiRg0AIAJBJ0YNAEEAIAE2ArAKDwsgAhAaQQBBACgCsApBAmo2ArAKAkACQEEBECkiAkEsRg0AIAJB/QBGDQFBACABNgKwCg8LQQBBACgCsApBAmo2ArAKQQEQKUH9AEYNAEEAKAKwCiECDAELC0EAKALwCSIBIAA2AhAgAUEAKAKwCkECajYCDAttAQJ/AkACQANAAkAgAEH//wNxIgFBd2oiAkEXSw0AQQEgAnRBn4CABHENAgsgAUGgAUYNASAAIQIgARAoDQJBACECQQBBACgCsAoiAEECajYCsAogAC8BAiIADQAMAgsLIAAhAgsgAkH//wNxC6sBAQR/AkACQEEAKAKwCiICLwEAIgNB4QBGDQAgASEEIAAhBQwBC0EAIAJBBGo2ArAKQQEQKSECQQAoArAKIQUCQAJAIAJBIkYNACACQSdGDQAgAhAsGkEAKAKwCiEEDAELIAIQGkEAQQAoArAKQQJqIgQ2ArAKC0EBECkhA0EAKAKwCiECCwJAIAIgBUYNACAFIARBACAAIAAgAUYiAhtBACABIAIbEAILIAMLcgEEf0EAKAKwCiEAQQAoArQKIQECQAJAA0AgAEECaiECIAAgAU8NAQJAAkAgAi8BACIDQaR/ag4CAQQACyACIQAgA0F2ag4EAgEBAgELIABBBGohAAwACwtBACACNgKwChAlQQAPC0EAIAI2ArAKQd0AC0kBA39BACEDAkAgAkUNAAJAA0AgAC0AACIEIAEtAAAiBUcNASABQQFqIQEgAEEBaiEAIAJBf2oiAg0ADAILCyAEIAVrIQMLIAMLC+wBAgBBgAgLzgEAAHgAcABvAHIAdABtAHAAbwByAHQAZgBvAHIAZQB0AGEAbwB1AHIAYwBlAHIAbwBtAHUAbgBjAHQAaQBvAG4AcwBzAGUAcgB0AHYAbwB5AGkAZQBkAGUAbABlAGMAbwBuAHQAaQBuAGkAbgBzAHQAYQBuAHQAeQBiAHIAZQBhAHIAZQB0AHUAcgBkAGUAYgB1AGcAZwBlAGEAdwBhAGkAdABoAHIAdwBoAGkAbABlAGkAZgBjAGEAdABjAGYAaQBuAGEAbABsAGUAbABzAABB0AkLEAEAAAACAAAAAAQAAEA5AAA=", typeof Buffer < "u" ? Buffer.from(A, "base64") : Uint8Array.from(atob(A), ((Q) => Q.charCodeAt(0)));
  var A;
}, f = WebAssembly.compile(m()).then(WebAssembly.instantiate).then((({ exports: A }) => {
  n = A;
})), y = ["createObject", "dropObject", "removeRecords", "upsertRecords"], S = ["findObject", "getRecord", "listNodes", "previewObject", "retrieveRecords"], K = N(p);
async function Y() {
  try {
    console.info("🚀 Building configuration...");
    const A = JSON.parse(await B.readFile("package.json", "utf8")), Q = JSON.parse(await B.readFile("config.json", "utf8"));
    A.name != null && (Q.id = A.name.replace("@datapos/", "").replace("@data-positioning/", "")), A.version != null && (Q.version = A.version), await B.writeFile("config.json", JSON.stringify(Q, void 0, 4), "utf8"), console.info("✅ Configuration built.");
  } catch (A) {
    console.error("❌ Error building configuration.", A);
  }
}
async function b(A) {
  try {
    console.info(`🚀 Building public directory index for identifier '${A}'...`);
    const Q = {};
    async function C(t, e) {
      console.info(`⚙️ Processing directory '${t}'...`);
      const a = [], s = t.slice(`public/${A}`.length);
      Q[s === "" ? "/" : s] = a;
      for (const E of e) {
        const i = `${t}/${E}`;
        try {
          const g = await B.stat(i);
          if (g.isDirectory()) {
            const r = await B.readdir(i), I = { childCount: r.length, name: E, typeId: "folder" };
            a.push(I), await C(i, r);
          } else {
            const r = { id: J(), lastModifiedAt: g.mtimeMs, name: E, size: g.size, typeId: "object" };
            a.push(r);
          }
        } catch (g) {
          throw new Error(`Unable to get information for '${E}' in 'buildPublicDirectoryIndex'. ${String(g)}`);
        }
      }
      a.sort((E, i) => {
        const g = E.typeId.localeCompare(i.typeId);
        return g === 0 ? E.name.localeCompare(i.name) : g;
      });
    }
    const o = await B.readdir(`public/${A}`);
    await C(`public/${A}`, o), await B.writeFile(`./public/${A}Index.json`, JSON.stringify(Q), "utf8"), console.info("✅ Public directory index built.");
  } catch (Q) {
    console.error("❌ Error building public directory index.", Q);
  }
}
async function M() {
  try {
    console.info("🚀 Building connector configuration...");
    const A = JSON.parse(await B.readFile("package.json", "utf8")), Q = JSON.parse(await B.readFile("config.json", "utf8")), C = await B.readFile("src/index.ts", "utf8");
    await f;
    const o = D(C);
    console.log(o, o.imports, o.exports);
    let t = !1, e = !1;
    const a = /^\s{4}(?:async\s+)?(private\s+)?(?:public\s+|protected\s+)?([A-Za-z_]\w*)\s*\(/gm, s = [...C.matchAll(a)].filter((g) => g[1] == null && g[2] !== "constructor"), E = [];
    for (const g of s) {
      const r = g[2];
      E.push(r), y.includes(r) && (t = !0), S.includes(r) && (e = !0);
    }
    E.length > 0 ? console.info(`ℹ️  Implements ${E.length} operations.`) : console.warn("⚠️  Implements no operations.");
    let i;
    e && t ? i = "bidirectional" : e ? i = "source" : t ? i = "destination" : i = "unknown", i === "unknown" ? console.warn("⚠️  No usage identified.") : console.info(`ℹ️  Supports ${i} usage.`), A.name != null && (Q.id = A.name), Q.operations = E, Q.usageId = i, A.version != null && (Q.version = A.version), await B.writeFile("config.json", JSON.stringify(Q, void 0, 4), "utf8"), console.info("✅ Connector configuration built.");
  } catch (A) {
    console.error("❌ Error building connector configuration.", A);
  }
}
async function H() {
  try {
    console.info("🚀 Building context configuration...");
    const A = JSON.parse(await B.readFile("package.json", "utf8")), Q = JSON.parse(await B.readFile("config.json", "utf8")), C = await B.readFile("src/index.ts", "utf8"), o = /^\s{4}(?:async\s+)?(private\s+)?(?:public\s+|protected\s+)?([A-Za-z_]\w*)\s*\(/gm, t = [...C.matchAll(o)].filter((e) => e[1] == null && e[2] !== "constructor").map((e) => e[2]);
    A.name != null && (Q.id = A.name), Q.operations = t, A.version != null && (Q.version = A.version), await B.writeFile("config.json", JSON.stringify(Q, void 0, 4), "utf8"), console.info("✅ Context configuration built.");
  } catch (A) {
    console.error("❌ Error building context configuration.", A);
  }
}
async function v() {
  try {
    console.info("🚀 Building presenter configuration...");
    const A = JSON.parse(await B.readFile("package.json", "utf8")), Q = JSON.parse(await B.readFile("config.json", "utf8")), C = await B.readFile("src/index.ts", "utf8"), o = /^\s{4}(?:async\s+)?(private\s+)?(?:public\s+|protected\s+)?([A-Za-z_]\w*)\s*\(/gm, t = [...C.matchAll(o)].filter((e) => e[1] == null && e[2] !== "constructor").map((e) => e[2]);
    A.name != null && (Q.id = A.name), Q.operations = t, A.version != null && (Q.version = A.version), await B.writeFile("config.json", JSON.stringify(Q, void 0, 4), "utf8"), console.info("✅ Presenter configuration built.");
  } catch (A) {
    console.error("❌ Error building context configuration.", A);
  }
}
async function O(A = "./") {
  try {
    console.info("🚀 Bumping version...");
    const Q = JSON.parse(await B.readFile(`${A}package.json`, "utf8"));
    if (Q.version == null)
      Q.version = "0.0.001", await B.writeFile(`${A}package.json`, JSON.stringify(Q, void 0, 4), "utf8"), console.warn(`⚠️ Version initialised to ${Q.version}.`);
    else {
      const C = Q.version, o = Q.version.split(".");
      Q.version = `${o[0]}.${o[1]}.${Number(o[2]) + 1}`, await B.writeFile(`${A}package.json`, JSON.stringify(Q, void 0, 4), "utf8"), console.info(`✅ Version bumped from ${C} to ${Q.version}.`);
    }
  } catch (Q) {
    console.error("❌ Error bumping package version.", Q);
  }
}
function q(A) {
  console.error(`❌ ${A} script not implemented.`);
}
async function x() {
  const A = "<!-- DEPENDENCY_LICENSES_START -->", Q = "<!-- DEPENDENCY_LICENSES_END -->";
  try {
    const C = (await B.readFile("./licenses.md", "utf8")).trim(), o = await B.readFile("./README.md", "utf8"), t = o.indexOf(A), e = o.indexOf(Q);
    (t === -1 || e === -1) && (console.error("❌ Dependency license markers not found in readme file."), process.exit(1));
    const a = o.substring(0, t + A.length) + `
` + C + `
` + o.substring(e);
    await B.writeFile("README.md", a, "utf8"), console.log("✅ Readme file updated with license information");
  } catch (C) {
    console.error("❌ Error updating readme file.", C), process.exit(1);
  }
}
async function j() {
  const A = "<!-- OWASP_BADGE_START -->", Q = "<!-- OWASP_BADGE_END -->";
  try {
    const C = JSON.parse(await B.readFile("./dependency-check-reports/dependency-check-report.json", "utf-8")), o = { critical: 0, high: 0, moderate: 0, low: 0, unknown: 0 };
    for (const w of C.dependencies)
      if (w.vulnerabilities != null)
        for (const c of w.vulnerabilities) {
          const l = c.severity?.toLowerCase() ?? "unknown";
          l in o ? o[l]++ : o.unknown++;
        }
    const t = {
      critical: { color: "D32F2F", label: "critical" },
      high: { color: "EF6C00", label: "high" },
      moderate: { color: "FBC02D", label: "moderate" },
      low: { color: "6D8C31", label: "low" },
      unknown: { color: "616161", label: "unknown" }
    }, e = JSON.parse(await B.readFile("config.json", "utf8")), a = [];
    if (Object.values(o).reduce((w, c) => w + c, 0) === 0)
      console.info("✅ No vulnerabilities found."), a.push(`[![OWASP](https://img.shields.io/badge/OWASP-passed-4CAF50)](https://data-positioning.github.io/${e.id}/dependency-check-reports/dependency-check-report.html)`);
    else
      for (const [w, c] of Object.entries(o)) {
        const l = t[w];
        if (console.warn(`⚠️  ${c} ${l.label} vulnerability(ies) found.`), c === 0) continue;
        const k = `https://img.shields.io/badge/OWASP-${c}%20${l.label}-${l.color}`;
        a.push(`[![OWASP](${k})](https://data-positioning.github.io/${e.id}/dependency-check-reports/dependency-check-report.html)`);
      }
    const E = await B.readFile("./README.md", "utf8"), i = E.indexOf(A), g = E.indexOf(Q);
    (i === -1 || g === -1) && (console.error("❌ OWASP badge markers not found in README.md."), process.exit(1));
    const r = a.join(" "), I = E.substring(0, i + A.length) + r + E.substring(g);
    await B.writeFile("README.md", I, "utf8"), console.info("✅ OWASP dependency check badge(s) inserted into README.md");
  } catch (C) {
    console.error("❌ Error updating README with OWASP badges:", C), process.exit(1);
  }
}
async function P() {
  try {
    console.info("🚀 Sending deployment notice...");
    const A = JSON.parse(await B.readFile("config.json", "utf8")), Q = {
      body: JSON.stringify(A),
      headers: { "Content-Type": "application/json" },
      method: "PUT"
    }, C = await fetch(`https://api.datapos.app/states/${A.id}`, Q);
    if (!C.ok) throw new Error(await C.text());
    console.info("✅ Deployment notice sent.");
  } catch (A) {
    console.error("❌ Error sending deployment notice.", A);
  }
}
async function $() {
  try {
    console.info("🚀 Synchronising with GitHub....");
    const A = JSON.parse(await B.readFile("package.json", "utf8"));
    await K("git add ."), await K(`git commit -m "v${A.version}"`), await K("git push origin main:main"), console.info(`✅ Synchronised version ${A.version} with GitHub.`);
  } catch (A) {
    console.error("❌ Error synchronising with GitHub.", A);
  }
}
async function X(A, Q) {
  try {
    console.info("🚀 Uploading directory to R2....");
    async function C(t, e, a) {
      for (const s of a) {
        const E = `${t}/${s}`, i = `${e}/${s}`;
        if ((await B.stat(E)).isDirectory()) {
          const r = await B.readdir(E);
          await C(E, i, r);
        } else {
          console.info(`⚙️ Uploading '${t}/${s}'...`);
          const r = `wrangler r2 object put "datapos-sample-data-eu/${e}/${s}" --file="${t}/${s}" --jurisdiction=eu --remote`, I = await K(r);
          if (I.stderr) throw new Error(I.stderr);
        }
      }
    }
    const o = await B.readdir(`${A}/${Q}/`);
    await C(`${A}/${Q}`, Q, o), console.info("✅ Directory uploaded to R2.");
  } catch (C) {
    console.error("❌ Error uploading directory to R2.", C);
  }
}
async function Z() {
  try {
    console.info("🚀 Uploading module configuration....");
    const A = JSON.parse(await B.readFile("config.json", "utf8")), Q = A.id, C = {
      body: JSON.stringify(A),
      headers: { "Content-Type": "application/json" },
      method: "PUT"
    }, o = await fetch(`https://api.datapos.app/states/${Q}`, C);
    if (!o.ok) throw new Error(await o.text());
    console.info("✅ Module configuration uploaded.");
  } catch (A) {
    console.error("❌ Error uploading module configuration.", A);
  }
}
async function V(A) {
  try {
    console.info("🚀 Uploading module to R2...");
    const C = `v${JSON.parse(await B.readFile("package.json", "utf8")).version}`;
    async function o(t, e = "") {
      const a = await B.readdir(t, { withFileTypes: !0 });
      for (const s of a) {
        const E = `${t}/${s.name}`, i = e ? `${e}/${s.name}` : s.name;
        if (!s.isDirectory()) {
          const g = `${A}_${C}/${i}`.replace(/\\/g, "/"), r = s.name.endsWith(".js") ? "application/javascript" : s.name.endsWith(".css") ? "text/css" : "application/octet-stream";
          console.info(`⚙️ Uploading '${i}' → '${g}'...`);
          const { stderr: I } = await K(`wrangler r2 object put "${g}" --file="${E}" --content-type ${r} --jurisdiction=eu --remote`);
          if (I) throw new Error(I);
        }
      }
    }
    await o("dist"), console.info("✅ Module uploaded to R2.");
  } catch (Q) {
    console.error("❌ Error uploading module to R2.", Q);
  }
}
export {
  Y as buildConfig,
  M as buildConnectorConfig,
  H as buildContextConfig,
  v as buildPresenterConfig,
  b as buildPublicDirectoryIndex,
  O as bumpVersion,
  q as echoScriptNotImplemented,
  x as insertLicensesIntoReadme,
  j as insertOWASPDependencyCheckBadgeIntoReadme,
  P as sendDeploymentNotice,
  $ as syncWithGitHub,
  X as uploadDirectoryToR2,
  Z as uploadModuleConfigToDO,
  V as uploadModuleToR2
};
