'use server';

import connectDB from "@/database/db";
import {Project, ProjectDoc} from "@/database/projectSchema";
import mongoose from "mongoose";

export async function getAllProjects(): Promise<ProjectDoc[]> {
    await connectDB();

    try {
        const docs = await Project.find();
        console.log({
            db: mongoose.connection?.name,
            coll: Project.collection.collectionName,
            count: docs.length,
        });
        return docs;
    } catch (err) {
        console.error("getAllProjects error:", err);
        throw err; // don’t swallow it while debugging
    }
}