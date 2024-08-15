$(document).ready(function() {
  'use strict';

  $('.needs-validation').each(function() {
    $(this).on('submit', function(event) {
      if (!this.checkValidity()) {
        event.preventDefault();
        event.stopPropagation();
      }

      $(this).addClass('was-validated');
    });
  });
});
