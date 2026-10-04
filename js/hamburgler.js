// HAMBURGLERv2

function togglescroll () {
  $('body').on('touchstart', function(e){
    if ($('body').hasClass('noscroll')) {
      e.preventDefault();
    }
  });
}

$(document).ready(function () {
    togglescroll()
    $(".icon").click(function () {
        $(".mobilenav").fadeToggle(500);
        $(".top-menu").toggleClass("top-animate");
        $("body").toggleClass("noscroll");
        $(".mid-menu").toggleClass("mid-animate");
        $(".bottom-menu").toggleClass("bottom-animate");
    });
});

// PUSH ESC KEY TO EXIT

$(document).keydown(function(e) {
    if (e.keyCode == 27) {
		$(".mobilenav").fadeOut(500);
		$(".top-menu").removeClass("top-animate");
		$("body").removeClass("noscroll");
		$(".mid-menu").removeClass("mid-animate");
		$(".bottom-menu").removeClass("bottom-animate");
    }
});

// RESIZE

var width = $(window).width();
$(window).resize(function(){
	var w = $(window).width()
	if( w > 768 && width < 768 ){
        $(".mobilenav").show();
		$(".top-menu").removeClass("top-animate");
		$("body").removeClass("noscroll");
		$(".mid-menu").removeClass("mid-animate");
		$(".bottom-menu").removeClass("bottom-animate");
	}else if( w < 768 && width > 768 ){
        $(".mobilenav").hide();
	}
	width = w;
});

