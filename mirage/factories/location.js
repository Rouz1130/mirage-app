import { Factory, faker } from 'ember-cli-mirage';


export default Factory.extend({
  account: 'Foreign-Key',
  locationName() { return faker.company.companyName();},
  asset: 'Foreign-key',
  route() { return faker.random.number();},
  salesModel(){return faker.random.word();},
  pricing() {return faker.commerce.price();},
  tax() {return faker.commerce.price();},
  com() {return faker.commerce.price();}
});
