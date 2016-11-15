export default function() {
  this.namespace = 'api';

  this.get('/accounts');
  this.get('/accounts/:id');

  this.get('/locations');
  this.get('/locations/:id');

  this.get('/sites');
  this.get('/sites/:id');
  // this.del('/sites/:id', function(db, request) {
  //   var id = request.params.id;
  //   db.sites.remove(id);
  //   return {};
  // });

  this.get('/assets');
  this.get('/assets/:id');

  this.get('/routes');
  this.get('/routes/:id');

  this.get('/products');
  this.get('/products/:id');
}
