/*fixtures/contacts*/
define([
    'exports',
    'module',
    'can/util/fixture'
], function (exports, module, _canUtilFixture) {
    'use strict';
    function _interopRequireDefault(obj) {
        return obj && obj.__esModule ? obj : { 'default': obj };
    }
    var _fixture = _interopRequireDefault(_canUtilFixture);
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
    module.exports = _fixture['default'];
});