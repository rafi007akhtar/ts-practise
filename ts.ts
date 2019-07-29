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

let myEmp: any = {
    firstname: "Rafi",
    lastname: "Akhtar",
    empid: 1699584,
    phone: 9674639341,
    address: "Hinjewadi, Pune",
    email: "alimdrafi@gmail.com"
}

// CODE FOR ADD USER FORM
function validate(emp: any) {
    if (!/^[a-zA-Z]+$/.test(emp.firstname) || !/^[a-zA-Z]+$/.test(emp.lastname)) {
        alert("Invalid Name");
        return false;
    }
    
    // console.log("Emp id: " + emp.empid + " length: " + emp.empid.length + " " + typeof(emp.empid));
    if(!/[0-9]+/.test(emp.empid) || emp.empid.length !== 7) {
        alert("Invalid employee id");
        return false;
    }
    
    if(!/[0-9]+/.test(emp.phone) || emp.phone.length !== 10) {
        alert("Invalid phone number");
        return false;
    }
    
    if(! /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/) {
        alert("Invalid email");
        return false;
    }
    return true;
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
    if (! validate(newEmp)) {
        return;
    }
    
    EmpArr(newEmp);
    alert("New Record added");
    console.log(employees);
});


// CODE FOR SEARCH NEW USER FORM

let search: any = document.querySelector("#searchEmp");
search.addEventListener("click", function() {
    let emp = null;
    let empid: any = (<HTMLInputElement> document.querySelector("#searchid")).value;
    for (let obj of employees) {
        if (obj.empid == empid) {
            emp = obj;
            break;
        }
    }
    
    let details: HTMLElement = document.querySelector("#details");
    if (emp == null) {
        details.innerHTML = "No value found";
    }
    else {
        console.log("emp: " + emp);
        details.innerHTML = "";
        for (let key of Object.keys(emp)) {
            details.innerHTML = `${details.innerHTML} ${key}: ${emp[key]} <br>`;
        }
    }
});
