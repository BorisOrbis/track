const CACHE = 'track-v3';
const ASSETS = [
  '/track/',
  '/track/index.html',
  '/track/manifest.json',
  '/track/icon-192.png',
  '/track/icon-512.png',
  '/track/apple-touch-icon.png'
];

self.addEventListener('install', e => {
  e.waitUntil(
    caches.open(CACHE)
      .then(c => Promise.allSettled(ASSETS.map(a => c.add(a))))
      .then(() => self.skipWaiting())
  );
});

self.addEventListener('activate', e => {
  e.waitUntil(
    caches.keys()
      .then(keys => Promise.all(keys.filter(k => k !== CACHE).map(k => caches.delete(k))))
      .then(() => self.clients.claim())
  );
});

self.addEventListener('fetch', e => {
  // Network-first: pokušaj mrežu, fallback na cache
  e.respondWith(
    fetch(e.request)
      .then(response => {
        // Spremi svježu verziju u cache
        const clone = response.clone();
        caches.open(CACHE).then(c => c.put(e.request, clone));
        return response;
      })
      .catch(() => caches.match(e.request)
        .then(r => r || caches.match('/track/index.html'))
      )
  );
});
