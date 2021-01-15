var fs = require('fs');
var csvParser = require('csv-parser');
var createCsvWriter = require('csv-writer').createObjectCsvWriter;
var pdf = require('pdf-parse');
var inputDir = './input';
// class Statement {
//     constructor(statementDate, statementPeriod, accountNumber, paymentDueDate, totalMinimumPayment, currentMinimumPayment, previousBalance, interest, paymentsAndCredits, purchasesAndCharges, newBalance, creditLimit, creditAvailable) {
//         this.statementDate = statementDate;
//         this.statementPeriod = statementPeriod;
//         this.accountNumber = accountNumber;
//         this.paymentDueDate = paymentDueDate;
//         this.totalMinimumPayment = totalMinimumPayment;
//         this.currentMinimumPayment = currentMinimumPayment;
//         this.previousBalance = previousBalance;
//         this.interest = interest;
//         this.paymentsAndCredits = paymentsAndCredits;
//         this.purchasesAndCharges = purchasesAndCharges;
//         this.newBalance = newBalance;
//         this.creditLimit = creditLimit;
//         this.creditAvailable = creditAvailable;
//     } 
//     static describe(instance)
// }
var Transaction = /** @class */ (function () {
    function Transaction() {
    }
    return Transaction;
}());
function writeCsv() {
    // const csvWriter = createCsvWriter({
    // })
    // const obj
}
function parsePdf() {
    fs.readdir(inputDir, function (err, files) {
        files.forEach(function (file) {
            var dataBuffer = fs.readFileSync(inputDir + '/' + file);
            pdf(dataBuffer).then(function (data) {
                console.log(data.text);
                // Ref # | Transaction Date | Post Date | Details | Amount ($)
                // 001 | Mar 19 | Mar 20 | METRO #758 TORONTO ON | 74.74
                // const regex = /(\d{3})\s?(\w*\s\d*)\s?(\w*\s\d*)\s?([\s\S]*?)\s?(\d*\.\d{2})/gm;
                // var matches = data.text.match(regex);
                // for(var match of matches) {
                //     console.log('exec', regex.exec(match));
                // }  
            });
        });
    });
}
exports.parsePdf = parsePdf;
