'use strict';
/*
 Wi-Fi Hub module registry.
 Each feature is isolated so a failure in one feature does not
 stop the application shell.
*/
window.WiFiHubModules = Object.freeze({
  dashboard: {version:'1.0.0', enabled:true},
  networks: {version:'1.0.0', enabled:true},
  devices: {version:'1.0.0', enabled:true},
  doctor: {version:'1.0.0', enabled:true},
  community: {version:'1.0.0', enabled:true},
  assistant: {version:'1.0.0', enabled:true},
  auth: {version:'1.0.0', enabled:false},
  billing: {version:'1.0.0', enabled:false},
  admin: {version:'1.0.0', enabled:false}
});
