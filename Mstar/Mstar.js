(function($) {
    
	var Mstar = Mstar || {},
        win = this;
	    document = win.document,
		hasOwnProperty = Mstar.hasOwnProperty,
		ArrayProto = Array.prototype,
        nativeForEach = ArrayProto.forEach,
		slice = ArrayProto.slice,
		toStr = Mstar.toString;
	
	if (!$) throw '$ is not defined.';
	
	function hideAddressBar() {
	    var screenH = win.screen.height;
		var body = document.body;
		if ($.os.ios) {
		    if (win.navigator.standalone) {
			    body.style.height = screenH - 20 + 'px';
			} else {
			    body.style.height = innerHeight - 65 + 'px';
			}
		} else { // android
		    
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
	
	Mstar.rword = /[^, ]+/g;
	
	Mstar.has = function(obj, key) {
        return hasOwnProperty.call(obj, key);
    };
	
    Mstar.mix = function(target, source) {
        var args = Array.apply([], arguments),
            override = typeof args[args.length - 1] == 'boolean' ? args.pop() : true;
            has = Mstar.has,
            i = 1, key;
        while((source = args[i++])) {
            for (key in source) {
                if (has(source, key) && (ride || !(key in target))) {
                    target[key] = source[key];
                }
            }
        }
        return target;
    };
	
	Mstar.each = Mstar.forEach = function(obj, iterator, context) {
        if (obj == null) return;
        if (nativeForEach && obj.forEach === nativeForEach) {
            obj.forEach(iterator, context);
        } else if (obj.length === +obj.length) {
            for (var i = 0, l = obj.length; i < l; i++) {
                if (iterator.call(context, obj[i], i, obj) === false) return;
            }
        } else {
            for (var key in obj) {
                if (Mstar.has(obj, key)) {
                    if (iterator.call(context, obj[key], key, obj) === false) return;
                }
            }
        }
    };
	
    Mstar.oneObject = function(array, val) {
        if (typeof array == 'string') {
            array = array.match(Mstar.rword) || [];
        }
        var result = {},
            value = val !== void 0 ? val : 1,
            i = 0,
            len = array.length;
        for (; i < len; i++) {
            result[array[i]] = value;
        }
        return result;
    };
	
    Mstar.isFunction = function(o) {
        return toStr.call(o) === '[object Function]';
    };
    
	Mstar.isDefined = function(o) {
	    return typeof o != 'undefined';
	};

	Mstar.isString = function(o) {
	    return typeof o == 'string';
	};
	
	Mstar.isNumber = function(o) {
	    return typeof o == 'number' && isFinite(o);
	};
	
	Mstar.factory = (function(Mstar) {
        var F = function() {},
            mix = Mstar.mix,
            isArray = Array.isArray,
            unextend = Mstar.oneObject(['_super', '_superClass', 'extend', 'implement', 'prototype']),
            Class = function(o) {
                if (!(this instanceof Class) && Mstar.isFunction(o)) {
                    return classify(o);
                }
            };
        function classify(cls) {
            cls.extend || (cls.extend = Class.extend);
            cls.implement || (cls.implement = Class.implement);
            return cls;
        }
        // 提供两种方式(继承父类ParentClass)：
        // Class.create(ParentClass, {...});
        // Class.create({
        //     Extends: ParentClass，
        //     Implements: OthersClass//从其他类（数组或者单个类）中混入属性
        // });
        Class.create = function(P, properties) {
            var C, init;
            if (!Mstar.isFunction(P)) {
                properties = P;
                P = null;
            }
            properties || (properties = {});
            P || (P = properties.Extends || Class);
            init = properties.init;
            delete properties.Extends;
            delete properties.init;
            C = Mstar.isFunction(init) ?
                init :
                function() { P.apply(this, arguments); };
            inherit(C, P, properties);
            return classify(C);
        };

        // 为一个普通的函数cls添加两个方法，
        // 使得使其具有使用Class.create创建的类对象相同的能力
        function classify(cls) {
            cls.extend || (cls.extend = Class.extend);
            cls.implement || (cls.implement = implement);
            return cls;
        }
        // 给类的prototype动态添加成员（不能包含Extends ？）
        function implement(properties) {
            var mutators = Mstar.mutators,
                proto = this.prototype;
            Mstar.each(properties, function(val, key, properties) {
                if (Mstar.has(mutators, key)) {
                    mutators[key].call(this, val);
                    delete properties[key];
                } else {
                    proto[key] = val;
                }
            }, this);
        }
        // 创建子类的快捷方式 直接调用extend即可
        Class.extend = function(properties) {
            properties.Extends = this;
            return Class.create(properties);
        }

        function inherit(C, P, properties) {
            var key;
            F.prototype = P.prototype;
            C.prototype = new F;//添加原型方法
            //复制父类的静态成员
            for (key in P) {
                if (Mstar.has(P, key) && !unextend[key]) {
                    C[key] = P[key];
                }
            }
            C._super = P.prototype;//重新指定_super方便调用
            C._superClass = P;
            implement.call(C, properties);
            C.prototype.constructor = C;//修整constructor
        }

        Mstar.mutators = {
            // 从items这些类中混入属性
            'Implements': function(items) {
                var proto = this.prototype;
                isArray(items) || (items = [items]);
                items.forEach(function(item) {
                    mix(proto, item.prototype || item);
                });
            }
        };
        return Class.create;
    })(Mstar);
	
	win.M = win.Mstar = Mstar;
})($);