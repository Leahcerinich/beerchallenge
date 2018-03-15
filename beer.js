
// collecting the data from the thermostat 
beers = [
    {
        current_temperature: 5,
        max_temp: 6,
        min_temp: 4,
        name: "Heineken"
    },
    {
        current_temperture: 4.5,
        max_temp: 6,
        min_temp: 5,
        name: "150 lashes"
    },
    {       
        current_temp: 5.5,
        max_temp: 8,
        min_temp: 6,
        name:"victoria bitter"
    },
    {       
    
        current_temp: 5.5,
        max_temp: 8,
        min_temp: 6,
        name:"carlton"
    
    },
    {
        current_temp: 4.5,
        max_temp: 5,
        min_temp: 3,
        name: "corona"
    }, ]

// from this data we have managed to full loop 

function checkbeers(beers){ 
    for (i=0; i<beers.length;i++){
     if (beers[i].current_temp >= beers[i].min_temp ||  beers[i].current_temp <= beers[i].max_temp) {
         console.log(beers[i].name + ' is safe')
    }
     else {
         console.log(beers[i].name + ' is not safe')
     }
 }
    
}

checkbeers(beers)





    

    
    