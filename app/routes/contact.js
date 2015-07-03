module.exports = function (app) {

    var controller = app.controllers.contact;

    app.route('/contacts')
        .get(controller.list);

    app.route('/contacts/:id')
        .get(controller.show)
        .delete(controller.delete);

};