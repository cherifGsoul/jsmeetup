/*components/toolbar/toolbar.stache!can@2.3.0-pre.13#view/stache/system*/
define([
    'module',
    'can/view/stache',
    'can/view/stache/mustache_core'
], function (module, stache, mustacheCore) {
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
                'args': ['btn-group']
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
                    'button',
                    false
                ]
            },
            {
                'tokenType': 'attrStart',
                'args': ['class']
            },
            {
                'tokenType': 'attrValue',
                'args': ['btn btn-default move-action mail-action']
            },
            {
                'tokenType': 'attrEnd',
                'args': ['class']
            },
            {
                'tokenType': 'special',
                'args': ['^selected.length']
            },
            {
                'tokenType': 'attrStart',
                'args': ['disabled']
            },
            {
                'tokenType': 'attrValue',
                'args': ['disabled']
            },
            {
                'tokenType': 'attrEnd',
                'args': ['disabled']
            },
            {
                'tokenType': 'special',
                'args': ['/selected.length']
            },
            {
                'tokenType': 'attrStart',
                'args': ['id']
            },
            {
                'tokenType': 'attrValue',
                'args': ['trash']
            },
            {
                'tokenType': 'attrEnd',
                'args': ['id']
            },
            {
                'tokenType': 'end',
                'args': [
                    'button',
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
                    'i',
                    false
                ]
            },
            {
                'tokenType': 'attrStart',
                'args': ['class']
            },
            {
                'tokenType': 'attrValue',
                'args': ['glyphicon glyphicon-trash']
            },
            {
                'tokenType': 'attrEnd',
                'args': ['class']
            },
            {
                'tokenType': 'end',
                'args': [
                    'i',
                    false
                ]
            },
            {
                'tokenType': 'close',
                'args': ['i']
            },
            {
                'tokenType': 'chars',
                'args': ['\n\t\tDelete\n\t']
            },
            {
                'tokenType': 'close',
                'args': ['button']
            },
            {
                'tokenType': 'chars',
                'args': ['\n\t']
            },
            {
                'tokenType': 'start',
                'args': [
                    'button',
                    false
                ]
            },
            {
                'tokenType': 'attrStart',
                'args': ['class']
            },
            {
                'tokenType': 'attrValue',
                'args': ['btn btn-default ']
            },
            {
                'tokenType': 'special',
                'args': ['^selected.length']
            },
            {
                'tokenType': 'attrValue',
                'args': ['disabled']
            },
            {
                'tokenType': 'special',
                'args': ['/selected.length']
            },
            {
                'tokenType': 'attrValue',
                'args': [' mail-action']
            },
            {
                'tokenType': 'attrEnd',
                'args': ['class']
            },
            {
                'tokenType': 'attrStart',
                'args': ['id']
            },
            {
                'tokenType': 'attrValue',
                'args': ['move']
            },
            {
                'tokenType': 'attrEnd',
                'args': ['id']
            },
            {
                'tokenType': 'end',
                'args': [
                    'button',
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
                    'i',
                    false
                ]
            },
            {
                'tokenType': 'attrStart',
                'args': ['class']
            },
            {
                'tokenType': 'attrValue',
                'args': ['glyphicon glyphicon-move']
            },
            {
                'tokenType': 'attrEnd',
                'args': ['class']
            },
            {
                'tokenType': 'end',
                'args': [
                    'i',
                    false
                ]
            },
            {
                'tokenType': 'close',
                'args': ['i']
            },
            {
                'tokenType': 'chars',
                'args': ['\n\t\tMove\n\t']
            },
            {
                'tokenType': 'close',
                'args': ['button']
            },
            {
                'tokenType': 'chars',
                'args': ['\n\t']
            },
            {
                'tokenType': 'start',
                'args': [
                    'button',
                    false
                ]
            },
            {
                'tokenType': 'attrStart',
                'args': ['class']
            },
            {
                'tokenType': 'attrValue',
                'args': ['btn btn-default mail-action']
            },
            {
                'tokenType': 'attrEnd',
                'args': ['class']
            },
            {
                'tokenType': 'special',
                'args': ['#enableForOne selected.length']
            },
            {
                'tokenType': 'attrStart',
                'args': ['disabled']
            },
            {
                'tokenType': 'attrValue',
                'args': ['disabled']
            },
            {
                'tokenType': 'attrEnd',
                'args': ['disabled']
            },
            {
                'tokenType': 'special',
                'args': ['/enableForOne']
            },
            {
                'tokenType': 'end',
                'args': [
                    'button',
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
                    'i',
                    false
                ]
            },
            {
                'tokenType': 'attrStart',
                'args': ['class']
            },
            {
                'tokenType': 'attrValue',
                'args': ['glyphicon glyphicon-arrow-right']
            },
            {
                'tokenType': 'attrEnd',
                'args': ['class']
            },
            {
                'tokenType': 'end',
                'args': [
                    'i',
                    false
                ]
            },
            {
                'tokenType': 'close',
                'args': ['i']
            },
            {
                'tokenType': 'chars',
                'args': ['\n\t\tForward\n\t']
            },
            {
                'tokenType': 'close',
                'args': ['button']
            },
            {
                'tokenType': 'chars',
                'args': ['\n\t']
            },
            {
                'tokenType': 'start',
                'args': [
                    'button',
                    false
                ]
            },
            {
                'tokenType': 'attrStart',
                'args': ['class']
            },
            {
                'tokenType': 'attrValue',
                'args': ['btn btn-default mail-action']
            },
            {
                'tokenType': 'attrEnd',
                'args': ['class']
            },
            {
                'tokenType': 'special',
                'args': ['#enableForOne selected.length']
            },
            {
                'tokenType': 'attrStart',
                'args': ['disabled']
            },
            {
                'tokenType': 'attrValue',
                'args': ['disabled']
            },
            {
                'tokenType': 'attrEnd',
                'args': ['disabled']
            },
            {
                'tokenType': 'special',
                'args': ['/enableForOne']
            },
            {
                'tokenType': 'end',
                'args': [
                    'button',
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
                    'i',
                    false
                ]
            },
            {
                'tokenType': 'attrStart',
                'args': ['class']
            },
            {
                'tokenType': 'attrValue',
                'args': ['glyphicon glyphicon-pencil']
            },
            {
                'tokenType': 'attrEnd',
                'args': ['class']
            },
            {
                'tokenType': 'end',
                'args': [
                    'i',
                    false
                ]
            },
            {
                'tokenType': 'close',
                'args': ['i']
            },
            {
                'tokenType': 'chars',
                'args': ['\n\t\tReply\n\t']
            },
            {
                'tokenType': 'close',
                'args': ['button']
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
    return function (scope, options) {
        var moduleOptions = { module: module };
        if (!(options instanceof mustacheCore.Options)) {
            options = new mustacheCore.Options(options || {});
        }
        return renderer(scope, options.add(moduleOptions));
    };
});