import DS from 'ember-data';

export default DS.Model.extend({
  manufacturer: DS.attr(),
  brand: DS.attr(),
  size: DS.attr(),
  group: DS.attr(),
  price: DS.attr(),
  cost: DS.attr(),
  upc: DS.attr(),
  image: DS.attr(),
  nutrition: DS.attr(),
  calories: DS.attr(),
  dispenseSize: DS.attr()
});
