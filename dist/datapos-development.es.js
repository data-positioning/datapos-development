import { exec as h } from "node:child_process";
import { promises as t } from "node:fs";
import { nanoid as b } from "nanoid";
import { promisify as $ } from "node:util";
const E = ["createObject", "dropObject", "removeRecords", "upsertRecords"], v = ["findObject", "getRecord", "listNodes", "previewObject", "retrieveRecords"], w = $(h);
async function j() {
  try {
    console.info("🚀 Building configuration...");
    const o = JSON.parse(await t.readFile("package.json", "utf8")), e = JSON.parse(await t.readFile("config.json", "utf8"));
    o.name != null && (e.id = o.name.replace("@datapos/", "").replace("@data-positioning/", "")), o.version != null && (e.version = o.version), await t.writeFile("config.json", JSON.stringify(e, void 0, 4), "utf8"), console.info("✅ Configuration built.");
  } catch (o) {
    console.error("❌ Error building configuration.", o);
  }
}
async function C(o) {
  try {
    console.info(`🚀 Building public directory index for identifier '${o}'...`);
    const e = {};
    async function i(s, r) {
      console.info(`⚙️ Processing directory '${s}'...`);
      const d = [], a = s.substring(`public/${o}`.length);
      e[a] = d;
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
    const n = await t.readdir(`public/${o}`);
    await i(`public/${o}`, n), await t.writeFile(`./public/${o}Index.json`, JSON.stringify(e), "utf8"), console.info("✅ Public directory index built.");
  } catch (e) {
    console.error("❌ Error building public directory index.", e);
  }
}
async function R() {
  try {
    console.info("🚀 Building connector configuration...");
    const o = JSON.parse(await t.readFile("package.json", "utf8")), e = JSON.parse(await t.readFile("config.json", "utf8")), i = await t.readFile("src/index.ts", "utf8");
    let n = !1, s = !1;
    const r = /^\s{4}(?:async\s+)?(private\s+)?(?:public\s+|protected\s+)?([A-Za-z_]\w*)\s*\(/gm, d = [...i.matchAll(r)].filter((c) => c[1] == null && c[2] !== "constructor").map((c) => {
      const l = c[2];
      return n = n || E.includes(l), s = s || v.includes(l), l;
    });
    d.length > 0 ? console.info(`ℹ️  Implements ${d.length} operations.`) : console.warn("⚠️  Implements no operations.");
    const a = s && n ? "bidirectional" : s ? "source" : n ? "destination" : "unknown";
    a && console.info(`ℹ️  Supports ${a} usage.`), o.name != null && (e.id = o.name), e.operations = d, e.usageId = a, o.version != null && (e.version = o.version), await t.writeFile("config.json", JSON.stringify(e, void 0, 4), "utf8"), console.info("✅ Connector configuration built.");
  } catch (o) {
    console.error("❌ Error building connector configuration.", o);
  }
}
async function k() {
  try {
    console.info("🚀 Building context configuration...");
    const o = JSON.parse(await t.readFile("package.json", "utf8")), e = JSON.parse(await t.readFile("config.json", "utf8")), i = await t.readFile("src/index.ts", "utf8"), n = /^\s{4}(?:async\s+)?(private\s+)?(?:public\s+|protected\s+)?([A-Za-z_]\w*)\s*\(/gm, s = [...i.matchAll(n)].filter((r) => r[1] == null && r[2] !== "constructor").map((r) => r[2]);
    o.name != null && (e.id = o.name), e.operations = s, o.version != null && (e.version = o.version), await t.writeFile("config.json", JSON.stringify(e, void 0, 4), "utf8"), console.info("✅ Context configuration built.");
  } catch (o) {
    console.error("❌ Error building context configuration.", o);
  }
}
async function J() {
  try {
    console.info("🚀 Building presenter configuration...");
    const o = JSON.parse(await t.readFile("package.json", "utf8")), e = JSON.parse(await t.readFile("config.json", "utf8")), i = await t.readFile("src/index.ts", "utf8"), n = /^\s{4}(?:async\s+)?(private\s+)?(?:public\s+|protected\s+)?([A-Za-z_]\w*)\s*\(/gm, s = [...i.matchAll(n)].filter((r) => !r[1] && r[2] !== "constructor").map((r) => r[2]);
    o.name != null && (e.id = o.name), e.operations = s, o.version != null && (e.version = o.version), await t.writeFile("config.json", JSON.stringify(e, void 0, 4), "utf8"), console.info("✅ Presenter configuration built.");
  } catch (o) {
    console.error("❌ Error building context configuration.", o);
  }
}
async function A(o = "./") {
  try {
    console.info("🚀 Bumping version...");
    const e = JSON.parse(await t.readFile(`${o}package.json`, "utf8"));
    if (e.version == null)
      e.version = "0.0.001", await t.writeFile(`${o}package.json`, JSON.stringify(e, void 0, 4), "utf8"), console.warn(`⚠️ Version initialised to ${e.version}.`);
    else {
      const i = e.version, n = e.version.split(".");
      e.version = `${n[0]}.${n[1]}.${Number(n[2]) + 1}`, await t.writeFile(`${o}package.json`, JSON.stringify(e, void 0, 4), "utf8"), console.info(`✅ Version bumped from ${i} to ${e.version}.`);
    }
  } catch (e) {
    console.error("❌ Error bumping package version.", e);
  }
}
function F(o) {
  console.error(`❌ ${o} script not implemented.`);
}
async function D() {
  const o = "<!-- DEPENDENCY_LICENSES_START -->", e = "<!-- DEPENDENCY_LICENSES_END -->";
  try {
    const i = (await t.readFile("./licenses.md", "utf8")).trim(), n = await t.readFile("./README.md", "utf8"), s = n.indexOf(o), r = n.indexOf(e);
    (s === -1 || r === -1) && (console.error("Error: Markers not found in README.md"), process.exit(1));
    const d = n.substring(0, s + o.length) + `
` + i + `
` + n.substring(r);
    await t.writeFile("README.md", d, "utf8"), console.log("✓ README.md updated with license information");
  } catch (i) {
    console.error("Error updating README:", i), process.exit(1);
  }
}
async function I() {
  const o = "<!-- OWASP_BADGE_START -->", e = "<!-- OWASP_BADGE_END -->";
  try {
    const i = JSON.parse(await t.readFile("./dependency-check-reports/dependency-check-report.json", "utf-8")), n = { critical: 0, high: 0, moderate: 0, low: 0, info: 0, unknown: 0 };
    for (const u of i.dependencies)
      if (u.vulnerabilities != null)
        for (const m of u.vulnerabilities) {
          const g = m.severity?.toLowerCase() ?? "unknown";
          g in n ? n[g]++ : n.unknown++;
        }
    const s = {
      critical: { color: "red", label: "Critical" },
      high: { color: "orange", label: "High" },
      moderate: { color: "yellow", label: "Moderate" },
      low: { color: "green", label: "Low" },
      info: { color: "brightgreen", label: "Info" },
      unknown: { color: "lightgrey", label: "Unknown" }
    }, r = [];
    for (const [u, m] of Object.entries(n)) {
      const g = s[u], y = `https://img.shields.io/badge/OWASP%20${g.label}-${m}-${g.color}`;
      r.push(`[![OWASP ${g.label}](${y})](./dependency-check-reports/dependency-check-report.html)`);
    }
    const d = Object.values(n).reduce((u, m) => u + m, 0);
    console.info(`✅ Total vulnerabilities found: ${d}`), console.info(
      `   Critical: ${n.critical}, High: ${n.high}, Moderate: ${n.moderate}, Low: ${n.low}, Info: ${n.info}, Unknown: ${n.unknown}`
    );
    const a = await t.readFile("./README.md", "utf8"), c = a.indexOf(o), l = a.indexOf(e);
    (c === -1 || l === -1) && (console.error("❌ Markers not found in README.md."), process.exit(1));
    const f = r.join(" "), p = a.substring(0, c + o.length) + `
` + f + `
` + a.substring(l);
    await t.writeFile("README2.md", p, "utf8"), console.info("✅ OWASP dependency check badges inserted into README.md");
  } catch (i) {
    console.error("❌ Error updating README with OWASP badges:", i), process.exit(1);
  }
}
async function M() {
  try {
    console.info("🚀 Sending deployment notice...");
    const o = JSON.parse(await t.readFile("config.json", "utf8")), e = {
      body: JSON.stringify(o),
      headers: { "Content-Type": "application/json" },
      method: "PUT"
    }, i = await fetch(`https://api.datapos.app/states/${o.id}`, e);
    if (!i.ok) throw new Error(await i.text());
    console.info("✅ Deployment notice sent.");
  } catch (o) {
    console.error("❌ Error sending deployment notice.", o);
  }
}
async function P() {
  try {
    console.info("🚀 Synchronising with GitHub....");
    const o = JSON.parse(await t.readFile("package.json", "utf8"));
    await w("git add ."), await w(`git commit -m "v${o.version}"`), await w("git push origin main:main"), console.info(`✅ Synchronised version ${o.version} with GitHub.`);
  } catch (o) {
    console.error("❌ Error synchronising with GitHub.", o);
  }
}
async function T(o, e) {
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
    const n = await t.readdir(`${o}/${e}/`);
    await i(`${o}/${e}`, e, n), console.info("✅ Directory uploaded to R2.");
  } catch (i) {
    console.error("❌ Error uploading directory to R2.", i);
  }
}
async function _() {
  try {
    console.info("🚀 Uploading module configuration....");
    const o = JSON.parse(await t.readFile("config.json", "utf8")), e = o.id, i = {
      body: JSON.stringify(o),
      headers: { "Content-Type": "application/json" },
      method: "PUT"
    }, n = await fetch(`https://api.datapos.app/states/${e}`, i);
    if (!n.ok) throw new Error(await n.text());
    console.info("✅ Module configuration uploaded.");
  } catch (o) {
    console.error("❌ Error uploading module configuration.", o);
  }
}
async function U(o) {
  try {
    console.info("🚀 Uploading module to R2...");
    const i = `v${JSON.parse(await t.readFile("package.json", "utf8")).version}`;
    async function n(s, r = "") {
      const d = await t.readdir(s, { withFileTypes: !0 });
      for (const a of d) {
        const c = `${s}/${a.name}`, l = r ? `${r}/${a.name}` : a.name;
        if (!a.isDirectory()) {
          const f = `${o}_${i}/${l}`.replace(/\\/g, "/"), p = a.name.endsWith(".js") ? "application/javascript" : a.name.endsWith(".css") ? "text/css" : "application/octet-stream";
          console.info(`⚙️ Uploading '${l}' → '${f}'...`);
          const { stderr: u } = await w(`wrangler r2 object put "${f}" --file="${c}" --content-type ${p} --jurisdiction=eu --remote`);
          if (u) throw new Error(u);
        }
      }
    }
    await n("dist"), console.info("✅ Module uploaded to R2.");
  } catch (e) {
    console.error("❌ Error uploading module to R2.", e);
  }
}
export {
  j as buildConfig,
  R as buildConnectorConfig,
  k as buildContextConfig,
  J as buildPresenterConfig,
  C as buildPublicDirectoryIndex,
  A as bumpVersion,
  F as echoScriptNotImplemented,
  D as insertLicensesIntoReadme,
  I as insertOWASPDependencyCheckBadgeIntoReadme,
  M as sendDeploymentNotice,
  P as syncWithGitHub,
  T as uploadDirectoryToR2,
  _ as uploadModuleConfigToDO,
  U as uploadModuleToR2
};
