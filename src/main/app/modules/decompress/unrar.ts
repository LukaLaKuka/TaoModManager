import { createExtractorFromFile } from "node-unrar-js";

export async function extractRarArchive(file: string, destination: string) {
    try {
        const extractor = await createExtractorFromFile({
            filepath: file,
            targetPath: destination
        });
        [...extractor.extract().files];
    } catch (err) {
        console.error(err);
    }
}