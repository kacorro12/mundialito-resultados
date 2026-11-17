// Guarda la página del planillero para que abra aunque no haya señal en la cancha.
// Los datos (fixture y resultados pendientes) los guarda la propia página en el teléfono.
const CACHE = 'planillero-v1';
const BASE = ['/cancha/', '/logo.webp', 'https://cdn.jsdelivr.net/npm/@supabase/supabase-js@2.45.4/dist/umd/supabase.min.js'];
self.addEventListener('install', e => { e.waitUntil(caches.open(CACHE).then(c => Promise.all(BASE.map(u => c.add(new Request(u, u.startsWith('http') ? { mode: 'no-cors' } : {})).catch(() => {})))).then(() => self.skipWaiting())); });
self.addEventListener('activate', e => { e.waitUntil(caches.keys().then(ks => Promise.all(ks.filter(k => k !== CACHE).map(k => caches.delete(k)))).then(() => self.clients.claim())); });
self.addEventListener('fetch', e => {
  const r = e.request, u = new URL(r.url);
  if (r.method !== 'GET') return;
  // Nunca guardar las consultas a la base: esas siempre van a internet
  if (u.hostname.endsWith('supabase.co')) return;
  const propio = u.origin === location.origin && (u.pathname.startsWith('/cancha') || u.pathname === '/config.js' || u.pathname === '/logo.webp');
  const cdn = /cdn\.jsdelivr\.net|fonts\.(googleapis|gstatic)\.com/.test(u.hostname);
  if (!propio && !cdn) return;
  // Primero internet (para tener siempre la última versión) y, si no hay señal, lo guardado
  e.respondWith(fetch(r).then(res => { const cp = res.clone(); caches.open(CACHE).then(c => c.put(r, cp)).catch(() => {}); return res; })
    .catch(() => caches.match(r, { ignoreSearch: u.pathname === '/config.js' }).then(m => m || (r.mode === 'navigate' ? caches.match('/cancha/') : Response.error()))));
});
