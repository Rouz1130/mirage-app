import DS from 'ember-data';

export default DS.Model.extend({
  account: DS.attr(),
  locationName: DS.attr(),
  asset: DS.attr(),
  route: DS.attr(),
  salesModel: DS.attr(),
  pricing: DS.attr(),
  tax: DS.attr(),
  com: DS.attr()
});
