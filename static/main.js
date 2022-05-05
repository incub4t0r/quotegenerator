function setQuote() {
    // fetch('https://api.quotable.io/random?tags=technology')
    // fetch('https://api.quotable.io/random?tags=famous-quotes')
    fetch('https://api.quotable.io/random?tags=wisdom')
        .then(response => response.json())
        .then(data => {
            $('.quote_contents').html('"' + data.content + '"');
            $('.quote_attribution').html(data.author);
        })
        .catch((err) => console.log(err)
    );
}

$( document ).ready(function() {
    setQuote();
    $(".quote").click(function() {
        setQuote();
    });
});