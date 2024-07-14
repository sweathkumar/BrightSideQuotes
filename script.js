const quotes = [
    "The only way to do great work is to love what you do. – Steve Jobs",
    "Innovation distinguishes between a leader and a follower. – Steve Jobs",
    "Your time is limited, don't waste it living someone else's life. – Steve Jobs",
    "Success is not final, failure is not fatal: It is the courage to continue that counts. – Winston Churchill",
    "The best way to predict the future is to create it. – Peter Drucker",
    "Life is what happens when you're busy making other plans. – Allen Saunders",
    "The greatest glory in living lies not in never falling, but in rising every time we fall. – Nelson Mandela",
    "The purpose of life is not to be happy. It is to be useful, to be honorable, to be compassionate, to have it make some difference that you have lived and lived well. – Ralph Waldo Emerson",
    "The future belongs to those who believe in the beauty of their dreams. – Eleanor Roosevelt",
    "You miss 100% of the shots you don't take. – Wayne Gretzky",
    "The only limit to our realization of tomorrow will be our doubts of today. – Franklin D. Roosevelt",
    "Don't watch the clock; do what it does. Keep going. – Sam Levenson",
    "Believe you can and you're halfway there. – Theodore Roosevelt",
    "Life is really simple, but we insist on making it complicated. – Confucius",
    "The best revenge is massive success. – Frank Sinatra",
    "The harder I work, the luckier I get. – Samuel Goldwyn",
    "To be yourself in a world that is constantly trying to make you something else is the greatest accomplishment. – Ralph Waldo Emerson",
    "The secret of getting ahead is getting started. – Mark Twain",
    "It does not matter how slowly you go as long as you do not stop. – Confucius",
    "In three words I can sum up everything I've learned about life: it goes on. – Robert Frost"
];

function getRandomQuote() {
    return quotes[Math.floor(Math.random() * quotes.length)];
}

function displayRandomQuote() {
    const quoteElement = document.querySelector(".quote");
    quoteElement.textContent = getRandomQuote();
}

// test 
