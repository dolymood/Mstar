/**
 *
 */
define(function() {
	// 暂时这样 利用此处的配置信息进行组合的形式来初始化对应的画面信息
	// 不知道效果如何 待测试
	return {
		
		fridoc: {
		    
			modules: [ // 包含的是此画面需要哪些模块组合
				'Module/HeaderModule'
				// 'PullRefresh',
				// 'Timeline',
				// 'Footer'
			]
			
		},
		
		profile: {
		    
			modules: [
			    'Header',
				'UserCard',
				'Switcher'
			],
			
			frames: [] // 包含的是此画面需要的额外的一些控制
		}
		
	};
});