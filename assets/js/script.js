var lat;
var lon;
var city = 'boston';

// API call for weather data based on lat and lon

// function getForcast() {
//     // replace `octocat` with anyone else's GitHub username
//     var requestUrl = 'api.openweathermap.org/data/2.5/forecast?lat='+lat+'&' +lon={lon}&appid=140cad93d85f1bf520591ca17e9aac9e';
//     fetch(requestUrl)
//       .then(function (response) {
//         return response.json();
//       })
//       .then(function (data) {
//         for (var i = 0; i < data.length; i++) {
//           var listItem = document.createElement('li');
//           listItem.textContent = data[i].html_url;
//           repoList.appendChild(listItem);
//         }
//       });
//   }
// 'api.openweathermap.org/data/2.5/forecast?lat={lat}&lon={lon}&appid={API key}'

// API call for the lat and lon of a place
function getLatNLon() {
    // replace `octocat` with anyone else's GitHub username
    var requestUrl = 'https://api.openweathermap.org/geo/1.0/direct?q=' + city +',US&appid=140cad93d85f1bf520591ca17e9aac9e';
  
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

        // for (var i = 0; i < data.length; i++) {
        //   var listItem = document.createElement('li');
        //   listItem.textContent = data[i].html_url;
        //   repoList.appendChild(listItem);
        // }
      });
  }
// http://api.openweathermap.org/geo/1.0/direct?q={city name},{state code},{country code}&limit={limit}&appid={API key}
getLatNLon();