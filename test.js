// test mainnet address: ALDdf8G5g77Y3JVomNpPcJjRrNgduVsu9B

var arkAPI = require("ark-api");
var arkJS = require("arkjs");
var bip39 = require("bip39");

window.arkAPI = arkAPI;
window.arkJS = arkJS;
window.bip39 = bip39;

// arkAPI.getBalance("DTBgCyvrZRoPunVipK9wWVhNC6b7s8UK6x", (error, success, response) => {
//   console.log(response.balance / 100000000);
// });

// arkAPI.getAccount("DTBgCyvrZRoPunVipK9wWVhNC6b7s8UK6x", (error, success, response) => {
//     console.log(response);
// });

// var seed = bip39.generateMnemonic();

// var keys = arkJS.crypto.getKeys(seed);
// console.log(keys.publicKey);

// var address = arkJS.crypto.getAddress(keys.publicKey, 0x1E);
// console.log(address);

// arkAPI.sendTransaction(
//   "tuition biology right winner trial forget remain snake family multiply scrap saddle",
//   "ignore",
//   null,
//   345700000,
//   "DHSjfthDB1LjMiofUqnKXjFU3vi3rEQ8va",
//   function(error, success, response) {
//     console.log(response);
// });

// function sendTransaction(seed, amount, address) {
//   var precision = Math.pow(10, 1);
//   var final_amount = Math.ceil(amount * precision) / precision;

//   var difference = (final_amount - amount).toFixed(8);
//   console.log("difference = " + difference);

//   var charity = difference * Math.pow(10, 8);

//   amount = parseInt(amount * 100000000);
//   // send to actual recipient
//   arkAPI.sendTransaction(
//     seed,
//     "ignore",
//     null,
//     amount,
//     address,
//     function(error, success, response) {
//       console.log(response);
//   });

//   // send remainder to charity
//   arkAPI.sendTransaction(
//     seed,
//     "ignore",
//     null,
//     charity,
//     "DJ4uHVUCa5f83Y4Y3BFqUyRL47k2cWXkgE",
//     function(error, success, response) {
//       console.log(response);
//   });

// }

// sendTransaction("tuition biology right winner trial forget remain snake family multiply scrap saddle", 4.002628, "DHSjfthDB1LjMiofUqnKXjFU3vi3rEQ8va");