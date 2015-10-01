/*models/folder*/
'use strict';
Object.defineProperty(exports, '__esModule', { value: true });
function _interopRequireDefault(obj) {
    return obj && obj.__esModule ? obj : { 'default': obj };
}
var _can = require('can');
var _can2 = _interopRequireDefault(_can);
var Folder = _can2['default'].Model.extend({ findAll: 'GET /api/folders' }, {});
exports['default'] = Folder;
module.exports = exports['default'];