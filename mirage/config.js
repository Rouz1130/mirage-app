export default function() {
  this.namespace = 'api';

  this.get('/accounts');
  this.get('/accounts/:id');

  this.get('/locations');
  this.get('/locations/:id');

  this.get('/sites');
  this.get('/sites/:id');

  this.get('/assets');
  this.get('/assets/:id');

}
