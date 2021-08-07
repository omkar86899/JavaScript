(function () {
    var employees = [];
    var map = new Map();
    var root;
    var employeesDiv = document.getElementById("employeesDiv");
    fetch("emp.txt")
        .then(function resolve(response) {
            return response.text();
        })
        .then(function resolve(response) {
            data = response.split("\r\n");
            formatData(data);
            makeMap();
            render();
        })
        .catch(function reject(error) {
            console.log(error);
        });

    function formatData(data) {
        for (var index = 0; index < data.length; index++) {
            var employeeDetails = data[index].split(",");
            var employee = {};
            employee.id = employeeDetails[0];
            employee.name = employeeDetails[1];
            employee.designation = employeeDetails[2];
            employee.managerId = employeeDetails[3];
            employee.dateOfJoining = employeeDetails[4];
            employee.salary = employeeDetails[5];
            employee.commission = employeeDetails[6];
            employee.departmentNo = employeeDetails[7];
            isEmployeeAlreadyExist(employee) ? 0 : employees.push(employee);
        }
    }

    function isEmployeeAlreadyExist(employee) {
        employeeExist = false;
        for (var index = 0; index < employees.length; index++) {
            employees[index].id == employee.id ? employeeExist = true : 0;
        }
        return employeeExist;
    }

    function makeMap() {
        for (var index = 0; index < employees.length; index++) {
            employees[index].managerId == "NULL" ? root = employees[index].name : 0;
            childs = childOfEmployees(employees[index]);
            !map.has(employees[index].name) ? map.set(employees[index].name, childs) : 0;
        }
    }

    function childOfEmployees(employee) {
        var childs = []
        for (var index = 0; index < employees.length; index++) {
            employees[index].managerId == employee.id ? childs.push(employees[index].name) : 0;
        }
        return childs;
    }

    function render() {
        console.log(root);
        console.log(map);
        var button = document.createElement("button");
        button.innerHTML = root.replace(/'/g, "");
        button.id = root;
        button.addEventListener("click", createChildButtons);
        employeesDiv.appendChild(button);
    }

    function createChildButtons(e) {
        array = map.get(e.target.id);
        array.length==0 ? alert("no Employees under selected employee"):0;
        employeesDiv.appendChild(document.createElement("br"));
        for (var index = 0; index < array.length; index++) {
            var button = document.createElement("button");
            button.innerHTML = array[index].replace(/'/g, "");
            button.id = array[index];
            button.addEventListener("click", createChildButtons);
            employeesDiv.appendChild(button);
        }
    }
})();