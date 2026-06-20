
// ═══════════════════════════════════════════════════════
//  LOOKUP TABLES — verified against Excel BAZI_Date_Selection168_V1
// ═══════════════════════════════════════════════════════
const H={
  1:{th:'กะ',   el:'ไม้+',cn:'甲',c:'ew'},  2:{th:'อิก',  el:'ไม้-',cn:'乙',c:'ew2'},
  3:{th:'เปี้ย',el:'ไฟ+',cn:'丙',c:'ef'},  4:{th:'เต็ง', el:'ไฟ-',cn:'丁',c:'ef2'},
  5:{th:'โบ่ว', el:'ดิน+',cn:'戊',c:'ed'}, 6:{th:'กี้',  el:'ดิน-',cn:'己',c:'ed2'},
  7:{th:'แก',   el:'ทอง+',cn:'庚',c:'em'}, 8:{th:'ซิง',  el:'ทอง-',cn:'辛',c:'em2'},
  9:{th:'หยิ่ม',el:'น้ำ+',cn:'壬',c:'en'},10:{th:'กุ่ย', el:'น้ำ-',cn:'癸',c:'en2'}
};
const E={
  1:{th:'จื้อ', an:'ชวด',  el:'น้ำ+',cn:'子',c:'en'},
  2:{th:'ทิ่ว', an:'ฉลู',  el:'ดิน-',cn:'丑',c:'ed2'},
  3:{th:'อิ๊ง', an:'ขาล',  el:'ไม้+',cn:'寅',c:'ew'},
  4:{th:'เบ้า', an:'เถาะ', el:'ไม้-',cn:'卯',c:'ew2'},
  5:{th:'ซิ้ง', an:'มะโรง',el:'ดิน+',cn:'辰',c:'ed'},
  6:{th:'จี๋',  an:'มะเส็ง',el:'ไฟ-',cn:'巳',c:'ef2'},
  7:{th:'โง่ว', an:'มะเมีย',el:'ไฟ+',cn:'午',c:'ef'},
  8:{th:'บี่',  an:'มะแม', el:'ดิน-',cn:'未',c:'ed2'},
  9:{th:'ซิม',  an:'วอก',  el:'ทอง+',cn:'申',c:'em'},
 10:{th:'อิ้ว', an:'ระกา', el:'ทอง-',cn:'酉',c:'em2'},
 11:{th:'สุก',  an:'จอ',   el:'ดิน+',cn:'戌',c:'ed'},
 12:{th:'ไห',   an:'กุน',  el:'น้ำ-',cn:'亥',c:'en2'}
};

// Hidden stems [main, 2nd, 3rd]
const HIDDEN={
  1:[9],2:[6,1,7],3:[5,3,7],4:[2],5:[5,2,8],6:[4,3,1],
  7:[4],8:[6,2,4],9:[7,9,5],10:[8],11:[5,7,3],12:[9,5]
};

// Ten Gods matrix[dayStem-1][otherStem-1]
const JM=[
  [1,2,3,4,5,6,7,8,9,10],
  [2,1,4,3,6,5,8,7,10,9],
  [9,10,1,2,3,4,5,6,7,8],
  [10,9,2,1,4,3,6,5,8,7],
  [7,8,9,10,1,2,3,4,5,6],
  [8,7,10,9,2,1,4,3,6,5],
  [5,6,7,8,9,10,1,2,3,4],
  [6,5,8,7,10,9,2,1,4,3],
  [3,4,5,6,7,8,9,10,1,2],
  [4,3,6,5,8,7,10,9,2,1]
];
const JN={
  1:{th:'ปี่เกียง',  cn:'比肩'},2:{th:'เกี๊ยบไช้',cn:'刧財'},
  3:{th:'เจียะซิ้ง', cn:'食神'},4:{th:'เซียกัว',   cn:'伤官'},
  5:{th:'เพียงใช้',  cn:'偏財'},6:{th:'เจี้ยไช้',  cn:'正財'},
  7:{th:'ชิ๊กสัวะ',  cn:'七杀'},8:{th:'เจี้ยกัว',  cn:'正官'},
  9:{th:'เพียงอิ่ง', cn:'偏印'},10:{th:'เจี้ยอิ่ง',cn:'正印'}
};
const SS={
  1:'长生 เกิด',2:'沐浴 อาบน้ำ',3:'冠带 หนุ่มสาว',4:'临官 ทำงาน',
  5:'帝旺 รุ่งเรือง',6:'衰 เสื่อม',7:'病 เสื่อม',8:'死 ตาย',
  9:'墓 สุสาน',10:'绝 สูญสิ้น',11:'胎 ตั้งครรภ์',12:'养 เติบโต'
};

