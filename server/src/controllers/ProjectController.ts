import { Project } from "../constants";
import connectDB from "../db";
import ProjectModel from "../models/Project";
import { Response, Request } from "express";
import { Error } from "mongoose";


export const getProjects = async (req: Request, res: Response) => {
  try {
    const projects = await ProjectModel.find();
    res.status(200).json(projects);
  } catch (error: any) {
    res.status(404).json({ message: error.message });
  }
}


export const getSpecProjects = async (req: Request, res: Response) => {
  const { id } = req.params;
  try {
    const project = await ProjectModel.findOne({ id: id });
    res.status(200).json(project);
  } catch (error: any) {
    res.status(404).json({ message: error.message });
  }
}

export async function createProject(req: Request, res: Response) {
  const projectData = req.body;
  try {
    const result = await ProjectModel.create(projectData);
    res.status(200).json(result);
  } catch (error: any) {
    console.error('Error creating project:', error);
    res.status(500).json({ error: projectData });
  }
}


// Update Operation
export const updateProject = async (req: Request, res: Response) => {
  const id = req.params.id;
  try {
    const updatedStudent = await ProjectModel.findOneAndUpdate({ id: id }, req.body, { new: true });
    res.status(200).json(updatedStudent);
  } catch (error: any) {
    res.status(400).json({ message: error.message });
  }
}

// Delete Operation
export const deleteProject = async (req: Request, res: Response) => {
  const id = req.params.id;
  try {
    await ProjectModel.findOneAndDelete({ id: id });
    res.status(204).json({ message: "Project deleted successfully" });
  } catch (error: any) {
    res.status(400).json({ message: error.message });
  }
}
