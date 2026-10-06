import React, { useEffect, useMemo, useState } from 'react';
import { createRoot } from 'react-dom/client';
import {
  ArrowLeft, ChevronRight, CircleHelp, ExternalLink, Gamepad2, Heart, Languages,
  Maximize2, Minimize2, MonitorCog, MousePointer2, Music2, Pause, Play, Plus,
  RotateCw, Settings as SettingsIcon, SlidersHorizontal, Smartphone, UserRound,
  Volume2, X
} from 'lucide-react';
import './styles.css';

const tips = [
  '機車可以鑽車縫，也能騎上人行道（但警察會看）。',
  '便利商店的茶葉蛋可以回血，一顆只要 13 元。',
  '捷運站入口可以快速移動到城市另一頭。',
  '龍山寺建於 1738 年，是臺北最古老的廟宇之一。',
  '按 M 打開地圖，點一下就能設定導航。',
];

const navItems = [
  { id: 'start', zh: '開始遊戲', en: 'Start Game', icon: Play },
  { id: 'character', zh: '選擇角色', en: 'Character', icon: UserRound },
  { id: 'settings', zh: '設定', en: 'Settings', icon: SettingsIcon },
  { id: 'controls', zh: '操作說明', en: 'Controls', icon: Gamepad2 },
  { id: 'support', zh: '抖內支持', en: '', icon: Heart },
];

function Logo() {
  return <img className="brand-logo" src="/logo.svg" alt="臺北狂飆 去臺北狂飆" />;
}

function Header({ lang, onToggleLang, onFullscreen, isFullscreen, onInstall }) {
  return (
    <header className="topbar">
      <a className="threads-card" href="https://www.threads.com/@aicodewithme" target="_blank" rel="noreferrer">
        <span className="threads-mark">@</span>
        <span className="threads-copy"><b>此遊戲唯一 Threads 帳號</b><strong>@aicodewithme</strong></span>
        <span className="threads-follow">追蹤動態</span>
      </a>
      <div className="top-actions">
        <button className="top-btn lang-btn" onClick={onToggleLang} aria-label="Switch to English">
          <Languages size={15} /> <span className="lang-full">{lang === 'zh' ? '中文 / EN' : 'EN / 中文'}</span>
        </button>
        <button className="top-btn fullscreen-btn" onClick={onFullscreen} aria-label={isFullscreen ? '退出全螢幕' : '全螢幕'}>
          {isFullscreen ? <Minimize2 size={14} /> : <Maximize2 size={14} />}<span>{isFullscreen ? '退出' : '全螢幕'}</span>
        </button>
        <button className="top-btn install-btn" onClick={onInstall} aria-label="安裝"><Plus size={14} /><span>安裝</span></button>
      </div>
    </header>
  );
}

function Footer({ lang, tip }) {
  return (
    <footer className="bottombar">
      <div className="tip"><span className="tip-label">小提示</span><span>{lang === 'zh' ? tip : 'Taipei tip: the arcades are rain corridors.'}</span></div>
      <div className="landmark"><span className="red-dash" /> <b>{lang === 'zh' ? '象山 · 臺北101' : 'Elephant Mtn · Taipei 101'}</b><small>{lang === 'zh' ? '信義區 · Elephant Mtn · Taipei 101' : 'Xinyi District · Taipei 101'}</small></div>
    </footer>
  );
}

function Menu({ lang, onNavigate, hasSave }) {
  return (
    <section className="menu-pane">
      <div className="logo-slot"><Logo /></div>
      <div className="menu-list">
        {hasSave && <button className="menu-item selected continue-item" onClick={() => onNavigate('start')}>
          <Play size={16} fill="currentColor" />
          <span><b>{lang === 'zh' ? '繼續遊戲' : 'Continue'}</b><small>Continue</small><em>NT$ 500 · 任務 0 · 招財貓 0/30</em></span>
        </button>}
        {hasSave && <button className="menu-item" onClick={() => onNavigate('start')}>
          <Play size={16} fill="currentColor" />
          <span><b>{lang === 'zh' ? '新遊戲' : 'New Game'}</b><small>New Game</small></span>
        </button>}
        {!hasSave && <button className="menu-item selected" onClick={() => onNavigate('start')}>
          <Play size={16} fill="currentColor" />
          <span><b>{lang === 'zh' ? '開始遊戲' : 'Start Game'}</b><small>Start Game</small></span>
        </button>}
        {navItems.slice(1).map(({id, zh, en, icon: Icon}) => (
          <button key={id} className={'menu-item ' + (id === 'support' ? 'support-item' : '')} onClick={() => onNavigate(id)}>
            <Icon size={18} fill={id === 'support' ? 'currentColor' : 'none'} />
            <span><b>{lang === 'zh' ? zh : (en || zh)}</b>{en && <small>{en}</small>}</span>
          </button>
        ))}
      </div>
    </section>
  );
}

