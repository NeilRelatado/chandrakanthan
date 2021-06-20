var quotes = ["The steadfast love of the LORD never ceases; his mercies never come to an end; they are new every morning; great is your faithfulness.",
"Fear not, for I am with you; be not dismayed, for I am your God; I will strengthen you, I will help you, I will uphold you with my righteous right hand.",
"The LORD is my light and my salvation; whom shall I fear? The LORD is the stronghold of my life; of whom shall I be afraid?"]
var authors= ["Lamentations 3:22-23","Isaiah 41:10","Psalm 27:12"]
var counter = 0; 

function updateQuotes(){
    var currentQuote = quotes[counter];
    var currentAuthor= authors[counter];
    
    counter++;
    if(counter == quotes.length){
        counter = 0 
    }

    console.log(counter);
    $("#bibleQuote").fadeTo(1000,1)
    $("#writer").fadeTo(1000,1)


    $("#bibleQuote").text(currentQuote)
    $("#writer").text(currentAuthor)

    setTimeout(function(){
        $("#bibleQuote").fadeTo(1000, 0);
        $("#writer").fadeTo(1000, 0);
      }, 6000);


}

function changeQuote(){
    updateQuotes();
    setInterval(function(){
        updateQuotes();
    },9000)
}

changeQuote();