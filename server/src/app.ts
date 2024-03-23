import express, { Request, Response } from 'express';
import { ProjectFormData } from './constants';
const app = express();
app.use(express.json());

const projects: ProjectFormData[] = [
  {
    id: '1',
    image: 'https://example.com/image1.jpg',
    heading: 'Project 1',
    description: 'Description of Project 1',
  },
  {
    id: '2',
    image: 'https://example.com/image2.jpg',
    heading: 'Project 2',
    description: 'Description of Project 2',
  },
  {
    id: '3',
    image: 'https://example.com/image3.jpg',
    heading: 'Project 3',
    description: 'Description of Project 3',
  },
];

app.post('/projects', (req: Request, res: Response) => {
  const { id, image, heading, description } = req.body;
  const newProject: ProjectFormData = { id, image, heading, description };
  projects.push(newProject);
  res.status(201).json(newProject);
});

// Read Operation
app.get('/projects', (req: Request, res: Response) => {
  res.json(projects);
});

// Update Operation
app.put('/projects/:id', (req: Request, res: Response) => {
  const id = req.params.id;
  const { image, heading, description } = req.body;
  const index = projects.findIndex(project => project.id === id);
  if (index !== -1) {
    projects[index] = { id, image, heading, description };
    res.json(projects[index]);
  } else {
    res.status(404).json({ error: 'Project not found' });
  }
});

// Delete Operation
app.delete('/projects/:id', (req: Request, res: Response) => {
  const id = req.params.id;
  const index = projects.findIndex(project => project.id === id);
  if (index !== -1) {
    projects.splice(index, 1);
    res.status(204).send();
  } else {
    res.status(404).json({ error: 'Project not found' });
  }
});

const PORT = 3000;
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