// Lamda boundaries per calendar month
// Lamda boundary per calendar month [big, small]
// L values are in 0.79–1.79 range (months 1–2 = 0.7x, months 3–12 = 1.0x–1.7x)
// BUG FIX: month 3 small = 1.0 exactly (360°/360 = 1.0, NOT 360/360+1 = 2.0)
const LREF=[
  [285/360,    300/360  ],  // mo 1  big=0.7917 sml=0.8333
  [315/360,    330/360  ],  // mo 2  big=0.8750 sml=0.9167
  [345/360,    1.0      ],  // mo 3  big=0.9583 sml=1.0000  ← fixed
  [15/360+1,   30/360+1 ],  // mo 4  big=1.0417 sml=1.0833
  [45/360+1,   60/360+1 ],  // mo 5  big=1.1250 sml=1.1667
  [75/360+1,   90/360+1 ],  // mo 6  big=1.2083 sml=1.2500
  [105/360+1, 120/360+1 ],  // mo 7  big=1.2917 sml=1.3333
  [135/360+1, 150/360+1 ],  // mo 8  big=1.3750 sml=1.4167
  [165/360+1, 180/360+1 ],  // mo 9  big=1.4583 sml=1.5000
  [195/360+1, 210/360+1 ],  // mo 10 big=1.5417 sml=1.5833
  [225/360+1, 240/360+1 ],  // mo 11 big=1.6250 sml=1.6667
  [255/360+1, 270/360+1 ],  // mo 12 big=1.7083 sml=1.7500
];

// Hour → ยาม lookup (from Cal8Yee B66:C89)
const YMAP={0:1,1:2,2:2,3:3,4:3,5:4,6:4,7:5,8:5,9:6,10:6,11:7,12:7,
            13:8,14:8,15:9,16:9,17:10,18:10,19:11,20:11,21:12,22:12,23:1};

// ═══════════════════════════════════════════════════════
//  MATH HELPERS
// ═══════════════════════════════════════════════════════
const EXCEL_BASE=2415018.5, JD_1990=2447891.5, DPLU=1/0.00281547942;
const rad=d=>d*Math.PI/180;
function m10(x){return((x-1)%10+10)%10+1}
function m12(x){return((x-1)%12+12)%12+1}

function toJD(y,m,d,h=12,mn=0){
  let d2=d+h/24+mn/1440; if(m<=2){y--;m+=12;}
  const A=Math.trunc(y/100),B=2-A+Math.trunc(A/4);
  return Math.trunc(365.25*(y+4716))+Math.trunc(30.6001*(m+1))+d2+B-1524.5;
}

// Compute L = (Ec+N+279.403303)/360 matching Excel L122/L61
// H = excel_serial + EXCEL_BASE - JD_1990 - TIME(6,18,0)
function computeL(excelSerial){
  const dayNum = excelSerial + EXCEL_BASE - JD_1990 - (6/24+18/1440);
  const T=(JD_1990-2415020)/36524.25;
  const Eg=(279.6966778+36000.76892*T+0.0003025*T*T)%360;
  const Wg=(281.2208444+1.719175*T+0.000452778*T*T)%360;
  const e =0.01675104-0.0000418*T-0.000000126*T*T;
  const N =((360/365.242191*dayNum)%360+360)%360;
  const Mo=((N+Eg-Wg)%360+360)%360;
  const Ec=(360/Math.PI)*e*Math.sin(rad(Mo));
  return (Ec+N+279.403303)/360;
}

// JD ↔ Excel serial
const jd2ex=jd=>jd-EXCEL_BASE;
const ex2jd=s=>s+EXCEL_BASE;

