import { ModRepository } from "./modRepository";

export async function setModName(realname, newModName) {
    try {
        const MR = new ModRepository();
        let mod = await MR.findByRealname(realname);
        mod.name = newModName;
        await MR.update(realname, mod);
    } catch (e) {

    }
}