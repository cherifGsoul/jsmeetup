/*fixtures/contacts*/
'use strict';
Object.defineProperty(exports, '__esModule', { value: true });
function _interopRequireDefault(obj) {
    return obj && obj.__esModule ? obj : { 'default': obj };
}
var _canUtilFixture = require('can/util/fixture/fixture');
var _canUtilFixture2 = _interopRequireDefault(_canUtilFixture);
can.fixture({
    'GET /api/contacts': function GETApiContacts() {
        return [
            {
                'id': 'contact_342',
                'firstName': 'Michael',
                'lastName': 'Smith',
                'email': 'ms@proxyweb.com'
            },
            {
                'id': 'contact_377',
                'firstName': 'Mary',
                'lastName': 'Jones',
                'email': 'mary@jones.net'
            },
            {
                'id': 'contact_398',
                'firstName': 'Billy',
                'lastName': 'Idiot',
                'email': 'william_idiot@gmail.com'
            }
        ];
    }
});
exports['default'] = _canUtilFixture2['default'];
module.exports = exports['default'];