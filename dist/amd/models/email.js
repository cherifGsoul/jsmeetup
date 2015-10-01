/*models/email*/
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