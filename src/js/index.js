require(['config'],function(){
	require(['jquery','banner'],function(){
		$(function(){
			$('#header').load('html/header.html');
			$('#footer').load('html/footer.html');
			$('.da-select-banner').math({
				'img':['img/g1.jpg','img/g2.jpg','img/g3.png'],
				
			});

			//tab标签的JS效果
			var $li=$('.da-main-tab ul li');

			var $box=$('.da-main-tab .tab');

			$li.get(0).className = 'active';
			$box.get(0).style.display='block';
		
			$('.da-main-tab').on('click','li',function(e){
				//i是原生对象,利用index取得索引值i；
				var i=$(this).index();
				console.log(i)
				$('li').removeClass('active');
				$(this).addClass('active');

				$('.da-main-tab .tab').hide();
				$('.da-main-tab .tab').eq(i).slideToggle(500);
			})

		})
	});
});