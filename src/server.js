import './models';

import express from 'express';
import expressGraphQL from 'express-graphql';
import mongoose from 'mongoose';
import session from 'express-session';
import passport from 'passport';
import connectmongo from 'connect-mongo';
import schema from './schema/schema';

const MongoStore = connectmongo(session);

require('dotenv').config();

const app = express();

mongoose.Promise = global.Promise;

mongoose.connect(process.env.MONGO_URI);
mongoose.connection
        .once('open', () => console.log('Connected to MLab instance.'))
        .on('error', error => console.log('Error connecting to MLab: ', error));

app.use(session({
    resave: true,
    saveUninitialized: true,
    secret: process.env.SESSION_SECRET,
    store: new MongoStore({
        url: process.env.MONGO_URI,
        autoReconnect: true
    })
}));

app.use(passport.initialize());
app.use(passport.session());

app.use('/graphql', expressGraphQL({
    schema,
    graphiql: true
}));

export default app;
