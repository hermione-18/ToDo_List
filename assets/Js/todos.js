//toggle todo completion
$("ul").on("click", "li", function() {
    $(this).toggleClass("completed");
});
$("ul").on("click", "span", function(e) {
    $(this).parent().fadeOut(300, function() {
        $(this).remove();
    });
    e.stopPropagation();
});

$("input[type='text'").keypress(function(e) {
    if (e.which === 13) {
        var newtext = $(this).val(); //extrace new todo item
        $("ul").append("<li><span><i class='fa fa-minus'></i></span> " + newtext + "</li>"); //add new todo to the list
        $(this).val("");
    }
})

$(".fa-plus").click(function() {
    $("input[type='text'").fadeToggle();
});
