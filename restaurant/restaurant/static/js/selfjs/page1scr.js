//var n=1; // added variable on page1.html for value of n.
			

			$(document).ready(function(){

				for ( var i = 0; i < n; i++ ) { 
					var $div = $("<div>", {id: ("foo"+i), class: "circle"});
			        $("#wrapper1").append($div);	
			        var pos=i*360/n;
			        //var dtr=pos+"deg"
			        $(("#foo"+i)).css("-webkit-transform","rotate("+pos+"deg) translateX(200px)");
			        $(("#foo"+i)).css("-moz-transform","rotate("+pos+"deg) translateX(200px)");
				 $(("#foo")+i).css("background","#50dc64");		       

				}	


            
         	$("#foo0").click(function(){
	        
	  			$(this).css("-webkit-animation","movetocenter 2s linear 1");
	  			$(this).css("-moz-animation","movetocenter 2s linear 1");
	
	       });

		
 	     
 	
			});




