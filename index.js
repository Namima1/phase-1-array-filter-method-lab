//findMatching()
//returns all drivers that match the passed in name
//returns matching drivers if case does not match but letters do
//returns an empty array if there is no match
    
//fuzzyMatch()
//returns a driver if beginning provided letters match
//does not return drivers if only middle or ending letters match
//does not return drivers if only middle or ending letters match
  
//matchName()
//accesses the data structure to check if name matches

const drivers = ["Bobby", "Sammy", "Sally", "Annette", "Sarah", "Bobby"];

function findMatching(drivers, name) {
    return drivers.filter(driver => driver.toLowerCase() === name.toLowerCase());
}

findMatching(drivers);


function fuzzyMatch(drivers, letters) {
    return drivers.filter(driver => driver.toLowerCase().startsWith(letters.toLowerCase()));
}

function matchName(drivers, name) {
    return drivers.filter(driver => driver.name.toLowerCase() === name.toLowerCase());
}