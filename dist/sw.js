const CACHE_NAME = 'kas-zirhi-v1.6';
const ASSETS_TO_CACHE = [
  './',
  './index.html',
  './manifest.json',
  './icons/icon-192.png',
  './icons/icon-512.png',
  './icons/apple-touch-icon.png',
  './exercises/bike.gif',
  './exercises/cable_crossover.gif',
  './exercises/calf_raise.gif',
  './exercises/chest_press.gif',
  './exercises/chin_tuck.gif',
  './exercises/dynamic_warmup.gif',
  './exercises/external_rotation.gif',
  './exercises/face_pull.gif',
  './exercises/foam_roller.gif',
  './exercises/goblet_squat.gif',
  './exercises/heel_drop.gif',
  './exercises/incline_chest_press.gif',
  './exercises/isometric_neck.gif',
  './exercises/lat_pulldown.gif',
  './exercises/lateral_raise.gif',
  './exercises/leg_curl.gif',
  './exercises/leg_extension.gif',
  './exercises/leg_press.gif',
  './exercises/pec_deck.gif',
  './exercises/scapular_retraction.gif',
  './exercises/seated_calf.gif',
  './exercises/seated_row.gif',
  './exercises/shoulder_press.gif',
  './exercises/single_arm_db_row.gif',
  './exercises/single_arm_row.gif',
  './exercises/standing_calf.gif'
];

self.addEventListener('install', (event) => {
  event.waitUntil(
    caches.open(CACHE_NAME).then((cache) => {
      return cache.addAll(ASSETS_TO_CACHE);
    }).then(() => self.skipWaiting())
  );
});

self.addEventListener('activate', (event) => {
  event.waitUntil(
    caches.keys().then((cacheNames) => {
      return Promise.all(
        cacheNames.map((cache) => {
          if (cache !== CACHE_NAME) {
            return caches.delete(cache);
          }
        })
      );
    }).then(() => self.clients.claim())
  );
});

self.addEventListener('fetch', (event) => {
  // Only handle GET requests
  if (event.request.method !== 'GET') return;

  event.respondWith(
    caches.match(event.request).then((cachedResponse) => {
      if (cachedResponse) {
        // Return cached asset, fetch update in background (Stale-While-Revalidate)
        fetch(event.request).then((networkResponse) => {
          if (networkResponse && networkResponse.status === 200) {
            caches.open(CACHE_NAME).then((cache) => {
              cache.put(event.request, networkResponse.clone());
            });
          }
        }).catch(() => {});
        return cachedResponse;
      }

      return fetch(event.request).then((networkResponse) => {
        if (!networkResponse || networkResponse.status !== 200 || networkResponse.type !== 'basic') {
          return networkResponse;
        }
        const responseToCache = networkResponse.clone();
        caches.open(CACHE_NAME).then((cache) => {
          cache.put(event.request, responseToCache);
        });
        return networkResponse;
      }).catch(() => {
        // Fallback for HTML navigation requests if offline
        if (event.request.mode === 'navigate') {
          return caches.match('./index.html');
        }
      });
    })
  );
});
