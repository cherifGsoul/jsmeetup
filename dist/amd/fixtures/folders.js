/*fixtures/folders*/
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
    module.exports = _fixture['default'];
});