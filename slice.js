// kono string er vitor theke slice er madhome kisu word neoya
const address = "kurigrampoli";
const part = address.slice(4, 8);
console.log(part);



// example 2 
// sentenes a gap dhore vag kore felese er karone "split(" ")";
console.log("example 2 start");
const word = "i am a diploma student.i am a good boy";
const status1 = word.split(' ');
console.log(status1)



// sentenes a potiti jaiga and  space soho dhore  dhore vag kore felese er karone "split("")";
console.log("example 3 start");
const word1 = "i am a diploma student.i am a good boy";
const status2 = word1.split('');
console.log(status2)


// sentenes er modhe kono word k  dhore vag kore felese er karone "split("a")";
console.log("example 4 start");
const word2 = "i am a diploma student.i am a good boy";
const status3 = word2.split('a');
console.log(status3)



// ','er madhome potiti word k alada alada kora hoi
console.log("example 5 start");
const friend="rakib ,tarin,torabi,hasan,rahman"
const love=friend.split(',');
console.log(love);




// kono array k "join('|');"diye vag korar jonno use kora hoi othoba j kono simbol diyeo kora jai
console.log("example 6 start");
const friend2=[ 'rakib ', 'tarin', 'torabi', 'hasan', 'rahman' ];
const love2=friend2.join('|');
console.log(love2);

