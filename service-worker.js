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
    "revision": "0fdb83871481276aeb889cf25895d651"
  },
  {
    "url": "about/index.html",
    "revision": "5b4d92c7e110e106c715a7e6be5663b5"
  },
  {
    "url": "assets/css/0.styles.779cc57d.css",
    "revision": "04de91f86faae85adec26c01946f852c"
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
    "url": "assets/js/10.88803f49.js",
    "revision": "c2b572ce6ccff298b86da0edecf7e171"
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
    "url": "assets/js/14.19032b08.js",
    "revision": "3e75c7ad2cfcd3a5ae1c5206708eb3fe"
  },
  {
    "url": "assets/js/15.e5750b9d.js",
    "revision": "97dff3db679cab08fb73b3cf8fecb0b4"
  },
  {
    "url": "assets/js/16.8ba19e3b.js",
    "revision": "5326f15e65390842aa351f3ce063923e"
  },
  {
    "url": "assets/js/17.f69a18fa.js",
    "revision": "cbc22bd5eae825202ee17d43011ff301"
  },
  {
    "url": "assets/js/18.8176adca.js",
    "revision": "fcfd28fba9b99315dcc9c847af4f7ecc"
  },
  {
    "url": "assets/js/19.06380ab8.js",
    "revision": "9e3460c183b22f06df145c6fae58f88e"
  },
  {
    "url": "assets/js/20.424baa72.js",
    "revision": "f495ce5152725392f6935ea98c4f3cfa"
  },
  {
    "url": "assets/js/21.0fa6cf2b.js",
    "revision": "e0216227188646ea65f32d4a8b6da03a"
  },
  {
    "url": "assets/js/22.c1a1252e.js",
    "revision": "f2c4b36ec978a4d666d3c40f4eaae008"
  },
  {
    "url": "assets/js/23.44f7b139.js",
    "revision": "344f8aecfeb88abd3a0563bcf9be5ca2"
  },
  {
    "url": "assets/js/24.fc68cb1c.js",
    "revision": "7e8cf142598591115f69785e2ce99fb1"
  },
  {
    "url": "assets/js/25.d94e71fe.js",
    "revision": "7a3c9943c815ba1dde357f12e2786e71"
  },
  {
    "url": "assets/js/26.309e1972.js",
    "revision": "efe644b041784b706a1b0308482d1c66"
  },
  {
    "url": "assets/js/27.0dc6f0cd.js",
    "revision": "79e30f0e2cd42521388ec2424aff70f3"
  },
  {
    "url": "assets/js/28.4f253e94.js",
    "revision": "d45f4eea14b9d4b3e4e283b8417ebdc4"
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
    "url": "assets/js/app.3f1a6de0.js",
    "revision": "9c3621e488f30b3222dc819615d691f8"
  },
  {
    "url": "avatar.png",
    "revision": "233bfcf7ffa43d9817c8c1d2966138d1"
  },
  {
    "url": "categories/index.html",
    "revision": "c1c7862ac48e22cfb6689c7086c093b4"
  },
  {
    "url": "categories/摘记/index.html",
    "revision": "570855dccf5eff0b8ecdfdc53b3dadcb"
  },
  {
    "url": "categories/笔记/index.html",
    "revision": "55070e1ccc161f150c35d3c9dcb5e3f9"
  },
  {
    "url": "categories/随笔/index.html",
    "revision": "52499bedf184609fb153d1cb71f57582"
  },
  {
    "url": "index.html",
    "revision": "348a841230682fd8792adc6546a1a7c1"
  },
  {
    "url": "leading/js/index.html",
    "revision": "037564ec41e8494236a7cc524e157aa0"
  },
  {
    "url": "leading/js/js函数的四种调用方式.html",
    "revision": "b0d635da899c339ff86090597649d638"
  },
  {
    "url": "leading/js/js对象.html",
    "revision": "68a3521abd1aff4c5031c25dee573deb"
  },
  {
    "url": "leading/vue/index.html",
    "revision": "0614d0ace6592d2767b1d43deb878683"
  },
  {
    "url": "leading/vue/vue基础笔记.html",
    "revision": "8301a61a358fa9b34e691f0d65702b08"
  },
  {
    "url": "leading/vue/vue组件.html",
    "revision": "605407f5e30005d59626913cc5589183"
  },
  {
    "url": "note/index.html",
    "revision": "ca1422f1e2d161b948d6d1cc8f181a88"
  },
  {
    "url": "note/tools/js工具.html",
    "revision": "caba32f26ebfdfc97faadd7fab660f86"
  },
  {
    "url": "note/tools/lodash.html",
    "revision": "fe2008479253aadc2dd2c728cbedc37d"
  },
  {
    "url": "note/tools/react工具.html",
    "revision": "06692f412fa16cb26fbbc7e0d3e3ba43"
  },
  {
    "url": "note/tools/vscode-prettire.html",
    "revision": "1c3909c0bed7c7b7756f9c5d3ecc9e62"
  },
  {
    "url": "note/tools/vue工具.html",
    "revision": "bc8c9215e548df7a83097c4cc3f99900"
  },
  {
    "url": "star.png",
    "revision": "f839cadd169727f31a195d0b53d05807"
  },
  {
    "url": "tag/index.html",
    "revision": "5c7414c4f8187038c130a362f131e44e"
  },
  {
    "url": "tag/js/index.html",
    "revision": "f350c7a1a850623de4c63d76ed0eea45"
  },
  {
    "url": "tag/lodash/index.html",
    "revision": "8c58cf842e86c8d709cfa1d8acbe6a6c"
  },
  {
    "url": "tag/prettire/index.html",
    "revision": "f8aaae72ea1cb1f4604aab3b4e2ea670"
  },
  {
    "url": "tag/react/index.html",
    "revision": "fa8cb0defabb78c96413036383ef543f"
  },
  {
    "url": "tag/Vue/index.html",
    "revision": "8322b14f1efc6743b286c645ef78fedb"
  },
  {
    "url": "tag/句子/index.html",
    "revision": "f020e73cd088a4e1e9ef148c2ead656a"
  },
  {
    "url": "tag/生活/index.html",
    "revision": "d7cf2783cdef813c6ab4d22c07cbe4eb"
  },
  {
    "url": "tag/诗/index.html",
    "revision": "6944b085f146dcaaf142e613ef764115"
  },
  {
    "url": "timeline/index.html",
    "revision": "06c7b0e071df27c0bd7bdcaf378abff1"
  },
  {
    "url": "views/摘记/2022/魁拔-1.html",
    "revision": "22f186da1f5a46f19ce213f1df4e5be9"
  },
  {
    "url": "views/随笔/2022/第一篇-1.html",
    "revision": "d3f0fcf692b0dea1c02239044692094d"
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
