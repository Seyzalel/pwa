self.addEventListener('message', function(event) {
  const { titulo, mensagem } = event.data;
  self.registration.showNotification(titulo, {
    body: mensagem,
    icon: 'icon-192.png', // Personalize o nome se quiser
    badge: 'icon-192.png' // Para Android também usar seu ícone
  });
});

self.addEventListener('install', function(event) {
  self.skipWaiting();
});
self.addEventListener('activate', function(event) {
  self.clients.claim();
});
