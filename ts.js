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
var form = document.querySelector("#submit");
form.addEventListener("click", function () {
    var firstname = document.querySelector("#firstname").value;
    var lastname = document.querySelector("#lastname").value;
    var empid = document.querySelector("#empid").value;
    var phone = document.querySelector("#phone").value;
    var address = document.querySelector("#address").value;
    var email = document.querySelector("#email").value;
    var newEmp = { firstname: firstname, lastname: lastname, empid: empid, phone: phone, address: address, email: email };
    EmpArr(newEmp);
    alert("New Record added");
    console.log(employees);
});
