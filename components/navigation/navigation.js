import can from "can";

import template from "./navigation.stache!";

import "./navigation.less!";

can.Component.extend({
	tag:'ui-navigation',
	template,
	helpers:{
		icon:function(folder,options) {
			if(can.isFunction(folder)) {
				folder = folder();
			}

			if(folder === 'inbox') {
				return 'glyphicon-envelope';
			}

			if(folder === 'sent') {
				return 'glyphicon-folder-close';
			}

			if(folder === 'later') {
				return 'glyphicon-hourglass';
			}

			if(folder === 'trash') {
				return "glyphicon-trash";
			}

		}
	}
});