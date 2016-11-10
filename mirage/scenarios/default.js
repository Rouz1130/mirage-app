export default function(server) {

  let account = server.create('account');

  server.createList('account', 10);
  server.createList('location', 10);
  server.createList('site', {account: account.id});
  server.createList('asset', 3);
  server.createList('route', 5);
}
