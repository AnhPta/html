// $(".img-hover").hover(function(){
// 	$(".text-meet").css("color","red");
// 	console.log(11);
// },
// function() {
// 		$(".text-meet").css("color","black")
// });


// $(document).ready(function(){
// 	$(".text-hover").hide();
// });

// $('.img-hover').hover(
// 	function(){
// 		// var id=$(this).data('id');
// 		console.log(11);
// 		$('.text-hover').show();		
// 	},

// 	function(){
// 		console.log(12);
// 		$('.text-hover').hide();
// 	}
// );

$('.img-hover').mouseover(function() {
  $('.text-hover').css("visibility","visible");
});

$('.img-hover').mouseout(function() {
  $('.text-hover').css("visibility","hidden");
});
