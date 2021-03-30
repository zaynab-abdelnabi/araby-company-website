import '@laylazi/bootstrap-rtl/dist/js/bootstrap.min.js';
import '@laylazi/bootstrap-rtl/dist/css/bootstrap-rtl.min.css';
import 'jquery/dist/jquery.min.js';
import 'popper.js/dist/popper.min.js';
import '../sass/style.scss';
import '@fortawesome/fontawesome-free/js/all';

$(function(){
    $('.thumbnail1').hover(function(){
        $(this).find('.project-category').hide();
        $(this).find('.caption1').slideDown(250);
    },
    function(){
        $(this).find('.caption1').slideUp(250);
        $(this).find('.project-category').show();
    }
    );
});
$('.year').html(new Date().getFullYear());