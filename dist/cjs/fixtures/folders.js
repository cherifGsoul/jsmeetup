/*fixtures/folders*/
'use strict';
Object.defineProperty(exports, '__esModule', { value: true });
function _interopRequireDefault(obj) {
    return obj && obj.__esModule ? obj : { 'default': obj };
}
var _canUtilFixture = require('can/util/fixture/fixture');
var _canUtilFixture2 = _interopRequireDefault(_canUtilFixture);
can.fixture({
    'GET /api/folders': function GETApiFolders() {
        return [
            {
                id: 'inbox',
                name: 'Inbox'
            },
            {
                id: 'sent',
                name: 'Sent'
            },
            {
                id: 'later',
                name: 'Later'
            },
            {
                id: 'trash',
                name: 'Trash'
            }
        ];
    }
});
exports['default'] = _canUtilFixture2['default'];
module.exports = exports['default'];