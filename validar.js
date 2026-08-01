// validar.js — Comprueba que la app carga y renderiza sin errores ANTES de subirla.
// Uso:  osascript -l JavaScript validar.js
ObjC.import('Foundation');
function readFile(p){ return $.NSString.stringWithContentsOfFileEncodingError(p,$.NSUTF8StringEncoding,null).js; }
var base='/Users/gabrielpardomartinez/Desktop/la-porra-app/'; var A=base+'assets/';
eval(readFile(A+'babel.js'));
var store={};
var localStorage={getItem:function(k){return k in store?store[k]:null;},setItem:function(k,v){store[k]=v;},removeItem:function(k){delete store[k];}};
function elem(){return {style:{setProperty:function(){},getPropertyValue:function(){return '';}},id:'',setAttribute:function(){},appendChild:function(){},textContent:'',attributes:[],removeAttribute:function(){},querySelector:function(){return null;}};}
var _els={};
var document={addEventListener:function(){},createElement:function(){return elem();},getElementById:function(id){return _els[id]||null;},querySelector:function(){return null;},querySelectorAll:function(){return [];},head:{appendChild:function(e){if(e&&e.id)_els[e.id]=e;}},body:elem(),documentElement:elem(),scripts:[]};
var depth=0;
var React={useState:function(v){return [typeof v==='function'?v():v,function(){}];},useEffect:function(){},useRef:function(){return {current:null};},useMemo:function(f){return f();},Fragment:function(p){return (p&&p.children)!==undefined?p.children:null;},
 createElement:function(type,props){var ch=Array.prototype.slice.call(arguments,2);
  if(typeof type==='function'){if(depth>800)return null;depth++;var r;try{var p=Object.assign({},props||{});if(ch.length)p.children=ch.length===1?ch[0]:ch;r=type(p);}catch(e){throw new Error('['+(type.name||'anon')+'] '+(e.message||e));}finally{depth--;}
   if(r===undefined) throw new Error('['+(type.name||'anon')+'] devolvió undefined');
   return {};}return {};}};
var ReactDOM={createRoot:function(){return {render:function(){}};}};
var win={};var window=win;win.window=win;win.document=document;win.localStorage=localStorage;win.React=React;win.ReactDOM=ReactDOM;
win.addEventListener=function(){};win.dispatchEvent=function(){};win.CustomEvent=function(n,o){return {detail:o&&o.detail};};
win.innerWidth=402;win.innerHeight=874;win.navigator={};win.performance={now:function(){return 0;}};
win.requestAnimationFrame=function(){return 0;};win.cancelAnimationFrame=function(){};win.URL={createObjectURL:function(){return 'b';},revokeObjectURL:function(){}};win.Blob=function(){};
var files=['data.jsx','theme.jsx','i18n.jsx','shared.jsx','IOSDevice.jsx','ScreenHome.jsx','ScreenPlayer.jsx','ScreenTeam.jsx','ScreenRace.jsx','ScreenNext.jsx','ScreenPalmares.jsx','ScreenPro.jsx','ScreenDesafios.jsx'];
var out=[];
files.forEach(function(f){ try{Babel.transform(readFile(A+f),{presets:['react'],filename:f});}catch(e){out.push('SYNTAX FAIL '+f+' -> '+(e.message||e).split('\n')[0]);} });
var acc='var CustomEvent=window.CustomEvent,requestAnimationFrame=window.requestAnimationFrame,cancelAnimationFrame=window.cancelAnimationFrame,performance=window.performance,navigator=window.navigator,URL=window.URL,Blob=window.Blob,localStorage=window.localStorage;\n';
files.forEach(function(f){acc+='\n;\n'+Babel.transform(readFile(A+f),{presets:['react'],filename:f}).code;});
var idx=readFile(base+'index.html'); var re=/<script type="text\/babel">([\s\S]*?)<\/script>/g,m;
while((m=re.exec(idx))!==null){ acc+='\n;\n'+Babel.transform(m[1],{presets:['react'],filename:'inline'}).code; }
acc+='\nwin.__R={App:App,ScreenHome:ScreenHome,ScreenPlayer:ScreenPlayer,ScreenTeam:ScreenTeam,ScreenRace:ScreenRace,ScreenNext:ScreenNext,ScreenPalmares:ScreenPalmares,ScreenPro:ScreenPro,ScreenDesafios:ScreenDesafios};';
try{(function(){eval(acc);}).call(win);}catch(e){out.push('LOAD FAIL -> '+(e.message||e));}
var noop=function(){};
var players=(win.PLAYERS||[]).map(function(p){return p.name;});
var teams=(win.TEAMS||[]).map(function(t){return t.name;});
var races=(win.RACES||[]).map(function(r){return r.n;});
if(win.__R){
 ['dark','light','pride'].forEach(function(TH){ store['lp-theme']=TH; win.setTheme(TH);
  ['es','eu','en'].forEach(function(L){ store['lp-lang']=L;
   [['App',{}],['ScreenHome',{onOpenPlayer:noop,onOpenTeam:noop,onOpenRace:noop,onOpenNext:noop,onOpenPalmares:noop,onOpenPro:noop,onOpenDesafios:noop}],['ScreenNext',{onBack:noop}],['ScreenPalmares',{onBack:noop}],['ScreenPro',{onBack:noop}],['ScreenDesafios',{onBack:noop}]].forEach(function(tt){
     try{React.createElement(win.__R[tt[0]],tt[1]);}catch(e){out.push('FAIL '+TH+'/'+L+' '+tt[0]+' -> '+(e.message||e));}
   });
  });
 });
 store['lp-theme']='dark'; win.setTheme('dark'); store['lp-lang']='es';
 players.forEach(function(n){ try{React.createElement(win.__R.ScreenPlayer,{name:n,onBack:noop,onOpenTeam:noop,onOpenRace:noop,onOpenPlayer:noop});}catch(e){out.push('FAIL player '+n+' -> '+(e.message||e));} });
 teams.forEach(function(n){ try{React.createElement(win.__R.ScreenTeam,{name:n,onBack:noop,onOpenPlayer:noop});}catch(e){out.push('FAIL team '+n+' -> '+(e.message||e));} });
 races.forEach(function(n){ try{React.createElement(win.__R.ScreenRace,{raceNumber:n,onBack:noop,onOpenPlayer:noop});}catch(e){out.push('FAIL race C'+n+' -> '+(e.message||e));} });
}
out.length===0
 ? 'TODO OK — 3 temas x 3 idiomas, '+players.length+' pilotos, '+teams.length+' equipos, '+races.length+' carreras'
 : ('ERRORES:\n'+out.join('\n'));
