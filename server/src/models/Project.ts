import mongoose, { Schema, Document } from 'mongoose';

export interface Project extends Document {
  id: string;
  author: string;
  width: number;
  height: number;
  url: string;
  download_url: string;
  title?: string;
  description?: string;
}

const projectSchema: Schema = new Schema({
  id: { type: String, required: true },
  author: { type: String, required: true },
  width: { type: Number, required: true },
  height: { type: Number, required: true },
  url: { type: String, required: true },
  download_url: { type: String, required: true },
  title: { type: String },
  description: { type: String },
});

const ProjectModel = mongoose.model<Project>('Project', projectSchema);

export default ProjectModel;
