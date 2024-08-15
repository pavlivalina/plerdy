$(document).ready(function() {
  const input = $("#mobile_code")[0];
  window.intlTelInput(input, {
    utilsScript: "https://cdn.jsdelivr.net/npm/intl-tel-input@23.8.1/build/js/utils.js",
    useFullscreenPopup: false,
    initialCountry: 'UA',
    separateDialCode: true,
  });
});
