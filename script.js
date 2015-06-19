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


    $(document).keydown(function(e) {
        switch(e.which) {
            case 37: // left
            {
                var car = $('#car');
                var left = parseFloat(car.css('left'));
                car.css('left', left - 2);
            }
                break;

            case 38: // up
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