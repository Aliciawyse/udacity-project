
function makeGrid(x,y) {

    var element = document.getElementById("container");
    element.classList.toggle("container");

    for (var rows = 0; rows < x; rows++) {
        for (var columns = 0; columns < y; columns++) {
            $("#container").append("<div class='grid'></div>");
        };
    };
    $(".grid").width(500/x);
    $(".grid").height(500/y);

}

$("form").on("submit",function(event){

    event.preventDefault();
    var position = $("#theCanvas").offset().top;
    var userHeightInput = $("#inputHeight").val().trim();
    var userWidthInput = $("#inputWidth").val().trim();
    makeGrid(userWidthInput,userHeightInput);

    // scroll to where element with id theCanvas is located on the page
    $("body, html").animate({
        scrollTop: position
    }, 500 );

    $(document).ready(function () {
        $('.grid').click(function () {

            var colors = new Array();

            colors[0] = $("#colorPicker").val();
            colors[1] = "blue";
            colors[2] = "green";
            colors[3] = "lime";
            colors[4] = "teal";

            //radomly select colors
            var b = Math.floor(Math.random()*colors.length);

            if($(this).css('background-color') === "rgba(0, 0, 0, 0)")

            {
                $(this).css('background', colors[0]);

            } else {
                $(this).css('background', colors[b])
            }

        });
    })
});
