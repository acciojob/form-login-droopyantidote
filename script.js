function getFormvalue() {
    // Get the form element
    var form = document.getElementById("form1");

    // Get the values of the first and last name input fields
    var firstName = form.fname.value;
    var lastName = form.lname.value;

    // Concatenate the first and last names
    var fullName = firstName + " " + lastName;

    // Display the full name using alert
    alert(fullName);
}
