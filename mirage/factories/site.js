import { Factory, faker } from 'ember-cli-mirage';

export default Factory.extend({
  siteName() { return faker.random.words(); },
  account() { return faker.random.number(10); },
  timeZone() { return faker.date.future(); },
  maxCharge() { return faker.finance.amount(); },
  siteId() { return faker.random.alphaNumeric(); },
  billingTerms() { return faker.lorem.paragraph(); },
  billingAddress() { return (faker.address.streetAddress() + ' ' + faker.address.streetName()); },
  shippingAddress() { return (faker.address.streetAddress() + ' ' + faker.address.streetName()); }
});
