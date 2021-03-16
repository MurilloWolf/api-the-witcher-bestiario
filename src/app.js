import mongoose from 'mongoose';
import express from 'express';
import cors from 'cors';

class App {
    constructor() {
        this.server = express();
        this.applyMidleware();
        this.connectDB()
    }

    applyMidleware() {
        this.server.use(cors());
        this.server.use(express.json());
    }

    async connectDB() {
        const uri = "mongodb+srv://thewitcher:thewitcherbestiario@thewitcherbestiario.1087j.mongodb.net/bestiario?retryWrites=true&w=majority";
        const connected = await mongoose.connect(uri,
            { useNewUrlParser: true, useUnifiedTopology: true });
        connected ? console.log('Conectado com o banco ') : console.log('Erro ao conectar ');
    };


}

export default new App().server;
