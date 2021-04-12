  $(".game-device-slider").slick({
      	dots:false,
      	arrows:true,
  		infinite: true,
  		autoplay:true,
  		slidesToShow: 3,
  		slidesToScroll: 1,
  		variableWidth: true,
  		centerMode: true,
  		responsive: [
			    {
			      breakpoint: 1024,
			      settings: {
			        slidesToShow: 2,
			        slidesToScroll: 2,
			        infinite: true,
			        centerMode: true,
					dots: false
			      }
			    },
			    {
			      breakpoint: 768,
			      settings: {
			        slidesToShow: 1,
			        slidesToScroll: 1,
			        centerMode:true,
			        dots: false,
			        infinite: true
			      }
			    }
			    // {
			    // 	breakpoint:576,
			    // 	settings: {
			    // 		slidesToShow:1,
			    // 		slidesToScroll: 1,
			    // 		variableWidth: false,
			    		
			    // 		centerMode: true,
			    // 		infinite: true,
			    // 		adaptiveWidth: true
			    // 	}
			    // }
			 ]
  	});

    $(".game-device-slider-mobile").slick({
      	dots:false,
      	arrows:true,
  		infinite: true,
  		autoplay:true,
  		// slidesToShow: 3,
  		slidesToScroll: 1,
  		variableWidth: true,
  		centerMode: true,
  		cssEase: 'linear',
  		autoplaySpeed: 6000,
  		speed: 600
  	});

    $(".platform-image-slider").slick({
        dots:false,
        arrows:true,
        infinite: true,
        autoplay:true,
        slidesToShow: 2,
        slidesToScroll: 2,
        variableWidth: true,
        centerMode: true,
        cssEase: 'linear',
        autoplaySpeed: 6000,
        speed: 600
    }); 
  	
  	$(".list-slider").slick({
      	dots:false,
      	arrows:true,
  		infinite: true,
  		autoplay:true,
  		slidesToShow: 2,
  		slidesToScroll: 2,
  		variableWidth: true,
  		centerMode: true,
  		cssEase: 'linear',
  		autoplaySpeed: 6000,
  		speed: 600
  	});
    $(".clients-image-slider").slick({
        dots:false,
        arrows:true,
      infinite: true,
      autoplay:true,
      slidesToShow: 1,
      slidesToScroll: 2,
      variableWidth: true,
      centerMode: true,
      cssEase: 'linear',
      autoplaySpeed: 6000,
      speed: 600
    });
    $(".platform-image-slider1").slick({
        dots:true,
        arrows:true,
        infinite: true,
        autoplay:true,
        slidesToShow: 1,
        slidesToScroll: 1,
        // variableWidth: true,
        nextArrow: '<i class="fa fa-chevron-right right-icon" aria-hidden="true"></i>',
        prevArrow: '<i class="fa fa-chevron-left left-icon" aria-hidden="true"></i>',
        centerMode: true,
        cssEase: 'linear',
        autoplaySpeed: 6000,
        speed: 600,
        responsive: [
          {
            breakpoint: 992,
            settings: {
              dots:true,
              arrows:true,
              infinite: true,
              autoplay:true,
              slidesToShow: 1,
              slidesToScroll: 1,
              variableWidth: true,
              centerMode: true,
              cssEase: 'linear',
              autoplaySpeed: 6000,
              speed: 600,
            }
          }, 

        ]
    }); 
	$(".slider-team").slick({
		dots:false,
        arrows:true,
      infinite: true,
      autoplay:true,
      slidesToShow: 3,
      slidesToScroll: 1,
    //   variableWidth: true,
    //   centerMode: true,
		nextArrow: '<i class="fa fa-chevron-right right-icon" aria-hidden="true"></i>',
		prevArrow: '<i class="fa fa-chevron-left left-icon" aria-hidden="true"></i>',
      cssEase: 'linear',
      autoplaySpeed: 6000,
      speed: 600,
      responsive: [
        {
          breakpoint: 992,
          settings: {
            slidesToShow: 2,
            slidesToScroll: 1,
          }
        }, 
        {
          breakpoint: 768,
          settings: {
            slidesToShow: 1,
            slidesToScroll: 1,
          }
        }, 

      ]
       
    }); 


	


 

  
