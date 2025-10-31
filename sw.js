self.addEventListener('message', function(event) {
  const { titulo, mensagem } = event.data;
  self.registration.showNotification(titulo, {
    body: mensagem,
    icon: 'IMG_0140.JPG', // Personalize o nome se quiser
    badge: 'IMG_0140.JPG' // Para Android também usar seu ícone
  });
});

self.addEventListener('install', function(event) {
  self.skipWaiting();
});
self.addEventListener('activate', function(event) {
  self.clients.claim();
});
