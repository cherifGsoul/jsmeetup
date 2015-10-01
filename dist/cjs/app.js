/*app*/
'use strict';
Object.defineProperty(exports, '__esModule', { value: true });
function _interopRequireDefault(obj) {
    return obj && obj.__esModule ? obj : { 'default': obj };
}
var _can = require('can');
var _can2 = _interopRequireDefault(_can);
require('can/view/import/import');
require('can/map/define/define');
require('./fixtures/folders.js');
require('./fixtures/contacts.js');
require('./fixtures/emails.js');
require('./app.less.css');
var _appStache = require('./app.stache.js');
var _appStache2 = _interopRequireDefault(_appStache);
var _modelsFolder = require('./models/folder.js');
var _modelsFolder2 = _interopRequireDefault(_modelsFolder);
var _modelsEmail = require('./models/email.js');
var _modelsEmail2 = _interopRequireDefault(_modelsEmail);
_can2['default'].fixture.delay = 1000;
var AppState = _can2['default'].Map.extend({
        define: {
            folders: {
                value: new _modelsFolder2['default'].List({}),
                serialize: false
            },
            folder: {
                set: function set() {
                    this.attr('selected', []);
                }
            },
            emails: {
                value: new _modelsEmail2['default'].List({}),
                get: function get(list) {
                    return list.filterByFolder(this.attr('folder'));
                },
                serialize: false
            },
            email: {
                get: function get() {
                    var id = this.attr('emailId'), emails = this.attr('emails');
                    var email = emails.filter(function (email) {
                            return email.attr('id') == id;
                        });
                    email = email[0];
                    if (email) {
                        this.attr('selected').push(email);
                    }
                    return email;
                }
            },
            selected: {
                value: [],
                serialize: false
            }
        }
    });
var appState = new AppState();
_can2['default'].route.map(appState);
_can2['default'].route(':folder', { folder: 'inbox' });
_can2['default'].route(':folder/:emailId', { emailId: null });
_can2['default'].route.ready();
$('body').on('click', 'a[href="javascript://"]', function (ev) {
    return ev.preventDefault();
});
$('#main-app').html((0, _appStache2['default'])(appState));
exports['default'] = AppState;
module.exports = exports['default'];