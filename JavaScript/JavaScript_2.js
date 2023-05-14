function validateForm() {
    let x = document.forms["myForm"]["fname"].value;
    let y = document.forms["myForm"]["lname"].value;
    if (x == "") {
        alert("Please fill out all fields.");
        return false;
    }
    if (y  == "") {
        alert("Please fill out all fields.");
        return false;
    }
}