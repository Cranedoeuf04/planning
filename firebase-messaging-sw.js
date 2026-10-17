/* Planning partagé — reçoit les notifications quand le site est fermé.
   À placer à côté de index.html et config.js dans le dépôt GitHub. */
self.window = self; // config.js écrit dans window.PLANNING_CONFIG
importScripts('config.js');
importScripts(
  'https://www.gstatic.com/firebasejs/10.12.2/firebase-app-compat.js',
  'https://www.gstatic.com/firebasejs/10.12.2/firebase-messaging-compat.js'
);
const cfg = self.PLANNING_CONFIG || {};
if (cfg.firebase) {
  firebase.initializeApp(cfg.firebase);
  firebase.messaging(); // les notifications envoyées par le relais s'affichent toutes seules
}
// un clic sur la notification ouvre le planning (lien envoyé par le relais)
