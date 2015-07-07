////////////////////////////////////////////////////////////////////////////////
// Contacts Controller /////////////////////////////////////////////////////////
////////////////////////////////////////////////////////////////////////////////

module.exports = function (app) {

    var controller = {};

    var Contact = app.models.contact;

    controller.list = function (req, res) {

        Contact
            .find()
            .exec()
            .then(function (contacts) {
                res.json(contacts);
            },
            function (error) {
                console.log(error);
                res.status(500).json(error);
            });

    };

    controller.show = function (req, res) {

        var _id = req.params.id;

        Contact
            .findById(_id)
            .exec()
            .then(function (contact) {
                if (!contact) throw new Error('Contact not found!');
                res.json(contact);
            },
            function (error) {
                console.log(error);
                res.status(404).json(error);
            });

    };

    controller.delete = function (req, res) {

        var _id = req.params.id;

        Contact
            .remove({'_id': _id})
            .exec()
            .then(function () {
                res.end();
            },
            function (error) {
                return console.error(error);
            });

    };

    controller.save = function (req, res) {

        var _id = req.body._id;

        if (_id) {

            Contact
                .findByIdAndUpdate(_id, req.body)
                .exec()
                .then(function (contact) {
                    res.json(contact);
                },
                function (error) {
                    console.error(error);
                    res.status(500).json(error);
                });

        } else {

            Contact
                .create(req.body)
                .then(function (contact) {
                    res.status(201).json(contact);
                },
                function (error) {
                    console.error(error);
                    res.status(500).json(error);
                });

        }

    };

    return controller;

};


////////////////////////////////////////////////////////////////////////////////