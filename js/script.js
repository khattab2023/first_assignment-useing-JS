let name = document.getElementById("name");
let income = document.getElementById("income");
let rent = document.getElementById("rent");
let food = document.getElementById("food");
let services = document.getElementById("services");
let total = document.getElementById("total");
let month = document.getElementById("category");
let save = document.getElementById("submit");

function getTotal()
{
  if (income.value != "") {
    let result = +income.value - (+rent.value + +food.value + +services.value);
    //*add + before (inbut-string)  to change to number
    total.innerHTML = result;
  }
}
// function getsubmit() {
//   return this.element;
// }
// console.log(name, income, rent, rent, food, services, total, month, save);

//*get total
//*create name property
//* save to localstorge
//*cleare input
//*reading
//* delete
//* update
//*search
//* clean datatype

// THE ACCOUNT OBJECT SHOULD HAVE THE FOLLWOING PROPERTIES:

// expenses: an array that should hold all of your expenses, can be empty from start

// income: an array that should hold all of your income, can be empty from start
// add Expenses: a function that vill add an expense to the expenses array

// add Income: a function that vill add an income to the income array

// list All Expenses: a function that should list all the expenses in the expenses array
// get Summary: a function that should summarize your total balances. It should show your total
// income, your total expenses and also calculate your current balances(income - expenses).

// let expenses = window.prompt();

// let income = [25000+12000]
// let income2 = [12000]
// document.write(Math.income);

// TODO
//* 1. put the name property in the object as the datatype string DONE
//* 2. create the menu and the different choices for the user DONE
//* 3. take the input from the user and store it (save it) in a variable DONE
//* 4. use the stored/saved variable to display the correct menu choice

// OBJECT

// const account = {
//   // name: the account holders name, should be a string
//   name: "Helena",};

//* FUNCTION
// function menu() {
//    the function menu() should only be responsible to show the different choices
//   for the user.
//   const choice = parseFloat(
//     prompt(
//       "Please select from the menu:\n1) Add income\n2) Add expense\n3)List all expenses\n4) See total balance"
//     )
//   );

//   console.log("Choice: " + choice);
// }

// menu();
// document.write(expenses)
