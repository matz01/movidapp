"use strict";var precacheConfig=[["/movidapp/index.html","ba8c52631130cda46ffabae8860ad211"],["/movidapp/static/css/main.28749d83.css","abd8f0b82ea96dfac0c70003d04512a1"],["/movidapp/static/js/main.33cdb335.js","e6c5ab05a835104b3f87b1ce664eb7f5"],["/movidapp/static/media/event.9a863488.jpeg","9a86348886f07f3c033b3b90e40dcbcb"],["/movidapp/static/media/event2.d7221728.jpeg","d722172827618035d408a3d204347332"],["/movidapp/static/media/event3.812b903d.jpeg","812b903d9b0fe732504ee91b1b2bae6a"],["/movidapp/static/media/event4.de307899.jpeg","de3078990cfd54938978df680916d5f5"],["/movidapp/static/media/fa-brands-400.0d215870.woff","0d2158700ccb68e527a6915a6f9256e3"],["/movidapp/static/media/fa-brands-400.3dabc722.svg","3dabc72295310f7340b7583c62b0dd96"],["/movidapp/static/media/fa-brands-400.4019e2ef.woff2","4019e2ef5746b8baa1ca57ff6afd6bed"],["/movidapp/static/media/fa-brands-400.913334b2.ttf","913334b20fe18a3568d18d9178d2b9b8"],["/movidapp/static/media/fa-brands-400.b680adba.eot","b680adbac11d91675e2ecdb198206211"],["/movidapp/static/media/fa-regular-400.190faaa2.eot","190faaa2f9bcb3c7cf5d174fb7846ecc"],["/movidapp/static/media/fa-regular-400.4758ad60.woff2","4758ad6071911a36d5b4ea7faa9d3c16"],["/movidapp/static/media/fa-regular-400.9113e63a.svg","9113e63ab4b96b6f71a36ac4ed02b94d"],["/movidapp/static/media/fa-regular-400.da900afa.woff","da900afa8bd1d66d93fa576058d6a268"],["/movidapp/static/media/fa-regular-400.dddf7b2c.ttf","dddf7b2cfdcc9f9da4354794809221c5"],["/movidapp/static/media/fa-solid-900.0d995a14.ttf","0d995a145d7392132124440336bba586"],["/movidapp/static/media/fa-solid-900.4cb8ea72.eot","4cb8ea72ad6d4f33465239dbc106e015"],["/movidapp/static/media/fa-solid-900.5bee5910.svg","5bee5910d39a7a2699da064b2b3b1163"],["/movidapp/static/media/fa-solid-900.7960713e.woff","7960713e96c6058336d3928be08067a4"],["/movidapp/static/media/fa-solid-900.9f3c8f80.woff2","9f3c8f805668d4182d2173b660a7a21e"]],cacheName="sw-precache-v3-sw-precache-webpack-plugin-"+(self.registration?self.registration.scope:""),ignoreUrlParametersMatching=[/^utm_/],addDirectoryIndex=function(e,a){var t=new URL(e);return"/"===t.pathname.slice(-1)&&(t.pathname+=a),t.toString()},cleanResponse=function(a){return a.redirected?("body"in a?Promise.resolve(a.body):a.blob()).then(function(e){return new Response(e,{headers:a.headers,status:a.status,statusText:a.statusText})}):Promise.resolve(a)},createCacheKey=function(e,a,t,n){var r=new URL(e);return n&&r.pathname.match(n)||(r.search+=(r.search?"&":"")+encodeURIComponent(a)+"="+encodeURIComponent(t)),r.toString()},isPathWhitelisted=function(e,a){if(0===e.length)return!0;var t=new URL(a).pathname;return e.some(function(e){return t.match(e)})},stripIgnoredUrlParameters=function(e,t){var a=new URL(e);return a.hash="",a.search=a.search.slice(1).split("&").map(function(e){return e.split("=")}).filter(function(a){return t.every(function(e){return!e.test(a[0])})}).map(function(e){return e.join("=")}).join("&"),a.toString()},hashParamName="_sw-precache",urlsToCacheKeys=new Map(precacheConfig.map(function(e){var a=e[0],t=e[1],n=new URL(a,self.location),r=createCacheKey(n,hashParamName,t,/\.\w{8}\./);return[n.toString(),r]}));function setOfCachedUrls(e){return e.keys().then(function(e){return e.map(function(e){return e.url})}).then(function(e){return new Set(e)})}self.addEventListener("install",function(e){e.waitUntil(caches.open(cacheName).then(function(n){return setOfCachedUrls(n).then(function(t){return Promise.all(Array.from(urlsToCacheKeys.values()).map(function(a){if(!t.has(a)){var e=new Request(a,{credentials:"same-origin"});return fetch(e).then(function(e){if(!e.ok)throw new Error("Request for "+a+" returned a response with status "+e.status);return cleanResponse(e).then(function(e){return n.put(a,e)})})}}))})}).then(function(){return self.skipWaiting()}))}),self.addEventListener("activate",function(e){var t=new Set(urlsToCacheKeys.values());e.waitUntil(caches.open(cacheName).then(function(a){return a.keys().then(function(e){return Promise.all(e.map(function(e){if(!t.has(e.url))return a.delete(e)}))})}).then(function(){return self.clients.claim()}))}),self.addEventListener("fetch",function(a){if("GET"===a.request.method){var e,t=stripIgnoredUrlParameters(a.request.url,ignoreUrlParametersMatching),n="index.html";(e=urlsToCacheKeys.has(t))||(t=addDirectoryIndex(t,n),e=urlsToCacheKeys.has(t));var r="/movidapp/index.html";!e&&"navigate"===a.request.mode&&isPathWhitelisted(["^(?!\\/__).*"],a.request.url)&&(t=new URL(r,self.location).toString(),e=urlsToCacheKeys.has(t)),e&&a.respondWith(caches.open(cacheName).then(function(e){return e.match(urlsToCacheKeys.get(t)).then(function(e){if(e)return e;throw Error("The cached response that was expected is missing.")})}).catch(function(e){return console.warn('Couldn\'t serve response for "%s" from cache: %O',a.request.url,e),fetch(a.request)}))}});