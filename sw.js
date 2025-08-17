const CACHE_NAME = "lo3bt-tounsi-v4"; // آخر نسخة
const ASSETS = [
  "./","./index.html","./style.css","./script.js","./manifest.json",
  "./assets/icons/icon-192.png","./assets/icons/icon-512.png","./assets/icons/icon-180.png"
];

self.addEventListener("install", e => {
  e.waitUntil(caches.open(CACHE_NAME).then(c => c.addAll(ASSETS)));
  self.skipWaiting();
});

self.addEventListener("activate", e => {
  e.waitUntil(
    caches.keys().then(keys =>
      Promise.all(keys.map(k => (k !== CACHE_NAME ? caches.delete(k) : null)))
    )
  );
  self.clients.claim();
});

self.addEventListener("fetch", e => {
  const u = new URL(e.request.url);
  if (u.origin === self.location.origin) {
    e.respondWith(
      caches.match(e.request, { ignoreSearch: true }).then(cached =>
        cached ||
        fetch(e.request).then(resp => {
          const copy = resp.clone();
          caches.open(CACHE_NAME).then(cache => cache.put(e.request, copy));
          return resp;
        }).catch(() => (e.request.mode === "navigate" ? caches.match("./index.html") : undefined))
      )
    );
  }
});