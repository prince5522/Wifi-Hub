'use strict';
(() => {
  const PREFIX = 'wifiHub.';
  function read(key, fallback=null) {
    try { const v=localStorage.getItem(PREFIX+key); return v===null?fallback:JSON.parse(v); }
    catch { return fallback; }
  }
  function write(key,value) {
    try { localStorage.setItem(PREFIX+key,JSON.stringify(value)); return true; }
    catch { return false; }
  }
  function remove(key) { try { localStorage.removeItem(PREFIX+key); } catch {} }
  window.WiFiHubStorage = Object.freeze({read,write,remove});
})();
