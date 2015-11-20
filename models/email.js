import can from "can/util/can";
import Contact from "./contact";

let Email = can.Model.extend({
        resource: '/api/emails',
    }, {
    	define: {
    		contact: {
    			Type:Contact
    		}
    	}
});
   
Email.List = Email.List.extend({
	filterByFolder: function(folder) {
        return this.filter(function(email) {
        	return (email.attr('folders').indexOf(folder) > -1);
    	});
	}
});

export default Email;

