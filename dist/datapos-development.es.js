import { exec as b } from "node:child_process";
import { promises as t } from "node:fs";
import { nanoid as $ } from "nanoid";
import { promisify as O } from "node:util";
const S = ["createObject", "dropObject", "removeRecords", "upsertRecords"], v = ["findObject", "getRecord", "listNodes", "previewObject", "retrieveRecords"], y = O(b);
async function j() {
  try {
    console.info("🚀 Building configuration...");
    const e = JSON.parse(await t.readFile("package.json", "utf8")), o = JSON.parse(await t.readFile("config.json", "utf8"));
    e.name != null && (o.id = e.name.replace("@datapos/", "").replace("@data-positioning/", "")), e.version != null && (o.version = e.version), await t.writeFile("config.json", JSON.stringify(o, void 0, 4), "utf8"), console.info("✅ Configuration built.");
  } catch (e) {
    console.error("❌ Error building configuration.", e);
  }
}
async function k(e) {
  try {
    console.info(`🚀 Building public directory index for identifier '${e}'...`);
    const o = {};
    async function i(s, r) {
      console.info(`⚙️ Processing directory '${s}'...`);
      const d = [], c = s.substring(`public/${e}`.length);
      o[c] = d;
      for (const a of r) {
        const l = `${s}/${a}`;
        try {
          const f = await t.stat(l);
          if (f.isDirectory()) {
            const u = await t.readdir(l), p = { childCount: u.length, name: `${a}`, typeId: "folder" };
            d.push(p), await i(l, u);
          } else {
            const u = { id: $(), lastModifiedAt: f.mtimeMs, name: a, size: f.size, typeId: "object" };
            d.push(u);
          }
        } catch (f) {
          throw new Error(`Unable to get information for '${a}' in 'buildPublicDirectoryIndex'. ${String(f)}`);
        }
      }
      d.sort((a, l) => {
        const f = a.typeId.localeCompare(l.typeId);
        return f === 0 ? a.name.localeCompare(l.name) : f;
      });
    }
    const n = await t.readdir(`public/${e}`);
    await i(`public/${e}`, n), await t.writeFile(`./public/${e}Index.json`, JSON.stringify(o), "utf8"), console.info("✅ Public directory index built.");
  } catch (o) {
    console.error("❌ Error building public directory index.", o);
  }
}
async function J() {
  try {
    console.info("🚀 Building connector configuration...");
    const e = JSON.parse(await t.readFile("package.json", "utf8")), o = JSON.parse(await t.readFile("config.json", "utf8")), i = await t.readFile("src/index.ts", "utf8");
    let n = !1, s = !1;
    const r = /^\s{4}(?:async\s+)?(private\s+)?(?:public\s+|protected\s+)?([A-Za-z_]\w*)\s*\(/gm, d = [...i.matchAll(r)].filter((a) => a[1] == null && a[2] !== "constructor").map((a) => {
      const l = a[2];
      return n = n || S.includes(l), s = s || v.includes(l), l;
    });
    d.length > 0 ? console.info(`ℹ️  Implements ${d.length} operations.`) : console.warn("⚠️  Implements no operations.");
    const c = s && n ? "bidirectional" : s ? "source" : n ? "destination" : "unknown";
    c && console.info(`ℹ️  Supports ${c} usage.`), e.name != null && (o.id = e.name), o.operations = d, o.usageId = c, e.version != null && (o.version = e.version), await t.writeFile("config.json", JSON.stringify(o, void 0, 4), "utf8"), console.info("✅ Connector configuration built.");
  } catch (e) {
    console.error("❌ Error building connector configuration.", e);
  }
}
async function F() {
  try {
    console.info("🚀 Building context configuration...");
    const e = JSON.parse(await t.readFile("package.json", "utf8")), o = JSON.parse(await t.readFile("config.json", "utf8")), i = await t.readFile("src/index.ts", "utf8"), n = /^\s{4}(?:async\s+)?(private\s+)?(?:public\s+|protected\s+)?([A-Za-z_]\w*)\s*\(/gm, s = [...i.matchAll(n)].filter((r) => r[1] == null && r[2] !== "constructor").map((r) => r[2]);
    e.name != null && (o.id = e.name), o.operations = s, e.version != null && (o.version = e.version), await t.writeFile("config.json", JSON.stringify(o, void 0, 4), "utf8"), console.info("✅ Context configuration built.");
  } catch (e) {
    console.error("❌ Error building context configuration.", e);
  }
}
async function R() {
  try {
    console.info("🚀 Building presenter configuration...");
    const e = JSON.parse(await t.readFile("package.json", "utf8")), o = JSON.parse(await t.readFile("config.json", "utf8")), i = await t.readFile("src/index.ts", "utf8"), n = /^\s{4}(?:async\s+)?(private\s+)?(?:public\s+|protected\s+)?([A-Za-z_]\w*)\s*\(/gm, s = [...i.matchAll(n)].filter((r) => !r[1] && r[2] !== "constructor").map((r) => r[2]);
    e.name != null && (o.id = e.name), o.operations = s, e.version != null && (o.version = e.version), await t.writeFile("config.json", JSON.stringify(o, void 0, 4), "utf8"), console.info("✅ Presenter configuration built.");
  } catch (e) {
    console.error("❌ Error building context configuration.", e);
  }
}
async function A(e = "./") {
  try {
    console.info("🚀 Bumping version...");
    const o = JSON.parse(await t.readFile(`${e}package.json`, "utf8"));
    if (o.version == null)
      o.version = "0.0.001", await t.writeFile(`${e}package.json`, JSON.stringify(o, void 0, 4), "utf8"), console.warn(`⚠️ Version initialised to ${o.version}.`);
    else {
      const i = o.version, n = o.version.split(".");
      o.version = `${n[0]}.${n[1]}.${Number(n[2]) + 1}`, await t.writeFile(`${e}package.json`, JSON.stringify(o, void 0, 4), "utf8"), console.info(`✅ Version bumped from ${i} to ${o.version}.`);
    }
  } catch (o) {
    console.error("❌ Error bumping package version.", o);
  }
}
function D(e) {
  console.error(`❌ ${e} script not implemented.`);
}
async function P() {
  const e = "<!-- DEPENDENCY_LICENSES_START -->", o = "<!-- DEPENDENCY_LICENSES_END -->";
  try {
    const i = (await t.readFile("./licenses.md", "utf8")).trim(), n = await t.readFile("./README.md", "utf8"), s = n.indexOf(e), r = n.indexOf(o);
    (s === -1 || r === -1) && (console.error("❌ Dependency license markers not found in readme file."), process.exit(1));
    const d = n.substring(0, s + e.length) + i + n.substring(r);
    await t.writeFile("README.md", d, "utf8"), console.log("✅ Readme file updated with license information");
  } catch (i) {
    console.error("❌ Error updating readme file.", i), process.exit(1);
  }
}
async function I() {
  const e = "<!-- OWASP_BADGE_START -->", o = "<!-- OWASP_BADGE_END -->";
  try {
    const i = JSON.parse(await t.readFile("./dependency-check-reports/dependency-check-report.json", "utf-8")), n = { critical: 0, high: 0, moderate: 0, low: 0, unknown: 0 };
    for (const g of i.dependencies)
      if (g.vulnerabilities != null)
        for (const m of g.vulnerabilities) {
          const w = m.severity?.toLowerCase() ?? "unknown";
          w in n ? n[w]++ : n.unknown++;
        }
    const s = {
      critical: { color: "D32F2F", label: "critical" },
      high: { color: "EF6C00", label: "high" },
      moderate: { color: "FBC02D", label: "moderate" },
      low: { color: "6D8C31", label: "low" },
      unknown: { color: "616161", label: "unknown" }
    }, r = Object.values(n).reduce((g, m) => g + m, 0);
    console.info(`✅ Total vulnerabilities found: ${r}`), console.info(
      `   Critical: ${n.critical}, High: ${n.high}, Moderate: ${n.moderate}, Low: ${n.low},  Unknown: ${n.unknown}`
    );
    const d = JSON.parse(await t.readFile("config.json", "utf8")), c = [];
    if (r === 0)
      c.push(`[![OWASP](https://img.shields.io/badge/OWASP-passed-4CAF50)](https://data-positioning.github.io/${d.id}/dependency-check-reports/dependency-check-report.html)`);
    else
      for (const [g, m] of Object.entries(n)) {
        if (m === 0) continue;
        const w = s[g], h = `https://img.shields.io/badge/OWASP-${m}%20${w.label}-${w.color}`;
        c.push(`[![OWASP](${h})](https://data-positioning.github.io/${d.id}/dependency-check-reports/dependency-check-report.html)`);
      }
    const a = await t.readFile("./README.md", "utf8"), l = a.indexOf(e), f = a.indexOf(o);
    (l === -1 || f === -1) && (console.error("❌ OWASP badge markers not found in README.md."), process.exit(1));
    const u = c.join(" "), p = a.substring(0, l + e.length) + u + a.substring(f);
    await t.writeFile("README.md", p, "utf8"), console.info("✅ OWASP dependency check badges inserted into README.md");
  } catch (i) {
    console.error("❌ Error updating README with OWASP badges:", i), process.exit(1);
  }
}
async function M() {
  try {
    console.info("🚀 Sending deployment notice...");
    const e = JSON.parse(await t.readFile("config.json", "utf8")), o = {
      body: JSON.stringify(e),
      headers: { "Content-Type": "application/json" },
      method: "PUT"
    }, i = await fetch(`https://api.datapos.app/states/${e.id}`, o);
    if (!i.ok) throw new Error(await i.text());
    console.info("✅ Deployment notice sent.");
  } catch (e) {
    console.error("❌ Error sending deployment notice.", e);
  }
}
async function T() {
  try {
    console.info("🚀 Synchronising with GitHub....");
    const e = JSON.parse(await t.readFile("package.json", "utf8"));
    await y("git add ."), await y(`git commit -m "v${e.version}"`), await y("git push origin main:main"), console.info(`✅ Synchronised version ${e.version} with GitHub.`);
  } catch (e) {
    console.error("❌ Error synchronising with GitHub.", e);
  }
}
async function _(e, o) {
  try {
    console.info("🚀 Uploading directory to R2....");
    async function i(s, r, d) {
      for (const c of d) {
        const a = `${s}/${c}`, l = `${r}/${c}`;
        if ((await t.stat(a)).isDirectory()) {
          const u = await t.readdir(a);
          await i(a, l, u);
        } else {
          console.info(`⚙️ Uploading '${s}/${c}'...`);
          const u = `wrangler r2 object put "datapos-sample-data-eu/${r}/${c}" --file="${s}/${c}" --jurisdiction=eu --remote`, p = await y(u);
          if (p.stderr) throw new Error(p.stderr);
        }
      }
    }
    const n = await t.readdir(`${e}/${o}/`);
    await i(`${e}/${o}`, o, n), console.info("✅ Directory uploaded to R2.");
  } catch (i) {
    console.error("❌ Error uploading directory to R2.", i);
  }
}
async function W() {
  try {
    console.info("🚀 Uploading module configuration....");
    const e = JSON.parse(await t.readFile("config.json", "utf8")), o = e.id, i = {
      body: JSON.stringify(e),
      headers: { "Content-Type": "application/json" },
      method: "PUT"
    }, n = await fetch(`https://api.datapos.app/states/${o}`, i);
    if (!n.ok) throw new Error(await n.text());
    console.info("✅ Module configuration uploaded.");
  } catch (e) {
    console.error("❌ Error uploading module configuration.", e);
  }
}
async function U(e) {
  try {
    console.info("🚀 Uploading module to R2...");
    const i = `v${JSON.parse(await t.readFile("package.json", "utf8")).version}`;
    async function n(s, r = "") {
      const d = await t.readdir(s, { withFileTypes: !0 });
      for (const c of d) {
        const a = `${s}/${c.name}`, l = r ? `${r}/${c.name}` : c.name;
        if (!c.isDirectory()) {
          const f = `${e}_${i}/${l}`.replace(/\\/g, "/"), u = c.name.endsWith(".js") ? "application/javascript" : c.name.endsWith(".css") ? "text/css" : "application/octet-stream";
          console.info(`⚙️ Uploading '${l}' → '${f}'...`);
          const { stderr: p } = await y(`wrangler r2 object put "${f}" --file="${a}" --content-type ${u} --jurisdiction=eu --remote`);
          if (p) throw new Error(p);
        }
      }
    }
    await n("dist"), console.info("✅ Module uploaded to R2.");
  } catch (o) {
    console.error("❌ Error uploading module to R2.", o);
  }
}
export {
  j as buildConfig,
  J as buildConnectorConfig,
  F as buildContextConfig,
  R as buildPresenterConfig,
  k as buildPublicDirectoryIndex,
  A as bumpVersion,
  D as echoScriptNotImplemented,
  P as insertLicensesIntoReadme,
  I as insertOWASPDependencyCheckBadgeIntoReadme,
  M as sendDeploymentNotice,
  T as syncWithGitHub,
  _ as uploadDirectoryToR2,
  W as uploadModuleConfigToDO,
  U as uploadModuleToR2
};