function PanelHeader({ title, subtitle, onBack }) {
  return <div className="panel-header"><button className="back-btn" onClick={onBack} aria-label="返回"><ArrowLeft size={18} /></button><h2>{title}<small>{subtitle}</small></h2></div>;
}

function CharacterPanel({ lang, onBack }) {
  const chars = [
    { name: '阿傑', en: 'JIE', role: '機車之王', desc: '萬華長大，在國外跑了幾年外送，騎車技術一流、嘴巴比油門還快。', selected: true, img: '/loader-1600.webp' },
    { name: '小雯', en: 'WEN', role: '夜市車神', desc: '夜市長大，出國當過賽車手，冷靜精準，只相信自己的方向盤。', img: '/menu-1600.webp' },
  ];
  return <div className="overlay-panel character-panel"><PanelHeader title={lang === 'zh' ? '選擇角色' : 'Character'} subtitle={lang === 'zh' ? 'CHARACTER' : ''} onBack={onBack} />
    <div className="character-list">{chars.map(c => <button key={c.name} className={'character-card ' + (c.selected ? 'active' : '')}>
      <img src={c.img} alt="" /><span className="char-copy"><b>{c.name}<i>{c.en}</i></b><strong>{lang === 'zh' ? c.role : (c.name === '阿傑' ? 'Scooter King' : 'Night Market Racer')}</strong><p>{lang === 'zh' ? c.desc : 'A precise driver who always trusts their own line.'}</p><em>{c.selected ? (lang === 'zh' ? '已選擇' : 'Selected') : (lang === 'zh' ? '選擇' : 'Select')}</em></span>
    </button>)}</div>
  </div>;
}

const settingGroups = [
  { heading: ['畫質','Graphics'], rows: [
    {label:['畫質','Graphics'], type:'quality'}, {label:['顯示 FPS','Show FPS'], type:'toggle', key:'fps', value:false},
  ]},
  { heading: ['聲音','Audio'], rows: [
    {label:['主音量','Master Volume'], type:'range', value:80}, {label:['音樂・電台','Music & Radio'], type:'range', value:60},
    {label:['音效','Sound Effects'], type:'range', value:90}, {label:['介面大小','HUD Size'], type:'range', value:100},
  ]},
  { heading: ['操作說明','Controls'], rows: [
    {label:['視角靈敏度','Look Sensitivity'], type:'range', value:50, suffix:'1.0×'}, {label:['反轉 Y 軸','Invert Y Axis'], type:'toggle', key:'invert', value:false},
    {label:['新手提示','Tutorial hints'], type:'toggle', key:'hints', value:true}, {label:['重新顯示新手提示','Show tutorial hints again'], type:'action'},
  ]},
  { heading: ['語言','Language'], rows: [{label:['語言','Language'], type:'language'}] },
];

function SettingsPanel({ lang, onBack, onChangeLang }) {
  const [vals, setVals] = useState({fps:false, invert:false, hints:true, quality:'auto', master:80, music:60, sfx:90, hud:100, sens:50});
  const set = (key, value) => setVals(v => ({...v, [key]:value}));
  return <div className="overlay-panel settings-panel"><PanelHeader title={lang === 'zh' ? '設定' : 'Settings'} subtitle={lang === 'zh' ? 'SETTINGS' : ''} onBack={onBack} />
    <div className="settings-scroll">{settingGroups.map((g, gi) => <section className="setting-group" key={gi}><div className="group-heading"><b>{lang === 'zh' ? g.heading[0] : g.heading[1]}</b><span>{lang === 'zh' ? g.heading[1] : g.heading[0]}</span></div>
      {g.rows.map((r, ri) => <div className={'setting-row ' + r.type} key={ri}><div className="setting-label"><b>{lang === 'zh' ? r.label[0] : r.label[1]}</b><span>{lang === 'zh' ? r.label[1] : r.label[0]}</span></div>
        {r.type === 'quality' && <div className="quality-pills">{['自動','低','中','高','極致'].map((q,i)=><button className={vals.quality === ['auto','low','mid','high','ultra'][i] ? 'active':''} key={q} onClick={()=>set('quality',['auto','low','mid','high','ultra'][i])}>{lang === 'zh' ? q : ['Auto','Low','Med','High','Ultra'][i]}</button>)}</div>}
        {r.type === 'toggle' && <button className={'switch ' + (vals[r.key] ? 'on' : '')} onClick={()=>set(r.key, !vals[r.key])}><i></i><span>{vals[r.key] ? '開' : '關'}</span></button>}{r.type === 'range' && <div className="range-wrap"><input type="range" min="0" max="100" value={vals[r.label[0].startsWith('主')?'master':r.label[0].startsWith('音樂')?'music':r.label[0].startsWith('音效')?'sfx':r.label[0].startsWith('介面')?'hud':'sens']} onChange={e=>set(r.label[0].startsWith('主')?'master':r.label[0].startsWith('音樂')?'music':r.label[0].startsWith('音效')?'sfx':r.label[0].startsWith('介面')?'hud':'sens', Number(e.target.value))} /><b>{r.suffix || vals[r.label[0].startsWith('主')?'master':r.label[0].startsWith('音樂')?'music':r.label[0].startsWith('音效')?'sfx':r.label[0].startsWith('介面')?'hud':'sens'] + '%'}</b></div>}
        {r.type === 'action' && <button className="reset-btn"><RotateCw size={14} /></button>}
        {r.type === 'language' && <div className="language-pills"><button className={lang === 'zh' ? 'active':''} onClick={()=>onChangeLang('zh')}>繁體中文</button><button className={lang === 'en' ? 'active':''} onClick={()=>onChangeLang('en')}>English</button></div>}
      </div>)}
    </section>)}<p className="settings-note">{lang === 'zh' ? '畫面卡頓時請調低畫質' : 'Lower graphics if the frame rate drops.'}</p></div>
  </div>;
}

