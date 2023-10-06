<!DOCTYPE html>

<html>
<head>
    <script src="https://ajax.googleapis.com/ajax/libs/jquery/3.5.1/jquery.min.js" defer></script>
    <meta name="viewport" content="width=device-width, initial-scale=0.76, maximum-scale=5.0, minimum-scale=0.76">
    <title>WH40KTD</title>
    
    <link rel="stylesheet" href="styles.css" defer>
    
    
    
    
   
</head>

<body id="mainBody">

<canvas id="main_stage"></canvas>

<input type="range" id="colorSlider" min="0" max="1000" style="margin-top:10px;" />

    <div id="directionalPad" class="mobileHide" style="display:flex;flex-direction:column;float:left;">
        <div style="margin-left:83.5px;margin-top:10px;">
            <img src="imgs/ui/upArrow.jpg" id="up" class="ui" ontouchstart="touchMovement('up')" ontouchend="stopMovement('up')"/>
        </div>
        <div style="margin-left:15px;">
            <img src="imgs/ui/leftArrow.jpg" id="left" ontouchstart="touchMovement('left')" class="ui" ontouchend="stopMovement('left')" />
            <img src="imgs/ui/center.jpg" class="ui" />
            <img src="imgs/ui/rightArrow.jpg" id="right" ontouchstart="touchMovement('right')" class="ui" ontouchend="stopMovement('right')"/>
        </div>
        <div style="margin-left:83.5px">
            <img src="imgs/ui/downArrow.jpg" id="down" ontouchstart="touchMovement('down')" class="ui" ontouchend="stopMovement('down')" />
        </div>
    </div>
    <div id="buttons" class="mobileHide">
        <div style="margin-left:70vw;">
            <img style="border-radius:50px;" height="100px" width="100px" src="imgs/ui/buttonA.jpg" id="a" ontouchstart="touchMovement('a')" ontouchend="stopMovement('a')" />
        </div>
        <div style="margin-left:45vw;">
            <img style="border-radius:50px;" height="100px" width="100px" src="imgs/ui/buttonB.jpg" id="b" ontouchstart="touchMovement('b')" ontouchend="stopMovement('b')" />
        </div>
    </div>

</body>


<script src="functions.js" defer></script>
</html>
