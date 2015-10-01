/*components/email/email*/
'use strict';
function _interopRequireDefault(obj) {
    return obj && obj.__esModule ? obj : { 'default': obj };
}
var _can = require('can');
var _can2 = _interopRequireDefault(_can);
var _emailStache = require('./email.stache.js');
var _emailStache2 = _interopRequireDefault(_emailStache);
require('./email.less.css');
_can2['default'].Component.extend({
    tag: 'ui-email',
    template: _emailStache2['default']
});