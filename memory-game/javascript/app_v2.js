$(function(){

    var tile_size = 32;

    //define a tile constructor
    let Tile = function(x,y){
        this.x = x;
        this.y = y;
        this.width = tile_size;
        this.height = tile_size;
    };

// method on tile object that draws a tile face down

    Tile.prototype.draw = function(){

        let canvas = document.getElementById("canvas");
        let canvas_context = canvas.getContext('2d');
        canvas_context.fillRect(this.x, this.y, this.width, this.width);
        canvas_context.strokeRect(this.x, this.y, this.width, this.width);
        canvas_context.strokeStyle = "red"

    };

    let tiles = [];

    const num_cols = 4;
    const num_rows = 4;
    const spacing = 5;

    for (let i = 0; i < num_cols; i++){

        for(let j = 0; j < num_rows; j++){

            // let tileX = i * 54 + 5;
            // let tileY = j * 54 + 40;
            let x = (i * tile_size) + spacing;
            let y = (j * tile_size) + spacing;
            tiles.push(new Tile(x, y));
        }
    }

    // x position, y position x is left to right and y is top to bottom
    /*
    0, 0
      * * * *
      * * * *
      * * x *
      * * * *
             3, 3

      x would be [2][2] [x][y]

    */

    for(var i in tiles) {
        tiles[i].draw();
    }

});




