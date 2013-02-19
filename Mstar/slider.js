/**
 *
 */
define(['jq', 'Mstar', 'animate'], function($, M) {
    
	var android = $.os.android;
	var animate = M.animate;
	
	function andSlide(showBox, hideBox) {
	    
	}
	
	function hide_box(box) {
	    // setTimeout(function() {
		    // box.hide();
		// }, 300);
	}
	
	var iosSlide = {
	    
		slideleft: function(showBox, hideBox) {
		    showBox.show();
			hideBox.show();
			animate(showBox, {
			    time: 0,
				x: '100%',
				callback: function() {
					animate(hideBox, {
						time: 300,
						x: '-100%',
						callback: function() {
							//
							hide_box(hideBox);
						}
					});
					animate(showBox, {
						time: 300,
						x: 0,
						callback: function() {
							//
						}
					});
				}
			});
		},
		
		slideright: function(showBox, hideBox) {
		    showBox.show();
			hideBox.show();
			animate(showBox, {
			    time: 0,
				x: '-100%',
				callback: function() {
				    animate(hideBox, {
						time: 300,
						x: '100%',
						callback: function() {
							animate(hideBox, {
								time: 0,
								x: '-100%',
								callback: function() {
									// -100%
									hide_box(hideBox);
								}
							});
						}
					});
					animate(showBox, {
						time: 300,
						x: 0,
						callback: function() {
							//
						}
					});				
				}
			});
		},
		
		slideup: function(showBox, hideBox) {
		    showBox.show().css('z-index', '9999');
			hideBox.show().css('z-index', '1');
			animate(showBox, {
			    time: 0,
				y: '100%',
				callback: function() {
				    animate(showBox, {
						time: 300,
						y: 0,
						callback: function() {
							animate(hideBox, {
								time: 0,
								x: '-100%',
								callback: function() {
									// -100%
									hide_box(hideBox);
								}
							});
							showBox.css('z-index', '');
			                hideBox.css('z-index', '');
						}
					});
					
				}
			});
		},
		
		slidedown: function(showBox, hideBox) {
		    showBox.show().css('z-index', '9999');
			hideBox.show().css('z-index', '1');
			animate(showBox, {
			    time: 0,
				y: '-100%',
				callback: function() {
				    animate(showBox, {
						time: 300,
						y: 0,
						callback: function() {
							animate(hideBox, {
								time: 0,
								x: '-100%',
								callback: function() {
									// -100%
									hide_box(hideBox);
								}
							});
							showBox.css('z-index', '');
			                hideBox.css('z-index', '');
						}
					});
					
				}
			});
		},
		
		closeup: function(showBox, hideBox) {
		    showBox.show().css('z-index', '1');
			hideBox.show().css('z-index', '9999');
			animate(showBox, {
				callback: function() {
				    animate(hideBox, {
						time: 300,
						y: '100%',
						callback: function() {
							animate(hideBox, {
								time: 0,
								x: '-100%',
								callback: function() {
									// -100%
									hide_box(hideBox);
								}
							});
							showBox.css('z-index', '');
			                hideBox.css('z-index', '');
						}
					});
				}
			});
		},
		
		closedown: function(showBox, hideBox) {
		    showBox.show().css('z-index', '1');
			hideBox.show().css('z-index', '9999');
			animate(showBox, {
				callback: function() {
				    animate(hideBox, {
						time: 300,
						y: '-100%',
						callback: function() {
							animate(hideBox, {
								time: 0,
								x: '-100%',
								callback: function() {
									// -100%
									hide_box(hideBox);
								}
							});
							showBox.css('z-index', '');
			                hideBox.css('z-index', '');
						}
					});
				}
			});
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