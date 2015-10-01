/*components/toolbar/toolbar*/
'use strict';
function _interopRequireDefault(obj) {
    return obj && obj.__esModule ? obj : { 'default': obj };
}
var _can = require('can');
var _can2 = _interopRequireDefault(_can);
var _toolbarStache = require('./toolbar.stache.js');
var _toolbarStache2 = _interopRequireDefault(_toolbarStache);
require('./toolbar.less.css');
_can2['default'].Component.extend({
    tag: 'ui-toolbar',
    template: _toolbarStache2['default'],
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