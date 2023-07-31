
function datepicker(){
	if($(".inp-date").length <= 0) return;
	let opt = {
		keyboardNavigation: false,
		forceParse: false,
		calendarWeeks: true,
		autoclose: true,
		todayHighlight: true,
		format: "yyyy-mm-dd"
	}
	$(".inp-date:not(.input-daterange) .date").datepicker(opt);
	$(".inp-date.input-daterange").datepicker(opt);
}

function gnbMenu(){
	$('.gnb-menu .menu-wrap > ul > li > a').on('click', function(){
		let $this = $(this).parent('li');
		let $siblings = $(this).parent('li').siblings();

		if($this.hasClass('on')){
			$this.find('svg').addClass('on');
			return;
		}
		$siblings.not('.on').find('ul').slideUp();
		$siblings.not('.on').removeClass('open');

		if($this.find('ul').length > 0 && !$this.hasClass('open')){
			$this.addClass('open');
			$this.find('ul').slideDown();	
		}else{
			$this.find('ul').slideUp(function(){
				$this.removeClass('open');
			});	
		}

	});
}

function tabOn(){
	$(document).on('click', '.tab-type1 a', function(){
		$(this).parents('li').siblings().removeClass('on');
		$(this).parents('li').addClass('on');
	})
}

function colorPicker(){
	if($('.colorpicker').length <= 0) return;
  $('.colorpicker').minicolors();
}

function timepicker(){
	if($('.timepicker').length <= 0) return;
	$('.timepicker input').timepicki({
			show_meridian:false,
			min_hour_value:0,
			max_hour_value:23,
			increase_direction:'up'});
}


// popup
function popOpen(popup){
	var  $popup=$(popup);
	$popup.show();
} 


function popClose(popup){
	var $popup = $(popup);
	$popup.hide();
} 


$(function(){
	datepicker();
	colorPicker();
	timepicker();
	tabOn();

});
