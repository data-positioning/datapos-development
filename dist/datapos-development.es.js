import { exec as h } from "node:child_process";
import { promises as t } from "node:fs";
import { nanoid as b } from "nanoid";
import { promisify as $ } from "node:util";
const v = ["createObject", "dropObject", "removeRecords", "upsertRecords"], O = ["findObject", "getRecord", "listNodes", "previewObject", "retrieveRecords"], w = $(h);
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
      const d = [], a = s.substring(`public/${e}`.length);
      o[a] = d;
      for (const c of r) {
        const l = `${s}/${c}`;
        try {
          const f = await t.stat(l);
          if (f.isDirectory()) {
            const p = await t.readdir(l), u = { childCount: p.length, name: `${c}`, typeId: "folder" };
            d.push(u), await i(l, p);
          } else {
            const p = { id: b(), lastModifiedAt: f.mtimeMs, name: c, size: f.size, typeId: "object" };
            d.push(p);
          }
        } catch (f) {
          throw new Error(`Unable to get information for '${c}' in 'buildPublicDirectoryIndex'. ${String(f)}`);
        }
      }
      d.sort((c, l) => {
        const f = c.typeId.localeCompare(l.typeId);
        return f === 0 ? c.name.localeCompare(l.name) : f;
      });
    }
    const n = await t.readdir(`public/${e}`);
    await i(`public/${e}`, n), await t.writeFile(`./public/${e}Index.json`, JSON.stringify(o), "utf8"), console.info("✅ Public directory index built.");
  } catch (o) {
    console.error("❌ Error building public directory index.", o);
  }
}
async function C() {
  try {
    console.info("🚀 Building connector configuration...");
    const e = JSON.parse(await t.readFile("package.json", "utf8")), o = JSON.parse(await t.readFile("config.json", "utf8")), i = await t.readFile("src/index.ts", "utf8");
    let n = !1, s = !1;
    const r = /^\s{4}(?:async\s+)?(private\s+)?(?:public\s+|protected\s+)?([A-Za-z_]\w*)\s*\(/gm, d = [...i.matchAll(r)].filter((c) => c[1] == null && c[2] !== "constructor").map((c) => {
      const l = c[2];
      return n = n || v.includes(l), s = s || O.includes(l), l;
    });
    d.length > 0 ? console.info(`ℹ️  Implements ${d.length} operations.`) : console.warn("⚠️  Implements no operations.");
    const a = s && n ? "bidirectional" : s ? "source" : n ? "destination" : "unknown";
    a && console.info(`ℹ️  Supports ${a} usage.`), e.name != null && (o.id = e.name), o.operations = d, o.usageId = a, e.version != null && (o.version = e.version), await t.writeFile("config.json", JSON.stringify(o, void 0, 4), "utf8"), console.info("✅ Connector configuration built.");
  } catch (e) {
    console.error("❌ Error building connector configuration.", e);
  }
}
async function J() {
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
function F(e) {
  console.error(`❌ ${e} script not implemented.`);
}
async function D() {
  const e = "<!-- DEPENDENCY_LICENSES_START -->", o = "<!-- DEPENDENCY_LICENSES_END -->";
  try {
    const i = (await t.readFile("./licenses.md", "utf8")).trim(), n = await t.readFile("./README.md", "utf8"), s = n.indexOf(e), r = n.indexOf(o);
    (s === -1 || r === -1) && (console.error("❌ Dependency license markers not found in readme file."), process.exit(1));
    const d = n.substring(0, s + e.length) + `
` + i + `
` + n.substring(r);
    await t.writeFile("README.md", d, "utf8"), console.log("✅ Readme file updated with license information");
  } catch (i) {
    console.error("❌ Error updating readme file.", i), process.exit(1);
  }
}
async function I() {
  const e = "<!-- OWASP_BADGE_START -->", o = "<!-- OWASP_BADGE_END -->";
  try {
    const i = JSON.parse(await t.readFile("./dependency-check-reports/dependency-check-report.json", "utf-8")), n = { critical: 0, high: 0, moderate: 0, low: 0, unknown: 0 };
    for (const u of i.dependencies)
      if (u.vulnerabilities != null)
        for (const g of u.vulnerabilities) {
          const m = g.severity?.toLowerCase() ?? "unknown";
          m in n ? n[m]++ : n.unknown++;
        }
    const s = {
      critical: { color: "red", label: "critical" },
      high: { color: "orange", label: "high" },
      moderate: { color: "yellow", label: "moderate" },
      low: { color: "green", label: "low" },
      unknown: { color: "lightgrey", label: "unknown" }
    }, r = [];
    for (const [u, g] of Object.entries(n)) {
      if (g === 0) continue;
      const m = s[u], y = `https://img.shields.io/badge/OWASP%20${m.label}%20vulnerabilities-${g}-${m.color}`;
      r.push(`[![OWASP ${m.label}](${y})](./dependency-check-reports/dependency-check-report.html)`);
    }
    const d = Object.values(n).reduce((u, g) => u + g, 0);
    console.info(`✅ Total vulnerabilities found: ${d}`), console.info(
      `   Critical: ${n.critical}, High: ${n.high}, Moderate: ${n.moderate}, Low: ${n.low},  Unknown: ${n.unknown}`
    );
    const a = await t.readFile("./README.md", "utf8"), c = a.indexOf(e), l = a.indexOf(o);
    (c === -1 || l === -1) && (console.error("❌ OWASP badge markers not found in README.md."), process.exit(1));
    const f = r.join(" "), p = a.substring(0, c + e.length) + f + a.substring(l);
    await t.writeFile("README.md", p, "utf8"), console.info("✅ OWASP dependency check badges inserted into README.md");
  } catch (i) {
    console.error("❌ Error updating README with OWASP badges:", i), process.exit(1);
  }
}
async function P() {
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
async function M() {
  try {
    console.info("🚀 Synchronising with GitHub....");
    const e = JSON.parse(await t.readFile("package.json", "utf8"));
    await w("git add ."), await w(`git commit -m "v${e.version}"`), await w("git push origin main:main"), console.info(`✅ Synchronised version ${e.version} with GitHub.`);
  } catch (e) {
    console.error("❌ Error synchronising with GitHub.", e);
  }
}
async function T(e, o) {
  try {
    console.info("🚀 Uploading directory to R2....");
    async function i(s, r, d) {
      for (const a of d) {
        const c = `${s}/${a}`, l = `${r}/${a}`;
        if ((await t.stat(c)).isDirectory()) {
          const p = await t.readdir(c);
          await i(c, l, p);
        } else {
          console.info(`⚙️ Uploading '${s}/${a}'...`);
          const p = `wrangler r2 object put "datapos-sample-data-eu/${r}/${a}" --file="${s}/${a}" --jurisdiction=eu --remote`, u = await w(p);
          if (u.stderr) throw new Error(u.stderr);
        }
      }
    }
    const n = await t.readdir(`${e}/${o}/`);
    await i(`${e}/${o}`, o, n), console.info("✅ Directory uploaded to R2.");
  } catch (i) {
    console.error("❌ Error uploading directory to R2.", i);
  }
}
async function _() {
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
async function W(e) {
  try {
    console.info("🚀 Uploading module to R2...");
    const i = `v${JSON.parse(await t.readFile("package.json", "utf8")).version}`;
    async function n(s, r = "") {
      const d = await t.readdir(s, { withFileTypes: !0 });
      for (const a of d) {
        const c = `${s}/${a.name}`, l = r ? `${r}/${a.name}` : a.name;
        if (!a.isDirectory()) {
          const f = `${e}_${i}/${l}`.replace(/\\/g, "/"), p = a.name.endsWith(".js") ? "application/javascript" : a.name.endsWith(".css") ? "text/css" : "application/octet-stream";
          console.info(`⚙️ Uploading '${l}' → '${f}'...`);
          const { stderr: u } = await w(`wrangler r2 object put "${f}" --file="${c}" --content-type ${p} --jurisdiction=eu --remote`);
          if (u) throw new Error(u);
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
  C as buildConnectorConfig,
  J as buildContextConfig,
  R as buildPresenterConfig,
  k as buildPublicDirectoryIndex,
  A as bumpVersion,
  F as echoScriptNotImplemented,
  D as insertLicensesIntoReadme,
  I as insertOWASPDependencyCheckBadgeIntoReadme,
  P as sendDeploymentNotice,
  M as syncWithGitHub,
  T as uploadDirectoryToR2,
  _ as uploadModuleConfigToDO,
  W as uploadModuleToR2
};
