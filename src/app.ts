import express from 'express';
import routes from './routes/routes';
import 'reflect-metadata';
import { dbConfig } from './config/dbConfig';



const app =  express();
const PORT = process.env.PORT || 3000;

async function startServer() {
    try{

        await dbConfig.initialize();
        console.log('Database connected');

        app.use(express.json());
        app.use(routes);

        app.listen(PORT, () => {
            console.log(`Server is running on port ${PORT}`);
        });

    }catch(error){
        console.log('Error connecting to the database', error);
        process.exit(1)
    }
}


startServer();




