self.addEventListener('install', (event) => {
    event.waitUntil(
      caches.open('my-vitepress-cache').then((cache) => {
        return cache.addAll([
          '/',
          '/index.html',
          '/ecu-data.html',
          '/tunerpro-basic.html',
          '/404.html',
          '/logo-full.webp',
          '/logo-mini.webp',
          '/assets',
        ]);
      })
    );
  });
  
  self.addEventListener('fetch', (event) => {
    event.respondWith(
      caches.match(event.request).then((response) => {
        // Return cached file if found, otherwise fetch from network
        return response || fetch(event.request).then((fetchResponse) => {
          const clonedResponse = fetchResponse.clone();
          caches.open('my-vitepress-cache').then((cache) => {
            cache.put(event.request, clonedResponse);
          });
          return fetchResponse;
        });
      })
    );
  });