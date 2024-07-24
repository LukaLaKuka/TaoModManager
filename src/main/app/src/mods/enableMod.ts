import path from "node:path";
import { MODSDIR } from "../../../config/paths";
import { getPathFilename } from "../../../modules/fs/getName";
import { ModRepository } from "./modRepository";
import { mvDir } from "../../../modules/fs/mvDir";
import { ModStatus } from "../../entities/Mod";

export async function enableMod(realname) {
    const MR = new ModRepository();
    let mod = await MR.findByRealname(realname);
    let modName = getPathFilename(mod.path);
    let newPath = path.join(MODSDIR, modName);
    mvDir(mod.path, newPath);
    mod.status = ModStatus.ENABLED;
    mod.path = newPath;
    MR.update(realname, mod);
}