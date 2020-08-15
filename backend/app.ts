import app from './src/server';

// TODO load env variables

// TODO connect db

// start the app
app.set('port', process.env.PORT || 5000);
app.listen(app.get('port'), () => {
    console.log(`App started on port ${app.get('port')}`);
});
