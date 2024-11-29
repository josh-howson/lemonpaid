// Cache version (update this to force-refresh the cache)
const CACHE_NAME = 'dynamic-cache-v1';
const CACHE_LIMIT = 50; // Maximum number of items in the cache

// Utility function to limit the cache size
const limitCacheSize = async (cacheName, maxItems) => {
  const cache = await caches.open(cacheName);
  const keys = await cache.keys();
  if (keys.length > maxItems) {
    await cache.delete(keys[0]); // Delete the oldest cache entry
    await limitCacheSize(cacheName, maxItems); // Recursively ensure cache size
  }
};

// Install event (optional setup)
self.addEventListener('install', (event) => {
  console.log('[Service Worker] Install event');
});

// Activate event: Clean up old caches
self.addEventListener('activate', (event) => {
  console.log('[Service Worker] Activating...');
  event.waitUntil(
    caches.keys().then((cacheNames) => {
      return Promise.all(
        cacheNames.map((cache) => {
          if (cache !== CACHE_NAME) {
            console.log('[Service Worker] Deleting old cache:', cache);
            return caches.delete(cache);
          }
        })
      );
    })
  );
});

// Fetch event: Dynamically cache assets and limit cache size
self.addEventListener('fetch', (event) => {
  event.respondWith(
    caches.match(event.request).then((response) => {
      // If the resource is in the cache, return it
      if (response) {
        return response;
      }

      // Otherwise, fetch from the network and cache it
      return fetch(event.request)
        .then((networkResponse) => {
          return caches.open(CACHE_NAME).then((cache) => {
            // Cache the network response
            cache.put(event.request, networkResponse.clone());
            // Enforce cache size limit
            limitCacheSize(CACHE_NAME, CACHE_LIMIT);
            return networkResponse;
          });
        })
        .catch((error) => {
          console.error('[Service Worker] Fetch failed:', error);
          // Optional: Return fallback content for offline use
        });
    })
  );
});
