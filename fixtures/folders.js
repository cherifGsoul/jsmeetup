import fixture from 'can/util/fixture/';

can.fixture({
    "GET /api/folders": function() {
        return [{
            id: 'inbox',
            name: "Inbox"
        }, {
            id: 'sent',
            name: "Sent"
        }, {
            id: 'later',
            name: "Later",
        }, {
            id: 'trash',
            name: "Trash"
        }]
    }
});

export default fixture;