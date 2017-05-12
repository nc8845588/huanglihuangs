function setCookie(name,val,expires,path){
	var str = name + '=' + val;

	if(expires){
		str +=';expires=' + expires;
	}

	if(path){
		str += ';path=' + path;
	}


	document.cookie = str;
}

function getCookie(name){
	// 得到所有的cookie
	var cookies = document.cookie;

	var res = '';

	if(cookies.length){
		cookies = cookies.split('; ');
		cookies.forEach(function(item){
			var arr = item.split('=');
			if(arr[0] === name){
				res = arr[1];
			}
		})
	}

	return res;
}

function removeCookie(name){
	var now = new Date();
	now.setDate(now.getDate()-7);

	// setCookie(name,null,now);
	document.cookie = name + '=null;expires=' + now;
}