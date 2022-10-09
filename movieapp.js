let movies = [];
let id = 0;

$('#movie-form').on("submit",function(e){
    e.preventDefault();
    let movieName = $('#movieName').val();
    let rating = $('#Rating').val();

    $('#movie-list').append($('<li>',{text: `${movieName} ${rating}`,class: `${id}`}));
    $(`.${id}`).append('<button class="remove-btn">Delete</button>');
    id++
});


$('#movie-list').on("click", function(e){
    e.preventDefault();
    
    $(e.target).parent().remove();
});
