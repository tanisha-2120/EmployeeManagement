let employees = [];


// Add Employee
function addEmployee() {

    let id = document.getElementById("employeeId").value;
    let name = document.getElementById("employeeName").value;
    let email = document.getElementById("employeeEmail").value;
    let department = document.getElementById("department").value;
    let designation = document.getElementById("designation").value;
    let salary = document.getElementById("salary").value;

    if (id == "" || name == "" || email == "" ||
        department == "" || designation == "" || salary == "") {

        alert("Please enter all employee details");
        return;
    }

    let employee = {
        id: id,
        name: name,
        email: email,
        department: department,
        designation: designation,
        salary: salary
    };

    employees.push(employee);

    displayEmployees();

    clearForm();
}


// Display Employees
function displayEmployees() {

    let table = document.getElementById("employeeTable");

    table.innerHTML = "";

    employees.forEach(function(employee, index) {

        let row = `
            <tr>

                <td>${employee.id}</td>

                <td>${employee.name}</td>

                <td>${employee.email}</td>

                <td>${employee.department}</td>

                <td>${employee.designation}</td>

                <td>${employee.salary}</td>

                <td>

                    <button class="update-btn"
                            onclick="updateEmployee(${index})">
                        Update
                    </button>

                    <button class="delete-btn"
                            onclick="deleteEmployee(${index})">
                        Delete
                    </button>

                </td>

            </tr>
        `;

        table.innerHTML += row;
    });
}


// Update Employee
function updateEmployee(index) {

    let employee = employees[index];

    let name = prompt(
        "Enter Employee Name:",
        employee.name
    );

    let email = prompt(
        "Enter Email:",
        employee.email
    );

    let department = prompt(
        "Enter Department:",
        employee.department
    );

    let designation = prompt(
        "Enter Designation:",
        employee.designation
    );

    let salary = prompt(
        "Enter Salary:",
        employee.salary
    );


    if (name != null &&
        email != null &&
        department != null &&
        designation != null &&
        salary != null) {

        employees[index].name = name;
        employees[index].email = email;
        employees[index].department = department;
        employees[index].designation = designation;
        employees[index].salary = salary;

        displayEmployees();

        alert("Employee updated successfully!");
    }
}


// Delete Employee
function deleteEmployee(index) {

    let result = confirm(
        "Are you sure you want to delete this employee?"
    );

    if (result) {

        employees.splice(index, 1);

        displayEmployees();

        alert("Employee deleted successfully!");
    }
}


// Search Employee
function searchEmployee() {

    let searchValue =
        document.getElementById("searchInput").value.toLowerCase();

    let table = document.getElementById("employeeTable");

    table.innerHTML = "";

    employees.forEach(function(employee, index) {

        if (
            employee.id.toLowerCase().includes(searchValue) ||
            employee.name.toLowerCase().includes(searchValue)
        ) {

            let row = `
                <tr>

                    <td>${employee.id}</td>

                    <td>${employee.name}</td>

                    <td>${employee.email}</td>

                    <td>${employee.department}</td>

                    <td>${employee.designation}</td>

                    <td>${employee.salary}</td>

                    <td>

                        <button class="update-btn"
                                onclick="updateEmployee(${index})">
                            Update
                        </button>

                        <button class="delete-btn"
                                onclick="deleteEmployee(${index})">
                            Delete
                        </button>

                    </td>

                </tr>
            `;

            table.innerHTML += row;
        }
    });
}


// Clear Form
function clearForm() {

    document.getElementById("employeeId").value = "";
    document.getElementById("employeeName").value = "";
    document.getElementById("employeeEmail").value = "";
    document.getElementById("department").value = "";
    document.getElementById("designation").value = "";
    document.getElementById("salary").value = "";
}
console.log("Employee Management System");