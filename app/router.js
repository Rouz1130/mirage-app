import Ember from 'ember';
import config from './config/environment';

const Router = Ember.Router.extend({
  location: config.locationType,
  rootURL: config.rootURL
});

Router.map(function() {
  this.route('accounts');
  this.route('accounts', { path: '/accounts/:account_id'});
  this.route('location');
  this.route('site', {path: '/sites/:site_id' });
});

export default Router;
