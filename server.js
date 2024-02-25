const { app } = require('./index');
const config = require('./config/config');
const port = config.server.port;

app.listen(port, () => {
    console.log(`Server running on port ${port}`);
});

module.exports = app
