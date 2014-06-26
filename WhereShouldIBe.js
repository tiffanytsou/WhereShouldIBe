var x = new Date();
x.setFullYear(2100, 0, 14);
var today = new Date();

function myFunction() {
    var x;
    if (confirm("Press a button!") > today) {
        x = "After";
    } else {
        x = "Before";
    }
    document.getElementById("demo").innerHTML = x;
}
