$(function(){
	$(window).scroll(function(event) {
		/* xử lí css3 */
		if($("html,body").scrollTop() >= $('.holiday').offset().top - 160){
			$('.holiday h1').addClass('goleft');
			$('.holiday .time').addClass('goright2');
			$('.leftside img').addClass('zoomlai');
		}
		if($("html,body").scrollTop() >= $('.leftside').offset().top){
			$('.leftside img').addClass('zoomlai');
			$('.rightside h2,.rightside h3,.rightside .readmore').addClass('goright2');
		}
		if($("html,body").scrollTop() >= $('.group').offset().top -200){
			$('h1.bigtext').addClass('hien');
			$('.smalltext').addClass('zoomin');
			$('.one').addClass('goleft');
			$('.two').addClass('godown');
			$('.three').addClass('goright2');
			$('._1row img').addClass('inf');
		}
		if($("html,body").scrollTop()>=($('.section_group').offset().top-300) ){
			$('.act,h2.big,.leftsection h3,._3line,.button_green').addClass('goleft');
			$('._2div').addClass('zoomlai');
		}
		if($("html,body").scrollTop()>=$('.slide').offset().top -200){
			$('.kid').addClass('laclu');
			$('._1slide').addClass('xuathien');
		}

		if($("html,body").scrollTop()>= 130)
		{
			$('.menu').addClass('attach');
		}
		else {
			$('.menu').removeClass('attach');
		}
	});

		/*Xử lí animate cuộn trang*/
	$('.nav ul li:nth-child(1) a,.menuright li:nth-child(2) a').on('click',function(event){
		event.preventDefault();
		$("html,body").animate({scrollTop: $('.left').offset().top + 200},1300,"easeOutCirc")
	})
	$('.nav ul li:nth-child(2) a,.menuright li:nth-child(3) a').on('click',function(event){
		event.preventDefault();
		$("html,body").animate({scrollTop: $('.rightside').offset().top + 50},1300,"easeOutCirc")
	})
	$('.nav ul li:nth-child(3) a,.menuright li:nth-child(4) a').on('click',function(event){
		event.preventDefault();
		$("html,body").animate({scrollTop: $('.section_group').offset().top +30},1300,"easeOutCirc")
	})
	$('.nav ul li:nth-child(4) a,.menuright li:nth-child(5) a').on('click',function(event){
		event.preventDefault();
		$("html,body").animate({scrollTop: $('.slide').offset().top},1300,"easeOutCirc")
	})

	// xử lí cho nút menu

	$('.nav li a').click(function(event){
		$('.nav li a').removeClass('ligh');
		$(this).addClass('ligh');
	})

	$('.nav li:nth-child(5) a,.menuright ul li:nth-child(6) a').on('click', function(event) {
		event.preventDefault();
		/* Act on the event */
		$('.background_contact').addClass('appear');
	});
	$('.closepopup').click(function(event){
		$('.background_contact').removeClass('appear');
		$('.nav li:nth-child(5) a').removeClass('ligh');
	});


	// chuyển nút khi scroll chuột



	$(window).scroll(function(event){
		var pos = $("html,body").scrollTop();
		
		if(pos >= $('.left').offset().top +150 && pos <  $('.leftside').offset().top ){
			
			$('.nav li:nth-child(1) a').addClass('ligh');
		}
		else {
			$('.nav li:nth-child(1) a').removeClass('ligh');
		}

		if(pos >= $('.leftside').offset().top && pos <  $('.section_group').offset().top - 50  ){
			$('.nav li:nth-child(2) a').addClass('ligh');
		}
		else {
			$('.nav li:nth-child(2) a').removeClass('ligh');
		}

		if(pos >= $('.section_group').offset().top - 50 && pos <  $('.wrapslide').offset().top ){
			$('.nav li:nth-child(3) a').addClass('ligh');
		}
		else {
			$('.nav li:nth-child(3) a').removeClass('ligh');
		}

		if(pos >= $('.wrapslide').offset().top && pos < $('.container').offset().top ){
			$('.nav li:nth-child(4) a').addClass('ligh');
		}
		else {
			$('.nav li:nth-child(4) a').removeClass('ligh');
		}
	})

	//xử lí cho nút slide

	var time =setInterval(function(){autoSlide()},5000);
	$('.buttons ul li ').click(function(event){
		clearInterval(time);
		$('.buttons ul li').removeClass('onbutton');
		$(this).addClass('onbutton');
		var vitrinut = $(this).index() + 1;
		$('._1slide').removeClass('active');
		$('._1slide:nth-child('+ vitrinut +')').addClass('active');
	})



	function autoSlide() {

		var vitri = $('.buttons ul li.onbutton').index() + 1;
	 	$('.buttons ul li').removeClass('onbutton');
		if(vitri == $('.buttons ul li').length){
			vitri = 0;
		}
		$('.buttons ul li:nth-child('+ (vitri+1) +')').addClass('onbutton');


		if(vitri < $('._1slide').length){
				$('._1slide').removeClass('active');
				$('._1slide:nth-child('+ (vitri+1) +')').addClass('active');
		}
		else{
				$('._1slide').removeClass('active');
				$('._1slide:nth-child(1)').addClass('active');
		}
	}


	// xử lí isotope = jquery

	// $('nav ul li a').on('click',function(event){
	// 	event.preventDefault();
	// 	// phát hiện data class nút được kick
	// 	var danhmuc = $(this).data('class');
	// 	$('section h1 p').text($(this).text());

	// 	$('.noidung ul li').each(function(index, el) {
	// 		if($(this).hasClass(danhmuc)){
	// 			$(this).fadeIn();
	// 		}			
	// 		else {
	// 			$(this).fadeOut();
	// 		}
	// 	}); dùng jquery đơn thuần
	// })

	// $('nav ul li a').on('click', function(event) {
	// 	event.preventDefault();
	// 	/* Act on the event */
	// 	var danhmuc = $(this).data('class');
	// 	$('section h1 p').text($(this).text());
	// });
	// $('.noidung').isotope({
	// 	itemSelector: '.item'
	// })

	$('.noidung').isotope({
		itemSelector:'.noidung li'
	});

	$('nav ul li a').click(function(event){
		event.preventDefault();
		var danhmuc = $(this).data('class');
		var ten = $(this).text();
		danhmuc = "."+danhmuc;

		if(danhmuc == '.all'){
			$('.gallery_isotope h1 p').text("all");
			$('.noidung').isotope({filter:'*', transitionDuration: '2s'});
		}
		else{
			$('.gallery_isotope h1 p').text(ten);
			$('.noidung').isotope({filter: danhmuc,transitionDuration: '2s'});
		}
		
	})
	// back to top
	$('.backtotop').click(function(event){
		$("html,body").animate({scrollTop: 0},1000);
	})

})

