const express = require('express');

const requestLogger = require('./middleware/request-logger.js');
const errorHandler = require('./middleware/error-handler.js');
const newlendRouter = require('./routers/newlendform.js');
const app = express();

// app.use(requestLogger); // debug only
app.use(express.static('dist', {
    setHeaders: (res, path, stat) => {
        res.set('Cache-Control', 'public, s-maxage=86400');
    }
}));

app.use('/api', newlendRouter);
app.get('/*', (req, res) => res.redirect('/'));
app.use(errorHandler);

const port = 8060;
app.listen(port, () => {
    console.log(`Server is up and running on port ${port}...`);
});