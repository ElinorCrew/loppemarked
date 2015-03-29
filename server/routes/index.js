var models = require('../models'),
    express = require('express'),
    router = express.Router();

router.param('model', function (req, res, next, model) {
    req.model = models.sequelize.model(model);
    return next();
});

router.get('/', function (req, res) {
    res.send('please select a model, e.g., /markets');
});

router.get('/:model(\\w+)', function (req, res, next) {
    req.model.findAll()
        .error(next)
        .success(function (models) {
            res.json(models);
        });
});

router.post('/:model(\\w+)', function (req, res, next) {
    req.model.create(req.body)
        .error(next)
        .success(function (model) {
            res.json(model);
        });
});

router.get('/:model(\\w+)/:id([0-9]+)', function (req, res, next) {
    req.model.find(req.params.id)
        .success(function (model) {
            res.json(model);
        })
        .error(next);
});

router.put('/:model(\\w+)/:id([0-9]+)', function (req, res, next) {
    req.model.find(req.params.id)
        .success(function (model) {
            model.update(req.body)
                .error(next)
                .success(res.send('success'));
        });
});

router.delete('/:model(\\w+)/:id([0-9]+)', function (req, res, next) {
    req.model.find(req.params.id)
        .success(function (model) {
            model.destroy()
                .error(next)
                .success(res.send('success'));
        });
});

module.exports = router;
