/*components/email/email*/
define([
    'exports',
    'can',
    './email.stache',
    'css!./email.less.css'
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