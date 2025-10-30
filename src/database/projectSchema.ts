import mongoose, {Schema, Model} from "mongoose";

export type InlineNodeDoc = {
    type: string;
    text?: string;
    term?: string;
    content?: string;
};

const InlineNodeSchema = new Schema<InlineNodeDoc>(
    {
        type: { type: String, required: true, enum: ['text', 'tooltip'] },
        text: { type: String, trim: true, required: false },
        term: { type: String, trim: true, required: false },
        content: { type: String, trim: true, required: false },
    },
    { _id: false }
);

export type ParagraphDoc = {
    type: string;
    children: InlineNodeDoc[];
};

const ParagraphSchema = new Schema<ParagraphDoc>(
    {
        type: { type: String, required: true, enum: ['paragraph'], default: 'paragraph' },
        children: { type: [InlineNodeSchema], default: [] },
    },
    { _id: false }
);

export type ProjectDoc = {
    _id: string;
    title: string;
    dateStart: Date;
    dateEnd?: Date;
    description: ParagraphDoc[];
    tags: string[];
    src: string;
}

const ProjectSchema = new Schema<ProjectDoc>(
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

export const Project: Model<ProjectDoc> =
    mongoose.models.projects || mongoose.model<ProjectDoc>('projects', ProjectSchema);