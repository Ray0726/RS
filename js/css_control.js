$(document).ready(function(){

	//Slider
  $('.slider').slider({
	  height:300,
	  indicators:true,
	  autoplay:false
  });
  $('.slider').slider('pause');

	//Switch ON/OFF (Section 1)
  $("#section_1").change(function() {
		if($(this).is(":checked")) {
		  //console.log("Is checked");
		  $('#Section1').show();
		}
		else {
		  //console.log("Is Not checked");
		  $('#Section1').hide();
		}
	});

	//Switch ON/OFF (Section 2)
	$("#section_2").change(function() {
		if($(this).is(":checked")) {
			//console.log("Is checked");
			$('#Section2').show();
		}
		else {
			//console.log("Is Not checked");
			$('#Section2').hide();
		}
	});

	//Button right bottom
	$('.tap-target').tapTarget();

	$("#menu").click(function() {
		$('.tap-target').tapTarget('open');
	});

	//Tabs init
	$(document).ready(function(){
    $('.tabs').tabs();
  });

	//search
	$("#search").focus(function() {
		$('body > nav > div > div > div.col.s12.m4.l5 > form > div > label > i').hide();
	});
	$("#search").blur(function() {
		$(this).val('');
		$('body > nav > div > div > div.col.s12.m4.l5 > form > div > label > i').show();
	});

	//sidenav
	$(document).ready(function(){
    $('.sidenav').sidenav();
  });



});
