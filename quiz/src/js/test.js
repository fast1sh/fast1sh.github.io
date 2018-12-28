$(document).ready(function () {
  var testHeight = $(window).height();
  var mobHeight = testHeight - 80;
  $('.test__body').css({
    height: testHeight
  });

  $('.next-btn').click(function () {
    var index = $(this).data('index');
    $('.test__body[data-index="' + index + '"]').addClass('active').siblings().removeClass('active');
  });

  $('.with-scroll').mCustomScrollbar({
    axis: "y",
    contentTouchScroll: true,
    documentTouchScroll: true
  });

  $('.answer').click(function () {
    if ($(this).hasClass('checked')) {
      $(this).removeClass('checked');
    } else {
      $('.answer').removeClass('checked');
      $(this).addClass('checked')
    }

    $(this).closest('.test__body').find('.next-btn').removeAttr('disabled')
  });

  $('.checkbox').click(function () {
    if ($(this).hasClass('checked')) {
      $(this).removeClass('checked');
    } else {
      $(this).addClass('checked')
    }

    $(this).closest('.test__body').find('.next-btn').removeAttr('disabled')
  });

  $('.ans-1').click(function () {
    var text = $(this).data('text');
    $('.ans1').val(text);
  });
  $('.ans-2').click(function () {
    var text = $(this).data('text');
    $('.ans2').val(text);
  });
  $('.ans-3').click(function () {
    var text = $(this).data('text');
    $('.ans3').val(text);
  });
  $('.ans-4').click(function () {
    var text = $(this).data('text');
    $('.ans4').val(text);
  });
  $('.ans-5').click(function () {
    var check_4 = $(this).data('check');
    if ($(this).hasClass('checked')) {
      $('.ans5[data-check="' + check_4 + '"]').attr('checked', 'checked');
    } else {
      $('.ans5[data-check="' + check_4 + '"]').removeAttr('checked')
    }
  });
  $('.ans-6').click(function () {
    var check_1 = $(this).data('check1');
    if ($(this).hasClass('checked')) {
      $('.ans6[data-check1="' + check_1 + '"]').attr('checked', 'checked');
    } else {
      $('.ans6[data-check1="' + check_1 + '"]').removeAttr('checked')
    }
  });
  $('.ans-7').click(function () {
    var check_2 = $(this).data('check2');
    if ($(this).hasClass('checked')) {
      $('.ans7[data-check2="' + check_2 + '"]').attr('checked', 'checked');
    } else {
      $('.ans7[data-check2="' + check_2 + '"]').removeAttr('checked')
    }
  });
  $('.ans-8').click(function () {
    var check_3 = $(this).data('check3');
    if ($(this).hasClass('checked')) {
      $('.ans8[data-check3="' + check_3 + '"]').attr('checked', 'checked');
    } else {
      $('.ans8[data-check3="' + check_3 + '"]').removeAttr('checked')
    }
  });
  $('.ans-9').click(function () {
    var text = $(this).data('text');
    $('.ans9').val(text);
  });
  $('.ans-10').click(function () {
    var text = $(this).data('text');
    $('.ans10').val(text);
  });
  $('.ans-11').click(function () {
    var text = $(this).data('text');
    $('.ans11').val(text);
  });

  $(document).on('click', '.submit', function (event) {
    var form = $(this).closest('form');
    if (form.valid()) {
      $.ajax({
        type: 'POST',
        url: '/test/mail.php',
        //data: JSON.stringify(parameters),
        data: form.serialize(),
        success: function (data) {
          if (typeof yaCounter46825794 != 'undefined') {
            yaCounter46825794.reachGoal('12');
          };
          form.html('<h3>Спасибо за заявку. Наши менеджеры свяжутся с Вами в ближайшее время</h3>');
        }
      });
    }
    return false;
  });

  if (screen.width <= 768) {
    $('.question-right').css({
      height: mobHeight
    })
  }

  jQuery.validator.setDefaults({
    debug: true,
    success: "valid"
  });
  $('form').validate({
    rules: {
      phone: {
        required: true,
        minlength: 11,
        maxlength: 11
      }
    }
  });

  $('.last-phone').change(function () {
    if ($(this).hasClass('error')) {
      $('.submit').attr('disabled', 'disabled')
    } else {
      $('.submit').removeAttr('disabled');
    }
  })

});





