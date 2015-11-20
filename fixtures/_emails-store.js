import fixture from 'can/util/fixture/';
import faker from "faker";

//import "faker/lib/";

faker.locale = "en_US";

let emailStore = fixture.store(20,function(i){
    return {
        id: i,
        contact_id: faker.random.uuid(),
        folders: ["inbox"],
        time: faker.date.past(),
        subject: faker.lorem.sentence(),
        message: faker.lorem.paragraphs()
    }

});

fixture({
    "GET /api/emails":      emailStore.findAll,
    "GET /api/emails/{id}": emailStore.findOne,
    "POST /api/emails":    emailStore.create,
    "PUST /api/emails/{id}": emailStore.update,
    "DELETE /api/emails/{id}": function() {
        return {}
    }
});

export default fixture;