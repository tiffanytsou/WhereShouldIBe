var time = new Date();
console.log(time.getHours() + ":" + time.getMinutes() + ":" + time.getSeconds());
document.getElementById("time").innerHTML = x;

function myFunction() {
    var x;
    if (confirm("Press a button!") > today) {
        x = "After";
    } else {
        x = "Before";
    }
    document.getElementById("demo").innerHTML = x;
}
