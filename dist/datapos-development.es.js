import { exec as m } from "child_process";
import { promises as e } from "fs";
import { nanoid as w } from "nanoid";
import { promisify as y } from "util";
const h = ["createObject", "dropObject", "removeRecords", "upsertRecords"], v = ["findObject", "getRecord", "listNodes", "previewObject", "retrieveRecords"], g = y(m);
async function S() {
  try {
    console.info("🚀 Building configuration...");
    const o = JSON.parse(await e.readFile("package.json", "utf8")), n = JSON.parse(await e.readFile("config.json", "utf8"));
    o.name && (n.id = o.name.replace("@datapos/", "").replace("@data-positioning/", "")), o.version && (n.version = o.version), await e.writeFile("config.json", JSON.stringify(n, void 0, 4), "utf8"), console.info("✅ Configuration built.");
  } catch (o) {
    console.error("❌ Error building configuration.", o);
  }
}
async function J(o) {
  try {
    console.info(`🚀 Building public directory index for identifier '${o}'...`);
    const n = {};
    async function i(r, t) {
      console.info(`⚙️ Processing directory '${r}'...`);
      const f = [], a = r.substring(`public/${o}`.length);
      n[a] = f;
      for (const c of t) {
        const l = `${r}/${c}`;
        try {
          const d = await e.stat(l);
          if (d.isDirectory()) {
            const p = await e.readdir(l), u = { childCount: p.length, name: `${c}`, typeId: "folder" };
            f.push(u), await i(l, p);
          } else {
            const p = { id: w(), lastModifiedAt: d.mtimeMs, name: c, size: d.size, typeId: "object" };
            f.push(p);
          }
        } catch (d) {
          throw new Error(`Unable to get information for '${c}' in 'buildPublicDirectoryIndex'. ${String(d)}`);
        }
      }
      f.sort((c, l) => {
        const d = c.typeId.localeCompare(l.typeId);
        return d !== 0 ? d : c.name.localeCompare(l.name);
      });
    }
    const s = await e.readdir(`public/${o}`);
    await i(`public/${o}`, s), await e.writeFile(`./public/${o}Index.json`, JSON.stringify(n), "utf8"), console.info("✅ Public directory index built.");
  } catch (n) {
    console.error("❌ Error building public directory index.", n);
  }
}
async function j() {
  try {
    console.info("🚀 Building connector configuration...");
    const o = JSON.parse(await e.readFile("package.json", "utf8")), n = JSON.parse(await e.readFile("config.json", "utf8")), i = await e.readFile("src/index.ts", "utf8");
    let s = !1, r = !1;
    const t = /^\s{4}(?:async\s+)?(private\s+)?(?:public\s+|protected\s+)?([A-Za-z_]\w*)\s*\(/gm, f = [...i.matchAll(t)].filter((c) => !c[1] && c[2] !== "constructor").map((c) => {
      const l = c[2];
      return s = s || h.includes(l), r = r || v.includes(l), l;
    });
    f.length > 0 ? console.info(`ℹ️  Implements ${f.length} operations.`) : console.warn("⚠️  Implements no operations.");
    const a = r && s ? "bidirectional" : r ? "source" : s ? "destination" : null;
    a ? console.info(`ℹ️  Supports ${a} usage.`) : console.warn("⚠️  No usage identified."), o.name && (n.id = o.name), n.operations = f, n.usageId = a, o.version && (n.version = o.version), await e.writeFile("config.json", JSON.stringify(n, void 0, 4), "utf8"), console.info("✅ Connector configuration built.");
  } catch (o) {
    console.error("❌ Error building connector configuration.", o);
  }
}
async function x() {
  try {
    console.info("🚀 Building context configuration...");
    const o = JSON.parse(await e.readFile("package.json", "utf8")), n = JSON.parse(await e.readFile("config.json", "utf8")), i = await e.readFile("src/index.ts", "utf8"), s = /^\s{4}(?:async\s+)?(private\s+)?(?:public\s+|protected\s+)?([A-Za-z_]\w*)\s*\(/gm, r = [...i.matchAll(s)].filter((t) => !t[1] && t[2] !== "constructor").map((t) => t[2]);
    o.name && (n.id = o.name), n.operations = r, o.version && (n.version = o.version), await e.writeFile("config.json", JSON.stringify(n, void 0, 4), "utf8"), console.info("✅ Context configuration built.");
  } catch (o) {
    console.error("❌ Error building context configuration.", o);
  }
}
async function F() {
  try {
    console.info("🚀 Building informer configuration...");
    const o = JSON.parse(await e.readFile("package.json", "utf8")), n = JSON.parse(await e.readFile("config.json", "utf8")), i = await e.readFile("src/index.ts", "utf8"), s = /^\s{4}(?:async\s+)?(private\s+)?(?:public\s+|protected\s+)?([A-Za-z_]\w*)\s*\(/gm, r = [...i.matchAll(s)].filter((t) => !t[1] && t[2] !== "constructor").map((t) => t[2]);
    o.name && (n.id = o.name), n.operations = r, o.version && (n.version = o.version), await e.writeFile("config.json", JSON.stringify(n, void 0, 4), "utf8"), console.info("✅ Informer configuration built.");
  } catch (o) {
    console.error("❌ Error building informer configuration.", o);
  }
}
async function C() {
  try {
    console.info("🚀 Building presenter configuration...");
    const o = JSON.parse(await e.readFile("package.json", "utf8")), n = JSON.parse(await e.readFile("config.json", "utf8")), i = await e.readFile("src/index.ts", "utf8"), s = /^\s{4}(?:async\s+)?(private\s+)?(?:public\s+|protected\s+)?([A-Za-z_]\w*)\s*\(/gm, r = [...i.matchAll(s)].filter((t) => !t[1] && t[2] !== "constructor").map((t) => t[2]);
    o.name && (n.id = o.name), n.operations = r, o.version && (n.version = o.version), await e.writeFile("config.json", JSON.stringify(n, void 0, 4), "utf8"), console.info("✅ Presenter configuration built.");
  } catch (o) {
    console.error("❌ Error building context configuration.", o);
  }
}
async function E() {
  try {
    console.info("🚀 Bumping version...");
    const o = JSON.parse(await e.readFile("package.json", "utf8"));
    if (o.version) {
      const n = o.version, i = o.version.split(".");
      o.version = `${i[0]}.${i[1]}.${Number(i[2]) + 1}`, await e.writeFile("package.json", JSON.stringify(o, void 0, 4), "utf8"), console.info(`✅ Version bumped from ${n} to ${o.version}.`);
    } else
      o.version = "0.0.001", await e.writeFile("package.json", JSON.stringify(o, void 0, 4), "utf8"), console.warn(`⚠️ Version initialised to ${o.version}.`);
  } catch (o) {
    console.error("❌ Error bumping package version.", o);
  }
}
function k(o) {
  console.error(`❌ ${o} script not implemented.`);
}
async function I() {
  try {
    console.info("🚀 Sending deployment notice...");
    const o = JSON.parse(await e.readFile("config.json", "utf8")), n = {
      body: JSON.stringify(o),
      headers: { "Content-Type": "application/json" },
      method: "PUT"
    }, i = await fetch(`https://api.datapos.app/states/${o.id}`, n);
    if (!i.ok) throw new Error(await i.text());
    console.info("✅ Deployment notice sent.");
  } catch (o) {
    console.error("❌ Error sending deployment notice.", o);
  }
}
async function R() {
  try {
    console.info("🚀 Synchronising with GitHub....");
    const o = JSON.parse(await e.readFile("package.json", "utf8"));
    await g("git add ."), await g(`git commit -m "v${o.version}"`), await g("git push origin main:main"), console.info(`✅ Synchronised version ${o.version} with GitHub.`);
  } catch (o) {
    console.error("❌ Error synchronising with GitHub.", o);
  }
}
async function P(o, n) {
  try {
    console.info("🚀 Uploading directory to R2....");
    async function i(r, t, f) {
      for (const a of f) {
        const c = `${r}/${a}`, l = `${t}/${a}`;
        if ((await e.stat(c)).isDirectory()) {
          const p = await e.readdir(c);
          await i(c, l, p);
        } else {
          console.info(`⚙️ Uploading '${r}/${a}'...`);
          const p = `wrangler r2 object put "datapos-sample-data-eu/${t}/${a}" --file="${r}/${a}" --jurisdiction=eu --remote`, u = await g(p);
          if (u.stderr) throw new Error(u.stderr);
        }
      }
    }
    const s = await e.readdir(`${o}/${n}/`);
    await i(`${o}/${n}`, n, s), console.info("✅ Directory uploaded to R2.");
  } catch (i) {
    console.error("❌ Error uploading directory to R2.", i);
  }
}
async function A() {
  try {
    console.info("🚀 Uploading module configuration....");
    const o = JSON.parse(await e.readFile("config.json", "utf8")), n = o.id, i = {
      body: JSON.stringify(o),
      headers: { "Content-Type": "application/json" },
      method: "PUT"
    }, s = await fetch(`https://api.datapos.app/states/${n}`, i);
    if (!s.ok) throw new Error(await s.text());
    console.info("✅ Module configuration uploaded.");
  } catch (o) {
    console.error("❌ Error uploading module configuration.", o);
  }
}
async function T(o) {
  try {
    console.info("🚀 Uploading module to R2...");
    const i = `v${JSON.parse(await e.readFile("package.json", "utf8")).version}`;
    async function s(r, t = "") {
      const f = await e.readdir(r, { withFileTypes: !0 });
      for (const a of f) {
        const c = `${r}/${a.name}`, l = t ? `${t}/${a.name}` : a.name;
        if (!a.isDirectory()) {
          const d = `${o}_${i}/${l}`.replace(/\\/g, "/"), p = a.name.endsWith(".js") ? "application/javascript" : a.name.endsWith(".css") ? "text/css" : "application/octet-stream";
          console.info(`⚙️ Uploading '${l}' → '${d}'...`);
          const { stderr: u } = await g(`wrangler r2 object put "${d}" --file="${c}" --content-type ${p} --jurisdiction=eu --remote`);
          if (u) throw new Error(u);
        }
      }
    }
    await s("dist"), console.info("✅ Module uploaded to R2.");
  } catch (n) {
    console.error("❌ Error uploading module to R2.", n);
  }
}
export {
  S as buildConfig,
  j as buildConnectorConfig,
  x as buildContextConfig,
  F as buildInformerConfig,
  C as buildPresenterConfig,
  J as buildPublicDirectoryIndex,
  E as bumpVersion,
  k as echoScriptNotImplemented,
  I as sendDeploymentNotice,
  R as syncWithGitHub,
  P as uploadDirectoryToR2,
  A as uploadModuleConfigToDO,
  T as uploadModuleToR2
};
