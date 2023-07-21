import express, { Express } from "express";
import dotenv from 'dotenv';
import PasswordlessOptions from "passwordless-nodejs-sdk/types/PasswordlessOptions";
import PasswordlessClient from "passwordless-nodejs-sdk/types/PasswordlessClient";

dotenv.config()

const app: Express = express();

app.get('/', (req, res) => {
    res.send({ok : 'result'});
});

app.get('/test', (req, res) => {
    res.send({ok : 'result'});
});

app.get('/users/:userid/credentials', async (req, res) => {
    const options: PasswordlessOptions = PasswordlessOptions.createWithDotEnv();
    const client: PasswordlessClient = PasswordlessClient.create(options);
    const result = await client.listCredentials(req.params.userid);
    res.send(result);
});

app.listen(5014, () => {
    console.log("App running on 5014 port")
});