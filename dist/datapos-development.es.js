import { exec as u } from "child_process";
import { promises as i } from "fs";
import { promisify as d } from "util";
const p = ["createObject", "dropObject", "removeRecords", "upsertRecords"], m = ["findObject", "getRecord", "listNodes", "previewObject", "retrieveRecords"], f = d(u);
async function S() {
  try {
    console.log("🚀 Building connector configuration...");
    const o = JSON.parse(await i.readFile("package.json", "utf8")), e = JSON.parse(await i.readFile("config.json", "utf8")), t = await i.readFile("src/index.ts", "utf8");
    let r = !1, s = !1;
    const n = /^\s{4}(?:async\s+)?(private\s+)?(?:public\s+|protected\s+)?([A-Za-z_]\w*)\s*\(/gm, c = [...t.matchAll(n)].filter((a) => !a[1] && a[2] !== "constructor").map((a) => {
      const g = a[2];
      return r = r || p.includes(g), s = s || m.includes(g), g;
    });
    c.length > 0 ? console.log(`ℹ️  Implements ${c.length} operations.`) : console.log("⚠️  Implements no operations.");
    const l = s && r ? "bidirectional" : s ? "source" : r ? "destination" : null;
    console.log(l ? `ℹ️  Supports ${l} usage.` : "⚠️  No usage identified."), o.name && (e.id = o.name), e.operations = c, e.usageId = l, o.version && (e.version = o.version), await i.writeFile("config.json", JSON.stringify(e, void 0, 4), "utf8"), console.log("✅ Connector configuration built.");
  } catch (o) {
    console.warn("❌ Error building connector configuration.", o);
  }
}
async function N() {
  try {
    console.log("🚀 Building context configuration...");
    const o = JSON.parse(await i.readFile("package.json", "utf8")), e = JSON.parse(await i.readFile("config.json", "utf8")), t = await i.readFile("src/index.ts", "utf8"), r = /^\s{4}(?:async\s+)?(private\s+)?(?:public\s+|protected\s+)?([A-Za-z_]\w*)\s*\(/gm, s = [...t.matchAll(r)].filter((n) => !n[1] && n[2] !== "constructor").map((n) => n[2]);
    o.name && (e.id = o.name), e.operations = s, o.version && (e.version = o.version), await i.writeFile("config.json", JSON.stringify(e, void 0, 4), "utf8");
  } catch (o) {
    console.warn("❌ Error building context configuration.", o);
  }
}
async function y() {
  try {
    console.log("🚀 Building informer configuration...");
    const o = JSON.parse(await i.readFile("package.json", "utf8")), e = JSON.parse(await i.readFile("config.json", "utf8")), t = await i.readFile("src/index.ts", "utf8"), r = /^\s{4}(?:async\s+)?(private\s+)?(?:public\s+|protected\s+)?([A-Za-z_]\w*)\s*\(/gm, s = [...t.matchAll(r)].filter((n) => !n[1] && n[2] !== "constructor").map((n) => n[2]);
    o.name && (e.id = o.name), e.operations = s, o.version && (e.version = o.version), await i.writeFile("config.json", JSON.stringify(e, void 0, 4), "utf8");
  } catch (o) {
    console.warn("❌ Error building informer configuration.", o);
  }
}
async function b() {
  try {
    console.log("🚀 Building presenter configuration...");
    const o = JSON.parse(await i.readFile("package.json", "utf8")), e = JSON.parse(await i.readFile("config.json", "utf8")), t = await i.readFile("src/index.ts", "utf8"), r = /^\s{4}(?:async\s+)?(private\s+)?(?:public\s+|protected\s+)?([A-Za-z_]\w*)\s*\(/gm, s = [...t.matchAll(r)].filter((n) => !n[1] && n[2] !== "constructor").map((n) => n[2]);
    o.name && (e.id = o.name), e.operations = s, o.version && (e.version = o.version), await i.writeFile("config.json", JSON.stringify(e, void 0, 4), "utf8");
  } catch (o) {
    console.warn("❌ Error building context configuration.", o);
  }
}
async function J() {
  try {
    console.log("🚀 Bumping version...");
    const o = JSON.parse(await i.readFile("package.json", "utf8"));
    if (o.version) {
      const e = o.version, t = o.version.split(".");
      o.version = `${t[0]}.${t[1]}.${Number(t[2]) + 1}`, await i.writeFile("package.json", JSON.stringify(o, void 0, 4), "utf8"), console.log(`✅ Version bumped from ${e} to ${o.version}.`);
    } else
      o.version = "0.0.001", await i.writeFile("package.json", JSON.stringify(o, void 0, 4), "utf8"), console.log(`⚠️ Version initialised to ${o.version}.`);
  } catch (o) {
    console.warn("❌ Error bumping package version.", o);
  }
}
async function h() {
  try {
    console.log("🚀 Synchronising with GitHub....");
    const o = JSON.parse(await i.readFile("package.json", "utf8"));
    await f("git add ."), await f(`git commit -m "v${o.version}"`), await f("git push origin main:main"), console.log(`✅ Synchronised version ${o.version} with GitHub.`);
  } catch (o) {
    console.warn("❌ Error synchronising with GitHub.", o);
  }
}
export {
  S as buildConnectorConfig,
  N as buildContextConfig,
  y as buildInformerConfig,
  b as buildPresenterConfig,
  J as bumpVersion,
  h as syncWithGitHub
};
