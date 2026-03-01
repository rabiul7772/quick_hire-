import mongoose, { Schema } from 'mongoose';
const ApplicationSchema = new Schema({
    jobId: { type: Schema.Types.ObjectId, ref: 'Job', required: true },
    name: { type: String, required: true, trim: true },
    email: { type: String, required: true, trim: true, lowercase: true },
    resumeLink: { type: String, required: true, trim: true },
    coverNote: { type: String, required: true },
    createdAt: { type: Date, default: Date.now }
}, {
    timestamps: true
});
export const Application = mongoose.model('Application', ApplicationSchema);
//# sourceMappingURL=application.model.js.map