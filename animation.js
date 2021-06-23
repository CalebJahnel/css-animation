
$(function() {

	let $this =$(this);

	function AddCircles(x,y){

		for(y=0;y<9;y++){

			for(x=0;x<9;x++){

				(".big-square").createElement("div");
				("div").addClass("rounded");

				$("div").each(function(){
					$this.data("x-coord","x");
					$this.data("y-coord","y");
				});

			};

		};

	};

	setInterval(AddCircles, 100);

	function RainbowSwap(){
		setTimeout(function(){

		},2000);
	};

	$(".big-square").css({position:"relative"});

	("div").each(function(){
		$this.css({position:"absolute",top:"y-coord*10vh",left:"x-coord*10vh"});
	});

});
