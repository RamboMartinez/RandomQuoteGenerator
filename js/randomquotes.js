function generateQuote() {
    const quotes = [
        {
            quote: "Wake up to reality. Nothing ever goes as planned in this world. The longer you live, the more you realize that only pain, suffering, and futility exist in this reality.",
            author: "-Madara Uchiha."
        },
        {
            quote: "Whatever you lose, you'll find it again. But what you throw away you'll never get back.",
            author: "-Kenshin Himura"
        },     
        {
            quote: "Life is to deep for words, so don't try to describe it, just live it.",
            author: "-C.S Lewis"
        },     
        {
            quote: "Out of the moutain of dispair, a stone of hope.",
            author: "-Martin Luther King, Jr."
        },
        {
            quote: "Being weak is nothing to be ashamed of...Staying weak is.",
            author: "-Fuegoleon Vermillion"
        }
    ];

    let currentQuote = Math.floor(Math.random() * quotes.length);
    //console.log(currentQuote);

    document.getElementById('quotation').innerHTML = "&quot;" + quotes[currentQuote].quote + "&quot;";
    document.getElementById('author').innerHTML = "-" + quotes[currentQuote].author;
}


window.onload = function() {
    generateQuote();
    document.getElementById('generate').addEventListener('click', generateQuote);
}