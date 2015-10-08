import can from "can";
import "can/map/define/";
import Email from "models/email";

export default can.Map.extend({
	init:function()
	{
		console.log(this);
	},
	define:{
		email:{
			get(){

				var id = this.attr('emailId'),
				emails = this.attr('emails'),
				fetchedEmail;

				if(emails && emails.attr('length') && id )
				{
					var filtred = emails.filter(function(email){
						return id == email.attr('id');
					});

					if(filtred.length === 1 )
					{
						return filtred[0];
					}
				}

				if (this.attr('emailId'))
				{
					fetchedEmail = can.compute({
						isPending: true
					});
					
					Email.findOne({id:id}).then(function(email){
						   fetchedEmail(email)
						}, function() {
								fetchedEmail({
									error:'There was a problem with email fetching'
								})
						}
					);
				}

				return fetchedEmail;
			}
		}
	}
});
