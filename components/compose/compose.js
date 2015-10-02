import can from "can";
import template from "./compose.stache!";
import "./compose.less!";

can.Component.extend({
	tag:'ui-compose',
	template,
	viewModel:{
		define:{
			isExpanded:{
				value:false
			}
		},
		expand:function(){
			this.attr('isExpanded',true);
		},
		collapse:function()
		{
			this.attr('isExpanded',false);
		}
	}
})