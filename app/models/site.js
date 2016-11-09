import DS from 'ember-data';

export default DS.Model.extend({
  siteName: DS.attr(),
  account: DS.attr(),
  timeZone: DS.attr(),
  maxCharge: DS.attr(),
  siteId: DS.attr(),
  billingTerms: DS.attr(),
  billingAddress: DS.attr(),
  shippingAddress: DS.attr()
});
