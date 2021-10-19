var CACHE_NAME = 'mysite';
var urlsToCache = [

  '/static/js/bundle.js',
  '/static/js/main.chunk.js',
  'static/js/1.chunk.js ',
  '/index.html',
  '/App.js',
  'https://opentdb.com/api.php?amount=10&difficulty=medium&type=multiple',
  '/',
];

self.addEventListener('install', (event) => {
  // Perform install steps
  event.waitUntil(
    caches.open(CACHE_NAME)
      .then((cache) => {
        console.log('Opened cache');
        return cache.addAll(urlsToCache);
      }).catch((err) => console.log('no cache', err))
  );
});

self.addEventListener('fetch', (event) => {
  if (!navigator.onLine) {
    event.respondWith(
      caches.match(event.request)
        .then((response) => {
          // Cache hit - return response
          if (response) {
            return response;
          }
          return fetch(event.request);
        }
        )
    );
  }
});

// self.addEventListener('activate', event => {
//   console.log('Activating new service worker...');

//   const cacheAllowlist = [cacheName];

//   event.waitUntil(
//     caches.keys().then(cacheNames => {
//       return Promise.all(
//         cacheNames.map(cacheName => {
//           if (cacheAllowlist.indexOf(cacheName) === -1) {
//             return caches.delete(cacheName);
//           }
//         })
//       );
//     })
//   );
// });