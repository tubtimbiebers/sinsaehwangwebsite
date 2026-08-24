const fs = require('fs');
const path = require('path');

const files = fs.readdirSync(path.join(__dirname, 'vicha'));
const targetFile = files.find(f => f.includes('7') && f.includes('9') && f.includes('v29.html'));
if (!targetFile) {
    console.error('File not found in vicha folder!');
    process.exit(1);
}
const filePath = path.join(__dirname, 'vicha', targetFile);
let content = fs.readFileSync(filePath, 'utf8');

// ===== 1. PATCH CSS =====
const startCss = content.indexOf('  .tm-wrap {');
const endCssMarker = 'table.dh-info { border-collapse:collapse; width:100%; font-size:13px; }';
const endCss = content.indexOf(endCssMarker, startCss);

if (startCss !== -1 && endCss !== -1) {
  const NEW_CSS = `  .tm-wrap { overflow-x:auto; margin:12px 0; display:flex; justify-content:center; }
  table.tm-table {
    border-collapse:collapse;
    width:640px;
    max-width:100%;
    border:3px solid #cc0000 !important;
    font-size:13px;
    font-family:inherit;
    background:#ffffff;
    table-layout:fixed;
  }
  table.tm-table thead th {
    background:#cc0000;
    color:#ffffff;
    font-size:16px;
    font-weight:700;
    border:2px solid #cc0000;
    letter-spacing:1px;
    padding:6px;
    text-align:center;
  }
  table.tm-table td {
    position:relative;
    box-sizing:border-box;
  }
  table.tm-table td.col-left, table.tm-table td.col-mid {
    border-right:3px solid #cc0000 !important;
  }
  table.tm-table td.block-sep {
    border-top:3px solid #cc0000 !important;
  }
  table.tm-table td.col-left, table.tm-table td.col-mid, table.tm-table td.col-right {
    height:25px;
    padding:2px 8px;
    vertical-align:middle;
    font-size:13px;
    color:#000000;
    font-weight:600;
    border-bottom:1px solid #777777;
  }
  table.tm-table .mkr {
    float:right;
    color:#cc0000 !important;
    font-weight:bold;
    font-size:12px;
  }
  table.tm-table .mkr-left {
    float:left;
    color:#cc0000 !important;
    font-weight:bold;
    font-size:12px;
  }
  table.tm-table td.tm-footer-row {
    height:26px;
    padding:2px 8px;
    vertical-align:middle;
    border-bottom:none;
    border-right:3px solid #cc0000 !important;
    background:#ffffff;
  }
  table.tm-table tr td.tm-footer-row:last-child {
    border-right:none !important;
  }
  .tm-num-br {
    float:right;
    font-size:16px;
    font-weight:bold;
    color:#000000;
    line-height:22px;
  }
  .tm-lbl-bl {
    float:left;
    font-size:13px;
    font-weight:bold;
    color:#cc0000;
    line-height:22px;
  }
  td.tm-center-cell {
    padding:0 !important;
    vertical-align:top !important;
    background:#c5c5c5 !important;
    border-right:3px solid #cc0000 !important;
  }
  table.tm-inner-grid {
    border-collapse:collapse;
    width:100% !important;
    height:100% !important;
    background:#c5c5c5;
    table-layout:fixed;
    border:none;
  }
  table.tm-inner-grid td {
    border:none;
    padding:1px 0;
    text-align:center;
    vertical-align:middle;
    height:32px;
  }
  table.tm-inner-grid td.v-divider {
    border-right:2px solid #000000 !important;
  }
  table.tm-inner-grid tr.h-divider td {
    border-bottom:2px solid #000000 !important;
  }
  .tm-ibox {
    display:flex;
    align-items:center;
    justify-content:center;
    width:27px;
    height:27px;
    margin:0 auto;
    border:1.5px solid #000000;
    background:#ffffff;
    font-weight:bold;
    font-size:14px;
    color:#000000;
    box-sizing:border-box;
    border-radius:1px;
  }
  table.tm-inner-grid .lab {
    font-weight:bold;
    font-size:13px;
    color:#000000;
    padding-top:1px;
    padding-bottom:3px;
  }

  .dh-box { border:2px solid #c0392b; border-radius:4px; margin-bottom:16px; }
`;
  content = content.substring(0, startCss) + NEW_CSS + content.substring(endCss);
  console.log('CSS patched OK');
} else {
  console.log('CSS target not found! startCss:', startCss, 'endCss:', endCss);
}

