$(document).ready(function() {
  $('.faq li').click(function() {
      // Toggle the 'collapsed' class on the .plus-minus-toggle element within the clicked .faq li
      $(this).find('.plus-minus-toggle').toggleClass('collapsed');
      
      // Toggle the 'active' class on the .faq li element itself
      $(this).toggleClass('active');
  });
});
