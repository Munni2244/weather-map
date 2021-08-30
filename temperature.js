const getInput =() => {
const inputText= document.getElementById('input-value');
const inputValue= inputText.value;
inputText.value='';
if(inputValue==''){
  const container=document.getElementById('error-msg');
  const p = document.createElement('p');
  p.innerHTML=`<p class=" text-center text-danger font-bold ">Please enter your msg</p>
  `;
container.appendChild(p);
}

else{
  fetch(`https://api.openweathermap.org/data/2.5/weather?q=${inputValue}&appid=b3a5bd53c17b6a562060606a9d420bd4`)
.then(res => res.json())
.then(data =>  getOutput(data))
}
}

const getOutput = (value)=> {
    console.log(value)
  if(value==null){
    console.log('city not found');
      const container2=document.getElementById('error-msg2');
      const p = document.createElement('p');
      p.innerHTML=`<p class=" text-center text-danger font-bold ">The city not found</p>
      `;
    container2.appendChild(p);
    
  }
   
  else{
    // const cityName= value.name;
    // const cityDeg= value.main.temp;
    // const cityDegValue= cityDeg-273.15;
    // const cityWeather= value.weather[0].description;

    // document.getElementById('city-name').innerText=cityName;
    // document.getElementById('city-deg').innerText=cityDegValue.toFixed(2);
    // document.getElementById('city-weather').innerText=cityWeather;

   const iconCode= value.weather[0].icon;
   console.log(iconCode);
    const iconUrl = `https://openweathermap.org/img/wn/${iconCode}.png`;
    const cityDeg= value.main.temp;
    const cityDegValue= cityDeg-273.15;
    const mainBox= document.getElementById('box');
    mainBox.textContent= '';
    const div= document.createElement('div');
    div.innerHTML= `
    <img src="${iconUrl}" alt="">
            <h1 id="city-name">${value.name}</h1>
            <h3><span id="city-deg">${cityDegValue.toFixed(2)}</span>&deg;C</h3>
            <h1 id="city-weather" class="lead">${value.weather[0].description}</h1>
          
    `;
    mainBox.appendChild(div);


  }
}
