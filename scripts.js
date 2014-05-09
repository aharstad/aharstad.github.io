//Fonts
window.WebFontConfig = {google:{families:['Abril+Fatface:400','Source+Sans+Pro:400']}};
jQuery.ajax({dataType:'script', cache:true, url:'http://ajax.googleapis.com/ajax/libs/webfont/1/webfont.js'});

//Cover
jQuery(window).on('ready resize', function(){
	jQuery('.card-back').each(function(){
		var pw = this.parentNode.clientWidth;
		var ph = this.parentNode.clientHeight;
		var ps = this.getAttribute('width') / this.getAttribute('height');
		var iw = Math.max(pw, ph * ps);
		var ih = iw / ps;

		this.style.width  = Math.round(iw) + 'px';
		this.style.height = Math.round(ih) + 'px';
		this.style.top    = Math.round((ph - ih) / 2) + 'px';
		this.style.left   = Math.round((pw - iw) / 2) + 'px';
	});
});