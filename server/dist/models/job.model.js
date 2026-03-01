import mongoose, { Schema } from 'mongoose';
const JobSchema = new Schema({
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
}, {
    timestamps: true
});
export const Job = mongoose.model('Job', JobSchema);
//# sourceMappingURL=job.model.js.map