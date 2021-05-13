const data = require('../data/data.json');
const { Car } = require('../types');
const BetterDate = require('@alisherbegmatov/date-lib');
const BetterString = require('@alisherbegmatov/string-lib');

function print<Car>() {
  console.log(data[0]);
  return data[0];
}

function printFirstLast(data: typeof Car): string {
  let output: string =
    BetterString.capitalize(data.first_name) + ' ' + BetterString.capitalize(data.last_name);
  return output;
}

function printCar(data: typeof Car): string {
  let output: string =
    BetterString.capitalize(data.make) + ' ' + BetterString.capitalize(data.model);
  return output;
}

function printPurchased(data: typeof Car): string {
  let output: string = new BetterDate(data.purchased).format('M d, Y');
  return output;
}

function printPayment(data: typeof Car): string {
  let output: string = new BetterDate(data.lastpayment).when();
  return output;
}

function formatPhoneNumber(phone: string | number): string {
  phone = ('' + phone.toString()).replace(/\D/g, '');
  if (phone.length == 10) {
    return phone.replace(/(\d{3})(\d{3})(\d{4})/, '($1) $2-$3');
  }
  return '(000) 000-0000';
}

function printPhoneNumber(data: typeof Car): string {
  let output: string = 'Phone: ' + formatPhoneNumber(data.phone);
  return output;
}

function printCity(data: typeof Car): string {
  let output: string =
    BetterString.capitalize(data.city)
  return output;
}

data.forEach(element => {
  // console.log(element)
  console.log(printCar(element))
  console.log(printFirstLast(element))
  console.log(printPurchased(element))
  console.log(printPayment(element))
  console.log(formatPhoneNumber(element))
  console.log(printPhoneNumber(element))
  console.log(printCity(element))
});

module.exports = {
  print,
  printFirstLast,
  printPurchased,
  printPayment,
  formatPhoneNumber,
  printPhoneNumber,
};
