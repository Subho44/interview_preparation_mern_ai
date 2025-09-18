async function getweather(city) {
    let res = await fetch(`https://wttr.in/${city}?format=j1`);
    let data = await res.json();
    console.log(`${city} Weather:`, data.current_condition[0].temp_C,"C");
    
}
getweather("liluah");