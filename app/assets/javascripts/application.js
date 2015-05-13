// This is a manifest file that'll be compiled into application.js, which will include all the files
// listed below.
//
// Any JavaScript/Coffee file within this directory, lib/assets/javascripts, vendor/assets/javascripts,
// or vendor/assets/javascripts of plugins, if any, can be referenced here using a relative path.
//
// It's not advisable to add code directly here, but if you do, it'll appear at the bottom of the
// compiled file.
//
// Read Sprockets README (https://github.com/sstephenson/sprockets#sprockets-directives) for details
// about supported directives.
//
//= require jquery
//= require jquery_ujs
//= require turbolinks
//= require bootstrap-sprockets
//= require_tree .

$(document).on('ready page:load',function(){
  menuAnim();
  markActive();
  textCounter();
})

function menuAnim(){
  $('nav ul li a').mouseenter(function(){
    if($(this).parent().attr('class')!="selected")
    {
      $(this).parent().css({border: '0 solid #B50105'}).animate({
          borderBottomWidth: 2
      }, 100);
    }
  }).mouseout(function(){
    if($(this).parent().attr('class')!="selected")
    {
      $(this).parent().animate({
        borderWidth: 0
      }, 100);
    }
    
  });
}

function markActive()
{
  var url = window.location.href;
  var result = url.substring(url.lastIndexOf("/")+1);
  
  if(result == "")
    result="bio";
    $('nav ul li').removeClass();
    $("#"+result).addClass('selected');
}

function textCounter(){
  $('#text').keyup(function(){

    var txt = $(this).val();
    var characters = txt.length;

    var words_array = txt.trim().split(" ");
    var words = words_array.length;

    $('#characters').html(characters);
    $('#words').html(words);
  })
}
