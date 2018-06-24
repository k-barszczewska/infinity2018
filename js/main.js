 $(document).ready(function(){
	 $("#let_us").click(function(){
	 if($('#let_us').hasClass('active')){
		$('#let_us').removeClass('active');
		$('#form').css('display','none')}
	 else {
	 $('#let_us').addClass('active');
	 $('#form').css('display','block')}
	 });
	 $(".pagination_dots li").click(function(){
		$(".pagination_dots li").removeClass('active');
		$(this).addClass('active');
		var element = $(this).attr('id');
		$('.client').removeClass('act');
		$('#client_' + element).addClass('act');
	 });
	 $(function() {
		$.scrollify({
		section : "section",
		});
	});
	 //$(function() {
		//  $.scrollify({
		  // A selector for the sections.
		//  section: "section.scroll-section",
		//  scrollSpeed: 1100,
		 // offset : 0,
		  //scrollbars: true,
		  //target:"html,body",
		  // A string of selectors for elements that require standard scrolling behaviour.
		  //standardScrollElements: false,
		  // Allows scrolling over overflowing content within sections
		  //overflowScroll:true,
		  // Updates the browser location hash when scrolling through sections
		 // updateHash: true,
		  // Allows to handle touch scroll events
		  /*touchScroll:true,
		  before:function() {},
		  after:function() {},
		  afterResize:function() {},
		  afterRender:function() {}*/
		  //});
	//});

		 });
		 
		 
var cookieFunction = (function(website) {

  var cookie = document.getElementById('cookie');

  website.init = function(){
    cookieInit();
  }

  cookieInit = function() {
    if (readCookie('example-cookie') === null) {
        cookie.classList.add('vis');
    }

    cookie.querySelector('.button-cookie').onclick = function(event) {
      cookie.classList.remove('vis');
      cookieFunction.eraseCookie('example-cookie');
      cookieFunction.createCookie( 'example-cookie', 'testcookie' , 7);
    };

    return false;
  };

  website.createCookie = function (name,value,days) {
    var expires;

    if (days) {
      var date = new Date();

      date.setTime(date.getTime()+(days*24*60*60*1000));
      expires = "; expires="+ date.toGMTString()
    }else expires = "";
    document.cookie = name+"="+value+expires+"; path=/";
  };

  readCookie = function (name) {
    var nameEQ = name + "=",
        ca = document.cookie.split(';');
    for(var i=0;i < ca.length;i++) {
      var c = ca[i];
      while (c.charAt(0) === ' ') c = c.substring(1,c.length);
      if (c.indexOf(nameEQ) === 0) return c.substring(nameEQ.length,c.length);
    }
    return null;
  };

  website.eraseCookie = function (name) { cookieFunction.createCookie(name,"",-1); }

  return website;

})( cookieFunction || {} );

cookieFunction.init();
