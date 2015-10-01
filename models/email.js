import can from "can";

let Email = can.Model.extend({
        findAll: 'GET /api/emails',
        destroy: 'DELETE /api/emails/{id}',
        findOne: 'GET /api/emails/{id}'

    }, {});
   
    Email.List = Email.List.extend({

        filterByFolder: function(folder) {
            return this.filter(function(email) {
                return (email.attr('folders').indexOf(folder) > -1);
            })
        }
    });

export default Email;