// làm parallax effect
document.addEventListener("DOMContentLoaded",function(){
	var scene = document.getElementById('scene');
	var parallax = new Parallax(scene);
})


// làm push menu

$('#wrapper-hamburger').click(function(event){
	$('.line').addClass('transforming');
	$('.menuright').addClass('activepushmenu');
	$('.blend').addClass('appearpushmenu');
	$('.allcontent').addClass('pushtoleft');
})
$('.blend,.fa.fa-close').click(function(event) {
	$('.menuright').removeClass('activepushmenu');
	$('.blend').removeClass('appearpushmenu');
	$('.allcontent').removeClass('pushtoleft');
	$('.line').removeClass('transforming');
}); 

// dùng resize để nhận biết window resize khi nào và tắt pushmenu khi dùng responsive

$(window).resize(function(event) {
	/* Act on the event */
	if($(window).width()> 1239){
		$('.menuright').removeClass('activepushmenu');
		$('.blend').removeClass('appearpushmenu');
		$('.allcontent').removeClass('pushtoleft');
	}
})
	
window.addEventListener('load', function(){
	const preloader = document.querySelector('.preload');
		setTimeout(function() {
				preloader.classList.add('preload-finish');

			},2000);

})

	
// LÀM SLIDE trượt qua trái qua phải idea: dùng if nếu nút được kick nhỏ hơn nút hiện tại
// thì cho slide đi từ phải sang còn nút được kick lớn hơn nút hiện tại thì cho slide đi từ trái sang
	

// document.addEventListener("DOMContentLoaded",function(){
// 	var slides = document.querySelectorAll('._1slide');
// 	var button = document.querySelectorAll('.buttons ul li');
// 	var time = setInterval(function(){autoSlide()},5000);

// 	for (var i = 0; i < button.length; i++) {
// 		button[i].addEventListener('click',function(){
// 			// clearInterval(time);
// 			for (var i = 0; i < button.length; i++) {
// 				button[i].classList.remove('onbutton');
// 			}
// 			this.classList.add('onbutton');


// 			var hientai = 0;
// 			var nutduockick = this;
// 			for(hientai = 0;nutduockick = nutduockick.previousElementSibling;hientai++){}
// 			console.log(hientai);

// 			for (var i = 0; i < slides.length; i++) {
// 				slides[i].classList.remove('active');
// 			}
// 			slides[hientai].classList.add('active');
// 		})
// 	}


// 	function autoSlide(){
// 		var vitrislide = 0;
// 		var slidehientai = document.querySelector('._1slide.active');
// 		for(vitrislide = 0;slidehientai = slidehientai.previousElementSibling;vitrislide++){}

// 		if(vitrislide < slides.length-1){
// 			for (var i = 0; i < slides.length; i++) {
// 				slides[i].classList.remove('active');
// 				button[i].classList.remove('onbutton');
// 			}
// 			slides[vitrislide].nextElementSibling.classList.add('active');
// 			button[vitrislide].nextElementSibling.classList.add('onbutton');
// 		}
		
// 		else{
// 			for (var i = 0; i < slides.length; i++) {
// 			slides[i].classList.remove('active');
// 			button[i].classList.remove('onbutton');
// 			}
// 			slides[0].classList.add('active');
// 			button[0].classList.add('onbutton');
// 		}
// 	}

// })


