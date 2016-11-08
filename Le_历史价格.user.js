// ==UserScript==
// @name        Le 历史价格
// @namespace   Le_onehome
// @include     https://item.jd.com/*
// @version     1
// @grant       none
// ==/UserScript==

$(document).ready(function(){
  xitie();
  
  
})

function xitie(){
  html = '<style>.red{color:red;font-weight:bold;}.btton{width: 100px;height: 35px;color: white !important;font-weight:bold !important;letter-spacing: 1px;background: #3385ff;border-bottom: 1px solid #2d78f4;padding-top:-1px}</style>';

  switch(window.location.host){
    case 'item.jd.com':
      
      var arr = window.location.href.split('/');
      var num = arr[arr.length-1].split('.')[0];
      var url = 'http://www.xitie.com/jd.php?no='+num;
      
      html += '<div class="btn"><a class="btton" href="'+url+'" target="_blank">历史价格</a></div>';
      $('#choose-btns').append(html);
      
      break;
  }
}