;(function($){
	$.prototype.math=function(options){

		var defaults=({
			width:1200,
			height:480,
			time:3000,
			index:0
		})

		this.each(function(){
				// jquery扩展对象$.extend()
				// var opt = Object.assign({},defaults,options);
				var opt = $.extend({},defaults,options);
				console.log(opt)
				var $self = $(this);
				var $ul

				init();

		

			function init(){
				$self.width(opt.width).height(opt.height)
				$ul=$('<ul>');

				$ul.html(opt.img.map(function(item){

					return `<li><img src="${item}"></li>`
				}).join(''));

				$self.append($ul);


					// 轮播
				setInterval(function(){
					opt.index++;
					showPic();
				},opt.time)
			}


			function showPic(){
				if(opt.index > opt.img.length-1){
					opt.index = 0;
				}
				$ul.animate({top:-opt.index*opt.height})
			}
		})

	}
})(jQuery);