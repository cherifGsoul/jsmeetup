/*models/email*/
'use strict';
Object.defineProperty(exports, '__esModule', { value: true });
function _interopRequireDefault(obj) {
    return obj && obj.__esModule ? obj : { 'default': obj };
}
var _can = require('can');
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
exports['default'] = Email;
module.exports = exports['default'];