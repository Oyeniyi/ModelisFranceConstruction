$({
    countNum: $('.bar p').html()
  }).animate({
    countNum: 80
  }, {
    duration: 3000,
    easing: 'linear',
    step: function() {
      $('.bar p').html(Math.floor(this.countNum) + "%");
      $(".bar").css("width", Math.floor(this.countNum) + "%");
    },
    complete: function() {
      $('.bar p').html(this.countNum + "%");
      $('.bar').css("width", this.countNum + "%");
      // alert('finished');
    }
  });