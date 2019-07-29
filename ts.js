var employees = [];
function EmpArr(emp) {
    employees.push(emp);
}
var myEmp = {
    firstname: "Rafi",
    lastname: "Akhtar",
    empid: 1699584,
    phone: 9674639341,
    address: "Hinjewadi, Pune",
    email: "alimdrafi@gmail.com"
};
EmpArr(myEmp);
console.log(employees);
var form = document.querySelector("form");
form.addEventListener("submit", function () {
    alert("submitted");
});
var firstname = document.querySelector("#firstname").value;
console.log(firstname);
