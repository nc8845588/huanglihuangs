require(['config'],function(){
	require(['jquery','banner','denglu'],function(){
		$(function(){
			$('#footer').load('footer.html');
		})

		//tab标签处注册页面
		
		var $zc=$('.zc')
		var $dl=$('.dl')
		console.log($zc)
		$zc.click(function(){
			$('.da-login-zc').show();
			$('.da-login-dl').hide();
		})
		$dl.click(function(){
			$('.da-login-zc').hide();
			$('.da-login-dl').show();
		})

		//登录效果
		 $('.submit-btn').click(function(){
	        $.post('../php/login.php',{
	          email: $('.mobile').val(),
	          password: $('.psw').val()
	        }, function(response){
	          var $obj = eval('(' + response + ')');
	          if($obj.state){
	            window.location.href = '../index.html';
	          } else {
	            alert($obj.message);
	          }
	        })        
	     })

	     //注册效果
	     $('.zhuce-btn').click(function(){
				$.post('../php/register.php',{
					email: $('.mobiles').val(),
					password: $('.psws').val(),
					phone: $('.psw1').val()
				}, function(response){
					var $obj = eval('(' + response + ')');
					if($obj.state){
						alert('注册成功！');
					} else {
						alert($obj.message);
					}
				})				
			})

	});
});