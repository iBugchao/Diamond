"use strict";$(function(){var n,i,e,t,c,r,l,a,s,o,h,d,u,f;!function(){var c=$("#search_ul"),n=$("#search_text").get(0);function i(){""==$("#search_text").val()?c.css("display","none"):c.css("display","block"),$.getJSON("https://sp0.baidu.com/5a1Fazu8AA54nxGko9WTAnF6hhy/su?wd="+$("#search_text").val()+"&json=1&p=3&sid=&csor=2&pwd=%20&cb=?",function(n){for(var i=n.s,e="",t=0;t<i.length;t++)e+="<li><a href=https://www.baidu.com/s?wd="+i[t]+"&rsv_spt=1&rsv_iqid=0xdd7fcd73000501b9&issp=1&f=3&rsv_bp=0&rsv_idx=2&ie=utf-8&tn=94112622_hao_pg&rsv_enter=1&rsv_sug3=3&rsv_sug1=2&rsv_sug7=100&rsv_sug2=1&prefixsug=%25E9%259D%259E&rsp=2&inputT=7756&rsv_sug4=8084>"+i[t]+"</a></li>";c.html(e)})}n.onfocus=n.oninput=function(){i()},$("#sub_search").click(function(){return i(),!1}),$("#search_text").focusout(function(){setTimeout(function(){c.css("display","none")},200)})}(),$.ajax({type:"get",url:"../json/2.json",async:!0,success:function(o){var n=$("#nav ul").eq(0),h=$("#caidan .footer").children("ul").eq(0),d=$("#caidan .footer").children("ul").eq(1),u=$("#caidan .mid").children("ul").eq(0),f=$("#caidan .top h1"),m=$("#caidan .top p"),p=$("#caidan_a"),i=!0;n.children("li").children(".a_hover").hover(function(){$("#caidan_wrap").css("display","flex");var n=$(this).text(),i="",e="",t="";f.html(n);var c=[];for(var r in o[n])c.push(r);m.html(c[0]);for(var l=0;l<o[n][c[0]].a.length;l++)i+="<li><a href='liebiao.html'>"+o[n][c[0]].a[l]+"</a></li>";for(var a=0;a<o[n][c[0]].b.length;a++)e+="<li><a href='liebiao.html'>"+o[n][c[0]].b[a]+"</a></li>";for(var s=0;s<o[n][c[0]].c.length;s++)t+="<li><a href='liebiao.html'>"+o[n][c[0]].c[s]+"</a></li>";h.html(i),d.html(e),u.html(t),p.children("img").attr("src","img/"+o[n][c[1]])},function(){0==i&&$("#caidan_wrap").css("display","none")}),$("#caidan_wrap").hover(function(){i=!1},function(){i=!0,$("#caidan_wrap").css("display","none")})}}),$.ajax({type:"get",url:"../json/1.json",async:!0,dataType:"json",success:function(e){var n=$("#main5 #province ul"),t=$("#main5 #mendian ul");for(var i in e)n.append("<li><a href='#'>"+i+"</a>");var c=$("#main5 #province ul li");for(var r in c.children().eq(0).css("color","red").parent().siblings().children("a").css("color","black"),e[c.children().eq(0).text()])t.append("<li><a href='#'>"+r+"</a>");var l=void 0;c.mouseover(function(){for(var n in $(this).children("a").css("color","red").parent().siblings().children("a").css("color","black"),l=$(this).text(),t.html(""),e[l])t.append("<li><a href='#'>"+n+"</a>");var i=$("#main5 #mendian ul li");i.children().eq(0).css("color","red").parent().siblings().children("a").css("color","black"),$("#info").children().eq(0).html(e[l][i.children().eq(0).text()][0]).parent().children().eq(2).html(e[l][i.children().eq(0).text()][1]).parent().children().eq(3).children("span").html(e[l][i.children().eq(0).text()][2]),i.mouseover(function(){$(this).children("a").css("color","red").parent().siblings().children("a").css("color","black");var n=$(this).text();$("#info").children().eq(0).html(e[l][n][0]).parent().children().eq(2).html(e[l][n][1]).parent().children().eq(3).children("span").html(e[l][n][2])})})}}),$("#sendAds").focus(function(){$(this).next().css("opacity","1")}),$("#sendAds").blur(function(){""==$(this).val()&&$(this).next().css("opacity","0")}),$(".flicker").mouseover(function(){$(this).animate({opacity:.8},200),$(this).animate({opacity:1},200)}),function(){var n=$("#img_box ul").eq(0),i=0;n.css("width",n.children().eq(0).innerWidth()*n.children().length+200);var e=function(){n.animate({left:-n.children().eq(0).innerWidth()*i},500),0!=i?$("#main3 .turn_left").css("background-position-x","0"):$("#main3 .turn_left").css("background-position-x","-36px"),i==n.children().length-4?$("#main3 .turn_right").css("background-position-x","-36px"):$("#main3 .turn_right").css("background-position-x","0")};$("#main3 .turn_left").click(function(){0!=i&&(i--,e())}),$("#main3 .turn_right").click(function(){i!=n.children().length-4&&(i++,e())}),n.children("li").children().children().mouseover(function(){$(this).animate({"margin-top":"-30px"},500)}),n.children("li").children().children().mouseout(function(){$(this).animate({"margin-top":"0"},500)})}(),n=0,i=$("#ul1_lunbo"),e=$("#ul2_lunbo"),t=function(){-1==n&&(n=i.children().length-1),n==i.children().length&&(n=0),i.children().css("display","none"),i.children().eq(n).fadeIn(),e.children().css("background-color","#c7b6b6").eq(n).css("background-color","#ff8a81")},c=setInterval(function(){n++,t()},3e3),$(".turn_left").click(function(){n--,t()}),$(".turn_right").click(function(){n++,t()}),$("#banner").hover(function(){clearInterval(c)},function(){c=setInterval(function(){n++,t()},3e3)}),e.children().mousemove(function(){n=$(this).index(),t()}),r=0,l=$("#m1_left ul"),a=function(){r==l.children().length&&(r=0),l.children().css("display","none"),l.children().eq(r).fadeIn()},s=setInterval(function(){r++,a()},3e3),l.mouseover(function(){clearInterval(s)}),l.mouseout(function(){s=setInterval(function(){r++,a()},3e3)}),function(){var i=0;function n(){$.ajax({type:"get",url:"../json/3.json",success:function(n){$("#img111").attr("src",n[i].a),$("#img222").attr("src",n[i].b),$("#img333").attr("src",n[i].c)}})}n(),$("#m2_nav").children("a").hover(function(){$(this).css("color","#666666").siblings().css("color","white"),i=$(this).index(),n()})}(),o=$("#m5_content ul").eq(0),h=$("#m5_content ul").eq(1),d=0,u=function(){d==o.children("li").length&&(o.css("left","0"),d=1),d==o.children("li").length-1?h.children("li").eq(0).addClass("li_tored").siblings().removeClass("li_tored"):h.children("li").eq(d).addClass("li_tored").siblings().removeClass("li_tored"),-1==d&&(d=o.children("li").length-1),o.stop(),o.animate({left:-o.children("li").eq(0).innerWidth()*d},1e3)},f=setInterval(function(){d++,u()},3e3),$("#m5_content .lunbo").hover(function(){clearInterval(f)},function(){f=setInterval(function(){d++,u()},3e3)}),h.children("li").mouseover(function(){d=$(this).index(),u()}),setInterval(function(){$("#main6 .right img").animate({left:"-1000px"},200),$("#main6 .right img").animate({left:"0"},100)},3e3)});
//# sourceMappingURL=data:application/json;charset=utf8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImluZGV4LmpzIl0sIm5hbWVzIjpbIiQiLCJtb3ZlIiwiJHVsMSIsImluZGV4IiwidGltZXIiLCIkdWwyIiwiJHVsIiwib1RleHQiLCJnZXQiLCJ2YWwiLCJjc3MiLCJkYXRhIiwib0RhdGEiLCJzIiwiZ2V0SlNPTiIsImxlbmd0aCIsImkiLCJzdHIiLCJvbmlucHV0IiwiZm9jdXNvdXQiLCJzZXRUaW1lb3V0IiwiYWpheCIsInR5cGUiLCJ1cmwiLCJhc3luYyIsImVxIiwic3VjY2VzcyIsImNoaWxkcmVuIiwiJHVsMyIsIiR1bDQiLCIkaDEiLCIkcDEiLCIkYTEiLCJob3ZlciIsInRoaXMiLCJ0ZXh0Iiwic3RyMSIsInN0cjIiLCJzdHIzIiwiaHRtbCIsIml0ZW0iLCJuZXdBcnIiLCJwdXNoIiwiYSIsImIiLCJjIiwiYXR0ciIsImZsYWciLCJkYXRhVHlwZSIsImFwcGVuZCIsImxpMXMiLCJwYXJlbnQiLCJzaWJsaW5ncyIsIm1vdXNlb3ZlciIsImxpMnMiLCJtZW5kaWFuVmFsIiwiYmx1ciIsIm5leHQiLCJhbmltYXRlIiwib3BhY2l0eSIsImlubmVyV2lkdGgiLCJsZWZ0IiwiY2xpY2siLCJtb3VzZW91dCIsIm1hcmdpbi10b3AiLCJzZXRJbnRlcnZhbCIsImZhZGVJbiIsImNsZWFySW50ZXJ2YWwiLCJtb3VzZW1vdmUiLCJhZGRDbGFzcyIsInJlbW92ZUNsYXNzIl0sIm1hcHBpbmdzIjoiYUFBQUEsRUFBRSxXQWtNQSxJQUNJQyxFQUNIQyxFQUNDQyxFQUNBRixFQVdBRyxFQTJCREQsRUFDQ0EsRUFDQUYsRUFPQUcsRUF1Q0VILEVBQ0hJLEVBQ0NDLEVBQ0FILEVBZ0JBQyxHQS9TSkosV0FDQyxJQUFBTSxFQUFBTixFQUFBLGNBQ0NPLEVBQVVQLEVBQUEsZ0JBQUFRLElBQUEsR0FRVCxTQUFPUCxJQUZSLElBQUFELEVBQUEsZ0JBQUFTLE1BSUFILEVBQUFJLElBQVNULFVBQU0sUUFFYkssRUFBSUksSUFBSSxVQUFSLFNBRUFKLEVBQUFBLFFBQVEsMkRB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QUEsV0FJQWpFLElBQ0NtRSxLQURELEtBR0MvRCxFQUFBQSxzQkFBb0I2QixNQUFBLFdBQ25COUIsY0FBQUEsSUFDQUYsV0FDQUcsRUFIRDZELFlBQUEsV0FIRDlELElBUUFFLEtBQ0NGLE9BRUFFLEVBSERzQixTQUFBLE1BQUEwQixVQUFBLFdBaENEbEQsRUFBQUgsRUFBQWtDLE1BQUEvQixRQXFDQUYsTUFFQ2dFLFlBQUEsV0FERGpFLEVBQUEscUJBQUEwRCxRQUFBLENBQUFHLEtBQUEsV0FBQSxLQTlURDdELEVBQUEscUJBQUEwRCxRQUFBLENBQUFHLEtBQUEsS0FBQSxNQWtVSSIsImZpbGUiOiJpbmRleC5qcyIsInNvdXJjZXNDb250ZW50IjpbIiQoZnVuY3Rpb24oKXtcclxuXHQvL+aQnOe0ouahhlxyXG5cdChmdW5jdGlvbigpe1xyXG5cdFx0bGV0ICR1bCA9ICQoXCIjc2VhcmNoX3VsXCIpO1xyXG5cdFx0bGV0IG9UZXh0ID0gJChcIiNzZWFyY2hfdGV4dFwiKS5nZXQoMCk7XHJcblx0XHRvVGV4dC5vbmZvY3VzID0gb1RleHQub25pbnB1dCA9IGZ1bmN0aW9uKCl7XHJcblx0XHRcdG1vdmUoKTtcclxuXHRcdH1cclxuXHRcdCQoXCIjc3ViX3NlYXJjaFwiKS5jbGljayhmdW5jdGlvbigpe1xyXG5cdFx0XHRtb3ZlKCk7XHJcblx0XHRcdHJldHVybiBmYWxzZTtcclxuXHRcdH0pXHJcblx0XHRmdW5jdGlvbiBtb3ZlKCl7XHJcblx0XHRcdGlmKCQoXCIjc2VhcmNoX3RleHRcIikudmFsKCk9PVwiXCIpe1xyXG5cdFx0XHRcdCR1bC5jc3MoXCJkaXNwbGF5XCIsXCJub25lXCIpO1xyXG5cdFx0XHR9ZWxzZXtcclxuXHRcdFx0XHQkdWwuY3NzKFwiZGlzcGxheVwiLFwiYmxvY2tcIik7XHJcblx0XHRcdH1cclxuXHRcdFx0JC5nZXRKU09OKFwiaHR0cHM6Ly9zcDAuYmFpZHUuY29tLzVhMUZhenU4QUE1NG54R2tvOVdUQW5GNmhoeS9zdT93ZD1cIiskKFwiI3NlYXJjaF90ZXh0XCIpLnZhbCgpK1wiJmpzb249MSZwPTMmc2lkPSZjc29yPTImcHdkPSUyMCZjYj0/XCIsZnVuY3Rpb24oZGF0YSl7XHJcblx0XHRcdFx0bGV0IG9EYXRhID0gZGF0YS5zOyBcclxuXHRcdFx0XHRsZXQgc3RyID0gXCJcIjtcclxuXHRcdFx0XHRmb3IobGV0IGk9MDtpPG9EYXRhLmxlbmd0aDtpKyspe1xyXG5cdFx0XHRcdFx0c3RyICs9IFwiPGxpPjxhIGhyZWY9aHR0cHM6Ly93d3cuYmFpZHUuY29tL3M/d2Q9XCIrb0RhdGFbaV0rXCImcnN2X3NwdD0xJnJzdl9pcWlkPTB4ZGQ3ZmNkNzMwMDA1MDFiOSZpc3NwPTEmZj0zJnJzdl9icD0wJnJzdl9pZHg9MiZpZT11dGYtOCZ0bj05NDExMjYyMl9oYW9fcGcmcnN2X2VudGVyPTEmcnN2X3N1ZzM9MyZyc3Zfc3VnMT0yJnJzdl9zdWc3PTEwMCZyc3Zfc3VnMj0xJnByZWZpeHN1Zz0lMjVFOSUyNTlEJTI1OUUmcnNwPTImaW5wdXRUPTc3NTYmcnN2X3N1ZzQ9ODA4ND5cIitvRGF0YVtpXStcIjwvYT48L2xpPlwiO1xyXG5cdFx0XHRcdH1cclxuXHRcdFx0XHQkdWwuaHRtbChzdHIpO1xyXG5cdFx0XHR9KVxyXG5cdFx0fVxyXG5cdFx0JChcIiNzZWFyY2hfdGV4dFwiKS5mb2N1c291dChmdW5jdGlvbigpe1xyXG5cdFx0XHRzZXRUaW1lb3V0KGZ1bmN0aW9uKCl7XHJcblx0XHRcdFx0JHVsLmNzcyhcImRpc3BsYXlcIixcIm5vbmVcIik7XHJcblx0XHRcdH0sMjAwKTtcclxuXHRcdH0pXHJcblx0fSkoKTtcclxuXHRcclxuXHQvL+S6jOe6p+iPnOWNleaVsOaNrlxyXG5cdChmdW5jdGlvbigpe1xyXG5cdFx0JC5hamF4KHtcblx0XHRcdHR5cGU6XCJnZXRcIixcblx0XHRcdHVybDpcIi4uL2pzb24vMi5qc29uXCIsXG5cdFx0XHRhc3luYzp0cnVlLFxyXG5cdFx0XHRzdWNjZXNzOmZ1bmN0aW9uKGRhdGEpe1xyXG5cdFx0XHRcdGxldCAkdWwxID0gJChcIiNuYXYgdWxcIikuZXEoMCk7XHJcblx0XHRcdFx0bGV0ICR1bDIgPSAkKFwiI2NhaWRhbiAuZm9vdGVyXCIpLmNoaWxkcmVuKFwidWxcIikuZXEoMCk7XHJcblx0XHRcdFx0bGV0ICR1bDMgPSAkKFwiI2NhaWRhbiAuZm9vdGVyXCIpLmNoaWxkcmVuKFwidWxcIikuZXEoMSk7XHJcblx0XHRcdFx0bGV0ICR1bDQgPSAkKFwiI2NhaWRhbiAubWlkXCIpLmNoaWxkcmVuKFwidWxcIikuZXEoMCk7XHJcblx0XHRcdFx0bGV0ICRoMSA9ICQoXCIjY2FpZGFuIC50b3AgaDFcIik7XHJcblx0XHRcdFx0bGV0ICRwMSA9ICQoXCIjY2FpZGFuIC50b3AgcFwiKTtcclxuXHRcdFx0XHRsZXQgJGExID0gJChcIiNjYWlkYW5fYVwiKTtcclxuXHRcdFx0XHRsZXQgZmxhZyA9IHRydWU7XHJcblx0XHRcdFx0JHVsMS5jaGlsZHJlbihcImxpXCIpLmNoaWxkcmVuKFwiLmFfaG92ZXJcIikuaG92ZXIoZnVuY3Rpb24oKXtcclxuXHRcdFx0XHRcdCQoXCIjY2FpZGFuX3dyYXBcIikuY3NzKFwiZGlzcGxheVwiLCdmbGV4Jyk7XHJcblx0XHRcdFx0XHRsZXQgdmFsID0gJCh0aGlzKS50ZXh0KCk7XHJcblx0XHRcdFx0XHRsZXQgc3RyMSA9IFwiXCI7XHJcblx0XHRcdFx0XHRsZXQgc3RyMiA9IFwiXCI7XHJcblx0XHRcdFx0XHRsZXQgc3RyMyA9IFwiXCI7XHJcblx0XHRcdFx0XHQkaDEuaHRtbCh2YWwpO1xyXG5cdFx0XHRcdFx0bGV0IG5ld0FyciA9IFtdO1xyXG5cdFx0XHRcdFx0Zm9yKGxldCBpdGVtIGluIGRhdGFbdmFsXSl7XHJcblx0XHRcdFx0XHRcdG5ld0Fyci5wdXNoKGl0ZW0pO1xyXG5cdFx0XHRcdFx0fVxyXG5cdFx0XHRcdFx0JHAxLmh0bWwobmV3QXJyWzBdKTtcclxuXHRcdFx0XHRcdGZvcihsZXQgaT0wO2k8ZGF0YVt2YWxdW25ld0FyclswXV0uYS5sZW5ndGg7aSsrKXtcclxuXHRcdFx0XHRcdFx0c3RyMSs9XCI8bGk+PGEgaHJlZj0nbGllYmlhby5odG1sJz5cIitkYXRhW3ZhbF1bbmV3QXJyWzBdXS5hW2ldK1wiPC9hPjwvbGk+XCI7XHJcblx0XHRcdFx0XHR9XHJcblx0XHRcdFx0XHRmb3IobGV0IGk9MDtpPGRhdGFbdmFsXVtuZXdBcnJbMF1dLmIubGVuZ3RoO2krKyl7XHJcblx0XHRcdFx0XHRcdHN0cjIrPVwiPGxpPjxhIGhyZWY9J2xpZWJpYW8uaHRtbCc+XCIrZGF0YVt2YWxdW25ld0FyclswXV0uYltpXStcIjwvYT48L2xpPlwiO1xyXG5cdFx0XHRcdFx0fVxyXG5cdFx0XHRcdFx0Zm9yKGxldCBpPTA7aTxkYXRhW3ZhbF1bbmV3QXJyWzBdXS5jLmxlbmd0aDtpKyspe1xyXG5cdFx0XHRcdFx0XHRzdHIzKz1cIjxsaT48YSBocmVmPSdsaWViaWFvLmh0bWwnPlwiK2RhdGFbdmFsXVtuZXdBcnJbMF1dLmNbaV0rXCI8L2E+PC9saT5cIjtcclxuXHRcdFx0XHRcdH1cclxuXHRcdFx0XHRcdCR1bDIuaHRtbChzdHIxKTtcclxuXHRcdFx0XHRcdCR1bDMuaHRtbChzdHIyKTtcclxuXHRcdFx0XHRcdCR1bDQuaHRtbChzdHIzKTtcclxuXHRcdFx0XHRcdCRhMS5jaGlsZHJlbihcImltZ1wiKS5hdHRyKFwic3JjXCIsXCJpbWcvXCIrZGF0YVt2YWxdW25ld0FyclsxXV0pO1xyXG5cdFx0XHRcdH0sZnVuY3Rpb24oKXtcclxuXHRcdFx0XHRcdGlmKGZsYWc9PWZhbHNlKXtcclxuXHRcdFx0XHRcdFx0JChcIiNjYWlkYW5fd3JhcFwiKS5jc3MoXCJkaXNwbGF5XCIsJ25vbmUnKTtcclxuXHRcdFx0XHRcdH1cclxuXHRcdFx0XHR9KVxyXG5cdFx0XHRcdCQoXCIjY2FpZGFuX3dyYXBcIikuaG92ZXIoZnVuY3Rpb24oKXtcclxuXHRcdFx0XHRcdGZsYWc9ZmFsc2U7XHJcblx0XHRcdFx0fSxmdW5jdGlvbigpe1xyXG5cdFx0XHRcdFx0ZmxhZz10cnVlO1xyXG5cdFx0XHRcdFx0JChcIiNjYWlkYW5fd3JhcFwiKS5jc3MoXCJkaXNwbGF5XCIsJ25vbmUnKTtcclxuXHRcdFx0XHR9KVxyXG5cdFx0XHRcdFxyXG5cdFx0XHR9XG5cdFx0fSk7XHJcblx0fSkoKTtcclxuXHRcclxuXHQvL+ecgeS7vei9ruaSrVxyXG5cdChmdW5jdGlvbigpe1xyXG5cdFx0JC5hamF4KHtcblx0XHRcdHR5cGU6XCJnZXRcIixcblx0XHRcdHVybDpcIi4uL2pzb24vMS5qc29uXCIsXG5cdFx0XHRhc3luYzp0cnVlLFxyXG5cdFx0XHRkYXRhVHlwZTpcImpzb25cIixcclxuXHRcdFx0c3VjY2VzczpmdW5jdGlvbihkYXRhKXtcclxuXHRcdFx0XHRsZXQgJHVsMSA9ICQoXCIjbWFpbjUgI3Byb3ZpbmNlIHVsXCIpO1xyXG5cdFx0XHRcdGxldCAkdWwyID0gJChcIiNtYWluNSAjbWVuZGlhbiB1bFwiKTtcclxuXHRcdFx0XHRmb3IobGV0IGl0ZW0gaW4gZGF0YSl7XHJcblx0XHRcdFx0XHQkdWwxLmFwcGVuZChcIjxsaT48YSBocmVmPScjJz5cIitpdGVtK1wiPC9hPlwiKTtcclxuXHRcdFx0XHR9XHJcblx0XHRcdFx0bGV0IGxpMXMgPSAkKFwiI21haW41ICNwcm92aW5jZSB1bCBsaVwiKTtcclxuXHRcdFx0XHRsaTFzLmNoaWxkcmVuKCkuZXEoMCkuY3NzKFwiY29sb3JcIixcInJlZFwiKS5wYXJlbnQoKS5zaWJsaW5ncygpLmNoaWxkcmVuKFwiYVwiKS5jc3MoXCJjb2xvclwiLFwiYmxhY2tcIik7XHJcblx0XHRcdFx0Zm9yKGxldCBpdGVtIGluIGRhdGFbbGkxcy5jaGlsZHJlbigpLmVxKDApLnRleHQoKV0pe1xyXG5cdFx0XHRcdFx0XHQkdWwyLmFwcGVuZChcIjxsaT48YSBocmVmPScjJz5cIitpdGVtK1wiPC9hPlwiKTtcclxuXHRcdFx0XHR9XHJcblx0XHRcdFx0bGV0IHZhbDtcclxuXHRcdFx0XHQvL+ecgeS7vea7keWKqFxyXG5cdFx0XHRcdGxpMXMubW91c2VvdmVyKGZ1bmN0aW9uKCl7XHJcblx0XHRcdFx0XHQkKHRoaXMpLmNoaWxkcmVuKFwiYVwiKS5jc3MoXCJjb2xvclwiLFwicmVkXCIpLnBhcmVudCgpLnNpYmxpbmdzKCkuY2hpbGRyZW4oXCJhXCIpLmNzcyhcImNvbG9yXCIsXCJibGFja1wiKTtcclxuXHRcdFx0XHRcdHZhbCA9ICQodGhpcykudGV4dCgpO1xyXG5cdFx0XHRcdFx0JHVsMi5odG1sKFwiXCIpO1xyXG5cdFx0XHRcdFx0Zm9yKGxldCBpdGVtIGluIGRhdGFbdmFsXSl7XHJcblx0XHRcdFx0XHRcdCR1bDIuYXBwZW5kKFwiPGxpPjxhIGhyZWY9JyMnPlwiK2l0ZW0rXCI8L2E+XCIpO1xyXG5cdFx0XHRcdFx0fVxyXG5cdFx0XHRcdFx0bGV0IGxpMnMgPSAkKFwiI21haW41ICNtZW5kaWFuIHVsIGxpXCIpO1xyXG5cdFx0XHRcdFx0bGkycy5jaGlsZHJlbigpLmVxKDApLmNzcyhcImNvbG9yXCIsXCJyZWRcIikucGFyZW50KCkuc2libGluZ3MoKS5jaGlsZHJlbihcImFcIikuY3NzKFwiY29sb3JcIixcImJsYWNrXCIpO1xyXG5cdFx0XHRcdFx0JChcIiNpbmZvXCIpLmNoaWxkcmVuKCkuZXEoMCkuaHRtbChkYXRhW3ZhbF1bbGkycy5jaGlsZHJlbigpLmVxKDApLnRleHQoKV1bMF0pXHJcblx0XHRcdFx0XHRcdC5wYXJlbnQoKS5jaGlsZHJlbigpLmVxKDIpLmh0bWwoZGF0YVt2YWxdW2xpMnMuY2hpbGRyZW4oKS5lcSgwKS50ZXh0KCldWzFdKVxyXG5cdFx0XHRcdFx0XHQucGFyZW50KCkuY2hpbGRyZW4oKS5lcSgzKS5jaGlsZHJlbihcInNwYW5cIikuaHRtbChkYXRhW3ZhbF1bbGkycy5jaGlsZHJlbigpLmVxKDApLnRleHQoKV1bMl0pO1xyXG5cdFx0XHRcdFx0Ly/luILnuqfpl6jlupfmu5HliqhcclxuXHRcdFx0XHRcdGxpMnMubW91c2VvdmVyKGZ1bmN0aW9uKCl7XHJcblx0XHRcdFx0XHRcdCQodGhpcykuY2hpbGRyZW4oXCJhXCIpLmNzcyhcImNvbG9yXCIsXCJyZWRcIikucGFyZW50KCkuc2libGluZ3MoKS5jaGlsZHJlbihcImFcIikuY3NzKFwiY29sb3JcIixcImJsYWNrXCIpO1xyXG5cdFx0XHRcdFx0XHRsZXQgbWVuZGlhblZhbCA9ICQodGhpcykudGV4dCgpO1xyXG5cdFx0XHRcdFx0XHQkKFwiI2luZm9cIikuY2hpbGRyZW4oKS5lcSgwKS5odG1sKGRhdGFbdmFsXVttZW5kaWFuVmFsXVswXSlcclxuXHRcdFx0XHRcdFx0LnBhcmVudCgpLmNoaWxkcmVuKCkuZXEoMikuaHRtbChkYXRhW3ZhbF1bbWVuZGlhblZhbF1bMV0pXHJcblx0XHRcdFx0XHRcdC5wYXJlbnQoKS5jaGlsZHJlbigpLmVxKDMpLmNoaWxkcmVuKFwic3BhblwiKS5odG1sKGRhdGFbdmFsXVttZW5kaWFuVmFsXVsyXSk7XHJcblx0XHRcdFx0XHR9KVxyXG5cdFx0XHRcdH0pXHJcblx0XHRcdH1cclxuXHRcdH0pO1xyXG5cdFx0Ly/lj5HpgIHlnLDlnYBcclxuXHRcdCQoXCIjc2VuZEFkc1wiKS5mb2N1cyhmdW5jdGlvbigpe1xyXG5cdFx0XHQkKHRoaXMpLm5leHQoKS5jc3MoXCJvcGFjaXR5XCIsXCIxXCIpO1xyXG5cdFx0fSlcclxuXHRcdCQoXCIjc2VuZEFkc1wiKS5ibHVyKGZ1bmN0aW9uKCl7XHJcblx0XHRcdGlmKCQodGhpcykudmFsKCk9PVwiXCIpe1xyXG5cdFx0XHRcdCQodGhpcykubmV4dCgpLmNzcyhcIm9wYWNpdHlcIixcIjBcIik7XHJcblx0XHRcdH1cclxuXHRcdH0pXHJcblx0fSkoKTtcclxuXHRcclxuXHQvL+WbvueJh+WIkui/h+mXquS4gOS4i1xyXG5cdChmdW5jdGlvbigpe1xyXG5cdFx0JChcIi5mbGlja2VyXCIpLm1vdXNlb3ZlcihmdW5jdGlvbigpe1xyXG5cdFx0XHQkKHRoaXMpLmFuaW1hdGUoe29wYWNpdHk6MC44fSwyMDApO1xyXG5cdFx0XHQkKHRoaXMpLmFuaW1hdGUoe29wYWNpdHk6MX0sMjAwKTtcclxuXHRcdH0pXHJcblx0fSkoKTtcclxuXHRcclxuXHQvL+mSu+efs+WIl+ihqOS4iuS4i+a1ruWKqOWKoOW3puWPs+enu+WKqOeJueaViFxyXG5cdChmdW5jdGlvbigpe1xyXG5cdFx0bGV0ICR1bCA9ICQoXCIjaW1nX2JveCB1bFwiKS5lcSgwKTtcclxuXHRcdGxldCBpbmRleCA9IDA7XHJcblx0XHQkdWwuY3NzKFwid2lkdGhcIiwkdWwuY2hpbGRyZW4oKS5lcSgwKS5pbm5lcldpZHRoKCkqJHVsLmNoaWxkcmVuKCkubGVuZ3RoKzIwMCk7XHJcblx0XHRsZXQgbW92ZT0oKT0+e1xyXG5cdFx0XHQkdWwuYW5pbWF0ZSh7bGVmdDotJHVsLmNoaWxkcmVuKCkuZXEoMCkuaW5uZXJXaWR0aCgpKmluZGV4fSw1MDApO1xyXG5cdFx0XHRpZihpbmRleCE9MCl7XHJcblx0XHRcdFx0JChcIiNtYWluMyAudHVybl9sZWZ0XCIpLmNzcyhcImJhY2tncm91bmQtcG9zaXRpb24teFwiLFwiMFwiKTtcclxuXHRcdFx0fWVsc2V7XHJcblx0XHRcdFx0JChcIiNtYWluMyAudHVybl9sZWZ0XCIpLmNzcyhcImJhY2tncm91bmQtcG9zaXRpb24teFwiLFwiLTM2cHhcIik7XHJcblx0XHRcdH1cclxuXHRcdFx0aWYoaW5kZXg9PSR1bC5jaGlsZHJlbigpLmxlbmd0aC00KXtcclxuXHRcdFx0XHQkKFwiI21haW4zIC50dXJuX3JpZ2h0XCIpLmNzcyhcImJhY2tncm91bmQtcG9zaXRpb24teFwiLFwiLTM2cHhcIik7XHJcblx0XHRcdH1lbHNle1xyXG5cdFx0XHRcdCQoXCIjbWFpbjMgLnR1cm5fcmlnaHRcIikuY3NzKFwiYmFja2dyb3VuZC1wb3NpdGlvbi14XCIsXCIwXCIpO1xyXG5cdFx0XHR9XHJcblx0XHR9XHJcblx0XHQkKFwiI21haW4zIC50dXJuX2xlZnRcIikuY2xpY2soZnVuY3Rpb24oKXtcclxuXHRcdFx0aWYoaW5kZXghPTApe1xyXG5cdFx0XHRcdGluZGV4LS07XHJcblx0XHRcdFx0bW92ZSgpO1xyXG5cdFx0XHR9XHJcblx0XHR9KVxyXG5cdFx0JChcIiNtYWluMyAudHVybl9yaWdodFwiKS5jbGljayhmdW5jdGlvbigpe1xyXG5cdFx0XHRpZihpbmRleCE9JHVsLmNoaWxkcmVuKCkubGVuZ3RoLTQpe1xyXG5cdFx0XHRcdGluZGV4Kys7XHJcblx0XHRcdFx0bW92ZSgpO1xyXG5cdFx0XHR9XHJcblx0XHR9KVxyXG5cdFx0JHVsLmNoaWxkcmVuKFwibGlcIikuY2hpbGRyZW4oKS5jaGlsZHJlbigpLm1vdXNlb3ZlcihmdW5jdGlvbigpe1xyXG5cdFx0XHQkKHRoaXMpLmFuaW1hdGUoe1wibWFyZ2luLXRvcFwiOlwiLTMwcHhcIn0sNTAwKTtcclxuXHRcdH0pXHJcblx0XHQkdWwuY2hpbGRyZW4oXCJsaVwiKS5jaGlsZHJlbigpLmNoaWxkcmVuKCkubW91c2VvdXQoZnVuY3Rpb24oKXtcclxuXHRcdFx0JCh0aGlzKS5hbmltYXRlKHtcIm1hcmdpbi10b3BcIjpcIjBcIn0sNTAwKTtcclxuXHRcdH0pXHJcblx0fSkoKTtcclxuXHRcclxuXHQvL+Wkp+Wbvui9ruaSrVxyXG5cdChmdW5jdGlvbigpe1xyXG5cdFx0bGV0IGluZGV4ID0gMDtcclxuXHRcdGxldCAkdWwxID0gJChcIiN1bDFfbHVuYm9cIik7XHJcblx0XHRsZXQgJHVsMiA9ICQoXCIjdWwyX2x1bmJvXCIpO1xyXG5cdFx0bGV0IG1vdmUgPSAoKT0+e1xyXG5cdFx0XHRpZihpbmRleD09LTEpe1xyXG5cdFx0XHRcdGluZGV4PSR1bDEuY2hpbGRyZW4oKS5sZW5ndGgtMTtcclxuXHRcdFx0fVxyXG5cdFx0XHRpZihpbmRleD09JHVsMS5jaGlsZHJlbigpLmxlbmd0aCl7XHJcblx0XHRcdFx0aW5kZXg9MDtcclxuXHRcdFx0fVxyXG5cdFx0XHQkdWwxLmNoaWxkcmVuKCkuY3NzKFwiZGlzcGxheVwiLFwibm9uZVwiKTtcclxuXHRcdFx0JHVsMS5jaGlsZHJlbigpLmVxKGluZGV4KS5mYWRlSW4oKTtcclxuXHRcdFx0JHVsMi5jaGlsZHJlbigpLmNzcyhcImJhY2tncm91bmQtY29sb3JcIixcIiNjN2I2YjZcIikuZXEoaW5kZXgpLmNzcyhcImJhY2tncm91bmQtY29sb3JcIixcIiNmZjhhODFcIik7XHJcblx0XHR9XHJcblx0XHRsZXQgdGltZXIgPSBzZXRJbnRlcnZhbChmdW5jdGlvbigpe1xyXG5cdFx0XHRpbmRleCsrO1xyXG5cdFx0XHRtb3ZlKCk7XHJcblx0XHR9LDMwMDApO1xyXG5cdFx0JChcIi50dXJuX2xlZnRcIikuY2xpY2soZnVuY3Rpb24oKXtcclxuXHRcdFx0aW5kZXgtLTtcclxuXHRcdFx0bW92ZSgpO1xyXG5cdFx0fSlcclxuXHRcdCQoXCIudHVybl9yaWdodFwiKS5jbGljayhmdW5jdGlvbigpe1xyXG5cdFx0XHRpbmRleCsrO1xyXG5cdFx0XHRtb3ZlKCk7XHJcblx0XHR9KVxyXG5cdFx0JChcIiNiYW5uZXJcIikuaG92ZXIoZnVuY3Rpb24oKXtcclxuXHRcdFx0Y2xlYXJJbnRlcnZhbCh0aW1lcik7XHJcblx0XHR9LGZ1bmN0aW9uKCl7XHJcblx0XHRcdHRpbWVyID0gc2V0SW50ZXJ2YWwoZnVuY3Rpb24oKXtcclxuXHRcdFx0XHRpbmRleCsrO1xyXG5cdFx0XHRcdG1vdmUoKTtcclxuXHRcdFx0fSwzMDAwKTtcclxuXHRcdH0pO1xyXG5cdFx0JHVsMi5jaGlsZHJlbigpLm1vdXNlbW92ZShmdW5jdGlvbigpe1xyXG5cdFx0XHRpbmRleCA9ICQodGhpcykuaW5kZXgoKTtcclxuXHRcdFx0bW92ZSgpO1xyXG5cdFx0fSlcclxuXHR9KSgpO1xyXG5cdC8v5oiS5oyH5bCP5Zu+6L2u5pKtXHJcblx0KGZ1bmN0aW9uKCl7XHJcblx0XHRsZXQgaW5kZXggPSAwO1xyXG5cdFx0bGV0ICR1bCA9ICQoXCIjbTFfbGVmdCB1bFwiKTtcclxuXHRcdGxldCBtb3ZlPSgpPT57XHJcblx0XHRcdGlmKGluZGV4PT0kdWwuY2hpbGRyZW4oKS5sZW5ndGgpe1xyXG5cdFx0XHRcdGluZGV4PTA7XHJcblx0XHRcdH1cclxuXHRcdFx0JHVsLmNoaWxkcmVuKCkuY3NzKFwiZGlzcGxheVwiLFwibm9uZVwiKTtcclxuXHRcdFx0JHVsLmNoaWxkcmVuKCkuZXEoaW5kZXgpLmZhZGVJbigpO1xyXG5cdFx0fVxyXG5cdFx0bGV0IHRpbWVyID0gc2V0SW50ZXJ2YWwoZnVuY3Rpb24oKXtcclxuXHRcdFx0aW5kZXgrKztcclxuXHRcdFx0bW92ZSgpO1xyXG5cdFx0fSwzMDAwKVxyXG5cdFx0JHVsLm1vdXNlb3ZlcihmdW5jdGlvbigpe1xyXG5cdFx0XHRjbGVhckludGVydmFsKHRpbWVyKTtcclxuXHRcdH0pXHJcblx0XHQkdWwubW91c2VvdXQoZnVuY3Rpb24oKXtcclxuXHRcdFx0dGltZXIgPSBzZXRJbnRlcnZhbChmdW5jdGlvbigpe1xyXG5cdFx0XHRcdGluZGV4Kys7XHJcblx0XHRcdFx0bW92ZSgpO1xyXG5cdFx0XHR9LDMwMDApXHJcblx0XHR9KVxyXG5cdH0pKCk7XHJcblx0XHJcblx0Ly9tYWluMuezu+WIl+S6p+WTgeWIh+aNolxyXG5cdChmdW5jdGlvbigpe1xyXG5cdFx0bGV0IGluZGV4ID0gMDtcclxuXHRcdG1vdmUoKTtcclxuXHRcdCQoXCIjbTJfbmF2XCIpLmNoaWxkcmVuKFwiYVwiKS5ob3ZlcihmdW5jdGlvbigpe1xyXG5cdFx0XHQkKHRoaXMpLmNzcyhcImNvbG9yXCIsXCIjNjY2NjY2XCIpLnNpYmxpbmdzKCkuY3NzKFwiY29sb3JcIixcIndoaXRlXCIpO1xyXG5cdFx0XHRpbmRleCA9ICQodGhpcykuaW5kZXgoKTtcclxuXHRcdFx0bW92ZSgpO1xyXG5cdFx0fSlcclxuXHRcdGZ1bmN0aW9uIG1vdmUoKXtcclxuXHRcdFx0JC5hamF4KHtcclxuXHRcdFx0XHR0eXBlOlwiZ2V0XCIsXHJcblx0XHRcdFx0dXJsOlwiLi4vanNvbi8zLmpzb25cIixcclxuXHRcdFx0XHRzdWNjZXNzOmZ1bmN0aW9uKGRhdGEpe1xyXG5cdFx0XHRcdFx0JChcIiNpbWcxMTFcIikuYXR0cihcInNyY1wiLGRhdGFbaW5kZXhdLmEpO1xyXG5cdFx0XHRcdFx0JChcIiNpbWcyMjJcIikuYXR0cihcInNyY1wiLGRhdGFbaW5kZXhdLmIpO1xyXG5cdFx0XHRcdFx0JChcIiNpbWczMzNcIikuYXR0cihcInNyY1wiLGRhdGFbaW5kZXhdLmMpO1xyXG5cdFx0XHRcdH1cclxuXHRcdFx0fSlcclxuXHRcdH1cclxuXHR9KSgpO1xyXG5cdFxyXG5cdC8vbWFpbjXova7mkq1cclxuXHQoZnVuY3Rpb24oKXtcclxuXHRcdGxldCAkdWwgPSAkKFwiI201X2NvbnRlbnQgdWxcIikuZXEoMCk7XHJcblx0XHRsZXQgJHVsMiA9ICQoXCIjbTVfY29udGVudCB1bFwiKS5lcSgxKTtcclxuXHRcdGxldCBpbmRleCA9IDA7XHJcblx0XHRsZXQgbW92ZSA9ICgpPT57XHJcblx0XHRcdGlmKGluZGV4PT0kdWwuY2hpbGRyZW4oXCJsaVwiKS5sZW5ndGgpe1xyXG5cdFx0XHRcdCR1bC5jc3MoXCJsZWZ0XCIsXCIwXCIpO1xyXG5cdFx0XHRcdGluZGV4PTE7XHJcblx0XHRcdH1cclxuXHRcdFx0aWYoaW5kZXg9PSR1bC5jaGlsZHJlbihcImxpXCIpLmxlbmd0aC0xKXtcclxuXHRcdFx0XHQkdWwyLmNoaWxkcmVuKFwibGlcIikuZXEoMCkuYWRkQ2xhc3MoXCJsaV90b3JlZFwiKS5zaWJsaW5ncygpLnJlbW92ZUNsYXNzKFwibGlfdG9yZWRcIik7XHJcblx0XHRcdH1lbHNle1xyXG5cdFx0XHRcdCR1bDIuY2hpbGRyZW4oXCJsaVwiKS5lcShpbmRleCkuYWRkQ2xhc3MoXCJsaV90b3JlZFwiKS5zaWJsaW5ncygpLnJlbW92ZUNsYXNzKFwibGlfdG9yZWRcIik7XHJcblx0XHRcdH1cclxuXHRcdFx0aWYoaW5kZXg9PS0xKXtcclxuXHRcdFx0XHRpbmRleD0kdWwuY2hpbGRyZW4oXCJsaVwiKS5sZW5ndGgtMTtcclxuXHRcdFx0fVxyXG5cdFx0XHQkdWwuc3RvcCgpO1xyXG5cdFx0XHQkdWwuYW5pbWF0ZSh7bGVmdDotJHVsLmNoaWxkcmVuKFwibGlcIikuZXEoMCkuaW5uZXJXaWR0aCgpKmluZGV4fSwxMDAwKTtcclxuXHRcdH1cclxuXHRcdGxldCB0aW1lciA9IHNldEludGVydmFsKGZ1bmN0aW9uKCl7XHJcblx0XHRcdGluZGV4Kys7XHJcblx0XHRcdG1vdmUoKTtcclxuXHRcdH0sMzAwMCk7XHJcblx0XHQkKFwiI201X2NvbnRlbnQgLmx1bmJvXCIpLmhvdmVyKGZ1bmN0aW9uKCl7IFxyXG5cdFx0XHRjbGVhckludGVydmFsKHRpbWVyKTtcclxuXHRcdH0sZnVuY3Rpb24oKXtcclxuXHRcdFx0dGltZXIgPSBzZXRJbnRlcnZhbChmdW5jdGlvbigpe1xyXG5cdFx0XHRcdGluZGV4Kys7XHJcblx0XHRcdFx0bW92ZSgpO1xyXG5cdFx0XHR9LDMwMDApO1xyXG5cdFx0fSk7XHJcblx0XHQkdWwyLmNoaWxkcmVuKFwibGlcIikubW91c2VvdmVyKGZ1bmN0aW9uKCl7XHJcblx0XHRcdGluZGV4ID0gJCh0aGlzKS5pbmRleCgpO1xyXG5cdFx0XHRtb3ZlKCk7XHJcblx0XHR9KTtcclxuXHR9KSgpO1xyXG5cdC8vbWFpbjblm77niYfnmoTpl6rliqhcclxuXHQoZnVuY3Rpb24oKXtcclxuXHRcdGxldCB0aW1lciA9IHNldEludGVydmFsKGZ1bmN0aW9uKCl7XHJcblx0XHRcdCQoXCIjbWFpbjYgLnJpZ2h0IGltZ1wiKS5hbmltYXRlKHtsZWZ0OlwiLTEwMDBweFwifSwyMDApO1xyXG5cdFx0XHQkKFwiI21haW42IC5yaWdodCBpbWdcIikuYW5pbWF0ZSh7bGVmdDpcIjBcIn0sMTAwKTtcclxuXHRcdH0sMzAwMClcclxuXHR9KSgpO1xyXG5cdFxyXG59KVxyXG4iXX0=
