var quotes = [

    {
        caption:'Be yourself; everyone else is already taken.',
        author:'Oscar Wilde'

    },
    {
        caption:'Two things are infinite: the universe and human stupidity; and Im not sure about the universe.',
        author:'Albert Einstein'

    },
    {
        caption:'A room without books is like a body without a soul.',
        author:'Marcus Tullius Cicero'

    },
    {
        caption:'You only live once, but if you do it right, once is enough.',
        author:'Mae West'

    },
    {
        caption:'Be the change that you wish to see in the world.',
        author:'Mahatma Gandhi'

    },
    {
        caption:'In three words I can sum up everything Ive learned about life: it goes on.',
        author:'Robert Frost'

    },
    {
        caption:'If you tell the truth, you dont have to remember anything.',
        author:' Mark Twain'

    },
    {
        caption:'A friend is someone who knows all about you and still loves you',
        author:'Elbert Hubbard'

    },
    {
        caption:'Always forgive your enemies; nothing annoys them so much.',
        author:'Oscar Wilde'

    },
    {
        caption:'It is better to be hated for what you are than to be loved for what you are not.',
        author:'Andre Gide, Autumn Leaves'

    },
    


]
var caption = document.getElementById('cap');
var btn = document.getElementById('btn');
var author = document.getElementById('author');
function printQuote(){
    var id = Math.floor(Math.random()*10);
    caption.innerHTML=quotes[id].caption;
    author.innerHTML=quotes[id].author;
}