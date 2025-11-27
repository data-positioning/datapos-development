import { exec as b } from "node:child_process";
import { promises as n } from "node:fs";
import { nanoid as $ } from "nanoid";
import { promisify as O } from "node:util";
const S = ["createObject", "dropObject", "removeRecords", "upsertRecords"], v = ["findObject", "getRecord", "listNodes", "previewObject", "retrieveRecords"], y = O(b);
async function j() {
  try {
    console.info("🚀 Building configuration...");
    const e = JSON.parse(await n.readFile("package.json", "utf8")), o = JSON.parse(await n.readFile("config.json", "utf8"));
    e.name != null && (o.id = e.name.replace("@datapos/", "").replace("@data-positioning/", "")), e.version != null && (o.version = e.version), await n.writeFile("config.json", JSON.stringify(o, void 0, 4), "utf8"), console.info("✅ Configuration built.");
  } catch (e) {
    console.error("❌ Error building configuration.", e);
  }
}
async function J(e) {
  try {
    console.info(`🚀 Building public directory index for identifier '${e}'...`);
    const o = {};
    async function i(s, r) {
      console.info(`⚙️ Processing directory '${s}'...`);
      const l = [], c = s.substring(`public/${e}`.length);
      o[c] = l;
      for (const a of r) {
        const d = `${s}/${a}`;
        try {
          const f = await n.stat(d);
          if (f.isDirectory()) {
            const u = await n.readdir(d), p = { childCount: u.length, name: `${a}`, typeId: "folder" };
            l.push(p), await i(d, u);
          } else {
            const u = { id: $(), lastModifiedAt: f.mtimeMs, name: a, size: f.size, typeId: "object" };
            l.push(u);
          }
        } catch (f) {
          throw new Error(`Unable to get information for '${a}' in 'buildPublicDirectoryIndex'. ${String(f)}`);
        }
      }
      l.sort((a, d) => {
        const f = a.typeId.localeCompare(d.typeId);
        return f === 0 ? a.name.localeCompare(d.name) : f;
      });
    }
    const t = await n.readdir(`public/${e}`);
    await i(`public/${e}`, t), await n.writeFile(`./public/${e}Index.json`, JSON.stringify(o), "utf8"), console.info("✅ Public directory index built.");
  } catch (o) {
    console.error("❌ Error building public directory index.", o);
  }
}
async function k() {
  try {
    console.info("🚀 Building connector configuration...");
    const e = JSON.parse(await n.readFile("package.json", "utf8")), o = JSON.parse(await n.readFile("config.json", "utf8")), i = await n.readFile("src/index.ts", "utf8");
    let t = !1, s = !1;
    const r = /^\s{4}(?:async\s+)?(private\s+)?(?:public\s+|protected\s+)?([A-Za-z_]\w*)\s*\(/gm, l = [...i.matchAll(r)].filter((a) => a[1] == null && a[2] !== "constructor").map((a) => {
      const d = a[2];
      return t = t || S.includes(d), s = s || v.includes(d), d;
    });
    l.length > 0 ? console.info(`ℹ️  Implements ${l.length} operations.`) : console.warn("⚠️  Implements no operations.");
    const c = s && t ? "bidirectional" : s ? "source" : t ? "destination" : "unknown";
    c && console.info(`ℹ️  Supports ${c} usage.`), e.name != null && (o.id = e.name), o.operations = l, o.usageId = c, e.version != null && (o.version = e.version), await n.writeFile("config.json", JSON.stringify(o, void 0, 4), "utf8"), console.info("✅ Connector configuration built.");
  } catch (e) {
    console.error("❌ Error building connector configuration.", e);
  }
}
async function F() {
  try {
    console.info("🚀 Building context configuration...");
    const e = JSON.parse(await n.readFile("package.json", "utf8")), o = JSON.parse(await n.readFile("config.json", "utf8")), i = await n.readFile("src/index.ts", "utf8"), t = /^\s{4}(?:async\s+)?(private\s+)?(?:public\s+|protected\s+)?([A-Za-z_]\w*)\s*\(/gm, s = [...i.matchAll(t)].filter((r) => r[1] == null && r[2] !== "constructor").map((r) => r[2]);
    e.name != null && (o.id = e.name), o.operations = s, e.version != null && (o.version = e.version), await n.writeFile("config.json", JSON.stringify(o, void 0, 4), "utf8"), console.info("✅ Context configuration built.");
  } catch (e) {
    console.error("❌ Error building context configuration.", e);
  }
}
async function R() {
  try {
    console.info("🚀 Building presenter configuration...");
    const e = JSON.parse(await n.readFile("package.json", "utf8")), o = JSON.parse(await n.readFile("config.json", "utf8")), i = await n.readFile("src/index.ts", "utf8"), t = /^\s{4}(?:async\s+)?(private\s+)?(?:public\s+|protected\s+)?([A-Za-z_]\w*)\s*\(/gm, s = [...i.matchAll(t)].filter((r) => !r[1] && r[2] !== "constructor").map((r) => r[2]);
    e.name != null && (o.id = e.name), o.operations = s, e.version != null && (o.version = e.version), await n.writeFile("config.json", JSON.stringify(o, void 0, 4), "utf8"), console.info("✅ Presenter configuration built.");
  } catch (e) {
    console.error("❌ Error building context configuration.", e);
  }
}
async function A(e = "./") {
  try {
    console.info("🚀 Bumping version...");
    const o = JSON.parse(await n.readFile(`${e}package.json`, "utf8"));
    if (o.version == null)
      o.version = "0.0.001", await n.writeFile(`${e}package.json`, JSON.stringify(o, void 0, 4), "utf8"), console.warn(`⚠️ Version initialised to ${o.version}.`);
    else {
      const i = o.version, t = o.version.split(".");
      o.version = `${t[0]}.${t[1]}.${Number(t[2]) + 1}`, await n.writeFile(`${e}package.json`, JSON.stringify(o, void 0, 4), "utf8"), console.info(`✅ Version bumped from ${i} to ${o.version}.`);
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
    const i = (await n.readFile("./licenses.md", "utf8")).trim(), t = await n.readFile("./README.md", "utf8"), s = t.indexOf(e), r = t.indexOf(o);
    (s === -1 || r === -1) && (console.error("❌ Dependency license markers not found in readme file."), process.exit(1));
    const l = t.substring(0, s + e.length) + `
` + i + `
` + t.substring(r);
    await n.writeFile("README.md", l, "utf8"), console.log("✅ Readme file updated with license information");
  } catch (i) {
    console.error("❌ Error updating readme file.", i), process.exit(1);
  }
}
async function I() {
  const e = "<!-- OWASP_BADGE_START -->", o = "<!-- OWASP_BADGE_END -->";
  try {
    const i = JSON.parse(await n.readFile("./dependency-check-reports/dependency-check-report.json", "utf-8")), t = { critical: 0, high: 0, moderate: 0, low: 0, unknown: 0 };
    for (const g of i.dependencies)
      if (g.vulnerabilities != null)
        for (const m of g.vulnerabilities) {
          const w = m.severity?.toLowerCase() ?? "unknown";
          w in t ? t[w]++ : t.unknown++;
        }
    const s = {
      critical: { color: "D32F2F", label: "critical" },
      high: { color: "EF6C00", label: "high" },
      moderate: { color: "FBC02D", label: "moderate" },
      low: { color: "6D8C31", label: "low" },
      unknown: { color: "616161", label: "unknown" }
    }, r = JSON.parse(await n.readFile("config.json", "utf8")), l = [];
    if (Object.values(t).reduce((g, m) => g + m, 0) === 0)
      console.info("✅ No vulnerabilities found."), l.push(`[![OWASP](https://img.shields.io/badge/OWASP-passed-4CAF50)](https://data-positioning.github.io/${r.id}/dependency-check-reports/dependency-check-report.html)`);
    else
      for (const [g, m] of Object.entries(t)) {
        const w = s[g];
        if (console.warn(`⚠️  ${m} ${w.label} vulnerability(ies) found.`), m === 0) continue;
        const h = `https://img.shields.io/badge/OWASP-${m}%20${w.label}-${w.color}`;
        l.push(`[![OWASP](${h})](https://data-positioning.github.io/${r.id}/dependency-check-reports/dependency-check-report.html)`);
      }
    const a = await n.readFile("./README.md", "utf8"), d = a.indexOf(e), f = a.indexOf(o);
    (d === -1 || f === -1) && (console.error("❌ OWASP badge markers not found in README.md."), process.exit(1));
    const u = l.join(" "), p = a.substring(0, d + e.length) + u + a.substring(f);
    await n.writeFile("README.md", p, "utf8"), console.info("✅ OWASP dependency check badge(s) inserted into README.md");
  } catch (i) {
    console.error("❌ Error updating README with OWASP badges:", i), process.exit(1);
  }
}
async function M() {
  try {
    console.info("🚀 Sending deployment notice...");
    const e = JSON.parse(await n.readFile("config.json", "utf8")), o = {
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
    const e = JSON.parse(await n.readFile("package.json", "utf8"));
    await y("git add ."), await y(`git commit -m "v${e.version}"`), await y("git push origin main:main"), console.info(`✅ Synchronised version ${e.version} with GitHub.`);
  } catch (e) {
    console.error("❌ Error synchronising with GitHub.", e);
  }
}
async function _(e, o) {
  try {
    console.info("🚀 Uploading directory to R2....");
    async function i(s, r, l) {
      for (const c of l) {
        const a = `${s}/${c}`, d = `${r}/${c}`;
        if ((await n.stat(a)).isDirectory()) {
          const u = await n.readdir(a);
          await i(a, d, u);
        } else {
          console.info(`⚙️ Uploading '${s}/${c}'...`);
          const u = `wrangler r2 object put "datapos-sample-data-eu/${r}/${c}" --file="${s}/${c}" --jurisdiction=eu --remote`, p = await y(u);
          if (p.stderr) throw new Error(p.stderr);
        }
      }
    }
    const t = await n.readdir(`${e}/${o}/`);
    await i(`${e}/${o}`, o, t), console.info("✅ Directory uploaded to R2.");
  } catch (i) {
    console.error("❌ Error uploading directory to R2.", i);
  }
}
async function W() {
  try {
    console.info("🚀 Uploading module configuration....");
    const e = JSON.parse(await n.readFile("config.json", "utf8")), o = e.id, i = {
      body: JSON.stringify(e),
      headers: { "Content-Type": "application/json" },
      method: "PUT"
    }, t = await fetch(`https://api.datapos.app/states/${o}`, i);
    if (!t.ok) throw new Error(await t.text());
    console.info("✅ Module configuration uploaded.");
  } catch (e) {
    console.error("❌ Error uploading module configuration.", e);
  }
}
async function B(e) {
  try {
    console.info("🚀 Uploading module to R2...");
    const i = `v${JSON.parse(await n.readFile("package.json", "utf8")).version}`;
    async function t(s, r = "") {
      const l = await n.readdir(s, { withFileTypes: !0 });
      for (const c of l) {
        const a = `${s}/${c.name}`, d = r ? `${r}/${c.name}` : c.name;
        if (!c.isDirectory()) {
          const f = `${e}_${i}/${d}`.replace(/\\/g, "/"), u = c.name.endsWith(".js") ? "application/javascript" : c.name.endsWith(".css") ? "text/css" : "application/octet-stream";
          console.info(`⚙️ Uploading '${d}' → '${f}'...`);
          const { stderr: p } = await y(`wrangler r2 object put "${f}" --file="${a}" --content-type ${u} --jurisdiction=eu --remote`);
          if (p) throw new Error(p);
        }
      }
    }
    await t("dist"), console.info("✅ Module uploaded to R2.");
  } catch (o) {
    console.error("❌ Error uploading module to R2.", o);
  }
}
export {
  j as buildConfig,
  k as buildConnectorConfig,
  F as buildContextConfig,
  R as buildPresenterConfig,
  J as buildPublicDirectoryIndex,
  A as bumpVersion,
  D as echoScriptNotImplemented,
  P as insertLicensesIntoReadme,
  I as insertOWASPDependencyCheckBadgeIntoReadme,
  M as sendDeploymentNotice,
  T as syncWithGitHub,
  _ as uploadDirectoryToR2,
  W as uploadModuleConfigToDO,
  B as uploadModuleToR2
};
