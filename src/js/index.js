require(['config'],function(){
	require(['jquery','banner'],function(){
		$(function(){
			$('#header').load('html/header.html');
			$('#footer').load('html/footer.html');
			$('.da-select-banner').math({
				'img':['img/g1.jpg','img/g2.jpg','img/g3.png'],
				
			});

		})
	});
});