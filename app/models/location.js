import DS from 'ember-data';

export default DS.Model.extend({
  account: DS.belongsTo('account', {async: true}),
  locationName: DS.attr(),
  asset: DS.hasMany('asset', {async: true}),
  route: DS.attr(),
  salesModel: DS.attr(),
  pricing: DS.attr(),
  tax: DS.attr(),
  com: DS.attr()
});
