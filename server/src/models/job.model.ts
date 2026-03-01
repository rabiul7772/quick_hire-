import mongoose, { Schema, Document } from 'mongoose';

export interface IJob extends Document {
  title: string;
  company: string;
  companyLogo: string;
  location: string;
  category: string;
  type: string;
  tags: string[];
  description: string;
  salary?: string;
  isFeatured: boolean;
  createdAt: Date;
}

const JobSchema: Schema = new Schema(
  {
    title: { type: String, required: true, trim: true },
    company: { type: String, required: true, trim: true },
    companyLogo: { type: String, required: true },
    location: { type: String, required: true, trim: true },
    category: { type: String, required: true, trim: true },
    type: { type: String, required: true, trim: true },
    tags: [{ type: String }],
    description: { type: String, required: true },
    salary: { type: String },
    isFeatured: { type: Boolean, default: false },
    createdAt: { type: Date, default: Date.now }
  },
  {
    timestamps: true
  }
);

export const Job = mongoose.model<IJob>('Job', JobSchema);
