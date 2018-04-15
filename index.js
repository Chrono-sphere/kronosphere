const app = require('./src/server');

app.listen(process.env.PORT, () => {
    console.log('Listening to PORT', process.env.PORT);
});
