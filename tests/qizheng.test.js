const assert = require('node:assert/strict');
const fs = require('node:fs');
const path = require('node:path');
const vm = require('node:vm');
const Astronomy = require('astronomy-engine');

const root = path.resolve(__dirname, '..');
const html = fs.readFileSync(path.join(root, 'vicha', 'qizheng.html'), 'utf8');
const scripts = [...html.matchAll(/<script[^>]*>([\s\S]*?)<\/script>/g)];
const context = { Astronomy, Date, Math, Number, String, Error, Intl, console };
context.window = { Astronomy, addEventListener() {} };
vm.createContext(context);
vm.runInContext(scripts.at(-1)[1], context);

function evaluate(source) {
  return vm.runInContext(source, context);
}

const chart = evaluate("calculateQiZhengChart(1972,4,4,2,9,'male','zhengan',13.7563,100.5018,7)");
assert.equal(chart.utcDate.toISOString(), '1972-04-03T19:09:00.000Z');
assert.equal(chart.planetList.length, 11, '七政四餘 must contain 11 primary bodies');
assert.equal(chart.houses.length, 12, 'chart must contain 12 palaces');
assert.ok(chart.mingDeg >= 0 && chart.mingDeg < 360, 'ascendant must be normalized');
assert.equal(new Set(chart.planetList.map((planet) => planet.id)).size, 11);
assert.ok(chart.planetList.every((planet) => Number.isFinite(planet.deg)));

assert.equal(evaluate("getMansion(42.03,'zhengan').name"), '昴');
assert.equal(evaluate("getMansion(358.44,'zhengan').name"), '奎');
assert.equal(evaluate("getMansion(14.99,'zhengan').name"), '奎');
assert.equal(evaluate("getMansion(15,'zhengan').name"), '婁');
assert.notEqual(evaluate("getMansion(42.01,'zhengan').name"), evaluate("getMansion(42.01,'equal').name"));

assert.equal(evaluate("(()=>{try{createUtcDate(2026,2,31,1,0,7);return false}catch(e){return true}})()"), true);
assert.equal(evaluate("createUtcDate(2026,8,25,12,0,7).toISOString()"), '2026-08-25T05:00:00.000Z');
assert.equal(evaluate("createUtcDate(2026,8,25,12,0,7,'Asia/Bangkok').toISOString()"), '2026-08-25T05:00:00.000Z');
assert.equal(evaluate("createUtcDate(2026,7,1,12,0,-5,'America/New_York').toISOString()"), '2026-07-01T16:00:00.000Z');
assert.equal(evaluate("createUtcDate(2026,1,1,12,0,-5,'America/New_York').toISOString()"), '2026-01-01T17:00:00.000Z');

console.log('Qi Zheng Si Yu calculation tests passed.');
