import express from "express"
import cors from "cors"
import cookieParser from "cookie-parser"
import projectRouter from "./Routes/Project"
import { Request, Response } from 'express';

const app = express()
app.use(express.json());

app.use(cors())


app.get('/', (req: Request, res: Response) => {
  res.json({ message: "Hello world" });
});

app.use('/projects', projectRouter);

export { app }
