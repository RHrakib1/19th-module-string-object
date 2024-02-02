const school = 'Gaibandha Govt Technical School And Collage'
console.log(school);
console.log(school.toLowerCase());
console.log(school.toUpperCase());



// "tolowercase" diye puro string k lower case a make kore and "toupercase diye puro string k upppercase a make kore" 
const city = 'Gaibandha'
const sohor = 'gaibandha'
if (city.toLowerCase() === sohor.toLowerCase()) {
    console.log("I am coming in your city becouse your city is so good")
}
else {
    console.log("i don't come your city but i see this")
}





// example 2
// "  case", "case" ai 2ta element vinno karon string err modhe space ase tai ati alada alada element---------ake same korar jonno mane space soranor jonnno  "trime()" bebohar kora hoi
// "trime()" diye overall string er space sorano hoi
// "trimeEnd()" diye sudhu pisoner string er space sorano hoi
// "trimeStart()" diye sudhu samoner  string er space sorano hoi 
console.log("example 2 strat");
const computer = "cpu";
const component = "   cpu";
if (computer.trim() === component.trim()) {
    console.log("I buy it")
}
else {
    console.log("don't buy this component");
}