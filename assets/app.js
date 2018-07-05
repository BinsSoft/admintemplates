/* start to load all plugins */

const scriptArr = [
"assets/jquery-ui.min.js",
"assets/bootstrap.bundle.min.js",
"assets/jquery.slimscroll.min.js"
];
$.holdReady(true);var pageLoader;const loadScript=(index=0)=>{if(index==0){pageLoader=$("<div/>").attr({id:'page-loader'}).css({'position':'fixed','top':0,'left':0,'bottom':0,'right':0,'background':'#E6E8EC','z-index':9999}).prependTo($("body"));$("<span/>").addClass('spinner').css({'-webkit-animation':'rotation .6s infinite linear','animation':'rotation .6s infinite linear','height':'40px','width':'40px','position':'absolute','top':'50%','left':'50%','margin':'-20px 0 0 -20px','border':'2px solid rgba(0,0,0,.5)','border-top':'2px solid #fff','border-radius':'100%'}).appendTo(pageLoader)}
$.getScript(scriptArr[index],function(){if(index==scriptArr.length-1){pageLoader.fadeOut(300);$.holdReady(false);}else{let nextIndex=index+1;loadScript(nextIndex);}})}
loadScript();
/* All plugins load successfully */

$(()=>{
	let documentHeight = $(document).height();
	documentHeight -= $(".header").height(); 
	$(".main-container").height(documentHeight);
	$('.side-bar').slimScroll({
		height: documentHeight,
		width : 230
	});
	$('.body-container').slimScroll({
		height: documentHeight,
		width : $(document).width()-230
	});
	
	$(".has-sub-menu").click((event)=>{
		const element = $(event.target);
		$(".sub-nav").hide();
		element.parent().find('.sub-nav').slideDown(500, ()=>{
			$(".sub-nav").removeClass('active');
			element.parent().find('.sub-nav').addClass('active');

		});
	})
})