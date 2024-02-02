const clg = {
    name:'kpi',
    address:"kurigram",
    envaironment:[ "colony", "polaspara", "clg para"],
    shirt:{
        color:'full',
        brand:'suti',
        import:{
            unifrom:'Usa',
            form:'dhaka'
        }
    }
}
// variable a access kora
clg.shirt.brand="water proved"
const change=clg.shirt.brand;
console.log(change)

// kono obj er vitor array change korar niyom
clg.envaironment[2]="kutipara";
console.log(clg.envaironment[2]);

// kono proparty delete korar jonno 
delete clg.shirt.brand;
console.log(clg);

// obj display kora
console.log(clg.shirt.import.form);