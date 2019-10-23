$('.claim-button').click(function() {
  if ($('#First_name').val() == '') {
    $("#first-name").removeClass("form-fields");
    $("#first-name").addClass("form-fields-onclick");
    $("#First_name").addClass("input-buttons");
    $("#First_name").attr("placeholder", "");
  }else{
    $("#first-name").addClass("form-fields");
    $("#First_name").removeClass("input-buttons");
  }

  if ($('#last_name').val() == '') {
    $("#last-name").removeClass("form-fields");
    $("#last-name").addClass("form-fields-onclick");
    $("#last_name").addClass("input-buttons");
    $("#last_name").attr("placeholder", "");
  }else{
    $("#last-name").addClass("form-fields");
    $("#last_name").removeClass("input-buttons");
  }

  if ($('#_email').val() == '') {
    $("#email").removeClass("form-fields");
    $("#email").addClass("form-fields-onclick");
    $("#_email").addClass("input-buttons");
    $("#_email").attr("placeholder", "email@example.com");

  }else{
    $("#email").addClass("form-fields");
    $("#_email").removeClass("input-buttons");
  }

  if ($('#_password').val() == '') {
    $("#password").removeClass("form-fields");
    $("#password").addClass("form-fields-onclick");
    $("#_password").addClass("input-buttons");
    $("#_password").attr("placeholder", "");
  }else{
    $("#password").addClass("form-fields");
    $("#_password").removeClass("input-buttons");
  }


});
