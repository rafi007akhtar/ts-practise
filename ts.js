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
function validate(emp) {
    if (!/^[a-zA-Z]+$/.test(emp.firstname) || !/^[a-zA-Z]+$/.test(emp.lastname)) {
        alert("Invalid Name");
        return false;
    }
    // console.log("Emp id: " + emp.empid + " length: " + emp.empid.length + " " + typeof(emp.empid));
    if (!/[0-9]+/.test(emp.empid) || emp.empid.length !== 7) {
        alert("Invalid employee id");
        return false;
    }
    if (!/[0-9]+/.test(emp.phone) || emp.phone.length !== 10) {
        alert("Invalid phone number");
        return false;
    }
    if (!/^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/) {
        alert("Invalid email");
        return false;
    }
    return true;
}
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
    if (!validate(newEmp)) {
        return;
    }
    EmpArr(newEmp);
    alert("New Record added");
    console.log(employees);
});
