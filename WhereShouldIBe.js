var x;
    if (confirm("Current Date") == true) {
        x = "After";
    } else {
        x = "Before";
    }
    document.getElementById("demo").innerHTML = x;
}
//comparing time
var x = new Date();
x.setFullYear(2014, 5, 20);
var today = new Date();

if (x > today) {
    alert("Today is before 20th June 2014");
} else {
    alert("Today is after 20th June 2014");
}
