import can from "can";
import "can/view/import/";
import "can/map/define/";
import "fixtures/folders";
import "fixtures/contacts";
import "fixtures/emails";

import "./app.less!";

import template from "./app.stache!";

import Folder from "models/folder";
import Email from "models/email";

//can.fixture.delay = 1000;

const AppState = can.Map.extend({
	define: {
		folders:{
			value:new Folder.List({}),
			serialize:false
		},
		folder:{
			set()
			{
				this.attr('selected',[]);
			}
		},
		emails:{
			value: new Email.List({}),
			serialize:false
		},
		email:{
			get(){
				let id = this.attr('emailId'),
				emails = this.attr('emails');

				let email = emails.filter(function(email){
					return email.attr('id') == id;
				});
				
				email = email[0];

				if(email) {
					this.attr('selected').push(email);
				}
				return email;
			}
		},
		selected:{
			value : [],
			serialize:false
		},
		composeMessageOpen: {
			value:false,
			set(val){
				return val === 'true' || val === true;
			},
			serialize:false
		},
	},
	openComposeMessage(){
		this.attr('composeMessageOpen',true);
	},
	closeComposeMessage(){
		this.attr('composeMessageOpen',false);
	}
});


let appState = new AppState();

can.route.map(appState);

can.route(':folder',{folder:'inbox',writeNewEmail:false});
can.route(':folder/:emailId',{emailId:false,writeNewEmail:false});

can.route.ready();




$('body').on('click', 'a[href="javascript://"]', ev => ev.preventDefault());


$('#main-app').html( template(appState) );

export default AppState;