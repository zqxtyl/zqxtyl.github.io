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
    "revision": "162729353fcce38ff18f19f37c99eea5"
  },
  {
    "url": "about/index.html",
    "revision": "c855e587e26f5229b3f9d0ec60f13960"
  },
  {
    "url": "assets/css/0.styles.b81d0c3a.css",
    "revision": "8d462e63d99143c2d5d73afbaa9e96c3"
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
    "url": "assets/js/13.c70c0eef.js",
    "revision": "bd28ae1879afad217ffa7a440ccdacde"
  },
  {
    "url": "assets/js/14.78d98e62.js",
    "revision": "3e75c7ad2cfcd3a5ae1c5206708eb3fe"
  },
  {
    "url": "assets/js/15.8cb99d28.js",
    "revision": "c52a7b724e5e522a9e0a35c8954a9113"
  },
  {
    "url": "assets/js/16.150f6a57.js",
    "revision": "4199eed7d48225fae2c2338b83506a0c"
  },
  {
    "url": "assets/js/17.b3eb8819.js",
    "revision": "4924b5bc420107af4d7c396d718aa9f1"
  },
  {
    "url": "assets/js/18.224c5ca4.js",
    "revision": "277f19899612d46a415fbe2b0f9ef967"
  },
  {
    "url": "assets/js/19.6eeb790c.js",
    "revision": "41ca2a5a0ef9beaee37b946f7e0d4cd2"
  },
  {
    "url": "assets/js/20.32142987.js",
    "revision": "95f877cafe1c324d6d38abe0620287c6"
  },
  {
    "url": "assets/js/21.bc274b25.js",
    "revision": "484ca6fe31e0dc56f0d44c4769f9136e"
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
    "url": "assets/js/app.5474c765.js",
    "revision": "a0469dc03dacaf3bb268af4a9cd80969"
  },
  {
    "url": "avatar.png",
    "revision": "233bfcf7ffa43d9817c8c1d2966138d1"
  },
  {
    "url": "categories/index.html",
    "revision": "44a028bb1715358397c53bf0324a9d6b"
  },
  {
    "url": "categories/js/index.html",
    "revision": "785eee07524a829a1d822ae65bdf9c05"
  },
  {
    "url": "categories/vue/index.html",
    "revision": "2ed79d8cb677f6f8e3b3ba01c5bfed13"
  },
  {
    "url": "categories/摘记/index.html",
    "revision": "0af824d0ff62388c804509384ea50e4b"
  },
  {
    "url": "categories/随笔/index.html",
    "revision": "9e70cb6edcdb2122c61ec43ef30e23b7"
  },
  {
    "url": "index.html",
    "revision": "351d3f1e0661b59e7c917b7993db2090"
  },
  {
    "url": "note/index.html",
    "revision": "ed86b893a496d505a68ccbda8765b704"
  },
  {
    "url": "note/tools/js工具.html",
    "revision": "214d8c732c76919108a8c0df1cebe08d"
  },
  {
    "url": "note/tools/lodash.html",
    "revision": "6bab858e6ec38a80e33ea9e8d0b37c92"
  },
  {
    "url": "note/tools/react工具.html",
    "revision": "a18c0aab9958121b95e0b961a6622629"
  },
  {
    "url": "note/tools/vscode-prettire.html",
    "revision": "655fd4197ba22a98aeb75275acc81385"
  },
  {
    "url": "note/tools/vue工具.html",
    "revision": "6ef1cacde42b4822556934a7e076bdce"
  },
  {
    "url": "star.png",
    "revision": "f839cadd169727f31a195d0b53d05807"
  },
  {
    "url": "tag/index.html",
    "revision": "9a8aa5644c69422b54bf295ffac6098d"
  },
  {
    "url": "tag/js/index.html",
    "revision": "3fb8be79e08bafb66203af1bbc3f00a2"
  },
  {
    "url": "tag/lodash/index.html",
    "revision": "691863887eb0d434087b4bdd88920ac7"
  },
  {
    "url": "tag/prettire/index.html",
    "revision": "067bb392741a7025fabf6ce1fc662eab"
  },
  {
    "url": "tag/react/index.html",
    "revision": "8dbc6d87e6d0d97c59671df3cbee1a68"
  },
  {
    "url": "tag/Vue/index.html",
    "revision": "17c7b39054bc872b5411e21fa31de07b"
  },
  {
    "url": "tag/句子/index.html",
    "revision": "1e344ecb42d01590cc0b7faaf9a0b34e"
  },
  {
    "url": "tag/生活/index.html",
    "revision": "f5041fd1f946af2be69a51228d02f64a"
  },
  {
    "url": "tag/诗/index.html",
    "revision": "2684fe373d2b361874d971b21baa32e5"
  },
  {
    "url": "timeline/index.html",
    "revision": "2c3db53a1346172029da6994739f2f05"
  },
  {
    "url": "views/js/js函数的四种调用方式.html",
    "revision": "f8fc19361fe16d0cc1586133281a174c"
  },
  {
    "url": "views/js/js对象.html",
    "revision": "c78b7bf402ee77259b004b4c52958b69"
  },
  {
    "url": "views/vue/vue基础笔记.html",
    "revision": "d64f45d63c4fb0f27fa6c3654cf27572"
  },
  {
    "url": "views/vue/vue组件.html",
    "revision": "7cad7963a53d639f4c9b4939c04026c6"
  },
  {
    "url": "views/摘记/2022/魁拔-1.html",
    "revision": "afac53d31b15bf8550732244000c71d6"
  },
  {
    "url": "views/随笔/2022/第一篇-1.html",
    "revision": "06aeded382c5ad73d59df019c9b1f2e0"
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
