let inputElement=document.querySelector("input")
let btn=document.querySelector("button")
let outPutDiv=document.querySelector("#output")

btn.addEventListener("click",async()=>{
    let key="7b9546898ebc0cf04da1caa9e31f9e7e"
    let res=await fetch(`https://api.openweathermap.org/data/2.5/weather?q=${inputElement.value}&appid=${key}`)
    console.log(res);

    if(res.status==200){
     
        let data=await res.json()

        let city=document.createElement("h3")
        city.innerHTML=`City Name : ${data.name}`

        let temperature=document.createElement("h3")
        temperature.innerHTML=`Temperature : ${parseInt(data.main.temp-273)}℃`

        let climate=document.createElement("h3")
        climate.innerHTML=`Climate : ${data.weather[0].main}`

        let windspeed=document.createElement("h3")
        windspeed.innerHTML=`windspeed : ${data.wind.speed}Km/hr`

        outPutDiv.append(city,temperature,climate, windspeed)

        console.log(data);
        

    }
    else if(res.status==404){
      let errorElement= document.createElement("h3")
      
      errorElement.innerHTML="City not found, Enter the proper city name"
      outPutDiv.append(errorElement)
    }
    innerhtml=""
    
})