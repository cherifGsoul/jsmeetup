/*components/navigation/navigation*/
'use strict';
function _interopRequireDefault(obj) {
    return obj && obj.__esModule ? obj : { 'default': obj };
}
var _can = require('can');
var _can2 = _interopRequireDefault(_can);
var _navigationStache = require('./navigation.stache.js');
var _navigationStache2 = _interopRequireDefault(_navigationStache);
_can2['default'].Component.extend({
    tag: 'ui-navigation',
    template: _navigationStache2['default']
});