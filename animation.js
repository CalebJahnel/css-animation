
$(function(){

	let $this = $(this);

	function AddCircles(){

		for(y=0;y<9;y++){

			for(x=0;x<9;x++){

				const $div = document.createElement("div");
				$div.classList.add("rounded");
				$div.classList.add("RainbowSwap");
				document.getElementById("Large-Square").appendChild($div);
			};

		};

	};

	setInterval(AddCircles, 1000);

	function sleep(ms) {
  		return new Promise(
    	resolve => setTimeout(resolve, ms)
  		);
	}

	$(".RainbowSwap").each(function(){
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

});
