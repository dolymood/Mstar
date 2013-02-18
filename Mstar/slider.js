/**
 *
 */
define(['jq', 'Mstar', 'animate'], function($, M) {
    
	var android = $.os.android;
	
	function andSlide(showBox, hideBox) {
	    
	}
	
	var iosSlide = {
	    
		slideleft: function(showBox, hideBox) {
		    
		},
		
		slideright: function(showBox, hideBox) {
		    
		},
		
		slideup: function(showBox, hideBox) {
		    
		},
		
		slidedown: function(showBox, hideBox) {
		    
		},
		
		closeup: function(showBox, hideBox) {
		    
		},
		
		closedown: function(showBox, hideBox) {
		    
		}
	};
	
	iosSlide.closeleft = iosSlide.slideright;
	iosSlide.closeright = iosSlide.slideleft;
	
	M.slider = {
	    slide: function(showBox, hideBox, dir, reverse) {
		    if (android) {
			    andSlide(showBox, hideBox);
			} else {
			    reverse ? iosSlide['close' + dir](showBox, hideBox) : iosSlide['slide' + dir](showBox, hideBox);
			}
		}
	};
	
	return M;
});