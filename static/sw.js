importScripts('/_nuxt/workbox.5c678697.js')



workbox.precaching.precacheAndRoute([
  {
    "url": "/_nuxt/710f11cb1390c0fd3e88.js",
    "revision": "87fc54a608c9f76a454847e9df4119bf"
  },
  {
    "url": "/_nuxt/d04523b8fef2703f6c13.js",
    "revision": "f6eb91e0568b08e0080a7846fd99d357"
  },
  {
    "url": "/_nuxt/fd7fea7ff41efca11f2c.js",
    "revision": "961d2ec41158c00f94d929acad22125a"
  },
  {
    "url": "/_nuxt/ffaf950a133896ec3519.js",
    "revision": "b11b2e6e359b01a61648361f20530f6d"
  }
], {
  "cacheId": "portfolio",
  "directoryIndex": "/",
  "cleanUrls": false
})



workbox.clientsClaim()
workbox.skipWaiting()


workbox.routing.registerRoute(new RegExp('/_nuxt/.*'), workbox.strategies.cacheFirst({}), 'GET')

workbox.routing.registerRoute(new RegExp('/.*'), workbox.strategies.networkFirst({}), 'GET')





