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

let mood = "create";
let temp;


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
    total: total.innerHTML,
    month: month.value,
  };
  if (mood === "create") {
    dataPro.push(newPro);
  } else {
    dataPro[temp] = newPro; //* temp = index
    mood = "create"; //* after update change mood to create
    submit.innerHTML = "create"; //* Retype the word “Create” inside the button
  }

  //* save in localstorage
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
  getTotal()
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
    <td><button onclick="updateData(${i})"   id="Update">Update</button></td>
    <td><button onclick="deleteData( ${i} )" id="Delete">Delete</button></td>
</tr>
`;
  }
  document.getElementById("tbody").innerHTML = table;
  let btndelete = document.getElementById("deleteAll");
  if (dataPro.length > 0) {
    btndelete.innerHTML = `
    <button onclick = "deleteAll ()">Delete All</button>
    `;
  } else {
    btndelete.innerHTML = "";
  }
}
showData(); //* to show data on scren always

//* delete

function deleteData(i) {
  dataPro.splice(i, 1);
  localStorage.users = JSON.stringify(dataPro);
  showData(); //* to refrish data on scren
}

function deleteAll() {
  localStorage.clear();
  dataPro.splice(0);
  showData(); //* to refrish data on scren
}

//* update
function updateData(i) {
  name.value = dataPro[i].name;
  income.value = dataPro[i].income;
  rent.value = dataPro[i].rent;
  food.value = dataPro[i].food;
  services.value = dataPro[i].services;
  getTotal();
  month.value = dataPro[i].month;
  submit.innerHTML = "Update";
  mood = "update";
  temp = i;
  scroll({
    top: 0, //* When you click Update, scroll to the top of the page
    behavior: "smooth",
  });
}


//* search
let searchMood = "name";
let search = document.getElementById("search")
function getsearchMood(id){
if (id == "searchTitle"){
  searchMood = "name";
  search.placeholder = "Search by name"; //* when clike on button show (search by name
}else{
  searchMood = "Month";
  search.placeholder = "Search by month"; //* when clike on button show (search by month)
}
search.focus()

//* console.log(searchMood)
}




function searchData(value)
{

  // console.log(value)
let table = "";
  if(searchMood == "name")
  {
    for(let i = 0; i < dataPro.length;i++){
      if(dataPro[i].name.toLocaleLowerCase().includes(value)){
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
            <td><button onclick="updateData(${i})"   id="Update">Update</button></td>
            <td><button onclick="deleteData( ${i} )" id="Delete">Delete</button></td>
        </tr>
        `;
        //* console.log(i)
      }
    }//* create loop for all element in array
  }

  else{
    for(let i = 0; i < dataPro.length;i++){
      if(dataPro[i].month.toLocaleLowerCase().includes(value)){
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
            <td><button onclick="updateData(${i})"   id="Update">Update</button></td>
            <td><button onclick="deleteData( ${i} )" id="Delete">Delete</button></td>
        </tr>
        `;
        
      }
    }//* create loop for all element in array
  }
  document.getElementById("tbody").innerHTML = table;
}






