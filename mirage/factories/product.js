import { Factory, faker } from 'ember-cli-mirage';


export default Factory.extend({
  manufacturer() { return faker.company.companyName();},
  brand(){return faker.lorem.word();},
  product() {return faker.commerce.productName();},
  size() {return faker.random.number();},
  group() {return faker.random.number();},
  price() {return faker.finance.amount();},
  cost() {return faker.finance.amount();},
  upc() {return faker.random.number();},
  image() {return faker.image.food();},
  nutrition() {return faker.random.number();},
  calories() {return faker.random.number();},
  dispenseSize() {return faker.random.number();},
});
