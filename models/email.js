import can from "can";

let Email = can.Model.extend({
        resource: '/api/emails',
    }, {});
   
    Email.List = Email.List.extend({

        filterByFolder: function(folder) {
            return this.filter(function(email) {
                return (email.attr('folders').indexOf(folder) > -1);
            })
        }
    });

export default Email;

