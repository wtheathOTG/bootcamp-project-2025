'use server';

import connectDB from "@/database/db";
import {Project, ProjectDoc} from "@/database/projectSchema";

export async function getAllProjects(): Promise<ProjectDoc[]> {
    await connectDB();

    try {
        const docs = await Project.find().lean<ProjectDoc[]>();
        return docs;
    } catch (err) {
        return [];
    }
}