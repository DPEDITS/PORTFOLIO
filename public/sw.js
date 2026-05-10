const CACHE_NAME = 'portfolio-offline-v2';
const OFFLINE_URL = '/offline.html';

const assetsToCache = [
  OFFLINE_URL,
  '/logo.png',
  '/vite.svg',
];

self.addEventListener('install', (event) => {
  event.waitUntil(
    caches.open(CACHE_NAME).then((cache) => {
      return cache.addAll(assetsToCache);
    })
  );
  self.skipWaiting();
});

self.addEventListener('activate', (event) => {
  event.waitUntil(
    caches.keys().then((cacheNames) => {
      return Promise.all(
        cacheNames.map((cacheName) => {
          if (cacheName !== CACHE_NAME) {
            return caches.delete(cacheName);
          }
        })
      );
    })
  );
  self.clients.claim();
});

self.addEventListener('fetch', (event) => {
  // Bypass service worker for external APIs like GitHub stats
  if (event.request.url.includes('github-readme-stats') || 
      event.request.url.includes('github-readme-streak-stats') ||
      event.request.url.includes('demolab.com') ||
      event.request.url.includes('denvercoder1')) {
    return;
  }

  if (event.request.mode === 'navigate') {
    event.respondWith(
      fetch(event.request).catch(() => {
        return caches.match(OFFLINE_URL) || new Response('Offline content not available', {
          status: 503,
          statusText: 'Service Unavailable',
          headers: new Headers({ 'Content-Type': 'text/plain' })
        });
      })
    );
  } else {
    event.respondWith(
      caches.match(event.request).then((response) => {
        return response || fetch(event.request).catch(() => {
          // If both cache and network fail, return nothing or a placeholder for images
          return null; 
        });
      })
    );
  }
});

