import assert from "node:assert/strict";
import fs from "node:fs";
import path from "node:path";

console.log("Running motion-design sanity tests...");

const requiredFiles = [
  "README.md",
  "LICENSE",
  "package.json",
  "MAINTAINERS.md",
  "CITATION.cff",
  "skills/motion-design/SKILL.md",
  "skills/motion-design/assets/presets.json",
  "skills/motion-design/scripts/build_gallery.py"
];

for (const file of requiredFiles) {
  assert.ok(fs.existsSync(file), `Expected ${file} to exist`);
}

const pkg = JSON.parse(fs.readFileSync("package.json", "utf-8"));
assert.equal(pkg.name, "motion-design");
assert.ok(pkg.author.includes("Abdullah Formuli <authrainmedia@gmail.com>"));
assert.equal(pkg.license, "MIT");

const license = fs.readFileSync("LICENSE", "utf-8");
assert.ok(license.includes("Copyright (c) 2026 Abdullah Formuli"));

const maintainers = fs.readFileSync("MAINTAINERS.md", "utf-8");
assert.ok(maintainers.includes("Abdullah Formuli"));

const presets = JSON.parse(fs.readFileSync("skills/motion-design/assets/presets.json", "utf-8"));
assert.ok(Array.isArray(presets.presets), "presets.presets must be an array");
assert.equal(presets.presets.length, 10, "presets should have 10 styles");

console.log(`✅ All ${requiredFiles.length} structural files verified.`);
console.log(`✅ 10 motion design presets validated.`);
console.log("✅ Sanity test passed successfully!");
