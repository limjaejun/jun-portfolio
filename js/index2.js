//scrollTop value
$(document).scrollTop();
$(window).scroll(function () {
	 var scrollValue = $(document).scrollTop(); 
	 console.log(scrollValue);});

//scrollTop animation
$(function () {
	$(window).scroll(function () {
		var ws = $(this).scrollTop();
		if (ws > 200) {
			$('.se2_about > h1').css("transform", "translateX(0px)").css("opacity", "1");
		}

		if (ws > 200) {
			$('.se2_about > .introduce').css("transform", "translateX(0px)").css("opacity", "1");
		}

		if (ws > 800) {
			$('.me_img').css("transform", "translateX(0px)").css("opacity", "1");
		}

		if (ws > 800) {
			$('.font_line').css("transform", "translateX(0px)").css("opacity", "1");
		}

		if (ws > 900) {
			$('.name').css("transform", "translateX(0px)").css("opacity", "1");
		}

		if (ws > 1700) {
			$('.skill').css("transform", "translateY(0px)").css("opacity","1");
		}

    	if (ws > 2400) {
			$('.se3_works > h1').css("opacity", "1");
		}
	});
});


//hover preview
$(function () {
	$('.port_img').mouseover(function () {
		$('.portfoLio').stop().animate({ scrollTop: 11282 }, 25000);
	}).mouseleave(function () {
		$('.portfoLio').stop().animate({ scrollTop: 0 }, 3000);
	});
});

//mob preview
$(function(){
   $(window).scroll(function(){
      var mbscr = $(this).scrollTop();
      if(mbscr > 6700){
         $(function(){
            $('.mob_overlay').stop().animate({ scrollTop: 11282}, 30000);   
         });            
      } 
   });

   $('.mob_overlay').mouseover(function(){
      $('.mob_overlay').stop().animate({ scrollTop: 0}, 10000);
   }).mouseout(function(){
      $('.mob_overlay').stop().animate({ scrollTop: 11282}, 30000);
   });
});

