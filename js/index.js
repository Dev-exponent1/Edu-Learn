$(document).ready(function(){
    $('#icon').click(function(){
        $('.nav_link').toggleClass('show'); 
    })
          
   
    $('.students').each(function () {
        $(this).prop('Counter',0).animate({
        Counter: $(this).text()
        }, {
        duration: 10500,
        easing: 'swing',
        step: function (now) {
        $(this).text(Math.ceil(now));
        }
        });
        });


        
    $('.certification').each(function () {
        $(this).prop('Counter',0).animate({
        Counter: $(this).text()
        }, {
        duration: 10200,
        easing: 'swing',
        step: function (now) {
        $(this).text(Math.ceil(now));
        }
        });
        });


        
    $('.countries').each(function () {
        $(this).prop('Counter',0).animate({
        Counter: $(this).text()
        }, {
        duration: 11000,
        easing: 'swing',
        step: function (now) {
        $(this).text(Math.ceil(now));
        }
        });
        });


        $('.award').each(function () {
            $(this).prop('Counter',0).animate({
            Counter: $(this).text()
            }, {
            duration: 11200,
            easing: 'swing',
            step: function (now) {
            $(this).text(Math.ceil(now));
            }
            });
            });


        
    

});



let newsLetter = document.getElementById('newsletter');
let newsButton = document.getElementById('newsbutton');

newsButton.onclick = function() {
    var filter = /^([a-zA-Z0-9_\.\-])+\@(([a-zA-Z0-9\-])+\.)+([a-zA-Z0-9]{2,4})+$/;
    if (!filter.test(newsLetter.value)) {
        alert('Please provide a valid email address.');
        newsLetter.focus;
        return false;
     }else{
        alert('Thansks for signing up. We will keep you posted about the latest update, courses and special offers.');
        document.location.reload(true);
        window.scrollTo(0, 0);
        return true;
     }    
}