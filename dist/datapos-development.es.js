import { exec as m } from "node:child_process";
import { promises as n } from "node:fs";
import { nanoid as y } from "nanoid";
import { promisify as w } from "node:util";
const h = ["createObject", "dropObject", "removeRecords", "upsertRecords"], b = ["findObject", "getRecord", "listNodes", "previewObject", "retrieveRecords"], g = w(m);
async function S() {
  try {
    console.info("🚀 Building configuration...");
    const o = JSON.parse(await n.readFile("package.json", "utf8")), e = JSON.parse(await n.readFile("config.json", "utf8"));
    o.name != null && (e.id = o.name.replace("@datapos/", "").replace("@data-positioning/", "")), o.version != null && (e.version = o.version), await n.writeFile("config.json", JSON.stringify(e, void 0, 4), "utf8"), console.info("✅ Configuration built.");
  } catch (o) {
    console.error("❌ Error building configuration.", o);
  }
}
async function O(o) {
  try {
    console.info(`🚀 Building public directory index for identifier '${o}'...`);
    const e = {};
    async function i(r, s) {
      console.info(`⚙️ Processing directory '${r}'...`);
      const d = [], a = r.substring(`public/${o}`.length);
      e[a] = d;
      for (const c of s) {
        const l = `${r}/${c}`;
        try {
          const f = await n.stat(l);
          if (f.isDirectory()) {
            const u = await n.readdir(l), p = { childCount: u.length, name: `${c}`, typeId: "folder" };
            d.push(p), await i(l, u);
          } else {
            const u = { id: y(), lastModifiedAt: f.mtimeMs, name: c, size: f.size, typeId: "object" };
            d.push(u);
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
    const t = await n.readdir(`public/${o}`);
    await i(`public/${o}`, t), await n.writeFile(`./public/${o}Index.json`, JSON.stringify(e), "utf8"), console.info("✅ Public directory index built.");
  } catch (e) {
    console.error("❌ Error building public directory index.", e);
  }
}
async function J() {
  try {
    console.info("🚀 Building connector configuration...");
    const o = JSON.parse(await n.readFile("package.json", "utf8")), e = JSON.parse(await n.readFile("config.json", "utf8")), i = await n.readFile("src/index.ts", "utf8");
    let t = !1, r = !1;
    const s = /^\s{4}(?:async\s+)?(private\s+)?(?:public\s+|protected\s+)?([A-Za-z_]\w*)\s*\(/gm, d = [...i.matchAll(s)].filter((c) => c[1] == null && c[2] !== "constructor").map((c) => {
      const l = c[2];
      return t = t || h.includes(l), r = r || b.includes(l), l;
    });
    d.length > 0 ? console.info(`ℹ️  Implements ${d.length} operations.`) : console.warn("⚠️  Implements no operations.");
    const a = r && t ? "bidirectional" : r ? "source" : t ? "destination" : "unknown";
    a && console.info(`ℹ️  Supports ${a} usage.`), o.name != null && (e.id = o.name), e.operations = d, e.usageId = a, o.version != null && (e.version = o.version), await n.writeFile("config.json", JSON.stringify(e, void 0, 4), "utf8"), console.info("✅ Connector configuration built.");
  } catch (o) {
    console.error("❌ Error building connector configuration.", o);
  }
}
async function x() {
  try {
    console.info("🚀 Building context configuration...");
    const o = JSON.parse(await n.readFile("package.json", "utf8")), e = JSON.parse(await n.readFile("config.json", "utf8")), i = await n.readFile("src/index.ts", "utf8"), t = /^\s{4}(?:async\s+)?(private\s+)?(?:public\s+|protected\s+)?([A-Za-z_]\w*)\s*\(/gm, r = [...i.matchAll(t)].filter((s) => s[1] == null && s[2] !== "constructor").map((s) => s[2]);
    o.name != null && (e.id = o.name), e.operations = r, o.version != null && (e.version = o.version), await n.writeFile("config.json", JSON.stringify(e, void 0, 4), "utf8"), console.info("✅ Context configuration built.");
  } catch (o) {
    console.error("❌ Error building context configuration.", o);
  }
}
async function j() {
  try {
    console.info("🚀 Building presenter configuration...");
    const o = JSON.parse(await n.readFile("package.json", "utf8")), e = JSON.parse(await n.readFile("config.json", "utf8")), i = await n.readFile("src/index.ts", "utf8"), t = /^\s{4}(?:async\s+)?(private\s+)?(?:public\s+|protected\s+)?([A-Za-z_]\w*)\s*\(/gm, r = [...i.matchAll(t)].filter((s) => !s[1] && s[2] !== "constructor").map((s) => s[2]);
    o.name != null && (e.id = o.name), e.operations = r, o.version != null && (e.version = o.version), await n.writeFile("config.json", JSON.stringify(e, void 0, 4), "utf8"), console.info("✅ Presenter configuration built.");
  } catch (o) {
    console.error("❌ Error building context configuration.", o);
  }
}
async function C(o = "./") {
  try {
    console.info("🚀 Bumping version...");
    const e = JSON.parse(await n.readFile(`${o}package.json`, "utf8"));
    if (e.version == null)
      e.version = "0.0.001", await n.writeFile(`${o}package.json`, JSON.stringify(e, void 0, 4), "utf8"), console.warn(`⚠️ Version initialised to ${e.version}.`);
    else {
      const i = e.version, t = e.version.split(".");
      e.version = `${t[0]}.${t[1]}.${Number(t[2]) + 1}`, await n.writeFile(`${o}package.json`, JSON.stringify(e, void 0, 4), "utf8"), console.info(`✅ Version bumped from ${i} to ${e.version}.`);
    }
  } catch (e) {
    console.error("❌ Error bumping package version.", e);
  }
}
function F(o) {
  console.error(`❌ ${o} script not implemented.`);
}
async function R() {
  const o = "<!-- DEPENDENCY_LICENSES_START -->", e = "<!-- DEPENDENCY_LICENSES_END -->";
  try {
    const i = (await n.readFile("./licenses.md", "utf8")).trim(), t = await n.readFile("./README.md", "utf8"), r = t.indexOf(o), s = t.indexOf(e);
    (r === -1 || s === -1) && (console.error("Error: Markers not found in README.md"), process.exit(1));
    const d = t.substring(0, r + o.length) + `
` + i + `
` + t.substring(s);
    await n.writeFile("README.md", d, "utf8"), console.log("✓ README.md updated with license information");
  } catch (i) {
    console.error("Error updating README:", i), process.exit(1);
  }
}
async function k() {
  try {
    const o = JSON.parse(await n.readFile("./dependency-check-report.json", "utf-8"));
    let e = 0;
    for (const t of o.dependencies)
      e += t.vulnerabilities.length;
    console.log("vulnerabilityCount", e);
    const i = await n.readFile("./README.md", "utf8");
  } catch (o) {
    console.error("Error updating README:", o), process.exit(1);
  }
}
async function D() {
  try {
    console.info("🚀 Sending deployment notice...");
    const o = JSON.parse(await n.readFile("config.json", "utf8")), e = {
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
async function I() {
  try {
    console.info("🚀 Synchronising with GitHub....");
    const o = JSON.parse(await n.readFile("package.json", "utf8"));
    await g("git add ."), await g(`git commit -m "v${o.version}"`), await g("git push origin main:main"), console.info(`✅ Synchronised version ${o.version} with GitHub.`);
  } catch (o) {
    console.error("❌ Error synchronising with GitHub.", o);
  }
}
async function A(o, e) {
  try {
    console.info("🚀 Uploading directory to R2....");
    async function i(r, s, d) {
      for (const a of d) {
        const c = `${r}/${a}`, l = `${s}/${a}`;
        if ((await n.stat(c)).isDirectory()) {
          const u = await n.readdir(c);
          await i(c, l, u);
        } else {
          console.info(`⚙️ Uploading '${r}/${a}'...`);
          const u = `wrangler r2 object put "datapos-sample-data-eu/${s}/${a}" --file="${r}/${a}" --jurisdiction=eu --remote`, p = await g(u);
          if (p.stderr) throw new Error(p.stderr);
        }
      }
    }
    const t = await n.readdir(`${o}/${e}/`);
    await i(`${o}/${e}`, e, t), console.info("✅ Directory uploaded to R2.");
  } catch (i) {
    console.error("❌ Error uploading directory to R2.", i);
  }
}
async function M() {
  try {
    console.info("🚀 Uploading module configuration....");
    const o = JSON.parse(await n.readFile("config.json", "utf8")), e = o.id, i = {
      body: JSON.stringify(o),
      headers: { "Content-Type": "application/json" },
      method: "PUT"
    }, t = await fetch(`https://api.datapos.app/states/${e}`, i);
    if (!t.ok) throw new Error(await t.text());
    console.info("✅ Module configuration uploaded.");
  } catch (o) {
    console.error("❌ Error uploading module configuration.", o);
  }
}
async function P(o) {
  try {
    console.info("🚀 Uploading module to R2...");
    const i = `v${JSON.parse(await n.readFile("package.json", "utf8")).version}`;
    async function t(r, s = "") {
      const d = await n.readdir(r, { withFileTypes: !0 });
      for (const a of d) {
        const c = `${r}/${a.name}`, l = s ? `${s}/${a.name}` : a.name;
        if (!a.isDirectory()) {
          const f = `${o}_${i}/${l}`.replace(/\\/g, "/"), u = a.name.endsWith(".js") ? "application/javascript" : a.name.endsWith(".css") ? "text/css" : "application/octet-stream";
          console.info(`⚙️ Uploading '${l}' → '${f}'...`);
          const { stderr: p } = await g(`wrangler r2 object put "${f}" --file="${c}" --content-type ${u} --jurisdiction=eu --remote`);
          if (p) throw new Error(p);
        }
      }
    }
    await t("dist"), console.info("✅ Module uploaded to R2.");
  } catch (e) {
    console.error("❌ Error uploading module to R2.", e);
  }
}
export {
  S as buildConfig,
  J as buildConnectorConfig,
  x as buildContextConfig,
  j as buildPresenterConfig,
  O as buildPublicDirectoryIndex,
  C as bumpVersion,
  F as echoScriptNotImplemented,
  R as insertLicensesIntoReadme,
  k as insertOWASPDependencyCheckBadgeIntoReadme,
  D as sendDeploymentNotice,
  I as syncWithGitHub,
  A as uploadDirectoryToR2,
  M as uploadModuleConfigToDO,
  P as uploadModuleToR2
};
