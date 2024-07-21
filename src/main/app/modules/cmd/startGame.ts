import { getGenshinExecPath } from "../mods/config";
import { MODELIMPORTEREXECUTABLE } from "../../config/paths";
import { execute, spawnProcess } from "./execute";

export async function startGame() {
    let genshinExecPath = await getGenshinExecPath();
    await execute(MODELIMPORTEREXECUTABLE);
    await spawnProcess(genshinExecPath, true);
}