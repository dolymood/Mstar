(function($) {
    var Mstar = Mstar || {};
    var win = this;
	var document = win.document;
	function hideAddressBar() {
	    var screenH = win.screen.height;
		var body = document.body;
		if ($.os.ios) {
		    if (win.navigator.standalone) {
			    body.style.height = screenH - 20 + 'px';
			} else {
			    body.style.height = innerHeight - 65 + 'px';
			}
		}
		
		body.addEventListener('touchmove', function(e) {
			e.preventDefault();
		});
		setInterval(function() {
			win.scrollTo(0, 1);
		}, 1100);
	}
	Mstar.start = function() {
	    if (Mstar._start) throw 'Mstar started.';
		Mstar._start = true;
		hideAddressBar();
	};
	win.M = win.Mstar = Mstar;
})(jq);