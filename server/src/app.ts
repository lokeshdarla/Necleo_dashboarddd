import express from "express"
import cors from "cors"
import cookieParser from "cookie-parser"
import { Request, Response } from 'express';
import projectRouter from "./Routes/Project"
import downloadRouter from "./Routes/Download";
import Reporouter from "./Routes/repositoryRoutes";


const app = express()
app.use(express.json());
app.use(cors())

app.get('/', (req: Request, res: Response) => {
  res.json({ message: "Hello world" });
});

app.use('/projects', projectRouter);
app.use('/repository', Reporouter);
app.use('/download', downloadRouter);

export { app }
