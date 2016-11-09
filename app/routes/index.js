// import Ember from 'ember';
//
// const { RSVP, $ } = Ember;
//
// export default Ember.Route.extend({
//   model() {
//     return RSVP.hash({
//       accounts: $.getJSON('/api/accounts'),
//       account2: $.getJSON('/api/accounts/2'),
//     });
//   }
// });

// import Ember from 'ember';
//
// export default Ember.Route.extend({
//   model() {
//     return this.store.findAll('account');
//   }
// });


import Ember from 'ember';

const { RSVP, $ } = Ember;


export default Ember.Route.extend({
  model() {
    return RSVP.hash({
      accounts: $.getJSON('/api/accounts'),
      account2: $.getJSON('/api/accounts/2'),
    });
    }
});
