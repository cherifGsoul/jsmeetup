import can from "can";
import ViewModel from "./viewmodel";
import template from "./email.stache!";
import "./email.less!";

can.Component.extend({
	tag:'ui-email',
	template,
	viewModel:ViewModel
});