//* get total
//* save localstorage
//* cleare input
//* reading
//* delete
//* update
//* search
//* clean datatype

let name = document.getElementById("name");
let income = document.getElementById("income");
let rent = document.getElementById("rent");
let food = document.getElementById("food");
let services = document.getElementById("services");
let total = document.getElementById("total");
let month = document.getElementById("month");
let save = document.getElementById("submit");

//* get total
function getTotal() {
  if (income.value != "") {
    let result = +income.value - (+rent.value + +food.value + +services.value);
    //*add + before (inbut-string)  to change to number
    total.innerHTML = result;
    total.style.background = "#040";
    //* if i have no data Empty the writing field and return the total's color to red again
  } else {
    total.innerHTML = "";
    total.style.background = "#a00d02";
  }
}

//* Save the entered datato localstorge

let dataPro;
if (localStorage.users != null) {
  dataPro = JSON.parse(localStorage.users);
} else {
  dataPro = [];
}

submit.onclick = function () {
  let newPro = {
    name: name.value,
    income: income.value,
    rent: rent.value,
    food: food.value,
    services: services.value,
    services: services.value,
    total: total.innerHTML,
    month: month.value,
  };
  dataPro.push(newPro);
  //* save localstorage
  localStorage.setItem("users", JSON.stringify(dataPro));
  cleareData();
  showData();
};

//* cleare input

function cleareData() {
  name.value = "";
  income.value = "";
  rent.value = "";
  food.value = "";
  services.value = "";
  total.innerHTML = "";
  month.value = "";
}

//* reading

function showData() {
  let table = "";
  //*create loop
  for (let i = 0; i < dataPro.length; i++) {
    table += `
<tr>
    <td>${i}</td>
    <td>${dataPro[i].name}</td>
    <td>${dataPro[i].income}</td>
    <td>${dataPro[i].rent}</td>
    <td>${dataPro[i].food}</td>
    <td>${dataPro[i].services}</td>
    <td>${dataPro[i].total}</td>
    <td>${dataPro[i].month}</td>
   <td><button id="Update">Update</button></td>
    <td><button id="Delete">Delete</button></td>
 </tr>
`;
  }
  document.getElementById("tbody").innerHTML = table;
}
//* to make data on scren always
showData()