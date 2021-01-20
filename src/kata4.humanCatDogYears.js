const humanCatDogYears = (number) => {
  
    if(number === 1){
        return [1, 15, 15]
    } 
    else if (number === 2){
        return [2, 24, 24]
    } 
    else {
        const catYears = (number - 2) * 4 + 24;
        const dogYears = (number - 2) * 5 + 24;
        
        return [number, catYears, dogYears];
    }
};






module.exports = humanCatDogYears;
