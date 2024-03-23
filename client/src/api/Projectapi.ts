import axios from 'axios';
import { Photo } from '../constants';

export async function fetchProjects() {
  try {
    const response = await axios.get('http://localhost:8000/projects');
    return response.data;
  } catch (error) {
    console.error('Error fetching projects:', error);
    throw error;
  }
}
export async function fetchProjectById(projectId: string) {
  try {
    const response = await axios.get(`/api/projects/${projectId}`);
    return response.data;
  } catch (error) {
    console.error('Error fetching project:', error);
    throw error;
  }
}

export async function createProject(newProject: Photo) {
  try {
    const response = await axios.post('http://localhost:8000/projects', newProject);
    return response.data;
  } catch (error) {
    console.error('Error creating project:', error);
    throw error;
  }
}

export async function updateProject(projectId: string, updatedProjectData: Photo) {
  try {
    const response = await axios.put(`/api/projects/${projectId}`, updatedProjectData);
    return response.data;
  } catch (error) {
    console.error('Error updating project:', error);
    throw error;
  }
}


export async function deleteProject(projectId: string) {
  try {
    const response = await axios.delete(`/api/projects/${projectId}`);
    return response.data;
  } catch (error) {
    console.error('Error deleting project:', error);
    throw error;
  }
}
