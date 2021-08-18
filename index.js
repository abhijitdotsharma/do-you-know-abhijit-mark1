//IDK what this does, I just Copy-Paste
var readlineSync = require('readline-sync');

//welcome message
let playerName = readlineSync.question('What is your name? -> ');
console.log(`Hi ${playerName}, welcome to 'Do You Even Know' abhijit . `);

console.log('------------------------------------------------')

//questions and answers -> array of objects
let questions = [{
  question : 'What is my favourite sport : cricket/football/ludo ? ',
  answer : 'football'
},{
  question : 'who is my favourite footballer : messi/ronaldo/neymar ? ',
  answer : 'messi'
},{
  question : 'ufc or wwe ? ',
  answer : 'ufc'
},{
  question : 'which state am I from : Assam/Arunachal Pradesh/Meghalaya ?',
  answer : 'Assam'
},{
  question : 'my favourite ufc fighter : Izzy/Conor/Usman ?',
  answer : 'Izzy'
}
]

//hall of fame
let highscore = [
  {
    name : 'Abhijit',
    score : 3,
  },{
    name : "Voldemort ",
    score : 2,
  }
]

let score = 0;


function play(ques, ans){
  let response = readlineSync.question(ques);
  if(response === ans){
    console.log('Correct !!!');
    score = score + 1;
  }else{
    console.log('Wrong !!!');
  }
  console.log('Current score : ', score);
  console.log('=======================================')
}

//runs and calls the play function for 'length-1' times
for(let i = 0, n = questions.length; i < n; i++){
  play(questions[i].question, questions[i].answer)
}

console.log('You are not Bored till now? Anyways, you scored ::::: ', score);
console.log(`---Check out the Hall of Fame---`)
for(let i = 0, n = highscore.length; i < n; i++){
  console.log(highscore[i].name + " : " + highscore[i].score);
}
console.log(`Ping me if you scored higher, 
I dont have many friends and I would update it asap. `)
