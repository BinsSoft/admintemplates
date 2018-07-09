/* start to load all plugins */

const scriptArr = [
"assets/jquery-ui.min.js",
"assets/bootstrap.bundle.min.js",
"assets/jquery.slimscroll.min.js"
];
$.holdReady(true);
const loadScript = (index = 0) => {
    
    $.getScript(scriptArr[index], function() {
        if (index == scriptArr.length - 1) {
                $("#page-loader").fadeOut(300);
                $.holdReady(false);
        } else {
            let nextIndex = index + 1;
            loadScript(nextIndex);
        }
    })
}
loadScript();
/* All plugins load successfully */

$(()=>{
	
	resizeContainer();
	$(".has-sub-menu").click((event)=>{
		const element = $(event.target);
		$(".sub-nav").hide();
		element.parent().find('.sub-nav').slideDown(500, ()=>{
			$(".sub-nav").removeClass('active');
			element.parent().find('.sub-nav').addClass('active');

		});
	})
})
const resizeContainer = ()=>{
	let documentHeight = $(window).height();
	documentHeight -= $("header").height(); 
	//$(".main-container").height(documentHeight);
	$('.side-bar').slimScroll({
		height: documentHeight-15,
		width : 230
	});
	$('.body-container').slimScroll({
		height: documentHeight-15,
		width : $(document).width()-230
	});
}