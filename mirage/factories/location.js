import { Factory, faker } from 'ember-cli-mirage';


export default Factory.extend({
  account: 'Foreign-Key',
  locationName() { return faker.company.companyName();},
  asset: 'Foreign-key',
  route() { return faker.random.number();},
  salesModel(){return faker.random.word();},
  pricing() {return faker.random.number();},
  tax() {return faker.random.number();},
  com() {return faker.random.number();}
});
