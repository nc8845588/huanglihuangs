require.config({
	
	paths : {

        "jquery": "../lib/jquery-3.1.1",
        "banner": "banner"
    },


    shim:{
    	"banner":["jquery"]
    }
})