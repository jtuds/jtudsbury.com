$(document).ready(function(){
  $('.js-slick').slick({
    dots: true,
    slidesToShow: 3,
    slidesToScroll: 3,
    lazyLoad: 'progressive',
    responsive: [
	    {
	    	breakpoint: 960,
	    	settings: {
	    		slidesToShow: 2,
	    		slidesToScroll: 2
	      	}
	    },
	    {
	    	breakpoint: 620,
	    	settings: {
				slidesToShow: 1,
				slidesToScroll: 1
	      	}
	    }
    ]
  });
});