$(document).ready(function () {

  $('.go_home').click(function (event) {
    event.preventDefault();
    $('.container').css('display', 'none')
    $('#home').css('display', 'block')
  });

  $('.go_a1').click(function (event) {
    event.preventDefault();
    $('.container').css('display', 'none')
    $('#a1').css('display', 'block')
  });

  $('.go_a-add').click(function (event) {
    event.preventDefault();
    $('.container').css('display', 'none')
    $('#a-add').css('display', 'block')
  });

  $('.go_a2').click(function (event) {
    event.preventDefault();
    $('.container').css('display', 'none')
    $('#a2').css('display', 'block')
  });

  $('.go_a3').click(function (event) {
    event.preventDefault();
    $('.container').css('display', 'none')
    $('#a3').css('display', 'block')
  });


  $('.go_a41').click(function (event) {
    event.preventDefault();
    $('.container').css('display', 'none')
    $('#a41').css('display', 'block')
  });
  $('.go_a42').click(function (event) {
    event.preventDefault();
    $('.container').css('display', 'none')
    $('#a42').css('display', 'block')
  });
  $('.go_a43').click(function (event) {
    event.preventDefault();
    $('.container').css('display', 'none')
    $('#a43').css('display', 'block')
  });
  $('.go_a44').click(function (event) {
    event.preventDefault();
    $('.container').css('display', 'none')
    $('#a44').css('display', 'block')
  });

  $('.go_a51').click(function (event) {
    event.preventDefault();
    $('.container').css('display', 'none')
    $('#a51').css('display', 'block')
  });

  $('.go_a53').click(function (event) {
    event.preventDefault();
    $('.container').css('display', 'none')
    $('#a53').css('display', 'block')
  });

  $('.go_a54').click(function (event) {
    event.preventDefault();
    $('.container').css('display', 'none')
    $('#a54').css('display', 'block')
  });

  $('.go_a61').click(function (event) {
    event.preventDefault();
    $('.container').css('display', 'none')
    $('#a61').css('display', 'block')
  });

  $('.go_a63').click(function (event) {
    event.preventDefault();
    $('.container').css('display', 'none')
    $('#a63').css('display', 'block')
  });

  $('.go_a64').click(function (event) {
    event.preventDefault();
    $('.container').css('display', 'none')
    $('#a64').css('display', 'block')
  });

  $('.go_a71').click(function (event) {
    event.preventDefault();
    $('.container').css('display', 'none')
    $('#a71').css('display', 'block')
  });

  $('.go_a73').click(function (event) {
    event.preventDefault();
    $('.container').css('display', 'none')
    $('#a73').css('display', 'block')
  });

  $('.go_a74').click(function (event) {
    event.preventDefault();
    $('.container').css('display', 'none')
    $('#a74').css('display', 'block')
  });

  $('.go_finish').click(function (event) {
    event.preventDefault();
    $('.container').css('display', 'none')
    $('#finish').css('display', 'block')
  });

  $('.ans1').click(function () {
    var index = $(this).data('index');
    $('.ans_1').val(index);
  });
  $('.ans2').click(function () {
    var index = $(this).data('index');
    ; $('.ans_2').val(index);
  })
  $('.ans3').click(function () {
    var index = $(this).data('index');
    $('.ans_3').val(index);
  });
  $('.ans4').click(function () {
    var index = $(this).data('index');
    $('.ans_4').val(index);
  });
  $('.ans5').click(function () {
    var index = $(this).data('index');
    $('.ans_5').val(index);
  });
  $('.ans6').click(function () {
    var index = $(this).data('index');
    $('.ans_6').val(index);
  });
  $('.ans7').click(function () {
    var index = $(this).data('index');
    $('.ans_7').val(index);
  });
  $('.ans8').click(function () {
    var index = $(this).data('index');
    $('.ans_8').val(index);
  });
  $('.ans9').click(function () {
    var index = $(this).data('index');
    $('.ans_9').val(index);
  });
  $('.ans01').click(function () {
    var index = $(this).data('index');
    $('.ans_10').val(index);
  });
  $('.ans11').click(function () {
    var index = $(this).data('index');
    $('.ans_11').val(index);
  });
  $('.ans12').click(function () {
    var index = $(this).data('index');
    $('.ans_12').val(index);
  });
  $('.ans13').click(function () {
    var index = $(this).data('index');
    $('.ans_13').val(index);
  });
  $('.ans14').click(function () {
    var index = $(this).data('index');
    $('.ans_14').val(index);
  });
  $('.ans15').click(function () {
    var index = $(this).data('index');
    $('.ans_15').val(index);
  });
  $('.ans16').click(function () {
    var index = $(this).data('index');
    $('.ans_16').val(index);
  });
  $('.ans17').click(function () {
    var index = $(this).data('index');
    $('.ans_17').val(index);
  });

  $('.ans1-rem').click(function () {
    $('.ans_1').val('');
  });
  $('.ans2-rem').click(function () {
    $('.ans_2').val('');
  });
  $('.ans3-rem').click(function () {
    $('.ans_3').val('');
  });
  $('.ans4-rem').click(function () {
    $('.ans_4').val('');
  });
  $('.ans5-rem').click(function () {
    $('.ans_5').val('');
  });
  $('.ans6-rem').click(function () {
    $('.ans_6').val('');
  });
  $('.ans7-rem').click(function () {
    $('.ans_7').val('');
  });
  $('.ans8-rem').click(function () {
    $('.ans_8').val('');
  });
  $('.ans9-rem').click(function () {
    $('.ans_9').val('');
  });
  $('.ans10-rem').click(function () {
    $('.ans_10').val('');
  });
  $('.ans11-rem').click(function () {
    $('.ans_11').val('');
  });
  $('.ans12-rem').click(function () {
    $('.ans_12').val('');
  });
  $('.ans13-rem').click(function () {
    $('.ans_13').val('');
  })
    ; $('.ans14-rem').click(function () {
      $('.ans_14').val('');
    });
  $('.ans15-rem').click(function () {
    $('.ans_15').val('');
  });
  $('.ans16-rem').click(function () {
    $('.ans_16').val('');
  });
  $('.ans17-rem').click(function () {
    $('.ans_17').val('');
  });

  $(".phone").inputmask({ "mask": "+7(999)999-99-99" });


  /*$(document).on('click', '.submit', function (event) {
      var form = $(this).closest('form');
      if (form.valid()) {
          $.ajax({
              type: 'POST',
              url: '/test/mail.php',
              //data: JSON.stringify(parameters),
              data: form.serialize(),
              success: function (data) {
                  form.html('<h3>Наши менеджеры <br>скоро свяжутся с вами</h3>');
                  if(typeof yaCounter46244571 != 'undefined') {
                      yaCounter46244571.reachGoal('zayavka');
                  }
              }
          });
      }
      return false;
  });*/

});