import { exec as m } from "node:child_process";
import { promises as e } from "node:fs";
import { nanoid as w } from "nanoid";
import { promisify as y } from "node:util";
const h = ["createObject", "dropObject", "removeRecords", "upsertRecords"], b = ["findObject", "getRecord", "listNodes", "previewObject", "retrieveRecords"], g = y(m);
async function S() {
  try {
    console.info("🚀 Building configuration...");
    const o = JSON.parse(await e.readFile("package.json", "utf8")), n = JSON.parse(await e.readFile("config.json", "utf8"));
    o.name != null && (n.id = o.name.replace("@datapos/", "").replace("@data-positioning/", "")), o.version != null && (n.version = o.version), await e.writeFile("config.json", JSON.stringify(n, void 0, 4), "utf8"), console.info("✅ Configuration built.");
  } catch (o) {
    console.error("❌ Error building configuration.", o);
  }
}
async function O(o) {
  try {
    console.info(`🚀 Building public directory index for identifier '${o}'...`);
    const n = {};
    async function t(r, s) {
      console.info(`⚙️ Processing directory '${r}'...`);
      const d = [], a = r.substring(`public/${o}`.length);
      n[a] = d;
      for (const c of s) {
        const l = `${r}/${c}`;
        try {
          const f = await e.stat(l);
          if (f.isDirectory()) {
            const p = await e.readdir(l), u = { childCount: p.length, name: `${c}`, typeId: "folder" };
            d.push(u), await t(l, p);
          } else {
            const p = { id: w(), lastModifiedAt: f.mtimeMs, name: c, size: f.size, typeId: "object" };
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
    const i = await e.readdir(`public/${o}`);
    await t(`public/${o}`, i), await e.writeFile(`./public/${o}Index.json`, JSON.stringify(n), "utf8"), console.info("✅ Public directory index built.");
  } catch (n) {
    console.error("❌ Error building public directory index.", n);
  }
}
async function J() {
  try {
    console.info("🚀 Building connector configuration...");
    const o = JSON.parse(await e.readFile("package.json", "utf8")), n = JSON.parse(await e.readFile("config.json", "utf8")), t = await e.readFile("src/index.ts", "utf8");
    let i = !1, r = !1;
    const s = /^\s{4}(?:async\s+)?(private\s+)?(?:public\s+|protected\s+)?([A-Za-z_]\w*)\s*\(/gm, d = [...t.matchAll(s)].filter((c) => !c[1] && c[2] !== "constructor").map((c) => {
      const l = c[2];
      return i = i || h.includes(l), r = r || b.includes(l), l;
    });
    d.length > 0 ? console.info(`ℹ️  Implements ${d.length} operations.`) : console.warn("⚠️  Implements no operations.");
    const a = r && i ? "bidirectional" : r ? "source" : i ? "destination" : "unknown";
    a && console.info(`ℹ️  Supports ${a} usage.`), o.name != null && (n.id = o.name), n.operations = d, n.usageId = a, o.version != null && (n.version = o.version), await e.writeFile("config.json", JSON.stringify(n, void 0, 4), "utf8"), console.info("✅ Connector configuration built.");
  } catch (o) {
    console.error("❌ Error building connector configuration.", o);
  }
}
async function x() {
  try {
    console.info("🚀 Building context configuration...");
    const o = JSON.parse(await e.readFile("package.json", "utf8")), n = JSON.parse(await e.readFile("config.json", "utf8")), t = await e.readFile("src/index.ts", "utf8"), i = /^\s{4}(?:async\s+)?(private\s+)?(?:public\s+|protected\s+)?([A-Za-z_]\w*)\s*\(/gm, r = [...t.matchAll(i)].filter((s) => !s[1] && s[2] !== "constructor").map((s) => s[2]);
    o.name != null && (n.id = o.name), n.operations = r, o.version != null && (n.version = o.version), await e.writeFile("config.json", JSON.stringify(n, void 0, 4), "utf8"), console.info("✅ Context configuration built.");
  } catch (o) {
    console.error("❌ Error building context configuration.", o);
  }
}
async function j() {
  try {
    console.info("🚀 Building presenter configuration...");
    const o = JSON.parse(await e.readFile("package.json", "utf8")), n = JSON.parse(await e.readFile("config.json", "utf8")), t = await e.readFile("src/index.ts", "utf8"), i = /^\s{4}(?:async\s+)?(private\s+)?(?:public\s+|protected\s+)?([A-Za-z_]\w*)\s*\(/gm, r = [...t.matchAll(i)].filter((s) => !s[1] && s[2] !== "constructor").map((s) => s[2]);
    o.name != null && (n.id = o.name), n.operations = r, o.version != null && (n.version = o.version), await e.writeFile("config.json", JSON.stringify(n, void 0, 4), "utf8"), console.info("✅ Presenter configuration built.");
  } catch (o) {
    console.error("❌ Error building context configuration.", o);
  }
}
async function C() {
  try {
    console.info("🚀 Bumping version...");
    const o = JSON.parse(await e.readFile("package.json", "utf8"));
    if (o.version != null) {
      const n = o.version, t = o.version.split(".");
      o.version = `${t[0]}.${t[1]}.${Number(t[2]) + 1}`, await e.writeFile("package.json", JSON.stringify(o, void 0, 4), "utf8"), console.info(`✅ Version bumped from ${n} to ${o.version}.`);
    } else
      o.version = "0.0.001", await e.writeFile("package.json", JSON.stringify(o, void 0, 4), "utf8"), console.warn(`⚠️ Version initialised to ${o.version}.`);
  } catch (o) {
    console.error("❌ Error bumping package version.", o);
  }
}
function F(o) {
  console.error(`❌ ${o} script not implemented.`);
}
async function R() {
  const o = "<!-- DEPENDENCY_LICENSES_START -->", n = "<!-- DEPENDENCY_LICENSES_END -->";
  try {
    const t = (await e.readFile("./licenses.md", "utf8")).trim(), i = await e.readFile("./README.md", "utf8"), r = i.indexOf(o), s = i.indexOf(n);
    (r === -1 || s === -1) && (console.error("Error: Markers not found in README.md"), process.exit(1));
    const d = i.substring(0, r + o.length) + `
` + t + `
` + i.substring(s);
    await e.writeFile("README.md", d, "utf8"), console.log("✓ README.md updated with license information");
  } catch (t) {
    console.error("Error updating README:", t), process.exit(1);
  }
}
async function k() {
  try {
    console.info("🚀 Sending deployment notice...");
    const o = JSON.parse(await e.readFile("config.json", "utf8")), n = {
      body: JSON.stringify(o),
      headers: { "Content-Type": "application/json" },
      method: "PUT"
    }, t = await fetch(`https://api.datapos.app/states/${o.id}`, n);
    if (!t.ok) throw new Error(await t.text());
    console.info("✅ Deployment notice sent.");
  } catch (o) {
    console.error("❌ Error sending deployment notice.", o);
  }
}
async function I() {
  try {
    console.info("🚀 Synchronising with GitHub....");
    const o = JSON.parse(await e.readFile("package.json", "utf8"));
    await g("git add ."), await g(`git commit -m "v${o.version}"`), await g("git push origin main:main"), console.info(`✅ Synchronised version ${o.version} with GitHub.`);
  } catch (o) {
    console.error("❌ Error synchronising with GitHub.", o);
  }
}
async function D(o, n) {
  try {
    console.info("🚀 Uploading directory to R2....");
    async function t(r, s, d) {
      for (const a of d) {
        const c = `${r}/${a}`, l = `${s}/${a}`;
        if ((await e.stat(c)).isDirectory()) {
          const p = await e.readdir(c);
          await t(c, l, p);
        } else {
          console.info(`⚙️ Uploading '${r}/${a}'...`);
          const p = `wrangler r2 object put "datapos-sample-data-eu/${s}/${a}" --file="${r}/${a}" --jurisdiction=eu --remote`, u = await g(p);
          if (u.stderr) throw new Error(u.stderr);
        }
      }
    }
    const i = await e.readdir(`${o}/${n}/`);
    await t(`${o}/${n}`, n, i), console.info("✅ Directory uploaded to R2.");
  } catch (t) {
    console.error("❌ Error uploading directory to R2.", t);
  }
}
async function A() {
  try {
    console.info("🚀 Uploading module configuration....");
    const o = JSON.parse(await e.readFile("config.json", "utf8")), n = o.id, t = {
      body: JSON.stringify(o),
      headers: { "Content-Type": "application/json" },
      method: "PUT"
    }, i = await fetch(`https://api.datapos.app/states/${n}`, t);
    if (!i.ok) throw new Error(await i.text());
    console.info("✅ Module configuration uploaded.");
  } catch (o) {
    console.error("❌ Error uploading module configuration.", o);
  }
}
async function P(o) {
  try {
    console.info("🚀 Uploading module to R2...");
    const t = `v${JSON.parse(await e.readFile("package.json", "utf8")).version}`;
    async function i(r, s = "") {
      const d = await e.readdir(r, { withFileTypes: !0 });
      for (const a of d) {
        const c = `${r}/${a.name}`, l = s ? `${s}/${a.name}` : a.name;
        if (!a.isDirectory()) {
          const f = `${o}_${t}/${l}`.replace(/\\/g, "/"), p = a.name.endsWith(".js") ? "application/javascript" : a.name.endsWith(".css") ? "text/css" : "application/octet-stream";
          console.info(`⚙️ Uploading '${l}' → '${f}'...`);
          const { stderr: u } = await g(`wrangler r2 object put "${f}" --file="${c}" --content-type ${p} --jurisdiction=eu --remote`);
          if (u) throw new Error(u);
        }
      }
    }
    await i("dist"), console.info("✅ Module uploaded to R2.");
  } catch (n) {
    console.error("❌ Error uploading module to R2.", n);
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
  k as sendDeploymentNotice,
  I as syncWithGitHub,
  D as uploadDirectoryToR2,
  A as uploadModuleConfigToDO,
  P as uploadModuleToR2
};
