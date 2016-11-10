import { Factory, faker } from 'ember-cli-mirage';


export default Factory.extend({
  routeName() { return faker.lorem.word();},
  driver() { return faker.name.firstName() + ' ' + faker.name.lastName();},
  manager() { return faker.name.firstName() + ' ' + faker.name.lastName();},
  stops() {return faker.random.number();},
});
