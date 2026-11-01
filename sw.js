const CACHE_NAME = "marcos-editorial-v3";
const CORE = [
 "./", "./index.html",
 "./disenador_editorial_marcos_v20.html",
 "./disenador_editorial_marcos_v21.html",
 "./manifest.webmanifest",
 "./pwa-icons/icon-192.png",
 "./pwa-icons/icon-512.png",\n "./pwa-icons/logo-marcos.png"
];
self.addEventListener("install", event => {
 event.waitUntil(caches.open(CACHE_NAME).then(cache=>cache.addAll(CORE)).then(()=>self.skipWaiting()));
});
self.addEventListener("activate", event => {
 event.waitUntil(caches.keys().then(keys=>Promise.all(keys.filter(k=>k!==CACHE_NAME).map(k=>caches.delete(k)))).then(()=>self.clients.claim()));
});
self.addEventListener("fetch", event => {
 const req=event.request;
 if(req.method!=="GET") return;
 const url=new URL(req.url);
 if(url.origin===self.location.origin){
  event.respondWith(caches.match(req).then(hit=>hit||fetch(req).then(res=>{
   if(res&&res.ok){const copy=res.clone();caches.open(CACHE_NAME).then(c=>c.put(req,copy));}
   return res;
  }).catch(()=>caches.match("./index.html"))));
 } else if(url.protocol==="https:" && (url.hostname.includes("jsdelivr.net")||url.hostname.includes("cloudflare.com"))){
  // Cache external libraries after the first successful online load.
  event.respondWith(caches.match(req).then(hit=>hit||fetch(req).then(res=>{
   if(res&&res.ok){const copy=res.clone();caches.open(CACHE_NAME).then(c=>c.put(req,copy));}
   return res;
  })));
 }
});
