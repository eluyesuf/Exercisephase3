// if ($(window).width() <= 768){	
//     $('.footer-links-wrapper').addClass("someClass");
// }else{
//    $('.footer-links-wrapper').removeClass("someClass");
// }
// $(window).on('resize', function(){
//    if ($(window).width() <= 768){	
//        $('.footer-links-wrapper').addClass("someClass");
//        }else{
//         $('.footer-links-wrapper').removeClass("someClass");
//        $('.footer-links-wrapper ul').show();
//        }	
//    });
   
//    $(document).on("click", ".someClass h3", function(){
//     $(this).next('ul').slideToggle();
//             $(this).toggleClass("expanded");
//    });
 
  //  function myFunction(x) {
  //   x.classList.toggle("change");
  // }





// ***************************************
// ******************************************

// // try2
if ($(window).width() <= 768){	
  $('.footer-links-wrapper').addClass("someClass");
}else{
  $('.footer-links-wrapper').removeClass("someClass");
}
$(window).on('resize', function(){
  if ($(window).width() <= 768){	
      $('.footer-links-wrapper').addClass("someClass");
  }else{
      $('.footer-links-wrapper').removeClass("someClass");
      $('.footer-links-wrapper ul').show();
  }	
});
// Footer collapse functionality 
$(document).on("click", ".someClass h3", function(){
  $(this).next('ul').slideToggle();
  $(this).toggleClass("expanded");
  $(this).toggleClass("aa");
//   // change + x
});





// $(window).on('resize', function () {
//   $(window).on('resize', function () {
//      if ($(window).width() <= 767) {
//       $('.footer-links-wrapper').addClass("mekdi");
//     // $('.footer-links-wrapper ul').slideUp('fast');
//     }
//     else {
//       // $('.footer-links-wrapper ul').slideDown('fast');
//       $('.footer-links-wrapper').removeClass("mekdi");
//       }
//   });
// $(document).ready(function() {
//   $(window).on('resize', function() {
   
//     $('.footer-links-wrapper h3').on('click',".mekdi h3", function () {
//       $(this).next('ul').slideToggle();
//       // $(this).find('h3list-item');
    
//   });
// }); 





// $(document).ready(function() {
//   $(window).on('resize', function() {
//     if ($(window).width() <= 767){	
//     $('.footer-links-wrapper ul').slideUp('fast');
//     }
//     else {
//       $('.footer-links-wrapper ul').slideDown('fast');
      
//       }
//   });
//     $('.footer-links-wrapper h3').on('click', function () {
//       $(this).next('ul').slideToggle();
         
//       // $(this).find('h3list-item');
     
    
//   });
// }); 
// https://jquery.malsup.com/cycle2/




