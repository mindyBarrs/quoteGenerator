var colorWheel = ["#1a3c34","#007485","#79eeff","#b1f96d","#65076b","#bf47a8","#945ec3","#6660a7","#578eb0","#68d6d8"];
var quote = "";
var autoer = "";

function randomQuote(){
	$.getJSON("https://api.forismatic.com/api/1.0/?method=getQuote&key=457653&format=jsonp&lang=en&jsonp=?", function(data) {
    quote = data.quoteText;

    if (data.quoteAuthor) {
      author = data.quoteAuthor;
    } else {
      author = "Anonymous"
    }

    $(".card-text").animate({
      opacity: 0
    }, 500, function() {
      $(".card-text").html(quote);
      $(this).animate({
        opacity: 1
      }, 500);
    });

    $('.author').animate({
      opacity: 0
    }, 500, function() {
      $('.author').html(author);
      $(this).animate({
        opacity: 1
      }, 500);
    });

    var choice = Math.floor(Math.random() * colorWheel.length);

    $("body").animate({
      backgroundColor: colorWheel[choice],
      color: colorWheel[choice],
    }, 1000);

    $('button').animate({
      backgroundColor: colorWheel[choice]
    }, 1000);
		
		$(".fa-quote-left").animate({ color: colorWheel[choice]}, 1000);
    
    $(".shareBtn").click(function(){ window.open('https://twitter.com/intent/tweet?hashtags=quotes&text=' + encodeURIComponent('"'+ quote +'" -'+ author));
																	 });
  }); 
}

$("#newQuote").click(function(){
	event.PreventDefault;
	randomQuote();
});
randomQuote();
