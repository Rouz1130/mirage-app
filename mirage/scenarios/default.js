export default function(server) {

  server.loadFixtures();

  server.createList('account', 10);
  server.createList('location', 10);
  server.createList('site', 9);
  server.createList('asset', 3);
  server.createList('route', 5);
  server.createList('product', 8);

}
