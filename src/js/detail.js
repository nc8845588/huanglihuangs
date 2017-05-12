require(['config'],function(){
	require(['jquery','gdszoom','fly','cookie'],function(){
		$(function(){	
			$('#header').load('header.html',function(){
				$('#header img').each(function(index,ele){
					$(this).attr('src','../'+($(this).attr('src')));
					// $(this).attr('src',($(this).attr('src')).substr(3));
				})
			});
			$('#footer').load('footer.html');

			$('.goods-big').gdszoom({
				// position:'right'
			});

			//购物车抛物线的效果
			
			var $btn=$('.buy-btn .good-add')
			// $btn.on('click', addCart);
			// function addCart(event) {
			// 	var offset = $('#car').offset(), flyer = $('<img class="u-flyer" src="../img/14365241426760 (12).jpg"/>');
			// 	flyer.css({
			// 		width:'80',
			// 		height:'80'
			// 	});
			// 	flyer.fly({
			// 	    start: {
			// 	        left: event.clientX-10,
			// 	        top: event.clientY-10 
			// 	    },
			// 	    end: {
			// 	        left: offset.left,
			// 	        top: offset.top - scrollY,
			// 	        width: 20,
			// 	        height: 20
			// 	    }
			// 	});
			// }

			//cookie
			// console.log($(this))
			//获取图片
			var $img=$('.good-show img')
			//获取商品名字
			var $name=$('.goods-intro h2')
			//获取商品的价格
			var $price=$('.price .p1 span')

			var $prices=$price.text();
		
			var carlist=getCookie('carlist')

			carlist = carlist ? JSON.parse(carlist) : [];

			$btn.click(function(){

				
				var hasGood=false;
				console.log($prices)
				for(var i=0;i<carlist.length;i++){
					if (carlist[i].price== $prices){
						console.log(carlist[i])
						hasGood = true;
						carlist[i].qty+=1;
						break;
						
					}
				}
				// $(carlist).each(function(idx,item){
				// 	if(item.price==$prices){
				// 		hasGoods = true;
				// 		this.qty++
				// 	}
				// })
				if (hasGood ==false){
					var goods={
						imgUrl:$img.attr('src'),
						name:$name.text(),
						price:$price.text(),
						qty:1
					}	
				}
				
				carlist.push(goods)
				console.log(carlist)
				setCookie('carlist',JSON.stringify(carlist));
			})
			

		})
	});
});