const controlRows = [
  ['移動','W A S D','視角','滑鼠'], ['衝刺','Shift','跳躍','空白鍵'], ['攻擊','滑鼠左鍵','瞄準','滑鼠右鍵'], ['切換武器','Tab','裝填','R'], ['互動','E','',''],
];
function ControlsPanel({ lang, onBack }) {
  const [tab, setTab] = useState('keyboard');
  return <div className="overlay-panel controls-panel"><PanelHeader title={lang === 'zh' ? '操作說明' : 'Controls'} subtitle={lang === 'zh' ? 'CONTROLS' : ''} onBack={onBack} />
    <div className="controls-scroll"><div className="control-tabs">{[['keyboard','鍵盤滑鼠','Keyboard & mouse'],['pad','手把','Controller'],['touch','觸控','Touch']].map(([id,label,en])=><button key={id} className={tab===id?'active':''} onClick={()=>setTab(id)}>{lang === 'zh' ? label : en}</button>)}</div>
      {tab === 'keyboard' ? <><div className="key-map"><div className="key-grid">{['Esc','Tab','Q','W','E','R','T','A','S','D','F','G','H','Shift','Z','X','C','V','B','N','M','Space'].map((k,i)=><span className={'key k'+i} key={k}>{k}<small>{['暫停','換武器','電台','前進\n油門','互動','裝填','手機','左轉向','後退\n煞車','右轉向','上下車','喇叭','','衝刺','','','回頭看','鏡頭','','','地圖','跳躍'][i]}</small></span>)}</div><div className="mouse-map"><MousePointer2 size={25}/><small>移動滑鼠<br/>＝視角</small></div></div>
        <section className="control-section"><h3>{lang === 'zh' ? '步行' : 'On foot'} <small>ON FOOT</small></h3><div className="control-table">{controlRows.map((r,i)=><div className="control-row" key={i}><span>{lang === 'zh'?r[0]:r[0]}</span><b>{r[1]}</b><span>{r[2]}</span><b>{r[3]}</b></div>)}</div></section>
        <section className="control-section"><h3>{lang === 'zh' ? '駕駛・機車與汽車' : 'Driving'} <small>DRIVING · SCOOTERS, MOTORCYCLES & CARS</small></h3><div className="control-table">{[['上車 / 下車','F','油門','W'],['煞車 / 倒車','S','轉向','A D'],['手煞車（甩尾）','空白鍵','喇叭','H'],['切換電台','Q','切換鏡頭','V'],['回頭看','C','','']].map((r,i)=><div className="control-row" key={i}><span>{r[0]}</span><b>{r[1]}</b><span>{r[2]}</span><b>{r[3]}</b></div>)}</div></section>
        <section className="control-section"><h3>{lang === 'zh' ? '介面' : 'Menus'} <small>MENUS</small></h3><div className="control-table"><div className="control-row"><span>手機</span><b>T</b><span>地圖</span><b>M</b></div><div className="control-row"><span>暫停</span><b>Esc</b></div></div></section>
      </> : <div className="empty-controls">{tab === 'pad' ? '手把配置' : '觸控配置'}<span>即將推出</span></div>}
    </div>
  </div>;
}

function SupportPanel({ lang, onBack }) {
  return <div className="overlay-panel support-panel"><PanelHeader title={lang === 'zh' ? '抖內支持' : 'Support'} subtitle="SUPPORT" onBack={onBack} /><div className="support-content"><Heart size={30} fill="#e52635" color="#e52635"/><h3>{lang === 'zh' ? '喜歡《臺北狂飆》嗎？' : 'Enjoy Taipei Rush?'}</h3><p>{lang === 'zh' ? '你的支持會讓城市繼續亮著。' : 'Your support keeps the city lights on.'}</p><button className="support-cta">{lang === 'zh' ? '前往支持' : 'Support the project'} <ExternalLink size={15}/></button></div></div>;
}

