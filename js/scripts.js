// console.log('You Got me!! Partner!!');

/*-------------------------------------
| Clouds Animation
-------------------------------------*/
function cloud_animate() {
    $('.clouds')
        .css({'background-position-x':'0px'})
        .animate({'background-position-x':'-1300px'}, 10000, 'linear', cloud_animate); //keeps it going
}

// function call - starts the party
// cloud_animate();

/*-------------------------------------
| Set The Stage :: Slide 1
-------------------------------------*/
function set_the_stage() {
    $('.bruce-lee.bruce-lee').stop().css({'right':'-300px'});
    $('.michael-jackson.michael-jackson').stop().css({'right':'-260px'});

    $('.bruce-lee.heavy-bag').stop().css({'left':'-200px'});
    $('.michael-jackson.mic-stand').stop().css({'bottom':'-210px','left': '400px'});
}

set_the_stage();

// /*-------------------------------------
// | Slide 2 :: Bruce Lee
// -------------------------------------*/
function slide2() {
    $('.bruce-lee.heavy-bag').animate({ 'left': '350px' }, 1500);
    $('.bruce-lee.bruce-lee').animate({'right':'450px'}, 250);
    
}

// slide2();

/*-------------------------------------
| Slide 3 :: Michael Jackson
-------------------------------------*/
function slide3() {
    $('.bruce-lee.heavy-bag').animate({'left': '-200px' }, 1000);
    $('.bruce-lee.bruce-lee').animate({'left':'-265px'}, 1000);
    

    $('.michael-jackson.mic-stand').animate({'bottom': '100px', 'bottom':'0px', 'left': '400px'}, 1500);
    $('.michael-jackson.michael-jackson').animate({'right':'400px'}, 3500);
    
}

/*-------------------------------------
| Slide 4 :: Muhammad Ali
-------------------------------------*/

/*-------------------------------------
| Arrow Buttons
-------------------------------------*/
// Default
var currentSlide = 1;

// add 1
function right_arrow_click() {
    currentSlide = currentSlide + 1;
    if (currentSlide == 5) {
        currentSlide = 4;
    }
    console.log(currentSlide);

    move_to_slide();
}
$('.arrow.right').click(right_arrow_click);

// subtract 1
function left_arrow_click() {
    currentSlide = currentSlide - 1;
    if (currentSlide == 0) {
        currentSlide = 1;
    }
    console.log(currentSlide);

    set_the_stage();

    move_to_slide();
}
$('.arrow.left').click(left_arrow_click);


/*-------------------------------------
| Move to Chosen Slide
-------------------------------------*/
function move_to_slide() {
    if (currentSlide == 1) {
        set_the_stage();
    } else if (currentSlide == 2) {
        slide2();
    } else if (currentSlide == 3) {
        slide3();
    } else if (currentSlide == 4) {
        slide4();
    }
}