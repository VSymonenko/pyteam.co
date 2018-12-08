/* tslint:disable:no-console */
interface Routing {
  registerNavigationRoute: (s: string) => {};
}

interface Precaching {
  precacheAndRoute: (s: string) => {};
}

interface ServiceWorker {
  routing: Routing;
  precaching: Precaching;
}

declare var workbox: ServiceWorker;

if (workbox) {
  console.log(`Workbox is loaded`);
  workbox.routing.registerNavigationRoute('/index.html');
  workbox.precaching.precacheAndRoute((self as any).__precacheManifest || []);
} else {
  console.log(`Workbox didn't load`);
}
