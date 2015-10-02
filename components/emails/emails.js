import can from "can";
import "can/list/promise/";
import ViewModel from "./viewmodel";

import template from "./emails.stache!";
import "./emails.less!";

can.Component.extend({
	tag:'ui-emails',
	template,
	viewModel: ViewModel,
	helpers: {
		format: function(text) {
            if (can.isFunction(text)) {
            	text = text();
            }
        	return text.length > 70 ? text.slice(0, 70) + '...' : text;
        }
	}
});