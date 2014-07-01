var x = new Date();
x.setFullYear(2100, 0, 14);
var today = new Date();

if (x > today) {
    alert("Today is before 14th January 2100");
} else {
    alert("Today is after 14th January 2100");
}

var x = document.getElementById("demo");

function getLocation() {
    if (navigator.geolocation) {
        navigator.geolocation.getCurrentPosition(showPosition,showError);
    } else {
        x.innerHTML = "Geolocation is not supported by this browser.";
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
            x.innerHTML = "User denied the request for Geolocation."
            break;
        case error.POSITION_UNAVAILABLE:
            x.innerHTML = "Location information is unavailable."
            break;
        case error.TIMEOUT:
            x.innerHTML = "The request to get user location timed out."
            break;
        case error.UNKNOWN_ERROR:
            x.innerHTML = "An unknown error occurred."
            break;
    }
}

class Schedule {
    private string[] locations=new string[24]
    public Schedule(string day) {
        if(day === "Monday") {
            loadMonday();
        }else if(day === "Tuesday") {
            loadTuesday();
        }else if(day === "Wednesday") {
            loadWednesday();
        }else if(day === "Thursday") {
            loadThursday();
        }else if(day === "Friday") {
            loadFriday();
        }else if(day === "Saturday") {
            loadSaturday();
        }else if(day === "Sunday") {
            loadSunday();
        }
    }
    private void loadMonday() {
        locations[0] = "home";
        locations[1] = "home";
        locations[2] = "home";
        locations[3] = "home";
        locations[4] = "home";
        locations[5] = "home";
        locations[6] = "home";
        locations[7] = "home";
        locations[8] = "home";
        locations[9] = "work";
        locations[10] = "work";
        locations[11] = "work";
        locations[12] = "work";
        locations[13] = "work";
        locations[14] = "work";
        locations[15] = "work";
        locations[16] = "home";
        locations[16] = "home";
        locations[16] = "home";
        locations[16] = "home";
        locations[16] = "home";
        locations[16] = "home";
        locations[16] = "home";
        locations[16] = "home";
    }
}
