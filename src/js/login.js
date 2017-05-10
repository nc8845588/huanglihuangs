require(['config'],function(){
	require(['jquery','banner'],function(){
		$(function(){
			$('#footer').load('footer.html');
		})
	});
});