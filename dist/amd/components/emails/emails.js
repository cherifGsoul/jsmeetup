/*components/emails/emails*/
define([
    'exports',
    'can',
    './emails.stache',
    'css!./emails.less.css'
], function (exports, _can, _emailsStache, _emailsLess) {
    'use strict';
    function _interopRequireDefault(obj) {
        return obj && obj.__esModule ? obj : { 'default': obj };
    }
    var _can2 = _interopRequireDefault(_can);
    var _template = _interopRequireDefault(_emailsStache);
    _can2['default'].Component.extend({
        tag: 'ui-emails',
        template: _template['default'],
        viewModel: {
            openEmail: function openEmail(id) {
                var rootVM = this.attr('@root');
                if (id) {
                    rootVM.attr('emailId', id);
                }
            },
            toggle: function toggle(item) {
                var selected = this.attr('@root').attr('selected'), index = selected.indexOf(item);
                if (index >= 0) {
                    selected.splice(index, 1);
                } else {
                    selected.push(item);
                }
            }
        },
        helpers: {
            format: function format(text) {
                if (_can2['default'].isFunction(text)) {
                    text = text();
                }
                return text.length > 70 ? text.slice(0, 70) + '...' : text;
            },
            isSelected: function isSelected(options) {
                var rootVM = this.attr('@root');
                var selected = rootVM.attr('selected');
                if (selected.indexOf(options.context) >= 0) {
                    return options.fn();
                }
                return options.inverse();
            }
        }
    });
});