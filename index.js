$(function () {

    // Variable declaration -------------------------------------

    var playGround = $('#playground');
    var responseText = $('#responseText');
    var playGroundRow = ".row"
    var squareBlockClass = ".square"
    var squareBlockDiv = "<div class='square'></div>";
    var rowDiv = "<div class='row'></div>";
    var clickCounter = 0;
    var bgcolor = "white"

    // Initiating te field on page load
    makefield()
    procesClick()


    // Click events-------------------------------------------





    // Function declaration------------------------------------

    // Makes the play-field using 2 loops
    function makefield (){
        // first make a Row
        for (let i = 0; i <10 ; i++) {
            playGround.append(rowDiv);
        }
        // append the row with square block's
        $(playGround).find( playGroundRow ).each(function (){
            for (let i = 0; i <10 ; i++) {
                $(this).append(squareBlockDiv);
            }
        })
        // Color each square block to a random rgb color using steps of 50 (rgb 50,200,150)
        $(playGround).find( squareBlockClass ).each(function (){
            var colorArray = getRandomColorNumberInArray()
            $(this).css("background-color", "rgb("+colorArray[0]+","+colorArray[1]+","+colorArray[2]+")");
        })
    }
    function procesClick(){
        $('body').on("mousedown",squareBlockClass,function () {
            // Click counter
            clickCounter++;
            if(clickCounter == 1){
                responseText.html("<p>Your first click</p>");
            }else
            {
                responseText.html("<p>"+clickCounter+" : click\'s</p>");
            }
            // switch colors
            bgcolor = $(this).css("background-color");
            $(this).css("background-color","white");

            $(this).mouseup(function () {
                $(this).css("background-color",bgcolor)
            });
        })
    };

    //Makes an array with 3 random numbers
    function getRandomColorNumberInArray() {
        var array = [];
        for (let i = 0; i <3 ; i++) {
            array.push(RandomLeap50());
        }
        return array;
    }

    // returns 50,100,150 ,200 or 250
    function RandomLeap50() {
        var random =  (Math.floor(Math.random() * 6))*50
        if(random == 0) random = 50;
        return random;
    }

})