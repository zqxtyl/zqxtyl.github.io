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
    "revision": "e827b93026b4d61b2b8f34509617999b"
  },
  {
    "url": "about/index.html",
    "revision": "bbd48f92611573731243e4b590f4137b"
  },
  {
    "url": "assets/css/0.styles.b8a9563f.css",
    "revision": "37f96eaec2b173f4b338ee29c26e0981"
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
    "url": "assets/js/16.c78789a7.js",
    "revision": "df9423b5f511bd84220612d4d16c8c54"
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
    "url": "assets/js/19.01d33504.js",
    "revision": "5f398e27228b3efe923045c035d0c80c"
  },
  {
    "url": "assets/js/20.6c2e8e4e.js",
    "revision": "1242a9e1283f4a66baa7ac878deb6da4"
  },
  {
    "url": "assets/js/21.4e0e4ced.js",
    "revision": "31b85d79e7d2392eb8aa020c640b918e"
  },
  {
    "url": "assets/js/22.a519b771.js",
    "revision": "faa1a0f977dad049df87b553193d57a6"
  },
  {
    "url": "assets/js/23.c00b8fdb.js",
    "revision": "f54454fb53336bc61f29a2cf91530707"
  },
  {
    "url": "assets/js/24.cc25170d.js",
    "revision": "d73fc768a4d26074d39d802aacbb8c3b"
  },
  {
    "url": "assets/js/25.3db5bea8.js",
    "revision": "4fd96e45b6556c6d1a516f5f885fa061"
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
    "url": "assets/js/app.c0d21a17.js",
    "revision": "6b56691d308f30c58aad8178adf19c07"
  },
  {
    "url": "avatar.png",
    "revision": "233bfcf7ffa43d9817c8c1d2966138d1"
  },
  {
    "url": "categories/index.html",
    "revision": "934f757a2a00a9e4a8fd6ad8c5404c62"
  },
  {
    "url": "categories/js/index.html",
    "revision": "312d1acc3b1e0eae99f37a3ba64e4800"
  },
  {
    "url": "categories/vue/index.html",
    "revision": "af9f1be8ad7f54c2cb54b04eba060d16"
  },
  {
    "url": "categories/摘记/index.html",
    "revision": "d494808b7f0a276cca30654d71481930"
  },
  {
    "url": "categories/随笔/index.html",
    "revision": "6f577215d6ff55ccb844e273cfc6792f"
  },
  {
    "url": "index.html",
    "revision": "d92b291f0f699f341ad825338b4ae4e2"
  },
  {
    "url": "note/index.html",
    "revision": "e3aaf851e5da047caef5559c5b564bb1"
  },
  {
    "url": "note/tools/js工具.html",
    "revision": "bc4c33d9297edbe7b22a2c2420f9d940"
  },
  {
    "url": "note/tools/lodash.html",
    "revision": "20154ebd5f0543f63f56a6026008471f"
  },
  {
    "url": "note/tools/react工具.html",
    "revision": "7661270d682b2707fd4f5bb400df4096"
  },
  {
    "url": "note/tools/vscode-prettire.html",
    "revision": "08feb3abeb775bd0d7a151a7beb48572"
  },
  {
    "url": "note/tools/vue工具.html",
    "revision": "778b00cb3f63f9749396af07b1100047"
  },
  {
    "url": "star.png",
    "revision": "f839cadd169727f31a195d0b53d05807"
  },
  {
    "url": "tag/index.html",
    "revision": "afedb67ee551a1ff22f592d1e6bdb8f6"
  },
  {
    "url": "tag/js/index.html",
    "revision": "3a1ad43693a210ad9229b640b8b6f1fc"
  },
  {
    "url": "tag/lodash/index.html",
    "revision": "b9884a6390fefea33836b2b0ca9e38a8"
  },
  {
    "url": "tag/prettire/index.html",
    "revision": "21bfaf9d478e3dd9af36d1b3fbcd3bde"
  },
  {
    "url": "tag/react/index.html",
    "revision": "4cc901ef96af2e4ccb93ca494de473ac"
  },
  {
    "url": "tag/Vue/index.html",
    "revision": "b87b8f5423298b18a80861ac15120547"
  },
  {
    "url": "tag/句子/index.html",
    "revision": "156f1c78ec6ea6f918631f75c957f53c"
  },
  {
    "url": "tag/生活/index.html",
    "revision": "d517dd449eeaec6ed48e14cc3a1f255d"
  },
  {
    "url": "tag/诗/index.html",
    "revision": "7fcbbd23bffb83c71d3fe51a3557534a"
  },
  {
    "url": "timeline/index.html",
    "revision": "eceed260b73c28dcc6f98be990039074"
  },
  {
    "url": "views/js/js函数的四种调用方式.html",
    "revision": "0741ae9c333953f7b9e8b198a310bb9a"
  },
  {
    "url": "views/js/js对象.html",
    "revision": "6ac2e1525bc86becacfd6939250055b9"
  },
  {
    "url": "views/vue/vue基础笔记.html",
    "revision": "fdcf46211f1e5c2cc36d49b222a691e4"
  },
  {
    "url": "views/vue/vue组件.html",
    "revision": "4bf6396b624622b5b54179a1ac216833"
  },
  {
    "url": "views/摘记/2022/魁拔-1.html",
    "revision": "b76467ccef175f9da4a9dca54fc5d107"
  },
  {
    "url": "views/随笔/2022/第一篇-1.html",
    "revision": "37e8792deb66b085b90a2608c6b874ad"
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
