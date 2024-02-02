// odject declear kora and  console a "." bebohar kore object er vitor a kono proparty k dekhano
//"[]"diye object er proparty dekhanor niyom
const rakib = {
    age: 22,
    hobby: "web developer",
    student: true,
    working: "player",
    tools: ['computer', 'bycaycel', ' mobile'],
    dipreasion: {
        first: 'faimaly',
        second: 'job',
        third: 'love',
    },
    simple: 'Boy',
    'pro player': "me"
}
console.log(rakib.simple);
// "[]" diye object dekhar niyom
console.log(rakib['hobby']);

//variable declear kore kora jai
const educated = rakib["student"];
console.log(educated);




// dot notation "." diye sob somoy propaarty output dekhano jabe na jemon kono simbol "",-,etc proparty te thakle hbe na tokhn "[]"diye kaj krte hbe
console.log(rakib["pro player"]);









//valu o change kora jai 2 vabe 
// 1) . notation
// 2)[] notation
rakib['age'] = 30;
rakib.simple='crush';
// variable declear
const kaj='working';
rakib.kaj="playerFull";

console.log(rakib);