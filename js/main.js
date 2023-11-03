let name = document.getElementById("name");
let income = document.getElementById("income");
let rent = document.getElementById("rent");
let food = document.getElementById("food");
let services = document.getElementById("services");
let total = document.getElementById("total");
let month = document.getElementById("month");
let save = document.getElementById("submit");

4


//* save to localstorge
//* cleare input
//* reading
//* delete
//* update
//* search
//* clean datatype

//* get total
function getTotal(){
  if (income.value != ""){
    let result = +income.value - (+rent.value + +food.value + +services.value);
    //*add + before (inbut-string)  to change to number
    total.innerHTML = result;
    total.style.background = "#040"
  }
  //* if i have no data Empty the writing field and return the total's color to red again
  else{
    total.innerHTML = "";
    total.style.background = "#a00d02"
  }
}


//* Save the entered data

let dataPro =[];

submit.onclick = function(){
  let newPro ={
    name:name.value,
    income:income.value,
    rent:rent.value,
    food:food.value,
    services:services.value,
    services:services.value,
    total:total.innerHTML,
    category:month.value,
  }
  console.log (newPro)
  
}




// *function getsubmit() {
//*   return this.element;
//* }
// *console.log(name, income, rent, rent, food, services, total, month, save);
//* function getTotal(){
// *  console.log("done")
//* }

