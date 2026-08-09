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


// Delete Employee
function deleteEmployee(index) {

    employees.splice(index, 1);

    displayEmployees();
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