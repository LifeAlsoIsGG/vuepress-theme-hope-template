if(!self.define){const e=e=>{"require"!==e&&(e+=".js");let s=Promise.resolve();return a[e]||(s=new Promise(async s=>{if("document"in self){const a=document.createElement("script");a.src=e,document.head.appendChild(a),a.onload=s}else importScripts(e),s()})),s.then(()=>{if(!a[e])throw new Error(`Module ${e} didn’t register its module`);return a[e]})},s=(s,a)=>{Promise.all(s.map(e)).then(e=>a(1===e.length?e[0]:e))},a={require:Promise.resolve(s)};self.define=(s,f,i)=>{a[s]||(a[s]=Promise.resolve().then(()=>{let a={};const d={uri:location.origin+s.slice(1)};return Promise.all(f.map(s=>{switch(s){case"exports":return a;case"module":return d;default:return e(s)}})).then(e=>{const s=i(...e);return a.default||(a.default=s),a})}))}}define("./service-worker.js",["./workbox-f8d4e228"],(function(e){"use strict";e.setCacheNameDetails({prefix:"mr-hope"}),self.addEventListener("message",e=>{e.data&&"SKIP_WAITING"===e.data.type&&self.skipWaiting()}),e.clientsClaim(),e.precacheAndRoute([{url:"assets/css/0.styles.3a1bc531.css",revision:"34cd722c1408a271016efe3d05321b66"},{url:"assets/img/danger-dark.5fb01a54.svg",revision:"5fb01a54b1893112ce78f6bf6fe7b9b6"},{url:"assets/img/danger.6e8b05e0.svg",revision:"6e8b05e040e31db4b52092926ac89628"},{url:"assets/img/default-skin.b257fa9c.svg",revision:"b257fa9c5ac8c515ac4d77a667ce2943"},{url:"assets/img/info-dark.9cb8f08f.svg",revision:"9cb8f08f92e9e47faf596484d9af636a"},{url:"assets/img/info.b3407763.svg",revision:"b3407763d94949efc3654309e9a2202f"},{url:"assets/img/search.83621669.svg",revision:"83621669651b9a3d4bf64d1a670ad856"},{url:"assets/img/tip-dark.36f60759.svg",revision:"36f607593c4f5274775cb24f1edf4389"},{url:"assets/img/tip.fa255ccc.svg",revision:"fa255cccbbef66519a1bb90a5bed6f24"},{url:"assets/img/warning-dark.34208d06.svg",revision:"34208d0652668027b5e1797bdafd2da9"},{url:"assets/img/warning.950d1128.svg",revision:"950d1128cc862f2b631f5d54c3458174"},{url:"assets/js/30.c2ddfdde.js",revision:"d192c9db1f7225aaba5c02589db6b963"},{url:"assets/js/31.8df8c0ac.js",revision:"2025b56a6d1e4da5355b7f38f19a2926"},{url:"assets/js/32.fee5a185.js",revision:"d8ab4bd51463fc36a575ecbb7c1152b5"},{url:"assets/js/33.c810b383.js",revision:"4845ae1a49d7f0d12044ccab841987df"},{url:"assets/js/34.01cf2d95.js",revision:"485358ef4add996f49ef5d0d02e8635b"},{url:"assets/js/app.f3b13267.js",revision:"24442556aaef7caef60c0769b7cc2f84"},{url:"assets/js/layout-Blog.d0896371.js",revision:"5fc8e14911e099b420c2d1836515014a"},{url:"assets/js/layout-Layout.30343ef2.js",revision:"ec3d5e1b0b9e7228f81f712199e14a57"},{url:"assets/js/layout-NotFound.6f1a24b3.js",revision:"dfffe2a62facb3d2ec991be5368f1319"},{url:"assets/js/layout-Slide.a8386f99.js",revision:"73fac5c5f1f5914e928c344f44c7e80b"},{url:"assets/js/page-Componentdisabled--7968f062.d0f2ac4f.js",revision:"9ab9974c9c4968332d8a62e518fb0925"},{url:"assets/js/page-Encryptionarticle--5e0aaa7c.91a99e4a.js",revision:"8778cec96db115b9297edbf60ce28fcd"},{url:"assets/js/page-Guides--d3ab37c2.a61b6299.js",revision:"04974a02d85ea34455f1ebf743304dca"},{url:"assets/js/page-IntroPage--a015a0fc.bba0fde2.js",revision:"97fb9dccb2070b4d6b5fc15412db71cb"},{url:"assets/js/page-MarkdownEnhance--1c1c2fac.92760cb1.js",revision:"5125fa034940d846b92c37fbc1eead5e"},{url:"assets/js/page-Markdown增强--d3a2f5bc.cd634b4e.js",revision:"32eb706e755cbd8777a5f08d46481cea"},{url:"assets/js/page-MrHope--4d1ef3a9.803225b9.js",revision:"a713a1b8b2fba592dac9d1801850d704"},{url:"assets/js/page-MrHope--f649b78e.a2dc2223.js",revision:"9f735c239e9e85f94a2c8e4994f7bd6c"},{url:"assets/js/page-pageconfig--38e91a2c.3c23ab55.js",revision:"e984162daa31851b140cf30c5df075a6"},{url:"assets/js/page-Projecthomepagedemo--33a7e370.a33623a0.js",revision:"092547ea5d68cfd7564a8b5fbf52a91f"},{url:"assets/js/page-Slidepage--7cb974ac.f0b69f12.js",revision:"64658b3289b3b0ea96791f5425c69fd6"},{url:"assets/js/page-主要功能与配置演示--324ede09.3f74d1bf.js",revision:"a9e7754a13507c19c7e01ad073e8a1cc"},{url:"assets/js/page-密码加密的文章--3236d268.809ae55e.js",revision:"2cf73dd526a678a697e20be94b06e960"},{url:"assets/js/page-幻灯片页--448ccfbc.9becb421.js",revision:"b101c6c38347b620af3f98021d605d1b"},{url:"assets/js/page-组件禁用--4f59cdf4.0d324477.js",revision:"5f893e271418027c170291080e575d1d"},{url:"assets/js/page-页面配置--487042bc.412f5787.js",revision:"6c4f3709a47df7e8f48e849c138bb605"},{url:"assets/js/page-项目主页展示--796c29fc.217c6381.js",revision:"311ac9d70211d7c0ff275b2eb424dc14"},{url:"assets/js/vendors~flowchart.8ac088f5.js",revision:"290997606ff28366ac463535ebc56591"},{url:"assets/js/vendors~layout-Blog~layout-Layout.db308888.js",revision:"e7ade1d01ab49e8464d01584af68c2d2"},{url:"assets/js/vendors~layout-Blog~layout-Layout~layout-NotFound.21090689.js",revision:"7d4aa260f23fb2503ba6da25db7af5a6"},{url:"assets/js/vendors~layout-Blog~layout-Layout~layout-NotFound~layout-Slide.1c101a53.js",revision:"e6ff65cf9fb2ede2ef863ef04d7d3080"},{url:"assets/js/vendors~photo-swipe.9ac9f137.js",revision:"3556b7f5c43ba1ff650a02859139e210"},{url:"assets/js/vendors~reveal.c2857c34.js",revision:"a77a8f98cdec67a5e13407e54400573e"},{url:"assets/js/vendors~valine.18551a22.js",revision:"85f93140e4e738ca093d666c647b1d1e"},{url:"logo.svg",revision:"e5d2cc16443a59035e0fa55c746f7d51"},{url:"assets/fonts/KaTeX_AMS-Regular.2dbe16b4.ttf",revision:"2dbe16b4f4662798159f8d62c8d2509d"},{url:"assets/fonts/KaTeX_AMS-Regular.38a68f7d.woff2",revision:"38a68f7d18d292349a6e802a66136eae"},{url:"assets/fonts/KaTeX_AMS-Regular.7d307e83.woff",revision:"7d307e8337b9559e4040c5fb76819789"},{url:"assets/fonts/KaTeX_Caligraphic-Bold.33d26881.ttf",revision:"33d26881e4dd89321525c43b993f136c"},{url:"assets/fonts/KaTeX_Caligraphic-Regular.5e7940b4.ttf",revision:"5e7940b4ed250e98a512f520e39c867d"},{url:"assets/fonts/KaTeX_Fraktur-Bold.4de87d40.woff",revision:"4de87d40f0389255d975c69d45a0a7e7"},{url:"assets/fonts/KaTeX_Fraktur-Bold.7a3757c0.woff2",revision:"7a3757c0bfc580d91012d092ec8f06cb"},{url:"assets/fonts/KaTeX_Fraktur-Bold.ed330126.ttf",revision:"ed330126290a846bf0bb78f61aa6a080"},{url:"assets/fonts/KaTeX_Fraktur-Regular.450cc4d9.woff2",revision:"450cc4d9319c4a438dd00514efac941b"},{url:"assets/fonts/KaTeX_Fraktur-Regular.82d05fe2.ttf",revision:"82d05fe2abb0da9d1077110efada0f6e"},{url:"assets/fonts/KaTeX_Fraktur-Regular.dc4e330b.woff",revision:"dc4e330b6334767a16619c60d9ebce8c"},{url:"assets/fonts/KaTeX_Main-Bold.2e1915b1.ttf",revision:"2e1915b1a2f33c8ca9d1534193e934d7"},{url:"assets/fonts/KaTeX_Main-Bold.62c69756.woff",revision:"62c69756b3f1ca7b52fea2bea1030cd2"},{url:"assets/fonts/KaTeX_Main-Bold.78b0124f.woff2",revision:"78b0124fc13059862cfbe4c95ff68583"},{url:"assets/fonts/KaTeX_Main-BoldItalic.0d817b48.ttf",revision:"0d817b487b7fc993bda7dddba745d497"},{url:"assets/fonts/KaTeX_Main-BoldItalic.a2e3dcd2.woff",revision:"a2e3dcd2316f5002ee2b5f35614849a8"},{url:"assets/fonts/KaTeX_Main-BoldItalic.c7213ceb.woff2",revision:"c7213ceb79250c2ca46cc34ff3b1aa49"},{url:"assets/fonts/KaTeX_Main-Italic.081073fd.woff",revision:"081073fd6a7c66073ad231db887de944"},{url:"assets/fonts/KaTeX_Main-Italic.767e06e1.ttf",revision:"767e06e1df6abd16e092684bffa71c38"},{url:"assets/fonts/KaTeX_Main-Italic.eea32672.woff2",revision:"eea32672f64250e9d1dfb68177c20a26"},{url:"assets/fonts/KaTeX_Main-Regular.689bbe6b.ttf",revision:"689bbe6b67f22ffb51b15cc6cfa8facf"},{url:"assets/fonts/KaTeX_Main-Regular.756fad0d.woff",revision:"756fad0d6f3dff1062cfa951751d744c"},{url:"assets/fonts/KaTeX_Main-Regular.f30e3b21.woff2",revision:"f30e3b213e9a74cf7563b0c3ee878436"},{url:"assets/fonts/KaTeX_Math-BoldItalic.753ca3df.woff2",revision:"753ca3dfa44302604bec8e08412ad1c1"},{url:"assets/fonts/KaTeX_Math-BoldItalic.b3e80ff3.woff",revision:"b3e80ff3816595ffb07082257d30b24f"},{url:"assets/fonts/KaTeX_Math-BoldItalic.d9377b53.ttf",revision:"d9377b53f267ef7669fbcce45a74d4c7"},{url:"assets/fonts/KaTeX_Math-Italic.0343f93e.ttf",revision:"0343f93ed09558b81aaca43fc4386462"},{url:"assets/fonts/KaTeX_Math-Italic.2a39f382.woff2",revision:"2a39f3827133ad0aeb2087d10411cbf2"},{url:"assets/fonts/KaTeX_Math-Italic.67710bb2.woff",revision:"67710bb2357b8ee5c04d169dc440c69d"},{url:"assets/fonts/KaTeX_SansSerif-Bold.59b37733.woff2",revision:"59b3773389adfb2b21238892c08322ca"},{url:"assets/fonts/KaTeX_SansSerif-Bold.dfcc59ad.ttf",revision:"dfcc59ad994a0513b07ef3309b8b5159"},{url:"assets/fonts/KaTeX_SansSerif-Bold.f28c4fa2.woff",revision:"f28c4fa28f596796702fea3716d82052"},{url:"assets/fonts/KaTeX_SansSerif-Italic.3ab5188c.ttf",revision:"3ab5188c9aadedf425ea63c6b6568df7"},{url:"assets/fonts/KaTeX_SansSerif-Italic.99ad93a4.woff2",revision:"99ad93a4600c7b00b961d70943259032"},{url:"assets/fonts/KaTeX_SansSerif-Italic.9d0fdf5d.woff",revision:"9d0fdf5d7d27b0e3bdc740d90b40ec57"},{url:"assets/fonts/KaTeX_SansSerif-Regular.6c3bd5b5.woff",revision:"6c3bd5b57f7eba215a2d37e2e28077f1"},{url:"assets/fonts/KaTeX_SansSerif-Regular.badf3598.woff2",revision:"badf3598c22478fd9155a49391ecd396"},{url:"assets/fonts/KaTeX_SansSerif-Regular.d511ebce.ttf",revision:"d511ebcef253ab53775576f28315f350"},{url:"assets/fonts/KaTeX_Script-Regular.082640ca.ttf",revision:"082640ca4242bb2aade86855e4d7d5f6"},{url:"assets/fonts/KaTeX_Script-Regular.4edf4e0f.woff",revision:"4edf4e0fd49c8a5680dd541c05f16a4c"},{url:"assets/fonts/KaTeX_Script-Regular.af7bc98b.woff2",revision:"af7bc98b2200573686405dc784f53cf2"},{url:"assets/fonts/KaTeX_Size1-Regular.2c2dc3b0.ttf",revision:"2c2dc3b057bb48b80bc785ac3d87ecf8"},{url:"assets/fonts/KaTeX_Size2-Regular.114ad198.ttf",revision:"114ad19833311359052ad1a174159262"},{url:"assets/fonts/KaTeX_Size4-Regular.70174da7.ttf",revision:"70174da79d1707501c10e07872e84667"},{url:"assets/fonts/KaTeX_Typewriter-Regular.35fe2cce.ttf",revision:"35fe2cce0791c276b8e919decd873f5b"},{url:"assets/fonts/KaTeX_Typewriter-Regular.53dcf861.woff",revision:"53dcf861876aae6f3a6a6004dc3bc758"},{url:"assets/fonts/KaTeX_Typewriter-Regular.641339e2.woff2",revision:"641339e2cd86c7816bfb8028ee7f86e0"},{url:"404.html",revision:"9a2bd4f264da72195297f9a6249bdce6"},{url:"article/index.html",revision:"83354beaf04666a7b22c5e01bc487488"},{url:"category/Guide/index.html",revision:"d6328cb447b5cc2ec019b8e04e009854"},{url:"category/index.html",revision:"fcba2f6b86f663ddfb1f1b21bd14fffa"},{url:"category/使用指南/index.html",revision:"6c40055d22df693cac9a0ca1eaccde01"},{url:"encrypt/index.html",revision:"b0a07c843a4069b5c16e3c6d000e6921"},{url:"guide/disable/index.html",revision:"2e55e4fa799ea76287c90665debe6357"},{url:"guide/encrypt/index.html",revision:"c760faff70062b56f13083e420f26aa8"},{url:"guide/index.html",revision:"dcc95f7822eb2a040b8e3dedaac43129"},{url:"guide/markdown/index.html",revision:"06ca59ed74d35009ba52a423eccc9975"},{url:"guide/page/index.html",revision:"0644aa15c40011269c31290fb370d683"},{url:"home/index.html",revision:"27a5cce5603199f639abc7862e3e5f00"},{url:"index.html",revision:"b9e6a0c25ca89874da781c964ecf5993"},{url:"intro/index.html",revision:"198aab2f5612fc67c8c48a474599d71d"},{url:"slide/index.html",revision:"0f1af87e2fac1e5d674ad02d6d5e4e30"},{url:"slides/index.html",revision:"e9447a7c72a47d02e5d399273981064a"},{url:"tag/encryption/index.html",revision:"21137794c9d66da8fff717915a540f84"},{url:"tag/Guide/index.html",revision:"c36a21760ebdde2606c03a443aca4e85"},{url:"tag/index.html",revision:"f891a45cc41f10122926d0107a8e95c8"},{url:"tag/markdown/index.html",revision:"306a6b4fef44180ddcb5bd70c9419756"},{url:"tag/Page config/index.html",revision:"69c02d58366dc6a4dae79c9e292a4e6e"},{url:"tag/使用指南/index.html",revision:"d936dafb794dad1cbbed334bcab4b0d7"},{url:"tag/文章加密/index.html",revision:"962fc061c9d7987c0326bae0fa7c992a"},{url:"tag/页面配置/index.html",revision:"85b69eb291d45001832cbdad154ca461"},{url:"timeline/index.html",revision:"01e0362246780bb0eb794e14610b609e"},{url:"zh/guide/disable/index.html",revision:"4269b659190199824f7c44b3ed70c3fc"},{url:"zh/guide/encrypt/index.html",revision:"cc4e3d37a8d56df0999417b54d72c501"},{url:"zh/guide/index.html",revision:"475f1b7a31acfd2a1cd416808b14ca60"},{url:"zh/guide/markdown/index.html",revision:"05ead39420498f9039f7574e3223a88b"},{url:"zh/guide/page/index.html",revision:"5728adbf4a24f3aec5481c2e48a94826"},{url:"zh/home/index.html",revision:"4c7f6127e7eeaf468cba115573ecb44e"},{url:"zh/index.html",revision:"be559105635958f81c754c6343759003"},{url:"zh/slides/index.html",revision:"fca725b60ee99fe6b0e98cceb3872953"},{url:"assets/icon/apple-icon-152.png",revision:"8b700cd6ab3f7ff38a82ee491bf3c994"},{url:"assets/icon/chrome-192.png",revision:"6d4cd350c650faaed8da00eb05a2a966"},{url:"assets/icon/chrome-512.png",revision:"b08fe93ce982da9d3b0c7e74e0c4e359"},{url:"assets/icon/chrome-mask-192.png",revision:"a05b03eeb7b69dc96355f36f0766b310"},{url:"assets/icon/chrome-mask-512.png",revision:"3c4d57a60277792c6c005494657e1dce"},{url:"assets/icon/guide-maskable.png",revision:"99cc77cf2bc792acd6b847b5e3e151e9"},{url:"assets/icon/guide-monochrome.png",revision:"699fa9b069f7f09ce3d52be1290ede20"},{url:"assets/icon/ms-icon-144.png",revision:"2fe199405e0366e50ac0442cc4f33a34"},{url:"assets/img/homeImage.56f13b5d.jpg",revision:"56f13b5d598a4feab49dd969ac9fd2ff"},{url:"logo.png",revision:"b1cc915c4cbb67972e27267862bcd80a"}],{}),e.cleanupOutdatedCaches()}));
//# sourceMappingURL=service-worker.js.map
addEventListener("message", (event) => {
  const replyPort = event.ports[0];
  const message = event.data;
  if (replyPort && message && message.type === "skip-waiting")
    event.waitUntil(
      self.skipWaiting().then(
        () => replyPort.postMessage({ error: null }),
        (error) => replyPort.postMessage({ error })
      )
    );
});
