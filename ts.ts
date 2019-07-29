interface Employee {
    firstname: string;
    lastname: string;
    empid: number;
    phone: number;
    address: string;
    email: string;
}

let employees = [];

function EmpArr(emp: Employee) {
    employees.push(emp);
}

let myEmp = {
    firstname: "Rafi",
    lastname: "Akhtar",
    empid: 1699584,
    phone: 9674639341,
    address: "Hinjewadi, Pune",
    email: "alimdrafi@gmail.com"
}

EmpArr(myEmp);

console.log(employees);

let form: any = document.querySelector("#submit");
form.addEventListener("click", function() {
    let firstname: any = (<HTMLInputElement>document.querySelector("#firstname")).value;
    let lastname: any = (<HTMLInputElement>document.querySelector("#lastname")).value;
    let empid: any = (<HTMLInputElement>document.querySelector("#empid")).value;
    let phone: any = (<HTMLInputElement>document.querySelector("#phone")).value;
    let address: any = (<HTMLInputElement>document.querySelector("#address")).value;
    let email: any = (<HTMLInputElement>document.querySelector("#email")).value;
    
    let newEmp = {firstname, lastname, empid, phone, address, email};
    EmpArr(newEmp);
    
    alert("New Record added");
    console.log(employees);
});
