// $(document).ready(function() {
//   // .scroll() creates an event when the user scrolls
//   $(window).scroll(function() { 
//     // .scrollTop() retrieves vertical position of the scroll bar for the first element in a set of matched elements
//     var scroll = $(window).scrollTop();
//     var objectSelect = $('#assessment');  
//     // .offset() retrieves current position of element relative to document
//     var objectPosition = objectSelect.offset().top;    
//     if (scroll > objectPosition) {
//       $('.nav_bar2').addClass('displayNav');
//     } else {
//       $('.nav_bar2').removeClass('displayNav');
//     }
//   });
// });


$(function() {
  
  $(window).scroll(function() { 
    var scroll = $(window).scrollTop();
     if (scroll > 330) {
      $('.navbar').addClass('scroll-nav');
    } else {
      $('.navbar').removeClass('scroll-nav');
    }
  });
});