'use strict';
(()=> {
const state={view:'dashboard',online:navigator.onLine};
const $=s=>document.querySelector(s), $$=s=>[...document.querySelectorAll(s)];

function safe(fn){try{const r=fn(); if(r?.catch)r.catch(()=>toast('This feature is temporarily unavailable.'));return r}catch{toast('This feature is temporarily unavailable.')}}

function sidebar(open){
 const s=$('#sidebar'),m=$('#menuButton'); if(!s||!m)return;
 s.classList.toggle('open',open);s.setAttribute('aria-hidden',String(!open));m.setAttribute('aria-expanded',String(open));
}
function view(name){
 const panel=$(`[data-panel="${CSS.escape(name)}"]`);
 if(!panel){toast('That section is not available yet.');return}
 $$('.view').forEach(x=>x.classList.remove('active'));panel.classList.add('active');
 $$('.nav[data-view]').forEach(x=>x.classList.toggle('active',x.dataset.view===name));
 state.view=name;window.scrollTo({top:0,behavior:'smooth'});sidebar(false);
}
function connection(){
 state.online=navigator.onLine;
 const pill=$('#statusPill'),offline=$('#offline'),internet=$('#internet'),detail=$('#internetDetail');
 pill?.classList.toggle('offline',!state.online);pill?.classList.toggle('online',state.online);
 if(pill)pill.querySelector('b').textContent=state.online?'Online':'Offline';
 if(internet)internet.textContent=state.online?'Online':'Offline';
 if(detail)detail.textContent=state.online?'Connection available':'Saved content available';
 if(offline)offline.hidden=state.online;
}
function toast(msg){
 const root=$('#toast');if(!root)return;
 const el=document.createElement('div');el.className='toast glass';el.textContent=msg;root.appendChild(el);
 setTimeout(()=>el.remove(),3200);
}
function modal(title,body){
 const root=$('#modal');if(!root)return;
 root.innerHTML=`<div class="backdrop"><div class="modal glass" role="dialog" aria-modal="true"><button class="close liquid">×</button><small class="eyebrow">WI-FI HUB</small><h2>${title}</h2>${body}</div></div>`;
 const close=()=>{root.innerHTML=''};
 root.querySelector('.close')?.addEventListener('click',close);
 root.querySelector('.backdrop')?.addEventListener('click',e=>{if(e.target.classList.contains('backdrop'))close()});
}
function addWifi(){modal('Add Wi-Fi','<p>This foundation is ready for the secure network module. Router details, authentication and cloud storage will be connected without changing the app shell.</p><button class="primary liquid close-action">Continue</button>');$('#modal .close-action')?.addEventListener('click',()=>{$('#modal').innerHTML='';toast('Network module is reserved for the next foundation stage.')})}
function account(){modal('Account','<p>The account layer will use persistent authentication and server-side permissions. No passwords will be stored in plain text in the browser.</p><button class="primary liquid close-action">Close</button>');$('#modal .close-action')?.addEventListener('click',()=>$('#modal').innerHTML='')}
function init(){
 $('#menuButton')?.addEventListener('click',()=>safe(()=>sidebar(true)));
 $('#closeMenu')?.addEventListener('click',()=>safe(()=>sidebar(false)));
 $$('.nav[data-view]').forEach(b=>b.addEventListener('click',()=>safe(()=>view(b.dataset.view))));
 $('#addWifi')?.addEventListener('click',()=>safe(addWifi));$('#account')?.addEventListener('click',()=>safe(account));
 $('#theme')?.addEventListener('click',()=>toast('Theme controls will be added as an independent module.'));
 $$('.action').forEach(b=>b.addEventListener('click',()=>safe(()=>b.dataset.action==='add'?addWifi():view(b.dataset.action))));
 window.addEventListener('online',connection);window.addEventListener('offline',connection);connection();
 if('serviceWorker' in navigator) window.addEventListener('load',()=>navigator.serviceWorker.register('./sw.js').catch(()=>{}),{once:true});
}
document.addEventListener('DOMContentLoaded',()=>safe(init));
window.WiFiHub=Object.freeze({getState:()=>({...state}),toast});
})();