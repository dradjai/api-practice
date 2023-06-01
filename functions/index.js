import functions from "firebase-functions";
import express from "express";
import cors from "cors";

const app = express();

app.use(cors());
app.use(express.json());

// APIs

app.get('/hello', (req, res) => {
  res.status(201).send('Hello World api');
})



export const api = functions.https.onRequest(app);
