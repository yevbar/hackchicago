$(document).ready( function() {
  var clientHeight = $(window).height();
  $('#parallax').css('height', clientHeight);
  $('.backrow').css('height', clientHeight);
  $('.middlerow').css('height', clientHeight);
  $('.frontrow').css('height', clientHeight);
  /*$('.bottom').css('margin-top', clientHeight);*/

  /*$(window).resize(function() {
    clientHeight = $(window).height();
    $('#parallax').css('height', clientHeight);
    $('.backrow').css('height', clientHeight);
    $('.middlerow').css('height', clientHeight);
    $('.frontrow').css('height', clientHeight);
    console.log(clientHeight);
  });*/

  var clientWidth = $(window).width();
  console.log(clientWidth);

  if (clientWidth >= 880) {
    var divWidth1 = parseFloat($('#tleft').css('width'));
    var divWidth2 = parseFloat($('#bright').css('width'));
    var imgHeight = parseFloat($('#bround1').css('height'));
    $('#tleft').css('width', divWidth1);
    $('#bright').css('width', divWidth2);
    $('#tleft').css('height', imgHeight);
    $('#bright').css('height', imgHeight);
    var imgHeight2 = (imgHeight) / 2;
    $('#spic1').css('top', imgHeight2);
    $('#spic2').css('top', imgHeight2);

    $(window).resize(function() {
      var divWidth1 = parseFloat($('#tleft').css('width'));
      var divWidth2 = parseFloat($('#bright').css('width'));
      var imgHeight = parseFloat($('#bround1').css('height'));
      $('#tleft').css('width', divWidth1);
      $('#bright').css('width', divWidth2);
      $('#tleft').css('height', imgHeight);
      $('#bright').css('height', imgHeight);
      var imgHeight2 = (imgHeight) / 2;
      $('#spic1').css('top', imgHeight2);
      $('#spic2').css('top', imgHeight2);
    });
  }

  checkRef(Cookies.get('ref'));

});

function toggleSignup(ref) {

  if(Cookies.get('hasSignedUp') !== null) {
    if (ref)
      $('#signup-frame').attr('src', 'apply.html?ref=' + ref);
    else
      $('#signup-frame').attr('src', 'apply.html');

    $('.splitscreen').toggleClass('show');
    $('.split-overlay').toggleClass('show');
    $('body').toggleClass('noscroll');
    $('body').toggleClass('yieldFocus');
  } else {
    finishSignupFlow();
  }

}

$('.yieldFocus').click(function(){
  $('#signup-frame').focus();
});

//Get Parameter
function getParam(name, url) {
  if (!url) url = window.location.href;
  name = name.replace(/[\[\]]/g, "\\$&");
  var regex = new RegExp("[?&]" + name + "(=([^&#]*)|&|#|$)"),
  results = regex.exec(url);
  if (!results) return null;
  if (!results[2]) return '';
  return decodeURIComponent(results[2].replace(/\+/g, " "));
}

function checkRef(ref) {
  if (ref != null && ref != "" && ref != "null")
    fillRef(ref);
  else {
    Cookies.set('ref', fillRef(getParam("ref")), { expires: 180 })
  }
}

function fillRef(code) {

  if (code != "" && code != null) {
    $("#referralCode").html("Referred by " + code);
    $(".signup").attr('onclick', 'toggleSignup("'+ code +'")')
  }

  return code;
}

function finishSignupFlow() {

  $('#signup-frame').attr('src', 'apply.html');
  $('.splitscreen').toggleClass('show');
  $('.split-overlay').toggleClass('show');
  $('body').toggleClass('noscroll');
  $('body').toggleClass('yieldFocus');

  $('.signup').hide();
  $('#signup-success').show();

}
