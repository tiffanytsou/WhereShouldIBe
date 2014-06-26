var x;
    if (confirm("Current Date") == true) {
        x = "After";
    } else {
        x = "Before";
    }
    document.getElementById("demo").innerHTML = x;
}

