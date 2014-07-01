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
        locations[17] = "home";
        locations[18] = "home";
        locations[19] = "home";
        locations[20] = "home";
        locations[21] = "home";
        locations[22] = "home";
        locations[23] = "home";
        locations[24] = "home";
    }
    private void loadTuesday() {
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
        locations[17] = "home";
        locations[18] = "taekwondo";
        locations[19] = "home";
        locations[20] = "home";
        locations[21] = "home";
        locations[22] = "home";
        locations[23] = "home";
        locations[24] = "home";
    }
    private void loadWednesday() {
        locations[0] = "home";
        locations[1] = "home";
        locations[2] = "home";
        locations[3] = "home";
        locations[4] = "home";
        locations[5] = "home";
        locations[6] = "home";
        locations[7] = "home";
        locations[8] = "home";
        locations[9] = "home";
        locations[10] = "tutoring";
        locations[11] = "tutoring";
        locations[12] = "tutoring";
        locations[13] = "home";
        locations[14] = "home";
        locations[15] = "home";
        locations[16] = "home";
        locations[17] = "home";
        locations[18] = "home";
        locations[19] = "home";
        locations[20] = "home";
        locations[21] = "home";
        locations[22] = "home";
        locations[23] = "home";
        locations[24] = "home";
    }
    private void loadThursday() {
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
        locations[16] = "green tea";
        locations[17] = "green tea";
        locations[18] = "green tea";
        locations[19] = "green tea";
        locations[20] = "green tea";
        locations[21] = "home";
        locations[22] = "home";
        locations[23] = "home";
        locations[24] = "home";
    }
    private void loadFriday() {
        locations[0] = "home";
        locations[1] = "home";
        locations[2] = "home";
        locations[3] = "home";
        locations[4] = "home";
        locations[5] = "home";
        locations[6] = "home";
        locations[7] = "home";
        locations[8] = "home";
        locations[9] = "home";
        locations[10] = "home";
        locations[11] = "home";
        locations[12] = "home";
        locations[13] = "home";
        locations[14] = "home";
        locations[15] = "green tea";
        locations[16] = "green tea";
        locations[17] = "green tea";
        locations[18] = "green tea";
        locations[19] = "green tea";
        locations[20] = "green tea";
        locations[21] = "home";
        locations[22] = "home";
        locations[23] = "home";
        locations[24] = "home";
    }
    private void loadSaturday() {
        locations[0] = "home";
        locations[1] = "home";
        locations[2] = "home";
        locations[3] = "home";
        locations[4] = "home";
        locations[5] = "home";
        locations[6] = "home";
        locations[7] = "home";
        locations[8] = "home";
        locations[9] = "home";
        locations[10] = "home";
        locations[11] = "home";
        locations[12] = "home";
        locations[13] = "tutoring";
        locations[14] = "tutoring";
        locations[15] = "tutoring";
        locations[16] = "green tea";
        locations[17] = "green tea";
        locations[18] = "green tea";
        locations[19] = "green tea";
        locations[20] = "green tea";
        locations[21] = "home";
        locations[22] = "home";
        locations[23] = "home";
        locations[24] = "home";
    }
    private void loadSunday() {
        locations[0] = "home";
        locations[1] = "home";
        locations[2] = "home";
        locations[3] = "home";
        locations[4] = "home";
        locations[5] = "home";
        locations[6] = "home";
        locations[7] = "home";
        locations[8] = "home";
        locations[9] = "home";
        locations[10] = "home";
        locations[11] = "home";
        locations[12] = "violin";
        locations[13] = "home";
        locations[14] = "golf";
        locations[15] = "home";
        locations[16] = "home";
        locations[17] = "home";
        locations[18] = "home";
        locations[19] = "home";
        locations[20] = "home";
        locations[21] = "home";
        locations[22] = "home";
        locations[23] = "home";
        locations[24] = "home";
    }
    public string WhereShouldIBe(Date) {
        var hours = new Date(hours)
        return locations[hours];
    }
}
