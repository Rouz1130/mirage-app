
import Ember from 'ember';

const { RSVP, $ } = Ember;


export default Ember.Route.extend({
  model() {
    return RSVP.hash({
      accounts: $.getJSON('/api/accounts'),
    });
  },

  actions: {
    destroySite(site) {
      site.destroyRecord();
      this.transitionTo('index');
    }
  }
});
