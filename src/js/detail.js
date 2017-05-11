require(['config'],function(){
	require(['jquery','gdszoom'],function(){
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

		})
	});
});