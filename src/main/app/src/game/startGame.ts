import { MODELIMPORTEREXECUTABLE } from "../../../config/paths";
import { execute, spawnProcess } from "../../../modules/cmd/execute";
import { getGenshinExecPath } from "../mods/config";

export async function startGame() {
    let genshinExecPath = await getGenshinExecPath();
    await execute(MODELIMPORTEREXECUTABLE);
    await spawnProcess(genshinExecPath, true);
}