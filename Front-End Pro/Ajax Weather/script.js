//API key

let apiKEY = "f647cd4c40fad58ba076d87aa561f40a";
let searchKey = "";
$(document).ready(function() {
    $("#submit").click(function () {
        let location = $("#location").val();
        //validate city
        if (!isNaN(location)) {
            searchKey = "zip";
        } else {
            searchKey = "q";
        }
        //Validate text area
        if (location !== "") {
            $.ajax({
                url: "https://api.openweathermap.org/data/2.5/weather?" +
                    searchKey + '=' + location + '&units=imperial&appid=' + apiKEY,
                dataType:"jsonp",
                type:"GET",
                success: function (data) {
                    let res = outputData(data);
                    $("#outputData").html(res);
                    $("#outputData").val('');
                }
            })
        }
    })
})

function outputData(data) {
    return "<div><h2>Weather in" + data.name + "</h2>>" +
        "<img src='http://openweathermap.org/img/w/10d.png' >" + data.weather[0].icon +
        ".png' width=100px" + "<h4> Weather: " + data.weather[0].main + "<br>" +
        "Description: " + data.weather[0].description + "<br>" +
        "Temperature: " + data.main.temp + "<br>" +
        "High Temp: " + data.main.temp_max + "<br>" +
        "Low Temp: " + data.main.temp_min + "<br>" +
        "Pressure: " + data.main.pressure + "<br>" +
        "Humidity: " + data.main.humidity + "<br>" +
        "Visibility: " + data.visibility + "<br>" +
        "Wind Speed: " + data.wind.speed + "<br>" +
        "Wind Direction: " + data.wind.deg + "</h4></div>>";
}