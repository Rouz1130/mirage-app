import { Factory, faker } from 'ember-cli-mirage';


export default Factory.extend({
  trackingNumber() { return faker.random.number();},
  location: 'Foreign-key',
  manufacturer() { return faker.company.companyName();},
  controllerModel(){return faker.random.number();},
  frameModel() {return faker.random.number();},
  frameSerial() {return faker.random.number();},
  purchasedFrom() {return faker.company.companyName();},
  purchasedOn() {return faker.date.past();},
  purchasedFor() {return faker.company.companyName();},
  depreciationSchedule() {return faker.random.number();},
  depreciationYears() {return faker.random.number();},
  depreciationFirstYearOffset() {return faker.random.number();},
  salvageValue() {return faker.finance.amount();},
});
