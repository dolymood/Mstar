/**
 * 
 */
(function(M, $) {
    var locn = location,
	    startHash = locn.hash;
	
	var his = M.history = {
	    
		history: [],
		activeIndex: 0,
		
		getActive: function() {
		    return his.history[his.activeIndex];
		},
		
		getLast: function() {
		    if (!his.previousIndex) return null;
			return his.history[his.previousIndex];
		},
		
		getNext: function() {
		    return his.history[his.activeIndex + 1];
		},
		
		getPrev: function() {
			return his.history[his.activeIndex - 1];
		},
		
		clearForward: function() {
		    his.history = his.history.slice( 0, his.activeIndex + 1 );  
		},
		
		add: function(url, data) {
		    data = data || {};
			
		},
		
		back: function() {
		    
		}
		
	};
	
	if (startHash && startHash!='#') {
	    
	} else {
	    
	}
})(Mstar, $);