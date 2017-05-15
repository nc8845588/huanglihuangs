require(['config'],function(){
	require(['jquery','cookie'],function(){
		$(function(){
			$('#footer').load('footer.html');

			$('#header').load('header.html',function(){
				$('#header img').each(function(index,ele){
					$(this).attr('src','../'+($(this).attr('src')));
					// $(this).attr('src',($(this).attr('src')).substr(3));
				})
			});

			//js
			var carlist=getCookie('carlist')

			carlist=carlist ? JSON.parse(carlist):[];

			// jq创建一个UL和总价
			var $ul=$('<ul/>')
			$ul.addClass('goods')

			var tprice=0;
			var tprices;

			//在ul中写入cookies；
			
			$ul.html(carlist.map(function(item){
				tprice+=item.price*item.qty;
				tprices=tprice.toFixed(2);
				console.log(tprice)


				return '<li><img src="'+item.imgUrl+'"></li><li><h4>'+item.name+'</h4></li><li><p class="price">'+'￥'+item.price+'</p></li><li><button class="reduce">-</button><input type="text" class="qtys" value="'+item.qty+'"><button class="add">+</button></li><li class="tprice">'+'￥'+tprices+'</li>';
			}).join(''));
			//ul写进DIV中 price写进sub中
			$('.carlist').append($ul);

			var $jiage=$('.jiage');
			$jiage.text(tprices)

			var $jiner=$('.jiner');
			$jiner.text('￥'+tprices)

			//加减商品的数量并重新写入cookie
			var $reduce=$('.reduce');
			var $add=$('.add');

			$reduce.click(function(){

				var $names=carlist[0].name
				var qty=$('.qtys').val()
				console.log(qty)

				//重新写入cookie值
				//
				for(var i=0;i<carlist.length;i++){
					if (carlist[i].name== $names){
						carlist[i].qty--;
						if (carlist[i].qty<=0) {
							carlist[i].qty=0
						}
					$('.qtys').attr('value',carlist[i].qty);
					var tprice=carlist[i].qty*carlist[i].price;
					$('.tprice').text('￥' + tprice.toFixed(2));
					$jiage.text(tprice.toFixed(2));
					$jiner.text('￥'+tprice.toFixed(2));
					break;
						
					}
				}
				setCookie('carlist',JSON.stringify(carlist));
				
			})
			//增加数量重新添加到cookie中
			$add.click(function(){
				var $names=carlist[0].name
				var qty=$('.qtys').val()

				//重新写入cookie值
				//
				for(var i=0;i<carlist.length;i++){
					if (carlist[i].name== $names){
						carlist[i].qty++;

						//只能购买30件
						if (carlist[i].qty>=30) {
							carlist[i].qty=30
						}
					$('.qtys').attr('value',carlist[i].qty);
					var tprice=carlist[i].qty*carlist[i].price;
					$('.tprice').text('￥' + tprice.toFixed(2));
					$jiage.text(tprice.toFixed(2));
					$jiner.text('￥'+tprice.toFixed(2));
					break;
						
					}
				}
				setCookie('carlist',JSON.stringify(carlist));
			})

			//改变input的值并改变总价
			
			$('.qtys').on('input',function(){
				var $names=carlist[0].name
				var $qty=$('.qtys').val()
				console.log($qty)

				//重新写入cookie值
				//
				for(var i=0;i<carlist.length;i++){
					if (carlist[i].name== $names){
						carlist[i].qty=$qty;

						//只能购买30件
						if (carlist[i].qty>=30) {
							carlist[i].qty=30
						}
					$('.qtys').attr('value',carlist[i].qty);
					var tprice=carlist[i].qty*carlist[i].price;
					console.log(tprice)
					$('.tprice').text('￥' + tprice.toFixed(2));
					$jiage.text(tprice.toFixed(2));
					$jiner.text('￥'+tprice.toFixed(2));
					break;
						
					}
				}
				setCookie('carlist',JSON.stringify(carlist));

			})


			//购物车的提交订单
			$('.zhifu').click(function(){
				$('.zhifu').css('borderColor','red')
			})
			
		});
	});
});		