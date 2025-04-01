$(function () {

  // 下の固定メニューをスクロールしたら表示
$(window).on('scroll', function() {
  if ($(window).scrollTop() > $(window).height()) { 
      $('.fixed_menu').addClass('show'); 
  } else {
      $('.fixed_menu').removeClass('show'); 
  }
});

});