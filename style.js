$(document).ready(function(){
    $(".play").click(function(){
        $(".play-button").toggle();
        $(".pause-button").toggle();
        $(".background-grey").toggle();
    });
    $(".check a").click(function(){
        $(".record").addClass("slideInUp");
        $(".record").show();
        $(".record-page").addClass("overflow")
    });
    $(".tab a").click(function(){
        $(".record").hide();
    });

    var h1 = $('.section1').outerHeight();
    //console.log(h1);
    var h2 = $('.section2').outerHeight();
    //console.log(h2);
    var hb = $('body').outerHeight();
    //console.log(hb);
    $('.home-page footer').outerHeight(hb - (h1 + h2));
    //var h = $('footer').outerHeight();
    //console.log(h);
    var rh = $('.record-page').height();
    console.log(rh);
    var rh1 = $('.record-page .section1').height();
    console.log(rh1);
    $('.record-page footer').outerHeight(rh - rh1 - 420);

});

function buttonUp(){
         var valux = $('.sb-search-input').val(); 
            valux = $.trim(valux).length;
            if(valux !== 0){
                $('.sb-search-submit').css('z-index','99');
            } else{
                $('.sb-search-input').val(''); 
                $('.sb-search-submit').css('z-index','-999');
            }
    }
    
    $(document).ready(function(){
        var submitIcon = $('.sb-icon-search');
        var submitInput = $('.sb-search-input');
        var searchBox = $('.sb-search');
        var isOpen = false;
        
        $(document).mouseup(function(){
            if(isOpen == true){
            submitInput.val('');
            $('.sb-search-submit').css('z-index','-999');
            submitIcon.click();
            }
        });
        
        submitIcon.mouseup(function(){
            return false;
        });
        
        searchBox.mouseup(function(){
            return false;
        });
                
        submitIcon.click(function(){
            if(isOpen == false){
                searchBox.addClass('sb-search-open');
                isOpen = true;
            } else {
                searchBox.removeClass('sb-search-open');
                isOpen = false;
            }
    });

});

$(document).ready(function(){
    $('.slider-nav').slick({
      slidesToShow: 1,
      slidesToScroll: 1,
      arrows: false,
      fade: true,
      adaptiveHeight: true,
    });
    $('.series').slick({
      slidesToShow: 3,
      slidesToScroll: 1,
      asNavFor: '.slider-for',
      dots: true,
      focusOnSelect: true,
      arrows: true,
      asNavFor: '.slider-nav',
      responsive: [
        {
          breakpoint: 992,
          settings: {
            slidesToShow: 1,
            slidesToScroll: 1,
          }
        }
      ]
    });
});

