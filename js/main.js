let name = document.getElementById("name");
let income = document.getElementById("income");
let rent = document.getElementById("rent");
let food = document.getElementById("food");
let services = document.getElementById("services");
let total = document.getElementById("total");
let month = document.getElementById("category");
let save = document.getElementById("submit");

4
//*get total
//* create name property
//* save to localstorge
//* cleare input
//* reading
//* delete
//* update
//* search
//* clean datatype


function getTotal(){
  if (income.value != ""){
    let result = +income.value - (+rent.value + +food.value + +services.value);
    //*add + before (inbut-string)  to change to number
    total.innerHTML = result;
  }
}
// *function getsubmit() {
//*   return this.element;
//* }
// *console.log(name, income, rent, rent, food, services, total, month, save);
//* function getTotal(){
// *  console.log("done")
//* }

