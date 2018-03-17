// Select color input
// Select size input

// When size is submitted by the user, call makeGrid()

function makeGrid() {

// Your code goes here!


}


//on submit
//grab values and make a grid

function grabValues() {

    $("#sizePicker").submit(function(event){

        var gridHeight = $("#inputHeight").val();
        var gridWidth = $("#inputWidth").val();

        // console.log($("#inputHeight").val());
        // console.log($("#inputWidth").val());
    })

    //call make grid()

}

grabValues();