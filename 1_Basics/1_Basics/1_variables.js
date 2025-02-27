const accountId = 14553
let accountEmail = "Hello123@gmail.com"
var accountPassword ="12345"
accountCity = "Jaipur"
let accounstate;

// accountId = 2 not allowed

accountEmail = "hc@hc.com"
accountPassword = "9966"
accountCity = "Bengaluru"

console.log(accountId);


/* Perfer not to use var because of issue in block scope and functional scope*/

console.table([accountId,accountEmail,accountPassword,accountCity,accounstate])