function GameView({ lang, onExit }) {
  return <div className="game-view"><div className="game-hud"><div className="hud-weather">☀ <b>17:33</b><small>31°</small></div><div className="hud-money"><small>NT$</small><b>500</b></div><div className="hud-weapon">拳頭</div></div><div className="tutorial-card"><button onClick={onExit} aria-label="close"><X size={14}/></button><b>{lang === 'zh' ? '移動' : 'Move'}</b><div className="wasd"><span>W</span><span>A</span><span>S</span><span>D</span></div><p>{lang === 'zh' ? '走路，移動滑鼠轉視角。按住 Shift 衝刺、空白鍵跳躍。' : 'Walk and move the mouse to look around. Hold Shift to sprint.'}</p></div><div className="game-center">{lang === 'zh' ? '點擊畫面以控制視角' : 'Click to control camera'}</div><div className="minimap"><div className="map-circle"></div><span>北</span></div><div className="location"><b>西門町</b><strong>XIMENDING</strong><small>潮流、電影院與刺青街</small></div></div>;
}

function App() {
  const [loading, setLoading] = useState(true);
  const [progress, setProgress] = useState(8);
  const [lang, setLang] = useState('zh');
  const [view, setView] = useState('menu');
  const [tip, setTip] = useState(tips[0]);
  const [toast, setToast] = useState('');
  const [isFullscreen, setIsFullscreen] = useState(false);
  const [hasSave, setHasSave] = useState(() => localStorage.getItem('taipei-rush-save') === '1');

  useEffect(() => { let p=8; const timer=setInterval(()=>{p=Math.min(100,p+Math.round(Math.random()*18+9)); setProgress(p); if(p>=100){clearInterval(timer); setTimeout(()=>setLoading(false),500)}},180); return ()=>clearInterval(timer); }, []);
  useEffect(() => { const onFs=()=>setIsFullscreen(!!document.fullscreenElement); document.addEventListener('fullscreenchange',onFs); return ()=>document.removeEventListener('fullscreenchange',onFs); }, []);
  useEffect(() => { if(toast){const t=setTimeout(()=>setToast(''),2600);return()=>clearTimeout(t)} }, [toast]);
  const navigate = id => { if(id==='start'){ setHasSave(true); localStorage.setItem('taipei-rush-save','1'); setView('game'); return; } setView(id); };
  const toggleFullscreen = async () => { try { if(!document.fullscreenElement) await document.documentElement.requestFullscreen(); else await document.exitFullscreen(); } catch { setToast(lang==='zh'?'瀏覽器不允許全螢幕':'Fullscreen is unavailable'); } };
  const install = () => setToast(lang==='zh'?'已準備安裝提示，請使用瀏覽器選單加入主畫面':'Use your browser menu to install this game.');
  const toggleLang = () => setLang(l => l==='zh'?'en':'zh');
  if (loading) return <div className="loader"><img src="/loader-1600.webp" alt=""/><div className="loader-grade"/><div className="loader-logo"><Logo/></div><div className="loader-progress"><div className="loader-row"><span className="spinner"></span><div><b>{lang==='zh' ? '街區與巷弄' : 'Neighbourhoods & alleys'}</b><small>{lang==='zh' ? 'Neighbourhoods & alleys' : '街區與巷弄'}</small></div><strong>{progress}<i>%</i></strong></div><div className="progress-track"><span style={{transform:`scaleX(${progress/100})`}}/></div></div></div>;
  return <main className={'app ' + view + (lang==='en'?' is-en':'')}>
    {view === 'game' ? <GameView lang={lang} onExit={()=>setView('menu')} /> : <><div className="scene-bg"/><div className="scene-grade"/><Header lang={lang} onToggleLang={toggleLang} onFullscreen={toggleFullscreen} isFullscreen={isFullscreen} onInstall={install}/><Menu lang={lang} onNavigate={navigate} hasSave={hasSave}/><Footer lang={lang} tip={tip}/>{view==='character' && <CharacterPanel lang={lang} onBack={()=>setView('menu')}/>} {view==='settings' && <SettingsPanel lang={lang} onBack={()=>setView('menu')} onChangeLang={setLang}/>} {view==='controls' && <ControlsPanel lang={lang} onBack={()=>setView('menu')}/>} {view==='support' && <SupportPanel lang={lang} onBack={()=>setView('menu')}/>}</>}
    {toast && <div className="toast">{toast}</div>}
  </main>;
}

createRoot(document.getElementById('root')).render(<App />);




