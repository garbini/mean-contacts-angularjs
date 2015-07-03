module.exports = function (app) {

    var controller = {};

    controller.list = function (req, res) {
        res.json(contacts);
    };

    controller.show = function (req, res) {

        var id = req.params.id;

        var contact = contacts.filter(function (contact) {
            return contact.id == id;
        })[0];

        if (contact)
            res.json(contact);
        else
            res.status(404).send('Contact not found!');

        res.json(contacts);

    };

    controller.delete = function (req, res) {

        var id = req.params.id;

        contacts = contacts.filter(function (contact) {
            return contact.id != id;
        });

        res.status(204).end();

    };

    return controller;

};


////////////////////////////////////////////////////////////////////////////////
// Contacts ////////////////////////////////////////////////////////////////////
////////////////////////////////////////////////////////////////////////////////

var faker = require('faker');

var contacts = [];

for (var i = 1; i < 51; i++) {

    contacts.push({
        id: i,
        name: faker.name.findName(),
        email: faker.internet.email().toLowerCase()
    });

}

////////////////////////////////////////////////////////////////////////////////