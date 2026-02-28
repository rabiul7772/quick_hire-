import mongoose, { Schema, Document } from 'mongoose';

export interface IApplication extends Document {
  jobId: mongoose.Types.ObjectId;
  name: string;
  email: string;
  resumeLink: string;
  coverNote: string;
  createdAt: Date;
}

const ApplicationSchema: Schema = new Schema(
  {
    jobId: { type: Schema.Types.ObjectId, ref: 'Job', required: true },
    name: { type: String, required: true, trim: true },
    email: { type: String, required: true, trim: true, lowercase: true },
    resumeLink: { type: String, required: true, trim: true },
    coverNote: { type: String, required: true },
    createdAt: { type: Date, default: Date.now }
  },
  {
    timestamps: true
  }
);

export const Application = mongoose.model<IApplication>(
  'Application',
  ApplicationSchema
);
