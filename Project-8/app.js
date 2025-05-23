// //Random values, arrays revisited	Random Quote Generator


// let randomquotes = [
//       "Be yourself; everyone else is already taken.",
//       "Success is not final, failure is not fatal: It is the courage to continue that counts." ,
//      "Life is what happens when you're busy making other plans."
//     ]
// // function getQuote() {
// //     Math.floor(Math.random()*randomquotes.values-1);
// // }
// // let res = getQuote()
// // console.log(res);

// let string = ["apple","banana","mango","pineapple","strawberry"]

// const random = Math.floor(Math.random()* string.length)
// console.log(string[random]);                                      // steps to get random value from array

const quotes = [
    "Be yourself; everyone else is already taken. — Oscar Wilde",
    "Success is not final, failure is not fatal: It is the courage to continue that counts. — Winston Churchill",
    "Do not go where the path may lead, go instead where there is no path and leave a trail. — Ralph Waldo Emerson",
    "Life is what happens when you're busy making other plans. — John Lennon",
    "In the middle of difficulty lies opportunity. — Albert Einstein",
    "You miss 100% of the shots you don’t take. — Wayne Gretzky",
    "The best way to predict the future is to invent it. — Alan Kay",
    "Whether you think you can, or you think you can’t – you’re right. — Henry Ford",
    "Happiness is not something ready made. It comes from your own actions. — Dalai Lama",
    "Simplicity is the ultimate sophistication. — Leonardo da Vinci",
    "Dream big and dare to fail. — Norman Vaughan",
    "A person who never made a mistake never tried anything new. — Albert Einstein",
    "What lies behind us and what lies before us are tiny matters compared to what lies within us. — Ralph Waldo Emerson",
    "If you want to go fast, go alone. If you want to go far, go together. — African Proverb",
    "Don't count the days, make the days count. — Muhammad Ali",
    "The journey of a thousand miles begins with one step. — Lao Tzu",
    "Stay hungry, stay foolish. — Steve Jobs",
    "Believe you can and you're halfway there. — Theodore Roosevelt",
    "The only limit to our realization of tomorrow is our doubts of today. — Franklin D. Roosevelt",
    "Creativity is intelligence having fun. — Albert Einstein"
  ];

  let button = document.getElementById("btn")
  let answer = document.getElementById("result")

button.addEventListener("click",() => { 
    const random = Math.floor(Math.random() * quotes.length)
    answer.textContent = quotes[random]
    answer.style.display= "block"
 })