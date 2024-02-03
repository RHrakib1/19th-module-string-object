const mobile = {
    price: 25000,
    camera: '12px',
    brande: 'samsung',
    weight: "500gm",
    display: 'water proved'
}

// array er khtre "for of"
// string er khtre' for in'
for (let hasanr in mobile) {
    console.log(hasanr);
    console.log(mobile[hasanr]);
}



// example 2
console.log("example 2")
const player = {
    man: 'Strong',
    hight: 5.5,
    weight: 55
}


const keys = Object.keys(player);
console.log(keys);
for(const key of keys){
    console.log(key);
    console.log(player[key])
}



