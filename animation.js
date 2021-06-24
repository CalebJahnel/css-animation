
$(function(){

	let $this = $(this);

	function AddCircles(){

		for(y=0;y<9;y++){

			for(x=0;x<9;x++){

				let div = document.createElement("DIV");
				$this.addClass("rounded")

				$(".rounded").each(function(){
					$this.data("x-coord","x");
					$this.data("y-coord","y");
				});

			};

		};

	};

	setInterval(AddCircles, 100);

	$(".DIV").each(function(){
		async function RainbowSwap(){
			$this.css("color","red");
			await sleep(2000);
			$this.css("color","orange");
			await sleep(2000);
			$this.css("color","yellow");
			await sleep(2000);
			$this.css("color","green");
			await sleep(2000);
			$this.css("color","blue");
			await sleep(2000);
			$this.css("color","indigo");
		};
	});

	$(".big-square").css({position:"relative"});

	$("div").each(function(){
		$this.css({position:"absolute",top:"y-coord*10vh",left:"x-coord*10vh"});
	});

});
