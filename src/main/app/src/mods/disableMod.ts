import path from "path";
import { DISABLEDMODSDIR } from "../../../config/paths";
import { getPathFilename } from "../../../modules/fs/getName";
import { mvDir } from "../../../modules/fs/mvDir";
import { ModRepository } from "./modRepository";
import { ModStatus } from "../../entities/Mod";

export async function disableMod(realname: string) {
    const MR = new ModRepository();
    let mod = await MR.findByRealname(realname);
    let modName = getPathFilename(mod.path);
    let newPath = path.join(DISABLEDMODSDIR, modName);
    mvDir(mod.path, newPath);
    mod.status = ModStatus.DISABLED;
    mod.path = newPath;
    MR.update(realname, mod);
}