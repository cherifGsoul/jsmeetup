/*app.stache!can@2.3.0-pre.13#view/stache/system*/
define([
    'module',
    'can/view/stache',
    'can/view/stache/mustache_core',
    './components/navigation/navigation',
    './components/toolbar/toolbar',
    './components/emails/emails',
    './components/email/email'
], function (module, stache, mustacheCore) {
    var renderer = stache([
            {
                'tokenType': 'chars',
                'args': ['\n']
            },
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
                'args': ['container-fluid']
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
                'tokenType': 'chars',
                'args': ['\n\t']
            },
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
                'args': ['row']
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
                'tokenType': 'chars',
                'args': ['\n\t\t']
            },
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
                'args': ['col-xs-2']
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
                'tokenType': 'chars',
                'args': ['\n\t\t\t']
            },
            {
                'tokenType': 'start',
                'args': [
                    'can-import',
                    true
                ]
            },
            {
                'tokenType': 'attrStart',
                'args': ['from']
            },
            {
                'tokenType': 'attrValue',
                'args': ['components/navigation/']
            },
            {
                'tokenType': 'attrEnd',
                'args': ['from']
            },
            {
                'tokenType': 'end',
                'args': [
                    'can-import',
                    true
                ]
            },
            {
                'tokenType': 'chars',
                'args': ['\n\t\t\t']
            },
            {
                'tokenType': 'start',
                'args': [
                    'ui-navigation',
                    false
                ]
            },
            {
                'tokenType': 'end',
                'args': [
                    'ui-navigation',
                    false
                ]
            },
            {
                'tokenType': 'close',
                'args': ['ui-navigation']
            },
            {
                'tokenType': 'chars',
                'args': ['\n\t\t']
            },
            {
                'tokenType': 'close',
                'args': ['div']
            },
            {
                'tokenType': 'chars',
                'args': ['\n\t\t']
            },
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
                'args': ['col-xs-10']
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
                'tokenType': 'chars',
                'args': ['\n\t\t\t']
            },
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
                'args': ['row']
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
                'tokenType': 'chars',
                'args': ['\n\t\t\t\t']
            },
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
                'args': ['col-xs-12']
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
                'tokenType': 'chars',
                'args': ['\n\t\t\t\t\t']
            },
            {
                'tokenType': 'start',
                'args': [
                    'can-import',
                    true
                ]
            },
            {
                'tokenType': 'attrStart',
                'args': ['from']
            },
            {
                'tokenType': 'attrValue',
                'args': ['components/toolbar/']
            },
            {
                'tokenType': 'attrEnd',
                'args': ['from']
            },
            {
                'tokenType': 'end',
                'args': [
                    'can-import',
                    true
                ]
            },
            {
                'tokenType': 'chars',
                'args': ['\n\t\t\t\t\t']
            },
            {
                'tokenType': 'start',
                'args': [
                    'ui-toolbar',
                    false
                ]
            },
            {
                'tokenType': 'end',
                'args': [
                    'ui-toolbar',
                    false
                ]
            },
            {
                'tokenType': 'close',
                'args': ['ui-toolbar']
            },
            {
                'tokenType': 'chars',
                'args': ['\n\t\t\t\t']
            },
            {
                'tokenType': 'close',
                'args': ['div']
            },
            {
                'tokenType': 'chars',
                'args': ['\n\t\t\t']
            },
            {
                'tokenType': 'close',
                'args': ['div']
            },
            {
                'tokenType': 'chars',
                'args': ['\n\t\t\t']
            },
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
                'args': ['row']
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
                'tokenType': 'chars',
                'args': ['\n\t\t\t\t']
            },
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
                'args': ['col-xs-6']
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
                'tokenType': 'chars',
                'args': ['\n\t\t\t\t\t']
            },
            {
                'tokenType': 'start',
                'args': [
                    'can-import',
                    true
                ]
            },
            {
                'tokenType': 'attrStart',
                'args': ['from']
            },
            {
                'tokenType': 'attrValue',
                'args': ['components/emails/']
            },
            {
                'tokenType': 'attrEnd',
                'args': ['from']
            },
            {
                'tokenType': 'end',
                'args': [
                    'can-import',
                    true
                ]
            },
            {
                'tokenType': 'chars',
                'args': ['\n\t\t\t\t\t']
            },
            {
                'tokenType': 'start',
                'args': [
                    'ui-emails',
                    false
                ]
            },
            {
                'tokenType': 'attrStart',
                'args': ['emails']
            },
            {
                'tokenType': 'attrValue',
                'args': ['{emails}']
            },
            {
                'tokenType': 'attrEnd',
                'args': ['emails']
            },
            {
                'tokenType': 'end',
                'args': [
                    'ui-emails',
                    false
                ]
            },
            {
                'tokenType': 'close',
                'args': ['ui-emails']
            },
            {
                'tokenType': 'chars',
                'args': ['\n\t\t\t\t\t\n\t\t\t\t']
            },
            {
                'tokenType': 'close',
                'args': ['div']
            },
            {
                'tokenType': 'chars',
                'args': ['\n\t\t\t\t']
            },
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
                'args': ['col-xs-6']
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
                'args': ['#if email']
            },
            {
                'tokenType': 'chars',
                'args': ['\n\t\t\t\t\t\t']
            },
            {
                'tokenType': 'start',
                'args': [
                    'can-import',
                    true
                ]
            },
            {
                'tokenType': 'attrStart',
                'args': ['from']
            },
            {
                'tokenType': 'attrValue',
                'args': ['components/email/']
            },
            {
                'tokenType': 'attrEnd',
                'args': ['from']
            },
            {
                'tokenType': 'end',
                'args': [
                    'can-import',
                    true
                ]
            },
            {
                'tokenType': 'chars',
                'args': ['\n\t\t\t\t\t\t']
            },
            {
                'tokenType': 'start',
                'args': [
                    'ui-email',
                    false
                ]
            },
            {
                'tokenType': 'attrStart',
                'args': ['email']
            },
            {
                'tokenType': 'attrValue',
                'args': ['{email}']
            },
            {
                'tokenType': 'attrEnd',
                'args': ['email']
            },
            {
                'tokenType': 'end',
                'args': [
                    'ui-email',
                    false
                ]
            },
            {
                'tokenType': 'close',
                'args': ['ui-email']
            },
            {
                'tokenType': 'chars',
                'args': ['\t\t\t\t\t\t']
            },
            {
                'tokenType': 'special',
                'args': ['else']
            },
            {
                'tokenType': 'chars',
                'args': ['\n\t\t\t\t\t\tselect an email to view it\'s content']
            },
            {
                'tokenType': 'special',
                'args': ['/if']
            },
            {
                'tokenType': 'chars',
                'args': ['\n\t\t\t\t']
            },
            {
                'tokenType': 'close',
                'args': ['div']
            },
            {
                'tokenType': 'chars',
                'args': ['\n\t\t\t']
            },
            {
                'tokenType': 'close',
                'args': ['div']
            },
            {
                'tokenType': 'chars',
                'args': ['\n\t\t']
            },
            {
                'tokenType': 'close',
                'args': ['div']
            },
            {
                'tokenType': 'chars',
                'args': ['\n\t']
            },
            {
                'tokenType': 'close',
                'args': ['div']
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
                'tokenType': 'chars',
                'args': ['\n\n']
            },
            {
                'tokenType': 'done',
                'args': []
            }
        ]);
    return function (scope, options) {
        var moduleOptions = { module: module };
        if (!(options instanceof mustacheCore.Options)) {
            options = new mustacheCore.Options(options || {});
        }
        return renderer(scope, options.add(moduleOptions));
    };
});