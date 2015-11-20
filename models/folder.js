import can from "can";

let Folder = can.Model.extend({
    findAll: 'GET /api/folders'
}, {});

export default Folder;