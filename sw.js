/**
 * Welcome to your Workbox-powered service worker!
 *
 * You'll need to register this file in your web app and you should
 * disable HTTP caching for this file too.
 * See https://goo.gl/nhQhGp
 *
 * The rest of the code is auto-generated. Please don't update this file
 * directly; instead, make changes to your Workbox build configuration
 * and re-run your build process.
 * See https://goo.gl/2aRDsh
 */

importScripts("https://storage.googleapis.com/workbox-cdn/releases/4.3.1/workbox-sw.js");

self.addEventListener('message', (event) => {
  if (event.data && event.data.type === 'SKIP_WAITING') {
    self.skipWaiting();
  }
});

/**
 * The workboxSW.precacheAndRoute() method efficiently caches and responds to
 * requests for URLs in the manifest.
 * See https://goo.gl/S9QRab
 */
self.__precacheManifest = [
  {
    "url": "build/images/burger_menu/burger_menu.png",
    "revision": "6d160aa625e75083322c659563e80e5f"
  },
  {
    "url": "build/images/burger_menu/burger_menu@2x.png",
    "revision": "9751b41c9aa745f115dd93b9bf69a068"
  },
  {
    "url": "build/images/close/close.png",
    "revision": "284574fe59286e179d876475af629f1f"
  },
  {
    "url": "build/images/close/close@2x.png",
    "revision": "6c94e90691d834369d4d84a00fd68c3d"
  },
  {
    "url": "build/images/facebook/Facebook_Color.png",
    "revision": "736f209c86c979f9cb0302378287a67c"
  },
  {
    "url": "build/images/facebook/Facebook_Color@2x.png",
    "revision": "100281a05b901704679708deb9c061f0"
  },
  {
    "url": "build/images/facebook/Facebook.png",
    "revision": "77fb72deafc7c3a8c69267f7a19c7f89"
  },
  {
    "url": "build/images/facebook/Facebook@2x.png",
    "revision": "e124ef21e65be53b8750b36b1b4a1377"
  },
  {
    "url": "build/images/google/Google +_Color.png",
    "revision": "3894490c21b25ee59937ae73b23f5f12"
  },
  {
    "url": "build/images/google/Google +_Color@2x.png",
    "revision": "53f811b04c74289864456ec8ca9d2b84"
  },
  {
    "url": "build/images/google/Google +.png",
    "revision": "086be95de88096a8fbd389666fcba862"
  },
  {
    "url": "build/images/google/Google +@2x.png",
    "revision": "5c3d35f9c3f4bf365c3b659e2f841511"
  },
  {
    "url": "build/images/instagram/Instagram_Color.png",
    "revision": "6ea9e96c757be4d2a5c133807427d5de"
  },
  {
    "url": "build/images/instagram/Instagram_Color@2x.png",
    "revision": "9e071bbaa0528d48b721624bcc5f791d"
  },
  {
    "url": "build/images/instagram/Instagram.png",
    "revision": "def92d3d2be8626dbdd3abddc2d60a72"
  },
  {
    "url": "build/images/instagram/Instagram@2x.png",
    "revision": "9e79826cc97d878c9d4e13ba46f33f5c"
  },
  {
    "url": "build/images/item_bg_modal_desktop.jpg",
    "revision": "ed2dcecfcc82198cf9cb3196daff7997"
  },
  {
    "url": "build/images/item_bg_tablet.jpg",
    "revision": "0d085e85f7f9b4913fbaa1d7f392fb4c"
  },
  {
    "url": "build/images/item_bg.jpg",
    "revision": "03dfd216ef46ec21c29a6330d5d03ed0"
  },
  {
    "url": "build/images/location/location_contacts_mobile.png",
    "revision": "36acaaef54a99bd2fd1653a0c3cd51bf"
  },
  {
    "url": "build/images/location/location_contacts.png",
    "revision": "6aa770d06d11f9d899c7aeb04bd24569"
  },
  {
    "url": "build/images/location/location_contacts@2x.png",
    "revision": "55c8c1a0148d2ef5c9d69f4e731ae411"
  },
  {
    "url": "build/images/logo/Logo_mobile.png",
    "revision": "db8c1e51557505a898c7b3c3f35cbdea"
  },
  {
    "url": "build/images/logo/Logo_mobile@2x.png",
    "revision": "9d5e2096a56dcfc57ed05028a5b099d6"
  },
  {
    "url": "build/images/logo/logo.png",
    "revision": "12891c127b8c9d2398fcbfa9c6101636"
  },
  {
    "url": "build/images/logo/logo@2x.png",
    "revision": "dba4867e0a1fa70a7e5056211892a19b"
  },
  {
    "url": "build/images/pinterest/Pinterest_Color.png",
    "revision": "9487063eea76d4acf935747427bea3d4"
  },
  {
    "url": "build/images/pinterest/Pinterest_Color@2x.png",
    "revision": "66a031418ef9c86ac75cd871493f26d7"
  },
  {
    "url": "build/images/pinterest/Pinterest.png",
    "revision": "270418676deb91e99044086d83780e07"
  },
  {
    "url": "build/images/pinterest/Pinterest@2x.png",
    "revision": "efda50789779cd9748c8b38cd4ab5668"
  },
  {
    "url": "build/images/search/search_mobile.png",
    "revision": "0403c551af66bbe4ec461122ada1d879"
  },
  {
    "url": "build/images/search/search_mobile@2x.png",
    "revision": "f96d72e8c4fe7b27af3dc4504da69b6d"
  },
  {
    "url": "build/images/search/search.png",
    "revision": "a026e18da0b6766e6a7fbaa2163cc54f"
  },
  {
    "url": "build/images/search/search@2x.png",
    "revision": "36f229d2a9759146c5b1958bd80a5c00"
  },
  {
    "url": "build/images/twitter/Twitter_Color.png",
    "revision": "19357ad3118700b4ee28e01aef5e57ab"
  },
  {
    "url": "build/images/twitter/Twitter_Color@2x.png",
    "revision": "51859d451ebc57261466e9da649d8b2a"
  },
  {
    "url": "build/images/twitter/Twitter.png",
    "revision": "affb488809697ad8d3f62b266d7b17f5"
  },
  {
    "url": "build/images/twitter/Twitter@2x.png",
    "revision": "c0daf3f5d020e70c7bfcad0e57cb4702"
  },
  {
    "url": "build/images/youtube/YouTube_Color.png",
    "revision": "8e88aaeae902c22f0ea91829b8ecfcf2"
  },
  {
    "url": "build/images/youtube/YouTube_Color@2x.png",
    "revision": "c610c72888e89dc9247587aa7d0f8ceb"
  },
  {
    "url": "build/images/youtube/YouTube.png",
    "revision": "88bee926a04740f8b91a28a37087656b"
  },
  {
    "url": "build/images/youtube/YouTube@2x.png",
    "revision": "0d273c384715a3da671a23ae910560ba"
  },
  {
    "url": "build/stylesheets/style.min.css",
    "revision": "697534c73386dbdf4836cda725e34f60"
  },
  {
    "url": "index.html",
    "revision": "3ad2536fd8d7eda06e112e51e1274022"
  },
  {
    "url": "src/img/burger_menu/burger_menu.png",
    "revision": "9cbee1e62d75ce5952e8242d3d86c41f"
  },
  {
    "url": "src/img/burger_menu/burger_menu@2x.png",
    "revision": "203f55bb4188736364dbd474fec117cc"
  },
  {
    "url": "src/img/close/close.png",
    "revision": "bb381b8abd87f2b0b3e54563466d81f7"
  },
  {
    "url": "src/img/close/close@2x.png",
    "revision": "db61dcb10672a60901fe95ed8e12b3f1"
  },
  {
    "url": "src/img/facebook/Facebook_Color.png",
    "revision": "f4bc9e2eb2745ccd89e7cc04b7c9a4bd"
  },
  {
    "url": "src/img/facebook/Facebook_Color@2x.png",
    "revision": "9a54a8fca8402efe5dc1bb6b554f260e"
  },
  {
    "url": "src/img/facebook/Facebook.png",
    "revision": "6bc58511907d3ea74f97d9ac57879a87"
  },
  {
    "url": "src/img/facebook/Facebook@2x.png",
    "revision": "91893fed1b41329e78623bacba26ddfc"
  },
  {
    "url": "src/img/google/Google +_Color.png",
    "revision": "6bc07d71a589c668e013960eebc99a46"
  },
  {
    "url": "src/img/google/Google +_Color@2x.png",
    "revision": "072bf4753b27ee395a0ba0b566e073a6"
  },
  {
    "url": "src/img/google/Google +.png",
    "revision": "061d0d77acb66f47ff2ff86d05c467a5"
  },
  {
    "url": "src/img/google/Google +@2x.png",
    "revision": "c7209fdba58ff21fcd591b23b5ac79c9"
  },
  {
    "url": "src/img/instagram/Instagram_Color.png",
    "revision": "430fdf94044146be72b183759d12d5be"
  },
  {
    "url": "src/img/instagram/Instagram_Color@2x.png",
    "revision": "b43a540bcb632f2a48cd23cc7f537fe3"
  },
  {
    "url": "src/img/instagram/Instagram.png",
    "revision": "e11d92747f1e71d02b1c845a86909476"
  },
  {
    "url": "src/img/instagram/Instagram@2x.png",
    "revision": "108061b1856d7eceb7aad68ca2f69086"
  },
  {
    "url": "src/img/item_bg_modal_desktop.jpg",
    "revision": "3639f9f502e7c9475c8c74238a8a1ce1"
  },
  {
    "url": "src/img/item_bg_tablet.jpg",
    "revision": "0edb05403a0b8b61899aeb9884840fc2"
  },
  {
    "url": "src/img/item_bg.jpg",
    "revision": "03dfd216ef46ec21c29a6330d5d03ed0"
  },
  {
    "url": "src/img/location/location_contacts_mobile.png",
    "revision": "cc63845d9f7f5d31b891bf5405aff055"
  },
  {
    "url": "src/img/location/location_contacts.png",
    "revision": "a02af143c486e3c31e8309f2b610c7ab"
  },
  {
    "url": "src/img/location/location_contacts@2x.png",
    "revision": "d59101765348f2dc0036ea312d8ba05f"
  },
  {
    "url": "src/img/logo/Logo_mobile.png",
    "revision": "db8c1e51557505a898c7b3c3f35cbdea"
  },
  {
    "url": "src/img/logo/Logo_mobile@2x.png",
    "revision": "9d5e2096a56dcfc57ed05028a5b099d6"
  },
  {
    "url": "src/img/logo/logo.png",
    "revision": "12891c127b8c9d2398fcbfa9c6101636"
  },
  {
    "url": "src/img/logo/logo@2x.png",
    "revision": "5eeb8253745bc63cee761da34006e537"
  },
  {
    "url": "src/img/pinterest/Pinterest_Color.png",
    "revision": "1239b24526dbf1ff9a57327f2472a3a8"
  },
  {
    "url": "src/img/pinterest/Pinterest_Color@2x.png",
    "revision": "908f02346043ff7e135f5495bbcb7437"
  },
  {
    "url": "src/img/pinterest/Pinterest.png",
    "revision": "2e521044d1c1f7ce62c8f629942bbb8b"
  },
  {
    "url": "src/img/pinterest/Pinterest@2x.png",
    "revision": "3c5910d96093e7a760e1c5f1ed0ea471"
  },
  {
    "url": "src/img/search/search_mobile.png",
    "revision": "0403c551af66bbe4ec461122ada1d879"
  },
  {
    "url": "src/img/search/search_mobile@2x.png",
    "revision": "f96d72e8c4fe7b27af3dc4504da69b6d"
  },
  {
    "url": "src/img/search/search.png",
    "revision": "0b63194af1ffab68fcf949260d78b0d3"
  },
  {
    "url": "src/img/search/search@2x.png",
    "revision": "0f8f66894d3e4714b0794ed7b696c920"
  },
  {
    "url": "src/img/twitter/Twitter_Color.png",
    "revision": "9fd064479c0cc737efb1043d3b3efe29"
  },
  {
    "url": "src/img/twitter/Twitter_Color@2x.png",
    "revision": "ae472a4c77c12b4f8c4ff33f0a14c41e"
  },
  {
    "url": "src/img/twitter/Twitter.png",
    "revision": "cc493b24ed554426f7ffea45e375b42e"
  },
  {
    "url": "src/img/twitter/Twitter@2x.png",
    "revision": "0434a445bc7a7b0625b72894bbb12a8c"
  },
  {
    "url": "src/img/youtube/YouTube_Color.png",
    "revision": "bf476c0e90e00065094047118f9f3a50"
  },
  {
    "url": "src/img/youtube/YouTube_Color@2x.png",
    "revision": "0e04b77c03b176a5ac16834bad77ae8f"
  },
  {
    "url": "src/img/youtube/YouTube.png",
    "revision": "f5eabef6e99a0353e9a6de9fd0d507b4"
  },
  {
    "url": "src/img/youtube/YouTube@2x.png",
    "revision": "31dfec5cf07c99de8c1699d5dbc03e2f"
  }
].concat(self.__precacheManifest || []);
workbox.precaching.precacheAndRoute(self.__precacheManifest, {});
