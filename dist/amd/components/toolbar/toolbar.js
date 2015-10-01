/*components/toolbar/toolbar*/
define([
    'exports',
    'can',
    './toolbar.stache',
    'css!./toolbar.less.css'
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