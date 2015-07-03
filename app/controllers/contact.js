////////////////////////////////////////////////////////////////////////////////
// Contacts Controller /////////////////////////////////////////////////////////
////////////////////////////////////////////////////////////////////////////////

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

    controller.save = function (req, res) {

        var contact = req.body;

        contact = contact.id ? update(contact) : create(contact);

        res.json(contact);

    };

    var update = function (existingContact) {

        contacts = contacts.map(function (contact) {

            if (contact.id == existingContact.id) {
                contact = existingContact;
            }

            return contact;

        });

        return existingContact;

    };

    var create = function (contact) {

        contact.id = ++ID_CONTACT_INC;
        contacts.push(contact);

        return contact;

    };

    return controller;

};


////////////////////////////////////////////////////////////////////////////////
// Contacts Data ///////////////////////////////////////////////////////////////
////////////////////////////////////////////////////////////////////////////////

var faker = require('faker');

var contacts = [];

for (var i = 1; i < 21; i++) {

    contacts.push({
        id: i,
        name: faker.name.findName(),
        email: faker.internet.email().toLowerCase()
    });

}

var ID_CONTACT_INC = contacts.length;

////////////////////////////////////////////////////////////////////////////////