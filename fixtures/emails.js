import fixture from 'can/util/fixture/';
import faker from "faker";

//import "faker/lib/";

faker.locale = "en_US";

let emailStore = fixture.store(120,function(i){
    return {
        id: i,
        contact_id: faker.random.uuid(),
        folders: faker.helpers.randomize(["inbox","sent","later","trash"]),
        time: faker.date.past(),
        important: faker.random.boolean(),
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