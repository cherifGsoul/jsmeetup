import can from "can";

import template from "./email.stache!";
import "./email.less!";

can.Component.extend({
	tag:'ui-email',
	template,
});