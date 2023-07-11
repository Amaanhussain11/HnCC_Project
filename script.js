const options = {
    method: 'GET',
    headers: {
        'X-RapidAPI-Key': '9e3796486amsh0d3d98721ecf226p135f3djsnf9a0696e6d56',
        'X-RapidAPI-Host': 'weather-by-api-ninjas.p.rapidapi.com'
    }
};
const getweather = (city)=>{
    cityName.innerHTML=city;
   
   
    fetch('https://weather-by-api-ninjas.p.rapidapi.com/v1/weather?city=' + city, options)
    .then(response => response.json())
    .then((response) =>{

        console.log(response)
        document.getElementById('cityName');
        document.getElementById("cityname2");
        cityName.innerHTML=response.cityName;
        cityname2.innerHTML=response.cityname2;
        cityname2.innerHTML=city;
        cityName.innerHTML=city;
       
       
        
        // document.getElementById('feels_like')
        // feels_like.innerHTML = response.feels_like
        // document.getElementById('feels_like')
        // feels_like1.innerHTML = response.feels_like
       
        // document.getElementById('humidity')
        // humidity1.innerHTML = response.humidity
        
       
        
        document.getElementById('temp')
        temp.innerHTML = response.temp

        document.getElementById('cloud_pct')
        cloud_pct.innerHTML = response.cloud_pct
         
        document.getElementById('wind_speed')
        wind_speed.innerHTML = response.wind_speed

         document.getElementById('humidity')
        humidity.innerHTML = response.humidity

        document.getElementById('max_temp')
        max_temp.innerHTML = response.max_temp

         document.getElementById('min_temp')
        min_temp.innerHTML = response.min_temp

        // document.getElementById('wind_degrees')
        // wind_degrees.innerHTML = response.wind_degrees

        document.getElementById('sunrise')
        sunrise.innerHTML = response.sunrise
        document.getElementById('sunset')
        sunset.innerHTML = response.sunset
        
    })
    .catch(err => console.error(err));

}
submit.addEventListener("click",(e)=>{
    e.preventDefault();
    getweather(city.value);
})
getweather("Sindri");



function onclickmenu(){
    
    document.getElementById("menu").classList.toggle("icon");
    document.getElementById("sideview").classList.toggle("change");
   
  document.getElementById("main").classList.toggle("mainchange");
  document.getElementById("homerect").classList.toggle("homerectchange");
  document.getElementById("searchbar").classList.toggle("searchbarchange");
  document.getElementById("firstdiv").classList.toggle("firstdivchange");
  document.getElementById("seconddiv").classList.toggle("seconddivchange");
  document.querySelector(".seconddiv1").classList.toggle("seconddiv1change");

   
}

let menu = document.getElementById("menu");
 

