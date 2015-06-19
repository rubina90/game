/**
 * Created by Waldek on 19/06/2015.
 */

$(document).ready(function() {
    setInterval(function() {
        $('.wall').each(function increase() {

            var old_top = (parseFloat($(this).css('top')));
            if(old_top >= $(this).parent().height()) {
                $(this).remove();
            }
            else{
                $(this).css('top', (old_top + 1) + 'px');
                if(checkIfCollision($(this)))
                {
                    $(this).remove();
                }
            }

        });
    }, 50);

    function checkIfCollision(elem) {
        var car = $('#car');
        var carPosition = car.position();
        var game = $('#game');
        return (parseFloat((elem.css('top')) + elem.width()) >= (game.height()- car.height())
                &&
                parseFloat(elem.css('left')) >= parseFloat(car.css('left'))
                &&
                parseFloat(elem.css('left')) <= (parseFloat(car.css('left'))+car.width()));

    }

    function shoot(){
        var $bullet = $("<div class='bullet'></div>");
        $('#game').append($bullet);

        $('.bullet').css('top', $('#game').height() - $('#car').height());
        $('.bullet').css('left', parseFloat($('#car').css('left')));
        moveBullet($bullet);
    }

    function moveBullet(elem) {
        var refreshIntervalId = setInterval(function() {
                var old_top = (parseFloat(elem.css('top')));
                if(old_top <= 0) {
                    elem.remove();
                    clearInterval(refreshIntervalId);
                }
                else {
                    elem.css('top', (old_top - 3) + 'px');
                }
        }, 50);
    }


    $(document).keydown(function(e) {
        switch(e.which) {
            case 37: // left
            {
                var car = $('#car');
                var left = parseFloat(car.css('left'));
                car.css('left', left - 2);
            }
                break;

            case 32:
            {
                shoot();
            }// up
                break;

            case 39: // right
            {
                {
                    var car = $('#car');
                    var left = parseFloat(car.css('left'));
                    car.css('left', left + 2);
                }
            }
                break;

            case 40: // down
                break;

            default: return; // exit this handler for other keys
        }
        e.preventDefault(); // prevent the default action (scroll / move caret)
    });
});