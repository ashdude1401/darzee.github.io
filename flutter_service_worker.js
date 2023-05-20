'use strict';
const MANIFEST = 'flutter-app-manifest';
const TEMP = 'flutter-temp-cache';
const CACHE_NAME = 'flutter-app-cache';

const RESOURCES = {"assets/asset/images/appStore.svg": "ef9eea8572945f9d25ca74920b9e09cb",
"assets/asset/images/appstoreLight.svg": "a7f11e2433b771698d84a35d8e7b09ea",
"assets/asset/images/container6Mobile.svg": "1ff972d6082c5a272c4aacd160fb2c8f",
"assets/asset/images/cusotmerDp1.svg": "a10d1931d75c46181ee5a84afdfc4f67",
"assets/asset/images/discordIcon.svg": "d21b2867fbed534431a30838723ec5fd",
"assets/asset/images/fbIcon.svg": "3605008bb4c5a187f13feb4d23726cd9",
"assets/asset/images/Gmail%2520-%2520Also%2520give%2520a%2520brief%2520about%2520columns%2520of%2520table.pdf": "2d154aa74aa40ad33b279e73c78d8471",
"assets/asset/images/googleplay.svg": "3d22c73ce5a64241e8e8b525cb535f83",
"assets/asset/images/googlePlayLight.svg": "ec5bd3fc4b679b47a1135dfe9a2e60de",
"assets/asset/images/haderIcon.svg": "e85029ef7fc890899c3156ba602f0fe5",
"assets/asset/images/heroImg.svg": "72f59d6eda339050ffc10cd8c5c0cb9a",
"assets/asset/images/heroImg2.png": "a66906110c40ea635040111efeca8b6e",
"assets/asset/images/heroImg2.svg": "44fbb0b2580fea5c0410266ca3adaade",
"assets/asset/images/heroImg3.png": "6a359697bbe0724714b3053cabdf7393",
"assets/asset/images/heroImg3.svg": "471297f47049d3e8203f486b5d4c8cfd",
"assets/asset/images/heroImg4.png": "cef26bd20eb87313df04b17964d02292",
"assets/asset/images/heroImg4.svg": "802f380114df5151415dc71be9fd651d",
"assets/asset/images/heroImg42.png": "12ff051abdbeac0211390e319c8a4f91",
"assets/asset/images/heroImg43.png": "bbea6ba1b924ec669a72b7f2d231c33f",
"assets/asset/images/heroImg5.svg": "29b7048377d16c490114058b4e409dc6",
"assets/asset/images/heroImg6.png": "70ba04df5ba1f39121b655b44c9fe108",
"assets/asset/images/heroImg6.svg": "3b97fe63181c4a648749879bd86b129e",
"assets/asset/images/HeroImg6ImgPhone.png": "b4804bed3df7be3824b72308fa5e0f8d",
"assets/asset/images/heroImgMobile1.1": "aaaab735809aa8ddc4bfc9d228d6e1b7",
"assets/asset/images/heroImgMobile1.2": "58374d91c923b4ae89ef5403110f7233",
"assets/asset/images/heroImgPng.png": "e2d9ad89abbfbdd4ffbd3cabd728384c",
"assets/asset/images/inrIcon.svg": "181e5d851b073e7e2c0bc24c3f99dfe2",
"assets/asset/images/insight.svg": "87a15470ca79006f90e168e808f90dac",
"assets/asset/images/Instagram.svg": "f8fb5b38c0e96c11243edf07db1118f3",
"assets/asset/images/invoice.svg": "c994127d411db8030dbdf972528116cc",
"assets/asset/images/measurementIcon.svg": "c142dc749b71fc41610e55cc9e45a1bc",
"assets/asset/images/menuIcon.svg": "21d54568a1e876a74edec64c8f40ff0c",
"assets/asset/images/mulitligual.svg": "a862c6c88ce64057887aecfdbdb22a20",
"assets/asset/images/peopleIcon.svg": "f12aad9043e309231af795787201aba1",
"assets/asset/images/peoplePaymentIonc.svg": "ceaff5f4bebe1c63f281083a69d2ab14",
"assets/asset/images/peopleTickIcon.svg": "758acf9dc0fd0773e60f6e22ad67a4b8",
"assets/asset/images/purpleCircle.svg": "6733d75894fbc76f1cba1d8cfac751c9",
"assets/asset/images/sheetTickIcon.svg": "c0cccdc008aae4b55b4eb3f9fac6714b",
"assets/asset/images/shielIcon.svg": "f975670eda5b45ab6320c4197e9c5ef0",
"assets/asset/images/testomonialImag1.png": "f3439dcc89ce82b7092c45939670aff0",
"assets/asset/images/twitterIcon.svg": "2be4d9e2a3c6057ec36839330db7db57",
"assets/asset/images/whatsAppIcon.svg": "c57dbe23d20498dcdd1099411db333e8",
"assets/AssetManifest.bin": "b02bf641a64c86d05494fe8d4f3f1da9",
"assets/AssetManifest.json": "f1d65a0bd5d21b528dce5839618ec212",
"assets/FontManifest.json": "dc3d03800ccca4601324923c0b1d6d57",
"assets/fonts/MaterialIcons-Regular.otf": "389d8f4f4eac432a2ddb2e99bffed62c",
"assets/NOTICES": "1d5559d489927a135c5112f9836c17b7",
"assets/packages/cupertino_icons/assets/CupertinoIcons.ttf": "57d849d738900cfd590e9adc7e208250",
"assets/shaders/ink_sparkle.frag": "f8b80e740d33eb157090be4e995febdf",
"canvaskit/canvaskit.js": "76f7d822f42397160c5dfc69cbc9b2de",
"canvaskit/canvaskit.wasm": "f48eaf57cada79163ec6dec7929486ea",
"canvaskit/chromium/canvaskit.js": "8c8392ce4a4364cbb240aa09b5652e05",
"canvaskit/chromium/canvaskit.wasm": "fc18c3010856029414b70cae1afc5cd9",
"canvaskit/skwasm.js": "1df4d741f441fa1a4d10530ced463ef8",
"canvaskit/skwasm.wasm": "6711032e17bf49924b2b001cef0d3ea3",
"canvaskit/skwasm.worker.js": "19659053a277272607529ef87acf9d8a",
"favicon.png": "5dcef449791fa27946b3d35ad8803796",
"flutter.js": "6b515e434cea20006b3ef1726d2c8894",
"icons/Icon-192.png": "ac9a721a12bbc803b44f645561ecb1e1",
"icons/Icon-512.png": "96e752610906ba2a93c65f8abe1645f1",
"icons/Icon-maskable-192.png": "c457ef57daa1d16f64b27b786ec2ea3c",
"icons/Icon-maskable-512.png": "301a7604d45b3e739efc881eb04896ea",
"index.html": "1da37357249f006afcb36c312a5c2635",
"/": "1da37357249f006afcb36c312a5c2635",
"main.dart.js": "7233c0ecd26c4b168dd081718ca882c6",
"manifest.json": "55ec68961c1fac122d4a2311cc70e711",
"version.json": "1344d082b2c5a54e3ba619513aaaf88f"};
// The application shell files that are downloaded before a service worker can
// start.
const CORE = ["main.dart.js",
"index.html",
"assets/AssetManifest.json",
"assets/FontManifest.json"];

