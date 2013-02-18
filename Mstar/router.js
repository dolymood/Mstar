/**
 * 
 */
define(['jq', 'Mstar', 'slider'], function($, M) {
    
	var dirMap = {
	    'left': 'right',
		'right': 'left',
		'up': 'down',
		'down': 'up'
	};
	var hashToBoxMap = {};
	var slide = M.slider.slide;
	var box1 = $('#box1');
	var tmpHTML = box1.html();// 模拟数据 html部分
	
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
	
	M.router = {
	    
		route: function(hideData, showData, reverse) {
			if (hideData) { // 第一次初始化的时候是没有hideData的
			    console.log('隐藏：' + hideData.hash + ':' + (reverse ? dirMap[hideData.dir] : hideData.dir));
				var hideBox = getBox(hideData.hash);
			}
			console.log('显示：' + showData.hash + '::' + (reverse ? dirMap[showData.dir] : showData.dir));
			var showBox = getBox(showData.hash);
			slide(showBox, (hideBox || box1), reverse ? hideData.dir : showData.dir, reverse);
			showBox.bind('renderFinish', function() {
			    new iScroll(showBox.find('.body')[0], {useTransition: true});
			});
			if (!showBox._hasRendered_) {
			    request(showData.hash, function() {
					showBox.html(tmpHTML);
					showBox.trigger('renderFinish');
				});
				showBox._hasRendered_ = true;
			}
			
		}
		
	};
	return M;
});