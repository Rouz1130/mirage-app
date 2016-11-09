import { Factory, faker } from 'ember-cli-mirage';


export default Factory.extend({
  name(i) { return (faker.company.companyName() + ': ' + (i+1)); },
  asset() { return (faker.random.number()); },
  route() { return faker.random.number();},
  salesModel(){return faker.random.word();},
  pricing() {return faker.random.number();},
  tax() {return faker.random.number();},
  com() {return faker.random.number();}
});
