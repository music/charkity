var arkAPI = require("ark-api");
var balance = arkAPI.getBalance("ALDdf8G5g77Y3JVomNpPcJjRrNgduVsu9B", (error, success, response) => {
    console.log(response.balance / 100000000);
});

