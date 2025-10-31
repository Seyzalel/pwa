self.addEventListener('message', function(event) {
  const { titulo, mensagem } = event.data;
  self.registration.showNotification(titulo, {
    body: mensagem,
    icon: 'solutpag.png', // Personalize o nome se quiser
    badge: 'solutpag.png' // Para Android também usar seu ícone
  });
});

self.addEventListener('install', function(event) {
  self.skipWaiting();
});
self.addEventListener('activate', function(event) {
  self.clients.claim();
});
