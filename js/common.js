$(document).ready(function() {


	let a = 1;

	
	function ab(){
	
		let v = '1';
		console.log(v);
	};

	ab();

	// параметры по умолчанию

	function  myFunction(x = 2, y = 2, z = 3) {
		console.log(x,y,z);
	}
	myFunction(undefined,1, 2);

	// оператор расширения

	function sum(a, b){
		return a + b;
	};
	let data = [1,2];
	let result = sum(...data);
	console.log(result);

	// деструктивное присвоение

	// стрелочные функции

	let circlArea = (pi, r) => {
		let area = pi*r*r;
		return area;
	}
	let v = circlArea (5,2);
	console.log("circlArea " +v);

	/*let sum2 = (a = 2,b = 2) =>{
		console.log(a + b);
	}
	sum2(1,1);*/

/* сокращенный синтаксис функцый */

	let sum2 = (a,b) => a + b;
	console.log(sum2(3,2));

	/*Math*/
	console.log(Math.cosh(0));

	//шаблонные строки

	let st1 = "Vlad";
	let sStr = `My name ${st1}`;
	console.log(sStr);

	console.log(`
	vasa ${st1}
	peta`);

	// символы

	var s = Symbol.iterator();
	console.log(typeof s);

	//Цели для Яндекс.Метрики и Google Analytics
	$(".count_element").on("click", (function() {
		ga("send", "event", "goal", "goal");
		yaCounterXXXXXXXX.reachGoal("goal");
		return true;
	}));

	//SVG Fallback
	if(!Modernizr.svg) {
		$("img[src*='svg']").attr("src", function() {
			return $(this).attr("src").replace(".svg", ".png");
		});
	};

	//Аякс отправка форм
	//Документация: http://api.jquery.com/jquery.ajax/
	$("#form").submit(function() {
		$.ajax({
			type: "POST",
			url: "mail.php",
			data: $(this).serialize()
		}).done(function() {
			alert("Спасибо за заявку!");
			setTimeout(function() {
				
				$("#form").trigger("reset");
			}, 1000);
		});
		return false;
	});

	//Chrome Smooth Scroll
	try {
		$.browserSelector();
		if($("html").hasClass("chrome")) {
			$.smoothScroll();
		}
	} catch(err) {

	};

	$("img, a").on("dragstart", function(event) { event.preventDefault(); });
	
});

$(window).load(function() {

	$(".loader_inner").fadeOut();
	$(".loader").delay(400).fadeOut("slow");

});
