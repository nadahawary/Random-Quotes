
var quotes=[
    {
    quote:`“I'm selfish, impatient and a little insecure. I make mistakes, I am out of control and at times hard to handle. But if you can't handle me at my worst, then you sure as hell don't deserve me at my best.”`,
    writer:`― Marilyn Monroe`
},
    {
    quote:`“So many books, so little time.”`,
    writer:`― Frank Zappa`
},
    {
    quote:`“Two things are infinite: the universe and human stupidity; and I'm not sure about the universe.”`,
    writer:`― Albert Einstein`
},
    {
    quote:`“A room without books is like a body without a soul.”`,
    writer:`―  Marcus Tullius Cicero`
},
    {
    quote:`“Be who you are and say what you feel, because those who mind don't matter, and those who matter don't mind.”`,
    writer:`― Bernard M. Baruch`
},
    {
    quote:`
    “You know you're in love when you can't fall asleep because reality is finally better than your dreams.”`,
    writer:`― Dr. Seuss`
},
    {
    quote:`“Be the change that you wish to see in the world.”`,
    writer:`―  Mahatma Gand`
},
    {
    quote:`“In three words I can sum up everything I've learned about life: it goes on.”`,
    writer:`―  Robert Frost`
},
    {
    quote:`“If you tell the truth, you don't have to remember anything.”`,
    writer:`― Mark Twain`
},
    {
    quote:`“Friendship ... is born at the moment when one man says to another "What! You too? I thought that no one but myself . . .”`,
    writer:`― C.S. Lewis`
},

];

var qouteBtn=document.getElementById("qouteBtn");
var quote=document.getElementById("quote");
var writer=document.getElementById("writer");
var usedQuotes= [];

qouteBtn.onclick = function (){
    if(usedQuotes.length===quotes.length){
        quote.innerHTML= "All quotes have been used.";
        writer.innerHTML=" ";
        return;
    }
    
    var random=Math.floor(Math.random() * quotes.length);
    while(usedQuotes.includes(random)){
        random=Math.floor(Math.random() *quotes.length)
    }
    usedQuotes.push(random);
    quote.innerHTML = quotes[random].quote;
    writer.innerHTML= quotes[random].writer;
};
