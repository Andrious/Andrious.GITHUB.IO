'use strict';
const MANIFEST = 'flutter-app-manifest';
const TEMP = 'flutter-temp-cache';
const CACHE_NAME = 'flutter-app-cache';
const RESOURCES = {
  ".git/COMMIT_EDITMSG": "aa1066d729fce2bb8798336cc1007bae",
".git/config": "32cc2a01a91f66677772855cb3c2ab5a",
".git/description": "a0a7c3fff21f2aea3cfa1d0316dd816c",
".git/FETCH_HEAD": "6102c4be90bfa4581e01adeef155f967",
".git/HEAD": "4cf2d64e44205fe628ddd534e1151b58",
".git/hooks/applypatch-msg.sample": "ce562e08d8098926a3862fc6e7905199",
".git/hooks/commit-msg.sample": "579a3c1e12a1e74a98169175fb913012",
".git/hooks/fsmonitor-watchman.sample": "ecbb0cb5ffb7d773cd5b2407b210cc3b",
".git/hooks/post-update.sample": "2b7ea5cee3c49ff53d41e00785eb974c",
".git/hooks/pre-applypatch.sample": "054f9ffb8bfe04a599751cc757226dda",
".git/hooks/pre-commit.sample": "01b1688f97f94776baae85d77b06048b",
".git/hooks/pre-push.sample": "3c5989301dd4b949dfa1f43738a22819",
".git/hooks/pre-rebase.sample": "56e45f2bcbc8226d2b4200f7c46371bf",
".git/hooks/pre-receive.sample": "2ad18ec82c20af7b5926ed9cea6aeedd",
".git/hooks/prepare-commit-msg.sample": "2b5c047bdb474555e1787db32b2d2fc5",
".git/hooks/update.sample": "517f14b9239689dff8bda3022ebd9004",
".git/index": "f84416890b02a63a4b3f2c1e0f8c4357",
".git/info/exclude": "036208b4a1ab4a235d75c181e685e5a3",
".git/logs/HEAD": "512ba68de034d577535cd35e99e5f759",
".git/logs/refs/heads/master": "512ba68de034d577535cd35e99e5f759",
".git/logs/refs/remotes/origin/master": "d350c7d7f0bc08a3f25442a4ecebacf3",
".git/objects/02/6306838509b32f40283a8cb2ab820813fdda18": "e91b5d3faf3b89f2782a15a449e5908a",
".git/objects/03/6414f5533a1144f42dd025f620a6907a6728e0": "93f3b65e4a63bd2fa7bd6ad56a203939",
".git/objects/07/4a1970abe79e5277b712c4f4d6abb81740f9c2": "fdb876c98f904df929f538ff86a6f42d",
".git/objects/10/be2e39885883d686697500840dfec8cd7bb049": "79c1744c2e5032bf2a66ab2ff1922bd5",
".git/objects/1e/cfef6f77151f8ac7ea0c03d4709cd2d0f0d40b": "3c69fcb97f92fff1888b5fc218d128d6",
".git/objects/20/5bb5db271c6d8de8399864c7bb9b917f638893": "c993b22f115d7f3ae6d5b7b212806539",
".git/objects/22/bc90178f90039ee63d523547bb79323e647705": "bc16d77940b2d862772a11e6ad441a65",
".git/objects/28/2e1269e9713171e68855237f0f33c2f70ce29c": "2fd8116a6cb43da90905fc0089089a7d",
".git/objects/2e/e91b761d12b136371966b6c6b93fe8fe700cbe": "67407f14426b3535556ed6049279e4eb",
".git/objects/36/15b7aca52e4369402c105782f207bad632e15c": "e4cbd707029beae6091bde6b0c25d37f",
".git/objects/3b/13e0f8ec0d0a61aff78e3e1c6131d5c2fd80c0": "f54696ea0151f849eec675e1fec346e8",
".git/objects/3f/c0a8af8919e9f31e824359fcdf0328fce178e8": "61652e868610f1a350a90bdd39537912",
".git/objects/43/8bb53fe2b8b86bd5dd17649e1e74965a507117": "0a9af289c8d183cc5c456ff0ef92bc13",
".git/objects/4b/0ffb141ee190d494314e0f2f2efbbb59596771": "c4a5786069b0577fdecfa82bd5af9a46",
".git/objects/5d/68661d1afb6efa2b3d368fb5785ba3d9c909b5": "b913bb11768f0b6fd6caee082d4ddb56",
".git/objects/5e/d00c0ab2e792aa845b1f19976af0328ca056b3": "893220cd2d80567a1a73bb9d5ca69ca5",
".git/objects/62/c2f7dac209bfdba1d8776442cf55db310d68e5": "295c0dc6f0659e868da66ed8fbdd095e",
".git/objects/6b/243f1a8825e87f9ced3f3067ca6ea0420d1793": "9710678aace703c3512d4055e04971fc",
".git/objects/88/cfd48dff1169879ba46840804b412fe02fefd6": "e42aaae6a4cbfbc9f6326f1fa9e3380c",
".git/objects/8a/aa46ac1ae21512746f852a42ba87e4165dfdd1": "1d8820d345e38b30de033aa4b5a23e7b",
".git/objects/9b/212b7fdd5890129ad885e36f4aed359d09dccb": "ea5e54830818514d649cab35438af865",
".git/objects/9e/ffac501c2e76c42d4e6fa1d587054b128a6cb5": "edf998e47ff5d9c44c34be8f28bba4af",
".git/objects/a9/68be53411f77651869d904ff3c41edb32c4ce3": "647ca6868cb76c88ffe1272b8f7d2dec",
".git/objects/b7/49bfef07473333cf1dd31e9eed89862a5d52aa": "36b4020dca303986cad10924774fb5dc",
".git/objects/c0/d0be7c90140b4c730b10927bef3a330978143b": "702c75317aa6f09fce56a967ca40df2e",
".git/objects/c4/b4a612ddc24f1c7745600de915777de498b9f2": "5ebced32d9494025186a5f38d0328b2b",
".git/objects/c8/68678f5dc7dab7bae57ce21cbd6c8a38440a0a": "d71e72ad867e6311c286a1fb84680385",
".git/objects/cb/3b43279374d96a21db034bf2a2e37fabb8e848": "0e4e4157ccc004d608a505be0d0a27c7",
".git/objects/cd/42b0e08be85d400e10b533e6bb843c7aaf54fc": "ecfcba59cebaa5633a255170cf2172f9",
".git/objects/cf/39ef84612948ebb6a51af5b9577b1627a16240": "794c83186e919d1d37a5ae9c08147979",
".git/objects/d1/006ef3557b3096970e44b1924174028526de9d": "1e6fbfdd292e6c0f3fb9476e51354734",
".git/objects/f0/0dad8424dce7826f87905765849af7d6a65c9f": "d9d7c31cb6445a99d517b4934ef8fa07",
".git/objects/f5/a28171c5baf962de9f02d42487a5dcbf70431b": "01d04d453bc9f23f27c8eed9ca2900f8",
".git/objects/fc/24e7a62dc288c776f8448cd073a01e7721ed32": "abe06b1629d06a9e81d9f6fd0072349c",
".git/objects/fe/1aa6b4aea10e4dee75b6a3b1bd3c585b5a8b12": "5a37c1d77ae52f5a9be6804b8a227a73",
".git/ORIG_HEAD": "393d077d23fbd2f27b50b5933dcd1629",
".git/refs/heads/master": "a3a9ac9f299e46244a252dd6657ff45f",
".git/refs/remotes/origin/master": "a3a9ac9f299e46244a252dd6657ff45f",
"assets/AssetManifest.json": "2efbb41d7877d10aac9d091f58ccd7b9",
"assets/FontManifest.json": "dc3d03800ccca4601324923c0b1d6d57",
"assets/fonts/MaterialIcons-Regular.otf": "4e6447691c9509f7acdbf8a931a85ca1",
"assets/NOTICES": "a343d01e8cc8e460d0526fb92f70b5f9",
"assets/packages/cupertino_icons/assets/CupertinoIcons.ttf": "6d342eb68f170c97609e9da345464e5e",
"CNAME": "fc5ddddb90a55a23d93316478feb24d8",
"favicon.png": "5dcef449791fa27946b3d35ad8803796",
"icons/Icon-192.png": "ac9a721a12bbc803b44f645561ecb1e1",
"icons/Icon-512.png": "96e752610906ba2a93c65f8abe1645f1",
"index.html": "91e5d734e35bc9a7352c35852bd2e718",
"/": "91e5d734e35bc9a7352c35852bd2e718",
"main.dart.js": "29a7d16feb150cea92ef00d69cd9d4ff",
"manifest.json": "58e5e34babf7de82d62f9e9798d8869d",
"README.md": "9685308cf4e35423739e96a0dc18f80f",
"version.json": "adc253a5c43aa46f8d064bce3239713b",
"_config.yml": "9d61ac692cb95aab3b9fa4d5547506eb"
};

// The application shell files that are downloaded before a service worker can
// start.
const CORE = [
  "/",
"main.dart.js",
"index.html",
"assets/NOTICES",
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
        // lazily populate the cache.
        return response || fetch(event.request).then((response) => {
          cache.put(event.request, response.clone());
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
