import mongoose from 'mongoose';
import express from 'express';
import cors from 'cors';
import routes from './routes'
import { dbPassword, dbUserName, dbCollection } from './config'
class App {
    constructor() {
        this.server = express();
        this.applyMidleware();
        this.connectDB()
    }

    applyMidleware() {
        this.server.use(cors());
        this.server.use(express.json());
        this.useRoutes()
    }

    useRoutes() {
        this.server.use(routes)
    }

    async connectDB() {
        try {
            const uri = `mongodb+srv://${process.env.DB_USERNAME}:${process.env.DB_PASSWORD}@thewitcherbestiario.1087j.mongodb.net/${process.env.DB_COLLECTION}?retryWrites=true&w=majority`;
            console.log('URI')
            console.log(uri)
            const connected = await mongoose.connect(uri,
                { useNewUrlParser: true, useUnifiedTopology: true });
            connected ? console.log('Conectado com o banco ') : console.log('Erro ao conectar ');
        }
        catch (err) {
            console.log(err)
        }
    };

}

export default new App().server;
