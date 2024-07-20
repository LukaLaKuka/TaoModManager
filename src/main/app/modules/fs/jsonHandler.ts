import { JsonHandler } from "@tomhuel/jsonhandler";
import path from "path";
import { CONFIGDIR } from "../../config/paths";

export function setConfig(key: string, value: string | any[] | object) {
    let configJH = new JsonHandler(path.join(CONFIGDIR, 'config'));
    configJH.setProperty(key, value);
}

export function getConfig(key: string) {
    let configJH = new JsonHandler(path.join(CONFIGDIR, 'config'));
    return configJH.getProperty(key);
}