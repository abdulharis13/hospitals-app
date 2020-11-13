const admin = require('./admin');

const routers = [
    ...admin
];

const router = (app) => {
    app.use(routers)
};

module.exports = router;
