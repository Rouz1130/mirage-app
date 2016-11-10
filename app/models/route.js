import DS from 'ember-data';

export default DS.Model.extend({
  name: DS.attr(),
  driver: DS.attr(),
  manager: DS.attr(),
  stops: DS.attr()
});
