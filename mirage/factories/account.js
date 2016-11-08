import { Factory } from 'ember-cli-mirage';

export default Factory.extend({
  name(i) {
    return `Account ${i+1}`;
  },
  contact: "test contact",
  email: "test@test.test"
});
