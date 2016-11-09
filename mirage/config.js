export default function() {
  this.namespace = 'api';

  this.get('/accounts');
  this.get('/accounts/:id');

  this.get('/sites');
  this.get('/sites/:id');
}
