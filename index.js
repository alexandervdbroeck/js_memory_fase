$(function () {

    // Variable declaration -------------------------------------

    var playGround = $('#playground');
    var responseText = $('#responseText');
    var playGroundRow = ".row";
    var squareBlockClass = ".square";
    var squareBlockDiv = "<div class='square'></div>";
    var rowDiv = "<div class='row'></div>";
    var clickCounter = 0;
    var bgcolor = "white";
    var body = $('body');

    // Initiating te field on page load
    initializeField()

    // Click events-------------------------------------------
    makeWhiteOnMouseDown();

    countClicks();

    getColorBackOnMouseUp();

    // Function declaration------------------------------------

    // Makes the play-field using 2 loops
    function initializeField (){
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
        for (let i = 0; i < 100; i++) {
            var colorArray = getRandomColorNumberInArray()
            $('.square')[i].style.background="rgb("+colorArray[0]+","+colorArray[1]+","+colorArray[2]+")";
        }
    }
    function makeWhiteOnMouseDown(){
        $('body').on("mousedown",squareBlockClass,function () {
            // switch colors
            bgcolor = $(this).css("background-color");
            $(this).css("background-color","white");

        })
    };

    function countClicks() {
        body.on('click',squareBlockClass,function () {
            clickCounter++;
            if(clickCounter == 1){

                responseText.html("<p>Your first click</p>");
            }else
            {
                responseText.html("<p>"+clickCounter+" : click\'s</p>");
            }
        })
    }

    function getColorBackOnMouseUp() {
        $('body').on("mouseup",squareBlockClass,function () {
            // Set color Back
            $(this).css("background-color",bgcolor)
        })
    }
    //Makes an array with 3 random numbers who ara a multiple off 50 between 0 and 300.
    function getRandomColorNumberInArray() {
        var array = [];
        for (let i = 0; i <3 ; i++) {
            array.push(((Math.floor(Math.random() * 5))+1) * 50);
        }
        return array;
    }
})