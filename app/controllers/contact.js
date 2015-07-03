module.exports = function (app) {

    var controller = {};

    controller.list = function (req, res) {
        res.json(app.data.contacts);
    };

    controller.show = function (req, res) {

        var id = req.params.id;
        var contact = app.data.contacts.filter(function (contact) {
            return contact.id == id;
        })[0];

        contact ? res.json(contact) : res.status(404).send('Contact not found!');

        res.json(app.data.contacts);

    };

    controller.delete = function (req, res) {

        var id = req.params.id;

        var contacts = app.data.contacts.filter(function (contact) {
            return contact.id != id;
        });

        res.send(contacts).end();

    };

    return controller;

};