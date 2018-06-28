//添加cookie
function setCookie(name,value,date){
	var oDate = new Date();
	oDate.setDate(oDate.getDate()+date)
	document.cookie = name+"="+value+";expires="+oDate;
}
//查询cookie
function getCookie(name){
	var str = document.cookie;
	var arr = str.split("; ");
	for(var i =0;i<arr.length;i++){
		var newArr = arr[i].split("=");
		if(newArr[0]===name){
			return newArr[1];
		}
	}
}

//删除cookie
function removeCookie(name){
	setCookie(name,0,-1);
}


//获取地址栏的参数
function GetQueryString(name){
 var reg = new RegExp("(^|&)"+ name +"=([^&]*)(&|$)");
 var r = window.location.search.substr(1).match(reg);
 if(r!=null)return  unescape(r[2]); return null;
}

//添加购物车--显示总购物车商品数
function gouwuche(){
		let username = getCookie("username");
		if(getCookie("gouwu")!=undefined && username!=undefined){
			var arr = JSON.parse(getCookie("gouwu"));
			let totalNum = 0;
			for(let i=0;i<arr.length;i++){
				if(username==arr[i][0].username){
					for(let j=0;j<arr[i][1].length;j++){
						totalNum+=arr[i][1][j].count;
					}
				}
			}
			$(".proCount").html(totalNum);
		}else{
			$(".proCount").html("");
	}
}
//购物车-top
function gouwuche2(){
	let $list =  $("#header_right ul li div ul");
	let username = getCookie("username");
	if(username!=undefined){
		if(getCookie("gouwu")==undefined){
			var arr = [];
		}else{
			var arr = JSON.parse(getCookie("gouwu"));
		}
		$.ajax({
			type:"get",
			url:"../json/product.json",
			async:true,
			success:function(data){
				move();
				
				//给删除添加点击事件
				function addClick(){
					$list.children("li").children("a").click(function(){
						//$(this).parent().parent().fadeOut(500,function(){
							let delId = $(this).attr("ids");
							let flag = false;
							for(let i=0;i<arr.length;i++){
								if(username==arr[i][0].username){
									for(let j=0;j<arr[i][1].length;j++){
										if(delId==arr[i][1][j].id){
											arr[i][1].splice(j,1);
											flag = true;
											break;
										}
									}
									if(flag==true){
										break;
									}
								}
							}
							setCookie("gouwu",JSON.stringify(arr),7);
							move();
						//});
					})
					
				}
				//显示数据
				function move(){
					let str = "";
					let totalMoney = 0;
					for(let i=0;i<arr.length;i++){
						if(username==arr[i][0].username){
							for(let j=0;j<arr[i][1].length;j++){
								let proId = arr[i][1][j].id;
								let proCount = arr[i][1][j].count;
								str += `<li>
										<img src="${data[proId].imgurl}" alt="" />
										<div>
											<p><a href="../html/detail.html?proid=${proId}">${data[proId].name}</a></p>
											<p><a href="../html/detail.html?proid=${proId}">真-${data[proId].caizhi}</a></p>
										</div>
										<a ids="${proId}" href="#">X</a>
										</li>`;
								totalMoney+=data[proId].price*proCount;
							}
						}
					}
					if(str!=""){
						str+=`<li style="height:40px;padding-top:10px">&nbsp;总计：<span style="color:red">${totalMoney}</span><button style="background:orange;margin-left:70px;outline:none;border:0;height:30px">结算</button></li>`;
					}
					$list.html(str);
					addClick();
					//右边购物车数量改变
					gouwuche();
					panduan();
				}
			}
			
		});
	}
	panduan();
	//判断列表内是否有商品，没有的话打印购物内还没有商品
	function panduan(){
		if($list.children().length==0){
			$list.html("<span>购物车内还没有商品</span>");
		}
	};
}