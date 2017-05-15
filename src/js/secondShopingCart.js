require(['config'],function(){
	require(['jquery','banner','denglu','cookie'],function(){
		$(function(){
			$('#footer').load('footer.html');

			$('#header').load('header.html',function(){
				$('#header img').each(function(index,ele){
					$(this).attr('src','../'+($(this).attr('src')));
					// $(this).attr('src',($(this).attr('src')).substr(3));
				})
			});


			var carlist=getCookie('carlist')

			carlist=carlist ? JSON.parse(carlist):[];
			console.log(carlist)

			for(var i=0;i<carlist.length;i++){

				var tprice=carlist[i].qty*carlist[i].price;

				var $fix3=$('.fix3')
				$fix3.text(tprice.toFixed(2));

				var $span2=$('.span2')
				$span2.text(tprice.toFixed(2));

			}
			
		})
	});
});	