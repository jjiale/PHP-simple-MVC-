// ==UserScript==
// @name        Le 在线工具
// @namespace   Le_oschina
// @include     http://tool.oschina.net*
// @version     1
// @grant       none
// ==/UserScript==
$(document).ready(function(){
  var html = "<style>.inline{display:inline-block}#navi li{display:inline-block;margin-right:12px;}#navi li a{color:white;font-size:14px;}</style>";
  html += "<div id='navi' class='inline'></div>"; 
  $('#header .wrapper').append(html);
  $('#logo').addClass('inline');
  
  //navi生成
  var navi = {'JSON':'http://tool.oschina.net/codeformat/json','正则表达式':'http://tool.oschina.net/regex','UrlEncode':' http://tool.chinaz.com/Tools/URLEncode.aspx'};
  html = '';
  $.each(navi,function(k,v){
    html += '<li><a href="'+v+'">'+k+'</a></li>';
  });
  $('#navi').html(html);
  
});
