/**
 * 
 */
define(['jq', 'Mstar', 'animate'], function($, M) {
    
	var dirMap = {
	    'left': 'right',
		'right': 'left',
		'up': 'down',
		'down': 'up'
	};
	var hashToBoxMap = {};
	var animate = M.animate;
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
			var showDir = reverse ? dirMap[showData.dir] : showData.dir;
			if (hideBox) {
				animate(hideBox, {
					time: 300,
					x: '-100%',
					y: 0,
					callback: function() {
					    
					}
				});
			} else {
			    animate(box1, {
					time: 300,
					x: '-100%',
					y: 0,
					callback: function() {
					    
					}
				});
			}
			animate(showBox, {
			    time: 300,
				x: 0,
				y: 0,
				callback: function() {
					
				}
			});
			showBox.bind('renderFinish', function() {
			    new iScroll(showBox.find('.body')[0], {useTransition: true});
			});
			request(showData.hash, function() {
			    showBox.html(tmpHTML);
				showBox.trigger('renderFinish');
			});
		}
		
	};
	return M;
});