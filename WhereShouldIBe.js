var x = new Date();
x.setFullYear(2100, 0, 14);
var today = new Date();

if (x > today) {
    alert("Today is before 14th January 2100");
} else {
    alert("Today is after 14th January 2100");
}

var date = new Date();
var n = date.toDateString();
var time = date.toLocaleTimeString();

document.getElementById('time').innerHTML = n + ' ' + time;
