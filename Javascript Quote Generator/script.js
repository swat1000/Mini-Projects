let btn = document.querySelector('#new-quote');
let quote = document.querySelector('.quote');
let person = document.querySelector('.person');

const quotes = [{
quote: "The greatest glory in living lies not in never falling, but in rising every time we fall.", 
person: "Nelson Mandela"
}, {
quote: "The best and most beautiful things in the world cannot be seen or even touched - they must be felt with the heart.", 
person: "Helen Keller"
}, {
quote: "Don't watch the clock; do what it does. Keep going", 
person: "Sam Levenson"
}, {
quote: "Success is not final, failure is not fatal: it is the courage to continue that counts.", 
person: "Winston Churchill"
}, {
quote: "Be yourself; everyone else is already taken.", 
person: "Oscar Wilde"
}, {
quote: "In three words I can sum up everything I've learned about life: it goes on.", 
person: " Robert Frost"
}, {
quote: "Happiness is not something ready made. It comes from your own actions.", 
person: "Dalai Lama"
}, {
quote: "Believe in yourself and all that you are. Know that there is something inside you that is greater than any obstacle.", 
person: "Christian D. Larson"
}, {
quote: "The only way to do great work is to love what you do.", 
person: "Steve Jobs"
}, {
quote: "Life is not a problem to be solved, but a reality to be experienced.", 
person: "Soren Kierkegaard"
},]

btn.addEventListener('click', function(){
    let random = Math.floor(Math.random() * quotes.length);
    console.log(random)
    quote.InnerText = quotes[random].quote;
    person.InnerText = quotes[random].person;

})