function jd2date(jd){
  const z=Math.floor(jd+.5),f=(jd+.5)-z;
  let A=z; if(z>=2299161){const a=Math.floor((z-1867216.25)/36524.25);A=z+1+a-Math.floor(a/4);}
  const B=A+1524,C=Math.floor((B-122.1)/365.25),D=Math.floor(365.25*C);
  const E2=Math.floor((B-D)/30.6001);
  const dy=B-D-Math.floor(30.6001*E2);
  const mo=E2<14?E2-1:E2-13,yr=mo>2?C-4716:C-4715;
  const mn2=Math.round((jd+.5-Math.floor(jd+.5))*1440);
  return{y:yr,mo,d:dy,h:Math.floor(mn2/60)%24,m:mn2%60};
}
function fmtDate(jd){
  const d=jd2date(jd);
  const M=['ม.ค.','ก.พ.','มี.ค.','เม.ย.','พ.ค.','มิ.ย.','ก.ค.','ส.ค.','ก.ย.','ต.ค.','พ.ย.','ธ.ค.'];
  return`${d.d} ${M[d.mo-1]} ${d.y+543} ${String(d.h).padStart(2,'0')}:${String(d.m).padStart(2,'0')} น.`;
}

// ═══════════════════════════════════════════════════════
//  FOUR PILLARS
// ═══════════════════════════════════════════════════════
function yearPillar(yr,L){
  const lichun=LREF[1][0]; // 立春 Lichun = 315/360 = 0.875 — BaZi year change point
  const adjY=L>=lichun?yr:yr-1;
  return{stem:m10(adjY-3),branch:m12(adjY+9),adjY};
}

function monthPillar(calMon,L,yearStem){
  const[lamBig]=LREF[calMon-1];
  const E124=L>=lamBig?0:-1;
  const E125=calMon+E124-1;  // solar month -1
  const branch=m12(E125+2);
  const ye=yearStem>5?yearStem-5:yearStem;
  const j123=[3,5,7,9,1][ye-1];
  const brAdj=branch-3<0?12+branch-3:branch-3;
  return{stem:m10(brAdj+j123),branch,solarMonth:E125};
}

function dayPillar(yr,mo,d,h){
  // Use Math.floor (not Math.round) — jd noon can be exactly .5 which JS rounds up wrongly
  const ex=Math.floor(jd2ex(toJD(yr,mo,d,12,0)));
  const t=h>=23?1:0;
  const O=ex-4384+t;
  const br=(O%12+12)%12+1;
  return{stem:m10(O+3),branch:br===0?12:br};
}

function hourPillar(dayStem,h){
  const branch=h>=23||h<1?1:h<3?2:h<5?3:h<7?4:h<9?5:h<11?6:h<13?7:h<15?8:h<17?9:h<19?10:h<21?11:12;
  const yam=YMAP[h];
  const de=dayStem>5?dayStem-5:dayStem;
  const S125=[1,3,5,7,9][de-1];
  return{stem:m10(S125+yam-1),branch,yam};
}

// Siangsae (12 growth phases) — verified against Excel Cal8Yee
// Key: always compare dayStem vs targetBranch
// Starting branch (長生/Growth) per heavenly stem:
//   甲1=亥12, 乙2=午7, 丙3=寅3, 丁4=酉10
//   戊5=寅3,  己6=酉10, 庚7=巳6, 辛8=子1, 壬9=申9, 癸10=卯4
const SS_START={1:12,2:7,3:3,4:10,5:3,6:10,7:6,8:1,9:9,10:4};
function siangsae(dayStem,branch){
  const s=SS_START[dayStem];
  return((branch-s+12)%12)+1;
}

// Ten Gods helpers
function js(ds,os){return JM[ds-1][os-1]||null;}
function jsE(ds,br){const m=HIDDEN[br][0];return m?js(ds,m):null;}
function jsStr(i){return i?JN[i].th:'';}

// ═══════════════════════════════════════════════════════
//  VAYJORN 大運
// ═══════════════════════════════════════════════════════
function vayjorn(mStem,mBranch,dir,startAge,n=8){
  const out=[];
  let s=mStem,b=mBranch;
  for(let i=0;i<n;i++){
    s=m10(s+dir);b=m12(b+dir);
    out.push({stem:s,branch:b,age:Math.round(startAge)+i*10});
  }
  return out;
}

