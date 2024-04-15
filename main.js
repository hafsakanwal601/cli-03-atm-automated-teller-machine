#! /usr/bin/env node
import inquirer from "inquirer";
import chalk from "chalk";
let myBalance = 20000;
let myPin = 2244;
let pinAnsware = await inquirer.prompt([
    {
        name: "pin",
        message: (chalk.bgGreen.white("Enter your pin")),
        type: "number"
    }
]);
if (pinAnsware.pin === myPin) {
    console.log(chalk.bgMagenta.green("welcome to your Account!!!"));
    let operationAns = await inquirer.prompt([
        {
            name: "operation",
            message: (chalk.bgBlue.yellow("Select your option")),
            type: "list",
            choices: ["checkBalance", "withdraw", "fastCash"]
        }
    ]);
    if (operationAns.operation == "checkBalance") {
        console.log(chalk.bgWhite.blueBright(`Your Current balance is : ${myBalance}`));
    }
    else if (operationAns.operation == "withdraw") {
        let amount = await inquirer.prompt({
            name: "withdraw",
            message: (chalk.bgRed.white("Enter Amount you did like to withdraw : ")),
            type: "number"
        });
        if (amount.withdraw > myBalance) {
            console.log(chalk.bgYellow.gray(` unable to process transaction! your total balance is : ${myBalance}`));
        }
        else if (amount.withdraw < myBalance) {
            amount.withdraw = myBalance -= amount.withdraw;
            console.log(chalk.bgBlue.white(`your remaining balance is : ${amount.withdraw}`));
        }
    }
    else if (operationAns.operation == "fastCash") {
        let directly_Cash = await inquirer.prompt({
            name: "fast",
            message: (chalk.bgGrey.red("please select your amount")),
            type: "list",
            choices: ["1000", "2000", "5000", "10000", "15000", "20000"]
        });
        myBalance = myBalance - directly_Cash.fast;
        console.log(chalk.bgCyanBright.green("your remaining balance is :" + myBalance));
    }
}
else {
    console.log(chalk.bgRed.white("invalid pin"));
}
