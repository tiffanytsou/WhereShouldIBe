var currentPosition;

$(document).ready(function() {
    alert(new Schedule('Monday').WhereShouldIBe(new Date()).name);
    $('#current-time').text(new Date().toTimeString());
    $('#message').text(createMessage());
});
 
function getLocation() {
    if (navigator.geolocation) {
        navigator.geolocation.getCurrentPosition(showPosition,showError);
    }
}

function showPosition(position) {
    var latlon = position.coords.latitude+","+position.coords.longitude;
    var img_url = "http://maps.googleapis.com/maps/api/staticmap?center=" + latlon + "&zoom=14&size=400x300&sensor=false";
    $("#mapholder").html("<img src='" + img_url + "'>");
    currentPosition = position.coords;
}

function showError(error) {
    alert(error.code);
}

function areTheseTheSameLocation(currentPosition, shouldBeAt) {
    var x = 0.01;
    return (currentPosition.latitude > shouldBeAt.latitude - x) && (currentPosition.longitude < shouldBeAt.longitude + x);
}
function createMessage() {
    var message = '';
    var shouldBeAt = new Schedule(new Date().getDay()).WhereShouldIBe();
    if(areTheseTheSameLocation(currentPosition, shouldBeAt)) {
        message = 'You are at' + shouldBeAt.name();
    } else if(areTheseTheSameLocation(currentPosition, new Place('home')) {
        message = 'You are at home. You should be at ' + shouldBeAt.name;
    } else if(areTheseTheSameLocation(currentPosition, new Place('work')) {
        message = 'You are at work. You should be at ' + shouldBeAt.name;
    } else if(areTheseTheSameLocation(currentPosition, new Place('tutoring')) {
        message = 'You are at tutoring. You should be at ' + shouldBeAt.name;
    } else if(areTheseTheSameLocation(currentPosition, new Place('greentea')) {
        message = 'You are at Green Tea. You should be at ' + shouldBeAt.name;
    } else if(areTheseTheSameLocation(currentPosition, new Place('taekwondo')) {
        message = 'You are at taekwondo. You should be at ' + shouldBeAt.name;
    } else if(areTheseTheSameLocation(currentPosition, new Place('violin')) {
        message = 'You are at violin. You should be at ' + shouldBeAt.name;
    } else if(areTheseTheSameLocation(currentPosition, new Place('golf')) {
        message = 'You are at golf. You should be at ' + shouldBeAt.name;
    } else {
        message = 'You are lost or something. Where are you?!'
    }
    return message;
}

function Schedule(day) {
    this.locations = new Array();
    if(day === 1) {
        this.loadMonday();
    }else if(day === 2) {
        this.loadTuesday();
    }else if(day === 3) {
        this.loadWednesday();
    }else if(day === 4) {
        this.loadThursday();
    }else if(day === 5) {
        this.loadFriday();
    }else if(day === 6) {
        this.loadSaturday();
    }else if(day === 0) {
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
        this.latitude = 33.97591;
        this.longitude = -84.065166;
    } else if (name == 'work') {
        this.latitude = 33.968149;
        this.longitude = -84.220381;
    } else if (name == 'tutoring') {
        this.latitude = 34.020648;
        this.longitude = -84.190979;
    } else if (name == 'violin') {
        this.latitude = 34.00223;
        this.longitude = -84.08353;
    } else if (name == 'golf') {
        this.latitude = 34.025364;
        this.longitude = -84.150338;
    } else if (name == 'green tea') {
        this.latitude = 34.031838;
        this.longitude = -83.906665;
    } else if (name == 'taekwondo') {
        this.latitude = 34.004275;
        this.longitude = -84.084688;
    }
}

