function search(){
    place=sear.value;
    fetch(`https://api.openweathermap.org/data/2.5/weather?q=${place}&appid=5b4bee0ba241d092159faf007e166080`).then(data=>data.json()).then(data=>displaydata(data))
}
function convert(f){
    return Math.floor(f-273.15)
}
function displaydata(placedata){
    placename=placedata.name
degree=convert(placedata.main.temp)
pres=placedata.main.pressure
humid=placedata.main.humidity
visib=(placedata.visibility)/1000
wind=placedata.wind.speed
descrip=placedata.weather[0].description

pl.innerHTML=`${placename }`
deg.innerHTML=`${degree}&#8451;`
des.innerHTML=`${descrip}`
pr.innerHTML=`${pres}hpa`
hu.innerHTML=`${humid}%`
vi.innerHTML=`${visib}km`
wi.innerHTML=`${wind}km/hr`
}