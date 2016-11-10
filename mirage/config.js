export default function() {
  this.namespace = 'api';

  this.get('/accounts');
  this.get('/accounts/:id', (schema, request) => {
    return schema.account.find(request.params.id);
  });

  this.post('/accounts/:id/sites', (schema, request) => {
    let account = schema.account.find(request.params.id);
    let attrs = JSON.parse(request.requestBody);

    return account.createBlogPost(attrs);
  });

  this.get('/locations');
  this.get('/locations/:id');

  this.get('/sites');
  this.get('/sites/:id');

  this.get('/assets');
  this.get('/assets/:id');

  this.get('/routes');
  this.get('/routes/:id');

  this.get('/products');
  this.get('/products/:id');
}
