/*app*/
define([
    'exports',
    'module',
    'can',
    'can/view/import',
    'can/map/define',
    './fixtures/folders',
    './fixtures/contacts',
    './fixtures/emails',
    'css!./app.less.css',
    './app.stache',
    './models/folder',
    './models/email'
], function (exports, module, _can, _canViewImport, _canMapDefine, _fixturesFolders, _fixturesContacts, _fixturesEmails, _appLess, _appStache, _modelsFolder, _modelsEmail) {
    'use strict';
    function _interopRequireDefault(obj) {
        return obj && obj.__esModule ? obj : { 'default': obj };
    }
    var _can2 = _interopRequireDefault(_can);
    var _template = _interopRequireDefault(_appStache);
    var _Folder = _interopRequireDefault(_modelsFolder);
    var _Email = _interopRequireDefault(_modelsEmail);
    _can2['default'].fixture.delay = 1000;
    var AppState = _can2['default'].Map.extend({
            define: {
                folders: {
                    value: new _Folder['default'].List({}),
                    serialize: false
                },
                folder: {
                    set: function set() {
                        this.attr('selected', []);
                    }
                },
                emails: {
                    value: new _Email['default'].List({}),
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
    $('#main-app').html((0, _template['default'])(appState));
    module.exports = AppState;
});