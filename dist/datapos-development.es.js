import { exec as m } from "child_process";
import { promises as n } from "fs";
import { nanoid as w } from "nanoid";
import { promisify as y } from "util";
const b = ["createObject", "dropObject", "removeRecords", "upsertRecords"], v = ["findObject", "getRecord", "listNodes", "previewObject", "retrieveRecords"], u = y(m);
async function $() {
  try {
    console.info("🚀 Building configuration...");
    const o = JSON.parse(await n.readFile("package.json", "utf8")), e = JSON.parse(await n.readFile("config.json", "utf8"));
    o.name && (e.id = o.name), o.version && (e.version = o.version), await n.writeFile("config.json", JSON.stringify(e, void 0, 4), "utf8"), console.info("✅ Configuration built.");
  } catch (o) {
    console.error("❌ Error building configuration.", o);
  }
}
async function J(o) {
  try {
    console.info(`🚀 Building public directory index for identifier '${o}'...`);
    const e = {};
    async function i(t, r) {
      console.info(`⚙️ Processing directory '${t}'...`);
      const f = [], l = t.substring(`public/${o}`.length);
      e[l] = f;
      for (const a of r) {
        const c = `${t}/${a}`;
        try {
          const d = await n.stat(c);
          if (d.isDirectory()) {
            const p = await n.readdir(c), g = { childCount: p.length, name: `${a}`, typeId: "folder" };
            f.push(g), await i(c, p);
          } else {
            const p = { id: w(), lastModifiedAt: d.mtimeMs, name: a, size: d.size, typeId: "object" };
            f.push(p);
          }
        } catch (d) {
          throw new Error(`Unable to get information for '${a}' in 'buildPublicDirectoryIndex'. ${String(d)}`);
        }
      }
      f.sort((a, c) => {
        const d = a.typeId.localeCompare(c.typeId);
        return d !== 0 ? d : a.name.localeCompare(c.name);
      });
    }
    const s = await n.readdir(`public/${o}`);
    await i(`public/${o}`, s), await n.writeFile(`./public/${o}Index.json`, JSON.stringify(e), "utf8"), console.info("✅ Public directory index built.");
  } catch (e) {
    console.error("❌ Error building public directory index.", e);
  }
}
async function j() {
  try {
    console.info("🚀 Building connector configuration...");
    const o = JSON.parse(await n.readFile("package.json", "utf8")), e = JSON.parse(await n.readFile("config.json", "utf8")), i = await n.readFile("src/index.ts", "utf8");
    let s = !1, t = !1;
    const r = /^\s{4}(?:async\s+)?(private\s+)?(?:public\s+|protected\s+)?([A-Za-z_]\w*)\s*\(/gm, f = [...i.matchAll(r)].filter((a) => !a[1] && a[2] !== "constructor").map((a) => {
      const c = a[2];
      return s = s || b.includes(c), t = t || v.includes(c), c;
    });
    f.length > 0 ? console.info(`ℹ️  Implements ${f.length} operations.`) : console.warn("⚠️  Implements no operations.");
    const l = t && s ? "bidirectional" : t ? "source" : s ? "destination" : null;
    l ? console.info(`ℹ️  Supports ${l} usage.`) : console.warn("⚠️  No usage identified."), o.name && (e.id = o.name), e.operations = f, e.usageId = l, o.version && (e.version = o.version), await n.writeFile("config.json", JSON.stringify(e, void 0, 4), "utf8"), console.info("✅ Connector configuration built.");
  } catch (o) {
    console.error("❌ Error building connector configuration.", o);
  }
}
async function x() {
  try {
    console.info("🚀 Building context configuration...");
    const o = JSON.parse(await n.readFile("package.json", "utf8")), e = JSON.parse(await n.readFile("config.json", "utf8")), i = await n.readFile("src/index.ts", "utf8"), s = /^\s{4}(?:async\s+)?(private\s+)?(?:public\s+|protected\s+)?([A-Za-z_]\w*)\s*\(/gm, t = [...i.matchAll(s)].filter((r) => !r[1] && r[2] !== "constructor").map((r) => r[2]);
    o.name && (e.id = o.name), e.operations = t, o.version && (e.version = o.version), await n.writeFile("config.json", JSON.stringify(e, void 0, 4), "utf8"), console.info("✅ Context configuration built.");
  } catch (o) {
    console.error("❌ Error building context configuration.", o);
  }
}
async function F() {
  try {
    console.info("🚀 Building informer configuration...");
    const o = JSON.parse(await n.readFile("package.json", "utf8")), e = JSON.parse(await n.readFile("config.json", "utf8")), i = await n.readFile("src/index.ts", "utf8"), s = /^\s{4}(?:async\s+)?(private\s+)?(?:public\s+|protected\s+)?([A-Za-z_]\w*)\s*\(/gm, t = [...i.matchAll(s)].filter((r) => !r[1] && r[2] !== "constructor").map((r) => r[2]);
    o.name && (e.id = o.name), e.operations = t, o.version && (e.version = o.version), await n.writeFile("config.json", JSON.stringify(e, void 0, 4), "utf8"), console.info("✅ Informer configuration built.");
  } catch (o) {
    console.error("❌ Error building informer configuration.", o);
  }
}
async function C() {
  try {
    console.info("🚀 Building presenter configuration...");
    const o = JSON.parse(await n.readFile("package.json", "utf8")), e = JSON.parse(await n.readFile("config.json", "utf8")), i = await n.readFile("src/index.ts", "utf8"), s = /^\s{4}(?:async\s+)?(private\s+)?(?:public\s+|protected\s+)?([A-Za-z_]\w*)\s*\(/gm, t = [...i.matchAll(s)].filter((r) => !r[1] && r[2] !== "constructor").map((r) => r[2]);
    o.name && (e.id = o.name), e.operations = t, o.version && (e.version = o.version), await n.writeFile("config.json", JSON.stringify(e, void 0, 4), "utf8"), console.info("✅ Presenter configuration built.");
  } catch (o) {
    console.error("❌ Error building context configuration.", o);
  }
}
async function k() {
  try {
    console.info("🚀 Bumping version...");
    const o = JSON.parse(await n.readFile("package.json", "utf8"));
    if (o.version) {
      const e = o.version, i = o.version.split(".");
      o.version = `${i[0]}.${i[1]}.${Number(i[2]) + 1}`, await n.writeFile("package.json", JSON.stringify(o, void 0, 4), "utf8"), console.info(`✅ Version bumped from ${e} to ${o.version}.`);
    } else
      o.version = "0.0.001", await n.writeFile("package.json", JSON.stringify(o, void 0, 4), "utf8"), console.warn(`⚠️ Version initialised to ${o.version}.`);
  } catch (o) {
    console.error("❌ Error bumping package version.", o);
  }
}
function E(o) {
  console.error(`❌ ${o} script not implemented.`);
}
async function I() {
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
async function R() {
  try {
    console.info("🚀 Synchronising with GitHub....");
    const o = JSON.parse(await n.readFile("package.json", "utf8"));
    await u("git add ."), await u(`git commit -m "v${o.version}"`), await u("git push origin main:main"), console.info(`✅ Synchronised version ${o.version} with GitHub.`);
  } catch (o) {
    console.error("❌ Error synchronising with GitHub.", o);
  }
}
async function P(o, e) {
  try {
    console.info("🚀 Uploading directory to R2....");
    async function i(t, r, f) {
      for (const l of f) {
        const a = `${t}/${l}`, c = `${r}/${l}`;
        if ((await n.stat(a)).isDirectory()) {
          const p = await n.readdir(a);
          await i(a, c, p);
        } else {
          console.info(`⚙️ Uploading '${t}/${l}'.`);
          const p = `wrangler r2 object put "datapos-sample-data-eu/${r}/${l}" --file="${t}/${l}" --jurisdiction=eu --remote`, g = await u(p);
          if (g.stderr) throw new Error(g.stderr);
        }
      }
    }
    const s = await n.readdir(`${o}/${e}/`);
    await i(`${o}/${e}`, e, s), console.info("✅ Directory uploaded to R2.");
  } catch (i) {
    console.error("❌ Error uploading directory to R2.", i);
  }
}
async function A() {
  try {
    console.info("🚀 Uploading module configuration....");
    const o = JSON.parse(await n.readFile("config.json", "utf8")), e = o.id, i = {
      body: JSON.stringify(o),
      headers: { "Content-Type": "application/json" },
      method: "PUT"
    }, s = await fetch(`https://api.datapos.app/states/${e}`, i);
    if (!s.ok) throw new Error(await s.text());
    console.info("✅ Module configuration uploaded.");
  } catch (o) {
    console.error("❌ Error uploading module configuration.", o);
  }
}
async function B(o, e) {
  try {
    console.info("🚀 Uploading module to R2....");
    const i = JSON.parse(await n.readFile("package.json", "utf8")), s = e.replace(/^(.*?\.)/, `$1v${i.version}.`), { stderr: t } = await u(`wrangler r2 object put ${s} --file=dist/${o} --content-type application/javascript --jurisdiction=eu --remote`);
    if (t) throw new Error(t);
    console.info("✅ Module uploaded to R2.");
  } catch (i) {
    console.error("❌ Error uploading module to R2.", i);
  }
}
export {
  $ as buildConfig,
  j as buildConnectorConfig,
  x as buildContextConfig,
  F as buildInformerConfig,
  C as buildPresenterConfig,
  J as buildPublicDirectoryIndex,
  k as bumpVersion,
  E as echoScriptNotImplemented,
  I as sendDeploymentNotice,
  R as syncWithGitHub,
  P as uploadDirectoryToR2,
  A as uploadModuleConfig,
  B as uploadModuleToR2
};
