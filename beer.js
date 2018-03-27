// collecting the data from the thermostat - Using Arrays of data assuming that the data is true - this is a calculation of all containers at their current temp max temp and min temp through objects.
// Each container is consisted of 4 different variables - current temp, max temp, min temp and the beer name. 

beers = [{ 
		current_temp: 6, // objects properties of each beer 
		max_temp: 6,
		min_temp: 4,
		name: "Heineken"
	},
	{
		current_temp: 4.5,
		max_temp: 6,
		min_temp: 5,
		name: "150 lashes"
	},
	{
		current_temp: 5,
		max_temp: 8,
		min_temp: 6,
		name: "victoria bitter"
	},
	{

		current_temp: 5,
		max_temp: 8,
		min_temp: 6,
		name: "carlton"

	},
	{
		current_temp: 4,
		max_temp: 5,
		min_temp: 3,
		name: "corona"
	},

// from this data we have managed to full loop with the each arrays assuming current temp is less or = to min temp OR current temp <= max temp 
// orginally I has an else if statement for each array, but there was alot of code - So I've refactored it to a full loop where is constantly checks the temp of the 5 containers of beer.

function check_Beers(beers) {
	for (i = 0; i < beers.length; i++) {
		if (beers[i].current_temp >= beers[i].min_temp || beers[i].current_temp <= beers[i].max_temp) {
			console.log(beers[i].name + ' is safe ')
		} else {
			console.log(beers[i].name + ' is not safe ')
		}
	}

}

checkbeers(beers)

// refresh the browser and console the end output for all the beers shoud be safe. 
 





    

    
    
