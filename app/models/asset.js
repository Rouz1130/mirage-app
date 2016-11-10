import DS from 'ember-data';

export default DS.Model.extend({
  trackingNumber: DS.attr(),
  location: 'foreign-key',
  manufacturer: DS.attr(),
  controllerModel: DS.attr(),
  frameModel: DS.attr(),
  frameSerial: DS.attr(),
  purchasedFrom: DS.attr(),
  purchasedOn: DS.attr(),
  purchasedFor: DS.attr(),
  depreciationSchedule: DS.attr(),
  depreciationYears: DS.attr(),
  depreciationFirstYearOffset: DS.attr(),
  salvageValue: DS.attr()
});
