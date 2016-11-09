export default function() {
  this.namespace = 'api';

  this.get('/accounts');

  this.get('/accounts/:id');
}
