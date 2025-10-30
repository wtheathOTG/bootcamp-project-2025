import mongoose, {Schema, InferSchemaType, Model} from "mongoose";

const InlineNodeSchema = new Schema(
    {
        type: { type: String, required: true, enum: ['text', 'tooltip'] },
        text: { type: String, trim: true, required: false },
        term: { type: String, trim: true, required: false },
        content: { type: String, trim: true, required: false },
    },
    { _id: false }
);

const ParagraphSchema = new Schema(
    {
        type: { type: String, required: true, enum: ['paragraph'], default: 'paragraph' },
        children: { type: [InlineNodeSchema], default: [] },
    },
    { _id: false }
);

const ProjectSchema = new Schema(
    {
        _id: { type: String, required: true },
        title: { type: String, required: true, trim: true },
        dateStart: { type: Date, required: true },
        dateEnd: { type: Date, default: null },
        description: { type: [ParagraphSchema], default: [] },
        tags: { type: [String], default: [] },
        src: { type: String, required: true, trim: true },
    },
    { versionKey: false }
);

export type ProjectDoc = InferSchemaType<typeof ProjectSchema>;

export const Project: Model<ProjectDoc> =
    mongoose.models.projects || mongoose.model('projects', ProjectSchema);