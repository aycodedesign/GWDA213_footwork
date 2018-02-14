/*-------------------------------------
| Set The Stage :: Slide 1
-------------------------------------*/
function set_the_stage() {
    $('.start').stop().css({'top':'0px'});

    $('.bl.dojo').stop().css({'bottom':'-600px'});
    $('.bl.bruce-lee').stop().css({'left':'-260px'});
    $('.bl.heavy-bag').stop().css({ 'right': '-185px' });
    $('.bl.yin-yang').stop().css({ 'top': '-210px' });

    $('.mj.stage').stop().css({ 'top': '-700px' });
    $('.mj.michael-jackson').stop().css({'right':'-260px'});
    $('.mj.mic-stand').stop().css({ 'bottom': '-210px', 'left': '400px' });
    $('.mj.disco-ball').stop().css({ 'top': '-270px' });

    $('.ma.boxing-ring').stop().css({'bottom':'-600px'});
    $('.ma.muhammad-ali').stop().css({ 'right': '-420px' });
    $('.ma.speed-bag').stop().css({ 'top': '-210px' });
    $('.ma.fight-bell').stop().css({ 'top': '-235px' });
}

set_the_stage();

/*-------------------------------------
| Slide 2 :: Bruce Lee
-------------------------------------*/
function slide2() {
    $('.start').stop().css({ 'top': '-800px' });

    $('.bl.dojo').animate({ 'bottom': '0px' }, 500);
    $('.bl.bruce-lee').animate({ 'left': '150px', 'top':'180px' }, 700);
    $('.bl.heavy-bag').animate({ 'right': '200px' }, 1000);
    $('.bl.yin-yang').animate({ 'top': '-5px' }, 2000);

    $('.mj.stage').animate({ 'top': '-700px' }, 500);
    $('.mj.michael-jackson').animate({ 'right': '-400px' }, 500);
    $('.mj.mic-stand').animate({ 'bottom': '-210px' }, 500);
    $('.mj.disco-ball').animate({ 'top': '-270px' }, 500);
}

// slide2();

/*-------------------------------------
| Slide 3 :: Michael Jackson
-------------------------------------*/
function slide3() {
    $('.start').stop().css({ 'top': '-800px' });

    $('.bl.dojo').animate({ 'bottom': '-600px' }, 500);
    $('.bl.bruce-lee').animate({ 'left': '-260px' }, 700);
    $('.bl.heavy-bag').animate({'right': '775px' }, 700);
    $('.bl.yin-yang').animate({ 'top': '-210px' }, 500);


    $('.mj.stage').animate({ 'top': '-100px' }, 500);
    $('.mj.mic-stand').animate({'bottom': '150px'}, 750);
    $('.mj.mic-stand').animate({ 'bottom': '0px' }, 250);
    $('.mj.michael-jackson').animate({'right':'400px'}, 2000);
    $('.mj.disco-ball').animate({ 'top': '-15px' }, 2000);

    $('.ma.boxing-ring').animate({ 'bottom': '-600px' }), 500;
    $('.ma.muhammad-ali').animate({ 'right': '-415px' }, 500);
    $('.ma.speed-bag').animate({ 'top': '-210px' }, 300);
    $('.ma.fight-bell').animate({ 'top': '-270px' }, 500);
}

// slide3();

/*-------------------------------------
| Slide 4 :: Muhammad Ali
-------------------------------------*/
function slide4() {
    $('.start').stop().css({ 'top': '-800px' });

    $('.mj.stage').animate({ 'top': '-700px' }, 500);
    $('.mj.michael-jackson').animate({ 'right': '800px' }, 1000); 
    $('.mj.mic-stand').animate({ 'bottom': '-210px' }, 500);
    $('.mj.disco-ball').animate({ 'top': '-270px' }, 500);

    $('.ma.boxing-ring').animate({'bottom':'0px'}, 500);
    $('.ma.muhammad-ali').animate({ 'right': '150px' }, 2000);
    $('.ma.speed-bag').animate({ 'top': '100px' }, 1000);
    $('.ma.fight-bell').animate({ 'top': '0px' }, 2000);
}

// slide4();

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