import can from "can";
import template from "./toolbar.stache!";
import "./toolbar.less!";

can.Component.extend({
	tag:'ui-toolbar',
	template,
	helpers:{
		enableForOne:function(length,options){
			if (can.isFunction(length)) {
            	var length = length();
            }

            if (length != 1) {
            	return options.fn();
            }
            return options.inverse();
            
		}
	}
});