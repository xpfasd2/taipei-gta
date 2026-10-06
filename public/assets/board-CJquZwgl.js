import{ft as e}from"./engine-BOd1V8yf.js";import{at as t,it as n,nt as r,rt as i,tt as a}from"./game-DyduHwGv.js";var o={departures:{zh:`出境航班`,en:`DEPARTURES`},time:{zh:`時間`,en:`Time`},flight:{zh:`航班`,en:`Flight`},dest:{zh:`目的地`,en:`Destination`},gate:{zh:`登機門`,en:`Gate`},remark:{zh:`備註`,en:`Remarks`},checkin:{zh:`報到中`,en:`CHECK-IN`},onTime:{zh:`準時`,en:`ON TIME`},tomorrow:{zh:`明日`,en:`TOMORROW`},fare:{zh:`機票`,en:`Fare`},free:{zh:`首航優惠 免費`,en:`Inaugural flight: FREE`},cash:{zh:`帶多少現金`,en:`Cash to take`},all:{zh:`全部`,en:`All`},half:{zh:`一半`,en:`Half`},none:{zh:`不帶`,en:`None`},rate:{zh:`匯率`,en:`Rate`},arrive:{zh:`抵達`,en:`Arrives`},leaves:{zh:`起飛`,en:`Departs`},wallet:{zh:`錢包`,en:`wallet`},firstVisit:{zh:`首次前往 · 抵達後故事從頭開始`,en:`First visit · your story there starts on arrival`},stays:{zh:`留在本地錢包`,en:`stays in this wallet`},checkIn:{zh:`辦理登機`,en:`Check in`},leave:{zh:`離開`,en:`Leave`},board:{zh:`登機`,en:`Board`},back:{zh:`返回`,en:`Back`},boarding:{zh:`登機證`,en:`BOARDING PASS`},passenger:{zh:`旅客`,en:`Passenger`},seat:{zh:`座位`,en:`Seat`},boardTime:{zh:`登機時間`,en:`Boarding`},short:{zh:`現金不足以支付機票`,en:`Not enough cash for the fare`},economy:{zh:`經濟艙`,en:`ECONOMY`},cashLabel:{zh:`隨身現金`,en:`Cash carried`},hint:{zh:`←/→ 選擇現金 · Enter 確認 · Esc 離開`,en:`←/→ cash · Enter confirm · Esc leave`}},s=!1;function c(){if(s)return;s=!0;let t=document.createElement(`style`);t.id=`trav-board-css`;let n=`"Avenir Next Condensed","Bahnschrift","DIN Condensed","Roboto Condensed","Arial Narrow",sans-serif`,r=`"SF Mono","Menlo","Consolas","DejaVu Sans Mono",monospace`;t.textContent=`
.trb-root{position:fixed;inset:0;z-index:2147482000;display:flex;align-items:center;justify-content:center;font-family:${e};color:#f2f2ee;
  -webkit-user-select:none;user-select:none;touch-action:manipulation;animation:trb-in .26s cubic-bezier(.2,.8,.2,1)}
.trb-root.out{animation:trb-out .2s ease-in forwards}
@keyframes trb-in{from{opacity:0}to{opacity:1}} @keyframes trb-out{to{opacity:0}}
.trb-back{position:absolute;inset:0;background:radial-gradient(ellipse at 50% 40%,rgba(8,12,20,.6),rgba(3,4,8,.9));-webkit-backdrop-filter:blur(3px);backdrop-filter:blur(3px)}
.trb-panel{position:relative;width:min(1120px,96vw);max-height:94vh;max-height:94dvh;display:flex;flex-direction:column;border-radius:14px;overflow:hidden;background:#101318;
  box-shadow:0 30px 80px rgba(0,0,0,.6),0 0 0 1px rgba(255,255,255,.07);animation:trb-pop .3s cubic-bezier(.2,.9,.25,1.1)}
@keyframes trb-pop{from{transform:translateY(16px) scale(.975)}to{transform:none}}
.trb-head{display:flex;align-items:center;gap:16px;padding:12px 18px;background:#1a1e25;border-bottom:3px solid #f5c400}
.trb-head .ic{width:34px;height:34px;flex:none;border-radius:8px;background:#f5c400;color:#14161b;display:grid;place-items:center;font-size:20px;font-weight:900}
.trb-title{font-weight:900;font-size:20px;letter-spacing:.08em}
.trb-sub{font:700 11px ${n};letter-spacing:.2em;opacity:.65;text-transform:uppercase}
.trb-clock{margin-left:auto;text-align:right;font:800 26px ${r};color:#f5c400;letter-spacing:.04em}
.trb-clock small{display:block;font:600 11px ${e};color:#c8c8c0;letter-spacing:.06em}
.trb-close{appearance:none;border:0;background:#ffffff14;color:#fff;width:36px;height:36px;border-radius:50%;font-size:19px;cursor:pointer;flex:none}
.trb-body{display:flex;min-height:0;flex:1}
.trb-fids{flex:1.35;min-width:0;padding:10px 12px 12px;background:#0b0d11;overflow:auto}
.trb-row{display:grid;grid-template-columns:4.2em 5.6em 1fr 3.4em 7.4em;align-items:center;gap:8px;padding:7px 10px;border-radius:6px;font:700 15px ${r};color:#ffd23a;letter-spacing:.04em}
.trb-row.h{font:700 11px ${e};color:#8d8f94;letter-spacing:.12em;padding-top:2px;padding-bottom:6px;border-bottom:1px solid #22262d;border-radius:0}
.trb-row .to{font:800 16px ${e};color:#f2f2ee;white-space:nowrap;overflow:hidden;text-overflow:ellipsis}
.trb-row .to small{font:700 11px ${n};color:#9a9ca2;letter-spacing:.12em;margin-left:.6em}
.trb-row .rm{font:800 12px ${e};letter-spacing:.06em;color:#9a9ca2}
.trb-row .rm.go{color:#5fe08f}
.trb-row .al{display:block;font:700 10px ${n};letter-spacing:.14em;color:#8d8f94}
.trb-row.other{opacity:.62}
.trb-row.sel{background:linear-gradient(90deg,rgba(245,196,0,.16),rgba(245,196,0,.05));box-shadow:inset 3px 0 0 #f5c400;cursor:pointer}
.trb-card{width:360px;flex:none;padding:16px 18px 14px;display:flex;flex-direction:column;gap:9px;background:#14171d;border-left:1px solid #22262d}
.trb-lab{font:800 11px ${n};letter-spacing:.22em;color:#8d8f94;text-transform:uppercase}
.trb-dest{font-weight:900;font-size:34px;line-height:1.02;letter-spacing:.04em}
.trb-dest small{display:block;font:700 14px ${n};letter-spacing:.18em;color:#a9abb1;margin-top:3px}
.trb-times{display:grid;grid-template-columns:1fr 1fr;gap:6px}
.trb-times div{background:#1b1f26;border-radius:8px;padding:7px 9px;font-size:11px;color:#9a9ca2}
.trb-times b{display:block;font:800 21px ${r};color:#f2f2ee;margin-top:2px}
.trb-fare{display:flex;align-items:baseline;justify-content:space-between;font-size:13px;color:#b9bbc0}
.trb-fare b{font:800 19px ${r};color:#f2f2ee}
.trb-fare s{color:#7a7c82;margin-right:.5em;font-family:${r}}
.trb-fare .promo{color:#5fe08f;font-weight:900}
.trb-presets{display:grid;grid-template-columns:repeat(3,1fr);gap:6px}
.trb-pre{appearance:none;border:1px solid #2f343d;background:#1b1f26;color:#e4e4df;border-radius:9px;padding:8px 4px;font:800 14px ${e};cursor:pointer}
.trb-pre.on{border-color:#f5c400;background:#2a2510;color:#ffe48a;box-shadow:0 0 0 1px #f5c400 inset}
.trb-xch{background:#1b1f26;border-radius:9px;padding:9px 10px;font-size:12.5px;line-height:1.55;color:#b9bbc0}
.trb-xch b{color:#f2f2ee;font-family:${r};font-size:15px}
.trb-xch .arrow{color:#f5c400;margin:0 .35em}
.trb-xch .dim{color:#7e8086}
.trb-warn{min-height:18px;font-size:13px;font-weight:800;color:#ff6b6b;text-align:center}
.trb-go{appearance:none;border:0;margin-top:auto;padding:13px 12px;border-radius:11px;cursor:pointer;color:#14161b;font-weight:900;font-size:19px;letter-spacing:.1em;
  background:linear-gradient(180deg,#ffd52e,#f0b400);box-shadow:0 6px 18px rgba(245,196,0,.3);display:flex;align-items:center;justify-content:center;gap:10px}
.trb-go:disabled{background:#3a3d44;color:#8d8f94;box-shadow:none;cursor:default}
.trb-go kbd,.trb-sec kbd{font:800 11px ${n};background:#0000001f;border-radius:5px;padding:2px 6px}
@media (pointer:coarse){.trb-go kbd{display:none}}
.trb-sec{appearance:none;border:1px solid #343841;background:transparent;color:#c9cbd0;border-radius:10px;padding:9px;font:800 14px ${e};cursor:pointer}
.trb-foot{display:flex;gap:16px;justify-content:center;flex-wrap:wrap;padding:7px 12px;background:#0b0d11;font-size:12px;color:#7e8086;border-top:1px solid #1d2128}
/* the boarding pass */
.trb-pass{display:none;padding:22px 22px 18px;flex-direction:column;align-items:center;gap:16px;background:#101318}
.trb-root.pass .trb-body,.trb-root.pass .trb-foot{display:none}
.trb-root.pass .trb-pass{display:flex}
.bp{position:relative;width:min(760px,90vw);display:flex;border-radius:14px;overflow:hidden;background:#fbfaf6;color:#17191d;box-shadow:0 18px 50px rgba(0,0,0,.5);animation:bp-print .55s cubic-bezier(.2,.9,.25,1)}
@keyframes bp-print{from{transform:translateY(-30px);clip-path:inset(0 0 100% 0)}to{transform:none;clip-path:inset(0 0 0 0)}}
.bp-main{flex:1;min-width:0;padding:14px 18px 12px}
.bp-top{display:flex;align-items:center;gap:10px;margin:-14px -18px 10px;padding:9px 18px;background:#c8102e;color:#fff}
.bp-top b{font-weight:900;letter-spacing:.12em;font-size:15px}
.bp-top span{margin-left:auto;font:800 12px ${n};letter-spacing:.24em}
.bp-route{display:flex;align-items:center;gap:14px;margin:4px 0 8px}
.bp-code{font:900 44px ${n};letter-spacing:.02em;line-height:1}
.bp-city{font-size:13px;font-weight:800;color:#555}
.bp-plane{flex:1;height:2px;background:repeating-linear-gradient(90deg,#bbb 0 6px,transparent 6px 11px);position:relative}
.bp-plane:after{content:'✈';position:absolute;left:50%;top:50%;transform:translate(-50%,-56%);font-size:22px;color:#c8102e;background:#fbfaf6;padding:0 6px}
.bp-grid{display:grid;grid-template-columns:repeat(4,1fr);gap:8px 12px}
.bp-grid div{font-size:10.5px;color:#777;letter-spacing:.06em}
.bp-grid b{display:block;font:800 17px ${r};color:#17191d;letter-spacing:.02em;margin-top:1px}
.bp-stub{width:178px;flex:none;padding:12px 14px;border-left:2px dashed #c9c6bc;display:flex;flex-direction:column;gap:6px;background:#f3f1ea}
.bp-stub div{font-size:10px;color:#777}
.bp-stub b{display:block;font:800 15px ${r};color:#17191d}
.bp-bar{margin-top:auto;height:38px;background:repeating-linear-gradient(90deg,#17191d 0 2px,transparent 2px 4px,#17191d 4px 5px,transparent 5px 8px,#17191d 8px 11px,transparent 11px 12px)}
.trb-acts{display:flex;gap:10px;width:min(760px,90vw)}
.trb-acts .trb-go{flex:1;margin:0}
.trb-acts .trb-sec{width:9em}
@media (max-width:820px),(max-height:560px){
  .trb-panel{position:absolute;inset:0;width:auto;max-height:none;border-radius:0}
  .trb-head{padding:max(6px,env(safe-area-inset-top)) max(10px,env(safe-area-inset-right)) 6px max(10px,env(safe-area-inset-left));gap:10px}
  .trb-sub,.trb-foot{display:none}
  .trb-title{font-size:16px} .trb-clock{font-size:19px}
  .trb-fids{display:none}
  .trb-card{width:auto;flex:1;border-left:0;padding:8px max(14px,env(safe-area-inset-right)) 0 max(14px,env(safe-area-inset-left));overflow:auto;gap:6px}
  .trb-dest{font-size:22px;display:flex;align-items:baseline;gap:.6em}
  .trb-dest small{margin-top:0;font-size:12px}
  .trb-times b{font-size:16px}
  .trb-times div{padding:5px 8px}
  .trb-pre{padding:6px 4px}
  .trb-xch{padding:6px 9px;line-height:1.4}
  .trb-warn{min-height:0}
  /* the check-in button stays on screen: pinned to the bottom of the scrolling card */
  .trb-card .trb-go{position:sticky;bottom:0;margin-top:auto;padding:10px;font-size:17px;box-shadow:0 -8px 14px #14171d}
  .trb-card .trb-sec{display:none}
  .bp-code{font-size:32px} .bp-stub{display:none}
  .trb-pass{padding:10px;overflow:auto}
}
`,document.head.appendChild(t)}var l=e=>e.replace(/[&<>"]/g,e=>({"&":`&amp;`,"<":`&lt;`,">":`&gt;`,'"':`&quot;`})[e]??e),u=class{host;root=null;data=null;choice=`all`;stage=`board`;resolve=null;keyH=e=>this.onKey(e);seat=`23A`;armedAt=0;constructor(e){this.host=e}get isOpen(){return!!this.root}t(e){return this.host.lang()===`en`?e.en:e.zh}alt(e){return this.host.lang()===`en`?e.zh:e.en}open(e){c(),this.close(!0),this.data=e,this.choice=`all`,this.stage=`board`,this.armedAt=performance.now()+350,this.seat=`${18+Math.floor(Math.random()*14)}${[`A`,`F`,`A`,`K`][Math.floor(Math.random()*4)]}`;let t=document.createElement(`div`);return t.className=`trb-root`,t.innerHTML=`<div class="trb-back"></div><div class="trb-panel"></div>`,document.body.appendChild(t),this.root=t,t.querySelector(`.trb-back`).addEventListener(`click`,()=>this.cancel()),window.addEventListener(`keydown`,this.keyH,!0),this.render(),new Promise(e=>this.resolve=e)}amounts(){let e=this.data,t=Math.max(0,e.wallet-e.fare),n=this.choice===`all`?t:this.choice===`half`?Math.floor(t/2):0,a=r[e.from].currency,o=r[e.to].currency,s=i(n,a,o);return{avail:t,cash:s.used,credit:s.out,keep:e.wallet-e.fare-s.used,fromC:a,toC:o}}render(){let e=this.root,i=this.data;if(!e||!i)return;let s=e.querySelector(`.trb-panel`),c=this.host.lang()!==`en`,u=r[i.to],d=r[i.from],f=this.amounts(),p=t(i.dep.min),m=t(i.dep.min+i.route.hours*60),h=!i.promo&&i.wallet<i.fare,g=i.blocked??(h?o.short:null),_=[];_.push(`<div class="trb-row h"><span>${this.t(o.time)}</span><span>${this.t(o.flight)}</span><span>${this.t(o.dest)}</span><span>${this.t(o.gate)}</span><span>${this.t(o.remark)}</span></div>`);let v=i.others.map(e=>({time:e.time,html:`<div class="trb-row other"><span>${t(e.time)}</span><span>${l(e.flight)}<span class="al">${l(this.t(e.airline))}</span></span><span class="to">${l(this.t(e.to))}<small>${l(this.alt(e.to))}</small></span><span>${l(e.gate)}</span><span class="rm">${l(this.t(e.remark))}</span></div>`}));v.push({time:i.dep.min+(i.dep.nextDay?1440:0),html:`<div class="trb-row sel" data-act="go"><span>${p}</span><span>${l(i.dep.flight)}<span class="al">${l(c?a.zh:a.en)}</span></span><span class="to">${l(this.t(u.name))}<small>${l(this.alt(u.name))} ${u.airport.code}</small></span><span>${l(i.route.gate)}</span><span class="rm go">${l(this.t(i.dep.nextDay?o.tomorrow:o.checkin))}</span></div>`}),v.sort((e,t)=>e.time-t.time);for(let e of v)_.push(e.html);let y=i.destWallet===null?`<div class="dim">${l(this.t(o.firstVisit))}</div>`:`<div class="dim">${l(this.t(u.name))}${c?``:` `}${l(this.t(o.wallet))} ${n(i.destWallet,f.toC)} → <b>${n(i.destWallet+f.credit,f.toC)}</b></div>`;s.innerHTML=`
      <div class="trb-head"><div class="ic">✈</div><div><div class="trb-title">${l(this.t(o.departures))}</div><div class="trb-sub">${l(this.t(i.counter))}</div></div>
        <div class="trb-clock">${t(i.hour*60)}<small>${l(this.t(d.name))}</small></div><button class="trb-close" type="button" data-act="cancel">✕</button></div>
      <div class="trb-body">
        <div class="trb-fids">${_.join(``)}</div>
        <div class="trb-card">
          <div class="trb-lab">${l(i.dep.flight)} · ${l(c?a.zh:a.en)}</div>
          <div class="trb-dest">${l(this.t(u.name))}<small>${l(this.alt(u.name))} · ${l(this.t(u.airport.name))} ${u.airport.code}</small></div>
          <div class="trb-times"><div>${l(this.t(o.leaves))}${i.dep.nextDay?` · ${l(this.t(o.tomorrow))}`:``}<b>${p}</b></div><div>${l(this.t(o.arrive))} (${l(this.t(u.name))})<b>${m}</b></div></div>
          <div class="trb-fare"><span>${l(this.t(o.fare))}</span>${i.promo?`<span><s>${n(i.route.fare,f.fromC)}</s><span class="promo">${l(this.t(o.free))}</span></span>`:`<b>${n(i.fare,f.fromC)}</b>`}</div>
          <div class="trb-lab">${l(this.t(o.cash))}</div>
          <div class="trb-presets">${[`all`,`half`,`none`].map(e=>`<button type="button" class="trb-pre${e===this.choice?` on`:``}" data-pre="${e}">${l(this.t(o[e]))}</button>`).join(``)}</div>
          <div class="trb-xch">${l(this.t(o.cashLabel))} <b>${n(f.cash,f.fromC)}</b><span class="arrow">→</span><b>${n(f.credit,f.toC)}</b>
            <div class="dim">${l(this.t(o.rate))} HK\$1 = NT\$4 · ${n(Math.max(0,f.keep),f.fromC)} ${l(this.t(o.stays))}</div>${y}</div>
          <div class="trb-warn">${g?l(this.t(g)):``}</div>
          <button class="trb-go" type="button" data-act="go" ${g?`disabled`:``}>${l(this.t(o.checkIn))} ▸ <kbd>Enter</kbd></button>
          <button class="trb-sec" type="button" data-act="cancel">${l(this.t(o.leave))}</button>
        </div>
      </div>
      <div class="trb-pass"></div>
      <div class="trb-foot">${l(this.t(o.hint))}</div>`,s.querySelectorAll(`[data-pre]`).forEach(e=>e.addEventListener(`click`,t=>{t.stopPropagation(),this.setChoice(e.dataset.pre)})),s.querySelectorAll(`[data-act]`).forEach(e=>e.addEventListener(`click`,t=>{t.stopPropagation(),e.dataset.act===`cancel`?this.cancel():this.confirm()})),this.stage===`pass`&&this.renderPass()}renderPass(){let e=this.root,n=this.data;if(!e||!n)return;e.classList.add(`pass`);let i=e.querySelector(`.trb-pass`),s=r[n.from],c=r[n.to],u=this.host.lang()!==`en`,d=t(n.dep.min-25);i.innerHTML=`
      <div class="bp">
        <div class="bp-main">
          <div class="bp-top"><b>${u?a.zh:a.en}</b>${u?` <small style="opacity:.85">${a.en}</small>`:``}<span>${l(this.t(o.boarding))}</span></div>
          <div class="bp-route"><div><div class="bp-code">${s.airport.code}</div><div class="bp-city">${l(this.t(s.name))}</div></div><div class="bp-plane"></div>
            <div style="text-align:right"><div class="bp-code">${c.airport.code}</div><div class="bp-city">${l(this.t(c.name))}</div></div></div>
          <div class="bp-grid">
            <div>${l(this.t(o.passenger))}<b>${l(this.t(n.passenger.name))}</b></div>
            <div>${l(this.t(o.flight))}<b>${l(n.dep.flight)}</b></div>
            <div>${l(this.t(o.gate))}<b>${l(n.route.gate)}</b></div>
            <div>${l(this.t(o.seat))}<b>${this.seat}</b></div>
            <div>${l(this.t(o.boardTime))}<b>${d}</b></div>
            <div>${l(this.t(o.leaves))}<b>${t(n.dep.min)}</b></div>
            <div>${l(this.t(o.arrive))}<b>${t(n.dep.min+n.route.hours*60)}</b></div>
            <div>${l(this.t(o.economy))}<b>Y</b></div>
          </div>
        </div>
        <div class="bp-stub"><div>${l(this.t(o.flight))}<b>${l(n.dep.flight)}</b></div><div>${l(this.t(o.seat))}<b>${this.seat}</b></div><div>${s.airport.code} → ${c.airport.code}</div><div class="bp-bar"></div></div>
      </div>
      <div class="trb-acts"><button class="trb-sec" type="button" data-act="back">${l(this.t(o.back))}</button><button class="trb-go" type="button" data-act="board">${l(this.t(o.board))} ✈ <kbd>Enter</kbd></button></div>`,i.querySelector(`[data-act="back"]`).addEventListener(`click`,e=>{e.stopPropagation(),this.back()}),i.querySelector(`[data-act="board"]`).addEventListener(`click`,e=>{e.stopPropagation(),this.confirm()})}setChoice(e){e!==this.choice&&this.stage===`board`&&(this.choice=e,this.host.sfx(`ui_hover`),this.render())}nav(e){if(this.stage!==`board`||!e)return;let t=[`all`,`half`,`none`],n=t.indexOf(this.choice);this.setChoice(t[Math.max(0,Math.min(2,n+Math.sign(e)))])}confirm(){let e=this.data;if(!e||!this.root)return;if(this.stage===`board`){let t=!e.promo&&e.wallet<e.fare;if(e.blocked||t){this.host.sfx(`ui_back`);return}this.host.sfx(`ui_confirm`),this.stage=`pass`,this.renderPass();return}let t=this.amounts();this.host.sfx(`ui_confirm`),this.finish({ok:!0,cash:t.cash,credit:t.credit,seat:this.seat})}back(){if(this.stage===`pass`){this.stage=`board`,this.root?.classList.remove(`pass`),this.host.sfx(`ui_back`);return}this.cancel()}cancel(){if(this.root){if(this.stage===`pass`)return this.back();this.host.sfx(`ui_back`),this.finish({ok:!1})}}onKey(e){if(!this.root)return;let t=e.code,n=t===`Enter`||t===`NumpadEnter`||t===`KeyE`||t===`Space`;if(n&&(e.repeat||performance.now()<this.armedAt)){e.preventDefault(),e.stopPropagation();return}let r=!0;t===`ArrowLeft`||t===`KeyA`?this.nav(-1):t===`ArrowRight`||t===`KeyD`?this.nav(1):n?(this.armedAt=performance.now()+250,this.confirm()):t===`Escape`||t===`Backspace`?this.back():r=!1,r&&(e.preventDefault(),e.stopPropagation())}finish(e){let t=this.resolve;this.resolve=null,this.close(),t?.(e)}close(e=!1){window.removeEventListener(`keydown`,this.keyH,!0);let t=this.root;this.root=null,t&&(e?t.remove():(t.classList.add(`out`),setTimeout(()=>t.remove(),220)))}};export{u as DepartureBoard};