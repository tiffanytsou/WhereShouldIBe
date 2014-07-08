$(document).ready(function() {
    var jan142100 = new Date();
    jan142100.setFullYear(2100, 0, 14);
    if (jan142100 > new Date()) {
        alert("Today is before 14th January 2100");
    } else {
        alert("Today is after 14th January 2100");
    }
    alert(new Schedule('Monday').WhereShouldIBe(new Date()).name);
});
 
function getLocation() {
    if (navigator.geolocation) {
        navigator.geolocation.getCurrentPosition(showPosition,showError);
    } else {
        $('#demo').html("Geolocation is not supported by this browser.");
    }
}

function showPosition(position) {
    var latlon = position.coords.latitude+","+position.coords.longitude;

    var img_url = "http://maps.googleapis.com/maps/api/staticmap?center="
    +latlon+"&zoom=14&size=400x300&sensor=false";
    document.getElementById("mapholder").innerHTML = "<img src='"+img_url+"'>";
}

function showError(error) {
    switch(error.code) {
        case error.PERMISSION_DENIED:
            $('#demo').html("User denied the request for Geolocation.");
            break;
        case error.POSITION_UNAVAILABLE:
            $('#demo').html("Location information is unavailable.");
            break;
        case error.TIMEOUT:
            $('#demo').html("The request to get user location timed out.");
            break;
        case error.UNKNOWN_ERROR:
            $('#demo').html("An unknown error occurred.");
            break;
    }
}

function areTheseTheSameLocation(currentPosition, shouldBeAt) {
    var x = 10; // Need to know how many degrees is about a mile
    return (currentPosition.latitude > shouldBeAt.latitude - x) && (currentPosition.longitude < shouldBeAt.longitude + x);
}

function Schedule(day) {
    this.locations = new Array();
    if(day === "Monday") {
        this.loadMonday();
    }else if(day === "Tuesday") {
        this.loadTuesday();
    }else if(day === "Wednesday") {
        this.loadWednesday();
    }else if(day === "Thursday") {
        this.loadThursday();
    }else if(day === "Friday") {
        this.loadFriday();
    }else if(day === "Saturday") {
        this.loadSaturday();
    }else if(day === "Sunday") {
        this.loadSunday();
    }
}

