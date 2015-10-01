import can from "can";

import template from "./emails.stache!";
import "./emails.less!";

can.Component.extend({
	tag:'ui-emails',
	template,
	viewModel:{
		openEmail:function(id)
		{
			let rootVM = this.attr('@root');
			if(id)
			{
				rootVM.attr('emailId',id);
			}
		},
		toggle:function(item)
		{
			let selected = this.attr('@root').attr('selected'),
                index = selected.indexOf(item);

            if (index >= 0) {
                selected.splice(index, 1);
            } else {
                selected.push(item);
            }
		}
	},
	helpers: {
		format: function(text) {
            if (can.isFunction(text)) {
            	text = text();
            }
        	return text.length > 70 ? text.slice(0, 70) + '...' : text;
        },
        isSelected:function(options) {
        	let rootVM = this.attr('@root');
        	let selected = rootVM.attr('selected');

        	if (selected.indexOf(options.context) >= 0) {
                return options.fn();
            }
            
			return options.inverse();
        }
	}
});