// During install, the TEMP cache is populated with the application shell files.
self.addEventListener("install", (event) => {
  self.skipWaiting();
  return event.waitUntil(
    caches.open(TEMP).then((cache) => {
      return cache.addAll(
        CORE.map((value) => new Request(value, {'cache': 'reload'})));
    })
  );
});
// During activate, the cache is populated with the temp files downloaded in
// install. If this service worker is upgrading from one with a saved
// MANIFEST, then use this to retain unchanged resource files.
self.addEventListener("activate", function(event) {
  return event.waitUntil(async function() {
    try {
      var contentCache = await caches.open(CACHE_NAME);
      var tempCache = await caches.open(TEMP);
      var manifestCache = await caches.open(MANIFEST);
      var manifest = await manifestCache.match('manifest');
      // When there is no prior manifest, clear the entire cache.
      if (!manifest) {
        await caches.delete(CACHE_NAME);
        contentCache = await caches.open(CACHE_NAME);
        for (var request of await tempCache.keys()) {
          var response = await tempCache.match(request);
          await contentCache.put(request, response);
        }
        await caches.delete(TEMP);
        // Save the manifest to make future upgrades efficient.
        await manifestCache.put('manifest', new Response(JSON.stringify(RESOURCES)));
        // Claim client to enable caching on first launch
        self.clients.claim();
        return;
      }
      var oldManifest = await manifest.json();
      var origin = self.location.origin;
      for (var request of await contentCache.keys()) {
        var key = request.url.substring(origin.length + 1);
        if (key == "") {
          key = "/";
        }
        // If a resource from the old manifest is not in the new cache, or if
        // the MD5 sum has changed, delete it. Otherwise the resource is left
        // in the cache and can be reused by the new service worker.
        if (!RESOURCES[key] || RESOURCES[key] != oldManifest[key]) {
          await contentCache.delete(request);
        }
      }
      // Populate the cache with the app shell TEMP files, potentially overwriting
      // cache files preserved above.
      for (var request of await tempCache.keys()) {
        var response = await tempCache.match(request);
        await contentCache.put(request, response);
      }
      await caches.delete(TEMP);
      // Save the manifest to make future upgrades efficient.
      await manifestCache.put('manifest', new Response(JSON.stringify(RESOURCES)));
      // Claim client to enable caching on first launch
      self.clients.claim();
      return;
    } catch (err) {
      // On an unhandled exception the state of the cache cannot be guaranteed.
      console.error('Failed to upgrade service worker: ' + err);
      await caches.delete(CACHE_NAME);
      await caches.delete(TEMP);
      await caches.delete(MANIFEST);
    }
  }());
});
// The fetch handler redirects requests for RESOURCE files to the service
// worker cache.
self.addEventListener("fetch", (event) => {
  if (event.request.method !== 'GET') {
    return;
  }
  var origin = self.location.origin;
  var key = event.request.url.substring(origin.length + 1);
  // Redirect URLs to the index.html
  if (key.indexOf('?v=') != -1) {
    key = key.split('?v=')[0];
  }
  if (event.request.url == origin || event.request.url.startsWith(origin + '/#') || key == '') {
    key = '/';
  }
  // If the URL is not the RESOURCE list then return to signal that the
  // browser should take over.
  if (!RESOURCES[key]) {
    return;
  }
  // If the URL is the index.html, perform an online-first request.
  if (key == '/') {
    return onlineFirst(event);
  }
  event.respondWith(caches.open(CACHE_NAME)
    .then((cache) =>  {
      return cache.match(event.request).then((response) => {
        // Either respond with the cached resource, or perform a fetch and
        // lazily populate the cache only if the resource was successfully fetched.
        return response || fetch(event.request).then((response) => {
          if (response && Boolean(response.ok)) {
            cache.put(event.request, response.clone());
          }
          return response;
        });
      })
    })
  );
});
self.addEventListener('message', (event) => {
  // SkipWaiting can be used to immediately activate a waiting service worker.
  // This will also require a page refresh triggered by the main worker.
  if (event.data === 'skipWaiting') {
    self.skipWaiting();
    return;
  }
  if (event.data === 'downloadOffline') {
    downloadOffline();
    return;
  }
});
// Download offline will check the RESOURCES for all files not in the cache
// and populate them.
async function downloadOffline() {
  var resources = [];
  var contentCache = await caches.open(CACHE_NAME);
  var currentContent = {};
  for (var request of await contentCache.keys()) {
    var key = request.url.substring(origin.length + 1);
    if (key == "") {
      key = "/";
    }
    currentContent[key] = true;
  }
  for (var resourceKey of Object.keys(RESOURCES)) {
    if (!currentContent[resourceKey]) {
      resources.push(resourceKey);
    }
  }
  return contentCache.addAll(resources);
}
// Attempt to download the resource online before falling back to
// the offline cache.
function onlineFirst(event) {
  return event.respondWith(
    fetch(event.request).then((response) => {
      return caches.open(CACHE_NAME).then((cache) => {
        cache.put(event.request, response.clone());
        return response;
      });
    }).catch((error) => {
      return caches.open(CACHE_NAME).then((cache) => {
        return cache.match(event.request).then((response) => {
          if (response != null) {
            return response;
          }
          throw error;
        });
      });
    })
  );
}
