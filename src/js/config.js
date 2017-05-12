require.config({
	
	paths : {

        "jquery": "../lib/jquery-3.1.1",
        "banner": "banner",
        "gdszoom": "../lib/jquery.gdszoom",
        "fly": "../lib/jquery.fly",
        "lazyload": '../lib/lazyload',
        "denglu": '../lib/jquery-confirm',
        "cookie": 'cookie'
    },


    shim:{
    	"banner":["jquery"],
    	"gdszoom":["jquery"],
        "fly":["jquery"],
        "lazyload":["jquery"],
        "denglu":["jquery"]
    }
})