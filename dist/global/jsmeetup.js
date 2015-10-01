/*[global-shim-start]*/
(function (exports, global){
	var origDefine = global.define;

	var get = function(name){
		var parts = name.split("."),
			cur = global,
			i;
		for(i = 0 ; i < parts.length; i++){
			if(!cur) {
				break;
			}
			cur = cur[parts[i]];
		}
		return cur;
	};
	var modules = (global.define && global.define.modules) ||
		(global._define && global._define.modules) || {};
	var ourDefine = global.define = function(moduleName, deps, callback){
		var module;
		if(typeof deps === "function") {
			callback = deps;
			deps = [];
		}
		var args = [],
			i;
		for(i =0; i < deps.length; i++) {
			args.push( exports[deps[i]] ? get(exports[deps[i]]) : ( modules[deps[i]] || get(deps[i]) )  );
		}
		// CJS has no dependencies but 3 callback arguments
		if(!deps.length && callback.length) {
			module = { exports: {} };
			var require = function(name) {
				return exports[name] ? get(exports[name]) : modules[name];
			};
			args.push(require, module.exports, module);
		}
		// Babel uses the exports and module object.
		else if(!args[0] && deps[0] === "exports") {
			module = { exports: {} };
			args[0] = module.exports;
			if(deps[1] === "module") {
				args[1] = module;
			}
		} else if(!args[0] && deps[0] === "module") {
			args[0] = { id: moduleName };
		}

		global.define = origDefine;
		var result = callback ? callback.apply(null, args) : undefined;
		global.define = ourDefine;

		// Favor CJS module.exports over the return value
		modules[moduleName] = module && module.exports ? module.exports : result;
	};
	global.define.orig = origDefine;
	global.define.modules = modules;
	global.define.amd = true;
	ourDefine("@loader", [], function(){
		// shim for @@global-helpers
		var noop = function(){};
		return {
			get: function(){
				return { prepareGlobal: noop, retrieveGlobal: noop };
			},
			global: global,
			__exec: function(__load){
				eval("(function() { " + __load.source + " \n }).call(global);");
			}
		};
	});
})({},window)
/*fixtures/folders*/
define('jsmeetup/fixtures/folders', [
    'exports',
    'module',
    'can/util/fixture/fixture'
], function (exports, module, _canUtilFixture) {
    'use strict';
    function _interopRequireDefault(obj) {
        return obj && obj.__esModule ? obj : { 'default': obj };
    }
    var _fixture = _interopRequireDefault(_canUtilFixture);
    can.fixture({
        'GET /api/folders': function GETApiFolders() {
            return [
                {
                    id: 'inbox',
                    name: 'Inbox'
                },
                {
                    id: 'sent',
                    name: 'Sent'
                },
                {
                    id: 'later',
                    name: 'Later'
                },
                {
                    id: 'trash',
                    name: 'Trash'
                }
            ];
        }
    });
    module.exports = _fixture['default'];
});
/*fixtures/contacts*/
define('jsmeetup/fixtures/contacts', [
    'exports',
    'module',
    'can/util/fixture/fixture'
], function (exports, module, _canUtilFixture) {
    'use strict';
    function _interopRequireDefault(obj) {
        return obj && obj.__esModule ? obj : { 'default': obj };
    }
    var _fixture = _interopRequireDefault(_canUtilFixture);
    can.fixture({
        'GET /api/contacts': function GETApiContacts() {
            return [
                {
                    'id': 'contact_342',
                    'firstName': 'Michael',
                    'lastName': 'Smith',
                    'email': 'ms@proxyweb.com'
                },
                {
                    'id': 'contact_377',
                    'firstName': 'Mary',
                    'lastName': 'Jones',
                    'email': 'mary@jones.net'
                },
                {
                    'id': 'contact_398',
                    'firstName': 'Billy',
                    'lastName': 'Idiot',
                    'email': 'william_idiot@gmail.com'
                }
            ];
        }
    });
    module.exports = _fixture['default'];
});
/*fixtures/emails*/
define('jsmeetup/fixtures/emails', [
    'exports',
    'module',
    'can/util/fixture/fixture'
], function (exports, module, _canUtilFixture) {
    'use strict';
    function _interopRequireDefault(obj) {
        return obj && obj.__esModule ? obj : { 'default': obj };
    }
    var _fixture = _interopRequireDefault(_canUtilFixture);
    (0, _fixture['default'])({
        'GET /api/emails': function GETApiEmails(request) {
            return [
                {
                    'id': 'mail_2139',
                    'contact_id': 'contact_342',
                    'folders': ['inbox'],
                    'time': 1334891976104,
                    'subject': 'Consectetur adipiscing elit',
                    'message': 'Vestibulum vestibulum varius diam in iaculis. Praesent ultrices dui vitae nibh malesuada non iaculis ante vulputate. Suspendisse feugiat ultricies egestas. Aenean a odio libero. Quisque mollis leo et est euismod sit amet dignissim sapien venenatis. Morbi interdum adipiscing massa'
                },
                {
                    'id': 'mail_2143',
                    'contact_id': 'contact_377',
                    'folders': [
                        'inbox',
                        'later'
                    ],
                    'important': 'true',
                    'time': 1334884976104,
                    'subject': 'Neque porro quisquam velit!!',
                    'message': 'Curabitur sollicitudin mi eget sapien posuere semper. Fusce at neque et lacus luctus vulputate vehicula ac enim'
                },
                {
                    'id': 'mail_2154',
                    'contact_id': 'contact_398',
                    'folders': ['inbox'],
                    'important': 'true',
                    'unread': 'true',
                    'time': 1334874976199,
                    'subject': 'Proin egestas aliquam :)',
                    'message': 'Aenean nec erat id ipsum faucibus tristique. Nam blandit est lacinia turpis consectetur elementum. Nulla in risus ut sapien dignissim feugiat. Proin ultrices sodales imperdiet. Vestibulum vehicula blandit tincidunt. Vivamus posuere rhoncus orci, porta commodo mauris aliquam nec'
                },
                {
                    'id': 'mail_2176',
                    'contact_id': 'contact_377',
                    'folders': ['inbox'],
                    'time': 1334884976104,
                    'subject': 'Sed ut perspiciatis unde omnis?',
                    'message': 'laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt. Neque porro quisquam est, qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit, sed quia non numquam eius modi tempora incidunt ut labore et dolore magnam aliquam quaerat voluptatem.'
                },
                {
                    'id': 'mail_2191',
                    'contact_id': 'contact_398',
                    'folders': ['inbox'],
                    'unread': 'true',
                    'time': 1334874976199,
                    'subject': 'At vero eos et accusamus!',
                    'message': 'Nam libero tempore, cum soluta nobis est eligendi optio cumque nihil impedit quo minus id quod maxime placeat facere possimus, omnis voluptas assumenda est, omnis dolor repellendus. Temporibus autem quibusdam et aut officiis debitis aut rerum necessitatibus saepe eveniet ut et voluptates repudiandae sint et molestiae non recusandae. Itaque earum rerum hic tenetur a sapiente delectus, ut aut reiciendis voluptatibus maiores alias consequatur aut perferendis doloribus asperiores repellat'
                },
                {
                    'id': 'mail_2203',
                    'contact_id': 'contact_377',
                    'folders': ['later'],
                    'important': 'true',
                    'time': 1334874576199,
                    'subject': 'Mi netus convallis',
                    'message': 'Egestas morbi at. Curabitur aliquet et commodo nonummy, aliquam quis arcu, sed pellentesque vitae molestie mattis magna, in eget, risus nulla vivamus vulputate'
                },
                {
                    'id': 'mail_2212',
                    'contact_id': 'contact_398',
                    'folders': ['sent'],
                    'time': 1334874579867,
                    'subject': 'Fusce tristique pretium eros a gravida',
                    'message': 'Proin malesuada'
                },
                {
                    'id': 'mail_2021',
                    'contact_id': 'contact_342',
                    'folders': ['trash'],
                    'time': 1134874579824,
                    'subject': 'Phasellus vitae interdum nulla.',
                    'message': 'Pellentesque quam eros, mollis quis vulputate eget, pellentesque nec ipsum. Cras dignissim fringilla ligula, ac ullamcorper dui convallis blandit. Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Etiam id nunc ac orci hendrerit faucibus vel in ante. Mauris nec est turpis, ut fringilla mi. Suspendisse vel tortor at nulla facilisis venenatis in sit amet ligula.'
                },
                {
                    'id': 'mail_1976',
                    'contact_id': 'contact_377',
                    'folders': ['trash'],
                    'time': 1034874579813,
                    'subject': 'Fusce tristique pretium :(',
                    'message': 'aliquam quis arcu.'
                }
            ];
        },
        'DELETE /api/emails/{id}': function DELETEApiEmailsId() {
            return {};
        }
    });
    module.exports = _fixture['default'];
});
/*components/navigation/navigation.stache!can@2.3.0-pre.13#view/stache/system*/
define('jsmeetup/navigation/navigation.stache', [
    'module',
    'can/view/stache/stache',
    'can/view/stache/mustache_core'
], function (module, stache, mustacheCore) {
    var renderer = stache([
            {
                'tokenType': 'start',
                'args': [
                    'ul',
                    false
                ]
            },
            {
                'tokenType': 'attrStart',
                'args': ['class']
            },
            {
                'tokenType': 'attrValue',
                'args': ['nav nav-pills nav-stacked']
            },
            {
                'tokenType': 'attrEnd',
                'args': ['class']
            },
            {
                'tokenType': 'end',
                'args': [
                    'ul',
                    false
                ]
            },
            {
                'tokenType': 'special',
                'args': ['#each folders']
            },
            {
                'tokenType': 'chars',
                'args': ['\n\t\t\t\t']
            },
            {
                'tokenType': 'start',
                'args': [
                    'li',
                    false
                ]
            },
            {
                'tokenType': 'attrStart',
                'args': ['class']
            },
            {
                'tokenType': 'special',
                'args': ['#eq folder id']
            },
            {
                'tokenType': 'attrValue',
                'args': ['active']
            },
            {
                'tokenType': 'special',
                'args': ['/eq']
            },
            {
                'tokenType': 'attrEnd',
                'args': ['class']
            },
            {
                'tokenType': 'end',
                'args': [
                    'li',
                    false
                ]
            },
            {
                'tokenType': 'chars',
                'args': ['\n\t\t\t\t\t']
            },
            {
                'tokenType': 'start',
                'args': [
                    'a',
                    false
                ]
            },
            {
                'tokenType': 'attrStart',
                'args': ['can-href']
            },
            {
                'tokenType': 'attrValue',
                'args': ['{folder=id}']
            },
            {
                'tokenType': 'attrEnd',
                'args': ['can-href']
            },
            {
                'tokenType': 'end',
                'args': [
                    'a',
                    false
                ]
            },
            {
                'tokenType': 'special',
                'args': ['name']
            },
            {
                'tokenType': 'close',
                'args': ['a']
            },
            {
                'tokenType': 'chars',
                'args': ['\n\t\t\t\t']
            },
            {
                'tokenType': 'close',
                'args': ['li']
            },
            {
                'tokenType': 'special',
                'args': ['/each']
            },
            {
                'tokenType': 'chars',
                'args': ['\n\t\t\t']
            },
            {
                'tokenType': 'close',
                'args': ['ul']
            },
            {
                'tokenType': 'done',
                'args': []
            }
        ]);
    return function (scope, options) {
        var moduleOptions = { module: module };
        if (!(options instanceof mustacheCore.Options)) {
            options = new mustacheCore.Options(options || {});
        }
        return renderer(scope, options.add(moduleOptions));
    };
});
/*components/navigation/navigation*/
define('jsmeetup/components/navigation/navigation', [
    'exports',
    'can',
    'jsmeetup/navigation/navigation.stache'
], function (exports, _can, _navigationStache) {
    'use strict';
    function _interopRequireDefault(obj) {
        return obj && obj.__esModule ? obj : { 'default': obj };
    }
    var _can2 = _interopRequireDefault(_can);
    var _template = _interopRequireDefault(_navigationStache);
    _can2['default'].Component.extend({
        tag: 'ui-navigation',
        template: _template['default']
    });
});
/*components/toolbar/toolbar.stache!can@2.3.0-pre.13#view/stache/system*/
define('jsmeetup/toolbar/toolbar.stache', [
    'module',
    'can/view/stache/stache',
    'can/view/stache/mustache_core'
], function (module, stache, mustacheCore) {
    var renderer = stache([
            {
                'tokenType': 'start',
                'args': [
                    'div',
                    false
                ]
            },
            {
                'tokenType': 'attrStart',
                'args': ['class']
            },
            {
                'tokenType': 'attrValue',
                'args': ['btn-group']
            },
            {
                'tokenType': 'attrEnd',
                'args': ['class']
            },
            {
                'tokenType': 'end',
                'args': [
                    'div',
                    false
                ]
            },
            {
                'tokenType': 'chars',
                'args': ['\n\t']
            },
            {
                'tokenType': 'start',
                'args': [
                    'button',
                    false
                ]
            },
            {
                'tokenType': 'attrStart',
                'args': ['class']
            },
            {
                'tokenType': 'attrValue',
                'args': ['btn btn-default move-action mail-action']
            },
            {
                'tokenType': 'attrEnd',
                'args': ['class']
            },
            {
                'tokenType': 'special',
                'args': ['^selected.length']
            },
            {
                'tokenType': 'attrStart',
                'args': ['disabled']
            },
            {
                'tokenType': 'attrValue',
                'args': ['disabled']
            },
            {
                'tokenType': 'attrEnd',
                'args': ['disabled']
            },
            {
                'tokenType': 'special',
                'args': ['/selected.length']
            },
            {
                'tokenType': 'attrStart',
                'args': ['id']
            },
            {
                'tokenType': 'attrValue',
                'args': ['trash']
            },
            {
                'tokenType': 'attrEnd',
                'args': ['id']
            },
            {
                'tokenType': 'end',
                'args': [
                    'button',
                    false
                ]
            },
            {
                'tokenType': 'chars',
                'args': ['\n\t\t']
            },
            {
                'tokenType': 'start',
                'args': [
                    'i',
                    false
                ]
            },
            {
                'tokenType': 'attrStart',
                'args': ['class']
            },
            {
                'tokenType': 'attrValue',
                'args': ['glyphicon glyphicon-trash']
            },
            {
                'tokenType': 'attrEnd',
                'args': ['class']
            },
            {
                'tokenType': 'end',
                'args': [
                    'i',
                    false
                ]
            },
            {
                'tokenType': 'close',
                'args': ['i']
            },
            {
                'tokenType': 'chars',
                'args': ['\n\t\tDelete\n\t']
            },
            {
                'tokenType': 'close',
                'args': ['button']
            },
            {
                'tokenType': 'chars',
                'args': ['\n\t']
            },
            {
                'tokenType': 'start',
                'args': [
                    'button',
                    false
                ]
            },
            {
                'tokenType': 'attrStart',
                'args': ['class']
            },
            {
                'tokenType': 'attrValue',
                'args': ['btn btn-default ']
            },
            {
                'tokenType': 'special',
                'args': ['^selected.length']
            },
            {
                'tokenType': 'attrValue',
                'args': ['disabled']
            },
            {
                'tokenType': 'special',
                'args': ['/selected.length']
            },
            {
                'tokenType': 'attrValue',
                'args': [' mail-action']
            },
            {
                'tokenType': 'attrEnd',
                'args': ['class']
            },
            {
                'tokenType': 'attrStart',
                'args': ['id']
            },
            {
                'tokenType': 'attrValue',
                'args': ['move']
            },
            {
                'tokenType': 'attrEnd',
                'args': ['id']
            },
            {
                'tokenType': 'end',
                'args': [
                    'button',
                    false
                ]
            },
            {
                'tokenType': 'chars',
                'args': ['\n\t\t']
            },
            {
                'tokenType': 'start',
                'args': [
                    'i',
                    false
                ]
            },
            {
                'tokenType': 'attrStart',
                'args': ['class']
            },
            {
                'tokenType': 'attrValue',
                'args': ['glyphicon glyphicon-move']
            },
            {
                'tokenType': 'attrEnd',
                'args': ['class']
            },
            {
                'tokenType': 'end',
                'args': [
                    'i',
                    false
                ]
            },
            {
                'tokenType': 'close',
                'args': ['i']
            },
            {
                'tokenType': 'chars',
                'args': ['\n\t\tMove\n\t']
            },
            {
                'tokenType': 'close',
                'args': ['button']
            },
            {
                'tokenType': 'chars',
                'args': ['\n\t']
            },
            {
                'tokenType': 'start',
                'args': [
                    'button',
                    false
                ]
            },
            {
                'tokenType': 'attrStart',
                'args': ['class']
            },
            {
                'tokenType': 'attrValue',
                'args': ['btn btn-default mail-action']
            },
            {
                'tokenType': 'attrEnd',
                'args': ['class']
            },
            {
                'tokenType': 'special',
                'args': ['#enableForOne selected.length']
            },
            {
                'tokenType': 'attrStart',
                'args': ['disabled']
            },
            {
                'tokenType': 'attrValue',
                'args': ['disabled']
            },
            {
                'tokenType': 'attrEnd',
                'args': ['disabled']
            },
            {
                'tokenType': 'special',
                'args': ['/enableForOne']
            },
            {
                'tokenType': 'end',
                'args': [
                    'button',
                    false
                ]
            },
            {
                'tokenType': 'chars',
                'args': ['\n\t\t']
            },
            {
                'tokenType': 'start',
                'args': [
                    'i',
                    false
                ]
            },
            {
                'tokenType': 'attrStart',
                'args': ['class']
            },
            {
                'tokenType': 'attrValue',
                'args': ['glyphicon glyphicon-arrow-right']
            },
            {
                'tokenType': 'attrEnd',
                'args': ['class']
            },
            {
                'tokenType': 'end',
                'args': [
                    'i',
                    false
                ]
            },
            {
                'tokenType': 'close',
                'args': ['i']
            },
            {
                'tokenType': 'chars',
                'args': ['\n\t\tForward\n\t']
            },
            {
                'tokenType': 'close',
                'args': ['button']
            },
            {
                'tokenType': 'chars',
                'args': ['\n\t']
            },
            {
                'tokenType': 'start',
                'args': [
                    'button',
                    false
                ]
            },
            {
                'tokenType': 'attrStart',
                'args': ['class']
            },
            {
                'tokenType': 'attrValue',
                'args': ['btn btn-default mail-action']
            },
            {
                'tokenType': 'attrEnd',
                'args': ['class']
            },
            {
                'tokenType': 'special',
                'args': ['#enableForOne selected.length']
            },
            {
                'tokenType': 'attrStart',
                'args': ['disabled']
            },
            {
                'tokenType': 'attrValue',
                'args': ['disabled']
            },
            {
                'tokenType': 'attrEnd',
                'args': ['disabled']
            },
            {
                'tokenType': 'special',
                'args': ['/enableForOne']
            },
            {
                'tokenType': 'end',
                'args': [
                    'button',
                    false
                ]
            },
            {
                'tokenType': 'chars',
                'args': ['\n\t\t']
            },
            {
                'tokenType': 'start',
                'args': [
                    'i',
                    false
                ]
            },
            {
                'tokenType': 'attrStart',
                'args': ['class']
            },
            {
                'tokenType': 'attrValue',
                'args': ['glyphicon glyphicon-pencil']
            },
            {
                'tokenType': 'attrEnd',
                'args': ['class']
            },
            {
                'tokenType': 'end',
                'args': [
                    'i',
                    false
                ]
            },
            {
                'tokenType': 'close',
                'args': ['i']
            },
            {
                'tokenType': 'chars',
                'args': ['\n\t\tReply\n\t']
            },
            {
                'tokenType': 'close',
                'args': ['button']
            },
            {
                'tokenType': 'chars',
                'args': ['\n']
            },
            {
                'tokenType': 'close',
                'args': ['div']
            },
            {
                'tokenType': 'done',
                'args': []
            }
        ]);
    return function (scope, options) {
        var moduleOptions = { module: module };
        if (!(options instanceof mustacheCore.Options)) {
            options = new mustacheCore.Options(options || {});
        }
        return renderer(scope, options.add(moduleOptions));
    };
});
/*components/toolbar/toolbar*/
define('jsmeetup/components/toolbar/toolbar', [
    'exports',
    'can',
    'jsmeetup/toolbar/toolbar.stache',
    'jsmeetup/components/toolbar/toolbar.less!$less'
], function (exports, _can, _toolbarStache, _toolbarLess) {
    'use strict';
    function _interopRequireDefault(obj) {
        return obj && obj.__esModule ? obj : { 'default': obj };
    }
    var _can2 = _interopRequireDefault(_can);
    var _template = _interopRequireDefault(_toolbarStache);
    _can2['default'].Component.extend({
        tag: 'ui-toolbar',
        template: _template['default'],
        helpers: {
            enableForOne: function enableForOne(length, options) {
                if (_can2['default'].isFunction(length)) {
                    var length = length();
                }
                if (length != 1) {
                    return options.fn();
                }
                return options.inverse();
            }
        }
    });
});
/*components/emails/emails.stache!can@2.3.0-pre.13#view/stache/system*/
define('jsmeetup/emails/emails.stache', [
    'module',
    'can/view/stache/stache',
    'can/view/stache/mustache_core'
], function (module, stache, mustacheCore) {
    var renderer = stache([
            {
                'tokenType': 'start',
                'args': [
                    'div',
                    false
                ]
            },
            {
                'tokenType': 'attrStart',
                'args': ['class']
            },
            {
                'tokenType': 'attrValue',
                'args': ['panel panel-default']
            },
            {
                'tokenType': 'attrEnd',
                'args': ['class']
            },
            {
                'tokenType': 'end',
                'args': [
                    'div',
                    false
                ]
            },
            {
                'tokenType': 'special',
                'args': ['#if emails.length']
            },
            {
                'tokenType': 'chars',
                'args': ['\n\t\t']
            },
            {
                'tokenType': 'start',
                'args': [
                    'table',
                    false
                ]
            },
            {
                'tokenType': 'attrStart',
                'args': ['class']
            },
            {
                'tokenType': 'attrValue',
                'args': ['table table-hover']
            },
            {
                'tokenType': 'attrEnd',
                'args': ['class']
            },
            {
                'tokenType': 'end',
                'args': [
                    'table',
                    false
                ]
            },
            {
                'tokenType': 'chars',
                'args': ['\n\t\t\t']
            },
            {
                'tokenType': 'start',
                'args': [
                    'tbody',
                    false
                ]
            },
            {
                'tokenType': 'end',
                'args': [
                    'tbody',
                    false
                ]
            },
            {
                'tokenType': 'special',
                'args': ['#each emails']
            },
            {
                'tokenType': 'chars',
                'args': ['\n\t\t\t\t\t']
            },
            {
                'tokenType': 'start',
                'args': [
                    'tr',
                    false
                ]
            },
            {
                'tokenType': 'attrStart',
                'args': ['can-click']
            },
            {
                'tokenType': 'attrValue',
                'args': ['{toggle}']
            },
            {
                'tokenType': 'attrEnd',
                'args': ['can-click']
            },
            {
                'tokenType': 'attrStart',
                'args': ['class']
            },
            {
                'tokenType': 'special',
                'args': ['#isSelected']
            },
            {
                'tokenType': 'attrValue',
                'args': ['selected']
            },
            {
                'tokenType': 'special',
                'args': ['/isSelected']
            },
            {
                'tokenType': 'attrEnd',
                'args': ['class']
            },
            {
                'tokenType': 'end',
                'args': [
                    'tr',
                    false
                ]
            },
            {
                'tokenType': 'special',
                'args': ['#if important']
            },
            {
                'tokenType': 'chars',
                'args': ['\n\t\t\t\t\t\t\t']
            },
            {
                'tokenType': 'start',
                'args': [
                    'td',
                    false
                ]
            },
            {
                'tokenType': 'attrStart',
                'args': ['class']
            },
            {
                'tokenType': 'attrValue',
                'args': ['col-xs-1']
            },
            {
                'tokenType': 'attrEnd',
                'args': ['class']
            },
            {
                'tokenType': 'end',
                'args': [
                    'td',
                    false
                ]
            },
            {
                'tokenType': 'chars',
                'args': ['\n\t\t\t\t\t\t\t\t']
            },
            {
                'tokenType': 'start',
                'args': [
                    'span',
                    false
                ]
            },
            {
                'tokenType': 'attrStart',
                'args': ['class']
            },
            {
                'tokenType': 'attrValue',
                'args': ['label label-info']
            },
            {
                'tokenType': 'attrEnd',
                'args': ['class']
            },
            {
                'tokenType': 'end',
                'args': [
                    'span',
                    false
                ]
            },
            {
                'tokenType': 'chars',
                'args': ['important']
            },
            {
                'tokenType': 'close',
                'args': ['span']
            },
            {
                'tokenType': 'chars',
                'args': ['\n\t\t\t\t\t\t\t']
            },
            {
                'tokenType': 'close',
                'args': ['td']
            },
            {
                'tokenType': 'special',
                'args': ['/if']
            },
            {
                'tokenType': 'chars',
                'args': ['\n\t\t\t\t\t\t']
            },
            {
                'tokenType': 'special',
                'args': ['^if important']
            },
            {
                'tokenType': 'chars',
                'args': ['\n\t\t\t\t\t\t\t']
            },
            {
                'tokenType': 'start',
                'args': [
                    'td',
                    false
                ]
            },
            {
                'tokenType': 'attrStart',
                'args': ['class']
            },
            {
                'tokenType': 'attrValue',
                'args': ['col-xs-1']
            },
            {
                'tokenType': 'attrEnd',
                'args': ['class']
            },
            {
                'tokenType': 'end',
                'args': [
                    'td',
                    false
                ]
            },
            {
                'tokenType': 'start',
                'args': [
                    'span',
                    false
                ]
            },
            {
                'tokenType': 'end',
                'args': [
                    'span',
                    false
                ]
            },
            {
                'tokenType': 'chars',
                'args': ['&nbsp;']
            },
            {
                'tokenType': 'close',
                'args': ['span']
            },
            {
                'tokenType': 'close',
                'args': ['td']
            },
            {
                'tokenType': 'special',
                'args': ['/if']
            },
            {
                'tokenType': 'chars',
                'args': ['\n\t\t\t\t\t\t']
            },
            {
                'tokenType': 'start',
                'args': [
                    'td',
                    false
                ]
            },
            {
                'tokenType': 'attrStart',
                'args': ['can-click']
            },
            {
                'tokenType': 'attrValue',
                'args': ['{openEmail id}']
            },
            {
                'tokenType': 'attrEnd',
                'args': ['can-click']
            },
            {
                'tokenType': 'attrStart',
                'args': ['class']
            },
            {
                'tokenType': 'attrValue',
                'args': ['col-xs-10']
            },
            {
                'tokenType': 'attrEnd',
                'args': ['class']
            },
            {
                'tokenType': 'end',
                'args': [
                    'td',
                    false
                ]
            },
            {
                'tokenType': 'chars',
                'args': ['\n\t\t\t\t\t\t\t']
            },
            {
                'tokenType': 'start',
                'args': [
                    'span',
                    false
                ]
            },
            {
                'tokenType': 'end',
                'args': [
                    'span',
                    false
                ]
            },
            {
                'tokenType': 'chars',
                'args': ['\n\t\t\t\t\t\t\t\t']
            },
            {
                'tokenType': 'special',
                'args': ['format subject']
            },
            {
                'tokenType': 'close',
                'args': ['span']
            },
            {
                'tokenType': 'chars',
                'args': [' - \n\t\t\t\t\t\t\t\t']
            },
            {
                'tokenType': 'start',
                'args': [
                    'span',
                    false
                ]
            },
            {
                'tokenType': 'end',
                'args': [
                    'span',
                    false
                ]
            },
            {
                'tokenType': 'chars',
                'args': ['\n\t\t\t\t\t\t\t\t\t']
            },
            {
                'tokenType': 'close',
                'args': ['span']
            },
            {
                'tokenType': 'start',
                'args': [
                    'a',
                    false
                ]
            },
            {
                'tokenType': 'attrStart',
                'args': ['href']
            },
            {
                'tokenType': 'attrValue',
                'args': ['javascript://']
            },
            {
                'tokenType': 'attrEnd',
                'args': ['href']
            },
            {
                'tokenType': 'end',
                'args': [
                    'a',
                    false
                ]
            },
            {
                'tokenType': 'special',
                'args': ['format message']
            },
            {
                'tokenType': 'close',
                'args': ['a']
            },
            {
                'tokenType': 'chars',
                'args': ['\n\t\t\t\t\t\t\t\t']
            },
            {
                'tokenType': 'chars',
                'args': [' \n\t\t\t\t\t\t']
            },
            {
                'tokenType': 'close',
                'args': ['td']
            },
            {
                'tokenType': 'chars',
                'args': ['\n\n\t\t\t\t\t']
            },
            {
                'tokenType': 'close',
                'args': ['tr']
            },
            {
                'tokenType': 'special',
                'args': ['/each']
            },
            {
                'tokenType': 'chars',
                'args': ['\n\t\t\t']
            },
            {
                'tokenType': 'close',
                'args': ['tbody']
            },
            {
                'tokenType': 'chars',
                'args': ['\n\t\t']
            },
            {
                'tokenType': 'close',
                'args': ['table']
            },
            {
                'tokenType': 'special',
                'args': ['else']
            },
            {
                'tokenType': 'chars',
                'args': ['\n\tThe ']
            },
            {
                'tokenType': 'special',
                'args': ['folder']
            },
            {
                'tokenType': 'chars',
                'args': [' is empty']
            },
            {
                'tokenType': 'special',
                'args': ['/if']
            },
            {
                'tokenType': 'chars',
                'args': ['\n']
            },
            {
                'tokenType': 'close',
                'args': ['div']
            },
            {
                'tokenType': 'done',
                'args': []
            }
        ]);
    return function (scope, options) {
        var moduleOptions = { module: module };
        if (!(options instanceof mustacheCore.Options)) {
            options = new mustacheCore.Options(options || {});
        }
        return renderer(scope, options.add(moduleOptions));
    };
});
/*components/emails/emails*/
define('jsmeetup/components/emails/emails', [
    'exports',
    'can',
    'jsmeetup/emails/emails.stache',
    'jsmeetup/components/emails/emails.less!$less'
], function (exports, _can, _emailsStache, _emailsLess) {
    'use strict';
    function _interopRequireDefault(obj) {
        return obj && obj.__esModule ? obj : { 'default': obj };
    }
    var _can2 = _interopRequireDefault(_can);
    var _template = _interopRequireDefault(_emailsStache);
    _can2['default'].Component.extend({
        tag: 'ui-emails',
        template: _template['default'],
        viewModel: {
            openEmail: function openEmail(id) {
                var rootVM = this.attr('@root');
                if (id) {
                    rootVM.attr('emailId', id);
                }
            },
            toggle: function toggle(item) {
                var selected = this.attr('@root').attr('selected'), index = selected.indexOf(item);
                if (index >= 0) {
                    selected.splice(index, 1);
                } else {
                    selected.push(item);
                }
            }
        },
        helpers: {
            format: function format(text) {
                if (_can2['default'].isFunction(text)) {
                    text = text();
                }
                return text.length > 70 ? text.slice(0, 70) + '...' : text;
            },
            isSelected: function isSelected(options) {
                var rootVM = this.attr('@root');
                var selected = rootVM.attr('selected');
                if (selected.indexOf(options.context) >= 0) {
                    return options.fn();
                }
                return options.inverse();
            }
        }
    });
});
/*components/email/email.stache!can@2.3.0-pre.13#view/stache/system*/
define('jsmeetup/email/email.stache', [
    'module',
    'can/view/stache/stache',
    'can/view/stache/mustache_core'
], function (module, stache, mustacheCore) {
    var renderer = stache([
            {
                'tokenType': 'special',
                'args': ['#email']
            },
            {
                'tokenType': 'start',
                'args': [
                    'div',
                    false
                ]
            },
            {
                'tokenType': 'attrStart',
                'args': ['class']
            },
            {
                'tokenType': 'attrValue',
                'args': ['panel panel-default']
            },
            {
                'tokenType': 'attrEnd',
                'args': ['class']
            },
            {
                'tokenType': 'end',
                'args': [
                    'div',
                    false
                ]
            },
            {
                'tokenType': 'chars',
                'args': ['\n\t']
            },
            {
                'tokenType': 'start',
                'args': [
                    'div',
                    false
                ]
            },
            {
                'tokenType': 'attrStart',
                'args': ['class']
            },
            {
                'tokenType': 'attrValue',
                'args': ['panel-heading']
            },
            {
                'tokenType': 'attrEnd',
                'args': ['class']
            },
            {
                'tokenType': 'end',
                'args': [
                    'div',
                    false
                ]
            },
            {
                'tokenType': 'special',
                'args': ['#if important']
            },
            {
                'tokenType': 'chars',
                'args': ['\n\t\t\t']
            },
            {
                'tokenType': 'start',
                'args': [
                    'span',
                    false
                ]
            },
            {
                'tokenType': 'attrStart',
                'args': ['class']
            },
            {
                'tokenType': 'attrValue',
                'args': ['label label-info important-label']
            },
            {
                'tokenType': 'attrEnd',
                'args': ['class']
            },
            {
                'tokenType': 'end',
                'args': [
                    'span',
                    false
                ]
            },
            {
                'tokenType': 'chars',
                'args': ['Important']
            },
            {
                'tokenType': 'close',
                'args': ['span']
            },
            {
                'tokenType': 'special',
                'args': ['/if']
            },
            {
                'tokenType': 'chars',
                'args': ['\n\t\t']
            },
            {
                'tokenType': 'start',
                'args': [
                    'h3',
                    false
                ]
            },
            {
                'tokenType': 'attrStart',
                'args': ['class']
            },
            {
                'tokenType': 'attrValue',
                'args': ['panel-title']
            },
            {
                'tokenType': 'attrEnd',
                'args': ['class']
            },
            {
                'tokenType': 'end',
                'args': [
                    'h3',
                    false
                ]
            },
            {
                'tokenType': 'special',
                'args': [' subject ']
            },
            {
                'tokenType': 'close',
                'args': ['h3']
            },
            {
                'tokenType': 'chars',
                'args': ['\n\t']
            },
            {
                'tokenType': 'close',
                'args': ['div']
            },
            {
                'tokenType': 'chars',
                'args': ['\n\t']
            },
            {
                'tokenType': 'start',
                'args': [
                    'div',
                    false
                ]
            },
            {
                'tokenType': 'attrStart',
                'args': ['class']
            },
            {
                'tokenType': 'attrValue',
                'args': ['panel-body']
            },
            {
                'tokenType': 'attrEnd',
                'args': ['class']
            },
            {
                'tokenType': 'end',
                'args': [
                    'div',
                    false
                ]
            },
            {
                'tokenType': 'chars',
                'args': ['\t\t']
            },
            {
                'tokenType': 'special',
                'args': ['message']
            },
            {
                'tokenType': 'chars',
                'args': ['\n\t']
            },
            {
                'tokenType': 'close',
                'args': ['div']
            },
            {
                'tokenType': 'chars',
                'args': ['\n']
            },
            {
                'tokenType': 'close',
                'args': ['div']
            },
            {
                'tokenType': 'special',
                'args': ['/email']
            },
            {
                'tokenType': 'done',
                'args': []
            }
        ]);
    return function (scope, options) {
        var moduleOptions = { module: module };
        if (!(options instanceof mustacheCore.Options)) {
            options = new mustacheCore.Options(options || {});
        }
        return renderer(scope, options.add(moduleOptions));
    };
});
/*components/email/email*/
define('jsmeetup/components/email/email', [
    'exports',
    'can',
    'jsmeetup/email/email.stache',
    'jsmeetup/components/email/email.less!$less'
], function (exports, _can, _emailStache, _emailLess) {
    'use strict';
    function _interopRequireDefault(obj) {
        return obj && obj.__esModule ? obj : { 'default': obj };
    }
    var _can2 = _interopRequireDefault(_can);
    var _template = _interopRequireDefault(_emailStache);
    _can2['default'].Component.extend({
        tag: 'ui-email',
        template: _template['default']
    });
});
/*app.stache!can@2.3.0-pre.13#view/stache/system*/
define('jsmeetup/', [
    'module',
    'can/view/stache/stache',
    'can/view/stache/mustache_core',
    'jsmeetup/components/navigation/navigation',
    'jsmeetup/components/toolbar/toolbar',
    'jsmeetup/components/emails/emails',
    'jsmeetup/components/email/email'
], function (module, stache, mustacheCore) {
    var renderer = stache([
            {
                'tokenType': 'chars',
                'args': ['\n']
            },
            {
                'tokenType': 'start',
                'args': [
                    'div',
                    false
                ]
            },
            {
                'tokenType': 'attrStart',
                'args': ['class']
            },
            {
                'tokenType': 'attrValue',
                'args': ['container-fluid']
            },
            {
                'tokenType': 'attrEnd',
                'args': ['class']
            },
            {
                'tokenType': 'end',
                'args': [
                    'div',
                    false
                ]
            },
            {
                'tokenType': 'chars',
                'args': ['\n\t']
            },
            {
                'tokenType': 'start',
                'args': [
                    'div',
                    false
                ]
            },
            {
                'tokenType': 'attrStart',
                'args': ['class']
            },
            {
                'tokenType': 'attrValue',
                'args': ['row']
            },
            {
                'tokenType': 'attrEnd',
                'args': ['class']
            },
            {
                'tokenType': 'end',
                'args': [
                    'div',
                    false
                ]
            },
            {
                'tokenType': 'chars',
                'args': ['\n\t\t']
            },
            {
                'tokenType': 'start',
                'args': [
                    'div',
                    false
                ]
            },
            {
                'tokenType': 'attrStart',
                'args': ['class']
            },
            {
                'tokenType': 'attrValue',
                'args': ['col-xs-2']
            },
            {
                'tokenType': 'attrEnd',
                'args': ['class']
            },
            {
                'tokenType': 'end',
                'args': [
                    'div',
                    false
                ]
            },
            {
                'tokenType': 'chars',
                'args': ['\n\t\t\t']
            },
            {
                'tokenType': 'start',
                'args': [
                    'can-import',
                    true
                ]
            },
            {
                'tokenType': 'attrStart',
                'args': ['from']
            },
            {
                'tokenType': 'attrValue',
                'args': ['components/navigation/']
            },
            {
                'tokenType': 'attrEnd',
                'args': ['from']
            },
            {
                'tokenType': 'end',
                'args': [
                    'can-import',
                    true
                ]
            },
            {
                'tokenType': 'chars',
                'args': ['\n\t\t\t']
            },
            {
                'tokenType': 'start',
                'args': [
                    'ui-navigation',
                    false
                ]
            },
            {
                'tokenType': 'end',
                'args': [
                    'ui-navigation',
                    false
                ]
            },
            {
                'tokenType': 'close',
                'args': ['ui-navigation']
            },
            {
                'tokenType': 'chars',
                'args': ['\n\t\t']
            },
            {
                'tokenType': 'close',
                'args': ['div']
            },
            {
                'tokenType': 'chars',
                'args': ['\n\t\t']
            },
            {
                'tokenType': 'start',
                'args': [
                    'div',
                    false
                ]
            },
            {
                'tokenType': 'attrStart',
                'args': ['class']
            },
            {
                'tokenType': 'attrValue',
                'args': ['col-xs-10']
            },
            {
                'tokenType': 'attrEnd',
                'args': ['class']
            },
            {
                'tokenType': 'end',
                'args': [
                    'div',
                    false
                ]
            },
            {
                'tokenType': 'chars',
                'args': ['\n\t\t\t']
            },
            {
                'tokenType': 'start',
                'args': [
                    'div',
                    false
                ]
            },
            {
                'tokenType': 'attrStart',
                'args': ['class']
            },
            {
                'tokenType': 'attrValue',
                'args': ['row']
            },
            {
                'tokenType': 'attrEnd',
                'args': ['class']
            },
            {
                'tokenType': 'end',
                'args': [
                    'div',
                    false
                ]
            },
            {
                'tokenType': 'chars',
                'args': ['\n\t\t\t\t']
            },
            {
                'tokenType': 'start',
                'args': [
                    'div',
                    false
                ]
            },
            {
                'tokenType': 'attrStart',
                'args': ['class']
            },
            {
                'tokenType': 'attrValue',
                'args': ['col-xs-12']
            },
            {
                'tokenType': 'attrEnd',
                'args': ['class']
            },
            {
                'tokenType': 'end',
                'args': [
                    'div',
                    false
                ]
            },
            {
                'tokenType': 'chars',
                'args': ['\n\t\t\t\t\t']
            },
            {
                'tokenType': 'start',
                'args': [
                    'can-import',
                    true
                ]
            },
            {
                'tokenType': 'attrStart',
                'args': ['from']
            },
            {
                'tokenType': 'attrValue',
                'args': ['components/toolbar/']
            },
            {
                'tokenType': 'attrEnd',
                'args': ['from']
            },
            {
                'tokenType': 'end',
                'args': [
                    'can-import',
                    true
                ]
            },
            {
                'tokenType': 'chars',
                'args': ['\n\t\t\t\t\t']
            },
            {
                'tokenType': 'start',
                'args': [
                    'ui-toolbar',
                    false
                ]
            },
            {
                'tokenType': 'end',
                'args': [
                    'ui-toolbar',
                    false
                ]
            },
            {
                'tokenType': 'close',
                'args': ['ui-toolbar']
            },
            {
                'tokenType': 'chars',
                'args': ['\n\t\t\t\t']
            },
            {
                'tokenType': 'close',
                'args': ['div']
            },
            {
                'tokenType': 'chars',
                'args': ['\n\t\t\t']
            },
            {
                'tokenType': 'close',
                'args': ['div']
            },
            {
                'tokenType': 'chars',
                'args': ['\n\t\t\t']
            },
            {
                'tokenType': 'start',
                'args': [
                    'div',
                    false
                ]
            },
            {
                'tokenType': 'attrStart',
                'args': ['class']
            },
            {
                'tokenType': 'attrValue',
                'args': ['row']
            },
            {
                'tokenType': 'attrEnd',
                'args': ['class']
            },
            {
                'tokenType': 'end',
                'args': [
                    'div',
                    false
                ]
            },
            {
                'tokenType': 'chars',
                'args': ['\n\t\t\t\t']
            },
            {
                'tokenType': 'start',
                'args': [
                    'div',
                    false
                ]
            },
            {
                'tokenType': 'attrStart',
                'args': ['class']
            },
            {
                'tokenType': 'attrValue',
                'args': ['col-xs-6']
            },
            {
                'tokenType': 'attrEnd',
                'args': ['class']
            },
            {
                'tokenType': 'end',
                'args': [
                    'div',
                    false
                ]
            },
            {
                'tokenType': 'chars',
                'args': ['\n\t\t\t\t\t']
            },
            {
                'tokenType': 'start',
                'args': [
                    'can-import',
                    true
                ]
            },
            {
                'tokenType': 'attrStart',
                'args': ['from']
            },
            {
                'tokenType': 'attrValue',
                'args': ['components/emails/']
            },
            {
                'tokenType': 'attrEnd',
                'args': ['from']
            },
            {
                'tokenType': 'end',
                'args': [
                    'can-import',
                    true
                ]
            },
            {
                'tokenType': 'chars',
                'args': ['\n\t\t\t\t\t']
            },
            {
                'tokenType': 'start',
                'args': [
                    'ui-emails',
                    false
                ]
            },
            {
                'tokenType': 'attrStart',
                'args': ['emails']
            },
            {
                'tokenType': 'attrValue',
                'args': ['{emails}']
            },
            {
                'tokenType': 'attrEnd',
                'args': ['emails']
            },
            {
                'tokenType': 'end',
                'args': [
                    'ui-emails',
                    false
                ]
            },
            {
                'tokenType': 'close',
                'args': ['ui-emails']
            },
            {
                'tokenType': 'chars',
                'args': ['\n\t\t\t\t\t\n\t\t\t\t']
            },
            {
                'tokenType': 'close',
                'args': ['div']
            },
            {
                'tokenType': 'chars',
                'args': ['\n\t\t\t\t']
            },
            {
                'tokenType': 'start',
                'args': [
                    'div',
                    false
                ]
            },
            {
                'tokenType': 'attrStart',
                'args': ['class']
            },
            {
                'tokenType': 'attrValue',
                'args': ['col-xs-6']
            },
            {
                'tokenType': 'attrEnd',
                'args': ['class']
            },
            {
                'tokenType': 'end',
                'args': [
                    'div',
                    false
                ]
            },
            {
                'tokenType': 'special',
                'args': ['#if email']
            },
            {
                'tokenType': 'chars',
                'args': ['\n\t\t\t\t\t\t']
            },
            {
                'tokenType': 'start',
                'args': [
                    'can-import',
                    true
                ]
            },
            {
                'tokenType': 'attrStart',
                'args': ['from']
            },
            {
                'tokenType': 'attrValue',
                'args': ['components/email/']
            },
            {
                'tokenType': 'attrEnd',
                'args': ['from']
            },
            {
                'tokenType': 'end',
                'args': [
                    'can-import',
                    true
                ]
            },
            {
                'tokenType': 'chars',
                'args': ['\n\t\t\t\t\t\t']
            },
            {
                'tokenType': 'start',
                'args': [
                    'ui-email',
                    false
                ]
            },
            {
                'tokenType': 'attrStart',
                'args': ['email']
            },
            {
                'tokenType': 'attrValue',
                'args': ['{email}']
            },
            {
                'tokenType': 'attrEnd',
                'args': ['email']
            },
            {
                'tokenType': 'end',
                'args': [
                    'ui-email',
                    false
                ]
            },
            {
                'tokenType': 'close',
                'args': ['ui-email']
            },
            {
                'tokenType': 'chars',
                'args': ['\t\t\t\t\t\t']
            },
            {
                'tokenType': 'special',
                'args': ['else']
            },
            {
                'tokenType': 'chars',
                'args': ['\n\t\t\t\t\t\tselect an email to view it\'s content']
            },
            {
                'tokenType': 'special',
                'args': ['/if']
            },
            {
                'tokenType': 'chars',
                'args': ['\n\t\t\t\t']
            },
            {
                'tokenType': 'close',
                'args': ['div']
            },
            {
                'tokenType': 'chars',
                'args': ['\n\t\t\t']
            },
            {
                'tokenType': 'close',
                'args': ['div']
            },
            {
                'tokenType': 'chars',
                'args': ['\n\t\t']
            },
            {
                'tokenType': 'close',
                'args': ['div']
            },
            {
                'tokenType': 'chars',
                'args': ['\n\t']
            },
            {
                'tokenType': 'close',
                'args': ['div']
            },
            {
                'tokenType': 'chars',
                'args': ['\n']
            },
            {
                'tokenType': 'close',
                'args': ['div']
            },
            {
                'tokenType': 'chars',
                'args': ['\n\n']
            },
            {
                'tokenType': 'done',
                'args': []
            }
        ]);
    return function (scope, options) {
        var moduleOptions = { module: module };
        if (!(options instanceof mustacheCore.Options)) {
            options = new mustacheCore.Options(options || {});
        }
        return renderer(scope, options.add(moduleOptions));
    };
});
/*models/folder*/
define('jsmeetup/models/folder', [
    'exports',
    'module',
    'can'
], function (exports, module, _can) {
    'use strict';
    function _interopRequireDefault(obj) {
        return obj && obj.__esModule ? obj : { 'default': obj };
    }
    var _can2 = _interopRequireDefault(_can);
    var Folder = _can2['default'].Model.extend({ findAll: 'GET /api/folders' }, {});
    module.exports = Folder;
});
/*models/email*/
define('jsmeetup/models/email', [
    'exports',
    'module',
    'can'
], function (exports, module, _can) {
    'use strict';
    function _interopRequireDefault(obj) {
        return obj && obj.__esModule ? obj : { 'default': obj };
    }
    var _can2 = _interopRequireDefault(_can);
    var Email = _can2['default'].Model.extend({
            findAll: 'GET /api/emails',
            destroy: 'DELETE /api/emails/{id}',
            findOne: 'GET /api/emails/{id}'
        }, {});
    Email.List = Email.List.extend({
        filterByFolder: function filterByFolder(folder) {
            return this.filter(function (email) {
                return email.attr('folders').indexOf(folder) > -1;
            });
        }
    });
    module.exports = Email;
});
/*app*/
define('jsmeetup', [
    'exports',
    'module',
    'can',
    'can/view/import/import',
    'can/map/define/define',
    'jsmeetup/fixtures/folders',
    'jsmeetup/fixtures/contacts',
    'jsmeetup/fixtures/emails',
    'jsmeetup/app.less!$less',
    'jsmeetup/',
    'jsmeetup/models/folder',
    'jsmeetup/models/email'
], function (exports, module, _can, _canViewImport, _canMapDefine, _fixturesFolders, _fixturesContacts, _fixturesEmails, _appLess, _appStache, _modelsFolder, _modelsEmail) {
    'use strict';
    function _interopRequireDefault(obj) {
        return obj && obj.__esModule ? obj : { 'default': obj };
    }
    var _can2 = _interopRequireDefault(_can);
    var _template = _interopRequireDefault(_appStache);
    var _Folder = _interopRequireDefault(_modelsFolder);
    var _Email = _interopRequireDefault(_modelsEmail);
    _can2['default'].fixture.delay = 1000;
    var AppState = _can2['default'].Map.extend({
            define: {
                folders: {
                    value: new _Folder['default'].List({}),
                    serialize: false
                },
                folder: {
                    set: function set() {
                        this.attr('selected', []);
                    }
                },
                emails: {
                    value: new _Email['default'].List({}),
                    get: function get(list) {
                        return list.filterByFolder(this.attr('folder'));
                    },
                    serialize: false
                },
                email: {
                    get: function get() {
                        var id = this.attr('emailId'), emails = this.attr('emails');
                        var email = emails.filter(function (email) {
                                return email.attr('id') == id;
                            });
                        email = email[0];
                        if (email) {
                            this.attr('selected').push(email);
                        }
                        return email;
                    }
                },
                selected: {
                    value: [],
                    serialize: false
                }
            }
        });
    var appState = new AppState();
    _can2['default'].route.map(appState);
    _can2['default'].route(':folder', { folder: 'inbox' });
    _can2['default'].route(':folder/:emailId', { emailId: null });
    _can2['default'].route.ready();
    $('body').on('click', 'a[href="javascript://"]', function (ev) {
        return ev.preventDefault();
    });
    $('#main-app').html((0, _template['default'])(appState));
    module.exports = AppState;
});
/*[global-shim-end]*/
(function (){
	window._define = window.define;
	window.define = window.define.orig;
})();