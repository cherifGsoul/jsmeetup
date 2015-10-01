/*models/folder*/
define([
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