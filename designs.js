
function createGrid(x,y) {

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

    var userHeightInput = $("#inputHeight").val().trim();
    var userWidthInput = $("#inputWidth").val().trim();

    console.log(userHeightInput, userWidthInput);

    createGrid(userWidthInput,userHeightInput);

});
