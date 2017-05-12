require(['config'],function(){
	require(['jquery','banner','lazyload'],function(){
		$(function(){
			$('#header').load('html/header.html');
			$('#footer').load('html/footer.html');
			$('.da-select-banner').math({
				'img':['img/g1.jpg','img/g2.jpg','img/g3.png'],
				
			});

			$('img.lazy-load').lazyload({
		　　　  	effect : "fadeIn", //渐现，show(直接显示),fadeIn(淡入),slideDown(下拉)
　　　　　　　　　　threshold : 300, //预加载，在图片距离屏幕180px时提前载入
　　　　　　　　　　event: 'scroll',  // 事件触发时才加载，click(点击),mouseover(鼠标划过),sporty(运动的),默认为scroll（滑动）
// 　　　　　　　　　　container: $("#container"), // 指定对某容器中的图片实现效果
// 　　　　　　　　　　failure_limit：2 //加载2张可见区域外的图片,lazyload默认在找到第一张不在可见区域里的图片时则不再继续加载,但当HTML容器混乱的时候可能出现可见区域内图片并没加载出来的情况
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
				$('.da-main-tab .tab').eq(i).slideToggle(200);
			})

			//主页手风琴额JS效果
			var $ul=$('.buy-list .clear-ul')
			var $li=$('.buy-list .clear-ul li')
			var $img=$('.buy-list .clear-ul img')
			var $p=$('.clearmsg .tip1')
			$ul.on('mouseenter','li',function(e){
				var i=$(this).index();
				$(this).siblings().stop().animate({height:'50'})
				$(this).stop().animate({height:'180'})
				$(this).siblings().find('img').addClass('list')
	
			})
			$ul.on('mouseleave','li',function(e){
				$li.eq(0).siblings().stop().animate({height:'50'})
				$li.eq(0).stop().animate({height:'180'})
			})

		})
	});
});