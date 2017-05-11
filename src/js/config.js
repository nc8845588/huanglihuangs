require.config({
	
	paths : {

        "jquery": "../lib/jquery-3.1.1",
        "banner": "banner",
        "gdszoom": "../lib/jquery.gdszoom"
    },


    shim:{
    	"banner":["jquery"],
    	"gdszoom":["jquery"]
    }
})