'use strict';
const MANIFEST = 'flutter-app-manifest';
const TEMP = 'flutter-temp-cache';
const CACHE_NAME = 'flutter-app-cache';
const RESOURCES = {
  "version.json": "0bf8291397813ea0cdaab2b69ca9dddb",
"index.html": "e6c0dee9d98b3fcadce483ce10b4120f",
"/": "e6c0dee9d98b3fcadce483ce10b4120f",
"main.dart.js": "c6476fb123b2dcb870b3dc4e536fda4a",
"cors.json": "a0b74ecfb5b0504aaa095f6296578412",
"favicon.png": "5dcef449791fa27946b3d35ad8803796",
"icons/Icon-192.png": "ac9a721a12bbc803b44f645561ecb1e1",
"icons/Icon-512.png": "96e752610906ba2a93c65f8abe1645f1",
"manifest.json": "5adfacefce46e06e921ee9749b841011",
".git/config": "697e3b95d748a9fac9f6a8994bd99c05",
".git/objects/61/2dd2aae1711fb9a5bfeeb99f9e71514f218d9e": "fa9023ba7819d84e5a2db89268627dd3",
".git/objects/61/100112bdf42b95c2809618989d95f869cc1fb3": "b7fa3bde8878629e8d9187f3aa8fd33a",
".git/objects/0c/f9f19a760dd9569cd748e8c618b99b1db35041": "ee19ce3415ae1253cad5710e2ed5b48a",
".git/objects/9e/0fc51367f8d4cd4d01b417cc4cb8b9c7b6a9c9": "f6902d3a3e8fa1fd4b133afecdd5e433",
".git/objects/32/46ad559eeae0370195978eaed83f1053ee13fd": "a043dbc0a0bda96ce2127799ccc27506",
".git/objects/3d/6861b42396c609e26f38f129383c558e332281": "5094a76191110339c6815fd8ca04f5b7",
".git/objects/67/f7e68f22fbd4bd425659168eb67dbcc434119a": "7ccb05f4deaf953d079c630a05f9abcb",
".git/objects/93/fcc5a0d6af4a493198f32d6622e5663a25cf64": "c333fc53648acd81bc1de891044d9b5a",
".git/objects/94/2e91665ea286f82843c52c653dea795282a9b5": "5ae266e07bb1335c6c773c9bdb0a3fba",
".git/objects/be/ab90df44941cac41ef7c053c403e73479c3301": "684cbde32c526827b2326730e22f94d2",
".git/objects/bd/f6a958cd56752d0ab92f80c936e77e9204a279": "bacd9f2a4310c6cb322fc2ee8f23c7c8",
".git/objects/ae/b014865ae3ec6f98ca1c76f1f6d6ae1d35e5e3": "5454ab192452cee30ada252646c7b848",
".git/objects/ab/0e98497a51ead7821d1da35a24968ff314e50f": "557c35fe3928eb2af403d1b3926bb9ba",
".git/objects/e5/951dfb943474a56e611d9923405cd06c2dd28d": "c6fa51103d8db5478e1a43a661f6c68d",
".git/objects/c7/0743f28382402c7f85ae64a253a623f741ccc3": "303d19480cde80385c283a3f64716cb0",
".git/objects/c9/eeed251881af6c25e4453cba250852780e317b": "f6bf0a0838af91965fd8d7a3bd8304a3",
".git/objects/fe/ddc9ae4af33121c6c693b06a63d4defa40996b": "7969636d79fe64c43f20ddbca2abf462",
".git/objects/c8/119bbf8987245988e9b74828485a02898ec5f6": "3c117f7877d0d1f48ba42befdf204ec7",
".git/objects/20/5bb5db271c6d8de8399864c7bb9b917f638893": "c993b22f115d7f3ae6d5b7b212806539",
".git/objects/27/edc27fdb01b6c97b2bbc4ffee1a266e5d24647": "2c87d37600db3707c6f91a8e9c35704f",
".git/objects/4b/825dc642cb6eb9a060e54bf8d69288fbee4904": "75589287973d2772c2fc69d664e10822",
".git/objects/11/d54f7be0371d42c8073a266aaa86e45db683eb": "6fdb526f0d154163d7a390c6746d2071",
".git/objects/11/b38ca1411ae980f78fb76f80c0d194d33b12ef": "bd26245e5efe4d045c1583fa5ebb10b3",
".git/objects/74/3e046bbfb5eb81e31b8b3724e615b3c04ef20b": "cf062572cf57fa621d1a8fa0dfcde1ec",
".git/objects/1a/7e8feaca0a334c68621e8234f7a0f948dfbde6": "864afc09c5cb3b78d53d43e0512f0ea8",
".git/objects/8a/aa46ac1ae21512746f852a42ba87e4165dfdd1": "1d8820d345e38b30de033aa4b5a23e7b",
".git/objects/10/7427d896ee6c9cd391d158908cf1f049d513be": "9d050aef435d2b4c0964504210651915",
".git/objects/75/1dc7cb7a381f2d1bd26a92393d8bbfe879cee1": "f3887ca94fb26ea2d2575631a9110dc1",
".git/objects/88/cfd48dff1169879ba46840804b412fe02fefd6": "e42aaae6a4cbfbc9f6326f1fa9e3380c",
".git/objects/07/6ab77bb6ae412d5e43676941cc770aa279999b": "f3328941c8d3490c7b2c74466ebe94c2",
".git/objects/07/1800413d0bfc5080685db2cd8e2004a75ccd6b": "0efc902c84b316ba0149faaeb3b6c0e8",
".git/objects/38/416f96d0d6884836a631d1681172ebe5b0775f": "932ab9887dd5c105d3b8fb3c8f835abc",
".git/objects/38/3acffc41fba95503b9531187aacdaaa2deb289": "18b0bd518ebb2ae329aca02b9dcbd329",
".git/objects/6e/831465da3f93a37202c5304936f657e93332c2": "52c1cdf16b392df1b0c1c5078f7e4011",
".git/objects/5d/53d687fdf9ce8d4975d283bb06d80081031a46": "4bbda8f7ea8771f4f34b6c24e557e01a",
".git/objects/31/efb782540c9671b3fe2b55ba2df78af7205cbf": "555bfa4ce15b0139c7ad551190a5d315",
".git/objects/96/6806dbe8deec109579cb18fd51c3a34d13f63c": "68c87e73e09f72e7de70dd909f5f410a",
".git/objects/54/782fff40eaa6c89abbbf1551d36658b78acac6": "da9c9a44a81f0a7e382b6d0baa7c56f9",
".git/objects/98/0c59f07575f54235eb360b5713614809e5e83e": "6a1f4dc40d29c347e6efbe09ebf9d8dd",
".git/objects/53/7d678dd78e35714328ae259d3b2b5d226ce843": "7cb1f3008411b86bfbcd49a833a0165d",
".git/objects/3f/e0f2a8d9ca08edad1ca781bad505e587a85a52": "84d4f1aba8096e0bed74ad595f083ff9",
".git/objects/30/fb9f5e31da15cfc5e072c3a34d14564659bcf4": "6ec2f87411464995d455e877916f1dd0",
".git/objects/37/42457900d51ae5c34ed53657ed8a72f17f19c6": "14c972e5155e5aa3bf2db2ef8589e81a",
".git/objects/37/ae06d38f6842fee5c0e0d59da98649784d9e3a": "2835f7a337fc0ca0dbebf9cd462bcc52",
".git/objects/06/cbbdbdb9bdaece60c385ac45d713a4a9587728": "0131c9b2c5cd1c71218be65038e0e55a",
".git/objects/6c/1857486decf81cf5738a7522267ce947192963": "1faff875a3056b26fe8772633eb8f432",
".git/objects/6c/3b8ff5008a58c342ee6aed0f0ebb272de0e142": "f669eca34ad6e3001072014353f43af5",
".git/objects/99/0d04f8c5c12346abfd58d149f7d79db8a78956": "8b58d7c5bc967469b49ab55bd95b862c",
".git/objects/63/ecf6d708a9d6f27d648787cea8891003976d82": "475e19aa8ebc8c0c1bbc4846eea44d4b",
".git/objects/bf/934dbba3b2bd6c21c6c6c3f181146f299f89f6": "b333b48cd59e3d4377acd725fced2721",
".git/objects/dd/38fa18c0432c58b113a3b5b4f456981813f16b": "7e9b4774c6ee1798bab00c54012637d3",
".git/objects/b7/49bfef07473333cf1dd31e9eed89862a5d52aa": "36b4020dca303986cad10924774fb5dc",
".git/objects/b7/4e6c2cf8757d415e6d886c644703a5ec89ee2d": "648b3e6b488aca04e0e88242a80db15d",
".git/objects/b0/b3562e744071fff45dd52297a8781a6351af2d": "f97e7e3c7c35f70eb0c2f62bf81fdc38",
".git/objects/a1/3837a12450aceaa5c8e807c32e781831d67a8f": "bfe4910ea01eb3d69e9520c3b42a0adf",
".git/objects/c3/274c3d5af3f2ed8672ffa227eb87831c374c63": "ce3febd17fb47379d7896ad4de28578b",
".git/objects/e6/7f6e3d83457569f37869cb4f09ab6702496c59": "aa28a0dedc9408ebc31ee15d3f54e49b",
".git/objects/f9/7a38e81add7420f66cf4ea24abde4bc42538e7": "c6784ff1df1edd893c240807e4e96c11",
".git/objects/c5/e33b52501520ca0edad4aab176cb3484a7b91b": "0d3a1e627d8338ca07eabca9d1074107",
".git/objects/e9/b765042a1df4fd333003d6c0b91e16a9de6488": "34a72d7b98a288e97281327fbaba07b1",
".git/objects/cb/f6d97d10b1a6c432b19d42b8d70da6744e9962": "c4d535e2123441682e324069b7f0c52a",
".git/objects/e0/42286803db50f256499f2d8c83f5bb234ab53c": "537ed311b93881f3550c6190bec714e7",
".git/objects/2c/b35cd27be16e9c39ad400617493140ad50d66e": "5252a3d9ea64be6291fed2ccd7fdb2c7",
".git/objects/79/ba7ea0836b93b3f178067bcd0a0945dbc26b3f": "f3e31aec622d6cf63f619aa3a6023103",
".git/objects/1b/92f575e046612538ccee092f9b9a90841c0884": "55c16bcc53e14c149e1ed3b6de40c3cf",
".git/objects/77/d5d08921d7f20ca0fdcc90772953fa9c982336": "bb28d6fd0bffd55fffc71999c7290e61",
".git/objects/8d/00df6471b44ea7cce80e70f4fe4d41b889d77e": "1643f16c2870adc4fd24f324f36a78a7",
".git/objects/8c/811045c83f00d40954dbb906e169b84f1e0274": "58c2de271a86d944fbadca96c81c38ba",
".git/objects/76/418b415e13ed37ee25f9b78a0ce9a41b1e83dd": "2b2a73666aab9dacbe32390e78d457b4",
".git/objects/40/08f1a611885439aae799acb8ee6b577622775d": "5c61ebff9cd777c677db50700dccb46f",
".git/objects/2e/b19acd7c682b220cfc5166fc6adec9011a70bc": "8506a177160bceb0487395e684393619",
".git/objects/8b/a7920818c5536eaf714219810ec3aed926faec": "ae3ef19a51f32223f6259ce79722dff4",
".git/objects/22/c548f19e8fb615b4fce9f38c86f07512ac2a79": "c6591cd5c2de57ccc68933be945847d3",
".git/HEAD": "4cf2d64e44205fe628ddd534e1151b58",
".git/info/exclude": "036208b4a1ab4a235d75c181e685e5a3",
".git/logs/HEAD": "20bad40a06bfdce9fd65432b9d0583d6",
".git/logs/refs/heads/master": "20bad40a06bfdce9fd65432b9d0583d6",
".git/logs/refs/remotes/origin/master": "afa8b3e4005db79296782a1e61a5cb7c",
".git/description": "a0a7c3fff21f2aea3cfa1d0316dd816c",
".git/hooks/commit-msg.sample": "579a3c1e12a1e74a98169175fb913012",
".git/hooks/pre-rebase.sample": "56e45f2bcbc8226d2b4200f7c46371bf",
".git/hooks/pre-commit.sample": "305eadbbcd6f6d2567e033ad12aabbc4",
".git/hooks/applypatch-msg.sample": "ce562e08d8098926a3862fc6e7905199",
".git/hooks/fsmonitor-watchman.sample": "ea587b0fae70333bce92257152996e70",
".git/hooks/pre-receive.sample": "2ad18ec82c20af7b5926ed9cea6aeedd",
".git/hooks/prepare-commit-msg.sample": "2b5c047bdb474555e1787db32b2d2fc5",
".git/hooks/post-update.sample": "2b7ea5cee3c49ff53d41e00785eb974c",
".git/hooks/pre-merge-commit.sample": "39cb268e2a85d436b9eb6f47614c3cbc",
".git/hooks/pre-applypatch.sample": "054f9ffb8bfe04a599751cc757226dda",
".git/hooks/pre-push.sample": "2c642152299a94e05ea26eae11993b13",
".git/hooks/update.sample": "647ae13c682f7827c22f5fc08a03674e",
".git/hooks/push-to-checkout.sample": "c7ab00c7784efeadad3ae9b228d4b4db",
".git/refs/heads/master": "9b64b9c6a038304735a0606e07e4a42e",
".git/refs/remotes/origin/master": "9b64b9c6a038304735a0606e07e4a42e",
".git/index": "ceecacfad464d656c96644800c1854e9",
".git/COMMIT_EDITMSG": "4594b43a003655460f117ea90c9c73a8",
"assets/AssetManifest.json": "249f7b225f14692873247719359d156a",
"assets/NOTICES": "a882a39473dc6b60e9b30eb7e328292c",
"assets/FontManifest.json": "2ce6045a7428198d81b638a52cd3f86f",
"assets/packages/cupertino_icons/assets/CupertinoIcons.ttf": "6d342eb68f170c97609e9da345464e5e",
"assets/fonts/Roboto-Regular.ttf": "f36638c2135b71e5a623dca52b611173",
"assets/fonts/OtomanopeeOne-Regular.ttf": "2e677648bbd5ac3c790c0ea2dd891dc2",
"assets/fonts/MaterialIcons-Regular.otf": "4e6447691c9509f7acdbf8a931a85ca1",
"assets/fonts/Roboto-Bold.ttf": "9ece5b48963bbc96309220952cda38aa"
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
