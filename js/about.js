// Typing Effect JS //

$(document).ready(function () {
  var typed = new Typed('.typing', {
    strings: ['STRI', 'STRI', 'STRI', 'STRI', 'STRI'],
    typeSpeed: 100,
    backSpeed: 60,
    loop: true,
  });

  var typed = new Typed('.typing-2', {
    strings: ['STRI', 'STRI', 'STRI', 'STRI', 'STRI'],
    typeSpeed: 100,
    backSpeed: 60,
    loop: true,
  });
});

// Back To Top Button //

$(document).ready(function () {
  $(window).scroll(function () {
    if ($(this).scrollTop() > 40) {
      $('#topBtn').fadeIn();
    } else {
      $('#topBtn').fadeOut();
    }
  });

  $('#topBtn').click(function () {
    $('html ,body').animate({ scrollTop: 0 }, 800);
  });
});
