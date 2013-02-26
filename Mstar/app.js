define([
    'jq',
	'ApplicationCacheSupport',
	'navigator',
	'storage'],
function($, AppSupport, M, storage) {
	
	AppSupport.bind('online', function() {
	    AppSupport.isOnline = true;
	});
	AppSupport.bind('offline', function() {
	    AppSupport.isOnline = false;
	});
	if (!M.ajax) {
	    var locStorage = storage.local;
		M.ajax = function() {
		    if (AppSupport.isOnline) { // 在线
			    $.ajax.apply($.ajax, arguments);
			} else {
			    // locStorage.get()
			}
		};
	}
	
	M.start();
	M.navigator.start();
});

