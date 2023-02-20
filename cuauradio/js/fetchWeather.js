window.addEventListener('load', function() {
  weatherBalloon( 4019233 );
});
function weatherBalloon( cityID ) {
    var weatherKey = '16060baec13180b978670cc35e7183a5';
    fetch('https://api.openweathermap.org/data/2.5/forecast?id=' + cityID + '&appid=' + weatherKey + '&units=metric')  
    .then(function(respWeather) { return respWeather.json() })
    .then(function(dataWeather) {
      drawWeather(dataWeather);
    })
    .catch(function() {
    });
  }
function drawWeather( weather ) {
    var mintemp = Math.round(parseFloat(((weather.list)[4]).main.temp_min));
      var maxtemp = Math.round(parseFloat(((weather.list)[7]).main.temp_max));
    
    document.getElementById('temp_min').innerHTML = mintemp + '&deg;';
      document.getElementById('temp_max').innerHTML = maxtemp + '&deg;';
  }