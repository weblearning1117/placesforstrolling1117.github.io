$(document).ready(function () {   
  var winWid = window.innerWidth;

  //переменные ответы и вопросы

  var questions = ' .question ';
  var question_1 = ' .question1 ';
  var question_2 = ' .question2 ';
  var question_3 = ' .question3 ';
  var question_4 = ' .question4 ';
  var question_5 = ' .question5 ';
  var question_6 = ' .question6 ';
  var question_7 = ' .question7 ';
  var question_8 = ' .question8 ';
  var question_9 = ' .question9 ';
  
  var answers = ' .answer ';
  var answer_1 = '.answer1';
  var answer_2 = '.answer2';
  var answer_3 = '.answer3';
  var answer_4 = '.answer4';
  var answer_5 = '.answer5';
  var answer_6 = '.answer6';
  var answer_7 = '.answer7';
  var answer_8 = '.answer8';
  var answer_9 = '.answer9';
  var answer_10 = '.answer10';
  var answer_11 = '.answer11';
  
  var back = ' .back';
  var back_1 = ' .back1';
  var back_2 = ' .back2';
  var back_3 = ' .back3';
  var back_4 = ' .back4';
  var back_5 = ' .back5';
  var back_6 = ' .back6';
  var back_7 = ' .back7';
  var places = '.place';
  var order, many, placeWidth;
  
 var headerHeight = $('.header').outerHeight();
 var htmlHeight = $('html').outerHeight();

 var questionHeight = $(question_6).outerHeight();
 var answerHeight = $(answers).outerHeight();
 var warningHeight = $('.warning').outerHeight();
 var warningWidth = $('.warning').outerWidth();
 var footerHeight = $('.footer').outerHeight();
 var footerWidth = $('.footer').outerWidth();
 var answerHeightNoPad = $(answer_1).height();
 var answerWidth = $(answers).outerWidth();
 $(answers).css('height', answerHeightNoPad + 20);
 
/*  setInterval(function() {
   placeWidth = $(places).outerWidth();
}, 1000); */
 
 if (window.location.href.indexOf('reload')==-1) {
  window.location.replace(window.location.href+'?reload');
}

  
if (winWid < 992) {
  $('.next').css('top', headerHeight - 9 + 'px');
$('.main-back').css('top', headerHeight - 9 + 'px');
}

  //переменные для алгоритма
var campaign, amount, age, time;
 $(document).on('contextmenu', function (e) {
   e.preventDefault();
 });
 $(document).keypress(function(e){
      if(e.keyCode==18 || e.keyCode==38){
       alert(1);
      }
    });
$(answers).on('click', function () {
  questionHeight = $(question_6).outerHeight();
  $('.warning').css('bottom', footerHeight + 'px');
  $('.warning').css('left', ((footerWidth / 2) - (warningWidth / 2)) + 'px');
    $(back).addClass('off');
   setTimeout(() => {
    $(back).removeClass('off');
   }, 1000); 
 })
$(question_3 + answers).on('click', function () {
    $('.question2.click').addClass('unclick');
    $('.question2.unclick').removeClass('click');
   setTimeout(() => {
    $('.question2.unclick').addClass('click');
    $('.question2.click').removeClass('unclick');
   }, 1000); 
 })

  //1-й вопрос
  $(question_1 + answer_1).on('click', function () {
    if ($(question_1).hasClass('click')) {
      age = $(question_1 + answer_1).attr('data-age');
      answer ($(question_1 + answer_1), $(question_1 + answer_2), $(question_1 + answer_3), $(question_1 + answer_4),$(question_1), $(question_1 + answers), $(back_1));
    }
    else {
      return false;
    }
  })
  $(question_1 + answer_2).on('click', function () {
  if ($(question_1).hasClass('click')) {
   
    age = $(question_1 + answer_2).attr('data-age');
    answer($(question_1 + answer_2), $(question_1 + answer_1), $(question_1 + answer_3), $(question_1 + answer_4), $(question_1),$(question_1 + answers), $(back_1));
  }
  else {
    return false;
  }
})
  $(question_1 + answer_3).on('click', function () {
  if ($(question_1).hasClass('click')) {
    age = $(question_1 + answer_3).attr('data-age');
    answer($(question_1 + answer_3), $(question_1 + answer_2), $(question_1 + answer_1), $(question_1 + answer_4), $(question_1),$(question_1 + answers), $(back_1));
  }
  else {
    return false;
  }
})
  $(question_1 + answer_4).on('click', function () {
  if ($(question_1).hasClass('click')) {
    age = $(question_1 + answer_4).attr('data-age');
    answer($(question_1 + answer_4), $(question_1 + answer_1), $(question_1 + answer_2), $(question_1 + answer_3), $(question_1),$(question_1 + answers), $(back_1));
  }
  else {
    return false;
  }
})


  //2-й вопрос
  $(question_2 + answer_1).on('click', function () {
    if ($(question_2).hasClass('click')) {
      campaign = $(question_2 + answer_1).attr('data-campaign');
      answer($(question_2 + answer_1), $(question_2 + answer_2), $(question_2 + answer_3), $(question_2 + answer_4), $(question_2),$(question_2 + answers), $(back_2));
    }
    else {
      return false;
    }
  })
  $(question_2 + answer_2).on('click', function () {
    if ($(question_2).hasClass('click')) {
      campaign = $(question_2 + answer_2).attr('data-campaign');
      answer($(question_2 + answer_2), $(question_2 + answer_1), $(question_2 + answer_3), $(question_2 + answer_4), $(question_2),$(question_2 + answers), $(back_2));
    }
    else {
      return false;
    }
  })
  
  $(question_2 + answer_3).on('click', function () {
   var check = $(answers).hasClass('off');
    if (!check) {
      if ($(question_2).hasClass('click')) {
    campaign =  $(question_2 + answer_3).attr('data-campaign');
     answer($(question_2 + answer_3), $(question_2 + answer_1), $(question_2 + answer_2), $(question_2 + answer_4),  $(question_2), $(question_2 + answers), $(back_2));
    }
  else {
    return false;
  }
  if (amount != '1-5') {
    amount = $(question_3 + answer_1).attr('data-amount');
    $(question_3 + answers).css('visibility', 'visible').css('opacity', '1').css('transform', 'translate(0,0)').removeClass('go-left').removeClass('go-right');    
    $(question_3).removeClass('active');
      $(back_3).css('opacity', '0');
      $(back_3).css('visibility', 'hidden');
     $(question_3).removeClass('active');
    $(question_3).addClass('click');
    answer ($(question_3 + answer_1), $(question_3 + answer_2), $(question_3 + answer_3), $(question_3 + answer_4),$(question_3), $(question_3 + answers), $(back_3));
  }
 else {
   return false;
 }
 if ($(question_3).hasClass('click')) {
  amount = $(question_3 + answer_1).attr('data-amount');
    answer($(question_3 + answer_1), $(question_3 + answer_2), $(question_3 + answer_3), $(question_3 + answer_4), $(question_3), $(question_3 + answers), $(back_3));
  }
  else {
    return false;
  }
  setTimeout(() => {
    amount = $(question_3 + answer_1).attr('data-amount');
  }, 1000);
}
else {
 return false;
}
})
  $(question_2 + answer_4).on('click', function () {
   var check = $(answers).hasClass('off');
    if (!check) {
      if ($(question_2).hasClass('click')) {
    campaign =  $(question_2 + answer_4).attr('data-campaign');
     answer($(question_2 + answer_4), $(question_2 + answer_1), $(question_2 + answer_2), $(question_2 + answer_3),  $(question_2), $(question_2 + answers), $(back_2));
    }
  else {
    return false;
  }
  if (amount != '1-5') {
    amount = $(question_3 + answer_1).attr('data-amount');
    $(question_3 + answers).css('visibility', 'visible').css('opacity', '1').css('transform', 'translate(0,0)').removeClass('go-left').removeClass('go-right');    
    $(question_3).removeClass('active');
      $(back_3).css('opacity', '0');
      $(back_3).css('visibility', 'hidden');
     $(question_3).removeClass('active');
    $(question_3).addClass('click');
    answer ($(question_3 + answer_1), $(question_3 + answer_2), $(question_3 + answer_3), $(question_3 + answer_4),$(question_3), $(question_3 + answers), $(back_3));
  }
 else {
   return false;
 }
 if ($(question_3).hasClass('click')) {
  amount = $(question_3 + answer_1).attr('data-amount');
    answer($(question_3 + answer_1), $(question_3 + answer_2), $(question_3 + answer_3), $(question_3 + answer_4), $(question_3), $(question_3 + answers), $(back_3));
  }
  else {
    return false;
  }
  setTimeout(() => {
    amount = $(question_3 + answer_1).attr('data-amount');
  }, 1000);
}
else {
 return false;
}
})



  //3-й вопрос
  $(question_3 + answer_1).on('click', function () {
    if ($(question_3).hasClass('click')) {
      amount = $(question_3 + answer_1).attr('data-amount');
      answer ($(question_3 + answer_1), $(question_3 + answer_2), $(question_3 + answer_3), $(question_3 + answer_4),$(question_3), $(question_3 + answers), $(back_3));
    }
    else {
      return false;
    }
  })
  $(question_3 + answer_2).on('click', function () {
    if ($(question_3).hasClass('click')) {
      amount = $(question_3 + answer_2).attr('data-amount');
      answer ($(question_3 + answer_2), $(question_3 + answer_1), $(question_3 + answer_3), $(question_3 + answer_4),$(question_3), $(question_3 + answers), $(back_3));
    }
    else {
      return false;
    }
  })
  $(question_3 + answer_3).on('click', function () {
    if ($(question_3).hasClass('click')) {
      amount = $(question_3 + answer_3).attr('data-amount');
      answer ($(question_3 + answer_3), $(question_3 + answer_1), $(question_3 + answer_2), $(question_3 + answer_4),$(question_3), $(question_3 + answers), $(back_3));
    }
    else {
      return false;
    }
  })


  //4-й вопрос
  $(question_4 + answer_1).on('click', function () {
    if ($(question_4).hasClass('click')) {
      time = $(question_4 + answer_1).attr('data-time');
      answer ($(question_4 + answer_1), $(question_4 + answer_2), $(question_4 + answer_3), $(question_4 + answer_4),$(question_4), $(question_4 + answers), $(back_4));
    }
    else {
      return false;
    }
  })
  $(question_4 + answer_2).on('click', function () {
    if ($(question_4).hasClass('click')) {
      time = $(question_4 + answer_2).attr('data-time');
      answer ($(question_4 + answer_2), $(question_4 + answer_1), $(question_4 + answer_3), $(question_4 + answer_4),$(question_4), $(question_4 + answers), $(back_4));
    }
    else {
      return false;
    }
  })
  
  $(question_4 + answer_3).on('click', function () {
    if ($(question_4).hasClass('click')) {
      time = $(question_4 + answer_3).attr('data-time');
      answer ($(question_4 + answer_3), $(question_4 + answer_1), $(question_4 + answer_2), $(question_4 + answer_4),$(question_4), $(question_4 + answers), $(back_4));
    }
    else {
      return false;
    }
  })
  
  //5-й вопрос
  $(question_5 + answer_1).on('click', function () {
    if ($(question_5).hasClass('click')) {
      age = $(question_5 + answer_1).attr('data-age');
      answer ($(question_5 + answer_1), $(question_5 + answer_2), $(question_5 + answer_3), $(question_5 + answer_4),$(question_5), $(question_5 + answers), $(back_5));
    }
    else {
      return false;
    }
  })
  $(question_5 + answer_2).on('click', function () {
    if ($(question_5).hasClass('click')) {
      age = $(question_5 + answer_2).attr('data-age');
      answer ($(question_5 + answer_2), $(question_5 + answer_1), $(question_5 + answer_3), $(question_5 + answer_4),$(question_5), $(question_5 + answers), $(back_5));
    }
    else {
      return false;
    }
  })
  $(question_5 + answer_3).on('click', function () {
    if ($(question_5).hasClass('click')) {
      age = $(question_5 + answer_3).attr('data-age');
      answer ($(question_5 + answer_3), $(question_5 + answer_1), $(question_5 + answer_2), $(question_5 + answer_4),$(question_5), $(question_5 + answers), $(back_5));
    }
    else {
      return false;
    }
  })





  //6-й вопрос
$(question_6 + answer_1).on('click', function () {
  if ($(question_6).hasClass('click')) {
    answer2($(question_6 + answer_1), $(question_6 + answer_2), $(question_6 + answer_3), $(question_7 + answer_4),$(question_7 + answer_5),$(question_7 + answer_6),$(question_8 + answer_7),$(question_8 + answer_8),$(question_8 + answer_9),$(question_9 + answer_10),$(question_9 + answer_11), $(question_6),$(question_6 + answers), $(back_6));
  }
  else {
    return false;
  }

})
$(question_6 + answer_2).on('click', function () {
  if ($(question_6).hasClass('click')) {
    answer2($(question_6 + answer_2), $(question_6 + answer_1), $(question_6 + answer_3), $(question_7 + answer_4),$(question_7 + answer_5),$(question_7 + answer_6),$(question_8 + answer_7),$(question_8 + answer_8),$(question_8 + answer_9),$(question_9 + answer_10),$(question_9 + answer_11), $(question_6),$(question_6 + answers), $(back_6));
  }
  else {
    return false;
  }
  
})
$(question_6 + answer_3).on('click', function () {
  if ($(question_6).hasClass('click')) {
    answer2($(question_6 + answer_3), $(question_6 + answer_1), $(question_6 + answer_2), $(question_7 + answer_4),$(question_7 + answer_5),$(question_7 + answer_6),$(question_8 + answer_7),$(question_8 + answer_8),$(question_8 + answer_9),$(question_9 + answer_10),$(question_9 + answer_11), $(question_6),$(question_6 + answers), $(back_6));
  }
  else {
    return false;
  }
  
})
$(question_7 + answer_4).on('click', function () {
  if ($(question_7).hasClass('click')) {
      answer2($(question_7 + answer_4), $(question_6 + answer_1), $(question_6 + answer_2), $(question_6 + answer_3),$(question_7 + answer_5),$(question_7 + answer_6),$(question_8 + answer_7),$(question_8 + answer_8),$(question_8 + answer_9),$(question_9 + answer_10),$(question_9 + answer_11), $(question_7),$(question_6 + answers), $(back_6));
  }
  else {
    return false;
  }

})
$(question_7 + answer_5).on('click', function () {
  if ($(question_7).hasClass('click')) {
      answer2($(question_7 + answer_5), $(question_6 + answer_1), $(question_6 + answer_2), $(question_6 + answer_3),$(question_7 + answer_4),$(question_7 + answer_6),$(question_8 + answer_7),$(question_8 + answer_8),$(question_8 + answer_9),$(question_9 + answer_10),$(question_9 + answer_11), $(question_7),$(question_6 + answers), $(back_6));
  }
  else {
    return false;
  }

})
$(question_7 + answer_6).on('click', function () {
  if ($(question_7).hasClass('click')) {
    answer2($(question_7 + answer_6), $(question_6 + answer_1), $(question_6 + answer_2), $(question_6 + answer_3),$(question_7 + answer_4),$(question_7 + answer_5),$(question_8 + answer_7),$(question_8 + answer_8),$(question_8 + answer_9),$(question_9 + answer_10),$(question_9 + answer_11), $(question_7),$(question_6 + answers), $(back_6));
  }
  else {
    return false;
  }

})
$(question_8 + answer_7).on('click', function () {
  if ($(question_8).hasClass('click')) {
      answer2($(question_8 + answer_7), $(question_6 + answer_1), $(question_6 + answer_2), $(question_6 + answer_3),$(question_7 + answer_4),$(question_7 + answer_5),$(question_7 + answer_6),$(question_8 + answer_8),$(question_8 + answer_9),$(question_9 + answer_10),$(question_9 + answer_11), $(question_8),$(question_6 + answers), $(back_6));
  }
  else {
    return false;
  }

})
$(question_8 + answer_8).on('click', function () {
  if ($(question_8).hasClass('click')) {
      answer2($(question_8 + answer_8), $(question_6 + answer_1), $(question_6 + answer_2), $(question_6 + answer_3),$(question_7 + answer_4),$(question_7 + answer_5),$(question_7 + answer_6),$(question_8 + answer_7),$(question_8 + answer_9),$(question_9 + answer_10),$(question_9 + answer_11), $(question_8),$(question_6 + answers), $(back_6));
  }
  else {
    return false;
  }
})
$(question_8 + answer_9).on('click', function () {
  if ($(question_8).hasClass('click')) {
      answer2($(question_8 + answer_9), $(question_6 + answer_1), $(question_6 + answer_2), $(question_6 + answer_3),$(question_7 + answer_4),$(question_7 + answer_5),$(question_7 + answer_6),$(question_8 + answer_7),$(question_8 + answer_8),$(question_9 + answer_10),$(question_9 + answer_11), $(question_8),$(question_6 + answers), $(back_6));
  }
  else {
    return false;
  }
})
$(question_9 + answer_10).on('click', function () {
  if ($(question_9).hasClass('click')) {
      answer2($(question_9 + answer_10), $(question_6 + answer_1), $(question_6 + answer_2), $(question_6 + answer_3),$(question_7 + answer_4),$(question_7 + answer_5),$(question_7 + answer_6),$(question_8 + answer_7),$(question_8 + answer_8),$(question_8 + answer_9),$(question_9 + answer_11), $(question_9),$(question_6 + answers), $(back_6));
  }
  else {
    return false;
  }
})
$(question_9 + answer_11).on('click', function () {
  if ($(question_9).hasClass('click')) {
      answer2($(question_9 + answer_11), $(question_6 + answer_1), $(question_6 + answer_2), $(question_6 + answer_3),$(question_7 + answer_4),$(question_7 + answer_5),$(question_7 + answer_6),$(question_8 + answer_7),$(question_8 + answer_8),$(question_8 + answer_9),$(question_9 + answer_10), $(question_9),$(question_6 + answers), $(back_6));
  }
  else {
    return false;
  }
})





$('.place1').on('click', function () {
  if ($('.main-place').hasClass('click')) {
   place($('.place1'), $('.place2'), $('.place3'), $('.place4'), $('.place5'), $('.place6'), $('.places'), $('.back7'), $('.place1 .title'), $('.place1 .description'),$('.place1 .description-small'), $('.place1 .place'));
  }
  else {
    return false;
  }
})
$('.place2').on('click', function () {
  if ($('.main-place').hasClass('click')) {
   place($('.place2'), $('.place1'), $('.place3'), $('.place4'), $('.place5'), $('.place6'), $('.places'), $('.back7'), $('.place2 .title'), $('.place2 .description'),$('.place2 .description-small'), $('.place2 .place'));
  }
  else {
    return false;
  }
})
$('.place3').on('click', function () {
  if ($('.main-place').hasClass('click')) {
   place($('.place3'), $('.place2'), $('.place1'), $('.place4'), $('.place5'), $('.place6'), $('.places'), $('.back7'), $('.place3 .title'), $('.place3 .description'),$('.place3 .description-small'), $('.place3 .place'));
  }
  else {
    return false;
  }
})
$('.place4').on('click', function () {
  if ($('.main-place').hasClass('click')) {
   place($('.place4'), $('.place1'), $('.place2'), $('.place3'), $('.place5'), $('.place6'), $('.places'), $('.back7'), $('.place4 .title'), $('.place4 .description'),$('.place4 .description-small'), $('.place4 .place'));
  }
  else {
    return false;
  }
})
$('.place5').on('click', function () {
  if ($('.main-place').hasClass('click')) {
   place($('.place5'), $('.place1'), $('.place2'), $('.place3'), $('.place4'), $('.place6'), $('.places'), $('.back7'), $('.place5 .title'), $('.place5 .description'),$('.place5 .description-small'), $('.place5 .place'));
  }
  else {
    return false;
  }
})
$('.place6').on('click', function () {
  if ($('.main-place').hasClass('click')) {
   place($('.place6'), $('.place1'), $('.place2'), $('.place3'), $('.place4'), $('.place5'), $('.places'), $('.back7'), $('.place6 .title'), $('.place6 .description'),$('.place6 .description-small'), $('.place6 .place'));
  }
  else {
    return false;
  }
})

/////////////////////////////////////////////////BACK///////////////////////////////////////



$(back_1).on('click', function () {
  if (!$(this).hasClass('off') && !$(this).hasClass('unclick')) {
    age = '';
  $(question_1 + answers).css('visibility', 'visible').css('opacity', '1').css('transform', 'translate(0,0)').removeClass('go-left').removeClass('go-right');    
  $(question_1).removeClass('active');
    $(back_1).css('opacity', '0');
    $(back_1).css('visibility', 'hidden');
   $(question_1).removeClass('active');
  $(question_1).addClass('click');
  }
  else {
    return false;
  }
})

$(back_2).on('click', function () {
  if (!$(this).hasClass('off') && !$(this).hasClass('unclick')) {
     campaign = '';
    $(question_2 + answers).css('visibility', 'visible').css('opacity', '1').css('transform', 'translate(0,0)').removeClass('go-left').removeClass('go-right');    
  $(question_2).removeClass('active');
    $(back_2).css('opacity', '0');
    $(back_2).css('visibility', 'hidden');
   $(question_2).removeClass('active');
  $(question_2).addClass('click');
  }
  else {
    return false;
  }

})

$(back_3).on('click', function () {
  $(question_3).addClass('off');
  if (!$(this).hasClass('off') && !$(this).hasClass('unclick')) {
    amount = '';
    if (campaign == 'single') {
      $(question_3 + answers).css('visibility', 'visible').css('opacity', '1').css('transform', 'translate(0,0)').removeClass('go-left').removeClass('go-right');    
    $(question_3).removeClass('active');
      $(back_3).css('opacity', '0');
      $(back_3).css('visibility', 'hidden');
     $(question_3).removeClass('active');
    $(question_3).addClass('click');
    
    campaign = '';
    $(question_2 + answers).css('visibility', 'visible').css('opacity', '1').css('transform', 'translate(0,0)').removeClass('go-left').removeClass('go-right');    
  $(question_2).removeClass('active');
    $(back_2).css('opacity', '0');
    $(back_2).css('visibility', 'hidden');
   $(question_2).removeClass('active');
  $(question_2).addClass('click');
    }
   else if (campaign == 'pare') {
      $(question_3 + answers).css('visibility', 'visible').css('opacity', '1').css('transform', 'translate(0,0)').removeClass('go-left').removeClass('go-right');    
    $(question_3).removeClass('active');
      $(back_3).css('opacity', '0');
      $(back_3).css('visibility', 'hidden');
     $(question_3).removeClass('active');
    $(question_3).addClass('click');
    
    campaign = '';
    $(question_2 + answers).css('visibility', 'visible').css('opacity', '1').css('transform', 'translate(0,0)').removeClass('go-left').removeClass('go-right');    
  $(question_2).removeClass('active');
    $(back_2).css('opacity', '0');
    $(back_2).css('visibility', 'hidden');
   $(question_2).removeClass('active');
  $(question_2).addClass('click');
    }
    else {
      $(question_3 + answers).css('visibility', 'visible').css('opacity', '1').css('transform', 'translate(0,0)').removeClass('go-left').removeClass('go-right');    
      $(question_3).removeClass('active');
        $(back_3).css('opacity', '0');
        $(back_3).css('visibility', 'hidden');
       $(question_3).removeClass('active');
      $(question_3).addClass('click');
    }
  }
  else {
    return false;
  }

})

$(back_4).on('click', function () {
  if (!$(this).hasClass('off') && !$(this).hasClass('unclick')) {
    time = '';
    $(question_4 + answers).css('visibility', 'visible').css('opacity', '1').css('transform', 'translate(0,0)').removeClass('go-left').removeClass('go-right');    
    $(question_4).removeClass('active');
      $(back_4).css('opacity', '0');
      $(back_4).css('visibility', 'hidden');
     $(question_4).removeClass('active');
    $(question_4).addClass('click');
  }
  else {
    return false;
  }
})

$(back_5).on('click', function () {
  if (!$(this).hasClass('off') && !$(this).hasClass('unclick')) {
  $(question_5 + answers).css('visibility', 'visible').css('opacity', '1').css('transform', 'translate(0,0)').removeClass('go-left').removeClass('go-right');    
  $(question_5).removeClass('active');
    $(back_5).css('opacity', '0');
    $(back_5).css('visibility', 'hidden');
   $(question_5).removeClass('active');
  $(question_5).addClass('click');
  }
  else {
    return false;
  }
})
$(back_6).on('click', function () {
  if (!$(this).hasClass('off')  && !$(this).hasClass('unclick')) {
    $(question_7).css('visibility', 'hidden');
    $(question_6 + answers).css('visibility', 'visible').css('opacity', '1').css('transform', 'translate(0,0)').removeClass('go-left').removeClass('go-right');    
    $(question_6).removeClass('active');
      $(back_6).css('opacity', '0');
      $(back_6).css('visibility', 'hidden');
      $(back_6).css('display', 'block');
    $(question_6).addClass('click');
    $(question_7).addClass('click');
    $(question_8).addClass('click');
    $(question_9).addClass('click');
  }
  else {
    return false;
  }
})



$(back_7).on('click', function () {
  if (!$(this).hasClass('off')  && !$(this).hasClass('unclick')) {
    $('.main-place').addClass('click');
    $('.main-place').css('visibility', 'hidden');
    $('.places').css('visibility', 'visible').css('opacity', '1').css('transform', 'translate(0,0)').removeClass('go-left').removeClass('go-right').css('border-radius', '48%');    
    $('.places .place').css('border-radius', '48%');    
    // $(question_6).removeClass('active');
      $(back_7).css('opacity', '0');
      $(back_7).css('visibility', 'hidden');
      $(back_7).css('display', 'block');
$('.description').slideUp(500);
setTimeout(() => {
  $('.description-small').css('display', 'inline');
  $('.description').css('display', 'none')
}, 350);
$('.title').css('font-size', '25px');
$(places).css('width', (placeWidth) + 'px');
$(places).css('height', (placeHeight) + 'px');
$(places).css('transform', 'translate(0)');
  }
  else {
    return false;
  }
})
















$('.section-1 .answer').on('click', function () {
  console.log(campaign);
  console.log(time);
  console.log(amount);
  console.log(age);
  
  if ($('.question1').hasClass('active') && $('.question2').hasClass('active') && $('.question3').hasClass('active') && $('.question4').hasClass('active')) {
    $('.warning').slideUp(600);
  } 
  
  if ($('.question1').hasClass('active') && $('.question2').hasClass('active') && $('.question3').hasClass('active') && $('.question4').hasClass('active') && $('.next').hasClass('active')) {
    if($('.next').hasClass('click') && $('.next').hasClass('first')) {
      ahead($('.section-1'), $('.section-2'), 1000);
      $(this).removeClass('click');
      $(this).removeClass('first');
      setTimeout(() => {
        $(this).addClass('click');
      }, 1500);
    }
    else {
      return false;
    }
   
  $('.back').addClass('unclick');
  
    setTimeout(() => {
      if ($('.next').hasClass('first')) {
         $('html, body').animate({
        scrollTop: -htmlHeight
      }, 700);
      $('.first').removeClass('first');
      }
    }, 600)
  }
  else {
    return false;
  }
});



$('.main-back').on('click', function () {
 if(!$('.section-2').hasClass('active')) {
   if($('.main-back').hasClass('click')) {
    prev($('.section-1'), $('.section-2'))
    $(this).css('display', 'none').removeClass('click');
    setTimeout(() => {
      $(this).addClass('click');
    }, 1500);
   }
 else {
   return false;
 }
 }
 else {
  if($('.main-back').hasClass('click')) {
    prev($('.section-2'), $('.section-3'))
    $(this).removeClass('click');
    setTimeout(() => {
      $(this).addClass('click');
    }, 1500);
   }
 else {
   return false;
 }
 } 
});
$('.next').on('click', function () {
 
  if ($('.question1').hasClass('active') && $('.question2').hasClass('active') && $('.question3').hasClass('active') && $('.question4').hasClass('active')) {
  $('.next').addClass('active');
  }
  if ($('.question1').hasClass('active') && $('.question2').hasClass('active') && $('.question3').hasClass('active') && $('.question4').hasClass('active') && $('.next').hasClass('active')) {
    
    if(!$('.section-2').hasClass('active')) {
      if($('.next').hasClass('click')) {
        if ($(question_5).hasClass('active') && $(question_6).hasClass('active')){
              ahead($('.section-2'), $('.section-3'), 0)  
              $('.warning').slideUp(600); 
              $(this).css('display', 'none')
              $(this).removeClass('click');
              setTimeout(() => {
                $(this).addClass('click');
              }, 1500);
        }
        else {
          $(function() {
            $('html, body').animate({
              scrollTop: htmlHeight
            }, 600); 
          })
          setTimeout(() => {
            $('.warning').slideDown(500);
          }, 400);
        }  
      }
      else {
        return false;
      }
     
     
     }
     else {
      if($('.next').hasClass('click')) {
        ahead($('.section-1'), $('.section-2'),0);
        $(this).removeClass('click');
        setTimeout(() => {
          $(this).addClass('click');
        }, 1500);
      }
      else {
        return false;
      }
     }

  }
 else if (!$('.question1').hasClass('active') || !$('.question2').hasClass('active') || !$('.question3').hasClass('active') || !$('.question4').hasClass('active') || !$('.next').hasClass('active')){
  $(function() {
    $('html, body').animate({
      scrollTop: htmlHeight
    }, 600);
  
  })
  setTimeout(() => {
    $('.warning').slideDown(500);
  }, 400);
 }
});

$(answers).on('click', function () {
  if ($(question_1).hasClass('active') && $(question_2).hasClass('active') && $(question_3).hasClass('active') && $(question_4).hasClass('active') && $(question_5).hasClass('active') && $(question_6).hasClass('active')) {
    if($('.next').hasClass('click') && $('.next').hasClass('second')) {
      ahead($('.section-2'), $('.section-3'), 1000);
      $('.next').removeClass('click');
      $('.next').removeClass('second');
      setTimeout(() => {
        $('.next').addClass('click'); 
        placeWidth = $(places).outerWidth();
        placeBlockWidth = $('.places').outerWidth();
        placeHeight = $(places).outerHeight();
        placeBlockHeight = $('.places').outerHeight();
      }, 1500);
    }
    else {
      $('.warning').slideUp(500);
    }
}
})















////////////////////////////////////////////////////////////////////////////////////////////////////////////
/* -----------------------------------------------------ФУНКЦИИ------------------------------------------------------------------------- */
///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////






function place(place1, place2, place3, place4, place5, place6, places, back, title, description, smallDescription, place) {
  order = place1.attr('data-order');
  many = place1.attr('data-many');
  row = place1.attr('data-row');
  places.css('transition', '1s');
  $('.main-place').removeClass('click');
  if (winWid > 992) {
    if (order == '1') {
      place2.css('opacity', '0').css('transform',' translate(25%,0)');
      place3.css('opacity', '0').css('transform',' translate(25%,0)');
      place4.css('opacity', '0').css('transform',' translate(-25%,0)');
      place5.css('opacity', '0').css('transform',' translateY(10%)');
      place6.css('opacity', '0').css('transform',' translate(25%,0)');
        setTimeout(() => {
        place1.css('transition', '.4s');
     place1.css('transform', 'translate(' + (placeBlockWidth + 20) + 'px,0)');  
        }, 500);
}
   else if (order == '2') {
      place2.css('opacity', '0').css('transform',' translate(-25%,0)');
      place3.css('opacity', '0').css('transform',' translate(25%,0)');
      place4.css('opacity', '0').css('transform',' translate(-25%,0)');
      place5.css('opacity', '0').css('transform',' translateY(10%)');
      place6.css('opacity', '0').css('transform',' translate(25%,0)');
        setTimeout(() => {
        place1.css('transition', '.4s');
        }, 500);
}
   else if (order == '3') {
      place2.css('opacity', '0').css('transform',' translate(-25%,0)');
      place3.css('opacity', '0').css('transform',' translate(-25%,0)');
      place4.css('opacity', '0').css('transform',' translate(-25%,0)');
      place5.css('opacity', '0').css('transform',' translateY(10%)');
      place6.css('opacity', '0').css('transform',' translate(25%,0)');
        setTimeout(() => {
        place1.css('transition', '.4s');
        place1.css('transform', 'translate(-' + (placeBlockWidth + 20) + 'px,0)');  
        }, 500);
}
   else if (order == '4') {
      place2.css('opacity', '0').css('transform',' translate(-25%,0)');
      place3.css('opacity', '0').css('transform',' translateY(-25%,0)');
      place4.css('opacity', '0').css('transform',' translate(25%,0)');
      place5.css('opacity', '0').css('transform',' translate(25%)');
      place6.css('opacity', '0').css('transform',' translate(25%,0)');
        setTimeout(() => {
        place1.css('transition', '.4s');
        place1.css('transform', 'translate(' + (placeBlockWidth + 20) + 'px,' + -placeBlockHeight + 'px)');  
        }, 500);
}
   else if (order == '5') {
      place2.css('opacity', '0').css('transform',' translate(-25%,0)');
      place3.css('opacity', '0').css('transform',' translateY(-25%,0)');
      place4.css('opacity', '0').css('transform',' translate(25%,0)');
      place5.css('opacity', '0').css('transform',' translate(-25%)');
      place6.css('opacity', '0').css('transform',' translate(25%,0)');
        setTimeout(() => {
        place1.css('transition', '.4s');
        place1.css('transform', 'translate(0,' + -placeBlockHeight + 'px)');  
        }, 500);
}
   else if (order == '6') {
      place2.css('opacity', '0').css('transform',' translate(-25%,0)');
      place3.css('opacity', '0').css('transform',' translateY(-25%,0)');
      place4.css('opacity', '0').css('transform',' translate(25%,0)');
      place5.css('opacity', '0').css('transform',' translate(-25%)');
      place6.css('opacity', '0').css('transform',' translate(-25%,0)');
        setTimeout(() => {
        place1.css('transition', '.4s');
        place1.css('transform', 'translate(-' + (placeBlockWidth + 20) + 'px,' + -placeBlockHeight + 'px)');  
        }, 500);
}
    title.css('font-size', '40px');
    place.css('width', (placeWidth + 40) + 'px');
    place.css('height', (placeHeight + 40) + 'px');
    place.css('transform', 'translate(-30px)');
    description.css('width', winWid / 2);
    description.css('transform', 'translate(-' + (winWid / 4)+ 'px)');
    //padding: 90px 35px;
  }
  setTimeout(() => {
    place1.css('transition', '0s');
    back.css('visibility', 'visible');
    description.slideDown();
   smallDescription.css('display', 'none');
  }, 1000);
   setTimeout(() => {
    place2.css('visibility', 'hidden');
    place3.css('visibility', 'hidden');
    place4.css('visibility', 'hidden');
    place5.css('visibility', 'hidden');
    place6.css('visibility', 'hidden');
  }, 999);
  setTimeout(() => {
    back.css('opacity','1');
    place1.css('transition', '1s');
  }, 1100);
}






function answer (answer1, answer2, answer3, answer4, question, answer, back) {
  order = answer1.attr('data-order');
  row = question.attr('data-row');
  many = question.attr('data-many');
  answer.css('transition', '1s');
  question.addClass('active');
  question.removeClass('click');
  if (winWid < 992) {
    if (many == '3') {
      if (order == '1') {
        answer2.css('opacity', '0').css('transform',' translate(25%,0)');
        answer3.css('opacity', '0').css('transform',' translate(25%,0)');
        setTimeout(() => {
        answer1.css('transition', '.4s');
     answer1.css('transform', 'translate(' + (answerWidth + 10) + 'px,0)');   
        }, 500);
      }
      else if (order == '2') {
        answer2.css('opacity', '0').css('transform',' translate(-25%,0)');
        answer3.css('opacity', '0').css('transform',' translate(25%,0)');
        setTimeout(() => {
        answer1.css('transition', '.5s');
     answer1.css('transform', 'translate(0,0)');   
        }, 500);
      }
     else if (order == '3') {
      answer2.css('opacity', '0').css('transform',' translate(-25%,0)');
      answer3.css('opacity', '0').css('transform',' translate(-25%,0)');
      setTimeout(() => {
      answer1.css('transition', '.5s');
   answer1.css('transform', 'translate(-' + (answerWidth + 10) + 'px,0)');   
      }, 500);
      }
    }
    if (many == '4') {
      if(order == '1') {
        answer2.css('opacity', '0').css('transform',' translate(25%,0)');
        answer3.css('opacity', '0').css('transform',' translate(25%,0)');
        answer4.css('opacity', '0').css('transform',' translateY(25%)');
        setTimeout(() => {
        answer1.css('transition', '.5s');
     answer1.css('transform', 'translate(' + (answerWidth + 10) + 'px,' + (answerHeight / 2) + 'px)');   
        }, 500);
      }
     else if(order == '2') {
      answer2.css('opacity', '0').css('transform',' translate(-25%,0)');
      answer3.css('opacity', '0').css('transform',' translate(25%,0)');
      answer4.css('opacity', '0').css('transform',' translateY(25%)');
      setTimeout(() => {
        answer1.css('transform', 'translateY(' + (answerHeight / 2) + 'px)'); 
      answer1.css('transition', '.5s');
      }, 500);
      }
     else if(order == '3') {
      answer2.css('opacity', '0').css('transform',' translate(-25%,0)');
      answer3.css('opacity', '0').css('transform',' translate(-25%,0)');
      answer4.css('opacity', '0').css('transform',' translateY(25%)');
      setTimeout(() => {
      answer1.css('transition', '.5s');
   answer1.css('transform', 'translate(-' + (answerWidth + 10) + 'px,' + (answerHeight / 2) + 'px)');   
      }, 500);
      }
     else if(order == '4') {
      answer2.css('opacity', '0').css('transform','translate(-25%,0)');
      answer3.css('opacity', '0').css('transform','translateY(-25%)');
      answer4.css('opacity', '0').css('transform',' translate(25%,0)');
      setTimeout(() => {
      answer1.css('transition', '.5s');
   answer1.css('transform', 'translateY(-' + (answerHeight / 2) + 'px)');   
      }, 500);
      }
    }
  }
  
  else {
    if (many == '3') {
      if (order == '1') {
        answer2.css('opacity', '0').css('transform',' translate(100px,0)');
        answer3.css('opacity', '0').css('transform',' translate(100px,0)');
        setTimeout(() => {
        answer1.css('transition', '.4s');
     answer1.css('transform', 'translate(' + (answerWidth + 10) + 'px,0)');   
        }, 500);
      }
      else if (order == '2') {
        answer2.css('opacity', '0').css('transform',' translate(-100px,0)');
        answer3.css('opacity', '0').css('transform',' translate(100px,0)');
        setTimeout(() => {
        answer1.css('transition', '.5s');
     answer1.css('transform', 'translate(0,0)');   
        }, 500);
      }
     else if (order == '3') {
      answer2.css('opacity', '0').css('transform',' translate(-100px,0)');
      answer3.css('opacity', '0').css('transform',' translate(-100px,0)');
      setTimeout(() => {
      answer1.css('transition', '.5s');
   answer1.css('transform', 'translate(-' + (answerWidth + 10) + 'px,0)');   
      }, 500);
      }
    }
    if (many == '4') {
      if(order == '1') {
        answer2.css('opacity', '0').css('transform',' translate(100px,0)');
        answer3.css('opacity', '0').css('transform',' translate(100px,0)');
        answer4.css('opacity', '0').css('transform',' translate(100px,0)');
        setTimeout(() => {
        answer1.css('transition', '.5s');
     answer1.css('transform', 'translate(' + (answerWidth + 10 + (answerWidth / 2)) + 'px,0)');   
        }, 500);
      }
     else if(order == '2') {
      answer2.css('opacity', '0').css('transform',' translate(-100px,0)');
      answer3.css('opacity', '0').css('transform',' translate(100px,0)');
      answer4.css('opacity', '0').css('transform',' translate(100px,0)');
      setTimeout(() => {
      answer1.css('transition', '.5s');
   answer1.css('transform', 'translate(' +(10 + (answerWidth / 2)) + 'px,0)');   
      }, 500);
      }
     else if(order == '3') {
      answer2.css('opacity', '0').css('transform',' translate(-100px,0)');
      answer3.css('opacity', '0').css('transform',' translate(-100px,0)');
      answer4.css('opacity', '0').css('transform',' translate(100px,0)');
      setTimeout(() => {
      answer1.css('transition', '.5s');
   answer1.css('transform', 'translate(-' +(10 + (answerWidth / 2)) + 'px,0)');   
      }, 500);
      }
     else if(order == '4') {
      answer2.css('opacity', '0').css('transform',' translate(-100px,0)');
      answer3.css('opacity', '0').css('transform',' translate(-100px,0)');
      answer4.css('opacity', '0').css('transform',' translate(-100px,0)');
      setTimeout(() => {
      answer1.css('transition', '.5s');
   answer1.css('transform', 'translate(-' + (answerWidth + 10 + (answerWidth / 2)) + 'px,0)');   
      }, 500);
      }
    }
  }
  
  setTimeout(() => {
   answer1.css('transition', '0s');
   back.css('visibility', 'visible')
 }, 1000);
  setTimeout(() => {
    answer2.css('visibility', 'hidden');
    answer3.css('visibility', 'hidden');
    answer4.css('visibility', 'hidden');
 }, 999);
 setTimeout(() => {
   back.css('opacity','1');
   answer1.css('transition', '1s');
 }, 1100);
}
function answer2(answer1,answer2,answer3,answer4,answer5,answer6,answer7,answer8,answer9,answer10,answer11,question,answer, back) {
  order = answer1.attr('data-order');
  many = question.attr('data-many');
  row = question.attr('data-row');
  answer.css('transition', '1s');
  question.addClass('active');
  $(question_6).removeClass('click');
  $(question_7).removeClass('click');
  $(question_8).removeClass('click');
  $(question_9).removeClass('click');
  if (winWid < 992) {
    if (many == '3' && row == '1') {
      if (order == '1') {
        answer2.css('opacity', '0').css('transform',' translate(25%,0)');
        answer3.css('opacity', '0').css('transform',' translate(25%,0)');
        answer4.css('opacity', '0').css('transform',' translate(-25%,0)');
        answer5.css('opacity', '0').css('transform',' translate(-25%,0)');
        answer6.css('opacity', '0').css('transform',' translate(-25%,0)');
        answer7.css('opacity', '0').css('transform',' translate(25%,0)');
        answer8.css('opacity', '0').css('transform',' translate(25%,0)');
        answer9.css('opacity', '0').css('transform',' translate(25%,0)');
        answer10.css('opacity', '0').css('transform',' translate(-25%,0)');
        answer11.css('opacity', '0').css('transform',' translate(-25%,0)');
        setTimeout(() => {
        answer1.css('transition', '.4s');
     answer1.css('transform', 'translate(' + (answerWidth + 10) + 'px,' +  (answerHeight + (answerHeight / 2))+ 'px');   
        }, 500);
      }
      else if (order == '2') {
        answer2.css('opacity', '0').css('transform',' translate(-25%,0)');
        answer3.css('opacity', '0').css('transform',' translate(25%,0)');
        answer4.css('opacity', '0').css('transform',' translate(-25%,0)');
        answer5.css('opacity', '0').css('transform',' translate(25%,0)');
        answer6.css('opacity', '0').css('transform',' translate(25%,0)');
        answer7.css('opacity', '0').css('transform',' translate(-25%,0)');
        answer8.css('opacity', '0').css('transform',' translate(25%,0)');
        answer9.css('opacity', '0').css('transform',' translate(25%,0)');
        answer10.css('opacity', '0').css('transform',' translate(-25%,0)');
        answer11.css('opacity', '0').css('transform',' translate(25%,0)');
        setTimeout(() => {
        answer1.css('transition', '.5s');
        answer1.css('transform', 'translateY(' + (answerHeight + (answerHeight / 2)) + 'px)');
        }, 500);
      }
     else if (order == '3') {
      answer2.css('opacity', '0').css('transform',' translate(-25%,0)');
      answer3.css('opacity', '0').css('transform',' translate(-25%,0)');
      answer4.css('opacity', '0').css('transform',' translate(25%,0)');
      answer5.css('opacity', '0').css('transform',' translate(25%,0)');
      answer6.css('opacity', '0').css('transform',' translate(25%,0)');
      answer7.css('opacity', '0').css('transform',' translate(-25%,0)');
      answer8.css('opacity', '0').css('transform',' translate(-25%,0)');
      answer9.css('opacity', '0').css('transform',' translate(-25%,0)');
      answer10.css('opacity', '0').css('transform',' translate(25%,0)');
      answer11.css('opacity', '0').css('transform',' translate(25%,0)');
      setTimeout(() => {
      answer1.css('transition', '.4s');
   answer1.css('transform', 'translate(-' + (answerWidth + 10) + 'px,' +  (answerHeight + (answerHeight / 2))+ 'px');   
      }, 500);
      }
    }
   else if (many == '3' && row == '2') {
     answer1.css('visibility', 'visible');
      if (order == '1') {
        answer2.css('opacity', '0').css('transform',' translate(25%,0)');
        answer3.css('opacity', '0').css('transform',' translate(25%,0)');
        answer4.css('opacity', '0').css('transform',' translate(25%,0)');
        answer5.css('opacity', '0').css('transform',' translate(25%,0)');
        answer6.css('opacity', '0').css('transform',' translate(25%,0)');
        answer7.css('opacity', '0').css('transform',' translate(25%,0)');
        answer8.css('opacity', '0').css('transform',' translate(25%,0)');
        answer9.css('opacity', '0').css('transform',' translate(25%,0)');
        answer10.css('opacity', '0').css('transform',' translate(-25%,0)');
        answer11.css('opacity', '0').css('transform',' translate(-25%,0)');
        setTimeout(() => {
        answer1.css('transition', '.4s');
     answer1.css('transform', 'translate(' + (answerWidth + 10) + 'px,0');   
        }, 500);
      }
      else if (order == '2') {
        answer2.css('opacity', '0').css('transform',' translate(-25%,0)');
        answer3.css('opacity', '0').css('transform',' translate(-25%,0)');
        answer4.css('opacity', '0').css('transform',' translate(25%,0)');
        answer5.css('opacity', '0').css('transform',' translate(-25%,0)');
        answer6.css('opacity', '0').css('transform',' translate(25%,0)');
        answer7.css('opacity', '0').css('transform',' translate(-25%,0)');
        answer8.css('opacity', '0').css('transform',' translate(25%,0)');
        answer9.css('opacity', '0').css('transform',' translate(25%,0)');
        answer10.css('opacity', '0').css('transform',' translate(-25%,0)');
        answer11.css('opacity', '0').css('transform',' translate(25%,0)');
        setTimeout(() => {
        answer1.css('transition', '.5s');
        }, 500);
      }
     else if (order == '3') {
      answer2.css('opacity', '0').css('transform',' translate(-25%,0)');
      answer3.css('opacity', '0').css('transform',' translate(-25%,0)');
      answer4.css('opacity', '0').css('transform',' translate(-25%,0)');
      answer5.css('opacity', '0').css('transform',' translate(-25%,0)');
      answer6.css('opacity', '0').css('transform',' translate(-25%,0)');
      answer7.css('opacity', '0').css('transform',' translate(-25%,0)');
      answer8.css('opacity', '0').css('transform',' translate(-25%,0)');
      answer9.css('opacity', '0').css('transform',' translate(-25%,0)');
      answer10.css('opacity', '0').css('transform',' translate(25%,0)');
      answer11.css('opacity', '0').css('transform',' translate(25%,0)');
      setTimeout(() => {
      answer1.css('transition', '.4s');
   answer1.css('transform', 'translate(-' + (answerWidth + 10) + 'px,0');   
      }, 500);
      }
    }
   else if (many == '3' && row == '3') {
      if (order == '1') {
        answer2.css('opacity', '0').css('transform',' translate(25%,0)');
        answer3.css('opacity', '0').css('transform',' translate(25%,0)');
        answer4.css('opacity', '0').css('transform',' translate(25%,0)');
        answer5.css('opacity', '0').css('transform',' translate(-25%,0)');
        answer6.css('opacity', '0').css('transform',' translate(-25%,0)');
        answer7.css('opacity', '0').css('transform',' translate(25%,0)');
        answer8.css('opacity', '0').css('transform',' translate(25%,0)');
        answer9.css('opacity', '0').css('transform',' translate(25%,0)');
        answer10.css('opacity', '0').css('transform',' translate(-25%,0)');
        answer11.css('opacity', '0').css('transform',' translate(-25%,0)');
        setTimeout(() => {
        answer1.css('transition', '.4s');
     answer1.css('transform', 'translate(' + (answerWidth + 10) + 'px,-' +  (answerHeight + (answerHeight / 2))+ 'px');   
        }, 500);
      }
      else if (order == '2') {
        answer2.css('opacity', '0').css('transform',' translate(-25%,0)');
        answer3.css('opacity', '0').css('transform',' translate(-25%,0)');
        answer4.css('opacity', '0').css('transform',' translate(25%,0)');
        answer5.css('opacity', '0').css('transform',' translate(-25%,0)');
        answer6.css('opacity', '0').css('transform',' translate(25%,0)');
        answer7.css('opacity', '0').css('transform',' translate(25%,0)');
        answer8.css('opacity', '0').css('transform',' translate(-25%,0)');
        answer9.css('opacity', '0').css('transform',' translate(25%,0)');
        answer10.css('opacity', '0').css('transform',' translate(-25%,0)');
        answer11.css('opacity', '0').css('transform',' translate(25%,0)');
        setTimeout(() => {
        answer1.css('transition', '.5s');
        answer1.css('transform', 'translateY(-' + (answerHeight + (answerHeight / 2)) + 'px)');
        }, 500);
      }
     else if (order == '3') {
      answer2.css('opacity', '0').css('transform',' translate(-25%,0)');
      answer3.css('opacity', '0').css('transform',' translate(-25%,0)');
      answer4.css('opacity', '0').css('transform',' translate(-25%,0)');
      answer5.css('opacity', '0').css('transform',' translate(-25%,0)');
      answer6.css('opacity', '0').css('transform',' translate(25%,0)');
      answer7.css('opacity', '0').css('transform',' translate(25%,0)');
      answer8.css('opacity', '0').css('transform',' translate(-25%,0)');
      answer9.css('opacity', '0').css('transform',' translate(-25%,0)');
      answer10.css('opacity', '0').css('transform',' translate(25%,0)');
      answer11.css('opacity', '0').css('transform',' translate(25%,0)');
      setTimeout(() => {
      answer1.css('transition', '.4s');
   answer1.css('transform', 'translate(-' + (answerWidth + 10) + 'px,-' +  (answerHeight + (answerHeight / 2))+ 'px');   
      }, 500);
      }
    }
   else if (many == '2' && row == '4') {
      if(order == '1') {
        answer2.css('opacity', '0').css('transform',' translate(25%,0)');
      answer3.css('opacity', '0').css('transform',' translate(25%,0)');
      answer4.css('opacity', '0').css('transform',' translate(25%,0)');
      answer5.css('opacity', '0').css('transform',' translate(25%,0)');
      answer6.css('opacity', '0').css('transform',' translate(25%,0)');
      answer7.css('opacity', '0').css('transform',' translate(25%,0)');
      answer8.css('opacity', '0').css('transform',' translate(25%,0)');
      answer9.css('opacity', '0').css('transform',' translate(25%,0)');
      answer10.css('opacity', '0').css('transform',' translate(25%,0)');
      answer11.css('opacity', '0').css('transform',' translate(25%,0)');
      setTimeout(() => {
        answer1.css('transition', '.4s');
     answer1.css('transform', 'translate(' + (answerWidth / 2) + 'px,-' + (70 + (answerHeight * 2)) + 'px'); 
        }, 500);
      }
     else if(order == '2') {
      answer2.css('opacity', '0').css('transform',' translate(-25%,0)');
      answer3.css('opacity', '0').css('transform',' translate(-25%,0)');
      answer4.css('opacity', '0').css('transform',' translate(-25%,0)');
      answer5.css('opacity', '0').css('transform',' translate(-25%,0)');
      answer6.css('opacity', '0').css('transform',' translate(-25%,0)');
      answer7.css('opacity', '0').css('transform',' translate(-25%,0)');
      answer8.css('opacity', '0').css('transform',' translate(-25%,0)');
      answer9.css('opacity', '0').css('transform',' translate(-25%,0)');
      answer10.css('opacity', '0').css('transform',' translate(-25%,0)');
      answer11.css('opacity', '0').css('transform',' translate(-25%,0)');
      setTimeout(() => {
        answer1.css('transition', '.4s');
     answer1.css('transform', 'translate(-' + (answerWidth / 2) + 'px,-' + (70 + (answerHeight * 2)) + 'px');
        }, 500);
      }
    }
  }
  else {
    if (many == '3' && row == '1') {
      if (order == '1') {
        answer2.css('opacity', '0').css('transform',' translate(100px,0)');
        answer3.css('opacity', '0').css('transform',' translate(100px,0)');
        answer4.css('opacity', '0').css('transform',' translate(-100px,0)');
        answer5.css('opacity', '0').css('transform',' translate(-100px,0)');
        answer6.css('opacity', '0').css('transform',' translate(-100px,0)');
        answer7.css('opacity', '0').css('transform',' translate(100px,0)');
        answer8.css('opacity', '0').css('transform',' translate(100px,0)');
        answer9.css('opacity', '0').css('transform',' translate(100px,0)');
        answer10.css('opacity', '0').css('transform',' translate(-100px,0)');
        answer11.css('opacity', '0').css('transform',' translate(-100px,0)');
        setTimeout(() => {
        answer1.css('transition', '.4s');
     answer1.css('transform', 'translate(' + (answerWidth + 10) + 'px,' + (35 + answerHeight) + 'px');   
        }, 500);
      }
      else if (order == '2') {
        answer2.css('opacity', '0').css('transform',' translate(-100px,0)');
        answer3.css('opacity', '0').css('transform',' translate(100px,0)');
        answer4.css('opacity', '0').css('transform',' translate(-100px,0)');
        answer5.css('opacity', '0').css('transform',' translate(100px,0)');
        answer6.css('opacity', '0').css('transform',' translate(100px,0)');
        answer7.css('opacity', '0').css('transform',' translate(-100px,0)');
        answer8.css('opacity', '0').css('transform',' translate(100px,0)');
        answer9.css('opacity', '0').css('transform',' translate(100px,0)');
        answer10.css('opacity', '0').css('transform',' translate(-100px,0)');
        answer11.css('opacity', '0').css('transform',' translate(100px,0)');
        setTimeout(() => {
        answer1.css('transition', '.5s');
        answer1.css('transform', 'translateY(' + (35 + answerHeight) + 'px)');
        }, 500);
      }
     else if (order == '3') {
      answer2.css('opacity', '0').css('transform',' translate(-100px,0)');
      answer3.css('opacity', '0').css('transform',' translate(-100px,0)');
      answer4.css('opacity', '0').css('transform',' translate(100px,0)');
      answer5.css('opacity', '0').css('transform',' translate(100px,0)');
      answer6.css('opacity', '0').css('transform',' translate(100px,0)');
      answer7.css('opacity', '0').css('transform',' translate(-100px,0)');
      answer8.css('opacity', '0').css('transform',' translate(-100px,0)');
      answer9.css('opacity', '0').css('transform',' translate(-100px,0)');
      answer10.css('opacity', '0').css('transform',' translate(100px,0)');
      answer11.css('opacity', '0').css('transform',' translate(100px,0)');
      setTimeout(() => {
      answer1.css('transition', '.4s');
   answer1.css('transform', 'translate(-' + (answerWidth + 10) + 'px,' +  (35 + answerHeight)+ 'px');   
      }, 500);
      }
    }
   else if (many == '3' && row == '2') {
     answer1.css('visibility', 'visible');
      if (order == '1') {
        answer2.css('opacity', '0').css('transform',' translate(100px,0)');
        answer3.css('opacity', '0').css('transform',' translate(100px,0)');
        answer4.css('opacity', '0').css('transform',' translate(100px,0)');
        answer5.css('opacity', '0').css('transform',' translate(100px,0)');
        answer6.css('opacity', '0').css('transform',' translate(100px,0)');
        answer7.css('opacity', '0').css('transform',' translate(100px,0)');
        answer8.css('opacity', '0').css('transform',' translate(100px,0)');
        answer9.css('opacity', '0').css('transform',' translate(100px,0)');
        answer10.css('opacity', '0').css('transform',' translate(-100px,0)');
        answer11.css('opacity', '0').css('transform',' translate(-100px,0)');
        setTimeout(() => {
        answer1.css('transition', '.4s');
     answer1.css('transform', 'translate(' + (answerWidth + 10) + 'px,0');   
        }, 500);
      }
      else if (order == '2') {
        answer2.css('opacity', '0').css('transform',' translate(-100px,0)');
        answer3.css('opacity', '0').css('transform',' translate(-100px,0)');
        answer4.css('opacity', '0').css('transform',' translate(100px,0)');
        answer5.css('opacity', '0').css('transform',' translate(-100px,0)');
        answer6.css('opacity', '0').css('transform',' translate(100px,0)');
        answer7.css('opacity', '0').css('transform',' translate(-100px,0)');
        answer8.css('opacity', '0').css('transform',' translate(100px,0)');
        answer9.css('opacity', '0').css('transform',' translate(100px,0)');
        answer10.css('opacity', '0').css('transform',' translate(-100px,0)');
        answer11.css('opacity', '0').css('transform',' translate(100px,0)');
        setTimeout(() => {
        answer1.css('transition', '.5s');
        }, 500);
      }
     else if (order == '3') {
      answer2.css('opacity', '0').css('transform',' translate(-100px,0)');
      answer3.css('opacity', '0').css('transform',' translate(-100px,0)');
      answer4.css('opacity', '0').css('transform',' translate(-100px,0)');
      answer5.css('opacity', '0').css('transform',' translate(-100px,0)');
      answer6.css('opacity', '0').css('transform',' translate(-100px,0)');
      answer7.css('opacity', '0').css('transform',' translate(-100px,0)');
      answer8.css('opacity', '0').css('transform',' translate(-100px,0)');
      answer9.css('opacity', '0').css('transform',' translate(-100px,0)');
      answer10.css('opacity', '0').css('transform',' translate(100px,0)');
      answer11.css('opacity', '0').css('transform',' translate(100px,0)');
      setTimeout(() => {
      answer1.css('transition', '.4s');
   answer1.css('transform', 'translate(-' + (answerWidth + 10) + 'px,0');   
      }, 500);
      }
    }
   else if (many == '3' && row == '3') {
      if (order == '1') {
        answer2.css('opacity', '0').css('transform',' translate(100px,0)');
        answer3.css('opacity', '0').css('transform',' translate(100px,0)');
        answer4.css('opacity', '0').css('transform',' translate(100px,0)');
        answer5.css('opacity', '0').css('transform',' translate(-100px,0)');
        answer6.css('opacity', '0').css('transform',' translate(-100px,0)');
        answer7.css('opacity', '0').css('transform',' translate(100px,0)');
        answer8.css('opacity', '0').css('transform',' translate(100px,0)');
        answer9.css('opacity', '0').css('transform',' translate(100px,0)');
        answer10.css('opacity', '0').css('transform',' translate(-100px,0)');
        answer11.css('opacity', '0').css('transform',' translate(-100px,0)');
        setTimeout(() => {
        answer1.css('transition', '.4s');
     answer1.css('transform', 'translate(' + (answerWidth + 10) + 'px,-' +  (35 + answerHeight) + 'px');   
        }, 500);
      }
      else if (order == '2') {
        answer2.css('opacity', '0').css('transform',' translate(-100px,0)');
        answer3.css('opacity', '0').css('transform',' translate(-100px,0)');
        answer4.css('opacity', '0').css('transform',' translate(100px,0)');
        answer5.css('opacity', '0').css('transform',' translate(-100px,0)');
        answer6.css('opacity', '0').css('transform',' translate(100px,0)');
        answer7.css('opacity', '0').css('transform',' translate(100px,0)');
        answer8.css('opacity', '0').css('transform',' translate(-100px,0)');
        answer9.css('opacity', '0').css('transform',' translate(100px,0)');
        answer10.css('opacity', '0').css('transform',' translate(-100px,0)');
        answer11.css('opacity', '0').css('transform',' translate(100px,0)');
        setTimeout(() => {
        answer1.css('transition', '.5s');
        answer1.css('transform', 'translateY(-' + (35 + answerHeight) + 'px)');
        }, 500);
      }
     else if (order == '3') {
      answer2.css('opacity', '0').css('transform',' translate(-100px,0)');
      answer3.css('opacity', '0').css('transform',' translate(-100px,0)');
      answer4.css('opacity', '0').css('transform',' translate(-100px,0)');
      answer5.css('opacity', '0').css('transform',' translate(-100px,0)');
      answer6.css('opacity', '0').css('transform',' translate(100px,0)');
      answer7.css('opacity', '0').css('transform',' translate(100px,0)');
      answer8.css('opacity', '0').css('transform',' translate(-100px,0)');
      answer9.css('opacity', '0').css('transform',' translate(-100px,0)');
      answer10.css('opacity', '0').css('transform',' translate(100px,0)');
      answer11.css('opacity', '0').css('transform',' translate(100px,0)');
      setTimeout(() => {
      answer1.css('transition', '.4s');
   answer1.css('transform', 'translate(-' + (answerWidth + 10) + 'px,-' +  (35 + answerHeight) + 'px');   
      }, 500);
      }
    }
   else if (many == '2' && row == '4') {
      if(order == '1') {
        answer2.css('opacity', '0').css('transform',' translate(100px,0)');
      answer3.css('opacity', '0').css('transform',' translate(100px,0)');
      answer4.css('opacity', '0').css('transform',' translate(100px,0)');
      answer5.css('opacity', '0').css('transform',' translate(100px,0)');
      answer6.css('opacity', '0').css('transform',' translate(100px,0)');
      answer7.css('opacity', '0').css('transform',' translate(100px,0)');
      answer8.css('opacity', '0').css('transform',' translate(100px,0)');
      answer9.css('opacity', '0').css('transform',' translate(100px,0)');
      answer10.css('opacity', '0').css('transform',' translate(100px,0)');
      answer11.css('opacity', '0').css('transform',' translate(100px,0)');
      setTimeout(() => {
        answer1.css('transition', '.4s');
     answer1.css('transform', 'translate(' + (answerWidth / 2) + 'px,-' +  (70 + (answerHeight * 2)) + 'px');
        }, 500);
      }
     else if(order == '2') {
      answer2.css('opacity', '0').css('transform',' translate(-100px,0)');
      answer3.css('opacity', '0').css('transform',' translate(-100px,0)');
      answer4.css('opacity', '0').css('transform',' translate(-100px,0)');
      answer5.css('opacity', '0').css('transform',' translate(-100px,0)');
      answer6.css('opacity', '0').css('transform',' translate(-100px,0)');
      answer7.css('opacity', '0').css('transform',' translate(-100px,0)');
      answer8.css('opacity', '0').css('transform',' translate(-100px,0)');
      answer9.css('opacity', '0').css('transform',' translate(-100px,0)');
      answer10.css('opacity', '0').css('transform',' translate(-100px,0)');
      answer11.css('opacity', '0').css('transform',' translate(-100px,0)');
      setTimeout(() => {
        answer1.css('transition', '.4s');
     answer1.css('transform', 'translate(-' + (answerWidth / 2) + 'px,-' +  (70 + (answerHeight * 2)) + 'px'); 
        }, 500);
      }
    }
  }
  setTimeout(() => {
   answer1.css('transition', '0s');
   answer1.css('z-index', '999');
   back.css('visibility', 'visible');
   $(question_7).css('visibility', 'hidden');
   
 }, 1000);
  setTimeout(() => {
    answer2.css('visibility', 'hidden').css('z-index', '1');
    answer3.css('visibility', 'hidden').css('z-index', '1');
    answer4.css('visibility', 'hidden').css('z-index', '1');
    answer5.css('visibility', 'hidden').css('z-index', '1');
    answer6.css('visibility', 'hidden').css('z-index', '1');
    answer7.css('visibility', 'hidden').css('z-index', '1');
    answer8.css('visibility', 'hidden').css('z-index', '1');
    answer9.css('visibility', 'hidden').css('z-index', '1');
    answer10.css('visibility', 'hidden').css('z-index', '1');
    answer11.css('visibility', 'hidden').css('z-index', '1');
 }, 999);
 setTimeout(() => {
   back.css('opacity','1');
   answer1.css('transition', '1s');
 }, 1100);
}
function ahead(section_1, section_2, i) {
  setTimeout(() => {
    section_1.css('transition', '.4s');
    section_1.css('transform', 'translate(-600px,0)');
    section_1.css('opacity', '0'); 
    section_2.css('transform', 'translate(200px,0)');
    setTimeout(() => {
  section_1.addClass('active');
  section_2.removeClass('active');
  section_2.css('transition', '.5s');
  section_2.css('opacity', '0');
}, 400);
    setTimeout(() => {
 section_2.css('transform', 'translate(0,0)');
 section_2.css('opacity', '1');
 $('.main-back').css('display','inline');
 $('.back').removeClass('unclick');
}, 450);
  }, i);
}
function prev(section_1, section_2) {
  section_2.css('transition', '.4s');
  section_2.css('transform', 'translate(600px,0)');
  section_2.css('opacity', '0'); 
  section_1.css('transform', 'translate(-200px,0)');
  setTimeout(() => {
section_2.addClass('active');
section_1.removeClass('active');
section_1.css('transition', '.5s');
section_1.css('opacity', '0');
}, 400);
  setTimeout(() => {
section_1.css('transform', 'translate(0,0)');
section_1.css('opacity', '1');
$('.next').css('display','inline');
$('.footer').addClass('mt-0');
$('.back').removeClass('unclick');
}, 450);
}
});


  