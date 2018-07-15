//creates a grid
function makeGrid(x,y) {

    const element = document.getElementById("container");
    element.classList.toggle("container");

    for (let rows = 0; rows < x; rows++) {
        for (let columns = 0; columns < y; columns++) {
            $("#container").append("<div class='grid'></div>");
        };
    };

    $(".grid").width(500/x);
    $(".grid").height(500/y);

}

$("form").on("submit",function(event){

    event.preventDefault();
    const position = $("#theCanvas").offset().top;
    const userHeightInput = $("#inputHeight").val().trim();
    const userWidthInput = $("#inputWidth").val().trim();
    document.getElementById("submit").classList.toggle("hidden");
    makeGrid(userWidthInput,userHeightInput);

    // scroll to where element with id theCanvas is located on the page
    $("body, html").animate({
        scrollTop: position
    }, 500 );

    $(document).ready(function () {
        $('.grid').click(function () {

            let colors = new Array();

            colors[0] = $("#colorPicker").val();
            colors[1] = "hsl(204, 86%, 53%)";
            colors[2] = "hsl(348, 100%, 61%)";
            colors[3] = "hsl(171, 100%, 41%)";
            colors[4] = "hsl(141, 71%, 48%)";

            //radomly select colors
            let b = Math.floor(Math.random()*colors.length);

            if($(this).css('background-color') === "rgba(0, 0, 0, 0)")

            {
                $(this).css('background', colors[0]);

            } else {
                $(this).css('background', colors[b])
            }

        });
    })
});