// ===== 2. PATCH JS =====
const jsStartIdx = content.indexOf('function buildTaksaInnerGrid(grid) {');
const jsEndIdx = content.indexOf('// ดาวเหิน', jsStartIdx);

if (jsStartIdx !== -1 && jsEndIdx !== -1) {
  const NEW_JS = `function buildTaksaInnerGrid(grid) {
  let h = '<table class="tm-inner-grid">';
  const renderCell = (val, extraCls = '') => {
    if (!val) return '<td class="' + extraCls + '"></td>';
    return '<td class="' + extraCls + '"><div class="tm-ibox">' + val + '</div></td>';
  };
  const r1 = grid.row1.map(tmCell);
  const r2 = grid.row2.map(tmCell);
  h += '<tr>';
  h += '<td></td>' + renderCell(tmCell(grid.header[0])) + '<td class="v-divider"></td>';
  h += '<td></td>' + renderCell(tmCell(grid.header[1])) + '<td></td>';
  h += '</tr><tr class="h-divider">';
  h += renderCell(r1[0]) + renderCell(r1[1]) + renderCell(r1[2], 'v-divider');
  h += renderCell(r1[3]) + renderCell(r1[4]) + renderCell(r1[5]);
  h += '</tr><tr>';
  h += renderCell(r2[0]) + renderCell(r2[1]) + renderCell(r2[2], 'v-divider');
  h += renderCell(r2[3]) + renderCell(r2[4]) + renderCell(r2[5]);
  h += '</tr><tr>';
  h += '<td></td>' + renderCell(tmCell(grid.footer[0])) + '<td class="v-divider"></td>';
  h += '<td></td>' + renderCell(tmCell(grid.footer[1])) + '<td></td>';
  h += '</tr><tr>';
  h += '<td></td><td class="lab">' + tmCell(grid.labels[0]) + '</td><td class="v-divider"></td>';
  h += '<td></td><td class="lab">' + tmCell(grid.labels[1]) + '</td><td></td>';
  h += '</tr></table>';
  return h;
}

function buildTaksaMahayuk() {
  const wrap = document.getElementById('taksaMahayukWrap');
  const B = TAKSA_MAHAYUK_BLOCKS;
  let h = '<div class="tm-wrap"><table class="tm-table">';
  h += '<colgroup><col><col><col></colgroup>';
  h += '<thead><tr><th colspan="3">ทักษามหายุค</th></tr></thead>';
  h += '<tbody>';

  // ===== บล็อกบน =====
  B[0].rows.forEach((row, i) => {
    const sepClass = i === 0 ? ' block-sep' : '';
    h += '<tr>';
    h += '<td class="col-left' + sepClass + '">' + tmCell(row.left) + (row.leftMarker ? tmMkr(row.leftMarker,'left') : '') + '</td>';
    h += '<td class="col-mid' + sepClass + '">' + tmCell(row.mid) + (row.midMarker ? tmMkr(row.midMarker,'right') : '') + '</td>';
    h += '<td class="col-right' + sepClass + '">' + tmCell(row.right) + (row.rightMarker ? tmMkr(row.rightMarker,'right') : '') + '</td>';
    h += '</tr>';
  });
  const f0 = B[0].footer;
  h += '<tr>';
  h += '<td class="tm-footer-row">' + (f0.leftLabel ? '<span class="tm-lbl-bl">' + tmCell(f0.leftLabel) + '</span>' : '') + (f0.left ? '<span class="tm-num-br">' + tmCell(f0.left) + '</span>' : '') + '</td>';
  h += '<td class="tm-footer-row">' + (f0.mid ? '<span class="tm-num-br">' + tmCell(f0.mid) + '</span>' : '') + '</td>';
  h += '<td class="tm-footer-row">' + (f0.right ? '<span class="tm-num-br">' + tmCell(f0.right) + '</span>' : '') + '</td>';
  h += '</tr>';

  // ===== บล็อกกลาง =====
  const midRows = B[1].rows;
  const grid = B[1].grid;
  const gridHtml = buildTaksaInnerGrid(grid);
  midRows.forEach((row, i) => {
    const sepClass = i === 0 ? ' block-sep' : '';
    h += '<tr>';
    h += '<td class="col-left' + sepClass + '">' + tmCell(row.left) + (row.leftMarker ? (i === 5 ? '<span class="tm-num-br">' + tmCell(row.leftMarker) + '</span>' : tmMkr(row.leftMarker,'left')) : '') + '</td>';
    if (i === 0) {
      h += '<td class="tm-center-cell' + sepClass + '" rowspan="7">' + gridHtml + '</td>';
    }
    h += '<td class="col-right' + sepClass + '">' + tmCell(row.right) + (row.rightMarker ? (i === 5 ? '<span class="tm-num-br">' + tmCell(row.rightMarker) + '</span>' : tmMkr(row.rightMarker,'right')) : '') + '</td>';
    h += '</tr>';
  });
  const f1 = B[1].footer;
  h += '<tr>';
  h += '<td class="tm-footer-row">' + (f1.leftLabel ? '<span class="tm-lbl-bl">' + tmCell(f1.leftLabel) + '</span>' : '') + '</td>';
  h += '<td class="tm-footer-row">' + (f1.rightLabel ? '<span class="tm-lbl-bl">' + tmCell(f1.rightLabel) + '</span>' : '') + '</td>';
  h += '</tr>';

  // ===== บล็อกล่าง =====
  B[2].rows.forEach((row, i) => {
    const sepClass = i === 0 ? ' block-sep' : '';
    h += '<tr>';
    h += '<td class="col-left' + sepClass + '">' + tmCell(row.left) + (row.leftMarker ? tmMkr(row.leftMarker,'left') : '') + '</td>';
    h += '<td class="col-mid' + sepClass + '">' + tmCell(row.mid) + (row.midMarker ? tmMkr(row.midMarker,'right') : '') + '</td>';
    h += '<td class="col-right' + sepClass + '">' + tmCell(row.right) + (row.rightMarker ? tmMkr(row.rightMarker,'right') : '') + '</td>';
    h += '</tr>';
  });
  const f2 = B[2].footer;
  h += '<tr>';
  h += '<td class="tm-footer-row">' + (f2.rightLabel ? '<span class="tm-lbl-bl">' + tmCell(f2.rightLabel) + '</span>' : '') + (f2.left ? '<span class="tm-num-br">' + tmCell(f2.left) + '</span>' : '') + '</td>';
  h += '<td class="tm-footer-row">' + (f2.mid ? '<span class="tm-num-br">' + tmCell(f2.mid) + '</span>' : '') + '</td>';
  h += '<td class="tm-footer-row">' + (f2.right ? '<span class="tm-num-br">' + tmCell(f2.right) + '</span>' : '') + '</td>';
  h += '</tr>';

  h += '</tbody></table></div>';
  if (wrap) wrap.innerHTML = h;
}

`;
  content = content.substring(0, jsStartIdx) + NEW_JS + content.substring(jsEndIdx);
  console.log('JS patched OK');
} else {
  console.log('JS target not found! jsStartIdx:', jsStartIdx, 'jsEndIdx:', jsEndIdx);
}

fs.writeFileSync(filePath, content, 'utf8');
console.log('File saved successfully.');