// ═══════════════════════════════════════════════════════
//  MAIN CALCULATE
// ═══════════════════════════════════════════════════════
function calc(){
  const day=+document.getElementById('dd').value;
  const mon=+document.getElementById('mm').value;
  const yrBE=+document.getElementById('yy').value;
  const yr =yrBE-543;
  const hr =+document.getElementById('hh').value;
  const mi =+document.getElementById('mn').value;
  const gdr=+document.getElementById('gd').value;

  document.getElementById('err').style.display='none';
  if(!day||!mon||!yr||isNaN(hr)||isNaN(mi)){
    document.getElementById('err').textContent='กรุณากรอกข้อมูลให้ครบ';
    document.getElementById('err').style.display='block';
    document.getElementById('results').style.display='block';
    return;
  }

  try{
    const jdBirth=toJD(yr,mon,day,hr,mi);
    const exBirth=jd2ex(jdBirth);
    const L=computeL(exBirth);

    // Month 1 excel serial for sart reference
    const ex_m1=jd2ex(toJD(yr,mon,1,0,0));
    const L_m1=computeL(ex_m1);
    const[lamBig,lamSml]=LREF[mon-1];

    // Sart dates
    const sartBigEx=DPLU*(lamBig-L_m1)+ex_m1;
    const sartSmlEx=DPLU*(lamSml-L_m1)+ex_m1;
    const sartBigJD=ex2jd(sartBigEx);
    const sartSmlJD=ex2jd(sartSmlEx);

    // Four pillars
    const yp=yearPillar(yr,L);
    const mp=monthPillar(mon,L,yp.stem);
    const dp=dayPillar(yr,mon,day,hr);
    const hp=hourPillar(dp.stem,hr);

    // Vayjorn direction
    const yearYin=yp.stem%2===0;
    const dir=gdr===1?(yearYin?-1:1):(yearYin?1:-1);

    // Vayjorn start age calculation
    const prevJie = (Math.floor((L * 360 - 15) / 30) * 30 + 15) / 360;
    const nextJie = prevJie + 30 / 360;
    const targetJieLam = dir === 1 ? nextJie : prevJie;
    
    let targetJieEx = exBirth;
    for(let i = 0; i < 6; i++) {
      let currentL = computeL(targetJieEx);
      let diff = targetJieLam - currentL;
      diff = diff - Math.round(diff); // Handle 360-degree wrap-around discontinuity
      targetJieEx += diff * 365.2422;
    }
    
    const diffDays = Math.abs(targetJieEx - exBirth);
    const startAge = diffDays / 3;

    // Vayjorn periods
    const periods=vayjorn(mp.stem,mp.branch,dir,startAge);
    const nowBE=new Date().getFullYear()+543;
    const birthBE=yr+543;

    // ── RENDER ──
    const PS=[
      {lbl:'เสาปี 年',  ...yp},
      {lbl:'เสาเดือน 月',...mp},
      {lbl:'เสาวัน 日',  ...dp},
      {lbl:'เสาเวลา 時', ...hp},
    ];

    let html='';

    // ─ Pillar chart ─ (display order: Hour, Day, Month, Year — left to right)
    html+=`<div class="sec">四柱命盤 สี่เสาดวงชะตา</div><div class="pgrid-wrap"><div class="pgrid">`;
    [PS[3],PS[2],PS[1],PS[0]].forEach((p,i)=>{
    const origIdx=[3,2,1,0][i];
      const hs=H[p.stem],eb=E[p.branch];
      const hidStems=HIDDEN[p.branch].filter(Boolean);
      const jsH=origIdx===2?null:js(dp.stem,p.stem);
      const jsEb=jsE(dp.stem,p.branch);
      const ss=siangsae(dp.stem,p.branch);
      const hidRows=hidStems.map(s=>{
        const hv=H[s]; if(!hv) return '';
        const jsi=origIdx===2?null:js(dp.stem,s);
        return `<div class="hid-row ${hv.c}"><span style="font-size:.9rem;line-height:1.1">${hv.cn}</span><span style="font-size:.62rem;margin-left:3px">${hv.th}</span>${jsi?`<span style="font-size:.58rem;opacity:.5;margin-left:3px">${JN[jsi].th}</span>`:''}</div>`;
      }).join('');
      html+=`<div class="pillar">
        <div class="pl-hd">${p.lbl}</div>
        <div class="pl-hs">
          <span class="cn ${hs.c}">${hs.cn}</span>
          <span class="th">${hs.th}</span>
          <span class="el">${hs.el}</span>
        </div>
        <div class="pl-eb">
          <span class="cn ${eb.c}">${eb.cn}</span>
          <span class="th">${eb.th} · ${eb.an}</span>
          <span class="an">${eb.el}</span>
          <div style="border-top:1px dashed #ccc;margin-top:8px;padding-top:7px;text-align:left;padding-left:4px">
            ${hidRows||'<span style="font-size:.6rem;opacity:.3">—</span>'}
          </div>
          <div style="font-size:.57rem;opacity:.4;margin-top:5px;text-align:center">${SS[ss]||''}</div>
        </div>
        <div class="pl-js">
          ${jsH?JN[jsH].th:'ตัวเอง'}
          ${jsEb?` / ${JN[jsEb].th}`:''}
        </div>
      </div>`;
    });
    html+=`</div>`;


    // ─ Transit pillars (ดวงจร) ─
    const now=new Date();
    const tYr=now.getFullYear(),tMon=now.getMonth()+1,tDay=now.getDate();
    const tHr=now.getHours(),tMi=now.getMinutes();
    const tJD=toJD(tYr,tMon,tDay,tHr,tMi);
    const tEx=jd2ex(tJD);
    const tL=computeL(tEx);
    const tYp=yearPillar(tYr,tL);
    const tMp=monthPillar(tMon,tL,tYp.stem);
    const tDp=dayPillar(tYr,tMon,tDay,tHr);
    const tHp=hourPillar(dp.stem,tHr);
    (function(){try{
      const TPS=[
        {lbl:'ยามจร 時',...tHp},
        {lbl:'วันจร 日',...tDp},
        {lbl:'เดือนจร 月',...tMp},
        {lbl:'ปีจร 年',...tYp},
      ];
      const nowStr=tDay+'/'+tMon+'/'+(tYr+543)+' '+String(tHr).padStart(2,'0')+':'+String(tMi).padStart(2,'0')+' น.';
      html+='<div class="sec">流年流月 ดวงจร · '+nowStr+'</div><div class="pgrid-wrap"><div class="pgrid">';
      TPS.forEach(function(p,pi){
        const hs=H[p.stem],eb=E[p.branch];
        const hidStems=HIDDEN[p.branch].filter(Boolean);
        const jsH=pi===1?null:js(dp.stem,p.stem);
        const jsEb=jsE(dp.stem,p.branch);
        const ss=siangsae(dp.stem,p.branch);
        const hidRows=hidStems.map(function(s){
          const hv=H[s]; if(!hv) return '';
          const jsi=pi===1?null:js(dp.stem,s);
          return '<div class="hid-row '+hv.c+'"><span style="font-size:.9rem;line-height:1.1">'+hv.cn+'</span><span style="font-size:.62rem;margin-left:3px">'+hv.th+'</span>'+(jsi?'<span style="font-size:.58rem;opacity:.5;margin-left:3px">'+JN[jsi].th+'</span>':'')+'</div>';
        }).join('');
        html+='<div class="pillar">'
          +'<div class="pl-hd">'+p.lbl+'</div>'
          +'<div class="pl-hs"><span class="cn '+hs.c+'">'+hs.cn+'</span><span class="th">'+hs.th+'</span><span class="el">'+hs.el+'</span></div>'
          +'<div class="pl-eb"><span class="cn '+eb.c+'">'+eb.cn+'</span><span class="th">'+eb.th+' · '+eb.an+'</span><span class="an">'+eb.el+'</span>'
          +'<div style="border-top:1px dashed #ccc;margin-top:8px;padding-top:7px;text-align:left;padding-left:4px">'+(hidRows||'<span style="font-size:.6rem;opacity:.3">—</span>')+'</div>'
          +'<div style="font-size:.57rem;opacity:.4;margin-top:5px;text-align:center">'+(SS[ss]||'')+'</div></div>'
          +'<div class="pl-js">'+(jsH?JN[jsH].th:'ตัวเอง')+(jsEb?' / '+JN[jsEb].th:'')+'</div>'
          +'</div>';
      });
      html+='</div></div>';
    }catch(e){console.warn('Transit render error:',e);}
    })();

    // ─ Info cards ─
    html+=`<div class="info-grid">`;
    html+=`<div class="icard"><h4>ข้อมูลเกิด</h4>
      <div class="irow"><span class="ilbl">วันเกิด</span><span class="ival">${day}/${mon}/${yr+543} พศ.</span></div>
      <div class="irow"><span class="ilbl">เวลา</span><span class="ival">${String(hr).padStart(2,'0')}:${String(mi).padStart(2,'0')} น.</span></div>
      <div class="irow"><span class="ilbl">เพศ</span><span class="ival">${gdr===1?'ชาย':'หญิง'}</span></div>
      <div class="irow"><span class="ilbl">ปีกะจื้อ</span><span class="ival hi">${H[yp.stem].th}${E[yp.branch].th} (${yp.adjY})</span></div>
    </div>`;
    html+=`<div class="icard"><h4>สาร์ทใหญ่ · สาร์ทเล็ก</h4>
      <div class="irow"><span class="ilbl">สาร์ทใหญ่</span><span class="ival hi" style="font-size:.7rem">${fmtDate(sartBigJD)}</span></div>
      <div class="irow"><span class="ilbl">สาร์ทเล็ก</span><span class="ival" style="font-size:.7rem">${fmtDate(sartSmlJD)}</span></div>
      <div class="irow"><span class="ilbl">วัยจรเริ่ม</span><span class="ival hi">อายุ ${startAge.toFixed(1)} ปี</span></div>
      <div class="irow"><span class="ilbl">ทิศวัยจร</span><span class="ival">${dir===1?'ไปหน้า 順':'ถอยหลัง 逆'}</span></div>
    </div>`;
    html+=`<div class="icard"><h4>ราศีวัน · ธาตุ</h4>
      <div class="irow"><span class="ilbl">ราศีวัน</span><span class="ival hi">${H[dp.stem].th} ${H[dp.stem].cn}</span></div>
      <div class="irow"><span class="ilbl">ธาตุ</span><span class="ival">${H[dp.stem].el}</span></div>
      <div class="irow"><span class="ilbl">เซี่ยงแซวัน</span><span class="ival">${SS[siangsae(dp.stem,dp.branch)]}</span></div>
      <div class="irow"><span class="ilbl">ยาม</span><span class="ival">${E[hp.branch].th} (ยาม${hp.yam})</span></div>
    </div>`;
    html+=`</div>`;// info-grid

    // ─ Zodiac reference table ─
    (function(){try{
      var ZR=[
        {label:'ฤดูหนาว 冬',items:[
          {br:12, cn:'亥',th:'ไห',an:'กุน', bg:'#dbeafe',tc:'#000000',sp:false},
          {br:1, cn:'子',th:'จื้อ',an:'ชวด', bg:'#dbeafe',tc:'#000000',sp:false},
          {br:2, cn:'丑',th:'ทิ่ว',an:'ฉลู', bg:'#fef9c3',tc:'#000000',sp:true},
        ]},
        {label:'ฤดูใบไม้ผลิ 春',items:[
          {br:3, cn:'寅',th:'อิ๊ง',an:'ขาล', bg:'#dcfce3',tc:'#000000',sp:false},
          {br:4, cn:'卯',th:'เบ้า',an:'เถาะ', bg:'#dcfce3',tc:'#000000',sp:false},
          {br:5, cn:'辰',th:'ซิ้ง',an:'มะโรง', bg:'#fef9c3',tc:'#000000',sp:true},
        ]},
        {label:'ฤดูร้อน 夏',items:[
          {br:6, cn:'巳',th:'จี๋',an:'มะเส็ง', bg:'#fce7f3',tc:'#000000',sp:false},
          {br:7, cn:'午',th:'โง่ว',an:'มะเมีย', bg:'#fce7f3',tc:'#000000',sp:false},
          {br:8, cn:'未',th:'บี่',an:'มะแม', bg:'#fef9c3',tc:'#000000',sp:true},
        ]},
        {label:'ฤดูใบไม้ร่วง 秋',items:[
          {br:9, cn:'申',th:'ซิม',an:'วอก', bg:'#f3f4f6',tc:'#000000',sp:false},
          {br:10, cn:'酉',th:'อิ้ว',an:'ระกา', bg:'#f3f4f6',tc:'#000000',sp:false},
          {br:11, cn:'戌',th:'สุก',an:'จอ', bg:'#fef9c3',tc:'#000000',sp:true},
        ]},
      ];
      html+='<div class="sec">十二地支 นักษัตร · ฤดูกาล</div><div class="zodiac-wrap">';
      // Collect all labels for each branch
      var brLabels={};
      function addLabel(br,txt,clr){
        if(!brLabels[br]) brLabels[br]=[];
        brLabels[br].push({txt:txt,clr:clr});
      }
      // Natal (ชะตา)
      addLabel(yp.branch, '★ ปีชะตา', '#000');
      addLabel(mp.branch, '◆ เดือนชะตา', '#000');
      addLabel(dp.branch, '■ วันชะตา', '#000');
      addLabel(hp.branch, '● ยามชะตา', '#000');
      // Transit (จร)
      addLabel(tYp.branch, '▶ ปีจร', '#000');
      addLabel(tMp.branch, '▶ เดือนจร', '#000');
      // Current vayjorn (วัยจร)
      var curVay=periods.find(function(p){var sy=birthBE+p.age,ey=birthBE+p.age+9;return nowBE>=sy&&nowBE<=ey;})||periods[0];
      if(curVay) addLabel(curVay.branch, '◉ วัยจร', '#000');

      ZR.forEach(function(row){
        html+='<div class="zodiac-row-label">'+row.label+'</div><div class="zodiac-grid">';
        row.items.forEach(function(z){
          var labs=brLabels[z.br]||[];
          // Determine border/shadow priority: natal > transit > vayjorn > none
          var hasNatal=labs.some(function(l){return l.clr==='#ffd700';});
          var hasTransit=labs.some(function(l){return l.clr==='#a8d4f8';});
          var hasVay=labs.some(function(l){return l.clr==='#f8aed0';});
          var border=hasNatal?'2px solid #000':hasTransit?'2px dashed #000':hasVay?'1px solid #000':'1px solid #ddd';
          var shadow='none';
          var badge=labs.map(function(l){return '<span class="zbadge" style="color:'+l.clr+';font-size:.52rem;display:block;margin-top:1px">'+l.txt+'</span>';}).join('');
          html+='<div class="zod" style="background:'+z.bg+';color:'+z.tc+';border:'+border+';box-shadow:'+shadow+'">'
            +'<span class="zcn" style="color:'+z.tc+'">'+z.cn+'</span>'
            +'<span class="zth" style="color:'+z.tc+'">'+z.th+'</span>'
            +'<span class="zan" style="color:'+z.tc+'">'+z.an+'</span>'
            +badge
            +'</div>';
        });
        html+='</div>';
      });
      html+='</div></div>';
    }catch(e){console.warn('Transit render error:',e);}
    })();



    // ─ Vayjorn table ─
    html+=`<div class="sec">大運 ถนนสิบปี · วัยจร</div>
    <div class="vt-wrap"><table class="vt">
    <thead><tr>
      <th>ช่วงอายุ</th>
      <th>ราศีฟ้า</th>
      <th>ราศีดิน</th>
      <th>จับซิ้งบน<br><small style="opacity:.6">Heaven God</small></th>
      <th>จับซิ้งล่าง<br><small style="opacity:.6">Earth God</small></th>
      <th>เซี่ยงแซ<br><small style="opacity:.6">12 Phase</small></th>
      <th>ธาตุ</th>
    </tr></thead><tbody>`;

    periods.forEach(p=>{
      const hs=H[p.stem],eb=E[p.branch];
      const jsH=js(dp.stem,p.stem);
      const jsEb=jsE(dp.stem,p.branch);
      const ss=siangsae(dp.stem,p.branch);
      const endAge=p.age+9;
      const sy=birthBE+p.age, ey=birthBE+endAge;
      const cur=nowBE>=sy&&nowBE<=ey;
      html+=`<tr${cur?' class="now"':''}>
        <td><span class="vt-age">${p.age}–${endAge}</span><span class="vt-yr">${sy}–${ey} พศ.${cur?' ◀ ปัจจุบัน':''}</span></td>
        <td><span class="vt-cn ${hs.c}">${hs.cn}</span><span class="vt-th">${hs.th}</span></td>
        <td><span class="vt-cn ${eb.c}">${eb.cn}</span><span class="vt-th">${eb.th} ${eb.an}</span></td>
        <td class="vt-js">${jsH?`${JN[jsH].th}<span class="vt-jscn">${JN[jsH].cn}</span>`:'—'}</td>
        <td class="vt-js">${jsEb?`${JN[jsEb].th}<span class="vt-jscn">${JN[jsEb].cn}</span>`:'—'}</td>
        <td class="vt-js" style="font-size:.68rem">${SS[ss]||'—'}</td>
        <td style="font-size:.72rem">${hs.el}</td>
      </tr>`;
    });

    html+=`</tbody></table></div>`;

    document.getElementById('out').innerHTML=html;
    // Store prompts globally for copy
    document.getElementById('results').style.display='block';
    document.getElementById('results').scrollIntoView({behavior:'smooth',block:'start'});

  }catch(e){
    document.getElementById('err').textContent='Error: '+e.message;
    document.getElementById('err').style.display='block';
    document.getElementById('results').style.display='block';
    console.error(e);
  }
}

