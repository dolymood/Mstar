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
	
	var tmpData = {
	    status: 1,
		statusText: 'ok',
		data: {
			header: {
			    showBack: false,
			    content: 'header'
			},
			rows: [{
			    url: '#/ttttt/111111',
				bgurl: 'http://s5.cr.itc.cn/mblog/icon/60/c7/m_69403172714226736.png',
				title: '我们的日子里',
				content: '放的空间我们的供是科幻的是美我们的日子里我们的日子里的发剧中华是的没途径是打火',
				mediaurl: ''
			}, {
			    url: '#/ttttt/111112',
				bgurl: 'http://s5.cr.itc.cn/mblog/icon/60/c7/m_69403172714226736.png',
				title: '我们的日子里',
				content: '是科幻的是美我们的日子里我们的日子里的发剧放没途径是打火的空间我们的供中华是的是科幻的是美我们的日子里我们的日子里的发剧放没途径是打火的空间我们的供中华是的',
				mediaurl: 'http://s2.t.itc.cn/mblog/pic/20131_17_18/ls2dc395672561482.jpg'
			}, {
			    url: '#/ttttt/111113',
				bgurl: 'http://s5.cr.itc.cn/mblog/icon/60/c7/m_69403172714226736.png',
				title: '我们的日子里',
				content: '放的空间我们的供是科幻的是美我们的日子里我们的日子里的发剧中华是的没途径是打火',
				mediaurl: 'http://s1.t.itc.cn/mblog/pic/20131_17_14/45fmy282222606482.jpg'
			}, {
			    url: '#/ttttt/111114',
				bgurl: 'http://s5.cr.itc.cn/mblog/icon/60/c7/m_69403172714226736.png',
				title: '我们的日子里',
				content: '放的空间我们的供是科幻的是美我们的日子里我们的日子里的发剧中华是的没途径是打火',
				mediaurl: 'http://s2.t.itc.cn/mblog/pic/20131_17_17/5z6gl319370429482.jpg'
			}, {
			    url: '#/ttttt/111115',
				bgurl: 'http://s5.cr.itc.cn/mblog/icon/60/c7/m_69403172714226736.png',
				title: '我们的日子里',
				content: '放的空间我们的供是科幻的是美我们的日子里我们的日子里的发剧中华是的没途径是打火',
				mediaurl: 'http://s1.t.itc.cn/mblog/pic/20131_17_18/vz8gb443070540482.jpg'
			}, {
			    url: '#/ttttt/111116',
				bgurl: 'http://s5.cr.itc.cn/mblog/icon/60/c7/m_69403172714226736.png',
				title: '我们的日子里',
				content: '是科幻的是美我们的日子里我们的日子里的发剧放没途径是打火的空间我们的供中华是的是科幻的是美我们的日子里我们的日子里的发剧放没途径是打火的空间我们的供中华是的',
				mediaurl: 'http://s2.t.itc.cn/mblog/pic/20131_17_18/r3dcm443269508482.jpg'
			}, {
			    url: '#/ttttt/111117',
				bgurl: 'http://s5.cr.itc.cn/mblog/icon/60/c7/m_69403172714226736.png',
				title: '我们的日子里',
				content: '放的空间我们的供是科幻的是美我们的日子里我们的日子里的发剧中华是的没途径是打火',
				mediaurl: 'http://s3.t.itc.cn/mblog/pic/20131_17_18/nzipz465510557482.jpg'
			}, {
			    url: '#/ttttt/111118',
				bgurl: 'http://s5.cr.itc.cn/mblog/icon/60/c7/m_69403172714226736.png',
				title: '我们的日子里',
				content: '放的空间我们的供是科幻的是美我们的日子里我们的日子里的发剧中华是的没途径是打火',
				mediaurl: 'http://s1.t.itc.cn/mblog/pic/20131_17_14/45fmy282222606482.jpg'
			}, {
			    url: '#/ttttt/111119',
				bgurl: 'http://s5.cr.itc.cn/mblog/icon/60/c7/m_69403172714226736.png',
				title: '我们的日子里',
				content: '是科幻的是美我们的日子里我们的日子里的发剧放没途径是打火的空间我们的供中华是的是科幻的是美我们的日子里我们的日子里的发剧放没途径是打火的空间我们的供中华是的',
				mediaurl: 'http://s2.t.itc.cn/mblog/pic/20131_17_18/ls2dc395672561482.jpg'
			}, {
			    url: '#/ttttt/111121',
				bgurl: 'http://s5.cr.itc.cn/mblog/icon/60/c7/m_69403172714226736.png',
				title: '我们的日子里',
				content: '放的空间我们的供是科幻的是美我们的日子里我们的日子里的发剧中华是的没途径是打火',
				mediaurl: 'http://s3.t.itc.cn/mblog/pic/20131_17_18/nzipz465510557482.jpg'
			}, {
			    url: '#/ttttt/111122',
				bgurl: 'http://s5.cr.itc.cn/mblog/icon/60/c7/m_69403172714226736.png',
				title: '我们的日子里',
				content: '放的空间我们的供是科幻的是美我们的日子里我们的日子里的发剧中华是的没途径是打火',
				mediaurl: ''
			}, {
			    url: '#/ttttt/111123',
				bgurl: 'http://s5.cr.itc.cn/mblog/icon/60/c7/m_69403172714226736.png',
				title: '我们的日子里',
				content: '放的空间我们的供是科幻的是美我们的日子里我们的日子里的发剧中华是的没途径是打火',
				mediaurl: 'http://s1.t.itc.cn/mblog/pic/20131_17_14/45fmy282222606482.jpg'
			}, {
			    url: '#/ttttt/111124',
				bgurl: 'http://s5.cr.itc.cn/mblog/icon/60/c7/m_69403172714226736.png',
				title: '我们的日子里',
				content: '是科幻的是美我们的日子里我们的日子里的发剧放没途径是打火的空间我们的供中华是的是科幻的是美我们的日子里我们的日子里的发剧放没途径是打火的空间我们的供中华是的',
				mediaurl: 'http://s2.t.itc.cn/mblog/pic/20131_17_18/ls2dc395672561482.jpg'
			}, {
			    url: '#/ttttt/111125',
				bgurl: 'http://s5.cr.itc.cn/mblog/icon/60/c7/m_69403172714226736.png',
				title: '我们的日子里',
				content: '放的空间我们的供是科幻的是美我们的日子里我们的日子里的发剧中华是的没途径是打火',
				mediaurl: 'http://s2.t.itc.cn/mblog/pic/20131_17_18/ls2dc395672561482.jpg'
			}, {
			    url: '#/ttttt/111126',
				bgurl: 'http://s5.cr.itc.cn/mblog/icon/60/c7/m_69403172714226736.png',
				title: '我们的日子里',
				content: '是科幻的是美我们的日子里我们的日子里的发剧放没途径是打火的空间我们的供中华是的是科幻的是美我们的日子里我们的日子里的发剧放没途径是打火的空间我们的供中华是的',
				mediaurl: 'http://s2.t.itc.cn/mblog/pic/20131_17_18/ls2dc395672561482.jpg'
			}, {
			    url: '#/ttttt/111127',
				bgurl: 'http://s5.cr.itc.cn/mblog/icon/60/c7/m_69403172714226736.png',
				title: '我们的日子里',
				content: '放的空间我们的供是科幻的是美我们的日子里我们的日子里的发剧中华是的没途径是打火',
				mediaurl: 'http://s1.t.itc.cn/mblog/pic/20131_17_14/45fmy282222606482.jpg'
			}, {
			    url: '#/ttttt/111128',
				bgurl: 'http://s5.cr.itc.cn/mblog/icon/60/c7/m_69403172714226736.png',
				title: '我们的日子里',
				content: '是科幻的是美我们的日子里我们的日子里的发剧放没途径是打火的空间我们的供中华是的是科幻的是美我们的日子里我们的日子里的发剧放没途径是打火的空间我们的供中华是的',
				mediaurl: 'http://s3.t.itc.cn/mblog/pic/20131_17_18/nzipz465510557482.jpg'
			}, {
			    url: '#/ttttt/111129',
				bgurl: 'http://s5.cr.itc.cn/mblog/icon/60/c7/m_69403172714226736.png',
				title: '我们的日子里',
				content: '放的空间我们的供是科幻的是美我们的日子里我们的日子里的发剧中华是的没途径是打火',
				mediaurl: 'http://s2.t.itc.cn/mblog/pic/20131_17_18/ls2dc395672561482.jpg'
			}, {
			    url: '#/ttttt/111130',
				bgurl: 'http://s5.cr.itc.cn/mblog/icon/60/c7/m_69403172714226736.png',
				title: '我们的日子里',
				content: '是科幻的是美我们的日子里我们的日子里的发剧放没途径是打火的空间我们的供中华是的是科幻的是美我们的日子里我们的日子里的发剧放没途径是打火的空间我们的供中华是的',
				mediaurl: 'http://s2.t.itc.cn/mblog/pic/20131_17_18/ls2dc395672561482.jpg'
			}, {
			    url: '#/ttttt/111131',
				bgurl: 'http://s5.cr.itc.cn/mblog/icon/60/c7/m_69403172714226736.png',
				title: '我们的日子里',
				content: '放的空间我们的供是科幻的是美我们的日子里我们的日子里的发剧中华是的没途径是打火',
				mediaurl: 'http://s3.t.itc.cn/mblog/pic/20131_17_18/nzipz465510557482.jpg'
			}, {
			    url: '#/ttttt/111132',
				bgurl: 'http://s5.cr.itc.cn/mblog/icon/60/c7/m_69403172714226736.png',
				title: '我们的日子里',
				content: '放的空间我们的供是科幻的是美我们的日子里我们的日子里的发剧中华是的没途径是打火',
				mediaurl: 'http://s1.t.itc.cn/mblog/pic/20131_17_14/45fmy282222606482.jpg'
			}, {
			    url: '#/ttttt/111133',
				bgurl: 'http://s5.cr.itc.cn/mblog/icon/60/c7/m_69403172714226736.png',
				title: '我们的日子里',
				content: '是科幻的是美我们的日子里我们的日子里的发剧放没途径是打火的空间我们的供中华是的是科幻的是美我们的日子里我们的日子里的发剧放没途径是打火的空间我们的供中华是的',
				mediaurl: 'http://s2.t.itc.cn/mblog/pic/20131_17_18/ls2dc395672561482.jpg'
			}, {
			    url: '#/ttttt/111134',
				bgurl: 'http://s5.cr.itc.cn/mblog/icon/60/c7/m_69403172714226736.png',
				title: '我们的日子里',
				content: '放的空间我们的供是科幻的是美我们的日子里我们的日子里的发剧中华是的没途径是打火',
				mediaurl: 'http://s3.t.itc.cn/mblog/pic/20131_17_18/nzipz465510557482.jpg'
			}, {
			    url: '#/ttttt/111135',
				bgurl: 'http://s5.cr.itc.cn/mblog/icon/60/c7/m_69403172714226736.png',
				title: '我们的日子里',
				content: '放的空间我们的供是科幻的是美我们的日子里我们的日子里的发剧中华是的没途径是打火',
				mediaurl: 'http://s2.t.itc.cn/mblog/pic/20131_17_18/ls2dc395672561482.jpg'
			}, {
			    url: '#/ttttt/111136',
				bgurl: 'http://s5.cr.itc.cn/mblog/icon/60/c7/m_69403172714226736.png',
				title: '我们的日子里',
				content: '是科幻的是美我们的日子里我们的日子里的发剧放没途径是打火的空间我们的供中华是的是科幻的是美我们的日子里我们的日子里的发剧放没途径是打火的空间我们的供中华是的',
				mediaurl: 'http://s2.t.itc.cn/mblog/pic/20131_17_18/ls2dc395672561482.jpg'
			}, {
			    url: '#/ttttt/111137',
				bgurl: 'http://s5.cr.itc.cn/mblog/icon/60/c7/m_69403172714226736.png',
				title: '我们的日子里',
				content: '放的空间我们的供是科幻的是美我们的日子里我们的日子里的发剧中华是的没途径是打火',
				mediaurl: 'http://s1.t.itc.cn/mblog/pic/20131_17_14/45fmy282222606482.jpg'
			}, {
			    url: '#/ttttt/111138',
				bgurl: 'http://s5.cr.itc.cn/mblog/icon/60/c7/m_69403172714226736.png',
				title: '我们的日子里',
				content: '放的空间我们的供是科幻的是美我们的日子里我们的日子里的发剧中华是的没途径是打火',
				mediaurl: 'http://s2.t.itc.cn/mblog/pic/20131_17_18/ls2dc395672561482.jpg'
			}, {
			    url: '#/ttttt/111139',
				bgurl: 'http://s5.cr.itc.cn/mblog/icon/60/c7/m_69403172714226736.png',
				title: '我们的日子里',
				content: '是科幻的是美我们的日子里我们的日子里的发剧放没途径是打火的空间我们的供中华是的是科幻的是美我们的日子里我们的日子里的发剧放没途径是打火的空间我们的供中华是的',
				mediaurl: 'http://s2.t.itc.cn/mblog/pic/20131_17_18/ls2dc395672561482.jpg'
			}, {
			    url: '#/ttttt/111140',
				bgurl: 'http://s5.cr.itc.cn/mblog/icon/60/c7/m_69403172714226736.png',
				title: '我们的日子里',
				content: '是科幻的是美我们的日子里我们的日子里的发剧放没途径是打火的空间我们的供中华是的是科幻的是美我们的日子里我们的日子里的发剧放没途径是打火的空间我们的供中华是的',
				mediaurl: 'http://s2.t.itc.cn/mblog/pic/20131_17_18/ls2dc395672561482.jpg'
			}, {
			    url: '#/ttttt/111141',
				bgurl: 'http://s5.cr.itc.cn/mblog/icon/60/c7/m_69403172714226736.png',
				title: '我们的日子里',
				content: '放的空间我们的供是科幻的是美我们的日子里我们的日子里的发剧中华是的没途径是打火',
				mediaurl: 'http://s1.t.itc.cn/mblog/pic/20131_17_14/45fmy282222606482.jpg'
			}, {
			    url: '#/ttttt/111111',
				bgurl: 'http://s5.cr.itc.cn/mblog/icon/60/c7/m_69403172714226736.png',
				title: '我们的日子里',
				content: '是科幻的是美我们的日子里我们的日子里的发剧放没途径是打火的空间我们的供中华是的是科幻的是美我们的日子里我们的日子里的发剧放没途径是打火的空间我们的供中华是的',
				mediaurl: 'http://s2.t.itc.cn/mblog/pic/20131_17_18/ls2dc395672561482.jpg'
			}],
			
			moreurl: 'http://w.sohu.com/m/a_fff.do?p=2&pageno=10'
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
		    callback(tmpData);
		}, 600);
	}
	
	function navFrame(showBox, hash, data) {
	    data.data.header.content += hash;
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
			    // new iScroll(showBox.find('.body')[0], {useTransition: true});
				M.animate(showBox);
				M.animate(loading, {
				    x: '-100%'
				});
			});
			if (!showBox._hasRendered_) {
			    slide(loading, (hideBox || box1), reverse ? hideData.dir : showData.dir, reverse);
				request(showData.hash, function(data) {
					navFrame(showBox, showData.hash, data);
				});
				showBox._hasRendered_ = true;
			} else {
			    slide(showBox, (hideBox || box1), reverse ? hideData.dir : showData.dir, reverse);
			}
		}
		
	};
	return M;
});