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

let form: any = document.querySelector("form");
form.addEventListener("submit", function() {
   alert("submitted");
});

let firstname: any = (<HTMLInputElement>document.querySelector("#firstname")).value;
console.log(firstname);
