/*components/emails/emails.stache!can@2.3.0-pre.13#view/stache/system*/
var stache = require('can/view/stache/stache');
var mustacheCore = require('can/view/stache/mustache_core');
var renderer = stache([
        {
            'tokenType': 'start',
            'args': [
                'div',
                false
            ]
        },
        {
            'tokenType': 'attrStart',
            'args': ['class']
        },
        {
            'tokenType': 'attrValue',
            'args': ['panel panel-default']
        },
        {
            'tokenType': 'attrEnd',
            'args': ['class']
        },
        {
            'tokenType': 'end',
            'args': [
                'div',
                false
            ]
        },
        {
            'tokenType': 'special',
            'args': ['#if emails.length']
        },
        {
            'tokenType': 'chars',
            'args': ['\n\t\t']
        },
        {
            'tokenType': 'start',
            'args': [
                'table',
                false
            ]
        },
        {
            'tokenType': 'attrStart',
            'args': ['class']
        },
        {
            'tokenType': 'attrValue',
            'args': ['table table-hover']
        },
        {
            'tokenType': 'attrEnd',
            'args': ['class']
        },
        {
            'tokenType': 'end',
            'args': [
                'table',
                false
            ]
        },
        {
            'tokenType': 'chars',
            'args': ['\n\t\t\t']
        },
        {
            'tokenType': 'start',
            'args': [
                'tbody',
                false
            ]
        },
        {
            'tokenType': 'end',
            'args': [
                'tbody',
                false
            ]
        },
        {
            'tokenType': 'special',
            'args': ['#each emails']
        },
        {
            'tokenType': 'chars',
            'args': ['\n\t\t\t\t\t']
        },
        {
            'tokenType': 'start',
            'args': [
                'tr',
                false
            ]
        },
        {
            'tokenType': 'attrStart',
            'args': ['can-click']
        },
        {
            'tokenType': 'attrValue',
            'args': ['{toggle}']
        },
        {
            'tokenType': 'attrEnd',
            'args': ['can-click']
        },
        {
            'tokenType': 'attrStart',
            'args': ['class']
        },
        {
            'tokenType': 'special',
            'args': ['#isSelected']
        },
        {
            'tokenType': 'attrValue',
            'args': ['selected']
        },
        {
            'tokenType': 'special',
            'args': ['/isSelected']
        },
        {
            'tokenType': 'attrEnd',
            'args': ['class']
        },
        {
            'tokenType': 'end',
            'args': [
                'tr',
                false
            ]
        },
        {
            'tokenType': 'special',
            'args': ['#if important']
        },
        {
            'tokenType': 'chars',
            'args': ['\n\t\t\t\t\t\t\t']
        },
        {
            'tokenType': 'start',
            'args': [
                'td',
                false
            ]
        },
        {
            'tokenType': 'attrStart',
            'args': ['class']
        },
        {
            'tokenType': 'attrValue',
            'args': ['col-xs-1']
        },
        {
            'tokenType': 'attrEnd',
            'args': ['class']
        },
        {
            'tokenType': 'end',
            'args': [
                'td',
                false
            ]
        },
        {
            'tokenType': 'chars',
            'args': ['\n\t\t\t\t\t\t\t\t']
        },
        {
            'tokenType': 'start',
            'args': [
                'span',
                false
            ]
        },
        {
            'tokenType': 'attrStart',
            'args': ['class']
        },
        {
            'tokenType': 'attrValue',
            'args': ['label label-info']
        },
        {
            'tokenType': 'attrEnd',
            'args': ['class']
        },
        {
            'tokenType': 'end',
            'args': [
                'span',
                false
            ]
        },
        {
            'tokenType': 'chars',
            'args': ['important']
        },
        {
            'tokenType': 'close',
            'args': ['span']
        },
        {
            'tokenType': 'chars',
            'args': ['\n\t\t\t\t\t\t\t']
        },
        {
            'tokenType': 'close',
            'args': ['td']
        },
        {
            'tokenType': 'special',
            'args': ['/if']
        },
        {
            'tokenType': 'chars',
            'args': ['\n\t\t\t\t\t\t']
        },
        {
            'tokenType': 'special',
            'args': ['^if important']
        },
        {
            'tokenType': 'chars',
            'args': ['\n\t\t\t\t\t\t\t']
        },
        {
            'tokenType': 'start',
            'args': [
                'td',
                false
            ]
        },
        {
            'tokenType': 'attrStart',
            'args': ['class']
        },
        {
            'tokenType': 'attrValue',
            'args': ['col-xs-1']
        },
        {
            'tokenType': 'attrEnd',
            'args': ['class']
        },
        {
            'tokenType': 'end',
            'args': [
                'td',
                false
            ]
        },
        {
            'tokenType': 'start',
            'args': [
                'span',
                false
            ]
        },
        {
            'tokenType': 'end',
            'args': [
                'span',
                false
            ]
        },
        {
            'tokenType': 'chars',
            'args': ['&nbsp;']
        },
        {
            'tokenType': 'close',
            'args': ['span']
        },
        {
            'tokenType': 'close',
            'args': ['td']
        },
        {
            'tokenType': 'special',
            'args': ['/if']
        },
        {
            'tokenType': 'chars',
            'args': ['\n\t\t\t\t\t\t']
        },
        {
            'tokenType': 'start',
            'args': [
                'td',
                false
            ]
        },
        {
            'tokenType': 'attrStart',
            'args': ['can-click']
        },
        {
            'tokenType': 'attrValue',
            'args': ['{openEmail id}']
        },
        {
            'tokenType': 'attrEnd',
            'args': ['can-click']
        },
        {
            'tokenType': 'attrStart',
            'args': ['class']
        },
        {
            'tokenType': 'attrValue',
            'args': ['col-xs-10']
        },
        {
            'tokenType': 'attrEnd',
            'args': ['class']
        },
        {
            'tokenType': 'end',
            'args': [
                'td',
                false
            ]
        },
        {
            'tokenType': 'chars',
            'args': ['\n\t\t\t\t\t\t\t']
        },
        {
            'tokenType': 'start',
            'args': [
                'span',
                false
            ]
        },
        {
            'tokenType': 'end',
            'args': [
                'span',
                false
            ]
        },
        {
            'tokenType': 'chars',
            'args': ['\n\t\t\t\t\t\t\t\t']
        },
        {
            'tokenType': 'special',
            'args': ['format subject']
        },
        {
            'tokenType': 'close',
            'args': ['span']
        },
        {
            'tokenType': 'chars',
            'args': [' - \n\t\t\t\t\t\t\t\t']
        },
        {
            'tokenType': 'start',
            'args': [
                'span',
                false
            ]
        },
        {
            'tokenType': 'end',
            'args': [
                'span',
                false
            ]
        },
        {
            'tokenType': 'chars',
            'args': ['\n\t\t\t\t\t\t\t\t\t']
        },
        {
            'tokenType': 'close',
            'args': ['span']
        },
        {
            'tokenType': 'start',
            'args': [
                'a',
                false
            ]
        },
        {
            'tokenType': 'attrStart',
            'args': ['href']
        },
        {
            'tokenType': 'attrValue',
            'args': ['javascript://']
        },
        {
            'tokenType': 'attrEnd',
            'args': ['href']
        },
        {
            'tokenType': 'end',
            'args': [
                'a',
                false
            ]
        },
        {
            'tokenType': 'special',
            'args': ['format message']
        },
        {
            'tokenType': 'close',
            'args': ['a']
        },
        {
            'tokenType': 'chars',
            'args': ['\n\t\t\t\t\t\t\t\t']
        },
        {
            'tokenType': 'chars',
            'args': [' \n\t\t\t\t\t\t']
        },
        {
            'tokenType': 'close',
            'args': ['td']
        },
        {
            'tokenType': 'chars',
            'args': ['\n\n\t\t\t\t\t']
        },
        {
            'tokenType': 'close',
            'args': ['tr']
        },
        {
            'tokenType': 'special',
            'args': ['/each']
        },
        {
            'tokenType': 'chars',
            'args': ['\n\t\t\t']
        },
        {
            'tokenType': 'close',
            'args': ['tbody']
        },
        {
            'tokenType': 'chars',
            'args': ['\n\t\t']
        },
        {
            'tokenType': 'close',
            'args': ['table']
        },
        {
            'tokenType': 'special',
            'args': ['else']
        },
        {
            'tokenType': 'chars',
            'args': ['\n\tThe ']
        },
        {
            'tokenType': 'special',
            'args': ['folder']
        },
        {
            'tokenType': 'chars',
            'args': [' is empty']
        },
        {
            'tokenType': 'special',
            'args': ['/if']
        },
        {
            'tokenType': 'chars',
            'args': ['\n']
        },
        {
            'tokenType': 'close',
            'args': ['div']
        },
        {
            'tokenType': 'done',
            'args': []
        }
    ]);
module.exports = function (scope, options) {
    var moduleOptions = { module: module };
    if (!(options instanceof mustacheCore.Options)) {
        options = new mustacheCore.Options(options || {});
    }
    return renderer(scope, options.add(moduleOptions));
};