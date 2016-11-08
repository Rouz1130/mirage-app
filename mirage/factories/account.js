import { Factory, faker } from 'ember-cli-mirage';


export default Factory.extend({
  name(i) { return `Name ${i+1}` },
  contact() {
    return (faker.name.firstName() + ' ' + faker.name.lastName());
  },
  email: "test@test.test",
});
