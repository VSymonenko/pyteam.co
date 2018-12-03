if (workbox) {
  console.log(`Workbox is loaded`);
  workbox.routing.registerNavigationRoute('/index.html');
  workbox.precaching.precacheAndRoute(self.__precacheManifest || []);
} else {
  console.log(`Workbox didn't load`);
}