Schedule.prototype.loadMonday = function() {
    this.locations[0] = "home";
    this.locations[1] = "home";
    this.locations[2] = "home";
    this.locations[3] = "home";
    this.locations[4] = "home";
    this.locations[5] = "home";
    this.locations[6] = "home";
    this.locations[7] = "home";
    this.locations[8] = "home";
    this.locations[9] = "work";
    this.locations[10] = "work";
    this.locations[11] = "work";
    this.locations[12] = "work";
    this.locations[13] = "work";
    this.locations[14] = "work";
    this.locations[15] = "work";
    this.locations[16] = "home";
    this.locations[17] = "home";
    this.locations[18] = "home";
    this.locations[19] = "home";
    this.locations[20] = "home";
    this.locations[21] = "home";
    this.locations[22] = "home";
    this.locations[23] = "home";
    this.locations[24] = "home";
}
Schedule.prototype.loadTuesday = function() {
    this.locations[0] = "home";
    this.locations[1] = "home";
    this.locations[2] = "home";
    this.locations[3] = "home";
    this.locations[4] = "home";
    this.locations[5] = "home";
    this.locations[6] = "home";
    this.locations[7] = "home";
    this.locations[8] = "home";
    this.locations[9] = "work";
    this.locations[10] = "work";
    this.locations[11] = "work";
    this.locations[12] = "work";
    this.locations[13] = "work";
    this.locations[14] = "work";
    this.locations[15] = "work";
    this.locations[16] = "home";
    this.locations[17] = "home";
    this.locations[18] = "taekwondo";
    this.locations[19] = "home";
    this.locations[20] = "home";
    this.locations[21] = "home";
    this.locations[22] = "home";
    this.locations[23] = "home";
    this.locations[24] = "home";
}
Schedule.prototype.loadWednesday = function() {
    this.locations[0] = "home";
    this.locations[1] = "home";
    this.locations[2] = "home";
    this.locations[3] = "home";
    this.locations[4] = "home";
    this.locations[5] = "home";
    this.locations[6] = "home";
    this.locations[7] = "home";
    this.locations[8] = "home";
    this.locations[9] = "home";
    this.locations[10] = "tutoring";
    this.locations[11] = "tutoring";
    this.locations[12] = "tutoring";
    this.locations[13] = "home";
    this.locations[14] = "home";
    this.locations[15] = "home";
    this.locations[16] = "home";
    this.locations[17] = "home";
    this.locations[18] = "home";
    this.locations[19] = "home";
    this.locations[20] = "home";
    this.locations[21] = "home";
    this.locations[22] = "home";
    this.locations[23] = "home";
    this.locations[24] = "home";
}
Schedule.prototype.loadThursday = function() {
    this.locations[0] = "home";
    this.locations[1] = "home";
    this.locations[2] = "home";
    this.locations[3] = "home";
    this.locations[4] = "home";
    this.locations[5] = "home";
    this.locations[6] = "home";
    this.locations[7] = "home";
    this.locations[8] = "home";
    this.locations[9] = "work";
    this.locations[10] = "work";
    this.locations[11] = "work";
    this.locations[12] = "work";
    this.locations[13] = "work";
    this.locations[14] = "work";
    this.locations[15] = "work";
    this.locations[16] = "green tea";
    this.locations[17] = "green tea";
    this.locations[18] = "green tea";
    this.locations[19] = "green tea";
    this.locations[20] = "green tea";
    this.locations[21] = "home";
    this.locations[22] = "home";
    this.locations[23] = "home";
    this.locations[24] = "home";
}
Schedule.prototype.loadFriday = function() {
    this.locations[0] = "home";
    this.locations[1] = "home";
    this.locations[2] = "home";
    this.locations[3] = "home";
    this.locations[4] = "home";
    this.locations[5] = "home";
    this.locations[6] = "home";
    this.locations[7] = "home";
    this.locations[8] = "home";
    this.locations[9] = "home";
    this.locations[10] = "home";
    this.locations[11] = "home";
    this.locations[12] = "home";
    this.locations[13] = "home";
    this.locations[14] = "home";
    this.locations[15] = "green tea";
    this.locations[16] = "green tea";
    this.locations[17] = "green tea";
    this.locations[18] = "green tea";
    this.locations[19] = "green tea";
    this.locations[20] = "green tea";
    this.locations[21] = "home";
    this.locations[22] = "home";
    this.locations[23] = "home";
    this.locations[24] = "home";
}
Schedule.prototype.loadSaturday = function() {
    this.locations[0] = "home";
    this.locations[1] = "home";
    this.locations[2] = "home";
    this.locations[3] = "home";
    this.locations[4] = "home";
    this.locations[5] = "home";
    this.locations[6] = "home";
    this.locations[7] = "home";
    this.locations[8] = "home";
    this.locations[9] = "home";
    this.locations[10] = "home";
    this.locations[11] = "home";
    this.locations[12] = "home";
    this.locations[13] = "tutoring";
    this.locations[14] = "tutoring";
    this.locations[15] = "tutoring";
    this.locations[16] = "green tea";
    this.locations[17] = "green tea";
    this.locations[18] = "green tea";
    this.locations[19] = "green tea";
    this.locations[20] = "green tea";
    this.locations[21] = "home";
    this.locations[22] = "home";
    this.locations[23] = "home";
    this.locations[24] = "home";
}
Schedule.prototype.loadSunday = function() {
    this.locations[0] = "home";
    this.locations[1] = "home";
    this.locations[2] = "home";
    this.locations[3] = "home";
    this.locations[4] = "home";
    this.locations[5] = "home";
    this.locations[6] = "home";
    this.locations[7] = "home";
    this.locations[8] = "home";
    this.locations[9] = "home";
    this.locations[10] = "home";
    this.locations[11] = "home";
    this.locations[12] = "violin";
    this.locations[13] = "home";
    this.locations[14] = "golf";
    this.locations[15] = "home";
    this.locations[16] = "home";
    this.locations[17] = "home";
    this.locations[18] = "home";
    this.locations[19] = "home";
    this.locations[20] = "home";
    this.locations[21] = "home";
    this.locations[22] = "home";
    this.locations[23] = "home";
    this.locations[24] = "home";
}
Schedule.prototype.WhereShouldIBe = function(date) {
    var hours = date.getHours();
    return new Place(this.locations[hours]);
}


function Place(name) {
    this.name = name;
    if (name == 'home') {
        // Need to find out what the lat long are for each of these
        this.latitude = '123';
        this.longitude = '456';
    } else if (name == 'work') {

    } else if (name == 'school') {

    } else if (name == 'violin') {
        
    } else if (name == 'golf') {
        
    } else if (name == 'green tea') {
        
    } else if (name == 'tutoring') {
        
    } else if (name == 'taekwondo') {
        
    }
}
function 
if(place==="home") {
    lat: 33.97591;
    long: -84.065166;
else if(place==="work") {
    lat: 33.968149;
    long: -84.220381;
else if(place==="tutoring") {
    lat: 34.020648;
    long: -84.190979;
else if(place==="greentea") {
    lat: 34.031838;
    long: -83.906665;
}
}
