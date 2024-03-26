#! /usr/bin/env node
import inquirer from "inquirer";
import chalk from "chalk";
let balance = 95000; //PKR
let myPin = 9292;
let custName = 'Javed Ahmed Khan';
console.log("Welcome To HBL");
console.log("-".repeat(14));
console.log("Main Clifton Branch - 178565");
console.log("=".repeat(29));
let pinInput = await inquirer.prompt({ name: "rPin", type: "number", message: "Please Enter Your Pin Number:" });
if (pinInput.rPin === myPin) {
    console.log(chalk.blueBright(`\n Welcome To Clifton Branch Valued Customer .. >> ${custName}`));
    let selectAns = await inquirer.prompt([{
            name: "select",
            type: "list",
            message: "Please Select Your Desire Option",
            choices: ['Balance Inquiry', 'Withdraw', 'Fast Cash', 'Exit']
        }]);
    if (selectAns.select == 'Balance Inquiry') {
        console.log(`Your Balance Is : ${balance}`);
    }
    if (selectAns.select == 'Withdraw') {
        let amount = await inquirer.prompt({ type: "number", message: "Please Enter Desire Amount", name: "rupee" });
        if (amount.rupee <= balance) {
            console.log(chalk.bgGreen(`Take Your Cash From Dispenser Rupee: ${amount.rupee}`)), console.log(chalk.bgBlue(`Balance in Your Account Now Is: ${balance - amount.rupee}`));
        }
        if (amount.rupee >= balance) {
            console.log(chalk.red("\nAmount You Have Entered is insufficient What's in Your Account.")), console.log(chalk.redBright("Please Try Again Leter.")), console.log(chalk.green("HBL CLIFTON BR - 178565 \nGood Bye."));
        }
    }
    if (selectAns.select == "Fast Cash") {
        const sAns = await inquirer.prompt({ type: "list", name: "fselect", message: "Select Your Desire Amount.", choices: ["5000", "10000", "15000", "20000", "25000", "30000"] });
        console.log(chalk.bgRed(`Take Your Cash Out From Dispenser Rupee: ${sAns.fselect}`)), console.log(chalk.bgGreen(`Balance in Your Account is: ${balance - sAns.fselect}`)), console.log("Thankyou For Choosing HBL"), console.log("Good Bye.");
    }
    if (selectAns.select == 'Exit') {
        console.log("\n Thankyou For Choosing HBL"), console.log(" Good Bye.");
    }
}
else {
    console.log("Pin Code Not Valid! Please Try Again Later.");
}
;
