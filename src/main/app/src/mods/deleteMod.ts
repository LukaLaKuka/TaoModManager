import { rmRecursive } from "../../../modules/fs/rmRecursive";
import { ModRepository } from "./modRepository";

export async function deleteMod(realname) {
    try {
        let MR = new ModRepository();
        let mod = await MR.findByRealname(realname);
        await MR.delete(realname);
        rmRecursive(mod.path);
    } catch {
        console.log(`Error deleting mod ${realname}`);
    }
}