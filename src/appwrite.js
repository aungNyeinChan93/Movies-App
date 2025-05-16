import { Client, Databases } from "appwrite";

const project_id = import.meta.env.VITE_APPWRITE_PROJECT_ID;
const database_id = import.meta.env.VITE_APPWRITE_DATABASE_ID;
const collection_id = import.meta.env.VITE_APPWRITE_COLLECTION_ID;

const client = new Client()
    .setEndpoint(import.meta.env.VITE_APPWRITE_ENDPOINT)
    .setProject(project_id);

const database = new Databases(client);

export const updateSearchCount = async () => {

    // Example: Add a trending movie document to the collection
    try {
        const trendingMovie = {
            title: "Example Trending Movie",
            trending: true,
            addedAt: new Date().toISOString()
        };

        const response = await database.createDocument(
            database_id,
            collection_id,
            'unique()', // Let Appwrite generate a unique ID
            trendingMovie
        );
        return response;
    } catch (error) {
        console.error("Failed to add trending movie:", error);
        throw error;
    }
}