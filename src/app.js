import mongoose from 'mongoose';
import express from 'express';
import cors from 'cors';
import routes from './routes'
import dotenv from 'dotenv'
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
            dotenv.config()
            const uri = process.env.MONGO_URL;
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
