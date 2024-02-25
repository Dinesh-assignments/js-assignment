const News = require('../controllers/news');

module.exports = function(app) {
    app.route('/add/news').post(async (req, res, next) => {
        try {
            await News.addNews(req.body);
            return res.json({
                "status": "Success",
                "message": "Added News Successfully"
            });
        } catch (err) {
            return next(err);
        }
    });

    app.route('/match/news').get(async (req, res, next) => {
        try {
            let params = req.query;
            let result = await News.getNewsByMatchId(params);
            return res.json(result);
        } catch (err) {
            return next(err);
        }
    });

    app.route('/sport/news').get(async (req, res, next) => {
        try {
            let params = req.query;
            let result = await News.getNewsBySportId(params);
            return res.json(result);
        } catch (err) {
            return next(err);
        }
    });

    app.route('/tour/news').get(async (req, res, next) => {
        try {
            let params = req.query;
            let result = await News.getNewsByTourId(params);
            return res.json(result);
        } catch (err) {
            return next(err);
        }
    });
}