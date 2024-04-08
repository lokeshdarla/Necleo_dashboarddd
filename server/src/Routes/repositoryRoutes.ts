import express from 'express';
import { downloadRepository } from '../controllers/repositoryController';

const Reporouter = express.Router();

Reporouter.get('/:owner/:repo', downloadRepository);

export default Reporouter;
