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
    "url": "404.html",
    "revision": "cda68f4e0026085248826e569571fef8"
  },
  {
    "url": "about/index.html",
    "revision": "6fed2ddf0f7028ef30edbd88d8a2de58"
  },
  {
    "url": "assets/css/0.styles.5f0033c9.css",
    "revision": "5568318b125f2486e12354b9f73cf797"
  },
  {
    "url": "assets/fonts/iconfont.938fa69e.woff",
    "revision": "938fa69ea89bccb0f20d643cc5f07cbe"
  },
  {
    "url": "assets/fonts/iconfont.ecabaf00.ttf",
    "revision": "ecabaf00c2c5be9907d524bb21a0f0dc"
  },
  {
    "url": "assets/img/bg.2cfdbb33.svg",
    "revision": "2cfdbb338a1d44d700b493d7ecbe65d3"
  },
  {
    "url": "assets/img/iconfont.36767f3e.svg",
    "revision": "36767f3efa2e4c880f42a42e8b2075b0"
  },
  {
    "url": "assets/js/1.2ddc35b3.js",
    "revision": "4d1956b2dfec9c01748cdbd533a654ca"
  },
  {
    "url": "assets/js/10.f572a718.js",
    "revision": "fbeba052bcbc5e7fc1973ba24ee67b34"
  },
  {
    "url": "assets/js/11.165f0e67.js",
    "revision": "740ac4622957c79b33ecaef617c9e7e7"
  },
  {
    "url": "assets/js/12.4400b787.js",
    "revision": "24b12e268df72296571ec6d894a292a0"
  },
  {
    "url": "assets/js/13.3ec40893.js",
    "revision": "88b92df359ff380e7f86b123a33d08d6"
  },
  {
    "url": "assets/js/14.95b8f77a.js",
    "revision": "c061fcf2826360b7140224a41e958842"
  },
  {
    "url": "assets/js/15.f7f592f3.js",
    "revision": "5cfdadfc7b70f21800580580dfe790a5"
  },
  {
    "url": "assets/js/16.54973772.js",
    "revision": "4e210a3e5a2b20644d2e709092580b71"
  },
  {
    "url": "assets/js/17.4235c629.js",
    "revision": "8e43db83aae9cafbd241fe63d186f566"
  },
  {
    "url": "assets/js/18.325f3ecd.js",
    "revision": "2651edbd1364aa548cbc09cb9d788b60"
  },
  {
    "url": "assets/js/19.01d33504.js",
    "revision": "5f398e27228b3efe923045c035d0c80c"
  },
  {
    "url": "assets/js/20.5cd3e137.js",
    "revision": "3553caf9d315d9e2b056c7c4cd2fa85b"
  },
  {
    "url": "assets/js/21.4e0e4ced.js",
    "revision": "31b85d79e7d2392eb8aa020c640b918e"
  },
  {
    "url": "assets/js/22.b1763443.js",
    "revision": "6460e9ad7645aee49e37ef089e20dcdb"
  },
  {
    "url": "assets/js/23.688d3cf4.js",
    "revision": "bdda48596b5050c5dc3bb1b088874912"
  },
  {
    "url": "assets/js/24.c1391814.js",
    "revision": "3163fb5fc82b88b21b955e5f388ae9c8"
  },
  {
    "url": "assets/js/25.0eaf8564.js",
    "revision": "1468571a8b18a2125694ca1669291127"
  },
  {
    "url": "assets/js/26.2457dcc9.js",
    "revision": "2b35529a0009312d92e1648d94d5032c"
  },
  {
    "url": "assets/js/3.8932f535.js",
    "revision": "6c01fc3765ac239f9d9ab323d20d66a7"
  },
  {
    "url": "assets/js/4.9200271a.js",
    "revision": "9ef4fd9060bb0d56afb33f30f8a8bddb"
  },
  {
    "url": "assets/js/5.83173da6.js",
    "revision": "54a78cbf0bbc732cd962985f0c0da2a6"
  },
  {
    "url": "assets/js/6.be1e59b2.js",
    "revision": "c36a497c64f5d02f8140cd2a3894b433"
  },
  {
    "url": "assets/js/7.4f757f54.js",
    "revision": "a3a44099558b936203c3eb2f73c15aaf"
  },
  {
    "url": "assets/js/8.6c0811ab.js",
    "revision": "bdd9409a330c5f6e21ea2e6ffb708dc6"
  },
  {
    "url": "assets/js/9.c4a48ac2.js",
    "revision": "50d6893362d6ddd97cd5ef06cb2e5ba1"
  },
  {
    "url": "assets/js/app.fc9b3f68.js",
    "revision": "f53344d6952c93b301f8b3434850aeb0"
  },
  {
    "url": "avatar.png",
    "revision": "233bfcf7ffa43d9817c8c1d2966138d1"
  },
  {
    "url": "categories/index.html",
    "revision": "1fc9e539191df475de98d0991377961e"
  },
  {
    "url": "categories/js/index.html",
    "revision": "fe71da7de00acc6308c009e403c6d8bc"
  },
  {
    "url": "categories/vue/index.html",
    "revision": "669c8261077dd2c42140b74775288a32"
  },
  {
    "url": "categories/摘记/index.html",
    "revision": "1fbb7ff157ff30b8ac46012e312af3b9"
  },
  {
    "url": "categories/随笔/index.html",
    "revision": "7d9cb65d33bb606f8505340b8ecc8635"
  },
  {
    "url": "index.html",
    "revision": "b6f20f584568e1b3dfa6d5f9f5e71424"
  },
  {
    "url": "note/index.html",
    "revision": "6dcbffefb29cf7ed3ea4cddbffe28813"
  },
  {
    "url": "note/tools/js工具.html",
    "revision": "8d9e4b8aa5d83231755f3841c43d470d"
  },
  {
    "url": "note/tools/lodash.html",
    "revision": "6e61e317f961fb59b75d0501e5dbc6b4"
  },
  {
    "url": "note/tools/react工具.html",
    "revision": "e5d3c84c077991215e8d8c6decf91fcf"
  },
  {
    "url": "note/tools/vscode-prettire.html",
    "revision": "095344ec8b37b72c39aa2aac61532398"
  },
  {
    "url": "note/tools/vue工具.html",
    "revision": "2f1ff0890a188286834c015765431fe2"
  },
  {
    "url": "star.png",
    "revision": "f839cadd169727f31a195d0b53d05807"
  },
  {
    "url": "tag/index.html",
    "revision": "400fc8d3273d643c2ad156a573c677b2"
  },
  {
    "url": "tag/js/index.html",
    "revision": "866d86c8c0f56f85bb155500709a9b70"
  },
  {
    "url": "tag/lodash/index.html",
    "revision": "c3eecab4b3e0597a36b1faad2da5e1c8"
  },
  {
    "url": "tag/prettire/index.html",
    "revision": "3d0423af8615902c864658a2078b928e"
  },
  {
    "url": "tag/react/index.html",
    "revision": "cc424c0e6fbb87f72ac8cc09bf8aa539"
  },
  {
    "url": "tag/Vue/index.html",
    "revision": "44a91f2ce192f870d21a02e6ad58f99a"
  },
  {
    "url": "tag/句子/index.html",
    "revision": "fc3d4c092843b4bdd79bb753c4e5c291"
  },
  {
    "url": "tag/生活/index.html",
    "revision": "da2602b80c64465e151c864292f76b58"
  },
  {
    "url": "tag/诗/index.html",
    "revision": "5f797478da1030423c6859dd0b89f416"
  },
  {
    "url": "timeline/index.html",
    "revision": "1ce993aa6ce06a5b6d8b7ff8c663447e"
  },
  {
    "url": "views/js/js函数的四种调用方式.html",
    "revision": "c423ad8fa79bfd63edfdb989caa895b5"
  },
  {
    "url": "views/js/js对象.html",
    "revision": "7aacf786f474240a8e2a748bf56a835f"
  },
  {
    "url": "views/vue/vue基础笔记.html",
    "revision": "253cb13e4f1c26dc6d220fa20daa5843"
  },
  {
    "url": "views/vue/vue组件.html",
    "revision": "111fb431a3fb10edc4320d601b11bc07"
  },
  {
    "url": "views/摘记/2022/魁拔-1.html",
    "revision": "8c81f8e80889afd80a64a8ab9872c644"
  },
  {
    "url": "views/随笔/2022/第一篇-1.html",
    "revision": "4bae776a2c626ad66d45524b61419747"
  }
].concat(self.__precacheManifest || []);
workbox.precaching.precacheAndRoute(self.__precacheManifest, {});
addEventListener('message', event => {
  const replyPort = event.ports[0]
  const message = event.data
  if (replyPort && message && message.type === 'skip-waiting') {
    event.waitUntil(
      self.skipWaiting().then(
        () => replyPort.postMessage({ error: null }),
        error => replyPort.postMessage({ error })
      )
    )
  }
})
