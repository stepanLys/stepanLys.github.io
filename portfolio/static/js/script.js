$(document).ready(function(){
     $("#mnu").on("click","a", function (event) {
        // відміняє стандартну подію по силці
        event.preventDefault();

        //забирає вміст href
        var id  = $(this).attr('href'),

        //висота від блоку до блоку
            top = $(id).offset().top;

        $('body,html').animate({scrollTop: top}, 1000);
    });

    $('.chart').easyPieChart({
        easing: 'easeOutBounce',
        barColor: '#2c3e50',
        size: '152',
        scaleColor: 'transparent',
        trackColor: '#fff',
        lineWidth: '7',
        lineCap: 'butt',
        onStep: function(from, to, percent) {
            $(this.el).find('.percent').text(Math.round(percent));
        }
    });
});


// $(function() {
//
//
//
//
// });
