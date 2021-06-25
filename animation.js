
$(function(){

	let num = 2;

	let $this = $(this);

	setInterval(AddCircles, 1000);

	function AddCircles(){

		for(var y = 0; y<9; y++){

			for(var x = 0; x<9; x++){

				const $div = document.createElement("div");
				$div.classList.add("rounded");
				$div.classList.add("RainbowSwap");
				document.getElementById("Large-Square").append($div);

				var width_value = x * 10;
				var height_value = y * 10;
				$div.style.left = width_value vh;
				$div.style.top = height_value vh;
			};
		};
	};


	function sleep(ms) {
  		return new Promise(
    	resolve => setTimeout(resolve, ms)
  		);
	}



	/*
	$div = async function(){
		this.style.background-color = "red";
		await sleep(2000);
		this.style.background-color = "orange";
		await sleep(2000);
		this.style.background-color = "yellow";
		await sleep(2000);
		this.style.background-color = "green";
		await sleep(2000);
		this.style.background-color = "blue";
		await sleep(2000);
		this.style.background-color = "indigo";
	};
	*/
});
