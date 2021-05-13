var data = require('../data/data.json');
var Car = require('../types').Car;
var BetterDate = require('@alisherbegmatov/date-lib');
var BetterString = require('@alisherbegmatov/string-lib');
function print() {
    console.log(data[0]);
    return data[0];
}
function printFirstLast(data) {
    var output = BetterString.capitalize(data.first_name) + ' ' + BetterString.capitalize(data.last_name);
    return output;
}
function printCar(data) {
    var output = BetterString.capitalize(data.make) + ' ' + BetterString.capitalize(data.model);
    return output;
}
function printPurchased(data) {
    var output = new BetterDate(data.purchased).format('M d, Y');
    return output;
}
function printPayment(data) {
    var output = new BetterDate(data.lastpayment).when();
    return output;
}
function formatPhoneNumber(phone) {
    phone = ('' + phone.toString()).replace(/\D/g, '');
    if (phone.length == 10) {
        return phone.replace(/(\d{3})(\d{3})(\d{4})/, '($1) $2-$3');
    }
    return '(000) 000-0000';
}
function printPhoneNumber(data) {
    var output = 'Phone: ' + formatPhoneNumber(data.phone);
    return output;
}
function printCity(data) {
    var output = BetterString.capitalize(data.city);
    return output;
}
data.forEach(function (element) {
    // console.log(element)
    console.log(printCar(element));
    console.log(printFirstLast(element));
    console.log(printPurchased(element));
    console.log(printPayment(element));
    console.log(formatPhoneNumber(element));
    console.log(printPhoneNumber(element));
    console.log(printCity(element));
});
module.exports = {
    print: print,
    printFirstLast: printFirstLast,
    printPurchased: printPurchased,
    printPayment: printPayment,
    formatPhoneNumber: formatPhoneNumber,
    printPhoneNumber: printPhoneNumber
};
