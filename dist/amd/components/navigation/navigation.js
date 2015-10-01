/*components/navigation/navigation*/
define([
    'exports',
    'can',
    './navigation.stache'
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