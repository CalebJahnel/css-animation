
$(function(){

	//var x_value;
	//var y_value;

	let $this = $(this);

	function sleep(ms) {
  		return new Promise(
    	resolve => setTimeout(resolve, ms)
  		);
	}

	async function AddCircles(){

		const $square = $(".big-square");

		for(var y = 0; y<10; y++){

			for(var x = 0; x<10; x++){

				const $div = $(document.createElement("div"));
				$div.addClass("rounded");
				$square.append($div);

				$div.css({
  					top: `${y*10}vh`,
  					left: `${x*10}vh`
				});

				//x_value = x;
				//y_value = y;

				await sleep(100);

			};
		};
		$(".rounded").addClass("J");
		await sleep(5000);
		$(".rounded").removeClass("J").addClass("Square-Center");
	};

	AddCircles();


	const $square = $(".big-square");
	const $mid = $(".Middle-Square");
	$square.append($mid);


	async function Animation(){

		await sleep(10000);

		$(".rounded").each(function(){
			let $this = $(this);
			let x_coord = 50 - $this.position().left*10;
			let y_coord = 50 - $this.position().top*10;
			$this.animate({
				backgroundColor:"black",
				top: `+= ${y_coord} vh`,
				left: `+= ${x_coord} vh`
			});
		});
	};

	//Animation();

});
