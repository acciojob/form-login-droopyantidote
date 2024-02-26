function getFormvalue() {
    // Get the form element
    var form = document.getElementById("form1");

    // Get the values of the first and last name input fields
    var firstName = form.elements["fname"].value;
    var lastName = form.elements["lname"].value;

    // Concatenate the first and last names
    var fullName = firstName + " " + lastName;

    // Display the full name using alert
    alert(fullName);
}
