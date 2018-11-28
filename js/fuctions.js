function answer(answer1,answer2,answer3,answer4,question) {
    answer1.css('opacity', '0');
    answer2.css('opacity', '0');
    answer3.css('opacity', '0');
    answer4.css('opacity', '0');
    question.addClass('active');
    answer1.off();
    answer2.off();
    answer3.off();
    answer4.off();
    setTimeout(() => {
    answer1.css('opacity', '1');
    answer2.css('display', 'none');
    answer3.css('display', 'none');
    answer4.css('display', 'none');
      
    }, 1000);
  } 