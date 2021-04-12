// function myScienceList() {
//   document.querySelector("#science-drop").classList.remove("show1");
//   document.querySelector("#science-drop").classList.add("show1");
//   document.querySelector("#science-drop").classList.siblings.remove("show1");
// }


// window.onclick = function(event) {
//   if (!event.target.matches('.sciencebtn')) {
//     var dropdowns = document.querySelector(".science-dropdown-content");
//     var i;
//     for (i = 0; i < dropdowns.length; i++) {
//       var openDropdown = dropdowns[i];
//       if (openDropdown.classList.contains('show1')) {
//         openDropdown.classList.remove('show1');
//       }
//     }
//   }
// }

// function mySolutionsList() {
//     document.querySelector("#solutions-drop").classList.toggle("show1");
//   }
  

//   window.onclick = function(event) {
//     if (!event.target.matches('.solutionbtn')) {
//       var dropdowns1 = document.querySelector(".solutions-dropdown-content");
//       var i;
//       for (i = 0; i < dropdowns1.length; i++) {
//         var openDropdown1 = dropdowns1[i];
//         if (openDropdown1.classList.contains('show1')) {
//           openDropdown1.classList.remove('show1');
//         }
       
//       }
//     }
//   }
  
// $(document).ready(function(){
//     $('.navbar-nav .nav-item .nav-link').click(function(){
//         $('.navbar-nav .nav-item .nav-link').removeClass("active1");
//         $(this).addClass("active1");
//     });
// });

// $(document).ready(function(){

//     var url = window.location.pathname, 
//         urlRegExp = new RegExp(url.replace(/\/$/,'') + "$"); 
//         $('.navbar-nav .nav-item .nav-link').each(function(){
//             if(urlRegExp.test(this.href.replace(/\/$/,''))){
//                 $(this).addClass('active1');
//             }
//         });

// });

// $(document).ready(function(){
//     $('.nav-item .solutions-dropdown-content li a').click(function(){
//         $('.nav-item .solutions-dropdown-content li a').removeClass("active2");
//         $(this).addClass("active2");
//     });
// });

// $(document).ready(function(){

//     var url = window.location.pathname, 
//         urlRegExp = new RegExp(url.replace(/\/$/,'') + "$"); 
//         $('.nav-item .solutions-dropdown-content li a').each(function(){
//             if(urlRegExp.test(this.href.replace(/\/$/,''))){
//                 $(this).addClass('active2');
//             }
//         });

// });
// $(document).ready(function(){
//     $('.nav-item .science-dropdown-content li a').click(function(){
//         $('.nav-item .science-dropdown-content li a').removeClass("active2");
//         $(this).addClass("active2");
//     });
// });
// $(document).ready(function(){

//     var url = window.location.pathname, 
//         urlRegExp = new RegExp(url.replace(/\/$/,'') + "$"); 
//         $('.nav-item .science-dropdown-content li a').each(function(){
//             if(urlRegExp.test(this.href.replace(/\/$/,''))){
//                 $(this).addClass('active2');
//             }
//         });

// });

// $(document).ready(function(){
//     $('.science-dropdown-content li a').click(function(){
//         $(this).parent().parent().parent().find('.nav-link').addClass("active1");
//     });
// });
// $(document).ready(function(){
//     $('.solutions-dropdown-content li a').click(function(){
//         $(this).parent().parent().parent().find('.nav-link').addClass("active1");
//     });
// });







