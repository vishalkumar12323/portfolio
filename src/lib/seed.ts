import { connectDB } from "@/lib/mongodb";
import Project from "@/models/Project";
import { projectData } from "../../projects";
import dotenv from "dotenv";
dotenv.config();



async function seed() {
    try {
        console.log("connecting to database....");
        await connectDB();
        console.log("database connected...");

        const response = await Project.create(projectData);
        // const res = await Project.deleteMany();
        console.log(`Inserted ${response.length} documents to the database...`);
        // console.log(`Deleted ${res.deletedCount} documents from the database...`);

    } catch (err) {
        console.log("Error seeding data:: ", err);

    }
    return;
};

seed();