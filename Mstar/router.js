/**
 * 
 */
define(['jq', 'Mstar', 'slider', 'FramesConfig'], function($, M, M1, FramesConfig) {
    
	var dirMap = {
	    'left': 'right',
		'right': 'left',
		'up': 'down',
		'down': 'up'
	};
	var hashToBoxMap = {};
	var slide = M.slider.slide;
	var loading = $('#loading');
	var box1 = $('#box1');
	
	var tmpHTML = box1.html();// 模拟数据 html部分
	var tmpHeader = {
	    data: {
		    showBack: false,
			content: '模拟数据创建header'
		}
	};
	
	function createBox(hash) {
	    var box = document.createElement('div');
		box.id = hash.replace(/^#/, '');
		box.className = 'box';
		box.style.webkitTransform = 'translate3d(-100%, 0, 0)';
		document.body.appendChild(box);
		return box;
	}
	
	function getBox(hash) {
	    var box = hashToBoxMap[hash];
		if (!box) {
		    box = $(createBox(hash));
			hashToBoxMap[hash] = box;
		}
		return box;
	}
	
	function request(hash, callback) {
	    setTimeout(function() {
		    callback();
		}, 600);
	}
	
	function navFrame(showBox, hash, data) {
	    hash = '#fridoc';
		var modules = FramesConfig[hash.replace(/^#/, '')].modules;
		// modules.forEach(function(module, i) {
			// modules[i] = 'Module/' + module + 'Module';
		// });
		require(modules, function() {
		    var args = M.slice.call(arguments);
			args.forEach(function(arg) {
			    new arg(data).view.$el.appendTo(showBox);
			});
			showBox.html(showBox.html() + tmpHTML);
			showBox.trigger('renderFinish');
		});
	}
	
	M.router = {
	    
		route: function(hideData, showData, reverse) {
			if (hideData) { // 第一次初始化的时候是没有hideData的
			    console.log('隐藏：' + hideData.hash + ':' + (reverse ? dirMap[hideData.dir] : hideData.dir));
				var hideBox = getBox(hideData.hash);
			}
			console.log('显示：' + showData.hash + '::' + (reverse ? dirMap[showData.dir] : showData.dir));
			var showBox = getBox(showData.hash);
			showBox.bind('renderFinish', function() {
			    new iScroll(showBox.find('.body')[0], {useTransition: true});
				M.animate(showBox);
				M.animate(loading, {
				    x: '-100%'
				});
			});
			if (!showBox._hasRendered_) {
			    slide(loading, (hideBox || box1), reverse ? hideData.dir : showData.dir, reverse);
				request(showData.hash, function() {
					navFrame(showBox, showData.hash, tmpHeader);
				});
				showBox._hasRendered_ = true;
			} else {
			    slide(showBox, (hideBox || box1), reverse ? hideData.dir : showData.dir, reverse);
			}
		}
		
	};
	return M;
});