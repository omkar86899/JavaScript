(function () {
    var ageSlider = $("#ageSlider");
    var addButton = $("#addButton");
    var deleteButton = $("#deleteButton");
    var displayButton = $("#displayButton");
    var form = $("#form");

    var StudentDTO = function () {
        var obj = {};

        obj.addStudent = function (student) {
            var postRequest = $.ajax({
                type: "POST",
                url: "http://gsmktg.azurewebsites.net:80/api/v1/techlabs/test/students",
                data: student,
                contentType: "application/json; charset=utf-8",
                dataType: "json",
                success: function (data) {
                    return data;
                }
            });
            return postRequest;
        }
        obj.getStudents = function () {
            var getRequest = $.get("http://gsmktg.azurewebsites.net:80/api/v1/techlabs/test/students", function (data) {
                return data;
            })
            return getRequest;
        }

        obj.deleteStudent = function (studentID) {
            console.log(studentID);
            var deleteRequest = $.ajax({
                type: "DELETE",
                url: "azurewebsites.net:80/api/v1/techlabs/test/students"+studentID,
                success: function (data) {
                    return data;
                }
            });
            return deleteRequest;
        }

        return obj;
    }();

    addButton.click(function () {
        if (validateData()) {
            changeButtonToLoading(addButton);
            sendData();
        }
    });
    deleteButton.click(function () {
        changeButtonToLoading(deleteButton);
        deleteData();
    });
    displayButton.click(function () {
        changeButtonToLoading(displayButton);
        StudentDTO.getStudents()
            .done(function (data) {
                changeButtontoNormal(displayButton, "Display");
                renderStudentTable(data);
            }).fail(function (error) {
                console.log(error);
            });
    });
    ageSlider.on("input", function () {
        $("#age").html(ageSlider.val());
    });

    function validateData() {
        var rollNo = $("#rollNo");
        var name = $("#name");
        var date = $("#date");
        var email = $("#email");

        if (rollNo.val() == "") {
            alert("Enter a valid Roll No");
            return false;
        }
        if (name.val() == "" || $('#name').val().charAt(0) == " ") {
            alert("Enter valid name");
            return false;
        }
        if (date.val() == "") {
            alert("Enter a valid date");
            return false;
        }
        if (email.val() == "") {
            alert("Enter a valid email");
            return false;
        }
        return true;
    }

    function sendData() {
        var data = form.serializeArray();
        var obj = {};
        for (var index = 0; index < data.length; index++) {
            obj[data[index].name] = data[index].value;
        }
        StudentDTO.addStudent(JSON.stringify(obj))
            .done(function (data) {
                console.log(data);
                alert("data is Successfully added at id: " + data);
                changeButtontoNormal(addButton, "Add");
            })
            .fail(function (error) {
                console.log(error);
            });
    }

    function deleteData() {
        var data = form.serializeArray();
        var obj = {};
        var studentID;
        for (var index = 0; index < data.length; index++) {
            obj[data[index].name] = data[index].value;
        }
        StudentDTO.getStudents()
            .done(function (data) {
                for (var index = 0; index < data.length; index++) {
                    data[index].id == obj.id;
                }
            }).fail(function (error) {
                console.log(error);
            });
        StudentDTO.deleteStudent(studentID)
            .done(function (data) {
                alert("data is Successfully deleted");
                changeButtontoNormal(deleteButton, "delete");
            })
            .fail(function (error) {
                console.log(error);
            })

    }
    function renderStudentTable(students) {
        $("#studentTable").css("display", "block");
        $("#noOfStudents").html("No of Students: " + students.length).css("display", "block");
        for (var index = 0; index < students.length; index++) {
            var gender;
            students[index].isMale ? gender = "Male" : gender = "Female";
            var markup = "<tr>" + "<td>" + students[index].id + "</td>" + "<td>" + students[index].rollNo + "</td>" + "<td>" + students[index].name + "</td>" + "<td>" + students[index].age + "</td>" + "<td>" + students[index].email + "</td>" + "<td>" + students[index].date + "</td>" + "<td>" + gender + "</td>" + "</tr>";
            $("#studentTable").append(markup);
        }
    }

    function changeButtontoNormal(button, buttonName) {
        button.removeClass("spinner-border");
        button.html(buttonName);
        button.val(buttonName);
        button.prop('disabled', false);
    }

    function changeButtonToLoading(button) {
        button.val("")
            .html("")
            .addClass("spinner-border")
            .prop('disabled', true)
            .css("color", "black");
    }
})();