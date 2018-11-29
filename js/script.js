$(document).ready(function () {   
  var winWid = window.innerWidth;

  //переменные ответы и вопросы

  var question_1 = ' .question1 ';
  var question_2 = ' .question2 ';
  var question_3 = ' .question3 ';
  var question_4 = ' .question4 ';
  var question_5 = ' .question5 ';
  var question_6 = ' .question6 ';
  
  var answers = ' .answer ';
  var answer_1 = '.answer1';
  var answer_2 = '.answer2';
  var answer_3 = '.answer3';
  var answer_4 = '.answer4';
  var answer_5 = '.answer5';
  
  var back = ' .back';
  var back_1 = ' .back1';
  var back_2 = ' .back2';
  var back_3 = ' .back3';
  var back_4 = ' .back4';
  var back_5 = ' .back5';
  var back_6 = ' .back6';
  var back_7 = ' .back7';
  var back_8 = ' .back8';
  
  var order, many;
  
  
 var questionHeight = $(question_6).outerHeight();
 var answerHeight = $(answers).outerHeight();
 var answerHeightNoPad = $(answer_1).height();
 var answerWidth = $(answers).outerWidth();
  $(answers).click(function () {
     questionHeight = $(question_6).outerHeight();
  })
  $(answers).css('height', answerHeightNoPad + 20);
  //переменные для алгоритма
var campaign, amount, age, time;
  



$(question_3 + answers).on('click', function () { 
  if($(question_3).hasClass('off')) {
    $(question_2 + answers).addClass('off');
    setTimeout(() => {
      $(question_2 + answers).removeClass('off');
      $(question_3).removeClass('off');
    }, 1000);
  }
  else {
    return false;
  } 
 
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
$('.question6 .answer1').on('click', function () {
  if ($(question_6).hasClass('click')) {
    answer2($('.question6 .answer1'), $('.question6 .answer2'), $('.question6 .answer3'), $('.question6 .answer4'),$('.question6 .answer5'),$('.question6 .answer6'),$('.question6 .answer7'),$('.question6 .answer8'),$('.question6 .answer9'),$('.question6 .answer10'),$('.question6 .answer11'), $('.question6'),$('.question6 .answer'), $(back_6));
  }
  else {
    return false;
  }

})
$('.question6 .answer2').on('click', function () {
  if ($(question_6).hasClass('click')) {
    answer2($('.question6 .answer2'), $('.question6 .answer1'), $('.question6 .answer3'), $('.question6 .answer4'),$('.question6 .answer5'),$('.question6 .answer6'),$('.question6 .answer7'),$('.question6 .answer8'),$('.question6 .answer9'),$('.question6 .answer10'),$('.question6 .answer11'), $('.question6'),$('.question6 .answer'), $(back_6));
  }
  else {
    return false;
  }
  
})
$('.question6 .answer3').on('click', function () {
  if ($(question_6).hasClass('click')) {
    answer2($('.question6 .answer3'), $('.question6 .answer1'), $('.question6 .answer2'), $('.question6 .answer4'),$('.question6 .answer5'),$('.question6 .answer6'),$('.question6 .answer7'),$('.question6 .answer8'),$('.question6 .answer9'),$('.question6 .answer10'),$('.question6 .answer11'), $('.question6'),$('.question6 .answer'), $(back_6));
  }
  else {
    return false;
  }
  
})
$('.question6 .answer4').on('click', function () {
  if ($(question_6).hasClass('click')) {
      answer2($('.question6 .answer4'), $('.question6 .answer1'), $('.question6 .answer2'), $('.question6 .answer3'),$('.question6 .answer5'),$('.question6 .answer6'),$('.question6 .answer7'),$('.question6 .answer8'),$('.question6 .answer9'),$('.question6 .answer10'),$('.question6 .answer11'), $('.question6'),$('.question6 .answer'), $(back_6));
  }
  else {
    return false;
  }

})
$('.question6 .answer5').on('click', function () {
  if ($(question_6).hasClass('click')) {
      answer2($('.question6 .answer5'), $('.question6 .answer1'), $('.question6 .answer2'), $('.question6 .answer3'),$('.question6 .answer4'),$('.question6 .answer6'),$('.question6 .answer7'),$('.question6 .answer8'),$('.question6 .answer9'),$('.question6 .answer10'),$('.question6 .answer11'), $('.question6'),$('.question6 .answer'), $(back_7));
  }
  else {
    return false;
  }

})
$('.question6 .answer6').on('click', function () {
  if ($(question_6).hasClass('click')) {
      answer2($('.question6 .answer6'), $('.question6 .answer1'), $('.question6 .answer2'), $('.question6 .answer3'),$('.question6 .answer4'),$('.question6 .answer5'),$('.question6 .answer7'),$('.question6 .answer8'),$('.question6 .answer9'),$('.question6 .answer10'),$('.question6 .answer11'), $('.question6'),$('.question6 .answer'), $(back_7));
  }
  else {
    return false;
  }

})
$('.question6 .answer7').on('click', function () {
  if ($(question_6).hasClass('click')) {
      answer2($('.question6 .answer7'), $('.question6 .answer1'), $('.question6 .answer2'), $('.question6 .answer3'),$('.question6 .answer4'),$('.question6 .answer5'),$('.question6 .answer6'),$('.question6 .answer8'),$('.question6 .answer9'),$('.question6 .answer10'),$('.question6 .answer11'), $('.question6'),$('.question6 .answer'), $(back_7));
  }
  else {
    return false;
  }

})
$('.question6 .answer8').on('click', function () {
  if ($(question_6).hasClass('click')) {
      answer2($('.question6 .answer8'), $('.question6 .answer1'), $('.question6 .answer2'), $('.question6 .answer3'),$('.question6 .answer4'),$('.question6 .answer5'),$('.question6 .answer6'),$('.question6 .answer7'),$('.question6 .answer9'),$('.question6 .answer10'),$('.question6 .answer11'), $('.question6'),$('.question6 .answer'), $(back_7));
  }
  else {
    return false;
  }

})
$('.question6 .answer9').on('click', function () {
  if ($(question_6).hasClass('click')) {
      answer2($('.question6 .answer9'), $('.question6 .answer1'), $('.question6 .answer2'), $('.question6 .answer3'),$('.question6 .answer4'),$('.question6 .answer5'),$('.question6 .answer6'),$('.question6 .answer7'),$('.question6 .answer8'),$('.question6 .answer10'),$('.question6 .answer11'), $('.question6'),$('.question6 .answer'), $(back_8));
  }
  else {
    return false;
  }

})
$('.question6 .answer10').on('click', function () {
  if ($(question_6).hasClass('click')) {
      answer2($('.question6 .answer10'), $('.question6 .answer1'), $('.question6 .answer2'), $('.question6 .answer3'),$('.question6 .answer4'),$('.question6 .answer5'),$('.question6 .answer6'),$('.question6 .answer7'),$('.question6 .answer8'),$('.question6 .answer9'),$('.question6 .answer11'), $('.question6'),$('.question6 .answer'), $(back_8));
  }
  else {
    return false;
  }

})
$('.question6 .answer11').on('click', function () {
  if ($(question_6).hasClass('click')) {
      answer2($('.question6 .answer11'), $('.question6 .answer1'), $('.question6 .answer2'), $('.question6 .answer3'),$('.question6 .answer4'),$('.question6 .answer5'),$('.question6 .answer6'),$('.question6 .answer7'),$('.question6 .answer8'),$('.question6 .answer9'),$('.question6 .answer10'), $('.question6'),$('.question6 .answer'), $(back_8));
  }
  else {
    return false;
  }

})


/////////////////////////////////////////////////BACK///////////////////////////////////////



$(back_1).on('click', function () {
  if (!$(this).hasClass('off')) {
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
  if (!$(this).hasClass('off')) {
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
  if (!$(this).hasClass('off')) {
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
  if (!$(this).hasClass('off')) {
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
  $(question_5 + answers).css('visibility', 'visible').css('opacity', '1').css('transform', 'translate(0,0)').removeClass('go-left').removeClass('go-right');    
  $(question_5).removeClass('active');
    $(back_5).css('opacity', '0');
    $(back_5).css('visibility', 'hidden');
   $(question_5).removeClass('active');
  $(question_5).addClass('click');
})



$(back_6).on('click', function () {
  $(question_6 + answers).css('opacity', '0');
  $(question_6).removeClass('active');
    $(back_6).css('opacity', '0');
 
    setTimeout(() => {  
      $('.zxc').css('margin-bottom', $(question_6 + answer_5).css('margin-bottom'));
      $('.zxc').css('margin-top', '0px');
      $('.zxc').css('transition', '0s');
      $(question_6 + answers).css('display', 'block');
      $(back_6).css('display', 'none');
      }, 1000);
    setTimeout(() => {  
      $(question_6 + answers).css('opacity', '1');
      }, 1050);
    setTimeout(() => {  
      $('.zxc').css('transition', '1s');
      $('.zxc').removeClass('zxc');
      }, 1100);
      setTimeout(() => {  
        $(question_6).addClass('click');
        }, 1200);
})
$(back_7).on('click', function () {
  $(question_6 + answers).css('opacity', '0');
  $(question_6).removeClass('active');
    $(back_7).css('opacity', '0');
 
    setTimeout(() => {  
      $('.zxc').css('margin-bottom', $(question_6 + answers).css('margin-bottom'));
      $('.zxc').css('margin-top', '0px');
      $('.zxc').css('transition', '0s');
      $(question_6 + answers).css('display', 'block');
      $(back_7).css('display', 'none');
      }, 1000);
    setTimeout(() => {  
      $(question_6 + answers).css('opacity', '1');
      }, 1050);
    setTimeout(() => {  
      $('.zxc').css('transition', '1s');
      $('.zxc').removeClass('zxc');
      }, 1100);
      setTimeout(() => {  
        $(question_6).addClass('click');
        }, 1200);
})
$(back_8).on('click', function () {
  $(question_6 + answers).css('opacity', '0');
  $(question_6).removeClass('active');
    $(back_8).css('opacity', '0');
 
    setTimeout(() => {  
      $('.zxc').css('margin-bottom', $(question_6 + answers).css('margin-bottom'));
      $('.zxc').css('margin-top', '0px');
      $('.zxc').css('transition', '0s');
      $(question_6 + answers).css('display', 'block');
      $(back_8).css('display', 'none');
      }, 1000);
    setTimeout(() => {  
      $(question_6 + answers).css('opacity', '1');
      }, 1050);
    setTimeout(() => {  
      $('.zxc').css('transition', '1s');
      $('.zxc').removeClass('zxc');
      }, 1100);
      setTimeout(() => {  
        $(question_6).addClass('click');
        }, 1200);
})














$('.section-1 .answer').on('click', function () {
  console.log(campaign);
  console.log(time);
  console.log(amount);
  console.log(age);
  
  if ($('.question1').hasClass('active') && $('.question2').hasClass('active') && $('.question3').hasClass('active') && $('.question4').hasClass('active')) {
    $('.warning').addClass('active');
    setTimeout(() => {
      $('.warning').css('transition', '.5s').css('right', '-25%');
    }, 200);
  }
  
  if ($('.question1').hasClass('active') && $('.question2').hasClass('active') && $('.question3').hasClass('active') && $('.question4').hasClass('active') && $('.next').hasClass('active')) {
    $('.section-1').removeClass('animationBack-2');
    $('.section-2').removeClass('animationBack-1');
  $('.back').addClass('off');
     
    setTimeout(() => {
      $('.section-1').addClass('animation-1');
      $('.section-2').addClass('animation-2');
    }, 1400)
    setTimeout(() => {
      $('.section-1').addClass('active');
      $('.section-2').removeClass('active');
      $('.main-back').css('display','inline');
       $('.footer').addClass('mt-0');
       $('.back').removeClass('off');
    }, 2500)
  }
  else {
    return false;
  }
 
});



$('.main-back').on('click', function () {
   
  /* $('.next').removeClass('active');
  $('.next').removeClass('disabled');
  $('.main-back').css('display','none');
  setTimeout(() => {
    $('.section-2').addClass('animationBack-1');
      $('.section-1').addClass('animationBack-2');
  }, 1000);
  setTimeout(() => {
    $('.section-2').addClass('active');
  }, 300);
  setTimeout(() => {
    $('.section-1').removeClass('active');
  }, 400); */
  
  $('.main-back').css('display','none');
  
   $('.section-2').addClass('animationBack-1');
  setTimeout(() => {
    $('.footer').removeClass('mt-0'); 
    $('.section-1').removeClass('active');
   $('.section-1').addClass('animationBack-2');
   $('.next').removeClass('active');
  $('.next').removeClass('disabled');
  }, 500);
  setTimeout(() => {
    $('.section-2').addClass('active');
  }, 499);

 
  
  
  
});
$('.next').on('click', function () {
 
  if ($('.question1').hasClass('active') && $('.question2').hasClass('active') && $('.question3').hasClass('active') && $('.question4').hasClass('active')) {
  $('.next').addClass('active');
  }
  if ($('.question1').hasClass('active') && $('.question2').hasClass('active') && $('.question3').hasClass('active') && $('.question4').hasClass('active') && $('.next').hasClass('active')) {
  
    $('.section-1').removeClass('animationBack-2');
  $('.section-2').removeClass('animationBack-1');
  $('.next').addClass('active').addClass('disabled');
 
      $('.section-1').addClass('animation-1');
      $('.section-2').addClass('animation-2');
   
    setTimeout(() => {
      $('.section-1').addClass('active');
      $('.section-2').removeClass('active');
      $('.main-back').css('display','inline');
       $('.footer').addClass('mt-0');
    }, 500)
  }
 else if (!$('.question1').hasClass('active') || !$('.question2').hasClass('active') || !$('.question3').hasClass('active') || !$('.question4').hasClass('active') || !$('.next').hasClass('active')){
  $('.warning').addClass('active');
  setTimeout(() => {
    $('.warning').css('transition', '.5s').css('right', '1%');
  }, 200);
 }
});


/* -----------------------------------------------------ФУНКЦИИ------------------------------------------------------------------------- */





function answer (answer1, answer2, answer3, answer4, question, answer, back) {
 
    back.css('visibility', 'visible')
  question.css('position', 'relative')
  order = answer1.attr('data-order');
  many = question.attr('data-many');
  answer.css('transition', '1s');
  question.addClass('active');
  question.removeClass('click');
  if (winWid < 992) {
    if (many == '3') {
      if (order == '1') {
        answer2.css('opacity', '0').css('transform',' translate(40%,0)');
        answer3.css('opacity', '0').css('transform',' translate(40%,0)');
        setTimeout(() => {
        answer1.css('transition', '.4s');
     answer1.css('transform', 'translate(' + (answerWidth + 10) + 'px,0)');   
        }, 500);
      }
      else if (order == '2') {
        answer2.css('opacity', '0').css('transform',' translate(-40%,0)');
        answer3.css('opacity', '0').css('transform',' translate(40%,0)');
        setTimeout(() => {
        answer1.css('transition', '.5s');
     answer1.css('transform', 'translate(0,0)');   
        }, 500);
      }
     else if (order == '3') {
      answer2.css('opacity', '0').css('transform',' translate(-40%,0)');
      answer3.css('opacity', '0').css('transform',' translate(-40%,0)');
      setTimeout(() => {
      answer1.css('transition', '.5s');
   answer1.css('transform', 'translate(-' + (answerWidth + 10) + 'px,0)');   
      }, 500);
      }
    }
    if (many == '4') {
      if(order == '1') {
        answer2.css('opacity', '0').css('transform',' translate(40%,0)');
        answer3.css('opacity', '0').css('transform',' translate(40%,0)');
        answer4.css('opacity', '0').css('transform',' translateY(40%)');
        setTimeout(() => {
        answer1.css('transition', '.5s');
     answer1.css('transform', 'translate(' + (answerWidth + 10) + 'px,0)');   
        }, 500);
      }
     else if(order == '2') {
      answer2.css('opacity', '0').css('transform',' translate(-40%,0)');
      answer3.css('opacity', '0').css('transform',' translate(40%,0)');
      answer4.css('opacity', '0').css('transform',' translateY(40%)');
      setTimeout(() => {
      answer1.css('transition', '.5s');
      }, 500);
      }
     else if(order == '3') {
      answer2.css('opacity', '0').css('transform',' translate(-40%,0)');
      answer3.css('opacity', '0').css('transform',' translate(-40%,0)');
      answer4.css('opacity', '0').css('transform',' translateY(40%)');
      setTimeout(() => {
      answer1.css('transition', '.5s');
   answer1.css('transform', 'translate(-' + (answerWidth + 10) + 'px,0)');   
      }, 500);
      }
     else if(order == '4') {
      answer2.css('opacity', '0').css('transform','translate(-40%,0)');
      answer3.css('opacity', '0').css('transform','translateY(-40%)');
      answer4.css('opacity', '0').css('transform',' translate(40%,0)');
      setTimeout(() => {
      answer1.css('transition', '.5s');
   answer1.css('transform', 'translateY(-' + (answerHeight + 10) + 'px)');   
      }, 500);
      }
    }
  }
  
  else {
    if (many == '3') {
      if (order == '1') {
        answer2.css('opacity', '0').css('transform',' translate(400px,0)');
        answer3.css('opacity', '0').css('transform',' translate(400px,0)');
        setTimeout(() => {
        answer1.css('transition', '.4s');
     answer1.css('transform', 'translate(' + (answerWidth + 10) + 'px,0)');   
        }, 500);
      }
      else if (order == '2') {
        answer2.css('opacity', '0').css('transform',' translate(-400px,0)');
        answer3.css('opacity', '0').css('transform',' translate(400px,0)');
        setTimeout(() => {
        answer1.css('transition', '.5s');
     answer1.css('transform', 'translate(0,0)');   
        }, 500);
      }
     else if (order == '3') {
      answer2.css('opacity', '0').css('transform',' translate(-400px,0)');
      answer3.css('opacity', '0').css('transform',' translate(-400px,0)');
      setTimeout(() => {
      answer1.css('transition', '.5s');
   answer1.css('transform', 'translate(-' + (answerWidth + 10) + 'px,0)');   
      }, 500);
      }
    }
    if (many == '4') {
      if(order == '1') {
        answer2.css('opacity', '0').css('transform',' translate(400px,0)');
        answer3.css('opacity', '0').css('transform',' translate(400px,0)');
        answer4.css('opacity', '0').css('transform',' translate(400px,0)');
        setTimeout(() => {
        answer1.css('transition', '.5s');
     answer1.css('transform', 'translate(' + (answerWidth + 10 + (answerWidth / 2)) + 'px,0)');   
        }, 500);
      }
     else if(order == '2') {
      answer2.css('opacity', '0').css('transform',' translate(-400px,0)');
      answer3.css('opacity', '0').css('transform',' translate(400px,0)');
      answer4.css('opacity', '0').css('transform',' translate(400px,0)');
      setTimeout(() => {
      answer1.css('transition', '.5s');
   answer1.css('transform', 'translate(' +(10 + (answerWidth / 2)) + 'px,0)');   
      }, 500);
      }
     else if(order == '3') {
      answer2.css('opacity', '0').css('transform',' translate(-400px,0)');
      answer3.css('opacity', '0').css('transform',' translate(-400px,0)');
      answer4.css('opacity', '0').css('transform',' translate(400px,0)');
      setTimeout(() => {
      answer1.css('transition', '.5s');
   answer1.css('transform', 'translate(-' +(10 + (answerWidth / 2)) + 'px,0)');   
      }, 500);
      }
     else if(order == '4') {
      answer2.css('opacity', '0').css('transform',' translate(-400px,0)');
      answer3.css('opacity', '0').css('transform',' translate(-400px,0)');
      answer4.css('opacity', '0').css('transform',' translate(-400px,0)');
      setTimeout(() => {
      answer1.css('transition', '.5s');
   answer1.css('transform', 'translate(-' + (answerWidth + 10 + (answerWidth / 2)) + 'px,0)');   
      }, 500);
      }
    }
  }

  setTimeout(() => {
   answer1.css('transition', '0s');
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
  
  

  
  
  
  
  
  
 /*  answer1.css('opacity', '0');
  answer2.css('opacity', '0');
  answer3.css('opacity', '0');
  answer4.css('opacity', '0');
  question.addClass('active');
  question.removeClass('click');
  setTimeout(() => {
    answer1.css('display', 'block');
  back.css('display', 'block');
  back.css('transition', '1s');
  back.css('opacity', '1');
  answer1.css('opacity', '1');
  answer2.css('opacity', '0');
  answer3.css('opacity', '0');
  answer4.css('opacity', '0');
  answer2.css('display', 'none');
  answer3.css('display', 'none');
  answer4.css('display', 'none');
  }, 1000); */
}




function answer2(answer1,answer2,answer3,answer4,answer5,answer6,answer7,answer8,answer9,answer10,answer11,question,answer, back) {
  
  answer1.css('opacity', '0');
  answer2.css('opacity', '0');
  answer3.css('opacity', '0');
  answer4.css('opacity', '0');
  answer5.css('opacity', '0');
  answer6.css('opacity', '0');
  answer7.css('opacity', '0');
  answer8.css('opacity', '0');
  answer9.css('opacity', '0');
  answer10.css('opacity', '0');
  answer11.css('opacity', '0');
  question.addClass('active').removeClass('click');
 
  

   
  setTimeout(() => {
    answer1.css('transition', '0s');
    answer1.css('opacity', '1');
    
    answer1.css('margin-top', questionHeight * 3 / 2 - answerHeight);
    answer1.css('margin-bottom', questionHeight * 3 / 2);
    answer1.css('height', answerHeight);
    answer1.addClass('zxc');
    back.css('display', 'block');
  back.css('transition', '1s');
  back.css('opacity', '1');
  back.css('margin-top', questionHeight * 3 / 2 - answerHeight);
  }, 999);
  setTimeout(() => {
  answer2.css('display', 'none');
  answer3.css('display', 'none');
  answer4.css('display', 'none');
  answer5.css('display', 'none');
  answer6.css('display', 'none');
  answer7.css('display', 'none');
  answer8.css('display', 'none');
  answer9.css('display', 'none');
  answer10.css('display', 'none');
  answer11.css('display', 'none');
  }, 1000);
  setTimeout(() => {
    answer1.css('transition', '1s');
  }, 1100);
}
});