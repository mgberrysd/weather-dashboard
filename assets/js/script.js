var lat;
var lon;
var city = 'San Diego';
var currentDayDiv = document.querySelector('.current');

// API call for current weather data based on lat and lon

function getCurrentForcast(lattitude, longitude) {
    var requestUrl = 'https://api.openweathermap.org/data/2.5/weather?lat=' + lattitude + '&lon=' + longitude + '&appid=140cad93d85f1bf520591ca17e9aac9e';
    fetch(requestUrl)
      .then(function (response) {
        return response.json();
      })
      .then(function (data) {
        console.log(data)
        var name = document.createElement('h2');
        name.textContent = data.name;
        var icon = document.createElement('img');
        icon.setAttribute('src', 'https://openweathermap.org/img/wn/' + data.weather[0].icon +'@2x.png');
        var temp = document.createElement('p');
        temp.textContent = 'Temperature: ' + data.main.temp + ' F';
        var wind = document.createElement('p');
        wind.textContent = 'Wind: ' + data.wind.speed + ' MPH';
        var humidity = document.createElement('p');
        humidity.textContent = 'Humidity: ' + data.main.humidity + ' %';
        currentDayDiv.append(name);
        currentDayDiv.append(icon)
        currentDayDiv.append(temp);
        currentDayDiv.append(wind);
        currentDayDiv.append(humidity);


      });
  };

// API call for extended forcast weather data based on lat and lon

function getExtendedForcast(lattitude, longitude) {
    var requestUrl = 'https://api.openweathermap.org/data/2.5/forecast?lat=' + lattitude + '&lon=' + longitude + '&appid=140cad93d85f1bf520591ca17e9aac9e';
    fetch(requestUrl)
      .then(function (response) {
        return response.json();
      })
      .then(function (data) {
        console.log(data)
        console.log(data.list[0].main)
      });
  };

// API call for the lat and lon of a place
function getLatNLon(cityName) {
    var requestUrl = 'https://api.openweathermap.org/geo/1.0/direct?q=' + cityName +',US&appid=140cad93d85f1bf520591ca17e9aac9e';
  
    fetch(requestUrl)
      .then(function (response) {
        return response.json();
      })
      .then(function (data) {
        lat = data[0].lat;
        lon = data[0].lon;
        console.log(data);
        console.log(data[0].lat);
        console.log(data[0].lon);
        console.log(lat);
        console.log(lon);
        getCurrentForcast(lat,lon);
        getExtendedForcast(lat,lon);
      });
  };

getLatNLon(city);