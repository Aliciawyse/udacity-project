//this function builds a grid
function makeGrid(x,y) {

    const element = document.getElementById("container");

    for (let rows = 0; rows < x; rows++) {
        for (let columns = 0; columns < y; columns++) {
            $("#grid-container").append("<div class='grid'></div>");
        };
    };

    $(".grid").width(500/x);
    $(".grid").height(500/y);

}

//call grid function
makeGrid(4,4);