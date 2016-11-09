import { Factory, faker } from 'ember-cli-mirage';


export default Factory.extend({
  name(i) { return (faker.company.companyName() + ': ' + (i+1)); },
  contact() { return (faker.name.firstName() + ' ' + faker.name.lastName()); },
  email() { return faker.internet.email(); }
});
