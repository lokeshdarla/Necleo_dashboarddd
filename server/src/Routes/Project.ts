import express from 'express';
import { getProjects, createProject, deleteProject, getSpecProjects, updateProject } from '../controllers/ProjectController';

const projectRouter = express.Router();

projectRouter.get('/', getProjects);
projectRouter.get('/:id', getSpecProjects);
projectRouter.post('/', createProject);
projectRouter.put('/:id', updateProject);
projectRouter.delete('/:id', deleteProject);




export default projectRouter;
