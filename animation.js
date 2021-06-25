
$(function(){

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

				let x_coord = 50 - x*10;
				let y_coord = 50 - y*10;

				await sleep(100);
			};
		};
	};

	AddCircles();


	const $square = $(".big-square");
	const $mid = $(".Middle-Square");
	$square.append($mid);

	async function Animation(){

		await sleep(10000);

		$(".rounded").each(function(){
			let $this = $(this);
			$this.animate({
				backgroundColor:"black",
				top: "y-coord vh",
				left: "x-coord vh"
			});
		});
	};

	Animation();

});
