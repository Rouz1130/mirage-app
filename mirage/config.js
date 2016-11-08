export default function() {
  this.namespace = 'api';

  this.get('/accounts', (schema, request) +> {
    return schema.accounts.all();
  });


  this.get('/accounts/:id');
}
